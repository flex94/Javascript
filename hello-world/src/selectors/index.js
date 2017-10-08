import * as ST from '../constants/state.js';

export function selectorCounter(state) {
  return state.get(ST.COUNTER);
}
