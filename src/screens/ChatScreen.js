import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
} from 'react-native';
import api from '../services/api';
import styles from '../lib/css/styles';

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.name}`,
  })

  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    api.getMockData().then((messages) => {
      this.setState({
        messages,
      });
    });
  }

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require('../images/bg.png')}
      >
        <View>
          <FlatList
            data={this.state.messages}
            renderItem={({ item }) =>
              <View><Text>{item.message}</Text></View>
            }
            keyExtractor={(item, index) => (`message-${index}`)}
          />
        </View>
      </ImageBackground>
    );
  }
}
