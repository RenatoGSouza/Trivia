import React from 'react';
import Login from '../pages/Login';
import logo from '../trivia.png';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <Login />
        </header>
      </div>
    );
  }
}

export default Home;
