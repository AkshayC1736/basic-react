import { useState } from "react";

export function FunctionalComponent1() {
  function Clicked() {
    console.log("clicked");
  }
  return (
    <div>
      <button
        onClick={() => {
          Clicked();
        }}
      >
        Sample Btn
      </button>
      functional comp 1
    </div>
  );
}
export function FunctionalComponent2() {
  let data = "test";
  let [testData, setTestData] = useState(0);
  function UpdateData() {
    setTestData(++testData);
  }
  return (
    <div>
      data:{data}
      <br />
      testData:{testData}
      <br />
      <button onClick={UpdateData}>update Data</button>
      functional comp 2
      <br />
      <br />
    </div>
  );
}
