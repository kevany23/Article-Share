import React from 'react';
import NavbarAS from './components/navbar';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';

import Home from './components/home';

export default(
    <div>
        <Switch>
        <NavbarAS/>
         <Route path="/" exact={true} component={Home}/>
        </Switch>
    </div>
);
