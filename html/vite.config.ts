import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import pugPlugin from "vite-plugin-pug";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader(), pugPlugin()],
  base: "",
});
