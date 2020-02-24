(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activities-activity-details-activity-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/activities/activity-details/activity-details.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/activities/activity-details/activity-details.page.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"information\">{{ information.object_desc }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content class=\"ion-padding\">\n \n  <ion-card *ngIf=\"information\">\n    <ion-card-header>\n      <ion-card-title>\n        {{ information.event_desc }}\n      </ion-card-title>\n      <ion-card-subtitle>\n        {{ information.date }}\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content class=\"ion-text-center\">\n      <img src=\"{{appurl}}{{information.image}}\" class=\"info-img\">\n      <div>{{ information.long_memo }}</div>\n \n      <ion-item lines=\"none\">\n        <ion-icon name=\"clock\" slot=\"start\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">{{ information.fromtime }} - {{ information.tiltime }}</ion-label>\n      </ion-item>\n      \n      <ion-item lines=\"none\">\n        <ion-icon name=\"contacts\" slot=\"start\"></ion-icon>\n        <ion-label>{{ information.Free }} van de {{ information.amount }} plaatsen vrij</ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-icon name=\"globe\" slot=\"start\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">{{ information.location }}</ion-label>\n      </ion-item>\n      \n      <!-- Taal  -->\n      <ion-item lines=\"none\">\n        <ion-icon name=\"planet\" slot=\"start\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">{{ information.custom02 }}</ion-label>\n      </ion-item>\n      \n      <!-- Gids -->\n      <ion-item lines=\"none\" *ngIf=\"information.custom01 != ''\">\n        <ion-icon name=\"walk\" slot=\"start\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">{{ information.custom01 }}</ion-label>\n      </ion-item>      \n      \n      <!-- Warning message -->\n      <ion-item color=\"warning\" *ngIf=\"information.custom03 != ''\">\n        <ion-label>\n          <ion-icon name=\"alert-circle-outline\"></ion-icon>\n          <ion-label class=\"ion-text-wrap\">{{ information.custom03 }}</ion-label>\n        </ion-label>\n      </ion-item>\n      \n      <ion-button shape=\"round\" color=\"success\" *ngIf=\"information.Free > 0 && blocked == false\" routerLink=\"/tab-nav/activity-parts\">\n        Maak reservering\n       </ion-button>\n      \n      <ion-badge color=\"success\" *ngIf=\"blocked == true\">Al geboekt</ion-badge>\n            \n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/activities/activity-details/activity-details-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/activities/activity-details/activity-details-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ActivityDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityDetailsPageRoutingModule", function() { return ActivityDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _activity_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity-details.page */ "./src/app/pages/activities/activity-details/activity-details.page.ts");




const routes = [
    {
        path: '',
        component: _activity_details_page__WEBPACK_IMPORTED_MODULE_3__["ActivityDetailsPage"]
    }
];
let ActivityDetailsPageRoutingModule = class ActivityDetailsPageRoutingModule {
};
ActivityDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActivityDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/activities/activity-details/activity-details.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/activities/activity-details/activity-details.module.ts ***!
  \******************************************************************************/
/*! exports provided: ActivityDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityDetailsPageModule", function() { return ActivityDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _activity_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activity-details-routing.module */ "./src/app/pages/activities/activity-details/activity-details-routing.module.ts");
/* harmony import */ var _activity_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity-details.page */ "./src/app/pages/activities/activity-details/activity-details.page.ts");







let ActivityDetailsPageModule = class ActivityDetailsPageModule {
};
ActivityDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _activity_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActivityDetailsPageRoutingModule"]
        ],
        declarations: [_activity_details_page__WEBPACK_IMPORTED_MODULE_6__["ActivityDetailsPage"]]
    })
], ActivityDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/activities/activity-details/activity-details.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/activities/activity-details/activity-details.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-img {\n  max-height: 30vh;\n  -o-object-fit: contain;\n     object-fit: contain;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWN0aXZpdGllcy9hY3Rpdml0eS1kZXRhaWxzL0M6XFx3d3dcXGFjdGl2aXRpZXNBcHAvc3JjXFxhcHBcXHBhZ2VzXFxhY3Rpdml0aWVzXFxhY3Rpdml0eS1kZXRhaWxzXFxhY3Rpdml0eS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWN0aXZpdGllcy9hY3Rpdml0eS1kZXRhaWxzL2FjdGl2aXR5LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWN0aXZpdGllcy9hY3Rpdml0eS1kZXRhaWxzL2FjdGl2aXR5LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8taW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDMwdmg7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSIsIi5pbmZvLWltZyB7XG4gIG1heC1oZWlnaHQ6IDMwdmg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/activities/activity-details/activity-details.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/activities/activity-details/activity-details.page.ts ***!
  \****************************************************************************/
/*! exports provided: ActivityDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityDetailsPage", function() { return ActivityDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/activity.service */ "./src/app/services/activity.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ActivityDetailsPage = class ActivityDetailsPage {
    /**
     * Constructor of our details page
     * @param activatedRoute Information about the route we are on
     * @param activityService The activity Service to get data
     */
    constructor(activatedRoute, activityService, configService) {
        this.activatedRoute = activatedRoute;
        this.activityService = activityService;
        this.configService = configService;
        this.information = null;
        this.blocked = true;
        this.appurl = this.configService.url;
    }
    ngOnInit() {
        let event_id = this.activatedRoute.snapshot.params.event_id;
        this.activityService.getDetails(event_id).subscribe((response) => {
            this.information = response;
            this.activityService.chosen_event = response;
        });
    }
    /*
     * When this page is reloaded, check if the event was booked from this app
     */
    ionViewWillEnter() {
        let event_id = this.activatedRoute.snapshot.params.event_id;
        if (underscore__WEBPACK_IMPORTED_MODULE_4___default.a.contains(this.activityService.booked_events, event_id))
            this.blocked = true;
        else
            this.blocked = false;
    }
};
ActivityDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_activity_service__WEBPACK_IMPORTED_MODULE_1__["ActivityService"] },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
];
ActivityDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-activity-details',
        template: __webpack_require__(/*! raw-loader!./activity-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/activities/activity-details/activity-details.page.html"),
        styles: [__webpack_require__(/*! ./activity-details.page.scss */ "./src/app/pages/activities/activity-details/activity-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_activity_service__WEBPACK_IMPORTED_MODULE_1__["ActivityService"],
        _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
], ActivityDetailsPage);



/***/ })

}]);
//# sourceMappingURL=activities-activity-details-activity-details-module-es2015.js.map