import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedbacks extends React.Component {
  render() {
    const { assertionsCorrect, playerScore } = this.props;
    const THREE = 3;

    return (
      <>
        <Header />
        <h1 data-testid="feedback-text">
          {assertionsCorrect >= THREE ? 'Mandou bem!' : 'Podia ser melhor...'}
        </h1>
        <h2 data-testid="feedback-total-score">{playerScore}</h2>
        <h2 data-testid="feedback-total-question">{assertionsCorrect}</h2>
        <Link to="/" data-testid="btn-play-again">Jogar novamente</Link>
      </>
    );
  }
}

Feedbacks.propTypes = {
  assertionsCorrect: PropTypes.number.isRequired,
  playerScore: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertionsCorrect: Number(state.playerReducer.assertions),
  playerScore: state.playerReducer.playerScore,
});

export default connect(mapStateToProps)(Feedbacks);
