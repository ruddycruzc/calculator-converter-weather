export interface CurrencyResponse {
  date: string;
  base: string;
  rates: Record<string, string>;
}