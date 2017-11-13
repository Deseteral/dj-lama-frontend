import React from 'react';
import { shallow } from 'enzyme';
import LibraryPage from './LibraryPage';

describe('LibraryPage component', () => {
  it('should render card with title', () => {
    // when
    const wrapper = shallow(
      <LibraryPage
        songs={[]}
      />);

    // then
    expect(wrapper.find('Card').length).toBe(1);
    expect(wrapper.find('Card').prop('title')).toBe('Library');
  });

  it('should render add new song button', () => {
    // when
    const wrapper = shallow(
      <LibraryPage
        songs={[]}
      />);

    // then
    expect(wrapper.find('.add-new-song-button').prop('to')).toBe('/library/add');
  });

  it('should render song list', () => {
    // given
    const songs = [
      { id: 'id1', title: 'Title 1', artist: 'Artist 1', playCount: 5 },
      { id: 'id2', title: 'Title 2', artist: 'Artist 2', playCount: 8 },
      { id: 'id3', title: 'Title 3', artist: 'Artist 3', playCount: 1 },
      { id: 'id4', title: 'Title 4', artist: 'Artist 4', playCount: 3 },
    ];

    // when
    const wrapper = shallow(
      <LibraryPage
        songs={songs}
      />);

    // then
    const listContainer = wrapper.find('Card');

    expect(listContainer.find('SongItem').length).toBe(songs.length);
    songs.forEach((s, index) => {
      const component = listContainer.find('SongItem').at(index);
      const props = component.props();

      expect(component.key()).toBe(s.id);
      expect(props.title).toBe(s.title);
      expect(props.artist).toBe(s.artist);
      expect(props.playCount).toBe(s.playCount);
      expect(props.editUrl).toBe(`/library/${s.id}`);
    });
  });
});
