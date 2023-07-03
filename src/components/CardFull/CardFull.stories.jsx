import { CardFull } from './CardFull';
import CategoryIcon from '../Icons/CategoryIcon';
import './CardFull.module.scss';

export default {
  title: 'CardFull',
  component: CardFull,
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
    iconCategory: {
      type: 'string',
      options: ['shop', 'job', 'sport'],
      control: {
        type: 'radio',
      },
    },
  },
};

export const CardFullStory = (arg) => <CardFull {...arg} icon={<CategoryIcon {...arg} />} />;
CardFullStory.args = {
  summ: '100',
  category: 'Покупки',
  shortDescription: 'Продукты',
  description: 'Фрукты, рыба, хле',
  income: true,
};
