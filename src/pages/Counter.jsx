import React from "react";

function Counter() {
  // let count = 0;
  const [count,setCount] = React.useState(0)

  const increment = () => {
    // count = count + 1;
    setCount(count + 1);
    console.log(count);
  };
  const decrement = () => {
    // count = count - 1;
    setCount(count -1);
    console.log(count);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <button onClick={() => increment()}>+</button>
      <span style={{ color: "white" , fontSize: '50px'}}>{count}</span>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
}
export default Counter;
