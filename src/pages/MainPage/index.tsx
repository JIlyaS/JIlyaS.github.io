import { useState } from 'react';
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
  const [operation, setOperation] = useState<Operation[]>(getOperationDataList(20));

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
          items={operation}
          onOpenEditModal={(id) => setOperationId(id)}
          onLoadMore={() => setOperation((prev) => [...prev, ...getOperationDataList(20)])}
        />
      </div>
      <Modal visible={isModalOpen} title="Создание операции" onClose={() => setIsModalOpen(false)}>
        <OperationForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </Layout>
  );
};
