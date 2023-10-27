import { FC } from 'react';

import { Item } from './components';
import { useIntersectionObserver } from '../../hooks';

import { Operation } from '../../entities/operation';

import styles from './List.module.scss';

interface Props {
  title: string;
  items: Operation[];
  onLoadMore?: () => void;
  onOpenEditModal: (id: string) => void;
}

export const List: FC<Props> = ({ items, title, onLoadMore, onOpenEditModal }) => {
  const targetRef = useIntersectionObserver(onLoadMore);

  return (
    <div className={styles.list}>
      <div className={styles.list_header}>
        <h3 className={styles.list_title}>{title}</h3>
        <div></div>
      </div>
      <div className={styles.list_items}>
        {items.length ? (
          items.map((item) => (
            <Item key={item.id} operation={item} onOpen={() => onOpenEditModal(item.id)} />
          ))
        ) : (
          <div className={styles.list_empty}>Список пуст</div>
        )}
        <div className={styles.list_loadMore} ref={targetRef}></div>
      </div>
      <div className={styles.list_footer}></div>
    </div>
  );
};
