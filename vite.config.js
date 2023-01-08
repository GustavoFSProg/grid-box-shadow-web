import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://dois-box-shadow-api-gtwk.vercel.app/'
    }
  },
  plugins: [react()],
})
