import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios, { AxiosError } from 'axios';
import { FeedbackThread } from '../components/FeedbackThread';
import { SearchFilter } from '../components/SearchFilter';

export interface FeedbackThreadData {
  id: string;
  title: string;
  content: string;
  // Add other properties as needed
}

interface ErrorResponse {
  message?: string;
}

const HomePage: React.FC = () => {
  const [threads, setThreads] = useState<FeedbackThreadData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;

    const fetchThreads = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<FeedbackThreadData[]>('/api/feedback-threads');
        if (isMounted) {
          setThreads(response.data);
        }
      } catch (err) {
        const axiosError = err as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          console.error("Error fetching feedback threads:", axiosError.response.data);
          setError(`Failed to load feedback threads: ${axiosError.response.data?.message || "Unknown error"}`);
        } else {
          console.error("Error fetching feedback threads:", axiosError.message);
          setError("Failed to load feedback threads. Please try again later.");
        }

        if (retryCount < 3 && isMounted) {
          setRetryCount(prev => prev + 1);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchThreads();

    return () => {
      isMounted = false; // Cleanup
    };
  }, [retryCount]);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Browse and participate in feedback threads" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Page title */}
          <header>
            <h1 className="text-4xl font-bold text-gray-900">Feedback Threads</h1>
          </header>
          {/* Search filter component */}
          <SearchFilter />
          {/* Conditional rendering based on loading, error, or threads state */}
          {loading ? (
            <div className="text-center mt-4" aria-live="polite">
              <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : error ? (
            <p className="text-center mt-4 text-red-600" aria-live="assertive">{error}</p>
          ) : threads.length === 0 ? (
            <p className="text-center mt-4 text-gray-600" aria-live="polite">No feedback threads available.</p>
          ) : (
            <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {threads.map(thread => (
                <FeedbackThread key={thread.id} thread={thread} />
              ))}
            </section>
          )}
        </div>
      </main>
    </>
  );
};

export default HomePage;