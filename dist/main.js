(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <div class=\"w3-container w3-padding w3-theme-d3\">\n    <div class=\"w3-right\">\n      {{message}}°C\n    </div>\n  </div>\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n\n  <ngx-gauge [type]=gaugeType [value]=message [label]=gaugeLabel [append]=gaugeAppendText></ngx-gauge>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ngx_mqtt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ngx-mqtt */ "./node_modules/ngx-mqtt/src/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_mqttService) {
        var _this = this;
        this._mqttService = _mqttService;
        this.title = 'electron hmi';
        this.gaugeType = "semi";
        this.gaugeValue = 28.3;
        this.string = "Speed";
        this.gaugeAppendText = "°C";
        this.subcription = this._mqttService.observe('Altair/CA/Temp').subscribe(function (message) {
            _this.message = message.payload.toString();
        });
    }
    AppComponent.prototype.unsafePublish = function (topic, message) {
        this._mqttService.unsafePublish(topic, message, { qos: 1, retain: true });
    };
    ;
    AppComponent.prototype.ngOnDestroy = function () {
        this.subcription.unsubscribe();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../assets/css/w3.css */ "./src/assets/css/w3.css"), __webpack_require__(/*! ../assets/css/w3-theme-teal.css */ "./src/assets/css/w3-theme-teal.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_ngx_mqtt__WEBPACK_IMPORTED_MODULE_1__["MqttService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MQTT_SERVICE_OPTIONS, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MQTT_SERVICE_OPTIONS", function() { return MQTT_SERVICE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_mqtt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-mqtt */ "./node_modules/ngx-mqtt/src/index.js");
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-gauge */ "./node_modules/ngx-gauge/ngx-gauge.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MQTT_SERVICE_OPTIONS = {
    hostname: 'broker.hivemq.com',
    protocol: 'ws',
    port: 8000,
    path: '/mqtt'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_mqtt__WEBPACK_IMPORTED_MODULE_2__["MqttModule"].forRoot(MQTT_SERVICE_OPTIONS),
                ngx_gauge__WEBPACK_IMPORTED_MODULE_3__["NgxGaugeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/assets/css/w3-theme-teal.css":
/*!******************************************!*\
  !*** ./src/assets/css/w3-theme-teal.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-theme-l5 {\r\n  color: #000 !important;\r\n  background-color: #e9fffd !important\r\n}\r\n\r\n.w3-theme-l4 {\r\n  color: #000 !important;\r\n  background-color: #b7fff8 !important\r\n}\r\n\r\n.w3-theme-l3 {\r\n  color: #000 !important;\r\n  background-color: #6efff1 !important\r\n}\r\n\r\n.w3-theme-l2 {\r\n  color: #000 !important;\r\n  background-color: #26ffe9 !important\r\n}\r\n\r\n.w3-theme-l1 {\r\n  color: #fff !important;\r\n  background-color: #00dcc6 !important\r\n}\r\n\r\n.w3-theme-d1 {\r\n  color: #fff !important;\r\n  background-color: #008578 !important\r\n}\r\n\r\n.w3-theme-d2 {\r\n  color: #fff !important;\r\n  background-color: #00766a !important\r\n}\r\n\r\n.w3-theme-d3 {\r\n  color: #fff !important;\r\n  background-color: #00685d !important\r\n}\r\n\r\n.w3-theme-d4 {\r\n  color: #fff !important;\r\n  background-color: #005950 !important\r\n}\r\n\r\n.w3-theme-d5 {\r\n  color: #fff !important;\r\n  background-color: #004a43 !important\r\n}\r\n\r\n.w3-theme-light {\r\n  color: #000 !important;\r\n  background-color: #e9fffd !important\r\n}\r\n\r\n.w3-theme-dark {\r\n  color: #fff !important;\r\n  background-color: #004a43 !important\r\n}\r\n\r\n.w3-theme-action {\r\n  color: #fff !important;\r\n  background-color: #004a43 !important\r\n}\r\n\r\n.w3-theme {\r\n  color: #fff !important;\r\n  background-color: #009688 !important\r\n}\r\n\r\n.w3-text-theme {\r\n  color: #009688 !important\r\n}\r\n\r\n.w3-border-theme {\r\n  border-color: #009688 !important\r\n}\r\n\r\n.w3-hover-theme:hover {\r\n  color: #fff !important;\r\n  background-color: #009688 !important\r\n}\r\n\r\n.w3-hover-text-theme:hover {\r\n  color: #009688 !important\r\n}\r\n\r\n.w3-hover-border-theme:hover {\r\n  border-color: #009688 !important\r\n}\r\n"

/***/ }),

