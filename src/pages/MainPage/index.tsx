import { useContext, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, List, Modal } from '../../components';
import { OperationForm } from '../../modules/OperationForm';

import { getOperationDataList } from '../../mock/mock';
import { Operation } from '../../types/operation';

import styles from './styles.module.scss';
import { AuthContext } from '@src/providers/auth/AuthContext';

export const MainPage: React.FC = () => {
  const [operationId, setOperationId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const [operations, setOperations] = useState<Operation[]>(getOperationDataList(20));
  const isLoggedIn = useContext(AuthContext);

  console.log('isLoggedIn', isLoggedIn);

  const handleOpenModal = (id: string) => {
    setOperationId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setOperationId(null);
  };

  const currentOperation = useMemo(
    () => operations.find((item) => item.id === operationId),
    [operations, operationId],
  );

  return (
    <div>
      <div className={styles.mainPage}>
        <div className={styles.mainPage_header}>
          {isLoggedIn && (
            <Button dimension="medium" onClick={() => setIsModalOpen(true)}>
              Создать
            </Button>
          )}
        </div>
        <List
          title={t`content.operation.title`}
          items={operations}
          onOpenEditModal={handleOpenModal}
          onLoadMore={() => setOperations((prev) => [...prev, ...getOperationDataList(20)])}
        />
      </div>
      <Modal
        visible={isModalOpen}
        title={operationId ? 'Редактирование операции' : 'Создание операции'}
        onClose={handleCloseModal}
      >
        <OperationForm
          operation={currentOperation}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </Modal>
    </div>
  );
};
