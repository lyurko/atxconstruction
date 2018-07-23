// @flow
import { combineReducers } from 'redux';

type State = {}

export const initialState: State = {};

export function appReducer(state: State = initialState, action: Object) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  appReducer,
});

export default rootReducer;
