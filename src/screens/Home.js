import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';
import styles from '../lib/css/styles';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home Screen',
  }

  render() {
    const contact = { name: 'John' };
    const onPress = () => {
      this.props.navigation.navigate('chat', contact);
    };

    const title = `Chat with ${contact.name}`;

    return (
      <View style={styles.container}>
        <Button
          onPress={onPress}
          title={title}
        />
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};
