<template>
  <div class="contact">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <div class="contact-hero-content">
          <h1>Get in Touch</h1>
          <p>We're here to help. Reach out to schedule an appointment or ask any questions.</p>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form-section">
            <div class="card-image">
              <img src="/images/medical-facility.jpg" alt="Clinic interior" />
            </div>
            <h2>Send Us a Message</h2>
            <p class="form-description">Fill out the form below and we'll get back to you as soon as possible.</p>
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-group">
                <label for="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
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
                  required 
                  placeholder="021 XXX XXXX"
                />
              </div>
              <div class="form-group">
                <label for="subject">Subject *</label>
                <select id="subject" v-model="form.subject" required>
                  <option value="">Select a subject</option>
                  <option value="appointment">Book Appointment</option>
                  <option value="general">General Inquiry</option>
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
                  placeholder="Please provide details about your inquiry..."
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

          <!-- Contact Info -->
          <div class="contact-info-section">
            <div class="contact-info-card">
              <div class="card-image">
                <img src="/images/doctor-portrait.jpg" alt="Doctor portrait" />
              </div>
              <h2>Contact Information</h2>
              <div class="info-items">
                <div class="info-item">
                  <div class="info-icon icon icon--primary icon--md">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="info-content">
                    <h4>Location</h4>
                    <p>226 Thornton Road, Belthorn<br>Cape Town, 7460</p>
                    <p class="info-note">On the Corner of Lawson and Thornton Road<br>Building name: Lawson Place</p>
                  </div>
                </div>
                <div class="info-item">
                  <div class="info-icon icon icon--primary icon--md">
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
                  <div class="info-icon icon icon--primary icon--md">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="info-content">
                    <h4>Email</h4>
                    <p><a href="mailto:info@drmagerman.co.za">info@drmagerman.co.za</a></p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Operating Hours -->
            <div class="hours-card">
              <div class="card-image">
                <img src="/images/medical-care.jpg" alt="Medical care" />
              </div>
              <h3>Operating Hours</h3>
              <div class="hours-list">
                <div class="hours-row">
                  <span class="day">Monday - Thursday</span>
                  <span class="time">09:00 – 12:45<br>15:00 – 17:45</span>
                </div>
                <div class="hours-row">
                  <span class="day">Friday</span>
                  <span class="time">09:00 – 12:30</span>
                </div>
                <div class="hours-row">
                  <span class="day">Saturday</span>
                  <span class="time">08:30 – 11:30</span>
                </div>
                <div class="hours-row closed">
                  <span class="day">Sunday & Public Holidays</span>
                  <span class="time">Closed</span>
                </div>
              </div>
            </div>

            <!-- Map Placeholder -->
            <div class="map-section">
              <h3>Find Us</h3>
              <div class="map-placeholder">
                <div class="map-fallback" v-if="!mapImageLoaded">
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                  </svg>
                  <p>226 Thornton Road, Belthorn<br>Cape Town, 7460</p>
                </div>
                <img 
                  v-show="mapImageLoaded"
                  src="/images/map-placeholder.jpg" 
                  alt="Location map"
                  @load="mapImageLoaded = true"
                  @error="mapImageLoaded = false"
                />
                <div class="map-overlay">
                  <p>226 Thornton Road, Belthorn<br>Cape Town, 7460</p>
                  <a href="https://maps.google.com/?q=226+Thornton+Road,+Belthorn,+Cape+Town,+7460" target="_blank" class="btn btn-secondary btn-small">
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitting = ref(false)
const submitStatus = ref(null)
const mapImageLoaded = ref(false)

const handleSubmit = async () => {
  submitting.value = true
  submitStatus.value = null

  // Simulate form submission
  setTimeout(() => {
    submitting.value = false
    submitStatus.value = {
      type: 'success',
      message: 'Thank you! Your message has been sent. We will get back to you soon.'
    }
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }

    // Clear status after 5 seconds
    setTimeout(() => {
      submitStatus.value = null
    }, 5000)
  }, 1500)
}
</script>

<style scoped>
.contact {
  overflow-x: hidden;
}

/* Contact Hero */
.contact-hero {
  background: linear-gradient(135deg, rgba(30, 58, 95, 0.86) 0%, rgba(15, 118, 110, 0.86) 100%), url('/images/medical-care.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  padding: 4rem 0;
  text-align: center;
}

.contact-hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.contact-hero-content p {
  font-size: 1.2rem;
  opacity: 0.95;
}

/* Contact Content */
.contact-content {
  padding: 5rem 0;
  background: var(--background-light);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
}

/* Contact Form */
.contact-form-section {
  background: #fff;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.contact-form-section h2 {
  font-size: 2rem;
  color: var(--dark-blue);
  margin-bottom: 0.5rem;
}

.form-description {
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: var(--dark-blue);
  font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-blue);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-status {
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
}

.submit-status.success {
  background: var(--light-green);
  color: var(--dark-green);
  border: 1px solid var(--border-color);
}

.submit-status.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

/* Contact Info */
.contact-info-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-info-card,
.hours-card,
.map-section {
  background: #fff;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.contact-info-card h2,
.hours-card h3,
.map-section h3 {
  font-size: 1.8rem;
  color: var(--dark-blue);
  margin-bottom: 2rem;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.info-icon {
  width: 50px;
  height: 50px;
  background: var(--light-blue);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-blue);
  flex-shrink: 0;
}

.info-content h4 {
  font-size: 1.2rem;
  color: var(--dark-blue);
  margin-bottom: 0.5rem;
}

.info-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0.25rem 0;
}

.info-content a {
  color: var(--primary-blue);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.info-content a:hover {
  color: var(--dark-blue);
}

.info-note {
  font-size: 0.9rem;
  color: var(--text-secondary);
  opacity: 0.8;
  margin-top: 0.5rem;
}

/* Hours Card */
.hours-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.hours-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  background: #fff;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: background 0.3s ease;
}

.hours-row:hover {
  background: var(--light-blue);
}

.hours-row.closed {
  background: var(--background-light);
  opacity: 0.7;
}

.hours-row .day {
  font-weight: 600;
  color: var(--dark-blue);
}

.hours-row .time {
  color: var(--text-secondary);
  font-weight: 500;
  text-align: right;
}

/* Map Section */
.map-placeholder {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  height: 300px;
}

.map-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.map-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.map-overlay p {
  margin: 0;
  font-weight: 500;
}

.card-image {
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.btn-small {
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
}

@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .map-overlay {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .contact-hero-content h1 {
    font-size: 2rem;
  }

  .contact-form-section,
  .contact-info-card,
  .hours-card,
  .map-section {
    padding: 2rem;
  }

  .hours-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .hours-row .time {
    text-align: left;
  }
}
</style>

