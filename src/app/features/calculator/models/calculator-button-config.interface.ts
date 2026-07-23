import { ButtonType } from "./button.type";
import { ButtonVariant } from "./button-variant.type";
import { ButtonValue } from "./button-value.type";

export interface CalculatorButtonConfig {
  label: string;
  value: ButtonValue;
  type: ButtonType ;
  variant:ButtonVariant;
}