let isInitialized = false
let measurementId = ''

export function initAnalytics() {
  if (typeof window === 'undefined' || isInitialized) return

  measurementId = (import.meta.env.VITE_GA_MEASUREMENT_ID || '').trim()
  if (!measurementId) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = window.gtag || gtag

  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    send_page_view: false
  })

  isInitialized = true
}

export function trackPageView(path) {
  if (typeof window === 'undefined' || !isInitialized || !window.gtag || !measurementId) return

  const pagePath = path || window.location.pathname + window.location.search
  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_location: window.location.origin + pagePath,
    page_title: document.title || undefined
  })
}
