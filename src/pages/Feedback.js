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
      <div data-testid="feedback-text">
        <Header />
        <Link to="/">Jogar novamente</Link>
      </div>
    );
  }
}

export default Feedback;
