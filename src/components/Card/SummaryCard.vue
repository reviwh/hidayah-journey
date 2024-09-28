<script lang="ts">
import Icon from "../IconComponent.vue";

export default {
  name: "SummaryCard",
  components: {
    Icon,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    value: {
      type: Number,
      default: 0,
    },
    diffrence: {
      type: Number,
      default: 0,
    },
    destination: {
      type: String,
      default: "/",
    },
  },
};
</script>

<template>
  <a class="container glass" :href="destination">
    <div class="left-content">
      <div class="icon">
        <icon :name="icon" />
      </div>
      <div class="text-title-lg value">
        {{ value }}
        <span v-if="diffrence > 0" class="text-body-sm increase">{{
          diffrence
        }}</span>
        <span v-else-if="diffrence < 0" class="text-body-sm decrease">{{
          diffrence
        }}</span>
      </div>
      <h2 class="text-body-lg">
        {{ title }}
      </h2>
    </div>
    <div class="right-content">
      <icon v-if="diffrence < 0" name="down" />
      <icon v-if="diffrence > 0" name="up" />
    </div>
  </a>
</template>

<style scoped>
.container {
  display: flex;
  flex: 1 1 0%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: var(--surface);
  color: var(---on-surface);
  border-radius: 1.5rem;
}

.container:hover {
  background: var(--primary-container);
  color: var(--on-primary-container);
}
.left-content {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.left-content .value {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.left-content > h2 {
  color: var(--on-surface-variant);
}

.text-body-sm.increase {
  color: var(--success);
}

.text-body-sm.decrease {
  color: var(--error);
}

.icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  padding: 0.75rem;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
}

.icon > svg {
  color: var(--on-primary);
  width: 1.25rem;
  height: 1.25rem;
}
</style>
