import { Component, input, output } from '@angular/core';
import { CalculatorButtonConfig } from '../../models/calculator-button-config.interface';

@Component({
  selector: 'app-calculator-button',
  standalone: true,
  imports: [],
  templateUrl: './calculator-button.html',
  styleUrl: './calculator-button.css',
})
export class CalculatorButtonComponent {
  readonly button = input.required<CalculatorButtonConfig>();

  readonly pressed = output<CalculatorButtonConfig>();

  
onClick(): void {
  this.pressed.emit(this.button());
}
}
