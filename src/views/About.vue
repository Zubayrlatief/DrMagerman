<template>
  <div class="about">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container">
        <div class="about-hero-content">
          <div class="about-hero-image">
            <div class="image-fallback" v-if="!doctorImageLoaded">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"/>
              </svg>
            </div>
            <img 
              v-show="doctorImageLoaded"
              :src="doctorImage" 
              alt="Dr Magerman"
              @load="doctorImageLoaded = true"
              @error="doctorImageLoaded = false"
            />
          </div>
          <div class="about-hero-text">
            <h1>About Dr Magerman</h1>
            <p class="lead">
              With over 15 years of dedicated medical practice, Dr Magerman has been 
              serving the Cape Town community with compassion, expertise, and unwavering 
              commitment to patient care.
            </p>
            <p>
              Our practice is built on the foundation of trust, professionalism, and 
              personalized attention. We believe that every patient deserves the highest 
              quality of medical care in a comfortable and welcoming environment.
            </p>
            <div class="credentials">
              <div class="credential-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                  <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="currentColor"/>
                </svg>
                <span>Medical Degree & Certifications</span>
              </div>
              <div class="credential-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
                </svg>
                <span>Licensed & Accredited</span>
              </div>
              <div class="credential-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                </svg>
                <span>Continuous Professional Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Detail -->
    <section class="services-detail">
      <div class="container">
        <div class="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive healthcare services tailored to meet your needs</p>
        </div>
        <div class="services-list">
          <div class="service-detail-card" v-for="service in detailedServices" :key="service.id">
            <div class="service-detail-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path :d="service.iconPath" fill="currentColor"/>
              </svg>
            </div>
            <div class="service-detail-content">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <ul class="service-features">
                <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Approach -->
    <section class="approach-section">
      <div class="container">
        <div class="approach-content">
          <div class="approach-text">
            <h2>Our Approach to Healthcare</h2>
            <div class="approach-items">
              <div class="approach-item" v-for="item in approachItems" :key="item.id">
                <div class="approach-number">{{ item.number }}</div>
                <div class="approach-details">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="approach-image">
            <div class="image-fallback" v-if="!careImageLoaded">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12H15V15H13V12H11V10H13V7H15V10H17V12Z" fill="currentColor"/>
              </svg>
            </div>
            <img 
              v-show="careImageLoaded"
              src="/images/medical-care.jpg" 
              alt="Quality medical care"
              @load="careImageLoaded = true"
              @error="careImageLoaded = false"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <h2>What Our Patients Say</h2>
          <p>Trusted by thousands of satisfied patients</p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card" v-for="testimonial in testimonials" :key="testimonial.id">
            <div class="testimonial-rating">
              <span v-for="n in 5" :key="n">★</span>
            </div>
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <div class="testimonial-author">
              <strong>{{ testimonial.name }}</strong>
              <span>{{ testimonial.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Experience Quality Healthcare?</h2>
          <p>Book your appointment today and take the first step towards better health.</p>
          <router-link to="/contact" class="btn btn-primary btn-large">Schedule an Appointment</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import doctorImage from '../images/Dr-Meagan-Magerman-2.jpg'

const doctorImageLoaded = ref(false)
const careImageLoaded = ref(false)

onMounted(() => {
  const doctorImg = new Image()
  doctorImg.src = doctorImage
  doctorImg.onload = () => doctorImageLoaded.value = true
  doctorImg.onerror = () => doctorImageLoaded.value = false

  const careImg = new Image()
  careImg.src = '/images/medical-care.jpg'
  careImg.onload = () => careImageLoaded.value = true
  careImg.onerror = () => careImageLoaded.value = false
})

const detailedServices = ref([
  {
    id: 1,
    title: 'General Medical Consultations',
    description: 'Comprehensive health assessments and personalized treatment plans for all your medical needs.',
    features: [
      'Complete physical examinations',
      'Health risk assessments',
      'Personalized treatment plans',
      'Follow-up care and monitoring'
    ],
    iconPath: 'M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z'
  },
  {
    id: 2,
    title: 'Preventive Healthcare',
    description: 'Proactive health management through regular screenings and preventive measures.',
    features: [
      'Annual health check-ups',
      'Vaccination services',
      'Health education and counseling',
      'Lifestyle modification guidance'
    ],
    iconPath: 'M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17V12L12 17L2 12V17Z'
  },
  {
    id: 3,
    title: 'Chronic Disease Management',
    description: 'Expert care and monitoring for ongoing health conditions to ensure optimal outcomes.',
    features: [
      'Diabetes management',
      'Hypertension care',
      'Cardiac monitoring',
      'Medication management'
    ],
    iconPath: 'M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12H15V15H13V12H11V10H13V7H15V10H17V12Z'
  },
  {
    id: 4,
    title: 'Health Screenings',
    description: 'Early detection through comprehensive health evaluations and diagnostic testing.',
    features: [
      'Blood pressure monitoring',
      'Cholesterol screening',
      'Blood glucose testing',
      'General health panels'
    ],
    iconPath: 'M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5V11.24C14.61 11.09 15 10.59 15 10C15 9.45 14.55 9 14 9H13V7.5C13 6.67 12.33 6 11.5 6S10 6.67 10 7.5V9H9C8.45 9 8 9.45 8 10C8 10.59 8.39 11.09 9 11.24ZM16.76 4C16.44 3.22 15.7 2.5 14.76 2.5C13.84 2.5 13.1 3.22 12.78 4H11.22C10.9 3.22 10.16 2.5 9.24 2.5C8.3 2.5 7.56 3.22 7.24 4H5.5C4.67 4 4 4.67 4 5.5V18.5C4 19.33 4.67 20 5.5 20H18.5C19.33 20 20 19.33 20 18.5V5.5C20 4.67 19.33 4 18.5 4H16.76Z'
  },
  {
    id: 5,
    title: 'Women\'s Health',
    description: 'Specialized care for women\'s health needs at every stage of life.',
    features: [
      'Well-woman examinations',
      'Reproductive health',
      'Menopause management',
      'Health screenings'
    ],
    iconPath: 'M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z'
  },
  {
    id: 6,
    title: 'Men\'s Health',
    description: 'Comprehensive healthcare services tailored to men\'s specific health needs.',
    features: [
      'Prostate health screening',
      'Cardiovascular assessments',
      'Hormone level testing',
      'Preventive care programs'
    ],
    iconPath: 'M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z'
  }
])

const approachItems = ref([
  {
    id: 1,
    number: '01',
    title: 'Patient-Centered Care',
    description: 'Every decision is made with your health and wellbeing as the top priority.'
  },
  {
    id: 2,
    number: '02',
    title: 'Evidence-Based Medicine',
    description: 'Treatment plans are based on the latest medical research and best practices.'
  },
  {
    id: 3,
    number: '03',
    title: 'Clear Communication',
    description: 'We ensure you understand your condition and treatment options every step of the way.'
  },
  {
    id: 4,
    number: '04',
    title: 'Comprehensive Follow-Up',
    description: 'Ongoing support and monitoring to ensure the best possible health outcomes.'
  }
])

const testimonials = ref([
  {
    id: 1,
    text: 'Dr Magerman has been my family doctor for years. The care and attention to detail is exceptional. I always feel heard and well-cared for.',
    name: 'Sarah Johnson',
    location: 'Cape Town'
  },
  {
    id: 2,
    text: 'Professional, compassionate, and thorough. The best medical care I\'ve experienced. The entire practice makes you feel comfortable and valued.',
    name: 'Michael Chen',
    location: 'Belthorn'
  },
  {
    id: 3,
    text: 'I appreciate how Dr Magerman takes time to explain everything clearly. The follow-up care is outstanding, and I always feel confident in the treatment plan.',
    name: 'Emma Williams',
    location: 'Cape Town'
  }
])
</script>

<style scoped>
.about {
  overflow-x: hidden;
}

/* About Hero */
.about-hero {
  padding: 4rem 0;
  background: var(--clinical-hero-bg);
  border-bottom: 2px solid var(--neo-ink);
}

.about-hero-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;
}

.about-hero-image {
  position: relative;
  overflow: hidden;
  border: 2px solid var(--neo-ink);
  box-shadow: 6px 6px 0 0 var(--neo-ink);
}

.about-hero-image img {
  width: 100%;
  height: auto;
  display: block;
}

.about-hero-text h1 {
  font-size: 3rem;
  color: var(--neo-ink);
  margin-bottom: 1.5rem;
}

.lead {
  font-size: 1.3rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.about-hero-text p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.credentials {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.credential-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.15rem;
  background: var(--cb-paper);
  border: 2px solid var(--neo-ink);
  box-shadow: 3px 3px 0 0 var(--neo-ink);
  color: var(--neo-ink);
}

.credential-item svg {
  flex-shrink: 0;
}

/* Services Detail */
.services-detail {
  padding: 5rem 0;
  background: #fff;
}

.services-list {
  display: grid;
  gap: 2rem;
}

.service-detail-card {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 2rem;
  padding: 2rem 2.25rem;
  background: var(--cb-paper);
  border: 2px solid var(--neo-ink);
  box-shadow: 4px 4px 0 0 var(--neo-ink);
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}

.service-detail-card:hover {
  transform: translate(-1px, -1px);
  box-shadow: 6px 6px 0 0 var(--cb-accent);
}

.service-detail-icon {
  width: 80px;
  height: 80px;
  background: var(--cb-surface-2);
  border: 2px solid var(--neo-ink);
  box-shadow: 3px 3px 0 0 var(--neo-ink);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cb-accent-deep);
  flex-shrink: 0;
}

.service-detail-content h3 {
  font-size: 1.5rem;
  color: var(--neo-ink);
  margin-bottom: 1rem;
}

.service-detail-content > p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.75rem;
}

