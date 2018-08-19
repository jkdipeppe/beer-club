import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import beerListCountReducer from './reducers/beerListCountReducer.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(beerListCountReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
