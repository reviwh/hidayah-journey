<script setup lang="ts">
import Navbar from "./components/NavbarComponent.vue";
import Sidebar from "./components/Sidebar/SidebarComponent.vue";
</script>

<template>
  <navbar />
  <main>
    <sidebar />
    <RouterView />
  </main>
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
