import React from "react";
import CalcForm from "./CalcForm";
import { render, fireEvent, cleanup } from "react-testing-library";

const setup = () => {
  const utils = render(<CalcForm />);
  const baseAmountInput = utils.getByLabelText("Invested Amount");
  const annualInterestInput = utils.getByLabelText("Annual Interest");
  const yearsInput = utils.getByLabelText("Years to grow");
  const btn = utils.getByText("Calculate");

  return {
    baseAmountInput,
    annualInterestInput,
    yearsInput,
    btn,
    ...utils
  };
};

afterEach(cleanup);

describe("CalcForm", () => {
  it("should display three inputs and a button on the page", () => {
    // Arrange
    const { getByText, getByLabelText } = setup(); // destructuring object to get the two funcitons out
    // Act
    // Assert
    expect(getByLabelText("Invested Amount")).toBeTruthy();
    expect(getByLabelText("Annual Interest")).toBeTruthy();
    expect(getByLabelText("Years to grow")).toBeTruthy();
    expect(getByText("Calculate")).toBeTruthy();
  });

  it("should accept input", () => {
    //Arrange
    const { baseAmountInput, annualInterestInput, yearsInput } = setup();
    //Act
    fireEvent.change(baseAmountInput, { target: { value: "10000" } }); // simulates someone typing into the input box
    fireEvent.change(annualInterestInput, { target: { value: "4" } });
    fireEvent.change(yearsInput, { target: { value: "15" } });
    //Assert
    expect(baseAmountInput.value).toBe("10000");
    expect(annualInterestInput.value).toBe("4");
    expect(yearsInput.value).toBe("15");
  });

  it("should not accept 0 as the base amount", () => {
    //Arrange
    const { baseAmountInput, btn, getByText } = setup();
    //Act
    fireEvent.submit(baseAmountInput, { target: { value: 0 } }); // simulates someone typing into the input box
    fireEvent.click(btn);
    //Assert
    expect(getByText("Base Amount must be greater than zero")).toBeTruthy();
  });

  it("should not accept 0 as the number of years", () => {
    //Arrange
    const { yearsInput, btn, getByText } = setup();
    //Act
    fireEvent.submit(yearsInput, { target: { value: 0 } }); // simulates someone typing into the input box
    fireEvent.click(btn);
    //Assert
    expect(getByText("Duration must be greater than zero")).toBeTruthy();
  });
});
