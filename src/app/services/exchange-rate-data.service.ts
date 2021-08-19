import { Injectable } from '@angular/core';
import {
  Currency,
  ExchangeRateTableData,
  ExchangeRateResponse,
  ExchangeRateResponseRates,
} from '../models';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRateDataService {
  private dataSubject = new BehaviorSubject<ExchangeRateTableData[]>([]);
  data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {}

  setSelectedCurrency(baseCurrency: Currency) {
    this.getExchangeRatesForCurrency(baseCurrency)
      .pipe(tap((data) => this.dataSubject.next(data)))
      .subscribe();
  }

  private getExchangeRatesForCurrency(baseCurrency: Currency) {
    return this.http
      .get<ExchangeRateResponse>(environment.endpoint + baseCurrency)
      .pipe(
        pluck('rates'),
        map((rates) => this.transformExchangeRatesData(rates))
      );
  }

  private transformExchangeRatesData(
    data: ExchangeRateResponseRates
  ): ExchangeRateTableData[] {
    return (Object.keys(data) as Currency[]).map((key) => ({
      name: key as Currency,
      value: data[key as Currency],
    }));
  }
}
