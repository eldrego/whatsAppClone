import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../../src/screens/Home';

const navigate = jest.fn();
configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer.create(<Home navigation={{ navigate }} />);
  expect(tree).toMatchSnapshot();
});

it('navigate on press', () => {
  const homeScreen = shallow(<Home navigation={{ navigate }} />);
  homeScreen.find('Button').simulate('press');
  expect(navigate).toBeCalledWith('chat', { name: 'John' });
});

it('has proper navigation options', () => {
  expect(Home.navigationOptions).toMatchSnapshot();
});
