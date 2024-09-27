<script lang="ts">
import "@/styles/content.css";
import Sidebar from "../components/Sidebar/Sidebar.vue";
import SummaryCard from "../components/Card/SummaryCard.vue";

export default {
  components: {
    Sidebar,
    SummaryCard,
  },
  data() {
    return {
      currentIndex: 0,
      summaries: [
        { title: "Jemaah", icon: "group", value: 1234, diffrence: 123 },
        {
          title: "Pemasukan",
          icon: "receive-money",
          value: 1234000,
          diffrence: 123000,
        },
        {
          title: "Pengeluaran",
          icon: "send-money",
          value: 1234000,
          diffrence: -123000,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="content-wrapper glass">
    <h1 class="text-display-sm">Dashboard</h1>
    <div class="summary-cards">
      <summary-card
        v-for="(summary, i) in summaries"
        :key="i"
        :title="summary.title"
        :icon="summary.icon"
        :value="summary.value"
        :diffrence="summary.diffrence"
      />
    </div>
    <div class="bottom-content">
      <div class="left-content">
        <h2 class="text-title-lg">Perkembangan Transaksi</h2>
        <h2 class="text-title-lg">Marketing</h2>
      </div>
      <div class="right-content">
        <h2 class="text-title-lg">Jadwal Keberangkatan</h2>
      </div>
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

h2 {
  color: var(--on-primary-container);
}

.bottom-content {
  flex: 1 1 0%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.left-content {
  flex: 2 2 0%;
}

.right-content {
  flex: 1 1 0%;
}
</style>
