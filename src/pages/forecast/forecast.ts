import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { isNumeric } from '../../shared';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the ForecastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'forecast/:search'
})
@Component({
  selector: 'page-forecast',
  templateUrl: 'forecast.html',
})
export class ForecastPage {


  search: any;
  data: any = {};
  dates: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: HttpProvider,
    private storage: StorageProvider) {
  }

  ionViewDidLoad() {

  }

  loadCache(key) {
    console.log(`getting cache for key ${key}`)
    let cached = this.storage.get(key);
    console.log(cached);
    if (cached) {
      console.log('success!');
      return JSON.parse(cached);
    }
    return null;
  }

  setForecastData(data) {
    this.data = data;
    this.dates = this.getWeatherByDate(data.list);
  }

  getObjKeys(obj) {
    return Object.keys(obj);
  }

  getWeatherByDate(list) {
    console.log('get item by date');
    let dates = {};
    list.forEach(item => {
      if (item.dt_txt) {
        let date = item.dt_txt.split(' ')[0];
        if (!dates[date]) {
          dates[date] = [];
        }
        dates[date].push(item);
      }
    });
    return dates;
  }

  ionViewWillEnter() {
    console.log('SEARCH');
    console.log(this.navParams.data);

    this.search = this.navParams.get('search');

    let cached = this.loadCache(this.search);

    if (cached) {
      this.setForecastData(cached);
    } else {

      let params = (isNumeric(this.search) ? { zip: this.search } : { q: this.search })

      // using nav parameters (old style)
      // this.api.fetchForecast(this.navParams.data).subscribe(res => {


      this.api.fetchForecast(params).subscribe((res: any) => {
        console.log(res);

        if (res.cod === '200') {
          this.setForecastData(res);
          // this.data = res;
          this.storage.set(this.search, JSON.stringify(Object.assign({}, res, { fetchedAt: new Date() })));
        }
      }, err => {
        throw err;
      });
    }

  }

}
