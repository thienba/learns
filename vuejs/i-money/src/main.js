import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/global.css";
import "./assets/styles/tailwind.css";
import { regisGlobalComponents } from "./utils/import";

const app = createApp(App);

regisGlobalComponents(app);
app.use(router);
app.mount("#app");
