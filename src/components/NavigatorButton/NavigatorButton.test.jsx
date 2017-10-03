import React from 'react';
import { shallow } from 'enzyme';
import NavigatorButton from './NavigatorButton';

describe('NavigatorButton component', () => {
  it('should render link', () => {
    // when
    const wrapper = shallow(
      <NavigatorButton
        to="/status"
        name="Status"
      />);

    // then
    expect(wrapper.find('NavLink').hasClass('link'))
      .toBe(true);
    expect(wrapper.find('NavLink').prop('to'))
      .toBe('/status');
    expect(wrapper.find('NavLink').prop('activeClassName'))
      .toBe('link--active');
  });

  it('should render icon', () => {
    // when
    const wrapper = shallow(
      <NavigatorButton
        to="/status"
        name="Status"
      />);

    // then
    expect(wrapper.find('.icon').hasClass('icon--status'))
      .toBe(true);
  });

  it('should render title', () => {
    // when
    const wrapper = shallow(
      <NavigatorButton
        to="/status"
        name="Status"
      />);

    // then
    expect(wrapper.find('.title').text())
      .toBe('Status');
  });
});
