import React from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import { Link } from 'react-router-dom';

class Ranking extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  renderRanking() {
    const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    const UM_NEGATIVE = -1;
    const ordenadoRanking = ranking
      .sort((a, b) => ((a.playerScore > b.playerScore) ? UM_NEGATIVE : 1));
    return (
      <ul>
        {
          ordenadoRanking.map((player, index) => (
            <ol key={ index }>
              <img
                src={ `https://www.gravatar.com/avatar/${md5(player.playerGravatar).toString()}` }
                alt="Avatar do jogador"
              />
              <span data-testid={ `player-name-${index}` }>{player.playerName}</span>
              <span data-testid={ `player-score-${index}` }>{player.playerScore}</span>
              <span>{player.assertions}</span>
            </ol>
          ))
        }
      </ul>
    );
  }

  render() {
    return (
      <div>
        <section data-testid="ranking-title">
          {this.renderRanking()}
          <Link to="/">
            <button type="button" data-testid="btn-go-home">Home</button>
          </Link>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playerGravatar: state.playerReducer.playerGravatar,
});

export default connect(mapStateToProps)(Ranking);
