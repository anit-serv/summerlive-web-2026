import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // 星素材を data URL にせず、クリック対象として識別できる個別ファイルで出力する。
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        bands: resolve(__dirname, 'bands.html'),
        sponsors: resolve(__dirname, 'sponsors.html'),
        notFound: resolve(__dirname, '404.html'),
      },
    },
  },
})
