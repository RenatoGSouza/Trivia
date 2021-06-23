import React, { Component } from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

class ImgHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { playerGravatar } = this.props;
    console.log(playerGravatar);
    return (
      <div className="div-header">
        <img
          src={ `https://www.gravatar.com/avatar/${md5(playerGravatar).toString()}` }
          alt="Avatar do jogador"
          data-testid="header-profile-picture"
          className="header-profile-picture"
        />
      </div>
    );
  }
}
ImgHeader.propTypes = {
  playerGravatar: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  playerGravatar: state.playerReducer.playerGravatar,
});
export default connect(mapStateToProps)(ImgHeader);
