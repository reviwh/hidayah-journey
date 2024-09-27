<template>
  <div class="status-container">
    <div class="pre-departure"></div>
    <span class="text-body-md">Pra-Keberangkatan</span>
    <div class="departure"></div>
    <span class="text-body-md">Keberangkatan</span>
    <div class="post-departure"></div>
    <span class="text-body-md">Pasca-Keberangkatan</span>
    <div class="canceled"></div>
    <span class="text-body-md">Dibatalkan</span>
  </div>
</template>

<script lang="ts">
import "@/styles/jemaahstatus.css";
export default {
  name: "JemaahStatus",
};
</script>

<style>
.status-container {
  display: flex;
  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;
}

.status-container > div {
  margin-left: 0.5rem;
}
</style>
