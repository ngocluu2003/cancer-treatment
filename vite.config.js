<<<<<<< HEAD
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
=======
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
>>>>>>> 4d2f5fe6280b295b6d5dce33728bb4c6df7d641c

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})