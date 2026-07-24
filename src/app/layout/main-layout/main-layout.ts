import { Component } from '@angular/core';
import { CalculatorComponent } from '../../features/calculator/calculator';
import { CurrencyConverterComponent } from '../../features/converter/converter';
import { WeatherComponent } from "../../features/weather/weather";

;

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CalculatorComponent, CurrencyConverterComponent, WeatherComponent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
