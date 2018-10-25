import React, { Component } from 'react';

class RunesContainer extends Component {
  render() {
    return (
      <div className="runeTable">

        <div className="runeRow">1 Rune Gold: 40 + {this.props.goldGiven} = {(this.props.goldGiven + 40)}</div>
        <div className="runeRow">2 Rune Gold: 80 + {this.props.goldGiven * 2} = {(this.props.goldGiven + 40) * 2}</div>
        <div className="runeRow">3 Rune Gold: 120 + {this.props.goldGiven * 3} = {(this.props.goldGiven + 40) * 3}</div>
        <div className="runeRow">4 Rune Gold: 160 + {this.props.goldGiven * 4} = {(this.props.goldGiven + 40) * 4}</div>
      </div>
    );
  }
}

export default RunesContainer;
