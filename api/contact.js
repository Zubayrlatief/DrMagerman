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

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, subject, message } = req.body || {}

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: 'Please complete all required fields.' })
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
