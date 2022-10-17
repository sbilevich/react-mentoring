import React from "react";
import "./App.css";
import { Component } from "./components/component";
import { PureComponent } from "./components/pure-component";
import { FunctionalComponent } from "./components/functional-component";
import { Counter } from "./components/counter";

function App() {
  return (
    <div className="App">
      <Component />
      <PureComponent />
      <FunctionalComponent />
      <Counter startValue={0} />
    </div>
  );
}

export default App;
