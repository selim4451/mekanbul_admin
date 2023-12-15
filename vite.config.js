import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // npm run dev ile projeyi tarayıcıda otamatik olarak açma
  server: {
    open: true,
  }
})
