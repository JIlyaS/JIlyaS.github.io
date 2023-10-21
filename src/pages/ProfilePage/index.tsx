import { useAppDispatch } from '@src/store';
import { ProfileForm } from '../../modules/ProfileForm';
import styles from './styles.module.scss';
import { useEffect } from 'react';
import { fetchProfile } from '@src/slices/profile';

export const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  return (
    <div className={styles.profilePage}>
      <div className={styles.profilePage_header}>
        <h3 className={styles.profilePage_title}>Профиль</h3>
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
