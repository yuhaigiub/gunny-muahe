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

/***/ "./src/gunny/float_bottom/float_bottom.html.twig":
/*!*******************************************************!*\
  !*** ./src/gunny/float_bottom/float_bottom.html.twig ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "twig").twig,
    tokens = [{"type":"logic","token":{"type":"Twig.logic.type.spaceless","match":["spaceless"],"output":[{"type":"raw","value":"\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockId","expression":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":"gunny_float_bottom"},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockIdPostFix","expression":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":""},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\t<div id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"\" class=\"floatbottom "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":" scrollFrame scaleMobile scaleDesktop mobile\" data-block-id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\n\t\t<div class=\"floatbottom__background\">\n\t\t\t"},{"type":"raw","value":"\n\n\t\t\t<span id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"-scrollwatch-pin\" class=\"scrollwatch-pin\"></span>\n\t\t</div>\n\t\t<div class=\"floatbottom__content\">\n\t\t\t<ul class=\"bottom\">\n\t\t\t\t<li class=\"bottom-text\">\n\t\t\t\t\t<a href=\"#\" class=\"item1\">Giới Thiệu</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"bottom-text\">\n\t\t\t\t\t<a href=\"#\" class=\"item2\">Giải Thưởng</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"bottom-text\">\n\t\t\t\t\t<a href=\"#\" class=\"item3\">Thể Lệ</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"bottom-text\">\n\t\t\t\t\t<a href=\"#popup-content\" class=\"item4\" data-popup>Hướng Dẫn</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"bottom-text\">\n\t\t\t\t\t<a href=\"#\" class=\"item5\">Bảng Xếp Hạng</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"bottom-text\">\n\t\t\t\t\t<a href=\"#\" class=\"item6\">Tham Gia</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n"}]}}],
    template = twig({"id":"$resolved:1e70472e50f27f5d23fc40382564f115ebcae9bb8c0ecdd50e7c607af6be9896ee0440a1b24c6fc6baad708625f195099ad4e32f5dede5035c01b0d2560c0039:float_bottom.html.twig","data":[{"type":"logic","token":{"type":"Twig.logic.type.spaceless","match":["spaceless"],"output":[{"type":"raw","value":"\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockId","expression":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":"gunny_float_bottom"},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockIdPostFix","expression":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":""},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\t<div id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"\" class=\"floatbottom "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":" scrollFrame scaleMobile scaleDesktop mobile\" data-block-id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\n\t\t<div class=\"floatbottom__background\">\n\t\t\t"},{"type":"raw","value":"\n\n\t\t\t<span id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"-scrollwatch-pin\" class=\"scrollwatch-pin\"></span>\n\t\t</div>\n\t\t<div class=\"floatbottom__content\">\n\t\t\t<ul class=\"bottom\">\n\t\t\t\t<li class=\"bottom-text\">\n\t\t\t\t\t<a href=\"#\" class=\"item1\">Giới Thiệu</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"bottom-text\">\n\t\t\t\t\t<a href=\"#\" class=\"item2\">Giải Thưởng</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"bottom-text\">\n\t\t\t\t\t<a href=\"#\" class=\"item3\">Thể Lệ</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"bottom-text\">\n\t\t\t\t\t<a href=\"#popup-content\" class=\"item4\" data-popup>Hướng Dẫn</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"bottom-text\">\n\t\t\t\t\t<a href=\"#\" class=\"item5\">Bảng Xếp Hạng</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"bottom-text\">\n\t\t\t\t\t<a href=\"#\" class=\"item6\">Tham Gia</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n"}]}}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/gunny/float_bottom/float_bottom.js":
/*!************************************************!*\
  !*** ./src/gunny/float_bottom/float_bottom.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_js_scrollFrame_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../setup/js/_scrollFrame.2 */ "./src/setup/js/_scrollFrame.2.js");

$(document).on("gunny_float_bottom rendered", {}, function (event, uniqueId) {
  const $this = $("#" + uniqueId);
  $this.find(".item1").on("click", function (event) {
    _setup_js_scrollFrame_2__WEBPACK_IMPORTED_MODULE_0__["default"].func.scrollTo("#gunny_frame1_EwBx8", 0);
  });
  $this.find(".item5").on("click", function (event) {
    _setup_js_scrollFrame_2__WEBPACK_IMPORTED_MODULE_0__["default"].func.scrollTo("#gunny_frame2_ASesx", -36);
  });
  $this.find(".item6").on("click", function (event) {
    _setup_js_scrollFrame_2__WEBPACK_IMPORTED_MODULE_0__["default"].func.scrollTo("#gunny_frame3_Ajs24", 10);
  });
});

/***/ }),

/***/ "./src/gunny/float_bottom/float_bottom.scss":
/*!**************************************************!*\
  !*** ./src/gunny/float_bottom/float_bottom.scss ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/gunny/float_left/float_left.html.twig":
/*!***************************************************!*\
  !*** ./src/gunny/float_left/float_left.html.twig ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "twig").twig,
    tokens = [{"type":"logic","token":{"type":"Twig.logic.type.spaceless","match":["spaceless"],"output":[{"type":"raw","value":"\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockId","expression":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":"gunny_float_left"},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockIdPostFix","expression":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":""},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\t<div id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"\" class=\"floatleft "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":" scrollFrame scaleMobile scaleDesktop desktop\" data-block-id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\n\t\t<div\n\t\t\tclass=\"floatleft__background\">\n\t\t\t"},{"type":"raw","value":"\n\t\t\t<span id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"-scrollwatch-pin\" class=\"scrollwatch-pin\"></span>\n\t\t</div>\n\t\t<div class=\"floatleft__content\">\n\t\t\t<ul class=\"left\">\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\" class=\"item1\">Giới Thiệu</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\" class=\"item2\">Giải Thưởng</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\" class=\"item3\">Thể Lệ</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#popup-content\" class=\"item4\" data-popup>Hướng Dẫn</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\" class=\"item5\">Bảng Xếp Hạng</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\" class=\"item6\">Tham Gia</a>\n\t\t\t\t</li>\n\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n"}]}}],
    template = twig({"id":"$resolved:4a11d7f301ea358c01e55f96ae0705bcefcdd414ef4eccf5c92605f5d689dcd760797192469378f3734b1edb57d2cb28464eb74823a658adc5ea675e8c84b07b:float_left.html.twig","data":[{"type":"logic","token":{"type":"Twig.logic.type.spaceless","match":["spaceless"],"output":[{"type":"raw","value":"\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockId","expression":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":"gunny_float_left"},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockIdPostFix","expression":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":""},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\t<div id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"\" class=\"floatleft "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":" scrollFrame scaleMobile scaleDesktop desktop\" data-block-id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\n\t\t<div\n\t\t\tclass=\"floatleft__background\">\n\t\t\t"},{"type":"raw","value":"\n\t\t\t<span id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"-scrollwatch-pin\" class=\"scrollwatch-pin\"></span>\n\t\t</div>\n\t\t<div class=\"floatleft__content\">\n\t\t\t<ul class=\"left\">\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\" class=\"item1\">Giới Thiệu</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\" class=\"item2\">Giải Thưởng</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\" class=\"item3\">Thể Lệ</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#popup-content\" class=\"item4\" data-popup>Hướng Dẫn</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\" class=\"item5\">Bảng Xếp Hạng</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\" class=\"item6\">Tham Gia</a>\n\t\t\t\t</li>\n\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n"}]}}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/gunny/float_left/float_left.js":
/*!********************************************!*\
  !*** ./src/gunny/float_left/float_left.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_js_scrollFrame_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../setup/js/_scrollFrame.2 */ "./src/setup/js/_scrollFrame.2.js");

$(document).on("gunny_float_left rendered", {}, function (event, uniqueId) {
  const $this = $("#" + uniqueId);
  $this.find(".item1").on("click", function (event) {
    _setup_js_scrollFrame_2__WEBPACK_IMPORTED_MODULE_0__["default"].func.scrollTo("#gunny_frame1_EwBx8", 0);
  });
  $this.find(".item5").on("click", function (event) {
    _setup_js_scrollFrame_2__WEBPACK_IMPORTED_MODULE_0__["default"].func.scrollTo("#gunny_frame2_ASesx", 10);
  });
  $this.find(".item6").on("click", function (event) {
    _setup_js_scrollFrame_2__WEBPACK_IMPORTED_MODULE_0__["default"].func.scrollTo("#gunny_frame3_Ajs24", 10);
  });
});

/***/ }),

/***/ "./src/gunny/float_left/float_left.scss":
/*!**********************************************!*\
  !*** ./src/gunny/float_left/float_left.scss ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/gunny/frame1/frame1.html.twig":
/*!*******************************************!*\
  !*** ./src/gunny/frame1/frame1.html.twig ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "twig").twig,
    tokens = [{"type":"logic","token":{"type":"Twig.logic.type.spaceless","match":["spaceless"],"output":[{"type":"raw","value":"\r\n\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockId","expression":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":"gunny_frame1"},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\r\n\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockIdPostFix","expression":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":""},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\r\n\t<section id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"\" class=\"section section--"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":" "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":" scrollFrame\" data-block-id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\r\n\t\t<div\r\n\t\t\tclass=\"section__background\">\r\n\t\t\t"},{"type":"raw","value":"\r\n\t\t\t<img data-src=\"gunny/frame1/images/bg.jpg\" alt=\"\" class=\"lazyload desktop\">\r\n\t\t\t<img data-src=\"gunny/frame1/images/bg-mobile.jpg\" alt=\"\" class=\"lazyload mobile\">\r\n\t\t\t<span id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"-scrollwatch-pin\" class=\"scrollwatch-pin\"></span>\r\n\t\t</div>\r\n\t\t<div class=\"section__content\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"inner inner--"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\r\n\t\t\t\t"},{"type":"raw","value":"\r\n\t\t\t\t<a href=\"#\" class=\"gunny-logo\">Logo</a>\r\n\t\t\t\t<img data-src=\"gunny/frame1/images/title.png\" alt=\"\" class=\"lazyload title\">\r\n\t\t\t\t<img data-src=\"gunny/frame1/images/character.png\" alt=\"\" class=\"lazyload character\">\r\n\t\t\t\t<div class=\"prize1 prize animate__animated animate__shakeY animate__infinite\"></div>\r\n\t\t\t\t<div class=\"prize2 prize animate__animated animate__shakeY animate__infinite animate__delay-1s\"></div>\r\n\t\t\t\t<div class=\"prize3 prize animate__animated animate__shakeY animate__infinite animate__delay-3s\"></div>\r\n\t\t\t\t<div class=\"prize4 prize animate__animated animate__shakeY animate__infinite animate__delay-1s\"></div>\r\n\t\t\t\t<div class=\"prize5 prize animate__animated animate__shakeY animate__infinite animate__delay-3s\"></div>\r\n\t\t\t\t<div class=\"prize6 prize animate__animated animate__shakeY animate__infinite animate__delay-5s\"></div>\r\n\t\t\t\t<div class=\"prize7 prize animate__animated animate__shakeY animate__infinite\"></div>\r\n\t\t\t\t<a href=\"#popup-confirm\" class=\"qua-sinh-nhat animate__animated animate__pulse animate__infinite\" data-popup>Quà Sinh Nhật</a>\r\n\t\t\t\t<a href=\"#\" class=\"choi-ngay desktop animate__animated animate__pulse animate__infinite\">Chơi Ngay</a>\r\n\t\t\t\t<nav class=\"menu\">\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li class=\"menu-item\" data-active>Trang Chủ</li>\r\n\t\t\t\t\t\t<li class=\"menu-item\">Cộng Đồng</li>\r\n\t\t\t\t\t\t<li class=\"menu-item\">Puffin</li>\r\n\t\t\t\t\t\t<li class=\"menu-item\">Nạp Xu</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</nav>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n"}]}},{"type":"raw","value":"\r\n"}],
    template = twig({"id":"$resolved:e8c7ddcee607c0b0ead11fc59de6c69148298efc52508ff7e553c9b260390e611eab438411d9766a8cdf3d6c30439b2fa4b5daa1266639040c0a2ee4904bad76:frame1.html.twig","data":[{"type":"logic","token":{"type":"Twig.logic.type.spaceless","match":["spaceless"],"output":[{"type":"raw","value":"\r\n\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockId","expression":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":"gunny_frame1"},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\r\n\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockIdPostFix","expression":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":""},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\r\n\t<section id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"\" class=\"section section--"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":" "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":" scrollFrame\" data-block-id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\r\n\t\t<div\r\n\t\t\tclass=\"section__background\">\r\n\t\t\t"},{"type":"raw","value":"\r\n\t\t\t<img data-src=\"gunny/frame1/images/bg.jpg\" alt=\"\" class=\"lazyload desktop\">\r\n\t\t\t<img data-src=\"gunny/frame1/images/bg-mobile.jpg\" alt=\"\" class=\"lazyload mobile\">\r\n\t\t\t<span id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"-scrollwatch-pin\" class=\"scrollwatch-pin\"></span>\r\n\t\t</div>\r\n\t\t<div class=\"section__content\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"inner inner--"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\r\n\t\t\t\t"},{"type":"raw","value":"\r\n\t\t\t\t<a href=\"#\" class=\"gunny-logo\">Logo</a>\r\n\t\t\t\t<img data-src=\"gunny/frame1/images/title.png\" alt=\"\" class=\"lazyload title\">\r\n\t\t\t\t<img data-src=\"gunny/frame1/images/character.png\" alt=\"\" class=\"lazyload character\">\r\n\t\t\t\t<div class=\"prize1 prize animate__animated animate__shakeY animate__infinite\"></div>\r\n\t\t\t\t<div class=\"prize2 prize animate__animated animate__shakeY animate__infinite animate__delay-1s\"></div>\r\n\t\t\t\t<div class=\"prize3 prize animate__animated animate__shakeY animate__infinite animate__delay-3s\"></div>\r\n\t\t\t\t<div class=\"prize4 prize animate__animated animate__shakeY animate__infinite animate__delay-1s\"></div>\r\n\t\t\t\t<div class=\"prize5 prize animate__animated animate__shakeY animate__infinite animate__delay-3s\"></div>\r\n\t\t\t\t<div class=\"prize6 prize animate__animated animate__shakeY animate__infinite animate__delay-5s\"></div>\r\n\t\t\t\t<div class=\"prize7 prize animate__animated animate__shakeY animate__infinite\"></div>\r\n\t\t\t\t<a href=\"#popup-confirm\" class=\"qua-sinh-nhat animate__animated animate__pulse animate__infinite\" data-popup>Quà Sinh Nhật</a>\r\n\t\t\t\t<a href=\"#\" class=\"choi-ngay desktop animate__animated animate__pulse animate__infinite\">Chơi Ngay</a>\r\n\t\t\t\t<nav class=\"menu\">\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li class=\"menu-item\" data-active>Trang Chủ</li>\r\n\t\t\t\t\t\t<li class=\"menu-item\">Cộng Đồng</li>\r\n\t\t\t\t\t\t<li class=\"menu-item\">Puffin</li>\r\n\t\t\t\t\t\t<li class=\"menu-item\">Nạp Xu</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</nav>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n"}]}},{"type":"raw","value":"\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/gunny/frame1/frame1.js":
/*!************************************!*\
  !*** ./src/gunny/frame1/frame1.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).on("gunny_frame1 rendered", {}, function (event, uniqueId) {
  console.log('frame1');
  $('.qua-sinh-nhat').on('click', function () {
    $("#popup-confirm").addClass('active');
  });
});

/***/ }),

