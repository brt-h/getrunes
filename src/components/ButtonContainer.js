import React, { Component } from 'react';

class ButtonContainer extends Component {
  render() {
    let button;
    if (this.props.started) {
      button = <div className="Button PauseB" onClick={this.props.handleClickPause}>
      <img className="twitchIco" src={"https://static-cdn.jtvnw.net/emoticons/v1/65/1.0"} alt="FrankerZ"/>
         Pause
      </div>;
    } else {
      button = <div className="Button StartB" onClick={this.props.handleClickStart}>
      <img className="twitchIco" src={"https://static-cdn.jtvnw.net/emoticons/v1/81248/1.0"} alt="OSFrog"/>
         Start
      </div>;
    }
    return (
      <div className="ButtonContainer">
        {button}
        <div className="Button StopB" onClick={this.props.handleClickStop}>
        <img className="twitchIco" src={"https://static-cdn.jtvnw.net/emoticons/v1/22639/1.0"} alt="BabyRage"/>
          Stop
        </div>
      </div>
    );
  }
}

export default ButtonContainer;
