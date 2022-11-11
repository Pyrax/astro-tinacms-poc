import React from 'react';
import classNames from 'classnames';
import styles from './PseudoImage.module.css';

export default ({ color = '', className = '' }) => (
  <div
    className={classNames(styles['pseudo-image'], className)}
    style={{ ['--colors-background' as any]: color }}
  />
);
