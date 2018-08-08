import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { extractQueryString } from '../../shared';

/*
  HttpProvider for HTTP/HTTPS calls.
*/
@Injectable()
export class HttpProvider {

  // docs
  // https://openweathermap.org

  WEATHER_API = 'https://api.openweathermap.org/data/2.5';
  WEATHER_API_KEY = '04d3966a200f608972599fb1e39d1537';

  constructor(public http: HttpClient) {
  }
  
  fetchForecast(params) {

    let query = extractQueryString(params);

    return this.http.get(`${this.WEATHER_API}/forecast${query}&units=imperial&appid=${this.WEATHER_API_KEY}`);
  }

}
