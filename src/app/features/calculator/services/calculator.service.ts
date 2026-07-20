import { Injectable, computed, signal } from '@angular/core';

import { CalculatorState } from '../models/calculator-state.interface';
import { initialCalculatorState } from '../models/initial-calculator-state';
import { CalculatorButtonConfig } from '../models/calculator-button-config.interface';


@Injectable({
  providedIn: 'root',
})
export class CalculatorService {

  readonly state = signal<CalculatorState>(initialCalculatorState);

  readonly display = computed(() => this.state().display);


  setDisplay(value: string): void {
  this.state.update((state) => ({
    ...state,
    display: value,
  }));
}

handleButton(button: CalculatorButtonConfig): void {

  if (button.type === 'number') {
    this.handleNumber(button.value);
  }

}

private handleNumber(value: string): void {

  const currentDisplay = this.display();

  if (currentDisplay === '0') {
    this.setDisplay(value);
    return;
  }

  this.setDisplay(currentDisplay + value);

}
}