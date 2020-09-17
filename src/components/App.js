import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import MainDiv from "./MainDiv";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <MainDiv />
      </div>
    );
  }
}

export default App;
