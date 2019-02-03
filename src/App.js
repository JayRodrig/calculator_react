import React, { Component } from 'react';
import TopRow from './components/toprow';
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
      
          <div className='row'>
            <div className='col col-3 button'>7</div>
            <div className='col col-3 button'>8</div>
            <div className='col col-3 button'>9</div>
            <div className='col col-3 button orange'>x</div>
          </div>
      
          <div className='row'>
            <div className='col col-3 button'>4</div>
            <div className='col col-3 button'>5</div>
            <div className='col col-3 button'>6</div>
            <div className='col col-3 button orange'>-</div>
          </div>
      
          <div className='row'>
            <div className='col col-3 button'>1</div>
            <div className='col col-3 button'>2</div>
            <div className='col col-3 button'>3</div>
            <div className='col col-3 button orange'>+</div>
          </div>
      
          <div className='row'>
            <div className='col col-6 button'>0</div>
            <div className='col col button'>.</div>
            <div className='col col button orange'>=</div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
