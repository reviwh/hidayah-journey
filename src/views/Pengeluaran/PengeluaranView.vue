<template>
  <div class="content-wrapper glass">
    <div class="header">
      <h1 class="text-display-sm">Pengeluaran</h1>
      <text-field
        id="pengeluaranSearch"
        class="text-field-sm rounded"
        placeholder="Cari pengeluaran..."
        icon="search"
      />
      <a class="btn btn-sm btn-primary" href="/pengeluaran/add">
        <icon-component name="add" />
        <span>Tambahkan</span>
      </a>
    </div>
    <div class="table">
      <div class="table-header">
        <h2 class="text-title-md">Deskripsi</h2>
        <h2 class="text-title-md">Jumlah</h2>
        <h2 class="text-title-md">Tanggal</h2>
        <h2 class="text-title-md">Aksi</h2>
      </div>

      <div class="table-body">
        <pengeluaran-table-row
          v-for="item in data"
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
import type { Outcome } from "../../types";
import IconComponent from "../../components/IconComponent.vue";
import PengeluaranTableRow from "../../components/TableRow/PengeluaranTableRow.vue";
export default {
  components: {
    TextField,
    PaginationComponent,
    IconComponent,
    PengeluaranTableRow,
  },
  data() {
    return {
      page: {
        selectedPage: Number(this.$route.query.page) || 1,
        lastPage: 30,
        limit: 5,
        total: 150,
      },
      data: [
        {
          id: 1,
          description: "Pemesanan Tiket",
          amount: 80000000,
          date: new Date("2024-09-06"),
        } as Outcome,
        {
          id: 2,
          description: "Pembayaran Listrik",
          amount: 1000000,
          date: new Date("2024-09-06"),
        } as Outcome,
        {
          id: 3,
          description: "Pembayaran PDAM",
          amount: 800000,
          date: new Date("2024-08-17"),
        } as Outcome,
        {
          id: 4,
          description: "Pembayaran Pajak",
          amount: 10000000,
          date: new Date("2024-07-18"),
        } as Outcome,
        {
          id: 5,
          description: "Pembayaran Listrik",
          amount: 1000000,
          date: new Date("2024-07-18"),
        } as Outcome,
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
