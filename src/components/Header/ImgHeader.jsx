import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImgHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { hash } = this.props;
    const urlImg = `https://www.gravatar.com/avatar/${hash}`;
    return (
      <div className="div-header">
        <img
          src={ urlImg }
          alt="Avatar do jogador"
          data-testid="header-profile-picture"
          className="header-profile-picture"
        />
      </div>
    );
  }
}
ImgHeader.propTypes = {
  hash: PropTypes.string.isRequired,
};

export default ImgHeader;
