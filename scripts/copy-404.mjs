import { copyFileSync } from 'node:fs'

// GitHub Pages: sin esto las rutas distintas de / muestran 404 al recargar
copyFileSync('dist/index.html', 'dist/404.html')
