import { useState } from 'react';

import { Tabs } from '../../components/Tabs';
import styles from './styles.module.scss';
import { LoginForm } from '../../modules/LoginForm';
import { RegistrationForm } from '../../modules/RegistrationForm';

export const AuthPage: React.FC = () => {
  const tabs = [
    { id: 'login', content: 'Войти' },
    { id: 'reg', content: 'Регистрация' },
  ];
  const [activeTab, setActiveTab] = useState<'login' | 'reg'>('login');

  const handleTabsChange = (id: 'login' | 'reg') => {
    setActiveTab(id);
  };

  return (
    <div className={styles.authPage}>
      <div className={styles.authPage_content}>
        <Tabs tabs={tabs} activeTab={activeTab} onChange={handleTabsChange} />
        <div className={styles.authPage_contentWrap}>
          {activeTab === 'login' && <LoginForm />}
          {activeTab === 'reg' && <RegistrationForm />}
        </div>
      </div>
    </div>
  );
};
