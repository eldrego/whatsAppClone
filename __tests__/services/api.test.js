import 'react-native';
import React from 'react';
import api from '../../src/services/api';

it('resolves to mock data', () => {
  return api.getMockdata().then((messages) => {
    expect(messages).toMatchSnapshot();
  });
});
