import { connect } from 'react-redux';
import { selectorCounter } from '../selectors/index.js';
import { updateCounter } from '../actions/index.js';
import { CounterComponent } from '../components/SomeComponent.js';

function mapStateToProps(state) {
  return {
    'value': selectorCounter(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    'increment': val => dispatch(updateCounter(val))
  };
}

export const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
