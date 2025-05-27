(self["webpackChunkPTJCareUnit"] = self["webpackChunkPTJCareUnit"] || []).push([[179],{

/***/ 74822:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/stable/index.js
var stable = __webpack_require__(28594);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(35666);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(20144);
;// CONCATENATED MODULE: ./Assets/js/common/foundation.cms.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
 // Vue 2
// import { createApp } from 'vue' // Vue 3

var createAndMountApp = function createAndMountApp(component, el) {
  var parameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  // Vue 2
  var app = new vue_runtime_esm/* default */.ZP({
    el: el,
    render: function render(h) {
      return h(component, {
        props: parameters
      });
    }
  });

  // Vue 3
  // const app = createApp(component, parameters)
  // app.mount(el)

  return app;
};
var FoundationCms = /*#__PURE__*/function () {
  function FoundationCms() {
    _classCallCheck(this, FoundationCms);
  }
  _createClass(FoundationCms, null, [{
    key: "init",
    value: function init() {
      document.body.height = window.innerHeight;
      FoundationCms.initForms();
      FoundationCms.ready(function () {
        FoundationCms.initNavigation();
        FoundationCms.initHeroBlocks();
        FoundationCms.initMobileMenu();
        FoundationCms.initFooterLinks();
        FoundationCms.initNewsLists();
        FoundationCms.initFacebookBlocks();
        FoundationCms.initDebugWindow();
        FoundationCms.initCookieConsent();
        FoundationCms.initSmoothScroll();
        FoundationCms.loadTheme();

        // // handle popstate, to force refresh when paginating etc.
        // window.historyInitiated = true
        // window.addEventListener('popstate', () => {
        //   if (window.historyInitiated) {
        //     window.location.reload()
        //   }
        // })
      });
    }
  }, {
    key: "initForms",
    value: function initForms() {
      // convert json to formdata and append
      // __RequestVerificationToken key for CORS
      window.convertFormData = function (data, containerToken) {
        var formData = new FormData();
        var isAddedToken = false;
        Object.keys(data).forEach(function (key) {
          if (key === '__RequestVerificationToken') {
            isAddedToken = true;
          }
          formData.append(key, data[key]);
        });
        if (!isAddedToken) {
          if (containerToken) {
            formData.append('__RequestVerificationToken', document.querySelector(containerToken + ' input[name=__RequestVerificationToken]').value);
          } else {
            formData.append('__RequestVerificationToken', document.querySelector('input[name=__RequestVerificationToken]').value);
          }
        }
        return formData;
      };
      window.serializeObject = function (form) {
        // TODO: serializeArray was a jQuery method
        var datas = form.serializeArray();
        var jsonData = {};
        Object.keys(datas).forEach(function (d) {
          jsonData[datas[d].name] = datas[d].value;
        });
        return jsonData;
      };
    }
  }, {
    key: "initSmoothScroll",
    value: function initSmoothScroll() {
      var _document$querySelect;
      // smooth is css, so not backward compliant
      Array.from((_document$querySelect = document.querySelectorAll('a[href*=\\#]')) !== null && _document$querySelect !== void 0 ? _document$querySelect : []).forEach(function (el) {
        var elURL = null;
        if (el.getAttribute('href').startsWith('#')) {
          elURL = new URL("".concat(window.location.protocol) + "".concat(window.location.host) + "".concat(window.location.pathname, "/") + "".concat(el.getAttribute('href')));
        } else if (el.getAttribute('href').startsWith('/')) {
          elURL = new URL("".concat(window.location.protocol) + "".concat(window.location.host) + "".concat(el.getAttribute('href')));
        } else {
          elURL = new URL(el.getAttribute('href'));
        }
        var target = el.getAttribute('target');
        if (elURL.hostname === window.location.hostname && target !== '_blank') {
          el.addEventListener('click', function (e) {
            return FoundationCms.handleAnchorLinkClicked(el, e);
          });
        }
      });
      if (window.scrollY) {
        window.scroll(0, 0);
      }
      setTimeout(function () {
        return FoundationCms.scrollTo(window.location.hash);
      }, 0);
    }
  }, {
    key: "handleAnchorLinkClicked",
    value: function handleAnchorLinkClicked(el, e) {
      e.preventDefault();
      if (el.hash.length === 0 || el.href.slice(-1) === '#') return;
      var elURL = null;
      if (el.getAttribute('href').startsWith('#')) {
        elURL = new URL("".concat(window.location.protocol) + "".concat(window.location.host) + "".concat(window.location.pathname, "/") + "".concat(el.getAttribute('href')));
      } else if (el.getAttribute('href').startsWith('/')) {
        elURL = new URL("".concat(window.location.protocol) + "".concat(window.location.host) + "".concat(el.getAttribute('href')));
      } else {
        elURL = new URL(el.getAttribute('href'));
      }
      if (window.location.hostname === elURL.hostname && window.location.pathname.replace(/\/+$/, '') === elURL.pathname.replace(/\/+$/, '') && window.location.hash !== el.hash) {
        window.history.pushState(null, null, el.href);
        // window.location.hash = el.hash
      } else {
        window.location.href = el.href;
      }
      /* window.scroll(0, 0) */
      setTimeout(function () {
        return FoundationCms.scrollTo(el.hash);
      }, 0);
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(hash) {
      var target = document.getElementById(hash.replace('#', ''));
      if (!target) return;
      var headerBanner = document.querySelector('header[role="banner"]');
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var scrollToY = scrollTop + target.getBoundingClientRect().top - headerBanner.getBoundingClientRect().height;
      window.scroll(0, scrollToY);
    }
  }, {
    key: "initNavigation",
    value: function initNavigation() {
      var _document$querySelect2;
      var matchingHashNavigationItem = false;
      Array.from((_document$querySelect2 = document.querySelectorAll('a.navigation__item-category')) !== null && _document$querySelect2 !== void 0 ? _document$querySelect2 : []).forEach(function (el) {
        if (el.href === window.location.href) {
          el.setAttribute('aria-describedby', 'a11y-desc-current');
          matchingHashNavigationItem = true;
        }
      });
      if (matchingHashNavigationItem) {
        var _document$querySelect3;
        Array.from((_document$querySelect3 = document.querySelectorAll('.navigation__item-category')) !== null && _document$querySelect3 !== void 0 ? _document$querySelect3 : []).forEach(function (el) {
          if (el.href !== window.location.href) {
            el.removeAttribute('aria-describedby');
          }
        });
      }
      if (document.querySelectorAll('.navigation__item--has-mega-menu')) {
        __webpack_require__.e(/* import() */ 665).then(__webpack_require__.bind(__webpack_require__, 29665)).then(function (_ref) {
          var MegaMenu = _ref.default;
          var items = document.querySelectorAll('.navigation__item--has-mega-menu');
          var megaMenu = new MegaMenu({
            items: Array.from(items)
          });
          return megaMenu;
        }).catch(function () {
          return 'An error occurred while loading the component';
        });
      }
    }
  }, {
    key: "initMobileMenu",
    value: function initMobileMenu() {
      if (!!document.getElementById('offside-menu-mobile') && !!document.getElementById('open-offside-menu')) {
        __webpack_require__.e(/* import() */ 923).then(__webpack_require__.bind(__webpack_require__, 95923)).then(function (_ref2) {
          var MobileNavigation = _ref2.default;
          var mobileNavigation = new MobileNavigation({
            sideBarId: 'offside-menu-mobile',
            openSideBarId: 'open-offside-menu'
          });
          mobileNavigation.init();
          return mobileNavigation;
        }).catch(function () {
          return 'An error occurred while loading the component';
        });
      }
    }
  }, {
    key: "initFooterLinks",
    value: function initFooterLinks() {
      if (!!document.getElementById('footer__links') && !!document.getElementById('footer__links-toggle-button')) {
        __webpack_require__.e(/* import() */ 204).then(__webpack_require__.bind(__webpack_require__, 61204)).then(function (_ref3) {
          var MobileFooter = _ref3.default;
          var mobileFooter = new MobileFooter({
            menuId: 'footer__links',
            buttonId: 'footer__links-toggle-button'
          });
          mobileFooter.init();
          return mobileFooter;
        }).catch(function () {
          return 'An error occurred while loading the component';
        });
      }
    }
  }, {
    key: "initHeroBlocks",
    value: function initHeroBlocks() {
      var _document$querySelect4;
      var heroblocks = Array.from((_document$querySelect4 = document.querySelectorAll('.heroblock')) !== null && _document$querySelect4 !== void 0 ? _document$querySelect4 : []);
      if (heroblocks.length > 0) {
        Promise.all(/* import() */[__webpack_require__.e(216), __webpack_require__.e(309)]).then(__webpack_require__.bind(__webpack_require__, 8309)).then(function (_ref4) {
          var HeroBlock = _ref4.default;
          heroblocks.forEach(function (el) {
            var heroBlock = new HeroBlock(el);
            heroBlock.addScrollDetection();
          });
          return heroblocks;
        }).catch(function () {
          return 'An error occurred while loading the component';
        });
      }
    }
  }, {
    key: "initFacebookBlocks",
    value: function initFacebookBlocks() {
      var _document$querySelect5;
      var fbBlocks = Array.from((_document$querySelect5 = document.querySelectorAll('.facebook__iframe-container')) !== null && _document$querySelect5 !== void 0 ? _document$querySelect5 : []);
      if (fbBlocks.length > 0) {
        Promise.all(/* import() */[__webpack_require__.e(216), __webpack_require__.e(548)]).then(__webpack_require__.bind(__webpack_require__, 79548)).then(function (_ref5) {
          var FacebookBlock = _ref5.default;
          fbBlocks.forEach(function (el) {
            /* eslint-disable no-new */
            new FacebookBlock(el);
          });
          return fbBlocks;
        }).catch(function () {
          return 'An error occurred while loading the component';
        });
      }
    }
  }, {
    key: "initCookieConsent",
    value: function initCookieConsent() {
      Promise.all(/* import() */[__webpack_require__.e(216), __webpack_require__.e(418)]).then(__webpack_require__.bind(__webpack_require__, 24418)).then(function (_ref6) {
        var TastyCookieManager = _ref6.default;
        var manager = new TastyCookieManager();
        return manager;
      }).catch(function () {
        return 'An error occurred while loading the component';
      });
    }
  }, {
    key: "loadTheme",
    value: function loadTheme() {
      // return import('assets/js/themes/themes')
      //  .then(({ themes, accentColors }) => {
      //    let theme = themes[0]
      //    themes.forEach((x) => {
      //      if (document.body.classList.contains(x)) {
      //        theme = x
      //      }
      //    })

      //    let accentColor = accentColors[0]
      //    accentColors.forEach((x) => {
      //      if (document.body.classList.contains(x)) {
      //        accentColor = x
      //      }
      //    })

      //    import(`assets/scss/themes/${theme}_${accentColor}`)
      //    // .then(() => {
      //    //   return
      //    // })
      //    // .catch((error) => 
      //    //  `An error occurred while loading the theme stylesheet ${error}`)

      //    return null
      //  })
      //  .catch(() => 'An error occurred while loading the component')
    }
  }, {
    key: "initDebugWindow",
    value: function initDebugWindow() {
      var debugWindow = document.getElementById('debug-window');
      if (debugWindow) {
        FoundationCms.mountDebugWindowComponent(debugWindow);
      }
    }
  }, {
    key: "mountDebugWindowComponent",
    value: function mountDebugWindowComponent(debugWindow) {
      return Promise.all(/* import() */[__webpack_require__.e(216), __webpack_require__.e(581)]).then(__webpack_require__.bind(__webpack_require__, 66581)).then(function (_ref7) {
        var DebugWindow = _ref7.default;
        return createAndMountApp(DebugWindow, "#".concat(debugWindow.id));
      }).catch(function () {
        return 'An error occurred while loading the component';
      });
    }
  }, {
    key: "initNewsLists",
    value: function initNewsLists() {
      var moreNewsList = document.getElementById('news-list-page__more-news-list');
      if (moreNewsList) {
        FoundationCms.mountMoreNewsListComponent(moreNewsList);
      }
      var previousNewsList = document.getElementById('news-list-page__previous-news-list.vue');
      if (previousNewsList) {
        FoundationCms.mountPreviousNewsListComponent(previousNewsList);
      }
    }
  }, {
    key: "mountMoreNewsListComponent",
    value: function mountMoreNewsListComponent(moreNewsList) {
      return Promise.all(/* import() */[__webpack_require__.e(216), __webpack_require__.e(696)]).then(__webpack_require__.bind(__webpack_require__, 39696)).then(function (_ref8) {
        var FetchMoreNews = _ref8.default;
        return createAndMountApp(FetchMoreNews, "#".concat(moreNewsList.id), _objectSpread({}, moreNewsList.dataset));
      }).catch(function (error) {
        console.error('An error occurred while loading the component', error);
      });
    }
  }, {
    key: "mountPreviousNewsListComponent",
    value: function mountPreviousNewsListComponent(previousNewsList) {
      return Promise.all(/* import() */[__webpack_require__.e(216), __webpack_require__.e(662)]).then(__webpack_require__.bind(__webpack_require__, 65662)).then(function (_ref9) {
        var FetchPreviousNews = _ref9.default;
        return createAndMountApp(FetchPreviousNews, "#".concat(previousNewsList.id), _objectSpread({}, previousNewsList.dataset));
      }).catch(function (error) {
        console.error('An error occurred while loading the component', error);
      });
    }
  }, {
    key: "ready",
    value: function ready(fn) {
      if (document.readyState !== 'loading') {
        fn();
      } else {
        document.addEventListener('DOMContentLoaded', fn);
      }
    }
  }]);
  return FoundationCms;
}();

// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
var lazysizes = __webpack_require__(77090);
// EXTERNAL MODULE: ./node_modules/object-fit-images/dist/ofi.common-js.js
var ofi_common_js = __webpack_require__(96797);
var ofi_common_js_default = /*#__PURE__*/__webpack_require__.n(ofi_common_js);
// EXTERNAL MODULE: ./.modernizrrc.js
var _modernizrrc = __webpack_require__(52231);
var _modernizrrc_default = /*#__PURE__*/__webpack_require__.n(_modernizrrc);
;// CONCATENATED MODULE: ./Assets/js/components/details.js
function details_typeof(obj) { "@babel/helpers - typeof"; return details_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, details_typeof(obj); }
function details_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function details_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, details_toPropertyKey(descriptor.key), descriptor); } }
function details_createClass(Constructor, protoProps, staticProps) { if (protoProps) details_defineProperties(Constructor.prototype, protoProps); if (staticProps) details_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function details_toPropertyKey(arg) { var key = details_toPrimitive(arg, "string"); return details_typeof(key) === "symbol" ? key : String(key); }
function details_toPrimitive(input, hint) { if (details_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (details_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
 * ----------------------------------------------------------------------------
 * Details polyfill
 * ----------------------------------------------------------------------------
 */


/**
 * To detect you are in IE (for this case) by checking typeof(Event) which is
 * 'function' for all except IE where it is 'object'.
 * You can then safely polyfill the Event constructor using the approach above.
 * In IE11 it seems to be safe to set window.Event = CustomEvent.
 */
(function () {
  if (typeof window.Event === 'function') return; // If not IE

  function CustomEvent(event, params) {
    var params2 = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params2.bubbles, params2.cancelable, params2.detail);
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  window.Event = CustomEvent;
  window.CustomEvent = CustomEvent;
})();
var Details = /*#__PURE__*/function () {
  function Details() {
    details_classCallCheck(this, Details);
  }
  details_createClass(Details, null, [{
    key: "init",
    value: function init() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      Details.rebindEvents(elements);
    }
  }, {
    key: "handleDetailsClicked",
    value: function handleDetailsClicked(e) {
      var details = Details.getParents(e.currentTarget, 'details')[0];
      var summary = details.querySelector('summary');
      var summaryOrChild = e.target.tagName.toLowerCase() === 'summary' || !!Details.getParents(e.target, 'summary') && Details.getParents(e.target, 'summary').length > 0;
      if (!(_modernizrrc_default()).details && summaryOrChild) e.preventDefault();
      if (details.hasAttribute('open')) {
        if (!(_modernizrrc_default()).details && summaryOrChild) details.removeAttribute('open');
        summary.setAttribute('aria-expanded', 'false');
        Details.dispatchToggleEvent(details, summary, false, e);
      } else {
        if (!(_modernizrrc_default()).details && summaryOrChild) details.setAttribute('open', '');
        summary.setAttribute('aria-expanded', 'true');
        Details.dispatchToggleEvent(details, summary, true, e);
      }
    }
  }, {
    key: "dispatchToggleEvent",
    value: function dispatchToggleEvent(details, summary, open, e) {
      var event = new CustomEvent('details-toggled', {
        'detail': {
          originalEvent: e,
          details: details,
          summary: summary,
          open: open
        }
      });
      details.dispatchEvent(event);
    }
  }, {
    key: "rebindEvents",
    value: function rebindEvents() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var items = Array.prototype.slice.call(elements || document.querySelectorAll('details summary'));
      items.forEach(function (summaryElement) {
        summaryElement.removeEventListener('click', Details.handleDetailsClicked);
        summaryElement.addEventListener('click', Details.handleDetailsClicked);
        Details.ensureDefaultValuesIsSet(summaryElement);
      });
    }
  }, {
    key: "ensureDefaultValuesIsSet",
    value: function ensureDefaultValuesIsSet(summary) {
      var details = Details.getParents(summary, 'details')[0];
      var isOpen = details.hasAttribute('open');
      if (!summary.hasAttribute('role')) summary.setAttribute('role', 'button');
      if (!summary.hasAttribute('tabindex')) summary.setAttribute('tabindex', '0');
      summary.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
  }, {
    key: "getParents",
    value: function getParents(elem, selector) {
      var parents = [];
      var firstChar;
      if (selector) {
        firstChar = selector.charAt(0);
      }
      var elem2 = elem;
      while (elem2 && elem2 !== document) {
        elem2 = elem2.parentNode;
        if (!elem2 || elem2 === document) break;
        if (selector) {
          // If selector is a class
          if (firstChar === '.') {
            if (elem2.classList.contains(selector.substr(1))) {
              parents.push(elem2);
            }
          }

          // If selector is an ID
          if (firstChar === '#') {
            if (elem2.id === selector.substr(1)) {
              parents.push(elem2);
            }
          }

          // If selector is a data attribute
          if (firstChar === '[') {
            if (elem2.hasAttribute(selector.substr(1, selector.length - 1))) {
              parents.push(elem2);
            }
          }

          // If selector is a tag
          if (elem2.tagName.toLowerCase() === selector) {
            parents.push(elem2);
          }
        } else {
          parents.push(elem2);
        }
      }

      // Return parents if any exist
      if (parents.length === 0) {
        return null;
      }
      return parents;
    }
  }]);
  return Details;
}();

;// CONCATENATED MODULE: ./Assets/js/main.js





// import 'lazysizes/plugins/bgset/ls.bgset'


if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
      console.info('SW registered: ', registration);
    }).catch(function (registrationError) {
      console.info('SW registration failed: ', registrationError);
    });
  });
}
FoundationCms.init();
ofi_common_js_default()();
Details.init();

