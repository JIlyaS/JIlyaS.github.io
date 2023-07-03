import React, { FC } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

interface IAvatarProps {
  src?: string;
}
export const Avatar: FC<IAvatarProps> = ({ src }) => {
  return src ? (
    <img src={src} alt="avatar" className={cn(styles.avatar, styles['avatar-active'])} />
  ) : (
    <div className={cn(styles.avatar, styles['avatar-empty'])} />
  );
};
