import { useMemo, useState } from "react";

function UseMemoHookExample() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount((prev) => prev + 1);
  }

  const expensiveCalculation = (num) => {
    console.log("Calculating...", num);
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result - 10000 * num;
  };

  const result = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>useMemo Hook Example</h2>
      <div> count: {count}</div>
      <div> result: {result}</div>
      <button onClick={Increment}>Increment</button>
    </div>
  );
}

export default UseMemoHookExample;
