<template>
  <div class="content-wrapper glass">
    <div class="header">
      <a href="/keberangkatan" class="text-display-sm">Keberangkatan</a>
      <h1 class="text-title-lg">> Perbarui Keberangkatan</h1>
    </div>
    <div class="content">
      <form>
        <div class="form-group">
          <label for="jemaah" class="text-title-md">Jemaah</label>
          <select name="jemaah" id="">
            <option value="1">Dedi Mulyadi</option>
            <option value="2">Eko Sulistio</option>
            <option value="3">Faisal Ridwan</option>
            <option value="4">Gatot Subroto</option>
          </select>
        </div>
        <div class="form-group">
          <label for="marketing" class="text-title-md">Marketing</label>
          <select name="marketing" id="">
            <option value="1">Adam Malik</option>
            <option value="2">Ahmad Sanusi</option>
            <option value="3">Budi Santoso</option>
            <option value="4">Cici Sutanto</option>
          </select>
        </div>
        <div class="form-group">
          <label for="departureSchedule" class="text-title-md"
            >Tanggal Keberangkatan</label
          >
          <select name="departureSchedule" id="">
            <option value="1">18 Sepetember 2024 - 25 Sepetember 2024</option>
            <option value="2">25 Sepetember 2024 - 2 Oktober 2024</option>
            <option value="3">2 Oktober 2024 - 9 Oktober 2024</option>
            <option value="4">9 Oktober 2024 - 16 Oktober 2024</option>
          </select>
        </div>

        <button type="submit" class="btn btn-sm btn-primary">
          Perbarui Keberangkatan
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import "@/styles/content.css";
import "@/styles/form.css";
import TextField from "../../components/Form/TextField.vue";
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
