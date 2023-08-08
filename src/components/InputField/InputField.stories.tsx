import { InputField } from './InputField';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

type Story = StoryObj<typeof InputField>;

const meta = {
  title: 'components/InputField',
  component: InputField,
  argTypes: {
    id: {
      type: 'string',
      description: 'Идентификатор текстового поля',
    },
    label: {
      type: 'string',
      description: 'Заголовок поля',
    },
    placeholder: {
      type: 'string',
      description: 'Маска поля',
    },
    dimension: {
      type: 'string',
      description: 'Размер текстового поля',
    },
    value: {
      type: 'string',
      description: 'Значение поля',
    },
    onChange: {
      type: 'function',
      description: 'Событие изменения текстового поля',
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;

export const Default = {
  args: {
    label: 'Заголовок',
    value: '',
    onChange: action('onChange'),
  },
} satisfies Story;

export const ButtonWithSmall: Story = {
  args: {
    dimension: 'small',
    label: 'Заголовок',
    value: '',
    onChange: action('onChange'),
  },
} satisfies Story;

export const ButtonWithPlaceholder: Story = {
  args: {
    dimension: 'small',
    label: 'Заголовок',
    value: '',
    placeholder: 'Текст',
    onChange: action('onChange'),
  },
} satisfies Story;
