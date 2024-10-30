import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Use the automatic JSX runtime
      babel: {
        plugins: ['@babel/plugin-transform-runtime'],
      },
    }),
  ],
  build: {
    target: 'esnext', // Change to 'es2015' if needed for broader compatibility
  },
  server: {
    port: 3000, // You can set your desired port here
  },
});
