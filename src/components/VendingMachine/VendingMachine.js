import React, {Component} from 'react';
import Message from "../Message/Message";
import { Link } from 'react-router-dom';
import './VendingMachine.css';
import vendingMachineImg from '../../images/VendingMachine.png';

class VendingMachine extends Component {
  render() {

    return(
      <div className="VendingMachine"
        style={{ backgroundImage: `url(${vendingMachineImg})` }}
      >
        <Message>
          <h3>hello i am a vending machine. what would you like to eat?</h3>
        </Message>
        <Message>
          <h2>
            <Link exact to='/chips'>
              Chips
            </Link>
          </h2>
          <h2>
            <Link exact to='/soda'>
              Soda
            </Link>
          </h2>
          <h2>
            <Link exact to='/sardines'>
              Sardines
            </Link>
          </h2>
        </Message>
      </div>
    );
  }
}

export default VendingMachine;