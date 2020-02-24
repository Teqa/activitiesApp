(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activities-activity-parts-activity-parts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/activities/activity-parts/activity-parts.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/activities/activity-parts/activity-parts.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Deelnemers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngIf=\"information\">\n        <ion-card-header>\n            <ion-card-title>\n                {{ information.event_desc }}\n            </ion-card-title>\n        <ion-card-subtitle>\n        {{ information.date }}\n        </ion-card-subtitle>\n        </ion-card-header>\n     </ion-card>\n\n    \n    <form *ngIf=\"validations_form\" [formGroup]=\"validations_form\"  (ngSubmit)=\"onSubmit(validations_form.value)\">\n\n        <ion-item *ngFor=\"let part of participants\">\n            <ion-label position=\"floating\" color=\"primary\">{{ part.desc }}</ion-label>\n            <ion-input type=\"number\" formControlName=\"{{ part.id }}\"></ion-input>\n        </ion-item>\n        \n     <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" type=\"submit\" [disabled]=\"!validations_form.valid\">Verder >></ion-button>\n  </form>\n\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/activities/activity-parts/activity-parts-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/activities/activity-parts/activity-parts-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ActivityPartsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPartsPageRoutingModule", function() { return ActivityPartsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _activity_parts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity-parts.page */ "./src/app/pages/activities/activity-parts/activity-parts.page.ts");




const routes = [
    {
        path: '',
        component: _activity_parts_page__WEBPACK_IMPORTED_MODULE_3__["ActivityPartsPage"]
    }
];
let ActivityPartsPageRoutingModule = class ActivityPartsPageRoutingModule {
};
ActivityPartsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActivityPartsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/activities/activity-parts/activity-parts.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/activities/activity-parts/activity-parts.module.ts ***!
  \**************************************************************************/
/*! exports provided: ActivityPartsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPartsPageModule", function() { return ActivityPartsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _activity_parts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activity-parts-routing.module */ "./src/app/pages/activities/activity-parts/activity-parts-routing.module.ts");
/* harmony import */ var _activity_parts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity-parts.page */ "./src/app/pages/activities/activity-parts/activity-parts.page.ts");







let ActivityPartsPageModule = class ActivityPartsPageModule {
};
ActivityPartsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _activity_parts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActivityPartsPageRoutingModule"]
        ],
        declarations: [_activity_parts_page__WEBPACK_IMPORTED_MODULE_6__["ActivityPartsPage"]]
    })
], ActivityPartsPageModule);



/***/ }),

/***/ "./src/app/pages/activities/activity-parts/activity-parts.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/activities/activity-parts/activity-parts.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aXRpZXMvYWN0aXZpdHktcGFydHMvYWN0aXZpdHktcGFydHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/activities/activity-parts/activity-parts.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/activities/activity-parts/activity-parts.page.ts ***!
  \************************************************************************/
/*! exports provided: ActivityPartsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPartsPage", function() { return ActivityPartsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/activity.service */ "./src/app/services/activity.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let ActivityPartsPage = class ActivityPartsPage {
    constructor(activityService, formBuilder, configService, router) {
        this.activityService = activityService;
        this.formBuilder = formBuilder;
        this.configService = configService;
        this.router = router;
        this.information = null;
        this.participants = null;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.information = this.activityService.chosen_event;
        this.initParts();
    }
    initParts() {
        var participants = this.information['participants']['object'];
        this.participants = underscore__WEBPACK_IMPORTED_MODULE_4___default.a.values(participants);
        var participants = this.information['participants']['object'];
        this.participants = underscore__WEBPACK_IMPORTED_MODULE_4___default.a.values(participants);
        let formfields = {};
        underscore__WEBPACK_IMPORTED_MODULE_4___default.a.each(participants, function (part, key) {
            if (part.min > 0) {
                let ff = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(part.min),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(this.information.Free)
                ]));
                formfields[part.id] = ff;
            }
            else {
                let ff = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(part.min),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(this.information.Free)
                ]));
                formfields[part.id] = ff;
            }
        }, this);
        this.validations_form = this.formBuilder.group(formfields);
    }
    onSubmit(data) {
        this.activityService.chosen_parts = data;
        this.router.navigate(['/tab-nav/activity-subscribe']);
    }
};
ActivityPartsPage.ctorParameters = () => [
    { type: _services_activity_service__WEBPACK_IMPORTED_MODULE_1__["ActivityService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ActivityPartsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-activity-parts',
        template: __webpack_require__(/*! raw-loader!./activity-parts.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/activities/activity-parts/activity-parts.page.html"),
        styles: [__webpack_require__(/*! ./activity-parts.page.scss */ "./src/app/pages/activities/activity-parts/activity-parts.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_activity_service__WEBPACK_IMPORTED_MODULE_1__["ActivityService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], ActivityPartsPage);



/***/ })

}]);
//# sourceMappingURL=activities-activity-parts-activity-parts-module-es2015.js.map