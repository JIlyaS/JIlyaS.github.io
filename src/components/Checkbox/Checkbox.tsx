import React, { FC } from 'react';

import styles from './Checkbox.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: React.ReactNode;
}

export const Checkbox: FC<Props> = ({ id, label, ...props }) => {
  return (
    <div className={styles.checkbox}>
      <input {...props} type="radio" id={id} className={styles.checkbox_element} />
      <label htmlFor={id} className={styles.checkbox_label}>
        {label}
      </label>
    </div>
  );
};
