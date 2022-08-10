<template>
  <div v-if="summary" class="text-left">
    <h2 class="mb-2">Mortgage Summary</h2>
    <h4>Over the {{ summary.period }}-year amortization period, you will:</h4>
    <ul class="ml-8 mb-2">
      <li>
        have made {{ summary.totalPayments }} payments ({{ summary.yearlyPayments }}x per year)
        payments of {{ format(summary.payment) }}.
      </li>
      <li>
        have paid {{ format(summary.amount) }} in principal, {{ format(summary.totalInterest) }} in
        interest, for a total of {{ format(summary.totalPaid) }}.
      </li>
    </ul>

    <h4>Over the {{ term.period }}-year term, you will:</h4>
    <ul class="ml-8 mb-2">
      <li>
        have made {{ term.payments }} payments ({{ summary.yearlyPayments }}x per year) payments of
        {{ format(summary.payment) }}.
      </li>
      <li>
        have paid {{ format(term.principalPaid) }} in principal, {{ format(term.interestPaid) }} in
        interest, for a total of {{ format(term.totalPaid) }}.
      </li>
    </ul>

    <h4>At the end of your {{ term.period }}-year term, you will:</h4>
    <ul class="ml-8">
      <li>have a balance of {{ format(term.balance) }}.</li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { formatCurrency } from "../helpers/formatter";

export default {
  name: "SummaryComponent",
  props: {},
  data: () => ({}),
  computed: {
    ...mapGetters(["summary"]),
    term() {
      return this.summary.term;
    },
  },
  methods: {
    format(num) {
      return formatCurrency(num);
    },
  },
};
</script>
<style></style>
