import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import history from '/.history';
// ly deleting b/c issues w/react router and gh pages
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App} />
  </Router>, document.getElementById('root'));
//registerServiceWorker();
