import { FC, Suspense, useState } from 'react';

import { Layout } from '../layouts/Layout';

import { Modal, CardBrief, CardFull, CategoryIcon, Button } from '../components';

import { myOperation, myOperation2 } from './operation';
// import { useTranslation } from 'react-i18next';
import { LanguageProvider } from '../providers/i18n/LanguageProvider';

import './styles/index.scss';

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
  const [visible, setVisible] = useState(false);

  return (
    <Suspense fallback="">
      <LanguageProvider>
        <Layout sidebar={<div></div>}>
          <Button dimension="small" onClick={() => setVisible(true)}>
            Модальное окно
          </Button>
          <Modal visible={visible} title="Модальное окно" onClose={() => setVisible(false)}>
            Default children text
          </Modal>

          {myOperation.map((el) => (
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
          />
        </Layout>
      </LanguageProvider>
    </Suspense>
  );
};

export default App;
