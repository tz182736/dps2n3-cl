import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// added:20230516
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA()],
  server: {
    host: '0.0.0.0',
  }
})
