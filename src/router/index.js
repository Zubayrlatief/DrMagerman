import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import { applyRouteSeo } from '../seo/applySeo'

const KW_GP =
  'GP Cape Town, general practitioner Cape Town, family doctor Cape Town, Belthorn GP, doctor Belthorn, primary care Cape Town, HPCSA GP, Lawson Place medical practice'

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
          'Services from an experienced Cape Town GP: general consultations, preventive care, chronic disease management, health screenings, women\'s and men\'s health. Evidence-based family practice in Belthorn.',
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
          'Contact Dr Magerman\'s practice: 226 Thornton Road, Lawson Place, Belthorn, Cape Town 7460. Phone 021 696 4132, email info@drmagerman.co.za, consulting hours and map.',
        keywords: `${KW_GP}, book GP appointment Cape Town, doctor contact Belthorn, Lawson Place Thornton Road`
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  applyRouteSeo(to)
})

export default router
