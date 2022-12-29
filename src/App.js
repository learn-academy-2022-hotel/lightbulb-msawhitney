import React, { useState } from "react";
import "./App.css";
import LightSwitch from "./components/LightSwitch";

// const App = () => {

//   return (
//     <div className=Box>
//       <LightSwitch initialState="OFF" />
//     </div>
//   );
// };
const App = (props) => {

//   //Declare a variable called on and set its value to true
//    const on = true;

  return (
// //Render a div element within a class name, and a click event handler

//       //when the box is clicked ("onClick"), the function handleChange is called, so after clicking, the opposite of the current box state is returned
//     //A ternary operator is used
//     // the value of changeText is T or F. If it is T, the box shows white. If it is false, the box shows yellow
//     //also, if changeText is T, the box shows the word "off", if it is false, the box shows "on"
  <div className="container">
  <div className="box">
    <LightSwitch></LightSwitch></div>
    <div className="box">
    <LightSwitch></LightSwitch></div>
    <div className="box">
    <LightSwitch></LightSwitch></div>
    <div className="box">
    <LightSwitch></LightSwitch></div>
    <div className="box">
    <LightSwitch></LightSwitch></div>
    <div className="box">
    <LightSwitch></LightSwitch></div>
  </div>    
  );
}

export default App
