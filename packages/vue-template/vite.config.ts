import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineLibConfig } from '../../packages/app-tools';

export default defineLibConfig({
  plugins: [vue(), vueJsx()],
});
