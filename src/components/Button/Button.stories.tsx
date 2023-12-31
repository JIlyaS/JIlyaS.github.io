import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

type Story = StoryObj<typeof Button>;

const meta = {
  title: 'components/Button',
  component: Button,
  argTypes: {
    dimension: {
      type: 'string',
      description: 'Размер кнопки',
    },
    btnType: {
      type: 'string',
      description: 'Формат кнопки',
    },
    type: {
      type: 'string',
      description: 'Тип кнопки',
    },
    loading: {
      type: 'boolean',
      description: 'Состояние загрузки кнопки',
    },
    iconLeft: {
      description: 'Иконка слева в кнопке',
    },
    iconRight: {
      description: 'Иконка справа в кнопке',
    },
    onClick: {
      type: 'function',
      description: 'Событие нажатия на кнопку',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Default = {
  args: {
    dimension: 'normal',
    btnType: 'primary',
    type: 'button',
    children: 'Кнопка',
    loading: false,
    onClick: action('onClick'),
    // iconLeft?: ReactNode;
    // iconRight?: ReactNode;
  },
} satisfies Story;

export const ButtonWithSecondary: Story = {
  args: {
    dimension: 'normal',
    btnType: 'secondary',
    type: 'button',
    children: 'Кнопка 2',
    loading: false,
    onClick: action('onClick'),
    // iconLeft?: ReactNode;
    // iconRight?: ReactNode;
  },
} satisfies Story;

export const ButtonWithSmall: Story = {
  args: {
    dimension: 'small',
    btnType: 'primary',
    type: 'button',
    children: 'Кнопка маленькая',
    loading: false,
    onClick: action('onClick'),
    // iconLeft?: ReactNode;
    // iconRight?: ReactNode;
  },
} satisfies Story;

export const ButtonWithMedium: Story = {
  args: {
    dimension: 'medium',
    btnType: 'primary',
    type: 'button',
    children: 'Кнопка средняя',
    loading: false,
    onClick: action('onClick'),
    // iconLeft?: ReactNode;
    // iconRight?: ReactNode;
  },
} satisfies Story;

export const ButtonWithLoading: Story = {
  args: {
    dimension: 'normal',
    btnType: 'primary',
    type: 'button',
    children: 'Кнопка с загрузкой',
    loading: true,
    onClick: action('onClick'),
    // iconLeft?: ReactNode;
    // iconRight?: ReactNode;
  },
} satisfies Story;
