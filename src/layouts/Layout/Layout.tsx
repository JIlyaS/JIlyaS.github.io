import { FC, ReactNode } from 'react';

import styles from './Layout.module.scss';

import { Header } from '../../components';
import { Outlet } from 'react-router-dom';

interface Props {
  sidebar?: ReactNode;
}

export const Layout: FC<Props> = ({ sidebar }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.layout_wrap}>
        {sidebar && <div className={styles.layout_sidebar}>{sidebar}</div>}
        <div className={styles.layout_content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
