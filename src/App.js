import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Home from './components/Home';
// import logo from './trivia.png';
import Game from './pages/Game';
import Login from './pages/Login';
import './App.css';
import Configs from './pages/Configs';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      {/* <Route exact path="/" component={ Home } /> */}
      <Route exact path="/configs" component={ Configs } />
      <Route path="/jogar" component={ Game } />
    </Switch>
  );
}
