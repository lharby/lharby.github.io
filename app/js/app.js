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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initDynamicFunctions", function() { return initDynamicFunctions; });
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_utils_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _js_utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _js_components_indexPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _js_components_entry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _js_components_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _js_components_loadIndexPageContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _js_components_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var _js_utils_toggleContrast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony import */ var _js_components_obfuscateEmail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var _js_components_appendForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12);
/* harmony import */ var _js_utils_getScrollbarWidth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13);
/* harmony import */ var _js_utils_lazyLoad__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14);
/* harmony import */ var _js_utils_randomColours__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15);
/* harmony import */ var _js_components_accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16);
/* harmony import */ var _js_components_postsArchive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(17);


















var initOnceFunctions = function initOnceFunctions() {
  Object(_js_utils_utils__WEBPACK_IMPORTED_MODULE_2__["siteResponsiveness"])();
  Object(_js_components_indexPage__WEBPACK_IMPORTED_MODULE_3__["indexPage"])();
  Object(_js_components_entry__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_js_components_loadIndexPageContent__WEBPACK_IMPORTED_MODULE_6__["loadIndexPageContent"])();
  Object(_js_components_navigation__WEBPACK_IMPORTED_MODULE_5__["navigation"])();
  Object(_js_components_date__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_js_utils_getScrollbarWidth__WEBPACK_IMPORTED_MODULE_11__["default"])();
  Object(_js_utils_toggleContrast__WEBPACK_IMPORTED_MODULE_8__["default"])();
  initDynamicFunctions();
};

var initDynamicFunctions = function initDynamicFunctions() {
  Object(_js_components_obfuscateEmail__WEBPACK_IMPORTED_MODULE_9__["default"])();

  if (!_js_utils_global__WEBPACK_IMPORTED_MODULE_1__["site"].isMobile) {
    Object(_js_utils_lazyLoad__WEBPACK_IMPORTED_MODULE_12__["setImageSource"])();
  }

  if (_js_utils_global__WEBPACK_IMPORTED_MODULE_1__["DOM"].classList.contains('high-contrast')) {
    Object(_js_utils_randomColours__WEBPACK_IMPORTED_MODULE_13__["setRandomColour"])();
  }

  if (_js_utils_global__WEBPACK_IMPORTED_MODULE_1__["WRAPPER"].classList.contains('contact')) {
    Object(_js_components_appendForm__WEBPACK_IMPORTED_MODULE_10__["default"])();
  }

  if (_js_utils_global__WEBPACK_IMPORTED_MODULE_1__["WRAPPER"].classList.contains('frequently-asked-questions')) {
    Object(_js_components_accordion__WEBPACK_IMPORTED_MODULE_14__["accordion"])();
  }

  if (_js_utils_global__WEBPACK_IMPORTED_MODULE_1__["WRAPPER"].classList.contains('posts-archive')) {
    Object(_js_components_postsArchive__WEBPACK_IMPORTED_MODULE_15__["postsArchive"])();
  }
}; // global


