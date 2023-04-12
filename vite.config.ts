import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
module.exports = defineConfig({
  base: '',
  plugins: [
    react(),
  ],
  build: {
    outDir: 'docs',
  },
  server: {
    port: 3000,
    strictPort: true,
  }
});
