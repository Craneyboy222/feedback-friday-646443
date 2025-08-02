import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { ChartData, ChartOptions } from 'chart.js';

interface AreaChartProps {
  data: ChartData<'line'>;
  options?: ChartOptions<'line'>;
  ariaLabel: string;
}

const AreaChart: React.FC<AreaChartProps> = ({ data, options, ariaLabel }) => {
  const areaOptions: ChartOptions<'line'> = {
    ...options,
    plugins: {
      ...options?.plugins,
      filler: { propagate: true }
    },
    scales: {
      x: {
        grid: { drawOnChartArea: false }
      },
      y: {
        stacked: true
      }
    }
  };

  return (
    <div className="w-full h-full">
      <Line data={data} options={areaOptions} aria-label={ariaLabel} role="img" />
    </div>
  );
};

export default AreaChart;