// Let the document know when the mouse is being used
document.body.addEventListener('mousedown', function () {
  document.body.classList.add('using-mouse');
});

// Re-enable focus styling when Tab is pressed
document.body.addEventListener('keydown', function (event) {
  if (event.keyCode === 9) {
    document.body.classList.remove('using-mouse');
    document.body.classList.add('using-keyboard');
  }
});

/***/ }),

/***/ 52231:
/***/ (function(module) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
;
(function (window) {
  var hadGlobal = ('Modernizr' in window);
  var oldGlobal = window.Modernizr;
  /*! modernizr 3.12.0 (Custom Build) | MIT *
  * https://modernizr.com/download/?-details-setclasses !*/
  !function (e, n, t, o) {
    function s(e, n) {
      return _typeof(e) === n;
    }
    function a() {
      return "function" != typeof t.createElement ? t.createElement(arguments[0]) : p ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
    }
    function i() {
      var e = t.body;
      return e || (e = a(p ? "svg" : "body"), e.fake = !0), e;
    }
    function l(e, n, o, s) {
      var l,
        r,
        d,
        f,
        p = "modernizr",
        u = a("div"),
        h = i();
      if (parseInt(o, 10)) for (; o--;) d = a("div"), d.id = s ? s[o] : p + (o + 1), u.appendChild(d);
      return l = a("style"), l.type = "text/css", l.id = "s" + p, (h.fake ? h : u).appendChild(l), h.appendChild(u), l.styleSheet ? l.styleSheet.cssText = e : l.appendChild(t.createTextNode(e)), u.id = p, h.fake && (h.style.background = "", h.style.overflow = "hidden", f = c.style.overflow, c.style.overflow = "hidden", c.appendChild(h)), r = n(u, e), h.fake && h.parentNode ? (h.parentNode.removeChild(h), c.style.overflow = f, c.offsetHeight) : u.parentNode.removeChild(u), !!r;
    }
    var r = [],
      d = {
        _version: "3.12.0",
        _config: {
          classPrefix: "",
          enableClasses: !0,
          enableJSClass: !0,
          usePrefixes: !0
        },
        _q: [],
        on: function on(e, n) {
          var t = this;
          setTimeout(function () {
            n(t[e]);
          }, 0);
        },
        addTest: function addTest(e, n, t) {
          r.push({
            name: e,
            fn: n,
            options: t
          });
        },
        addAsyncTest: function addAsyncTest(e) {
          r.push({
            name: null,
            fn: e
          });
        }
      },
      Modernizr = function Modernizr() {};
    Modernizr.prototype = d, Modernizr = new Modernizr();
    var f = [],
      c = t.documentElement,
      p = "svg" === c.nodeName.toLowerCase(),
      u = d.testStyles = l;
    Modernizr.addTest("details", function () {
      var e,
        n = a("details");
      return "open" in n && (u("#modernizr details{display:block}", function (t) {
        t.appendChild(n), n.innerHTML = "<summary>a</summary>b", e = n.offsetHeight, n.open = !0, e = e !== n.offsetHeight;
      }), e);
    }), function () {
      var e, n, t, o, a, i, l;
      for (var d in r) if (r.hasOwnProperty(d)) {
        if (e = [], n = r[d], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
        for (o = s(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) i = e[a], l = i.split("."), 1 === l.length ? Modernizr[l[0]] = o : (Modernizr[l[0]] && (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean) || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = o), f.push((o ? "" : "no-") + l.join("-"));
      }
    }(), function (e) {
      var n = c.className,
        t = Modernizr._config.classPrefix || "";
      if (p && (n = n.baseVal), Modernizr._config.enableJSClass) {
        var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
        n = n.replace(o, "$1" + t + "js$2");
      }
      Modernizr._config.enableClasses && (e.length > 0 && (n += " " + t + e.join(" " + t)), p ? c.className.baseVal = n : c.className = n);
    }(f), delete d.addTest, delete d.addAsyncTest;
    for (var h = 0; h < Modernizr._q.length; h++) Modernizr._q[h]();
    e.Modernizr = Modernizr;
  }(window, window, document);
  module.exports = window.Modernizr;
  if (hadGlobal) {
    window.Modernizr = oldGlobal;
  } else {
    delete window.Modernizr;
  }
})(window);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [216], function() { return __webpack_exec__(74822); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);