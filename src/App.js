import React from 'react';
import { Route, Switch } from 'react-router';
// import logo from './trivia.png';
import Game from './pages/Game';
import Login from './pages/Login';
import './App.css';

export default function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={ logo } className="App-logo" alt="logo" />
    //     <p>
    //       SUA VEZ
    //     </p>
    <Switch>
      <Route path="/" component={ Login } />
      <Route path="/jogar" component={ Game } />
    </Switch>
    //   </header>
    // </div>
  );
}
