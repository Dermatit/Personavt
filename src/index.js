import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.jsx';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './Redux/reducer.jsx';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
