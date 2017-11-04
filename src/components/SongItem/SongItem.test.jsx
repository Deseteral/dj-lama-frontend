import React from 'react';
import { shallow } from 'enzyme';
import SongItem from './SongItem';

const DEFAULT_PROPS = {
  title: 'Test title',
  artist: 'Test artist',
  playCount: 12,
  onClick: (() => {}),
};

describe('SongItem component', () => {
  it('should render song info', () => {
    // when
    const wrapper = shallow(
      <SongItem
        {...DEFAULT_PROPS}
      />);

    // then
    expect(wrapper.find('.info').text())
      .toEqual(
        ['Test title', 'Test artist'].join(''),
      );
  });

  it('should call onClick', () => {
    // given
    const onClick = jest.fn();

    // when
    const wrapper = shallow(
      <SongItem
        {...DEFAULT_PROPS}
        onClick={onClick}
      />);

    wrapper.simulate('click');

    // then
    expect(onClick).toHaveBeenCalled();
  });
});
