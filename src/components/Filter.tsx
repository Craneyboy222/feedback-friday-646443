import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../store/actions';

interface FilterProps {
  options: string[];
}

const Filter: React.FC<FilterProps> = ({ options }) => {
  const dispatch = useDispatch();

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <select
        onChange={handleFilterChange}
        className="w-full p-2 border border-gray-300 rounded"
        aria-label="Filter feedback threads"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
