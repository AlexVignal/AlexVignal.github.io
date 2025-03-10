import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/mon-cv/', // Vérifie que le nom correspond bien au repo GitHub
  build: {
    outDir: 'dist', // Assure que le build va bien dans 'dist'
  }
})
