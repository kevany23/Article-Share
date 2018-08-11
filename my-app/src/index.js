import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/home';
import registerServiceWorker from './registerServiceWorker';

import routes from './routes';
import NavbarAS from './components/navbar';

import {
    BrowserRouter as Router,
} from 'react-router-dom';

ReactDOM.render(
    <div>
        <Router routes={routes}>
        <NavbarAS/>
        </Router>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
