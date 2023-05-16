import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'
import type { ManifestOptions, VitePWAOptions } from 'vite-plugin-pwa'
import replace from '@rollup/plugin-replace'

const pwaOptions: Partial<VitePWAOptions> = {
  mode: 'development',
  base: '/',
  includeAssets: ['favicon.svg'],
  manifest: {
    name: 'DPS2n3 Web App',
    short_name: 'DPS2n3',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'dps2n3.png', // <== don't add slash, for testing
        sizes: '96x96',
        type: 'image/png',
      },
    ],
  },
  devOptions: {
    enabled: process.env.SW_DEV === 'true',
    /* when using generateSW the PWA plugin will switch to classic */
    type: 'module',
    navigateFallback: 'index.html',
  },
}

const replaceOptions = { __DATE__: new Date().toISOString() }
const claims = process.env.CLAIMS === 'true'
const reload = process.env.RELOAD_SW === 'true'
const selfDestroying = process.env.SW_DESTROY === 'true'

if (process.env.SW === 'true') {
  pwaOptions.srcDir = 'src'
  pwaOptions.filename = claims ? 'claims-sw.ts' : 'prompt-sw.ts'
  pwaOptions.strategies = 'injectManifest'
    ; (pwaOptions.manifest as Partial<ManifestOptions>).name = 'PWA Inject Manifest'
    ; (pwaOptions.manifest as Partial<ManifestOptions>).short_name = 'PWA Inject'
}

if (claims)
  pwaOptions.registerType = 'autoUpdate'

if (reload) {
  // @ts-expect-error just ignore
  replaceOptions.__RELOAD_SW__ = 'true'
}

if (selfDestroying)
  pwaOptions.selfDestroying = selfDestroying


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // VitePWA(pwaOptions),
    // replace(replaceOptions)

    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: { enabled: true },

      manifest: {
        name: 'Dps2n3 App',
        short_name: 'Dps2n3',
        scope: '/',
        start_url: '/',
        icons: [{
          src: '/assets/dps2n3-144x144.png', // <== don't add slash, for testing
          sizes: '144x144',
          type: 'image/png',
          purpose: "any"
        }]
      },
      // workbox: { runtimeCaching: [{ urlPattern: /^https:/ / fonts.googleapis.com /, handler: 'StaleWhileRevalidate', options: { cacheName: 'google- fonts - stylesheets' } }] }
    })
  ],
  server: {
    host: '0.0.0.0',
  }
})
