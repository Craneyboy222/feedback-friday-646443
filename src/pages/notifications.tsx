import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/notifications')
      .then(response => {
        setNotifications(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const markAsRead = (id) => {
    axios.put(`/api/notifications/${id}`)
      .then(() => {
        setNotifications(notifications.map(notification =>
          notification.id === id ? { ...notification, read_status: true } : notification
        ));
      })
      .catch(error => setError(error));
  };

  return (
    <>
      <Head>
        <title>Notifications</title>
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900">Notifications</h1>
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : error ? (
            <p className="text-red-600">Error loading notifications</p>
          ) : notifications.length ? (
            <ul className="mt-8 space-y-4">
              {notifications.map(notification => (
                <li key={notification.id} className={`p-4 bg-white rounded-lg shadow ${notification.read_status ? 'text-gray-400' : 'text-gray-900'}`}>
                  <p>{notification.message}</p>
                  <button
                    className="mt-2 text-blue-600 hover:underline"
                    onClick={() => markAsRead(notification.id)}
                    aria-label="Mark as read"
                  >
                    Mark as {notification.read_status ? 'unread' : 'read'}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No notifications</p>
          )}
        </div>
      </main>
    </>
  );
}