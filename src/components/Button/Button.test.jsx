import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const DEFAULT_PROPS = {
  onClick: () => {},
};

describe('Button component', () => {
  it('should render with correct classnames', () => {
    // when
    const wrapper = shallow(
      <Button
        {...DEFAULT_PROPS}
        className="test-class"
      >
        test
      </Button>);

    expect(wrapper.find('.test-class.button').length).toBe(1);
  });

  it('should render as button', () => {
    // when
    const wrapper = shallow(
      <Button
        {...DEFAULT_PROPS}
        secondary
      >
        test
      </Button>);

    expect(wrapper.find('.button.button--secondary').length).toBe(1);
  });

  it('should render children', () => {
    // when
    const wrapper = shallow(
      <Button
        {...DEFAULT_PROPS}
      >
        test button text
      </Button>);

    expect(wrapper.find('.button').text()).toBe('test button text');
  });
});
