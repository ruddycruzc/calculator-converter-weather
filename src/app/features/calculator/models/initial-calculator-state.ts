import { CalculatorState } from './calculator-state.interface';

export const initialCalculatorState: CalculatorState = {
  display: '0',
  previousValue: null,
  operator: null,
  waitingForOperand: false,
  hasError: false,
};