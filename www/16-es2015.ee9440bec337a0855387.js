(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{E0ei:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class t{}var i=u("pMnS"),e=u("oBZk"),b=u("ZZ/e"),a=u("iInd"),r=u("SVse"),c=u("3ROY"),s=u("r4Kj"),f=u("F/us"),m=u.n(f);class k{constructor(l,n,u){this.activatedRoute=l,this.activityService=n,this.configService=u,this.information=null,this.blocked=!0,this.appurl=this.configService.url}ngOnInit(){this.activityService.getDetails(this.activatedRoute.snapshot.params.event_id).subscribe(l=>{this.information=l,this.activityService.chosen_event=l})}ionViewWillEnter(){this.blocked=!!m.a.contains(this.activityService.booked_events,this.activatedRoute.snapshot.params.event_id)}}var h=o.pb({encapsulation:0,styles:[[".info-img[_ngcontent-%COMP%]{max-height:30vh;-o-object-fit:contain;object-fit:contain;padding:10px}"]],data:{}});function q(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,2,"ion-title",[],null,null,null,e.mb,e.F)),o.qb(1,49152,null,0,b.Ab,[o.h,o.k,o.x],null,null),(l()(),o.Jb(2,0,["",""]))],null,(function(l,n){l(n,2,0,n.component.information.object_desc)}))}function p(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,6,"ion-item",[["lines","none"]],null,null,null,e.Z,e.s)),o.qb(1,49152,null,0,b.H,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.rb(2,0,null,0,1,"ion-icon",[["name","walk"],["slot","start"]],null,null,null,e.X,e.q)),o.qb(3,49152,null,0,b.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.rb(4,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,e.ab,e.t)),o.qb(5,49152,null,0,b.N,[o.h,o.k,o.x],null,null),(l()(),o.Jb(6,0,["",""]))],(function(l,n){l(n,1,0,"none"),l(n,3,0,"walk")}),(function(l,n){l(n,6,0,n.component.information.custom01)}))}function d(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,8,"ion-item",[["color","warning"]],null,null,null,e.Z,e.s)),o.qb(1,49152,null,0,b.H,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.rb(2,0,null,0,6,"ion-label",[],null,null,null,e.ab,e.t)),o.qb(3,49152,null,0,b.N,[o.h,o.k,o.x],null,null),(l()(),o.rb(4,0,null,0,1,"ion-icon",[["name","alert-circle-outline"]],null,null,null,e.X,e.q)),o.qb(5,49152,null,0,b.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.rb(6,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,e.ab,e.t)),o.qb(7,49152,null,0,b.N,[o.h,o.k,o.x],null,null),(l()(),o.Jb(8,0,["",""]))],(function(l,n){l(n,1,0,"warning"),l(n,5,0,"alert-circle-outline")}),(function(l,n){l(n,8,0,n.component.information.custom03)}))}function g(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,4,"ion-button",[["color","success"],["routerLink","/tab-nav/activity-parts"],["shape","round"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.Db(l,2).onClick()&&t),"click"===n&&(t=!1!==o.Db(l,3).onClick(u)&&t),t}),e.L,e.e)),o.qb(1,49152,null,0,b.k,[o.h,o.k,o.x],{color:[0,"color"],shape:[1,"shape"]},null),o.qb(2,16384,null,0,a.n,[a.m,a.a,[8,null],o.B,o.k],{routerLink:[0,"routerLink"]},null),o.qb(3,737280,null,0,b.Nb,[r.h,b.Jb,o.k,a.m,[2,a.n]],null,null),(l()(),o.Jb(-1,0,[" Maak reservering "]))],(function(l,n){l(n,1,0,"success","round"),l(n,2,0,"/tab-nav/activity-parts"),l(n,3,0)}),null)}function x(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,2,"ion-badge",[["color","success"]],null,null,null,e.K,e.d)),o.qb(1,49152,null,0,b.j,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.Jb(-1,0,["Al geboekt"]))],(function(l,n){l(n,1,0,"success")}),null)}function v(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,50,"ion-card",[],null,null,null,e.R,e.g)),o.qb(1,49152,null,0,b.m,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,7,"ion-card-header",[],null,null,null,e.O,e.i)),o.qb(3,49152,null,0,b.o,[o.h,o.k,o.x],null,null),(l()(),o.rb(4,0,null,0,2,"ion-card-title",[],null,null,null,e.Q,e.k)),o.qb(5,49152,null,0,b.q,[o.h,o.k,o.x],null,null),(l()(),o.Jb(6,0,[" "," "])),(l()(),o.rb(7,0,null,0,2,"ion-card-subtitle",[],null,null,null,e.P,e.j)),o.qb(8,49152,null,0,b.p,[o.h,o.k,o.x],null,null),(l()(),o.Jb(9,0,[" "," "])),(l()(),o.rb(10,0,null,0,40,"ion-card-content",[["class","ion-text-center"]],null,null,null,e.N,e.h)),o.qb(11,49152,null,0,b.n,[o.h,o.k,o.x],null,null),(l()(),o.rb(12,0,null,0,0,"img",[["class","info-img"]],[[8,"src",4]],null,null,null,null)),(l()(),o.rb(13,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),o.Jb(14,null,["",""])),(l()(),o.rb(15,0,null,0,6,"ion-item",[["lines","none"]],null,null,null,e.Z,e.s)),o.qb(16,49152,null,0,b.H,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.rb(17,0,null,0,1,"ion-icon",[["name","clock"],["slot","start"]],null,null,null,e.X,e.q)),o.qb(18,49152,null,0,b.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.rb(19,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,e.ab,e.t)),o.qb(20,49152,null,0,b.N,[o.h,o.k,o.x],null,null),(l()(),o.Jb(21,0,[""," - ",""])),(l()(),o.rb(22,0,null,0,6,"ion-item",[["lines","none"]],null,null,null,e.Z,e.s)),o.qb(23,49152,null,0,b.H,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.rb(24,0,null,0,1,"ion-icon",[["name","contacts"],["slot","start"]],null,null,null,e.X,e.q)),o.qb(25,49152,null,0,b.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.rb(26,0,null,0,2,"ion-label",[],null,null,null,e.ab,e.t)),o.qb(27,49152,null,0,b.N,[o.h,o.k,o.x],null,null),(l()(),o.Jb(28,0,[""," van de "," plaatsen vrij"])),(l()(),o.rb(29,0,null,0,6,"ion-item",[["lines","none"]],null,null,null,e.Z,e.s)),o.qb(30,49152,null,0,b.H,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.rb(31,0,null,0,1,"ion-icon",[["name","globe"],["slot","start"]],null,null,null,e.X,e.q)),o.qb(32,49152,null,0,b.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.rb(33,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,e.ab,e.t)),o.qb(34,49152,null,0,b.N,[o.h,o.k,o.x],null,null),(l()(),o.Jb(35,0,["",""])),(l()(),o.rb(36,0,null,0,6,"ion-item",[["lines","none"]],null,null,null,e.Z,e.s)),o.qb(37,49152,null,0,b.H,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.rb(38,0,null,0,1,"ion-icon",[["name","planet"],["slot","start"]],null,null,null,e.X,e.q)),o.qb(39,49152,null,0,b.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.rb(40,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,e.ab,e.t)),o.qb(41,49152,null,0,b.N,[o.h,o.k,o.x],null,null),(l()(),o.Jb(42,0,["",""])),(l()(),o.gb(16777216,null,0,1,null,p)),o.qb(44,16384,null,0,r.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,d)),o.qb(46,16384,null,0,r.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,g)),o.qb(48,16384,null,0,r.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,x)),o.qb(50,16384,null,0,r.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,16,0,"none"),l(n,18,0,"clock"),l(n,23,0,"none"),l(n,25,0,"contacts"),l(n,30,0,"none"),l(n,32,0,"globe"),l(n,37,0,"none"),l(n,39,0,"planet"),l(n,44,0,""!=u.information.custom01),l(n,46,0,""!=u.information.custom03),l(n,48,0,u.information.Free>0&&0==u.blocked),l(n,50,0,1==u.blocked)}),(function(l,n){var u=n.component;l(n,6,0,u.information.event_desc),l(n,9,0,u.information.date),l(n,12,0,o.vb(2,"",u.appurl,"",u.information.image,"")),l(n,14,0,u.information.long_memo),l(n,21,0,u.information.fromtime,u.information.tiltime),l(n,28,0,u.information.Free,u.information.amount),l(n,35,0,u.information.location),l(n,42,0,u.information.custom02)}))}function J(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,14,"ion-header",[],null,null,null,e.W,e.p)),o.qb(1,49152,null,0,b.B,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,12,"ion-toolbar",[["color","primary"]],null,null,null,e.nb,e.G)),o.qb(3,49152,null,0,b.Cb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,e.M,e.f)),o.qb(5,49152,null,0,b.l,[o.h,o.k,o.x],null,null),(l()(),o.rb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.Db(l,8).onClick(u)&&t),t}),e.J,e.c)),o.qb(7,49152,null,0,b.g,[o.h,o.k,o.x],{defaultHref:[0,"defaultHref"]},null),o.qb(8,16384,null,0,b.h,[[2,b.ib],b.Jb],{defaultHref:[0,"defaultHref"]},null),(l()(),o.rb(9,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,e.M,e.f)),o.qb(10,49152,null,0,b.l,[o.h,o.k,o.x],null,null),(l()(),o.rb(11,0,null,0,1,"ion-menu-button",[],null,null,null,e.cb,e.w)),o.qb(12,49152,null,0,b.R,[o.h,o.k,o.x],null,null),(l()(),o.gb(16777216,null,0,1,null,q)),o.qb(14,16384,null,0,r.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.rb(15,0,null,null,3,"ion-content",[["class","ion-padding"]],null,null,null,e.U,e.n)),o.qb(16,49152,null,0,b.u,[o.h,o.k,o.x],null,null),(l()(),o.gb(16777216,null,0,1,null,v)),o.qb(18,16384,null,0,r.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,7,0,"/"),l(n,8,0,"/"),l(n,14,0,u.information),l(n,18,0,u.information)}),null)}function j(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,1,"app-activity-details",[],null,null,null,J,h)),o.qb(1,114688,null,0,k,[a.a,c.a,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var w=o.nb("app-activity-details",k,j,{},{},[]),B=u("s7LF");class I{}u.d(n,"ActivityDetailsPageModuleNgFactory",(function(){return M}));var M=o.ob(t,[],(function(l){return o.Ab([o.Bb(512,o.j,o.Z,[[8,[i.a,w]],[3,o.j],o.v]),o.Bb(4608,r.l,r.k,[o.s,[2,r.s]]),o.Bb(4608,B.o,B.o,[]),o.Bb(4608,b.b,b.b,[o.x,o.g]),o.Bb(4608,b.Ib,b.Ib,[b.b,o.j,o.p]),o.Bb(4608,b.Mb,b.Mb,[b.b,o.j,o.p]),o.Bb(1073742336,r.c,r.c,[]),o.Bb(1073742336,B.n,B.n,[]),o.Bb(1073742336,B.f,B.f,[]),o.Bb(1073742336,b.Eb,b.Eb,[]),o.Bb(1073742336,a.o,a.o,[[2,a.t],[2,a.m]]),o.Bb(1073742336,I,I,[]),o.Bb(1073742336,t,t,[]),o.Bb(1024,a.k,(function(){return[[{path:"",component:k}]]}),[])])}))}}]);