import { Currency } from './currency.model';

export interface ExchangeRateResponseModel {
  // Omitted irrelevant properties for simplicity
  base: Currency;
  rates: ExchangeRateResponseRates;
}

export type ExchangeRateResponseRates = { [key in Currency]: number };
