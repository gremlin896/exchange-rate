import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeRateFormComponent } from './exchange-rate-form.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExchangeRateFormComponent],
  imports: [CommonModule, MatSelectModule, ReactiveFormsModule],
  exports: [ExchangeRateFormComponent],
})
export class ExchangeRateFormModule {}
