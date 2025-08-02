import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAdminProducts } from '../../store/adminSlice';
import { RootState } from '../../store/store';
import ProductManagement from '../../components/ProductManagement';

const AdminProductsPage: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.admin.products);
  const loading = useSelector((state: RootState) => state.admin.loading);
  const error = useSelector((state: RootState) => state.admin.error);

  React.useEffect(() => {
    dispatch(fetchAdminProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className=\