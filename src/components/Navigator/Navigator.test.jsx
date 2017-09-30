import React from 'react';
import { shallow } from 'enzyme';
import Navigator from './Navigator';

describe('Navigator component', () => {
  it('should render', () => {
    // when
    const wrapper = shallow(
      <Navigator>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </Navigator>);

    // then
    expect(wrapper.find('.root').length).toBe(1);
  });

  it('should render children', () => {
    // when
    const wrapper = shallow(
      <Navigator>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </Navigator>);

    // then
    expect(wrapper.find('.child').length).toBe(3);
    expect(wrapper.find('.child').map(n => n.text()))
      .toEqual([
        'one', 'two', 'three',
      ]);
  });
});
