import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div data-testid="feedback-text">
          <span>Olá pages FEEDBACK</span>
          <Link to="/">Voltar</Link>
        </div>
      </div>
    );
  }
}

export default Feedback;
