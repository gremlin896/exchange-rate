import { ChangeDetectionStrategy, Component, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CURRENCIES, Currency } from '../../models';
import { DEFAULT_SELECTED_CURRENCY } from '../../constants';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-exchange-rate-form',
  template: ` <form [formGroup]="form">
    <mat-form-field>
      <mat-label>Base Currency</mat-label>
      <mat-select formControlName="baseCurrency">
        <mat-option *ngFor="let option of options" [value]="option">{{
          option
        }}</mat-option>
      </mat-select>
    </mat-form-field>
  </form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExchangeRateFormComponent {
  form = this.fb.group({
    baseCurrency: [DEFAULT_SELECTED_CURRENCY as Currency],
  });

  options: Currency[] = CURRENCIES;

  @Output() currencySelected: Observable<Currency> = this.form.controls[
    'baseCurrency'
  ].valueChanges.pipe(startWith(this.form.value.baseCurrency));

  constructor(private fb: FormBuilder) {}
}
