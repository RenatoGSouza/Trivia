import React from 'react';
import { triviaPerguntas } from '../Services/api';
import Header from '../components/Header';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      perguntas: [],
      questao: 0,
    };
    this.api = this.api.bind(this);
    this.buttonEffect = this.buttonEffect.bind(this);
  }

  componentDidMount() {
    this.api();
  }

  async api() {
    const perguntas = await triviaPerguntas();
    console.log(perguntas.results);
    this.setState({
      perguntas: perguntas.results,
      questao: 0,
    });
  }

  buttonEffect() {
    const buttonWrong = document.querySelectorAll('.wrong-answer');
    const buttonCorrect = document.querySelectorAll('.correct-answer');
    buttonWrong.forEach((button) => {
      button.style.border = '3px solid rgb(255, 0, 0)';
    });
    buttonCorrect.forEach((button) => {
      button.style.border = '3px solid rgb(6, 240, 15)';
    });
  }

  render() {
    const { perguntas, questao } = this.state;
    if (perguntas.length !== 0) {
      return (
        <section className="sectionPerguntas">
          <Header />
          <article>
            <p data-testid="question-category">{ perguntas[questao].category }</p>
            <p data-testid="question-text">{ perguntas[questao].question }</p>
            {perguntas[questao].incorrect_answers.map((alternativas, index) => (
              <button
                type="button"
                className="wrong-answer"
                data-testid={ `wrong-answer-${index}` }
                key={ alternativas }
                onClick={ this.buttonEffect }
              >
                { alternativas }
              </button>
            ))}
            <button
              type="button"
              className="correct-answer"
              data-testid="correct-answer"
              key={ perguntas[questao].correct }
              onClick={ this.buttonEffect }
            >
              { perguntas[questao].correct_answer }

            </button>
          </article>
        </section>

      );
    }
    return null;
  }
}

export default Game;
