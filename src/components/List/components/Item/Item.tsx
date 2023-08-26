import { FC } from 'react';
import cn from 'classnames';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import IncomeIcon from '../../../../shared/assets/icons/income-icon.svg';
import ExpenseIcon from '../../../../shared/assets/icons/expense-icon.svg';
import ShopIcon from '../../../../shared/assets/icons/shop-icon.svg';

import type { Operation } from '@src/types/Operation';

import styles from './Item.module.scss';
import { ColumnBlock } from '../ColumnBlock';

interface Props {
  operation: Operation;
}

export const Item: FC<Props> = ({ operation }) => {
  return (
    <div className={styles.item}>
      <div className={styles.item_col}>
        <div className={styles.item_colWrap}>
          <div className={styles.item_colIcon}>
            <ShopIcon />
          </div>
          <div>
            <ColumnBlock
              title={operation.title}
              subtitle={format(operation.createdAt, 'dd MMMM', {
                locale: ru,
              })}
            />
          </div>
        </div>
      </div>
      <div className={styles.item_col}>
        <ColumnBlock title={operation.price.toString()} subtitle="Цена" />
      </div>
      <div className={styles.item_col}>
        <ColumnBlock title={operation.description} subtitle="Описание" />
      </div>
      <div className={styles.item_col}>
        <ColumnBlock title={operation.category.title} subtitle="Тип операции" />
      </div>
      <div className={styles.item_col}>
        <div
          className={cn(styles.item_type, {
            [styles.item_type__cost]: operation.type === 'COST',
            [styles.item_type__profit]: operation.type === 'PROFIT',
          })}
        >
          {operation.type === 'PROFIT' ? <IncomeIcon /> : <ExpenseIcon />}
        </div>
      </div>
    </div>
  );
};