/***/ "./src/gunny/frame1/frame1.scss":
/*!**************************************!*\
  !*** ./src/gunny/frame1/frame1.scss ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/gunny/frame2/frame2.html.twig":
/*!*******************************************!*\
  !*** ./src/gunny/frame2/frame2.html.twig ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "twig").twig,
    tokens = [{"type":"logic","token":{"type":"Twig.logic.type.spaceless","match":["spaceless"],"output":[{"type":"raw","value":"\r\n\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockId","expression":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":"gunny_frame2"},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\r\n\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockIdPostFix","expression":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":""},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\r\n\t<section id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"\" class=\"section section--"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":" "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":" scrollFrame\" data-block-id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\r\n\t\t<div\r\n\t\t\tclass=\"section__background\">\r\n\t\t\t"},{"type":"raw","value":"\r\n\t\t\t<img data-src=\"gunny/frame2/images/bg.jpg\" alt=\"\" class=\"lazyload desktop\">\r\n\t\t\t<img data-src=\"gunny/frame2/images/bg-mobile.jpg\" alt=\"\" class=\"lazyload mobile\">\r\n\t\t\t<span id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"-scrollwatch-pin\" class=\"scrollwatch-pin\"></span>\r\n\t\t</div>\r\n\t\t<div class=\"section__content\">\r\n\t\t\t<div class=\"inner inner--"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\r\n\t\t\t\t<img\r\n\t\t\t\tsrc=\"gunny/frame2/images/title.png\" alt=\"\" class=\"title\">\r\n\t\t\t\t"},{"type":"raw","value":"\r\n\t\t\t\t<div class=\"ranking-top-container\">\r\n\t\t\t\t\t<div id=\"rank2-scrollWatch\" class=\"ranking-top ranking-2nd\">\r\n\t\t\t\t\t\t<div class=\"crown\"></div>\r\n\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t<img data-src=\"gunny/frame2/images/ava-3rd.jpg\" alt=\"\" class=\"lazyload\">\r\n\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"rank1-scrollWatch\" class=\"ranking-top ranking-1st\">\r\n\t\t\t\t\t\t<div class=\"crown\"></div>\r\n\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t<img data-src=\"gunny/frame2/images/ava-1st.jpg\" alt=\"\" class=\"lazyload\">\r\n\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"rank3-scrollWatch\" class=\"ranking-top ranking-3rd\">\r\n\t\t\t\t\t\t<div class=\"crown\"></div>\r\n\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t<img data-src=\"gunny/frame2/images/ava-2nd.jpg\" alt=\"\" class=\"lazyload\">\r\n\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ranking-swiper-container\">\r\n\t\t\t\t\t<div id=\"rankingSwiper\" class=\"swiper ranking-swiper\">\r\n\t\t\t\t\t\t<div class=\"swiper-wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<button class=\"swiper-button-prev swiper-button-prev--rankingSwiper\"></button>\r\n\t\t\t\t\t<button class=\"swiper-button-next swiper-button-next--rankingSwiper\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<img data-src=\"gunny/frame2/images/character-left.png\" alt=\"\" class=\"lazyload character-left\">\r\n\t\t\t\t<img data-src=\"gunny/frame2/images/character-right.png\" alt=\"\" class=\"lazyload character-right\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n"}]}},{"type":"raw","value":"\r\n"}],
    template = twig({"id":"$resolved:60d2801bd1d500760c84bfcfafdf75bec8726ad2e1fefed30e77d21c0c46d734af2bfe990bd0868a841eff6ad642dc6b6b0c313cc91d169fae3746f4030ef3f1:frame2.html.twig","data":[{"type":"logic","token":{"type":"Twig.logic.type.spaceless","match":["spaceless"],"output":[{"type":"raw","value":"\r\n\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockId","expression":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":"gunny_frame2"},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\r\n\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockIdPostFix","expression":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":""},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\r\n\t<section id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"\" class=\"section section--"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":" "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":" scrollFrame\" data-block-id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\r\n\t\t<div\r\n\t\t\tclass=\"section__background\">\r\n\t\t\t"},{"type":"raw","value":"\r\n\t\t\t<img data-src=\"gunny/frame2/images/bg.jpg\" alt=\"\" class=\"lazyload desktop\">\r\n\t\t\t<img data-src=\"gunny/frame2/images/bg-mobile.jpg\" alt=\"\" class=\"lazyload mobile\">\r\n\t\t\t<span id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"-scrollwatch-pin\" class=\"scrollwatch-pin\"></span>\r\n\t\t</div>\r\n\t\t<div class=\"section__content\">\r\n\t\t\t<div class=\"inner inner--"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\r\n\t\t\t\t<img\r\n\t\t\t\tsrc=\"gunny/frame2/images/title.png\" alt=\"\" class=\"title\">\r\n\t\t\t\t"},{"type":"raw","value":"\r\n\t\t\t\t<div class=\"ranking-top-container\">\r\n\t\t\t\t\t<div id=\"rank2-scrollWatch\" class=\"ranking-top ranking-2nd\">\r\n\t\t\t\t\t\t<div class=\"crown\"></div>\r\n\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t<img data-src=\"gunny/frame2/images/ava-3rd.jpg\" alt=\"\" class=\"lazyload\">\r\n\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"rank1-scrollWatch\" class=\"ranking-top ranking-1st\">\r\n\t\t\t\t\t\t<div class=\"crown\"></div>\r\n\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t<img data-src=\"gunny/frame2/images/ava-1st.jpg\" alt=\"\" class=\"lazyload\">\r\n\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"rank3-scrollWatch\" class=\"ranking-top ranking-3rd\">\r\n\t\t\t\t\t\t<div class=\"crown\"></div>\r\n\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t<img data-src=\"gunny/frame2/images/ava-2nd.jpg\" alt=\"\" class=\"lazyload\">\r\n\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ranking-swiper-container\">\r\n\t\t\t\t\t<div id=\"rankingSwiper\" class=\"swiper ranking-swiper\">\r\n\t\t\t\t\t\t<div class=\"swiper-wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"ranking-nor\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ranking-title\">Username123</div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"gunny/frame2/images/ava-nor.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t\t\t\t<div>Máy Chủ:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Gunny 12</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>Số lần đã săn:\r\n\t\t\t\t\t\t\t\t\t\t\t<span>1200</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<button class=\"swiper-button-prev swiper-button-prev--rankingSwiper\"></button>\r\n\t\t\t\t\t<button class=\"swiper-button-next swiper-button-next--rankingSwiper\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<img data-src=\"gunny/frame2/images/character-left.png\" alt=\"\" class=\"lazyload character-left\">\r\n\t\t\t\t<img data-src=\"gunny/frame2/images/character-right.png\" alt=\"\" class=\"lazyload character-right\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n"}]}},{"type":"raw","value":"\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/gunny/frame2/frame2.js":
/*!************************************!*\
  !*** ./src/gunny/frame2/frame2.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_js_scrollWatch_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../setup/js/_scrollWatch.2 */ "./src/setup/js/_scrollWatch.2.js");

$(document).on("gunny_frame2 rendered", {}, function (event, uniqueId) {
  const $this = $(uniqueId);
  const rankingSwiper = $("#rankingSwiper").initSwiper({
    swiperOptions: {
      slidesPerView: 3,
      navigation: {
        prevEl: ".swiper-button-prev--rankingSwiper",
        nextEl: ".swiper-button-next--rankingSwiper"
      },
      breakpoints: {
        769: {
          slidesPerView: 4
        }
      }
    }
  });
  $(".ranking-top").each(function (index, el) {
    const elementId = "#" + $(el).attr("id");
    _setup_js_scrollWatch_2__WEBPACK_IMPORTED_MODULE_0__["default"].init({
      el: elementId,
      options: {
        watch: elementId,
        scrollThrottle: 100,
        onElementInView: function (e) {
          $(el).addClass("animate__animated");
          $(el).addClass("animate__fadeInUp");
          setTimeout(() => {
            $(el).removeClass("animate__animated");
            $(el).removeClass("animate__fadeInUp");
          }, 3000);
        },
        onElementOutOfView: function (e) {
          $(el).removeClass("animate__animated");
          $(el).removeClass("animate__fadeInUp");
        }
      }
    });
  });
});

/***/ }),

