import React, { useState } from "react"
//The `useState` hook will create a piece of state called `changeText` that represents the current state of the light switch.

//Create a function called LightSwitch
const LightSwitch = () => {

//when the box is clicked ("onClick"), the function handleChange is called, so after clicking, the opposite of the current box state is returned

  let [changeText, setChangeText] = useState(true);
  const handleChange = () => {
    return setChangeText(!changeText);
  };
//A ternary operator is used to determine the value of changeText (T or F)
//If it is T, the box shows white. If it is false, the box shows yellow
//also, if changeText is T, the box shows the word "off", if it is false, the box shows "on"


  return (
    
    <div className={`box ${changeText ? "white" : "yellow"}`}
    onClick={() => handleChange()}>
    
    
      {changeText ? "OFF" : "ON"}

     </div>
      
  );
}

export default LightSwitch
