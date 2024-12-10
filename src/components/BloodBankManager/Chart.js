import React from 'react';
import { Pie } from 'react-chartjs-2';  
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; 



ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = () => {
  const data = {
    labels: ['Full', 'Free'],
    datasets: [
      {
        label: '# of Donors',
        data: [837, 730],  
        backgroundColor: ['#f76c6c', '#7051ff'],
        borderColor: ['#fff', '#fff'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#fff',  
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '90%', maxWidth: '300px', margin: '10 auto ' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChartComponent;
