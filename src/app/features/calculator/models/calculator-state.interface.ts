export interface CalculatorState {
  display: string;
  previousValue: number | null;
  operator: string | null;
  waitingForOperand: boolean;
}