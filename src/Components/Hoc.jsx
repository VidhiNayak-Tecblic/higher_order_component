//In this we are making common functionality of other component.
//and reuse this functionality by passing it
//a higher-order component is a function that takes a component and returns a new component.

import React, { useState } from "react";

const Hoc=(OriginalComponent)=> {


const ForCounter=() =>{
    //making counter
    const [counter, setCounter] = useState(0);
    const Increament = () => {
      setCounter(counter + 1);
    };


    return(<OriginalComponent counter={counter} Increament={Increament}/>)
  };

  return ForCounter
}

export default Hoc;
