import React from 'react';
import PropTypes from 'prop-types';
import css from 'classnames';
import styles from './Card.css';

function Card(props) {
  return (
    <div className={styles['container']}>
      <div className={css(props.className, styles['card'])}>
        {props.children}
      </div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: '',
};

export default Card;
