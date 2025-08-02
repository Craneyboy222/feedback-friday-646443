import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';

export default function UserProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/user') // Assuming there's an endpoint to get logged-in user info
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>User Profile</title>
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900">Profile</h1>
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : error ? (
            <p className="text-red-600">Error loading profile</p>
          ) : user ? (
            <div className="mt-8 bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600">Username: {user.username}</p>
              <p className="text-gray-600">Email: {user.email}</p>
              <p className="text-gray-600">Profile Info: {user.profile_info}</p>
            </div>
          ) : (
            <p className="text-gray-600">No user data available</p>
          )}
        </div>
      </main>
    </>
  );
}