.service-features li {
  padding-left: 1.5rem;
  position: relative;
  color: var(--text-secondary);
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--neo-ink);
  font-weight: bold;
}

/* Approach Section */
.approach-section {
  padding: 5rem 0;
  background: var(--cb-paper);
  border-top: 2px solid var(--neo-ink);
}

.approach-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.approach-text h2 {
  font-size: 2.5rem;
  color: var(--neo-ink);
  margin-bottom: 3rem;
}

.approach-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.approach-item {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.approach-number {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--neo-ink);
  background: var(--cb-surface-2);
  border: 2px solid var(--neo-ink);
  box-shadow: 3px 3px 0 0 var(--neo-ink);
  padding: 0.5rem 0.75rem;
  line-height: 1;
  flex-shrink: 0;
  font-family: 'IBM Plex Sans', sans-serif;
  letter-spacing: 0.04em;
}

.approach-details h4 {
  font-size: 1.3rem;
  color: var(--neo-ink);
  margin-bottom: 0.75rem;
}

.approach-details p {
  color: var(--text-secondary);
  line-height: 1.7;
}

.approach-image {
  overflow: hidden;
  border: 2px solid var(--neo-ink);
  box-shadow: 6px 6px 0 0 var(--cb-accent);
}

.approach-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* Testimonials */
.testimonials {
  padding: 5rem 0;
  background: var(--cb-surface);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: var(--cb-paper);
  padding: 2.25rem;
  border: 2px solid var(--neo-ink);
  box-shadow: 4px 4px 0 0 var(--neo-ink);
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}

