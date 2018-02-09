import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import routes from './src/config/routes';
import styles from './src/lib/css/styles';
import api from './src/services/api';

const Navigator = StackNavigator(routes);

export default class App extends Component {
  componentWillMount() {
    api.initializeFB();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Navigator />
      </View>
    );
  }
}
