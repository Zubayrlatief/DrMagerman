<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <h1>Dr. Magerman</h1>
          <p class="tagline">Trusted Healthcare in Cape Town</p>
        </div>
        <nav class="nav" :class="{ 'nav-open': mobileMenuOpen }">
          <router-link to="/" @click="closeMobileMenu">Home</router-link>
          <router-link to="/about" @click="closeMobileMenu">About & Services</router-link>
          <router-link to="/contact" @click="closeMobileMenu">Contact</router-link>
        </nav>
        <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.header {
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid var(--border-color);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
}

.logo h1 {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-green);
  margin: 0;
  letter-spacing: -0.5px;
}

.tagline {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0.25rem 0 0 0;
  font-weight: 400;
}

.nav {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav a {
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
  position: relative;
}

.nav a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-green);
  transition: width 0.3s ease;
}

.nav a:hover,
.nav a.router-link-active {
  color: var(--primary-green);
}

.nav a.router-link-active::after,
.nav a:hover::after {
  width: 100%;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--primary-green);
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }

  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav a::after {
    display: none;
  }
}
</style>

