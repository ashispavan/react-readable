import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers';
import ReduxPromise from 'redux-promise';


const store = createStore(reducer, applyMiddleware(thunk, ReduxPromise));
console.log(store.getState());


ReactDOM.render(<Provider store={store}><App store={store} /></Provider>, document.getElementById('root'));
registerServiceWorker();