import React, { Component }  from 'react';
import { Route, DefaultRoute, RouteHandler, Link } from 'react-router'
import styles from './style';
import template from './template.rt';

export default class Application extends Component {
  render () {
    let defaults = {
        styles: styles
    };

    return template.apply(defaults);
  }
}