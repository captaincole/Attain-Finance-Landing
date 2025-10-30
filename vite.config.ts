import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { cloudflare } from '@cloudflare/vite-plugin'

const srcPath = fileURLToPath(new URL('./src', import.meta.url))
const componentsPath = fileURLToPath(new URL('./src/components', import.meta.url))
const dataPath = fileURLToPath(new URL('./src/data', import.meta.url))

export default defineConfig({
  plugins: [react(), cloudflare()],
  resolve: {
    alias: {
      '@': srcPath,
      '@components': componentsPath,
      '@data': dataPath,
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        faq: fileURLToPath(new URL('./faq.html', import.meta.url)),
      },
    },
  },
})
