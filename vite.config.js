import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: 'https://github.com/NikhilDhaliya/PestiCare', 
  plugins: [react(), tailwindcss()],
})