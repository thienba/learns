import Home from "./pages/home";
import Transactions from "./pages/transactions";
import TransactionDetail from "./pages/transaction-detail";
import NotFound from "./pages/not-found";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "overview-route", component: Home },
  { path: "/transactions", name: "transaction-route", component: Transactions },
  {
    path: "/transaction/:id",
    name: "transaction-detail-route",
    component: TransactionDetail,
  },
  { path: "/:pathMatch(.*)*", name: "bad-not-found", component: NotFound },
  { path: "/ts", redirect: "/transactions" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
