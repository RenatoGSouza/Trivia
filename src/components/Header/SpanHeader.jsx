import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SpanHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { playerName, playerScore, playerAssertions } = this.props;
    return (
      <div className="div-header div-header-text">
        <h3
          data-testid="header-player-name"
          className="header-player-name div-header-text"
        >
          { playerName }
        </h3>
        <p>
          Sua pontuação é:
          <span
            data-testid="header-score"
            className="header-score div-header-text"
          >
            {playerScore}
          </span>
        </p>
        <p
          className="header-assertions div-header-text"
        >
          { `Número de acertos atual: ${playerAssertions}` }
        </p>
      </div>
    );
  }
}

SpanHeader.propTypes = {
  playerName: PropTypes.string.isRequired,
  playerScore: PropTypes.number.isRequired,
  playerAssertions: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  playerName: state.playerReducer.playerName,
  playerImg: state.playerReducer.playerGravatar,
  playerScore: state.playerReducer.playerScore,
  playerAssertions: state.playerReducer.assertions,
});

export default connect(mapStateToProps)(SpanHeader);
