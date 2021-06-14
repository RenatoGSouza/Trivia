import React from 'react';
import { triviaPerguntas } from '../Services/api';

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
      <section>
        {perguntas.map(({ category, question }) => (
          <article key={ category }>
            <p data-testid="question-category" key={ category }>{ category }</p>
            <p data-testid="question-question-text" key={ question }>{ question }</p>
          </article>
        ))}
      </section>
    );
  }
}

export default Game;
