import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/marketing",
      name: "marketing",
      component: () => import("../views/MaketingView.vue"),
    },
    {
      path: "/jemaah",
      name: "jemaah",
      component: () => import("../views/Jemaah/JemaahView.vue"),
    },
    {
      path: "/jemaah/add",
      name: "addJemaah",
      component: () => import("../views/Jemaah/AddJemaahView.vue"),
    },
    {
      path: "/jemaah/edit/:id",
      name: "editJemaah",
      component: () => import("../views/Jemaah/EditJemaahView.vue"),
    },
    {
      path: "/keberangkatan",
      name: "keberangkatan",
      component: () => import("../views/Keberangkatan/KeberangkatanView.vue"),
    },
    {
      path: "/keberangkatan/add",
      name: "addKeberangkatan",
      component: () =>
        import("../views/Keberangkatan/AddKeberangkatanView.vue"),
    },
    {
      path: "/keberangkatan/edit/:id",
      name: "editKeberangkatan",
      component: () =>
        import("../views/Keberangkatan/EditKeberangkatanView.vue"),
    },
    {
      path: "/pemasukan",
      name: "pemasukan",
      component: () => import("../views/Pemasukan/PemasukanView.vue"),
    },
    {
      path: "/pemasukan/add",
      name: "addPemasukan",
      component: () => import("../views/Pemasukan/AddPemasukanView.vue"),
    },
    {
      path: "/pemasukan/edit/:id",
      name: "editPemasukan",
      component: () => import("../views/Pemasukan/EditPemasukanView.vue"),
    },
    {
      path: "/pengeluaran",
      name: "pengeluaran",
      component: () => import("../views/Pengeluaran/PengeluaranView.vue"),
    },
    {
      path: "/pengeluaran/add",
      name: "addPengeluaran",
      component: () => import("../views/Pengeluaran/AddPengeluaranView.vue"),
    },
    {
      path: "/pengeluaran/edit/:id",
      name: "editPengeluaran",
      component: () => import("../views/Pengeluaran/EditPengeluaranView.vue"),
    },
  ],
});

export default router;
