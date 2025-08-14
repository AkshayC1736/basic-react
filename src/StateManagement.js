import { useEffect, useReducer } from "react";

function StateManagement() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }
  return (
    <div>
      Counter: {state.count}
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        decrement
      </button>
    </div>
  );
}

export default StateManagement;
