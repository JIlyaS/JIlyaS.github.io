import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Checkbox.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  isIcon?: boolean;
  label: React.ReactNode;
}

export const Checkbox: FC<Props> = ({ id, label, isIcon, ...props }) => {
  return (
    <div className={cn(styles.checkbox, { [styles.checkbox__icon]: isIcon })}>
      <input {...props} type="radio" id={id} className={styles.checkbox_element} />
      <label htmlFor={id} className={styles.checkbox_label}>
        {label}
      </label>
    </div>
  );
};
