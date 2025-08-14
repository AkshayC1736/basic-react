function Wrapper(props) {
  return (
    <div>
      <h2>Wrapper Component</h2>
      <h5>below components passed as props</h5>
      <div
        style={{
          borderColor: "red",
          border: "4px",
          padding: "10px",
          borderStyle: "solid",
          margin: "10px",
        }}
      >
        <props.counter />
        <props.controlled />
      </div>
    </div>
  );
}

export default Wrapper;
