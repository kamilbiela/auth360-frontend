import "bootstrap/dist/css/bootstrap.css";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {browserHistory, Router, Route} from 'react-router';

import {App} from './App';
import {ClientComponent} from "./client";

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="/clients" component={ClientComponent}/>
        </Route>
    </Router>
), document.getElementById('app'));
