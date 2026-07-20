import { Component, inject } from '@angular/core';
import { CalculatorKeyboardComponent } from './components/calculator-keyboard/calculator-keyboard';
import { CalculatorButtonConfig } from './models/calculator-button-config.interface';

import { CalculatorService } from './services/calculator.service';
import { MemoryPanelComponent } from './components/memory-panel/memory-panel';
import { CalculatorDisplayComponent } from './components/calculator-display/calculator-display';
@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [MemoryPanelComponent,
   CalculatorKeyboardComponent,
   CalculatorDisplayComponent
  ],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class CalculatorComponent {
  private readonly calculatorService = inject(CalculatorService);

onButtonPressed(button: CalculatorButtonConfig): void {
  this.calculatorService.handleButton(button);
}

}


