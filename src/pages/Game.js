import React from 'react';
import { triviaPerguntas } from '../Services/api';
import Header from '../components/Header';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.timer = this.timer.bind(this);
    this.fiveSeconds = this.fiveSeconds.bind(this);
    this.timerCorrectAnswer = this.timerCorrectAnswer.bind(this);

    this.state = {
      perguntas: [],
      currentCount: 30,
      fiveSecCount: 5,
      disableButton: false,
      disableCorrectButton: false,
    };
    this.api = this.api.bind(this);
  }

  componentDidMount() {
    this.api();
    const MIL = 1000;
    this.intervalId = setInterval(this.timer, MIL);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fiveSeconds() {
    const MIL = 1000;
    this.intervalId = setInterval(this.timerCorrectAnswer, MIL);
  }

  timerCorrectAnswer() {
    const { fiveSecCount } = this.state;
    this.setState({ fiveSecCount: fiveSecCount - 1 });
    if (fiveSecCount === 0) {
      clearInterval(this.intervalId);
      this.setState({ disableCorrectButton: false });
    }
  }

  timer() {
    const { currentCount } = this.state;
    this.setState({
      currentCount: currentCount - 1,
    });
    if (currentCount <= 1) {
      clearInterval(this.intervalId);
      this.setState({ disableButton: true, disableCorrectButton: true });
      this.fiveSeconds();
    }
  }

  async api() {
    const perguntas = await triviaPerguntas();
    console.log(perguntas.results);
    this.setState({
      perguntas: perguntas.results,
    });
  }

  render() {
    const {
      perguntas,
      currentCount,
      disableButton,
      disableCorrectButton } = this.state;

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
                disabled={ disableButton }
              >
                { alternativas }
              </button>
            ))}
            <button
              type="button"
              className="correct-answer"
              data-testid="correct-answer"
              key={ correct }
              disabled={ disableCorrectButton }
            >
              { correct }
            </button>
            <hr />
          </article>
        ))}
        <p>
          Tempo restante:
          {currentCount}
        </p>
      </section>
    );
  }
}

export default Game;