/***/ "./src/gunny/frame2/frame2.scss":
/*!**************************************!*\
  !*** ./src/gunny/frame2/frame2.scss ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/gunny/frame3/frame3.html.twig":
/*!*******************************************!*\
  !*** ./src/gunny/frame3/frame3.html.twig ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "twig").twig,
    tokens = [{"type":"logic","token":{"type":"Twig.logic.type.spaceless","match":["spaceless"],"output":[{"type":"raw","value":"\r\n\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockId","expression":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":"gunny_frame3"},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\r\n\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockIdPostFix","expression":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":""},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\r\n\t<section id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"\" class=\"section section--"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":" "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":" scrollFrame\" data-block-id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\r\n\t\t<div\r\n\t\t\tclass=\"section__background\">\r\n\t\t\t"},{"type":"raw","value":"\r\n\t\t\t<img data-src=\"gunny/frame3/images/bg.jpg\" alt=\"\" class=\"lazyload desktop\">\r\n\t\t\t<img data-src=\"gunny/frame3/images/bg-mobile.jpg\" alt=\"\" class=\"lazyload mobile\">\r\n\t\t\t<span id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"-scrollwatch-pin\" class=\"scrollwatch-pin\"></span>\r\n\t\t</div>\r\n\t\t<div class=\"section__content\">\r\n\t\t\t<div class=\"inner inner--"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\r\n\t\t\t\t<img src=\"gunny/frame3/images/title.png\" alt=\"\" class=\"title\">\r\n\t\t\t\t<div class=\"content-container\">\r\n\t\t\t\t\t<div class=\"mq5\" id=\"mq5-scrollWatch\">\r\n\t\t\t\t\t\t<div class=\"top-button-container\">\r\n\t\t\t\t\t\t\t<a href=\"#popup-signin\" class=\"signin-btn\">Đăng Nhập</a>\r\n\t\t\t\t\t\t\t<button>Lịch Sử</button>\r\n\t\t\t\t\t\t\t<button>Nhận Lượt</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t<div>Xin chào:\r\n\t\t\t\t\t\t\t\t<span>Ngô Bình Phương Phi Vũ</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tBạn có:\r\n\t\t\t\t\t\t\t\t<span class=\"spoint\">100</span>\r\n\t\t\t\t\t\t\t\tlượt quay\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"effect\" id=\"effect\">\r\n\t\t\t\t\t\t\t<div id=\"item-1\" class=\"effect__item key-A\">item</div>\r\n\t\t\t\t\t\t\t<div id=\"item-2\" class=\"effect__item key-B\">item</div>\r\n\t\t\t\t\t\t\t<div id=\"item-3\" class=\"effect__item key-C\">item</div>\r\n\t\t\t\t\t\t\t<div id=\"item-8\" class=\"effect__item key-H\">item</div>\r\n\t\t\t\t\t\t\t<div class=\"spin-button-container\">\r\n\t\t\t\t\t\t\t\t<button class=\"pm__rut rut-1\" data-value=\"1\">Quay X1</button>\r\n\t\t\t\t\t\t\t\t<button class=\"pm__rut\" data-value=\"10\">Quay X10</button>\r\n\t\t\t\t\t\t\t\t<button>Đổi Quà</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"item-4\" class=\"effect__item key-D\">item</div>\r\n\t\t\t\t\t\t\t<div id=\"item-7\" class=\"effect__item key-G\">item</div>\r\n\t\t\t\t\t\t\t<div id=\"item-6\" class=\"effect__item key-F\">item</div>\r\n\t\t\t\t\t\t\t<div id=\"item-5\" class=\"effect__item key-E\">item</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"danh-sach\" id=\"danhSach-scrollWatch\">\r\n\t\t\t\t\t\t<h2 class=\"heading\">THỢ SĂN MAY MẮN</h2>\r\n\t\t\t\t\t\t<div id=\"danhSachSwiper\" class=\"swiper\">\r\n\t\t\t\t\t\t\t<div class=\"swiper-wrapper\">\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-top\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"username\">Nam Vui Vẻ</span>\r\n\t\t\t\t\t\t\t\t\t\tđã trúng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-bottom\">LEGEND-Phi Tiêu Băng Giá</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-top\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"username\">Nam Vui Vẻ</span>\r\n\t\t\t\t\t\t\t\t\t\tđã trúng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-bottom\">LEGEND-Phi Tiêu Băng Giá</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-top\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"username\">Nam Vui Vẻ</span>\r\n\t\t\t\t\t\t\t\t\t\tđã trúng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-bottom\">LEGEND-Phi Tiêu Băng Giá</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-top\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"username\">Nam Vui Vẻ</span>\r\n\t\t\t\t\t\t\t\t\t\tđã trúng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-bottom\">LEGEND-Phi Tiêu Băng Giá</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-top\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"username\">Nam Vui Vẻ</span>\r\n\t\t\t\t\t\t\t\t\t\tđã trúng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-bottom\">LEGEND-Phi Tiêu Băng Giá</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-top\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"username\">Nam Vui Vẻ</span>\r\n\t\t\t\t\t\t\t\t\t\tđã trúng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-bottom\">LEGEND-Phi Tiêu Băng Giá</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-top\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"username\">Nam Vui Vẻ</span>\r\n\t\t\t\t\t\t\t\t\t\tđã trúng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-bottom\">LEGEND-Phi Tiêu Băng Giá</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-top\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"username\">Nam Vui Vẻ</span>\r\n\t\t\t\t\t\t\t\t\t\tđã trúng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-bottom\">LEGEND-Phi Tiêu Băng Giá</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-top\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"username\">Nam Vui Vẻ</span>\r\n\t\t\t\t\t\t\t\t\t\tđã trúng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-bottom\">LEGEND-Phi Tiêu Băng Giá</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"danhSachScrollbar\" class\"swiper-scrollbar swiper-scrollbar-drag\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t"},{"type":"raw","value":"\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n"}]}},{"type":"raw","value":"\r\n"}],
    template = twig({"id":"$resolved:b35a49f2b6b2c1286500535b2e4a7968a84c10e73cad955e98fb71611a9d0d1f59cde3833d58b8c1cfa5867ec086643d286d10187fe453059fce26b537f964a3:frame3.html.twig","data":[{"type":"logic","token":{"type":"Twig.logic.type.spaceless","match":["spaceless"],"output":[{"type":"raw","value":"\r\n\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockId","expression":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":"gunny_frame3"},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\r\n\t"},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"blockIdPostFix","expression":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":""},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\r\n\t<section id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"\" class=\"section section--"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":" "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":" scrollFrame\" data-block-id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\r\n\t\t<div\r\n\t\t\tclass=\"section__background\">\r\n\t\t\t"},{"type":"raw","value":"\r\n\t\t\t<img data-src=\"gunny/frame3/images/bg.jpg\" alt=\"\" class=\"lazyload desktop\">\r\n\t\t\t<img data-src=\"gunny/frame3/images/bg-mobile.jpg\" alt=\"\" class=\"lazyload mobile\">\r\n\t\t\t<span id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"-scrollwatch-pin\" class=\"scrollwatch-pin\"></span>\r\n\t\t</div>\r\n\t\t<div class=\"section__content\">\r\n\t\t\t<div class=\"inner inner--"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\r\n\t\t\t\t<img src=\"gunny/frame3/images/title.png\" alt=\"\" class=\"title\">\r\n\t\t\t\t<div class=\"content-container\">\r\n\t\t\t\t\t<div class=\"mq5\" id=\"mq5-scrollWatch\">\r\n\t\t\t\t\t\t<div class=\"top-button-container\">\r\n\t\t\t\t\t\t\t<a href=\"#popup-signin\" class=\"signin-btn\">Đăng Nhập</a>\r\n\t\t\t\t\t\t\t<button>Lịch Sử</button>\r\n\t\t\t\t\t\t\t<button>Nhận Lượt</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"text-container\">\r\n\t\t\t\t\t\t\t<div>Xin chào:\r\n\t\t\t\t\t\t\t\t<span>Ngô Bình Phương Phi Vũ</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tBạn có:\r\n\t\t\t\t\t\t\t\t<span class=\"spoint\">100</span>\r\n\t\t\t\t\t\t\t\tlượt quay\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"effect\" id=\"effect\">\r\n\t\t\t\t\t\t\t<div id=\"item-1\" class=\"effect__item key-A\">item</div>\r\n\t\t\t\t\t\t\t<div id=\"item-2\" class=\"effect__item key-B\">item</div>\r\n\t\t\t\t\t\t\t<div id=\"item-3\" class=\"effect__item key-C\">item</div>\r\n\t\t\t\t\t\t\t<div id=\"item-8\" class=\"effect__item key-H\">item</div>\r\n\t\t\t\t\t\t\t<div class=\"spin-button-container\">\r\n\t\t\t\t\t\t\t\t<button class=\"pm__rut rut-1\" data-value=\"1\">Quay X1</button>\r\n\t\t\t\t\t\t\t\t<button class=\"pm__rut\" data-value=\"10\">Quay X10</button>\r\n\t\t\t\t\t\t\t\t<button>Đổi Quà</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"item-4\" class=\"effect__item key-D\">item</div>\r\n\t\t\t\t\t\t\t<div id=\"item-7\" class=\"effect__item key-G\">item</div>\r\n\t\t\t\t\t\t\t<div id=\"item-6\" class=\"effect__item key-F\">item</div>\r\n\t\t\t\t\t\t\t<div id=\"item-5\" class=\"effect__item key-E\">item</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"danh-sach\" id=\"danhSach-scrollWatch\">\r\n\t\t\t\t\t\t<h2 class=\"heading\">THỢ SĂN MAY MẮN</h2>\r\n\t\t\t\t\t\t<div id=\"danhSachSwiper\" class=\"swiper\">\r\n\t\t\t\t\t\t\t<div class=\"swiper-wrapper\">\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-top\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"username\">Nam Vui Vẻ</span>\r\n\t\t\t\t\t\t\t\t\t\tđã trúng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-bottom\">LEGEND-Phi Tiêu Băng Giá</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-top\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"username\">Nam Vui Vẻ</span>\r\n\t\t\t\t\t\t\t\t\t\tđã trúng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-bottom\">LEGEND-Phi Tiêu Băng Giá</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-top\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"username\">Nam Vui Vẻ</span>\r\n\t\t\t\t\t\t\t\t\t\tđã trúng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-bottom\">LEGEND-Phi Tiêu Băng Giá</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-top\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"username\">Nam Vui Vẻ</span>\r\n\t\t\t\t\t\t\t\t\t\tđã trúng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-bottom\">LEGEND-Phi Tiêu Băng Giá</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-top\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"username\">Nam Vui Vẻ</span>\r\n\t\t\t\t\t\t\t\t\t\tđã trúng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-bottom\">LEGEND-Phi Tiêu Băng Giá</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-top\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"username\">Nam Vui Vẻ</span>\r\n\t\t\t\t\t\t\t\t\t\tđã trúng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-bottom\">LEGEND-Phi Tiêu Băng Giá</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-top\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"username\">Nam Vui Vẻ</span>\r\n\t\t\t\t\t\t\t\t\t\tđã trúng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-bottom\">LEGEND-Phi Tiêu Băng Giá</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-top\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"username\">Nam Vui Vẻ</span>\r\n\t\t\t\t\t\t\t\t\t\tđã trúng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-bottom\">LEGEND-Phi Tiêu Băng Giá</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-top\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"username\">Nam Vui Vẻ</span>\r\n\t\t\t\t\t\t\t\t\t\tđã trúng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-bottom\">LEGEND-Phi Tiêu Băng Giá</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"danhSachScrollbar\" class\"swiper-scrollbar swiper-scrollbar-drag\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t"},{"type":"raw","value":"\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n"}]}},{"type":"raw","value":"\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/gunny/frame3/frame3.js":
/*!************************************!*\
  !*** ./src/gunny/frame3/frame3.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_js_promotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../setup/js/_promotion */ "./src/setup/js/_promotion.js");
/* harmony import */ var _setup_js_scrollWatch_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../setup/js/_scrollWatch.2 */ "./src/setup/js/_scrollWatch.2.js");


let prodTemplate = {
  debug: true,
  directory: "assets/popup/images/reward",
  item: {
    A: "1",
    B: "2",
    C: "3",
    D: "4",
    E: "5",
    F: "6",
    G: "7",
    H: "8",
    length: 9,
    type: "png"
  },
  names: ["Nguyệt Hạ Viên Vũ", "Hoa Ngữ Tinh Nương", "Đế Thính", "Vĩnh Sinh Lệnh x50", "Long Thủ Hồn Ngọc", "Quà Chọn Cẩm Nang-Kim", "Tinh Phách Linh Thạch x300", "Lì Xì Bất Ngờ x10"]
};
const randomInRange = (start, end) => {
  return Math.floor(Math.random() * (end - start + 1) + start);
};
$(document).on("gunny_frame3 rendered", {}, function (event, uniqueId) {
  const $this = $("#" + uniqueId);
  const items = [1, 2, 3, 4, 5, 6, 7, 8].map(index => $(`#effect .effect__item#item-${index}`).eq(0));
  Object(_setup_js_promotion__WEBPACK_IMPORTED_MODULE_0__["dndPromotion"])({
    debug: true,
    animBefore: function () {},
    animWait: function () {},
    wait: 0,
    animResult: function (listPrize) {
      if (typeof LuckyDrawExchangeModule !== "undefined") {
        LuckyDrawExchangeModule.fetchViewData();
      }
      const displayPrize = listPrize[0];
      console.log(displayPrize.characterImg, displayPrize.indexImg);
      const test = ["A", "B", "C", "D", "E", "F", "G", "H"];
      let innerHTML = "";
      for (let item of listPrize) {
        innerHTML += `<div class="prize prize-${item.indexImg}"></div>`;
      }
      $("#popup-congrats .prize-container").html(innerHTML);
      if (listPrize.length > 1) {
        $("#popup-congrats .prize-container").attr("multiple", "");
      } else {
        $("#popup-congrats .prize-container").removeAttr("multiple");
      }
      setTimeout(function () {
        $("#effect").removeClass("animating");
        var characterName = displayPrize.characterImg;
        // var characterName = test[Math.floor(Math.random() * test.length)];
        var listItem = $(`.key-${characterName}`);
        var itemIndex = listItem.length > 1 ? listItem[randomInRange(0, 1)].id.slice(5) : listItem[0].id.slice(5);
        var prizeIndex = itemIndex;
        var order = -1;
        var rounds = 4;
        let speed = 50;
        (function linearLoop(i) {
          setTimeout(function () {
            $("#effect .effect__item").removeClass("active");
            order++;
            if (items[order] === undefined) {
              order = 0;
            }
            var getitem = items[order].attr("id").slice(5);
            console.log(getitem);
            items[order].addClass("active");
            if (order == prizeIndex - 1) rounds--;
            if (rounds) linearLoop(i);else {
              setTimeout(function () {
                // recieve prize
                $("#popup-congrats").addClass("active");
                items[order].addClass("active");
                console.log(`ban da trung item ${$("#effect .effect__item").eq(order).attr("id")}`);
              }, 600);
            }
          }, speed);
        })(99);
      }, 0);
    },
    callback: function () {}
  });
  const danhSachSwiper = $("#danhSachSwiper").initSwiper({
    swiperOptions: {
      direction: "vertical",
      slidesPerView: 7,
      scrollbar: {
        el: "#danhSachSwiper .swiper-scrollbar",
        draggable: true,
        dragSize: 4
      }
    }
  });

  // write code to check if user sign in or not later
  $this.find(".signin-btn").attr("data-popup", "");
  $this.find(".signin-btn").on("click", function (event) {
    if (typeof $(this).attr("data-popup") === "undefined" || $(this).attr("data-popup") === false) {
      $(this).html("Đăng Nhập");
      $(this).attr("data-popup", "");
      event.stopImmediatePropagation();
    }
  });
  const animNameMq5 = "animate__fadeInLeft";
  _setup_js_scrollWatch_2__WEBPACK_IMPORTED_MODULE_1__["default"].init({
    el: "#mq5-scrollWatch",
    options: {
      watch: "#mq5-scrollWatch",
      scrollThrottle: 300,
      onElementInView: function (e) {
        $("#mq5-scrollWatch").addClass("animate__animated");
        $("#mq5-scrollWatch").addClass(animNameMq5);
        setTimeout(() => {
          $("#mq5-scrollWatch").removeClass("animate__animated");
          $("#mq5-scrollWatch").removeClass(animNameMq5);
        }, 3000);
      },
      onElementOutOfView: function (e) {
        $("#mq5-scrollWatch").removeClass("animate__animated");
        $("#mq5-scrollWatch").removeClass(animNameMq5);
      }
    }
  });
  const animNameDanhSach = "animate__fadeInRight";
  _setup_js_scrollWatch_2__WEBPACK_IMPORTED_MODULE_1__["default"].init({
    el: "#danhSach-scrollWatch",
    options: {
      watch: "#danhSach-scrollWatch",
      scrollThrottle: 300,
      onElementInView: function (e) {
        $("#danhSach-scrollWatch").addClass("animate__animated");
        $("#danhSach-scrollWatch").addClass(animNameDanhSach);
        setTimeout(() => {
          $("#danhSach-scrollWatch").removeClass("animate__animated");
          $("#danhSach-scrollWatch").removeClass(animNameDanhSach);
        }, 3000);
      },
      onElementOutOfView: function (e) {
        $("#danhSach-scrollWatch").removeClass("animate__animated");
        $("#danhSach-scrollWatch").removeClass(animNameDanhSach);
      }
    }
  });
});

