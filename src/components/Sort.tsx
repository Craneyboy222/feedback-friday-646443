import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortOrder } from '../store/actions';

const Sort: React.FC = () => {
  const dispatch = useDispatch();

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortOrder(event.target.value));
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <select
        onChange={handleSortChange}
        className="w-full p-2 border border-gray-300 rounded"
        aria-label="Sort feedback threads"
      >
        <option value="date">Date</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
};

export default Sort;
