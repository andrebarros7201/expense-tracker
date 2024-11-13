import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  envDir: "./src/envDir",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/tests/setup.js",
  },
});
