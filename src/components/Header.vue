<template>
  <header class="header">
    <div class="container">
      <div class="header-content">

        <!-- Logo -->
        <router-link to="/" class="logo" @click="closeMobileMenu">
          <div class="logo-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" fill="currentColor"/>
            </svg>
          </div>
          <div class="logo-text">
            <span class="logo-name">Dr Magerman</span>
            <span class="logo-sub">Family &amp; General Practitioner</span>
          </div>
        </router-link>

        <!-- Desktop Nav -->
        <nav class="nav" :class="{ 'nav-open': mobileMenuOpen }" aria-label="Main navigation">
          <router-link to="/" @click="closeMobileMenu">Home</router-link>
          <router-link to="/about" @click="closeMobileMenu">About &amp; Services</router-link>
          <router-link to="/contact" @click="closeMobileMenu">Contact</router-link>
          <router-link to="/contact" class="btn btn-primary btn-sm nav-cta" @click="closeMobileMenu">
            Book Appointment
          </router-link>
        </nav>

        <!-- Hamburger -->
        <button
          class="hamburger"
          @click="toggleMobileMenu"
          :aria-expanded="mobileMenuOpen.toString()"
          aria-label="Toggle navigation"
        >
          <span class="bar" :class="{ active: mobileMenuOpen }"></span>
          <span class="bar" :class="{ active: mobileMenuOpen }"></span>
          <span class="bar" :class="{ active: mobileMenuOpen }"></span>
        </button>

      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => { mobileMenuOpen.value = !mobileMenuOpen.value }
const closeMobileMenu = () => { mobileMenuOpen.value = false }

watch(mobileMenuOpen, (open) => {
  document.body.classList.toggle('nav-open-lock', open)
})

onUnmounted(() => {
  document.body.classList.remove('nav-open-lock')
})
</script>

<style scoped>
.header {
  background: var(--cb-paper);
  border-bottom: 2px solid var(--neo-ink);
  box-shadow: 0 3px 0 0 var(--neo-ink);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding-left: env(safe-area-inset-left, 0);
  padding-right: env(safe-area-inset-right, 0);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  gap: 0.75rem 1.5rem;
  position: relative;
  min-width: 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none !important;
  flex-shrink: 0;
  min-width: 0;
}

.logo-icon {
  width: 44px;
  height: 44px;
  background: var(--cb-paper);
  border: 2px solid var(--neo-ink);
  box-shadow: 2px 2px 0 0 var(--neo-ink);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cb-accent-deep);
  flex-shrink: 0;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}

.logo:hover .logo-icon {
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0 0 var(--neo-ink);
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  min-width: 0;
}

.logo-name {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.02rem;
  font-weight: 700;
  color: var(--neo-ink);
  letter-spacing: -0.03em;
}

.logo:hover .logo-name {
  color: var(--cb-accent-deep);
}

.logo-sub {
  font-size: 0.72rem;
  color: var(--slate-600);
  font-weight: 600;
  margin-top: 0.2rem;
  letter-spacing: 0.02em;
}

.nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav a:not(.btn) {
  text-decoration: none !important;
  color: var(--neo-ink);
  font-weight: 700;
  font-size: 0.88rem;
  padding: 0.5rem 0.75rem;
  border: 2px solid transparent;
  transition: background 0.12s ease, border-color 0.12s ease;
}

.nav a:not(.btn):hover {
  background: var(--cb-surface-2);
  border-color: var(--neo-ink);
}

.nav a:not(.btn).router-link-exact-active {
  background: var(--cb-surface-2);
  border: 2px solid var(--neo-ink);
  box-shadow: 2px 2px 0 0 var(--neo-ink);
}

.nav-cta {
  margin-left: 0.5rem;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: var(--cb-surface-2);
  border: 2px solid var(--neo-ink);
  box-shadow: 2px 2px 0 0 var(--neo-ink);
  cursor: pointer;
  min-width: 48px;
  min-height: 48px;
  padding: 0 10px;
  flex-shrink: 0;
  transition: transform 0.12s ease;
}

.hamburger:hover {
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0 0 var(--neo-ink);
}

.bar {
  display: block;
  width: 22px;
  height: 3px;
  background: var(--neo-ink);
  transition: transform 0.25s ease, opacity 0.25s ease;
  transform-origin: center;
}

@media (max-width: 860px) {
  .hamburger {
    display: flex;
  }

  .nav {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    align-items: stretch;
    padding: 1rem 1.25rem 1.5rem;
    gap: 0.35rem;
    border: 2px solid var(--neo-ink);
    box-shadow: 4px 4px 0 0 var(--neo-ink);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
    pointer-events: none;
    max-height: min(72vh, calc(100dvh - 5.5rem));
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .nav-open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: all;
  }

  .nav a:not(.btn) {
    padding: 0.75rem 0.9rem;
    font-size: 0.95rem;
    border: 2px solid var(--neo-ink);
    min-height: 48px;
    display: flex;
    align-items: center;
  }

  .nav-cta {
    margin-left: 0;
    margin-top: 0.35rem;
    text-align: center;
    justify-content: center;
    width: 100%;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .logo-sub {
    display: none;
  }
}
</style>
