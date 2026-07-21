import { CalculatorButtonConfig } from '../models/calculator-button-config.interface';
import { ButtonVariant } from '../models/button-variant.type';

const numberButton = (value: string): CalculatorButtonConfig => ({
  label: value,
  value,
  type: 'number',
  variant: 'number',
});

const operatorButton = (
  label: string,
  value: string
): CalculatorButtonConfig => ({
  label,
  value,
  type: 'operator',
  variant: 'operator',
});

const actionButton = (
  label: string,
  variant: ButtonVariant = 'action'
): CalculatorButtonConfig => ({
  label,
  value: label,
  type: 'action',
  variant,
});


export const CALCULATOR_BUTTONS: CalculatorButtonConfig[] = [
  // Row 1
  actionButton('CE'),
  actionButton('MC', 'memory'),
  actionButton('MR', 'memory'),
  operatorButton('÷', '/'),

  // Row 2
  numberButton('7'),
  numberButton('8'),
  numberButton('9'),
  operatorButton('×', '*'),

  // Row 3
  numberButton('4'),
  numberButton('5'),
  numberButton('6'),
  operatorButton('-', '-'),

  // Row 4
  numberButton('1'),
  numberButton('2'),
  numberButton('3'),
  operatorButton('+', '+'),

  // Row 5
  numberButton('0'),
  actionButton('.'),
  actionButton('=', 'equals'),
];