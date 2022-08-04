<template>
  <form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="amount" label="Mortgage Amount" type="number" required />
        </v-col>
        <v-col cols="12">
          <v-slider v-model="amount" :min="0" :max="1000000" :step="10000" thumb-label></v-slider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="rate" label="Interest Rate" type="number" suffix="%" required />
        </v-col>
        <v-col cols="12" md="6">
          <v-select v-model="term" :items="terms" item-title="label" label="Term" required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-select
            v-model="period"
            :items="periods"
            item-title="label"
            label="Amortization Period"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            v-model="frequency"
            :items="frequencies"
            item-title="label"
            label="Frequency"
            required
          />
        </v-col>
      </v-row>
      <v-btn class="my-4" @click="submit">Calculate </v-btn>
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
            have paid ${{ summary.amount }} in principal, ${{ summary.totalInterest }} in interest,
            for a total of ${{ summary.totalPaid }}.
          </li>
        </ul>
      </div>
    </v-container>
  </form>
</template>

<script>
import { roundTo } from "round-to";
import { mapActions } from "vuex";

export default {
  name: "FormComponent",

  data: () => ({
    monthlyPayment: "0",
    amount: 100000,
    rate: "5",
    period: 25,
    periods: null,
    frequency: 12,
    frequencies: [
      {
        value: 52,
        label: "Weekly",
      },
      {
        value: 26,
        label: "Bi-Weekly",
      },
      {
        value: 24,
        label: "Semi-Monthly",
      },
      {
        value: 12,
        label: "Monthly",
      },
    ],
    term: 5,
    terms: null,
    summary: null,
    schedule: [],
  }),

  computed: {},

  created() {
    this.terms = this.generateTerms(10);
    this.periods = this.generatePeriods(6);
  },

  methods: {
    ...mapActions(["updateSchedule"]),
    generateTerms(numYears) {
      const terms = Array(numYears)
        .fill(0)
        .map((_, i) => {
          return {
            value: i + 1,
            label: `${i + 1} Years`,
          };
        });
      terms[0].label = "1 Year";
      return terms;
    },
    generatePeriods(numPeriods) {
      const periods = Array(numPeriods)
        .fill(0)
        .map((_, i) => {
          const years = (i + 1) * 5;
          return {
            value: years,
            label: `${years} Years`,
          };
        });
      return periods;
    },
    submit() {
      //TODO: Should validate inputs here

      this.calculateMortgage({
        amount: this.amount,
        rate: this.rate,
        amortization: this.period,
        frequency: this.frequency,
      });
    },
    calculateMortgage({ amount, rate, amortization, frequency }) {
      // Handle invalid inputs
      const amt = parseFloat(amount);
      const yearlyRate = parseFloat(rate) / 100;
      const period = parseInt(amortization);
      const yearlyPayments = parseInt(frequency);
      if (isNaN(amt) || isNaN(yearlyRate) || isNaN(period) || isNaN(yearlyPayments)) {
        console.error("calculateMortgage: invalid input");
        return {};
      }

      const monthlyPayment = this.calculateMonthlyPayment({
        amount: amt,
        yearlyRate,
        period,
        yearlyPayments,
      });

      const totalPayments = yearlyPayments * period;
      //TODO: Iterate through total payments
      // Calculate principal + interest amounts
      const schedule = this.calculateAmortizationSchedule({
        monthlyPayment,
        initalAmount: amount,
        yearlyRate,
        totalPayments,
      });

      //Update Schedule
      this.updateSchedule({ schedule });

      const totalInterest = roundTo(schedule[schedule.length - 1].interestPaid, 2);

      const summary = {
        period,
        totalPayments,
        yearlyPayments,
        monthlyPayment,
        amount,
        totalInterest,
        totalPaid: roundTo(amount + totalInterest, 2),
      };
      this.summary = summary;
    },

    calculateMonthlyPayment({ amount, yearlyRate, period, yearlyPayments }) {
      const monthlyRate = yearlyRate / 12;
      const totalPayments = yearlyPayments * period;

      // Total Monthly Payment = Loan Amount [ i (1+i) ^ n / ((1+i) ^ n) - 1) ]
      // i = monthly interest rate. You'll need to divide your annual interest rate by 12.
      // For example, if your annual interest rate is 6%, your monthly interest rate will be .005 (.06 annual interest rate / 12 months).
      // n = number of payments over the loan’s lifetime. Multiply the number of years in your loan term by 12. For example,
      // a 30-year mortgage loan would have 360 payments (30 years x 12 months).
      const numerator = monthlyRate * (1 + monthlyRate) ** totalPayments;
      const denom = (monthlyRate + 1) ** totalPayments - 1;
      const monthlyPayment = amount * (numerator / denom);
      return Math.round(monthlyPayment * 100) / 100;
    },

    calculateAmortizationSchedule({ monthlyPayment, initalAmount, yearlyRate, totalPayments }) {
      const monthlyRate = yearlyRate / 12;
      let amount = initalAmount;
      let interestPaid = 0;
      const schedule = [];

      for (let i = 0; i < totalPayments; i++) {
        // Principal Payment = Total Monthly Payment - [Outstanding Loan Balance × (Interest Rate/12 Months)]
        const principalPayment = roundTo(monthlyPayment - amount * monthlyRate, 2);
        const interestPayment = roundTo(monthlyPayment - principalPayment, 2);

        amount -= roundTo(principalPayment, 2);
        interestPaid += roundTo(interestPayment, 2);
        schedule.push({
          period: i + 1,
          principalPayment,
          interestPayment,
          principalBalance: roundTo(amount, 2),
          interestPaid: roundTo(interestPaid, 2),
        });
      }

      return schedule;
    },
  },
};
</script>
