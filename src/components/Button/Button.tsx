import cn from 'classnames';
import { FC, ReactNode } from 'react';

import LoadIcon from '../../shared/assets/icons/undo.svg';

import styles from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  dimension?: 'small' | 'medium' | 'normal';
  btnType?: 'primary' | 'secondary';
  type?: 'submit' | 'button' | 'reset';
  children: ReactNode;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onClick?: () => void;
}

export const Button: FC<Props> = ({
  children,
  dimension = 'normal',
  btnType = 'primary',
  loading,
  iconLeft,
  iconRight,
  onClick,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        styles.button,
        props.className,
        { [styles.button__small]: dimension === 'small' },
        { [styles.button__medium]: dimension === 'medium' },
        { [styles.button__secondary]: btnType === 'secondary' },
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
