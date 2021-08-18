import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeRateTableComponent } from './exchange-rate-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ExchangeRateTableComponent],
  imports: [CommonModule, MatTableModule],
  exports: [ExchangeRateTableComponent],
})
export class ExchangeRateTableModule {}
