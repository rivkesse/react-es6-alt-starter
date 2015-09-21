// IMPORTANT: This needs to be first (before any other components)
// to get around CSS order randomness in webpack.
import './css/base';

// Some ES6+ features require the babel polyfill
// More info here: https://babeljs.io/docs/usage/polyfill/
// Uncomment the following line to enable the polyfill
// require("babel/polyfill");

import React from 'react';
import Router from 'react-router';
import Application from './components/Application';

var routes = require('./routes');

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});

// React.render(<Application />, document.getElementById('app'));
