import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
  plugins: [
    react({
      include: /\.(jsx|tsx)$/,
      babel: {
        plugins: ["styled-components"],
        babelrc: false,
        configFile: false,
      },
    }),
  ],
});
