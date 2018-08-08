import { Component, Input } from '@angular/core';

/**
 * Generated class for the HourForecastComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hour-forecast',
  templateUrl: 'hour-forecast.html'
})
export class HourForecastComponent {

  @Input()
  hour;

  icon;

  constructor() {
  }

  ngOnInit() {
    this.setIcon();
  }

  setIcon() {
    if (this.hour && this.hour.weather && this.hour.weather.length > 0) {
      switch(this.hour.weather[0].main.toLowerCase()){
        case 'clouds':
        this.icon = 'cloudy';
        break;
        case 'rain':
        this.icon = 'rainy';
        break;
        case 'clear':
        this.icon = 'sunny';
        break;
        default:
        this.icon = 'cloud';
        break;
      }

    }
  }

}
