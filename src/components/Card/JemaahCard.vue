<template>
  <div class="card glass">
    <div id="status" :class="status"></div>
    <icon-component name="more-vert" class="more-icon" @click="toggleOpened" />
    <div v-if="isOpened" class="more-actions text-body-md">
      <a class="edit" href="/jemaah/edit/1">
        <icon-component name="edit" />
        <span>Edit</span>
      </a>
      <div class="delete">
        <icon-component name="delete" />
        <span>Hapus</span>
      </div>
    </div>
    <div class="image" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
    <div class="title">
      <h2 class="text-title-md">{{ title }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import "@/styles/jemaahstatus.css";
import IconComponent from "../IconComponent.vue";

export default {
  components: { IconComponent },
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
    status: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    toggleOpened() {
      this.isOpened = !this.isOpened;
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
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

.more-icon {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.5rem;
  aspect-ratio: 1;
  color: var(--surface);
}

.more-actions {
  width: 128px;
  height: fit-content;
  position: absolute;
  top: 2rem;
  right: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-radius: 0.5rem;
  overflow: hidden;
}

.more-actions .edit,
.more-actions .delete {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 1rem;
}
.more-actions .edit {
  background: var(--surface);
  color: var(--on-surface);
}

.more-actions .edit:hover {
  background: var(--primary-container);
  color: var(--on-primary-container);
}

.more-actions .delete {
  background: var(--surface);
  color: var(--error);
}
.more-actions .delete:hover {
  background: var(--error-container);
  color: var(--on-error-container);
}

.more-actions svg {
  width: 20px;
  height: 20px;
}
</style>
