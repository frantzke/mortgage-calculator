<template>
  <div v-if="summary">
    <h4>Regular Payment</h4>
    <h2 class="mb-4">{{ format(summary.payment) }}</h2>
    <vc-donut
      background="white"
      :size="300"
      :thickness="30"
      has-legend
      legend-placement="bottom"
      :sections="sections"
      :total="total"
    >
      Total Paid
      <h4>{{ format(total) }}</h4>
    </vc-donut>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { formatCurrency } from "@/helpers/formatter";

export default {
  name: "DonutChart",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["summary"]),
    sections() {
      if (!this.summary) return [];
      return [
        {
          label: `${this.format(this.summary.totalInterest)} Interest`,
          value: this.summary.totalInterest,
          color: "#f64e00",
        },
        {
          label: `${this.format(this.summary.amount)} Loan`,
          value: this.summary.amount,
          color: "#3c89ff",
        },
      ];
    },
    total() {
      if (!this.summary) return 0;
      return this.summary.totalPaid;
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
