import { Injectable, inject, computed, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { initialCurrencyState } from '../models/initial-currency-state';
import { CurrencyState } from '../interfaces/currency-state.interface';
import { CurrencyResponse } from '../models/currency-response.interface';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = environment.currencyApi.baseUrl;
  private readonly apiKey = environment.currencyApi.apiKey;

  private readonly state = signal<CurrencyState>(initialCurrencyState);

  readonly rates = computed(() => this.state().rates);
  readonly loading = computed(() => this.state().loading);
  readonly error = computed(() => this.state().error);

  getLatestRates() {
    return this.http.get<CurrencyResponse>(
      `${this.apiUrl}/rates/latest?apikey=${this.apiKey}`
    );
  }

  loadRates(): void {

    this.updateState({
      loading: true,
      error: null,
    });

    this.getLatestRates().subscribe({
      next: (response) => {
        console.log(response);
        this.updateState({
          rates: response,
          loading: false,
        });
      },
      error: () => {
        this.updateState({
          error: 'No se pudieron cargar las divisas.',
          loading: false,
        });
      },
    });

  }

  private updateState(partialState: Partial<CurrencyState>): void {
    this.state.update((state) => ({
      ...state,
      ...partialState,
    }));
  }

  

}
