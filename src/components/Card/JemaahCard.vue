<template>
  <div class="card glass" @click="toggleJemaahModal">
    <div id="status" :class="status"></div>
    <icon-component
      :name="isActionButtonOpened ? 'close' : 'more-vert'"
      class="more-icon"
      @click.stop="toggleActionButton"
    />
    <div
      v-if="isActionButtonOpened"
      class="more-actions text-body-md"
      @click.stop
    >
      <a class="edit" :href="`/jemaah/edit/${nId}`">
        <icon-component name="edit" />
        <span>Edit</span>
      </a>
      <div class="delete" @click="toggleDeleteModal">
        <icon-component name="delete" />
        <span>Hapus</span>
      </div>
    </div>
    <div class="image" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
    <div class="title">
      <h2 class="text-title-md">{{ title }}</h2>
    </div>
  </div>
  <div class="modal" v-if="isJemaahModalShowed" @click="toggleJemaahModal">
    <div class="modal-content glass" @click.stop>
      <icon-component
        name="close"
        class="btn-close"
        @click="toggleJemaahModal"
      />
      <img :src="image" alt="" />
      <h2 class="text-headline-lg">{{ title }}</h2>
      <h3 class="text-title-lg">{{ nId }}</h3>
    </div>
  </div>
  <delete-modal
    v-if="isDeleteModalShowed"
    :toggleDeleteModal="toggleDeleteModal"
    title="Hapus Jemaah"
    :subtitle="`Anda akan menghapus ${title} dari daftar jemaah. Apa Anda yakin?`"
    :onSubmit="() => {}"
  />
</template>

<script lang="ts">
import "@/styles/jemaahstatus.css";
import "@/styles/modal.css";
import IconComponent from "../IconComponent.vue";
import DeleteModal from "../Modal/DeleteModal.vue";

export default {
  components: { IconComponent, DeleteModal },
  name: "MarketingCard",
  props: {
    nId: {
      type: String,
      required: true,
    },
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
      isActionButtonOpened: false,
      isJemaahModalShowed: false,
      isDeleteModalShowed: false,
    };
  },
  methods: {
    toggleActionButton() {
      this.isActionButtonOpened = !this.isActionButtonOpened;
    },
    toggleJemaahModal() {
      this.isJemaahModalShowed = !this.isJemaahModalShowed;
    },
    toggleDeleteModal() {
      this.isDeleteModalShowed = !this.isDeleteModalShowed;
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
  border-radius: 0.625rem;
  overflow: hidden;
}

.more-actions .edit,
.more-actions .delete {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem 0.625rem;
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
