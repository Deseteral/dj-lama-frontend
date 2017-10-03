import React from 'react';
import PropTypes from 'prop-types';
import css from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './NavigatorButton.css';

function NavigatorButton({ name, to }) {
  const iconClassName = `icon--${name.toLowerCase()}`;

  return (
    <NavLink to={to} className={styles['link']} activeClassName={styles['link--active']}>
      <div className={css(styles['icon'], styles[iconClassName])} />
      <div className={styles['title']}>
        {name}
      </div>
    </NavLink>
  );
}

NavigatorButton.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavigatorButton;
