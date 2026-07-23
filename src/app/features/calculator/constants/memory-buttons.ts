import { CalculatorButtonConfig } from '../models/calculator-button-config.interface';
import { actionButton } from './button-factory';

export const MEMORY_BUTTONS: CalculatorButtonConfig[] = [
  actionButton('M+', 'memory'),

  actionButton('MR', 'memory'),

  actionButton('MC', 'memory'),

  actionButton('CE')
];