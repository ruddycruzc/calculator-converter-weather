import { CalculatorButtonConfig } from '../models/calculator-button-config.interface';
import { actionButton,numberButton,operatorButton } from './button-factory';


export const CALCULATOR_BUTTONS: CalculatorButtonConfig[] = [

 
  numberButton('7'),
  numberButton('8'),
  numberButton('9'),
  operatorButton('÷', '/'),

  numberButton('4'),
  numberButton('5'),
  numberButton('6'),
  operatorButton('×', '*'),

  numberButton('1'),
  numberButton('2'),
  numberButton('3'),
  operatorButton('-', '-'),

  numberButton('0'),
  actionButton('.', 'number'),
  actionButton('=', 'equals'),
  operatorButton('+', '+'),
];