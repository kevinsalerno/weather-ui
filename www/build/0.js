webpackJsonp([0],{

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastPageModule", function() { return ForecastPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forecast__ = __webpack_require__(792);
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

/***/ 792:
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
    ForecastPage.prototype.getObjKeys = function (obj) {
        return Object.keys(obj);
    };
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
    ForecastPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('SEARCH');
        console.log(this.navParams.data);
        this.search = this.navParams.get('search');
        var cached = this.loadCache(this.search);
        if (cached) {
            this.setForecastData(cached);
        }
        else {
            var params = (Object(__WEBPACK_IMPORTED_MODULE_3__shared__["c" /* isNumeric */])(this.search) ? { zip: this.search } : { q: this.search });
            // using nav parameters (old style)
            // this.api.fetchForecast(this.navParams.data).subscribe(res => {
            this.api.fetchForecast(params).subscribe(function (res) {
                console.log(res);
                if (res.cod === '200') {
                    _this.setForecastData(res);
                    // this.data = res;
                    _this.storage.set(_this.search, JSON.stringify(Object.assign({}, res, { fetchedAt: new Date() })));
                }
            }, function (err) {
                throw err;
            });
        }
    };
    ForecastPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forecast',template:/*ion-inline-start:"/Users/keology/Documents/catalyst-ui-new/src/pages/forecast/forecast.html"*/'<!--\n  Generated template for the ForecastPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ (data.city) ? data.city.name : \'\'}} Forecast</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <search-bar></search-bar>\n\n  <temp-graph [data]="data.list"></temp-graph>\n\n  <ion-grid>\n    <ion-row offset-1>\n      <ion-col *ngFor="let day of getObjKeys(dates)" col-2>\n        <day-forecast [day]="dates[day]"></day-forecast>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n<!-- \n  <ul *ngIf="data.list">\n    <li *ngFor="let item of data.list">\n      {{item | json}}\n    </li>\n  </ul> -->\n</ion-content>'/*ion-inline-end:"/Users/keology/Documents/catalyst-ui-new/src/pages/forecast/forecast.html"*/,
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