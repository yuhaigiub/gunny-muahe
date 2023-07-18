/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"0"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/_article/default/default.scss":
/*!*******************************************!*\
  !*** ./src/_article/default/default.scss ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Missing argument $percentage.\n   ┌──> src\\_article\\default\\default.scss\n523│         @include defaultHover();\r\n   │         ^^^^^^^^^^^^^^^^^^^^^^^ invocation\n   ╵\n   ┌──> src\\setup\\scss\\_mixins.scss\n62 │ @mixin defaultHover($percentage) {\r\n   │        ━━━━━━━━━━━━━━━━━━━━━━━━━ declaration\n   ╵\n  src\\_article\\default\\default.scss 523:9  defaultHover()\n  src\\_article\\default\\default.scss 523:9  root stylesheet\n    at E:\\gunny_muahe\\template-2023\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at E:\\gunny_muahe\\template-2023\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at E:\\gunny_muahe\\template-2023\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (E:\\gunny_muahe\\template-2023\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at E:\\gunny_muahe\\template-2023\\node_modules\\sass-loader\\dist\\index.js:62:7\n    at Function.call$2 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:102264:16)\n    at render_closure1.call$2 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:87080:12)\n    at _RootZone.runBinary$3$3 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:30345:18)\n    at _FutureListener.handleError$1 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:28874:21)\n    at _Future__propagateToListeners_handleError.call$0 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:29181:49)\n    at Object._Future__propagateToListeners (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:4014:77)\n    at _Future._completeError$2 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:29027:9)\n    at _AsyncAwaitCompleter.completeError$2 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:28675:12)\n    at Object._asyncRethrow (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:3816:17)\n    at E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:20297:20\n    at _wrapJsFunctionForAsync_closure.$protected (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:3841:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:28694:12)\n    at _awaitOnObject_closure0.call$2 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:28688:25)\n    at _RootZone.runBinary$3$3 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:30345:18)\n    at _FutureListener.handleError$1 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:28874:21)\n    at _Future__propagateToListeners_handleError.call$0 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:29181:49)\n    at Object._Future__propagateToListeners (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:4014:77)\n    at _Future._completeError$2 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:29027:9)\n    at _AsyncAwaitCompleter.completeError$2 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:28675:12)\n    at Object._asyncRethrow (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:3816:17)\n    at E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:15710:20\n    at _wrapJsFunctionForAsync_closure.$protected (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:3841:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:28694:12)\n    at _awaitOnObject_closure0.call$2 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:28688:25)\n    at _RootZone.runBinary$3$3 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:30345:18)\n    at _FutureListener.handleError$1 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:28874:21)\n    at _Future__propagateToListeners_handleError.call$0 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:29181:49)\n    at Object._Future__propagateToListeners (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:4014:77)\n    at _Future._completeError$2 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:29027:9)\n    at _AsyncAwaitCompleter.completeError$2 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:28675:12)\n    at Object._asyncRethrow (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:3816:17)\n    at E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:15745:20\n    at _wrapJsFunctionForAsync_closure.$protected (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:3841:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:28694:12)\n    at _awaitOnObject_closure0.call$2 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:28688:25)\n    at _RootZone.runBinary$3$3 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:30345:18)\n    at _FutureListener.handleError$1 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:28874:21)\n    at _Future__propagateToListeners_handleError.call$0 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:29181:49)\n    at Object._Future__propagateToListeners (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:4014:77)\n    at _Future._completeError$2 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:29027:9)\n    at _AsyncAwaitCompleter.completeError$2 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:28675:12)\n    at Object._asyncRethrow (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:3816:17)\n    at E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:74640:20\n    at _wrapJsFunctionForAsync_closure.$protected (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:3841:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (E:\\gunny_muahe\\template-2023\\node_modules\\sass\\sass.dart.js:28694:12)");

/***/ }),

/***/ "./src/article/articleTheme.json":
/*!***************************************!*\
  !*** ./src/article/articleTheme.json ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module) {

module.exports = JSON.parse("{\"default\":\"default\"}");

/***/ }),

/***/ "./src/article/index.js":
/*!******************************!*\
  !*** ./src/article/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/index.js */ "./src/article/js/index.js");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ "./src/article/scss/index.scss");



/***/ }),

