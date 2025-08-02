import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';

export default function SurveysPage() {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/surveys') // Assuming there's an endpoint to get all surveys
      .then(response => {
        setSurveys(response.data);
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
        <title>Surveys</title>
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900">Surveys</h1>
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : error ? (
            <p className="text-red-600">Error loading surveys</p>
          ) : (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {surveys.map(survey => (
                <div key={survey.id} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold">Survey #{survey.id}</h3>
                  <a href={survey.survey_link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    View Survey
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}