import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components needed for the chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Horizantal = () => {
  const data = {
    labels: ['ក្រដាស់ប្រាក់', 'ទឺកប្រាក់ឌីជីថល'],
    datasets: [
      {
        label: 'Value',
        data: [7, 23],
        backgroundColor: '#ff7000', // You can adjust color as needed
        borderColor: '#ff7000', // You can adjust border color
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true, // Ensures responsiveness
    maintainAspectRatio: false, // This allows the chart to resize with the container
    plugins: {
      title: {
        display: true,
        text: 'Horizontal Bar Chart Example',
      },
      tooltip: {
        enabled: true
      }
    },
    indexAxis: 'y', // This makes the bars horizontal
    scales: {
      x: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className='container' style={{ width: '80%', height: '200px' }}> {/* Adjust the size here */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default Horizantal;
