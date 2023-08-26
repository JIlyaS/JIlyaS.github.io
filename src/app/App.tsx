import { FC, Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '../layouts/Layout';

import { List } from '../components';

import { LanguageProvider } from '../providers/i18n/LanguageProvider';

import './styles/index.scss';

import styles from './App.module.scss';
import { getOperationDataList } from '../mock/mock';
import { Operation } from '@src/types/Operation';

// const Component = () => {
//   const { t, i18n } = useTranslation();

//   const toggle = () => {
//     i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
//   };

//   return (
//     <div>
//       <div>{t('Тестовый пример')}</div>
//       <button onClick={toggle}>{t('Перевод')}</button>
//     </div>
//   );
// };

export const App: FC = () => {
  // const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  const [operation, setOperation] = useState<Operation[]>(getOperationDataList(20));

  return (
    <Suspense fallback="">
      <LanguageProvider>
        <Layout sidebar={<div></div>}>
          {/* <Button dimension="small" onClick={() => setVisible(true)}>
            Модальное окно
          </Button>
          <Modal visible={visible} title="Модальное окно" onClose={() => setVisible(false)}>
            Default children text
          </Modal> */}
          <div className={styles.main}>
            <List
              title={t`content.operation.title`}
              items={operation}
              onLoadMore={() => setOperation((prev) => [...prev, ...getOperationDataList(20)])}
            />
          </div>

          {/* {myOperation.map((el) => (
            <CardBrief
              summ={el.summ}
              category={el.category}
              description={el.description}
              icon={<CategoryIcon iconCategory={el.name} />}
              name={el.name}
              income={el.income}
              shortDescription={el.shortDescription}
              key={el.name}
            />
          ))}

          <CardFull
            summ={myOperation2.summ}
            category={myOperation2.category}
            shortDescription={myOperation2.shortDescription}
            description={myOperation2.description}
            date={myOperation2.date ? myOperation2.date : new Date()}
            onEditClick={myOperation2.onEditClick}
            name={myOperation2.name}
            income={myOperation2.income}
            icon={<CategoryIcon iconCategory={myOperation2.name} />}
          /> */}
        </Layout>
      </LanguageProvider>
    </Suspense>
  );
};

export default App;
