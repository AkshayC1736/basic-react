import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
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
      Count: {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update
      </button>
    </div>
  );
}

export default Counter;
