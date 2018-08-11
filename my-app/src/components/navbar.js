import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import './navbar.css';

import { Link } from 'react-router-dom';
import routes from '../routes';

const NavbarAS = (props) => {
    return (
        <ul class="navbar navbar-expand-lg justify-content-left">
            <Link to='/' class="navbar-brand">ArticleShare</Link>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
        </ul>
    );
};

export default NavbarAS;