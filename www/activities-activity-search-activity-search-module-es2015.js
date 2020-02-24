(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activities-activity-search-activity-search-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/activities/activity-search/activity-search.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/activities/activity-search/activity-search.page.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Activiteiten zoeken demo</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n \n  <ion-searchbar [(ngModel)]=\"searchTerm\" (ionChange)=\"searchChanged()\"></ion-searchbar>\n \n  <ion-item>\n    <ion-label>Selecteer locatie</ion-label>\n    <ion-select [(ngModel)]=\"type\" (ionChange)=\"searchChanged()\">\n      <ion-select-option value=\"\">Alles</ion-select-option>\n      <ion-select-option value=\"movie\">Amsterdam</ion-select-option>\n      <ion-select-option value=\"series\">Den Haag</ion-select-option>\n      <ion-select-option value=\"episode\">Utrecht</ion-select-option>\n    </ion-select>\n  </ion-item>\n         \n  <ion-grid>\n   <ion-row>\n     <ion-col size-lg=\"4\" size-md=\"6\" size-xs=\"12\" *ngFor=\"let item of (results | async)\">\n         <ion-card>\n         <ion-item button routerLink=\"/tab-nav/activity-details/{{item.event_id}}\">\n           <ion-avatar item-start>\n             <img src=\"{{appurl}}{{ item.DEFAULT_IMAGE }}\" *ngIf=\"item.DEFAULT_IMAGE != 'N/A'\">\n           </ion-avatar>\n           <ion-label  class=\"ion-text-wrap\">\n                <h2>{{ item.EVENT_DESC }}</h2>\n                <div>{{ item.EVENT_DATE }} </div>\n                <div><ion-icon name=\"clock\" slot=\"start\"></ion-icon>{{ item.EVENT_FROMTIME }} - {{ item.EVENT_TILLTIME }}</div>\n                <div><ion-icon name=\"planet\" slot=\"start\"></ion-icon> {{ item.EVENT_CUSTOM02 }}</div>\n                <div><ion-icon name=\"globe\" slot=\"start\"></ion-icon> {{ item.REX_DESC }}</div>\n              </ion-label>\n                <ion-badge color=\"danger\" *ngIf=\"item.NUMBER_OF_FREE == 0\">Vol</ion-badge>\n                <ion-badge color=\"warning\" *ngIf=\"item.NUMBER_OF_FREE > 0 && item.NUMBER_OF_FREE < 4\">Bijna vol</ion-badge>\n                <ion-badge color=\"success\" *ngIf=\"item.NUMBER_OF_FREE >= 4\">Vrij</ion-badge>\n         </ion-item>\n         </ion-card>\n     </ion-col>\n   </ion-row>\n </ion-grid>\n  \n  <!--\n  <ion-list>\n \n    <ion-item button *ngFor=\"let item of (results | async)\" routerLink=\"/tab-nav/activity-details/{{item.event_id}}\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{appurl}}{{ item.DEFAULT_IMAGE }}\" *ngIf=\"item.DEFAULT_IMAGE != 'N/A'\">\n      </ion-avatar>\n \n      <ion-label  class=\"ion-text-wrap\">\n        <h3>{{ item.EVENT_DESC }}</h3>\n        {{ item.EVENT_DATE }} <br />\n        {{ item.EVENT_FROMTIME }} - {{ item.EVENT_TILLTIME }}\n      </ion-label>\n        \n        <ion-badge color=\"danger\" *ngIf=\"item.NUMBER_OF_FREE == 0\">Vol</ion-badge>\n        <ion-badge color=\"warning\" *ngIf=\"item.NUMBER_OF_FREE > 0 && item.NUMBER_OF_FREE < 4\">Bijna vol</ion-badge>\n        <ion-badge color=\"success\" *ngIf=\"item.NUMBER_OF_FREE >= 4\">Vrij</ion-badge>\n \n    </ion-item>\n \n  </ion-list>\n \n</ion-content>\n  -->"

/***/ }),

