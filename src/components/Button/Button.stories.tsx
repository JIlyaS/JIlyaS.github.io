import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

type Story = StoryObj<typeof Button>;

const meta = {
  title: 'components/Button',
  component: Button,
  argTypes: {
    dimention: {
      type: 'string',
      description: 'Размер кнопки',
    },
    type: {
      type: 'string',
      description: 'Формат кнопки',
    },
    btnType: {
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
    dimention: 'normal',
    type: 'primary',
    btnType: 'button',
    children: 'Кнопка',
    loading: false,
    onClick: action('onClick'),
    // iconLeft?: ReactNode;
    // iconRight?: ReactNode;
  },
} satisfies Story;

export const ButtonWithSecondary: Story = {
  args: {
    dimention: 'normal',
    type: 'secondary',
    btnType: 'button',
    children: 'Кнопка 2',
    loading: false,
    onClick: action('onClick'),
    // iconLeft?: ReactNode;
    // iconRight?: ReactNode;
  },
} satisfies Story;

export const ButtonWithSmall: Story = {
  args: {
    dimention: 'small',
    type: 'primary',
    btnType: 'button',
    children: 'Кнопка маленькая',
    loading: false,
    onClick: action('onClick'),
    // iconLeft?: ReactNode;
    // iconRight?: ReactNode;
  },
} satisfies Story;

export const ButtonWithMedium: Story = {
  args: {
    dimention: 'medium',
    type: 'primary',
    btnType: 'button',
    children: 'Кнопка средняя',
    loading: false,
    onClick: action('onClick'),
    // iconLeft?: ReactNode;
    // iconRight?: ReactNode;
  },
} satisfies Story;

export const ButtonWithLoading: Story = {
  args: {
    dimention: 'normal',
    type: 'primary',
    btnType: 'button',
    children: 'Кнопка с загрузкой',
    loading: true,
    onClick: action('onClick'),
    // iconLeft?: ReactNode;
    // iconRight?: ReactNode;
  },
} satisfies Story;
