import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ExchangeRateDataModel } from '../../models';

@Component({
  selector: 'app-exchange-rate-table',
  template: `
    <table mat-table [dataSource]="data">
      <mat-text-column name="name" headerText="Currency"></mat-text-column>
      <mat-text-column name="value" headerText="Rate"></mat-text-column>
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
  `,
  styles: [
    `
      table {
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExchangeRateTableComponent {
  @Input() data: ExchangeRateDataModel[] = [];

  displayedColumns = ['name', 'value'];
}
