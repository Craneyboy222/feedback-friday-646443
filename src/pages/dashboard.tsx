import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { AdminStats } from '../components/AdminStats';

const DashboardPage: React.FC = () => {
  const [stats, setStats] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get('/api/admin/stats')
      .then(response => setStats(response.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
          {loading ? (
            <p className="text-center mt-4">Loading...</p>
          ) : (
            <AdminStats stats={stats} />
          )}
        </div>
      </main>
    </>
  );
};

export default DashboardPage;