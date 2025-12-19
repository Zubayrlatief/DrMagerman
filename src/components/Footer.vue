<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Dr. Magerman</h3>
          <p>Providing trusted healthcare services in Cape Town for years.</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About & Services</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
        <div class="footer-section">
          <h4>Contact</h4>
          <p>📍 226 Thornton Road, Belthorn, Cape Town, 7460</p>
          <p>📞 <a href="tel:0216964132">021 696 4132</a></p>
          <p>✉️ <a href="mailto:info@drmagerman.co.za">info@drmagerman.co.za</a></p>
        </div>
        <div class="footer-section">
          <h4>Hours</h4>
          <p>Mon-Thu: 09:00 - 12:45 | 15:00 - 17:45</p>
          <p>Fri: 09:00 - 12:30</p>
          <p>Sat: 08:30 - 11:30</p>
          <p>Sun: Closed</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Dr. Magerman. All rights reserved.</p>
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
  background: var(--dark-green);
  color: #fff;
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

.footer-section h4 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--accent-green);
}

.footer-section p {
  margin: 0.5rem 0;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
}

.footer-section a {
  display: block;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  margin: 0.5rem 0;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: var(--accent-green);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>

