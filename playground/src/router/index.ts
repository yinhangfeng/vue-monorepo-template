import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import kebabCase from 'lodash/kebabCase';

const viewModules = import.meta.glob('../views/*.vue');

const nameFromPath = (path: string) => path.replace(/^.*\/(\w+)\.vue$/, '$1');

const pages: RouteRecordRaw[] = Object.keys(viewModules).map((path) => {
  const name = nameFromPath(path);
  return {
    name,
    path: name === '404' ? '/:patchMatch(.*)*' : '/' + kebabCase(name),
    component: viewModules[path],
    meta: {
      hide: name === '404',
    },
  };
});

const router = createRouter({
  history: createWebHistory(),
  routes: [...pages],
});

export default router;
