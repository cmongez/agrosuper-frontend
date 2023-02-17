import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import Loading from './Loading';

const Graphics = ({ axisX, axisY1, axisY2, title }) => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
      },
    },
  };

  const chartData = {
    labels: axisX,
    datasets: [
      {
        label: 'Real',
        data: axisY1,
        color: ['black'],
        backgroundColor: ['#003087'],
        borderColor: ['#003087'],
        borderWidth: [2],
      },
      {
        label: 'Proyectado',
        data: axisY2,
        color: ['black'],
        backgroundColor: ['#e87722'],
        borderColor: ['#e87722'],
        borderWidth: [2],
      },
    ],
  };

  return (
    <>
      {chartData ? (
        <>
          <h3 className="text-center m-0">{title}</h3>
          <Line data={chartData} options={options} />{' '}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Graphics;