.testimonial-card:hover {
  transform: translate(-1px, -1px);
  box-shadow: 6px 6px 0 0 var(--cb-accent);
}

.testimonial-rating {
  color: var(--neo-ink);
  font-size: 1.2rem;
  margin-bottom: 1rem;
  letter-spacing: 0.08em;
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.testimonial-author strong {
  color: var(--neo-ink);
  font-size: 1.1rem;
}

.testimonial-author span {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* CTA Section */
.cta-section {
  padding: 5rem 0;
  background: var(--clinical-hero-bg);
  color: var(--neo-ink);
  text-align: center;
  border-top: 2px solid var(--neo-ink);
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--neo-ink);
}

.cta-content p {
  font-size: 1.15rem;
  margin-bottom: 2rem;
  color: var(--neo-ink);
  opacity: 0.88;
  font-weight: 600;
}

.btn-large {
  padding: 1rem 2.5rem;
  font-size: 1.05rem;
}

@media (max-width: 968px) {
  .about-hero-content,
  .approach-content {
    grid-template-columns: 1fr;
  }

  .about-hero-image {
    order: -1;
  }

  .service-detail-card {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .service-detail-icon {
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .about-hero {
    padding: 2.75rem 0;
  }

  .about-hero-text h1 {
    font-size: clamp(1.65rem, 6vw, 2rem);
  }

  .lead {
    font-size: 1.1rem;
  }

  .services-detail,
  .approach-section,
  .testimonials {
    padding: 3.25rem 0;
  }

  .service-detail-card {
    padding: 1.5rem 1.25rem;
    gap: 1.5rem;
  }

  .approach-item {
    flex-direction: column;
    gap: 1rem;
  }

  .approach-number {
    align-self: flex-start;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .testimonial-card {
    padding: 1.5rem 1.25rem;
  }

  .cta-section {
    padding: 3.25rem 0;
  }

  .cta-content h2 {
    font-size: clamp(1.5rem, 5.5vw, 2rem);
  }

  .cta-content .btn-large {
    width: 100%;
    max-width: 22rem;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .about-hero-text h1 {
    font-size: 1.55rem;
  }

  .service-features {
    grid-template-columns: 1fr;
  }

  .cta-content p {
    font-size: 1rem;
  }
}
</style>

