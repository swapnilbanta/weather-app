import React from 'react';
import { useSelector } from 'react-redux';
import { WeatherContainer, WeatherIcon } from '../styles';

const WeatherInfo = () => {
  const { data, loading, error } = useSelector((state) => state.weather);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return null;

  return (
    <WeatherContainer>
      <h2>{data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
      <p>Condition: {data.weather[0].description}</p>
      <WeatherIcon
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        alt="Weather Icon"
      />
    </WeatherContainer>
  );
};

export default WeatherInfo;