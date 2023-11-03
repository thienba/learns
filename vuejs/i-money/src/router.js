import { createRouter, createWebHistory } from "vue-router";
import { fireAuth } from "./configs/firebase";

const authenticate = (to, from, next) => {
  const user = fireAuth.currentUser;
  console.log(user);
  if (!user) next({ name: "login-route" });
  else next();
};

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
  {
    path: "/profile",
    meta: {
      layout: "default-layout",
    },
    name: "profile-route",
    component: () => import("@/views/profile"),
    beforeEnter: authenticate,
  },
  {
    path: "/logout",
    name: "logout-route",
    component: () => import("@/views/logout"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
