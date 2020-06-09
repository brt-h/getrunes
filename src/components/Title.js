import React, { Component } from 'react';


class Title extends Component {
  render() {
    let textbubblepop;
    let titleClass;
    if(this.props.alert) {
      textbubblepop = "Show animated bounceIn";
      titleClass = "Hidden";
    }
    else {
      textbubblepop = "Hidden";
      titleClass = "Title animated tada";
    }
    return (
      <div className="TitleContainer">
        <div className={titleClass}>
          <span style={{color: '#474b52'}}>GET</span> RUNES!
        </div>
        <div className={textbubblepop}>
          <div className="TextBubble">{this.props.textbubble}</div>
          <img className="Avatar" src={this.props.avatar} alt=""/>
        </div>
      </div>
    );
  }
}

export default Title;
