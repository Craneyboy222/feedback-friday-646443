import React from 'react';
import { useForm } from 'react-hook-form';

interface FilterFormInputs {
  companyName: string;
  technologies: string[];
}

const FilterForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FilterFormInputs>();

  const onSubmit = (data: FilterFormInputs) => {
    console.log(data);
    // Trigger filter functionality
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div className="mb-4">
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
        <input
          id="companyName"
          {...register('companyName')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="technologies" className="block text-sm font-medium text-gray-700">Technologies</label>
        <select
          id="technologies"
          {...register('technologies')}
          multiple
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="react">React</option>
          <option value="node">Node</option>
          <option value="express">Express</option>
        </select>
      </div>

      <div>
        <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Apply Filters
        </button>
      </div>
    </form>
  );
};

export default FilterForm;