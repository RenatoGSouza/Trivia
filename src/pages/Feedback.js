import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedbacks extends React.Component {
  render() {
    const { assertionsCorrect } = this.props;
    const THREE = 3;

    return (
      <>
        <Header />
        <h1 data-testid="feedback-text">
          {assertionsCorrect >= THREE ? 'Mandou bem!' : 'Podia ser melhor...'}
        </h1>
        <Link to="/">Jogar novamente</Link>
      </>
    );
  }
}

Feedbacks.propTypes = {
  assertionsCorrect: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertionsCorrect: Number(state.playerReducer.assertions),
});

export default connect(mapStateToProps)(Feedbacks);
