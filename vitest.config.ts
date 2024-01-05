import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
    coverage: {
      provider: 'istanbul', // or 'v8'
    },
  },
  plugins: [vue(), vueJsxPlugin()],
});
