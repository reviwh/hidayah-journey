<script lang="ts">
import Icon from "../IconComponent.vue";
export default {
  components: { Icon },
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      default: "/",
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div v-if="isSelected" class="container-selected">
    <div class="backgroud-selected"></div>
    <icon :name="icon" size="24" class="icon" />
    <p class="text-title-md">{{ title }}</p>
  </div>
  <a v-else :href="href">
    <div class="container">
      <div class="backgroud"></div>
      <icon :name="icon" size="24" class="icon" />
      <p class="text-title-md">{{ title }}</p>
    </div>
  </a>
</template>

<style scoped>
.container,
.container-selected {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  padding: 0.75rem;
  padding-left: calc(4rem * var(--scale));
  cursor: pointer;
}

.backgroud-selected {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--surface);
}

.backgroud {
  z-index: -1;
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--outline-variant);
  transition: all 300ms ease-in-out;
}

.container:hover > .backgroud {
  left: 0;
}

.container-selected {
  color: var(--primary);
}
.container {
  color: var(--on-surface-variant);
}

.container:hover {
  color: var(--on-primary-container);
}

svg {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
