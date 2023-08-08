import { FC } from 'react';
import styles from './ToggleTheme.module.scss';
import { useThemeContext, Theme } from '../../theming';
import IconInvertColor from '../../shared/assets/icons/invert-color.svg';
import IconBrightnessHigh from '../../shared/assets/icons/bulb.svg';

export const ToggleTheme: FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={theme !== Theme.light}
        id="chk"
        onChange={toggleTheme}
      />
      <label className={styles.label} htmlFor="chk">
        <IconBrightnessHigh className={styles.icon} />
        <IconInvertColor className={styles.icon} />
        <div className={styles.ball}></div>
      </label>
    </div>
  );
};
