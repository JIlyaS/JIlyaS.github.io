import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '../../layouts/Layout';

import { Button, List, Modal } from '../../components';
import { OperationForm } from '../../modules/OperationForm';

import { getOperationDataList } from '../../mock/mock';
import { Operation } from '../../types/Operation';

import styles from './styles.module.scss';

export const MainPage: React.FC = () => {
  const [operationId, setOperationId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const [operations, setOperations] = useState<Operation[]>(getOperationDataList(20));

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
    <Layout sidebar={<div></div>}>
      <div className={styles.mainPage}>
        <div className={styles.mainPage_header}>
          <Button dimension="medium" onClick={() => setIsModalOpen(true)}>
            Создать
          </Button>
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
    </Layout>
  );
};
