export default function Props(props) {
  console.log(props);
  return (
    <div>
      <h1> Props Demo</h1>
      <p>
        <div>name:{props.name}</div>
        <div>name:{props.email}</div>
      </p>
      <button onClick={props.fun}>CALL Function passed in props</button>
    </div>
  );
}
