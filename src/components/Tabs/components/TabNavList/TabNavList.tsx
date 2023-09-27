import styles from './TabNavList.module.scss';

interface Props {
  children: React.ReactNode;
}

export const TabNavList: React.FC<Props> = ({ children }) => {
  return <div className={styles.tabNavList}>{children}</div>;
};
