import { Component, inject } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator-display',
  standalone: true,
  imports: [],
  templateUrl: './calculator-display.html',
  styleUrl: './calculator-display.css',
})
export class CalculatorDisplayComponent {

  

  protected readonly calculatorService = inject(CalculatorService);
  protected readonly display = this.calculatorService.display;

}