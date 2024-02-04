import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { createRoot } from 'react-dom/client'; // Import createRoot
import reduxThunk from 'redux-thunk';


import App from './components/App';
import combineReducers from './reducers';



const store = createStore (combineReducers, {}, applyMiddleware(reduxThunk));


const root = createRoot(document.querySelector('#root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);