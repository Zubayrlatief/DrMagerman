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
    'Dr Magerman | Family GP & General Practitioner, Cape Town'

  document.title = title

  const description =
    meta.description ||
    'Dr Magerman is a family and general practitioner (GP) in Belthorn, Western Cape, serving Athlone, Lansdowne, Crawford, Rylands, and the greater Cape Town area. Book appointments, view hours, and primary care in line with professional and POPIA expectations.'

  setMetaName('description', description)
  setMetaName(
    'keywords',
    meta.keywords ||
      'GP Cape Town, GP Athlone, family doctor Belthorn, general practitioner Western Cape, Dr Magerman, primary care Southern Suburbs, doctor Lansdowne, Crawford, Rylands, Lawson Place, HPCSA'
  )

  const path = to.path === '/' ? '/' : to.path
  const canonical = `${siteUrl}${path === '/' ? '' : path}`
  setCanonical(canonical)
  setRobotsMeta(meta.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')

  const ogImage = meta.ogImage || absoluteUrl('/images/doctor-portrait.jpg')
  setMetaProperty('og:type', meta.ogType || 'website')
  setMetaProperty('og:site_name', 'Dr Magerman – GP Cape Town')
  setMetaProperty('og:locale', 'en_ZA')
  setMetaProperty('og:url', canonical)
  setMetaProperty('og:title', title)
  setMetaProperty('og:description', description)
  setMetaProperty('og:image', ogImage)
  setMetaProperty('og:image:alt', meta.ogImageAlt || 'Dr Magerman – family and general practitioner, Belthorn, Cape Town (Western Cape)')

  setMetaName('twitter:card', 'summary_large_image')
  setMetaName('twitter:title', title)
  setMetaName('twitter:description', description)
  setMetaName('twitter:image', ogImage)
}
