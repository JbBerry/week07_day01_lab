import React from "react";

const CalcFormValidation = props => {
  let baseAmountError;
  if (props.formContents.baseAmount < 1) {
    baseAmountError = "Base Amount must be greater than zero";
  } else {
    baseAmountError = "";
  }
  let annualInterestError;
  if (props.formContents.annualInterest < 1) {
    annualInterestError = "Annual interest must be greater than zero";
  } else {
    annualInterestError = "";
  }
  let yearsError;
  if (props.formContents.years < 1) {
    yearsError = "Duration must be greater than zero";
  } else {
    yearsError = "";
  }

  return (
    <>
      <div>{baseAmountError}</div>
      <div>{annualInterestError}</div>
      <div>{yearsError}</div>
    </>
  );
};

export default CalcFormValidation;
