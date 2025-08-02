import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';

interface ProfileFormInputs {
  username: string;
  email: string;
  profileInfo: string;
}

const ProfileForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormInputs>();

  const onSubmit = async (data: ProfileFormInputs) => {
    try {
      await axios.put('/api/profile', data);
      toast.success('Profile updated successfully');
    } catch (error) {
      toast.error('Profile update failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
        <input
          id="username"
          {...register('username', { required: 'Username is required' })}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.username ? 'border-red-500' : ''}`}
        />
        {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          {...register('email', { required: 'Email is required' })}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="profileInfo" className="block text-sm font-medium text-gray-700">Profile Information</label>
        <textarea
          id="profileInfo"
          {...register('profileInfo', { required: 'Profile information is required' })}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.profileInfo ? 'border-red-500' : ''}`}
        />
        {errors.profileInfo && <span className="text-red-500 text-sm">{errors.profileInfo.message}</span>}
      </div>

      <div>
        <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Update Profile
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;