<script lang="ts">
import "@/styles/content.css";
import Sidebar from "../components/Sidebar/Sidebar.vue";
import TextField from "../components/TextField.vue";
import JemaahCard from "../components/Card/JemaahCard.vue";
import JemaahStatus from "../components/JemaahStatus.vue";
import Pagination from "../components/Pagination/Pagination.vue";
import { useRoute } from "vue-router";
import { watchEffect } from "vue";

export default {
  components: {
    Sidebar,
    TextField,
    JemaahCard,
    JemaahStatus,
    Pagination,
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
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Adam Malik",
          status: "pre-departure",
        },
        {
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Adam Malik",
          status: "departure",
        },
        {
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Adam Malik",
          status: "post-departure",
        },
        {
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Adam Malik",
          status: "canceled",
        },
        {
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Adam Malik",
          status: "canceled",
        },
        {
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Adam Malik",
          status: "post-departure",
        },
        {
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Adam Malik",
          status: "departure",
        },
        {
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Adam Malik",
          status: "pre-departure",
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
      <button type="button" class="btn btn-sm btn-primary">
        <span>Tambahkan</span>
      </button>
    </div>
    <jemaah-status />
    <div class="content">
      <jemaah-card
        v-for="(item, i) in jemaah"
        :key="i"
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

<style scoped>
.summary-cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.header > h1 {
  color: var(--primary);
  flex: 1 1 0;
}

.content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}
</style>
