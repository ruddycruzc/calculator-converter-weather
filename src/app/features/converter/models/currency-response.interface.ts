export interface CurrencyResponse {
  base: string;
  date: string;
  rates: Record<string, string>;
}