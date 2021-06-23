import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonsLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { clickBtnJogar, validForm, redirect } = this.props;
    return (
      <div className="div-login">
        <button
          className="button-login"
          type="button"
          data-testid="btn-settings"
          onClick={ () => redirect() }
        >
          Configurações
        </button>
        <Link to="/jogar">
          <button
            className="button-login"
            type="submit"
            data-testid="btn-play"
            disabled={ validForm }
            onClick={ clickBtnJogar }
          >
            Jogar
          </button>
        </Link>
      </div>
    );
  }
}

ButtonsLogin.propTypes = {
  clickBtnJogar: PropTypes.func.isRequired,
  validForm: PropTypes.bool.isRequired,
  redirect: PropTypes.func.isRequired,
};

export default ButtonsLogin;