/***/ }),

/***/ "./src/gunny/frame3/frame3.scss":
/*!**************************************!*\
  !*** ./src/gunny/frame3/frame3.scss ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/gunny/popup/html/popup_confirm.html.twig":
/*!******************************************************!*\
  !*** ./src/gunny/popup/html/popup_confirm.html.twig ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "twig").twig,
    tokens = [{"type":"raw","value":"<div id=\"popup-confirm\" class=\"popup\" data-block-id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\n\t<div\n\t\tclass=\"popup__background\">\n\t\t"},{"type":"raw","value":"\n\t\t<span id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"-scrollwatch-pin\" class=\"scrollwatch-pin\"></span>\n\t</div>\n\t<div class=\"popup__content\">\n\t\t<div class=\"popup-container scaleDesktop scaleMobile\" data-desktop-origin=\"center center\" data-mobile-origin=\"center center\">\n\t\t\t<button class=\"close-btn\">Close</button>\n\t\t\t<div class=\"center\">\n\t\t\t\t<div class=\"text-wrap\">\n\t\t\t\t\t<div class=\"text\">Bạn có chắc đây là nhân vật bạn muốn</div>\n\t\t\t\t\t<div class=\"text\">tham gia sự kiện? Sau khi xác nhận sẽ không thể thay đổi</div>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"btn\">Xác Nhận</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"}],
    template = twig({"id":"$resolved:0a91bde4ce6aff306388effbfa10a5dd3cf9bc4bd7ef1020f4a91e909808d80acb21a852ce8b0cabc2eb704ebd27dd80d77eeede72d5935f71e78e5f19730553:popup_confirm.html.twig","data":[{"type":"raw","value":"<div id=\"popup-confirm\" class=\"popup\" data-block-id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\n\t<div\n\t\tclass=\"popup__background\">\n\t\t"},{"type":"raw","value":"\n\t\t<span id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"-scrollwatch-pin\" class=\"scrollwatch-pin\"></span>\n\t</div>\n\t<div class=\"popup__content\">\n\t\t<div class=\"popup-container scaleDesktop scaleMobile\" data-desktop-origin=\"center center\" data-mobile-origin=\"center center\">\n\t\t\t<button class=\"close-btn\">Close</button>\n\t\t\t<div class=\"center\">\n\t\t\t\t<div class=\"text-wrap\">\n\t\t\t\t\t<div class=\"text\">Bạn có chắc đây là nhân vật bạn muốn</div>\n\t\t\t\t\t<div class=\"text\">tham gia sự kiện? Sau khi xác nhận sẽ không thể thay đổi</div>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"btn\">Xác Nhận</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/gunny/popup/html/popup_congrats.html.twig":
/*!*******************************************************!*\
  !*** ./src/gunny/popup/html/popup_congrats.html.twig ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "twig").twig,
    tokens = [{"type":"raw","value":"<div id=\"popup-congrats\" class=\"popup\" data-block-id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\r\n\t<div\r\n\t\tclass=\"popup__background\">\r\n\t\t"},{"type":"raw","value":"\r\n\t\t<span id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"-scrollwatch-pin\" class=\"scrollwatch-pin\"></span>\r\n\t</div>\r\n\t<div class=\"popup__content\">\r\n\t\t<div class=\"popup-container scaleDesktop scaleMobile\" data-desktop-origin=\"center center\" data-mobile-origin=\"center center\">\r\n\t\t\t<button class=\"close-btn\">Close</button>\r\n\t\t\t<div class=\"center\">\r\n\t\t\t\t<div class=\"heading\">CHÚC MỪNG BẠN ĐÃ NHẬN ĐƯỢC</div>\r\n\t\t\t\t<div class=\"prize-container\"></div>\r\n\t\t\t\t<button class=\"btn\">ĐỒNG Ý</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:4a535b284b97dc470627f156f5c5120e245c602f2ee59769344ef279fc4a591ba61acd7f270904f33052934d4c0304879d5dd53b67ae4db8c9dfb7fce42899c5:popup_congrats.html.twig","data":[{"type":"raw","value":"<div id=\"popup-congrats\" class=\"popup\" data-block-id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\r\n\t<div\r\n\t\tclass=\"popup__background\">\r\n\t\t"},{"type":"raw","value":"\r\n\t\t<span id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"-scrollwatch-pin\" class=\"scrollwatch-pin\"></span>\r\n\t</div>\r\n\t<div class=\"popup__content\">\r\n\t\t<div class=\"popup-container scaleDesktop scaleMobile\" data-desktop-origin=\"center center\" data-mobile-origin=\"center center\">\r\n\t\t\t<button class=\"close-btn\">Close</button>\r\n\t\t\t<div class=\"center\">\r\n\t\t\t\t<div class=\"heading\">CHÚC MỪNG BẠN ĐÃ NHẬN ĐƯỢC</div>\r\n\t\t\t\t<div class=\"prize-container\"></div>\r\n\t\t\t\t<button class=\"btn\">ĐỒNG Ý</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/gunny/popup/html/popup_content.html.twig":
/*!******************************************************!*\
  !*** ./src/gunny/popup/html/popup_content.html.twig ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "twig").twig,
    tokens = [{"type":"raw","value":"<div id=\"popup-content\" class=\"popup\" data-block-id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\r\n\t<div\r\n\t\tclass=\"popup__background\">\r\n\t\t"},{"type":"raw","value":"\r\n\t\t<span id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"-scrollwatch-pin\" class=\"scrollwatch-pin\"></span>\r\n\t</div>\r\n\t<div class=\"popup__content\">\r\n\t\t<div class=\"popup-container scaleDesktop scaleMobile\" data-desktop-origin=\"center center\" data-mobile-origin=\"center center\">\r\n\t\t\t<button class=\"close-btn\">Close</button>\r\n\t\t\t<div class=\"center\">\r\n\t\t\t\tLorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sed modi quae tenetur laborum quas ut esse eius! Quas voluptatem quos delectus. Repellendus id, possimus officiis dolor nostrum fugit reprehenderit pariatur consequuntur sapiente maiores laborum nemo! Totam maiores autem incidunt. Modi rerum aspernatur consequatur, similique hic cupiditate sequi vel debitis voluptates soluta iure labore aliquam molestias a architecto incidunt laudantium cumque esse consectetur nihil sit! Sint aut quisquam molestias unde exercitationem iure odio. Aliquid quae voluptates hic nemo. Consequuntur molestias cupiditate harum ullam sit vitae! Quidem explicabo, magnam corporis vitae id nesciunt distinctio consectetur incidunt eos autem vel impedit laboriosam rem alias modi architecto. Earum consectetur officiis aut mollitia dicta animi harum cupiditate modi, quis dolor eos ipsam excepturi velit. Autem eaque corporis ex provident aliquid debitis deserunt accusantium, neque voluptatum necessitatibus nemo sint enim laborum perferendis? Distinctio consequuntur omnis quasi ducimus culpa neque porro libero! Culpa exercitationem animi quibusdam ullam delectus adipisci consequatur accusantium voluptatem? Nulla quaerat, facilis culpa doloribus ipsa ad quod nam porro ex quos voluptate aspernatur magni accusantium eos aliquam, fugit asperiores laborum! Accusantium impedit facilis, dicta, voluptatum ipsam velit ea hic mollitia maiores obcaecati ut esse nisi deserunt id. Qui, cupiditate obcaecati corrupti alias magni, et eum, molestiae corporis quaerat vitae totam illum libero minima sunt esse expedita recusandae beatae. Officia molestiae vero cum est recusandae, deleniti inventore, iusto, nesciunt earum delectus illum? Omnis dolorem repellat, consequatur recusandae veniam sint assumenda dolore, rerum, nihil voluptatem eveniet nulla iusto ab cupiditate fugiat. Impedit animi vero cupiditate ab enim molestias minus autem accusantium optio soluta sint porro eligendi commodi, ad vitae consequuntur adipisci? Libero cumque iste excepturi quod vero nesciunt totam voluptate est distinctio officia magni, dolores dignissimos a ipsum! Quasi, similique quis inventore nisi provident quas hic veritatis eius veniam sapiente modi voluptas, quos exercitationem. Expedita commodi eos iusto ratione ipsam earum, at impedit illo tenetur sunt aut consequuntur rem obcaecati, error harum non laborum cum laudantium odit ullam, omnis voluptates et minus. Tempore hic eveniet consequatur accusantium laboriosam tempora eligendi! Cupiditate eius similique dolorem dolor eos eligendi! Ipsa, blanditiis. Explicabo quia vero illo laboriosam aliquam quibusdam, voluptates obcaecati tempore nobis sint modi deserunt expedita impedit optio, nisi consectetur, numquam iusto placeat nihil ratione nostrum doloribus qui! Voluptatem sit iusto aut est voluptate dignissimos deleniti cupiditate, odit ducimus commodi dolorum consequatur magnam. Repellat praesentium voluptates ducimus facilis expedita totam eligendi amet id numquam ab, quam ullam explicabo libero accusantium cumque aperiam illum repudiandae. Cupiditate fugit id ad placeat non et ea porro officia cumque iure maxime dolorem saepe optio incidunt voluptatem at beatae ex quas culpa, corrupti delectus, consequuntur deserunt voluptas libero. Hic accusamus nihil nobis perspiciatis explicabo. Eos magni maxime dignissimos quam nobis nihil nostrum doloribus rerum animi in magnam molestiae officia earum blanditiis, repellat, recusandae laboriosam distinctio mollitia repellendus corporis obcaecati sequi. Omnis ad mollitia architecto sapiente facere tenetur quia autem impedit, provident, quasi praesentium officia velit ex cum sequi quidem debitis hic a repudiandae saepe ut ipsa quam. Omnis deserunt velit totam vero.\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:0722ddaf8ba9246cccfa293e1e896d289a66f2eadb196480868f11bafce8422c4b9045308e971db68cdc67915cccdacbfe5ab2140d6bdaef06dfedbc09df16da:popup_content.html.twig","data":[{"type":"raw","value":"<div id=\"popup-content\" class=\"popup\" data-block-id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\r\n\t<div\r\n\t\tclass=\"popup__background\">\r\n\t\t"},{"type":"raw","value":"\r\n\t\t<span id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"-scrollwatch-pin\" class=\"scrollwatch-pin\"></span>\r\n\t</div>\r\n\t<div class=\"popup__content\">\r\n\t\t<div class=\"popup-container scaleDesktop scaleMobile\" data-desktop-origin=\"center center\" data-mobile-origin=\"center center\">\r\n\t\t\t<button class=\"close-btn\">Close</button>\r\n\t\t\t<div class=\"center\">\r\n\t\t\t\tLorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sed modi quae tenetur laborum quas ut esse eius! Quas voluptatem quos delectus. Repellendus id, possimus officiis dolor nostrum fugit reprehenderit pariatur consequuntur sapiente maiores laborum nemo! Totam maiores autem incidunt. Modi rerum aspernatur consequatur, similique hic cupiditate sequi vel debitis voluptates soluta iure labore aliquam molestias a architecto incidunt laudantium cumque esse consectetur nihil sit! Sint aut quisquam molestias unde exercitationem iure odio. Aliquid quae voluptates hic nemo. Consequuntur molestias cupiditate harum ullam sit vitae! Quidem explicabo, magnam corporis vitae id nesciunt distinctio consectetur incidunt eos autem vel impedit laboriosam rem alias modi architecto. Earum consectetur officiis aut mollitia dicta animi harum cupiditate modi, quis dolor eos ipsam excepturi velit. Autem eaque corporis ex provident aliquid debitis deserunt accusantium, neque voluptatum necessitatibus nemo sint enim laborum perferendis? Distinctio consequuntur omnis quasi ducimus culpa neque porro libero! Culpa exercitationem animi quibusdam ullam delectus adipisci consequatur accusantium voluptatem? Nulla quaerat, facilis culpa doloribus ipsa ad quod nam porro ex quos voluptate aspernatur magni accusantium eos aliquam, fugit asperiores laborum! Accusantium impedit facilis, dicta, voluptatum ipsam velit ea hic mollitia maiores obcaecati ut esse nisi deserunt id. Qui, cupiditate obcaecati corrupti alias magni, et eum, molestiae corporis quaerat vitae totam illum libero minima sunt esse expedita recusandae beatae. Officia molestiae vero cum est recusandae, deleniti inventore, iusto, nesciunt earum delectus illum? Omnis dolorem repellat, consequatur recusandae veniam sint assumenda dolore, rerum, nihil voluptatem eveniet nulla iusto ab cupiditate fugiat. Impedit animi vero cupiditate ab enim molestias minus autem accusantium optio soluta sint porro eligendi commodi, ad vitae consequuntur adipisci? Libero cumque iste excepturi quod vero nesciunt totam voluptate est distinctio officia magni, dolores dignissimos a ipsum! Quasi, similique quis inventore nisi provident quas hic veritatis eius veniam sapiente modi voluptas, quos exercitationem. Expedita commodi eos iusto ratione ipsam earum, at impedit illo tenetur sunt aut consequuntur rem obcaecati, error harum non laborum cum laudantium odit ullam, omnis voluptates et minus. Tempore hic eveniet consequatur accusantium laboriosam tempora eligendi! Cupiditate eius similique dolorem dolor eos eligendi! Ipsa, blanditiis. Explicabo quia vero illo laboriosam aliquam quibusdam, voluptates obcaecati tempore nobis sint modi deserunt expedita impedit optio, nisi consectetur, numquam iusto placeat nihil ratione nostrum doloribus qui! Voluptatem sit iusto aut est voluptate dignissimos deleniti cupiditate, odit ducimus commodi dolorum consequatur magnam. Repellat praesentium voluptates ducimus facilis expedita totam eligendi amet id numquam ab, quam ullam explicabo libero accusantium cumque aperiam illum repudiandae. Cupiditate fugit id ad placeat non et ea porro officia cumque iure maxime dolorem saepe optio incidunt voluptatem at beatae ex quas culpa, corrupti delectus, consequuntur deserunt voluptas libero. Hic accusamus nihil nobis perspiciatis explicabo. Eos magni maxime dignissimos quam nobis nihil nostrum doloribus rerum animi in magnam molestiae officia earum blanditiis, repellat, recusandae laboriosam distinctio mollitia repellendus corporis obcaecati sequi. Omnis ad mollitia architecto sapiente facere tenetur quia autem impedit, provident, quasi praesentium officia velit ex cum sequi quidem debitis hic a repudiandae saepe ut ipsa quam. Omnis deserunt velit totam vero.\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/gunny/popup/html/popup_signin.html.twig":
/*!*****************************************************!*\
  !*** ./src/gunny/popup/html/popup_signin.html.twig ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "twig").twig,
    tokens = [{"type":"raw","value":"<div id=\"popup-signin\" class=\"popup\" data-block-id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\r\n\t<div\r\n\t\tclass=\"popup__background\">\r\n\t\t"},{"type":"raw","value":"\r\n\t\t<span id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"-scrollwatch-pin\" class=\"scrollwatch-pin\"></span>\r\n\t</div>\r\n\t<div class=\"popup__content\">\r\n\t\t<div class=\"popup-container scaleDesktop scaleMobile\" data-desktop-origin=\"center center\" data-mobile-origin=\"center center\">\r\n\t\t\t<button class=\"close-btn\">Close</button>\r\n\t\t\t<div class=\"center\">\r\n\t\t\t\t<form action=\"\">\r\n\t\t\t\t\t<div class=\"field\">\r\n\t\t\t\t\t\t<label for=\"\">Tên Đăng Nhập:</label>\r\n\t\t\t\t\t\t<input class=\"input\"/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"field\">\r\n\t\t\t\t\t\t<label for=\"\">Mật Khẩu:</label>\r\n\t\t\t\t\t\t<input class=\"input\" type=\"password\"/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"button-container\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"signin-btn\">Đăng Nhập</button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"clear-btn\">Nhập Lại</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t\t<div class=\"link-container\">\r\n\t\t\t\t\t<div>Bạn không có tài khoảng ZingID?\r\n\t\t\t\t\t\t<a href=\"#\" class=\"new-acc\">Tạo tài khoản mới</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<a href=\"#\" class=\"forget-pass\">Quên Mật Khẩu</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:6ff6c817d325f2a8e27129c404adb592429b8b718be62e84d14268561d8116e4f5a83290adeb4419a1ef174f689645a45fb9904bc6dfd171f76e8233bc56ae78:popup_signin.html.twig","data":[{"type":"raw","value":"<div id=\"popup-signin\" class=\"popup\" data-block-id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"raw","value":"\">\r\n\t<div\r\n\t\tclass=\"popup__background\">\r\n\t\t"},{"type":"raw","value":"\r\n\t\t<span id=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockId","match":["blockId"]}]},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"blockIdPostFix","match":["blockIdPostFix"]}]},{"type":"raw","value":"-scrollwatch-pin\" class=\"scrollwatch-pin\"></span>\r\n\t</div>\r\n\t<div class=\"popup__content\">\r\n\t\t<div class=\"popup-container scaleDesktop scaleMobile\" data-desktop-origin=\"center center\" data-mobile-origin=\"center center\">\r\n\t\t\t<button class=\"close-btn\">Close</button>\r\n\t\t\t<div class=\"center\">\r\n\t\t\t\t<form action=\"\">\r\n\t\t\t\t\t<div class=\"field\">\r\n\t\t\t\t\t\t<label for=\"\">Tên Đăng Nhập:</label>\r\n\t\t\t\t\t\t<input class=\"input\"/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"field\">\r\n\t\t\t\t\t\t<label for=\"\">Mật Khẩu:</label>\r\n\t\t\t\t\t\t<input class=\"input\" type=\"password\"/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"button-container\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"signin-btn\">Đăng Nhập</button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"clear-btn\">Nhập Lại</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t\t<div class=\"link-container\">\r\n\t\t\t\t\t<div>Bạn không có tài khoảng ZingID?\r\n\t\t\t\t\t\t<a href=\"#\" class=\"new-acc\">Tạo tài khoản mới</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<a href=\"#\" class=\"forget-pass\">Quên Mật Khẩu</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/gunny/popup/popup.js":
/*!**********************************!*\
  !*** ./src/gunny/popup/popup.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener("load", function (event) {
  $("#popup-signin .signin-btn").on("click", function (event) {
    $("#popup-signin").removeClass("active");
    $(".gunny_frame3 .signin-btn").removeAttr("data-popup");
    $(".gunny_frame3 .signin-btn").html("Đăng Xuất");
  });
  $("#popup-congrats .btn").on('click', function (event) {
    $("#popup-congrats").removeClass("active");
  });
});

/***/ }),

