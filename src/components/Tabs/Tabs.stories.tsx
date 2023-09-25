import cn from 'classnames';

interface Props {
  navLabel: string;
  className: string;
  onChangeActiveTab: (label: string) => void;
}

export const TabBarNav: React.FC<Props> = ({ navLabel, className, onChangeActiveTab }) => {
  const classes = cn('nav-item', className);

  return (
    <button className={classes} onClick={() => onChangeActiveTab(navLabel)}>
      {navLabel}
    </button>
  );
};
