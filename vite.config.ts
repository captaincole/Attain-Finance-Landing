import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { cloudflare } from '@cloudflare/vite-plugin'

const srcPath = fileURLToPath(new URL('./src', import.meta.url))
const componentsPath = fileURLToPath(new URL('./src/components', import.meta.url))

export default defineConfig({
  plugins: [react(), cloudflare()],
  resolve: {
    alias: {
      '@': srcPath,
      '@components': componentsPath,
    },
  },
})
