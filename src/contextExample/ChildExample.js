import React from "react";
import { useContext } from "react";
import { AppContext } from "./Context";

function ChildExample() {
  // use of data without any props
  const context = useContext(AppContext);
  return (
    <div style={{ paddingLeft: 20, backgroundColor: "skyblue" }}>
      <h4>Child Component</h4>
      <div style={{ paddingLeft: 20, backgroundColor: "lightgrey" }}>
        {context}
      </div>
    </div>
  );
}

export default ChildExample;
