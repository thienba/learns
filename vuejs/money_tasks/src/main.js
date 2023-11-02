import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import diy from "./diy";

const app = createApp(App);

app.provide("diy", diy);

app.use(router);
app.use(store);

app.mount("#app");
