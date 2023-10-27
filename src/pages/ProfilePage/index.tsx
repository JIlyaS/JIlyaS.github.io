import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@src/store';
import { ProfileForm } from '../../modules/ProfileForm';
import { fetchProfile } from '@src/slices/profile';

import styles from './styles.module.scss';

export const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  return (
    <div className={styles.profilePage}>
      <div className={styles.profilePage_header}>
        <h3 className={styles.profilePage_title}>{t`content.profile.title`}</h3>
        <div></div>
      </div>
      <div className={styles.profilePage_wrap}>
        <div className={styles.profilePage_innerWrap}>
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};
