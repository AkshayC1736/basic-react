import React, { memo, useMemo, useState } from "react";

export const UseMemoExample1Child = memo((props) => {
  console.log("child rendered");
  return <div>useMemoExample1Child={props.value.name}</div>;
});

export default function UseMemoExample1() {
  const [num, setNum] = useState(4);
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({ name: "ak", age: 12 });
  //const obj = useMemo(() => ({ name: "ak", age: 12 }), []);
  console.log("parent rendered");

  function calcFact(num) {
    let fact = 1;
    console.log("calcFact got created");
    for (let i = num; i >= 1; i--) {
      fact = fact * i;
    }
    return fact;
  }

  //   function changeName() {
  //     obj.name = "uuu";
  //   }

  let result = useMemo(() => calcFact(num), [num]);

  //user = useMemo(() => {}, [num]);
  //let result = calcFact(num);
  return (
    <>
      <div>Fact={result}</div>
      <UseMemoExample1Child value={obj} />
      count:{count}
      <button onClick={() => setCount((c) => c + 1)}>INCREMENT</button>
      <button onClick={() => setObj((o) => ({ ...o, name: "test" }))}>
        change obj
      </button>
      {/* <button onClick={() => changeName()}>change obj</button> */}
    </>
  );
}
