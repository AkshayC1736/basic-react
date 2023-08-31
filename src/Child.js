export default function Child(Props) {
  const childData = "Data from Child Component";
  return (
    <div>
      <h1>Child Component:{Props.name}</h1>
      <button
        onClick={() => {
          Props.output("name:" + Props.name + " and " + childData);
        }}
      >
        Pass data to Parent
      </button>
    </div>
  );
}
