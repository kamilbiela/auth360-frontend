import "bootstrap/dist/css/bootstrap.css";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {combineReducers} from "redux";
import {browserHistory, Router, Route} from 'react-router';

import {App} from './App';
import {ClientComponent, clientReducer} from "./client/index";

const reducer = combineReducers({
    clientReducer
});


ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="/clients" component={ClientComponent}/>
        </Route>
    </Router>
), document.getElementById('app'));
