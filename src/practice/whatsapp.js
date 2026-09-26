const DEFAULT_MESSAGE = "Hello, I'd like to book an appointment with Dr Magerman."

export function getWhatsAppNumber() {
  return (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '')
}

export function isWhatsAppEnabled() {
  return getWhatsAppNumber().length > 0
}

export function getWhatsAppLink(message = DEFAULT_MESSAGE) {
  const number = getWhatsAppNumber()
  if (!number) return ''
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
