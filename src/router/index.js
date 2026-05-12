import { createRouter, createWebHistory } from 'vue-router'
import { applyRouteSeo } from '../seo/applySeo'
import { trackPageView } from '../analytics'

const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Contact = () => import('../views/Contact.vue')
const NotFound = () => import('../views/NotFound.vue')

const KW_GP =
  'general practitioner Cape Town, GP Cape Town, general practitioner near me, family doctor Cape Town, GP Athlone, GP Belthorn, general practitioner Western Cape, doctor Southern Suburbs, Lansdowne, Crawford, Rylands, primary care Cape Town, HPCSA GP, Lawson Place Thornton Road'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      seo: {
        title: 'Dr Magerman | General Practitioner Cape Town – Family GP in Belthorn',
        description:
          'Dr Magerman is a trusted general practitioner in Cape Town, offering personalised primary care, chronic disease management, preventive health, and same-day bookings. Family GP practice at Lawson Place, Thornton Road, Belthorn – serving Athlone, Lansdowne, Crawford & Rylands.',
        keywords: `${KW_GP}, Dr Magerman, book GP Cape Town`
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      seo: {
        title: 'Medical Services | General Practitioner Cape Town – Dr Magerman',
        description:
          'Comprehensive medical services from a qualified general practitioner in Cape Town: consultations, preventive care, chronic disease management, health screenings, women\'s & men\'s health. Evidence-based family practice in Belthorn, Western Cape.',
        keywords: `${KW_GP}, medical services Cape Town, chronic disease doctor Cape Town, health screening Cape Town, GP services`
      }
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      seo: {
        title: 'Contact & Book Appointment | General Practitioner Cape Town – Dr Magerman',
        description:
          'Book an appointment with Dr Magerman, general practitioner in Cape Town. Located at 226 Thornton Road, Lawson Place, Belthorn 7784. Phone 021 696 4132, email info@drmagerman.co.za. Walk-ins welcome during consulting hours.',
        keywords: `${KW_GP}, book GP appointment Cape Town, doctor contact Belthorn, walk-in GP Cape Town, Lawson Place Thornton Road`
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
