<template>
  <div v-if="summary" class="text-left">
    <h3>
      Over the <b>{{ summary.period }}</b
      >-year amortization period, you will:
    </h3>
    <ul class="ml-8">
      <li>
        have made {{ summary.totalPayments }} monthly ({{ summary.yearlyPayments }}x per year)
        payments of ${{ summary.monthlyPayment }}.
      </li>
      <li>
        have paid ${{ summary.amount }} in principal, ${{ summary.totalInterest }} in interest, for
        a total of ${{ summary.totalPaid }}.
      </li>
    </ul>

    <h3>Over the {{ summary.term }}-year term, you will:</h3>
    <ul class="ml-8">
      <li>
        have made {{ summary.termPayments }} monthly ({{ summary.yearlyPayments }}x per year)
        payments of ${{ summary.monthlyPayment }}.
      </li>
      <li>
        have paid ${{ summary.termPricipalPaid }} in principal, ${{ summary.termInterestPaid }} in
        interest, for a total of ${{ summary.termTotalPaid }}.
      </li>
    </ul>

    <h3>At the end of your {{ summary.term }}-year term, you will:</h3>
    <ul class="ml-8">
      <li>have a balance of {{ summary.termBalance }}.</li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "SummaryComponent",
  props: {},
  data: () => ({}),
  computed: {
    ...mapGetters(["summary"]),
  },
};
</script>
<style></style>
