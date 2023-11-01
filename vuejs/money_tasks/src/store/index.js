import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
      transaction: null,
      tsList: [],
      error: null
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setTs(state, ts) {
      state.transaction = ts;
    },
    setTsList(state, tsList) {
      state.tsList = tsList;
    },
    setError(state, err) {
      state.error = err;
    },
  },
  getters: {
    transaction(state) {
      return state.transaction;
    },
    tsList(state) {
      return state.transaction;
    },
  },
  actions: {
    async fetchTs({ commit }, { id }) {
      const res = await fetch(`http://localhost:3000/transactions/${id}`);

      const data = await res.json();
      commit("setTs", data);
    },
    async fetchAllTs({ commit }) {
      try {
        const res = await fetch(`http://localhost:3000/transactions`);

        if (!res.ok) throw new Error("Something went wrong...");

        const data = await res.json();
        commit("setTsList", data);
      } catch (err) {
        console.log(err);
        commit("setError", err);
      }
    },
  },
});

export default store;
