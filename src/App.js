import React, { Component } from 'react';
import TopRow from './components/toprow';
import SecondRow from './components/secondrow';
import ThirdRow from './components/thirdrow';
import FourthRow from './components/fourthrow';
import FifthRow from './components/fifthrow';
import SixthRow from './components/sixthrow';
import './app.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForNewValue: false,
    }
  }

  update = val => {
    if (this.state.displayValue.length >= 9) {
      return;
    } else if (val === 'AC') {
      this.setState({displayValue: '0',});
    } else if (this.state.displayValue === '0') {
      this.setState({displayValue: val,});
    } else if (this.state.waitingForNewValue && this.state.displayValue === val) {
      this.setState({displayValue: val, waitingForNewValue: false,});
    } else if (this.state.waitingForNewValue && this.state.displayValue !== val) {
      this.setState({displayValue: val, waitingForNewValue: false,});
    } else { 
      this.setState({displayValue: this.state.displayValue + val,});
    }
  }

  updateOperations = operator => {
    if (operator === '+'){
      this.setState({
        operation: 'plus',
        waitingForNewValue: true,
        previousValue: this.state.displayValue,
      });
    } else if (operator === 'x') {
      this.setState({
        operation: 'multiplied',
        waitingForNewValue: true,
        previousValue: this.state.displayValue,
      });
    } else if (operator === '-') {
      this.setState({
        operation: 'minus',
        waitingForNewValue: true,
        previousValue: this.state.displayValue,
      });
    } else if (operator === '%') {
      this.setState({
        waitingForNewValue: false,
        previousValue: this.state.displayValue,
        displayValue: this.state.displayValue / 100,
      });
    } else if (operator === '±') {
      this.setState({
        waitingForNewValue: false,
        displayValue: this.state.displayValue * (-1),
      })
    } else if (operator === '÷') {
      this.setState({
        operation: 'divided',
        waitingForNewValue: true,
        previousValue: this.state.displayValue,
      });
    } else if (operator === '=') {
      const {previousValue, operation, displayValue} = this.state;
      const operationFuncs = {
        multiplied: function(a, b) { return parseFloat(a) * parseFloat(b) },
        plus: function(a, b) { return parseFloat(a) + parseFloat(b) },
        minus: function(a, b) { return a - b},
        divided: function(a, b) { return a / b},
      }
      this.setState({
        displayValue: operationFuncs[operation](previousValue, displayValue),
      });
    }
  }

  render() {
    return (
      <>
        <TopRow displayValue={this.state.displayValue}/>
        <div className='container'>
          <SecondRow update={this.update} updateOperations={this.updateOperations}/>
          <ThirdRow displayValue={this.state.displayValue} operation={this.state.operation} 
          update={this.update} updateOperations={this.updateOperations}/>
          <FourthRow displayValue={this.state.displayValue} operation={this.state.operation} 
          update={this.update} updateOperations={this.updateOperations} />
          <FifthRow displayValue={this.state.displayValue} operation={this.state.operation} 
          update={this.update} updateOperations={this.updateOperations}/>
          <SixthRow displayValue={this.state.displayValue} operation={this.state.operation} 
          update={this.update} updateOperations={this.updateOperations}/>
        </div>
      </>
    );
  }
}

export default App;
