import React from 'react';
import NavigatorButton from '../NavigatorButton/NavigatorButton';
import styles from './Navigator.css';

function Navigator() {
  const buttons = [
    { name: 'Status', to: '/status' },
    { name: 'Library', to: '/library' },
    { name: 'Queue', to: '/queue' },
  ];

  return (
    <div className={styles['root']}>
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

export default Navigator;
