import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategoryDetails } from '../../store/categoriesSlice';
import { RootState } from '../../store/store';
import { useParams } from 'react-router-dom';
import CategoryDetail from '../../components/CategoryDetail';

const CategoryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.categories.selectedCategory);
  const loading = useSelector((state: RootState) => state.categories.loading);
  const error = useSelector((state: RootState) => state.categories.error);

  React.useEffect(() => {
    if (id) {
      dispatch(fetchCategoryDetails(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className=\