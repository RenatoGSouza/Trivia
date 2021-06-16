import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Feedbacks extends React.Component {
  render() {
    const { assertionsCorrect } = this.props;
    const THREE = 3;

    return (
      <h1 data-testid="feedback-text">
        {assertionsCorrect >= THREE ? 'Mandou bem!' : 'Podia ser melhor...'}
      </h1>
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
