<template>
  <div id="app" class="app-root">
    <Header />
    <main id="main-content" tabindex="-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
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
}

main {
  flex: 1;
  width: 100%;
}
</style>

