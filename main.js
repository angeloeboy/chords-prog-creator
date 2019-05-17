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
		var e = new Error("Cannot find module '" + req + "'");
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

module.exports = "<app-chords-input></app-chords-input>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'chord-prog-creator';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_chords_input_chords_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/chords-input/chords-input.component */ "./src/app/components/chords-input/chords-input.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_chords_input_chords_input_component__WEBPACK_IMPORTED_MODULE_3__["ChordsInputComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chords-input/chords-input.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/chords-input/chords-input.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    font-family: 'Times New Roman', Times, serif;\r\n\r\n}\r\n\r\n.list{\r\n    list-style: none;\r\n}\r\n\r\n#chordChoice{\r\n    margin: 60px auto 0 auto;\r\n    display: block;\r\n    background-color: white;\r\n    font-size: 70px;\r\n    width: 120px;\r\n    height: 90px;\r\n    border: none;\r\n    box-shadow: 0px 2px 7px 0px #7c7c7c;\r\n}\r\n\r\n.majOrMin{\r\n    text-align: center;\r\n}\r\n\r\nbutton{\r\n    display: inline-block;\r\n    width: 100px;\r\n    height: 40px;\r\n    background-color: pink;\r\n    text-align: center;\r\n    margin: 20px;  \r\n    border: 1px solid black;\r\n    background-color: transparent;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\nbutton:hover{\r\n\r\n}\r\n\r\n.black{\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\nli{\r\n    text-align: center;\r\n    display: block;\r\n    width: 80%;\r\n    padding: 20px;\r\n    margin: 20px auto;\r\n    border: 1px solid black;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/chords-input/chords-input.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/chords-input/chords-input.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select id=\"chordChoice\" (change)=\"selectChord($event)\">\n    <option value=\"C\"><li>C</li>  </option>\n    <option value=\"D\">D</option>\n    <option value=\"E\">E</option>\n    <option value=\"F\">F</option>\n    <option value=\"G\">G</option>\n    <option value=\"A\">A</option>\n    <option value=\"B\">B</option>\n  </select>\n  <!-- <select (change)=\"selectMajorOrMinor($event)\">\n    <option value=\"Major\">Major</option>\n    <option value=\"Minor\">Minor</option>\n  </select> -->\n\n  <div class=\"majOrMin\">\n    <button (click)=\"isMajorClicked()\"  [ngStyle]=\"blackBg\" class=\"major\" >Major</button>\n    <button (click)=\"isMinorClicked()\" [ngStyle]=\"whiteBg\" class=\"min\">Minor</button>\n  </div>\n<li class=\"list\" *ngFor=\"let element of chordCombination; let i = index\">\n    {{chordCombination[i]}}\n</li>"

/***/ }),

