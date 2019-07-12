import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store/index'
import {addArticle} from './actions/index'
import * as serviceWorker from './serviceWorker';
import Root from './router/index';

window.addArticle = addArticle;
window.store = store;

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
