<template>
  <div class="content-wrapper glass">
    <div class="header">
      <a href="/jemaah" class="text-display-sm">Jemaah</a>
      <h1 class="text-title-lg">> Tambahkan Jemaah</h1>
    </div>
    <div class="content">
      <form>
        <image-form-component />
        <div class="form-group">
          <label for="name" class="text-title-md">Nama</label>
          <text-field id="name" placeholder="Masukkan nama jemaah..." />
        </div>
        <div class="form-group">
          <label for="nId" class="text-title-md">NIK</label>
          <text-field id="nId" placeholder="Masukkan NIK jemaah..." />
        </div>
        <button type="submit" class="btn btn-sm btn-primary">
          Tambahkan Jemaah
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import "@/styles/content.css";
import "@/styles/form.css";
import TextField from "../../components/TextField.vue";
import ImageFormComponent from "../../components/ImageFormComponent.vue";

export default {
  components: { TextField, ImageFormComponent },
};
</script>

<style scoped>
.header {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
  color: var(--primary);
}

.header > h1 {
  flex: 1 1 0%;
  color: var(--on-primary-container);
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.content > form {
  display: flex;
  width: 100%;
  max-width: 720px;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.form-group,
.text-field {
  width: 100%;
}

button {
  width: 100%;
  max-width: 320px;
  margin-top: 1rem;
}
</style>
