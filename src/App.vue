<template>
  <div id="app" class="app-root">
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <div class="site-top">
      <HoursClosureNotice variant="banner" />
      <Header />
    </div>
    <main id="main-content" tabindex="-1">
      <div class="container">
        <Breadcrumb />
      </div>
      <router-view />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import HoursClosureNotice from './components/HoursClosureNotice.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import { injectStructuredData } from './seo/structuredData'

onMounted(() => {
  injectStructuredData()
})
</script>

<style scoped>
.app-root {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow-x: clip;
  min-width: 0;
  max-width: 100%;
}

.site-top {
  position: sticky;
  top: 0;
  z-index: 1000;
}

main {
  flex: 1;
  min-width: 0;
  width: 100%;
  max-width: 100%;
}
</style>

