/* eslint-disable no-console */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import Card from '@components/UI/Card';
import Text from '@components/UI/Text';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options: any = {
  indexAxis: 'y',
  responsive: true,
  fill: false,
  radius: 0,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawOnChartArea: false,
        drawBorder: false,
      },
      border: {
        color: '#e4e6e8',
      },
    },
    y: {
      grid: {
        display: false,
      },
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const data = {
  labels: ['“bug UI”', '“bad template”', '“good template”', '“how to buy”', '“release”'],
  datasets: [
    {
      label: 'Sales 2023',
      data: [11, 2.02, 10.108, 9, 3.2, 6, 2.09, 2, 8.16],
      backgroundColor: '#8B5CF6',
    },
  ],
};

const CardCustomerTrendTopic = () => {
  return (
    <Card>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <Text type='font-16-600'>Customer Trend Topic in JoomBot</Text>
          <Text type='font-14-400' className='text-neutral'>
            Enter up to 4 questions to help users get started with your bot.
          </Text>
        </div>
        <Bar options={options} data={data} />
      </div>
    </Card>
  );
};
export default CardCustomerTrendTopic;
