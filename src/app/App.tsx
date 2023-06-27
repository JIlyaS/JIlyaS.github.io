import { FC } from 'react';

import { Layout } from '../layouts/Layout';

import './styles/index.scss';
import { Modal } from '../components';

export const App: FC = () => {
  return <Layout sidebar={<div>111</div>}>
    <Modal title="Модальное окно" onClose={() => console.log('123')}>123</Modal>
  </Layout>
}

export default App;
