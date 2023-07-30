import { FC, ReactNode } from 'react';

// import CloseIcon from '../../shared/assets/icons/cross-2.svg';

import styles from './InputField.module.scss';

interface Props {
  // children: ReactNode;
  // title?: string;
  // onClose: () => void;
  id?: string;
  label?: string;
  placeholder?: string;
  dimention?: 'normal' | 'small' | 'medium';
  error: any;
  value: string;
  onChange: (value: string) => void;
}

export const InputField: FC<Props> = ({
  id,
  label,
  placeholder,
  dimention = 'normal',
  value,
  onChange,
}) => {
  return (
    <div className={styles.inputWrap}>
      {label && <label>{label}</label>}
      <input className={styles.input} placeholder={placeholder} />
      {/* <div className={styles.modal_element}>
        <div className={styles.modal_header}>
          <h2 className={styles.modal_title}>{title}</h2>
          <button className={styles.modal_closeBtn} onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className={styles.modal_content}>{children}</div>
      </div> */}
    </div>
  );
};
