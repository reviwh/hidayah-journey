<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
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

  mounted() {
    this.iconIsLoad = true;
  },

  setup() {
    const iconIsLoad = ref(false);
    const iconClass = computed(() => {
      return iconIsLoad.value ? "material-symbols-rounded" : "icon-on-load";
    });

    return {
      iconIsLoad,
      iconClass,
    };
  },
});
</script>

<template>
  <div v-if="isSelected" class="container-selected">
    <div class="backgroud-selected"></div>
    <span :class="iconClass">{{ icon }}</span>
    <p class="text-title-md">{{ title }}</p>
  </div>
  <a v-else :href="href">
    <div class="container">
      <div class="backgroud"></div>
      <span :class="iconClass"> {{ icon }} </span>
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

.container-selected > p,
.container-selected > span {
  color: var(--primary);
}
.container > p,
.container > span {
  color: var(--on-surface-variant);
}

.container:hover > p,
.container:hover > span {
  color: var(--on-primary-container);
}

.icon-on-load {
  font-size: 0;
}
</style>
