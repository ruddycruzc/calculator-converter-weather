import { ButtonType } from "./button.type";
import { ButtonVariant } from "./button-variant.type";

export interface CalculatorButtonConfig {
  label: string;
  value: string;
  type: ButtonType;
  variant:ButtonVariant;
}