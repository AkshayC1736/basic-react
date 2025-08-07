import React from "react";
export default class ClassComp extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "Initial state data",
    };
  }
  Clicked() {
    this.setState({ data: "Changed state data" });
  }
  render() {
    console.log("render called with props", this.props);
    return (
      <div>
        <h1> class component</h1>
        DATA: {this.state.data}
        <br />
        <button
          onClick={() => {
            this.Clicked();
          }}
        >
          click
        </button>
        <br />
      </div>
    );
  }
}
