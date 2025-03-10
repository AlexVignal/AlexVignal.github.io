import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/'  // 🟣 Mettre juste '/' car le site est à la racine !
})
