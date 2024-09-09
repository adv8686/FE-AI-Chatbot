/* eslint-disable no-console */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import Card from '@components/UI/Card';
import Text from '@components/UI/Text';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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
    // tooltip: {
    //   titleAlign: 'center',
    //   mode: 'index',
    //   intersect: false,
    //   boxWidth: 20,
    //   padding: 8,
    //   boxHeight: 6,
    //   boxPadding: 8,
    //   bodySpacing: 8,
    //   cornerRadius: 16,
    //   callbacks: {
    //     title: (value: any) => {
    //       console.log(value);

    //       return '';
    //     },
    //     label: (tooltipItem: any) => {
    //       return tooltipItem?.formattedValue;
    //     },
    //   },
    // },
  },
};

const data = {
  labels: ['21.07', '22.07', '23.07', '24.07', '25.07', '26.07', '27.07'],
  datasets: [
    {
      label: '',
      data: [10, 60, 10, 40, 20, 65, 40],
      fill: true,
      borderColor: '#8B5CF6',
      tension: 0.2,
    },
  ],
};

const CardChatVolume = () => {
  return (
    <Card>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <Text type='font-16-600'>Chat Volume in JoomBot</Text>
          <Text type='font-14-400' className='text-neutral'>
            Set your bot name, timezone, languages, and more.
          </Text>
        </div>
        <Line options={options} data={data} />
      </div>
    </Card>
  );
};
export default CardChatVolume;
