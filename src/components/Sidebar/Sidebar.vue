<script lang="ts">
import SidebarItem from "../Sidebar/SidebarItem.vue";

export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  components: {
    SidebarItem,
  },
  data() {
    return {
      menus: [
        {
          icon: "space_dashboard",
          title: "Dashboard",
          href: "/",
          isSelected: false,
        },
        {
          icon: "support_agent",
          title: "Marketing",
          href: "/marketing",
          isSelected: false,
        },
        {
          icon: "date_range",
          title: "Jadwal Keberangkatan",
          href: "/",
          isSelected: false,
        },
        {
          icon: "group",
          title: "Jemaah",
          href: "/jemaah",
          isSelected: false,
        },
        {
          icon: "travel_luggage_and_bags",
          title: "Keberangkatan",
          href: "/",
          isSelected: false,
        },
        {
          icon: "package",
          title: "Paket",
          href: "/",
          isSelected: false,
        },
        {
          icon: "toll",
          title: "Pemasukan",
          href: "/",
          isSelected: false,
        },
        {
          icon: "send_money",
          title: "Pengeluaran",
          href: "/",
          isSelected: false,
        },
      ],
    };
  },
  mounted() {
    this.menus[this.index].isSelected = true;
  },
};
</script>

<template>
  <div class="container">
    <div class="user-container">
      <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="John Doe"
      />
      <h1 class="text-title-lg">John Doe</h1>
      <p class="text-body-lg">Administrator</p>
    </div>
    <div class="menu-container">
      <SidebarItem
        v-for="(menu, i) in menus"
        :key="i"
        :icon="menu.icon"
        :title="menu.title"
        :href="menu.href"
        :isSelected="menu.isSelected"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: calc(380px * var(--scale));
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.user-container {
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-left: calc(4.875rem * var(--scale));
}
.user-container > h1 {
  color: var(--primary);
  text-align: center;
}
.user-container > p {
  color: var(--on-surface-variant);
  text-align: center;
}
.user-container > img {
  width: 128px;
  height: 128px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 0.75rem;
}
.menu-container {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
