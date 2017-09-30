import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigator.css';

function Navigator(props) {
  return (
    <div className={styles.root}>
      {props.children.map((child, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className={styles.child} key={index}>
          {child}
        </div>
      ))}
    </div>
  );
}

Navigator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navigator;
