import { Component } from '@angular/core';
import { ExchangeRateDataService } from './services';

// For simplicity, this component will act as the feature component
// this would usually be a bad practice in a larger application.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public service: ExchangeRateDataService) {}
}
