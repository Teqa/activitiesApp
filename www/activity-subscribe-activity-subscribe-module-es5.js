(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-subscribe-activity-subscribe-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/activity-subscribe/activity-subscribe.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/activity-subscribe/activity-subscribe.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Contactpersoon</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngIf=\"information\">\n        <ion-card-header>\n            <ion-card-title>\n                {{ information.event_desc }}\n            </ion-card-title>\n        <ion-card-subtitle>\n        {{ information.date }}\n        </ion-card-subtitle>\n        </ion-card-header>\n     </ion-card>\n    \n    \n    <form [formGroup]=\"validations_form\"  (ngSubmit)=\"onSubmit(validations_form.value)\">\n    \n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Voornaam</ion-label>\n      <ion-input type=\"text\" formControlName=\"initials\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.initials\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('initials').hasError(validation.type) && (validations_form.get('initials').dirty || validations_form.get('initials').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Achternaam</ion-label>\n      <ion-input type=\"text\" formControlName=\"lastname\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.lastname\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('lastname').hasError(validation.type) && (validations_form.get('lastname').dirty || validations_form.get('lastname').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Email</ion-label>\n      <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n        \n    <ion-item>\n      <ion-label color=\"primary\">Akkoord met AV</ion-label>\n      <ion-checkbox color=\"primary\" formControlName=\"terms\"></ion-checkbox>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.terms\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('terms').hasError(validation.type) && (validations_form.get('terms').dirty || validations_form.get('terms').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" type=\"submit\" [disabled]=\"!validations_form.valid\">Reserveer!</ion-button>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/activity-subscribe/activity-subscribe-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/activity-subscribe/activity-subscribe-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ActivitySubscribePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitySubscribePageRoutingModule", function() { return ActivitySubscribePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _activity_subscribe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity-subscribe.page */ "./src/app/pages/activity-subscribe/activity-subscribe.page.ts");




var routes = [
    {
        path: '',
        component: _activity_subscribe_page__WEBPACK_IMPORTED_MODULE_3__["ActivitySubscribePage"]
    }
];
var ActivitySubscribePageRoutingModule = /** @class */ (function () {
    function ActivitySubscribePageRoutingModule() {
    }
    ActivitySubscribePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ActivitySubscribePageRoutingModule);
    return ActivitySubscribePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/activity-subscribe/activity-subscribe.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/activity-subscribe/activity-subscribe.module.ts ***!
  \***********************************************************************/
/*! exports provided: ActivitySubscribePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitySubscribePageModule", function() { return ActivitySubscribePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _activity_subscribe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activity-subscribe-routing.module */ "./src/app/pages/activity-subscribe/activity-subscribe-routing.module.ts");
/* harmony import */ var _activity_subscribe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity-subscribe.page */ "./src/app/pages/activity-subscribe/activity-subscribe.page.ts");







var ActivitySubscribePageModule = /** @class */ (function () {
    function ActivitySubscribePageModule() {
    }
    ActivitySubscribePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _activity_subscribe_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActivitySubscribePageRoutingModule"]
            ],
            declarations: [_activity_subscribe_page__WEBPACK_IMPORTED_MODULE_6__["ActivitySubscribePage"]]
        })
    ], ActivitySubscribePageModule);
    return ActivitySubscribePageModule;
}());



/***/ }),

/***/ "./src/app/pages/activity-subscribe/activity-subscribe.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/activity-subscribe/activity-subscribe.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aXR5LXN1YnNjcmliZS9hY3Rpdml0eS1zdWJzY3JpYmUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/activity-subscribe/activity-subscribe.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/activity-subscribe/activity-subscribe.page.ts ***!
  \*********************************************************************/
/*! exports provided: ActivitySubscribePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitySubscribePage", function() { return ActivitySubscribePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/activity.service */ "./src/app/services/activity.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ActivitySubscribePage = /** @class */ (function () {
    function ActivitySubscribePage(activityService, formBuilder, configService, router) {
        this.activityService = activityService;
        this.formBuilder = formBuilder;
        this.configService = configService;
        this.router = router;
        this.information = null;
        this.contact = null;
        this.participants = null;
        this.validation_messages = {
            'initials': [
                { type: 'required', message: 'Initials is required.' }
            ],
            'lastname': [
                { type: 'required', message: 'Last name is required.' }
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please wnter a valid email.' }
            ],
            'terms': [
                { type: 'pattern', message: 'You must accept terms and conditions.' }
            ],
        };
    }
    ActivitySubscribePage.prototype.ngOnInit = function () {
        this.information = this.activityService.chosen_event;
        this.contact = this._initContact(this.activityService.chosen_contact);
        var participants = this.information['participants']['object'];
        this.participants = underscore__WEBPACK_IMPORTED_MODULE_4___default.a.values(participants);
        this.validations_form = this.formBuilder.group({
            initials: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('true'))
        });
        this.validations_form.controls['initials'].setValue(this.contact.initials);
        this.validations_form.controls['lastname'].setValue(this.contact.lastname);
        this.validations_form.controls['email'].setValue(this.contact.email);
    }; //ngOnInit
    ActivitySubscribePage.prototype._initContact = function (contact) {
        if (underscore__WEBPACK_IMPORTED_MODULE_4___default.a.isNull(contact)) {
            contact = {
                initials: '',
                lastname: '',
                email: '',
                terms: ''
            };
        }
        return contact;
    };
    ActivitySubscribePage.prototype.onSubmit = function (data) {
        delete data.terms;
        this.activityService.chosen_contact = data;
        this.router.navigate(['/tab-nav/activity-booking']);
    };
    ActivitySubscribePage.ctorParameters = function () { return [
        { type: _services_activity_service__WEBPACK_IMPORTED_MODULE_1__["ActivityService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ActivitySubscribePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-activity-subscribe',
            template: __webpack_require__(/*! raw-loader!./activity-subscribe.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/activity-subscribe/activity-subscribe.page.html"),
            styles: [__webpack_require__(/*! ./activity-subscribe.page.scss */ "./src/app/pages/activity-subscribe/activity-subscribe.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_activity_service__WEBPACK_IMPORTED_MODULE_1__["ActivityService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ActivitySubscribePage);
    return ActivitySubscribePage;
}());



/***/ })

}]);
//# sourceMappingURL=activity-subscribe-activity-subscribe-module-es5.js.map