import React from 'react';
import './App.css';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import {  Switch } from "react-router";
//import TransferCreditPage from './src/pages/TransferCreditPage';



import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;

/*
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" Component={TransferCreditPage}>
          </Route>
          </Routes>
      </div>
    </Router>
  );
}
*/