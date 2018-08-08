import { Component, Input } from '@angular/core';

/**
 * Generated class for the DayForecastComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'day-forecast',
  templateUrl: 'day-forecast.html'
})
export class DayForecastComponent {

  @Input()
  day;

  constructor() {
  }

}
