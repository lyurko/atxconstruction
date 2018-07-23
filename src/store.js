/* eslint-disable no-underscore-dangle,function-paren-newline,import/no-named-as-default */
/* Only doing the above for react devtools having a naming convention we have no control over */
import { compose, createStore } from 'redux';

import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
);

export default store;
