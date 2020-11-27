import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VendingMachine from './components/VendingMachine/VendingMachine';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <VendingMachine />
    </div>
  );
}

export default App;
