import React from 'react';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-testid="feedback-text">Olá pages FEEDBACK</div>
    );
  }
}

export default Feedback;