/***/ "./src/app/components/chords-input/chords-input.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/chords-input/chords-input.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChordsInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChordsInputComponent", function() { return ChordsInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChordsInputComponent = /** @class */ (function () {
    function ChordsInputComponent() {
        this.value = 'C';
        this.majOrMin = true;
        this.valueNumber = 1;
        this.chordsTwo = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
        this.first = "";
        this.second = "";
        this.third = "";
        this.fourth = "";
        this.fifth = "";
        this.sixth = "";
        this.seventh = "";
        this.chordCombination = [];
        this.majorClicked = true;
    }
    ChordsInputComponent.prototype.ngOnInit = function () {
        this.showChords();
    };
    ChordsInputComponent.prototype.selectChord = function (event) {
        this.value = event.target.value;
        this.showChords();
    };
    ChordsInputComponent.prototype.rotate = function (array, times) {
        while (times--) {
            var temp = array.shift();
            array.push(temp);
        }
    };
    ChordsInputComponent.prototype.getChordNumber = function () {
        if (this.value === "A") {
            this.valueNumber = 9;
        }
        else if (this.value === "B") {
            this.valueNumber = 11;
        }
        else if (this.value === "C") {
            this.valueNumber = 0;
        }
        else if (this.value === "D") {
            this.valueNumber = 2;
        }
        else if (this.value === "E") {
            this.valueNumber = 4;
        }
        else if (this.value === "F") {
            this.valueNumber = 5;
        }
        else if (this.value === "G") {
            this.valueNumber = 7;
        }
    };
    ChordsInputComponent.prototype.getChords = function (major) {
        if (major) {
            this.first = this.chordsTwo[0];
            this.second = this.chordsTwo[2];
            this.third = this.chordsTwo[4];
            this.fourth = this.chordsTwo[5];
            this.fifth = this.chordsTwo[7];
            this.sixth = this.chordsTwo[9];
            this.seventh = this.chordsTwo[11];
            this.second = this.second + "m";
            this.third = this.third + "m";
            this.sixth = this.sixth + "m";
            console.log(this.first + " " + this.second + " " + this.third + " " + this.fourth + " " + this.fifth + " " + this.sixth + " " + this.seventh);
        }
        else if (major == false) {
            this.first = this.chordsTwo[0];
            this.second = this.chordsTwo[2];
            this.third = this.chordsTwo[3];
            this.fourth = this.chordsTwo[5];
            this.fifth = this.chordsTwo[7];
            this.sixth = this.chordsTwo[8];
            this.seventh = this.chordsTwo[10];
            this.first = this.first + "m";
            this.second = this.second + "m";
            this.fourth = this.fourth + "m";
            this.fifth = this.fifth + "m";
            console.log(this.first + " " + this.second + " " + this.third + " " + this.fourth + " " + this.fifth + " " + this.sixth + " " + this.seventh);
        }
    };
    ChordsInputComponent.prototype.getChordCombinations = function (major) {
        if (major) {
            this.chordCombination[0] = this.first + " - " + this.fourth + " - " + this.fifth;
            this.chordCombination[1] = this.first + " - " + this.fourth + " - " + this.first + " - " + this.fifth;
            this.chordCombination[2] = this.first + " - " + this.sixth + " - " + this.fourth + " - " + this.fifth;
            this.chordCombination[3] = this.first + " - " + this.fifth + " - " + this.sixth + " - " + this.fourth;
            this.chordCombination[4] = this.sixth + " - " + this.fourth + " - " + this.first + " - " + this.fifth;
            console.log(this.chordCombination);
        }
        else if (major == false) {
            this.chordCombination[0] = this.first + " - " + this.sixth + " - " + this.seventh;
            this.chordCombination[1] = this.first + " - " + this.fourth + " - " + this.seventh;
            this.chordCombination[2] = this.first + " - " + this.fourth + " - " + this.fifth;
            this.chordCombination[3] = this.first + " - " + this.sixth + " - " + this.third + " - " + this.seventh;
            this.chordCombination[4] = this.second + " - " + this.fifth + " - " + this.first;
            console.log(this.chordCombination);
        }
    };
    ChordsInputComponent.prototype.showChords = function () {
        this.getChordNumber();
        this.rotate(this.chordsTwo, this.valueNumber);
        this.getChords(this.majOrMin);
        this.getChordCombinations(this.majOrMin);
        this.chordsTwo = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    };
    ChordsInputComponent.prototype.isMajorClicked = function () {
        this.majOrMin = true;
        console.log(this.majOrMin);
        this.showChords();
        this.majorClicked = true;
    };
    ChordsInputComponent.prototype.isMinorClicked = function () {
        this.majOrMin = false;
        console.log(this.majOrMin);
        this.showChords();
        this.majorClicked = false;
    };
    Object.defineProperty(ChordsInputComponent.prototype, "blackBg", {
        get: function () {
            return {
                'background-color': this.majorClicked ? 'black' : 'white',
                'color': this.majorClicked ? 'white' : "black"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChordsInputComponent.prototype, "whiteBg", {
        get: function () {
            return {
                'background-color': this.majorClicked ? 'white' : 'black',
                'color': this.majorClicked ? 'black' : "white"
            };
        },
        enumerable: true,
        configurable: true
    });
    ChordsInputComponent.prototype.changeSharpToFlat = function () {
    };
    ChordsInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chords-input',
            template: __webpack_require__(/*! ./chords-input.component.html */ "./src/app/components/chords-input/chords-input.component.html"),
            styles: [__webpack_require__(/*! ./chords-input.component.css */ "./src/app/components/chords-input/chords-input.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChordsInputComponent);
    return ChordsInputComponent;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/angelo/Private/chord-prog-creator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map