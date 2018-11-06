import React, { Component } from 'react';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Github from './pages/Github';
import WebdevInfo from './pages/WebdevInfo';
import ApiService from './lib/ApiService';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
              <Route exact path={'/'} component={HomePage} />
              <Route exact path={'/login'} component={Login} />
              <Route path={'/signup'} component={Signup} />
              <Route path={'/github'} component={Github} />
              <Route path={'/webdevinfo'} component={WebdevInfo} />
              <Route path={'/webdevs'} lib={ApiService} />
              <Route path={'/webdevs/id'} lib={ApiService} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
