import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './features/weatherSlice';
import SearchInput from './components/SearchInput';
import ErrorDisplay from './components/ErrorDisplay';
import WeatherInfo from './components/WeatherInfo';
import { AppContainer, Title } from './styles';

function App() {
  const dispatch = useDispatch();
  const { lastSearchedCity } = useSelector((state) => state.weather);

  const fetchWeatherData = () => {
    if (lastSearchedCity) {
      dispatch(fetchWeather(lastSearchedCity));
    }
  };

  useEffect(() => {
    fetchWeatherData();
    const intervalId = setInterval(fetchWeatherData, 30000); // Refresh every 30 seconds
    return () => clearInterval(intervalId);
  }, [dispatch, lastSearchedCity]);

  return (
    <AppContainer>
      <Title>Weather Dashboard</Title>
      <SearchInput />
      <ErrorDisplay />
      <WeatherInfo />
    </AppContainer>
  );
}

export default App;
