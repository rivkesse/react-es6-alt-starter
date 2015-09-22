import React from 'react';
import { Router, Route, DefaultRoute, NotFoundRoute } from 'react-router';

var Main    = require('./components/Application');
var Home    = require('./components/Home');
var List    = require('./components/List');
var Detail  = require('./components/Detail');

var routes = (
    <Route name="main" path="/" handler={Main}>
        <DefaultRoute handler={Home} />
        <Route name="list" path="/list" handler={List} />
        <Route name="detail" path="/detail" handler={Detail} />
    </Route>
);

module.exports=routes;
