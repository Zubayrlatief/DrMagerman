<template>
  <div class="home">

    <!-- ═══ HERO ═══ -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">

          <!-- Text side -->
          <div class="hero-text">
            <span class="hero-eyebrow">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="currentColor"/></svg>
              General Practice &middot; Cape Town
            </span>
            <h1 class="hero-title">Personalised Family Healthcare in Cape Town</h1>
            <p class="hero-subtitle">
              Professional, evidence-based primary care from a trusted GP in Belthorn—serving
              patients from Athlone, the Southern Suburbs, and surrounding areas of Cape Town.
              We treat the whole person, not just the condition.
            </p>
            <div class="hero-cta">
              <router-link to="/contact" class="btn btn-primary btn-lg">Book an Appointment</router-link>
              <router-link to="/about" class="btn btn-ghost btn-lg">Our Services</router-link>
            </div>

            <div class="trust-row">
              <div class="trust-item">
                <span class="trust-number">15+</span>
                <span class="trust-label">Years in Practice</span>
              </div>
              <div class="trust-divider" aria-hidden="true"></div>
              <div class="trust-item">
                <span class="trust-number">5,000+</span>
                <span class="trust-label">Patients Cared For</span>
              </div>
              <div class="trust-divider" aria-hidden="true"></div>
              <div class="trust-item">
                <span class="trust-number">98%</span>
                <span class="trust-label">Satisfaction Rate</span>
              </div>
            </div>
          </div>

          <!-- Image side -->
          <div class="hero-image">
            <div class="image-wrapper">
              <div class="image-fallback" v-if="!doctorImageLoaded">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"/>
                </svg>
              </div>
              <img
                v-show="doctorImageLoaded"
                :src="doctorImage"
                alt="Dr Magerman – Family GP Cape Town"
                @load="doctorImageLoaded = true"
                @error="doctorImageLoaded = false"
              />
              <div class="image-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="currentColor"/></svg>
                <span>HPCSA Registered</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══ SERVICES OVERVIEW ═══ -->
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">What We Offer</span>
          <h2>Comprehensive Primary Care Services</h2>
          <p>From routine check-ups to chronic disease management — all under one roof.</p>
        </div>
        <div class="services-grid">
          <div class="service-card" v-for="service in services" :key="service.id">
            <div class="service-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path :d="service.iconPath" fill="currentColor"/>
              </svg>
            </div>
            <div class="service-body">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
        <div class="services-cta">
          <router-link to="/about" class="btn btn-secondary">View All Services</router-link>
        </div>
      </div>
    </section>

    <!-- ═══ WHY CHOOSE ═══ -->
    <section class="why-section">
      <div class="container">
        <div class="why-content">

          <!-- Left: features -->
          <div class="why-text">
            <span class="section-eyebrow">Why Choose Us</span>
            <h2>A Practice Built Around You</h2>
            <p class="why-lead">We believe great healthcare begins with listening. Every consultation is unhurried, personalised and rooted in the best evidence-based practice.</p>
            <ul class="features-list">
              <li v-for="feature in features" :key="feature.id" class="feature-item">
                <div class="feature-check">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/></svg>
                </div>
                <div>
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.description }}</p>
                </div>
              </li>
            </ul>
            <router-link to="/about" class="btn btn-primary">Learn More About the Practice</router-link>
          </div>

          <!-- Right: stat card (always visible, no broken image) -->
          <div class="why-stats-panel">
            <div class="stat-card">
              <div class="stat-card-header">
                <div class="stat-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" fill="currentColor"/></svg>
                </div>
                <div>
                  <p class="stat-card-label">Dr Magerman</p>
                  <p class="stat-card-sub">Family &amp; General Practitioner</p>
                </div>
              </div>
              <div class="stat-grid">
                <div class="stat-block">
                  <span class="stat-num">15+</span>
                  <span class="stat-desc">Years of Practice</span>
                </div>
                <div class="stat-block">
                  <span class="stat-num">5K+</span>
                  <span class="stat-desc">Patients Served</span>
                </div>
                <div class="stat-block">
                  <span class="stat-num">6</span>
                  <span class="stat-desc">Core Services</span>
                </div>
                <div class="stat-block">
                  <span class="stat-num">98%</span>
                  <span class="stat-desc">Satisfaction</span>
                </div>
              </div>
              <div class="stat-card-footer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="currentColor"/></svg>
                <span>226 Thornton Road, Belthorn, Cape Town</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══ HOURS ═══ -->
    <section class="hours-section">
      <div class="container">
        <div class="hours-card">
          <div class="hours-card-header">
            <div class="hours-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" fill="currentColor"/></svg>
            </div>
            <div>
              <h2>Consulting Hours</h2>
              <p>Walk-ins welcome during open hours</p>
            </div>
          </div>
          <div class="hours-grid">
            <div class="hours-row">
              <span class="hours-day">Monday – Thursday</span>
              <span class="hours-times">
                <span class="hours-slot">09:00 – 12:45</span>
                <span class="hours-and">and</span>
                <span class="hours-slot">15:00 – 17:45</span>
              </span>
            </div>
            <div class="hours-row">
              <span class="hours-day">Friday</span>
              <span class="hours-slot">09:00 – 12:30</span>
            </div>
            <div class="hours-row hours-row--sat">
              <span class="hours-day">Saturday</span>
              <div class="hours-saturday-block">
                <span class="hours-slot">08:30 – 11:30</span>
                <span class="hours-sat-sub">Open on the 1st and last Saturday of each month only</span>
              </div>
            </div>
            <div class="hours-row closed">
              <span class="hours-day">Sunday</span>
              <span class="hours-closed-label">Closed</span>
            </div>
            <div class="hours-row closed">
              <span class="hours-day">Public holidays</span>
              <span class="hours-closed-label">Closed</span>
            </div>
          </div>
          <p class="hours-footnote">Closed on all public holidays, including when a 1st- or last-Saturday falls on a holiday.</p>
          <router-link to="/contact" class="btn btn-primary">Contact the Practice</router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import doctorImage from '../images/Dr-Meagan-Magerman-2.jpg'

