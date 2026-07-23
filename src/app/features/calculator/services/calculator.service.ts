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
if (button.value === '.') {
  this.handleDecimal();
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

  //DECIMAL
  private handleDecimal(): void {

  const state = this.state();

  if (state.waitingForOperand) {
    this.updateState({
      display: '0.',
      waitingForOperand: false
    });

    return;
  }

  // Si ya existe un decimal, no hacemos nada
  if (state.display.includes('.')) {
    return;
  }

  // Añade el punto decimal
  this.updateState({
    display: `${state.display}.`
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


      case 'M+':
        this.addToMemory();
        break;

      case 'MR':
        this.recallMemory();
        break;

      case 'MC':
        this.clearMemory();
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

  const memoryValue = this.state().memoryValue;

  this.state.set({
    ...initialCalculatorState,
    memoryValue
  });

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



//MEMORY
private addToMemory(): void {

  const state = this.state();
  const currentValue = this.getCurrentValue();

  this.updateState({
    memoryValue: (state.memoryValue ?? 0) + currentValue,
    waitingForOperand: true
  });

}
//RECALL MAMORY
private recallMemory(): void {

  const memory = this.state().memoryValue;

  if (memory === null) {
    return;
  }

  this.updateState({

    display: memory.toString(),
    waitingForOperand: true

  });

}

private clearMemory(): void {

  this.updateState({

    memoryValue: null

  });

}
}