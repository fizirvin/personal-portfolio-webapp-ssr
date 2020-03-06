
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';


import App from './app.js'


const history = createBrowserHistory();

console.log('hola mundo')

ReactDOM.hydrate(
    <Router history={history}>
        <App/>
    </Router>,document.getElementById('app')
);