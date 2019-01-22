import React from 'react';
import logo from '../assets/logo.svg';
import tree from '../assets/data-diagram.png'
import './App.css';

import Tree from './Tree';
import { data } from './Data';

const App = () => (
  <div className="app">
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <h1 className="App-title">Tree Algorithm</h1>
    </header>
    <p className="intro">
      The goal of this exercise is to write components that will serialize and deserialize a tree of data.
    </p>
    <p className="intro requirements">
      Requirements:
    </p>
    <ol className="intro requirements">
      <li>Populate a variable with the tree illustrated below</li>
      <li>Serialize the contents of that variable into a compact string</li>
      <li>Deserialize the compact string</li>
      <li>Render the results of both the serialization and deserialization</li>
    </ol>
    <p>
      <img className="tree-graphic" src={tree} alt="tree" />
    </p>
    <Tree data={data} />
  </div>
);

export default App;
