import { FC, ReactNode } from 'react';

import styles from './Layout.module.scss';

import { Header } from '../../components';

interface Props {
  children: ReactNode;
  sidebar?: ReactNode;
}

export const Layout: FC<Props> = ({ children, sidebar }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.layout_wrap}>
        {sidebar && <div className={styles.layout_sidebar}>{sidebar}</div>}
        <div className={styles.layout_content}>{children}</div>
      </div>
    </div>
  );
};
