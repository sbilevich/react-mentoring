import React from 'react';
import './App.css';
import {Component} from "./components/component";
import {PureComponent} from "./components/pure-component";
import {FunctionalComponent} from "./components/functional-component";

function App() {
  return (
    <div className="App">
      <Component />
      <PureComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;
