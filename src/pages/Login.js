import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import triviaAPI from '../Services/api';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validForm: true,
      redirect: false,
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.setState({
      redirect: true,
    });
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
    const { validForm, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/configs" />;
    }

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
        <button type="submit" data-testid="btn-play" disabled={ validForm }>
          Jogar
        </button>
        <button
          type="button"
          data-testid="btn-settings"
          onClick={ () => this.redirect() }
        >
          Configurações
        </button>
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
