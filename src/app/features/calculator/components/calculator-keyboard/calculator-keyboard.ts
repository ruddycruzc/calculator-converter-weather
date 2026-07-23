import { Component, output } from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button';
import { CALCULATOR_BUTTONS } from '../../constants/calculator-buttons.constants';
import { CalculatorButtonConfig } from '../../models/calculator-button-config.interface';

@Component({
  selector: 'app-calculator-keyboard',
  standalone: true,
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator-keyboard.html',
  styleUrl: './calculator-keyboard.css',
})
export class CalculatorKeyboardComponent {

  readonly buttons = CALCULATOR_BUTTONS;

  readonly buttonPressed = output<CalculatorButtonConfig>();

  onButtonPressed(button: CalculatorButtonConfig): void {
    this.buttonPressed.emit(button);
  }
}
