import React, { Component } from 'react';
import { Bar, Line, Pie, Doughnut, Radar, PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

class ChartComponent extends Component {
  render() {
    const { data, type, title } = this.props;

    const chartData = {
      labels: data.labels,
      datasets: [
        {
          label: 'Dataset',
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 2,
          data: data.values
        }
      ]
    };

    const options = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: title,
          fontSize: 20
        },
        legend: {
          display: true,
          position: 'right'
        }
      }
    };

    let ChartComponent;
    switch (type) {
      case 'line':
        ChartComponent = Line;
        break;
      case 'pie':
        ChartComponent = Pie;
        break;
      case 'doughnut':
        ChartComponent = Doughnut;
        break;
      case 'radar':
        ChartComponent = Radar;
        break;
      case 'polarArea':
        ChartComponent = PolarArea;
        break;
      case 'bar':
      default:
        ChartComponent = Bar;
        break;
    }

    return (
      <div className="chart">
        <ChartComponent data={chartData} options={options} />
      </div>
    );
  }
}

export default ChartComponent;
