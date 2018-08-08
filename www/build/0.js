webpackJsonp([0],{

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastPageModule", function() { return ForecastPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forecast__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ForecastPageModule = /** @class */ (function () {
    function ForecastPageModule() {
    }
    ForecastPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forecast__["a" /* ForecastPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forecast__["a" /* ForecastPage */]),
            ],
        })
    ], ForecastPageModule);
    return ForecastPageModule;
}());

//# sourceMappingURL=forecast.module.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForecastPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(373);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ForecastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForecastPage = /** @class */ (function () {
    function ForecastPage(navCtrl, navParams, api, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.storage = storage;
        this.data = {};
        this.dates = {};
    }
    ForecastPage.prototype.ionViewDidLoad = function () {
    };
    // use storage service to load cache key
    ForecastPage.prototype.loadCache = function (key) {
        console.log("getting cache for key " + key);
        var cached = this.storage.get(key);
        console.log(cached);
        if (cached) {
            console.log('success!');
            return JSON.parse(cached);
        }
        return null;
    };
    ForecastPage.prototype.setForecastData = function (data) {
        this.data = data;
        this.dates = this.getWeatherByDate(data.list);
    };
    // helper template function
    ForecastPage.prototype.getObjKeys = function (obj) {
        return Object.keys(obj);
    };
    // sort hourly weather data into like-dates
    ForecastPage.prototype.getWeatherByDate = function (list) {
        console.log('get item by date');
        var dates = {};
        list.forEach(function (item) {
            if (item.dt_txt) {
                var date = item.dt_txt.split(' ')[0];
                if (!dates[date]) {
                    dates[date] = [];
                }
                dates[date].push(item);
            }
        });
        return dates;
    };
    // Fire each time the view becomes active in the DOM
    // Had some issues with Ionic routing and browser here - ideally would use Angular 5+ router events
    ForecastPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('SEARCH');
        console.log(this.navParams.data);
        this.search = this.navParams.get('search');
        // get cache based on search string
        var cached = this.loadCache(this.search);
        if (cached) {
            // if cache exists, skip the fetch and set the data
            this.setForecastData(cached);
        }
        else {
            // pull params out of search string (is it zip or city?)
            var params = (Object(__WEBPACK_IMPORTED_MODULE_3__shared__["c" /* isNumeric */])(this.search) ? { zip: this.search } : { q: this.search });
            // using nav parameters (old style)
            // this.api.fetchForecast(this.navParams.data).subscribe(res => {
            // fetch forecast with params object
            this.api.fetchForecast(params).subscribe(function (res) {
                console.log(res);
                if (res.cod === '200') {
                    // set data/save cache only if sucessful fetch
                    _this.setForecastData(res);
                    _this.storage.set(_this.search, JSON.stringify(Object.assign({}, res, { fetchedAt: new Date() })));
                }
            }, function (err) {
                throw err;
            });
        }
    };
    ForecastPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forecast',template:/*ion-inline-start:"/Users/keology/Documents/git/weather-ui/src/pages/forecast/forecast.html"*/'<!--\n  ForecastPage to dynamically load and display weather forecast\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ (data.city) ? data.city.name : \'\'}} Forecast</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <search-bar></search-bar>\n\n  <temp-graph [data]="data.list"></temp-graph>\n\n  <ion-grid>\n    <ion-row offset-1>\n      <ion-col *ngFor="let day of getObjKeys(dates)" col-2>\n        <day-forecast [day]="dates[day]"></day-forecast>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/keology/Documents/git/weather-ui/src/pages/forecast/forecast.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */]])
    ], ForecastPage);
    return ForecastPage;
}());

//# sourceMappingURL=forecast.js.map

/***/ })

});
//# sourceMappingURL=0.js.map