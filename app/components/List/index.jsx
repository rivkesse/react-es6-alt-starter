import React, { Component }  from 'react';
import ListStore from '../../stores/list-stores.js';
import styles from './style';
import template from './template.rt';

export default class Application extends Component {

  componentDidMount() {
    ListStore.fetchList();
  }

  render () {
    let defaults = {
        styles: styles
    };

    return template.apply(defaults);
  }
}