import { List } from './List';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { getOperationDataList } from '../../mock/mock';

type Story = StoryObj<typeof List>;

const meta = {
  title: 'components/List',
  component: List,
  argTypes: {
    title: {
      type: 'string',
      description: 'Заголовок списка',
    },
    items: {
      description: 'Список операций',
    },
    onLoadMore: {
      type: 'function',
      description: 'Событие подгрузки новых данных',
    },
  },
} satisfies Meta<typeof List>;

export default meta;

export const Default = {
  args: {
    title: 'Список операций',
    items: [...getOperationDataList(20)],
    onLoadMore: action('onLoadMore'),
  },
} satisfies Story;
