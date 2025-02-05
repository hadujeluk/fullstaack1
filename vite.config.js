import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'My Duka E-Commerce',
        short_name: 'Duka',
        description: 'An amazing e-commerce platform',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/shopping-bag.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/shopping-bag.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
