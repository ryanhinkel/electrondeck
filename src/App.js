import React from 'react';
import logo from './logo.svg';
import './App.css';

const { present, unPresent } = require('electron').remote.require('./present.js')

function testPresent () {
  console.log('hi')
  console.log(present)
  present()
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="App-link" onClick={ testPresent }>
          Present
        </button>
      </header>
    </div>
  );
}

export default App;
