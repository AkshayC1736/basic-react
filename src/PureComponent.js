import React, { PureComponent } from "react";

export default class Pure extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    console.log("render called", this.state.count);
    return (
      <div>
        count:{this.state.count}
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          change
        </button>
      </div>
    );
  }
}
