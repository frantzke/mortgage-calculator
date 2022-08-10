import { calculatePayment, calculateAmortizationSchedule } from "../../src/helpers/calculations";

describe("calculations.js", () => {
  describe("calculatePayment", () => {
    const mortgageInput = {
      amount: 100000,
      yearlyRate: 0.05,
      period: 25,
      numYearlyPayments: 12,
    };

    it("returns correct payment", () => {
      const payment = calculatePayment(mortgageInput);

      const expected = 584.59;
      expect(payment).toEqual(expected);
    });

    describe("amount", () => {
      it("handles minimum (zero) amount", () => {
        const zeroAmount = {
          ...mortgageInput,
          amount: 0,
        };
        const payment = calculatePayment(zeroAmount);

        const expected = 0;
        expect(payment).toEqual(expected);
      });

      it("handles max amount", () => {
        const stringAmount = {
          ...mortgageInput,
          amount: Number.MAX_SAFE_INTEGER,
        };
        const payment = calculatePayment(stringAmount);

        const expected = 52655189861996.84;
        expect(payment).toBeCloseTo(expected, 1);
      });

      it("handles invalid negative amount", () => {
        const negativeAmount = {
          ...mortgageInput,
          amount: -100000,
        };
        const payment = calculatePayment(negativeAmount);

        const expected = 0;
        expect(payment).toEqual(expected);
      });

      it("handles invalid string amount", () => {
        const stringAmount = {
          ...mortgageInput,
          amount: "100,000",
        };
        const payment = calculatePayment(stringAmount);

        //TODO: Should convert to float?
        const expected = 0;
        expect(payment).toEqual(expected);
      });
    });

    describe("rate", () => {
      it("handles rate greater than 1.00", () => {
        const stringAmount = {
          ...mortgageInput,
          yearlyRate: 10,
        };
        const payment = calculatePayment(stringAmount);

        const expected = 0;
        expect(payment).toEqual(expected);
      });

      it("handles maximum rate", () => {
        const stringAmount = {
          ...mortgageInput,
          yearlyRate: 1,
        };
        const payment = calculatePayment(stringAmount);

        const expected = 8333.33;
        expect(payment).toBeCloseTo(expected, 1);
      });

      it("handles invalid zero rate", () => {
        const stringAmount = {
          ...mortgageInput,
          yearlyRate: 0,
        };
        const payment = calculatePayment(stringAmount);

        const expected = 0;
        expect(payment).toEqual(expected);
      });

      it("handles invalid negative rate", () => {
        const stringAmount = {
          ...mortgageInput,
          yearlyRate: -0.05,
        };
        const payment = calculatePayment(stringAmount);

        const expected = 0;
        expect(payment).toEqual(expected);
      });

      it("handles invalid string rate", () => {
        const stringAmount = {
          ...mortgageInput,
          yearlyRate: "10.5%",
        };
        const payment = calculatePayment(stringAmount);

        const expected = 0;
        expect(payment).toEqual(expected);
      });
    });

    describe("period", () => {
      it("handles zero period", () => {
        const stringAmount = {
          ...mortgageInput,
          period: 0,
        };
        const payment = calculatePayment(stringAmount);

        const expected = 0;
        expect(payment).toEqual(expected);
      });

      it("handles minimum period", () => {
        const stringAmount = {
          ...mortgageInput,
          period: 1,
        };
        const payment = calculatePayment(stringAmount);

        const expected = 8560.75;
        expect(payment).toEqual(expected);
      });

      it("handles maximum period", () => {
        const stringAmount = {
          ...mortgageInput,
          period: 30,
        };
        const payment = calculatePayment(stringAmount);

        const expected = 536.82;
        expect(payment).toEqual(expected);
      });

      it("handles invalid negative period", () => {
        const stringAmount = {
          ...mortgageInput,
          period: -25,
        };
        const payment = calculatePayment(stringAmount);

        const expected = 0;
        expect(payment).toEqual(expected);
      });

      it("handles invalid period greater than 30", () => {
        const stringAmount = {
          ...mortgageInput,
          period: 31,
        };
        const payment = calculatePayment(stringAmount);

        const expected = 0;
        expect(payment).toEqual(expected);
      });
    });

    describe("numYearlyPayments", () => {
      it("handles semi-monthly payments", () => {
        const stringAmount = {
          ...mortgageInput,
          numYearlyPayments: 24,
        };
        const payment = calculatePayment(stringAmount);

        const expected = 292.14;
        expect(payment).toBeCloseTo(expected, 1);
      });

      it("handles bi-weekly payments", () => {
        const stringAmount = {
          ...mortgageInput,
          numYearlyPayments: 26,
        };
        const payment = calculatePayment(stringAmount);

        const expected = 269.66;
        expect(payment).toBeCloseTo(expected, 1);
      });

      it("handles weekly payments", () => {
        const stringAmount = {
          ...mortgageInput,
          numYearlyPayments: 52,
        };
        const payment = calculatePayment(stringAmount);

        const expected = 134.8;
        expect(payment).toBeCloseTo(expected, 1);
      });

      it("handles invalid zero yearly payments", () => {
        const stringAmount = {
          ...mortgageInput,
          numYearlyPayments: 0,
        };
        const payment = calculatePayment(stringAmount);

        const expected = 0;
        expect(payment).toEqual(expected);
      });
    });
  });

  describe("calculateAmortizationSchedule", () => {
    it("returns correct first and last payment", () => {
      const schedule = calculateAmortizationSchedule({
        payment: 584.59,
        initalAmount: 100000,
        yearlyRate: 0.05,
        period: 25,
        numYearlyPayments: 12,
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
        principalBalance: 0.05,
        interestPaid: 75377.05,
      };
      expect(firstPayment).toEqual(expectedFirst);
      expect(finalPayment).toEqual(expectedFinal);
    });
  });
});
