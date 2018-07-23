import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './containers/home';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <main>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <main>
              <Switch>
                <Route path="/" component={Home} />
              </Switch>
            </main>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
