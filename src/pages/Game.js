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

  correctClick({ target }) {
    target.style.border = 'green 2px solid';
    const alternativas = document.querySelector('.wrong-answer');
    alternativas.disabled = true;
  }

  incorrectClick({ target }) {
    target.style.border = 'red 2px solid';
    const alternativa = document.querySelector('.correct-answer');
    alternativa.disabled = true;
  }

  render() {
    const { perguntas, questao } = this.state;
    if (perguntas.length !== 0) {
      return (
        <section className="sectionPerguntas">
          <Header />
          {/* {console.log(perguntas[questao])}
          {perguntas.map(({ category,
          question,
          incorrect_answers: incorrect,
          correct_answer: correct,
        }) => ( */}
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
            {/* <hr />
        ))} */}
          </article>
        </section>

      );
    }
    return null;
  }
}

export default Game;
