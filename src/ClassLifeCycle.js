import React from "react";
export default class ClassLifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Tom",
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Class LIfe Cycle</h1>
        <p>state Data:{this.state.name}</p>

        <button
          onClick={() => {
            this.setState({ name: "Jack" });
          }}
        >
          Change State Data
        </button>
        <h2>{this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          ADD
        </button>
      </div>
    );
  }
  componentDidMount() {
    console.log(
      "componentDidMount Called after HTML init (simliar to AfterviewInit)"
    );
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called when state/props are updated");
  }

  shouldComponentUpdate() {
    console.log(
      "shouldComponentUpdate Called to decide whether rendering is needed or not(this method needs to return a boolean flag)"
    );
    return true;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount Called (simlar to OnDestroy)");
  }
}
