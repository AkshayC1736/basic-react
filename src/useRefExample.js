import { useRef, useState } from "react";

// when we use useState view is re-rendered but when we use useRef no re-rendering
//
function UseRefExample() {
  let countref = useRef(0); // useRef
  //let [countref, setCountref] = useState(0);

  function increment() {
    countref.current += 1; // useRef
    alert("Incremented but not re-rendered on UI " + countref.current); // useRef
    // setCountref(countref + 1);
  }
  //   alert("render called " + countref);
  return (
    <div>
      <h2>UseRefExample</h2>
      <div> useRef count: {countref.current}</div>
      {/* <div>useState count: {countref}</div> */}
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseRefExample;
