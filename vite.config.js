import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
  envDir: './config',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    modules: {},
    postcss: {
      plugins: [require('postcss-preset-env'), require('postcss-nesting')],
    },
  },
  build: {
    sourcemap: true,
  },
});
