import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

interface ChartProps {
  data: ChartData;
  options?: ChartOptions;
}

const Chart: React.FC<ChartProps> = ({ data, options }) => {
  return (
    <div role="img" aria-label="Chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
