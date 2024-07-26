import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), basicSsl()],
  resolve: {
    alias: {
      '@three': resolve(__dirname, 'node_modules/three'),
    },
  },
  server: {
    https: {
      key: '',
    },
    host: '0.0.0.0',
  },
});
