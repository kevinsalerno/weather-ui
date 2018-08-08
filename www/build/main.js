webpackJsonp([1],{

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__append_query_string_function__ = __webpack_require__(426);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__append_query_string_function__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extract_query_string_function__ = __webpack_require__(427);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__extract_query_string_function__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__is_numeric_function__ = __webpack_require__(428);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__is_numeric_function__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/forecast/forecast.module": [
		795,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 242;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    // editSearch;
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.VERSION = __webpack_require__(794).version;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/keology/Documents/git/weather-ui/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Catalyst Weather Machine <small>v{{VERSION}}</small>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <p>Welcome to the Catalyst Weather machine! Enter a numeric zip code or city into the search box below to sample the weather.</p>\n\n  <search-bar></search-bar>\n  \n</ion-content>\n\n  <!-- Moved this to a component. See SearchBarComponent -->\n\n  <!-- <ion-item>\n    <ion-label floating>\n      City/Zip\n    </ion-label>\n    <ion-input placeholder="Enter a city or zip" name="editSearch" [(ngModel)]="editSearch"></ion-input>\n  </ion-item>\n  <button ion-button (click)="search($event)">Search</button> -->\n'/*ion-inline-end:"/Users/keology/Documents/git/weather-ui/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  HttpProvider for HTTP/HTTPS calls.
*/
var HttpProvider = /** @class */ (function () {
    function HttpProvider(http) {
        this.http = http;
        // docs
        // https://openweathermap.org
        this.WEATHER_API = 'https://api.openweathermap.org/data/2.5';
        this.WEATHER_API_KEY = '04d3966a200f608972599fb1e39d1537';
    }
    HttpProvider.prototype.fetchForecast = function (params) {
        var query = Object(__WEBPACK_IMPORTED_MODULE_2__shared__["b" /* extractQueryString */])(params);
        return this.http.get(this.WEATHER_API + "/forecast" + query + "&units=imperial&appid=" + this.WEATHER_API_KEY);
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  StorageProvider for Local Storage caching
*/
var StorageProvider = /** @class */ (function () {
    function StorageProvider() {
    }
    StorageProvider.prototype.set = function (key, value) {
        console.log('setting storage!');
        console.log(key);
        window.localStorage[key] = value;
    };
    StorageProvider.prototype.get = function (key) {
        // null check
        if (window.localStorage[key]) {
            return window.localStorage[key];
        }
        return null;
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_bar_search_bar__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__day_forecast_day_forecast__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hour_forecast_hour_forecast__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__temp_graph_temp_graph__ = __webpack_require__(432);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__search_bar_search_bar__["a" /* SearchBarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__day_forecast_day_forecast__["a" /* DayForecastComponent */],
                __WEBPACK_IMPORTED_MODULE_5__hour_forecast_hour_forecast__["a" /* HourForecastComponent */],
                __WEBPACK_IMPORTED_MODULE_6__temp_graph_temp_graph__["a" /* TempGraphComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__search_bar_search_bar__["a" /* SearchBarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__day_forecast_day_forecast__["a" /* DayForecastComponent */],
                __WEBPACK_IMPORTED_MODULE_5__hour_forecast_hour_forecast__["a" /* HourForecastComponent */],
                __WEBPACK_IMPORTED_MODULE_6__temp_graph_temp_graph__["a" /* TempGraphComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(396);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_http_http__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_components_module__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/forecast/forecast.module#ForecastPageModule', name: 'ForecastPage', segment: 'forecast/:search', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_http_http__["a" /* HttpProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = appendQueryString;
function appendQueryString(queryString, param, value) {
    if (queryString)
        return (queryString.length <= 1) ? "" + queryString + param + "=" + value : "&" + queryString + param + "=" + value;
}
//# sourceMappingURL=append-query-string.function.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extractQueryString;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(188);

function extractQueryString(params) {
    var queryString = '?';
    // map query params
    Object.keys(params).forEach(function (key) {
        if (!queryString.includes(key)) {
            queryString = Object(__WEBPACK_IMPORTED_MODULE_0____["a" /* appendQueryString */])(queryString, key, params[key]);
        }
    });
    return queryString;
}
//# sourceMappingURL=extract-query-string.function.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isNumeric;
function isNumeric(value) {
    if (parseInt(value)) {
        return true;
    }
    return false;
}
//# sourceMappingURL=is-numeric.function.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
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
 * Generated class for the SearchBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SearchBarComponent.prototype.search = function (ev) {
        console.log(ev);
        this.navCtrl.push('ForecastPage', { search: this.editSearch });
    };
    SearchBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'search-bar',template:/*ion-inline-start:"/Users/keology/Documents/git/weather-ui/src/components/search-bar/search-bar.html"*/'<form>\n<ion-item>\n  <ion-label stacked for="editSearch">\n    City/Zip\n  </ion-label>\n  <ion-input placeholder="Enter a city or zip" name="editSearch" [(ngModel)]="editSearch"></ion-input>\n</ion-item>\n<button ion-button (click)="search($event)">Search</button>\n</form>'/*ion-inline-end:"/Users/keology/Documents/git/weather-ui/src/components/search-bar/search-bar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());

//# sourceMappingURL=search-bar.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayForecastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the DayForecastComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DayForecastComponent = /** @class */ (function () {
    function DayForecastComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], DayForecastComponent.prototype, "day", void 0);
    DayForecastComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'day-forecast',template:/*ion-inline-start:"/Users/keology/Documents/git/weather-ui/src/components/day-forecast/day-forecast.html"*/'<!-- Modular Day component to reuse for each daily forecast -->\n<h1>{{day[0].dt_txt | date:\'shortDate\'}}</h1>\n<ion-row *ngFor="let hour of day">\n    <hour-forecast [hour]="hour"></hour-forecast>\n</ion-row>'/*ion-inline-end:"/Users/keology/Documents/git/weather-ui/src/components/day-forecast/day-forecast.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DayForecastComponent);
    return DayForecastComponent;
}());

//# sourceMappingURL=day-forecast.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HourForecastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the HourForecastComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HourForecastComponent = /** @class */ (function () {
    function HourForecastComponent() {
    }
    HourForecastComponent.prototype.ngOnInit = function () {
        this.setIcon();
    };
    HourForecastComponent.prototype.setIcon = function () {
        if (this.hour && this.hour.weather && this.hour.weather.length > 0) {
            switch (this.hour.weather[0].main.toLowerCase()) {
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HourForecastComponent.prototype, "hour", void 0);
    HourForecastComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'hour-forecast',template:/*ion-inline-start:"/Users/keology/Documents/git/weather-ui/src/components/hour-forecast/hour-forecast.html"*/'<!-- HourForecast component for displaying hourly weather data -->\n<div *ngIf="hour.main">\n  <h4>{{ hour.dt_txt | date :\'shortTime\' }}</h4>\n  <h5><ion-icon name="{{icon}}"></ion-icon> {{ hour.weather[0].main }}</h5>\n  <h6>{{  hour.weather[0].description }}</h6>\n  <b>Temperate:</b> {{ hour.main.temp }}℉<br>\n  <b>Low:</b> {{ hour.main.temp_min }}℉<br>\n  <b>High:</b> {{ hour.main.temp_max }}℉<br>\n  <b>Humidity:</b> {{ hour.main.humidity }}%<br>\n  <b>Wind:</b> {{ hour.wind.speed }}mph<br>\n</div>'/*ion-inline-end:"/Users/keology/Documents/git/weather-ui/src/components/hour-forecast/hour-forecast.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HourForecastComponent);
    return HourForecastComponent;
}());

//# sourceMappingURL=hour-forecast.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid_v4__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_uuid_v4__);
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
 * Generated class for the TempGraphComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TempGraphComponent = /** @class */ (function () {
    function TempGraphComponent() {
    }
    TempGraphComponent.prototype.ngOnInit = function () {
        // generate a random UUID to use as a binding ID for the graph SVG object
        this.random = __WEBPACK_IMPORTED_MODULE_2_uuid_v4__();
    };
    // listen for changes to the input data field
    TempGraphComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        console.log(this.data);
        if (this.data && this.data.length > 0) {
            this.graphData = this.mapGraphData(this.data);
            this.prepGraph();
            this.lineData = this.getLineData(this.graphData);
            this.drawGraphLines();
        }
    };
    // get our relevant data into x,y fashion
    TempGraphComponent.prototype.mapGraphData = function (data) {
        var result = data.map(function (d) {
            return { x: d.dt, y: d.main.temp };
        });
        console.log('result GRAPH DATA');
        console.log(result);
        return result;
    };
    // prepare the SVG graph based on relevant data
    TempGraphComponent.prototype.prepGraph = function () {
        // Grab the graph SVG from DOM
        this.graph = __WEBPACK_IMPORTED_MODULE_1_d3__["g" /* select */]("#graph-" + this.random);
        var WIDTH = window.innerWidth;
        var HEIGHT = window.innerHeight / 2;
        var MARGINS = {
            top: 50,
            right: 20,
            bottom: 20,
            left: 50
        };
        // get range relevancy w data
        this.xRange = __WEBPACK_IMPORTED_MODULE_1_d3__["f" /* scaleLinear */]().range([MARGINS.left, WIDTH - MARGINS.right]).domain([__WEBPACK_IMPORTED_MODULE_1_d3__["e" /* min */](this.graphData, function (d) {
                return d.x;
            }), __WEBPACK_IMPORTED_MODULE_1_d3__["d" /* max */](this.graphData, function (d) {
                return d.x;
            })]);
        this.yRange = __WEBPACK_IMPORTED_MODULE_1_d3__["f" /* scaleLinear */]().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([__WEBPACK_IMPORTED_MODULE_1_d3__["e" /* min */](this.graphData, function (d) {
                return d.y;
            }), __WEBPACK_IMPORTED_MODULE_1_d3__["d" /* max */](this.graphData, function (d) {
                return d.y;
            })]);
        // set the axis based on ranges
        this.xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["a" /* axisBottom */](this.xRange).tickSize(10).tickFormat(function (d) { return d.x; });
        this.yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["b" /* axisLeft */](this.yRange);
        // draw the axis
        this.graph.append('svg:g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
            .call(this.xAxis);
        this.graph.append('svg:g')
            .attr('class', 'y axis')
            .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
            .call(this.yAxis);
    };
    // convert the line data into relevant points for the SVG graph
    TempGraphComponent.prototype.getLineData = function (data) {
        var _this = this;
        var result = data.map(function (d) {
            return [_this.xRange(d.x), _this.yRange(d.y)];
        });
        console.log('result LINE DATA');
        console.log(result);
        return result;
    };
    // append the lines to DOM
    TempGraphComponent.prototype.drawGraphLines = function () {
        var lineGen = __WEBPACK_IMPORTED_MODULE_1_d3__["c" /* line */]();
        var lines = lineGen(this.lineData);
        this.graph.append('svg:path')
            .attr('d', lines)
            .attr('stroke', 'red')
            .attr('stroke-width', 4)
            .attr('fill', 'none');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TempGraphComponent.prototype, "data", void 0);
    TempGraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'temp-graph',template:/*ion-inline-start:"/Users/keology/Documents/git/weather-ui/src/components/temp-graph/temp-graph.html"*/'<!-- D3 SVG Graph Container -->\n<svg id="graph-{{random}}" width="90%" height="60%"></svg>\n\n<!-- id="graph-{{$scope.id}}" -->'/*ion-inline-end:"/Users/keology/Documents/git/weather-ui/src/components/temp-graph/temp-graph.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TempGraphComponent);
    return TempGraphComponent;
}());

//# sourceMappingURL=temp-graph.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/keology/Documents/git/weather-ui/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/keology/Documents/git/weather-ui/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

module.exports = {"name":"weather-ui","version":"1.0.2","author":"Kevin Salerno","homepage":"https://linkedin.com/in/kevinsalerno/","private":true,"scripts":{"start":"ionic-app-scripts serve","clean":"ionic-app-scripts clean","build":"ionic-app-scripts build","lint":"ionic-app-scripts lint"},"dependencies":{"@angular/animations":"5.2.11","@angular/common":"5.2.11","@angular/compiler":"5.2.11","@angular/compiler-cli":"5.2.11","@angular/core":"5.2.11","@angular/forms":"5.2.11","@angular/http":"5.2.11","@angular/platform-browser":"5.2.11","@angular/platform-browser-dynamic":"5.2.11","@ionic-native/core":"~4.11.0","@ionic-native/splash-screen":"~4.11.0","@ionic-native/status-bar":"~4.11.0","@ionic/storage":"2.1.3","d3":"^5.5.0","ionic-angular":"3.9.2","ionicons":"3.0.0","rxjs":"5.5.11","sw-toolbox":"3.6.0","uuid":"^3.3.2","zone.js":"0.8.26"},"devDependencies":{"@ionic/app-scripts":"3.1.11","@types/d3":"^5.0.0","typescript":"~2.6.2"},"description":"A sample Weather UI project to demonstrate graphing and API utilization"}

/***/ })

},[375]);
//# sourceMappingURL=main.js.map