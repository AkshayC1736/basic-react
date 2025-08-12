import React, { useState, useEffect } from "react";

function ChildComponent() {
  useEffect(() => {
    console.log("Child: Mounted");

    return () => {
      console.log("Child: Unmounted");
    };
  }, []);

  return <h4>I am the Child Component</h4>;
}

function Hooks1() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Child
      </button>

      {show && <ChildComponent />}
    </div>
  );
}

export default Hooks1;
