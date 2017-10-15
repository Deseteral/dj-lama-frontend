import React from 'react';
import { shallow } from 'enzyme';
import StatusPage from './StatusPage';

const DEFAULT_PROPS = {
  songTitle: 'test song title',
  songArtist: 'test song artist',
  songCount: 12,
  queueLength: 2,
  onAirSince: '2017-10-15T14:46:52.000Z',
  refreshStatus: (() => {}),
};

describe('StatusPage component', () => {
  describe('song info', () => {
    it('should render', () => {
      // when
      const wrapper = shallow(
        <StatusPage
          {...DEFAULT_PROPS}
        />);

      // then
      const card = wrapper.find('Card').at(0);
      expect(card.find('.title').text())
        .toBe('test song title');

      expect(card.find('.artist').text())
        .toBe('test song artist');
    });

    it('should not render when there is none', () => {
      // when
      const wrapper = shallow(
        <StatusPage
          {...DEFAULT_PROPS}
          songTitle={null}
          songArtist={null}
        />);

      // then
      expect(wrapper.find('.title').length)
        .toBe(0);

      expect(wrapper.find('.artist').length)
        .toBe(0);
    });
  });

  describe('on air', () => {
    it('should render', () => {
      // when
      const wrapper = shallow(
        <StatusPage
          {...DEFAULT_PROPS}
          getCurrentTime={() => new Date('2017-10-15T14:47:57.000Z')}
        />);

      // then
      const card = wrapper.find('Card').at(1);
      expect(card.prop('className')).toBe('on-air-container');
      expect(card.find('.circle').length).toBe(1);
      expect(card.find('.on-air').text()).toBe('ON AIR');
      expect(card.find('.timer').text()).toBe('00:01:05');
    });

    it('should not render when there is no start time', () => {
      // when
      const wrapper = shallow(
        <StatusPage
          {...DEFAULT_PROPS}
          onAirSince={null}
        />);

      // then
      expect(wrapper.find('.on-air').length).toBe(0);
      expect(wrapper.find('.timer').length).toBe(0);
    });
  });

  describe('general info', () => {
    it('should render', () => {
      // when
      const wrapper = shallow(
        <StatusPage
          {...DEFAULT_PROPS}
        />);

      // then
      const card = wrapper.find('Card').at(2);

      expect(card.find('div').at(0).text())
        .toBe('Number of songs in library: 12');

      expect(card.find('div').at(1).text())
        .toBe('Number of songs in queue: 2');
    });

    it('should not render when there is none', () => {
      // when
      const wrapper = shallow(
        <StatusPage
          {...DEFAULT_PROPS}
          songCount={null}
          queueLength={null}
        />);

      // then
      expect(wrapper.find('Card').length).toBe(2);
    });

    it('should render song count', () => {
      // when
      const wrapper = shallow(
        <StatusPage
          {...DEFAULT_PROPS}
          queueLength={null}
        />);

      // then
      const card = wrapper.find('Card').at(2);

      expect(card.find('div').length).toBe(1);
      expect(card.find('div').text())
        .toBe('Number of songs in library: 12');
    });

    it('should render queue length', () => {
      // when
      const wrapper = shallow(
        <StatusPage
          {...DEFAULT_PROPS}
          songCount={null}
        />);

      // then
      const card = wrapper.find('Card').at(2);

      expect(card.find('div').length).toBe(1);
      expect(card.find('div').text())
        .toBe('Number of songs in queue: 2');
    });
  });
});
