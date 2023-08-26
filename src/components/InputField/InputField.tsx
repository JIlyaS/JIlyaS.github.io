import { FC } from 'react';
import classNames from 'classnames';

// import CloseIcon from '../../shared/assets/icons/cross-2.svg';

import styles from './InputField.module.scss';

interface Props {
  id?: string;
  label?: string;
  placeholder?: string;
  dimension?: 'normal' | 'small';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  value: string;
  onChange: (value: string) => void;
}

export const InputField: FC<Props> = ({
  id = 'default',
  label,
  placeholder,
  dimension = 'normal',
  value,
  onChange,
}) => {
  return (
    <div className={styles.input}>
      <input
        id={id}
        className={classNames(styles.input_element, {
          [styles.input_element__small]: dimension === 'small',
        })}
        placeholder={placeholder}
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
      {label && (
        <label htmlFor={id} className={styles.input_label}>
          {label}
        </label>
      )}
    </div>
  );
};
