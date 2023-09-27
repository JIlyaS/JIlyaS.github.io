import cn from 'classnames';

import styles from './TabNav.module.scss';

interface Props {
  id: string;
  navLabel: string;
  activeTab: string;
  onChangeActiveTab: (id: string) => void;
}

export const TabNav: React.FC<Props> = ({ id, navLabel, activeTab, onChangeActiveTab }) => {
  return (
    <button
      className={cn(styles.tabNav, { [styles.tabNav_active]: activeTab === id })}
      onClick={() => onChangeActiveTab(id)}
    >
      {navLabel}
    </button>
  );
};
