(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["0"],{

/***/ "./node_modules/@samuelmeuli/font-manager/dist/index.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@samuelmeuli/font-manager/dist/index.es.js ***!
  \*****************************************************************/
/*! exports provided: FONT_FAMILY_DEFAULT, FontManager, OPTIONS_DEFAULTS, getFontId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_FAMILY_DEFAULT", function() { return FONT_FAMILY_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontManager", function() { return FontManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIONS_DEFAULTS", function() { return OPTIONS_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontId", function() { return getFontId; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "@charset \"UTF-8\";\ndiv[id^=font-picker] {\n  position: relative;\n  display: inline-block;\n  width: 200px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);\n}\ndiv[id^=font-picker] * {\n  box-sizing: border-box;\n}\ndiv[id^=font-picker] p {\n  margin: 0;\n  padding: 0;\n}\ndiv[id^=font-picker] button {\n  color: inherit;\n  font-size: inherit;\n  background: none;\n  border: 0;\n  outline: none;\n  cursor: pointer;\n}\ndiv[id^=font-picker] .dropdown-button {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 35px;\n  padding: 0 10px;\n  background: #cbcbcb;\n}\ndiv[id^=font-picker] .dropdown-button:hover, div[id^=font-picker] .dropdown-button:focus {\n  background: #bebebe;\n}\ndiv[id^=font-picker] .dropdown-button .dropdown-font-name {\n  overflow: hidden;\n  white-space: nowrap;\n}\ndiv[id^=font-picker] .dropdown-icon {\n  margin-left: 10px;\n}\n@-webkit-keyframes spinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\ndiv[id^=font-picker] .dropdown-icon.loading::before {\n  display: block;\n  width: 10px;\n  height: 10px;\n  border: 2px solid #b2b2b2;\n  border-top-color: #000000;\n  border-radius: 50%;\n  -webkit-animation: spinner 0.6s linear infinite;\n          animation: spinner 0.6s linear infinite;\n  content: \"\";\n}\ndiv[id^=font-picker] .dropdown-icon.finished::before {\n  display: block;\n  width: 0;\n  height: 0;\n  margin: 0 2px;\n  border-top: 6px solid #000000;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n  transition: transform 0.3s;\n  content: \"\";\n}\ndiv[id^=font-picker] .dropdown-icon.error::before {\n  content: \"⚠\";\n}\ndiv[id^=font-picker].expanded .dropdown-icon.finished::before {\n  transform: rotate(-180deg);\n}\ndiv[id^=font-picker].expanded ul {\n  max-height: 200px;\n}\ndiv[id^=font-picker] ul {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  max-height: 0;\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background: #eaeaea;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  -webkit-overflow-scrolling: touch;\n}\ndiv[id^=font-picker] ul li {\n  height: 35px;\n  list-style: none;\n}\ndiv[id^=font-picker] ul li button {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 0 10px;\n  white-space: nowrap;\n}\ndiv[id^=font-picker] ul li button:hover, div[id^=font-picker] ul li button:focus {\n  background: #dddddd;\n}\ndiv[id^=font-picker] ul li button.active-font {\n  background: #d1d1d1;\n}";
styleInject(css);

function getFontId(fontFamily) {
    return fontFamily.replace(/\s+/g, "-").toLowerCase();
}
function validatePickerId(pickerId) {
    if (pickerId.match(/[^0-9a-z]/i)) {
        throw Error("The `pickerId` parameter may only contain letters and digits");
    }
}

function get(url) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.overrideMimeType("application/json");
        request.open("GET", url, true);
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status !== 200) {
                    reject(new Error("Response has status code " + request.status));
                }
                else {
                    resolve(request.responseText);
                }
            }
        };
        request.send();
    });
}

var LIST_BASE_URL = "https://www.googleapis.com/webfonts/v1/webfonts";
function getFontList(apiKey) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, json, fontsOriginal;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = new URL(LIST_BASE_URL);
                    url.searchParams.append("sort", "popularity");
                    url.searchParams.append("key", apiKey);
                    return [4, get(url.href)];
                case 1:
                    response = _a.sent();
                    json = JSON.parse(response);
                    fontsOriginal = json.items;
                    return [2, fontsOriginal.map(function (fontOriginal) {
                            var family = fontOriginal.family, subsets = fontOriginal.subsets, others = __rest(fontOriginal, ["family", "subsets"]);
                            return __assign(__assign({}, others), { family: family, id: getFontId(family), scripts: subsets });
                        })];
            }
        });
    });
}

var previewFontsStylesheet = document.createElement("style");
document.head.appendChild(previewFontsStylesheet);
function applyFontPreview(previewFont, selectorSuffix) {
    var fontId = getFontId(previewFont.family);
    var style = "\n\t\t\t#font-button-" + fontId + selectorSuffix + " {\n\t\t\t\tfont-family: \"" + previewFont.family + "\";\n\t\t\t}\n\t\t";
    previewFontsStylesheet.appendChild(document.createTextNode(style));
}
function getActiveFontStylesheet(selectorSuffix) {
    var stylesheetId = "active-font-" + selectorSuffix;
    var activeFontStylesheet = document.getElementById(stylesheetId);
    if (!activeFontStylesheet) {
        activeFontStylesheet = document.createElement("style");
        activeFontStylesheet.id = stylesheetId;
        document.head.appendChild(activeFontStylesheet);
    }
    return activeFontStylesheet;
}
function applyActiveFont(activeFont, previousFontFamily, selectorSuffix) {
    var style = "\n\t\t.apply-font" + selectorSuffix + " {\n\t\t\tfont-family: \"" + activeFont.family + "\"" + (previousFontFamily ? ", \"" + previousFontFamily + "\"" : "") + ";\n\t\t}\n\t";
    var activeFontStylesheet = getActiveFontStylesheet(selectorSuffix);
    activeFontStylesheet.innerHTML = style;
}

var PREVIEW_ATTRIBUTE_NAME = "data-is-preview";
function getStylesheetId(fontId) {
    return "font-" + fontId;
}
function stylesheetExists(fontId, isPreview) {
    var stylesheetNode = document.getElementById(getStylesheetId(fontId));
    if (isPreview === null || isPreview === undefined) {
        return stylesheetNode !== null;
    }
    return (stylesheetNode !== null &&
        stylesheetNode.getAttribute(PREVIEW_ATTRIBUTE_NAME) === isPreview.toString());
}
function createStylesheet(fontId, isPreview) {
    var stylesheetNode = document.createElement("style");
    stylesheetNode.id = getStylesheetId(fontId);
    stylesheetNode.setAttribute(PREVIEW_ATTRIBUTE_NAME, isPreview.toString());
    document.head.appendChild(stylesheetNode);
}
function fillStylesheet(fontId, styles) {
    var stylesheetId = getStylesheetId(fontId);
    var stylesheetNode = document.getElementById(stylesheetId);
    if (stylesheetNode) {
        stylesheetNode.textContent = styles;
    }
    else {
        console.error("Could not fill stylesheet: Stylesheet with ID \"" + stylesheetId + "\" not found");
    }
}
function setStylesheetType(fontId, isPreview) {
    var stylesheetId = getStylesheetId(fontId);
    var stylesheetNode = document.getElementById(stylesheetId);
    if (stylesheetNode) {
        stylesheetNode.setAttribute(PREVIEW_ATTRIBUTE_NAME, isPreview.toString());
    }
    else {
        console.error("Could not change stylesheet type: Stylesheet with ID \"" + stylesheetId + "\" not found");
    }
}

function getMatches(regex, str) {
    var matches = [];
    var match;
    do {
        match = regex.exec(str);
        if (match) {
            matches.push(match[1]);
        }
    } while (match);
    return matches;
}

var FONT_FACE_REGEX = /@font-face {([\s\S]*?)}/gm;
var FONT_FAMILY_REGEX = /font-family: ['"](.*?)['"]/gm;
function extractFontStyles(allFontStyles) {
    var rules = getMatches(FONT_FACE_REGEX, allFontStyles);
    var fontStyles = {};
    rules.forEach(function (rule) {
        var fontFamily = getMatches(FONT_FAMILY_REGEX, rule)[0];
        var fontId = getFontId(fontFamily);
        if (!(fontId in fontStyles)) {
            fontStyles[fontId] = "";
        }
        fontStyles[fontId] += "@font-face {\n" + rule + "\n}\n\n";
    });
    return fontStyles;
}

var FONT_BASE_URL = "https://fonts.googleapis.com/css";
function getStylesheet(fonts, scripts, variants, previewsOnly) {
    return __awaiter(this, void 0, void 0, function () {
        var url, variantsStr, familiesStr, familyNamesConcat, downloadChars;
        return __generator(this, function (_a) {
            url = new URL(FONT_BASE_URL);
            variantsStr = variants.join(",");
            familiesStr = fonts.map(function (font) { return font.family + ":" + variantsStr; });
            url.searchParams.append("family", familiesStr.join("|"));
            url.searchParams.append("subset", scripts.join(","));
            if (previewsOnly) {
                familyNamesConcat = fonts.map(function (font) { return font.family; }).join("");
                downloadChars = familyNamesConcat
                    .split("")
                    .filter(function (char, pos, self) { return self.indexOf(char) === pos; })
                    .join("");
                url.searchParams.append("text", downloadChars);
            }
            url.searchParams.append("font-display", "swap");
            return [2, get(url.href)];
        });
    });
}

function loadFontPreviews(fonts, scripts, variants, selectorSuffix) {
    return __awaiter(this, void 0, void 0, function () {
        var fontsArray, fontsToFetch, response, fontStyles;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fontsArray = Array.from(fonts.values());
                    fontsToFetch = fontsArray
                        .map(function (font) { return font.id; })
                        .filter(function (fontId) { return !stylesheetExists(fontId); });
                    fontsToFetch.forEach(function (fontId) { return createStylesheet(fontId, true); });
                    return [4, getStylesheet(fontsArray, scripts, variants, true)];
                case 1:
                    response = _a.sent();
                    fontStyles = extractFontStyles(response);
                    fontsArray.forEach(function (font) {
                        applyFontPreview(font, selectorSuffix);
                        if (fontsToFetch.includes(font.id)) {
                            if (!(font.id in fontStyles)) {
                                console.error("Missing styles for font \"" + font.family + "\" (fontId \"" + font.id + "\") in Google Fonts response");
                                return;
                            }
                            fillStylesheet(font.id, fontStyles[font.id]);
                        }
                    });
                    return [2];
            }
        });
    });
}
function loadActiveFont(font, previousFontFamily, scripts, variants, selectorSuffix) {
    return __awaiter(this, void 0, void 0, function () {
        var fontStyle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!stylesheetExists(font.id, false)) return [3, 1];
                    applyActiveFont(font, previousFontFamily, selectorSuffix);
                    return [3, 3];
                case 1:
                    if (stylesheetExists(font.id, true)) {
                        setStylesheetType(font.id, false);
                    }
                    else {
                        createStylesheet(font.id, false);
                    }
                    return [4, getStylesheet([font], scripts, variants, false)];
                case 2:
                    fontStyle = _a.sent();
                    applyActiveFont(font, previousFontFamily, selectorSuffix);
                    fillStylesheet(font.id, fontStyle);
                    _a.label = 3;
                case 3: return [2];
            }
        });
    });
}

var FONT_FAMILY_DEFAULT = "Open Sans";
var OPTIONS_DEFAULTS = {
    pickerId: "",
    families: [],
    categories: [],
    scripts: ["latin"],
    variants: ["regular"],
    filter: function () { return true; },
    limit: 50,
    sort: "alphabet",
};

var FontManager = (function () {
    function FontManager(apiKey, defaultFamily, _a, onChange) {
        if (defaultFamily === void 0) { defaultFamily = FONT_FAMILY_DEFAULT; }
        var _b = _a.pickerId, pickerId = _b === void 0 ? OPTIONS_DEFAULTS.pickerId : _b, _c = _a.families, families = _c === void 0 ? OPTIONS_DEFAULTS.families : _c, _d = _a.categories, categories = _d === void 0 ? OPTIONS_DEFAULTS.categories : _d, _e = _a.scripts, scripts = _e === void 0 ? OPTIONS_DEFAULTS.scripts : _e, _f = _a.variants, variants = _f === void 0 ? OPTIONS_DEFAULTS.variants : _f, _g = _a.filter, filter = _g === void 0 ? OPTIONS_DEFAULTS.filter : _g, _h = _a.limit, limit = _h === void 0 ? OPTIONS_DEFAULTS.limit : _h, _j = _a.sort, sort = _j === void 0 ? OPTIONS_DEFAULTS.sort : _j;
        if (onChange === void 0) { onChange = function () { }; }
        this.fonts = new Map();
        validatePickerId(pickerId);
        this.selectorSuffix = pickerId ? "-" + pickerId : "";
        this.apiKey = apiKey;
        this.options = {
            pickerId: pickerId,
            families: families,
            categories: categories,
            scripts: scripts,
            variants: variants,
            filter: filter,
            limit: limit,
            sort: sort,
        };
        this.onChange = onChange;
        this.addFont(defaultFamily, false);
        this.setActiveFont(defaultFamily, false);
    }
    FontManager.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fonts, _loop_1, this_1, i, state_1, fontsToLoad;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, getFontList(this.apiKey)];
                    case 1:
                        fonts = _a.sent();
                        _loop_1 = function (i) {
                            var font = fonts[i];
                            if (this_1.fonts.size >= this_1.options.limit) {
                                return "break";
                            }
                            if (!this_1.fonts.has(font.family) &&
                                (this_1.options.families.length === 0 || this_1.options.families.includes(font.family)) &&
                                (this_1.options.categories.length === 0 || this_1.options.categories.includes(font.category)) &&
                                this_1.options.scripts.every(function (script) { return font.scripts.includes(script); }) &&
                                this_1.options.variants.every(function (variant) { return font.variants.includes(variant); }) &&
                                this_1.options.filter(font) === true) {
                                this_1.fonts.set(font.family, font);
                            }
                        };
                        this_1 = this;
                        for (i = 0; i < fonts.length; i += 1) {
                            state_1 = _loop_1(i);
                            if (state_1 === "break")
                                break;
                        }
                        fontsToLoad = new Map(this.fonts);
                        fontsToLoad["delete"](this.activeFontFamily);
                        loadFontPreviews(fontsToLoad, this.options.scripts, this.options.variants, this.selectorSuffix);
                        return [2, this.fonts];
                }
            });
        });
    };
    FontManager.prototype.getFonts = function () {
        return this.fonts;
    };
    FontManager.prototype.addFont = function (fontFamily, downloadPreview) {
        if (downloadPreview === void 0) { downloadPreview = true; }
        var font = {
            family: fontFamily,
            id: getFontId(fontFamily),
        };
        this.fonts.set(fontFamily, font);
        if (downloadPreview) {
            var fontMap = new Map();
            fontMap.set(fontFamily, font);
            loadFontPreviews(fontMap, this.options.scripts, this.options.variants, this.selectorSuffix);
        }
    };
    FontManager.prototype.removeFont = function (fontFamily) {
        this.fonts["delete"](fontFamily);
    };
    FontManager.prototype.getActiveFont = function () {
        var activeFont = this.fonts.get(this.activeFontFamily);
        if (!activeFont) {
            throw Error("Cannot get active font: \"" + this.activeFontFamily + "\" is not in the font list");
        }
        else {
            return activeFont;
        }
    };
    FontManager.prototype.setActiveFont = function (fontFamily, runOnChange) {
        var _this = this;
        if (runOnChange === void 0) { runOnChange = true; }
        var previousFontFamily = this.activeFontFamily;
        var activeFont = this.fonts.get(fontFamily);
        if (!activeFont) {
            throw Error("Cannot update active font: \"" + fontFamily + "\" is not in the font list");
        }
        this.activeFontFamily = fontFamily;
        loadActiveFont(activeFont, previousFontFamily, this.options.scripts, this.options.variants, this.selectorSuffix).then(function () {
            if (runOnChange) {
                _this.onChange(activeFont);
            }
        });
    };
    FontManager.prototype.setOnChange = function (onChange) {
        this.onChange = onChange;
    };
    return FontManager;
}());




/***/ }),

