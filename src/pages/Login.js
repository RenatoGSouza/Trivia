import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { playerAction, gravatarAction } from '../actions';
import { triviaAPI } from '../Services/api';
import '../style/login.css';
import InputsLogin from '../components/InputsLogin';
import ButtonsLogin from '../components/ButtonsLogin';
import ImgLogin from '../components/ImgLogin';

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
    const { playerName, playerImg } = this.props;
    playerName(nameInput);
    playerImg(email);

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
      <div className="div-login-img">
        <form className="form-login">
          <InputsLogin validateEmail={ this.validateEmail } />
          <ButtonsLogin
            clickBtnJogar={ this.clickBtnJogar }
            validForm={ validForm }
            redirect={ this.redirect }
          />
          <ImgLogin />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  playerImg: PropTypes.func.isRequired,
  playerName: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  playerName: (name) => dispatch(playerAction(name)),
  playerImg: (email) => dispatch(gravatarAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
