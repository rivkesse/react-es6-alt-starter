import React, { Component } from 'react';

/**
 * Import locally scoped styles using css-loader
 * See style.sass in this directory.
 *
 * More info: https://github.com/webpack/css-loader#local-scope
 */
import styles from './style';

/**
 * Images
 */
import logoURL from './images/react-logo.svg';

/**
 * Templates
 */
import template from './template.rt';

export default class Header extends Component {
  render () {
    let defaults = {
        styles: styles,
        logoURL: logoURL
    };

    return template.apply(defaults);
  }
}
