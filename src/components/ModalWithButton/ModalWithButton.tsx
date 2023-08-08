import { FC, useState } from 'react';

import { Button, InputField, Modal } from '../';

import styles from './ModalWithButton.module.scss';

export const ModalWithButton: FC = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  return (
    <div className={styles.modalWithButton}>
      <InputField value={value} onChange={(value: string) => setValue(value)} />
      <Button onClick={() => setVisible(true)}>Модальное окно</Button>
      <Modal visible={visible} title="Модальное окно" onClose={() => setVisible(false)}>
        {value}
      </Modal>
    </div>
  );
};
