import { Component, inject, OnInit } from '@angular/core';
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

ngOnInit(): void {
  this.currencyService.loadRates();
}

}