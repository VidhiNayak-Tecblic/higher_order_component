

import React from "react";
import Hoc from "./Hoc";
function ONhover_increase(props) {
  return (
    <div style={{backgroundColor:'beige'}}>
      <h1>Login Page</h1>
      <h4>Counter</h4>
      <button onMouseOver={props.Increament}>{props.counter}</button>
    </div>
  );
}

export default Hoc(ONhover_increase);
