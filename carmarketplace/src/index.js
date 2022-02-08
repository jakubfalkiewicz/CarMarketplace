import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import carsReducer from './ducks/cars/reducers';
import usersReducer from './ducks/users/reducers'
import logger from 'redux-logger'

const store = createStore(
  combineReducers(
    {
      cars: carsReducer,
      users: usersReducer
    }
  ), applyMiddleware(thunk, logger));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
