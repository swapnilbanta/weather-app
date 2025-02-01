import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLastSearchedCity } from '../features/weatherSlice';
import { Form, Input, Button } from '../styles';

const SearchInput = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (city) {
      dispatch(setLastSearchedCity(city));
    }
  };

  return (
    <Form onSubmit={handleSearch}>
      <Input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchInput;