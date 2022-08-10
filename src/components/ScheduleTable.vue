<template>
  <h2 class="mb-2 text-left" v-if="schedule.length > 0">Payment Schedule</h2>
  <v-table v-if="schedule.length > 0">
    <thead>
      <tr>
        <th class="text-left">Period</th>
        <th class="text-right">Principal Payment</th>
        <th class="text-right">Interest Payment</th>
        <th class="text-right">Total Payment</th>
        <th class="text-right">Interest Paid</th>
        <th class="text-right">Principal Balance</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in schedule" :key="item.period">
        <td class="text-left">{{ item.period }}</td>
        <td class="text-right">{{ format(item.principalPayment) }}</td>
        <td class="text-right">{{ format(item.interestPayment) }}</td>
        <td class="text-right">{{ format(item.principalPayment + item.interestPayment) }}</td>
        <td class="text-right">{{ format(item.interestPaid) }}</td>
        <td class="text-right">{{ format(item.principalBalance) }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
<script>
import { mapGetters } from "vuex";
import { formatCurrency } from "../helpers/formatter";

export default {
  name: "ScheduleTable",
  props: {},
  data: () => ({}),
  computed: {
    ...mapGetters(["schedule"]),
  },
  methods: {
    format(num) {
      return formatCurrency(num);
    },
  },
};
</script>
<style></style>
