(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activities-activities-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/activities/activities.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/activities/activities.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Activiteiten zoeken demo</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n \n  <ion-searchbar [(ngModel)]=\"searchTerm\" (ionChange)=\"searchChanged()\"></ion-searchbar>\n \n  <ion-item>\n    <ion-label>Selecteer locatie</ion-label>\n    <ion-select [(ngModel)]=\"type\" (ionChange)=\"searchChanged()\">\n      <ion-select-option value=\"\">Alles</ion-select-option>\n      <ion-select-option value=\"movie\">Amsterdam</ion-select-option>\n      <ion-select-option value=\"series\">Den Haag</ion-select-option>\n      <ion-select-option value=\"episode\">Utrecht</ion-select-option>\n    </ion-select>\n  </ion-item>\n         \n  <ion-grid>\n   <ion-row>\n     <ion-col *ngFor=\"let item of (results | async)\" col-12 col-md-6 col-lg-4 col-xl-3>\n         <ion-card>\n         <ion-item button routerLink=\"/tab-nav/activity-details/{{item.event_id}}\">\n           <ion-avatar item-start>\n             <img src=\"{{appurl}}{{ item.DEFAULT_IMAGE }}\" *ngIf=\"item.DEFAULT_IMAGE != 'N/A'\">\n           </ion-avatar>\n           <ion-label  class=\"ion-text-wrap\">\n                <h3>{{ item.EVENT_DESC }}</h3>\n                {{ item.EVENT_DATE }} <br />\n                {{ item.EVENT_FROMTIME }} - {{ item.EVENT_TILLTIME }}\n              </ion-label>\n                <ion-badge color=\"danger\" *ngIf=\"item.NUMBER_OF_FREE == 0\">Vol</ion-badge>\n                <ion-badge color=\"warning\" *ngIf=\"item.NUMBER_OF_FREE > 0 && item.NUMBER_OF_FREE < 4\">Bijna vol</ion-badge>\n                <ion-badge color=\"success\" *ngIf=\"item.NUMBER_OF_FREE >= 4\">Vrij</ion-badge>\n         </ion-item>\n         </ion-card>\n     </ion-col>\n   </ion-row>\n </ion-grid>\n  \n  <!--\n  <ion-list>\n \n    <ion-item button *ngFor=\"let item of (results | async)\" routerLink=\"/tab-nav/activity-details/{{item.event_id}}\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{appurl}}{{ item.DEFAULT_IMAGE }}\" *ngIf=\"item.DEFAULT_IMAGE != 'N/A'\">\n      </ion-avatar>\n \n      <ion-label  class=\"ion-text-wrap\">\n        <h3>{{ item.EVENT_DESC }}</h3>\n        {{ item.EVENT_DATE }} <br />\n        {{ item.EVENT_FROMTIME }} - {{ item.EVENT_TILLTIME }}\n      </ion-label>\n        \n        <ion-badge color=\"danger\" *ngIf=\"item.NUMBER_OF_FREE == 0\">Vol</ion-badge>\n        <ion-badge color=\"warning\" *ngIf=\"item.NUMBER_OF_FREE > 0 && item.NUMBER_OF_FREE < 4\">Bijna vol</ion-badge>\n        <ion-badge color=\"success\" *ngIf=\"item.NUMBER_OF_FREE >= 4\">Vrij</ion-badge>\n \n    </ion-item>\n \n  </ion-list>\n \n</ion-content>\n  -->"

/***/ }),

/***/ "./src/app/pages/activities/activities-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/activities/activities-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ActivitiesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesPageRoutingModule", function() { return ActivitiesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _activities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activities.page */ "./src/app/pages/activities/activities.page.ts");




var routes = [
    {
        path: '',
        component: _activities_page__WEBPACK_IMPORTED_MODULE_3__["ActivitiesPage"]
    }
];
var ActivitiesPageRoutingModule = /** @class */ (function () {
    function ActivitiesPageRoutingModule() {
    }
    ActivitiesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ActivitiesPageRoutingModule);
    return ActivitiesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/activities/activities.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/activities/activities.module.ts ***!
  \*******************************************************/
/*! exports provided: ActivitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesPageModule", function() { return ActivitiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _activities_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activities-routing.module */ "./src/app/pages/activities/activities-routing.module.ts");
/* harmony import */ var _activities_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activities.page */ "./src/app/pages/activities/activities.page.ts");







