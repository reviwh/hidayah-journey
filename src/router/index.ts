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
      component: () => import("../views/JemaahView.vue"),
    },
  ],
});

export default router;
