import React, { FC } from 'react';
import cn from 'classnames';
import styles from './index.module.css';

type AvatarSize = 'small' | 'medium' | 'large';
const mapSizeAvatar: Record<AvatarSize, string> = {
  small: '16px',
  medium: '24px',
  large: '62px',
};
interface IAvatarProps {
  src?: string;
  size?: AvatarSize;
}
export const Avatar: FC<IAvatarProps> = ({ size = 'medium', src }) => {
  return src ? (
    <img
      src={src}
      alt="avatar"
      className={cn(styles.avatar, styles.avatarActive)}
      style={{ width: mapSizeAvatar[size], height: mapSizeAvatar[size], borderRadius: '50%' }}
    />
  ) : (
    <div
      className={cn(styles.avatar, styles.avatarEmpty)}
      style={{ width: mapSizeAvatar[size], height: mapSizeAvatar[size] }}
    />
  );
};
