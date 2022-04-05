import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes: any = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