$(document).ready(function () {
  initOnceFunctions();
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BODY", function() { return BODY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WRAPPER", function() { return WRAPPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_WRAPPER", function() { return PAGE_WRAPPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDDEN_CLASS", function() { return HIDDEN_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISIBILITY_HIDDEN_CLASS", function() { return VISIBILITY_HIDDEN_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_CLASS", function() { return LOADING_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_ADDRESS", function() { return EMAIL_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOTE_DOMAIN", function() { return REMOTE_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOTE_SERVER", function() { return REMOTE_SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOTE_PATH", function() { return REMOTE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "site", function() { return site; });
/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* global */
var DOM = document.querySelector('html');
var BODY = DOM.querySelector('body');
var WRAPPER = DOM.querySelector('#wrapper');
var PAGE_WRAPPER = DOM.querySelector('#pageWrapper');
var HIDDEN_CLASS = 'hidden';
var LOADING_CLASS = 'loading';
var VISIBILITY_HIDDEN_CLASS = 'visibility-hidden';
var EMAIL_ADDRESS = "studiomalarkeyuk@gmail.com";
var REMOTE_DOMAIN = "https://lharby.github.io/";
var REMOTE_SERVER = "https://slackwise.org.uk/sites/";
var REMOTE_PATH = "studio-malarkey";
var site = {
  width: {
    small: 480,
    medium: 768,
    large: 992
  },
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  winWidth: window.innerWidth
};
DOM.classList.remove('no-js');
DOM.classList.remove('visibility-hidden'); // TODO move this to the wrapper, and also check the entry JS



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementScroll", function() { return getElementScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScrollLocked", function() { return isScrollLocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableScrollLock", function() { return enableScrollLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enable", function() { return enable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableScrollLock", function() { return disableScrollLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disable", function() { return disable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteResponsiveness", function() { return siteResponsiveness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChildNodes", function() { return removeChildNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToTop", function() { return scrollToTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAjaxLoading", function() { return setAjaxLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAjaxComplete", function() { return setAjaxComplete; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * A bunch of utilities.
 *
 */

/**
 * Find out whether or not the given argument is an element that would react somewhat normally to DOM-manipulations.
 *
 * @since 3.7.0
 * @param {*} element - The element to check.
 * @returns {boolean} `true` if the given argument is an element (or document, or window), and `false` otherwise.
 */

function isElement(element) {
  return element instanceof Element || element instanceof Document || element instanceof Window;
}
/**
 * Get the current scroll values of the given element (or window). Will return an object containing
 * "left" and "top" properties, which are set to the scroll values, or false if no compatible element
 * was given.
 *
 * @param {Element|Window} [element=window]
 * @returns {{ left: number, top: number } | boolean}
 */

function getElementScroll() {
  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

  if (isElement(element)) {
    if (element instanceof Window) {
      return {
        left: element.pageXOffset || document.documentElement.scrollLeft,
        top: element.pageYOffset || document.documentElement.scrollTop
      };
    } else {
      return {
        left: element.scrollX || element.scrollLeft,
        top: element.scrollY || element.scrollTop
      };
    }
  } else {
    return false;
  }
}
/*
 * Get the current state of the scroll lock. `true` if the scroll lock is enabled, otherwise `false`.
 *
 * @type {boolean}
 */

var className = 'doc-scroll-lock';
var scrollTop = 0;
var isScrollLocked = false;
/**
 * Enable the scroll lock.
 */

function enableScrollLock() {
  if (!isScrollLocked) {
    // Get scroll position
    var scrollPosition = getElementScroll(); // Reset scroll position

    window.scrollTo(scrollPosition.left, 0);
    var htmlTag = document.documentElement;
    htmlTag.classList.add(className);
    htmlTag.style.marginTop = "".concat(-scrollPosition.top, "px");
    htmlTag.style.marginLeft = 0;
    htmlTag.style.position = 'fixed';
    htmlTag.style.overflowY = 'hidden';
    htmlTag.style.width = '100%'; // Trigger event on target. You can listen for it using document.body.addEventListener("site.scrollLock:enable", callbackHere)
    // triggerCustomEvent(document.body, "site.scrollLock:enable");
    // Remember state

    isScrollLocked = true;
    scrollTop = scrollPosition.top;
  }
}
/**
 * @type {function}
 * @ignore
 * @deprecated
 */

var enable = enableScrollLock;
/**
 * Disable the scroll lock
 */

function disableScrollLock() {
  if (isScrollLocked) {
    var scrollPosition = getElementScroll();
    var htmlTag = document.documentElement;
    htmlTag.classList.remove(className);
    htmlTag.style.marginTop = '';
    htmlTag.style.marginLeft = '';
    htmlTag.style.position = '';
    htmlTag.style.overflowY = '';
    htmlTag.style.width = ''; // Set the scroll position to what it was before

    window.scrollTo(scrollPosition.left, scrollTop); // Trigger event on target. You can listen for it using document.body.addEventListener("site.scrollLock:disable", callbackHere)
    // (document.body, "site.scrollLock:disable");
    // Remember state

    isScrollLocked = false;
  }
}
/**
 * @type {function}
 * @ignore
 * @deprecated
 */

var disable = disableScrollLock;
/**
 * Site some global responsive site settings.
 *
 * @param {Element|Window} [element=window]
 * @returns {boolean}
 */

var siteResponsiveness = function siteResponsiveness() {
  if (_global__WEBPACK_IMPORTED_MODULE_0__["site"].winWidth >= _global__WEBPACK_IMPORTED_MODULE_0__["site"].width.large) {
    _global__WEBPACK_IMPORTED_MODULE_0__["site"].isDesktop = true;
  } else if (_global__WEBPACK_IMPORTED_MODULE_0__["site"].winWidth <= _global__WEBPACK_IMPORTED_MODULE_0__["site"].width.large && _global__WEBPACK_IMPORTED_MODULE_0__["site"].winWidth >= _global__WEBPACK_IMPORTED_MODULE_0__["site"].width.medium) {
    _global__WEBPACK_IMPORTED_MODULE_0__["site"].isTablet = true;
  } else {
    _global__WEBPACK_IMPORTED_MODULE_0__["site"].isMobile = true;
  }
};
var removeChildNodes = function removeChildNodes(elem) {
  elem.replaceChildren();
};
var scrollToTop = function scrollToTop() {
  _global__WEBPACK_IMPORTED_MODULE_0__["BODY"].scrollIntoView({
    behavior: 'smooth'
  });
};
/* Ajax loaders */

var loadingClass = 'loading';
var setAjaxLoading = function setAjaxLoading(elem) {
  elem = elem || _global__WEBPACK_IMPORTED_MODULE_0__["DOM"];
  elem.classList.add(loadingClass);
};
var setAjaxComplete = function setAjaxComplete(elem) {
  elem = elem || _global__WEBPACK_IMPORTED_MODULE_0__["DOM"];
  elem.classList.remove(loadingClass);
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexPage", function() { return indexPage; });
/* harmony import */ var _utils_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* index page */

var indexClass = 'index';

var indexPage = function indexPage() {
  var arrPaths = document.location.pathname.split('/');
  var primaryDir = arrPaths[1];
  var pathnames = arrPaths.filter(function (item) {
    return item !== '';
  });

  if (!primaryDir) {
    _utils_global__WEBPACK_IMPORTED_MODULE_0__["WRAPPER"].classList.add(indexClass);
  } else {
    var _WRAPPER$classList;

    (_WRAPPER$classList = _utils_global__WEBPACK_IMPORTED_MODULE_0__["WRAPPER"].classList).add.apply(_WRAPPER$classList, _toConsumableArray(pathnames));

    _utils_global__WEBPACK_IMPORTED_MODULE_0__["WRAPPER"].classList.remove(indexClass);
  }
};



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _utils_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* entry function */



var fadeOutClass = 'fade-out';

var entry = function entry() {
  var cookieIsSet = Object(_utils_cookies__WEBPACK_IMPORTED_MODULE_2__["getCookie"])('entry');
  var entryElem = document.querySelector('.entry');

  if (cookieIsSet) {
    entryElem.classList.add(_utils_global__WEBPACK_IMPORTED_MODULE_0__["HIDDEN_CLASS"], _utils_global__WEBPACK_IMPORTED_MODULE_0__["VISIBILITY_HIDDEN_CLASS"]);
    _utils_global__WEBPACK_IMPORTED_MODULE_0__["WRAPPER"].classList.remove(_utils_global__WEBPACK_IMPORTED_MODULE_0__["HIDDEN_CLASS"]);
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["disableScrollLock"])();
  } else {
    entryElem.classList.remove(_utils_global__WEBPACK_IMPORTED_MODULE_0__["HIDDEN_CLASS"], _utils_global__WEBPACK_IMPORTED_MODULE_0__["VISIBILITY_HIDDEN_CLASS"]);
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["enableScrollLock"])();
  }

  entryElem === null || entryElem === void 0 || entryElem.addEventListener('click', function (e) {
    e.preventDefault();
    entryElem.classList.add(fadeOutClass);
    _utils_global__WEBPACK_IMPORTED_MODULE_0__["WRAPPER"].classList.remove(_utils_global__WEBPACK_IMPORTED_MODULE_0__["HIDDEN_CLASS"]);
    Object(_utils_cookies__WEBPACK_IMPORTED_MODULE_2__["setCookie"])('entry', 1, 1);
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["disableScrollLock"])();
    entryElem.addEventListener("animationend", function () {
      entryElem.classList.add(_utils_global__WEBPACK_IMPORTED_MODULE_0__["VISIBILITY_HIDDEN_CLASS"], _utils_global__WEBPACK_IMPORTED_MODULE_0__["HIDDEN_CLASS"]);
      entryElem.classList.remove(fadeOutClass);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (entry);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCookie", function() { return deleteCookie; });
/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/
// TODO
// move this to a utils folder
function setCookie(name, value, days) {
  var expires = "";

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') c = c.substring(1, c.length);

    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}
function deleteCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return navigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openNavigation", function() { return openNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeNavigation", function() { return closeNavigation; });
/* harmony import */ var _utils_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* navigation */


var wrapper = 'nav-wrapper';
var target = _utils_global__WEBPACK_IMPORTED_MODULE_0__["DOM"].querySelector(".".concat(wrapper));
var overlay = _utils_global__WEBPACK_IMPORTED_MODULE_0__["DOM"].querySelector('.overlay');
var trigger = _utils_global__WEBPACK_IMPORTED_MODULE_0__["DOM"].querySelectorAll('.menu__toggle');
var navLinks = _utils_global__WEBPACK_IMPORTED_MODULE_0__["DOM"].querySelectorAll('.pages li a');
var overlayOpenClass = 'overlay__open';
var scrollLockClass = 'scroll-lock';
var isAjax = false;

var navigation = function navigation() {
  _toConsumableArray(trigger).forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();

      if (item.classList.contains('menu__toggle--close')) {
        isAjax = false;
        closeNavigation();
      } else {
        openNavigation();
      }
    });
  });

  overlay.addEventListener('click', function () {
    isAjax = false;

    if (overlay.classList.contains(overlayOpenClass)) {
      closeNavigation();
    }
  });
  window.addEventListener('keydown', function (event) {
    isAjax = false;

    if (event.key === 'Escape' && overlay.classList.contains(overlayOpenClass)) {
      closeNavigation();
    }
  });
};

navLinks.forEach(function (item) {
  item.addEventListener('click', function () {
    isAjax = true;
  });
});

var openNavigation = function openNavigation() {
  target.scrollTop = 0;
  target.classList.add("".concat(wrapper, "--open"));
  _utils_global__WEBPACK_IMPORTED_MODULE_0__["BODY"].classList.add(scrollLockClass);
  overlay.classList.add(overlayOpenClass);
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["enableScrollLock"])();
};

var closeNavigation = function closeNavigation() {
  target.classList.remove("".concat(wrapper, "--open"));
  _utils_global__WEBPACK_IMPORTED_MODULE_0__["BODY"].classList.remove(scrollLockClass);
  overlay.classList.remove(overlayOpenClass);
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["disableScrollLock"])();

  if (isAjax) {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["scrollToTop"])();
  }
};



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadIndexPageContent", function() { return loadIndexPageContent; });
/* harmony import */ var _utils_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* loadindexPageContent */




var url = document.location.pathname.split('/');
var primaryDir = url[1];
var indexClass = 'index';
var fadeInClass = 'fade-in';
var documentTitle;

var router = function router() {
  document.addEventListener('click', function (event) {
    var _link$getAttribute;

    var link = event.target.closest('a');

    if (link && (_link$getAttribute = link.getAttribute('href')) !== null && _link$getAttribute !== void 0 && _link$getAttribute.startsWith('/')) {
      event.preventDefault();
      event.stopPropagation();
      var href = link.getAttribute('href');
      var hrefName = href.substring(1);
      var arrHrefs = href.split('/').filter(function (item) {
        return item !== '';
      });
      _utils_global__WEBPACK_IMPORTED_MODULE_0__["BODY"].classList.add(_utils_global__WEBPACK_IMPORTED_MODULE_0__["LOADING_CLASS"]);

      if (href === '/') {
        hrefName = 'home';
        href = '/home';
      }

      fetch(href).then(function (res) {
        return res.text();
      }).then(function (html) {
        Object(_navigation__WEBPACK_IMPORTED_MODULE_2__["closeNavigation"])();
        _utils_global__WEBPACK_IMPORTED_MODULE_0__["WRAPPER"].removeAttribute('class');

        if (href !== '/home') {
          var _WRAPPER$classList;

          (_WRAPPER$classList = _utils_global__WEBPACK_IMPORTED_MODULE_0__["WRAPPER"].classList).add.apply(_WRAPPER$classList, _toConsumableArray(arrHrefs));
        } else {
          _utils_global__WEBPACK_IMPORTED_MODULE_0__["WRAPPER"].classList.add(indexClass);
        }

        updateContent(html);
        history.pushState({
          path: href
        }, documentTitle, "/".concat(hrefName));
        routerCallback();
      })["catch"](function (err) {
        console.log('Something went wrong.', err);
        _utils_global__WEBPACK_IMPORTED_MODULE_0__["BODY"].classList.remove(_utils_global__WEBPACK_IMPORTED_MODULE_0__["LOADING_CLASS"]);
      });
    } else {
      return;
    }
  });
};

var loadIndexPageContent = function loadIndexPageContent() {
  if (!primaryDir) {
    _utils_global__WEBPACK_IMPORTED_MODULE_0__["BODY"].classList.add(_utils_global__WEBPACK_IMPORTED_MODULE_0__["LOADING_CLASS"]);
    fetch('/home').then(function (res) {
      return res.text();
    }).then(function (html) {
      updateContent(html);
      router();
      routerCallback();
    })["catch"](function (err) {
      console.warn('Something went wrong.', err);
      _utils_global__WEBPACK_IMPORTED_MODULE_0__["BODY"].classList.remove(_utils_global__WEBPACK_IMPORTED_MODULE_0__["LOADING_CLASS"]);
    });
  } else {
    router();
  }
};

var updateContent = function updateContent(input) {
  _utils_global__WEBPACK_IMPORTED_MODULE_0__["PAGE_WRAPPER"].replaceChildren();
  var parser = new DOMParser();
  var doc = parser.parseFromString(input, 'text/html');
  var container = doc.querySelector('#container');
  _utils_global__WEBPACK_IMPORTED_MODULE_0__["PAGE_WRAPPER"].appendChild(container);
  _utils_global__WEBPACK_IMPORTED_MODULE_0__["PAGE_WRAPPER"].classList.add(fadeInClass);
  documentTitle = doc.querySelector('title').textContent;
};

var routerCallback = function routerCallback() {
  _utils_global__WEBPACK_IMPORTED_MODULE_0__["BODY"].classList.remove(_utils_global__WEBPACK_IMPORTED_MODULE_0__["LOADING_CLASS"]);
  document.title = documentTitle || document.title;
  Object(_app__WEBPACK_IMPORTED_MODULE_1__["initDynamicFunctions"])();
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["scrollToTop"])();
};



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* date function */


var date = function date() {
  var dateWrapper = _utils_global__WEBPACK_IMPORTED_MODULE_0__["DOM"].querySelector('.date-wrapper');
  var getYear = new Date().getFullYear();
  dateWrapper.textContent = getYear;
};

/* harmony default export */ __webpack_exports__["default"] = (date);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* toggle contrast function */


var toggleContrast = function toggleContrast() {
  var trigger = _global__WEBPACK_IMPORTED_MODULE_0__["DOM"].querySelector('.toggle-contrast');
  var contrastClass = 'high-contrast';
  var lowContrast = window.localStorage.getItem(contrastClass);
  lowContrast === '0' ? _global__WEBPACK_IMPORTED_MODULE_0__["DOM"].classList.remove(contrastClass) : null;
  trigger.addEventListener('click', function (event) {
    event.preventDefault();

    if (!_global__WEBPACK_IMPORTED_MODULE_0__["DOM"].classList.contains(contrastClass)) {
      _global__WEBPACK_IMPORTED_MODULE_0__["DOM"].classList.add(contrastClass);
      window.localStorage.removeItem(contrastClass);
    } else {
      _global__WEBPACK_IMPORTED_MODULE_0__["DOM"].classList.remove(contrastClass);
      window.localStorage.setItem(contrastClass, '0');
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (toggleContrast);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* obfuscate email */


var obfuscateEmail = function obfuscateEmail() {
  var trigger = _utils_global__WEBPACK_IMPORTED_MODULE_0__["DOM"].querySelectorAll('.email-address');
  trigger.forEach(function (item) {
    item.addEventListener('click', function () {
      item.setAttribute('href', "mailto:".concat(_utils_global__WEBPACK_IMPORTED_MODULE_0__["EMAIL_ADDRESS"]));
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (obfuscateEmail);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* append form */

var template = "\n    <form action=\"\" method=\"post\" class=\"form\">\n        <div class=\"form-control\">\n            <label class=\"el-4\" for=\"actual_name\">Name</label>\n            <input class=\"el-5\" type=\"text\" name=\"actual_name\" id=\"actual_name\">\n            <input name=\"name\" type=\"text\" id=\"name\" class=\"hidden\">\n        </div>\n        <div class=\"form-control\">\n            <label class=\"el-4\" for=\"email\">Email</label>\n            <input class=\"el-5\" type=\"text\" name=\"email\" id=\"email\">\n        </div>\n        <div class=\"form-control\">\n            <label class=\"el-4\" for=\"contact-no\">Contact number</label>\n            <input class=\"el-5\" type=\"text\" name=\"contact-no\" id=\"contact-no\">\n        </div>\n        <div class=\"form-control\">\n            <label class=\"el-4\" for=\"comments\">Comments</label>\n            <textarea class=\"el-5\" name=\"comments\" id=\"comments\" rows=\"5\"></textarea>\n        </div>\n        <div class=\"form-control\">\n            <div class=\"el-4 mobile-hidden\"></div>\n            <div class=\"el-5\">\n                <button class=\"submit\">Submit</button>\n            </div>\n        </div>\n    </form>\n";

var appendForm = function appendForm() {
  var wrapper = _utils_global__WEBPACK_IMPORTED_MODULE_0__["DOM"].querySelector('.form-wrapper');
  wrapper.innerHTML = template;
  var form = wrapper.querySelector('.form');
  _utils_global__WEBPACK_IMPORTED_MODULE_0__["DOM"].addEventListener('click', function (event) {
    if (event.target.classList.contains('submit')) {
      event.preventDefault();
      form.setAttribute('action', "".concat(_utils_global__WEBPACK_IMPORTED_MODULE_0__["REMOTE_SERVER"]).concat(_utils_global__WEBPACK_IMPORTED_MODULE_0__["REMOTE_PATH"], "/includes/mailer.php"));
      form.submit();
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (appendForm);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* scrollbar width function */
var getScrollBarWidth = function getScrollBarWidth() {
  return document.documentElement.style.setProperty('--scrollbar-width', window.innerWidth - document.documentElement.clientWidth + 'px');
};

/* harmony default export */ __webpack_exports__["default"] = (getScrollBarWidth);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImageSource", function() { return setImageSource; });
/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* lazyload function */
var images = document.querySelectorAll('#posts img');

var observeImages = function observeImages() {
  images.forEach(function (img) {
    observer.observe(img);
  });
};

var setImageSource = function setImageSource() {
  // TODO add null exception here. 
  // And better define the 500, 1280 params
  images = document.querySelectorAll('#posts img');
  images.forEach(function (item) {
    var newSrc = item.src.replace('500', '1280');
    item.setAttribute('data-src', newSrc);
  });
  observeImages();
};

var options = {
  rootMargin: '1px',
  threshold: 0.1
};

var lazyLoad = function lazyLoad(elements) {
  if (elements.length) {
    elements.forEach(function (item) {
      if (item.intersectionRatio > 0) {
        item.target.src = item.target.dataset.src;
        item.target.classList.add('loaded');
        observer.unobserve(item.target);
      }
    });
  }
};

var observer = new IntersectionObserver(lazyLoad, options);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRandomColour", function() { return setRandomColour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachClickEvent", function() { return attachClickEvent; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* random colours function */

var colours = ['#ee4800', '#60c600', '#00ffff', '#ff7f00', '#ff6ccc', '#848382', '#d2dd26'];

var setRandomColour = function setRandomColour() {
  var rndColour = Math.floor(Math.random() * colours.length);
  document.documentElement.style.setProperty('--selection-background', colours[rndColour]);
  console.log('%c %s', "background-color: ".concat(colours[rndColour], "; color: white"), "rndColour: ".concat(colours[rndColour]));
};

var attachClickEvent = function attachClickEvent() {
  var menuOpen = _global__WEBPACK_IMPORTED_MODULE_0__["DOM"].querySelector('.menu__toggle');
  var menuClose = _global__WEBPACK_IMPORTED_MODULE_0__["DOM"].querySelector('.menu__toggle--close');
  menuOpen.click();
  menuClose.click();
  console.log('attachClickEvent complete');
};



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accordion", function() { return accordion; });
/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* accordion function */
var accordion = function accordion() {
  var container = document.querySelector('.accordion');
  var trigger = container.querySelectorAll('.accordion__item');
  var openClass = 'open';
  trigger.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();

      if (item.classList.contains(openClass)) {
        item.classList.remove(openClass);
      } else {
        item.classList.add(openClass);
      }
    });
  });
};



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postsArchive", function() { return postsArchive; });
/* harmony import */ var _utils_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _utils_getPostTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* postsArchive function */



var API_KEY = "Quz8UcJXgTqT3zUdmoyoyn4nOAEHBZ5kVD1NwuKGDkQ0K3nogf";
var API_BASE_URL = "api.tumblr.com/v2/blog/";
var API_BLOG = "studiomalarkey.co.uk";
var parser = new DOMParser();
var doc;

var postsArchive = function postsArchive() {
  var wrapper = _utils_global__WEBPACK_IMPORTED_MODULE_0__["DOM"].querySelector('.tumblr-posts');
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["removeChildNodes"])(wrapper);
  var limit = 20;
  var options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  var retrieveMore = function retrieveMore(offset) {
    var url = new URL("https://".concat(API_BASE_URL).concat(API_BLOG, "/posts?offset=").concat(offset));
    url.searchParams.set('api_key', API_KEY);
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["setAjaxLoading"])();
    fetch(url, options).then(function (response) {
      return response.json();
    }).then(function (response) {
      if (response) {
        var _response$response, _response$response2;

        var posts = response === null || response === void 0 || (_response$response = response.response) === null || _response$response === void 0 ? void 0 : _response$response.posts;
        var totalPosts = response === null || response === void 0 || (_response$response2 = response.response) === null || _response$response2 === void 0 ? void 0 : _response$response2.total_posts;
        var postLength = posts.length;
        posts.forEach(function (item) {
          var _item$body;

          doc = parser.parseFromString((_item$body = item.body) !== null && _item$body !== void 0 ? _item$body : '', 'text/html');
          var type = Object(_utils_getPostTypes__WEBPACK_IMPORTED_MODULE_2__["getPostTypes"])(doc);

          if (wrapper) {
            var typeString = "el ".concat(type);
            var template = "<li class='".concat(typeString, "'><a href=").concat(item.post_url, " target='_blank'>").concat(item.body, "</a></li>");
            wrapper.insertAdjacentHTML('beforeend', template);
          }
        });
        /* 
        As long as our total no of posts is greater than our counter keep iterating over the posts
        */

        if (totalPosts >= offset && postLength !== 0) {
          retrieveMore(offset + limit);
        } else if (offset >= totalPosts) {
          /* 
          Once our counter is larger or the same size as
          the total number of posts, 
          */
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["setAjaxComplete"])();
        }
      } else {
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["setAjaxComplete"])();
      }
    })["catch"](function (err) {
      console.log("There was an error: ".concat(err));
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["setAjaxComplete"])();
    });
  };

  retrieveMore(0);
};



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostTypes", function() { return getPostTypes; });
/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/
var getPostTypes = function getPostTypes(elem) {
  var type;

  if (elem.querySelectorAll('video').length) {
    type = 'video';
  } else if (elem.querySelectorAll('.npf_link').length || elem.querySelectorAll('[data-provider]').length) {
    type = "video video-embed";
  } else if (elem.querySelectorAll('img').length) {
    type = 'image';
  } else if (elem.querySelectorAll('audio').length) {
    type = 'audio';
  } else if (elem.querySelectorAll('.npf_quote').length) {
    type = 'quote';
  } else if (elem.querySelectorAll('.npf_chat').length) {
    type = 'chat';
  } else {
    type = 'text';
  }

  return type;
};



/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map