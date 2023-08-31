import React from "react";
export default class ClassComp extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "hello",
    };
  }
  Clicked() {
    this.setState({ data: "Changed" });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1> class component</h1>
        DATA:{this.state.data}
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
