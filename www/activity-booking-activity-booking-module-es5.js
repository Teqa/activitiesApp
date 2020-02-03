(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-booking-activity-booking-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/activity-booking/activity-booking.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/activity-booking/activity-booking.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n        <ion-button routerLink=\"/activities/\">\n            <ion-icon slot=\"icon-only\" name=\"arrow-round-back\" ></ion-icon>\n        </ion-button>\n    </ion-buttons>\n    <ion-title>Reservering</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngIf=\"information\">\n        <ion-card-header>\n            <ion-card-title>\n                {{ information.event_desc }}\n            </ion-card-title>\n        <ion-card-subtitle>\n        {{ information.date }}\n        </ion-card-subtitle>\n        </ion-card-header>\n        \n        <ion-card-content class=\"ion-text-center\">\n            \n            <ion-badge color=\"danger\" *ngIf=\"results.status == false\">Error</ion-badge>\n            \n            <ion-badge color=\"success\" *ngIf=\"results.booking_id\">Reservering: {{results.booking_id}}</ion-badge>\n            \n            <ng-container *ngFor=\"let message of results.messages\">\n                <div class=\"error-message\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon> {{ message }}\n                </div>\n            </ng-container>\n        </ion-card-content>\n     </ion-card>\n</ion-content>    "

/***/ }),

/***/ "./src/app/pages/activity-booking/activity-booking-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/activity-booking/activity-booking-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ActivityBookingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityBookingPageRoutingModule", function() { return ActivityBookingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _activity_booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity-booking.page */ "./src/app/pages/activity-booking/activity-booking.page.ts");




var routes = [
    {
        path: '',
        component: _activity_booking_page__WEBPACK_IMPORTED_MODULE_3__["ActivityBookingPage"]
    }
];
var ActivityBookingPageRoutingModule = /** @class */ (function () {
    function ActivityBookingPageRoutingModule() {
    }
    ActivityBookingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ActivityBookingPageRoutingModule);
    return ActivityBookingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/activity-booking/activity-booking.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/activity-booking/activity-booking.module.ts ***!
  \*******************************************************************/
/*! exports provided: ActivityBookingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityBookingPageModule", function() { return ActivityBookingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _activity_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activity-booking-routing.module */ "./src/app/pages/activity-booking/activity-booking-routing.module.ts");
/* harmony import */ var _activity_booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity-booking.page */ "./src/app/pages/activity-booking/activity-booking.page.ts");







var ActivityBookingPageModule = /** @class */ (function () {
    function ActivityBookingPageModule() {
    }
    ActivityBookingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _activity_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActivityBookingPageRoutingModule"]
            ],
            declarations: [_activity_booking_page__WEBPACK_IMPORTED_MODULE_6__["ActivityBookingPage"]]
        })
    ], ActivityBookingPageModule);
    return ActivityBookingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/activity-booking/activity-booking.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/activity-booking/activity-booking.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aXR5LWJvb2tpbmcvYWN0aXZpdHktYm9va2luZy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/activity-booking/activity-booking.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/activity-booking/activity-booking.page.ts ***!
  \*****************************************************************/
/*! exports provided: ActivityBookingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityBookingPage", function() { return ActivityBookingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/activity.service */ "./src/app/services/activity.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_4__);





var ActivityBookingPage = /** @class */ (function () {
    function ActivityBookingPage(activityService, configService) {
        this.activityService = activityService;
        this.configService = configService;
        this.information = null;
        this.contact = null;
        this.participants = null;
        this.results = { status: null, booking_id: null, messages: [] };
    }
    ActivityBookingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.information = this.activityService.chosen_event;
        this.contact = this.activityService.chosen_contact;
        this.participants = this.activityService.chosen_parts;
        var body = this._constructBooking();
        this.activityService.subscribeEvent(body).subscribe(function (response) {
            _this.results = response;
            if (_this.results.status == true) {
                _this.activityService.booked_events.push(_this.information.event_id);
            }
        });
    };
    ActivityBookingPage.prototype._constructBooking = function () {
        var parts = {};
        var idx = 0;
        underscore__WEBPACK_IMPORTED_MODULE_4___default.a.each(this.participants, function (amount, part_id) {
            for (var _i = 0; _i < amount; _i++) {
                parts[idx] = { "id": part_id };
                idx++;
            }
        });
        ;
        var Booking = {
            event_id: this.information.event_id,
            customer: this.activityService.chosen_contact,
            participants: parts,
        };
        var BookingJson = JSON.stringify(Booking);
        return BookingJson;
    };
    ActivityBookingPage.ctorParameters = function () { return [
        { type: _services_activity_service__WEBPACK_IMPORTED_MODULE_1__["ActivityService"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
    ]; };
    ActivityBookingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-activity-booking',
            template: __webpack_require__(/*! raw-loader!./activity-booking.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/activity-booking/activity-booking.page.html"),
            styles: [__webpack_require__(/*! ./activity-booking.page.scss */ "./src/app/pages/activity-booking/activity-booking.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_activity_service__WEBPACK_IMPORTED_MODULE_1__["ActivityService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], ActivityBookingPage);
    return ActivityBookingPage;
}());



/***/ })

}]);
//# sourceMappingURL=activity-booking-activity-booking-module-es5.js.map