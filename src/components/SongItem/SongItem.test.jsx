import React from 'react';
import { shallow } from 'enzyme';
import SongItem from './SongItem';

const DEFAULT_PROPS = {
  title: 'Test title',
  artist: 'Test artist',
  playCount: 12,
  editUrl: '/edit/url',
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

  it('should render play count', () => {
    // when
    const wrapper = shallow(
      <SongItem
        {...DEFAULT_PROPS}
      />);

    // then
    expect(wrapper.find('.small').at(1).text())
      .toBe('played: 12');
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

    wrapper.find('.content-wrapper').simulate('click');

    // then
    expect(onClick).toHaveBeenCalled();
  });

  describe('interactive', () => {
    it('should be when onClick is defined', () => {
      // when
      const wrapper = shallow(
        <SongItem
          {...DEFAULT_PROPS}
        />);

      // then
      expect(wrapper.find('.root').length).toBe(1);
      expect(wrapper.find('.root--interactive').length).toBe(1);
    });

    it('should not be', () => {
      // when
      const wrapper = shallow(
        <SongItem
          {...DEFAULT_PROPS}
          onClick={undefined}
        />);

      // then
      expect(wrapper.find('.root').length).toBe(1);
      expect(wrapper.find('.root--interactive').length).toBe(0);
    });
  });

  describe('index', () => {
    it('should render', () => {
      // when
      const wrapper = shallow(
        <SongItem
          {...DEFAULT_PROPS}
          index={10}
        />);

      // then
      expect(wrapper.find('.index').text()).toBe('10.');
    });

    it('should not render', () => {
      // when
      const wrapper = shallow(
        <SongItem
          {...DEFAULT_PROPS}
        />);

      // then
      expect(wrapper.find('.index').length).toBe(0);
    });
  });

  describe('edit button', () => {
    it('should render when editUrl is defined', () => {
      // when
      const wrapper = shallow(
        <SongItem
          {...DEFAULT_PROPS}
        />);

      // then
      expect(wrapper.find('.icon--edit').name()).toBe('NavLink');
      expect(wrapper.find('.icon--edit').prop('to')).toBe('/edit/url');
    });
  });
});
