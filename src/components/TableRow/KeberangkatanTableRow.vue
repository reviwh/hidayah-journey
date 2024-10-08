<template>
  <div class="table-row">
    <div class="with-image">
      <div
        class="image"
        :style="{ backgroundImage: 'url(' + data.jemaah.image + ')' }"
      ></div>
      <span>{{ data.jemaah.name }}</span>
    </div>
    <div class="with-image">
      <div
        class="image"
        :style="{ backgroundImage: 'url(' + data.marketing.image + ')' }"
      ></div>
      <span>{{ data.marketing.name }}</span>
    </div>
    <span>{{
      new Date(data.schedule.start).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    }}</span>
    <div class="actions">
      <a :href="`/keberangkatan/edit/${data.id}`">
        <icon-component name="edit" />
      </a>
      <span>
        <icon-component name="delete" @click="toggleDeleteModal" />
      </span>
    </div>
  </div>
  <delete-modal
    v-if="isDeleteModalShowed"
    :toggleDeleteModal="toggleDeleteModal"
    title="Hapus Keberangkatan"
    :subtitle="`Anda akan menghapus item dari daftar Keberangkatan. Apa Anda yakin?`"
    :onSubmit="() => {}"
    width="540px"
  />
</template>

<script lang="ts">
import type { PropType } from "vue";
import IconComponent from "../IconComponent.vue";
import type { Departure } from "../../types";
import DeleteModal from "../Modal/DeleteModal.vue";

export default {
  components: { IconComponent, DeleteModal },
  name: "KeberangkatanTableRow",
  props: {
    data: {
      type: Object as PropType<Departure>,
      required: true,
    },
  },
  data() {
    return {
      isDeleteModalShowed: false,
    };
  },
  methods: {
    toggleDeleteModal() {
      this.isDeleteModalShowed = !this.isDeleteModalShowed;
    },
  },
};
</script>

<style scoped>
.with-image {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: start;
  text-align: start;
}
.with-image > .image {
  flex: none;
  width: 24px;
  height: 24px;
  margin-left: 1rem;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.with-image > span {
  flex: 1 1 0%;
}

.modal-content {
  width: 800px;
}
</style>
