import styles from './CardFull.module.scss';
import classNames from 'classnames';
import { FullCardProps } from '../../types/CardType';
import { AiOutlineArrowUp, AiOutlineEdit } from 'react-icons/ai';

export const CardFull: React.FC<FullCardProps> = ({
  summ,
  category,
  description,
  date,
  onEditClick,
  income,
  icon,
  shortDescription,
}) => {
  return (
    <div className={styles.cardFull}>
      <div className={styles.cardTop}>
        <div className={classNames(styles.icon, income ? styles.green : styles.red)}>
          <i>{icon}</i>
        </div>
        <button className={styles.editButton} onClick={onEditClick}>
          <i>
            <AiOutlineEdit />
          </i>
        </button>
      </div>
      <div className={styles.cardMiddle}>
        <div className={styles.category}>{category}</div>
        <div className={classNames(styles.summ, income ? styles.green : styles.red)}>
          {' '}
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
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.shortDescription}>{shortDescription}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.date}>{date && date.toLocaleDateString()}</div>
      </div>
    </div>
  );
};
