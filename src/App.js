import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './containers/header';
import Home from './containers/home';

import './App.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <main>
            <Header />
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
