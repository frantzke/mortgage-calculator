const round = (num) => {
  return Math.round(num * 100) / 100;
};

const calculateMonthlyPayment = function ({ amount, yearlyRate, period, numYearlyPayments }) {
  //TODO: Handle invalid inputs here for tests
  const amt = parseFloat(amount);
  const rate = parseFloat(yearlyRate);
  if (isNaN(amt) || amt < 0 || isNaN(rate) || rate < 0) {
    console.log(`calculateMonthlyPayment: ${amount} is invalid`);
    return 0;
  }
  //yearlyRate should be between 1.00 and 0.00

  //period should be between 1 and 30

  const monthlyRate = rate / 12;
  const totalPayments = numYearlyPayments * period;

  // Total Monthly Payment = Loan Amount [ i (1+i) ^ n / ((1+i) ^ n) - 1) ]
  // i = monthly interest rate. You'll need to divide your annual interest rate by 12.
  // For example, if your annual interest rate is 6%, your monthly interest rate will be .005 (.06 annual interest rate / 12 months).
  // n = number of payments over the loan’s lifetime. Multiply the number of years in your loan term by 12. For example,
  // a 30-year mortgage loan would have 360 payments (30 years x 12 months).
  const numerator = monthlyRate * (1 + monthlyRate) ** totalPayments;
  const denom = (monthlyRate + 1) ** totalPayments - 1;
  const monthlyPayment = amt * (numerator / denom);
  return round(monthlyPayment);
};

const calculateAmortizationSchedule = function ({
  monthlyPayment,
  initalAmount,
  yearlyRate,
  totalPayments,
}) {
  //TODO: Handle invalid inputs

  const monthlyRate = yearlyRate / 12;
  let amount = initalAmount;
  let interestPaid = 0;
  const schedule = [];

  for (let i = 0; i < totalPayments; i++) {
    // Principal Payment = Total Monthly Payment - [Outstanding Loan Balance × (Interest Rate/12 Months)]
    const principalPayment = round(monthlyPayment - amount * monthlyRate, 2);
    const interestPayment = round(monthlyPayment - principalPayment, 2);

    amount -= round(principalPayment, 2);
    interestPaid += round(interestPayment, 2);
    schedule.push({
      period: i + 1,
      principalPayment,
      interestPayment,
      principalBalance: round(amount, 2),
      interestPaid: round(interestPaid, 2),
    });
  }

  return schedule;
};

module.exports = {
  calculateMonthlyPayment,
  calculateAmortizationSchedule,
};
