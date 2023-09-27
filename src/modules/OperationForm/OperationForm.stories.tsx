import type { Meta, StoryObj } from '@storybook/react';
import { OperationForm } from './OperationForm';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'modules/OperationForm',
  component: OperationForm,
  tags: ['autodocs'],
  argTypes: {
    operation: {
      description: 'Текущая операция',
    },
    isOpen: {
      description: 'Состояние открытия модального окна',
    },
    onClose: {
      type: 'function',
      description: 'Событие закрытия модального окна',
    },
  },
} satisfies Meta<typeof OperationForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    operation: null,
    isOpen: false,
    onClose: action('onClose'),
  },
};
