(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{hwpF:function(l,n,u){"use strict";u.r(n);var i=u("8Y7J");class t{}var e=u("pMnS"),a=u("oBZk"),o=u("ZZ/e"),r=u("SVse"),s=u("s7LF"),b=u("3ROY"),c=u("r4Kj"),g=u("F/us"),m=u.n(g);class d{constructor(l,n,u,i){this.activityService=l,this.formBuilder=n,this.configService=u,this.router=i,this.information=null,this.contact=null,this.participants=null,this.validation_messages={initials:[{type:"required",message:"Initials is required."}],lastname:[{type:"required",message:"Last name is required."}],email:[{type:"required",message:"Email is required."},{type:"pattern",message:"Please wnter a valid email."}],terms:[{type:"pattern",message:"You must accept terms and conditions."}]}}ngOnInit(){this.information=this.activityService.chosen_event,this.contact=this._initContact(this.activityService.chosen_contact),this.participants=m.a.values(this.information.participants.object),this.validations_form=this.formBuilder.group({initials:new s.c("",s.m.required),lastname:new s.c("",s.m.required),email:new s.c("",s.m.compose([s.m.required,s.m.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),terms:new s.c(!1,s.m.pattern("true"))}),this.validations_form.controls.initials.setValue(this.contact.initials),this.validations_form.controls.lastname.setValue(this.contact.lastname),this.validations_form.controls.email.setValue(this.contact.email)}_initContact(l){return m.a.isNull(l)&&(l={initials:"",lastname:"",email:"",terms:""}),l}onSubmit(l){delete l.terms,this.activityService.chosen_contact=l,this.router.navigate(["/tab-nav/activity-booking"])}}var f=u("iInd"),p=i.pb({encapsulation:0,styles:[[""]],data:{}});function h(l){return i.Lb(0,[(l()(),i.rb(0,0,null,null,9,"ion-card",[],null,null,null,a.S,a.g)),i.qb(1,49152,null,0,o.m,[i.h,i.k,i.x],null,null),(l()(),i.rb(2,0,null,0,7,"ion-card-header",[],null,null,null,a.P,a.i)),i.qb(3,49152,null,0,o.o,[i.h,i.k,i.x],null,null),(l()(),i.rb(4,0,null,0,2,"ion-card-title",[],null,null,null,a.R,a.k)),i.qb(5,49152,null,0,o.q,[i.h,i.k,i.x],null,null),(l()(),i.Jb(6,0,[" "," "])),(l()(),i.rb(7,0,null,0,2,"ion-card-subtitle",[],null,null,null,a.Q,a.j)),i.qb(8,49152,null,0,o.p,[i.h,i.k,i.x],null,null),(l()(),i.Jb(9,0,[" "," "]))],null,(function(l,n){var u=n.component;l(n,6,0,u.information.event_desc),l(n,9,0,u.information.date)}))}function v(l){return i.Lb(0,[(l()(),i.rb(0,0,null,null,3,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),i.rb(1,0,null,null,1,"ion-icon",[["name","information-circle-outline"]],null,null,null,a.Y,a.q)),i.qb(2,49152,null,0,o.C,[i.h,i.k,i.x],{name:[0,"name"]},null),(l()(),i.Jb(3,null,[" "," "]))],(function(l,n){l(n,2,0,"information-circle-outline")}),(function(l,n){l(n,3,0,n.parent.context.$implicit.message)}))}function q(l){return i.Lb(0,[(l()(),i.rb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),i.gb(16777216,null,null,1,null,v)),i.qb(2,16384,null,0,r.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(0,null,null,0))],(function(l,n){var u=n.component;l(n,2,0,u.validations_form.get("initials").hasError(n.context.$implicit.type)&&(u.validations_form.get("initials").dirty||u.validations_form.get("initials").touched))}),null)}function y(l){return i.Lb(0,[(l()(),i.rb(0,0,null,null,3,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),i.rb(1,0,null,null,1,"ion-icon",[["name","information-circle-outline"]],null,null,null,a.Y,a.q)),i.qb(2,49152,null,0,o.C,[i.h,i.k,i.x],{name:[0,"name"]},null),(l()(),i.Jb(3,null,[" "," "]))],(function(l,n){l(n,2,0,"information-circle-outline")}),(function(l,n){l(n,3,0,n.parent.context.$implicit.message)}))}function C(l){return i.Lb(0,[(l()(),i.rb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),i.gb(16777216,null,null,1,null,y)),i.qb(2,16384,null,0,r.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(0,null,null,0))],(function(l,n){var u=n.component;l(n,2,0,u.validations_form.get("lastname").hasError(n.context.$implicit.type)&&(u.validations_form.get("lastname").dirty||u.validations_form.get("lastname").touched))}),null)}function D(l){return i.Lb(0,[(l()(),i.rb(0,0,null,null,3,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),i.rb(1,0,null,null,1,"ion-icon",[["name","information-circle-outline"]],null,null,null,a.Y,a.q)),i.qb(2,49152,null,0,o.C,[i.h,i.k,i.x],{name:[0,"name"]},null),(l()(),i.Jb(3,null,[" "," "]))],(function(l,n){l(n,2,0,"information-circle-outline")}),(function(l,n){l(n,3,0,n.parent.context.$implicit.message)}))}function k(l){return i.Lb(0,[(l()(),i.rb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),i.gb(16777216,null,null,1,null,D)),i.qb(2,16384,null,0,r.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(0,null,null,0))],(function(l,n){var u=n.component;l(n,2,0,u.validations_form.get("email").hasError(n.context.$implicit.type)&&(u.validations_form.get("email").dirty||u.validations_form.get("email").touched))}),null)}function x(l){return i.Lb(0,[(l()(),i.rb(0,0,null,null,3,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),i.rb(1,0,null,null,1,"ion-icon",[["name","information-circle-outline"]],null,null,null,a.Y,a.q)),i.qb(2,49152,null,0,o.C,[i.h,i.k,i.x],{name:[0,"name"]},null),(l()(),i.Jb(3,null,[" "," "]))],(function(l,n){l(n,2,0,"information-circle-outline")}),(function(l,n){l(n,3,0,n.parent.context.$implicit.message)}))}function _(l){return i.Lb(0,[(l()(),i.rb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),i.gb(16777216,null,null,1,null,x)),i.qb(2,16384,null,0,r.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(0,null,null,0))],(function(l,n){var u=n.component;l(n,2,0,u.validations_form.get("terms").hasError(n.context.$implicit.type)&&(u.validations_form.get("terms").dirty||u.validations_form.get("terms").touched))}),null)}function B(l){return i.Lb(0,[(l()(),i.rb(0,0,null,null,15,"ion-header",[],null,null,null,a.X,a.p)),i.qb(1,49152,null,0,o.B,[i.h,i.k,i.x],null,null),(l()(),i.rb(2,0,null,0,13,"ion-toolbar",[["color","primary"]],null,null,null,a.pb,a.H)),i.qb(3,49152,null,0,o.Cb,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,a.N,a.f)),i.qb(5,49152,null,0,o.l,[i.h,i.k,i.x],null,null),(l()(),i.rb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==i.Db(l,8).onClick(u)&&t),t}),a.K,a.c)),i.qb(7,49152,null,0,o.g,[i.h,i.k,i.x],{defaultHref:[0,"defaultHref"]},null),i.qb(8,16384,null,0,o.h,[[2,o.ib],o.Ib],{defaultHref:[0,"defaultHref"]},null),(l()(),i.rb(9,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,a.N,a.f)),i.qb(10,49152,null,0,o.l,[i.h,i.k,i.x],null,null),(l()(),i.rb(11,0,null,0,1,"ion-menu-button",[],null,null,null,a.eb,a.x)),i.qb(12,49152,null,0,o.R,[i.h,i.k,i.x],null,null),(l()(),i.rb(13,0,null,0,2,"ion-title",[],null,null,null,a.ob,a.G)),i.qb(14,49152,null,0,o.Ab,[i.h,i.k,i.x],null,null),(l()(),i.Jb(-1,0,["Contactpersoon"])),(l()(),i.rb(16,0,null,null,71,"ion-content",[],null,null,null,a.V,a.n)),i.qb(17,49152,null,0,o.u,[i.h,i.k,i.x],null,null),(l()(),i.gb(16777216,null,0,1,null,h)),i.qb(19,16384,null,0,r.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.rb(20,0,null,0,67,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,e=l.component;return"submit"===n&&(t=!1!==i.Db(l,22).onSubmit(u)&&t),"reset"===n&&(t=!1!==i.Db(l,22).onReset()&&t),"ngSubmit"===n&&(t=!1!==e.onSubmit(e.validations_form.value)&&t),t}),null,null)),i.qb(21,16384,null,0,s.q,[],null,null),i.qb(22,540672,null,0,s.e,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),i.Gb(2048,null,s.a,null,[s.e]),i.qb(24,16384,null,0,s.j,[[4,s.a]],null,null),(l()(),i.rb(25,0,null,null,11,"ion-item",[],null,null,null,a.ab,a.s)),i.qb(26,49152,null,0,o.H,[i.h,i.k,i.x],null,null),(l()(),i.rb(27,0,null,0,2,"ion-label",[["color","primary"],["position","floating"]],null,null,null,a.bb,a.t)),i.qb(28,49152,null,0,o.N,[i.h,i.k,i.x],{color:[0,"color"],position:[1,"position"]},null),(l()(),i.Jb(-1,0,["Voornaam"])),(l()(),i.rb(30,0,null,0,6,"ion-input",[["formControlName","initials"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==i.Db(l,31)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==i.Db(l,31)._handleInputEvent(u.target)&&t),t}),a.Z,a.r)),i.qb(31,16384,null,0,o.Ob,[i.k],null,null),i.Gb(1024,null,s.g,(function(l){return[l]}),[o.Ob]),i.qb(33,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.g],[2,s.p]],{name:[0,"name"]},null),i.Gb(2048,null,s.h,null,[s.d]),i.qb(35,16384,null,0,s.i,[[4,s.h]],null,null),i.qb(36,49152,null,0,o.G,[i.h,i.k,i.x],{type:[0,"type"]},null),(l()(),i.rb(37,0,null,null,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),i.gb(16777216,null,null,1,null,q)),i.qb(39,278528,null,0,r.i,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null),(l()(),i.rb(40,0,null,null,11,"ion-item",[],null,null,null,a.ab,a.s)),i.qb(41,49152,null,0,o.H,[i.h,i.k,i.x],null,null),(l()(),i.rb(42,0,null,0,2,"ion-label",[["color","primary"],["position","floating"]],null,null,null,a.bb,a.t)),i.qb(43,49152,null,0,o.N,[i.h,i.k,i.x],{color:[0,"color"],position:[1,"position"]},null),(l()(),i.Jb(-1,0,["Achternaam"])),(l()(),i.rb(45,0,null,0,6,"ion-input",[["formControlName","lastname"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==i.Db(l,46)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==i.Db(l,46)._handleInputEvent(u.target)&&t),t}),a.Z,a.r)),i.qb(46,16384,null,0,o.Ob,[i.k],null,null),i.Gb(1024,null,s.g,(function(l){return[l]}),[o.Ob]),i.qb(48,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.g],[2,s.p]],{name:[0,"name"]},null),i.Gb(2048,null,s.h,null,[s.d]),i.qb(50,16384,null,0,s.i,[[4,s.h]],null,null),i.qb(51,49152,null,0,o.G,[i.h,i.k,i.x],{type:[0,"type"]},null),(l()(),i.rb(52,0,null,null,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),i.gb(16777216,null,null,1,null,C)),i.qb(54,278528,null,0,r.i,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null),(l()(),i.rb(55,0,null,null,11,"ion-item",[],null,null,null,a.ab,a.s)),i.qb(56,49152,null,0,o.H,[i.h,i.k,i.x],null,null),(l()(),i.rb(57,0,null,0,2,"ion-label",[["color","primary"],["position","floating"]],null,null,null,a.bb,a.t)),i.qb(58,49152,null,0,o.N,[i.h,i.k,i.x],{color:[0,"color"],position:[1,"position"]},null),(l()(),i.Jb(-1,0,["Email"])),(l()(),i.rb(60,0,null,0,6,"ion-input",[["formControlName","email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==i.Db(l,61)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==i.Db(l,61)._handleInputEvent(u.target)&&t),t}),a.Z,a.r)),i.qb(61,16384,null,0,o.Ob,[i.k],null,null),i.Gb(1024,null,s.g,(function(l){return[l]}),[o.Ob]),i.qb(63,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.g],[2,s.p]],{name:[0,"name"]},null),i.Gb(2048,null,s.h,null,[s.d]),i.qb(65,16384,null,0,s.i,[[4,s.h]],null,null),i.qb(66,49152,null,0,o.G,[i.h,i.k,i.x],{type:[0,"type"]},null),(l()(),i.rb(67,0,null,null,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),i.gb(16777216,null,null,1,null,k)),i.qb(69,278528,null,0,r.i,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null),(l()(),i.rb(70,0,null,null,11,"ion-item",[],null,null,null,a.ab,a.s)),i.qb(71,49152,null,0,o.H,[i.h,i.k,i.x],null,null),(l()(),i.rb(72,0,null,0,2,"ion-label",[["color","primary"]],null,null,null,a.bb,a.t)),i.qb(73,49152,null,0,o.N,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.Jb(-1,0,["Akkoord met AV"])),(l()(),i.rb(75,0,null,0,6,"ion-checkbox",[["color","primary"],["formControlName","terms"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==i.Db(l,76)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==i.Db(l,76)._handleIonChange(u.target)&&t),t}),a.T,a.l)),i.qb(76,16384,null,0,o.c,[i.k],null,null),i.Gb(1024,null,s.g,(function(l){return[l]}),[o.c]),i.qb(78,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.g],[2,s.p]],{name:[0,"name"]},null),i.Gb(2048,null,s.h,null,[s.d]),i.qb(80,16384,null,0,s.i,[[4,s.h]],null,null),i.qb(81,49152,null,0,o.r,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.rb(82,0,null,null,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),i.gb(16777216,null,null,1,null,_)),i.qb(84,278528,null,0,r.i,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null),(l()(),i.rb(85,0,null,null,2,"ion-button",[["class","submit-btn"],["color","primary"],["expand","full"],["type","submit"]],null,null,null,a.M,a.e)),i.qb(86,49152,null,0,o.k,[i.h,i.k,i.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],type:[3,"type"]},null),(l()(),i.Jb(-1,0,["Reserveer!"]))],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,7,0,"/"),l(n,8,0,"/"),l(n,19,0,u.information),l(n,22,0,u.validations_form),l(n,28,0,"primary","floating"),l(n,33,0,"initials"),l(n,36,0,"text"),l(n,39,0,u.validation_messages.initials),l(n,43,0,"primary","floating"),l(n,48,0,"lastname"),l(n,51,0,"text"),l(n,54,0,u.validation_messages.lastname),l(n,58,0,"primary","floating"),l(n,63,0,"email"),l(n,66,0,"email"),l(n,69,0,u.validation_messages.email),l(n,73,0,"primary"),l(n,78,0,"terms"),l(n,81,0,"primary"),l(n,84,0,u.validation_messages.terms),l(n,86,0,"primary",!u.validations_form.valid,"full","submit")}),(function(l,n){l(n,20,0,i.Db(n,24).ngClassUntouched,i.Db(n,24).ngClassTouched,i.Db(n,24).ngClassPristine,i.Db(n,24).ngClassDirty,i.Db(n,24).ngClassValid,i.Db(n,24).ngClassInvalid,i.Db(n,24).ngClassPending),l(n,30,0,i.Db(n,35).ngClassUntouched,i.Db(n,35).ngClassTouched,i.Db(n,35).ngClassPristine,i.Db(n,35).ngClassDirty,i.Db(n,35).ngClassValid,i.Db(n,35).ngClassInvalid,i.Db(n,35).ngClassPending),l(n,45,0,i.Db(n,50).ngClassUntouched,i.Db(n,50).ngClassTouched,i.Db(n,50).ngClassPristine,i.Db(n,50).ngClassDirty,i.Db(n,50).ngClassValid,i.Db(n,50).ngClassInvalid,i.Db(n,50).ngClassPending),l(n,60,0,i.Db(n,65).ngClassUntouched,i.Db(n,65).ngClassTouched,i.Db(n,65).ngClassPristine,i.Db(n,65).ngClassDirty,i.Db(n,65).ngClassValid,i.Db(n,65).ngClassInvalid,i.Db(n,65).ngClassPending),l(n,75,0,i.Db(n,80).ngClassUntouched,i.Db(n,80).ngClassTouched,i.Db(n,80).ngClassPristine,i.Db(n,80).ngClassDirty,i.Db(n,80).ngClassValid,i.Db(n,80).ngClassInvalid,i.Db(n,80).ngClassPending)}))}function J(l){return i.Lb(0,[(l()(),i.rb(0,0,null,null,1,"app-activity-subscribe",[],null,null,null,B,p)),i.qb(1,114688,null,0,d,[b.a,s.b,c.a,f.m],null,null)],(function(l,n){l(n,1,0)}),null)}var I=i.nb("app-activity-subscribe",d,J,{},{},[]);class O{}u.d(n,"ActivitySubscribePageModuleNgFactory",(function(){return S}));var S=i.ob(t,[],(function(l){return i.Ab([i.Bb(512,i.j,i.Z,[[8,[e.a,I]],[3,i.j],i.v]),i.Bb(4608,r.l,r.k,[i.s,[2,r.s]]),i.Bb(4608,s.o,s.o,[]),i.Bb(4608,s.b,s.b,[]),i.Bb(4608,o.b,o.b,[i.x,i.g]),i.Bb(4608,o.Hb,o.Hb,[o.b,i.j,i.p]),i.Bb(4608,o.Lb,o.Lb,[o.b,i.j,i.p]),i.Bb(1073742336,r.c,r.c,[]),i.Bb(1073742336,s.n,s.n,[]),i.Bb(1073742336,s.f,s.f,[]),i.Bb(1073742336,s.l,s.l,[]),i.Bb(1073742336,o.Eb,o.Eb,[]),i.Bb(1073742336,f.o,f.o,[[2,f.t],[2,f.m]]),i.Bb(1073742336,O,O,[]),i.Bb(1073742336,t,t,[]),i.Bb(1024,f.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);