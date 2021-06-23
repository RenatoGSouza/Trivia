import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import ImgHeader from './Header/ImgHeader';
import SpanHeader from './Header/SpanHeader';
import ButtonHeader from './Header/ButtonHeader';
import '../style/header.css';

class Header extends Component {
  render() {
    const { playerGravatar } = this.props;
    const hash = md5(playerGravatar);
    return (
      <header className="header">
        <ImgHeader hash={ hash } />
        <SpanHeader />
        <ButtonHeader />
      </header>
    );
  }
}

Header.propTypes = {
  playerGravatar: PropTypes.string,
};

Header.defaultProps = {
  playerGravatar: '',
};

export default Header;
