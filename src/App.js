import "./App.css";

import {
  FunctionalComponent1,
  FunctionalComponent2,
} from "./FunctionalComponents";
import ClassComp from "./ClassComp";
import Props from "./Props";
import Ngif from "./Ngif";
import Form from "./Form";
import Hooks from "./Hooks";
import { useState } from "react";
import ClassLifeCycle from "./ClassLifeCycle";
import Style from "./Style";
import Arr from "./Array";
import Child from "./Child";
import Pure from "./PureComponent";
import Hooks1 from "./Hooks1";
import ParentExample from "./contextExample/ParentExample";
import { AppContext } from "./contextExample/Context";
function App() {
  let [selectedView, setSelectedView] = useState("1");

  function outputFromChild(data) {
    alert(data);
  }

  function func() {
    alert("hello from App");
  }
  function changeView(selectedView) {
    switch (selectedView) {
      case "1":
        setSelectedView("1");
        break;
      case "2":
        setSelectedView("2");
        break;
      case "3":
        setSelectedView("3");
        break;
      case "4":
        setSelectedView("4");
        break;
      case "5":
        setSelectedView("5");
        break;
      case "6":
        setSelectedView("6");
        break;
      case "7":
        setSelectedView("7");
        break;
      case "8":
        setSelectedView("8");
        break;
      case "9":
        setSelectedView("9");
        break;
      case "10":
        setSelectedView("10");
        break;
      case "11":
        setSelectedView("11");
        break;
      case "12":
        setSelectedView("12");
        break;
      case "13":
        setSelectedView("13");
        break;
      default:
        setSelectedView("1");
    }
  }
  return (
    <div className="App">
      <div className="menu">
        <button onClick={() => changeView("1")}>Class Component</button>
        <button onClick={() => changeView("2")}>Functional Component 1</button>
        <button onClick={() => changeView("3")}>Functional Component 2</button>
        <button onClick={() => changeView("4")}>Props Demo(@Input())</button>
        <button onClick={() => changeView("11")}>
          child to parent data transfer(@Output)
        </button>
        <button onClick={() => changeView("5")}>hide/show</button>
        <button onClick={() => changeView("6")}>Form</button>
        <button onClick={() => changeView("7")}>
          Class Component Life Cycle
        </button>
        <button onClick={() => changeView("8")}>Hooks</button>
        <button onClick={() => changeView("9")}>Styles</button>
        <button onClick={() => changeView("10")}>Arrays</button>
        <button onClick={() => changeView("12")}>Pure Component</button>
        <button onClick={() => changeView("13")}>Context Hook Example</button>
      </div>
      <div className="content">
        {selectedView === "1" ? <ClassComp name={"sample-prop"} /> : null}

        {selectedView === "2" ? <FunctionalComponent1 /> : null}

        {selectedView === "3" ? <FunctionalComponent2 /> : null}

        {selectedView === "4" ? (
          <Props fun={func} name={"ak"} email="ak@test.com" />
        ) : null}

        {selectedView === "5" ? <Ngif /> : null}

        {selectedView === "6" ? <Form /> : null}

        {selectedView === "7" ? <ClassLifeCycle /> : null}
        {selectedView === "8" ? (
          <div>
            <h1>Hooks in react</h1>
            <div>
              <h2> Example 1:</h2>
              <Hooks />
            </div>
            <br />
            <div>
              <h2> Example 2:</h2>
              <Hooks1 />
            </div>
          </div>
        ) : null}
        {selectedView === "9" ? <Style /> : null}
        {selectedView === "10" ? <Arr /> : null}
        {selectedView === "11" ? (
          <Child name={"Tom"} output={outputFromChild} />
        ) : null}
        {selectedView === "12" ? <Pure /> : null}
        {selectedView === "13" ? (
          <AppContext.Provider value="test-context-data">
            <ParentExample />
          </AppContext.Provider>
        ) : null}
      </div>
    </div>
  );
}

export default App;
