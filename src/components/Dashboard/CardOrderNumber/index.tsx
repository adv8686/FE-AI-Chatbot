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
      border: { color: '#e4e6e8' },
      grid: {
        tickBorderDash: [2, 3],
        drawTicks: true,
        drawOnChartArea: true,
        color: '#e4e6e8 ',
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
  labels: ['24.07', '25.07', '26.07', '27.07'],
  datasets: [
    {
      label: 'Sales 2023',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: '#14B8A6',
    },
    {
      label: 'Sales 2022',
      data: [8, 14, 6, 2, 7, 4],
      backgroundColor: '#F97316',
    },
    {
      label: 'Sales 2022',
      data: [8, 2, 6, 14, 7, 4],
      backgroundColor: '#0EA5E9',
    },
  ],
};

const CardOrderNumber = () => {
  return (
    <Card>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <Text type='font-16-600'>Order number by JoomBot</Text>
          <Text type='font-14-400' className='text-neutral'>
            Set your bot name, timezone, languages, and more.
          </Text>
        </div>
        <Bar options={options} data={data} />
      </div>
    </Card>
  );
};
export default CardOrderNumber;