const doctorImageLoaded = ref(false)

onMounted(() => {
  const img = new Image()
  img.src = doctorImage
  img.onload = () => doctorImageLoaded.value = true
  img.onerror = () => doctorImageLoaded.value = false
})

const services = ref([
  {
    id: 1,
    title: 'General Consultations',
    description: 'Thorough assessments with personalised treatment plans and clear communication.',
    iconPath: 'M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z'
  },
  {
    id: 2,
    title: 'Preventive Care',
    description: 'Annual check-ups, vaccinations and screenings to keep you at your best.',
    iconPath: 'M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17V12L12 17L2 12V17Z'
  },
  {
    id: 3,
    title: 'Chronic Disease Management',
    description: 'Ongoing monitoring and expert care for diabetes, hypertension and more.',
    iconPath: 'M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12H15V15H13V12H11V10H13V7H15V10H17V12Z'
  },
  {
    id: 4,
    title: 'Health Screenings',
    description: 'Early detection through blood pressure, cholesterol and glucose testing.',
    iconPath: 'M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5V11.24C14.61 11.09 15 10.59 15 10C15 9.45 14.55 9 14 9H13V7.5C13 6.67 12.33 6 11.5 6S10 6.67 10 7.5V9H9C8.45 9 8 9.45 8 10C8 10.59 8.39 11.09 9 11.24ZM16.76 4C16.44 3.22 15.7 2.5 14.76 2.5C13.84 2.5 13.1 3.22 12.78 4H11.22C10.9 3.22 10.16 2.5 9.24 2.5C8.3 2.5 7.56 3.22 7.24 4H5.5C4.67 4 4 4.67 4 5.5V18.5C4 19.33 4.67 20 5.5 20H18.5C19.33 20 20 19.33 20 18.5V5.5C20 4.67 19.33 4 18.5 4H16.76Z'
  }
])

const features = ref([
  {
    id: 1,
    title: 'Experienced Practitioner',
    description: 'Over 15 years of dedicated general practice with a proven track record.'
  },
  {
    id: 2,
    title: 'Patient-Centred Approach',
    description: 'Unhurried consultations where you are heard, respected and informed.'
  },
  {
    id: 3,
    title: 'Evidence-Based Treatment',
    description: 'All care and prescriptions are grounded in current clinical guidelines.'
  },
  {
    id: 4,
    title: 'Convenient for Belthorn, Athlone & Cape Town',
    description: 'On the corner of Lawson and Thornton Road (Lawson Place), with parking and easy access for patients from the Southern Suburbs and beyond.'
  }
])
</script>

<style scoped>
.home {
  overflow-x: hidden;
}

/* ══════════════════════════════════════
   HERO
══════════════════════════════════════ */
.hero {
  background: var(--clinical-hero-bg);
  color: var(--neo-ink);
  padding: 5rem 0 4.5rem;
  position: relative;
  overflow: hidden;
  border-bottom: 2px solid var(--neo-ink);
}

.hero-content {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 5rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

/* Eyebrow */
.hero-eyebrow {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  max-width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--neo-ink);
  background: var(--cb-paper);
  padding: 0.4rem 0.85rem;
  border: 2px solid var(--neo-ink);
  box-shadow: 3px 3px 0 0 var(--neo-ink);
  margin-bottom: 1.25rem;
}

.hero-text {
  min-width: 0;
}

