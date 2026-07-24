import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of, tap } from 'rxjs';

import { environment } from '../../../../environments/environment';

import { MunicipalitiesResponse } from '../interfaces/municipalities-response.interface';
import { initialWeatherState } from '../models/initial-weather-state';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = environment.weatherApi.baseUrl;

  private readonly state = signal(initialWeatherState);

  readonly municipalities = computed(() => this.state().municipalities);

  readonly weather = computed(() => this.state().weather);

  readonly loading = computed(() => this.state().loading);

  readonly error = computed(() => this.state().error);

  
  private static readonly ASTURIAS_CODE = '33';

  constructor() {
    this.loadMunicipalities();
  }

  private updateState(partialState: Partial<typeof initialWeatherState>) {
    this.state.update((state) => ({
      ...state,
      ...partialState,
    }));
  }

  loadMunicipalities(): void {
    this.updateState({
      loading: true,
      error: null,
    });

    this.http
      .get<MunicipalitiesResponse>(`${this.apiUrl}/provincias/${WeatherService.ASTURIAS_CODE}/municipios`)
      .pipe(
        tap((response) => {
          console.log(response);

          this.updateState({
            municipalities: response.municipios,
            loading: false,
          });
        }),
        catchError(() => {
          this.updateState({
            loading: false,
            error: 'No se pudieron cargar los municipios.',
          });

          return of([]);
        }),
      )
      .subscribe();
  }

}
