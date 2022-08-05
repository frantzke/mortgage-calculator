const { roundTo } = require("round-to");

const calculateMonthlyPayment = function ({ amount, yearlyRate, period, numYearlyPayments }) {
  const monthlyRate = yearlyRate / 12;
  const totalPayments = numYearlyPayments * period;

  // Total Monthly Payment = Loan Amount [ i (1+i) ^ n / ((1+i) ^ n) - 1) ]
  // i = monthly interest rate. You'll need to divide your annual interest rate by 12.
  // For example, if your annual interest rate is 6%, your monthly interest rate will be .005 (.06 annual interest rate / 12 months).
  // n = number of payments over the loan’s lifetime. Multiply the number of years in your loan term by 12. For example,
  // a 30-year mortgage loan would have 360 payments (30 years x 12 months).
  const numerator = monthlyRate * (1 + monthlyRate) ** totalPayments;
  const denom = (monthlyRate + 1) ** totalPayments - 1;
  const monthlyPayment = amount * (numerator / denom);
  return Math.round(monthlyPayment * 100) / 100;
};

const calculateAmortizationSchedule = function ({
  monthlyPayment,
  initalAmount,
  yearlyRate,
  totalPayments,
}) {
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
};

module.exports = {
  calculateMonthlyPayment,
  calculateAmortizationSchedule,
};
