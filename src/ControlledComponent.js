import { useState } from "react";

function ControlledComponent() {
  let [value, setvalue] = useState("test");
  return (
    <div
      style={{
        borderColor: "red",
        border: "4px",
        padding: "10px",
        borderStyle: "solid",
        margin: "10px",
      }}
    >
      <h4>Controlled Component Example</h4>
      <div>A component Controlled by react state is Controlled Component</div>
      <h4>Value: {value}</h4>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setvalue(e.target.value);
        }}
      />
    </div>
  );
}

export default ControlledComponent;
