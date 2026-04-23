import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Public assets: /favicon.svg and /vite.svg are the same practice mark (favicon + PWA + any Vite tooling that expects /vite.svg).
export default defineConfig({
  plugins: [vue()],
  publicDir: 'public',
  server: {
    port: 3000,
    open: true
  }
})

