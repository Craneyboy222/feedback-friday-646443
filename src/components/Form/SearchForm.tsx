import React from 'react';
import { useForm } from 'react-hook-form';

interface SearchFormInputs {
  query: string;
}

const SearchForm: React.FC = () => {
  const { register, handleSubmit } = useForm<SearchFormInputs>();

  const onSubmit = (data: SearchFormInputs) => {
    console.log(data);
    // Trigger search functionality
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div className="relative">
        <input
          type="text"
          {...register('query')}
          placeholder="Search..."
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm transition duration-150 ease-in-out"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.415l4.387 4.387a1 1 0 01-1.415 1.415l-4.386-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;