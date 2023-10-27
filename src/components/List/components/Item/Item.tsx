import { FC } from 'react';
import cn from 'classnames';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import ProfitIcon from '../../../../shared/assets/icons/profit-icon.svg';
import CostIcon from '../../../../shared/assets/icons/cost-icon.svg';
import ShopIcon from '../../../../shared/assets/icons/shop-icon.svg';

import { ColumnBlock } from '../ColumnBlock';

import { Operation } from '../../../../entities/operation';

import styles from './Item.module.scss';

interface Props {
  operation: Operation;
  onOpen: () => void;
}

export const Item: FC<Props> = ({ operation, onOpen }) => {
  return (
    <div className={styles.item} onClick={onOpen}>
      <div className={styles.item_col}>
        <div className={styles.item_colWrap}>
          <div className={styles.item_colIcon}>
            <ShopIcon />
          </div>
          <div>
            <ColumnBlock
              title={operation.name}
              subtitle={format(new Date(operation.createdAt), 'dd MMMM', {
                locale: ru,
              })}
            />
          </div>
        </div>
      </div>
      <div className={styles.item_col}>
        <ColumnBlock title={operation.amount.toString()} subtitle="Цена" />
      </div>
      <div className={styles.item_col}>
        <ColumnBlock title={operation?.desc} subtitle="Описание" />
      </div>
      <div className={styles.item_col}>
        <ColumnBlock title={operation.category?.name} subtitle="Тип операции" />
      </div>
      <div className={styles.item_col}>
        <div
          className={cn(styles.item_type, {
            [styles.item_type__cost]: operation.type === 'Cost',
            [styles.item_type__profit]: operation.type === 'Profit',
          })}
        >
          {operation.type === 'Profit' ? <ProfitIcon /> : <CostIcon />}
        </div>
      </div>
    </div>
  );
};
