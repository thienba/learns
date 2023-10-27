import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      tasks: [
        { title: "Todo 1", done: false },
        { title: "Todo 2", done: true },
      ],
    };
  },
  getters: {
    tasks: (state) => state.tasks,
  },
  mutations: {
    addTask(state, title) {
      if (title) {
        state.tasks.push({ title, done: false });
        state.title = "";
      }
    },
  },
  actions: {
    addTaskAction: ({ commit }, title) => {
      commit("addTask", title);
    },
  },
});

createApp(App).use(store).mount("#app");
