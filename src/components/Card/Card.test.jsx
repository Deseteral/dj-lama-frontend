import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card component', () => {
  it('should render children', () => {
    // when
    const wrapper = shallow(
      <Card>
        <div className="child">child 1</div>
        <div className="child">child 2</div>
        <div className="child">child 3</div>
      </Card>);

    // then
    const childrenText = wrapper
      .find('.container')
      .find('.card')
      .find('.child')
      .map(n => n.text());

    expect(childrenText).toEqual([
      'child 1',
      'child 2',
      'child 3',
    ]);
  });

  it('should pass class name', () => {
    // when
    const wrapper = shallow(
      <Card className="test-class-name">
        <div>child</div>
      </Card>);

    // then
    expect(wrapper.find('.card').hasClass('test-class-name'))
      .toBe(true);
  });

  it('should be transparent', () => {
    // when
    const wrapper = shallow(
      <Card transparent>
        <div>child</div>
      </Card>);

    // then
    expect(wrapper.find('.card').hasClass('card--transparent'))
      .toBe(true);
  });

  describe('title', () => {
    it('should not render', () => {
      // when
      const wrapper = shallow(
        <Card>
          <div>child</div>
        </Card>);

      // then
      expect(wrapper.find('h2.title').length).toBe(0);
    });

    it('should render', () => {
      // when
      const wrapper = shallow(
        <Card title="Test title">
          <div>child</div>
        </Card>);

      // then
      expect(wrapper.find('h2.title').text()).toBe('Test title');
    });
  });
});
