import { useMemo, useState } from "react";
import { ThemeContext } from "./Context";

function ThemeWrapper({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // useMemo to memoize the value object so it only changes when `darkMode` changes
  const themeValue = useMemo(
    () => ({
      darkMode,
      toggleDarkMode: () => setDarkMode((prev) => !prev),
    }),
    [darkMode]
  );
  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
}

export default ThemeWrapper;
