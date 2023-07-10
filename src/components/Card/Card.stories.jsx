import { Card } from './Card';
import CategoryIcon from '../Icons/CategoryIcon';
import './Card.module.scss';

export default {
  title: 'components/Card',
  component: Card,
  argTypes: {
    income: {
      type: 'boolean',
      description: 'Изменение состояния',
      options: [true, false],
      control: {
        type: 'radio',
      },
    },
    category: {
      type: 'string',
      description: 'Изменение названия категории',
      options: ['Покупки', 'Зарплата', 'Спорт'],
      control: {
        type: 'radio',
      },
    },
    date: {
      type: 'string',
    },
    iconCategory: {
      type: 'string',
      options: ['shop', 'job', 'sport'],
      control: {
        type: 'radio',
      },
    },
  },
};

export const CardStory = (arg) => <Card {...arg} icon={<CategoryIcon {...arg} />} />;

CardStory.args = {
  summ: '100',
  category: 'Покупки',
  shortDescription: 'Продукты',
  description: 'Фрукты, рыба, хле',
  income: true,
  date: new Date(),
};
