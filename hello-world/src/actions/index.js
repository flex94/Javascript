import * as AC from '../constants/actions.js';

export function updateCounter(currValue) {
  return {
    'type': AC.UPDATE_COUNTER,
    'value': currValue + 1
  };
}
