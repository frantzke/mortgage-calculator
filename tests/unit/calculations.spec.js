import {
  calculateMonthlyPayment,
  calculateAmortizationSchedule,
} from "../../src/helpers/calculations";

describe("calculations.js", () => {
  describe("calculateMonthlyPayment", () => {
    const mortgageInput = {
      amount: 100000,
      yearlyRate: 0.05,
      period: 25,
      numYearlyPayments: 12,
    };

    it("returns correct monthly payment", () => {
      const monthlyPayment = calculateMonthlyPayment(mortgageInput);

      const expected = 584.59;
      expect(monthlyPayment).toEqual(expected);
    });

    it("handles zero amount", () => {
      const zeroAmount = {
        ...mortgageInput,
        amount: 0,
      };
      const monthlyPayment = calculateMonthlyPayment(zeroAmount);

      const expected = 0;
      expect(monthlyPayment).toEqual(expected);
    });

    it("handles invalid negative amount", () => {
      const negativeAmount = {
        ...mortgageInput,
        amount: -100000,
      };
      const monthlyPayment = calculateMonthlyPayment(negativeAmount);

      const expected = 0;
      expect(monthlyPayment).toEqual(expected);
    });

    it("handles invalid string amount", () => {
      const stringAmount = {
        ...mortgageInput,
        amount: "100,000",
      };
      const monthlyPayment = calculateMonthlyPayment(stringAmount);

      const expected = 0;
      expect(monthlyPayment).toEqual(expected);
    });

    it("handles max amount", () => {
      const stringAmount = {
        ...mortgageInput,
        amount: Number.MAX_SAFE_INTEGER,
      };
      const monthlyPayment = calculateMonthlyPayment(stringAmount);

      const expected = 52655189861996.84;
      expect(monthlyPayment).toEqual(expected);
    });

    it("handles rate greater than 1.00", () => {
      const stringAmount = {
        ...mortgageInput,
        yearlyRate: 10,
      };
      const monthlyPayment = calculateMonthlyPayment(stringAmount);

      const expected = 0;
      expect(monthlyPayment).toEqual(expected);
    });

    it("handles zero rate", () => {
      const stringAmount = {
        ...mortgageInput,
        yearlyRate: 0,
      };
      const monthlyPayment = calculateMonthlyPayment(stringAmount);

      const expected = 0;
      expect(monthlyPayment).toEqual(expected);
    });

    it("handles invalid negative rate", () => {
      const stringAmount = {
        ...mortgageInput,
        yearlyRate: -10,
      };
      const monthlyPayment = calculateMonthlyPayment(stringAmount);

      const expected = 0;
      expect(monthlyPayment).toEqual(expected);
    });

    it("handles invalid string rate", () => {
      const stringAmount = {
        ...mortgageInput,
        yearlyRate: "10.5%",
      };
      const monthlyPayment = calculateMonthlyPayment(stringAmount);

      const expected = 0;
      expect(monthlyPayment).toEqual(expected);
    });

    it("handles zero period", () => {
      const stringAmount = {
        ...mortgageInput,
        period: 0,
      };
      const monthlyPayment = calculateMonthlyPayment(stringAmount);

      const expected = 0;
      expect(monthlyPayment).toEqual(expected);
    });

    it("handles invalid negative period", () => {
      const stringAmount = {
        ...mortgageInput,
        period: -25,
      };
      const monthlyPayment = calculateMonthlyPayment(stringAmount);

      const expected = 0;
      expect(monthlyPayment).toEqual(expected);
    });

    it("handles period greater than 30", () => {
      const stringAmount = {
        ...mortgageInput,
        period: 31,
      };
      const monthlyPayment = calculateMonthlyPayment(stringAmount);

      const expected = 0;
      expect(monthlyPayment).toEqual(expected);
    });

    it("handles float period", () => {
      const stringAmount = {
        ...mortgageInput,
        period: 25.5,
      };
      const monthlyPayment = calculateMonthlyPayment(stringAmount);

      const expected = 0;
      expect(monthlyPayment).toEqual(expected);
    });

    it("handles semi-monthly payments", () => {
      const stringAmount = {
        ...mortgageInput,
        numYearlyPayments: 24,
      };
      const monthlyPayment = calculateMonthlyPayment(stringAmount);

      const expected = 290.65;
      expect(monthlyPayment).toEqual(expected);
    });

    it("handles bi-weekly payments", () => {
      const stringAmount = {
        ...mortgageInput,
        numYearlyPayments: 26,
      };
      const monthlyPayment = calculateMonthlyPayment(stringAmount);

      const expected = 268.28;
      expect(monthlyPayment).toEqual(expected);
    });

    it("handles weekly payments", () => {
      const stringAmount = {
        ...mortgageInput,
        numYearlyPayments: 52,
      };
      const monthlyPayment = calculateMonthlyPayment(stringAmount);

      const expected = 134.11;
      expect(monthlyPayment).toEqual(expected);
    });

    it("handles invalid yearly payments", () => {
      const stringAmount = {
        ...mortgageInput,
        numYearlyPayments: 0,
      };
      const monthlyPayment = calculateMonthlyPayment(stringAmount);

      const expected = 134.11;
      expect(monthlyPayment).toEqual(expected);
    });
  });

  describe("calculateAmortizationSchedule", () => {
    it("returns correct first and last payment", () => {
      const schedule = calculateAmortizationSchedule({
        monthlyPayment: 584.59,
        initalAmount: 100000,
        yearlyRate: 0.05,
        totalPayments: 300,
      });
      const firstPayment = schedule[0];
      const finalPayment = schedule[schedule.length - 1];
      const expectedFirst = {
        period: 1,
        principalPayment: 167.92,
        interestPayment: 416.67,
        principalBalance: 99832.08,
        interestPaid: 416.67,
      };
      const expectedFinal = {
        period: 300,
        principalPayment: 582.16,
        interestPayment: 2.43,
        principalBalance: 0.0,
        interestPaid: 75377.01,
      };
      expect(firstPayment).toEqual(expectedFirst);
      expect(finalPayment).toEqual(expectedFinal);
    });
  });
});
