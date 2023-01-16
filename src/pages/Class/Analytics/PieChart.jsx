import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
      legend: {
          display: true,
          position: 'bottom'
      },
      title: {
          display: false,
      },
  },
};

const PieChart = React.memo((props) => {
  const { data } = props;
  return (
    <Pie options={options} data={data} />
  )
})

export default PieChart;
