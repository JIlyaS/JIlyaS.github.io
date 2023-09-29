import { ProfileForm } from '../../modules/ProfileForm';
import styles from './styles.module.scss';

export const ProfilePage: React.FC = () => {
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
