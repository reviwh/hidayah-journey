<template>
  <div class="image-form">
    <template v-if="!imageUrl">
      <label for="image" class="image-container glass">
        <svg
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8632 54.682C13.6032 54.682 12.5308 54.2393 11.6459 53.354C10.7605 52.4691 10.3179 51.3967 10.3179 50.1367V14.8633C10.3179 13.6033 10.7605 12.5309 11.6459 11.646C12.5308 10.7607 13.6032 10.318 14.8632 10.318H50.1365C51.3965 10.318 52.469 10.7607 53.3539 11.646C54.2392 12.5309 54.6819 13.6033 54.6819 14.8633V50.1367C54.6819 51.3967 54.2392 52.4691 53.3539 53.354C52.469 54.2393 51.3965 54.682 50.1365 54.682H14.8632ZM14.8692 50.9513H50.1305C50.3359 50.9513 50.5239 50.8658 50.6945 50.6947C50.8657 50.524 50.9512 50.336 50.9512 50.1307V14.8693C50.9512 14.664 50.8657 14.476 50.6945 14.3053C50.5239 14.1342 50.3359 14.0487 50.1305 14.0487H14.8692C14.6639 14.0487 14.4759 14.1342 14.3052 14.3053C14.1341 14.476 14.0485 14.664 14.0485 14.8693V50.1307C14.0485 50.336 14.1341 50.524 14.3052 50.6947C14.4759 50.8658 14.6639 50.9513 14.8692 50.9513ZM21.2125 45.0053H44.0419C44.513 45.0053 44.8559 44.7989 45.0705 44.386C45.2848 43.9731 45.2501 43.5715 44.9665 43.1813L38.7399 34.8847C38.5048 34.5838 38.2001 34.4333 37.8259 34.4333C37.4517 34.4333 37.149 34.5829 36.9179 34.882L30.4485 43.272L26.1339 37.8027C25.8992 37.5191 25.5992 37.3773 25.2339 37.3773C24.8681 37.3773 24.5696 37.5269 24.3385 37.826L20.3372 43.18C20.0234 43.5711 19.9765 43.9731 20.1965 44.386C20.417 44.7989 20.7556 45.0053 21.2125 45.0053Z"
            fill="var(--primary)"
          />
        </svg>
        <span class="text-title-md">Unggah foto jemaah di sini</span>
      </label>
    </template>
    <template v-else>
      <div
        class="image-container glass"
        :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
      >
        <div class="actions">
          <label for="image" class="btn btn-icon">
            <icon-component name="edit" />
          </label>
          <span class="btn btn-icon danger" @click="removeImageValue">
            <icon-component name="delete" />
          </span>
        </div>
      </div>
    </template>
    <input
      type="file"
      name="image"
      id="image"
      :hidden="true"
      @change="handleChange"
    />
  </div>
</template>

<script lang="ts">
import { ref, watch } from "vue";
import IconComponent from "./IconComponent.vue";

export default {
  components: { IconComponent },
  name: "ImageFormComponent",
  props: {
    value: {
      type: String,
      default: null,
    },
  },
  setup(props, { emit }) {
    const imageUrl = ref<string | null>(props.value);

    watch(
      () => props.value,
      (newValue) => {
        imageUrl.value = newValue;
      }
    );

    const handleChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        imageUrl.value = URL.createObjectURL(file);
        emit("update:value", imageUrl.value);
      }
    };
    const removeImageValue = () => {
      const fileInput = document.getElementById("image") as HTMLInputElement;
      if (fileInput) {
        fileInput.value = "";
      }
      imageUrl.value = null;
      emit("update:value", null);
    };
    return {
      imageUrl,
      handleChange,
      removeImageValue,
    };
  },
};
</script>

<style scoped>
.image-form {
  position: relative;
}
.image-form > .image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 12rem;
  background-color: var(--surface);
  color: var(--on-surface-variant);
  border-radius: 1rem;
  gap: 1rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}
.image-form > .image-container > .actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
  right: -1rem;
  bottom: 1.5rem;
}
.image-form > .image-container > .actions svg {
  width: 1rem;
  height: 1rem;
}
.image-form > input {
  display: none;
}
</style>
