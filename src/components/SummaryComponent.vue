<template>
  <div v-if="summary" class="text-left">
    <h2 class="mb-2">Mortgage Summary</h2>
    <h4>
      Over the <b>{{ summary.period }}</b
      >-year amortization period, you will:
    </h4>
    <ul class="ml-8">
      <li>
        have made {{ summary.totalPayments }} payments ({{ summary.yearlyPayments }}x per year)
        payments of {{ format(summary.monthlyPayment) }}.
      </li>
      <li>
        have paid {{ format(summary.amount) }} in principal, {{ format(summary.totalInterest) }} in
        interest, for a total of {{ format(summary.totalPaid) }}.
      </li>
    </ul>

    <h4>Over the {{ summary.term }}-year term, you will:</h4>
    <ul class="ml-8">
      <li>
        have made {{ summary.termPayments }} payments ({{ summary.yearlyPayments }}x per year)
        payments of {{ format(summary.monthlyPayment) }}.
      </li>
      <li>
        have paid {{ format(summary.termPricipalPaid) }} in principal,
        {{ format(summary.termInterestPaid) }} in interest, for a total of
        {{ format(summary.termTotalPaid) }}.
      </li>
    </ul>

    <h4>At the end of your {{ summary.term }}-year term, you will:</h4>
    <ul class="ml-8">
      <li>have a balance of {{ format(summary.termBalance) }}.</li>
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
  },
  methods: {
    format(num) {
      return formatCurrency(num);
    },
  },
};
</script>
<style></style>
