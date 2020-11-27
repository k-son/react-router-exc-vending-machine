import React, {Component} from 'react';
import './VendingMachine.css';
import vendingMachineImg from '../../images/VendingMachine.png';

class VendingMachine extends Component {
  render() {

    return(
      <div className="VendingMachine"
        style={{ backgroundImage: `url(${vendingMachineImg})` }}
      >

      </div>
    );
  }
}

export default VendingMachine;