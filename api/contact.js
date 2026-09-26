const nodemailer = require('nodemailer')

const safeErrorDetails = (error) => ({
  message: error?.message,
  code: error?.code,
  command: error?.command,
  responseCode: error?.responseCode,
  response: error?.response
})

const SUBJECT_LABELS = {
  appointment: 'Book Appointment',
  general: 'General Enquiry',
  prescription: 'Prescription Refill',
  other: 'Other'
}

const FIELD_LIMITS = {
  name: 150,
  email: 254,
  phone: 50,
  message: 5000
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000

// In-memory, so best-effort only: the count resets whenever the serverless
// instance is recycled, but it still stops bursts against a warm instance.
const recentByIp = new Map()

const isRateLimited = (ip) => {
  const now = Date.now()
  const cutoff = now - RATE_LIMIT_WINDOW_MS
  for (const [key, timestamps] of recentByIp) {
    const active = timestamps.filter((t) => t > cutoff)
    if (active.length === 0) recentByIp.delete(key)
    else recentByIp.set(key, active)
  }
  const attempts = recentByIp.get(ip) || []
  if (attempts.length >= RATE_LIMIT_MAX) return true
  attempts.push(now)
  recentByIp.set(ip, attempts)
  return false
}

const getClientIp = (req) => {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim()
  }
  return req.socket?.remoteAddress || 'unknown'
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, subject, message, company } = req.body || {}

  // Honeypot filled in — a bot. Pretend success so it doesn't adapt.
  if (typeof company === 'string' && company.trim().length > 0) {
    return res.status(200).json({ ok: true })
  }

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: 'Please complete all required fields.' })
  }

  for (const [field, limit] of Object.entries(FIELD_LIMITS)) {
    const value = req.body[field]
    if (typeof value !== 'string' || value.length > limit) {
      return res.status(400).json({ error: 'One of the fields is too long. Please shorten it and try again.' })
    }
  }

  if (!EMAIL_PATTERN.test(email.trim())) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }

  if (!SUBJECT_LABELS[subject]) {
    return res.status(400).json({ error: 'Please select a valid subject.' })
  }

  if (isRateLimited(getClientIp(req))) {
    return res.status(429).json({ error: 'Too many messages sent. Please wait a few minutes and try again, or call the practice on 021 696 4132.' })
  }

  const smtpHost = process.env.SMTP_HOST
  const smtpPort = Number(process.env.SMTP_PORT || 465)
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const contactTo = process.env.CONTACT_TO || 'info@drmagerman.co.za'
  const contactFrom = process.env.CONTACT_FROM || smtpUser

  if (!smtpHost || !smtpUser || !smtpPass || !contactFrom) {
    return res.status(500).json({ error: 'Email service is not configured yet.' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000
    })

    await transporter.verify()

    const selectedSubject = SUBJECT_LABELS[subject] || 'Website Enquiry'

    const textBody = [
      `Subject: ${selectedSubject}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      '',
      message
    ].join('\n')

    const escaped = (value) =>
      String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')

    const htmlBody = `
      <h2>New website enquiry</h2>
      <p><strong>Subject:</strong> ${escaped(selectedSubject)}</p>
      <p><strong>Name:</strong> ${escaped(name)}</p>
      <p><strong>Email:</strong> ${escaped(email)}</p>
      <p><strong>Phone:</strong> ${escaped(phone)}</p>
      <p><strong>Message:</strong></p>
      <p>${escaped(message).replace(/\n/g, '<br>')}</p>
    `

    await transporter.sendMail({
      from: contactFrom,
      to: contactTo,
      replyTo: email,
      subject: `[Website] ${selectedSubject} - ${name}`,
      text: textBody,
      html: htmlBody
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('[api/contact] mail send failed', safeErrorDetails(error))
    return res.status(500).json({ error: 'Failed to send your enquiry. Please try again.', code: error?.code || 'SMTP_SEND_FAILED' })
  }
}
