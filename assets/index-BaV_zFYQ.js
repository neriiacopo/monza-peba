var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function Av(o2, s) {
  for (var c = 0; c < s.length; c++) {
    const f = s[c];
    if (typeof f != "string" && !Array.isArray(f)) {
      for (const m in f) if (m !== "default" && !(m in o2)) {
        const g = Object.getOwnPropertyDescriptor(f, m);
        g && Object.defineProperty(o2, m, g.get ? g : { enumerable: true, get: () => f[m] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(o2, Symbol.toStringTag, { value: "Module" }));
}
(function() {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const m of document.querySelectorAll('link[rel="modulepreload"]')) f(m);
  new MutationObserver((m) => {
    for (const g of m) if (g.type === "childList") for (const y of g.addedNodes) y.tagName === "LINK" && y.rel === "modulepreload" && f(y);
  }).observe(document, { childList: true, subtree: true });
  function c(m) {
    const g = {};
    return m.integrity && (g.integrity = m.integrity), m.referrerPolicy && (g.referrerPolicy = m.referrerPolicy), m.crossOrigin === "use-credentials" ? g.credentials = "include" : m.crossOrigin === "anonymous" ? g.credentials = "omit" : g.credentials = "same-origin", g;
  }
  function f(m) {
    if (m.ep) return;
    m.ep = true;
    const g = c(m);
    fetch(m.href, g);
  }
})();
function S_(o2) {
  return o2 && o2.__esModule && Object.prototype.hasOwnProperty.call(o2, "default") ? o2.default : o2;
}
var _h = { exports: {} }, Fs = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var gg;
function Ov() {
  if (gg) return Fs;
  gg = 1;
  var o2 = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function c(f, m, g) {
    var y = null;
    if (g !== void 0 && (y = "" + g), m.key !== void 0 && (y = "" + m.key), "key" in m) {
      g = {};
      for (var S in m) S !== "key" && (g[S] = m[S]);
    } else g = m;
    return m = g.ref, { $$typeof: o2, type: f, key: y, ref: m !== void 0 ? m : null, props: g };
  }
  return Fs.Fragment = s, Fs.jsx = c, Fs.jsxs = c, Fs;
}
var _g;
function Lv() {
  return _g || (_g = 1, _h.exports = Ov()), _h.exports;
}
var rt = Lv(), yh = { exports: {} }, tl = {}, vh = { exports: {} }, bh = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var yg;
function zv() {
  return yg || (yg = 1, function(o2) {
    function s(N, st) {
      var F = N.length;
      N.push(st);
      t: for (; 0 < F; ) {
        var Et = F - 1 >>> 1, C = N[Et];
        if (0 < m(C, st)) N[Et] = st, N[F] = C, F = Et;
        else break t;
      }
    }
    function c(N) {
      return N.length === 0 ? null : N[0];
    }
    function f(N) {
      if (N.length === 0) return null;
      var st = N[0], F = N.pop();
      if (F !== st) {
        N[0] = F;
        t: for (var Et = 0, C = N.length, $ = C >>> 1; Et < $; ) {
          var it = 2 * (Et + 1) - 1, at = N[it], dt = it + 1, vt = N[dt];
          if (0 > m(at, F)) dt < C && 0 > m(vt, at) ? (N[Et] = vt, N[dt] = F, Et = dt) : (N[Et] = at, N[it] = F, Et = it);
          else if (dt < C && 0 > m(vt, F)) N[Et] = vt, N[dt] = F, Et = dt;
          else break t;
        }
      }
      return st;
    }
    function m(N, st) {
      var F = N.sortIndex - st.sortIndex;
      return F !== 0 ? F : N.id - st.id;
    }
    if (o2.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var g = performance;
      o2.unstable_now = function() {
        return g.now();
      };
    } else {
      var y = Date, S = y.now();
      o2.unstable_now = function() {
        return y.now() - S;
      };
    }
    var w = [], T = [], A = 1, R = null, k = 3, V = false, Z = false, z = false, X = false, lt = typeof setTimeout == "function" ? setTimeout : null, ct = typeof clearTimeout == "function" ? clearTimeout : null, nt = typeof setImmediate < "u" ? setImmediate : null;
    function et(N) {
      for (var st = c(T); st !== null; ) {
        if (st.callback === null) f(T);
        else if (st.startTime <= N) f(T), st.sortIndex = st.expirationTime, s(w, st);
        else break;
        st = c(T);
      }
    }
    function U(N) {
      if (z = false, et(N), !Z) if (c(w) !== null) Z = true, W || (W = true, x());
      else {
        var st = c(T);
        st !== null && St(U, st.startTime - N);
      }
    }
    var W = false, ft = -1, _t = 5, pt = -1;
    function yt() {
      return X ? true : !(o2.unstable_now() - pt < _t);
    }
    function ht() {
      if (X = false, W) {
        var N = o2.unstable_now();
        pt = N;
        var st = true;
        try {
          t: {
            Z = false, z && (z = false, ct(ft), ft = -1), V = true;
            var F = k;
            try {
              e: {
                for (et(N), R = c(w); R !== null && !(R.expirationTime > N && yt()); ) {
                  var Et = R.callback;
                  if (typeof Et == "function") {
                    R.callback = null, k = R.priorityLevel;
                    var C = Et(R.expirationTime <= N);
                    if (N = o2.unstable_now(), typeof C == "function") {
                      R.callback = C, et(N), st = true;
                      break e;
                    }
                    R === c(w) && f(w), et(N);
                  } else f(w);
                  R = c(w);
                }
                if (R !== null) st = true;
                else {
                  var $ = c(T);
                  $ !== null && St(U, $.startTime - N), st = false;
                }
              }
              break t;
            } finally {
              R = null, k = F, V = false;
            }
            st = void 0;
          }
        } finally {
          st ? x() : W = false;
        }
      }
    }
    var x;
    if (typeof nt == "function") x = function() {
      nt(ht);
    };
    else if (typeof MessageChannel < "u") {
      var mt = new MessageChannel(), ot = mt.port2;
      mt.port1.onmessage = ht, x = function() {
        ot.postMessage(null);
      };
    } else x = function() {
      lt(ht, 0);
    };
    function St(N, st) {
      ft = lt(function() {
        N(o2.unstable_now());
      }, st);
    }
    o2.unstable_IdlePriority = 5, o2.unstable_ImmediatePriority = 1, o2.unstable_LowPriority = 4, o2.unstable_NormalPriority = 3, o2.unstable_Profiling = null, o2.unstable_UserBlockingPriority = 2, o2.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, o2.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _t = 0 < N ? Math.floor(1e3 / N) : 5;
    }, o2.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, o2.unstable_next = function(N) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var st = 3;
          break;
        default:
          st = k;
      }
      var F = k;
      k = st;
      try {
        return N();
      } finally {
        k = F;
      }
    }, o2.unstable_requestPaint = function() {
      X = true;
    }, o2.unstable_runWithPriority = function(N, st) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var F = k;
      k = N;
      try {
        return st();
      } finally {
        k = F;
      }
    }, o2.unstable_scheduleCallback = function(N, st, F) {
      var Et = o2.unstable_now();
      switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? Et + F : Et) : F = Et, N) {
        case 1:
          var C = -1;
          break;
        case 2:
          C = 250;
          break;
        case 5:
          C = 1073741823;
          break;
        case 4:
          C = 1e4;
          break;
        default:
          C = 5e3;
      }
      return C = F + C, N = { id: A++, callback: st, priorityLevel: N, startTime: F, expirationTime: C, sortIndex: -1 }, F > Et ? (N.sortIndex = F, s(T, N), c(w) === null && N === c(T) && (z ? (ct(ft), ft = -1) : z = true, St(U, F - Et))) : (N.sortIndex = C, s(w, N), Z || V || (Z = true, W || (W = true, x()))), N;
    }, o2.unstable_shouldYield = yt, o2.unstable_wrapCallback = function(N) {
      var st = k;
      return function() {
        var F = k;
        k = st;
        try {
          return N.apply(this, arguments);
        } finally {
          k = F;
        }
      };
    };
  }(bh)), bh;
}
var vg;
function Rv() {
  return vg || (vg = 1, vh.exports = zv()), vh.exports;
}
var Sh = { exports: {} }, Dt = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var bg;
function Bv() {
  if (bg) return Dt;
  bg = 1;
  var o2 = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), y = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), R = Symbol.iterator;
  function k(C) {
    return C === null || typeof C != "object" ? null : (C = R && C[R] || C["@@iterator"], typeof C == "function" ? C : null);
  }
  var V = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Z = Object.assign, z = {};
  function X(C, $, it) {
    this.props = C, this.context = $, this.refs = z, this.updater = it || V;
  }
  X.prototype.isReactComponent = {}, X.prototype.setState = function(C, $) {
    if (typeof C != "object" && typeof C != "function" && C != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, C, $, "setState");
  }, X.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function lt() {
  }
  lt.prototype = X.prototype;
  function ct(C, $, it) {
    this.props = C, this.context = $, this.refs = z, this.updater = it || V;
  }
  var nt = ct.prototype = new lt();
  nt.constructor = ct, Z(nt, X.prototype), nt.isPureReactComponent = true;
  var et = Array.isArray, U = { H: null, A: null, T: null, S: null, V: null }, W = Object.prototype.hasOwnProperty;
  function ft(C, $, it, at, dt, vt) {
    return it = vt.ref, { $$typeof: o2, type: C, key: $, ref: it !== void 0 ? it : null, props: vt };
  }
  function _t(C, $) {
    return ft(C.type, $, void 0, void 0, void 0, C.props);
  }
  function pt(C) {
    return typeof C == "object" && C !== null && C.$$typeof === o2;
  }
  function yt(C) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(it) {
      return $[it];
    });
  }
  var ht = /\/+/g;
  function x(C, $) {
    return typeof C == "object" && C !== null && C.key != null ? yt("" + C.key) : $.toString(36);
  }
  function mt() {
  }
  function ot(C) {
    switch (C.status) {
      case "fulfilled":
        return C.value;
      case "rejected":
        throw C.reason;
      default:
        switch (typeof C.status == "string" ? C.then(mt, mt) : (C.status = "pending", C.then(function($) {
          C.status === "pending" && (C.status = "fulfilled", C.value = $);
        }, function($) {
          C.status === "pending" && (C.status = "rejected", C.reason = $);
        })), C.status) {
          case "fulfilled":
            return C.value;
          case "rejected":
            throw C.reason;
        }
    }
    throw C;
  }
  function St(C, $, it, at, dt) {
    var vt = typeof C;
    (vt === "undefined" || vt === "boolean") && (C = null);
    var ut = false;
    if (C === null) ut = true;
    else switch (vt) {
      case "bigint":
      case "string":
      case "number":
        ut = true;
        break;
      case "object":
        switch (C.$$typeof) {
          case o2:
          case s:
            ut = true;
            break;
          case A:
            return ut = C._init, St(ut(C._payload), $, it, at, dt);
        }
    }
    if (ut) return dt = dt(C), ut = at === "" ? "." + x(C, 0) : at, et(dt) ? (it = "", ut != null && (it = ut.replace(ht, "$&/") + "/"), St(dt, $, it, "", function(Ke) {
      return Ke;
    })) : dt != null && (pt(dt) && (dt = _t(dt, it + (dt.key == null || C && C.key === dt.key ? "" : ("" + dt.key).replace(ht, "$&/") + "/") + ut)), $.push(dt)), 1;
    ut = 0;
    var Yt = at === "" ? "." : at + ":";
    if (et(C)) for (var kt = 0; kt < C.length; kt++) at = C[kt], vt = Yt + x(at, kt), ut += St(at, $, it, vt, dt);
    else if (kt = k(C), typeof kt == "function") for (C = kt.call(C), kt = 0; !(at = C.next()).done; ) at = at.value, vt = Yt + x(at, kt++), ut += St(at, $, it, vt, dt);
    else if (vt === "object") {
      if (typeof C.then == "function") return St(ot(C), $, it, at, dt);
      throw $ = String(C), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    }
    return ut;
  }
  function N(C, $, it) {
    if (C == null) return C;
    var at = [], dt = 0;
    return St(C, at, "", "", function(vt) {
      return $.call(it, vt, dt++);
    }), at;
  }
  function st(C) {
    if (C._status === -1) {
      var $ = C._result;
      $ = $(), $.then(function(it) {
        (C._status === 0 || C._status === -1) && (C._status = 1, C._result = it);
      }, function(it) {
        (C._status === 0 || C._status === -1) && (C._status = 2, C._result = it);
      }), C._status === -1 && (C._status = 0, C._result = $);
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var F = typeof reportError == "function" ? reportError : function(C) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var $ = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C), error: C });
      if (!window.dispatchEvent($)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", C);
      return;
    }
    console.error(C);
  };
  function Et() {
  }
  return Dt.Children = { map: N, forEach: function(C, $, it) {
    N(C, function() {
      $.apply(this, arguments);
    }, it);
  }, count: function(C) {
    var $ = 0;
    return N(C, function() {
      $++;
    }), $;
  }, toArray: function(C) {
    return N(C, function($) {
      return $;
    }) || [];
  }, only: function(C) {
    if (!pt(C)) throw Error("React.Children.only expected to receive a single React element child.");
    return C;
  } }, Dt.Component = X, Dt.Fragment = c, Dt.Profiler = m, Dt.PureComponent = ct, Dt.StrictMode = f, Dt.Suspense = w, Dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U, Dt.__COMPILER_RUNTIME = { __proto__: null, c: function(C) {
    return U.H.useMemoCache(C);
  } }, Dt.cache = function(C) {
    return function() {
      return C.apply(null, arguments);
    };
  }, Dt.cloneElement = function(C, $, it) {
    if (C == null) throw Error("The argument must be a React element, but you passed " + C + ".");
    var at = Z({}, C.props), dt = C.key, vt = void 0;
    if ($ != null) for (ut in $.ref !== void 0 && (vt = void 0), $.key !== void 0 && (dt = "" + $.key), $) !W.call($, ut) || ut === "key" || ut === "__self" || ut === "__source" || ut === "ref" && $.ref === void 0 || (at[ut] = $[ut]);
    var ut = arguments.length - 2;
    if (ut === 1) at.children = it;
    else if (1 < ut) {
      for (var Yt = Array(ut), kt = 0; kt < ut; kt++) Yt[kt] = arguments[kt + 2];
      at.children = Yt;
    }
    return ft(C.type, dt, void 0, void 0, vt, at);
  }, Dt.createContext = function(C) {
    return C = { $$typeof: y, _currentValue: C, _currentValue2: C, _threadCount: 0, Provider: null, Consumer: null }, C.Provider = C, C.Consumer = { $$typeof: g, _context: C }, C;
  }, Dt.createElement = function(C, $, it) {
    var at, dt = {}, vt = null;
    if ($ != null) for (at in $.key !== void 0 && (vt = "" + $.key), $) W.call($, at) && at !== "key" && at !== "__self" && at !== "__source" && (dt[at] = $[at]);
    var ut = arguments.length - 2;
    if (ut === 1) dt.children = it;
    else if (1 < ut) {
      for (var Yt = Array(ut), kt = 0; kt < ut; kt++) Yt[kt] = arguments[kt + 2];
      dt.children = Yt;
    }
    if (C && C.defaultProps) for (at in ut = C.defaultProps, ut) dt[at] === void 0 && (dt[at] = ut[at]);
    return ft(C, vt, void 0, void 0, null, dt);
  }, Dt.createRef = function() {
    return { current: null };
  }, Dt.forwardRef = function(C) {
    return { $$typeof: S, render: C };
  }, Dt.isValidElement = pt, Dt.lazy = function(C) {
    return { $$typeof: A, _payload: { _status: -1, _result: C }, _init: st };
  }, Dt.memo = function(C, $) {
    return { $$typeof: T, type: C, compare: $ === void 0 ? null : $ };
  }, Dt.startTransition = function(C) {
    var $ = U.T, it = {};
    U.T = it;
    try {
      var at = C(), dt = U.S;
      dt !== null && dt(it, at), typeof at == "object" && at !== null && typeof at.then == "function" && at.then(Et, F);
    } catch (vt) {
      F(vt);
    } finally {
      U.T = $;
    }
  }, Dt.unstable_useCacheRefresh = function() {
    return U.H.useCacheRefresh();
  }, Dt.use = function(C) {
    return U.H.use(C);
  }, Dt.useActionState = function(C, $, it) {
    return U.H.useActionState(C, $, it);
  }, Dt.useCallback = function(C, $) {
    return U.H.useCallback(C, $);
  }, Dt.useContext = function(C) {
    return U.H.useContext(C);
  }, Dt.useDebugValue = function() {
  }, Dt.useDeferredValue = function(C, $) {
    return U.H.useDeferredValue(C, $);
  }, Dt.useEffect = function(C, $, it) {
    var at = U.H;
    if (typeof it == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
    return at.useEffect(C, $);
  }, Dt.useId = function() {
    return U.H.useId();
  }, Dt.useImperativeHandle = function(C, $, it) {
    return U.H.useImperativeHandle(C, $, it);
  }, Dt.useInsertionEffect = function(C, $) {
    return U.H.useInsertionEffect(C, $);
  }, Dt.useLayoutEffect = function(C, $) {
    return U.H.useLayoutEffect(C, $);
  }, Dt.useMemo = function(C, $) {
    return U.H.useMemo(C, $);
  }, Dt.useOptimistic = function(C, $) {
    return U.H.useOptimistic(C, $);
  }, Dt.useReducer = function(C, $, it) {
    return U.H.useReducer(C, $, it);
  }, Dt.useRef = function(C) {
    return U.H.useRef(C);
  }, Dt.useState = function(C) {
    return U.H.useState(C);
  }, Dt.useSyncExternalStore = function(C, $, it) {
    return U.H.useSyncExternalStore(C, $, it);
  }, Dt.useTransition = function() {
    return U.H.useTransition();
  }, Dt.version = "19.1.0", Dt;
}
var Sg;
function Wh() {
  return Sg || (Sg = 1, Sh.exports = Bv()), Sh.exports;
}
var xh = { exports: {} }, tn = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var xg;
function Dv() {
  if (xg) return tn;
  xg = 1;
  var o2 = Wh();
  function s(w) {
    var T = "https://react.dev/errors/" + w;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var A = 2; A < arguments.length; A++) T += "&args[]=" + encodeURIComponent(arguments[A]);
    }
    return "Minified React error #" + w + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c() {
  }
  var f = { d: { f: c, r: function() {
    throw Error(s(522));
  }, D: c, C: c, L: c, m: c, X: c, S: c, M: c }, p: 0, findDOMNode: null }, m = Symbol.for("react.portal");
  function g(w, T, A) {
    var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: m, key: R == null ? null : "" + R, children: w, containerInfo: T, implementation: A };
  }
  var y = o2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function S(w, T) {
    if (w === "font") return "";
    if (typeof T == "string") return T === "use-credentials" ? T : "";
  }
  return tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, tn.createPortal = function(w, T) {
    var A = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11) throw Error(s(299));
    return g(w, T, null, A);
  }, tn.flushSync = function(w) {
    var T = y.T, A = f.p;
    try {
      if (y.T = null, f.p = 2, w) return w();
    } finally {
      y.T = T, f.p = A, f.d.f();
    }
  }, tn.preconnect = function(w, T) {
    typeof w == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, f.d.C(w, T));
  }, tn.prefetchDNS = function(w) {
    typeof w == "string" && f.d.D(w);
  }, tn.preinit = function(w, T) {
    if (typeof w == "string" && T && typeof T.as == "string") {
      var A = T.as, R = S(A, T.crossOrigin), k = typeof T.integrity == "string" ? T.integrity : void 0, V = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      A === "style" ? f.d.S(w, typeof T.precedence == "string" ? T.precedence : void 0, { crossOrigin: R, integrity: k, fetchPriority: V }) : A === "script" && f.d.X(w, { crossOrigin: R, integrity: k, fetchPriority: V, nonce: typeof T.nonce == "string" ? T.nonce : void 0 });
    }
  }, tn.preinitModule = function(w, T) {
    if (typeof w == "string") if (typeof T == "object" && T !== null) {
      if (T.as == null || T.as === "script") {
        var A = S(T.as, T.crossOrigin);
        f.d.M(w, { crossOrigin: A, integrity: typeof T.integrity == "string" ? T.integrity : void 0, nonce: typeof T.nonce == "string" ? T.nonce : void 0 });
      }
    } else T == null && f.d.M(w);
  }, tn.preload = function(w, T) {
    if (typeof w == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var A = T.as, R = S(A, T.crossOrigin);
      f.d.L(w, A, { crossOrigin: R, integrity: typeof T.integrity == "string" ? T.integrity : void 0, nonce: typeof T.nonce == "string" ? T.nonce : void 0, type: typeof T.type == "string" ? T.type : void 0, fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0, referrerPolicy: typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0, imageSrcSet: typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0, imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0, media: typeof T.media == "string" ? T.media : void 0 });
    }
  }, tn.preloadModule = function(w, T) {
    if (typeof w == "string") if (T) {
      var A = S(T.as, T.crossOrigin);
      f.d.m(w, { as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0, crossOrigin: A, integrity: typeof T.integrity == "string" ? T.integrity : void 0 });
    } else f.d.m(w);
  }, tn.requestFormReset = function(w) {
    f.d.r(w);
  }, tn.unstable_batchedUpdates = function(w, T) {
    return w(T);
  }, tn.useFormState = function(w, T, A) {
    return y.H.useFormState(w, T, A);
  }, tn.useFormStatus = function() {
    return y.H.useHostTransitionStatus();
  }, tn.version = "19.1.0", tn;
}
var Tg;
function x_() {
  if (Tg) return xh.exports;
  Tg = 1;
  function o2() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o2);
    } catch (s) {
      console.error(s);
    }
  }
  return o2(), xh.exports = Dv(), xh.exports;
}
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var wg;
function Nv() {
  if (wg) return tl;
  wg = 1;
  var o2 = Rv(), s = Wh(), c = x_();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++) e += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function m(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function g(t) {
    var e = t, i = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (i = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? i : null;
  }
  function y(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function S(t) {
    if (g(t) !== t) throw Error(f(188));
  }
  function w(t) {
    var e = t.alternate;
    if (!e) {
      if (e = g(t), e === null) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var i = t, r = e; ; ) {
      var u = i.return;
      if (u === null) break;
      var h = u.alternate;
      if (h === null) {
        if (r = u.return, r !== null) {
          i = r;
          continue;
        }
        break;
      }
      if (u.child === h.child) {
        for (h = u.child; h; ) {
          if (h === i) return S(u), t;
          if (h === r) return S(u), e;
          h = h.sibling;
        }
        throw Error(f(188));
      }
      if (i.return !== r.return) i = u, r = h;
      else {
        for (var _ = false, b = u.child; b; ) {
          if (b === i) {
            _ = true, i = u, r = h;
            break;
          }
          if (b === r) {
            _ = true, r = u, i = h;
            break;
          }
          b = b.sibling;
        }
        if (!_) {
          for (b = h.child; b; ) {
            if (b === i) {
              _ = true, i = h, r = u;
              break;
            }
            if (b === r) {
              _ = true, r = h, i = u;
              break;
            }
            b = b.sibling;
          }
          if (!_) throw Error(f(189));
        }
      }
      if (i.alternate !== r) throw Error(f(190));
    }
    if (i.tag !== 3) throw Error(f(188));
    return i.stateNode.current === i ? t : e;
  }
  function T(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = T(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var A = Object.assign, R = Symbol.for("react.element"), k = Symbol.for("react.transitional.element"), V = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler"), lt = Symbol.for("react.provider"), ct = Symbol.for("react.consumer"), nt = Symbol.for("react.context"), et = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), ft = Symbol.for("react.memo"), _t = Symbol.for("react.lazy"), pt = Symbol.for("react.activity"), yt = Symbol.for("react.memo_cache_sentinel"), ht = Symbol.iterator;
  function x(t) {
    return t === null || typeof t != "object" ? null : (t = ht && t[ht] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var mt = Symbol.for("react.client.reference");
  function ot(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === mt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Z:
        return "Fragment";
      case X:
        return "Profiler";
      case z:
        return "StrictMode";
      case U:
        return "Suspense";
      case W:
        return "SuspenseList";
      case pt:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case V:
        return "Portal";
      case nt:
        return (t.displayName || "Context") + ".Provider";
      case ct:
        return (t._context.displayName || "Context") + ".Consumer";
      case et:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case ft:
        return e = t.displayName || null, e !== null ? e : ot(t.type) || "Memo";
      case _t:
        e = t._payload, t = t._init;
        try {
          return ot(t(e));
        } catch {
        }
    }
    return null;
  }
  var St = Array.isArray, N = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, st = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = { pending: false, data: null, method: null, action: null }, Et = [], C = -1;
  function $(t) {
    return { current: t };
  }
  function it(t) {
    0 > C || (t.current = Et[C], Et[C] = null, C--);
  }
  function at(t, e) {
    C++, Et[C] = t.current, t.current = e;
  }
  var dt = $(null), vt = $(null), ut = $(null), Yt = $(null);
  function kt(t, e) {
    switch (at(ut, e), at(vt, t), at(dt, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Yp(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI) e = Yp(e), t = Vp(e, t);
        else switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0;
        }
    }
    it(dt), at(dt, t);
  }
  function Ke() {
    it(dt), it(vt), it(ut);
  }
  function Fn(t) {
    t.memoizedState !== null && at(Yt, t);
    var e = dt.current, i = Vp(e, t.type);
    e !== i && (at(vt, t), at(dt, i));
  }
  function Dn(t) {
    vt.current === t && (it(dt), it(vt)), Yt.current === t && (it(Yt), Ks._currentValue = F);
  }
  var un = Object.prototype.hasOwnProperty, Nn = o2.unstable_scheduleCallback, kn = o2.unstable_cancelCallback, Ri = o2.unstable_shouldYield, ca = o2.unstable_requestPaint, _e = o2.unstable_now, Qe = o2.unstable_getCurrentPriorityLevel, Be = o2.unstable_ImmediatePriority, yn = o2.unstable_UserBlockingPriority, cn = o2.unstable_NormalPriority, At = o2.unstable_LowPriority, cr = o2.unstable_IdlePriority, Vr = o2.log, $r = o2.unstable_setDisableYieldValue, ye = null, Pt = null;
  function ce(t) {
    if (typeof Vr == "function" && $r(t), Pt && typeof Pt.setStrictMode == "function") try {
      Pt.setStrictMode(ye, t);
    } catch {
    }
  }
  var re = Math.clz32 ? Math.clz32 : Tc, fa = Math.log, Xr = Math.LN2;
  function Tc(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (fa(t) / Xr | 0) | 0;
  }
  var fr = 256, ha = 4194304;
  function fi(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Kr(t, e, i) {
    var r = t.pendingLanes;
    if (r === 0) return 0;
    var u = 0, h = t.suspendedLanes, _ = t.pingedLanes;
    t = t.warmLanes;
    var b = r & 134217727;
    return b !== 0 ? (r = b & ~h, r !== 0 ? u = fi(r) : (_ &= b, _ !== 0 ? u = fi(_) : i || (i = b & ~t, i !== 0 && (u = fi(i))))) : (b = r & ~h, b !== 0 ? u = fi(b) : _ !== 0 ? u = fi(_) : i || (i = r & ~t, i !== 0 && (u = fi(i)))), u === 0 ? 0 : e !== 0 && e !== u && (e & h) === 0 && (h = u & -u, i = e & -e, h >= i || h === 32 && (i & 4194048) !== 0) ? e : u;
  }
  function ti(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function wc(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function bl() {
    var t = fr;
    return fr <<= 1, (fr & 4194048) === 0 && (fr = 256), t;
  }
  function Jo() {
    var t = ha;
    return ha <<= 1, (ha & 62914560) === 0 && (ha = 4194304), t;
  }
  function Qr(t) {
    for (var e = [], i = 0; 31 > i; i++) e.push(t);
    return e;
  }
  function da(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Cc(t, e, i, r, u, h) {
    var _ = t.pendingLanes;
    t.pendingLanes = i, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= i, t.entangledLanes &= i, t.errorRecoveryDisabledLanes &= i, t.shellSuspendCounter = 0;
    var b = t.entanglements, M = t.expirationTimes, H = t.hiddenUpdates;
    for (i = _ & ~i; 0 < i; ) {
      var Q = 31 - re(i), J = 1 << Q;
      b[Q] = 0, M[Q] = -1;
      var j = H[Q];
      if (j !== null) for (H[Q] = null, Q = 0; Q < j.length; Q++) {
        var G = j[Q];
        G !== null && (G.lane &= -536870913);
      }
      i &= ~J;
    }
    r !== 0 && Sl(t, r, 0), h !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= h & ~(_ & ~e));
  }
  function Sl(t, e, i) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var r = 31 - re(e);
    t.entangledLanes |= e, t.entanglements[r] = t.entanglements[r] | 1073741824 | i & 4194090;
  }
  function xl(t, e) {
    var i = t.entangledLanes |= e;
    for (t = t.entanglements; i; ) {
      var r = 31 - re(i), u = 1 << r;
      u & e | t[r] & e && (t[r] |= e), i &= ~u;
    }
  }
  function Fo(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function ts(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Tl() {
    var t = st.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : cg(t.type));
  }
  function es(t, e) {
    var i = st.p;
    try {
      return st.p = t, e();
    } finally {
      st.p = i;
    }
  }
  var hi = Math.random().toString(36).slice(2), De = "__reactFiber$" + hi, Ie = "__reactProps$" + hi, ma = "__reactContainer$" + hi, fn = "__reactEvents$" + hi, wt = "__reactListeners$" + hi, wl = "__reactHandles$" + hi, ns = "__reactResources$" + hi, pa = "__reactMarker$" + hi;
  function Ir(t) {
    delete t[De], delete t[Ie], delete t[fn], delete t[wt], delete t[wl];
  }
  function di(t) {
    var e = t[De];
    if (e) return e;
    for (var i = t.parentNode; i; ) {
      if (e = i[ma] || i[De]) {
        if (i = e.alternate, e.child !== null || i !== null && i.child !== null) for (t = Qp(t); t !== null; ) {
          if (i = t[De]) return i;
          t = Qp(t);
        }
        return e;
      }
      t = i, i = t.parentNode;
    }
    return null;
  }
  function Bi(t) {
    if (t = t[De] || t[ma]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function Pn(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function Di(t) {
    var e = t[ns];
    return e || (e = t[ns] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Me(t) {
    t[pa] = true;
  }
  var Cl = /* @__PURE__ */ new Set(), El = {};
  function Ni(t, e) {
    ki(t, e), ki(t + "Capture", e);
  }
  function ki(t, e) {
    for (El[t] = e, t = 0; t < e.length; t++) Cl.add(e[t]);
  }
  var Ec = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), hr = {}, Ml = {};
  function Mc(t) {
    return un.call(Ml, t) ? true : un.call(hr, t) ? false : Ec.test(t) ? Ml[t] = true : (hr[t] = true, false);
  }
  function Wr(t, e, i) {
    if (Mc(e)) if (i === null) t.removeAttribute(e);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(e);
          return;
        case "boolean":
          var r = e.toLowerCase().slice(0, 5);
          if (r !== "data-" && r !== "aria-") {
            t.removeAttribute(e);
            return;
          }
      }
      t.setAttribute(e, "" + i);
    }
  }
  function Jr(t, e, i) {
    if (i === null) t.removeAttribute(e);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + i);
    }
  }
  function ei(t, e, i, r) {
    if (r === null) t.removeAttribute(i);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(i);
          return;
      }
      t.setAttributeNS(e, i, "" + r);
    }
  }
  var dr, ga;
  function Pi(t) {
    if (dr === void 0) try {
      throw Error();
    } catch (i) {
      var e = i.stack.trim().match(/\n( *(at )?)/);
      dr = e && e[1] || "", ga = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + dr + t + ga;
  }
  var Fr = false;
  function Zi(t, e) {
    if (!t || Fr) return "";
    Fr = true;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = { DetermineComponentFrameRoot: function() {
        try {
          if (e) {
            var J = function() {
              throw Error();
            };
            if (Object.defineProperty(J.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(J, []);
              } catch (G) {
                var j = G;
              }
              Reflect.construct(t, [], J);
            } else {
              try {
                J.call();
              } catch (G) {
                j = G;
              }
              t.call(J.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (G) {
              j = G;
            }
            (J = t()) && typeof J.catch == "function" && J.catch(function() {
            });
          }
        } catch (G) {
          if (G && j && typeof G.stack == "string") return [G.stack, j.stack];
        }
        return [null, null];
      } };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
      u && u.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var h = r.DetermineComponentFrameRoot(), _ = h[0], b = h[1];
      if (_ && b) {
        var M = _.split(`
`), H = b.split(`
`);
        for (u = r = 0; r < M.length && !M[r].includes("DetermineComponentFrameRoot"); ) r++;
        for (; u < H.length && !H[u].includes("DetermineComponentFrameRoot"); ) u++;
        if (r === M.length || u === H.length) for (r = M.length - 1, u = H.length - 1; 1 <= r && 0 <= u && M[r] !== H[u]; ) u--;
        for (; 1 <= r && 0 <= u; r--, u--) if (M[r] !== H[u]) {
          if (r !== 1 || u !== 1) do
            if (r--, u--, 0 > u || M[r] !== H[u]) {
              var Q = `
` + M[r].replace(" at new ", " at ");
              return t.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", t.displayName)), Q;
            }
          while (1 <= r && 0 <= u);
          break;
        }
      }
    } finally {
      Fr = false, Error.prepareStackTrace = i;
    }
    return (i = t ? t.displayName || t.name : "") ? Pi(i) : "";
  }
  function qt(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Pi(t.type);
      case 16:
        return Pi("Lazy");
      case 13:
        return Pi("Suspense");
      case 19:
        return Pi("SuspenseList");
      case 0:
      case 15:
        return Zi(t.type, false);
      case 11:
        return Zi(t.type.render, false);
      case 1:
        return Zi(t.type, true);
      case 31:
        return Pi("Activity");
      default:
        return "";
    }
  }
  function oe(t) {
    try {
      var e = "";
      do
        e += qt(t), t = t.return;
      while (t);
      return e;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  function Ue(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Hi(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function _a(t) {
    var e = Hi(t) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), r = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var u = i.get, h = i.set;
      return Object.defineProperty(t, e, { configurable: true, get: function() {
        return u.call(this);
      }, set: function(_) {
        r = "" + _, h.call(this, _);
      } }), Object.defineProperty(t, e, { enumerable: i.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(_) {
        r = "" + _;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[e];
      } };
    }
  }
  function ya(t) {
    t._valueTracker || (t._valueTracker = _a(t));
  }
  function Bt(t) {
    if (!t) return false;
    var e = t._valueTracker;
    if (!e) return true;
    var i = e.getValue(), r = "";
    return t && (r = Hi(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== i ? (e.setValue(t), true) : false;
  }
  function se(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var is = /[\n"\\]/g;
  function je(t) {
    return t.replace(is, function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function We(t, e, i, r, u, h, _, b) {
    t.name = "", _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? t.type = _ : t.removeAttribute("type"), e != null ? _ === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ue(e)) : t.value !== "" + Ue(e) && (t.value = "" + Ue(e)) : _ !== "submit" && _ !== "reset" || t.removeAttribute("value"), e != null ? va(t, _, Ue(e)) : i != null ? va(t, _, Ue(i)) : r != null && t.removeAttribute("value"), u == null && h != null && (t.defaultChecked = !!h), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? t.name = "" + Ue(b) : t.removeAttribute("name");
  }
  function Al(t, e, i, r, u, h, _, b) {
    if (h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (t.type = h), e != null || i != null) {
      if (!(h !== "submit" && h !== "reset" || e != null)) return;
      i = i != null ? "" + Ue(i) : "", e = e != null ? "" + Ue(e) : i, b || e === t.value || (t.value = e), t.defaultValue = e;
    }
    r = r ?? u, r = typeof r != "function" && typeof r != "symbol" && !!r, t.checked = b ? t.checked : !!r, t.defaultChecked = !!r, _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" && (t.name = _);
  }
  function va(t, e, i) {
    e === "number" && se(t.ownerDocument) === t || t.defaultValue === "" + i || (t.defaultValue = "" + i);
  }
  function hn(t, e, i, r) {
    if (t = t.options, e) {
      e = {};
      for (var u = 0; u < i.length; u++) e["$" + i[u]] = true;
      for (i = 0; i < t.length; i++) u = e.hasOwnProperty("$" + t[i].value), t[i].selected !== u && (t[i].selected = u), u && r && (t[i].defaultSelected = true);
    } else {
      for (i = "" + Ue(i), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === i) {
          t[u].selected = true, r && (t[u].defaultSelected = true);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = true);
    }
  }
  function me(t, e, i) {
    if (e != null && (e = "" + Ue(e), e !== t.value && (t.value = e), i == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = i != null ? "" + Ue(i) : "";
  }
  function mi(t, e, i, r) {
    if (e == null) {
      if (r != null) {
        if (i != null) throw Error(f(92));
        if (St(r)) {
          if (1 < r.length) throw Error(f(93));
          r = r[0];
        }
        i = r;
      }
      i == null && (i = ""), e = i;
    }
    i = Ue(e), t.defaultValue = i, r = t.textContent, r === i && r !== "" && r !== null && (t.value = r);
  }
  function Zn(t, e) {
    if (e) {
      var i = t.firstChild;
      if (i && i === t.lastChild && i.nodeType === 3) {
        i.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var mr = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function to(t, e, i) {
    var r = e.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? r ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : r ? t.setProperty(e, i) : typeof i != "number" || i === 0 || mr.has(e) ? e === "float" ? t.cssFloat = i : t[e] = ("" + i).trim() : t[e] = i + "px";
  }
  function ba(t, e, i) {
    if (e != null && typeof e != "object") throw Error(f(62));
    if (t = t.style, i != null) {
      for (var r in i) !i.hasOwnProperty(r) || e != null && e.hasOwnProperty(r) || (r.indexOf("--") === 0 ? t.setProperty(r, "") : r === "float" ? t.cssFloat = "" : t[r] = "");
      for (var u in e) r = e[u], e.hasOwnProperty(u) && i[u] !== r && to(t, u, r);
    } else for (var h in e) e.hasOwnProperty(h) && to(t, h, e[h]);
  }
  function pr(t) {
    if (t.indexOf("-") === -1) return false;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var as = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), eo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Sa(t) {
    return eo.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var gr = null;
  function xa(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Ui = null, pi = null;
  function Ol(t) {
    var e = Bi(t);
    if (e && (t = e.stateNode)) {
      var i = t[Ie] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (We(t, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name), e = i.name, i.type === "radio" && e != null) {
            for (i = t; i.parentNode; ) i = i.parentNode;
            for (i = i.querySelectorAll('input[name="' + je("" + e) + '"][type="radio"]'), e = 0; e < i.length; e++) {
              var r = i[e];
              if (r !== t && r.form === t.form) {
                var u = r[Ie] || null;
                if (!u) throw Error(f(90));
                We(r, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
              }
            }
            for (e = 0; e < i.length; e++) r = i[e], r.form === t.form && Bt(r);
          }
          break t;
        case "textarea":
          me(t, i.value, i.defaultValue);
          break t;
        case "select":
          e = i.value, e != null && hn(t, !!i.multiple, e, false);
      }
    }
  }
  var Rt = false;
  function vn(t, e, i) {
    if (Rt) return t(e, i);
    Rt = true;
    try {
      var r = t(e);
      return r;
    } finally {
      if (Rt = false, (Ui !== null || pi !== null) && (Tu(), Ui && (e = Ui, t = pi, pi = Ui = null, Ol(e), t))) for (e = 0; e < t.length; e++) Ol(t[e]);
    }
  }
  function Vt(t, e) {
    var i = t.stateNode;
    if (i === null) return null;
    var r = i[Ie] || null;
    if (r === null) return null;
    i = r[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (t = t.type, r = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !r;
        break t;
      default:
        t = false;
    }
    if (t) return null;
    if (i && typeof i != "function") throw Error(f(231, e, typeof i));
    return i;
  }
  var Hn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _r = false;
  if (Hn) try {
    var ji = {};
    Object.defineProperty(ji, "passive", { get: function() {
      _r = true;
    } }), window.addEventListener("test", ji, ji), window.removeEventListener("test", ji, ji);
  } catch {
    _r = false;
  }
  var Un = null, ni = null, Ta = null;
  function wa() {
    if (Ta) return Ta;
    var t, e = ni, i = e.length, r, u = "value" in Un ? Un.value : Un.textContent, h = u.length;
    for (t = 0; t < i && e[t] === u[t]; t++) ;
    var _ = i - t;
    for (r = 1; r <= _ && e[i - r] === u[h - r]; r++) ;
    return Ta = u.slice(t, 1 < r ? 1 - r : void 0);
  }
  function ve(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function jn() {
    return true;
  }
  function rs() {
    return false;
  }
  function qe(t) {
    function e(i, r, u, h, _) {
      this._reactName = i, this._targetInst = u, this.type = r, this.nativeEvent = h, this.target = _, this.currentTarget = null;
      for (var b in t) t.hasOwnProperty(b) && (i = t[b], this[b] = i ? i(h) : h[b]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === false) ? jn : rs, this.isPropagationStopped = rs, this;
    }
    return A(e.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var i = this.nativeEvent;
      i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = false), this.isDefaultPrevented = jn);
    }, stopPropagation: function() {
      var i = this.nativeEvent;
      i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = true), this.isPropagationStopped = jn);
    }, persist: function() {
    }, isPersistent: jn }), e;
  }
  var qi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, yr = qe(qi), Gi = A({}, qi, { view: 0, detail: 0 }), Ac = qe(Gi), no, Zt, vr, Je = A({}, Gi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: io, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== vr && (vr && t.type === "mousemove" ? (no = t.screenX - vr.screenX, Zt = t.screenY - vr.screenY) : Zt = no = 0, vr = t), no);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : Zt;
  } }), Ca = qe(Je), Ll = A({}, Je, { dataTransfer: 0 }), Oc = qe(Ll), os = A({}, Gi, { relatedTarget: 0 }), ss = qe(os), zl = A({}, qi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Lc = qe(zl), zc = A({}, qi, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), ls = qe(zc), Rc = A({}, qi, { data: 0 }), bn = qe(Rc), Bc = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Rl = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, gi = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Bl(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = gi[t]) ? !!e[t] : false;
  }
  function io() {
    return Bl;
  }
  var us = A({}, Gi, { key: function(t) {
    if (t.key) {
      var e = Bc[t.key] || t.key;
      if (e !== "Unidentified") return e;
    }
    return t.type === "keypress" ? (t = ve(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Rl[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: io, charCode: function(t) {
    return t.type === "keypress" ? ve(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? ve(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), Dc = qe(us), Dl = A({}, Je, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cs = qe(Dl), Nc = A({}, Gi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: io }), kc = qe(Nc), fs = A({}, qi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Pc = qe(fs), Nl = A({}, Je, { deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  }, deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), kl = qe(Nl), ao = A({}, qi, { newState: 0, oldState: 0 }), Yi = qe(ao), Zc = [9, 13, 27, 32], Vi = Hn && "CompositionEvent" in window, Ne = null;
  Hn && "documentMode" in document && (Ne = document.documentMode);
  var Pl = Hn && "TextEvent" in window && !Ne, hs = Hn && (!Vi || Ne && 8 < Ne && 11 >= Ne), Zl = " ", ro = false;
  function oo(t, e) {
    switch (t) {
      case "keyup":
        return Zc.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function Hl(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ea = false;
  function Ul(t, e) {
    switch (t) {
      case "compositionend":
        return Hl(e);
      case "keypress":
        return e.which !== 32 ? null : (ro = true, Zl);
      case "textInput":
        return t = e.data, t === Zl && ro ? null : t;
      default:
        return null;
    }
  }
  function Hc(t, e) {
    if (Ea) return t === "compositionend" || !Vi && oo(t, e) ? (t = wa(), Ta = ni = Un = null, Ea = false, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return hs && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Sn = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function $i(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Sn[t.type] : e === "textarea";
  }
  function jl(t, e, i, r) {
    Ui ? pi ? pi.push(r) : pi = [r] : Ui = r, e = Ou(e, "onChange"), 0 < e.length && (i = new yr("onChange", "change", null, i, r), t.push({ event: i, listeners: e }));
  }
  var nn = null, br = null;
  function Ma(t) {
    Hp(t, 0);
  }
  function so(t) {
    var e = Pn(t);
    if (Bt(e)) return t;
  }
  function Aa(t, e) {
    if (t === "change") return e;
  }
  var ds = false;
  if (Hn) {
    var Oa;
    if (Hn) {
      var ms = "oninput" in document;
      if (!ms) {
        var ii = document.createElement("div");
        ii.setAttribute("oninput", "return;"), ms = typeof ii.oninput == "function";
      }
      Oa = ms;
    } else Oa = false;
    ds = Oa && (!document.documentMode || 9 < document.documentMode);
  }
  function Sr() {
    nn && (nn.detachEvent("onpropertychange", ql), br = nn = null);
  }
  function ql(t) {
    if (t.propertyName === "value" && so(br)) {
      var e = [];
      jl(e, br, t, xa(t)), vn(Ma, e);
    }
  }
  function ps(t, e, i) {
    t === "focusin" ? (Sr(), nn = e, br = i, nn.attachEvent("onpropertychange", ql)) : t === "focusout" && Sr();
  }
  function Uc(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return so(br);
  }
  function ai(t, e) {
    if (t === "click") return so(e);
  }
  function jc(t, e) {
    if (t === "input" || t === "change") return so(e);
  }
  function La(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var an = typeof Object.is == "function" ? Object.is : La;
  function rn(t, e) {
    if (an(t, e)) return true;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
    var i = Object.keys(t), r = Object.keys(e);
    if (i.length !== r.length) return false;
    for (r = 0; r < i.length; r++) {
      var u = i[r];
      if (!un.call(e, u) || !an(t[u], e[u])) return false;
    }
    return true;
  }
  function xr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function gs(t, e) {
    var i = xr(t);
    t = 0;
    for (var r; i; ) {
      if (i.nodeType === 3) {
        if (r = t + i.textContent.length, t <= e && r >= e) return { node: i, offset: e - t };
        t = r;
      }
      t: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break t;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = xr(i);
    }
  }
  function lo(t, e) {
    return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? lo(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
  }
  function Tr(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = se(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var i = typeof e.contentWindow.location.href == "string";
      } catch {
        i = false;
      }
      if (i) t = e.contentWindow;
      else break;
      e = se(t.document);
    }
    return e;
  }
  function wr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var uo = Hn && "documentMode" in document && 11 >= document.documentMode, xn = null, za = null, Xi = null, co = false;
  function Gl(t, e, i) {
    var r = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    co || xn == null || xn !== se(r) || (r = xn, "selectionStart" in r && wr(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Xi && rn(Xi, r) || (Xi = r, r = Ou(za, "onSelect"), 0 < r.length && (e = new yr("onSelect", "select", null, e, i), t.push({ event: e, listeners: r }), e.target = xn)));
  }
  function qn(t, e) {
    var i = {};
    return i[t.toLowerCase()] = e.toLowerCase(), i["Webkit" + t] = "webkit" + e, i["Moz" + t] = "moz" + e, i;
  }
  var Ra = { animationend: qn("Animation", "AnimationEnd"), animationiteration: qn("Animation", "AnimationIteration"), animationstart: qn("Animation", "AnimationStart"), transitionrun: qn("Transition", "TransitionRun"), transitionstart: qn("Transition", "TransitionStart"), transitioncancel: qn("Transition", "TransitionCancel"), transitionend: qn("Transition", "TransitionEnd") }, fo = {}, Yl = {};
  Hn && (Yl = document.createElement("div").style, "AnimationEvent" in window || (delete Ra.animationend.animation, delete Ra.animationiteration.animation, delete Ra.animationstart.animation), "TransitionEvent" in window || delete Ra.transitionend.transition);
  function _i(t) {
    if (fo[t]) return fo[t];
    if (!Ra[t]) return t;
    var e = Ra[t], i;
    for (i in e) if (e.hasOwnProperty(i) && i in Yl) return fo[t] = e[i];
    return t;
  }
  var Vl = _i("animationend"), Tn = _i("animationiteration"), Cr = _i("animationstart"), qc = _i("transitionrun"), ho = _i("transitionstart"), Gc = _i("transitioncancel"), _s = _i("transitionend"), $l = /* @__PURE__ */ new Map(), Ki = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Ki.push("scrollEnd");
  function wn(t, e) {
    $l.set(t, e), Ni(e, [t]);
  }
  var Qi = /* @__PURE__ */ new WeakMap();
  function on(t, e) {
    if (typeof t == "object" && t !== null) {
      var i = Qi.get(t);
      return i !== void 0 ? i : (e = { value: t, source: e, stack: oe(e) }, Qi.set(t, e), e);
    }
    return { value: t, source: e, stack: oe(e) };
  }
  var sn = [], Ba = 0, Cn = 0;
  function Er() {
    for (var t = Ba, e = Cn = Ba = 0; e < t; ) {
      var i = sn[e];
      sn[e++] = null;
      var r = sn[e];
      sn[e++] = null;
      var u = sn[e];
      sn[e++] = null;
      var h = sn[e];
      if (sn[e++] = null, r !== null && u !== null) {
        var _ = r.pending;
        _ === null ? u.next = u : (u.next = _.next, _.next = u), r.pending = u;
      }
      h !== 0 && Ar(i, u, h);
    }
  }
  function Mr(t, e, i, r) {
    sn[Ba++] = t, sn[Ba++] = e, sn[Ba++] = i, sn[Ba++] = r, Cn |= r, t.lanes |= r, t = t.alternate, t !== null && (t.lanes |= r);
  }
  function Ii(t, e, i, r) {
    return Mr(t, e, i, r), yi(t);
  }
  function Da(t, e) {
    return Mr(t, null, null, e), yi(t);
  }
  function Ar(t, e, i) {
    t.lanes |= i;
    var r = t.alternate;
    r !== null && (r.lanes |= i);
    for (var u = false, h = t.return; h !== null; ) h.childLanes |= i, r = h.alternate, r !== null && (r.childLanes |= i), h.tag === 22 && (t = h.stateNode, t === null || t._visibility & 1 || (u = true)), t = h, h = h.return;
    return t.tag === 3 ? (h = t.stateNode, u && e !== null && (u = 31 - re(i), t = h.hiddenUpdates, r = t[u], r === null ? t[u] = [e] : r.push(e), e.lane = i | 536870912), h) : null;
  }
  function yi(t) {
    if (50 < Us) throw Us = 0, jf = null, Error(f(185));
    for (var e = t.return; e !== null; ) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Wi = {};
  function Xl(t, e, i, r) {
    this.tag = t, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ln(t, e, i, r) {
    return new Xl(t, e, i, r);
  }
  function mo(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Gn(t, e) {
    var i = t.alternate;
    return i === null ? (i = ln(t.tag, e, t.key, t.mode), i.elementType = t.elementType, i.type = t.type, i.stateNode = t.stateNode, i.alternate = t, t.alternate = i) : (i.pendingProps = e, i.type = t.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = t.flags & 65011712, i.childLanes = t.childLanes, i.lanes = t.lanes, i.child = t.child, i.memoizedProps = t.memoizedProps, i.memoizedState = t.memoizedState, i.updateQueue = t.updateQueue, e = t.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, i.sibling = t.sibling, i.index = t.index, i.ref = t.ref, i.refCleanup = t.refCleanup, i;
  }
  function ys(t, e) {
    t.flags &= 65011714;
    var i = t.alternate;
    return i === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = i.childLanes, t.lanes = i.lanes, t.child = i.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = i.memoizedProps, t.memoizedState = i.memoizedState, t.updateQueue = i.updateQueue, t.type = i.type, e = i.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t;
  }
  function Or(t, e, i, r, u, h) {
    var _ = 0;
    if (r = t, typeof t == "function") mo(t) && (_ = 1);
    else if (typeof t == "string") _ = pv(t, i, dt.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case pt:
        return t = ln(31, i, e, u), t.elementType = pt, t.lanes = h, t;
      case Z:
        return vi(i.children, u, h, e);
      case z:
        _ = 8, u |= 24;
        break;
      case X:
        return t = ln(12, i, e, u | 2), t.elementType = X, t.lanes = h, t;
      case U:
        return t = ln(13, i, e, u), t.elementType = U, t.lanes = h, t;
      case W:
        return t = ln(19, i, e, u), t.elementType = W, t.lanes = h, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case lt:
          case nt:
            _ = 10;
            break t;
          case ct:
            _ = 9;
            break t;
          case et:
            _ = 11;
            break t;
          case ft:
            _ = 14;
            break t;
          case _t:
            _ = 16, r = null;
            break t;
        }
        _ = 29, i = Error(f(130, t === null ? "null" : typeof t, "")), r = null;
    }
    return e = ln(_, i, e, u), e.elementType = t, e.type = r, e.lanes = h, e;
  }
  function vi(t, e, i, r) {
    return t = ln(7, t, r, e), t.lanes = i, t;
  }
  function vs(t, e, i) {
    return t = ln(6, t, null, e), t.lanes = i, t;
  }
  function po(t, e, i) {
    return e = ln(4, t.children !== null ? t.children : [], t.key, e), e.lanes = i, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
  }
  var Ji = [], Na = 0, n = null, a = 0, l = [], d = 0, p = null, v = 1, E = "";
  function D(t, e) {
    Ji[Na++] = a, Ji[Na++] = n, n = t, a = e;
  }
  function Y(t, e, i) {
    l[d++] = v, l[d++] = E, l[d++] = p, p = t;
    var r = v;
    t = E;
    var u = 32 - re(r) - 1;
    r &= ~(1 << u), i += 1;
    var h = 32 - re(e) + u;
    if (30 < h) {
      var _ = u - u % 5;
      h = (r & (1 << _) - 1).toString(32), r >>= _, u -= _, v = 1 << 32 - re(e) + u | i << u | r, E = h + t;
    } else v = 1 << h | i << u | r, E = t;
  }
  function tt(t) {
    t.return !== null && (D(t, 1), Y(t, 1, 0));
  }
  function gt(t) {
    for (; t === n; ) n = Ji[--Na], Ji[Na] = null, a = Ji[--Na], Ji[Na] = null;
    for (; t === p; ) p = l[--d], l[d] = null, E = l[--d], l[d] = null, v = l[--d], l[d] = null;
  }
  var bt = null, Tt = null, zt = false, le = null, pe = false, ke = Error(f(519));
  function dn(t) {
    var e = Error(f(418, ""));
    throw Pa(on(e, t)), ke;
  }
  function Kl(t) {
    var e = t.stateNode, i = t.type, r = t.memoizedProps;
    switch (e[De] = t, e[Ie] = r, i) {
      case "dialog":
        jt("cancel", e), jt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        jt("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < qs.length; i++) jt(qs[i], e);
        break;
      case "source":
        jt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        jt("error", e), jt("load", e);
        break;
      case "details":
        jt("toggle", e);
        break;
      case "input":
        jt("invalid", e), Al(e, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, true), ya(e);
        break;
      case "select":
        jt("invalid", e);
        break;
      case "textarea":
        jt("invalid", e), mi(e, r.value, r.defaultValue, r.children), ya(e);
    }
    i = r.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || e.textContent === "" + i || r.suppressHydrationWarning === true || Gp(e.textContent, i) ? (r.popover != null && (jt("beforetoggle", e), jt("toggle", e)), r.onScroll != null && jt("scroll", e), r.onScrollEnd != null && jt("scrollend", e), r.onClick != null && (e.onclick = Lu), e = true) : e = false, e || dn(t);
  }
  function Ql(t) {
    for (bt = t.return; bt; ) switch (bt.tag) {
      case 5:
      case 13:
        pe = false;
        return;
      case 27:
      case 3:
        pe = true;
        return;
      default:
        bt = bt.return;
    }
  }
  function Lr(t) {
    if (t !== bt) return false;
    if (!zt) return Ql(t), zt = true, false;
    var e = t.tag, i;
    if ((i = e !== 3 && e !== 27) && ((i = e === 5) && (i = t.type, i = !(i !== "form" && i !== "button") || ih(t.type, t.memoizedProps)), i = !i), i && Tt && dn(t), Ql(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8) if (i = t.data, i === "/$") {
            if (e === 0) {
              Tt = li(t.nextSibling);
              break t;
            }
            e--;
          } else i !== "$" && i !== "$!" && i !== "$?" || e++;
          t = t.nextSibling;
        }
        Tt = null;
      }
    } else e === 27 ? (e = Tt, Ja(t.type) ? (t = sh, sh = null, Tt = t) : Tt = e) : Tt = bt ? li(t.stateNode.nextSibling) : null;
    return true;
  }
  function ka() {
    Tt = bt = null, zt = false;
  }
  function Il() {
    var t = le;
    return t !== null && (gn === null ? gn = t : gn.push.apply(gn, t), le = null), t;
  }
  function Pa(t) {
    le === null ? le = [t] : le.push(t);
  }
  var fe = $(null), Yn = null, ri = null;
  function bi(t, e, i) {
    at(fe, e._currentValue), e._currentValue = i;
  }
  function oi(t) {
    t._currentValue = fe.current, it(fe);
  }
  function zr(t, e, i) {
    for (; t !== null; ) {
      var r = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), t === i) break;
      t = t.return;
    }
  }
  function go(t, e, i, r) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var h = u.dependencies;
      if (h !== null) {
        var _ = u.child;
        h = h.firstContext;
        t: for (; h !== null; ) {
          var b = h;
          h = u;
          for (var M = 0; M < e.length; M++) if (b.context === e[M]) {
            h.lanes |= i, b = h.alternate, b !== null && (b.lanes |= i), zr(h.return, i, t), r || (_ = null);
            break t;
          }
          h = b.next;
        }
      } else if (u.tag === 18) {
        if (_ = u.return, _ === null) throw Error(f(341));
        _.lanes |= i, h = _.alternate, h !== null && (h.lanes |= i), zr(_, i, t), _ = null;
      } else _ = u.child;
      if (_ !== null) _.return = u;
      else for (_ = u; _ !== null; ) {
        if (_ === t) {
          _ = null;
          break;
        }
        if (u = _.sibling, u !== null) {
          u.return = _.return, _ = u;
          break;
        }
        _ = _.return;
      }
      u = _;
    }
  }
  function Rr(t, e, i, r) {
    t = null;
    for (var u = e, h = false; u !== null; ) {
      if (!h) {
        if ((u.flags & 524288) !== 0) h = true;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var _ = u.alternate;
        if (_ === null) throw Error(f(387));
        if (_ = _.memoizedProps, _ !== null) {
          var b = u.type;
          an(u.pendingProps.value, _.value) || (t !== null ? t.push(b) : t = [b]);
        }
      } else if (u === Yt.current) {
        if (_ = u.alternate, _ === null) throw Error(f(387));
        _.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Ks) : t = [Ks]);
      }
      u = u.return;
    }
    t !== null && go(e, t, i, r), e.flags |= 262144;
  }
  function Wl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!an(t.context._currentValue, t.memoizedValue)) return true;
      t = t.next;
    }
    return false;
  }
  function Br(t) {
    Yn = t, ri = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Fe(t) {
    return Od(Yn, t);
  }
  function Jl(t, e) {
    return Yn === null && Br(t), Od(t, e);
  }
  function Od(t, e) {
    var i = e._currentValue;
    if (e = { context: e, memoizedValue: i, next: null }, ri === null) {
      if (t === null) throw Error(f(308));
      ri = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else ri = ri.next = e;
    return i;
  }
  var my = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = { aborted: false, addEventListener: function(i, r) {
      t.push(r);
    } };
    this.abort = function() {
      e.aborted = true, t.forEach(function(i) {
        return i();
      });
    };
  }, py = o2.unstable_scheduleCallback, gy = o2.unstable_NormalPriority, ze = { $$typeof: nt, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Yc() {
    return { controller: new my(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function bs(t) {
    t.refCount--, t.refCount === 0 && py(gy, function() {
      t.controller.abort();
    });
  }
  var Ss = null, Vc = 0, _o = 0, yo = null;
  function _y(t, e) {
    if (Ss === null) {
      var i = Ss = [];
      Vc = 0, _o = Kf(), yo = { status: "pending", value: void 0, then: function(r) {
        i.push(r);
      } };
    }
    return Vc++, e.then(Ld, Ld), e;
  }
  function Ld() {
    if (--Vc === 0 && Ss !== null) {
      yo !== null && (yo.status = "fulfilled");
      var t = Ss;
      Ss = null, _o = 0, yo = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function yy(t, e) {
    var i = [], r = { status: "pending", value: null, reason: null, then: function(u) {
      i.push(u);
    } };
    return t.then(function() {
      r.status = "fulfilled", r.value = e;
      for (var u = 0; u < i.length; u++) (0, i[u])(e);
    }, function(u) {
      for (r.status = "rejected", r.reason = u, u = 0; u < i.length; u++) (0, i[u])(void 0);
    }), r;
  }
  var zd = N.S;
  N.S = function(t, e) {
    typeof e == "object" && e !== null && typeof e.then == "function" && _y(t, e), zd !== null && zd(t, e);
  };
  var Dr = $(null);
  function $c() {
    var t = Dr.current;
    return t !== null ? t : ue.pooledCache;
  }
  function Fl(t, e) {
    e === null ? at(Dr, Dr.current) : at(Dr, e.pool);
  }
  function Rd() {
    var t = $c();
    return t === null ? null : { parent: ze._currentValue, pool: t };
  }
  var xs = Error(f(460)), Bd = Error(f(474)), tu = Error(f(542)), Xc = { then: function() {
  } };
  function Dd(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function eu() {
  }
  function Nd(t, e, i) {
    switch (i = t[i], i === void 0 ? t.push(e) : i !== e && (e.then(eu, eu), e = i), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Pd(t), t;
      default:
        if (typeof e.status == "string") e.then(eu, eu);
        else {
          if (t = ue, t !== null && 100 < t.shellSuspendCounter) throw Error(f(482));
          t = e, t.status = "pending", t.then(function(r) {
            if (e.status === "pending") {
              var u = e;
              u.status = "fulfilled", u.value = r;
            }
          }, function(r) {
            if (e.status === "pending") {
              var u = e;
              u.status = "rejected", u.reason = r;
            }
          });
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Pd(t), t;
        }
        throw Ts = e, xs;
    }
  }
  var Ts = null;
  function kd() {
    if (Ts === null) throw Error(f(459));
    var t = Ts;
    return Ts = null, t;
  }
  function Pd(t) {
    if (t === xs || t === tu) throw Error(f(483));
  }
  var Za = false;
  function Kc(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Qc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null });
  }
  function Ha(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ua(t, e, i) {
    var r = t.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (It & 2) !== 0) {
      var u = r.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), r.pending = e, e = yi(t), Ar(t, null, i), e;
    }
    return Mr(t, r, e, i), yi(t);
  }
  function ws(t, e, i) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (i & 4194048) !== 0)) {
      var r = e.lanes;
      r &= t.pendingLanes, i |= r, e.lanes = i, xl(t, i);
    }
  }
  function Ic(t, e) {
    var i = t.updateQueue, r = t.alternate;
    if (r !== null && (r = r.updateQueue, i === r)) {
      var u = null, h = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var _ = { lane: i.lane, tag: i.tag, payload: i.payload, callback: null, next: null };
          h === null ? u = h = _ : h = h.next = _, i = i.next;
        } while (i !== null);
        h === null ? u = h = e : h = h.next = e;
      } else u = h = e;
      i = { baseState: r.baseState, firstBaseUpdate: u, lastBaseUpdate: h, shared: r.shared, callbacks: r.callbacks }, t.updateQueue = i;
      return;
    }
    t = i.lastBaseUpdate, t === null ? i.firstBaseUpdate = e : t.next = e, i.lastBaseUpdate = e;
  }
  var Wc = false;
  function Cs() {
    if (Wc) {
      var t = yo;
      if (t !== null) throw t;
    }
  }
  function Es(t, e, i, r) {
    Wc = false;
    var u = t.updateQueue;
    Za = false;
    var h = u.firstBaseUpdate, _ = u.lastBaseUpdate, b = u.shared.pending;
    if (b !== null) {
      u.shared.pending = null;
      var M = b, H = M.next;
      M.next = null, _ === null ? h = H : _.next = H, _ = M;
      var Q = t.alternate;
      Q !== null && (Q = Q.updateQueue, b = Q.lastBaseUpdate, b !== _ && (b === null ? Q.firstBaseUpdate = H : b.next = H, Q.lastBaseUpdate = M));
    }
    if (h !== null) {
      var J = u.baseState;
      _ = 0, Q = H = M = null, b = h;
      do {
        var j = b.lane & -536870913, G = j !== b.lane;
        if (G ? (Gt & j) === j : (r & j) === j) {
          j !== 0 && j === _o && (Wc = true), Q !== null && (Q = Q.next = { lane: 0, tag: b.tag, payload: b.payload, callback: null, next: null });
          t: {
            var Lt = t, Mt = b;
            j = e;
            var ne = i;
            switch (Mt.tag) {
              case 1:
                if (Lt = Mt.payload, typeof Lt == "function") {
                  J = Lt.call(ne, J, j);
                  break t;
                }
                J = Lt;
                break t;
              case 3:
                Lt.flags = Lt.flags & -65537 | 128;
              case 0:
                if (Lt = Mt.payload, j = typeof Lt == "function" ? Lt.call(ne, J, j) : Lt, j == null) break t;
                J = A({}, J, j);
                break t;
              case 2:
                Za = true;
            }
          }
          j = b.callback, j !== null && (t.flags |= 64, G && (t.flags |= 8192), G = u.callbacks, G === null ? u.callbacks = [j] : G.push(j));
        } else G = { lane: j, tag: b.tag, payload: b.payload, callback: b.callback, next: null }, Q === null ? (H = Q = G, M = J) : Q = Q.next = G, _ |= j;
        if (b = b.next, b === null) {
          if (b = u.shared.pending, b === null) break;
          G = b, b = G.next, G.next = null, u.lastBaseUpdate = G, u.shared.pending = null;
        }
      } while (true);
      Q === null && (M = J), u.baseState = M, u.firstBaseUpdate = H, u.lastBaseUpdate = Q, h === null && (u.shared.lanes = 0), Ka |= _, t.lanes = _, t.memoizedState = J;
    }
  }
  function Zd(t, e) {
    if (typeof t != "function") throw Error(f(191, t));
    t.call(e);
  }
  function Hd(t, e) {
    var i = t.callbacks;
    if (i !== null) for (t.callbacks = null, t = 0; t < i.length; t++) Zd(i[t], e);
  }
  var vo = $(null), nu = $(0);
  function Ud(t, e) {
    t = ra, at(nu, t), at(vo, e), ra = t | e.baseLanes;
  }
  function Jc() {
    at(nu, ra), at(vo, vo.current);
  }
  function Fc() {
    ra = nu.current, it(vo), it(nu);
  }
  var ja = 0, Nt = null, te = null, Ae = null, iu = false, bo = false, Nr = false, au = 0, Ms = 0, So = null, vy = 0;
  function Te() {
    throw Error(f(321));
  }
  function tf(t, e) {
    if (e === null) return false;
    for (var i = 0; i < e.length && i < t.length; i++) if (!an(t[i], e[i])) return false;
    return true;
  }
  function ef(t, e, i, r, u, h) {
    return ja = h, Nt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, N.H = t === null || t.memoizedState === null ? Tm : wm, Nr = false, h = i(r, u), Nr = false, bo && (h = qd(e, i, r, u)), jd(t), h;
  }
  function jd(t) {
    N.H = cu;
    var e = te !== null && te.next !== null;
    if (ja = 0, Ae = te = Nt = null, iu = false, Ms = 0, So = null, e) throw Error(f(300));
    t === null || Pe || (t = t.dependencies, t !== null && Wl(t) && (Pe = true));
  }
  function qd(t, e, i, r) {
    Nt = t;
    var u = 0;
    do {
      if (bo && (So = null), Ms = 0, bo = false, 25 <= u) throw Error(f(301));
      if (u += 1, Ae = te = null, t.updateQueue != null) {
        var h = t.updateQueue;
        h.lastEffect = null, h.events = null, h.stores = null, h.memoCache != null && (h.memoCache.index = 0);
      }
      N.H = Ey, h = e(i, r);
    } while (bo);
    return h;
  }
  function by() {
    var t = N.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? As(e) : e, t = t.useState()[0], (te !== null ? te.memoizedState : null) !== t && (Nt.flags |= 1024), e;
  }
  function nf() {
    var t = au !== 0;
    return au = 0, t;
  }
  function af(t, e, i) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i;
  }
  function rf(t) {
    if (iu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      iu = false;
    }
    ja = 0, Ae = te = Nt = null, bo = false, Ms = au = 0, So = null;
  }
  function mn() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ae === null ? Nt.memoizedState = Ae = t : Ae = Ae.next = t, Ae;
  }
  function Oe() {
    if (te === null) {
      var t = Nt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = te.next;
    var e = Ae === null ? Nt.memoizedState : Ae.next;
    if (e !== null) Ae = e, te = t;
    else {
      if (t === null) throw Nt.alternate === null ? Error(f(467)) : Error(f(310));
      te = t, t = { memoizedState: te.memoizedState, baseState: te.baseState, baseQueue: te.baseQueue, queue: te.queue, next: null }, Ae === null ? Nt.memoizedState = Ae = t : Ae = Ae.next = t;
    }
    return Ae;
  }
  function of() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function As(t) {
    var e = Ms;
    return Ms += 1, So === null && (So = []), t = Nd(So, t, e), e = Nt, (Ae === null ? e.memoizedState : Ae.next) === null && (e = e.alternate, N.H = e === null || e.memoizedState === null ? Tm : wm), t;
  }
  function ru(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return As(t);
      if (t.$$typeof === nt) return Fe(t);
    }
    throw Error(f(438, String(t)));
  }
  function sf(t) {
    var e = null, i = Nt.updateQueue;
    if (i !== null && (e = i.memoCache), e == null) {
      var r = Nt.alternate;
      r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (e = { data: r.data.map(function(u) {
        return u.slice();
      }), index: 0 })));
    }
    if (e == null && (e = { data: [], index: 0 }), i === null && (i = of(), Nt.updateQueue = i), i.memoCache = e, i = e.data[e.index], i === void 0) for (i = e.data[e.index] = Array(t), r = 0; r < t; r++) i[r] = yt;
    return e.index++, i;
  }
  function Fi(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ou(t) {
    var e = Oe();
    return lf(e, te, t);
  }
  function lf(t, e, i) {
    var r = t.queue;
    if (r === null) throw Error(f(311));
    r.lastRenderedReducer = i;
    var u = t.baseQueue, h = r.pending;
    if (h !== null) {
      if (u !== null) {
        var _ = u.next;
        u.next = h.next, h.next = _;
      }
      e.baseQueue = u = h, r.pending = null;
    }
    if (h = t.baseState, u === null) t.memoizedState = h;
    else {
      e = u.next;
      var b = _ = null, M = null, H = e, Q = false;
      do {
        var J = H.lane & -536870913;
        if (J !== H.lane ? (Gt & J) === J : (ja & J) === J) {
          var j = H.revertLane;
          if (j === 0) M !== null && (M = M.next = { lane: 0, revertLane: 0, action: H.action, hasEagerState: H.hasEagerState, eagerState: H.eagerState, next: null }), J === _o && (Q = true);
          else if ((ja & j) === j) {
            H = H.next, j === _o && (Q = true);
            continue;
          } else J = { lane: 0, revertLane: H.revertLane, action: H.action, hasEagerState: H.hasEagerState, eagerState: H.eagerState, next: null }, M === null ? (b = M = J, _ = h) : M = M.next = J, Nt.lanes |= j, Ka |= j;
          J = H.action, Nr && i(h, J), h = H.hasEagerState ? H.eagerState : i(h, J);
        } else j = { lane: J, revertLane: H.revertLane, action: H.action, hasEagerState: H.hasEagerState, eagerState: H.eagerState, next: null }, M === null ? (b = M = j, _ = h) : M = M.next = j, Nt.lanes |= J, Ka |= J;
        H = H.next;
      } while (H !== null && H !== e);
      if (M === null ? _ = h : M.next = b, !an(h, t.memoizedState) && (Pe = true, Q && (i = yo, i !== null))) throw i;
      t.memoizedState = h, t.baseState = _, t.baseQueue = M, r.lastRenderedState = h;
    }
    return u === null && (r.lanes = 0), [t.memoizedState, r.dispatch];
  }
  function uf(t) {
    var e = Oe(), i = e.queue;
    if (i === null) throw Error(f(311));
    i.lastRenderedReducer = t;
    var r = i.dispatch, u = i.pending, h = e.memoizedState;
    if (u !== null) {
      i.pending = null;
      var _ = u = u.next;
      do
        h = t(h, _.action), _ = _.next;
      while (_ !== u);
      an(h, e.memoizedState) || (Pe = true), e.memoizedState = h, e.baseQueue === null && (e.baseState = h), i.lastRenderedState = h;
    }
    return [h, r];
  }
  function Gd(t, e, i) {
    var r = Nt, u = Oe(), h = zt;
    if (h) {
      if (i === void 0) throw Error(f(407));
      i = i();
    } else i = e();
    var _ = !an((te || u).memoizedState, i);
    _ && (u.memoizedState = i, Pe = true), u = u.queue;
    var b = $d.bind(null, r, u, t);
    if (Os(2048, 8, b, [t]), u.getSnapshot !== e || _ || Ae !== null && Ae.memoizedState.tag & 1) {
      if (r.flags |= 2048, xo(9, su(), Vd.bind(null, r, u, i, e), null), ue === null) throw Error(f(349));
      h || (ja & 124) !== 0 || Yd(r, e, i);
    }
    return i;
  }
  function Yd(t, e, i) {
    t.flags |= 16384, t = { getSnapshot: e, value: i }, e = Nt.updateQueue, e === null ? (e = of(), Nt.updateQueue = e, e.stores = [t]) : (i = e.stores, i === null ? e.stores = [t] : i.push(t));
  }
  function Vd(t, e, i, r) {
    e.value = i, e.getSnapshot = r, Xd(e) && Kd(t);
  }
  function $d(t, e, i) {
    return i(function() {
      Xd(e) && Kd(t);
    });
  }
  function Xd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var i = e();
      return !an(t, i);
    } catch {
      return true;
    }
  }
  function Kd(t) {
    var e = Da(t, 2);
    e !== null && Ln(e, t, 2);
  }
  function cf(t) {
    var e = mn();
    if (typeof t == "function") {
      var i = t;
      if (t = i(), Nr) {
        ce(true);
        try {
          i();
        } finally {
          ce(false);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Fi, lastRenderedState: t }, e;
  }
  function Qd(t, e, i, r) {
    return t.baseState = i, lf(t, te, typeof r == "function" ? r : Fi);
  }
  function Sy(t, e, i, r, u) {
    if (uu(t)) throw Error(f(485));
    if (t = e.action, t !== null) {
      var h = { payload: u, action: t, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(_) {
        h.listeners.push(_);
      } };
      N.T !== null ? i(true) : h.isTransition = false, r(h), i = e.pending, i === null ? (h.next = e.pending = h, Id(e, h)) : (h.next = i.next, e.pending = i.next = h);
    }
  }
  function Id(t, e) {
    var i = e.action, r = e.payload, u = t.state;
    if (e.isTransition) {
      var h = N.T, _ = {};
      N.T = _;
      try {
        var b = i(u, r), M = N.S;
        M !== null && M(_, b), Wd(t, e, b);
      } catch (H) {
        ff(t, e, H);
      } finally {
        N.T = h;
      }
    } else try {
      h = i(u, r), Wd(t, e, h);
    } catch (H) {
      ff(t, e, H);
    }
  }
  function Wd(t, e, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(function(r) {
      Jd(t, e, r);
    }, function(r) {
      return ff(t, e, r);
    }) : Jd(t, e, i);
  }
  function Jd(t, e, i) {
    e.status = "fulfilled", e.value = i, Fd(e), t.state = i, e = t.pending, e !== null && (i = e.next, i === e ? t.pending = null : (i = i.next, e.next = i, Id(t, i)));
  }
  function ff(t, e, i) {
    var r = t.pending;
    if (t.pending = null, r !== null) {
      r = r.next;
      do
        e.status = "rejected", e.reason = i, Fd(e), e = e.next;
      while (e !== r);
    }
    t.action = null;
  }
  function Fd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function tm(t, e) {
    return e;
  }
  function em(t, e) {
    if (zt) {
      var i = ue.formState;
      if (i !== null) {
        t: {
          var r = Nt;
          if (zt) {
            if (Tt) {
              e: {
                for (var u = Tt, h = pe; u.nodeType !== 8; ) {
                  if (!h) {
                    u = null;
                    break e;
                  }
                  if (u = li(u.nextSibling), u === null) {
                    u = null;
                    break e;
                  }
                }
                h = u.data, u = h === "F!" || h === "F" ? u : null;
              }
              if (u) {
                Tt = li(u.nextSibling), r = u.data === "F!";
                break t;
              }
            }
            dn(r);
          }
          r = false;
        }
        r && (e = i[0]);
      }
    }
    return i = mn(), i.memoizedState = i.baseState = e, r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: tm, lastRenderedState: e }, i.queue = r, i = bm.bind(null, Nt, r), r.dispatch = i, r = cf(false), h = gf.bind(null, Nt, false, r.queue), r = mn(), u = { state: e, dispatch: null, action: t, pending: null }, r.queue = u, i = Sy.bind(null, Nt, u, h, i), u.dispatch = i, r.memoizedState = t, [e, i, false];
  }
  function nm(t) {
    var e = Oe();
    return im(e, te, t);
  }
  function im(t, e, i) {
    if (e = lf(t, e, tm)[0], t = ou(Fi)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
      var r = As(e);
    } catch (_) {
      throw _ === xs ? tu : _;
    }
    else r = e;
    e = Oe();
    var u = e.queue, h = u.dispatch;
    return i !== e.memoizedState && (Nt.flags |= 2048, xo(9, su(), xy.bind(null, u, i), null)), [r, h, t];
  }
  function xy(t, e) {
    t.action = e;
  }
  function am(t) {
    var e = Oe(), i = te;
    if (i !== null) return im(e, i, t);
    Oe(), e = e.memoizedState, i = Oe();
    var r = i.queue.dispatch;
    return i.memoizedState = t, [e, r, false];
  }
  function xo(t, e, i, r) {
    return t = { tag: t, create: i, deps: r, inst: e, next: null }, e = Nt.updateQueue, e === null && (e = of(), Nt.updateQueue = e), i = e.lastEffect, i === null ? e.lastEffect = t.next = t : (r = i.next, i.next = t, t.next = r, e.lastEffect = t), t;
  }
  function su() {
    return { destroy: void 0, resource: void 0 };
  }
  function rm() {
    return Oe().memoizedState;
  }
  function lu(t, e, i, r) {
    var u = mn();
    r = r === void 0 ? null : r, Nt.flags |= t, u.memoizedState = xo(1 | e, su(), i, r);
  }
  function Os(t, e, i, r) {
    var u = Oe();
    r = r === void 0 ? null : r;
    var h = u.memoizedState.inst;
    te !== null && r !== null && tf(r, te.memoizedState.deps) ? u.memoizedState = xo(e, h, i, r) : (Nt.flags |= t, u.memoizedState = xo(1 | e, h, i, r));
  }
  function om(t, e) {
    lu(8390656, 8, t, e);
  }
  function sm(t, e) {
    Os(2048, 8, t, e);
  }
  function lm(t, e) {
    return Os(4, 2, t, e);
  }
  function um(t, e) {
    return Os(4, 4, t, e);
  }
  function cm(t, e) {
    if (typeof e == "function") {
      t = t();
      var i = e(t);
      return function() {
        typeof i == "function" ? i() : e(null);
      };
    }
    if (e != null) return t = t(), e.current = t, function() {
      e.current = null;
    };
  }
  function fm(t, e, i) {
    i = i != null ? i.concat([t]) : null, Os(4, 4, cm.bind(null, e, t), i);
  }
  function hf() {
  }
  function hm(t, e) {
    var i = Oe();
    e = e === void 0 ? null : e;
    var r = i.memoizedState;
    return e !== null && tf(e, r[1]) ? r[0] : (i.memoizedState = [t, e], t);
  }
  function dm(t, e) {
    var i = Oe();
    e = e === void 0 ? null : e;
    var r = i.memoizedState;
    if (e !== null && tf(e, r[1])) return r[0];
    if (r = t(), Nr) {
      ce(true);
      try {
        t();
      } finally {
        ce(false);
      }
    }
    return i.memoizedState = [r, e], r;
  }
  function df(t, e, i) {
    return i === void 0 || (ja & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = i, t = gp(), Nt.lanes |= t, Ka |= t, i);
  }
  function mm(t, e, i, r) {
    return an(i, e) ? i : vo.current !== null ? (t = df(t, i, r), an(t, e) || (Pe = true), t) : (ja & 42) === 0 ? (Pe = true, t.memoizedState = i) : (t = gp(), Nt.lanes |= t, Ka |= t, e);
  }
  function pm(t, e, i, r, u) {
    var h = st.p;
    st.p = h !== 0 && 8 > h ? h : 8;
    var _ = N.T, b = {};
    N.T = b, gf(t, false, e, i);
    try {
      var M = u(), H = N.S;
      if (H !== null && H(b, M), M !== null && typeof M == "object" && typeof M.then == "function") {
        var Q = yy(M, r);
        Ls(t, e, Q, On(t));
      } else Ls(t, e, r, On(t));
    } catch (J) {
      Ls(t, e, { then: function() {
      }, status: "rejected", reason: J }, On());
    } finally {
      st.p = h, N.T = _;
    }
  }
  function Ty() {
  }
  function mf(t, e, i, r) {
    if (t.tag !== 5) throw Error(f(476));
    var u = gm(t).queue;
    pm(t, u, e, F, i === null ? Ty : function() {
      return _m(t), i(r);
    });
  }
  function gm(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = { memoizedState: F, baseState: F, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Fi, lastRenderedState: F }, next: null };
    var i = {};
    return e.next = { memoizedState: i, baseState: i, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Fi, lastRenderedState: i }, next: null }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function _m(t) {
    var e = gm(t).next.queue;
    Ls(t, e, {}, On());
  }
  function pf() {
    return Fe(Ks);
  }
  function ym() {
    return Oe().memoizedState;
  }
  function vm() {
    return Oe().memoizedState;
  }
  function wy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var i = On();
          t = Ha(i);
          var r = Ua(e, t, i);
          r !== null && (Ln(r, e, i), ws(r, e, i)), e = { cache: Yc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Cy(t, e, i) {
    var r = On();
    i = { lane: r, revertLane: 0, action: i, hasEagerState: false, eagerState: null, next: null }, uu(t) ? Sm(e, i) : (i = Ii(t, e, i, r), i !== null && (Ln(i, t, r), xm(i, e, r)));
  }
  function bm(t, e, i) {
    var r = On();
    Ls(t, e, i, r);
  }
  function Ls(t, e, i, r) {
    var u = { lane: r, revertLane: 0, action: i, hasEagerState: false, eagerState: null, next: null };
    if (uu(t)) Sm(e, u);
    else {
      var h = t.alternate;
      if (t.lanes === 0 && (h === null || h.lanes === 0) && (h = e.lastRenderedReducer, h !== null)) try {
        var _ = e.lastRenderedState, b = h(_, i);
        if (u.hasEagerState = true, u.eagerState = b, an(b, _)) return Mr(t, e, u, 0), ue === null && Er(), false;
      } catch {
      } finally {
      }
      if (i = Ii(t, e, u, r), i !== null) return Ln(i, t, r), xm(i, e, r), true;
    }
    return false;
  }
  function gf(t, e, i, r) {
    if (r = { lane: 2, revertLane: Kf(), action: r, hasEagerState: false, eagerState: null, next: null }, uu(t)) {
      if (e) throw Error(f(479));
    } else e = Ii(t, i, r, 2), e !== null && Ln(e, t, 2);
  }
  function uu(t) {
    var e = t.alternate;
    return t === Nt || e !== null && e === Nt;
  }
  function Sm(t, e) {
    bo = iu = true;
    var i = t.pending;
    i === null ? e.next = e : (e.next = i.next, i.next = e), t.pending = e;
  }
  function xm(t, e, i) {
    if ((i & 4194048) !== 0) {
      var r = e.lanes;
      r &= t.pendingLanes, i |= r, e.lanes = i, xl(t, i);
    }
  }
  var cu = { readContext: Fe, use: ru, useCallback: Te, useContext: Te, useEffect: Te, useImperativeHandle: Te, useLayoutEffect: Te, useInsertionEffect: Te, useMemo: Te, useReducer: Te, useRef: Te, useState: Te, useDebugValue: Te, useDeferredValue: Te, useTransition: Te, useSyncExternalStore: Te, useId: Te, useHostTransitionStatus: Te, useFormState: Te, useActionState: Te, useOptimistic: Te, useMemoCache: Te, useCacheRefresh: Te }, Tm = { readContext: Fe, use: ru, useCallback: function(t, e) {
    return mn().memoizedState = [t, e === void 0 ? null : e], t;
  }, useContext: Fe, useEffect: om, useImperativeHandle: function(t, e, i) {
    i = i != null ? i.concat([t]) : null, lu(4194308, 4, cm.bind(null, e, t), i);
  }, useLayoutEffect: function(t, e) {
    return lu(4194308, 4, t, e);
  }, useInsertionEffect: function(t, e) {
    lu(4, 2, t, e);
  }, useMemo: function(t, e) {
    var i = mn();
    e = e === void 0 ? null : e;
    var r = t();
    if (Nr) {
      ce(true);
      try {
        t();
      } finally {
        ce(false);
      }
    }
    return i.memoizedState = [r, e], r;
  }, useReducer: function(t, e, i) {
    var r = mn();
    if (i !== void 0) {
      var u = i(e);
      if (Nr) {
        ce(true);
        try {
          i(e);
        } finally {
          ce(false);
        }
      }
    } else u = e;
    return r.memoizedState = r.baseState = u, t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: u }, r.queue = t, t = t.dispatch = Cy.bind(null, Nt, t), [r.memoizedState, t];
  }, useRef: function(t) {
    var e = mn();
    return t = { current: t }, e.memoizedState = t;
  }, useState: function(t) {
    t = cf(t);
    var e = t.queue, i = bm.bind(null, Nt, e);
    return e.dispatch = i, [t.memoizedState, i];
  }, useDebugValue: hf, useDeferredValue: function(t, e) {
    var i = mn();
    return df(i, t, e);
  }, useTransition: function() {
    var t = cf(false);
    return t = pm.bind(null, Nt, t.queue, true, false), mn().memoizedState = t, [false, t];
  }, useSyncExternalStore: function(t, e, i) {
    var r = Nt, u = mn();
    if (zt) {
      if (i === void 0) throw Error(f(407));
      i = i();
    } else {
      if (i = e(), ue === null) throw Error(f(349));
      (Gt & 124) !== 0 || Yd(r, e, i);
    }
    u.memoizedState = i;
    var h = { value: i, getSnapshot: e };
    return u.queue = h, om($d.bind(null, r, h, t), [t]), r.flags |= 2048, xo(9, su(), Vd.bind(null, r, h, i, e), null), i;
  }, useId: function() {
    var t = mn(), e = ue.identifierPrefix;
    if (zt) {
      var i = E, r = v;
      i = (r & ~(1 << 32 - re(r) - 1)).toString(32) + i, e = "\xAB" + e + "R" + i, i = au++, 0 < i && (e += "H" + i.toString(32)), e += "\xBB";
    } else i = vy++, e = "\xAB" + e + "r" + i.toString(32) + "\xBB";
    return t.memoizedState = e;
  }, useHostTransitionStatus: pf, useFormState: em, useActionState: em, useOptimistic: function(t) {
    var e = mn();
    e.memoizedState = e.baseState = t;
    var i = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return e.queue = i, e = gf.bind(null, Nt, true, i), i.dispatch = e, [t, e];
  }, useMemoCache: sf, useCacheRefresh: function() {
    return mn().memoizedState = wy.bind(null, Nt);
  } }, wm = { readContext: Fe, use: ru, useCallback: hm, useContext: Fe, useEffect: sm, useImperativeHandle: fm, useInsertionEffect: lm, useLayoutEffect: um, useMemo: dm, useReducer: ou, useRef: rm, useState: function() {
    return ou(Fi);
  }, useDebugValue: hf, useDeferredValue: function(t, e) {
    var i = Oe();
    return mm(i, te.memoizedState, t, e);
  }, useTransition: function() {
    var t = ou(Fi)[0], e = Oe().memoizedState;
    return [typeof t == "boolean" ? t : As(t), e];
  }, useSyncExternalStore: Gd, useId: ym, useHostTransitionStatus: pf, useFormState: nm, useActionState: nm, useOptimistic: function(t, e) {
    var i = Oe();
    return Qd(i, te, t, e);
  }, useMemoCache: sf, useCacheRefresh: vm }, Ey = { readContext: Fe, use: ru, useCallback: hm, useContext: Fe, useEffect: sm, useImperativeHandle: fm, useInsertionEffect: lm, useLayoutEffect: um, useMemo: dm, useReducer: uf, useRef: rm, useState: function() {
    return uf(Fi);
  }, useDebugValue: hf, useDeferredValue: function(t, e) {
    var i = Oe();
    return te === null ? df(i, t, e) : mm(i, te.memoizedState, t, e);
  }, useTransition: function() {
    var t = uf(Fi)[0], e = Oe().memoizedState;
    return [typeof t == "boolean" ? t : As(t), e];
  }, useSyncExternalStore: Gd, useId: ym, useHostTransitionStatus: pf, useFormState: am, useActionState: am, useOptimistic: function(t, e) {
    var i = Oe();
    return te !== null ? Qd(i, te, t, e) : (i.baseState = t, [t, i.queue.dispatch]);
  }, useMemoCache: sf, useCacheRefresh: vm }, To = null, zs = 0;
  function fu(t) {
    var e = zs;
    return zs += 1, To === null && (To = []), Nd(To, t, e);
  }
  function Rs(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function hu(t, e) {
    throw e.$$typeof === R ? Error(f(525)) : (t = Object.prototype.toString.call(e), Error(f(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function Cm(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Em(t) {
    function e(B, O) {
      if (t) {
        var P = B.deletions;
        P === null ? (B.deletions = [O], B.flags |= 16) : P.push(O);
      }
    }
    function i(B, O) {
      if (!t) return null;
      for (; O !== null; ) e(B, O), O = O.sibling;
      return null;
    }
    function r(B) {
      for (var O = /* @__PURE__ */ new Map(); B !== null; ) B.key !== null ? O.set(B.key, B) : O.set(B.index, B), B = B.sibling;
      return O;
    }
    function u(B, O) {
      return B = Gn(B, O), B.index = 0, B.sibling = null, B;
    }
    function h(B, O, P) {
      return B.index = P, t ? (P = B.alternate, P !== null ? (P = P.index, P < O ? (B.flags |= 67108866, O) : P) : (B.flags |= 67108866, O)) : (B.flags |= 1048576, O);
    }
    function _(B) {
      return t && B.alternate === null && (B.flags |= 67108866), B;
    }
    function b(B, O, P, I) {
      return O === null || O.tag !== 6 ? (O = vs(P, B.mode, I), O.return = B, O) : (O = u(O, P), O.return = B, O);
    }
    function M(B, O, P, I) {
      var xt = P.type;
      return xt === Z ? Q(B, O, P.props.children, I, P.key) : O !== null && (O.elementType === xt || typeof xt == "object" && xt !== null && xt.$$typeof === _t && Cm(xt) === O.type) ? (O = u(O, P.props), Rs(O, P), O.return = B, O) : (O = Or(P.type, P.key, P.props, null, B.mode, I), Rs(O, P), O.return = B, O);
    }
    function H(B, O, P, I) {
      return O === null || O.tag !== 4 || O.stateNode.containerInfo !== P.containerInfo || O.stateNode.implementation !== P.implementation ? (O = po(P, B.mode, I), O.return = B, O) : (O = u(O, P.children || []), O.return = B, O);
    }
    function Q(B, O, P, I, xt) {
      return O === null || O.tag !== 7 ? (O = vi(P, B.mode, I, xt), O.return = B, O) : (O = u(O, P), O.return = B, O);
    }
    function J(B, O, P) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint") return O = vs("" + O, B.mode, P), O.return = B, O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case k:
            return P = Or(O.type, O.key, O.props, null, B.mode, P), Rs(P, O), P.return = B, P;
          case V:
            return O = po(O, B.mode, P), O.return = B, O;
          case _t:
            var I = O._init;
            return O = I(O._payload), J(B, O, P);
        }
        if (St(O) || x(O)) return O = vi(O, B.mode, P, null), O.return = B, O;
        if (typeof O.then == "function") return J(B, fu(O), P);
        if (O.$$typeof === nt) return J(B, Jl(B, O), P);
        hu(B, O);
      }
      return null;
    }
    function j(B, O, P, I) {
      var xt = O !== null ? O.key : null;
      if (typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint") return xt !== null ? null : b(B, O, "" + P, I);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case k:
            return P.key === xt ? M(B, O, P, I) : null;
          case V:
            return P.key === xt ? H(B, O, P, I) : null;
          case _t:
            return xt = P._init, P = xt(P._payload), j(B, O, P, I);
        }
        if (St(P) || x(P)) return xt !== null ? null : Q(B, O, P, I, null);
        if (typeof P.then == "function") return j(B, O, fu(P), I);
        if (P.$$typeof === nt) return j(B, O, Jl(B, P), I);
        hu(B, P);
      }
      return null;
    }
    function G(B, O, P, I, xt) {
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint") return B = B.get(P) || null, b(O, B, "" + I, xt);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case k:
            return B = B.get(I.key === null ? P : I.key) || null, M(O, B, I, xt);
          case V:
            return B = B.get(I.key === null ? P : I.key) || null, H(O, B, I, xt);
          case _t:
            var Ht = I._init;
            return I = Ht(I._payload), G(B, O, P, I, xt);
        }
        if (St(I) || x(I)) return B = B.get(P) || null, Q(O, B, I, xt, null);
        if (typeof I.then == "function") return G(B, O, P, fu(I), xt);
        if (I.$$typeof === nt) return G(B, O, P, Jl(O, I), xt);
        hu(O, I);
      }
      return null;
    }
    function Lt(B, O, P, I) {
      for (var xt = null, Ht = null, Ct = O, Ot = O = 0, He = null; Ct !== null && Ot < P.length; Ot++) {
        Ct.index > Ot ? (He = Ct, Ct = null) : He = Ct.sibling;
        var $t = j(B, Ct, P[Ot], I);
        if ($t === null) {
          Ct === null && (Ct = He);
          break;
        }
        t && Ct && $t.alternate === null && e(B, Ct), O = h($t, O, Ot), Ht === null ? xt = $t : Ht.sibling = $t, Ht = $t, Ct = He;
      }
      if (Ot === P.length) return i(B, Ct), zt && D(B, Ot), xt;
      if (Ct === null) {
        for (; Ot < P.length; Ot++) Ct = J(B, P[Ot], I), Ct !== null && (O = h(Ct, O, Ot), Ht === null ? xt = Ct : Ht.sibling = Ct, Ht = Ct);
        return zt && D(B, Ot), xt;
      }
      for (Ct = r(Ct); Ot < P.length; Ot++) He = G(Ct, B, Ot, P[Ot], I), He !== null && (t && He.alternate !== null && Ct.delete(He.key === null ? Ot : He.key), O = h(He, O, Ot), Ht === null ? xt = He : Ht.sibling = He, Ht = He);
      return t && Ct.forEach(function(ir) {
        return e(B, ir);
      }), zt && D(B, Ot), xt;
    }
    function Mt(B, O, P, I) {
      if (P == null) throw Error(f(151));
      for (var xt = null, Ht = null, Ct = O, Ot = O = 0, He = null, $t = P.next(); Ct !== null && !$t.done; Ot++, $t = P.next()) {
        Ct.index > Ot ? (He = Ct, Ct = null) : He = Ct.sibling;
        var ir = j(B, Ct, $t.value, I);
        if (ir === null) {
          Ct === null && (Ct = He);
          break;
        }
        t && Ct && ir.alternate === null && e(B, Ct), O = h(ir, O, Ot), Ht === null ? xt = ir : Ht.sibling = ir, Ht = ir, Ct = He;
      }
      if ($t.done) return i(B, Ct), zt && D(B, Ot), xt;
      if (Ct === null) {
        for (; !$t.done; Ot++, $t = P.next()) $t = J(B, $t.value, I), $t !== null && (O = h($t, O, Ot), Ht === null ? xt = $t : Ht.sibling = $t, Ht = $t);
        return zt && D(B, Ot), xt;
      }
      for (Ct = r(Ct); !$t.done; Ot++, $t = P.next()) $t = G(Ct, B, Ot, $t.value, I), $t !== null && (t && $t.alternate !== null && Ct.delete($t.key === null ? Ot : $t.key), O = h($t, O, Ot), Ht === null ? xt = $t : Ht.sibling = $t, Ht = $t);
      return t && Ct.forEach(function(Mv) {
        return e(B, Mv);
      }), zt && D(B, Ot), xt;
    }
    function ne(B, O, P, I) {
      if (typeof P == "object" && P !== null && P.type === Z && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case k:
            t: {
              for (var xt = P.key; O !== null; ) {
                if (O.key === xt) {
                  if (xt = P.type, xt === Z) {
                    if (O.tag === 7) {
                      i(B, O.sibling), I = u(O, P.props.children), I.return = B, B = I;
                      break t;
                    }
                  } else if (O.elementType === xt || typeof xt == "object" && xt !== null && xt.$$typeof === _t && Cm(xt) === O.type) {
                    i(B, O.sibling), I = u(O, P.props), Rs(I, P), I.return = B, B = I;
                    break t;
                  }
                  i(B, O);
                  break;
                } else e(B, O);
                O = O.sibling;
              }
              P.type === Z ? (I = vi(P.props.children, B.mode, I, P.key), I.return = B, B = I) : (I = Or(P.type, P.key, P.props, null, B.mode, I), Rs(I, P), I.return = B, B = I);
            }
            return _(B);
          case V:
            t: {
              for (xt = P.key; O !== null; ) {
                if (O.key === xt) if (O.tag === 4 && O.stateNode.containerInfo === P.containerInfo && O.stateNode.implementation === P.implementation) {
                  i(B, O.sibling), I = u(O, P.children || []), I.return = B, B = I;
                  break t;
                } else {
                  i(B, O);
                  break;
                }
                else e(B, O);
                O = O.sibling;
              }
              I = po(P, B.mode, I), I.return = B, B = I;
            }
            return _(B);
          case _t:
            return xt = P._init, P = xt(P._payload), ne(B, O, P, I);
        }
        if (St(P)) return Lt(B, O, P, I);
        if (x(P)) {
          if (xt = x(P), typeof xt != "function") throw Error(f(150));
          return P = xt.call(P), Mt(B, O, P, I);
        }
        if (typeof P.then == "function") return ne(B, O, fu(P), I);
        if (P.$$typeof === nt) return ne(B, O, Jl(B, P), I);
        hu(B, P);
      }
      return typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint" ? (P = "" + P, O !== null && O.tag === 6 ? (i(B, O.sibling), I = u(O, P), I.return = B, B = I) : (i(B, O), I = vs(P, B.mode, I), I.return = B, B = I), _(B)) : i(B, O);
    }
    return function(B, O, P, I) {
      try {
        zs = 0;
        var xt = ne(B, O, P, I);
        return To = null, xt;
      } catch (Ct) {
        if (Ct === xs || Ct === tu) throw Ct;
        var Ht = ln(29, Ct, null, B.mode);
        return Ht.lanes = I, Ht.return = B, Ht;
      } finally {
      }
    };
  }
  var wo = Em(true), Mm = Em(false), Vn = $(null), Si = null;
  function qa(t) {
    var e = t.alternate;
    at(Re, Re.current & 1), at(Vn, t), Si === null && (e === null || vo.current !== null || e.memoizedState !== null) && (Si = t);
  }
  function Am(t) {
    if (t.tag === 22) {
      if (at(Re, Re.current), at(Vn, t), Si === null) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Si = t);
      }
    } else Ga();
  }
  function Ga() {
    at(Re, Re.current), at(Vn, Vn.current);
  }
  function ta(t) {
    it(Vn), Si === t && (Si = null), it(Re);
  }
  var Re = $(0);
  function du(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var i = e.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || oh(i))) return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  function _f(t, e, i, r) {
    e = t.memoizedState, i = i(r, e), i = i == null ? e : A({}, e, i), t.memoizedState = i, t.lanes === 0 && (t.updateQueue.baseState = i);
  }
  var yf = { enqueueSetState: function(t, e, i) {
    t = t._reactInternals;
    var r = On(), u = Ha(r);
    u.payload = e, i != null && (u.callback = i), e = Ua(t, u, r), e !== null && (Ln(e, t, r), ws(e, t, r));
  }, enqueueReplaceState: function(t, e, i) {
    t = t._reactInternals;
    var r = On(), u = Ha(r);
    u.tag = 1, u.payload = e, i != null && (u.callback = i), e = Ua(t, u, r), e !== null && (Ln(e, t, r), ws(e, t, r));
  }, enqueueForceUpdate: function(t, e) {
    t = t._reactInternals;
    var i = On(), r = Ha(i);
    r.tag = 2, e != null && (r.callback = e), e = Ua(t, r, i), e !== null && (Ln(e, t, i), ws(e, t, i));
  } };
  function Om(t, e, i, r, u, h, _) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, h, _) : e.prototype && e.prototype.isPureReactComponent ? !rn(i, r) || !rn(u, h) : true;
  }
  function Lm(t, e, i, r) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(i, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(i, r), e.state !== t && yf.enqueueReplaceState(e, e.state, null);
  }
  function kr(t, e) {
    var i = e;
    if ("ref" in e) {
      i = {};
      for (var r in e) r !== "ref" && (i[r] = e[r]);
    }
    if (t = t.defaultProps) {
      i === e && (i = A({}, i));
      for (var u in t) i[u] === void 0 && (i[u] = t[u]);
    }
    return i;
  }
  var mu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function zm(t) {
    mu(t);
  }
  function Rm(t) {
    console.error(t);
  }
  function Bm(t) {
    mu(t);
  }
  function pu(t, e) {
    try {
      var i = t.onUncaughtError;
      i(e.value, { componentStack: e.stack });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function Dm(t, e, i) {
    try {
      var r = t.onCaughtError;
      r(i.value, { componentStack: i.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function vf(t, e, i) {
    return i = Ha(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      pu(t, e);
    }, i;
  }
  function Nm(t) {
    return t = Ha(t), t.tag = 3, t;
  }
  function km(t, e, i, r) {
    var u = i.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var h = r.value;
      t.payload = function() {
        return u(h);
      }, t.callback = function() {
        Dm(e, i, r);
      };
    }
    var _ = i.stateNode;
    _ !== null && typeof _.componentDidCatch == "function" && (t.callback = function() {
      Dm(e, i, r), typeof u != "function" && (Qa === null ? Qa = /* @__PURE__ */ new Set([this]) : Qa.add(this));
      var b = r.stack;
      this.componentDidCatch(r.value, { componentStack: b !== null ? b : "" });
    });
  }
  function My(t, e, i, r, u) {
    if (i.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
      if (e = i.alternate, e !== null && Rr(e, i, u, true), i = Vn.current, i !== null) {
        switch (i.tag) {
          case 13:
            return Si === null ? Gf() : i.alternate === null && be === 0 && (be = 3), i.flags &= -257, i.flags |= 65536, i.lanes = u, r === Xc ? i.flags |= 16384 : (e = i.updateQueue, e === null ? i.updateQueue = /* @__PURE__ */ new Set([r]) : e.add(r), Vf(t, r, u)), false;
          case 22:
            return i.flags |= 65536, r === Xc ? i.flags |= 16384 : (e = i.updateQueue, e === null ? (e = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([r]) }, i.updateQueue = e) : (i = e.retryQueue, i === null ? e.retryQueue = /* @__PURE__ */ new Set([r]) : i.add(r)), Vf(t, r, u)), false;
        }
        throw Error(f(435, i.tag));
      }
      return Vf(t, r, u), Gf(), false;
    }
    if (zt) return e = Vn.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, r !== ke && (t = Error(f(422), { cause: r }), Pa(on(t, i)))) : (r !== ke && (e = Error(f(423), { cause: r }), Pa(on(e, i))), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, r = on(r, i), u = vf(t.stateNode, r, u), Ic(t, u), be !== 4 && (be = 2)), false;
    var h = Error(f(520), { cause: r });
    if (h = on(h, i), Hs === null ? Hs = [h] : Hs.push(h), be !== 4 && (be = 2), e === null) return true;
    r = on(r, i), i = e;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, t = u & -u, i.lanes |= t, t = vf(i.stateNode, r, t), Ic(i, t), false;
        case 1:
          if (e = i.type, h = i.stateNode, (i.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Qa === null || !Qa.has(h)))) return i.flags |= 65536, u &= -u, i.lanes |= u, u = Nm(u), km(u, t, i, r), Ic(i, u), false;
      }
      i = i.return;
    } while (i !== null);
    return false;
  }
  var Pm = Error(f(461)), Pe = false;
  function Ge(t, e, i, r) {
    e.child = t === null ? Mm(e, null, i, r) : wo(e, t.child, i, r);
  }
  function Zm(t, e, i, r, u) {
    i = i.render;
    var h = e.ref;
    if ("ref" in r) {
      var _ = {};
      for (var b in r) b !== "ref" && (_[b] = r[b]);
    } else _ = r;
    return Br(e), r = ef(t, e, i, _, h, u), b = nf(), t !== null && !Pe ? (af(t, e, u), ea(t, e, u)) : (zt && b && tt(e), e.flags |= 1, Ge(t, e, r, u), e.child);
  }
  function Hm(t, e, i, r, u) {
    if (t === null) {
      var h = i.type;
      return typeof h == "function" && !mo(h) && h.defaultProps === void 0 && i.compare === null ? (e.tag = 15, e.type = h, Um(t, e, h, r, u)) : (t = Or(i.type, null, r, e, e.mode, u), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (h = t.child, !Mf(t, u)) {
      var _ = h.memoizedProps;
      if (i = i.compare, i = i !== null ? i : rn, i(_, r) && t.ref === e.ref) return ea(t, e, u);
    }
    return e.flags |= 1, t = Gn(h, r), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Um(t, e, i, r, u) {
    if (t !== null) {
      var h = t.memoizedProps;
      if (rn(h, r) && t.ref === e.ref) if (Pe = false, e.pendingProps = r = h, Mf(t, u)) (t.flags & 131072) !== 0 && (Pe = true);
      else return e.lanes = t.lanes, ea(t, e, u);
    }
    return bf(t, e, i, r, u);
  }
  function jm(t, e, i) {
    var r = e.pendingProps, u = r.children, h = t !== null ? t.memoizedState : null;
    if (r.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (r = h !== null ? h.baseLanes | i : i, t !== null) {
          for (u = e.child = t.child, h = 0; u !== null; ) h = h | u.lanes | u.childLanes, u = u.sibling;
          e.childLanes = h & ~r;
        } else e.childLanes = 0, e.child = null;
        return qm(t, e, r, i);
      }
      if ((i & 536870912) !== 0) e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Fl(e, h !== null ? h.cachePool : null), h !== null ? Ud(e, h) : Jc(), Am(e);
      else return e.lanes = e.childLanes = 536870912, qm(t, e, h !== null ? h.baseLanes | i : i, i);
    } else h !== null ? (Fl(e, h.cachePool), Ud(e, h), Ga(), e.memoizedState = null) : (t !== null && Fl(e, null), Jc(), Ga());
    return Ge(t, e, u, i), e.child;
  }
  function qm(t, e, i, r) {
    var u = $c();
    return u = u === null ? null : { parent: ze._currentValue, pool: u }, e.memoizedState = { baseLanes: i, cachePool: u }, t !== null && Fl(e, null), Jc(), Am(e), t !== null && Rr(t, e, r, true), null;
  }
  function gu(t, e) {
    var i = e.ref;
    if (i === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object") throw Error(f(284));
      (t === null || t.ref !== i) && (e.flags |= 4194816);
    }
  }
  function bf(t, e, i, r, u) {
    return Br(e), i = ef(t, e, i, r, void 0, u), r = nf(), t !== null && !Pe ? (af(t, e, u), ea(t, e, u)) : (zt && r && tt(e), e.flags |= 1, Ge(t, e, i, u), e.child);
  }
  function Gm(t, e, i, r, u, h) {
    return Br(e), e.updateQueue = null, i = qd(e, r, i, u), jd(t), r = nf(), t !== null && !Pe ? (af(t, e, h), ea(t, e, h)) : (zt && r && tt(e), e.flags |= 1, Ge(t, e, i, h), e.child);
  }
  function Ym(t, e, i, r, u) {
    if (Br(e), e.stateNode === null) {
      var h = Wi, _ = i.contextType;
      typeof _ == "object" && _ !== null && (h = Fe(_)), h = new i(r, h), e.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, h.updater = yf, e.stateNode = h, h._reactInternals = e, h = e.stateNode, h.props = r, h.state = e.memoizedState, h.refs = {}, Kc(e), _ = i.contextType, h.context = typeof _ == "object" && _ !== null ? Fe(_) : Wi, h.state = e.memoizedState, _ = i.getDerivedStateFromProps, typeof _ == "function" && (_f(e, i, _, r), h.state = e.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (_ = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), _ !== h.state && yf.enqueueReplaceState(h, h.state, null), Es(e, r, h, u), Cs(), h.state = e.memoizedState), typeof h.componentDidMount == "function" && (e.flags |= 4194308), r = true;
    } else if (t === null) {
      h = e.stateNode;
      var b = e.memoizedProps, M = kr(i, b);
      h.props = M;
      var H = h.context, Q = i.contextType;
      _ = Wi, typeof Q == "object" && Q !== null && (_ = Fe(Q));
      var J = i.getDerivedStateFromProps;
      Q = typeof J == "function" || typeof h.getSnapshotBeforeUpdate == "function", b = e.pendingProps !== b, Q || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (b || H !== _) && Lm(e, h, r, _), Za = false;
      var j = e.memoizedState;
      h.state = j, Es(e, r, h, u), Cs(), H = e.memoizedState, b || j !== H || Za ? (typeof J == "function" && (_f(e, i, J, r), H = e.memoizedState), (M = Za || Om(e, i, M, r, j, H, _)) ? (Q || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = H), h.props = r, h.state = H, h.context = _, r = M) : (typeof h.componentDidMount == "function" && (e.flags |= 4194308), r = false);
    } else {
      h = e.stateNode, Qc(t, e), _ = e.memoizedProps, Q = kr(i, _), h.props = Q, J = e.pendingProps, j = h.context, H = i.contextType, M = Wi, typeof H == "object" && H !== null && (M = Fe(H)), b = i.getDerivedStateFromProps, (H = typeof b == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (_ !== J || j !== M) && Lm(e, h, r, M), Za = false, j = e.memoizedState, h.state = j, Es(e, r, h, u), Cs();
      var G = e.memoizedState;
      _ !== J || j !== G || Za || t !== null && t.dependencies !== null && Wl(t.dependencies) ? (typeof b == "function" && (_f(e, i, b, r), G = e.memoizedState), (Q = Za || Om(e, i, Q, r, j, G, M) || t !== null && t.dependencies !== null && Wl(t.dependencies)) ? (H || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(r, G, M), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(r, G, M)), typeof h.componentDidUpdate == "function" && (e.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || _ === t.memoizedProps && j === t.memoizedState || (e.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || _ === t.memoizedProps && j === t.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = G), h.props = r, h.state = G, h.context = M, r = Q) : (typeof h.componentDidUpdate != "function" || _ === t.memoizedProps && j === t.memoizedState || (e.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || _ === t.memoizedProps && j === t.memoizedState || (e.flags |= 1024), r = false);
    }
    return h = r, gu(t, e), r = (e.flags & 128) !== 0, h || r ? (h = e.stateNode, i = r && typeof i.getDerivedStateFromError != "function" ? null : h.render(), e.flags |= 1, t !== null && r ? (e.child = wo(e, t.child, null, u), e.child = wo(e, null, i, u)) : Ge(t, e, i, u), e.memoizedState = h.state, t = e.child) : t = ea(t, e, u), t;
  }
  function Vm(t, e, i, r) {
    return ka(), e.flags |= 256, Ge(t, e, i, r), e.child;
  }
  var Sf = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function xf(t) {
    return { baseLanes: t, cachePool: Rd() };
  }
  function Tf(t, e, i) {
    return t = t !== null ? t.childLanes & ~i : 0, e && (t |= $n), t;
  }
  function $m(t, e, i) {
    var r = e.pendingProps, u = false, h = (e.flags & 128) !== 0, _;
    if ((_ = h) || (_ = t !== null && t.memoizedState === null ? false : (Re.current & 2) !== 0), _ && (u = true, e.flags &= -129), _ = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (zt) {
        if (u ? qa(e) : Ga(), zt) {
          var b = Tt, M;
          if (M = b) {
            t: {
              for (M = b, b = pe; M.nodeType !== 8; ) {
                if (!b) {
                  b = null;
                  break t;
                }
                if (M = li(M.nextSibling), M === null) {
                  b = null;
                  break t;
                }
              }
              b = M;
            }
            b !== null ? (e.memoizedState = { dehydrated: b, treeContext: p !== null ? { id: v, overflow: E } : null, retryLane: 536870912, hydrationErrors: null }, M = ln(18, null, null, 0), M.stateNode = b, M.return = e, e.child = M, bt = e, Tt = null, M = true) : M = false;
          }
          M || dn(e);
        }
        if (b = e.memoizedState, b !== null && (b = b.dehydrated, b !== null)) return oh(b) ? e.lanes = 32 : e.lanes = 536870912, null;
        ta(e);
      }
      return b = r.children, r = r.fallback, u ? (Ga(), u = e.mode, b = _u({ mode: "hidden", children: b }, u), r = vi(r, u, i, null), b.return = e, r.return = e, b.sibling = r, e.child = b, u = e.child, u.memoizedState = xf(i), u.childLanes = Tf(t, _, i), e.memoizedState = Sf, r) : (qa(e), wf(e, b));
    }
    if (M = t.memoizedState, M !== null && (b = M.dehydrated, b !== null)) {
      if (h) e.flags & 256 ? (qa(e), e.flags &= -257, e = Cf(t, e, i)) : e.memoizedState !== null ? (Ga(), e.child = t.child, e.flags |= 128, e = null) : (Ga(), u = r.fallback, b = e.mode, r = _u({ mode: "visible", children: r.children }, b), u = vi(u, b, i, null), u.flags |= 2, r.return = e, u.return = e, r.sibling = u, e.child = r, wo(e, t.child, null, i), r = e.child, r.memoizedState = xf(i), r.childLanes = Tf(t, _, i), e.memoizedState = Sf, e = u);
      else if (qa(e), oh(b)) {
        if (_ = b.nextSibling && b.nextSibling.dataset, _) var H = _.dgst;
        _ = H, r = Error(f(419)), r.stack = "", r.digest = _, Pa({ value: r, source: null, stack: null }), e = Cf(t, e, i);
      } else if (Pe || Rr(t, e, i, false), _ = (i & t.childLanes) !== 0, Pe || _) {
        if (_ = ue, _ !== null && (r = i & -i, r = (r & 42) !== 0 ? 1 : Fo(r), r = (r & (_.suspendedLanes | i)) !== 0 ? 0 : r, r !== 0 && r !== M.retryLane)) throw M.retryLane = r, Da(t, r), Ln(_, t, r), Pm;
        b.data === "$?" || Gf(), e = Cf(t, e, i);
      } else b.data === "$?" ? (e.flags |= 192, e.child = t.child, e = null) : (t = M.treeContext, Tt = li(b.nextSibling), bt = e, zt = true, le = null, pe = false, t !== null && (l[d++] = v, l[d++] = E, l[d++] = p, v = t.id, E = t.overflow, p = e), e = wf(e, r.children), e.flags |= 4096);
      return e;
    }
    return u ? (Ga(), u = r.fallback, b = e.mode, M = t.child, H = M.sibling, r = Gn(M, { mode: "hidden", children: r.children }), r.subtreeFlags = M.subtreeFlags & 65011712, H !== null ? u = Gn(H, u) : (u = vi(u, b, i, null), u.flags |= 2), u.return = e, r.return = e, r.sibling = u, e.child = r, r = u, u = e.child, b = t.child.memoizedState, b === null ? b = xf(i) : (M = b.cachePool, M !== null ? (H = ze._currentValue, M = M.parent !== H ? { parent: H, pool: H } : M) : M = Rd(), b = { baseLanes: b.baseLanes | i, cachePool: M }), u.memoizedState = b, u.childLanes = Tf(t, _, i), e.memoizedState = Sf, r) : (qa(e), i = t.child, t = i.sibling, i = Gn(i, { mode: "visible", children: r.children }), i.return = e, i.sibling = null, t !== null && (_ = e.deletions, _ === null ? (e.deletions = [t], e.flags |= 16) : _.push(t)), e.child = i, e.memoizedState = null, i);
  }
  function wf(t, e) {
    return e = _u({ mode: "visible", children: e }, t.mode), e.return = t, t.child = e;
  }
  function _u(t, e) {
    return t = ln(22, t, null, e), t.lanes = 0, t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }, t;
  }
  function Cf(t, e, i) {
    return wo(e, t.child, null, i), t = wf(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
  }
  function Xm(t, e, i) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e), zr(t.return, e, i);
  }
  function Ef(t, e, i, r, u) {
    var h = t.memoizedState;
    h === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: i, tailMode: u } : (h.isBackwards = e, h.rendering = null, h.renderingStartTime = 0, h.last = r, h.tail = i, h.tailMode = u);
  }
  function Km(t, e, i) {
    var r = e.pendingProps, u = r.revealOrder, h = r.tail;
    if (Ge(t, e, r.children, i), r = Re.current, (r & 2) !== 0) r = r & 1 | 2, e.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Xm(t, i, e);
        else if (t.tag === 19) Xm(t, i, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      r &= 1;
    }
    switch (at(Re, r), u) {
      case "forwards":
        for (i = e.child, u = null; i !== null; ) t = i.alternate, t !== null && du(t) === null && (u = i), i = i.sibling;
        i = u, i === null ? (u = e.child, e.child = null) : (u = i.sibling, i.sibling = null), Ef(e, false, u, i, h);
        break;
      case "backwards":
        for (i = null, u = e.child, e.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && du(t) === null) {
            e.child = u;
            break;
          }
          t = u.sibling, u.sibling = i, i = u, u = t;
        }
        Ef(e, true, i, null, h);
        break;
      case "together":
        Ef(e, false, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function ea(t, e, i) {
    if (t !== null && (e.dependencies = t.dependencies), Ka |= e.lanes, (i & e.childLanes) === 0) if (t !== null) {
      if (Rr(t, e, i, false), (i & e.childLanes) === 0) return null;
    } else return null;
    if (t !== null && e.child !== t.child) throw Error(f(153));
    if (e.child !== null) {
      for (t = e.child, i = Gn(t, t.pendingProps), e.child = i, i.return = e; t.sibling !== null; ) t = t.sibling, i = i.sibling = Gn(t, t.pendingProps), i.return = e;
      i.sibling = null;
    }
    return e.child;
  }
  function Mf(t, e) {
    return (t.lanes & e) !== 0 ? true : (t = t.dependencies, !!(t !== null && Wl(t)));
  }
  function Ay(t, e, i) {
    switch (e.tag) {
      case 3:
        kt(e, e.stateNode.containerInfo), bi(e, ze, t.memoizedState.cache), ka();
        break;
      case 27:
      case 5:
        Fn(e);
        break;
      case 4:
        kt(e, e.stateNode.containerInfo);
        break;
      case 10:
        bi(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var r = e.memoizedState;
        if (r !== null) return r.dehydrated !== null ? (qa(e), e.flags |= 128, null) : (i & e.child.childLanes) !== 0 ? $m(t, e, i) : (qa(e), t = ea(t, e, i), t !== null ? t.sibling : null);
        qa(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (r = (i & e.childLanes) !== 0, r || (Rr(t, e, i, false), r = (i & e.childLanes) !== 0), u) {
          if (r) return Km(t, e, i);
          e.flags |= 128;
        }
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), at(Re, Re.current), r) break;
        return null;
      case 22:
      case 23:
        return e.lanes = 0, jm(t, e, i);
      case 24:
        bi(e, ze, t.memoizedState.cache);
    }
    return ea(t, e, i);
  }
  function Qm(t, e, i) {
    if (t !== null) if (t.memoizedProps !== e.pendingProps) Pe = true;
    else {
      if (!Mf(t, i) && (e.flags & 128) === 0) return Pe = false, Ay(t, e, i);
      Pe = (t.flags & 131072) !== 0;
    }
    else Pe = false, zt && (e.flags & 1048576) !== 0 && Y(e, a, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          t = e.pendingProps;
          var r = e.elementType, u = r._init;
          if (r = u(r._payload), e.type = r, typeof r == "function") mo(r) ? (t = kr(r, t), e.tag = 1, e = Ym(null, e, r, t, i)) : (e.tag = 0, e = bf(null, e, r, t, i));
          else {
            if (r != null) {
              if (u = r.$$typeof, u === et) {
                e.tag = 11, e = Zm(null, e, r, t, i);
                break t;
              } else if (u === ft) {
                e.tag = 14, e = Hm(null, e, r, t, i);
                break t;
              }
            }
            throw e = ot(r) || r, Error(f(306, e, ""));
          }
        }
        return e;
      case 0:
        return bf(t, e, e.type, e.pendingProps, i);
      case 1:
        return r = e.type, u = kr(r, e.pendingProps), Ym(t, e, r, u, i);
      case 3:
        t: {
          if (kt(e, e.stateNode.containerInfo), t === null) throw Error(f(387));
          r = e.pendingProps;
          var h = e.memoizedState;
          u = h.element, Qc(t, e), Es(e, r, null, i);
          var _ = e.memoizedState;
          if (r = _.cache, bi(e, ze, r), r !== h.cache && go(e, [ze], i, true), Cs(), r = _.element, h.isDehydrated) if (h = { element: r, isDehydrated: false, cache: _.cache }, e.updateQueue.baseState = h, e.memoizedState = h, e.flags & 256) {
            e = Vm(t, e, r, i);
            break t;
          } else if (r !== u) {
            u = on(Error(f(424)), e), Pa(u), e = Vm(t, e, r, i);
            break t;
          } else {
            switch (t = e.stateNode.containerInfo, t.nodeType) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
            }
            for (Tt = li(t.firstChild), bt = e, zt = true, le = null, pe = true, i = Mm(e, null, r, i), e.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
          }
          else {
            if (ka(), r === u) {
              e = ea(t, e, i);
              break t;
            }
            Ge(t, e, r, i);
          }
          e = e.child;
        }
        return e;
      case 26:
        return gu(t, e), t === null ? (i = Fp(e.type, null, e.pendingProps, null)) ? e.memoizedState = i : zt || (i = e.type, t = e.pendingProps, r = zu(ut.current).createElement(i), r[De] = e, r[Ie] = t, Ve(r, i, t), Me(r), e.stateNode = r) : e.memoizedState = Fp(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return Fn(e), t === null && zt && (r = e.stateNode = Ip(e.type, e.pendingProps, ut.current), bt = e, pe = true, u = Tt, Ja(e.type) ? (sh = u, Tt = li(r.firstChild)) : Tt = u), Ge(t, e, e.pendingProps.children, i), gu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && zt && ((u = r = Tt) && (r = nv(r, e.type, e.pendingProps, pe), r !== null ? (e.stateNode = r, bt = e, Tt = li(r.firstChild), pe = false, u = true) : u = false), u || dn(e)), Fn(e), u = e.type, h = e.pendingProps, _ = t !== null ? t.memoizedProps : null, r = h.children, ih(u, h) ? r = null : _ !== null && ih(u, _) && (e.flags |= 32), e.memoizedState !== null && (u = ef(t, e, by, null, null, i), Ks._currentValue = u), gu(t, e), Ge(t, e, r, i), e.child;
      case 6:
        return t === null && zt && ((t = i = Tt) && (i = iv(i, e.pendingProps, pe), i !== null ? (e.stateNode = i, bt = e, Tt = null, t = true) : t = false), t || dn(e)), null;
      case 13:
        return $m(t, e, i);
      case 4:
        return kt(e, e.stateNode.containerInfo), r = e.pendingProps, t === null ? e.child = wo(e, null, r, i) : Ge(t, e, r, i), e.child;
      case 11:
        return Zm(t, e, e.type, e.pendingProps, i);
      case 7:
        return Ge(t, e, e.pendingProps, i), e.child;
      case 8:
        return Ge(t, e, e.pendingProps.children, i), e.child;
      case 12:
        return Ge(t, e, e.pendingProps.children, i), e.child;
      case 10:
        return r = e.pendingProps, bi(e, e.type, r.value), Ge(t, e, r.children, i), e.child;
      case 9:
        return u = e.type._context, r = e.pendingProps.children, Br(e), u = Fe(u), r = r(u), e.flags |= 1, Ge(t, e, r, i), e.child;
      case 14:
        return Hm(t, e, e.type, e.pendingProps, i);
      case 15:
        return Um(t, e, e.type, e.pendingProps, i);
      case 19:
        return Km(t, e, i);
      case 31:
        return r = e.pendingProps, i = e.mode, r = { mode: r.mode, children: r.children }, t === null ? (i = _u(r, i), i.ref = e.ref, e.child = i, i.return = e, e = i) : (i = Gn(t.child, r), i.ref = e.ref, e.child = i, i.return = e, e = i), e;
      case 22:
        return jm(t, e, i);
      case 24:
        return Br(e), r = Fe(ze), t === null ? (u = $c(), u === null && (u = ue, h = Yc(), u.pooledCache = h, h.refCount++, h !== null && (u.pooledCacheLanes |= i), u = h), e.memoizedState = { parent: r, cache: u }, Kc(e), bi(e, ze, u)) : ((t.lanes & i) !== 0 && (Qc(t, e), Es(e, null, null, i), Cs()), u = t.memoizedState, h = e.memoizedState, u.parent !== r ? (u = { parent: r, cache: r }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), bi(e, ze, r)) : (r = h.cache, bi(e, ze, r), r !== u.cache && go(e, [ze], i, true))), Ge(t, e, e.pendingProps.children, i), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function na(t) {
    t.flags |= 4;
  }
  function Im(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (t.flags |= 16777216, !ag(e)) {
      if (e = Vn.current, e !== null && ((Gt & 4194048) === Gt ? Si !== null : (Gt & 62914560) !== Gt && (Gt & 536870912) === 0 || e !== Si)) throw Ts = Xc, Bd;
      t.flags |= 8192;
    }
  }
  function yu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Jo() : 536870912, t.lanes |= e, Ao |= e);
  }
  function Bs(t, e) {
    if (!zt) switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var i = null; e !== null; ) e.alternate !== null && (i = e), e = e.sibling;
        i === null ? t.tail = null : i.sibling = null;
        break;
      case "collapsed":
        i = t.tail;
        for (var r = null; i !== null; ) i.alternate !== null && (r = i), i = i.sibling;
        r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null;
    }
  }
  function ge(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, i = 0, r = 0;
    if (e) for (var u = t.child; u !== null; ) i |= u.lanes | u.childLanes, r |= u.subtreeFlags & 65011712, r |= u.flags & 65011712, u.return = t, u = u.sibling;
    else for (u = t.child; u !== null; ) i |= u.lanes | u.childLanes, r |= u.subtreeFlags, r |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= r, t.childLanes = i, e;
  }
  function Oy(t, e, i) {
    var r = e.pendingProps;
    switch (gt(e), e.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ge(e), null;
      case 1:
        return ge(e), null;
      case 3:
        return i = e.stateNode, r = null, t !== null && (r = t.memoizedState.cache), e.memoizedState.cache !== r && (e.flags |= 2048), oi(ze), Ke(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (t === null || t.child === null) && (Lr(e) ? na(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Il())), ge(e), null;
      case 26:
        return i = e.memoizedState, t === null ? (na(e), i !== null ? (ge(e), Im(e, i)) : (ge(e), e.flags &= -16777217)) : i ? i !== t.memoizedState ? (na(e), ge(e), Im(e, i)) : (ge(e), e.flags &= -16777217) : (t.memoizedProps !== r && na(e), ge(e), e.flags &= -16777217), null;
      case 27:
        Dn(e), i = ut.current;
        var u = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== r && na(e);
        else {
          if (!r) {
            if (e.stateNode === null) throw Error(f(166));
            return ge(e), null;
          }
          t = dt.current, Lr(e) ? Kl(e) : (t = Ip(u, r, i), e.stateNode = t, na(e));
        }
        return ge(e), null;
      case 5:
        if (Dn(e), i = e.type, t !== null && e.stateNode != null) t.memoizedProps !== r && na(e);
        else {
          if (!r) {
            if (e.stateNode === null) throw Error(f(166));
            return ge(e), null;
          }
          if (t = dt.current, Lr(e)) Kl(e);
          else {
            switch (u = zu(ut.current), t) {
              case 1:
                t = u.createElementNS("http://www.w3.org/2000/svg", i);
                break;
              case 2:
                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                break;
              default:
                switch (i) {
                  case "svg":
                    t = u.createElementNS("http://www.w3.org/2000/svg", i);
                    break;
                  case "math":
                    t = u.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                    break;
                  case "script":
                    t = u.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof r.is == "string" ? u.createElement("select", { is: r.is }) : u.createElement("select"), r.multiple ? t.multiple = true : r.size && (t.size = r.size);
                    break;
                  default:
                    t = typeof r.is == "string" ? u.createElement(i, { is: r.is }) : u.createElement(i);
                }
            }
            t[De] = e, t[Ie] = r;
            t: for (u = e.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                u.child.return = u, u = u.child;
                continue;
              }
              if (u === e) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === e) break t;
                u = u.return;
              }
              u.sibling.return = u.return, u = u.sibling;
            }
            e.stateNode = t;
            t: switch (Ve(t, i, r), i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!r.autoFocus;
                break t;
              case "img":
                t = true;
                break t;
              default:
                t = false;
            }
            t && na(e);
          }
        }
        return ge(e), e.flags &= -16777217, null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== r && na(e);
        else {
          if (typeof r != "string" && e.stateNode === null) throw Error(f(166));
          if (t = ut.current, Lr(e)) {
            if (t = e.stateNode, i = e.memoizedProps, r = null, u = bt, u !== null) switch (u.tag) {
              case 27:
              case 5:
                r = u.memoizedProps;
            }
            t[De] = e, t = !!(t.nodeValue === i || r !== null && r.suppressHydrationWarning === true || Gp(t.nodeValue, i)), t || dn(e);
          } else t = zu(t).createTextNode(r), t[De] = e, e.stateNode = t;
        }
        return ge(e), null;
      case 13:
        if (r = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = Lr(e), r !== null && r.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(f(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(f(317));
              u[De] = e;
            } else ka(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            ge(e), u = false;
          } else u = Il(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = true;
          if (!u) return e.flags & 256 ? (ta(e), e) : (ta(e), null);
        }
        if (ta(e), (e.flags & 128) !== 0) return e.lanes = i, e;
        if (i = r !== null, t = t !== null && t.memoizedState !== null, i) {
          r = e.child, u = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (u = r.alternate.memoizedState.cachePool.pool);
          var h = null;
          r.memoizedState !== null && r.memoizedState.cachePool !== null && (h = r.memoizedState.cachePool.pool), h !== u && (r.flags |= 2048);
        }
        return i !== t && i && (e.child.flags |= 8192), yu(e, e.updateQueue), ge(e), null;
      case 4:
        return Ke(), t === null && Jf(e.stateNode.containerInfo), ge(e), null;
      case 10:
        return oi(e.type), ge(e), null;
      case 19:
        if (it(Re), u = e.memoizedState, u === null) return ge(e), null;
        if (r = (e.flags & 128) !== 0, h = u.rendering, h === null) if (r) Bs(u, false);
        else {
          if (be !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
            if (h = du(t), h !== null) {
              for (e.flags |= 128, Bs(u, false), t = h.updateQueue, e.updateQueue = t, yu(e, t), e.subtreeFlags = 0, t = i, i = e.child; i !== null; ) ys(i, t), i = i.sibling;
              return at(Re, Re.current & 1 | 2), e.child;
            }
            t = t.sibling;
          }
          u.tail !== null && _e() > Su && (e.flags |= 128, r = true, Bs(u, false), e.lanes = 4194304);
        }
        else {
          if (!r) if (t = du(h), t !== null) {
            if (e.flags |= 128, r = true, t = t.updateQueue, e.updateQueue = t, yu(e, t), Bs(u, true), u.tail === null && u.tailMode === "hidden" && !h.alternate && !zt) return ge(e), null;
          } else 2 * _e() - u.renderingStartTime > Su && i !== 536870912 && (e.flags |= 128, r = true, Bs(u, false), e.lanes = 4194304);
          u.isBackwards ? (h.sibling = e.child, e.child = h) : (t = u.last, t !== null ? t.sibling = h : e.child = h, u.last = h);
        }
        return u.tail !== null ? (e = u.tail, u.rendering = e, u.tail = e.sibling, u.renderingStartTime = _e(), e.sibling = null, t = Re.current, at(Re, r ? t & 1 | 2 : t & 1), e) : (ge(e), null);
      case 22:
      case 23:
        return ta(e), Fc(), r = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== r && (e.flags |= 8192) : r && (e.flags |= 8192), r ? (i & 536870912) !== 0 && (e.flags & 128) === 0 && (ge(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : ge(e), i = e.updateQueue, i !== null && yu(e, i.retryQueue), i = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), r = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), r !== i && (e.flags |= 2048), t !== null && it(Dr), null;
      case 24:
        return i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), oi(ze), ge(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function Ly(t, e) {
    switch (gt(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return oi(ze), Ke(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Dn(e), null;
      case 13:
        if (ta(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null) throw Error(f(340));
          ka();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return it(Re), null;
      case 4:
        return Ke(), null;
      case 10:
        return oi(e.type), null;
      case 22:
      case 23:
        return ta(e), Fc(), t !== null && it(Dr), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return oi(ze), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Wm(t, e) {
    switch (gt(e), e.tag) {
      case 3:
        oi(ze), Ke();
        break;
      case 26:
      case 27:
      case 5:
        Dn(e);
        break;
      case 4:
        Ke();
        break;
      case 13:
        ta(e);
        break;
      case 19:
        it(Re);
        break;
      case 10:
        oi(e.type);
        break;
      case 22:
      case 23:
        ta(e), Fc(), t !== null && it(Dr);
        break;
      case 24:
        oi(ze);
    }
  }
  function Ds(t, e) {
    try {
      var i = e.updateQueue, r = i !== null ? i.lastEffect : null;
      if (r !== null) {
        var u = r.next;
        i = u;
        do {
          if ((i.tag & t) === t) {
            r = void 0;
            var h = i.create, _ = i.inst;
            r = h(), _.destroy = r;
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (b) {
      ae(e, e.return, b);
    }
  }
  function Ya(t, e, i) {
    try {
      var r = e.updateQueue, u = r !== null ? r.lastEffect : null;
      if (u !== null) {
        var h = u.next;
        r = h;
        do {
          if ((r.tag & t) === t) {
            var _ = r.inst, b = _.destroy;
            if (b !== void 0) {
              _.destroy = void 0, u = e;
              var M = i, H = b;
              try {
                H();
              } catch (Q) {
                ae(u, M, Q);
              }
            }
          }
          r = r.next;
        } while (r !== h);
      }
    } catch (Q) {
      ae(e, e.return, Q);
    }
  }
  function Jm(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var i = t.stateNode;
      try {
        Hd(e, i);
      } catch (r) {
        ae(t, t.return, r);
      }
    }
  }
  function Fm(t, e, i) {
    i.props = kr(t.type, t.memoizedProps), i.state = t.memoizedState;
    try {
      i.componentWillUnmount();
    } catch (r) {
      ae(t, e, r);
    }
  }
  function Ns(t, e) {
    try {
      var i = t.ref;
      if (i !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var r = t.stateNode;
            break;
          case 30:
            r = t.stateNode;
            break;
          default:
            r = t.stateNode;
        }
        typeof i == "function" ? t.refCleanup = i(r) : i.current = r;
      }
    } catch (u) {
      ae(t, e, u);
    }
  }
  function xi(t, e) {
    var i = t.ref, r = t.refCleanup;
    if (i !== null) if (typeof r == "function") try {
      r();
    } catch (u) {
      ae(t, e, u);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof i == "function") try {
      i(null);
    } catch (u) {
      ae(t, e, u);
    }
    else i.current = null;
  }
  function tp(t) {
    var e = t.type, i = t.memoizedProps, r = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && r.focus();
          break t;
        case "img":
          i.src ? r.src = i.src : i.srcSet && (r.srcset = i.srcSet);
      }
    } catch (u) {
      ae(t, t.return, u);
    }
  }
  function Af(t, e, i) {
    try {
      var r = t.stateNode;
      Wy(r, t.type, i, e), r[Ie] = e;
    } catch (u) {
      ae(t, t.return, u);
    }
  }
  function ep(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ja(t.type) || t.tag === 4;
  }
  function Of(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || ep(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Ja(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Lf(t, e, i) {
    var r = t.tag;
    if (r === 5 || r === 6) t = t.stateNode, e ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(t, e) : (e = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, e.appendChild(t), i = i._reactRootContainer, i != null || e.onclick !== null || (e.onclick = Lu));
    else if (r !== 4 && (r === 27 && Ja(t.type) && (i = t.stateNode, e = null), t = t.child, t !== null)) for (Lf(t, e, i), t = t.sibling; t !== null; ) Lf(t, e, i), t = t.sibling;
  }
  function vu(t, e, i) {
    var r = t.tag;
    if (r === 5 || r === 6) t = t.stateNode, e ? i.insertBefore(t, e) : i.appendChild(t);
    else if (r !== 4 && (r === 27 && Ja(t.type) && (i = t.stateNode), t = t.child, t !== null)) for (vu(t, e, i), t = t.sibling; t !== null; ) vu(t, e, i), t = t.sibling;
  }
  function np(t) {
    var e = t.stateNode, i = t.memoizedProps;
    try {
      for (var r = t.type, u = e.attributes; u.length; ) e.removeAttributeNode(u[0]);
      Ve(e, r, i), e[De] = t, e[Ie] = i;
    } catch (h) {
      ae(t, t.return, h);
    }
  }
  var ia = false, we = false, zf = false, ip = typeof WeakSet == "function" ? WeakSet : Set, Ze = null;
  function zy(t, e) {
    if (t = t.containerInfo, eh = Pu, t = Tr(t), wr(t)) {
      if ("selectionStart" in t) var i = { start: t.selectionStart, end: t.selectionEnd };
      else t: {
        i = (i = t.ownerDocument) && i.defaultView || window;
        var r = i.getSelection && i.getSelection();
        if (r && r.rangeCount !== 0) {
          i = r.anchorNode;
          var u = r.anchorOffset, h = r.focusNode;
          r = r.focusOffset;
          try {
            i.nodeType, h.nodeType;
          } catch {
            i = null;
            break t;
          }
          var _ = 0, b = -1, M = -1, H = 0, Q = 0, J = t, j = null;
          e: for (; ; ) {
            for (var G; J !== i || u !== 0 && J.nodeType !== 3 || (b = _ + u), J !== h || r !== 0 && J.nodeType !== 3 || (M = _ + r), J.nodeType === 3 && (_ += J.nodeValue.length), (G = J.firstChild) !== null; ) j = J, J = G;
            for (; ; ) {
              if (J === t) break e;
              if (j === i && ++H === u && (b = _), j === h && ++Q === r && (M = _), (G = J.nextSibling) !== null) break;
              J = j, j = J.parentNode;
            }
            J = G;
          }
          i = b === -1 || M === -1 ? null : { start: b, end: M };
        } else i = null;
      }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (nh = { focusedElem: t, selectionRange: i }, Pu = false, Ze = e; Ze !== null; ) if (e = Ze, t = e.child, (e.subtreeFlags & 1024) !== 0 && t !== null) t.return = e, Ze = t;
    else for (; Ze !== null; ) {
      switch (e = Ze, h = e.alternate, t = e.flags, e.tag) {
        case 0:
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((t & 1024) !== 0 && h !== null) {
            t = void 0, i = e, u = h.memoizedProps, h = h.memoizedState, r = i.stateNode;
            try {
              var Lt = kr(i.type, u, i.elementType === i.type);
              t = r.getSnapshotBeforeUpdate(Lt, h), r.__reactInternalSnapshotBeforeUpdate = t;
            } catch (Mt) {
              ae(i, i.return, Mt);
            }
          }
          break;
        case 3:
          if ((t & 1024) !== 0) {
            if (t = e.stateNode.containerInfo, i = t.nodeType, i === 9) rh(t);
            else if (i === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                rh(t);
                break;
              default:
                t.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((t & 1024) !== 0) throw Error(f(163));
      }
      if (t = e.sibling, t !== null) {
        t.return = e.return, Ze = t;
        break;
      }
      Ze = e.return;
    }
  }
  function ap(t, e, i) {
    var r = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Va(t, i), r & 4 && Ds(5, i);
        break;
      case 1:
        if (Va(t, i), r & 4) if (t = i.stateNode, e === null) try {
          t.componentDidMount();
        } catch (_) {
          ae(i, i.return, _);
        }
        else {
          var u = kr(i.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
          } catch (_) {
            ae(i, i.return, _);
          }
        }
        r & 64 && Jm(i), r & 512 && Ns(i, i.return);
        break;
      case 3:
        if (Va(t, i), r & 64 && (t = i.updateQueue, t !== null)) {
          if (e = null, i.child !== null) switch (i.child.tag) {
            case 27:
            case 5:
              e = i.child.stateNode;
              break;
            case 1:
              e = i.child.stateNode;
          }
          try {
            Hd(t, e);
          } catch (_) {
            ae(i, i.return, _);
          }
        }
        break;
      case 27:
        e === null && r & 4 && np(i);
      case 26:
      case 5:
        Va(t, i), e === null && r & 4 && tp(i), r & 512 && Ns(i, i.return);
        break;
      case 12:
        Va(t, i);
        break;
      case 13:
        Va(t, i), r & 4 && sp(t, i), r & 64 && (t = i.memoizedState, t !== null && (t = t.dehydrated, t !== null && (i = Uy.bind(null, i), av(t, i))));
        break;
      case 22:
        if (r = i.memoizedState !== null || ia, !r) {
          e = e !== null && e.memoizedState !== null || we, u = ia;
          var h = we;
          ia = r, (we = e) && !h ? $a(t, i, (i.subtreeFlags & 8772) !== 0) : Va(t, i), ia = u, we = h;
        }
        break;
      case 30:
        break;
      default:
        Va(t, i);
    }
  }
  function rp(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, rp(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Ir(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var he = null, pn = false;
  function aa(t, e, i) {
    for (i = i.child; i !== null; ) op(t, e, i), i = i.sibling;
  }
  function op(t, e, i) {
    if (Pt && typeof Pt.onCommitFiberUnmount == "function") try {
      Pt.onCommitFiberUnmount(ye, i);
    } catch {
    }
    switch (i.tag) {
      case 26:
        we || xi(i, e), aa(t, e, i), i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode, i.parentNode.removeChild(i));
        break;
      case 27:
        we || xi(i, e);
        var r = he, u = pn;
        Ja(i.type) && (he = i.stateNode, pn = false), aa(t, e, i), Ys(i.stateNode), he = r, pn = u;
        break;
      case 5:
        we || xi(i, e);
      case 6:
        if (r = he, u = pn, he = null, aa(t, e, i), he = r, pn = u, he !== null) if (pn) try {
          (he.nodeType === 9 ? he.body : he.nodeName === "HTML" ? he.ownerDocument.body : he).removeChild(i.stateNode);
        } catch (h) {
          ae(i, e, h);
        }
        else try {
          he.removeChild(i.stateNode);
        } catch (h) {
          ae(i, e, h);
        }
        break;
      case 18:
        he !== null && (pn ? (t = he, Kp(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, i.stateNode), Js(t)) : Kp(he, i.stateNode));
        break;
      case 4:
        r = he, u = pn, he = i.stateNode.containerInfo, pn = true, aa(t, e, i), he = r, pn = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        we || Ya(2, i, e), we || Ya(4, i, e), aa(t, e, i);
        break;
      case 1:
        we || (xi(i, e), r = i.stateNode, typeof r.componentWillUnmount == "function" && Fm(i, e, r)), aa(t, e, i);
        break;
      case 21:
        aa(t, e, i);
        break;
      case 22:
        we = (r = we) || i.memoizedState !== null, aa(t, e, i), we = r;
        break;
      default:
        aa(t, e, i);
    }
  }
  function sp(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      Js(t);
    } catch (i) {
      ae(e, e.return, i);
    }
  }
  function Ry(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new ip()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new ip()), e;
      default:
        throw Error(f(435, t.tag));
    }
  }
  function Rf(t, e) {
    var i = Ry(t);
    e.forEach(function(r) {
      var u = jy.bind(null, t, r);
      i.has(r) || (i.add(r), r.then(u, u));
    });
  }
  function En(t, e) {
    var i = e.deletions;
    if (i !== null) for (var r = 0; r < i.length; r++) {
      var u = i[r], h = t, _ = e, b = _;
      t: for (; b !== null; ) {
        switch (b.tag) {
          case 27:
            if (Ja(b.type)) {
              he = b.stateNode, pn = false;
              break t;
            }
            break;
          case 5:
            he = b.stateNode, pn = false;
            break t;
          case 3:
          case 4:
            he = b.stateNode.containerInfo, pn = true;
            break t;
        }
        b = b.return;
      }
      if (he === null) throw Error(f(160));
      op(h, _, u), he = null, pn = false, h = u.alternate, h !== null && (h.return = null), u.return = null;
    }
    if (e.subtreeFlags & 13878) for (e = e.child; e !== null; ) lp(e, t), e = e.sibling;
  }
  var si = null;
  function lp(t, e) {
    var i = t.alternate, r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        En(e, t), Mn(t), r & 4 && (Ya(3, t, t.return), Ds(3, t), Ya(5, t, t.return));
        break;
      case 1:
        En(e, t), Mn(t), r & 512 && (we || i === null || xi(i, i.return)), r & 64 && ia && (t = t.updateQueue, t !== null && (r = t.callbacks, r !== null && (i = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = i === null ? r : i.concat(r))));
        break;
      case 26:
        var u = si;
        if (En(e, t), Mn(t), r & 512 && (we || i === null || xi(i, i.return)), r & 4) {
          var h = i !== null ? i.memoizedState : null;
          if (r = t.memoizedState, i === null) if (r === null) if (t.stateNode === null) {
            t: {
              r = t.type, i = t.memoizedProps, u = u.ownerDocument || u;
              e: switch (r) {
                case "title":
                  h = u.getElementsByTagName("title")[0], (!h || h[pa] || h[De] || h.namespaceURI === "http://www.w3.org/2000/svg" || h.hasAttribute("itemprop")) && (h = u.createElement(r), u.head.insertBefore(h, u.querySelector("head > title"))), Ve(h, r, i), h[De] = t, Me(h), r = h;
                  break t;
                case "link":
                  var _ = ng("link", "href", u).get(r + (i.href || ""));
                  if (_) {
                    for (var b = 0; b < _.length; b++) if (h = _[b], h.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && h.getAttribute("rel") === (i.rel == null ? null : i.rel) && h.getAttribute("title") === (i.title == null ? null : i.title) && h.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                      _.splice(b, 1);
                      break e;
                    }
                  }
                  h = u.createElement(r), Ve(h, r, i), u.head.appendChild(h);
                  break;
                case "meta":
                  if (_ = ng("meta", "content", u).get(r + (i.content || ""))) {
                    for (b = 0; b < _.length; b++) if (h = _[b], h.getAttribute("content") === (i.content == null ? null : "" + i.content) && h.getAttribute("name") === (i.name == null ? null : i.name) && h.getAttribute("property") === (i.property == null ? null : i.property) && h.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && h.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                      _.splice(b, 1);
                      break e;
                    }
                  }
                  h = u.createElement(r), Ve(h, r, i), u.head.appendChild(h);
                  break;
                default:
                  throw Error(f(468, r));
              }
              h[De] = t, Me(h), r = h;
            }
            t.stateNode = r;
          } else ig(u, t.type, t.stateNode);
          else t.stateNode = eg(u, r, t.memoizedProps);
          else h !== r ? (h === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : h.count--, r === null ? ig(u, t.type, t.stateNode) : eg(u, r, t.memoizedProps)) : r === null && t.stateNode !== null && Af(t, t.memoizedProps, i.memoizedProps);
        }
        break;
      case 27:
        En(e, t), Mn(t), r & 512 && (we || i === null || xi(i, i.return)), i !== null && r & 4 && Af(t, t.memoizedProps, i.memoizedProps);
        break;
      case 5:
        if (En(e, t), Mn(t), r & 512 && (we || i === null || xi(i, i.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            Zn(u, "");
          } catch (G) {
            ae(t, t.return, G);
          }
        }
        r & 4 && t.stateNode != null && (u = t.memoizedProps, Af(t, u, i !== null ? i.memoizedProps : u)), r & 1024 && (zf = true);
        break;
      case 6:
        if (En(e, t), Mn(t), r & 4) {
          if (t.stateNode === null) throw Error(f(162));
          r = t.memoizedProps, i = t.stateNode;
          try {
            i.nodeValue = r;
          } catch (G) {
            ae(t, t.return, G);
          }
        }
        break;
      case 3:
        if (Du = null, u = si, si = Ru(e.containerInfo), En(e, t), si = u, Mn(t), r & 4 && i !== null && i.memoizedState.isDehydrated) try {
          Js(e.containerInfo);
        } catch (G) {
          ae(t, t.return, G);
        }
        zf && (zf = false, up(t));
        break;
      case 4:
        r = si, si = Ru(t.stateNode.containerInfo), En(e, t), Mn(t), si = r;
        break;
      case 12:
        En(e, t), Mn(t);
        break;
      case 13:
        En(e, t), Mn(t), t.child.flags & 8192 && t.memoizedState !== null != (i !== null && i.memoizedState !== null) && (Zf = _e()), r & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, Rf(t, r)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var M = i !== null && i.memoizedState !== null, H = ia, Q = we;
        if (ia = H || u, we = Q || M, En(e, t), we = Q, ia = H, Mn(t), r & 8192) t: for (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, u && (i === null || M || ia || we || Pr(t)), i = null, e = t; ; ) {
          if (e.tag === 5 || e.tag === 26) {
            if (i === null) {
              M = i = e;
              try {
                if (h = M.stateNode, u) _ = h.style, typeof _.setProperty == "function" ? _.setProperty("display", "none", "important") : _.display = "none";
                else {
                  b = M.stateNode;
                  var J = M.memoizedProps.style, j = J != null && J.hasOwnProperty("display") ? J.display : null;
                  b.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                }
              } catch (G) {
                ae(M, M.return, G);
              }
            }
          } else if (e.tag === 6) {
            if (i === null) {
              M = e;
              try {
                M.stateNode.nodeValue = u ? "" : M.memoizedProps;
              } catch (G) {
                ae(M, M.return, G);
              }
            }
          } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break t;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break t;
            i === e && (i = null), e = e.return;
          }
          i === e && (i = null), e.sibling.return = e.return, e = e.sibling;
        }
        r & 4 && (r = t.updateQueue, r !== null && (i = r.retryQueue, i !== null && (r.retryQueue = null, Rf(t, i))));
        break;
      case 19:
        En(e, t), Mn(t), r & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, Rf(t, r)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        En(e, t), Mn(t);
    }
  }
  function Mn(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var i, r = t.return; r !== null; ) {
          if (ep(r)) {
            i = r;
            break;
          }
          r = r.return;
        }
        if (i == null) throw Error(f(160));
        switch (i.tag) {
          case 27:
            var u = i.stateNode, h = Of(t);
            vu(t, h, u);
            break;
          case 5:
            var _ = i.stateNode;
            i.flags & 32 && (Zn(_, ""), i.flags &= -33);
            var b = Of(t);
            vu(t, b, _);
            break;
          case 3:
          case 4:
            var M = i.stateNode.containerInfo, H = Of(t);
            Lf(t, H, M);
            break;
          default:
            throw Error(f(161));
        }
      } catch (Q) {
        ae(t, t.return, Q);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function up(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var e = t;
      up(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
    }
  }
  function Va(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) ap(t, e.alternate, e), e = e.sibling;
  }
  function Pr(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ya(4, e, e.return), Pr(e);
          break;
        case 1:
          xi(e, e.return);
          var i = e.stateNode;
          typeof i.componentWillUnmount == "function" && Fm(e, e.return, i), Pr(e);
          break;
        case 27:
          Ys(e.stateNode);
        case 26:
        case 5:
          xi(e, e.return), Pr(e);
          break;
        case 22:
          e.memoizedState === null && Pr(e);
          break;
        case 30:
          Pr(e);
          break;
        default:
          Pr(e);
      }
      t = t.sibling;
    }
  }
  function $a(t, e, i) {
    for (i = i && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var r = e.alternate, u = t, h = e, _ = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          $a(u, h, i), Ds(4, h);
          break;
        case 1:
          if ($a(u, h, i), r = h, u = r.stateNode, typeof u.componentDidMount == "function") try {
            u.componentDidMount();
          } catch (H) {
            ae(r, r.return, H);
          }
          if (r = h, u = r.updateQueue, u !== null) {
            var b = r.stateNode;
            try {
              var M = u.shared.hiddenCallbacks;
              if (M !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < M.length; u++) Zd(M[u], b);
            } catch (H) {
              ae(r, r.return, H);
            }
          }
          i && _ & 64 && Jm(h), Ns(h, h.return);
          break;
        case 27:
          np(h);
        case 26:
        case 5:
          $a(u, h, i), i && r === null && _ & 4 && tp(h), Ns(h, h.return);
          break;
        case 12:
          $a(u, h, i);
          break;
        case 13:
          $a(u, h, i), i && _ & 4 && sp(u, h);
          break;
        case 22:
          h.memoizedState === null && $a(u, h, i), Ns(h, h.return);
          break;
        case 30:
          break;
        default:
          $a(u, h, i);
      }
      e = e.sibling;
    }
  }
  function Bf(t, e) {
    var i = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== i && (t != null && t.refCount++, i != null && bs(i));
  }
  function Df(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && bs(t));
  }
  function Ti(t, e, i, r) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) cp(t, e, i, r), e = e.sibling;
  }
  function cp(t, e, i, r) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ti(t, e, i, r), u & 2048 && Ds(9, e);
        break;
      case 1:
        Ti(t, e, i, r);
        break;
      case 3:
        Ti(t, e, i, r), u & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && bs(t)));
        break;
      case 12:
        if (u & 2048) {
          Ti(t, e, i, r), t = e.stateNode;
          try {
            var h = e.memoizedProps, _ = h.id, b = h.onPostCommit;
            typeof b == "function" && b(_, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (M) {
            ae(e, e.return, M);
          }
        } else Ti(t, e, i, r);
        break;
      case 13:
        Ti(t, e, i, r);
        break;
      case 23:
        break;
      case 22:
        h = e.stateNode, _ = e.alternate, e.memoizedState !== null ? h._visibility & 2 ? Ti(t, e, i, r) : ks(t, e) : h._visibility & 2 ? Ti(t, e, i, r) : (h._visibility |= 2, Co(t, e, i, r, (e.subtreeFlags & 10256) !== 0)), u & 2048 && Bf(_, e);
        break;
      case 24:
        Ti(t, e, i, r), u & 2048 && Df(e.alternate, e);
        break;
      default:
        Ti(t, e, i, r);
    }
  }
  function Co(t, e, i, r, u) {
    for (u = u && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var h = t, _ = e, b = i, M = r, H = _.flags;
      switch (_.tag) {
        case 0:
        case 11:
        case 15:
          Co(h, _, b, M, u), Ds(8, _);
          break;
        case 23:
          break;
        case 22:
          var Q = _.stateNode;
          _.memoizedState !== null ? Q._visibility & 2 ? Co(h, _, b, M, u) : ks(h, _) : (Q._visibility |= 2, Co(h, _, b, M, u)), u && H & 2048 && Bf(_.alternate, _);
          break;
        case 24:
          Co(h, _, b, M, u), u && H & 2048 && Df(_.alternate, _);
          break;
        default:
          Co(h, _, b, M, u);
      }
      e = e.sibling;
    }
  }
  function ks(t, e) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
      var i = t, r = e, u = r.flags;
      switch (r.tag) {
        case 22:
          ks(i, r), u & 2048 && Bf(r.alternate, r);
          break;
        case 24:
          ks(i, r), u & 2048 && Df(r.alternate, r);
          break;
        default:
          ks(i, r);
      }
      e = e.sibling;
    }
  }
  var Ps = 8192;
  function Eo(t) {
    if (t.subtreeFlags & Ps) for (t = t.child; t !== null; ) fp(t), t = t.sibling;
  }
  function fp(t) {
    switch (t.tag) {
      case 26:
        Eo(t), t.flags & Ps && t.memoizedState !== null && _v(si, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Eo(t);
        break;
      case 3:
      case 4:
        var e = si;
        si = Ru(t.stateNode.containerInfo), Eo(t), si = e;
        break;
      case 22:
        t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = Ps, Ps = 16777216, Eo(t), Ps = e) : Eo(t));
        break;
      default:
        Eo(t);
    }
  }
  function hp(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Zs(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null) for (var i = 0; i < e.length; i++) {
        var r = e[i];
        Ze = r, mp(r, t);
      }
      hp(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) dp(t), t = t.sibling;
  }
  function dp(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Zs(t), t.flags & 2048 && Ya(9, t, t.return);
        break;
      case 3:
        Zs(t);
        break;
      case 12:
        Zs(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, bu(t)) : Zs(t);
        break;
      default:
        Zs(t);
    }
  }
  function bu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null) for (var i = 0; i < e.length; i++) {
        var r = e[i];
        Ze = r, mp(r, t);
      }
      hp(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Ya(8, e, e.return), bu(e);
          break;
        case 22:
          i = e.stateNode, i._visibility & 2 && (i._visibility &= -3, bu(e));
          break;
        default:
          bu(e);
      }
      t = t.sibling;
    }
  }
  function mp(t, e) {
    for (; Ze !== null; ) {
      var i = Ze;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Ya(8, i, e);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var r = i.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          bs(i.memoizedState.cache);
      }
      if (r = i.child, r !== null) r.return = i, Ze = r;
      else t: for (i = t; Ze !== null; ) {
        r = Ze;
        var u = r.sibling, h = r.return;
        if (rp(r), r === i) {
          Ze = null;
          break t;
        }
        if (u !== null) {
          u.return = h, Ze = u;
          break t;
        }
        Ze = h;
      }
    }
  }
  var By = { getCacheForType: function(t) {
    var e = Fe(ze), i = e.data.get(t);
    return i === void 0 && (i = t(), e.data.set(t, i)), i;
  } }, Dy = typeof WeakMap == "function" ? WeakMap : Map, It = 0, ue = null, Ut = null, Gt = 0, Wt = 0, An = null, Xa = false, Mo = false, Nf = false, ra = 0, be = 0, Ka = 0, Zr = 0, kf = 0, $n = 0, Ao = 0, Hs = null, gn = null, Pf = false, Zf = 0, Su = 1 / 0, xu = null, Qa = null, Ye = 0, Ia = null, Oo = null, Lo = 0, Hf = 0, Uf = null, pp = null, Us = 0, jf = null;
  function On() {
    if ((It & 2) !== 0 && Gt !== 0) return Gt & -Gt;
    if (N.T !== null) {
      var t = _o;
      return t !== 0 ? t : Kf();
    }
    return Tl();
  }
  function gp() {
    $n === 0 && ($n = (Gt & 536870912) === 0 || zt ? bl() : 536870912);
    var t = Vn.current;
    return t !== null && (t.flags |= 32), $n;
  }
  function Ln(t, e, i) {
    (t === ue && (Wt === 2 || Wt === 9) || t.cancelPendingCommit !== null) && (zo(t, 0), Wa(t, Gt, $n, false)), da(t, i), ((It & 2) === 0 || t !== ue) && (t === ue && ((It & 2) === 0 && (Zr |= i), be === 4 && Wa(t, Gt, $n, false)), wi(t));
  }
  function _p(t, e, i) {
    if ((It & 6) !== 0) throw Error(f(327));
    var r = !i && (e & 124) === 0 && (e & t.expiredLanes) === 0 || ti(t, e), u = r ? Py(t, e) : Yf(t, e, true), h = r;
    do {
      if (u === 0) {
        Mo && !r && Wa(t, e, 0, false);
        break;
      } else {
        if (i = t.current.alternate, h && !Ny(i)) {
          u = Yf(t, e, false), h = false;
          continue;
        }
        if (u === 2) {
          if (h = e, t.errorRecoveryDisabledLanes & h) var _ = 0;
          else _ = t.pendingLanes & -536870913, _ = _ !== 0 ? _ : _ & 536870912 ? 536870912 : 0;
          if (_ !== 0) {
            e = _;
            t: {
              var b = t;
              u = Hs;
              var M = b.current.memoizedState.isDehydrated;
              if (M && (zo(b, _).flags |= 256), _ = Yf(b, _, false), _ !== 2) {
                if (Nf && !M) {
                  b.errorRecoveryDisabledLanes |= h, Zr |= h, u = 4;
                  break t;
                }
                h = gn, gn = u, h !== null && (gn === null ? gn = h : gn.push.apply(gn, h));
              }
              u = _;
            }
            if (h = false, u !== 2) continue;
          }
        }
        if (u === 1) {
          zo(t, 0), Wa(t, e, 0, true);
          break;
        }
        t: {
          switch (r = t, h = u, h) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Wa(r, e, $n, !Xa);
              break t;
            case 2:
              gn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && (u = Zf + 300 - _e(), 10 < u)) {
            if (Wa(r, e, $n, !Xa), Kr(r, 0, true) !== 0) break t;
            r.timeoutHandle = $p(yp.bind(null, r, i, gn, xu, Pf, e, $n, Zr, Ao, Xa, h, 2, -0, 0), u);
            break t;
          }
          yp(r, i, gn, xu, Pf, e, $n, Zr, Ao, Xa, h, 0, -0, 0);
        }
      }
      break;
    } while (true);
    wi(t);
  }
  function yp(t, e, i, r, u, h, _, b, M, H, Q, J, j, G) {
    if (t.timeoutHandle = -1, J = e.subtreeFlags, (J & 8192 || (J & 16785408) === 16785408) && (Xs = { stylesheets: null, count: 0, unsuspend: gv }, fp(e), J = yv(), J !== null)) {
      t.cancelPendingCommit = J(Cp.bind(null, t, e, h, i, r, u, _, b, M, Q, 1, j, G)), Wa(t, h, _, !H);
      return;
    }
    Cp(t, e, h, i, r, u, _, b, M);
  }
  function Ny(t) {
    for (var e = t; ; ) {
      var i = e.tag;
      if ((i === 0 || i === 11 || i === 15) && e.flags & 16384 && (i = e.updateQueue, i !== null && (i = i.stores, i !== null))) for (var r = 0; r < i.length; r++) {
        var u = i[r], h = u.getSnapshot;
        u = u.value;
        try {
          if (!an(h(), u)) return false;
        } catch {
          return false;
        }
      }
      if (i = e.child, e.subtreeFlags & 16384 && i !== null) i.return = e, e = i;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return true;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return true;
  }
  function Wa(t, e, i, r) {
    e &= ~kf, e &= ~Zr, t.suspendedLanes |= e, t.pingedLanes &= ~e, r && (t.warmLanes |= e), r = t.expirationTimes;
    for (var u = e; 0 < u; ) {
      var h = 31 - re(u), _ = 1 << h;
      r[h] = -1, u &= ~_;
    }
    i !== 0 && Sl(t, i, e);
  }
  function Tu() {
    return (It & 6) === 0 ? (js(0), false) : true;
  }
  function qf() {
    if (Ut !== null) {
      if (Wt === 0) var t = Ut.return;
      else t = Ut, ri = Yn = null, rf(t), To = null, zs = 0, t = Ut;
      for (; t !== null; ) Wm(t.alternate, t), t = t.return;
      Ut = null;
    }
  }
  function zo(t, e) {
    var i = t.timeoutHandle;
    i !== -1 && (t.timeoutHandle = -1, Fy(i)), i = t.cancelPendingCommit, i !== null && (t.cancelPendingCommit = null, i()), qf(), ue = t, Ut = i = Gn(t.current, null), Gt = e, Wt = 0, An = null, Xa = false, Mo = ti(t, e), Nf = false, Ao = $n = kf = Zr = Ka = be = 0, gn = Hs = null, Pf = false, (e & 8) !== 0 && (e |= e & 32);
    var r = t.entangledLanes;
    if (r !== 0) for (t = t.entanglements, r &= e; 0 < r; ) {
      var u = 31 - re(r), h = 1 << u;
      e |= t[u], r &= ~h;
    }
    return ra = e, Er(), i;
  }
  function vp(t, e) {
    Nt = null, N.H = cu, e === xs || e === tu ? (e = kd(), Wt = 3) : e === Bd ? (e = kd(), Wt = 4) : Wt = e === Pm ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, An = e, Ut === null && (be = 1, pu(t, on(e, t.current)));
  }
  function bp() {
    var t = N.H;
    return N.H = cu, t === null ? cu : t;
  }
  function Sp() {
    var t = N.A;
    return N.A = By, t;
  }
  function Gf() {
    be = 4, Xa || (Gt & 4194048) !== Gt && Vn.current !== null || (Mo = true), (Ka & 134217727) === 0 && (Zr & 134217727) === 0 || ue === null || Wa(ue, Gt, $n, false);
  }
  function Yf(t, e, i) {
    var r = It;
    It |= 2;
    var u = bp(), h = Sp();
    (ue !== t || Gt !== e) && (xu = null, zo(t, e)), e = false;
    var _ = be;
    t: do
      try {
        if (Wt !== 0 && Ut !== null) {
          var b = Ut, M = An;
          switch (Wt) {
            case 8:
              qf(), _ = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Vn.current === null && (e = true);
              var H = Wt;
              if (Wt = 0, An = null, Ro(t, b, M, H), i && Mo) {
                _ = 0;
                break t;
              }
              break;
            default:
              H = Wt, Wt = 0, An = null, Ro(t, b, M, H);
          }
        }
        ky(), _ = be;
        break;
      } catch (Q) {
        vp(t, Q);
      }
    while (true);
    return e && t.shellSuspendCounter++, ri = Yn = null, It = r, N.H = u, N.A = h, Ut === null && (ue = null, Gt = 0, Er()), _;
  }
  function ky() {
    for (; Ut !== null; ) xp(Ut);
  }
  function Py(t, e) {
    var i = It;
    It |= 2;
    var r = bp(), u = Sp();
    ue !== t || Gt !== e ? (xu = null, Su = _e() + 500, zo(t, e)) : Mo = ti(t, e);
    t: do
      try {
        if (Wt !== 0 && Ut !== null) {
          e = Ut;
          var h = An;
          e: switch (Wt) {
            case 1:
              Wt = 0, An = null, Ro(t, e, h, 1);
              break;
            case 2:
            case 9:
              if (Dd(h)) {
                Wt = 0, An = null, Tp(e);
                break;
              }
              e = function() {
                Wt !== 2 && Wt !== 9 || ue !== t || (Wt = 7), wi(t);
              }, h.then(e, e);
              break t;
            case 3:
              Wt = 7;
              break t;
            case 4:
              Wt = 5;
              break t;
            case 7:
              Dd(h) ? (Wt = 0, An = null, Tp(e)) : (Wt = 0, An = null, Ro(t, e, h, 7));
              break;
            case 5:
              var _ = null;
              switch (Ut.tag) {
                case 26:
                  _ = Ut.memoizedState;
                case 5:
                case 27:
                  var b = Ut;
                  if (!_ || ag(_)) {
                    Wt = 0, An = null;
                    var M = b.sibling;
                    if (M !== null) Ut = M;
                    else {
                      var H = b.return;
                      H !== null ? (Ut = H, wu(H)) : Ut = null;
                    }
                    break e;
                  }
              }
              Wt = 0, An = null, Ro(t, e, h, 5);
              break;
            case 6:
              Wt = 0, An = null, Ro(t, e, h, 6);
              break;
            case 8:
              qf(), be = 6;
              break t;
            default:
              throw Error(f(462));
          }
        }
        Zy();
        break;
      } catch (Q) {
        vp(t, Q);
      }
    while (true);
    return ri = Yn = null, N.H = r, N.A = u, It = i, Ut !== null ? 0 : (ue = null, Gt = 0, Er(), be);
  }
  function Zy() {
    for (; Ut !== null && !Ri(); ) xp(Ut);
  }
  function xp(t) {
    var e = Qm(t.alternate, t, ra);
    t.memoizedProps = t.pendingProps, e === null ? wu(t) : Ut = e;
  }
  function Tp(t) {
    var e = t, i = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Gm(i, e, e.pendingProps, e.type, void 0, Gt);
        break;
      case 11:
        e = Gm(i, e, e.pendingProps, e.type.render, e.ref, Gt);
        break;
      case 5:
        rf(e);
      default:
        Wm(i, e), e = Ut = ys(e, ra), e = Qm(i, e, ra);
    }
    t.memoizedProps = t.pendingProps, e === null ? wu(t) : Ut = e;
  }
  function Ro(t, e, i, r) {
    ri = Yn = null, rf(e), To = null, zs = 0;
    var u = e.return;
    try {
      if (My(t, u, e, i, Gt)) {
        be = 1, pu(t, on(i, t.current)), Ut = null;
        return;
      }
    } catch (h) {
      if (u !== null) throw Ut = u, h;
      be = 1, pu(t, on(i, t.current)), Ut = null;
      return;
    }
    e.flags & 32768 ? (zt || r === 1 ? t = true : Mo || (Gt & 536870912) !== 0 ? t = false : (Xa = t = true, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Vn.current, r !== null && r.tag === 13 && (r.flags |= 16384))), wp(e, t)) : wu(e);
  }
  function wu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        wp(e, Xa);
        return;
      }
      t = e.return;
      var i = Oy(e.alternate, e, ra);
      if (i !== null) {
        Ut = i;
        return;
      }
      if (e = e.sibling, e !== null) {
        Ut = e;
        return;
      }
      Ut = e = t;
    } while (e !== null);
    be === 0 && (be = 5);
  }
  function wp(t, e) {
    do {
      var i = Ly(t.alternate, t);
      if (i !== null) {
        i.flags &= 32767, Ut = i;
        return;
      }
      if (i = t.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !e && (t = t.sibling, t !== null)) {
        Ut = t;
        return;
      }
      Ut = t = i;
    } while (t !== null);
    be = 6, Ut = null;
  }
  function Cp(t, e, i, r, u, h, _, b, M) {
    t.cancelPendingCommit = null;
    do
      Cu();
    while (Ye !== 0);
    if ((It & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (h = e.lanes | e.childLanes, h |= Cn, Cc(t, i, h, _, b, M), t === ue && (Ut = ue = null, Gt = 0), Oo = e, Ia = t, Lo = i, Hf = h, Uf = u, pp = r, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, qy(cn, function() {
        return Lp(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), r = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || r) {
        r = N.T, N.T = null, u = st.p, st.p = 2, _ = It, It |= 4;
        try {
          zy(t, e, i);
        } finally {
          It = _, st.p = u, N.T = r;
        }
      }
      Ye = 1, Ep(), Mp(), Ap();
    }
  }
  function Ep() {
    if (Ye === 1) {
      Ye = 0;
      var t = Ia, e = Oo, i = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || i) {
        i = N.T, N.T = null;
        var r = st.p;
        st.p = 2;
        var u = It;
        It |= 4;
        try {
          lp(e, t);
          var h = nh, _ = Tr(t.containerInfo), b = h.focusedElem, M = h.selectionRange;
          if (_ !== b && b && b.ownerDocument && lo(b.ownerDocument.documentElement, b)) {
            if (M !== null && wr(b)) {
              var H = M.start, Q = M.end;
              if (Q === void 0 && (Q = H), "selectionStart" in b) b.selectionStart = H, b.selectionEnd = Math.min(Q, b.value.length);
              else {
                var J = b.ownerDocument || document, j = J && J.defaultView || window;
                if (j.getSelection) {
                  var G = j.getSelection(), Lt = b.textContent.length, Mt = Math.min(M.start, Lt), ne = M.end === void 0 ? Mt : Math.min(M.end, Lt);
                  !G.extend && Mt > ne && (_ = ne, ne = Mt, Mt = _);
                  var B = gs(b, Mt), O = gs(b, ne);
                  if (B && O && (G.rangeCount !== 1 || G.anchorNode !== B.node || G.anchorOffset !== B.offset || G.focusNode !== O.node || G.focusOffset !== O.offset)) {
                    var P = J.createRange();
                    P.setStart(B.node, B.offset), G.removeAllRanges(), Mt > ne ? (G.addRange(P), G.extend(O.node, O.offset)) : (P.setEnd(O.node, O.offset), G.addRange(P));
                  }
                }
              }
            }
            for (J = [], G = b; G = G.parentNode; ) G.nodeType === 1 && J.push({ element: G, left: G.scrollLeft, top: G.scrollTop });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < J.length; b++) {
              var I = J[b];
              I.element.scrollLeft = I.left, I.element.scrollTop = I.top;
            }
          }
          Pu = !!eh, nh = eh = null;
        } finally {
          It = u, st.p = r, N.T = i;
        }
      }
      t.current = e, Ye = 2;
    }
  }
  function Mp() {
    if (Ye === 2) {
      Ye = 0;
      var t = Ia, e = Oo, i = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || i) {
        i = N.T, N.T = null;
        var r = st.p;
        st.p = 2;
        var u = It;
        It |= 4;
        try {
          ap(t, e.alternate, e);
        } finally {
          It = u, st.p = r, N.T = i;
        }
      }
      Ye = 3;
    }
  }
  function Ap() {
    if (Ye === 4 || Ye === 3) {
      Ye = 0, ca();
      var t = Ia, e = Oo, i = Lo, r = pp;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Ye = 5 : (Ye = 0, Oo = Ia = null, Op(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (Qa = null), ts(i), e = e.stateNode, Pt && typeof Pt.onCommitFiberRoot == "function") try {
        Pt.onCommitFiberRoot(ye, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
      if (r !== null) {
        e = N.T, u = st.p, st.p = 2, N.T = null;
        try {
          for (var h = t.onRecoverableError, _ = 0; _ < r.length; _++) {
            var b = r[_];
            h(b.value, { componentStack: b.stack });
          }
        } finally {
          N.T = e, st.p = u;
        }
      }
      (Lo & 3) !== 0 && Cu(), wi(t), u = t.pendingLanes, (i & 4194090) !== 0 && (u & 42) !== 0 ? t === jf ? Us++ : (Us = 0, jf = t) : Us = 0, js(0);
    }
  }
  function Op(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, bs(e)));
  }
  function Cu(t) {
    return Ep(), Mp(), Ap(), Lp();
  }
  function Lp() {
    if (Ye !== 5) return false;
    var t = Ia, e = Hf;
    Hf = 0;
    var i = ts(Lo), r = N.T, u = st.p;
    try {
      st.p = 32 > i ? 32 : i, N.T = null, i = Uf, Uf = null;
      var h = Ia, _ = Lo;
      if (Ye = 0, Oo = Ia = null, Lo = 0, (It & 6) !== 0) throw Error(f(331));
      var b = It;
      if (It |= 4, dp(h.current), cp(h, h.current, _, i), It = b, js(0, false), Pt && typeof Pt.onPostCommitFiberRoot == "function") try {
        Pt.onPostCommitFiberRoot(ye, h);
      } catch {
      }
      return true;
    } finally {
      st.p = u, N.T = r, Op(t, e);
    }
  }
  function zp(t, e, i) {
    e = on(i, e), e = vf(t.stateNode, e, 2), t = Ua(t, e, 2), t !== null && (da(t, 2), wi(t));
  }
  function ae(t, e, i) {
    if (t.tag === 3) zp(t, t, i);
    else for (; e !== null; ) {
      if (e.tag === 3) {
        zp(e, t, i);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Qa === null || !Qa.has(r))) {
          t = on(i, t), i = Nm(2), r = Ua(e, i, 2), r !== null && (km(i, r, e, t), da(r, 2), wi(r));
          break;
        }
      }
      e = e.return;
    }
  }
  function Vf(t, e, i) {
    var r = t.pingCache;
    if (r === null) {
      r = t.pingCache = new Dy();
      var u = /* @__PURE__ */ new Set();
      r.set(e, u);
    } else u = r.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), r.set(e, u));
    u.has(i) || (Nf = true, u.add(i), t = Hy.bind(null, t, e, i), e.then(t, t));
  }
  function Hy(t, e, i) {
    var r = t.pingCache;
    r !== null && r.delete(e), t.pingedLanes |= t.suspendedLanes & i, t.warmLanes &= ~i, ue === t && (Gt & i) === i && (be === 4 || be === 3 && (Gt & 62914560) === Gt && 300 > _e() - Zf ? (It & 2) === 0 && zo(t, 0) : kf |= i, Ao === Gt && (Ao = 0)), wi(t);
  }
  function Rp(t, e) {
    e === 0 && (e = Jo()), t = Da(t, e), t !== null && (da(t, e), wi(t));
  }
  function Uy(t) {
    var e = t.memoizedState, i = 0;
    e !== null && (i = e.retryLane), Rp(t, i);
  }
  function jy(t, e) {
    var i = 0;
    switch (t.tag) {
      case 13:
        var r = t.stateNode, u = t.memoizedState;
        u !== null && (i = u.retryLane);
        break;
      case 19:
        r = t.stateNode;
        break;
      case 22:
        r = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    r !== null && r.delete(e), Rp(t, i);
  }
  function qy(t, e) {
    return Nn(t, e);
  }
  var Eu = null, Bo = null, $f = false, Mu = false, Xf = false, Hr = 0;
  function wi(t) {
    t !== Bo && t.next === null && (Bo === null ? Eu = Bo = t : Bo = Bo.next = t), Mu = true, $f || ($f = true, Yy());
  }
  function js(t, e) {
    if (!Xf && Mu) {
      Xf = true;
      do
        for (var i = false, r = Eu; r !== null; ) {
          if (t !== 0) {
            var u = r.pendingLanes;
            if (u === 0) var h = 0;
            else {
              var _ = r.suspendedLanes, b = r.pingedLanes;
              h = (1 << 31 - re(42 | t) + 1) - 1, h &= u & ~(_ & ~b), h = h & 201326741 ? h & 201326741 | 1 : h ? h | 2 : 0;
            }
            h !== 0 && (i = true, kp(r, h));
          } else h = Gt, h = Kr(r, r === ue ? h : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), (h & 3) === 0 || ti(r, h) || (i = true, kp(r, h));
          r = r.next;
        }
      while (i);
      Xf = false;
    }
  }
  function Gy() {
    Bp();
  }
  function Bp() {
    Mu = $f = false;
    var t = 0;
    Hr !== 0 && (Jy() && (t = Hr), Hr = 0);
    for (var e = _e(), i = null, r = Eu; r !== null; ) {
      var u = r.next, h = Dp(r, e);
      h === 0 ? (r.next = null, i === null ? Eu = u : i.next = u, u === null && (Bo = i)) : (i = r, (t !== 0 || (h & 3) !== 0) && (Mu = true)), r = u;
    }
    js(t);
  }
  function Dp(t, e) {
    for (var i = t.suspendedLanes, r = t.pingedLanes, u = t.expirationTimes, h = t.pendingLanes & -62914561; 0 < h; ) {
      var _ = 31 - re(h), b = 1 << _, M = u[_];
      M === -1 ? ((b & i) === 0 || (b & r) !== 0) && (u[_] = wc(b, e)) : M <= e && (t.expiredLanes |= b), h &= ~b;
    }
    if (e = ue, i = Gt, i = Kr(t, t === e ? i : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), r = t.callbackNode, i === 0 || t === e && (Wt === 2 || Wt === 9) || t.cancelPendingCommit !== null) return r !== null && r !== null && kn(r), t.callbackNode = null, t.callbackPriority = 0;
    if ((i & 3) === 0 || ti(t, i)) {
      if (e = i & -i, e === t.callbackPriority) return e;
      switch (r !== null && kn(r), ts(i)) {
        case 2:
        case 8:
          i = yn;
          break;
        case 32:
          i = cn;
          break;
        case 268435456:
          i = cr;
          break;
        default:
          i = cn;
      }
      return r = Np.bind(null, t), i = Nn(i, r), t.callbackPriority = e, t.callbackNode = i, e;
    }
    return r !== null && r !== null && kn(r), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Np(t, e) {
    if (Ye !== 0 && Ye !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var i = t.callbackNode;
    if (Cu() && t.callbackNode !== i) return null;
    var r = Gt;
    return r = Kr(t, t === ue ? r : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), r === 0 ? null : (_p(t, r, e), Dp(t, _e()), t.callbackNode != null && t.callbackNode === i ? Np.bind(null, t) : null);
  }
  function kp(t, e) {
    if (Cu()) return null;
    _p(t, e, true);
  }
  function Yy() {
    tv(function() {
      (It & 6) !== 0 ? Nn(Be, Gy) : Bp();
    });
  }
  function Kf() {
    return Hr === 0 && (Hr = bl()), Hr;
  }
  function Pp(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Sa("" + t);
  }
  function Zp(t, e) {
    var i = e.ownerDocument.createElement("input");
    return i.name = e.name, i.value = e.value, t.id && i.setAttribute("form", t.id), e.parentNode.insertBefore(i, e), t = new FormData(t), i.parentNode.removeChild(i), t;
  }
  function Vy(t, e, i, r, u) {
    if (e === "submit" && i && i.stateNode === u) {
      var h = Pp((u[Ie] || null).action), _ = r.submitter;
      _ && (e = (e = _[Ie] || null) ? Pp(e.formAction) : _.getAttribute("formAction"), e !== null && (h = e, _ = null));
      var b = new yr("action", "action", null, r, u);
      t.push({ event: b, listeners: [{ instance: null, listener: function() {
        if (r.defaultPrevented) {
          if (Hr !== 0) {
            var M = _ ? Zp(u, _) : new FormData(u);
            mf(i, { pending: true, data: M, method: u.method, action: h }, null, M);
          }
        } else typeof h == "function" && (b.preventDefault(), M = _ ? Zp(u, _) : new FormData(u), mf(i, { pending: true, data: M, method: u.method, action: h }, h, M));
      }, currentTarget: u }] });
    }
  }
  for (var Qf = 0; Qf < Ki.length; Qf++) {
    var If = Ki[Qf], $y = If.toLowerCase(), Xy = If[0].toUpperCase() + If.slice(1);
    wn($y, "on" + Xy);
  }
  wn(Vl, "onAnimationEnd"), wn(Tn, "onAnimationIteration"), wn(Cr, "onAnimationStart"), wn("dblclick", "onDoubleClick"), wn("focusin", "onFocus"), wn("focusout", "onBlur"), wn(qc, "onTransitionRun"), wn(ho, "onTransitionStart"), wn(Gc, "onTransitionCancel"), wn(_s, "onTransitionEnd"), ki("onMouseEnter", ["mouseout", "mouseover"]), ki("onMouseLeave", ["mouseout", "mouseover"]), ki("onPointerEnter", ["pointerout", "pointerover"]), ki("onPointerLeave", ["pointerout", "pointerover"]), Ni("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ni("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ni("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ni("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ni("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ni("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var qs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ky = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qs));
  function Hp(t, e) {
    e = (e & 4) !== 0;
    for (var i = 0; i < t.length; i++) {
      var r = t[i], u = r.event;
      r = r.listeners;
      t: {
        var h = void 0;
        if (e) for (var _ = r.length - 1; 0 <= _; _--) {
          var b = r[_], M = b.instance, H = b.currentTarget;
          if (b = b.listener, M !== h && u.isPropagationStopped()) break t;
          h = b, u.currentTarget = H;
          try {
            h(u);
          } catch (Q) {
            mu(Q);
          }
          u.currentTarget = null, h = M;
        }
        else for (_ = 0; _ < r.length; _++) {
          if (b = r[_], M = b.instance, H = b.currentTarget, b = b.listener, M !== h && u.isPropagationStopped()) break t;
          h = b, u.currentTarget = H;
          try {
            h(u);
          } catch (Q) {
            mu(Q);
          }
          u.currentTarget = null, h = M;
        }
      }
    }
  }
  function jt(t, e) {
    var i = e[fn];
    i === void 0 && (i = e[fn] = /* @__PURE__ */ new Set());
    var r = t + "__bubble";
    i.has(r) || (Up(e, t, 2, false), i.add(r));
  }
  function Wf(t, e, i) {
    var r = 0;
    e && (r |= 4), Up(i, t, r, e);
  }
  var Au = "_reactListening" + Math.random().toString(36).slice(2);
  function Jf(t) {
    if (!t[Au]) {
      t[Au] = true, Cl.forEach(function(i) {
        i !== "selectionchange" && (Ky.has(i) || Wf(i, false, t), Wf(i, true, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Au] || (e[Au] = true, Wf("selectionchange", false, e));
    }
  }
  function Up(t, e, i, r) {
    switch (cg(e)) {
      case 2:
        var u = Sv;
        break;
      case 8:
        u = xv;
        break;
      default:
        u = hh;
    }
    i = u.bind(null, e, i, t), u = void 0, !_r || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = true), r ? u !== void 0 ? t.addEventListener(e, i, { capture: true, passive: u }) : t.addEventListener(e, i, true) : u !== void 0 ? t.addEventListener(e, i, { passive: u }) : t.addEventListener(e, i, false);
  }
  function Ff(t, e, i, r, u) {
    var h = r;
    if ((e & 1) === 0 && (e & 2) === 0 && r !== null) t: for (; ; ) {
      if (r === null) return;
      var _ = r.tag;
      if (_ === 3 || _ === 4) {
        var b = r.stateNode.containerInfo;
        if (b === u) break;
        if (_ === 4) for (_ = r.return; _ !== null; ) {
          var M = _.tag;
          if ((M === 3 || M === 4) && _.stateNode.containerInfo === u) return;
          _ = _.return;
        }
        for (; b !== null; ) {
          if (_ = di(b), _ === null) return;
          if (M = _.tag, M === 5 || M === 6 || M === 26 || M === 27) {
            r = h = _;
            continue t;
          }
          b = b.parentNode;
        }
      }
      r = r.return;
    }
    vn(function() {
      var H = h, Q = xa(i), J = [];
      t: {
        var j = $l.get(t);
        if (j !== void 0) {
          var G = yr, Lt = t;
          switch (t) {
            case "keypress":
              if (ve(i) === 0) break t;
            case "keydown":
            case "keyup":
              G = Dc;
              break;
            case "focusin":
              Lt = "focus", G = ss;
              break;
            case "focusout":
              Lt = "blur", G = ss;
              break;
            case "beforeblur":
            case "afterblur":
              G = ss;
              break;
            case "click":
              if (i.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              G = Ca;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = Oc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = kc;
              break;
            case Vl:
            case Tn:
            case Cr:
              G = Lc;
              break;
            case _s:
              G = Pc;
              break;
            case "scroll":
            case "scrollend":
              G = Ac;
              break;
            case "wheel":
              G = kl;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = ls;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = cs;
              break;
            case "toggle":
            case "beforetoggle":
              G = Yi;
          }
          var Mt = (e & 4) !== 0, ne = !Mt && (t === "scroll" || t === "scrollend"), B = Mt ? j !== null ? j + "Capture" : null : j;
          Mt = [];
          for (var O = H, P; O !== null; ) {
            var I = O;
            if (P = I.stateNode, I = I.tag, I !== 5 && I !== 26 && I !== 27 || P === null || B === null || (I = Vt(O, B), I != null && Mt.push(Gs(O, I, P))), ne) break;
            O = O.return;
          }
          0 < Mt.length && (j = new G(j, Lt, null, i, Q), J.push({ event: j, listeners: Mt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (j = t === "mouseover" || t === "pointerover", G = t === "mouseout" || t === "pointerout", j && i !== gr && (Lt = i.relatedTarget || i.fromElement) && (di(Lt) || Lt[ma])) break t;
          if ((G || j) && (j = Q.window === Q ? Q : (j = Q.ownerDocument) ? j.defaultView || j.parentWindow : window, G ? (Lt = i.relatedTarget || i.toElement, G = H, Lt = Lt ? di(Lt) : null, Lt !== null && (ne = g(Lt), Mt = Lt.tag, Lt !== ne || Mt !== 5 && Mt !== 27 && Mt !== 6) && (Lt = null)) : (G = null, Lt = H), G !== Lt)) {
            if (Mt = Ca, I = "onMouseLeave", B = "onMouseEnter", O = "mouse", (t === "pointerout" || t === "pointerover") && (Mt = cs, I = "onPointerLeave", B = "onPointerEnter", O = "pointer"), ne = G == null ? j : Pn(G), P = Lt == null ? j : Pn(Lt), j = new Mt(I, O + "leave", G, i, Q), j.target = ne, j.relatedTarget = P, I = null, di(Q) === H && (Mt = new Mt(B, O + "enter", Lt, i, Q), Mt.target = P, Mt.relatedTarget = ne, I = Mt), ne = I, G && Lt) e: {
              for (Mt = G, B = Lt, O = 0, P = Mt; P; P = Do(P)) O++;
              for (P = 0, I = B; I; I = Do(I)) P++;
              for (; 0 < O - P; ) Mt = Do(Mt), O--;
              for (; 0 < P - O; ) B = Do(B), P--;
              for (; O--; ) {
                if (Mt === B || B !== null && Mt === B.alternate) break e;
                Mt = Do(Mt), B = Do(B);
              }
              Mt = null;
            }
            else Mt = null;
            G !== null && jp(J, j, G, Mt, false), Lt !== null && ne !== null && jp(J, ne, Lt, Mt, true);
          }
        }
        t: {
          if (j = H ? Pn(H) : window, G = j.nodeName && j.nodeName.toLowerCase(), G === "select" || G === "input" && j.type === "file") var xt = Aa;
          else if ($i(j)) if (ds) xt = jc;
          else {
            xt = Uc;
            var Ht = ps;
          }
          else G = j.nodeName, !G || G.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? H && pr(H.elementType) && (xt = Aa) : xt = ai;
          if (xt && (xt = xt(t, H))) {
            jl(J, xt, i, Q);
            break t;
          }
          Ht && Ht(t, j, H), t === "focusout" && H && j.type === "number" && H.memoizedProps.value != null && va(j, "number", j.value);
        }
        switch (Ht = H ? Pn(H) : window, t) {
          case "focusin":
            ($i(Ht) || Ht.contentEditable === "true") && (xn = Ht, za = H, Xi = null);
            break;
          case "focusout":
            Xi = za = xn = null;
            break;
          case "mousedown":
            co = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            co = false, Gl(J, i, Q);
            break;
          case "selectionchange":
            if (uo) break;
          case "keydown":
          case "keyup":
            Gl(J, i, Q);
        }
        var Ct;
        if (Vi) t: {
          switch (t) {
            case "compositionstart":
              var Ot = "onCompositionStart";
              break t;
            case "compositionend":
              Ot = "onCompositionEnd";
              break t;
            case "compositionupdate":
              Ot = "onCompositionUpdate";
              break t;
          }
          Ot = void 0;
        }
        else Ea ? oo(t, i) && (Ot = "onCompositionEnd") : t === "keydown" && i.keyCode === 229 && (Ot = "onCompositionStart");
        Ot && (hs && i.locale !== "ko" && (Ea || Ot !== "onCompositionStart" ? Ot === "onCompositionEnd" && Ea && (Ct = wa()) : (Un = Q, ni = "value" in Un ? Un.value : Un.textContent, Ea = true)), Ht = Ou(H, Ot), 0 < Ht.length && (Ot = new bn(Ot, t, null, i, Q), J.push({ event: Ot, listeners: Ht }), Ct ? Ot.data = Ct : (Ct = Hl(i), Ct !== null && (Ot.data = Ct)))), (Ct = Pl ? Ul(t, i) : Hc(t, i)) && (Ot = Ou(H, "onBeforeInput"), 0 < Ot.length && (Ht = new bn("onBeforeInput", "beforeinput", null, i, Q), J.push({ event: Ht, listeners: Ot }), Ht.data = Ct)), Vy(J, t, H, i, Q);
      }
      Hp(J, e);
    });
  }
  function Gs(t, e, i) {
    return { instance: t, listener: e, currentTarget: i };
  }
  function Ou(t, e) {
    for (var i = e + "Capture", r = []; t !== null; ) {
      var u = t, h = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || h === null || (u = Vt(t, i), u != null && r.unshift(Gs(t, u, h)), u = Vt(t, e), u != null && r.push(Gs(t, u, h))), t.tag === 3) return r;
      t = t.return;
    }
    return [];
  }
  function Do(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function jp(t, e, i, r, u) {
    for (var h = e._reactName, _ = []; i !== null && i !== r; ) {
      var b = i, M = b.alternate, H = b.stateNode;
      if (b = b.tag, M !== null && M === r) break;
      b !== 5 && b !== 26 && b !== 27 || H === null || (M = H, u ? (H = Vt(i, h), H != null && _.unshift(Gs(i, H, M))) : u || (H = Vt(i, h), H != null && _.push(Gs(i, H, M)))), i = i.return;
    }
    _.length !== 0 && t.push({ event: e, listeners: _ });
  }
  var Qy = /\r\n?/g, Iy = /\u0000|\uFFFD/g;
  function qp(t) {
    return (typeof t == "string" ? t : "" + t).replace(Qy, `
`).replace(Iy, "");
  }
  function Gp(t, e) {
    return e = qp(e), qp(t) === e;
  }
  function Lu() {
  }
  function ee(t, e, i, r, u, h) {
    switch (i) {
      case "children":
        typeof r == "string" ? e === "body" || e === "textarea" && r === "" || Zn(t, r) : (typeof r == "number" || typeof r == "bigint") && e !== "body" && Zn(t, "" + r);
        break;
      case "className":
        Jr(t, "class", r);
        break;
      case "tabIndex":
        Jr(t, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Jr(t, i, r);
        break;
      case "style":
        ba(t, r, h);
        break;
      case "data":
        if (e !== "object") {
          Jr(t, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (e !== "a" || i !== "href")) {
          t.removeAttribute(i);
          break;
        }
        if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
          t.removeAttribute(i);
          break;
        }
        r = Sa("" + r), t.setAttribute(i, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          t.setAttribute(i, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof h == "function" && (i === "formAction" ? (e !== "input" && ee(t, e, "name", u.name, u, null), ee(t, e, "formEncType", u.formEncType, u, null), ee(t, e, "formMethod", u.formMethod, u, null), ee(t, e, "formTarget", u.formTarget, u, null)) : (ee(t, e, "encType", u.encType, u, null), ee(t, e, "method", u.method, u, null), ee(t, e, "target", u.target, u, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          t.removeAttribute(i);
          break;
        }
        r = Sa("" + r), t.setAttribute(i, r);
        break;
      case "onClick":
        r != null && (t.onclick = Lu);
        break;
      case "onScroll":
        r != null && jt("scroll", t);
        break;
      case "onScrollEnd":
        r != null && jt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(f(61));
          if (i = r.__html, i != null) {
            if (u.children != null) throw Error(f(60));
            t.innerHTML = i;
          }
        }
        break;
      case "multiple":
        t.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        t.muted = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        i = Sa("" + r), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(i, "" + r) : t.removeAttribute(i);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        r && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(i, "") : t.removeAttribute(i);
        break;
      case "capture":
      case "download":
        r === true ? t.setAttribute(i, "") : r !== false && r != null && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(i, r) : t.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? t.setAttribute(i, r) : t.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? t.removeAttribute(i) : t.setAttribute(i, r);
        break;
      case "popover":
        jt("beforetoggle", t), jt("toggle", t), Wr(t, "popover", r);
        break;
      case "xlinkActuate":
        ei(t, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
        break;
      case "xlinkArcrole":
        ei(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
        break;
      case "xlinkRole":
        ei(t, "http://www.w3.org/1999/xlink", "xlink:role", r);
        break;
      case "xlinkShow":
        ei(t, "http://www.w3.org/1999/xlink", "xlink:show", r);
        break;
      case "xlinkTitle":
        ei(t, "http://www.w3.org/1999/xlink", "xlink:title", r);
        break;
      case "xlinkType":
        ei(t, "http://www.w3.org/1999/xlink", "xlink:type", r);
        break;
      case "xmlBase":
        ei(t, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
        break;
      case "xmlLang":
        ei(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
        break;
      case "xmlSpace":
        ei(t, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
        break;
      case "is":
        Wr(t, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = as.get(i) || i, Wr(t, i, r));
    }
  }
  function th(t, e, i, r, u, h) {
    switch (i) {
      case "style":
        ba(t, r, h);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(f(61));
          if (i = r.__html, i != null) {
            if (u.children != null) throw Error(f(60));
            t.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof r == "string" ? Zn(t, r) : (typeof r == "number" || typeof r == "bigint") && Zn(t, "" + r);
        break;
      case "onScroll":
        r != null && jt("scroll", t);
        break;
      case "onScrollEnd":
        r != null && jt("scrollend", t);
        break;
      case "onClick":
        r != null && (t.onclick = Lu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!El.hasOwnProperty(i)) t: {
          if (i[0] === "o" && i[1] === "n" && (u = i.endsWith("Capture"), e = i.slice(2, u ? i.length - 7 : void 0), h = t[Ie] || null, h = h != null ? h[i] : null, typeof h == "function" && t.removeEventListener(e, h, u), typeof r == "function")) {
            typeof h != "function" && h !== null && (i in t ? t[i] = null : t.hasAttribute(i) && t.removeAttribute(i)), t.addEventListener(e, r, u);
            break t;
          }
          i in t ? t[i] = r : r === true ? t.setAttribute(i, "") : Wr(t, i, r);
        }
    }
  }
  function Ve(t, e, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        jt("error", t), jt("load", t);
        var r = false, u = false, h;
        for (h in i) if (i.hasOwnProperty(h)) {
          var _ = i[h];
          if (_ != null) switch (h) {
            case "src":
              r = true;
              break;
            case "srcSet":
              u = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(f(137, e));
            default:
              ee(t, e, h, _, i, null);
          }
        }
        u && ee(t, e, "srcSet", i.srcSet, i, null), r && ee(t, e, "src", i.src, i, null);
        return;
      case "input":
        jt("invalid", t);
        var b = h = _ = u = null, M = null, H = null;
        for (r in i) if (i.hasOwnProperty(r)) {
          var Q = i[r];
          if (Q != null) switch (r) {
            case "name":
              u = Q;
              break;
            case "type":
              _ = Q;
              break;
            case "checked":
              M = Q;
              break;
            case "defaultChecked":
              H = Q;
              break;
            case "value":
              h = Q;
              break;
            case "defaultValue":
              b = Q;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (Q != null) throw Error(f(137, e));
              break;
            default:
              ee(t, e, r, Q, i, null);
          }
        }
        Al(t, h, b, M, H, _, u, false), ya(t);
        return;
      case "select":
        jt("invalid", t), r = _ = h = null;
        for (u in i) if (i.hasOwnProperty(u) && (b = i[u], b != null)) switch (u) {
          case "value":
            h = b;
            break;
          case "defaultValue":
            _ = b;
            break;
          case "multiple":
            r = b;
          default:
            ee(t, e, u, b, i, null);
        }
        e = h, i = _, t.multiple = !!r, e != null ? hn(t, !!r, e, false) : i != null && hn(t, !!r, i, true);
        return;
      case "textarea":
        jt("invalid", t), h = u = r = null;
        for (_ in i) if (i.hasOwnProperty(_) && (b = i[_], b != null)) switch (_) {
          case "value":
            r = b;
            break;
          case "defaultValue":
            u = b;
            break;
          case "children":
            h = b;
            break;
          case "dangerouslySetInnerHTML":
            if (b != null) throw Error(f(91));
            break;
          default:
            ee(t, e, _, b, i, null);
        }
        mi(t, r, u, h), ya(t);
        return;
      case "option":
        for (M in i) if (i.hasOwnProperty(M) && (r = i[M], r != null)) switch (M) {
          case "selected":
            t.selected = r && typeof r != "function" && typeof r != "symbol";
            break;
          default:
            ee(t, e, M, r, i, null);
        }
        return;
      case "dialog":
        jt("beforetoggle", t), jt("toggle", t), jt("cancel", t), jt("close", t);
        break;
      case "iframe":
      case "object":
        jt("load", t);
        break;
      case "video":
      case "audio":
        for (r = 0; r < qs.length; r++) jt(qs[r], t);
        break;
      case "image":
        jt("error", t), jt("load", t);
        break;
      case "details":
        jt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        jt("error", t), jt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (H in i) if (i.hasOwnProperty(H) && (r = i[H], r != null)) switch (H) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(f(137, e));
          default:
            ee(t, e, H, r, i, null);
        }
        return;
      default:
        if (pr(e)) {
          for (Q in i) i.hasOwnProperty(Q) && (r = i[Q], r !== void 0 && th(t, e, Q, r, i, void 0));
          return;
        }
    }
    for (b in i) i.hasOwnProperty(b) && (r = i[b], r != null && ee(t, e, b, r, i, null));
  }
  function Wy(t, e, i, r) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, h = null, _ = null, b = null, M = null, H = null, Q = null;
        for (G in i) {
          var J = i[G];
          if (i.hasOwnProperty(G) && J != null) switch (G) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              M = J;
            default:
              r.hasOwnProperty(G) || ee(t, e, G, null, r, J);
          }
        }
        for (var j in r) {
          var G = r[j];
          if (J = i[j], r.hasOwnProperty(j) && (G != null || J != null)) switch (j) {
            case "type":
              h = G;
              break;
            case "name":
              u = G;
              break;
            case "checked":
              H = G;
              break;
            case "defaultChecked":
              Q = G;
              break;
            case "value":
              _ = G;
              break;
            case "defaultValue":
              b = G;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (G != null) throw Error(f(137, e));
              break;
            default:
              G !== J && ee(t, e, j, G, r, J);
          }
        }
        We(t, _, b, M, H, Q, h, u);
        return;
      case "select":
        G = _ = b = j = null;
        for (h in i) if (M = i[h], i.hasOwnProperty(h) && M != null) switch (h) {
          case "value":
            break;
          case "multiple":
            G = M;
          default:
            r.hasOwnProperty(h) || ee(t, e, h, null, r, M);
        }
        for (u in r) if (h = r[u], M = i[u], r.hasOwnProperty(u) && (h != null || M != null)) switch (u) {
          case "value":
            j = h;
            break;
          case "defaultValue":
            b = h;
            break;
          case "multiple":
            _ = h;
          default:
            h !== M && ee(t, e, u, h, r, M);
        }
        e = b, i = _, r = G, j != null ? hn(t, !!i, j, false) : !!r != !!i && (e != null ? hn(t, !!i, e, true) : hn(t, !!i, i ? [] : "", false));
        return;
      case "textarea":
        G = j = null;
        for (b in i) if (u = i[b], i.hasOwnProperty(b) && u != null && !r.hasOwnProperty(b)) switch (b) {
          case "value":
            break;
          case "children":
            break;
          default:
            ee(t, e, b, null, r, u);
        }
        for (_ in r) if (u = r[_], h = i[_], r.hasOwnProperty(_) && (u != null || h != null)) switch (_) {
          case "value":
            j = u;
            break;
          case "defaultValue":
            G = u;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (u != null) throw Error(f(91));
            break;
          default:
            u !== h && ee(t, e, _, u, r, h);
        }
        me(t, j, G);
        return;
      case "option":
        for (var Lt in i) if (j = i[Lt], i.hasOwnProperty(Lt) && j != null && !r.hasOwnProperty(Lt)) switch (Lt) {
          case "selected":
            t.selected = false;
            break;
          default:
            ee(t, e, Lt, null, r, j);
        }
        for (M in r) if (j = r[M], G = i[M], r.hasOwnProperty(M) && j !== G && (j != null || G != null)) switch (M) {
          case "selected":
            t.selected = j && typeof j != "function" && typeof j != "symbol";
            break;
          default:
            ee(t, e, M, j, r, G);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Mt in i) j = i[Mt], i.hasOwnProperty(Mt) && j != null && !r.hasOwnProperty(Mt) && ee(t, e, Mt, null, r, j);
        for (H in r) if (j = r[H], G = i[H], r.hasOwnProperty(H) && j !== G && (j != null || G != null)) switch (H) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (j != null) throw Error(f(137, e));
            break;
          default:
            ee(t, e, H, j, r, G);
        }
        return;
      default:
        if (pr(e)) {
          for (var ne in i) j = i[ne], i.hasOwnProperty(ne) && j !== void 0 && !r.hasOwnProperty(ne) && th(t, e, ne, void 0, r, j);
          for (Q in r) j = r[Q], G = i[Q], !r.hasOwnProperty(Q) || j === G || j === void 0 && G === void 0 || th(t, e, Q, j, r, G);
          return;
        }
    }
    for (var B in i) j = i[B], i.hasOwnProperty(B) && j != null && !r.hasOwnProperty(B) && ee(t, e, B, null, r, j);
    for (J in r) j = r[J], G = i[J], !r.hasOwnProperty(J) || j === G || j == null && G == null || ee(t, e, J, j, r, G);
  }
  var eh = null, nh = null;
  function zu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Yp(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Vp(t, e) {
    if (t === 0) switch (e) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function ih(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var ah = null;
  function Jy() {
    var t = window.event;
    return t && t.type === "popstate" ? t === ah ? false : (ah = t, true) : (ah = null, false);
  }
  var $p = typeof setTimeout == "function" ? setTimeout : void 0, Fy = typeof clearTimeout == "function" ? clearTimeout : void 0, Xp = typeof Promise == "function" ? Promise : void 0, tv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xp < "u" ? function(t) {
    return Xp.resolve(null).then(t).catch(ev);
  } : $p;
  function ev(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Ja(t) {
    return t === "head";
  }
  function Kp(t, e) {
    var i = e, r = 0, u = 0;
    do {
      var h = i.nextSibling;
      if (t.removeChild(i), h && h.nodeType === 8) if (i = h.data, i === "/$") {
        if (0 < r && 8 > r) {
          i = r;
          var _ = t.ownerDocument;
          if (i & 1 && Ys(_.documentElement), i & 2 && Ys(_.body), i & 4) for (i = _.head, Ys(i), _ = i.firstChild; _; ) {
            var b = _.nextSibling, M = _.nodeName;
            _[pa] || M === "SCRIPT" || M === "STYLE" || M === "LINK" && _.rel.toLowerCase() === "stylesheet" || i.removeChild(_), _ = b;
          }
        }
        if (u === 0) {
          t.removeChild(h), Js(e);
          return;
        }
        u--;
      } else i === "$" || i === "$?" || i === "$!" ? u++ : r = i.charCodeAt(0) - 48;
      else r = 0;
      i = h;
    } while (i);
    Js(e);
  }
  function rh(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var i = e;
      switch (e = e.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          rh(i), Ir(i);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(i);
    }
  }
  function nv(t, e, i, r) {
    for (; t.nodeType === 1; ) {
      var u = i;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!r && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (r) {
        if (!t[pa]) switch (e) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (h = t.getAttribute("rel"), h === "stylesheet" && t.hasAttribute("data-precedence")) break;
            if (h !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title)) break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (h = t.getAttribute("src"), (h !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && h && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
            return t;
          default:
            return t;
        }
      } else if (e === "input" && t.type === "hidden") {
        var h = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === h) return t;
      } else return t;
      if (t = li(t.nextSibling), t === null) break;
    }
    return null;
  }
  function iv(t, e, i) {
    if (e === "") return null;
    for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !i || (t = li(t.nextSibling), t === null)) return null;
    return t;
  }
  function oh(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function av(t, e) {
    var i = t.ownerDocument;
    if (t.data !== "$?" || i.readyState === "complete") e();
    else {
      var r = function() {
        e(), i.removeEventListener("DOMContentLoaded", r);
      };
      i.addEventListener("DOMContentLoaded", r), t._reactRetry = r;
    }
  }
  function li(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F") break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var sh = null;
  function Qp(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var i = t.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (e === 0) return t;
          e--;
        } else i === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Ip(t, e, i) {
    switch (e = zu(i), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(f(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(f(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function Ys(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Ir(t);
  }
  var Xn = /* @__PURE__ */ new Map(), Wp = /* @__PURE__ */ new Set();
  function Ru(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var oa = st.d;
  st.d = { f: rv, r: ov, D: sv, C: lv, L: uv, m: cv, X: hv, S: fv, M: dv };
  function rv() {
    var t = oa.f(), e = Tu();
    return t || e;
  }
  function ov(t) {
    var e = Bi(t);
    e !== null && e.tag === 5 && e.type === "form" ? _m(e) : oa.r(t);
  }
  var No = typeof document > "u" ? null : document;
  function Jp(t, e, i) {
    var r = No;
    if (r && typeof e == "string" && e) {
      var u = je(e);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof i == "string" && (u += '[crossorigin="' + i + '"]'), Wp.has(u) || (Wp.add(u), t = { rel: t, crossOrigin: i, href: e }, r.querySelector(u) === null && (e = r.createElement("link"), Ve(e, "link", t), Me(e), r.head.appendChild(e)));
    }
  }
  function sv(t) {
    oa.D(t), Jp("dns-prefetch", t, null);
  }
  function lv(t, e) {
    oa.C(t, e), Jp("preconnect", t, e);
  }
  function uv(t, e, i) {
    oa.L(t, e, i);
    var r = No;
    if (r && t && e) {
      var u = 'link[rel="preload"][as="' + je(e) + '"]';
      e === "image" && i && i.imageSrcSet ? (u += '[imagesrcset="' + je(i.imageSrcSet) + '"]', typeof i.imageSizes == "string" && (u += '[imagesizes="' + je(i.imageSizes) + '"]')) : u += '[href="' + je(t) + '"]';
      var h = u;
      switch (e) {
        case "style":
          h = ko(t);
          break;
        case "script":
          h = Po(t);
      }
      Xn.has(h) || (t = A({ rel: "preload", href: e === "image" && i && i.imageSrcSet ? void 0 : t, as: e }, i), Xn.set(h, t), r.querySelector(u) !== null || e === "style" && r.querySelector(Vs(h)) || e === "script" && r.querySelector($s(h)) || (e = r.createElement("link"), Ve(e, "link", t), Me(e), r.head.appendChild(e)));
    }
  }
  function cv(t, e) {
    oa.m(t, e);
    var i = No;
    if (i && t) {
      var r = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + je(r) + '"][href="' + je(t) + '"]', h = u;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          h = Po(t);
      }
      if (!Xn.has(h) && (t = A({ rel: "modulepreload", href: t }, e), Xn.set(h, t), i.querySelector(u) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector($s(h))) return;
        }
        r = i.createElement("link"), Ve(r, "link", t), Me(r), i.head.appendChild(r);
      }
    }
  }
  function fv(t, e, i) {
    oa.S(t, e, i);
    var r = No;
    if (r && t) {
      var u = Di(r).hoistableStyles, h = ko(t);
      e = e || "default";
      var _ = u.get(h);
      if (!_) {
        var b = { loading: 0, preload: null };
        if (_ = r.querySelector(Vs(h))) b.loading = 5;
        else {
          t = A({ rel: "stylesheet", href: t, "data-precedence": e }, i), (i = Xn.get(h)) && lh(t, i);
          var M = _ = r.createElement("link");
          Me(M), Ve(M, "link", t), M._p = new Promise(function(H, Q) {
            M.onload = H, M.onerror = Q;
          }), M.addEventListener("load", function() {
            b.loading |= 1;
          }), M.addEventListener("error", function() {
            b.loading |= 2;
          }), b.loading |= 4, Bu(_, e, r);
        }
        _ = { type: "stylesheet", instance: _, count: 1, state: b }, u.set(h, _);
      }
    }
  }
  function hv(t, e) {
    oa.X(t, e);
    var i = No;
    if (i && t) {
      var r = Di(i).hoistableScripts, u = Po(t), h = r.get(u);
      h || (h = i.querySelector($s(u)), h || (t = A({ src: t, async: true }, e), (e = Xn.get(u)) && uh(t, e), h = i.createElement("script"), Me(h), Ve(h, "link", t), i.head.appendChild(h)), h = { type: "script", instance: h, count: 1, state: null }, r.set(u, h));
    }
  }
  function dv(t, e) {
    oa.M(t, e);
    var i = No;
    if (i && t) {
      var r = Di(i).hoistableScripts, u = Po(t), h = r.get(u);
      h || (h = i.querySelector($s(u)), h || (t = A({ src: t, async: true, type: "module" }, e), (e = Xn.get(u)) && uh(t, e), h = i.createElement("script"), Me(h), Ve(h, "link", t), i.head.appendChild(h)), h = { type: "script", instance: h, count: 1, state: null }, r.set(u, h));
    }
  }
  function Fp(t, e, i, r) {
    var u = (u = ut.current) ? Ru(u) : null;
    if (!u) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string" ? (e = ko(i.href), i = Di(u).hoistableStyles, r = i.get(e), r || (r = { type: "style", instance: null, count: 0, state: null }, i.set(e, r)), r) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
          t = ko(i.href);
          var h = Di(u).hoistableStyles, _ = h.get(t);
          if (_ || (u = u.ownerDocument || u, _ = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, h.set(t, _), (h = u.querySelector(Vs(t))) && !h._p && (_.instance = h, _.state.loading = 5), Xn.has(t) || (i = { rel: "preload", as: "style", href: i.href, crossOrigin: i.crossOrigin, integrity: i.integrity, media: i.media, hrefLang: i.hrefLang, referrerPolicy: i.referrerPolicy }, Xn.set(t, i), h || mv(u, t, i, _.state))), e && r === null) throw Error(f(528, ""));
          return _;
        }
        if (e && r !== null) throw Error(f(529, ""));
        return null;
      case "script":
        return e = i.async, i = i.src, typeof i == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Po(i), i = Di(u).hoistableScripts, r = i.get(e), r || (r = { type: "script", instance: null, count: 0, state: null }, i.set(e, r)), r) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, t));
    }
  }
  function ko(t) {
    return 'href="' + je(t) + '"';
  }
  function Vs(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function tg(t) {
    return A({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function mv(t, e, i, r) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? r.loading = 1 : (e = t.createElement("link"), r.preload = e, e.addEventListener("load", function() {
      return r.loading |= 1;
    }), e.addEventListener("error", function() {
      return r.loading |= 2;
    }), Ve(e, "link", i), Me(e), t.head.appendChild(e));
  }
  function Po(t) {
    return '[src="' + je(t) + '"]';
  }
  function $s(t) {
    return "script[async]" + t;
  }
  function eg(t, e, i) {
    if (e.count++, e.instance === null) switch (e.type) {
      case "style":
        var r = t.querySelector('style[data-href~="' + je(i.href) + '"]');
        if (r) return e.instance = r, Me(r), r;
        var u = A({}, i, { "data-href": i.href, "data-precedence": i.precedence, href: null, precedence: null });
        return r = (t.ownerDocument || t).createElement("style"), Me(r), Ve(r, "style", u), Bu(r, i.precedence, t), e.instance = r;
      case "stylesheet":
        u = ko(i.href);
        var h = t.querySelector(Vs(u));
        if (h) return e.state.loading |= 4, e.instance = h, Me(h), h;
        r = tg(i), (u = Xn.get(u)) && lh(r, u), h = (t.ownerDocument || t).createElement("link"), Me(h);
        var _ = h;
        return _._p = new Promise(function(b, M) {
          _.onload = b, _.onerror = M;
        }), Ve(h, "link", r), e.state.loading |= 4, Bu(h, i.precedence, t), e.instance = h;
      case "script":
        return h = Po(i.src), (u = t.querySelector($s(h))) ? (e.instance = u, Me(u), u) : (r = i, (u = Xn.get(h)) && (r = A({}, i), uh(r, u)), t = t.ownerDocument || t, u = t.createElement("script"), Me(u), Ve(u, "link", r), t.head.appendChild(u), e.instance = u);
      case "void":
        return null;
      default:
        throw Error(f(443, e.type));
    }
    else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (r = e.instance, e.state.loading |= 4, Bu(r, i.precedence, t));
    return e.instance;
  }
  function Bu(t, e, i) {
    for (var r = i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = r.length ? r[r.length - 1] : null, h = u, _ = 0; _ < r.length; _++) {
      var b = r[_];
      if (b.dataset.precedence === e) h = b;
      else if (h !== u) break;
    }
    h ? h.parentNode.insertBefore(t, h.nextSibling) : (e = i.nodeType === 9 ? i.head : i, e.insertBefore(t, e.firstChild));
  }
  function lh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function uh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Du = null;
  function ng(t, e, i) {
    if (Du === null) {
      var r = /* @__PURE__ */ new Map(), u = Du = /* @__PURE__ */ new Map();
      u.set(i, r);
    } else u = Du, r = u.get(i), r || (r = /* @__PURE__ */ new Map(), u.set(i, r));
    if (r.has(t)) return r;
    for (r.set(t, null), i = i.getElementsByTagName(t), u = 0; u < i.length; u++) {
      var h = i[u];
      if (!(h[pa] || h[De] || t === "link" && h.getAttribute("rel") === "stylesheet") && h.namespaceURI !== "http://www.w3.org/2000/svg") {
        var _ = h.getAttribute(e) || "";
        _ = t + _;
        var b = r.get(_);
        b ? b.push(h) : r.set(_, [h]);
      }
    }
    return r;
  }
  function ig(t, e, i) {
    t = t.ownerDocument || t, t.head.insertBefore(i, e === "title" ? t.querySelector("head > title") : null);
  }
  function pv(t, e, i) {
    if (i === 1 || e.itemProp != null) return false;
    switch (t) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
        return true;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return true;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return true;
    }
    return false;
  }
  function ag(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Xs = null;
  function gv() {
  }
  function _v(t, e, i) {
    if (Xs === null) throw Error(f(475));
    var r = Xs;
    if (e.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== false) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = ko(i.href), h = t.querySelector(Vs(u));
        if (h) {
          t = h._p, t !== null && typeof t == "object" && typeof t.then == "function" && (r.count++, r = Nu.bind(r), t.then(r, r)), e.state.loading |= 4, e.instance = h, Me(h);
          return;
        }
        h = t.ownerDocument || t, i = tg(i), (u = Xn.get(u)) && lh(i, u), h = h.createElement("link"), Me(h);
        var _ = h;
        _._p = new Promise(function(b, M) {
          _.onload = b, _.onerror = M;
        }), Ve(h, "link", i), e.instance = h;
      }
      r.stylesheets === null && (r.stylesheets = /* @__PURE__ */ new Map()), r.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (r.count++, e = Nu.bind(r), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  function yv() {
    if (Xs === null) throw Error(f(475));
    var t = Xs;
    return t.stylesheets && t.count === 0 && ch(t, t.stylesheets), 0 < t.count ? function(e) {
      var i = setTimeout(function() {
        if (t.stylesheets && ch(t, t.stylesheets), t.unsuspend) {
          var r = t.unsuspend;
          t.unsuspend = null, r();
        }
      }, 6e4);
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(i);
      };
    } : null;
  }
  function Nu() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) ch(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var ku = null;
  function ch(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, ku = /* @__PURE__ */ new Map(), e.forEach(vv, t), ku = null, Nu.call(t));
  }
  function vv(t, e) {
    if (!(e.state.loading & 4)) {
      var i = ku.get(t);
      if (i) var r = i.get(null);
      else {
        i = /* @__PURE__ */ new Map(), ku.set(t, i);
        for (var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), h = 0; h < u.length; h++) {
          var _ = u[h];
          (_.nodeName === "LINK" || _.getAttribute("media") !== "not all") && (i.set(_.dataset.precedence, _), r = _);
        }
        r && i.set(null, r);
      }
      u = e.instance, _ = u.getAttribute("data-precedence"), h = i.get(_) || r, h === r && i.set(null, u), i.set(_, u), this.count++, r = Nu.bind(this), u.addEventListener("load", r), u.addEventListener("error", r), h ? h.parentNode.insertBefore(u, h.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Ks = { $$typeof: nt, Provider: null, Consumer: null, _currentValue: F, _currentValue2: F, _threadCount: 0 };
  function bv(t, e, i, r, u, h, _, b) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qr(0), this.hiddenUpdates = Qr(null), this.identifierPrefix = r, this.onUncaughtError = u, this.onCaughtError = h, this.onRecoverableError = _, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function rg(t, e, i, r, u, h, _, b, M, H, Q, J) {
    return t = new bv(t, e, i, _, b, M, H, J), e = 1, h === true && (e |= 24), h = ln(3, null, null, e), t.current = h, h.stateNode = t, e = Yc(), e.refCount++, t.pooledCache = e, e.refCount++, h.memoizedState = { element: r, isDehydrated: i, cache: e }, Kc(h), t;
  }
  function og(t) {
    return t ? (t = Wi, t) : Wi;
  }
  function sg(t, e, i, r, u, h) {
    u = og(u), r.context === null ? r.context = u : r.pendingContext = u, r = Ha(e), r.payload = { element: i }, h = h === void 0 ? null : h, h !== null && (r.callback = h), i = Ua(t, r, e), i !== null && (Ln(i, t, e), ws(i, t, e));
  }
  function lg(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var i = t.retryLane;
      t.retryLane = i !== 0 && i < e ? i : e;
    }
  }
  function fh(t, e) {
    lg(t, e), (t = t.alternate) && lg(t, e);
  }
  function ug(t) {
    if (t.tag === 13) {
      var e = Da(t, 67108864);
      e !== null && Ln(e, t, 67108864), fh(t, 67108864);
    }
  }
  var Pu = true;
  function Sv(t, e, i, r) {
    var u = N.T;
    N.T = null;
    var h = st.p;
    try {
      st.p = 2, hh(t, e, i, r);
    } finally {
      st.p = h, N.T = u;
    }
  }
  function xv(t, e, i, r) {
    var u = N.T;
    N.T = null;
    var h = st.p;
    try {
      st.p = 8, hh(t, e, i, r);
    } finally {
      st.p = h, N.T = u;
    }
  }
  function hh(t, e, i, r) {
    if (Pu) {
      var u = dh(r);
      if (u === null) Ff(t, e, r, Zu, i), fg(t, r);
      else if (wv(u, t, e, i, r)) r.stopPropagation();
      else if (fg(t, r), e & 4 && -1 < Tv.indexOf(t)) {
        for (; u !== null; ) {
          var h = Bi(u);
          if (h !== null) switch (h.tag) {
            case 3:
              if (h = h.stateNode, h.current.memoizedState.isDehydrated) {
                var _ = fi(h.pendingLanes);
                if (_ !== 0) {
                  var b = h;
                  for (b.pendingLanes |= 2, b.entangledLanes |= 2; _; ) {
                    var M = 1 << 31 - re(_);
                    b.entanglements[1] |= M, _ &= ~M;
                  }
                  wi(h), (It & 6) === 0 && (Su = _e() + 500, js(0));
                }
              }
              break;
            case 13:
              b = Da(h, 2), b !== null && Ln(b, h, 2), Tu(), fh(h, 2);
          }
          if (h = dh(r), h === null && Ff(t, e, r, Zu, i), h === u) break;
          u = h;
        }
        u !== null && r.stopPropagation();
      } else Ff(t, e, r, null, i);
    }
  }
  function dh(t) {
    return t = xa(t), mh(t);
  }
  var Zu = null;
  function mh(t) {
    if (Zu = null, t = di(t), t !== null) {
      var e = g(t);
      if (e === null) t = null;
      else {
        var i = e.tag;
        if (i === 13) {
          if (t = y(e), t !== null) return t;
          t = null;
        } else if (i === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Zu = t, null;
  }
  function cg(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Qe()) {
          case Be:
            return 2;
          case yn:
            return 8;
          case cn:
          case At:
            return 32;
          case cr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ph = false, Fa = null, tr = null, er = null, Qs = /* @__PURE__ */ new Map(), Is = /* @__PURE__ */ new Map(), nr = [], Tv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function fg(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Fa = null;
        break;
      case "dragenter":
      case "dragleave":
        tr = null;
        break;
      case "mouseover":
      case "mouseout":
        er = null;
        break;
      case "pointerover":
      case "pointerout":
        Qs.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Is.delete(e.pointerId);
    }
  }
  function Ws(t, e, i, r, u, h) {
    return t === null || t.nativeEvent !== h ? (t = { blockedOn: e, domEventName: i, eventSystemFlags: r, nativeEvent: h, targetContainers: [u] }, e !== null && (e = Bi(e), e !== null && ug(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t);
  }
  function wv(t, e, i, r, u) {
    switch (e) {
      case "focusin":
        return Fa = Ws(Fa, t, e, i, r, u), true;
      case "dragenter":
        return tr = Ws(tr, t, e, i, r, u), true;
      case "mouseover":
        return er = Ws(er, t, e, i, r, u), true;
      case "pointerover":
        var h = u.pointerId;
        return Qs.set(h, Ws(Qs.get(h) || null, t, e, i, r, u)), true;
      case "gotpointercapture":
        return h = u.pointerId, Is.set(h, Ws(Is.get(h) || null, t, e, i, r, u)), true;
    }
    return false;
  }
  function hg(t) {
    var e = di(t.target);
    if (e !== null) {
      var i = g(e);
      if (i !== null) {
        if (e = i.tag, e === 13) {
          if (e = y(i), e !== null) {
            t.blockedOn = e, es(t.priority, function() {
              if (i.tag === 13) {
                var r = On();
                r = Fo(r);
                var u = Da(i, r);
                u !== null && Ln(u, i, r), fh(i, r);
              }
            });
            return;
          }
        } else if (e === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Hu(t) {
    if (t.blockedOn !== null) return false;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var i = dh(t.nativeEvent);
      if (i === null) {
        i = t.nativeEvent;
        var r = new i.constructor(i.type, i);
        gr = r, i.target.dispatchEvent(r), gr = null;
      } else return e = Bi(i), e !== null && ug(e), t.blockedOn = i, false;
      e.shift();
    }
    return true;
  }
  function dg(t, e, i) {
    Hu(t) && i.delete(e);
  }
  function Cv() {
    ph = false, Fa !== null && Hu(Fa) && (Fa = null), tr !== null && Hu(tr) && (tr = null), er !== null && Hu(er) && (er = null), Qs.forEach(dg), Is.forEach(dg);
  }
  function Uu(t, e) {
    t.blockedOn === e && (t.blockedOn = null, ph || (ph = true, o2.unstable_scheduleCallback(o2.unstable_NormalPriority, Cv)));
  }
  var ju = null;
  function mg(t) {
    ju !== t && (ju = t, o2.unstable_scheduleCallback(o2.unstable_NormalPriority, function() {
      ju === t && (ju = null);
      for (var e = 0; e < t.length; e += 3) {
        var i = t[e], r = t[e + 1], u = t[e + 2];
        if (typeof r != "function") {
          if (mh(r || i) === null) continue;
          break;
        }
        var h = Bi(i);
        h !== null && (t.splice(e, 3), e -= 3, mf(h, { pending: true, data: u, method: i.method, action: r }, r, u));
      }
    }));
  }
  function Js(t) {
    function e(M) {
      return Uu(M, t);
    }
    Fa !== null && Uu(Fa, t), tr !== null && Uu(tr, t), er !== null && Uu(er, t), Qs.forEach(e), Is.forEach(e);
    for (var i = 0; i < nr.length; i++) {
      var r = nr[i];
      r.blockedOn === t && (r.blockedOn = null);
    }
    for (; 0 < nr.length && (i = nr[0], i.blockedOn === null); ) hg(i), i.blockedOn === null && nr.shift();
    if (i = (t.ownerDocument || t).$$reactFormReplay, i != null) for (r = 0; r < i.length; r += 3) {
      var u = i[r], h = i[r + 1], _ = u[Ie] || null;
      if (typeof h == "function") _ || mg(i);
      else if (_) {
        var b = null;
        if (h && h.hasAttribute("formAction")) {
          if (u = h, _ = h[Ie] || null) b = _.formAction;
          else if (mh(u) !== null) continue;
        } else b = _.action;
        typeof b == "function" ? i[r + 1] = b : (i.splice(r, 3), r -= 3), mg(i);
      }
    }
  }
  function gh(t) {
    this._internalRoot = t;
  }
  qu.prototype.render = gh.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(f(409));
    var i = e.current, r = On();
    sg(i, r, t, e, null, null);
  }, qu.prototype.unmount = gh.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      sg(t.current, 2, null, t, null, null), Tu(), e[ma] = null;
    }
  };
  function qu(t) {
    this._internalRoot = t;
  }
  qu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Tl();
      t = { blockedOn: null, target: t, priority: e };
      for (var i = 0; i < nr.length && e !== 0 && e < nr[i].priority; i++) ;
      nr.splice(i, 0, t), i === 0 && hg(t);
    }
  };
  var pg = s.version;
  if (pg !== "19.1.0") throw Error(f(527, pg, "19.1.0"));
  st.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","), Error(f(268, t)));
    return t = w(e), t = t !== null ? T(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Ev = { bundleType: 0, version: "19.1.0", rendererPackageName: "react-dom", currentDispatcherRef: N, reconcilerVersion: "19.1.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gu.isDisabled && Gu.supportsFiber) try {
      ye = Gu.inject(Ev), Pt = Gu;
    } catch {
    }
  }
  return tl.createRoot = function(t, e) {
    if (!m(t)) throw Error(f(299));
    var i = false, r = "", u = zm, h = Rm, _ = Bm, b = null;
    return e != null && (e.unstable_strictMode === true && (i = true), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (h = e.onCaughtError), e.onRecoverableError !== void 0 && (_ = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (b = e.unstable_transitionCallbacks)), e = rg(t, 1, false, null, null, i, r, u, h, _, b, null), t[ma] = e.current, Jf(t), new gh(e);
  }, tl.hydrateRoot = function(t, e, i) {
    if (!m(t)) throw Error(f(299));
    var r = false, u = "", h = zm, _ = Rm, b = Bm, M = null, H = null;
    return i != null && (i.unstable_strictMode === true && (r = true), i.identifierPrefix !== void 0 && (u = i.identifierPrefix), i.onUncaughtError !== void 0 && (h = i.onUncaughtError), i.onCaughtError !== void 0 && (_ = i.onCaughtError), i.onRecoverableError !== void 0 && (b = i.onRecoverableError), i.unstable_transitionCallbacks !== void 0 && (M = i.unstable_transitionCallbacks), i.formState !== void 0 && (H = i.formState)), e = rg(t, 1, true, e, i ?? null, r, u, h, _, b, M, H), e.context = og(null), i = e.current, r = On(), r = Fo(r), u = Ha(r), u.callback = null, Ua(i, u, r), i = r, e.current.lanes = i, da(e, i), wi(e), t[ma] = e.current, Jf(t), new qu(e);
  }, tl.version = "19.1.0", tl;
}
var Cg;
function kv() {
  if (Cg) return yh.exports;
  Cg = 1;
  function o2() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o2);
    } catch (s) {
      console.error(s);
    }
  }
  return o2(), yh.exports = Nv(), yh.exports;
}
var Pv = kv();
const Zv = S_(Pv);
function Gr(o2, ...s) {
  const c = new URL(`https://mui.com/production-error/?code=${o2}`);
  return s.forEach((f) => c.searchParams.append("args[]", f)), `Minified MUI error #${o2}; visit ${c} for the full message.`;
}
const Li = "$$material";
function Fu() {
  return Fu = Object.assign ? Object.assign.bind() : function(o2) {
    for (var s = 1; s < arguments.length; s++) {
      var c = arguments[s];
      for (var f in c) ({}).hasOwnProperty.call(c, f) && (o2[f] = c[f]);
    }
    return o2;
  }, Fu.apply(null, arguments);
}
var q = Wh();
const In = S_(q), Bh = Av({ __proto__: null, default: In }, [q]);
function Hv(o2) {
  if (o2.sheet) return o2.sheet;
  for (var s = 0; s < document.styleSheets.length; s++) if (document.styleSheets[s].ownerNode === o2) return document.styleSheets[s];
}
function Uv(o2) {
  var s = document.createElement("style");
  return s.setAttribute("data-emotion", o2.key), o2.nonce !== void 0 && s.setAttribute("nonce", o2.nonce), s.appendChild(document.createTextNode("")), s.setAttribute("data-s", ""), s;
}
var jv = function() {
  function o2(c) {
    var f = this;
    this._insertTag = function(m) {
      var g;
      f.tags.length === 0 ? f.insertionPoint ? g = f.insertionPoint.nextSibling : f.prepend ? g = f.container.firstChild : g = f.before : g = f.tags[f.tags.length - 1].nextSibling, f.container.insertBefore(m, g), f.tags.push(m);
    }, this.isSpeedy = c.speedy === void 0 ? true : c.speedy, this.tags = [], this.ctr = 0, this.nonce = c.nonce, this.key = c.key, this.container = c.container, this.prepend = c.prepend, this.insertionPoint = c.insertionPoint, this.before = null;
  }
  var s = o2.prototype;
  return s.hydrate = function(f) {
    f.forEach(this._insertTag);
  }, s.insert = function(f) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Uv(this));
    var m = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var g = Hv(m);
      try {
        g.insertRule(f, g.cssRules.length);
      } catch {
      }
    } else m.appendChild(document.createTextNode(f));
    this.ctr++;
  }, s.flush = function() {
    this.tags.forEach(function(f) {
      var m;
      return (m = f.parentNode) == null ? void 0 : m.removeChild(f);
    }), this.tags = [], this.ctr = 0;
  }, o2;
}(), en = "-ms-", tc = "-moz-", Xt = "-webkit-", T_ = "comm", Jh = "rule", Fh = "decl", qv = "@import", w_ = "@keyframes", Gv = "@layer", Yv = Math.abs, rc = String.fromCharCode, Vv = Object.assign;
function $v(o2, s) {
  return $e(o2, 0) ^ 45 ? (((s << 2 ^ $e(o2, 0)) << 2 ^ $e(o2, 1)) << 2 ^ $e(o2, 2)) << 2 ^ $e(o2, 3) : 0;
}
function C_(o2) {
  return o2.trim();
}
function Xv(o2, s) {
  return (o2 = s.exec(o2)) ? o2[0] : o2;
}
function Kt(o2, s, c) {
  return o2.replace(s, c);
}
function Dh(o2, s) {
  return o2.indexOf(s);
}
function $e(o2, s) {
  return o2.charCodeAt(s) | 0;
}
function ll(o2, s, c) {
  return o2.slice(s, c);
}
function Ei(o2) {
  return o2.length;
}
function td(o2) {
  return o2.length;
}
function Yu(o2, s) {
  return s.push(o2), o2;
}
function Kv(o2, s) {
  return o2.map(s).join("");
}
var oc = 1, Vo = 1, E_ = 0, _n = 0, Le = 0, Qo = "";
function sc(o2, s, c, f, m, g, y) {
  return { value: o2, root: s, parent: c, type: f, props: m, children: g, line: oc, column: Vo, length: y, return: "" };
}
function el(o2, s) {
  return Vv(sc("", null, null, "", null, null, 0), o2, { length: -o2.length }, s);
}
function Qv() {
  return Le;
}
function Iv() {
  return Le = _n > 0 ? $e(Qo, --_n) : 0, Vo--, Le === 10 && (Vo = 1, oc--), Le;
}
function Rn() {
  return Le = _n < E_ ? $e(Qo, _n++) : 0, Vo++, Le === 10 && (Vo = 1, oc++), Le;
}
function zi() {
  return $e(Qo, _n);
}
function Xu() {
  return _n;
}
function dl(o2, s) {
  return ll(Qo, o2, s);
}
function ul(o2) {
  switch (o2) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function M_(o2) {
  return oc = Vo = 1, E_ = Ei(Qo = o2), _n = 0, [];
}
function A_(o2) {
  return Qo = "", o2;
}
function Ku(o2) {
  return C_(dl(_n - 1, Nh(o2 === 91 ? o2 + 2 : o2 === 40 ? o2 + 1 : o2)));
}
function Wv(o2) {
  for (; (Le = zi()) && Le < 33; ) Rn();
  return ul(o2) > 2 || ul(Le) > 3 ? "" : " ";
}
function Jv(o2, s) {
  for (; --s && Rn() && !(Le < 48 || Le > 102 || Le > 57 && Le < 65 || Le > 70 && Le < 97); ) ;
  return dl(o2, Xu() + (s < 6 && zi() == 32 && Rn() == 32));
}
function Nh(o2) {
  for (; Rn(); ) switch (Le) {
    case o2:
      return _n;
    case 34:
    case 39:
      o2 !== 34 && o2 !== 39 && Nh(Le);
      break;
    case 40:
      o2 === 41 && Nh(o2);
      break;
    case 92:
      Rn();
      break;
  }
  return _n;
}
function Fv(o2, s) {
  for (; Rn() && o2 + Le !== 57; ) if (o2 + Le === 84 && zi() === 47) break;
  return "/*" + dl(s, _n - 1) + "*" + rc(o2 === 47 ? o2 : Rn());
}
function t0(o2) {
  for (; !ul(zi()); ) Rn();
  return dl(o2, _n);
}
function e0(o2) {
  return A_(Qu("", null, null, null, [""], o2 = M_(o2), 0, [0], o2));
}
function Qu(o2, s, c, f, m, g, y, S, w) {
  for (var T = 0, A = 0, R = y, k = 0, V = 0, Z = 0, z = 1, X = 1, lt = 1, ct = 0, nt = "", et = m, U = g, W = f, ft = nt; X; ) switch (Z = ct, ct = Rn()) {
    case 40:
      if (Z != 108 && $e(ft, R - 1) == 58) {
        Dh(ft += Kt(Ku(ct), "&", "&\f"), "&\f") != -1 && (lt = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      ft += Ku(ct);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      ft += Wv(Z);
      break;
    case 92:
      ft += Jv(Xu() - 1, 7);
      continue;
    case 47:
      switch (zi()) {
        case 42:
        case 47:
          Yu(n0(Fv(Rn(), Xu()), s, c), w);
          break;
        default:
          ft += "/";
      }
      break;
    case 123 * z:
      S[T++] = Ei(ft) * lt;
    case 125 * z:
    case 59:
    case 0:
      switch (ct) {
        case 0:
        case 125:
          X = 0;
        case 59 + A:
          lt == -1 && (ft = Kt(ft, /\f/g, "")), V > 0 && Ei(ft) - R && Yu(V > 32 ? Mg(ft + ";", f, c, R - 1) : Mg(Kt(ft, " ", "") + ";", f, c, R - 2), w);
          break;
        case 59:
          ft += ";";
        default:
          if (Yu(W = Eg(ft, s, c, T, A, m, S, nt, et = [], U = [], R), g), ct === 123) if (A === 0) Qu(ft, s, W, W, et, g, R, S, U);
          else switch (k === 99 && $e(ft, 3) === 110 ? 100 : k) {
            case 100:
            case 108:
            case 109:
            case 115:
              Qu(o2, W, W, f && Yu(Eg(o2, W, W, 0, 0, m, S, nt, m, et = [], R), U), m, U, R, S, f ? et : U);
              break;
            default:
              Qu(ft, W, W, W, [""], U, 0, S, U);
          }
      }
      T = A = V = 0, z = lt = 1, nt = ft = "", R = y;
      break;
    case 58:
      R = 1 + Ei(ft), V = Z;
    default:
      if (z < 1) {
        if (ct == 123) --z;
        else if (ct == 125 && z++ == 0 && Iv() == 125) continue;
      }
      switch (ft += rc(ct), ct * z) {
        case 38:
          lt = A > 0 ? 1 : (ft += "\f", -1);
          break;
        case 44:
          S[T++] = (Ei(ft) - 1) * lt, lt = 1;
          break;
        case 64:
          zi() === 45 && (ft += Ku(Rn())), k = zi(), A = R = Ei(nt = ft += t0(Xu())), ct++;
          break;
        case 45:
          Z === 45 && Ei(ft) == 2 && (z = 0);
      }
  }
  return g;
}
function Eg(o2, s, c, f, m, g, y, S, w, T, A) {
  for (var R = m - 1, k = m === 0 ? g : [""], V = td(k), Z = 0, z = 0, X = 0; Z < f; ++Z) for (var lt = 0, ct = ll(o2, R + 1, R = Yv(z = y[Z])), nt = o2; lt < V; ++lt) (nt = C_(z > 0 ? k[lt] + " " + ct : Kt(ct, /&\f/g, k[lt]))) && (w[X++] = nt);
  return sc(o2, s, c, m === 0 ? Jh : S, w, T, A);
}
function n0(o2, s, c) {
  return sc(o2, s, c, T_, rc(Qv()), ll(o2, 2, -2), 0);
}
function Mg(o2, s, c, f) {
  return sc(o2, s, c, Fh, ll(o2, 0, f), ll(o2, f + 1, -1), f);
}
function Go(o2, s) {
  for (var c = "", f = td(o2), m = 0; m < f; m++) c += s(o2[m], m, o2, s) || "";
  return c;
}
function i0(o2, s, c, f) {
  switch (o2.type) {
    case Gv:
      if (o2.children.length) break;
    case qv:
    case Fh:
      return o2.return = o2.return || o2.value;
    case T_:
      return "";
    case w_:
      return o2.return = o2.value + "{" + Go(o2.children, f) + "}";
    case Jh:
      o2.value = o2.props.join(",");
  }
  return Ei(c = Go(o2.children, f)) ? o2.return = o2.value + "{" + c + "}" : "";
}
function a0(o2) {
  var s = td(o2);
  return function(c, f, m, g) {
    for (var y = "", S = 0; S < s; S++) y += o2[S](c, f, m, g) || "";
    return y;
  };
}
function r0(o2) {
  return function(s) {
    s.root || (s = s.return) && o2(s);
  };
}
function O_(o2) {
  var s = /* @__PURE__ */ Object.create(null);
  return function(c) {
    return s[c] === void 0 && (s[c] = o2(c)), s[c];
  };
}
var o0 = function(s, c, f) {
  for (var m = 0, g = 0; m = g, g = zi(), m === 38 && g === 12 && (c[f] = 1), !ul(g); ) Rn();
  return dl(s, _n);
}, s0 = function(s, c) {
  var f = -1, m = 44;
  do
    switch (ul(m)) {
      case 0:
        m === 38 && zi() === 12 && (c[f] = 1), s[f] += o0(_n - 1, c, f);
        break;
      case 2:
        s[f] += Ku(m);
        break;
      case 4:
        if (m === 44) {
          s[++f] = zi() === 58 ? "&\f" : "", c[f] = s[f].length;
          break;
        }
      default:
        s[f] += rc(m);
    }
  while (m = Rn());
  return s;
}, l0 = function(s, c) {
  return A_(s0(M_(s), c));
}, Ag = /* @__PURE__ */ new WeakMap(), u0 = function(s) {
  if (!(s.type !== "rule" || !s.parent || s.length < 1)) {
    for (var c = s.value, f = s.parent, m = s.column === f.column && s.line === f.line; f.type !== "rule"; ) if (f = f.parent, !f) return;
    if (!(s.props.length === 1 && c.charCodeAt(0) !== 58 && !Ag.get(f)) && !m) {
      Ag.set(s, true);
      for (var g = [], y = l0(c, g), S = f.props, w = 0, T = 0; w < y.length; w++) for (var A = 0; A < S.length; A++, T++) s.props[T] = g[w] ? y[w].replace(/&\f/g, S[A]) : S[A] + " " + y[w];
    }
  }
}, c0 = function(s) {
  if (s.type === "decl") {
    var c = s.value;
    c.charCodeAt(0) === 108 && c.charCodeAt(2) === 98 && (s.return = "", s.value = "");
  }
};
function L_(o2, s) {
  switch ($v(o2, s)) {
    case 5103:
      return Xt + "print-" + o2 + o2;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Xt + o2 + o2;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Xt + o2 + tc + o2 + en + o2 + o2;
    case 6828:
    case 4268:
      return Xt + o2 + en + o2 + o2;
    case 6165:
      return Xt + o2 + en + "flex-" + o2 + o2;
    case 5187:
      return Xt + o2 + Kt(o2, /(\w+).+(:[^]+)/, Xt + "box-$1$2" + en + "flex-$1$2") + o2;
    case 5443:
      return Xt + o2 + en + "flex-item-" + Kt(o2, /flex-|-self/, "") + o2;
    case 4675:
      return Xt + o2 + en + "flex-line-pack" + Kt(o2, /align-content|flex-|-self/, "") + o2;
    case 5548:
      return Xt + o2 + en + Kt(o2, "shrink", "negative") + o2;
    case 5292:
      return Xt + o2 + en + Kt(o2, "basis", "preferred-size") + o2;
    case 6060:
      return Xt + "box-" + Kt(o2, "-grow", "") + Xt + o2 + en + Kt(o2, "grow", "positive") + o2;
    case 4554:
      return Xt + Kt(o2, /([^-])(transform)/g, "$1" + Xt + "$2") + o2;
    case 6187:
      return Kt(Kt(Kt(o2, /(zoom-|grab)/, Xt + "$1"), /(image-set)/, Xt + "$1"), o2, "") + o2;
    case 5495:
    case 3959:
      return Kt(o2, /(image-set\([^]*)/, Xt + "$1$`$1");
    case 4968:
      return Kt(Kt(o2, /(.+:)(flex-)?(.*)/, Xt + "box-pack:$3" + en + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Xt + o2 + o2;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Kt(o2, /(.+)-inline(.+)/, Xt + "$1$2") + o2;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ei(o2) - 1 - s > 6) switch ($e(o2, s + 1)) {
        case 109:
          if ($e(o2, s + 4) !== 45) break;
        case 102:
          return Kt(o2, /(.+:)(.+)-([^]+)/, "$1" + Xt + "$2-$3$1" + tc + ($e(o2, s + 3) == 108 ? "$3" : "$2-$3")) + o2;
        case 115:
          return ~Dh(o2, "stretch") ? L_(Kt(o2, "stretch", "fill-available"), s) + o2 : o2;
      }
      break;
    case 4949:
      if ($e(o2, s + 1) !== 115) break;
    case 6444:
      switch ($e(o2, Ei(o2) - 3 - (~Dh(o2, "!important") && 10))) {
        case 107:
          return Kt(o2, ":", ":" + Xt) + o2;
        case 101:
          return Kt(o2, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Xt + ($e(o2, 14) === 45 ? "inline-" : "") + "box$3$1" + Xt + "$2$3$1" + en + "$2box$3") + o2;
      }
      break;
    case 5936:
      switch ($e(o2, s + 11)) {
        case 114:
          return Xt + o2 + en + Kt(o2, /[svh]\w+-[tblr]{2}/, "tb") + o2;
        case 108:
          return Xt + o2 + en + Kt(o2, /[svh]\w+-[tblr]{2}/, "tb-rl") + o2;
        case 45:
          return Xt + o2 + en + Kt(o2, /[svh]\w+-[tblr]{2}/, "lr") + o2;
      }
      return Xt + o2 + en + o2 + o2;
  }
  return o2;
}
var f0 = function(s, c, f, m) {
  if (s.length > -1 && !s.return) switch (s.type) {
    case Fh:
      s.return = L_(s.value, s.length);
      break;
    case w_:
      return Go([el(s, { value: Kt(s.value, "@", "@" + Xt) })], m);
    case Jh:
      if (s.length) return Kv(s.props, function(g) {
        switch (Xv(g, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Go([el(s, { props: [Kt(g, /:(read-\w+)/, ":" + tc + "$1")] })], m);
          case "::placeholder":
            return Go([el(s, { props: [Kt(g, /:(plac\w+)/, ":" + Xt + "input-$1")] }), el(s, { props: [Kt(g, /:(plac\w+)/, ":" + tc + "$1")] }), el(s, { props: [Kt(g, /:(plac\w+)/, en + "input-$1")] })], m);
        }
        return "";
      });
  }
}, h0 = [f0], d0 = function(s) {
  var c = s.key;
  if (c === "css") {
    var f = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(f, function(z) {
      var X = z.getAttribute("data-emotion");
      X.indexOf(" ") !== -1 && (document.head.appendChild(z), z.setAttribute("data-s", ""));
    });
  }
  var m = s.stylisPlugins || h0, g = {}, y, S = [];
  y = s.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + c + ' "]'), function(z) {
    for (var X = z.getAttribute("data-emotion").split(" "), lt = 1; lt < X.length; lt++) g[X[lt]] = true;
    S.push(z);
  });
  var w, T = [u0, c0];
  {
    var A, R = [i0, r0(function(z) {
      A.insert(z);
    })], k = a0(T.concat(m, R)), V = function(X) {
      return Go(e0(X), k);
    };
    w = function(X, lt, ct, nt) {
      A = ct, V(X ? X + "{" + lt.styles + "}" : lt.styles), nt && (Z.inserted[lt.name] = true);
    };
  }
  var Z = { key: c, sheet: new jv({ key: c, container: y, nonce: s.nonce, speedy: s.speedy, prepend: s.prepend, insertionPoint: s.insertionPoint }), nonce: s.nonce, inserted: g, registered: {}, insert: w };
  return Z.sheet.hydrate(S), Z;
}, Th = { exports: {} }, Qt = {};
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Og;
function m0() {
  if (Og) return Qt;
  Og = 1;
  var o2 = typeof Symbol == "function" && Symbol.for, s = o2 ? Symbol.for("react.element") : 60103, c = o2 ? Symbol.for("react.portal") : 60106, f = o2 ? Symbol.for("react.fragment") : 60107, m = o2 ? Symbol.for("react.strict_mode") : 60108, g = o2 ? Symbol.for("react.profiler") : 60114, y = o2 ? Symbol.for("react.provider") : 60109, S = o2 ? Symbol.for("react.context") : 60110, w = o2 ? Symbol.for("react.async_mode") : 60111, T = o2 ? Symbol.for("react.concurrent_mode") : 60111, A = o2 ? Symbol.for("react.forward_ref") : 60112, R = o2 ? Symbol.for("react.suspense") : 60113, k = o2 ? Symbol.for("react.suspense_list") : 60120, V = o2 ? Symbol.for("react.memo") : 60115, Z = o2 ? Symbol.for("react.lazy") : 60116, z = o2 ? Symbol.for("react.block") : 60121, X = o2 ? Symbol.for("react.fundamental") : 60117, lt = o2 ? Symbol.for("react.responder") : 60118, ct = o2 ? Symbol.for("react.scope") : 60119;
  function nt(U) {
    if (typeof U == "object" && U !== null) {
      var W = U.$$typeof;
      switch (W) {
        case s:
          switch (U = U.type, U) {
            case w:
            case T:
            case f:
            case g:
            case m:
            case R:
              return U;
            default:
              switch (U = U && U.$$typeof, U) {
                case S:
                case A:
                case Z:
                case V:
                case y:
                  return U;
                default:
                  return W;
              }
          }
        case c:
          return W;
      }
    }
  }
  function et(U) {
    return nt(U) === T;
  }
  return Qt.AsyncMode = w, Qt.ConcurrentMode = T, Qt.ContextConsumer = S, Qt.ContextProvider = y, Qt.Element = s, Qt.ForwardRef = A, Qt.Fragment = f, Qt.Lazy = Z, Qt.Memo = V, Qt.Portal = c, Qt.Profiler = g, Qt.StrictMode = m, Qt.Suspense = R, Qt.isAsyncMode = function(U) {
    return et(U) || nt(U) === w;
  }, Qt.isConcurrentMode = et, Qt.isContextConsumer = function(U) {
    return nt(U) === S;
  }, Qt.isContextProvider = function(U) {
    return nt(U) === y;
  }, Qt.isElement = function(U) {
    return typeof U == "object" && U !== null && U.$$typeof === s;
  }, Qt.isForwardRef = function(U) {
    return nt(U) === A;
  }, Qt.isFragment = function(U) {
    return nt(U) === f;
  }, Qt.isLazy = function(U) {
    return nt(U) === Z;
  }, Qt.isMemo = function(U) {
    return nt(U) === V;
  }, Qt.isPortal = function(U) {
    return nt(U) === c;
  }, Qt.isProfiler = function(U) {
    return nt(U) === g;
  }, Qt.isStrictMode = function(U) {
    return nt(U) === m;
  }, Qt.isSuspense = function(U) {
    return nt(U) === R;
  }, Qt.isValidElementType = function(U) {
    return typeof U == "string" || typeof U == "function" || U === f || U === T || U === g || U === m || U === R || U === k || typeof U == "object" && U !== null && (U.$$typeof === Z || U.$$typeof === V || U.$$typeof === y || U.$$typeof === S || U.$$typeof === A || U.$$typeof === X || U.$$typeof === lt || U.$$typeof === ct || U.$$typeof === z);
  }, Qt.typeOf = nt, Qt;
}
var Lg;
function p0() {
  return Lg || (Lg = 1, Th.exports = m0()), Th.exports;
}
var wh, zg;
function g0() {
  if (zg) return wh;
  zg = 1;
  var o2 = p0(), s = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, c = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, f = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, m = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, g = {};
  g[o2.ForwardRef] = f, g[o2.Memo] = m;
  function y(Z) {
    return o2.isMemo(Z) ? m : g[Z.$$typeof] || s;
  }
  var S = Object.defineProperty, w = Object.getOwnPropertyNames, T = Object.getOwnPropertySymbols, A = Object.getOwnPropertyDescriptor, R = Object.getPrototypeOf, k = Object.prototype;
  function V(Z, z, X) {
    if (typeof z != "string") {
      if (k) {
        var lt = R(z);
        lt && lt !== k && V(Z, lt, X);
      }
      var ct = w(z);
      T && (ct = ct.concat(T(z)));
      for (var nt = y(Z), et = y(z), U = 0; U < ct.length; ++U) {
        var W = ct[U];
        if (!c[W] && !(X && X[W]) && !(et && et[W]) && !(nt && nt[W])) {
          var ft = A(z, W);
          try {
            S(Z, W, ft);
          } catch {
          }
        }
      }
    }
    return Z;
  }
  return wh = V, wh;
}
g0();
var _0 = true;
function z_(o2, s, c) {
  var f = "";
  return c.split(" ").forEach(function(m) {
    o2[m] !== void 0 ? s.push(o2[m] + ";") : m && (f += m + " ");
  }), f;
}
var ed = function(s, c, f) {
  var m = s.key + "-" + c.name;
  (f === false || _0 === false) && s.registered[m] === void 0 && (s.registered[m] = c.styles);
}, nd = function(s, c, f) {
  ed(s, c, f);
  var m = s.key + "-" + c.name;
  if (s.inserted[c.name] === void 0) {
    var g = c;
    do
      s.insert(c === g ? "." + m : "", g, s.sheet, true), g = g.next;
    while (g !== void 0);
  }
};
function y0(o2) {
  for (var s = 0, c, f = 0, m = o2.length; m >= 4; ++f, m -= 4) c = o2.charCodeAt(f) & 255 | (o2.charCodeAt(++f) & 255) << 8 | (o2.charCodeAt(++f) & 255) << 16 | (o2.charCodeAt(++f) & 255) << 24, c = (c & 65535) * 1540483477 + ((c >>> 16) * 59797 << 16), c ^= c >>> 24, s = (c & 65535) * 1540483477 + ((c >>> 16) * 59797 << 16) ^ (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16);
  switch (m) {
    case 3:
      s ^= (o2.charCodeAt(f + 2) & 255) << 16;
    case 2:
      s ^= (o2.charCodeAt(f + 1) & 255) << 8;
    case 1:
      s ^= o2.charCodeAt(f) & 255, s = (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16);
  }
  return s ^= s >>> 13, s = (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16), ((s ^ s >>> 15) >>> 0).toString(36);
}
var v0 = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, b0 = /[A-Z]|^ms/g, S0 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, R_ = function(s) {
  return s.charCodeAt(1) === 45;
}, Rg = function(s) {
  return s != null && typeof s != "boolean";
}, Ch = O_(function(o2) {
  return R_(o2) ? o2 : o2.replace(b0, "-$&").toLowerCase();
}), Bg = function(s, c) {
  switch (s) {
    case "animation":
    case "animationName":
      if (typeof c == "string") return c.replace(S0, function(f, m, g) {
        return Mi = { name: m, styles: g, next: Mi }, m;
      });
  }
  return v0[s] !== 1 && !R_(s) && typeof c == "number" && c !== 0 ? c + "px" : c;
};
function cl(o2, s, c) {
  if (c == null) return "";
  var f = c;
  if (f.__emotion_styles !== void 0) return f;
  switch (typeof c) {
    case "boolean":
      return "";
    case "object": {
      var m = c;
      if (m.anim === 1) return Mi = { name: m.name, styles: m.styles, next: Mi }, m.name;
      var g = c;
      if (g.styles !== void 0) {
        var y = g.next;
        if (y !== void 0) for (; y !== void 0; ) Mi = { name: y.name, styles: y.styles, next: Mi }, y = y.next;
        var S = g.styles + ";";
        return S;
      }
      return x0(o2, s, c);
    }
    case "function": {
      if (o2 !== void 0) {
        var w = Mi, T = c(o2);
        return Mi = w, cl(o2, s, T);
      }
      break;
    }
  }
  var A = c;
  if (s == null) return A;
  var R = s[A];
  return R !== void 0 ? R : A;
}
function x0(o2, s, c) {
  var f = "";
  if (Array.isArray(c)) for (var m = 0; m < c.length; m++) f += cl(o2, s, c[m]) + ";";
  else for (var g in c) {
    var y = c[g];
    if (typeof y != "object") {
      var S = y;
      s != null && s[S] !== void 0 ? f += g + "{" + s[S] + "}" : Rg(S) && (f += Ch(g) + ":" + Bg(g, S) + ";");
    } else if (Array.isArray(y) && typeof y[0] == "string" && (s == null || s[y[0]] === void 0)) for (var w = 0; w < y.length; w++) Rg(y[w]) && (f += Ch(g) + ":" + Bg(g, y[w]) + ";");
    else {
      var T = cl(o2, s, y);
      switch (g) {
        case "animation":
        case "animationName": {
          f += Ch(g) + ":" + T + ";";
          break;
        }
        default:
          f += g + "{" + T + "}";
      }
    }
  }
  return f;
}
var Dg = /label:\s*([^\s;{]+)\s*(;|$)/g, Mi;
function ml(o2, s, c) {
  if (o2.length === 1 && typeof o2[0] == "object" && o2[0] !== null && o2[0].styles !== void 0) return o2[0];
  var f = true, m = "";
  Mi = void 0;
  var g = o2[0];
  if (g == null || g.raw === void 0) f = false, m += cl(c, s, g);
  else {
    var y = g;
    m += y[0];
  }
  for (var S = 1; S < o2.length; S++) if (m += cl(c, s, o2[S]), f) {
    var w = g;
    m += w[S];
  }
  Dg.lastIndex = 0;
  for (var T = "", A; (A = Dg.exec(m)) !== null; ) T += "-" + A[1];
  var R = y0(m) + T;
  return { name: R, styles: m, next: Mi };
}
var T0 = function(s) {
  return s();
}, B_ = Bh.useInsertionEffect ? Bh.useInsertionEffect : false, D_ = B_ || T0, Ng = B_ || q.useLayoutEffect, N_ = q.createContext(typeof HTMLElement < "u" ? d0({ key: "css" }) : null);
N_.Provider;
var id = function(s) {
  return q.forwardRef(function(c, f) {
    var m = q.useContext(N_);
    return s(c, m, f);
  });
}, pl = q.createContext({}), ad = {}.hasOwnProperty, kh = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", w0 = function(s, c) {
  var f = {};
  for (var m in c) ad.call(c, m) && (f[m] = c[m]);
  return f[kh] = s, f;
}, C0 = function(s) {
  var c = s.cache, f = s.serialized, m = s.isStringTag;
  return ed(c, f, m), D_(function() {
    return nd(c, f, m);
  }), null;
}, E0 = id(function(o2, s, c) {
  var f = o2.css;
  typeof f == "string" && s.registered[f] !== void 0 && (f = s.registered[f]);
  var m = o2[kh], g = [f], y = "";
  typeof o2.className == "string" ? y = z_(s.registered, g, o2.className) : o2.className != null && (y = o2.className + " ");
  var S = ml(g, void 0, q.useContext(pl));
  y += s.key + "-" + S.name;
  var w = {};
  for (var T in o2) ad.call(o2, T) && T !== "css" && T !== kh && (w[T] = o2[T]);
  return w.className = y, c && (w.ref = c), q.createElement(q.Fragment, null, q.createElement(C0, { cache: s, serialized: S, isStringTag: typeof m == "string" }), q.createElement(m, w));
}), M0 = E0, kg = function(s, c) {
  var f = arguments;
  if (c == null || !ad.call(c, "css")) return q.createElement.apply(void 0, f);
  var m = f.length, g = new Array(m);
  g[0] = M0, g[1] = w0(s, c);
  for (var y = 2; y < m; y++) g[y] = f[y];
  return q.createElement.apply(null, g);
};
(function(o2) {
  var s;
  s || (s = o2.JSX || (o2.JSX = {}));
})(kg || (kg = {}));
var A0 = id(function(o2, s) {
  var c = o2.styles, f = ml([c], void 0, q.useContext(pl)), m = q.useRef();
  return Ng(function() {
    var g = s.key + "-global", y = new s.sheet.constructor({ key: g, nonce: s.sheet.nonce, container: s.sheet.container, speedy: s.sheet.isSpeedy }), S = false, w = document.querySelector('style[data-emotion="' + g + " " + f.name + '"]');
    return s.sheet.tags.length && (y.before = s.sheet.tags[0]), w !== null && (S = true, w.setAttribute("data-emotion", g), y.hydrate([w])), m.current = [y, S], function() {
      y.flush();
    };
  }, [s]), Ng(function() {
    var g = m.current, y = g[0], S = g[1];
    if (S) {
      g[1] = false;
      return;
    }
    if (f.next !== void 0 && nd(s, f.next, true), y.tags.length) {
      var w = y.tags[y.tags.length - 1].nextElementSibling;
      y.before = w, y.flush();
    }
    s.insert("", f, y, false);
  }, [s, f.name]), null;
});
function rd() {
  for (var o2 = arguments.length, s = new Array(o2), c = 0; c < o2; c++) s[c] = arguments[c];
  return ml(s);
}
function gl() {
  var o2 = rd.apply(void 0, arguments), s = "animation-" + o2.name;
  return { name: s, styles: "@keyframes " + s + "{" + o2.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}
var O0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, L0 = O_(function(o2) {
  return O0.test(o2) || o2.charCodeAt(0) === 111 && o2.charCodeAt(1) === 110 && o2.charCodeAt(2) < 91;
}), z0 = L0, R0 = function(s) {
  return s !== "theme";
}, Pg = function(s) {
  return typeof s == "string" && s.charCodeAt(0) > 96 ? z0 : R0;
}, Zg = function(s, c, f) {
  var m;
  if (c) {
    var g = c.shouldForwardProp;
    m = s.__emotion_forwardProp && g ? function(y) {
      return s.__emotion_forwardProp(y) && g(y);
    } : g;
  }
  return typeof m != "function" && f && (m = s.__emotion_forwardProp), m;
}, B0 = function(s) {
  var c = s.cache, f = s.serialized, m = s.isStringTag;
  return ed(c, f, m), D_(function() {
    return nd(c, f, m);
  }), null;
}, D0 = function o(s, c) {
  var f = s.__emotion_real === s, m = f && s.__emotion_base || s, g, y;
  c !== void 0 && (g = c.label, y = c.target);
  var S = Zg(s, c, f), w = S || Pg(m), T = !w("as");
  return function() {
    var A = arguments, R = f && s.__emotion_styles !== void 0 ? s.__emotion_styles.slice(0) : [];
    if (g !== void 0 && R.push("label:" + g + ";"), A[0] == null || A[0].raw === void 0) R.push.apply(R, A);
    else {
      var k = A[0];
      R.push(k[0]);
      for (var V = A.length, Z = 1; Z < V; Z++) R.push(A[Z], k[Z]);
    }
    var z = id(function(X, lt, ct) {
      var nt = T && X.as || m, et = "", U = [], W = X;
      if (X.theme == null) {
        W = {};
        for (var ft in X) W[ft] = X[ft];
        W.theme = q.useContext(pl);
      }
      typeof X.className == "string" ? et = z_(lt.registered, U, X.className) : X.className != null && (et = X.className + " ");
      var _t = ml(R.concat(U), lt.registered, W);
      et += lt.key + "-" + _t.name, y !== void 0 && (et += " " + y);
      var pt = T && S === void 0 ? Pg(nt) : w, yt = {};
      for (var ht in X) T && ht === "as" || pt(ht) && (yt[ht] = X[ht]);
      return yt.className = et, ct && (yt.ref = ct), q.createElement(q.Fragment, null, q.createElement(B0, { cache: lt, serialized: _t, isStringTag: typeof nt == "string" }), q.createElement(nt, yt));
    });
    return z.displayName = g !== void 0 ? g : "Styled(" + (typeof m == "string" ? m : m.displayName || m.name || "Component") + ")", z.defaultProps = s.defaultProps, z.__emotion_real = z, z.__emotion_base = m, z.__emotion_styles = R, z.__emotion_forwardProp = S, Object.defineProperty(z, "toString", { value: function() {
      return "." + y;
    } }), z.withComponent = function(X, lt) {
      var ct = o(X, Fu({}, c, lt, { shouldForwardProp: Zg(z, lt, true) }));
      return ct.apply(void 0, R);
    }, z;
  };
}, N0 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], Ph = D0.bind(null);
N0.forEach(function(o2) {
  Ph[o2] = Ph(o2);
});
function k0(o2) {
  return o2 == null || Object.keys(o2).length === 0;
}
function k_(o2) {
  const { styles: s, defaultTheme: c = {} } = o2, f = typeof s == "function" ? (m) => s(k0(m) ? c : m) : s;
  return rt.jsx(A0, { styles: f });
}
function P_(o2, s) {
  return Ph(o2, s);
}
function P0(o2, s) {
  Array.isArray(o2.__emotion_styles) && (o2.__emotion_styles = s(o2.__emotion_styles));
}
const Hg = [];
function ar(o2) {
  return Hg[0] = o2, ml(Hg);
}
var Eh = { exports: {} }, ie = {};
/**
* @license React
* react-is.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ug;
function Z0() {
  if (Ug) return ie;
  Ug = 1;
  var o2 = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), y = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), k = Symbol.for("react.view_transition"), V = Symbol.for("react.client.reference");
  function Z(z) {
    if (typeof z == "object" && z !== null) {
      var X = z.$$typeof;
      switch (X) {
        case o2:
          switch (z = z.type, z) {
            case c:
            case m:
            case f:
            case w:
            case T:
            case k:
              return z;
            default:
              switch (z = z && z.$$typeof, z) {
                case y:
                case S:
                case R:
                case A:
                  return z;
                case g:
                  return z;
                default:
                  return X;
              }
          }
        case s:
          return X;
      }
    }
  }
  return ie.ContextConsumer = g, ie.ContextProvider = y, ie.Element = o2, ie.ForwardRef = S, ie.Fragment = c, ie.Lazy = R, ie.Memo = A, ie.Portal = s, ie.Profiler = m, ie.StrictMode = f, ie.Suspense = w, ie.SuspenseList = T, ie.isContextConsumer = function(z) {
    return Z(z) === g;
  }, ie.isContextProvider = function(z) {
    return Z(z) === y;
  }, ie.isElement = function(z) {
    return typeof z == "object" && z !== null && z.$$typeof === o2;
  }, ie.isForwardRef = function(z) {
    return Z(z) === S;
  }, ie.isFragment = function(z) {
    return Z(z) === c;
  }, ie.isLazy = function(z) {
    return Z(z) === R;
  }, ie.isMemo = function(z) {
    return Z(z) === A;
  }, ie.isPortal = function(z) {
    return Z(z) === s;
  }, ie.isProfiler = function(z) {
    return Z(z) === m;
  }, ie.isStrictMode = function(z) {
    return Z(z) === f;
  }, ie.isSuspense = function(z) {
    return Z(z) === w;
  }, ie.isSuspenseList = function(z) {
    return Z(z) === T;
  }, ie.isValidElementType = function(z) {
    return typeof z == "string" || typeof z == "function" || z === c || z === m || z === f || z === w || z === T || typeof z == "object" && z !== null && (z.$$typeof === R || z.$$typeof === A || z.$$typeof === y || z.$$typeof === g || z.$$typeof === S || z.$$typeof === V || z.getModuleId !== void 0);
  }, ie.typeOf = Z, ie;
}
var jg;
function H0() {
  return jg || (jg = 1, Eh.exports = Z0()), Eh.exports;
}
var Z_ = H0();
function Oi(o2) {
  if (typeof o2 != "object" || o2 === null) return false;
  const s = Object.getPrototypeOf(o2);
  return (s === null || s === Object.prototype || Object.getPrototypeOf(s) === null) && !(Symbol.toStringTag in o2) && !(Symbol.iterator in o2);
}
function H_(o2) {
  if (q.isValidElement(o2) || Z_.isValidElementType(o2) || !Oi(o2)) return o2;
  const s = {};
  return Object.keys(o2).forEach((c) => {
    s[c] = H_(o2[c]);
  }), s;
}
function Bn(o2, s, c = { clone: true }) {
  const f = c.clone ? { ...o2 } : o2;
  return Oi(o2) && Oi(s) && Object.keys(s).forEach((m) => {
    q.isValidElement(s[m]) || Z_.isValidElementType(s[m]) ? f[m] = s[m] : Oi(s[m]) && Object.prototype.hasOwnProperty.call(o2, m) && Oi(o2[m]) ? f[m] = Bn(o2[m], s[m], c) : c.clone ? f[m] = Oi(s[m]) ? H_(s[m]) : s[m] : f[m] = s[m];
  }), f;
}
const U0 = (o2) => {
  const s = Object.keys(o2).map((c) => ({ key: c, val: o2[c] })) || [];
  return s.sort((c, f) => c.val - f.val), s.reduce((c, f) => ({ ...c, [f.key]: f.val }), {});
};
function j0(o2) {
  const { values: s = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: c = "px", step: f = 5, ...m } = o2, g = U0(s), y = Object.keys(g);
  function S(k) {
    return `@media (min-width:${typeof s[k] == "number" ? s[k] : k}${c})`;
  }
  function w(k) {
    return `@media (max-width:${(typeof s[k] == "number" ? s[k] : k) - f / 100}${c})`;
  }
  function T(k, V) {
    const Z = y.indexOf(V);
    return `@media (min-width:${typeof s[k] == "number" ? s[k] : k}${c}) and (max-width:${(Z !== -1 && typeof s[y[Z]] == "number" ? s[y[Z]] : V) - f / 100}${c})`;
  }
  function A(k) {
    return y.indexOf(k) + 1 < y.length ? T(k, y[y.indexOf(k) + 1]) : S(k);
  }
  function R(k) {
    const V = y.indexOf(k);
    return V === 0 ? S(y[1]) : V === y.length - 1 ? w(y[V]) : T(k, y[y.indexOf(k) + 1]).replace("@media", "@media not all and");
  }
  return { keys: y, values: g, up: S, down: w, between: T, only: A, not: R, unit: c, ...m };
}
function qg(o2, s) {
  if (!o2.containerQueries) return s;
  const c = Object.keys(s).filter((f) => f.startsWith("@container")).sort((f, m) => {
    var _a, _b2;
    const g = /min-width:\s*([0-9.]+)/;
    return +(((_a = f.match(g)) == null ? void 0 : _a[1]) || 0) - +(((_b2 = m.match(g)) == null ? void 0 : _b2[1]) || 0);
  });
  return c.length ? c.reduce((f, m) => {
    const g = s[m];
    return delete f[m], f[m] = g, f;
  }, { ...s }) : s;
}
function q0(o2, s) {
  return s === "@" || s.startsWith("@") && (o2.some((c) => s.startsWith(`@${c}`)) || !!s.match(/^@\d/));
}
function G0(o2, s) {
  const c = s.match(/^@([^/]+)?\/?(.+)?$/);
  if (!c) return null;
  const [, f, m] = c, g = Number.isNaN(+f) ? f || 0 : +f;
  return o2.containerQueries(m).up(g);
}
function Y0(o2) {
  const s = (g, y) => g.replace("@media", y ? `@container ${y}` : "@container");
  function c(g, y) {
    g.up = (...S) => s(o2.breakpoints.up(...S), y), g.down = (...S) => s(o2.breakpoints.down(...S), y), g.between = (...S) => s(o2.breakpoints.between(...S), y), g.only = (...S) => s(o2.breakpoints.only(...S), y), g.not = (...S) => {
      const w = s(o2.breakpoints.not(...S), y);
      return w.includes("not all and") ? w.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : w;
    };
  }
  const f = {}, m = (g) => (c(f, g), f);
  return c(m), { ...o2, containerQueries: m };
}
const V0 = { borderRadius: 4 };
function sl(o2, s) {
  return s ? Bn(o2, s, { clone: false }) : o2;
}
const lc = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, Gg = { keys: ["xs", "sm", "md", "lg", "xl"], up: (o2) => `@media (min-width:${lc[o2]}px)` }, $0 = { containerQueries: (o2) => ({ up: (s) => {
  let c = typeof s == "number" ? s : lc[s] || s;
  return typeof c == "number" && (c = `${c}px`), o2 ? `@container ${o2} (min-width:${c})` : `@container (min-width:${c})`;
} }) };
function ua(o2, s, c) {
  const f = o2.theme || {};
  if (Array.isArray(s)) {
    const g = f.breakpoints || Gg;
    return s.reduce((y, S, w) => (y[g.up(g.keys[w])] = c(s[w]), y), {});
  }
  if (typeof s == "object") {
    const g = f.breakpoints || Gg;
    return Object.keys(s).reduce((y, S) => {
      if (q0(g.keys, S)) {
        const w = G0(f.containerQueries ? f : $0, S);
        w && (y[w] = c(s[S], S));
      } else if (Object.keys(g.values || lc).includes(S)) {
        const w = g.up(S);
        y[w] = c(s[S], S);
      } else {
        const w = S;
        y[w] = s[w];
      }
      return y;
    }, {});
  }
  return c(s);
}
function X0(o2 = {}) {
  var _a;
  return ((_a = o2.keys) == null ? void 0 : _a.reduce((c, f) => {
    const m = o2.up(f);
    return c[m] = {}, c;
  }, {})) || {};
}
function Yg(o2, s) {
  return o2.reduce((c, f) => {
    const m = c[f];
    return (!m || Object.keys(m).length === 0) && delete c[f], c;
  }, s);
}
function Ce(o2) {
  if (typeof o2 != "string") throw new Error(Gr(7));
  return o2.charAt(0).toUpperCase() + o2.slice(1);
}
function Ai(o2, s, c = true) {
  if (!s || typeof s != "string") return null;
  if (o2 && o2.vars && c) {
    const f = `vars.${s}`.split(".").reduce((m, g) => m && m[g] ? m[g] : null, o2);
    if (f != null) return f;
  }
  return s.split(".").reduce((f, m) => f && f[m] != null ? f[m] : null, o2);
}
function ec(o2, s, c, f = c) {
  let m;
  return typeof o2 == "function" ? m = o2(c) : Array.isArray(o2) ? m = o2[c] || f : m = Ai(o2, c) || f, s && (m = s(m, f, o2)), m;
}
function Ee(o2) {
  const { prop: s, cssProperty: c = o2.prop, themeKey: f, transform: m } = o2, g = (y) => {
    if (y[s] == null) return null;
    const S = y[s], w = y.theme, T = Ai(w, f) || {};
    return ua(y, S, (R) => {
      let k = ec(T, m, R);
      return R === k && typeof R == "string" && (k = ec(T, m, `${s}${R === "default" ? "" : Ce(R)}`, R)), c === false ? k : { [c]: k };
    });
  };
  return g.propTypes = {}, g.filterProps = [s], g;
}
function K0(o2) {
  const s = {};
  return (c) => (s[c] === void 0 && (s[c] = o2(c)), s[c]);
}
const Q0 = { m: "margin", p: "padding" }, I0 = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] }, Vg = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" }, W0 = K0((o2) => {
  if (o2.length > 2) if (Vg[o2]) o2 = Vg[o2];
  else return [o2];
  const [s, c] = o2.split(""), f = Q0[s], m = I0[c] || "";
  return Array.isArray(m) ? m.map((g) => f + g) : [f + m];
}), od = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], sd = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...od, ...sd];
function _l(o2, s, c, f) {
  const m = Ai(o2, s, true) ?? c;
  return typeof m == "number" || typeof m == "string" ? (g) => typeof g == "string" ? g : typeof m == "string" ? m.startsWith("var(") && g === 0 ? 0 : m.startsWith("var(") && g === 1 ? m : `calc(${g} * ${m})` : m * g : Array.isArray(m) ? (g) => {
    if (typeof g == "string") return g;
    const y = Math.abs(g), S = m[y];
    return g >= 0 ? S : typeof S == "number" ? -S : typeof S == "string" && S.startsWith("var(") ? `calc(-1 * ${S})` : `-${S}`;
  } : typeof m == "function" ? m : () => {
  };
}
function ld(o2) {
  return _l(o2, "spacing", 8);
}
function yl(o2, s) {
  return typeof s == "string" || s == null ? s : o2(s);
}
function J0(o2, s) {
  return (c) => o2.reduce((f, m) => (f[m] = yl(s, c), f), {});
}
function F0(o2, s, c, f) {
  if (!s.includes(c)) return null;
  const m = W0(c), g = J0(m, f), y = o2[c];
  return ua(o2, y, g);
}
function U_(o2, s) {
  const c = ld(o2.theme);
  return Object.keys(o2).map((f) => F0(o2, s, f, c)).reduce(sl, {});
}
function Se(o2) {
  return U_(o2, od);
}
Se.propTypes = {};
Se.filterProps = od;
function xe(o2) {
  return U_(o2, sd);
}
xe.propTypes = {};
xe.filterProps = sd;
function j_(o2 = 8, s = ld({ spacing: o2 })) {
  if (o2.mui) return o2;
  const c = (...f) => (f.length === 0 ? [1] : f).map((g) => {
    const y = s(g);
    return typeof y == "number" ? `${y}px` : y;
  }).join(" ");
  return c.mui = true, c;
}
function uc(...o2) {
  const s = o2.reduce((f, m) => (m.filterProps.forEach((g) => {
    f[g] = m;
  }), f), {}), c = (f) => Object.keys(f).reduce((m, g) => s[g] ? sl(m, s[g](f)) : m, {});
  return c.propTypes = {}, c.filterProps = o2.reduce((f, m) => f.concat(m.filterProps), []), c;
}
function Qn(o2) {
  return typeof o2 != "number" ? o2 : `${o2}px solid`;
}
function Wn(o2, s) {
  return Ee({ prop: o2, themeKey: "borders", transform: s });
}
const t1 = Wn("border", Qn), e1 = Wn("borderTop", Qn), n1 = Wn("borderRight", Qn), i1 = Wn("borderBottom", Qn), a1 = Wn("borderLeft", Qn), r1 = Wn("borderColor"), o1 = Wn("borderTopColor"), s1 = Wn("borderRightColor"), l1 = Wn("borderBottomColor"), u1 = Wn("borderLeftColor"), c1 = Wn("outline", Qn), f1 = Wn("outlineColor"), cc = (o2) => {
  if (o2.borderRadius !== void 0 && o2.borderRadius !== null) {
    const s = _l(o2.theme, "shape.borderRadius", 4), c = (f) => ({ borderRadius: yl(s, f) });
    return ua(o2, o2.borderRadius, c);
  }
  return null;
};
cc.propTypes = {};
cc.filterProps = ["borderRadius"];
uc(t1, e1, n1, i1, a1, r1, o1, s1, l1, u1, cc, c1, f1);
const fc = (o2) => {
  if (o2.gap !== void 0 && o2.gap !== null) {
    const s = _l(o2.theme, "spacing", 8), c = (f) => ({ gap: yl(s, f) });
    return ua(o2, o2.gap, c);
  }
  return null;
};
fc.propTypes = {};
fc.filterProps = ["gap"];
const hc = (o2) => {
  if (o2.columnGap !== void 0 && o2.columnGap !== null) {
    const s = _l(o2.theme, "spacing", 8), c = (f) => ({ columnGap: yl(s, f) });
    return ua(o2, o2.columnGap, c);
  }
  return null;
};
hc.propTypes = {};
hc.filterProps = ["columnGap"];
const dc = (o2) => {
  if (o2.rowGap !== void 0 && o2.rowGap !== null) {
    const s = _l(o2.theme, "spacing", 8), c = (f) => ({ rowGap: yl(s, f) });
    return ua(o2, o2.rowGap, c);
  }
  return null;
};
dc.propTypes = {};
dc.filterProps = ["rowGap"];
const h1 = Ee({ prop: "gridColumn" }), d1 = Ee({ prop: "gridRow" }), m1 = Ee({ prop: "gridAutoFlow" }), p1 = Ee({ prop: "gridAutoColumns" }), g1 = Ee({ prop: "gridAutoRows" }), _1 = Ee({ prop: "gridTemplateColumns" }), y1 = Ee({ prop: "gridTemplateRows" }), v1 = Ee({ prop: "gridTemplateAreas" }), b1 = Ee({ prop: "gridArea" });
uc(fc, hc, dc, h1, d1, m1, p1, g1, _1, y1, v1, b1);
function Yo(o2, s) {
  return s === "grey" ? s : o2;
}
const S1 = Ee({ prop: "color", themeKey: "palette", transform: Yo }), x1 = Ee({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: Yo }), T1 = Ee({ prop: "backgroundColor", themeKey: "palette", transform: Yo });
uc(S1, x1, T1);
function zn(o2) {
  return o2 <= 1 && o2 !== 0 ? `${o2 * 100}%` : o2;
}
const w1 = Ee({ prop: "width", transform: zn }), ud = (o2) => {
  if (o2.maxWidth !== void 0 && o2.maxWidth !== null) {
    const s = (c) => {
      var _a, _b2, _c2, _d2, _e;
      const f = ((_c2 = (_b2 = (_a = o2.theme) == null ? void 0 : _a.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c2[c]) || lc[c];
      return f ? ((_e = (_d2 = o2.theme) == null ? void 0 : _d2.breakpoints) == null ? void 0 : _e.unit) !== "px" ? { maxWidth: `${f}${o2.theme.breakpoints.unit}` } : { maxWidth: f } : { maxWidth: zn(c) };
    };
    return ua(o2, o2.maxWidth, s);
  }
  return null;
};
ud.filterProps = ["maxWidth"];
const C1 = Ee({ prop: "minWidth", transform: zn }), E1 = Ee({ prop: "height", transform: zn }), M1 = Ee({ prop: "maxHeight", transform: zn }), A1 = Ee({ prop: "minHeight", transform: zn });
Ee({ prop: "size", cssProperty: "width", transform: zn });
Ee({ prop: "size", cssProperty: "height", transform: zn });
const O1 = Ee({ prop: "boxSizing" });
uc(w1, ud, C1, E1, M1, A1, O1);
const vl = { border: { themeKey: "borders", transform: Qn }, borderTop: { themeKey: "borders", transform: Qn }, borderRight: { themeKey: "borders", transform: Qn }, borderBottom: { themeKey: "borders", transform: Qn }, borderLeft: { themeKey: "borders", transform: Qn }, borderColor: { themeKey: "palette" }, borderTopColor: { themeKey: "palette" }, borderRightColor: { themeKey: "palette" }, borderBottomColor: { themeKey: "palette" }, borderLeftColor: { themeKey: "palette" }, outline: { themeKey: "borders", transform: Qn }, outlineColor: { themeKey: "palette" }, borderRadius: { themeKey: "shape.borderRadius", style: cc }, color: { themeKey: "palette", transform: Yo }, bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: Yo }, backgroundColor: { themeKey: "palette", transform: Yo }, p: { style: xe }, pt: { style: xe }, pr: { style: xe }, pb: { style: xe }, pl: { style: xe }, px: { style: xe }, py: { style: xe }, padding: { style: xe }, paddingTop: { style: xe }, paddingRight: { style: xe }, paddingBottom: { style: xe }, paddingLeft: { style: xe }, paddingX: { style: xe }, paddingY: { style: xe }, paddingInline: { style: xe }, paddingInlineStart: { style: xe }, paddingInlineEnd: { style: xe }, paddingBlock: { style: xe }, paddingBlockStart: { style: xe }, paddingBlockEnd: { style: xe }, m: { style: Se }, mt: { style: Se }, mr: { style: Se }, mb: { style: Se }, ml: { style: Se }, mx: { style: Se }, my: { style: Se }, margin: { style: Se }, marginTop: { style: Se }, marginRight: { style: Se }, marginBottom: { style: Se }, marginLeft: { style: Se }, marginX: { style: Se }, marginY: { style: Se }, marginInline: { style: Se }, marginInlineStart: { style: Se }, marginInlineEnd: { style: Se }, marginBlock: { style: Se }, marginBlockStart: { style: Se }, marginBlockEnd: { style: Se }, displayPrint: { cssProperty: false, transform: (o2) => ({ "@media print": { display: o2 } }) }, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: { style: fc }, rowGap: { style: dc }, columnGap: { style: hc }, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: { themeKey: "zIndex" }, top: {}, right: {}, bottom: {}, left: {}, boxShadow: { themeKey: "shadows" }, width: { transform: zn }, maxWidth: { style: ud }, minWidth: { transform: zn }, height: { transform: zn }, maxHeight: { transform: zn }, minHeight: { transform: zn }, boxSizing: {}, font: { themeKey: "font" }, fontFamily: { themeKey: "typography" }, fontSize: { themeKey: "typography" }, fontStyle: { themeKey: "typography" }, fontWeight: { themeKey: "typography" }, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: { cssProperty: false, themeKey: "typography" } };
function L1(...o2) {
  const s = o2.reduce((f, m) => f.concat(Object.keys(m)), []), c = new Set(s);
  return o2.every((f) => c.size === Object.keys(f).length);
}
function z1(o2, s) {
  return typeof o2 == "function" ? o2(s) : o2;
}
function R1() {
  function o2(c, f, m, g) {
    const y = { [c]: f, theme: m }, S = g[c];
    if (!S) return { [c]: f };
    const { cssProperty: w = c, themeKey: T, transform: A, style: R } = S;
    if (f == null) return null;
    if (T === "typography" && f === "inherit") return { [c]: f };
    const k = Ai(m, T) || {};
    return R ? R(y) : ua(y, f, (Z) => {
      let z = ec(k, A, Z);
      return Z === z && typeof Z == "string" && (z = ec(k, A, `${c}${Z === "default" ? "" : Ce(Z)}`, Z)), w === false ? z : { [w]: z };
    });
  }
  function s(c) {
    const { sx: f, theme: m = {}, nested: g } = c || {};
    if (!f) return null;
    const y = m.unstable_sxConfig ?? vl;
    function S(w) {
      let T = w;
      if (typeof w == "function") T = w(m);
      else if (typeof w != "object") return w;
      if (!T) return null;
      const A = X0(m.breakpoints), R = Object.keys(A);
      let k = A;
      return Object.keys(T).forEach((V) => {
        const Z = z1(T[V], m);
        if (Z != null) if (typeof Z == "object") if (y[V]) k = sl(k, o2(V, Z, m, y));
        else {
          const z = ua({ theme: m }, Z, (X) => ({ [V]: X }));
          L1(z, Z) ? k[V] = s({ sx: Z, theme: m, nested: true }) : k = sl(k, z);
        }
        else k = sl(k, o2(V, Z, m, y));
      }), !g && m.modularCssLayers ? { "@layer sx": qg(m, Yg(R, k)) } : qg(m, Yg(R, k));
    }
    return Array.isArray(f) ? f.map(S) : S(f);
  }
  return s;
}
const rr = R1();
rr.filterProps = ["sx"];
function B1(o2, s) {
  var _a;
  const c = this;
  if (c.vars) {
    if (!((_a = c.colorSchemes) == null ? void 0 : _a[o2]) || typeof c.getColorSchemeSelector != "function") return {};
    let f = c.getColorSchemeSelector(o2);
    return f === "&" ? s : ((f.includes("data-") || f.includes(".")) && (f = `*:where(${f.replace(/\s*&$/, "")}) &`), { [f]: s });
  }
  return c.palette.mode === o2 ? s : {};
}
function cd(o2 = {}, ...s) {
  const { breakpoints: c = {}, palette: f = {}, spacing: m, shape: g = {}, ...y } = o2, S = j0(c), w = j_(m);
  let T = Bn({ breakpoints: S, direction: "ltr", components: {}, palette: { mode: "light", ...f }, spacing: w, shape: { ...V0, ...g } }, y);
  return T = Y0(T), T.applyStyles = B1, T = s.reduce((A, R) => Bn(A, R), T), T.unstable_sxConfig = { ...vl, ...y == null ? void 0 : y.unstable_sxConfig }, T.unstable_sx = function(R) {
    return rr({ sx: R, theme: this });
  }, T;
}
function D1(o2) {
  return Object.keys(o2).length === 0;
}
function fd(o2 = null) {
  const s = q.useContext(pl);
  return !s || D1(s) ? o2 : s;
}
const N1 = cd();
function hd(o2 = N1) {
  return fd(o2);
}
function Mh(o2) {
  const s = ar(o2);
  return o2 !== s && s.styles ? (s.styles.match(/^@layer\s+[^{]*$/) || (s.styles = `@layer global{${s.styles}}`), s) : o2;
}
function q_({ styles: o2, themeId: s, defaultTheme: c = {} }) {
  const f = hd(c), m = s && f[s] || f;
  let g = typeof o2 == "function" ? o2(m) : o2;
  return m.modularCssLayers && (Array.isArray(g) ? g = g.map((y) => Mh(typeof y == "function" ? y(m) : y)) : g = Mh(g)), rt.jsx(k_, { styles: g });
}
const k1 = (o2) => {
  var _a;
  const s = { systemProps: {}, otherProps: {} }, c = ((_a = o2 == null ? void 0 : o2.theme) == null ? void 0 : _a.unstable_sxConfig) ?? vl;
  return Object.keys(o2).forEach((f) => {
    c[f] ? s.systemProps[f] = o2[f] : s.otherProps[f] = o2[f];
  }), s;
};
function G_(o2) {
  const { sx: s, ...c } = o2, { systemProps: f, otherProps: m } = k1(c);
  let g;
  return Array.isArray(s) ? g = [f, ...s] : typeof s == "function" ? g = (...y) => {
    const S = s(...y);
    return Oi(S) ? { ...f, ...S } : f;
  } : g = { ...f, ...s }, { ...m, sx: g };
}
const $g = (o2) => o2, P1 = () => {
  let o2 = $g;
  return { configure(s) {
    o2 = s;
  }, generate(s) {
    return o2(s);
  }, reset() {
    o2 = $g;
  } };
}, Y_ = P1();
function V_(o2) {
  var s, c, f = "";
  if (typeof o2 == "string" || typeof o2 == "number") f += o2;
  else if (typeof o2 == "object") if (Array.isArray(o2)) {
    var m = o2.length;
    for (s = 0; s < m; s++) o2[s] && (c = V_(o2[s])) && (f && (f += " "), f += c);
  } else for (c in o2) o2[c] && (f && (f += " "), f += c);
  return f;
}
function Xe() {
  for (var o2, s, c = 0, f = "", m = arguments.length; c < m; c++) (o2 = arguments[c]) && (s = V_(o2)) && (f && (f += " "), f += s);
  return f;
}
function Z1(o2 = {}) {
  const { themeId: s, defaultTheme: c, defaultClassName: f = "MuiBox-root", generateClassName: m } = o2, g = P_("div", { shouldForwardProp: (S) => S !== "theme" && S !== "sx" && S !== "as" })(rr);
  return q.forwardRef(function(w, T) {
    const A = hd(c), { className: R, component: k = "div", ...V } = G_(w);
    return rt.jsx(g, { as: k, ref: T, className: Xe(R, m ? m(f) : f), theme: s && A[s] || A, ...V });
  });
}
const H1 = { active: "active", checked: "checked", completed: "completed", disabled: "disabled", error: "error", expanded: "expanded", focused: "focused", focusVisible: "focusVisible", open: "open", readOnly: "readOnly", required: "required", selected: "selected" };
function Yr(o2, s, c = "Mui") {
  const f = H1[s];
  return f ? `${c}-${f}` : `${Y_.generate(o2)}-${s}`;
}
function lr(o2, s, c = "Mui") {
  const f = {};
  return s.forEach((m) => {
    f[m] = Yr(o2, m, c);
  }), f;
}
function $_(o2) {
  const { variants: s, ...c } = o2, f = { variants: s, style: ar(c), isProcessed: true };
  return f.style === c || s && s.forEach((m) => {
    typeof m.style != "function" && (m.style = ar(m.style));
  }), f;
}
const U1 = cd();
function Ah(o2) {
  return o2 !== "ownerState" && o2 !== "theme" && o2 !== "sx" && o2 !== "as";
}
function jr(o2, s) {
  return s && o2 && typeof o2 == "object" && o2.styles && !o2.styles.startsWith("@layer") && (o2.styles = `@layer ${s}{${String(o2.styles)}}`), o2;
}
function j1(o2) {
  return o2 ? (s, c) => c[o2] : null;
}
function q1(o2, s, c) {
  o2.theme = V1(o2.theme) ? c : o2.theme[s] || o2.theme;
}
function Iu(o2, s, c) {
  const f = typeof s == "function" ? s(o2) : s;
  if (Array.isArray(f)) return f.flatMap((m) => Iu(o2, m, c));
  if (Array.isArray(f == null ? void 0 : f.variants)) {
    let m;
    if (f.isProcessed) m = c ? jr(f.style, c) : f.style;
    else {
      const { variants: g, ...y } = f;
      m = c ? jr(ar(y), c) : y;
    }
    return X_(o2, f.variants, [m], c);
  }
  return (f == null ? void 0 : f.isProcessed) ? c ? jr(ar(f.style), c) : f.style : c ? jr(ar(f), c) : f;
}
function X_(o2, s, c = [], f = void 0) {
  var _a;
  let m;
  t: for (let g = 0; g < s.length; g += 1) {
    const y = s[g];
    if (typeof y.props == "function") {
      if (m ?? (m = { ...o2, ...o2.ownerState, ownerState: o2.ownerState }), !y.props(m)) continue;
    } else for (const S in y.props) if (o2[S] !== y.props[S] && ((_a = o2.ownerState) == null ? void 0 : _a[S]) !== y.props[S]) continue t;
    typeof y.style == "function" ? (m ?? (m = { ...o2, ...o2.ownerState, ownerState: o2.ownerState }), c.push(f ? jr(ar(y.style(m)), f) : y.style(m))) : c.push(f ? jr(ar(y.style), f) : y.style);
  }
  return c;
}
function G1(o2 = {}) {
  const { themeId: s, defaultTheme: c = U1, rootShouldForwardProp: f = Ah, slotShouldForwardProp: m = Ah } = o2;
  function g(S) {
    q1(S, s, c);
  }
  return (S, w = {}) => {
    P0(S, (W) => W.filter((ft) => ft !== rr));
    const { name: T, slot: A, skipVariantsResolver: R, skipSx: k, overridesResolver: V = j1(X1(A)), ...Z } = w, z = T && T.startsWith("Mui") || A ? "components" : "custom", X = R !== void 0 ? R : A && A !== "Root" && A !== "root" || false, lt = k || false;
    let ct = Ah;
    A === "Root" || A === "root" ? ct = f : A ? ct = m : $1(S) && (ct = void 0);
    const nt = P_(S, { shouldForwardProp: ct, label: Y1(), ...Z }), et = (W) => {
      if (W.__emotion_real === W) return W;
      if (typeof W == "function") return function(_t) {
        return Iu(_t, W, _t.theme.modularCssLayers ? z : void 0);
      };
      if (Oi(W)) {
        const ft = $_(W);
        return function(pt) {
          return ft.variants ? Iu(pt, ft, pt.theme.modularCssLayers ? z : void 0) : pt.theme.modularCssLayers ? jr(ft.style, z) : ft.style;
        };
      }
      return W;
    }, U = (...W) => {
      const ft = [], _t = W.map(et), pt = [];
      if (ft.push(g), T && V && pt.push(function(mt) {
        var _a, _b2;
        const St = (_b2 = (_a = mt.theme.components) == null ? void 0 : _a[T]) == null ? void 0 : _b2.styleOverrides;
        if (!St) return null;
        const N = {};
        for (const st in St) N[st] = Iu(mt, St[st], mt.theme.modularCssLayers ? "theme" : void 0);
        return V(mt, N);
      }), T && !X && pt.push(function(mt) {
        var _a, _b2, _c2;
        const St = (_c2 = (_b2 = (_a = mt.theme) == null ? void 0 : _a.components) == null ? void 0 : _b2[T]) == null ? void 0 : _c2.variants;
        return St ? X_(mt, St, [], mt.theme.modularCssLayers ? "theme" : void 0) : null;
      }), lt || pt.push(rr), Array.isArray(_t[0])) {
        const x = _t.shift(), mt = new Array(ft.length).fill(""), ot = new Array(pt.length).fill("");
        let St;
        St = [...mt, ...x, ...ot], St.raw = [...mt, ...x.raw, ...ot], ft.unshift(St);
      }
      const yt = [...ft, ..._t, ...pt], ht = nt(...yt);
      return S.muiName && (ht.muiName = S.muiName), ht;
    };
    return nt.withConfig && (U.withConfig = nt.withConfig), U;
  };
}
function Y1(o2, s) {
  return void 0;
}
function V1(o2) {
  for (const s in o2) return false;
  return true;
}
function $1(o2) {
  return typeof o2 == "string" && o2.charCodeAt(0) > 96;
}
function X1(o2) {
  return o2 && o2.charAt(0).toLowerCase() + o2.slice(1);
}
function Zh(o2, s, c = false) {
  const f = { ...s };
  for (const m in o2) if (Object.prototype.hasOwnProperty.call(o2, m)) {
    const g = m;
    if (g === "components" || g === "slots") f[g] = { ...o2[g], ...f[g] };
    else if (g === "componentsProps" || g === "slotProps") {
      const y = o2[g], S = s[g];
      if (!S) f[g] = y || {};
      else if (!y) f[g] = S;
      else {
        f[g] = { ...S };
        for (const w in y) if (Object.prototype.hasOwnProperty.call(y, w)) {
          const T = w;
          f[g][T] = Zh(y[T], S[T], c);
        }
      }
    } else g === "className" && c && s.className ? f.className = Xe(o2 == null ? void 0 : o2.className, s == null ? void 0 : s.className) : g === "style" && c && s.style ? f.style = { ...o2 == null ? void 0 : o2.style, ...s == null ? void 0 : s.style } : f[g] === void 0 && (f[g] = o2[g]);
  }
  return f;
}
const dd = typeof window < "u" ? q.useLayoutEffect : q.useEffect;
function K1(o2, s = Number.MIN_SAFE_INTEGER, c = Number.MAX_SAFE_INTEGER) {
  return Math.max(s, Math.min(o2, c));
}
function md(o2, s = 0, c = 1) {
  return K1(o2, s, c);
}
function Q1(o2) {
  o2 = o2.slice(1);
  const s = new RegExp(`.{1,${o2.length >= 6 ? 2 : 1}}`, "g");
  let c = o2.match(s);
  return c && c[0].length === 1 && (c = c.map((f) => f + f)), c ? `rgb${c.length === 4 ? "a" : ""}(${c.map((f, m) => m < 3 ? parseInt(f, 16) : Math.round(parseInt(f, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function or(o2) {
  if (o2.type) return o2;
  if (o2.charAt(0) === "#") return or(Q1(o2));
  const s = o2.indexOf("("), c = o2.substring(0, s);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(c)) throw new Error(Gr(9, o2));
  let f = o2.substring(s + 1, o2.length - 1), m;
  if (c === "color") {
    if (f = f.split(" "), m = f.shift(), f.length === 4 && f[3].charAt(0) === "/" && (f[3] = f[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(m)) throw new Error(Gr(10, m));
  } else f = f.split(",");
  return f = f.map((g) => parseFloat(g)), { type: c, values: f, colorSpace: m };
}
const I1 = (o2) => {
  const s = or(o2);
  return s.values.slice(0, 3).map((c, f) => s.type.includes("hsl") && f !== 0 ? `${c}%` : c).join(" ");
}, al = (o2, s) => {
  try {
    return I1(o2);
  } catch {
    return o2;
  }
};
function mc(o2) {
  const { type: s, colorSpace: c } = o2;
  let { values: f } = o2;
  return s.includes("rgb") ? f = f.map((m, g) => g < 3 ? parseInt(m, 10) : m) : s.includes("hsl") && (f[1] = `${f[1]}%`, f[2] = `${f[2]}%`), s.includes("color") ? f = `${c} ${f.join(" ")}` : f = `${f.join(", ")}`, `${s}(${f})`;
}
function K_(o2) {
  o2 = or(o2);
  const { values: s } = o2, c = s[0], f = s[1] / 100, m = s[2] / 100, g = f * Math.min(m, 1 - m), y = (T, A = (T + c / 30) % 12) => m - g * Math.max(Math.min(A - 3, 9 - A, 1), -1);
  let S = "rgb";
  const w = [Math.round(y(0) * 255), Math.round(y(8) * 255), Math.round(y(4) * 255)];
  return o2.type === "hsla" && (S += "a", w.push(s[3])), mc({ type: S, values: w });
}
function Hh(o2) {
  o2 = or(o2);
  let s = o2.type === "hsl" || o2.type === "hsla" ? or(K_(o2)).values : o2.values;
  return s = s.map((c) => (o2.type !== "color" && (c /= 255), c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)), Number((0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2]).toFixed(3));
}
function W1(o2, s) {
  const c = Hh(o2), f = Hh(s);
  return (Math.max(c, f) + 0.05) / (Math.min(c, f) + 0.05);
}
function pd(o2, s) {
  return o2 = or(o2), s = md(s), (o2.type === "rgb" || o2.type === "hsl") && (o2.type += "a"), o2.type === "color" ? o2.values[3] = `/${s}` : o2.values[3] = s, mc(o2);
}
function Ur(o2, s, c) {
  try {
    return pd(o2, s);
  } catch {
    return o2;
  }
}
function $o(o2, s) {
  if (o2 = or(o2), s = md(s), o2.type.includes("hsl")) o2.values[2] *= 1 - s;
  else if (o2.type.includes("rgb") || o2.type.includes("color")) for (let c = 0; c < 3; c += 1) o2.values[c] *= 1 - s;
  return mc(o2);
}
function Jt(o2, s, c) {
  try {
    return $o(o2, s);
  } catch {
    return o2;
  }
}
function pc(o2, s) {
  if (o2 = or(o2), s = md(s), o2.type.includes("hsl")) o2.values[2] += (100 - o2.values[2]) * s;
  else if (o2.type.includes("rgb")) for (let c = 0; c < 3; c += 1) o2.values[c] += (255 - o2.values[c]) * s;
  else if (o2.type.includes("color")) for (let c = 0; c < 3; c += 1) o2.values[c] += (1 - o2.values[c]) * s;
  return mc(o2);
}
function Ft(o2, s, c) {
  try {
    return pc(o2, s);
  } catch {
    return o2;
  }
}
function J1(o2, s = 0.15) {
  return Hh(o2) > 0.5 ? $o(o2, s) : pc(o2, s);
}
function Vu(o2, s, c) {
  try {
    return J1(o2, s);
  } catch {
    return o2;
  }
}
const Q_ = q.createContext(null);
function gd() {
  return q.useContext(Q_);
}
const F1 = typeof Symbol == "function" && Symbol.for, tb = F1 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function eb(o2, s) {
  return typeof s == "function" ? s(o2) : { ...o2, ...s };
}
function nb(o2) {
  const { children: s, theme: c } = o2, f = gd(), m = q.useMemo(() => {
    const g = f === null ? { ...c } : eb(f, c);
    return g != null && (g[tb] = f !== null), g;
  }, [c, f]);
  return rt.jsx(Q_.Provider, { value: m, children: s });
}
const ib = q.createContext();
function ab({ value: o2, ...s }) {
  return rt.jsx(ib.Provider, { value: o2 ?? true, ...s });
}
const I_ = q.createContext(void 0);
function rb({ value: o2, children: s }) {
  return rt.jsx(I_.Provider, { value: o2, children: s });
}
function ob(o2) {
  const { theme: s, name: c, props: f } = o2;
  if (!s || !s.components || !s.components[c]) return f;
  const m = s.components[c];
  return m.defaultProps ? Zh(m.defaultProps, f, s.components.mergeClassNameAndStyle) : !m.styleOverrides && !m.variants ? Zh(m, f, s.components.mergeClassNameAndStyle) : f;
}
function sb({ props: o2, name: s }) {
  const c = q.useContext(I_);
  return ob({ props: o2, name: s, theme: { components: c } });
}
let Xg = 0;
function lb(o2) {
  const [s, c] = q.useState(o2), f = o2 || s;
  return q.useEffect(() => {
    s == null && (Xg += 1, c(`mui-${Xg}`));
  }, [s]), f;
}
const ub = { ...Bh }, Kg = ub.useId;
function W_(o2) {
  if (Kg !== void 0) {
    const s = Kg();
    return o2 ?? s;
  }
  return lb(o2);
}
function cb(o2) {
  const s = fd(), c = W_() || "", { modularCssLayers: f } = o2;
  let m = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !f || s !== null ? m = "" : typeof f == "string" ? m = f.replace(/mui(?!\.)/g, m) : m = `@layer ${m};`, dd(() => {
    var _a, _b2;
    const g = document.querySelector("head");
    if (!g) return;
    const y = g.firstChild;
    if (m) {
      if (y && ((_a = y.hasAttribute) == null ? void 0 : _a.call(y, "data-mui-layer-order")) && y.getAttribute("data-mui-layer-order") === c) return;
      const S = document.createElement("style");
      S.setAttribute("data-mui-layer-order", c), S.textContent = m, g.prepend(S);
    } else (_b2 = g.querySelector(`style[data-mui-layer-order="${c}"]`)) == null ? void 0 : _b2.remove();
  }, [m, c]), m ? rt.jsx(q_, { styles: m }) : null;
}
const Qg = {};
function Ig(o2, s, c, f = false) {
  return q.useMemo(() => {
    const m = o2 && s[o2] || s;
    if (typeof c == "function") {
      const g = c(m), y = o2 ? { ...s, [o2]: g } : g;
      return f ? () => y : y;
    }
    return o2 ? { ...s, [o2]: c } : { ...s, ...c };
  }, [o2, s, c, f]);
}
function J_(o2) {
  const { children: s, theme: c, themeId: f } = o2, m = fd(Qg), g = gd() || Qg, y = Ig(f, m, c), S = Ig(f, g, c, true), w = (f ? y[f] : y).direction === "rtl", T = cb(y);
  return rt.jsx(nb, { theme: S, children: rt.jsx(pl.Provider, { value: y, children: rt.jsx(ab, { value: w, children: rt.jsxs(rb, { value: f ? y[f].components : y.components, children: [T, s] }) }) }) });
}
const Wg = { theme: void 0 };
function fb(o2) {
  let s, c;
  return function(m) {
    let g = s;
    return (g === void 0 || m.theme !== c) && (Wg.theme = m.theme, g = $_(o2(Wg)), s = g, c = m.theme), g;
  };
}
const _d = "mode", yd = "color-scheme", hb = "data-color-scheme";
function db(o2) {
  const { defaultMode: s = "system", defaultLightColorScheme: c = "light", defaultDarkColorScheme: f = "dark", modeStorageKey: m = _d, colorSchemeStorageKey: g = yd, attribute: y = hb, colorSchemeNode: S = "document.documentElement", nonce: w } = o2 || {};
  let T = "", A = y;
  if (y === "class" && (A = ".%s"), y === "data" && (A = "[data-%s]"), A.startsWith(".")) {
    const k = A.substring(1);
    T += `${S}.classList.remove('${k}'.replace('%s', light), '${k}'.replace('%s', dark));
      ${S}.classList.add('${k}'.replace('%s', colorScheme));`;
  }
  const R = A.match(/\[([^[\]]+)\]/);
  if (R) {
    const [k, V] = R[1].split("=");
    V || (T += `${S}.removeAttribute('${k}'.replace('%s', light));
      ${S}.removeAttribute('${k}'.replace('%s', dark));`), T += `
      ${S}.setAttribute('${k}'.replace('%s', colorScheme), ${V ? `${V}.replace('%s', colorScheme)` : '""'});`;
  } else T += `${S}.setAttribute('${A}', colorScheme);`;
  return rt.jsx("script", { suppressHydrationWarning: true, nonce: typeof window > "u" ? w : "", dangerouslySetInnerHTML: { __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${m}') || '${s}';
  const dark = localStorage.getItem('${g}-dark') || '${f}';
  const light = localStorage.getItem('${g}-light') || '${c}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${T}
  }
} catch(e){}})();` } }, "mui-color-scheme-init");
}
function mb() {
}
const pb = ({ key: o2, storageWindow: s }) => (!s && typeof window < "u" && (s = window), { get(c) {
  if (typeof window > "u") return;
  if (!s) return c;
  let f;
  try {
    f = s.localStorage.getItem(o2);
  } catch {
  }
  return f || c;
}, set: (c) => {
  if (s) try {
    s.localStorage.setItem(o2, c);
  } catch {
  }
}, subscribe: (c) => {
  if (!s) return mb;
  const f = (m) => {
    const g = m.newValue;
    m.key === o2 && c(g);
  };
  return s.addEventListener("storage", f), () => {
    s.removeEventListener("storage", f);
  };
} });
function Oh() {
}
function Jg(o2) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && o2 === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function F_(o2, s) {
  if (o2.mode === "light" || o2.mode === "system" && o2.systemMode === "light") return s("light");
  if (o2.mode === "dark" || o2.mode === "system" && o2.systemMode === "dark") return s("dark");
}
function gb(o2) {
  return F_(o2, (s) => {
    if (s === "light") return o2.lightColorScheme;
    if (s === "dark") return o2.darkColorScheme;
  });
}
function _b(o2) {
  const { defaultMode: s = "light", defaultLightColorScheme: c, defaultDarkColorScheme: f, supportedColorSchemes: m = [], modeStorageKey: g = _d, colorSchemeStorageKey: y = yd, storageWindow: S = typeof window > "u" ? void 0 : window, storageManager: w = pb, noSsr: T = false } = o2, A = m.join(","), R = m.length > 1, k = q.useMemo(() => w == null ? void 0 : w({ key: g, storageWindow: S }), [w, g, S]), V = q.useMemo(() => w == null ? void 0 : w({ key: `${y}-light`, storageWindow: S }), [w, y, S]), Z = q.useMemo(() => w == null ? void 0 : w({ key: `${y}-dark`, storageWindow: S }), [w, y, S]), [z, X] = q.useState(() => {
    const _t = (k == null ? void 0 : k.get(s)) || s, pt = (V == null ? void 0 : V.get(c)) || c, yt = (Z == null ? void 0 : Z.get(f)) || f;
    return { mode: _t, systemMode: Jg(_t), lightColorScheme: pt, darkColorScheme: yt };
  }), [lt, ct] = q.useState(T || !R);
  q.useEffect(() => {
    ct(true);
  }, []);
  const nt = gb(z), et = q.useCallback((_t) => {
    X((pt) => {
      if (_t === pt.mode) return pt;
      const yt = _t ?? s;
      return k == null ? void 0 : k.set(yt), { ...pt, mode: yt, systemMode: Jg(yt) };
    });
  }, [k, s]), U = q.useCallback((_t) => {
    _t ? typeof _t == "string" ? _t && !A.includes(_t) ? console.error(`\`${_t}\` does not exist in \`theme.colorSchemes\`.`) : X((pt) => {
      const yt = { ...pt };
      return F_(pt, (ht) => {
        ht === "light" && (V == null ? void 0 : V.set(_t), yt.lightColorScheme = _t), ht === "dark" && (Z == null ? void 0 : Z.set(_t), yt.darkColorScheme = _t);
      }), yt;
    }) : X((pt) => {
      const yt = { ...pt }, ht = _t.light === null ? c : _t.light, x = _t.dark === null ? f : _t.dark;
      return ht && (A.includes(ht) ? (yt.lightColorScheme = ht, V == null ? void 0 : V.set(ht)) : console.error(`\`${ht}\` does not exist in \`theme.colorSchemes\`.`)), x && (A.includes(x) ? (yt.darkColorScheme = x, Z == null ? void 0 : Z.set(x)) : console.error(`\`${x}\` does not exist in \`theme.colorSchemes\`.`)), yt;
    }) : X((pt) => (V == null ? void 0 : V.set(c), Z == null ? void 0 : Z.set(f), { ...pt, lightColorScheme: c, darkColorScheme: f }));
  }, [A, V, Z, c, f]), W = q.useCallback((_t) => {
    z.mode === "system" && X((pt) => {
      const yt = (_t == null ? void 0 : _t.matches) ? "dark" : "light";
      return pt.systemMode === yt ? pt : { ...pt, systemMode: yt };
    });
  }, [z.mode]), ft = q.useRef(W);
  return ft.current = W, q.useEffect(() => {
    if (typeof window.matchMedia != "function" || !R) return;
    const _t = (...yt) => ft.current(...yt), pt = window.matchMedia("(prefers-color-scheme: dark)");
    return pt.addListener(_t), _t(pt), () => {
      pt.removeListener(_t);
    };
  }, [R]), q.useEffect(() => {
    if (R) {
      const _t = (k == null ? void 0 : k.subscribe((ht) => {
        (!ht || ["light", "dark", "system"].includes(ht)) && et(ht || s);
      })) || Oh, pt = (V == null ? void 0 : V.subscribe((ht) => {
        (!ht || A.match(ht)) && U({ light: ht });
      })) || Oh, yt = (Z == null ? void 0 : Z.subscribe((ht) => {
        (!ht || A.match(ht)) && U({ dark: ht });
      })) || Oh;
      return () => {
        _t(), pt(), yt();
      };
    }
  }, [U, et, A, s, S, R, k, V, Z]), { ...z, mode: lt ? z.mode : void 0, systemMode: lt ? z.systemMode : void 0, colorScheme: lt ? nt : void 0, setMode: et, setColorScheme: U };
}
const yb = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function vb(o2) {
  const { themeId: s, theme: c = {}, modeStorageKey: f = _d, colorSchemeStorageKey: m = yd, disableTransitionOnChange: g = false, defaultColorScheme: y, resolveTheme: S } = o2, w = { allColorSchemes: [], colorScheme: void 0, darkColorScheme: void 0, lightColorScheme: void 0, mode: void 0, setColorScheme: () => {
  }, setMode: () => {
  }, systemMode: void 0 }, T = q.createContext(void 0), A = () => q.useContext(T) || w, R = {}, k = {};
  function V(lt) {
    var _a, _b2, _c2, _d2;
    const { children: ct, theme: nt, modeStorageKey: et = f, colorSchemeStorageKey: U = m, disableTransitionOnChange: W = g, storageManager: ft, storageWindow: _t = typeof window > "u" ? void 0 : window, documentNode: pt = typeof document > "u" ? void 0 : document, colorSchemeNode: yt = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: ht = false, disableStyleSheetGeneration: x = false, defaultMode: mt = "system", forceThemeRerender: ot = false, noSsr: St } = lt, N = q.useRef(false), st = gd(), F = q.useContext(T), Et = !!F && !ht, C = q.useMemo(() => nt || (typeof c == "function" ? c() : c), [nt]), $ = C[s], it = $ || C, { colorSchemes: at = R, components: dt = k, cssVarPrefix: vt } = it, ut = Object.keys(at).filter((ye) => !!at[ye]).join(","), Yt = q.useMemo(() => ut.split(","), [ut]), kt = typeof y == "string" ? y : y.light, Ke = typeof y == "string" ? y : y.dark, Fn = at[kt] && at[Ke] ? mt : ((_b2 = (_a = at[it.defaultColorScheme]) == null ? void 0 : _a.palette) == null ? void 0 : _b2.mode) || ((_c2 = it.palette) == null ? void 0 : _c2.mode), { mode: Dn, setMode: un, systemMode: Nn, lightColorScheme: kn, darkColorScheme: Ri, colorScheme: ca, setColorScheme: _e } = _b({ supportedColorSchemes: Yt, defaultLightColorScheme: kt, defaultDarkColorScheme: Ke, modeStorageKey: et, colorSchemeStorageKey: U, defaultMode: Fn, storageManager: ft, storageWindow: _t, noSsr: St });
    let Qe = Dn, Be = ca;
    Et && (Qe = F.mode, Be = F.colorScheme);
    let yn = Be || it.defaultColorScheme;
    it.vars && !ot && (yn = it.defaultColorScheme);
    const cn = q.useMemo(() => {
      var _a2;
      const ye = ((_a2 = it.generateThemeVars) == null ? void 0 : _a2.call(it)) || it.vars, Pt = { ...it, components: dt, colorSchemes: at, cssVarPrefix: vt, vars: ye };
      if (typeof Pt.generateSpacing == "function" && (Pt.spacing = Pt.generateSpacing()), yn) {
        const ce = at[yn];
        ce && typeof ce == "object" && Object.keys(ce).forEach((re) => {
          ce[re] && typeof ce[re] == "object" ? Pt[re] = { ...Pt[re], ...ce[re] } : Pt[re] = ce[re];
        });
      }
      return S ? S(Pt) : Pt;
    }, [it, yn, dt, at, vt]), At = it.colorSchemeSelector;
    dd(() => {
      if (Be && yt && At && At !== "media") {
        const ye = At;
        let Pt = At;
        if (ye === "class" && (Pt = ".%s"), ye === "data" && (Pt = "[data-%s]"), (ye == null ? void 0 : ye.startsWith("data-")) && !ye.includes("%s") && (Pt = `[${ye}="%s"]`), Pt.startsWith(".")) yt.classList.remove(...Yt.map((ce) => Pt.substring(1).replace("%s", ce))), yt.classList.add(Pt.substring(1).replace("%s", Be));
        else {
          const ce = Pt.replace("%s", Be).match(/\[([^\]]+)\]/);
          if (ce) {
            const [re, fa] = ce[1].split("=");
            fa || Yt.forEach((Xr) => {
              yt.removeAttribute(re.replace(Be, Xr));
            }), yt.setAttribute(re, fa ? fa.replace(/"|'/g, "") : "");
          } else yt.setAttribute(Pt, Be);
        }
      }
    }, [Be, At, yt, Yt]), q.useEffect(() => {
      let ye;
      if (W && N.current && pt) {
        const Pt = pt.createElement("style");
        Pt.appendChild(pt.createTextNode(yb)), pt.head.appendChild(Pt), window.getComputedStyle(pt.body), ye = setTimeout(() => {
          pt.head.removeChild(Pt);
        }, 1);
      }
      return () => {
        clearTimeout(ye);
      };
    }, [Be, W, pt]), q.useEffect(() => (N.current = true, () => {
      N.current = false;
    }), []);
    const cr = q.useMemo(() => ({ allColorSchemes: Yt, colorScheme: Be, darkColorScheme: Ri, lightColorScheme: kn, mode: Qe, setColorScheme: _e, setMode: un, systemMode: Nn }), [Yt, Be, Ri, kn, Qe, _e, un, Nn, cn.colorSchemeSelector]);
    let Vr = true;
    (x || it.cssVariables === false || Et && (st == null ? void 0 : st.cssVarPrefix) === vt) && (Vr = false);
    const $r = rt.jsxs(q.Fragment, { children: [rt.jsx(J_, { themeId: $ ? s : void 0, theme: cn, children: ct }), Vr && rt.jsx(k_, { styles: ((_d2 = cn.generateStyleSheets) == null ? void 0 : _d2.call(cn)) || [] })] });
    return Et ? $r : rt.jsx(T.Provider, { value: cr, children: $r });
  }
  const Z = typeof y == "string" ? y : y.light, z = typeof y == "string" ? y : y.dark;
  return { CssVarsProvider: V, useColorScheme: A, getInitColorSchemeScript: (lt) => db({ colorSchemeStorageKey: m, defaultLightColorScheme: Z, defaultDarkColorScheme: z, modeStorageKey: f, ...lt }) };
}
function bb(o2 = "") {
  function s(...f) {
    if (!f.length) return "";
    const m = f[0];
    return typeof m == "string" && !m.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${o2 ? `${o2}-` : ""}${m}${s(...f.slice(1))})` : `, ${m}`;
  }
  return (f, ...m) => `var(--${o2 ? `${o2}-` : ""}${f}${s(...m)})`;
}
const Fg = (o2, s, c, f = []) => {
  let m = o2;
  s.forEach((g, y) => {
    y === s.length - 1 ? Array.isArray(m) ? m[Number(g)] = c : m && typeof m == "object" && (m[g] = c) : m && typeof m == "object" && (m[g] || (m[g] = f.includes(g) ? [] : {}), m = m[g]);
  });
}, Sb = (o2, s, c) => {
  function f(m, g = [], y = []) {
    Object.entries(m).forEach(([S, w]) => {
      (!c || c && !c([...g, S])) && w != null && (typeof w == "object" && Object.keys(w).length > 0 ? f(w, [...g, S], Array.isArray(w) ? [...y, S] : y) : s([...g, S], w, y));
    });
  }
  f(o2);
}, xb = (o2, s) => typeof s == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((f) => o2.includes(f)) || o2[o2.length - 1].toLowerCase().includes("opacity") ? s : `${s}px` : s;
function Lh(o2, s) {
  const { prefix: c, shouldSkipGeneratingVar: f } = s || {}, m = {}, g = {}, y = {};
  return Sb(o2, (S, w, T) => {
    if ((typeof w == "string" || typeof w == "number") && (!f || !f(S, w))) {
      const A = `--${c ? `${c}-` : ""}${S.join("-")}`, R = xb(S, w);
      Object.assign(m, { [A]: R }), Fg(g, S, `var(${A})`, T), Fg(y, S, `var(${A}, ${R})`, T);
    }
  }, (S) => S[0] === "vars"), { css: m, vars: g, varsWithDefaults: y };
}
function Tb(o2, s = {}) {
  const { getSelector: c = lt, disableCssColorScheme: f, colorSchemeSelector: m, enableContrastVars: g } = s, { colorSchemes: y = {}, components: S, defaultColorScheme: w = "light", ...T } = o2, { vars: A, css: R, varsWithDefaults: k } = Lh(T, s);
  let V = k;
  const Z = {}, { [w]: z, ...X } = y;
  if (Object.entries(X || {}).forEach(([et, U]) => {
    const { vars: W, css: ft, varsWithDefaults: _t } = Lh(U, s);
    V = Bn(V, _t), Z[et] = { css: ft, vars: W };
  }), z) {
    const { css: et, vars: U, varsWithDefaults: W } = Lh(z, s);
    V = Bn(V, W), Z[w] = { css: et, vars: U };
  }
  function lt(et, U) {
    var _a, _b2;
    let W = m;
    if (m === "class" && (W = ".%s"), m === "data" && (W = "[data-%s]"), (m == null ? void 0 : m.startsWith("data-")) && !m.includes("%s") && (W = `[${m}="%s"]`), et) {
      if (W === "media") return o2.defaultColorScheme === et ? ":root" : { [`@media (prefers-color-scheme: ${((_b2 = (_a = y[et]) == null ? void 0 : _a.palette) == null ? void 0 : _b2.mode) || et})`]: { ":root": U } };
      if (W) return o2.defaultColorScheme === et ? `:root, ${W.replace("%s", String(et))}` : W.replace("%s", String(et));
    }
    return ":root";
  }
  return { vars: V, generateThemeVars: () => {
    let et = { ...A };
    return Object.entries(Z).forEach(([, { vars: U }]) => {
      et = Bn(et, U);
    }), et;
  }, generateStyleSheets: () => {
    var _a, _b2;
    const et = [], U = o2.defaultColorScheme || "light";
    function W(pt, yt) {
      Object.keys(yt).length && et.push(typeof pt == "string" ? { [pt]: { ...yt } } : pt);
    }
    W(c(void 0, { ...R }), R);
    const { [U]: ft, ..._t } = Z;
    if (ft) {
      const { css: pt } = ft, yt = (_b2 = (_a = y[U]) == null ? void 0 : _a.palette) == null ? void 0 : _b2.mode, ht = !f && yt ? { colorScheme: yt, ...pt } : { ...pt };
      W(c(U, { ...ht }), ht);
    }
    return Object.entries(_t).forEach(([pt, { css: yt }]) => {
      var _a2, _b3;
      const ht = (_b3 = (_a2 = y[pt]) == null ? void 0 : _a2.palette) == null ? void 0 : _b3.mode, x = !f && ht ? { colorScheme: ht, ...yt } : { ...yt };
      W(c(pt, { ...x }), x);
    }), g && et.push({ ":root": { "--__l-threshold": "0.7", "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)", "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)" } }), et;
  } };
}
function wb(o2) {
  return function(c) {
    return o2 === "media" ? `@media (prefers-color-scheme: ${c})` : o2 ? o2.startsWith("data-") && !o2.includes("%s") ? `[${o2}="${c}"] &` : o2 === "class" ? `.${c} &` : o2 === "data" ? `[data-${c}] &` : `${o2.replace("%s", c)} &` : "&";
  };
}
function Io(o2, s, c = void 0) {
  const f = {};
  for (const m in o2) {
    const g = o2[m];
    let y = "", S = true;
    for (let w = 0; w < g.length; w += 1) {
      const T = g[w];
      T && (y += (S === true ? "" : " ") + s(T), S = false, c && c[T] && (y += " " + c[T]));
    }
    f[m] = y;
  }
  return f;
}
const fl = { black: "#000", white: "#fff" }, Cb = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121", A100: "#f5f5f5", A200: "#eeeeee", A400: "#bdbdbd", A700: "#616161" }, Zo = { 50: "#f3e5f5", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 700: "#7b1fa2" }, Ho = { 300: "#e57373", 400: "#ef5350", 500: "#f44336", 700: "#d32f2f", 800: "#c62828" }, nl = { 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 700: "#f57c00", 900: "#e65100" }, Uo = { 50: "#e3f2fd", 200: "#90caf9", 400: "#42a5f5", 700: "#1976d2", 800: "#1565c0" }, jo = { 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 700: "#0288d1", 900: "#01579b" }, qo = { 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20" };
function ty() {
  return { text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)" }, divider: "rgba(0, 0, 0, 0.12)", background: { paper: fl.white, default: fl.white }, action: { active: "rgba(0, 0, 0, 0.54)", hover: "rgba(0, 0, 0, 0.04)", hoverOpacity: 0.04, selected: "rgba(0, 0, 0, 0.08)", selectedOpacity: 0.08, disabled: "rgba(0, 0, 0, 0.26)", disabledBackground: "rgba(0, 0, 0, 0.12)", disabledOpacity: 0.38, focus: "rgba(0, 0, 0, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.12 } };
}
const ey = ty();
function ny() {
  return { text: { primary: fl.white, secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", icon: "rgba(255, 255, 255, 0.5)" }, divider: "rgba(255, 255, 255, 0.12)", background: { paper: "#121212", default: "#121212" }, action: { active: fl.white, hover: "rgba(255, 255, 255, 0.08)", hoverOpacity: 0.08, selected: "rgba(255, 255, 255, 0.16)", selectedOpacity: 0.16, disabled: "rgba(255, 255, 255, 0.3)", disabledBackground: "rgba(255, 255, 255, 0.12)", disabledOpacity: 0.38, focus: "rgba(255, 255, 255, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.24 } };
}
const Uh = ny();
function t_(o2, s, c, f) {
  const m = f.light || f, g = f.dark || f * 1.5;
  o2[s] || (o2.hasOwnProperty(c) ? o2[s] = o2[c] : s === "light" ? o2.light = pc(o2.main, m) : s === "dark" && (o2.dark = $o(o2.main, g)));
}
function e_(o2, s, c, f, m) {
  const g = m.light || m, y = m.dark || m * 1.5;
  s[c] || (s.hasOwnProperty(f) ? s[c] = s[f] : c === "light" ? s.light = `color-mix(in ${o2}, ${s.main}, #fff ${(g * 100).toFixed(0)}%)` : c === "dark" && (s.dark = `color-mix(in ${o2}, ${s.main}, #000 ${(y * 100).toFixed(0)}%)`));
}
function Eb(o2 = "light") {
  return o2 === "dark" ? { main: Uo[200], light: Uo[50], dark: Uo[400] } : { main: Uo[700], light: Uo[400], dark: Uo[800] };
}
function Mb(o2 = "light") {
  return o2 === "dark" ? { main: Zo[200], light: Zo[50], dark: Zo[400] } : { main: Zo[500], light: Zo[300], dark: Zo[700] };
}
function Ab(o2 = "light") {
  return o2 === "dark" ? { main: Ho[500], light: Ho[300], dark: Ho[700] } : { main: Ho[700], light: Ho[400], dark: Ho[800] };
}
function Ob(o2 = "light") {
  return o2 === "dark" ? { main: jo[400], light: jo[300], dark: jo[700] } : { main: jo[700], light: jo[500], dark: jo[900] };
}
function Lb(o2 = "light") {
  return o2 === "dark" ? { main: qo[400], light: qo[300], dark: qo[700] } : { main: qo[800], light: qo[500], dark: qo[900] };
}
function zb(o2 = "light") {
  return o2 === "dark" ? { main: nl[400], light: nl[300], dark: nl[700] } : { main: "#ed6c02", light: nl[500], dark: nl[900] };
}
function Rb(o2) {
  return `oklch(from ${o2} var(--__l) 0 h / var(--__a))`;
}
function vd(o2) {
  const { mode: s = "light", contrastThreshold: c = 3, tonalOffset: f = 0.2, colorSpace: m, ...g } = o2, y = o2.primary || Eb(s), S = o2.secondary || Mb(s), w = o2.error || Ab(s), T = o2.info || Ob(s), A = o2.success || Lb(s), R = o2.warning || zb(s);
  function k(X) {
    return m ? Rb(X) : W1(X, Uh.text.primary) >= c ? Uh.text.primary : ey.text.primary;
  }
  const V = ({ color: X, name: lt, mainShade: ct = 500, lightShade: nt = 300, darkShade: et = 700 }) => {
    if (X = { ...X }, !X.main && X[ct] && (X.main = X[ct]), !X.hasOwnProperty("main")) throw new Error(Gr(11, lt ? ` (${lt})` : "", ct));
    if (typeof X.main != "string") throw new Error(Gr(12, lt ? ` (${lt})` : "", JSON.stringify(X.main)));
    return m ? (e_(m, X, "light", nt, f), e_(m, X, "dark", et, f)) : (t_(X, "light", nt, f), t_(X, "dark", et, f)), X.contrastText || (X.contrastText = k(X.main)), X;
  };
  let Z;
  return s === "light" ? Z = ty() : s === "dark" && (Z = ny()), Bn({ common: { ...fl }, mode: s, primary: V({ color: y, name: "primary" }), secondary: V({ color: S, name: "secondary", mainShade: "A400", lightShade: "A200", darkShade: "A700" }), error: V({ color: w, name: "error" }), warning: V({ color: R, name: "warning" }), info: V({ color: T, name: "info" }), success: V({ color: A, name: "success" }), grey: Cb, contrastThreshold: c, getContrastText: k, augmentColor: V, tonalOffset: f, ...Z }, g);
}
function Bb(o2) {
  const s = {};
  return Object.entries(o2).forEach((f) => {
    const [m, g] = f;
    typeof g == "object" && (s[m] = `${g.fontStyle ? `${g.fontStyle} ` : ""}${g.fontVariant ? `${g.fontVariant} ` : ""}${g.fontWeight ? `${g.fontWeight} ` : ""}${g.fontStretch ? `${g.fontStretch} ` : ""}${g.fontSize || ""}${g.lineHeight ? `/${g.lineHeight} ` : ""}${g.fontFamily || ""}`);
  }), s;
}
function Db(o2, s) {
  return { toolbar: { minHeight: 56, [o2.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } }, [o2.up("sm")]: { minHeight: 64 } }, ...s };
}
function Nb(o2) {
  return Math.round(o2 * 1e5) / 1e5;
}
const n_ = { textTransform: "uppercase" }, i_ = '"Roboto", "Helvetica", "Arial", sans-serif';
function iy(o2, s) {
  const { fontFamily: c = i_, fontSize: f = 14, fontWeightLight: m = 300, fontWeightRegular: g = 400, fontWeightMedium: y = 500, fontWeightBold: S = 700, htmlFontSize: w = 16, allVariants: T, pxToRem: A, ...R } = typeof s == "function" ? s(o2) : s, k = f / 14, V = A || ((X) => `${X / w * k}rem`), Z = (X, lt, ct, nt, et) => ({ fontFamily: c, fontWeight: X, fontSize: V(lt), lineHeight: ct, ...c === i_ ? { letterSpacing: `${Nb(nt / lt)}em` } : {}, ...et, ...T }), z = { h1: Z(m, 96, 1.167, -1.5), h2: Z(m, 60, 1.2, -0.5), h3: Z(g, 48, 1.167, 0), h4: Z(g, 34, 1.235, 0.25), h5: Z(g, 24, 1.334, 0), h6: Z(y, 20, 1.6, 0.15), subtitle1: Z(g, 16, 1.75, 0.15), subtitle2: Z(y, 14, 1.57, 0.1), body1: Z(g, 16, 1.5, 0.15), body2: Z(g, 14, 1.43, 0.15), button: Z(y, 14, 1.75, 0.4, n_), caption: Z(g, 12, 1.66, 0.4), overline: Z(g, 12, 2.66, 1, n_), inherit: { fontFamily: "inherit", fontWeight: "inherit", fontSize: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } };
  return Bn({ htmlFontSize: w, pxToRem: V, fontFamily: c, fontSize: f, fontWeightLight: m, fontWeightRegular: g, fontWeightMedium: y, fontWeightBold: S, ...z }, R, { clone: false });
}
const kb = 0.2, Pb = 0.14, Zb = 0.12;
function de(...o2) {
  return [`${o2[0]}px ${o2[1]}px ${o2[2]}px ${o2[3]}px rgba(0,0,0,${kb})`, `${o2[4]}px ${o2[5]}px ${o2[6]}px ${o2[7]}px rgba(0,0,0,${Pb})`, `${o2[8]}px ${o2[9]}px ${o2[10]}px ${o2[11]}px rgba(0,0,0,${Zb})`].join(",");
}
const Hb = ["none", de(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), de(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), de(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), de(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), de(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), de(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), de(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), de(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), de(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), de(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), de(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), de(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), de(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), de(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), de(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), de(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), de(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), de(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), de(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), de(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), de(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), de(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), de(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), de(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ub = { easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)", easeOut: "cubic-bezier(0.0, 0, 0.2, 1)", easeIn: "cubic-bezier(0.4, 0, 1, 1)", sharp: "cubic-bezier(0.4, 0, 0.6, 1)" }, jb = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 };
function a_(o2) {
  return `${Math.round(o2)}ms`;
}
function qb(o2) {
  if (!o2) return 0;
  const s = o2 / 36;
  return Math.min(Math.round((4 + 15 * s ** 0.25 + s / 5) * 10), 3e3);
}
function Gb(o2) {
  const s = { ...Ub, ...o2.easing }, c = { ...jb, ...o2.duration };
  return { getAutoHeightDuration: qb, create: (m = ["all"], g = {}) => {
    const { duration: y = c.standard, easing: S = s.easeInOut, delay: w = 0, ...T } = g;
    return (Array.isArray(m) ? m : [m]).map((A) => `${A} ${typeof y == "string" ? y : a_(y)} ${S} ${typeof w == "string" ? w : a_(w)}`).join(",");
  }, ...o2, easing: s, duration: c };
}
const Yb = { mobileStepper: 1e3, fab: 1050, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500 };
function Vb(o2) {
  return Oi(o2) || typeof o2 > "u" || typeof o2 == "string" || typeof o2 == "boolean" || typeof o2 == "number" || Array.isArray(o2);
}
function ay(o2 = {}) {
  const s = { ...o2 };
  function c(f) {
    const m = Object.entries(f);
    for (let g = 0; g < m.length; g++) {
      const [y, S] = m[g];
      !Vb(S) || y.startsWith("unstable_") ? delete f[y] : Oi(S) && (f[y] = { ...S }, c(f[y]));
    }
  }
  return c(s), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(s, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function r_(o2) {
  return typeof o2 == "number" ? `${(o2 * 100).toFixed(0)}%` : `calc((${o2}) * 100%)`;
}
const $b = (o2) => {
  if (!Number.isNaN(+o2)) return +o2;
  const s = o2.match(/\d*\.?\d+/g);
  if (!s) return 0;
  let c = 0;
  for (let f = 0; f < s.length; f += 1) c += +s[f];
  return c;
};
function Xb(o2) {
  Object.assign(o2, { alpha(s, c) {
    const f = this || o2;
    return f.colorSpace ? `oklch(from ${s} l c h / ${typeof c == "string" ? `calc(${c})` : c})` : f.vars ? `rgba(${s.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof c == "string" ? `calc(${c})` : c})` : pd(s, $b(c));
  }, lighten(s, c) {
    const f = this || o2;
    return f.colorSpace ? `color-mix(in ${f.colorSpace}, ${s}, #fff ${r_(c)})` : pc(s, c);
  }, darken(s, c) {
    const f = this || o2;
    return f.colorSpace ? `color-mix(in ${f.colorSpace}, ${s}, #000 ${r_(c)})` : $o(s, c);
  } });
}
function jh(o2 = {}, ...s) {
  const { breakpoints: c, mixins: f = {}, spacing: m, palette: g = {}, transitions: y = {}, typography: S = {}, shape: w, colorSpace: T, ...A } = o2;
  if (o2.vars && o2.generateThemeVars === void 0) throw new Error(Gr(20));
  const R = vd({ ...g, colorSpace: T }), k = cd(o2);
  let V = Bn(k, { mixins: Db(k.breakpoints, f), palette: R, shadows: Hb.slice(), typography: iy(R, S), transitions: Gb(y), zIndex: { ...Yb } });
  return V = Bn(V, A), V = s.reduce((Z, z) => Bn(Z, z), V), V.unstable_sxConfig = { ...vl, ...A == null ? void 0 : A.unstable_sxConfig }, V.unstable_sx = function(z) {
    return rr({ sx: z, theme: this });
  }, V.toRuntimeSource = ay, Xb(V), V;
}
function Kb(o2) {
  let s;
  return o2 < 1 ? s = 5.11916 * o2 ** 2 : s = 4.5 * Math.log(o2 + 1) + 2, Math.round(s * 10) / 1e3;
}
const Qb = [...Array(25)].map((o2, s) => {
  if (s === 0) return "none";
  const c = Kb(s);
  return `linear-gradient(rgba(255 255 255 / ${c}), rgba(255 255 255 / ${c}))`;
});
function ry(o2) {
  return { inputPlaceholder: o2 === "dark" ? 0.5 : 0.42, inputUnderline: o2 === "dark" ? 0.7 : 0.42, switchTrackDisabled: o2 === "dark" ? 0.2 : 0.12, switchTrack: o2 === "dark" ? 0.3 : 0.38 };
}
function oy(o2) {
  return o2 === "dark" ? Qb : [];
}
function Ib(o2) {
  const { palette: s = { mode: "light" }, opacity: c, overlays: f, colorSpace: m, ...g } = o2, y = vd({ ...s, colorSpace: m });
  return { palette: y, opacity: { ...ry(y.mode), ...c }, overlays: f || oy(y.mode), ...g };
}
function Wb(o2) {
  var _a;
  return !!o2[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!o2[0].match(/sxConfig$/) || o2[0] === "palette" && !!((_a = o2[1]) == null ? void 0 : _a.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Jb = (o2) => [...[...Array(25)].map((s, c) => `--${o2 ? `${o2}-` : ""}overlays-${c}`), `--${o2 ? `${o2}-` : ""}palette-AppBar-darkBg`, `--${o2 ? `${o2}-` : ""}palette-AppBar-darkColor`], Fb = (o2) => (s, c) => {
  const f = o2.rootSelector || ":root", m = o2.colorSchemeSelector;
  let g = m;
  if (m === "class" && (g = ".%s"), m === "data" && (g = "[data-%s]"), (m == null ? void 0 : m.startsWith("data-")) && !m.includes("%s") && (g = `[${m}="%s"]`), o2.defaultColorScheme === s) {
    if (s === "dark") {
      const y = {};
      return Jb(o2.cssVarPrefix).forEach((S) => {
        y[S] = c[S], delete c[S];
      }), g === "media" ? { [f]: c, "@media (prefers-color-scheme: dark)": { [f]: y } } : g ? { [g.replace("%s", s)]: y, [`${f}, ${g.replace("%s", s)}`]: c } : { [f]: { ...c, ...y } };
    }
    if (g && g !== "media") return `${f}, ${g.replace("%s", String(s))}`;
  } else if (s) {
    if (g === "media") return { [`@media (prefers-color-scheme: ${String(s)})`]: { [f]: c } };
    if (g) return g.replace("%s", String(s));
  }
  return f;
};
function tS(o2, s) {
  s.forEach((c) => {
    o2[c] || (o2[c] = {});
  });
}
function K(o2, s, c) {
  !o2[s] && c && (o2[s] = c);
}
function rl(o2) {
  return typeof o2 != "string" || !o2.startsWith("hsl") ? o2 : K_(o2);
}
function sa(o2, s) {
  `${s}Channel` in o2 || (o2[`${s}Channel`] = al(rl(o2[s])));
}
function eS(o2) {
  return typeof o2 == "number" ? `${o2}px` : typeof o2 == "string" || typeof o2 == "function" || Array.isArray(o2) ? o2 : "8px";
}
const Ci = (o2) => {
  try {
    return o2();
  } catch {
  }
}, nS = (o2 = "mui") => bb(o2);
function zh(o2, s, c, f, m) {
  if (!c) return;
  c = c === true ? {} : c;
  const g = m === "dark" ? "dark" : "light";
  if (!f) {
    s[m] = Ib({ ...c, palette: { mode: g, ...c == null ? void 0 : c.palette }, colorSpace: o2 });
    return;
  }
  const { palette: y, ...S } = jh({ ...f, palette: { mode: g, ...c == null ? void 0 : c.palette }, colorSpace: o2 });
  return s[m] = { ...c, palette: y, opacity: { ...ry(g), ...c == null ? void 0 : c.opacity }, overlays: (c == null ? void 0 : c.overlays) || oy(g) }, S;
}
function iS(o2 = {}, ...s) {
  const { colorSchemes: c = { light: true }, defaultColorScheme: f, disableCssColorScheme: m = false, cssVarPrefix: g = "mui", nativeColor: y = false, shouldSkipGeneratingVar: S = Wb, colorSchemeSelector: w = c.light && c.dark ? "media" : void 0, rootSelector: T = ":root", ...A } = o2, R = Object.keys(c)[0], k = f || (c.light && R !== "light" ? "light" : R), V = nS(g), { [k]: Z, light: z, dark: X, ...lt } = c, ct = { ...lt };
  let nt = Z;
  if ((k === "dark" && !("dark" in c) || k === "light" && !("light" in c)) && (nt = true), !nt) throw new Error(Gr(21, k));
  let et;
  y && (et = "oklch");
  const U = zh(et, ct, nt, A, k);
  z && !ct.light && zh(et, ct, z, void 0, "light"), X && !ct.dark && zh(et, ct, X, void 0, "dark");
  let W = { defaultColorScheme: k, ...U, cssVarPrefix: g, colorSchemeSelector: w, rootSelector: T, getCssVar: V, colorSchemes: ct, font: { ...Bb(U.typography), ...U.font }, spacing: eS(A.spacing) };
  Object.keys(W.colorSchemes).forEach((ht) => {
    const x = W.colorSchemes[ht].palette, mt = (St) => {
      const N = St.split("-"), st = N[1], F = N[2];
      return V(St, x[st][F]);
    };
    x.mode === "light" && (K(x.common, "background", "#fff"), K(x.common, "onBackground", "#000")), x.mode === "dark" && (K(x.common, "background", "#000"), K(x.common, "onBackground", "#fff"));
    function ot(St, N, st) {
      if (et) {
        let F;
        return St === Ur && (F = `transparent ${((1 - st) * 100).toFixed(0)}%`), St === Jt && (F = `#000 ${(st * 100).toFixed(0)}%`), St === Ft && (F = `#fff ${(st * 100).toFixed(0)}%`), `color-mix(in ${et}, ${N}, ${F})`;
      }
      return St(N, st);
    }
    if (tS(x, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), x.mode === "light") {
      K(x.Alert, "errorColor", ot(Jt, x.error.light, 0.6)), K(x.Alert, "infoColor", ot(Jt, x.info.light, 0.6)), K(x.Alert, "successColor", ot(Jt, x.success.light, 0.6)), K(x.Alert, "warningColor", ot(Jt, x.warning.light, 0.6)), K(x.Alert, "errorFilledBg", mt("palette-error-main")), K(x.Alert, "infoFilledBg", mt("palette-info-main")), K(x.Alert, "successFilledBg", mt("palette-success-main")), K(x.Alert, "warningFilledBg", mt("palette-warning-main")), K(x.Alert, "errorFilledColor", Ci(() => x.getContrastText(x.error.main))), K(x.Alert, "infoFilledColor", Ci(() => x.getContrastText(x.info.main))), K(x.Alert, "successFilledColor", Ci(() => x.getContrastText(x.success.main))), K(x.Alert, "warningFilledColor", Ci(() => x.getContrastText(x.warning.main))), K(x.Alert, "errorStandardBg", ot(Ft, x.error.light, 0.9)), K(x.Alert, "infoStandardBg", ot(Ft, x.info.light, 0.9)), K(x.Alert, "successStandardBg", ot(Ft, x.success.light, 0.9)), K(x.Alert, "warningStandardBg", ot(Ft, x.warning.light, 0.9)), K(x.Alert, "errorIconColor", mt("palette-error-main")), K(x.Alert, "infoIconColor", mt("palette-info-main")), K(x.Alert, "successIconColor", mt("palette-success-main")), K(x.Alert, "warningIconColor", mt("palette-warning-main")), K(x.AppBar, "defaultBg", mt("palette-grey-100")), K(x.Avatar, "defaultBg", mt("palette-grey-400")), K(x.Button, "inheritContainedBg", mt("palette-grey-300")), K(x.Button, "inheritContainedHoverBg", mt("palette-grey-A100")), K(x.Chip, "defaultBorder", mt("palette-grey-400")), K(x.Chip, "defaultAvatarColor", mt("palette-grey-700")), K(x.Chip, "defaultIconColor", mt("palette-grey-700")), K(x.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), K(x.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), K(x.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), K(x.LinearProgress, "primaryBg", ot(Ft, x.primary.main, 0.62)), K(x.LinearProgress, "secondaryBg", ot(Ft, x.secondary.main, 0.62)), K(x.LinearProgress, "errorBg", ot(Ft, x.error.main, 0.62)), K(x.LinearProgress, "infoBg", ot(Ft, x.info.main, 0.62)), K(x.LinearProgress, "successBg", ot(Ft, x.success.main, 0.62)), K(x.LinearProgress, "warningBg", ot(Ft, x.warning.main, 0.62)), K(x.Skeleton, "bg", et ? ot(Ur, x.text.primary, 0.11) : `rgba(${mt("palette-text-primaryChannel")} / 0.11)`), K(x.Slider, "primaryTrack", ot(Ft, x.primary.main, 0.62)), K(x.Slider, "secondaryTrack", ot(Ft, x.secondary.main, 0.62)), K(x.Slider, "errorTrack", ot(Ft, x.error.main, 0.62)), K(x.Slider, "infoTrack", ot(Ft, x.info.main, 0.62)), K(x.Slider, "successTrack", ot(Ft, x.success.main, 0.62)), K(x.Slider, "warningTrack", ot(Ft, x.warning.main, 0.62));
      const St = et ? ot(Jt, x.background.default, 0.6825) : Vu(x.background.default, 0.8);
      K(x.SnackbarContent, "bg", St), K(x.SnackbarContent, "color", Ci(() => et ? Uh.text.primary : x.getContrastText(St))), K(x.SpeedDialAction, "fabHoverBg", Vu(x.background.paper, 0.15)), K(x.StepConnector, "border", mt("palette-grey-400")), K(x.StepContent, "border", mt("palette-grey-400")), K(x.Switch, "defaultColor", mt("palette-common-white")), K(x.Switch, "defaultDisabledColor", mt("palette-grey-100")), K(x.Switch, "primaryDisabledColor", ot(Ft, x.primary.main, 0.62)), K(x.Switch, "secondaryDisabledColor", ot(Ft, x.secondary.main, 0.62)), K(x.Switch, "errorDisabledColor", ot(Ft, x.error.main, 0.62)), K(x.Switch, "infoDisabledColor", ot(Ft, x.info.main, 0.62)), K(x.Switch, "successDisabledColor", ot(Ft, x.success.main, 0.62)), K(x.Switch, "warningDisabledColor", ot(Ft, x.warning.main, 0.62)), K(x.TableCell, "border", ot(Ft, ot(Ur, x.divider, 1), 0.88)), K(x.Tooltip, "bg", ot(Ur, x.grey[700], 0.92));
    }
    if (x.mode === "dark") {
      K(x.Alert, "errorColor", ot(Ft, x.error.light, 0.6)), K(x.Alert, "infoColor", ot(Ft, x.info.light, 0.6)), K(x.Alert, "successColor", ot(Ft, x.success.light, 0.6)), K(x.Alert, "warningColor", ot(Ft, x.warning.light, 0.6)), K(x.Alert, "errorFilledBg", mt("palette-error-dark")), K(x.Alert, "infoFilledBg", mt("palette-info-dark")), K(x.Alert, "successFilledBg", mt("palette-success-dark")), K(x.Alert, "warningFilledBg", mt("palette-warning-dark")), K(x.Alert, "errorFilledColor", Ci(() => x.getContrastText(x.error.dark))), K(x.Alert, "infoFilledColor", Ci(() => x.getContrastText(x.info.dark))), K(x.Alert, "successFilledColor", Ci(() => x.getContrastText(x.success.dark))), K(x.Alert, "warningFilledColor", Ci(() => x.getContrastText(x.warning.dark))), K(x.Alert, "errorStandardBg", ot(Jt, x.error.light, 0.9)), K(x.Alert, "infoStandardBg", ot(Jt, x.info.light, 0.9)), K(x.Alert, "successStandardBg", ot(Jt, x.success.light, 0.9)), K(x.Alert, "warningStandardBg", ot(Jt, x.warning.light, 0.9)), K(x.Alert, "errorIconColor", mt("palette-error-main")), K(x.Alert, "infoIconColor", mt("palette-info-main")), K(x.Alert, "successIconColor", mt("palette-success-main")), K(x.Alert, "warningIconColor", mt("palette-warning-main")), K(x.AppBar, "defaultBg", mt("palette-grey-900")), K(x.AppBar, "darkBg", mt("palette-background-paper")), K(x.AppBar, "darkColor", mt("palette-text-primary")), K(x.Avatar, "defaultBg", mt("palette-grey-600")), K(x.Button, "inheritContainedBg", mt("palette-grey-800")), K(x.Button, "inheritContainedHoverBg", mt("palette-grey-700")), K(x.Chip, "defaultBorder", mt("palette-grey-700")), K(x.Chip, "defaultAvatarColor", mt("palette-grey-300")), K(x.Chip, "defaultIconColor", mt("palette-grey-300")), K(x.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), K(x.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), K(x.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), K(x.LinearProgress, "primaryBg", ot(Jt, x.primary.main, 0.5)), K(x.LinearProgress, "secondaryBg", ot(Jt, x.secondary.main, 0.5)), K(x.LinearProgress, "errorBg", ot(Jt, x.error.main, 0.5)), K(x.LinearProgress, "infoBg", ot(Jt, x.info.main, 0.5)), K(x.LinearProgress, "successBg", ot(Jt, x.success.main, 0.5)), K(x.LinearProgress, "warningBg", ot(Jt, x.warning.main, 0.5)), K(x.Skeleton, "bg", et ? ot(Ur, x.text.primary, 0.13) : `rgba(${mt("palette-text-primaryChannel")} / 0.13)`), K(x.Slider, "primaryTrack", ot(Jt, x.primary.main, 0.5)), K(x.Slider, "secondaryTrack", ot(Jt, x.secondary.main, 0.5)), K(x.Slider, "errorTrack", ot(Jt, x.error.main, 0.5)), K(x.Slider, "infoTrack", ot(Jt, x.info.main, 0.5)), K(x.Slider, "successTrack", ot(Jt, x.success.main, 0.5)), K(x.Slider, "warningTrack", ot(Jt, x.warning.main, 0.5));
      const St = et ? ot(Ft, x.background.default, 0.985) : Vu(x.background.default, 0.98);
      K(x.SnackbarContent, "bg", St), K(x.SnackbarContent, "color", Ci(() => et ? ey.text.primary : x.getContrastText(St))), K(x.SpeedDialAction, "fabHoverBg", Vu(x.background.paper, 0.15)), K(x.StepConnector, "border", mt("palette-grey-600")), K(x.StepContent, "border", mt("palette-grey-600")), K(x.Switch, "defaultColor", mt("palette-grey-300")), K(x.Switch, "defaultDisabledColor", mt("palette-grey-600")), K(x.Switch, "primaryDisabledColor", ot(Jt, x.primary.main, 0.55)), K(x.Switch, "secondaryDisabledColor", ot(Jt, x.secondary.main, 0.55)), K(x.Switch, "errorDisabledColor", ot(Jt, x.error.main, 0.55)), K(x.Switch, "infoDisabledColor", ot(Jt, x.info.main, 0.55)), K(x.Switch, "successDisabledColor", ot(Jt, x.success.main, 0.55)), K(x.Switch, "warningDisabledColor", ot(Jt, x.warning.main, 0.55)), K(x.TableCell, "border", ot(Jt, ot(Ur, x.divider, 1), 0.68)), K(x.Tooltip, "bg", ot(Ur, x.grey[700], 0.92));
    }
    sa(x.background, "default"), sa(x.background, "paper"), sa(x.common, "background"), sa(x.common, "onBackground"), sa(x, "divider"), Object.keys(x).forEach((St) => {
      const N = x[St];
      St !== "tonalOffset" && N && typeof N == "object" && (N.main && K(x[St], "mainChannel", al(rl(N.main))), N.light && K(x[St], "lightChannel", al(rl(N.light))), N.dark && K(x[St], "darkChannel", al(rl(N.dark))), N.contrastText && K(x[St], "contrastTextChannel", al(rl(N.contrastText))), St === "text" && (sa(x[St], "primary"), sa(x[St], "secondary")), St === "action" && (N.active && sa(x[St], "active"), N.selected && sa(x[St], "selected")));
    });
  }), W = s.reduce((ht, x) => Bn(ht, x), W);
  const ft = { prefix: g, disableCssColorScheme: m, shouldSkipGeneratingVar: S, getSelector: Fb(W), enableContrastVars: y }, { vars: _t, generateThemeVars: pt, generateStyleSheets: yt } = Tb(W, ft);
  return W.vars = _t, Object.entries(W.colorSchemes[W.defaultColorScheme]).forEach(([ht, x]) => {
    W[ht] = x;
  }), W.generateThemeVars = pt, W.generateStyleSheets = yt, W.generateSpacing = function() {
    return j_(A.spacing, ld(this));
  }, W.getColorSchemeSelector = wb(w), W.spacing = W.generateSpacing(), W.shouldSkipGeneratingVar = S, W.unstable_sxConfig = { ...vl, ...A == null ? void 0 : A.unstable_sxConfig }, W.unstable_sx = function(x) {
    return rr({ sx: x, theme: this });
  }, W.toRuntimeSource = ay, W;
}
function o_(o2, s, c) {
  o2.colorSchemes && c && (o2.colorSchemes[s] = { ...c !== true && c, palette: vd({ ...c === true ? {} : c.palette, mode: s }) });
}
function gc(o2 = {}, ...s) {
  const { palette: c, cssVariables: f = false, colorSchemes: m = c ? void 0 : { light: true }, defaultColorScheme: g = c == null ? void 0 : c.mode, ...y } = o2, S = g || "light", w = m == null ? void 0 : m[S], T = { ...m, ...c ? { [S]: { ...typeof w != "boolean" && w, palette: c } } : void 0 };
  if (f === false) {
    if (!("colorSchemes" in o2)) return jh(o2, ...s);
    let A = c;
    "palette" in o2 || T[S] && (T[S] !== true ? A = T[S].palette : S === "dark" && (A = { mode: "dark" }));
    const R = jh({ ...o2, palette: A }, ...s);
    return R.defaultColorScheme = S, R.colorSchemes = T, R.palette.mode === "light" && (R.colorSchemes.light = { ...T.light !== true && T.light, palette: R.palette }, o_(R, "dark", T.dark)), R.palette.mode === "dark" && (R.colorSchemes.dark = { ...T.dark !== true && T.dark, palette: R.palette }, o_(R, "light", T.light)), R;
  }
  return !c && !("light" in T) && S === "light" && (T.light = true), iS({ ...y, colorSchemes: T, defaultColorScheme: S, ...typeof f != "boolean" && f }, ...s);
}
const bd = gc();
function _c() {
  const o2 = hd(bd);
  return o2[Li] || o2;
}
function aS(o2) {
  return o2 !== "ownerState" && o2 !== "theme" && o2 !== "sx" && o2 !== "as";
}
const rS = (o2) => aS(o2) && o2 !== "classes", Jn = G1({ themeId: Li, defaultTheme: bd, rootShouldForwardProp: rS });
function oS({ theme: o2, ...s }) {
  const c = Li in o2 ? o2[Li] : void 0;
  return rt.jsx(J_, { ...s, themeId: c ? Li : void 0, theme: c || o2 });
}
const $u = { colorSchemeStorageKey: "mui-color-scheme", defaultLightColorScheme: "light", defaultDarkColorScheme: "dark", modeStorageKey: "mui-mode" }, { CssVarsProvider: sS } = vb({ themeId: Li, theme: () => gc({ cssVariables: true }), colorSchemeStorageKey: $u.colorSchemeStorageKey, modeStorageKey: $u.modeStorageKey, defaultColorScheme: { light: $u.defaultLightColorScheme, dark: $u.defaultDarkColorScheme }, resolveTheme: (o2) => {
  const s = { ...o2, typography: iy(o2.palette, o2.typography) };
  return s.unstable_sx = function(f) {
    return rr({ sx: f, theme: this });
  }, s;
} }), lS = sS;
function uS({ theme: o2, ...s }) {
  const c = q.useMemo(() => {
    if (typeof o2 == "function") return o2;
    const f = Li in o2 ? o2[Li] : o2;
    return "colorSchemes" in f ? null : "vars" in f ? o2 : { ...o2, vars: null };
  }, [o2]);
  return c ? rt.jsx(oS, { theme: c, ...s }) : rt.jsx(lS, { theme: o2, ...s });
}
const cS = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true, qh = 15, Xo = 7, Gh = { w: 6, h: cS ? 13 : 12 }, yc = { h: (window.innerHeight - qh * 2) / Gh.h, w: (window.innerWidth - qh * 2) / Gh.w }, fS = { spacing: `${Xo}px`, resolution: Gh, units: yc }, Rh = `${yc.h - Xo}px`, s_ = `${(yc.h - Xo) / 2}px`, hS = `${(yc.h - Xo) / 4}px`, dS = { pedone: "#FF4D4E", wheelchair: "#4FC3F7", normo: "#fad02c", visuallyImpaired: "#F06292", elderly: "#66BB6A", parent: "#f59e0b" };
function mS(o2 = "pedone") {
  const s = dS[o2] || "#000000", c = "#f5f5f5";
  return gc({ mainContainerPadding: `${qh}px`, iconH: Rh, grid: fS, brdRad: s_, offRad: hS, palette: { primary: { main: s, contrastText: s, secondary: c }, text: { primary: s, secondary: `${s}aa` }, background: { main: "#f5f5f5" } }, noBlurShadows: { active: `${Xo / 2}px ${Xo / 2}px 0 ${s}`, none: `0 0 0 ${s}`, transition: "box-shadow 0.2s ease-in-out" }, typography: { fontFamily: "Work Sans" }, components: { MuiButton: { styleOverrides: { root: { borderRadius: 8, border: `2px solid ${s}`, boxShadow: `0 2px 6px ${s}55`, color: s, "&:hover": { backgroundColor: `${s}10` } } } }, MuiIconButton: { styleOverrides: { root: { backgroundColor: s, width: Rh, height: Rh, borderRadius: s_, "&:focus": { backgroundColor: $o(s, 0.15) }, "&:hover": { backgroundColor: $o(s, 0.15) }, "&.Mui-disabled": { color: s, backgroundColor: c, border: `2px solid ${s}` } } } } } });
}
const l_ = (o2) => {
  let s;
  const c = /* @__PURE__ */ new Set(), f = (T, A) => {
    const R = typeof T == "function" ? T(s) : T;
    if (!Object.is(R, s)) {
      const k = s;
      s = A ?? (typeof R != "object" || R === null) ? R : Object.assign({}, s, R), c.forEach((V) => V(s, k));
    }
  }, m = () => s, S = { setState: f, getState: m, getInitialState: () => w, subscribe: (T) => (c.add(T), () => c.delete(T)) }, w = s = o2(f, m, S);
  return S;
}, pS = (o2) => o2 ? l_(o2) : l_, gS = (o2) => o2;
function _S(o2, s = gS) {
  const c = In.useSyncExternalStore(o2.subscribe, () => s(o2.getState()), () => s(o2.getInitialState()));
  return In.useDebugValue(c), c;
}
const u_ = (o2) => {
  const s = pS(o2), c = (f) => _S(s, f);
  return Object.assign(c, s), c;
}, yS = (o2) => o2 ? u_(o2) : u_;
let ci = yS((o2, s) => ({ prevSession: null, mainColor: "#FF4D4E", profile: "pedone", bbox: null, page: null, profiles: { wheelchair: "Sedia a rotelle", normo: "Pedone", visuallyImpaired: "Ipovedente", elderly: "Anziano", parent: "Genitore" }, colors: { wheelchair: "#4FC3F7", normo: "#fad02c", visuallyImpaired: "#F06292", elderly: "#66BB6A", parent: "#f59e0b" } }));
function vS(o2) {
  return rt.jsx(q_, { ...o2, defaultTheme: bd, themeId: Li });
}
function sy(o2) {
  return function(c) {
    return rt.jsx(vS, { styles: typeof o2 == "function" ? (f) => o2({ theme: f, ...c }) : o2 });
  };
}
function bS() {
  return G_;
}
const sr = fb;
function ur(o2) {
  return sb(o2);
}
function SS(o2) {
  return Yr("MuiSvgIcon", o2);
}
lr("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const xS = (o2) => {
  const { color: s, fontSize: c, classes: f } = o2, m = { root: ["root", s !== "inherit" && `color${Ce(s)}`, `fontSize${Ce(c)}`] };
  return Io(m, SS, f);
}, TS = Jn("svg", { name: "MuiSvgIcon", slot: "Root", overridesResolver: (o2, s) => {
  const { ownerState: c } = o2;
  return [s.root, c.color !== "inherit" && s[`color${Ce(c.color)}`], s[`fontSize${Ce(c.fontSize)}`]];
} })(sr(({ theme: o2 }) => {
  var _a, _b2, _c2, _d2, _e, _f, _g2, _h2, _i, _j, _k, _l2, _m, _n2;
  return { userSelect: "none", width: "1em", height: "1em", display: "inline-block", flexShrink: 0, transition: (_d2 = (_a = o2.transitions) == null ? void 0 : _a.create) == null ? void 0 : _d2.call(_a, "fill", { duration: (_c2 = (_b2 = (o2.vars ?? o2).transitions) == null ? void 0 : _b2.duration) == null ? void 0 : _c2.shorter }), variants: [{ props: (s) => !s.hasSvgAsChild, style: { fill: "currentColor" } }, { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } }, { props: { fontSize: "small" }, style: { fontSize: ((_f = (_e = o2.typography) == null ? void 0 : _e.pxToRem) == null ? void 0 : _f.call(_e, 20)) || "1.25rem" } }, { props: { fontSize: "medium" }, style: { fontSize: ((_h2 = (_g2 = o2.typography) == null ? void 0 : _g2.pxToRem) == null ? void 0 : _h2.call(_g2, 24)) || "1.5rem" } }, { props: { fontSize: "large" }, style: { fontSize: ((_j = (_i = o2.typography) == null ? void 0 : _i.pxToRem) == null ? void 0 : _j.call(_i, 35)) || "2.1875rem" } }, ...Object.entries((o2.vars ?? o2).palette).filter(([, s]) => s && s.main).map(([s]) => {
    var _a2, _b3;
    return { props: { color: s }, style: { color: (_b3 = (_a2 = (o2.vars ?? o2).palette) == null ? void 0 : _a2[s]) == null ? void 0 : _b3.main } };
  }), { props: { color: "action" }, style: { color: (_l2 = (_k = (o2.vars ?? o2).palette) == null ? void 0 : _k.action) == null ? void 0 : _l2.active } }, { props: { color: "disabled" }, style: { color: (_n2 = (_m = (o2.vars ?? o2).palette) == null ? void 0 : _m.action) == null ? void 0 : _n2.disabled } }, { props: { color: "inherit" }, style: { color: void 0 } }] };
})), Yh = q.forwardRef(function(s, c) {
  const f = ur({ props: s, name: "MuiSvgIcon" }), { children: m, className: g, color: y = "inherit", component: S = "svg", fontSize: w = "medium", htmlColor: T, inheritViewBox: A = false, titleAccess: R, viewBox: k = "0 0 24 24", ...V } = f, Z = q.isValidElement(m) && m.type === "svg", z = { ...f, color: y, component: S, fontSize: w, instanceFontSize: s.fontSize, inheritViewBox: A, viewBox: k, hasSvgAsChild: Z }, X = {};
  A || (X.viewBox = k);
  const lt = xS(z);
  return rt.jsxs(TS, { as: S, className: Xe(lt.root, g), focusable: "false", color: T, "aria-hidden": R ? void 0 : true, role: R ? "img" : void 0, ref: c, ...X, ...V, ...Z && m.props, ownerState: z, children: [Z ? m.props.children : m, R ? rt.jsx("title", { children: R }) : null] });
});
Yh.muiName = "SvgIcon";
function vc(o2, s) {
  function c(f, m) {
    return rt.jsx(Yh, { "data-testid": void 0, ref: m, ...f, children: o2 });
  }
  return c.muiName = Yh.muiName, q.memo(q.forwardRef(c));
}
function Wu(o2) {
  const s = q.useRef(o2);
  return dd(() => {
    s.current = o2;
  }), q.useRef((...c) => (0, s.current)(...c)).current;
}
function c_(...o2) {
  const s = q.useRef(void 0), c = q.useCallback((f) => {
    const m = o2.map((g) => {
      if (g == null) return null;
      if (typeof g == "function") {
        const y = g, S = y(f);
        return typeof S == "function" ? S : () => {
          y(null);
        };
      }
      return g.current = f, () => {
        g.current = null;
      };
    });
    return () => {
      m.forEach((g) => g == null ? void 0 : g());
    };
  }, o2);
  return q.useMemo(() => o2.every((f) => f == null) ? null : (f) => {
    s.current && (s.current(), s.current = void 0), f != null && (s.current = c(f));
  }, o2);
}
function wS(o2, s) {
  if (o2 == null) return {};
  var c = {};
  for (var f in o2) if ({}.hasOwnProperty.call(o2, f)) {
    if (s.indexOf(f) !== -1) continue;
    c[f] = o2[f];
  }
  return c;
}
function Vh(o2, s) {
  return Vh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, f) {
    return c.__proto__ = f, c;
  }, Vh(o2, s);
}
function CS(o2, s) {
  o2.prototype = Object.create(s.prototype), o2.prototype.constructor = o2, Vh(o2, s);
}
var ES = x_();
const f_ = In.createContext(null);
function MS(o2) {
  if (o2 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o2;
}
function Sd(o2, s) {
  var c = function(g) {
    return s && q.isValidElement(g) ? s(g) : g;
  }, f = /* @__PURE__ */ Object.create(null);
  return o2 && q.Children.map(o2, function(m) {
    return m;
  }).forEach(function(m) {
    f[m.key] = c(m);
  }), f;
}
function AS(o2, s) {
  o2 = o2 || {}, s = s || {};
  function c(A) {
    return A in s ? s[A] : o2[A];
  }
  var f = /* @__PURE__ */ Object.create(null), m = [];
  for (var g in o2) g in s ? m.length && (f[g] = m, m = []) : m.push(g);
  var y, S = {};
  for (var w in s) {
    if (f[w]) for (y = 0; y < f[w].length; y++) {
      var T = f[w][y];
      S[f[w][y]] = c(T);
    }
    S[w] = c(w);
  }
  for (y = 0; y < m.length; y++) S[m[y]] = c(m[y]);
  return S;
}
function qr(o2, s, c) {
  return c[s] != null ? c[s] : o2.props[s];
}
function OS(o2, s) {
  return Sd(o2.children, function(c) {
    return q.cloneElement(c, { onExited: s.bind(null, c), in: true, appear: qr(c, "appear", o2), enter: qr(c, "enter", o2), exit: qr(c, "exit", o2) });
  });
}
function LS(o2, s, c) {
  var f = Sd(o2.children), m = AS(s, f);
  return Object.keys(m).forEach(function(g) {
    var y = m[g];
    if (q.isValidElement(y)) {
      var S = g in s, w = g in f, T = s[g], A = q.isValidElement(T) && !T.props.in;
      w && (!S || A) ? m[g] = q.cloneElement(y, { onExited: c.bind(null, y), in: true, exit: qr(y, "exit", o2), enter: qr(y, "enter", o2) }) : !w && S && !A ? m[g] = q.cloneElement(y, { in: false }) : w && S && q.isValidElement(T) && (m[g] = q.cloneElement(y, { onExited: c.bind(null, y), in: T.props.in, exit: qr(y, "exit", o2), enter: qr(y, "enter", o2) }));
    }
  }), m;
}
var zS = Object.values || function(o2) {
  return Object.keys(o2).map(function(s) {
    return o2[s];
  });
}, RS = { component: "div", childFactory: function(s) {
  return s;
} }, xd = function(o2) {
  CS(s, o2);
  function s(f, m) {
    var g;
    g = o2.call(this, f, m) || this;
    var y = g.handleExited.bind(MS(g));
    return g.state = { contextValue: { isMounting: true }, handleExited: y, firstRender: true }, g;
  }
  var c = s.prototype;
  return c.componentDidMount = function() {
    this.mounted = true, this.setState({ contextValue: { isMounting: false } });
  }, c.componentWillUnmount = function() {
    this.mounted = false;
  }, s.getDerivedStateFromProps = function(m, g) {
    var y = g.children, S = g.handleExited, w = g.firstRender;
    return { children: w ? OS(m, S) : LS(m, y, S), firstRender: false };
  }, c.handleExited = function(m, g) {
    var y = Sd(this.props.children);
    m.key in y || (m.props.onExited && m.props.onExited(g), this.mounted && this.setState(function(S) {
      var w = Fu({}, S.children);
      return delete w[m.key], { children: w };
    }));
  }, c.render = function() {
    var m = this.props, g = m.component, y = m.childFactory, S = wS(m, ["component", "childFactory"]), w = this.state.contextValue, T = zS(this.state.children).map(y);
    return delete S.appear, delete S.enter, delete S.exit, g === null ? In.createElement(f_.Provider, { value: w }, T) : In.createElement(f_.Provider, { value: w }, In.createElement(g, S, T));
  }, s;
}(In.Component);
xd.propTypes = {};
xd.defaultProps = RS;
const h_ = {};
function ly(o2, s) {
  const c = q.useRef(h_);
  return c.current === h_ && (c.current = o2(s)), c;
}
const BS = [];
function DS(o2) {
  q.useEffect(o2, BS);
}
class Td {
  constructor() {
    __publicField(this, "currentId", null);
    __publicField(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    __publicField(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Td();
  }
  start(s, c) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, c();
    }, s);
  }
}
function NS() {
  const o2 = ly(Td.create).current;
  return DS(o2.disposeEffect), o2;
}
function nc(o2) {
  try {
    return o2.matches(":focus-visible");
  } catch {
  }
  return false;
}
class ic {
  constructor() {
    __publicField(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = true, this.mounted.resolve());
    });
    this.ref = { current: null }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
  }
  static create() {
    return new ic();
  }
  static use() {
    const s = ly(ic.create).current, [c, f] = q.useState(false);
    return s.shouldMount = c, s.setShouldMount = f, q.useEffect(s.mountEffect, [c]), s;
  }
  mount() {
    return this.mounted || (this.mounted = PS(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  start(...s) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.start(...s);
    });
  }
  stop(...s) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.stop(...s);
    });
  }
  pulsate(...s) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.pulsate(...s);
    });
  }
}
function kS() {
  return ic.use();
}
function PS() {
  let o2, s;
  const c = new Promise((f, m) => {
    o2 = f, s = m;
  });
  return c.resolve = o2, c.reject = s, c;
}
function ZS(o2) {
  const { className: s, classes: c, pulsate: f = false, rippleX: m, rippleY: g, rippleSize: y, in: S, onExited: w, timeout: T } = o2, [A, R] = q.useState(false), k = Xe(s, c.ripple, c.rippleVisible, f && c.ripplePulsate), V = { width: y, height: y, top: -(y / 2) + g, left: -(y / 2) + m }, Z = Xe(c.child, A && c.childLeaving, f && c.childPulsate);
  return !S && !A && R(true), q.useEffect(() => {
    if (!S && w != null) {
      const z = setTimeout(w, T);
      return () => {
        clearTimeout(z);
      };
    }
  }, [w, S, T]), rt.jsx("span", { className: k, style: V, children: rt.jsx("span", { className: Z }) });
}
const Kn = lr("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), $h = 550, HS = 80, US = gl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, jS = gl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, qS = gl`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, GS = Jn("span", { name: "MuiTouchRipple", slot: "Root" })({ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: 0, top: 0, right: 0, bottom: 0, left: 0, borderRadius: "inherit" }), YS = Jn(ZS, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${Kn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${US};
    animation-duration: ${$h}ms;
    animation-timing-function: ${({ theme: o2 }) => o2.transitions.easing.easeInOut};
  }

  &.${Kn.ripplePulsate} {
    animation-duration: ${({ theme: o2 }) => o2.transitions.duration.shorter}ms;
  }

  & .${Kn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Kn.childLeaving} {
    opacity: 0;
    animation-name: ${jS};
    animation-duration: ${$h}ms;
    animation-timing-function: ${({ theme: o2 }) => o2.transitions.easing.easeInOut};
  }

  & .${Kn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${qS};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: o2 }) => o2.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, VS = q.forwardRef(function(s, c) {
  const f = ur({ props: s, name: "MuiTouchRipple" }), { center: m = false, classes: g = {}, className: y, ...S } = f, [w, T] = q.useState([]), A = q.useRef(0), R = q.useRef(null);
  q.useEffect(() => {
    R.current && (R.current(), R.current = null);
  }, [w]);
  const k = q.useRef(false), V = NS(), Z = q.useRef(null), z = q.useRef(null), X = q.useCallback((et) => {
    const { pulsate: U, rippleX: W, rippleY: ft, rippleSize: _t, cb: pt } = et;
    T((yt) => [...yt, rt.jsx(YS, { classes: { ripple: Xe(g.ripple, Kn.ripple), rippleVisible: Xe(g.rippleVisible, Kn.rippleVisible), ripplePulsate: Xe(g.ripplePulsate, Kn.ripplePulsate), child: Xe(g.child, Kn.child), childLeaving: Xe(g.childLeaving, Kn.childLeaving), childPulsate: Xe(g.childPulsate, Kn.childPulsate) }, timeout: $h, pulsate: U, rippleX: W, rippleY: ft, rippleSize: _t }, A.current)]), A.current += 1, R.current = pt;
  }, [g]), lt = q.useCallback((et = {}, U = {}, W = () => {
  }) => {
    const { pulsate: ft = false, center: _t = m || U.pulsate, fakeElement: pt = false } = U;
    if ((et == null ? void 0 : et.type) === "mousedown" && k.current) {
      k.current = false;
      return;
    }
    (et == null ? void 0 : et.type) === "touchstart" && (k.current = true);
    const yt = pt ? null : z.current, ht = yt ? yt.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
    let x, mt, ot;
    if (_t || et === void 0 || et.clientX === 0 && et.clientY === 0 || !et.clientX && !et.touches) x = Math.round(ht.width / 2), mt = Math.round(ht.height / 2);
    else {
      const { clientX: St, clientY: N } = et.touches && et.touches.length > 0 ? et.touches[0] : et;
      x = Math.round(St - ht.left), mt = Math.round(N - ht.top);
    }
    if (_t) ot = Math.sqrt((2 * ht.width ** 2 + ht.height ** 2) / 3), ot % 2 === 0 && (ot += 1);
    else {
      const St = Math.max(Math.abs((yt ? yt.clientWidth : 0) - x), x) * 2 + 2, N = Math.max(Math.abs((yt ? yt.clientHeight : 0) - mt), mt) * 2 + 2;
      ot = Math.sqrt(St ** 2 + N ** 2);
    }
    (et == null ? void 0 : et.touches) ? Z.current === null && (Z.current = () => {
      X({ pulsate: ft, rippleX: x, rippleY: mt, rippleSize: ot, cb: W });
    }, V.start(HS, () => {
      Z.current && (Z.current(), Z.current = null);
    })) : X({ pulsate: ft, rippleX: x, rippleY: mt, rippleSize: ot, cb: W });
  }, [m, X, V]), ct = q.useCallback(() => {
    lt({}, { pulsate: true });
  }, [lt]), nt = q.useCallback((et, U) => {
    if (V.clear(), (et == null ? void 0 : et.type) === "touchend" && Z.current) {
      Z.current(), Z.current = null, V.start(0, () => {
        nt(et, U);
      });
      return;
    }
    Z.current = null, T((W) => W.length > 0 ? W.slice(1) : W), R.current = U;
  }, [V]);
  return q.useImperativeHandle(c, () => ({ pulsate: ct, start: lt, stop: nt }), [ct, lt, nt]), rt.jsx(GS, { className: Xe(Kn.root, g.root, y), ref: z, ...S, children: rt.jsx(xd, { component: null, exit: true, children: w }) });
});
function $S(o2) {
  return Yr("MuiButtonBase", o2);
}
const XS = lr("MuiButtonBase", ["root", "disabled", "focusVisible"]), KS = (o2) => {
  const { disabled: s, focusVisible: c, focusVisibleClassName: f, classes: m } = o2, y = Io({ root: ["root", s && "disabled", c && "focusVisible"] }, $S, m);
  return c && f && (y.root += ` ${f}`), y;
}, QS = Jn("button", { name: "MuiButtonBase", slot: "Root" })({ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", boxSizing: "border-box", WebkitTapHighlightColor: "transparent", backgroundColor: "transparent", outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: "pointer", userSelect: "none", verticalAlign: "middle", MozAppearance: "none", WebkitAppearance: "none", textDecoration: "none", color: "inherit", "&::-moz-focus-inner": { borderStyle: "none" }, [`&.${XS.disabled}`]: { pointerEvents: "none", cursor: "default" }, "@media print": { colorAdjust: "exact" } }), IS = q.forwardRef(function(s, c) {
  const f = ur({ props: s, name: "MuiButtonBase" }), { action: m, centerRipple: g = false, children: y, className: S, component: w = "button", disabled: T = false, disableRipple: A = false, disableTouchRipple: R = false, focusRipple: k = false, focusVisibleClassName: V, LinkComponent: Z = "a", onBlur: z, onClick: X, onContextMenu: lt, onDragLeave: ct, onFocus: nt, onFocusVisible: et, onKeyDown: U, onKeyUp: W, onMouseDown: ft, onMouseLeave: _t, onMouseUp: pt, onTouchEnd: yt, onTouchMove: ht, onTouchStart: x, tabIndex: mt = 0, TouchRippleProps: ot, touchRippleRef: St, type: N, ...st } = f, F = q.useRef(null), Et = kS(), C = c_(Et.ref, St), [$, it] = q.useState(false);
  T && $ && it(false), q.useImperativeHandle(m, () => ({ focusVisible: () => {
    it(true), F.current.focus();
  } }), []);
  const at = Et.shouldMount && !A && !T;
  q.useEffect(() => {
    $ && k && !A && Et.pulsate();
  }, [A, k, $, Et]);
  const dt = la(Et, "start", ft, R), vt = la(Et, "stop", lt, R), ut = la(Et, "stop", ct, R), Yt = la(Et, "stop", pt, R), kt = la(Et, "stop", (At) => {
    $ && At.preventDefault(), _t && _t(At);
  }, R), Ke = la(Et, "start", x, R), Fn = la(Et, "stop", yt, R), Dn = la(Et, "stop", ht, R), un = la(Et, "stop", (At) => {
    nc(At.target) || it(false), z && z(At);
  }, false), Nn = Wu((At) => {
    F.current || (F.current = At.currentTarget), nc(At.target) && (it(true), et && et(At)), nt && nt(At);
  }), kn = () => {
    const At = F.current;
    return w && w !== "button" && !(At.tagName === "A" && At.href);
  }, Ri = Wu((At) => {
    k && !At.repeat && $ && At.key === " " && Et.stop(At, () => {
      Et.start(At);
    }), At.target === At.currentTarget && kn() && At.key === " " && At.preventDefault(), U && U(At), At.target === At.currentTarget && kn() && At.key === "Enter" && !T && (At.preventDefault(), X && X(At));
  }), ca = Wu((At) => {
    k && At.key === " " && $ && !At.defaultPrevented && Et.stop(At, () => {
      Et.pulsate(At);
    }), W && W(At), X && At.target === At.currentTarget && kn() && At.key === " " && !At.defaultPrevented && X(At);
  });
  let _e = w;
  _e === "button" && (st.href || st.to) && (_e = Z);
  const Qe = {};
  _e === "button" ? (Qe.type = N === void 0 ? "button" : N, Qe.disabled = T) : (!st.href && !st.to && (Qe.role = "button"), T && (Qe["aria-disabled"] = T));
  const Be = c_(c, F), yn = { ...f, centerRipple: g, component: w, disabled: T, disableRipple: A, disableTouchRipple: R, focusRipple: k, tabIndex: mt, focusVisible: $ }, cn = KS(yn);
  return rt.jsxs(QS, { as: _e, className: Xe(cn.root, S), ownerState: yn, onBlur: un, onClick: X, onContextMenu: vt, onFocus: Nn, onKeyDown: Ri, onKeyUp: ca, onMouseDown: dt, onMouseLeave: kt, onMouseUp: Yt, onDragLeave: ut, onTouchEnd: Fn, onTouchMove: Dn, onTouchStart: Ke, ref: Be, tabIndex: T ? -1 : mt, type: N, ...Qe, ...st, children: [y, at ? rt.jsx(VS, { ref: C, center: g, ...ot }) : null] });
});
function la(o2, s, c, f = false) {
  return Wu((m) => (c && c(m), f || o2[s](m), true));
}
function WS(o2) {
  return typeof o2.main == "string";
}
function JS(o2, s = []) {
  if (!WS(o2)) return false;
  for (const c of s) if (!o2.hasOwnProperty(c) || typeof o2[c] != "string") return false;
  return true;
}
function hl(o2 = []) {
  return ([, s]) => s && JS(s, o2);
}
function FS(o2) {
  return Yr("MuiCircularProgress", o2);
}
lr("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const ui = 44, Xh = gl`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Kh = gl`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, tx = typeof Xh != "string" ? rd`
        animation: ${Xh} 1.4s linear infinite;
      ` : null, ex = typeof Kh != "string" ? rd`
        animation: ${Kh} 1.4s ease-in-out infinite;
      ` : null, nx = (o2) => {
  const { classes: s, variant: c, color: f, disableShrink: m } = o2, g = { root: ["root", c, `color${Ce(f)}`], svg: ["svg"], track: ["track"], circle: ["circle", `circle${Ce(c)}`, m && "circleDisableShrink"] };
  return Io(g, FS, s);
}, ix = Jn("span", { name: "MuiCircularProgress", slot: "Root", overridesResolver: (o2, s) => {
  const { ownerState: c } = o2;
  return [s.root, s[c.variant], s[`color${Ce(c.color)}`]];
} })(sr(({ theme: o2 }) => ({ display: "inline-block", variants: [{ props: { variant: "determinate" }, style: { transition: o2.transitions.create("transform") } }, { props: { variant: "indeterminate" }, style: tx || { animation: `${Xh} 1.4s linear infinite` } }, ...Object.entries(o2.palette).filter(hl()).map(([s]) => ({ props: { color: s }, style: { color: (o2.vars || o2).palette[s].main } }))] }))), ax = Jn("svg", { name: "MuiCircularProgress", slot: "Svg" })({ display: "block" }), rx = Jn("circle", { name: "MuiCircularProgress", slot: "Circle", overridesResolver: (o2, s) => {
  const { ownerState: c } = o2;
  return [s.circle, s[`circle${Ce(c.variant)}`], c.disableShrink && s.circleDisableShrink];
} })(sr(({ theme: o2 }) => ({ stroke: "currentColor", variants: [{ props: { variant: "determinate" }, style: { transition: o2.transitions.create("stroke-dashoffset") } }, { props: { variant: "indeterminate" }, style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 } }, { props: ({ ownerState: s }) => s.variant === "indeterminate" && !s.disableShrink, style: ex || { animation: `${Kh} 1.4s ease-in-out infinite` } }] }))), ox = Jn("circle", { name: "MuiCircularProgress", slot: "Track" })(sr(({ theme: o2 }) => ({ stroke: "currentColor", opacity: (o2.vars || o2).palette.action.activatedOpacity }))), sx = q.forwardRef(function(s, c) {
  const f = ur({ props: s, name: "MuiCircularProgress" }), { className: m, color: g = "primary", disableShrink: y = false, enableTrackSlot: S = false, size: w = 40, style: T, thickness: A = 3.6, value: R = 0, variant: k = "indeterminate", ...V } = f, Z = { ...f, color: g, disableShrink: y, size: w, thickness: A, value: R, variant: k, enableTrackSlot: S }, z = nx(Z), X = {}, lt = {}, ct = {};
  if (k === "determinate") {
    const nt = 2 * Math.PI * ((ui - A) / 2);
    X.strokeDasharray = nt.toFixed(3), ct["aria-valuenow"] = Math.round(R), X.strokeDashoffset = `${((100 - R) / 100 * nt).toFixed(3)}px`, lt.transform = "rotate(-90deg)";
  }
  return rt.jsx(ix, { className: Xe(z.root, m), style: { width: w, height: w, ...lt, ...T }, ownerState: Z, ref: c, role: "progressbar", ...ct, ...V, children: rt.jsxs(ax, { className: z.svg, ownerState: Z, viewBox: `${ui / 2} ${ui / 2} ${ui} ${ui}`, children: [S ? rt.jsx(ox, { className: z.track, ownerState: Z, cx: ui, cy: ui, r: (ui - A) / 2, fill: "none", strokeWidth: A, "aria-hidden": "true" }) : null, rt.jsx(rx, { className: z.circle, style: X, ownerState: Z, cx: ui, cy: ui, r: (ui - A) / 2, fill: "none", strokeWidth: A })] }) });
});
function lx(o2) {
  return Yr("MuiIconButton", o2);
}
const d_ = lr("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), ux = (o2) => {
  const { classes: s, disabled: c, color: f, edge: m, size: g, loading: y } = o2, S = { root: ["root", y && "loading", c && "disabled", f !== "default" && `color${Ce(f)}`, m && `edge${Ce(m)}`, `size${Ce(g)}`], loadingIndicator: ["loadingIndicator"], loadingWrapper: ["loadingWrapper"] };
  return Io(S, lx, s);
}, cx = Jn(IS, { name: "MuiIconButton", slot: "Root", overridesResolver: (o2, s) => {
  const { ownerState: c } = o2;
  return [s.root, c.loading && s.loading, c.color !== "default" && s[`color${Ce(c.color)}`], c.edge && s[`edge${Ce(c.edge)}`], s[`size${Ce(c.size)}`]];
} })(sr(({ theme: o2 }) => ({ textAlign: "center", flex: "0 0 auto", fontSize: o2.typography.pxToRem(24), padding: 8, borderRadius: "50%", color: (o2.vars || o2).palette.action.active, transition: o2.transitions.create("background-color", { duration: o2.transitions.duration.shortest }), variants: [{ props: (s) => !s.disableRipple, style: { "--IconButton-hoverBg": o2.alpha((o2.vars || o2).palette.action.active, (o2.vars || o2).palette.action.hoverOpacity), "&:hover": { backgroundColor: "var(--IconButton-hoverBg)", "@media (hover: none)": { backgroundColor: "transparent" } } } }, { props: { edge: "start" }, style: { marginLeft: -12 } }, { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } }, { props: { edge: "end" }, style: { marginRight: -12 } }, { props: { edge: "end", size: "small" }, style: { marginRight: -3 } }] })), sr(({ theme: o2 }) => ({ variants: [{ props: { color: "inherit" }, style: { color: "inherit" } }, ...Object.entries(o2.palette).filter(hl()).map(([s]) => ({ props: { color: s }, style: { color: (o2.vars || o2).palette[s].main } })), ...Object.entries(o2.palette).filter(hl()).map(([s]) => ({ props: { color: s }, style: { "--IconButton-hoverBg": o2.alpha((o2.vars || o2).palette[s].main, (o2.vars || o2).palette.action.hoverOpacity) } })), { props: { size: "small" }, style: { padding: 5, fontSize: o2.typography.pxToRem(18) } }, { props: { size: "large" }, style: { padding: 12, fontSize: o2.typography.pxToRem(28) } }], [`&.${d_.disabled}`]: { backgroundColor: "transparent", color: (o2.vars || o2).palette.action.disabled }, [`&.${d_.loading}`]: { color: "transparent" } }))), fx = Jn("span", { name: "MuiIconButton", slot: "LoadingIndicator" })(({ theme: o2 }) => ({ display: "none", position: "absolute", visibility: "visible", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: (o2.vars || o2).palette.action.disabled, variants: [{ props: { loading: true }, style: { display: "flex" } }] })), wd = q.forwardRef(function(s, c) {
  const f = ur({ props: s, name: "MuiIconButton" }), { edge: m = false, children: g, className: y, color: S = "default", disabled: w = false, disableFocusRipple: T = false, size: A = "medium", id: R, loading: k = null, loadingIndicator: V, ...Z } = f, z = W_(R), X = V ?? rt.jsx(sx, { "aria-labelledby": z, color: "inherit", size: 16 }), lt = { ...f, edge: m, color: S, disabled: w, disableFocusRipple: T, loading: k, loadingIndicator: X, size: A }, ct = ux(lt);
  return rt.jsxs(cx, { id: k ? z : R, className: Xe(ct.root, y), centerRipple: true, focusRipple: !T, disabled: w || k, ref: c, ...Z, ownerState: lt, children: [typeof k == "boolean" && rt.jsx("span", { className: ct.loadingWrapper, style: { display: "contents" }, children: rt.jsx(fx, { className: ct.loadingIndicator, ownerState: lt, children: k && X }) }), g] });
});
function hx(o2) {
  return Yr("MuiTypography", o2);
}
lr("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const dx = { primary: true, secondary: true, error: true, info: true, success: true, warning: true, textPrimary: true, textSecondary: true, textDisabled: true }, mx = bS(), px = (o2) => {
  const { align: s, gutterBottom: c, noWrap: f, paragraph: m, variant: g, classes: y } = o2, S = { root: ["root", g, o2.align !== "inherit" && `align${Ce(s)}`, c && "gutterBottom", f && "noWrap", m && "paragraph"] };
  return Io(S, hx, y);
}, gx = Jn("span", { name: "MuiTypography", slot: "Root", overridesResolver: (o2, s) => {
  const { ownerState: c } = o2;
  return [s.root, c.variant && s[c.variant], c.align !== "inherit" && s[`align${Ce(c.align)}`], c.noWrap && s.noWrap, c.gutterBottom && s.gutterBottom, c.paragraph && s.paragraph];
} })(sr(({ theme: o2 }) => {
  var _a;
  return { margin: 0, variants: [{ props: { variant: "inherit" }, style: { font: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } }, ...Object.entries(o2.typography).filter(([s, c]) => s !== "inherit" && c && typeof c == "object").map(([s, c]) => ({ props: { variant: s }, style: c })), ...Object.entries(o2.palette).filter(hl()).map(([s]) => ({ props: { color: s }, style: { color: (o2.vars || o2).palette[s].main } })), ...Object.entries(((_a = o2.palette) == null ? void 0 : _a.text) || {}).filter(([, s]) => typeof s == "string").map(([s]) => ({ props: { color: `text${Ce(s)}` }, style: { color: (o2.vars || o2).palette.text[s] } })), { props: ({ ownerState: s }) => s.align !== "inherit", style: { textAlign: "var(--Typography-textAlign)" } }, { props: ({ ownerState: s }) => s.noWrap, style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, { props: ({ ownerState: s }) => s.gutterBottom, style: { marginBottom: "0.35em" } }, { props: ({ ownerState: s }) => s.paragraph, style: { marginBottom: 16 } }] };
})), m_ = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6", subtitle1: "h6", subtitle2: "h6", body1: "p", body2: "p", inherit: "p" }, ac = q.forwardRef(function(s, c) {
  const { color: f, ...m } = ur({ props: s, name: "MuiTypography" }), g = !dx[f], y = mx({ ...m, ...g && { color: f } }), { align: S = "inherit", className: w, component: T, gutterBottom: A = false, noWrap: R = false, paragraph: k = false, variant: V = "body1", variantMapping: Z = m_, ...z } = y, X = { ...y, align: S, color: f, className: w, component: T, gutterBottom: A, noWrap: R, paragraph: k, variant: V, variantMapping: Z }, lt = T || (k ? "p" : Z[V] || m_[V]) || "span", ct = px(X);
  return rt.jsx(gx, { as: lt, ref: c, className: Xe(ct.root, w), ...z, ownerState: X, style: { ...S !== "inherit" && { "--Typography-textAlign": S }, ...z.style } });
}), _x = lr("MuiBox", ["root"]), yx = gc(), Ko = Z1({ themeId: Li, defaultTheme: yx, defaultClassName: _x.root, generateClassName: Y_.generate }), Qh = typeof sy({}) == "function", vx = (o2, s) => ({ WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", boxSizing: "border-box", WebkitTextSizeAdjust: "100%", ...s && !o2.vars && { colorScheme: o2.palette.mode } }), bx = (o2) => ({ color: (o2.vars || o2).palette.text.primary, ...o2.typography.body1, backgroundColor: (o2.vars || o2).palette.background.default, "@media print": { backgroundColor: (o2.vars || o2).palette.common.white } }), uy = (o2, s = false) => {
  var _a, _b2;
  const c = {};
  s && o2.colorSchemes && typeof o2.getColorSchemeSelector == "function" && Object.entries(o2.colorSchemes).forEach(([g, y]) => {
    var _a2, _b3;
    const S = o2.getColorSchemeSelector(g);
    S.startsWith("@") ? c[S] = { ":root": { colorScheme: (_a2 = y.palette) == null ? void 0 : _a2.mode } } : c[S.replace(/\s*&/, "")] = { colorScheme: (_b3 = y.palette) == null ? void 0 : _b3.mode };
  });
  let f = { html: vx(o2, s), "*, *::before, *::after": { boxSizing: "inherit" }, "strong, b": { fontWeight: o2.typography.fontWeightBold }, body: { margin: 0, ...bx(o2), "&::backdrop": { backgroundColor: (o2.vars || o2).palette.background.default } }, ...c };
  const m = (_b2 = (_a = o2.components) == null ? void 0 : _a.MuiCssBaseline) == null ? void 0 : _b2.styleOverrides;
  return m && (f = [f, m]), f;
}, Ju = "mui-ecs", Sx = (o2) => {
  const s = uy(o2, false), c = Array.isArray(s) ? s[0] : s;
  return !o2.vars && c && (c.html[`:root:has(${Ju})`] = { colorScheme: o2.palette.mode }), o2.colorSchemes && Object.entries(o2.colorSchemes).forEach(([f, m]) => {
    var _a, _b2;
    const g = o2.getColorSchemeSelector(f);
    g.startsWith("@") ? c[g] = { [`:root:not(:has(.${Ju}))`]: { colorScheme: (_a = m.palette) == null ? void 0 : _a.mode } } : c[g.replace(/\s*&/, "")] = { [`&:not(:has(.${Ju}))`]: { colorScheme: (_b2 = m.palette) == null ? void 0 : _b2.mode } };
  }), s;
}, xx = sy(Qh ? ({ theme: o2, enableColorScheme: s }) => uy(o2, s) : ({ theme: o2 }) => Sx(o2));
function Tx(o2) {
  const s = ur({ props: o2, name: "MuiCssBaseline" }), { children: c, enableColorScheme: f = false } = s;
  return rt.jsxs(q.Fragment, { children: [Qh && rt.jsx(xx, { enableColorScheme: f }), !Qh && !f && rt.jsx("span", { className: Ju, style: { display: "none" } }), c] });
}
function wx(o2) {
  return Yr("MuiLink", o2);
}
const Cx = lr("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]), Ex = ({ theme: o2, ownerState: s }) => {
  const c = s.color;
  if ("colorSpace" in o2 && o2.colorSpace) {
    const g = Ai(o2, `palette.${c}.main`) || Ai(o2, `palette.${c}`) || s.color;
    return o2.alpha(g, 0.4);
  }
  const f = Ai(o2, `palette.${c}.main`, false) || Ai(o2, `palette.${c}`, false) || s.color, m = Ai(o2, `palette.${c}.mainChannel`) || Ai(o2, `palette.${c}Channel`);
  return "vars" in o2 && m ? `rgba(${m} / 0.4)` : pd(f, 0.4);
}, p_ = { primary: true, secondary: true, error: true, info: true, success: true, warning: true, textPrimary: true, textSecondary: true, textDisabled: true }, Mx = (o2) => {
  const { classes: s, component: c, focusVisible: f, underline: m } = o2, g = { root: ["root", `underline${Ce(m)}`, c === "button" && "button", f && "focusVisible"] };
  return Io(g, wx, s);
}, Ax = Jn(ac, { name: "MuiLink", slot: "Root", overridesResolver: (o2, s) => {
  const { ownerState: c } = o2;
  return [s.root, s[`underline${Ce(c.underline)}`], c.component === "button" && s.button];
} })(sr(({ theme: o2 }) => ({ variants: [{ props: { underline: "none" }, style: { textDecoration: "none" } }, { props: { underline: "hover" }, style: { textDecoration: "none", "&:hover": { textDecoration: "underline" } } }, { props: { underline: "always" }, style: { textDecoration: "underline", "&:hover": { textDecorationColor: "inherit" } } }, { props: ({ underline: s, ownerState: c }) => s === "always" && c.color !== "inherit", style: { textDecorationColor: "var(--Link-underlineColor)" } }, { props: ({ underline: s, ownerState: c }) => s === "always" && c.color === "inherit", style: o2.colorSpace ? { textDecorationColor: o2.alpha("currentColor", 0.4) } : null }, ...Object.entries(o2.palette).filter(hl()).map(([s]) => ({ props: { underline: "always", color: s }, style: { "--Link-underlineColor": o2.alpha((o2.vars || o2).palette[s].main, 0.4) } })), { props: { underline: "always", color: "textPrimary" }, style: { "--Link-underlineColor": o2.alpha((o2.vars || o2).palette.text.primary, 0.4) } }, { props: { underline: "always", color: "textSecondary" }, style: { "--Link-underlineColor": o2.alpha((o2.vars || o2).palette.text.secondary, 0.4) } }, { props: { underline: "always", color: "textDisabled" }, style: { "--Link-underlineColor": (o2.vars || o2).palette.text.disabled } }, { props: { component: "button" }, style: { position: "relative", WebkitTapHighlightColor: "transparent", backgroundColor: "transparent", outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: "pointer", userSelect: "none", verticalAlign: "middle", MozAppearance: "none", WebkitAppearance: "none", "&::-moz-focus-inner": { borderStyle: "none" }, [`&.${Cx.focusVisible}`]: { outline: "auto" } } }] }))), Ox = q.forwardRef(function(s, c) {
  const f = ur({ props: s, name: "MuiLink" }), m = _c(), { className: g, color: y = "primary", component: S = "a", onBlur: w, onFocus: T, TypographyClasses: A, underline: R = "always", variant: k = "inherit", sx: V, ...Z } = f, [z, X] = q.useState(false), lt = (U) => {
    nc(U.target) || X(false), w && w(U);
  }, ct = (U) => {
    nc(U.target) && X(true), T && T(U);
  }, nt = { ...f, color: y, component: S, focusVisible: z, underline: R, variant: k }, et = Mx(nt);
  return rt.jsx(Ax, { color: y, className: Xe(et.root, g), classes: A, component: S, onBlur: lt, onFocus: ct, ref: c, ownerState: nt, variant: k, ...Z, sx: [...p_[y] === void 0 ? [{ color: y }] : [], ...Array.isArray(V) ? V : [V]], style: { ...Z.style, ...R === "always" && y !== "inherit" && !p_[y] && { "--Link-underlineColor": Ex({ theme: m, ownerState: nt }) } } });
}), Lx = "https://peba-app-95m3h.ondigitalocean.app", g_ = Lx, zx = { "Content-Type": "application/json" };
async function __(o2, { method: s = "GET", headers: c = {}, body: f, signal: m } = {}) {
  console.log("inside api", g_, o2);
  const g = await fetch(`${g_}${o2}`, { method: s, headers: { ...zx, ...c }, body: f ? JSON.stringify(f) : void 0, signal: m, credentials: "omit" });
  if (!g.ok) {
    const S = await g.text().catch(() => g.statusText);
    throw new Error(`HTTP ${g.status}: ${S}`);
  }
  const y = await g.text();
  try {
    return JSON.parse(y);
  } catch {
    return y;
  }
}
const Cd = { get: (o2, s) => __(o2, { ...s, method: "GET" }), post: (o2, s, c) => __(o2, { ...c, method: "POST", body: s }) };
function Rx({ origin: o2, destination: s }) {
  return Cd.post("/route", { origin: o2, destination: s });
}
function Bx({}) {
  return Cd.get("/bbox", {});
}
function Dx() {
  return Cd.get("/network", {});
}
const Nx = vc(rt.jsx("path", { d: "M19 12h3L12 3 2 12h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2zM7 15v-4.81l4-3.6V15zm6 0V6.59l4 3.6V15z" })), kx = vc(rt.jsx("path", { d: "M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15M14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2" })), Px = vc(rt.jsx("path", { d: "M20.5 4c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 6c1.86.5 4 .83 6 1v12h2v-6h2v6h2V7c2-.17 4.14-.5 6-1zM12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2M7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2z" }));
function Zx() {
  const o2 = _c(), s = [{ icon: Nx, action: () => console.log("Logo clicked") }, { icon: kx, action: () => console.log("Help clicked") }, { icon: Px, action: () => console.log("Profile clicked") }];
  return rt.jsx(Ko, { sx: { width: "100%", height: `${o2.grid.units.h}px`, marginY: o2.grid.spacing, borderRadius: o2.brdRad, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }, children: s.map((c, f) => rt.jsxs(q.Fragment, { children: [rt.jsx(wd, { onClick: c.action, sx: { width: `${o2.iconH}`, height: `${o2.iconH}`, marginLeft: f === 0 ? 0 : o2.grid.spacing }, children: rt.jsx(c.icon, { sx: { width: "60%", height: "60%", color: o2.palette.primary.secondary } }) }), f == 0 ? rt.jsx(Ko, { sx: { flexGrow: 1 } }) : null] }, f)) });
}
function Ih({ focus: o2 = false, outlined: s = true, ...c }) {
  const f = _c(), m = f.noBlurShadows;
  return rt.jsx(Ko, { ...c, on: true, sx: { width: "100%", borderRadius: f.brdRad, border: s ? `solid 2px ${f.palette.primary.main}` : "none", boxShadow: o2 ? m.active : m.none, transition: m.transition, color: f.palette.primary.main, ...c.sx } });
}
function y_({ theme: o2, label: s = "Da", placeholder: c = "Seleziona una Destinazione" }) {
  return rt.jsxs(Ih, { outlined: false, sx: { height: `${o2.grid.units.h}px`, marginY: o2.grid.spacing, display: "flex", flexDirection: "row", alignItems: "center" }, children: [rt.jsx(wd, { disabled: true, children: rt.jsx(ac, { children: s }) }), rt.jsx(Ih, { sx: { height: "100%", marginLeft: o2.grid.spacing, borderRadius: o2.brdRad, flexGrow: 1, backgroundColor: o2.palette.primary.secondary, display: "flex", alignItems: "center", paddingLeft: o2.offRad }, focus: true, children: rt.jsx(ac, { children: c }) })] });
}
const Hx = vc(rt.jsx("path", { d: "M21.95 10.99c-1.79-.03-3.7-1.95-2.68-4.22-2.98 1-5.77-1.59-5.19-4.56C6.95.71 2 6.58 2 12c0 5.52 4.48 10 10 10 5.89 0 10.54-5.08 9.95-11.01M8.5 15c-.83 0-1.5-.67-1.5-1.5S7.67 12 8.5 12s1.5.67 1.5 1.5S9.33 15 8.5 15m2-5C9.67 10 9 9.33 9 8.5S9.67 7 10.5 7s1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" }));
function Ux() {
  const o2 = _c();
  return rt.jsxs(Ko, { sx: { width: "100%", height: `${o2.grid.units.h}px`, marginY: o2.grid.spacing, borderRadius: o2.brdRad, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, children: [rt.jsxs(Ko, { sx: { display: "flex", flexDirection: "column", height: "100%", justifyContent: "flex-end", alignItems: "flex-start", fontSize: "0.8rem" }, children: [rt.jsx(Ox, { sx: { fontWeight: "bold" }, children: "Contattaci" }), rt.jsx(ac, { sx: { fontSize: "0.8rem" }, children: "Systematica - Transform Transport" })] }), rt.jsx(wd, { sx: { width: `${o2.iconH}`, height: `${o2.iconH}` }, children: rt.jsx(Hx, { sx: { width: "60%", height: "60%", color: o2.palette.primary.secondary } }) })] });
}
function jx(o2, s) {
  const c = q.useRef(s);
  q.useEffect(function() {
    s !== c.current && o2.attributionControl != null && (c.current != null && o2.attributionControl.removeAttribution(c.current), s != null && o2.attributionControl.addAttribution(s)), c.current = s;
  }, [o2, s]);
}
function qx(o2, s, c) {
  s.center !== c.center && o2.setLatLng(s.center), s.radius != null && s.radius !== c.radius && o2.setRadius(s.radius);
}
const Gx = 1;
function Yx(o2) {
  return Object.freeze({ __version: Gx, map: o2 });
}
function Ed(o2, s) {
  return Object.freeze({ ...o2, ...s });
}
const bc = q.createContext(null);
function Sc() {
  const o2 = q.use(bc);
  if (o2 == null) throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");
  return o2;
}
function Vx(o2) {
  function s(c, f) {
    const { instance: m, context: g } = o2(c).current;
    q.useImperativeHandle(f, () => m);
    const { children: y } = c;
    return y == null ? null : In.createElement(bc, { value: g }, y);
  }
  return q.forwardRef(s);
}
function $x(o2) {
  function s(c, f) {
    const { instance: m } = o2(c).current;
    return q.useImperativeHandle(f, () => m), null;
  }
  return q.forwardRef(s);
}
function cy(o2, s) {
  const c = q.useRef(void 0);
  q.useEffect(function() {
    return s != null && o2.instance.on(s), c.current = s, function() {
      c.current != null && o2.instance.off(c.current), c.current = null;
    };
  }, [o2, s]);
}
function Md(o2, s) {
  const c = o2.pane ?? s.pane;
  return c ? { ...o2, pane: c } : o2;
}
var ol = { exports: {} };
/* @preserve
* Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
* (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
*/
var Xx = ol.exports, v_;
function Kx() {
  return v_ || (v_ = 1, function(o2, s) {
    (function(c, f) {
      f(s);
    })(Xx, function(c) {
      var f = "1.9.4";
      function m(n) {
        var a, l, d, p;
        for (l = 1, d = arguments.length; l < d; l++) {
          p = arguments[l];
          for (a in p) n[a] = p[a];
        }
        return n;
      }
      var g = Object.create || /* @__PURE__ */ function() {
        function n() {
        }
        return function(a) {
          return n.prototype = a, new n();
        };
      }();
      function y(n, a) {
        var l = Array.prototype.slice;
        if (n.bind) return n.bind.apply(n, l.call(arguments, 1));
        var d = l.call(arguments, 2);
        return function() {
          return n.apply(a, d.length ? d.concat(l.call(arguments)) : arguments);
        };
      }
      var S = 0;
      function w(n) {
        return "_leaflet_id" in n || (n._leaflet_id = ++S), n._leaflet_id;
      }
      function T(n, a, l) {
        var d, p, v, E;
        return E = function() {
          d = false, p && (v.apply(l, p), p = false);
        }, v = function() {
          d ? p = arguments : (n.apply(l, arguments), setTimeout(E, a), d = true);
        }, v;
      }
      function A(n, a, l) {
        var d = a[1], p = a[0], v = d - p;
        return n === d && l ? n : ((n - p) % v + v) % v + p;
      }
      function R() {
        return false;
      }
      function k(n, a) {
        if (a === false) return n;
        var l = Math.pow(10, a === void 0 ? 6 : a);
        return Math.round(n * l) / l;
      }
      function V(n) {
        return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "");
      }
      function Z(n) {
        return V(n).split(/\s+/);
      }
      function z(n, a) {
        Object.prototype.hasOwnProperty.call(n, "options") || (n.options = n.options ? g(n.options) : {});
        for (var l in a) n.options[l] = a[l];
        return n.options;
      }
      function X(n, a, l) {
        var d = [];
        for (var p in n) d.push(encodeURIComponent(l ? p.toUpperCase() : p) + "=" + encodeURIComponent(n[p]));
        return (!a || a.indexOf("?") === -1 ? "?" : "&") + d.join("&");
      }
      var lt = /\{ *([\w_ -]+) *\}/g;
      function ct(n, a) {
        return n.replace(lt, function(l, d) {
          var p = a[d];
          if (p === void 0) throw new Error("No value provided for variable " + l);
          return typeof p == "function" && (p = p(a)), p;
        });
      }
      var nt = Array.isArray || function(n) {
        return Object.prototype.toString.call(n) === "[object Array]";
      };
      function et(n, a) {
        for (var l = 0; l < n.length; l++) if (n[l] === a) return l;
        return -1;
      }
      var U = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function W(n) {
        return window["webkit" + n] || window["moz" + n] || window["ms" + n];
      }
      var ft = 0;
      function _t(n) {
        var a = +/* @__PURE__ */ new Date(), l = Math.max(0, 16 - (a - ft));
        return ft = a + l, window.setTimeout(n, l);
      }
      var pt = window.requestAnimationFrame || W("RequestAnimationFrame") || _t, yt = window.cancelAnimationFrame || W("CancelAnimationFrame") || W("CancelRequestAnimationFrame") || function(n) {
        window.clearTimeout(n);
      };
      function ht(n, a, l) {
        if (l && pt === _t) n.call(a);
        else return pt.call(window, y(n, a));
      }
      function x(n) {
        n && yt.call(window, n);
      }
      var mt = { __proto__: null, extend: m, create: g, bind: y, get lastId() {
        return S;
      }, stamp: w, throttle: T, wrapNum: A, falseFn: R, formatNum: k, trim: V, splitWords: Z, setOptions: z, getParamString: X, template: ct, isArray: nt, indexOf: et, emptyImageUrl: U, requestFn: pt, cancelFn: yt, requestAnimFrame: ht, cancelAnimFrame: x };
      function ot() {
      }
      ot.extend = function(n) {
        var a = function() {
          z(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, l = a.__super__ = this.prototype, d = g(l);
        d.constructor = a, a.prototype = d;
        for (var p in this) Object.prototype.hasOwnProperty.call(this, p) && p !== "prototype" && p !== "__super__" && (a[p] = this[p]);
        return n.statics && m(a, n.statics), n.includes && (St(n.includes), m.apply(null, [d].concat(n.includes))), m(d, n), delete d.statics, delete d.includes, d.options && (d.options = l.options ? g(l.options) : {}, m(d.options, n.options)), d._initHooks = [], d.callInitHooks = function() {
          if (!this._initHooksCalled) {
            l.callInitHooks && l.callInitHooks.call(this), this._initHooksCalled = true;
            for (var v = 0, E = d._initHooks.length; v < E; v++) d._initHooks[v].call(this);
          }
        }, a;
      }, ot.include = function(n) {
        var a = this.prototype.options;
        return m(this.prototype, n), n.options && (this.prototype.options = a, this.mergeOptions(n.options)), this;
      }, ot.mergeOptions = function(n) {
        return m(this.prototype.options, n), this;
      }, ot.addInitHook = function(n) {
        var a = Array.prototype.slice.call(arguments, 1), l = typeof n == "function" ? n : function() {
          this[n].apply(this, a);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(l), this;
      };
      function St(n) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          n = nt(n) ? n : [n];
          for (var a = 0; a < n.length; a++) n[a] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var N = { on: function(n, a, l) {
        if (typeof n == "object") for (var d in n) this._on(d, n[d], a);
        else {
          n = Z(n);
          for (var p = 0, v = n.length; p < v; p++) this._on(n[p], a, l);
        }
        return this;
      }, off: function(n, a, l) {
        if (!arguments.length) delete this._events;
        else if (typeof n == "object") for (var d in n) this._off(d, n[d], a);
        else {
          n = Z(n);
          for (var p = arguments.length === 1, v = 0, E = n.length; v < E; v++) p ? this._off(n[v]) : this._off(n[v], a, l);
        }
        return this;
      }, _on: function(n, a, l, d) {
        if (typeof a != "function") {
          console.warn("wrong listener type: " + typeof a);
          return;
        }
        if (this._listens(n, a, l) === false) {
          l === this && (l = void 0);
          var p = { fn: a, ctx: l };
          d && (p.once = true), this._events = this._events || {}, this._events[n] = this._events[n] || [], this._events[n].push(p);
        }
      }, _off: function(n, a, l) {
        var d, p, v;
        if (this._events && (d = this._events[n], !!d)) {
          if (arguments.length === 1) {
            if (this._firingCount) for (p = 0, v = d.length; p < v; p++) d[p].fn = R;
            delete this._events[n];
            return;
          }
          if (typeof a != "function") {
            console.warn("wrong listener type: " + typeof a);
            return;
          }
          var E = this._listens(n, a, l);
          if (E !== false) {
            var D = d[E];
            this._firingCount && (D.fn = R, this._events[n] = d = d.slice()), d.splice(E, 1);
          }
        }
      }, fire: function(n, a, l) {
        if (!this.listens(n, l)) return this;
        var d = m({}, a, { type: n, target: this, sourceTarget: a && a.sourceTarget || this });
        if (this._events) {
          var p = this._events[n];
          if (p) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var v = 0, E = p.length; v < E; v++) {
              var D = p[v], Y = D.fn;
              D.once && this.off(n, Y, D.ctx), Y.call(D.ctx || this, d);
            }
            this._firingCount--;
          }
        }
        return l && this._propagateEvent(d), this;
      }, listens: function(n, a, l, d) {
        typeof n != "string" && console.warn('"string" type argument expected');
        var p = a;
        typeof a != "function" && (d = !!a, p = void 0, l = void 0);
        var v = this._events && this._events[n];
        if (v && v.length && this._listens(n, p, l) !== false) return true;
        if (d) {
          for (var E in this._eventParents) if (this._eventParents[E].listens(n, a, l, d)) return true;
        }
        return false;
      }, _listens: function(n, a, l) {
        if (!this._events) return false;
        var d = this._events[n] || [];
        if (!a) return !!d.length;
        l === this && (l = void 0);
        for (var p = 0, v = d.length; p < v; p++) if (d[p].fn === a && d[p].ctx === l) return p;
        return false;
      }, once: function(n, a, l) {
        if (typeof n == "object") for (var d in n) this._on(d, n[d], a, true);
        else {
          n = Z(n);
          for (var p = 0, v = n.length; p < v; p++) this._on(n[p], a, l, true);
        }
        return this;
      }, addEventParent: function(n) {
        return this._eventParents = this._eventParents || {}, this._eventParents[w(n)] = n, this;
      }, removeEventParent: function(n) {
        return this._eventParents && delete this._eventParents[w(n)], this;
      }, _propagateEvent: function(n) {
        for (var a in this._eventParents) this._eventParents[a].fire(n.type, m({ layer: n.target, propagatedFrom: n.target }, n), true);
      } };
      N.addEventListener = N.on, N.removeEventListener = N.clearAllEventListeners = N.off, N.addOneTimeEventListener = N.once, N.fireEvent = N.fire, N.hasEventListeners = N.listens;
      var st = ot.extend(N);
      function F(n, a, l) {
        this.x = l ? Math.round(n) : n, this.y = l ? Math.round(a) : a;
      }
      var Et = Math.trunc || function(n) {
        return n > 0 ? Math.floor(n) : Math.ceil(n);
      };
      F.prototype = { clone: function() {
        return new F(this.x, this.y);
      }, add: function(n) {
        return this.clone()._add(C(n));
      }, _add: function(n) {
        return this.x += n.x, this.y += n.y, this;
      }, subtract: function(n) {
        return this.clone()._subtract(C(n));
      }, _subtract: function(n) {
        return this.x -= n.x, this.y -= n.y, this;
      }, divideBy: function(n) {
        return this.clone()._divideBy(n);
      }, _divideBy: function(n) {
        return this.x /= n, this.y /= n, this;
      }, multiplyBy: function(n) {
        return this.clone()._multiplyBy(n);
      }, _multiplyBy: function(n) {
        return this.x *= n, this.y *= n, this;
      }, scaleBy: function(n) {
        return new F(this.x * n.x, this.y * n.y);
      }, unscaleBy: function(n) {
        return new F(this.x / n.x, this.y / n.y);
      }, round: function() {
        return this.clone()._round();
      }, _round: function() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      }, floor: function() {
        return this.clone()._floor();
      }, _floor: function() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
      }, ceil: function() {
        return this.clone()._ceil();
      }, _ceil: function() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
      }, trunc: function() {
        return this.clone()._trunc();
      }, _trunc: function() {
        return this.x = Et(this.x), this.y = Et(this.y), this;
      }, distanceTo: function(n) {
        n = C(n);
        var a = n.x - this.x, l = n.y - this.y;
        return Math.sqrt(a * a + l * l);
      }, equals: function(n) {
        return n = C(n), n.x === this.x && n.y === this.y;
      }, contains: function(n) {
        return n = C(n), Math.abs(n.x) <= Math.abs(this.x) && Math.abs(n.y) <= Math.abs(this.y);
      }, toString: function() {
        return "Point(" + k(this.x) + ", " + k(this.y) + ")";
      } };
      function C(n, a, l) {
        return n instanceof F ? n : nt(n) ? new F(n[0], n[1]) : n == null ? n : typeof n == "object" && "x" in n && "y" in n ? new F(n.x, n.y) : new F(n, a, l);
      }
      function $(n, a) {
        if (n) for (var l = a ? [n, a] : n, d = 0, p = l.length; d < p; d++) this.extend(l[d]);
      }
      $.prototype = { extend: function(n) {
        var a, l;
        if (!n) return this;
        if (n instanceof F || typeof n[0] == "number" || "x" in n) a = l = C(n);
        else if (n = it(n), a = n.min, l = n.max, !a || !l) return this;
        return !this.min && !this.max ? (this.min = a.clone(), this.max = l.clone()) : (this.min.x = Math.min(a.x, this.min.x), this.max.x = Math.max(l.x, this.max.x), this.min.y = Math.min(a.y, this.min.y), this.max.y = Math.max(l.y, this.max.y)), this;
      }, getCenter: function(n) {
        return C((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, n);
      }, getBottomLeft: function() {
        return C(this.min.x, this.max.y);
      }, getTopRight: function() {
        return C(this.max.x, this.min.y);
      }, getTopLeft: function() {
        return this.min;
      }, getBottomRight: function() {
        return this.max;
      }, getSize: function() {
        return this.max.subtract(this.min);
      }, contains: function(n) {
        var a, l;
        return typeof n[0] == "number" || n instanceof F ? n = C(n) : n = it(n), n instanceof $ ? (a = n.min, l = n.max) : a = l = n, a.x >= this.min.x && l.x <= this.max.x && a.y >= this.min.y && l.y <= this.max.y;
      }, intersects: function(n) {
        n = it(n);
        var a = this.min, l = this.max, d = n.min, p = n.max, v = p.x >= a.x && d.x <= l.x, E = p.y >= a.y && d.y <= l.y;
        return v && E;
      }, overlaps: function(n) {
        n = it(n);
        var a = this.min, l = this.max, d = n.min, p = n.max, v = p.x > a.x && d.x < l.x, E = p.y > a.y && d.y < l.y;
        return v && E;
      }, isValid: function() {
        return !!(this.min && this.max);
      }, pad: function(n) {
        var a = this.min, l = this.max, d = Math.abs(a.x - l.x) * n, p = Math.abs(a.y - l.y) * n;
        return it(C(a.x - d, a.y - p), C(l.x + d, l.y + p));
      }, equals: function(n) {
        return n ? (n = it(n), this.min.equals(n.getTopLeft()) && this.max.equals(n.getBottomRight())) : false;
      } };
      function it(n, a) {
        return !n || n instanceof $ ? n : new $(n, a);
      }
      function at(n, a) {
        if (n) for (var l = a ? [n, a] : n, d = 0, p = l.length; d < p; d++) this.extend(l[d]);
      }
      at.prototype = { extend: function(n) {
        var a = this._southWest, l = this._northEast, d, p;
        if (n instanceof vt) d = n, p = n;
        else if (n instanceof at) {
          if (d = n._southWest, p = n._northEast, !d || !p) return this;
        } else return n ? this.extend(ut(n) || dt(n)) : this;
        return !a && !l ? (this._southWest = new vt(d.lat, d.lng), this._northEast = new vt(p.lat, p.lng)) : (a.lat = Math.min(d.lat, a.lat), a.lng = Math.min(d.lng, a.lng), l.lat = Math.max(p.lat, l.lat), l.lng = Math.max(p.lng, l.lng)), this;
      }, pad: function(n) {
        var a = this._southWest, l = this._northEast, d = Math.abs(a.lat - l.lat) * n, p = Math.abs(a.lng - l.lng) * n;
        return new at(new vt(a.lat - d, a.lng - p), new vt(l.lat + d, l.lng + p));
      }, getCenter: function() {
        return new vt((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
      }, getSouthWest: function() {
        return this._southWest;
      }, getNorthEast: function() {
        return this._northEast;
      }, getNorthWest: function() {
        return new vt(this.getNorth(), this.getWest());
      }, getSouthEast: function() {
        return new vt(this.getSouth(), this.getEast());
      }, getWest: function() {
        return this._southWest.lng;
      }, getSouth: function() {
        return this._southWest.lat;
      }, getEast: function() {
        return this._northEast.lng;
      }, getNorth: function() {
        return this._northEast.lat;
      }, contains: function(n) {
        typeof n[0] == "number" || n instanceof vt || "lat" in n ? n = ut(n) : n = dt(n);
        var a = this._southWest, l = this._northEast, d, p;
        return n instanceof at ? (d = n.getSouthWest(), p = n.getNorthEast()) : d = p = n, d.lat >= a.lat && p.lat <= l.lat && d.lng >= a.lng && p.lng <= l.lng;
      }, intersects: function(n) {
        n = dt(n);
        var a = this._southWest, l = this._northEast, d = n.getSouthWest(), p = n.getNorthEast(), v = p.lat >= a.lat && d.lat <= l.lat, E = p.lng >= a.lng && d.lng <= l.lng;
        return v && E;
      }, overlaps: function(n) {
        n = dt(n);
        var a = this._southWest, l = this._northEast, d = n.getSouthWest(), p = n.getNorthEast(), v = p.lat > a.lat && d.lat < l.lat, E = p.lng > a.lng && d.lng < l.lng;
        return v && E;
      }, toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      }, equals: function(n, a) {
        return n ? (n = dt(n), this._southWest.equals(n.getSouthWest(), a) && this._northEast.equals(n.getNorthEast(), a)) : false;
      }, isValid: function() {
        return !!(this._southWest && this._northEast);
      } };
      function dt(n, a) {
        return n instanceof at ? n : new at(n, a);
      }
      function vt(n, a, l) {
        if (isNaN(n) || isNaN(a)) throw new Error("Invalid LatLng object: (" + n + ", " + a + ")");
        this.lat = +n, this.lng = +a, l !== void 0 && (this.alt = +l);
      }
      vt.prototype = { equals: function(n, a) {
        if (!n) return false;
        n = ut(n);
        var l = Math.max(Math.abs(this.lat - n.lat), Math.abs(this.lng - n.lng));
        return l <= (a === void 0 ? 1e-9 : a);
      }, toString: function(n) {
        return "LatLng(" + k(this.lat, n) + ", " + k(this.lng, n) + ")";
      }, distanceTo: function(n) {
        return kt.distance(this, ut(n));
      }, wrap: function() {
        return kt.wrapLatLng(this);
      }, toBounds: function(n) {
        var a = 180 * n / 40075017, l = a / Math.cos(Math.PI / 180 * this.lat);
        return dt([this.lat - a, this.lng - l], [this.lat + a, this.lng + l]);
      }, clone: function() {
        return new vt(this.lat, this.lng, this.alt);
      } };
      function ut(n, a, l) {
        return n instanceof vt ? n : nt(n) && typeof n[0] != "object" ? n.length === 3 ? new vt(n[0], n[1], n[2]) : n.length === 2 ? new vt(n[0], n[1]) : null : n == null ? n : typeof n == "object" && "lat" in n ? new vt(n.lat, "lng" in n ? n.lng : n.lon, n.alt) : a === void 0 ? null : new vt(n, a, l);
      }
      var Yt = { latLngToPoint: function(n, a) {
        var l = this.projection.project(n), d = this.scale(a);
        return this.transformation._transform(l, d);
      }, pointToLatLng: function(n, a) {
        var l = this.scale(a), d = this.transformation.untransform(n, l);
        return this.projection.unproject(d);
      }, project: function(n) {
        return this.projection.project(n);
      }, unproject: function(n) {
        return this.projection.unproject(n);
      }, scale: function(n) {
        return 256 * Math.pow(2, n);
      }, zoom: function(n) {
        return Math.log(n / 256) / Math.LN2;
      }, getProjectedBounds: function(n) {
        if (this.infinite) return null;
        var a = this.projection.bounds, l = this.scale(n), d = this.transformation.transform(a.min, l), p = this.transformation.transform(a.max, l);
        return new $(d, p);
      }, infinite: false, wrapLatLng: function(n) {
        var a = this.wrapLng ? A(n.lng, this.wrapLng, true) : n.lng, l = this.wrapLat ? A(n.lat, this.wrapLat, true) : n.lat, d = n.alt;
        return new vt(l, a, d);
      }, wrapLatLngBounds: function(n) {
        var a = n.getCenter(), l = this.wrapLatLng(a), d = a.lat - l.lat, p = a.lng - l.lng;
        if (d === 0 && p === 0) return n;
        var v = n.getSouthWest(), E = n.getNorthEast(), D = new vt(v.lat - d, v.lng - p), Y = new vt(E.lat - d, E.lng - p);
        return new at(D, Y);
      } }, kt = m({}, Yt, { wrapLng: [-180, 180], R: 6371e3, distance: function(n, a) {
        var l = Math.PI / 180, d = n.lat * l, p = a.lat * l, v = Math.sin((a.lat - n.lat) * l / 2), E = Math.sin((a.lng - n.lng) * l / 2), D = v * v + Math.cos(d) * Math.cos(p) * E * E, Y = 2 * Math.atan2(Math.sqrt(D), Math.sqrt(1 - D));
        return this.R * Y;
      } }), Ke = 6378137, Fn = { R: Ke, MAX_LATITUDE: 85.0511287798, project: function(n) {
        var a = Math.PI / 180, l = this.MAX_LATITUDE, d = Math.max(Math.min(l, n.lat), -l), p = Math.sin(d * a);
        return new F(this.R * n.lng * a, this.R * Math.log((1 + p) / (1 - p)) / 2);
      }, unproject: function(n) {
        var a = 180 / Math.PI;
        return new vt((2 * Math.atan(Math.exp(n.y / this.R)) - Math.PI / 2) * a, n.x * a / this.R);
      }, bounds: function() {
        var n = Ke * Math.PI;
        return new $([-n, -n], [n, n]);
      }() };
      function Dn(n, a, l, d) {
        if (nt(n)) {
          this._a = n[0], this._b = n[1], this._c = n[2], this._d = n[3];
          return;
        }
        this._a = n, this._b = a, this._c = l, this._d = d;
      }
      Dn.prototype = { transform: function(n, a) {
        return this._transform(n.clone(), a);
      }, _transform: function(n, a) {
        return a = a || 1, n.x = a * (this._a * n.x + this._b), n.y = a * (this._c * n.y + this._d), n;
      }, untransform: function(n, a) {
        return a = a || 1, new F((n.x / a - this._b) / this._a, (n.y / a - this._d) / this._c);
      } };
      function un(n, a, l, d) {
        return new Dn(n, a, l, d);
      }
      var Nn = m({}, kt, { code: "EPSG:3857", projection: Fn, transformation: function() {
        var n = 0.5 / (Math.PI * Fn.R);
        return un(n, 0.5, -n, 0.5);
      }() }), kn = m({}, Nn, { code: "EPSG:900913" });
      function Ri(n) {
        return document.createElementNS("http://www.w3.org/2000/svg", n);
      }
      function ca(n, a) {
        var l = "", d, p, v, E, D, Y;
        for (d = 0, v = n.length; d < v; d++) {
          for (D = n[d], p = 0, E = D.length; p < E; p++) Y = D[p], l += (p ? "L" : "M") + Y.x + " " + Y.y;
          l += a ? wt.svg ? "z" : "x" : "";
        }
        return l || "M0 0";
      }
      var _e = document.documentElement.style, Qe = "ActiveXObject" in window, Be = Qe && !document.addEventListener, yn = "msLaunchUri" in navigator && !("documentMode" in document), cn = fn("webkit"), At = fn("android"), cr = fn("android 2") || fn("android 3"), Vr = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), $r = At && fn("Google") && Vr < 537 && !("AudioNode" in window), ye = !!window.opera, Pt = !yn && fn("chrome"), ce = fn("gecko") && !cn && !ye && !Qe, re = !Pt && fn("safari"), fa = fn("phantom"), Xr = "OTransition" in _e, Tc = navigator.platform.indexOf("Win") === 0, fr = Qe && "transition" in _e, ha = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !cr, fi = "MozPerspective" in _e, Kr = !window.L_DISABLE_3D && (fr || ha || fi) && !Xr && !fa, ti = typeof orientation < "u" || fn("mobile"), wc = ti && cn, bl = ti && ha, Jo = !window.PointerEvent && window.MSPointerEvent, Qr = !!(window.PointerEvent || Jo), da = "ontouchstart" in window || !!window.TouchEvent, Cc = !window.L_NO_TOUCH && (da || Qr), Sl = ti && ye, xl = ti && ce, Fo = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, ts = function() {
        var n = false;
        try {
          var a = Object.defineProperty({}, "passive", { get: function() {
            n = true;
          } });
          window.addEventListener("testPassiveEventSupport", R, a), window.removeEventListener("testPassiveEventSupport", R, a);
        } catch {
        }
        return n;
      }(), Tl = function() {
        return !!document.createElement("canvas").getContext;
      }(), es = !!(document.createElementNS && Ri("svg").createSVGRect), hi = !!es && function() {
        var n = document.createElement("div");
        return n.innerHTML = "<svg/>", (n.firstChild && n.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      }(), De = !es && function() {
        try {
          var n = document.createElement("div");
          n.innerHTML = '<v:shape adj="1"/>';
          var a = n.firstChild;
          return a.style.behavior = "url(#default#VML)", a && typeof a.adj == "object";
        } catch {
          return false;
        }
      }(), Ie = navigator.platform.indexOf("Mac") === 0, ma = navigator.platform.indexOf("Linux") === 0;
      function fn(n) {
        return navigator.userAgent.toLowerCase().indexOf(n) >= 0;
      }
      var wt = { ie: Qe, ielt9: Be, edge: yn, webkit: cn, android: At, android23: cr, androidStock: $r, opera: ye, chrome: Pt, gecko: ce, safari: re, phantom: fa, opera12: Xr, win: Tc, ie3d: fr, webkit3d: ha, gecko3d: fi, any3d: Kr, mobile: ti, mobileWebkit: wc, mobileWebkit3d: bl, msPointer: Jo, pointer: Qr, touch: Cc, touchNative: da, mobileOpera: Sl, mobileGecko: xl, retina: Fo, passiveEvents: ts, canvas: Tl, svg: es, vml: De, inlineSvg: hi, mac: Ie, linux: ma }, wl = wt.msPointer ? "MSPointerDown" : "pointerdown", ns = wt.msPointer ? "MSPointerMove" : "pointermove", pa = wt.msPointer ? "MSPointerUp" : "pointerup", Ir = wt.msPointer ? "MSPointerCancel" : "pointercancel", di = { touchstart: wl, touchmove: ns, touchend: pa, touchcancel: Ir }, Bi = { touchstart: Ml, touchmove: hr, touchend: hr, touchcancel: hr }, Pn = {}, Di = false;
      function Me(n, a, l) {
        return a === "touchstart" && Ec(), Bi[a] ? (l = Bi[a].bind(this, l), n.addEventListener(di[a], l, false), l) : (console.warn("wrong event specified:", a), R);
      }
      function Cl(n, a, l) {
        if (!di[a]) {
          console.warn("wrong event specified:", a);
          return;
        }
        n.removeEventListener(di[a], l, false);
      }
      function El(n) {
        Pn[n.pointerId] = n;
      }
      function Ni(n) {
        Pn[n.pointerId] && (Pn[n.pointerId] = n);
      }
      function ki(n) {
        delete Pn[n.pointerId];
      }
      function Ec() {
        Di || (document.addEventListener(wl, El, true), document.addEventListener(ns, Ni, true), document.addEventListener(pa, ki, true), document.addEventListener(Ir, ki, true), Di = true);
      }
      function hr(n, a) {
        if (a.pointerType !== (a.MSPOINTER_TYPE_MOUSE || "mouse")) {
          a.touches = [];
          for (var l in Pn) a.touches.push(Pn[l]);
          a.changedTouches = [a], n(a);
        }
      }
      function Ml(n, a) {
        a.MSPOINTER_TYPE_TOUCH && a.pointerType === a.MSPOINTER_TYPE_TOUCH && ve(a), hr(n, a);
      }
      function Mc(n) {
        var a = {}, l, d;
        for (d in n) l = n[d], a[d] = l && l.bind ? l.bind(n) : l;
        return n = a, a.type = "dblclick", a.detail = 2, a.isTrusted = false, a._simulated = true, a;
      }
      var Wr = 200;
      function Jr(n, a) {
        n.addEventListener("dblclick", a);
        var l = 0, d;
        function p(v) {
          if (v.detail !== 1) {
            d = v.detail;
            return;
          }
          if (!(v.pointerType === "mouse" || v.sourceCapabilities && !v.sourceCapabilities.firesTouchEvents)) {
            var E = rs(v);
            if (!(E.some(function(Y) {
              return Y instanceof HTMLLabelElement && Y.attributes.for;
            }) && !E.some(function(Y) {
              return Y instanceof HTMLInputElement || Y instanceof HTMLSelectElement;
            }))) {
              var D = Date.now();
              D - l <= Wr ? (d++, d === 2 && a(Mc(v))) : d = 1, l = D;
            }
          }
        }
        return n.addEventListener("click", p), { dblclick: a, simDblclick: p };
      }
      function ei(n, a) {
        n.removeEventListener("dblclick", a.dblclick), n.removeEventListener("click", a.simDblclick);
      }
      var dr = va(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), ga = va(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), Pi = ga === "webkitTransition" || ga === "OTransition" ? ga + "End" : "transitionend";
      function Fr(n) {
        return typeof n == "string" ? document.getElementById(n) : n;
      }
      function Zi(n, a) {
        var l = n.style[a] || n.currentStyle && n.currentStyle[a];
        if ((!l || l === "auto") && document.defaultView) {
          var d = document.defaultView.getComputedStyle(n, null);
          l = d ? d[a] : null;
        }
        return l === "auto" ? null : l;
      }
      function qt(n, a, l) {
        var d = document.createElement(n);
        return d.className = a || "", l && l.appendChild(d), d;
      }
      function oe(n) {
        var a = n.parentNode;
        a && a.removeChild(n);
      }
      function Ue(n) {
        for (; n.firstChild; ) n.removeChild(n.firstChild);
      }
      function Hi(n) {
        var a = n.parentNode;
        a && a.lastChild !== n && a.appendChild(n);
      }
      function _a(n) {
        var a = n.parentNode;
        a && a.firstChild !== n && a.insertBefore(n, a.firstChild);
      }
      function ya(n, a) {
        if (n.classList !== void 0) return n.classList.contains(a);
        var l = je(n);
        return l.length > 0 && new RegExp("(^|\\s)" + a + "(\\s|$)").test(l);
      }
      function Bt(n, a) {
        if (n.classList !== void 0) for (var l = Z(a), d = 0, p = l.length; d < p; d++) n.classList.add(l[d]);
        else if (!ya(n, a)) {
          var v = je(n);
          is(n, (v ? v + " " : "") + a);
        }
      }
      function se(n, a) {
        n.classList !== void 0 ? n.classList.remove(a) : is(n, V((" " + je(n) + " ").replace(" " + a + " ", " ")));
      }
      function is(n, a) {
        n.className.baseVal === void 0 ? n.className = a : n.className.baseVal = a;
      }
      function je(n) {
        return n.correspondingElement && (n = n.correspondingElement), n.className.baseVal === void 0 ? n.className : n.className.baseVal;
      }
      function We(n, a) {
        "opacity" in n.style ? n.style.opacity = a : "filter" in n.style && Al(n, a);
      }
      function Al(n, a) {
        var l = false, d = "DXImageTransform.Microsoft.Alpha";
        try {
          l = n.filters.item(d);
        } catch {
          if (a === 1) return;
        }
        a = Math.round(a * 100), l ? (l.Enabled = a !== 100, l.Opacity = a) : n.style.filter += " progid:" + d + "(opacity=" + a + ")";
      }
      function va(n) {
        for (var a = document.documentElement.style, l = 0; l < n.length; l++) if (n[l] in a) return n[l];
        return false;
      }
      function hn(n, a, l) {
        var d = a || new F(0, 0);
        n.style[dr] = (wt.ie3d ? "translate(" + d.x + "px," + d.y + "px)" : "translate3d(" + d.x + "px," + d.y + "px,0)") + (l ? " scale(" + l + ")" : "");
      }
      function me(n, a) {
        n._leaflet_pos = a, wt.any3d ? hn(n, a) : (n.style.left = a.x + "px", n.style.top = a.y + "px");
      }
      function mi(n) {
        return n._leaflet_pos || new F(0, 0);
      }
      var Zn, mr, to;
      if ("onselectstart" in document) Zn = function() {
        Rt(window, "selectstart", ve);
      }, mr = function() {
        Vt(window, "selectstart", ve);
      };
      else {
        var ba = va(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        Zn = function() {
          if (ba) {
            var n = document.documentElement.style;
            to = n[ba], n[ba] = "none";
          }
        }, mr = function() {
          ba && (document.documentElement.style[ba] = to, to = void 0);
        };
      }
      function pr() {
        Rt(window, "dragstart", ve);
      }
      function as() {
        Vt(window, "dragstart", ve);
      }
      var eo, Sa;
      function gr(n) {
        for (; n.tabIndex === -1; ) n = n.parentNode;
        n.style && (xa(), eo = n, Sa = n.style.outlineStyle, n.style.outlineStyle = "none", Rt(window, "keydown", xa));
      }
      function xa() {
        eo && (eo.style.outlineStyle = Sa, eo = void 0, Sa = void 0, Vt(window, "keydown", xa));
      }
      function Ui(n) {
        do
          n = n.parentNode;
        while ((!n.offsetWidth || !n.offsetHeight) && n !== document.body);
        return n;
      }
      function pi(n) {
        var a = n.getBoundingClientRect();
        return { x: a.width / n.offsetWidth || 1, y: a.height / n.offsetHeight || 1, boundingClientRect: a };
      }
      var Ol = { __proto__: null, TRANSFORM: dr, TRANSITION: ga, TRANSITION_END: Pi, get: Fr, getStyle: Zi, create: qt, remove: oe, empty: Ue, toFront: Hi, toBack: _a, hasClass: ya, addClass: Bt, removeClass: se, setClass: is, getClass: je, setOpacity: We, testProp: va, setTransform: hn, setPosition: me, getPosition: mi, get disableTextSelection() {
        return Zn;
      }, get enableTextSelection() {
        return mr;
      }, disableImageDrag: pr, enableImageDrag: as, preventOutline: gr, restoreOutline: xa, getSizedParentNode: Ui, getScale: pi };
      function Rt(n, a, l, d) {
        if (a && typeof a == "object") for (var p in a) ji(n, p, a[p], l);
        else {
          a = Z(a);
          for (var v = 0, E = a.length; v < E; v++) ji(n, a[v], l, d);
        }
        return this;
      }
      var vn = "_leaflet_events";
      function Vt(n, a, l, d) {
        if (arguments.length === 1) Hn(n), delete n[vn];
        else if (a && typeof a == "object") for (var p in a) Un(n, p, a[p], l);
        else if (a = Z(a), arguments.length === 2) Hn(n, function(D) {
          return et(a, D) !== -1;
        });
        else for (var v = 0, E = a.length; v < E; v++) Un(n, a[v], l, d);
        return this;
      }
      function Hn(n, a) {
        for (var l in n[vn]) {
          var d = l.split(/\d/)[0];
          (!a || a(d)) && Un(n, d, null, null, l);
        }
      }
      var _r = { mouseenter: "mouseover", mouseleave: "mouseout", wheel: !("onwheel" in window) && "mousewheel" };
      function ji(n, a, l, d) {
        var p = a + w(l) + (d ? "_" + w(d) : "");
        if (n[vn] && n[vn][p]) return this;
        var v = function(D) {
          return l.call(d || n, D || window.event);
        }, E = v;
        !wt.touchNative && wt.pointer && a.indexOf("touch") === 0 ? v = Me(n, a, v) : wt.touch && a === "dblclick" ? v = Jr(n, v) : "addEventListener" in n ? a === "touchstart" || a === "touchmove" || a === "wheel" || a === "mousewheel" ? n.addEventListener(_r[a] || a, v, wt.passiveEvents ? { passive: false } : false) : a === "mouseenter" || a === "mouseleave" ? (v = function(D) {
          D = D || window.event, Gi(n, D) && E(D);
        }, n.addEventListener(_r[a], v, false)) : n.addEventListener(a, E, false) : n.attachEvent("on" + a, v), n[vn] = n[vn] || {}, n[vn][p] = v;
      }
      function Un(n, a, l, d, p) {
        p = p || a + w(l) + (d ? "_" + w(d) : "");
        var v = n[vn] && n[vn][p];
        if (!v) return this;
        !wt.touchNative && wt.pointer && a.indexOf("touch") === 0 ? Cl(n, a, v) : wt.touch && a === "dblclick" ? ei(n, v) : "removeEventListener" in n ? n.removeEventListener(_r[a] || a, v, false) : n.detachEvent("on" + a, v), n[vn][p] = null;
      }
      function ni(n) {
        return n.stopPropagation ? n.stopPropagation() : n.originalEvent ? n.originalEvent._stopped = true : n.cancelBubble = true, this;
      }
      function Ta(n) {
        return ji(n, "wheel", ni), this;
      }
      function wa(n) {
        return Rt(n, "mousedown touchstart dblclick contextmenu", ni), n._leaflet_disable_click = true, this;
      }
      function ve(n) {
        return n.preventDefault ? n.preventDefault() : n.returnValue = false, this;
      }
      function jn(n) {
        return ve(n), ni(n), this;
      }
      function rs(n) {
        if (n.composedPath) return n.composedPath();
        for (var a = [], l = n.target; l; ) a.push(l), l = l.parentNode;
        return a;
      }
      function qe(n, a) {
        if (!a) return new F(n.clientX, n.clientY);
        var l = pi(a), d = l.boundingClientRect;
        return new F((n.clientX - d.left) / l.x - a.clientLeft, (n.clientY - d.top) / l.y - a.clientTop);
      }
      var qi = wt.linux && wt.chrome ? window.devicePixelRatio : wt.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function yr(n) {
        return wt.edge ? n.wheelDeltaY / 2 : n.deltaY && n.deltaMode === 0 ? -n.deltaY / qi : n.deltaY && n.deltaMode === 1 ? -n.deltaY * 20 : n.deltaY && n.deltaMode === 2 ? -n.deltaY * 60 : n.deltaX || n.deltaZ ? 0 : n.wheelDelta ? (n.wheelDeltaY || n.wheelDelta) / 2 : n.detail && Math.abs(n.detail) < 32765 ? -n.detail * 20 : n.detail ? n.detail / -32765 * 60 : 0;
      }
      function Gi(n, a) {
        var l = a.relatedTarget;
        if (!l) return true;
        try {
          for (; l && l !== n; ) l = l.parentNode;
        } catch {
          return false;
        }
        return l !== n;
      }
      var Ac = { __proto__: null, on: Rt, off: Vt, stopPropagation: ni, disableScrollPropagation: Ta, disableClickPropagation: wa, preventDefault: ve, stop: jn, getPropagationPath: rs, getMousePosition: qe, getWheelDelta: yr, isExternalTarget: Gi, addListener: Rt, removeListener: Vt }, no = st.extend({ run: function(n, a, l, d) {
        this.stop(), this._el = n, this._inProgress = true, this._duration = l || 0.25, this._easeOutPower = 1 / Math.max(d || 0.5, 0.2), this._startPos = mi(n), this._offset = a.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
      }, stop: function() {
        this._inProgress && (this._step(true), this._complete());
      }, _animate: function() {
        this._animId = ht(this._animate, this), this._step();
      }, _step: function(n) {
        var a = +/* @__PURE__ */ new Date() - this._startTime, l = this._duration * 1e3;
        a < l ? this._runFrame(this._easeOut(a / l), n) : (this._runFrame(1), this._complete());
      }, _runFrame: function(n, a) {
        var l = this._startPos.add(this._offset.multiplyBy(n));
        a && l._round(), me(this._el, l), this.fire("step");
      }, _complete: function() {
        x(this._animId), this._inProgress = false, this.fire("end");
      }, _easeOut: function(n) {
        return 1 - Math.pow(1 - n, this._easeOutPower);
      } }), Zt = st.extend({ options: { crs: Nn, center: void 0, zoom: void 0, minZoom: void 0, maxZoom: void 0, layers: [], maxBounds: void 0, renderer: void 0, zoomAnimation: true, zoomAnimationThreshold: 4, fadeAnimation: true, markerZoomAnimation: true, transform3DLimit: 8388608, zoomSnap: 1, zoomDelta: 1, trackResize: true }, initialize: function(n, a) {
        a = z(this, a), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = true, this._initContainer(n), this._initLayout(), this._onResize = y(this._onResize, this), this._initEvents(), a.maxBounds && this.setMaxBounds(a.maxBounds), a.zoom !== void 0 && (this._zoom = this._limitZoom(a.zoom)), a.center && a.zoom !== void 0 && this.setView(ut(a.center), a.zoom, { reset: true }), this.callInitHooks(), this._zoomAnimated = ga && wt.any3d && !wt.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Rt(this._proxy, Pi, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      }, setView: function(n, a, l) {
        if (a = a === void 0 ? this._zoom : this._limitZoom(a), n = this._limitCenter(ut(n), a, this.options.maxBounds), l = l || {}, this._stop(), this._loaded && !l.reset && l !== true) {
          l.animate !== void 0 && (l.zoom = m({ animate: l.animate }, l.zoom), l.pan = m({ animate: l.animate, duration: l.duration }, l.pan));
          var d = this._zoom !== a ? this._tryAnimatedZoom && this._tryAnimatedZoom(n, a, l.zoom) : this._tryAnimatedPan(n, l.pan);
          if (d) return clearTimeout(this._sizeTimer), this;
        }
        return this._resetView(n, a, l.pan && l.pan.noMoveStart), this;
      }, setZoom: function(n, a) {
        return this._loaded ? this.setView(this.getCenter(), n, { zoom: a }) : (this._zoom = n, this);
      }, zoomIn: function(n, a) {
        return n = n || (wt.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + n, a);
      }, zoomOut: function(n, a) {
        return n = n || (wt.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - n, a);
      }, setZoomAround: function(n, a, l) {
        var d = this.getZoomScale(a), p = this.getSize().divideBy(2), v = n instanceof F ? n : this.latLngToContainerPoint(n), E = v.subtract(p).multiplyBy(1 - 1 / d), D = this.containerPointToLatLng(p.add(E));
        return this.setView(D, a, { zoom: l });
      }, _getBoundsCenterZoom: function(n, a) {
        a = a || {}, n = n.getBounds ? n.getBounds() : dt(n);
        var l = C(a.paddingTopLeft || a.padding || [0, 0]), d = C(a.paddingBottomRight || a.padding || [0, 0]), p = this.getBoundsZoom(n, false, l.add(d));
        if (p = typeof a.maxZoom == "number" ? Math.min(a.maxZoom, p) : p, p === 1 / 0) return { center: n.getCenter(), zoom: p };
        var v = d.subtract(l).divideBy(2), E = this.project(n.getSouthWest(), p), D = this.project(n.getNorthEast(), p), Y = this.unproject(E.add(D).divideBy(2).add(v), p);
        return { center: Y, zoom: p };
      }, fitBounds: function(n, a) {
        if (n = dt(n), !n.isValid()) throw new Error("Bounds are not valid.");
        var l = this._getBoundsCenterZoom(n, a);
        return this.setView(l.center, l.zoom, a);
      }, fitWorld: function(n) {
        return this.fitBounds([[-90, -180], [90, 180]], n);
      }, panTo: function(n, a) {
        return this.setView(n, this._zoom, { pan: a });
      }, panBy: function(n, a) {
        if (n = C(n).round(), a = a || {}, !n.x && !n.y) return this.fire("moveend");
        if (a.animate !== true && !this.getSize().contains(n)) return this._resetView(this.unproject(this.project(this.getCenter()).add(n)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new no(), this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)), a.noMoveStart || this.fire("movestart"), a.animate !== false) {
          Bt(this._mapPane, "leaflet-pan-anim");
          var l = this._getMapPanePos().subtract(n).round();
          this._panAnim.run(this._mapPane, l, a.duration || 0.25, a.easeLinearity);
        } else this._rawPanBy(n), this.fire("move").fire("moveend");
        return this;
      }, flyTo: function(n, a, l) {
        if (l = l || {}, l.animate === false || !wt.any3d) return this.setView(n, a, l);
        this._stop();
        var d = this.project(this.getCenter()), p = this.project(n), v = this.getSize(), E = this._zoom;
        n = ut(n), a = a === void 0 ? E : a;
        var D = Math.max(v.x, v.y), Y = D * this.getZoomScale(E, a), tt = p.distanceTo(d) || 1, gt = 1.42, bt = gt * gt;
        function Tt(fe) {
          var Yn = fe ? -1 : 1, ri = fe ? Y : D, bi = Y * Y - D * D + Yn * bt * bt * tt * tt, oi = 2 * ri * bt * tt, zr = bi / oi, go = Math.sqrt(zr * zr + 1) - zr, Rr = go < 1e-9 ? -18 : Math.log(go);
          return Rr;
        }
        function zt(fe) {
          return (Math.exp(fe) - Math.exp(-fe)) / 2;
        }
        function le(fe) {
          return (Math.exp(fe) + Math.exp(-fe)) / 2;
        }
        function pe(fe) {
          return zt(fe) / le(fe);
        }
        var ke = Tt(0);
        function dn(fe) {
          return D * (le(ke) / le(ke + gt * fe));
        }
        function Kl(fe) {
          return D * (le(ke) * pe(ke + gt * fe) - zt(ke)) / bt;
        }
        function Ql(fe) {
          return 1 - Math.pow(1 - fe, 1.5);
        }
        var Lr = Date.now(), ka = (Tt(1) - ke) / gt, Il = l.duration ? 1e3 * l.duration : 1e3 * ka * 0.8;
        function Pa() {
          var fe = (Date.now() - Lr) / Il, Yn = Ql(fe) * ka;
          fe <= 1 ? (this._flyToFrame = ht(Pa, this), this._move(this.unproject(d.add(p.subtract(d).multiplyBy(Kl(Yn) / tt)), E), this.getScaleZoom(D / dn(Yn), E), { flyTo: true })) : this._move(n, a)._moveEnd(true);
        }
        return this._moveStart(true, l.noMoveStart), Pa.call(this), this;
      }, flyToBounds: function(n, a) {
        var l = this._getBoundsCenterZoom(n, a);
        return this.flyTo(l.center, l.zoom, a);
      }, setMaxBounds: function(n) {
        return n = dt(n), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), n.isValid() ? (this.options.maxBounds = n, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      }, setMinZoom: function(n) {
        var a = this.options.minZoom;
        return this.options.minZoom = n, this._loaded && a !== n && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(n) : this;
      }, setMaxZoom: function(n) {
        var a = this.options.maxZoom;
        return this.options.maxZoom = n, this._loaded && a !== n && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(n) : this;
      }, panInsideBounds: function(n, a) {
        this._enforcingBounds = true;
        var l = this.getCenter(), d = this._limitCenter(l, this._zoom, dt(n));
        return l.equals(d) || this.panTo(d, a), this._enforcingBounds = false, this;
      }, panInside: function(n, a) {
        a = a || {};
        var l = C(a.paddingTopLeft || a.padding || [0, 0]), d = C(a.paddingBottomRight || a.padding || [0, 0]), p = this.project(this.getCenter()), v = this.project(n), E = this.getPixelBounds(), D = it([E.min.add(l), E.max.subtract(d)]), Y = D.getSize();
        if (!D.contains(v)) {
          this._enforcingBounds = true;
          var tt = v.subtract(D.getCenter()), gt = D.extend(v).getSize().subtract(Y);
          p.x += tt.x < 0 ? -gt.x : gt.x, p.y += tt.y < 0 ? -gt.y : gt.y, this.panTo(this.unproject(p), a), this._enforcingBounds = false;
        }
        return this;
      }, invalidateSize: function(n) {
        if (!this._loaded) return this;
        n = m({ animate: false, pan: true }, n === true ? { animate: true } : n);
        var a = this.getSize();
        this._sizeChanged = true, this._lastCenter = null;
        var l = this.getSize(), d = a.divideBy(2).round(), p = l.divideBy(2).round(), v = d.subtract(p);
        return !v.x && !v.y ? this : (n.animate && n.pan ? this.panBy(v) : (n.pan && this._rawPanBy(v), this.fire("move"), n.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(y(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", { oldSize: a, newSize: l }));
      }, stop: function() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
      }, locate: function(n) {
        if (n = this._locateOptions = m({ timeout: 1e4, watch: false }, n), !("geolocation" in navigator)) return this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }), this;
        var a = y(this._handleGeolocationResponse, this), l = y(this._handleGeolocationError, this);
        return n.watch ? this._locationWatchId = navigator.geolocation.watchPosition(a, l, n) : navigator.geolocation.getCurrentPosition(a, l, n), this;
      }, stopLocate: function() {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = false), this;
      }, _handleGeolocationError: function(n) {
        if (this._container._leaflet_id) {
          var a = n.code, l = n.message || (a === 1 ? "permission denied" : a === 2 ? "position unavailable" : "timeout");
          this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", { code: a, message: "Geolocation error: " + l + "." });
        }
      }, _handleGeolocationResponse: function(n) {
        if (this._container._leaflet_id) {
          var a = n.coords.latitude, l = n.coords.longitude, d = new vt(a, l), p = d.toBounds(n.coords.accuracy * 2), v = this._locateOptions;
          if (v.setView) {
            var E = this.getBoundsZoom(p);
            this.setView(d, v.maxZoom ? Math.min(E, v.maxZoom) : E);
          }
          var D = { latlng: d, bounds: p, timestamp: n.timestamp };
          for (var Y in n.coords) typeof n.coords[Y] == "number" && (D[Y] = n.coords[Y]);
          this.fire("locationfound", D);
        }
      }, addHandler: function(n, a) {
        if (!a) return this;
        var l = this[n] = new a(this);
        return this._handlers.push(l), this.options[n] && l.enable(), this;
      }, remove: function() {
        if (this._initEvents(true), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), oe(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (x(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var n;
        for (n in this._layers) this._layers[n].remove();
        for (n in this._panes) oe(this._panes[n]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      }, createPane: function(n, a) {
        var l = "leaflet-pane" + (n ? " leaflet-" + n.replace("Pane", "") + "-pane" : ""), d = qt("div", l, a || this._mapPane);
        return n && (this._panes[n] = d), d;
      }, getCenter: function() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
      }, getZoom: function() {
        return this._zoom;
      }, getBounds: function() {
        var n = this.getPixelBounds(), a = this.unproject(n.getBottomLeft()), l = this.unproject(n.getTopRight());
        return new at(a, l);
      }, getMinZoom: function() {
        return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
      }, getMaxZoom: function() {
        return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      }, getBoundsZoom: function(n, a, l) {
        n = dt(n), l = C(l || [0, 0]);
        var d = this.getZoom() || 0, p = this.getMinZoom(), v = this.getMaxZoom(), E = n.getNorthWest(), D = n.getSouthEast(), Y = this.getSize().subtract(l), tt = it(this.project(D, d), this.project(E, d)).getSize(), gt = wt.any3d ? this.options.zoomSnap : 1, bt = Y.x / tt.x, Tt = Y.y / tt.y, zt = a ? Math.max(bt, Tt) : Math.min(bt, Tt);
        return d = this.getScaleZoom(zt, d), gt && (d = Math.round(d / (gt / 100)) * (gt / 100), d = a ? Math.ceil(d / gt) * gt : Math.floor(d / gt) * gt), Math.max(p, Math.min(v, d));
      }, getSize: function() {
        return (!this._size || this._sizeChanged) && (this._size = new F(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = false), this._size.clone();
      }, getPixelBounds: function(n, a) {
        var l = this._getTopLeftPoint(n, a);
        return new $(l, l.add(this.getSize()));
      }, getPixelOrigin: function() {
        return this._checkIfLoaded(), this._pixelOrigin;
      }, getPixelWorldBounds: function(n) {
        return this.options.crs.getProjectedBounds(n === void 0 ? this.getZoom() : n);
      }, getPane: function(n) {
        return typeof n == "string" ? this._panes[n] : n;
      }, getPanes: function() {
        return this._panes;
      }, getContainer: function() {
        return this._container;
      }, getZoomScale: function(n, a) {
        var l = this.options.crs;
        return a = a === void 0 ? this._zoom : a, l.scale(n) / l.scale(a);
      }, getScaleZoom: function(n, a) {
        var l = this.options.crs;
        a = a === void 0 ? this._zoom : a;
        var d = l.zoom(n * l.scale(a));
        return isNaN(d) ? 1 / 0 : d;
      }, project: function(n, a) {
        return a = a === void 0 ? this._zoom : a, this.options.crs.latLngToPoint(ut(n), a);
      }, unproject: function(n, a) {
        return a = a === void 0 ? this._zoom : a, this.options.crs.pointToLatLng(C(n), a);
      }, layerPointToLatLng: function(n) {
        var a = C(n).add(this.getPixelOrigin());
        return this.unproject(a);
      }, latLngToLayerPoint: function(n) {
        var a = this.project(ut(n))._round();
        return a._subtract(this.getPixelOrigin());
      }, wrapLatLng: function(n) {
        return this.options.crs.wrapLatLng(ut(n));
      }, wrapLatLngBounds: function(n) {
        return this.options.crs.wrapLatLngBounds(dt(n));
      }, distance: function(n, a) {
        return this.options.crs.distance(ut(n), ut(a));
      }, containerPointToLayerPoint: function(n) {
        return C(n).subtract(this._getMapPanePos());
      }, layerPointToContainerPoint: function(n) {
        return C(n).add(this._getMapPanePos());
      }, containerPointToLatLng: function(n) {
        var a = this.containerPointToLayerPoint(C(n));
        return this.layerPointToLatLng(a);
      }, latLngToContainerPoint: function(n) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(ut(n)));
      }, mouseEventToContainerPoint: function(n) {
        return qe(n, this._container);
      }, mouseEventToLayerPoint: function(n) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n));
      }, mouseEventToLatLng: function(n) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(n));
      }, _initContainer: function(n) {
        var a = this._container = Fr(n);
        if (a) {
          if (a._leaflet_id) throw new Error("Map container is already initialized.");
        } else throw new Error("Map container not found.");
        Rt(a, "scroll", this._onScroll, this), this._containerId = w(a);
      }, _initLayout: function() {
        var n = this._container;
        this._fadeAnimated = this.options.fadeAnimation && wt.any3d, Bt(n, "leaflet-container" + (wt.touch ? " leaflet-touch" : "") + (wt.retina ? " leaflet-retina" : "") + (wt.ielt9 ? " leaflet-oldie" : "") + (wt.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var a = Zi(n, "position");
        a !== "absolute" && a !== "relative" && a !== "fixed" && a !== "sticky" && (n.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      }, _initPanes: function() {
        var n = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), me(this._mapPane, new F(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (Bt(n.markerPane, "leaflet-zoom-hide"), Bt(n.shadowPane, "leaflet-zoom-hide"));
      }, _resetView: function(n, a, l) {
        me(this._mapPane, new F(0, 0));
        var d = !this._loaded;
        this._loaded = true, a = this._limitZoom(a), this.fire("viewprereset");
        var p = this._zoom !== a;
        this._moveStart(p, l)._move(n, a)._moveEnd(p), this.fire("viewreset"), d && this.fire("load");
      }, _moveStart: function(n, a) {
        return n && this.fire("zoomstart"), a || this.fire("movestart"), this;
      }, _move: function(n, a, l, d) {
        a === void 0 && (a = this._zoom);
        var p = this._zoom !== a;
        return this._zoom = a, this._lastCenter = n, this._pixelOrigin = this._getNewPixelOrigin(n), d ? l && l.pinch && this.fire("zoom", l) : ((p || l && l.pinch) && this.fire("zoom", l), this.fire("move", l)), this;
      }, _moveEnd: function(n) {
        return n && this.fire("zoomend"), this.fire("moveend");
      }, _stop: function() {
        return x(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      }, _rawPanBy: function(n) {
        me(this._mapPane, this._getMapPanePos().subtract(n));
      }, _getZoomSpan: function() {
        return this.getMaxZoom() - this.getMinZoom();
      }, _panInsideMaxBounds: function() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      }, _checkIfLoaded: function() {
        if (!this._loaded) throw new Error("Set map center and zoom first.");
      }, _initEvents: function(n) {
        this._targets = {}, this._targets[w(this._container)] = this;
        var a = n ? Vt : Rt;
        a(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && a(window, "resize", this._onResize, this), wt.any3d && this.options.transform3DLimit && (n ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      }, _onResize: function() {
        x(this._resizeRequest), this._resizeRequest = ht(function() {
          this.invalidateSize({ debounceMoveend: true });
        }, this);
      }, _onScroll: function() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      }, _onMoveEnd: function() {
        var n = this._getMapPanePos();
        Math.max(Math.abs(n.x), Math.abs(n.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      }, _findEventTargets: function(n, a) {
        for (var l = [], d, p = a === "mouseout" || a === "mouseover", v = n.target || n.srcElement, E = false; v; ) {
          if (d = this._targets[w(v)], d && (a === "click" || a === "preclick") && this._draggableMoved(d)) {
            E = true;
            break;
          }
          if (d && d.listens(a, true) && (p && !Gi(v, n) || (l.push(d), p)) || v === this._container) break;
          v = v.parentNode;
        }
        return !l.length && !E && !p && this.listens(a, true) && (l = [this]), l;
      }, _isClickDisabled: function(n) {
        for (; n && n !== this._container; ) {
          if (n._leaflet_disable_click) return true;
          n = n.parentNode;
        }
      }, _handleDOMEvent: function(n) {
        var a = n.target || n.srcElement;
        if (!(!this._loaded || a._leaflet_disable_events || n.type === "click" && this._isClickDisabled(a))) {
          var l = n.type;
          l === "mousedown" && gr(a), this._fireDOMEvent(n, l);
        }
      }, _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"], _fireDOMEvent: function(n, a, l) {
        if (n.type === "click") {
          var d = m({}, n);
          d.type = "preclick", this._fireDOMEvent(d, d.type, l);
        }
        var p = this._findEventTargets(n, a);
        if (l) {
          for (var v = [], E = 0; E < l.length; E++) l[E].listens(a, true) && v.push(l[E]);
          p = v.concat(p);
        }
        if (p.length) {
          a === "contextmenu" && ve(n);
          var D = p[0], Y = { originalEvent: n };
          if (n.type !== "keypress" && n.type !== "keydown" && n.type !== "keyup") {
            var tt = D.getLatLng && (!D._radius || D._radius <= 10);
            Y.containerPoint = tt ? this.latLngToContainerPoint(D.getLatLng()) : this.mouseEventToContainerPoint(n), Y.layerPoint = this.containerPointToLayerPoint(Y.containerPoint), Y.latlng = tt ? D.getLatLng() : this.layerPointToLatLng(Y.layerPoint);
          }
          for (E = 0; E < p.length; E++) if (p[E].fire(a, Y, true), Y.originalEvent._stopped || p[E].options.bubblingMouseEvents === false && et(this._mouseEvents, a) !== -1) return;
        }
      }, _draggableMoved: function(n) {
        return n = n.dragging && n.dragging.enabled() ? n : this, n.dragging && n.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      }, _clearHandlers: function() {
        for (var n = 0, a = this._handlers.length; n < a; n++) this._handlers[n].disable();
      }, whenReady: function(n, a) {
        return this._loaded ? n.call(a || this, { target: this }) : this.on("load", n, a), this;
      }, _getMapPanePos: function() {
        return mi(this._mapPane) || new F(0, 0);
      }, _moved: function() {
        var n = this._getMapPanePos();
        return n && !n.equals([0, 0]);
      }, _getTopLeftPoint: function(n, a) {
        var l = n && a !== void 0 ? this._getNewPixelOrigin(n, a) : this.getPixelOrigin();
        return l.subtract(this._getMapPanePos());
      }, _getNewPixelOrigin: function(n, a) {
        var l = this.getSize()._divideBy(2);
        return this.project(n, a)._subtract(l)._add(this._getMapPanePos())._round();
      }, _latLngToNewLayerPoint: function(n, a, l) {
        var d = this._getNewPixelOrigin(l, a);
        return this.project(n, a)._subtract(d);
      }, _latLngBoundsToNewLayerBounds: function(n, a, l) {
        var d = this._getNewPixelOrigin(l, a);
        return it([this.project(n.getSouthWest(), a)._subtract(d), this.project(n.getNorthWest(), a)._subtract(d), this.project(n.getSouthEast(), a)._subtract(d), this.project(n.getNorthEast(), a)._subtract(d)]);
      }, _getCenterLayerPoint: function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      }, _getCenterOffset: function(n) {
        return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint());
      }, _limitCenter: function(n, a, l) {
        if (!l) return n;
        var d = this.project(n, a), p = this.getSize().divideBy(2), v = new $(d.subtract(p), d.add(p)), E = this._getBoundsOffset(v, l, a);
        return Math.abs(E.x) <= 1 && Math.abs(E.y) <= 1 ? n : this.unproject(d.add(E), a);
      }, _limitOffset: function(n, a) {
        if (!a) return n;
        var l = this.getPixelBounds(), d = new $(l.min.add(n), l.max.add(n));
        return n.add(this._getBoundsOffset(d, a));
      }, _getBoundsOffset: function(n, a, l) {
        var d = it(this.project(a.getNorthEast(), l), this.project(a.getSouthWest(), l)), p = d.min.subtract(n.min), v = d.max.subtract(n.max), E = this._rebound(p.x, -v.x), D = this._rebound(p.y, -v.y);
        return new F(E, D);
      }, _rebound: function(n, a) {
        return n + a > 0 ? Math.round(n - a) / 2 : Math.max(0, Math.ceil(n)) - Math.max(0, Math.floor(a));
      }, _limitZoom: function(n) {
        var a = this.getMinZoom(), l = this.getMaxZoom(), d = wt.any3d ? this.options.zoomSnap : 1;
        return d && (n = Math.round(n / d) * d), Math.max(a, Math.min(l, n));
      }, _onPanTransitionStep: function() {
        this.fire("move");
      }, _onPanTransitionEnd: function() {
        se(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      }, _tryAnimatedPan: function(n, a) {
        var l = this._getCenterOffset(n)._trunc();
        return (a && a.animate) !== true && !this.getSize().contains(l) ? false : (this.panBy(l, a), true);
      }, _createAnimProxy: function() {
        var n = this._proxy = qt("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(n), this.on("zoomanim", function(a) {
          var l = dr, d = this._proxy.style[l];
          hn(this._proxy, this.project(a.center, a.zoom), this.getZoomScale(a.zoom, 1)), d === this._proxy.style[l] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      }, _destroyAnimProxy: function() {
        oe(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      }, _animMoveEnd: function() {
        var n = this.getCenter(), a = this.getZoom();
        hn(this._proxy, this.project(n, a), this.getZoomScale(a, 1));
      }, _catchTransitionEnd: function(n) {
        this._animatingZoom && n.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
      }, _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      }, _tryAnimatedZoom: function(n, a, l) {
        if (this._animatingZoom) return true;
        if (l = l || {}, !this._zoomAnimated || l.animate === false || this._nothingToAnimate() || Math.abs(a - this._zoom) > this.options.zoomAnimationThreshold) return false;
        var d = this.getZoomScale(a), p = this._getCenterOffset(n)._divideBy(1 - 1 / d);
        return l.animate !== true && !this.getSize().contains(p) ? false : (ht(function() {
          this._moveStart(true, l.noMoveStart || false)._animateZoom(n, a, true);
        }, this), true);
      }, _animateZoom: function(n, a, l, d) {
        this._mapPane && (l && (this._animatingZoom = true, this._animateToCenter = n, this._animateToZoom = a, Bt(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", { center: n, zoom: a, noUpdate: d }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, true), setTimeout(y(this._onZoomTransitionEnd, this), 250));
      }, _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && se(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = false, this._move(this._animateToCenter, this._animateToZoom, void 0, true), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(true));
      } });
      function vr(n, a) {
        return new Zt(n, a);
      }
      var Je = ot.extend({ options: { position: "topright" }, initialize: function(n) {
        z(this, n);
      }, getPosition: function() {
        return this.options.position;
      }, setPosition: function(n) {
        var a = this._map;
        return a && a.removeControl(this), this.options.position = n, a && a.addControl(this), this;
      }, getContainer: function() {
        return this._container;
      }, addTo: function(n) {
        this.remove(), this._map = n;
        var a = this._container = this.onAdd(n), l = this.getPosition(), d = n._controlCorners[l];
        return Bt(a, "leaflet-control"), l.indexOf("bottom") !== -1 ? d.insertBefore(a, d.firstChild) : d.appendChild(a), this._map.on("unload", this.remove, this), this;
      }, remove: function() {
        return this._map ? (oe(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      }, _refocusOnMap: function(n) {
        this._map && n && n.screenX > 0 && n.screenY > 0 && this._map.getContainer().focus();
      } }), Ca = function(n) {
        return new Je(n);
      };
      Zt.include({ addControl: function(n) {
        return n.addTo(this), this;
      }, removeControl: function(n) {
        return n.remove(), this;
      }, _initControlPos: function() {
        var n = this._controlCorners = {}, a = "leaflet-", l = this._controlContainer = qt("div", a + "control-container", this._container);
        function d(p, v) {
          var E = a + p + " " + a + v;
          n[p + v] = qt("div", E, l);
        }
        d("top", "left"), d("top", "right"), d("bottom", "left"), d("bottom", "right");
      }, _clearControlPos: function() {
        for (var n in this._controlCorners) oe(this._controlCorners[n]);
        oe(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      } });
      var Ll = Je.extend({ options: { collapsed: true, position: "topright", autoZIndex: true, hideSingleBase: false, sortLayers: false, sortFunction: function(n, a, l, d) {
        return l < d ? -1 : d < l ? 1 : 0;
      } }, initialize: function(n, a, l) {
        z(this, l), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = false, this._preventClick = false;
        for (var d in n) this._addLayer(n[d], d);
        for (d in a) this._addLayer(a[d], d, true);
      }, onAdd: function(n) {
        this._initLayout(), this._update(), this._map = n, n.on("zoomend", this._checkDisabledLayers, this);
        for (var a = 0; a < this._layers.length; a++) this._layers[a].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      }, addTo: function(n) {
        return Je.prototype.addTo.call(this, n), this._expandIfNotCollapsed();
      }, onRemove: function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var n = 0; n < this._layers.length; n++) this._layers[n].layer.off("add remove", this._onLayerChange, this);
      }, addBaseLayer: function(n, a) {
        return this._addLayer(n, a), this._map ? this._update() : this;
      }, addOverlay: function(n, a) {
        return this._addLayer(n, a, true), this._map ? this._update() : this;
      }, removeLayer: function(n) {
        n.off("add remove", this._onLayerChange, this);
        var a = this._getLayer(w(n));
        return a && this._layers.splice(this._layers.indexOf(a), 1), this._map ? this._update() : this;
      }, expand: function() {
        Bt(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var n = this._map.getSize().y - (this._container.offsetTop + 50);
        return n < this._section.clientHeight ? (Bt(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = n + "px") : se(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      }, collapse: function() {
        return se(this._container, "leaflet-control-layers-expanded"), this;
      }, _initLayout: function() {
        var n = "leaflet-control-layers", a = this._container = qt("div", n), l = this.options.collapsed;
        a.setAttribute("aria-haspopup", true), wa(a), Ta(a);
        var d = this._section = qt("section", n + "-list");
        l && (this._map.on("click", this.collapse, this), Rt(a, { mouseenter: this._expandSafely, mouseleave: this.collapse }, this));
        var p = this._layersLink = qt("a", n + "-toggle", a);
        p.href = "#", p.title = "Layers", p.setAttribute("role", "button"), Rt(p, { keydown: function(v) {
          v.keyCode === 13 && this._expandSafely();
        }, click: function(v) {
          ve(v), this._expandSafely();
        } }, this), l || this.expand(), this._baseLayersList = qt("div", n + "-base", d), this._separator = qt("div", n + "-separator", d), this._overlaysList = qt("div", n + "-overlays", d), a.appendChild(d);
      }, _getLayer: function(n) {
        for (var a = 0; a < this._layers.length; a++) if (this._layers[a] && w(this._layers[a].layer) === n) return this._layers[a];
      }, _addLayer: function(n, a, l) {
        this._map && n.on("add remove", this._onLayerChange, this), this._layers.push({ layer: n, name: a, overlay: l }), this.options.sortLayers && this._layers.sort(y(function(d, p) {
          return this.options.sortFunction(d.layer, p.layer, d.name, p.name);
        }, this)), this.options.autoZIndex && n.setZIndex && (this._lastZIndex++, n.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      }, _update: function() {
        if (!this._container) return this;
        Ue(this._baseLayersList), Ue(this._overlaysList), this._layerControlInputs = [];
        var n, a, l, d, p = 0;
        for (l = 0; l < this._layers.length; l++) d = this._layers[l], this._addItem(d), a = a || d.overlay, n = n || !d.overlay, p += d.overlay ? 0 : 1;
        return this.options.hideSingleBase && (n = n && p > 1, this._baseLayersList.style.display = n ? "" : "none"), this._separator.style.display = a && n ? "" : "none", this;
      }, _onLayerChange: function(n) {
        this._handlingClick || this._update();
        var a = this._getLayer(w(n.target)), l = a.overlay ? n.type === "add" ? "overlayadd" : "overlayremove" : n.type === "add" ? "baselayerchange" : null;
        l && this._map.fire(l, a);
      }, _createRadioElement: function(n, a) {
        var l = '<input type="radio" class="leaflet-control-layers-selector" name="' + n + '"' + (a ? ' checked="checked"' : "") + "/>", d = document.createElement("div");
        return d.innerHTML = l, d.firstChild;
      }, _addItem: function(n) {
        var a = document.createElement("label"), l = this._map.hasLayer(n.layer), d;
        n.overlay ? (d = document.createElement("input"), d.type = "checkbox", d.className = "leaflet-control-layers-selector", d.defaultChecked = l) : d = this._createRadioElement("leaflet-base-layers_" + w(this), l), this._layerControlInputs.push(d), d.layerId = w(n.layer), Rt(d, "click", this._onInputClick, this);
        var p = document.createElement("span");
        p.innerHTML = " " + n.name;
        var v = document.createElement("span");
        a.appendChild(v), v.appendChild(d), v.appendChild(p);
        var E = n.overlay ? this._overlaysList : this._baseLayersList;
        return E.appendChild(a), this._checkDisabledLayers(), a;
      }, _onInputClick: function() {
        if (!this._preventClick) {
          var n = this._layerControlInputs, a, l, d = [], p = [];
          this._handlingClick = true;
          for (var v = n.length - 1; v >= 0; v--) a = n[v], l = this._getLayer(a.layerId).layer, a.checked ? d.push(l) : a.checked || p.push(l);
          for (v = 0; v < p.length; v++) this._map.hasLayer(p[v]) && this._map.removeLayer(p[v]);
          for (v = 0; v < d.length; v++) this._map.hasLayer(d[v]) || this._map.addLayer(d[v]);
          this._handlingClick = false, this._refocusOnMap();
        }
      }, _checkDisabledLayers: function() {
        for (var n = this._layerControlInputs, a, l, d = this._map.getZoom(), p = n.length - 1; p >= 0; p--) a = n[p], l = this._getLayer(a.layerId).layer, a.disabled = l.options.minZoom !== void 0 && d < l.options.minZoom || l.options.maxZoom !== void 0 && d > l.options.maxZoom;
      }, _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      }, _expandSafely: function() {
        var n = this._section;
        this._preventClick = true, Rt(n, "click", ve), this.expand();
        var a = this;
        setTimeout(function() {
          Vt(n, "click", ve), a._preventClick = false;
        });
      } }), Oc = function(n, a, l) {
        return new Ll(n, a, l);
      }, os = Je.extend({ options: { position: "topleft", zoomInText: '<span aria-hidden="true">+</span>', zoomInTitle: "Zoom in", zoomOutText: '<span aria-hidden="true">&#x2212;</span>', zoomOutTitle: "Zoom out" }, onAdd: function(n) {
        var a = "leaflet-control-zoom", l = qt("div", a + " leaflet-bar"), d = this.options;
        return this._zoomInButton = this._createButton(d.zoomInText, d.zoomInTitle, a + "-in", l, this._zoomIn), this._zoomOutButton = this._createButton(d.zoomOutText, d.zoomOutTitle, a + "-out", l, this._zoomOut), this._updateDisabled(), n.on("zoomend zoomlevelschange", this._updateDisabled, this), l;
      }, onRemove: function(n) {
        n.off("zoomend zoomlevelschange", this._updateDisabled, this);
      }, disable: function() {
        return this._disabled = true, this._updateDisabled(), this;
      }, enable: function() {
        return this._disabled = false, this._updateDisabled(), this;
      }, _zoomIn: function(n) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (n.shiftKey ? 3 : 1));
      }, _zoomOut: function(n) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (n.shiftKey ? 3 : 1));
      }, _createButton: function(n, a, l, d, p) {
        var v = qt("a", l, d);
        return v.innerHTML = n, v.href = "#", v.title = a, v.setAttribute("role", "button"), v.setAttribute("aria-label", a), wa(v), Rt(v, "click", jn), Rt(v, "click", p, this), Rt(v, "click", this._refocusOnMap, this), v;
      }, _updateDisabled: function() {
        var n = this._map, a = "leaflet-disabled";
        se(this._zoomInButton, a), se(this._zoomOutButton, a), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || n._zoom === n.getMinZoom()) && (Bt(this._zoomOutButton, a), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || n._zoom === n.getMaxZoom()) && (Bt(this._zoomInButton, a), this._zoomInButton.setAttribute("aria-disabled", "true"));
      } });
      Zt.mergeOptions({ zoomControl: true }), Zt.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new os(), this.addControl(this.zoomControl));
      });
      var ss = function(n) {
        return new os(n);
      }, zl = Je.extend({ options: { position: "bottomleft", maxWidth: 100, metric: true, imperial: true }, onAdd: function(n) {
        var a = "leaflet-control-scale", l = qt("div", a), d = this.options;
        return this._addScales(d, a + "-line", l), n.on(d.updateWhenIdle ? "moveend" : "move", this._update, this), n.whenReady(this._update, this), l;
      }, onRemove: function(n) {
        n.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      }, _addScales: function(n, a, l) {
        n.metric && (this._mScale = qt("div", a, l)), n.imperial && (this._iScale = qt("div", a, l));
      }, _update: function() {
        var n = this._map, a = n.getSize().y / 2, l = n.distance(n.containerPointToLatLng([0, a]), n.containerPointToLatLng([this.options.maxWidth, a]));
        this._updateScales(l);
      }, _updateScales: function(n) {
        this.options.metric && n && this._updateMetric(n), this.options.imperial && n && this._updateImperial(n);
      }, _updateMetric: function(n) {
        var a = this._getRoundNum(n), l = a < 1e3 ? a + " m" : a / 1e3 + " km";
        this._updateScale(this._mScale, l, a / n);
      }, _updateImperial: function(n) {
        var a = n * 3.2808399, l, d, p;
        a > 5280 ? (l = a / 5280, d = this._getRoundNum(l), this._updateScale(this._iScale, d + " mi", d / l)) : (p = this._getRoundNum(a), this._updateScale(this._iScale, p + " ft", p / a));
      }, _updateScale: function(n, a, l) {
        n.style.width = Math.round(this.options.maxWidth * l) + "px", n.innerHTML = a;
      }, _getRoundNum: function(n) {
        var a = Math.pow(10, (Math.floor(n) + "").length - 1), l = n / a;
        return l = l >= 10 ? 10 : l >= 5 ? 5 : l >= 3 ? 3 : l >= 2 ? 2 : 1, a * l;
      } }), Lc = function(n) {
        return new zl(n);
      }, zc = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', ls = Je.extend({ options: { position: "bottomright", prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (wt.inlineSvg ? zc + " " : "") + "Leaflet</a>" }, initialize: function(n) {
        z(this, n), this._attributions = {};
      }, onAdd: function(n) {
        n.attributionControl = this, this._container = qt("div", "leaflet-control-attribution"), wa(this._container);
        for (var a in n._layers) n._layers[a].getAttribution && this.addAttribution(n._layers[a].getAttribution());
        return this._update(), n.on("layeradd", this._addAttribution, this), this._container;
      }, onRemove: function(n) {
        n.off("layeradd", this._addAttribution, this);
      }, _addAttribution: function(n) {
        n.layer.getAttribution && (this.addAttribution(n.layer.getAttribution()), n.layer.once("remove", function() {
          this.removeAttribution(n.layer.getAttribution());
        }, this));
      }, setPrefix: function(n) {
        return this.options.prefix = n, this._update(), this;
      }, addAttribution: function(n) {
        return n ? (this._attributions[n] || (this._attributions[n] = 0), this._attributions[n]++, this._update(), this) : this;
      }, removeAttribution: function(n) {
        return n ? (this._attributions[n] && (this._attributions[n]--, this._update()), this) : this;
      }, _update: function() {
        if (this._map) {
          var n = [];
          for (var a in this._attributions) this._attributions[a] && n.push(a);
          var l = [];
          this.options.prefix && l.push(this.options.prefix), n.length && l.push(n.join(", ")), this._container.innerHTML = l.join(' <span aria-hidden="true">|</span> ');
        }
      } });
      Zt.mergeOptions({ attributionControl: true }), Zt.addInitHook(function() {
        this.options.attributionControl && new ls().addTo(this);
      });
      var Rc = function(n) {
        return new ls(n);
      };
      Je.Layers = Ll, Je.Zoom = os, Je.Scale = zl, Je.Attribution = ls, Ca.layers = Oc, Ca.zoom = ss, Ca.scale = Lc, Ca.attribution = Rc;
      var bn = ot.extend({ initialize: function(n) {
        this._map = n;
      }, enable: function() {
        return this._enabled ? this : (this._enabled = true, this.addHooks(), this);
      }, disable: function() {
        return this._enabled ? (this._enabled = false, this.removeHooks(), this) : this;
      }, enabled: function() {
        return !!this._enabled;
      } });
      bn.addTo = function(n, a) {
        return n.addHandler(a, this), this;
      };
      var Bc = { Events: N }, Rl = wt.touch ? "touchstart mousedown" : "mousedown", gi = st.extend({ options: { clickTolerance: 3 }, initialize: function(n, a, l, d) {
        z(this, d), this._element = n, this._dragStartTarget = a || n, this._preventOutline = l;
      }, enable: function() {
        this._enabled || (Rt(this._dragStartTarget, Rl, this._onDown, this), this._enabled = true);
      }, disable: function() {
        this._enabled && (gi._dragging === this && this.finishDrag(true), Vt(this._dragStartTarget, Rl, this._onDown, this), this._enabled = false, this._moved = false);
      }, _onDown: function(n) {
        if (this._enabled && (this._moved = false, !ya(this._element, "leaflet-zoom-anim"))) {
          if (n.touches && n.touches.length !== 1) {
            gi._dragging === this && this.finishDrag();
            return;
          }
          if (!(gi._dragging || n.shiftKey || n.which !== 1 && n.button !== 1 && !n.touches) && (gi._dragging = this, this._preventOutline && gr(this._element), pr(), Zn(), !this._moving)) {
            this.fire("down");
            var a = n.touches ? n.touches[0] : n, l = Ui(this._element);
            this._startPoint = new F(a.clientX, a.clientY), this._startPos = mi(this._element), this._parentScale = pi(l);
            var d = n.type === "mousedown";
            Rt(document, d ? "mousemove" : "touchmove", this._onMove, this), Rt(document, d ? "mouseup" : "touchend touchcancel", this._onUp, this);
          }
        }
      }, _onMove: function(n) {
        if (this._enabled) {
          if (n.touches && n.touches.length > 1) {
            this._moved = true;
            return;
          }
          var a = n.touches && n.touches.length === 1 ? n.touches[0] : n, l = new F(a.clientX, a.clientY)._subtract(this._startPoint);
          !l.x && !l.y || Math.abs(l.x) + Math.abs(l.y) < this.options.clickTolerance || (l.x /= this._parentScale.x, l.y /= this._parentScale.y, ve(n), this._moved || (this.fire("dragstart"), this._moved = true, Bt(document.body, "leaflet-dragging"), this._lastTarget = n.target || n.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), Bt(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(l), this._moving = true, this._lastEvent = n, this._updatePosition());
        }
      }, _updatePosition: function() {
        var n = { originalEvent: this._lastEvent };
        this.fire("predrag", n), me(this._element, this._newPos), this.fire("drag", n);
      }, _onUp: function() {
        this._enabled && this.finishDrag();
      }, finishDrag: function(n) {
        se(document.body, "leaflet-dragging"), this._lastTarget && (se(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), Vt(document, "mousemove touchmove", this._onMove, this), Vt(document, "mouseup touchend touchcancel", this._onUp, this), as(), mr();
        var a = this._moved && this._moving;
        this._moving = false, gi._dragging = false, a && this.fire("dragend", { noInertia: n, distance: this._newPos.distanceTo(this._startPos) });
      } });
      function Bl(n, a, l) {
        var d, p = [1, 4, 2, 8], v, E, D, Y, tt, gt, bt, Tt;
        for (v = 0, gt = n.length; v < gt; v++) n[v]._code = Yi(n[v], a);
        for (D = 0; D < 4; D++) {
          for (bt = p[D], d = [], v = 0, gt = n.length, E = gt - 1; v < gt; E = v++) Y = n[v], tt = n[E], Y._code & bt ? tt._code & bt || (Tt = ao(tt, Y, bt, a, l), Tt._code = Yi(Tt, a), d.push(Tt)) : (tt._code & bt && (Tt = ao(tt, Y, bt, a, l), Tt._code = Yi(Tt, a), d.push(Tt)), d.push(Y));
          n = d;
        }
        return n;
      }
      function io(n, a) {
        var l, d, p, v, E, D, Y, tt, gt;
        if (!n || n.length === 0) throw new Error("latlngs not passed");
        Ne(n) || (console.warn("latlngs are not flat! Only the first ring will be used"), n = n[0]);
        var bt = ut([0, 0]), Tt = dt(n), zt = Tt.getNorthWest().distanceTo(Tt.getSouthWest()) * Tt.getNorthEast().distanceTo(Tt.getNorthWest());
        zt < 1700 && (bt = us(n));
        var le = n.length, pe = [];
        for (l = 0; l < le; l++) {
          var ke = ut(n[l]);
          pe.push(a.project(ut([ke.lat - bt.lat, ke.lng - bt.lng])));
        }
        for (D = Y = tt = 0, l = 0, d = le - 1; l < le; d = l++) p = pe[l], v = pe[d], E = p.y * v.x - v.y * p.x, Y += (p.x + v.x) * E, tt += (p.y + v.y) * E, D += E * 3;
        D === 0 ? gt = pe[0] : gt = [Y / D, tt / D];
        var dn = a.unproject(C(gt));
        return ut([dn.lat + bt.lat, dn.lng + bt.lng]);
      }
      function us(n) {
        for (var a = 0, l = 0, d = 0, p = 0; p < n.length; p++) {
          var v = ut(n[p]);
          a += v.lat, l += v.lng, d++;
        }
        return ut([a / d, l / d]);
      }
      var Dc = { __proto__: null, clipPolygon: Bl, polygonCenter: io, centroid: us };
      function Dl(n, a) {
        if (!a || !n.length) return n.slice();
        var l = a * a;
        return n = Pc(n, l), n = kc(n, l), n;
      }
      function cs(n, a, l) {
        return Math.sqrt(Vi(n, a, l, true));
      }
      function Nc(n, a, l) {
        return Vi(n, a, l);
      }
      function kc(n, a) {
        var l = n.length, d = typeof Uint8Array < "u" ? Uint8Array : Array, p = new d(l);
        p[0] = p[l - 1] = 1, fs(n, p, a, 0, l - 1);
        var v, E = [];
        for (v = 0; v < l; v++) p[v] && E.push(n[v]);
        return E;
      }
      function fs(n, a, l, d, p) {
        var v = 0, E, D, Y;
        for (D = d + 1; D <= p - 1; D++) Y = Vi(n[D], n[d], n[p], true), Y > v && (E = D, v = Y);
        v > l && (a[E] = 1, fs(n, a, l, d, E), fs(n, a, l, E, p));
      }
      function Pc(n, a) {
        for (var l = [n[0]], d = 1, p = 0, v = n.length; d < v; d++) Zc(n[d], n[p]) > a && (l.push(n[d]), p = d);
        return p < v - 1 && l.push(n[v - 1]), l;
      }
      var Nl;
      function kl(n, a, l, d, p) {
        var v = d ? Nl : Yi(n, l), E = Yi(a, l), D, Y, tt;
        for (Nl = E; ; ) {
          if (!(v | E)) return [n, a];
          if (v & E) return false;
          D = v || E, Y = ao(n, a, D, l, p), tt = Yi(Y, l), D === v ? (n = Y, v = tt) : (a = Y, E = tt);
        }
      }
      function ao(n, a, l, d, p) {
        var v = a.x - n.x, E = a.y - n.y, D = d.min, Y = d.max, tt, gt;
        return l & 8 ? (tt = n.x + v * (Y.y - n.y) / E, gt = Y.y) : l & 4 ? (tt = n.x + v * (D.y - n.y) / E, gt = D.y) : l & 2 ? (tt = Y.x, gt = n.y + E * (Y.x - n.x) / v) : l & 1 && (tt = D.x, gt = n.y + E * (D.x - n.x) / v), new F(tt, gt, p);
      }
      function Yi(n, a) {
        var l = 0;
        return n.x < a.min.x ? l |= 1 : n.x > a.max.x && (l |= 2), n.y < a.min.y ? l |= 4 : n.y > a.max.y && (l |= 8), l;
      }
      function Zc(n, a) {
        var l = a.x - n.x, d = a.y - n.y;
        return l * l + d * d;
      }
      function Vi(n, a, l, d) {
        var p = a.x, v = a.y, E = l.x - p, D = l.y - v, Y = E * E + D * D, tt;
        return Y > 0 && (tt = ((n.x - p) * E + (n.y - v) * D) / Y, tt > 1 ? (p = l.x, v = l.y) : tt > 0 && (p += E * tt, v += D * tt)), E = n.x - p, D = n.y - v, d ? E * E + D * D : new F(p, v);
      }
      function Ne(n) {
        return !nt(n[0]) || typeof n[0][0] != "object" && typeof n[0][0] < "u";
      }
      function Pl(n) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Ne(n);
      }
      function hs(n, a) {
        var l, d, p, v, E, D, Y, tt;
        if (!n || n.length === 0) throw new Error("latlngs not passed");
        Ne(n) || (console.warn("latlngs are not flat! Only the first ring will be used"), n = n[0]);
        var gt = ut([0, 0]), bt = dt(n), Tt = bt.getNorthWest().distanceTo(bt.getSouthWest()) * bt.getNorthEast().distanceTo(bt.getNorthWest());
        Tt < 1700 && (gt = us(n));
        var zt = n.length, le = [];
        for (l = 0; l < zt; l++) {
          var pe = ut(n[l]);
          le.push(a.project(ut([pe.lat - gt.lat, pe.lng - gt.lng])));
        }
        for (l = 0, d = 0; l < zt - 1; l++) d += le[l].distanceTo(le[l + 1]) / 2;
        if (d === 0) tt = le[0];
        else for (l = 0, v = 0; l < zt - 1; l++) if (E = le[l], D = le[l + 1], p = E.distanceTo(D), v += p, v > d) {
          Y = (v - d) / p, tt = [D.x - Y * (D.x - E.x), D.y - Y * (D.y - E.y)];
          break;
        }
        var ke = a.unproject(C(tt));
        return ut([ke.lat + gt.lat, ke.lng + gt.lng]);
      }
      var Zl = { __proto__: null, simplify: Dl, pointToSegmentDistance: cs, closestPointOnSegment: Nc, clipSegment: kl, _getEdgeIntersection: ao, _getBitCode: Yi, _sqClosestPointOnSegment: Vi, isFlat: Ne, _flat: Pl, polylineCenter: hs }, ro = { project: function(n) {
        return new F(n.lng, n.lat);
      }, unproject: function(n) {
        return new vt(n.y, n.x);
      }, bounds: new $([-180, -90], [180, 90]) }, oo = { R: 6378137, R_MINOR: 6356752314245179e-9, bounds: new $([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]), project: function(n) {
        var a = Math.PI / 180, l = this.R, d = n.lat * a, p = this.R_MINOR / l, v = Math.sqrt(1 - p * p), E = v * Math.sin(d), D = Math.tan(Math.PI / 4 - d / 2) / Math.pow((1 - E) / (1 + E), v / 2);
        return d = -l * Math.log(Math.max(D, 1e-10)), new F(n.lng * a * l, d);
      }, unproject: function(n) {
        for (var a = 180 / Math.PI, l = this.R, d = this.R_MINOR / l, p = Math.sqrt(1 - d * d), v = Math.exp(-n.y / l), E = Math.PI / 2 - 2 * Math.atan(v), D = 0, Y = 0.1, tt; D < 15 && Math.abs(Y) > 1e-7; D++) tt = p * Math.sin(E), tt = Math.pow((1 - tt) / (1 + tt), p / 2), Y = Math.PI / 2 - 2 * Math.atan(v * tt) - E, E += Y;
        return new vt(E * a, n.x * a / l);
      } }, Hl = { __proto__: null, LonLat: ro, Mercator: oo, SphericalMercator: Fn }, Ea = m({}, kt, { code: "EPSG:3395", projection: oo, transformation: function() {
        var n = 0.5 / (Math.PI * oo.R);
        return un(n, 0.5, -n, 0.5);
      }() }), Ul = m({}, kt, { code: "EPSG:4326", projection: ro, transformation: un(1 / 180, 1, -1 / 180, 0.5) }), Hc = m({}, Yt, { projection: ro, transformation: un(1, 0, -1, 0), scale: function(n) {
        return Math.pow(2, n);
      }, zoom: function(n) {
        return Math.log(n) / Math.LN2;
      }, distance: function(n, a) {
        var l = a.lng - n.lng, d = a.lat - n.lat;
        return Math.sqrt(l * l + d * d);
      }, infinite: true });
      Yt.Earth = kt, Yt.EPSG3395 = Ea, Yt.EPSG3857 = Nn, Yt.EPSG900913 = kn, Yt.EPSG4326 = Ul, Yt.Simple = Hc;
      var Sn = st.extend({ options: { pane: "overlayPane", attribution: null, bubblingMouseEvents: true }, addTo: function(n) {
        return n.addLayer(this), this;
      }, remove: function() {
        return this.removeFrom(this._map || this._mapToAdd);
      }, removeFrom: function(n) {
        return n && n.removeLayer(this), this;
      }, getPane: function(n) {
        return this._map.getPane(n ? this.options[n] || n : this.options.pane);
      }, addInteractiveTarget: function(n) {
        return this._map._targets[w(n)] = this, this;
      }, removeInteractiveTarget: function(n) {
        return delete this._map._targets[w(n)], this;
      }, getAttribution: function() {
        return this.options.attribution;
      }, _layerAdd: function(n) {
        var a = n.target;
        if (a.hasLayer(this)) {
          if (this._map = a, this._zoomAnimated = a._zoomAnimated, this.getEvents) {
            var l = this.getEvents();
            a.on(l, this), this.once("remove", function() {
              a.off(l, this);
            }, this);
          }
          this.onAdd(a), this.fire("add"), a.fire("layeradd", { layer: this });
        }
      } });
      Zt.include({ addLayer: function(n) {
        if (!n._layerAdd) throw new Error("The provided object is not a Layer.");
        var a = w(n);
        return this._layers[a] ? this : (this._layers[a] = n, n._mapToAdd = this, n.beforeAdd && n.beforeAdd(this), this.whenReady(n._layerAdd, n), this);
      }, removeLayer: function(n) {
        var a = w(n);
        return this._layers[a] ? (this._loaded && n.onRemove(this), delete this._layers[a], this._loaded && (this.fire("layerremove", { layer: n }), n.fire("remove")), n._map = n._mapToAdd = null, this) : this;
      }, hasLayer: function(n) {
        return w(n) in this._layers;
      }, eachLayer: function(n, a) {
        for (var l in this._layers) n.call(a, this._layers[l]);
        return this;
      }, _addLayers: function(n) {
        n = n ? nt(n) ? n : [n] : [];
        for (var a = 0, l = n.length; a < l; a++) this.addLayer(n[a]);
      }, _addZoomLimit: function(n) {
        (!isNaN(n.options.maxZoom) || !isNaN(n.options.minZoom)) && (this._zoomBoundLayers[w(n)] = n, this._updateZoomLevels());
      }, _removeZoomLimit: function(n) {
        var a = w(n);
        this._zoomBoundLayers[a] && (delete this._zoomBoundLayers[a], this._updateZoomLevels());
      }, _updateZoomLevels: function() {
        var n = 1 / 0, a = -1 / 0, l = this._getZoomSpan();
        for (var d in this._zoomBoundLayers) {
          var p = this._zoomBoundLayers[d].options;
          n = p.minZoom === void 0 ? n : Math.min(n, p.minZoom), a = p.maxZoom === void 0 ? a : Math.max(a, p.maxZoom);
        }
        this._layersMaxZoom = a === -1 / 0 ? void 0 : a, this._layersMinZoom = n === 1 / 0 ? void 0 : n, l !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      } });
      var $i = Sn.extend({ initialize: function(n, a) {
        z(this, a), this._layers = {};
        var l, d;
        if (n) for (l = 0, d = n.length; l < d; l++) this.addLayer(n[l]);
      }, addLayer: function(n) {
        var a = this.getLayerId(n);
        return this._layers[a] = n, this._map && this._map.addLayer(n), this;
      }, removeLayer: function(n) {
        var a = n in this._layers ? n : this.getLayerId(n);
        return this._map && this._layers[a] && this._map.removeLayer(this._layers[a]), delete this._layers[a], this;
      }, hasLayer: function(n) {
        var a = typeof n == "number" ? n : this.getLayerId(n);
        return a in this._layers;
      }, clearLayers: function() {
        return this.eachLayer(this.removeLayer, this);
      }, invoke: function(n) {
        var a = Array.prototype.slice.call(arguments, 1), l, d;
        for (l in this._layers) d = this._layers[l], d[n] && d[n].apply(d, a);
        return this;
      }, onAdd: function(n) {
        this.eachLayer(n.addLayer, n);
      }, onRemove: function(n) {
        this.eachLayer(n.removeLayer, n);
      }, eachLayer: function(n, a) {
        for (var l in this._layers) n.call(a, this._layers[l]);
        return this;
      }, getLayer: function(n) {
        return this._layers[n];
      }, getLayers: function() {
        var n = [];
        return this.eachLayer(n.push, n), n;
      }, setZIndex: function(n) {
        return this.invoke("setZIndex", n);
      }, getLayerId: function(n) {
        return w(n);
      } }), jl = function(n, a) {
        return new $i(n, a);
      }, nn = $i.extend({ addLayer: function(n) {
        return this.hasLayer(n) ? this : (n.addEventParent(this), $i.prototype.addLayer.call(this, n), this.fire("layeradd", { layer: n }));
      }, removeLayer: function(n) {
        return this.hasLayer(n) ? (n in this._layers && (n = this._layers[n]), n.removeEventParent(this), $i.prototype.removeLayer.call(this, n), this.fire("layerremove", { layer: n })) : this;
      }, setStyle: function(n) {
        return this.invoke("setStyle", n);
      }, bringToFront: function() {
        return this.invoke("bringToFront");
      }, bringToBack: function() {
        return this.invoke("bringToBack");
      }, getBounds: function() {
        var n = new at();
        for (var a in this._layers) {
          var l = this._layers[a];
          n.extend(l.getBounds ? l.getBounds() : l.getLatLng());
        }
        return n;
      } }), br = function(n, a) {
        return new nn(n, a);
      }, Ma = ot.extend({ options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: false }, initialize: function(n) {
        z(this, n);
      }, createIcon: function(n) {
        return this._createIcon("icon", n);
      }, createShadow: function(n) {
        return this._createIcon("shadow", n);
      }, _createIcon: function(n, a) {
        var l = this._getIconUrl(n);
        if (!l) {
          if (n === "icon") throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var d = this._createImg(l, a && a.tagName === "IMG" ? a : null);
        return this._setIconStyles(d, n), (this.options.crossOrigin || this.options.crossOrigin === "") && (d.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin), d;
      }, _setIconStyles: function(n, a) {
        var l = this.options, d = l[a + "Size"];
        typeof d == "number" && (d = [d, d]);
        var p = C(d), v = C(a === "shadow" && l.shadowAnchor || l.iconAnchor || p && p.divideBy(2, true));
        n.className = "leaflet-marker-" + a + " " + (l.className || ""), v && (n.style.marginLeft = -v.x + "px", n.style.marginTop = -v.y + "px"), p && (n.style.width = p.x + "px", n.style.height = p.y + "px");
      }, _createImg: function(n, a) {
        return a = a || document.createElement("img"), a.src = n, a;
      }, _getIconUrl: function(n) {
        return wt.retina && this.options[n + "RetinaUrl"] || this.options[n + "Url"];
      } });
      function so(n) {
        return new Ma(n);
      }
      var Aa = Ma.extend({ options: { iconUrl: "marker-icon.png", iconRetinaUrl: "marker-icon-2x.png", shadowUrl: "marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28], shadowSize: [41, 41] }, _getIconUrl: function(n) {
        return typeof Aa.imagePath != "string" && (Aa.imagePath = this._detectIconPath()), (this.options.imagePath || Aa.imagePath) + Ma.prototype._getIconUrl.call(this, n);
      }, _stripUrl: function(n) {
        var a = function(l, d, p) {
          var v = d.exec(l);
          return v && v[p];
        };
        return n = a(n, /^url\((['"])?(.+)\1\)$/, 2), n && a(n, /^(.*)marker-icon\.png$/, 1);
      }, _detectIconPath: function() {
        var n = qt("div", "leaflet-default-icon-path", document.body), a = Zi(n, "background-image") || Zi(n, "backgroundImage");
        if (document.body.removeChild(n), a = this._stripUrl(a), a) return a;
        var l = document.querySelector('link[href$="leaflet.css"]');
        return l ? l.href.substring(0, l.href.length - 11 - 1) : "";
      } }), ds = bn.extend({ initialize: function(n) {
        this._marker = n;
      }, addHooks: function() {
        var n = this._marker._icon;
        this._draggable || (this._draggable = new gi(n, n, true)), this._draggable.on({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).enable(), Bt(n, "leaflet-marker-draggable");
      }, removeHooks: function() {
        this._draggable.off({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).disable(), this._marker._icon && se(this._marker._icon, "leaflet-marker-draggable");
      }, moved: function() {
        return this._draggable && this._draggable._moved;
      }, _adjustPan: function(n) {
        var a = this._marker, l = a._map, d = this._marker.options.autoPanSpeed, p = this._marker.options.autoPanPadding, v = mi(a._icon), E = l.getPixelBounds(), D = l.getPixelOrigin(), Y = it(E.min._subtract(D).add(p), E.max._subtract(D).subtract(p));
        if (!Y.contains(v)) {
          var tt = C((Math.max(Y.max.x, v.x) - Y.max.x) / (E.max.x - Y.max.x) - (Math.min(Y.min.x, v.x) - Y.min.x) / (E.min.x - Y.min.x), (Math.max(Y.max.y, v.y) - Y.max.y) / (E.max.y - Y.max.y) - (Math.min(Y.min.y, v.y) - Y.min.y) / (E.min.y - Y.min.y)).multiplyBy(d);
          l.panBy(tt, { animate: false }), this._draggable._newPos._add(tt), this._draggable._startPos._add(tt), me(a._icon, this._draggable._newPos), this._onDrag(n), this._panRequest = ht(this._adjustPan.bind(this, n));
        }
      }, _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      }, _onPreDrag: function(n) {
        this._marker.options.autoPan && (x(this._panRequest), this._panRequest = ht(this._adjustPan.bind(this, n)));
      }, _onDrag: function(n) {
        var a = this._marker, l = a._shadow, d = mi(a._icon), p = a._map.layerPointToLatLng(d);
        l && me(l, d), a._latlng = p, n.latlng = p, n.oldLatLng = this._oldLatLng, a.fire("move", n).fire("drag", n);
      }, _onDragEnd: function(n) {
        x(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", n);
      } }), Oa = Sn.extend({ options: { icon: new Aa(), interactive: true, keyboard: true, title: "", alt: "Marker", zIndexOffset: 0, opacity: 1, riseOnHover: false, riseOffset: 250, pane: "markerPane", shadowPane: "shadowPane", bubblingMouseEvents: false, autoPanOnFocus: true, draggable: false, autoPan: false, autoPanPadding: [50, 50], autoPanSpeed: 10 }, initialize: function(n, a) {
        z(this, a), this._latlng = ut(n);
      }, onAdd: function(n) {
        this._zoomAnimated = this._zoomAnimated && n.options.markerZoomAnimation, this._zoomAnimated && n.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
      }, onRemove: function(n) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = true, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && n.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
      }, getEvents: function() {
        return { zoom: this.update, viewreset: this.update };
      }, getLatLng: function() {
        return this._latlng;
      }, setLatLng: function(n) {
        var a = this._latlng;
        return this._latlng = ut(n), this.update(), this.fire("move", { oldLatLng: a, latlng: this._latlng });
      }, setZIndexOffset: function(n) {
        return this.options.zIndexOffset = n, this.update();
      }, getIcon: function() {
        return this.options.icon;
      }, setIcon: function(n) {
        return this.options.icon = n, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
      }, getElement: function() {
        return this._icon;
      }, update: function() {
        if (this._icon && this._map) {
          var n = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(n);
        }
        return this;
      }, _initIcon: function() {
        var n = this.options, a = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), l = n.icon.createIcon(this._icon), d = false;
        l !== this._icon && (this._icon && this._removeIcon(), d = true, n.title && (l.title = n.title), l.tagName === "IMG" && (l.alt = n.alt || "")), Bt(l, a), n.keyboard && (l.tabIndex = "0", l.setAttribute("role", "button")), this._icon = l, n.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), this.options.autoPanOnFocus && Rt(l, "focus", this._panOnFocus, this);
        var p = n.icon.createShadow(this._shadow), v = false;
        p !== this._shadow && (this._removeShadow(), v = true), p && (Bt(p, a), p.alt = ""), this._shadow = p, n.opacity < 1 && this._updateOpacity(), d && this.getPane().appendChild(this._icon), this._initInteraction(), p && v && this.getPane(n.shadowPane).appendChild(this._shadow);
      }, _removeIcon: function() {
        this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), this.options.autoPanOnFocus && Vt(this._icon, "focus", this._panOnFocus, this), oe(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      }, _removeShadow: function() {
        this._shadow && oe(this._shadow), this._shadow = null;
      }, _setPos: function(n) {
        this._icon && me(this._icon, n), this._shadow && me(this._shadow, n), this._zIndex = n.y + this.options.zIndexOffset, this._resetZIndex();
      }, _updateZIndex: function(n) {
        this._icon && (this._icon.style.zIndex = this._zIndex + n);
      }, _animateZoom: function(n) {
        var a = this._map._latLngToNewLayerPoint(this._latlng, n.zoom, n.center).round();
        this._setPos(a);
      }, _initInteraction: function() {
        if (this.options.interactive && (Bt(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), ds)) {
          var n = this.options.draggable;
          this.dragging && (n = this.dragging.enabled(), this.dragging.disable()), this.dragging = new ds(this), n && this.dragging.enable();
        }
      }, setOpacity: function(n) {
        return this.options.opacity = n, this._map && this._updateOpacity(), this;
      }, _updateOpacity: function() {
        var n = this.options.opacity;
        this._icon && We(this._icon, n), this._shadow && We(this._shadow, n);
      }, _bringToFront: function() {
        this._updateZIndex(this.options.riseOffset);
      }, _resetZIndex: function() {
        this._updateZIndex(0);
      }, _panOnFocus: function() {
        var n = this._map;
        if (n) {
          var a = this.options.icon.options, l = a.iconSize ? C(a.iconSize) : C(0, 0), d = a.iconAnchor ? C(a.iconAnchor) : C(0, 0);
          n.panInside(this._latlng, { paddingTopLeft: d, paddingBottomRight: l.subtract(d) });
        }
      }, _getPopupAnchor: function() {
        return this.options.icon.options.popupAnchor;
      }, _getTooltipAnchor: function() {
        return this.options.icon.options.tooltipAnchor;
      } });
      function ms(n, a) {
        return new Oa(n, a);
      }
      var ii = Sn.extend({ options: { stroke: true, color: "#3388ff", weight: 3, opacity: 1, lineCap: "round", lineJoin: "round", dashArray: null, dashOffset: null, fill: false, fillColor: null, fillOpacity: 0.2, fillRule: "evenodd", interactive: true, bubblingMouseEvents: true }, beforeAdd: function(n) {
        this._renderer = n.getRenderer(this);
      }, onAdd: function() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      }, onRemove: function() {
        this._renderer._removePath(this);
      }, redraw: function() {
        return this._map && this._renderer._updatePath(this), this;
      }, setStyle: function(n) {
        return z(this, n), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && n && Object.prototype.hasOwnProperty.call(n, "weight") && this._updateBounds()), this;
      }, bringToFront: function() {
        return this._renderer && this._renderer._bringToFront(this), this;
      }, bringToBack: function() {
        return this._renderer && this._renderer._bringToBack(this), this;
      }, getElement: function() {
        return this._path;
      }, _reset: function() {
        this._project(), this._update();
      }, _clickTolerance: function() {
        return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
      } }), Sr = ii.extend({ options: { fill: true, radius: 10 }, initialize: function(n, a) {
        z(this, a), this._latlng = ut(n), this._radius = this.options.radius;
      }, setLatLng: function(n) {
        var a = this._latlng;
        return this._latlng = ut(n), this.redraw(), this.fire("move", { oldLatLng: a, latlng: this._latlng });
      }, getLatLng: function() {
        return this._latlng;
      }, setRadius: function(n) {
        return this.options.radius = this._radius = n, this.redraw();
      }, getRadius: function() {
        return this._radius;
      }, setStyle: function(n) {
        var a = n && n.radius || this._radius;
        return ii.prototype.setStyle.call(this, n), this.setRadius(a), this;
      }, _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      }, _updateBounds: function() {
        var n = this._radius, a = this._radiusY || n, l = this._clickTolerance(), d = [n + l, a + l];
        this._pxBounds = new $(this._point.subtract(d), this._point.add(d));
      }, _update: function() {
        this._map && this._updatePath();
      }, _updatePath: function() {
        this._renderer._updateCircle(this);
      }, _empty: function() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      }, _containsPoint: function(n) {
        return n.distanceTo(this._point) <= this._radius + this._clickTolerance();
      } });
      function ql(n, a) {
        return new Sr(n, a);
      }
      var ps = Sr.extend({ initialize: function(n, a, l) {
        if (typeof a == "number" && (a = m({}, l, { radius: a })), z(this, a), this._latlng = ut(n), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      }, setRadius: function(n) {
        return this._mRadius = n, this.redraw();
      }, getRadius: function() {
        return this._mRadius;
      }, getBounds: function() {
        var n = [this._radius, this._radiusY || this._radius];
        return new at(this._map.layerPointToLatLng(this._point.subtract(n)), this._map.layerPointToLatLng(this._point.add(n)));
      }, setStyle: ii.prototype.setStyle, _project: function() {
        var n = this._latlng.lng, a = this._latlng.lat, l = this._map, d = l.options.crs;
        if (d.distance === kt.distance) {
          var p = Math.PI / 180, v = this._mRadius / kt.R / p, E = l.project([a + v, n]), D = l.project([a - v, n]), Y = E.add(D).divideBy(2), tt = l.unproject(Y).lat, gt = Math.acos((Math.cos(v * p) - Math.sin(a * p) * Math.sin(tt * p)) / (Math.cos(a * p) * Math.cos(tt * p))) / p;
          (isNaN(gt) || gt === 0) && (gt = v / Math.cos(Math.PI / 180 * a)), this._point = Y.subtract(l.getPixelOrigin()), this._radius = isNaN(gt) ? 0 : Y.x - l.project([tt, n - gt]).x, this._radiusY = Y.y - E.y;
        } else {
          var bt = d.unproject(d.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = l.latLngToLayerPoint(this._latlng), this._radius = this._point.x - l.latLngToLayerPoint(bt).x;
        }
        this._updateBounds();
      } });
      function Uc(n, a, l) {
        return new ps(n, a, l);
      }
      var ai = ii.extend({ options: { smoothFactor: 1, noClip: false }, initialize: function(n, a) {
        z(this, a), this._setLatLngs(n);
      }, getLatLngs: function() {
        return this._latlngs;
      }, setLatLngs: function(n) {
        return this._setLatLngs(n), this.redraw();
      }, isEmpty: function() {
        return !this._latlngs.length;
      }, closestLayerPoint: function(n) {
        for (var a = 1 / 0, l = null, d = Vi, p, v, E = 0, D = this._parts.length; E < D; E++) for (var Y = this._parts[E], tt = 1, gt = Y.length; tt < gt; tt++) {
          p = Y[tt - 1], v = Y[tt];
          var bt = d(n, p, v, true);
          bt < a && (a = bt, l = d(n, p, v));
        }
        return l && (l.distance = Math.sqrt(a)), l;
      }, getCenter: function() {
        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
        return hs(this._defaultShape(), this._map.options.crs);
      }, getBounds: function() {
        return this._bounds;
      }, addLatLng: function(n, a) {
        return a = a || this._defaultShape(), n = ut(n), a.push(n), this._bounds.extend(n), this.redraw();
      }, _setLatLngs: function(n) {
        this._bounds = new at(), this._latlngs = this._convertLatLngs(n);
      }, _defaultShape: function() {
        return Ne(this._latlngs) ? this._latlngs : this._latlngs[0];
      }, _convertLatLngs: function(n) {
        for (var a = [], l = Ne(n), d = 0, p = n.length; d < p; d++) l ? (a[d] = ut(n[d]), this._bounds.extend(a[d])) : a[d] = this._convertLatLngs(n[d]);
        return a;
      }, _project: function() {
        var n = new $();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, n), this._bounds.isValid() && n.isValid() && (this._rawPxBounds = n, this._updateBounds());
      }, _updateBounds: function() {
        var n = this._clickTolerance(), a = new F(n, n);
        this._rawPxBounds && (this._pxBounds = new $([this._rawPxBounds.min.subtract(a), this._rawPxBounds.max.add(a)]));
      }, _projectLatlngs: function(n, a, l) {
        var d = n[0] instanceof vt, p = n.length, v, E;
        if (d) {
          for (E = [], v = 0; v < p; v++) E[v] = this._map.latLngToLayerPoint(n[v]), l.extend(E[v]);
          a.push(E);
        } else for (v = 0; v < p; v++) this._projectLatlngs(n[v], a, l);
      }, _clipPoints: function() {
        var n = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(n))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var a = this._parts, l, d, p, v, E, D, Y;
          for (l = 0, p = 0, v = this._rings.length; l < v; l++) for (Y = this._rings[l], d = 0, E = Y.length; d < E - 1; d++) D = kl(Y[d], Y[d + 1], n, d, true), D && (a[p] = a[p] || [], a[p].push(D[0]), (D[1] !== Y[d + 1] || d === E - 2) && (a[p].push(D[1]), p++));
        }
      }, _simplifyPoints: function() {
        for (var n = this._parts, a = this.options.smoothFactor, l = 0, d = n.length; l < d; l++) n[l] = Dl(n[l], a);
      }, _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      }, _updatePath: function() {
        this._renderer._updatePoly(this);
      }, _containsPoint: function(n, a) {
        var l, d, p, v, E, D, Y = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(n)) return false;
        for (l = 0, v = this._parts.length; l < v; l++) for (D = this._parts[l], d = 0, E = D.length, p = E - 1; d < E; p = d++) if (!(!a && d === 0) && cs(n, D[p], D[d]) <= Y) return true;
        return false;
      } });
      function jc(n, a) {
        return new ai(n, a);
      }
      ai._flat = Pl;
      var La = ai.extend({ options: { fill: true }, isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      }, getCenter: function() {
        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
        return io(this._defaultShape(), this._map.options.crs);
      }, _convertLatLngs: function(n) {
        var a = ai.prototype._convertLatLngs.call(this, n), l = a.length;
        return l >= 2 && a[0] instanceof vt && a[0].equals(a[l - 1]) && a.pop(), a;
      }, _setLatLngs: function(n) {
        ai.prototype._setLatLngs.call(this, n), Ne(this._latlngs) && (this._latlngs = [this._latlngs]);
      }, _defaultShape: function() {
        return Ne(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      }, _clipPoints: function() {
        var n = this._renderer._bounds, a = this.options.weight, l = new F(a, a);
        if (n = new $(n.min.subtract(l), n.max.add(l)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(n))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var d = 0, p = this._rings.length, v; d < p; d++) v = Bl(this._rings[d], n, true), v.length && this._parts.push(v);
        }
      }, _updatePath: function() {
        this._renderer._updatePoly(this, true);
      }, _containsPoint: function(n) {
        var a = false, l, d, p, v, E, D, Y, tt;
        if (!this._pxBounds || !this._pxBounds.contains(n)) return false;
        for (v = 0, Y = this._parts.length; v < Y; v++) for (l = this._parts[v], E = 0, tt = l.length, D = tt - 1; E < tt; D = E++) d = l[E], p = l[D], d.y > n.y != p.y > n.y && n.x < (p.x - d.x) * (n.y - d.y) / (p.y - d.y) + d.x && (a = !a);
        return a || ai.prototype._containsPoint.call(this, n, true);
      } });
      function an(n, a) {
        return new La(n, a);
      }
      var rn = nn.extend({ initialize: function(n, a) {
        z(this, a), this._layers = {}, n && this.addData(n);
      }, addData: function(n) {
        var a = nt(n) ? n : n.features, l, d, p;
        if (a) {
          for (l = 0, d = a.length; l < d; l++) p = a[l], (p.geometries || p.geometry || p.features || p.coordinates) && this.addData(p);
          return this;
        }
        var v = this.options;
        if (v.filter && !v.filter(n)) return this;
        var E = xr(n, v);
        return E ? (E.feature = za(n), E.defaultOptions = E.options, this.resetStyle(E), v.onEachFeature && v.onEachFeature(n, E), this.addLayer(E)) : this;
      }, resetStyle: function(n) {
        return n === void 0 ? this.eachLayer(this.resetStyle, this) : (n.options = m({}, n.defaultOptions), this._setLayerStyle(n, this.options.style), this);
      }, setStyle: function(n) {
        return this.eachLayer(function(a) {
          this._setLayerStyle(a, n);
        }, this);
      }, _setLayerStyle: function(n, a) {
        n.setStyle && (typeof a == "function" && (a = a(n.feature)), n.setStyle(a));
      } });
      function xr(n, a) {
        var l = n.type === "Feature" ? n.geometry : n, d = l ? l.coordinates : null, p = [], v = a && a.pointToLayer, E = a && a.coordsToLatLng || lo, D, Y, tt, gt;
        if (!d && !l) return null;
        switch (l.type) {
          case "Point":
            return D = E(d), gs(v, n, D, a);
          case "MultiPoint":
            for (tt = 0, gt = d.length; tt < gt; tt++) D = E(d[tt]), p.push(gs(v, n, D, a));
            return new nn(p);
          case "LineString":
          case "MultiLineString":
            return Y = Tr(d, l.type === "LineString" ? 0 : 1, E), new ai(Y, a);
          case "Polygon":
          case "MultiPolygon":
            return Y = Tr(d, l.type === "Polygon" ? 1 : 2, E), new La(Y, a);
          case "GeometryCollection":
            for (tt = 0, gt = l.geometries.length; tt < gt; tt++) {
              var bt = xr({ geometry: l.geometries[tt], type: "Feature", properties: n.properties }, a);
              bt && p.push(bt);
            }
            return new nn(p);
          case "FeatureCollection":
            for (tt = 0, gt = l.features.length; tt < gt; tt++) {
              var Tt = xr(l.features[tt], a);
              Tt && p.push(Tt);
            }
            return new nn(p);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function gs(n, a, l, d) {
        return n ? n(a, l) : new Oa(l, d && d.markersInheritOptions && d);
      }
      function lo(n) {
        return new vt(n[1], n[0], n[2]);
      }
      function Tr(n, a, l) {
        for (var d = [], p = 0, v = n.length, E; p < v; p++) E = a ? Tr(n[p], a - 1, l) : (l || lo)(n[p]), d.push(E);
        return d;
      }
      function wr(n, a) {
        return n = ut(n), n.alt !== void 0 ? [k(n.lng, a), k(n.lat, a), k(n.alt, a)] : [k(n.lng, a), k(n.lat, a)];
      }
      function uo(n, a, l, d) {
        for (var p = [], v = 0, E = n.length; v < E; v++) p.push(a ? uo(n[v], Ne(n[v]) ? 0 : a - 1, l, d) : wr(n[v], d));
        return !a && l && p.length > 0 && p.push(p[0].slice()), p;
      }
      function xn(n, a) {
        return n.feature ? m({}, n.feature, { geometry: a }) : za(a);
      }
      function za(n) {
        return n.type === "Feature" || n.type === "FeatureCollection" ? n : { type: "Feature", properties: {}, geometry: n };
      }
      var Xi = { toGeoJSON: function(n) {
        return xn(this, { type: "Point", coordinates: wr(this.getLatLng(), n) });
      } };
      Oa.include(Xi), ps.include(Xi), Sr.include(Xi), ai.include({ toGeoJSON: function(n) {
        var a = !Ne(this._latlngs), l = uo(this._latlngs, a ? 1 : 0, false, n);
        return xn(this, { type: (a ? "Multi" : "") + "LineString", coordinates: l });
      } }), La.include({ toGeoJSON: function(n) {
        var a = !Ne(this._latlngs), l = a && !Ne(this._latlngs[0]), d = uo(this._latlngs, l ? 2 : a ? 1 : 0, true, n);
        return a || (d = [d]), xn(this, { type: (l ? "Multi" : "") + "Polygon", coordinates: d });
      } }), $i.include({ toMultiPoint: function(n) {
        var a = [];
        return this.eachLayer(function(l) {
          a.push(l.toGeoJSON(n).geometry.coordinates);
        }), xn(this, { type: "MultiPoint", coordinates: a });
      }, toGeoJSON: function(n) {
        var a = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (a === "MultiPoint") return this.toMultiPoint(n);
        var l = a === "GeometryCollection", d = [];
        return this.eachLayer(function(p) {
          if (p.toGeoJSON) {
            var v = p.toGeoJSON(n);
            if (l) d.push(v.geometry);
            else {
              var E = za(v);
              E.type === "FeatureCollection" ? d.push.apply(d, E.features) : d.push(E);
            }
          }
        }), l ? xn(this, { geometries: d, type: "GeometryCollection" }) : { type: "FeatureCollection", features: d };
      } });
      function co(n, a) {
        return new rn(n, a);
      }
      var Gl = co, qn = Sn.extend({ options: { opacity: 1, alt: "", interactive: false, crossOrigin: false, errorOverlayUrl: "", zIndex: 1, className: "" }, initialize: function(n, a, l) {
        this._url = n, this._bounds = dt(a), z(this, l);
      }, onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (Bt(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      }, onRemove: function() {
        oe(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      }, setOpacity: function(n) {
        return this.options.opacity = n, this._image && this._updateOpacity(), this;
      }, setStyle: function(n) {
        return n.opacity && this.setOpacity(n.opacity), this;
      }, bringToFront: function() {
        return this._map && Hi(this._image), this;
      }, bringToBack: function() {
        return this._map && _a(this._image), this;
      }, setUrl: function(n) {
        return this._url = n, this._image && (this._image.src = n), this;
      }, setBounds: function(n) {
        return this._bounds = dt(n), this._map && this._reset(), this;
      }, getEvents: function() {
        var n = { zoom: this._reset, viewreset: this._reset };
        return this._zoomAnimated && (n.zoomanim = this._animateZoom), n;
      }, setZIndex: function(n) {
        return this.options.zIndex = n, this._updateZIndex(), this;
      }, getBounds: function() {
        return this._bounds;
      }, getElement: function() {
        return this._image;
      }, _initImage: function() {
        var n = this._url.tagName === "IMG", a = this._image = n ? this._url : qt("img");
        if (Bt(a, "leaflet-image-layer"), this._zoomAnimated && Bt(a, "leaflet-zoom-animated"), this.options.className && Bt(a, this.options.className), a.onselectstart = R, a.onmousemove = R, a.onload = y(this.fire, this, "load"), a.onerror = y(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (a.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), n) {
          this._url = a.src;
          return;
        }
        a.src = this._url, a.alt = this.options.alt;
      }, _animateZoom: function(n) {
        var a = this._map.getZoomScale(n.zoom), l = this._map._latLngBoundsToNewLayerBounds(this._bounds, n.zoom, n.center).min;
        hn(this._image, l, a);
      }, _reset: function() {
        var n = this._image, a = new $(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())), l = a.getSize();
        me(n, a.min), n.style.width = l.x + "px", n.style.height = l.y + "px";
      }, _updateOpacity: function() {
        We(this._image, this.options.opacity);
      }, _updateZIndex: function() {
        this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
      }, _overlayOnError: function() {
        this.fire("error");
        var n = this.options.errorOverlayUrl;
        n && this._url !== n && (this._url = n, this._image.src = n);
      }, getCenter: function() {
        return this._bounds.getCenter();
      } }), Ra = function(n, a, l) {
        return new qn(n, a, l);
      }, fo = qn.extend({ options: { autoplay: true, loop: true, keepAspectRatio: true, muted: false, playsInline: true }, _initImage: function() {
        var n = this._url.tagName === "VIDEO", a = this._image = n ? this._url : qt("video");
        if (Bt(a, "leaflet-image-layer"), this._zoomAnimated && Bt(a, "leaflet-zoom-animated"), this.options.className && Bt(a, this.options.className), a.onselectstart = R, a.onmousemove = R, a.onloadeddata = y(this.fire, this, "load"), n) {
          for (var l = a.getElementsByTagName("source"), d = [], p = 0; p < l.length; p++) d.push(l[p].src);
          this._url = l.length > 0 ? d : [a.src];
          return;
        }
        nt(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(a.style, "objectFit") && (a.style.objectFit = "fill"), a.autoplay = !!this.options.autoplay, a.loop = !!this.options.loop, a.muted = !!this.options.muted, a.playsInline = !!this.options.playsInline;
        for (var v = 0; v < this._url.length; v++) {
          var E = qt("source");
          E.src = this._url[v], a.appendChild(E);
        }
      } });
      function Yl(n, a, l) {
        return new fo(n, a, l);
      }
      var _i = qn.extend({ _initImage: function() {
        var n = this._image = this._url;
        Bt(n, "leaflet-image-layer"), this._zoomAnimated && Bt(n, "leaflet-zoom-animated"), this.options.className && Bt(n, this.options.className), n.onselectstart = R, n.onmousemove = R;
      } });
      function Vl(n, a, l) {
        return new _i(n, a, l);
      }
      var Tn = Sn.extend({ options: { interactive: false, offset: [0, 0], className: "", pane: void 0, content: "" }, initialize: function(n, a) {
        n && (n instanceof vt || nt(n)) ? (this._latlng = ut(n), z(this, a)) : (z(this, n), this._source = a), this.options.content && (this._content = this.options.content);
      }, openOn: function(n) {
        return n = arguments.length ? n : this._source._map, n.hasLayer(this) || n.addLayer(this), this;
      }, close: function() {
        return this._map && this._map.removeLayer(this), this;
      }, toggle: function(n) {
        return this._map ? this.close() : (arguments.length ? this._source = n : n = this._source, this._prepareOpen(), this.openOn(n._map)), this;
      }, onAdd: function(n) {
        this._zoomAnimated = n._zoomAnimated, this._container || this._initLayout(), n._fadeAnimated && We(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), n._fadeAnimated && We(this._container, 1), this.bringToFront(), this.options.interactive && (Bt(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      }, onRemove: function(n) {
        n._fadeAnimated ? (We(this._container, 0), this._removeTimeout = setTimeout(y(oe, void 0, this._container), 200)) : oe(this._container), this.options.interactive && (se(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
      }, getLatLng: function() {
        return this._latlng;
      }, setLatLng: function(n) {
        return this._latlng = ut(n), this._map && (this._updatePosition(), this._adjustPan()), this;
      }, getContent: function() {
        return this._content;
      }, setContent: function(n) {
        return this._content = n, this.update(), this;
      }, getElement: function() {
        return this._container;
      }, update: function() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      }, getEvents: function() {
        var n = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (n.zoomanim = this._animateZoom), n;
      }, isOpen: function() {
        return !!this._map && this._map.hasLayer(this);
      }, bringToFront: function() {
        return this._map && Hi(this._container), this;
      }, bringToBack: function() {
        return this._map && _a(this._container), this;
      }, _prepareOpen: function(n) {
        var a = this._source;
        if (!a._map) return false;
        if (a instanceof nn) {
          a = null;
          var l = this._source._layers;
          for (var d in l) if (l[d]._map) {
            a = l[d];
            break;
          }
          if (!a) return false;
          this._source = a;
        }
        if (!n) if (a.getCenter) n = a.getCenter();
        else if (a.getLatLng) n = a.getLatLng();
        else if (a.getBounds) n = a.getBounds().getCenter();
        else throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(n), this._map && this.update(), true;
      }, _updateContent: function() {
        if (this._content) {
          var n = this._contentNode, a = typeof this._content == "function" ? this._content(this._source || this) : this._content;
          if (typeof a == "string") n.innerHTML = a;
          else {
            for (; n.hasChildNodes(); ) n.removeChild(n.firstChild);
            n.appendChild(a);
          }
          this.fire("contentupdate");
        }
      }, _updatePosition: function() {
        if (this._map) {
          var n = this._map.latLngToLayerPoint(this._latlng), a = C(this.options.offset), l = this._getAnchor();
          this._zoomAnimated ? me(this._container, n.add(l)) : a = a.add(n).add(l);
          var d = this._containerBottom = -a.y, p = this._containerLeft = -Math.round(this._containerWidth / 2) + a.x;
          this._container.style.bottom = d + "px", this._container.style.left = p + "px";
        }
      }, _getAnchor: function() {
        return [0, 0];
      } });
      Zt.include({ _initOverlay: function(n, a, l, d) {
        var p = a;
        return p instanceof n || (p = new n(d).setContent(a)), l && p.setLatLng(l), p;
      } }), Sn.include({ _initOverlay: function(n, a, l, d) {
        var p = l;
        return p instanceof n ? (z(p, d), p._source = this) : (p = a && !d ? a : new n(d, this), p.setContent(l)), p;
      } });
      var Cr = Tn.extend({ options: { pane: "popupPane", offset: [0, 7], maxWidth: 300, minWidth: 50, maxHeight: null, autoPan: true, autoPanPaddingTopLeft: null, autoPanPaddingBottomRight: null, autoPanPadding: [5, 5], keepInView: false, closeButton: true, autoClose: true, closeOnEscapeKey: true, className: "" }, openOn: function(n) {
        return n = arguments.length ? n : this._source._map, !n.hasLayer(this) && n._popup && n._popup.options.autoClose && n.removeLayer(n._popup), n._popup = this, Tn.prototype.openOn.call(this, n);
      }, onAdd: function(n) {
        Tn.prototype.onAdd.call(this, n), n.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, true), this._source instanceof ii || this._source.on("preclick", ni));
      }, onRemove: function(n) {
        Tn.prototype.onRemove.call(this, n), n.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, true), this._source instanceof ii || this._source.off("preclick", ni));
      }, getEvents: function() {
        var n = Tn.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (n.preclick = this.close), this.options.keepInView && (n.moveend = this._adjustPan), n;
      }, _initLayout: function() {
        var n = "leaflet-popup", a = this._container = qt("div", n + " " + (this.options.className || "") + " leaflet-zoom-animated"), l = this._wrapper = qt("div", n + "-content-wrapper", a);
        if (this._contentNode = qt("div", n + "-content", l), wa(a), Ta(this._contentNode), Rt(a, "contextmenu", ni), this._tipContainer = qt("div", n + "-tip-container", a), this._tip = qt("div", n + "-tip", this._tipContainer), this.options.closeButton) {
          var d = this._closeButton = qt("a", n + "-close-button", a);
          d.setAttribute("role", "button"), d.setAttribute("aria-label", "Close popup"), d.href = "#close", d.innerHTML = '<span aria-hidden="true">&#215;</span>', Rt(d, "click", function(p) {
            ve(p), this.close();
          }, this);
        }
      }, _updateLayout: function() {
        var n = this._contentNode, a = n.style;
        a.width = "", a.whiteSpace = "nowrap";
        var l = n.offsetWidth;
        l = Math.min(l, this.options.maxWidth), l = Math.max(l, this.options.minWidth), a.width = l + 1 + "px", a.whiteSpace = "", a.height = "";
        var d = n.offsetHeight, p = this.options.maxHeight, v = "leaflet-popup-scrolled";
        p && d > p ? (a.height = p + "px", Bt(n, v)) : se(n, v), this._containerWidth = this._container.offsetWidth;
      }, _animateZoom: function(n) {
        var a = this._map._latLngToNewLayerPoint(this._latlng, n.zoom, n.center), l = this._getAnchor();
        me(this._container, a.add(l));
      }, _adjustPan: function() {
        if (this.options.autoPan) {
          if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
            this._autopanning = false;
            return;
          }
          var n = this._map, a = parseInt(Zi(this._container, "marginBottom"), 10) || 0, l = this._container.offsetHeight + a, d = this._containerWidth, p = new F(this._containerLeft, -l - this._containerBottom);
          p._add(mi(this._container));
          var v = n.layerPointToContainerPoint(p), E = C(this.options.autoPanPadding), D = C(this.options.autoPanPaddingTopLeft || E), Y = C(this.options.autoPanPaddingBottomRight || E), tt = n.getSize(), gt = 0, bt = 0;
          v.x + d + Y.x > tt.x && (gt = v.x + d - tt.x + Y.x), v.x - gt - D.x < 0 && (gt = v.x - D.x), v.y + l + Y.y > tt.y && (bt = v.y + l - tt.y + Y.y), v.y - bt - D.y < 0 && (bt = v.y - D.y), (gt || bt) && (this.options.keepInView && (this._autopanning = true), n.fire("autopanstart").panBy([gt, bt]));
        }
      }, _getAnchor: function() {
        return C(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      } }), qc = function(n, a) {
        return new Cr(n, a);
      };
      Zt.mergeOptions({ closePopupOnClick: true }), Zt.include({ openPopup: function(n, a, l) {
        return this._initOverlay(Cr, n, a, l).openOn(this), this;
      }, closePopup: function(n) {
        return n = arguments.length ? n : this._popup, n && n.close(), this;
      } }), Sn.include({ bindPopup: function(n, a) {
        return this._popup = this._initOverlay(Cr, this._popup, n, a), this._popupHandlersAdded || (this.on({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = true), this;
      }, unbindPopup: function() {
        return this._popup && (this.off({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = false, this._popup = null), this;
      }, openPopup: function(n) {
        return this._popup && (this instanceof nn || (this._popup._source = this), this._popup._prepareOpen(n || this._latlng) && this._popup.openOn(this._map)), this;
      }, closePopup: function() {
        return this._popup && this._popup.close(), this;
      }, togglePopup: function() {
        return this._popup && this._popup.toggle(this), this;
      }, isPopupOpen: function() {
        return this._popup ? this._popup.isOpen() : false;
      }, setPopupContent: function(n) {
        return this._popup && this._popup.setContent(n), this;
      }, getPopup: function() {
        return this._popup;
      }, _openPopup: function(n) {
        if (!(!this._popup || !this._map)) {
          jn(n);
          var a = n.layer || n.target;
          if (this._popup._source === a && !(a instanceof ii)) {
            this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(n.latlng);
            return;
          }
          this._popup._source = a, this.openPopup(n.latlng);
        }
      }, _movePopup: function(n) {
        this._popup.setLatLng(n.latlng);
      }, _onKeyPress: function(n) {
        n.originalEvent.keyCode === 13 && this._openPopup(n);
      } });
      var ho = Tn.extend({ options: { pane: "tooltipPane", offset: [0, 0], direction: "auto", permanent: false, sticky: false, opacity: 0.9 }, onAdd: function(n) {
        Tn.prototype.onAdd.call(this, n), this.setOpacity(this.options.opacity), n.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, true));
      }, onRemove: function(n) {
        Tn.prototype.onRemove.call(this, n), n.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, true));
      }, getEvents: function() {
        var n = Tn.prototype.getEvents.call(this);
        return this.options.permanent || (n.preclick = this.close), n;
      }, _initLayout: function() {
        var n = "leaflet-tooltip", a = n + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = qt("div", a), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + w(this));
      }, _updateLayout: function() {
      }, _adjustPan: function() {
      }, _setPosition: function(n) {
        var a, l, d = this._map, p = this._container, v = d.latLngToContainerPoint(d.getCenter()), E = d.layerPointToContainerPoint(n), D = this.options.direction, Y = p.offsetWidth, tt = p.offsetHeight, gt = C(this.options.offset), bt = this._getAnchor();
        D === "top" ? (a = Y / 2, l = tt) : D === "bottom" ? (a = Y / 2, l = 0) : D === "center" ? (a = Y / 2, l = tt / 2) : D === "right" ? (a = 0, l = tt / 2) : D === "left" ? (a = Y, l = tt / 2) : E.x < v.x ? (D = "right", a = 0, l = tt / 2) : (D = "left", a = Y + (gt.x + bt.x) * 2, l = tt / 2), n = n.subtract(C(a, l, true)).add(gt).add(bt), se(p, "leaflet-tooltip-right"), se(p, "leaflet-tooltip-left"), se(p, "leaflet-tooltip-top"), se(p, "leaflet-tooltip-bottom"), Bt(p, "leaflet-tooltip-" + D), me(p, n);
      }, _updatePosition: function() {
        var n = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(n);
      }, setOpacity: function(n) {
        this.options.opacity = n, this._container && We(this._container, n);
      }, _animateZoom: function(n) {
        var a = this._map._latLngToNewLayerPoint(this._latlng, n.zoom, n.center);
        this._setPosition(a);
      }, _getAnchor: function() {
        return C(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      } }), Gc = function(n, a) {
        return new ho(n, a);
      };
      Zt.include({ openTooltip: function(n, a, l) {
        return this._initOverlay(ho, n, a, l).openOn(this), this;
      }, closeTooltip: function(n) {
        return n.close(), this;
      } }), Sn.include({ bindTooltip: function(n, a) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(ho, this._tooltip, n, a), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      }, unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(true), this.closeTooltip(), this._tooltip = null), this;
      }, _initTooltipInteractions: function(n) {
        if (!(!n && this._tooltipHandlersAdded)) {
          var a = n ? "off" : "on", l = { remove: this.closeTooltip, move: this._moveTooltip };
          this._tooltip.options.permanent ? l.add = this._openTooltip : (l.mouseover = this._openTooltip, l.mouseout = this.closeTooltip, l.click = this._openTooltip, this._map ? this._addFocusListeners() : l.add = this._addFocusListeners), this._tooltip.options.sticky && (l.mousemove = this._moveTooltip), this[a](l), this._tooltipHandlersAdded = !n;
        }
      }, openTooltip: function(n) {
        return this._tooltip && (this instanceof nn || (this._tooltip._source = this), this._tooltip._prepareOpen(n) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
      }, closeTooltip: function() {
        if (this._tooltip) return this._tooltip.close();
      }, toggleTooltip: function() {
        return this._tooltip && this._tooltip.toggle(this), this;
      }, isTooltipOpen: function() {
        return this._tooltip.isOpen();
      }, setTooltipContent: function(n) {
        return this._tooltip && this._tooltip.setContent(n), this;
      }, getTooltip: function() {
        return this._tooltip;
      }, _addFocusListeners: function() {
        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
      }, _addFocusListenersOnLayer: function(n) {
        var a = typeof n.getElement == "function" && n.getElement();
        a && (Rt(a, "focus", function() {
          this._tooltip._source = n, this.openTooltip();
        }, this), Rt(a, "blur", this.closeTooltip, this));
      }, _setAriaDescribedByOnLayer: function(n) {
        var a = typeof n.getElement == "function" && n.getElement();
        a && a.setAttribute("aria-describedby", this._tooltip._container.id);
      }, _openTooltip: function(n) {
        if (!(!this._tooltip || !this._map)) {
          if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
            this._openOnceFlag = true;
            var a = this;
            this._map.once("moveend", function() {
              a._openOnceFlag = false, a._openTooltip(n);
            });
            return;
          }
          this._tooltip._source = n.layer || n.target, this.openTooltip(this._tooltip.options.sticky ? n.latlng : void 0);
        }
      }, _moveTooltip: function(n) {
        var a = n.latlng, l, d;
        this._tooltip.options.sticky && n.originalEvent && (l = this._map.mouseEventToContainerPoint(n.originalEvent), d = this._map.containerPointToLayerPoint(l), a = this._map.layerPointToLatLng(d)), this._tooltip.setLatLng(a);
      } });
      var _s = Ma.extend({ options: { iconSize: [12, 12], html: false, bgPos: null, className: "leaflet-div-icon" }, createIcon: function(n) {
        var a = n && n.tagName === "DIV" ? n : document.createElement("div"), l = this.options;
        if (l.html instanceof Element ? (Ue(a), a.appendChild(l.html)) : a.innerHTML = l.html !== false ? l.html : "", l.bgPos) {
          var d = C(l.bgPos);
          a.style.backgroundPosition = -d.x + "px " + -d.y + "px";
        }
        return this._setIconStyles(a, "icon"), a;
      }, createShadow: function() {
        return null;
      } });
      function $l(n) {
        return new _s(n);
      }
      Ma.Default = Aa;
      var Ki = Sn.extend({ options: { tileSize: 256, opacity: 1, updateWhenIdle: wt.mobile, updateWhenZooming: true, updateInterval: 200, zIndex: 1, bounds: null, minZoom: 0, maxZoom: void 0, maxNativeZoom: void 0, minNativeZoom: void 0, noWrap: false, pane: "tilePane", className: "", keepBuffer: 2 }, initialize: function(n) {
        z(this, n);
      }, onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
      }, beforeAdd: function(n) {
        n._addZoomLimit(this);
      }, onRemove: function(n) {
        this._removeAllTiles(), oe(this._container), n._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      }, bringToFront: function() {
        return this._map && (Hi(this._container), this._setAutoZIndex(Math.max)), this;
      }, bringToBack: function() {
        return this._map && (_a(this._container), this._setAutoZIndex(Math.min)), this;
      }, getContainer: function() {
        return this._container;
      }, setOpacity: function(n) {
        return this.options.opacity = n, this._updateOpacity(), this;
      }, setZIndex: function(n) {
        return this.options.zIndex = n, this._updateZIndex(), this;
      }, isLoading: function() {
        return this._loading;
      }, redraw: function() {
        if (this._map) {
          this._removeAllTiles();
          var n = this._clampZoom(this._map.getZoom());
          n !== this._tileZoom && (this._tileZoom = n, this._updateLevels()), this._update();
        }
        return this;
      }, getEvents: function() {
        var n = { viewprereset: this._invalidateAll, viewreset: this._resetView, zoom: this._resetView, moveend: this._onMoveEnd };
        return this.options.updateWhenIdle || (this._onMove || (this._onMove = T(this._onMoveEnd, this.options.updateInterval, this)), n.move = this._onMove), this._zoomAnimated && (n.zoomanim = this._animateZoom), n;
      }, createTile: function() {
        return document.createElement("div");
      }, getTileSize: function() {
        var n = this.options.tileSize;
        return n instanceof F ? n : new F(n, n);
      }, _updateZIndex: function() {
        this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
      }, _setAutoZIndex: function(n) {
        for (var a = this.getPane().children, l = -n(-1 / 0, 1 / 0), d = 0, p = a.length, v; d < p; d++) v = a[d].style.zIndex, a[d] !== this._container && v && (l = n(l, +v));
        isFinite(l) && (this.options.zIndex = l + n(-1, 1), this._updateZIndex());
      }, _updateOpacity: function() {
        if (this._map && !wt.ielt9) {
          We(this._container, this.options.opacity);
          var n = +/* @__PURE__ */ new Date(), a = false, l = false;
          for (var d in this._tiles) {
            var p = this._tiles[d];
            if (!(!p.current || !p.loaded)) {
              var v = Math.min(1, (n - p.loaded) / 200);
              We(p.el, v), v < 1 ? a = true : (p.active ? l = true : this._onOpaqueTile(p), p.active = true);
            }
          }
          l && !this._noPrune && this._pruneTiles(), a && (x(this._fadeFrame), this._fadeFrame = ht(this._updateOpacity, this));
        }
      }, _onOpaqueTile: R, _initContainer: function() {
        this._container || (this._container = qt("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      }, _updateLevels: function() {
        var n = this._tileZoom, a = this.options.maxZoom;
        if (n !== void 0) {
          for (var l in this._levels) l = Number(l), this._levels[l].el.children.length || l === n ? (this._levels[l].el.style.zIndex = a - Math.abs(n - l), this._onUpdateLevel(l)) : (oe(this._levels[l].el), this._removeTilesAtZoom(l), this._onRemoveLevel(l), delete this._levels[l]);
          var d = this._levels[n], p = this._map;
          return d || (d = this._levels[n] = {}, d.el = qt("div", "leaflet-tile-container leaflet-zoom-animated", this._container), d.el.style.zIndex = a, d.origin = p.project(p.unproject(p.getPixelOrigin()), n).round(), d.zoom = n, this._setZoomTransform(d, p.getCenter(), p.getZoom()), R(d.el.offsetWidth), this._onCreateLevel(d)), this._level = d, d;
        }
      }, _onUpdateLevel: R, _onRemoveLevel: R, _onCreateLevel: R, _pruneTiles: function() {
        if (this._map) {
          var n, a, l = this._map.getZoom();
          if (l > this.options.maxZoom || l < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (n in this._tiles) a = this._tiles[n], a.retain = a.current;
          for (n in this._tiles) if (a = this._tiles[n], a.current && !a.active) {
            var d = a.coords;
            this._retainParent(d.x, d.y, d.z, d.z - 5) || this._retainChildren(d.x, d.y, d.z, d.z + 2);
          }
          for (n in this._tiles) this._tiles[n].retain || this._removeTile(n);
        }
      }, _removeTilesAtZoom: function(n) {
        for (var a in this._tiles) this._tiles[a].coords.z === n && this._removeTile(a);
      }, _removeAllTiles: function() {
        for (var n in this._tiles) this._removeTile(n);
      }, _invalidateAll: function() {
        for (var n in this._levels) oe(this._levels[n].el), this._onRemoveLevel(Number(n)), delete this._levels[n];
        this._removeAllTiles(), this._tileZoom = void 0;
      }, _retainParent: function(n, a, l, d) {
        var p = Math.floor(n / 2), v = Math.floor(a / 2), E = l - 1, D = new F(+p, +v);
        D.z = +E;
        var Y = this._tileCoordsToKey(D), tt = this._tiles[Y];
        return tt && tt.active ? (tt.retain = true, true) : (tt && tt.loaded && (tt.retain = true), E > d ? this._retainParent(p, v, E, d) : false);
      }, _retainChildren: function(n, a, l, d) {
        for (var p = 2 * n; p < 2 * n + 2; p++) for (var v = 2 * a; v < 2 * a + 2; v++) {
          var E = new F(p, v);
          E.z = l + 1;
          var D = this._tileCoordsToKey(E), Y = this._tiles[D];
          if (Y && Y.active) {
            Y.retain = true;
            continue;
          } else Y && Y.loaded && (Y.retain = true);
          l + 1 < d && this._retainChildren(p, v, l + 1, d);
        }
      }, _resetView: function(n) {
        var a = n && (n.pinch || n.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), a, a);
      }, _animateZoom: function(n) {
        this._setView(n.center, n.zoom, true, n.noUpdate);
      }, _clampZoom: function(n) {
        var a = this.options;
        return a.minNativeZoom !== void 0 && n < a.minNativeZoom ? a.minNativeZoom : a.maxNativeZoom !== void 0 && a.maxNativeZoom < n ? a.maxNativeZoom : n;
      }, _setView: function(n, a, l, d) {
        var p = Math.round(a);
        this.options.maxZoom !== void 0 && p > this.options.maxZoom || this.options.minZoom !== void 0 && p < this.options.minZoom ? p = void 0 : p = this._clampZoom(p);
        var v = this.options.updateWhenZooming && p !== this._tileZoom;
        (!d || v) && (this._tileZoom = p, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), p !== void 0 && this._update(n), l || this._pruneTiles(), this._noPrune = !!l), this._setZoomTransforms(n, a);
      }, _setZoomTransforms: function(n, a) {
        for (var l in this._levels) this._setZoomTransform(this._levels[l], n, a);
      }, _setZoomTransform: function(n, a, l) {
        var d = this._map.getZoomScale(l, n.zoom), p = n.origin.multiplyBy(d).subtract(this._map._getNewPixelOrigin(a, l)).round();
        wt.any3d ? hn(n.el, p, d) : me(n.el, p);
      }, _resetGrid: function() {
        var n = this._map, a = n.options.crs, l = this._tileSize = this.getTileSize(), d = this._tileZoom, p = this._map.getPixelWorldBounds(this._tileZoom);
        p && (this._globalTileRange = this._pxBoundsToTileRange(p)), this._wrapX = a.wrapLng && !this.options.noWrap && [Math.floor(n.project([0, a.wrapLng[0]], d).x / l.x), Math.ceil(n.project([0, a.wrapLng[1]], d).x / l.y)], this._wrapY = a.wrapLat && !this.options.noWrap && [Math.floor(n.project([a.wrapLat[0], 0], d).y / l.x), Math.ceil(n.project([a.wrapLat[1], 0], d).y / l.y)];
      }, _onMoveEnd: function() {
        !this._map || this._map._animatingZoom || this._update();
      }, _getTiledPixelBounds: function(n) {
        var a = this._map, l = a._animatingZoom ? Math.max(a._animateToZoom, a.getZoom()) : a.getZoom(), d = a.getZoomScale(l, this._tileZoom), p = a.project(n, this._tileZoom).floor(), v = a.getSize().divideBy(d * 2);
        return new $(p.subtract(v), p.add(v));
      }, _update: function(n) {
        var a = this._map;
        if (a) {
          var l = this._clampZoom(a.getZoom());
          if (n === void 0 && (n = a.getCenter()), this._tileZoom !== void 0) {
            var d = this._getTiledPixelBounds(n), p = this._pxBoundsToTileRange(d), v = p.getCenter(), E = [], D = this.options.keepBuffer, Y = new $(p.getBottomLeft().subtract([D, -D]), p.getTopRight().add([D, -D]));
            if (!(isFinite(p.min.x) && isFinite(p.min.y) && isFinite(p.max.x) && isFinite(p.max.y))) throw new Error("Attempted to load an infinite number of tiles");
            for (var tt in this._tiles) {
              var gt = this._tiles[tt].coords;
              (gt.z !== this._tileZoom || !Y.contains(new F(gt.x, gt.y))) && (this._tiles[tt].current = false);
            }
            if (Math.abs(l - this._tileZoom) > 1) {
              this._setView(n, l);
              return;
            }
            for (var bt = p.min.y; bt <= p.max.y; bt++) for (var Tt = p.min.x; Tt <= p.max.x; Tt++) {
              var zt = new F(Tt, bt);
              if (zt.z = this._tileZoom, !!this._isValidTile(zt)) {
                var le = this._tiles[this._tileCoordsToKey(zt)];
                le ? le.current = true : E.push(zt);
              }
            }
            if (E.sort(function(ke, dn) {
              return ke.distanceTo(v) - dn.distanceTo(v);
            }), E.length !== 0) {
              this._loading || (this._loading = true, this.fire("loading"));
              var pe = document.createDocumentFragment();
              for (Tt = 0; Tt < E.length; Tt++) this._addTile(E[Tt], pe);
              this._level.el.appendChild(pe);
            }
          }
        }
      }, _isValidTile: function(n) {
        var a = this._map.options.crs;
        if (!a.infinite) {
          var l = this._globalTileRange;
          if (!a.wrapLng && (n.x < l.min.x || n.x > l.max.x) || !a.wrapLat && (n.y < l.min.y || n.y > l.max.y)) return false;
        }
        if (!this.options.bounds) return true;
        var d = this._tileCoordsToBounds(n);
        return dt(this.options.bounds).overlaps(d);
      }, _keyToBounds: function(n) {
        return this._tileCoordsToBounds(this._keyToTileCoords(n));
      }, _tileCoordsToNwSe: function(n) {
        var a = this._map, l = this.getTileSize(), d = n.scaleBy(l), p = d.add(l), v = a.unproject(d, n.z), E = a.unproject(p, n.z);
        return [v, E];
      }, _tileCoordsToBounds: function(n) {
        var a = this._tileCoordsToNwSe(n), l = new at(a[0], a[1]);
        return this.options.noWrap || (l = this._map.wrapLatLngBounds(l)), l;
      }, _tileCoordsToKey: function(n) {
        return n.x + ":" + n.y + ":" + n.z;
      }, _keyToTileCoords: function(n) {
        var a = n.split(":"), l = new F(+a[0], +a[1]);
        return l.z = +a[2], l;
      }, _removeTile: function(n) {
        var a = this._tiles[n];
        a && (oe(a.el), delete this._tiles[n], this.fire("tileunload", { tile: a.el, coords: this._keyToTileCoords(n) }));
      }, _initTile: function(n) {
        Bt(n, "leaflet-tile");
        var a = this.getTileSize();
        n.style.width = a.x + "px", n.style.height = a.y + "px", n.onselectstart = R, n.onmousemove = R, wt.ielt9 && this.options.opacity < 1 && We(n, this.options.opacity);
      }, _addTile: function(n, a) {
        var l = this._getTilePos(n), d = this._tileCoordsToKey(n), p = this.createTile(this._wrapCoords(n), y(this._tileReady, this, n));
        this._initTile(p), this.createTile.length < 2 && ht(y(this._tileReady, this, n, null, p)), me(p, l), this._tiles[d] = { el: p, coords: n, current: true }, a.appendChild(p), this.fire("tileloadstart", { tile: p, coords: n });
      }, _tileReady: function(n, a, l) {
        a && this.fire("tileerror", { error: a, tile: l, coords: n });
        var d = this._tileCoordsToKey(n);
        l = this._tiles[d], l && (l.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (We(l.el, 0), x(this._fadeFrame), this._fadeFrame = ht(this._updateOpacity, this)) : (l.active = true, this._pruneTiles()), a || (Bt(l.el, "leaflet-tile-loaded"), this.fire("tileload", { tile: l.el, coords: n })), this._noTilesToLoad() && (this._loading = false, this.fire("load"), wt.ielt9 || !this._map._fadeAnimated ? ht(this._pruneTiles, this) : setTimeout(y(this._pruneTiles, this), 250)));
      }, _getTilePos: function(n) {
        return n.scaleBy(this.getTileSize()).subtract(this._level.origin);
      }, _wrapCoords: function(n) {
        var a = new F(this._wrapX ? A(n.x, this._wrapX) : n.x, this._wrapY ? A(n.y, this._wrapY) : n.y);
        return a.z = n.z, a;
      }, _pxBoundsToTileRange: function(n) {
        var a = this.getTileSize();
        return new $(n.min.unscaleBy(a).floor(), n.max.unscaleBy(a).ceil().subtract([1, 1]));
      }, _noTilesToLoad: function() {
        for (var n in this._tiles) if (!this._tiles[n].loaded) return false;
        return true;
      } });
      function wn(n) {
        return new Ki(n);
      }
      var Qi = Ki.extend({ options: { minZoom: 0, maxZoom: 18, subdomains: "abc", errorTileUrl: "", zoomOffset: 0, tms: false, zoomReverse: false, detectRetina: false, crossOrigin: false, referrerPolicy: false }, initialize: function(n, a) {
        this._url = n, a = z(this, a), a.detectRetina && wt.retina && a.maxZoom > 0 ? (a.tileSize = Math.floor(a.tileSize / 2), a.zoomReverse ? (a.zoomOffset--, a.minZoom = Math.min(a.maxZoom, a.minZoom + 1)) : (a.zoomOffset++, a.maxZoom = Math.max(a.minZoom, a.maxZoom - 1)), a.minZoom = Math.max(0, a.minZoom)) : a.zoomReverse ? a.minZoom = Math.min(a.maxZoom, a.minZoom) : a.maxZoom = Math.max(a.minZoom, a.maxZoom), typeof a.subdomains == "string" && (a.subdomains = a.subdomains.split("")), this.on("tileunload", this._onTileRemove);
      }, setUrl: function(n, a) {
        return this._url === n && a === void 0 && (a = true), this._url = n, a || this.redraw(), this;
      }, createTile: function(n, a) {
        var l = document.createElement("img");
        return Rt(l, "load", y(this._tileOnLoad, this, a, l)), Rt(l, "error", y(this._tileOnError, this, a, l)), (this.options.crossOrigin || this.options.crossOrigin === "") && (l.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (l.referrerPolicy = this.options.referrerPolicy), l.alt = "", l.src = this.getTileUrl(n), l;
      }, getTileUrl: function(n) {
        var a = { r: wt.retina ? "@2x" : "", s: this._getSubdomain(n), x: n.x, y: n.y, z: this._getZoomForUrl() };
        if (this._map && !this._map.options.crs.infinite) {
          var l = this._globalTileRange.max.y - n.y;
          this.options.tms && (a.y = l), a["-y"] = l;
        }
        return ct(this._url, m(a, this.options));
      }, _tileOnLoad: function(n, a) {
        wt.ielt9 ? setTimeout(y(n, this, null, a), 0) : n(null, a);
      }, _tileOnError: function(n, a, l) {
        var d = this.options.errorTileUrl;
        d && a.getAttribute("src") !== d && (a.src = d), n(l, a);
      }, _onTileRemove: function(n) {
        n.tile.onload = null;
      }, _getZoomForUrl: function() {
        var n = this._tileZoom, a = this.options.maxZoom, l = this.options.zoomReverse, d = this.options.zoomOffset;
        return l && (n = a - n), n + d;
      }, _getSubdomain: function(n) {
        var a = Math.abs(n.x + n.y) % this.options.subdomains.length;
        return this.options.subdomains[a];
      }, _abortLoading: function() {
        var n, a;
        for (n in this._tiles) if (this._tiles[n].coords.z !== this._tileZoom && (a = this._tiles[n].el, a.onload = R, a.onerror = R, !a.complete)) {
          a.src = U;
          var l = this._tiles[n].coords;
          oe(a), delete this._tiles[n], this.fire("tileabort", { tile: a, coords: l });
        }
      }, _removeTile: function(n) {
        var a = this._tiles[n];
        if (a) return a.el.setAttribute("src", U), Ki.prototype._removeTile.call(this, n);
      }, _tileReady: function(n, a, l) {
        if (!(!this._map || l && l.getAttribute("src") === U)) return Ki.prototype._tileReady.call(this, n, a, l);
      } });
      function on(n, a) {
        return new Qi(n, a);
      }
      var sn = Qi.extend({ defaultWmsParams: { service: "WMS", request: "GetMap", layers: "", styles: "", format: "image/jpeg", transparent: false, version: "1.1.1" }, options: { crs: null, uppercase: false }, initialize: function(n, a) {
        this._url = n;
        var l = m({}, this.defaultWmsParams);
        for (var d in a) d in this.options || (l[d] = a[d]);
        a = z(this, a);
        var p = a.detectRetina && wt.retina ? 2 : 1, v = this.getTileSize();
        l.width = v.x * p, l.height = v.y * p, this.wmsParams = l;
      }, onAdd: function(n) {
        this._crs = this.options.crs || n.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var a = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[a] = this._crs.code, Qi.prototype.onAdd.call(this, n);
      }, getTileUrl: function(n) {
        var a = this._tileCoordsToNwSe(n), l = this._crs, d = it(l.project(a[0]), l.project(a[1])), p = d.min, v = d.max, E = (this._wmsVersion >= 1.3 && this._crs === Ul ? [p.y, p.x, v.y, v.x] : [p.x, p.y, v.x, v.y]).join(","), D = Qi.prototype.getTileUrl.call(this, n);
        return D + X(this.wmsParams, D, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + E;
      }, setParams: function(n, a) {
        return m(this.wmsParams, n), a || this.redraw(), this;
      } });
      function Ba(n, a) {
        return new sn(n, a);
      }
      Qi.WMS = sn, on.wms = Ba;
      var Cn = Sn.extend({ options: { padding: 0.1 }, initialize: function(n) {
        z(this, n), w(this), this._layers = this._layers || {};
      }, onAdd: function() {
        this._container || (this._initContainer(), Bt(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
      }, onRemove: function() {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      }, getEvents: function() {
        var n = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd };
        return this._zoomAnimated && (n.zoomanim = this._onAnimZoom), n;
      }, _onAnimZoom: function(n) {
        this._updateTransform(n.center, n.zoom);
      }, _onZoom: function() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      }, _updateTransform: function(n, a) {
        var l = this._map.getZoomScale(a, this._zoom), d = this._map.getSize().multiplyBy(0.5 + this.options.padding), p = this._map.project(this._center, a), v = d.multiplyBy(-l).add(p).subtract(this._map._getNewPixelOrigin(n, a));
        wt.any3d ? hn(this._container, v, l) : me(this._container, v);
      }, _reset: function() {
        this._update(), this._updateTransform(this._center, this._zoom);
        for (var n in this._layers) this._layers[n]._reset();
      }, _onZoomEnd: function() {
        for (var n in this._layers) this._layers[n]._project();
      }, _updatePaths: function() {
        for (var n in this._layers) this._layers[n]._update();
      }, _update: function() {
        var n = this.options.padding, a = this._map.getSize(), l = this._map.containerPointToLayerPoint(a.multiplyBy(-n)).round();
        this._bounds = new $(l, l.add(a.multiplyBy(1 + n * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      } }), Er = Cn.extend({ options: { tolerance: 0 }, getEvents: function() {
        var n = Cn.prototype.getEvents.call(this);
        return n.viewprereset = this._onViewPreReset, n;
      }, _onViewPreReset: function() {
        this._postponeUpdatePaths = true;
      }, onAdd: function() {
        Cn.prototype.onAdd.call(this), this._draw();
      }, _initContainer: function() {
        var n = this._container = document.createElement("canvas");
        Rt(n, "mousemove", this._onMouseMove, this), Rt(n, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Rt(n, "mouseout", this._handleMouseOut, this), n._leaflet_disable_events = true, this._ctx = n.getContext("2d");
      }, _destroyContainer: function() {
        x(this._redrawRequest), delete this._ctx, oe(this._container), Vt(this._container), delete this._container;
      }, _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          var n;
          this._redrawBounds = null;
          for (var a in this._layers) n = this._layers[a], n._update();
          this._redraw();
        }
      }, _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          Cn.prototype._update.call(this);
          var n = this._bounds, a = this._container, l = n.getSize(), d = wt.retina ? 2 : 1;
          me(a, n.min), a.width = d * l.x, a.height = d * l.y, a.style.width = l.x + "px", a.style.height = l.y + "px", wt.retina && this._ctx.scale(2, 2), this._ctx.translate(-n.min.x, -n.min.y), this.fire("update");
        }
      }, _reset: function() {
        Cn.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = false, this._updatePaths());
      }, _initPath: function(n) {
        this._updateDashArray(n), this._layers[w(n)] = n;
        var a = n._order = { layer: n, prev: this._drawLast, next: null };
        this._drawLast && (this._drawLast.next = a), this._drawLast = a, this._drawFirst = this._drawFirst || this._drawLast;
      }, _addPath: function(n) {
        this._requestRedraw(n);
      }, _removePath: function(n) {
        var a = n._order, l = a.next, d = a.prev;
        l ? l.prev = d : this._drawLast = d, d ? d.next = l : this._drawFirst = l, delete n._order, delete this._layers[w(n)], this._requestRedraw(n);
      }, _updatePath: function(n) {
        this._extendRedrawBounds(n), n._project(), n._update(), this._requestRedraw(n);
      }, _updateStyle: function(n) {
        this._updateDashArray(n), this._requestRedraw(n);
      }, _updateDashArray: function(n) {
        if (typeof n.options.dashArray == "string") {
          var a = n.options.dashArray.split(/[, ]+/), l = [], d, p;
          for (p = 0; p < a.length; p++) {
            if (d = Number(a[p]), isNaN(d)) return;
            l.push(d);
          }
          n.options._dashArray = l;
        } else n.options._dashArray = n.options.dashArray;
      }, _requestRedraw: function(n) {
        this._map && (this._extendRedrawBounds(n), this._redrawRequest = this._redrawRequest || ht(this._redraw, this));
      }, _extendRedrawBounds: function(n) {
        if (n._pxBounds) {
          var a = (n.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new $(), this._redrawBounds.extend(n._pxBounds.min.subtract([a, a])), this._redrawBounds.extend(n._pxBounds.max.add([a, a]));
        }
      }, _redraw: function() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      }, _clear: function() {
        var n = this._redrawBounds;
        if (n) {
          var a = n.getSize();
          this._ctx.clearRect(n.min.x, n.min.y, a.x, a.y);
        } else this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
      }, _draw: function() {
        var n, a = this._redrawBounds;
        if (this._ctx.save(), a) {
          var l = a.getSize();
          this._ctx.beginPath(), this._ctx.rect(a.min.x, a.min.y, l.x, l.y), this._ctx.clip();
        }
        this._drawing = true;
        for (var d = this._drawFirst; d; d = d.next) n = d.layer, (!a || n._pxBounds && n._pxBounds.intersects(a)) && n._updatePath();
        this._drawing = false, this._ctx.restore();
      }, _updatePoly: function(n, a) {
        if (this._drawing) {
          var l, d, p, v, E = n._parts, D = E.length, Y = this._ctx;
          if (D) {
            for (Y.beginPath(), l = 0; l < D; l++) {
              for (d = 0, p = E[l].length; d < p; d++) v = E[l][d], Y[d ? "lineTo" : "moveTo"](v.x, v.y);
              a && Y.closePath();
            }
            this._fillStroke(Y, n);
          }
        }
      }, _updateCircle: function(n) {
        if (!(!this._drawing || n._empty())) {
          var a = n._point, l = this._ctx, d = Math.max(Math.round(n._radius), 1), p = (Math.max(Math.round(n._radiusY), 1) || d) / d;
          p !== 1 && (l.save(), l.scale(1, p)), l.beginPath(), l.arc(a.x, a.y / p, d, 0, Math.PI * 2, false), p !== 1 && l.restore(), this._fillStroke(l, n);
        }
      }, _fillStroke: function(n, a) {
        var l = a.options;
        l.fill && (n.globalAlpha = l.fillOpacity, n.fillStyle = l.fillColor || l.color, n.fill(l.fillRule || "evenodd")), l.stroke && l.weight !== 0 && (n.setLineDash && n.setLineDash(a.options && a.options._dashArray || []), n.globalAlpha = l.opacity, n.lineWidth = l.weight, n.strokeStyle = l.color, n.lineCap = l.lineCap, n.lineJoin = l.lineJoin, n.stroke());
      }, _onClick: function(n) {
        for (var a = this._map.mouseEventToLayerPoint(n), l, d, p = this._drawFirst; p; p = p.next) l = p.layer, l.options.interactive && l._containsPoint(a) && (!(n.type === "click" || n.type === "preclick") || !this._map._draggableMoved(l)) && (d = l);
        this._fireEvent(d ? [d] : false, n);
      }, _onMouseMove: function(n) {
        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
          var a = this._map.mouseEventToLayerPoint(n);
          this._handleMouseHover(n, a);
        }
      }, _handleMouseOut: function(n) {
        var a = this._hoveredLayer;
        a && (se(this._container, "leaflet-interactive"), this._fireEvent([a], n, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = false);
      }, _handleMouseHover: function(n, a) {
        if (!this._mouseHoverThrottled) {
          for (var l, d, p = this._drawFirst; p; p = p.next) l = p.layer, l.options.interactive && l._containsPoint(a) && (d = l);
          d !== this._hoveredLayer && (this._handleMouseOut(n), d && (Bt(this._container, "leaflet-interactive"), this._fireEvent([d], n, "mouseover"), this._hoveredLayer = d)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : false, n), this._mouseHoverThrottled = true, setTimeout(y(function() {
            this._mouseHoverThrottled = false;
          }, this), 32);
        }
      }, _fireEvent: function(n, a, l) {
        this._map._fireDOMEvent(a, l || a.type, n);
      }, _bringToFront: function(n) {
        var a = n._order;
        if (a) {
          var l = a.next, d = a.prev;
          if (l) l.prev = d;
          else return;
          d ? d.next = l : l && (this._drawFirst = l), a.prev = this._drawLast, this._drawLast.next = a, a.next = null, this._drawLast = a, this._requestRedraw(n);
        }
      }, _bringToBack: function(n) {
        var a = n._order;
        if (a) {
          var l = a.next, d = a.prev;
          if (d) d.next = l;
          else return;
          l ? l.prev = d : d && (this._drawLast = d), a.prev = null, a.next = this._drawFirst, this._drawFirst.prev = a, this._drawFirst = a, this._requestRedraw(n);
        }
      } });
      function Mr(n) {
        return wt.canvas ? new Er(n) : null;
      }
      var Ii = function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(n) {
            return document.createElement("<lvml:" + n + ' class="lvml">');
          };
        } catch {
        }
        return function(n) {
          return document.createElement("<" + n + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      }(), Da = { _initContainer: function() {
        this._container = qt("div", "leaflet-vml-container");
      }, _update: function() {
        this._map._animatingZoom || (Cn.prototype._update.call(this), this.fire("update"));
      }, _initPath: function(n) {
        var a = n._container = Ii("shape");
        Bt(a, "leaflet-vml-shape " + (this.options.className || "")), a.coordsize = "1 1", n._path = Ii("path"), a.appendChild(n._path), this._updateStyle(n), this._layers[w(n)] = n;
      }, _addPath: function(n) {
        var a = n._container;
        this._container.appendChild(a), n.options.interactive && n.addInteractiveTarget(a);
      }, _removePath: function(n) {
        var a = n._container;
        oe(a), n.removeInteractiveTarget(a), delete this._layers[w(n)];
      }, _updateStyle: function(n) {
        var a = n._stroke, l = n._fill, d = n.options, p = n._container;
        p.stroked = !!d.stroke, p.filled = !!d.fill, d.stroke ? (a || (a = n._stroke = Ii("stroke")), p.appendChild(a), a.weight = d.weight + "px", a.color = d.color, a.opacity = d.opacity, d.dashArray ? a.dashStyle = nt(d.dashArray) ? d.dashArray.join(" ") : d.dashArray.replace(/( *, *)/g, " ") : a.dashStyle = "", a.endcap = d.lineCap.replace("butt", "flat"), a.joinstyle = d.lineJoin) : a && (p.removeChild(a), n._stroke = null), d.fill ? (l || (l = n._fill = Ii("fill")), p.appendChild(l), l.color = d.fillColor || d.color, l.opacity = d.fillOpacity) : l && (p.removeChild(l), n._fill = null);
      }, _updateCircle: function(n) {
        var a = n._point.round(), l = Math.round(n._radius), d = Math.round(n._radiusY || l);
        this._setPath(n, n._empty() ? "M0 0" : "AL " + a.x + "," + a.y + " " + l + "," + d + " 0," + 65535 * 360);
      }, _setPath: function(n, a) {
        n._path.v = a;
      }, _bringToFront: function(n) {
        Hi(n._container);
      }, _bringToBack: function(n) {
        _a(n._container);
      } }, Ar = wt.vml ? Ii : Ri, yi = Cn.extend({ _initContainer: function() {
        this._container = Ar("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Ar("g"), this._container.appendChild(this._rootGroup);
      }, _destroyContainer: function() {
        oe(this._container), Vt(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      }, _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          Cn.prototype._update.call(this);
          var n = this._bounds, a = n.getSize(), l = this._container;
          (!this._svgSize || !this._svgSize.equals(a)) && (this._svgSize = a, l.setAttribute("width", a.x), l.setAttribute("height", a.y)), me(l, n.min), l.setAttribute("viewBox", [n.min.x, n.min.y, a.x, a.y].join(" ")), this.fire("update");
        }
      }, _initPath: function(n) {
        var a = n._path = Ar("path");
        n.options.className && Bt(a, n.options.className), n.options.interactive && Bt(a, "leaflet-interactive"), this._updateStyle(n), this._layers[w(n)] = n;
      }, _addPath: function(n) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(n._path), n.addInteractiveTarget(n._path);
      }, _removePath: function(n) {
        oe(n._path), n.removeInteractiveTarget(n._path), delete this._layers[w(n)];
      }, _updatePath: function(n) {
        n._project(), n._update();
      }, _updateStyle: function(n) {
        var a = n._path, l = n.options;
        a && (l.stroke ? (a.setAttribute("stroke", l.color), a.setAttribute("stroke-opacity", l.opacity), a.setAttribute("stroke-width", l.weight), a.setAttribute("stroke-linecap", l.lineCap), a.setAttribute("stroke-linejoin", l.lineJoin), l.dashArray ? a.setAttribute("stroke-dasharray", l.dashArray) : a.removeAttribute("stroke-dasharray"), l.dashOffset ? a.setAttribute("stroke-dashoffset", l.dashOffset) : a.removeAttribute("stroke-dashoffset")) : a.setAttribute("stroke", "none"), l.fill ? (a.setAttribute("fill", l.fillColor || l.color), a.setAttribute("fill-opacity", l.fillOpacity), a.setAttribute("fill-rule", l.fillRule || "evenodd")) : a.setAttribute("fill", "none"));
      }, _updatePoly: function(n, a) {
        this._setPath(n, ca(n._parts, a));
      }, _updateCircle: function(n) {
        var a = n._point, l = Math.max(Math.round(n._radius), 1), d = Math.max(Math.round(n._radiusY), 1) || l, p = "a" + l + "," + d + " 0 1,0 ", v = n._empty() ? "M0 0" : "M" + (a.x - l) + "," + a.y + p + l * 2 + ",0 " + p + -l * 2 + ",0 ";
        this._setPath(n, v);
      }, _setPath: function(n, a) {
        n._path.setAttribute("d", a);
      }, _bringToFront: function(n) {
        Hi(n._path);
      }, _bringToBack: function(n) {
        _a(n._path);
      } });
      wt.vml && yi.include(Da);
      function Wi(n) {
        return wt.svg || wt.vml ? new yi(n) : null;
      }
      Zt.include({ getRenderer: function(n) {
        var a = n.options.renderer || this._getPaneRenderer(n.options.pane) || this.options.renderer || this._renderer;
        return a || (a = this._renderer = this._createRenderer()), this.hasLayer(a) || this.addLayer(a), a;
      }, _getPaneRenderer: function(n) {
        if (n === "overlayPane" || n === void 0) return false;
        var a = this._paneRenderers[n];
        return a === void 0 && (a = this._createRenderer({ pane: n }), this._paneRenderers[n] = a), a;
      }, _createRenderer: function(n) {
        return this.options.preferCanvas && Mr(n) || Wi(n);
      } });
      var Xl = La.extend({ initialize: function(n, a) {
        La.prototype.initialize.call(this, this._boundsToLatLngs(n), a);
      }, setBounds: function(n) {
        return this.setLatLngs(this._boundsToLatLngs(n));
      }, _boundsToLatLngs: function(n) {
        return n = dt(n), [n.getSouthWest(), n.getNorthWest(), n.getNorthEast(), n.getSouthEast()];
      } });
      function ln(n, a) {
        return new Xl(n, a);
      }
      yi.create = Ar, yi.pointsToPath = ca, rn.geometryToLayer = xr, rn.coordsToLatLng = lo, rn.coordsToLatLngs = Tr, rn.latLngToCoords = wr, rn.latLngsToCoords = uo, rn.getFeature = xn, rn.asFeature = za, Zt.mergeOptions({ boxZoom: true });
      var mo = bn.extend({ initialize: function(n) {
        this._map = n, this._container = n._container, this._pane = n._panes.overlayPane, this._resetStateTimeout = 0, n.on("unload", this._destroy, this);
      }, addHooks: function() {
        Rt(this._container, "mousedown", this._onMouseDown, this);
      }, removeHooks: function() {
        Vt(this._container, "mousedown", this._onMouseDown, this);
      }, moved: function() {
        return this._moved;
      }, _destroy: function() {
        oe(this._pane), delete this._pane;
      }, _resetState: function() {
        this._resetStateTimeout = 0, this._moved = false;
      }, _clearDeferredResetState: function() {
        this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      }, _onMouseDown: function(n) {
        if (!n.shiftKey || n.which !== 1 && n.button !== 1) return false;
        this._clearDeferredResetState(), this._resetState(), Zn(), pr(), this._startPoint = this._map.mouseEventToContainerPoint(n), Rt(document, { contextmenu: jn, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
      }, _onMouseMove: function(n) {
        this._moved || (this._moved = true, this._box = qt("div", "leaflet-zoom-box", this._container), Bt(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(n);
        var a = new $(this._point, this._startPoint), l = a.getSize();
        me(this._box, a.min), this._box.style.width = l.x + "px", this._box.style.height = l.y + "px";
      }, _finish: function() {
        this._moved && (oe(this._box), se(this._container, "leaflet-crosshair")), mr(), as(), Vt(document, { contextmenu: jn, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
      }, _onMouseUp: function(n) {
        if (!(n.which !== 1 && n.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(y(this._resetState, this), 0);
          var a = new at(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
          this._map.fitBounds(a).fire("boxzoomend", { boxZoomBounds: a });
        }
      }, _onKeyDown: function(n) {
        n.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      } });
      Zt.addInitHook("addHandler", "boxZoom", mo), Zt.mergeOptions({ doubleClickZoom: true });
      var Gn = bn.extend({ addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      }, removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      }, _onDoubleClick: function(n) {
        var a = this._map, l = a.getZoom(), d = a.options.zoomDelta, p = n.originalEvent.shiftKey ? l - d : l + d;
        a.options.doubleClickZoom === "center" ? a.setZoom(p) : a.setZoomAround(n.containerPoint, p);
      } });
      Zt.addInitHook("addHandler", "doubleClickZoom", Gn), Zt.mergeOptions({ dragging: true, inertia: true, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, easeLinearity: 0.2, worldCopyJump: false, maxBoundsViscosity: 0 });
      var ys = bn.extend({ addHooks: function() {
        if (!this._draggable) {
          var n = this._map;
          this._draggable = new gi(n._mapPane, n._container), this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this), this._draggable.on("predrag", this._onPreDragLimit, this), n.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), n.on("zoomend", this._onZoomEnd, this), n.whenReady(this._onZoomEnd, this));
        }
        Bt(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      }, removeHooks: function() {
        se(this._map._container, "leaflet-grab"), se(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
      }, moved: function() {
        return this._draggable && this._draggable._moved;
      }, moving: function() {
        return this._draggable && this._draggable._moving;
      }, _onDragStart: function() {
        var n = this._map;
        if (n._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
          var a = dt(this._map.options.maxBounds);
          this._offsetLimit = it(this._map.latLngToContainerPoint(a.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(a.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
        } else this._offsetLimit = null;
        n.fire("movestart").fire("dragstart"), n.options.inertia && (this._positions = [], this._times = []);
      }, _onDrag: function(n) {
        if (this._map.options.inertia) {
          var a = this._lastTime = +/* @__PURE__ */ new Date(), l = this._lastPos = this._draggable._absPos || this._draggable._newPos;
          this._positions.push(l), this._times.push(a), this._prunePositions(a);
        }
        this._map.fire("move", n).fire("drag", n);
      }, _prunePositions: function(n) {
        for (; this._positions.length > 1 && n - this._times[0] > 50; ) this._positions.shift(), this._times.shift();
      }, _onZoomEnd: function() {
        var n = this._map.getSize().divideBy(2), a = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = a.subtract(n).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      }, _viscousLimit: function(n, a) {
        return n - (n - a) * this._viscosity;
      }, _onPreDragLimit: function() {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var n = this._draggable._newPos.subtract(this._draggable._startPos), a = this._offsetLimit;
          n.x < a.min.x && (n.x = this._viscousLimit(n.x, a.min.x)), n.y < a.min.y && (n.y = this._viscousLimit(n.y, a.min.y)), n.x > a.max.x && (n.x = this._viscousLimit(n.x, a.max.x)), n.y > a.max.y && (n.y = this._viscousLimit(n.y, a.max.y)), this._draggable._newPos = this._draggable._startPos.add(n);
        }
      }, _onPreDragWrap: function() {
        var n = this._worldWidth, a = Math.round(n / 2), l = this._initialWorldOffset, d = this._draggable._newPos.x, p = (d - a + l) % n + a - l, v = (d + a + l) % n - a - l, E = Math.abs(p + l) < Math.abs(v + l) ? p : v;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = E;
      }, _onDragEnd: function(n) {
        var a = this._map, l = a.options, d = !l.inertia || n.noInertia || this._times.length < 2;
        if (a.fire("dragend", n), d) a.fire("moveend");
        else {
          this._prunePositions(+/* @__PURE__ */ new Date());
          var p = this._lastPos.subtract(this._positions[0]), v = (this._lastTime - this._times[0]) / 1e3, E = l.easeLinearity, D = p.multiplyBy(E / v), Y = D.distanceTo([0, 0]), tt = Math.min(l.inertiaMaxSpeed, Y), gt = D.multiplyBy(tt / Y), bt = tt / (l.inertiaDeceleration * E), Tt = gt.multiplyBy(-bt / 2).round();
          !Tt.x && !Tt.y ? a.fire("moveend") : (Tt = a._limitOffset(Tt, a.options.maxBounds), ht(function() {
            a.panBy(Tt, { duration: bt, easeLinearity: E, noMoveStart: true, animate: true });
          }));
        }
      } });
      Zt.addInitHook("addHandler", "dragging", ys), Zt.mergeOptions({ keyboard: true, keyboardPanDelta: 80 });
      var Or = bn.extend({ keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 54, 173] }, initialize: function(n) {
        this._map = n, this._setPanDelta(n.options.keyboardPanDelta), this._setZoomDelta(n.options.zoomDelta);
      }, addHooks: function() {
        var n = this._map._container;
        n.tabIndex <= 0 && (n.tabIndex = "0"), Rt(n, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
      }, removeHooks: function() {
        this._removeHooks(), Vt(this._map._container, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
      }, _onMouseDown: function() {
        if (!this._focused) {
          var n = document.body, a = document.documentElement, l = n.scrollTop || a.scrollTop, d = n.scrollLeft || a.scrollLeft;
          this._map._container.focus(), window.scrollTo(d, l);
        }
      }, _onFocus: function() {
        this._focused = true, this._map.fire("focus");
      }, _onBlur: function() {
        this._focused = false, this._map.fire("blur");
      }, _setPanDelta: function(n) {
        var a = this._panKeys = {}, l = this.keyCodes, d, p;
        for (d = 0, p = l.left.length; d < p; d++) a[l.left[d]] = [-1 * n, 0];
        for (d = 0, p = l.right.length; d < p; d++) a[l.right[d]] = [n, 0];
        for (d = 0, p = l.down.length; d < p; d++) a[l.down[d]] = [0, n];
        for (d = 0, p = l.up.length; d < p; d++) a[l.up[d]] = [0, -1 * n];
      }, _setZoomDelta: function(n) {
        var a = this._zoomKeys = {}, l = this.keyCodes, d, p;
        for (d = 0, p = l.zoomIn.length; d < p; d++) a[l.zoomIn[d]] = n;
        for (d = 0, p = l.zoomOut.length; d < p; d++) a[l.zoomOut[d]] = -n;
      }, _addHooks: function() {
        Rt(document, "keydown", this._onKeyDown, this);
      }, _removeHooks: function() {
        Vt(document, "keydown", this._onKeyDown, this);
      }, _onKeyDown: function(n) {
        if (!(n.altKey || n.ctrlKey || n.metaKey)) {
          var a = n.keyCode, l = this._map, d;
          if (a in this._panKeys) {
            if (!l._panAnim || !l._panAnim._inProgress) if (d = this._panKeys[a], n.shiftKey && (d = C(d).multiplyBy(3)), l.options.maxBounds && (d = l._limitOffset(C(d), l.options.maxBounds)), l.options.worldCopyJump) {
              var p = l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(d)));
              l.panTo(p);
            } else l.panBy(d);
          } else if (a in this._zoomKeys) l.setZoom(l.getZoom() + (n.shiftKey ? 3 : 1) * this._zoomKeys[a]);
          else if (a === 27 && l._popup && l._popup.options.closeOnEscapeKey) l.closePopup();
          else return;
          jn(n);
        }
      } });
      Zt.addInitHook("addHandler", "keyboard", Or), Zt.mergeOptions({ scrollWheelZoom: true, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 });
      var vi = bn.extend({ addHooks: function() {
        Rt(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      }, removeHooks: function() {
        Vt(this._map._container, "wheel", this._onWheelScroll, this);
      }, _onWheelScroll: function(n) {
        var a = yr(n), l = this._map.options.wheelDebounceTime;
        this._delta += a, this._lastMousePos = this._map.mouseEventToContainerPoint(n), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
        var d = Math.max(l - (+/* @__PURE__ */ new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(y(this._performZoom, this), d), jn(n);
      }, _performZoom: function() {
        var n = this._map, a = n.getZoom(), l = this._map.options.zoomSnap || 0;
        n._stop();
        var d = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), p = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d)))) / Math.LN2, v = l ? Math.ceil(p / l) * l : p, E = n._limitZoom(a + (this._delta > 0 ? v : -v)) - a;
        this._delta = 0, this._startTime = null, E && (n.options.scrollWheelZoom === "center" ? n.setZoom(a + E) : n.setZoomAround(this._lastMousePos, a + E));
      } });
      Zt.addInitHook("addHandler", "scrollWheelZoom", vi);
      var vs = 600;
      Zt.mergeOptions({ tapHold: wt.touchNative && wt.safari && wt.mobile, tapTolerance: 15 });
      var po = bn.extend({ addHooks: function() {
        Rt(this._map._container, "touchstart", this._onDown, this);
      }, removeHooks: function() {
        Vt(this._map._container, "touchstart", this._onDown, this);
      }, _onDown: function(n) {
        if (clearTimeout(this._holdTimeout), n.touches.length === 1) {
          var a = n.touches[0];
          this._startPos = this._newPos = new F(a.clientX, a.clientY), this._holdTimeout = setTimeout(y(function() {
            this._cancel(), this._isTapValid() && (Rt(document, "touchend", ve), Rt(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", a));
          }, this), vs), Rt(document, "touchend touchcancel contextmenu", this._cancel, this), Rt(document, "touchmove", this._onMove, this);
        }
      }, _cancelClickPrevent: function n() {
        Vt(document, "touchend", ve), Vt(document, "touchend touchcancel", n);
      }, _cancel: function() {
        clearTimeout(this._holdTimeout), Vt(document, "touchend touchcancel contextmenu", this._cancel, this), Vt(document, "touchmove", this._onMove, this);
      }, _onMove: function(n) {
        var a = n.touches[0];
        this._newPos = new F(a.clientX, a.clientY);
      }, _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      }, _simulateEvent: function(n, a) {
        var l = new MouseEvent(n, { bubbles: true, cancelable: true, view: window, screenX: a.screenX, screenY: a.screenY, clientX: a.clientX, clientY: a.clientY });
        l._simulated = true, a.target.dispatchEvent(l);
      } });
      Zt.addInitHook("addHandler", "tapHold", po), Zt.mergeOptions({ touchZoom: wt.touch, bounceAtZoomLimits: true });
      var Ji = bn.extend({ addHooks: function() {
        Bt(this._map._container, "leaflet-touch-zoom"), Rt(this._map._container, "touchstart", this._onTouchStart, this);
      }, removeHooks: function() {
        se(this._map._container, "leaflet-touch-zoom"), Vt(this._map._container, "touchstart", this._onTouchStart, this);
      }, _onTouchStart: function(n) {
        var a = this._map;
        if (!(!n.touches || n.touches.length !== 2 || a._animatingZoom || this._zooming)) {
          var l = a.mouseEventToContainerPoint(n.touches[0]), d = a.mouseEventToContainerPoint(n.touches[1]);
          this._centerPoint = a.getSize()._divideBy(2), this._startLatLng = a.containerPointToLatLng(this._centerPoint), a.options.touchZoom !== "center" && (this._pinchStartLatLng = a.containerPointToLatLng(l.add(d)._divideBy(2))), this._startDist = l.distanceTo(d), this._startZoom = a.getZoom(), this._moved = false, this._zooming = true, a._stop(), Rt(document, "touchmove", this._onTouchMove, this), Rt(document, "touchend touchcancel", this._onTouchEnd, this), ve(n);
        }
      }, _onTouchMove: function(n) {
        if (!(!n.touches || n.touches.length !== 2 || !this._zooming)) {
          var a = this._map, l = a.mouseEventToContainerPoint(n.touches[0]), d = a.mouseEventToContainerPoint(n.touches[1]), p = l.distanceTo(d) / this._startDist;
          if (this._zoom = a.getScaleZoom(p, this._startZoom), !a.options.bounceAtZoomLimits && (this._zoom < a.getMinZoom() && p < 1 || this._zoom > a.getMaxZoom() && p > 1) && (this._zoom = a._limitZoom(this._zoom)), a.options.touchZoom === "center") {
            if (this._center = this._startLatLng, p === 1) return;
          } else {
            var v = l._add(d)._divideBy(2)._subtract(this._centerPoint);
            if (p === 1 && v.x === 0 && v.y === 0) return;
            this._center = a.unproject(a.project(this._pinchStartLatLng, this._zoom).subtract(v), this._zoom);
          }
          this._moved || (a._moveStart(true, false), this._moved = true), x(this._animRequest);
          var E = y(a._move, a, this._center, this._zoom, { pinch: true, round: false }, void 0);
          this._animRequest = ht(E, this, true), ve(n);
        }
      }, _onTouchEnd: function() {
        if (!this._moved || !this._zooming) {
          this._zooming = false;
          return;
        }
        this._zooming = false, x(this._animRequest), Vt(document, "touchmove", this._onTouchMove, this), Vt(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      } });
      Zt.addInitHook("addHandler", "touchZoom", Ji), Zt.BoxZoom = mo, Zt.DoubleClickZoom = Gn, Zt.Drag = ys, Zt.Keyboard = Or, Zt.ScrollWheelZoom = vi, Zt.TapHold = po, Zt.TouchZoom = Ji, c.Bounds = $, c.Browser = wt, c.CRS = Yt, c.Canvas = Er, c.Circle = ps, c.CircleMarker = Sr, c.Class = ot, c.Control = Je, c.DivIcon = _s, c.DivOverlay = Tn, c.DomEvent = Ac, c.DomUtil = Ol, c.Draggable = gi, c.Evented = st, c.FeatureGroup = nn, c.GeoJSON = rn, c.GridLayer = Ki, c.Handler = bn, c.Icon = Ma, c.ImageOverlay = qn, c.LatLng = vt, c.LatLngBounds = at, c.Layer = Sn, c.LayerGroup = $i, c.LineUtil = Zl, c.Map = Zt, c.Marker = Oa, c.Mixin = Bc, c.Path = ii, c.Point = F, c.PolyUtil = Dc, c.Polygon = La, c.Polyline = ai, c.Popup = Cr, c.PosAnimation = no, c.Projection = Hl, c.Rectangle = Xl, c.Renderer = Cn, c.SVG = yi, c.SVGOverlay = _i, c.TileLayer = Qi, c.Tooltip = ho, c.Transformation = Dn, c.Util = mt, c.VideoOverlay = fo, c.bind = y, c.bounds = it, c.canvas = Mr, c.circle = Uc, c.circleMarker = ql, c.control = Ca, c.divIcon = $l, c.extend = m, c.featureGroup = br, c.geoJSON = co, c.geoJson = Gl, c.gridLayer = wn, c.icon = so, c.imageOverlay = Ra, c.latLng = ut, c.latLngBounds = dt, c.layerGroup = jl, c.map = vr, c.marker = ms, c.point = C, c.polygon = an, c.polyline = jc, c.popup = qc, c.rectangle = ln, c.setOptions = z, c.stamp = w, c.svg = Wi, c.svgOverlay = Vl, c.tileLayer = on, c.tooltip = Gc, c.transformation = un, c.version = f, c.videoOverlay = Yl;
      var Na = window.L;
      c.noConflict = function() {
        return window.L = Na, this;
      }, window.L = c;
    });
  }(ol, ol.exports)), ol.exports;
}
var Wo = Kx();
function Qx(o2) {
  return o2.split(" ").filter(Boolean);
}
function Ix(o2, s) {
  for (const c of Qx(s)) Wo.DomUtil.addClass(o2, c);
}
function xc(o2, s, c) {
  return Object.freeze({ instance: o2, context: s, container: c });
}
function fy(o2, s) {
  return s == null ? function(f, m) {
    const g = q.useRef(void 0);
    return g.current || (g.current = o2(f, m)), g;
  } : function(f, m) {
    const g = q.useRef(void 0);
    g.current || (g.current = o2(f, m));
    const y = q.useRef(f), { instance: S } = g.current;
    return q.useEffect(function() {
      y.current !== f && (s(S, f, y.current), y.current = f);
    }, [S, f, s]), g;
  };
}
function hy(o2, s) {
  q.useEffect(function() {
    return (s.layerContainer ?? s.map).addLayer(o2.instance), function() {
      var _a;
      (_a = s.layerContainer) == null ? void 0 : _a.removeLayer(o2.instance), s.map.removeLayer(o2.instance);
    };
  }, [s, o2]);
}
function Wx(o2) {
  return function(c) {
    const f = Sc(), m = o2(Md(c, f), f);
    return jx(f.map, c.attribution), cy(m.current, c.eventHandlers), hy(m.current, f), m;
  };
}
function Jx(o2, s) {
  const c = q.useRef(void 0);
  q.useEffect(function() {
    if (s.pathOptions !== c.current) {
      const m = s.pathOptions ?? {};
      o2.instance.setStyle(m), c.current = m;
    }
  }, [o2, s]);
}
function Fx(o2) {
  return function(c) {
    const f = Sc(), m = o2(Md(c, f), f);
    return cy(m.current, c.eventHandlers), hy(m.current, f), Jx(m.current, c), m;
  };
}
function Ad(o2, s) {
  const c = fy(o2, s), f = Fx(c);
  return Vx(f);
}
function tT(o2, s) {
  const c = fy(o2, s), f = Wx(c);
  return $x(f);
}
function eT(o2, s, c) {
  const { opacity: f, zIndex: m } = s;
  f != null && f !== c.opacity && o2.setOpacity(f), m != null && m !== c.zIndex && o2.setZIndex(m);
}
function nT() {
  return Sc().map;
}
function iT(o2) {
  const s = nT();
  return q.useEffect(function() {
    return s.on(o2), function() {
      s.off(o2);
    };
  }, [s, o2]), s;
}
const aT = Ad(function({ center: s, children: c, ...f }, m) {
  const g = new Wo.CircleMarker(s, f);
  return xc(g, Ed(m, { overlayContainer: g }));
}, qx), dy = Ad(function({ data: s, ...c }, f) {
  const m = new Wo.GeoJSON(s, c);
  return xc(m, Ed(f, { overlayContainer: m }));
}, function(s, c, f) {
  c.style !== f.style && (c.style == null ? s.resetStyle() : s.setStyle(c.style));
});
function rT({ bounds: o2, boundsOptions: s, center: c, children: f, className: m, id: g, placeholder: y, style: S, whenReady: w, zoom: T, ...A }, R) {
  const [k] = q.useState({ className: m, id: g, style: S }), [V, Z] = q.useState(null), z = q.useRef(void 0);
  q.useImperativeHandle(R, () => (V == null ? void 0 : V.map) ?? null, [V]);
  const X = q.useCallback((ct) => {
    if (ct !== null && !z.current) {
      const nt = new Wo.Map(ct, A);
      z.current = nt, c != null && T != null ? nt.setView(c, T) : o2 != null && nt.fitBounds(o2, s), w != null && nt.whenReady(w), Z(Yx(nt));
    }
  }, []);
  q.useEffect(() => () => {
    V == null ? void 0 : V.map.remove();
  }, [V]);
  const lt = V ? In.createElement(bc, { value: V }, f) : y ?? null;
  return In.createElement("div", { ...k, ref: X }, lt);
}
const oT = q.forwardRef(rT), sT = ["mapPane", "markerPane", "overlayPane", "popupPane", "shadowPane", "tilePane", "tooltipPane"];
function b_(o2, s) {
  const { [s]: c, ...f } = o2;
  return f;
}
function lT(o2, s, c) {
  if (sT.indexOf(o2) !== -1) throw new Error(`You must use a unique name for a pane that is not a default Leaflet pane: ${o2}`);
  if (c.map.getPane(o2) != null) throw new Error(`A pane with this name already exists: ${o2}`);
  const f = s.pane ?? c.pane, m = f ? c.map.getPane(f) : void 0, g = c.map.createPane(o2, m);
  if (s.className != null && Ix(g, s.className), s.style != null) for (const y of Object.keys(s.style)) g.style[y] = s.style[y];
  return g;
}
function uT(o2, s) {
  const [c] = q.useState(o2.name), [f, m] = q.useState(null);
  q.useImperativeHandle(s, () => f, [f]);
  const g = Sc(), y = q.useMemo(() => ({ ...g, pane: c }), [g]);
  return q.useEffect(() => (m(lT(c, o2, g)), function() {
    var _a, _b2;
    (_b2 = (_a = g.map.getPane(c)) == null ? void 0 : _a.remove) == null ? void 0 : _b2.call(_a), g.map._panes != null && (g.map._panes = b_(g.map._panes, c), g.map._paneRenderers = b_(g.map._paneRenderers, c));
  }), []), o2.children != null && f != null ? ES.createPortal(In.createElement(bc, { value: y }, o2.children), f) : null;
}
const il = q.forwardRef(uT), cT = Ad(function({ bounds: s, ...c }, f) {
  const m = new Wo.Rectangle(s, c);
  return xc(m, Ed(f, { overlayContainer: m }));
}, function(s, c, f) {
  c.bounds !== f.bounds && s.setBounds(c.bounds);
}), fT = tT(function({ url: s, ...c }, f) {
  const m = new Wo.TileLayer(s, Md(c, f));
  return xc(m, f);
}, function(s, c, f) {
  eT(s, c, f);
  const { url: m } = c;
  m != null && m !== f.url && s.setUrl(m);
});
function hT({ calcRoute: o2 }) {
  const s = ci((m) => m.mainColor), [c, f] = q.useState([]);
  return q.useEffect(() => {
    if (c.length < 2 && ci.setState({ route: null }), c.length === 2) {
      const m = { lat: c[0].position[0], lon: c[0].position[1] }, g = { lat: c[1].position[0], lon: c[1].position[1] };
      o2(m, g);
    }
  }, [c]), rt.jsxs(rt.Fragment, { children: [rt.jsx(dT, { setMarkers: f }), c.map((m, g) => rt.jsx(aT, { center: [m.position[0], m.position[1]], radius: 10, color: s || "black", fillColor: g == 0 ? s : "white", fillOpacity: 1, style: { boxShadow: "0 0 5px rgba(0,0,0,1)" } }, m.key))] });
}
function dT({ setMarkers: o2 }) {
  return iT({ click(s) {
    const { lat: c, lng: f } = s.latlng;
    o2((m) => m.length < 2 ? [...m, { position: [c, f], key: Date.now() }] : [{ position: [c, f], key: Date.now() }]);
  } }), null;
}
function mT() {
  const o2 = ci((g) => g.page), s = ci((g) => g.mainColor), c = q.useRef(), [f, m] = q.useState(null);
  return q.useEffect(() => {
    if (o2 === "explore") {
      async function g() {
        try {
          const y = await Dx();
          console.log("Network data:", y), m(y);
        } catch (y) {
          console.error("Error fetching network data:", y);
        }
      }
      g();
    }
  }, [o2]), rt.jsx(rt.Fragment, { children: f && rt.jsx(dy, { ref: c, style: { color: s, weight: 5 } }) });
}
function pT() {
  const o2 = ci((S) => S.mainColor), s = q.useRef(), c = q.useRef(), f = ci((S) => S.bbox), [m, g] = q.useState(null);
  async function y(S, w) {
    console.log("running route");
    try {
      const T = await Rx({ origin: S, destination: w });
      g(T);
    } catch (T) {
      console.error("Error fetching route:", T);
    }
  }
  return q.useEffect(() => {
    if (m && c.current && (c.current.clearLayers(), c.current.addData(m), s.current)) {
      const w = c.current.getBounds().pad(0.1);
      s.current.fitBounds(w);
    }
  }, [m]), rt.jsx("div", { style: { height: "100%", width: "100%" }, children: rt.jsxs(oT, { zoom: 10, bounds: f, zoomControl: false, ref: s, style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }, children: [rt.jsx(il, { name: "basemap", style: { zIndex: 0 }, children: rt.jsx(fT, { url: "https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", attribution: '\xA9 <a href="https://carto.com/">CARTO</a>' }) }), rt.jsx(il, { name: "color-overlay", style: { zIndex: 1, mixBlendMode: "lighten", transform: "translateZ(0)" }, children: rt.jsx(cT, { bounds: [[-90, -180], [90, 180]], pathOptions: { fillOpacity: 1, color: o2 } }) }), rt.jsx("div", { style: { position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: o2, mixBlendMode: "lighten", pointerEvents: "none", zIndex: 10 } }), m && rt.jsx(il, { name: "route", style: { zIndex: 500 }, children: rt.jsx(dy, { ref: c, style: { color: o2, weight: 5 } }) }), rt.jsx(il, { name: "markers", style: { zIndex: 600 }, children: rt.jsx(hT, { mapRef: s, calcRoute: y }) }), rt.jsx(il, { name: "network", style: { zIndex: 400 }, children: rt.jsx(mT, { mapRef: s }) })] }) });
}
function gT() {
  ci((m) => m.prevSession), ci((m) => m.mainColor);
  const o2 = ci((m) => m.profile), s = mS(o2);
  ci((m) => m.page);
  const [c, f] = q.useState(false);
  return q.useEffect(() => {
    async function m() {
      try {
        const g = await Bx({});
        ci.setState({ bbox: g.bbox }), f(true);
      } catch (g) {
        console.error("Error fetching bbox:", g);
      }
    }
    m();
  }, []), rt.jsx(uS, { theme: s, children: rt.jsx(Tx, { children: rt.jsxs(Ko, { sx: { height: "100%", width: "100%", p: s.mainContainerPadding, boxSizing: "border-box", display: "flex", flexDirection: "column", backgroundColor: s.palette.background.main }, children: [rt.jsx(Zx, {}), rt.jsx(y_, { theme: s, label: "Da", placeholder: "Seleziona origine" }), rt.jsx(y_, { theme: s, label: "A", placeholder: "Seleziona destinazione" }), rt.jsx(Ih, { sx: { overflow: "hidden", position: "relative", marginY: s.grid.spacing, height: `${s.grid.units.h * 9}px` }, children: c && rt.jsx(pT, {}) }), rt.jsx(Ux, {})] }) }) });
}
const _T = Zv.createRoot(document.querySelector("#root"));
_T.render(rt.jsx(rt.Fragment, { children: rt.jsx(gT, {}) }));
