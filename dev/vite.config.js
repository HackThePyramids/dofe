import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/dofe/",
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        development: 'development/index.html'
      },
    },
  }
})
