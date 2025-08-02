import { useEffect } from 'react';

interface NotificationOptions {
  body?: string;
  icon?: string;
  onClick?: () => void;
}

export const useNotification = (title: string, options: NotificationOptions) => {
  useEffect(() => {
    if (!('Notification' in window)) {
      console.error('This browser does not support notifications.');
      return;
    }

    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  const showNotification = () => {
    if (Notification.permission === 'granted') {
      const notification = new Notification(title, options);
      notification.onclick = options.onClick || (() => {});
    }
  };

  return showNotification;
};