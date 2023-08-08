import React, { FC, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Avatar } from '../Avatar';
import { LanguageContext } from '../../providers/i18n/LanguageProvider';
import { Switch } from '../Switch';

import Logo from './logo.svg';

import styles from './Header.module.scss';

export const Header: FC = () => {
  const { lang, toggleLanguage } = useContext(LanguageContext);

  const [switchLanguage, setSwitchLanguage] = useState(lang === 'ru' ? false : true);
  const { t } = useTranslation();

  const handleLanguageChange = () => {
    setSwitchLanguage(() => !switchLanguage);
    toggleLanguage();
  };

  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.header_rightBlock}>
        <Switch
          value={switchLanguage}
          dimension="small"
          label={t`header.language`}
          onChange={handleLanguageChange}
        />
        <Avatar />
      </div>
    </div>
  );
};
