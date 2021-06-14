import React from 'react';
import { triviaPerguntas } from '../Services/api';
import Header from '../components/Header';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      perguntas: [],
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
    });
  }

  render() {
    const { perguntas } = this.state;
    return (
      <section className="sectionPerguntas">
        <Header />
        {perguntas.map(({ category,
          question,
          incorrect_answers: incorrect,
          correct_answer: correct,
        }) => (
          <article key={ category }>
            <p data-testid="question-category" key={ category }>{ category }</p>
            <p data-testid="question-text" key={ question }>{ question }</p>
            {incorrect.map((alternativas, index) => (
              <button
                type="button"
                className="wrong-answer"
                data-testid={ `wrong-answer-${index}` }
                key={ alternativas }
              >
                { alternativas }
              </button>
            ))}
            <button
              type="button"
              className="correct-answer"
              data-testid="correct-answer"
              key={ correct }
            >
              { correct }

            </button>
            <hr />
          </article>
        ))}
      </section>
    );
  }
}

export default Game;
