import type { Operation } from '@src/types/Operation';
import { v4 as uuidv4 } from 'uuid';

export const createRandomOperation = (createdAt: Date, typeValue: number): Operation => {
  const operations: ['COST', 'PROFIT'] = ['COST', 'PROFIT'];

  return {
    id: uuidv4(),
    title: 'Пятёрочка',
    description: 'Оплата товаров',
    createdAt: createdAt,
    price: 500,
    category: {
      id: uuidv4(),
      title: 'Еда',
      type: 'SHOP',
    },
    type: operations[typeValue],
  };
};

export const getOperationDataList = (count: number) => {
  const randomTypeValue = Math.round(Math.random());
  return new Array(count).fill(createRandomOperation(new Date(), randomTypeValue));
};