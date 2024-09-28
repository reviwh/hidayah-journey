<script lang="ts">
import "@/styles/content.css";
import MarketingCard from "../components/Card/MarketingCard.vue";
import TextField from "../components/TextField.vue";

export default {
  components: {
    MarketingCard,
    TextField,
  },
  data() {
    return {
      marketings: [
        {
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Adam Malik",
        },
        {
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Adam Malik",
        },
        {
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Adam Malik",
        },
        {
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Adam Malik",
        },
        {
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Adam Malik",
        },
        {
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Adam Malik",
        },
        {
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Adam Malik",
        },
        {
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Adam Malik",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="content-wrapper glass">
    <div class="header">
      <h1 class="text-display-sm">Marketing</h1>
      <text-field
        id="marketingSearch"
        class="text-field-sm rounded"
        placeholder="Cari marketing..."
        icon="search"
      />
      <button type="button" class="btn btn-sm btn-primary">
        <span>Tambahkan</span>
      </button>
    </div>
    <div class="content">
      <marketing-card
        v-for="(marketing, i) in marketings"
        :key="i"
        :image="marketing.image"
        :title="marketing.name"
      />
    </div>
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