/***/ "./src/gunny/popup/popup.scss":
/*!************************************!*\
  !*** ./src/gunny/popup/popup.scss ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/prod/index.js":
/*!***************************!*\
  !*** ./src/prod/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/index.js */ "./src/prod/js/index.js");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ "./src/prod/scss/index.scss");



/***/ }),

/***/ "./src/prod/js/_admin.js":
/*!*******************************!*\
  !*** ./src/prod/js/_admin.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blockBundles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_blockBundles */ "./src/prod/js/_blockBundles.js");
/* harmony import */ var font_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! font-picker */ "./node_modules/font-picker/dist/FontPicker.es.js");


var admin = {
  init: function (options) {
    var defaults = {
      on: {
        update: function () {}
      }
    };
    var settings = $.extend(defaults, options);
    admin.initFont(options);
    return true;
  },
  initFont: function (options) {
    // console.log("A");

    var fontPickerOptions = {
      sort: "popularity",
      families: ["Roboto", "Roboto Condensed", "Roboto Flex", "Barlow", "Barlow Condensed", "Barlow Semi Condensed", "Montserrat", "Philosopher", "Noto Sans", "Sarabun", "Arsenal", "Faustina", "Bai Jamjuree", "Rowdies", "Be Vietnam Pro", "Nunito", "Signika", "Quicksand", "Titillium Web", "Oxygen", "Noto Sans TC"]
      // "scripts": ["Vietnamese"]
    };

    window.fontPickerPrimary = new font_picker__WEBPACK_IMPORTED_MODULE_1__["default"]("AIzaSyBxqeghm6vBR5BLIoXjQG4PCU_A6sGSNTw",
    // Google API key
    "Barlow",
    // Default font
    {
      ...fontPickerOptions,
      pickerId: "primary"
    });
    window.fontPickerSecondary = new font_picker__WEBPACK_IMPORTED_MODULE_1__["default"]("AIzaSyBxqeghm6vBR5BLIoXjQG4PCU_A6sGSNTw",
    // Google API key
    "Barlow",
    // Default font
    {
      ...fontPickerOptions,
      pickerId: "secondary"
    });
  },
  executeFunctions: function () {
    $("[data-block-id]").each(function () {
      var blockId = $(this).attr("data-block-id"),
        blockUniqueId = $(this).attr("id");
      // console.log(blockId, blockUniqueId);
      $(document).trigger(blockId, [blockUniqueId]);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (admin);

/***/ }),

/***/ "./src/prod/js/_blockBundles.js":
/*!**************************************!*\
  !*** ./src/prod/js/_blockBundles.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var blockBundles;

/*
interface blockBundles = {
			${collection_id}: {
				${group_id}: {
					${block_id}: {
						html: require(url),
						scss: require(url),
						js: require(url),
						dir: "${collection_id}/${group_id}/${group_id}"
					}
				}
			}
}
*/

try {
  blockBundles = {
    // insert bundle here
    collection: {
      frames: {
        frame1: {
          html: __webpack_require__(/*! ../../gunny/frame1/frame1.html.twig */ "./src/gunny/frame1/frame1.html.twig"),
          scss: __webpack_require__(/*! ../../gunny/frame1/frame1.scss */ "./src/gunny/frame1/frame1.scss"),
          js: __webpack_require__(/*! ../../gunny/frame1/frame1.js */ "./src/gunny/frame1/frame1.js"),
          dir: "../../gunny/frame1/frame1"
        },
        frame2: {
          html: __webpack_require__(/*! ../../gunny/frame2/frame2.html.twig */ "./src/gunny/frame2/frame2.html.twig"),
          scss: __webpack_require__(/*! ../../gunny/frame2/frame2.scss */ "./src/gunny/frame2/frame2.scss"),
          js: __webpack_require__(/*! ../../gunny/frame2/frame2.js */ "./src/gunny/frame2/frame2.js"),
          dir: "../../gunny/frame2/frame2"
        },
        frame3: {
          html: __webpack_require__(/*! ../../gunny/frame3/frame3.html.twig */ "./src/gunny/frame3/frame3.html.twig"),
          scss: __webpack_require__(/*! ../../gunny/frame3/frame3.scss */ "./src/gunny/frame3/frame3.scss"),
          js: __webpack_require__(/*! ../../gunny/frame3/frame3.js */ "./src/gunny/frame3/frame3.js"),
          dir: "../../gunny/frame3/frame3"
        }
      },
      floats: {
        float_left: {
          html: __webpack_require__(/*! ../../gunny/float_left/float_left.html.twig */ "./src/gunny/float_left/float_left.html.twig"),
          scss: __webpack_require__(/*! ../../gunny/float_left/float_left.scss */ "./src/gunny/float_left/float_left.scss"),
          js: __webpack_require__(/*! ../../gunny/float_left/float_left.js */ "./src/gunny/float_left/float_left.js"),
          dir: "../../gunny/float_left/float_left"
        },
        float_bottom: {
          html: __webpack_require__(/*! ../../gunny/float_bottom/float_bottom.html.twig */ "./src/gunny/float_bottom/float_bottom.html.twig"),
          scss: __webpack_require__(/*! ../../gunny/float_bottom/float_bottom.scss */ "./src/gunny/float_bottom/float_bottom.scss"),
          js: __webpack_require__(/*! ../../gunny/float_bottom/float_bottom.js */ "./src/gunny/float_bottom/float_bottom.js"),
          dir: "../../gunny/float_bottom/float_bottom"
        }
      },
      popup: {
        html: {
          confirm: __webpack_require__(/*! ../../gunny/popup/html/popup_confirm.html.twig */ "./src/gunny/popup/html/popup_confirm.html.twig"),
          congrats: __webpack_require__(/*! ../../gunny/popup/html/popup_congrats.html.twig */ "./src/gunny/popup/html/popup_congrats.html.twig"),
          content: __webpack_require__(/*! ../../gunny/popup/html/popup_content.html.twig */ "./src/gunny/popup/html/popup_content.html.twig"),
          signin: __webpack_require__(/*! ../../gunny/popup/html/popup_signin.html.twig */ "./src/gunny/popup/html/popup_signin.html.twig")
        },
        scss: __webpack_require__(/*! ../../gunny/popup/popup.scss */ "./src/gunny/popup/popup.scss"),
        js: __webpack_require__(/*! ../../gunny/popup/popup.js */ "./src/gunny/popup/popup.js"),
        dir: "../../gunny/popup/popup"
      }
    }
  };
} catch (error) {
  console.log(error);
}
/* harmony default export */ __webpack_exports__["default"] = (blockBundles);

/***/ }),

/***/ "./src/prod/js/index.js":
/*!******************************!*\
  !*** ./src/prod/js/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_admin */ "./src/prod/js/_admin.js");
/* harmony import */ var _setup_js_toggleClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../setup/js/_toggleClass */ "./src/setup/js/_toggleClass.js");
/* harmony import */ var _setup_js_toggleClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_setup_js_toggleClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _setup_js_scaleRoot_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../setup/js/_scaleRoot.2 */ "./src/setup/js/_scaleRoot.2.js");
/* harmony import */ var _setup_js_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../setup/js/_swiper */ "./src/setup/js/_swiper.js");
/* harmony import */ var _setup_js_universalLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../setup/js/_universalLink */ "./src/setup/js/_universalLink.js");
/* harmony import */ var _setup_js_universalLink__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_setup_js_universalLink__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _setup_js_scrollwatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../setup/js/_scrollwatch */ "./src/setup/js/_scrollwatch.js");
/* harmony import */ var _setup_js_scrollwatch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_setup_js_scrollwatch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _setup_js_scrollFrame_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../setup/js/_scrollFrame.2 */ "./src/setup/js/_scrollFrame.2.js");







// import "lazysizes";
// import "@fancyapps/fancybox";

