/*! For license information please see 92.68feebe7e8a9711fee7d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{y1oY:function(e,o,r){"use strict";r.r(o),r.d(o,"shadow",(function(){return a})),r.d(o,"iosTransitionAnimation",(function(){return n}));var t="opacity";function a(e){return e.shadowRoot||e}function n(e,o,r){var n="rtl"===document.dir,l=n?"-99.5%":"99.5%",d=n?"33%":"-33%",i=r.enteringEl,s=r.leavingEl,c=new e;if(c.addElement(i).duration(r.duration||500).easing(r.easing||"cubic-bezier(0.36,0.66,0.04,1)").beforeRemoveClass("ion-page-invisible"),s&&o){var f=new e;f.addElement(o).beforeAddClass("show-decor").afterRemoveClass("show-decor"),c.add(f)}var m="back"===r.direction,u=i.querySelector(":scope > ion-content"),b=i.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),y=i.querySelector(":scope > ion-header > ion-toolbar"),w=new e;if(u||y||0!==b.length?(w.addElement(u),w.addElement(b)):w.addElement(i.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),c.add(w),m?w.beforeClearStyles([t]).fromTo("translateX",d,"0%",!0).fromTo(t,.8,1,!0):w.beforeClearStyles([t]).fromTo("translateX",l,"0%",!0),y){var S=new e;S.addElement(y),c.add(S);var v=new e;v.addElement(y.querySelector("ion-title"));var T=new e;T.addElement(y.querySelectorAll("ion-buttons,[menuToggle]"));var p=new e;p.addElement(a(y).querySelector(".toolbar-background"));var E=new e,q=y.querySelector("ion-back-button");if(E.addElement(q),S.add(v).add(T).add(p).add(E),v.fromTo(t,.01,1,!0),T.fromTo(t,.01,1,!0),m)v.fromTo("translateX",d,"0%",!0),E.fromTo(t,.01,1,!0);else if(v.fromTo("translateX",l,"0%",!0),p.beforeClearStyles([t]).fromTo(t,.01,1,!0),E.fromTo(t,.01,1,!0),q){var g=new e;g.addElement(a(q).querySelector(".button-text")).fromTo("translateX",n?"-100px":"100px","0px"),S.add(g)}}if(s){var C=new e;C.addElement(s.querySelector(":scope > ion-content")),C.addElement(s.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),c.add(C),m?C.beforeClearStyles([t]).fromTo("translateX","0%",n?"-100%":"100%"):C.fromTo("translateX","0%",d,!0).fromTo(t,1,.8,!0);var h=s.querySelector(":scope > ion-header > ion-toolbar");if(h){var X=new e;X.addElement(h);var k=new e;k.addElement(h.querySelector("ion-title"));var x=new e;x.addElement(h.querySelectorAll("ion-buttons,[menuToggle]"));var A=new e;A.addElement(a(h).querySelector(".toolbar-background"));var R=new e;if(q=h.querySelector("ion-back-button"),R.addElement(q),X.add(k).add(x).add(R).add(A),c.add(X),R.fromTo(t,.99,0,!0),k.fromTo(t,.99,0,!0),x.fromTo(t,.99,0,!0),m){if(k.fromTo("translateX","0%",n?"-100%":"100%"),A.beforeClearStyles([t]).fromTo(t,1,.01,!0),q){var J=new e;J.addElement(a(q).querySelector(".button-text")),J.fromTo("translateX","0%",(n?-124:124)+"px"),X.add(J)}}else k.fromTo("translateX","0%",d).afterClearStyles(["transform"]),R.afterClearStyles([t]),k.afterClearStyles([t]),x.afterClearStyles([t])}}return Promise.resolve(c)}}}]);