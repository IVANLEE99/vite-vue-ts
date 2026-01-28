import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
console.log("vite.config.ts loaded ✅");

export default defineConfig({
  base: "/vite-vue-ts/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
