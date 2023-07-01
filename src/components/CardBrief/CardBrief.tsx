import styles from './CardBrief.module.scss';
import classNames from 'classnames';
import { CardBriefProps } from '../../types/CardType';
import { AiOutlineArrowUp } from 'react-icons/ai';

export const CardBrief: React.FC<CardBriefProps> = ({
  summ,
  category,
  description,
  icon,
  income,
  shortDescription,
}) => {
  return (
    <div>
      <div className={styles.cardBrief}>
        <div className={styles.category}>
          <div className={classNames(styles.icon, income ? styles.green : styles.red)}>
            <i>{icon}</i>
          </div>
          {category}
        </div>
        <div className={classNames(styles.summ, income ? styles.green : styles.red)}>
          <i
            className={classNames(
              styles.icon,
              income ? styles.green : (styles.red, styles.arrowDown),
            )}
          >
            <AiOutlineArrowUp />
          </i>
          {summ}
        </div>
        <div className={styles.shortDescription}>
          {shortDescription && (
            <div className={styles.shortDescription}>{shortDescription.slice(0, 10) + '...'}</div>
          )}
        </div>
        {description && (
          <div className={styles.description}>{description.slice(0, 20) + '...'}</div>
        )}
      </div>
    </div>
  );
};
