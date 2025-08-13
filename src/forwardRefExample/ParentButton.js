import { createRef } from "react";
import ChildInput from "./ChildInput";

function ParentButton() {
  const inputRef = createRef();

  function UpdateValue() {
    inputRef.current.value = 100;
    inputRef.current.style.color = "red";
  }
  return (
    <div style={{ paddingLeft: 20, backgroundColor: "yellow" }}>
      <h2>Parent Component</h2>
      <ChildInput ref={inputRef} />
      <button onClick={UpdateValue}>update</button>
    </div>
  );
}
export default ParentButton;
