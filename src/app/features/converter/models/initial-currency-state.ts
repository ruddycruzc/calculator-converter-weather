import { CurrencyState } from "../interfaces/currency-state.interface";

export const initialCurrencyState: CurrencyState = {
  rates: null,
  loading: false,
  error: null,
};