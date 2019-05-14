import React from "react";
import CalcContainer from "../containers/CalcContainer";
import { render, fireEvent, cleanup } from "react-testing-library";

afterEach(cleanup);

describe("CalcResult", () => {
  it("displays a result with the £ sign when the Calculate button is clicked", async () => {
    const { getByText, getByLabelText } = render(<CalcContainer />); // Is this the right one to render??
    const btn = getByText("Calculate");
    const baseAmountInput = getByLabelText("Invested Amount");
    const annualInterestInput = getByLabelText("Annual Interest");
    const yearsInput = getByLabelText("Years to grow");

    //Act
    fireEvent.change(baseAmountInput, { target: { value: 100000 } });
    fireEvent.change(annualInterestInput, { target: { value: 6 } });
    fireEvent.change(yearsInput, { target: { value: 10 } });

    fireEvent.click(btn);

    // Assert
    await (() => getByText("£181,939.67")); // Fix this
  });
});
