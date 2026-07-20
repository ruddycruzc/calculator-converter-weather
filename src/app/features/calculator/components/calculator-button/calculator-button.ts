import { Component, input } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  imports: [],
  templateUrl: './calculator-button.html',
  styleUrl: './calculator-button.css',
})
export class CalculatorButton {
 readonly label = input.required<string>();
}
