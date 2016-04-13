/******/!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}// webpackBootstrap
/******/
var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";var n=o(1),r=o(2),a=o(3),s=o(4),i=o(5),c=o(6),u=o(7),l=o(8);angular.module("postcodes",["ngAnimate","ngMessages","ngAria","restangular","ngRoute","ui.bootstrap","toastr"]).config(n.config).config(r.routerConfig).run(a.runBlock).service("postcodesService",l.PostcodesService).component("main",s.main).component("search",i.search).component("infogeo",c.infogeo).filter("toReadable",u.toReadable)},function(e,t){"use strict";function o(e,t,o){"ngInject";e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0,o.setBaseUrl("http://api.postcodes.io"),o.setResponseExtractor(function(e){return e.result})}o.$inject=["$logProvider","toastrConfig","RestangularProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.config=o},function(e,t){"use strict";function o(e){"ngInject";e.when("/",{template:'<main postcode=""></main>'}).when("/:postcode",{template:function(e){return'<main postcode="'+e.postcode+'"></main>'}}).otherwise({redirectTo:"/"})}o.$inject=["$routeProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.routerConfig=o},function(e,t){"use strict";function o(e){"ngInject";e.debug("runBlock end")}o.$inject=["$log"],Object.defineProperty(t,"__esModule",{value:!0}),t.runBlock=o},function(e,t){"use strict";function o(e,t){"ngInject";function o(e){i.searchComponent=e,i.postcode&&i.searchComponent.search(i.postcode)}function n(e){s(i.states.DISPLAYING),i.geoData=e,t.$apply()}function r(e){i.error=e.message,s(i.states.ERROR)}function a(){s(i.states.SEARCHING)}function s(e){e!==i.states.ERROR&&(i.error=void 0),i.state=e}var i=this;i.states={WAITING:0,SEARCHING:1,ERROR:2,DISPLAYING:3},i.state=i.states.WAITING,i.error=void 0,i.searchComponent=void 0,i.registerSearchComponent=o,i.onSearchCompleted=n,i.onSearchError=r,i.onSearchStarted=a}o.$inject=["$http","$scope"],Object.defineProperty(t,"__esModule",{value:!0});var n={templateUrl:"app/components/main/main.html",controller:o,controllerAs:"vm",bindings:{postcode:"@",geoData:"<"}};t.main=n},function(e,t){"use strict";function o(e,t,o){"ngInject";function n(t){return e.isPostcodeValid(t)?void o.path(t):void a.main.onSearchError(s)}function r(t){return e.isPostcodeValid(t)?(a.main.onSearchStarted(),void e.getGeoData(t).then(function(e){return a.main.onSearchCompleted(e)})["catch"](function(e){return a.main.onSearchError(e)})):void a.main.onSearchError(s)}var a=this;a.search=r,a.submit=n;var s=new Error("Invalid postcode.");a.$onInit=function(){return a.main.registerSearchComponent(a)}}o.$inject=["postcodesService","$log","$location"],Object.defineProperty(t,"__esModule",{value:!0});var n={templateUrl:"app/components/search/search.html",controller:o,controllerAs:"vm",require:{main:"^main"},bindings:{postcode:"<"}};t.search=n},function(e,t){"use strict";function o(){"ngInject";function e(e){return!angular.isObject(e)}var t=this;t.isInterestingData=e}Object.defineProperty(t,"__esModule",{value:!0});var n={templateUrl:"app/components/infogeo/infogeo.html",controller:o,controllerAs:"vm",bindings:{geoData:"<"}};t.infogeo=n},function(e,t){"use strict";function o(){"ngInject";return function(e){return e.replace("_"," ").replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}}Object.defineProperty(t,"__esModule",{value:!0}),t.toReadable=o},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){var o=[],n=!0,r=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(o.push(s.value),!t||o.length!==t);n=!0);}catch(c){r=!0,a=c}finally{try{!n&&i["return"]&&i["return"]()}finally{if(r)throw a}}return o}return function(t,o){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();t.PostcodesService=function(){function e(t,n){"ngInject";o(this,e),this.$log=t,this.Restangular=n}return e.$inject=["$log","Restangular"],r(e,[{key:"getGeoData",value:function(e){var t=this,o=this.Restangular.service("postcodes");return Promise.all([o.one(e).get(),o.one(e).getList("nearest")])["catch"](function(e){t.$log.log(e);var o="An error happened.";throw new Error(o)}).then(function(e){var t=e.map(function(e){return e.plain()}),o=n(t,2),r=o[0],a=o[1];return{postcodeData:r,nearestData:a}})}},{key:"isPostcodeValid",value:function(e){var t=/^[A-Z]{1,2}\d{1,2}[A-Z]?\s\d[A-Z]{2}$/gi;return t.test(e)}}]),e}()}]),angular.module("postcodes").run(["$templateCache",function(e){e.put("app/components/infogeo/infogeo.html",'<h2>Postcode Info</h2><div ng-if=vm.isInterestingData(v) class=dataRow ng-repeat="(k,v) in vm.geoData.postcodeData"><span><b>{{k | toReadable}}</b>: {{v}}</span></div><h2>Nearest Postcodes Info</h2><div ng-repeat="postcodeData in vm.geoData.nearestData"><h3><a ng-href=/#{{postcodeData.postcode}}>{{postcodeData.postcode}}</a></h3><div ng-if=vm.isInterestingData(v) class=dataRow ng-repeat="(k,v) in postcodeData"><span><b>{{k | toReadable}}</b>: {{v}}</span></div></div>'),e.put("app/components/main/main.html",'<div class=container><div class=row><div class="col-xs-10 col-xs-offset-1 text-center"><h1>Postcode Explorer</h1><div class=row><div class=col-xs-12><search postcode=vm.postcode></search></div><div class=col-xs-12><div ng-switch=vm.state><infogeo ng-if="vm.state === vm.states.DISPLAYING" geo-data=vm.geoData></infogeo><span ng-if="vm.state === vm.states.WAITING"></span> <span ng-if="vm.state === vm.states.ERROR">{{vm.error}}</span><div ng-if="vm.state === vm.states.SEARCHING" class=progress><div class="progress-bar progress-bar-striped active" role=progressbar aria-valuenow=100 aria-valuemin=0 aria-valuemax=100 style="width: 100%"></div></div></div></div></div></div></div></div>'),e.put("app/components/search/search.html",'<form class=form-inline ng-submit=vm.submit(vm.postcode)><div class=form-group><label for=postcode>Postcode</label><input type=text class=form-control id=postcode placeholder=Postcode ng-model=vm.postcode></div><button type=submit class="btn btn-primary">Search</button></form>')}]);
//# sourceMappingURL=../maps/scripts/app-a4804d0314.js.map
