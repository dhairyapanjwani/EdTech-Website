import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = ({ courseName="Advance ReactJS", category="ReactJS", marks, date }) => {
    const data = {
        labels: ['Your Score', 'Highest', 'Lowest', 'Average'],
        datasets: [
          {
            label: `Score on ${date}`,
            data: [marks[0], marks[1], marks[2], marks[3]],
            backgroundColor: [
              'rgba(54, 162, 235, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        };
    return (
  <div className='border-2 border-gray-200 dark:border-gray-600 border-opacity-60 rounded-lg w-full h-full'>
    <div className='header m-4 pb-6'>
      <h1 className='text-gray-900 dark:text-gray-200 float-left'>{courseName}</h1>
      <div className='text-gray-400 uppercase text-sm float-right'>{category}</div>
    </div>
    <Bar data={data} options={options} className="bg-gray-100 dark:bg-gray-900"/>
  </div>
);}

export default Chart;