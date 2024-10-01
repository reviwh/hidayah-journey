<template>
  <div class="modal" @click="toggleDeleteModal">
    <div class="modal-content glass" @click.stop>
      <icon-component
        name="close"
        class="btn-close"
        @click="toggleDeleteModal"
      />
      <div>
        <div class="delete-icon">
          <icon-component name="delete" />
        </div>
        <h2 class="text-headline-lg">{{ title }}</h2>
        <p class="text-body-lg">{{ subtitle }}</p>
      </div>
      <div class="actions">
        <button class="btn btn-sm btn-secondary" @click="toggleDeleteModal">
          Tidak, Tetap Simpan.
        </button>
        <button class="btn btn-sm btn-danger" @click="onSubmit">
          Ya, Hapus!
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "@/styles/modal.css";
import IconComponent from "../IconComponent.vue";
import type { PropType } from "vue";
export default {
  components: { IconComponent },
  name: "DeleteModal",
  props: {
    toggleDeleteModal: {
      type: Function as PropType<() => void>,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    onSubmit: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },
};
</script>

<style scoped>
.modal-content {
  width: 500px;
  height: fit-content;
  gap: 2.75rem;
  padding: 3rem;
}

.modal-content > div {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.modal-content > div > h2 {
  color: var(--error);
}
.modal-content > div > p {
  padding: 0 3rem;
}

.modal-content .delete-icon {
  width: fit-content;
  padding: 1rem;
  border-radius: 50%;
  background: var(--error);
  color: var(--on-error);
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content .delete-icon svg {
  width: 48px;
  height: 48px;
}

.actions {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row !important;
  justify-content: space-between !important;
}

.btn {
  flex: 1 1 0%;
}
</style>
