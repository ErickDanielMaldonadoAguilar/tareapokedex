import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/tareapokedex/',  // 👈 Esto es lo que hace que funcione en GitHub Pages
  plugins: [
    react(),
    tailwindcss()
  ],
})
