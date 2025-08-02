import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { FeedbackThread } from '../components/FeedbackThread';
import { SearchFilter } from '../components/SearchFilter';

const HomePage: React.FC = () => {
  const [threads, setThreads] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/api/feedback-threads')
      .then(response => {
        setThreads(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError("Failed to load feedback threads");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Browse and participate in feedback threads" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900">Feedback Threads</h1>
          <SearchFilter />
          {loading ? (
            <p className="text-center mt-4">Loading...</p>
          ) : error ? (
            <p className="text-center mt-4 text-red-600">{error}</p>
          ) : (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {threads.map(thread => (
                <FeedbackThread key={thread.id} thread={thread} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default HomePage;