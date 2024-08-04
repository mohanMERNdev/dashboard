import React, { Component } from 'react';
import ChartComponent from './ChartComponent';

class Dashboard extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    const apiKey = 'ac7e9a2ca4737d694b2c8cffc21890dd'; // Replace with your OpenWeatherMap API key
    const city = 'London'; // Replace with the city you want to fetch data for

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        // Transform data to fit chart structure
        const transformedData = {
          chart1: {
            labels: ['Temperature', 'Humidity', 'Pressure'],
            values: [
              data.main.temp,
              data.main.humidity,
              data.main.pressure
            ]
          },
          // Add more charts using other parts of the response if needed
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
        <ChartComponent data={data.chart1} />
        {/* Add other ChartComponent instances here for more charts */}
      </div>
    );
  }
}

export default Dashboard;
