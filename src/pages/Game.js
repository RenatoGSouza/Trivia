import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { triviaPerguntas } from '../Services/api';
import Header from '../components/Header';
import { scoreAction } from '../actions';

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
      questao: 0,
    };
    this.api = this.api.bind(this);
    this.buttonEffect = this.buttonEffect.bind(this);
    this.adicionaPlacar = this.adicionaPlacar.bind(this);
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
      questao: 0,
    });
  }

  adicionaPlacar(button) {
    const dez = 10;
    const um = 1;
    const dois = 2;
    const tres = 3;
    const { currentCount, perguntas } = this.state;
    const { playerScore, score } = this.props;
    if (button.className === 'correct-answer') {
      perguntas.forEach((pergunta) => {
        if (pergunta.difficulty === 'easy') {
          (score(playerScore + (dez + (currentCount * um))));
        }
        if (pergunta.difficulty === 'medium') {
          (score(playerScore + (dez + (currentCount * dois))));
        }
        if (pergunta.difficulty === 'hard') {
          (score(playerScore + (dez + (currentCount * tres))));
        }
      });
    }
  }

  buttonEffect({ target }) {
    const buttonWrong = document.querySelectorAll('.wrong-answer');
    const buttonCorrect = document.querySelectorAll('.correct-answer');
    buttonWrong.forEach((button) => {
      button.style.border = '3px solid rgb(255, 0, 0)';
    });
    buttonCorrect.forEach((button) => {
      button.style.border = '3px solid rgb(6, 240, 15)';
    });
    clearInterval(this.intervalId);
    this.adicionaPlacar(target);
  }

  render() {
    const {
      perguntas,
      questao,
      currentCount,
      disableButton,
      disableCorrectButton,
    } = this.state;

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
                disabled={ disableButton }
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
              disabled={ disableCorrectButton }
              onClick={ this.buttonEffect }
            >
              { perguntas[questao].correct_answer }
            </button>
          </article>
          <p>
            Tempo restante:
            {currentCount}
          </p>
        </section>
      );
    }
    return null;
  }
}

Game.propTypes = {
  playerScore: PropTypes.number.isRequired,
  score: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  playerScore: state.playerReducer.playerScore,
});

const mapDispatchToProps = (dispatch) => ({
  score: (score) => dispatch(scoreAction(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
