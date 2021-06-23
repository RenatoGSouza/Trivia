import React, { Component } from 'react';
import ImgHeader from './Header/ImgHeader';
import SpanHeader from './Header/SpanHeader';
import ButtonHeader from './Header/ButtonHeader';
import '../style/header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <ImgHeader />
        <SpanHeader />
        <ButtonHeader />
      </header>
    );
  }
}

export default Header;
