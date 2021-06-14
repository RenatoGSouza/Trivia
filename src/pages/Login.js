import React from 'react';
import { Link } from 'react-router-dom';
import { triviaAPI } from '../Services/api';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validForm: true,
    };
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail(email) {
    const nameInput = document.querySelector('#name').value;
    const re = /\S+@\S+\.\S+/;
    if ((re.test(email)) && (nameInput.length > 0)) {
      this.setState({
        validForm: false,
      });
    }
  }

  async clickBtnJogar() {
    const { token } = await triviaAPI();
    localStorage.setItem('token', token);
  }

  render() {
    const { validForm } = this.state;
    return (
      <form>
        <label htmlFor="name">
          NAME
          <input
            type="text"
            data-testid="input-player-name"
            id="name"
            onChange={ this.validateEmail }
          />
        </label>
        <label htmlFor="email">
          EMAIL
          <input
            type="text"
            data-testid="input-gravatar-email"
            id="email"
            onChange={ ({ target: { value } }) => this.validateEmail(value) }
          />
        </label>
        <Link to="/jogar">
          <button
            type="submit"
            data-testid="btn-play"
            disabled={ validForm }
            onClick={ this.clickBtnJogar }
          >
            Jogar
          </button>
        </Link>
      </form>
    );
  }
}

export default Login;
