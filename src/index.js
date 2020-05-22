import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const LIList1 = React.createElement('li', null, 'Go to market');
const LIList2 = React.createElement('li', null, 'Buy food');
const LIList3 = React.createElement('li', null, 'Make dinner');
const app = React.createElement('ul', null, LIList1, LIList2, LIList3);
const root = document.getElementById('root');
ReactDOM.render(app, root);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
