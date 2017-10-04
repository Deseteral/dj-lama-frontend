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

    // when
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
});
