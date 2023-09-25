import cn from 'classnames';
import { TabNav, TabNavList } from './components';

import styles from './Tabs.module.scss';

interface ITab {
  id: string;
  content: string;
}

interface Props {
  className?: string;
  tabs: ITab[];
  activeTab: string;
  onChange: (id: string) => void;
}

export const Tabs: React.FC<Props> = ({ tabs, className, activeTab, onChange }) => {
  const classes = cn(styles.tabs, className);

  return (
    <div className={classes}>
      <TabNavList>
        {tabs.map((tab) => (
          <TabNav
            key={tab.id}
            activeTab={activeTab}
            id={tab.id}
            navLabel={tab.content}
            onChangeActiveTab={onChange}
          />
        ))}
      </TabNavList>
    </div>
  );
};
