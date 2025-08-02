import React from 'react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  const notificationStyles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  };

  return (
    <div className={`fixed top-0 right-0 m-4 p-4 rounded shadow-lg text-white ${notificationStyles[type]}`} role="alert" aria-live="assertive">
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 focus:outline-none" aria-label="Close notification">
        &times;
      </button>
    </div>
  );
};

export default Notification;