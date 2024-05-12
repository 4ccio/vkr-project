import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/vkr-project",
  plugins: [react()],
  root: "src",
});
