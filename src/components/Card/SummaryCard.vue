<script lang="ts">
import Icon from "../Icon.vue";

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
  },
};
</script>

<template>
  <div class="container glass">
    <div class="left-content">
      <div class="icon">
        <icon :name="icon" />
      </div>
      <div class="text-title-lg">
        {{ value }}
        <span v-if="diffrence > 0" class="text-body-md increase">{{
          diffrence
        }}</span>
        <span v-else-if="diffrence < 0" class="text-body-md decrease">{{
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
  </div>
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
  border-radius: 1.5rem;
}
.left-content {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  color: var(---on-surface);
}

.left-content > h2 {
  color: var(--on-surface-variant);
}

.text-body-md.increase {
  color: var(--success);
}

.text-body-md.decrease {
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
  color: --var(--on-primary);
  width: 1.25rem;
  height: 1.25rem;
}
</style>
