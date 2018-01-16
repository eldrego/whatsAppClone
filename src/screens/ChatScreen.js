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

  getMessageRow(item) {
    return (
      <View style={[
        styles.listItem, item.incoming ?
        styles.incomingMessage :
        styles.outgoingMessage,
      ]}
      >
        <Text>{item.message}</Text>
      </View>
    );
  }

  render() {
    return (
      <ImageBackground
        style={styles.chatContainer}
        source={require('../images/bg.png')}
      >
        <View>
          <FlatList
            data={this.state.messages}
            renderItem={({ item }) =>
              this.getMessageRow(item)
            }
            keyExtractor={(item, index) => (`message-${index}`)}
          />
        </View>
      </ImageBackground>
    );
  }
}
