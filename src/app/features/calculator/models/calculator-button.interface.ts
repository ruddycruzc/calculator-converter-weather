export type ButtonType = 'number' | 'operator' | 'action';

export interface CalculatorButton {
  label: string;
  value: string;
  type: ButtonType;
}