import { createRouter, createWebHistory } from "vue-router";
const HomeView = () => import("../views/HomeView.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
