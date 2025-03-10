import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/mon-cv/',
  optimizeDeps: {
    include: ['vue']  // 🟣 Forcer l'inclusion de Vue dans le bundle
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],  // 🟣 Gérer les imports CommonJS
    }
  }
})
