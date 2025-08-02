import React from 'react';

interface StatsProps {
  title: string;
  value: number;
  description: string;
}

const Stats: React.FC<StatsProps> = ({ title, value, description }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <span className="text-2xl font-bold text-gray-900">{value}</span>
        </div>
        <div className="ml-4">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
