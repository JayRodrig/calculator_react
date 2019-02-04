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
      alert('Exceeded amount of characters.');
      return;
    }
    if (this.state.displayValue === '0') this.setState({displayValue: val});
    else this.setState({displayValue: this.state.displayValue + val});
  }

  updateOperations = operator => {
    if (operator === 'x') {
      this.setState({
        operation: 'x',
        waitingForNewValue: true,
        previousValue: this.state.displayValue,
        displayValue: '0',
      });
    }

    if (operator === '=') {
      const {previousValue, operation, displayValue} = this.state;
      const operationFuncs = {
        x: function(a, b) { return a * b },
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
          update={this.update} />
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