/***/ "./node_modules/charenc/charenc.js":
/*!*****************************************!*\
  !*** ./node_modules/charenc/charenc.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ "./node_modules/crypt/crypt.js":
/*!*************************************!*\
  !*** ./node_modules/crypt/crypt.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ "./node_modules/font-picker/dist/FontPicker.es.js":
/*!********************************************************!*\
  !*** ./node_modules/font-picker/dist/FontPicker.es.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @samuelmeuli/font-manager */ "./node_modules/@samuelmeuli/font-manager/dist/index.es.js");


var FontPicker = (function () {
    function FontPicker(apiKey, defaultFamily, _a, onChange) {
        if (defaultFamily === void 0) { defaultFamily = _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__["FONT_FAMILY_DEFAULT"]; }
        var _b = _a.pickerId, pickerId = _b === void 0 ? _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__["OPTIONS_DEFAULTS"].pickerId : _b, _c = _a.families, families = _c === void 0 ? _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__["OPTIONS_DEFAULTS"].families : _c, _d = _a.categories, categories = _d === void 0 ? _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__["OPTIONS_DEFAULTS"].categories : _d, _e = _a.scripts, scripts = _e === void 0 ? _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__["OPTIONS_DEFAULTS"].scripts : _e, _f = _a.variants, variants = _f === void 0 ? _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__["OPTIONS_DEFAULTS"].variants : _f, _g = _a.filter, filter = _g === void 0 ? _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__["OPTIONS_DEFAULTS"].filter : _g, _h = _a.limit, limit = _h === void 0 ? _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__["OPTIONS_DEFAULTS"].limit : _h, _j = _a.sort, sort = _j === void 0 ? _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__["OPTIONS_DEFAULTS"].sort : _j;
        if (onChange === void 0) { onChange = function () { }; }
        this.expanded = false;
        this.closeEventListener = this.closeEventListener.bind(this);
        this.toggleExpanded = this.toggleExpanded.bind(this);
        var options = {
            pickerId: pickerId,
            families: families,
            categories: categories,
            scripts: scripts,
            variants: variants,
            filter: filter,
            limit: limit,
            sort: sort,
        };
        this.fontManager = new _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__["FontManager"](apiKey, defaultFamily, options, onChange);
        this.generateUI(sort);
    }
    FontPicker.prototype.generateUI = function (sort) {
        var _this = this;
        var selectorSuffix = this.fontManager.selectorSuffix;
        var pickerId = "font-picker" + selectorSuffix;
        this.fontPickerDiv = document.getElementById(pickerId);
        if (!this.fontPickerDiv) {
            throw Error("Missing div with id=\"" + pickerId + "\"");
        }
        var dropdownButton = document.createElement("button");
        dropdownButton.classList.add("dropdown-button");
        dropdownButton.onclick = this.toggleExpanded;
        dropdownButton.onkeypress = this.toggleExpanded;
        dropdownButton.type = "button";
        this.fontPickerDiv.appendChild(dropdownButton);
        this.dropdownFamily = document.createElement("p");
        this.dropdownFamily.textContent = this.fontManager.getActiveFont().family;
        this.dropdownFamily.classList.add("dropdown-font-family");
        dropdownButton.appendChild(this.dropdownFamily);
        var dropdownIcon = document.createElement("p");
        dropdownIcon.classList.add("dropdown-icon", "loading");
        dropdownButton.appendChild(dropdownIcon);
        this.fontManager
            .init()
            .then(function (fontMap) {
            var fonts = Array.from(fontMap.values());
            if (sort === "alphabet") {
                fonts.sort(function (font1, font2) {
                    return font1.family.localeCompare(font2.family);
                });
            }
            _this.generateFontList(fonts);
            dropdownIcon.classList.replace("loading", "finished");
        })["catch"](function (err) {
            dropdownIcon.classList.replace("loading", "error");
            console.error("Error trying to fetch the list of available fonts");
            console.error(err);
        });
    };
    FontPicker.prototype.generateFontList = function (fonts) {
        var _this = this;
        this.ul = document.createElement("ul");
        this.ul.classList.add("font-list");
        fonts.forEach(function (font) {
            _this.addFontLi(font);
        });
        this.fontPickerDiv.appendChild(this.ul);
        var activeFontFamily = this.fontManager.getActiveFont().family;
        var activeFontId = Object(_samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__["getFontId"])(activeFontFamily);
        var fontButtonId = "font-button-" + activeFontId + this.fontManager.selectorSuffix;
        this.activeFontButton = document.getElementById(fontButtonId);
        if (this.activeFontButton) {
            this.activeFontButton.classList.add("active-font");
        }
        else {
            console.error("Could not find font button with ID (" + fontButtonId + ")");
        }
    };
    FontPicker.prototype.addFontLi = function (font, listIndex) {
        var _this = this;
        var fontId = Object(_samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__["getFontId"])(font.family);
        var li = document.createElement("li");
        li.classList.add("font-list-item");
        var fontButton = document.createElement("button");
        fontButton.type = "button";
        fontButton.id = "font-button-" + fontId + this.fontManager.selectorSuffix;
        fontButton.classList.add("font-button");
        fontButton.textContent = font.family;
        var onActivate = function () {
            _this.toggleExpanded();
            _this.setActiveFont(font.family);
        };
        fontButton.onclick = onActivate;
        fontButton.onkeypress = onActivate;
        li.appendChild(fontButton);
        if (listIndex) {
            this.ul.insertBefore(li, this.ul.children[listIndex]);
        }
        else {
            this.ul.appendChild(li);
        }
    };
    FontPicker.prototype.closeEventListener = function (e) {
        var targetEl = e.target;
        var fontPickerEl = document.getElementById("font-picker" + this.fontManager.selectorSuffix);
        while (true) {
            if (targetEl === fontPickerEl) {
                return;
            }
            if (targetEl.parentNode) {
                targetEl = targetEl.parentNode;
            }
            else {
                this.toggleExpanded();
                return;
            }
        }
    };
    FontPicker.prototype.toggleExpanded = function () {
        if (this.expanded) {
            this.expanded = false;
            this.fontPickerDiv.classList.remove("expanded");
            document.removeEventListener("click", this.closeEventListener);
        }
        else {
            this.expanded = true;
            this.fontPickerDiv.classList.add("expanded");
            document.addEventListener("click", this.closeEventListener);
        }
    };
    FontPicker.prototype.getFonts = function () {
        return this.fontManager.getFonts();
    };
    FontPicker.prototype.addFont = function (fontFamily, index) {
        if (Array.from(this.fontManager.getFonts().keys()).includes(fontFamily)) {
            throw Error("Did not add font to font picker: Font family \"" + fontFamily + "\" is already in the list");
        }
        this.fontManager.addFont(fontFamily, true);
        var font = this.fontManager.getFonts().get(fontFamily);
        if (font) {
            this.addFontLi(font, index);
        }
        else {
            console.error("Font \"" + fontFamily + "\" is missing in font list");
        }
    };
    FontPicker.prototype.removeFont = function (fontFamily) {
        this.fontManager.removeFont(fontFamily);
        var fontId = Object(_samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__["getFontId"])(fontFamily);
        var fontButton = document.getElementById("font-button-" + fontId + this.fontManager.selectorSuffix);
        if (fontButton) {
            var fontLi = fontButton.parentElement;
            fontButton.remove();
            if (fontLi) {
                fontLi.remove();
            }
        }
        else {
            throw Error("Could not remove font from font picker: Font family \"" + fontFamily + "\" is not in the list");
        }
    };
    FontPicker.prototype.getActiveFont = function () {
        return this.fontManager.getActiveFont();
    };
    FontPicker.prototype.setActiveFont = function (fontFamily) {
        this.fontManager.setActiveFont(fontFamily);
        var fontId = Object(_samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__["getFontId"])(fontFamily);
        this.dropdownFamily.textContent = fontFamily;
        if (this.activeFontButton) {
            this.activeFontButton.classList.remove("active-font");
            this.activeFontButton = document.getElementById("font-button-" + fontId + this.fontManager.selectorSuffix);
            this.activeFontButton.classList.add("active-font");
        }
        else {
            console.error("`activeFontButton` is undefined");
        }
    };
    FontPicker.prototype.setOnChange = function (onChange) {
        this.fontManager.setOnChange(onChange);
    };
    return FontPicker;
}());

/* harmony default export */ __webpack_exports__["default"] = (FontPicker);


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/jquery-mousewheel/jquery.mousewheel.js":
/*!*************************************************************!*\
  !*** ./node_modules/jquery-mousewheel/jquery.mousewheel.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( true ) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));


/***/ }),

/***/ "./node_modules/md5/md5.js":
/*!*********************************!*\
  !*** ./node_modules/md5/md5.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(/*! crypt */ "./node_modules/crypt/crypt.js"),
      utf8 = __webpack_require__(/*! charenc */ "./node_modules/charenc/charenc.js").utf8,
      isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js"),
      bin = __webpack_require__(/*! charenc */ "./node_modules/charenc/charenc.js").bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message) && message.constructor !== Uint8Array)
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ })

}]);
//# sourceMappingURL=0.prod.bundle.js.map