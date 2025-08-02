import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';

type BreadcrumbProps = {
  items: { label: string; href: string }[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            <a href={item.href} className="text-sm font-medium text-gray-500 hover:text-gray-700">
              {item.label}
            </a>
            {index < items.length - 1 && (
              <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
