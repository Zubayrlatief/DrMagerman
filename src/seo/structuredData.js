import { getSiteUrl, absoluteUrl } from './siteConfig'

const ZAR_MEDIA_ID = 'https://zarmediagroup.com/#organization'

const ZAR_MEDIA = {
  '@type': 'Organization',
  '@id': ZAR_MEDIA_ID,
  name: 'ZAR Media Group',
  url: 'https://zarmediagroup.com/',
  description: 'Web design, web development, and digital marketing agency in South Africa',
  knowsAbout: ['Web design', 'Digital marketing', 'Healthcare websites']
}

export function injectStructuredData() {
  if (document.getElementById('drmagerman-jsonld')) return

  const siteUrl = getSiteUrl()
  const graph = [
    ZAR_MEDIA,
    {
      '@type': ['Physician', 'MedicalBusiness', 'LocalBusiness'],
      '@id': `${siteUrl}/#practice`,
      name: 'Dr Magerman',
      description:
        'Family and general practitioner (GP) offering primary care, chronic disease management, preventive care, and health screenings in Belthorn, Western Cape—serving patients from Athlone, Lansdowne, Crawford, Rylands, and the greater Cape Town area. Saturday: 08:30–11:30 on the 1st and last Saturday of each month only. Closed on Sundays, all public holidays, and when a scheduled Saturday falls on a public holiday. Medical practitioners in South Africa are registered with the Health Professions Council of South Africa (HPCSA).',
      url: siteUrl,
      image: absoluteUrl('/images/doctor-portrait.jpg'),
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/favicon.svg')
      },
      telephone: '+27-21-696-4132',
      email: 'info@drmagerman.co.za',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '226 Thornton Road, Lawson Place',
        addressLocality: 'Belthorn, Cape Town',
        postalCode: '7784',
        addressRegion: 'Western Cape',
        addressCountry: 'ZA'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -33.9843499,
        longitude: 18.5121154
      },
      medicalSpecialty: ['Family medicine', 'General practice'],
      areaServed: [
        { '@type': 'City', name: 'Cape Town' },
        { '@type': 'AdministrativeArea', name: 'Western Cape' },
        { '@type': 'Place', name: 'Belthorn' },
        { '@type': 'Place', name: 'Athlone' },
        { '@type': 'Place', name: 'Lansdowne' },
        { '@type': 'Place', name: 'Crawford' },
        { '@type': 'Place', name: 'Rylands' }
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '09:00',
          closes: '12:45'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '15:00',
          closes: '17:45'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Friday',
          opens: '09:00',
          closes: '12:30'
        }
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Dr Magerman – Family GP Cape Town',
      url: siteUrl,
      description:
        'Official site for Dr Magerman, family GP in Belthorn, Western Cape—appointments, consulting hours, and information for patients from Athlone, Lansdowne, Crawford, Rylands, and the greater Cape Town area.',
      inLanguage: 'en-ZA',
      publisher: { '@id': `${siteUrl}/#practice` },
      creator: { '@id': ZAR_MEDIA_ID }
    }
  ]

  const script = document.createElement('script')
  script.id = 'drmagerman-jsonld'
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph
  })
  document.head.appendChild(script)
}
