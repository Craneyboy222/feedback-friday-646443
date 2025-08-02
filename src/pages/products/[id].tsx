import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from 'axios';

const ProductDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      axios.get(`/api/products/${id}`)
        .then(response => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>Product {id}</title>
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900">Product Details</h1>
          {loading ? (
            <p className="text-center mt-4">Loading...</p>
          ) : product ? (
            <div className="mt-8 bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-2xl font-bold text-blue-600 mt-4">${product.price}</p>
            </div>
          ) : (
            <p className="text-center mt-4">Product not found</p>
          )}
        </div>
      </main>
    </>
  );
};

export default ProductDetailPage;