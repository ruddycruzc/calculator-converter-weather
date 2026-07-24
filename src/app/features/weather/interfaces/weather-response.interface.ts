export interface WeatherResponse {
  municipio: string;

  provincia: string;

  temperaturas: {
    actual: string;
  };

  stateSky: {
    id: number;
    description: string;
  };
}