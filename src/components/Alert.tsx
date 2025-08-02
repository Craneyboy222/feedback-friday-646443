import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  description?: string;
}

const Alert: React.FC<AlertProps> = ({ type, message, description }) => {
  const alertStyles = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800',
  };

  return (
    <div className={`rounded-md p-4 ${alertStyles[type]}`} role="alert" aria-live="assertive">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationCircleIcon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium">{message}</h3>
          {description && <div className="mt-2 text-sm">{description}</div>}
        </div>
      </div>
    </div>
  );
};

export default Alert;