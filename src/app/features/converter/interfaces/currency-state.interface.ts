import { CurrencyResponse } from "./currency-response.interface";

export interface CurrencyState {
  rates: CurrencyResponse | null;
  loading: boolean;
  error: string | null;
}