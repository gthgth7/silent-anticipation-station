
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Serve static files from the token directory
  publicDir: 'public',
  server: {
    port: 8080,
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  }
});
