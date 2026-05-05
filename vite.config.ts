import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/*
 * GitHub Pages (sitio de proyecto): https://<usuario>.github.io/<nombre-repo>/
 * El workflow define VITE_BASE como /nombre-del-repo/
 * Local (`npm run dev`): base "/"
 */
const viteBase = process.env.VITE_BASE

const base =
  viteBase && viteBase.endsWith('/')
    ? viteBase
    : viteBase
      ? `${viteBase.replace(/\/$/, '')}/`
      : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
