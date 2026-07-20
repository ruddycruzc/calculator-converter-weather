import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  imports: [],
  templateUrl: './calculator-button.html',
  styleUrl: './calculator-button.css',
})
export class CalculatorButton {
  readonly label = input.required<string>();

  readonly pressed = output<string>();

  
  onClick(): void {
    this.pressed.emit(this.label());
  }
}