/***/ "./src/assets/css/w3.css":
/*!*******************************!*\
  !*** ./src/assets/css/w3.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* W3.CSS 4.10 February 2018 by Jan Egil and Borge Refsnes */\r\n\r\nhtml {\r\n  box-sizing: border-box\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n  box-sizing: inherit\r\n}\r\n\r\n/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */\r\n\r\nhtml {\r\n  -ms-text-size-adjust: 100%;\r\n  -webkit-text-size-adjust: 100%\r\n}\r\n\r\nbody {\r\n  margin: 0\r\n}\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nmain,\r\nmenu,\r\nnav,\r\nsection,\r\nsummary {\r\n  display: block\r\n}\r\n\r\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  display: inline-block\r\n}\r\n\r\nprogress {\r\n  vertical-align: baseline\r\n}\r\n\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0\r\n}\r\n\r\n[hidden],\r\ntemplate {\r\n  display: none\r\n}\r\n\r\na {\r\n  background-color: transparent;\r\n  -webkit-text-decoration-skip: objects\r\n}\r\n\r\na:active,\r\na:hover {\r\n  outline-width: 0\r\n}\r\n\r\nabbr[title] {\r\n  border-bottom: none;\r\n  text-decoration: underline;\r\n  -webkit-text-decoration: underline dotted;\r\n          text-decoration: underline dotted\r\n}\r\n\r\ndfn {\r\n  font-style: italic\r\n}\r\n\r\nmark {\r\n  background: #ff0;\r\n  color: #000\r\n}\r\n\r\nsmall {\r\n  font-size: 80%\r\n}\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em\r\n}\r\n\r\nsup {\r\n  top: -0.5em\r\n}\r\n\r\nfigure {\r\n  margin: 1em 40px\r\n}\r\n\r\nimg {\r\n  border-style: none\r\n}\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden\r\n}\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em\r\n}\r\n\r\nhr {\r\n  box-sizing: content-box;\r\n  height: 0;\r\n  overflow: visible\r\n}\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n  font: inherit;\r\n  margin: 0\r\n}\r\n\r\noptgroup {\r\n  font-weight: bold\r\n}\r\n\r\nbutton,\r\ninput {\r\n  overflow: visible\r\n}\r\n\r\nbutton,\r\nselect {\r\n  text-transform: none\r\n}\r\n\r\nbutton,\r\nhtml [type=button],\r\n[type=reset],\r\n[type=submit] {\r\n  -webkit-appearance: button\r\n}\r\n\r\nbutton::-moz-focus-inner,\r\n[type=button]::-moz-focus-inner,\r\n[type=reset]::-moz-focus-inner,\r\n[type=submit]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0\r\n}\r\n\r\nbutton:-moz-focusring,\r\n[type=button]:-moz-focusring,\r\n[type=reset]:-moz-focusring,\r\n[type=submit]:-moz-focusring {\r\n  outline: 1px dotted ButtonText\r\n}\r\n\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: .35em .625em .75em\r\n}\r\n\r\nlegend {\r\n  color: inherit;\r\n  display: table;\r\n  max-width: 100%;\r\n  padding: 0;\r\n  white-space: normal\r\n}\r\n\r\ntextarea {\r\n  overflow: auto\r\n}\r\n\r\n[type=checkbox],\r\n[type=radio] {\r\n  padding: 0\r\n}\r\n\r\n[type=number]::-webkit-inner-spin-button,\r\n[type=number]::-webkit-outer-spin-button {\r\n  height: auto\r\n}\r\n\r\n[type=search] {\r\n  -webkit-appearance: textfield;\r\n  outline-offset: -2px\r\n}\r\n\r\n[type=search]::-webkit-search-cancel-button,\r\n[type=search]::-webkit-search-decoration {\r\n  -webkit-appearance: none\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n  color: inherit;\r\n  opacity: 0.54\r\n}\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button;\r\n  font: inherit\r\n}\r\n\r\n/* End extract */\r\n\r\nhtml,\r\nbody {\r\n  font-family: Verdana, sans-serif;\r\n  font-size: 15px;\r\n  line-height: 1.5\r\n}\r\n\r\nhtml {\r\n  overflow-x: hidden\r\n}\r\n\r\nh1 {\r\n  font-size: 36px\r\n}\r\n\r\nh2 {\r\n  font-size: 30px\r\n}\r\n\r\nh3 {\r\n  font-size: 24px\r\n}\r\n\r\nh4 {\r\n  font-size: 20px\r\n}\r\n\r\nh5 {\r\n  font-size: 18px\r\n}\r\n\r\nh6 {\r\n  font-size: 16px\r\n}\r\n\r\n.w3-serif {\r\n  font-family: serif\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: \"Segoe UI\", Arial, sans-serif;\r\n  font-weight: 400;\r\n  margin: 10px 0\r\n}\r\n\r\n.w3-wide {\r\n  letter-spacing: 4px\r\n}\r\n\r\nhr {\r\n  border: 0;\r\n  border-top: 1px solid #eee;\r\n  margin: 20px 0\r\n}\r\n\r\n.w3-image {\r\n  max-width: 100%;\r\n  height: auto\r\n}\r\n\r\nimg {\r\n  vertical-align: middle\r\n}\r\n\r\na {\r\n  color: inherit\r\n}\r\n\r\n.w3-table,\r\n.w3-table-all {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n  width: 100%;\r\n  display: table\r\n}\r\n\r\n.w3-table-all {\r\n  border: 1px solid #ccc\r\n}\r\n\r\n.w3-bordered tr,\r\n.w3-table-all tr {\r\n  border-bottom: 1px solid #ddd\r\n}\r\n\r\n.w3-striped tbody tr:nth-child(even) {\r\n  background-color: #f1f1f1\r\n}\r\n\r\n.w3-table-all tr:nth-child(odd) {\r\n  background-color: #fff\r\n}\r\n\r\n.w3-table-all tr:nth-child(even) {\r\n  background-color: #f1f1f1\r\n}\r\n\r\n.w3-hoverable tbody tr:hover,\r\n.w3-ul.w3-hoverable li:hover {\r\n  background-color: #ccc\r\n}\r\n\r\n.w3-centered tr th,\r\n.w3-centered tr td {\r\n  text-align: center\r\n}\r\n\r\n.w3-table td,\r\n.w3-table th,\r\n.w3-table-all td,\r\n.w3-table-all th {\r\n  padding: 8px 8px;\r\n  display: table-cell;\r\n  text-align: left;\r\n  vertical-align: top\r\n}\r\n\r\n.w3-table th:first-child,\r\n.w3-table td:first-child,\r\n.w3-table-all th:first-child,\r\n.w3-table-all td:first-child {\r\n  padding-left: 16px\r\n}\r\n\r\n.w3-btn,\r\n.w3-button {\r\n  border: none;\r\n  display: inline-block;\r\n  padding: 8px 16px;\r\n  vertical-align: middle;\r\n  overflow: hidden;\r\n  text-decoration: none;\r\n  color: inherit;\r\n  background-color: inherit;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  white-space: nowrap\r\n}\r\n\r\n.w3-btn:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\r\n}\r\n\r\n.w3-btn,\r\n.w3-button {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none\r\n}\r\n\r\n.w3-disabled,\r\n.w3-btn:disabled,\r\n.w3-button:disabled {\r\n  cursor: not-allowed;\r\n  opacity: 0.3\r\n}\r\n\r\n.w3-disabled *,\r\n:disabled * {\r\n  pointer-events: none\r\n}\r\n\r\n.w3-btn.w3-disabled:hover,\r\n.w3-btn:disabled:hover {\r\n  box-shadow: none\r\n}\r\n\r\n.w3-badge,\r\n.w3-tag {\r\n  background-color: #000;\r\n  color: #fff;\r\n  display: inline-block;\r\n  padding-left: 8px;\r\n  padding-right: 8px;\r\n  text-align: center\r\n}\r\n\r\n.w3-badge {\r\n  border-radius: 50%\r\n}\r\n\r\n.w3-ul {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0\r\n}\r\n\r\n.w3-ul li {\r\n  padding: 8px 16px;\r\n  border-bottom: 1px solid #ddd\r\n}\r\n\r\n.w3-ul li:last-child {\r\n  border-bottom: none\r\n}\r\n\r\n.w3-tooltip,\r\n.w3-display-container {\r\n  position: relative\r\n}\r\n\r\n.w3-tooltip .w3-text {\r\n  display: none\r\n}\r\n\r\n.w3-tooltip:hover .w3-text {\r\n  display: inline-block\r\n}\r\n\r\n.w3-ripple:active {\r\n  opacity: 0.5\r\n}\r\n\r\n.w3-ripple {\r\n  transition: opacity 0s\r\n}\r\n\r\n.w3-input {\r\n  padding: 8px;\r\n  display: block;\r\n  border: none;\r\n  border-bottom: 1px solid #ccc;\r\n  width: 100%\r\n}\r\n\r\n.w3-select {\r\n  padding: 9px 0;\r\n  width: 100%;\r\n  border: none;\r\n  border-bottom: 1px solid #ccc\r\n}\r\n\r\n.w3-dropdown-click,\r\n.w3-dropdown-hover {\r\n  position: relative;\r\n  display: inline-block;\r\n  cursor: pointer\r\n}\r\n\r\n.w3-dropdown-hover:hover .w3-dropdown-content {\r\n  display: block\r\n}\r\n\r\n.w3-dropdown-hover:first-child,\r\n.w3-dropdown-click:hover {\r\n  background-color: #ccc;\r\n  color: #000\r\n}\r\n\r\n.w3-dropdown-hover:hover>.w3-button:first-child,\r\n.w3-dropdown-click:hover>.w3-button:first-child {\r\n  background-color: #ccc;\r\n  color: #000\r\n}\r\n\r\n.w3-dropdown-content {\r\n  cursor: auto;\r\n  color: #000;\r\n  background-color: #fff;\r\n  display: none;\r\n  position: absolute;\r\n  min-width: 160px;\r\n  margin: 0;\r\n  padding: 0;\r\n  z-index: 1\r\n}\r\n\r\n.w3-check,\r\n.w3-radio {\r\n  width: 24px;\r\n  height: 24px;\r\n  position: relative;\r\n  top: 6px\r\n}\r\n\r\n.w3-sidebar {\r\n  height: 100%;\r\n  width: 200px;\r\n  background-color: #fff;\r\n  position: fixed !important;\r\n  z-index: 1;\r\n  overflow: auto\r\n}\r\n\r\n.w3-bar-block .w3-dropdown-hover,\r\n.w3-bar-block .w3-dropdown-click {\r\n  width: 100%\r\n}\r\n\r\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,\r\n.w3-bar-block .w3-dropdown-click .w3-dropdown-content {\r\n  min-width: 100%\r\n}\r\n\r\n.w3-bar-block .w3-dropdown-hover .w3-button,\r\n.w3-bar-block .w3-dropdown-click .w3-button {\r\n  width: 100%;\r\n  text-align: left;\r\n  padding: 8px 16px\r\n}\r\n\r\n.w3-main,\r\n#main {\r\n  transition: margin-left .4s\r\n}\r\n\r\n.w3-modal {\r\n  z-index: 3;\r\n  display: none;\r\n  padding-top: 100px;\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgb(0, 0, 0);\r\n  background-color: rgba(0, 0, 0, 0.4)\r\n}\r\n\r\n.w3-modal-content {\r\n  margin: auto;\r\n  background-color: #fff;\r\n  position: relative;\r\n  padding: 0;\r\n  outline: 0;\r\n  width: 600px\r\n}\r\n\r\n.w3-bar {\r\n  width: 100%;\r\n  overflow: hidden\r\n}\r\n\r\n.w3-center .w3-bar {\r\n  display: inline-block;\r\n  width: auto\r\n}\r\n\r\n.w3-bar .w3-bar-item {\r\n  padding: 8px 16px;\r\n  float: left;\r\n  width: auto;\r\n  border: none;\r\n  display: block;\r\n  outline: 0\r\n}\r\n\r\n.w3-bar .w3-dropdown-hover,\r\n.w3-bar .w3-dropdown-click {\r\n  position: static;\r\n  float: left\r\n}\r\n\r\n.w3-bar .w3-button {\r\n  white-space: normal\r\n}\r\n\r\n.w3-bar-block .w3-bar-item {\r\n  width: 100%;\r\n  display: block;\r\n  padding: 8px 16px;\r\n  text-align: left;\r\n  border: none;\r\n  white-space: normal;\r\n  float: none;\r\n  outline: 0\r\n}\r\n\r\n.w3-bar-block.w3-center .w3-bar-item {\r\n  text-align: center\r\n}\r\n\r\n.w3-block {\r\n  display: block;\r\n  width: 100%\r\n}\r\n\r\n.w3-responsive {\r\n  display: block;\r\n  overflow-x: auto\r\n}\r\n\r\n.w3-container:after,\r\n.w3-container:before,\r\n.w3-panel:after,\r\n.w3-panel:before,\r\n.w3-row:after,\r\n.w3-row:before,\r\n.w3-row-padding:after,\r\n.w3-row-padding:before,\r\n.w3-cell-row:before,\r\n.w3-cell-row:after,\r\n.w3-clear:after,\r\n.w3-clear:before,\r\n.w3-bar:before,\r\n.w3-bar:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both\r\n}\r\n\r\n.w3-col,\r\n.w3-half,\r\n.w3-third,\r\n.w3-twothird,\r\n.w3-threequarter,\r\n.w3-quarter {\r\n  float: left;\r\n  width: 100%\r\n}\r\n\r\n.w3-col.s1 {\r\n  width: 8.33333%\r\n}\r\n\r\n.w3-col.s2 {\r\n  width: 16.66666%\r\n}\r\n\r\n.w3-col.s3 {\r\n  width: 24.99999%\r\n}\r\n\r\n.w3-col.s4 {\r\n  width: 33.33333%\r\n}\r\n\r\n.w3-col.s5 {\r\n  width: 41.66666%\r\n}\r\n\r\n.w3-col.s6 {\r\n  width: 49.99999%\r\n}\r\n\r\n.w3-col.s7 {\r\n  width: 58.33333%\r\n}\r\n\r\n.w3-col.s8 {\r\n  width: 66.66666%\r\n}\r\n\r\n.w3-col.s9 {\r\n  width: 74.99999%\r\n}\r\n\r\n.w3-col.s10 {\r\n  width: 83.33333%\r\n}\r\n\r\n.w3-col.s11 {\r\n  width: 91.66666%\r\n}\r\n\r\n.w3-col.s12 {\r\n  width: 99.99999%\r\n}\r\n\r\n@media (min-width:601px) {\r\n  .w3-col.m1 {\r\n    width: 8.33333%\r\n  }\r\n  .w3-col.m2 {\r\n    width: 16.66666%\r\n  }\r\n  .w3-col.m3,\r\n  .w3-quarter {\r\n    width: 24.99999%\r\n  }\r\n  .w3-col.m4,\r\n  .w3-third {\r\n    width: 33.33333%\r\n  }\r\n  .w3-col.m5 {\r\n    width: 41.66666%\r\n  }\r\n  .w3-col.m6,\r\n  .w3-half {\r\n    width: 49.99999%\r\n  }\r\n  .w3-col.m7 {\r\n    width: 58.33333%\r\n  }\r\n  .w3-col.m8,\r\n  .w3-twothird {\r\n    width: 66.66666%\r\n  }\r\n  .w3-col.m9,\r\n  .w3-threequarter {\r\n    width: 74.99999%\r\n  }\r\n  .w3-col.m10 {\r\n    width: 83.33333%\r\n  }\r\n  .w3-col.m11 {\r\n    width: 91.66666%\r\n  }\r\n  .w3-col.m12 {\r\n    width: 99.99999%\r\n  }\r\n}\r\n\r\n@media (min-width:993px) {\r\n  .w3-col.l1 {\r\n    width: 8.33333%\r\n  }\r\n  .w3-col.l2 {\r\n    width: 16.66666%\r\n  }\r\n  .w3-col.l3 {\r\n    width: 24.99999%\r\n  }\r\n  .w3-col.l4 {\r\n    width: 33.33333%\r\n  }\r\n  .w3-col.l5 {\r\n    width: 41.66666%\r\n  }\r\n  .w3-col.l6 {\r\n    width: 49.99999%\r\n  }\r\n  .w3-col.l7 {\r\n    width: 58.33333%\r\n  }\r\n  .w3-col.l8 {\r\n    width: 66.66666%\r\n  }\r\n  .w3-col.l9 {\r\n    width: 74.99999%\r\n  }\r\n  .w3-col.l10 {\r\n    width: 83.33333%\r\n  }\r\n  .w3-col.l11 {\r\n    width: 91.66666%\r\n  }\r\n  .w3-col.l12 {\r\n    width: 99.99999%\r\n  }\r\n}\r\n\r\n.w3-content {\r\n  max-width: 980px;\r\n  margin: auto\r\n}\r\n\r\n.w3-rest {\r\n  overflow: hidden\r\n}\r\n\r\n.w3-cell-row {\r\n  display: table;\r\n  width: 100%\r\n}\r\n\r\n.w3-cell {\r\n  display: table-cell\r\n}\r\n\r\n.w3-cell-top {\r\n  vertical-align: top\r\n}\r\n\r\n.w3-cell-middle {\r\n  vertical-align: middle\r\n}\r\n\r\n.w3-cell-bottom {\r\n  vertical-align: bottom\r\n}\r\n\r\n.w3-hide {\r\n  display: none !important\r\n}\r\n\r\n.w3-show-block,\r\n.w3-show {\r\n  display: block !important\r\n}\r\n\r\n.w3-show-inline-block {\r\n  display: inline-block !important\r\n}\r\n\r\n@media (max-width:600px) {\r\n  .w3-modal-content {\r\n    margin: 0 10px;\r\n    width: auto !important\r\n  }\r\n  .w3-modal {\r\n    padding-top: 30px\r\n  }\r\n  .w3-dropdown-hover.w3-mobile .w3-dropdown-content,\r\n  .w3-dropdown-click.w3-mobile .w3-dropdown-content {\r\n    position: relative\r\n  }\r\n  .w3-hide-small {\r\n    display: none !important\r\n  }\r\n  .w3-mobile {\r\n    display: block;\r\n    width: 100% !important\r\n  }\r\n  .w3-bar-item.w3-mobile,\r\n  .w3-dropdown-hover.w3-mobile,\r\n  .w3-dropdown-click.w3-mobile {\r\n    text-align: center\r\n  }\r\n  .w3-dropdown-hover.w3-mobile,\r\n  .w3-dropdown-hover.w3-mobile .w3-btn,\r\n  .w3-dropdown-hover.w3-mobile .w3-button,\r\n  .w3-dropdown-click.w3-mobile,\r\n  .w3-dropdown-click.w3-mobile .w3-btn,\r\n  .w3-dropdown-click.w3-mobile .w3-button {\r\n    width: 100%\r\n  }\r\n}\r\n\r\n@media (max-width:768px) {\r\n  .w3-modal-content {\r\n    width: 500px\r\n  }\r\n  .w3-modal {\r\n    padding-top: 50px\r\n  }\r\n}\r\n\r\n@media (min-width:993px) {\r\n  .w3-modal-content {\r\n    width: 900px\r\n  }\r\n  .w3-hide-large {\r\n    display: none !important\r\n  }\r\n  .w3-sidebar.w3-collapse {\r\n    display: block !important\r\n  }\r\n}\r\n\r\n@media (max-width:992px) and (min-width:601px) {\r\n  .w3-hide-medium {\r\n    display: none !important\r\n  }\r\n}\r\n\r\n@media (max-width:992px) {\r\n  .w3-sidebar.w3-collapse {\r\n    display: none\r\n  }\r\n  .w3-main {\r\n    margin-left: 0 !important;\r\n    margin-right: 0 !important\r\n  }\r\n}\r\n\r\n.w3-top,\r\n.w3-bottom {\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 1\r\n}\r\n\r\n.w3-top {\r\n  top: 0\r\n}\r\n\r\n.w3-bottom {\r\n  bottom: 0\r\n}\r\n\r\n.w3-overlay {\r\n  position: fixed;\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 2\r\n}\r\n\r\n.w3-display-topleft {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0\r\n}\r\n\r\n.w3-display-topright {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0\r\n}\r\n\r\n.w3-display-bottomleft {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0\r\n}\r\n\r\n.w3-display-bottomright {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0\r\n}\r\n\r\n.w3-display-middle {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%)\r\n}\r\n\r\n.w3-display-left {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0%;\r\n  -webkit-transform: translate(0%, -50%);\r\n          transform: translate(0%, -50%);\r\n  -ms-transform: translate(-0%, -50%)\r\n}\r\n\r\n.w3-display-right {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0%;\r\n  -webkit-transform: translate(0%, -50%);\r\n          transform: translate(0%, -50%);\r\n  -ms-transform: translate(0%, -50%)\r\n}\r\n\r\n.w3-display-topmiddle {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 0;\r\n  -webkit-transform: translate(-50%, 0%);\r\n          transform: translate(-50%, 0%);\r\n  -ms-transform: translate(-50%, 0%)\r\n}\r\n\r\n.w3-display-bottommiddle {\r\n  position: absolute;\r\n  left: 50%;\r\n  bottom: 0;\r\n  -webkit-transform: translate(-50%, 0%);\r\n          transform: translate(-50%, 0%);\r\n  -ms-transform: translate(-50%, 0%)\r\n}\r\n\r\n.w3-display-container:hover .w3-display-hover {\r\n  display: block\r\n}\r\n\r\n.w3-display-container:hover span.w3-display-hover {\r\n  display: inline-block\r\n}\r\n\r\n.w3-display-hover {\r\n  display: none\r\n}\r\n\r\n.w3-display-position {\r\n  position: absolute\r\n}\r\n\r\n.w3-circle {\r\n  border-radius: 50%\r\n}\r\n\r\n.w3-round-small {\r\n  border-radius: 2px\r\n}\r\n\r\n.w3-round,\r\n.w3-round-medium {\r\n  border-radius: 4px\r\n}\r\n\r\n.w3-round-large {\r\n  border-radius: 8px\r\n}\r\n\r\n.w3-round-xlarge {\r\n  border-radius: 16px\r\n}\r\n\r\n.w3-round-xxlarge {\r\n  border-radius: 32px\r\n}\r\n\r\n.w3-row-padding,\r\n.w3-row-padding>.w3-half,\r\n.w3-row-padding>.w3-third,\r\n.w3-row-padding>.w3-twothird,\r\n.w3-row-padding>.w3-threequarter,\r\n.w3-row-padding>.w3-quarter,\r\n.w3-row-padding>.w3-col {\r\n  padding: 0 8px\r\n}\r\n\r\n.w3-container,\r\n.w3-panel {\r\n  padding: 0.01em 16px\r\n}\r\n\r\n.w3-panel {\r\n  margin-top: 16px;\r\n  margin-bottom: 16px\r\n}\r\n\r\n.w3-code,\r\n.w3-codespan {\r\n  font-family: Consolas, \"courier new\";\r\n  font-size: 16px\r\n}\r\n\r\n.w3-code {\r\n  width: auto;\r\n  background-color: #fff;\r\n  padding: 8px 12px;\r\n  border-left: 4px solid #4CAF50;\r\n  word-wrap: break-word\r\n}\r\n\r\n.w3-codespan {\r\n  color: crimson;\r\n  background-color: #f1f1f1;\r\n  padding-left: 4px;\r\n  padding-right: 4px;\r\n  font-size: 110%\r\n}\r\n\r\n.w3-card,\r\n.w3-card-2 {\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)\r\n}\r\n\r\n.w3-card-4,\r\n.w3-hover-shadow:hover {\r\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19)\r\n}\r\n\r\n.w3-spin {\r\n  -webkit-animation: w3-spin 2s infinite linear;\r\n          animation: w3-spin 2s infinite linear\r\n}\r\n\r\n@-webkit-keyframes w3-spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg)\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n            transform: rotate(359deg)\r\n  }\r\n}\r\n\r\n@keyframes w3-spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg)\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n            transform: rotate(359deg)\r\n  }\r\n}\r\n\r\n.w3-animate-fading {\r\n  -webkit-animation: fading 10s infinite;\r\n          animation: fading 10s infinite\r\n}\r\n\r\n@-webkit-keyframes fading {\r\n  0% {\r\n    opacity: 0\r\n  }\r\n  50% {\r\n    opacity: 1\r\n  }\r\n  100% {\r\n    opacity: 0\r\n  }\r\n}\r\n\r\n@keyframes fading {\r\n  0% {\r\n    opacity: 0\r\n  }\r\n  50% {\r\n    opacity: 1\r\n  }\r\n  100% {\r\n    opacity: 0\r\n  }\r\n}\r\n\r\n.w3-animate-opacity {\r\n  -webkit-animation: opac 0.8s;\r\n          animation: opac 0.8s\r\n}\r\n\r\n@-webkit-keyframes opac {\r\n  from {\r\n    opacity: 0\r\n  }\r\n  to {\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n@keyframes opac {\r\n  from {\r\n    opacity: 0\r\n  }\r\n  to {\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n.w3-animate-top {\r\n  position: relative;\r\n  -webkit-animation: animatetop 0.4s;\r\n          animation: animatetop 0.4s\r\n}\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n.w3-animate-left {\r\n  position: relative;\r\n  -webkit-animation: animateleft 0.4s;\r\n          animation: animateleft 0.4s\r\n}\r\n\r\n@-webkit-keyframes animateleft {\r\n  from {\r\n    left: -300px;\r\n    opacity: 0\r\n  }\r\n  to {\r\n    left: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n@keyframes animateleft {\r\n  from {\r\n    left: -300px;\r\n    opacity: 0\r\n  }\r\n  to {\r\n    left: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n.w3-animate-right {\r\n  position: relative;\r\n  -webkit-animation: animateright 0.4s;\r\n          animation: animateright 0.4s\r\n}\r\n\r\n@-webkit-keyframes animateright {\r\n  from {\r\n    right: -300px;\r\n    opacity: 0\r\n  }\r\n  to {\r\n    right: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n@keyframes animateright {\r\n  from {\r\n    right: -300px;\r\n    opacity: 0\r\n  }\r\n  to {\r\n    right: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n.w3-animate-bottom {\r\n  position: relative;\r\n  -webkit-animation: animatebottom 0.4s;\r\n          animation: animatebottom 0.4s\r\n}\r\n\r\n@-webkit-keyframes animatebottom {\r\n  from {\r\n    bottom: -300px;\r\n    opacity: 0\r\n  }\r\n  to {\r\n    bottom: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n@keyframes animatebottom {\r\n  from {\r\n    bottom: -300px;\r\n    opacity: 0\r\n  }\r\n  to {\r\n    bottom: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n.w3-animate-zoom {\r\n  -webkit-animation: animatezoom 0.6s;\r\n          animation: animatezoom 0.6s\r\n}\r\n\r\n@-webkit-keyframes animatezoom {\r\n  from {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0)\r\n  }\r\n  to {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1)\r\n  }\r\n}\r\n\r\n@keyframes animatezoom {\r\n  from {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0)\r\n  }\r\n  to {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1)\r\n  }\r\n}\r\n\r\n.w3-animate-input {\r\n  transition: width 0.4s ease-in-out\r\n}\r\n\r\n.w3-animate-input:focus {\r\n  width: 100% !important\r\n}\r\n\r\n.w3-opacity,\r\n.w3-hover-opacity:hover {\r\n  opacity: 0.60\r\n}\r\n\r\n.w3-opacity-off,\r\n.w3-hover-opacity-off:hover {\r\n  opacity: 1\r\n}\r\n\r\n.w3-opacity-max {\r\n  opacity: 0.25\r\n}\r\n\r\n.w3-opacity-min {\r\n  opacity: 0.75\r\n}\r\n\r\n.w3-greyscale-max,\r\n.w3-grayscale-max,\r\n.w3-hover-greyscale:hover,\r\n.w3-hover-grayscale:hover {\r\n  -webkit-filter: grayscale(100%);\r\n          filter: grayscale(100%)\r\n}\r\n\r\n.w3-greyscale,\r\n.w3-grayscale {\r\n  -webkit-filter: grayscale(75%);\r\n          filter: grayscale(75%)\r\n}\r\n\r\n.w3-greyscale-min,\r\n.w3-grayscale-min {\r\n  -webkit-filter: grayscale(50%);\r\n          filter: grayscale(50%)\r\n}\r\n\r\n.w3-sepia {\r\n  -webkit-filter: sepia(75%);\r\n          filter: sepia(75%)\r\n}\r\n\r\n.w3-sepia-max,\r\n.w3-hover-sepia:hover {\r\n  -webkit-filter: sepia(100%);\r\n          filter: sepia(100%)\r\n}\r\n\r\n.w3-sepia-min {\r\n  -webkit-filter: sepia(50%);\r\n          filter: sepia(50%)\r\n}\r\n\r\n.w3-tiny {\r\n  font-size: 10px !important\r\n}\r\n\r\n.w3-small {\r\n  font-size: 12px !important\r\n}\r\n\r\n.w3-medium {\r\n  font-size: 15px !important\r\n}\r\n\r\n.w3-large {\r\n  font-size: 18px !important\r\n}\r\n\r\n.w3-xlarge {\r\n  font-size: 24px !important\r\n}\r\n\r\n.w3-xxlarge {\r\n  font-size: 36px !important\r\n}\r\n\r\n.w3-xxxlarge {\r\n  font-size: 48px !important\r\n}\r\n\r\n.w3-jumbo {\r\n  font-size: 64px !important\r\n}\r\n\r\n.w3-left-align {\r\n  text-align: left !important\r\n}\r\n\r\n.w3-right-align {\r\n  text-align: right !important\r\n}\r\n\r\n.w3-justify {\r\n  text-align: justify !important\r\n}\r\n\r\n.w3-center {\r\n  text-align: center !important\r\n}\r\n\r\n.w3-border-0 {\r\n  border: 0 !important\r\n}\r\n\r\n.w3-border {\r\n  border: 1px solid #ccc !important\r\n}\r\n\r\n.w3-border-top {\r\n  border-top: 1px solid #ccc !important\r\n}\r\n\r\n.w3-border-bottom {\r\n  border-bottom: 1px solid #ccc !important\r\n}\r\n\r\n.w3-border-left {\r\n  border-left: 1px solid #ccc !important\r\n}\r\n\r\n.w3-border-right {\r\n  border-right: 1px solid #ccc !important\r\n}\r\n\r\n.w3-topbar {\r\n  border-top: 6px solid #ccc !important\r\n}\r\n\r\n.w3-bottombar {\r\n  border-bottom: 6px solid #ccc !important\r\n}\r\n\r\n.w3-leftbar {\r\n  border-left: 6px solid #ccc !important\r\n}\r\n\r\n.w3-rightbar {\r\n  border-right: 6px solid #ccc !important\r\n}\r\n\r\n.w3-section,\r\n.w3-code {\r\n  margin-top: 16px !important;\r\n  margin-bottom: 16px !important\r\n}\r\n\r\n.w3-margin {\r\n  margin: 16px !important\r\n}\r\n\r\n.w3-margin-top {\r\n  margin-top: 16px !important\r\n}\r\n\r\n.w3-margin-bottom {\r\n  margin-bottom: 16px !important\r\n}\r\n\r\n.w3-margin-left {\r\n  margin-left: 16px !important\r\n}\r\n\r\n.w3-margin-right {\r\n  margin-right: 16px !important\r\n}\r\n\r\n.w3-padding-small {\r\n  padding: 4px 8px !important\r\n}\r\n\r\n.w3-padding {\r\n  padding: 8px 16px !important\r\n}\r\n\r\n.w3-padding-large {\r\n  padding: 12px 24px !important\r\n}\r\n\r\n.w3-padding-16 {\r\n  padding-top: 16px !important;\r\n  padding-bottom: 16px !important\r\n}\r\n\r\n.w3-padding-24 {\r\n  padding-top: 24px !important;\r\n  padding-bottom: 24px !important\r\n}\r\n\r\n.w3-padding-32 {\r\n  padding-top: 32px !important;\r\n  padding-bottom: 32px !important\r\n}\r\n\r\n.w3-padding-48 {\r\n  padding-top: 48px !important;\r\n  padding-bottom: 48px !important\r\n}\r\n\r\n.w3-padding-64 {\r\n  padding-top: 64px !important;\r\n  padding-bottom: 64px !important\r\n}\r\n\r\n.w3-left {\r\n  float: left !important\r\n}\r\n\r\n.w3-right {\r\n  float: right !important\r\n}\r\n\r\n.w3-button:hover {\r\n  color: #000 !important;\r\n  background-color: #ccc !important\r\n}\r\n\r\n.w3-transparent,\r\n.w3-hover-none:hover {\r\n  background-color: transparent !important\r\n}\r\n\r\n.w3-hover-none:hover {\r\n  box-shadow: none !important\r\n}\r\n\r\n/* Colors */\r\n\r\n.w3-amber,\r\n.w3-hover-amber:hover {\r\n  color: #000 !important;\r\n  background-color: #ffc107 !important\r\n}\r\n\r\n.w3-aqua,\r\n.w3-hover-aqua:hover {\r\n  color: #000 !important;\r\n  background-color: #00ffff !important\r\n}\r\n\r\n.w3-blue,\r\n.w3-hover-blue:hover {\r\n  color: #fff !important;\r\n  background-color: #2196F3 !important\r\n}\r\n\r\n.w3-light-blue,\r\n.w3-hover-light-blue:hover {\r\n  color: #000 !important;\r\n  background-color: #87CEEB !important\r\n}\r\n\r\n.w3-brown,\r\n.w3-hover-brown:hover {\r\n  color: #fff !important;\r\n  background-color: #795548 !important\r\n}\r\n\r\n.w3-cyan,\r\n.w3-hover-cyan:hover {\r\n  color: #000 !important;\r\n  background-color: #00bcd4 !important\r\n}\r\n\r\n.w3-blue-grey,\r\n.w3-hover-blue-grey:hover,\r\n.w3-blue-gray,\r\n.w3-hover-blue-gray:hover {\r\n  color: #fff !important;\r\n  background-color: #607d8b !important\r\n}\r\n\r\n.w3-green,\r\n.w3-hover-green:hover {\r\n  color: #fff !important;\r\n  background-color: #4CAF50 !important\r\n}\r\n\r\n.w3-light-green,\r\n.w3-hover-light-green:hover {\r\n  color: #000 !important;\r\n  background-color: #8bc34a !important\r\n}\r\n\r\n.w3-indigo,\r\n.w3-hover-indigo:hover {\r\n  color: #fff !important;\r\n  background-color: #3f51b5 !important\r\n}\r\n\r\n.w3-khaki,\r\n.w3-hover-khaki:hover {\r\n  color: #000 !important;\r\n  background-color: #f0e68c !important\r\n}\r\n\r\n.w3-lime,\r\n.w3-hover-lime:hover {\r\n  color: #000 !important;\r\n  background-color: #cddc39 !important\r\n}\r\n\r\n.w3-orange,\r\n.w3-hover-orange:hover {\r\n  color: #000 !important;\r\n  background-color: #ff9800 !important\r\n}\r\n\r\n.w3-deep-orange,\r\n.w3-hover-deep-orange:hover {\r\n  color: #fff !important;\r\n  background-color: #ff5722 !important\r\n}\r\n\r\n.w3-pink,\r\n.w3-hover-pink:hover {\r\n  color: #fff !important;\r\n  background-color: #e91e63 !important\r\n}\r\n\r\n.w3-purple,\r\n.w3-hover-purple:hover {\r\n  color: #fff !important;\r\n  background-color: #9c27b0 !important\r\n}\r\n\r\n.w3-deep-purple,\r\n.w3-hover-deep-purple:hover {\r\n  color: #fff !important;\r\n  background-color: #673ab7 !important\r\n}\r\n\r\n.w3-red,\r\n.w3-hover-red:hover {\r\n  color: #fff !important;\r\n  background-color: #f44336 !important\r\n}\r\n\r\n.w3-sand,\r\n.w3-hover-sand:hover {\r\n  color: #000 !important;\r\n  background-color: #fdf5e6 !important\r\n}\r\n\r\n.w3-teal,\r\n.w3-hover-teal:hover {\r\n  color: #fff !important;\r\n  background-color: #009688 !important\r\n}\r\n\r\n.w3-yellow,\r\n.w3-hover-yellow:hover {\r\n  color: #000 !important;\r\n  background-color: #ffeb3b !important\r\n}\r\n\r\n.w3-white,\r\n.w3-hover-white:hover {\r\n  color: #000 !important;\r\n  background-color: #fff !important\r\n}\r\n\r\n.w3-black,\r\n.w3-hover-black:hover {\r\n  color: #fff !important;\r\n  background-color: #000 !important\r\n}\r\n\r\n.w3-grey,\r\n.w3-hover-grey:hover,\r\n.w3-gray,\r\n.w3-hover-gray:hover {\r\n  color: #000 !important;\r\n  background-color: #9e9e9e !important\r\n}\r\n\r\n.w3-light-grey,\r\n.w3-hover-light-grey:hover,\r\n.w3-light-gray,\r\n.w3-hover-light-gray:hover {\r\n  color: #000 !important;\r\n  background-color: #f1f1f1 !important\r\n}\r\n\r\n.w3-dark-grey,\r\n.w3-hover-dark-grey:hover,\r\n.w3-dark-gray,\r\n.w3-hover-dark-gray:hover {\r\n  color: #fff !important;\r\n  background-color: #616161 !important\r\n}\r\n\r\n.w3-pale-red,\r\n.w3-hover-pale-red:hover {\r\n  color: #000 !important;\r\n  background-color: #ffdddd !important\r\n}\r\n\r\n.w3-pale-green,\r\n.w3-hover-pale-green:hover {\r\n  color: #000 !important;\r\n  background-color: #ddffdd !important\r\n}\r\n\r\n.w3-pale-yellow,\r\n.w3-hover-pale-yellow:hover {\r\n  color: #000 !important;\r\n  background-color: #ffffcc !important\r\n}\r\n\r\n.w3-pale-blue,\r\n.w3-hover-pale-blue:hover {\r\n  color: #000 !important;\r\n  background-color: #ddffff !important\r\n}\r\n\r\n.w3-text-amber,\r\n.w3-hover-text-amber:hover {\r\n  color: #ffc107 !important\r\n}\r\n\r\n.w3-text-aqua,\r\n.w3-hover-text-aqua:hover {\r\n  color: #00ffff !important\r\n}\r\n\r\n.w3-text-blue,\r\n.w3-hover-text-blue:hover {\r\n  color: #2196F3 !important\r\n}\r\n\r\n.w3-text-light-blue,\r\n.w3-hover-text-light-blue:hover {\r\n  color: #87CEEB !important\r\n}\r\n\r\n.w3-text-brown,\r\n.w3-hover-text-brown:hover {\r\n  color: #795548 !important\r\n}\r\n\r\n.w3-text-cyan,\r\n.w3-hover-text-cyan:hover {\r\n  color: #00bcd4 !important\r\n}\r\n\r\n.w3-text-blue-grey,\r\n.w3-hover-text-blue-grey:hover,\r\n.w3-text-blue-gray,\r\n.w3-hover-text-blue-gray:hover {\r\n  color: #607d8b !important\r\n}\r\n\r\n.w3-text-green,\r\n.w3-hover-text-green:hover {\r\n  color: #4CAF50 !important\r\n}\r\n\r\n.w3-text-light-green,\r\n.w3-hover-text-light-green:hover {\r\n  color: #8bc34a !important\r\n}\r\n\r\n.w3-text-indigo,\r\n.w3-hover-text-indigo:hover {\r\n  color: #3f51b5 !important\r\n}\r\n\r\n.w3-text-khaki,\r\n.w3-hover-text-khaki:hover {\r\n  color: #b4aa50 !important\r\n}\r\n\r\n.w3-text-lime,\r\n.w3-hover-text-lime:hover {\r\n  color: #cddc39 !important\r\n}\r\n\r\n.w3-text-orange,\r\n.w3-hover-text-orange:hover {\r\n  color: #ff9800 !important\r\n}\r\n\r\n.w3-text-deep-orange,\r\n.w3-hover-text-deep-orange:hover {\r\n  color: #ff5722 !important\r\n}\r\n\r\n.w3-text-pink,\r\n.w3-hover-text-pink:hover {\r\n  color: #e91e63 !important\r\n}\r\n\r\n.w3-text-purple,\r\n.w3-hover-text-purple:hover {\r\n  color: #9c27b0 !important\r\n}\r\n\r\n.w3-text-deep-purple,\r\n.w3-hover-text-deep-purple:hover {\r\n  color: #673ab7 !important\r\n}\r\n\r\n.w3-text-red,\r\n.w3-hover-text-red:hover {\r\n  color: #f44336 !important\r\n}\r\n\r\n.w3-text-sand,\r\n.w3-hover-text-sand:hover {\r\n  color: #fdf5e6 !important\r\n}\r\n\r\n.w3-text-teal,\r\n.w3-hover-text-teal:hover {\r\n  color: #009688 !important\r\n}\r\n\r\n.w3-text-yellow,\r\n.w3-hover-text-yellow:hover {\r\n  color: #d2be0e !important\r\n}\r\n\r\n.w3-text-white,\r\n.w3-hover-text-white:hover {\r\n  color: #fff !important\r\n}\r\n\r\n.w3-text-black,\r\n.w3-hover-text-black:hover {\r\n  color: #000 !important\r\n}\r\n\r\n.w3-text-grey,\r\n.w3-hover-text-grey:hover,\r\n.w3-text-gray,\r\n.w3-hover-text-gray:hover {\r\n  color: #757575 !important\r\n}\r\n\r\n.w3-text-light-grey,\r\n.w3-hover-text-light-grey:hover,\r\n.w3-text-light-gray,\r\n.w3-hover-text-light-gray:hover {\r\n  color: #f1f1f1 !important\r\n}\r\n\r\n.w3-text-dark-grey,\r\n.w3-hover-text-dark-grey:hover,\r\n.w3-text-dark-gray,\r\n.w3-hover-text-dark-gray:hover {\r\n  color: #3a3a3a !important\r\n}\r\n\r\n.w3-border-amber,\r\n.w3-hover-border-amber:hover {\r\n  border-color: #ffc107 !important\r\n}\r\n\r\n.w3-border-aqua,\r\n.w3-hover-border-aqua:hover {\r\n  border-color: #00ffff !important\r\n}\r\n\r\n.w3-border-blue,\r\n.w3-hover-border-blue:hover {\r\n  border-color: #2196F3 !important\r\n}\r\n\r\n.w3-border-light-blue,\r\n.w3-hover-border-light-blue:hover {\r\n  border-color: #87CEEB !important\r\n}\r\n\r\n.w3-border-brown,\r\n.w3-hover-border-brown:hover {\r\n  border-color: #795548 !important\r\n}\r\n\r\n.w3-border-cyan,\r\n.w3-hover-border-cyan:hover {\r\n  border-color: #00bcd4 !important\r\n}\r\n\r\n.w3-border-blue-grey,\r\n.w3-hover-border-blue-grey:hover,\r\n.w3-border-blue-gray,\r\n.w3-hover-border-blue-gray:hover {\r\n  border-color: #607d8b !important\r\n}\r\n\r\n.w3-border-green,\r\n.w3-hover-border-green:hover {\r\n  border-color: #4CAF50 !important\r\n}\r\n\r\n.w3-border-light-green,\r\n.w3-hover-border-light-green:hover {\r\n  border-color: #8bc34a !important\r\n}\r\n\r\n.w3-border-indigo,\r\n.w3-hover-border-indigo:hover {\r\n  border-color: #3f51b5 !important\r\n}\r\n\r\n.w3-border-khaki,\r\n.w3-hover-border-khaki:hover {\r\n  border-color: #f0e68c !important\r\n}\r\n\r\n.w3-border-lime,\r\n.w3-hover-border-lime:hover {\r\n  border-color: #cddc39 !important\r\n}\r\n\r\n.w3-border-orange,\r\n.w3-hover-border-orange:hover {\r\n  border-color: #ff9800 !important\r\n}\r\n\r\n.w3-border-deep-orange,\r\n.w3-hover-border-deep-orange:hover {\r\n  border-color: #ff5722 !important\r\n}\r\n\r\n.w3-border-pink,\r\n.w3-hover-border-pink:hover {\r\n  border-color: #e91e63 !important\r\n}\r\n\r\n.w3-border-purple,\r\n.w3-hover-border-purple:hover {\r\n  border-color: #9c27b0 !important\r\n}\r\n\r\n.w3-border-deep-purple,\r\n.w3-hover-border-deep-purple:hover {\r\n  border-color: #673ab7 !important\r\n}\r\n\r\n.w3-border-red,\r\n.w3-hover-border-red:hover {\r\n  border-color: #f44336 !important\r\n}\r\n\r\n.w3-border-sand,\r\n.w3-hover-border-sand:hover {\r\n  border-color: #fdf5e6 !important\r\n}\r\n\r\n.w3-border-teal,\r\n.w3-hover-border-teal:hover {\r\n  border-color: #009688 !important\r\n}\r\n\r\n.w3-border-yellow,\r\n.w3-hover-border-yellow:hover {\r\n  border-color: #ffeb3b !important\r\n}\r\n\r\n.w3-border-white,\r\n.w3-hover-border-white:hover {\r\n  border-color: #fff !important\r\n}\r\n\r\n.w3-border-black,\r\n.w3-hover-border-black:hover {\r\n  border-color: #000 !important\r\n}\r\n\r\n.w3-border-grey,\r\n.w3-hover-border-grey:hover,\r\n.w3-border-gray,\r\n.w3-hover-border-gray:hover {\r\n  border-color: #9e9e9e !important\r\n}\r\n\r\n.w3-border-light-grey,\r\n.w3-hover-border-light-grey:hover,\r\n.w3-border-light-gray,\r\n.w3-hover-border-light-gray:hover {\r\n  border-color: #f1f1f1 !important\r\n}\r\n\r\n.w3-border-dark-grey,\r\n.w3-hover-border-dark-grey:hover,\r\n.w3-border-dark-gray,\r\n.w3-hover-border-dark-gray:hover {\r\n  border-color: #616161 !important\r\n}\r\n\r\n.w3-border-pale-red,\r\n.w3-hover-border-pale-red:hover {\r\n  border-color: #ffe7e7 !important\r\n}\r\n\r\n.w3-border-pale-green,\r\n.w3-hover-border-pale-green:hover {\r\n  border-color: #e7ffe7 !important\r\n}\r\n\r\n.w3-border-pale-yellow,\r\n.w3-hover-border-pale-yellow:hover {\r\n  border-color: #ffffcc !important\r\n}\r\n\r\n.w3-border-pale-blue,\r\n.w3-hover-border-pale-blue:hover {\r\n  border-color: #e7ffff !important\r\n}\r\n"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\mauri\Documents\Work\Projects\_TEMP\electron-hmi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map