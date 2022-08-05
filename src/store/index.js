import { createStore } from "vuex";

export default createStore({
  state: {
    schedule: [],
    summary: null,
  },
  getters: {
    schedule: (state) => state.schedule,
    summary: (state) => state.summary,
  },
  mutations: {
    setSchedule(state, { schedule }) {
      state.schedule = schedule;
    },
    setSummary(state, { summary }) {
      state.summary = summary;
    },
  },
  actions: {
    updateSchedule({ commit }, { schedule }) {
      commit("setSchedule", { schedule });
    },
    updateSummary({ commit }, { summary }) {
      commit("setSummary", { summary });
    },
  },
  modules: {},
});
