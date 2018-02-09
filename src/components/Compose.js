import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  Button,
  Keyboard,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  composeText: {
    width: '80%',
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: 'white',
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  compose: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
});

export default class Compose extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.submit = this.submit.bind(this);
    this.changeText = this.changeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  submit() {
    this.props.submit(this.state.text);
    this.setState({
      text: '',
    });
    Keyboard.dismiss();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.submit();
  }

  changeText(text) {
    this.setState({
      text,
    });
  }

  render() {
    return (
      <View style={styles.compose}>
        <TextInput
          style={styles.composeText}
          value={this.state.text}
          maxLength={40}
          onChangeText={this.changeText}
          onSubmitEditing={this.handleSubmit}
        />
        <Button
          onPress={this.submit}
          title="Send"
        />
      </View>
    );
  }
}

Compose.propTypes = {
  submit: PropTypes.func.isRequired,
};
