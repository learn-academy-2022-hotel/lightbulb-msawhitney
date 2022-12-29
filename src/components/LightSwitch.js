import React, { useState } from "react"

const LightSwitch = (props) => {

  //Declare a variable for state called changeText
  //Set it's initial value to true
  let [changeText, setChangeText] = useState(props.initialState);
  //create a function called handleChange that toggles the value of changeText
  const handleChange = () => {
    return setChangeText(!changeText);
  };
 
    return (<div className={`box ${changeText ? "white" : "yellow"}`}
    onClick={() => handleChange()}
    >
      {changeText ? "OFF" : "ON"}

     </div>);
 
//   return (

//       <div className="box" style={style} onClick={toggleState}>
//         {state}
//       </div>

//   );
};

export default LightSwitch;
