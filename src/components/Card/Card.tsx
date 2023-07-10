import styles from './Card.module.scss';
import classNames from 'classnames';

import { CardProps } from 'types/CardType';
import { AiOutlineArrowUp } from 'react-icons/ai';

export const Card: React.FC<CardProps> = ({
  summ,
  category,
  description,
  icon,
  income,
  shortDescription,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__category}>
        <div
          className={classNames(styles.card__icon, income ? styles.card_green : styles.card_red)}
        >
          {icon}
        </div>
        {category}
      </div>
      <div className={classNames(styles.card__summ, income ? styles.card_green : styles.card_red)}>
        <AiOutlineArrowUp
          className={classNames(
            styles.card__icon,
            income ? styles.card_green : (styles.card_red, styles.card_arrowDown),
          )}
        />
        {summ}
      </div>
      <div className={styles.card__shortDescription}>
        {shortDescription && (
          <div className={styles.card__shortDescription}>{shortDescription}</div>
        )}
      </div>
      {description && <div className={styles.card__description}>{description}</div>}
    </div>
  );
};
