import React, { FC } from 'react';
import styles from './Header.module.scss';
import { Avatar } from '../Avatar';
import { ToggleTheme } from '../ToggleTheme';
import Logo from './logo.svg';

export const Header: FC = () => {
  return (
    <div className={styles.root}>
      <Logo className={styles.logo} />
      <div className={styles.content}>
        <ToggleTheme />
      </div>
      <Avatar />
    </div>
  );
};
