import { Municipality } from './municipality.interface';
import { WeatherResponse } from './weather-response.interface';

export interface WeatherState {
  municipalities: Municipality[];

  weather: WeatherResponse | null;

  loading: boolean;

  error: string | null;
}