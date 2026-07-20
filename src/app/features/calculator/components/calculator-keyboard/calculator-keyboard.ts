import { Component, inject } from '@angular/core';
import { CalculatorButton } from '../calculator-button/calculator-button';
import { CalculatorService } from '../../services/calculator-service';


@Component({
  selector: 'app-calculator-keyboard',
  imports: [CalculatorButton],
  templateUrl: './calculator-keyboard.html',
  styleUrl: './calculator-keyboard.css',
})
export class CalculatorKeyboard {
  
   private readonly calculatorService = inject(CalculatorService);


  onButtonPressed(value: string): void {
    this.calculatorService.setDisplay(value);
  }
}