window.addEventListener("load", function () {
  var url = new URL(window.location.href);
  var param_admin = url.searchParams.get("admin");
  _admin__WEBPACK_IMPORTED_MODULE_0__["default"].init();
  _admin__WEBPACK_IMPORTED_MODULE_0__["default"].executeFunctions();
  $("#wrapper").scalePlatform();
  $(window).on("resize", function () {
    $("#wrapper").scalePlatform();
  });
  commonLibs();
  $("[data-fancybox]").fancybox({
    caption: function (instance, item) {
      return $(this).find("figcaption").html();
    },
    beforShow: function (instance, item) {
      console.log($(this));
    }
  });

  // popup

  $("[data-popup]").on("click", function (e) {
    if (typeof $(this).attr("data-popup") === 'undefined' || $(this).attr("data-popup") === false) return;
    $($(this).attr("href")).addClass("active");
  });
  $(".popup .close-btn").on("click", function (e) {
    const parents = $(this).parentsUntil(".outer");
    parents.eq(parents.length - 1).removeClass("active");
  });
  _setup_js_scrollFrame_2__WEBPACK_IMPORTED_MODULE_6__["default"].func.getFrames();
});
var commonLibs = function () {
  $("#wrapper").scalePlatform();
  $(".onelink").each(function () {
    $(".onelink").universalLink();
  });
  $("#navBurger").each(function () {
    $("#navBurger").toggleClassname({
      toggle: [{
        el: $("#floattop"),
        className: "active"
      }, {
        el: $("#floatnav"),
        className: "active"
      }, {
        el: $("#navBurger"),
        className: "is-active"
      }, {
        el: $("#navBurger"),
        className: "active"
      }]
    });
  });
  $("#subwebBurger").each(function () {
    $("#subwebBurger").toggleClassname({
      toggle: [{
        el: $(".midbar__menu"),
        className: "active"
      }, {
        el: $("#subwebBurger"),
        className: "is-active"
      }]
    });
  });
  $("#asideRightToggle").each(function () {
    $(this).toggleClassname({
      toggle: [{
        el: $(".floatright__main"),
        className: "active"
      }, {
        el: $(".floatright .aside"),
        className: "active"
      }]
    });
  });
  $(".scrollTop").each(function () {
    $(this).on("click", function () {
      $("html, body").animate({
        scrollTop: 0
      }, 400);
    });
  });

  // if ($("[data-lightbox]").length > 0) {
  //     $("[data-lightbox]").each(function () {
  //         $(this).lightBox({
  //             objLightBox: $(this).attr('href'),
  //             type: $(this).data('lightbox-type')
  //         });
  //     });
  // }
};

/***/ }),

/***/ "./src/prod/scss/index.scss":
/*!**********************************!*\
  !*** ./src/prod/scss/index.scss ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/setup/config.js":
/*!*****************************!*\
  !*** ./src/setup/config.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// NOTE: modify these values based on the design and the project you're working on

var config = {
  widthTriggerScale: 9999,
  widthDesktopSafe: 1720,
  widthDesktop: 2000,
  widthMobile: 768,
  heightDesktop: 1000,
  heightMobile: 1000,
  func: {
    isMobile: function () {
      var device = {
        width: $(window).innerWidth(),
        height: $(window).innerHeight()
      };
      return device.width <= config.widthMobile || device.width < device.height;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/setup/js/_promotion.js":
/*!************************************!*\
  !*** ./src/setup/js/_promotion.js ***!
  \************************************/
/*! exports provided: dndPromotion, getAwardSrcById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dndPromotion", function() { return dndPromotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAwardSrcById", function() { return getAwardSrcById; });
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_0__);

const test10 = {
  status: 1,
  data: ["Key128Bytes=FH2c88ec1bc8f720K68f0395525ad8a2dEACA444h000016BPEETK6T98M46TDC2WX38LNCXB8F6RGFHYXDJ39R9XXDPBNR8KWEAKP8YZL3P7HB6EMMFXGNTE4KPTDY2", "Key128Bytes=FH2c88ec1bc8f720K68f0395525ad8a2dEACA444h000016BPEETK6T98M46TDC2WX38LNCXB8F6RGFHYXDJ39R9XXDPBNR8KWEAKP8YZL3P7HB6EMMFXGNTE4KPTDY2", "Key128Bytes=FH2c88ec1bc8f720K68f0395525ad8a2dEACA444h000016BPEETK6T98M46TDC2WX38LNCXB8F6RGFHYXDJ39R9XXDPBNR8KWEAKP8YZL3P7HB6EMMFXGNTE4KPTDY2", "Key128Bytes=FH2c88ec1bc8f720K68f0395525ad8a2dEACA444h000016BPEETK6T98M46TDC2WX38LNCXB8F6RGFHYXDJ39R9XXDPBNR8KWEAKP8YZL3P7HB6EMMFXGNTE4KPTDY2", "Key128Bytes=FH2c88ec1bc8f720K68f0395525ad8a2dEACA444h000016BPEETK6T98M46TDC2WX38LNCXB8F6RGFHYXDJ39R9XXDPBNR8KWEAKP8YZL3P7HB6EMMFXGNTE4KPTDY2", "Key128Bytes=FH2c88ec1bc8f720K68f0395525ad8a2dEACA444h000016BPEETK6T98M46TDC2WX38LNCXB8F6RGFHYXDJ39R9XXDPBNR8KWEAKP8YZL3P7HB6EMMFXGNTE4KPTDY2", "Key128Bytes=FH2c88ec1bc8f720K68f0395525ad8a2dEACA444h000016BPEETK6T98M46TDC2WX38LNCXB8F6RGFHYXDJ39R9XXDPBNR8KWEAKP8YZL3P7HB6EMMFXGNTE4KPTDY2", "Key128Bytes=FH2c88ec1bc8f720K68f0395525ad8a2dEACA444h000016BPEETK6T98M46TDC2WX38LNCXB8F6RGFHYXDJ39R9XXDPBNR8KWEAKP8YZL3P7HB6EMMFXGNTE4KPTDY2", "Key128Bytes=FH2c88ec1bc8f720K68f0395525ad8a2dEACA444h000016BPEETK6T98M46TDC2WX38LNCXB8F6RGFHYXDJ39R9XXDPBNR8KWEAKP8YZL3P7HB6EMMFXGNTE4KPTDY2", "Key128Bytes=FH2c88ec1bc8f720K68f0395525ad8a2dEACA444h000016BPEETK6T98M46TDC2WX38LNCXB8F6RGFHYXDJ39R9XXDPBNR8KWEAKP8YZL3P7HB6EMMFXGNTE4KPTDY2"],
  prize: "",
  name: "",
  link: ""
};
let dndpDefault = {
  // url: './assets/test-api/getdata.html',
  // url2: './assets/test-api/savedata.html',
  url: "",
  debug: false,
  directory: "assets/images/gifts",
  items: {
    A: "1",
    B: "2",
    C: "3",
    D: "4",
    E: "5",
    F: "6",
    G: "7",
    H: "8",
    I: "9",
    length: 9,
    type: "png"
  },
  names: ["500 Xu Khóa", "4000 Vàng", "Áo thun Gunny Origin", "Tai nghe Bluetooth AirPods 3 Apple", "Điện thoại iPhone 13 128GB", "Đồng hồ Apple Watch Series 7 LTE 41mm", "Gà Bông Gunny Origin", "5 viên Đá Cường Hóa", "1 Bùa Ma Thuật"],
  el: {
    cp: ".spoint",
    returnPrize: "#returnPrize",
    action: ".pm__rut",
    reward: ".reward",
    inform: "#popup_inform",
    informContent: ".pm__inform-text",
    rewardContainer: "#rewardContainer"
  },
  variable: {
    spinable: true,
    urlGet: "",
    urlSave: "",
    methodGet: "",
    methodSave: ""
  },
  multipleTurns: 10,
  log: true,
  callback: function () {}
};
const dndPromotion = function (options) {
  let defaults = dndpDefault;
  var settings = $.extend(defaults, options);
  let _CheckSO = "";
  let Key128Bytesold = "";
  var DataKey128 = "";
  let cp = parseInt($(settings.el.cp).html());
  const multipleTurns = settings.multipleTurns;
  const log = settings.log;
  const closeAllPopup = () => {
    $(".popup").removeClass("active");
    $("html").removeClass("popup-opened");
  };
  const activePopup = id => {
    $(id).addClass("active");
    $("html").addClass("popup-opened");
  };
  const informError = content => {
    $(settings.el.informContent).html(content);
    activePopup(settings.el.inform);
  };
  const nameToSrc = name => {
    return `//img.zing.vn/products/codm/landing/2023-quay-so-1/prod/${settings.directory}/${name}.${settings.items.type}`;
    // return `${settings.directory}/${name}.${settings.items.type}`;
  };

  const getAwardID = code => {
    return settings.items[code];
  };
  const makePrize = response => {
    // console.log(response);
    var Key128 = response.split("=");
    var _Data = Key128[1];
    DataKey128 += _Data;
    var index = parseInt(_Data.charAt(127));
    var count_start = _Data.substr(index + 39, 4);
    var AC = _Data.substr(index + 32, 1);
    var _Code = _Data.substr(index + 33, 6);
    var _Encry1 = _Data.substr(index, 32);
    var _Encry2 = md5__WEBPACK_IMPORTED_MODULE_0___default()(_Encry1 + _Data.substr(index + 32, 1));
    return {
      characterImg: AC,
      _Code: _Code,
      indexImg: getAwardID(AC),
      _Encry1: _Encry1,
      _Encry2: _Encry2,
      _Data: _Data,
      data: "Key32Bytes1=" + _Encry1 + "&Key32Bytes2=" + _Encry2
    };
  };
  const handleData = ($this, responseData) => {
    // console.log(responseData);
    var listPrize = [];
    var data = [];
    var totalTurn = $this.hasClass("rut-1") ? 1 : multipleTurns;
    var type = $this.data("value");
    var $chest = $this.prev();
    var $item = $this.parent();
    if (totalTurn === 1) {
      var prize = makePrize(responseData);
      listPrize.push(prize);
      data = prize.data;
    } else if (totalTurn === multipleTurns) {
      for (var i = 0; i < responseData.length; i++) {
        var prize = makePrize(responseData[i]);
        listPrize.push(prize);
        data = prize.data;
      }
    }
    const randomInRange = (start, end) => {
      return Math.floor(Math.random() * (end - start + 1) + start);
    };
    if (type != undefined) {
      $.ajax({
        type: settings.variable.methodSave,
        url: settings.variable.urlSave,
        dataType: "json",
        //or HTML, JSON, etc.,
        data: {
          action: "save_data",
          data: data,
          type: type,
          totalTurn: totalTurn
        },
        beforeSend: function () {
          // activePopup("#loading");
          // $("#anireward").addClass("active");
          settings.animBefore();
        },
        success: function (data) {
          closeAllPopup();
          // console.log(data);
          Key128Bytesold = DataKey128;
          if (data.status === 1 && data.data === "ok") {
            // console.log(listPrize);
            if (listPrize.length > 0) {
              $(settings.el.rewardContainer).empty();
              switch (listPrize.length) {
                case 1:
                case multipleTurns:
                  for (var i = 0, len = listPrize.length; i < len; i++) {
                    var characterName = listPrize[i].characterImg;
                    var listItem = $(`.key-${characterName}`);
                    var itemIndex = listItem.length > 1 ? listItem[randomInRange(0, 1)].id.slice(5) : listItem[0].id.slice(5);
                    var indexName = listPrize[i].indexImg;
                    var imgUrl = nameToSrc(itemIndex);
                    var prizeName = settings.names[indexName - 1];
                    if (listPrize.length == 10) {
                      var template = `
                                               <img class="wrapper__10qua--item" src="${imgUrl}" alt="${prizeName}">
                                            `;
                      $(settings.el.rewardContainer10).append(template);
                    } else {
                      var template2 = `
                                                      <img class="popup__wrapper--reward" src="${imgUrl}" data="${characterName}" alt="${prizeName}">
                                                      <img class="render__item" src="${imgUrl}" alt="${prizeName}">
                                            `;
                      $(settings.el.rewardContainer).append(template2);
                    }
                  }
                  setTimeout(function () {
                    settings.animResult(listPrize);
                    if ($(".pm__usedPoint").length > 0) {
                      var usedPoint = $(".pm__usedPoint").html();
                      usedPoint = parseInt(usedPoint);
                      usedPoint += totalTurn;
                      $(".pm__usedPoint").html(usedPoint);
                    }
                    settings.callback();
                  }, settings.wait);
                  settings.variable.spinable = true;
                  break;
                default:
                  closeAllPopup();
                  informError(`Error: Results not return in 1 or ${multipleTurns} type.`);
                  if (log) {
                    console.log(`Error: Results not return in 1 or ${multipleTurns} type.`);
                  }
                  return false;
              }
              var totalTurn = $this.hasClass("rut-1") ? 1 : multipleTurns;
              cp = totalTurn == multipleTurns ? cp - multipleTurns : cp - 1;
              $(settings.el.cp).html(cp);
            }
          }
        },
        error: function (response) {
          settings.variable.spinable = true;
          alert(response.data);
        }
      });
    } else {
      closeAllPopup();
      settings.variable.spinable = true;
      informError("Error: Missing data-type.");
      if (log) {
        console.log("Error: Missing data-type.");
      }
    }
    _CheckSO = Key128Bytesold;
    if (_CheckSO == DataKey128) {
      return false;
    }

    // console.log(data);
    // var type = 'test';
  };

  const getData = $this => {
    let totalTurn = $this.hasClass("rut-1") ? 1 : multipleTurns;
    let type = $this.data("value");
    var action = $this.hasClass("rut-1") ? "get_data" : "get_data_multiple";
    // let type = 'test';
    if (type != undefined) {
      $.ajax({
        type: settings.variable.methodGet,
        url: settings.variable.urlGet,
        dataType: "json",
        data: {
          action: action,
          type: type,
          totalTurn: totalTurn
        },
        beforeSend: function () {
          // activePopup("#loading");
          $("#anireward").addClass("active");
        },
        success: function (response) {
          // $("#anireward").removeClass("active");
          closeAllPopup();
          settings.variable.spinable = true;
          if (response.status === 1) {
            if (action === "get_data_multiple") {
              handleData($this, test10.data);
            } else {
              handleData($this, response.data);
            }
          } else {
            informError(response.data);
            if (log) {
              console.log(response.data);
            }
          }
        },
        error: function (response) {
          closeAllPopup();
          settings.variable.spinable = true;
          // informError('Error Status: ' + response.data);
          informError("Vui lòng kiểm tra lại kết nối mạng để tiếp tục");
          if (log) {
            console.log("Vui lòng kiểm tra lại kết nối mạng để tiếp tục");
          }
        }
      });
    } else {
      closeAllPopup();
      settings.variable.spinable = true;
      informError("Error: Missing data-type.");
      if (log) {
        console.log("Error: Missing data-type.");
      }
    }
  };
  const main = () => {
    // console.log(nameToSrc('gt5'));

    $(settings.el.action).on("click", function (e) {
      e.preventDefault();
      if (settings.variable.spinable) {
        closeAllPopup();
        settings.variable.spinable = false;
        let totalTurn = $(this).hasClass("rut-1") ? 1 : multipleTurns;
        if (totalTurn == multipleTurns && cp < multipleTurns) {
          settings.variable.spinable = true;
          informError(`Bạn chưa đủ lượt để quay nhanh x${multipleTurns} hoặc đã hết lượt. Vui lòng kiểm tra lại.`);
          if (log) {
            console.log(`Bạn chưa đủ lượt để quay nhanh x${multipleTurns} hoặc đã hết lượt. Vui lòng kiểm tra lại.`);
          }
        } else if (totalTurn == 1 && cp < 1) {
          settings.variable.spinable = true;
          informError("Bạn đã hết lượt. Vui lòng kiểm tra lại.");
          if (log) {
            console.log("Bạn đã hết lượt. Vui lòng kiểm tra lại.");
          }
        } else {
          settings.animWait(this); // wait before get data
          getData($(this));
        }
        // if ((cp >= 1 && totalTurn == 1) || (cp >= 5 && totalTurn == 5)) {
        // } else if (totalTurn == 5 && cp < 5) {
        // } else {
        //     settings.variable.spinable = true;
        //     informError("Bạn đã hết lượt.");
        // }
      }
    });
  };

  if (settings.debug) {
    settings.variable.urlGet = "./assets/test-api/playgame/getdata.html";
    settings.variable.urlSave = "./assets/test-api/playgame/savedata.html";
    settings.variable.methodGet = "GET";
    settings.variable.methodSave = "GET";
  } else {
    settings.variable.urlGet = settings.url;
    settings.variable.urlSave = settings.url;
    settings.variable.methodGet = "POST";
    settings.variable.methodSave = "POST";
  }
  main();
};
const getAwardSrcById = function (code) {
  let settings = {
    items: dndpDefault.items,
    directory: dndpDefault.directory
  };
  const nameToSrc = name => {
    return `//img.zing.vn/products/codm/landing/2023-quay-so-1/prod/${settings.directory}/${name}.${settings.items.type}`;
    // return `${settings.directory}/${name}.${settings.items.type}`;
  };

  const getAwardID = code => {
    return settings.items[code];
  };
  return nameToSrc(getAwardID(code));
};


/***/ }),

