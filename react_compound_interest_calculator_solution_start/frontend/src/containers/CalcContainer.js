import React, { Component } from "react";
import CalcForm from "../components/CalcForm";
import CalcResult from "../components/CalcResult";

class CalcContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultFormContent: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <>
        <CalcForm onSubmit={this.handleSubmit} />
        <CalcResult result={this.state.resultFormContent} />
      </>
    );
  }

  handleSubmit(data) {
    console.log(data);
    fetch("http://localhost:3000/api/results/compound", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(resolved =>
        this.setState({ resultFormContent: `£ ${resolved.toLocaleString()}` })
      );
  }
}

export default CalcContainer;

//
