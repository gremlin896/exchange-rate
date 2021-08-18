import { ExchangeRateTableComponent } from './exchange-rate-table.component';
import { createComponentFactory } from '@ngneat/spectator';
import { MatTableModule } from '@angular/material/table';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatTableHarness } from '@angular/material/table/testing';
import { ExchangeRateDataModel } from '../../models';

describe('ExchangeRateTableComponent', () => {
  const createComponent = createComponentFactory({
    component: ExchangeRateTableComponent,
    imports: [MatTableModule],
  });

  function init() {
    const spectator = createComponent();
    const harnessLoader = TestbedHarnessEnvironment.loader(spectator.fixture);
    return { spectator, harnessLoader };
  }

  it('should display input data', async () => {
    const { harnessLoader, spectator } = init();
    const mockData: ExchangeRateDataModel[] = [
      { name: 'AED', value: 12.4 },
      { name: 'ERN', value: 5435.12 },
    ];

    spectator.setInput('data', mockData);

    const table = await harnessLoader.getHarness(MatTableHarness);

    const tableData = await table.getCellTextByColumnName();

    expect(tableData.name.text).toEqual(['AED', 'ERN']);
    expect(tableData.value.text).toEqual(['12.4', '5435.12']);
  });
});