/***/ "./src/setup/js/_scaleRoot.2.js":
/*!**************************************!*\
  !*** ./src/setup/js/_scaleRoot.2.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../setup/config */ "./src/setup/config.js");
// SCALE PLATFORM
// | Especially use for Web Platform 3.0 / 2022
// | Although WP3.2.3 is preventing non-responsive design, there still have some
// | unexpected input PSD from outsource, out-dated designers.


$.fn.scalePlatform = function (options) {
  var defaults = {
    obj: $(this),
    designSafe: {
      // if width of device smaller safe zone, then init scale.
      desktop: _setup_config__WEBPACK_IMPORTED_MODULE_0__["default"].widthTriggerScale,
      mobile: _setup_config__WEBPACK_IMPORTED_MODULE_0__["default"].widthTriggerScale
    },
    designWidth: {
      desktop: _setup_config__WEBPACK_IMPORTED_MODULE_0__["default"].widthDesktop,
      mobile: _setup_config__WEBPACK_IMPORTED_MODULE_0__["default"].widthMobile
    },
    designHeight: {
      desktop: _setup_config__WEBPACK_IMPORTED_MODULE_0__["default"].heightDesktop,
      mobile: _setup_config__WEBPACK_IMPORTED_MODULE_0__["default"].heightMobile
    },
    mode: "",
    //scaleForWidth
    elScale: {
      desktop: ".scaleDesktop",
      mobile: ".scaleMobile"
    },
    dataScale: "data-scale-ratio",
    dataDevice: "data-device-type",
    dataDisplay: {
      desktop: "data-desktop-display",
      mobile: "data-mobile-display"
    },
    dataOrigin: {
      desktop: "data-desktop-origin",
      mobile: "data-mobile-origin"
    },
    rescaleForParent: true,
    deviceHeightStyleTag: {
      fix: "fixDeviceHeight",
      max: "maxDeviceHeight"
    },
    deviceHeightStyleVar: "--sr-device-height",
    deviceScaleRatioStyleVar: "--sr-scale-ratio"
  };
  var settings = $.extend(defaults, options);
  var setToDefault = function () {
    $(settings.obj).attr("style", "");
    $(settings.obj).parent().attr("style", "");
    $(settings.elScale.desktop + " , " + settings.elScale.mobile).each(function () {
      $(this).attr("style", "");
    });
    $(settings.obj).parent().attr(settings.dataScale, 1);

    // console.log('set to default');
  }();

  var device = {
    width: $(window).outerWidth(),
    height: $(window).innerHeight()
  };

  // console.log(device);

  var isMobile = (width = device.width, height = device.height) => width <= 700 || width < height;

  // NOTE: ratio = deviceWidth / desingWidth
  var scaleRatio = isMobile() ? device.width / settings.designWidth.mobile : device.width / settings.designWidth.desktop,
    marginLeft = 0;

  // TODO: not quite sure what this does
  if (settings.deviceHeightStyleTag != false && $("#deviceHeightStyleTag").length < 1) {
    // NOTE: w1 / w = h / h1
    var rescaledHeight = "calc(100vh * " + 1 / scaleRatio + ")";
    var styleTag = $(`
            <style id="deviceHeightStyleTag">
                .${settings.deviceHeightStyleTag.max} {
                    max-height: ${rescaledHeight}
                }
                .${settings.deviceHeightStyleTag.fix} {
                    height: ${rescaledHeight}
                }
            </style>
        `);
    $("html > head").append(styleTag);
  }

  // TODO: not quite sure what this does
  if (settings.deviceHeightStyleVar != false && $("#deviceHeightStyleVar").length < 1) {
    // NOTE: w1 / w = h / h1
    var rescaledHeight = "calc(100vh * " + 1 / scaleRatio + ")";
    var styleTag = $(`
            <style id="deviceHeightStyleVar">
                :root {
                    ${settings.deviceHeightStyleVar}: ${rescaledHeight};
                    ${settings.deviceScaleRatioStyleVar}: ${scaleRatio}
                }
            </style>
        `);
    $("html > head").append(styleTag);
  }
  $(settings.elScale.desktop + " , " + settings.elScale.mobile).each(function () {
    var scaleOrigin = (isMobile = isMobile()) => {
      if (isMobile && $(this).attr(settings.dataOrigin.mobile) != undefined) {
        return $(this).attr(settings.dataOrigin.mobile);
      } else if ($(this).attr(settings.dataOrigin.desktop) != undefined) {
        return $(this).attr(settings.dataOrigin.desktop);
      }
      return "top left";
    };
    var display = (isMobile = isMobile()) => {
      // console.log(isMobile);
      if (isMobile && $(this).attr(settings.dataDisplay.mobile) != undefined) {
        return $(this).attr(settings.dataDisplay.mobile);
      } else if ($(this).attr(settings.dataDisplay.desktop) != undefined) {
        return $(this).attr(settings.dataDisplay.desktop);
      }
      return "block";
    };

    // NOTE: scale #wrapper
    if (isMobile() && $(this).hasClass(settings.elScale.mobile.replace(".", "")) || !isMobile() && $(this).hasClass(settings.elScale.desktop.replace(".", ""))) {
      $(this).css({
        transform: "scale(" + scaleRatio + ")",
        marginLeft: marginLeft + "px",
        transformOrigin: scaleOrigin
        // display: display
      });
    }
  });

  // NOTE: scale the parent (body) element
  if (settings.rescaleForParent) {
    var obj = {
      height: settings.obj.outerHeight()
    };
    var scaleHeight = obj.height * scaleRatio;
    $(settings.obj).parent().css({
      height: scaleHeight + "px"
      // width: device.width + "px"
    });
  }

  // NOTE: add attribute to parent (body)
  $(settings.obj).parent().attr(settings.dataScale, scaleRatio);
  $(settings.obj).parent().attr(settings.dataDevice, isMobile() ? "mobile" : "desktop");
};

/***/ }),

/***/ "./src/setup/js/_scrollFrame.2.js":
/*!****************************************!*\
  !*** ./src/setup/js/_scrollFrame.2.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery_mousewheel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-mousewheel */ "./node_modules/jquery-mousewheel/jquery.mousewheel.js");
/* harmony import */ var jquery_mousewheel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_mousewheel__WEBPACK_IMPORTED_MODULE_0__);

const scrollFrame = {
  el: {
    scrollFrame: ".scrollFrame",
    frame: [],
    nav: ".scrollFrameControl",
    scrollContainer: "html",
    fullPageWrapper: "body"
  },
  data: {
    totalFrame: 0,
    currentFrame: 0,
    currentFrameId: "",
    aniComplete: true,
    timeAnimation: 500
  },
  func: {
    getTotalFrame: () => $(scrollFrame.el.scrollFrame).length,
    getScaleRatio: () => {
      if ($(scrollFrame.el.fullPageWrapper).length > 0) {
        return $(scrollFrame.el.fullPageWrapper).attr("data-scale-ratio");
      } else {
        return 1;
      }
    },
    getFrames: () => {
      $(scrollFrame.el.scrollFrame).each(function () {
        // scrollFrame.el.frame.push("#"+$(this).attr("id"));
        scrollFrame.el.frame.push({
          el: "#" + $(this).attr("id"),
          offsetTop: $("#" + $(this).attr("id")).offset().top
        });
      });
    },
    getFrameOffset: frameId => {
      for (let i = 0, len = scrollFrame.el.frame.length; i < len; i++) {
        if (scrollFrame.el.frame[i].el === frameId) {
          return scrollFrame.el.frame[i].offsetTop;
        }
      }
      return 0;
    },
    scrollTo: (frameId, scrollOffset) => {
      // let scrollTop = $(frameId).offset().top;
      // let scaleRatio = scrollFrame.func.getScaleRatio();
      // console.log(scaleRatio);
      // scrollTop *= scaleRatio;
      // console.log(frameId);
      // console.log(scrollTop);
      let scrollTop = scrollFrame.func.getFrameOffset(frameId);

      // console.log(parseInt(scrollOffset));
      // console.log(scrollFrame.func.getScaleRatio());

      if (scrollOffset != undefined) {
        scrollTop += parseInt(scrollOffset) * scrollFrame.func.getScaleRatio();
      }

      // console.log(scrollTop);

      $(scrollFrame.el.scrollContainer).animate({
        scrollTop: scrollTop
      }, scrollFrame.data.timeAnimation, "linear", function () {
        scrollFrame.data.aniComplete = true;
      });
      scrollFrame.func.activeNavBullet(frameId);
    },
    activeNavBullet: frameId => {
      if ($(scrollFrame.el.nav).length > 0) {
        $(scrollFrame.el.nav).removeClass("active");
        $(scrollFrame.el.nav).parent().parent().find('[href="' + frameId + '"]').addClass("active");
        // $(scrollFrame.el.nav).find('a').removeClass("active");
        // $(scrollFrame.el.nav).find('a[href="'+frameId+'"]').addClass("active");
      }
    },

    isOpeningPopup: () => {
      return $("html").hasClass("popup-opened");
    }
  },
  handleMousewheel: () => {
    $(window).on("mousewheel", function (e) {
      // e.preventDefault();
      // e.stopPropagation();
      if (!scrollFrame.func.isOpeningPopup()) {
        let deltaY = e.deltaY;

        // console.log(deltaY, scrollFrame.data.aniComplete, scrollFrame.data.currentFrameId);
        // console.log(deltaY > 0 && scrollFrame.data.aniComplete && (scrollFrame.data.currentFrame + 1 < scrollFrame.data.totalFrame));
        if (deltaY < 0 && scrollFrame.data.aniComplete && scrollFrame.data.currentFrame + 1 < scrollFrame.data.totalFrame) {
          // Scroll down
          scrollFrame.data.currentFrame++;
          scrollFrame.data.aniComplete = false;
          scrollFrame.data.currentFrameId = scrollFrame.el.frame[scrollFrame.data.currentFrame].el;
          scrollFrame.func.scrollTo(scrollFrame.data.currentFrameId);
        } else if (deltaY > 0 && scrollFrame.data.aniComplete && scrollFrame.data.currentFrame > 0) {
          // Scroll up
          scrollFrame.data.currentFrame--;
          scrollFrame.data.aniComplete = false;
          scrollFrame.data.currentFrameId = scrollFrame.el.frame[scrollFrame.data.currentFrame].el;
          scrollFrame.func.scrollTo(scrollFrame.data.currentFrameId);
        }
      }
    });
  },
  handleNav: () => {
    if ($(scrollFrame.el.nav).length > 0) {
      $(scrollFrame.el.nav).on("click", function (e) {
        e.preventDefault();
        let frameToScroll = $(this).attr("href");
        if ($(this).attr("data-fts-selector").length > 0) {
          // console.log($(this).attr("data-fts-selector"));
          frameToScroll = "#" + $($(this).attr("data-fts-selector")).attr("id");
          // console.log(frameToScroll);
        }

        for (let i = 0, len = scrollFrame.el.frame.length; i < len; i++) {
          if (scrollFrame.el.frame[i].el === frameToScroll) {
            scrollFrame.data.currentFrame = i;
            scrollFrame.data.currentFrameId = frameToScroll;
          }
        }
        var scrollOffset = $(this).attr("data-scroll-offset");
        scrollFrame.func.scrollTo(frameToScroll, scrollOffset);
      });
    }
  },
  init: () => {
    // console.log("scroll frame initial");
    $(scrollFrame.el.scrollContainer).animate({
      scrollTop: 0
    }, scrollFrame.data.timeAnimation, "linear", function () {});
    scrollFrame.data.totalFrame = scrollFrame.func.getTotalFrame();
    scrollFrame.func.getFrames();

    // console.log(scrollFrame.el.frame)

    // console.log(scrollFrame.el);
    // console.log(scrollFrame.data);
    // scrollFrame.handleMousewheel();
    scrollFrame.handleNav();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (scrollFrame);

// -----------------------------------
// Event scroll with delta return
// -----------------------------------
//
// [DELEGRATED] because call handle when running animating code (animate{scrollTop:x})
//
// jQuery.event.special.scrolldelta = {
//     delegateType: "scroll",
//     bindType: "scroll",
//     handle: function (event) {
//         var handleObj = event.handleObj;
//         var targetData = jQuery.data(event.target);
//         var ret = null;
//         var elem = event.target;
//         var isDoc = elem === document;
//         var oldTop = targetData.top || 0;
//         var oldLeft = targetData.left || 0;
//         targetData.top = isDoc ? elem.documentElement.scrollTop + elem.body.scrollTop : elem.scrollTop;
//         targetData.left = isDoc ? elem.documentElement.scrollLeft + elem.body.scrollLeft : elem.scrollLeft;
//         event.scrollTopDelta = targetData.top - oldTop;
//         event.scrollTop = targetData.top;
//         event.scrollLeftDelta = targetData.left - oldLeft;
//         event.scrollLeft = targetData.left;
//         event.type = handleObj.origType;
//         ret = handleObj.handler.apply(this, arguments);
//         event.type = handleObj.type;
//         return ret;
//     }
// };

/***/ }),

