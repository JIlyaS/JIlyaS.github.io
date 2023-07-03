import React, { FC } from 'react';
import styles from './index.module.scss';
import { Avatar } from '../Avatar';
import Logo from './logo.svg';
export const Header: FC = () => {
  return (
    <div className={styles.root}>
      <Logo />
      <Avatar />
    </div>
  );
};
