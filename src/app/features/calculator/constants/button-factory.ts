import { CalculatorButtonConfig } from '../models/calculator-button-config.interface';
import { ButtonVariant } from '../models/button-variant.type';

export const numberButton = (
  value: string
): CalculatorButtonConfig => ({
  label: value,
  value,
  type: 'number',
  variant: 'number',
});

export const operatorButton = (
  label: string,
  value: string
): CalculatorButtonConfig => ({
  label,
  value,
  type: 'operator',
  variant: 'operator',
});

export const actionButton = (
  label: string,
  variant: ButtonVariant = 'action'
): CalculatorButtonConfig => ({
  label,
  value: label,
  type: 'action',
  variant,
});