.hero-title {
  font-size: 3.25rem;
  font-weight: 700;
  color: var(--neo-ink);
  line-height: 1.12;
  margin-bottom: 1.25rem;
  letter-spacing: -0.04em;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
}

.hero-subtitle {
  font-size: 1.12rem;
  color: var(--neo-ink);
  opacity: 0.88;
  line-height: 1.7;
  margin-bottom: 2.25rem;
  max-width: 480px;
}

.hero-cta {
  display: flex;
  gap: 0.85rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

/* Trust row */
.trust-row {
  display: flex;
  align-items: center;
  gap: 1.75rem;
  padding-top: 2rem;
  border-top: 2px solid var(--neo-ink);
}

.trust-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.trust-number {
  font-size: 2rem;
  font-weight: 800;
  color: var(--neo-ink);
  line-height: 1;
  letter-spacing: -0.04em;
}

.trust-label {
  font-size: 0.72rem;
  color: var(--neo-ink);
  opacity: 0.75;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.trust-divider {
  width: 3px;
  height: 40px;
  background: var(--neo-ink);
  flex-shrink: 0;
}

/* Image */
.hero-image {
  position: relative;
  min-width: 0;
}

.image-wrapper {
  position: relative;
  overflow: hidden;
  min-width: 0;
  border: 2px solid var(--neo-ink);
  box-shadow: 6px 6px 0 0 var(--neo-ink);
  background: var(--cb-paper);
}

.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  min-height: 520px;
}

.image-badge {
  position: absolute;
  bottom: 16px;
  left: 16px;
  background: var(--cb-paper);
  padding: 0.55rem 1rem;
  border: 2px solid var(--neo-ink);
  box-shadow: 3px 3px 0 0 var(--neo-ink);
  display: flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--neo-ink);
  font-weight: 600;
  font-size: 0.8rem;
}

/* ══════════════════════════════════════
   SERVICES
══════════════════════════════════════ */
.services-section {
  padding: 5rem 0;
  background: transparent;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.service-card {
  background: var(--cb-paper);
  padding: 2rem 1.75rem;
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  border: 2px solid var(--neo-ink);
  box-shadow: 4px 4px 0 0 var(--neo-ink);
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}

.service-card:hover {
  transform: translate(-1px, -1px);
  box-shadow: 6px 6px 0 0 var(--cb-accent);
}

.service-icon-wrap {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  background: var(--cb-surface-2);
  border: 2px solid var(--neo-ink);
  box-shadow: 2px 2px 0 0 var(--neo-ink);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cb-accent-deep);
  transition: background 0.12s ease;
}

.service-card:hover .service-icon-wrap {
  background: #e0f2fe;
}

.service-body {
  min-width: 0;
  flex: 1;
}

.service-body h3 {
  font-size: 1.05rem;
  color: var(--color-text);
  margin-bottom: 0.45rem;
  font-weight: 600;
}

.service-body p {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.services-cta {
  text-align: center;
}

/* ══════════════════════════════════════
   WHY CHOOSE
══════════════════════════════════════ */
.why-section {
  padding: 5.5rem 0;
  background: #fff;
}

.why-content {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 5rem;
  align-items: center;
}

.why-text {
  min-width: 0;
}

.why-stats-panel {
  min-width: 0;
}

.why-text h2 {
  font-size: 2.25rem;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.why-lead {
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.features-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.feature-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.feature-item > div:last-of-type {
  min-width: 0;
  flex: 1;
}

.feature-check {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background: var(--cb-paper);
  border: 2px solid var(--neo-ink);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cb-accent-deep);
  margin-top: 2px;
  box-shadow: 2px 2px 0 0 var(--neo-ink);
}

.feature-item h4 {
  font-size: 1rem;
  color: var(--color-text);
  margin-bottom: 0.3rem;
  font-weight: 600;
}

.feature-item p {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* Stat panel */
.stat-card {
  background: var(--neo-ink);
  padding: 2.5rem;
  color: #fff;
  border: 2px solid var(--neo-ink);
  box-shadow: 6px 6px 0 0 var(--cb-accent);
}

.stat-card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.25rem;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  min-width: 0;
}

.stat-card-header > div:last-of-type {
  min-width: 0;
}

.stat-card-icon {
  width: 52px;
  height: 52px;
  background: #fff;
  border: 2px solid rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cb-accent-deep);
  flex-shrink: 0;
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.2);
}

.stat-card-label {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  line-height: 1.3;
  font-family: 'IBM Plex Sans', sans-serif;
}

.stat-card-sub {
  font-size: 0.82rem;
  color: #94a3b8;
  font-weight: 500;
  margin: 0;
}

.stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-block {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.stat-num {
  font-size: 2.25rem;
  font-weight: 700;
  color: #e2e8f0;
  letter-spacing: -0.04em;
  line-height: 1;
}

.stat-desc {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.65);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.stat-card-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  padding-top: 1.5rem;
  border-top: 3px solid rgba(255, 255, 255, 0.12);
}

