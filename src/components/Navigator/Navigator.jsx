import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';
import NavigatorButton from '../NavigatorButton/NavigatorButton';
import styles from './Navigator.css';

function isPageActive(url, page) {
  return url.startsWith(page);
}

function getActivePageName(buttons) {
  return buttons
    .find(b => b.active === true)
    .name
    .toLowerCase();
}

function buttonWithActivePage(button, currentUrl) {
  return Object.assign(
    {},
    button,
    { active: isPageActive(currentUrl, button.to) },
  );
}

function Navigator({ getCurrentUrl }) {
  const buttons = [
    { name: 'Status', to: '/status' },
    { name: 'Library', to: '/library' },
    { name: 'Queue', to: '/queue' },
  ].map(b => buttonWithActivePage(b, getCurrentUrl()));

  const activePageName = getActivePageName(buttons);
  const activeClassName = `color--${activePageName}`;

  return (
    <div className={css(styles['root'], styles[activeClassName])}>
      {buttons.map(button => (
        <NavigatorButton
          name={button.name}
          to={button.to}
          key={button.name}
        />
      ))}
    </div>
  );
}

Navigator.propTypes = {
  getCurrentUrl: PropTypes.func.isRequired,
};

export default Navigator;
