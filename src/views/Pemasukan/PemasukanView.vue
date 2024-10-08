<template>
  <div class="content-wrapper glass">
    <div class="header">
      <h1 class="text-display-sm">Pemasukan</h1>
      <text-field
        id="pemasukanSearch"
        class="text-field-sm rounded"
        placeholder="Cari pemasukan..."
        icon="search"
      />
      <a class="btn btn-sm btn-primary" href="/pemasukan/add">
        <icon-component name="add" />
        <span>Tambahkan</span>
      </a>
    </div>
    <div class="table">
      <div class="table-header">
        <h2 class="text-title-md">Paket</h2>
        <h2 class="text-title-md">Jumlah</h2>
        <h2 class="text-title-md">Tanggal</h2>
        <h2 class="text-title-md">Aksi</h2>
      </div>

      <div class="table-body">
        <pemasukan-table-row
          v-for="item in pemasukan"
          :key="item.id"
          :data="item"
        />
      </div>
    </div>
    <pagination-component
      :selectedPage="page.selectedPage"
      :lastPage="page.lastPage"
      :total="page.total"
      :limit="page.limit"
    />
  </div>
</template>

<script lang="ts">
import "@/styles/content.css";
import "@/styles/table.css";
import TextField from "../../components/Form/TextField.vue";
import PaginationComponent from "../../components/Pagination/PaginationComponent.vue";
import { useRoute } from "vue-router";
import { watchEffect } from "vue";
import type { Income } from "../../types";
import IconComponent from "../../components/IconComponent.vue";
import PemasukanTableRow from "../../components/TableRow/PemasukanTableRow.vue";
export default {
  components: {
    TextField,
    PaginationComponent,
    IconComponent,
    PemasukanTableRow,
  },
  data() {
    return {
      page: {
        selectedPage: Number(this.$route.query.page) || 1,
        lastPage: 30,
        limit: 5,
        total: 150,
      },
      pemasukan: [
        {
          id: 1,
          description: "Paket Premium",
          amount: 12000000,
          date: new Date("2024-09-06"),
        } as Income,
        {
          id: 2,
          description: "Paket Lite",
          amount: 8000000,
          date: new Date("2024-09-06"),
        } as Income,
        {
          id: 3,
          description: "Paket Standard",
          amount: 10000000,
          date: new Date("2024-08-17"),
        } as Income,
        {
          id: 4,
          description: "Paket Lite",
          amount: 8000000,
          date: new Date("2024-07-18"),
        } as Income,
        {
          id: 5,
          description: "Paket Eksklusif",
          amount: 25000000,
          date: new Date("2024-07-18"),
        } as Income,
      ],
    };
  },
  mounted() {
    const route = useRoute();
    watchEffect(() => {
      this.page.selectedPage = Number(route.query.page) || 1;
    });
  },
};
</script>
