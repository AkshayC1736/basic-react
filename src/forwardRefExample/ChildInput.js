import { forwardRef } from "react";

function ChildInput(props, propRef) {
  return (
    <div style={{ paddingLeft: 20, backgroundColor: "skyblue" }}>
      <h2>Child Component</h2>
      <input style={{ marginBottom: 20 }} type="text" ref={propRef} />
    </div>
  );
}
export default forwardRef(ChildInput);
