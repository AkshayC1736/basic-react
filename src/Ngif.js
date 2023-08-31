import { useState } from "react";

export default function Ngif() {
  let [visible, setVisible] = useState(false);
  function show() {
    setVisible(true);
  }
  function hide() {
    setVisible(false);
  }

  return (
    <div>
      <h1> *ngIF Demo</h1>
      <br />
      <button onClick={show}>SHOW</button>
      <button onClick={hide}>HIDE</button>
      <br />
      <button onClick={() => setVisible(!visible)}>
        TOGGLE {visible ? "ON" : "OFF"}
      </button>
      {visible ? <div>visible content</div> : null}
    </div>
  );
}
