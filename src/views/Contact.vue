<template>
  <div class="contact">
    <section class="contact-hero">
      <div class="container">
        <div class="contact-hero-inner">
          <span class="hero-tag">Contact</span>
          <h1>Book an Appointment or Send an Enquiry</h1>
          <p>Contact the practice directly for bookings, follow-ups, and general questions.</p>
        </div>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="contact-top">
          <div class="contact-form-section neo-card">
            <h2>Send a Message</h2>
            <p class="form-description">Complete the form and we will send your enquiry directly to the practice email address.</p>
            <p class="form-disclaimer">
              Please do not use this form for urgent or emergency medical concerns. In an emergency, contact your nearest emergency service immediately.
            </p>
            <p class="form-popia">
              Information you send is used only to respond to your enquiry and is processed in line with the Protection of Personal Information Act (POPIA) and the practice&rsquo;s privacy obligations. Do not include sensitive clinical details unless necessary.
            </p>
            <form @submit.prevent="handleSubmit" class="contact-form">
              <!-- Honeypot: invisible to people, bots that fill it are silently dropped server-side -->
              <div class="form-hp" aria-hidden="true">
                <label for="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  v-model="form.company"
                  tabindex="-1"
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <label for="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  autocomplete="name"
                  required
                  placeholder="Your full name"
                />
              </div>
              <div class="form-group">
                <label for="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  autocomplete="email"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div class="form-group">
                <label for="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  inputmode="tel"
                  autocomplete="tel"
                  required
                  placeholder="021 XXX XXXX"
                />
              </div>
              <div class="form-group">
                <label for="subject">Subject *</label>
                <select id="subject" v-model="form.subject" required>
                  <option value="">Select a subject</option>
                  <option value="appointment">Book Appointment</option>
                  <option value="general">General Enquiry</option>
                  <option value="prescription">Prescription Refill</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  placeholder="Please provide details about your enquiry..."
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary" :disabled="submitting">
                {{ submitting ? 'Sending...' : 'Send Message' }}
              </button>
              <div v-if="submitStatus" class="submit-status" :class="submitStatus.type">
                {{ submitStatus.message }}
              </div>
            </form>
          </div>

          <aside class="contact-sidebar">
            <div class="contact-info-card neo-card">
              <h2>Contact Information</h2>
              <div class="info-items">
                <div class="info-item">
                  <div class="info-icon icon icon--primary icon--md" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="info-content">
                    <h4>Location</h4>
                    <p>226 Thornton Road, Belthorn<br>Cape Town, 7784</p>
                    <p class="info-note">Corner of Lawson and Thornton Road<br>Building: Lawson Place</p>
                  </div>
                </div>
                <div class="info-item">
                  <div class="info-icon icon icon--primary icon--md" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="info-content">
                    <h4>Phone</h4>
                    <p><a href="tel:0216964132">021 696 4132</a></p>
                  </div>
                </div>
                <div class="info-item">
                  <div class="info-icon icon icon--primary icon--md" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="info-content">
                    <h4>Email</h4>
                    <p><a href="mailto:info@drmagerman.co.za">info@drmagerman.co.za</a></p>
                  </div>
                </div>
                <div class="info-item" v-if="whatsAppLink">
                  <div class="info-icon icon icon--primary icon--md" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8.01 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="info-content">
                    <h4>WhatsApp</h4>
                    <p>
                      <a
                        :href="whatsAppLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click="trackEvent('whatsapp_click', { link_location: 'contact_sidebar' })"
                      >Chat with us on WhatsApp</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="hours-card neo-card">
              <h3>Operating Hours</h3>
              <HoursClosureNotice variant="compact" />
              <div class="hours-list">
                <div class="hours-row">
                  <span class="day">Monday – Thursday</span>
                  <span class="time">09:00 – 12:45<br>15:00 – 17:45</span>
                </div>
                <div class="hours-row">
                  <span class="day">Friday</span>
                  <span class="time">09:00 – 12:30</span>
                </div>
                <div class="hours-row">
                  <span class="day">Saturday</span>
                  <span class="time"
                    >08:30 – 11:30<br />
                    <span class="time-note">1st and last Saturday of each month</span></span
                  >
                </div>
                <div class="hours-row closed">
                  <span class="day">Sunday</span>
                  <span class="time">Closed</span>
                </div>
                <div class="hours-row closed">
                  <span class="day">Public holidays</span>
                  <span class="time">Closed</span>
                </div>
              </div>
              <p class="hours-disclaimer">
                Closed on all public holidays, including when a 1st- or last-Saturday falls on a holiday.
              </p>
            </div>
          </aside>
        </div>

        <section class="map-section neo-card" aria-labelledby="map-heading">
          <div class="map-section-head">
            <h3 id="map-heading">Find Us</h3>
            <p class="map-lead">226 Thornton Road, Lawson Place, Belthorn, Cape Town 7784</p>
          </div>
          <div class="map-frame">
            <iframe
              :src="mapIframeSrc"
              class="map-iframe"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Map: Lawson Place, 226 Thornton Road, Belthorn, Cape Town 7784"
              allowfullscreen
            />
          </div>
          <div class="map-actions">
            <a
              :href="googleMapsExternalUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-secondary btn-small"
            >
              Open in Google Maps
            </a>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import HoursClosureNotice from '../components/HoursClosureNotice.vue'
