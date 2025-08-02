import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrderDetails } from '../../store/ordersSlice';
import { RootState } from '../../store/store';
import { useParams } from 'react-router-dom';
import OrderDetail from '../../components/OrderDetail';

const OrderDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const order = useSelector((state: RootState) => state.orders.selectedOrder);
  const loading = useSelector((state: RootState) => state.orders.loading);
  const error = useSelector((state: RootState) => state.orders.error);

  React.useEffect(() => {
    if (id) {
      dispatch(fetchOrderDetails(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className=\