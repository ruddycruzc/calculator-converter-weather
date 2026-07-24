import { Municipality } from './municipality.interface';

export interface MunicipalitiesResponse {
  origen: unknown;

  title: string;

  provincia: string;

  codprov: string;

  municipios: Municipality[];
}