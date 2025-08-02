import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAnalytics } from '../../store/adminSlice';
import { RootState } from '../../store/store';
import AnalyticsDashboard from '../../components/AnalyticsDashboard';

const AdminAnalyticsPage: React.FC = () => {
  const dispatch = useDispatch();
  const analytics = useSelector((state: RootState) => state.admin.analytics);
  const loading = useSelector((state: RootState) => state.admin.loading);
  const error = useSelector((state: RootState) => state.admin.error);

  React.useEffect(() => {
    dispatch(fetchAnalytics());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className=\