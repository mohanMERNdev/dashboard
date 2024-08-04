import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

class ChartComponent extends Component {
  render() {
    const { data } = this.props;

    const chartData = {
      labels: data.labels,
      datasets: [
        {
          label: 'Dataset',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: data.values
        }
      ]
    };

    return (
      <div className="chart">
        <Bar
          data={chartData}
          options={{
            title: {
              display: true,
              text: 'Weather Data',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
    );
  }
}

export default ChartComponent;
