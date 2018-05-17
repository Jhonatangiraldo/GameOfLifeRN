// __tests__/Intro-test.js
import React from 'react';
import App from '../App';
import { shallow, render } from 'enzyme';
import renderer from 'react-test-renderer';
import {
  Text,
  View,
} from 'react-native'
import Title from '../src/components/title';
import Grid from '../src/components/grid';

test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Testing HelloWorld component', () => {
  it('2', () => {
    const wrapper = shallow(<Title title={'Conway'} />);
    const element = <Text style={{
      fontSize: 16,
      color: '#483d8b',
    }}>Conway</Text>;
    expect(wrapper.contains(element)).toBe(true);
  });

  it('3', () => {
    const wrapper = shallow(<Title title={'Conway'} />);
    const element = Text;
    expect(wrapper.exists(element)).toBe(true);
  });

  it('4', () => {
    const wrapper = render(<Title title={'Conway'} />);
    expect(wrapper.text()).toContain('Conway');
  });

  it('5', () => {
    const wrapper = shallow(<Grid life={true} />);
    const cell = {
      width: 20,
      height: 20,
      borderWidth: 1,
      borderColor: 'gray'
    };
    const alive = {
      backgroundColor: '#483d8b',
    };
    const element = <View style={[cell, alive]}></View>;
    expect(wrapper.contains(element)).toBe(true);
  });
});
