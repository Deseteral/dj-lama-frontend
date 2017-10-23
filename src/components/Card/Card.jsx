import React from 'react';
import PropTypes from 'prop-types';
import css from 'classnames';
import styles from './Card.css';

function Card(props) {
  const cardClassName = css(
    props.className,
    styles['card'],
    props.transparent ? styles['card--transparent'] : null,
  );

  return (
    <div className={styles['container']}>
      <div className={cardClassName}>
        {props.title &&
          <h2 className={styles['title']}>{props.title}</h2>
        }
        {props.children}
      </div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  transparent: PropTypes.bool,
  title: PropTypes.string,
};

Card.defaultProps = {
  className: '',
  transparent: false,
  title: null,
};

export default Card;
