import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Public assets are served from /public.
export default defineConfig({
  plugins: [vue()],
  publicDir: 'public',
  server: {
    port: 3000,
    open: true
  }
})

