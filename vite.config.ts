import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
/**
 * Vite Configuration
 * Handles plugin integration (React SWC) and dev server settings.
 */
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  }
})
