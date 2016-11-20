import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

export default class testmap extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('testmap', () => testmap);
