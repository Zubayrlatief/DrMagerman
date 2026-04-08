/**
 * Canonical site origin for meta tags, JSON-LD, and sitemap alignment.
 * Set VITE_SITE_URL in .env (e.g. https://www.drmagerman.co.za) — no trailing slash.
 */
export function getSiteUrl() {
  const raw = (import.meta.env.VITE_SITE_URL || 'https://www.drmagerman.co.za').trim()
  return raw.replace(/\/$/, '')
}

export function absoluteUrl(path) {
  const base = getSiteUrl()
  const p = path.startsWith('/') ? path : `/${path}`
  return `${base}${p}`
}
