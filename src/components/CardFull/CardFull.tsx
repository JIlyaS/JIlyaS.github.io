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
      <div className={styles.cardFull__cardTop}>
        <div
          className={classNames(
            styles.cardFull__icon,
            income ? styles.cardFull_green : styles.cardFull_red,
          )}
        >
          {icon}
        </div>
        <button className={styles.cardFull__editButton} onClick={onEditClick}>
          <AiOutlineEdit />
        </button>
      </div>
      <div className={styles.cardFull__cardMiddle}>
        <div className={styles.cardFull__category}>{category}</div>
        <div
          className={classNames(
            styles.cardFull__summ,
            income ? styles.cardFull_green : styles.cardFull_red,
          )}
        >
          <AiOutlineArrowUp
            className={classNames(
              styles.cardFull__icon,
              income ? styles.cardFull_green : (styles.cardFull_red, styles.cardFull_arrowDown),
            )}
          />
          {summ}
        </div>
      </div>
      <div className={styles.cardFull__cardBottom}>
        <div className={styles.cardFull__shortDescription}>{shortDescription}</div>
        <div className={styles.cardFull__description}>{description}</div>
        <div className={styles.cardFull__date}>{date && date.toLocaleDateString()}</div>
      </div>
    </div>
  );
};
