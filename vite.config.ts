import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import manus from "vite-plugin-manus-runtime";

export default defineConfig({
  plugins: [
    react(),
    tailwind(),
    manus()
  ],
  server: {
    host: true
  }
});
