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
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _js_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _js_indexPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _js_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _js_toggleContrast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _js_obfuscateEmail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _js_appendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);








 // global

$(document).ready(function () {
  Object(_js_navigation__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_js_indexPage__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_js_date__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_js_toggleContrast__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_js_obfuscateEmail__WEBPACK_IMPORTED_MODULE_6__["default"])();

  if (_js_global__WEBPACK_IMPORTED_MODULE_1__["DOM"].classList.contains('contact')) {
    Object(_js_appendForm__WEBPACK_IMPORTED_MODULE_7__["default"])();
  }
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDDEN_CLASS", function() { return HIDDEN_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_ADDRESS", function() { return EMAIL_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOTE_DOMAIN", function() { return REMOTE_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOTE_SERVER", function() { return REMOTE_SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOTE_PATH", function() { return REMOTE_PATH; });
/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* global */
$('html').removeClass('no-js');
var DOM = document.querySelector('html');
var BODY = DOM.querySelector('body');
var HIDDEN_CLASS = 'hidden';
var EMAIL_ADDRESS = "studiomalarkeyuk@gmail.com";
var REMOTE_DOMAIN = "https://lharby.github.io/";
var REMOTE_SERVER = "https://slackwise.org.uk/sites/";
var REMOTE_PATH = "studio-malarkey";


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* navigation */



var navigation = function navigation() {
  var wrapper = 'nav-wrapper';
  var target = _global__WEBPACK_IMPORTED_MODULE_0__["DOM"].querySelector(".".concat(wrapper));
  var overlay = _global__WEBPACK_IMPORTED_MODULE_0__["DOM"].querySelector('.overlay');
  var trigger = _global__WEBPACK_IMPORTED_MODULE_0__["DOM"].querySelectorAll('.menu__toggle');
  var overlayOpenClass = 'overlay__open';
  var scrollLockClass = 'scroll-lock';

  _toConsumableArray(trigger).forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();

      if (item.classList.contains('menu__toggle--close')) {
        closeNavigation();
      } else {
        openNavigation();
      }
    });
  });

  overlay.addEventListener('click', function () {
    if (overlay.classList.contains(overlayOpenClass)) {
      closeNavigation();
    }
  });
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && overlay.classList.contains(overlayOpenClass)) {
      closeNavigation();
    }
  });

  var openNavigation = function openNavigation() {
    target.classList.add("".concat(wrapper, "--open"));
    _global__WEBPACK_IMPORTED_MODULE_0__["BODY"].classList.add(scrollLockClass);
    overlay.classList.add(overlayOpenClass);
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["enableScrollLock"])();
  };

  var closeNavigation = function closeNavigation() {
    target.classList.remove("".concat(wrapper, "--open"));
    _global__WEBPACK_IMPORTED_MODULE_0__["BODY"].classList.remove(scrollLockClass);
    overlay.classList.remove(overlayOpenClass);
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["disableScrollLock"])();
  };
};

/* harmony default export */ __webpack_exports__["default"] = (navigation);

/***/ }),
/* 4 */
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
/**
 * A bunch of utilities to check whether or not a symbol fits certain criteria.
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

var className = "doc-scroll-lock";
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
    htmlTag.style.position = "fixed";
    htmlTag.style.overflow = "hidden";
    htmlTag.style.width = "100%"; // Trigger event on target. You can listen for it using document.body.addEventListener("akqa.scrollLock:enable", callbackHere)
    // triggerCustomEvent(document.body, "akqa.scrollLock:enable");
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
    htmlTag.style.marginTop = "";
    htmlTag.style.position = "";
    htmlTag.style.overflow = "";
    htmlTag.style.width = ""; // Set the scroll position to what it was before

    window.scrollTo(scrollPosition.left, scrollTop); // Trigger event on target. You can listen for it using document.body.addEventListener("akqa.scrollLock:disable", callbackHere)
    // (document.body, "akqa.scrollLock:disable");
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

/***/ }),
/* 5 */
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

