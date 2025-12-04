import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. ต้องมีบรรทัดนี้
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. ต้องมีวงเล็บนี้ เพื่อสั่งให้ Tailwind ทำงาน
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})