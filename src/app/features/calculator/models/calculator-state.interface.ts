import { Operator } from './operator.type';

export interface CalculatorState {
  display: string;
  previousValue: number | null;
  operator: Operator| null;
  waitingForOperand: boolean;
  hasError: boolean;
  memoryValue: number | null;
}