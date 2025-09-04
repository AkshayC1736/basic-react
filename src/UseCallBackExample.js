import React, { useCallback, useEffect, useRef, useState } from "react";

export default function UseCallBackExample() {
  const [count, setCount] = useState(0);

  const prevNormalRef = useRef();
  const prevMemoRef = useRef();

  console.log("parent rendered");
  const increment = useCallback(() => {
    console.log("increment rendered");
    setCount((prev) => prev + 1);
  }, []); // No dependency, so function won't change

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // empty dependency => function kabhi change nahi hoga

  // Normal Function (har render pe new)
  const normalFn = () => {
    console.log("Normal Function called");
  };

  //  Memoized Function using useCallback
  const memoFn = useCallback(() => {
    console.log("Memoized Function called");
  }, []);

  useEffect(() => {
    console.log(
      "Is normalFn same as previous?",
      prevNormalRef.current === normalFn
    );
    console.log("Is memoFn same as previous?", prevMemoRef.current === memoFn);

    prevNormalRef.current = normalFn;
    prevMemoRef.current = memoFn;
  });

  return (
    <div>
      <h1>{count}</h1>
      <Child onClick={increment} />
    </div>
  );
}

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Increment</button>;
});

// function Child({ onClick }) {
//     console.log("Child rendered");
//     return <button onClick={onClick}>Click Me</button>;
//   }
