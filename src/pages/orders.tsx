import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get('/api/orders')
      .then(response => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <Head>
        <title>Orders</title>
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900">Orders</h1>
          {loading ? (
            <p className="text-center mt-4">Loading...</p>
          ) : (
            <div className="mt-8 space-y-4">
              {orders.map(order => (
                <div key={order.id} className="bg-white p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">Order #{order.id}</h3>
                      <p className="text-gray-600">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">${order.total}</p>
                      <span className="inline-block px-2 py-1 text-sm bg-green-100 text-green-800 rounded">
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default OrdersPage;