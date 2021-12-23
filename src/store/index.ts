import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
  },
  mutations: {
    increase(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
  },
  actions: {
    inc() {
      this.commit("increase");
    },
    dec() {
      this.commit("decrease");
    },
  },
  modules: {
    // authStore,
  },
});
