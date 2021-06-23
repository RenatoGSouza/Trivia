import PropTypes from 'prop-types';
import React, { Component } from 'react';

class InputsLogin extends Component {
  render() {
    const { validateEmail } = this.props;
    return (
      <div className="div-login-input">
        <input
          placeholder="NOME"
          className="input-login"
          type="text"
          data-testid="input-player-name"
          id="name"
        />
        <input
          placeholder="EMAIL"
          className="input-login"
          type="text"
          data-testid="input-gravatar-email"
          id="email"
          onChange={ ({ target: { value } }) => validateEmail(value) }
        />
      </div>
    );
  }
}
InputsLogin.propTypes = {
  validateEmail: PropTypes.func.isRequired,
};

export default InputsLogin;
