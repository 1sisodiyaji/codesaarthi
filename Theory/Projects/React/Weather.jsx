import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Helmet } from 'react-helmet';
const API_KEY = "e70da7e240c44aea208eb45d45f3060a";
const API_URL = `https://api.openweathermap.org/data/2.5/forecast`;

const Weather = () => {



const WeatherChart = ({ data }) => {
  return (
    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <XAxis dataKey="dt_txt" />
      <YAxis />
      <CartesianGrid stroke="#f5f5f5" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="main.temp" stroke="#ff7300" yAxisId={0} />
    </LineChart>
  );
};
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            q: "Delhi",
            appid: API_KEY,
            units: "metric",
          },
        });
        setWeatherData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!weatherData) return null;

  return (
    <>
    <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="React Based Project , Learn React based project , React projects , Top 10 Projects in React ., Weather app  in react , Weather app." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Projects/react/weather" />
        <meta name="description" content="It is basically an react based Projects , Where you can see live weather report as by graph  ." />
        <title>React Projects | CodeSaarthi</title>
        <meta property="og:title" content=" React Projects| CodeSaarthi" />
        <meta property="og:description" content="t is basically an react based Projects , Where you can see live weather report as by graph  ." />
        <meta property="og:image" content="https://codesaarthi.com/img/reactWeather.jpg" />
        <meta property="og:type" content="https://codesaarthi.com/Projects/react/weather" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
    </Helmet>
    <div className="conatiner-fluid vh-100 design py-lg-5" style={{backgroundColor:'#1E1E1E'}}>
      <h2 className="text-center text-capitalize text-warning">Weather Dashboard</h2>
      <div className="container">
        <h3 className="text-light">Current Weather</h3>
        {/* Display current weather information */}
        <p className="text-light">Temperature: {weatherData.list[0].main.temp}°C</p>
        <p className="text-warning">Weather: {weatherData.list[0].weather[0].description}</p>
      </div>
      <div className="container text-light">
        <h3 className="text-success">7-Day Forecast</h3>
        {/* Display 7-day forecast using WeatherChart component */}
        <WeatherChart data={weatherData.list.slice(0, 7)} />
     
      </div>
    </div>
    </>
  );
};

export default Weather;
