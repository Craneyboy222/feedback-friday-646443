import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/login', { email, password });
      // Redirect to dashboard or home
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <h2 className="text-3xl font-bold text-center">Sign in</h2>
          {error && <p className="text-red-600 text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md"
              aria-label="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md"
              aria-label="Password"
            />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
              Sign in
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default LoginPage;