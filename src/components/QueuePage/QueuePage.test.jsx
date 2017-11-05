import React from 'react';
import { shallow } from 'enzyme';
import QueuePage from './QueuePage';

describe('QueuePage component', () => {
  it('should render card with title', () => {
    // when
    const wrapper = shallow(
      <QueuePage
        currentlyPlaying={null}
        queue={[]}
      />);

    // then
    expect(wrapper.find('Card').length).toBe(1);
    expect(wrapper.find('Card').prop('title')).toBe('Queue');
  });

  it('should render song list', () => {
    // given
    const currentlyPlaying = {
      id: 'id0',
      title: 'Title 0',
      artist: 'Artist 0',
      playCount: 9,
    };

    const queue = [
      { id: 'id1', title: 'Title 1', artist: 'Artist 1', playCount: 5 },
      { id: 'id2', title: 'Title 2', artist: 'Artist 2', playCount: 8 },
      { id: 'id3', title: 'Title 3', artist: 'Artist 3', playCount: 1 },
      { id: 'id4', title: 'Title 4', artist: 'Artist 4', playCount: 3 },
    ];

    // when
    const wrapper = shallow(
      <QueuePage
        currentlyPlaying={currentlyPlaying}
        queue={queue}
      />);

    // then
    const listContainer = wrapper.find('Card');
    const currentlyPlayingItem = listContainer.find('SongItem').at(0);

    expect(currentlyPlayingItem.props()).toEqual({
      index: null,
      title: 'Title 0',
      artist: 'Artist 0',
      playCount: 9,
      onClick: null,
    });

    expect(listContainer.find('SongItem').length).toBe(queue.length + 1);
    queue.forEach((s, index) => {
      const component = listContainer.find('SongItem').at(index + 1);
      const props = component.props();

      expect(component.key()).toBe(`${s.id}-${index}`);
      expect(props.index).toBe(index + 1);
      expect(props.title).toBe(s.title);
      expect(props.artist).toBe(s.artist);
      expect(props.playCount).toBe(s.playCount);
    });
  });

  it('should render info when queue is empty', () => {
    // when
    const wrapper = shallow(
      <QueuePage
        currentlyPlaying={null}
        queue={[]}
      />);

    // then
    expect(wrapper.find('section').text()).toBe('There are no songs in the queue!');
  });
});
