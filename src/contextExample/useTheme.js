import { useContext } from "react";
import { ThemeContext } from "./Context";

function usetheme() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useContext(ThemeContext);
}
export default usetheme;