/***/ "./src/app/pages/activities/activity-search/activity-search-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/activities/activity-search/activity-search-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: ActivitySearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitySearchPageRoutingModule", function() { return ActivitySearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _activity_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity-search.page */ "./src/app/pages/activities/activity-search/activity-search.page.ts");




const routes = [
    {
        path: '',
        component: _activity_search_page__WEBPACK_IMPORTED_MODULE_3__["ActivitySearchPage"]
    }
];
let ActivitySearchPageRoutingModule = class ActivitySearchPageRoutingModule {
};
ActivitySearchPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActivitySearchPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/activities/activity-search/activity-search.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/activities/activity-search/activity-search.module.ts ***!
  \****************************************************************************/
/*! exports provided: ActivitySearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitySearchPageModule", function() { return ActivitySearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _activity_search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activity-search-routing.module */ "./src/app/pages/activities/activity-search/activity-search-routing.module.ts");
/* harmony import */ var _activity_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity-search.page */ "./src/app/pages/activities/activity-search/activity-search.page.ts");







let ActivitySearchPageModule = class ActivitySearchPageModule {
};
ActivitySearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _activity_search_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActivitySearchPageRoutingModule"]
        ],
        declarations: [_activity_search_page__WEBPACK_IMPORTED_MODULE_6__["ActivitySearchPage"]]
    })
], ActivitySearchPageModule);



/***/ }),

/***/ "./src/app/pages/activities/activity-search/activity-search.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/activities/activity-search/activity-search.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWN0aXZpdGllcy9hY3Rpdml0eS1zZWFyY2gvQzpcXHd3d1xcYWN0aXZpdGllc0FwcC9zcmNcXGFwcFxccGFnZXNcXGFjdGl2aXRpZXNcXGFjdGl2aXR5LXNlYXJjaFxcYWN0aXZpdHktc2VhcmNoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWN0aXZpdGllcy9hY3Rpdml0eS1zZWFyY2gvYWN0aXZpdHktc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY3Rpdml0aWVzL2FjdGl2aXR5LXNlYXJjaC9hY3Rpdml0eS1zZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhcntcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn0iLCJpb24tYXZhdGFyIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/activities/activity-search/activity-search.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/activities/activity-search/activity-search.page.ts ***!
  \**************************************************************************/
/*! exports provided: ActivitySearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitySearchPage", function() { return ActivitySearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/activity.service */ "./src/app/services/activity.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _tabnav_tabnav_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../tabnav/tabnav.page */ "./src/app/pages/tabnav/tabnav.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let ActivitySearchPage = class ActivitySearchPage {
    /**
     * Constructor of our first page
     * @param activityService The movie Service to get data
     */
    constructor(activityService, configService, tabnav) {
        this.activityService = activityService;
        this.configService = configService;
        this.tabnav = tabnav;
        this.searchTerm = '';
        this.appurl = this.configService.url;
        this.type = '';
    }
    ngOnInit() {
        this.searchChanged();
    }
    searchChanged() {
        this.results = this.activityService.searchData(this.searchTerm, this.type);
    }
};
ActivitySearchPage.ctorParameters = () => [
    { type: _services_activity_service__WEBPACK_IMPORTED_MODULE_1__["ActivityService"] },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _tabnav_tabnav_page__WEBPACK_IMPORTED_MODULE_3__["TabnavPage"] }
];
ActivitySearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-activity-search',
        template: __webpack_require__(/*! raw-loader!./activity-search.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/activities/activity-search/activity-search.page.html"),
        styles: [__webpack_require__(/*! ./activity-search.page.scss */ "./src/app/pages/activities/activity-search/activity-search.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_activity_service__WEBPACK_IMPORTED_MODULE_1__["ActivityService"],
        _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        _tabnav_tabnav_page__WEBPACK_IMPORTED_MODULE_3__["TabnavPage"]])
], ActivitySearchPage);



/***/ })

}]);
//# sourceMappingURL=activities-activity-search-activity-search-module-es2015.js.map