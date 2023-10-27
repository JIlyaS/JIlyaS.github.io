import React, { FC, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { useAppDispatch } from '@src/store';
import { logout } from '@src/slices/auth';

import { Avatar } from '../Avatar';
import { LanguageContext } from '../../providers/i18n/LanguageProvider';
import { Switch } from '../Switch';
import { ToggleTheme } from '../ToggleTheme';
import { AuthContext } from '@src/providers/auth/AuthContext';
import { Button } from '../Button';

import Logo from './logo.svg';

import styles from './Header.module.scss';

export const Header: FC = () => {
  const { lang, toggleLanguage } = useContext(LanguageContext);
  const isLoggedIn = useContext(AuthContext);
  const dispatch = useAppDispatch();

  const [switchLanguage, setSwitchLanguage] = useState(lang === 'ru' ? false : true);
  const { t } = useTranslation();

  const handleLanguageChange = () => {
    setSwitchLanguage(() => !switchLanguage);
    toggleLanguage();
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.header}>
      <Logo className={styles.header_logo} />
      <div className={styles.header_content}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(styles.header_link, { [styles.header_link__active]: isActive })
          }
        >
          {t`header.route.main`}
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              cn(styles.header_link, { [styles.header_link__active]: isActive })
            }
          >
            {t`header.route.profile`}
          </NavLink>
        )}
        {isLoggedIn ? (
          <Button dimension="small" btnType="secondary" onClick={handleLogoutClick}>
            {t`header.btnGroup.logout`}
          </Button>
        ) : (
          <NavLink
            to="/auth"
            className={({ isActive }) =>
              cn(styles.header_link, { [styles.header_link__active]: isActive })
            }
          >
            {t`header.btnGroup.login`}
          </NavLink>
        )}
      </div>
      <div className={styles.header_rightBlock}>
        <Switch
          value={switchLanguage}
          dimension="small"
          label={t`header.language`}
          onChange={handleLanguageChange}
        />
        <ToggleTheme />
        <Avatar />
      </div>
    </div>
  );
};
