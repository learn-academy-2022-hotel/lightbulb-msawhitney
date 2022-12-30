import React, { useState } from "react";
import "./App.css";
import LightSwitch from "./components/LightSwitch";


const App = () => {

  return (
//Render a div element with a class name container and div elements inside it with classname box

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
    <div className="box">
    <LightSwitch></LightSwitch></div>
    <div className="box">
    <LightSwitch></LightSwitch></div>
  </div>   
  );
}

export default App

