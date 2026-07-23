import { Component } from '@angular/core';
import { CalculatorComponent } from '../../features/calculator/calculator';
import { CurrencyConverterComponent } from '../../features/converter/converter';

;

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CalculatorComponent, CurrencyConverterComponent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
