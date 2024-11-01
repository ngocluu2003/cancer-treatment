import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import NodeGlobalsPolyfillPlugin from "rollup-plugin-polyfill-node";

export default defineConfig({
  plugins: [
    react(),
    NodeGlobalsPolyfillPlugin({
      process: true,
      buffer: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
});
