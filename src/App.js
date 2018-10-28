import React, { Component } from 'react';
import Timer from './components/Timer.js';
import ButtonContainer from './components/ButtonContainer.js';
import RunesContainer from './components/RunesContainer.js';
import SoundButtonContainer from './components/SoundButtonContainer.js';
import {Howl, Howler} from 'howler';
import soundfile from './roons_short.mp3';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      started: false,
      interval: null,
      seconds: 38,
      minutes: 4,
      alertRunes: false,
      goldGiven: 0,
      sounds: [],
      volume: 0.5,
      mute: false,
    }
  }
  componentDidMount() {
    let roons_sound = new Howl({
      src: [soundfile]
    });
    this.setState({
        sounds:[roons_sound]
    })

  }

  tick(){
    if(this.state.started) {
      let currentTime = this.state.seconds + this.state.minutes * 60;
      let updatedTime = currentTime + 1;
      let newSeconds = updatedTime % 60;
      let newMinutes = Math.floor(updatedTime / 60);
      this.setState({
        seconds: newSeconds,
        minutes: newMinutes,
      });
      if(updatedTime % 300 === 0){
        let goldGiven = 2 * (this.state.minutes + 5);
        this.setState({
          goldGiven: goldGiven,
          alertRunes: false,
        })
      }
      if((updatedTime + 20) % 300 === 0){
        this.state.sounds[0].play();
        this.setState({
          alertRunes: true,
        })
      }
    }
  }

  startButtonHandle(){
    if(this.state.interval == null){
      let interval = setInterval(() => this.tick(), 1000);
      this.setState({
        started: true,
        interval: interval,
      });
    }
    else {
      this.setState({
        started: true,
      });
    }
  }

  stopButtonHandle(){
    clearInterval(this.state.interval);
    this.setState({
      interval: null,
      seconds: 0,
      minutes: 0,
      alertRunes: false,
      goldGiven: 0,
      started: false,
    });
  }

  pauseButtonHandle(){
    this.setState({
      started: false,
    });
  }

  handlePlus() {
    console.log("plus")
    let updatedVol = this.state.volume + 0.1;
    if(updatedVol > 1) {
      updatedVol = 1;
    }
    this.setState({
      volume: updatedVol,
    });
    Howler.volume(updatedVol)
  }

  handleMinus() {
    console.log("minus")
    let updatedVol = this.state.volume - 0.1;
    if(updatedVol < 0) {
      updatedVol = 0;
    }
    Howler.volume(updatedVol)
    this.setState({
      volume: updatedVol,
    });
  }

  handleMute() {
    console.log("mute")
    if(this.state.mute) {
      Howler.mute(false);
      this.setState({
        mute: false,
      });
    } else {
      Howler.mute(true);
      this.setState({
        mute: true,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="mainContainer">
          <div className="Title">
            <span style={{color: '#474b52'}}>GET</span> RUNES!
          </div>

          <Timer alert={this.state.alertRunes} minutes={this.state.minutes} seconds={this.state.seconds}></Timer>

          <ButtonContainer started={this.state.started}
                           handleClickStart={() => this.startButtonHandle()}
                           handleClickStop={() =>this.stopButtonHandle()}
                           handleClickPause={() =>this.pauseButtonHandle()}>
                           </ButtonContainer>

          <SoundButtonContainer
          handlePlus={() => this.handlePlus()}
          handleMinus={()=> this.handleMinus()}
          handleMute={() => this.handleMute()}
          vol={this.state.volume}
          mute={this.state.mute}></SoundButtonContainer>

          <RunesContainer goldGiven={this.state.goldGiven}></RunesContainer>
        </div>
      </div>
    );
  }
}

export default App;
