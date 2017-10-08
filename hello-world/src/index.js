import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './containers/App.js';
import './style/App.css';
import { baseReducer } from './reducers/index.js';

const store = createStore(
  baseReducer, 
  Immutable.Map(),
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
