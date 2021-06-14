import React from 'react';
import triviaAPI from '../Services/api';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validForm: true,
    };
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail(email) {
    // const nameInput = document.querySelector('#name').innerHTML;
    const re = /\S+@\S+\.\S+/;
    console.log(re.test(email));
    if (re.test(email)) {
      console.log('entrou');
      this.setState({
        validForm: false,
      });
    }
  }

  async api() {
    const resul = await triviaAPI();
    return resul;
  }

  render() {
    console.log(this.api());
    const { validForm } = this.state;
    return (
      <form>
        <label htmlFor="name">
          NAME
          <input type="text" data-testid="input-player-name" id="name" onChange={ this.validateEmail } />
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
        <button type="submit" data-testid="btn-play" disabled={ validForm }>Jogar</button>
      </form>
    );
  }
}

export default Login;
