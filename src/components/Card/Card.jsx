import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.css';

function Card({ children }) {
  return (
    <div className={styles['container']}>
      <div className={styles['card']}>
        {children}
      </div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
