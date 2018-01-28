/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__code__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__code___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__code__);



$(document).ready(function(){

  $( "#inputMessageButton" ).click(function() {
    let message = $('#inputMessage').val();
    let morseResponse = [];
    for(let i of message){
      let letterUpperCase=i.toUpperCase();
      morseResponse.push(__WEBPACK_IMPORTED_MODULE_0__code___default.a[letterUpperCase]);
      //console.log(letterUpperCase+'   '+code[letterUpperCase]);
    }
    let encodedMessage="";
    for(let c of morseResponse){
      encodedMessage=encodedMessage+"   "+c;
    }
    console.log(encodedMessage);
    $("#encodedResponse").append( "<p>"+encodedMessage+"</p>" );
  });

  $( "#inputSymbolButton" ).click(function() {
    let inputSymbol = $('#inputSymbol').val();
    let k=Object.keys(__WEBPACK_IMPORTED_MODULE_0__code___default.a).find(key => __WEBPACK_IMPORTED_MODULE_0__code___default.a[key] === inputSymbol);
    console.log(k.toString());
    $("#letterResponse").append( "<p>"+k.toString()+"</p>" );
  });

  $( "#randomButton" ).click(function() {
    let keys = Object.keys(__WEBPACK_IMPORTED_MODULE_0__code___default.a);
    let randomKey = keys[ keys.length * Math.random() << 0];
    //console.log(randomKey);
    $("#randomResponse").empty();
    $("#randomResponse").append("<p>"+randomKey+"</p>");
  });

  $( "#inputUserResponseButton" ).click(function() {
    let randomKey = $("#randomResponse").text();
    //console.log(randomKey);
    let userInputResponse = $('#inputUserResponse').val().toUpperCase();
    let userAnswer=Object.keys(__WEBPACK_IMPORTED_MODULE_0__code___default.a).find(key => __WEBPACK_IMPORTED_MODULE_0__code___default.a[key] === userInputResponse);
    //console.log('Your answer is:   '+userInputResponse+'   '+userAnswer);
    $("#userAnswer").append( '<p>Your answer is:   '+userInputResponse+'   '+userAnswer+"</p>" );
    let correctLetter = __WEBPACK_IMPORTED_MODULE_0__code___default.a[randomKey];
    //console.log('The correct answer is:   '+correctLetter+' '+ randomKey);
    $("#correctAnswer").append( '<p>The correct answer is:   '+correctLetter+' '+ randomKey+"</p>" );
  });
});



/***/ }),
/* 1 */
/***/ (function(module, exports) {

let code = {
"A":"._",
"B":"_...",
"C":"_._.",
"D":"_..",
"E":".",
"F":".._.",
"G":"__.",
"H":"....",
"I":"..",
"J":".___",
"K":"_._",
"L":"._..",
"M":"__",
"N":"_.",
"O":"___",
"P":".__.",
"Q":"__._",
"R":"._.",
"S":"...",
"T":"_",
"U":".._",
"V":"..._",
"W":".__",
"X":"_.._",
"Y":"_.__",
"Z":"__..",
" ":" "
};

module.exports = code;


/***/ })
/******/ ]);