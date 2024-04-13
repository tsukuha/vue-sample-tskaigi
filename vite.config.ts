import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  test: {
    typecheck: {
      enabled: true,
      tsconfig: 'tsconfig.test.json',
    },
    coverage: {
      enabled: true,
    },
    environment: 'jsdom',
  },
})
