import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExchangeRateTableModule } from './components/exchange-rate-table/exchange-rate-table.module';
import { ExchangeRateFormModule } from './components/exchange-rate-form/exchange-rate-form.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ExchangeRateTableModule,
    ExchangeRateFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
