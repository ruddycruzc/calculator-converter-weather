import { Component } from '@angular/core';
import { CalculatorDisplayComponent } from './components/calculator-display/calculator-display';
import { MemoryPanelComponent } from './components/memory-panel/memory-panel';
import { CalculatorKeyboardComponent } from './components/calculator-keyboard/calculator-keyboard';

@Component({
  selector: 'app-calculator',
  imports: [
   CalculatorDisplayComponent,
   MemoryPanelComponent,
   CalculatorKeyboardComponent
  ],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class CalculatorComponent {}
