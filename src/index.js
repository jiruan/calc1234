import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import ExpReducer from './reducers/ExpReducer';

const reducer = combineReducers({
  expr: ExpReducer,
});

console.log(reducer);

const store = createStore(
  reducer,
  composeWithDevTools(),
  applyMiddleware(thunk),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
