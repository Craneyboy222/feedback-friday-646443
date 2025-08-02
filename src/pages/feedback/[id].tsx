import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function FeedbackDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [thread, setThread] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/feedback-threads/${id}`)
        .then(response => {
          setThread(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>Feedback Thread {id}</title>
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : error ? (
            <p className="text-red-600">Error loading thread</p>
          ) : thread ? (
            <>
              <h1 className="text-4xl font-bold text-gray-900">{thread.company_name}</h1>
              <div className="mt-8 bg-white p-6 rounded-lg shadow">
                <p className="text-gray-600">Purpose: {thread.purpose}</p>
                <p className="text-gray-600">Technologies: {thread.technologies}</p>
                <p className="text-gray-600">Feedback Requested: {thread.feedback_requested}</p>
                {thread.seeking_beta_testers && (
                  <p className="text-gray-600">Seeking Beta Testers</p>
                )}
                <p className="text-gray-600">Additional Comments: {thread.additional_comments}</p>
              </div>
            </>
          ) : (
            <p className="text-gray-600">No thread found</p>
          )}
        </div>
      </main>
    </>
  );
}