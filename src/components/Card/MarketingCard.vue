<template>
  <div class="card glass">
    <div class="image" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
    <div class="title">
      <h2 class="text-title-md">{{ title }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MarketingCard",
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  min-width: 15rem;
  min-height: 10rem;
  background: var(--surface);
  border-radius: 1.5rem;
  aspect-ratio: 1.5;
  overflow: hidden;
  color: var(--on-surface);
  transition: all 300ms ease-in-out;
  cursor: pointer;
}

.image {
  width: 100%;
  height: 72%;
  background-size: cover;
  background-position: center;
}

.title {
  display: flex;
  width: 100%;
  height: 28%;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.card:hover {
  background: var(--primary-container);
  color: var(--on-primary-container);
}
</style>
