export default function Arr() {
  const students = [
    { name: "A", age: 22 },
    { name: "B", age: 28 },
    { name: "C", age: 24 },
  ];

  return (
    // key is used by virtual DOM
    <div>
      <h1>Arrays</h1>
      {students.map((data, index) => (
        <div key={index}>
          <div>Name:{data.name}</div>
          <div>Age:{data.age}</div>
          <br />
        </div>
      ))}
    </div>
  );
}
