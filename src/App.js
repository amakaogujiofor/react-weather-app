import "./App.css";
import React from "react";
import Search from "./Search";
import Location from "./Location";
import Temperature from "./Temperature";

function App() {
  return (
    <div className="App">
      <Search />
      <Location />
      <Temperature />
    </div>
  );
}

export default App;
