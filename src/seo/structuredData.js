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
      name: 'Dr Magerman – General Practitioner Cape Town',
      alternateName: 'Dr Magerman Family Practice',
      description:
        'Trusted general practitioner (GP) in Cape Town offering primary care, chronic disease management, preventive care, health screenings, and family medicine. Located in Belthorn, Western Cape — serving patients from Athlone, Lansdowne, Crawford, Rylands, and the greater Cape Town area. HPCSA-registered medical practitioner.',
      url: siteUrl,
      image: absoluteUrl('/images/doctor-portrait.jpg'),
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/favicon.svg')
      },
      telephone: '+27-21-696-4132',
      email: 'info@drmagerman.co.za',
      priceRange: '$$',
      currenciesAccepted: 'ZAR',
      paymentAccepted: 'Cash, Credit Card, Medical Aid',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '226 Thornton Road, Lawson Place',
        addressLocality: 'Belthorn',
        addressRegion: 'Western Cape',
        postalCode: '7784',
        addressCountry: 'ZA'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -33.9843499,
        longitude: 18.5121154
      },
      hasMap: 'https://www.google.com/maps?q=Dr+Magerman+226+Thornton+Road+Belthorn+Cape+Town+7784',
      medicalSpecialty: [
        'Family medicine',
        'General practice',
        'Primary care',
        'Preventive medicine'
      ],
      availableService: [
        { '@type': 'MedicalProcedure', name: 'General Consultation' },
        { '@type': 'MedicalProcedure', name: 'Chronic Disease Management' },
        { '@type': 'MedicalProcedure', name: 'Preventive Health Screening' },
        { '@type': 'MedicalProcedure', name: 'Women\'s Health' },
        { '@type': 'MedicalProcedure', name: 'Men\'s Health' },
        { '@type': 'MedicalProcedure', name: 'Family Planning' },
        { '@type': 'MedicalProcedure', name: 'Vaccinations & Immunisations' },
        { '@type': 'MedicalProcedure', name: 'Minor Procedures' }
      ],
      areaServed: [
        { '@type': 'City', name: 'Cape Town' },
        { '@type': 'AdministrativeArea', name: 'Western Cape' },
        { '@type': 'Place', name: 'Belthorn' },
        { '@type': 'Place', name: 'Athlone' },
        { '@type': 'Place', name: 'Lansdowne' },
        { '@type': 'Place', name: 'Crawford' },
        { '@type': 'Place', name: 'Rylands' },
        { '@type': 'Place', name: 'Southern Suburbs' },
        { '@type': 'Place', name: 'Thornton' }
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
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '08:30',
          closes: '11:30',
          description: '1st and last Saturday of each month only'
        }
      ],
      sameAs: [],
      isAcceptingNewPatients: true
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Dr Magerman – General Practitioner Cape Town',
      url: siteUrl,
      description:
        'Official website for Dr Magerman, general practitioner in Cape Town. Book appointments, view consulting hours, and access information about GP services in Belthorn, Western Cape.',
      inLanguage: 'en-ZA',
      publisher: { '@id': `${siteUrl}/#practice` },
      creator: { '@id': ZAR_MEDIA_ID }
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': `${siteUrl}/#navigation`,
      name: 'Main Navigation',
      hasPart: [
        {
          '@type': 'SiteNavigationElement',
          name: 'Home',
          url: siteUrl
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'Medical Services',
          url: `${siteUrl}/about`
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'Contact & Book Appointment',
          url: `${siteUrl}/contact`
        }
      ]
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#home`,
      url: siteUrl,
      name: 'General Practitioner Cape Town – Dr Magerman',
      description: 'Dr Magerman is a trusted general practitioner in Cape Town, offering personalised primary care and family medicine in Belthorn, Western Cape.',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#practice` },
      inLanguage: 'en-ZA',
      breadcrumb: { '@id': `${siteUrl}/#breadcrumb-home` }
    },
    {
      '@type': 'AboutPage',
      '@id': `${siteUrl}/about#webpage`,
      url: `${siteUrl}/about`,
      name: 'Medical Services – General Practitioner Cape Town',
      description: 'Comprehensive GP services from a qualified general practitioner in Cape Town: consultations, chronic disease management, health screenings, and preventive care.',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#practice` },
      inLanguage: 'en-ZA',
      breadcrumb: { '@id': `${siteUrl}/#breadcrumb-about` }
    },
    {
      '@type': 'ContactPage',
      '@id': `${siteUrl}/contact#webpage`,
      url: `${siteUrl}/contact`,
      name: 'Contact & Book Appointment – General Practitioner Cape Town',
      description: 'Book an appointment with Dr Magerman, general practitioner in Cape Town. Phone, email, directions, and consulting hours.',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#practice` },
      inLanguage: 'en-ZA',
      breadcrumb: { '@id': `${siteUrl}/#breadcrumb-contact` }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${siteUrl}/#breadcrumb-home`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl
        }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${siteUrl}/#breadcrumb-about`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Medical Services',
          item: `${siteUrl}/about`
        }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${siteUrl}/#breadcrumb-contact`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Contact & Book Appointment',
          item: `${siteUrl}/contact`
        }
      ]
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
