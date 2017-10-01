import React from 'react';
import { shallow } from 'enzyme';
import Navigator from './Navigator';

describe('Navigator component', () => {
  it('should render', () => {
    // when
    const wrapper = shallow(<Navigator />);

    // then
    expect(wrapper.find('.root').length).toBe(1);
  });

  describe('buttons', () => {
    [
      { name: 'Status', to: '/status' },
      { name: 'Library', to: '/library' },
      { name: 'Queue', to: '/queue' },
    ].forEach((testCase, index) => {
      it(`should render ${testCase.name} button`, () => {
        // when
        const wrapper = shallow(<Navigator />);
        const buttonWrapper = wrapper.find('NavigatorButton').at(index);

        // then
        expect(buttonWrapper.prop('name')).toBe(testCase.name);
        expect(buttonWrapper.prop('to')).toBe(testCase.to);
      });
    });
  });
});