var ActivitiesPageModule = /** @class */ (function () {
    function ActivitiesPageModule() {
    }
    ActivitiesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _activities_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActivitiesPageRoutingModule"]
            ],
            declarations: [_activities_page__WEBPACK_IMPORTED_MODULE_6__["ActivitiesPage"]]
        })
    ], ActivitiesPageModule);
    return ActivitiesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/activities/activities.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/activities/activities.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aXRpZXMvYWN0aXZpdGllcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/activities/activities.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/activities/activities.page.ts ***!
  \*****************************************************/
/*! exports provided: ActivitiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesPage", function() { return ActivitiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/activity.service */ "./src/app/services/activity.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var ActivitiesPage = /** @class */ (function () {
    /**
     * Constructor of our first page
     * @param activityService The movie Service to get data
     */
    function ActivitiesPage(activityService, configService) {
        this.activityService = activityService;
        this.configService = configService;
        this.searchTerm = '';
        this.appurl = this.configService.url;
        this.type = '';
    }
    ActivitiesPage.prototype.ngOnInit = function () {
        this.searchChanged();
    };
    ActivitiesPage.prototype.searchChanged = function () {
        this.results = this.activityService.searchData(this.searchTerm, this.type);
    };
    ActivitiesPage.ctorParameters = function () { return [
        { type: _services_activity_service__WEBPACK_IMPORTED_MODULE_1__["ActivityService"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
    ]; };
    ActivitiesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-activities',
            template: __webpack_require__(/*! raw-loader!./activities.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/activities/activities.page.html"),
            styles: [__webpack_require__(/*! ./activities.page.scss */ "./src/app/pages/activities/activities.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_activity_service__WEBPACK_IMPORTED_MODULE_1__["ActivityService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], ActivitiesPage);
    return ActivitiesPage;
}());



/***/ }),

/***/ "./src/app/services/activity.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/activity.service.ts ***!
  \**********************************************/
/*! exports provided: SearchType, ActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchType", function() { return SearchType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityService", function() { return ActivityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ "./src/app/services/config.service.ts");




// Typescript custom enum for search types (optional)
var SearchType;
(function (SearchType) {
    SearchType["all"] = "";
    SearchType["movie"] = "movie";
    SearchType["series"] = "series";
    SearchType["episode"] = "episode";
})(SearchType || (SearchType = {}));
var ActivityService = /** @class */ (function () {
    /**
     * Constructor of the Service with Dependency Injection
     * @param http The standard Angular HttpClient to make requests
     */
    function ActivityService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.url = this.configService.url;
        this.search = '';
        this.chosen_parts = null;
        this.chosen_contact = null;
        this.booked_events = [];
    }
    /**
    * Get data from the OmdbApi
    * map the result to return only the results that we need
    *
    * @param {string} title Search Term
    * @param {SearchType} type movie, series, episode or empty
    * @returns Observable with the search results
    */
    ActivityService.prototype.searchData = function (title, type) {
        this.search = '';
        if (title != '') {
            this.search = 'EVENT_DESC ~ ' + title;
        }
        return this.http.get(this.url + "api/rest/event/filter?search=" + encodeURI(this.search) + "&columns=EVENT_ID,OBJ_ID,DEFAULT_IMAGE,OBJECT_IMAGE,OBJ_DESC,EVENT_DESC,EVENT_DATE,EVENT_FROMTIME,EVENT_TILLTIME,NUMBER_OF_PLACES,NUMBER_OF_FREE,NUMBER_OF_WAITINGFREE,SERIES_FIRST,SERIES_TYPE,SERIES_START,SERIES_END,REX_ID,REX_DESC,EVENT_CUSTOM02");
    };
    /**
    * Get the detailed information for an ID using the "i" parameter
    *
    * @param {string} event_id imdbID to retrieve information
    * @returns Observable with detailed information
    */
    ActivityService.prototype.getDetails = function (event_id) {
        return this.http.get(this.url + "api/rest/event/" + (event_id + "?expand=participants&fields=custom01,custom02,custom03,custom04,image,fromtime,tiltime,date,amount"));
    };
    ActivityService.prototype.subscribeEvent = function (body) {
        return this.http.post(this.url + "api/rest/event/subscribe", body);
    };
    ActivityService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    ActivityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], ActivityService);
    return ActivityService;
}());



/***/ }),

/***/ "./src/app/services/config.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this._url = 'https://rondleidingen.i-reserve.net/';
    }
    Object.defineProperty(ConfigService.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ })

}]);
//# sourceMappingURL=activities-activities-module-es5.js.map