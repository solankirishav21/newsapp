import './App.css';
import { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
         <News key="general" category = "general"/>
        {/* <Router> */}
          {/* <Routes> */}
          {/* </Routes>
       </Router> */}
      </div>
    )
  }
}
