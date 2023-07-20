import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import LoadIcon from '../../shared/assets/icons/undo.svg';

import styles from './Button.module.scss';

interface Props {
  dimention?: 'small' | 'medium' | 'normal';
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
  dimention = 'normal',
  btnType = 'button',
  loading,
  iconLeft,
  iconRight,
  onClick,
}) => {
  return (
    <button
      type={btnType}
      className={classNames(
        styles.button,
        { [styles.button__small]: dimention === 'small' },
        { [styles.button__medium]: dimention === 'medium' },
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
