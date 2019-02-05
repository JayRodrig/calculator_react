import React, { Component } from 'react';
import TopRow from './components/toprow';
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
      waitingForNewValue: false
    }
  }

  update = val => {
    if (this.state.displayValue.length >= 9) {
      return;
    }
    if (this.state.displayValue === '0') 
      this.setState({displayValue: val});
    else if (this.state.waitingForNewValue && this.state.displayValue === val) 
      this.setState({displayValue: val, waitingForNewValue: false,})
    else if (this.state.waitingForNewValue && this.state.displayValue !== val) 
      this.setState({displayValue: val, waitingForNewValue: false,})
    else 
      this.setState({displayValue: this.state.displayValue + val});
  }

  updateOperations = operator => {
    if (operator === 'x') {
      this.setState({
        operation: 'multiplied',
        waitingForNewValue: true,
        previousValue: this.state.displayValue,
      });
    }

    if (operator === '-') {
      this.setState({
        operation: 'minus',
        waitingForNewValue: true,
        previousValue: this.state.displayValue,
      });
    }

    else if (operator === '=') {
      const {previousValue, operation, displayValue} = this.state;
      const operationFuncs = {
        multiplied: function(a, b) { return a * b },
        plus: function(a, b) { return a + b },
        minus: function(a, b) { return a - b},
        divided: function(a, b) { return a / b},
      }
      this.setState({
        displayValue: operationFuncs[operation](previousValue, displayValue),
      })
    }
  }

  render() {
    return (
      <>
      <TopRow displayValue={this.state.displayValue}/>
      
        <div className='container'>
          <div className='row'>
            <div className='col col-3 button'>AC</div>
            <div className='col col-3 button'>%</div>
            <div className='col col-3 button'>±</div>
            <div className='col col-3 button orange'>÷</div>
          </div>
          <ThirdRow displayValue={this.state.displayValue} operation={this.state.operation} 
          update={this.update} updateOperations={this.updateOperations}/>
          <FourthRow displayValue={this.state.displayValue} operation={this.state.operation} 
          update={this.update} updateOperations={this.updateOperations} />
          <FifthRow displayValue={this.state.displayValue} operation={this.state.operation} 
          update={this.update} />
          <SixthRow displayValue={this.state.displayValue} operation={this.state.operation} 
          update={this.update} updateOperations={this.updateOperations}/>
        </div>
      </>
    );
  }
}

export default App;
