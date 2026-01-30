import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,               // allows describe, it, expect without imports
    environment: 'jsdom',        // browser-like environment
    setupFiles: './src/test/setup.ts',
    css: true,                   // enables CSS imports in tests
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: './coverage',
    },
  },
  resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
}
},
)
