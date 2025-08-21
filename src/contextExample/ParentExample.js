import React, { useContext } from "react";
import ChildExample from "./ChildExample";
import { ThemeContext } from "./Context";
import usetheme from "./useTheme";

function ParentExample() {
  const { darkMode, toggleDarkMode } = usetheme();
  return (
    <div style={{ paddingLeft: 20, backgroundColor: "yellow" }}>
      <h3>Parent Component</h3>
      <button onClick={toggleDarkMode}>Toggle Theme in parent</button>
      <ChildExample />
    </div>
  );
}

export default ParentExample;
