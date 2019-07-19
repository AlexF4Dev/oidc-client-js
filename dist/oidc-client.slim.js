var Oidc =
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
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Log = __webpack_require__(/*! ./src/Log.js */ "./src/Log.js");

var _OidcClient = __webpack_require__(/*! ./src/OidcClient.js */ "./src/OidcClient.js");

var _OidcClientSettings = __webpack_require__(/*! ./src/OidcClientSettings.js */ "./src/OidcClientSettings.js");

var _WebStorageStateStore = __webpack_require__(/*! ./src/WebStorageStateStore.js */ "./src/WebStorageStateStore.js");

var _InMemoryWebStorage = __webpack_require__(/*! ./src/InMemoryWebStorage.js */ "./src/InMemoryWebStorage.js");

var _UserManager = __webpack_require__(/*! ./src/UserManager.js */ "./src/UserManager.js");

var _AccessTokenEvents = __webpack_require__(/*! ./src/AccessTokenEvents.js */ "./src/AccessTokenEvents.js");

var _MetadataService = __webpack_require__(/*! ./src/MetadataService.js */ "./src/MetadataService.js");

var _CordovaPopupNavigator = __webpack_require__(/*! ./src/CordovaPopupNavigator.js */ "./src/CordovaPopupNavigator.js");

var _CordovaIFrameNavigator = __webpack_require__(/*! ./src/CordovaIFrameNavigator.js */ "./src/CordovaIFrameNavigator.js");

var _CheckSessionIFrame = __webpack_require__(/*! ./src/CheckSessionIFrame.js */ "./src/CheckSessionIFrame.js");

var _TokenRevocationClient = __webpack_require__(/*! ./src/TokenRevocationClient.js */ "./src/TokenRevocationClient.js");

var _SessionMonitor = __webpack_require__(/*! ./src/SessionMonitor.js */ "./src/SessionMonitor.js");

var _Global = __webpack_require__(/*! ./src/Global.js */ "./src/Global.js");

var _User = __webpack_require__(/*! ./src/User.js */ "./src/User.js");

exports.default = {
    Log: _Log.Log,
    OidcClient: _OidcClient.OidcClient,
    OidcClientSettings: _OidcClientSettings.OidcClientSettings,
    WebStorageStateStore: _WebStorageStateStore.WebStorageStateStore,
    InMemoryWebStorage: _InMemoryWebStorage.InMemoryWebStorage,
    UserManager: _UserManager.UserManager,
    AccessTokenEvents: _AccessTokenEvents.AccessTokenEvents,
    MetadataService: _MetadataService.MetadataService,
    CordovaPopupNavigator: _CordovaPopupNavigator.CordovaPopupNavigator,
    CordovaIFrameNavigator: _CordovaIFrameNavigator.CordovaIFrameNavigator,
    CheckSessionIFrame: _CheckSessionIFrame.CheckSessionIFrame,
    TokenRevocationClient: _TokenRevocationClient.TokenRevocationClient,
    SessionMonitor: _SessionMonitor.SessionMonitor,
    Global: _Global.Global,
    User: _User.User
}; // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

module.exports = exports['default'];

/***/ }),

/***/ "./jsrsasign/dist/jsrsasign.js":
/*!*************************************!*\
  !*** ./jsrsasign/dist/jsrsasign.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * jsrsasign(all) 8.0.12 (2018-04-22) (c) 2010-2018 Kenji Urushima | kjur.github.com/jsrsasign/license
 */

var navigator = {};
navigator.userAgent = false;

var window = {};

/*!
Copyright (c) 2011, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 2.9.0
*/
if (YAHOO === undefined) {
  var YAHOO = {};
}YAHOO.lang = { extend: function extend(g, h, f) {
    if (!h || !g) {
      throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
    }var d = function d() {};d.prototype = h.prototype;g.prototype = new d();g.prototype.constructor = g;g.superclass = h.prototype;if (h.prototype.constructor == Object.prototype.constructor) {
      h.prototype.constructor = h;
    }if (f) {
      var b;for (b in f) {
        g.prototype[b] = f[b];
      }var e = function e() {},
          c = ["toString", "valueOf"];try {
        if (/MSIE/.test(navigator.userAgent)) {
          e = function e(j, i) {
            for (b = 0; b < c.length; b = b + 1) {
              var l = c[b],
                  k = i[l];if (typeof k === "function" && k != Object.prototype[l]) {
                j[l] = k;
              }
            }
          };
        }
      } catch (a) {}e(g.prototype, f);
    }
  } };
/*! CryptoJS v3.1.2 core-fix.js
 * code.google.com/p/crypto-js
 * (c) 2009-2013 by Jeff Mott. All rights reserved.
 * code.google.com/p/crypto-js/wiki/License
 * THIS IS FIX of 'core.js' to fix Hmac issue.
 * https://code.google.com/p/crypto-js/issues/detail?id=84
 * https://crypto-js.googlecode.com/svn-history/r667/branches/3.x/src/core.js
 */
var CryptoJS = CryptoJS || function (e, g) {
  var a = {};var b = a.lib = {};var j = b.Base = function () {
    function n() {}return { extend: function extend(p) {
        n.prototype = this;var o = new n();if (p) {
          o.mixIn(p);
        }if (!o.hasOwnProperty("init")) {
          o.init = function () {
            o.$super.init.apply(this, arguments);
          };
        }o.init.prototype = o;o.$super = this;return o;
      }, create: function create() {
        var o = this.extend();o.init.apply(o, arguments);return o;
      }, init: function init() {}, mixIn: function mixIn(p) {
        for (var o in p) {
          if (p.hasOwnProperty(o)) {
            this[o] = p[o];
          }
        }if (p.hasOwnProperty("toString")) {
          this.toString = p.toString;
        }
      }, clone: function clone() {
        return this.init.prototype.extend(this);
      } };
  }();var l = b.WordArray = j.extend({ init: function init(o, n) {
      o = this.words = o || [];if (n != g) {
        this.sigBytes = n;
      } else {
        this.sigBytes = o.length * 4;
      }
    }, toString: function toString(n) {
      return (n || h).stringify(this);
    }, concat: function concat(t) {
      var q = this.words;var p = t.words;var n = this.sigBytes;var s = t.sigBytes;this.clamp();if (n % 4) {
        for (var r = 0; r < s; r++) {
          var o = p[r >>> 2] >>> 24 - r % 4 * 8 & 255;q[n + r >>> 2] |= o << 24 - (n + r) % 4 * 8;
        }
      } else {
        for (var r = 0; r < s; r += 4) {
          q[n + r >>> 2] = p[r >>> 2];
        }
      }this.sigBytes += s;return this;
    }, clamp: function clamp() {
      var o = this.words;var n = this.sigBytes;o[n >>> 2] &= 4294967295 << 32 - n % 4 * 8;o.length = e.ceil(n / 4);
    }, clone: function clone() {
      var n = j.clone.call(this);n.words = this.words.slice(0);return n;
    }, random: function random(p) {
      var o = [];for (var n = 0; n < p; n += 4) {
        o.push(e.random() * 4294967296 | 0);
      }return new l.init(o, p);
    } });var m = a.enc = {};var h = m.Hex = { stringify: function stringify(p) {
      var r = p.words;var o = p.sigBytes;var q = [];for (var n = 0; n < o; n++) {
        var s = r[n >>> 2] >>> 24 - n % 4 * 8 & 255;q.push((s >>> 4).toString(16));q.push((s & 15).toString(16));
      }return q.join("");
    }, parse: function parse(p) {
      var n = p.length;var q = [];for (var o = 0; o < n; o += 2) {
        q[o >>> 3] |= parseInt(p.substr(o, 2), 16) << 24 - o % 8 * 4;
      }return new l.init(q, n / 2);
    } };var d = m.Latin1 = { stringify: function stringify(q) {
      var r = q.words;var p = q.sigBytes;var n = [];for (var o = 0; o < p; o++) {
        var s = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;n.push(String.fromCharCode(s));
      }return n.join("");
    }, parse: function parse(p) {
      var n = p.length;var q = [];for (var o = 0; o < n; o++) {
        q[o >>> 2] |= (p.charCodeAt(o) & 255) << 24 - o % 4 * 8;
      }return new l.init(q, n);
    } };var c = m.Utf8 = { stringify: function stringify(n) {
      try {
        return decodeURIComponent(escape(d.stringify(n)));
      } catch (o) {
        throw new Error("Malformed UTF-8 data");
      }
    }, parse: function parse(n) {
      return d.parse(unescape(encodeURIComponent(n)));
    } };var i = b.BufferedBlockAlgorithm = j.extend({ reset: function reset() {
      this._data = new l.init();this._nDataBytes = 0;
    }, _append: function _append(n) {
      if (typeof n == "string") {
        n = c.parse(n);
      }this._data.concat(n);this._nDataBytes += n.sigBytes;
    }, _process: function _process(w) {
      var q = this._data;var x = q.words;var n = q.sigBytes;var t = this.blockSize;var v = t * 4;var u = n / v;if (w) {
        u = e.ceil(u);
      } else {
        u = e.max((u | 0) - this._minBufferSize, 0);
      }var s = u * t;var r = e.min(s * 4, n);if (s) {
        for (var p = 0; p < s; p += t) {
          this._doProcessBlock(x, p);
        }var o = x.splice(0, s);q.sigBytes -= r;
      }return new l.init(o, r);
    }, clone: function clone() {
      var n = j.clone.call(this);n._data = this._data.clone();return n;
    }, _minBufferSize: 0 });var f = b.Hasher = i.extend({ cfg: j.extend(), init: function init(n) {
      this.cfg = this.cfg.extend(n);this.reset();
    }, reset: function reset() {
      i.reset.call(this);this._doReset();
    }, update: function update(n) {
      this._append(n);this._process();return this;
    }, finalize: function finalize(n) {
      if (n) {
        this._append(n);
      }var o = this._doFinalize();return o;
    }, blockSize: 512 / 32, _createHelper: function _createHelper(n) {
      return function (p, o) {
        return new n.init(o).finalize(p);
      };
    }, _createHmacHelper: function _createHmacHelper(n) {
      return function (p, o) {
        return new k.HMAC.init(n, o).finalize(p);
      };
    } });var k = a.algo = {};return a;
}(Math);
/*
CryptoJS v3.1.2 x64-core-min.js
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function (g) {
  var a = CryptoJS,
      f = a.lib,
      e = f.Base,
      h = f.WordArray,
      a = a.x64 = {};a.Word = e.extend({ init: function init(b, c) {
      this.high = b;this.low = c;
    } });a.WordArray = e.extend({ init: function init(b, c) {
      b = this.words = b || [];this.sigBytes = c != g ? c : 8 * b.length;
    }, toX32: function toX32() {
      for (var b = this.words, c = b.length, a = [], d = 0; d < c; d++) {
        var e = b[d];a.push(e.high);a.push(e.low);
      }return h.create(a, this.sigBytes);
    }, clone: function clone() {
      for (var b = e.clone.call(this), c = b.words = this.words.slice(0), a = c.length, d = 0; d < a; d++) {
        c[d] = c[d].clone();
      }return b;
    } });
})();

/*
CryptoJS v3.1.2 enc-base64.js
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
  var h = CryptoJS,
      j = h.lib.WordArray;h.enc.Base64 = { stringify: function stringify(b) {
      var e = b.words,
          f = b.sigBytes,
          c = this._map;b.clamp();b = [];for (var a = 0; a < f; a += 3) {
        for (var d = (e[a >>> 2] >>> 24 - 8 * (a % 4) & 255) << 16 | (e[a + 1 >>> 2] >>> 24 - 8 * ((a + 1) % 4) & 255) << 8 | e[a + 2 >>> 2] >>> 24 - 8 * ((a + 2) % 4) & 255, g = 0; 4 > g && a + 0.75 * g < f; g++) {
          b.push(c.charAt(d >>> 6 * (3 - g) & 63));
        }
      }if (e = c.charAt(64)) for (; b.length % 4;) {
        b.push(e);
      }return b.join("");
    }, parse: function parse(b) {
      var e = b.length,
          f = this._map,
          c = f.charAt(64);c && (c = b.indexOf(c), -1 != c && (e = c));for (var c = [], a = 0, d = 0; d < e; d++) {
        if (d % 4) {
          var g = f.indexOf(b.charAt(d - 1)) << 2 * (d % 4),
              h = f.indexOf(b.charAt(d)) >>> 6 - 2 * (d % 4);c[a >>> 2] |= (g | h) << 24 - 8 * (a % 4);a++;
        }
      }return j.create(c, a);
    }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
})();

/*
CryptoJS v3.1.2 sha256-min.js
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function (k) {
  for (var g = CryptoJS, h = g.lib, v = h.WordArray, j = h.Hasher, h = g.algo, s = [], t = [], u = function u(q) {
    return 4294967296 * (q - (q | 0)) | 0;
  }, l = 2, b = 0; 64 > b;) {
    var d;a: {
      d = l;for (var w = k.sqrt(d), r = 2; r <= w; r++) {
        if (!(d % r)) {
          d = !1;break a;
        }
      }d = !0;
    }d && (8 > b && (s[b] = u(k.pow(l, 0.5))), t[b] = u(k.pow(l, 1 / 3)), b++);l++;
  }var n = [],
      h = h.SHA256 = j.extend({ _doReset: function _doReset() {
      this._hash = new v.init(s.slice(0));
    }, _doProcessBlock: function _doProcessBlock(q, h) {
      for (var a = this._hash.words, c = a[0], d = a[1], b = a[2], k = a[3], f = a[4], g = a[5], j = a[6], l = a[7], e = 0; 64 > e; e++) {
        if (16 > e) n[e] = q[h + e] | 0;else {
          var m = n[e - 15],
              p = n[e - 2];n[e] = ((m << 25 | m >>> 7) ^ (m << 14 | m >>> 18) ^ m >>> 3) + n[e - 7] + ((p << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10) + n[e - 16];
        }m = l + ((f << 26 | f >>> 6) ^ (f << 21 | f >>> 11) ^ (f << 7 | f >>> 25)) + (f & g ^ ~f & j) + t[e] + n[e];p = ((c << 30 | c >>> 2) ^ (c << 19 | c >>> 13) ^ (c << 10 | c >>> 22)) + (c & d ^ c & b ^ d & b);l = j;j = g;g = f;f = k + m | 0;k = b;b = d;d = c;c = m + p | 0;
      }a[0] = a[0] + c | 0;a[1] = a[1] + d | 0;a[2] = a[2] + b | 0;a[3] = a[3] + k | 0;a[4] = a[4] + f | 0;a[5] = a[5] + g | 0;a[6] = a[6] + j | 0;a[7] = a[7] + l | 0;
    }, _doFinalize: function _doFinalize() {
      var d = this._data,
          b = d.words,
          a = 8 * this._nDataBytes,
          c = 8 * d.sigBytes;
      b[c >>> 5] |= 128 << 24 - c % 32;b[(c + 64 >>> 9 << 4) + 14] = k.floor(a / 4294967296);b[(c + 64 >>> 9 << 4) + 15] = a;d.sigBytes = 4 * b.length;this._process();return this._hash;
    }, clone: function clone() {
      var b = j.clone.call(this);b._hash = this._hash.clone();return b;
    } });g.SHA256 = j._createHelper(h);g.HmacSHA256 = j._createHmacHelper(h);
})(Math);

/*
CryptoJS v3.1.2 sha512-min.js
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
  function a() {
    return d.create.apply(d, arguments);
  }for (var n = CryptoJS, r = n.lib.Hasher, e = n.x64, d = e.Word, T = e.WordArray, e = n.algo, ea = [a(1116352408, 3609767458), a(1899447441, 602891725), a(3049323471, 3964484399), a(3921009573, 2173295548), a(961987163, 4081628472), a(1508970993, 3053834265), a(2453635748, 2937671579), a(2870763221, 3664609560), a(3624381080, 2734883394), a(310598401, 1164996542), a(607225278, 1323610764), a(1426881987, 3590304994), a(1925078388, 4068182383), a(2162078206, 991336113), a(2614888103, 633803317), a(3248222580, 3479774868), a(3835390401, 2666613458), a(4022224774, 944711139), a(264347078, 2341262773), a(604807628, 2007800933), a(770255983, 1495990901), a(1249150122, 1856431235), a(1555081692, 3175218132), a(1996064986, 2198950837), a(2554220882, 3999719339), a(2821834349, 766784016), a(2952996808, 2566594879), a(3210313671, 3203337956), a(3336571891, 1034457026), a(3584528711, 2466948901), a(113926993, 3758326383), a(338241895, 168717936), a(666307205, 1188179964), a(773529912, 1546045734), a(1294757372, 1522805485), a(1396182291, 2643833823), a(1695183700, 2343527390), a(1986661051, 1014477480), a(2177026350, 1206759142), a(2456956037, 344077627), a(2730485921, 1290863460), a(2820302411, 3158454273), a(3259730800, 3505952657), a(3345764771, 106217008), a(3516065817, 3606008344), a(3600352804, 1432725776), a(4094571909, 1467031594), a(275423344, 851169720), a(430227734, 3100823752), a(506948616, 1363258195), a(659060556, 3750685593), a(883997877, 3785050280), a(958139571, 3318307427), a(1322822218, 3812723403), a(1537002063, 2003034995), a(1747873779, 3602036899), a(1955562222, 1575990012), a(2024104815, 1125592928), a(2227730452, 2716904306), a(2361852424, 442776044), a(2428436474, 593698344), a(2756734187, 3733110249), a(3204031479, 2999351573), a(3329325298, 3815920427), a(3391569614, 3928383900), a(3515267271, 566280711), a(3940187606, 3454069534), a(4118630271, 4000239992), a(116418474, 1914138554), a(174292421, 2731055270), a(289380356, 3203993006), a(460393269, 320620315), a(685471733, 587496836), a(852142971, 1086792851), a(1017036298, 365543100), a(1126000580, 2618297676), a(1288033470, 3409855158), a(1501505948, 4234509866), a(1607167915, 987167468), a(1816402316, 1246189591)], v = [], w = 0; 80 > w; w++) {
    v[w] = a();
  }e = e.SHA512 = r.extend({ _doReset: function _doReset() {
      this._hash = new T.init([new d.init(1779033703, 4089235720), new d.init(3144134277, 2227873595), new d.init(1013904242, 4271175723), new d.init(2773480762, 1595750129), new d.init(1359893119, 2917565137), new d.init(2600822924, 725511199), new d.init(528734635, 4215389547), new d.init(1541459225, 327033209)]);
    }, _doProcessBlock: function _doProcessBlock(a, d) {
      for (var f = this._hash.words, F = f[0], e = f[1], n = f[2], r = f[3], G = f[4], H = f[5], I = f[6], f = f[7], w = F.high, J = F.low, X = e.high, K = e.low, Y = n.high, L = n.low, Z = r.high, M = r.low, $ = G.high, N = G.low, aa = H.high, O = H.low, ba = I.high, P = I.low, ca = f.high, Q = f.low, k = w, g = J, z = X, x = K, A = Y, y = L, U = Z, B = M, l = $, h = N, R = aa, C = O, S = ba, D = P, V = ca, E = Q, m = 0; 80 > m; m++) {
        var s = v[m];if (16 > m) var j = s.high = a[d + 2 * m] | 0,
            b = s.low = a[d + 2 * m + 1] | 0;else {
          var j = v[m - 15],
              b = j.high,
              p = j.low,
              j = (b >>> 1 | p << 31) ^ (b >>> 8 | p << 24) ^ b >>> 7,
              p = (p >>> 1 | b << 31) ^ (p >>> 8 | b << 24) ^ (p >>> 7 | b << 25),
              u = v[m - 2],
              b = u.high,
              c = u.low,
              u = (b >>> 19 | c << 13) ^ (b << 3 | c >>> 29) ^ b >>> 6,
              c = (c >>> 19 | b << 13) ^ (c << 3 | b >>> 29) ^ (c >>> 6 | b << 26),
              b = v[m - 7],
              W = b.high,
              t = v[m - 16],
              q = t.high,
              t = t.low,
              b = p + b.low,
              j = j + W + (b >>> 0 < p >>> 0 ? 1 : 0),
              b = b + c,
              j = j + u + (b >>> 0 < c >>> 0 ? 1 : 0),
              b = b + t,
              j = j + q + (b >>> 0 < t >>> 0 ? 1 : 0);s.high = j;s.low = b;
        }var W = l & R ^ ~l & S,
            t = h & C ^ ~h & D,
            s = k & z ^ k & A ^ z & A,
            T = g & x ^ g & y ^ x & y,
            p = (k >>> 28 | g << 4) ^ (k << 30 | g >>> 2) ^ (k << 25 | g >>> 7),
            u = (g >>> 28 | k << 4) ^ (g << 30 | k >>> 2) ^ (g << 25 | k >>> 7),
            c = ea[m],
            fa = c.high,
            da = c.low,
            c = E + ((h >>> 14 | l << 18) ^ (h >>> 18 | l << 14) ^ (h << 23 | l >>> 9)),
            q = V + ((l >>> 14 | h << 18) ^ (l >>> 18 | h << 14) ^ (l << 23 | h >>> 9)) + (c >>> 0 < E >>> 0 ? 1 : 0),
            c = c + t,
            q = q + W + (c >>> 0 < t >>> 0 ? 1 : 0),
            c = c + da,
            q = q + fa + (c >>> 0 < da >>> 0 ? 1 : 0),
            c = c + b,
            q = q + j + (c >>> 0 < b >>> 0 ? 1 : 0),
            b = u + T,
            s = p + s + (b >>> 0 < u >>> 0 ? 1 : 0),
            V = S,
            E = D,
            S = R,
            D = C,
            R = l,
            C = h,
            h = B + c | 0,
            l = U + q + (h >>> 0 < B >>> 0 ? 1 : 0) | 0,
            U = A,
            B = y,
            A = z,
            y = x,
            z = k,
            x = g,
            g = c + b | 0,
            k = q + s + (g >>> 0 < c >>> 0 ? 1 : 0) | 0;
      }J = F.low = J + g;F.high = w + k + (J >>> 0 < g >>> 0 ? 1 : 0);K = e.low = K + x;e.high = X + z + (K >>> 0 < x >>> 0 ? 1 : 0);L = n.low = L + y;n.high = Y + A + (L >>> 0 < y >>> 0 ? 1 : 0);M = r.low = M + B;r.high = Z + U + (M >>> 0 < B >>> 0 ? 1 : 0);N = G.low = N + h;G.high = $ + l + (N >>> 0 < h >>> 0 ? 1 : 0);O = H.low = O + C;H.high = aa + R + (O >>> 0 < C >>> 0 ? 1 : 0);P = I.low = P + D;
      I.high = ba + S + (P >>> 0 < D >>> 0 ? 1 : 0);Q = f.low = Q + E;f.high = ca + V + (Q >>> 0 < E >>> 0 ? 1 : 0);
    }, _doFinalize: function _doFinalize() {
      var a = this._data,
          d = a.words,
          f = 8 * this._nDataBytes,
          e = 8 * a.sigBytes;d[e >>> 5] |= 128 << 24 - e % 32;d[(e + 128 >>> 10 << 5) + 30] = Math.floor(f / 4294967296);d[(e + 128 >>> 10 << 5) + 31] = f;a.sigBytes = 4 * d.length;this._process();return this._hash.toX32();
    }, clone: function clone() {
      var a = r.clone.call(this);a._hash = this._hash.clone();return a;
    }, blockSize: 32 });n.SHA512 = r._createHelper(e);n.HmacSHA512 = r._createHmacHelper(e);
})();

/*
CryptoJS v3.1.2 sha384-min.js
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
  var c = CryptoJS,
      a = c.x64,
      b = a.Word,
      e = a.WordArray,
      a = c.algo,
      d = a.SHA512,
      a = a.SHA384 = d.extend({ _doReset: function _doReset() {
      this._hash = new e.init([new b.init(3418070365, 3238371032), new b.init(1654270250, 914150663), new b.init(2438529370, 812702999), new b.init(355462360, 4144912697), new b.init(1731405415, 4290775857), new b.init(2394180231, 1750603025), new b.init(3675008525, 1694076839), new b.init(1203062813, 3204075428)]);
    }, _doFinalize: function _doFinalize() {
      var a = d._doFinalize.call(this);a.sigBytes -= 16;return a;
    } });c.SHA384 = d._createHelper(a);c.HmacSHA384 = d._createHmacHelper(a);
})();

/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var b64pad = "=";function hex2b64(d) {
  var b;var e;var a = "";for (b = 0; b + 3 <= d.length; b += 3) {
    e = parseInt(d.substring(b, b + 3), 16);a += b64map.charAt(e >> 6) + b64map.charAt(e & 63);
  }if (b + 1 == d.length) {
    e = parseInt(d.substring(b, b + 1), 16);a += b64map.charAt(e << 2);
  } else {
    if (b + 2 == d.length) {
      e = parseInt(d.substring(b, b + 2), 16);a += b64map.charAt(e >> 2) + b64map.charAt((e & 3) << 4);
    }
  }if (b64pad) {
    while ((a.length & 3) > 0) {
      a += b64pad;
    }
  }return a;
}function b64tohex(f) {
  var d = "";var e;var b = 0;var c;var a;for (e = 0; e < f.length; ++e) {
    if (f.charAt(e) == b64pad) {
      break;
    }a = b64map.indexOf(f.charAt(e));if (a < 0) {
      continue;
    }if (b == 0) {
      d += int2char(a >> 2);c = a & 3;b = 1;
    } else {
      if (b == 1) {
        d += int2char(c << 2 | a >> 4);c = a & 15;b = 2;
      } else {
        if (b == 2) {
          d += int2char(c);d += int2char(a >> 2);c = a & 3;b = 3;
        } else {
          d += int2char(c << 2 | a >> 4);d += int2char(a & 15);b = 0;
        }
      }
    }
  }if (b == 1) {
    d += int2char(c << 2);
  }return d;
}function b64toBA(e) {
  var d = b64tohex(e);var c;var b = new Array();for (c = 0; 2 * c < d.length; ++c) {
    b[c] = parseInt(d.substring(2 * c, 2 * c + 2), 16);
  }return b;
};
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
var dbits;var canary = 244837814094590;var j_lm = (canary & 16777215) == 15715070;function BigInteger(e, d, f) {
  if (e != null) {
    if ("number" == typeof e) {
      this.fromNumber(e, d, f);
    } else {
      if (d == null && "string" != typeof e) {
        this.fromString(e, 256);
      } else {
        this.fromString(e, d);
      }
    }
  }
}function nbi() {
  return new BigInteger(null);
}function am1(f, a, b, e, h, g) {
  while (--g >= 0) {
    var d = a * this[f++] + b[e] + h;h = Math.floor(d / 67108864);b[e++] = d & 67108863;
  }return h;
}function am2(f, q, r, e, o, a) {
  var k = q & 32767,
      p = q >> 15;while (--a >= 0) {
    var d = this[f] & 32767;var g = this[f++] >> 15;var b = p * d + g * k;d = k * d + ((b & 32767) << 15) + r[e] + (o & 1073741823);o = (d >>> 30) + (b >>> 15) + p * g + (o >>> 30);r[e++] = d & 1073741823;
  }return o;
}function am3(f, q, r, e, o, a) {
  var k = q & 16383,
      p = q >> 14;while (--a >= 0) {
    var d = this[f] & 16383;var g = this[f++] >> 14;var b = p * d + g * k;d = k * d + ((b & 16383) << 14) + r[e] + o;o = (d >> 28) + (b >> 14) + p * g;r[e++] = d & 268435455;
  }return o;
}if (j_lm && navigator.appName == "Microsoft Internet Explorer") {
  BigInteger.prototype.am = am2;dbits = 30;
} else {
  if (j_lm && navigator.appName != "Netscape") {
    BigInteger.prototype.am = am1;dbits = 26;
  } else {
    BigInteger.prototype.am = am3;dbits = 28;
  }
}BigInteger.prototype.DB = dbits;BigInteger.prototype.DM = (1 << dbits) - 1;BigInteger.prototype.DV = 1 << dbits;var BI_FP = 52;BigInteger.prototype.FV = Math.pow(2, BI_FP);BigInteger.prototype.F1 = BI_FP - dbits;BigInteger.prototype.F2 = 2 * dbits - BI_FP;var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";var BI_RC = new Array();var rr, vv;rr = "0".charCodeAt(0);for (vv = 0; vv <= 9; ++vv) {
  BI_RC[rr++] = vv;
}rr = "a".charCodeAt(0);for (vv = 10; vv < 36; ++vv) {
  BI_RC[rr++] = vv;
}rr = "A".charCodeAt(0);for (vv = 10; vv < 36; ++vv) {
  BI_RC[rr++] = vv;
}function int2char(a) {
  return BI_RM.charAt(a);
}function intAt(b, a) {
  var d = BI_RC[b.charCodeAt(a)];return d == null ? -1 : d;
}function bnpCopyTo(b) {
  for (var a = this.t - 1; a >= 0; --a) {
    b[a] = this[a];
  }b.t = this.t;b.s = this.s;
}function bnpFromInt(a) {
  this.t = 1;this.s = a < 0 ? -1 : 0;if (a > 0) {
    this[0] = a;
  } else {
    if (a < -1) {
      this[0] = a + this.DV;
    } else {
      this.t = 0;
    }
  }
}function nbv(a) {
  var b = nbi();b.fromInt(a);return b;
}function bnpFromString(h, c) {
  var e;if (c == 16) {
    e = 4;
  } else {
    if (c == 8) {
      e = 3;
    } else {
      if (c == 256) {
        e = 8;
      } else {
        if (c == 2) {
          e = 1;
        } else {
          if (c == 32) {
            e = 5;
          } else {
            if (c == 4) {
              e = 2;
            } else {
              this.fromRadix(h, c);return;
            }
          }
        }
      }
    }
  }this.t = 0;this.s = 0;var g = h.length,
      d = false,
      f = 0;while (--g >= 0) {
    var a = e == 8 ? h[g] & 255 : intAt(h, g);if (a < 0) {
      if (h.charAt(g) == "-") {
        d = true;
      }continue;
    }d = false;if (f == 0) {
      this[this.t++] = a;
    } else {
      if (f + e > this.DB) {
        this[this.t - 1] |= (a & (1 << this.DB - f) - 1) << f;this[this.t++] = a >> this.DB - f;
      } else {
        this[this.t - 1] |= a << f;
      }
    }f += e;if (f >= this.DB) {
      f -= this.DB;
    }
  }if (e == 8 && (h[0] & 128) != 0) {
    this.s = -1;if (f > 0) {
      this[this.t - 1] |= (1 << this.DB - f) - 1 << f;
    }
  }this.clamp();if (d) {
    BigInteger.ZERO.subTo(this, this);
  }
}function bnpClamp() {
  var a = this.s & this.DM;while (this.t > 0 && this[this.t - 1] == a) {
    --this.t;
  }
}function bnToString(c) {
  if (this.s < 0) {
    return "-" + this.negate().toString(c);
  }var e;if (c == 16) {
    e = 4;
  } else {
    if (c == 8) {
      e = 3;
    } else {
      if (c == 2) {
        e = 1;
      } else {
        if (c == 32) {
          e = 5;
        } else {
          if (c == 4) {
            e = 2;
          } else {
            return this.toRadix(c);
          }
        }
      }
    }
  }var g = (1 << e) - 1,
      l,
      a = false,
      h = "",
      f = this.t;var j = this.DB - f * this.DB % e;if (f-- > 0) {
    if (j < this.DB && (l = this[f] >> j) > 0) {
      a = true;h = int2char(l);
    }while (f >= 0) {
      if (j < e) {
        l = (this[f] & (1 << j) - 1) << e - j;l |= this[--f] >> (j += this.DB - e);
      } else {
        l = this[f] >> (j -= e) & g;if (j <= 0) {
          j += this.DB;--f;
        }
      }if (l > 0) {
        a = true;
      }if (a) {
        h += int2char(l);
      }
    }
  }return a ? h : "0";
}function bnNegate() {
  var a = nbi();BigInteger.ZERO.subTo(this, a);return a;
}function bnAbs() {
  return this.s < 0 ? this.negate() : this;
}function bnCompareTo(b) {
  var d = this.s - b.s;if (d != 0) {
    return d;
  }var c = this.t;d = c - b.t;if (d != 0) {
    return this.s < 0 ? -d : d;
  }while (--c >= 0) {
    if ((d = this[c] - b[c]) != 0) {
      return d;
    }
  }return 0;
}function nbits(a) {
  var c = 1,
      b;if ((b = a >>> 16) != 0) {
    a = b;c += 16;
  }if ((b = a >> 8) != 0) {
    a = b;c += 8;
  }if ((b = a >> 4) != 0) {
    a = b;c += 4;
  }if ((b = a >> 2) != 0) {
    a = b;c += 2;
  }if ((b = a >> 1) != 0) {
    a = b;c += 1;
  }return c;
}function bnBitLength() {
  if (this.t <= 0) {
    return 0;
  }return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
}function bnpDLShiftTo(c, b) {
  var a;for (a = this.t - 1; a >= 0; --a) {
    b[a + c] = this[a];
  }for (a = c - 1; a >= 0; --a) {
    b[a] = 0;
  }b.t = this.t + c;b.s = this.s;
}function bnpDRShiftTo(c, b) {
  for (var a = c; a < this.t; ++a) {
    b[a - c] = this[a];
  }b.t = Math.max(this.t - c, 0);b.s = this.s;
}function bnpLShiftTo(j, e) {
  var b = j % this.DB;var a = this.DB - b;var g = (1 << a) - 1;var f = Math.floor(j / this.DB),
      h = this.s << b & this.DM,
      d;for (d = this.t - 1; d >= 0; --d) {
    e[d + f + 1] = this[d] >> a | h;h = (this[d] & g) << b;
  }for (d = f - 1; d >= 0; --d) {
    e[d] = 0;
  }e[f] = h;e.t = this.t + f + 1;e.s = this.s;e.clamp();
}function bnpRShiftTo(g, d) {
  d.s = this.s;var e = Math.floor(g / this.DB);if (e >= this.t) {
    d.t = 0;return;
  }var b = g % this.DB;var a = this.DB - b;var f = (1 << b) - 1;d[0] = this[e] >> b;for (var c = e + 1; c < this.t; ++c) {
    d[c - e - 1] |= (this[c] & f) << a;d[c - e] = this[c] >> b;
  }if (b > 0) {
    d[this.t - e - 1] |= (this.s & f) << a;
  }d.t = this.t - e;d.clamp();
}function bnpSubTo(d, f) {
  var e = 0,
      g = 0,
      b = Math.min(d.t, this.t);while (e < b) {
    g += this[e] - d[e];f[e++] = g & this.DM;g >>= this.DB;
  }if (d.t < this.t) {
    g -= d.s;while (e < this.t) {
      g += this[e];f[e++] = g & this.DM;g >>= this.DB;
    }g += this.s;
  } else {
    g += this.s;while (e < d.t) {
      g -= d[e];f[e++] = g & this.DM;g >>= this.DB;
    }g -= d.s;
  }f.s = g < 0 ? -1 : 0;if (g < -1) {
    f[e++] = this.DV + g;
  } else {
    if (g > 0) {
      f[e++] = g;
    }
  }f.t = e;f.clamp();
}function bnpMultiplyTo(c, e) {
  var b = this.abs(),
      f = c.abs();var d = b.t;e.t = d + f.t;while (--d >= 0) {
    e[d] = 0;
  }for (d = 0; d < f.t; ++d) {
    e[d + b.t] = b.am(0, f[d], e, d, 0, b.t);
  }e.s = 0;e.clamp();if (this.s != c.s) {
    BigInteger.ZERO.subTo(e, e);
  }
}function bnpSquareTo(d) {
  var a = this.abs();var b = d.t = 2 * a.t;while (--b >= 0) {
    d[b] = 0;
  }for (b = 0; b < a.t - 1; ++b) {
    var e = a.am(b, a[b], d, 2 * b, 0, 1);if ((d[b + a.t] += a.am(b + 1, 2 * a[b], d, 2 * b + 1, e, a.t - b - 1)) >= a.DV) {
      d[b + a.t] -= a.DV;d[b + a.t + 1] = 1;
    }
  }if (d.t > 0) {
    d[d.t - 1] += a.am(b, a[b], d, 2 * b, 0, 1);
  }d.s = 0;d.clamp();
}function bnpDivRemTo(n, h, g) {
  var w = n.abs();if (w.t <= 0) {
    return;
  }var k = this.abs();if (k.t < w.t) {
    if (h != null) {
      h.fromInt(0);
    }if (g != null) {
      this.copyTo(g);
    }return;
  }if (g == null) {
    g = nbi();
  }var d = nbi(),
      a = this.s,
      l = n.s;var v = this.DB - nbits(w[w.t - 1]);if (v > 0) {
    w.lShiftTo(v, d);k.lShiftTo(v, g);
  } else {
    w.copyTo(d);k.copyTo(g);
  }var p = d.t;var b = d[p - 1];if (b == 0) {
    return;
  }var o = b * (1 << this.F1) + (p > 1 ? d[p - 2] >> this.F2 : 0);var A = this.FV / o,
      z = (1 << this.F1) / o,
      x = 1 << this.F2;var u = g.t,
      s = u - p,
      f = h == null ? nbi() : h;d.dlShiftTo(s, f);if (g.compareTo(f) >= 0) {
    g[g.t++] = 1;g.subTo(f, g);
  }BigInteger.ONE.dlShiftTo(p, f);f.subTo(d, d);while (d.t < p) {
    d[d.t++] = 0;
  }while (--s >= 0) {
    var c = g[--u] == b ? this.DM : Math.floor(g[u] * A + (g[u - 1] + x) * z);if ((g[u] += d.am(0, c, g, s, 0, p)) < c) {
      d.dlShiftTo(s, f);g.subTo(f, g);while (g[u] < --c) {
        g.subTo(f, g);
      }
    }
  }if (h != null) {
    g.drShiftTo(p, h);if (a != l) {
      BigInteger.ZERO.subTo(h, h);
    }
  }g.t = p;g.clamp();if (v > 0) {
    g.rShiftTo(v, g);
  }if (a < 0) {
    BigInteger.ZERO.subTo(g, g);
  }
}function bnMod(b) {
  var c = nbi();this.abs().divRemTo(b, null, c);if (this.s < 0 && c.compareTo(BigInteger.ZERO) > 0) {
    b.subTo(c, c);
  }return c;
}function Classic(a) {
  this.m = a;
}function cConvert(a) {
  if (a.s < 0 || a.compareTo(this.m) >= 0) {
    return a.mod(this.m);
  } else {
    return a;
  }
}function cRevert(a) {
  return a;
}function cReduce(a) {
  a.divRemTo(this.m, null, a);
}function cMulTo(a, c, b) {
  a.multiplyTo(c, b);this.reduce(b);
}function cSqrTo(a, b) {
  a.squareTo(b);this.reduce(b);
}Classic.prototype.convert = cConvert;Classic.prototype.revert = cRevert;Classic.prototype.reduce = cReduce;Classic.prototype.mulTo = cMulTo;Classic.prototype.sqrTo = cSqrTo;function bnpInvDigit() {
  if (this.t < 1) {
    return 0;
  }var a = this[0];if ((a & 1) == 0) {
    return 0;
  }var b = a & 3;b = b * (2 - (a & 15) * b) & 15;b = b * (2 - (a & 255) * b) & 255;b = b * (2 - ((a & 65535) * b & 65535)) & 65535;b = b * (2 - a * b % this.DV) % this.DV;return b > 0 ? this.DV - b : -b;
}function Montgomery(a) {
  this.m = a;this.mp = a.invDigit();this.mpl = this.mp & 32767;this.mph = this.mp >> 15;this.um = (1 << a.DB - 15) - 1;this.mt2 = 2 * a.t;
}function montConvert(a) {
  var b = nbi();a.abs().dlShiftTo(this.m.t, b);b.divRemTo(this.m, null, b);if (a.s < 0 && b.compareTo(BigInteger.ZERO) > 0) {
    this.m.subTo(b, b);
  }return b;
}function montRevert(a) {
  var b = nbi();a.copyTo(b);this.reduce(b);return b;
}function montReduce(a) {
  while (a.t <= this.mt2) {
    a[a.t++] = 0;
  }for (var c = 0; c < this.m.t; ++c) {
    var b = a[c] & 32767;var d = b * this.mpl + ((b * this.mph + (a[c] >> 15) * this.mpl & this.um) << 15) & a.DM;b = c + this.m.t;a[b] += this.m.am(0, d, a, c, 0, this.m.t);while (a[b] >= a.DV) {
      a[b] -= a.DV;a[++b]++;
    }
  }a.clamp();a.drShiftTo(this.m.t, a);if (a.compareTo(this.m) >= 0) {
    a.subTo(this.m, a);
  }
}function montSqrTo(a, b) {
  a.squareTo(b);this.reduce(b);
}function montMulTo(a, c, b) {
  a.multiplyTo(c, b);this.reduce(b);
}Montgomery.prototype.convert = montConvert;Montgomery.prototype.revert = montRevert;Montgomery.prototype.reduce = montReduce;Montgomery.prototype.mulTo = montMulTo;Montgomery.prototype.sqrTo = montSqrTo;function bnpIsEven() {
  return (this.t > 0 ? this[0] & 1 : this.s) == 0;
}function bnpExp(h, j) {
  if (h > 4294967295 || h < 1) {
    return BigInteger.ONE;
  }var f = nbi(),
      a = nbi(),
      d = j.convert(this),
      c = nbits(h) - 1;d.copyTo(f);while (--c >= 0) {
    j.sqrTo(f, a);if ((h & 1 << c) > 0) {
      j.mulTo(a, d, f);
    } else {
      var b = f;f = a;a = b;
    }
  }return j.revert(f);
}function bnModPowInt(b, a) {
  var c;if (b < 256 || a.isEven()) {
    c = new Classic(a);
  } else {
    c = new Montgomery(a);
  }return this.exp(b, c);
}BigInteger.prototype.copyTo = bnpCopyTo;BigInteger.prototype.fromInt = bnpFromInt;BigInteger.prototype.fromString = bnpFromString;BigInteger.prototype.clamp = bnpClamp;BigInteger.prototype.dlShiftTo = bnpDLShiftTo;BigInteger.prototype.drShiftTo = bnpDRShiftTo;BigInteger.prototype.lShiftTo = bnpLShiftTo;BigInteger.prototype.rShiftTo = bnpRShiftTo;BigInteger.prototype.subTo = bnpSubTo;BigInteger.prototype.multiplyTo = bnpMultiplyTo;BigInteger.prototype.squareTo = bnpSquareTo;BigInteger.prototype.divRemTo = bnpDivRemTo;BigInteger.prototype.invDigit = bnpInvDigit;BigInteger.prototype.isEven = bnpIsEven;BigInteger.prototype.exp = bnpExp;BigInteger.prototype.toString = bnToString;BigInteger.prototype.negate = bnNegate;BigInteger.prototype.abs = bnAbs;BigInteger.prototype.compareTo = bnCompareTo;BigInteger.prototype.bitLength = bnBitLength;BigInteger.prototype.mod = bnMod;BigInteger.prototype.modPowInt = bnModPowInt;BigInteger.ZERO = nbv(0);BigInteger.ONE = nbv(1);
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
function bnClone() {
  var a = nbi();this.copyTo(a);return a;
}function bnIntValue() {
  if (this.s < 0) {
    if (this.t == 1) {
      return this[0] - this.DV;
    } else {
      if (this.t == 0) {
        return -1;
      }
    }
  } else {
    if (this.t == 1) {
      return this[0];
    } else {
      if (this.t == 0) {
        return 0;
      }
    }
  }return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
}function bnByteValue() {
  return this.t == 0 ? this.s : this[0] << 24 >> 24;
}function bnShortValue() {
  return this.t == 0 ? this.s : this[0] << 16 >> 16;
}function bnpChunkSize(a) {
  return Math.floor(Math.LN2 * this.DB / Math.log(a));
}function bnSigNum() {
  if (this.s < 0) {
    return -1;
  } else {
    if (this.t <= 0 || this.t == 1 && this[0] <= 0) {
      return 0;
    } else {
      return 1;
    }
  }
}function bnpToRadix(c) {
  if (c == null) {
    c = 10;
  }if (this.signum() == 0 || c < 2 || c > 36) {
    return "0";
  }var f = this.chunkSize(c);var e = Math.pow(c, f);var i = nbv(e),
      j = nbi(),
      h = nbi(),
      g = "";this.divRemTo(i, j, h);while (j.signum() > 0) {
    g = (e + h.intValue()).toString(c).substr(1) + g;j.divRemTo(i, j, h);
  }return h.intValue().toString(c) + g;
}function bnpFromRadix(m, h) {
  this.fromInt(0);if (h == null) {
    h = 10;
  }var f = this.chunkSize(h);var g = Math.pow(h, f),
      e = false,
      a = 0,
      l = 0;for (var c = 0; c < m.length; ++c) {
    var k = intAt(m, c);if (k < 0) {
      if (m.charAt(c) == "-" && this.signum() == 0) {
        e = true;
      }continue;
    }l = h * l + k;if (++a >= f) {
      this.dMultiply(g);this.dAddOffset(l, 0);a = 0;l = 0;
    }
  }if (a > 0) {
    this.dMultiply(Math.pow(h, a));this.dAddOffset(l, 0);
  }if (e) {
    BigInteger.ZERO.subTo(this, this);
  }
}function bnpFromNumber(f, e, h) {
  if ("number" == typeof e) {
    if (f < 2) {
      this.fromInt(1);
    } else {
      this.fromNumber(f, h);if (!this.testBit(f - 1)) {
        this.bitwiseTo(BigInteger.ONE.shiftLeft(f - 1), op_or, this);
      }if (this.isEven()) {
        this.dAddOffset(1, 0);
      }while (!this.isProbablePrime(e)) {
        this.dAddOffset(2, 0);if (this.bitLength() > f) {
          this.subTo(BigInteger.ONE.shiftLeft(f - 1), this);
        }
      }
    }
  } else {
    var d = new Array(),
        g = f & 7;d.length = (f >> 3) + 1;e.nextBytes(d);if (g > 0) {
      d[0] &= (1 << g) - 1;
    } else {
      d[0] = 0;
    }this.fromString(d, 256);
  }
}function bnToByteArray() {
  var b = this.t,
      c = new Array();c[0] = this.s;var e = this.DB - b * this.DB % 8,
      f,
      a = 0;if (b-- > 0) {
    if (e < this.DB && (f = this[b] >> e) != (this.s & this.DM) >> e) {
      c[a++] = f | this.s << this.DB - e;
    }while (b >= 0) {
      if (e < 8) {
        f = (this[b] & (1 << e) - 1) << 8 - e;f |= this[--b] >> (e += this.DB - 8);
      } else {
        f = this[b] >> (e -= 8) & 255;if (e <= 0) {
          e += this.DB;--b;
        }
      }if ((f & 128) != 0) {
        f |= -256;
      }if (a == 0 && (this.s & 128) != (f & 128)) {
        ++a;
      }if (a > 0 || f != this.s) {
        c[a++] = f;
      }
    }
  }return c;
}function bnEquals(b) {
  return this.compareTo(b) == 0;
}function bnMin(b) {
  return this.compareTo(b) < 0 ? this : b;
}function bnMax(b) {
  return this.compareTo(b) > 0 ? this : b;
}function bnpBitwiseTo(c, h, e) {
  var d,
      g,
      b = Math.min(c.t, this.t);for (d = 0; d < b; ++d) {
    e[d] = h(this[d], c[d]);
  }if (c.t < this.t) {
    g = c.s & this.DM;for (d = b; d < this.t; ++d) {
      e[d] = h(this[d], g);
    }e.t = this.t;
  } else {
    g = this.s & this.DM;for (d = b; d < c.t; ++d) {
      e[d] = h(g, c[d]);
    }e.t = c.t;
  }e.s = h(this.s, c.s);e.clamp();
}function op_and(a, b) {
  return a & b;
}function bnAnd(b) {
  var c = nbi();this.bitwiseTo(b, op_and, c);return c;
}function op_or(a, b) {
  return a | b;
}function bnOr(b) {
  var c = nbi();this.bitwiseTo(b, op_or, c);return c;
}function op_xor(a, b) {
  return a ^ b;
}function bnXor(b) {
  var c = nbi();this.bitwiseTo(b, op_xor, c);return c;
}function op_andnot(a, b) {
  return a & ~b;
}function bnAndNot(b) {
  var c = nbi();this.bitwiseTo(b, op_andnot, c);return c;
}function bnNot() {
  var b = nbi();for (var a = 0; a < this.t; ++a) {
    b[a] = this.DM & ~this[a];
  }b.t = this.t;b.s = ~this.s;return b;
}function bnShiftLeft(b) {
  var a = nbi();if (b < 0) {
    this.rShiftTo(-b, a);
  } else {
    this.lShiftTo(b, a);
  }return a;
}function bnShiftRight(b) {
  var a = nbi();if (b < 0) {
    this.lShiftTo(-b, a);
  } else {
    this.rShiftTo(b, a);
  }return a;
}function lbit(a) {
  if (a == 0) {
    return -1;
  }var b = 0;if ((a & 65535) == 0) {
    a >>= 16;b += 16;
  }if ((a & 255) == 0) {
    a >>= 8;b += 8;
  }if ((a & 15) == 0) {
    a >>= 4;b += 4;
  }if ((a & 3) == 0) {
    a >>= 2;b += 2;
  }if ((a & 1) == 0) {
    ++b;
  }return b;
}function bnGetLowestSetBit() {
  for (var a = 0; a < this.t; ++a) {
    if (this[a] != 0) {
      return a * this.DB + lbit(this[a]);
    }
  }if (this.s < 0) {
    return this.t * this.DB;
  }return -1;
}function cbit(a) {
  var b = 0;while (a != 0) {
    a &= a - 1;++b;
  }return b;
}function bnBitCount() {
  var c = 0,
      a = this.s & this.DM;for (var b = 0; b < this.t; ++b) {
    c += cbit(this[b] ^ a);
  }return c;
}function bnTestBit(b) {
  var a = Math.floor(b / this.DB);if (a >= this.t) {
    return this.s != 0;
  }return (this[a] & 1 << b % this.DB) != 0;
}function bnpChangeBit(c, b) {
  var a = BigInteger.ONE.shiftLeft(c);this.bitwiseTo(a, b, a);return a;
}function bnSetBit(a) {
  return this.changeBit(a, op_or);
}function bnClearBit(a) {
  return this.changeBit(a, op_andnot);
}function bnFlipBit(a) {
  return this.changeBit(a, op_xor);
}function bnpAddTo(d, f) {
  var e = 0,
      g = 0,
      b = Math.min(d.t, this.t);while (e < b) {
    g += this[e] + d[e];f[e++] = g & this.DM;g >>= this.DB;
  }if (d.t < this.t) {
    g += d.s;while (e < this.t) {
      g += this[e];f[e++] = g & this.DM;g >>= this.DB;
    }g += this.s;
  } else {
    g += this.s;while (e < d.t) {
      g += d[e];f[e++] = g & this.DM;g >>= this.DB;
    }g += d.s;
  }f.s = g < 0 ? -1 : 0;if (g > 0) {
    f[e++] = g;
  } else {
    if (g < -1) {
      f[e++] = this.DV + g;
    }
  }f.t = e;f.clamp();
}function bnAdd(b) {
  var c = nbi();this.addTo(b, c);return c;
}function bnSubtract(b) {
  var c = nbi();this.subTo(b, c);return c;
}function bnMultiply(b) {
  var c = nbi();this.multiplyTo(b, c);return c;
}function bnSquare() {
  var a = nbi();this.squareTo(a);return a;
}function bnDivide(b) {
  var c = nbi();this.divRemTo(b, c, null);return c;
}function bnRemainder(b) {
  var c = nbi();this.divRemTo(b, null, c);return c;
}function bnDivideAndRemainder(b) {
  var d = nbi(),
      c = nbi();this.divRemTo(b, d, c);return new Array(d, c);
}function bnpDMultiply(a) {
  this[this.t] = this.am(0, a - 1, this, 0, 0, this.t);++this.t;this.clamp();
}function bnpDAddOffset(b, a) {
  if (b == 0) {
    return;
  }while (this.t <= a) {
    this[this.t++] = 0;
  }this[a] += b;while (this[a] >= this.DV) {
    this[a] -= this.DV;if (++a >= this.t) {
      this[this.t++] = 0;
    }++this[a];
  }
}function NullExp() {}function nNop(a) {
  return a;
}function nMulTo(a, c, b) {
  a.multiplyTo(c, b);
}function nSqrTo(a, b) {
  a.squareTo(b);
}NullExp.prototype.convert = nNop;NullExp.prototype.revert = nNop;NullExp.prototype.mulTo = nMulTo;NullExp.prototype.sqrTo = nSqrTo;function bnPow(a) {
  return this.exp(a, new NullExp());
}function bnpMultiplyLowerTo(b, f, e) {
  var d = Math.min(this.t + b.t, f);e.s = 0;e.t = d;while (d > 0) {
    e[--d] = 0;
  }var c;for (c = e.t - this.t; d < c; ++d) {
    e[d + this.t] = this.am(0, b[d], e, d, 0, this.t);
  }for (c = Math.min(b.t, f); d < c; ++d) {
    this.am(0, b[d], e, d, 0, f - d);
  }e.clamp();
}function bnpMultiplyUpperTo(b, e, d) {
  --e;var c = d.t = this.t + b.t - e;d.s = 0;while (--c >= 0) {
    d[c] = 0;
  }for (c = Math.max(e - this.t, 0); c < b.t; ++c) {
    d[this.t + c - e] = this.am(e - c, b[c], d, 0, 0, this.t + c - e);
  }d.clamp();d.drShiftTo(1, d);
}function Barrett(a) {
  this.r2 = nbi();this.q3 = nbi();BigInteger.ONE.dlShiftTo(2 * a.t, this.r2);this.mu = this.r2.divide(a);this.m = a;
}function barrettConvert(a) {
  if (a.s < 0 || a.t > 2 * this.m.t) {
    return a.mod(this.m);
  } else {
    if (a.compareTo(this.m) < 0) {
      return a;
    } else {
      var b = nbi();a.copyTo(b);this.reduce(b);return b;
    }
  }
}function barrettRevert(a) {
  return a;
}function barrettReduce(a) {
  a.drShiftTo(this.m.t - 1, this.r2);if (a.t > this.m.t + 1) {
    a.t = this.m.t + 1;a.clamp();
  }this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);while (a.compareTo(this.r2) < 0) {
    a.dAddOffset(1, this.m.t + 1);
  }a.subTo(this.r2, a);while (a.compareTo(this.m) >= 0) {
    a.subTo(this.m, a);
  }
}function barrettSqrTo(a, b) {
  a.squareTo(b);this.reduce(b);
}function barrettMulTo(a, c, b) {
  a.multiplyTo(c, b);this.reduce(b);
}Barrett.prototype.convert = barrettConvert;Barrett.prototype.revert = barrettRevert;Barrett.prototype.reduce = barrettReduce;Barrett.prototype.mulTo = barrettMulTo;Barrett.prototype.sqrTo = barrettSqrTo;function bnModPow(q, f) {
  var o = q.bitLength(),
      h,
      b = nbv(1),
      v;if (o <= 0) {
    return b;
  } else {
    if (o < 18) {
      h = 1;
    } else {
      if (o < 48) {
        h = 3;
      } else {
        if (o < 144) {
          h = 4;
        } else {
          if (o < 768) {
            h = 5;
          } else {
            h = 6;
          }
        }
      }
    }
  }if (o < 8) {
    v = new Classic(f);
  } else {
    if (f.isEven()) {
      v = new Barrett(f);
    } else {
      v = new Montgomery(f);
    }
  }var p = new Array(),
      d = 3,
      s = h - 1,
      a = (1 << h) - 1;p[1] = v.convert(this);if (h > 1) {
    var A = nbi();v.sqrTo(p[1], A);while (d <= a) {
      p[d] = nbi();v.mulTo(A, p[d - 2], p[d]);d += 2;
    }
  }var l = q.t - 1,
      x,
      u = true,
      c = nbi(),
      y;o = nbits(q[l]) - 1;while (l >= 0) {
    if (o >= s) {
      x = q[l] >> o - s & a;
    } else {
      x = (q[l] & (1 << o + 1) - 1) << s - o;if (l > 0) {
        x |= q[l - 1] >> this.DB + o - s;
      }
    }d = h;while ((x & 1) == 0) {
      x >>= 1;--d;
    }if ((o -= d) < 0) {
      o += this.DB;--l;
    }if (u) {
      p[x].copyTo(b);u = false;
    } else {
      while (d > 1) {
        v.sqrTo(b, c);v.sqrTo(c, b);d -= 2;
      }if (d > 0) {
        v.sqrTo(b, c);
      } else {
        y = b;b = c;c = y;
      }v.mulTo(c, p[x], b);
    }while (l >= 0 && (q[l] & 1 << o) == 0) {
      v.sqrTo(b, c);y = b;b = c;c = y;if (--o < 0) {
        o = this.DB - 1;--l;
      }
    }
  }return v.revert(b);
}function bnGCD(c) {
  var b = this.s < 0 ? this.negate() : this.clone();var h = c.s < 0 ? c.negate() : c.clone();if (b.compareTo(h) < 0) {
    var e = b;b = h;h = e;
  }var d = b.getLowestSetBit(),
      f = h.getLowestSetBit();if (f < 0) {
    return b;
  }if (d < f) {
    f = d;
  }if (f > 0) {
    b.rShiftTo(f, b);h.rShiftTo(f, h);
  }while (b.signum() > 0) {
    if ((d = b.getLowestSetBit()) > 0) {
      b.rShiftTo(d, b);
    }if ((d = h.getLowestSetBit()) > 0) {
      h.rShiftTo(d, h);
    }if (b.compareTo(h) >= 0) {
      b.subTo(h, b);b.rShiftTo(1, b);
    } else {
      h.subTo(b, h);h.rShiftTo(1, h);
    }
  }if (f > 0) {
    h.lShiftTo(f, h);
  }return h;
}function bnpModInt(e) {
  if (e <= 0) {
    return 0;
  }var c = this.DV % e,
      b = this.s < 0 ? e - 1 : 0;if (this.t > 0) {
    if (c == 0) {
      b = this[0] % e;
    } else {
      for (var a = this.t - 1; a >= 0; --a) {
        b = (c * b + this[a]) % e;
      }
    }
  }return b;
}function bnModInverse(f) {
  var j = f.isEven();if (this.isEven() && j || f.signum() == 0) {
    return BigInteger.ZERO;
  }var i = f.clone(),
      h = this.clone();var g = nbv(1),
      e = nbv(0),
      l = nbv(0),
      k = nbv(1);while (i.signum() != 0) {
    while (i.isEven()) {
      i.rShiftTo(1, i);if (j) {
        if (!g.isEven() || !e.isEven()) {
          g.addTo(this, g);e.subTo(f, e);
        }g.rShiftTo(1, g);
      } else {
        if (!e.isEven()) {
          e.subTo(f, e);
        }
      }e.rShiftTo(1, e);
    }while (h.isEven()) {
      h.rShiftTo(1, h);if (j) {
        if (!l.isEven() || !k.isEven()) {
          l.addTo(this, l);k.subTo(f, k);
        }l.rShiftTo(1, l);
      } else {
        if (!k.isEven()) {
          k.subTo(f, k);
        }
      }k.rShiftTo(1, k);
    }if (i.compareTo(h) >= 0) {
      i.subTo(h, i);if (j) {
        g.subTo(l, g);
      }e.subTo(k, e);
    } else {
      h.subTo(i, h);if (j) {
        l.subTo(g, l);
      }k.subTo(e, k);
    }
  }if (h.compareTo(BigInteger.ONE) != 0) {
    return BigInteger.ZERO;
  }if (k.compareTo(f) >= 0) {
    return k.subtract(f);
  }if (k.signum() < 0) {
    k.addTo(f, k);
  } else {
    return k;
  }if (k.signum() < 0) {
    return k.add(f);
  } else {
    return k;
  }
}var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];function bnIsProbablePrime(e) {
  var d,
      b = this.abs();if (b.t == 1 && b[0] <= lowprimes[lowprimes.length - 1]) {
    for (d = 0; d < lowprimes.length; ++d) {
      if (b[0] == lowprimes[d]) {
        return true;
      }
    }return false;
  }if (b.isEven()) {
    return false;
  }d = 1;while (d < lowprimes.length) {
    var a = lowprimes[d],
        c = d + 1;while (c < lowprimes.length && a < lplim) {
      a *= lowprimes[c++];
    }a = b.modInt(a);while (d < c) {
      if (a % lowprimes[d++] == 0) {
        return false;
      }
    }
  }return b.millerRabin(e);
}function bnpMillerRabin(f) {
  var g = this.subtract(BigInteger.ONE);var c = g.getLowestSetBit();if (c <= 0) {
    return false;
  }var h = g.shiftRight(c);f = f + 1 >> 1;if (f > lowprimes.length) {
    f = lowprimes.length;
  }var b = nbi();for (var e = 0; e < f; ++e) {
    b.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);var l = b.modPow(h, this);if (l.compareTo(BigInteger.ONE) != 0 && l.compareTo(g) != 0) {
      var d = 1;while (d++ < c && l.compareTo(g) != 0) {
        l = l.modPowInt(2, this);if (l.compareTo(BigInteger.ONE) == 0) {
          return false;
        }
      }if (l.compareTo(g) != 0) {
        return false;
      }
    }
  }return true;
}BigInteger.prototype.chunkSize = bnpChunkSize;BigInteger.prototype.toRadix = bnpToRadix;BigInteger.prototype.fromRadix = bnpFromRadix;BigInteger.prototype.fromNumber = bnpFromNumber;BigInteger.prototype.bitwiseTo = bnpBitwiseTo;BigInteger.prototype.changeBit = bnpChangeBit;BigInteger.prototype.addTo = bnpAddTo;BigInteger.prototype.dMultiply = bnpDMultiply;BigInteger.prototype.dAddOffset = bnpDAddOffset;BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;BigInteger.prototype.modInt = bnpModInt;BigInteger.prototype.millerRabin = bnpMillerRabin;BigInteger.prototype.clone = bnClone;BigInteger.prototype.intValue = bnIntValue;BigInteger.prototype.byteValue = bnByteValue;BigInteger.prototype.shortValue = bnShortValue;BigInteger.prototype.signum = bnSigNum;BigInteger.prototype.toByteArray = bnToByteArray;BigInteger.prototype.equals = bnEquals;BigInteger.prototype.min = bnMin;BigInteger.prototype.max = bnMax;BigInteger.prototype.and = bnAnd;BigInteger.prototype.or = bnOr;BigInteger.prototype.xor = bnXor;BigInteger.prototype.andNot = bnAndNot;BigInteger.prototype.not = bnNot;BigInteger.prototype.shiftLeft = bnShiftLeft;BigInteger.prototype.shiftRight = bnShiftRight;BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;BigInteger.prototype.bitCount = bnBitCount;BigInteger.prototype.testBit = bnTestBit;BigInteger.prototype.setBit = bnSetBit;BigInteger.prototype.clearBit = bnClearBit;BigInteger.prototype.flipBit = bnFlipBit;BigInteger.prototype.add = bnAdd;BigInteger.prototype.subtract = bnSubtract;BigInteger.prototype.multiply = bnMultiply;BigInteger.prototype.divide = bnDivide;BigInteger.prototype.remainder = bnRemainder;BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;BigInteger.prototype.modPow = bnModPow;BigInteger.prototype.modInverse = bnModInverse;BigInteger.prototype.pow = bnPow;BigInteger.prototype.gcd = bnGCD;BigInteger.prototype.isProbablePrime = bnIsProbablePrime;BigInteger.prototype.square = bnSquare;
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
function Arcfour() {
  this.i = 0;this.j = 0;this.S = new Array();
}function ARC4init(d) {
  var c, a, b;for (c = 0; c < 256; ++c) {
    this.S[c] = c;
  }a = 0;for (c = 0; c < 256; ++c) {
    a = a + this.S[c] + d[c % d.length] & 255;b = this.S[c];this.S[c] = this.S[a];this.S[a] = b;
  }this.i = 0;this.j = 0;
}function ARC4next() {
  var a;this.i = this.i + 1 & 255;this.j = this.j + this.S[this.i] & 255;a = this.S[this.i];this.S[this.i] = this.S[this.j];this.S[this.j] = a;return this.S[a + this.S[this.i] & 255];
}Arcfour.prototype.init = ARC4init;Arcfour.prototype.next = ARC4next;function prng_newstate() {
  return new Arcfour();
}var rng_psize = 256;
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
var rng_state;var rng_pool;var rng_pptr;function rng_seed_int(a) {
  rng_pool[rng_pptr++] ^= a & 255;rng_pool[rng_pptr++] ^= a >> 8 & 255;rng_pool[rng_pptr++] ^= a >> 16 & 255;rng_pool[rng_pptr++] ^= a >> 24 & 255;if (rng_pptr >= rng_psize) {
    rng_pptr -= rng_psize;
  }
}function rng_seed_time() {
  rng_seed_int(new Date().getTime());
}if (rng_pool == null) {
  rng_pool = new Array();rng_pptr = 0;var t;if (window !== undefined && (window.crypto !== undefined || window.msCrypto !== undefined)) {
    var crypto = window.crypto || window.msCrypto;if (crypto.getRandomValues) {
      var ua = new Uint8Array(32);crypto.getRandomValues(ua);for (t = 0; t < 32; ++t) {
        rng_pool[rng_pptr++] = ua[t];
      }
    } else {
      if (navigator.appName == "Netscape" && navigator.appVersion < "5") {
        var z = window.crypto.random(32);for (t = 0; t < z.length; ++t) {
          rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
        }
      }
    }
  }while (rng_pptr < rng_psize) {
    t = Math.floor(65536 * Math.random());rng_pool[rng_pptr++] = t >>> 8;rng_pool[rng_pptr++] = t & 255;
  }rng_pptr = 0;rng_seed_time();
}function rng_get_byte() {
  if (rng_state == null) {
    rng_seed_time();rng_state = prng_newstate();rng_state.init(rng_pool);for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr) {
      rng_pool[rng_pptr] = 0;
    }rng_pptr = 0;
  }return rng_state.next();
}function rng_get_bytes(b) {
  var a;for (a = 0; a < b.length; ++a) {
    b[a] = rng_get_byte();
  }
}function SecureRandom() {}SecureRandom.prototype.nextBytes = rng_get_bytes;
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
function parseBigInt(b, a) {
  return new BigInteger(b, a);
}function linebrk(c, d) {
  var a = "";var b = 0;while (b + d < c.length) {
    a += c.substring(b, b + d) + "\n";b += d;
  }return a + c.substring(b, c.length);
}function byte2Hex(a) {
  if (a < 16) {
    return "0" + a.toString(16);
  } else {
    return a.toString(16);
  }
}function pkcs1pad2(e, h) {
  if (h < e.length + 11) {
    throw "Message too long for RSA";return null;
  }var g = new Array();var d = e.length - 1;while (d >= 0 && h > 0) {
    var f = e.charCodeAt(d--);if (f < 128) {
      g[--h] = f;
    } else {
      if (f > 127 && f < 2048) {
        g[--h] = f & 63 | 128;g[--h] = f >> 6 | 192;
      } else {
        g[--h] = f & 63 | 128;g[--h] = f >> 6 & 63 | 128;g[--h] = f >> 12 | 224;
      }
    }
  }g[--h] = 0;var b = new SecureRandom();var a = new Array();while (h > 2) {
    a[0] = 0;while (a[0] == 0) {
      b.nextBytes(a);
    }g[--h] = a[0];
  }g[--h] = 2;g[--h] = 0;return new BigInteger(g);
}function oaep_mgf1_arr(c, a, e) {
  var b = "",
      d = 0;while (b.length < a) {
    b += e(String.fromCharCode.apply(String, c.concat([(d & 4278190080) >> 24, (d & 16711680) >> 16, (d & 65280) >> 8, d & 255])));d += 1;
  }return b;
}function oaep_pad(q, a, f, l) {
  var c = KJUR.crypto.MessageDigest;var o = KJUR.crypto.Util;var b = null;if (!f) {
    f = "sha1";
  }if (typeof f === "string") {
    b = c.getCanonicalAlgName(f);l = c.getHashLength(b);f = function f(i) {
      return hextorstr(o.hashHex(rstrtohex(i), b));
    };
  }if (q.length + 2 * l + 2 > a) {
    throw "Message too long for RSA";
  }var k = "",
      e;for (e = 0; e < a - q.length - 2 * l - 2; e += 1) {
    k += "\x00";
  }var h = f("") + k + "\x01" + q;var g = new Array(l);new SecureRandom().nextBytes(g);var j = oaep_mgf1_arr(g, h.length, f);var p = [];for (e = 0; e < h.length; e += 1) {
    p[e] = h.charCodeAt(e) ^ j.charCodeAt(e);
  }var m = oaep_mgf1_arr(p, g.length, f);var d = [0];for (e = 0; e < g.length; e += 1) {
    d[e + 1] = g[e] ^ m.charCodeAt(e);
  }return new BigInteger(d.concat(p));
}function RSAKey() {
  this.n = null;this.e = 0;this.d = null;this.p = null;this.q = null;this.dmp1 = null;this.dmq1 = null;this.coeff = null;
}function RSASetPublic(b, a) {
  this.isPublic = true;this.isPrivate = false;if (typeof b !== "string") {
    this.n = b;this.e = a;
  } else {
    if (b != null && a != null && b.length > 0 && a.length > 0) {
      this.n = parseBigInt(b, 16);this.e = parseInt(a, 16);
    } else {
      throw "Invalid RSA public key";
    }
  }
}function RSADoPublic(a) {
  return a.modPowInt(this.e, this.n);
}function RSAEncrypt(d) {
  var a = pkcs1pad2(d, this.n.bitLength() + 7 >> 3);if (a == null) {
    return null;
  }var e = this.doPublic(a);if (e == null) {
    return null;
  }var b = e.toString(16);if ((b.length & 1) == 0) {
    return b;
  } else {
    return "0" + b;
  }
}function RSAEncryptOAEP(f, e, b) {
  var a = oaep_pad(f, this.n.bitLength() + 7 >> 3, e, b);if (a == null) {
    return null;
  }var g = this.doPublic(a);if (g == null) {
    return null;
  }var d = g.toString(16);if ((d.length & 1) == 0) {
    return d;
  } else {
    return "0" + d;
  }
}RSAKey.prototype.doPublic = RSADoPublic;RSAKey.prototype.setPublic = RSASetPublic;RSAKey.prototype.encrypt = RSAEncrypt;RSAKey.prototype.encryptOAEP = RSAEncryptOAEP;RSAKey.prototype.type = "RSA";
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
function ECFieldElementFp(b, a) {
  this.x = a;this.q = b;
}function feFpEquals(a) {
  if (a == this) {
    return true;
  }return this.q.equals(a.q) && this.x.equals(a.x);
}function feFpToBigInteger() {
  return this.x;
}function feFpNegate() {
  return new ECFieldElementFp(this.q, this.x.negate().mod(this.q));
}function feFpAdd(a) {
  return new ECFieldElementFp(this.q, this.x.add(a.toBigInteger()).mod(this.q));
}function feFpSubtract(a) {
  return new ECFieldElementFp(this.q, this.x.subtract(a.toBigInteger()).mod(this.q));
}function feFpMultiply(a) {
  return new ECFieldElementFp(this.q, this.x.multiply(a.toBigInteger()).mod(this.q));
}function feFpSquare() {
  return new ECFieldElementFp(this.q, this.x.square().mod(this.q));
}function feFpDivide(a) {
  return new ECFieldElementFp(this.q, this.x.multiply(a.toBigInteger().modInverse(this.q)).mod(this.q));
}ECFieldElementFp.prototype.equals = feFpEquals;ECFieldElementFp.prototype.toBigInteger = feFpToBigInteger;ECFieldElementFp.prototype.negate = feFpNegate;ECFieldElementFp.prototype.add = feFpAdd;ECFieldElementFp.prototype.subtract = feFpSubtract;ECFieldElementFp.prototype.multiply = feFpMultiply;ECFieldElementFp.prototype.square = feFpSquare;ECFieldElementFp.prototype.divide = feFpDivide;function ECPointFp(c, a, d, b) {
  this.curve = c;this.x = a;this.y = d;if (b == null) {
    this.z = BigInteger.ONE;
  } else {
    this.z = b;
  }this.zinv = null;
}function pointFpGetX() {
  if (this.zinv == null) {
    this.zinv = this.z.modInverse(this.curve.q);
  }return this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q));
}function pointFpGetY() {
  if (this.zinv == null) {
    this.zinv = this.z.modInverse(this.curve.q);
  }return this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q));
}function pointFpEquals(a) {
  if (a == this) {
    return true;
  }if (this.isInfinity()) {
    return a.isInfinity();
  }if (a.isInfinity()) {
    return this.isInfinity();
  }var c, b;c = a.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(a.z)).mod(this.curve.q);if (!c.equals(BigInteger.ZERO)) {
    return false;
  }b = a.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(a.z)).mod(this.curve.q);return b.equals(BigInteger.ZERO);
}function pointFpIsInfinity() {
  if (this.x == null && this.y == null) {
    return true;
  }return this.z.equals(BigInteger.ZERO) && !this.y.toBigInteger().equals(BigInteger.ZERO);
}function pointFpNegate() {
  return new ECPointFp(this.curve, this.x, this.y.negate(), this.z);
}function pointFpAdd(l) {
  if (this.isInfinity()) {
    return l;
  }if (l.isInfinity()) {
    return this;
  }var p = l.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(l.z)).mod(this.curve.q);var o = l.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(l.z)).mod(this.curve.q);if (BigInteger.ZERO.equals(o)) {
    if (BigInteger.ZERO.equals(p)) {
      return this.twice();
    }return this.curve.getInfinity();
  }var j = new BigInteger("3");var e = this.x.toBigInteger();var n = this.y.toBigInteger();var c = l.x.toBigInteger();var k = l.y.toBigInteger();var m = o.square();var i = m.multiply(o);var d = e.multiply(m);var g = p.square().multiply(this.z);var a = g.subtract(d.shiftLeft(1)).multiply(l.z).subtract(i).multiply(o).mod(this.curve.q);var h = d.multiply(j).multiply(p).subtract(n.multiply(i)).subtract(g.multiply(p)).multiply(l.z).add(p.multiply(i)).mod(this.curve.q);var f = i.multiply(this.z).multiply(l.z).mod(this.curve.q);return new ECPointFp(this.curve, this.curve.fromBigInteger(a), this.curve.fromBigInteger(h), f);
}function pointFpTwice() {
  if (this.isInfinity()) {
    return this;
  }if (this.y.toBigInteger().signum() == 0) {
    return this.curve.getInfinity();
  }var g = new BigInteger("3");var c = this.x.toBigInteger();var h = this.y.toBigInteger();var e = h.multiply(this.z);var j = e.multiply(h).mod(this.curve.q);var i = this.curve.a.toBigInteger();var k = c.square().multiply(g);if (!BigInteger.ZERO.equals(i)) {
    k = k.add(this.z.square().multiply(i));
  }k = k.mod(this.curve.q);var b = k.square().subtract(c.shiftLeft(3).multiply(j)).shiftLeft(1).multiply(e).mod(this.curve.q);var f = k.multiply(g).multiply(c).subtract(j.shiftLeft(1)).shiftLeft(2).multiply(j).subtract(k.square().multiply(k)).mod(this.curve.q);var d = e.square().multiply(e).shiftLeft(3).mod(this.curve.q);return new ECPointFp(this.curve, this.curve.fromBigInteger(b), this.curve.fromBigInteger(f), d);
}function pointFpMultiply(b) {
  if (this.isInfinity()) {
    return this;
  }if (b.signum() == 0) {
    return this.curve.getInfinity();
  }var g = b;var f = g.multiply(new BigInteger("3"));var l = this.negate();var d = this;var c;for (c = f.bitLength() - 2; c > 0; --c) {
    d = d.twice();var a = f.testBit(c);var j = g.testBit(c);if (a != j) {
      d = d.add(a ? this : l);
    }
  }return d;
}function pointFpMultiplyTwo(c, a, b) {
  var d;if (c.bitLength() > b.bitLength()) {
    d = c.bitLength() - 1;
  } else {
    d = b.bitLength() - 1;
  }var f = this.curve.getInfinity();var e = this.add(a);while (d >= 0) {
    f = f.twice();if (c.testBit(d)) {
      if (b.testBit(d)) {
        f = f.add(e);
      } else {
        f = f.add(this);
      }
    } else {
      if (b.testBit(d)) {
        f = f.add(a);
      }
    }--d;
  }return f;
}ECPointFp.prototype.getX = pointFpGetX;ECPointFp.prototype.getY = pointFpGetY;ECPointFp.prototype.equals = pointFpEquals;ECPointFp.prototype.isInfinity = pointFpIsInfinity;ECPointFp.prototype.negate = pointFpNegate;ECPointFp.prototype.add = pointFpAdd;ECPointFp.prototype.twice = pointFpTwice;ECPointFp.prototype.multiply = pointFpMultiply;ECPointFp.prototype.multiplyTwo = pointFpMultiplyTwo;function ECCurveFp(e, d, c) {
  this.q = e;this.a = this.fromBigInteger(d);this.b = this.fromBigInteger(c);this.infinity = new ECPointFp(this, null, null);
}function curveFpGetQ() {
  return this.q;
}function curveFpGetA() {
  return this.a;
}function curveFpGetB() {
  return this.b;
}function curveFpEquals(a) {
  if (a == this) {
    return true;
  }return this.q.equals(a.q) && this.a.equals(a.a) && this.b.equals(a.b);
}function curveFpGetInfinity() {
  return this.infinity;
}function curveFpFromBigInteger(a) {
  return new ECFieldElementFp(this.q, a);
}function curveFpDecodePointHex(d) {
  switch (parseInt(d.substr(0, 2), 16)) {case 0:
      return this.infinity;case 2:case 3:
      return null;case 4:case 6:case 7:
      var a = (d.length - 2) / 2;var c = d.substr(2, a);var b = d.substr(a + 2, a);return new ECPointFp(this, this.fromBigInteger(new BigInteger(c, 16)), this.fromBigInteger(new BigInteger(b, 16)));default:
      return null;}
}ECCurveFp.prototype.getQ = curveFpGetQ;ECCurveFp.prototype.getA = curveFpGetA;ECCurveFp.prototype.getB = curveFpGetB;ECCurveFp.prototype.equals = curveFpEquals;ECCurveFp.prototype.getInfinity = curveFpGetInfinity;ECCurveFp.prototype.fromBigInteger = curveFpFromBigInteger;ECCurveFp.prototype.decodePointHex = curveFpDecodePointHex;
/*! (c) Stefan Thomas | https://github.com/bitcoinjs/bitcoinjs-lib
 */
ECFieldElementFp.prototype.getByteLength = function () {
  return Math.floor((this.toBigInteger().bitLength() + 7) / 8);
};ECPointFp.prototype.getEncoded = function (c) {
  var d = function d(h, f) {
    var g = h.toByteArrayUnsigned();if (f < g.length) {
      g = g.slice(g.length - f);
    } else {
      while (f > g.length) {
        g.unshift(0);
      }
    }return g;
  };var a = this.getX().toBigInteger();var e = this.getY().toBigInteger();var b = d(a, 32);if (c) {
    if (e.isEven()) {
      b.unshift(2);
    } else {
      b.unshift(3);
    }
  } else {
    b.unshift(4);b = b.concat(d(e, 32));
  }return b;
};ECPointFp.decodeFrom = function (g, c) {
  var f = c[0];var e = c.length - 1;var d = c.slice(1, 1 + e / 2);var b = c.slice(1 + e / 2, 1 + e);d.unshift(0);b.unshift(0);var a = new BigInteger(d);var h = new BigInteger(b);return new ECPointFp(g, g.fromBigInteger(a), g.fromBigInteger(h));
};ECPointFp.decodeFromHex = function (g, c) {
  var f = c.substr(0, 2);var e = c.length - 2;var d = c.substr(2, e / 2);var b = c.substr(2 + e / 2, e / 2);var a = new BigInteger(d, 16);var h = new BigInteger(b, 16);return new ECPointFp(g, g.fromBigInteger(a), g.fromBigInteger(h));
};ECPointFp.prototype.add2D = function (c) {
  if (this.isInfinity()) {
    return c;
  }if (c.isInfinity()) {
    return this;
  }if (this.x.equals(c.x)) {
    if (this.y.equals(c.y)) {
      return this.twice();
    }return this.curve.getInfinity();
  }var g = c.x.subtract(this.x);var e = c.y.subtract(this.y);var a = e.divide(g);var d = a.square().subtract(this.x).subtract(c.x);var f = a.multiply(this.x.subtract(d)).subtract(this.y);return new ECPointFp(this.curve, d, f);
};ECPointFp.prototype.twice2D = function () {
  if (this.isInfinity()) {
    return this;
  }if (this.y.toBigInteger().signum() == 0) {
    return this.curve.getInfinity();
  }var b = this.curve.fromBigInteger(BigInteger.valueOf(2));var e = this.curve.fromBigInteger(BigInteger.valueOf(3));var a = this.x.square().multiply(e).add(this.curve.a).divide(this.y.multiply(b));var c = a.square().subtract(this.x.multiply(b));var d = a.multiply(this.x.subtract(c)).subtract(this.y);return new ECPointFp(this.curve, c, d);
};ECPointFp.prototype.multiply2D = function (b) {
  if (this.isInfinity()) {
    return this;
  }if (b.signum() == 0) {
    return this.curve.getInfinity();
  }var g = b;var f = g.multiply(new BigInteger("3"));var l = this.negate();var d = this;var c;for (c = f.bitLength() - 2; c > 0; --c) {
    d = d.twice();var a = f.testBit(c);var j = g.testBit(c);if (a != j) {
      d = d.add2D(a ? this : l);
    }
  }return d;
};ECPointFp.prototype.isOnCurve = function () {
  var d = this.getX().toBigInteger();var i = this.getY().toBigInteger();var f = this.curve.getA().toBigInteger();var c = this.curve.getB().toBigInteger();var h = this.curve.getQ();var e = i.multiply(i).mod(h);var g = d.multiply(d).multiply(d).add(f.multiply(d)).add(c).mod(h);return e.equals(g);
};ECPointFp.prototype.toString = function () {
  return "(" + this.getX().toBigInteger().toString() + "," + this.getY().toBigInteger().toString() + ")";
};ECPointFp.prototype.validate = function () {
  var c = this.curve.getQ();if (this.isInfinity()) {
    throw new Error("Point is at infinity.");
  }var a = this.getX().toBigInteger();var b = this.getY().toBigInteger();if (a.compareTo(BigInteger.ONE) < 0 || a.compareTo(c.subtract(BigInteger.ONE)) > 0) {
    throw new Error("x coordinate out of bounds");
  }if (b.compareTo(BigInteger.ONE) < 0 || b.compareTo(c.subtract(BigInteger.ONE)) > 0) {
    throw new Error("y coordinate out of bounds");
  }if (!this.isOnCurve()) {
    throw new Error("Point is not on the curve.");
  }if (this.multiply(c).isInfinity()) {
    throw new Error("Point is not a scalar multiple of G.");
  }return true;
};
/*! Mike Samuel (c) 2009 | code.google.com/p/json-sans-eval
 */
var jsonParse = function () {
  var e = "(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)";var j = '(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))';var i = '(?:"' + j + '*")';var d = new RegExp("(?:false|true|null|[\\{\\}\\[\\]]|" + e + "|" + i + ")", "g");var k = new RegExp("\\\\(?:([^u])|u(.{4}))", "g");var g = { '"': '"', "/": "/", "\\": "\\", b: "\b", f: "\f", n: "\n", r: "\r", t: "\t" };function h(l, m, n) {
    return m ? g[m] : String.fromCharCode(parseInt(n, 16));
  }var c = new String("");var a = "\\";var f = { "{": Object, "[": Array };var b = Object.hasOwnProperty;return function (u, q) {
    var p = u.match(d);var x;var v = p[0];var l = false;if ("{" === v) {
      x = {};
    } else {
      if ("[" === v) {
        x = [];
      } else {
        x = [];l = true;
      }
    }var t;var r = [x];for (var o = 1 - l, m = p.length; o < m; ++o) {
      v = p[o];var w;switch (v.charCodeAt(0)) {default:
          w = r[0];w[t || w.length] = +v;t = void 0;break;case 34:
          v = v.substring(1, v.length - 1);if (v.indexOf(a) !== -1) {
            v = v.replace(k, h);
          }w = r[0];if (!t) {
            if (w instanceof Array) {
              t = w.length;
            } else {
              t = v || c;break;
            }
          }w[t] = v;t = void 0;break;case 91:
          w = r[0];r.unshift(w[t || w.length] = []);t = void 0;break;case 93:
          r.shift();break;case 102:
          w = r[0];w[t || w.length] = false;t = void 0;break;case 110:
          w = r[0];w[t || w.length] = null;t = void 0;break;case 116:
          w = r[0];w[t || w.length] = true;t = void 0;break;case 123:
          w = r[0];r.unshift(w[t || w.length] = {});t = void 0;break;case 125:
          r.shift();break;}
    }if (l) {
      if (r.length !== 1) {
        throw new Error();
      }x = x[0];
    } else {
      if (r.length) {
        throw new Error();
      }
    }if (q) {
      var s = function s(C, B) {
        var D = C[B];if (D && (typeof D === "undefined" ? "undefined" : _typeof(D)) === "object") {
          var n = null;for (var z in D) {
            if (b.call(D, z) && D !== C) {
              var y = s(D, z);if (y !== void 0) {
                D[z] = y;
              } else {
                if (!n) {
                  n = [];
                }n.push(z);
              }
            }
          }if (n) {
            for (var A = n.length; --A >= 0;) {
              delete D[n[A]];
            }
          }
        }return q.call(C, B, D);
      };x = s({ "": x }, "");
    }return x;
  };
}();
if (typeof KJUR == "undefined" || !KJUR) {
  exports.KJUR = KJUR = {};
}if (typeof KJUR.asn1 == "undefined" || !KJUR.asn1) {
  KJUR.asn1 = {};
}KJUR.asn1.ASN1Util = new function () {
  this.integerToByteHex = function (a) {
    var b = a.toString(16);if (b.length % 2 == 1) {
      b = "0" + b;
    }return b;
  };this.bigIntToMinTwosComplementsHex = function (j) {
    var f = j.toString(16);if (f.substr(0, 1) != "-") {
      if (f.length % 2 == 1) {
        f = "0" + f;
      } else {
        if (!f.match(/^[0-7]/)) {
          f = "00" + f;
        }
      }
    } else {
      var a = f.substr(1);var e = a.length;if (e % 2 == 1) {
        e += 1;
      } else {
        if (!f.match(/^[0-7]/)) {
          e += 2;
        }
      }var g = "";for (var d = 0; d < e; d++) {
        g += "f";
      }var c = new BigInteger(g, 16);var b = c.xor(j).add(BigInteger.ONE);f = b.toString(16).replace(/^-/, "");
    }return f;
  };this.getPEMStringFromHex = function (a, b) {
    return hextopem(a, b);
  };this.newObject = function (k) {
    var D = KJUR,
        n = D.asn1,
        z = n.DERBoolean,
        e = n.DERInteger,
        s = n.DERBitString,
        h = n.DEROctetString,
        v = n.DERNull,
        w = n.DERObjectIdentifier,
        l = n.DEREnumerated,
        g = n.DERUTF8String,
        f = n.DERNumericString,
        y = n.DERPrintableString,
        u = n.DERTeletexString,
        p = n.DERIA5String,
        C = n.DERUTCTime,
        j = n.DERGeneralizedTime,
        m = n.DERSequence,
        c = n.DERSet,
        r = n.DERTaggedObject,
        o = n.ASN1Util.newObject;var t = Object.keys(k);if (t.length != 1) {
      throw "key of param shall be only one.";
    }var F = t[0];if (":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + F + ":") == -1) {
      throw "undefined key: " + F;
    }if (F == "bool") {
      return new z(k[F]);
    }if (F == "int") {
      return new e(k[F]);
    }if (F == "bitstr") {
      return new s(k[F]);
    }if (F == "octstr") {
      return new h(k[F]);
    }if (F == "null") {
      return new v(k[F]);
    }if (F == "oid") {
      return new w(k[F]);
    }if (F == "enum") {
      return new l(k[F]);
    }if (F == "utf8str") {
      return new g(k[F]);
    }if (F == "numstr") {
      return new f(k[F]);
    }if (F == "prnstr") {
      return new y(k[F]);
    }if (F == "telstr") {
      return new u(k[F]);
    }if (F == "ia5str") {
      return new p(k[F]);
    }if (F == "utctime") {
      return new C(k[F]);
    }if (F == "gentime") {
      return new j(k[F]);
    }if (F == "seq") {
      var d = k[F];var E = [];for (var x = 0; x < d.length; x++) {
        var B = o(d[x]);E.push(B);
      }return new m({ array: E });
    }if (F == "set") {
      var d = k[F];var E = [];for (var x = 0; x < d.length; x++) {
        var B = o(d[x]);E.push(B);
      }return new c({ array: E });
    }if (F == "tag") {
      var A = k[F];if (Object.prototype.toString.call(A) === "[object Array]" && A.length == 3) {
        var q = o(A[2]);return new r({ tag: A[0], explicit: A[1], obj: q });
      } else {
        var b = {};if (A.explicit !== undefined) {
          b.explicit = A.explicit;
        }if (A.tag !== undefined) {
          b.tag = A.tag;
        }if (A.obj === undefined) {
          throw "obj shall be specified for 'tag'.";
        }b.obj = o(A.obj);return new r(b);
      }
    }
  };this.jsonToASN1HEX = function (b) {
    var a = this.newObject(b);return a.getEncodedHex();
  };
}();KJUR.asn1.ASN1Util.oidHexToInt = function (a) {
  var j = "";var k = parseInt(a.substr(0, 2), 16);var d = Math.floor(k / 40);var c = k % 40;var j = d + "." + c;var e = "";for (var f = 2; f < a.length; f += 2) {
    var g = parseInt(a.substr(f, 2), 16);var h = ("00000000" + g.toString(2)).slice(-8);e = e + h.substr(1, 7);if (h.substr(0, 1) == "0") {
      var b = new BigInteger(e, 2);j = j + "." + b.toString(10);e = "";
    }
  }return j;
};KJUR.asn1.ASN1Util.oidIntToHex = function (f) {
  var e = function e(a) {
    var k = a.toString(16);if (k.length == 1) {
      k = "0" + k;
    }return k;
  };var d = function d(o) {
    var n = "";var k = new BigInteger(o, 10);var a = k.toString(2);var l = 7 - a.length % 7;if (l == 7) {
      l = 0;
    }var q = "";for (var m = 0; m < l; m++) {
      q += "0";
    }a = q + a;for (var m = 0; m < a.length - 1; m += 7) {
      var p = a.substr(m, 7);if (m != a.length - 7) {
        p = "1" + p;
      }n += e(parseInt(p, 2));
    }return n;
  };if (!f.match(/^[0-9.]+$/)) {
    throw "malformed oid string: " + f;
  }var g = "";var b = f.split(".");var j = parseInt(b[0]) * 40 + parseInt(b[1]);g += e(j);b.splice(0, 2);for (var c = 0; c < b.length; c++) {
    g += d(b[c]);
  }return g;
};KJUR.asn1.ASN1Object = function () {
  var c = true;var b = null;var d = "00";var e = "00";var a = "";this.getLengthHexFromValue = function () {
    if (typeof this.hV == "undefined" || this.hV == null) {
      throw "this.hV is null or undefined.";
    }if (this.hV.length % 2 == 1) {
      throw "value hex must be even length: n=" + a.length + ",v=" + this.hV;
    }var i = this.hV.length / 2;var h = i.toString(16);if (h.length % 2 == 1) {
      h = "0" + h;
    }if (i < 128) {
      return h;
    } else {
      var g = h.length / 2;if (g > 15) {
        throw "ASN.1 length too long to represent by 8x: n = " + i.toString(16);
      }var f = 128 + g;return f.toString(16) + h;
    }
  };this.getEncodedHex = function () {
    if (this.hTLV == null || this.isModified) {
      this.hV = this.getFreshValueHex();this.hL = this.getLengthHexFromValue();this.hTLV = this.hT + this.hL + this.hV;this.isModified = false;
    }return this.hTLV;
  };this.getValueHex = function () {
    this.getEncodedHex();return this.hV;
  };this.getFreshValueHex = function () {
    return "";
  };
};KJUR.asn1.DERAbstractString = function (c) {
  KJUR.asn1.DERAbstractString.superclass.constructor.call(this);var b = null;var a = null;this.getString = function () {
    return this.s;
  };this.setString = function (d) {
    this.hTLV = null;this.isModified = true;this.s = d;this.hV = utf8tohex(this.s).toLowerCase();
  };this.setStringHex = function (d) {
    this.hTLV = null;this.isModified = true;this.s = null;this.hV = d;
  };this.getFreshValueHex = function () {
    return this.hV;
  };if (typeof c != "undefined") {
    if (typeof c == "string") {
      this.setString(c);
    } else {
      if (typeof c.str != "undefined") {
        this.setString(c.str);
      } else {
        if (typeof c.hex != "undefined") {
          this.setStringHex(c.hex);
        }
      }
    }
  }
};YAHOO.lang.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object);KJUR.asn1.DERAbstractTime = function (c) {
  KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);var b = null;var a = null;this.localDateToUTC = function (f) {
    utc = f.getTime() + f.getTimezoneOffset() * 60000;var e = new Date(utc);return e;
  };this.formatDate = function (m, o, e) {
    var g = this.zeroPadding;var n = this.localDateToUTC(m);var p = String(n.getFullYear());if (o == "utc") {
      p = p.substr(2, 2);
    }var l = g(String(n.getMonth() + 1), 2);var q = g(String(n.getDate()), 2);var h = g(String(n.getHours()), 2);var i = g(String(n.getMinutes()), 2);var j = g(String(n.getSeconds()), 2);var r = p + l + q + h + i + j;if (e === true) {
      var f = n.getMilliseconds();if (f != 0) {
        var k = g(String(f), 3);k = k.replace(/[0]+$/, "");r = r + "." + k;
      }
    }return r + "Z";
  };this.zeroPadding = function (e, d) {
    if (e.length >= d) {
      return e;
    }return new Array(d - e.length + 1).join("0") + e;
  };this.getString = function () {
    return this.s;
  };this.setString = function (d) {
    this.hTLV = null;this.isModified = true;this.s = d;this.hV = stohex(d);
  };this.setByDateValue = function (h, j, e, d, f, g) {
    var i = new Date(Date.UTC(h, j - 1, e, d, f, g, 0));this.setByDate(i);
  };this.getFreshValueHex = function () {
    return this.hV;
  };
};YAHOO.lang.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object);KJUR.asn1.DERAbstractStructured = function (b) {
  KJUR.asn1.DERAbstractString.superclass.constructor.call(this);var a = null;this.setByASN1ObjectArray = function (c) {
    this.hTLV = null;this.isModified = true;this.asn1Array = c;
  };this.appendASN1Object = function (c) {
    this.hTLV = null;this.isModified = true;this.asn1Array.push(c);
  };this.asn1Array = new Array();if (typeof b != "undefined") {
    if (typeof b.array != "undefined") {
      this.asn1Array = b.array;
    }
  }
};YAHOO.lang.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object);KJUR.asn1.DERBoolean = function () {
  KJUR.asn1.DERBoolean.superclass.constructor.call(this);this.hT = "01";this.hTLV = "0101ff";
};YAHOO.lang.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object);KJUR.asn1.DERInteger = function (a) {
  KJUR.asn1.DERInteger.superclass.constructor.call(this);this.hT = "02";this.setByBigInteger = function (b) {
    this.hTLV = null;this.isModified = true;this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(b);
  };this.setByInteger = function (c) {
    var b = new BigInteger(String(c), 10);this.setByBigInteger(b);
  };this.setValueHex = function (b) {
    this.hV = b;
  };this.getFreshValueHex = function () {
    return this.hV;
  };if (typeof a != "undefined") {
    if (typeof a.bigint != "undefined") {
      this.setByBigInteger(a.bigint);
    } else {
      if (typeof a["int"] != "undefined") {
        this.setByInteger(a["int"]);
      } else {
        if (typeof a == "number") {
          this.setByInteger(a);
        } else {
          if (typeof a.hex != "undefined") {
            this.setValueHex(a.hex);
          }
        }
      }
    }
  }
};YAHOO.lang.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object);KJUR.asn1.DERBitString = function (b) {
  if (b !== undefined && typeof b.obj !== "undefined") {
    var a = KJUR.asn1.ASN1Util.newObject(b.obj);b.hex = "00" + a.getEncodedHex();
  }KJUR.asn1.DERBitString.superclass.constructor.call(this);this.hT = "03";this.setHexValueIncludingUnusedBits = function (c) {
    this.hTLV = null;this.isModified = true;this.hV = c;
  };this.setUnusedBitsAndHexValue = function (c, e) {
    if (c < 0 || 7 < c) {
      throw "unused bits shall be from 0 to 7: u = " + c;
    }var d = "0" + c;this.hTLV = null;this.isModified = true;this.hV = d + e;
  };this.setByBinaryString = function (e) {
    e = e.replace(/0+$/, "");var f = 8 - e.length % 8;if (f == 8) {
      f = 0;
    }for (var g = 0; g <= f; g++) {
      e += "0";
    }var j = "";for (var g = 0; g < e.length - 1; g += 8) {
      var d = e.substr(g, 8);var c = parseInt(d, 2).toString(16);if (c.length == 1) {
        c = "0" + c;
      }j += c;
    }this.hTLV = null;this.isModified = true;this.hV = "0" + f + j;
  };this.setByBooleanArray = function (e) {
    var d = "";for (var c = 0; c < e.length; c++) {
      if (e[c] == true) {
        d += "1";
      } else {
        d += "0";
      }
    }this.setByBinaryString(d);
  };this.newFalseArray = function (e) {
    var c = new Array(e);for (var d = 0; d < e; d++) {
      c[d] = false;
    }return c;
  };this.getFreshValueHex = function () {
    return this.hV;
  };if (typeof b != "undefined") {
    if (typeof b == "string" && b.toLowerCase().match(/^[0-9a-f]+$/)) {
      this.setHexValueIncludingUnusedBits(b);
    } else {
      if (typeof b.hex != "undefined") {
        this.setHexValueIncludingUnusedBits(b.hex);
      } else {
        if (typeof b.bin != "undefined") {
          this.setByBinaryString(b.bin);
        } else {
          if (typeof b.array != "undefined") {
            this.setByBooleanArray(b.array);
          }
        }
      }
    }
  }
};YAHOO.lang.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object);KJUR.asn1.DEROctetString = function (b) {
  if (b !== undefined && typeof b.obj !== "undefined") {
    var a = KJUR.asn1.ASN1Util.newObject(b.obj);b.hex = a.getEncodedHex();
  }KJUR.asn1.DEROctetString.superclass.constructor.call(this, b);this.hT = "04";
};YAHOO.lang.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString);KJUR.asn1.DERNull = function () {
  KJUR.asn1.DERNull.superclass.constructor.call(this);this.hT = "05";this.hTLV = "0500";
};YAHOO.lang.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object);KJUR.asn1.DERObjectIdentifier = function (c) {
  var b = function b(d) {
    var e = d.toString(16);if (e.length == 1) {
      e = "0" + e;
    }return e;
  };var a = function a(k) {
    var j = "";var e = new BigInteger(k, 10);var d = e.toString(2);var f = 7 - d.length % 7;if (f == 7) {
      f = 0;
    }var m = "";for (var g = 0; g < f; g++) {
      m += "0";
    }d = m + d;for (var g = 0; g < d.length - 1; g += 7) {
      var l = d.substr(g, 7);if (g != d.length - 7) {
        l = "1" + l;
      }j += b(parseInt(l, 2));
    }return j;
  };KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);this.hT = "06";this.setValueHex = function (d) {
    this.hTLV = null;this.isModified = true;this.s = null;this.hV = d;
  };this.setValueOidString = function (f) {
    if (!f.match(/^[0-9.]+$/)) {
      throw "malformed oid string: " + f;
    }var g = "";var d = f.split(".");var j = parseInt(d[0]) * 40 + parseInt(d[1]);g += b(j);d.splice(0, 2);for (var e = 0; e < d.length; e++) {
      g += a(d[e]);
    }this.hTLV = null;this.isModified = true;this.s = null;this.hV = g;
  };this.setValueName = function (e) {
    var d = KJUR.asn1.x509.OID.name2oid(e);if (d !== "") {
      this.setValueOidString(d);
    } else {
      throw "DERObjectIdentifier oidName undefined: " + e;
    }
  };this.getFreshValueHex = function () {
    return this.hV;
  };if (c !== undefined) {
    if (typeof c === "string") {
      if (c.match(/^[0-2].[0-9.]+$/)) {
        this.setValueOidString(c);
      } else {
        this.setValueName(c);
      }
    } else {
      if (c.oid !== undefined) {
        this.setValueOidString(c.oid);
      } else {
        if (c.hex !== undefined) {
          this.setValueHex(c.hex);
        } else {
          if (c.name !== undefined) {
            this.setValueName(c.name);
          }
        }
      }
    }
  }
};YAHOO.lang.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object);KJUR.asn1.DEREnumerated = function (a) {
  KJUR.asn1.DEREnumerated.superclass.constructor.call(this);this.hT = "0a";this.setByBigInteger = function (b) {
    this.hTLV = null;this.isModified = true;this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(b);
  };this.setByInteger = function (c) {
    var b = new BigInteger(String(c), 10);this.setByBigInteger(b);
  };this.setValueHex = function (b) {
    this.hV = b;
  };this.getFreshValueHex = function () {
    return this.hV;
  };if (typeof a != "undefined") {
    if (typeof a["int"] != "undefined") {
      this.setByInteger(a["int"]);
    } else {
      if (typeof a == "number") {
        this.setByInteger(a);
      } else {
        if (typeof a.hex != "undefined") {
          this.setValueHex(a.hex);
        }
      }
    }
  }
};YAHOO.lang.extend(KJUR.asn1.DEREnumerated, KJUR.asn1.ASN1Object);KJUR.asn1.DERUTF8String = function (a) {
  KJUR.asn1.DERUTF8String.superclass.constructor.call(this, a);this.hT = "0c";
};YAHOO.lang.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString);KJUR.asn1.DERNumericString = function (a) {
  KJUR.asn1.DERNumericString.superclass.constructor.call(this, a);this.hT = "12";
};YAHOO.lang.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString);KJUR.asn1.DERPrintableString = function (a) {
  KJUR.asn1.DERPrintableString.superclass.constructor.call(this, a);this.hT = "13";
};YAHOO.lang.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString);KJUR.asn1.DERTeletexString = function (a) {
  KJUR.asn1.DERTeletexString.superclass.constructor.call(this, a);this.hT = "14";
};YAHOO.lang.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString);KJUR.asn1.DERIA5String = function (a) {
  KJUR.asn1.DERIA5String.superclass.constructor.call(this, a);this.hT = "16";
};YAHOO.lang.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString);KJUR.asn1.DERUTCTime = function (a) {
  KJUR.asn1.DERUTCTime.superclass.constructor.call(this, a);this.hT = "17";this.setByDate = function (b) {
    this.hTLV = null;this.isModified = true;this.date = b;this.s = this.formatDate(this.date, "utc");this.hV = stohex(this.s);
  };this.getFreshValueHex = function () {
    if (typeof this.date == "undefined" && typeof this.s == "undefined") {
      this.date = new Date();this.s = this.formatDate(this.date, "utc");this.hV = stohex(this.s);
    }return this.hV;
  };if (a !== undefined) {
    if (a.str !== undefined) {
      this.setString(a.str);
    } else {
      if (typeof a == "string" && a.match(/^[0-9]{12}Z$/)) {
        this.setString(a);
      } else {
        if (a.hex !== undefined) {
          this.setStringHex(a.hex);
        } else {
          if (a.date !== undefined) {
            this.setByDate(a.date);
          }
        }
      }
    }
  }
};YAHOO.lang.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime);KJUR.asn1.DERGeneralizedTime = function (a) {
  KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, a);this.hT = "18";this.withMillis = false;this.setByDate = function (b) {
    this.hTLV = null;this.isModified = true;this.date = b;this.s = this.formatDate(this.date, "gen", this.withMillis);this.hV = stohex(this.s);
  };this.getFreshValueHex = function () {
    if (this.date === undefined && this.s === undefined) {
      this.date = new Date();this.s = this.formatDate(this.date, "gen", this.withMillis);this.hV = stohex(this.s);
    }return this.hV;
  };if (a !== undefined) {
    if (a.str !== undefined) {
      this.setString(a.str);
    } else {
      if (typeof a == "string" && a.match(/^[0-9]{14}Z$/)) {
        this.setString(a);
      } else {
        if (a.hex !== undefined) {
          this.setStringHex(a.hex);
        } else {
          if (a.date !== undefined) {
            this.setByDate(a.date);
          }
        }
      }
    }if (a.millis === true) {
      this.withMillis = true;
    }
  }
};YAHOO.lang.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime);KJUR.asn1.DERSequence = function (a) {
  KJUR.asn1.DERSequence.superclass.constructor.call(this, a);this.hT = "30";this.getFreshValueHex = function () {
    var c = "";for (var b = 0; b < this.asn1Array.length; b++) {
      var d = this.asn1Array[b];c += d.getEncodedHex();
    }this.hV = c;return this.hV;
  };
};YAHOO.lang.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured);KJUR.asn1.DERSet = function (a) {
  KJUR.asn1.DERSet.superclass.constructor.call(this, a);this.hT = "31";this.sortFlag = true;this.getFreshValueHex = function () {
    var b = new Array();for (var c = 0; c < this.asn1Array.length; c++) {
      var d = this.asn1Array[c];b.push(d.getEncodedHex());
    }if (this.sortFlag == true) {
      b.sort();
    }this.hV = b.join("");return this.hV;
  };if (typeof a != "undefined") {
    if (typeof a.sortflag != "undefined" && a.sortflag == false) {
      this.sortFlag = false;
    }
  }
};YAHOO.lang.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured);KJUR.asn1.DERTaggedObject = function (a) {
  KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);this.hT = "a0";this.hV = "";this.isExplicit = true;this.asn1Object = null;this.setASN1Object = function (b, c, d) {
    this.hT = c;this.isExplicit = b;this.asn1Object = d;if (this.isExplicit) {
      this.hV = this.asn1Object.getEncodedHex();this.hTLV = null;this.isModified = true;
    } else {
      this.hV = null;this.hTLV = d.getEncodedHex();this.hTLV = this.hTLV.replace(/^../, c);this.isModified = false;
    }
  };this.getFreshValueHex = function () {
    return this.hV;
  };if (typeof a != "undefined") {
    if (typeof a.tag != "undefined") {
      this.hT = a.tag;
    }if (typeof a.explicit != "undefined") {
      this.isExplicit = a.explicit;
    }if (typeof a.obj != "undefined") {
      this.asn1Object = a.obj;this.setASN1Object(this.isExplicit, this.hT, this.asn1Object);
    }
  }
};YAHOO.lang.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object);
var ASN1HEX = new function () {}();ASN1HEX.getLblen = function (c, a) {
  if (c.substr(a + 2, 1) != "8") {
    return 1;
  }var b = parseInt(c.substr(a + 3, 1));if (b == 0) {
    return -1;
  }if (0 < b && b < 10) {
    return b + 1;
  }return -2;
};ASN1HEX.getL = function (c, b) {
  var a = ASN1HEX.getLblen(c, b);if (a < 1) {
    return "";
  }return c.substr(b + 2, a * 2);
};ASN1HEX.getVblen = function (d, a) {
  var c, b;c = ASN1HEX.getL(d, a);if (c == "") {
    return -1;
  }if (c.substr(0, 1) === "8") {
    b = new BigInteger(c.substr(2), 16);
  } else {
    b = new BigInteger(c, 16);
  }return b.intValue();
};ASN1HEX.getVidx = function (c, b) {
  var a = ASN1HEX.getLblen(c, b);if (a < 0) {
    return a;
  }return b + (a + 1) * 2;
};ASN1HEX.getV = function (d, a) {
  var c = ASN1HEX.getVidx(d, a);var b = ASN1HEX.getVblen(d, a);return d.substr(c, b * 2);
};ASN1HEX.getTLV = function (b, a) {
  return b.substr(a, 2) + ASN1HEX.getL(b, a) + ASN1HEX.getV(b, a);
};ASN1HEX.getNextSiblingIdx = function (d, a) {
  var c = ASN1HEX.getVidx(d, a);var b = ASN1HEX.getVblen(d, a);return c + b * 2;
};ASN1HEX.getChildIdx = function (e, f) {
  var j = ASN1HEX;var g = new Array();var i = j.getVidx(e, f);if (e.substr(f, 2) == "03") {
    g.push(i + 2);
  } else {
    g.push(i);
  }var l = j.getVblen(e, f);var c = i;var d = 0;while (1) {
    var b = j.getNextSiblingIdx(e, c);if (b == null || b - i >= l * 2) {
      break;
    }if (d >= 200) {
      break;
    }g.push(b);c = b;d++;
  }return g;
};ASN1HEX.getNthChildIdx = function (d, b, e) {
  var c = ASN1HEX.getChildIdx(d, b);return c[e];
};ASN1HEX.getIdxbyList = function (e, d, c, i) {
  var g = ASN1HEX;var f, b;if (c.length == 0) {
    if (i !== undefined) {
      if (e.substr(d, 2) !== i) {
        throw "checking tag doesn't match: " + e.substr(d, 2) + "!=" + i;
      }
    }return d;
  }f = c.shift();b = g.getChildIdx(e, d);return g.getIdxbyList(e, b[f], c, i);
};ASN1HEX.getTLVbyList = function (d, c, b, f) {
  var e = ASN1HEX;var a = e.getIdxbyList(d, c, b);if (a === undefined) {
    throw "can't find nthList object";
  }if (f !== undefined) {
    if (d.substr(a, 2) != f) {
      throw "checking tag doesn't match: " + d.substr(a, 2) + "!=" + f;
    }
  }return e.getTLV(d, a);
};ASN1HEX.getVbyList = function (e, c, b, g, i) {
  var f = ASN1HEX;var a, d;a = f.getIdxbyList(e, c, b, g);if (a === undefined) {
    throw "can't find nthList object";
  }d = f.getV(e, a);if (i === true) {
    d = d.substr(2);
  }return d;
};ASN1HEX.hextooidstr = function (e) {
  var h = function h(b, a) {
    if (b.length >= a) {
      return b;
    }return new Array(a - b.length + 1).join("0") + b;
  };var l = [];var o = e.substr(0, 2);var f = parseInt(o, 16);l[0] = new String(Math.floor(f / 40));l[1] = new String(f % 40);var m = e.substr(2);var k = [];for (var g = 0; g < m.length / 2; g++) {
    k.push(parseInt(m.substr(g * 2, 2), 16));
  }var j = [];var d = "";for (var g = 0; g < k.length; g++) {
    if (k[g] & 128) {
      d = d + h((k[g] & 127).toString(2), 7);
    } else {
      d = d + h((k[g] & 127).toString(2), 7);j.push(new String(parseInt(d, 2)));d = "";
    }
  }var n = l.join(".");if (j.length > 0) {
    n = n + "." + j.join(".");
  }return n;
};ASN1HEX.dump = function (t, c, l, g) {
  var p = ASN1HEX;var j = p.getV;var y = p.dump;var w = p.getChildIdx;var e = t;if (t instanceof KJUR.asn1.ASN1Object) {
    e = t.getEncodedHex();
  }var q = function q(A, i) {
    if (A.length <= i * 2) {
      return A;
    } else {
      var v = A.substr(0, i) + "..(total " + A.length / 2 + "bytes).." + A.substr(A.length - i, i);return v;
    }
  };if (c === undefined) {
    c = { ommit_long_octet: 32 };
  }if (l === undefined) {
    l = 0;
  }if (g === undefined) {
    g = "";
  }var x = c.ommit_long_octet;if (e.substr(l, 2) == "01") {
    var h = j(e, l);if (h == "00") {
      return g + "BOOLEAN FALSE\n";
    } else {
      return g + "BOOLEAN TRUE\n";
    }
  }if (e.substr(l, 2) == "02") {
    var h = j(e, l);return g + "INTEGER " + q(h, x) + "\n";
  }if (e.substr(l, 2) == "03") {
    var h = j(e, l);return g + "BITSTRING " + q(h, x) + "\n";
  }if (e.substr(l, 2) == "04") {
    var h = j(e, l);if (p.isASN1HEX(h)) {
      var k = g + "OCTETSTRING, encapsulates\n";k = k + y(h, c, 0, g + "  ");return k;
    } else {
      return g + "OCTETSTRING " + q(h, x) + "\n";
    }
  }if (e.substr(l, 2) == "05") {
    return g + "NULL\n";
  }if (e.substr(l, 2) == "06") {
    var m = j(e, l);var a = KJUR.asn1.ASN1Util.oidHexToInt(m);var o = KJUR.asn1.x509.OID.oid2name(a);var b = a.replace(/\./g, " ");if (o != "") {
      return g + "ObjectIdentifier " + o + " (" + b + ")\n";
    } else {
      return g + "ObjectIdentifier (" + b + ")\n";
    }
  }if (e.substr(l, 2) == "0c") {
    return g + "UTF8String '" + hextoutf8(j(e, l)) + "'\n";
  }if (e.substr(l, 2) == "13") {
    return g + "PrintableString '" + hextoutf8(j(e, l)) + "'\n";
  }if (e.substr(l, 2) == "14") {
    return g + "TeletexString '" + hextoutf8(j(e, l)) + "'\n";
  }if (e.substr(l, 2) == "16") {
    return g + "IA5String '" + hextoutf8(j(e, l)) + "'\n";
  }if (e.substr(l, 2) == "17") {
    return g + "UTCTime " + hextoutf8(j(e, l)) + "\n";
  }if (e.substr(l, 2) == "18") {
    return g + "GeneralizedTime " + hextoutf8(j(e, l)) + "\n";
  }if (e.substr(l, 2) == "30") {
    if (e.substr(l, 4) == "3000") {
      return g + "SEQUENCE {}\n";
    }var k = g + "SEQUENCE\n";var d = w(e, l);var f = c;if ((d.length == 2 || d.length == 3) && e.substr(d[0], 2) == "06" && e.substr(d[d.length - 1], 2) == "04") {
      var o = p.oidname(j(e, d[0]));var r = JSON.parse(JSON.stringify(c));r.x509ExtName = o;f = r;
    }for (var u = 0; u < d.length; u++) {
      k = k + y(e, f, d[u], g + "  ");
    }return k;
  }if (e.substr(l, 2) == "31") {
    var k = g + "SET\n";var d = w(e, l);for (var u = 0; u < d.length; u++) {
      k = k + y(e, c, d[u], g + "  ");
    }return k;
  }var z = parseInt(e.substr(l, 2), 16);if ((z & 128) != 0) {
    var n = z & 31;if ((z & 32) != 0) {
      var k = g + "[" + n + "]\n";var d = w(e, l);for (var u = 0; u < d.length; u++) {
        k = k + y(e, c, d[u], g + "  ");
      }return k;
    } else {
      var h = j(e, l);if (h.substr(0, 8) == "68747470") {
        h = hextoutf8(h);
      }if (c.x509ExtName === "subjectAltName" && n == 2) {
        h = hextoutf8(h);
      }var k = g + "[" + n + "] " + h + "\n";return k;
    }
  }return g + "UNKNOWN(" + e.substr(l, 2) + ") " + j(e, l) + "\n";
};ASN1HEX.isASN1HEX = function (e) {
  var d = ASN1HEX;if (e.length % 2 == 1) {
    return false;
  }var c = d.getVblen(e, 0);var b = e.substr(0, 2);var f = d.getL(e, 0);var a = e.length - b.length - f.length;if (a == c * 2) {
    return true;
  }return false;
};ASN1HEX.oidname = function (a) {
  var c = KJUR.asn1;if (KJUR.lang.String.isHex(a)) {
    a = c.ASN1Util.oidHexToInt(a);
  }var b = c.x509.OID.oid2name(a);if (b === "") {
    b = a;
  }return b;
};
var KJUR;if (typeof KJUR == "undefined" || !KJUR) {
  exports.KJUR = KJUR = {};
}if (typeof KJUR.lang == "undefined" || !KJUR.lang) {
  KJUR.lang = {};
}KJUR.lang.String = function () {};function Base64x() {}function stoBA(d) {
  var b = new Array();for (var c = 0; c < d.length; c++) {
    b[c] = d.charCodeAt(c);
  }return b;
}function BAtos(b) {
  var d = "";for (var c = 0; c < b.length; c++) {
    d = d + String.fromCharCode(b[c]);
  }return d;
}function BAtohex(b) {
  var e = "";for (var d = 0; d < b.length; d++) {
    var c = b[d].toString(16);if (c.length == 1) {
      c = "0" + c;
    }e = e + c;
  }return e;
}function stohex(a) {
  return BAtohex(stoBA(a));
}function stob64(a) {
  return hex2b64(stohex(a));
}function stob64u(a) {
  return b64tob64u(hex2b64(stohex(a)));
}function b64utos(a) {
  return BAtos(b64toBA(b64utob64(a)));
}function b64tob64u(a) {
  a = a.replace(/\=/g, "");a = a.replace(/\+/g, "-");a = a.replace(/\//g, "_");return a;
}function b64utob64(a) {
  if (a.length % 4 == 2) {
    a = a + "==";
  } else {
    if (a.length % 4 == 3) {
      a = a + "=";
    }
  }a = a.replace(/-/g, "+");a = a.replace(/_/g, "/");return a;
}function hextob64u(a) {
  if (a.length % 2 == 1) {
    a = "0" + a;
  }return b64tob64u(hex2b64(a));
}function b64utohex(a) {
  return b64tohex(b64utob64(a));
}var utf8tob64u, b64utoutf8;if (typeof Buffer === "function") {
  exports.utf8tob64u = utf8tob64u = function utf8tob64u(a) {
    return b64tob64u(new Buffer(a, "utf8").toString("base64"));
  };exports.b64utoutf8 = b64utoutf8 = function b64utoutf8(a) {
    return new Buffer(b64utob64(a), "base64").toString("utf8");
  };
} else {
  exports.utf8tob64u = utf8tob64u = function utf8tob64u(a) {
    return hextob64u(uricmptohex(encodeURIComponentAll(a)));
  };exports.b64utoutf8 = b64utoutf8 = function b64utoutf8(a) {
    return decodeURIComponent(hextouricmp(b64utohex(a)));
  };
}function utf8tob64(a) {
  return hex2b64(uricmptohex(encodeURIComponentAll(a)));
}function b64toutf8(a) {
  return decodeURIComponent(hextouricmp(b64tohex(a)));
}function utf8tohex(a) {
  return uricmptohex(encodeURIComponentAll(a));
}function hextoutf8(a) {
  return decodeURIComponent(hextouricmp(a));
}function hextorstr(c) {
  var b = "";for (var a = 0; a < c.length - 1; a += 2) {
    b += String.fromCharCode(parseInt(c.substr(a, 2), 16));
  }return b;
}function rstrtohex(c) {
  var a = "";for (var b = 0; b < c.length; b++) {
    a += ("0" + c.charCodeAt(b).toString(16)).slice(-2);
  }return a;
}function hextob64(a) {
  return hex2b64(a);
}function hextob64nl(b) {
  var a = hextob64(b);var c = a.replace(/(.{64})/g, "$1\r\n");c = c.replace(/\r\n$/, "");return c;
}function b64nltohex(b) {
  var a = b.replace(/[^0-9A-Za-z\/+=]*/g, "");var c = b64tohex(a);return c;
}function hextopem(a, b) {
  var c = hextob64nl(a);return "-----BEGIN " + b + "-----\r\n" + c + "\r\n-----END " + b + "-----\r\n";
}function pemtohex(a, b) {
  if (a.indexOf("-----BEGIN ") == -1) {
    throw "can't find PEM header: " + b;
  }if (b !== undefined) {
    a = a.replace("-----BEGIN " + b + "-----", "");a = a.replace("-----END " + b + "-----", "");
  } else {
    a = a.replace(/-----BEGIN [^-]+-----/, "");a = a.replace(/-----END [^-]+-----/, "");
  }return b64nltohex(a);
}function hextoArrayBuffer(d) {
  if (d.length % 2 != 0) {
    throw "input is not even length";
  }if (d.match(/^[0-9A-Fa-f]+$/) == null) {
    throw "input is not hexadecimal";
  }var b = new ArrayBuffer(d.length / 2);var a = new DataView(b);for (var c = 0; c < d.length / 2; c++) {
    a.setUint8(c, parseInt(d.substr(c * 2, 2), 16));
  }return b;
}function ArrayBuffertohex(b) {
  var d = "";var a = new DataView(b);for (var c = 0; c < b.byteLength; c++) {
    d += ("00" + a.getUint8(c).toString(16)).slice(-2);
  }return d;
}function zulutomsec(n) {
  var l, j, m, e, f, i, b, k;var a, h, g, c;c = n.match(/^(\d{2}|\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(|\.\d+)Z$/);if (c) {
    a = c[1];l = parseInt(a);if (a.length === 2) {
      if (50 <= l && l < 100) {
        l = 1900 + l;
      } else {
        if (0 <= l && l < 50) {
          l = 2000 + l;
        }
      }
    }j = parseInt(c[2]) - 1;m = parseInt(c[3]);e = parseInt(c[4]);f = parseInt(c[5]);i = parseInt(c[6]);b = 0;h = c[7];if (h !== "") {
      g = (h.substr(1) + "00").substr(0, 3);b = parseInt(g);
    }return Date.UTC(l, j, m, e, f, i, b);
  }throw "unsupported zulu format: " + n;
}function zulutosec(a) {
  var b = zulutomsec(a);return ~~(b / 1000);
}function zulutodate(a) {
  return new Date(zulutomsec(a));
}function datetozulu(g, e, f) {
  var b;var a = g.getUTCFullYear();if (e) {
    if (a < 1950 || 2049 < a) {
      throw "not proper year for UTCTime: " + a;
    }b = ("" + a).slice(-2);
  } else {
    b = ("000" + a).slice(-4);
  }b += ("0" + (g.getUTCMonth() + 1)).slice(-2);b += ("0" + g.getUTCDate()).slice(-2);b += ("0" + g.getUTCHours()).slice(-2);b += ("0" + g.getUTCMinutes()).slice(-2);b += ("0" + g.getUTCSeconds()).slice(-2);if (f) {
    var c = g.getUTCMilliseconds();if (c !== 0) {
      c = ("00" + c).slice(-3);c = c.replace(/0+$/g, "");b += "." + c;
    }
  }b += "Z";return b;
}function uricmptohex(a) {
  return a.replace(/%/g, "");
}function hextouricmp(a) {
  return a.replace(/(..)/g, "%$1");
}function ipv6tohex(g) {
  var b = "malformed IPv6 address";if (!g.match(/^[0-9A-Fa-f:]+$/)) {
    throw b;
  }g = g.toLowerCase();var d = g.split(":").length - 1;if (d < 2) {
    throw b;
  }var e = ":".repeat(7 - d + 2);g = g.replace("::", e);var c = g.split(":");if (c.length != 8) {
    throw b;
  }for (var f = 0; f < 8; f++) {
    c[f] = ("0000" + c[f]).slice(-4);
  }return c.join("");
}function hextoipv6(e) {
  if (!e.match(/^[0-9A-Fa-f]{32}$/)) {
    throw "malformed IPv6 address octet";
  }e = e.toLowerCase();var b = e.match(/.{1,4}/g);for (var d = 0; d < 8; d++) {
    b[d] = b[d].replace(/^0+/, "");if (b[d] == "") {
      b[d] = "0";
    }
  }e = ":" + b.join(":") + ":";var c = e.match(/:(0:){2,}/g);if (c === null) {
    return e.slice(1, -1);
  }var f = "";for (var d = 0; d < c.length; d++) {
    if (c[d].length > f.length) {
      f = c[d];
    }
  }e = e.replace(f, "::");return e.slice(1, -1);
}function hextoip(b) {
  var d = "malformed hex value";if (!b.match(/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/)) {
    throw d;
  }if (b.length == 8) {
    var c;try {
      c = parseInt(b.substr(0, 2), 16) + "." + parseInt(b.substr(2, 2), 16) + "." + parseInt(b.substr(4, 2), 16) + "." + parseInt(b.substr(6, 2), 16);return c;
    } catch (a) {
      throw d;
    }
  } else {
    if (b.length == 32) {
      return hextoipv6(b);
    } else {
      return b;
    }
  }
}function iptohex(f) {
  var j = "malformed IP address";f = f.toLowerCase(f);if (f.match(/^[0-9.]+$/)) {
    var b = f.split(".");if (b.length !== 4) {
      throw j;
    }var g = "";try {
      for (var e = 0; e < 4; e++) {
        var h = parseInt(b[e]);g += ("0" + h.toString(16)).slice(-2);
      }return g;
    } catch (c) {
      throw j;
    }
  } else {
    if (f.match(/^[0-9a-f:]+$/) && f.indexOf(":") !== -1) {
      return ipv6tohex(f);
    } else {
      throw j;
    }
  }
}function encodeURIComponentAll(a) {
  var d = encodeURIComponent(a);var b = "";for (var c = 0; c < d.length; c++) {
    if (d[c] == "%") {
      b = b + d.substr(c, 3);c = c + 2;
    } else {
      b = b + "%" + stohex(d[c]);
    }
  }return b;
}function newline_toUnix(a) {
  a = a.replace(/\r\n/mg, "\n");return a;
}function newline_toDos(a) {
  a = a.replace(/\r\n/mg, "\n");a = a.replace(/\n/mg, "\r\n");return a;
}KJUR.lang.String.isInteger = function (a) {
  if (a.match(/^[0-9]+$/)) {
    return true;
  } else {
    if (a.match(/^-[0-9]+$/)) {
      return true;
    } else {
      return false;
    }
  }
};KJUR.lang.String.isHex = function (a) {
  if (a.length % 2 == 0 && (a.match(/^[0-9a-f]+$/) || a.match(/^[0-9A-F]+$/))) {
    return true;
  } else {
    return false;
  }
};KJUR.lang.String.isBase64 = function (a) {
  a = a.replace(/\s+/g, "");if (a.match(/^[0-9A-Za-z+\/]+={0,3}$/) && a.length % 4 == 0) {
    return true;
  } else {
    return false;
  }
};KJUR.lang.String.isBase64URL = function (a) {
  if (a.match(/[+/=]/)) {
    return false;
  }a = b64utob64(a);return KJUR.lang.String.isBase64(a);
};KJUR.lang.String.isIntegerArray = function (a) {
  a = a.replace(/\s+/g, "");if (a.match(/^\[[0-9,]+\]$/)) {
    return true;
  } else {
    return false;
  }
};function hextoposhex(a) {
  if (a.length % 2 == 1) {
    return "0" + a;
  }if (a.substr(0, 1) > "7") {
    return "00" + a;
  }return a;
}function intarystrtohex(b) {
  b = b.replace(/^\s*\[\s*/, "");b = b.replace(/\s*\]\s*$/, "");b = b.replace(/\s*/g, "");try {
    var c = b.split(/,/).map(function (g, e, h) {
      var f = parseInt(g);if (f < 0 || 255 < f) {
        throw "integer not in range 0-255";
      }var d = ("00" + f.toString(16)).slice(-2);return d;
    }).join("");return c;
  } catch (a) {
    throw "malformed integer array string: " + a;
  }
}var strdiffidx = function strdiffidx(c, a) {
  var d = c.length;if (c.length > a.length) {
    d = a.length;
  }for (var b = 0; b < d; b++) {
    if (c.charCodeAt(b) != a.charCodeAt(b)) {
      return b;
    }
  }if (c.length != a.length) {
    return d;
  }return -1;
};
if (typeof KJUR == "undefined" || !KJUR) {
  exports.KJUR = KJUR = {};
}if (typeof KJUR.crypto == "undefined" || !KJUR.crypto) {
  KJUR.crypto = {};
}KJUR.crypto.Util = new function () {
  this.DIGESTINFOHEAD = { sha1: "3021300906052b0e03021a05000414", sha224: "302d300d06096086480165030402040500041c", sha256: "3031300d060960864801650304020105000420", sha384: "3041300d060960864801650304020205000430", sha512: "3051300d060960864801650304020305000440", md2: "3020300c06082a864886f70d020205000410", md5: "3020300c06082a864886f70d020505000410", ripemd160: "3021300906052b2403020105000414" };this.DEFAULTPROVIDER = { md5: "cryptojs", sha1: "cryptojs", sha224: "cryptojs", sha256: "cryptojs", sha384: "cryptojs", sha512: "cryptojs", ripemd160: "cryptojs", hmacmd5: "cryptojs", hmacsha1: "cryptojs", hmacsha224: "cryptojs", hmacsha256: "cryptojs", hmacsha384: "cryptojs", hmacsha512: "cryptojs", hmacripemd160: "cryptojs", MD5withRSA: "cryptojs/jsrsa", SHA1withRSA: "cryptojs/jsrsa", SHA224withRSA: "cryptojs/jsrsa", SHA256withRSA: "cryptojs/jsrsa", SHA384withRSA: "cryptojs/jsrsa", SHA512withRSA: "cryptojs/jsrsa", RIPEMD160withRSA: "cryptojs/jsrsa", MD5withECDSA: "cryptojs/jsrsa", SHA1withECDSA: "cryptojs/jsrsa", SHA224withECDSA: "cryptojs/jsrsa", SHA256withECDSA: "cryptojs/jsrsa", SHA384withECDSA: "cryptojs/jsrsa", SHA512withECDSA: "cryptojs/jsrsa", RIPEMD160withECDSA: "cryptojs/jsrsa", SHA1withDSA: "cryptojs/jsrsa", SHA224withDSA: "cryptojs/jsrsa", SHA256withDSA: "cryptojs/jsrsa", MD5withRSAandMGF1: "cryptojs/jsrsa", SHA1withRSAandMGF1: "cryptojs/jsrsa", SHA224withRSAandMGF1: "cryptojs/jsrsa", SHA256withRSAandMGF1: "cryptojs/jsrsa", SHA384withRSAandMGF1: "cryptojs/jsrsa", SHA512withRSAandMGF1: "cryptojs/jsrsa", RIPEMD160withRSAandMGF1: "cryptojs/jsrsa" };this.CRYPTOJSMESSAGEDIGESTNAME = { md5: CryptoJS.algo.MD5, sha1: CryptoJS.algo.SHA1, sha224: CryptoJS.algo.SHA224, sha256: CryptoJS.algo.SHA256, sha384: CryptoJS.algo.SHA384, sha512: CryptoJS.algo.SHA512, ripemd160: CryptoJS.algo.RIPEMD160 };this.getDigestInfoHex = function (a, b) {
    if (typeof this.DIGESTINFOHEAD[b] == "undefined") {
      throw "alg not supported in Util.DIGESTINFOHEAD: " + b;
    }return this.DIGESTINFOHEAD[b] + a;
  };this.getPaddedDigestInfoHex = function (h, a, j) {
    var c = this.getDigestInfoHex(h, a);var d = j / 4;if (c.length + 22 > d) {
      throw "key is too short for SigAlg: keylen=" + j + "," + a;
    }var b = "0001";var k = "00" + c;var g = "";var l = d - b.length - k.length;for (var f = 0; f < l; f += 2) {
      g += "ff";
    }var e = b + g + k;return e;
  };this.hashString = function (a, c) {
    var b = new KJUR.crypto.MessageDigest({ alg: c });return b.digestString(a);
  };this.hashHex = function (b, c) {
    var a = new KJUR.crypto.MessageDigest({ alg: c });return a.digestHex(b);
  };this.sha1 = function (a) {
    var b = new KJUR.crypto.MessageDigest({ alg: "sha1", prov: "cryptojs" });return b.digestString(a);
  };this.sha256 = function (a) {
    var b = new KJUR.crypto.MessageDigest({ alg: "sha256", prov: "cryptojs" });return b.digestString(a);
  };this.sha256Hex = function (a) {
    var b = new KJUR.crypto.MessageDigest({ alg: "sha256", prov: "cryptojs" });return b.digestHex(a);
  };this.sha512 = function (a) {
    var b = new KJUR.crypto.MessageDigest({ alg: "sha512", prov: "cryptojs" });return b.digestString(a);
  };this.sha512Hex = function (a) {
    var b = new KJUR.crypto.MessageDigest({ alg: "sha512", prov: "cryptojs" });return b.digestHex(a);
  };
}();KJUR.crypto.Util.md5 = function (a) {
  var b = new KJUR.crypto.MessageDigest({ alg: "md5", prov: "cryptojs" });return b.digestString(a);
};KJUR.crypto.Util.ripemd160 = function (a) {
  var b = new KJUR.crypto.MessageDigest({ alg: "ripemd160", prov: "cryptojs" });return b.digestString(a);
};KJUR.crypto.Util.SECURERANDOMGEN = new SecureRandom();KJUR.crypto.Util.getRandomHexOfNbytes = function (b) {
  var a = new Array(b);KJUR.crypto.Util.SECURERANDOMGEN.nextBytes(a);return BAtohex(a);
};KJUR.crypto.Util.getRandomBigIntegerOfNbytes = function (a) {
  return new BigInteger(KJUR.crypto.Util.getRandomHexOfNbytes(a), 16);
};KJUR.crypto.Util.getRandomHexOfNbits = function (d) {
  var c = d % 8;var a = (d - c) / 8;var b = new Array(a + 1);KJUR.crypto.Util.SECURERANDOMGEN.nextBytes(b);b[0] = (255 << c & 255 ^ 255) & b[0];return BAtohex(b);
};KJUR.crypto.Util.getRandomBigIntegerOfNbits = function (a) {
  return new BigInteger(KJUR.crypto.Util.getRandomHexOfNbits(a), 16);
};KJUR.crypto.Util.getRandomBigIntegerZeroToMax = function (b) {
  var a = b.bitLength();while (1) {
    var c = KJUR.crypto.Util.getRandomBigIntegerOfNbits(a);if (b.compareTo(c) != -1) {
      return c;
    }
  }
};KJUR.crypto.Util.getRandomBigIntegerMinToMax = function (e, b) {
  var c = e.compareTo(b);if (c == 1) {
    throw "biMin is greater than biMax";
  }if (c == 0) {
    return e;
  }var a = b.subtract(e);var d = KJUR.crypto.Util.getRandomBigIntegerZeroToMax(a);return d.add(e);
};KJUR.crypto.MessageDigest = function (c) {
  var b = null;var a = null;var d = null;this.setAlgAndProvider = function (g, f) {
    g = KJUR.crypto.MessageDigest.getCanonicalAlgName(g);if (g !== null && f === undefined) {
      f = KJUR.crypto.Util.DEFAULTPROVIDER[g];
    }if (":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(g) != -1 && f == "cryptojs") {
      try {
        this.md = KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[g].create();
      } catch (e) {
        throw "setAlgAndProvider hash alg set fail alg=" + g + "/" + e;
      }this.updateString = function (h) {
        this.md.update(h);
      };this.updateHex = function (h) {
        var i = CryptoJS.enc.Hex.parse(h);this.md.update(i);
      };this.digest = function () {
        var h = this.md.finalize();return h.toString(CryptoJS.enc.Hex);
      };this.digestString = function (h) {
        this.updateString(h);return this.digest();
      };this.digestHex = function (h) {
        this.updateHex(h);return this.digest();
      };
    }if (":sha256:".indexOf(g) != -1 && f == "sjcl") {
      try {
        this.md = new sjcl.hash.sha256();
      } catch (e) {
        throw "setAlgAndProvider hash alg set fail alg=" + g + "/" + e;
      }this.updateString = function (h) {
        this.md.update(h);
      };this.updateHex = function (i) {
        var h = sjcl.codec.hex.toBits(i);this.md.update(h);
      };this.digest = function () {
        var h = this.md.finalize();return sjcl.codec.hex.fromBits(h);
      };this.digestString = function (h) {
        this.updateString(h);return this.digest();
      };this.digestHex = function (h) {
        this.updateHex(h);return this.digest();
      };
    }
  };this.updateString = function (e) {
    throw "updateString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
  };this.updateHex = function (e) {
    throw "updateHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
  };this.digest = function () {
    throw "digest() not supported for this alg/prov: " + this.algName + "/" + this.provName;
  };this.digestString = function (e) {
    throw "digestString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
  };this.digestHex = function (e) {
    throw "digestHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
  };if (c !== undefined) {
    if (c.alg !== undefined) {
      this.algName = c.alg;if (c.prov === undefined) {
        this.provName = KJUR.crypto.Util.DEFAULTPROVIDER[this.algName];
      }this.setAlgAndProvider(this.algName, this.provName);
    }
  }
};KJUR.crypto.MessageDigest.getCanonicalAlgName = function (a) {
  if (typeof a === "string") {
    a = a.toLowerCase();a = a.replace(/-/, "");
  }return a;
};KJUR.crypto.MessageDigest.getHashLength = function (c) {
  var b = KJUR.crypto.MessageDigest;var a = b.getCanonicalAlgName(c);if (b.HASHLENGTH[a] === undefined) {
    throw "not supported algorithm: " + c;
  }return b.HASHLENGTH[a];
};KJUR.crypto.MessageDigest.HASHLENGTH = { md5: 16, sha1: 20, sha224: 28, sha256: 32, sha384: 48, sha512: 64, ripemd160: 20 };KJUR.crypto.Mac = function (d) {
  var f = null;var c = null;var a = null;var e = null;var b = null;this.setAlgAndProvider = function (k, i) {
    k = k.toLowerCase();if (k == null) {
      k = "hmacsha1";
    }k = k.toLowerCase();if (k.substr(0, 4) != "hmac") {
      throw "setAlgAndProvider unsupported HMAC alg: " + k;
    }if (i === undefined) {
      i = KJUR.crypto.Util.DEFAULTPROVIDER[k];
    }this.algProv = k + "/" + i;var g = k.substr(4);if (":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(g) != -1 && i == "cryptojs") {
      try {
        var j = KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[g];this.mac = CryptoJS.algo.HMAC.create(j, this.pass);
      } catch (h) {
        throw "setAlgAndProvider hash alg set fail hashAlg=" + g + "/" + h;
      }this.updateString = function (l) {
        this.mac.update(l);
      };this.updateHex = function (l) {
        var m = CryptoJS.enc.Hex.parse(l);this.mac.update(m);
      };this.doFinal = function () {
        var l = this.mac.finalize();return l.toString(CryptoJS.enc.Hex);
      };this.doFinalString = function (l) {
        this.updateString(l);return this.doFinal();
      };this.doFinalHex = function (l) {
        this.updateHex(l);return this.doFinal();
      };
    }
  };this.updateString = function (g) {
    throw "updateString(str) not supported for this alg/prov: " + this.algProv;
  };this.updateHex = function (g) {
    throw "updateHex(hex) not supported for this alg/prov: " + this.algProv;
  };this.doFinal = function () {
    throw "digest() not supported for this alg/prov: " + this.algProv;
  };this.doFinalString = function (g) {
    throw "digestString(str) not supported for this alg/prov: " + this.algProv;
  };this.doFinalHex = function (g) {
    throw "digestHex(hex) not supported for this alg/prov: " + this.algProv;
  };this.setPassword = function (h) {
    if (typeof h == "string") {
      var g = h;if (h.length % 2 == 1 || !h.match(/^[0-9A-Fa-f]+$/)) {
        g = rstrtohex(h);
      }this.pass = CryptoJS.enc.Hex.parse(g);return;
    }if ((typeof h === "undefined" ? "undefined" : _typeof(h)) != "object") {
      throw "KJUR.crypto.Mac unsupported password type: " + h;
    }var g = null;if (h.hex !== undefined) {
      if (h.hex.length % 2 != 0 || !h.hex.match(/^[0-9A-Fa-f]+$/)) {
        throw "Mac: wrong hex password: " + h.hex;
      }g = h.hex;
    }if (h.utf8 !== undefined) {
      g = utf8tohex(h.utf8);
    }if (h.rstr !== undefined) {
      g = rstrtohex(h.rstr);
    }if (h.b64 !== undefined) {
      g = b64tohex(h.b64);
    }if (h.b64u !== undefined) {
      g = b64utohex(h.b64u);
    }if (g == null) {
      throw "KJUR.crypto.Mac unsupported password type: " + h;
    }this.pass = CryptoJS.enc.Hex.parse(g);
  };if (d !== undefined) {
    if (d.pass !== undefined) {
      this.setPassword(d.pass);
    }if (d.alg !== undefined) {
      this.algName = d.alg;if (d.prov === undefined) {
        this.provName = KJUR.crypto.Util.DEFAULTPROVIDER[this.algName];
      }this.setAlgAndProvider(this.algName, this.provName);
    }
  }
};KJUR.crypto.Signature = function (o) {
  var q = null;var n = null;var r = null;var c = null;var l = null;var d = null;var k = null;var h = null;var p = null;var e = null;var b = -1;var g = null;var j = null;var a = null;var i = null;var f = null;this._setAlgNames = function () {
    var s = this.algName.match(/^(.+)with(.+)$/);if (s) {
      this.mdAlgName = s[1].toLowerCase();this.pubkeyAlgName = s[2].toLowerCase();
    }
  };this._zeroPaddingOfSignature = function (x, w) {
    var v = "";var t = w / 4 - x.length;for (var u = 0; u < t; u++) {
      v = v + "0";
    }return v + x;
  };this.setAlgAndProvider = function (u, t) {
    this._setAlgNames();if (t != "cryptojs/jsrsa") {
      throw "provider not supported: " + t;
    }if (":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName) != -1) {
      try {
        this.md = new KJUR.crypto.MessageDigest({ alg: this.mdAlgName });
      } catch (s) {
        throw "setAlgAndProvider hash alg set fail alg=" + this.mdAlgName + "/" + s;
      }this.init = function (w, x) {
        var y = null;try {
          if (x === undefined) {
            y = KEYUTIL.getKey(w);
          } else {
            y = KEYUTIL.getKey(w, x);
          }
        } catch (v) {
          throw "init failed:" + v;
        }if (y.isPrivate === true) {
          this.prvKey = y;this.state = "SIGN";
        } else {
          if (y.isPublic === true) {
            this.pubKey = y;this.state = "VERIFY";
          } else {
            throw "init failed.:" + y;
          }
        }
      };this.updateString = function (v) {
        this.md.updateString(v);
      };this.updateHex = function (v) {
        this.md.updateHex(v);
      };this.sign = function () {
        this.sHashHex = this.md.digest();if (typeof this.ecprvhex != "undefined" && typeof this.eccurvename != "undefined") {
          var v = new KJUR.crypto.ECDSA({ curve: this.eccurvename });this.hSign = v.signHex(this.sHashHex, this.ecprvhex);
        } else {
          if (this.prvKey instanceof RSAKey && this.pubkeyAlgName === "rsaandmgf1") {
            this.hSign = this.prvKey.signWithMessageHashPSS(this.sHashHex, this.mdAlgName, this.pssSaltLen);
          } else {
            if (this.prvKey instanceof RSAKey && this.pubkeyAlgName === "rsa") {
              this.hSign = this.prvKey.signWithMessageHash(this.sHashHex, this.mdAlgName);
            } else {
              if (this.prvKey instanceof KJUR.crypto.ECDSA) {
                this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
              } else {
                if (this.prvKey instanceof KJUR.crypto.DSA) {
                  this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
                } else {
                  throw "Signature: unsupported private key alg: " + this.pubkeyAlgName;
                }
              }
            }
          }
        }return this.hSign;
      };this.signString = function (v) {
        this.updateString(v);return this.sign();
      };this.signHex = function (v) {
        this.updateHex(v);return this.sign();
      };this.verify = function (v) {
        this.sHashHex = this.md.digest();if (typeof this.ecpubhex != "undefined" && typeof this.eccurvename != "undefined") {
          var w = new KJUR.crypto.ECDSA({ curve: this.eccurvename });return w.verifyHex(this.sHashHex, v, this.ecpubhex);
        } else {
          if (this.pubKey instanceof RSAKey && this.pubkeyAlgName === "rsaandmgf1") {
            return this.pubKey.verifyWithMessageHashPSS(this.sHashHex, v, this.mdAlgName, this.pssSaltLen);
          } else {
            if (this.pubKey instanceof RSAKey && this.pubkeyAlgName === "rsa") {
              return this.pubKey.verifyWithMessageHash(this.sHashHex, v);
            } else {
              if (KJUR.crypto.ECDSA !== undefined && this.pubKey instanceof KJUR.crypto.ECDSA) {
                return this.pubKey.verifyWithMessageHash(this.sHashHex, v);
              } else {
                if (KJUR.crypto.DSA !== undefined && this.pubKey instanceof KJUR.crypto.DSA) {
                  return this.pubKey.verifyWithMessageHash(this.sHashHex, v);
                } else {
                  throw "Signature: unsupported public key alg: " + this.pubkeyAlgName;
                }
              }
            }
          }
        }
      };
    }
  };this.init = function (s, t) {
    throw "init(key, pass) not supported for this alg:prov=" + this.algProvName;
  };this.updateString = function (s) {
    throw "updateString(str) not supported for this alg:prov=" + this.algProvName;
  };this.updateHex = function (s) {
    throw "updateHex(hex) not supported for this alg:prov=" + this.algProvName;
  };this.sign = function () {
    throw "sign() not supported for this alg:prov=" + this.algProvName;
  };this.signString = function (s) {
    throw "digestString(str) not supported for this alg:prov=" + this.algProvName;
  };this.signHex = function (s) {
    throw "digestHex(hex) not supported for this alg:prov=" + this.algProvName;
  };this.verify = function (s) {
    throw "verify(hSigVal) not supported for this alg:prov=" + this.algProvName;
  };this.initParams = o;if (o !== undefined) {
    if (o.alg !== undefined) {
      this.algName = o.alg;if (o.prov === undefined) {
        this.provName = KJUR.crypto.Util.DEFAULTPROVIDER[this.algName];
      } else {
        this.provName = o.prov;
      }this.algProvName = this.algName + ":" + this.provName;this.setAlgAndProvider(this.algName, this.provName);this._setAlgNames();
    }if (o.psssaltlen !== undefined) {
      this.pssSaltLen = o.psssaltlen;
    }if (o.prvkeypem !== undefined) {
      if (o.prvkeypas !== undefined) {
        throw "both prvkeypem and prvkeypas parameters not supported";
      } else {
        try {
          var q = KEYUTIL.getKey(o.prvkeypem);this.init(q);
        } catch (m) {
          throw "fatal error to load pem private key: " + m;
        }
      }
    }
  }
};KJUR.crypto.Cipher = function (a) {};KJUR.crypto.Cipher.encrypt = function (e, f, d) {
  if (f instanceof RSAKey && f.isPublic) {
    var c = KJUR.crypto.Cipher.getAlgByKeyAndName(f, d);if (c === "RSA") {
      return f.encrypt(e);
    }if (c === "RSAOAEP") {
      return f.encryptOAEP(e, "sha1");
    }var b = c.match(/^RSAOAEP(\d+)$/);if (b !== null) {
      return f.encryptOAEP(e, "sha" + b[1]);
    }throw "Cipher.encrypt: unsupported algorithm for RSAKey: " + d;
  } else {
    throw "Cipher.encrypt: unsupported key or algorithm";
  }
};KJUR.crypto.Cipher.decrypt = function (e, f, d) {
  if (f instanceof RSAKey && f.isPrivate) {
    var c = KJUR.crypto.Cipher.getAlgByKeyAndName(f, d);if (c === "RSA") {
      return f.decrypt(e);
    }if (c === "RSAOAEP") {
      return f.decryptOAEP(e, "sha1");
    }var b = c.match(/^RSAOAEP(\d+)$/);if (b !== null) {
      return f.decryptOAEP(e, "sha" + b[1]);
    }throw "Cipher.decrypt: unsupported algorithm for RSAKey: " + d;
  } else {
    throw "Cipher.decrypt: unsupported key or algorithm";
  }
};KJUR.crypto.Cipher.getAlgByKeyAndName = function (b, a) {
  if (b instanceof RSAKey) {
    if (":RSA:RSAOAEP:RSAOAEP224:RSAOAEP256:RSAOAEP384:RSAOAEP512:".indexOf(a) != -1) {
      return a;
    }if (a === null || a === undefined) {
      return "RSA";
    }throw "getAlgByKeyAndName: not supported algorithm name for RSAKey: " + a;
  }throw "getAlgByKeyAndName: not supported algorithm name: " + a;
};KJUR.crypto.OID = new function () {
  this.oidhex2name = { "2a864886f70d010101": "rsaEncryption", "2a8648ce3d0201": "ecPublicKey", "2a8648ce380401": "dsa", "2a8648ce3d030107": "secp256r1", "2b8104001f": "secp192k1", "2b81040021": "secp224r1", "2b8104000a": "secp256k1", "2b81040023": "secp521r1", "2b81040022": "secp384r1", "2a8648ce380403": "SHA1withDSA", "608648016503040301": "SHA224withDSA", "608648016503040302": "SHA256withDSA" };
}();
if (typeof KJUR == "undefined" || !KJUR) {
  exports.KJUR = KJUR = {};
}if (typeof KJUR.crypto == "undefined" || !KJUR.crypto) {
  KJUR.crypto = {};
}KJUR.crypto.ECDSA = function (h) {
  var e = "secp256r1";var g = null;var b = null;var f = null;var a = new SecureRandom();var d = null;this.type = "EC";this.isPrivate = false;this.isPublic = false;function c(s, o, r, n) {
    var j = Math.max(o.bitLength(), n.bitLength());var t = s.add2D(r);var q = s.curve.getInfinity();for (var p = j - 1; p >= 0; --p) {
      q = q.twice2D();q.z = BigInteger.ONE;if (o.testBit(p)) {
        if (n.testBit(p)) {
          q = q.add2D(t);
        } else {
          q = q.add2D(s);
        }
      } else {
        if (n.testBit(p)) {
          q = q.add2D(r);
        }
      }
    }return q;
  }this.getBigRandom = function (i) {
    return new BigInteger(i.bitLength(), a).mod(i.subtract(BigInteger.ONE)).add(BigInteger.ONE);
  };this.setNamedCurve = function (i) {
    this.ecparams = KJUR.crypto.ECParameterDB.getByName(i);this.prvKeyHex = null;this.pubKeyHex = null;this.curveName = i;
  };this.setPrivateKeyHex = function (i) {
    this.isPrivate = true;this.prvKeyHex = i;
  };this.setPublicKeyHex = function (i) {
    this.isPublic = true;this.pubKeyHex = i;
  };this.getPublicKeyXYHex = function () {
    var k = this.pubKeyHex;if (k.substr(0, 2) !== "04") {
      throw "this method supports uncompressed format(04) only";
    }var j = this.ecparams.keylen / 4;if (k.length !== 2 + j * 2) {
      throw "malformed public key hex length";
    }var i = {};i.x = k.substr(2, j);i.y = k.substr(2 + j);return i;
  };this.getShortNISTPCurveName = function () {
    var i = this.curveName;if (i === "secp256r1" || i === "NIST P-256" || i === "P-256" || i === "prime256v1") {
      return "P-256";
    }if (i === "secp384r1" || i === "NIST P-384" || i === "P-384") {
      return "P-384";
    }return null;
  };this.generateKeyPairHex = function () {
    var k = this.ecparams.n;var n = this.getBigRandom(k);var l = this.ecparams.G.multiply(n);var q = l.getX().toBigInteger();var o = l.getY().toBigInteger();var i = this.ecparams.keylen / 4;var m = ("0000000000" + n.toString(16)).slice(-i);var r = ("0000000000" + q.toString(16)).slice(-i);var p = ("0000000000" + o.toString(16)).slice(-i);var j = "04" + r + p;this.setPrivateKeyHex(m);this.setPublicKeyHex(j);return { ecprvhex: m, ecpubhex: j };
  };this.signWithMessageHash = function (i) {
    return this.signHex(i, this.prvKeyHex);
  };this.signHex = function (o, j) {
    var t = new BigInteger(j, 16);var l = this.ecparams.n;var q = new BigInteger(o, 16);do {
      var m = this.getBigRandom(l);var u = this.ecparams.G;var p = u.multiply(m);var i = p.getX().toBigInteger().mod(l);
    } while (i.compareTo(BigInteger.ZERO) <= 0);var v = m.modInverse(l).multiply(q.add(t.multiply(i))).mod(l);return KJUR.crypto.ECDSA.biRSSigToASN1Sig(i, v);
  };this.sign = function (m, u) {
    var q = u;var j = this.ecparams.n;var p = BigInteger.fromByteArrayUnsigned(m);do {
      var l = this.getBigRandom(j);var t = this.ecparams.G;var o = t.multiply(l);var i = o.getX().toBigInteger().mod(j);
    } while (i.compareTo(BigInteger.ZERO) <= 0);var v = l.modInverse(j).multiply(p.add(q.multiply(i))).mod(j);return this.serializeSig(i, v);
  };this.verifyWithMessageHash = function (j, i) {
    return this.verifyHex(j, i, this.pubKeyHex);
  };this.verifyHex = function (m, i, p) {
    var l, j;var o = KJUR.crypto.ECDSA.parseSigHex(i);l = o.r;j = o.s;var k;k = ECPointFp.decodeFromHex(this.ecparams.curve, p);var n = new BigInteger(m, 16);return this.verifyRaw(n, l, j, k);
  };this.verify = function (o, p, j) {
    var l, i;if (Bitcoin.Util.isArray(p)) {
      var n = this.parseSig(p);l = n.r;i = n.s;
    } else {
      if ("object" === (typeof p === "undefined" ? "undefined" : _typeof(p)) && p.r && p.s) {
        l = p.r;i = p.s;
      } else {
        throw "Invalid value for signature";
      }
    }var k;if (j instanceof ECPointFp) {
      k = j;
    } else {
      if (Bitcoin.Util.isArray(j)) {
        k = ECPointFp.decodeFrom(this.ecparams.curve, j);
      } else {
        throw "Invalid format for pubkey value, must be byte array or ECPointFp";
      }
    }var m = BigInteger.fromByteArrayUnsigned(o);return this.verifyRaw(m, l, i, k);
  };this.verifyRaw = function (o, i, w, m) {
    var l = this.ecparams.n;var u = this.ecparams.G;if (i.compareTo(BigInteger.ONE) < 0 || i.compareTo(l) >= 0) {
      return false;
    }if (w.compareTo(BigInteger.ONE) < 0 || w.compareTo(l) >= 0) {
      return false;
    }var p = w.modInverse(l);var k = o.multiply(p).mod(l);var j = i.multiply(p).mod(l);var q = u.multiply(k).add(m.multiply(j));var t = q.getX().toBigInteger().mod(l);return t.equals(i);
  };this.serializeSig = function (k, j) {
    var l = k.toByteArraySigned();var i = j.toByteArraySigned();var m = [];m.push(2);m.push(l.length);m = m.concat(l);m.push(2);m.push(i.length);m = m.concat(i);m.unshift(m.length);m.unshift(48);return m;
  };this.parseSig = function (n) {
    var m;if (n[0] != 48) {
      throw new Error("Signature not a valid DERSequence");
    }m = 2;if (n[m] != 2) {
      throw new Error("First element in signature must be a DERInteger");
    }var l = n.slice(m + 2, m + 2 + n[m + 1]);m += 2 + n[m + 1];if (n[m] != 2) {
      throw new Error("Second element in signature must be a DERInteger");
    }var i = n.slice(m + 2, m + 2 + n[m + 1]);m += 2 + n[m + 1];var k = BigInteger.fromByteArrayUnsigned(l);var j = BigInteger.fromByteArrayUnsigned(i);return { r: k, s: j };
  };this.parseSigCompact = function (m) {
    if (m.length !== 65) {
      throw "Signature has the wrong length";
    }var j = m[0] - 27;if (j < 0 || j > 7) {
      throw "Invalid signature type";
    }var o = this.ecparams.n;var l = BigInteger.fromByteArrayUnsigned(m.slice(1, 33)).mod(o);var k = BigInteger.fromByteArrayUnsigned(m.slice(33, 65)).mod(o);return { r: l, s: k, i: j };
  };this.readPKCS5PrvKeyHex = function (l) {
    var n = ASN1HEX;var m = KJUR.crypto.ECDSA.getName;var p = n.getVbyList;if (n.isASN1HEX(l) === false) {
      throw "not ASN.1 hex string";
    }var i, k, o;try {
      i = p(l, 0, [2, 0], "06");k = p(l, 0, [1], "04");try {
        o = p(l, 0, [3, 0], "03").substr(2);
      } catch (j) {}
    } catch (j) {
      throw "malformed PKCS#1/5 plain ECC private key";
    }this.curveName = m(i);if (this.curveName === undefined) {
      throw "unsupported curve name";
    }this.setNamedCurve(this.curveName);this.setPublicKeyHex(o);this.setPrivateKeyHex(k);this.isPublic = false;
  };this.readPKCS8PrvKeyHex = function (l) {
    var q = ASN1HEX;var i = KJUR.crypto.ECDSA.getName;var n = q.getVbyList;if (q.isASN1HEX(l) === false) {
      throw "not ASN.1 hex string";
    }var j, p, m, k;try {
      j = n(l, 0, [1, 0], "06");p = n(l, 0, [1, 1], "06");m = n(l, 0, [2, 0, 1], "04");try {
        k = n(l, 0, [2, 0, 2, 0], "03").substr(2);
      } catch (o) {}
    } catch (o) {
      throw "malformed PKCS#8 plain ECC private key";
    }this.curveName = i(p);if (this.curveName === undefined) {
      throw "unsupported curve name";
    }this.setNamedCurve(this.curveName);this.setPublicKeyHex(k);this.setPrivateKeyHex(m);this.isPublic = false;
  };this.readPKCS8PubKeyHex = function (l) {
    var n = ASN1HEX;var m = KJUR.crypto.ECDSA.getName;var p = n.getVbyList;if (n.isASN1HEX(l) === false) {
      throw "not ASN.1 hex string";
    }var k, i, o;try {
      k = p(l, 0, [0, 0], "06");i = p(l, 0, [0, 1], "06");o = p(l, 0, [1], "03").substr(2);
    } catch (j) {
      throw "malformed PKCS#8 ECC public key";
    }this.curveName = m(i);if (this.curveName === null) {
      throw "unsupported curve name";
    }this.setNamedCurve(this.curveName);this.setPublicKeyHex(o);
  };this.readCertPubKeyHex = function (k, p) {
    if (p !== 5) {
      p = 6;
    }var m = ASN1HEX;var l = KJUR.crypto.ECDSA.getName;var o = m.getVbyList;if (m.isASN1HEX(k) === false) {
      throw "not ASN.1 hex string";
    }var i, n;try {
      i = o(k, 0, [0, p, 0, 1], "06");n = o(k, 0, [0, p, 1], "03").substr(2);
    } catch (j) {
      throw "malformed X.509 certificate ECC public key";
    }this.curveName = l(i);if (this.curveName === null) {
      throw "unsupported curve name";
    }this.setNamedCurve(this.curveName);this.setPublicKeyHex(n);
  };if (h !== undefined) {
    if (h.curve !== undefined) {
      this.curveName = h.curve;
    }
  }if (this.curveName === undefined) {
    this.curveName = e;
  }this.setNamedCurve(this.curveName);if (h !== undefined) {
    if (h.prv !== undefined) {
      this.setPrivateKeyHex(h.prv);
    }if (h.pub !== undefined) {
      this.setPublicKeyHex(h.pub);
    }
  }
};KJUR.crypto.ECDSA.parseSigHex = function (a) {
  var b = KJUR.crypto.ECDSA.parseSigHexInHexRS(a);var d = new BigInteger(b.r, 16);var c = new BigInteger(b.s, 16);return { r: d, s: c };
};KJUR.crypto.ECDSA.parseSigHexInHexRS = function (f) {
  var j = ASN1HEX;var i = j.getChildIdx;var g = j.getV;if (f.substr(0, 2) != "30") {
    throw "signature is not a ASN.1 sequence";
  }var h = i(f, 0);if (h.length != 2) {
    throw "number of signature ASN.1 sequence elements seem wrong";
  }var e = h[0];var d = h[1];if (f.substr(e, 2) != "02") {
    throw "1st item of sequene of signature is not ASN.1 integer";
  }if (f.substr(d, 2) != "02") {
    throw "2nd item of sequene of signature is not ASN.1 integer";
  }var c = g(f, e);var b = g(f, d);return { r: c, s: b };
};KJUR.crypto.ECDSA.asn1SigToConcatSig = function (c) {
  var d = KJUR.crypto.ECDSA.parseSigHexInHexRS(c);var b = d.r;var a = d.s;if (b.substr(0, 2) == "00" && b.length % 32 == 2) {
    b = b.substr(2);
  }if (a.substr(0, 2) == "00" && a.length % 32 == 2) {
    a = a.substr(2);
  }if (b.length % 32 == 30) {
    b = "00" + b;
  }if (a.length % 32 == 30) {
    a = "00" + a;
  }if (b.length % 32 != 0) {
    throw "unknown ECDSA sig r length error";
  }if (a.length % 32 != 0) {
    throw "unknown ECDSA sig s length error";
  }return b + a;
};KJUR.crypto.ECDSA.concatSigToASN1Sig = function (a) {
  if (a.length / 2 * 8 % (16 * 8) != 0) {
    throw "unknown ECDSA concatinated r-s sig  length error";
  }var c = a.substr(0, a.length / 2);var b = a.substr(a.length / 2);return KJUR.crypto.ECDSA.hexRSSigToASN1Sig(c, b);
};KJUR.crypto.ECDSA.hexRSSigToASN1Sig = function (b, a) {
  var d = new BigInteger(b, 16);var c = new BigInteger(a, 16);return KJUR.crypto.ECDSA.biRSSigToASN1Sig(d, c);
};KJUR.crypto.ECDSA.biRSSigToASN1Sig = function (f, d) {
  var c = KJUR.asn1;var b = new c.DERInteger({ bigint: f });var a = new c.DERInteger({ bigint: d });var e = new c.DERSequence({ array: [b, a] });return e.getEncodedHex();
};KJUR.crypto.ECDSA.getName = function (a) {
  if (a === "2a8648ce3d030107") {
    return "secp256r1";
  }if (a === "2b8104000a") {
    return "secp256k1";
  }if (a === "2b81040022") {
    return "secp384r1";
  }if ("|secp256r1|NIST P-256|P-256|prime256v1|".indexOf(a) !== -1) {
    return "secp256r1";
  }if ("|secp256k1|".indexOf(a) !== -1) {
    return "secp256k1";
  }if ("|secp384r1|NIST P-384|P-384|".indexOf(a) !== -1) {
    return "secp384r1";
  }return null;
};
if (typeof KJUR == "undefined" || !KJUR) {
  exports.KJUR = KJUR = {};
}if (typeof KJUR.crypto == "undefined" || !KJUR.crypto) {
  KJUR.crypto = {};
}KJUR.crypto.ECParameterDB = new function () {
  var b = {};var c = {};function a(d) {
    return new BigInteger(d, 16);
  }this.getByName = function (e) {
    var d = e;if (typeof c[d] != "undefined") {
      d = c[e];
    }if (typeof b[d] != "undefined") {
      return b[d];
    }throw "unregistered EC curve name: " + d;
  };this.regist = function (A, l, o, g, m, e, j, f, k, u, d, x) {
    b[A] = {};var s = a(o);var z = a(g);var y = a(m);var t = a(e);var w = a(j);var r = new ECCurveFp(s, z, y);var q = r.decodePointHex("04" + f + k);b[A]["name"] = A;b[A]["keylen"] = l;b[A]["curve"] = r;b[A]["G"] = q;b[A]["n"] = t;b[A]["h"] = w;b[A]["oid"] = d;b[A]["info"] = x;for (var v = 0; v < u.length; v++) {
      c[u[v]] = A;
    }
  };
}();KJUR.crypto.ECParameterDB.regist("secp128r1", 128, "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC", "E87579C11079F43DD824993C2CEE5ED3", "FFFFFFFE0000000075A30D1B9038A115", "1", "161FF7528B899B2D0C28607CA52C5B86", "CF5AC8395BAFEB13C02DA292DDED7A83", [], "", "secp128r1 : SECG curve over a 128 bit prime field");KJUR.crypto.ECParameterDB.regist("secp160k1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73", "0", "7", "0100000000000000000001B8FA16DFAB9ACA16B6B3", "1", "3B4C382CE37AA192A4019E763036F4F5DD4D7EBB", "938CF935318FDCED6BC28286531733C3F03C4FEE", [], "", "secp160k1 : SECG curve over a 160 bit prime field");KJUR.crypto.ECParameterDB.regist("secp160r1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC", "1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45", "0100000000000000000001F4C8F927AED3CA752257", "1", "4A96B5688EF573284664698968C38BB913CBFC82", "23A628553168947D59DCC912042351377AC5FB32", [], "", "secp160r1 : SECG curve over a 160 bit prime field");KJUR.crypto.ECParameterDB.regist("secp192k1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37", "0", "3", "FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D", "1", "DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D", "9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D", []);KJUR.crypto.ECParameterDB.regist("secp192r1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC", "64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1", "FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831", "1", "188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012", "07192B95FFC8DA78631011ED6B24CDD573F977A11E794811", []);KJUR.crypto.ECParameterDB.regist("secp224r1", 224, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE", "B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4", "FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D", "1", "B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21", "BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34", []);KJUR.crypto.ECParameterDB.regist("secp256k1", 256, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F", "0", "7", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", "1", "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798", "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8", []);KJUR.crypto.ECParameterDB.regist("secp256r1", 256, "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC", "5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B", "FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551", "1", "6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296", "4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5", ["NIST P-256", "P-256", "prime256v1"]);KJUR.crypto.ECParameterDB.regist("secp384r1", 384, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC", "B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973", "1", "AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7", "3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f", ["NIST P-384", "P-384"]);KJUR.crypto.ECParameterDB.regist("secp521r1", 521, "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC", "051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409", "1", "C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66", "011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650", ["NIST P-521", "P-521"]);
var KEYUTIL = function () {
  var d = function d(p, r, q) {
    return k(CryptoJS.AES, p, r, q);
  };var e = function e(p, r, q) {
    return k(CryptoJS.TripleDES, p, r, q);
  };var a = function a(p, r, q) {
    return k(CryptoJS.DES, p, r, q);
  };var k = function k(s, x, u, q) {
    var r = CryptoJS.enc.Hex.parse(x);var w = CryptoJS.enc.Hex.parse(u);var p = CryptoJS.enc.Hex.parse(q);var t = {};t.key = w;t.iv = p;t.ciphertext = r;var v = s.decrypt(t, w, { iv: p });return CryptoJS.enc.Hex.stringify(v);
  };var l = function l(p, r, q) {
    return g(CryptoJS.AES, p, r, q);
  };var o = function o(p, r, q) {
    return g(CryptoJS.TripleDES, p, r, q);
  };var f = function f(p, r, q) {
    return g(CryptoJS.DES, p, r, q);
  };var g = function g(t, y, v, q) {
    var s = CryptoJS.enc.Hex.parse(y);var x = CryptoJS.enc.Hex.parse(v);var p = CryptoJS.enc.Hex.parse(q);var w = t.encrypt(s, x, { iv: p });var r = CryptoJS.enc.Hex.parse(w.toString());var u = CryptoJS.enc.Base64.stringify(r);return u;
  };var i = { "AES-256-CBC": { proc: d, eproc: l, keylen: 32, ivlen: 16 }, "AES-192-CBC": { proc: d, eproc: l, keylen: 24, ivlen: 16 }, "AES-128-CBC": { proc: d, eproc: l, keylen: 16, ivlen: 16 }, "DES-EDE3-CBC": { proc: e, eproc: o, keylen: 24, ivlen: 8 }, "DES-CBC": { proc: a, eproc: f, keylen: 8, ivlen: 8 } };var c = function c(p) {
    return i[p]["proc"];
  };var m = function m(p) {
    var r = CryptoJS.lib.WordArray.random(p);var q = CryptoJS.enc.Hex.stringify(r);return q;
  };var n = function n(v) {
    var w = {};var q = v.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)", "m"));if (q) {
      w.cipher = q[1];w.ivsalt = q[2];
    }var p = v.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));if (p) {
      w.type = p[1];
    }var u = -1;var x = 0;if (v.indexOf("\r\n\r\n") != -1) {
      u = v.indexOf("\r\n\r\n");x = 2;
    }if (v.indexOf("\n\n") != -1) {
      u = v.indexOf("\n\n");x = 1;
    }var t = v.indexOf("-----END");if (u != -1 && t != -1) {
      var r = v.substring(u + x * 2, t - x);r = r.replace(/\s+/g, "");w.data = r;
    }return w;
  };var j = function j(q, y, p) {
    var v = p.substring(0, 16);var t = CryptoJS.enc.Hex.parse(v);var r = CryptoJS.enc.Utf8.parse(y);var u = i[q]["keylen"] + i[q]["ivlen"];var x = "";var w = null;for (;;) {
      var s = CryptoJS.algo.MD5.create();if (w != null) {
        s.update(w);
      }s.update(r);s.update(t);w = s.finalize();x = x + CryptoJS.enc.Hex.stringify(w);if (x.length >= u * 2) {
        break;
      }
    }var z = {};z.keyhex = x.substr(0, i[q]["keylen"] * 2);z.ivhex = x.substr(i[q]["keylen"] * 2, i[q]["ivlen"] * 2);return z;
  };var b = function b(p, v, r, w) {
    var s = CryptoJS.enc.Base64.parse(p);var q = CryptoJS.enc.Hex.stringify(s);var u = i[v]["proc"];var t = u(q, r, w);return t;
  };var h = function h(p, s, q, u) {
    var r = i[s]["eproc"];var t = r(p, q, u);return t;
  };return { version: "1.0.0", parsePKCS5PEM: function parsePKCS5PEM(p) {
      return n(p);
    }, getKeyAndUnusedIvByPasscodeAndIvsalt: function getKeyAndUnusedIvByPasscodeAndIvsalt(q, p, r) {
      return j(q, p, r);
    }, decryptKeyB64: function decryptKeyB64(p, r, q, s) {
      return b(p, r, q, s);
    }, getDecryptedKeyHex: function getDecryptedKeyHex(y, x) {
      var q = n(y);var t = q.type;var r = q.cipher;var p = q.ivsalt;var s = q.data;var w = j(r, x, p);var v = w.keyhex;var u = b(s, r, v, p);return u;
    }, getEncryptedPKCS5PEMFromPrvKeyHex: function getEncryptedPKCS5PEMFromPrvKeyHex(x, s, A, t, r) {
      var p = "";if (typeof t == "undefined" || t == null) {
        t = "AES-256-CBC";
      }if (typeof i[t] == "undefined") {
        throw "KEYUTIL unsupported algorithm: " + t;
      }if (typeof r == "undefined" || r == null) {
        var v = i[t]["ivlen"];var u = m(v);r = u.toUpperCase();
      }var z = j(t, A, r);var y = z.keyhex;var w = h(s, t, y, r);var q = w.replace(/(.{64})/g, "$1\r\n");var p = "-----BEGIN " + x + " PRIVATE KEY-----\r\n";p += "Proc-Type: 4,ENCRYPTED\r\n";p += "DEK-Info: " + t + "," + r + "\r\n";p += "\r\n";p += q;p += "\r\n-----END " + x + " PRIVATE KEY-----\r\n";return p;
    }, parseHexOfEncryptedPKCS8: function parseHexOfEncryptedPKCS8(y) {
      var B = ASN1HEX;var z = B.getChildIdx;var w = B.getV;var t = {};var r = z(y, 0);if (r.length != 2) {
        throw "malformed format: SEQUENCE(0).items != 2: " + r.length;
      }t.ciphertext = w(y, r[1]);var A = z(y, r[0]);if (A.length != 2) {
        throw "malformed format: SEQUENCE(0.0).items != 2: " + A.length;
      }if (w(y, A[0]) != "2a864886f70d01050d") {
        throw "this only supports pkcs5PBES2";
      }var p = z(y, A[1]);if (A.length != 2) {
        throw "malformed format: SEQUENCE(0.0.1).items != 2: " + p.length;
      }var q = z(y, p[1]);if (q.length != 2) {
        throw "malformed format: SEQUENCE(0.0.1.1).items != 2: " + q.length;
      }if (w(y, q[0]) != "2a864886f70d0307") {
        throw "this only supports TripleDES";
      }t.encryptionSchemeAlg = "TripleDES";t.encryptionSchemeIV = w(y, q[1]);var s = z(y, p[0]);if (s.length != 2) {
        throw "malformed format: SEQUENCE(0.0.1.0).items != 2: " + s.length;
      }if (w(y, s[0]) != "2a864886f70d01050c") {
        throw "this only supports pkcs5PBKDF2";
      }var x = z(y, s[1]);if (x.length < 2) {
        throw "malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + x.length;
      }t.pbkdf2Salt = w(y, x[0]);var u = w(y, x[1]);try {
        t.pbkdf2Iter = parseInt(u, 16);
      } catch (v) {
        throw "malformed format pbkdf2Iter: " + u;
      }return t;
    }, getPBKDF2KeyHexFromParam: function getPBKDF2KeyHexFromParam(u, p) {
      var t = CryptoJS.enc.Hex.parse(u.pbkdf2Salt);var q = u.pbkdf2Iter;var s = CryptoJS.PBKDF2(p, t, { keySize: 192 / 32, iterations: q });var r = CryptoJS.enc.Hex.stringify(s);return r;
    }, _getPlainPKCS8HexFromEncryptedPKCS8PEM: function _getPlainPKCS8HexFromEncryptedPKCS8PEM(x, y) {
      var r = pemtohex(x, "ENCRYPTED PRIVATE KEY");var p = this.parseHexOfEncryptedPKCS8(r);var u = KEYUTIL.getPBKDF2KeyHexFromParam(p, y);var v = {};v.ciphertext = CryptoJS.enc.Hex.parse(p.ciphertext);var t = CryptoJS.enc.Hex.parse(u);var s = CryptoJS.enc.Hex.parse(p.encryptionSchemeIV);var w = CryptoJS.TripleDES.decrypt(v, t, { iv: s });var q = CryptoJS.enc.Hex.stringify(w);return q;
    }, getKeyFromEncryptedPKCS8PEM: function getKeyFromEncryptedPKCS8PEM(s, q) {
      var p = this._getPlainPKCS8HexFromEncryptedPKCS8PEM(s, q);var r = this.getKeyFromPlainPrivatePKCS8Hex(p);return r;
    }, parsePlainPrivatePKCS8Hex: function parsePlainPrivatePKCS8Hex(s) {
      var v = ASN1HEX;var u = v.getChildIdx;var t = v.getV;var q = {};q.algparam = null;if (s.substr(0, 2) != "30") {
        throw "malformed plain PKCS8 private key(code:001)";
      }var r = u(s, 0);if (r.length != 3) {
        throw "malformed plain PKCS8 private key(code:002)";
      }if (s.substr(r[1], 2) != "30") {
        throw "malformed PKCS8 private key(code:003)";
      }var p = u(s, r[1]);if (p.length != 2) {
        throw "malformed PKCS8 private key(code:004)";
      }if (s.substr(p[0], 2) != "06") {
        throw "malformed PKCS8 private key(code:005)";
      }q.algoid = t(s, p[0]);if (s.substr(p[1], 2) == "06") {
        q.algparam = t(s, p[1]);
      }if (s.substr(r[2], 2) != "04") {
        throw "malformed PKCS8 private key(code:006)";
      }q.keyidx = v.getVidx(s, r[2]);return q;
    }, getKeyFromPlainPrivatePKCS8PEM: function getKeyFromPlainPrivatePKCS8PEM(q) {
      var p = pemtohex(q, "PRIVATE KEY");var r = this.getKeyFromPlainPrivatePKCS8Hex(p);return r;
    }, getKeyFromPlainPrivatePKCS8Hex: function getKeyFromPlainPrivatePKCS8Hex(p) {
      var q = this.parsePlainPrivatePKCS8Hex(p);var r;if (q.algoid == "2a864886f70d010101") {
        r = new RSAKey();
      } else {
        if (q.algoid == "2a8648ce380401") {
          r = new KJUR.crypto.DSA();
        } else {
          if (q.algoid == "2a8648ce3d0201") {
            r = new KJUR.crypto.ECDSA();
          } else {
            throw "unsupported private key algorithm";
          }
        }
      }r.readPKCS8PrvKeyHex(p);return r;
    }, _getKeyFromPublicPKCS8Hex: function _getKeyFromPublicPKCS8Hex(q) {
      var p;var r = ASN1HEX.getVbyList(q, 0, [0, 0], "06");if (r === "2a864886f70d010101") {
        p = new RSAKey();
      } else {
        if (r === "2a8648ce380401") {
          p = new KJUR.crypto.DSA();
        } else {
          if (r === "2a8648ce3d0201") {
            p = new KJUR.crypto.ECDSA();
          } else {
            throw "unsupported PKCS#8 public key hex";
          }
        }
      }p.readPKCS8PubKeyHex(q);return p;
    }, parsePublicRawRSAKeyHex: function parsePublicRawRSAKeyHex(r) {
      var u = ASN1HEX;var t = u.getChildIdx;var s = u.getV;var p = {};if (r.substr(0, 2) != "30") {
        throw "malformed RSA key(code:001)";
      }var q = t(r, 0);if (q.length != 2) {
        throw "malformed RSA key(code:002)";
      }if (r.substr(q[0], 2) != "02") {
        throw "malformed RSA key(code:003)";
      }p.n = s(r, q[0]);if (r.substr(q[1], 2) != "02") {
        throw "malformed RSA key(code:004)";
      }p.e = s(r, q[1]);return p;
    }, parsePublicPKCS8Hex: function parsePublicPKCS8Hex(t) {
      var v = ASN1HEX;var u = v.getChildIdx;var s = v.getV;var q = {};q.algparam = null;var r = u(t, 0);if (r.length != 2) {
        throw "outer DERSequence shall have 2 elements: " + r.length;
      }var w = r[0];if (t.substr(w, 2) != "30") {
        throw "malformed PKCS8 public key(code:001)";
      }var p = u(t, w);if (p.length != 2) {
        throw "malformed PKCS8 public key(code:002)";
      }if (t.substr(p[0], 2) != "06") {
        throw "malformed PKCS8 public key(code:003)";
      }q.algoid = s(t, p[0]);if (t.substr(p[1], 2) == "06") {
        q.algparam = s(t, p[1]);
      } else {
        if (t.substr(p[1], 2) == "30") {
          q.algparam = {};q.algparam.p = v.getVbyList(t, p[1], [0], "02");q.algparam.q = v.getVbyList(t, p[1], [1], "02");q.algparam.g = v.getVbyList(t, p[1], [2], "02");
        }
      }if (t.substr(r[1], 2) != "03") {
        throw "malformed PKCS8 public key(code:004)";
      }q.key = s(t, r[1]).substr(2);return q;
    } };
}();KEYUTIL.getKey = function (l, k, n) {
  var G = ASN1HEX,
      L = G.getChildIdx,
      v = G.getV,
      d = G.getVbyList,
      c = KJUR.crypto,
      i = c.ECDSA,
      C = c.DSA,
      w = RSAKey,
      M = pemtohex,
      F = KEYUTIL;if (typeof w != "undefined" && l instanceof w) {
    return l;
  }if (typeof i != "undefined" && l instanceof i) {
    return l;
  }if (typeof C != "undefined" && l instanceof C) {
    return l;
  }if (l.curve !== undefined && l.xy !== undefined && l.d === undefined) {
    return new i({ pub: l.xy, curve: l.curve });
  }if (l.curve !== undefined && l.d !== undefined) {
    return new i({ prv: l.d, curve: l.curve });
  }if (l.kty === undefined && l.n !== undefined && l.e !== undefined && l.d === undefined) {
    var P = new w();P.setPublic(l.n, l.e);return P;
  }if (l.kty === undefined && l.n !== undefined && l.e !== undefined && l.d !== undefined && l.p !== undefined && l.q !== undefined && l.dp !== undefined && l.dq !== undefined && l.co !== undefined && l.qi === undefined) {
    var P = new w();P.setPrivateEx(l.n, l.e, l.d, l.p, l.q, l.dp, l.dq, l.co);return P;
  }if (l.kty === undefined && l.n !== undefined && l.e !== undefined && l.d !== undefined && l.p === undefined) {
    var P = new w();P.setPrivate(l.n, l.e, l.d);return P;
  }if (l.p !== undefined && l.q !== undefined && l.g !== undefined && l.y !== undefined && l.x === undefined) {
    var P = new C();P.setPublic(l.p, l.q, l.g, l.y);return P;
  }if (l.p !== undefined && l.q !== undefined && l.g !== undefined && l.y !== undefined && l.x !== undefined) {
    var P = new C();P.setPrivate(l.p, l.q, l.g, l.y, l.x);return P;
  }if (l.kty === "RSA" && l.n !== undefined && l.e !== undefined && l.d === undefined) {
    var P = new w();P.setPublic(b64utohex(l.n), b64utohex(l.e));return P;
  }if (l.kty === "RSA" && l.n !== undefined && l.e !== undefined && l.d !== undefined && l.p !== undefined && l.q !== undefined && l.dp !== undefined && l.dq !== undefined && l.qi !== undefined) {
    var P = new w();P.setPrivateEx(b64utohex(l.n), b64utohex(l.e), b64utohex(l.d), b64utohex(l.p), b64utohex(l.q), b64utohex(l.dp), b64utohex(l.dq), b64utohex(l.qi));return P;
  }if (l.kty === "RSA" && l.n !== undefined && l.e !== undefined && l.d !== undefined) {
    var P = new w();P.setPrivate(b64utohex(l.n), b64utohex(l.e), b64utohex(l.d));return P;
  }if (l.kty === "EC" && l.crv !== undefined && l.x !== undefined && l.y !== undefined && l.d === undefined) {
    var j = new i({ curve: l.crv });var t = j.ecparams.keylen / 4;var B = ("0000000000" + b64utohex(l.x)).slice(-t);var z = ("0000000000" + b64utohex(l.y)).slice(-t);var u = "04" + B + z;j.setPublicKeyHex(u);return j;
  }if (l.kty === "EC" && l.crv !== undefined && l.x !== undefined && l.y !== undefined && l.d !== undefined) {
    var j = new i({ curve: l.crv });var t = j.ecparams.keylen / 4;var B = ("0000000000" + b64utohex(l.x)).slice(-t);var z = ("0000000000" + b64utohex(l.y)).slice(-t);var u = "04" + B + z;var b = ("0000000000" + b64utohex(l.d)).slice(-t);j.setPublicKeyHex(u);j.setPrivateKeyHex(b);return j;
  }if (n === "pkcs5prv") {
    var J = l,
        G = ASN1HEX,
        N,
        P;N = L(J, 0);if (N.length === 9) {
      P = new w();P.readPKCS5PrvKeyHex(J);
    } else {
      if (N.length === 6) {
        P = new C();P.readPKCS5PrvKeyHex(J);
      } else {
        if (N.length > 2 && J.substr(N[1], 2) === "04") {
          P = new i();P.readPKCS5PrvKeyHex(J);
        } else {
          throw "unsupported PKCS#1/5 hexadecimal key";
        }
      }
    }return P;
  }if (n === "pkcs8prv") {
    var P = F.getKeyFromPlainPrivatePKCS8Hex(l);return P;
  }if (n === "pkcs8pub") {
    return F._getKeyFromPublicPKCS8Hex(l);
  }if (n === "x509pub") {
    return X509.getPublicKeyFromCertHex(l);
  }if (l.indexOf("-END CERTIFICATE-", 0) != -1 || l.indexOf("-END X509 CERTIFICATE-", 0) != -1 || l.indexOf("-END TRUSTED CERTIFICATE-", 0) != -1) {
    return X509.getPublicKeyFromCertPEM(l);
  }if (l.indexOf("-END PUBLIC KEY-") != -1) {
    var O = pemtohex(l, "PUBLIC KEY");return F._getKeyFromPublicPKCS8Hex(O);
  }if (l.indexOf("-END RSA PRIVATE KEY-") != -1 && l.indexOf("4,ENCRYPTED") == -1) {
    var m = M(l, "RSA PRIVATE KEY");return F.getKey(m, null, "pkcs5prv");
  }if (l.indexOf("-END DSA PRIVATE KEY-") != -1 && l.indexOf("4,ENCRYPTED") == -1) {
    var I = M(l, "DSA PRIVATE KEY");var E = d(I, 0, [1], "02");var D = d(I, 0, [2], "02");var K = d(I, 0, [3], "02");var r = d(I, 0, [4], "02");var s = d(I, 0, [5], "02");var P = new C();P.setPrivate(new BigInteger(E, 16), new BigInteger(D, 16), new BigInteger(K, 16), new BigInteger(r, 16), new BigInteger(s, 16));return P;
  }if (l.indexOf("-END PRIVATE KEY-") != -1) {
    return F.getKeyFromPlainPrivatePKCS8PEM(l);
  }if (l.indexOf("-END RSA PRIVATE KEY-") != -1 && l.indexOf("4,ENCRYPTED") != -1) {
    var o = F.getDecryptedKeyHex(l, k);var H = new RSAKey();H.readPKCS5PrvKeyHex(o);return H;
  }if (l.indexOf("-END EC PRIVATE KEY-") != -1 && l.indexOf("4,ENCRYPTED") != -1) {
    var I = F.getDecryptedKeyHex(l, k);var P = d(I, 0, [1], "04");var f = d(I, 0, [2, 0], "06");var A = d(I, 0, [3, 0], "03").substr(2);var e = "";if (KJUR.crypto.OID.oidhex2name[f] !== undefined) {
      e = KJUR.crypto.OID.oidhex2name[f];
    } else {
      throw "undefined OID(hex) in KJUR.crypto.OID: " + f;
    }var j = new i({ curve: e });j.setPublicKeyHex(A);j.setPrivateKeyHex(P);j.isPublic = false;return j;
  }if (l.indexOf("-END DSA PRIVATE KEY-") != -1 && l.indexOf("4,ENCRYPTED") != -1) {
    var I = F.getDecryptedKeyHex(l, k);var E = d(I, 0, [1], "02");var D = d(I, 0, [2], "02");var K = d(I, 0, [3], "02");var r = d(I, 0, [4], "02");var s = d(I, 0, [5], "02");var P = new C();P.setPrivate(new BigInteger(E, 16), new BigInteger(D, 16), new BigInteger(K, 16), new BigInteger(r, 16), new BigInteger(s, 16));return P;
  }if (l.indexOf("-END ENCRYPTED PRIVATE KEY-") != -1) {
    return F.getKeyFromEncryptedPKCS8PEM(l, k);
  }throw "not supported argument";
};KEYUTIL.generateKeypair = function (a, c) {
  if (a == "RSA") {
    var b = c;var h = new RSAKey();h.generate(b, "10001");h.isPrivate = true;h.isPublic = true;var f = new RSAKey();var e = h.n.toString(16);var i = h.e.toString(16);f.setPublic(e, i);f.isPrivate = false;f.isPublic = true;var k = {};k.prvKeyObj = h;k.pubKeyObj = f;return k;
  } else {
    if (a == "EC") {
      var d = c;var g = new KJUR.crypto.ECDSA({ curve: d });var j = g.generateKeyPairHex();var h = new KJUR.crypto.ECDSA({ curve: d });h.setPublicKeyHex(j.ecpubhex);h.setPrivateKeyHex(j.ecprvhex);h.isPrivate = true;h.isPublic = false;var f = new KJUR.crypto.ECDSA({ curve: d });f.setPublicKeyHex(j.ecpubhex);f.isPrivate = false;f.isPublic = true;var k = {};k.prvKeyObj = h;k.pubKeyObj = f;return k;
    } else {
      throw "unknown algorithm: " + a;
    }
  }
};KEYUTIL.getPEM = function (b, D, y, m, q, j) {
  var F = KJUR,
      k = F.asn1,
      z = k.DERObjectIdentifier,
      f = k.DERInteger,
      l = k.ASN1Util.newObject,
      a = k.x509,
      C = a.SubjectPublicKeyInfo,
      e = F.crypto,
      u = e.DSA,
      r = e.ECDSA,
      n = RSAKey;function A(s) {
    var G = l({ seq: [{ "int": 0 }, { "int": { bigint: s.n } }, { "int": s.e }, { "int": { bigint: s.d } }, { "int": { bigint: s.p } }, { "int": { bigint: s.q } }, { "int": { bigint: s.dmp1 } }, { "int": { bigint: s.dmq1 } }, { "int": { bigint: s.coeff } }] });return G;
  }function B(G) {
    var s = l({ seq: [{ "int": 1 }, { octstr: { hex: G.prvKeyHex } }, { tag: ["a0", true, { oid: { name: G.curveName } }] }, { tag: ["a1", true, { bitstr: { hex: "00" + G.pubKeyHex } }] }] });return s;
  }function x(s) {
    var G = l({ seq: [{ "int": 0 }, { "int": { bigint: s.p } }, { "int": { bigint: s.q } }, { "int": { bigint: s.g } }, { "int": { bigint: s.y } }, { "int": { bigint: s.x } }] });return G;
  }if ((n !== undefined && b instanceof n || u !== undefined && b instanceof u || r !== undefined && b instanceof r) && b.isPublic == true && (D === undefined || D == "PKCS8PUB")) {
    var E = new C(b);var w = E.getEncodedHex();return hextopem(w, "PUBLIC KEY");
  }if (D == "PKCS1PRV" && n !== undefined && b instanceof n && (y === undefined || y == null) && b.isPrivate == true) {
    var E = A(b);var w = E.getEncodedHex();return hextopem(w, "RSA PRIVATE KEY");
  }if (D == "PKCS1PRV" && r !== undefined && b instanceof r && (y === undefined || y == null) && b.isPrivate == true) {
    var i = new z({ name: b.curveName });var v = i.getEncodedHex();var h = B(b);var t = h.getEncodedHex();var p = "";p += hextopem(v, "EC PARAMETERS");p += hextopem(t, "EC PRIVATE KEY");return p;
  }if (D == "PKCS1PRV" && u !== undefined && b instanceof u && (y === undefined || y == null) && b.isPrivate == true) {
    var E = x(b);var w = E.getEncodedHex();return hextopem(w, "DSA PRIVATE KEY");
  }if (D == "PKCS5PRV" && n !== undefined && b instanceof n && y !== undefined && y != null && b.isPrivate == true) {
    var E = A(b);var w = E.getEncodedHex();if (m === undefined) {
      m = "DES-EDE3-CBC";
    }return this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", w, y, m, j);
  }if (D == "PKCS5PRV" && r !== undefined && b instanceof r && y !== undefined && y != null && b.isPrivate == true) {
    var E = B(b);var w = E.getEncodedHex();if (m === undefined) {
      m = "DES-EDE3-CBC";
    }return this.getEncryptedPKCS5PEMFromPrvKeyHex("EC", w, y, m, j);
  }if (D == "PKCS5PRV" && u !== undefined && b instanceof u && y !== undefined && y != null && b.isPrivate == true) {
    var E = x(b);var w = E.getEncodedHex();if (m === undefined) {
      m = "DES-EDE3-CBC";
    }return this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA", w, y, m, j);
  }var o = function o(G, s) {
    var I = c(G, s);var H = new l({ seq: [{ seq: [{ oid: { name: "pkcs5PBES2" } }, { seq: [{ seq: [{ oid: { name: "pkcs5PBKDF2" } }, { seq: [{ octstr: { hex: I.pbkdf2Salt } }, { "int": I.pbkdf2Iter }] }] }, { seq: [{ oid: { name: "des-EDE3-CBC" } }, { octstr: { hex: I.encryptionSchemeIV } }] }] }] }, { octstr: { hex: I.ciphertext } }] });return H.getEncodedHex();
  };var c = function c(N, O) {
    var H = 100;var M = CryptoJS.lib.WordArray.random(8);var L = "DES-EDE3-CBC";var s = CryptoJS.lib.WordArray.random(8);var I = CryptoJS.PBKDF2(O, M, { keySize: 192 / 32, iterations: H });var J = CryptoJS.enc.Hex.parse(N);var K = CryptoJS.TripleDES.encrypt(J, I, { iv: s }) + "";var G = {};G.ciphertext = K;G.pbkdf2Salt = CryptoJS.enc.Hex.stringify(M);G.pbkdf2Iter = H;G.encryptionSchemeAlg = L;G.encryptionSchemeIV = CryptoJS.enc.Hex.stringify(s);return G;
  };if (D == "PKCS8PRV" && n != undefined && b instanceof n && b.isPrivate == true) {
    var g = A(b);var d = g.getEncodedHex();var E = l({ seq: [{ "int": 0 }, { seq: [{ oid: { name: "rsaEncryption" } }, { "null": true }] }, { octstr: { hex: d } }] });var w = E.getEncodedHex();if (y === undefined || y == null) {
      return hextopem(w, "PRIVATE KEY");
    } else {
      var t = o(w, y);return hextopem(t, "ENCRYPTED PRIVATE KEY");
    }
  }if (D == "PKCS8PRV" && r !== undefined && b instanceof r && b.isPrivate == true) {
    var g = new l({ seq: [{ "int": 1 }, { octstr: { hex: b.prvKeyHex } }, { tag: ["a1", true, { bitstr: { hex: "00" + b.pubKeyHex } }] }] });var d = g.getEncodedHex();var E = l({ seq: [{ "int": 0 }, { seq: [{ oid: { name: "ecPublicKey" } }, { oid: { name: b.curveName } }] }, { octstr: { hex: d } }] });var w = E.getEncodedHex();if (y === undefined || y == null) {
      return hextopem(w, "PRIVATE KEY");
    } else {
      var t = o(w, y);return hextopem(t, "ENCRYPTED PRIVATE KEY");
    }
  }if (D == "PKCS8PRV" && u !== undefined && b instanceof u && b.isPrivate == true) {
    var g = new f({ bigint: b.x });var d = g.getEncodedHex();var E = l({ seq: [{ "int": 0 }, { seq: [{ oid: { name: "dsa" } }, { seq: [{ "int": { bigint: b.p } }, { "int": { bigint: b.q } }, { "int": { bigint: b.g } }] }] }, { octstr: { hex: d } }] });var w = E.getEncodedHex();if (y === undefined || y == null) {
      return hextopem(w, "PRIVATE KEY");
    } else {
      var t = o(w, y);return hextopem(t, "ENCRYPTED PRIVATE KEY");
    }
  }throw "unsupported object nor format";
};KEYUTIL.getKeyFromCSRPEM = function (b) {
  var a = pemtohex(b, "CERTIFICATE REQUEST");var c = KEYUTIL.getKeyFromCSRHex(a);return c;
};KEYUTIL.getKeyFromCSRHex = function (a) {
  var c = KEYUTIL.parseCSRHex(a);var b = KEYUTIL.getKey(c.p8pubkeyhex, null, "pkcs8pub");return b;
};KEYUTIL.parseCSRHex = function (d) {
  var i = ASN1HEX;var f = i.getChildIdx;var c = i.getTLV;var b = {};var g = d;if (g.substr(0, 2) != "30") {
    throw "malformed CSR(code:001)";
  }var e = f(g, 0);if (e.length < 1) {
    throw "malformed CSR(code:002)";
  }if (g.substr(e[0], 2) != "30") {
    throw "malformed CSR(code:003)";
  }var a = f(g, e[0]);if (a.length < 3) {
    throw "malformed CSR(code:004)";
  }b.p8pubkeyhex = c(g, a[2]);return b;
};KEYUTIL.getJWKFromKey = function (d) {
  var b = {};if (d instanceof RSAKey && d.isPrivate) {
    b.kty = "RSA";b.n = hextob64u(d.n.toString(16));b.e = hextob64u(d.e.toString(16));b.d = hextob64u(d.d.toString(16));b.p = hextob64u(d.p.toString(16));b.q = hextob64u(d.q.toString(16));b.dp = hextob64u(d.dmp1.toString(16));b.dq = hextob64u(d.dmq1.toString(16));b.qi = hextob64u(d.coeff.toString(16));return b;
  } else {
    if (d instanceof RSAKey && d.isPublic) {
      b.kty = "RSA";b.n = hextob64u(d.n.toString(16));b.e = hextob64u(d.e.toString(16));return b;
    } else {
      if (d instanceof KJUR.crypto.ECDSA && d.isPrivate) {
        var a = d.getShortNISTPCurveName();if (a !== "P-256" && a !== "P-384") {
          throw "unsupported curve name for JWT: " + a;
        }var c = d.getPublicKeyXYHex();b.kty = "EC";b.crv = a;b.x = hextob64u(c.x);b.y = hextob64u(c.y);b.d = hextob64u(d.prvKeyHex);return b;
      } else {
        if (d instanceof KJUR.crypto.ECDSA && d.isPublic) {
          var a = d.getShortNISTPCurveName();if (a !== "P-256" && a !== "P-384") {
            throw "unsupported curve name for JWT: " + a;
          }var c = d.getPublicKeyXYHex();b.kty = "EC";b.crv = a;b.x = hextob64u(c.x);b.y = hextob64u(c.y);return b;
        }
      }
    }
  }throw "not supported key object";
};
RSAKey.getPosArrayOfChildrenFromHex = function (a) {
  return ASN1HEX.getChildIdx(a, 0);
};RSAKey.getHexValueArrayOfChildrenFromHex = function (f) {
  var n = ASN1HEX;var i = n.getV;var k = RSAKey.getPosArrayOfChildrenFromHex(f);var e = i(f, k[0]);var j = i(f, k[1]);var b = i(f, k[2]);var c = i(f, k[3]);var h = i(f, k[4]);var g = i(f, k[5]);var m = i(f, k[6]);var l = i(f, k[7]);var d = i(f, k[8]);var k = new Array();k.push(e, j, b, c, h, g, m, l, d);return k;
};RSAKey.prototype.readPrivateKeyFromPEMString = function (d) {
  var c = pemtohex(d);var b = RSAKey.getHexValueArrayOfChildrenFromHex(c);this.setPrivateEx(b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8]);
};RSAKey.prototype.readPKCS5PrvKeyHex = function (c) {
  var b = RSAKey.getHexValueArrayOfChildrenFromHex(c);this.setPrivateEx(b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8]);
};RSAKey.prototype.readPKCS8PrvKeyHex = function (e) {
  var c, j, l, b, a, f, d, k;var m = ASN1HEX;var g = m.getVbyList;if (m.isASN1HEX(e) === false) {
    throw "not ASN.1 hex string";
  }try {
    c = g(e, 0, [2, 0, 1], "02");j = g(e, 0, [2, 0, 2], "02");l = g(e, 0, [2, 0, 3], "02");b = g(e, 0, [2, 0, 4], "02");a = g(e, 0, [2, 0, 5], "02");f = g(e, 0, [2, 0, 6], "02");d = g(e, 0, [2, 0, 7], "02");k = g(e, 0, [2, 0, 8], "02");
  } catch (i) {
    throw "malformed PKCS#8 plain RSA private key";
  }this.setPrivateEx(c, j, l, b, a, f, d, k);
};RSAKey.prototype.readPKCS5PubKeyHex = function (c) {
  var e = ASN1HEX;var b = e.getV;if (e.isASN1HEX(c) === false) {
    throw "keyHex is not ASN.1 hex string";
  }var a = e.getChildIdx(c, 0);if (a.length !== 2 || c.substr(a[0], 2) !== "02" || c.substr(a[1], 2) !== "02") {
    throw "wrong hex for PKCS#5 public key";
  }var f = b(c, a[0]);var d = b(c, a[1]);this.setPublic(f, d);
};RSAKey.prototype.readPKCS8PubKeyHex = function (b) {
  var c = ASN1HEX;if (c.isASN1HEX(b) === false) {
    throw "not ASN.1 hex string";
  }if (c.getTLVbyList(b, 0, [0, 0]) !== "06092a864886f70d010101") {
    throw "not PKCS8 RSA public key";
  }var a = c.getTLVbyList(b, 0, [1, 0]);this.readPKCS5PubKeyHex(a);
};RSAKey.prototype.readCertPubKeyHex = function (b, d) {
  var a, c;a = new X509();a.readCertHex(b);c = a.getPublicKeyHex();this.readPKCS8PubKeyHex(c);
};
var _RE_HEXDECONLY = new RegExp("");_RE_HEXDECONLY.compile("[^0-9a-f]", "gi");function _rsasign_getHexPaddedDigestInfoForString(d, e, a) {
  var b = function b(f) {
    return KJUR.crypto.Util.hashString(f, a);
  };var c = b(d);return KJUR.crypto.Util.getPaddedDigestInfoHex(c, a, e);
}function _zeroPaddingOfSignature(e, d) {
  var c = "";var a = d / 4 - e.length;for (var b = 0; b < a; b++) {
    c = c + "0";
  }return c + e;
}RSAKey.prototype.sign = function (d, a) {
  var b = function b(e) {
    return KJUR.crypto.Util.hashString(e, a);
  };var c = b(d);return this.signWithMessageHash(c, a);
};RSAKey.prototype.signWithMessageHash = function (e, c) {
  var f = KJUR.crypto.Util.getPaddedDigestInfoHex(e, c, this.n.bitLength());var b = parseBigInt(f, 16);var d = this.doPrivate(b);var a = d.toString(16);return _zeroPaddingOfSignature(a, this.n.bitLength());
};function pss_mgf1_str(c, a, e) {
  var b = "",
      d = 0;while (b.length < a) {
    b += hextorstr(e(rstrtohex(c + String.fromCharCode.apply(String, [(d & 4278190080) >> 24, (d & 16711680) >> 16, (d & 65280) >> 8, d & 255]))));d += 1;
  }return b;
}RSAKey.prototype.signPSS = function (e, a, d) {
  var c = function c(f) {
    return KJUR.crypto.Util.hashHex(f, a);
  };var b = c(rstrtohex(e));if (d === undefined) {
    d = -1;
  }return this.signWithMessageHashPSS(b, a, d);
};RSAKey.prototype.signWithMessageHashPSS = function (l, a, k) {
  var b = hextorstr(l);var g = b.length;var m = this.n.bitLength() - 1;var c = Math.ceil(m / 8);var d;var o = function o(i) {
    return KJUR.crypto.Util.hashHex(i, a);
  };if (k === -1 || k === undefined) {
    k = g;
  } else {
    if (k === -2) {
      k = c - g - 2;
    } else {
      if (k < -2) {
        throw "invalid salt length";
      }
    }
  }if (c < g + k + 2) {
    throw "data too long";
  }var f = "";if (k > 0) {
    f = new Array(k);new SecureRandom().nextBytes(f);f = String.fromCharCode.apply(String, f);
  }var n = hextorstr(o(rstrtohex("\x00\x00\x00\x00\x00\x00\x00\x00" + b + f)));var j = [];for (d = 0; d < c - k - g - 2; d += 1) {
    j[d] = 0;
  }var e = String.fromCharCode.apply(String, j) + "\x01" + f;var h = pss_mgf1_str(n, e.length, o);var q = [];for (d = 0; d < e.length; d += 1) {
    q[d] = e.charCodeAt(d) ^ h.charCodeAt(d);
  }var p = 65280 >> 8 * c - m & 255;q[0] &= ~p;for (d = 0; d < g; d++) {
    q.push(n.charCodeAt(d));
  }q.push(188);return _zeroPaddingOfSignature(this.doPrivate(new BigInteger(q)).toString(16), this.n.bitLength());
};function _rsasign_getDecryptSignatureBI(a, d, c) {
  var b = new RSAKey();b.setPublic(d, c);var e = b.doPublic(a);return e;
}function _rsasign_getHexDigestInfoFromSig(a, c, b) {
  var e = _rsasign_getDecryptSignatureBI(a, c, b);var d = e.toString(16).replace(/^1f+00/, "");return d;
}function _rsasign_getAlgNameAndHashFromHexDisgestInfo(f) {
  for (var e in KJUR.crypto.Util.DIGESTINFOHEAD) {
    var d = KJUR.crypto.Util.DIGESTINFOHEAD[e];var b = d.length;if (f.substring(0, b) == d) {
      var c = [e, f.substring(b)];return c;
    }
  }return [];
}RSAKey.prototype.verify = function (f, j) {
  j = j.replace(_RE_HEXDECONLY, "");j = j.replace(/[ \n]+/g, "");var b = parseBigInt(j, 16);if (b.bitLength() > this.n.bitLength()) {
    return 0;
  }var i = this.doPublic(b);var e = i.toString(16).replace(/^1f+00/, "");var g = _rsasign_getAlgNameAndHashFromHexDisgestInfo(e);if (g.length == 0) {
    return false;
  }var d = g[0];var h = g[1];var a = function a(k) {
    return KJUR.crypto.Util.hashString(k, d);
  };var c = a(f);return h == c;
};RSAKey.prototype.verifyWithMessageHash = function (e, a) {
  a = a.replace(_RE_HEXDECONLY, "");a = a.replace(/[ \n]+/g, "");var b = parseBigInt(a, 16);if (b.bitLength() > this.n.bitLength()) {
    return 0;
  }var h = this.doPublic(b);var g = h.toString(16).replace(/^1f+00/, "");var c = _rsasign_getAlgNameAndHashFromHexDisgestInfo(g);if (c.length == 0) {
    return false;
  }var d = c[0];var f = c[1];return f == e;
};RSAKey.prototype.verifyPSS = function (c, b, a, f) {
  var e = function e(g) {
    return KJUR.crypto.Util.hashHex(g, a);
  };var d = e(rstrtohex(c));if (f === undefined) {
    f = -1;
  }return this.verifyWithMessageHashPSS(d, b, a, f);
};RSAKey.prototype.verifyWithMessageHashPSS = function (f, s, l, c) {
  var k = new BigInteger(s, 16);if (k.bitLength() > this.n.bitLength()) {
    return false;
  }var r = function r(i) {
    return KJUR.crypto.Util.hashHex(i, l);
  };var j = hextorstr(f);var h = j.length;var g = this.n.bitLength() - 1;var m = Math.ceil(g / 8);var q;if (c === -1 || c === undefined) {
    c = h;
  } else {
    if (c === -2) {
      c = m - h - 2;
    } else {
      if (c < -2) {
        throw "invalid salt length";
      }
    }
  }if (m < h + c + 2) {
    throw "data too long";
  }var a = this.doPublic(k).toByteArray();for (q = 0; q < a.length; q += 1) {
    a[q] &= 255;
  }while (a.length < m) {
    a.unshift(0);
  }if (a[m - 1] !== 188) {
    throw "encoded message does not end in 0xbc";
  }a = String.fromCharCode.apply(String, a);var d = a.substr(0, m - h - 1);var e = a.substr(d.length, h);var p = 65280 >> 8 * m - g & 255;if ((d.charCodeAt(0) & p) !== 0) {
    throw "bits beyond keysize not zero";
  }var n = pss_mgf1_str(e, d.length, r);var o = [];for (q = 0; q < d.length; q += 1) {
    o[q] = d.charCodeAt(q) ^ n.charCodeAt(q);
  }o[0] &= ~p;var b = m - h - c - 2;for (q = 0; q < b; q += 1) {
    if (o[q] !== 0) {
      throw "leftmost octets not zero";
    }
  }if (o[b] !== 1) {
    throw "0x01 marker not found";
  }return e === hextorstr(r(rstrtohex("\x00\x00\x00\x00\x00\x00\x00\x00" + j + String.fromCharCode.apply(String, o.slice(-c)))));
};RSAKey.SALT_LEN_HLEN = -1;RSAKey.SALT_LEN_MAX = -2;RSAKey.SALT_LEN_RECOVER = -2;
function X509() {
  var k = ASN1HEX,
      j = k.getChildIdx,
      h = k.getV,
      b = k.getTLV,
      f = k.getVbyList,
      c = k.getTLVbyList,
      g = k.getIdxbyList,
      d = k.getVidx,
      i = k.oidname,
      a = X509,
      e = pemtohex;this.hex = null;this.version = 0;this.foffset = 0;this.aExtInfo = null;this.getVersion = function () {
    if (this.hex === null || this.version !== 0) {
      return this.version;
    }if (c(this.hex, 0, [0, 0]) !== "a003020102") {
      this.version = 1;this.foffset = -1;return 1;
    }this.version = 3;return 3;
  };this.getSerialNumberHex = function () {
    return f(this.hex, 0, [0, 1 + this.foffset], "02");
  };this.getSignatureAlgorithmField = function () {
    return i(f(this.hex, 0, [0, 2 + this.foffset, 0], "06"));
  };this.getIssuerHex = function () {
    return c(this.hex, 0, [0, 3 + this.foffset], "30");
  };this.getIssuerString = function () {
    return a.hex2dn(this.getIssuerHex());
  };this.getSubjectHex = function () {
    return c(this.hex, 0, [0, 5 + this.foffset], "30");
  };this.getSubjectString = function () {
    return a.hex2dn(this.getSubjectHex());
  };this.getNotBefore = function () {
    var l = f(this.hex, 0, [0, 4 + this.foffset, 0]);l = l.replace(/(..)/g, "%$1");l = decodeURIComponent(l);return l;
  };this.getNotAfter = function () {
    var l = f(this.hex, 0, [0, 4 + this.foffset, 1]);l = l.replace(/(..)/g, "%$1");l = decodeURIComponent(l);return l;
  };this.getPublicKeyHex = function () {
    return k.getTLVbyList(this.hex, 0, [0, 6 + this.foffset], "30");
  };this.getPublicKeyIdx = function () {
    return g(this.hex, 0, [0, 6 + this.foffset], "30");
  };this.getPublicKeyContentIdx = function () {
    var l = this.getPublicKeyIdx();return g(this.hex, l, [1, 0], "30");
  };this.getPublicKey = function () {
    return KEYUTIL.getKey(this.getPublicKeyHex(), null, "pkcs8pub");
  };this.getSignatureAlgorithmName = function () {
    return i(f(this.hex, 0, [1, 0], "06"));
  };this.getSignatureValueHex = function () {
    return f(this.hex, 0, [2], "03", true);
  };this.verifySignature = function (n) {
    var o = this.getSignatureAlgorithmName();var l = this.getSignatureValueHex();var m = c(this.hex, 0, [0], "30");var p = new KJUR.crypto.Signature({ alg: o });p.init(n);p.updateHex(m);return p.verify(l);
  };this.parseExt = function () {
    if (this.version !== 3) {
      return -1;
    }var p = g(this.hex, 0, [0, 7, 0], "30");var m = j(this.hex, p);this.aExtInfo = new Array();for (var n = 0; n < m.length; n++) {
      var q = {};q.critical = false;var l = j(this.hex, m[n]);var r = 0;if (l.length === 3) {
        q.critical = true;r = 1;
      }q.oid = k.hextooidstr(f(this.hex, m[n], [0], "06"));var o = g(this.hex, m[n], [1 + r]);q.vidx = d(this.hex, o);this.aExtInfo.push(q);
    }
  };this.getExtInfo = function (n) {
    var l = this.aExtInfo;var o = n;if (!n.match(/^[0-9.]+$/)) {
      o = KJUR.asn1.x509.OID.name2oid(n);
    }if (o === "") {
      return undefined;
    }for (var m = 0; m < l.length; m++) {
      if (l[m].oid === o) {
        return l[m];
      }
    }return undefined;
  };this.getExtBasicConstraints = function () {
    var n = this.getExtInfo("basicConstraints");if (n === undefined) {
      return n;
    }var l = h(this.hex, n.vidx);if (l === "") {
      return {};
    }if (l === "0101ff") {
      return { cA: true };
    }if (l.substr(0, 8) === "0101ff02") {
      var o = h(l, 6);var m = parseInt(o, 16);return { cA: true, pathLen: m };
    }throw "basicConstraints parse error";
  };this.getExtKeyUsageBin = function () {
    var o = this.getExtInfo("keyUsage");if (o === undefined) {
      return "";
    }var m = h(this.hex, o.vidx);if (m.length % 2 != 0 || m.length <= 2) {
      throw "malformed key usage value";
    }var l = parseInt(m.substr(0, 2));var n = parseInt(m.substr(2), 16).toString(2);return n.substr(0, n.length - l);
  };this.getExtKeyUsageString = function () {
    var n = this.getExtKeyUsageBin();var l = new Array();for (var m = 0; m < n.length; m++) {
      if (n.substr(m, 1) == "1") {
        l.push(X509.KEYUSAGE_NAME[m]);
      }
    }return l.join(",");
  };this.getExtSubjectKeyIdentifier = function () {
    var l = this.getExtInfo("subjectKeyIdentifier");if (l === undefined) {
      return l;
    }return h(this.hex, l.vidx);
  };this.getExtAuthorityKeyIdentifier = function () {
    var p = this.getExtInfo("authorityKeyIdentifier");if (p === undefined) {
      return p;
    }var l = {};var o = b(this.hex, p.vidx);var m = j(o, 0);for (var n = 0; n < m.length; n++) {
      if (o.substr(m[n], 2) === "80") {
        l.kid = h(o, m[n]);
      }
    }return l;
  };this.getExtExtKeyUsageName = function () {
    var p = this.getExtInfo("extKeyUsage");if (p === undefined) {
      return p;
    }var l = new Array();var o = b(this.hex, p.vidx);if (o === "") {
      return l;
    }var m = j(o, 0);for (var n = 0; n < m.length; n++) {
      l.push(i(h(o, m[n])));
    }return l;
  };this.getExtSubjectAltName = function () {
    var m = this.getExtSubjectAltName2();var l = new Array();for (var n = 0; n < m.length; n++) {
      if (m[n][0] === "DNS") {
        l.push(m[n][1]);
      }
    }return l;
  };this.getExtSubjectAltName2 = function () {
    var p, s, r;var q = this.getExtInfo("subjectAltName");if (q === undefined) {
      return q;
    }var l = new Array();var o = b(this.hex, q.vidx);var m = j(o, 0);for (var n = 0; n < m.length; n++) {
      r = o.substr(m[n], 2);p = h(o, m[n]);if (r === "81") {
        s = hextoutf8(p);l.push(["MAIL", s]);
      }if (r === "82") {
        s = hextoutf8(p);l.push(["DNS", s]);
      }if (r === "84") {
        s = X509.hex2dn(p, 0);l.push(["DN", s]);
      }if (r === "86") {
        s = hextoutf8(p);l.push(["URI", s]);
      }if (r === "87") {
        s = hextoip(p);l.push(["IP", s]);
      }
    }return l;
  };this.getExtCRLDistributionPointsURI = function () {
    var q = this.getExtInfo("cRLDistributionPoints");if (q === undefined) {
      return q;
    }var l = new Array();var m = j(this.hex, q.vidx);for (var o = 0; o < m.length; o++) {
      try {
        var r = f(this.hex, m[o], [0, 0, 0], "86");var p = hextoutf8(r);l.push(p);
      } catch (n) {}
    }return l;
  };this.getExtAIAInfo = function () {
    var p = this.getExtInfo("authorityInfoAccess");if (p === undefined) {
      return p;
    }var l = { ocsp: [], caissuer: [] };var m = j(this.hex, p.vidx);for (var n = 0; n < m.length; n++) {
      var q = f(this.hex, m[n], [0], "06");var o = f(this.hex, m[n], [1], "86");if (q === "2b06010505073001") {
        l.ocsp.push(hextoutf8(o));
      }if (q === "2b06010505073002") {
        l.caissuer.push(hextoutf8(o));
      }
    }return l;
  };this.getExtCertificatePolicies = function () {
    var o = this.getExtInfo("certificatePolicies");if (o === undefined) {
      return o;
    }var l = b(this.hex, o.vidx);var u = [];var s = j(l, 0);for (var r = 0; r < s.length; r++) {
      var t = {};var n = j(l, s[r]);t.id = i(h(l, n[0]));if (n.length === 2) {
        var m = j(l, n[1]);for (var q = 0; q < m.length; q++) {
          var p = f(l, m[q], [0], "06");if (p === "2b06010505070201") {
            t.cps = hextoutf8(f(l, m[q], [1]));
          } else {
            if (p === "2b06010505070202") {
              t.unotice = hextoutf8(f(l, m[q], [1, 0]));
            }
          }
        }
      }u.push(t);
    }return u;
  };this.readCertPEM = function (l) {
    this.readCertHex(e(l));
  };this.readCertHex = function (l) {
    this.hex = l;this.getVersion();try {
      g(this.hex, 0, [0, 7], "a3");this.parseExt();
    } catch (m) {}
  };this.getInfo = function () {
    var m = X509;var B, u, z;B = "Basic Fields\n";B += "  serial number: " + this.getSerialNumberHex() + "\n";B += "  signature algorithm: " + this.getSignatureAlgorithmField() + "\n";B += "  issuer: " + this.getIssuerString() + "\n";B += "  notBefore: " + this.getNotBefore() + "\n";B += "  notAfter: " + this.getNotAfter() + "\n";B += "  subject: " + this.getSubjectString() + "\n";B += "  subject public key info: \n";u = this.getPublicKey();B += "    key algorithm: " + u.type + "\n";if (u.type === "RSA") {
      B += "    n=" + hextoposhex(u.n.toString(16)).substr(0, 16) + "...\n";B += "    e=" + hextoposhex(u.e.toString(16)) + "\n";
    }z = this.aExtInfo;if (z !== undefined && z !== null) {
      B += "X509v3 Extensions:\n";for (var r = 0; r < z.length; r++) {
        var n = z[r];var A = KJUR.asn1.x509.OID.oid2name(n.oid);if (A === "") {
          A = n.oid;
        }var x = "";if (n.critical === true) {
          x = "CRITICAL";
        }B += "  " + A + " " + x + ":\n";if (A === "basicConstraints") {
          var v = this.getExtBasicConstraints();if (v.cA === undefined) {
            B += "    {}\n";
          } else {
            B += "    cA=true";if (v.pathLen !== undefined) {
              B += ", pathLen=" + v.pathLen;
            }B += "\n";
          }
        } else {
          if (A === "keyUsage") {
            B += "    " + this.getExtKeyUsageString() + "\n";
          } else {
            if (A === "subjectKeyIdentifier") {
              B += "    " + this.getExtSubjectKeyIdentifier() + "\n";
            } else {
              if (A === "authorityKeyIdentifier") {
                var l = this.getExtAuthorityKeyIdentifier();if (l.kid !== undefined) {
                  B += "    kid=" + l.kid + "\n";
                }
              } else {
                if (A === "extKeyUsage") {
                  var w = this.getExtExtKeyUsageName();B += "    " + w.join(", ") + "\n";
                } else {
                  if (A === "subjectAltName") {
                    var t = this.getExtSubjectAltName2();B += "    " + t + "\n";
                  } else {
                    if (A === "cRLDistributionPoints") {
                      var y = this.getExtCRLDistributionPointsURI();B += "    " + y + "\n";
                    } else {
                      if (A === "authorityInfoAccess") {
                        var p = this.getExtAIAInfo();if (p.ocsp !== undefined) {
                          B += "    ocsp: " + p.ocsp.join(",") + "\n";
                        }if (p.caissuer !== undefined) {
                          B += "    caissuer: " + p.caissuer.join(",") + "\n";
                        }
                      } else {
                        if (A === "certificatePolicies") {
                          var o = this.getExtCertificatePolicies();for (var q = 0; q < o.length; q++) {
                            if (o[q].id !== undefined) {
                              B += "    policy oid: " + o[q].id + "\n";
                            }if (o[q].cps !== undefined) {
                              B += "    cps: " + o[q].cps + "\n";
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }B += "signature algorithm: " + this.getSignatureAlgorithmName() + "\n";B += "signature: " + this.getSignatureValueHex().substr(0, 16) + "...\n";return B;
  };
}X509.hex2dn = function (f, b) {
  if (b === undefined) {
    b = 0;
  }if (f.substr(b, 2) !== "30") {
    throw "malformed DN";
  }var c = new Array();var d = ASN1HEX.getChildIdx(f, b);for (var e = 0; e < d.length; e++) {
    c.push(X509.hex2rdn(f, d[e]));
  }c = c.map(function (a) {
    return a.replace("/", "\\/");
  });return "/" + c.join("/");
};X509.hex2rdn = function (f, b) {
  if (b === undefined) {
    b = 0;
  }if (f.substr(b, 2) !== "31") {
    throw "malformed RDN";
  }var c = new Array();var d = ASN1HEX.getChildIdx(f, b);for (var e = 0; e < d.length; e++) {
    c.push(X509.hex2attrTypeValue(f, d[e]));
  }c = c.map(function (a) {
    return a.replace("+", "\\+");
  });return c.join("+");
};X509.hex2attrTypeValue = function (d, i) {
  var j = ASN1HEX;var h = j.getV;if (i === undefined) {
    i = 0;
  }if (d.substr(i, 2) !== "30") {
    throw "malformed attribute type and value";
  }var g = j.getChildIdx(d, i);if (g.length !== 2 || d.substr(g[0], 2) !== "06") {
    "malformed attribute type and value";
  }var b = h(d, g[0]);var f = KJUR.asn1.ASN1Util.oidHexToInt(b);var e = KJUR.asn1.x509.OID.oid2atype(f);var a = h(d, g[1]);var c = hextorstr(a);return e + "=" + c;
};X509.getPublicKeyFromCertHex = function (b) {
  var a = new X509();a.readCertHex(b);return a.getPublicKey();
};X509.getPublicKeyFromCertPEM = function (b) {
  var a = new X509();a.readCertPEM(b);return a.getPublicKey();
};X509.getPublicKeyInfoPropOfCertPEM = function (c) {
  var e = ASN1HEX;var g = e.getVbyList;var b = {};var a, f, d;b.algparam = null;a = new X509();a.readCertPEM(c);f = a.getPublicKeyHex();b.keyhex = g(f, 0, [1], "03").substr(2);b.algoid = g(f, 0, [0, 0], "06");if (b.algoid === "2a8648ce3d0201") {
    b.algparam = g(f, 0, [0, 1], "06");
  }return b;
};X509.KEYUSAGE_NAME = ["digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly"];
if (typeof KJUR == "undefined" || !KJUR) {
  exports.KJUR = KJUR = {};
}if (typeof KJUR.jws == "undefined" || !KJUR.jws) {
  KJUR.jws = {};
}KJUR.jws.JWS = function () {
  var b = KJUR,
      a = b.jws.JWS,
      c = a.isSafeJSONString;this.parseJWS = function (g, j) {
    if (this.parsedJWS !== undefined && (j || this.parsedJWS.sigvalH !== undefined)) {
      return;
    }var i = g.match(/^([^.]+)\.([^.]+)\.([^.]+)$/);if (i == null) {
      throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
    }var k = i[1];var e = i[2];var l = i[3];var n = k + "." + e;this.parsedJWS = {};this.parsedJWS.headB64U = k;this.parsedJWS.payloadB64U = e;this.parsedJWS.sigvalB64U = l;this.parsedJWS.si = n;if (!j) {
      var h = b64utohex(l);var f = parseBigInt(h, 16);this.parsedJWS.sigvalH = h;this.parsedJWS.sigvalBI = f;
    }var d = b64utoutf8(k);var m = b64utoutf8(e);this.parsedJWS.headS = d;this.parsedJWS.payloadS = m;if (!c(d, this.parsedJWS, "headP")) {
      throw "malformed JSON string for JWS Head: " + d;
    }
  };
};KJUR.jws.JWS.sign = function (i, v, y, z, a) {
  var w = KJUR,
      m = w.jws,
      q = m.JWS,
      g = q.readSafeJSONString,
      p = q.isSafeJSONString,
      d = w.crypto,
      k = d.ECDSA,
      o = d.Mac,
      c = d.Signature,
      t = JSON;var s, j, n;if (typeof v != "string" && (typeof v === "undefined" ? "undefined" : _typeof(v)) != "object") {
    throw "spHeader must be JSON string or object: " + v;
  }if ((typeof v === "undefined" ? "undefined" : _typeof(v)) == "object") {
    j = v;s = t.stringify(j);
  }if (typeof v == "string") {
    s = v;if (!p(s)) {
      throw "JWS Head is not safe JSON string: " + s;
    }j = g(s);
  }n = y;if ((typeof y === "undefined" ? "undefined" : _typeof(y)) == "object") {
    n = t.stringify(y);
  }if ((i == "" || i == null) && j.alg !== undefined) {
    i = j.alg;
  }if (i != "" && i != null && j.alg === undefined) {
    j.alg = i;s = t.stringify(j);
  }if (i !== j.alg) {
    throw "alg and sHeader.alg doesn't match: " + i + "!=" + j.alg;
  }var r = null;if (q.jwsalg2sigalg[i] === undefined) {
    throw "unsupported alg name: " + i;
  } else {
    r = q.jwsalg2sigalg[i];
  }var e = utf8tob64u(s);var l = utf8tob64u(n);var b = e + "." + l;var x = "";if (r.substr(0, 4) == "Hmac") {
    if (z === undefined) {
      throw "mac key shall be specified for HS* alg";
    }var h = new o({ alg: r, prov: "cryptojs", pass: z });h.updateString(b);x = h.doFinal();
  } else {
    if (r.indexOf("withECDSA") != -1) {
      var f = new c({ alg: r });f.init(z, a);f.updateString(b);hASN1Sig = f.sign();x = KJUR.crypto.ECDSA.asn1SigToConcatSig(hASN1Sig);
    } else {
      if (r != "none") {
        var f = new c({ alg: r });f.init(z, a);f.updateString(b);x = f.sign();
      }
    }
  }var u = hextob64u(x);return b + "." + u;
};KJUR.jws.JWS.verify = function (w, B, n) {
  var x = KJUR,
      q = x.jws,
      t = q.JWS,
      i = t.readSafeJSONString,
      e = x.crypto,
      p = e.ECDSA,
      s = e.Mac,
      d = e.Signature,
      m;if ((typeof RSAKey === "undefined" ? "undefined" : _typeof(RSAKey)) !== undefined) {
    m = RSAKey;
  }var y = w.split(".");if (y.length !== 3) {
    return false;
  }var f = y[0];var r = y[1];var c = f + "." + r;var A = b64utohex(y[2]);var l = i(b64utoutf8(y[0]));var k = null;var z = null;if (l.alg === undefined) {
    throw "algorithm not specified in header";
  } else {
    k = l.alg;z = k.substr(0, 2);
  }if (n != null && Object.prototype.toString.call(n) === "[object Array]" && n.length > 0) {
    var b = ":" + n.join(":") + ":";if (b.indexOf(":" + k + ":") == -1) {
      throw "algorithm '" + k + "' not accepted in the list";
    }
  }if (k != "none" && B === null) {
    throw "key shall be specified to verify.";
  }if (typeof B == "string" && B.indexOf("-----BEGIN ") != -1) {
    B = KEYUTIL.getKey(B);
  }if (z == "RS" || z == "PS") {
    if (!(B instanceof m)) {
      throw "key shall be a RSAKey obj for RS* and PS* algs";
    }
  }if (z == "ES") {
    if (!(B instanceof p)) {
      throw "key shall be a ECDSA obj for ES* algs";
    }
  }if (k == "none") {}var u = null;if (t.jwsalg2sigalg[l.alg] === undefined) {
    throw "unsupported alg name: " + k;
  } else {
    u = t.jwsalg2sigalg[k];
  }if (u == "none") {
    throw "not supported";
  } else {
    if (u.substr(0, 4) == "Hmac") {
      var o = null;if (B === undefined) {
        throw "hexadecimal key shall be specified for HMAC";
      }var j = new s({ alg: u, pass: B });j.updateString(c);o = j.doFinal();return A == o;
    } else {
      if (u.indexOf("withECDSA") != -1) {
        var h = null;try {
          h = p.concatSigToASN1Sig(A);
        } catch (v) {
          return false;
        }var g = new d({ alg: u });g.init(B);g.updateString(c);return g.verify(h);
      } else {
        var g = new d({ alg: u });g.init(B);g.updateString(c);return g.verify(A);
      }
    }
  }
};KJUR.jws.JWS.parse = function (g) {
  var c = g.split(".");var b = {};var f, e, d;if (c.length != 2 && c.length != 3) {
    throw "malformed sJWS: wrong number of '.' splitted elements";
  }f = c[0];e = c[1];if (c.length == 3) {
    d = c[2];
  }b.headerObj = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(f));b.payloadObj = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(e));b.headerPP = JSON.stringify(b.headerObj, null, "  ");if (b.payloadObj == null) {
    b.payloadPP = b64utoutf8(e);
  } else {
    b.payloadPP = JSON.stringify(b.payloadObj, null, "  ");
  }if (d !== undefined) {
    b.sigHex = b64utohex(d);
  }return b;
};KJUR.jws.JWS.verifyJWT = function (e, l, r) {
  var d = KJUR,
      j = d.jws,
      o = j.JWS,
      n = o.readSafeJSONString,
      p = o.inArray,
      f = o.includedArray;var k = e.split(".");var c = k[0];var i = k[1];var q = c + "." + i;var m = b64utohex(k[2]);var h = n(b64utoutf8(c));var g = n(b64utoutf8(i));if (h.alg === undefined) {
    return false;
  }if (r.alg === undefined) {
    throw "acceptField.alg shall be specified";
  }if (!p(h.alg, r.alg)) {
    return false;
  }if (g.iss !== undefined && _typeof(r.iss) === "object") {
    if (!p(g.iss, r.iss)) {
      return false;
    }
  }if (g.sub !== undefined && _typeof(r.sub) === "object") {
    if (!p(g.sub, r.sub)) {
      return false;
    }
  }if (g.aud !== undefined && _typeof(r.aud) === "object") {
    if (typeof g.aud == "string") {
      if (!p(g.aud, r.aud)) {
        return false;
      }
    } else {
      if (_typeof(g.aud) == "object") {
        if (!f(g.aud, r.aud)) {
          return false;
        }
      }
    }
  }var b = j.IntDate.getNow();if (r.verifyAt !== undefined && typeof r.verifyAt === "number") {
    b = r.verifyAt;
  }if (r.gracePeriod === undefined || typeof r.gracePeriod !== "number") {
    r.gracePeriod = 0;
  }if (g.exp !== undefined && typeof g.exp == "number") {
    if (g.exp + r.gracePeriod < b) {
      return false;
    }
  }if (g.nbf !== undefined && typeof g.nbf == "number") {
    if (b < g.nbf - r.gracePeriod) {
      return false;
    }
  }if (g.iat !== undefined && typeof g.iat == "number") {
    if (b < g.iat - r.gracePeriod) {
      return false;
    }
  }if (g.jti !== undefined && r.jti !== undefined) {
    if (g.jti !== r.jti) {
      return false;
    }
  }if (!o.verify(e, l, r.alg)) {
    return false;
  }return true;
};KJUR.jws.JWS.includedArray = function (b, a) {
  var c = KJUR.jws.JWS.inArray;if (b === null) {
    return false;
  }if ((typeof b === "undefined" ? "undefined" : _typeof(b)) !== "object") {
    return false;
  }if (typeof b.length !== "number") {
    return false;
  }for (var d = 0; d < b.length; d++) {
    if (!c(b[d], a)) {
      return false;
    }
  }return true;
};KJUR.jws.JWS.inArray = function (d, b) {
  if (b === null) {
    return false;
  }if ((typeof b === "undefined" ? "undefined" : _typeof(b)) !== "object") {
    return false;
  }if (typeof b.length !== "number") {
    return false;
  }for (var c = 0; c < b.length; c++) {
    if (b[c] == d) {
      return true;
    }
  }return false;
};KJUR.jws.JWS.jwsalg2sigalg = { HS256: "HmacSHA256", HS384: "HmacSHA384", HS512: "HmacSHA512", RS256: "SHA256withRSA", RS384: "SHA384withRSA", RS512: "SHA512withRSA", ES256: "SHA256withECDSA", ES384: "SHA384withECDSA", PS256: "SHA256withRSAandMGF1", PS384: "SHA384withRSAandMGF1", PS512: "SHA512withRSAandMGF1", none: "none" };KJUR.jws.JWS.isSafeJSONString = function (c, b, d) {
  var e = null;try {
    e = jsonParse(c);if ((typeof e === "undefined" ? "undefined" : _typeof(e)) != "object") {
      return 0;
    }if (e.constructor === Array) {
      return 0;
    }if (b) {
      b[d] = e;
    }return 1;
  } catch (a) {
    return 0;
  }
};KJUR.jws.JWS.readSafeJSONString = function (b) {
  var c = null;try {
    c = jsonParse(b);if ((typeof c === "undefined" ? "undefined" : _typeof(c)) != "object") {
      return null;
    }if (c.constructor === Array) {
      return null;
    }return c;
  } catch (a) {
    return null;
  }
};KJUR.jws.JWS.getEncodedSignatureValueFromJWS = function (b) {
  var a = b.match(/^[^.]+\.[^.]+\.([^.]+)$/);if (a == null) {
    throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
  }return a[1];
};KJUR.jws.JWS.getJWKthumbprint = function (d) {
  if (d.kty !== "RSA" && d.kty !== "EC" && d.kty !== "oct") {
    throw "unsupported algorithm for JWK Thumprint";
  }var a = "{";if (d.kty === "RSA") {
    if (typeof d.n != "string" || typeof d.e != "string") {
      throw "wrong n and e value for RSA key";
    }a += '"e":"' + d.e + '",';a += '"kty":"' + d.kty + '",';a += '"n":"' + d.n + '"}';
  } else {
    if (d.kty === "EC") {
      if (typeof d.crv != "string" || typeof d.x != "string" || typeof d.y != "string") {
        throw "wrong crv, x and y value for EC key";
      }a += '"crv":"' + d.crv + '",';a += '"kty":"' + d.kty + '",';a += '"x":"' + d.x + '",';a += '"y":"' + d.y + '"}';
    } else {
      if (d.kty === "oct") {
        if (typeof d.k != "string") {
          throw "wrong k value for oct(symmetric) key";
        }a += '"kty":"' + d.kty + '",';a += '"k":"' + d.k + '"}';
      }
    }
  }var b = rstrtohex(a);var c = KJUR.crypto.Util.hashHex(b, "sha256");var e = hextob64u(c);return e;
};KJUR.jws.IntDate = {};KJUR.jws.IntDate.get = function (c) {
  var b = KJUR.jws.IntDate,
      d = b.getNow,
      a = b.getZulu;if (c == "now") {
    return d();
  } else {
    if (c == "now + 1hour") {
      return d() + 60 * 60;
    } else {
      if (c == "now + 1day") {
        return d() + 60 * 60 * 24;
      } else {
        if (c == "now + 1month") {
          return d() + 60 * 60 * 24 * 30;
        } else {
          if (c == "now + 1year") {
            return d() + 60 * 60 * 24 * 365;
          } else {
            if (c.match(/Z$/)) {
              return a(c);
            } else {
              if (c.match(/^[0-9]+$/)) {
                return parseInt(c);
              }
            }
          }
        }
      }
    }
  }throw "unsupported format: " + c;
};KJUR.jws.IntDate.getZulu = function (a) {
  return zulutosec(a);
};KJUR.jws.IntDate.getNow = function () {
  var a = ~~(new Date() / 1000);return a;
};KJUR.jws.IntDate.intDate2UTCString = function (a) {
  var b = new Date(a * 1000);return b.toUTCString();
};KJUR.jws.IntDate.intDate2Zulu = function (e) {
  var i = new Date(e * 1000),
      h = ("0000" + i.getUTCFullYear()).slice(-4),
      g = ("00" + (i.getUTCMonth() + 1)).slice(-2),
      b = ("00" + i.getUTCDate()).slice(-2),
      a = ("00" + i.getUTCHours()).slice(-2),
      c = ("00" + i.getUTCMinutes()).slice(-2),
      f = ("00" + i.getUTCSeconds()).slice(-2);return h + g + b + a + c + f + "Z";
};
exports.SecureRandom = SecureRandom;
exports.rng_seed_time = rng_seed_time;
exports.BigInteger = BigInteger;
exports.RSAKey = RSAKey;
var EDSA = KJUR.crypto.EDSA;
exports.EDSA = EDSA;
var DSA = KJUR.crypto.DSA;
exports.DSA = DSA;
var Signature = KJUR.crypto.Signature;
exports.Signature = Signature;
var MessageDigest = KJUR.crypto.MessageDigest;
exports.MessageDigest = MessageDigest;
var Mac = KJUR.crypto.Mac;
exports.Mac = Mac;
var Cipher = KJUR.crypto.Cipher;
exports.Cipher = Cipher;
exports.KEYUTIL = KEYUTIL;
exports.ASN1HEX = ASN1HEX;
exports.X509 = X509;
exports.CryptoJS = CryptoJS;

// ext/base64.js

exports.b64tohex = b64tohex;
exports.b64toBA = b64toBA;

// base64x.js

exports.stoBA = stoBA;
exports.BAtos = BAtos;
exports.BAtohex = BAtohex;
exports.stohex = stohex;
exports.stob64 = stob64;
exports.stob64u = stob64u;
exports.b64utos = b64utos;
exports.b64tob64u = b64tob64u;
exports.b64utob64 = b64utob64;
exports.hex2b64 = hex2b64;
exports.hextob64u = hextob64u;
exports.b64utohex = b64utohex;
exports.utf8tob64u = utf8tob64u;
exports.b64utoutf8 = b64utoutf8;
exports.utf8tob64 = utf8tob64;
exports.b64toutf8 = b64toutf8;
exports.utf8tohex = utf8tohex;
exports.hextoutf8 = hextoutf8;
exports.hextorstr = hextorstr;
exports.rstrtohex = rstrtohex;
exports.hextob64 = hextob64;
exports.hextob64nl = hextob64nl;
exports.b64nltohex = b64nltohex;
exports.hextopem = hextopem;
exports.pemtohex = pemtohex;
exports.hextoArrayBuffer = hextoArrayBuffer;
exports.ArrayBuffertohex = ArrayBuffertohex;
exports.zulutomsec = zulutomsec;
exports.zulutosec = zulutosec;
exports.zulutodate = zulutodate;
exports.datetozulu = datetozulu;
exports.uricmptohex = uricmptohex;
exports.hextouricmp = hextouricmp;
exports.ipv6tohex = ipv6tohex;
exports.hextoipv6 = hextoipv6;
exports.hextoip = hextoip;
exports.iptohex = iptohex;
exports.encodeURIComponentAll = encodeURIComponentAll;
exports.newline_toUnix = newline_toUnix;
exports.newline_toDos = newline_toDos;
exports.hextoposhex = hextoposhex;
exports.intarystrtohex = intarystrtohex;
exports.strdiffidx = strdiffidx;

// name spaces

exports.KJUR = KJUR;

var _crypto = KJUR.crypto;
exports.crypto = _crypto;
var _KJUR = KJUR;
var asn1 = _KJUR.asn1;
exports.asn1 = asn1;
var _KJUR2 = KJUR;
var jws = _KJUR2.jws;
exports.jws = jws;
var _KJUR3 = KJUR;
var lang = _KJUR3.lang;
exports.lang = lang;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/buffer/node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/buffer/node_modules/isarray/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/buffer/node_modules/isarray/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/core-js/es6/promise.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es6/promise.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/fn/array/find.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/fn/array/find.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.find;


/***/ }),

/***/ "./node_modules/core-js/fn/array/is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/core-js/fn/array/some.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/fn/array/some.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.some */ "./node_modules/core-js/modules/es6.array.some.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.some;


/***/ }),

/***/ "./node_modules/core-js/fn/array/splice.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/fn/array/splice.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// for a legacy code and future fixes
module.exports = function () {
  return Function.call.apply(Array.prototype.splice, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/fn/function/bind.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/function/bind.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Function.bind;


/***/ }),

/***/ "./node_modules/core-js/fn/object/assign.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/object/assign.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.4' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $some = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./polyfills.js":
/*!**********************!*\
  !*** ./polyfills.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/es6/promise */ "./node_modules/core-js/es6/promise.js");

__webpack_require__(/*! core-js/fn/function/bind */ "./node_modules/core-js/fn/function/bind.js");

__webpack_require__(/*! core-js/fn/object/assign */ "./node_modules/core-js/fn/object/assign.js");

__webpack_require__(/*! core-js/fn/array/find */ "./node_modules/core-js/fn/array/find.js");

__webpack_require__(/*! core-js/fn/array/some */ "./node_modules/core-js/fn/array/some.js");

__webpack_require__(/*! core-js/fn/array/is-array */ "./node_modules/core-js/fn/array/is-array.js");

__webpack_require__(/*! core-js/fn/array/splice */ "./node_modules/core-js/fn/array/splice.js");

/***/ }),

/***/ "./src/AccessTokenEvents.js":
/*!**********************************!*\
  !*** ./src/AccessTokenEvents.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AccessTokenEvents = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Timer = __webpack_require__(/*! ./Timer.js */ "./src/Timer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultAccessTokenExpiringNotificationTime = 60; // seconds

var AccessTokenEvents = exports.AccessTokenEvents = function () {
    function AccessTokenEvents() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$accessTokenExpir = _ref.accessTokenExpiringNotificationTime,
            accessTokenExpiringNotificationTime = _ref$accessTokenExpir === undefined ? DefaultAccessTokenExpiringNotificationTime : _ref$accessTokenExpir,
            _ref$accessTokenExpir2 = _ref.accessTokenExpiringTimer,
            accessTokenExpiringTimer = _ref$accessTokenExpir2 === undefined ? new _Timer.Timer("Access token expiring") : _ref$accessTokenExpir2,
            _ref$accessTokenExpir3 = _ref.accessTokenExpiredTimer,
            accessTokenExpiredTimer = _ref$accessTokenExpir3 === undefined ? new _Timer.Timer("Access token expired") : _ref$accessTokenExpir3;

        _classCallCheck(this, AccessTokenEvents);

        this._accessTokenExpiringNotificationTime = accessTokenExpiringNotificationTime;

        this._accessTokenExpiring = accessTokenExpiringTimer;
        this._accessTokenExpired = accessTokenExpiredTimer;
    }

    AccessTokenEvents.prototype.load = function load(container) {
        // only register events if there's an access token and it has an expiration
        if (container.access_token && container.expires_in !== undefined) {
            var duration = container.expires_in;
            _Log.Log.debug("AccessTokenEvents.load: access token present, remaining duration:", duration);

            if (duration > 0) {
                // only register expiring if we still have time
                var expiring = duration - this._accessTokenExpiringNotificationTime;
                if (expiring <= 0) {
                    expiring = 1;
                }

                _Log.Log.debug("AccessTokenEvents.load: registering expiring timer in:", expiring);
                this._accessTokenExpiring.init(expiring);
            } else {
                _Log.Log.debug("AccessTokenEvents.load: canceling existing expiring timer becase we're past expiration.");
                this._accessTokenExpiring.cancel();
            }

            // if it's negative, it will still fire
            var expired = duration + 1;
            _Log.Log.debug("AccessTokenEvents.load: registering expired timer in:", expired);
            this._accessTokenExpired.init(expired);
        } else {
            this._accessTokenExpiring.cancel();
            this._accessTokenExpired.cancel();
        }
    };

    AccessTokenEvents.prototype.unload = function unload() {
        _Log.Log.debug("AccessTokenEvents.unload: canceling existing access token timers");
        this._accessTokenExpiring.cancel();
        this._accessTokenExpired.cancel();
    };

    AccessTokenEvents.prototype.addAccessTokenExpiring = function addAccessTokenExpiring(cb) {
        this._accessTokenExpiring.addHandler(cb);
    };

    AccessTokenEvents.prototype.removeAccessTokenExpiring = function removeAccessTokenExpiring(cb) {
        this._accessTokenExpiring.removeHandler(cb);
    };

    AccessTokenEvents.prototype.addAccessTokenExpired = function addAccessTokenExpired(cb) {
        this._accessTokenExpired.addHandler(cb);
    };

    AccessTokenEvents.prototype.removeAccessTokenExpired = function removeAccessTokenExpired(cb) {
        this._accessTokenExpired.removeHandler(cb);
    };

    return AccessTokenEvents;
}();

/***/ }),

/***/ "./src/CheckSessionIFrame.js":
/*!***********************************!*\
  !*** ./src/CheckSessionIFrame.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CheckSessionIFrame = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultInterval = 2000;

var CheckSessionIFrame = exports.CheckSessionIFrame = function () {
    function CheckSessionIFrame(callback, client_id, url, interval) {
        var stopOnError = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

        _classCallCheck(this, CheckSessionIFrame);

        this._callback = callback;
        this._client_id = client_id;
        this._url = url;
        this._interval = interval || DefaultInterval;
        this._stopOnError = stopOnError;

        var idx = url.indexOf("/", url.indexOf("//") + 2);
        this._frame_origin = url.substr(0, idx);

        this._frame = window.document.createElement("iframe");

        // shotgun approach
        this._frame.style.visibility = "hidden";
        this._frame.style.position = "absolute";
        this._frame.style.display = "none";
        this._frame.style.width = 0;
        this._frame.style.height = 0;

        this._frame.src = url;
    }

    CheckSessionIFrame.prototype.load = function load() {
        var _this = this;

        return new Promise(function (resolve) {
            _this._frame.onload = function () {
                resolve();
            };

            window.document.body.appendChild(_this._frame);
            _this._boundMessageEvent = _this._message.bind(_this);
            window.addEventListener("message", _this._boundMessageEvent, false);
        });
    };

    CheckSessionIFrame.prototype._message = function _message(e) {
        if (e.origin === this._frame_origin && e.source === this._frame.contentWindow) {
            if (e.data === "error") {
                _Log.Log.error("CheckSessionIFrame: error message from check session op iframe");
                if (this._stopOnError) {
                    this.stop();
                }
            } else if (e.data === "changed") {
                _Log.Log.debug("CheckSessionIFrame: changed message from check session op iframe");
                this.stop();
                this._callback();
            } else {
                _Log.Log.debug("CheckSessionIFrame: " + e.data + " message from check session op iframe");
            }
        }
    };

    CheckSessionIFrame.prototype.start = function start(session_state) {
        var _this2 = this;

        if (this._session_state !== session_state) {
            _Log.Log.debug("CheckSessionIFrame.start");

            this.stop();

            this._session_state = session_state;

            var send = function send() {
                _this2._frame.contentWindow.postMessage(_this2._client_id + " " + _this2._session_state, _this2._frame_origin);
            };

            // trigger now
            send();

            // and setup timer
            this._timer = window.setInterval(send, this._interval);
        }
    };

    CheckSessionIFrame.prototype.stop = function stop() {
        this._session_state = null;

        if (this._timer) {
            _Log.Log.debug("CheckSessionIFrame.stop");

            window.clearInterval(this._timer);
            this._timer = null;
        }
    };

    return CheckSessionIFrame;
}();

/***/ }),

/***/ "./src/CordovaIFrameNavigator.js":
/*!***************************************!*\
  !*** ./src/CordovaIFrameNavigator.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CordovaIFrameNavigator = undefined;

var _CordovaPopupWindow = __webpack_require__(/*! ./CordovaPopupWindow.js */ "./src/CordovaPopupWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var CordovaIFrameNavigator = exports.CordovaIFrameNavigator = function () {
    function CordovaIFrameNavigator() {
        _classCallCheck(this, CordovaIFrameNavigator);
    }

    CordovaIFrameNavigator.prototype.prepare = function prepare(params) {
        params.popupWindowFeatures = 'hidden=yes';
        var popup = new _CordovaPopupWindow.CordovaPopupWindow(params);
        return Promise.resolve(popup);
    };

    return CordovaIFrameNavigator;
}();

/***/ }),

/***/ "./src/CordovaPopupNavigator.js":
/*!**************************************!*\
  !*** ./src/CordovaPopupNavigator.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CordovaPopupNavigator = undefined;

var _CordovaPopupWindow = __webpack_require__(/*! ./CordovaPopupWindow.js */ "./src/CordovaPopupWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var CordovaPopupNavigator = exports.CordovaPopupNavigator = function () {
    function CordovaPopupNavigator() {
        _classCallCheck(this, CordovaPopupNavigator);
    }

    CordovaPopupNavigator.prototype.prepare = function prepare(params) {
        var popup = new _CordovaPopupWindow.CordovaPopupWindow(params);
        return Promise.resolve(popup);
    };

    return CordovaPopupNavigator;
}();

/***/ }),

/***/ "./src/CordovaPopupWindow.js":
/*!***********************************!*\
  !*** ./src/CordovaPopupWindow.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CordovaPopupWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultPopupFeatures = 'location=no,toolbar=no,zoom=no';
var DefaultPopupTarget = "_blank";

var CordovaPopupWindow = exports.CordovaPopupWindow = function () {
    function CordovaPopupWindow(params) {
        var _this = this;

        _classCallCheck(this, CordovaPopupWindow);

        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });

        this.features = params.popupWindowFeatures || DefaultPopupFeatures;
        this.target = params.popupWindowTarget || DefaultPopupTarget;

        this.redirect_uri = params.startUrl;
        _Log.Log.debug("CordovaPopupWindow.ctor: redirect_uri: " + this.redirect_uri);
    }

    CordovaPopupWindow.prototype._isInAppBrowserInstalled = function _isInAppBrowserInstalled(cordovaMetadata) {
        return ["cordova-plugin-inappbrowser", "cordova-plugin-inappbrowser.inappbrowser", "org.apache.cordova.inappbrowser"].some(function (name) {
            return cordovaMetadata.hasOwnProperty(name);
        });
    };

    CordovaPopupWindow.prototype.navigate = function navigate(params) {
        if (!params || !params.url) {
            this._error("No url provided");
        } else {
            if (!window.cordova) {
                return this._error("cordova is undefined");
            }

            var cordovaMetadata = window.cordova.require("cordova/plugin_list").metadata;
            if (this._isInAppBrowserInstalled(cordovaMetadata) === false) {
                return this._error("InAppBrowser plugin not found");
            }
            this._popup = cordova.InAppBrowser.open(params.url, this.target, this.features);
            if (this._popup) {
                _Log.Log.debug("CordovaPopupWindow.navigate: popup successfully created");

                this._exitCallbackEvent = this._exitCallback.bind(this);
                this._loadStartCallbackEvent = this._loadStartCallback.bind(this);

                this._popup.addEventListener("exit", this._exitCallbackEvent, false);
                this._popup.addEventListener("loadstart", this._loadStartCallbackEvent, false);
            } else {
                this._error("Error opening popup window");
            }
        }
        return this.promise;
    };

    CordovaPopupWindow.prototype._loadStartCallback = function _loadStartCallback(event) {
        if (event.url.indexOf(this.redirect_uri) === 0) {
            this._success({ url: event.url });
        }
    };

    CordovaPopupWindow.prototype._exitCallback = function _exitCallback(message) {
        this._error(message);
    };

    CordovaPopupWindow.prototype._success = function _success(data) {
        this._cleanup();

        _Log.Log.debug("CordovaPopupWindow: Successful response from cordova popup window");
        this._resolve(data);
    };

    CordovaPopupWindow.prototype._error = function _error(message) {
        this._cleanup();

        _Log.Log.error(message);
        this._reject(new Error(message));
    };

    CordovaPopupWindow.prototype.close = function close() {
        this._cleanup();
    };

    CordovaPopupWindow.prototype._cleanup = function _cleanup() {
        if (this._popup) {
            _Log.Log.debug("CordovaPopupWindow: cleaning up popup");
            this._popup.removeEventListener("exit", this._exitCallbackEvent, false);
            this._popup.removeEventListener("loadstart", this._loadStartCallbackEvent, false);
            this._popup.close();
        }
        this._popup = null;
    };

    _createClass(CordovaPopupWindow, [{
        key: 'promise',
        get: function get() {
            return this._promise;
        }
    }]);

    return CordovaPopupWindow;
}();

/***/ }),

/***/ "./src/ErrorResponse.js":
/*!******************************!*\
  !*** ./src/ErrorResponse.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.ErrorResponse = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var ErrorResponse = exports.ErrorResponse = function (_Error) {
        _inherits(ErrorResponse, _Error);

        function ErrorResponse() {
                var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    error = _ref.error,
                    error_description = _ref.error_description,
                    error_uri = _ref.error_uri,
                    state = _ref.state;

                _classCallCheck(this, ErrorResponse);

                if (!error) {
                        _Log.Log.error("No error passed to ErrorResponse");
                        throw new Error("error");
                }

                var _this = _possibleConstructorReturn(this, _Error.call(this, error_description || error));

                _this.name = "ErrorResponse";

                _this.error = error;
                _this.error_description = error_description;
                _this.error_uri = error_uri;

                _this.state = state;
                return _this;
        }

        return ErrorResponse;
}(Error);

/***/ }),

/***/ "./src/Event.js":
/*!**********************!*\
  !*** ./src/Event.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Event = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var Event = exports.Event = function () {
    function Event(name) {
        _classCallCheck(this, Event);

        this._name = name;
        this._callbacks = [];
    }

    Event.prototype.addHandler = function addHandler(cb) {
        this._callbacks.push(cb);
    };

    Event.prototype.removeHandler = function removeHandler(cb) {
        var idx = this._callbacks.findIndex(function (item) {
            return item === cb;
        });
        if (idx >= 0) {
            this._callbacks.splice(idx, 1);
        }
    };

    Event.prototype.raise = function raise() {
        _Log.Log.debug("Event: Raising event: " + this._name);
        for (var i = 0; i < this._callbacks.length; i++) {
            var _callbacks;

            (_callbacks = this._callbacks)[i].apply(_callbacks, arguments);
        }
    };

    return Event;
}();

/***/ }),

/***/ "./src/Global.js":
/*!***********************!*\
  !*** ./src/Global.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var timer = {
    setInterval: function (_setInterval) {
        function setInterval(_x, _x2) {
            return _setInterval.apply(this, arguments);
        }

        setInterval.toString = function () {
            return _setInterval.toString();
        };

        return setInterval;
    }(function (cb, duration) {
        return setInterval(cb, duration);
    }),
    clearInterval: function (_clearInterval) {
        function clearInterval(_x3) {
            return _clearInterval.apply(this, arguments);
        }

        clearInterval.toString = function () {
            return _clearInterval.toString();
        };

        return clearInterval;
    }(function (handle) {
        return clearInterval(handle);
    })
};

var testing = false;
var request = null;

var Global = exports.Global = function () {
    function Global() {
        _classCallCheck(this, Global);
    }

    Global._testing = function _testing() {
        testing = true;
    };

    Global.setXMLHttpRequest = function setXMLHttpRequest(newRequest) {
        request = newRequest;
    };

    _createClass(Global, null, [{
        key: 'location',
        get: function get() {
            if (!testing) {
                return location;
            }
        }
    }, {
        key: 'localStorage',
        get: function get() {
            if (!testing && typeof window !== 'undefined') {
                return localStorage;
            }
        }
    }, {
        key: 'sessionStorage',
        get: function get() {
            if (!testing && typeof window !== 'undefined') {
                return sessionStorage;
            }
        }
    }, {
        key: 'XMLHttpRequest',
        get: function get() {
            if (!testing && typeof window !== 'undefined') {
                return request || XMLHttpRequest;
            }
        }
    }, {
        key: 'timer',
        get: function get() {
            if (!testing) {
                return timer;
            }
        }
    }]);

    return Global;
}();

/***/ }),

/***/ "./src/IFrameNavigator.js":
/*!********************************!*\
  !*** ./src/IFrameNavigator.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFrameNavigator = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _IFrameWindow = __webpack_require__(/*! ./IFrameWindow.js */ "./src/IFrameWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var IFrameNavigator = exports.IFrameNavigator = function () {
    function IFrameNavigator() {
        _classCallCheck(this, IFrameNavigator);
    }

    IFrameNavigator.prototype.prepare = function prepare(params) {
        var frame = new _IFrameWindow.IFrameWindow(params);
        return Promise.resolve(frame);
    };

    IFrameNavigator.prototype.callback = function callback(url) {
        _Log.Log.debug("IFrameNavigator.callback");

        try {
            _IFrameWindow.IFrameWindow.notifyParent(url);
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    };

    return IFrameNavigator;
}();

/***/ }),

/***/ "./src/IFrameWindow.js":
/*!*****************************!*\
  !*** ./src/IFrameWindow.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFrameWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultTimeout = 10000;

var IFrameWindow = exports.IFrameWindow = function () {
    function IFrameWindow(params) {
        var _this = this;

        _classCallCheck(this, IFrameWindow);

        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });

        this._boundMessageEvent = this._message.bind(this);
        window.addEventListener("message", this._boundMessageEvent, false);

        this._frame = window.document.createElement("iframe");

        // shotgun approach
        this._frame.style.visibility = "hidden";
        this._frame.style.position = "absolute";
        this._frame.style.display = "none";
        this._frame.style.width = 0;
        this._frame.style.height = 0;

        window.document.body.appendChild(this._frame);
    }

    IFrameWindow.prototype.navigate = function navigate(params) {
        if (!params || !params.url) {
            this._error("No url provided");
        } else {
            var timeout = params.silentRequestTimeout || DefaultTimeout;
            _Log.Log.debug("IFrameWindow.navigate: Using timeout of:", timeout);
            this._timer = window.setTimeout(this._timeout.bind(this), timeout);
            this._frame.src = params.url;
        }

        return this.promise;
    };

    IFrameWindow.prototype._success = function _success(data) {
        this._cleanup();

        _Log.Log.debug("IFrameWindow: Successful response from frame window");
        this._resolve(data);
    };

    IFrameWindow.prototype._error = function _error(message) {
        this._cleanup();

        _Log.Log.error(message);
        this._reject(new Error(message));
    };

    IFrameWindow.prototype.close = function close() {
        this._cleanup();
    };

    IFrameWindow.prototype._cleanup = function _cleanup() {
        if (this._frame) {
            _Log.Log.debug("IFrameWindow: cleanup");

            window.removeEventListener("message", this._boundMessageEvent, false);
            window.clearTimeout(this._timer);
            window.document.body.removeChild(this._frame);

            this._timer = null;
            this._frame = null;
            this._boundMessageEvent = null;
        }
    };

    IFrameWindow.prototype._timeout = function _timeout() {
        _Log.Log.debug("IFrameWindow.timeout");
        this._error("Frame window timed out");
    };

    IFrameWindow.prototype._message = function _message(e) {
        _Log.Log.debug("IFrameWindow.message");

        if (this._timer && e.origin === this._origin && e.source === this._frame.contentWindow) {
            var url = e.data;
            if (url) {
                this._success({ url: url });
            } else {
                this._error("Invalid response from frame");
            }
        }
    };

    IFrameWindow.notifyParent = function notifyParent(url) {
        _Log.Log.debug("IFrameWindow.notifyParent");
        if (window.frameElement) {
            url = url || window.location.href;
            if (url) {
                _Log.Log.debug("IFrameWindow.notifyParent: posting url message to parent");
                window.parent.postMessage(url, location.protocol + "//" + location.host);
            }
        }
    };

    _createClass(IFrameWindow, [{
        key: "promise",
        get: function get() {
            return this._promise;
        }
    }, {
        key: "_origin",
        get: function get() {
            return location.protocol + "//" + location.host;
        }
    }]);

    return IFrameWindow;
}();

/***/ }),

/***/ "./src/InMemoryWebStorage.js":
/*!***********************************!*\
  !*** ./src/InMemoryWebStorage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InMemoryWebStorage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InMemoryWebStorage = exports.InMemoryWebStorage = function () {
    function InMemoryWebStorage() {
        _classCallCheck(this, InMemoryWebStorage);

        this._data = {};
    }

    InMemoryWebStorage.prototype.getItem = function getItem(key) {
        _Log.Log.debug("InMemoryWebStorage.getItem", key);
        return this._data[key];
    };

    InMemoryWebStorage.prototype.setItem = function setItem(key, value) {
        _Log.Log.debug("InMemoryWebStorage.setItem", key);
        this._data[key] = value;
    };

    InMemoryWebStorage.prototype.removeItem = function removeItem(key) {
        _Log.Log.debug("InMemoryWebStorage.removeItem", key);
        delete this._data[key];
    };

    InMemoryWebStorage.prototype.key = function key(index) {
        return Object.getOwnPropertyNames(this._data)[index];
    };

    _createClass(InMemoryWebStorage, [{
        key: "length",
        get: function get() {
            return Object.getOwnPropertyNames(this._data).length;
        }
    }]);

    return InMemoryWebStorage;
}();

/***/ }),

/***/ "./src/JoseUtil.js":
/*!*************************!*\
  !*** ./src/JoseUtil.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JoseUtil = undefined;

var _jsrsasign = __webpack_require__(/*! ./crypto/jsrsasign */ "./src/crypto/jsrsasign.js");

var _JoseUtilImpl = __webpack_require__(/*! ./JoseUtilImpl */ "./src/JoseUtilImpl.js");

var _JoseUtilImpl2 = _interopRequireDefault(_JoseUtilImpl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JoseUtil = exports.JoseUtil = (0, _JoseUtilImpl2.default)({ jws: _jsrsasign.jws, KeyUtil: _jsrsasign.KeyUtil, X509: _jsrsasign.X509, crypto: _jsrsasign.crypto, hextob64u: _jsrsasign.hextob64u, b64tohex: _jsrsasign.b64tohex, AllowedSigningAlgs: _jsrsasign.AllowedSigningAlgs });

/***/ }),

/***/ "./src/JoseUtilImpl.js":
/*!*****************************!*\
  !*** ./src/JoseUtilImpl.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getJoseUtil;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

function getJoseUtil(_ref) {
    var jws = _ref.jws,
        KeyUtil = _ref.KeyUtil,
        X509 = _ref.X509,
        crypto = _ref.crypto,
        hextob64u = _ref.hextob64u,
        b64tohex = _ref.b64tohex,
        AllowedSigningAlgs = _ref.AllowedSigningAlgs;

    return function () {
        function JoseUtil() {
            _classCallCheck(this, JoseUtil);
        }

        JoseUtil.parseJwt = function parseJwt(jwt) {
            _Log.Log.debug("JoseUtil.parseJwt");
            try {
                var token = jws.JWS.parse(jwt);
                return {
                    header: token.headerObj,
                    payload: token.payloadObj
                };
            } catch (e) {
                _Log.Log.error(e);
            }
        };

        JoseUtil.validateJwt = function validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive) {
            _Log.Log.debug("JoseUtil.validateJwt");

            try {
                if (key.kty === "RSA") {
                    if (key.e && key.n) {
                        key = KeyUtil.getKey(key);
                    } else if (key.x5c && key.x5c.length) {
                        var hex = b64tohex(key.x5c[0]);
                        key = X509.getPublicKeyFromCertHex(hex);
                    } else {
                        _Log.Log.error("JoseUtil.validateJwt: RSA key missing key material", key);
                        return Promise.reject(new Error("RSA key missing key material"));
                    }
                } else if (key.kty === "EC") {
                    if (key.crv && key.x && key.y) {
                        key = KeyUtil.getKey(key);
                    } else {
                        _Log.Log.error("JoseUtil.validateJwt: EC key missing key material", key);
                        return Promise.reject(new Error("EC key missing key material"));
                    }
                } else {
                    _Log.Log.error("JoseUtil.validateJwt: Unsupported key type", key && key.kty);
                    return Promise.reject(new Error( true && key.kty));
                }

                return JoseUtil._validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive);
            } catch (e) {
                _Log.Log.error(e && e.message || e);
                return Promise.reject("JWT validation failed");
            }
        };

        JoseUtil.validateJwtAttributes = function validateJwtAttributes(jwt, issuer, audience, clockSkew, now, timeInsensitive) {
            if (!clockSkew) {
                clockSkew = 0;
            }

            if (!now) {
                now = parseInt(Date.now() / 1000);
            }

            var payload = JoseUtil.parseJwt(jwt).payload;

            if (!payload.iss) {
                _Log.Log.error("JoseUtil._validateJwt: issuer was not provided");
                return Promise.reject(new Error("issuer was not provided"));
            }
            if (payload.iss !== issuer) {
                _Log.Log.error("JoseUtil._validateJwt: Invalid issuer in token", payload.iss);
                return Promise.reject(new Error("Invalid issuer in token: " + payload.iss));
            }

            if (!payload.aud) {
                _Log.Log.error("JoseUtil._validateJwt: aud was not provided");
                return Promise.reject(new Error("aud was not provided"));
            }
            var validAudience = payload.aud === audience || Array.isArray(payload.aud) && payload.aud.indexOf(audience) >= 0;
            if (!validAudience) {
                _Log.Log.error("JoseUtil._validateJwt: Invalid audience in token", payload.aud);
                return Promise.reject(new Error("Invalid audience in token: " + payload.aud));
            }
            if (payload.azp && payload.azp !== audience) {
                _Log.Log.error("JoseUtil._validateJwt: Invalid azp in token", payload.azp);
                return Promise.reject(new Error("Invalid azp in token: " + payload.azp));
            }

            if (!timeInsensitive) {
                var lowerNow = now + clockSkew;
                var upperNow = now - clockSkew;

                if (!payload.iat) {
                    _Log.Log.error("JoseUtil._validateJwt: iat was not provided");
                    return Promise.reject(new Error("iat was not provided"));
                }
                if (lowerNow < payload.iat) {
                    _Log.Log.error("JoseUtil._validateJwt: iat is in the future", payload.iat);
                    return Promise.reject(new Error("iat is in the future: " + payload.iat));
                }

                if (payload.nbf && lowerNow < payload.nbf) {
                    _Log.Log.error("JoseUtil._validateJwt: nbf is in the future", payload.nbf);
                    return Promise.reject(new Error("nbf is in the future: " + payload.nbf));
                }

                if (!payload.exp) {
                    _Log.Log.error("JoseUtil._validateJwt: exp was not provided");
                    return Promise.reject(new Error("exp was not provided"));
                }
                if (payload.exp < upperNow) {
                    _Log.Log.error("JoseUtil._validateJwt: exp is in the past", payload.exp);
                    return Promise.reject(new Error("exp is in the past:" + payload.exp));
                }
            }

            return Promise.resolve(payload);
        };

        JoseUtil._validateJwt = function _validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive) {

            return JoseUtil.validateJwtAttributes(jwt, issuer, audience, clockSkew, now, timeInsensitive).then(function (payload) {
                try {
                    if (!jws.JWS.verify(jwt, key, AllowedSigningAlgs)) {
                        _Log.Log.error("JoseUtil._validateJwt: signature validation failed");
                        return Promise.reject(new Error("signature validation failed"));
                    }

                    return payload;
                } catch (e) {
                    _Log.Log.error(e && e.message || e);
                    return Promise.reject(new Error("signature validation failed"));
                }
            });
        };

        JoseUtil.hashString = function hashString(value, alg) {
            try {
                return crypto.Util.hashString(value, alg);
            } catch (e) {
                _Log.Log.error(e);
            }
        };

        JoseUtil.hexToBase64Url = function hexToBase64Url(value) {
            try {
                return hextob64u(value);
            } catch (e) {
                _Log.Log.error(e);
            }
        };

        return JoseUtil;
    }();
}
module.exports = exports["default"];

/***/ }),

/***/ "./src/JsonService.js":
/*!****************************!*\
  !*** ./src/JsonService.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JsonService = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var JsonService = exports.JsonService = function () {
    function JsonService() {
        var additionalContentTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var XMLHttpRequestCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global.Global.XMLHttpRequest;
        var jwtHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, JsonService);

        if (additionalContentTypes && Array.isArray(additionalContentTypes)) {
            this._contentTypes = additionalContentTypes.slice();
        } else {
            this._contentTypes = [];
        }
        this._contentTypes.push('application/json');
        if (jwtHandler) {
            this._contentTypes.push('application/jwt');
        }

        this._XMLHttpRequest = XMLHttpRequestCtor;
        this._jwtHandler = jwtHandler;
    }

    JsonService.prototype.getJson = function getJson(url, token) {
        var _this = this;

        if (!url) {
            _Log.Log.error("JsonService.getJson: No url passed");
            throw new Error("url");
        }

        _Log.Log.debug("JsonService.getJson, url: ", url);

        return new Promise(function (resolve, reject) {

            var req = new _this._XMLHttpRequest();
            req.open('GET', url);

            var allowedContentTypes = _this._contentTypes;
            var jwtHandler = _this._jwtHandler;

            req.onload = function () {
                _Log.Log.debug("JsonService.getJson: HTTP response received, status", req.status);

                if (req.status === 200) {

                    var contentType = req.getResponseHeader("Content-Type");
                    if (contentType) {

                        var found = allowedContentTypes.find(function (item) {
                            if (contentType.startsWith(item)) {
                                return true;
                            }
                        });

                        if (found == "application/jwt") {
                            jwtHandler(req).then(resolve, reject);
                            return;
                        }

                        if (found) {
                            try {
                                resolve(JSON.parse(req.responseText));
                                return;
                            } catch (e) {
                                _Log.Log.error("JsonService.getJson: Error parsing JSON response", e.message);
                                reject(e);
                                return;
                            }
                        }
                    }

                    reject(Error("Invalid response Content-Type: " + contentType + ", from URL: " + url));
                } else {
                    reject(Error(req.statusText + " (" + req.status + ")"));
                }
            };

            req.onerror = function () {
                _Log.Log.error("JsonService.getJson: network error");
                reject(Error("Network Error"));
            };

            if (token) {
                _Log.Log.debug("JsonService.getJson: token passed, setting Authorization header");
                req.setRequestHeader("Authorization", "Bearer " + token);
            }

            req.send();
        });
    };

    JsonService.prototype.postForm = function postForm(url, payload) {
        var _this2 = this;

        if (!url) {
            _Log.Log.error("JsonService.postForm: No url passed");
            throw new Error("url");
        }

        _Log.Log.debug("JsonService.postForm, url: ", url);

        return new Promise(function (resolve, reject) {

            var req = new _this2._XMLHttpRequest();
            req.open('POST', url);

            var allowedContentTypes = _this2._contentTypes;

            req.onload = function () {
                _Log.Log.debug("JsonService.postForm: HTTP response received, status", req.status);

                if (req.status === 200) {

                    var contentType = req.getResponseHeader("Content-Type");
                    if (contentType) {

                        var found = allowedContentTypes.find(function (item) {
                            if (contentType.startsWith(item)) {
                                return true;
                            }
                        });

                        if (found) {
                            try {
                                resolve(JSON.parse(req.responseText));
                                return;
                            } catch (e) {
                                _Log.Log.error("JsonService.postForm: Error parsing JSON response", e.message);
                                reject(e);
                                return;
                            }
                        }
                    }

                    reject(Error("Invalid response Content-Type: " + contentType + ", from URL: " + url));
                    return;
                }

                if (req.status === 400) {

                    var contentType = req.getResponseHeader("Content-Type");
                    if (contentType) {

                        var found = allowedContentTypes.find(function (item) {
                            if (contentType.startsWith(item)) {
                                return true;
                            }
                        });

                        if (found) {
                            try {
                                var payload = JSON.parse(req.responseText);
                                if (payload && payload.error) {
                                    _Log.Log.error("JsonService.postForm: Error from server: ", payload.error);
                                    reject(new Error(payload.error));
                                    return;
                                }
                            } catch (e) {
                                _Log.Log.error("JsonService.postForm: Error parsing JSON response", e.message);
                                reject(e);
                                return;
                            }
                        }
                    }
                }

                reject(Error(req.statusText + " (" + req.status + ")"));
            };

            req.onerror = function () {
                _Log.Log.error("JsonService.postForm: network error");
                reject(Error("Network Error"));
            };

            var body = "";
            for (var key in payload) {

                var value = payload[key];

                if (value) {

                    if (body.length > 0) {
                        body += "&";
                    }

                    body += encodeURIComponent(key);
                    body += "=";
                    body += encodeURIComponent(value);
                }
            }

            req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            req.send(body);
        });
    };

    return JsonService;
}();

/***/ }),

/***/ "./src/Log.js":
/*!********************!*\
  !*** ./src/Log.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var nopLogger = {
    debug: function debug() {},
    info: function info() {},
    warn: function warn() {},
    error: function error() {}
};

var NONE = 0;
var ERROR = 1;
var WARN = 2;
var INFO = 3;
var DEBUG = 4;

var logger = void 0;
var level = void 0;

var Log = exports.Log = function () {
    function Log() {
        _classCallCheck(this, Log);
    }

    Log.reset = function reset() {
        level = INFO;
        logger = nopLogger;
    };

    Log.debug = function debug() {
        if (level >= DEBUG) {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            logger.debug.apply(logger, Array.from(args));
        }
    };

    Log.info = function info() {
        if (level >= INFO) {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            logger.info.apply(logger, Array.from(args));
        }
    };

    Log.warn = function warn() {
        if (level >= WARN) {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            logger.warn.apply(logger, Array.from(args));
        }
    };

    Log.error = function error() {
        if (level >= ERROR) {
            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
            }

            logger.error.apply(logger, Array.from(args));
        }
    };

    _createClass(Log, null, [{
        key: "NONE",
        get: function get() {
            return NONE;
        }
    }, {
        key: "ERROR",
        get: function get() {
            return ERROR;
        }
    }, {
        key: "WARN",
        get: function get() {
            return WARN;
        }
    }, {
        key: "INFO",
        get: function get() {
            return INFO;
        }
    }, {
        key: "DEBUG",
        get: function get() {
            return DEBUG;
        }
    }, {
        key: "level",
        get: function get() {
            return level;
        },
        set: function set(value) {
            if (NONE <= value && value <= DEBUG) {
                level = value;
            } else {
                throw new Error("Invalid log level");
            }
        }
    }, {
        key: "logger",
        get: function get() {
            return logger;
        },
        set: function set(value) {
            if (!value.debug && value.info) {
                // just to stay backwards compat. can remove in 2.0
                value.debug = value.info;
            }

            if (value.debug && value.info && value.warn && value.error) {
                logger = value;
            } else {
                throw new Error("Invalid logger");
            }
        }
    }]);

    return Log;
}();

Log.reset();

/***/ }),

/***/ "./src/MetadataService.js":
/*!********************************!*\
  !*** ./src/MetadataService.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MetadataService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _JsonService = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcMetadataUrlPath = '.well-known/openid-configuration';

var MetadataService = exports.MetadataService = function () {
    function MetadataService(settings) {
        var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService.JsonService;

        _classCallCheck(this, MetadataService);

        if (!settings) {
            _Log.Log.error("MetadataService: No settings passed to MetadataService");
            throw new Error("settings");
        }

        this._settings = settings;
        this._jsonService = new JsonServiceCtor(['application/jwk-set+json']);
    }

    MetadataService.prototype.getMetadata = function getMetadata() {
        var _this = this;

        if (this._settings.metadata) {
            _Log.Log.debug("MetadataService.getMetadata: Returning metadata from settings");
            return Promise.resolve(this._settings.metadata);
        }

        if (!this.metadataUrl) {
            _Log.Log.error("MetadataService.getMetadata: No authority or metadataUrl configured on settings");
            return Promise.reject(new Error("No authority or metadataUrl configured on settings"));
        }

        _Log.Log.debug("MetadataService.getMetadata: getting metadata from", this.metadataUrl);

        return this._jsonService.getJson(this.metadataUrl).then(function (metadata) {
            _Log.Log.debug("MetadataService.getMetadata: json received");
            _this._settings.metadata = metadata;
            return metadata;
        });
    };

    MetadataService.prototype.getIssuer = function getIssuer() {
        return this._getMetadataProperty("issuer");
    };

    MetadataService.prototype.getAuthorizationEndpoint = function getAuthorizationEndpoint() {
        return this._getMetadataProperty("authorization_endpoint");
    };

    MetadataService.prototype.getUserInfoEndpoint = function getUserInfoEndpoint() {
        return this._getMetadataProperty("userinfo_endpoint");
    };

    MetadataService.prototype.getTokenEndpoint = function getTokenEndpoint() {
        var optional = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        return this._getMetadataProperty("token_endpoint", optional);
    };

    MetadataService.prototype.getCheckSessionIframe = function getCheckSessionIframe() {
        return this._getMetadataProperty("check_session_iframe", true);
    };

    MetadataService.prototype.getEndSessionEndpoint = function getEndSessionEndpoint() {
        return this._getMetadataProperty("end_session_endpoint", true);
    };

    MetadataService.prototype.getRevocationEndpoint = function getRevocationEndpoint() {
        return this._getMetadataProperty("revocation_endpoint", true);
    };

    MetadataService.prototype.getKeysEndpoint = function getKeysEndpoint() {
        return this._getMetadataProperty("jwks_uri", true);
    };

    MetadataService.prototype._getMetadataProperty = function _getMetadataProperty(name) {
        var optional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _Log.Log.debug("MetadataService.getMetadataProperty for: " + name);

        return this.getMetadata().then(function (metadata) {
            _Log.Log.debug("MetadataService.getMetadataProperty: metadata recieved");

            if (metadata[name] === undefined) {

                if (optional === true) {
                    _Log.Log.warn("MetadataService.getMetadataProperty: Metadata does not contain optional property " + name);
                    return undefined;
                } else {
                    _Log.Log.error("MetadataService.getMetadataProperty: Metadata does not contain property " + name);
                    throw new Error("Metadata does not contain property " + name);
                }
            }

            return metadata[name];
        });
    };

    MetadataService.prototype.getSigningKeys = function getSigningKeys() {
        var _this2 = this;

        if (this._settings.signingKeys) {
            _Log.Log.debug("MetadataService.getSigningKeys: Returning signingKeys from settings");
            return Promise.resolve(this._settings.signingKeys);
        }

        return this._getMetadataProperty("jwks_uri").then(function (jwks_uri) {
            _Log.Log.debug("MetadataService.getSigningKeys: jwks_uri received", jwks_uri);

            return _this2._jsonService.getJson(jwks_uri).then(function (keySet) {
                _Log.Log.debug("MetadataService.getSigningKeys: key set received", keySet);

                if (!keySet.keys) {
                    _Log.Log.error("MetadataService.getSigningKeys: Missing keys on keyset");
                    throw new Error("Missing keys on keyset");
                }

                _this2._settings.signingKeys = keySet.keys;
                return _this2._settings.signingKeys;
            });
        });
    };

    _createClass(MetadataService, [{
        key: 'metadataUrl',
        get: function get() {
            if (!this._metadataUrl) {
                if (this._settings.metadataUrl) {
                    this._metadataUrl = this._settings.metadataUrl;
                } else {
                    this._metadataUrl = this._settings.authority;

                    if (this._metadataUrl && this._metadataUrl.indexOf(OidcMetadataUrlPath) < 0) {
                        if (this._metadataUrl[this._metadataUrl.length - 1] !== '/') {
                            this._metadataUrl += '/';
                        }
                        this._metadataUrl += OidcMetadataUrlPath;
                    }
                }
            }

            return this._metadataUrl;
        }
    }]);

    return MetadataService;
}();

/***/ }),

/***/ "./src/OidcClient.js":
/*!***************************!*\
  !*** ./src/OidcClient.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OidcClient = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _OidcClientSettings = __webpack_require__(/*! ./OidcClientSettings.js */ "./src/OidcClientSettings.js");

var _ErrorResponse = __webpack_require__(/*! ./ErrorResponse.js */ "./src/ErrorResponse.js");

var _SigninRequest = __webpack_require__(/*! ./SigninRequest.js */ "./src/SigninRequest.js");

var _SigninResponse = __webpack_require__(/*! ./SigninResponse.js */ "./src/SigninResponse.js");

var _SignoutRequest = __webpack_require__(/*! ./SignoutRequest.js */ "./src/SignoutRequest.js");

var _SignoutResponse = __webpack_require__(/*! ./SignoutResponse.js */ "./src/SignoutResponse.js");

var _SigninState = __webpack_require__(/*! ./SigninState.js */ "./src/SigninState.js");

var _State = __webpack_require__(/*! ./State.js */ "./src/State.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcClient = exports.OidcClient = function () {
    function OidcClient() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, OidcClient);

        if (settings instanceof _OidcClientSettings.OidcClientSettings) {
            this._settings = settings;
        } else {
            this._settings = new _OidcClientSettings.OidcClientSettings(settings);
        }
    }

    OidcClient.prototype.createSigninRequest = function createSigninRequest() {
        var _this = this;

        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            response_type = _ref.response_type,
            scope = _ref.scope,
            redirect_uri = _ref.redirect_uri,
            data = _ref.data,
            state = _ref.state,
            prompt = _ref.prompt,
            display = _ref.display,
            max_age = _ref.max_age,
            ui_locales = _ref.ui_locales,
            id_token_hint = _ref.id_token_hint,
            login_hint = _ref.login_hint,
            acr_values = _ref.acr_values,
            resource = _ref.resource,
            request = _ref.request,
            request_uri = _ref.request_uri,
            response_mode = _ref.response_mode,
            extraQueryParams = _ref.extraQueryParams,
            request_type = _ref.request_type;

        var stateStore = arguments[1];

        _Log.Log.debug("OidcClient.createSigninRequest");

        var client_id = this._settings.client_id;
        response_type = response_type || this._settings.response_type;
        scope = scope || this._settings.scope;
        redirect_uri = redirect_uri || this._settings.redirect_uri;

        // id_token_hint, login_hint aren't allowed on _settings
        prompt = prompt || this._settings.prompt;
        display = display || this._settings.display;
        max_age = max_age || this._settings.max_age;
        ui_locales = ui_locales || this._settings.ui_locales;
        acr_values = acr_values || this._settings.acr_values;
        resource = resource || this._settings.resource;
        response_mode = response_mode || this._settings.response_mode;
        extraQueryParams = extraQueryParams || this._settings.extraQueryParams;

        var authority = this._settings.authority;

        if (_SigninRequest.SigninRequest.isCode(response_type) && response_type !== "code") {
            return Promise.reject(new Error("OpenID Connect hybrid flow is not supported"));
        }

        return this._metadataService.getAuthorizationEndpoint().then(function (url) {
            _Log.Log.debug("OidcClient.createSigninRequest: Received authorization endpoint", url);

            var signinRequest = new _SigninRequest.SigninRequest({
                url: url,
                client_id: client_id,
                redirect_uri: redirect_uri,
                response_type: response_type,
                scope: scope,
                data: data || state,
                authority: authority,
                prompt: prompt, display: display, max_age: max_age, ui_locales: ui_locales, id_token_hint: id_token_hint, login_hint: login_hint, acr_values: acr_values,
                resource: resource, request: request, request_uri: request_uri, extraQueryParams: extraQueryParams, request_type: request_type, response_mode: response_mode
            });

            var signinState = signinRequest.state;
            stateStore = stateStore || _this._stateStore;

            return stateStore.set(signinState.id, signinState.toStorageString()).then(function () {
                return signinRequest;
            });
        });
    };

    OidcClient.prototype.readSigninResponseState = function readSigninResponseState(url, stateStore) {
        var removeState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _Log.Log.debug("OidcClient.readSigninResponseState");

        var useQuery = this._settings.response_mode === "query" || !this._settings.response_mode && _SigninRequest.SigninRequest.isCode(this._settings.response_type);
        var delimiter = useQuery ? "?" : "#";

        var response = new _SigninResponse.SigninResponse(url, delimiter);

        if (!response.state) {
            _Log.Log.error("OidcClient.readSigninResponseState: No state in response");
            return Promise.reject(new Error("No state in response"));
        }

        stateStore = stateStore || this._stateStore;

        var stateApi = removeState ? stateStore.remove.bind(stateStore) : stateStore.get.bind(stateStore);

        return stateApi(response.state).then(function (storedStateString) {
            if (!storedStateString) {
                _Log.Log.error("OidcClient.readSigninResponseState: No matching state found in storage");
                throw new Error("No matching state found in storage");
            }

            var state = _SigninState.SigninState.fromStorageString(storedStateString);
            return { state: state, response: response };
        });
    };

    OidcClient.prototype.processSigninResponse = function processSigninResponse(url, stateStore) {
        var _this2 = this;

        _Log.Log.debug("OidcClient.processSigninResponse");

        return this.readSigninResponseState(url, stateStore, true).then(function (_ref2) {
            var state = _ref2.state,
                response = _ref2.response;

            _Log.Log.debug("OidcClient.processSigninResponse: Received state from storage; validating response");
            return _this2._validator.validateSigninResponse(state, response);
        });
    };

    OidcClient.prototype.createSignoutRequest = function createSignoutRequest() {
        var _this3 = this;

        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            id_token_hint = _ref3.id_token_hint,
            data = _ref3.data,
            state = _ref3.state,
            post_logout_redirect_uri = _ref3.post_logout_redirect_uri,
            extraQueryParams = _ref3.extraQueryParams,
            request_type = _ref3.request_type;

        var stateStore = arguments[1];

        _Log.Log.debug("OidcClient.createSignoutRequest");

        post_logout_redirect_uri = post_logout_redirect_uri || this._settings.post_logout_redirect_uri;
        extraQueryParams = extraQueryParams || this._settings.extraQueryParams;

        return this._metadataService.getEndSessionEndpoint().then(function (url) {
            if (!url) {
                _Log.Log.error("OidcClient.createSignoutRequest: No end session endpoint url returned");
                throw new Error("no end session endpoint");
            }

            _Log.Log.debug("OidcClient.createSignoutRequest: Received end session endpoint", url);

            var request = new _SignoutRequest.SignoutRequest({
                url: url,
                id_token_hint: id_token_hint,
                post_logout_redirect_uri: post_logout_redirect_uri,
                data: data || state,
                extraQueryParams: extraQueryParams,
                request_type: request_type
            });

            var signoutState = request.state;
            if (signoutState) {
                _Log.Log.debug("OidcClient.createSignoutRequest: Signout request has state to persist");

                stateStore = stateStore || _this3._stateStore;
                stateStore.set(signoutState.id, signoutState.toStorageString());
            }

            return request;
        });
    };

    OidcClient.prototype.readSignoutResponseState = function readSignoutResponseState(url, stateStore) {
        var removeState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _Log.Log.debug("OidcClient.readSignoutResponseState");

        var response = new _SignoutResponse.SignoutResponse(url);
        if (!response.state) {
            _Log.Log.debug("OidcClient.readSignoutResponseState: No state in response");

            if (response.error) {
                _Log.Log.warn("OidcClient.readSignoutResponseState: Response was error: ", response.error);
                return Promise.reject(new _ErrorResponse.ErrorResponse(response));
            }

            return Promise.resolve({ undefined: undefined, response: response });
        }

        var stateKey = response.state;

        stateStore = stateStore || this._stateStore;

        var stateApi = removeState ? stateStore.remove.bind(stateStore) : stateStore.get.bind(stateStore);
        return stateApi(stateKey).then(function (storedStateString) {
            if (!storedStateString) {
                _Log.Log.error("OidcClient.readSignoutResponseState: No matching state found in storage");
                throw new Error("No matching state found in storage");
            }

            var state = _State.State.fromStorageString(storedStateString);

            return { state: state, response: response };
        });
    };

    OidcClient.prototype.processSignoutResponse = function processSignoutResponse(url, stateStore) {
        var _this4 = this;

        _Log.Log.debug("OidcClient.processSignoutResponse");

        return this.readSignoutResponseState(url, stateStore, true).then(function (_ref4) {
            var state = _ref4.state,
                response = _ref4.response;

            _Log.Log.debug("OidcClient.processSignoutResponse: Received state from storage; validating response");
            return _this4._validator.validateSignoutResponse(state, response);
        });
    };

    OidcClient.prototype.clearStaleState = function clearStaleState(stateStore) {
        _Log.Log.debug("OidcClient.clearStaleState");

        stateStore = stateStore || this._stateStore;

        return _State.State.clearStaleState(stateStore, this.settings.staleStateAge);
    };

    _createClass(OidcClient, [{
        key: '_stateStore',
        get: function get() {
            return this.settings.stateStore;
        }
    }, {
        key: '_validator',
        get: function get() {
            return this.settings.validator;
        }
    }, {
        key: '_metadataService',
        get: function get() {
            return this.settings.metadataService;
        }
    }, {
        key: 'settings',
        get: function get() {
            return this._settings;
        }
    }, {
        key: 'metadataService',
        get: function get() {
            return this._metadataService;
        }
    }]);

    return OidcClient;
}();

/***/ }),

/***/ "./src/OidcClientSettings.js":
/*!***********************************!*\
  !*** ./src/OidcClientSettings.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OidcClientSettings = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _WebStorageStateStore = __webpack_require__(/*! ./WebStorageStateStore.js */ "./src/WebStorageStateStore.js");

var _ResponseValidator = __webpack_require__(/*! ./ResponseValidator.js */ "./src/ResponseValidator.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcMetadataUrlPath = '.well-known/openid-configuration';

var DefaultResponseType = "id_token";
var DefaultScope = "openid";
var DefaultStaleStateAge = 60 * 15; // seconds
var DefaultClockSkewInSeconds = 60 * 5;

var OidcClientSettings = exports.OidcClientSettings = function () {
    function OidcClientSettings() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            authority = _ref.authority,
            metadataUrl = _ref.metadataUrl,
            metadata = _ref.metadata,
            signingKeys = _ref.signingKeys,
            client_id = _ref.client_id,
            client_secret = _ref.client_secret,
            _ref$response_type = _ref.response_type,
            response_type = _ref$response_type === undefined ? DefaultResponseType : _ref$response_type,
            _ref$scope = _ref.scope,
            scope = _ref$scope === undefined ? DefaultScope : _ref$scope,
            redirect_uri = _ref.redirect_uri,
            post_logout_redirect_uri = _ref.post_logout_redirect_uri,
            prompt = _ref.prompt,
            display = _ref.display,
            max_age = _ref.max_age,
            ui_locales = _ref.ui_locales,
            acr_values = _ref.acr_values,
            resource = _ref.resource,
            response_mode = _ref.response_mode,
            _ref$filterProtocolCl = _ref.filterProtocolClaims,
            filterProtocolClaims = _ref$filterProtocolCl === undefined ? true : _ref$filterProtocolCl,
            _ref$loadUserInfo = _ref.loadUserInfo,
            loadUserInfo = _ref$loadUserInfo === undefined ? true : _ref$loadUserInfo,
            _ref$staleStateAge = _ref.staleStateAge,
            staleStateAge = _ref$staleStateAge === undefined ? DefaultStaleStateAge : _ref$staleStateAge,
            _ref$clockSkew = _ref.clockSkew,
            clockSkew = _ref$clockSkew === undefined ? DefaultClockSkewInSeconds : _ref$clockSkew,
            _ref$userInfoJwtIssue = _ref.userInfoJwtIssuer,
            userInfoJwtIssuer = _ref$userInfoJwtIssue === undefined ? 'OP' : _ref$userInfoJwtIssue,
            _ref$stateStore = _ref.stateStore,
            stateStore = _ref$stateStore === undefined ? new _WebStorageStateStore.WebStorageStateStore() : _ref$stateStore,
            _ref$ResponseValidato = _ref.ResponseValidatorCtor,
            ResponseValidatorCtor = _ref$ResponseValidato === undefined ? _ResponseValidator.ResponseValidator : _ref$ResponseValidato,
            _ref$MetadataServiceC = _ref.MetadataServiceCtor,
            MetadataServiceCtor = _ref$MetadataServiceC === undefined ? _MetadataService.MetadataService : _ref$MetadataServiceC,
            _ref$extraQueryParams = _ref.extraQueryParams,
            extraQueryParams = _ref$extraQueryParams === undefined ? {} : _ref$extraQueryParams;

        _classCallCheck(this, OidcClientSettings);

        this._authority = authority;
        this._metadataUrl = metadataUrl;
        this._metadata = metadata;
        this._signingKeys = signingKeys;

        this._client_id = client_id;
        this._client_secret = client_secret;
        this._response_type = response_type;
        this._scope = scope;
        this._redirect_uri = redirect_uri;
        this._post_logout_redirect_uri = post_logout_redirect_uri;

        this._prompt = prompt;
        this._display = display;
        this._max_age = max_age;
        this._ui_locales = ui_locales;
        this._acr_values = acr_values;
        this._resource = resource;
        this._response_mode = response_mode;

        this._filterProtocolClaims = !!filterProtocolClaims;
        this._loadUserInfo = !!loadUserInfo;
        this._staleStateAge = staleStateAge;
        this._clockSkew = clockSkew;
        this._userInfoJwtIssuer = userInfoJwtIssuer;

        this._stateStore = stateStore;
        this._validator = new ResponseValidatorCtor(this);
        this._metadataService = new MetadataServiceCtor(this);

        this._extraQueryParams = (typeof extraQueryParams === 'undefined' ? 'undefined' : _typeof(extraQueryParams)) === 'object' ? extraQueryParams : {};
    }

    // client config


    _createClass(OidcClientSettings, [{
        key: 'client_id',
        get: function get() {
            return this._client_id;
        },
        set: function set(value) {
            if (!this._client_id) {
                // one-time set only
                this._client_id = value;
            } else {
                _Log.Log.error("OidcClientSettings.set_client_id: client_id has already been assigned.");
                throw new Error("client_id has already been assigned.");
            }
        }
    }, {
        key: 'client_secret',
        get: function get() {
            return this._client_secret;
        }
    }, {
        key: 'response_type',
        get: function get() {
            return this._response_type;
        }
    }, {
        key: 'scope',
        get: function get() {
            return this._scope;
        }
    }, {
        key: 'redirect_uri',
        get: function get() {
            return this._redirect_uri;
        }
    }, {
        key: 'post_logout_redirect_uri',
        get: function get() {
            return this._post_logout_redirect_uri;
        }

        // optional protocol params

    }, {
        key: 'prompt',
        get: function get() {
            return this._prompt;
        }
    }, {
        key: 'display',
        get: function get() {
            return this._display;
        }
    }, {
        key: 'max_age',
        get: function get() {
            return this._max_age;
        }
    }, {
        key: 'ui_locales',
        get: function get() {
            return this._ui_locales;
        }
    }, {
        key: 'acr_values',
        get: function get() {
            return this._acr_values;
        }
    }, {
        key: 'resource',
        get: function get() {
            return this._resource;
        }
    }, {
        key: 'response_mode',
        get: function get() {
            return this._response_mode;
        }

        // metadata

    }, {
        key: 'authority',
        get: function get() {
            return this._authority;
        },
        set: function set(value) {
            if (!this._authority) {
                // one-time set only
                this._authority = value;
            } else {
                _Log.Log.error("OidcClientSettings.set_authority: authority has already been assigned.");
                throw new Error("authority has already been assigned.");
            }
        }
    }, {
        key: 'metadataUrl',
        get: function get() {
            if (!this._metadataUrl) {
                this._metadataUrl = this.authority;

                if (this._metadataUrl && this._metadataUrl.indexOf(OidcMetadataUrlPath) < 0) {
                    if (this._metadataUrl[this._metadataUrl.length - 1] !== '/') {
                        this._metadataUrl += '/';
                    }
                    this._metadataUrl += OidcMetadataUrlPath;
                }
            }

            return this._metadataUrl;
        }

        // settable/cachable metadata values

    }, {
        key: 'metadata',
        get: function get() {
            return this._metadata;
        },
        set: function set(value) {
            this._metadata = value;
        }
    }, {
        key: 'signingKeys',
        get: function get() {
            return this._signingKeys;
        },
        set: function set(value) {
            this._signingKeys = value;
        }

        // behavior flags

    }, {
        key: 'filterProtocolClaims',
        get: function get() {
            return this._filterProtocolClaims;
        }
    }, {
        key: 'loadUserInfo',
        get: function get() {
            return this._loadUserInfo;
        }
    }, {
        key: 'staleStateAge',
        get: function get() {
            return this._staleStateAge;
        }
    }, {
        key: 'clockSkew',
        get: function get() {
            return this._clockSkew;
        }
    }, {
        key: 'userInfoJwtIssuer',
        get: function get() {
            return this._userInfoJwtIssuer;
        }
    }, {
        key: 'stateStore',
        get: function get() {
            return this._stateStore;
        }
    }, {
        key: 'validator',
        get: function get() {
            return this._validator;
        }
    }, {
        key: 'metadataService',
        get: function get() {
            return this._metadataService;
        }

        // extra query params

    }, {
        key: 'extraQueryParams',
        get: function get() {
            return this._extraQueryParams;
        },
        set: function set(value) {
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                this._extraQueryParams = value;
            } else {
                this._extraQueryParams = {};
            }
        }
    }]);

    return OidcClientSettings;
}();

/***/ }),

/***/ "./src/PopupNavigator.js":
/*!*******************************!*\
  !*** ./src/PopupNavigator.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopupNavigator = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _PopupWindow = __webpack_require__(/*! ./PopupWindow.js */ "./src/PopupWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var PopupNavigator = exports.PopupNavigator = function () {
    function PopupNavigator() {
        _classCallCheck(this, PopupNavigator);
    }

    PopupNavigator.prototype.prepare = function prepare(params) {
        var popup = new _PopupWindow.PopupWindow(params);
        return Promise.resolve(popup);
    };

    PopupNavigator.prototype.callback = function callback(url, keepOpen, delimiter) {
        _Log.Log.debug("PopupNavigator.callback");

        try {
            _PopupWindow.PopupWindow.notifyOpener(url, keepOpen, delimiter);
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    };

    return PopupNavigator;
}();

/***/ }),

/***/ "./src/PopupWindow.js":
/*!****************************!*\
  !*** ./src/PopupWindow.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopupWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CheckForPopupClosedInterval = 500;
var DefaultPopupFeatures = 'location=no,toolbar=no,width=500,height=500,left=100,top=100;';
//const DefaultPopupFeatures = 'location=no,toolbar=no,width=500,height=500,left=100,top=100;resizable=yes';

var DefaultPopupTarget = "_blank";

var PopupWindow = exports.PopupWindow = function () {
    function PopupWindow(params) {
        var _this = this;

        _classCallCheck(this, PopupWindow);

        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });

        var target = params.popupWindowTarget || DefaultPopupTarget;
        var features = params.popupWindowFeatures || DefaultPopupFeatures;

        this._popup = window.open('', target, features);
        if (this._popup) {
            _Log.Log.debug("PopupWindow.ctor: popup successfully created");
            this._checkForPopupClosedTimer = window.setInterval(this._checkForPopupClosed.bind(this), CheckForPopupClosedInterval);
        }
    }

    PopupWindow.prototype.navigate = function navigate(params) {
        if (!this._popup) {
            this._error("PopupWindow.navigate: Error opening popup window");
        } else if (!params || !params.url) {
            this._error("PopupWindow.navigate: no url provided");
            this._error("No url provided");
        } else {
            _Log.Log.debug("PopupWindow.navigate: Setting URL in popup");

            this._id = params.id;
            if (this._id) {
                window["popupCallback_" + params.id] = this._callback.bind(this);
            }

            this._popup.focus();
            this._popup.window.location = params.url;
        }

        return this.promise;
    };

    PopupWindow.prototype._success = function _success(data) {
        _Log.Log.debug("PopupWindow.callback: Successful response from popup window");

        this._cleanup();
        this._resolve(data);
    };

    PopupWindow.prototype._error = function _error(message) {
        _Log.Log.error("PopupWindow.error: ", message);

        this._cleanup();
        this._reject(new Error(message));
    };

    PopupWindow.prototype.close = function close() {
        this._cleanup(false);
    };

    PopupWindow.prototype._cleanup = function _cleanup(keepOpen) {
        _Log.Log.debug("PopupWindow.cleanup");

        window.clearInterval(this._checkForPopupClosedTimer);
        this._checkForPopupClosedTimer = null;

        delete window["popupCallback_" + this._id];

        if (this._popup && !keepOpen) {
            this._popup.close();
        }
        this._popup = null;
    };

    PopupWindow.prototype._checkForPopupClosed = function _checkForPopupClosed() {
        if (!this._popup || this._popup.closed) {
            this._error("Popup window closed");
        }
    };

    PopupWindow.prototype._callback = function _callback(url, keepOpen) {
        this._cleanup(keepOpen);

        if (url) {
            _Log.Log.debug("PopupWindow.callback success");
            this._success({ url: url });
        } else {
            _Log.Log.debug("PopupWindow.callback: Invalid response from popup");
            this._error("Invalid response from popup");
        }
    };

    PopupWindow.notifyOpener = function notifyOpener(url, keepOpen, delimiter) {
        if (window.opener) {
            url = url || window.location.href;
            if (url) {
                var data = _UrlUtility.UrlUtility.parseUrlFragment(url, delimiter);

                if (data.state) {
                    var name = "popupCallback_" + data.state;
                    var callback = window.opener[name];
                    if (callback) {
                        _Log.Log.debug("PopupWindow.notifyOpener: passing url message to opener");
                        callback(url, keepOpen);
                    } else {
                        _Log.Log.warn("PopupWindow.notifyOpener: no matching callback found on opener");
                    }
                } else {
                    _Log.Log.warn("PopupWindow.notifyOpener: no state found in response url");
                }
            }
        } else {
            _Log.Log.warn("PopupWindow.notifyOpener: no window.opener. Can't complete notification.");
        }
    };

    _createClass(PopupWindow, [{
        key: 'promise',
        get: function get() {
            return this._promise;
        }
    }]);

    return PopupWindow;
}();

/***/ }),

/***/ "./src/RedirectNavigator.js":
/*!**********************************!*\
  !*** ./src/RedirectNavigator.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RedirectNavigator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RedirectNavigator = exports.RedirectNavigator = function () {
    function RedirectNavigator() {
        _classCallCheck(this, RedirectNavigator);
    }

    RedirectNavigator.prototype.prepare = function prepare() {
        return Promise.resolve(this);
    };

    RedirectNavigator.prototype.navigate = function navigate(params) {
        if (!params || !params.url) {
            _Log.Log.error("RedirectNavigator.navigate: No url provided");
            return Promise.reject(new Error("No url provided"));
        }

        window.location = params.url;

        return Promise.resolve();
    };

    _createClass(RedirectNavigator, [{
        key: "url",
        get: function get() {
            return window.location.href;
        }
    }]);

    return RedirectNavigator;
}();

/***/ }),

/***/ "./src/ResponseValidator.js":
/*!**********************************!*\
  !*** ./src/ResponseValidator.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ResponseValidator = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _UserInfoService = __webpack_require__(/*! ./UserInfoService.js */ "./src/UserInfoService.js");

var _TokenClient = __webpack_require__(/*! ./TokenClient.js */ "./src/TokenClient.js");

var _ErrorResponse = __webpack_require__(/*! ./ErrorResponse.js */ "./src/ErrorResponse.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtil.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var ProtocolClaims = ["nonce", "at_hash", "iat", "nbf", "exp", "aud", "iss", "c_hash"];

var ResponseValidator = exports.ResponseValidator = function () {
    function ResponseValidator(settings) {
        var MetadataServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _MetadataService.MetadataService;
        var UserInfoServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _UserInfoService.UserInfoService;
        var joseUtil = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _JoseUtil.JoseUtil;
        var TokenClientCtor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _TokenClient.TokenClient;

        _classCallCheck(this, ResponseValidator);

        if (!settings) {
            _Log.Log.error("ResponseValidator.ctor: No settings passed to ResponseValidator");
            throw new Error("settings");
        }

        this._settings = settings;
        this._metadataService = new MetadataServiceCtor(this._settings);
        this._userInfoService = new UserInfoServiceCtor(this._settings);
        this._joseUtil = joseUtil;
        this._tokenClient = new TokenClientCtor(this._settings);
    }

    ResponseValidator.prototype.validateSigninResponse = function validateSigninResponse(state, response) {
        var _this = this;

        _Log.Log.debug("ResponseValidator.validateSigninResponse");

        return this._processSigninParams(state, response).then(function (response) {
            _Log.Log.debug("ResponseValidator.validateSigninResponse: state processed");
            return _this._validateTokens(state, response).then(function (response) {
                _Log.Log.debug("ResponseValidator.validateSigninResponse: tokens validated");
                return _this._processClaims(response).then(function (response) {
                    _Log.Log.debug("ResponseValidator.validateSigninResponse: claims processed");
                    return response;
                });
            });
        });
    };

    ResponseValidator.prototype.validateSignoutResponse = function validateSignoutResponse(state, response) {
        if (state.id !== response.state) {
            _Log.Log.error("ResponseValidator.validateSignoutResponse: State does not match");
            return Promise.reject(new Error("State does not match"));
        }

        // now that we know the state matches, take the stored data
        // and set it into the response so callers can get their state
        // this is important for both success & error outcomes
        _Log.Log.debug("ResponseValidator.validateSignoutResponse: state validated");
        response.state = state.data;

        if (response.error) {
            _Log.Log.warn("ResponseValidator.validateSignoutResponse: Response was error", response.error);
            return Promise.reject(new _ErrorResponse.ErrorResponse(response));
        }

        return Promise.resolve(response);
    };

    ResponseValidator.prototype._processSigninParams = function _processSigninParams(state, response) {
        if (state.id !== response.state) {
            _Log.Log.error("ResponseValidator._processSigninParams: State does not match");
            return Promise.reject(new Error("State does not match"));
        }

        if (!state.client_id) {
            _Log.Log.error("ResponseValidator._processSigninParams: No client_id on state");
            return Promise.reject(new Error("No client_id on state"));
        }

        if (!state.authority) {
            _Log.Log.error("ResponseValidator._processSigninParams: No authority on state");
            return Promise.reject(new Error("No authority on state"));
        }

        // this allows the authority to be loaded from the signin state
        if (!this._settings.authority) {
            this._settings.authority = state.authority;
        }
        // ensure we're using the correct authority if the authority is not loaded from signin state
        else if (this._settings.authority && this._settings.authority !== state.authority) {
                _Log.Log.error("ResponseValidator._processSigninParams: authority mismatch on settings vs. signin state");
                return Promise.reject(new Error("authority mismatch on settings vs. signin state"));
            }
        // this allows the client_id to be loaded from the signin state
        if (!this._settings.client_id) {
            this._settings.client_id = state.client_id;
        }
        // ensure we're using the correct client_id if the client_id is not loaded from signin state
        else if (this._settings.client_id && this._settings.client_id !== state.client_id) {
                _Log.Log.error("ResponseValidator._processSigninParams: client_id mismatch on settings vs. signin state");
                return Promise.reject(new Error("client_id mismatch on settings vs. signin state"));
            }

        // now that we know the state matches, take the stored data
        // and set it into the response so callers can get their state
        // this is important for both success & error outcomes
        _Log.Log.debug("ResponseValidator._processSigninParams: state validated");
        response.state = state.data;

        if (response.error) {
            _Log.Log.warn("ResponseValidator._processSigninParams: Response was error", response.error);
            return Promise.reject(new _ErrorResponse.ErrorResponse(response));
        }

        if (state.nonce && !response.id_token) {
            _Log.Log.error("ResponseValidator._processSigninParams: Expecting id_token in response");
            return Promise.reject(new Error("No id_token in response"));
        }

        if (!state.nonce && response.id_token) {
            _Log.Log.error("ResponseValidator._processSigninParams: Not expecting id_token in response");
            return Promise.reject(new Error("Unexpected id_token in response"));
        }

        if (state.code_verifier && !response.code) {
            _Log.Log.error("ResponseValidator._processSigninParams: Expecting code in response");
            return Promise.reject(new Error("No code in response"));
        }

        if (!state.code_verifier && response.code) {
            _Log.Log.error("ResponseValidator._processSigninParams: Not expecting code in response");
            return Promise.reject(new Error("Unexpected code in response"));
        }

        return Promise.resolve(response);
    };

    ResponseValidator.prototype._processClaims = function _processClaims(response) {
        var _this2 = this;

        if (response.isOpenIdConnect) {
            _Log.Log.debug("ResponseValidator._processClaims: response is OIDC, processing claims");

            response.profile = this._filterProtocolClaims(response.profile);

            if (this._settings.loadUserInfo && response.access_token) {
                _Log.Log.debug("ResponseValidator._processClaims: loading user info");

                return this._userInfoService.getClaims(response.access_token).then(function (claims) {
                    _Log.Log.debug("ResponseValidator._processClaims: user info claims received from user info endpoint");

                    if (claims.sub !== response.profile.sub) {
                        _Log.Log.error("ResponseValidator._processClaims: sub from user info endpoint does not match sub in access_token");
                        return Promise.reject(new Error("sub from user info endpoint does not match sub in access_token"));
                    }

                    response.profile = _this2._mergeClaims(response.profile, claims);
                    _Log.Log.debug("ResponseValidator._processClaims: user info claims received, updated profile:", response.profile);

                    return response;
                });
            } else {
                _Log.Log.debug("ResponseValidator._processClaims: not loading user info");
            }
        } else {
            _Log.Log.debug("ResponseValidator._processClaims: response is not OIDC, not processing claims");
        }

        return Promise.resolve(response);
    };

    ResponseValidator.prototype._mergeClaims = function _mergeClaims(claims1, claims2) {
        var result = Object.assign({}, claims1);

        for (var name in claims2) {
            var values = claims2[name];
            if (!Array.isArray(values)) {
                values = [values];
            }

            for (var i = 0; i < values.length; i++) {
                var value = values[i];
                if (!result[name]) {
                    result[name] = value;
                } else if (Array.isArray(result[name])) {
                    if (result[name].indexOf(value) < 0) {
                        result[name].push(value);
                    }
                } else if (result[name] !== value) {
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                        result[name] = this._mergeClaims(result[name], value);
                    } else {
                        result[name] = [result[name], value];
                    }
                }
            }
        }

        return result;
    };

    ResponseValidator.prototype._filterProtocolClaims = function _filterProtocolClaims(claims) {
        _Log.Log.debug("ResponseValidator._filterProtocolClaims, incoming claims:", claims);

        var result = Object.assign({}, claims);

        if (this._settings._filterProtocolClaims) {
            ProtocolClaims.forEach(function (type) {
                delete result[type];
            });

            _Log.Log.debug("ResponseValidator._filterProtocolClaims: protocol claims filtered", result);
        } else {
            _Log.Log.debug("ResponseValidator._filterProtocolClaims: protocol claims not filtered");
        }

        return result;
    };

    ResponseValidator.prototype._validateTokens = function _validateTokens(state, response) {
        if (response.code) {
            _Log.Log.debug("ResponseValidator._validateTokens: Validating code");
            return this._processCode(state, response);
        }

        if (response.id_token) {
            if (response.access_token) {
                _Log.Log.debug("ResponseValidator._validateTokens: Validating id_token and access_token");
                return this._validateIdTokenAndAccessToken(state, response);
            }

            _Log.Log.debug("ResponseValidator._validateTokens: Validating id_token");
            return this._validateIdToken(state, response);
        }

        _Log.Log.debug("ResponseValidator._validateTokens: No code to process or id_token to validate");
        return Promise.resolve(response);
    };

    ResponseValidator.prototype._processCode = function _processCode(state, response) {
        var _this3 = this;

        var request = {
            client_id: state.client_id,
            client_secret: this._settings.client_secret,
            code: response.code,
            redirect_uri: state.redirect_uri,
            code_verifier: state.code_verifier
        };

        return this._tokenClient.exchangeCode(request).then(function (tokenResponse) {

            for (var key in tokenResponse) {
                response[key] = tokenResponse[key];
            }

            if (response.id_token) {
                _Log.Log.debug("ResponseValidator._processCode: token response successful, processing id_token");
                return _this3._validateIdTokenAttributes(state, response);
            } else {
                _Log.Log.debug("ResponseValidator._processCode: token response successful, returning response");
            }

            return response;
        });
    };

    ResponseValidator.prototype._validateIdTokenAttributes = function _validateIdTokenAttributes(state, response) {
        var _this4 = this;

        return this._metadataService.getIssuer().then(function (issuer) {

            var audience = state.client_id;
            var clockSkewInSeconds = _this4._settings.clockSkew;
            _Log.Log.debug("ResponseValidator._validateIdTokenAttributes: Validaing JWT attributes; using clock skew (in seconds) of: ", clockSkewInSeconds);

            return _this4._joseUtil.validateJwtAttributes(response.id_token, issuer, audience, clockSkewInSeconds).then(function (payload) {

                if (state.nonce && state.nonce !== payload.nonce) {
                    _Log.Log.error("ResponseValidator._validateIdTokenAttributes: Invalid nonce in id_token");
                    return Promise.reject(new Error("Invalid nonce in id_token"));
                }

                if (!payload.sub) {
                    _Log.Log.error("ResponseValidator._validateIdTokenAttributes: No sub present in id_token");
                    return Promise.reject(new Error("No sub present in id_token"));
                }

                response.profile = payload;
                return response;
            });
        });
    };

    ResponseValidator.prototype._validateIdTokenAndAccessToken = function _validateIdTokenAndAccessToken(state, response) {
        var _this5 = this;

        return this._validateIdToken(state, response).then(function (response) {
            return _this5._validateAccessToken(response);
        });
    };

    ResponseValidator.prototype._validateIdToken = function _validateIdToken(state, response) {
        var _this6 = this;

        if (!state.nonce) {
            _Log.Log.error("ResponseValidator._validateIdToken: No nonce on state");
            return Promise.reject(new Error("No nonce on state"));
        }

        var jwt = this._joseUtil.parseJwt(response.id_token);
        if (!jwt || !jwt.header || !jwt.payload) {
            _Log.Log.error("ResponseValidator._validateIdToken: Failed to parse id_token", jwt);
            return Promise.reject(new Error("Failed to parse id_token"));
        }

        if (state.nonce !== jwt.payload.nonce) {
            _Log.Log.error("ResponseValidator._validateIdToken: Invalid nonce in id_token");
            return Promise.reject(new Error("Invalid nonce in id_token"));
        }

        var kid = jwt.header.kid;

        return this._metadataService.getIssuer().then(function (issuer) {
            _Log.Log.debug("ResponseValidator._validateIdToken: Received issuer");

            return _this6._metadataService.getSigningKeys().then(function (keys) {
                if (!keys) {
                    _Log.Log.error("ResponseValidator._validateIdToken: No signing keys from metadata");
                    return Promise.reject(new Error("No signing keys from metadata"));
                }

                _Log.Log.debug("ResponseValidator._validateIdToken: Received signing keys");
                var key = void 0;
                if (!kid) {
                    keys = _this6._filterByAlg(keys, jwt.header.alg);

                    if (keys.length > 1) {
                        _Log.Log.error("ResponseValidator._validateIdToken: No kid found in id_token and more than one key found in metadata");
                        return Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
                    } else {
                        // kid is mandatory only when there are multiple keys in the referenced JWK Set document
                        // see http://openid.net/specs/openid-connect-core-1_0.html#Signing
                        key = keys[0];
                    }
                } else {
                    key = keys.filter(function (key) {
                        return key.kid === kid;
                    })[0];
                }

                if (!key) {
                    _Log.Log.error("ResponseValidator._validateIdToken: No key matching kid or alg found in signing keys");
                    return Promise.reject(new Error("No key matching kid or alg found in signing keys"));
                }

                var audience = state.client_id;

                var clockSkewInSeconds = _this6._settings.clockSkew;
                _Log.Log.debug("ResponseValidator._validateIdToken: Validaing JWT; using clock skew (in seconds) of: ", clockSkewInSeconds);

                return _this6._joseUtil.validateJwt(response.id_token, key, issuer, audience, clockSkewInSeconds).then(function () {
                    _Log.Log.debug("ResponseValidator._validateIdToken: JWT validation successful");

                    if (!jwt.payload.sub) {
                        _Log.Log.error("ResponseValidator._validateIdToken: No sub present in id_token");
                        return Promise.reject(new Error("No sub present in id_token"));
                    }

                    response.profile = jwt.payload;

                    return response;
                });
            });
        });
    };

    ResponseValidator.prototype._filterByAlg = function _filterByAlg(keys, alg) {
        var kty = null;
        if (alg.startsWith("RS")) {
            kty = "RSA";
        } else if (alg.startsWith("PS")) {
            kty = "PS";
        } else if (alg.startsWith("ES")) {
            kty = "EC";
        } else {
            _Log.Log.debug("ResponseValidator._filterByAlg: alg not supported: ", alg);
            return [];
        }

        _Log.Log.debug("ResponseValidator._filterByAlg: Looking for keys that match kty: ", kty);

        keys = keys.filter(function (key) {
            return key.kty === kty;
        });

        _Log.Log.debug("ResponseValidator._filterByAlg: Number of keys that match kty: ", kty, keys.length);

        return keys;
    };

    ResponseValidator.prototype._validateAccessToken = function _validateAccessToken(response) {
        if (!response.profile) {
            _Log.Log.error("ResponseValidator._validateAccessToken: No profile loaded from id_token");
            return Promise.reject(new Error("No profile loaded from id_token"));
        }

        if (!response.profile.at_hash) {
            _Log.Log.error("ResponseValidator._validateAccessToken: No at_hash in id_token");
            return Promise.reject(new Error("No at_hash in id_token"));
        }

        if (!response.id_token) {
            _Log.Log.error("ResponseValidator._validateAccessToken: No id_token");
            return Promise.reject(new Error("No id_token"));
        }

        var jwt = this._joseUtil.parseJwt(response.id_token);
        if (!jwt || !jwt.header) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Failed to parse id_token", jwt);
            return Promise.reject(new Error("Failed to parse id_token"));
        }

        var hashAlg = jwt.header.alg;
        if (!hashAlg || hashAlg.length !== 5) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg);
            return Promise.reject(new Error("Unsupported alg: " + hashAlg));
        }

        var hashBits = hashAlg.substr(2, 3);
        if (!hashBits) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg, hashBits);
            return Promise.reject(new Error("Unsupported alg: " + hashAlg));
        }

        hashBits = parseInt(hashBits);
        if (hashBits !== 256 && hashBits !== 384 && hashBits !== 512) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg, hashBits);
            return Promise.reject(new Error("Unsupported alg: " + hashAlg));
        }

        var sha = "sha" + hashBits;
        var hash = this._joseUtil.hashString(response.access_token, sha);
        if (!hash) {
            _Log.Log.error("ResponseValidator._validateAccessToken: access_token hash failed:", sha);
            return Promise.reject(new Error("Failed to validate at_hash"));
        }

        var left = hash.substr(0, hash.length / 2);
        var left_b64u = this._joseUtil.hexToBase64Url(left);
        if (left_b64u !== response.profile.at_hash) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Failed to validate at_hash", left_b64u, response.profile.at_hash);
            return Promise.reject(new Error("Failed to validate at_hash"));
        }

        _Log.Log.debug("ResponseValidator._validateAccessToken: success");

        return Promise.resolve(response);
    };

    return ResponseValidator;
}();

/***/ }),

/***/ "./src/SessionMonitor.js":
/*!*******************************!*\
  !*** ./src/SessionMonitor.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SessionMonitor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _CheckSessionIFrame = __webpack_require__(/*! ./CheckSessionIFrame.js */ "./src/CheckSessionIFrame.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SessionMonitor = exports.SessionMonitor = function () {
    function SessionMonitor(userManager) {
        var _this = this;

        var CheckSessionIFrameCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _CheckSessionIFrame.CheckSessionIFrame;

        _classCallCheck(this, SessionMonitor);

        if (!userManager) {
            _Log.Log.error("SessionMonitor.ctor: No user manager passed to SessionMonitor");
            throw new Error("userManager");
        }

        this._userManager = userManager;
        this._CheckSessionIFrameCtor = CheckSessionIFrameCtor;

        this._userManager.events.addUserLoaded(this._start.bind(this));
        this._userManager.events.addUserUnloaded(this._stop.bind(this));

        this._userManager.getUser().then(function (user) {
            // doing this manually here since calling getUser 
            // doesn't trigger load event.
            if (user) {
                _this._start(user);
            }
        }).catch(function (err) {
            // catch to suppress errors since we're in a ctor
            _Log.Log.error("SessionMonitor ctor: error from getUser:", err.message);
        });
    }

    SessionMonitor.prototype._start = function _start(user) {
        var _this2 = this;

        var session_state = user.session_state;

        if (session_state) {
            this._sub = user.profile.sub;
            this._sid = user.profile.sid;
            _Log.Log.debug("SessionMonitor._start: session_state:", session_state, ", sub:", this._sub);

            if (!this._checkSessionIFrame) {
                this._metadataService.getCheckSessionIframe().then(function (url) {
                    if (url) {
                        _Log.Log.debug("SessionMonitor._start: Initializing check session iframe");

                        var client_id = _this2._client_id;
                        var interval = _this2._checkSessionInterval;
                        var stopOnError = _this2._stopCheckSessionOnError;

                        _this2._checkSessionIFrame = new _this2._CheckSessionIFrameCtor(_this2._callback.bind(_this2), client_id, url, interval, stopOnError);
                        _this2._checkSessionIFrame.load().then(function () {
                            _this2._checkSessionIFrame.start(session_state);
                        });
                    } else {
                        _Log.Log.warn("SessionMonitor._start: No check session iframe found in the metadata");
                    }
                }).catch(function (err) {
                    // catch to suppress errors since we're in non-promise callback
                    _Log.Log.error("SessionMonitor._start: Error from getCheckSessionIframe:", err.message);
                });
            } else {
                this._checkSessionIFrame.start(session_state);
            }
        }
    };

    SessionMonitor.prototype._stop = function _stop() {
        this._sub = null;
        this._sid = null;

        if (this._checkSessionIFrame) {
            _Log.Log.debug("SessionMonitor._stop");
            this._checkSessionIFrame.stop();
        }
    };

    SessionMonitor.prototype._callback = function _callback() {
        var _this3 = this;

        this._userManager.querySessionStatus().then(function (session) {
            var raiseUserSignedOutEvent = true;

            if (session) {
                if (session.sub === _this3._sub) {
                    raiseUserSignedOutEvent = false;
                    _this3._checkSessionIFrame.start(session.session_state);

                    if (session.sid === _this3._sid) {
                        _Log.Log.debug("SessionMonitor._callback: Same sub still logged in at OP, restarting check session iframe; session_state:", session.session_state);
                    } else {
                        _Log.Log.debug("SessionMonitor._callback: Same sub still logged in at OP, session state has changed, restarting check session iframe; session_state:", session.session_state);
                        _this3._userManager.events._raiseUserSessionChanged();
                    }
                } else {
                    _Log.Log.debug("SessionMonitor._callback: Different subject signed into OP:", session.sub);
                }
            } else {
                _Log.Log.debug("SessionMonitor._callback: Subject no longer signed into OP");
            }

            if (raiseUserSignedOutEvent) {
                _Log.Log.debug("SessionMonitor._callback: SessionMonitor._callback; raising signed out event");
                _this3._userManager.events._raiseUserSignedOut();
            }
        }).catch(function (err) {
            _Log.Log.debug("SessionMonitor._callback: Error calling queryCurrentSigninSession; raising signed out event", err.message);
            _this3._userManager.events._raiseUserSignedOut();
        });
    };

    _createClass(SessionMonitor, [{
        key: '_settings',
        get: function get() {
            return this._userManager.settings;
        }
    }, {
        key: '_metadataService',
        get: function get() {
            return this._userManager.metadataService;
        }
    }, {
        key: '_client_id',
        get: function get() {
            return this._settings.client_id;
        }
    }, {
        key: '_checkSessionInterval',
        get: function get() {
            return this._settings.checkSessionInterval;
        }
    }, {
        key: '_stopCheckSessionOnError',
        get: function get() {
            return this._settings.stopCheckSessionOnError;
        }
    }]);

    return SessionMonitor;
}();

/***/ }),

/***/ "./src/SigninRequest.js":
/*!******************************!*\
  !*** ./src/SigninRequest.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SigninRequest = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

var _SigninState = __webpack_require__(/*! ./SigninState.js */ "./src/SigninState.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SigninRequest = exports.SigninRequest = function () {
    function SigninRequest(_ref) {
        var url = _ref.url,
            client_id = _ref.client_id,
            redirect_uri = _ref.redirect_uri,
            response_type = _ref.response_type,
            scope = _ref.scope,
            authority = _ref.authority,
            data = _ref.data,
            prompt = _ref.prompt,
            display = _ref.display,
            max_age = _ref.max_age,
            ui_locales = _ref.ui_locales,
            id_token_hint = _ref.id_token_hint,
            login_hint = _ref.login_hint,
            acr_values = _ref.acr_values,
            resource = _ref.resource,
            response_mode = _ref.response_mode,
            request = _ref.request,
            request_uri = _ref.request_uri,
            extraQueryParams = _ref.extraQueryParams,
            request_type = _ref.request_type;

        _classCallCheck(this, SigninRequest);

        if (!url) {
            _Log.Log.error("SigninRequest.ctor: No url passed");
            throw new Error("url");
        }
        if (!client_id) {
            _Log.Log.error("SigninRequest.ctor: No client_id passed");
            throw new Error("client_id");
        }
        if (!redirect_uri) {
            _Log.Log.error("SigninRequest.ctor: No redirect_uri passed");
            throw new Error("redirect_uri");
        }
        if (!response_type) {
            _Log.Log.error("SigninRequest.ctor: No response_type passed");
            throw new Error("response_type");
        }
        if (!scope) {
            _Log.Log.error("SigninRequest.ctor: No scope passed");
            throw new Error("scope");
        }
        if (!authority) {
            _Log.Log.error("SigninRequest.ctor: No authority passed");
            throw new Error("authority");
        }

        var oidc = SigninRequest.isOidc(response_type);
        var code = SigninRequest.isCode(response_type);

        if (!response_mode) {
            response_mode = SigninRequest.isCode(response_type) ? "query" : null;
        }

        this.state = new _SigninState.SigninState({ nonce: oidc,
            data: data, client_id: client_id, authority: authority, redirect_uri: redirect_uri,
            code_verifier: code,
            request_type: request_type, response_mode: response_mode });

        url = _UrlUtility.UrlUtility.addQueryParam(url, "client_id", client_id);
        url = _UrlUtility.UrlUtility.addQueryParam(url, "redirect_uri", redirect_uri);
        url = _UrlUtility.UrlUtility.addQueryParam(url, "response_type", response_type);
        url = _UrlUtility.UrlUtility.addQueryParam(url, "scope", scope);

        url = _UrlUtility.UrlUtility.addQueryParam(url, "state", this.state.id);
        if (oidc) {
            url = _UrlUtility.UrlUtility.addQueryParam(url, "nonce", this.state.nonce);
        }
        if (code) {
            url = _UrlUtility.UrlUtility.addQueryParam(url, "code_challenge", this.state.code_challenge);
            url = _UrlUtility.UrlUtility.addQueryParam(url, "code_challenge_method", "S256");
        }

        var optional = { prompt: prompt, display: display, max_age: max_age, ui_locales: ui_locales, id_token_hint: id_token_hint, login_hint: login_hint, acr_values: acr_values, resource: resource, request: request, request_uri: request_uri, response_mode: response_mode };
        for (var key in optional) {
            if (optional[key]) {
                url = _UrlUtility.UrlUtility.addQueryParam(url, key, optional[key]);
            }
        }

        for (var _key in extraQueryParams) {
            url = _UrlUtility.UrlUtility.addQueryParam(url, _key, extraQueryParams[_key]);
        }

        this.url = url;
    }

    SigninRequest.isOidc = function isOidc(response_type) {
        var result = response_type.split(/\s+/g).filter(function (item) {
            return item === "id_token";
        });
        return !!result[0];
    };

    SigninRequest.isOAuth = function isOAuth(response_type) {
        var result = response_type.split(/\s+/g).filter(function (item) {
            return item === "token";
        });
        return !!result[0];
    };

    SigninRequest.isCode = function isCode(response_type) {
        var result = response_type.split(/\s+/g).filter(function (item) {
            return item === "code";
        });
        return !!result[0];
    };

    return SigninRequest;
}();

/***/ }),

/***/ "./src/SigninResponse.js":
/*!*******************************!*\
  !*** ./src/SigninResponse.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SigninResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcScope = "openid";

var SigninResponse = exports.SigninResponse = function () {
    function SigninResponse(url) {
        var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#";

        _classCallCheck(this, SigninResponse);

        var values = _UrlUtility.UrlUtility.parseUrlFragment(url, delimiter);

        this.error = values.error;
        this.error_description = values.error_description;
        this.error_uri = values.error_uri;

        this.code = values.code;
        this.state = values.state;
        this.id_token = values.id_token;
        this.session_state = values.session_state;
        this.access_token = values.access_token;
        this.token_type = values.token_type;
        this.scope = values.scope;
        this.profile = undefined; // will be set from ResponseValidator

        this.expires_in = values.expires_in;
    }

    _createClass(SigninResponse, [{
        key: "expires_in",
        get: function get() {
            if (this.expires_at) {
                var now = parseInt(Date.now() / 1000);
                return this.expires_at - now;
            }
            return undefined;
        },
        set: function set(value) {
            var expires_in = parseInt(value);
            if (typeof expires_in === 'number' && expires_in > 0) {
                var now = parseInt(Date.now() / 1000);
                this.expires_at = now + expires_in;
            }
        }
    }, {
        key: "expired",
        get: function get() {
            var expires_in = this.expires_in;
            if (expires_in !== undefined) {
                return expires_in <= 0;
            }
            return undefined;
        }
    }, {
        key: "scopes",
        get: function get() {
            return (this.scope || "").split(" ");
        }
    }, {
        key: "isOpenIdConnect",
        get: function get() {
            return this.scopes.indexOf(OidcScope) >= 0 || !!this.id_token;
        }
    }]);

    return SigninResponse;
}();

/***/ }),

/***/ "./src/SigninState.js":
/*!****************************!*\
  !*** ./src/SigninState.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SigninState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _State2 = __webpack_require__(/*! ./State.js */ "./src/State.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtil.js");

var _random = __webpack_require__(/*! ./random.js */ "./src/random.js");

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SigninState = exports.SigninState = function (_State) {
    _inherits(SigninState, _State);

    function SigninState() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            nonce = _ref.nonce,
            authority = _ref.authority,
            client_id = _ref.client_id,
            redirect_uri = _ref.redirect_uri,
            code_verifier = _ref.code_verifier,
            response_mode = _ref.response_mode;

        _classCallCheck(this, SigninState);

        var _this = _possibleConstructorReturn(this, _State.call(this, arguments[0]));

        if (nonce === true) {
            _this._nonce = (0, _random2.default)();
        } else if (nonce) {
            _this._nonce = nonce;
        }

        if (code_verifier === true) {
            // random() produces 32 length
            _this._code_verifier = (0, _random2.default)() + (0, _random2.default)() + (0, _random2.default)();
        } else if (code_verifier) {
            _this._code_verifier = code_verifier;
        }

        if (_this.code_verifier) {
            var hash = _JoseUtil.JoseUtil.hashString(_this.code_verifier, "SHA256");
            _this._code_challenge = _JoseUtil.JoseUtil.hexToBase64Url(hash);
        }

        _this._redirect_uri = redirect_uri;
        _this._authority = authority;
        _this._client_id = client_id;
        _this._response_mode = response_mode;
        return _this;
    }

    SigninState.prototype.toStorageString = function toStorageString() {
        _Log.Log.debug("SigninState.toStorageString");
        return JSON.stringify({
            id: this.id,
            data: this.data,
            created: this.created,
            request_type: this.request_type,
            nonce: this.nonce,
            code_verifier: this.code_verifier,
            redirect_uri: this.redirect_uri,
            authority: this.authority,
            client_id: this.client_id,
            response_mode: this.response_mode
        });
    };

    SigninState.fromStorageString = function fromStorageString(storageString) {
        _Log.Log.debug("SigninState.fromStorageString");
        var data = JSON.parse(storageString);
        return new SigninState(data);
    };

    _createClass(SigninState, [{
        key: 'nonce',
        get: function get() {
            return this._nonce;
        }
    }, {
        key: 'authority',
        get: function get() {
            return this._authority;
        }
    }, {
        key: 'client_id',
        get: function get() {
            return this._client_id;
        }
    }, {
        key: 'redirect_uri',
        get: function get() {
            return this._redirect_uri;
        }
    }, {
        key: 'code_verifier',
        get: function get() {
            return this._code_verifier;
        }
    }, {
        key: 'code_challenge',
        get: function get() {
            return this._code_challenge;
        }
    }, {
        key: 'response_mode',
        get: function get() {
            return this._response_mode;
        }
    }]);

    return SigninState;
}(_State2.State);

/***/ }),

/***/ "./src/SignoutRequest.js":
/*!*******************************!*\
  !*** ./src/SignoutRequest.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SignoutRequest = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

var _State = __webpack_require__(/*! ./State.js */ "./src/State.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SignoutRequest = exports.SignoutRequest = function SignoutRequest(_ref) {
    var url = _ref.url,
        id_token_hint = _ref.id_token_hint,
        post_logout_redirect_uri = _ref.post_logout_redirect_uri,
        data = _ref.data,
        extraQueryParams = _ref.extraQueryParams,
        request_type = _ref.request_type;

    _classCallCheck(this, SignoutRequest);

    if (!url) {
        _Log.Log.error("SignoutRequest.ctor: No url passed");
        throw new Error("url");
    }

    if (id_token_hint) {
        url = _UrlUtility.UrlUtility.addQueryParam(url, "id_token_hint", id_token_hint);
    }

    if (post_logout_redirect_uri) {
        url = _UrlUtility.UrlUtility.addQueryParam(url, "post_logout_redirect_uri", post_logout_redirect_uri);

        if (data) {
            this.state = new _State.State({ data: data, request_type: request_type });

            url = _UrlUtility.UrlUtility.addQueryParam(url, "state", this.state.id);
        }
    }

    for (var key in extraQueryParams) {
        url = _UrlUtility.UrlUtility.addQueryParam(url, key, extraQueryParams[key]);
    }

    this.url = url;
};

/***/ }),

/***/ "./src/SignoutResponse.js":
/*!********************************!*\
  !*** ./src/SignoutResponse.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.SignoutResponse = undefined;

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SignoutResponse = exports.SignoutResponse = function SignoutResponse(url) {
        _classCallCheck(this, SignoutResponse);

        var values = _UrlUtility.UrlUtility.parseUrlFragment(url, "?");

        this.error = values.error;
        this.error_description = values.error_description;
        this.error_uri = values.error_uri;

        this.state = values.state;
};

/***/ }),

/***/ "./src/SilentRenewService.js":
/*!***********************************!*\
  !*** ./src/SilentRenewService.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SilentRenewService = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SilentRenewService = exports.SilentRenewService = function () {
    function SilentRenewService(userManager) {
        _classCallCheck(this, SilentRenewService);

        this._userManager = userManager;
    }

    SilentRenewService.prototype.start = function start() {
        if (!this._callback) {
            this._callback = this._tokenExpiring.bind(this);
            this._userManager.events.addAccessTokenExpiring(this._callback);

            // this will trigger loading of the user so the expiring events can be initialized
            this._userManager.getUser().then(function (user) {
                // deliberate nop
            }).catch(function (err) {
                // catch to suppress errors since we're in a ctor
                _Log.Log.error("SilentRenewService.start: Error from getUser:", err.message);
            });
        }
    };

    SilentRenewService.prototype.stop = function stop() {
        if (this._callback) {
            this._userManager.events.removeAccessTokenExpiring(this._callback);
            delete this._callback;
        }
    };

    SilentRenewService.prototype._tokenExpiring = function _tokenExpiring() {
        var _this = this;

        this._userManager.signinSilent().then(function (user) {
            _Log.Log.debug("SilentRenewService._tokenExpiring: Silent token renewal successful");
        }, function (err) {
            _Log.Log.error("SilentRenewService._tokenExpiring: Error from signinSilent:", err.message);
            _this._userManager.events._raiseSilentRenewError(err);
        });
    };

    return SilentRenewService;
}();

/***/ }),

/***/ "./src/State.js":
/*!**********************!*\
  !*** ./src/State.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.State = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _random = __webpack_require__(/*! ./random.js */ "./src/random.js");

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var State = exports.State = function () {
    function State() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            id = _ref.id,
            data = _ref.data,
            created = _ref.created,
            request_type = _ref.request_type;

        _classCallCheck(this, State);

        this._id = id || (0, _random2.default)();
        this._data = data;

        if (typeof created === 'number' && created > 0) {
            this._created = created;
        } else {
            this._created = parseInt(Date.now() / 1000);
        }
        this._request_type = request_type;
    }

    State.prototype.toStorageString = function toStorageString() {
        _Log.Log.debug("State.toStorageString");
        return JSON.stringify({
            id: this.id,
            data: this.data,
            created: this.created,
            request_type: this.request_type
        });
    };

    State.fromStorageString = function fromStorageString(storageString) {
        _Log.Log.debug("State.fromStorageString");
        return new State(JSON.parse(storageString));
    };

    State.clearStaleState = function clearStaleState(storage, age) {

        var cutoff = Date.now() / 1000 - age;

        return storage.getAllKeys().then(function (keys) {
            _Log.Log.debug("State.clearStaleState: got keys", keys);

            var promises = [];

            var _loop = function _loop(i) {
                var key = keys[i];
                p = storage.get(key).then(function (item) {
                    var remove = false;

                    if (item) {
                        try {
                            var state = State.fromStorageString(item);

                            _Log.Log.debug("State.clearStaleState: got item from key: ", key, state.created);

                            if (state.created <= cutoff) {
                                remove = true;
                            }
                        } catch (e) {
                            _Log.Log.error("State.clearStaleState: Error parsing state for key", key, e.message);
                            remove = true;
                        }
                    } else {
                        _Log.Log.debug("State.clearStaleState: no item in storage for key: ", key);
                        remove = true;
                    }

                    if (remove) {
                        _Log.Log.debug("State.clearStaleState: removed item for key: ", key);
                        return storage.remove(key);
                    }
                });


                promises.push(p);
            };

            for (var i = 0; i < keys.length; i++) {
                var p;

                _loop(i);
            }

            _Log.Log.debug("State.clearStaleState: waiting on promise count:", promises.length);
            return Promise.all(promises);
        });
    };

    _createClass(State, [{
        key: 'id',
        get: function get() {
            return this._id;
        }
    }, {
        key: 'data',
        get: function get() {
            return this._data;
        }
    }, {
        key: 'created',
        get: function get() {
            return this._created;
        }
    }, {
        key: 'request_type',
        get: function get() {
            return this._request_type;
        }
    }]);

    return State;
}();

/***/ }),

/***/ "./src/Timer.js":
/*!**********************!*\
  !*** ./src/Timer.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Timer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

var _Event2 = __webpack_require__(/*! ./Event.js */ "./src/Event.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var TimerDuration = 5; // seconds

var Timer = exports.Timer = function (_Event) {
    _inherits(Timer, _Event);

    function Timer(name) {
        var timer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global.Global.timer;
        var nowFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

        _classCallCheck(this, Timer);

        var _this = _possibleConstructorReturn(this, _Event.call(this, name));

        _this._timer = timer;

        if (nowFunc) {
            _this._nowFunc = nowFunc;
        } else {
            _this._nowFunc = function () {
                return Date.now() / 1000;
            };
        }
        return _this;
    }

    Timer.prototype.init = function init(duration) {
        if (duration <= 0) {
            duration = 1;
        }
        duration = parseInt(duration);

        var expiration = this.now + duration;
        if (this.expiration === expiration && this._timerHandle) {
            // no need to reinitialize to same expiration, so bail out
            _Log.Log.debug("Timer.init timer " + this._name + " skipping initialization since already initialized for expiration:", this.expiration);
            return;
        }

        this.cancel();

        _Log.Log.debug("Timer.init timer " + this._name + " for duration:", duration);
        this._expiration = expiration;

        // we're using a fairly short timer and then checking the expiration in the
        // callback to handle scenarios where the browser device sleeps, and then
        // the timers end up getting delayed.
        var timerDuration = TimerDuration;
        if (duration < timerDuration) {
            timerDuration = duration;
        }
        this._timerHandle = this._timer.setInterval(this._callback.bind(this), timerDuration * 1000);
    };

    Timer.prototype.cancel = function cancel() {
        if (this._timerHandle) {
            _Log.Log.debug("Timer.cancel: ", this._name);
            this._timer.clearInterval(this._timerHandle);
            this._timerHandle = null;
        }
    };

    Timer.prototype._callback = function _callback() {
        var diff = this._expiration - this.now;
        _Log.Log.debug("Timer.callback; " + this._name + " timer expires in:", diff);

        if (this._expiration <= this.now) {
            this.cancel();
            _Event.prototype.raise.call(this);
        }
    };

    _createClass(Timer, [{
        key: 'now',
        get: function get() {
            return parseInt(this._nowFunc());
        }
    }, {
        key: 'expiration',
        get: function get() {
            return this._expiration;
        }
    }]);

    return Timer;
}(_Event2.Event);

/***/ }),

/***/ "./src/TokenClient.js":
/*!****************************!*\
  !*** ./src/TokenClient.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TokenClient = undefined;

var _JsonService = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var TokenClient = exports.TokenClient = function () {
    function TokenClient(settings) {
        var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService.JsonService;
        var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService.MetadataService;

        _classCallCheck(this, TokenClient);

        if (!settings) {
            _Log.Log.error("TokenClient.ctor: No settings passed");
            throw new Error("settings");
        }

        this._settings = settings;
        this._jsonService = new JsonServiceCtor();
        this._metadataService = new MetadataServiceCtor(this._settings);
    }

    TokenClient.prototype.exchangeCode = function exchangeCode() {
        var _this = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args.grant_type = args.grant_type || "authorization_code";
        args.client_id = args.client_id || this._settings.client_id;
        args.redirect_uri = args.redirect_uri || this._settings.redirect_uri;

        if (!args.code) {
            _Log.Log.error("TokenClient.exchangeCode: No code passed");
            return Promise.reject(new Error("A code is required"));
        }
        if (!args.redirect_uri) {
            _Log.Log.error("TokenClient.exchangeCode: No redirect_uri passed");
            return Promise.reject(new Error("A redirect_uri is required"));
        }
        if (!args.code_verifier) {
            _Log.Log.error("TokenClient.exchangeCode: No code_verifier passed");
            return Promise.reject(new Error("A code_verifier is required"));
        }
        if (!args.client_id) {
            _Log.Log.error("TokenClient.exchangeCode: No client_id passed");
            return Promise.reject(new Error("A client_id is required"));
        }

        return this._metadataService.getTokenEndpoint(false).then(function (url) {
            _Log.Log.debug("TokenClient.exchangeCode: Received token endpoint");

            return _this._jsonService.postForm(url, args).then(function (response) {
                _Log.Log.debug("TokenClient.exchangeCode: response received");
                return response;
            });
        });
    };

    TokenClient.prototype.exchangeRefreshToken = function exchangeRefreshToken() {
        var _this2 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args.grant_type = args.grant_type || "refresh_token";
        args.client_id = args.client_id || this._settings.client_id;

        if (!args.refresh_token) {
            _Log.Log.error("TokenClient.exchangeRefreshToken: No refresh_token passed");
            return Promise.reject(new Error("A refresh_token is required"));
        }
        if (!args.client_id) {
            _Log.Log.error("TokenClient.exchangeRefreshToken: No client_id passed");
            return Promise.reject(new Error("A client_id is required"));
        }

        return this._metadataService.getTokenEndpoint(false).then(function (url) {
            _Log.Log.debug("TokenClient.exchangeRefreshToken: Received token endpoint");

            return _this2._jsonService.postForm(url, args).then(function (response) {
                _Log.Log.debug("TokenClient.exchangeRefreshToken: response received");
                return response;
            });
        });
    };

    return TokenClient;
}();

/***/ }),

/***/ "./src/TokenRevocationClient.js":
/*!**************************************!*\
  !*** ./src/TokenRevocationClient.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TokenRevocationClient = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var AccessTokenTypeHint = "access_token";
var RefreshTokenTypeHint = "refresh_token";

var TokenRevocationClient = exports.TokenRevocationClient = function () {
    function TokenRevocationClient(settings) {
        var XMLHttpRequestCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global.Global.XMLHttpRequest;
        var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService.MetadataService;

        _classCallCheck(this, TokenRevocationClient);

        if (!settings) {
            _Log.Log.error("TokenRevocationClient.ctor: No settings provided");
            throw new Error("No settings provided.");
        }

        this._settings = settings;
        this._XMLHttpRequestCtor = XMLHttpRequestCtor;
        this._metadataService = new MetadataServiceCtor(this._settings);
    }

    TokenRevocationClient.prototype.revoke = function revoke(token, required) {
        var _this = this;

        var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "access_token";

        if (!token) {
            _Log.Log.error("TokenRevocationClient.revoke: No token provided");
            throw new Error("No token provided.");
        }

        if (type !== AccessTokenTypeHint && type != RefreshTokenTypeHint) {
            _Log.Log.error("TokenRevocationClient.revoke: Invalid token type");
            throw new Error("Invalid token type.");
        }

        return this._metadataService.getRevocationEndpoint().then(function (url) {
            if (!url) {
                if (required) {
                    _Log.Log.error("TokenRevocationClient.revoke: Revocation not supported");
                    throw new Error("Revocation not supported");
                }

                // not required, so don't error and just return
                return;
            }

            _Log.Log.debug("TokenRevocationClient.revoke: Revoking " + type);
            var client_id = _this._settings.client_id;
            var client_secret = _this._settings.client_secret;
            return _this._revoke(url, client_id, client_secret, token, type);
        });
    };

    TokenRevocationClient.prototype._revoke = function _revoke(url, client_id, client_secret, token, type) {
        var _this2 = this;

        return new Promise(function (resolve, reject) {

            var xhr = new _this2._XMLHttpRequestCtor();
            xhr.open("POST", url);

            xhr.onload = function () {
                _Log.Log.debug("TokenRevocationClient.revoke: HTTP response received, status", xhr.status);

                if (xhr.status === 200) {
                    resolve();
                } else {
                    reject(Error(xhr.statusText + " (" + xhr.status + ")"));
                }
            };
            xhr.onerror = function () {
                _Log.Log.debug("TokenRevocationClient.revoke: Network Error.");
                reject("Network Error");
            };

            var body = "client_id=" + encodeURIComponent(client_id);
            if (client_secret) {
                body += "&client_secret=" + encodeURIComponent(client_secret);
            }
            body += "&token_type_hint=" + encodeURIComponent(type);
            body += "&token=" + encodeURIComponent(token);

            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(body);
        });
    };

    return TokenRevocationClient;
}();

/***/ }),

/***/ "./src/UrlUtility.js":
/*!***************************!*\
  !*** ./src/UrlUtility.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UrlUtility = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UrlUtility = exports.UrlUtility = function () {
    function UrlUtility() {
        _classCallCheck(this, UrlUtility);
    }

    UrlUtility.addQueryParam = function addQueryParam(url, name, value) {
        if (url.indexOf('?') < 0) {
            url += "?";
        }

        if (url[url.length - 1] !== "?") {
            url += "&";
        }

        url += encodeURIComponent(name);
        url += "=";
        url += encodeURIComponent(value);

        return url;
    };

    UrlUtility.parseUrlFragment = function parseUrlFragment(value) {
        var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#";
        var global = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Global.Global;

        if (typeof value !== 'string') {
            value = global.location.href;
        }

        var idx = value.lastIndexOf(delimiter);
        if (idx >= 0) {
            value = value.substr(idx + 1);
        }

        if (delimiter === "?") {
            // if we're doing query, then strip off hash fragment before we parse
            idx = value.indexOf('#');
            if (idx >= 0) {
                value = value.substr(0, idx);
            }
        }

        var params = {},
            regex = /([^&=]+)=([^&]*)/g,
            m;

        var counter = 0;
        while (m = regex.exec(value)) {
            params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
            if (counter++ > 50) {
                _Log.Log.error("UrlUtility.parseUrlFragment: response exceeded expected number of parameters", value);
                return {
                    error: "Response exceeded expected number of parameters"
                };
            }
        }

        for (var prop in params) {
            return params;
        }

        return {};
    };

    return UrlUtility;
}();

/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.User = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = exports.User = function () {
    function User(_ref) {
        var id_token = _ref.id_token,
            session_state = _ref.session_state,
            access_token = _ref.access_token,
            refresh_token = _ref.refresh_token,
            token_type = _ref.token_type,
            scope = _ref.scope,
            profile = _ref.profile,
            expires_at = _ref.expires_at,
            state = _ref.state;

        _classCallCheck(this, User);

        this.id_token = id_token;
        this.session_state = session_state;
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.token_type = token_type;
        this.scope = scope;
        this.profile = profile;
        this.expires_at = expires_at;
        this.state = state;
    }

    User.prototype.toStorageString = function toStorageString() {
        _Log.Log.debug("User.toStorageString");
        return JSON.stringify({
            id_token: this.id_token,
            session_state: this.session_state,
            access_token: this.access_token,
            refresh_token: this.refresh_token,
            token_type: this.token_type,
            scope: this.scope,
            profile: this.profile,
            expires_at: this.expires_at
        });
    };

    User.fromStorageString = function fromStorageString(storageString) {
        _Log.Log.debug("User.fromStorageString");
        return new User(JSON.parse(storageString));
    };

    _createClass(User, [{
        key: 'expires_in',
        get: function get() {
            if (this.expires_at) {
                var now = parseInt(Date.now() / 1000);
                return this.expires_at - now;
            }
            return undefined;
        },
        set: function set(value) {
            var expires_in = parseInt(value);
            if (typeof expires_in === 'number' && expires_in > 0) {
                var now = parseInt(Date.now() / 1000);
                this.expires_at = now + expires_in;
            }
        }
    }, {
        key: 'expired',
        get: function get() {
            var expires_in = this.expires_in;
            if (expires_in !== undefined) {
                return expires_in <= 0;
            }
            return undefined;
        }
    }, {
        key: 'scopes',
        get: function get() {
            return (this.scope || "").split(" ");
        }
    }]);

    return User;
}();

/***/ }),

/***/ "./src/UserInfoService.js":
/*!********************************!*\
  !*** ./src/UserInfoService.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserInfoService = undefined;

var _JsonService = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtil.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UserInfoService = exports.UserInfoService = function () {
    function UserInfoService(settings) {
        var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService.JsonService;
        var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService.MetadataService;
        var joseUtil = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _JoseUtil.JoseUtil;

        _classCallCheck(this, UserInfoService);

        if (!settings) {
            _Log.Log.error("UserInfoService.ctor: No settings passed");
            throw new Error("settings");
        }

        this._settings = settings;
        this._jsonService = new JsonServiceCtor(undefined, undefined, this._getClaimsFromJwt.bind(this));
        this._metadataService = new MetadataServiceCtor(this._settings);
        this._joseUtil = joseUtil;
    }

    UserInfoService.prototype.getClaims = function getClaims(token) {
        var _this = this;

        if (!token) {
            _Log.Log.error("UserInfoService.getClaims: No token passed");
            return Promise.reject(new Error("A token is required"));
        }

        return this._metadataService.getUserInfoEndpoint().then(function (url) {
            _Log.Log.debug("UserInfoService.getClaims: received userinfo url", url);

            return _this._jsonService.getJson(url, token).then(function (claims) {
                _Log.Log.debug("UserInfoService.getClaims: claims received", claims);
                return claims;
            });
        });
    };

    UserInfoService.prototype._getClaimsFromJwt = function _getClaimsFromJwt(req) {
        var _this2 = this;

        try {
            var jwt = this._joseUtil.parseJwt(req.responseText);
            if (!jwt || !jwt.header || !jwt.payload) {
                _Log.Log.error("UserInfoService._getClaimsFromJwt: Failed to parse JWT", jwt);
                return Promise.reject(new Error("Failed to parse id_token"));
            }

            var kid = jwt.header.kid;

            var issuerPromise = void 0;
            switch (this._settings.userInfoJwtIssuer) {
                case 'OP':
                    issuerPromise = this._metadataService.getIssuer();
                    break;
                case 'ANY':
                    issuerPromise = Promise.resolve(jwt.payload.iss);
                    break;
                default:
                    issuerPromise = Promise.resolve(this._settings.userInfoJwtIssuer);
                    break;
            }

            return issuerPromise.then(function (issuer) {
                _Log.Log.debug("UserInfoService._getClaimsFromJwt: Received issuer:" + issuer);

                return _this2._metadataService.getSigningKeys().then(function (keys) {
                    if (!keys) {
                        _Log.Log.error("UserInfoService._getClaimsFromJwt: No signing keys from metadata");
                        return Promise.reject(new Error("No signing keys from metadata"));
                    }

                    _Log.Log.debug("UserInfoService._getClaimsFromJwt: Received signing keys");
                    var key = void 0;
                    if (!kid) {
                        keys = _this2._filterByAlg(keys, jwt.header.alg);

                        if (keys.length > 1) {
                            _Log.Log.error("UserInfoService._getClaimsFromJwt: No kid found in id_token and more than one key found in metadata");
                            return Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
                        } else {
                            // kid is mandatory only when there are multiple keys in the referenced JWK Set document
                            // see http://openid.net/specs/openid-connect-core-1_0.html#Signing
                            key = keys[0];
                        }
                    } else {
                        key = keys.filter(function (key) {
                            return key.kid === kid;
                        })[0];
                    }

                    if (!key) {
                        _Log.Log.error("UserInfoService._getClaimsFromJwt: No key matching kid or alg found in signing keys");
                        return Promise.reject(new Error("No key matching kid or alg found in signing keys"));
                    }

                    var audience = _this2._settings.client_id;

                    var clockSkewInSeconds = _this2._settings.clockSkew;
                    _Log.Log.debug("UserInfoService._getClaimsFromJwt: Validaing JWT; using clock skew (in seconds) of: ", clockSkewInSeconds);

                    return _this2._joseUtil.validateJwt(req.responseText, key, issuer, audience, clockSkewInSeconds, undefined, true).then(function () {
                        _Log.Log.debug("UserInfoService._getClaimsFromJwt: JWT validation successful");
                        return jwt.payload;
                    });
                });
            });
            return;
        } catch (e) {
            _Log.Log.error("UserInfoService._getClaimsFromJwt: Error parsing JWT response", e.message);
            reject(e);
            return;
        }
    };

    UserInfoService.prototype._filterByAlg = function _filterByAlg(keys, alg) {
        var kty = null;
        if (alg.startsWith("RS")) {
            kty = "RSA";
        } else if (alg.startsWith("PS")) {
            kty = "PS";
        } else if (alg.startsWith("ES")) {
            kty = "EC";
        } else {
            _Log.Log.debug("UserInfoService._filterByAlg: alg not supported: ", alg);
            return [];
        }

        _Log.Log.debug("UserInfoService._filterByAlg: Looking for keys that match kty: ", kty);

        keys = keys.filter(function (key) {
            return key.kty === kty;
        });

        _Log.Log.debug("UserInfoService._filterByAlg: Number of keys that match kty: ", kty, keys.length);

        return keys;
    };

    return UserInfoService;
}();

/***/ }),

/***/ "./src/UserManager.js":
/*!****************************!*\
  !*** ./src/UserManager.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _OidcClient2 = __webpack_require__(/*! ./OidcClient.js */ "./src/OidcClient.js");

var _UserManagerSettings = __webpack_require__(/*! ./UserManagerSettings.js */ "./src/UserManagerSettings.js");

var _User = __webpack_require__(/*! ./User.js */ "./src/User.js");

var _UserManagerEvents = __webpack_require__(/*! ./UserManagerEvents.js */ "./src/UserManagerEvents.js");

var _SilentRenewService = __webpack_require__(/*! ./SilentRenewService.js */ "./src/SilentRenewService.js");

var _SessionMonitor = __webpack_require__(/*! ./SessionMonitor.js */ "./src/SessionMonitor.js");

var _TokenRevocationClient = __webpack_require__(/*! ./TokenRevocationClient.js */ "./src/TokenRevocationClient.js");

var _TokenClient = __webpack_require__(/*! ./TokenClient.js */ "./src/TokenClient.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtil.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UserManager = exports.UserManager = function (_OidcClient) {
    _inherits(UserManager, _OidcClient);

    function UserManager() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var SilentRenewServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _SilentRenewService.SilentRenewService;
        var SessionMonitorCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _SessionMonitor.SessionMonitor;
        var TokenRevocationClientCtor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _TokenRevocationClient.TokenRevocationClient;
        var TokenClientCtor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _TokenClient.TokenClient;
        var joseUtil = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _JoseUtil.JoseUtil;

        _classCallCheck(this, UserManager);

        if (!(settings instanceof _UserManagerSettings.UserManagerSettings)) {
            settings = new _UserManagerSettings.UserManagerSettings(settings);
        }

        var _this = _possibleConstructorReturn(this, _OidcClient.call(this, settings));

        _this._events = new _UserManagerEvents.UserManagerEvents(settings);
        _this._silentRenewService = new SilentRenewServiceCtor(_this);

        // order is important for the following properties; these services depend upon the events.
        if (_this.settings.automaticSilentRenew) {
            _Log.Log.debug("UserManager.ctor: automaticSilentRenew is configured, setting up silent renew");
            _this.startSilentRenew();
        }

        if (_this.settings.monitorSession) {
            _Log.Log.debug("UserManager.ctor: monitorSession is configured, setting up session monitor");
            _this._sessionMonitor = new SessionMonitorCtor(_this);
        }

        _this._tokenRevocationClient = new TokenRevocationClientCtor(_this._settings);
        _this._tokenClient = new TokenClientCtor(_this._settings);
        _this._joseUtil = joseUtil;
        return _this;
    }

    UserManager.prototype.getUser = function getUser() {
        var _this2 = this;

        return this._loadUser().then(function (user) {
            if (user) {
                _Log.Log.info("UserManager.getUser: user loaded");

                _this2._events.load(user, false);

                return user;
            } else {
                _Log.Log.info("UserManager.getUser: user not found in storage");
                return null;
            }
        });
    };

    UserManager.prototype.removeUser = function removeUser() {
        var _this3 = this;

        return this.storeUser(null).then(function () {
            _Log.Log.info("UserManager.removeUser: user removed from storage");
            _this3._events.unload();
        });
    };

    UserManager.prototype.signinRedirect = function signinRedirect() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args.request_type = "si:r";
        return this._signinStart(args, this._redirectNavigator).then(function () {
            _Log.Log.info("UserManager.signinRedirect: successful");
        });
    };

    UserManager.prototype.signinRedirectCallback = function signinRedirectCallback(url) {
        return this._signinEnd(url || this._redirectNavigator.url).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinRedirectCallback: successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinRedirectCallback: no sub");
                }
            }

            return user;
        });
    };

    UserManager.prototype.signinPopup = function signinPopup() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args.request_type = "si:p";
        var url = args.redirect_uri || this.settings.popup_redirect_uri || this.settings.redirect_uri;
        if (!url) {
            _Log.Log.error("UserManager.signinPopup: No popup_redirect_uri or redirect_uri configured");
            return Promise.reject(new Error("No popup_redirect_uri or redirect_uri configured"));
        }

        args.redirect_uri = url;
        args.display = "popup";

        return this._signin(args, this._popupNavigator, {
            startUrl: url,
            popupWindowFeatures: args.popupWindowFeatures || this.settings.popupWindowFeatures,
            popupWindowTarget: args.popupWindowTarget || this.settings.popupWindowTarget
        }).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinPopup: signinPopup successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinPopup: no sub");
                }
            }

            return user;
        });
    };

    UserManager.prototype.signinPopupCallback = function signinPopupCallback(url) {
        return this._signinCallback(url, this._popupNavigator).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinPopupCallback: successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinPopupCallback: no sub");
                }
            }

            return user;
        }).catch(function (err) {
            _Log.Log.error( true && err.message);
        });
    };

    UserManager.prototype.signinSilent = function signinSilent() {
        var _this4 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args.request_type = "si:s";
        // first determine if we have a refresh token, or need to use iframe
        return this._loadUser().then(function (user) {
            if (user && user.refresh_token) {
                args.refresh_token = user.refresh_token;
                return _this4._useRefreshToken(args);
            } else {
                args.id_token_hint = args.id_token_hint || _this4.settings.includeIdTokenInSilentRenew && user && user.id_token;
                return _this4._signinSilentIframe(args);
            }
        });
    };

    UserManager.prototype._useRefreshToken = function _useRefreshToken() {
        var _this5 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return this._tokenClient.exchangeRefreshToken(args).then(function (result) {
            if (!result) {
                _Log.Log.error("UserManager._useRefreshToken: No response returned from token endpoint");
                return Promise.reject("No response returned from token endpoint");
            }
            if (!result.access_token) {
                _Log.Log.error("UserManager._useRefreshToken: No access token returned from token endpoint");
                return Promise.reject("No access token returned from token endpoint");
            }

            return _this5._loadUser().then(function (user) {
                if (user) {
                    var idTokenValidation = Promise.resolve();
                    if (result.id_token) {
                        idTokenValidation = _this5._validateIdTokenFromTokenRefreshToken(user.profile, result.id_token);
                    }

                    return idTokenValidation.then(function () {
                        _Log.Log.debug("UserManager._useRefreshToken: refresh token response success");
                        user.access_token = result.access_token;
                        user.refresh_token = result.refresh_token || user.refresh_token;
                        user.expires_in = result.expires_in;

                        return _this5.storeUser(user).then(function () {
                            _this5._events.load(user);
                            return user;
                        });
                    });
                } else {
                    return null;
                }
            });
        });
    };

    UserManager.prototype._validateIdTokenFromTokenRefreshToken = function _validateIdTokenFromTokenRefreshToken(profile, id_token) {
        var _this6 = this;

        return this._metadataService.getIssuer().then(function (issuer) {
            return _this6._joseUtil.validateJwtAttributes(id_token, issuer, _this6._settings.client_id, _this6._settings.clockSkew).then(function (payload) {
                if (!payload) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: Failed to validate id_token");
                    return Promise.reject(new Error("Failed to validate id_token"));
                }
                if (payload.sub !== profile.sub) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: sub in id_token does not match current sub");
                    return Promise.reject(new Error("sub in id_token does not match current sub"));
                }
                if (payload.auth_time && payload.auth_time !== profile.auth_time) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: auth_time in id_token does not match original auth_time");
                    return Promise.reject(new Error("auth_time in id_token does not match original auth_time"));
                }
                if (payload.azp && payload.azp !== profile.azp) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: azp in id_token does not match original azp");
                    return Promise.reject(new Error("azp in id_token does not match original azp"));
                }
                if (!payload.azp && profile.azp) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: azp not in id_token, but present in original id_token");
                    return Promise.reject(new Error("azp not in id_token, but present in original id_token"));
                }
            });
        });
    };

    UserManager.prototype._signinSilentIframe = function _signinSilentIframe() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var url = args.redirect_uri || this.settings.silent_redirect_uri;
        if (!url) {
            _Log.Log.error("UserManager.signinSilent: No silent_redirect_uri configured");
            return Promise.reject(new Error("No silent_redirect_uri configured"));
        }

        args.redirect_uri = url;
        args.prompt = args.prompt || "none";

        return this._signin(args, this._iframeNavigator, {
            startUrl: url,
            silentRequestTimeout: args.silentRequestTimeout || this.settings.silentRequestTimeout
        }).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinSilent: successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinSilent: no sub");
                }
            }

            return user;
        });
    };

    UserManager.prototype.signinSilentCallback = function signinSilentCallback(url) {
        return this._signinCallback(url, this._iframeNavigator).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinSilentCallback: successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinSilentCallback: no sub");
                }
            }

            return user;
        });
    };

    UserManager.prototype.signinCallback = function signinCallback(url) {
        var _this7 = this;

        return this.readSigninResponseState(url).then(function (_ref) {
            var state = _ref.state,
                response = _ref.response;

            if (state.request_type === "si:r") {
                return _this7.signinRedirectCallback(url);
            }
            if (state.request_type === "si:p") {
                return _this7.signinPopupCallback(url);
            }
            if (state.request_type === "si:s") {
                return _this7.signinSilentCallback(url);
            }
            return Promise.reject(new Error("invalid response_type in state"));
        });
    };

    UserManager.prototype.signoutCallback = function signoutCallback(url, keepOpen) {
        var _this8 = this;

        return this.readSignoutResponseState(url).then(function (_ref2) {
            var state = _ref2.state,
                response = _ref2.response;

            if (state) {
                if (state.request_type === "so:r") {
                    return _this8.signoutRedirectCallback(url);
                }
                if (state.request_type === "so:p") {
                    return _this8.signoutPopupCallback(url, keepOpen);
                }
                return Promise.reject(new Error("invalid response_type in state"));
            }
            return response;
        });
    };

    UserManager.prototype.querySessionStatus = function querySessionStatus() {
        var _this9 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args.request_type = "si:s"; // this acts like a signin silent
        var url = args.redirect_uri || this.settings.silent_redirect_uri;
        if (!url) {
            _Log.Log.error("UserManager.querySessionStatus: No silent_redirect_uri configured");
            return Promise.reject(new Error("No silent_redirect_uri configured"));
        }

        args.redirect_uri = url;
        args.prompt = "none";
        args.response_type = args.response_type || this.settings.query_status_response_type;
        args.scope = "openid";

        return this._signinStart(args, this._iframeNavigator, {
            startUrl: url,
            silentRequestTimeout: args.silentRequestTimeout || this.settings.silentRequestTimeout
        }).then(function (navResponse) {
            return _this9.processSigninResponse(navResponse.url).then(function (signinResponse) {
                _Log.Log.debug("UserManager.querySessionStatus: got signin response");

                if (signinResponse.session_state && signinResponse.profile.sub) {
                    _Log.Log.info("UserManager.querySessionStatus: querySessionStatus success for sub: ", signinResponse.profile.sub);
                    return {
                        session_state: signinResponse.session_state,
                        sub: signinResponse.profile.sub,
                        sid: signinResponse.profile.sid
                    };
                } else {
                    _Log.Log.info("querySessionStatus successful, user not authenticated");
                }
            });
        });
    };

    UserManager.prototype._signin = function _signin(args, navigator) {
        var _this10 = this;

        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return this._signinStart(args, navigator, navigatorParams).then(function (navResponse) {
            return _this10._signinEnd(navResponse.url);
        });
    };

    UserManager.prototype._signinStart = function _signinStart(args, navigator) {
        var _this11 = this;

        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


        return navigator.prepare(navigatorParams).then(function (handle) {
            _Log.Log.debug("UserManager._signinStart: got navigator window handle");

            return _this11.createSigninRequest(args).then(function (signinRequest) {
                _Log.Log.debug("UserManager._signinStart: got signin request");

                navigatorParams.url = signinRequest.url;
                navigatorParams.id = signinRequest.state.id;

                return handle.navigate(navigatorParams);
            }).catch(function (err) {
                if (handle.close) {
                    _Log.Log.debug("UserManager._signinStart: Error after preparing navigator, closing navigator window");
                    handle.close();
                }
                throw err;
            });
        });
    };

    UserManager.prototype._signinEnd = function _signinEnd(url) {
        var _this12 = this;

        return this.processSigninResponse(url).then(function (signinResponse) {
            _Log.Log.debug("UserManager._signinEnd: got signin response");

            var user = new _User.User(signinResponse);

            return _this12.storeUser(user).then(function () {
                _Log.Log.debug("UserManager._signinEnd: user stored");

                _this12._events.load(user);

                return user;
            });
        });
    };

    UserManager.prototype._signinCallback = function _signinCallback(url, navigator) {
        _Log.Log.debug("UserManager._signinCallback");
        return navigator.callback(url);
    };

    UserManager.prototype.signoutRedirect = function signoutRedirect() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args.request_type = "so:r";
        var postLogoutRedirectUri = args.post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
        if (postLogoutRedirectUri) {
            args.post_logout_redirect_uri = postLogoutRedirectUri;
        }
        return this._signoutStart(args, this._redirectNavigator).then(function () {
            _Log.Log.info("UserManager.signoutRedirect: successful");
        });
    };

    UserManager.prototype.signoutRedirectCallback = function signoutRedirectCallback(url) {
        return this._signoutEnd(url || this._redirectNavigator.url).then(function (response) {
            _Log.Log.info("UserManager.signoutRedirectCallback: successful");
            return response;
        });
    };

    UserManager.prototype.signoutPopup = function signoutPopup() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args.request_type = "so:p";
        var url = args.post_logout_redirect_uri || this.settings.popup_post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
        args.post_logout_redirect_uri = url;
        args.display = "popup";
        if (args.post_logout_redirect_uri) {
            // we're putting a dummy entry in here because we
            // need a unique id from the state for notification
            // to the parent window, which is necessary if we
            // plan to return back to the client after signout
            // and so we can close the popup after signout
            args.state = args.state || {};
        }

        return this._signout(args, this._popupNavigator, {
            startUrl: url,
            popupWindowFeatures: args.popupWindowFeatures || this.settings.popupWindowFeatures,
            popupWindowTarget: args.popupWindowTarget || this.settings.popupWindowTarget
        }).then(function () {
            _Log.Log.info("UserManager.signoutPopup: successful");
        });
    };

    UserManager.prototype.signoutPopupCallback = function signoutPopupCallback(url, keepOpen) {
        if (typeof keepOpen === 'undefined' && typeof url === 'boolean') {
            keepOpen = url;
            url = null;
        }

        var delimiter = '?';
        return this._popupNavigator.callback(url, keepOpen, delimiter).then(function () {
            _Log.Log.info("UserManager.signoutPopupCallback: successful");
        });
    };

    UserManager.prototype._signout = function _signout(args, navigator) {
        var _this13 = this;

        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return this._signoutStart(args, navigator, navigatorParams).then(function (navResponse) {
            return _this13._signoutEnd(navResponse.url);
        });
    };

    UserManager.prototype._signoutStart = function _signoutStart() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _this14 = this;

        var navigator = arguments[1];
        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return navigator.prepare(navigatorParams).then(function (handle) {
            _Log.Log.debug("UserManager._signoutStart: got navigator window handle");

            return _this14._loadUser().then(function (user) {
                _Log.Log.debug("UserManager._signoutStart: loaded current user from storage");

                var revokePromise = _this14._settings.revokeAccessTokenOnSignout ? _this14._revokeInternal(user) : Promise.resolve();
                return revokePromise.then(function () {

                    var id_token = args.id_token_hint || user && user.id_token;
                    if (id_token) {
                        _Log.Log.debug("UserManager._signoutStart: Setting id_token into signout request");
                        args.id_token_hint = id_token;
                    }

                    return _this14.removeUser().then(function () {
                        _Log.Log.debug("UserManager._signoutStart: user removed, creating signout request");

                        return _this14.createSignoutRequest(args).then(function (signoutRequest) {
                            _Log.Log.debug("UserManager._signoutStart: got signout request");

                            navigatorParams.url = signoutRequest.url;
                            if (signoutRequest.state) {
                                navigatorParams.id = signoutRequest.state.id;
                            }
                            return handle.navigate(navigatorParams);
                        });
                    });
                });
            }).catch(function (err) {
                if (handle.close) {
                    _Log.Log.debug("UserManager._signoutStart: Error after preparing navigator, closing navigator window");
                    handle.close();
                }
                throw err;
            });
        });
    };

    UserManager.prototype._signoutEnd = function _signoutEnd(url) {
        return this.processSignoutResponse(url).then(function (signoutResponse) {
            _Log.Log.debug("UserManager._signoutEnd: got signout response");

            return signoutResponse;
        });
    };

    UserManager.prototype.revokeAccessToken = function revokeAccessToken() {
        var _this15 = this;

        return this._loadUser().then(function (user) {
            return _this15._revokeInternal(user, true).then(function (success) {
                if (success) {
                    _Log.Log.debug("UserManager.revokeAccessToken: removing token properties from user and re-storing");

                    user.access_token = null;
                    user.refresh_token = null;
                    user.expires_at = null;
                    user.token_type = null;

                    return _this15.storeUser(user).then(function () {
                        _Log.Log.debug("UserManager.revokeAccessToken: user stored");
                        _this15._events.load(user);
                    });
                }
            });
        }).then(function () {
            _Log.Log.info("UserManager.revokeAccessToken: access token revoked successfully");
        });
    };

    UserManager.prototype._revokeInternal = function _revokeInternal(user, required) {
        var _this16 = this;

        if (user) {
            var access_token = user.access_token;
            var refresh_token = user.refresh_token;

            return this._revokeAccessTokenInternal(access_token, required).then(function (atSuccess) {
                return _this16._revokeRefreshTokenInternal(refresh_token, required).then(function (rtSuccess) {
                    if (!atSuccess && !rtSuccess) {
                        _Log.Log.debug("UserManager.revokeAccessToken: no need to revoke due to no token(s), or JWT format");
                    }

                    return atSuccess || rtSuccess;
                });
            });
        }

        return Promise.resolve(false);
    };

    UserManager.prototype._revokeAccessTokenInternal = function _revokeAccessTokenInternal(access_token, required) {
        // check for JWT vs. reference token
        if (!access_token || access_token.indexOf('.') >= 0) {
            return Promise.resolve(false);
        }

        return this._tokenRevocationClient.revoke(access_token, required).then(function () {
            return true;
        });
    };

    UserManager.prototype._revokeRefreshTokenInternal = function _revokeRefreshTokenInternal(refresh_token, required) {
        if (!refresh_token) {
            return Promise.resolve(false);
        }

        return this._tokenRevocationClient.revoke(refresh_token, required, "refresh_token").then(function () {
            return true;
        });
    };

    UserManager.prototype.startSilentRenew = function startSilentRenew() {
        this._silentRenewService.start();
    };

    UserManager.prototype.stopSilentRenew = function stopSilentRenew() {
        this._silentRenewService.stop();
    };

    UserManager.prototype._loadUser = function _loadUser() {
        return this._userStore.get(this._userStoreKey).then(function (storageString) {
            if (storageString) {
                _Log.Log.debug("UserManager._loadUser: user storageString loaded");
                return _User.User.fromStorageString(storageString);
            }

            _Log.Log.debug("UserManager._loadUser: no user storageString");
            return null;
        });
    };

    UserManager.prototype.storeUser = function storeUser(user) {
        if (user) {
            _Log.Log.debug("UserManager.storeUser: storing user");

            var storageString = user.toStorageString();
            return this._userStore.set(this._userStoreKey, storageString);
        } else {
            _Log.Log.debug("storeUser.storeUser: removing user");
            return this._userStore.remove(this._userStoreKey);
        }
    };

    _createClass(UserManager, [{
        key: '_redirectNavigator',
        get: function get() {
            return this.settings.redirectNavigator;
        }
    }, {
        key: '_popupNavigator',
        get: function get() {
            return this.settings.popupNavigator;
        }
    }, {
        key: '_iframeNavigator',
        get: function get() {
            return this.settings.iframeNavigator;
        }
    }, {
        key: '_userStore',
        get: function get() {
            return this.settings.userStore;
        }
    }, {
        key: 'events',
        get: function get() {
            return this._events;
        }
    }, {
        key: '_userStoreKey',
        get: function get() {
            return 'user:' + this.settings.authority + ':' + this.settings.client_id;
        }
    }]);

    return UserManager;
}(_OidcClient2.OidcClient);

/***/ }),

/***/ "./src/UserManagerEvents.js":
/*!**********************************!*\
  !*** ./src/UserManagerEvents.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserManagerEvents = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _AccessTokenEvents2 = __webpack_require__(/*! ./AccessTokenEvents.js */ "./src/AccessTokenEvents.js");

var _Event = __webpack_require__(/*! ./Event.js */ "./src/Event.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UserManagerEvents = exports.UserManagerEvents = function (_AccessTokenEvents) {
    _inherits(UserManagerEvents, _AccessTokenEvents);

    function UserManagerEvents(settings) {
        _classCallCheck(this, UserManagerEvents);

        var _this = _possibleConstructorReturn(this, _AccessTokenEvents.call(this, settings));

        _this._userLoaded = new _Event.Event("User loaded");
        _this._userUnloaded = new _Event.Event("User unloaded");
        _this._silentRenewError = new _Event.Event("Silent renew error");
        _this._userSignedOut = new _Event.Event("User signed out");
        _this._userSessionChanged = new _Event.Event("User session changed");
        return _this;
    }

    UserManagerEvents.prototype.load = function load(user) {
        var raiseEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        _Log.Log.debug("UserManagerEvents.load");
        _AccessTokenEvents.prototype.load.call(this, user);
        if (raiseEvent) {
            this._userLoaded.raise(user);
        }
    };

    UserManagerEvents.prototype.unload = function unload() {
        _Log.Log.debug("UserManagerEvents.unload");
        _AccessTokenEvents.prototype.unload.call(this);
        this._userUnloaded.raise();
    };

    UserManagerEvents.prototype.addUserLoaded = function addUserLoaded(cb) {
        this._userLoaded.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserLoaded = function removeUserLoaded(cb) {
        this._userLoaded.removeHandler(cb);
    };

    UserManagerEvents.prototype.addUserUnloaded = function addUserUnloaded(cb) {
        this._userUnloaded.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserUnloaded = function removeUserUnloaded(cb) {
        this._userUnloaded.removeHandler(cb);
    };

    UserManagerEvents.prototype.addSilentRenewError = function addSilentRenewError(cb) {
        this._silentRenewError.addHandler(cb);
    };

    UserManagerEvents.prototype.removeSilentRenewError = function removeSilentRenewError(cb) {
        this._silentRenewError.removeHandler(cb);
    };

    UserManagerEvents.prototype._raiseSilentRenewError = function _raiseSilentRenewError(e) {
        _Log.Log.debug("UserManagerEvents._raiseSilentRenewError", e.message);
        this._silentRenewError.raise(e);
    };

    UserManagerEvents.prototype.addUserSignedOut = function addUserSignedOut(cb) {
        this._userSignedOut.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserSignedOut = function removeUserSignedOut(cb) {
        this._userSignedOut.removeHandler(cb);
    };

    UserManagerEvents.prototype._raiseUserSignedOut = function _raiseUserSignedOut(e) {
        _Log.Log.debug("UserManagerEvents._raiseUserSignedOut");
        this._userSignedOut.raise(e);
    };

    UserManagerEvents.prototype.addUserSessionChanged = function addUserSessionChanged(cb) {
        this._userSessionChanged.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserSessionChanged = function removeUserSessionChanged(cb) {
        this._userSessionChanged.removeHandler(cb);
    };

    UserManagerEvents.prototype._raiseUserSessionChanged = function _raiseUserSessionChanged(e) {
        _Log.Log.debug("UserManagerEvents._raiseUserSessionChanged");
        this._userSessionChanged.raise(e);
    };

    return UserManagerEvents;
}(_AccessTokenEvents2.AccessTokenEvents);

/***/ }),

/***/ "./src/UserManagerSettings.js":
/*!************************************!*\
  !*** ./src/UserManagerSettings.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserManagerSettings = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _OidcClientSettings2 = __webpack_require__(/*! ./OidcClientSettings.js */ "./src/OidcClientSettings.js");

var _RedirectNavigator = __webpack_require__(/*! ./RedirectNavigator.js */ "./src/RedirectNavigator.js");

var _PopupNavigator = __webpack_require__(/*! ./PopupNavigator.js */ "./src/PopupNavigator.js");

var _IFrameNavigator = __webpack_require__(/*! ./IFrameNavigator.js */ "./src/IFrameNavigator.js");

var _WebStorageStateStore = __webpack_require__(/*! ./WebStorageStateStore.js */ "./src/WebStorageStateStore.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

var _SigninRequest = __webpack_require__(/*! ./SigninRequest.js */ "./src/SigninRequest.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultAccessTokenExpiringNotificationTime = 60;
var DefaultCheckSessionInterval = 2000;

var UserManagerSettings = exports.UserManagerSettings = function (_OidcClientSettings) {
    _inherits(UserManagerSettings, _OidcClientSettings);

    function UserManagerSettings() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            popup_redirect_uri = _ref.popup_redirect_uri,
            popup_post_logout_redirect_uri = _ref.popup_post_logout_redirect_uri,
            popupWindowFeatures = _ref.popupWindowFeatures,
            popupWindowTarget = _ref.popupWindowTarget,
            silent_redirect_uri = _ref.silent_redirect_uri,
            silentRequestTimeout = _ref.silentRequestTimeout,
            _ref$automaticSilentR = _ref.automaticSilentRenew,
            automaticSilentRenew = _ref$automaticSilentR === undefined ? false : _ref$automaticSilentR,
            _ref$includeIdTokenIn = _ref.includeIdTokenInSilentRenew,
            includeIdTokenInSilentRenew = _ref$includeIdTokenIn === undefined ? true : _ref$includeIdTokenIn,
            _ref$monitorSession = _ref.monitorSession,
            monitorSession = _ref$monitorSession === undefined ? true : _ref$monitorSession,
            _ref$checkSessionInte = _ref.checkSessionInterval,
            checkSessionInterval = _ref$checkSessionInte === undefined ? DefaultCheckSessionInterval : _ref$checkSessionInte,
            _ref$stopCheckSession = _ref.stopCheckSessionOnError,
            stopCheckSessionOnError = _ref$stopCheckSession === undefined ? true : _ref$stopCheckSession,
            query_status_response_type = _ref.query_status_response_type,
            _ref$revokeAccessToke = _ref.revokeAccessTokenOnSignout,
            revokeAccessTokenOnSignout = _ref$revokeAccessToke === undefined ? false : _ref$revokeAccessToke,
            _ref$accessTokenExpir = _ref.accessTokenExpiringNotificationTime,
            accessTokenExpiringNotificationTime = _ref$accessTokenExpir === undefined ? DefaultAccessTokenExpiringNotificationTime : _ref$accessTokenExpir,
            _ref$redirectNavigato = _ref.redirectNavigator,
            redirectNavigator = _ref$redirectNavigato === undefined ? new _RedirectNavigator.RedirectNavigator() : _ref$redirectNavigato,
            _ref$popupNavigator = _ref.popupNavigator,
            popupNavigator = _ref$popupNavigator === undefined ? new _PopupNavigator.PopupNavigator() : _ref$popupNavigator,
            _ref$iframeNavigator = _ref.iframeNavigator,
            iframeNavigator = _ref$iframeNavigator === undefined ? new _IFrameNavigator.IFrameNavigator() : _ref$iframeNavigator,
            _ref$userStore = _ref.userStore,
            userStore = _ref$userStore === undefined ? new _WebStorageStateStore.WebStorageStateStore({ store: _Global.Global.sessionStorage }) : _ref$userStore;

        _classCallCheck(this, UserManagerSettings);

        var _this = _possibleConstructorReturn(this, _OidcClientSettings.call(this, arguments[0]));

        _this._popup_redirect_uri = popup_redirect_uri;
        _this._popup_post_logout_redirect_uri = popup_post_logout_redirect_uri;
        _this._popupWindowFeatures = popupWindowFeatures;
        _this._popupWindowTarget = popupWindowTarget;

        _this._silent_redirect_uri = silent_redirect_uri;
        _this._silentRequestTimeout = silentRequestTimeout;
        _this._automaticSilentRenew = automaticSilentRenew;
        _this._includeIdTokenInSilentRenew = includeIdTokenInSilentRenew;
        _this._accessTokenExpiringNotificationTime = accessTokenExpiringNotificationTime;

        _this._monitorSession = monitorSession;
        _this._checkSessionInterval = checkSessionInterval;
        _this._stopCheckSessionOnError = stopCheckSessionOnError;
        if (query_status_response_type) {
            _this._query_status_response_type = query_status_response_type;
        } else if (arguments[0] && arguments[0].response_type) {
            _this._query_status_response_type = _SigninRequest.SigninRequest.isOidc(arguments[0].response_type) ? "id_token" : "code";
        } else {
            _this._query_status_response_type = "id_token";
        }
        _this._revokeAccessTokenOnSignout = revokeAccessTokenOnSignout;

        _this._redirectNavigator = redirectNavigator;
        _this._popupNavigator = popupNavigator;
        _this._iframeNavigator = iframeNavigator;

        _this._userStore = userStore;
        return _this;
    }

    _createClass(UserManagerSettings, [{
        key: 'popup_redirect_uri',
        get: function get() {
            return this._popup_redirect_uri;
        }
    }, {
        key: 'popup_post_logout_redirect_uri',
        get: function get() {
            return this._popup_post_logout_redirect_uri;
        }
    }, {
        key: 'popupWindowFeatures',
        get: function get() {
            return this._popupWindowFeatures;
        }
    }, {
        key: 'popupWindowTarget',
        get: function get() {
            return this._popupWindowTarget;
        }
    }, {
        key: 'silent_redirect_uri',
        get: function get() {
            return this._silent_redirect_uri;
        }
    }, {
        key: 'silentRequestTimeout',
        get: function get() {
            return this._silentRequestTimeout;
        }
    }, {
        key: 'automaticSilentRenew',
        get: function get() {
            return this._automaticSilentRenew;
        }
    }, {
        key: 'includeIdTokenInSilentRenew',
        get: function get() {
            return this._includeIdTokenInSilentRenew;
        }
    }, {
        key: 'accessTokenExpiringNotificationTime',
        get: function get() {
            return this._accessTokenExpiringNotificationTime;
        }
    }, {
        key: 'monitorSession',
        get: function get() {
            return this._monitorSession;
        }
    }, {
        key: 'checkSessionInterval',
        get: function get() {
            return this._checkSessionInterval;
        }
    }, {
        key: 'stopCheckSessionOnError',
        get: function get() {
            return this._stopCheckSessionOnError;
        }
    }, {
        key: 'query_status_response_type',
        get: function get() {
            return this._query_status_response_type;
        }
    }, {
        key: 'revokeAccessTokenOnSignout',
        get: function get() {
            return this._revokeAccessTokenOnSignout;
        }
    }, {
        key: 'redirectNavigator',
        get: function get() {
            return this._redirectNavigator;
        }
    }, {
        key: 'popupNavigator',
        get: function get() {
            return this._popupNavigator;
        }
    }, {
        key: 'iframeNavigator',
        get: function get() {
            return this._iframeNavigator;
        }
    }, {
        key: 'userStore',
        get: function get() {
            return this._userStore;
        }
    }]);

    return UserManagerSettings;
}(_OidcClientSettings2.OidcClientSettings);

/***/ }),

/***/ "./src/WebStorageStateStore.js":
/*!*************************************!*\
  !*** ./src/WebStorageStateStore.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WebStorageStateStore = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var WebStorageStateStore = exports.WebStorageStateStore = function () {
    function WebStorageStateStore() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$prefix = _ref.prefix,
            prefix = _ref$prefix === undefined ? "oidc." : _ref$prefix,
            _ref$store = _ref.store,
            store = _ref$store === undefined ? _Global.Global.localStorage : _ref$store;

        _classCallCheck(this, WebStorageStateStore);

        this._store = store;
        this._prefix = prefix;
    }

    WebStorageStateStore.prototype.set = function set(key, value) {
        _Log.Log.debug("WebStorageStateStore.set", key);

        key = this._prefix + key;

        this._store.setItem(key, value);

        return Promise.resolve();
    };

    WebStorageStateStore.prototype.get = function get(key) {
        _Log.Log.debug("WebStorageStateStore.get", key);

        key = this._prefix + key;

        var item = this._store.getItem(key);

        return Promise.resolve(item);
    };

    WebStorageStateStore.prototype.remove = function remove(key) {
        _Log.Log.debug("WebStorageStateStore.remove", key);

        key = this._prefix + key;

        var item = this._store.getItem(key);
        this._store.removeItem(key);

        return Promise.resolve(item);
    };

    WebStorageStateStore.prototype.getAllKeys = function getAllKeys() {
        _Log.Log.debug("WebStorageStateStore.getAllKeys");

        var keys = [];

        for (var index = 0; index < this._store.length; index++) {
            var key = this._store.key(index);

            if (key.indexOf(this._prefix) === 0) {
                keys.push(key.substr(this._prefix.length));
            }
        }

        return Promise.resolve(keys);
    };

    return WebStorageStateStore;
}();

/***/ }),

/***/ "./src/crypto/jsrsasign.js":
/*!*********************************!*\
  !*** ./src/crypto/jsrsasign.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AllowedSigningAlgs = exports.b64tohex = exports.hextob64u = exports.crypto = exports.X509 = exports.KeyUtil = exports.jws = undefined;

var _jsrsasign = __webpack_require__(/*! ../../jsrsasign/dist/jsrsasign.js */ "./jsrsasign/dist/jsrsasign.js");

var AllowedSigningAlgs = ['RS256', 'RS384', 'RS512', 'PS256', 'PS384', 'PS512', 'ES256', 'ES384', 'ES512'];

exports.jws = _jsrsasign.jws;
exports.KeyUtil = _jsrsasign.KEYUTIL;
exports.X509 = _jsrsasign.X509;
exports.crypto = _jsrsasign.crypto;
exports.hextob64u = _jsrsasign.hextob64u;
exports.b64tohex = _jsrsasign.b64tohex;
exports.AllowedSigningAlgs = AllowedSigningAlgs;

/***/ }),

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = random;

var _v = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates RFC4122 version 4 guid ()
 */

function random() {
  return (0, _v2.default)().replace(/-/g, '');
}
module.exports = exports['default'];

/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./polyfills.js ./index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./polyfills.js */"./polyfills.js");
module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });