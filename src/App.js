import React, { Component } from "react";
import MapContainer from "./MapContainer";
import SearchBar from "./SearchBar";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <MapContainer />
      </div>
    );
  }
}

export default App;
