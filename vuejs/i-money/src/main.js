import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/global.css";
import "./assets/styles/tailwind.css";
import { regisGlobalComponents } from "./utils/import";
import { onAuthStateChanged } from "firebase/auth";
import { fireAuth } from "./configs/firebase";

let app;

onAuthStateChanged(fireAuth, () => {
  if (!app) {
    app = createApp(App);

    regisGlobalComponents(app);
    app.use(router);
    app.mount("#app");
  }
});
