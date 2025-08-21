import React from "react";
import { useContext } from "react";
import { AppContext, ThemeContext } from "./Context";

function ChildExample() {
  // use of data without any props
  const context = useContext(AppContext);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div
      style={{
        paddingLeft: 20,
        backgroundColor: darkMode ? "blue" : "skyblue",
      }}
    >
      <h4>Child Component</h4>
      <div style={{ paddingLeft: 20, backgroundColor: "lightgrey" }}>
        {context}
      </div>
      <div>
        <p>
          The current theme is <b>{darkMode ? "Dark" : "Light"}</b>
        </p>
        <button onClick={toggleDarkMode}>Toggle Theme in child</button>
      </div>
    </div>
  );
}

export default ChildExample;
