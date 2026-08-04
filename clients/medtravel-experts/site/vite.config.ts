import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset URLs so the build can be dropped into any subdirectory
  // (Hostinger public_html, a Netlify drop, etc.) without rewriting paths.
  base: './',
  plugins: [react(), tailwindcss()],
})
