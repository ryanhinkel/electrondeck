import React from 'react';
import logo from './logo.svg';
import './App.css';
import { remote } from 'electron'
//const { present, unPresent } = window.require('electron').remote.require('./present')
//
function present() {}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="App-link" onClick={ present }>
          Present
        </button>
      </header>
    </div>
  );
}

export default App;
