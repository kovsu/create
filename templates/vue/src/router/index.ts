import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/2",
      component: () => import("../views/SecondPage.vue"),
    },
  ],
});
