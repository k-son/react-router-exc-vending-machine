import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import VendingMachine from './components/VendingMachine/VendingMachine';
import Chips from "./components/Chips/Chips";
import Sardines from "./components/Sardines/Sardines";
import Soda from "./components/Soda/Soda";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={VendingMachine} />
        <Route exact path="/chips" component={Chips} />
        <Route exact path="/soda" component={Soda} />
        <Route exact path="/sardines" component={Sardines} />
      </Switch>
    </div>
  );
}

export default App;
