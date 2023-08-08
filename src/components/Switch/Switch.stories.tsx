import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'components/Switch',
  component: Switch,
  argTypes: {
    id: {
      type: 'string',
      description: 'Идентификатор переключателя',
    },
    dimension: {
      type: 'string',
      description: 'Размер переключателя',
    },
    label: {
      type: 'string',
      description: 'Заголовок',
    },
    value: {
      type: 'boolean',
      description: 'Состояние переключение Свитча',
    },
    onChange: {
      type: 'function',
      description: 'Событие переключения',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'custom',
    value: false,
    onChange: action('onChange'),
  },
} satisfies Story;

export const SwitchWithSmall: Story = {
  args: {
    id: 'custom',
    dimension: 'small',
    value: false,
    onChange: action('onChange'),
  },
} satisfies Story;

export const SwitchWithLabel: Story = {
  args: {
    id: 'custom',
    label: 'Заголовок',
    value: false,
    onChange: action('onChange'),
  },
} satisfies Story;
