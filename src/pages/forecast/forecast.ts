import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { isNumeric } from '../../shared';
import { StorageProvider } from '../../providers/storage/storage';


@IonicPage({
  segment: 'forecast/:search' // use a segment to pull URL relevant data eg. app.com/#/forecast/Denver
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

  // use storage service to load cache key
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

  // helper template function
  getObjKeys(obj) {
    return Object.keys(obj);
  }

  // sort hourly weather data into like-dates
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

  // Fire each time the view becomes active in the DOM
  // Had some issues with Ionic routing and browser here - ideally would use Angular 5+ router events
  ionViewWillEnter() {
    console.log('SEARCH');
    console.log(this.navParams.data);

    this.search = this.navParams.get('search');

    // get cache based on search string
    let cached = this.loadCache(this.search);

    if (cached) {
      // if cache exists, skip the fetch and set the data
      this.setForecastData(cached);
    } else {

      // pull params out of search string (is it zip or city?)
      let params = (isNumeric(this.search) ? { zip: this.search } : { q: this.search })

      // using nav parameters (old style)
      // this.api.fetchForecast(this.navParams.data).subscribe(res => {


      // fetch forecast with params object
      this.api.fetchForecast(params).subscribe((res: any) => {
        console.log(res);

        if (res.cod === '200') {
          // set data/save cache only if sucessful fetch
          this.setForecastData(res);
          this.storage.set(this.search, JSON.stringify(Object.assign({}, res, { fetchedAt: new Date() })));
        }
      }, err => {
        throw err;
      });
    }

  }

}
