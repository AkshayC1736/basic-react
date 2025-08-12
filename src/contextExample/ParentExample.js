import React from "react";
import ChildExample from "./ChildExample";

function ParentExample() {
  return (
    <div style={{ paddingLeft: 20, backgroundColor: "yellow" }}>
      <h3>Parent Component</h3>
      <ChildExample />
    </div>
  );
}

export default ParentExample;
