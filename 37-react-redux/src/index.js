import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers'

const store = createStore(reducers, applyMiddleware(thunk));

console.log('store', store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
