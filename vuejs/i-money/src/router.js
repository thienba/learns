import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    meta: {
      layout: "default-layout",
    },
    name: "home-route",
    component: () => import("@/views/home"),
  },
  {
    path: "/register",
    meta: {
      layout: "auth-layout",
    },
    name: "register-route",
    component: () => import("@/views/register"),
  },
  {
    path: "/login",
    meta: {
      layout: "auth-layout",
    },
    name: "login-route",
    component: () => import("@/views/login"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