/***/ "./src/setup/js/_scrollWatch.2.js":
/*!****************************************!*\
  !*** ./src/setup/js/_scrollWatch.2.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import ScrollWatch from 'scrollwatch';

const scrollWatch = {
  init: function (options) {
    var defaults = {
      el: ".scrollwatch-pin",
      before: () => {},
      options: {
        watchOnce: false,
        watch: "#sectionHeader",
        scrollThrottle: 20,
        onElementInView: function (e) {
          $(".breadcrumb").removeClass("fixed");
          $(".nav").removeClass("fixed");
        },
        onElementOutOfView: function (e) {
          $(".breadcrumb").addClass("fixed");
          $(".nav").addClass("fixed");
        }
      },
      after: () => {}
    };
    var settings = {
      ...defaults,
      ...options,
      options: {
        ...defaults.options,
        ...options.options
      }
    };
    settings.before();
    const scrollWatchControl = {};
    $(settings.el).each(function () {
      var $el = $(this),
        elId = $(this).attr("id");
      settings.options.watch = "#" + elId;
      scrollWatchControl[elId] = new ScrollWatch(settings.options);
    });
    settings.after();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (scrollWatch);

/***/ }),

/***/ "./src/setup/js/_scrollwatch.js":
/*!**************************************!*\
  !*** ./src/setup/js/_scrollwatch.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import ScrollWatch from 'scrollwatch';

$.fn.scrollWatch = function (options) {
  var defaults = {
    before: () => {},
    options: {
      watchOnce: false,
      watch: '#sectionHeader',
      scrollThrottle: 20,
      onElementInView: function () {
        $(".breadcrumb").removeClass("fixed");
        $(".nav").removeClass("fixed");
      },
      onElementOutOfView: function () {
        $(".breadcrumb").addClass("fixed");
        $(".nav").addClass("fixed");
      }
    },
    after: () => {}
  };
  var settings = $.extend(defaults, options);
  settings.before();
  // console.log(settings.options);
  var sw = new ScrollWatch(settings.options);
  settings.after();
};

/***/ }),

/***/ "./src/setup/js/_swiper.js":
/*!*********************************!*\
  !*** ./src/setup/js/_swiper.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import Swiper from 'swiper/swiper-bundle';
// import Swiper from "https://unpkg.com/swiper@7.4.1/swiper-bundle.js";
// import SwiperAnimation from "@cycjimmy/swiper-animation";

// var swiperAnimation = new SwiperAnimation();
var swiperControl = {};
$.fn.initSwiper = function (options) {
  var defaults = {
    isNested: false,
    isSync: false,
    isRenderBullet: false,
    isSwiperAnimation: false,
    swiperOptions: {
      centeredSlides: true,
      slidesPerView: 1,
      autoplay: {
        delay: 5000
      },
      lazy: {
        loadPrevNext: true
      },
      followFinger: false,
      spaceBetween: 0
    },
    nestedOptions: {},
    syncOptions: {},
    onInit: function () {},
    onChange: function (callback = function () {}) {
      callback();
    },
    before: function () {},
    after: function () {},
    debug: false
  };
  var settings = $.extend(defaults, options);
  var debugSettings = {};
  if (settings.debug) {
    debugSettings = {
      modules: [moduleDebug],
      debugger: true
    };
  }

  // console.log(this, settings);

  if ($(this).length == 0) {
    return;
  }
  let swiperSelector = "#" + $(this).attr("id");
  settings.before();

  // console.log(swiperControl[swiperSelector.substr(1)] != undefined);

  if (swiperControl[swiperSelector.substr(1)] != undefined) {
    // console.log(swiperControl[swiperSelector.substr(1)] != undefined);
    if (typeof swiperControl[swiperSelector.substr(1)].destroy() == "function") {
      swiperControl[swiperSelector.substr(1)].destroy();
    }
    delete swiperControl[swiperSelector.substr(1)];
  }

  // RENDER BULLETS OPTION

  var addon_renderBullet = {};
  if (settings.isRenderBullet) {
    var hostSwiper = $(this).attr("id");
    addon_renderBullet = {
      renderBullet: function (index, className) {
        var addOnClass = "";
        var addOnText = index + 1;
        var swiperName = $("#" + hostSwiper + " .swiper-wrapper").children(".swiper-slide").eq(index).attr("data-swiper-name");
        var swiperCode = $("#" + hostSwiper + " .swiper-wrapper").children(".swiper-slide").eq(index).attr("data-swiper-code");
        if (swiperName) {
          addOnText = swiperName;
        }
        if (swiperCode) {
          addOnClass = swiperCode + " swiper-pagination-bullet--" + swiperCode;
        }
        return '<span class="' + className + " " + addOnClass + '">' + addOnText + "</span>";
      }
    };
  }

  // NESTED OPTIONS

  if (settings.isNested) {
    $(this).find(".swiper").each(function () {
      if ($(this).attr("data-swiper-isSync") === undefined) {
        $(this).initSwiper(settings.nestedOptions);
      }
    });
  }

  // SYNC OPTIONS

  var addon_syncOptions = {};
  if (settings.isSync) {
    var hostSwiper = $(this).attr("id");
    var syncWith = $(this).attr("data-sync-with");

    // console.log(hostSwiper);

    // console.log({...settings.syncOptions,
    //     watchSlidesVisibility: true,
    //     watchSlidesProgress: true});

    $("#" + syncWith).initSwiper({
      ...settings.syncOptions,
      swiperOptions: {
        watchOverflow: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        scrollbar: {
          el: ".swiper-scrollbar-" + syncWith,
          hide: true
        },
        ...settings.syncOptions.swiperOptions
      },
      after: function () {
        // swiperControl[hostSwiper].controller.control = [swiperControl[syncWith]];
        // swiperControl[syncWith].controller.control = [swiperControl[hostSwiper]];
        // swiperControl[hostSwiper].on('slideChangeTransitionStart', function() {
        //     swiperControl[syncWith].slideTo(swiperControl[hostSwiper].activeIndex);
        // });
        // swiperControl[syncWith].on('transitionStart', function(){
        //     swiperControl[hostSwiper].slideTo(swiperControl[syncWith].activeIndex);
        // });
      }
    });

    // console.log({
    //     syncWith,
    //     ...settings.syncOptions,
    //     swiperOptions: {
    //         watchOverflow: true,
    //         centeredSlides: true,
    //         centeredSlidesBounds: true,
    //         watchSlidesVisibility: true,
    //         watchSlidesProgress: true,
    //         slideToClickedSlide: true,
    //         scrollbar: {
    //             el: '.swiper-scrollbar-' + syncWith,
    //             hide: true
    //         },
    //         ...settings.syncOptions.swiperOptions
    //     },
    //     after: function() {
    //     }
    // });

    addon_syncOptions = {
      // centeredSlides: true,
      slideToClickedSlide: true,
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      preventInteractionOnTransition: true,
      thumbs: {
        swiper: swiperControl[syncWith]
      }
    };
  }
  var swiperAnimation = new SwiperAnimation();
  // console.log(".swiper-pagination--" + swiperSelector.substr(1));
  const swiperSettings = new Swiper(swiperSelector, {
    ...settings.swiperOptions,
    ...addon_syncOptions,
    on: {
      afterInit: function () {
        if (settings.isSwiperAnimation && swiperAnimation.animations != null) {
          swiperAnimation.init(this).animate();
        }
        swiperAnimation.init(this).animate();
        settings.onInit();
      },
      slideChangeTransitionStart: function () {
        settings.onChange();
        if (settings.isSwiperAnimation && swiperAnimation.animations != null) {
          swiperAnimation.init(this).animate();
        }
        swiperAnimation.init(this).animate();
      },
      ...settings.swiperOptions.on
    },
    pagination: {
      el: ".swiper-pagination--" + swiperSelector.substr(1),
      clickable: true,
      ...settings.swiperOptions.pagination,
      ...addon_renderBullet
    },
    navigation: {
      nextEl: ".swiper-button-next--" + swiperSelector.substr(1),
      prevEl: ".swiper-button-prev--" + swiperSelector.substr(1),
      ...settings.swiperOptions.navigation
    },
    ...debugSettings
  });
  swiperControl[swiperSelector.substr(1)] = swiperSettings;
  // console.log(swiperControl);

  settings.after();
  return swiperSettings;
};
function moduleDebug({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    debugger: false
  });
  on("init", () => {
    if (!swiper.params.debugger) return;
    console.log("init");
  });
  on("click", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("click");
  });
  on("tap", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("tap");
  });
  on("doubleTap", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("doubleTap");
  });
  on("sliderMove", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("sliderMove");
  });
  on("slideChange", () => {
    if (!swiper.params.debugger) return;
    console.log("slideChange", swiper.previousIndex, "->", swiper.activeIndex);
  });
  on("slideChangeTransitionStart", () => {
    if (!swiper.params.debugger) return;
    console.log("slideChangeTransitionStart");
  });
  on("slideChangeTransitionEnd", () => {
    if (!swiper.params.debugger) return;
    console.log("slideChangeTransitionEnd");
  });
  on("transitionStart", () => {
    if (!swiper.params.debugger) return;
    console.log("transitionStart");
  });
  on("transitionEnd", () => {
    if (!swiper.params.debugger) return;
    console.log("transitionEnd");
  });
  on("fromEdge", () => {
    if (!swiper.params.debugger) return;
    console.log("fromEdge");
  });
  on("reachBeginning", () => {
    if (!swiper.params.debugger) return;
    console.log("reachBeginning");
  });
  on("reachEnd", () => {
    if (!swiper.params.debugger) return;
    console.log("reachEnd");
  });
}
/* harmony default export */ __webpack_exports__["default"] = (swiperControl);
// export {swiperControl, swiperAnimation};

/***/ }),

/***/ "./src/setup/js/_toggleClass.js":
/*!**************************************!*\
  !*** ./src/setup/js/_toggleClass.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$.fn.toggleClassname = function (options) {
  var defaults = {
    obj: $(this),
    toggle: [{
      el: $(this).parent(),
      className: "active"
    }],
    before: () => {},
    after: () => {}
  };
  var settings = $.extend(defaults, options);
  settings.obj.on("click", e => {
    console.log("clicked");
    e.preventDefault();
    settings.before();
    settings.toggle.forEach(function (item) {
      if (item.el.hasClass(item.className)) {
        item.el.removeClass(item.className);
      } else {
        item.el.addClass(item.className);
      }
    });
    settings.after();
  });
};

/***/ }),

/***/ "./src/setup/js/_universalLink.js":
/*!****************************************!*\
  !*** ./src/setup/js/_universalLink.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$.fn.universalLink = function (options) {
  var defaults = {
    dataAppstore: "data-appstore",
    dataAndroid: "data-ggplay"
  };
  var settings = $.extend(defaults, options);
  var isIOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false;
  var isANDROID = navigator.userAgent.toLowerCase().indexOf("android") > -1;

  // console.log(navigator.userAgent.toLowerCase());
  // console.log(isIOS, isANDROID);

  var universalLink = "#";
  if (isIOS) {
    universalLink = $(this).attr(settings.dataAppstore);
  } else if (isANDROID) {
    universalLink = $(this).attr(settings.dataAndroid);
  }
  $(this).attr("href", universalLink);
};

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./src/prod/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/prod/index.js */"./src/prod/index.js");


/***/ }),

/***/ "jquery":
/*!****************************!*\
  !*** external "$, jQuery" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = $, jQuery;

/***/ }),

/***/ "twig":
/*!***********************!*\
  !*** external "Twig" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Twig;

/***/ })

/******/ });
//# sourceMappingURL=prod.bundle.js.map