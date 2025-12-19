<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">Your Trusted Healthcare Partner</h1>
            <p class="hero-subtitle">
              Providing compassionate, professional medical care in the heart of Cape Town. 
              Experience healthcare you can trust.
            </p>
            <div class="hero-cta">
              <router-link to="/contact" class="btn btn-primary">Book an Appointment</router-link>
              <router-link to="/about" class="btn btn-secondary">Learn More</router-link>
            </div>
            <div class="trust-indicators">
              <div class="trust-item">
                <span class="trust-number">15+</span>
                <span class="trust-label">Years Experience</span>
              </div>
              <div class="trust-item">
                <span class="trust-number">5000+</span>
                <span class="trust-label">Patients Served</span>
              </div>
              <div class="trust-item">
                <span class="trust-number">98%</span>
                <span class="trust-label">Satisfaction Rate</span>
              </div>
            </div>
          </div>
          <div class="hero-image">
            <div class="image-wrapper">
              <div class="image-fallback" v-if="!doctorImageLoaded">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"/>
                </svg>
              </div>
              <img 
                v-show="doctorImageLoaded"
                :src="doctorImage" 
                alt="Dr. Magerman - Professional Healthcare Provider"
                @load="doctorImageLoaded = true"
                @error="doctorImageLoaded = false"
              />
              <div class="image-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
                <span>Certified Professional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="services-overview">
      <div class="container">
        <div class="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive healthcare solutions tailored to your needs</p>
        </div>
        <div class="services-grid">
          <div class="service-card" v-for="service in services" :key="service.id">
            <div class="service-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path :d="service.iconPath" fill="currentColor"/>
              </svg>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose">
      <div class="container">
        <div class="why-choose-content">
          <div class="why-choose-text">
            <h2>Why Choose Dr. Magerman?</h2>
            <div class="features-list">
              <div class="feature-item" v-for="feature in features" :key="feature.id">
                <div class="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.description }}</p>
                </div>
              </div>
            </div>
            <router-link to="/about" class="btn btn-primary">Learn More About Us</router-link>
          </div>
          <div class="why-choose-image">
            <div class="image-fallback" v-if="!facilityImageLoaded">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12H15V15H13V12H11V10H13V7H15V10H17V12Z" fill="currentColor"/>
              </svg>
            </div>
            <img 
              v-show="facilityImageLoaded"
              src="/images/medical-facility.jpg" 
              alt="Modern medical facility"
              @load="facilityImageLoaded = true"
              @error="facilityImageLoaded = false"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Operating Hours -->
    <section class="hours-section">
      <div class="container">
        <div class="hours-card">
          <h2>Operating Hours</h2>
          <div class="hours-grid">
            <div class="hours-item">
              <span class="day">Monday - Thursday</span>
              <span class="time">09:00 – 12:45 | 15:00 – 17:45</span>
            </div>
            <div class="hours-item">
              <span class="day">Friday</span>
              <span class="time">09:00 – 12:30</span>
            </div>
            <div class="hours-item">
              <span class="day">Saturday</span>
              <span class="time">08:30 – 11:30</span>
            </div>
            <div class="hours-item closed">
              <span class="day">Sunday & Public Holidays</span>
              <span class="time">Closed</span>
            </div>
          </div>
          <router-link to="/contact" class="btn btn-primary">Get in Touch</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import doctorImage from '../images/Dr-Meagan-Magerman-2.jpg'

const doctorImageLoaded = ref(false)
const facilityImageLoaded = ref(false)

onMounted(() => {
  // Try to load images
  const doctorImg = new Image()
  doctorImg.src = doctorImage
  doctorImg.onload = () => doctorImageLoaded.value = true
  doctorImg.onerror = () => doctorImageLoaded.value = false

  const facilityImg = new Image()
  facilityImg.src = '/images/medical-facility.jpg'
  facilityImg.onload = () => facilityImageLoaded.value = true
  facilityImg.onerror = () => facilityImageLoaded.value = false
})

