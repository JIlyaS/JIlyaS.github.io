import { FC } from 'react';
import cn from 'classnames';

// import CloseIcon from '../../shared/assets/icons/cross-2.svg';

import styles from './InputField.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  placeholder?: string;
  dimension?: 'normal' | 'small';
  isInnerLabel?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extraError?: any;
  value: string;
  // onChange: (evt: string) => void;
}

export const InputField: FC<Props> = ({
  id = 'default',
  label,
  placeholder,
  dimension = 'normal',
  isInnerLabel = false,
  extraError,
  required,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className={styles.input}>
      <input
        {...props}
        id={id}
        className={cn(styles.input_element, {
          [styles.input_element__small]: dimension === 'small',
          [styles.input_element__inner]: isInnerLabel,
          [styles.input_element__error]: extraError,
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {label && (
        <label
          htmlFor={id}
          className={cn(styles.input_label, { [styles.input_label__inner]: isInnerLabel })}
        >
          <span>{label}</span>
          &nbsp;
          {required && <span className={cn({ [styles.input_required]: required })}>*</span>}
        </label>
      )}
      {extraError && <div className={styles.input_error}>{extraError}</div>}
    </div>
  );
};
