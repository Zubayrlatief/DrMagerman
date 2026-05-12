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

function setRobotsMeta(content) {
  setMetaName('robots', content)
  setMetaName('googlebot', content)
}

/**
 * @param {import('vue-router').RouteLocationNormalizedLoaded} to
 */
export function applyRouteSeo(to) {
  const meta = to.meta?.seo || {}
  const siteUrl = getSiteUrl()

  const title =
    meta.title ||
    'Dr Magerman | General Practitioner Cape Town – Family GP in Belthorn'

  document.title = title

  const description =
    meta.description ||
    'Dr Magerman is a trusted general practitioner in Cape Town, offering personalised primary care, chronic disease management, preventive health, and same-day bookings. Family GP practice at Lawson Place, Thornton Road, Belthorn – serving Athlone, Lansdowne, Crawford & Rylands.'

  setMetaName('description', description)
  setMetaName(
    'keywords',
    meta.keywords ||
      'general practitioner Cape Town, GP Cape Town, general practitioner near me, family doctor Cape Town, GP Athlone, GP Belthorn, general practitioner Western Cape, doctor Southern Suburbs, Lansdowne, Crawford, Rylands, primary care Cape Town, HPCSA GP, Dr Magerman'
  )

  const path = to.path === '/' ? '/' : to.path
  const canonical = `${siteUrl}${path === '/' ? '' : path}`
  setCanonical(canonical)
  setRobotsMeta(meta.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')

  const ogImage = meta.ogImage || absoluteUrl('/images/doctor-portrait.jpg')
  setMetaProperty('og:type', meta.ogType || 'website')
  setMetaProperty('og:site_name', 'Dr Magerman – General Practitioner Cape Town')
  setMetaProperty('og:locale', 'en_ZA')
  setMetaProperty('og:url', canonical)
  setMetaProperty('og:title', title)
  setMetaProperty('og:description', description)
  setMetaProperty('og:image', ogImage)
  setMetaProperty('og:image:alt', meta.ogImageAlt || 'Dr Magerman – General Practitioner in Cape Town, Family GP in Belthorn, Western Cape')

  setMetaName('twitter:card', 'summary_large_image')
  setMetaName('twitter:title', title)
  setMetaName('twitter:description', description)
  setMetaName('twitter:image', ogImage)
}
