<template>
  <div class="content-wrapper glass">
    <div class="header">
      <h1 class="text-display-sm">Keberangkatan</h1>
      <text-field
        id="keberangkatanSearch"
        class="text-field-sm rounded"
        placeholder="Cari keberangkatan..."
        icon="search"
      />
      <a class="btn btn-sm btn-primary" href="/keberangkatan/add">
        <icon-component name="add" />
        <span>Tambahkan</span>
      </a>
    </div>
    <div class="table">
      <div class="table-header">
        <h2 class="text-title-md">Jemaah</h2>
        <h2 class="text-title-md">Marketing</h2>
        <h2 class="text-title-md">Jadwal Keberangkatan</h2>
        <h2 class="text-title-md">Aksi</h2>
      </div>

      <div class="table-body">
        <keberangkatan-table-row
          v-for="item in keberangkatan"
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
import KeberangkatanTableRow from "../../components/TableRow/KeberangkatanTableRow.vue";
import type {
  Departure,
  DepartureSchedule,
  Jemaah,
  Marketing,
} from "../../types";
import IconComponent from '../../components/IconComponent.vue';
export default {
  components: { TextField, PaginationComponent, KeberangkatanTableRow, IconComponent },
  data() {
    return {
      page: {
        selectedPage: Number(this.$route.query.page) || 1,
        lastPage: 30,
        limit: 5,
        total: 150,
      },
      keberangkatan: [
        {
          id: 1,
          jemaah: {
            id: 1,
            nId: "1234567890123456",
            name: "Ahmad Alif",
            image: "https://placehold.co/24",
            status: "departure",
          } as Jemaah,
          marketing: {
            id: 1,
            name: "Gina Rahmawati",
            image: "https://placehold.co/24",
            email: "JkUzA@example.com",
            phone: "081234567890",
            address: "Jl. Raya No. 1",
          } as Marketing,
          schedule: {
            id: 1,
            start: new Date("2022-09-18"),
            end: new Date("2022-09-25"),
          } as DepartureSchedule,
        } as Departure,
        {
          id: 2,
          jemaah: {
            id: 2,
            nId: "1234567890123457",
            name: "Bela Sari",
            image: "https://placehold.co/24",
            status: "departure",
          } as Jemaah,
          marketing: {
            id: 2,
            name: "Hendro Wijaya",
            image: "https://placehold.co/24",
            email: "JkUzA@example.com",
            phone: "081234567890",
            address: "Jl. Raya No. 2",
          } as Marketing,
          schedule: {
            id: 2,
            start: new Date("2022-09-18"),
            end: new Date("2022-09-25"),
          } as DepartureSchedule,
        } as Departure,
        {
          id: 3,
          jemaah: {
            id: 3,
            nId: "1234567890123458",
            name: "Candra Pratama",
            image: "https://placehold.co/24",
            status: "departure",
          } as Jemaah,
          marketing: {
            id: 3,
            name: "Indra Setiawan",
            image: "https://placehold.co/24",
            email: "JkUzA@example.com",
            phone: "081234567890",
            address: "Jl. Raya No. 3",
          } as Marketing,
          schedule: {
            id: 3,
            start: new Date("2022-09-18"),
            end: new Date("2022-09-25"),
          } as DepartureSchedule,
        } as Departure,
        {
          id: 4,
          jemaah: {
            id: 4,
            nId: "1234567890123459",
            name: "Deni Saputra",
            image: "https://placehold.co/24",
            status: "departure",
          } as Jemaah,
          marketing: {
            id: 4,
            name: "Jenny Arifin",
            image: "https://placehold.co/24",
            email: "JkUzA@example.com",
            phone: "081234567890",
            address: "Jl. Raya No. 4",
          } as Marketing,
          schedule: {
            id: 4,
            start: new Date("2022-09-18"),
            end: new Date("2022-09-25"),
          } as DepartureSchedule,
        } as Departure,
        {
          id: 5,
          jemaah: {
            id: 5,
            nId: "1234567890123460",
            name: "Eko Prabowo",
            image: "https://placehold.co/24",
            status: "departure",
          } as Jemaah,
          marketing: {
            id: 5,
            name: "Kurniawan Agung",
            image: "https://placehold.co/24",
            email: "JkUzA@example.com",
            phone: "081234567890",
            address: "Jl. Raya No. 5",
          } as Marketing,
          schedule: {
            id: 5,
            start: new Date("2022-09-18"),
            end: new Date("2022-09-25"),
          } as DepartureSchedule,
        } as Departure,
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
