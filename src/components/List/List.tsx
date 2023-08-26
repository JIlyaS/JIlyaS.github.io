import { FC } from 'react';

import { Item } from './components';
import { useIntersectionObserver } from '../../hooks';

import type { Operation } from '@src/types/Operation';

import styles from './List.module.scss';

interface Props {
  title: string;
  items: Operation[];
  onLoadMore: () => void;
}

export const List: FC<Props> = ({ items, title, onLoadMore }) => {
  const targetRef = useIntersectionObserver(onLoadMore);

  return (
    <div className={styles.list}>
      <div className={styles.list_header}>
        <h3 className={styles.list_title}>{title}</h3>
        <div></div>
      </div>
      <div className={styles.list_items}>
        {items.map((item, index) => (
          <Item key={index} operation={item} />
        ))}
        <div className={styles.list_loadMore} ref={targetRef}></div>
      </div>
      <div className={styles.list_footer}></div>
    </div>
  );
};
