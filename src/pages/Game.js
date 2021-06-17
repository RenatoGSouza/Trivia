import React from 'react';
import { triviaPerguntas } from '../Services/api';
import Header from '../components/Header';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      perguntas: [],
      questao: 0,
      hidden: 'hidden',
    };
    this.api = this.api.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentDidMount() {
    this.api();
  }

  async api() {
    const perguntas = await triviaPerguntas();
    this.setState({
      perguntas: perguntas.results,
      questao: 0,
    });
  }

  correctClick({ target }) {
    target.style.border = 'green 2px solid';
    const alternativas = document.querySelector('.wrong-answer');
    alternativas.disabled = true;
    document.querySelector('#btn-next').style.display = '';
  }

  incorrectClick({ target }) {
    target.style.border = 'red 2px solid';
    const alternativa = document.querySelector('.correct-answer');
    alternativa.disabled = true;
    document.querySelector('#btn-next').style.display = '';
  }

  nextQuestion() {
    this.setState((oldState) => ({ questao: oldState.questao + 1 }));
    document.querySelector('#btn-next').style.display = 'none';
  }

  btnNextQuestion() {
    return (
      <button
        type="button"
        data-testid="btn-next"
        id="btn-next"
        onClick={ this.nextQuestion }
      >
        Próxima
      </button>
    );
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
                onClick={ this.incorrectClick }
              >
                { alternativas }
              </button>
            ))}
            <button
              type="button"
              className="correct-answer"
              data-testid="correct-answer"
              onClick={ this.correctClick }
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
