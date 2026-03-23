import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
/**
 * Vite Configuration
 * Handles plugin integration (React SWC) and dev server settings.
 */
export default defineConfig({
  plugins: [react(), cloudflare()],
  server: {
    host: true
  }
})