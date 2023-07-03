import React, { FC } from 'react';
import { BsPersonWorkspace } from 'react-icons/bs';
import { PiShoppingCartSimpleDuotone } from 'react-icons/pi';
import { MdOutlineSportsHandball } from 'react-icons/md';

interface CategoryIconProps {
  iconCategory: string;
  size?: number;
  color?: string;
}

const CategoryIcon: FC<CategoryIconProps> = ({ iconCategory }) => {
  let IconComponent: JSX.Element;
  switch (iconCategory) {
    case 'shop':
      IconComponent = <PiShoppingCartSimpleDuotone />;
      break;
    case 'job':
      IconComponent = <BsPersonWorkspace />;
      break;
    case 'sport':
      IconComponent = <MdOutlineSportsHandball />;
      break;
    default:
      IconComponent = <div>Unknown CategoryIcon</div>;
      break;
  }

  return <>{IconComponent}</>;
};
export default CategoryIcon;
