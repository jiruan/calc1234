import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import ExpReducer from './reducers/ExpReducer';

const reducer = combineReducers({
  expr: ExpReducer,
});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
  ),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
