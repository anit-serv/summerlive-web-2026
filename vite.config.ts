import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // 星素材を data URL にせず、クリック対象として識別できる個別ファイルで出力する。
    assetsInlineLimit: 0,
  },
})
