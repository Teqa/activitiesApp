(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{UzZC:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class e{}var t=u("pMnS"),r=u("oBZk"),i=u("ZZ/e"),a=u("s7LF"),b=u("SVse"),s=u("mrSG"),g=u("ej43"),c=u("N/3U"),d=u("SxV6"),m=u("F/us"),p=u.n(m);class h{constructor(l,n,u,o,e,t){this.auth=l,this.tabnav=n,this.router=u,this.formBuilder=o,this.loadingCtrl=e,this.alertCtrl=t,this.loggedin=!1}ngOnInit(){this.auth.currentUserSubject.subscribe(l=>{p.a.isNull(l)?this.loggedin=!1:(this.loggedin=!0,this.user=l)}),this.loginForm=this.formBuilder.group({email:["",a.m.compose([a.m.required,a.m.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])],password:["",a.m.compose([a.m.minLength(6),a.m.required])]})}presentAlert(l){return s.b(this,void 0,void 0,(function*(){const n=yield this.alertCtrl.create({header:"Alert",subHeader:"Niet gelukt in te loggen. Technische melding: ",message:l,buttons:["OK"]});yield n.present()}))}login(){this.loginForm.valid?this.auth.login(this.loginForm.value.email,this.loginForm.value.password).pipe(Object(d.a)()).subscribe(l=>{this.loading=!1,this.router.navigate(["/tab-nav/register"])},l=>{console.log(l),this.presentAlert(l.error.error.message),this.loading=!1}):console.log(this.loginForm.value)}logout(){this.auth.logout(),this.router.navigate(["/tab-nav/login"])}goToResetPassword(){this.router.navigate(["/tab-nav/login"])}createAccount(){this.router.navigate(["/tab-nav/register"])}}var f=u("iInd"),v=o.pb({encapsulation:0,styles:[["page-login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin-bottom:32px}page-login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:20px}page-login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8em;color:#d2d2d2}page-login[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-left:5px}page-login[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{padding:5px}page-login[_ngcontent-%COMP%]   .invalid[_ngcontent-%COMP%]{border-bottom:1px solid #ff6153}page-login[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border-bottom:0!important}"]],data:{}});function C(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,6,"ion-content",[["class","ion-padding"]],null,null,null,r.V,r.n)),o.qb(1,49152,null,0,i.u,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),o.Jb(3,null,["Ingelogd met ",""])),(l()(),o.rb(4,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.logout()&&o),o}),r.M,r.e)),o.qb(5,49152,null,0,i.k,[o.h,o.k,o.x],{expand:[0,"expand"]},null),(l()(),o.Jb(-1,0,["Uitloggen"]))],(function(l,n){l(n,5,0,"block")}),(function(l,n){l(n,3,0,n.component.user.username)}))}function k(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,3,"ion-item",[["class","error-message"]],null,null,null,r.ab,r.s)),o.qb(1,49152,null,0,i.H,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(-1,null,["Geef een geldig e-mail adres op"]))],null,null)}function q(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,3,"ion-item",[["class","error-message"]],null,null,null,r.ab,r.s)),o.qb(1,49152,null,0,i.H,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(-1,null,["Het wachtwoord moet minimaal 6 karakters bevatten"]))],null,null)}function x(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,40,"ion-content",[],null,null,null,r.V,r.n)),o.qb(1,49152,null,0,i.u,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,35,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==o.Db(l,4).onSubmit(u)&&e),"reset"===n&&(e=!1!==o.Db(l,4).onReset()&&e),e}),null,null)),o.qb(3,16384,null,0,a.q,[],null,null),o.qb(4,540672,null,0,a.e,[[8,null],[8,null]],{form:[0,"form"]},null),o.Gb(2048,null,a.a,null,[a.e]),o.qb(6,16384,null,0,a.j,[[4,a.a]],null,null),(l()(),o.rb(7,0,null,null,11,"ion-item",[],null,null,null,r.ab,r.s)),o.qb(8,49152,null,0,i.H,[o.h,o.k,o.x],null,null),(l()(),o.rb(9,0,null,0,2,"ion-label",[["stacked",""]],null,null,null,r.bb,r.t)),o.qb(10,49152,null,0,i.N,[o.h,o.k,o.x],null,null),(l()(),o.Jb(-1,0,["E-mail"])),(l()(),o.rb(12,0,null,0,6,"ion-input",[["formControlName","email"],["placeholder","Je e-mail adres"],["type","email"]],[[2,"invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.Db(l,13)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Db(l,13)._handleInputEvent(u.target)&&e),e}),r.Z,r.r)),o.qb(13,16384,null,0,i.Ob,[o.k],null,null),o.Gb(1024,null,a.g,(function(l){return[l]}),[i.Ob]),o.qb(15,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.g],[2,a.p]],{name:[0,"name"]},null),o.Gb(2048,null,a.h,null,[a.d]),o.qb(17,16384,null,0,a.i,[[4,a.h]],null,null),o.qb(18,49152,[["email",4]],0,i.G,[o.h,o.k,o.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),o.gb(16777216,null,null,1,null,k)),o.qb(20,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.rb(21,0,null,null,11,"ion-item",[],null,null,null,r.ab,r.s)),o.qb(22,49152,null,0,i.H,[o.h,o.k,o.x],null,null),(l()(),o.rb(23,0,null,0,2,"ion-label",[["stacked",""]],null,null,null,r.bb,r.t)),o.qb(24,49152,null,0,i.N,[o.h,o.k,o.x],null,null),(l()(),o.Jb(-1,0,["Wachtwoord"])),(l()(),o.rb(26,0,null,0,6,"ion-input",[["formControlName","password"],["placeholder","Je wachtwoord"],["type","password"]],[[2,"invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.Db(l,27)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Db(l,27)._handleInputEvent(u.target)&&e),e}),r.Z,r.r)),o.qb(27,16384,null,0,i.Ob,[o.k],null,null),o.Gb(1024,null,a.g,(function(l){return[l]}),[i.Ob]),o.qb(29,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.g],[2,a.p]],{name:[0,"name"]},null),o.Gb(2048,null,a.h,null,[a.d]),o.qb(31,16384,null,0,a.i,[[4,a.h]],null,null),o.qb(32,49152,[["password",4]],0,i.G,[o.h,o.k,o.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),o.gb(16777216,null,null,1,null,q)),o.qb(34,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.rb(35,0,null,null,2,"ion-button",[["class","submit-btn"],["color","primary"],["expand","full"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.login()&&o),o}),r.M,r.e)),o.qb(36,49152,null,0,i.k,[o.h,o.k,o.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(l()(),o.Jb(-1,0,["Login"])),(l()(),o.rb(38,0,null,0,2,"ion-button",[["class","submit-btn"],["color","secondary"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.createAccount()&&o),o}),r.M,r.e)),o.qb(39,49152,null,0,i.k,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.Jb(-1,0,["Registreer"]))],(function(l,n){var u=n.component;l(n,4,0,u.loginForm),l(n,15,0,"email"),l(n,18,0,"Je e-mail adres","email"),l(n,20,0,!u.loginForm.controls.email.valid&&u.loginForm.controls.email.dirty),l(n,29,0,"password"),l(n,32,0,"Je wachtwoord","password"),l(n,34,0,!u.loginForm.controls.password.valid&&u.loginForm.controls.password.dirty),l(n,36,0,"primary",!u.loginForm.valid,"full"),l(n,39,0,"secondary")}),(function(l,n){var u=n.component;l(n,2,0,o.Db(n,6).ngClassUntouched,o.Db(n,6).ngClassTouched,o.Db(n,6).ngClassPristine,o.Db(n,6).ngClassDirty,o.Db(n,6).ngClassValid,o.Db(n,6).ngClassInvalid,o.Db(n,6).ngClassPending),l(n,12,0,!u.loginForm.controls.email.valid&&u.loginForm.controls.email.dirty,o.Db(n,17).ngClassUntouched,o.Db(n,17).ngClassTouched,o.Db(n,17).ngClassPristine,o.Db(n,17).ngClassDirty,o.Db(n,17).ngClassValid,o.Db(n,17).ngClassInvalid,o.Db(n,17).ngClassPending),l(n,26,0,!u.loginForm.controls.password.valid&&u.loginForm.controls.password.dirty,o.Db(n,31).ngClassUntouched,o.Db(n,31).ngClassTouched,o.Db(n,31).ngClassPristine,o.Db(n,31).ngClassDirty,o.Db(n,31).ngClassValid,o.Db(n,31).ngClassInvalid,o.Db(n,31).ngClassPending)}))}function D(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,10,"ion-header",[],null,null,null,r.X,r.p)),o.qb(1,49152,null,0,i.B,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,r.pb,r.H)),o.qb(3,49152,null,0,i.Cb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.rb(4,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,r.N,r.f)),o.qb(5,49152,null,0,i.l,[o.h,o.k,o.x],null,null),(l()(),o.rb(6,0,null,0,1,"ion-menu-button",[["menu","prf_menu"]],null,null,null,r.eb,r.x)),o.qb(7,49152,null,0,i.R,[o.h,o.k,o.x],{menu:[0,"menu"]},null),(l()(),o.rb(8,0,null,0,2,"ion-title",[],null,null,null,r.ob,r.G)),o.qb(9,49152,null,0,i.Ab,[o.h,o.k,o.x],null,null),(l()(),o.Jb(-1,0,["Inloggen"])),(l()(),o.gb(16777216,null,null,1,null,C)),o.qb(12,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,null,1,null,x)),o.qb(14,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,7,0,"prf_menu"),l(n,12,0,u.loggedin),l(n,14,0,0==u.loggedin)}),null)}function y(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,1,"app-login",[],null,null,null,D,v)),o.qb(1,114688,null,0,h,[g.a,c.a,f.m,a.b,i.Gb,i.a],null,null)],(function(l,n){l(n,1,0)}),null)}var B=o.nb("app-login",h,y,{},{},[]);class w{}u.d(n,"LoginPageModuleNgFactory",(function(){return M}));var M=o.ob(e,[],(function(l){return o.Ab([o.Bb(512,o.j,o.Z,[[8,[t.a,B]],[3,o.j],o.v]),o.Bb(4608,b.l,b.k,[o.s,[2,b.s]]),o.Bb(4608,a.o,a.o,[]),o.Bb(4608,i.b,i.b,[o.x,o.g]),o.Bb(4608,i.Hb,i.Hb,[i.b,o.j,o.p]),o.Bb(4608,i.Lb,i.Lb,[i.b,o.j,o.p]),o.Bb(4608,a.b,a.b,[]),o.Bb(1073742336,b.c,b.c,[]),o.Bb(1073742336,a.n,a.n,[]),o.Bb(1073742336,a.f,a.f,[]),o.Bb(1073742336,i.Eb,i.Eb,[]),o.Bb(1073742336,a.l,a.l,[]),o.Bb(1073742336,f.o,f.o,[[2,f.t],[2,f.m]]),o.Bb(1073742336,w,w,[]),o.Bb(1073742336,e,e,[]),o.Bb(1024,f.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);