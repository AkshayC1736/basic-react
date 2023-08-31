import "./Style.css";
import customStyle from "./custom.module.css";
export default function Style() {
  return (
    <div>
      <h1 className="style_1">Style type 1</h1>
      <h1 style={{ color: "yellow", backgroundColor: "blue" }}>Style type 2</h1>
      <h1 className={customStyle.style_3}>Style type 3</h1>
    </div>
  );
}
