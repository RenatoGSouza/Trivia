import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
// import PropTypes from 'prop-types'

class Header extends Component {

  render() {
    const { playerName, playerGravatar, playerScore } = this.props;
    const hash = md5(playerGravatar).toString();
    return (
      <header>
        <img
          src={ `https://www.gravatar.com/avatar/${hash}` }
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

const mapStateToProps = (state) => ({
  playerName: state.playerReducer.playerName,
  playerImg: state.playerReducer.playerGravatar,
})

export default connect(mapStateToProps)(Header);
