import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../store/adminSlice';
import { RootState } from '../../store/store';
import UserManagement from '../../components/UserManagement';

const AdminUsersPage: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.admin.users);
  const loading = useSelector((state: RootState) => state.admin.loading);
  const error = useSelector((state: RootState) => state.admin.error);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className=\