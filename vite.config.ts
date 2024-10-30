import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// vite.config.js
export default {
  base: './', // Use relative paths
  server: {
    host: '0.0.0.0',
    port: 80, // Set the port to 80 if needed
  },
};


