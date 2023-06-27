import { FC, ReactNode } from 'react';

import CloseIcon from '../../shared/assets/icons/cross-2.svg';

import styles from "./Modal.module.scss";

interface Props {
  children: ReactNode;
  title?: string;
  onClose: () => void;
}

export const Modal: FC<Props> = ({ children, title, onClose }) => {
  return <div className={styles.modal}>
    <div className={styles.modal_element}>
      <div className={styles.modal_header}>
        <h2 className={styles.modal_title}>{title}</h2>
        <button className={styles.modal_closeBtn} onClick={onClose}><CloseIcon /></button>
      </div>
      <div className={styles.modal_content}>
        {children}
      </div>
    </div>
  </div>
}