import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import routes from './src/config/routes';
import styles from './src/lib/css/styles';

const Navigator = StackNavigator(routes);

export default class App extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Navigator />
      </View>
    );
  }
}
