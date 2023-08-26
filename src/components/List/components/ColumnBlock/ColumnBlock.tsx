import { FC } from 'react';

import styles from './ColumnBlock.module.scss';

interface ColumnProps {
  title: string;
  subtitle: string;
}

export const ColumnBlock: FC<ColumnProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.columnBlock}>
      <div className={styles.columnBlock_title}>{title}</div>
      <div className={styles.columnBlock_subtitle}>{subtitle}</div>
    </div>
  );
};
