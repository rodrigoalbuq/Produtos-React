import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Dynamic base: GitHub Pages uses repo path; Vercel uses '/'
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
