import { Component } from '@angular/core';
import { CalculatorButton } from '../calculator-button/calculator-button';


@Component({
  selector: 'app-calculator-keyboard',
  imports: [CalculatorButton],
  templateUrl: './calculator-keyboard.html',
  styleUrl: './calculator-keyboard.css',
})
export class CalculatorKeyboard {}
