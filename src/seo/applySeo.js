import { getSiteUrl, absoluteUrl } from './siteConfig'

function setMetaName(name, content) {
  if (!content) return
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setMetaProperty(property, content) {
  if (!content) return
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * @param {import('vue-router').RouteLocationNormalizedLoaded} to
 */
export function applyRouteSeo(to) {
  const meta = to.meta?.seo || {}
  const siteUrl = getSiteUrl()

  const title =
    meta.title ||
    'Dr Magerman | Family GP & General Practitioner, Cape Town'

  document.title = title

  const description =
    meta.description ||
    'Dr Magerman is a family and general practitioner (GP) in Belthorn, Cape Town. Book appointments, view hours, and get compassionate primary care.'

  setMetaName('description', description)
  setMetaName(
    'keywords',
    meta.keywords ||
      'GP Cape Town, general practitioner Cape Town, family doctor Cape Town, Dr Magerman, Belthorn'
  )

  const path = to.path === '/' ? '/' : to.path
  const canonical = `${siteUrl}${path === '/' ? '' : path}`
  setCanonical(canonical)

  const ogImage = meta.ogImage || absoluteUrl('/images/doctor-portrait.jpg')
  setMetaProperty('og:type', meta.ogType || 'website')
  setMetaProperty('og:locale', 'en_ZA')
  setMetaProperty('og:url', canonical)
  setMetaProperty('og:title', title)
  setMetaProperty('og:description', description)
  setMetaProperty('og:image', ogImage)
  setMetaProperty('og:image:alt', meta.ogImageAlt || 'Dr Magerman – general practitioner, Cape Town')

  setMetaName('twitter:card', 'summary_large_image')
  setMetaName('twitter:title', title)
  setMetaName('twitter:description', description)
  setMetaName('twitter:image', ogImage)
}
