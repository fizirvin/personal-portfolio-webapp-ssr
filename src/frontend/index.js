
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';


import App from './app.js'
import './index.css'

const history = createBrowserHistory();

console.log('hola mundo')

ReactDOM.render(
    <Router history={history}>
        <App></App>
    </Router>, document.getElementById('app')
);