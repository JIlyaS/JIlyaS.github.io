import { Modal } from './Modal';

export default {
  title: 'components/Modal',
  component: Modal,
  onClose: {
    type: 'func',
    description: 'Событие закрытия модального окна',
  },
};

const Template = (arg) => <Modal {...arg} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Модальное окно',
  children: 'Контентная часть',
  onClose: () => console.log('Закрыть модальное окно'),
};
