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
<<<<<<< HEAD
    // const nameInput = document.querySelector('#name').innerHTML;
    const re = /\S+@\S+\.\S+/;
    console.log(re.test(email));
    if (re.test(email)) {
      console.log('entrou');
=======
    const nameInput = document.querySelector('#name').value;
    const re = /\S+@\S+\.\S+/;
    if ((re.test(email)) && (nameInput.length > 0)) {
>>>>>>> 0bbec2a589fcb0d23d50b4bf66fcb996ccdaf497
      this.setState({
        validForm: false,
      });
    }
  }

  async api() {
    const resul = await triviaAPI();
    console.log(resul);
  }

  render() {
    console.log(this.api());
    const { validForm } = this.state;
    return (
      <form>
        <label htmlFor="name">
          NAME
<<<<<<< HEAD
          <input type="text" data-testid="input-player-name" id="name" onChange={ this.validateEmail } />
=======
          <input
            type="text"
            data-testid="input-player-name"
            id="name"
            onChange={ this.validateEmail }
          />
>>>>>>> 0bbec2a589fcb0d23d50b4bf66fcb996ccdaf497
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