import { getWhatsAppLink } from '../practice/whatsapp'
import { trackEvent } from '../analytics'

const whatsAppLink = getWhatsAppLink()

const PRACTICE_ADDRESS =
  '226 Thornton Road, Lawson Place, Belthorn, Cape Town 7784, South Africa'
const MAP_LAT = -33.9843499
const MAP_LON = 18.5121154

const googleMapsKey = (import.meta.env.VITE_GOOGLE_MAPS_EMBED_KEY || '').trim()

const mapIframeSrc = computed(() => {
  if (googleMapsKey) {
    const q = encodeURIComponent(PRACTICE_ADDRESS)
    return `https://www.google.com/maps/embed/v1/place?key=${googleMapsKey}&q=${q}&zoom=17`
  }
  const bbox = `${MAP_LON - 0.004},${MAP_LAT - 0.003},${MAP_LON + 0.004},${MAP_LAT + 0.003}`
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${MAP_LAT},${MAP_LON}`
})

const googleMapsExternalUrl =
  'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(PRACTICE_ADDRESS)

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  company: ''
})

const submitting = ref(false)
const submitStatus = ref(null)

const handleSubmit = async () => {
  submitting.value = true
  submitStatus.value = null

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result?.error || 'Failed to send your enquiry.')
    }

    submitStatus.value = {
      type: 'success',
      message: 'Your message was sent successfully. We will contact you shortly.'
    }

    form.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      company: ''
    }
  } catch (error) {
    submitStatus.value = {
      type: 'error',
      message: error instanceof Error ? error.message : 'We could not send your message. Please email info@drmagerman.co.za or call 021 696 4132.'
    }
  }

  submitting.value = false
}
</script>

<style scoped>
.contact {
  overflow-x: hidden;
  max-width: 100%;
}

.contact-hero {
  background: var(--clinical-hero-bg);
  color: var(--neo-ink);
  padding: 3.5rem 0;
  border-bottom: var(--neo-border);
}

.contact-hero-inner {
  max-width: 40rem;
  min-width: 0;
  overflow-wrap: break-word;
}

.hero-tag {
  display: inline-block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  background: var(--cb-paper);
  border: var(--neo-border-thin);
  padding: 0.35rem 0.75rem;
  margin-bottom: 1rem;
  box-shadow: var(--neo-shadow-sm);
}

.contact-hero-inner h1 {
  font-size: clamp(2rem, 4vw, 2.85rem);
  color: var(--neo-ink);
  margin-bottom: 0.75rem;
}

.contact-hero-inner p {
  font-size: 1.05rem;
  color: var(--neo-ink);
  opacity: 0.92;
  line-height: 1.65;
}

.contact-content {
  padding: 3rem 0 4.5rem;
  background: transparent;
}

.neo-card {
  background: var(--cb-paper);
  border: var(--neo-border);
  box-shadow: var(--neo-shadow);
  padding: 1.75rem 1.75rem 2rem;
}

.contact-top {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: 1.75rem;
  align-items: start;
  margin-bottom: 1.75rem;
  min-width: 0;
}

.contact-form-section,
.contact-sidebar {
  min-width: 0;
}

.contact-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.contact-form-section h2,
.contact-info-card h2,
.hours-card h3 {
  font-size: 1.45rem;
  margin-bottom: 0.5rem;
}

.form-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.form-disclaimer {
  color: var(--text-secondary);
  font-size: 0.88rem;
  margin-bottom: 1.25rem;
  padding: 0.75rem 1rem;
  background: var(--neo-cream);
  border: var(--neo-border-thin);
}

.form-popia {
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.5;
  margin: -0.5rem 0 1.25rem;
  padding: 0 0.15rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-hp {
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.form-group label {
  font-weight: 700;
  color: var(--neo-ink);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.form-group input,
.form-group select,
.form-group textarea {
  display: block;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: 0.8rem 0.95rem;
  border: var(--neo-border-thin);
  border-radius: 0;
  font-size: 0.95rem;
  font-family: inherit;
  color: var(--neo-ink);
  background: #fff;
  box-shadow: 3px 3px 0 0 rgba(10, 10, 10, 0.08);
  transition: box-shadow 0.12s ease, transform 0.12s ease;
}

.form-group input:hover,
.form-group select:hover,
.form-group textarea:hover {
  box-shadow: 4px 4px 0 0 var(--neo-ink);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  box-shadow: 4px 4px 0 0 var(--cb-accent);
  border-color: var(--neo-ink);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-status {
  padding: 1rem;
  border: var(--neo-border-thin);
  text-align: center;
  font-weight: 700;
}

.submit-status.success {
  background: #e0f2fe;
  color: var(--neo-ink);
}

.submit-status.error {
  background: #fee2e2;
  color: var(--neo-ink);
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  min-width: 0;
}

.info-icon {
  width: 48px;
  height: 48px;
  background: var(--cb-surface-2);
  border: var(--neo-border-thin);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: var(--neo-shadow-sm);
  color: var(--cb-accent-deep);
}

.info-content {
  min-width: 0;
  overflow-wrap: break-word;
  word-break: break-word;
}

.info-content h4 {
  font-size: 0.95rem;
  margin-bottom: 0.35rem;
  font-weight: 800;
}

.info-content p {
  line-height: 1.55;
  margin: 0.15rem 0;
  font-size: 0.9rem;
}

.info-content a {
  color: var(--cb-accent);
}

.info-content a:hover {
  text-decoration: underline;
}

.info-note {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-top: 0.35rem;
}

.hours-list {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.hours-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1rem;
  background: var(--neo-cream);
  border: var(--neo-border-thin);
}

.hours-row.closed {
  opacity: 0.65;
}

.hours-row .day {
  font-weight: 700;
  font-size: 0.88rem;
}

.hours-row .time {
  font-weight: 600;
  text-align: right;
  font-size: 0.85rem;
}

.hours-row .time-note {
  display: block;
  font-weight: 500;
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-top: 0.3rem;
  line-height: 1.4;
  max-width: 14rem;
  margin-left: auto;
}

.hours-disclaimer {
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.45;
  margin: 0.75rem 0 0;
  padding-top: 0.65rem;
  border-top: 1px solid var(--slate-200, #e2e8f0);
}

.map-section {
  padding: 1.75rem;
}

.map-section-head {
  margin-bottom: 1rem;
}

.map-section h3 {
  font-size: 1.45rem;
  margin-bottom: 0.35rem;
}

.map-lead {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin: 0;
}

.map-frame {
  position: relative;
  width: 100%;
  border: var(--neo-border);
  box-shadow: var(--neo-shadow-sm);
  background: var(--neo-cream);
  height: 420px;
  min-height: 200px;
}

@media (max-width: 900px) {
  .map-frame {
    height: 340px;
  }
}

.map-iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

.map-actions {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.btn-small {
  padding: 0.65rem 1.25rem;
  font-size: 0.88rem;
}

@media (max-width: 992px) {
  .contact-top {
    grid-template-columns: 1fr;
  }

  .contact-sidebar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.75rem;
  }
}

@media (max-width: 800px) {
  .contact-sidebar {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .contact-sidebar {
    grid-template-columns: 1fr;
  }

  .hours-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .hours-row .time {
    text-align: left;
  }

  .hours-row .time-note {
    margin-left: 0;
    max-width: none;
  }

  .contact-hero {
    padding: 2.5rem 0;
  }

  .contact-content {
    padding: 2rem 0 3rem;
  }

  .neo-card {
    padding: 1.35rem 1.15rem 1.5rem;
  }

  .map-section {
    padding: 1.25rem 1.15rem 1.5rem;
  }

  .map-actions .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .map-frame {
    min-height: 200px;
    height: min(50vh, 280px);
  }

  .contact-form-section h2,
  .contact-info-card h2,
  .hours-card h3,
  .map-section h3 {
    font-size: 1.25rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    font-size: 16px;
  }
}
</style>
