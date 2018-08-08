import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the SearchBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.html'
})
export class SearchBarComponent {

  editSearch;

  constructor(public navCtrl: NavController) {

  }

  search(ev) {
    console.log(ev);

    this.navCtrl.push('ForecastPage', { search: this.editSearch });
  }

}
