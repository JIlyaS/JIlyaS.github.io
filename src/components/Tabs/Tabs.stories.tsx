import { Tabs } from './Tabs';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

type Story = StoryObj<typeof Tabs>;

const meta = {
  title: 'components/Tabs',
  component: Tabs,
  argTypes: {
    className: {
      type: 'string',
      description: 'Класс для стилизации',
    },
    tabs: {
      description: 'Объект с данными табов',
    },
    activeTab: {
      type: 'string',
      description: 'Активный таб',
    },
    onChange: {
      type: 'function',
      description: 'Событие изменения таба',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

export const Default = {
  args: {
    className: '',
    tabs: [
      { id: 'login', content: 'Войти' },
      { id: 'reg', content: 'Регистрация' },
    ],
    activeTab: 'login',
    onChange: action('onChange'),
  },
} satisfies Story;