/* index page */


var indexPage = function indexPage() {
  var url = document.location.pathname.split('/');
  var primaryDir = url[1];
  var secondaryDir = url[2];
  var tertiaryDir = url[3];

  if (!primaryDir) {
    _global__WEBPACK_IMPORTED_MODULE_0__["DOM"].classList.add('index');
  } else if (tertiaryDir) {
    _global__WEBPACK_IMPORTED_MODULE_0__["DOM"].classList.add(primaryDir, secondaryDir, tertiaryDir);
  } else if (secondaryDir) {
    _global__WEBPACK_IMPORTED_MODULE_0__["DOM"].classList.add(primaryDir, secondaryDir);
  } else {
    _global__WEBPACK_IMPORTED_MODULE_0__["DOM"].classList.add(primaryDir);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (indexPage);

/***/ }),
/* 6 */
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

/* date function */


var date = function date() {
  var dateWrapper = _global__WEBPACK_IMPORTED_MODULE_0__["DOM"].querySelector('.date-wrapper');
  var getYear = new Date().getFullYear();
  dateWrapper.textContent = getYear;
};

/* harmony default export */ __webpack_exports__["default"] = (date);

/***/ }),
/* 7 */
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
/* 8 */
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

/* obfuscate email */


var obfuscateEmail = function obfuscateEmail() {
  var trigger = _global__WEBPACK_IMPORTED_MODULE_0__["DOM"].querySelectorAll('.email-address');
  trigger.forEach(function (item) {
    item.addEventListener('click', function () {
      item.setAttribute('href', "mailto:".concat(_global__WEBPACK_IMPORTED_MODULE_0__["EMAIL_ADDRESS"]));
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (obfuscateEmail);

/***/ }),
/* 9 */
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

/* append form */

var template = "\n    <form action=\"\" method=\"post\" class=\"form\">\n        <div class=\"form-control\">\n            <label class=\"el-4\" for=\"actual_name\">Name</label>\n            <input class=\"el-5\" type=\"text\" name=\"actual_name\" id=\"actual_name\">\n            <input name=\"name\" type=\"text\" id=\"name\" class=\"hidden\">\n        </div>\n        <div class=\"form-control\">\n            <label class=\"el-4\" for=\"email\">Email</label>\n            <input class=\"el-5\" type=\"text\" name=\"email\" id=\"email\">\n        </div>\n        <div class=\"form-control\">\n            <label class=\"el-4\" for=\"contact-no\">Contact number</label>\n            <input class=\"el-5\" type=\"contact-no\" id=\"contact-no\">\n        </div>\n        <div class=\"form-control\">\n            <label class=\"el-4\" for=\"comments\">Comments</label>\n            <textarea class=\"el-5\" name=\"comments\" id=\"comments\" rows=\"5\"></textarea>\n        </div>\n        <div class=\"form-control\">\n            <div class=\"el-4 mobile-hidden\"></div>\n            <div class=\"el-5\">\n                <button class=\"submit\">Submit</button>\n            </div>\n        </div>\n    </form>\n";

var appendForm = function appendForm() {
  var wrapper = _global__WEBPACK_IMPORTED_MODULE_0__["DOM"].querySelector('.form-wrapper');
  wrapper.innerHTML = template;
  var form = wrapper.querySelector('.form');
  _global__WEBPACK_IMPORTED_MODULE_0__["DOM"].addEventListener('click', function (event) {
    if (event.target.classList.contains('submit')) {
      event.preventDefault();
      form.setAttribute('action', "".concat(_global__WEBPACK_IMPORTED_MODULE_0__["REMOTE_SERVER"]).concat(_global__WEBPACK_IMPORTED_MODULE_0__["REMOTE_PATH"], "/includes/mailer.php"));
      form.submit();
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (appendForm);

/***/ })
/******/ ]);