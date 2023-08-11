import React, { FC } from 'react';
import cn from 'classnames';
import styles from './Title.module.scss';

export type TitleProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactElement | React.ReactNode;
  required?: boolean;
};

export const Title: FC<TitleProps> = ({ className, required, ...props }) => (
  <div {...props} className={cn(styles.root, required && styles.required, className)} />
);
