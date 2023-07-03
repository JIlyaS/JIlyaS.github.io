import { CardBrief } from './CardBrief';
import CategoryIcon from '../Icons/CategoryIcon';
import './CardBrief.module.scss';

export default {
  title: 'CardBrief',
  component: CardBrief,
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

export const CardBriefStory = (arg) => <CardBrief {...arg} icon={<CategoryIcon {...arg} />} />;

CardBriefStory.args = {
  summ: '100',
  category: 'Покупки',
  shortDescription: 'Продукты',
  description: 'Фрукты, рыба, хле',
  income: true,
  date: new Date(),
  // iconCategory: 'shop',
};
