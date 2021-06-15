import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from './pages/Game';
import Login from './pages/Login';
import './App.css';
import Configs from './pages/Configs';

export default function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={ logo } className="App-logo" alt="logo" />
    //     <p>
    //       SUA VEZ
    //     </p>
    <Switch>
      <Route exact path="/" component={ Login } />
      {/* <Route exact path="/" component={ Home } /> */}
      <Route exact path="/configs" component={ Configs } />
      <Route path="/jogar" component={ Game } />
    </Switch>
    //   </header>
    // </div>
  );
}
