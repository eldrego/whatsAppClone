import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Platform,
} from 'react-native';
import {
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';
import Compose from '../components/Compose';
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

    this.keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0;
  }

  componentDidMount() {
    this.unsubscribeGetMessage = api.getMessages((snapshot) => {
      this.setState({
        messages: Object.values(snapshot.val()),
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeGetMessage();
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
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={false}
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
          <Compose submit={api.postMessage} />
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}
