import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAdminOrders } from '../../store/adminSlice';
import { RootState } from '../../store/store';
import OrderManagement from '../../components/OrderManagement';

const AdminOrdersPage: React.FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.admin.orders);
  const loading = useSelector((state: RootState) => state.admin.loading);
  const error = useSelector((state: RootState) => state.admin.error);

  React.useEffect(() => {
    dispatch(fetchAdminOrders());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className=\