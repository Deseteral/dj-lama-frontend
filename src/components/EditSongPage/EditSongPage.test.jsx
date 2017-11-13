import React from 'react';
import { shallow } from 'enzyme';
import EditSongPage from './EditSongPage';

const DEFAULT_PROPS = {
  id: 'test-id',
  title: 'test title',
  artist: 'test artist',
  youtubeId: 'youtube-id',
};

describe('EditSongPage component', () => {
  it('should render card with title', () => {
    // when
    const wrapper = shallow(
      <EditSongPage
        {...DEFAULT_PROPS}
      />);

    // then
    expect(wrapper.find('Card').length).toBe(1);
    expect(wrapper.find('Card').prop('title')).toBe('Edit song');
  });

  it('should render submit button', () => {
    // when
    const wrapper = shallow(
      <EditSongPage
        {...DEFAULT_PROPS}
      />);

    // then
    expect(wrapper.find('.button').text()).toBe('Submit');
  });

  it('should set initial state', () => {
    // when
    const wrapper = shallow(
      <EditSongPage
        {...DEFAULT_PROPS}
      />);

    // then
    expect(wrapper.state('id')).toBe('test-id');
    expect(wrapper.state('title')).toBe('test title');
    expect(wrapper.state('artist')).toBe('test artist');
    expect(wrapper.state('youtubeId')).toBe('youtube-id');
  });

  describe('inputs', () => {
    [
      { fragment: 'title', elementId: '#inputTitle' },
      { fragment: 'artist', elementId: '#inputArtist' },
      { fragment: 'youtubeId', elementId: '#inputYoutubeId' },
    ].forEach((testCase) => {
      it(`should render ${testCase.fragment} input`, () => {
        // when
        const wrapper = shallow(
          <EditSongPage
            {...DEFAULT_PROPS}
          />);

        // then
        expect(wrapper.find(testCase.elementId).length).toBe(1);
      });
    });
  });
});
