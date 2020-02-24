(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/public/login/login.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/public/login/login.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Inloggen</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" *ngIf=\"loggedin\">\n    <div>Ingelogd met {{ user.username }}</div>\n    <ion-button (click)=\"logout()\" expand=\"block\">Uitloggen</ion-button>\n</ion-content>\n\n<ion-content *ngIf=\"loggedin == false\">\n  <form [formGroup]=\"loginForm\" novalidate>\n    <ion-item>\n      <ion-label stacked>E-mail</ion-label>\n      <ion-input\n        #email\n        formControlName=\"email\"\n        type=\"email\"\n        placeholder=\"Je e-mail adres\"\n        [class.invalid]=\"!loginForm.controls.email.valid &&\n        loginForm.controls.email.dirty\"\n      ></ion-input>\n    </ion-item>\n    <ion-item\n      class=\"error-message\"\n      *ngIf=\"!loginForm.controls.email.valid  &&\n      loginForm.controls.email.dirty\"\n    >\n      <p>Geef een geldig e-mail adres op</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Wachtwoord</ion-label>\n      <ion-input\n        #password\n        formControlName=\"password\"\n        type=\"password\"\n        placeholder=\"Je wachtwoord\"\n        [class.invalid]=\"!loginForm.controls.password.valid &&\n          loginForm.controls.password.dirty\"\n      ></ion-input>\n    </ion-item>\n    <ion-item\n      class=\"error-message\"\n      *ngIf=\"!loginForm.controls.password.valid  &&\n      loginForm.controls.password.dirty\"\n    >\n      <p>Het wachtwoord moet minimaal 6 karakters bevatten</p>\n    </ion-item>\n      \n    <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" (click)=\"login()\" [disabled]=\"!loginForm.valid\">Login</ion-button>\n\n  </form>\n    \n  <!--<ion-button color=\"secondary\" class=\"submit-btn\" (click)=\"goToResetPassword()\">Ik ben mijn wachtwoord vergeten</ion-button>-->\n  \n  <ion-button color=\"secondary\" class=\"submit-btn\" expand=\"full\" (click)=\"createAccount()\">Registreer</ion-button>\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/public/login/login-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/public/login/login-routing.module.ts ***!
  \************************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/public/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/public/login/login.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/public/login/login.module.ts ***!
  \****************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/public/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/public/login/login.page.ts");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/public/login/login.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/public/login/login.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-login form {\n  margin-bottom: 32px;\n}\npage-login form button {\n  margin-top: 20px;\n}\npage-login p {\n  font-size: 0.8em;\n  color: #d2d2d2;\n}\npage-login ion-label {\n  margin-left: 5px;\n}\npage-login ion-input {\n  padding: 5px;\n}\npage-login .invalid {\n  border-bottom: 1px solid #ff6153;\n}\npage-login .error-message .item-inner {\n  border-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGljL2xvZ2luL0M6XFx3d3dcXGFjdGl2aXRpZXNBcHAvc3JjXFxhcHBcXHBhZ2VzXFxwdWJsaWNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtBQ0FKO0FEQ0k7RUFDRSxnQkFBQTtBQ0NOO0FER0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNESjtBRElFO0VBQ0UsZ0JBQUE7QUNGSjtBREtFO0VBQ0UsWUFBQTtBQ0hKO0FETUU7RUFDRSxnQ0FBQTtBQ0pKO0FET0U7RUFDRSwyQkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHVibGljL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtbG9naW4ge1xyXG4gIGZvcm0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBjb2xvcjogI2QyZDJkMjtcclxuICB9XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWlucHV0IHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gIC5pbnZhbGlkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY2MTUzO1xyXG4gIH1cclxuXHJcbiAgLmVycm9yLW1lc3NhZ2UgLml0ZW0taW5uZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufSIsInBhZ2UtbG9naW4gZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG5wYWdlLWxvZ2luIGZvcm0gYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbnBhZ2UtbG9naW4gcCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjZDJkMmQyO1xufVxucGFnZS1sb2dpbiBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxucGFnZS1sb2dpbiBpb24taW5wdXQge1xuICBwYWRkaW5nOiA1cHg7XG59XG5wYWdlLWxvZ2luIC5pbnZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjYxNTM7XG59XG5wYWdlLWxvZ2luIC5lcnJvci1tZXNzYWdlIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/public/login/login.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/public/login/login.page.ts ***!
  \**************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabnav_tabnav_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../tabnav/tabnav.page */ "./src/app/pages/tabnav/tabnav.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_8__);










var LoginPage = /** @class */ (function () {
    function LoginPage(auth, tabnav, router, formBuilder, loadingCtrl, alertCtrl) {
        this.auth = auth;
        this.tabnav = tabnav;
        this.router = router;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.loggedin = false;
        // constructor
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.currentUserSubject.subscribe(function (data) {
            if (underscore__WEBPACK_IMPORTED_MODULE_8___default.a.isNull(data)) {
                _this.loggedin = false;
            }
            else {
                _this.loggedin = true;
                _this.user = data;
            }
        });
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
        });
    };
    LoginPage.prototype.presentAlert = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Alert',
                            subHeader: 'Niet gelukt in te loggen. Technische melding: ',
                            message: msg,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.auth.login(this.loginForm.value.email, this.loginForm.value.password)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
                .subscribe(function (data) {
                _this.loading = false;
                _this.router.navigate(['/tab-nav/register']);
            }, function (error) {
                console.log(error);
                _this.presentAlert(error.error.error.message);
                _this.loading = false;
            });
        }
    };
    LoginPage.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['/tab-nav/login']);
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.router.navigate(['/tab-nav/login']);
    };
    LoginPage.prototype.createAccount = function () {
        this.router.navigate(['/tab-nav/register']);
    };
    LoginPage.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] },
        { type: _tabnav_tabnav_page__WEBPACK_IMPORTED_MODULE_4__["TabnavPage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/public/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/public/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _tabnav_tabnav_page__WEBPACK_IMPORTED_MODULE_4__["TabnavPage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-login-login-module-es5.js.map