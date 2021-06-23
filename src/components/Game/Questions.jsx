import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { questao, perguntas } = this.props;
    return (
      <div>
        <p
          className="question"
          data-testid="question-category"
        >
          { perguntas[questao].category }

        </p>
        <p
          className="question"
          data-testid="question-text"
        >
          { perguntas[questao].question }

        </p>
      </div>
    );
  }
}

Questions.propTypes = {
  questao: PropTypes.number.isRequired,
  perguntas: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Questions;
