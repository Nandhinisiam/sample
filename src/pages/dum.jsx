import Welcome from "../components/Welcome";
import React, { useEffect } from "react";
import Login from "./Login";

function Dum() {
  const [count, setCount] = React.useState(0);
   const [count1, setCount1] = React.useState(0);
  // useEffect without dependency ! call when load time and any state Change
  React.useEffect(() => {
    console.log("useEffect without dependency" + count);
  });
  // useEffect with empty dependency! call when load time
  React.useEffect(()=>{
    console.log("useeffect with empty dependency"+ count);
  },[]);
  // useEffect with dependency! call when load time and mentioned state changes
  React.useEffect(() => {
    console.log("useEffect with dependency" + count);
  }, [count]);
  return (
    <div>
      <Welcome name="Darshan" />
      <Welcome name="Gayu" />
      <Welcome name="Harish" />
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        +
      </button>
      <span>{count}</span>
      <button className="btn btn-primary" onClick={() => setCount1(count1 + 1)}>
        +
      </button>
      <span>{count1}</span>
      <Login />
    </div>
  );
}

export default Dum;
