import cn from 'classnames';
import { FC, ReactNode } from 'react';

import LoadIcon from '../../shared/assets/icons/undo.svg';

import styles from './Button.module.scss';

interface Props {
  dimension?: 'small' | 'medium' | 'normal';
  type?: 'primary' | 'secondary';
  btnType?: 'submit' | 'button' | 'reset';
  children: ReactNode;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onClick: () => void;
}

export const Button: FC<Props> = ({
  children,
  type = 'primary',
  dimension = 'normal',
  btnType = 'button',
  loading,
  iconLeft,
  iconRight,
  onClick,
}) => {
  return (
    <button
      type={btnType}
      className={cn(
        styles.button,
        { [styles.button__small]: dimension === 'small' },
        { [styles.button__medium]: dimension === 'medium' },
        { [styles.button__secondary]: type === 'secondary' },
      )}
      onClick={onClick}
    >
      {loading ? (
        <LoadIcon />
      ) : (
        <div>
          {iconLeft && iconLeft}
          <span>{children}</span>
          {iconRight && iconRight}
        </div>
      )}
    </button>
  );
};