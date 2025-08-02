import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function FeedbackPage() {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    axios.get('/api/feedback-threads')
      .then(response => {
        setThreads(response.data);
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
        <title>Feedback Threads</title>
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900">Feedback Threads</h1>
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : error ? (
            <p className="text-red-600">Error loading threads</p>
          ) : (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {threads.map(thread => (
                <div key={thread.id} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold">{thread.company_name}</h3>
                  <p className="text-gray-600 mt-2">{thread.purpose}</p>
                  <button
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md"
                    onClick={() => router.push(`/feedback/${thread.id}`)}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}