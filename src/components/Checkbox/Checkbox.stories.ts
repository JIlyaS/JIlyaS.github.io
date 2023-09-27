import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    id: {
      type: 'string',
      description: 'Идентификатор чекбокса',
    },
    isIcon: {
      type: 'boolean',
      description: 'Отображаем чекбоксы через иконку',
    },
    label: {
      description: 'Заголовок чекбокса',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'checkbox',
    label: 'Заголовок',
    isIcon: true,
  },
};
