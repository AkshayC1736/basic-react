import React, { useState } from "react";

export default function Hooks() {
  let [data, setData] = useState(0);
  let [data1, setData1] = useState(10);
  //let [data3, setData3] = useState(50);

  //useEffect can be used either in React function component or a custom React Hook function
  React.useEffect(() => {
    console.log("hook called for data");
    //called specifically for data and not called when data1 is updated
  }, [data]);

  React.useEffect(() => {
    console.log("hook called for data1");

    //called specifically for data1 and not called when data is updated

    //below code is not allowed
    // React.useEffect(() => {
    //   console.log("nested hook");
    // });
  }, [data1]);

  return (
    <div>
      <p>data:{data}</p>
      <p>data1:{data1}</p>
      <button
        onClick={() => {
          setData(++data);
        }}
      >
        uodate data
      </button>
      <button
        onClick={() => {
          setData1(data1 + 10);
        }}
      >
        uodate data1
      </button>
    </div>
  );
}
