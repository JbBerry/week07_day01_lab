import React, { Component } from "react";
import CalcFormValidation from "./CalcFormValidation";

class CalcForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseAmount: "",
      annualInterest: "",
      years: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBaseAmountChange = this.handleBaseAmountChange.bind(this);
    this.handleAnnualInterestChange = this.handleAnnualInterestChange.bind(
      this
    );
    this.handleYearsChange = this.handleYearsChange.bind(this);
  }

  handleBaseAmountChange(event) {
    this.setState({ baseAmount: event.target.value });
  }

  handleAnnualInterestChange(event) {
    this.setState({ annualInterest: event.target.value });
  }

  handleYearsChange(event) {
    this.setState({ years: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const baseAmount = this.state.baseAmount;
    const annualInterest = this.state.annualInterest;
    const years = this.state.years;
    if (baseAmount && annualInterest && years) {
      const newCalc = {
        baseAmount: Number(baseAmount),
        annualInterest: Number(annualInterest),
        calculationPeriod: Number(years)
      };
      this.props.onSubmit(newCalc);
    }
  }

  render() {
    return (
      <>
        <form className="ui inverted segment" onSubmit={this.handleSubmit}>
          <label htmlFor="base-amount">
            Invested amount
            <input
              aria-label="Invested Amount"
              className="ui inverted input"
              id="base-amount"
              type="number"
              value={this.state.baseAmount}
              placeholder="Base amount"
              onChange={this.handleBaseAmountChange}
            />
          </label>

          <label htmlFor="annual-interest">
            Annual interest
            <input
              aria-label="Annual Interest"
              className="ui inverted input"
              id="annual-interest"
              type="number"
              value={this.state.annualInterest}
              placeholder="Annual interest"
              onChange={this.handleAnnualInterestChange}
            />
          </label>

          <label htmlFor="years">
            Years to grow
            <input
              aria-label="Years to grow"
              className="ui inverted input"
              id="years"
              type="number"
              value={this.state.years}
              placeholder="Years"
              onChange={this.handleYearsChange}
            />
          </label>

          <input type="submit" value="Calculate" />
        </form>
        <CalcFormValidation formContents={this.state} />
      </>
    );
  }
}

export default CalcForm;