.stat-card-footer span {
  min-width: 0;
  overflow-wrap: break-word;
}

.stat-card-footer svg {
  flex-shrink: 0;
  color: #7dd3fc;
}

/* ══════════════════════════════════════
   HOURS
══════════════════════════════════════ */
.hours-section {
  padding: 5rem 0;
  background: var(--cb-surface-2);
  border-top: 2px solid var(--neo-ink);
  border-bottom: 2px solid var(--neo-ink);
}

.hours-card {
  background: var(--cb-paper);
  padding: 3rem;
  border: 2px solid var(--neo-ink);
  box-shadow: 6px 6px 0 0 var(--neo-ink);
  max-width: 760px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 0;
}

.hours-card-header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--neo-ink);
}

.hours-icon {
  width: 52px;
  height: 52px;
  background: var(--cb-surface-2);
  border: 2px solid var(--neo-ink);
  box-shadow: 2px 2px 0 0 var(--neo-ink);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cb-accent-deep);
  flex-shrink: 0;
}

.hours-card-header h2 {
  font-size: 1.6rem;
  color: var(--color-text);
  margin-bottom: 0.2rem;
}

.hours-card-header p {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin: 0;
}

.hours-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.hours-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  background: var(--neo-cream);
  border: 2px solid var(--neo-ink);
  transition: transform 0.12s ease;
}

.hours-row:hover:not(.closed) {
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0 0 var(--neo-ink);
}

.hours-day {
  font-weight: 600;
  color: var(--color-text);
  font-size: 0.95rem;
}

.hours-times {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  min-width: 0;
  max-width: 100%;
}

.hours-slot {
  font-weight: 600;
  color: var(--neo-ink);
  font-size: 0.88rem;
  background: var(--cb-surface-2);
  padding: 0.25rem 0.55rem;
  border: 1px solid var(--neo-ink);
}

.hours-and {
  font-size: 0.78rem;
  color: var(--color-text-muted);
}

.hours-row.closed {
  opacity: 0.55;
  background: var(--slate-50);
}

.hours-closed-label {
  font-weight: 500;
  color: var(--slate-400);
  font-size: 0.9rem;
}

.hours-saturday-block {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.4rem;
  text-align: right;
}

.hours-sat-sub {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--color-text-muted);
  line-height: 1.35;
  max-width: 17rem;
}

.hours-footnote {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.5;
  margin: 0 0 1.5rem;
  padding: 0.75rem 0 0;
  border-top: 1px solid var(--slate-200);
}

/* ══════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════ */
@media (max-width: 1024px) {
  .hero-content,
  .why-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-title {
    font-size: 2.75rem;
  }

  .hero-image {
    order: -1;
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 3.25rem 0 3rem;
  }

  .hero-title {
    font-size: clamp(1.65rem, 7vw, 2.25rem);
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-cta {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-cta .btn {
    width: 100%;
    justify-content: center;
  }

  .trust-row {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .trust-item {
    flex: 1 1 40%;
    min-width: 8.5rem;
  }

  .services-section,
  .why-section,
  .hours-section {
    padding: 3.25rem 0;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    padding: 1.5rem 1.25rem;
  }

  .hours-card {
    padding: 1.5rem 1.25rem;
  }

  .hours-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .hours-saturday-block {
    align-items: flex-start;
    text-align: left;
    width: 100%;
  }

  .hours-sat-sub {
    max-width: none;
  }

  .hours-times {
    justify-content: flex-start;
  }

  .why-text h2 {
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  .why-text .btn {
    width: 100%;
    max-width: 22rem;
    box-sizing: border-box;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 2.75rem 0 2.5rem;
  }

  .hero-title {
    font-size: 1.65rem;
  }

  .hero-eyebrow {
    font-size: 0.65rem;
    padding: 0.35rem 0.65rem;
  }

  .trust-row {
    flex-direction: column;
    align-items: stretch;
    gap: 1.25rem;
  }

  .trust-divider {
    display: none;
  }

  .trust-item {
    flex: none;
    width: 100%;
    padding: 0.75rem 0;
    border-bottom: 2px solid var(--neo-ink);
  }

  .trust-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .image-wrapper img {
    min-height: 280px;
    object-fit: cover;
  }

  .stat-card {
    padding: 1.75rem 1.25rem;
  }

  .stat-num {
    font-size: 1.85rem;
  }

  .hours-card .btn {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  .image-badge {
    max-width: calc(100% - 2rem);
    flex-wrap: wrap;
  }
}

@media (max-width: 380px) {
  .hero-title {
    font-size: 1.5rem;
  }

  .feature-item {
    gap: 0.75rem;
  }
}
</style>
