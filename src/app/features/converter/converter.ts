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

  // Estado del servicio
  readonly rates = this.currencyService.rates;
  readonly loading = this.currencyService.loading;
  readonly error = this.currencyService.error;

  // Estado del formulario
  amount = signal(1);
  fromCurrency = signal('EUR');
  toCurrency = signal('USD');
  result = signal<number | null>(null);

  // Monedas
  readonly currencies = computed(() => {
    const response = this.rates();

    if (!response) {
      return [];
    }
   // Las monedas que se van a poder cambiar
    return ['EUR', 'USD', 'JPY'];
  });

  // Cantidad formateada
  readonly formattedAmount = computed(() => {
    return this.amount().toLocaleString('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  });

  // Resultado formateado
  readonly formattedResult = computed(() => {
    const value = this.result();

    if (value === null) {
      return '';
    }

    return value.toLocaleString('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  });

  ngOnInit(): void {
    this.currencyService.loadRates();
  }

onAmountChange(event: Event): void {

  const value = Number(
    (event.target as HTMLInputElement).value
  );

  this.amount.set(value);

  this.convert();

}

onFromCurrencyChange(event: Event): void {

  const value =
    (event.target as HTMLSelectElement).value;

  this.fromCurrency.set(value);

  this.convert();

}

onToCurrencyChange(event: Event): void {

  const value =
    (event.target as HTMLSelectElement).value;

  this.toCurrency.set(value);

  this.convert();

}

  convert(): void {

    const response = this.rates();

    if (!response) {
      return;
    }

    const amount = this.amount();

    if (amount <= 0) {
      this.result.set(null);
      return;
    }

    const fromRate = Number(
      response.rates[this.fromCurrency()]
    );

    const toRate = Number(
      response.rates[this.toCurrency()]
    );

    if (!fromRate || !toRate) {
      return;
    }

    const result = this.calculateConversion(
      amount,
      fromRate,
      toRate
    );

    this.result.set(result);
  }

  private calculateConversion(
    amount: number,
    fromRate: number,
    toRate: number
  ): number {

    const usdAmount = amount / fromRate;

    return Number(
      (usdAmount * toRate).toFixed(2)
    );
  }

  swapCurrencies(): void {

  const from = this.fromCurrency();

  this.fromCurrency.set(
    this.toCurrency()
  );

  this.toCurrency.set(from);

  this.convert();

}

}