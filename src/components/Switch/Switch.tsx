import React from 'react';
import classNames from 'classnames';

import styles from './Switch.module.scss';

interface Props {
  id?: string;
  dimension?: 'small' | 'normal';
  label?: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const Switch: React.FC<Props> = ({ id = 'default', dimension, label, value, onChange }) => {
  return (
    <div className={classNames(styles.switch, { [styles.switch__small]: dimension === 'small' })}>
      <input
        className={styles.switch_input}
        id={`switch-${id}`}
        type="checkbox"
        checked={value}
        onChange={(evt) => onChange(evt.target.checked)}
      />
      <label
        className={classNames(styles.switch_labelButton, {
          [styles.switch_labelButton__active]: value,
        })}
        htmlFor={`switch-${id}`}
      >
        <span className={styles.switch_button} />
      </label>
      <label className={styles.switch_label} htmlFor={`switch-${id}`}>
        {label}
      </label>
    </div>
  );
};

export default Switch;
