import React from 'react';
import Header from '../components/Header';

class Ranking extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <Header />
        <section data-testid="ranking-title">
          <p data-testid="feedback-total-score">Score</p>
        </section>
      </div>
    );
  }
}

export default Ranking;
