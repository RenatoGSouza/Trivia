import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="div-header">
        <Link to="/Ranking">
          <button
            type="button"
            className="btn-header"
            data-testid="btn-ranking"
          >
            Ver Ranking

          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            className="btn-header"
            data-testid="btn-go-home"
          >
            Home

          </button>
        </Link>
      </div>
    );
  }
}

export default ButtonHeader;
