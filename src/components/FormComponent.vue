<template>
  <form>
    <v-container>
      <v-row no-gutters>
        <v-col cols="12">
          <v-text-field
            v-model="amount"
            label="Mortgage Amount"
            variant="outlined"
            required
            hide-details="auto"
            :rules="[
              v => !!v || 'Amount is required',
              v => parseFloat(v) > 0 || 'Amount must be greater than 0',
            ]"
          />
          <v-slider
            color="#3c89ff"
            v-model="amount"
            :min="0"
            :max="1000000"
            :step="10000"
            thumb-label
          ></v-slider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="rate"
            label="Interest Rate"
            type="number"
            variant="outlined"
            suffix="%"
            required
            hide-details="auto"
            :rules="[
              v => !!v || 'Rate is required',
              v => parseFloat(v) > 0 || 'Rate must be greater than 0',
              v => parseFloat(v) < 100 || 'Rate must be less than 100',
            ]"
          />
          <v-slider
            color="#3c89ff"
            v-model="rate"
            :min="0"
            :max="100"
            :step="1"
            thumb-label
          ></v-slider>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            v-model="term"
            :items="terms"
            item-title="label"
            label="Term"
            required
            variant="outlined"
          />
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
            variant="outlined"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            v-model="frequency"
            :items="frequencies"
            item-title="label"
            label="Frequency"
            required
            variant="outlined"
          />
        </v-col>
        <v-col cols="12" class="d-flex justify-end">
          <v-btn color="#3c89ff" variant="outlined" @click="onSubmit">Calculate </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="hasError" color="error"> Invalid Input </v-snackbar>
  </form>
</template>

<script>
import { mapActions } from "vuex";

import { round, calculatePayment, calculateAmortizationSchedule } from "../helpers/calculations";

export default {
  name: "FormComponent",

  data: () => ({
    amount: 100000,
    rate: 5,
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
    hasError: false,
  }),

  computed: {
  },

  created() {
    this.terms = this.generateTerms(10);
    this.periods = this.generatePeriods(6);
  },

  methods: {
    ...mapActions(["updateSchedule", "updateSummary"]),
    // Generate array of terms to select from
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
    // Generate array of mortgage periods to select from
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

    onSubmit() {
      const amount = parseFloat(this.amount);
      const rate = parseFloat(this.rate);
      const period = parseInt(this.period);
      const frequency = parseInt(this.frequency);
      const term = parseInt(this.term);

      if (isNaN(amount) || isNaN(rate) || isNaN(period) || isNaN(frequency) || isNaN(term)) {
        console.error("Invalid input");
        this.hasError = true;
        return;
      }

      if (amount < 0 || !( 0 < rate && rate < 100)) {
        console.error("Invalid input");
        this.hasError = true;
        return;
      }

      this.calculateMortgage({
        amount,
        rate,
        period,
        frequency,
        term,
      });
    },

    calculateMortgage({ amount, rate, period, frequency, term }) {
      const yearlyRate = parseFloat(rate) / 100;
      const numYearlyPayments = parseInt(frequency);

      const payment = calculatePayment({
        amount,
        yearlyRate,
        period,
        numYearlyPayments,
      });

      if (payment === 0) {
        console.error("Invalid input");
        this.hasError = true;
        return;
      }

      // Calculate principal + interest amounts
      const schedule = calculateAmortizationSchedule({
        payment,
        initalAmount: amount,
        yearlyRate,
        period,
        numYearlyPayments,
      });
      this.updateSchedule({ schedule });

      //Get Totals
      const totalPayments = numYearlyPayments * period;
      const totalInterest = round(schedule[schedule.length - 1].interestPaid);

      // Get Term Info
      const termPayments = term * numYearlyPayments;
      const endOfTerm = schedule[termPayments - 1];
      const termPricipalPaid = amount - endOfTerm.principalBalance;
      const termInterestPaid = endOfTerm.interestPaid;
      const termTotalPaid = termPricipalPaid + termInterestPaid;

      const summary = {
        amount,
        period,
        totalPayments,
        yearlyPayments: numYearlyPayments,
        payment,
        totalInterest,
        totalPaid: round(amount + totalInterest),
        term: {
          period: term,
          payments: termPayments,
          principalPaid: termPricipalPaid,
          interestPaid: termInterestPaid,
          totalPaid: termTotalPaid,
          balance: endOfTerm.principalBalance,
        },
      };

      this.updateSummary({ summary });
    },
  },
};
</script>
