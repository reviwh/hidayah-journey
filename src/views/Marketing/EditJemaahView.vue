<template>
  <div class="content-wrapper glass">
    <div class="header">
      <a href="/jemaah" class="text-display-sm">Jemaah</a>
      <h1 class="text-title-lg">> Perbarui Jemaah</h1>
    </div>
    <div class="content">
      <form>
        <image-form-component :value="image" />
        <div class="form-group">
          <label for="name" class="text-title-md">Nama</label>
          <text-field
            id="name"
            placeholder="Masukkan nama jemaah..."
            :value="name"
          />
        </div>
        <div class="form-group">
          <label for="nId" class="text-title-md">NIK</label>
          <text-field
            id="nId"
            placeholder="Masukkan NIK jemaah..."
            :value="nId"
          />
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
import TextField from "../../components/Form/TextField.vue";
import ImageFormComponent from "../../components/ImageFormComponent.vue";

export default {
  components: { TextField, ImageFormComponent },
  data() {
    return {
      name: "",
      nId: "",
      image: "",
    };
  },
  mounted() {
    const jemaah = [
      {
        nId: "1234567890123456",
        image:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Abdul Halim",
        status: "departure",
      },
      {
        nId: "2345678901234567",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Ali Ibrahim",
        status: "post-departure",
      },
      {
        nId: "3456789012345678",
        image:
          "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Fikri Dahlan",
        status: "departure",
      },
      {
        nId: "4567890123456789",
        image:
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Irfan Halim",
        status: "post-departure",
      },
      {
        nId: "5678901234567890",
        image:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Muhammad Iqbal",
        status: "pre-departure",
      },
      {
        nId: "6789012345678901",
        image:
          "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Muhammad Zain",
        status: "pre-departure",
      },
      {
        nId: "7890123456789012",
        image:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Ridwan Hidayat",
        status: "canceled",
      },
      {
        nId: "8901234567890123",
        image:
          "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Rizal Ahmad",
        status: "canceled",
      },
    ];
    jemaah.forEach((j) => {
      if (j.nId == this.$route.params.id) {
        this.name = j.name;
        this.image = j.image;
        this.nId = j.nId;
      }
    });
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
</style>
