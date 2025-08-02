import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

interface MenuProps {
  items: { name: string; href: string; current: boolean }[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <div className="flex space-x-4">
      {items.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={classNames(
            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'px-3 py-2 rounded-md text-sm font-medium'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
