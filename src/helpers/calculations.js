const round = (num) => {
  return Math.round(num * 100) / 100;
};

/**
 * Calculates the regular payment of a mortgage. Returns the amount
 *
 * @param {object} MortgageInfo
 * @param {number} mortgageInfo.amount            Amount of the mortgage
 * @param {number} mortgageInfo.yearlyRate        Yearly interest rate of the mortgage
 * @param {number} mortgageInfo.period            Amortization period of the mortgage
 * @param {number} mortgageInfo.numYearlyPayments Number of payments to the mortgage in a year
 *
 * @returns {number} regular payment amount
 */
const calculatePayment = function ({ amount, yearlyRate, period, numYearlyPayments }) {
  //amount should be greater than 0
  const amt = parseFloat(amount);
  if (typeof amount !== "number" || isNaN(amt) || amt < 0) {
    console.log(`calculatePayment: amount ${amount} is invalid`);
    return 0;
  }

  //yearlyRate should be between 1.00 and 0.00
  const rate = parseFloat(yearlyRate);
  if (typeof yearlyRate !== "number" || isNaN(rate) || rate <= 0 || rate > 1) {
    console.log(`calculatePayment: yearlyRate ${yearlyRate} is invalid`);
    return 0;
  }

  //period should be between 1 and 30
  const ammortization = parseInt(period);
  if (
    typeof period !== "number" ||
    isNaN(ammortization) ||
    ammortization < 1 ||
    ammortization > 30
  ) {
    console.log(`calculatePayment: period ${period} is invalid`);
    return 0;
  }

  const yearlyPayments = parseInt(numYearlyPayments);
  if (typeof numYearlyPayments !== "number" || yearlyPayments <= 0) {
    console.log(`calculatePayment: numYearlyPayments ${numYearlyPayments} is invalid`);
    return 0;
  }

  // Payment = [P x (R / N) x (1 + (R/N) )^(N*T)] / [(1 + (R/N) )^(N*T) - 1]
  // P - The loan amount (P) or principal, which is the home-purchase price plus any other charges, minus the down payment
  // R - The annual interest rate (r) on the loan, but beware that this is not necessarily the APR, because the mortgage is paid monthly, not annually, and that creates a slight difference between the APR and the interest rate
  // T - The number of years (t) you have to repay, also known as the "term"
  // N - The number of payments per year (n), which would be 12 for monthly payments
  // R/N - Payment rate = Rate / Number of payments per year
  const paymentRate = rate / yearlyPayments;
  // (N*T) - Total payments over period
  const totalPayments = yearlyPayments * ammortization;
  // (1 + R/N) ^ (N * T) - total period payment rate
  const totalPeriodPaymentRate = (1 + paymentRate) ** totalPayments;

  const payment = (amt * paymentRate * totalPeriodPaymentRate) / (totalPeriodPaymentRate - 1);
  return round(payment);
};

/**
 * Calculates amortization schedule of a mortgage. Returns the schedule as an array
 *
 * @param {object} mortgageInfo
 * @param {number} mortgageInfo.payment           Mortgage regular payment amount
 * @param {number} mortgageInfo.initalAmount      Initial amount of the mortgage
 * @param {number} mortgageInfo.yearlyRate        Yearly interest rate of the mortgage
 * @param {number} mortgageInfo.period            Amortization period of the mortgage
 * @param {number} mortgageInfo.numYearlyPayments Number of payments to the mortgage in a year
 *
 * @returns {Array} amortization schedule
 */
const calculateAmortizationSchedule = function ({
  payment,
  initalAmount,
  yearlyRate,
  period,
  numYearlyPayments,
}) {
  //TODO: Handle invalid inputs
  const rate = yearlyRate / numYearlyPayments;
  const totalPayments = numYearlyPayments * period;
  const schedule = [];

  let amount = initalAmount;
  let interestPaid = 0;

  for (let i = 0; i < totalPayments; i++) {
    // Principal Payment = Payment - [Outstanding Loan Balance ?? (Interest Rate/ Yearly Payments)]
    const principalPayment = round(payment - amount * rate);
    const interestPayment = round(payment - principalPayment);

    amount -= round(principalPayment);
    interestPaid += round(interestPayment);
    schedule.push({
      period: i + 1,
      principalPayment,
      interestPayment,
      principalBalance: round(amount),
      interestPaid: round(interestPaid),
    });
  }

  return schedule;
};

module.exports = {
  round,
  calculatePayment,
  calculateAmortizationSchedule,
};
