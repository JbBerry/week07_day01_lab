const Calculator = require("../calculator.js");

describe("Calculator: Compound interest", () => {
  // Exopected results based on U.S Securities and Exchange Comission Compound Interest Calculator and compounded monthly
  // https://www.investor.gov/additional-resources/free-financial-planning-tools/compound-interest-calculator

  test("should return 732.81 given 100, 10 percent, 20 years", () => {
    expect(Calculator.calculateCompoundInterest({
      baseAmount: 100,
      annualInterest: 10,
      calculationPeriod: 20
    })).toEqual(732.81);
  });

  test("should return 181.94 given 100, 6 percent, 10 years", () => {
    expect(Calculator.calculateCompoundInterest({
      baseAmount: 100,
      annualInterest: 6,
      calculationPeriod: 10
    })).toEqual(181.94);
  });

  test("should return 149,058.55 given 100000, 5 percent, 8 years", () => {
    expect(Calculator.calculateCompoundInterest({
      baseAmount: 100000,
      annualInterest: 5,
      calculationPeriod: 8
    })).toEqual(149058.55);
  });

  test("should return 0.00 given 0, 10 percent, 1 year", () => {
    expect(Calculator.calculateCompoundInterest({
      baseAmount: 0,
      annualInterest: 10,
      calculationPeriod: 1
    })).toEqual(0.00);
  });

  test("should return 100.00 given 100, 0 percent, 10 years", () => {
    expect(Calculator.calculateCompoundInterest({
      baseAmount: 100,
      annualInterest: 0,
      calculationPeriod: 10
    })).toEqual(100.00);
  });
});
