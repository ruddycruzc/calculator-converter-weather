import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [],
  templateUrl: './converter.html',
  styleUrl: './converter.css',
})
export class CurrencyConverterComponent implements OnInit {
  private readonly currencyService = inject(CurrencyService);

  readonly rates = this.currencyService.rates;
  readonly loading = this.currencyService.loading;
  readonly error = this.currencyService.error;

  amount = signal(1);
  fromCurrency = signal('EUR');
  toCurrency = signal('USD');
  result = signal<number | null>(null);

  readonly currencies = computed(() => {
    const response = this.rates();

    if (!response) {
      return [];
    }

  return ['EUR', 'USD', 'JPY'];
  });

  ngOnInit(): void {
    this.currencyService.loadRates();
  }

  onAmountChange(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);

    this.amount.set(value);
  }

  onFromCurrencyChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;

    this.fromCurrency.set(value);
  }

  onToCurrencyChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;

    this.toCurrency.set(value);
  }

  convert(): void {
    const response = this.rates();

    if (!response) {
      return;
    }

    const fromRate = Number(response.rates[this.fromCurrency()]);

    const toRate = Number(response.rates[this.toCurrency()]);

    const amount = this.amount();

    const usdAmount = amount / fromRate;

    const result = Number(
      (usdAmount * toRate).toFixed(2)
    );

    this.result.set(result);
  }
}
