import { combineReducers } from 'redux-immutable';
import * as AC from '../constants/actions.js';
import * as ST from '../constants/state.js';

function reducerCounter(state = 0, action) {
  switch (action.type) {
    case AC.UPDATE_COUNTER:
      return action.value;
    default:
      return state;
  }
}

export const baseReducer = combineReducers({
  [ST.COUNTER]: reducerCounter 
});
