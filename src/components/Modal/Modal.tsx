import { FC, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import FocusLock from 'react-focus-lock';

import CloseIcon from '../../shared/assets/icons/cross-2.svg';

import styles from './Modal.module.scss';

interface Props {
  children: ReactNode;
  visible: boolean;
  title?: string;
  onClose: () => void;
}

export const Modal: FC<Props> = ({ children, visible, title, onClose }) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && visible) {
      onClose();
    }
  };

  useEffect(() => {
    // TODO: Костыль удаления прокрутки экрана на время открытия модального окна
    visible ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');

    document.addEventListener('keydown', onKeyDown, false);
    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  }, [visible]);

  const modal = (
    <div className={styles.modal} onClick={onClose}>
      <FocusLock>
        <div
          className={styles.modal_element}
          aria-modal
          aria-labelledby={title}
          tabIndex={-1}
          role="dialog"
        >
          <div className={styles.modal_header}>
            <h2 className={styles.modal_title}>{title}</h2>
            <button className={styles.modal_closeBtn} onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
          <div className={styles.modal_content}>{children}</div>
        </div>
      </FocusLock>
    </div>
  );

  return visible ? ReactDOM.createPortal(modal, document.body) : null;
};
