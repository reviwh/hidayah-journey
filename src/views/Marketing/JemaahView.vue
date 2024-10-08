<script lang="ts">
import "@/styles/content.css";
import TextField from "../../components/Form/TextField.vue";
import JemaahCard from "../../components/Card/JemaahCard.vue";
import JemaahStatus from "../../components/JemaahStatus.vue";
import Pagination from "../../components/Pagination/PaginationComponent.vue";
import { useRoute } from "vue-router";
import { watchEffect } from "vue";
import IconComponent from "../../components/IconComponent.vue";

export default {
  components: {
    TextField,
    JemaahCard,
    JemaahStatus,
    Pagination,
    IconComponent,
  },
  data() {
    return {
      page: {
        selectedPage: Number(this.$route.query.page) || 1,
        lastPage: 50,
        limit: 8,
        total: 400,
      },
      jemaah: [
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

<template>
  <div class="content-wrapper glass">
    <div class="header">
      <h1 class="text-display-sm">Jemaah</h1>
      <text-field
        id="jemaahSearch"
        class="text-field-sm rounded"
        placeholder="Cari jemaah..."
        icon="search"
      />
      <a class="btn btn-sm btn-primary" href="/jemaah/add">
        <icon-component name="add" />
        <span>Tambahkan</span>
      </a>
    </div>
    <jemaah-status />
    <div class="content">
      <jemaah-card
        v-for="(item, i) in jemaah"
        :key="i"
        :nId="item.nId"
        :image="item.image"
        :title="item.name"
        :status="item.status"
      />
    </div>
    <pagination
      :selectedPage="page.selectedPage"
      :limit="page.limit"
      :lastPage="page.lastPage"
      :total="page.total"
    />
  </div>
</template>