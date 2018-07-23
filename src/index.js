import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import App from './App';
import history from './history';
// ly deleting b/c issues w/react router and gh pages
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>, document.getElementById('root'));
//registerServiceWorker();
