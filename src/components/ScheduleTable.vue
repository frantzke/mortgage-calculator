<template>
  <v-table v-if="schedule.length > 0">
    <thead>
      <tr>
        <th class="text-left">Period</th>
        <th class="text-right">Principal Payment</th>
        <th class="text-right">Interest Payment</th>
        <th class="text-right">Interest Paid</th>
        <th class="text-right">Principal Balance</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in schedule" :key="item.period">
        <td class="text-left">{{ item.period }}</td>
        <td class="text-right">{{ item.principalPayment }}</td>
        <td class="text-right">{{ item.interestPayment }}</td>
        <td class="text-right">{{ item.interestPaid }}</td>
        <td class="text-right">{{ item.principalBalance }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "ScheduleTable",
  props: {},
  data: () => ({}),
  computed: {
    ...mapGetters(["schedule"]),
  },
};
</script>
<style></style>
