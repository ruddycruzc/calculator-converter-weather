import { Injectable, computed, signal } from '@angular/core';

import { CalculatorState } from '../models/calculator-state.interface';
import { initialCalculatorState } from '../models/initial-calculator-state';
import { CalculatorButtonConfig } from '../models/calculator-button-config.interface';
import { Operator } from '../models/operator.type';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  // ESTADO

  private readonly state = signal<CalculatorState>(initialCalculatorState);

  readonly display = computed(() => this.state().display);

  // API PUBLICA

  handleButton(button: CalculatorButtonConfig): void {

  const state = this.state();

  if (state.hasError && button.value !== 'CE') {
    return;
  }

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

  //NUMEROS

  private handleNumber(value: string): void {
    const state = this.state();
    const currentDisplay = state.display;

    if (state.waitingForOperand) {
      this.updateState({
        display: value,
        waitingForOperand: false,
      });

      return;
    }

    if (currentDisplay === '0') {
      this.updateState({
        display: value,
      });

      return;
    }

    this.updateState({
      display: currentDisplay + value,
    });
  }
  // OPERADORES

  private handleOperator(operator: Operator): void {
    const currentValue = this.getCurrentValue();

    this.updateState({
      previousValue: currentValue,
      operator,
      waitingForOperand: true,
    });
  }

  // ACCIONES
  private handleAction(action: string): void {
    switch (action) {
      case '=':
        this.calculate();
        break;

      case 'CE':
        this.clear();
        break;
    }
  }

  //CAALCULOS

  private calculate(): void {
    //SUMA

    const state = this.state();

    if (state.operator === null || state.previousValue === null) {
      return;
    }
    const currentValue = this.getCurrentValue();

    const result = this.performOperation(state.operator, state.previousValue, currentValue);

    this.updateState({
      display: result.toString(),
      previousValue: null,
      operator: null,
      waitingForOperand: false,
    });
  }
  private performOperation(operator: Operator, left: number, right: number): number {
    switch (operator) {
      case '+':
        return left + right;

    case '-':
      return left - right;

    case '*':
      return left * right;

    case '/':
      return left / right;
    }
  }
  // REINICIO

  private clear(): void {
      this.state.set(initialCalculatorState);
  }

  //HELPERS
  private getCurrentValue(): number {
    return Number(this.display());
  }

  private updateState(partialState: Partial<CalculatorState>): void {
    this.state.update((state) => ({
      ...state,
      ...partialState,
    }));
  }
}
