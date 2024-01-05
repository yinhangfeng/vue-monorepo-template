<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router';

const router = useRouter();

const pages = router
  .getRoutes()
  .filter((route) => !route.meta.hide)
  .map((route) => ({ name: route.name }));
</script>

<template>
  <header>
    <h2>Playground</h2>
    <nav>
      <template v-for="(page, i) in pages" :key="page.name">
        <router-link :to="page" v-slot="{ route }">{{
          route.fullPath
        }}</router-link>
        <template v-if="i < pages.length - 1"> · </template>
      </template>
    </nav>
  </header>

  <section>
    <router-view />
  </section>
</template>

<style></style>
