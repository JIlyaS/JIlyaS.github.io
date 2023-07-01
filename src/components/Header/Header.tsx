import React, { FC } from 'react';
import styles from './index.module.css';
import { Avatar } from '../Avatar';
import Logo from './logo.svg';
export const Header: FC = () => {
  return (
    <div className={styles.root}>
      <Logo className={styles.logo} />
      <Avatar size="large" />
    </div>
  );
};
