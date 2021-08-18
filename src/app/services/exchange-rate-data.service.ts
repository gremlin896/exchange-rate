import { Injectable } from '@angular/core';
import {
  Currency,
  ExchangeRateDataModel,
  ExchangeRateResponseModel,
  ExchangeRateResponseRates,
} from '../models';
import { HttpClient } from '@angular/common/http';
import { EXCHANGE_RATE_ENDPOINT } from '../constants';
import { BehaviorSubject } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRateDataService {
  private dataSubject = new BehaviorSubject<ExchangeRateDataModel[]>([]);
  data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {}

  setSelectedCurrency(baseCurrency: Currency) {
    this.getExchangeRatesForCurrency(baseCurrency)
      .pipe(tap((data) => this.dataSubject.next(data)))
      .subscribe();
  }

  private getExchangeRatesForCurrency(baseCurrency: Currency) {
    return this.http
      .get<ExchangeRateResponseModel>(EXCHANGE_RATE_ENDPOINT + baseCurrency)
      .pipe(
        pluck('rates'),
        map((rates) => this.transformExchangeRatesData(rates))
      );
  }

  private transformExchangeRatesData(
    data: ExchangeRateResponseRates
  ): ExchangeRateDataModel[] {
    return (Object.keys(data) as Currency[]).map((key) => ({
      name: key as Currency,
      value: data[key as Currency],
    }));
  }
}
