(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabnav-tabnav-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tabnav/tabnav.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tabnav/tabnav.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"home\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Home</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"about\">\n        <ion-icon name=\"list\"></ion-icon>\n        <ion-label>About</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tabnav/tabnav-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/tabnav/tabnav-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TabnavPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabnavPageRoutingModule", function() { return TabnavPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabnav_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabnav.page */ "./src/app/pages/tabnav/tabnav.page.ts");




const routes = [
    {
        path: 'tab-nav',
        component: _tabnav_page__WEBPACK_IMPORTED_MODULE_3__["TabnavPage"],
        children: [
            {
                path: 'activities',
                loadChildren: () => __webpack_require__.e(/*! import() | activities-activities-module */ "activities-activities-module").then(__webpack_require__.bind(null, /*! ./../activities/activities.module */ "./src/app/pages/activities/activities.module.ts")).then(m => m.ActivitiesPageModule)
            },
            {
                path: 'activity-details/:event_id',
                loadChildren: () => Promise.all(/*! import() | activity-details-activity-details-module */[__webpack_require__.e("default~activity-booking-activity-booking-module~activity-details-activity-details-module~activity-p~ffa148ef"), __webpack_require__.e("activity-details-activity-details-module")]).then(__webpack_require__.bind(null, /*! ./../activity-details/activity-details.module */ "./src/app/pages/activity-details/activity-details.module.ts")).then(m => m.ActivityDetailsPageModule)
            },
            {
                path: 'activity-subscribe',
                loadChildren: () => Promise.all(/*! import() | activity-subscribe-activity-subscribe-module */[__webpack_require__.e("default~activity-booking-activity-booking-module~activity-details-activity-details-module~activity-p~ffa148ef"), __webpack_require__.e("activity-subscribe-activity-subscribe-module")]).then(__webpack_require__.bind(null, /*! ./../activity-subscribe/activity-subscribe.module */ "./src/app/pages/activity-subscribe/activity-subscribe.module.ts")).then(m => m.ActivitySubscribePageModule)
            },
            {
                path: 'activity-booking',
                loadChildren: () => Promise.all(/*! import() | activity-booking-activity-booking-module */[__webpack_require__.e("default~activity-booking-activity-booking-module~activity-details-activity-details-module~activity-p~ffa148ef"), __webpack_require__.e("activity-booking-activity-booking-module")]).then(__webpack_require__.bind(null, /*! ./../activity-booking/activity-booking.module */ "./src/app/pages/activity-booking/activity-booking.module.ts")).then(m => m.ActivityBookingPageModule)
            },
            {
                path: 'activity-parts',
                loadChildren: () => Promise.all(/*! import() | activity-parts-activity-parts-module */[__webpack_require__.e("default~activity-booking-activity-booking-module~activity-details-activity-details-module~activity-p~ffa148ef"), __webpack_require__.e("activity-parts-activity-parts-module")]).then(__webpack_require__.bind(null, /*! ./../activity-parts/activity-parts.module */ "./src/app/pages/activity-parts/activity-parts.module.ts")).then(m => m.ActivityPartsPageModule)
            },
            {
                path: 'about',
                loadChildren: () => __webpack_require__.e(/*! import() | about-about-module */ "about-about-module").then(__webpack_require__.bind(null, /*! ./../about/about.module */ "./src/app/pages/about/about.module.ts")).then(m => m.AboutPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tab-nav/activities'
    }
];
let TabnavPageRoutingModule = class TabnavPageRoutingModule {
};
TabnavPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TabnavPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabnav/tabnav.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/tabnav/tabnav.module.ts ***!
  \***********************************************/
/*! exports provided: TabnavPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabnavPageModule", function() { return TabnavPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabnav_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabnav-routing.module */ "./src/app/pages/tabnav/tabnav-routing.module.ts");
/* harmony import */ var _tabnav_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabnav.page */ "./src/app/pages/tabnav/tabnav.page.ts");







let TabnavPageModule = class TabnavPageModule {
};
TabnavPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabnav_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabnavPageRoutingModule"]
        ],
        declarations: [_tabnav_page__WEBPACK_IMPORTED_MODULE_6__["TabnavPage"]]
    })
], TabnavPageModule);



/***/ }),

/***/ "./src/app/pages/tabnav/tabnav.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/tabnav/tabnav.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYm5hdi90YWJuYXYucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tabnav/tabnav.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/tabnav/tabnav.page.ts ***!
  \*********************************************/
/*! exports provided: TabnavPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabnavPage", function() { return TabnavPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabnavPage = class TabnavPage {
    constructor() { }
    ngOnInit() {
    }
};
TabnavPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabnav',
        template: __webpack_require__(/*! raw-loader!./tabnav.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tabnav/tabnav.page.html"),
        styles: [__webpack_require__(/*! ./tabnav.page.scss */ "./src/app/pages/tabnav/tabnav.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabnavPage);



/***/ })

}]);
//# sourceMappingURL=pages-tabnav-tabnav-module-es2015.js.map