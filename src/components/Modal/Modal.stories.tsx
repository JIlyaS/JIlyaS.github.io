import { Modal } from './Modal';
import type { Meta, StoryObj } from "@storybook/react";
import { action } from '@storybook/addon-actions';

type Story = StoryObj<typeof Modal>;

const meta = {
  title: 'components/Modal',
  component: Modal,
  argTypes: {
    title: {
      type: 'string',
      description: 'Заголовок модального окна'
    },
    onClose: {
      type: 'function',
      description: 'Событие закрытия модального окна',
    },
  }
} satisfies Meta<typeof Modal>;

export default meta;

export const Default = {
  args: {
    title: 'Модальное окно',
    children: 'Контентная часть',
    onClose: action('onClose'),
  }
} satisfies Story;

// export default {
//   title: 'components/Modal',
//   component: Modal,
//   argTypes: {
//     onClose: {
//       type: 'func',
//       description: 'Событие закрытия модального окна',
//     },
//   }
// };

// const Template: Story = (arg) => <Modal {...arg} />;

// export const Default = Template.bind({});

// Default.args = {
//   title: 'Модальное окно',
//   children: 'Контентная часть',
//   onClose: () => console.log('Закрыть модальное окно'),
// };
