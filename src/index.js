import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './app/App';
import Index from './context/index'
// import CommentApp from './CommentApp'
// import  './reduce'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
