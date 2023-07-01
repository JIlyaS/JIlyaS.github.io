import { FC, useState } from 'react';

import { Layout } from '../layouts/Layout';

import './styles/index.scss';
import { Modal } from '../components';
import { CardBrief } from '../components';
import { CardFull } from '../components';
import { CategoryIcon } from '../components/Icons';

import { myOperation } from './operation';
import { myOperation2 } from './operation';

export const App: FC = () => {
  return (
    <Layout sidebar={<div>111</div>}>
      <Modal title="Модальное окно" onClose={() => console.log('123')}>
        123
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
  );
};

export default App;
