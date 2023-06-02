import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 5555 },

  base: '/',

  build: {
    target: 'esnext',
  },

  resolve: { alias: { '@': path.resolve(__dirname, './src/modules') } },

  plugins: [react(), svgr()],
});
