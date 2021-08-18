import { ExchangeRateFormComponent } from './exchange-rate-form.component';
import { createComponentFactory } from '@ngneat/spectator';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatSelectHarness } from '@angular/material/select/testing';
import { Currency } from '../../models';
import { first, skip } from 'rxjs/operators';
import { DEFAULT_SELECTED_CURRENCY } from '../../constants';

describe('ExchangeRateFormComponent', () => {
  const createComponent = createComponentFactory({
    component: ExchangeRateFormComponent,
    imports: [MatSelectModule, ReactiveFormsModule],
  });

  function init() {
    const spectator = createComponent();
    const harnessLoader = TestbedHarnessEnvironment.loader(spectator.fixture);
    return { spectator, harnessLoader };
  }

  describe('currencySelected output', () => {
    it('should emit on selection', async () => {
      const { harnessLoader, spectator } = init();
      const select = await harnessLoader.getHarness(MatSelectHarness);

      const mockValue = 'AED' as Currency;

      await select.open();

      const output = spectator
        .output('currencySelected')
        .pipe(skip(1), first())
        .toPromise();

      await select.clickOptions({ text: mockValue });

      expect(await output).toBe(mockValue);
    });

    it('should emit initial value on form init', async () => {
      const { spectator } = init();

      const output = spectator
        .output('currencySelected')
        .pipe(first())
        .toPromise();

      expect(await output).toBe(DEFAULT_SELECTED_CURRENCY);
    });
  });
});
