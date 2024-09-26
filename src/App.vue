<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <navbar />
  <RouterView />
</template>

<style scoped>
main {
  width: 100%;
  height: calc(100vh - 152px);
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 3rem;
}
</style>