const services = ref([
  {
    id: 1,
    title: 'General Consultations',
    description: 'Comprehensive health assessments and personalized treatment plans.',
    iconPath: 'M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z'
  },
  {
    id: 2,
    title: 'Preventive Care',
    description: 'Regular check-ups and screenings to maintain optimal health.',
    iconPath: 'M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17V12L12 17L2 12V17Z'
  },
  {
    id: 3,
    title: 'Chronic Disease Management',
    description: 'Expert care for ongoing health conditions and monitoring.',
    iconPath: 'M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12H15V15H13V12H11V10H13V7H15V10H17V12Z'
  },
  {
    id: 4,
    title: 'Health Screenings',
    description: 'Early detection through comprehensive health evaluations.',
    iconPath: 'M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5V11.24C14.61 11.09 15 10.59 15 10C15 9.45 14.55 9 14 9H13V7.5C13 6.67 12.33 6 11.5 6S10 6.67 10 7.5V9H9C8.45 9 8 9.45 8 10C8 10.59 8.39 11.09 9 11.24ZM16.76 4C16.44 3.22 15.7 2.5 14.76 2.5C13.84 2.5 13.1 3.22 12.78 4H11.22C10.9 3.22 10.16 2.5 9.24 2.5C8.3 2.5 7.56 3.22 7.24 4H5.5C4.67 4 4 4.67 4 5.5V18.5C4 19.33 4.67 20 5.5 20H18.5C19.33 20 20 19.33 20 18.5V5.5C20 4.67 19.33 4 18.5 4H16.76Z'
  }
])

const features = ref([
  {
    id: 1,
    title: 'Experienced Professional',
    description: 'Years of dedicated service with a proven track record of excellence.'
  },
  {
    id: 2,
    title: 'Patient-Centered Care',
    description: 'Your health and comfort are our top priorities in every interaction.'
  },
  {
    id: 3,
    title: 'Modern Facilities',
    description: 'State-of-the-art equipment and comfortable, welcoming environment.'
  },
  {
    id: 4,
    title: 'Convenient Location',
    description: 'Easily accessible in Belthorn, Cape Town with ample parking.'
  }
])
</script>

<style scoped>
.home {
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%);
  color: #fff;
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: url('/images/medical-pattern.svg') repeat;
  opacity: 0.05;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  opacity: 0.95;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.trust-indicators {
  display: flex;
  gap: 3rem;
}

.trust-item {
  display: flex;
  flex-direction: column;
}

.trust-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-green);
}

.trust-label {
  font-size: 0.9rem;
  opacity: 0.9;
}

.hero-image {
  position: relative;
}

.image-wrapper {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  background: var(--light-green);
}

.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  min-height: 500px;
}

.image-badge {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.95);
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-green);
  font-weight: 600;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

/* Services Overview */
.services-overview {
  padding: 5rem 0;
  background: var(--background-light);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--dark-green);
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.section-header p {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.service-card {
  background: #fff;
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  border: 1px solid var(--border-color);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.service-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: var(--light-green);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-green);
}

.service-card h3 {
  font-size: 1.3rem;
  color: var(--dark-green);
  margin-bottom: 1rem;
  font-weight: 600;
}

.service-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Why Choose Us */
.why-choose {
  padding: 5rem 0;
  background: #fff;
}

.why-choose-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.why-choose-text h2 {
  font-size: 2.5rem;
  color: var(--dark-green);
  margin-bottom: 2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.features-list {
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature-icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: var(--light-green);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-green);
}

.feature-item h4 {
  font-size: 1.2rem;
  color: var(--dark-green);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.feature-item p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.why-choose-image {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.why-choose-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* Hours Section */
.hours-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--light-green) 0%, #ecfdf5 100%);
}

.hours-card {
  background: #fff;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hours-card h2 {
  font-size: 2.2rem;
  color: var(--dark-green);
  margin-bottom: 2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.hours-grid {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  background: var(--light-green);
  border-radius: 12px;
  transition: background 0.3s ease;
}

.hours-item:hover {
  background: #a7f3d0;
}

.hours-item.closed {
  background: #f5f5f5;
  opacity: 0.7;
}

.day {
  font-weight: 600;
  color: var(--dark-green);
}

.time {
  color: var(--text-secondary);
  font-weight: 500;
}

@media (max-width: 968px) {
  .hero-content,
  .why-choose-content {
    grid-template-columns: 1fr;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-image {
    order: -1;
  }

  .trust-indicators {
    justify-content: space-around;
    gap: 1.5rem;
  }

  .hours-item {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 0;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-cta {
    flex-direction: column;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .hours-card {
    padding: 2rem;
  }
}
</style>

