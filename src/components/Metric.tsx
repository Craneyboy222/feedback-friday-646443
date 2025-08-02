import React from 'react';

interface MetricProps {
  label: string;
  value: string | number;
  change: string;
  direction: 'up' | 'down';
}

const Metric: React.FC<MetricProps> = ({ label, value, change, direction }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-medium text-gray-500">{label}</h4>
          <p className="text-xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`flex items-center text-sm ${direction === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {direction === 'up' ? '▲' : '▼'} {change}
        </div>
      </div>
    </div>
  );
};

export default Metric;
