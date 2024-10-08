<template>
  <div class="content-wrapper glass">
    <div class="header">
      <a href="/pemasukan" class="text-display-sm">Pemasukan</a>
      <h1 class="text-title-lg">> Tambahkan Pemasukan</h1>
    </div>
    <div class="content">
      <form>
        <div class="form-group">
          <label for="paket" class="text-title-md">Paket</label>
          <select name="paket" id="">
            <option value="1">Paket Lite</option>
            <option value="2">Paket Standard</option>
            <option value="3">Paket Premium</option>
            <option value="4">Paket Eksklusif</option>
          </select>
        </div>
        <div class="form-group">
          <label for="jumlah" class="text-title-md">Jumlah</label>
          <text-field
            id="jumlah"
            type="number"
            placeholder="Masukkan Jumlah Pemasukan"
            min="100000"
            step="100000"
            value="100000"
          />
        </div>
        <div class="row">
          <div class="form-group">
            <label for="tanggal" class="text-title-md">Tanggal</label>
            <select name="tanggal" id="">
              <option v-for="i in 31" :key="i" :value="i" :selected="i === 1">
                {{ i }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="bulan" class="text-title-md">Bulan</label>
            <select name="bulan" id="">
              <option v-for="i in 12" :key="i" :value="i" :selected="i === 1">
                {{ month[i - 1] }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="tahun" class="text-title-md">Tahun</label>
            <select name="tahun" id="">
              <option
                v-for="year in years"
                :key="year"
                :value="year"
                :selected="year === new Date().getFullYear()"
              >
                {{ year }}
              </option>
            </select>
          </div>
        </div>

        <button type="submit" class="btn btn-sm btn-primary">
          Tambahkan Pemasukan
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
  data() {
    return {
      month: [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ],
      years: [new Date().getFullYear()],
    };
  },
  mounted() {
    const currentYear = new Date().getFullYear();
    for (let i = 1; i < currentYear - 1899; i++) {
      this.years.push(currentYear - i);
    }
  },
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

.row {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>
