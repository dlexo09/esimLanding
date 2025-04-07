import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/pruebas/eSIM/', // Cambia esto al subdirectorio donde estará tu aplicación
  plugins: [react()],
})
