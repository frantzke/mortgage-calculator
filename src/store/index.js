import { createStore } from "vuex";

export default createStore({
  state: {
    schedule: [],
    summary: {
      period: 25,
      yearlyPayments: 12,
      payment: 584.59,
      amount: 100000,
      totalPayments: 300,
      totalInterest: 75377.05,
      totalPaid: 175377.05,
      term: {
        period: 5,
        payments: 60,
        principalPaid: 11419.82,
        interestPaid: 23655.58,
        totalPaid: 5075.4,
        balance: 88580.18,
      },
    },
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
