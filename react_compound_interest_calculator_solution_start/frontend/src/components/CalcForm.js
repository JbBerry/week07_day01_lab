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
          <aria-label for="base-amount">
            {"Invested Amount"}
            <input
              className="ui inverted input"
              id="base-amount"
              type="number"
              value={this.state.baseAmount}
              placeholder="Base amount"
              onChange={this.handleBaseAmountChange}
            />
          </aria-label>

          <aria-label for="annual-interest">
            {"Annual Interest"}
            <input
              className="ui inverted input"
              id="annual-interest"
              type="number"
              value={this.state.annualInterest}
              placeholder="Annual interest"
              onChange={this.handleAnnualInterestChange}
            />
          </aria-label>

          <aria-label for="years">
            {"Years to grow"}
            <input
              className="ui inverted input"
              id="years"
              type="number"
              value={this.state.years}
              placeholder="Years"
              onChange={this.handleYearsChange}
            />
          </aria-label>

          <input type="submit" value="Calculate" />
        </form>
        <CalcFormValidation formContents={this.state} />
      </>
    );
  }
}

export default CalcForm;
