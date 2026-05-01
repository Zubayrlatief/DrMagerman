import { createRouter, createWebHistory } from 'vue-router'
import { applyRouteSeo } from '../seo/applySeo'
import { trackPageView } from '../analytics'

const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Contact = () => import('../views/Contact.vue')
const NotFound = () => import('../views/NotFound.vue')

const KW_GP =
  'GP Cape Town, GP Athlone, family doctor Belthorn, general practitioner Western Cape, Belthorn medical practice, doctor Southern Suburbs, Lansdowne, Crawford, Rylands, primary care Cape Town, HPCSA GP, Lawson Place Thornton Road'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      seo: {
        title: 'Dr Magerman | Family GP & General Practitioner, Belthorn Cape Town',
        description:
          'Family and general practitioner (GP) in Belthorn, Cape Town. Personalised primary care, chronic disease management, preventive health, and bookings at Lawson Place, Thornton Road.',
        keywords: `${KW_GP}, Dr Magerman`
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      seo: {
        title: 'About & Medical Services | Dr Magerman – GP Cape Town',
        description:
          'Services from an experienced Cape Town GP: general consultations, preventive care, chronic disease management, health screenings, women\'s and men\'s health. Evidence-based family practice in Belthorn. We have no open vacancies; careers information is on this page.',
        keywords: `${KW_GP}, medical services GP, chronic disease doctor Cape Town, health screening Cape Town`
      }
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      seo: {
        title: 'Contact, Location & Bookings | Dr Magerman – GP Belthorn Cape Town',
        description:
          'Contact Dr Magerman\'s practice: 226 Thornton Road, Lawson Place, Belthorn, Cape Town 7784. Phone 021 696 4132, email info@drmagerman.co.za, consulting hours and map.',
        keywords: `${KW_GP}, book GP appointment Cape Town, doctor contact Belthorn, Lawson Place Thornton Road`
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      seo: {
        title: 'Page Not Found | Dr Magerman',
        description:
          'The page you requested could not be found. Return to the homepage or contact Dr Magerman’s practice in Belthorn, Cape Town.',
        keywords: 'Dr Magerman, page not found, GP Cape Town',
        robots: 'noindex, follow'
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      }
    }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  applyRouteSeo(to)
  trackPageView(to.fullPath)
})

export default router
