import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChatScreen from '../../src/screens/ChatScreen';

const navigate = jest.fn();
const goBack = jest.fn();
configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer.create(<ChatScreen navigation={{ navigate }} />);
  expect(tree).toMatchSnapshot();
});

xit('navigate on press', () => {
  const chatScreen = shallow(<ChatScreen navigation={{ navigate }} />);
  chatScreen.find('Button').simulate('press');
  expect(goBack).toBeCalledWith('home');
});

it('has proper navigation options', () => {
  expect(ChatScreen.navigationOptions({
    navigation: {
      state: {
        params: {
          name: 'John',
        },
      },
    },
  })).toMatchSnapshot();
});
