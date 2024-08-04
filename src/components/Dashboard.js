import React, { Component } from 'react';
import ChartComponent from './ChartComponent';

class Dashboard extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    const apiKey = 'ac7e9a2ca4737d694b2c8cffc21890dd'; 
    const city = 'London'; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const transformedData = {
          chart1: {
            labels: ['Temperature', 'Humidity', 'Pressure'],
            values: [data.main.temp, data.main.humidity, data.main.pressure]
          },
          chart2: {
            labels: ['Temperature', 'Feels Like'],
            values: [data.main.temp, data.main.feels_like]
          },
          chart3: {
            labels: ['Wind Speed', 'Wind Gust'],
            values: [data.wind.speed, data.wind.gust || 0]
          },
          chart4: {
            labels: ['Cloudiness'],
            values: [data.clouds.all]
          },
          chart5: {
            labels: ['Visibility'],
            values: [data.visibility]
          },
          chart6: {
            labels: ['Sea Level', 'Ground Level'],
            values: [data.main.sea_level || 0, data.main.grnd_level || 0]
          }
        };
        this.setState({ data: transformedData });
      });
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return <div>Loading...</div>;
    }

    return (
      <div className="dashboard">
        <ChartComponent data={data.chart1} type="bar" title="Temperature, Humidity, Pressure" />
        <ChartComponent data={data.chart2} type="line" title="Temperature vs Feels Like" />
        <ChartComponent data={data.chart3} type="pie" title="Wind Speed and Gust" />
        <ChartComponent data={data.chart4} type="doughnut" title="Cloudiness" />
        <ChartComponent data={data.chart5} type="radar" title="Visibility" />
        <ChartComponent data={data.chart6} type="polarArea" title="Sea Level and Ground Level" />
      </div>
    );
  }
}

export default Dashboard;
