// src/components/ErrorDisplay.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const ErrorDisplay = () => {
  const { error } = useSelector((state) => state.weather);
  return error ? <p style={{ color: 'red' }}>{error}</p> : null;
};

export default ErrorDisplay;