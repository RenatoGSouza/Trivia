import React, { Component } from 'react';
// import PropTypes from 'prop-types'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerGravatar: '',
      playerName: '',
      playerScore: 0,
    };
  }

  render() {
    const { playerGravatar, playerName, playerScore } = this.state;
    return (
      <header>
        <img
          src={ playerGravatar }
          alt="Avatar do jogador"
          data-testid="header-profile-picture"
          className="header-profile-picture"
        />
        <span
          data-testid="header-player-name"
          className="header-player-name"
        >
          { playerName }
        </span>
        <span
          data-testid="header-score"
          className="header-score"
        >
          { playerScore }
        </span>
      </header>
    );
  }
}

export default Header;
