<template>
  <div class="pagination">
    <div class="page-controller">
      <template v-if="lastPage > 5">
        <div :class="{ disabled: selectedPage === 1 }" @click="goToPage(1)">
          <icon name="double-arrow-backward" />
        </div>
        <div
          :class="{ disabled: selectedPage === 1 }"
          @click="goToPage(selectedPage - 1)"
        >
          <icon name="arrow-back" />
        </div>

        <template v-if="selectedPage <= 3">
          <div
            v-for="i in 5"
            :key="i"
            :class="[{ selected: selectedPage === i }, 'text-title-sm']"
          >
            {{ i }}
          </div>
        </template>

        <template v-else-if="selectedPage > lastPage - 3">
          <div
            v-for="i in Array.from(
              { length: 5 },
              (_, index) => lastPage - 4 + index
            )"
            :key="i"
            :class="[{ selected: selectedPage === i }, 'text-title-sm']"
          >
            {{ i }}
          </div>
        </template>

        <template v-else>
          <div
            v-for="i in Array.from(
              { length: 5 },
              (_, index) => selectedPage - 2 + index
            )"
            :key="i"
            :class="[{ selected: selectedPage === i }, 'text-title-sm']"
            @click="goToPage(i)"
          >
            {{ i }}
          </div>
        </template>

        <div
          :class="{ disabled: selectedPage === lastPage }"
          @click="goToPage(selectedPage + 1)"
        >
          <icon name="arrow-forward" />
        </div>
        <div
          :class="{ disabled: selectedPage === lastPage }"
          @click="goToPage(lastPage)"
        >
          <icon name="double-arrow-forward" />
        </div>
      </template>

      <template v-else>
        <div
          v-for="i in lastPage"
          :key="i"
          :class="[{ selected: selectedPage === i }, 'text-title-sm']"
          @click="goToPage(i)"
        >
          {{ i }}
        </div>
      </template>
    </div>
    <p class="text-body-sm">{{ first }} - {{ last }} of {{ total }} items</p>
  </div>
</template>

<script lang="ts">
import Icon from "../Icon.vue";
export default {
  components: { Icon },
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
  methods: {
    goToPage(page: number) {
      return this.$router.push({
        name: this.$route.name,
        query: { ...this.$route.query, page: page },
      });
    },
  },
  computed: {
    first(): number {
      return this.selectedPage * this.limit - this.limit + 1;
    },
    last(): number {
      return this.selectedPage * this.limit < this.total
        ? this.selectedPage * this.limit
        : this.total;
    },
  },
};
</script>

<style>
.pagination {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
.page-controller {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.page-controller div {
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  cursor: pointer;
  color: var(--on-surface-variant);
}

.page-controller div svg {
  width: 1.25rem;
  height: 1.25rem;
}
.page-controller .selected {
  background: var(--primary);
  color: var(--on-primary) !important;
}
.page-controller .disabled {
  opacity: 0.5;
  cursor: default;
}
</style>
