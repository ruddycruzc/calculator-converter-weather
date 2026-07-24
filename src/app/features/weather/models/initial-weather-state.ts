import { WeatherState } from '../interfaces/weather-state.interface';

export const initialWeatherState: WeatherState = {
  municipalities: [],

  weather: null,

  loading: false,

  error: null,
};