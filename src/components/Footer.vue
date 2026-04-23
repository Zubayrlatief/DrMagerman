<template>
  <footer class="footer">
    <div class="container">

      <!-- Main grid -->
      <div class="footer-grid">

        <!-- Brand -->
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="footer-logo-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" fill="currentColor"/>
              </svg>
            </div>
            <span class="footer-logo-name">Dr Magerman</span>
          </div>
          <p class="footer-tagline">
            Family &amp; General Practitioner<br>
            serving the Cape Town community.
          </p>
          <p class="footer-careers" role="status" aria-label="Employment and vacancies">
            <strong>Careers:</strong> There are no open vacancies.
          </p>
        </div>

        <!-- Navigation -->
        <div class="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About &amp; Services</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
            <li><router-link to="/about#careers">Careers &amp; vacancies</router-link></li>
            <li><router-link to="/contact" class="footer-link-accent">Book an Appointment →</router-link></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-col">
          <h4>Contact</h4>
          <ul class="contact-list">
            <li>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="currentColor"/>
              </svg>
              <span>226 Thornton Road, Belthorn<br>Cape Town, 7784</span>
            </li>
            <li>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02L6.62 10.79z" fill="currentColor"/>
              </svg>
              <a href="tel:0216964132">021 696 4132</a>
            </li>
            <li>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
              </svg>
              <a href="mailto:info@drmagerman.co.za">info@drmagerman.co.za</a>
            </li>
          </ul>
        </div>

        <!-- Hours -->
        <div class="footer-col">
          <h4>Consulting Hours</h4>
          <ul class="hours-list">
            <li>
              <span class="hours-day">Mon – Thu</span>
              <span class="hours-time">09:00–12:45 &middot; 15:00–17:45</span>
            </li>
            <li>
              <span class="hours-day">Friday</span>
              <span class="hours-time">09:00–12:30</span>
            </li>
            <li>
              <span class="hours-day">Saturday</span>
              <span class="hours-time"
                >08:30–11:30 <span class="footer-hours-qual">(1st &amp; last of month)</span></span
              >
            </li>
            <li class="hours-closed">
              <span class="hours-day">Sunday</span>
              <span class="hours-time">Closed</span>
            </li>
            <li class="hours-closed">
              <span class="hours-day">Public holidays</span>
              <span class="hours-time">Closed</span>
            </li>
          </ul>
        </div>

      </div>

      <div class="footer-legal" role="complementary" aria-label="Medical and privacy information">
        <p>
          This website provides general information about the practice and is not a substitute for an in-person consultation or emergency care.
          For medical emergencies, call
          <a href="tel:10177">10177</a> or
          <a href="tel:112">112</a>
          — do not use email or the contact form for urgent matters.
        </p>
        <p>
          Health practitioners in South Africa are registered with the
          <a href="https://www.hpcsa.co.za/" target="_blank" rel="noopener noreferrer">Health Professions Council of South Africa (HPCSA)</a>.
          Personal information is handled in line with the Protection of Personal Information Act (POPIA).
        </p>
      </div>

      <!-- Bottom bar -->
      <div class="footer-bottom">
        <p class="footer-copy">&copy; {{ currentYear }} Dr Magerman. All rights reserved.</p>
        <p class="footer-credit" lang="en-ZA">
          Website design by
          <a
            href="https://zarmediagroup.com/"
            class="footer-credit-link"
            target="_blank"
            rel="noopener noreferrer"
          >zarmediagroup</a>
        </p>
        <p class="footer-emergency">
          <strong>Emergency?</strong> Dial
          <a href="tel:10177">10177</a> (ambulance) or
          <a href="tel:112">112</a>
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: var(--neo-ink);
  color: #f5f5f5;
  padding: 3.5rem 0 0;
  padding-bottom: max(env(safe-area-inset-bottom, 0), 0.5rem);
  border-top: 2px solid var(--neo-ink);
  box-shadow: inset 0 4px 0 0 var(--cb-accent);
  overflow-x: hidden;
  max-width: 100%;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.7fr 1fr 1.25fr 1.4fr;
  gap: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 3px solid rgba(255, 255, 255, 0.15);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1rem;
}

.footer-logo-icon {
  width: 38px;
  height: 38px;
  background: #fff;
  border: 2px solid rgba(255, 255, 255, 0.9);
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cb-accent-deep);
  flex-shrink: 0;
}

.footer-logo-name {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.03em;
}

.footer-tagline {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.65;
  margin: 0;
}

.footer-careers {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.5;
  margin: 1rem 0 0;
  max-width: 18rem;
}

.footer-careers strong {
  color: rgba(255, 255, 255, 0.75);
  font-weight: 600;
}

.footer-col h4 {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #94a3b8;
  margin-bottom: 1.1rem;
}

.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-col a {
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none !important;
  transition: color 0.12s ease;
  overflow-wrap: break-word;
  word-break: break-word;
}

.footer-col a:hover {
  color: #7dd3fc;
}

.footer-link-accent {
  color: #7dd3fc !important;
  font-weight: 700;
}

.contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.75);
}

.contact-list svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: #7dd3fc;
}

.contact-list span {
  line-height: 1.55;
}

.hours-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.hours-list li {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.hours-day {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.45);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.hours-time {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  overflow-wrap: break-word;
  max-width: 100%;
}

.footer-hours-qual {
  display: block;
  font-size: 0.72rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.55);
  margin-top: 0.2rem;
  line-height: 1.35;
}

.hours-closed .hours-time {
  color: rgba(255, 255, 255, 0.4);
}

.footer-legal {
  padding: 1.5rem 0 0;
  margin-bottom: 1.5rem;
  max-width: 48rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 1.5rem;
}

.footer-legal p {
  font-size: 0.75rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 0.9rem;
}

.footer-legal p:last-child {
  margin-bottom: 0;
}

.footer-legal a {
  color: #7dd3fc;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.footer-legal a:hover {
  color: #e2e8f0;
}

.footer-bottom {
  padding: 1.25rem 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem 1.5rem;
}

.footer-copy {
  justify-self: start;
}

.footer-credit {
  justify-self: center;
  text-align: center;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  max-width: 22rem;
  line-height: 1.5;
}

.footer-credit-link {
  color: #7dd3fc !important;
  font-weight: 600;
  text-decoration: underline !important;
  text-underline-offset: 3px;
}

.footer-credit-link:hover {
  color: #e2e8f0 !important;
}

.footer-emergency {
  justify-self: end;
  text-align: right;
}

.footer-copy,
.footer-emergency {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.45);
  margin: 0;
}

.footer-emergency strong {
  color: #cbd5e1;
}

.footer-emergency a {
  color: #7dd3fc;
  font-weight: 700;
  text-decoration: none !important;
}

.footer-emergency a:hover {
  color: #fff;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 900px) {
  .footer-bottom {
    grid-template-columns: 1fr;
    justify-items: stretch;
  }

  .footer-copy,
  .footer-credit,
  .footer-emergency {
    justify-self: stretch;
    text-align: center;
  }

  .footer-emergency {
    text-align: center;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 1.75rem;
    padding-bottom: 2rem;
  }

  .footer {
    padding-top: 2.5rem;
  }

  .footer-bottom {
    gap: 1rem;
    padding-top: 1rem;
    padding-bottom: calc(1.25rem + env(safe-area-inset-bottom, 0));
  }

  .footer-credit {
    font-size: 0.8rem;
    max-width: none;
    padding: 0.75rem 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }
}
</style>
