import { useState } from "react";

export default function Form() {
  let [name, setName] = useState("ak");
  let [option, setOption] = useState("option3");
  let [terms, setTerms] = useState(true);
  function submitForm(e) {
    console.log(name, option, terms);
    e.preventDefault();
  }
  return (
    <div>
      <h1> FORM Demo</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={name}
          placeholder="enter here"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          <option value={"option1"}>option1</option>
          <option value={"option2"}>option2</option>
          <option value={"option3"}>option3</option>
        </select>
        <br />
        <span>Accept </span>
        <input
          checked={terms}
          onChange={(e) => setTerms(e.target.checked)}
          type="checkbox"
        />
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
