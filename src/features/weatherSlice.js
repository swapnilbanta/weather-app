import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../utils/constants';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    loading: false,
    error: null,
    lastSearchedCity: localStorage.getItem('lastSearchedCity') || '',
  },
  reducers: {
    setLastSearchedCity: (state, action) => {
      state.lastSearchedCity = action.payload;
      localStorage.setItem('lastSearchedCity', action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to fetch weather data';
      });
  },
});

export const { setLastSearchedCity } = weatherSlice.actions;
export default weatherSlice.reducer;