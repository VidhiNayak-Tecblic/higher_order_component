import React from "react";
import Hoc from "./Hoc";
function ONhover_increase(props) {
  return (
    <div style={{backgroundColor:'purple'}}>
      <h1>Signup Page</h1>
      <h4>Counter</h4>
      <button onClick={props.Increament}>{props.counter}</button>
    </div>
  );
}

export default Hoc(ONhover_increase);

