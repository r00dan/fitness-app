import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "atoms": path.resolve(__dirname, "./src/components/atoms/index.ts"),
      "molecules": path.resolve(__dirname, "./src/components/molecules/index.ts"),
      "pages": path.resolve(__dirname, "./src/components/pages/index.ts"),
      "hooks": path.resolve(__dirname, "./src/hooks/index.ts"),
      "assets": path.resolve(__dirname, "./src/assets/"),
      "shared-types": path.resolve(__dirname, "../shared/types"),
    },
  },
})
