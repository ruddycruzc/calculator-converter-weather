import { Injectable, computed, signal } from '@angular/core';

import { CalculatorState } from '../models/calculator-state.interface';
import { initialCalculatorState } from '../models/initial-calculator-state';
import { CalculatorButtonConfig } from '../models/calculator-button-config.interface';
import { Operator } from '../models/operator.type';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private readonly state = signal<CalculatorState>(initialCalculatorState);

  readonly display = computed(() => this.state().display);

  private updateState(partialState: Partial<CalculatorState>): void {
    this.state.update((state) => ({
      ...state,
      ...partialState,
    }));
  }

  handleButton(button: CalculatorButtonConfig): void {
    switch (button.type) {
      case 'number':
        this.handleNumber(button.value);
        break;

      case 'operator':
        this.handleOperator(button.value as Operator);
        break;

      case 'action':
        this.handleAction(button.value);
        break;
    }
  }

  private handleNumber(value: string): void {
    const currentDisplay = this.display();

    if (currentDisplay === '0') {
      this.updateState({
        display: value,
      });
    }
    this.updateState({
      display: currentDisplay + value,
    });
  }

  private handleOperator(operator: Operator): void {
    const currentValue = Number(this.display());

    this.updateState({
      previousValue: currentValue,
      operator,
      waitingForOperand: true,
    });
  }

  private handleAction(action: string): void {}
}
