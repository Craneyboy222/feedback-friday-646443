import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { ChartData, ChartOptions } from 'chart.js';

interface PieChartProps {
  data: ChartData<'pie'>;
  options?: ChartOptions<'pie'>;
  ariaLabel: string;
}

const PieChart: React.FC<PieChartProps> = ({ data, options, ariaLabel }) => {
  return (
    <div className="w-full h-full">
      <Pie data={data} options={options} aria-label={ariaLabel} role="img" />
    </div>
  );
};

export default PieChart;