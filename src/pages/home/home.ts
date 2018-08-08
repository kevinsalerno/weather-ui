import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  VERSION = require('../../../package.json').version;
  // editSearch;

  constructor(public navCtrl: NavController) {

  }

  // search(ev) {
  //   console.log(ev);

  //   this.navCtrl.push('ForecastPage', { search: this.editSearch});
  // }

}
