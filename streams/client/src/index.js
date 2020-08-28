import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';

import Reducers from './reducers';
import App from './components/App';

ReactDOM.render(
  <Provider store={createStore(Reducers, applyMiddleware(thunk))}>
    <App/>
  </Provider>
  , document.querySelector('#root')
);
