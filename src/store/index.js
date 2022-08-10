import { createStore } from "vuex";

export default createStore({
  state: {
    schedule: [],
    summary: {
      period: 25,
      totalPayments: 300,
      yearlyPayments: 12,
      monthlyPayment: 584.59,
      amount: 100000,
      totalInterest: 75377.05,
      totalPaid: 175377.05,
      term: 5,
      termPayments: 60,
      termPricipalPaid: 11419.820000000007,
      termInterestPaid: 23655.58,
      termTotalPaid: 35075.40000000001,
      termBalance: 88580.18,
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
