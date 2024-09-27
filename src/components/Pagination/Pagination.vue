<template>
  <div class="pagination">
    <div class="page-controller">
      <div :class="{ disabled: selectedPage === 1 }"></div>
      <div :class="{ disabled: selectedPage === 1 }"></div>
      <!-- Case 1: First 5 pages -->
      <template v-if="selectedPage <= 3">
        <div v-for="i in 5" :key="i" :class="{ selected: selectedPage === i }">
          {{ i }}
        </div>
      </template>

      <!-- Case 2: Last 5 pages -->
      <template v-else-if="selectedPage > lastPage - 3">
        <div
          v-for="i in Array.from(
            { length: 5 },
            (_, index) => lastPage - 4 + index
          )"
          :key="i"
          :class="{ selected: selectedPage === i }"
        >
          {{ i }}
        </div>
      </template>

      <!-- Case 3: Middle pages -->
      <template v-else>
        <div
          v-for="i in Array.from(
            { length: 5 },
            (_, index) => selectedPage - 2 + index
          )"
          :key="i"
          :class="{ selected: selectedPage === i }"
        >
          {{ i }}
        </div>
      </template>
      <div :class="{ disabled: selectedPage === lastPage }"></div>
      <div :class="{ disabled: selectedPage === lastPage }"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Pagination",
  props: {
    selectedPage: {
      type: Number,
      default: 1,
    },
    lastPage: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 8,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      first: 1,
      last: 1,
    };
  },
  mounted() {
    this.first = this.selectedPage * this.limit - this.limit;
    this.last =
      this.selectedPage * this.limit < this.total
        ? this.selectedPage * this.limit
        : this.total;
  },
};
</script>

<style>
.selected {
  background: var(--primary);
}
</style>