/***/ "./src/article/js/_articleBundles.js":
/*!*******************************************!*\
  !*** ./src/article/js/_articleBundles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var articleBundles;
articleBundles = {
  default: {
    id: "default",
    thumbnail: "../article/_article/default/article-thumbnail.jpg",
    scss: __webpack_require__(/*! ../../_article/default/default.scss */ "./src/_article/default/default.scss")
  }
};
/* harmony default export */ __webpack_exports__["default"] = (articleBundles);

/***/ }),

/***/ "./src/article/js/index.js":
/*!*********************************!*\
  !*** ./src/article/js/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _articleBundles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_articleBundles.js */ "./src/article/js/_articleBundles.js");
/* harmony import */ var font_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! font-picker */ "./node_modules/font-picker/dist/FontPicker.es.js");
/* harmony import */ var _setup_js_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../setup/js/_accordion */ "./src/setup/js/_accordion.js");
/* harmony import */ var _setup_js_accordion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_setup_js_accordion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _articleTheme_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../articleTheme.json */ "./src/article/articleTheme.json");
var _articleTheme_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../articleTheme.json */ "./src/article/articleTheme.json", 1);


// ALL ARTICLE JS GOES HERE
// - jQuery supported



window.addEventListener("load", function () {
  // window.alert("Script load ok!");

  $(".article").each(function () {
    $(this).accordion({
      isTabContent: true,
      after: function () {}
    });
  });
  var url = new URL(window.location.href);
  var param_theme = url.searchParams.get("theme");
  if (param_theme) {
    $("body").addClass(param_theme);
  } else {
    $("body").addClass(_articleTheme_json__WEBPACK_IMPORTED_MODULE_3__.default);
  }
  var fontPickerOptions = {
    "sort": "popularity",
    "families": ["Barlow", "Barlow Condensed"]
    // "scripts": ["Vietnamese"]
  };

  window.fontPickerPrimary = new font_picker__WEBPACK_IMPORTED_MODULE_1__["default"]("AIzaSyBxqeghm6vBR5BLIoXjQG4PCU_A6sGSNTw",
  // Google API key
  "Barlow",
  // Default font
  {
    ...fontPickerOptions,
    pickerId: 'primary'
  });
  window.fontPickerSecondary = new font_picker__WEBPACK_IMPORTED_MODULE_1__["default"]("AIzaSyBxqeghm6vBR5BLIoXjQG4PCU_A6sGSNTw",
  // Google API key
  "Barlow",
  // Default font
  {
    ...fontPickerOptions,
    pickerId: 'secondary'
  });
});

/***/ }),

/***/ "./src/article/scss/index.scss":
/*!*************************************!*\
  !*** ./src/article/scss/index.scss ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/setup/js/_accordion.js":
/*!************************************!*\
  !*** ./src/setup/js/_accordion.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$.fn.accordion = function (options) {
  var defaults = {
    obj: $(this),
    isTabContent: false,
    after: function () {}
  };
  var settings = $.extend(defaults, options);
  switch (settings.isTabContent) {
    case 0:
    case false:
      // need preview
      // settings.obj.children(".accordion__set").children(".accordion__title").each(function(){
      //     $(this).on("click", function(e){
      //         e.preventDefault();
      //         if ($(this).hasClass("active")){
      //             $(this).removeClass("active");
      //             $(this).next(".accordion__content").slideUp(200);
      //         } else {
      //             settings.obj.children(".accordion__set").children(".accordion__title").removeClass("active");
      //             settings.obj.children(".accordion__set").children(".accordion__content").slideUp(200);
      //             $(this).addClass("active");
      //             $(this).next(".accordion__content").slideDown(200);
      //         }
      //     })
      // });
      break;
    case 1:
    case true:
      settings.obj.find(".articleAccordionTab").each(function () {
        $(this).on("click", function (e) {
          e.preventDefault();
          var accordionContent = $(this).attr("href");
          settings.obj.find(".articleAccordionTab").removeClass("active");
          settings.obj.find(".articleAccordionContent").removeClass("active");
          $(this).addClass("active");
          settings.obj.find(accordionContent).addClass("active");
          setTimeout(function () {
            settings.after();
          }, 600);
        });
      });
      break;
  }
};

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/article/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/article/index.js */"./src/article/index.js");


/***/ })

/******/ });
//# sourceMappingURL=article.bundle.js.map