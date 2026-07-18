import { Component } from '@angular/core';
import { CalculatorDisplay } from './components/calculator-display/calculator-display';
import { MemoryPanel } from './components/memory-panel/memory-panel';
import { CalculatorKeyboard } from './components/calculator-keyboard/calculator-keyboard';

@Component({
  selector: 'app-calculator',
  imports: [
   CalculatorDisplay,
   MemoryPanel,
   CalculatorKeyboard
  ],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {}
