import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../store/categoriesSlice';
import { RootState } from '../store/store';
import CategoryList from '../components/CategoryList';

const CategoriesPage: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.categories.items);
  const loading = useSelector((state: RootState) => state.categories.loading);
  const error = useSelector((state: RootState) => state.categories.error);

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className=\