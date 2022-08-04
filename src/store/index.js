// import Vue from "vue";
import { createStore } from "vuex";

export default createStore({
  state: {
    schedule: [],
  },
  getters: {
    schedule: (state) => state.schedule,
  },
  mutations: {
    setSchedule(state, { schedule }) {
      state.schedule = schedule;
      // Vue.set(state, "schedule", { schedule });
    },
  },
  actions: {
    updateSchedule({ commit }, { schedule }) {
      commit("setSchedule", { schedule });
    },
  },
  modules: {},
});
