import React, { Component } from 'react';
import Timer from './components/Timer.js';
import Title from './components/Title.js';
import ButtonContainer from './components/ButtonContainer.js';
import RunesContainer from './components/RunesContainer.js';
import SoundButtonContainer from './components/SoundButtonContainer.js';
import {Howl, Howler} from 'howler';
import './App.css';

import BulldogAvatar from './images/bulldog.jpg';
import BulldogRoons1 from './sounds/roons_short.mp3';
import BulldogRoons2 from './sounds/love_of_god.mp3';
import BulldogRoons3 from './sounds/get_the_runes_bulldog.mp3';

import SingsingAvatar from './images/singsing.png';
import SingsingRoons from './sounds/sing_bounty_runes.mp3';

import PudgeAvatar from './images/pudge_avatar.png';
import PudgeRoons from './sounds/Pud_arc_bounty_01.mp3';

import KunkkaAvatar from './images/Avatar_kunkka.png';
import KunkkaRoons from './sounds/Kunk_bounty_02.mp3';

let helperFunc = function(howl,text="",imageURL) {
  return [howl,text,imageURL];
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      started: false,
      interval: null,
      seconds: 28,
      minutes: 4,
      alertRunes: false,
      goldGiven: 0,
      sounds: [],
      volume: 0.5,
      mute: false,
      avatar: "",
      textbubble: "",
      prevIndex: null,
    }
  }
  componentDidMount() {
    let BulldogRoon1 = new Howl({
      src: [BulldogRoons1]
    });
    let BulldogRoon2 = new Howl({
      src: [BulldogRoons2]
    });
    let BulldogRoon3 = new Howl({
      src: [BulldogRoons3]
    });
    let PudgeRoon1 = new Howl({
      src: [PudgeRoons]
    });
    let KunkkaRoon1 = new Howl({
      src: [KunkkaRoons]
    });
    let SingsingRoon1 = new Howl({
      src: [SingsingRoons]
    });

    let BulldogSounds1 = helperFunc(BulldogRoon1,'ROOONS!',BulldogAvatar);
    let BulldogSounds2 = helperFunc(BulldogRoon2,'Get the runes get the runes for the love of God!',BulldogAvatar);
    let BulldogSounds3 = helperFunc(BulldogRoon3,'Get the Roons!',BulldogAvatar);
    let PudgeSounds = helperFunc(PudgeRoon1,'Bounty!',PudgeAvatar);
    let KunkkaSounds = helperFunc(KunkkaRoon1,'Bounty!',KunkkaAvatar);
    let SingsingSounds = helperFunc(SingsingRoon1,'Bounty Runes!',SingsingAvatar);

    let newSoundArr = [];
    newSoundArr.push(BulldogSounds1);
    newSoundArr.push(BulldogSounds2);
    newSoundArr.push(BulldogSounds3);
    newSoundArr.push(PudgeSounds);
    newSoundArr.push(KunkkaSounds);
    newSoundArr.push(SingsingSounds);

    this.setState({
        sounds: newSoundArr,
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
      if((updatedTime + 30) % 300 === 0 || (updatedTime + 10) % 300 === 0){
        let randomIndex = Math.floor(Math.random()*(this.state.sounds.length));
        while(randomIndex === this.state.prevIndex) {
          randomIndex = Math.floor(Math.random()*(this.state.sounds.length));
        }
        let pickedHowl = this.state.sounds[randomIndex][0];
        let pickedText = this.state.sounds[randomIndex][1];
        let pickedImage = this.state.sounds[randomIndex][2];
        this.setState({
          alertRunes: true,
          avatar: pickedImage,
          textbubble: pickedText,
          prevIndex: randomIndex,
        });
        pickedHowl.play();
      }
    }
  }

  startButtonHandle(){
    if(this.state.interval == null){
      let instaStart = this.state.seconds + 1;
      this.setState({
        seconds: instaStart,
      });
      let interval = setInterval(() => this.tick(), 10);
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
          <Title alert={this.state.alertRunes} avatar={this.state.avatar} textbubble={this.state.textbubble}></Title>

          <Timer alert={this.state.alertRunes} minutes={this.state.minutes} seconds={this.state.seconds}></Timer>

          <ButtonContainer started={this.state.started}
                           vol={this.state.volume}
                           mute={this.state.mute}
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
