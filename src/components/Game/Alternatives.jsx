import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Alternatives extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { state, buttonEffect } = this.props;
    const { perguntas, questao, disableButton, disableCorrectButton,
    } = state;
    return (
      <div className="alternativas">
        {perguntas[questao].incorrect_answers.map((alternativas, index) => (
          <button
            type="button"
            className="wrong-answer"
            data-testid={ `wrong-answer-${index}` }
            key={ alternativas }
            disabled={ disableButton }
            onClick={ buttonEffect }
          >
            { alternativas }
          </button>
        ))}
        <button
          type="button"
          className="correct-answer"
          data-testid="correct-answer"
          key={ perguntas[questao].correct }
          onClick={ buttonEffect }
          disabled={ disableCorrectButton }
        >
          { perguntas[questao].correct_answer }
        </button>
      </div>
    );
  }
}
Alternatives.propTypes = {
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  buttonEffect: PropTypes.func.isRequired,
};

export default Alternatives;
