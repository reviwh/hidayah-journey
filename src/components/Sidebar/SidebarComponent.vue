<script lang="ts">
import { useRoute } from "vue-router";
import SidebarItem from "./SidebarItem.vue";
import { watchEffect } from "vue";

export default {
  name: "SidebarComponent",
  props: {
    path: {
      type: String,
      default: "/",
    },
  },
  components: {
    SidebarItem,
  },
  data() {
    return {
      menus: [
        {
          icon: "space-dashboard",
          title: "Dashboard",
          href: "/",
          isSelected: false,
        },
        {
          icon: "support-agent",
          title: "Marketing",
          href: "/marketing",
          isSelected: false,
        },
        {
          icon: "date-range",
          title: "Jadwal Keberangkatan",
          href: "/jadwal-keberangkatan",
          isSelected: false,
        },
        {
          icon: "group",
          title: "Jemaah",
          href: "/jemaah",
          isSelected: false,
        },
        {
          icon: "travel-luggage-and-bags",
          title: "Keberangkatan",
          href: "/keberangkatan",
          isSelected: false,
        },
        {
          icon: "package",
          title: "Paket",
          href: "/paket",
          isSelected: false,
        },
        {
          icon: "receive-money",
          title: "Pemasukan",
          href: "/pemasukan",
          isSelected: false,
        },
        {
          icon: "send-money",
          title: "Pengeluaran",
          href: "/pengeluaran",
          isSelected: false,
        },
      ],
    };
  },
  mounted() {
    const route = useRoute();

    watchEffect(() => {
      this.menus.forEach((menu) => {
        menu.isSelected = false;
        if (menu.href === route.path) {
          menu.isSelected = true;
        }
      });
    });
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
