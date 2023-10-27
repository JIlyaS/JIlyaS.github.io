import { Operation } from '../entities/operation';
import { v4 as uuidv4 } from 'uuid';

export const createRandomOperation = (createdAt: Date, typeValue: number): Operation => {
  const operations: ['Cost', 'Profit'] = ['Cost', 'Profit'];

  return {
    id: uuidv4(),
    name: 'Пятёрочка',
    desc: 'Оплата товаров',
    createdAt: createdAt,
    updatedAt: createdAt,
    amount: 500,
    category: {
      id: uuidv4(),
      name: 'Продукты',
      photo: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    type: operations[typeValue],
  };
};

export const getOperationDataList = (count: number) => {
  const randomTypeValue = Math.round(Math.random());
  return new Array(count).fill(createRandomOperation(new Date(), randomTypeValue));
};
