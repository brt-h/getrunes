import React, { Component } from 'react';
import Timer from './components/Timer.js';
import ButtonContainer from './components/ButtonContainer.js';
import RunesContainer from './components/RunesContainer.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      interval: null,
      seconds: 0,
      minutes: 0,
    }
  }

  tick(){
    let updatedTime = this.state.seconds + this.state.minutes * 60;
    updatedTime += 1;
    let newSeconds = updatedTime % 60;
    let newMinutes = Math.floor(updatedTime / 60);
    this.setState({
      seconds: newSeconds,
      minutes: newMinutes,
    });
  }

  startButtonHandle(){
    if(this.state.interval == null){
      let interval = setInterval(() => this.tick(), 1000);
      this.setState({
        interval: interval,
      });
    }
  }

  stopButtonHandle(){
    clearInterval(this.state.interval);
    this.setState({
      interval: null,
      seconds: 0,
      minutes: 0,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Title">Get Runes!</div>


        <Timer minutes={this.state.minutes} seconds={this.state.seconds}></Timer>

        <ButtonContainer handleClickStart={() => this.startButtonHandle()}
                         handleClickStop={() =>this.stopButtonHandle()}>
                         </ButtonContainer>

        <RunesContainer></RunesContainer>
      </div>
    );
  }
}

export default App;
