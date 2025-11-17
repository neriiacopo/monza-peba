var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function I2(n2, r) {
  for (var a = 0; a < r.length; a++) {
    const u = r[a];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const f in u) if (f !== "default" && !(f in n2)) {
        const h = Object.getOwnPropertyDescriptor(u, f);
        h && Object.defineProperty(n2, f, h.get ? h : { enumerable: true, get: () => u[f] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
(function() {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) u(f);
  new MutationObserver((f) => {
    for (const h of f) if (h.type === "childList") for (const g of h.addedNodes) g.tagName === "LINK" && g.rel === "modulepreload" && u(g);
  }).observe(document, { childList: true, subtree: true });
  function a(f) {
    const h = {};
    return f.integrity && (h.integrity = f.integrity), f.referrerPolicy && (h.referrerPolicy = f.referrerPolicy), f.crossOrigin === "use-credentials" ? h.credentials = "include" : f.crossOrigin === "anonymous" ? h.credentials = "omit" : h.credentials = "same-origin", h;
  }
  function u(f) {
    if (f.ep) return;
    f.ep = true;
    const h = a(f);
    fetch(f.href, h);
  }
})();
function Dp(n2) {
  return n2 && n2.__esModule && Object.prototype.hasOwnProperty.call(n2, "default") ? n2.default : n2;
}
var jh = { exports: {} }, eu = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var pv;
function j2() {
  if (pv) return eu;
  pv = 1;
  var n2 = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function a(u, f, h) {
    var g = null;
    if (h !== void 0 && (g = "" + h), f.key !== void 0 && (g = "" + f.key), "key" in f) {
      h = {};
      for (var v in f) v !== "key" && (h[v] = f[v]);
    } else h = f;
    return f = h.ref, { $$typeof: n2, type: u, key: g, ref: f !== void 0 ? f : null, props: h };
  }
  return eu.Fragment = r, eu.jsx = a, eu.jsxs = a, eu;
}
var mv;
function H2() {
  return mv || (mv = 1, jh.exports = j2()), jh.exports;
}
var I = H2(), Hh = { exports: {} }, nu = {}, Uh = { exports: {} }, Fh = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var gv;
function U2() {
  return gv || (gv = 1, function(n2) {
    function r(B, tt) {
      var rt = B.length;
      B.push(tt);
      t: for (; 0 < rt; ) {
        var gt = rt - 1 >>> 1, z = B[gt];
        if (0 < f(z, tt)) B[gt] = tt, B[rt] = z, rt = gt;
        else break t;
      }
    }
    function a(B) {
      return B.length === 0 ? null : B[0];
    }
    function u(B) {
      if (B.length === 0) return null;
      var tt = B[0], rt = B.pop();
      if (rt !== tt) {
        B[0] = rt;
        t: for (var gt = 0, z = B.length, q = z >>> 1; gt < q; ) {
          var ft = 2 * (gt + 1) - 1, dt = B[ft], bt = ft + 1, _t = B[bt];
          if (0 > f(dt, rt)) bt < z && 0 > f(_t, dt) ? (B[gt] = _t, B[bt] = rt, gt = bt) : (B[gt] = dt, B[ft] = rt, gt = ft);
          else if (bt < z && 0 > f(_t, rt)) B[gt] = _t, B[bt] = rt, gt = bt;
          else break t;
        }
      }
      return tt;
    }
    function f(B, tt) {
      var rt = B.sortIndex - tt.sortIndex;
      return rt !== 0 ? rt : B.id - tt.id;
    }
    if (n2.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      n2.unstable_now = function() {
        return h.now();
      };
    } else {
      var g = Date, v = g.now();
      n2.unstable_now = function() {
        return g.now() - v;
      };
    }
    var y = [], b = [], S = 1, E = null, R = 3, k = false, A = false, O = false, $ = false, F = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function N(B) {
      for (var tt = a(b); tt !== null; ) {
        if (tt.callback === null) u(b);
        else if (tt.startTime <= B) u(b), tt.sortIndex = tt.expirationTime, r(y, tt);
        else break;
        tt = a(b);
      }
    }
    function P(B) {
      if (O = false, N(B), !A) if (a(y) !== null) A = true, U || (U = true, w());
      else {
        var tt = a(b);
        tt !== null && et(P, tt.startTime - B);
      }
    }
    var U = false, K = -1, J = 5, it = -1;
    function ut() {
      return $ ? true : !(n2.unstable_now() - it < J);
    }
    function ot() {
      if ($ = false, U) {
        var B = n2.unstable_now();
        it = B;
        var tt = true;
        try {
          t: {
            A = false, O && (O = false, V(K), K = -1), k = true;
            var rt = R;
            try {
              e: {
                for (N(B), E = a(y); E !== null && !(E.expirationTime > B && ut()); ) {
                  var gt = E.callback;
                  if (typeof gt == "function") {
                    E.callback = null, R = E.priorityLevel;
                    var z = gt(E.expirationTime <= B);
                    if (B = n2.unstable_now(), typeof z == "function") {
                      E.callback = z, N(B), tt = true;
                      break e;
                    }
                    E === a(y) && u(y), N(B);
                  } else u(y);
                  E = a(y);
                }
                if (E !== null) tt = true;
                else {
                  var q = a(b);
                  q !== null && et(P, q.startTime - B), tt = false;
                }
              }
              break t;
            } finally {
              E = null, R = rt, k = false;
            }
            tt = void 0;
          }
        } finally {
          tt ? w() : U = false;
        }
      }
    }
    var w;
    if (typeof D == "function") w = function() {
      D(ot);
    };
    else if (typeof MessageChannel < "u") {
      var st = new MessageChannel(), W = st.port2;
      st.port1.onmessage = ot, w = function() {
        W.postMessage(null);
      };
    } else w = function() {
      F(ot, 0);
    };
    function et(B, tt) {
      K = F(function() {
        B(n2.unstable_now());
      }, tt);
    }
    n2.unstable_IdlePriority = 5, n2.unstable_ImmediatePriority = 1, n2.unstable_LowPriority = 4, n2.unstable_NormalPriority = 3, n2.unstable_Profiling = null, n2.unstable_UserBlockingPriority = 2, n2.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, n2.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : J = 0 < B ? Math.floor(1e3 / B) : 5;
    }, n2.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, n2.unstable_next = function(B) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var tt = 3;
          break;
        default:
          tt = R;
      }
      var rt = R;
      R = tt;
      try {
        return B();
      } finally {
        R = rt;
      }
    }, n2.unstable_requestPaint = function() {
      $ = true;
    }, n2.unstable_runWithPriority = function(B, tt) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var rt = R;
      R = B;
      try {
        return tt();
      } finally {
        R = rt;
      }
    }, n2.unstable_scheduleCallback = function(B, tt, rt) {
      var gt = n2.unstable_now();
      switch (typeof rt == "object" && rt !== null ? (rt = rt.delay, rt = typeof rt == "number" && 0 < rt ? gt + rt : gt) : rt = gt, B) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return z = rt + z, B = { id: S++, callback: tt, priorityLevel: B, startTime: rt, expirationTime: z, sortIndex: -1 }, rt > gt ? (B.sortIndex = rt, r(b, B), a(y) === null && B === a(b) && (O ? (V(K), K = -1) : O = true, et(P, rt - gt))) : (B.sortIndex = z, r(y, B), A || k || (A = true, U || (U = true, w()))), B;
    }, n2.unstable_shouldYield = ut, n2.unstable_wrapCallback = function(B) {
      var tt = R;
      return function() {
        var rt = R;
        R = tt;
        try {
          return B.apply(this, arguments);
        } finally {
          R = rt;
        }
      };
    };
  }(Fh)), Fh;
}
var vv;
function F2() {
  return vv || (vv = 1, Uh.exports = U2()), Uh.exports;
}
var Zh = { exports: {} }, se = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var yv;
function Z2() {
  if (yv) return se;
  yv = 1;
  var n2 = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), g = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), E = Symbol.iterator;
  function R(z) {
    return z === null || typeof z != "object" ? null : (z = E && z[E] || z["@@iterator"], typeof z == "function" ? z : null);
  }
  var k = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, A = Object.assign, O = {};
  function $(z, q, ft) {
    this.props = z, this.context = q, this.refs = O, this.updater = ft || k;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(z, q) {
    if (typeof z != "object" && typeof z != "function" && z != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, z, q, "setState");
  }, $.prototype.forceUpdate = function(z) {
    this.updater.enqueueForceUpdate(this, z, "forceUpdate");
  };
  function F() {
  }
  F.prototype = $.prototype;
  function V(z, q, ft) {
    this.props = z, this.context = q, this.refs = O, this.updater = ft || k;
  }
  var D = V.prototype = new F();
  D.constructor = V, A(D, $.prototype), D.isPureReactComponent = true;
  var N = Array.isArray, P = { H: null, A: null, T: null, S: null, V: null }, U = Object.prototype.hasOwnProperty;
  function K(z, q, ft, dt, bt, _t) {
    return ft = _t.ref, { $$typeof: n2, type: z, key: q, ref: ft !== void 0 ? ft : null, props: _t };
  }
  function J(z, q) {
    return K(z.type, q, void 0, void 0, void 0, z.props);
  }
  function it(z) {
    return typeof z == "object" && z !== null && z.$$typeof === n2;
  }
  function ut(z) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + z.replace(/[=:]/g, function(ft) {
      return q[ft];
    });
  }
  var ot = /\/+/g;
  function w(z, q) {
    return typeof z == "object" && z !== null && z.key != null ? ut("" + z.key) : q.toString(36);
  }
  function st() {
  }
  function W(z) {
    switch (z.status) {
      case "fulfilled":
        return z.value;
      case "rejected":
        throw z.reason;
      default:
        switch (typeof z.status == "string" ? z.then(st, st) : (z.status = "pending", z.then(function(q) {
          z.status === "pending" && (z.status = "fulfilled", z.value = q);
        }, function(q) {
          z.status === "pending" && (z.status = "rejected", z.reason = q);
        })), z.status) {
          case "fulfilled":
            return z.value;
          case "rejected":
            throw z.reason;
        }
    }
    throw z;
  }
  function et(z, q, ft, dt, bt) {
    var _t = typeof z;
    (_t === "undefined" || _t === "boolean") && (z = null);
    var ct = false;
    if (z === null) ct = true;
    else switch (_t) {
      case "bigint":
      case "string":
      case "number":
        ct = true;
        break;
      case "object":
        switch (z.$$typeof) {
          case n2:
          case r:
            ct = true;
            break;
          case S:
            return ct = z._init, et(ct(z._payload), q, ft, dt, bt);
        }
    }
    if (ct) return bt = bt(z), ct = dt === "" ? "." + w(z, 0) : dt, N(bt) ? (ft = "", ct != null && (ft = ct.replace(ot, "$&/") + "/"), et(bt, q, ft, "", function($t) {
      return $t;
    })) : bt != null && (it(bt) && (bt = J(bt, ft + (bt.key == null || z && z.key === bt.key ? "" : ("" + bt.key).replace(ot, "$&/") + "/") + ct)), q.push(bt)), 1;
    ct = 0;
    var At = dt === "" ? "." : dt + ":";
    if (N(z)) for (var Lt = 0; Lt < z.length; Lt++) dt = z[Lt], _t = At + w(dt, Lt), ct += et(dt, q, ft, _t, bt);
    else if (Lt = R(z), typeof Lt == "function") for (z = Lt.call(z), Lt = 0; !(dt = z.next()).done; ) dt = dt.value, _t = At + w(dt, Lt++), ct += et(dt, q, ft, _t, bt);
    else if (_t === "object") {
      if (typeof z.then == "function") return et(W(z), q, ft, dt, bt);
      throw q = String(z), Error("Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead.");
    }
    return ct;
  }
  function B(z, q, ft) {
    if (z == null) return z;
    var dt = [], bt = 0;
    return et(z, dt, "", "", function(_t) {
      return q.call(ft, _t, bt++);
    }), dt;
  }
  function tt(z) {
    if (z._status === -1) {
      var q = z._result;
      q = q(), q.then(function(ft) {
        (z._status === 0 || z._status === -1) && (z._status = 1, z._result = ft);
      }, function(ft) {
        (z._status === 0 || z._status === -1) && (z._status = 2, z._result = ft);
      }), z._status === -1 && (z._status = 0, z._result = q);
    }
    if (z._status === 1) return z._result.default;
    throw z._result;
  }
  var rt = typeof reportError == "function" ? reportError : function(z) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var q = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof z == "object" && z !== null && typeof z.message == "string" ? String(z.message) : String(z), error: z });
      if (!window.dispatchEvent(q)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", z);
      return;
    }
    console.error(z);
  };
  function gt() {
  }
  return se.Children = { map: B, forEach: function(z, q, ft) {
    B(z, function() {
      q.apply(this, arguments);
    }, ft);
  }, count: function(z) {
    var q = 0;
    return B(z, function() {
      q++;
    }), q;
  }, toArray: function(z) {
    return B(z, function(q) {
      return q;
    }) || [];
  }, only: function(z) {
    if (!it(z)) throw Error("React.Children.only expected to receive a single React element child.");
    return z;
  } }, se.Component = $, se.Fragment = a, se.Profiler = f, se.PureComponent = V, se.StrictMode = u, se.Suspense = y, se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, se.__COMPILER_RUNTIME = { __proto__: null, c: function(z) {
    return P.H.useMemoCache(z);
  } }, se.cache = function(z) {
    return function() {
      return z.apply(null, arguments);
    };
  }, se.cloneElement = function(z, q, ft) {
    if (z == null) throw Error("The argument must be a React element, but you passed " + z + ".");
    var dt = A({}, z.props), bt = z.key, _t = void 0;
    if (q != null) for (ct in q.ref !== void 0 && (_t = void 0), q.key !== void 0 && (bt = "" + q.key), q) !U.call(q, ct) || ct === "key" || ct === "__self" || ct === "__source" || ct === "ref" && q.ref === void 0 || (dt[ct] = q[ct]);
    var ct = arguments.length - 2;
    if (ct === 1) dt.children = ft;
    else if (1 < ct) {
      for (var At = Array(ct), Lt = 0; Lt < ct; Lt++) At[Lt] = arguments[Lt + 2];
      dt.children = At;
    }
    return K(z.type, bt, void 0, void 0, _t, dt);
  }, se.createContext = function(z) {
    return z = { $$typeof: g, _currentValue: z, _currentValue2: z, _threadCount: 0, Provider: null, Consumer: null }, z.Provider = z, z.Consumer = { $$typeof: h, _context: z }, z;
  }, se.createElement = function(z, q, ft) {
    var dt, bt = {}, _t = null;
    if (q != null) for (dt in q.key !== void 0 && (_t = "" + q.key), q) U.call(q, dt) && dt !== "key" && dt !== "__self" && dt !== "__source" && (bt[dt] = q[dt]);
    var ct = arguments.length - 2;
    if (ct === 1) bt.children = ft;
    else if (1 < ct) {
      for (var At = Array(ct), Lt = 0; Lt < ct; Lt++) At[Lt] = arguments[Lt + 2];
      bt.children = At;
    }
    if (z && z.defaultProps) for (dt in ct = z.defaultProps, ct) bt[dt] === void 0 && (bt[dt] = ct[dt]);
    return K(z, _t, void 0, void 0, null, bt);
  }, se.createRef = function() {
    return { current: null };
  }, se.forwardRef = function(z) {
    return { $$typeof: v, render: z };
  }, se.isValidElement = it, se.lazy = function(z) {
    return { $$typeof: S, _payload: { _status: -1, _result: z }, _init: tt };
  }, se.memo = function(z, q) {
    return { $$typeof: b, type: z, compare: q === void 0 ? null : q };
  }, se.startTransition = function(z) {
    var q = P.T, ft = {};
    P.T = ft;
    try {
      var dt = z(), bt = P.S;
      bt !== null && bt(ft, dt), typeof dt == "object" && dt !== null && typeof dt.then == "function" && dt.then(gt, rt);
    } catch (_t) {
      rt(_t);
    } finally {
      P.T = q;
    }
  }, se.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, se.use = function(z) {
    return P.H.use(z);
  }, se.useActionState = function(z, q, ft) {
    return P.H.useActionState(z, q, ft);
  }, se.useCallback = function(z, q) {
    return P.H.useCallback(z, q);
  }, se.useContext = function(z) {
    return P.H.useContext(z);
  }, se.useDebugValue = function() {
  }, se.useDeferredValue = function(z, q) {
    return P.H.useDeferredValue(z, q);
  }, se.useEffect = function(z, q, ft) {
    var dt = P.H;
    if (typeof ft == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
    return dt.useEffect(z, q);
  }, se.useId = function() {
    return P.H.useId();
  }, se.useImperativeHandle = function(z, q, ft) {
    return P.H.useImperativeHandle(z, q, ft);
  }, se.useInsertionEffect = function(z, q) {
    return P.H.useInsertionEffect(z, q);
  }, se.useLayoutEffect = function(z, q) {
    return P.H.useLayoutEffect(z, q);
  }, se.useMemo = function(z, q) {
    return P.H.useMemo(z, q);
  }, se.useOptimistic = function(z, q) {
    return P.H.useOptimistic(z, q);
  }, se.useReducer = function(z, q, ft) {
    return P.H.useReducer(z, q, ft);
  }, se.useRef = function(z) {
    return P.H.useRef(z);
  }, se.useState = function(z) {
    return P.H.useState(z);
  }, se.useSyncExternalStore = function(z, q, ft) {
    return P.H.useSyncExternalStore(z, q, ft);
  }, se.useTransition = function() {
    return P.H.useTransition();
  }, se.version = "19.1.0", se;
}
var _v;
function Np() {
  return _v || (_v = 1, Zh.exports = Z2()), Zh.exports;
}
var Vh = { exports: {} }, Yn = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var bv;
function V2() {
  if (bv) return Yn;
  bv = 1;
  var n2 = Np();
  function r(y) {
    var b = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++) b += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return "Minified React error #" + y + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function a() {
  }
  var u = { d: { f: a, r: function() {
    throw Error(r(522));
  }, D: a, C: a, L: a, m: a, X: a, S: a, M: a }, p: 0, findDOMNode: null }, f = Symbol.for("react.portal");
  function h(y, b, S) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: f, key: E == null ? null : "" + E, children: y, containerInfo: b, implementation: S };
  }
  var g = n2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function v(y, b) {
    if (y === "font") return "";
    if (typeof b == "string") return b === "use-credentials" ? b : "";
  }
  return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, Yn.createPortal = function(y, b) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11) throw Error(r(299));
    return h(y, b, null, S);
  }, Yn.flushSync = function(y) {
    var b = g.T, S = u.p;
    try {
      if (g.T = null, u.p = 2, y) return y();
    } finally {
      g.T = b, u.p = S, u.d.f();
    }
  }, Yn.preconnect = function(y, b) {
    typeof y == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, u.d.C(y, b));
  }, Yn.prefetchDNS = function(y) {
    typeof y == "string" && u.d.D(y);
  }, Yn.preinit = function(y, b) {
    if (typeof y == "string" && b && typeof b.as == "string") {
      var S = b.as, E = v(S, b.crossOrigin), R = typeof b.integrity == "string" ? b.integrity : void 0, k = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      S === "style" ? u.d.S(y, typeof b.precedence == "string" ? b.precedence : void 0, { crossOrigin: E, integrity: R, fetchPriority: k }) : S === "script" && u.d.X(y, { crossOrigin: E, integrity: R, fetchPriority: k, nonce: typeof b.nonce == "string" ? b.nonce : void 0 });
    }
  }, Yn.preinitModule = function(y, b) {
    if (typeof y == "string") if (typeof b == "object" && b !== null) {
      if (b.as == null || b.as === "script") {
        var S = v(b.as, b.crossOrigin);
        u.d.M(y, { crossOrigin: S, integrity: typeof b.integrity == "string" ? b.integrity : void 0, nonce: typeof b.nonce == "string" ? b.nonce : void 0 });
      }
    } else b == null && u.d.M(y);
  }, Yn.preload = function(y, b) {
    if (typeof y == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var S = b.as, E = v(S, b.crossOrigin);
      u.d.L(y, S, { crossOrigin: E, integrity: typeof b.integrity == "string" ? b.integrity : void 0, nonce: typeof b.nonce == "string" ? b.nonce : void 0, type: typeof b.type == "string" ? b.type : void 0, fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0, referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0, imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0, imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0, media: typeof b.media == "string" ? b.media : void 0 });
    }
  }, Yn.preloadModule = function(y, b) {
    if (typeof y == "string") if (b) {
      var S = v(b.as, b.crossOrigin);
      u.d.m(y, { as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0, crossOrigin: S, integrity: typeof b.integrity == "string" ? b.integrity : void 0 });
    } else u.d.m(y);
  }, Yn.requestFormReset = function(y) {
    u.d.r(y);
  }, Yn.unstable_batchedUpdates = function(y, b) {
    return y(b);
  }, Yn.useFormState = function(y, b, S) {
    return g.H.useFormState(y, b, S);
  }, Yn.useFormStatus = function() {
    return g.H.useHostTransitionStatus();
  }, Yn.version = "19.1.0", Yn;
}
var xv;
function Wy() {
  if (xv) return Vh.exports;
  xv = 1;
  function n2() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
    } catch (r) {
      console.error(r);
    }
  }
  return n2(), Vh.exports = V2(), Vh.exports;
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
var Sv;
function G2() {
  if (Sv) return nu;
  Sv = 1;
  var n2 = F2(), r = Np(), a = Wy();
  function u(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var o = 2; o < arguments.length; o++) e += "&args[]=" + encodeURIComponent(arguments[o]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function h(t) {
    var e = t, o = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (o = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? o : null;
  }
  function g(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function v(t) {
    if (h(t) !== t) throw Error(u(188));
  }
  function y(t) {
    var e = t.alternate;
    if (!e) {
      if (e = h(t), e === null) throw Error(u(188));
      return e !== t ? null : t;
    }
    for (var o = t, l = e; ; ) {
      var d = o.return;
      if (d === null) break;
      var p = d.alternate;
      if (p === null) {
        if (l = d.return, l !== null) {
          o = l;
          continue;
        }
        break;
      }
      if (d.child === p.child) {
        for (p = d.child; p; ) {
          if (p === o) return v(d), t;
          if (p === l) return v(d), e;
          p = p.sibling;
        }
        throw Error(u(188));
      }
      if (o.return !== l.return) o = d, l = p;
      else {
        for (var x = false, T = d.child; T; ) {
          if (T === o) {
            x = true, o = d, l = p;
            break;
          }
          if (T === l) {
            x = true, l = d, o = p;
            break;
          }
          T = T.sibling;
        }
        if (!x) {
          for (T = p.child; T; ) {
            if (T === o) {
              x = true, o = p, l = d;
              break;
            }
            if (T === l) {
              x = true, l = p, o = d;
              break;
            }
            T = T.sibling;
          }
          if (!x) throw Error(u(189));
        }
      }
      if (o.alternate !== l) throw Error(u(190));
    }
    if (o.tag !== 3) throw Error(u(188));
    return o.stateNode.current === o ? t : e;
  }
  function b(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = b(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var S = Object.assign, E = Symbol.for("react.element"), R = Symbol.for("react.transitional.element"), k = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), V = Symbol.for("react.consumer"), D = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), it = Symbol.for("react.activity"), ut = Symbol.for("react.memo_cache_sentinel"), ot = Symbol.iterator;
  function w(t) {
    return t === null || typeof t != "object" ? null : (t = ot && t[ot] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var st = Symbol.for("react.client.reference");
  function W(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === st ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case A:
        return "Fragment";
      case $:
        return "Profiler";
      case O:
        return "StrictMode";
      case P:
        return "Suspense";
      case U:
        return "SuspenseList";
      case it:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case k:
        return "Portal";
      case D:
        return (t.displayName || "Context") + ".Provider";
      case V:
        return (t._context.displayName || "Context") + ".Consumer";
      case N:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case K:
        return e = t.displayName || null, e !== null ? e : W(t.type) || "Memo";
      case J:
        e = t._payload, t = t._init;
        try {
          return W(t(e));
        } catch {
        }
    }
    return null;
  }
  var et = Array.isArray, B = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, tt = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, rt = { pending: false, data: null, method: null, action: null }, gt = [], z = -1;
  function q(t) {
    return { current: t };
  }
  function ft(t) {
    0 > z || (t.current = gt[z], gt[z] = null, z--);
  }
  function dt(t, e) {
    z++, gt[z] = t.current, t.current = e;
  }
  var bt = q(null), _t = q(null), ct = q(null), At = q(null);
  function Lt(t, e) {
    switch (dt(ct, e), dt(_t, t), dt(bt, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Ug(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI) e = Ug(e), t = Fg(e, t);
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
    ft(bt), dt(bt, t);
  }
  function $t() {
    ft(bt), ft(_t), ft(ct);
  }
  function Rt(t) {
    t.memoizedState !== null && dt(At, t);
    var e = bt.current, o = Fg(e, t.type);
    e !== o && (dt(_t, t), dt(bt, o));
  }
  function Ut(t) {
    _t.current === t && (ft(bt), ft(_t)), At.current === t && (ft(At), Xl._currentValue = rt);
  }
  var Wt = Object.prototype.hasOwnProperty, te = n2.unstable_scheduleCallback, Zt = n2.unstable_cancelCallback, de = n2.unstable_shouldYield, ie = n2.unstable_requestPaint, ue = n2.unstable_now, Ct = n2.unstable_getCurrentPriorityLevel, _e = n2.unstable_ImmediatePriority, Bt = n2.unstable_UserBlockingPriority, Jt = n2.unstable_NormalPriority, Mt = n2.unstable_LowPriority, tn = n2.unstable_IdlePriority, be = n2.log, Ze = n2.unstable_setDisableYieldValue, ce = null, Vt = null;
  function oe(t) {
    if (typeof be == "function" && Ze(t), Vt && typeof Vt.setStrictMode == "function") try {
      Vt.setStrictMode(ce, t);
    } catch {
    }
  }
  var he = Math.clz32 ? Math.clz32 : fn, xe = Math.log, Ht = Math.LN2;
  function fn(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (xe(t) / Ht | 0) | 0;
  }
  var Bn = 256, rn = 4194304;
  function Pt(t) {
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
  function ne(t, e, o) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var d = 0, p = t.suspendedLanes, x = t.pingedLanes;
    t = t.warmLanes;
    var T = l & 134217727;
    return T !== 0 ? (l = T & ~p, l !== 0 ? d = Pt(l) : (x &= T, x !== 0 ? d = Pt(x) : o || (o = T & ~t, o !== 0 && (d = Pt(o))))) : (T = l & ~p, T !== 0 ? d = Pt(T) : x !== 0 ? d = Pt(x) : o || (o = l & ~t, o !== 0 && (d = Pt(o)))), d === 0 ? 0 : e !== 0 && e !== d && (e & p) === 0 && (p = d & -d, o = e & -e, p >= o || p === 32 && (o & 4194048) !== 0) ? e : d;
  }
  function re(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Wn(t, e) {
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
  function lo() {
    var t = Bn;
    return Bn <<= 1, (Bn & 4194048) === 0 && (Bn = 256), t;
  }
  function uo() {
    var t = rn;
    return rn <<= 1, (rn & 62914560) === 0 && (rn = 4194304), t;
  }
  function Qn(t) {
    for (var e = [], o = 0; 31 > o; o++) e.push(t);
    return e;
  }
  function Tn(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function co(t, e, o, l, d, p) {
    var x = t.pendingLanes;
    t.pendingLanes = o, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= o, t.entangledLanes &= o, t.errorRecoveryDisabledLanes &= o, t.shellSuspendCounter = 0;
    var T = t.entanglements, H = t.expirationTimes, Q = t.hiddenUpdates;
    for (o = x & ~o; 0 < o; ) {
      var vt = 31 - he(o), xt = 1 << vt;
      T[vt] = 0, H[vt] = -1;
      var nt = Q[vt];
      if (nt !== null) for (Q[vt] = null, vt = 0; vt < nt.length; vt++) {
        var at = nt[vt];
        at !== null && (at.lane &= -536870913);
      }
      o &= ~xt;
    }
    l !== 0 && ui(t, l, 0), p !== 0 && d === 0 && t.tag !== 0 && (t.suspendedLanes |= p & ~(x & ~e));
  }
  function ui(t, e, o) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - he(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | o & 4194090;
  }
  function ci(t, e) {
    var o = t.entangledLanes |= e;
    for (t = t.entanglements; o; ) {
      var l = 31 - he(o), d = 1 << l;
      d & e | t[l] & e && (t[l] |= e), o &= ~d;
    }
  }
  function fi(t) {
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
  function Ko(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Zi() {
    var t = tt.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : lv(t.type));
  }
  function To(t, e) {
    var o = tt.p;
    try {
      return tt.p = t, e();
    } finally {
      tt.p = o;
    }
  }
  var di = Math.random().toString(36).slice(2), Qe = "__reactFiber$" + di, an = "__reactProps$" + di, hi = "__reactContainer$" + di, En = "__reactEvents$" + di, Dt = "__reactListeners$" + di, Mr = "__reactHandles$" + di, Xo = "__reactResources$" + di, pi = "__reactMarker$" + di;
  function Ve(t) {
    delete t[Qe], delete t[an], delete t[En], delete t[Dt], delete t[Mr];
  }
  function Pe(t) {
    var e = t[Qe];
    if (e) return e;
    for (var o = t.parentNode; o; ) {
      if (e = o[hi] || o[Qe]) {
        if (o = e.alternate, e.child !== null || o !== null && o.child !== null) for (t = qg(t); t !== null; ) {
          if (o = t[Qe]) return o;
          t = qg(t);
        }
        return e;
      }
      t = o, o = t.parentNode;
    }
    return null;
  }
  function Mn(t) {
    if (t = t[Qe] || t[hi]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function Zn(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(u(33));
  }
  function Jn(t) {
    var e = t[Xo];
    return e || (e = t[Xo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Je(t) {
    t[pi] = true;
  }
  var pt = /* @__PURE__ */ new Set(), ht = {};
  function Tt(t, e) {
    It(t, e), It(t + "Capture", e);
  }
  function It(t, e) {
    for (ht[t] = e, t = 0; t < e.length; t++) pt.add(e[t]);
  }
  var Yt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ge = {}, qe = {};
  function ti(t) {
    return Wt.call(qe, t) ? true : Wt.call(Ge, t) ? false : Yt.test(t) ? qe[t] = true : (Ge[t] = true, false);
  }
  function fo(t, e, o) {
    if (ti(e)) if (o === null) t.removeAttribute(e);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(e);
          return;
        case "boolean":
          var l = e.toLowerCase().slice(0, 5);
          if (l !== "data-" && l !== "aria-") {
            t.removeAttribute(e);
            return;
          }
      }
      t.setAttribute(e, "" + o);
    }
  }
  function Wo(t, e, o) {
    if (o === null) t.removeAttribute(e);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + o);
    }
  }
  function mi(t, e, o, l) {
    if (l === null) t.removeAttribute(o);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(o);
          return;
      }
      t.setAttributeNS(e, o, "" + l);
    }
  }
  var Eo, ae;
  function On(t) {
    if (Eo === void 0) try {
      throw Error();
    } catch (o) {
      var e = o.stack.trim().match(/\n( *(at )?)/);
      Eo = e && e[1] || "", ae = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Eo + t + ae;
  }
  var ei = false;
  function ni(t, e) {
    if (!t || ei) return "";
    ei = true;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = { DetermineComponentFrameRoot: function() {
        try {
          if (e) {
            var xt = function() {
              throw Error();
            };
            if (Object.defineProperty(xt.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(xt, []);
              } catch (at) {
                var nt = at;
              }
              Reflect.construct(t, [], xt);
            } else {
              try {
                xt.call();
              } catch (at) {
                nt = at;
              }
              t.call(xt.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (at) {
              nt = at;
            }
            (xt = t()) && typeof xt.catch == "function" && xt.catch(function() {
            });
          }
        } catch (at) {
          if (at && nt && typeof at.stack == "string") return [at.stack, nt.stack];
        }
        return [null, null];
      } };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var d = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
      d && d.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var p = l.DetermineComponentFrameRoot(), x = p[0], T = p[1];
      if (x && T) {
        var H = x.split(`
`), Q = T.split(`
`);
        for (d = l = 0; l < H.length && !H[l].includes("DetermineComponentFrameRoot"); ) l++;
        for (; d < Q.length && !Q[d].includes("DetermineComponentFrameRoot"); ) d++;
        if (l === H.length || d === Q.length) for (l = H.length - 1, d = Q.length - 1; 1 <= l && 0 <= d && H[l] !== Q[d]; ) d--;
        for (; 1 <= l && 0 <= d; l--, d--) if (H[l] !== Q[d]) {
          if (l !== 1 || d !== 1) do
            if (l--, d--, 0 > d || H[l] !== Q[d]) {
              var vt = `
` + H[l].replace(" at new ", " at ");
              return t.displayName && vt.includes("<anonymous>") && (vt = vt.replace("<anonymous>", t.displayName)), vt;
            }
          while (1 <= l && 0 <= d);
          break;
        }
      }
    } finally {
      ei = false, Error.prepareStackTrace = o;
    }
    return (o = t ? t.displayName || t.name : "") ? On(o) : "";
  }
  function Se(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return On(t.type);
      case 16:
        return On("Lazy");
      case 13:
        return On("Suspense");
      case 19:
        return On("SuspenseList");
      case 0:
      case 15:
        return ni(t.type, false);
      case 11:
        return ni(t.type.render, false);
      case 1:
        return ni(t.type, true);
      case 31:
        return On("Activity");
      default:
        return "";
    }
  }
  function Ye(t) {
    try {
      var e = "";
      do
        e += Se(t), t = t.return;
      while (t);
      return e;
    } catch (o) {
      return `
Error generating stack: ` + o.message + `
` + o.stack;
    }
  }
  function Dn(t) {
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
  function Qo(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Or(t) {
    var e = Qo(t) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), l = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var d = o.get, p = o.set;
      return Object.defineProperty(t, e, { configurable: true, get: function() {
        return d.call(this);
      }, set: function(x) {
        l = "" + x, p.call(this, x);
      } }), Object.defineProperty(t, e, { enumerable: o.enumerable }), { getValue: function() {
        return l;
      }, setValue: function(x) {
        l = "" + x;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[e];
      } };
    }
  }
  function Ar(t) {
    t._valueTracker || (t._valueTracker = Or(t));
  }
  function ee(t) {
    if (!t) return false;
    var e = t._valueTracker;
    if (!e) return true;
    var o = e.getValue(), l = "";
    return t && (l = Qo(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== o ? (e.setValue(t), true) : false;
  }
  function Ke(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var rl = /[\n"\\]/g;
  function Nn(t) {
    return t.replace(rl, function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Vn(t, e, o, l, d, p, x, T) {
    t.name = "", x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? t.type = x : t.removeAttribute("type"), e != null ? x === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Dn(e)) : t.value !== "" + Dn(e) && (t.value = "" + Dn(e)) : x !== "submit" && x !== "reset" || t.removeAttribute("value"), e != null ? Rr(t, x, Dn(e)) : o != null ? Rr(t, x, Dn(o)) : l != null && t.removeAttribute("value"), d == null && p != null && (t.defaultChecked = !!p), d != null && (t.checked = d && typeof d != "function" && typeof d != "symbol"), T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? t.name = "" + Dn(T) : t.removeAttribute("name");
  }
  function Nu(t, e, o, l, d, p, x, T) {
    if (p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (t.type = p), e != null || o != null) {
      if (!(p !== "submit" && p !== "reset" || e != null)) return;
      o = o != null ? "" + Dn(o) : "", e = e != null ? "" + Dn(e) : o, T || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? d, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = T ? t.checked : !!l, t.defaultChecked = !!l, x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" && (t.name = x);
  }
  function Rr(t, e, o) {
    e === "number" && Ke(t.ownerDocument) === t || t.defaultValue === "" + o || (t.defaultValue = "" + o);
  }
  function gi(t, e, o, l) {
    if (t = t.options, e) {
      e = {};
      for (var d = 0; d < o.length; d++) e["$" + o[d]] = true;
      for (o = 0; o < t.length; o++) d = e.hasOwnProperty("$" + t[o].value), t[o].selected !== d && (t[o].selected = d), d && l && (t[o].defaultSelected = true);
    } else {
      for (o = "" + Dn(o), e = null, d = 0; d < t.length; d++) {
        if (t[d].value === o) {
          t[d].selected = true, l && (t[d].defaultSelected = true);
          return;
        }
        e !== null || t[d].disabled || (e = t[d]);
      }
      e !== null && (e.selected = true);
    }
  }
  function sn(t, e, o) {
    if (e != null && (e = "" + Dn(e), e !== t.value && (t.value = e), o == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = o != null ? "" + Dn(o) : "";
  }
  function Mo(t, e, o, l) {
    if (e == null) {
      if (l != null) {
        if (o != null) throw Error(u(92));
        if (et(l)) {
          if (1 < l.length) throw Error(u(93));
          l = l[0];
        }
        o = l;
      }
      o == null && (o = ""), e = o;
    }
    o = Dn(e), t.defaultValue = o, l = t.textContent, l === o && l !== "" && l !== null && (t.value = l);
  }
  function Vi(t, e) {
    if (e) {
      var o = t.firstChild;
      if (o && o === t.lastChild && o.nodeType === 3) {
        o.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var xa = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function is(t, e, o) {
    var l = e.indexOf("--") === 0;
    o == null || typeof o == "boolean" || o === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, o) : typeof o != "number" || o === 0 || xa.has(e) ? e === "float" ? t.cssFloat = o : t[e] = ("" + o).trim() : t[e] = o + "px";
  }
  function kr(t, e, o) {
    if (e != null && typeof e != "object") throw Error(u(62));
    if (t = t.style, o != null) {
      for (var l in o) !o.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var d in e) l = e[d], e.hasOwnProperty(d) && o[d] !== l && is(t, d, l);
    } else for (var p in e) e.hasOwnProperty(p) && is(t, p, e[p]);
  }
  function Sa(t) {
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
  var al = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), os = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Lr(t) {
    return os.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var wa = null;
  function zr(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Jo = null, Oo = null;
  function $u(t) {
    var e = Mn(t);
    if (e && (t = e.stateNode)) {
      var o = t[an] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Vn(t, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name), e = o.name, o.type === "radio" && e != null) {
            for (o = t; o.parentNode; ) o = o.parentNode;
            for (o = o.querySelectorAll('input[name="' + Nn("" + e) + '"][type="radio"]'), e = 0; e < o.length; e++) {
              var l = o[e];
              if (l !== t && l.form === t.form) {
                var d = l[an] || null;
                if (!d) throw Error(u(90));
                Vn(l, d.value, d.defaultValue, d.defaultValue, d.checked, d.defaultChecked, d.type, d.name);
              }
            }
            for (e = 0; e < o.length; e++) l = o[e], l.form === t.form && ee(l);
          }
          break t;
        case "textarea":
          sn(t, o.value, o.defaultValue);
          break t;
        case "select":
          e = o.value, e != null && gi(t, !!o.multiple, e, false);
      }
    }
  }
  var Qt = false;
  function Ti(t, e, o) {
    if (Qt) return t(e, o);
    Qt = true;
    try {
      var l = t(e);
      return l;
    } finally {
      if (Qt = false, (Jo !== null || Oo !== null) && (Lc(), Jo && (e = Jo, t = Oo, Oo = Jo = null, $u(e), t))) for (e = 0; e < t.length; e++) $u(t[e]);
    }
  }
  function Ce(t, e) {
    var o = t.stateNode;
    if (o === null) return null;
    var l = o[an] || null;
    if (l === null) return null;
    o = l[e];
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
        (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
        break t;
      default:
        t = false;
    }
    if (t) return null;
    if (o && typeof o != "function") throw Error(u(231, e, typeof o));
    return o;
  }
  var Gi = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ca = false;
  if (Gi) try {
    var tr = {};
    Object.defineProperty(tr, "passive", { get: function() {
      Ca = true;
    } }), window.addEventListener("test", tr, tr), window.removeEventListener("test", tr, tr);
  } catch {
    Ca = false;
  }
  var qi = null, ho = null, Pr = null;
  function Br() {
    if (Pr) return Pr;
    var t, e = ho, o = e.length, l, d = "value" in qi ? qi.value : qi.textContent, p = d.length;
    for (t = 0; t < o && e[t] === d[t]; t++) ;
    var x = o - t;
    for (l = 1; l <= x && e[o - l] === d[p - l]; l++) ;
    return Pr = d.slice(t, 1 < l ? 1 - l : void 0);
  }
  function dn(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Yi() {
    return true;
  }
  function sl() {
    return false;
  }
  function $n(t) {
    function e(o, l, d, p, x) {
      this._reactName = o, this._targetInst = d, this.type = l, this.nativeEvent = p, this.target = x, this.currentTarget = null;
      for (var T in t) t.hasOwnProperty(T) && (o = t[T], this[T] = o ? o(p) : p[T]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === false) ? Yi : sl, this.isPropagationStopped = sl, this;
    }
    return S(e.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = false), this.isDefaultPrevented = Yi);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = true), this.isPropagationStopped = Yi);
    }, persist: function() {
    }, isPersistent: Yi }), e;
  }
  var er = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ta = $n(er), nr = S({}, er, { view: 0, detail: 0 }), Qf = $n(nr), rs, pe, Ea, Gn = S({}, nr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: as, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== Ea && (Ea && t.type === "mousemove" ? (rs = t.screenX - Ea.screenX, pe = t.screenY - Ea.screenY) : pe = rs = 0, Ea = t), rs);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : pe;
  } }), Dr = $n(Gn), Iu = S({}, Gn, { dataTransfer: 0 }), Jf = $n(Iu), ll = S({}, nr, { relatedTarget: 0 }), ul = $n(ll), ju = S({}, er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), td = $n(ju), ed = S({}, er, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), cl = $n(ed), nd = S({}, er, { data: 0 }), Ei = $n(nd), id = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Hu = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Ao = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Uu(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Ao[t]) ? !!e[t] : false;
  }
  function as() {
    return Uu;
  }
  var fl = S({}, nr, { key: function(t) {
    if (t.key) {
      var e = id[t.key] || t.key;
      if (e !== "Unidentified") return e;
    }
    return t.type === "keypress" ? (t = dn(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Hu[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: as, charCode: function(t) {
    return t.type === "keypress" ? dn(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? dn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), od = $n(fl), Fu = S({}, Gn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), dl = $n(Fu), rd = S({}, nr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: as }), ad = $n(rd), hl = S({}, er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), sd = $n(hl), Zu = S({}, Gn, { deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  }, deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), Vu = $n(Zu), ss = S({}, er, { newState: 0, oldState: 0 }), ir = $n(ss), ld = [9, 13, 27, 32], or = Gi && "CompositionEvent" in window, An = null;
  Gi && "documentMode" in document && (An = document.documentMode);
  var Gu = Gi && "TextEvent" in window && !An, pl = Gi && (!or || An && 8 < An && 11 >= An), qu = " ", ls = false;
  function us(t, e) {
    switch (t) {
      case "keyup":
        return ld.indexOf(e.keyCode) !== -1;
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
  function Yu(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Nr = false;
  function Ku(t, e) {
    switch (t) {
      case "compositionend":
        return Yu(e);
      case "keypress":
        return e.which !== 32 ? null : (ls = true, qu);
      case "textInput":
        return t = e.data, t === qu && ls ? null : t;
      default:
        return null;
    }
  }
  function ud(t, e) {
    if (Nr) return t === "compositionend" || !or && us(t, e) ? (t = Br(), Pr = ho = qi = null, Nr = false, t) : null;
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
        return pl && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Mi = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function rr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Mi[t.type] : e === "textarea";
  }
  function Xu(t, e, o, l) {
    Jo ? Oo ? Oo.push(l) : Oo = [l] : Jo = l, e = $c(e, "onChange"), 0 < e.length && (o = new Ta("onChange", "change", null, o, l), t.push({ event: o, listeners: e }));
  }
  var ii = null, Ma = null;
  function $r(t) {
    Ng(t, 0);
  }
  function cs(t) {
    var e = Zn(t);
    if (ee(e)) return t;
  }
  function Ir(t, e) {
    if (t === "change") return e;
  }
  var ml = false;
  if (Gi) {
    var jr;
    if (Gi) {
      var gl = "oninput" in document;
      if (!gl) {
        var po = document.createElement("div");
        po.setAttribute("oninput", "return;"), gl = typeof po.oninput == "function";
      }
      jr = gl;
    } else jr = false;
    ml = jr && (!document.documentMode || 9 < document.documentMode);
  }
  function Oa() {
    ii && (ii.detachEvent("onpropertychange", Wu), Ma = ii = null);
  }
  function Wu(t) {
    if (t.propertyName === "value" && cs(Ma)) {
      var e = [];
      Xu(e, Ma, t, zr(t)), Ti($r, e);
    }
  }
  function vl(t, e, o) {
    t === "focusin" ? (Oa(), ii = e, Ma = o, ii.attachEvent("onpropertychange", Wu)) : t === "focusout" && Oa();
  }
  function cd(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return cs(Ma);
  }
  function mo(t, e) {
    if (t === "click") return cs(e);
  }
  function fd(t, e) {
    if (t === "input" || t === "change") return cs(e);
  }
  function Hr(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var oi = typeof Object.is == "function" ? Object.is : Hr;
  function ri(t, e) {
    if (oi(t, e)) return true;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
    var o = Object.keys(t), l = Object.keys(e);
    if (o.length !== l.length) return false;
    for (l = 0; l < o.length; l++) {
      var d = o[l];
      if (!Wt.call(e, d) || !oi(t[d], e[d])) return false;
    }
    return true;
  }
  function Aa(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function yl(t, e) {
    var o = Aa(t);
    t = 0;
    for (var l; o; ) {
      if (o.nodeType === 3) {
        if (l = t + o.textContent.length, t <= e && l >= e) return { node: o, offset: e - t };
        t = l;
      }
      t: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break t;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Aa(o);
    }
  }
  function fs(t, e) {
    return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? fs(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
  }
  function Ra(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Ke(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var o = typeof e.contentWindow.location.href == "string";
      } catch {
        o = false;
      }
      if (o) t = e.contentWindow;
      else break;
      e = Ke(t.document);
    }
    return e;
  }
  function ka(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var ds = Gi && "documentMode" in document && 11 >= document.documentMode, Oi = null, Ur = null, ar = null, hs = false;
  function Qu(t, e, o) {
    var l = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    hs || Oi == null || Oi !== Ke(l) || (l = Oi, "selectionStart" in l && ka(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), ar && ri(ar, l) || (ar = l, l = $c(Ur, "onSelect"), 0 < l.length && (e = new Ta("onSelect", "select", null, e, o), t.push({ event: e, listeners: l }), e.target = Oi)));
  }
  function Ki(t, e) {
    var o = {};
    return o[t.toLowerCase()] = e.toLowerCase(), o["Webkit" + t] = "webkit" + e, o["Moz" + t] = "moz" + e, o;
  }
  var Fr = { animationend: Ki("Animation", "AnimationEnd"), animationiteration: Ki("Animation", "AnimationIteration"), animationstart: Ki("Animation", "AnimationStart"), transitionrun: Ki("Transition", "TransitionRun"), transitionstart: Ki("Transition", "TransitionStart"), transitioncancel: Ki("Transition", "TransitionCancel"), transitionend: Ki("Transition", "TransitionEnd") }, ps = {}, Ju = {};
  Gi && (Ju = document.createElement("div").style, "AnimationEvent" in window || (delete Fr.animationend.animation, delete Fr.animationiteration.animation, delete Fr.animationstart.animation), "TransitionEvent" in window || delete Fr.transitionend.transition);
  function Ro(t) {
    if (ps[t]) return ps[t];
    if (!Fr[t]) return t;
    var e = Fr[t], o;
    for (o in e) if (e.hasOwnProperty(o) && o in Ju) return ps[t] = e[o];
    return t;
  }
  var tc = Ro("animationend"), Ai = Ro("animationiteration"), La = Ro("animationstart"), dd = Ro("transitionrun"), ms = Ro("transitionstart"), hd = Ro("transitioncancel"), _l = Ro("transitionend"), ec = /* @__PURE__ */ new Map(), sr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  sr.push("scrollEnd");
  function Ri(t, e) {
    ec.set(t, e), Tt(e, [t]);
  }
  var lr = /* @__PURE__ */ new WeakMap();
  function ai(t, e) {
    if (typeof t == "object" && t !== null) {
      var o = lr.get(t);
      return o !== void 0 ? o : (e = { value: t, source: e, stack: Ye(e) }, lr.set(t, e), e);
    }
    return { value: t, source: e, stack: Ye(e) };
  }
  var si = [], Zr = 0, ki = 0;
  function za() {
    for (var t = Zr, e = ki = Zr = 0; e < t; ) {
      var o = si[e];
      si[e++] = null;
      var l = si[e];
      si[e++] = null;
      var d = si[e];
      si[e++] = null;
      var p = si[e];
      if (si[e++] = null, l !== null && d !== null) {
        var x = l.pending;
        x === null ? d.next = d : (d.next = x.next, x.next = d), l.pending = d;
      }
      p !== 0 && Ba(o, d, p);
    }
  }
  function Pa(t, e, o, l) {
    si[Zr++] = t, si[Zr++] = e, si[Zr++] = o, si[Zr++] = l, ki |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function ur(t, e, o, l) {
    return Pa(t, e, o, l), ko(t);
  }
  function Vr(t, e) {
    return Pa(t, null, null, e), ko(t);
  }
  function Ba(t, e, o) {
    t.lanes |= o;
    var l = t.alternate;
    l !== null && (l.lanes |= o);
    for (var d = false, p = t.return; p !== null; ) p.childLanes |= o, l = p.alternate, l !== null && (l.childLanes |= o), p.tag === 22 && (t = p.stateNode, t === null || t._visibility & 1 || (d = true)), t = p, p = p.return;
    return t.tag === 3 ? (p = t.stateNode, d && e !== null && (d = 31 - he(o), t = p.hiddenUpdates, l = t[d], l === null ? t[d] = [e] : l.push(e), e.lane = o | 536870912), p) : null;
  }
  function ko(t) {
    if (50 < Ul) throw Ul = 0, ch = null, Error(u(185));
    for (var e = t.return; e !== null; ) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var cr = {};
  function nc(t, e, o, l) {
    this.tag = t, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function li(t, e, o, l) {
    return new nc(t, e, o, l);
  }
  function gs(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Xi(t, e) {
    var o = t.alternate;
    return o === null ? (o = li(t.tag, e, t.key, t.mode), o.elementType = t.elementType, o.type = t.type, o.stateNode = t.stateNode, o.alternate = t, t.alternate = o) : (o.pendingProps = e, o.type = t.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = t.flags & 65011712, o.childLanes = t.childLanes, o.lanes = t.lanes, o.child = t.child, o.memoizedProps = t.memoizedProps, o.memoizedState = t.memoizedState, o.updateQueue = t.updateQueue, e = t.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, o.sibling = t.sibling, o.index = t.index, o.ref = t.ref, o.refCleanup = t.refCleanup, o;
  }
  function bl(t, e) {
    t.flags &= 65011714;
    var o = t.alternate;
    return o === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = o.childLanes, t.lanes = o.lanes, t.child = o.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = o.memoizedProps, t.memoizedState = o.memoizedState, t.updateQueue = o.updateQueue, t.type = o.type, e = o.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t;
  }
  function Da(t, e, o, l, d, p) {
    var x = 0;
    if (l = t, typeof t == "function") gs(t) && (x = 1);
    else if (typeof t == "string") x = E2(t, o, bt.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case it:
        return t = li(31, o, e, d), t.elementType = it, t.lanes = p, t;
      case A:
        return Lo(o.children, d, p, e);
      case O:
        x = 8, d |= 24;
        break;
      case $:
        return t = li(12, o, e, d | 2), t.elementType = $, t.lanes = p, t;
      case P:
        return t = li(13, o, e, d), t.elementType = P, t.lanes = p, t;
      case U:
        return t = li(19, o, e, d), t.elementType = U, t.lanes = p, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case F:
          case D:
            x = 10;
            break t;
          case V:
            x = 9;
            break t;
          case N:
            x = 11;
            break t;
          case K:
            x = 14;
            break t;
          case J:
            x = 16, l = null;
            break t;
        }
        x = 29, o = Error(u(130, t === null ? "null" : typeof t, "")), l = null;
    }
    return e = li(x, o, e, d), e.elementType = t, e.type = l, e.lanes = p, e;
  }
  function Lo(t, e, o, l) {
    return t = li(7, t, l, e), t.lanes = o, t;
  }
  function xl(t, e, o) {
    return t = li(6, t, null, e), t.lanes = o, t;
  }
  function vs(t, e, o) {
    return e = li(4, t.children !== null ? t.children : [], t.key, e), e.lanes = o, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
  }
  var fr = [], Gr = 0, i = null, s = 0, c = [], m = 0, _ = null, C = 1, j = "";
  function Y(t, e) {
    fr[Gr++] = s, fr[Gr++] = i, i = t, s = e;
  }
  function lt(t, e, o) {
    c[m++] = C, c[m++] = j, c[m++] = _, _ = t;
    var l = C;
    t = j;
    var d = 32 - he(l) - 1;
    l &= ~(1 << d), o += 1;
    var p = 32 - he(e) + d;
    if (30 < p) {
      var x = d - d % 5;
      p = (l & (1 << x) - 1).toString(32), l >>= x, d -= x, C = 1 << 32 - he(e) + d | o << d | l, j = p + t;
    } else C = 1 << p | o << d | l, j = t;
  }
  function St(t) {
    t.return !== null && (Y(t, 1), lt(t, 1, 0));
  }
  function Et(t) {
    for (; t === i; ) i = fr[--Gr], fr[Gr] = null, s = fr[--Gr], fr[Gr] = null;
    for (; t === _; ) _ = c[--m], c[m] = null, j = c[--m], c[m] = null, C = c[--m], c[m] = null;
  }
  var kt = null, Nt = null, Xt = false, Xe = null, ln = false, Rn = Error(u(519));
  function vi(t) {
    var e = Error(u(418, ""));
    throw Yr(ai(e, t)), Rn;
  }
  function ic(t) {
    var e = t.stateNode, o = t.type, l = t.memoizedProps;
    switch (e[Qe] = t, e[an] = l, o) {
      case "dialog":
        ve("cancel", e), ve("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ve("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Zl.length; o++) ve(Zl[o], e);
        break;
      case "source":
        ve("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ve("error", e), ve("load", e);
        break;
      case "details":
        ve("toggle", e);
        break;
      case "input":
        ve("invalid", e), Nu(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, true), Ar(e);
        break;
      case "select":
        ve("invalid", e);
        break;
      case "textarea":
        ve("invalid", e), Mo(e, l.value, l.defaultValue, l.children), Ar(e);
    }
    o = l.children, typeof o != "string" && typeof o != "number" && typeof o != "bigint" || e.textContent === "" + o || l.suppressHydrationWarning === true || Hg(e.textContent, o) ? (l.popover != null && (ve("beforetoggle", e), ve("toggle", e)), l.onScroll != null && ve("scroll", e), l.onScrollEnd != null && ve("scrollend", e), l.onClick != null && (e.onclick = Ic), e = true) : e = false, e || vi(t);
  }
  function oc(t) {
    for (kt = t.return; kt; ) switch (kt.tag) {
      case 5:
      case 13:
        ln = false;
        return;
      case 27:
      case 3:
        ln = true;
        return;
      default:
        kt = kt.return;
    }
  }
  function Na(t) {
    if (t !== kt) return false;
    if (!Xt) return oc(t), Xt = true, false;
    var e = t.tag, o;
    if ((o = e !== 3 && e !== 27) && ((o = e === 5) && (o = t.type, o = !(o !== "form" && o !== "button") || Eh(t.type, t.memoizedProps)), o = !o), o && Nt && vi(t), oc(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8) if (o = t.data, o === "/$") {
            if (e === 0) {
              Nt = _o(t.nextSibling);
              break t;
            }
            e--;
          } else o !== "$" && o !== "$!" && o !== "$?" || e++;
          t = t.nextSibling;
        }
        Nt = null;
      }
    } else e === 27 ? (e = Nt, ua(t.type) ? (t = Rh, Rh = null, Nt = t) : Nt = e) : Nt = kt ? _o(t.stateNode.nextSibling) : null;
    return true;
  }
  function qr() {
    Nt = kt = null, Xt = false;
  }
  function rc() {
    var t = Xe;
    return t !== null && (bi === null ? bi = t : bi.push.apply(bi, t), Xe = null), t;
  }
  function Yr(t) {
    Xe === null ? Xe = [t] : Xe.push(t);
  }
  var en = q(null), Wi = null, go = null;
  function zo(t, e, o) {
    dt(en, e._currentValue), e._currentValue = o;
  }
  function vo(t) {
    t._currentValue = en.current, ft(en);
  }
  function $a(t, e, o) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === o) break;
      t = t.return;
    }
  }
  function ys(t, e, o, l) {
    var d = t.child;
    for (d !== null && (d.return = t); d !== null; ) {
      var p = d.dependencies;
      if (p !== null) {
        var x = d.child;
        p = p.firstContext;
        t: for (; p !== null; ) {
          var T = p;
          p = d;
          for (var H = 0; H < e.length; H++) if (T.context === e[H]) {
            p.lanes |= o, T = p.alternate, T !== null && (T.lanes |= o), $a(p.return, o, t), l || (x = null);
            break t;
          }
          p = T.next;
        }
      } else if (d.tag === 18) {
        if (x = d.return, x === null) throw Error(u(341));
        x.lanes |= o, p = x.alternate, p !== null && (p.lanes |= o), $a(x, o, t), x = null;
      } else x = d.child;
      if (x !== null) x.return = d;
      else for (x = d; x !== null; ) {
        if (x === t) {
          x = null;
          break;
        }
        if (d = x.sibling, d !== null) {
          d.return = x.return, x = d;
          break;
        }
        x = x.return;
      }
      d = x;
    }
  }
  function Ia(t, e, o, l) {
    t = null;
    for (var d = e, p = false; d !== null; ) {
      if (!p) {
        if ((d.flags & 524288) !== 0) p = true;
        else if ((d.flags & 262144) !== 0) break;
      }
      if (d.tag === 10) {
        var x = d.alternate;
        if (x === null) throw Error(u(387));
        if (x = x.memoizedProps, x !== null) {
          var T = d.type;
          oi(d.pendingProps.value, x.value) || (t !== null ? t.push(T) : t = [T]);
        }
      } else if (d === At.current) {
        if (x = d.alternate, x === null) throw Error(u(387));
        x.memoizedState.memoizedState !== d.memoizedState.memoizedState && (t !== null ? t.push(Xl) : t = [Xl]);
      }
      d = d.return;
    }
    t !== null && ys(e, t, o, l), e.flags |= 262144;
  }
  function ac(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!oi(t.context._currentValue, t.memoizedValue)) return true;
      t = t.next;
    }
    return false;
  }
  function ja(t) {
    Wi = t, go = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function qn(t) {
    return Mm(Wi, t);
  }
  function sc(t, e) {
    return Wi === null && ja(t), Mm(t, e);
  }
  function Mm(t, e) {
    var o = e._currentValue;
    if (e = { context: e, memoizedValue: o, next: null }, go === null) {
      if (t === null) throw Error(u(308));
      go = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else go = go.next = e;
    return o;
  }
  var T_ = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = { aborted: false, addEventListener: function(o, l) {
      t.push(l);
    } };
    this.abort = function() {
      e.aborted = true, t.forEach(function(o) {
        return o();
      });
    };
  }, E_ = n2.unstable_scheduleCallback, M_ = n2.unstable_NormalPriority, wn = { $$typeof: D, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function pd() {
    return { controller: new T_(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function Sl(t) {
    t.refCount--, t.refCount === 0 && E_(M_, function() {
      t.controller.abort();
    });
  }
  var wl = null, md = 0, _s = 0, bs = null;
  function O_(t, e) {
    if (wl === null) {
      var o = wl = [];
      md = 0, _s = vh(), bs = { status: "pending", value: void 0, then: function(l) {
        o.push(l);
      } };
    }
    return md++, e.then(Om, Om), e;
  }
  function Om() {
    if (--md === 0 && wl !== null) {
      bs !== null && (bs.status = "fulfilled");
      var t = wl;
      wl = null, _s = 0, bs = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function A_(t, e) {
    var o = [], l = { status: "pending", value: null, reason: null, then: function(d) {
      o.push(d);
    } };
    return t.then(function() {
      l.status = "fulfilled", l.value = e;
      for (var d = 0; d < o.length; d++) (0, o[d])(e);
    }, function(d) {
      for (l.status = "rejected", l.reason = d, d = 0; d < o.length; d++) (0, o[d])(void 0);
    }), l;
  }
  var Am = B.S;
  B.S = function(t, e) {
    typeof e == "object" && e !== null && typeof e.then == "function" && O_(t, e), Am !== null && Am(t, e);
  };
  var Ha = q(null);
  function gd() {
    var t = Ha.current;
    return t !== null ? t : We.pooledCache;
  }
  function lc(t, e) {
    e === null ? dt(Ha, Ha.current) : dt(Ha, e.pool);
  }
  function Rm() {
    var t = gd();
    return t === null ? null : { parent: wn._currentValue, pool: t };
  }
  var Cl = Error(u(460)), km = Error(u(474)), uc = Error(u(542)), vd = { then: function() {
  } };
  function Lm(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function cc() {
  }
  function zm(t, e, o) {
    switch (o = t[o], o === void 0 ? t.push(e) : o !== e && (e.then(cc, cc), e = o), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Bm(t), t;
      default:
        if (typeof e.status == "string") e.then(cc, cc);
        else {
          if (t = We, t !== null && 100 < t.shellSuspendCounter) throw Error(u(482));
          t = e, t.status = "pending", t.then(function(l) {
            if (e.status === "pending") {
              var d = e;
              d.status = "fulfilled", d.value = l;
            }
          }, function(l) {
            if (e.status === "pending") {
              var d = e;
              d.status = "rejected", d.reason = l;
            }
          });
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Bm(t), t;
        }
        throw Tl = e, Cl;
    }
  }
  var Tl = null;
  function Pm() {
    if (Tl === null) throw Error(u(459));
    var t = Tl;
    return Tl = null, t;
  }
  function Bm(t) {
    if (t === Cl || t === uc) throw Error(u(483));
  }
  var Kr = false;
  function yd(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function _d(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null });
  }
  function Xr(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Wr(t, e, o) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Be & 2) !== 0) {
      var d = l.pending;
      return d === null ? e.next = e : (e.next = d.next, d.next = e), l.pending = e, e = ko(t), Ba(t, null, o), e;
    }
    return Pa(t, l, e, o), ko(t);
  }
  function El(t, e, o) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (o & 4194048) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, o |= l, e.lanes = o, ci(t, o);
    }
  }
  function bd(t, e) {
    var o = t.updateQueue, l = t.alternate;
    if (l !== null && (l = l.updateQueue, o === l)) {
      var d = null, p = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var x = { lane: o.lane, tag: o.tag, payload: o.payload, callback: null, next: null };
          p === null ? d = p = x : p = p.next = x, o = o.next;
        } while (o !== null);
        p === null ? d = p = e : p = p.next = e;
      } else d = p = e;
      o = { baseState: l.baseState, firstBaseUpdate: d, lastBaseUpdate: p, shared: l.shared, callbacks: l.callbacks }, t.updateQueue = o;
      return;
    }
    t = o.lastBaseUpdate, t === null ? o.firstBaseUpdate = e : t.next = e, o.lastBaseUpdate = e;
  }
  var xd = false;
  function Ml() {
    if (xd) {
      var t = bs;
      if (t !== null) throw t;
    }
  }
  function Ol(t, e, o, l) {
    xd = false;
    var d = t.updateQueue;
    Kr = false;
    var p = d.firstBaseUpdate, x = d.lastBaseUpdate, T = d.shared.pending;
    if (T !== null) {
      d.shared.pending = null;
      var H = T, Q = H.next;
      H.next = null, x === null ? p = Q : x.next = Q, x = H;
      var vt = t.alternate;
      vt !== null && (vt = vt.updateQueue, T = vt.lastBaseUpdate, T !== x && (T === null ? vt.firstBaseUpdate = Q : T.next = Q, vt.lastBaseUpdate = H));
    }
    if (p !== null) {
      var xt = d.baseState;
      x = 0, vt = Q = H = null, T = p;
      do {
        var nt = T.lane & -536870913, at = nt !== T.lane;
        if (at ? (we & nt) === nt : (l & nt) === nt) {
          nt !== 0 && nt === _s && (xd = true), vt !== null && (vt = vt.next = { lane: 0, tag: T.tag, payload: T.payload, callback: null, next: null });
          t: {
            var Kt = t, Ft = T;
            nt = e;
            var He = o;
            switch (Ft.tag) {
              case 1:
                if (Kt = Ft.payload, typeof Kt == "function") {
                  xt = Kt.call(He, xt, nt);
                  break t;
                }
                xt = Kt;
                break t;
              case 3:
                Kt.flags = Kt.flags & -65537 | 128;
              case 0:
                if (Kt = Ft.payload, nt = typeof Kt == "function" ? Kt.call(He, xt, nt) : Kt, nt == null) break t;
                xt = S({}, xt, nt);
                break t;
              case 2:
                Kr = true;
            }
          }
          nt = T.callback, nt !== null && (t.flags |= 64, at && (t.flags |= 8192), at = d.callbacks, at === null ? d.callbacks = [nt] : at.push(nt));
        } else at = { lane: nt, tag: T.tag, payload: T.payload, callback: T.callback, next: null }, vt === null ? (Q = vt = at, H = xt) : vt = vt.next = at, x |= nt;
        if (T = T.next, T === null) {
          if (T = d.shared.pending, T === null) break;
          at = T, T = at.next, at.next = null, d.lastBaseUpdate = at, d.shared.pending = null;
        }
      } while (true);
      vt === null && (H = xt), d.baseState = H, d.firstBaseUpdate = Q, d.lastBaseUpdate = vt, p === null && (d.shared.lanes = 0), ra |= x, t.lanes = x, t.memoizedState = xt;
    }
  }
  function Dm(t, e) {
    if (typeof t != "function") throw Error(u(191, t));
    t.call(e);
  }
  function Nm(t, e) {
    var o = t.callbacks;
    if (o !== null) for (t.callbacks = null, t = 0; t < o.length; t++) Dm(o[t], e);
  }
  var xs = q(null), fc = q(0);
  function $m(t, e) {
    t = yr, dt(fc, t), dt(xs, e), yr = t | e.baseLanes;
  }
  function Sd() {
    dt(fc, yr), dt(xs, xs.current);
  }
  function wd() {
    yr = fc.current, ft(xs), ft(fc);
  }
  var Qr = 0, fe = null, Ie = null, bn = null, dc = false, Ss = false, Ua = false, hc = 0, Al = 0, ws = null, R_ = 0;
  function gn() {
    throw Error(u(321));
  }
  function Cd(t, e) {
    if (e === null) return false;
    for (var o = 0; o < e.length && o < t.length; o++) if (!oi(t[o], e[o])) return false;
    return true;
  }
  function Td(t, e, o, l, d, p) {
    return Qr = p, fe = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, B.H = t === null || t.memoizedState === null ? x0 : S0, Ua = false, p = o(l, d), Ua = false, Ss && (p = jm(e, o, l, d)), Im(t), p;
  }
  function Im(t) {
    B.H = _c;
    var e = Ie !== null && Ie.next !== null;
    if (Qr = 0, bn = Ie = fe = null, dc = false, Al = 0, ws = null, e) throw Error(u(300));
    t === null || kn || (t = t.dependencies, t !== null && ac(t) && (kn = true));
  }
  function jm(t, e, o, l) {
    fe = t;
    var d = 0;
    do {
      if (Ss && (ws = null), Al = 0, Ss = false, 25 <= d) throw Error(u(301));
      if (d += 1, bn = Ie = null, t.updateQueue != null) {
        var p = t.updateQueue;
        p.lastEffect = null, p.events = null, p.stores = null, p.memoCache != null && (p.memoCache.index = 0);
      }
      B.H = N_, p = e(o, l);
    } while (Ss);
    return p;
  }
  function k_() {
    var t = B.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Rl(e) : e, t = t.useState()[0], (Ie !== null ? Ie.memoizedState : null) !== t && (fe.flags |= 1024), e;
  }
  function Ed() {
    var t = hc !== 0;
    return hc = 0, t;
  }
  function Md(t, e, o) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~o;
  }
  function Od(t) {
    if (dc) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      dc = false;
    }
    Qr = 0, bn = Ie = fe = null, Ss = false, Al = hc = 0, ws = null;
  }
  function yi() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return bn === null ? fe.memoizedState = bn = t : bn = bn.next = t, bn;
  }
  function xn() {
    if (Ie === null) {
      var t = fe.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Ie.next;
    var e = bn === null ? fe.memoizedState : bn.next;
    if (e !== null) bn = e, Ie = t;
    else {
      if (t === null) throw fe.alternate === null ? Error(u(467)) : Error(u(310));
      Ie = t, t = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, bn === null ? fe.memoizedState = bn = t : bn = bn.next = t;
    }
    return bn;
  }
  function Ad() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Rl(t) {
    var e = Al;
    return Al += 1, ws === null && (ws = []), t = zm(ws, t, e), e = fe, (bn === null ? e.memoizedState : bn.next) === null && (e = e.alternate, B.H = e === null || e.memoizedState === null ? x0 : S0), t;
  }
  function pc(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Rl(t);
      if (t.$$typeof === D) return qn(t);
    }
    throw Error(u(438, String(t)));
  }
  function Rd(t) {
    var e = null, o = fe.updateQueue;
    if (o !== null && (e = o.memoCache), e == null) {
      var l = fe.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = { data: l.data.map(function(d) {
        return d.slice();
      }), index: 0 })));
    }
    if (e == null && (e = { data: [], index: 0 }), o === null && (o = Ad(), fe.updateQueue = o), o.memoCache = e, o = e.data[e.index], o === void 0) for (o = e.data[e.index] = Array(t), l = 0; l < t; l++) o[l] = ut;
    return e.index++, o;
  }
  function dr(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function mc(t) {
    var e = xn();
    return kd(e, Ie, t);
  }
  function kd(t, e, o) {
    var l = t.queue;
    if (l === null) throw Error(u(311));
    l.lastRenderedReducer = o;
    var d = t.baseQueue, p = l.pending;
    if (p !== null) {
      if (d !== null) {
        var x = d.next;
        d.next = p.next, p.next = x;
      }
      e.baseQueue = d = p, l.pending = null;
    }
    if (p = t.baseState, d === null) t.memoizedState = p;
    else {
      e = d.next;
      var T = x = null, H = null, Q = e, vt = false;
      do {
        var xt = Q.lane & -536870913;
        if (xt !== Q.lane ? (we & xt) === xt : (Qr & xt) === xt) {
          var nt = Q.revertLane;
          if (nt === 0) H !== null && (H = H.next = { lane: 0, revertLane: 0, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }), xt === _s && (vt = true);
          else if ((Qr & nt) === nt) {
            Q = Q.next, nt === _s && (vt = true);
            continue;
          } else xt = { lane: 0, revertLane: Q.revertLane, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }, H === null ? (T = H = xt, x = p) : H = H.next = xt, fe.lanes |= nt, ra |= nt;
          xt = Q.action, Ua && o(p, xt), p = Q.hasEagerState ? Q.eagerState : o(p, xt);
        } else nt = { lane: xt, revertLane: Q.revertLane, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }, H === null ? (T = H = nt, x = p) : H = H.next = nt, fe.lanes |= xt, ra |= xt;
        Q = Q.next;
      } while (Q !== null && Q !== e);
      if (H === null ? x = p : H.next = T, !oi(p, t.memoizedState) && (kn = true, vt && (o = bs, o !== null))) throw o;
      t.memoizedState = p, t.baseState = x, t.baseQueue = H, l.lastRenderedState = p;
    }
    return d === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function Ld(t) {
    var e = xn(), o = e.queue;
    if (o === null) throw Error(u(311));
    o.lastRenderedReducer = t;
    var l = o.dispatch, d = o.pending, p = e.memoizedState;
    if (d !== null) {
      o.pending = null;
      var x = d = d.next;
      do
        p = t(p, x.action), x = x.next;
      while (x !== d);
      oi(p, e.memoizedState) || (kn = true), e.memoizedState = p, e.baseQueue === null && (e.baseState = p), o.lastRenderedState = p;
    }
    return [p, l];
  }
  function Hm(t, e, o) {
    var l = fe, d = xn(), p = Xt;
    if (p) {
      if (o === void 0) throw Error(u(407));
      o = o();
    } else o = e();
    var x = !oi((Ie || d).memoizedState, o);
    x && (d.memoizedState = o, kn = true), d = d.queue;
    var T = Zm.bind(null, l, d, t);
    if (kl(2048, 8, T, [t]), d.getSnapshot !== e || x || bn !== null && bn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Cs(9, gc(), Fm.bind(null, l, d, o, e), null), We === null) throw Error(u(349));
      p || (Qr & 124) !== 0 || Um(l, e, o);
    }
    return o;
  }
  function Um(t, e, o) {
    t.flags |= 16384, t = { getSnapshot: e, value: o }, e = fe.updateQueue, e === null ? (e = Ad(), fe.updateQueue = e, e.stores = [t]) : (o = e.stores, o === null ? e.stores = [t] : o.push(t));
  }
  function Fm(t, e, o, l) {
    e.value = o, e.getSnapshot = l, Vm(e) && Gm(t);
  }
  function Zm(t, e, o) {
    return o(function() {
      Vm(e) && Gm(t);
    });
  }
  function Vm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var o = e();
      return !oi(t, o);
    } catch {
      return true;
    }
  }
  function Gm(t) {
    var e = Vr(t, 2);
    e !== null && Di(e, t, 2);
  }
  function zd(t) {
    var e = yi();
    if (typeof t == "function") {
      var o = t;
      if (t = o(), Ua) {
        oe(true);
        try {
          o();
        } finally {
          oe(false);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: dr, lastRenderedState: t }, e;
  }
  function qm(t, e, o, l) {
    return t.baseState = o, kd(t, Ie, typeof l == "function" ? l : dr);
  }
  function L_(t, e, o, l, d) {
    if (yc(t)) throw Error(u(485));
    if (t = e.action, t !== null) {
      var p = { payload: d, action: t, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(x) {
        p.listeners.push(x);
      } };
      B.T !== null ? o(true) : p.isTransition = false, l(p), o = e.pending, o === null ? (p.next = e.pending = p, Ym(e, p)) : (p.next = o.next, e.pending = o.next = p);
    }
  }
  function Ym(t, e) {
    var o = e.action, l = e.payload, d = t.state;
    if (e.isTransition) {
      var p = B.T, x = {};
      B.T = x;
      try {
        var T = o(d, l), H = B.S;
        H !== null && H(x, T), Km(t, e, T);
      } catch (Q) {
        Pd(t, e, Q);
      } finally {
        B.T = p;
      }
    } else try {
      p = o(d, l), Km(t, e, p);
    } catch (Q) {
      Pd(t, e, Q);
    }
  }
  function Km(t, e, o) {
    o !== null && typeof o == "object" && typeof o.then == "function" ? o.then(function(l) {
      Xm(t, e, l);
    }, function(l) {
      return Pd(t, e, l);
    }) : Xm(t, e, o);
  }
  function Xm(t, e, o) {
    e.status = "fulfilled", e.value = o, Wm(e), t.state = o, e = t.pending, e !== null && (o = e.next, o === e ? t.pending = null : (o = o.next, e.next = o, Ym(t, o)));
  }
  function Pd(t, e, o) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = o, Wm(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function Wm(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Qm(t, e) {
    return e;
  }
  function Jm(t, e) {
    if (Xt) {
      var o = We.formState;
      if (o !== null) {
        t: {
          var l = fe;
          if (Xt) {
            if (Nt) {
              e: {
                for (var d = Nt, p = ln; d.nodeType !== 8; ) {
                  if (!p) {
                    d = null;
                    break e;
                  }
                  if (d = _o(d.nextSibling), d === null) {
                    d = null;
                    break e;
                  }
                }
                p = d.data, d = p === "F!" || p === "F" ? d : null;
              }
              if (d) {
                Nt = _o(d.nextSibling), l = d.data === "F!";
                break t;
              }
            }
            vi(l);
          }
          l = false;
        }
        l && (e = o[0]);
      }
    }
    return o = yi(), o.memoizedState = o.baseState = e, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Qm, lastRenderedState: e }, o.queue = l, o = y0.bind(null, fe, l), l.dispatch = o, l = zd(false), p = Id.bind(null, fe, false, l.queue), l = yi(), d = { state: e, dispatch: null, action: t, pending: null }, l.queue = d, o = L_.bind(null, fe, d, p, o), d.dispatch = o, l.memoizedState = t, [e, o, false];
  }
  function t0(t) {
    var e = xn();
    return e0(e, Ie, t);
  }
  function e0(t, e, o) {
    if (e = kd(t, e, Qm)[0], t = mc(dr)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
      var l = Rl(e);
    } catch (x) {
      throw x === Cl ? uc : x;
    }
    else l = e;
    e = xn();
    var d = e.queue, p = d.dispatch;
    return o !== e.memoizedState && (fe.flags |= 2048, Cs(9, gc(), z_.bind(null, d, o), null)), [l, p, t];
  }
  function z_(t, e) {
    t.action = e;
  }
  function n0(t) {
    var e = xn(), o = Ie;
    if (o !== null) return e0(e, o, t);
    xn(), e = e.memoizedState, o = xn();
    var l = o.queue.dispatch;
    return o.memoizedState = t, [e, l, false];
  }
  function Cs(t, e, o, l) {
    return t = { tag: t, create: o, deps: l, inst: e, next: null }, e = fe.updateQueue, e === null && (e = Ad(), fe.updateQueue = e), o = e.lastEffect, o === null ? e.lastEffect = t.next = t : (l = o.next, o.next = t, t.next = l, e.lastEffect = t), t;
  }
  function gc() {
    return { destroy: void 0, resource: void 0 };
  }
  function i0() {
    return xn().memoizedState;
  }
  function vc(t, e, o, l) {
    var d = yi();
    l = l === void 0 ? null : l, fe.flags |= t, d.memoizedState = Cs(1 | e, gc(), o, l);
  }
  function kl(t, e, o, l) {
    var d = xn();
    l = l === void 0 ? null : l;
    var p = d.memoizedState.inst;
    Ie !== null && l !== null && Cd(l, Ie.memoizedState.deps) ? d.memoizedState = Cs(e, p, o, l) : (fe.flags |= t, d.memoizedState = Cs(1 | e, p, o, l));
  }
  function o0(t, e) {
    vc(8390656, 8, t, e);
  }
  function r0(t, e) {
    kl(2048, 8, t, e);
  }
  function a0(t, e) {
    return kl(4, 2, t, e);
  }
  function s0(t, e) {
    return kl(4, 4, t, e);
  }
  function l0(t, e) {
    if (typeof e == "function") {
      t = t();
      var o = e(t);
      return function() {
        typeof o == "function" ? o() : e(null);
      };
    }
    if (e != null) return t = t(), e.current = t, function() {
      e.current = null;
    };
  }
  function u0(t, e, o) {
    o = o != null ? o.concat([t]) : null, kl(4, 4, l0.bind(null, e, t), o);
  }
  function Bd() {
  }
  function c0(t, e) {
    var o = xn();
    e = e === void 0 ? null : e;
    var l = o.memoizedState;
    return e !== null && Cd(e, l[1]) ? l[0] : (o.memoizedState = [t, e], t);
  }
  function f0(t, e) {
    var o = xn();
    e = e === void 0 ? null : e;
    var l = o.memoizedState;
    if (e !== null && Cd(e, l[1])) return l[0];
    if (l = t(), Ua) {
      oe(true);
      try {
        t();
      } finally {
        oe(false);
      }
    }
    return o.memoizedState = [l, e], l;
  }
  function Dd(t, e, o) {
    return o === void 0 || (Qr & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = o, t = pg(), fe.lanes |= t, ra |= t, o);
  }
  function d0(t, e, o, l) {
    return oi(o, e) ? o : xs.current !== null ? (t = Dd(t, o, l), oi(t, e) || (kn = true), t) : (Qr & 42) === 0 ? (kn = true, t.memoizedState = o) : (t = pg(), fe.lanes |= t, ra |= t, e);
  }
  function h0(t, e, o, l, d) {
    var p = tt.p;
    tt.p = p !== 0 && 8 > p ? p : 8;
    var x = B.T, T = {};
    B.T = T, Id(t, false, e, o);
    try {
      var H = d(), Q = B.S;
      if (Q !== null && Q(T, H), H !== null && typeof H == "object" && typeof H.then == "function") {
        var vt = A_(H, l);
        Ll(t, e, vt, Bi(t));
      } else Ll(t, e, l, Bi(t));
    } catch (xt) {
      Ll(t, e, { then: function() {
      }, status: "rejected", reason: xt }, Bi());
    } finally {
      tt.p = p, B.T = x;
    }
  }
  function P_() {
  }
  function Nd(t, e, o, l) {
    if (t.tag !== 5) throw Error(u(476));
    var d = p0(t).queue;
    h0(t, d, e, rt, o === null ? P_ : function() {
      return m0(t), o(l);
    });
  }
  function p0(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = { memoizedState: rt, baseState: rt, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: dr, lastRenderedState: rt }, next: null };
    var o = {};
    return e.next = { memoizedState: o, baseState: o, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: dr, lastRenderedState: o }, next: null }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function m0(t) {
    var e = p0(t).next.queue;
    Ll(t, e, {}, Bi());
  }
  function $d() {
    return qn(Xl);
  }
  function g0() {
    return xn().memoizedState;
  }
  function v0() {
    return xn().memoizedState;
  }
  function B_(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var o = Bi();
          t = Xr(o);
          var l = Wr(e, t, o);
          l !== null && (Di(l, e, o), El(l, e, o)), e = { cache: pd() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function D_(t, e, o) {
    var l = Bi();
    o = { lane: l, revertLane: 0, action: o, hasEagerState: false, eagerState: null, next: null }, yc(t) ? _0(e, o) : (o = ur(t, e, o, l), o !== null && (Di(o, t, l), b0(o, e, l)));
  }
  function y0(t, e, o) {
    var l = Bi();
    Ll(t, e, o, l);
  }
  function Ll(t, e, o, l) {
    var d = { lane: l, revertLane: 0, action: o, hasEagerState: false, eagerState: null, next: null };
    if (yc(t)) _0(e, d);
    else {
      var p = t.alternate;
      if (t.lanes === 0 && (p === null || p.lanes === 0) && (p = e.lastRenderedReducer, p !== null)) try {
        var x = e.lastRenderedState, T = p(x, o);
        if (d.hasEagerState = true, d.eagerState = T, oi(T, x)) return Pa(t, e, d, 0), We === null && za(), false;
      } catch {
      } finally {
      }
      if (o = ur(t, e, d, l), o !== null) return Di(o, t, l), b0(o, e, l), true;
    }
    return false;
  }
  function Id(t, e, o, l) {
    if (l = { lane: 2, revertLane: vh(), action: l, hasEagerState: false, eagerState: null, next: null }, yc(t)) {
      if (e) throw Error(u(479));
    } else e = ur(t, o, l, 2), e !== null && Di(e, t, 2);
  }
  function yc(t) {
    var e = t.alternate;
    return t === fe || e !== null && e === fe;
  }
  function _0(t, e) {
    Ss = dc = true;
    var o = t.pending;
    o === null ? e.next = e : (e.next = o.next, o.next = e), t.pending = e;
  }
  function b0(t, e, o) {
    if ((o & 4194048) !== 0) {
      var l = e.lanes;
      l &= t.pendingLanes, o |= l, e.lanes = o, ci(t, o);
    }
  }
  var _c = { readContext: qn, use: pc, useCallback: gn, useContext: gn, useEffect: gn, useImperativeHandle: gn, useLayoutEffect: gn, useInsertionEffect: gn, useMemo: gn, useReducer: gn, useRef: gn, useState: gn, useDebugValue: gn, useDeferredValue: gn, useTransition: gn, useSyncExternalStore: gn, useId: gn, useHostTransitionStatus: gn, useFormState: gn, useActionState: gn, useOptimistic: gn, useMemoCache: gn, useCacheRefresh: gn }, x0 = { readContext: qn, use: pc, useCallback: function(t, e) {
    return yi().memoizedState = [t, e === void 0 ? null : e], t;
  }, useContext: qn, useEffect: o0, useImperativeHandle: function(t, e, o) {
    o = o != null ? o.concat([t]) : null, vc(4194308, 4, l0.bind(null, e, t), o);
  }, useLayoutEffect: function(t, e) {
    return vc(4194308, 4, t, e);
  }, useInsertionEffect: function(t, e) {
    vc(4, 2, t, e);
  }, useMemo: function(t, e) {
    var o = yi();
    e = e === void 0 ? null : e;
    var l = t();
    if (Ua) {
      oe(true);
      try {
        t();
      } finally {
        oe(false);
      }
    }
    return o.memoizedState = [l, e], l;
  }, useReducer: function(t, e, o) {
    var l = yi();
    if (o !== void 0) {
      var d = o(e);
      if (Ua) {
        oe(true);
        try {
          o(e);
        } finally {
          oe(false);
        }
      }
    } else d = e;
    return l.memoizedState = l.baseState = d, t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: d }, l.queue = t, t = t.dispatch = D_.bind(null, fe, t), [l.memoizedState, t];
  }, useRef: function(t) {
    var e = yi();
    return t = { current: t }, e.memoizedState = t;
  }, useState: function(t) {
    t = zd(t);
    var e = t.queue, o = y0.bind(null, fe, e);
    return e.dispatch = o, [t.memoizedState, o];
  }, useDebugValue: Bd, useDeferredValue: function(t, e) {
    var o = yi();
    return Dd(o, t, e);
  }, useTransition: function() {
    var t = zd(false);
    return t = h0.bind(null, fe, t.queue, true, false), yi().memoizedState = t, [false, t];
  }, useSyncExternalStore: function(t, e, o) {
    var l = fe, d = yi();
    if (Xt) {
      if (o === void 0) throw Error(u(407));
      o = o();
    } else {
      if (o = e(), We === null) throw Error(u(349));
      (we & 124) !== 0 || Um(l, e, o);
    }
    d.memoizedState = o;
    var p = { value: o, getSnapshot: e };
    return d.queue = p, o0(Zm.bind(null, l, p, t), [t]), l.flags |= 2048, Cs(9, gc(), Fm.bind(null, l, p, o, e), null), o;
  }, useId: function() {
    var t = yi(), e = We.identifierPrefix;
    if (Xt) {
      var o = j, l = C;
      o = (l & ~(1 << 32 - he(l) - 1)).toString(32) + o, e = "\xAB" + e + "R" + o, o = hc++, 0 < o && (e += "H" + o.toString(32)), e += "\xBB";
    } else o = R_++, e = "\xAB" + e + "r" + o.toString(32) + "\xBB";
    return t.memoizedState = e;
  }, useHostTransitionStatus: $d, useFormState: Jm, useActionState: Jm, useOptimistic: function(t) {
    var e = yi();
    e.memoizedState = e.baseState = t;
    var o = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return e.queue = o, e = Id.bind(null, fe, true, o), o.dispatch = e, [t, e];
  }, useMemoCache: Rd, useCacheRefresh: function() {
    return yi().memoizedState = B_.bind(null, fe);
  } }, S0 = { readContext: qn, use: pc, useCallback: c0, useContext: qn, useEffect: r0, useImperativeHandle: u0, useInsertionEffect: a0, useLayoutEffect: s0, useMemo: f0, useReducer: mc, useRef: i0, useState: function() {
    return mc(dr);
  }, useDebugValue: Bd, useDeferredValue: function(t, e) {
    var o = xn();
    return d0(o, Ie.memoizedState, t, e);
  }, useTransition: function() {
    var t = mc(dr)[0], e = xn().memoizedState;
    return [typeof t == "boolean" ? t : Rl(t), e];
  }, useSyncExternalStore: Hm, useId: g0, useHostTransitionStatus: $d, useFormState: t0, useActionState: t0, useOptimistic: function(t, e) {
    var o = xn();
    return qm(o, Ie, t, e);
  }, useMemoCache: Rd, useCacheRefresh: v0 }, N_ = { readContext: qn, use: pc, useCallback: c0, useContext: qn, useEffect: r0, useImperativeHandle: u0, useInsertionEffect: a0, useLayoutEffect: s0, useMemo: f0, useReducer: Ld, useRef: i0, useState: function() {
    return Ld(dr);
  }, useDebugValue: Bd, useDeferredValue: function(t, e) {
    var o = xn();
    return Ie === null ? Dd(o, t, e) : d0(o, Ie.memoizedState, t, e);
  }, useTransition: function() {
    var t = Ld(dr)[0], e = xn().memoizedState;
    return [typeof t == "boolean" ? t : Rl(t), e];
  }, useSyncExternalStore: Hm, useId: g0, useHostTransitionStatus: $d, useFormState: n0, useActionState: n0, useOptimistic: function(t, e) {
    var o = xn();
    return Ie !== null ? qm(o, Ie, t, e) : (o.baseState = t, [t, o.queue.dispatch]);
  }, useMemoCache: Rd, useCacheRefresh: v0 }, Ts = null, zl = 0;
  function bc(t) {
    var e = zl;
    return zl += 1, Ts === null && (Ts = []), zm(Ts, t, e);
  }
  function Pl(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function xc(t, e) {
    throw e.$$typeof === E ? Error(u(525)) : (t = Object.prototype.toString.call(e), Error(u(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function w0(t) {
    var e = t._init;
    return e(t._payload);
  }
  function C0(t) {
    function e(G, Z) {
      if (t) {
        var X = G.deletions;
        X === null ? (G.deletions = [Z], G.flags |= 16) : X.push(Z);
      }
    }
    function o(G, Z) {
      if (!t) return null;
      for (; Z !== null; ) e(G, Z), Z = Z.sibling;
      return null;
    }
    function l(G) {
      for (var Z = /* @__PURE__ */ new Map(); G !== null; ) G.key !== null ? Z.set(G.key, G) : Z.set(G.index, G), G = G.sibling;
      return Z;
    }
    function d(G, Z) {
      return G = Xi(G, Z), G.index = 0, G.sibling = null, G;
    }
    function p(G, Z, X) {
      return G.index = X, t ? (X = G.alternate, X !== null ? (X = X.index, X < Z ? (G.flags |= 67108866, Z) : X) : (G.flags |= 67108866, Z)) : (G.flags |= 1048576, Z);
    }
    function x(G) {
      return t && G.alternate === null && (G.flags |= 67108866), G;
    }
    function T(G, Z, X, yt) {
      return Z === null || Z.tag !== 6 ? (Z = xl(X, G.mode, yt), Z.return = G, Z) : (Z = d(Z, X), Z.return = G, Z);
    }
    function H(G, Z, X, yt) {
      var zt = X.type;
      return zt === A ? vt(G, Z, X.props.children, yt, X.key) : Z !== null && (Z.elementType === zt || typeof zt == "object" && zt !== null && zt.$$typeof === J && w0(zt) === Z.type) ? (Z = d(Z, X.props), Pl(Z, X), Z.return = G, Z) : (Z = Da(X.type, X.key, X.props, null, G.mode, yt), Pl(Z, X), Z.return = G, Z);
    }
    function Q(G, Z, X, yt) {
      return Z === null || Z.tag !== 4 || Z.stateNode.containerInfo !== X.containerInfo || Z.stateNode.implementation !== X.implementation ? (Z = vs(X, G.mode, yt), Z.return = G, Z) : (Z = d(Z, X.children || []), Z.return = G, Z);
    }
    function vt(G, Z, X, yt, zt) {
      return Z === null || Z.tag !== 7 ? (Z = Lo(X, G.mode, yt, zt), Z.return = G, Z) : (Z = d(Z, X), Z.return = G, Z);
    }
    function xt(G, Z, X) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint") return Z = xl("" + Z, G.mode, X), Z.return = G, Z;
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case R:
            return X = Da(Z.type, Z.key, Z.props, null, G.mode, X), Pl(X, Z), X.return = G, X;
          case k:
            return Z = vs(Z, G.mode, X), Z.return = G, Z;
          case J:
            var yt = Z._init;
            return Z = yt(Z._payload), xt(G, Z, X);
        }
        if (et(Z) || w(Z)) return Z = Lo(Z, G.mode, X, null), Z.return = G, Z;
        if (typeof Z.then == "function") return xt(G, bc(Z), X);
        if (Z.$$typeof === D) return xt(G, sc(G, Z), X);
        xc(G, Z);
      }
      return null;
    }
    function nt(G, Z, X, yt) {
      var zt = Z !== null ? Z.key : null;
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint") return zt !== null ? null : T(G, Z, "" + X, yt);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case R:
            return X.key === zt ? H(G, Z, X, yt) : null;
          case k:
            return X.key === zt ? Q(G, Z, X, yt) : null;
          case J:
            return zt = X._init, X = zt(X._payload), nt(G, Z, X, yt);
        }
        if (et(X) || w(X)) return zt !== null ? null : vt(G, Z, X, yt, null);
        if (typeof X.then == "function") return nt(G, Z, bc(X), yt);
        if (X.$$typeof === D) return nt(G, Z, sc(G, X), yt);
        xc(G, X);
      }
      return null;
    }
    function at(G, Z, X, yt, zt) {
      if (typeof yt == "string" && yt !== "" || typeof yt == "number" || typeof yt == "bigint") return G = G.get(X) || null, T(Z, G, "" + yt, zt);
      if (typeof yt == "object" && yt !== null) {
        switch (yt.$$typeof) {
          case R:
            return G = G.get(yt.key === null ? X : yt.key) || null, H(Z, G, yt, zt);
          case k:
            return G = G.get(yt.key === null ? X : yt.key) || null, Q(Z, G, yt, zt);
          case J:
            var me = yt._init;
            return yt = me(yt._payload), at(G, Z, X, yt, zt);
        }
        if (et(yt) || w(yt)) return G = G.get(X) || null, vt(Z, G, yt, zt, null);
        if (typeof yt.then == "function") return at(G, Z, X, bc(yt), zt);
        if (yt.$$typeof === D) return at(G, Z, X, sc(Z, yt), zt);
        xc(Z, yt);
      }
      return null;
    }
    function Kt(G, Z, X, yt) {
      for (var zt = null, me = null, jt = Z, Gt = Z = 0, zn = null; jt !== null && Gt < X.length; Gt++) {
        jt.index > Gt ? (zn = jt, jt = null) : zn = jt.sibling;
        var Te = nt(G, jt, X[Gt], yt);
        if (Te === null) {
          jt === null && (jt = zn);
          break;
        }
        t && jt && Te.alternate === null && e(G, jt), Z = p(Te, Z, Gt), me === null ? zt = Te : me.sibling = Te, me = Te, jt = zn;
      }
      if (Gt === X.length) return o(G, jt), Xt && Y(G, Gt), zt;
      if (jt === null) {
        for (; Gt < X.length; Gt++) jt = xt(G, X[Gt], yt), jt !== null && (Z = p(jt, Z, Gt), me === null ? zt = jt : me.sibling = jt, me = jt);
        return Xt && Y(G, Gt), zt;
      }
      for (jt = l(jt); Gt < X.length; Gt++) zn = at(jt, G, Gt, X[Gt], yt), zn !== null && (t && zn.alternate !== null && jt.delete(zn.key === null ? Gt : zn.key), Z = p(zn, Z, Gt), me === null ? zt = zn : me.sibling = zn, me = zn);
      return t && jt.forEach(function(pa) {
        return e(G, pa);
      }), Xt && Y(G, Gt), zt;
    }
    function Ft(G, Z, X, yt) {
      if (X == null) throw Error(u(151));
      for (var zt = null, me = null, jt = Z, Gt = Z = 0, zn = null, Te = X.next(); jt !== null && !Te.done; Gt++, Te = X.next()) {
        jt.index > Gt ? (zn = jt, jt = null) : zn = jt.sibling;
        var pa = nt(G, jt, Te.value, yt);
        if (pa === null) {
          jt === null && (jt = zn);
          break;
        }
        t && jt && pa.alternate === null && e(G, jt), Z = p(pa, Z, Gt), me === null ? zt = pa : me.sibling = pa, me = pa, jt = zn;
      }
      if (Te.done) return o(G, jt), Xt && Y(G, Gt), zt;
      if (jt === null) {
        for (; !Te.done; Gt++, Te = X.next()) Te = xt(G, Te.value, yt), Te !== null && (Z = p(Te, Z, Gt), me === null ? zt = Te : me.sibling = Te, me = Te);
        return Xt && Y(G, Gt), zt;
      }
      for (jt = l(jt); !Te.done; Gt++, Te = X.next()) Te = at(jt, G, Gt, Te.value, yt), Te !== null && (t && Te.alternate !== null && jt.delete(Te.key === null ? Gt : Te.key), Z = p(Te, Z, Gt), me === null ? zt = Te : me.sibling = Te, me = Te);
      return t && jt.forEach(function($2) {
        return e(G, $2);
      }), Xt && Y(G, Gt), zt;
    }
    function He(G, Z, X, yt) {
      if (typeof X == "object" && X !== null && X.type === A && X.key === null && (X = X.props.children), typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case R:
            t: {
              for (var zt = X.key; Z !== null; ) {
                if (Z.key === zt) {
                  if (zt = X.type, zt === A) {
                    if (Z.tag === 7) {
                      o(G, Z.sibling), yt = d(Z, X.props.children), yt.return = G, G = yt;
                      break t;
                    }
                  } else if (Z.elementType === zt || typeof zt == "object" && zt !== null && zt.$$typeof === J && w0(zt) === Z.type) {
                    o(G, Z.sibling), yt = d(Z, X.props), Pl(yt, X), yt.return = G, G = yt;
                    break t;
                  }
                  o(G, Z);
                  break;
                } else e(G, Z);
                Z = Z.sibling;
              }
              X.type === A ? (yt = Lo(X.props.children, G.mode, yt, X.key), yt.return = G, G = yt) : (yt = Da(X.type, X.key, X.props, null, G.mode, yt), Pl(yt, X), yt.return = G, G = yt);
            }
            return x(G);
          case k:
            t: {
              for (zt = X.key; Z !== null; ) {
                if (Z.key === zt) if (Z.tag === 4 && Z.stateNode.containerInfo === X.containerInfo && Z.stateNode.implementation === X.implementation) {
                  o(G, Z.sibling), yt = d(Z, X.children || []), yt.return = G, G = yt;
                  break t;
                } else {
                  o(G, Z);
                  break;
                }
                else e(G, Z);
                Z = Z.sibling;
              }
              yt = vs(X, G.mode, yt), yt.return = G, G = yt;
            }
            return x(G);
          case J:
            return zt = X._init, X = zt(X._payload), He(G, Z, X, yt);
        }
        if (et(X)) return Kt(G, Z, X, yt);
        if (w(X)) {
          if (zt = w(X), typeof zt != "function") throw Error(u(150));
          return X = zt.call(X), Ft(G, Z, X, yt);
        }
        if (typeof X.then == "function") return He(G, Z, bc(X), yt);
        if (X.$$typeof === D) return He(G, Z, sc(G, X), yt);
        xc(G, X);
      }
      return typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint" ? (X = "" + X, Z !== null && Z.tag === 6 ? (o(G, Z.sibling), yt = d(Z, X), yt.return = G, G = yt) : (o(G, Z), yt = xl(X, G.mode, yt), yt.return = G, G = yt), x(G)) : o(G, Z);
    }
    return function(G, Z, X, yt) {
      try {
        zl = 0;
        var zt = He(G, Z, X, yt);
        return Ts = null, zt;
      } catch (jt) {
        if (jt === Cl || jt === uc) throw jt;
        var me = li(29, jt, null, G.mode);
        return me.lanes = yt, me.return = G, me;
      } finally {
      }
    };
  }
  var Es = C0(true), T0 = C0(false), Qi = q(null), Po = null;
  function Jr(t) {
    var e = t.alternate;
    dt(Cn, Cn.current & 1), dt(Qi, t), Po === null && (e === null || xs.current !== null || e.memoizedState !== null) && (Po = t);
  }
  function E0(t) {
    if (t.tag === 22) {
      if (dt(Cn, Cn.current), dt(Qi, t), Po === null) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Po = t);
      }
    } else ta();
  }
  function ta() {
    dt(Cn, Cn.current), dt(Qi, Qi.current);
  }
  function hr(t) {
    ft(Qi), Po === t && (Po = null), ft(Cn);
  }
  var Cn = q(0);
  function Sc(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var o = e.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || Ah(o))) return e;
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
  function jd(t, e, o, l) {
    e = t.memoizedState, o = o(l, e), o = o == null ? e : S({}, e, o), t.memoizedState = o, t.lanes === 0 && (t.updateQueue.baseState = o);
  }
  var Hd = { enqueueSetState: function(t, e, o) {
    t = t._reactInternals;
    var l = Bi(), d = Xr(l);
    d.payload = e, o != null && (d.callback = o), e = Wr(t, d, l), e !== null && (Di(e, t, l), El(e, t, l));
  }, enqueueReplaceState: function(t, e, o) {
    t = t._reactInternals;
    var l = Bi(), d = Xr(l);
    d.tag = 1, d.payload = e, o != null && (d.callback = o), e = Wr(t, d, l), e !== null && (Di(e, t, l), El(e, t, l));
  }, enqueueForceUpdate: function(t, e) {
    t = t._reactInternals;
    var o = Bi(), l = Xr(o);
    l.tag = 2, e != null && (l.callback = e), e = Wr(t, l, o), e !== null && (Di(e, t, o), El(e, t, o));
  } };
  function M0(t, e, o, l, d, p, x) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, p, x) : e.prototype && e.prototype.isPureReactComponent ? !ri(o, l) || !ri(d, p) : true;
  }
  function O0(t, e, o, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(o, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(o, l), e.state !== t && Hd.enqueueReplaceState(e, e.state, null);
  }
  function Fa(t, e) {
    var o = e;
    if ("ref" in e) {
      o = {};
      for (var l in e) l !== "ref" && (o[l] = e[l]);
    }
    if (t = t.defaultProps) {
      o === e && (o = S({}, o));
      for (var d in t) o[d] === void 0 && (o[d] = t[d]);
    }
    return o;
  }
  var wc = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function A0(t) {
    wc(t);
  }
  function R0(t) {
    console.error(t);
  }
  function k0(t) {
    wc(t);
  }
  function Cc(t, e) {
    try {
      var o = t.onUncaughtError;
      o(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function L0(t, e, o) {
    try {
      var l = t.onCaughtError;
      l(o.value, { componentStack: o.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (d) {
      setTimeout(function() {
        throw d;
      });
    }
  }
  function Ud(t, e, o) {
    return o = Xr(o), o.tag = 3, o.payload = { element: null }, o.callback = function() {
      Cc(t, e);
    }, o;
  }
  function z0(t) {
    return t = Xr(t), t.tag = 3, t;
  }
  function P0(t, e, o, l) {
    var d = o.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var p = l.value;
      t.payload = function() {
        return d(p);
      }, t.callback = function() {
        L0(e, o, l);
      };
    }
    var x = o.stateNode;
    x !== null && typeof x.componentDidCatch == "function" && (t.callback = function() {
      L0(e, o, l), typeof d != "function" && (aa === null ? aa = /* @__PURE__ */ new Set([this]) : aa.add(this));
      var T = l.stack;
      this.componentDidCatch(l.value, { componentStack: T !== null ? T : "" });
    });
  }
  function $_(t, e, o, l, d) {
    if (o.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = o.alternate, e !== null && Ia(e, o, d, true), o = Qi.current, o !== null) {
        switch (o.tag) {
          case 13:
            return Po === null ? dh() : o.alternate === null && hn === 0 && (hn = 3), o.flags &= -257, o.flags |= 65536, o.lanes = d, l === vd ? o.flags |= 16384 : (e = o.updateQueue, e === null ? o.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), ph(t, l, d)), false;
          case 22:
            return o.flags |= 65536, l === vd ? o.flags |= 16384 : (e = o.updateQueue, e === null ? (e = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([l]) }, o.updateQueue = e) : (o = e.retryQueue, o === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : o.add(l)), ph(t, l, d)), false;
        }
        throw Error(u(435, o.tag));
      }
      return ph(t, l, d), dh(), false;
    }
    if (Xt) return e = Qi.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = d, l !== Rn && (t = Error(u(422), { cause: l }), Yr(ai(t, o)))) : (l !== Rn && (e = Error(u(423), { cause: l }), Yr(ai(e, o))), t = t.current.alternate, t.flags |= 65536, d &= -d, t.lanes |= d, l = ai(l, o), d = Ud(t.stateNode, l, d), bd(t, d), hn !== 4 && (hn = 2)), false;
    var p = Error(u(520), { cause: l });
    if (p = ai(p, o), Hl === null ? Hl = [p] : Hl.push(p), hn !== 4 && (hn = 2), e === null) return true;
    l = ai(l, o), o = e;
    do {
      switch (o.tag) {
        case 3:
          return o.flags |= 65536, t = d & -d, o.lanes |= t, t = Ud(o.stateNode, l, t), bd(o, t), false;
        case 1:
          if (e = o.type, p = o.stateNode, (o.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (aa === null || !aa.has(p)))) return o.flags |= 65536, d &= -d, o.lanes |= d, d = z0(d), P0(d, t, o, l), bd(o, d), false;
      }
      o = o.return;
    } while (o !== null);
    return false;
  }
  var B0 = Error(u(461)), kn = false;
  function In(t, e, o, l) {
    e.child = t === null ? T0(e, null, o, l) : Es(e, t.child, o, l);
  }
  function D0(t, e, o, l, d) {
    o = o.render;
    var p = e.ref;
    if ("ref" in l) {
      var x = {};
      for (var T in l) T !== "ref" && (x[T] = l[T]);
    } else x = l;
    return ja(e), l = Td(t, e, o, x, p, d), T = Ed(), t !== null && !kn ? (Md(t, e, d), pr(t, e, d)) : (Xt && T && St(e), e.flags |= 1, In(t, e, l, d), e.child);
  }
  function N0(t, e, o, l, d) {
    if (t === null) {
      var p = o.type;
      return typeof p == "function" && !gs(p) && p.defaultProps === void 0 && o.compare === null ? (e.tag = 15, e.type = p, $0(t, e, p, l, d)) : (t = Da(o.type, null, l, e, e.mode, d), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (p = t.child, !Xd(t, d)) {
      var x = p.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ri, o(x, l) && t.ref === e.ref) return pr(t, e, d);
    }
    return e.flags |= 1, t = Xi(p, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function $0(t, e, o, l, d) {
    if (t !== null) {
      var p = t.memoizedProps;
      if (ri(p, l) && t.ref === e.ref) if (kn = false, e.pendingProps = l = p, Xd(t, d)) (t.flags & 131072) !== 0 && (kn = true);
      else return e.lanes = t.lanes, pr(t, e, d);
    }
    return Fd(t, e, o, l, d);
  }
  function I0(t, e, o) {
    var l = e.pendingProps, d = l.children, p = t !== null ? t.memoizedState : null;
    if (l.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (l = p !== null ? p.baseLanes | o : o, t !== null) {
          for (d = e.child = t.child, p = 0; d !== null; ) p = p | d.lanes | d.childLanes, d = d.sibling;
          e.childLanes = p & ~l;
        } else e.childLanes = 0, e.child = null;
        return j0(t, e, l, o);
      }
      if ((o & 536870912) !== 0) e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && lc(e, p !== null ? p.cachePool : null), p !== null ? $m(e, p) : Sd(), E0(e);
      else return e.lanes = e.childLanes = 536870912, j0(t, e, p !== null ? p.baseLanes | o : o, o);
    } else p !== null ? (lc(e, p.cachePool), $m(e, p), ta(), e.memoizedState = null) : (t !== null && lc(e, null), Sd(), ta());
    return In(t, e, d, o), e.child;
  }
  function j0(t, e, o, l) {
    var d = gd();
    return d = d === null ? null : { parent: wn._currentValue, pool: d }, e.memoizedState = { baseLanes: o, cachePool: d }, t !== null && lc(e, null), Sd(), E0(e), t !== null && Ia(t, e, l, true), null;
  }
  function Tc(t, e) {
    var o = e.ref;
    if (o === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof o != "function" && typeof o != "object") throw Error(u(284));
      (t === null || t.ref !== o) && (e.flags |= 4194816);
    }
  }
  function Fd(t, e, o, l, d) {
    return ja(e), o = Td(t, e, o, l, void 0, d), l = Ed(), t !== null && !kn ? (Md(t, e, d), pr(t, e, d)) : (Xt && l && St(e), e.flags |= 1, In(t, e, o, d), e.child);
  }
  function H0(t, e, o, l, d, p) {
    return ja(e), e.updateQueue = null, o = jm(e, l, o, d), Im(t), l = Ed(), t !== null && !kn ? (Md(t, e, p), pr(t, e, p)) : (Xt && l && St(e), e.flags |= 1, In(t, e, o, p), e.child);
  }
  function U0(t, e, o, l, d) {
    if (ja(e), e.stateNode === null) {
      var p = cr, x = o.contextType;
      typeof x == "object" && x !== null && (p = qn(x)), p = new o(l, p), e.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, p.updater = Hd, e.stateNode = p, p._reactInternals = e, p = e.stateNode, p.props = l, p.state = e.memoizedState, p.refs = {}, yd(e), x = o.contextType, p.context = typeof x == "object" && x !== null ? qn(x) : cr, p.state = e.memoizedState, x = o.getDerivedStateFromProps, typeof x == "function" && (jd(e, o, x, l), p.state = e.memoizedState), typeof o.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (x = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), x !== p.state && Hd.enqueueReplaceState(p, p.state, null), Ol(e, l, p, d), Ml(), p.state = e.memoizedState), typeof p.componentDidMount == "function" && (e.flags |= 4194308), l = true;
    } else if (t === null) {
      p = e.stateNode;
      var T = e.memoizedProps, H = Fa(o, T);
      p.props = H;
      var Q = p.context, vt = o.contextType;
      x = cr, typeof vt == "object" && vt !== null && (x = qn(vt));
      var xt = o.getDerivedStateFromProps;
      vt = typeof xt == "function" || typeof p.getSnapshotBeforeUpdate == "function", T = e.pendingProps !== T, vt || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (T || Q !== x) && O0(e, p, l, x), Kr = false;
      var nt = e.memoizedState;
      p.state = nt, Ol(e, l, p, d), Ml(), Q = e.memoizedState, T || nt !== Q || Kr ? (typeof xt == "function" && (jd(e, o, xt, l), Q = e.memoizedState), (H = Kr || M0(e, o, H, l, nt, Q, x)) ? (vt || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = Q), p.props = l, p.state = Q, p.context = x, l = H) : (typeof p.componentDidMount == "function" && (e.flags |= 4194308), l = false);
    } else {
      p = e.stateNode, _d(t, e), x = e.memoizedProps, vt = Fa(o, x), p.props = vt, xt = e.pendingProps, nt = p.context, Q = o.contextType, H = cr, typeof Q == "object" && Q !== null && (H = qn(Q)), T = o.getDerivedStateFromProps, (Q = typeof T == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (x !== xt || nt !== H) && O0(e, p, l, H), Kr = false, nt = e.memoizedState, p.state = nt, Ol(e, l, p, d), Ml();
      var at = e.memoizedState;
      x !== xt || nt !== at || Kr || t !== null && t.dependencies !== null && ac(t.dependencies) ? (typeof T == "function" && (jd(e, o, T, l), at = e.memoizedState), (vt = Kr || M0(e, o, vt, l, nt, at, H) || t !== null && t.dependencies !== null && ac(t.dependencies)) ? (Q || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(l, at, H), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(l, at, H)), typeof p.componentDidUpdate == "function" && (e.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || x === t.memoizedProps && nt === t.memoizedState || (e.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || x === t.memoizedProps && nt === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = at), p.props = l, p.state = at, p.context = H, l = vt) : (typeof p.componentDidUpdate != "function" || x === t.memoizedProps && nt === t.memoizedState || (e.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || x === t.memoizedProps && nt === t.memoizedState || (e.flags |= 1024), l = false);
    }
    return p = l, Tc(t, e), l = (e.flags & 128) !== 0, p || l ? (p = e.stateNode, o = l && typeof o.getDerivedStateFromError != "function" ? null : p.render(), e.flags |= 1, t !== null && l ? (e.child = Es(e, t.child, null, d), e.child = Es(e, null, o, d)) : In(t, e, o, d), e.memoizedState = p.state, t = e.child) : t = pr(t, e, d), t;
  }
  function F0(t, e, o, l) {
    return qr(), e.flags |= 256, In(t, e, o, l), e.child;
  }
  var Zd = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Vd(t) {
    return { baseLanes: t, cachePool: Rm() };
  }
  function Gd(t, e, o) {
    return t = t !== null ? t.childLanes & ~o : 0, e && (t |= Ji), t;
  }
  function Z0(t, e, o) {
    var l = e.pendingProps, d = false, p = (e.flags & 128) !== 0, x;
    if ((x = p) || (x = t !== null && t.memoizedState === null ? false : (Cn.current & 2) !== 0), x && (d = true, e.flags &= -129), x = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Xt) {
        if (d ? Jr(e) : ta(), Xt) {
          var T = Nt, H;
          if (H = T) {
            t: {
              for (H = T, T = ln; H.nodeType !== 8; ) {
                if (!T) {
                  T = null;
                  break t;
                }
                if (H = _o(H.nextSibling), H === null) {
                  T = null;
                  break t;
                }
              }
              T = H;
            }
            T !== null ? (e.memoizedState = { dehydrated: T, treeContext: _ !== null ? { id: C, overflow: j } : null, retryLane: 536870912, hydrationErrors: null }, H = li(18, null, null, 0), H.stateNode = T, H.return = e, e.child = H, kt = e, Nt = null, H = true) : H = false;
          }
          H || vi(e);
        }
        if (T = e.memoizedState, T !== null && (T = T.dehydrated, T !== null)) return Ah(T) ? e.lanes = 32 : e.lanes = 536870912, null;
        hr(e);
      }
      return T = l.children, l = l.fallback, d ? (ta(), d = e.mode, T = Ec({ mode: "hidden", children: T }, d), l = Lo(l, d, o, null), T.return = e, l.return = e, T.sibling = l, e.child = T, d = e.child, d.memoizedState = Vd(o), d.childLanes = Gd(t, x, o), e.memoizedState = Zd, l) : (Jr(e), qd(e, T));
    }
    if (H = t.memoizedState, H !== null && (T = H.dehydrated, T !== null)) {
      if (p) e.flags & 256 ? (Jr(e), e.flags &= -257, e = Yd(t, e, o)) : e.memoizedState !== null ? (ta(), e.child = t.child, e.flags |= 128, e = null) : (ta(), d = l.fallback, T = e.mode, l = Ec({ mode: "visible", children: l.children }, T), d = Lo(d, T, o, null), d.flags |= 2, l.return = e, d.return = e, l.sibling = d, e.child = l, Es(e, t.child, null, o), l = e.child, l.memoizedState = Vd(o), l.childLanes = Gd(t, x, o), e.memoizedState = Zd, e = d);
      else if (Jr(e), Ah(T)) {
        if (x = T.nextSibling && T.nextSibling.dataset, x) var Q = x.dgst;
        x = Q, l = Error(u(419)), l.stack = "", l.digest = x, Yr({ value: l, source: null, stack: null }), e = Yd(t, e, o);
      } else if (kn || Ia(t, e, o, false), x = (o & t.childLanes) !== 0, kn || x) {
        if (x = We, x !== null && (l = o & -o, l = (l & 42) !== 0 ? 1 : fi(l), l = (l & (x.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== H.retryLane)) throw H.retryLane = l, Vr(t, l), Di(x, t, l), B0;
        T.data === "$?" || dh(), e = Yd(t, e, o);
      } else T.data === "$?" ? (e.flags |= 192, e.child = t.child, e = null) : (t = H.treeContext, Nt = _o(T.nextSibling), kt = e, Xt = true, Xe = null, ln = false, t !== null && (c[m++] = C, c[m++] = j, c[m++] = _, C = t.id, j = t.overflow, _ = e), e = qd(e, l.children), e.flags |= 4096);
      return e;
    }
    return d ? (ta(), d = l.fallback, T = e.mode, H = t.child, Q = H.sibling, l = Xi(H, { mode: "hidden", children: l.children }), l.subtreeFlags = H.subtreeFlags & 65011712, Q !== null ? d = Xi(Q, d) : (d = Lo(d, T, o, null), d.flags |= 2), d.return = e, l.return = e, l.sibling = d, e.child = l, l = d, d = e.child, T = t.child.memoizedState, T === null ? T = Vd(o) : (H = T.cachePool, H !== null ? (Q = wn._currentValue, H = H.parent !== Q ? { parent: Q, pool: Q } : H) : H = Rm(), T = { baseLanes: T.baseLanes | o, cachePool: H }), d.memoizedState = T, d.childLanes = Gd(t, x, o), e.memoizedState = Zd, l) : (Jr(e), o = t.child, t = o.sibling, o = Xi(o, { mode: "visible", children: l.children }), o.return = e, o.sibling = null, t !== null && (x = e.deletions, x === null ? (e.deletions = [t], e.flags |= 16) : x.push(t)), e.child = o, e.memoizedState = null, o);
  }
  function qd(t, e) {
    return e = Ec({ mode: "visible", children: e }, t.mode), e.return = t, t.child = e;
  }
  function Ec(t, e) {
    return t = li(22, t, null, e), t.lanes = 0, t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }, t;
  }
  function Yd(t, e, o) {
    return Es(e, t.child, null, o), t = qd(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
  }
  function V0(t, e, o) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), $a(t.return, e, o);
  }
  function Kd(t, e, o, l, d) {
    var p = t.memoizedState;
    p === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: l, tail: o, tailMode: d } : (p.isBackwards = e, p.rendering = null, p.renderingStartTime = 0, p.last = l, p.tail = o, p.tailMode = d);
  }
  function G0(t, e, o) {
    var l = e.pendingProps, d = l.revealOrder, p = l.tail;
    if (In(t, e, l.children, o), l = Cn.current, (l & 2) !== 0) l = l & 1 | 2, e.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && V0(t, o, e);
        else if (t.tag === 19) V0(t, o, e);
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
      l &= 1;
    }
    switch (dt(Cn, l), d) {
      case "forwards":
        for (o = e.child, d = null; o !== null; ) t = o.alternate, t !== null && Sc(t) === null && (d = o), o = o.sibling;
        o = d, o === null ? (d = e.child, e.child = null) : (d = o.sibling, o.sibling = null), Kd(e, false, d, o, p);
        break;
      case "backwards":
        for (o = null, d = e.child, e.child = null; d !== null; ) {
          if (t = d.alternate, t !== null && Sc(t) === null) {
            e.child = d;
            break;
          }
          t = d.sibling, d.sibling = o, o = d, d = t;
        }
        Kd(e, true, o, null, p);
        break;
      case "together":
        Kd(e, false, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function pr(t, e, o) {
    if (t !== null && (e.dependencies = t.dependencies), ra |= e.lanes, (o & e.childLanes) === 0) if (t !== null) {
      if (Ia(t, e, o, false), (o & e.childLanes) === 0) return null;
    } else return null;
    if (t !== null && e.child !== t.child) throw Error(u(153));
    if (e.child !== null) {
      for (t = e.child, o = Xi(t, t.pendingProps), e.child = o, o.return = e; t.sibling !== null; ) t = t.sibling, o = o.sibling = Xi(t, t.pendingProps), o.return = e;
      o.sibling = null;
    }
    return e.child;
  }
  function Xd(t, e) {
    return (t.lanes & e) !== 0 ? true : (t = t.dependencies, !!(t !== null && ac(t)));
  }
  function I_(t, e, o) {
    switch (e.tag) {
      case 3:
        Lt(e, e.stateNode.containerInfo), zo(e, wn, t.memoizedState.cache), qr();
        break;
      case 27:
      case 5:
        Rt(e);
        break;
      case 4:
        Lt(e, e.stateNode.containerInfo);
        break;
      case 10:
        zo(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null) return l.dehydrated !== null ? (Jr(e), e.flags |= 128, null) : (o & e.child.childLanes) !== 0 ? Z0(t, e, o) : (Jr(e), t = pr(t, e, o), t !== null ? t.sibling : null);
        Jr(e);
        break;
      case 19:
        var d = (t.flags & 128) !== 0;
        if (l = (o & e.childLanes) !== 0, l || (Ia(t, e, o, false), l = (o & e.childLanes) !== 0), d) {
          if (l) return G0(t, e, o);
          e.flags |= 128;
        }
        if (d = e.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), dt(Cn, Cn.current), l) break;
        return null;
      case 22:
      case 23:
        return e.lanes = 0, I0(t, e, o);
      case 24:
        zo(e, wn, t.memoizedState.cache);
    }
    return pr(t, e, o);
  }
  function q0(t, e, o) {
    if (t !== null) if (t.memoizedProps !== e.pendingProps) kn = true;
    else {
      if (!Xd(t, o) && (e.flags & 128) === 0) return kn = false, I_(t, e, o);
      kn = (t.flags & 131072) !== 0;
    }
    else kn = false, Xt && (e.flags & 1048576) !== 0 && lt(e, s, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          t = e.pendingProps;
          var l = e.elementType, d = l._init;
          if (l = d(l._payload), e.type = l, typeof l == "function") gs(l) ? (t = Fa(l, t), e.tag = 1, e = U0(null, e, l, t, o)) : (e.tag = 0, e = Fd(null, e, l, t, o));
          else {
            if (l != null) {
              if (d = l.$$typeof, d === N) {
                e.tag = 11, e = D0(null, e, l, t, o);
                break t;
              } else if (d === K) {
                e.tag = 14, e = N0(null, e, l, t, o);
                break t;
              }
            }
            throw e = W(l) || l, Error(u(306, e, ""));
          }
        }
        return e;
      case 0:
        return Fd(t, e, e.type, e.pendingProps, o);
      case 1:
        return l = e.type, d = Fa(l, e.pendingProps), U0(t, e, l, d, o);
      case 3:
        t: {
          if (Lt(e, e.stateNode.containerInfo), t === null) throw Error(u(387));
          l = e.pendingProps;
          var p = e.memoizedState;
          d = p.element, _d(t, e), Ol(e, l, null, o);
          var x = e.memoizedState;
          if (l = x.cache, zo(e, wn, l), l !== p.cache && ys(e, [wn], o, true), Ml(), l = x.element, p.isDehydrated) if (p = { element: l, isDehydrated: false, cache: x.cache }, e.updateQueue.baseState = p, e.memoizedState = p, e.flags & 256) {
            e = F0(t, e, l, o);
            break t;
          } else if (l !== d) {
            d = ai(Error(u(424)), e), Yr(d), e = F0(t, e, l, o);
            break t;
          } else {
            switch (t = e.stateNode.containerInfo, t.nodeType) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
            }
            for (Nt = _o(t.firstChild), kt = e, Xt = true, Xe = null, ln = true, o = T0(e, null, l, o), e.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          }
          else {
            if (qr(), l === d) {
              e = pr(t, e, o);
              break t;
            }
            In(t, e, l, o);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Tc(t, e), t === null ? (o = Wg(e.type, null, e.pendingProps, null)) ? e.memoizedState = o : Xt || (o = e.type, t = e.pendingProps, l = jc(ct.current).createElement(o), l[Qe] = e, l[an] = t, Hn(l, o, t), Je(l), e.stateNode = l) : e.memoizedState = Wg(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return Rt(e), t === null && Xt && (l = e.stateNode = Yg(e.type, e.pendingProps, ct.current), kt = e, ln = true, d = Nt, ua(e.type) ? (Rh = d, Nt = _o(l.firstChild)) : Nt = d), In(t, e, e.pendingProps.children, o), Tc(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Xt && ((d = l = Nt) && (l = h2(l, e.type, e.pendingProps, ln), l !== null ? (e.stateNode = l, kt = e, Nt = _o(l.firstChild), ln = false, d = true) : d = false), d || vi(e)), Rt(e), d = e.type, p = e.pendingProps, x = t !== null ? t.memoizedProps : null, l = p.children, Eh(d, p) ? l = null : x !== null && Eh(d, x) && (e.flags |= 32), e.memoizedState !== null && (d = Td(t, e, k_, null, null, o), Xl._currentValue = d), Tc(t, e), In(t, e, l, o), e.child;
      case 6:
        return t === null && Xt && ((t = o = Nt) && (o = p2(o, e.pendingProps, ln), o !== null ? (e.stateNode = o, kt = e, Nt = null, t = true) : t = false), t || vi(e)), null;
      case 13:
        return Z0(t, e, o);
      case 4:
        return Lt(e, e.stateNode.containerInfo), l = e.pendingProps, t === null ? e.child = Es(e, null, l, o) : In(t, e, l, o), e.child;
      case 11:
        return D0(t, e, e.type, e.pendingProps, o);
      case 7:
        return In(t, e, e.pendingProps, o), e.child;
      case 8:
        return In(t, e, e.pendingProps.children, o), e.child;
      case 12:
        return In(t, e, e.pendingProps.children, o), e.child;
      case 10:
        return l = e.pendingProps, zo(e, e.type, l.value), In(t, e, l.children, o), e.child;
      case 9:
        return d = e.type._context, l = e.pendingProps.children, ja(e), d = qn(d), l = l(d), e.flags |= 1, In(t, e, l, o), e.child;
      case 14:
        return N0(t, e, e.type, e.pendingProps, o);
      case 15:
        return $0(t, e, e.type, e.pendingProps, o);
      case 19:
        return G0(t, e, o);
      case 31:
        return l = e.pendingProps, o = e.mode, l = { mode: l.mode, children: l.children }, t === null ? (o = Ec(l, o), o.ref = e.ref, e.child = o, o.return = e, e = o) : (o = Xi(t.child, l), o.ref = e.ref, e.child = o, o.return = e, e = o), e;
      case 22:
        return I0(t, e, o);
      case 24:
        return ja(e), l = qn(wn), t === null ? (d = gd(), d === null && (d = We, p = pd(), d.pooledCache = p, p.refCount++, p !== null && (d.pooledCacheLanes |= o), d = p), e.memoizedState = { parent: l, cache: d }, yd(e), zo(e, wn, d)) : ((t.lanes & o) !== 0 && (_d(t, e), Ol(e, null, null, o), Ml()), d = t.memoizedState, p = e.memoizedState, d.parent !== l ? (d = { parent: l, cache: l }, e.memoizedState = d, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = d), zo(e, wn, l)) : (l = p.cache, zo(e, wn, l), l !== d.cache && ys(e, [wn], o, true))), In(t, e, e.pendingProps.children, o), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(u(156, e.tag));
  }
  function mr(t) {
    t.flags |= 4;
  }
  function Y0(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (t.flags |= 16777216, !nv(e)) {
      if (e = Qi.current, e !== null && ((we & 4194048) === we ? Po !== null : (we & 62914560) !== we && (we & 536870912) === 0 || e !== Po)) throw Tl = vd, km;
      t.flags |= 8192;
    }
  }
  function Mc(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? uo() : 536870912, t.lanes |= e, Rs |= e);
  }
  function Bl(t, e) {
    if (!Xt) switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var o = null; e !== null; ) e.alternate !== null && (o = e), e = e.sibling;
        o === null ? t.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = t.tail;
        for (var l = null; o !== null; ) o.alternate !== null && (l = o), o = o.sibling;
        l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
    }
  }
  function un(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, o = 0, l = 0;
    if (e) for (var d = t.child; d !== null; ) o |= d.lanes | d.childLanes, l |= d.subtreeFlags & 65011712, l |= d.flags & 65011712, d.return = t, d = d.sibling;
    else for (d = t.child; d !== null; ) o |= d.lanes | d.childLanes, l |= d.subtreeFlags, l |= d.flags, d.return = t, d = d.sibling;
    return t.subtreeFlags |= l, t.childLanes = o, e;
  }
  function j_(t, e, o) {
    var l = e.pendingProps;
    switch (Et(e), e.tag) {
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
        return un(e), null;
      case 1:
        return un(e), null;
      case 3:
        return o = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), vo(wn), $t(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (t === null || t.child === null) && (Na(e) ? mr(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, rc())), un(e), null;
      case 26:
        return o = e.memoizedState, t === null ? (mr(e), o !== null ? (un(e), Y0(e, o)) : (un(e), e.flags &= -16777217)) : o ? o !== t.memoizedState ? (mr(e), un(e), Y0(e, o)) : (un(e), e.flags &= -16777217) : (t.memoizedProps !== l && mr(e), un(e), e.flags &= -16777217), null;
      case 27:
        Ut(e), o = ct.current;
        var d = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== l && mr(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(u(166));
            return un(e), null;
          }
          t = bt.current, Na(e) ? ic(e) : (t = Yg(d, l, o), e.stateNode = t, mr(e));
        }
        return un(e), null;
      case 5:
        if (Ut(e), o = e.type, t !== null && e.stateNode != null) t.memoizedProps !== l && mr(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(u(166));
            return un(e), null;
          }
          if (t = bt.current, Na(e)) ic(e);
          else {
            switch (d = jc(ct.current), t) {
              case 1:
                t = d.createElementNS("http://www.w3.org/2000/svg", o);
                break;
              case 2:
                t = d.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                break;
              default:
                switch (o) {
                  case "svg":
                    t = d.createElementNS("http://www.w3.org/2000/svg", o);
                    break;
                  case "math":
                    t = d.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                    break;
                  case "script":
                    t = d.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof l.is == "string" ? d.createElement("select", { is: l.is }) : d.createElement("select"), l.multiple ? t.multiple = true : l.size && (t.size = l.size);
                    break;
                  default:
                    t = typeof l.is == "string" ? d.createElement(o, { is: l.is }) : d.createElement(o);
                }
            }
            t[Qe] = e, t[an] = l;
            t: for (d = e.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6) t.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                d.child.return = d, d = d.child;
                continue;
              }
              if (d === e) break t;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === e) break t;
                d = d.return;
              }
              d.sibling.return = d.return, d = d.sibling;
            }
            e.stateNode = t;
            t: switch (Hn(t, o, l), o) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!l.autoFocus;
                break t;
              case "img":
                t = true;
                break t;
              default:
                t = false;
            }
            t && mr(e);
          }
        }
        return un(e), e.flags &= -16777217, null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && mr(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(u(166));
          if (t = ct.current, Na(e)) {
            if (t = e.stateNode, o = e.memoizedProps, l = null, d = kt, d !== null) switch (d.tag) {
              case 27:
              case 5:
                l = d.memoizedProps;
            }
            t[Qe] = e, t = !!(t.nodeValue === o || l !== null && l.suppressHydrationWarning === true || Hg(t.nodeValue, o)), t || vi(e);
          } else t = jc(t).createTextNode(l), t[Qe] = e, e.stateNode = t;
        }
        return un(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (d = Na(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!d) throw Error(u(318));
              if (d = e.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(u(317));
              d[Qe] = e;
            } else qr(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            un(e), d = false;
          } else d = rc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = d), d = true;
          if (!d) return e.flags & 256 ? (hr(e), e) : (hr(e), null);
        }
        if (hr(e), (e.flags & 128) !== 0) return e.lanes = o, e;
        if (o = l !== null, t = t !== null && t.memoizedState !== null, o) {
          l = e.child, d = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (d = l.alternate.memoizedState.cachePool.pool);
          var p = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (p = l.memoizedState.cachePool.pool), p !== d && (l.flags |= 2048);
        }
        return o !== t && o && (e.child.flags |= 8192), Mc(e, e.updateQueue), un(e), null;
      case 4:
        return $t(), t === null && xh(e.stateNode.containerInfo), un(e), null;
      case 10:
        return vo(e.type), un(e), null;
      case 19:
        if (ft(Cn), d = e.memoizedState, d === null) return un(e), null;
        if (l = (e.flags & 128) !== 0, p = d.rendering, p === null) if (l) Bl(d, false);
        else {
          if (hn !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
            if (p = Sc(t), p !== null) {
              for (e.flags |= 128, Bl(d, false), t = p.updateQueue, e.updateQueue = t, Mc(e, t), e.subtreeFlags = 0, t = o, o = e.child; o !== null; ) bl(o, t), o = o.sibling;
              return dt(Cn, Cn.current & 1 | 2), e.child;
            }
            t = t.sibling;
          }
          d.tail !== null && ue() > Rc && (e.flags |= 128, l = true, Bl(d, false), e.lanes = 4194304);
        }
        else {
          if (!l) if (t = Sc(p), t !== null) {
            if (e.flags |= 128, l = true, t = t.updateQueue, e.updateQueue = t, Mc(e, t), Bl(d, true), d.tail === null && d.tailMode === "hidden" && !p.alternate && !Xt) return un(e), null;
          } else 2 * ue() - d.renderingStartTime > Rc && o !== 536870912 && (e.flags |= 128, l = true, Bl(d, false), e.lanes = 4194304);
          d.isBackwards ? (p.sibling = e.child, e.child = p) : (t = d.last, t !== null ? t.sibling = p : e.child = p, d.last = p);
        }
        return d.tail !== null ? (e = d.tail, d.rendering = e, d.tail = e.sibling, d.renderingStartTime = ue(), e.sibling = null, t = Cn.current, dt(Cn, l ? t & 1 | 2 : t & 1), e) : (un(e), null);
      case 22:
      case 23:
        return hr(e), wd(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (o & 536870912) !== 0 && (e.flags & 128) === 0 && (un(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : un(e), o = e.updateQueue, o !== null && Mc(e, o.retryQueue), o = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (o = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== o && (e.flags |= 2048), t !== null && ft(Ha), null;
      case 24:
        return o = null, t !== null && (o = t.memoizedState.cache), e.memoizedState.cache !== o && (e.flags |= 2048), vo(wn), un(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, e.tag));
  }
  function H_(t, e) {
    switch (Et(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return vo(wn), $t(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Ut(e), null;
      case 13:
        if (hr(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null) throw Error(u(340));
          qr();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return ft(Cn), null;
      case 4:
        return $t(), null;
      case 10:
        return vo(e.type), null;
      case 22:
      case 23:
        return hr(e), wd(), t !== null && ft(Ha), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return vo(wn), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function K0(t, e) {
    switch (Et(e), e.tag) {
      case 3:
        vo(wn), $t();
        break;
      case 26:
      case 27:
      case 5:
        Ut(e);
        break;
      case 4:
        $t();
        break;
      case 13:
        hr(e);
        break;
      case 19:
        ft(Cn);
        break;
      case 10:
        vo(e.type);
        break;
      case 22:
      case 23:
        hr(e), wd(), t !== null && ft(Ha);
        break;
      case 24:
        vo(wn);
    }
  }
  function Dl(t, e) {
    try {
      var o = e.updateQueue, l = o !== null ? o.lastEffect : null;
      if (l !== null) {
        var d = l.next;
        o = d;
        do {
          if ((o.tag & t) === t) {
            l = void 0;
            var p = o.create, x = o.inst;
            l = p(), x.destroy = l;
          }
          o = o.next;
        } while (o !== d);
      }
    } catch (T) {
      Fe(e, e.return, T);
    }
  }
  function ea(t, e, o) {
    try {
      var l = e.updateQueue, d = l !== null ? l.lastEffect : null;
      if (d !== null) {
        var p = d.next;
        l = p;
        do {
          if ((l.tag & t) === t) {
            var x = l.inst, T = x.destroy;
            if (T !== void 0) {
              x.destroy = void 0, d = e;
              var H = o, Q = T;
              try {
                Q();
              } catch (vt) {
                Fe(d, H, vt);
              }
            }
          }
          l = l.next;
        } while (l !== p);
      }
    } catch (vt) {
      Fe(e, e.return, vt);
    }
  }
  function X0(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var o = t.stateNode;
      try {
        Nm(e, o);
      } catch (l) {
        Fe(t, t.return, l);
      }
    }
  }
  function W0(t, e, o) {
    o.props = Fa(t.type, t.memoizedProps), o.state = t.memoizedState;
    try {
      o.componentWillUnmount();
    } catch (l) {
      Fe(t, e, l);
    }
  }
  function Nl(t, e) {
    try {
      var o = t.ref;
      if (o !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof o == "function" ? t.refCleanup = o(l) : o.current = l;
      }
    } catch (d) {
      Fe(t, e, d);
    }
  }
  function Bo(t, e) {
    var o = t.ref, l = t.refCleanup;
    if (o !== null) if (typeof l == "function") try {
      l();
    } catch (d) {
      Fe(t, e, d);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof o == "function") try {
      o(null);
    } catch (d) {
      Fe(t, e, d);
    }
    else o.current = null;
  }
  function Q0(t) {
    var e = t.type, o = t.memoizedProps, l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          o.autoFocus && l.focus();
          break t;
        case "img":
          o.src ? l.src = o.src : o.srcSet && (l.srcset = o.srcSet);
      }
    } catch (d) {
      Fe(t, t.return, d);
    }
  }
  function Wd(t, e, o) {
    try {
      var l = t.stateNode;
      l2(l, t.type, o, e), l[an] = e;
    } catch (d) {
      Fe(t, t.return, d);
    }
  }
  function J0(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ua(t.type) || t.tag === 4;
  }
  function Qd(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || J0(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && ua(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Jd(t, e, o) {
    var l = t.tag;
    if (l === 5 || l === 6) t = t.stateNode, e ? (o.nodeType === 9 ? o.body : o.nodeName === "HTML" ? o.ownerDocument.body : o).insertBefore(t, e) : (e = o.nodeType === 9 ? o.body : o.nodeName === "HTML" ? o.ownerDocument.body : o, e.appendChild(t), o = o._reactRootContainer, o != null || e.onclick !== null || (e.onclick = Ic));
    else if (l !== 4 && (l === 27 && ua(t.type) && (o = t.stateNode, e = null), t = t.child, t !== null)) for (Jd(t, e, o), t = t.sibling; t !== null; ) Jd(t, e, o), t = t.sibling;
  }
  function Oc(t, e, o) {
    var l = t.tag;
    if (l === 5 || l === 6) t = t.stateNode, e ? o.insertBefore(t, e) : o.appendChild(t);
    else if (l !== 4 && (l === 27 && ua(t.type) && (o = t.stateNode), t = t.child, t !== null)) for (Oc(t, e, o), t = t.sibling; t !== null; ) Oc(t, e, o), t = t.sibling;
  }
  function tg(t) {
    var e = t.stateNode, o = t.memoizedProps;
    try {
      for (var l = t.type, d = e.attributes; d.length; ) e.removeAttributeNode(d[0]);
      Hn(e, l, o), e[Qe] = t, e[an] = o;
    } catch (p) {
      Fe(t, t.return, p);
    }
  }
  var gr = false, vn = false, th = false, eg = typeof WeakSet == "function" ? WeakSet : Set, Ln = null;
  function U_(t, e) {
    if (t = t.containerInfo, Ch = Gc, t = Ra(t), ka(t)) {
      if ("selectionStart" in t) var o = { start: t.selectionStart, end: t.selectionEnd };
      else t: {
        o = (o = t.ownerDocument) && o.defaultView || window;
        var l = o.getSelection && o.getSelection();
        if (l && l.rangeCount !== 0) {
          o = l.anchorNode;
          var d = l.anchorOffset, p = l.focusNode;
          l = l.focusOffset;
          try {
            o.nodeType, p.nodeType;
          } catch {
            o = null;
            break t;
          }
          var x = 0, T = -1, H = -1, Q = 0, vt = 0, xt = t, nt = null;
          e: for (; ; ) {
            for (var at; xt !== o || d !== 0 && xt.nodeType !== 3 || (T = x + d), xt !== p || l !== 0 && xt.nodeType !== 3 || (H = x + l), xt.nodeType === 3 && (x += xt.nodeValue.length), (at = xt.firstChild) !== null; ) nt = xt, xt = at;
            for (; ; ) {
              if (xt === t) break e;
              if (nt === o && ++Q === d && (T = x), nt === p && ++vt === l && (H = x), (at = xt.nextSibling) !== null) break;
              xt = nt, nt = xt.parentNode;
            }
            xt = at;
          }
          o = T === -1 || H === -1 ? null : { start: T, end: H };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (Th = { focusedElem: t, selectionRange: o }, Gc = false, Ln = e; Ln !== null; ) if (e = Ln, t = e.child, (e.subtreeFlags & 1024) !== 0 && t !== null) t.return = e, Ln = t;
    else for (; Ln !== null; ) {
      switch (e = Ln, p = e.alternate, t = e.flags, e.tag) {
        case 0:
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((t & 1024) !== 0 && p !== null) {
            t = void 0, o = e, d = p.memoizedProps, p = p.memoizedState, l = o.stateNode;
            try {
              var Kt = Fa(o.type, d, o.elementType === o.type);
              t = l.getSnapshotBeforeUpdate(Kt, p), l.__reactInternalSnapshotBeforeUpdate = t;
            } catch (Ft) {
              Fe(o, o.return, Ft);
            }
          }
          break;
        case 3:
          if ((t & 1024) !== 0) {
            if (t = e.stateNode.containerInfo, o = t.nodeType, o === 9) Oh(t);
            else if (o === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Oh(t);
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
          if ((t & 1024) !== 0) throw Error(u(163));
      }
      if (t = e.sibling, t !== null) {
        t.return = e.return, Ln = t;
        break;
      }
      Ln = e.return;
    }
  }
  function ng(t, e, o) {
    var l = o.flags;
    switch (o.tag) {
      case 0:
      case 11:
      case 15:
        na(t, o), l & 4 && Dl(5, o);
        break;
      case 1:
        if (na(t, o), l & 4) if (t = o.stateNode, e === null) try {
          t.componentDidMount();
        } catch (x) {
          Fe(o, o.return, x);
        }
        else {
          var d = Fa(o.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            t.componentDidUpdate(d, e, t.__reactInternalSnapshotBeforeUpdate);
          } catch (x) {
            Fe(o, o.return, x);
          }
        }
        l & 64 && X0(o), l & 512 && Nl(o, o.return);
        break;
      case 3:
        if (na(t, o), l & 64 && (t = o.updateQueue, t !== null)) {
          if (e = null, o.child !== null) switch (o.child.tag) {
            case 27:
            case 5:
              e = o.child.stateNode;
              break;
            case 1:
              e = o.child.stateNode;
          }
          try {
            Nm(t, e);
          } catch (x) {
            Fe(o, o.return, x);
          }
        }
        break;
      case 27:
        e === null && l & 4 && tg(o);
      case 26:
      case 5:
        na(t, o), e === null && l & 4 && Q0(o), l & 512 && Nl(o, o.return);
        break;
      case 12:
        na(t, o);
        break;
      case 13:
        na(t, o), l & 4 && rg(t, o), l & 64 && (t = o.memoizedState, t !== null && (t = t.dehydrated, t !== null && (o = W_.bind(null, o), m2(t, o))));
        break;
      case 22:
        if (l = o.memoizedState !== null || gr, !l) {
          e = e !== null && e.memoizedState !== null || vn, d = gr;
          var p = vn;
          gr = l, (vn = e) && !p ? ia(t, o, (o.subtreeFlags & 8772) !== 0) : na(t, o), gr = d, vn = p;
        }
        break;
      case 30:
        break;
      default:
        na(t, o);
    }
  }
  function ig(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, ig(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Ve(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var nn = null, _i = false;
  function vr(t, e, o) {
    for (o = o.child; o !== null; ) og(t, e, o), o = o.sibling;
  }
  function og(t, e, o) {
    if (Vt && typeof Vt.onCommitFiberUnmount == "function") try {
      Vt.onCommitFiberUnmount(ce, o);
    } catch {
    }
    switch (o.tag) {
      case 26:
        vn || Bo(o, e), vr(t, e, o), o.memoizedState ? o.memoizedState.count-- : o.stateNode && (o = o.stateNode, o.parentNode.removeChild(o));
        break;
      case 27:
        vn || Bo(o, e);
        var l = nn, d = _i;
        ua(o.type) && (nn = o.stateNode, _i = false), vr(t, e, o), Gl(o.stateNode), nn = l, _i = d;
        break;
      case 5:
        vn || Bo(o, e);
      case 6:
        if (l = nn, d = _i, nn = null, vr(t, e, o), nn = l, _i = d, nn !== null) if (_i) try {
          (nn.nodeType === 9 ? nn.body : nn.nodeName === "HTML" ? nn.ownerDocument.body : nn).removeChild(o.stateNode);
        } catch (p) {
          Fe(o, e, p);
        }
        else try {
          nn.removeChild(o.stateNode);
        } catch (p) {
          Fe(o, e, p);
        }
        break;
      case 18:
        nn !== null && (_i ? (t = nn, Gg(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, o.stateNode), tu(t)) : Gg(nn, o.stateNode));
        break;
      case 4:
        l = nn, d = _i, nn = o.stateNode.containerInfo, _i = true, vr(t, e, o), nn = l, _i = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vn || ea(2, o, e), vn || ea(4, o, e), vr(t, e, o);
        break;
      case 1:
        vn || (Bo(o, e), l = o.stateNode, typeof l.componentWillUnmount == "function" && W0(o, e, l)), vr(t, e, o);
        break;
      case 21:
        vr(t, e, o);
        break;
      case 22:
        vn = (l = vn) || o.memoizedState !== null, vr(t, e, o), vn = l;
        break;
      default:
        vr(t, e, o);
    }
  }
  function rg(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      tu(t);
    } catch (o) {
      Fe(e, e.return, o);
    }
  }
  function F_(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new eg()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new eg()), e;
      default:
        throw Error(u(435, t.tag));
    }
  }
  function eh(t, e) {
    var o = F_(t);
    e.forEach(function(l) {
      var d = Q_.bind(null, t, l);
      o.has(l) || (o.add(l), l.then(d, d));
    });
  }
  function Li(t, e) {
    var o = e.deletions;
    if (o !== null) for (var l = 0; l < o.length; l++) {
      var d = o[l], p = t, x = e, T = x;
      t: for (; T !== null; ) {
        switch (T.tag) {
          case 27:
            if (ua(T.type)) {
              nn = T.stateNode, _i = false;
              break t;
            }
            break;
          case 5:
            nn = T.stateNode, _i = false;
            break t;
          case 3:
          case 4:
            nn = T.stateNode.containerInfo, _i = true;
            break t;
        }
        T = T.return;
      }
      if (nn === null) throw Error(u(160));
      og(p, x, d), nn = null, _i = false, p = d.alternate, p !== null && (p.return = null), d.return = null;
    }
    if (e.subtreeFlags & 13878) for (e = e.child; e !== null; ) ag(e, t), e = e.sibling;
  }
  var yo = null;
  function ag(t, e) {
    var o = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Li(e, t), zi(t), l & 4 && (ea(3, t, t.return), Dl(3, t), ea(5, t, t.return));
        break;
      case 1:
        Li(e, t), zi(t), l & 512 && (vn || o === null || Bo(o, o.return)), l & 64 && gr && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (o = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = o === null ? l : o.concat(l))));
        break;
      case 26:
        var d = yo;
        if (Li(e, t), zi(t), l & 512 && (vn || o === null || Bo(o, o.return)), l & 4) {
          var p = o !== null ? o.memoizedState : null;
          if (l = t.memoizedState, o === null) if (l === null) if (t.stateNode === null) {
            t: {
              l = t.type, o = t.memoizedProps, d = d.ownerDocument || d;
              e: switch (l) {
                case "title":
                  p = d.getElementsByTagName("title")[0], (!p || p[pi] || p[Qe] || p.namespaceURI === "http://www.w3.org/2000/svg" || p.hasAttribute("itemprop")) && (p = d.createElement(l), d.head.insertBefore(p, d.querySelector("head > title"))), Hn(p, l, o), p[Qe] = t, Je(p), l = p;
                  break t;
                case "link":
                  var x = tv("link", "href", d).get(l + (o.href || ""));
                  if (x) {
                    for (var T = 0; T < x.length; T++) if (p = x[T], p.getAttribute("href") === (o.href == null || o.href === "" ? null : o.href) && p.getAttribute("rel") === (o.rel == null ? null : o.rel) && p.getAttribute("title") === (o.title == null ? null : o.title) && p.getAttribute("crossorigin") === (o.crossOrigin == null ? null : o.crossOrigin)) {
                      x.splice(T, 1);
                      break e;
                    }
                  }
                  p = d.createElement(l), Hn(p, l, o), d.head.appendChild(p);
                  break;
                case "meta":
                  if (x = tv("meta", "content", d).get(l + (o.content || ""))) {
                    for (T = 0; T < x.length; T++) if (p = x[T], p.getAttribute("content") === (o.content == null ? null : "" + o.content) && p.getAttribute("name") === (o.name == null ? null : o.name) && p.getAttribute("property") === (o.property == null ? null : o.property) && p.getAttribute("http-equiv") === (o.httpEquiv == null ? null : o.httpEquiv) && p.getAttribute("charset") === (o.charSet == null ? null : o.charSet)) {
                      x.splice(T, 1);
                      break e;
                    }
                  }
                  p = d.createElement(l), Hn(p, l, o), d.head.appendChild(p);
                  break;
                default:
                  throw Error(u(468, l));
              }
              p[Qe] = t, Je(p), l = p;
            }
            t.stateNode = l;
          } else ev(d, t.type, t.stateNode);
          else t.stateNode = Jg(d, l, t.memoizedProps);
          else p !== l ? (p === null ? o.stateNode !== null && (o = o.stateNode, o.parentNode.removeChild(o)) : p.count--, l === null ? ev(d, t.type, t.stateNode) : Jg(d, l, t.memoizedProps)) : l === null && t.stateNode !== null && Wd(t, t.memoizedProps, o.memoizedProps);
        }
        break;
      case 27:
        Li(e, t), zi(t), l & 512 && (vn || o === null || Bo(o, o.return)), o !== null && l & 4 && Wd(t, t.memoizedProps, o.memoizedProps);
        break;
      case 5:
        if (Li(e, t), zi(t), l & 512 && (vn || o === null || Bo(o, o.return)), t.flags & 32) {
          d = t.stateNode;
          try {
            Vi(d, "");
          } catch (at) {
            Fe(t, t.return, at);
          }
        }
        l & 4 && t.stateNode != null && (d = t.memoizedProps, Wd(t, d, o !== null ? o.memoizedProps : d)), l & 1024 && (th = true);
        break;
      case 6:
        if (Li(e, t), zi(t), l & 4) {
          if (t.stateNode === null) throw Error(u(162));
          l = t.memoizedProps, o = t.stateNode;
          try {
            o.nodeValue = l;
          } catch (at) {
            Fe(t, t.return, at);
          }
        }
        break;
      case 3:
        if (Fc = null, d = yo, yo = Hc(e.containerInfo), Li(e, t), yo = d, zi(t), l & 4 && o !== null && o.memoizedState.isDehydrated) try {
          tu(e.containerInfo);
        } catch (at) {
          Fe(t, t.return, at);
        }
        th && (th = false, sg(t));
        break;
      case 4:
        l = yo, yo = Hc(t.stateNode.containerInfo), Li(e, t), zi(t), yo = l;
        break;
      case 12:
        Li(e, t), zi(t);
        break;
      case 13:
        Li(e, t), zi(t), t.child.flags & 8192 && t.memoizedState !== null != (o !== null && o.memoizedState !== null) && (sh = ue()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, eh(t, l)));
        break;
      case 22:
        d = t.memoizedState !== null;
        var H = o !== null && o.memoizedState !== null, Q = gr, vt = vn;
        if (gr = Q || d, vn = vt || H, Li(e, t), vn = vt, gr = Q, zi(t), l & 8192) t: for (e = t.stateNode, e._visibility = d ? e._visibility & -2 : e._visibility | 1, d && (o === null || H || gr || vn || Za(t)), o = null, e = t; ; ) {
          if (e.tag === 5 || e.tag === 26) {
            if (o === null) {
              H = o = e;
              try {
                if (p = H.stateNode, d) x = p.style, typeof x.setProperty == "function" ? x.setProperty("display", "none", "important") : x.display = "none";
                else {
                  T = H.stateNode;
                  var xt = H.memoizedProps.style, nt = xt != null && xt.hasOwnProperty("display") ? xt.display : null;
                  T.style.display = nt == null || typeof nt == "boolean" ? "" : ("" + nt).trim();
                }
              } catch (at) {
                Fe(H, H.return, at);
              }
            }
          } else if (e.tag === 6) {
            if (o === null) {
              H = e;
              try {
                H.stateNode.nodeValue = d ? "" : H.memoizedProps;
              } catch (at) {
                Fe(H, H.return, at);
              }
            }
          } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break t;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break t;
            o === e && (o = null), e = e.return;
          }
          o === e && (o = null), e.sibling.return = e.return, e = e.sibling;
        }
        l & 4 && (l = t.updateQueue, l !== null && (o = l.retryQueue, o !== null && (l.retryQueue = null, eh(t, o))));
        break;
      case 19:
        Li(e, t), zi(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, eh(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Li(e, t), zi(t);
    }
  }
  function zi(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var o, l = t.return; l !== null; ) {
          if (J0(l)) {
            o = l;
            break;
          }
          l = l.return;
        }
        if (o == null) throw Error(u(160));
        switch (o.tag) {
          case 27:
            var d = o.stateNode, p = Qd(t);
            Oc(t, p, d);
            break;
          case 5:
            var x = o.stateNode;
            o.flags & 32 && (Vi(x, ""), o.flags &= -33);
            var T = Qd(t);
            Oc(t, T, x);
            break;
          case 3:
          case 4:
            var H = o.stateNode.containerInfo, Q = Qd(t);
            Jd(t, Q, H);
            break;
          default:
            throw Error(u(161));
        }
      } catch (vt) {
        Fe(t, t.return, vt);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function sg(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var e = t;
      sg(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
    }
  }
  function na(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) ng(t, e.alternate, e), e = e.sibling;
  }
  function Za(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ea(4, e, e.return), Za(e);
          break;
        case 1:
          Bo(e, e.return);
          var o = e.stateNode;
          typeof o.componentWillUnmount == "function" && W0(e, e.return, o), Za(e);
          break;
        case 27:
          Gl(e.stateNode);
        case 26:
        case 5:
          Bo(e, e.return), Za(e);
          break;
        case 22:
          e.memoizedState === null && Za(e);
          break;
        case 30:
          Za(e);
          break;
        default:
          Za(e);
      }
      t = t.sibling;
    }
  }
  function ia(t, e, o) {
    for (o = o && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate, d = t, p = e, x = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          ia(d, p, o), Dl(4, p);
          break;
        case 1:
          if (ia(d, p, o), l = p, d = l.stateNode, typeof d.componentDidMount == "function") try {
            d.componentDidMount();
          } catch (Q) {
            Fe(l, l.return, Q);
          }
          if (l = p, d = l.updateQueue, d !== null) {
            var T = l.stateNode;
            try {
              var H = d.shared.hiddenCallbacks;
              if (H !== null) for (d.shared.hiddenCallbacks = null, d = 0; d < H.length; d++) Dm(H[d], T);
            } catch (Q) {
              Fe(l, l.return, Q);
            }
          }
          o && x & 64 && X0(p), Nl(p, p.return);
          break;
        case 27:
          tg(p);
        case 26:
        case 5:
          ia(d, p, o), o && l === null && x & 4 && Q0(p), Nl(p, p.return);
          break;
        case 12:
          ia(d, p, o);
          break;
        case 13:
          ia(d, p, o), o && x & 4 && rg(d, p);
          break;
        case 22:
          p.memoizedState === null && ia(d, p, o), Nl(p, p.return);
          break;
        case 30:
          break;
        default:
          ia(d, p, o);
      }
      e = e.sibling;
    }
  }
  function nh(t, e) {
    var o = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (o = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== o && (t != null && t.refCount++, o != null && Sl(o));
  }
  function ih(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Sl(t));
  }
  function Do(t, e, o, l) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) lg(t, e, o, l), e = e.sibling;
  }
  function lg(t, e, o, l) {
    var d = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Do(t, e, o, l), d & 2048 && Dl(9, e);
        break;
      case 1:
        Do(t, e, o, l);
        break;
      case 3:
        Do(t, e, o, l), d & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Sl(t)));
        break;
      case 12:
        if (d & 2048) {
          Do(t, e, o, l), t = e.stateNode;
          try {
            var p = e.memoizedProps, x = p.id, T = p.onPostCommit;
            typeof T == "function" && T(x, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (H) {
            Fe(e, e.return, H);
          }
        } else Do(t, e, o, l);
        break;
      case 13:
        Do(t, e, o, l);
        break;
      case 23:
        break;
      case 22:
        p = e.stateNode, x = e.alternate, e.memoizedState !== null ? p._visibility & 2 ? Do(t, e, o, l) : $l(t, e) : p._visibility & 2 ? Do(t, e, o, l) : (p._visibility |= 2, Ms(t, e, o, l, (e.subtreeFlags & 10256) !== 0)), d & 2048 && nh(x, e);
        break;
      case 24:
        Do(t, e, o, l), d & 2048 && ih(e.alternate, e);
        break;
      default:
        Do(t, e, o, l);
    }
  }
  function Ms(t, e, o, l, d) {
    for (d = d && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var p = t, x = e, T = o, H = l, Q = x.flags;
      switch (x.tag) {
        case 0:
        case 11:
        case 15:
          Ms(p, x, T, H, d), Dl(8, x);
          break;
        case 23:
          break;
        case 22:
          var vt = x.stateNode;
          x.memoizedState !== null ? vt._visibility & 2 ? Ms(p, x, T, H, d) : $l(p, x) : (vt._visibility |= 2, Ms(p, x, T, H, d)), d && Q & 2048 && nh(x.alternate, x);
          break;
        case 24:
          Ms(p, x, T, H, d), d && Q & 2048 && ih(x.alternate, x);
          break;
        default:
          Ms(p, x, T, H, d);
      }
      e = e.sibling;
    }
  }
  function $l(t, e) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
      var o = t, l = e, d = l.flags;
      switch (l.tag) {
        case 22:
          $l(o, l), d & 2048 && nh(l.alternate, l);
          break;
        case 24:
          $l(o, l), d & 2048 && ih(l.alternate, l);
          break;
        default:
          $l(o, l);
      }
      e = e.sibling;
    }
  }
  var Il = 8192;
  function Os(t) {
    if (t.subtreeFlags & Il) for (t = t.child; t !== null; ) ug(t), t = t.sibling;
  }
  function ug(t) {
    switch (t.tag) {
      case 26:
        Os(t), t.flags & Il && t.memoizedState !== null && O2(yo, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Os(t);
        break;
      case 3:
      case 4:
        var e = yo;
        yo = Hc(t.stateNode.containerInfo), Os(t), yo = e;
        break;
      case 22:
        t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = Il, Il = 16777216, Os(t), Il = e) : Os(t));
        break;
      default:
        Os(t);
    }
  }
  function cg(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function jl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null) for (var o = 0; o < e.length; o++) {
        var l = e[o];
        Ln = l, dg(l, t);
      }
      cg(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) fg(t), t = t.sibling;
  }
  function fg(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        jl(t), t.flags & 2048 && ea(9, t, t.return);
        break;
      case 3:
        jl(t);
        break;
      case 12:
        jl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Ac(t)) : jl(t);
        break;
      default:
        jl(t);
    }
  }
  function Ac(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null) for (var o = 0; o < e.length; o++) {
        var l = e[o];
        Ln = l, dg(l, t);
      }
      cg(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          ea(8, e, e.return), Ac(e);
          break;
        case 22:
          o = e.stateNode, o._visibility & 2 && (o._visibility &= -3, Ac(e));
          break;
        default:
          Ac(e);
      }
      t = t.sibling;
    }
  }
  function dg(t, e) {
    for (; Ln !== null; ) {
      var o = Ln;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          ea(8, o, e);
          break;
        case 23:
        case 22:
          if (o.memoizedState !== null && o.memoizedState.cachePool !== null) {
            var l = o.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Sl(o.memoizedState.cache);
      }
      if (l = o.child, l !== null) l.return = o, Ln = l;
      else t: for (o = t; Ln !== null; ) {
        l = Ln;
        var d = l.sibling, p = l.return;
        if (ig(l), l === o) {
          Ln = null;
          break t;
        }
        if (d !== null) {
          d.return = p, Ln = d;
          break t;
        }
        Ln = p;
      }
    }
  }
  var Z_ = { getCacheForType: function(t) {
    var e = qn(wn), o = e.data.get(t);
    return o === void 0 && (o = t(), e.data.set(t, o)), o;
  } }, V_ = typeof WeakMap == "function" ? WeakMap : Map, Be = 0, We = null, ge = null, we = 0, De = 0, Pi = null, oa = false, As = false, oh = false, yr = 0, hn = 0, ra = 0, Va = 0, rh = 0, Ji = 0, Rs = 0, Hl = null, bi = null, ah = false, sh = 0, Rc = 1 / 0, kc = null, aa = null, jn = 0, sa = null, ks = null, Ls = 0, lh = 0, uh = null, hg = null, Ul = 0, ch = null;
  function Bi() {
    if ((Be & 2) !== 0 && we !== 0) return we & -we;
    if (B.T !== null) {
      var t = _s;
      return t !== 0 ? t : vh();
    }
    return Zi();
  }
  function pg() {
    Ji === 0 && (Ji = (we & 536870912) === 0 || Xt ? lo() : 536870912);
    var t = Qi.current;
    return t !== null && (t.flags |= 32), Ji;
  }
  function Di(t, e, o) {
    (t === We && (De === 2 || De === 9) || t.cancelPendingCommit !== null) && (zs(t, 0), la(t, we, Ji, false)), Tn(t, o), ((Be & 2) === 0 || t !== We) && (t === We && ((Be & 2) === 0 && (Va |= o), hn === 4 && la(t, we, Ji, false)), No(t));
  }
  function mg(t, e, o) {
    if ((Be & 6) !== 0) throw Error(u(327));
    var l = !o && (e & 124) === 0 && (e & t.expiredLanes) === 0 || re(t, e), d = l ? Y_(t, e) : hh(t, e, true), p = l;
    do {
      if (d === 0) {
        As && !l && la(t, e, 0, false);
        break;
      } else {
        if (o = t.current.alternate, p && !G_(o)) {
          d = hh(t, e, false), p = false;
          continue;
        }
        if (d === 2) {
          if (p = e, t.errorRecoveryDisabledLanes & p) var x = 0;
          else x = t.pendingLanes & -536870913, x = x !== 0 ? x : x & 536870912 ? 536870912 : 0;
          if (x !== 0) {
            e = x;
            t: {
              var T = t;
              d = Hl;
              var H = T.current.memoizedState.isDehydrated;
              if (H && (zs(T, x).flags |= 256), x = hh(T, x, false), x !== 2) {
                if (oh && !H) {
                  T.errorRecoveryDisabledLanes |= p, Va |= p, d = 4;
                  break t;
                }
                p = bi, bi = d, p !== null && (bi === null ? bi = p : bi.push.apply(bi, p));
              }
              d = x;
            }
            if (p = false, d !== 2) continue;
          }
        }
        if (d === 1) {
          zs(t, 0), la(t, e, 0, true);
          break;
        }
        t: {
          switch (l = t, p = d, p) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              la(l, e, Ji, !oa);
              break t;
            case 2:
              bi = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((e & 62914560) === e && (d = sh + 300 - ue(), 10 < d)) {
            if (la(l, e, Ji, !oa), ne(l, 0, true) !== 0) break t;
            l.timeoutHandle = Zg(gg.bind(null, l, o, bi, kc, ah, e, Ji, Va, Rs, oa, p, 2, -0, 0), d);
            break t;
          }
          gg(l, o, bi, kc, ah, e, Ji, Va, Rs, oa, p, 0, -0, 0);
        }
      }
      break;
    } while (true);
    No(t);
  }
  function gg(t, e, o, l, d, p, x, T, H, Q, vt, xt, nt, at) {
    if (t.timeoutHandle = -1, xt = e.subtreeFlags, (xt & 8192 || (xt & 16785408) === 16785408) && (Kl = { stylesheets: null, count: 0, unsuspend: M2 }, ug(e), xt = A2(), xt !== null)) {
      t.cancelPendingCommit = xt(wg.bind(null, t, e, p, o, l, d, x, T, H, vt, 1, nt, at)), la(t, p, x, !Q);
      return;
    }
    wg(t, e, p, o, l, d, x, T, H);
  }
  function G_(t) {
    for (var e = t; ; ) {
      var o = e.tag;
      if ((o === 0 || o === 11 || o === 15) && e.flags & 16384 && (o = e.updateQueue, o !== null && (o = o.stores, o !== null))) for (var l = 0; l < o.length; l++) {
        var d = o[l], p = d.getSnapshot;
        d = d.value;
        try {
          if (!oi(p(), d)) return false;
        } catch {
          return false;
        }
      }
      if (o = e.child, e.subtreeFlags & 16384 && o !== null) o.return = e, e = o;
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
  function la(t, e, o, l) {
    e &= ~rh, e &= ~Va, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var d = e; 0 < d; ) {
      var p = 31 - he(d), x = 1 << p;
      l[p] = -1, d &= ~x;
    }
    o !== 0 && ui(t, o, e);
  }
  function Lc() {
    return (Be & 6) === 0 ? (Fl(0), false) : true;
  }
  function fh() {
    if (ge !== null) {
      if (De === 0) var t = ge.return;
      else t = ge, go = Wi = null, Od(t), Ts = null, zl = 0, t = ge;
      for (; t !== null; ) K0(t.alternate, t), t = t.return;
      ge = null;
    }
  }
  function zs(t, e) {
    var o = t.timeoutHandle;
    o !== -1 && (t.timeoutHandle = -1, c2(o)), o = t.cancelPendingCommit, o !== null && (t.cancelPendingCommit = null, o()), fh(), We = t, ge = o = Xi(t.current, null), we = e, De = 0, Pi = null, oa = false, As = re(t, e), oh = false, Rs = Ji = rh = Va = ra = hn = 0, bi = Hl = null, ah = false, (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0) for (t = t.entanglements, l &= e; 0 < l; ) {
      var d = 31 - he(l), p = 1 << d;
      e |= t[d], l &= ~p;
    }
    return yr = e, za(), o;
  }
  function vg(t, e) {
    fe = null, B.H = _c, e === Cl || e === uc ? (e = Pm(), De = 3) : e === km ? (e = Pm(), De = 4) : De = e === B0 ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Pi = e, ge === null && (hn = 1, Cc(t, ai(e, t.current)));
  }
  function yg() {
    var t = B.H;
    return B.H = _c, t === null ? _c : t;
  }
  function _g() {
    var t = B.A;
    return B.A = Z_, t;
  }
  function dh() {
    hn = 4, oa || (we & 4194048) !== we && Qi.current !== null || (As = true), (ra & 134217727) === 0 && (Va & 134217727) === 0 || We === null || la(We, we, Ji, false);
  }
  function hh(t, e, o) {
    var l = Be;
    Be |= 2;
    var d = yg(), p = _g();
    (We !== t || we !== e) && (kc = null, zs(t, e)), e = false;
    var x = hn;
    t: do
      try {
        if (De !== 0 && ge !== null) {
          var T = ge, H = Pi;
          switch (De) {
            case 8:
              fh(), x = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Qi.current === null && (e = true);
              var Q = De;
              if (De = 0, Pi = null, Ps(t, T, H, Q), o && As) {
                x = 0;
                break t;
              }
              break;
            default:
              Q = De, De = 0, Pi = null, Ps(t, T, H, Q);
          }
        }
        q_(), x = hn;
        break;
      } catch (vt) {
        vg(t, vt);
      }
    while (true);
    return e && t.shellSuspendCounter++, go = Wi = null, Be = l, B.H = d, B.A = p, ge === null && (We = null, we = 0, za()), x;
  }
  function q_() {
    for (; ge !== null; ) bg(ge);
  }
  function Y_(t, e) {
    var o = Be;
    Be |= 2;
    var l = yg(), d = _g();
    We !== t || we !== e ? (kc = null, Rc = ue() + 500, zs(t, e)) : As = re(t, e);
    t: do
      try {
        if (De !== 0 && ge !== null) {
          e = ge;
          var p = Pi;
          e: switch (De) {
            case 1:
              De = 0, Pi = null, Ps(t, e, p, 1);
              break;
            case 2:
            case 9:
              if (Lm(p)) {
                De = 0, Pi = null, xg(e);
                break;
              }
              e = function() {
                De !== 2 && De !== 9 || We !== t || (De = 7), No(t);
              }, p.then(e, e);
              break t;
            case 3:
              De = 7;
              break t;
            case 4:
              De = 5;
              break t;
            case 7:
              Lm(p) ? (De = 0, Pi = null, xg(e)) : (De = 0, Pi = null, Ps(t, e, p, 7));
              break;
            case 5:
              var x = null;
              switch (ge.tag) {
                case 26:
                  x = ge.memoizedState;
                case 5:
                case 27:
                  var T = ge;
                  if (!x || nv(x)) {
                    De = 0, Pi = null;
                    var H = T.sibling;
                    if (H !== null) ge = H;
                    else {
                      var Q = T.return;
                      Q !== null ? (ge = Q, zc(Q)) : ge = null;
                    }
                    break e;
                  }
              }
              De = 0, Pi = null, Ps(t, e, p, 5);
              break;
            case 6:
              De = 0, Pi = null, Ps(t, e, p, 6);
              break;
            case 8:
              fh(), hn = 6;
              break t;
            default:
              throw Error(u(462));
          }
        }
        K_();
        break;
      } catch (vt) {
        vg(t, vt);
      }
    while (true);
    return go = Wi = null, B.H = l, B.A = d, Be = o, ge !== null ? 0 : (We = null, we = 0, za(), hn);
  }
  function K_() {
    for (; ge !== null && !de(); ) bg(ge);
  }
  function bg(t) {
    var e = q0(t.alternate, t, yr);
    t.memoizedProps = t.pendingProps, e === null ? zc(t) : ge = e;
  }
  function xg(t) {
    var e = t, o = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = H0(o, e, e.pendingProps, e.type, void 0, we);
        break;
      case 11:
        e = H0(o, e, e.pendingProps, e.type.render, e.ref, we);
        break;
      case 5:
        Od(e);
      default:
        K0(o, e), e = ge = bl(e, yr), e = q0(o, e, yr);
    }
    t.memoizedProps = t.pendingProps, e === null ? zc(t) : ge = e;
  }
  function Ps(t, e, o, l) {
    go = Wi = null, Od(e), Ts = null, zl = 0;
    var d = e.return;
    try {
      if ($_(t, d, e, o, we)) {
        hn = 1, Cc(t, ai(o, t.current)), ge = null;
        return;
      }
    } catch (p) {
      if (d !== null) throw ge = d, p;
      hn = 1, Cc(t, ai(o, t.current)), ge = null;
      return;
    }
    e.flags & 32768 ? (Xt || l === 1 ? t = true : As || (we & 536870912) !== 0 ? t = false : (oa = t = true, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Qi.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Sg(e, t)) : zc(e);
  }
  function zc(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Sg(e, oa);
        return;
      }
      t = e.return;
      var o = j_(e.alternate, e, yr);
      if (o !== null) {
        ge = o;
        return;
      }
      if (e = e.sibling, e !== null) {
        ge = e;
        return;
      }
      ge = e = t;
    } while (e !== null);
    hn === 0 && (hn = 5);
  }
  function Sg(t, e) {
    do {
      var o = H_(t.alternate, t);
      if (o !== null) {
        o.flags &= 32767, ge = o;
        return;
      }
      if (o = t.return, o !== null && (o.flags |= 32768, o.subtreeFlags = 0, o.deletions = null), !e && (t = t.sibling, t !== null)) {
        ge = t;
        return;
      }
      ge = t = o;
    } while (t !== null);
    hn = 6, ge = null;
  }
  function wg(t, e, o, l, d, p, x, T, H) {
    t.cancelPendingCommit = null;
    do
      Pc();
    while (jn !== 0);
    if ((Be & 6) !== 0) throw Error(u(327));
    if (e !== null) {
      if (e === t.current) throw Error(u(177));
      if (p = e.lanes | e.childLanes, p |= ki, co(t, o, p, x, T, H), t === We && (ge = We = null, we = 0), ks = e, sa = t, Ls = o, lh = p, uh = d, hg = l, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, J_(Jt, function() {
        return Og(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
        l = B.T, B.T = null, d = tt.p, tt.p = 2, x = Be, Be |= 4;
        try {
          U_(t, e, o);
        } finally {
          Be = x, tt.p = d, B.T = l;
        }
      }
      jn = 1, Cg(), Tg(), Eg();
    }
  }
  function Cg() {
    if (jn === 1) {
      jn = 0;
      var t = sa, e = ks, o = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || o) {
        o = B.T, B.T = null;
        var l = tt.p;
        tt.p = 2;
        var d = Be;
        Be |= 4;
        try {
          ag(e, t);
          var p = Th, x = Ra(t.containerInfo), T = p.focusedElem, H = p.selectionRange;
          if (x !== T && T && T.ownerDocument && fs(T.ownerDocument.documentElement, T)) {
            if (H !== null && ka(T)) {
              var Q = H.start, vt = H.end;
              if (vt === void 0 && (vt = Q), "selectionStart" in T) T.selectionStart = Q, T.selectionEnd = Math.min(vt, T.value.length);
              else {
                var xt = T.ownerDocument || document, nt = xt && xt.defaultView || window;
                if (nt.getSelection) {
                  var at = nt.getSelection(), Kt = T.textContent.length, Ft = Math.min(H.start, Kt), He = H.end === void 0 ? Ft : Math.min(H.end, Kt);
                  !at.extend && Ft > He && (x = He, He = Ft, Ft = x);
                  var G = yl(T, Ft), Z = yl(T, He);
                  if (G && Z && (at.rangeCount !== 1 || at.anchorNode !== G.node || at.anchorOffset !== G.offset || at.focusNode !== Z.node || at.focusOffset !== Z.offset)) {
                    var X = xt.createRange();
                    X.setStart(G.node, G.offset), at.removeAllRanges(), Ft > He ? (at.addRange(X), at.extend(Z.node, Z.offset)) : (X.setEnd(Z.node, Z.offset), at.addRange(X));
                  }
                }
              }
            }
            for (xt = [], at = T; at = at.parentNode; ) at.nodeType === 1 && xt.push({ element: at, left: at.scrollLeft, top: at.scrollTop });
            for (typeof T.focus == "function" && T.focus(), T = 0; T < xt.length; T++) {
              var yt = xt[T];
              yt.element.scrollLeft = yt.left, yt.element.scrollTop = yt.top;
            }
          }
          Gc = !!Ch, Th = Ch = null;
        } finally {
          Be = d, tt.p = l, B.T = o;
        }
      }
      t.current = e, jn = 2;
    }
  }
  function Tg() {
    if (jn === 2) {
      jn = 0;
      var t = sa, e = ks, o = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || o) {
        o = B.T, B.T = null;
        var l = tt.p;
        tt.p = 2;
        var d = Be;
        Be |= 4;
        try {
          ng(t, e.alternate, e);
        } finally {
          Be = d, tt.p = l, B.T = o;
        }
      }
      jn = 3;
    }
  }
  function Eg() {
    if (jn === 4 || jn === 3) {
      jn = 0, ie();
      var t = sa, e = ks, o = Ls, l = hg;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? jn = 5 : (jn = 0, ks = sa = null, Mg(t, t.pendingLanes));
      var d = t.pendingLanes;
      if (d === 0 && (aa = null), Ko(o), e = e.stateNode, Vt && typeof Vt.onCommitFiberRoot == "function") try {
        Vt.onCommitFiberRoot(ce, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
      if (l !== null) {
        e = B.T, d = tt.p, tt.p = 2, B.T = null;
        try {
          for (var p = t.onRecoverableError, x = 0; x < l.length; x++) {
            var T = l[x];
            p(T.value, { componentStack: T.stack });
          }
        } finally {
          B.T = e, tt.p = d;
        }
      }
      (Ls & 3) !== 0 && Pc(), No(t), d = t.pendingLanes, (o & 4194090) !== 0 && (d & 42) !== 0 ? t === ch ? Ul++ : (Ul = 0, ch = t) : Ul = 0, Fl(0);
    }
  }
  function Mg(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Sl(e)));
  }
  function Pc(t) {
    return Cg(), Tg(), Eg(), Og();
  }
  function Og() {
    if (jn !== 5) return false;
    var t = sa, e = lh;
    lh = 0;
    var o = Ko(Ls), l = B.T, d = tt.p;
    try {
      tt.p = 32 > o ? 32 : o, B.T = null, o = uh, uh = null;
      var p = sa, x = Ls;
      if (jn = 0, ks = sa = null, Ls = 0, (Be & 6) !== 0) throw Error(u(331));
      var T = Be;
      if (Be |= 4, fg(p.current), lg(p, p.current, x, o), Be = T, Fl(0, false), Vt && typeof Vt.onPostCommitFiberRoot == "function") try {
        Vt.onPostCommitFiberRoot(ce, p);
      } catch {
      }
      return true;
    } finally {
      tt.p = d, B.T = l, Mg(t, e);
    }
  }
  function Ag(t, e, o) {
    e = ai(o, e), e = Ud(t.stateNode, e, 2), t = Wr(t, e, 2), t !== null && (Tn(t, 2), No(t));
  }
  function Fe(t, e, o) {
    if (t.tag === 3) Ag(t, t, o);
    else for (; e !== null; ) {
      if (e.tag === 3) {
        Ag(e, t, o);
        break;
      } else if (e.tag === 1) {
        var l = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (aa === null || !aa.has(l))) {
          t = ai(o, t), o = z0(2), l = Wr(e, o, 2), l !== null && (P0(o, l, e, t), Tn(l, 2), No(l));
          break;
        }
      }
      e = e.return;
    }
  }
  function ph(t, e, o) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new V_();
      var d = /* @__PURE__ */ new Set();
      l.set(e, d);
    } else d = l.get(e), d === void 0 && (d = /* @__PURE__ */ new Set(), l.set(e, d));
    d.has(o) || (oh = true, d.add(o), t = X_.bind(null, t, e, o), e.then(t, t));
  }
  function X_(t, e, o) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & o, t.warmLanes &= ~o, We === t && (we & o) === o && (hn === 4 || hn === 3 && (we & 62914560) === we && 300 > ue() - sh ? (Be & 2) === 0 && zs(t, 0) : rh |= o, Rs === we && (Rs = 0)), No(t);
  }
  function Rg(t, e) {
    e === 0 && (e = uo()), t = Vr(t, e), t !== null && (Tn(t, e), No(t));
  }
  function W_(t) {
    var e = t.memoizedState, o = 0;
    e !== null && (o = e.retryLane), Rg(t, o);
  }
  function Q_(t, e) {
    var o = 0;
    switch (t.tag) {
      case 13:
        var l = t.stateNode, d = t.memoizedState;
        d !== null && (o = d.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    l !== null && l.delete(e), Rg(t, o);
  }
  function J_(t, e) {
    return te(t, e);
  }
  var Bc = null, Bs = null, mh = false, Dc = false, gh = false, Ga = 0;
  function No(t) {
    t !== Bs && t.next === null && (Bs === null ? Bc = Bs = t : Bs = Bs.next = t), Dc = true, mh || (mh = true, e2());
  }
  function Fl(t, e) {
    if (!gh && Dc) {
      gh = true;
      do
        for (var o = false, l = Bc; l !== null; ) {
          if (t !== 0) {
            var d = l.pendingLanes;
            if (d === 0) var p = 0;
            else {
              var x = l.suspendedLanes, T = l.pingedLanes;
              p = (1 << 31 - he(42 | t) + 1) - 1, p &= d & ~(x & ~T), p = p & 201326741 ? p & 201326741 | 1 : p ? p | 2 : 0;
            }
            p !== 0 && (o = true, Pg(l, p));
          } else p = we, p = ne(l, l === We ? p : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (p & 3) === 0 || re(l, p) || (o = true, Pg(l, p));
          l = l.next;
        }
      while (o);
      gh = false;
    }
  }
  function t2() {
    kg();
  }
  function kg() {
    Dc = mh = false;
    var t = 0;
    Ga !== 0 && (u2() && (t = Ga), Ga = 0);
    for (var e = ue(), o = null, l = Bc; l !== null; ) {
      var d = l.next, p = Lg(l, e);
      p === 0 ? (l.next = null, o === null ? Bc = d : o.next = d, d === null && (Bs = o)) : (o = l, (t !== 0 || (p & 3) !== 0) && (Dc = true)), l = d;
    }
    Fl(t);
  }
  function Lg(t, e) {
    for (var o = t.suspendedLanes, l = t.pingedLanes, d = t.expirationTimes, p = t.pendingLanes & -62914561; 0 < p; ) {
      var x = 31 - he(p), T = 1 << x, H = d[x];
      H === -1 ? ((T & o) === 0 || (T & l) !== 0) && (d[x] = Wn(T, e)) : H <= e && (t.expiredLanes |= T), p &= ~T;
    }
    if (e = We, o = we, o = ne(t, t === e ? o : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l = t.callbackNode, o === 0 || t === e && (De === 2 || De === 9) || t.cancelPendingCommit !== null) return l !== null && l !== null && Zt(l), t.callbackNode = null, t.callbackPriority = 0;
    if ((o & 3) === 0 || re(t, o)) {
      if (e = o & -o, e === t.callbackPriority) return e;
      switch (l !== null && Zt(l), Ko(o)) {
        case 2:
        case 8:
          o = Bt;
          break;
        case 32:
          o = Jt;
          break;
        case 268435456:
          o = tn;
          break;
        default:
          o = Jt;
      }
      return l = zg.bind(null, t), o = te(o, l), t.callbackPriority = e, t.callbackNode = o, e;
    }
    return l !== null && l !== null && Zt(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function zg(t, e) {
    if (jn !== 0 && jn !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var o = t.callbackNode;
    if (Pc() && t.callbackNode !== o) return null;
    var l = we;
    return l = ne(t, t === We ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l === 0 ? null : (mg(t, l, e), Lg(t, ue()), t.callbackNode != null && t.callbackNode === o ? zg.bind(null, t) : null);
  }
  function Pg(t, e) {
    if (Pc()) return null;
    mg(t, e, true);
  }
  function e2() {
    f2(function() {
      (Be & 6) !== 0 ? te(_e, t2) : kg();
    });
  }
  function vh() {
    return Ga === 0 && (Ga = lo()), Ga;
  }
  function Bg(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Lr("" + t);
  }
  function Dg(t, e) {
    var o = e.ownerDocument.createElement("input");
    return o.name = e.name, o.value = e.value, t.id && o.setAttribute("form", t.id), e.parentNode.insertBefore(o, e), t = new FormData(t), o.parentNode.removeChild(o), t;
  }
  function n22(t, e, o, l, d) {
    if (e === "submit" && o && o.stateNode === d) {
      var p = Bg((d[an] || null).action), x = l.submitter;
      x && (e = (e = x[an] || null) ? Bg(e.formAction) : x.getAttribute("formAction"), e !== null && (p = e, x = null));
      var T = new Ta("action", "action", null, l, d);
      t.push({ event: T, listeners: [{ instance: null, listener: function() {
        if (l.defaultPrevented) {
          if (Ga !== 0) {
            var H = x ? Dg(d, x) : new FormData(d);
            Nd(o, { pending: true, data: H, method: d.method, action: p }, null, H);
          }
        } else typeof p == "function" && (T.preventDefault(), H = x ? Dg(d, x) : new FormData(d), Nd(o, { pending: true, data: H, method: d.method, action: p }, p, H));
      }, currentTarget: d }] });
    }
  }
  for (var yh = 0; yh < sr.length; yh++) {
    var _h = sr[yh], i2 = _h.toLowerCase(), o2 = _h[0].toUpperCase() + _h.slice(1);
    Ri(i2, "on" + o2);
  }
  Ri(tc, "onAnimationEnd"), Ri(Ai, "onAnimationIteration"), Ri(La, "onAnimationStart"), Ri("dblclick", "onDoubleClick"), Ri("focusin", "onFocus"), Ri("focusout", "onBlur"), Ri(dd, "onTransitionRun"), Ri(ms, "onTransitionStart"), Ri(hd, "onTransitionCancel"), Ri(_l, "onTransitionEnd"), It("onMouseEnter", ["mouseout", "mouseover"]), It("onMouseLeave", ["mouseout", "mouseover"]), It("onPointerEnter", ["pointerout", "pointerover"]), It("onPointerLeave", ["pointerout", "pointerover"]), Tt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Tt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Tt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Tt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Tt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Zl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), r2 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zl));
  function Ng(t, e) {
    e = (e & 4) !== 0;
    for (var o = 0; o < t.length; o++) {
      var l = t[o], d = l.event;
      l = l.listeners;
      t: {
        var p = void 0;
        if (e) for (var x = l.length - 1; 0 <= x; x--) {
          var T = l[x], H = T.instance, Q = T.currentTarget;
          if (T = T.listener, H !== p && d.isPropagationStopped()) break t;
          p = T, d.currentTarget = Q;
          try {
            p(d);
          } catch (vt) {
            wc(vt);
          }
          d.currentTarget = null, p = H;
        }
        else for (x = 0; x < l.length; x++) {
          if (T = l[x], H = T.instance, Q = T.currentTarget, T = T.listener, H !== p && d.isPropagationStopped()) break t;
          p = T, d.currentTarget = Q;
          try {
            p(d);
          } catch (vt) {
            wc(vt);
          }
          d.currentTarget = null, p = H;
        }
      }
    }
  }
  function ve(t, e) {
    var o = e[En];
    o === void 0 && (o = e[En] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    o.has(l) || ($g(e, t, 2, false), o.add(l));
  }
  function bh(t, e, o) {
    var l = 0;
    e && (l |= 4), $g(o, t, l, e);
  }
  var Nc = "_reactListening" + Math.random().toString(36).slice(2);
  function xh(t) {
    if (!t[Nc]) {
      t[Nc] = true, pt.forEach(function(o) {
        o !== "selectionchange" && (r2.has(o) || bh(o, false, t), bh(o, true, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Nc] || (e[Nc] = true, bh("selectionchange", false, e));
    }
  }
  function $g(t, e, o, l) {
    switch (lv(e)) {
      case 2:
        var d = L2;
        break;
      case 8:
        d = z2;
        break;
      default:
        d = Bh;
    }
    o = d.bind(null, e, o, t), d = void 0, !Ca || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (d = true), l ? d !== void 0 ? t.addEventListener(e, o, { capture: true, passive: d }) : t.addEventListener(e, o, true) : d !== void 0 ? t.addEventListener(e, o, { passive: d }) : t.addEventListener(e, o, false);
  }
  function Sh(t, e, o, l, d) {
    var p = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null) t: for (; ; ) {
      if (l === null) return;
      var x = l.tag;
      if (x === 3 || x === 4) {
        var T = l.stateNode.containerInfo;
        if (T === d) break;
        if (x === 4) for (x = l.return; x !== null; ) {
          var H = x.tag;
          if ((H === 3 || H === 4) && x.stateNode.containerInfo === d) return;
          x = x.return;
        }
        for (; T !== null; ) {
          if (x = Pe(T), x === null) return;
          if (H = x.tag, H === 5 || H === 6 || H === 26 || H === 27) {
            l = p = x;
            continue t;
          }
          T = T.parentNode;
        }
      }
      l = l.return;
    }
    Ti(function() {
      var Q = p, vt = zr(o), xt = [];
      t: {
        var nt = ec.get(t);
        if (nt !== void 0) {
          var at = Ta, Kt = t;
          switch (t) {
            case "keypress":
              if (dn(o) === 0) break t;
            case "keydown":
            case "keyup":
              at = od;
              break;
            case "focusin":
              Kt = "focus", at = ul;
              break;
            case "focusout":
              Kt = "blur", at = ul;
              break;
            case "beforeblur":
            case "afterblur":
              at = ul;
              break;
            case "click":
              if (o.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              at = Dr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              at = Jf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              at = ad;
              break;
            case tc:
            case Ai:
            case La:
              at = td;
              break;
            case _l:
              at = sd;
              break;
            case "scroll":
            case "scrollend":
              at = Qf;
              break;
            case "wheel":
              at = Vu;
              break;
            case "copy":
            case "cut":
            case "paste":
              at = cl;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              at = dl;
              break;
            case "toggle":
            case "beforetoggle":
              at = ir;
          }
          var Ft = (e & 4) !== 0, He = !Ft && (t === "scroll" || t === "scrollend"), G = Ft ? nt !== null ? nt + "Capture" : null : nt;
          Ft = [];
          for (var Z = Q, X; Z !== null; ) {
            var yt = Z;
            if (X = yt.stateNode, yt = yt.tag, yt !== 5 && yt !== 26 && yt !== 27 || X === null || G === null || (yt = Ce(Z, G), yt != null && Ft.push(Vl(Z, yt, X))), He) break;
            Z = Z.return;
          }
          0 < Ft.length && (nt = new at(nt, Kt, null, o, vt), xt.push({ event: nt, listeners: Ft }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (nt = t === "mouseover" || t === "pointerover", at = t === "mouseout" || t === "pointerout", nt && o !== wa && (Kt = o.relatedTarget || o.fromElement) && (Pe(Kt) || Kt[hi])) break t;
          if ((at || nt) && (nt = vt.window === vt ? vt : (nt = vt.ownerDocument) ? nt.defaultView || nt.parentWindow : window, at ? (Kt = o.relatedTarget || o.toElement, at = Q, Kt = Kt ? Pe(Kt) : null, Kt !== null && (He = h(Kt), Ft = Kt.tag, Kt !== He || Ft !== 5 && Ft !== 27 && Ft !== 6) && (Kt = null)) : (at = null, Kt = Q), at !== Kt)) {
            if (Ft = Dr, yt = "onMouseLeave", G = "onMouseEnter", Z = "mouse", (t === "pointerout" || t === "pointerover") && (Ft = dl, yt = "onPointerLeave", G = "onPointerEnter", Z = "pointer"), He = at == null ? nt : Zn(at), X = Kt == null ? nt : Zn(Kt), nt = new Ft(yt, Z + "leave", at, o, vt), nt.target = He, nt.relatedTarget = X, yt = null, Pe(vt) === Q && (Ft = new Ft(G, Z + "enter", Kt, o, vt), Ft.target = X, Ft.relatedTarget = He, yt = Ft), He = yt, at && Kt) e: {
              for (Ft = at, G = Kt, Z = 0, X = Ft; X; X = Ds(X)) Z++;
              for (X = 0, yt = G; yt; yt = Ds(yt)) X++;
              for (; 0 < Z - X; ) Ft = Ds(Ft), Z--;
              for (; 0 < X - Z; ) G = Ds(G), X--;
              for (; Z--; ) {
                if (Ft === G || G !== null && Ft === G.alternate) break e;
                Ft = Ds(Ft), G = Ds(G);
              }
              Ft = null;
            }
            else Ft = null;
            at !== null && Ig(xt, nt, at, Ft, false), Kt !== null && He !== null && Ig(xt, He, Kt, Ft, true);
          }
        }
        t: {
          if (nt = Q ? Zn(Q) : window, at = nt.nodeName && nt.nodeName.toLowerCase(), at === "select" || at === "input" && nt.type === "file") var zt = Ir;
          else if (rr(nt)) if (ml) zt = fd;
          else {
            zt = cd;
            var me = vl;
          }
          else at = nt.nodeName, !at || at.toLowerCase() !== "input" || nt.type !== "checkbox" && nt.type !== "radio" ? Q && Sa(Q.elementType) && (zt = Ir) : zt = mo;
          if (zt && (zt = zt(t, Q))) {
            Xu(xt, zt, o, vt);
            break t;
          }
          me && me(t, nt, Q), t === "focusout" && Q && nt.type === "number" && Q.memoizedProps.value != null && Rr(nt, "number", nt.value);
        }
        switch (me = Q ? Zn(Q) : window, t) {
          case "focusin":
            (rr(me) || me.contentEditable === "true") && (Oi = me, Ur = Q, ar = null);
            break;
          case "focusout":
            ar = Ur = Oi = null;
            break;
          case "mousedown":
            hs = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            hs = false, Qu(xt, o, vt);
            break;
          case "selectionchange":
            if (ds) break;
          case "keydown":
          case "keyup":
            Qu(xt, o, vt);
        }
        var jt;
        if (or) t: {
          switch (t) {
            case "compositionstart":
              var Gt = "onCompositionStart";
              break t;
            case "compositionend":
              Gt = "onCompositionEnd";
              break t;
            case "compositionupdate":
              Gt = "onCompositionUpdate";
              break t;
          }
          Gt = void 0;
        }
        else Nr ? us(t, o) && (Gt = "onCompositionEnd") : t === "keydown" && o.keyCode === 229 && (Gt = "onCompositionStart");
        Gt && (pl && o.locale !== "ko" && (Nr || Gt !== "onCompositionStart" ? Gt === "onCompositionEnd" && Nr && (jt = Br()) : (qi = vt, ho = "value" in qi ? qi.value : qi.textContent, Nr = true)), me = $c(Q, Gt), 0 < me.length && (Gt = new Ei(Gt, t, null, o, vt), xt.push({ event: Gt, listeners: me }), jt ? Gt.data = jt : (jt = Yu(o), jt !== null && (Gt.data = jt)))), (jt = Gu ? Ku(t, o) : ud(t, o)) && (Gt = $c(Q, "onBeforeInput"), 0 < Gt.length && (me = new Ei("onBeforeInput", "beforeinput", null, o, vt), xt.push({ event: me, listeners: Gt }), me.data = jt)), n22(xt, t, Q, o, vt);
      }
      Ng(xt, e);
    });
  }
  function Vl(t, e, o) {
    return { instance: t, listener: e, currentTarget: o };
  }
  function $c(t, e) {
    for (var o = e + "Capture", l = []; t !== null; ) {
      var d = t, p = d.stateNode;
      if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || p === null || (d = Ce(t, o), d != null && l.unshift(Vl(t, d, p)), d = Ce(t, e), d != null && l.push(Vl(t, d, p))), t.tag === 3) return l;
      t = t.return;
    }
    return [];
  }
  function Ds(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Ig(t, e, o, l, d) {
    for (var p = e._reactName, x = []; o !== null && o !== l; ) {
      var T = o, H = T.alternate, Q = T.stateNode;
      if (T = T.tag, H !== null && H === l) break;
      T !== 5 && T !== 26 && T !== 27 || Q === null || (H = Q, d ? (Q = Ce(o, p), Q != null && x.unshift(Vl(o, Q, H))) : d || (Q = Ce(o, p), Q != null && x.push(Vl(o, Q, H)))), o = o.return;
    }
    x.length !== 0 && t.push({ event: e, listeners: x });
  }
  var a2 = /\r\n?/g, s2 = /\u0000|\uFFFD/g;
  function jg(t) {
    return (typeof t == "string" ? t : "" + t).replace(a2, `
`).replace(s2, "");
  }
  function Hg(t, e) {
    return e = jg(e), jg(t) === e;
  }
  function Ic() {
  }
  function je(t, e, o, l, d, p) {
    switch (o) {
      case "children":
        typeof l == "string" ? e === "body" || e === "textarea" && l === "" || Vi(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && Vi(t, "" + l);
        break;
      case "className":
        Wo(t, "class", l);
        break;
      case "tabIndex":
        Wo(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Wo(t, o, l);
        break;
      case "style":
        kr(t, l, p);
        break;
      case "data":
        if (e !== "object") {
          Wo(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || o !== "href")) {
          t.removeAttribute(o);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(o);
          break;
        }
        l = Lr("" + l), t.setAttribute(o, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(o, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof p == "function" && (o === "formAction" ? (e !== "input" && je(t, e, "name", d.name, d, null), je(t, e, "formEncType", d.formEncType, d, null), je(t, e, "formMethod", d.formMethod, d, null), je(t, e, "formTarget", d.formTarget, d, null)) : (je(t, e, "encType", d.encType, d, null), je(t, e, "method", d.method, d, null), je(t, e, "target", d.target, d, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(o);
          break;
        }
        l = Lr("" + l), t.setAttribute(o, l);
        break;
      case "onClick":
        l != null && (t.onclick = Ic);
        break;
      case "onScroll":
        l != null && ve("scroll", t);
        break;
      case "onScrollEnd":
        l != null && ve("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(u(61));
          if (o = l.__html, o != null) {
            if (d.children != null) throw Error(u(60));
            t.innerHTML = o;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
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
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        o = Lr("" + l), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(o, "" + l) : t.removeAttribute(o);
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
        l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(o, "") : t.removeAttribute(o);
        break;
      case "capture":
      case "download":
        l === true ? t.setAttribute(o, "") : l !== false && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(o, l) : t.removeAttribute(o);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(o, l) : t.removeAttribute(o);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(o) : t.setAttribute(o, l);
        break;
      case "popover":
        ve("beforetoggle", t), ve("toggle", t), fo(t, "popover", l);
        break;
      case "xlinkActuate":
        mi(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        mi(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        mi(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        mi(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        mi(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        mi(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        mi(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        mi(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        mi(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        fo(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") && (o = al.get(o) || o, fo(t, o, l));
    }
  }
  function wh(t, e, o, l, d, p) {
    switch (o) {
      case "style":
        kr(t, l, p);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(u(61));
          if (o = l.__html, o != null) {
            if (d.children != null) throw Error(u(60));
            t.innerHTML = o;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Vi(t, l) : (typeof l == "number" || typeof l == "bigint") && Vi(t, "" + l);
        break;
      case "onScroll":
        l != null && ve("scroll", t);
        break;
      case "onScrollEnd":
        l != null && ve("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = Ic);
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
        if (!ht.hasOwnProperty(o)) t: {
          if (o[0] === "o" && o[1] === "n" && (d = o.endsWith("Capture"), e = o.slice(2, d ? o.length - 7 : void 0), p = t[an] || null, p = p != null ? p[o] : null, typeof p == "function" && t.removeEventListener(e, p, d), typeof l == "function")) {
            typeof p != "function" && p !== null && (o in t ? t[o] = null : t.hasAttribute(o) && t.removeAttribute(o)), t.addEventListener(e, l, d);
            break t;
          }
          o in t ? t[o] = l : l === true ? t.setAttribute(o, "") : fo(t, o, l);
        }
    }
  }
  function Hn(t, e, o) {
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
        ve("error", t), ve("load", t);
        var l = false, d = false, p;
        for (p in o) if (o.hasOwnProperty(p)) {
          var x = o[p];
          if (x != null) switch (p) {
            case "src":
              l = true;
              break;
            case "srcSet":
              d = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(u(137, e));
            default:
              je(t, e, p, x, o, null);
          }
        }
        d && je(t, e, "srcSet", o.srcSet, o, null), l && je(t, e, "src", o.src, o, null);
        return;
      case "input":
        ve("invalid", t);
        var T = p = x = d = null, H = null, Q = null;
        for (l in o) if (o.hasOwnProperty(l)) {
          var vt = o[l];
          if (vt != null) switch (l) {
            case "name":
              d = vt;
              break;
            case "type":
              x = vt;
              break;
            case "checked":
              H = vt;
              break;
            case "defaultChecked":
              Q = vt;
              break;
            case "value":
              p = vt;
              break;
            case "defaultValue":
              T = vt;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (vt != null) throw Error(u(137, e));
              break;
            default:
              je(t, e, l, vt, o, null);
          }
        }
        Nu(t, p, T, H, Q, x, d, false), Ar(t);
        return;
      case "select":
        ve("invalid", t), l = x = p = null;
        for (d in o) if (o.hasOwnProperty(d) && (T = o[d], T != null)) switch (d) {
          case "value":
            p = T;
            break;
          case "defaultValue":
            x = T;
            break;
          case "multiple":
            l = T;
          default:
            je(t, e, d, T, o, null);
        }
        e = p, o = x, t.multiple = !!l, e != null ? gi(t, !!l, e, false) : o != null && gi(t, !!l, o, true);
        return;
      case "textarea":
        ve("invalid", t), p = d = l = null;
        for (x in o) if (o.hasOwnProperty(x) && (T = o[x], T != null)) switch (x) {
          case "value":
            l = T;
            break;
          case "defaultValue":
            d = T;
            break;
          case "children":
            p = T;
            break;
          case "dangerouslySetInnerHTML":
            if (T != null) throw Error(u(91));
            break;
          default:
            je(t, e, x, T, o, null);
        }
        Mo(t, l, d, p), Ar(t);
        return;
      case "option":
        for (H in o) if (o.hasOwnProperty(H) && (l = o[H], l != null)) switch (H) {
          case "selected":
            t.selected = l && typeof l != "function" && typeof l != "symbol";
            break;
          default:
            je(t, e, H, l, o, null);
        }
        return;
      case "dialog":
        ve("beforetoggle", t), ve("toggle", t), ve("cancel", t), ve("close", t);
        break;
      case "iframe":
      case "object":
        ve("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Zl.length; l++) ve(Zl[l], t);
        break;
      case "image":
        ve("error", t), ve("load", t);
        break;
      case "details":
        ve("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ve("error", t), ve("load", t);
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
        for (Q in o) if (o.hasOwnProperty(Q) && (l = o[Q], l != null)) switch (Q) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(137, e));
          default:
            je(t, e, Q, l, o, null);
        }
        return;
      default:
        if (Sa(e)) {
          for (vt in o) o.hasOwnProperty(vt) && (l = o[vt], l !== void 0 && wh(t, e, vt, l, o, void 0));
          return;
        }
    }
    for (T in o) o.hasOwnProperty(T) && (l = o[T], l != null && je(t, e, T, l, o, null));
  }
  function l2(t, e, o, l) {
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
        var d = null, p = null, x = null, T = null, H = null, Q = null, vt = null;
        for (at in o) {
          var xt = o[at];
          if (o.hasOwnProperty(at) && xt != null) switch (at) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              H = xt;
            default:
              l.hasOwnProperty(at) || je(t, e, at, null, l, xt);
          }
        }
        for (var nt in l) {
          var at = l[nt];
          if (xt = o[nt], l.hasOwnProperty(nt) && (at != null || xt != null)) switch (nt) {
            case "type":
              p = at;
              break;
            case "name":
              d = at;
              break;
            case "checked":
              Q = at;
              break;
            case "defaultChecked":
              vt = at;
              break;
            case "value":
              x = at;
              break;
            case "defaultValue":
              T = at;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (at != null) throw Error(u(137, e));
              break;
            default:
              at !== xt && je(t, e, nt, at, l, xt);
          }
        }
        Vn(t, x, T, H, Q, vt, p, d);
        return;
      case "select":
        at = x = T = nt = null;
        for (p in o) if (H = o[p], o.hasOwnProperty(p) && H != null) switch (p) {
          case "value":
            break;
          case "multiple":
            at = H;
          default:
            l.hasOwnProperty(p) || je(t, e, p, null, l, H);
        }
        for (d in l) if (p = l[d], H = o[d], l.hasOwnProperty(d) && (p != null || H != null)) switch (d) {
          case "value":
            nt = p;
            break;
          case "defaultValue":
            T = p;
            break;
          case "multiple":
            x = p;
          default:
            p !== H && je(t, e, d, p, l, H);
        }
        e = T, o = x, l = at, nt != null ? gi(t, !!o, nt, false) : !!l != !!o && (e != null ? gi(t, !!o, e, true) : gi(t, !!o, o ? [] : "", false));
        return;
      case "textarea":
        at = nt = null;
        for (T in o) if (d = o[T], o.hasOwnProperty(T) && d != null && !l.hasOwnProperty(T)) switch (T) {
          case "value":
            break;
          case "children":
            break;
          default:
            je(t, e, T, null, l, d);
        }
        for (x in l) if (d = l[x], p = o[x], l.hasOwnProperty(x) && (d != null || p != null)) switch (x) {
          case "value":
            nt = d;
            break;
          case "defaultValue":
            at = d;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (d != null) throw Error(u(91));
            break;
          default:
            d !== p && je(t, e, x, d, l, p);
        }
        sn(t, nt, at);
        return;
      case "option":
        for (var Kt in o) if (nt = o[Kt], o.hasOwnProperty(Kt) && nt != null && !l.hasOwnProperty(Kt)) switch (Kt) {
          case "selected":
            t.selected = false;
            break;
          default:
            je(t, e, Kt, null, l, nt);
        }
        for (H in l) if (nt = l[H], at = o[H], l.hasOwnProperty(H) && nt !== at && (nt != null || at != null)) switch (H) {
          case "selected":
            t.selected = nt && typeof nt != "function" && typeof nt != "symbol";
            break;
          default:
            je(t, e, H, nt, l, at);
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
        for (var Ft in o) nt = o[Ft], o.hasOwnProperty(Ft) && nt != null && !l.hasOwnProperty(Ft) && je(t, e, Ft, null, l, nt);
        for (Q in l) if (nt = l[Q], at = o[Q], l.hasOwnProperty(Q) && nt !== at && (nt != null || at != null)) switch (Q) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (nt != null) throw Error(u(137, e));
            break;
          default:
            je(t, e, Q, nt, l, at);
        }
        return;
      default:
        if (Sa(e)) {
          for (var He in o) nt = o[He], o.hasOwnProperty(He) && nt !== void 0 && !l.hasOwnProperty(He) && wh(t, e, He, void 0, l, nt);
          for (vt in l) nt = l[vt], at = o[vt], !l.hasOwnProperty(vt) || nt === at || nt === void 0 && at === void 0 || wh(t, e, vt, nt, l, at);
          return;
        }
    }
    for (var G in o) nt = o[G], o.hasOwnProperty(G) && nt != null && !l.hasOwnProperty(G) && je(t, e, G, null, l, nt);
    for (xt in l) nt = l[xt], at = o[xt], !l.hasOwnProperty(xt) || nt === at || nt == null && at == null || je(t, e, xt, nt, l, at);
  }
  var Ch = null, Th = null;
  function jc(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Ug(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Fg(t, e) {
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
  function Eh(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Mh = null;
  function u2() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Mh ? false : (Mh = t, true) : (Mh = null, false);
  }
  var Zg = typeof setTimeout == "function" ? setTimeout : void 0, c2 = typeof clearTimeout == "function" ? clearTimeout : void 0, Vg = typeof Promise == "function" ? Promise : void 0, f2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vg < "u" ? function(t) {
    return Vg.resolve(null).then(t).catch(d2);
  } : Zg;
  function d2(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function ua(t) {
    return t === "head";
  }
  function Gg(t, e) {
    var o = e, l = 0, d = 0;
    do {
      var p = o.nextSibling;
      if (t.removeChild(o), p && p.nodeType === 8) if (o = p.data, o === "/$") {
        if (0 < l && 8 > l) {
          o = l;
          var x = t.ownerDocument;
          if (o & 1 && Gl(x.documentElement), o & 2 && Gl(x.body), o & 4) for (o = x.head, Gl(o), x = o.firstChild; x; ) {
            var T = x.nextSibling, H = x.nodeName;
            x[pi] || H === "SCRIPT" || H === "STYLE" || H === "LINK" && x.rel.toLowerCase() === "stylesheet" || o.removeChild(x), x = T;
          }
        }
        if (d === 0) {
          t.removeChild(p), tu(e);
          return;
        }
        d--;
      } else o === "$" || o === "$?" || o === "$!" ? d++ : l = o.charCodeAt(0) - 48;
      else l = 0;
      o = p;
    } while (o);
    tu(e);
  }
  function Oh(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var o = e;
      switch (e = e.nextSibling, o.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Oh(o), Ve(o);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (o.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(o);
    }
  }
  function h2(t, e, o, l) {
    for (; t.nodeType === 1; ) {
      var d = o;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[pi]) switch (e) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (p = t.getAttribute("rel"), p === "stylesheet" && t.hasAttribute("data-precedence")) break;
            if (p !== d.rel || t.getAttribute("href") !== (d.href == null || d.href === "" ? null : d.href) || t.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin) || t.getAttribute("title") !== (d.title == null ? null : d.title)) break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (p = t.getAttribute("src"), (p !== (d.src == null ? null : d.src) || t.getAttribute("type") !== (d.type == null ? null : d.type) || t.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin)) && p && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
            return t;
          default:
            return t;
        }
      } else if (e === "input" && t.type === "hidden") {
        var p = d.name == null ? null : "" + d.name;
        if (d.type === "hidden" && t.getAttribute("name") === p) return t;
      } else return t;
      if (t = _o(t.nextSibling), t === null) break;
    }
    return null;
  }
  function p2(t, e, o) {
    if (e === "") return null;
    for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !o || (t = _o(t.nextSibling), t === null)) return null;
    return t;
  }
  function Ah(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function m2(t, e) {
    var o = t.ownerDocument;
    if (t.data !== "$?" || o.readyState === "complete") e();
    else {
      var l = function() {
        e(), o.removeEventListener("DOMContentLoaded", l);
      };
      o.addEventListener("DOMContentLoaded", l), t._reactRetry = l;
    }
  }
  function _o(t) {
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
  var Rh = null;
  function qg(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var o = t.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (e === 0) return t;
          e--;
        } else o === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Yg(t, e, o) {
    switch (e = jc(o), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(u(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(u(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(u(454));
        return t;
      default:
        throw Error(u(451));
    }
  }
  function Gl(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Ve(t);
  }
  var to = /* @__PURE__ */ new Map(), Kg = /* @__PURE__ */ new Set();
  function Hc(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var _r = tt.d;
  tt.d = { f: g2, r: v2, D: y2, C: _2, L: b2, m: x2, X: w2, S: S2, M: C2 };
  function g2() {
    var t = _r.f(), e = Lc();
    return t || e;
  }
  function v2(t) {
    var e = Mn(t);
    e !== null && e.tag === 5 && e.type === "form" ? m0(e) : _r.r(t);
  }
  var Ns = typeof document > "u" ? null : document;
  function Xg(t, e, o) {
    var l = Ns;
    if (l && typeof e == "string" && e) {
      var d = Nn(e);
      d = 'link[rel="' + t + '"][href="' + d + '"]', typeof o == "string" && (d += '[crossorigin="' + o + '"]'), Kg.has(d) || (Kg.add(d), t = { rel: t, crossOrigin: o, href: e }, l.querySelector(d) === null && (e = l.createElement("link"), Hn(e, "link", t), Je(e), l.head.appendChild(e)));
    }
  }
  function y2(t) {
    _r.D(t), Xg("dns-prefetch", t, null);
  }
  function _2(t, e) {
    _r.C(t, e), Xg("preconnect", t, e);
  }
  function b2(t, e, o) {
    _r.L(t, e, o);
    var l = Ns;
    if (l && t && e) {
      var d = 'link[rel="preload"][as="' + Nn(e) + '"]';
      e === "image" && o && o.imageSrcSet ? (d += '[imagesrcset="' + Nn(o.imageSrcSet) + '"]', typeof o.imageSizes == "string" && (d += '[imagesizes="' + Nn(o.imageSizes) + '"]')) : d += '[href="' + Nn(t) + '"]';
      var p = d;
      switch (e) {
        case "style":
          p = $s(t);
          break;
        case "script":
          p = Is(t);
      }
      to.has(p) || (t = S({ rel: "preload", href: e === "image" && o && o.imageSrcSet ? void 0 : t, as: e }, o), to.set(p, t), l.querySelector(d) !== null || e === "style" && l.querySelector(ql(p)) || e === "script" && l.querySelector(Yl(p)) || (e = l.createElement("link"), Hn(e, "link", t), Je(e), l.head.appendChild(e)));
    }
  }
  function x2(t, e) {
    _r.m(t, e);
    var o = Ns;
    if (o && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", d = 'link[rel="modulepreload"][as="' + Nn(l) + '"][href="' + Nn(t) + '"]', p = d;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          p = Is(t);
      }
      if (!to.has(p) && (t = S({ rel: "modulepreload", href: t }, e), to.set(p, t), o.querySelector(d) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (o.querySelector(Yl(p))) return;
        }
        l = o.createElement("link"), Hn(l, "link", t), Je(l), o.head.appendChild(l);
      }
    }
  }
  function S2(t, e, o) {
    _r.S(t, e, o);
    var l = Ns;
    if (l && t) {
      var d = Jn(l).hoistableStyles, p = $s(t);
      e = e || "default";
      var x = d.get(p);
      if (!x) {
        var T = { loading: 0, preload: null };
        if (x = l.querySelector(ql(p))) T.loading = 5;
        else {
          t = S({ rel: "stylesheet", href: t, "data-precedence": e }, o), (o = to.get(p)) && kh(t, o);
          var H = x = l.createElement("link");
          Je(H), Hn(H, "link", t), H._p = new Promise(function(Q, vt) {
            H.onload = Q, H.onerror = vt;
          }), H.addEventListener("load", function() {
            T.loading |= 1;
          }), H.addEventListener("error", function() {
            T.loading |= 2;
          }), T.loading |= 4, Uc(x, e, l);
        }
        x = { type: "stylesheet", instance: x, count: 1, state: T }, d.set(p, x);
      }
    }
  }
  function w2(t, e) {
    _r.X(t, e);
    var o = Ns;
    if (o && t) {
      var l = Jn(o).hoistableScripts, d = Is(t), p = l.get(d);
      p || (p = o.querySelector(Yl(d)), p || (t = S({ src: t, async: true }, e), (e = to.get(d)) && Lh(t, e), p = o.createElement("script"), Je(p), Hn(p, "link", t), o.head.appendChild(p)), p = { type: "script", instance: p, count: 1, state: null }, l.set(d, p));
    }
  }
  function C2(t, e) {
    _r.M(t, e);
    var o = Ns;
    if (o && t) {
      var l = Jn(o).hoistableScripts, d = Is(t), p = l.get(d);
      p || (p = o.querySelector(Yl(d)), p || (t = S({ src: t, async: true, type: "module" }, e), (e = to.get(d)) && Lh(t, e), p = o.createElement("script"), Je(p), Hn(p, "link", t), o.head.appendChild(p)), p = { type: "script", instance: p, count: 1, state: null }, l.set(d, p));
    }
  }
  function Wg(t, e, o, l) {
    var d = (d = ct.current) ? Hc(d) : null;
    if (!d) throw Error(u(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof o.precedence == "string" && typeof o.href == "string" ? (e = $s(o.href), o = Jn(d).hoistableStyles, l = o.get(e), l || (l = { type: "style", instance: null, count: 0, state: null }, o.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (o.rel === "stylesheet" && typeof o.href == "string" && typeof o.precedence == "string") {
          t = $s(o.href);
          var p = Jn(d).hoistableStyles, x = p.get(t);
          if (x || (d = d.ownerDocument || d, x = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, p.set(t, x), (p = d.querySelector(ql(t))) && !p._p && (x.instance = p, x.state.loading = 5), to.has(t) || (o = { rel: "preload", as: "style", href: o.href, crossOrigin: o.crossOrigin, integrity: o.integrity, media: o.media, hrefLang: o.hrefLang, referrerPolicy: o.referrerPolicy }, to.set(t, o), p || T2(d, t, o, x.state))), e && l === null) throw Error(u(528, ""));
          return x;
        }
        if (e && l !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return e = o.async, o = o.src, typeof o == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Is(o), o = Jn(d).hoistableScripts, l = o.get(e), l || (l = { type: "script", instance: null, count: 0, state: null }, o.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, t));
    }
  }
  function $s(t) {
    return 'href="' + Nn(t) + '"';
  }
  function ql(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Qg(t) {
    return S({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function T2(t, e, o, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    }), Hn(e, "link", o), Je(e), t.head.appendChild(e));
  }
  function Is(t) {
    return '[src="' + Nn(t) + '"]';
  }
  function Yl(t) {
    return "script[async]" + t;
  }
  function Jg(t, e, o) {
    if (e.count++, e.instance === null) switch (e.type) {
      case "style":
        var l = t.querySelector('style[data-href~="' + Nn(o.href) + '"]');
        if (l) return e.instance = l, Je(l), l;
        var d = S({}, o, { "data-href": o.href, "data-precedence": o.precedence, href: null, precedence: null });
        return l = (t.ownerDocument || t).createElement("style"), Je(l), Hn(l, "style", d), Uc(l, o.precedence, t), e.instance = l;
      case "stylesheet":
        d = $s(o.href);
        var p = t.querySelector(ql(d));
        if (p) return e.state.loading |= 4, e.instance = p, Je(p), p;
        l = Qg(o), (d = to.get(d)) && kh(l, d), p = (t.ownerDocument || t).createElement("link"), Je(p);
        var x = p;
        return x._p = new Promise(function(T, H) {
          x.onload = T, x.onerror = H;
        }), Hn(p, "link", l), e.state.loading |= 4, Uc(p, o.precedence, t), e.instance = p;
      case "script":
        return p = Is(o.src), (d = t.querySelector(Yl(p))) ? (e.instance = d, Je(d), d) : (l = o, (d = to.get(p)) && (l = S({}, o), Lh(l, d)), t = t.ownerDocument || t, d = t.createElement("script"), Je(d), Hn(d, "link", l), t.head.appendChild(d), e.instance = d);
      case "void":
        return null;
      default:
        throw Error(u(443, e.type));
    }
    else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance, e.state.loading |= 4, Uc(l, o.precedence, t));
    return e.instance;
  }
  function Uc(t, e, o) {
    for (var l = o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), d = l.length ? l[l.length - 1] : null, p = d, x = 0; x < l.length; x++) {
      var T = l[x];
      if (T.dataset.precedence === e) p = T;
      else if (p !== d) break;
    }
    p ? p.parentNode.insertBefore(t, p.nextSibling) : (e = o.nodeType === 9 ? o.head : o, e.insertBefore(t, e.firstChild));
  }
  function kh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Lh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Fc = null;
  function tv(t, e, o) {
    if (Fc === null) {
      var l = /* @__PURE__ */ new Map(), d = Fc = /* @__PURE__ */ new Map();
      d.set(o, l);
    } else d = Fc, l = d.get(o), l || (l = /* @__PURE__ */ new Map(), d.set(o, l));
    if (l.has(t)) return l;
    for (l.set(t, null), o = o.getElementsByTagName(t), d = 0; d < o.length; d++) {
      var p = o[d];
      if (!(p[pi] || p[Qe] || t === "link" && p.getAttribute("rel") === "stylesheet") && p.namespaceURI !== "http://www.w3.org/2000/svg") {
        var x = p.getAttribute(e) || "";
        x = t + x;
        var T = l.get(x);
        T ? T.push(p) : l.set(x, [p]);
      }
    }
    return l;
  }
  function ev(t, e, o) {
    t = t.ownerDocument || t, t.head.insertBefore(o, e === "title" ? t.querySelector("head > title") : null);
  }
  function E2(t, e, o) {
    if (o === 1 || e.itemProp != null) return false;
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
  function nv(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Kl = null;
  function M2() {
  }
  function O2(t, e, o) {
    if (Kl === null) throw Error(u(475));
    var l = Kl;
    if (e.type === "stylesheet" && (typeof o.media != "string" || matchMedia(o.media).matches !== false) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var d = $s(o.href), p = t.querySelector(ql(d));
        if (p) {
          t = p._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Zc.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = p, Je(p);
          return;
        }
        p = t.ownerDocument || t, o = Qg(o), (d = to.get(d)) && kh(o, d), p = p.createElement("link"), Je(p);
        var x = p;
        x._p = new Promise(function(T, H) {
          x.onload = T, x.onerror = H;
        }), Hn(p, "link", o), e.instance = p;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = Zc.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  function A2() {
    if (Kl === null) throw Error(u(475));
    var t = Kl;
    return t.stylesheets && t.count === 0 && zh(t, t.stylesheets), 0 < t.count ? function(e) {
      var o = setTimeout(function() {
        if (t.stylesheets && zh(t, t.stylesheets), t.unsuspend) {
          var l = t.unsuspend;
          t.unsuspend = null, l();
        }
      }, 6e4);
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(o);
      };
    } : null;
  }
  function Zc() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) zh(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Vc = null;
  function zh(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Vc = /* @__PURE__ */ new Map(), e.forEach(R2, t), Vc = null, Zc.call(t));
  }
  function R2(t, e) {
    if (!(e.state.loading & 4)) {
      var o = Vc.get(t);
      if (o) var l = o.get(null);
      else {
        o = /* @__PURE__ */ new Map(), Vc.set(t, o);
        for (var d = t.querySelectorAll("link[data-precedence],style[data-precedence]"), p = 0; p < d.length; p++) {
          var x = d[p];
          (x.nodeName === "LINK" || x.getAttribute("media") !== "not all") && (o.set(x.dataset.precedence, x), l = x);
        }
        l && o.set(null, l);
      }
      d = e.instance, x = d.getAttribute("data-precedence"), p = o.get(x) || l, p === l && o.set(null, d), o.set(x, d), this.count++, l = Zc.bind(this), d.addEventListener("load", l), d.addEventListener("error", l), p ? p.parentNode.insertBefore(d, p.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(d, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Xl = { $$typeof: D, Provider: null, Consumer: null, _currentValue: rt, _currentValue2: rt, _threadCount: 0 };
  function k2(t, e, o, l, d, p, x, T) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qn(0), this.hiddenUpdates = Qn(null), this.identifierPrefix = l, this.onUncaughtError = d, this.onCaughtError = p, this.onRecoverableError = x, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function iv(t, e, o, l, d, p, x, T, H, Q, vt, xt) {
    return t = new k2(t, e, o, x, T, H, Q, xt), e = 1, p === true && (e |= 24), p = li(3, null, null, e), t.current = p, p.stateNode = t, e = pd(), e.refCount++, t.pooledCache = e, e.refCount++, p.memoizedState = { element: l, isDehydrated: o, cache: e }, yd(p), t;
  }
  function ov(t) {
    return t ? (t = cr, t) : cr;
  }
  function rv(t, e, o, l, d, p) {
    d = ov(d), l.context === null ? l.context = d : l.pendingContext = d, l = Xr(e), l.payload = { element: o }, p = p === void 0 ? null : p, p !== null && (l.callback = p), o = Wr(t, l, e), o !== null && (Di(o, t, e), El(o, t, e));
  }
  function av(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var o = t.retryLane;
      t.retryLane = o !== 0 && o < e ? o : e;
    }
  }
  function Ph(t, e) {
    av(t, e), (t = t.alternate) && av(t, e);
  }
  function sv(t) {
    if (t.tag === 13) {
      var e = Vr(t, 67108864);
      e !== null && Di(e, t, 67108864), Ph(t, 67108864);
    }
  }
  var Gc = true;
  function L2(t, e, o, l) {
    var d = B.T;
    B.T = null;
    var p = tt.p;
    try {
      tt.p = 2, Bh(t, e, o, l);
    } finally {
      tt.p = p, B.T = d;
    }
  }
  function z2(t, e, o, l) {
    var d = B.T;
    B.T = null;
    var p = tt.p;
    try {
      tt.p = 8, Bh(t, e, o, l);
    } finally {
      tt.p = p, B.T = d;
    }
  }
  function Bh(t, e, o, l) {
    if (Gc) {
      var d = Dh(l);
      if (d === null) Sh(t, e, l, qc, o), uv(t, l);
      else if (B2(d, t, e, o, l)) l.stopPropagation();
      else if (uv(t, l), e & 4 && -1 < P2.indexOf(t)) {
        for (; d !== null; ) {
          var p = Mn(d);
          if (p !== null) switch (p.tag) {
            case 3:
              if (p = p.stateNode, p.current.memoizedState.isDehydrated) {
                var x = Pt(p.pendingLanes);
                if (x !== 0) {
                  var T = p;
                  for (T.pendingLanes |= 2, T.entangledLanes |= 2; x; ) {
                    var H = 1 << 31 - he(x);
                    T.entanglements[1] |= H, x &= ~H;
                  }
                  No(p), (Be & 6) === 0 && (Rc = ue() + 500, Fl(0));
                }
              }
              break;
            case 13:
              T = Vr(p, 2), T !== null && Di(T, p, 2), Lc(), Ph(p, 2);
          }
          if (p = Dh(l), p === null && Sh(t, e, l, qc, o), p === d) break;
          d = p;
        }
        d !== null && l.stopPropagation();
      } else Sh(t, e, l, null, o);
    }
  }
  function Dh(t) {
    return t = zr(t), Nh(t);
  }
  var qc = null;
  function Nh(t) {
    if (qc = null, t = Pe(t), t !== null) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var o = e.tag;
        if (o === 13) {
          if (t = g(e), t !== null) return t;
          t = null;
        } else if (o === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return qc = t, null;
  }
  function lv(t) {
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
        switch (Ct()) {
          case _e:
            return 2;
          case Bt:
            return 8;
          case Jt:
          case Mt:
            return 32;
          case tn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $h = false, ca = null, fa = null, da = null, Wl = /* @__PURE__ */ new Map(), Ql = /* @__PURE__ */ new Map(), ha = [], P2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function uv(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ca = null;
        break;
      case "dragenter":
      case "dragleave":
        fa = null;
        break;
      case "mouseover":
      case "mouseout":
        da = null;
        break;
      case "pointerover":
      case "pointerout":
        Wl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ql.delete(e.pointerId);
    }
  }
  function Jl(t, e, o, l, d, p) {
    return t === null || t.nativeEvent !== p ? (t = { blockedOn: e, domEventName: o, eventSystemFlags: l, nativeEvent: p, targetContainers: [d] }, e !== null && (e = Mn(e), e !== null && sv(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, d !== null && e.indexOf(d) === -1 && e.push(d), t);
  }
  function B2(t, e, o, l, d) {
    switch (e) {
      case "focusin":
        return ca = Jl(ca, t, e, o, l, d), true;
      case "dragenter":
        return fa = Jl(fa, t, e, o, l, d), true;
      case "mouseover":
        return da = Jl(da, t, e, o, l, d), true;
      case "pointerover":
        var p = d.pointerId;
        return Wl.set(p, Jl(Wl.get(p) || null, t, e, o, l, d)), true;
      case "gotpointercapture":
        return p = d.pointerId, Ql.set(p, Jl(Ql.get(p) || null, t, e, o, l, d)), true;
    }
    return false;
  }
  function cv(t) {
    var e = Pe(t.target);
    if (e !== null) {
      var o = h(e);
      if (o !== null) {
        if (e = o.tag, e === 13) {
          if (e = g(o), e !== null) {
            t.blockedOn = e, To(t.priority, function() {
              if (o.tag === 13) {
                var l = Bi();
                l = fi(l);
                var d = Vr(o, l);
                d !== null && Di(d, o, l), Ph(o, l);
              }
            });
            return;
          }
        } else if (e === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Yc(t) {
    if (t.blockedOn !== null) return false;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var o = Dh(t.nativeEvent);
      if (o === null) {
        o = t.nativeEvent;
        var l = new o.constructor(o.type, o);
        wa = l, o.target.dispatchEvent(l), wa = null;
      } else return e = Mn(o), e !== null && sv(e), t.blockedOn = o, false;
      e.shift();
    }
    return true;
  }
  function fv(t, e, o) {
    Yc(t) && o.delete(e);
  }
  function D2() {
    $h = false, ca !== null && Yc(ca) && (ca = null), fa !== null && Yc(fa) && (fa = null), da !== null && Yc(da) && (da = null), Wl.forEach(fv), Ql.forEach(fv);
  }
  function Kc(t, e) {
    t.blockedOn === e && (t.blockedOn = null, $h || ($h = true, n2.unstable_scheduleCallback(n2.unstable_NormalPriority, D2)));
  }
  var Xc = null;
  function dv(t) {
    Xc !== t && (Xc = t, n2.unstable_scheduleCallback(n2.unstable_NormalPriority, function() {
      Xc === t && (Xc = null);
      for (var e = 0; e < t.length; e += 3) {
        var o = t[e], l = t[e + 1], d = t[e + 2];
        if (typeof l != "function") {
          if (Nh(l || o) === null) continue;
          break;
        }
        var p = Mn(o);
        p !== null && (t.splice(e, 3), e -= 3, Nd(p, { pending: true, data: d, method: o.method, action: l }, l, d));
      }
    }));
  }
  function tu(t) {
    function e(H) {
      return Kc(H, t);
    }
    ca !== null && Kc(ca, t), fa !== null && Kc(fa, t), da !== null && Kc(da, t), Wl.forEach(e), Ql.forEach(e);
    for (var o = 0; o < ha.length; o++) {
      var l = ha[o];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < ha.length && (o = ha[0], o.blockedOn === null); ) cv(o), o.blockedOn === null && ha.shift();
    if (o = (t.ownerDocument || t).$$reactFormReplay, o != null) for (l = 0; l < o.length; l += 3) {
      var d = o[l], p = o[l + 1], x = d[an] || null;
      if (typeof p == "function") x || dv(o);
      else if (x) {
        var T = null;
        if (p && p.hasAttribute("formAction")) {
          if (d = p, x = p[an] || null) T = x.formAction;
          else if (Nh(d) !== null) continue;
        } else T = x.action;
        typeof T == "function" ? o[l + 1] = T : (o.splice(l, 3), l -= 3), dv(o);
      }
    }
  }
  function Ih(t) {
    this._internalRoot = t;
  }
  Wc.prototype.render = Ih.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(u(409));
    var o = e.current, l = Bi();
    rv(o, l, t, e, null, null);
  }, Wc.prototype.unmount = Ih.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      rv(t.current, 2, null, t, null, null), Lc(), e[hi] = null;
    }
  };
  function Wc(t) {
    this._internalRoot = t;
  }
  Wc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Zi();
      t = { blockedOn: null, target: t, priority: e };
      for (var o = 0; o < ha.length && e !== 0 && e < ha[o].priority; o++) ;
      ha.splice(o, 0, t), o === 0 && cv(t);
    }
  };
  var hv = r.version;
  if (hv !== "19.1.0") throw Error(u(527, hv, "19.1.0"));
  tt.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(u(188)) : (t = Object.keys(t).join(","), Error(u(268, t)));
    return t = y(e), t = t !== null ? b(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var N2 = { bundleType: 0, version: "19.1.0", rendererPackageName: "react-dom", currentDispatcherRef: B, reconcilerVersion: "19.1.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qc.isDisabled && Qc.supportsFiber) try {
      ce = Qc.inject(N2), Vt = Qc;
    } catch {
    }
  }
  return nu.createRoot = function(t, e) {
    if (!f(t)) throw Error(u(299));
    var o = false, l = "", d = A0, p = R0, x = k0, T = null;
    return e != null && (e.unstable_strictMode === true && (o = true), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (d = e.onUncaughtError), e.onCaughtError !== void 0 && (p = e.onCaughtError), e.onRecoverableError !== void 0 && (x = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (T = e.unstable_transitionCallbacks)), e = iv(t, 1, false, null, null, o, l, d, p, x, T, null), t[hi] = e.current, xh(t), new Ih(e);
  }, nu.hydrateRoot = function(t, e, o) {
    if (!f(t)) throw Error(u(299));
    var l = false, d = "", p = A0, x = R0, T = k0, H = null, Q = null;
    return o != null && (o.unstable_strictMode === true && (l = true), o.identifierPrefix !== void 0 && (d = o.identifierPrefix), o.onUncaughtError !== void 0 && (p = o.onUncaughtError), o.onCaughtError !== void 0 && (x = o.onCaughtError), o.onRecoverableError !== void 0 && (T = o.onRecoverableError), o.unstable_transitionCallbacks !== void 0 && (H = o.unstable_transitionCallbacks), o.formState !== void 0 && (Q = o.formState)), e = iv(t, 1, true, e, o ?? null, l, d, p, x, T, H, Q), e.context = ov(null), o = e.current, l = Bi(), l = fi(l), d = Xr(l), d.callback = null, Wr(o, d, l), o = l, e.current.lanes = o, Tn(e, o), No(e), t[hi] = e.current, xh(t), new Wc(e);
  }, nu.version = "19.1.0", nu;
}
var wv;
function q2() {
  if (wv) return Hh.exports;
  wv = 1;
  function n2() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
    } catch (r) {
      console.error(r);
    }
  }
  return n2(), Hh.exports = G2(), Hh.exports;
}
var Y2 = q2();
const K2 = Dp(Y2);
function Sr(n2, ...r) {
  const a = new URL(`https://mui.com/production-error/?code=${n2}`);
  return r.forEach((u) => a.searchParams.append("args[]", u)), `Minified MUI error #${n2}; visit ${a} for the full message.`;
}
const Fo = "$$material";
function mf() {
  return mf = Object.assign ? Object.assign.bind() : function(n2) {
    for (var r = 1; r < arguments.length; r++) {
      var a = arguments[r];
      for (var u in a) ({}).hasOwnProperty.call(a, u) && (n2[u] = a[u]);
    }
    return n2;
  }, mf.apply(null, arguments);
}
var M = Np();
const Xn = Dp(M), fp = I2({ __proto__: null, default: Xn }, [M]);
function X2(n2) {
  if (n2.sheet) return n2.sheet;
  for (var r = 0; r < document.styleSheets.length; r++) if (document.styleSheets[r].ownerNode === n2) return document.styleSheets[r];
}
function W2(n2) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", n2.key), n2.nonce !== void 0 && r.setAttribute("nonce", n2.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Q2 = function() {
  function n2(a) {
    var u = this;
    this._insertTag = function(f) {
      var h;
      u.tags.length === 0 ? u.insertionPoint ? h = u.insertionPoint.nextSibling : u.prepend ? h = u.container.firstChild : h = u.before : h = u.tags[u.tags.length - 1].nextSibling, u.container.insertBefore(f, h), u.tags.push(f);
    }, this.isSpeedy = a.speedy === void 0 ? true : a.speedy, this.tags = [], this.ctr = 0, this.nonce = a.nonce, this.key = a.key, this.container = a.container, this.prepend = a.prepend, this.insertionPoint = a.insertionPoint, this.before = null;
  }
  var r = n2.prototype;
  return r.hydrate = function(u) {
    u.forEach(this._insertTag);
  }, r.insert = function(u) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(W2(this));
    var f = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var h = X2(f);
      try {
        h.insertRule(u, h.cssRules.length);
      } catch {
      }
    } else f.appendChild(document.createTextNode(u));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(u) {
      var f;
      return (f = u.parentNode) == null ? void 0 : f.removeChild(u);
    }), this.tags = [], this.ctr = 0;
  }, n2;
}(), Kn = "-ms-", gf = "-moz-", Me = "-webkit-", Qy = "comm", $p = "rule", Ip = "decl", J2 = "@import", Jy = "@keyframes", tb = "@layer", eb = Math.abs, Mf = String.fromCharCode, nb = Object.assign;
function ib(n2, r) {
  return Un(n2, 0) ^ 45 ? (((r << 2 ^ Un(n2, 0)) << 2 ^ Un(n2, 1)) << 2 ^ Un(n2, 2)) << 2 ^ Un(n2, 3) : 0;
}
function t1(n2) {
  return n2.trim();
}
function ob(n2, r) {
  return (n2 = r.exec(n2)) ? n2[0] : n2;
}
function Oe(n2, r, a) {
  return n2.replace(r, a);
}
function dp(n2, r) {
  return n2.indexOf(r);
}
function Un(n2, r) {
  return n2.charCodeAt(r) | 0;
}
function _u(n2, r, a) {
  return n2.slice(r, a);
}
function Io(n2) {
  return n2.length;
}
function jp(n2) {
  return n2.length;
}
function Jc(n2, r) {
  return r.push(n2), n2;
}
function rb(n2, r) {
  return n2.map(r).join("");
}
var Of = 1, Ks = 1, e1 = 0, Ci = 0, Sn = 0, tl = "";
function Af(n2, r, a, u, f, h, g) {
  return { value: n2, root: r, parent: a, type: u, props: f, children: h, line: Of, column: Ks, length: g, return: "" };
}
function iu(n2, r) {
  return nb(Af("", null, null, "", null, null, 0), n2, { length: -n2.length }, r);
}
function ab() {
  return Sn;
}
function sb() {
  return Sn = Ci > 0 ? Un(tl, --Ci) : 0, Ks--, Sn === 10 && (Ks = 1, Of--), Sn;
}
function Hi() {
  return Sn = Ci < e1 ? Un(tl, Ci++) : 0, Ks++, Sn === 10 && (Ks = 1, Of++), Sn;
}
function Zo() {
  return Un(tl, Ci);
}
function uf() {
  return Ci;
}
function Ou(n2, r) {
  return _u(tl, n2, r);
}
function bu(n2) {
  switch (n2) {
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
function n1(n2) {
  return Of = Ks = 1, e1 = Io(tl = n2), Ci = 0, [];
}
function i1(n2) {
  return tl = "", n2;
}
function cf(n2) {
  return t1(Ou(Ci - 1, hp(n2 === 91 ? n2 + 2 : n2 === 40 ? n2 + 1 : n2)));
}
function lb(n2) {
  for (; (Sn = Zo()) && Sn < 33; ) Hi();
  return bu(n2) > 2 || bu(Sn) > 3 ? "" : " ";
}
function ub(n2, r) {
  for (; --r && Hi() && !(Sn < 48 || Sn > 102 || Sn > 57 && Sn < 65 || Sn > 70 && Sn < 97); ) ;
  return Ou(n2, uf() + (r < 6 && Zo() == 32 && Hi() == 32));
}
function hp(n2) {
  for (; Hi(); ) switch (Sn) {
    case n2:
      return Ci;
    case 34:
    case 39:
      n2 !== 34 && n2 !== 39 && hp(Sn);
      break;
    case 40:
      n2 === 41 && hp(n2);
      break;
    case 92:
      Hi();
      break;
  }
  return Ci;
}
function cb(n2, r) {
  for (; Hi() && n2 + Sn !== 57; ) if (n2 + Sn === 84 && Zo() === 47) break;
  return "/*" + Ou(r, Ci - 1) + "*" + Mf(n2 === 47 ? n2 : Hi());
}
function fb(n2) {
  for (; !bu(Zo()); ) Hi();
  return Ou(n2, Ci);
}
function db(n2) {
  return i1(ff("", null, null, null, [""], n2 = n1(n2), 0, [0], n2));
}
function ff(n2, r, a, u, f, h, g, v, y) {
  for (var b = 0, S = 0, E = g, R = 0, k = 0, A = 0, O = 1, $ = 1, F = 1, V = 0, D = "", N = f, P = h, U = u, K = D; $; ) switch (A = V, V = Hi()) {
    case 40:
      if (A != 108 && Un(K, E - 1) == 58) {
        dp(K += Oe(cf(V), "&", "&\f"), "&\f") != -1 && (F = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      K += cf(V);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      K += lb(A);
      break;
    case 92:
      K += ub(uf() - 1, 7);
      continue;
    case 47:
      switch (Zo()) {
        case 42:
        case 47:
          Jc(hb(cb(Hi(), uf()), r, a), y);
          break;
        default:
          K += "/";
      }
      break;
    case 123 * O:
      v[b++] = Io(K) * F;
    case 125 * O:
    case 59:
    case 0:
      switch (V) {
        case 0:
        case 125:
          $ = 0;
        case 59 + S:
          F == -1 && (K = Oe(K, /\f/g, "")), k > 0 && Io(K) - E && Jc(k > 32 ? Tv(K + ";", u, a, E - 1) : Tv(Oe(K, " ", "") + ";", u, a, E - 2), y);
          break;
        case 59:
          K += ";";
        default:
          if (Jc(U = Cv(K, r, a, b, S, f, v, D, N = [], P = [], E), h), V === 123) if (S === 0) ff(K, r, U, U, N, h, E, v, P);
          else switch (R === 99 && Un(K, 3) === 110 ? 100 : R) {
            case 100:
            case 108:
            case 109:
            case 115:
              ff(n2, U, U, u && Jc(Cv(n2, U, U, 0, 0, f, v, D, f, N = [], E), P), f, P, E, v, u ? N : P);
              break;
            default:
              ff(K, U, U, U, [""], P, 0, v, P);
          }
      }
      b = S = k = 0, O = F = 1, D = K = "", E = g;
      break;
    case 58:
      E = 1 + Io(K), k = A;
    default:
      if (O < 1) {
        if (V == 123) --O;
        else if (V == 125 && O++ == 0 && sb() == 125) continue;
      }
      switch (K += Mf(V), V * O) {
        case 38:
          F = S > 0 ? 1 : (K += "\f", -1);
          break;
        case 44:
          v[b++] = (Io(K) - 1) * F, F = 1;
          break;
        case 64:
          Zo() === 45 && (K += cf(Hi())), R = Zo(), S = E = Io(D = K += fb(uf())), V++;
          break;
        case 45:
          A === 45 && Io(K) == 2 && (O = 0);
      }
  }
  return h;
}
function Cv(n2, r, a, u, f, h, g, v, y, b, S) {
  for (var E = f - 1, R = f === 0 ? h : [""], k = jp(R), A = 0, O = 0, $ = 0; A < u; ++A) for (var F = 0, V = _u(n2, E + 1, E = eb(O = g[A])), D = n2; F < k; ++F) (D = t1(O > 0 ? R[F] + " " + V : Oe(V, /&\f/g, R[F]))) && (y[$++] = D);
  return Af(n2, r, a, f === 0 ? $p : v, y, b, S);
}
function hb(n2, r, a) {
  return Af(n2, r, a, Qy, Mf(ab()), _u(n2, 2, -2), 0);
}
function Tv(n2, r, a, u) {
  return Af(n2, r, a, Ip, _u(n2, 0, u), _u(n2, u + 1, -1), u);
}
function qs(n2, r) {
  for (var a = "", u = jp(n2), f = 0; f < u; f++) a += r(n2[f], f, n2, r) || "";
  return a;
}
function pb(n2, r, a, u) {
  switch (n2.type) {
    case tb:
      if (n2.children.length) break;
    case J2:
    case Ip:
      return n2.return = n2.return || n2.value;
    case Qy:
      return "";
    case Jy:
      return n2.return = n2.value + "{" + qs(n2.children, u) + "}";
    case $p:
      n2.value = n2.props.join(",");
  }
  return Io(a = qs(n2.children, u)) ? n2.return = n2.value + "{" + a + "}" : "";
}
function mb(n2) {
  var r = jp(n2);
  return function(a, u, f, h) {
    for (var g = "", v = 0; v < r; v++) g += n2[v](a, u, f, h) || "";
    return g;
  };
}
function gb(n2) {
  return function(r) {
    r.root || (r = r.return) && n2(r);
  };
}
function o1(n2) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(a) {
    return r[a] === void 0 && (r[a] = n2(a)), r[a];
  };
}
var vb = function(r, a, u) {
  for (var f = 0, h = 0; f = h, h = Zo(), f === 38 && h === 12 && (a[u] = 1), !bu(h); ) Hi();
  return Ou(r, Ci);
}, yb = function(r, a) {
  var u = -1, f = 44;
  do
    switch (bu(f)) {
      case 0:
        f === 38 && Zo() === 12 && (a[u] = 1), r[u] += vb(Ci - 1, a, u);
        break;
      case 2:
        r[u] += cf(f);
        break;
      case 4:
        if (f === 44) {
          r[++u] = Zo() === 58 ? "&\f" : "", a[u] = r[u].length;
          break;
        }
      default:
        r[u] += Mf(f);
    }
  while (f = Hi());
  return r;
}, _b = function(r, a) {
  return i1(yb(n1(r), a));
}, Ev = /* @__PURE__ */ new WeakMap(), bb = function(r) {
  if (!(r.type !== "rule" || !r.parent || r.length < 1)) {
    for (var a = r.value, u = r.parent, f = r.column === u.column && r.line === u.line; u.type !== "rule"; ) if (u = u.parent, !u) return;
    if (!(r.props.length === 1 && a.charCodeAt(0) !== 58 && !Ev.get(u)) && !f) {
      Ev.set(r, true);
      for (var h = [], g = _b(a, h), v = u.props, y = 0, b = 0; y < g.length; y++) for (var S = 0; S < v.length; S++, b++) r.props[b] = h[y] ? g[y].replace(/&\f/g, v[S]) : v[S] + " " + g[y];
    }
  }
}, xb = function(r) {
  if (r.type === "decl") {
    var a = r.value;
    a.charCodeAt(0) === 108 && a.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function r1(n2, r) {
  switch (ib(n2, r)) {
    case 5103:
      return Me + "print-" + n2 + n2;
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
      return Me + n2 + n2;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Me + n2 + gf + n2 + Kn + n2 + n2;
    case 6828:
    case 4268:
      return Me + n2 + Kn + n2 + n2;
    case 6165:
      return Me + n2 + Kn + "flex-" + n2 + n2;
    case 5187:
      return Me + n2 + Oe(n2, /(\w+).+(:[^]+)/, Me + "box-$1$2" + Kn + "flex-$1$2") + n2;
    case 5443:
      return Me + n2 + Kn + "flex-item-" + Oe(n2, /flex-|-self/, "") + n2;
    case 4675:
      return Me + n2 + Kn + "flex-line-pack" + Oe(n2, /align-content|flex-|-self/, "") + n2;
    case 5548:
      return Me + n2 + Kn + Oe(n2, "shrink", "negative") + n2;
    case 5292:
      return Me + n2 + Kn + Oe(n2, "basis", "preferred-size") + n2;
    case 6060:
      return Me + "box-" + Oe(n2, "-grow", "") + Me + n2 + Kn + Oe(n2, "grow", "positive") + n2;
    case 4554:
      return Me + Oe(n2, /([^-])(transform)/g, "$1" + Me + "$2") + n2;
    case 6187:
      return Oe(Oe(Oe(n2, /(zoom-|grab)/, Me + "$1"), /(image-set)/, Me + "$1"), n2, "") + n2;
    case 5495:
    case 3959:
      return Oe(n2, /(image-set\([^]*)/, Me + "$1$`$1");
    case 4968:
      return Oe(Oe(n2, /(.+:)(flex-)?(.*)/, Me + "box-pack:$3" + Kn + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Me + n2 + n2;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Oe(n2, /(.+)-inline(.+)/, Me + "$1$2") + n2;
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
      if (Io(n2) - 1 - r > 6) switch (Un(n2, r + 1)) {
        case 109:
          if (Un(n2, r + 4) !== 45) break;
        case 102:
          return Oe(n2, /(.+:)(.+)-([^]+)/, "$1" + Me + "$2-$3$1" + gf + (Un(n2, r + 3) == 108 ? "$3" : "$2-$3")) + n2;
        case 115:
          return ~dp(n2, "stretch") ? r1(Oe(n2, "stretch", "fill-available"), r) + n2 : n2;
      }
      break;
    case 4949:
      if (Un(n2, r + 1) !== 115) break;
    case 6444:
      switch (Un(n2, Io(n2) - 3 - (~dp(n2, "!important") && 10))) {
        case 107:
          return Oe(n2, ":", ":" + Me) + n2;
        case 101:
          return Oe(n2, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Me + (Un(n2, 14) === 45 ? "inline-" : "") + "box$3$1" + Me + "$2$3$1" + Kn + "$2box$3") + n2;
      }
      break;
    case 5936:
      switch (Un(n2, r + 11)) {
        case 114:
          return Me + n2 + Kn + Oe(n2, /[svh]\w+-[tblr]{2}/, "tb") + n2;
        case 108:
          return Me + n2 + Kn + Oe(n2, /[svh]\w+-[tblr]{2}/, "tb-rl") + n2;
        case 45:
          return Me + n2 + Kn + Oe(n2, /[svh]\w+-[tblr]{2}/, "lr") + n2;
      }
      return Me + n2 + Kn + n2 + n2;
  }
  return n2;
}
var Sb = function(r, a, u, f) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case Ip:
      r.return = r1(r.value, r.length);
      break;
    case Jy:
      return qs([iu(r, { value: Oe(r.value, "@", "@" + Me) })], f);
    case $p:
      if (r.length) return rb(r.props, function(h) {
        switch (ob(h, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return qs([iu(r, { props: [Oe(h, /:(read-\w+)/, ":" + gf + "$1")] })], f);
          case "::placeholder":
            return qs([iu(r, { props: [Oe(h, /:(plac\w+)/, ":" + Me + "input-$1")] }), iu(r, { props: [Oe(h, /:(plac\w+)/, ":" + gf + "$1")] }), iu(r, { props: [Oe(h, /:(plac\w+)/, Kn + "input-$1")] })], f);
        }
        return "";
      });
  }
}, wb = [Sb], Cb = function(r) {
  var a = r.key;
  if (a === "css") {
    var u = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(u, function(O) {
      var $ = O.getAttribute("data-emotion");
      $.indexOf(" ") !== -1 && (document.head.appendChild(O), O.setAttribute("data-s", ""));
    });
  }
  var f = r.stylisPlugins || wb, h = {}, g, v = [];
  g = r.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + a + ' "]'), function(O) {
    for (var $ = O.getAttribute("data-emotion").split(" "), F = 1; F < $.length; F++) h[$[F]] = true;
    v.push(O);
  });
  var y, b = [bb, xb];
  {
    var S, E = [pb, gb(function(O) {
      S.insert(O);
    })], R = mb(b.concat(f, E)), k = function($) {
      return qs(db($), R);
    };
    y = function($, F, V, D) {
      S = V, k($ ? $ + "{" + F.styles + "}" : F.styles), D && (A.inserted[F.name] = true);
    };
  }
  var A = { key: a, sheet: new Q2({ key: a, container: g, nonce: r.nonce, speedy: r.speedy, prepend: r.prepend, insertionPoint: r.insertionPoint }), nonce: r.nonce, inserted: h, registered: {}, insert: y };
  return A.sheet.hydrate(v), A;
}, Gh = { exports: {} }, Ae = {};
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Mv;
function Tb() {
  if (Mv) return Ae;
  Mv = 1;
  var n2 = typeof Symbol == "function" && Symbol.for, r = n2 ? Symbol.for("react.element") : 60103, a = n2 ? Symbol.for("react.portal") : 60106, u = n2 ? Symbol.for("react.fragment") : 60107, f = n2 ? Symbol.for("react.strict_mode") : 60108, h = n2 ? Symbol.for("react.profiler") : 60114, g = n2 ? Symbol.for("react.provider") : 60109, v = n2 ? Symbol.for("react.context") : 60110, y = n2 ? Symbol.for("react.async_mode") : 60111, b = n2 ? Symbol.for("react.concurrent_mode") : 60111, S = n2 ? Symbol.for("react.forward_ref") : 60112, E = n2 ? Symbol.for("react.suspense") : 60113, R = n2 ? Symbol.for("react.suspense_list") : 60120, k = n2 ? Symbol.for("react.memo") : 60115, A = n2 ? Symbol.for("react.lazy") : 60116, O = n2 ? Symbol.for("react.block") : 60121, $ = n2 ? Symbol.for("react.fundamental") : 60117, F = n2 ? Symbol.for("react.responder") : 60118, V = n2 ? Symbol.for("react.scope") : 60119;
  function D(P) {
    if (typeof P == "object" && P !== null) {
      var U = P.$$typeof;
      switch (U) {
        case r:
          switch (P = P.type, P) {
            case y:
            case b:
            case u:
            case h:
            case f:
            case E:
              return P;
            default:
              switch (P = P && P.$$typeof, P) {
                case v:
                case S:
                case A:
                case k:
                case g:
                  return P;
                default:
                  return U;
              }
          }
        case a:
          return U;
      }
    }
  }
  function N(P) {
    return D(P) === b;
  }
  return Ae.AsyncMode = y, Ae.ConcurrentMode = b, Ae.ContextConsumer = v, Ae.ContextProvider = g, Ae.Element = r, Ae.ForwardRef = S, Ae.Fragment = u, Ae.Lazy = A, Ae.Memo = k, Ae.Portal = a, Ae.Profiler = h, Ae.StrictMode = f, Ae.Suspense = E, Ae.isAsyncMode = function(P) {
    return N(P) || D(P) === y;
  }, Ae.isConcurrentMode = N, Ae.isContextConsumer = function(P) {
    return D(P) === v;
  }, Ae.isContextProvider = function(P) {
    return D(P) === g;
  }, Ae.isElement = function(P) {
    return typeof P == "object" && P !== null && P.$$typeof === r;
  }, Ae.isForwardRef = function(P) {
    return D(P) === S;
  }, Ae.isFragment = function(P) {
    return D(P) === u;
  }, Ae.isLazy = function(P) {
    return D(P) === A;
  }, Ae.isMemo = function(P) {
    return D(P) === k;
  }, Ae.isPortal = function(P) {
    return D(P) === a;
  }, Ae.isProfiler = function(P) {
    return D(P) === h;
  }, Ae.isStrictMode = function(P) {
    return D(P) === f;
  }, Ae.isSuspense = function(P) {
    return D(P) === E;
  }, Ae.isValidElementType = function(P) {
    return typeof P == "string" || typeof P == "function" || P === u || P === b || P === h || P === f || P === E || P === R || typeof P == "object" && P !== null && (P.$$typeof === A || P.$$typeof === k || P.$$typeof === g || P.$$typeof === v || P.$$typeof === S || P.$$typeof === $ || P.$$typeof === F || P.$$typeof === V || P.$$typeof === O);
  }, Ae.typeOf = D, Ae;
}
var Ov;
function Eb() {
  return Ov || (Ov = 1, Gh.exports = Tb()), Gh.exports;
}
var qh, Av;
function Mb() {
  if (Av) return qh;
  Av = 1;
  var n2 = Eb(), r = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, a = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, u = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, f = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, h = {};
  h[n2.ForwardRef] = u, h[n2.Memo] = f;
  function g(A) {
    return n2.isMemo(A) ? f : h[A.$$typeof] || r;
  }
  var v = Object.defineProperty, y = Object.getOwnPropertyNames, b = Object.getOwnPropertySymbols, S = Object.getOwnPropertyDescriptor, E = Object.getPrototypeOf, R = Object.prototype;
  function k(A, O, $) {
    if (typeof O != "string") {
      if (R) {
        var F = E(O);
        F && F !== R && k(A, F, $);
      }
      var V = y(O);
      b && (V = V.concat(b(O)));
      for (var D = g(A), N = g(O), P = 0; P < V.length; ++P) {
        var U = V[P];
        if (!a[U] && !($ && $[U]) && !(N && N[U]) && !(D && D[U])) {
          var K = S(O, U);
          try {
            v(A, U, K);
          } catch {
          }
        }
      }
    }
    return A;
  }
  return qh = k, qh;
}
Mb();
var Ob = true;
function a1(n2, r, a) {
  var u = "";
  return a.split(" ").forEach(function(f) {
    n2[f] !== void 0 ? r.push(n2[f] + ";") : f && (u += f + " ");
  }), u;
}
var Hp = function(r, a, u) {
  var f = r.key + "-" + a.name;
  (u === false || Ob === false) && r.registered[f] === void 0 && (r.registered[f] = a.styles);
}, Up = function(r, a, u) {
  Hp(r, a, u);
  var f = r.key + "-" + a.name;
  if (r.inserted[a.name] === void 0) {
    var h = a;
    do
      r.insert(a === h ? "." + f : "", h, r.sheet, true), h = h.next;
    while (h !== void 0);
  }
};
function Ab(n2) {
  for (var r = 0, a, u = 0, f = n2.length; f >= 4; ++u, f -= 4) a = n2.charCodeAt(u) & 255 | (n2.charCodeAt(++u) & 255) << 8 | (n2.charCodeAt(++u) & 255) << 16 | (n2.charCodeAt(++u) & 255) << 24, a = (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16), a ^= a >>> 24, r = (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16) ^ (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (f) {
    case 3:
      r ^= (n2.charCodeAt(u + 2) & 255) << 16;
    case 2:
      r ^= (n2.charCodeAt(u + 1) & 255) << 8;
    case 1:
      r ^= n2.charCodeAt(u) & 255, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var Rb = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, kb = /[A-Z]|^ms/g, Lb = /_EMO_([^_]+?)_([^]*?)_EMO_/g, s1 = function(r) {
  return r.charCodeAt(1) === 45;
}, Rv = function(r) {
  return r != null && typeof r != "boolean";
}, Yh = o1(function(n2) {
  return s1(n2) ? n2 : n2.replace(kb, "-$&").toLowerCase();
}), kv = function(r, a) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof a == "string") return a.replace(Lb, function(u, f, h) {
        return jo = { name: f, styles: h, next: jo }, f;
      });
  }
  return Rb[r] !== 1 && !s1(r) && typeof a == "number" && a !== 0 ? a + "px" : a;
};
function xu(n2, r, a) {
  if (a == null) return "";
  var u = a;
  if (u.__emotion_styles !== void 0) return u;
  switch (typeof a) {
    case "boolean":
      return "";
    case "object": {
      var f = a;
      if (f.anim === 1) return jo = { name: f.name, styles: f.styles, next: jo }, f.name;
      var h = a;
      if (h.styles !== void 0) {
        var g = h.next;
        if (g !== void 0) for (; g !== void 0; ) jo = { name: g.name, styles: g.styles, next: jo }, g = g.next;
        var v = h.styles + ";";
        return v;
      }
      return zb(n2, r, a);
    }
    case "function": {
      if (n2 !== void 0) {
        var y = jo, b = a(n2);
        return jo = y, xu(n2, r, b);
      }
      break;
    }
  }
  var S = a;
  if (r == null) return S;
  var E = r[S];
  return E !== void 0 ? E : S;
}
function zb(n2, r, a) {
  var u = "";
  if (Array.isArray(a)) for (var f = 0; f < a.length; f++) u += xu(n2, r, a[f]) + ";";
  else for (var h in a) {
    var g = a[h];
    if (typeof g != "object") {
      var v = g;
      r != null && r[v] !== void 0 ? u += h + "{" + r[v] + "}" : Rv(v) && (u += Yh(h) + ":" + kv(h, v) + ";");
    } else if (Array.isArray(g) && typeof g[0] == "string" && (r == null || r[g[0]] === void 0)) for (var y = 0; y < g.length; y++) Rv(g[y]) && (u += Yh(h) + ":" + kv(h, g[y]) + ";");
    else {
      var b = xu(n2, r, g);
      switch (h) {
        case "animation":
        case "animationName": {
          u += Yh(h) + ":" + b + ";";
          break;
        }
        default:
          u += h + "{" + b + "}";
      }
    }
  }
  return u;
}
var Lv = /label:\s*([^\s;{]+)\s*(;|$)/g, jo;
function Au(n2, r, a) {
  if (n2.length === 1 && typeof n2[0] == "object" && n2[0] !== null && n2[0].styles !== void 0) return n2[0];
  var u = true, f = "";
  jo = void 0;
  var h = n2[0];
  if (h == null || h.raw === void 0) u = false, f += xu(a, r, h);
  else {
    var g = h;
    f += g[0];
  }
  for (var v = 1; v < n2.length; v++) if (f += xu(a, r, n2[v]), u) {
    var y = h;
    f += y[v];
  }
  Lv.lastIndex = 0;
  for (var b = "", S; (S = Lv.exec(f)) !== null; ) b += "-" + S[1];
  var E = Ab(f) + b;
  return { name: E, styles: f, next: jo };
}
var Pb = function(r) {
  return r();
}, l1 = fp.useInsertionEffect ? fp.useInsertionEffect : false, u1 = l1 || Pb, zv = l1 || M.useLayoutEffect, c1 = M.createContext(typeof HTMLElement < "u" ? Cb({ key: "css" }) : null);
c1.Provider;
var Fp = function(r) {
  return M.forwardRef(function(a, u) {
    var f = M.useContext(c1);
    return r(a, f, u);
  });
}, Ru = M.createContext({}), Zp = {}.hasOwnProperty, pp = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Bb = function(r, a) {
  var u = {};
  for (var f in a) Zp.call(a, f) && (u[f] = a[f]);
  return u[pp] = r, u;
}, Db = function(r) {
  var a = r.cache, u = r.serialized, f = r.isStringTag;
  return Hp(a, u, f), u1(function() {
    return Up(a, u, f);
  }), null;
}, Nb = Fp(function(n2, r, a) {
  var u = n2.css;
  typeof u == "string" && r.registered[u] !== void 0 && (u = r.registered[u]);
  var f = n2[pp], h = [u], g = "";
  typeof n2.className == "string" ? g = a1(r.registered, h, n2.className) : n2.className != null && (g = n2.className + " ");
  var v = Au(h, void 0, M.useContext(Ru));
  g += r.key + "-" + v.name;
  var y = {};
  for (var b in n2) Zp.call(n2, b) && b !== "css" && b !== pp && (y[b] = n2[b]);
  return y.className = g, a && (y.ref = a), M.createElement(M.Fragment, null, M.createElement(Db, { cache: r, serialized: v, isStringTag: typeof f == "string" }), M.createElement(f, y));
}), $b = Nb, Pv = function(r, a) {
  var u = arguments;
  if (a == null || !Zp.call(a, "css")) return M.createElement.apply(void 0, u);
  var f = u.length, h = new Array(f);
  h[0] = $b, h[1] = Bb(r, a);
  for (var g = 2; g < f; g++) h[g] = u[g];
  return M.createElement.apply(null, h);
};
(function(n2) {
  var r;
  r || (r = n2.JSX || (n2.JSX = {}));
})(Pv || (Pv = {}));
var Ib = Fp(function(n2, r) {
  var a = n2.styles, u = Au([a], void 0, M.useContext(Ru)), f = M.useRef();
  return zv(function() {
    var h = r.key + "-global", g = new r.sheet.constructor({ key: h, nonce: r.sheet.nonce, container: r.sheet.container, speedy: r.sheet.isSpeedy }), v = false, y = document.querySelector('style[data-emotion="' + h + " " + u.name + '"]');
    return r.sheet.tags.length && (g.before = r.sheet.tags[0]), y !== null && (v = true, y.setAttribute("data-emotion", h), g.hydrate([y])), f.current = [g, v], function() {
      g.flush();
    };
  }, [r]), zv(function() {
    var h = f.current, g = h[0], v = h[1];
    if (v) {
      h[1] = false;
      return;
    }
    if (u.next !== void 0 && Up(r, u.next, true), g.tags.length) {
      var y = g.tags[g.tags.length - 1].nextElementSibling;
      g.before = y, g.flush();
    }
    r.insert("", u, g, false);
  }, [r, u.name]), null;
});
function Vp() {
  for (var n2 = arguments.length, r = new Array(n2), a = 0; a < n2; a++) r[a] = arguments[a];
  return Au(r);
}
function ku() {
  var n2 = Vp.apply(void 0, arguments), r = "animation-" + n2.name;
  return { name: r, styles: "@keyframes " + r + "{" + n2.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}
var jb = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Hb = o1(function(n2) {
  return jb.test(n2) || n2.charCodeAt(0) === 111 && n2.charCodeAt(1) === 110 && n2.charCodeAt(2) < 91;
}), Ub = Hb, Fb = function(r) {
  return r !== "theme";
}, Bv = function(r) {
  return typeof r == "string" && r.charCodeAt(0) > 96 ? Ub : Fb;
}, Dv = function(r, a, u) {
  var f;
  if (a) {
    var h = a.shouldForwardProp;
    f = r.__emotion_forwardProp && h ? function(g) {
      return r.__emotion_forwardProp(g) && h(g);
    } : h;
  }
  return typeof f != "function" && u && (f = r.__emotion_forwardProp), f;
}, Zb = function(r) {
  var a = r.cache, u = r.serialized, f = r.isStringTag;
  return Hp(a, u, f), u1(function() {
    return Up(a, u, f);
  }), null;
}, Vb = function n(r, a) {
  var u = r.__emotion_real === r, f = u && r.__emotion_base || r, h, g;
  a !== void 0 && (h = a.label, g = a.target);
  var v = Dv(r, a, u), y = v || Bv(f), b = !y("as");
  return function() {
    var S = arguments, E = u && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (h !== void 0 && E.push("label:" + h + ";"), S[0] == null || S[0].raw === void 0) E.push.apply(E, S);
    else {
      var R = S[0];
      E.push(R[0]);
      for (var k = S.length, A = 1; A < k; A++) E.push(S[A], R[A]);
    }
    var O = Fp(function($, F, V) {
      var D = b && $.as || f, N = "", P = [], U = $;
      if ($.theme == null) {
        U = {};
        for (var K in $) U[K] = $[K];
        U.theme = M.useContext(Ru);
      }
      typeof $.className == "string" ? N = a1(F.registered, P, $.className) : $.className != null && (N = $.className + " ");
      var J = Au(E.concat(P), F.registered, U);
      N += F.key + "-" + J.name, g !== void 0 && (N += " " + g);
      var it = b && v === void 0 ? Bv(D) : y, ut = {};
      for (var ot in $) b && ot === "as" || it(ot) && (ut[ot] = $[ot]);
      return ut.className = N, V && (ut.ref = V), M.createElement(M.Fragment, null, M.createElement(Zb, { cache: F, serialized: J, isStringTag: typeof D == "string" }), M.createElement(D, ut));
    });
    return O.displayName = h !== void 0 ? h : "Styled(" + (typeof f == "string" ? f : f.displayName || f.name || "Component") + ")", O.defaultProps = r.defaultProps, O.__emotion_real = O, O.__emotion_base = f, O.__emotion_styles = E, O.__emotion_forwardProp = v, Object.defineProperty(O, "toString", { value: function() {
      return "." + g;
    } }), O.withComponent = function($, F) {
      var V = n($, mf({}, a, F, { shouldForwardProp: Dv(O, F, true) }));
      return V.apply(void 0, E);
    }, O;
  };
}, Gb = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], mp = Vb.bind(null);
Gb.forEach(function(n2) {
  mp[n2] = mp(n2);
});
function qb(n2) {
  return n2 == null || Object.keys(n2).length === 0;
}
function f1(n2) {
  const { styles: r, defaultTheme: a = {} } = n2, u = typeof r == "function" ? (f) => r(qb(f) ? a : f) : r;
  return I.jsx(Ib, { styles: u });
}
function d1(n2, r) {
  return mp(n2, r);
}
function Yb(n2, r) {
  Array.isArray(n2.__emotion_styles) && (n2.__emotion_styles = r(n2.__emotion_styles));
}
const Nv = [];
function ga(n2) {
  return Nv[0] = n2, Au(Nv);
}
var Kh = { exports: {} }, Ue = {};
/**
* @license React
* react-is.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var $v;
function Kb() {
  if ($v) return Ue;
  $v = 1;
  var n2 = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), g = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), R = Symbol.for("react.view_transition"), k = Symbol.for("react.client.reference");
  function A(O) {
    if (typeof O == "object" && O !== null) {
      var $ = O.$$typeof;
      switch ($) {
        case n2:
          switch (O = O.type, O) {
            case a:
            case f:
            case u:
            case y:
            case b:
            case R:
              return O;
            default:
              switch (O = O && O.$$typeof, O) {
                case g:
                case v:
                case E:
                case S:
                  return O;
                case h:
                  return O;
                default:
                  return $;
              }
          }
        case r:
          return $;
      }
    }
  }
  return Ue.ContextConsumer = h, Ue.ContextProvider = g, Ue.Element = n2, Ue.ForwardRef = v, Ue.Fragment = a, Ue.Lazy = E, Ue.Memo = S, Ue.Portal = r, Ue.Profiler = f, Ue.StrictMode = u, Ue.Suspense = y, Ue.SuspenseList = b, Ue.isContextConsumer = function(O) {
    return A(O) === h;
  }, Ue.isContextProvider = function(O) {
    return A(O) === g;
  }, Ue.isElement = function(O) {
    return typeof O == "object" && O !== null && O.$$typeof === n2;
  }, Ue.isForwardRef = function(O) {
    return A(O) === v;
  }, Ue.isFragment = function(O) {
    return A(O) === a;
  }, Ue.isLazy = function(O) {
    return A(O) === E;
  }, Ue.isMemo = function(O) {
    return A(O) === S;
  }, Ue.isPortal = function(O) {
    return A(O) === r;
  }, Ue.isProfiler = function(O) {
    return A(O) === f;
  }, Ue.isStrictMode = function(O) {
    return A(O) === u;
  }, Ue.isSuspense = function(O) {
    return A(O) === y;
  }, Ue.isSuspenseList = function(O) {
    return A(O) === b;
  }, Ue.isValidElementType = function(O) {
    return typeof O == "string" || typeof O == "function" || O === a || O === f || O === u || O === y || O === b || typeof O == "object" && O !== null && (O.$$typeof === E || O.$$typeof === S || O.$$typeof === g || O.$$typeof === h || O.$$typeof === v || O.$$typeof === k || O.getModuleId !== void 0);
  }, Ue.typeOf = A, Ue;
}
var Iv;
function Xb() {
  return Iv || (Iv = 1, Kh.exports = Kb()), Kh.exports;
}
var h1 = Xb();
function Uo(n2) {
  if (typeof n2 != "object" || n2 === null) return false;
  const r = Object.getPrototypeOf(n2);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in n2) && !(Symbol.iterator in n2);
}
function p1(n2) {
  if (M.isValidElement(n2) || h1.isValidElementType(n2) || !Uo(n2)) return n2;
  const r = {};
  return Object.keys(n2).forEach((a) => {
    r[a] = p1(n2[a]);
  }), r;
}
function Pn(n2, r, a = { clone: true }) {
  const u = a.clone ? { ...n2 } : n2;
  return Uo(n2) && Uo(r) && Object.keys(r).forEach((f) => {
    M.isValidElement(r[f]) || h1.isValidElementType(r[f]) ? u[f] = r[f] : Uo(r[f]) && Object.prototype.hasOwnProperty.call(n2, f) && Uo(n2[f]) ? u[f] = Pn(n2[f], r[f], a) : a.clone ? u[f] = Uo(r[f]) ? p1(r[f]) : r[f] : u[f] = r[f];
  }), u;
}
const Wb = (n2) => {
  const r = Object.keys(n2).map((a) => ({ key: a, val: n2[a] })) || [];
  return r.sort((a, u) => a.val - u.val), r.reduce((a, u) => ({ ...a, [u.key]: u.val }), {});
};
function Qb(n2) {
  const { values: r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: a = "px", step: u = 5, ...f } = n2, h = Wb(r), g = Object.keys(h);
  function v(R) {
    return `@media (min-width:${typeof r[R] == "number" ? r[R] : R}${a})`;
  }
  function y(R) {
    return `@media (max-width:${(typeof r[R] == "number" ? r[R] : R) - u / 100}${a})`;
  }
  function b(R, k) {
    const A = g.indexOf(k);
    return `@media (min-width:${typeof r[R] == "number" ? r[R] : R}${a}) and (max-width:${(A !== -1 && typeof r[g[A]] == "number" ? r[g[A]] : k) - u / 100}${a})`;
  }
  function S(R) {
    return g.indexOf(R) + 1 < g.length ? b(R, g[g.indexOf(R) + 1]) : v(R);
  }
  function E(R) {
    const k = g.indexOf(R);
    return k === 0 ? v(g[1]) : k === g.length - 1 ? y(g[k]) : b(R, g[g.indexOf(R) + 1]).replace("@media", "@media not all and");
  }
  return { keys: g, values: h, up: v, down: y, between: b, only: S, not: E, unit: a, ...f };
}
function jv(n2, r) {
  if (!n2.containerQueries) return r;
  const a = Object.keys(r).filter((u) => u.startsWith("@container")).sort((u, f) => {
    var _a2, _b2;
    const h = /min-width:\s*([0-9.]+)/;
    return +(((_a2 = u.match(h)) == null ? void 0 : _a2[1]) || 0) - +(((_b2 = f.match(h)) == null ? void 0 : _b2[1]) || 0);
  });
  return a.length ? a.reduce((u, f) => {
    const h = r[f];
    return delete u[f], u[f] = h, u;
  }, { ...r }) : r;
}
function Jb(n2, r) {
  return r === "@" || r.startsWith("@") && (n2.some((a) => r.startsWith(`@${a}`)) || !!r.match(/^@\d/));
}
function tx(n2, r) {
  const a = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!a) return null;
  const [, u, f] = a, h = Number.isNaN(+u) ? u || 0 : +u;
  return n2.containerQueries(f).up(h);
}
function ex(n2) {
  const r = (h, g) => h.replace("@media", g ? `@container ${g}` : "@container");
  function a(h, g) {
    h.up = (...v) => r(n2.breakpoints.up(...v), g), h.down = (...v) => r(n2.breakpoints.down(...v), g), h.between = (...v) => r(n2.breakpoints.between(...v), g), h.only = (...v) => r(n2.breakpoints.only(...v), g), h.not = (...v) => {
      const y = r(n2.breakpoints.not(...v), g);
      return y.includes("not all and") ? y.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : y;
    };
  }
  const u = {}, f = (h) => (a(u, h), u);
  return a(f), { ...n2, containerQueries: f };
}
const nx = { borderRadius: 4 };
function hu(n2, r) {
  return r ? Pn(n2, r, { clone: false }) : n2;
}
const Rf = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, Hv = { keys: ["xs", "sm", "md", "lg", "xl"], up: (n2) => `@media (min-width:${Rf[n2]}px)` }, ix = { containerQueries: (n2) => ({ up: (r) => {
  let a = typeof r == "number" ? r : Rf[r] || r;
  return typeof a == "number" && (a = `${a}px`), n2 ? `@container ${n2} (min-width:${a})` : `@container (min-width:${a})`;
} }) };
function So(n2, r, a) {
  const u = n2.theme || {};
  if (Array.isArray(r)) {
    const h = u.breakpoints || Hv;
    return r.reduce((g, v, y) => (g[h.up(h.keys[y])] = a(r[y]), g), {});
  }
  if (typeof r == "object") {
    const h = u.breakpoints || Hv;
    return Object.keys(r).reduce((g, v) => {
      if (Jb(h.keys, v)) {
        const y = tx(u.containerQueries ? u : ix, v);
        y && (g[y] = a(r[v], v));
      } else if (Object.keys(h.values || Rf).includes(v)) {
        const y = h.up(v);
        g[y] = a(r[v], v);
      } else {
        const y = v;
        g[y] = r[y];
      }
      return g;
    }, {});
  }
  return a(r);
}
function m1(n2 = {}) {
  var _a2;
  return ((_a2 = n2.keys) == null ? void 0 : _a2.reduce((a, u) => {
    const f = n2.up(u);
    return a[f] = {}, a;
  }, {})) || {};
}
function gp(n2, r) {
  return n2.reduce((a, u) => {
    const f = a[u];
    return (!f || Object.keys(f).length === 0) && delete a[u], a;
  }, r);
}
function ox(n2, ...r) {
  const a = m1(n2), u = [a, ...r].reduce((f, h) => Pn(f, h), {});
  return gp(Object.keys(a), u);
}
function rx(n2, r) {
  if (typeof n2 != "object") return {};
  const a = {}, u = Object.keys(r);
  return Array.isArray(n2) ? u.forEach((f, h) => {
    h < n2.length && (a[f] = true);
  }) : u.forEach((f) => {
    n2[f] != null && (a[f] = true);
  }), a;
}
function Xh({ values: n2, breakpoints: r, base: a }) {
  const u = a || rx(n2, r), f = Object.keys(u);
  if (f.length === 0) return n2;
  let h;
  return f.reduce((g, v, y) => (Array.isArray(n2) ? (g[v] = n2[y] != null ? n2[y] : n2[h], h = y) : typeof n2 == "object" ? (g[v] = n2[v] != null ? n2[v] : n2[h], h = v) : g[v] = n2, g), {});
}
function wt(n2) {
  if (typeof n2 != "string") throw new Error(Sr(7));
  return n2.charAt(0).toUpperCase() + n2.slice(1);
}
function Ho(n2, r, a = true) {
  if (!r || typeof r != "string") return null;
  if (n2 && n2.vars && a) {
    const u = `vars.${r}`.split(".").reduce((f, h) => f && f[h] ? f[h] : null, n2);
    if (u != null) return u;
  }
  return r.split(".").reduce((u, f) => u && u[f] != null ? u[f] : null, n2);
}
function vf(n2, r, a, u = a) {
  let f;
  return typeof n2 == "function" ? f = n2(a) : Array.isArray(n2) ? f = n2[a] || u : f = Ho(n2, a) || u, r && (f = r(f, u, n2)), f;
}
function _n(n2) {
  const { prop: r, cssProperty: a = n2.prop, themeKey: u, transform: f } = n2, h = (g) => {
    if (g[r] == null) return null;
    const v = g[r], y = g.theme, b = Ho(y, u) || {};
    return So(g, v, (E) => {
      let R = vf(b, f, E);
      return E === R && typeof E == "string" && (R = vf(b, f, `${r}${E === "default" ? "" : wt(E)}`, E)), a === false ? R : { [a]: R };
    });
  };
  return h.propTypes = {}, h.filterProps = [r], h;
}
function ax(n2) {
  const r = {};
  return (a) => (r[a] === void 0 && (r[a] = n2(a)), r[a]);
}
const sx = { m: "margin", p: "padding" }, lx = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] }, Uv = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" }, ux = ax((n2) => {
  if (n2.length > 2) if (Uv[n2]) n2 = Uv[n2];
  else return [n2];
  const [r, a] = n2.split(""), u = sx[r], f = lx[a] || "";
  return Array.isArray(f) ? f.map((h) => u + h) : [u + f];
}), Gp = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], qp = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Gp, ...qp];
function Lu(n2, r, a, u) {
  const f = Ho(n2, r, true) ?? a;
  return typeof f == "number" || typeof f == "string" ? (h) => typeof h == "string" ? h : typeof f == "string" ? f.startsWith("var(") && h === 0 ? 0 : f.startsWith("var(") && h === 1 ? f : `calc(${h} * ${f})` : f * h : Array.isArray(f) ? (h) => {
    if (typeof h == "string") return h;
    const g = Math.abs(h), v = f[g];
    return h >= 0 ? v : typeof v == "number" ? -v : typeof v == "string" && v.startsWith("var(") ? `calc(-1 * ${v})` : `-${v}`;
  } : typeof f == "function" ? f : () => {
  };
}
function kf(n2) {
  return Lu(n2, "spacing", 8);
}
function es(n2, r) {
  return typeof r == "string" || r == null ? r : n2(r);
}
function cx(n2, r) {
  return (a) => n2.reduce((u, f) => (u[f] = es(r, a), u), {});
}
function fx(n2, r, a, u) {
  if (!r.includes(a)) return null;
  const f = ux(a), h = cx(f, u), g = n2[a];
  return So(n2, g, h);
}
function g1(n2, r) {
  const a = kf(n2.theme);
  return Object.keys(n2).map((u) => fx(n2, r, u, a)).reduce(hu, {});
}
function pn(n2) {
  return g1(n2, Gp);
}
pn.propTypes = {};
pn.filterProps = Gp;
function mn(n2) {
  return g1(n2, qp);
}
mn.propTypes = {};
mn.filterProps = qp;
function v1(n2 = 8, r = kf({ spacing: n2 })) {
  if (n2.mui) return n2;
  const a = (...u) => (u.length === 0 ? [1] : u).map((h) => {
    const g = r(h);
    return typeof g == "number" ? `${g}px` : g;
  }).join(" ");
  return a.mui = true, a;
}
function Lf(...n2) {
  const r = n2.reduce((u, f) => (f.filterProps.forEach((h) => {
    u[h] = f;
  }), u), {}), a = (u) => Object.keys(u).reduce((f, h) => r[h] ? hu(f, r[h](u)) : f, {});
  return a.propTypes = {}, a.filterProps = n2.reduce((u, f) => u.concat(f.filterProps), []), a;
}
function io(n2) {
  return typeof n2 != "number" ? n2 : `${n2}px solid`;
}
function so(n2, r) {
  return _n({ prop: n2, themeKey: "borders", transform: r });
}
const dx = so("border", io), hx = so("borderTop", io), px = so("borderRight", io), mx = so("borderBottom", io), gx = so("borderLeft", io), vx = so("borderColor"), yx = so("borderTopColor"), _x = so("borderRightColor"), bx = so("borderBottomColor"), xx = so("borderLeftColor"), Sx = so("outline", io), wx = so("outlineColor"), zf = (n2) => {
  if (n2.borderRadius !== void 0 && n2.borderRadius !== null) {
    const r = Lu(n2.theme, "shape.borderRadius", 4), a = (u) => ({ borderRadius: es(r, u) });
    return So(n2, n2.borderRadius, a);
  }
  return null;
};
zf.propTypes = {};
zf.filterProps = ["borderRadius"];
Lf(dx, hx, px, mx, gx, vx, yx, _x, bx, xx, zf, Sx, wx);
const Pf = (n2) => {
  if (n2.gap !== void 0 && n2.gap !== null) {
    const r = Lu(n2.theme, "spacing", 8), a = (u) => ({ gap: es(r, u) });
    return So(n2, n2.gap, a);
  }
  return null;
};
Pf.propTypes = {};
Pf.filterProps = ["gap"];
const Bf = (n2) => {
  if (n2.columnGap !== void 0 && n2.columnGap !== null) {
    const r = Lu(n2.theme, "spacing", 8), a = (u) => ({ columnGap: es(r, u) });
    return So(n2, n2.columnGap, a);
  }
  return null;
};
Bf.propTypes = {};
Bf.filterProps = ["columnGap"];
const Df = (n2) => {
  if (n2.rowGap !== void 0 && n2.rowGap !== null) {
    const r = Lu(n2.theme, "spacing", 8), a = (u) => ({ rowGap: es(r, u) });
    return So(n2, n2.rowGap, a);
  }
  return null;
};
Df.propTypes = {};
Df.filterProps = ["rowGap"];
const Cx = _n({ prop: "gridColumn" }), Tx = _n({ prop: "gridRow" }), Ex = _n({ prop: "gridAutoFlow" }), Mx = _n({ prop: "gridAutoColumns" }), Ox = _n({ prop: "gridAutoRows" }), Ax = _n({ prop: "gridTemplateColumns" }), Rx = _n({ prop: "gridTemplateRows" }), kx = _n({ prop: "gridTemplateAreas" }), Lx = _n({ prop: "gridArea" });
Lf(Pf, Bf, Df, Cx, Tx, Ex, Mx, Ox, Ax, Rx, kx, Lx);
function Ys(n2, r) {
  return r === "grey" ? r : n2;
}
const zx = _n({ prop: "color", themeKey: "palette", transform: Ys }), Px = _n({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: Ys }), Bx = _n({ prop: "backgroundColor", themeKey: "palette", transform: Ys });
Lf(zx, Px, Bx);
function Ii(n2) {
  return n2 <= 1 && n2 !== 0 ? `${n2 * 100}%` : n2;
}
const Dx = _n({ prop: "width", transform: Ii }), Yp = (n2) => {
  if (n2.maxWidth !== void 0 && n2.maxWidth !== null) {
    const r = (a) => {
      var _a2, _b2, _c, _d, _e;
      const u = ((_c = (_b2 = (_a2 = n2.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c[a]) || Rf[a];
      return u ? ((_e = (_d = n2.theme) == null ? void 0 : _d.breakpoints) == null ? void 0 : _e.unit) !== "px" ? { maxWidth: `${u}${n2.theme.breakpoints.unit}` } : { maxWidth: u } : { maxWidth: Ii(a) };
    };
    return So(n2, n2.maxWidth, r);
  }
  return null;
};
Yp.filterProps = ["maxWidth"];
const Nx = _n({ prop: "minWidth", transform: Ii }), $x = _n({ prop: "height", transform: Ii }), Ix = _n({ prop: "maxHeight", transform: Ii }), jx = _n({ prop: "minHeight", transform: Ii });
_n({ prop: "size", cssProperty: "width", transform: Ii });
_n({ prop: "size", cssProperty: "height", transform: Ii });
const Hx = _n({ prop: "boxSizing" });
Lf(Dx, Yp, Nx, $x, Ix, jx, Hx);
const zu = { border: { themeKey: "borders", transform: io }, borderTop: { themeKey: "borders", transform: io }, borderRight: { themeKey: "borders", transform: io }, borderBottom: { themeKey: "borders", transform: io }, borderLeft: { themeKey: "borders", transform: io }, borderColor: { themeKey: "palette" }, borderTopColor: { themeKey: "palette" }, borderRightColor: { themeKey: "palette" }, borderBottomColor: { themeKey: "palette" }, borderLeftColor: { themeKey: "palette" }, outline: { themeKey: "borders", transform: io }, outlineColor: { themeKey: "palette" }, borderRadius: { themeKey: "shape.borderRadius", style: zf }, color: { themeKey: "palette", transform: Ys }, bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: Ys }, backgroundColor: { themeKey: "palette", transform: Ys }, p: { style: mn }, pt: { style: mn }, pr: { style: mn }, pb: { style: mn }, pl: { style: mn }, px: { style: mn }, py: { style: mn }, padding: { style: mn }, paddingTop: { style: mn }, paddingRight: { style: mn }, paddingBottom: { style: mn }, paddingLeft: { style: mn }, paddingX: { style: mn }, paddingY: { style: mn }, paddingInline: { style: mn }, paddingInlineStart: { style: mn }, paddingInlineEnd: { style: mn }, paddingBlock: { style: mn }, paddingBlockStart: { style: mn }, paddingBlockEnd: { style: mn }, m: { style: pn }, mt: { style: pn }, mr: { style: pn }, mb: { style: pn }, ml: { style: pn }, mx: { style: pn }, my: { style: pn }, margin: { style: pn }, marginTop: { style: pn }, marginRight: { style: pn }, marginBottom: { style: pn }, marginLeft: { style: pn }, marginX: { style: pn }, marginY: { style: pn }, marginInline: { style: pn }, marginInlineStart: { style: pn }, marginInlineEnd: { style: pn }, marginBlock: { style: pn }, marginBlockStart: { style: pn }, marginBlockEnd: { style: pn }, displayPrint: { cssProperty: false, transform: (n2) => ({ "@media print": { display: n2 } }) }, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: { style: Pf }, rowGap: { style: Df }, columnGap: { style: Bf }, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: { themeKey: "zIndex" }, top: {}, right: {}, bottom: {}, left: {}, boxShadow: { themeKey: "shadows" }, width: { transform: Ii }, maxWidth: { style: Yp }, minWidth: { transform: Ii }, height: { transform: Ii }, maxHeight: { transform: Ii }, minHeight: { transform: Ii }, boxSizing: {}, font: { themeKey: "font" }, fontFamily: { themeKey: "typography" }, fontSize: { themeKey: "typography" }, fontStyle: { themeKey: "typography" }, fontWeight: { themeKey: "typography" }, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: { cssProperty: false, themeKey: "typography" } };
function Ux(...n2) {
  const r = n2.reduce((u, f) => u.concat(Object.keys(f)), []), a = new Set(r);
  return n2.every((u) => a.size === Object.keys(u).length);
}
function Fx(n2, r) {
  return typeof n2 == "function" ? n2(r) : n2;
}
function Zx() {
  function n2(a, u, f, h) {
    const g = { [a]: u, theme: f }, v = h[a];
    if (!v) return { [a]: u };
    const { cssProperty: y = a, themeKey: b, transform: S, style: E } = v;
    if (u == null) return null;
    if (b === "typography" && u === "inherit") return { [a]: u };
    const R = Ho(f, b) || {};
    return E ? E(g) : So(g, u, (A) => {
      let O = vf(R, S, A);
      return A === O && typeof A == "string" && (O = vf(R, S, `${a}${A === "default" ? "" : wt(A)}`, A)), y === false ? O : { [y]: O };
    });
  }
  function r(a) {
    const { sx: u, theme: f = {}, nested: h } = a || {};
    if (!u) return null;
    const g = f.unstable_sxConfig ?? zu;
    function v(y) {
      let b = y;
      if (typeof y == "function") b = y(f);
      else if (typeof y != "object") return y;
      if (!b) return null;
      const S = m1(f.breakpoints), E = Object.keys(S);
      let R = S;
      return Object.keys(b).forEach((k) => {
        const A = Fx(b[k], f);
        if (A != null) if (typeof A == "object") if (g[k]) R = hu(R, n2(k, A, f, g));
        else {
          const O = So({ theme: f }, A, ($) => ({ [k]: $ }));
          Ux(O, A) ? R[k] = r({ sx: A, theme: f, nested: true }) : R = hu(R, O);
        }
        else R = hu(R, n2(k, A, f, g));
      }), !h && f.modularCssLayers ? { "@layer sx": jv(f, gp(E, R)) } : jv(f, gp(E, R));
    }
    return Array.isArray(u) ? u.map(v) : v(u);
  }
  return r;
}
const va = Zx();
va.filterProps = ["sx"];
function Vx(n2, r) {
  var _a2;
  const a = this;
  if (a.vars) {
    if (!((_a2 = a.colorSchemes) == null ? void 0 : _a2[n2]) || typeof a.getColorSchemeSelector != "function") return {};
    let u = a.getColorSchemeSelector(n2);
    return u === "&" ? r : ((u.includes("data-") || u.includes(".")) && (u = `*:where(${u.replace(/\s*&$/, "")}) &`), { [u]: r });
  }
  return a.palette.mode === n2 ? r : {};
}
function Nf(n2 = {}, ...r) {
  const { breakpoints: a = {}, palette: u = {}, spacing: f, shape: h = {}, ...g } = n2, v = Qb(a), y = v1(f);
  let b = Pn({ breakpoints: v, direction: "ltr", components: {}, palette: { mode: "light", ...u }, spacing: y, shape: { ...nx, ...h } }, g);
  return b = ex(b), b.applyStyles = Vx, b = r.reduce((S, E) => Pn(S, E), b), b.unstable_sxConfig = { ...zu, ...g == null ? void 0 : g.unstable_sxConfig }, b.unstable_sx = function(E) {
    return va({ sx: E, theme: this });
  }, b;
}
function Gx(n2) {
  return Object.keys(n2).length === 0;
}
function Kp(n2 = null) {
  const r = M.useContext(Ru);
  return !r || Gx(r) ? n2 : r;
}
const qx = Nf();
function $f(n2 = qx) {
  return Kp(n2);
}
function Wh(n2) {
  const r = ga(n2);
  return n2 !== r && r.styles ? (r.styles.match(/^@layer\s+[^{]*$/) || (r.styles = `@layer global{${r.styles}}`), r) : n2;
}
function y1({ styles: n2, themeId: r, defaultTheme: a = {} }) {
  const u = $f(a), f = r && u[r] || u;
  let h = typeof n2 == "function" ? n2(f) : n2;
  return f.modularCssLayers && (Array.isArray(h) ? h = h.map((g) => Wh(typeof g == "function" ? g(f) : g)) : h = Wh(h)), I.jsx(f1, { styles: h });
}
const Yx = (n2) => {
  var _a2;
  const r = { systemProps: {}, otherProps: {} }, a = ((_a2 = n2 == null ? void 0 : n2.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? zu;
  return Object.keys(n2).forEach((u) => {
    a[u] ? r.systemProps[u] = n2[u] : r.otherProps[u] = n2[u];
  }), r;
};
function Xp(n2) {
  const { sx: r, ...a } = n2, { systemProps: u, otherProps: f } = Yx(a);
  let h;
  return Array.isArray(r) ? h = [u, ...r] : typeof r == "function" ? h = (...g) => {
    const v = r(...g);
    return Uo(v) ? { ...u, ...v } : u;
  } : h = { ...u, ...r }, { ...f, sx: h };
}
const Fv = (n2) => n2, Kx = () => {
  let n2 = Fv;
  return { configure(r) {
    n2 = r;
  }, generate(r) {
    return n2(r);
  }, reset() {
    n2 = Fv;
  } };
}, _1 = Kx();
function b1(n2) {
  var r, a, u = "";
  if (typeof n2 == "string" || typeof n2 == "number") u += n2;
  else if (typeof n2 == "object") if (Array.isArray(n2)) {
    var f = n2.length;
    for (r = 0; r < f; r++) n2[r] && (a = b1(n2[r])) && (u && (u += " "), u += a);
  } else for (a in n2) n2[a] && (u && (u += " "), u += a);
  return u;
}
function qt() {
  for (var n2, r, a = 0, u = "", f = arguments.length; a < f; a++) (n2 = arguments[a]) && (r = b1(n2)) && (u && (u += " "), u += r);
  return u;
}
function Xx(n2 = {}) {
  const { themeId: r, defaultTheme: a, defaultClassName: u = "MuiBox-root", generateClassName: f } = n2, h = d1("div", { shouldForwardProp: (v) => v !== "theme" && v !== "sx" && v !== "as" })(va);
  return M.forwardRef(function(y, b) {
    const S = $f(a), { className: E, component: R = "div", ...k } = Xp(y);
    return I.jsx(h, { as: R, ref: b, className: qt(E, f ? f(u) : u), theme: r && S[r] || S, ...k });
  });
}
const Wx = { active: "active", checked: "checked", completed: "completed", disabled: "disabled", error: "error", expanded: "expanded", focused: "focused", focusVisible: "focusVisible", open: "open", readOnly: "readOnly", required: "required", selected: "selected" };
function Re(n2, r, a = "Mui") {
  const u = Wx[r];
  return u ? `${a}-${u}` : `${_1.generate(n2)}-${r}`;
}
function ke(n2, r, a = "Mui") {
  const u = {};
  return r.forEach((f) => {
    u[f] = Re(n2, f, a);
  }), u;
}
function x1(n2) {
  const { variants: r, ...a } = n2, u = { variants: r, style: ga(a), isProcessed: true };
  return u.style === a || r && r.forEach((f) => {
    typeof f.style != "function" && (f.style = ga(f.style));
  }), u;
}
const Qx = Nf();
function Qh(n2) {
  return n2 !== "ownerState" && n2 !== "theme" && n2 !== "sx" && n2 !== "as";
}
function Wa(n2, r) {
  return r && n2 && typeof n2 == "object" && n2.styles && !n2.styles.startsWith("@layer") && (n2.styles = `@layer ${r}{${String(n2.styles)}}`), n2;
}
function Jx(n2) {
  return n2 ? (r, a) => a[n2] : null;
}
function tS(n2, r, a) {
  n2.theme = nS(n2.theme) ? a : n2.theme[r] || n2.theme;
}
function df(n2, r, a) {
  const u = typeof r == "function" ? r(n2) : r;
  if (Array.isArray(u)) return u.flatMap((f) => df(n2, f, a));
  if (Array.isArray(u == null ? void 0 : u.variants)) {
    let f;
    if (u.isProcessed) f = a ? Wa(u.style, a) : u.style;
    else {
      const { variants: h, ...g } = u;
      f = a ? Wa(ga(g), a) : g;
    }
    return S1(n2, u.variants, [f], a);
  }
  return (u == null ? void 0 : u.isProcessed) ? a ? Wa(ga(u.style), a) : u.style : a ? Wa(ga(u), a) : u;
}
function S1(n2, r, a = [], u = void 0) {
  var _a2;
  let f;
  t: for (let h = 0; h < r.length; h += 1) {
    const g = r[h];
    if (typeof g.props == "function") {
      if (f ?? (f = { ...n2, ...n2.ownerState, ownerState: n2.ownerState }), !g.props(f)) continue;
    } else for (const v in g.props) if (n2[v] !== g.props[v] && ((_a2 = n2.ownerState) == null ? void 0 : _a2[v]) !== g.props[v]) continue t;
    typeof g.style == "function" ? (f ?? (f = { ...n2, ...n2.ownerState, ownerState: n2.ownerState }), a.push(u ? Wa(ga(g.style(f)), u) : g.style(f))) : a.push(u ? Wa(ga(g.style), u) : g.style);
  }
  return a;
}
function w1(n2 = {}) {
  const { themeId: r, defaultTheme: a = Qx, rootShouldForwardProp: u = Qh, slotShouldForwardProp: f = Qh } = n2;
  function h(v) {
    tS(v, r, a);
  }
  return (v, y = {}) => {
    Yb(v, (U) => U.filter((K) => K !== va));
    const { name: b, slot: S, skipVariantsResolver: E, skipSx: R, overridesResolver: k = Jx(oS(S)), ...A } = y, O = b && b.startsWith("Mui") || S ? "components" : "custom", $ = E !== void 0 ? E : S && S !== "Root" && S !== "root" || false, F = R || false;
    let V = Qh;
    S === "Root" || S === "root" ? V = u : S ? V = f : iS(v) && (V = void 0);
    const D = d1(v, { shouldForwardProp: V, label: eS(), ...A }), N = (U) => {
      if (U.__emotion_real === U) return U;
      if (typeof U == "function") return function(J) {
        return df(J, U, J.theme.modularCssLayers ? O : void 0);
      };
      if (Uo(U)) {
        const K = x1(U);
        return function(it) {
          return K.variants ? df(it, K, it.theme.modularCssLayers ? O : void 0) : it.theme.modularCssLayers ? Wa(K.style, O) : K.style;
        };
      }
      return U;
    }, P = (...U) => {
      const K = [], J = U.map(N), it = [];
      if (K.push(h), b && k && it.push(function(st) {
        var _a2, _b2;
        const et = (_b2 = (_a2 = st.theme.components) == null ? void 0 : _a2[b]) == null ? void 0 : _b2.styleOverrides;
        if (!et) return null;
        const B = {};
        for (const tt in et) B[tt] = df(st, et[tt], st.theme.modularCssLayers ? "theme" : void 0);
        return k(st, B);
      }), b && !$ && it.push(function(st) {
        var _a2, _b2, _c;
        const et = (_c = (_b2 = (_a2 = st.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b2[b]) == null ? void 0 : _c.variants;
        return et ? S1(st, et, [], st.theme.modularCssLayers ? "theme" : void 0) : null;
      }), F || it.push(va), Array.isArray(J[0])) {
        const w = J.shift(), st = new Array(K.length).fill(""), W = new Array(it.length).fill("");
        let et;
        et = [...st, ...w, ...W], et.raw = [...st, ...w.raw, ...W], K.unshift(et);
      }
      const ut = [...K, ...J, ...it], ot = D(...ut);
      return v.muiName && (ot.muiName = v.muiName), ot;
    };
    return D.withConfig && (P.withConfig = D.withConfig), P;
  };
}
function eS(n2, r) {
  return void 0;
}
function nS(n2) {
  for (const r in n2) return false;
  return true;
}
function iS(n2) {
  return typeof n2 == "string" && n2.charCodeAt(0) > 96;
}
function oS(n2) {
  return n2 && n2.charAt(0).toLowerCase() + n2.slice(1);
}
const rS = w1();
function Su(n2, r, a = false) {
  const u = { ...r };
  for (const f in n2) if (Object.prototype.hasOwnProperty.call(n2, f)) {
    const h = f;
    if (h === "components" || h === "slots") u[h] = { ...n2[h], ...u[h] };
    else if (h === "componentsProps" || h === "slotProps") {
      const g = n2[h], v = r[h];
      if (!v) u[h] = g || {};
      else if (!g) u[h] = v;
      else {
        u[h] = { ...v };
        for (const y in g) if (Object.prototype.hasOwnProperty.call(g, y)) {
          const b = y;
          u[h][b] = Su(g[b], v[b], a);
        }
      }
    } else h === "className" && a && r.className ? u.className = qt(n2 == null ? void 0 : n2.className, r == null ? void 0 : r.className) : h === "style" && a && r.style ? u.style = { ...n2 == null ? void 0 : n2.style, ...r == null ? void 0 : r.style } : u[h] === void 0 && (u[h] = n2[h]);
  }
  return u;
}
function aS(n2) {
  const { theme: r, name: a, props: u } = n2;
  return !r || !r.components || !r.components[a] || !r.components[a].defaultProps ? u : Su(r.components[a].defaultProps, u);
}
function sS({ props: n2, name: r, defaultTheme: a, themeId: u }) {
  let f = $f(a);
  return u && (f = f[u] || f), aS({ theme: f, name: r, props: n2 });
}
const wo = typeof window < "u" ? M.useLayoutEffect : M.useEffect;
function lS(n2, r = Number.MIN_SAFE_INTEGER, a = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(n2, a));
}
function Wp(n2, r = 0, a = 1) {
  return lS(n2, r, a);
}
function uS(n2) {
  n2 = n2.slice(1);
  const r = new RegExp(`.{1,${n2.length >= 6 ? 2 : 1}}`, "g");
  let a = n2.match(r);
  return a && a[0].length === 1 && (a = a.map((u) => u + u)), a ? `rgb${a.length === 4 ? "a" : ""}(${a.map((u, f) => f < 3 ? parseInt(u, 16) : Math.round(parseInt(u, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ya(n2) {
  if (n2.type) return n2;
  if (n2.charAt(0) === "#") return ya(uS(n2));
  const r = n2.indexOf("("), a = n2.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(a)) throw new Error(Sr(9, n2));
  let u = n2.substring(r + 1, n2.length - 1), f;
  if (a === "color") {
    if (u = u.split(" "), f = u.shift(), u.length === 4 && u[3].charAt(0) === "/" && (u[3] = u[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(f)) throw new Error(Sr(10, f));
  } else u = u.split(",");
  return u = u.map((h) => parseFloat(h)), { type: a, values: u, colorSpace: f };
}
const cS = (n2) => {
  const r = ya(n2);
  return r.values.slice(0, 3).map((a, u) => r.type.includes("hsl") && u !== 0 ? `${a}%` : a).join(" ");
}, lu = (n2, r) => {
  try {
    return cS(n2);
  } catch {
    return n2;
  }
};
function If(n2) {
  const { type: r, colorSpace: a } = n2;
  let { values: u } = n2;
  return r.includes("rgb") ? u = u.map((f, h) => h < 3 ? parseInt(f, 10) : f) : r.includes("hsl") && (u[1] = `${u[1]}%`, u[2] = `${u[2]}%`), r.includes("color") ? u = `${a} ${u.join(" ")}` : u = `${u.join(", ")}`, `${r}(${u})`;
}
function C1(n2) {
  n2 = ya(n2);
  const { values: r } = n2, a = r[0], u = r[1] / 100, f = r[2] / 100, h = u * Math.min(f, 1 - f), g = (b, S = (b + a / 30) % 12) => f - h * Math.max(Math.min(S - 3, 9 - S, 1), -1);
  let v = "rgb";
  const y = [Math.round(g(0) * 255), Math.round(g(8) * 255), Math.round(g(4) * 255)];
  return n2.type === "hsla" && (v += "a", y.push(r[3])), If({ type: v, values: y });
}
function vp(n2) {
  n2 = ya(n2);
  let r = n2.type === "hsl" || n2.type === "hsla" ? ya(C1(n2)).values : n2.values;
  return r = r.map((a) => (n2.type !== "color" && (a /= 255), a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function fS(n2, r) {
  const a = vp(n2), u = vp(r);
  return (Math.max(a, u) + 0.05) / (Math.min(a, u) + 0.05);
}
function wu(n2, r) {
  return n2 = ya(n2), r = Wp(r), (n2.type === "rgb" || n2.type === "hsl") && (n2.type += "a"), n2.type === "color" ? n2.values[3] = `/${r}` : n2.values[3] = r, If(n2);
}
function qa(n2, r, a) {
  try {
    return wu(n2, r);
  } catch {
    return n2;
  }
}
function Ja(n2, r) {
  if (n2 = ya(n2), r = Wp(r), n2.type.includes("hsl")) n2.values[2] *= 1 - r;
  else if (n2.type.includes("rgb") || n2.type.includes("color")) for (let a = 0; a < 3; a += 1) n2.values[a] *= 1 - r;
  return If(n2);
}
function Ne(n2, r, a) {
  try {
    return Ja(n2, r);
  } catch {
    return n2;
  }
}
function jf(n2, r) {
  if (n2 = ya(n2), r = Wp(r), n2.type.includes("hsl")) n2.values[2] += (100 - n2.values[2]) * r;
  else if (n2.type.includes("rgb")) for (let a = 0; a < 3; a += 1) n2.values[a] += (255 - n2.values[a]) * r;
  else if (n2.type.includes("color")) for (let a = 0; a < 3; a += 1) n2.values[a] += (1 - n2.values[a]) * r;
  return If(n2);
}
function $e(n2, r, a) {
  try {
    return jf(n2, r);
  } catch {
    return n2;
  }
}
function dS(n2, r = 0.15) {
  return vp(n2) > 0.5 ? Ja(n2, r) : jf(n2, r);
}
function tf(n2, r, a) {
  try {
    return dS(n2, r);
  } catch {
    return n2;
  }
}
const T1 = M.createContext(null);
function Qp() {
  return M.useContext(T1);
}
const hS = typeof Symbol == "function" && Symbol.for, pS = hS ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function mS(n2, r) {
  return typeof r == "function" ? r(n2) : { ...n2, ...r };
}
function gS(n2) {
  const { children: r, theme: a } = n2, u = Qp(), f = M.useMemo(() => {
    const h = u === null ? { ...a } : mS(u, a);
    return h != null && (h[pS] = u !== null), h;
  }, [a, u]);
  return I.jsx(T1.Provider, { value: f, children: r });
}
const E1 = M.createContext();
function vS({ value: n2, ...r }) {
  return I.jsx(E1.Provider, { value: n2 ?? true, ...r });
}
const M1 = () => M.useContext(E1) ?? false, O1 = M.createContext(void 0);
function yS({ value: n2, children: r }) {
  return I.jsx(O1.Provider, { value: n2, children: r });
}
function _S(n2) {
  const { theme: r, name: a, props: u } = n2;
  if (!r || !r.components || !r.components[a]) return u;
  const f = r.components[a];
  return f.defaultProps ? Su(f.defaultProps, u, r.components.mergeClassNameAndStyle) : !f.styleOverrides && !f.variants ? Su(f, u, r.components.mergeClassNameAndStyle) : u;
}
function bS({ props: n2, name: r }) {
  const a = M.useContext(O1);
  return _S({ props: n2, name: r, theme: { components: a } });
}
let Zv = 0;
function xS(n2) {
  const [r, a] = M.useState(n2), u = n2 || r;
  return M.useEffect(() => {
    r == null && (Zv += 1, a(`mui-${Zv}`));
  }, [r]), u;
}
const SS = { ...fp }, Vv = SS.useId;
function el(n2) {
  if (Vv !== void 0) {
    const r = Vv();
    return n2 ?? r;
  }
  return xS(n2);
}
function wS(n2) {
  const r = Kp(), a = el() || "", { modularCssLayers: u } = n2;
  let f = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !u || r !== null ? f = "" : typeof u == "string" ? f = u.replace(/mui(?!\.)/g, f) : f = `@layer ${f};`, wo(() => {
    var _a2, _b2;
    const h = document.querySelector("head");
    if (!h) return;
    const g = h.firstChild;
    if (f) {
      if (g && ((_a2 = g.hasAttribute) == null ? void 0 : _a2.call(g, "data-mui-layer-order")) && g.getAttribute("data-mui-layer-order") === a) return;
      const v = document.createElement("style");
      v.setAttribute("data-mui-layer-order", a), v.textContent = f, h.prepend(v);
    } else (_b2 = h.querySelector(`style[data-mui-layer-order="${a}"]`)) == null ? void 0 : _b2.remove();
  }, [f, a]), f ? I.jsx(y1, { styles: f }) : null;
}
const Gv = {};
function qv(n2, r, a, u = false) {
  return M.useMemo(() => {
    const f = n2 && r[n2] || r;
    if (typeof a == "function") {
      const h = a(f), g = n2 ? { ...r, [n2]: h } : h;
      return u ? () => g : g;
    }
    return n2 ? { ...r, [n2]: a } : { ...r, ...a };
  }, [n2, r, a, u]);
}
function A1(n2) {
  const { children: r, theme: a, themeId: u } = n2, f = Kp(Gv), h = Qp() || Gv, g = qv(u, f, a), v = qv(u, h, a, true), y = (u ? g[u] : g).direction === "rtl", b = wS(g);
  return I.jsx(gS, { theme: v, children: I.jsx(Ru.Provider, { value: g, children: I.jsx(vS, { value: y, children: I.jsxs(yS, { value: u ? g[u].components : g.components, children: [b, r] }) }) }) });
}
const Yv = { theme: void 0 };
function CS(n2) {
  let r, a;
  return function(f) {
    let h = r;
    return (h === void 0 || f.theme !== a) && (Yv.theme = f.theme, h = x1(n2(Yv)), r = h, a = f.theme), h;
  };
}
const Jp = "mode", tm = "color-scheme", TS = "data-color-scheme";
function ES(n2) {
  const { defaultMode: r = "system", defaultLightColorScheme: a = "light", defaultDarkColorScheme: u = "dark", modeStorageKey: f = Jp, colorSchemeStorageKey: h = tm, attribute: g = TS, colorSchemeNode: v = "document.documentElement", nonce: y } = n2 || {};
  let b = "", S = g;
  if (g === "class" && (S = ".%s"), g === "data" && (S = "[data-%s]"), S.startsWith(".")) {
    const R = S.substring(1);
    b += `${v}.classList.remove('${R}'.replace('%s', light), '${R}'.replace('%s', dark));
      ${v}.classList.add('${R}'.replace('%s', colorScheme));`;
  }
  const E = S.match(/\[([^[\]]+)\]/);
  if (E) {
    const [R, k] = E[1].split("=");
    k || (b += `${v}.removeAttribute('${R}'.replace('%s', light));
      ${v}.removeAttribute('${R}'.replace('%s', dark));`), b += `
      ${v}.setAttribute('${R}'.replace('%s', colorScheme), ${k ? `${k}.replace('%s', colorScheme)` : '""'});`;
  } else b += `${v}.setAttribute('${S}', colorScheme);`;
  return I.jsx("script", { suppressHydrationWarning: true, nonce: typeof window > "u" ? y : "", dangerouslySetInnerHTML: { __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${f}') || '${r}';
  const dark = localStorage.getItem('${h}-dark') || '${u}';
  const light = localStorage.getItem('${h}-light') || '${a}';
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
    ${b}
  }
} catch(e){}})();` } }, "mui-color-scheme-init");
}
function MS() {
}
const OS = ({ key: n2, storageWindow: r }) => (!r && typeof window < "u" && (r = window), { get(a) {
  if (typeof window > "u") return;
  if (!r) return a;
  let u;
  try {
    u = r.localStorage.getItem(n2);
  } catch {
  }
  return u || a;
}, set: (a) => {
  if (r) try {
    r.localStorage.setItem(n2, a);
  } catch {
  }
}, subscribe: (a) => {
  if (!r) return MS;
  const u = (f) => {
    const h = f.newValue;
    f.key === n2 && a(h);
  };
  return r.addEventListener("storage", u), () => {
    r.removeEventListener("storage", u);
  };
} });
function Jh() {
}
function Kv(n2) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && n2 === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function R1(n2, r) {
  if (n2.mode === "light" || n2.mode === "system" && n2.systemMode === "light") return r("light");
  if (n2.mode === "dark" || n2.mode === "system" && n2.systemMode === "dark") return r("dark");
}
function AS(n2) {
  return R1(n2, (r) => {
    if (r === "light") return n2.lightColorScheme;
    if (r === "dark") return n2.darkColorScheme;
  });
}
function RS(n2) {
  const { defaultMode: r = "light", defaultLightColorScheme: a, defaultDarkColorScheme: u, supportedColorSchemes: f = [], modeStorageKey: h = Jp, colorSchemeStorageKey: g = tm, storageWindow: v = typeof window > "u" ? void 0 : window, storageManager: y = OS, noSsr: b = false } = n2, S = f.join(","), E = f.length > 1, R = M.useMemo(() => y == null ? void 0 : y({ key: h, storageWindow: v }), [y, h, v]), k = M.useMemo(() => y == null ? void 0 : y({ key: `${g}-light`, storageWindow: v }), [y, g, v]), A = M.useMemo(() => y == null ? void 0 : y({ key: `${g}-dark`, storageWindow: v }), [y, g, v]), [O, $] = M.useState(() => {
    const J = (R == null ? void 0 : R.get(r)) || r, it = (k == null ? void 0 : k.get(a)) || a, ut = (A == null ? void 0 : A.get(u)) || u;
    return { mode: J, systemMode: Kv(J), lightColorScheme: it, darkColorScheme: ut };
  }), [F, V] = M.useState(b || !E);
  M.useEffect(() => {
    V(true);
  }, []);
  const D = AS(O), N = M.useCallback((J) => {
    $((it) => {
      if (J === it.mode) return it;
      const ut = J ?? r;
      return R == null ? void 0 : R.set(ut), { ...it, mode: ut, systemMode: Kv(ut) };
    });
  }, [R, r]), P = M.useCallback((J) => {
    J ? typeof J == "string" ? J && !S.includes(J) ? console.error(`\`${J}\` does not exist in \`theme.colorSchemes\`.`) : $((it) => {
      const ut = { ...it };
      return R1(it, (ot) => {
        ot === "light" && (k == null ? void 0 : k.set(J), ut.lightColorScheme = J), ot === "dark" && (A == null ? void 0 : A.set(J), ut.darkColorScheme = J);
      }), ut;
    }) : $((it) => {
      const ut = { ...it }, ot = J.light === null ? a : J.light, w = J.dark === null ? u : J.dark;
      return ot && (S.includes(ot) ? (ut.lightColorScheme = ot, k == null ? void 0 : k.set(ot)) : console.error(`\`${ot}\` does not exist in \`theme.colorSchemes\`.`)), w && (S.includes(w) ? (ut.darkColorScheme = w, A == null ? void 0 : A.set(w)) : console.error(`\`${w}\` does not exist in \`theme.colorSchemes\`.`)), ut;
    }) : $((it) => (k == null ? void 0 : k.set(a), A == null ? void 0 : A.set(u), { ...it, lightColorScheme: a, darkColorScheme: u }));
  }, [S, k, A, a, u]), U = M.useCallback((J) => {
    O.mode === "system" && $((it) => {
      const ut = (J == null ? void 0 : J.matches) ? "dark" : "light";
      return it.systemMode === ut ? it : { ...it, systemMode: ut };
    });
  }, [O.mode]), K = M.useRef(U);
  return K.current = U, M.useEffect(() => {
    if (typeof window.matchMedia != "function" || !E) return;
    const J = (...ut) => K.current(...ut), it = window.matchMedia("(prefers-color-scheme: dark)");
    return it.addListener(J), J(it), () => {
      it.removeListener(J);
    };
  }, [E]), M.useEffect(() => {
    if (E) {
      const J = (R == null ? void 0 : R.subscribe((ot) => {
        (!ot || ["light", "dark", "system"].includes(ot)) && N(ot || r);
      })) || Jh, it = (k == null ? void 0 : k.subscribe((ot) => {
        (!ot || S.match(ot)) && P({ light: ot });
      })) || Jh, ut = (A == null ? void 0 : A.subscribe((ot) => {
        (!ot || S.match(ot)) && P({ dark: ot });
      })) || Jh;
      return () => {
        J(), it(), ut();
      };
    }
  }, [P, N, S, r, v, E, R, k, A]), { ...O, mode: F ? O.mode : void 0, systemMode: F ? O.systemMode : void 0, colorScheme: F ? D : void 0, setMode: N, setColorScheme: P };
}
const kS = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function LS(n2) {
  const { themeId: r, theme: a = {}, modeStorageKey: u = Jp, colorSchemeStorageKey: f = tm, disableTransitionOnChange: h = false, defaultColorScheme: g, resolveTheme: v } = n2, y = { allColorSchemes: [], colorScheme: void 0, darkColorScheme: void 0, lightColorScheme: void 0, mode: void 0, setColorScheme: () => {
  }, setMode: () => {
  }, systemMode: void 0 }, b = M.createContext(void 0), S = () => M.useContext(b) || y, E = {}, R = {};
  function k(F) {
    var _a2, _b2, _c, _d;
    const { children: V, theme: D, modeStorageKey: N = u, colorSchemeStorageKey: P = f, disableTransitionOnChange: U = h, storageManager: K, storageWindow: J = typeof window > "u" ? void 0 : window, documentNode: it = typeof document > "u" ? void 0 : document, colorSchemeNode: ut = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: ot = false, disableStyleSheetGeneration: w = false, defaultMode: st = "system", forceThemeRerender: W = false, noSsr: et } = F, B = M.useRef(false), tt = Qp(), rt = M.useContext(b), gt = !!rt && !ot, z = M.useMemo(() => D || (typeof a == "function" ? a() : a), [D]), q = z[r], ft = q || z, { colorSchemes: dt = E, components: bt = R, cssVarPrefix: _t } = ft, ct = Object.keys(dt).filter((ce) => !!dt[ce]).join(","), At = M.useMemo(() => ct.split(","), [ct]), Lt = typeof g == "string" ? g : g.light, $t = typeof g == "string" ? g : g.dark, Rt = dt[Lt] && dt[$t] ? st : ((_b2 = (_a2 = dt[ft.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || ((_c = ft.palette) == null ? void 0 : _c.mode), { mode: Ut, setMode: Wt, systemMode: te, lightColorScheme: Zt, darkColorScheme: de, colorScheme: ie, setColorScheme: ue } = RS({ supportedColorSchemes: At, defaultLightColorScheme: Lt, defaultDarkColorScheme: $t, modeStorageKey: N, colorSchemeStorageKey: P, defaultMode: Rt, storageManager: K, storageWindow: J, noSsr: et });
    let Ct = Ut, _e = ie;
    gt && (Ct = rt.mode, _e = rt.colorScheme);
    let Bt = _e || ft.defaultColorScheme;
    ft.vars && !W && (Bt = ft.defaultColorScheme);
    const Jt = M.useMemo(() => {
      var _a3;
      const ce = ((_a3 = ft.generateThemeVars) == null ? void 0 : _a3.call(ft)) || ft.vars, Vt = { ...ft, components: bt, colorSchemes: dt, cssVarPrefix: _t, vars: ce };
      if (typeof Vt.generateSpacing == "function" && (Vt.spacing = Vt.generateSpacing()), Bt) {
        const oe = dt[Bt];
        oe && typeof oe == "object" && Object.keys(oe).forEach((he) => {
          oe[he] && typeof oe[he] == "object" ? Vt[he] = { ...Vt[he], ...oe[he] } : Vt[he] = oe[he];
        });
      }
      return v ? v(Vt) : Vt;
    }, [ft, Bt, bt, dt, _t]), Mt = ft.colorSchemeSelector;
    wo(() => {
      if (_e && ut && Mt && Mt !== "media") {
        const ce = Mt;
        let Vt = Mt;
        if (ce === "class" && (Vt = ".%s"), ce === "data" && (Vt = "[data-%s]"), (ce == null ? void 0 : ce.startsWith("data-")) && !ce.includes("%s") && (Vt = `[${ce}="%s"]`), Vt.startsWith(".")) ut.classList.remove(...At.map((oe) => Vt.substring(1).replace("%s", oe))), ut.classList.add(Vt.substring(1).replace("%s", _e));
        else {
          const oe = Vt.replace("%s", _e).match(/\[([^\]]+)\]/);
          if (oe) {
            const [he, xe] = oe[1].split("=");
            xe || At.forEach((Ht) => {
              ut.removeAttribute(he.replace(_e, Ht));
            }), ut.setAttribute(he, xe ? xe.replace(/"|'/g, "") : "");
          } else ut.setAttribute(Vt, _e);
        }
      }
    }, [_e, Mt, ut, At]), M.useEffect(() => {
      let ce;
      if (U && B.current && it) {
        const Vt = it.createElement("style");
        Vt.appendChild(it.createTextNode(kS)), it.head.appendChild(Vt), window.getComputedStyle(it.body), ce = setTimeout(() => {
          it.head.removeChild(Vt);
        }, 1);
      }
      return () => {
        clearTimeout(ce);
      };
    }, [_e, U, it]), M.useEffect(() => (B.current = true, () => {
      B.current = false;
    }), []);
    const tn = M.useMemo(() => ({ allColorSchemes: At, colorScheme: _e, darkColorScheme: de, lightColorScheme: Zt, mode: Ct, setColorScheme: ue, setMode: Wt, systemMode: te }), [At, _e, de, Zt, Ct, ue, Wt, te, Jt.colorSchemeSelector]);
    let be = true;
    (w || ft.cssVariables === false || gt && (tt == null ? void 0 : tt.cssVarPrefix) === _t) && (be = false);
    const Ze = I.jsxs(M.Fragment, { children: [I.jsx(A1, { themeId: q ? r : void 0, theme: Jt, children: V }), be && I.jsx(f1, { styles: ((_d = Jt.generateStyleSheets) == null ? void 0 : _d.call(Jt)) || [] })] });
    return gt ? Ze : I.jsx(b.Provider, { value: tn, children: Ze });
  }
  const A = typeof g == "string" ? g : g.light, O = typeof g == "string" ? g : g.dark;
  return { CssVarsProvider: k, useColorScheme: S, getInitColorSchemeScript: (F) => ES({ colorSchemeStorageKey: f, defaultLightColorScheme: A, defaultDarkColorScheme: O, modeStorageKey: u, ...F }) };
}
function zS(n2 = "") {
  function r(...u) {
    if (!u.length) return "";
    const f = u[0];
    return typeof f == "string" && !f.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${n2 ? `${n2}-` : ""}${f}${r(...u.slice(1))})` : `, ${f}`;
  }
  return (u, ...f) => `var(--${n2 ? `${n2}-` : ""}${u}${r(...f)})`;
}
const Xv = (n2, r, a, u = []) => {
  let f = n2;
  r.forEach((h, g) => {
    g === r.length - 1 ? Array.isArray(f) ? f[Number(h)] = a : f && typeof f == "object" && (f[h] = a) : f && typeof f == "object" && (f[h] || (f[h] = u.includes(h) ? [] : {}), f = f[h]);
  });
}, PS = (n2, r, a) => {
  function u(f, h = [], g = []) {
    Object.entries(f).forEach(([v, y]) => {
      (!a || a && !a([...h, v])) && y != null && (typeof y == "object" && Object.keys(y).length > 0 ? u(y, [...h, v], Array.isArray(y) ? [...g, v] : g) : r([...h, v], y, g));
    });
  }
  u(n2);
}, BS = (n2, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((u) => n2.includes(u)) || n2[n2.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function tp(n2, r) {
  const { prefix: a, shouldSkipGeneratingVar: u } = r || {}, f = {}, h = {}, g = {};
  return PS(n2, (v, y, b) => {
    if ((typeof y == "string" || typeof y == "number") && (!u || !u(v, y))) {
      const S = `--${a ? `${a}-` : ""}${v.join("-")}`, E = BS(v, y);
      Object.assign(f, { [S]: E }), Xv(h, v, `var(${S})`, b), Xv(g, v, `var(${S}, ${E})`, b);
    }
  }, (v) => v[0] === "vars"), { css: f, vars: h, varsWithDefaults: g };
}
function DS(n2, r = {}) {
  const { getSelector: a = F, disableCssColorScheme: u, colorSchemeSelector: f, enableContrastVars: h } = r, { colorSchemes: g = {}, components: v, defaultColorScheme: y = "light", ...b } = n2, { vars: S, css: E, varsWithDefaults: R } = tp(b, r);
  let k = R;
  const A = {}, { [y]: O, ...$ } = g;
  if (Object.entries($ || {}).forEach(([N, P]) => {
    const { vars: U, css: K, varsWithDefaults: J } = tp(P, r);
    k = Pn(k, J), A[N] = { css: K, vars: U };
  }), O) {
    const { css: N, vars: P, varsWithDefaults: U } = tp(O, r);
    k = Pn(k, U), A[y] = { css: N, vars: P };
  }
  function F(N, P) {
    var _a2, _b2;
    let U = f;
    if (f === "class" && (U = ".%s"), f === "data" && (U = "[data-%s]"), (f == null ? void 0 : f.startsWith("data-")) && !f.includes("%s") && (U = `[${f}="%s"]`), N) {
      if (U === "media") return n2.defaultColorScheme === N ? ":root" : { [`@media (prefers-color-scheme: ${((_b2 = (_a2 = g[N]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || N})`]: { ":root": P } };
      if (U) return n2.defaultColorScheme === N ? `:root, ${U.replace("%s", String(N))}` : U.replace("%s", String(N));
    }
    return ":root";
  }
  return { vars: k, generateThemeVars: () => {
    let N = { ...S };
    return Object.entries(A).forEach(([, { vars: P }]) => {
      N = Pn(N, P);
    }), N;
  }, generateStyleSheets: () => {
    var _a2, _b2;
    const N = [], P = n2.defaultColorScheme || "light";
    function U(it, ut) {
      Object.keys(ut).length && N.push(typeof it == "string" ? { [it]: { ...ut } } : it);
    }
    U(a(void 0, { ...E }), E);
    const { [P]: K, ...J } = A;
    if (K) {
      const { css: it } = K, ut = (_b2 = (_a2 = g[P]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode, ot = !u && ut ? { colorScheme: ut, ...it } : { ...it };
      U(a(P, { ...ot }), ot);
    }
    return Object.entries(J).forEach(([it, { css: ut }]) => {
      var _a3, _b3;
      const ot = (_b3 = (_a3 = g[it]) == null ? void 0 : _a3.palette) == null ? void 0 : _b3.mode, w = !u && ot ? { colorScheme: ot, ...ut } : { ...ut };
      U(a(it, { ...w }), w);
    }), h && N.push({ ":root": { "--__l-threshold": "0.7", "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)", "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)" } }), N;
  } };
}
function NS(n2) {
  return function(a) {
    return n2 === "media" ? `@media (prefers-color-scheme: ${a})` : n2 ? n2.startsWith("data-") && !n2.includes("%s") ? `[${n2}="${a}"] &` : n2 === "class" ? `.${a} &` : n2 === "data" ? `[data-${a}] &` : `${n2.replace("%s", a)} &` : "&";
  };
}
function Le(n2, r, a = void 0) {
  const u = {};
  for (const f in n2) {
    const h = n2[f];
    let g = "", v = true;
    for (let y = 0; y < h.length; y += 1) {
      const b = h[y];
      b && (g += (v === true ? "" : " ") + r(b), v = false, a && a[b] && (g += " " + a[b]));
    }
    u[f] = g;
  }
  return u;
}
function ep(n2, r) {
  var _a2, _b2, _c;
  return M.isValidElement(n2) && r.indexOf(n2.type.muiName ?? ((_c = (_b2 = (_a2 = n2.type) == null ? void 0 : _a2._payload) == null ? void 0 : _b2.value) == null ? void 0 : _c.muiName)) !== -1;
}
const $S = Nf(), IS = rS("div", { name: "MuiStack", slot: "Root" });
function jS(n2) {
  return sS({ props: n2, name: "MuiStack", defaultTheme: $S });
}
function HS(n2, r) {
  const a = M.Children.toArray(n2).filter(Boolean);
  return a.reduce((u, f, h) => (u.push(f), h < a.length - 1 && u.push(M.cloneElement(r, { key: `separator-${h}` })), u), []);
}
const US = (n2) => ({ row: "Left", "row-reverse": "Right", column: "Top", "column-reverse": "Bottom" })[n2], FS = ({ ownerState: n2, theme: r }) => {
  let a = { display: "flex", flexDirection: "column", ...So({ theme: r }, Xh({ values: n2.direction, breakpoints: r.breakpoints.values }), (u) => ({ flexDirection: u })) };
  if (n2.spacing) {
    const u = kf(r), f = Object.keys(r.breakpoints.values).reduce((y, b) => ((typeof n2.spacing == "object" && n2.spacing[b] != null || typeof n2.direction == "object" && n2.direction[b] != null) && (y[b] = true), y), {}), h = Xh({ values: n2.direction, base: f }), g = Xh({ values: n2.spacing, base: f });
    typeof h == "object" && Object.keys(h).forEach((y, b, S) => {
      if (!h[y]) {
        const R = b > 0 ? h[S[b - 1]] : "column";
        h[y] = R;
      }
    }), a = Pn(a, So({ theme: r }, g, (y, b) => n2.useFlexGap ? { gap: es(u, y) } : { "& > :not(style):not(style)": { margin: 0 }, "& > :not(style) ~ :not(style)": { [`margin${US(b ? h[b] : n2.direction)}`]: es(u, y) } }));
  }
  return a = ox(r.breakpoints, a), a;
};
function ZS(n2 = {}) {
  const { createStyledComponent: r = IS, useThemeProps: a = jS, componentName: u = "MuiStack" } = n2, f = () => Le({ root: ["root"] }, (y) => Re(u, y), {}), h = r(FS);
  return M.forwardRef(function(y, b) {
    const S = a(y), E = Xp(S), { component: R = "div", direction: k = "column", spacing: A = 0, divider: O, children: $, className: F, useFlexGap: V = false, ...D } = E, N = { direction: k, spacing: A, useFlexGap: V }, P = f();
    return I.jsx(h, { as: R, ownerState: N, ref: b, className: qt(P.root, F), ...D, children: O ? HS($, O) : $ });
  });
}
const Cu = { black: "#000", white: "#fff" }, VS = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121", A100: "#f5f5f5", A200: "#eeeeee", A400: "#bdbdbd", A700: "#616161" }, js = { 50: "#f3e5f5", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 700: "#7b1fa2" }, Hs = { 300: "#e57373", 400: "#ef5350", 500: "#f44336", 700: "#d32f2f", 800: "#c62828" }, ou = { 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 700: "#f57c00", 900: "#e65100" }, Us = { 50: "#e3f2fd", 200: "#90caf9", 400: "#42a5f5", 700: "#1976d2", 800: "#1565c0" }, Fs = { 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 700: "#0288d1", 900: "#01579b" }, Zs = { 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20" };
function k1() {
  return { text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)" }, divider: "rgba(0, 0, 0, 0.12)", background: { paper: Cu.white, default: Cu.white }, action: { active: "rgba(0, 0, 0, 0.54)", hover: "rgba(0, 0, 0, 0.04)", hoverOpacity: 0.04, selected: "rgba(0, 0, 0, 0.08)", selectedOpacity: 0.08, disabled: "rgba(0, 0, 0, 0.26)", disabledBackground: "rgba(0, 0, 0, 0.12)", disabledOpacity: 0.38, focus: "rgba(0, 0, 0, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.12 } };
}
const L1 = k1();
function z1() {
  return { text: { primary: Cu.white, secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", icon: "rgba(255, 255, 255, 0.5)" }, divider: "rgba(255, 255, 255, 0.12)", background: { paper: "#121212", default: "#121212" }, action: { active: Cu.white, hover: "rgba(255, 255, 255, 0.08)", hoverOpacity: 0.08, selected: "rgba(255, 255, 255, 0.16)", selectedOpacity: 0.16, disabled: "rgba(255, 255, 255, 0.3)", disabledBackground: "rgba(255, 255, 255, 0.12)", disabledOpacity: 0.38, focus: "rgba(255, 255, 255, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.24 } };
}
const yp = z1();
function Wv(n2, r, a, u) {
  const f = u.light || u, h = u.dark || u * 1.5;
  n2[r] || (n2.hasOwnProperty(a) ? n2[r] = n2[a] : r === "light" ? n2.light = jf(n2.main, f) : r === "dark" && (n2.dark = Ja(n2.main, h)));
}
function Qv(n2, r, a, u, f) {
  const h = f.light || f, g = f.dark || f * 1.5;
  r[a] || (r.hasOwnProperty(u) ? r[a] = r[u] : a === "light" ? r.light = `color-mix(in ${n2}, ${r.main}, #fff ${(h * 100).toFixed(0)}%)` : a === "dark" && (r.dark = `color-mix(in ${n2}, ${r.main}, #000 ${(g * 100).toFixed(0)}%)`));
}
function GS(n2 = "light") {
  return n2 === "dark" ? { main: Us[200], light: Us[50], dark: Us[400] } : { main: Us[700], light: Us[400], dark: Us[800] };
}
function qS(n2 = "light") {
  return n2 === "dark" ? { main: js[200], light: js[50], dark: js[400] } : { main: js[500], light: js[300], dark: js[700] };
}
function YS(n2 = "light") {
  return n2 === "dark" ? { main: Hs[500], light: Hs[300], dark: Hs[700] } : { main: Hs[700], light: Hs[400], dark: Hs[800] };
}
function KS(n2 = "light") {
  return n2 === "dark" ? { main: Fs[400], light: Fs[300], dark: Fs[700] } : { main: Fs[700], light: Fs[500], dark: Fs[900] };
}
function XS(n2 = "light") {
  return n2 === "dark" ? { main: Zs[400], light: Zs[300], dark: Zs[700] } : { main: Zs[800], light: Zs[500], dark: Zs[900] };
}
function WS(n2 = "light") {
  return n2 === "dark" ? { main: ou[400], light: ou[300], dark: ou[700] } : { main: "#ed6c02", light: ou[500], dark: ou[900] };
}
function QS(n2) {
  return `oklch(from ${n2} var(--__l) 0 h / var(--__a))`;
}
function em(n2) {
  const { mode: r = "light", contrastThreshold: a = 3, tonalOffset: u = 0.2, colorSpace: f, ...h } = n2, g = n2.primary || GS(r), v = n2.secondary || qS(r), y = n2.error || YS(r), b = n2.info || KS(r), S = n2.success || XS(r), E = n2.warning || WS(r);
  function R($) {
    return f ? QS($) : fS($, yp.text.primary) >= a ? yp.text.primary : L1.text.primary;
  }
  const k = ({ color: $, name: F, mainShade: V = 500, lightShade: D = 300, darkShade: N = 700 }) => {
    if ($ = { ...$ }, !$.main && $[V] && ($.main = $[V]), !$.hasOwnProperty("main")) throw new Error(Sr(11, F ? ` (${F})` : "", V));
    if (typeof $.main != "string") throw new Error(Sr(12, F ? ` (${F})` : "", JSON.stringify($.main)));
    return f ? (Qv(f, $, "light", D, u), Qv(f, $, "dark", N, u)) : (Wv($, "light", D, u), Wv($, "dark", N, u)), $.contrastText || ($.contrastText = R($.main)), $;
  };
  let A;
  return r === "light" ? A = k1() : r === "dark" && (A = z1()), Pn({ common: { ...Cu }, mode: r, primary: k({ color: g, name: "primary" }), secondary: k({ color: v, name: "secondary", mainShade: "A400", lightShade: "A200", darkShade: "A700" }), error: k({ color: y, name: "error" }), warning: k({ color: E, name: "warning" }), info: k({ color: b, name: "info" }), success: k({ color: S, name: "success" }), grey: VS, contrastThreshold: a, getContrastText: R, augmentColor: k, tonalOffset: u, ...A }, h);
}
function JS(n2) {
  const r = {};
  return Object.entries(n2).forEach((u) => {
    const [f, h] = u;
    typeof h == "object" && (r[f] = `${h.fontStyle ? `${h.fontStyle} ` : ""}${h.fontVariant ? `${h.fontVariant} ` : ""}${h.fontWeight ? `${h.fontWeight} ` : ""}${h.fontStretch ? `${h.fontStretch} ` : ""}${h.fontSize || ""}${h.lineHeight ? `/${h.lineHeight} ` : ""}${h.fontFamily || ""}`);
  }), r;
}
function t3(n2, r) {
  return { toolbar: { minHeight: 56, [n2.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } }, [n2.up("sm")]: { minHeight: 64 } }, ...r };
}
function e3(n2) {
  return Math.round(n2 * 1e5) / 1e5;
}
const Jv = { textTransform: "uppercase" }, ty = '"Roboto", "Helvetica", "Arial", sans-serif';
function P1(n2, r) {
  const { fontFamily: a = ty, fontSize: u = 14, fontWeightLight: f = 300, fontWeightRegular: h = 400, fontWeightMedium: g = 500, fontWeightBold: v = 700, htmlFontSize: y = 16, allVariants: b, pxToRem: S, ...E } = typeof r == "function" ? r(n2) : r, R = u / 14, k = S || (($) => `${$ / y * R}rem`), A = ($, F, V, D, N) => ({ fontFamily: a, fontWeight: $, fontSize: k(F), lineHeight: V, ...a === ty ? { letterSpacing: `${e3(D / F)}em` } : {}, ...N, ...b }), O = { h1: A(f, 96, 1.167, -1.5), h2: A(f, 60, 1.2, -0.5), h3: A(h, 48, 1.167, 0), h4: A(h, 34, 1.235, 0.25), h5: A(h, 24, 1.334, 0), h6: A(g, 20, 1.6, 0.15), subtitle1: A(h, 16, 1.75, 0.15), subtitle2: A(g, 14, 1.57, 0.1), body1: A(h, 16, 1.5, 0.15), body2: A(h, 14, 1.43, 0.15), button: A(g, 14, 1.75, 0.4, Jv), caption: A(h, 12, 1.66, 0.4), overline: A(h, 12, 2.66, 1, Jv), inherit: { fontFamily: "inherit", fontWeight: "inherit", fontSize: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } };
  return Pn({ htmlFontSize: y, pxToRem: k, fontFamily: a, fontSize: u, fontWeightLight: f, fontWeightRegular: h, fontWeightMedium: g, fontWeightBold: v, ...O }, E, { clone: false });
}
const n3 = 0.2, i3 = 0.14, o3 = 0.12;
function on(...n2) {
  return [`${n2[0]}px ${n2[1]}px ${n2[2]}px ${n2[3]}px rgba(0,0,0,${n3})`, `${n2[4]}px ${n2[5]}px ${n2[6]}px ${n2[7]}px rgba(0,0,0,${i3})`, `${n2[8]}px ${n2[9]}px ${n2[10]}px ${n2[11]}px rgba(0,0,0,${o3})`].join(",");
}
const r3 = ["none", on(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), on(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), on(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), on(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), on(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), on(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), on(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), on(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), on(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), on(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), on(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), on(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), on(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), on(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), on(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), on(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), on(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), on(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), on(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), on(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), on(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), on(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), on(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), on(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], a3 = { easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)", easeOut: "cubic-bezier(0.0, 0, 0.2, 1)", easeIn: "cubic-bezier(0.4, 0, 1, 1)", sharp: "cubic-bezier(0.4, 0, 0.6, 1)" }, s3 = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 };
function ey(n2) {
  return `${Math.round(n2)}ms`;
}
function l3(n2) {
  if (!n2) return 0;
  const r = n2 / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function u3(n2) {
  const r = { ...a3, ...n2.easing }, a = { ...s3, ...n2.duration };
  return { getAutoHeightDuration: l3, create: (f = ["all"], h = {}) => {
    const { duration: g = a.standard, easing: v = r.easeInOut, delay: y = 0, ...b } = h;
    return (Array.isArray(f) ? f : [f]).map((S) => `${S} ${typeof g == "string" ? g : ey(g)} ${v} ${typeof y == "string" ? y : ey(y)}`).join(",");
  }, ...n2, easing: r, duration: a };
}
const c3 = { mobileStepper: 1e3, fab: 1050, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500 };
function f3(n2) {
  return Uo(n2) || typeof n2 > "u" || typeof n2 == "string" || typeof n2 == "boolean" || typeof n2 == "number" || Array.isArray(n2);
}
function B1(n2 = {}) {
  const r = { ...n2 };
  function a(u) {
    const f = Object.entries(u);
    for (let h = 0; h < f.length; h++) {
      const [g, v] = f[h];
      !f3(v) || g.startsWith("unstable_") ? delete u[g] : Uo(v) && (u[g] = { ...v }, a(u[g]));
    }
  }
  return a(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function ny(n2) {
  return typeof n2 == "number" ? `${(n2 * 100).toFixed(0)}%` : `calc((${n2}) * 100%)`;
}
const d3 = (n2) => {
  if (!Number.isNaN(+n2)) return +n2;
  const r = n2.match(/\d*\.?\d+/g);
  if (!r) return 0;
  let a = 0;
  for (let u = 0; u < r.length; u += 1) a += +r[u];
  return a;
};
function h3(n2) {
  Object.assign(n2, { alpha(r, a) {
    const u = this || n2;
    return u.colorSpace ? `oklch(from ${r} l c h / ${typeof a == "string" ? `calc(${a})` : a})` : u.vars ? `rgba(${r.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof a == "string" ? `calc(${a})` : a})` : wu(r, d3(a));
  }, lighten(r, a) {
    const u = this || n2;
    return u.colorSpace ? `color-mix(in ${u.colorSpace}, ${r}, #fff ${ny(a)})` : jf(r, a);
  }, darken(r, a) {
    const u = this || n2;
    return u.colorSpace ? `color-mix(in ${u.colorSpace}, ${r}, #000 ${ny(a)})` : Ja(r, a);
  } });
}
function _p(n2 = {}, ...r) {
  const { breakpoints: a, mixins: u = {}, spacing: f, palette: h = {}, transitions: g = {}, typography: v = {}, shape: y, colorSpace: b, ...S } = n2;
  if (n2.vars && n2.generateThemeVars === void 0) throw new Error(Sr(20));
  const E = em({ ...h, colorSpace: b }), R = Nf(n2);
  let k = Pn(R, { mixins: t3(R.breakpoints, u), palette: E, shadows: r3.slice(), typography: P1(E, v), transitions: u3(g), zIndex: { ...c3 } });
  return k = Pn(k, S), k = r.reduce((A, O) => Pn(A, O), k), k.unstable_sxConfig = { ...zu, ...S == null ? void 0 : S.unstable_sxConfig }, k.unstable_sx = function(O) {
    return va({ sx: O, theme: this });
  }, k.toRuntimeSource = B1, h3(k), k;
}
function bp(n2) {
  let r;
  return n2 < 1 ? r = 5.11916 * n2 ** 2 : r = 4.5 * Math.log(n2 + 1) + 2, Math.round(r * 10) / 1e3;
}
const p3 = [...Array(25)].map((n2, r) => {
  if (r === 0) return "none";
  const a = bp(r);
  return `linear-gradient(rgba(255 255 255 / ${a}), rgba(255 255 255 / ${a}))`;
});
function D1(n2) {
  return { inputPlaceholder: n2 === "dark" ? 0.5 : 0.42, inputUnderline: n2 === "dark" ? 0.7 : 0.42, switchTrackDisabled: n2 === "dark" ? 0.2 : 0.12, switchTrack: n2 === "dark" ? 0.3 : 0.38 };
}
function N1(n2) {
  return n2 === "dark" ? p3 : [];
}
function m3(n2) {
  const { palette: r = { mode: "light" }, opacity: a, overlays: u, colorSpace: f, ...h } = n2, g = em({ ...r, colorSpace: f });
  return { palette: g, opacity: { ...D1(g.mode), ...a }, overlays: u || N1(g.mode), ...h };
}
function g3(n2) {
  var _a2;
  return !!n2[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!n2[0].match(/sxConfig$/) || n2[0] === "palette" && !!((_a2 = n2[1]) == null ? void 0 : _a2.match(/(mode|contrastThreshold|tonalOffset)/));
}
const v3 = (n2) => [...[...Array(25)].map((r, a) => `--${n2 ? `${n2}-` : ""}overlays-${a}`), `--${n2 ? `${n2}-` : ""}palette-AppBar-darkBg`, `--${n2 ? `${n2}-` : ""}palette-AppBar-darkColor`], y3 = (n2) => (r, a) => {
  const u = n2.rootSelector || ":root", f = n2.colorSchemeSelector;
  let h = f;
  if (f === "class" && (h = ".%s"), f === "data" && (h = "[data-%s]"), (f == null ? void 0 : f.startsWith("data-")) && !f.includes("%s") && (h = `[${f}="%s"]`), n2.defaultColorScheme === r) {
    if (r === "dark") {
      const g = {};
      return v3(n2.cssVarPrefix).forEach((v) => {
        g[v] = a[v], delete a[v];
      }), h === "media" ? { [u]: a, "@media (prefers-color-scheme: dark)": { [u]: g } } : h ? { [h.replace("%s", r)]: g, [`${u}, ${h.replace("%s", r)}`]: a } : { [u]: { ...a, ...g } };
    }
    if (h && h !== "media") return `${u}, ${h.replace("%s", String(r))}`;
  } else if (r) {
    if (h === "media") return { [`@media (prefers-color-scheme: ${String(r)})`]: { [u]: a } };
    if (h) return h.replace("%s", String(r));
  }
  return u;
};
function _3(n2, r) {
  r.forEach((a) => {
    n2[a] || (n2[a] = {});
  });
}
function mt(n2, r, a) {
  !n2[r] && a && (n2[r] = a);
}
function uu(n2) {
  return typeof n2 != "string" || !n2.startsWith("hsl") ? n2 : C1(n2);
}
function br(n2, r) {
  `${r}Channel` in n2 || (n2[`${r}Channel`] = lu(uu(n2[r])));
}
function b3(n2) {
  return typeof n2 == "number" ? `${n2}px` : typeof n2 == "string" || typeof n2 == "function" || Array.isArray(n2) ? n2 : "8px";
}
const $o = (n2) => {
  try {
    return n2();
  } catch {
  }
}, x3 = (n2 = "mui") => zS(n2);
function np(n2, r, a, u, f) {
  if (!a) return;
  a = a === true ? {} : a;
  const h = f === "dark" ? "dark" : "light";
  if (!u) {
    r[f] = m3({ ...a, palette: { mode: h, ...a == null ? void 0 : a.palette }, colorSpace: n2 });
    return;
  }
  const { palette: g, ...v } = _p({ ...u, palette: { mode: h, ...a == null ? void 0 : a.palette }, colorSpace: n2 });
  return r[f] = { ...a, palette: g, opacity: { ...D1(h), ...a == null ? void 0 : a.opacity }, overlays: (a == null ? void 0 : a.overlays) || N1(h) }, v;
}
function S3(n2 = {}, ...r) {
  const { colorSchemes: a = { light: true }, defaultColorScheme: u, disableCssColorScheme: f = false, cssVarPrefix: h = "mui", nativeColor: g = false, shouldSkipGeneratingVar: v = g3, colorSchemeSelector: y = a.light && a.dark ? "media" : void 0, rootSelector: b = ":root", ...S } = n2, E = Object.keys(a)[0], R = u || (a.light && E !== "light" ? "light" : E), k = x3(h), { [R]: A, light: O, dark: $, ...F } = a, V = { ...F };
  let D = A;
  if ((R === "dark" && !("dark" in a) || R === "light" && !("light" in a)) && (D = true), !D) throw new Error(Sr(21, R));
  let N;
  g && (N = "oklch");
  const P = np(N, V, D, S, R);
  O && !V.light && np(N, V, O, void 0, "light"), $ && !V.dark && np(N, V, $, void 0, "dark");
  let U = { defaultColorScheme: R, ...P, cssVarPrefix: h, colorSchemeSelector: y, rootSelector: b, getCssVar: k, colorSchemes: V, font: { ...JS(P.typography), ...P.font }, spacing: b3(S.spacing) };
  Object.keys(U.colorSchemes).forEach((ot) => {
    const w = U.colorSchemes[ot].palette, st = (et) => {
      const B = et.split("-"), tt = B[1], rt = B[2];
      return k(et, w[tt][rt]);
    };
    w.mode === "light" && (mt(w.common, "background", "#fff"), mt(w.common, "onBackground", "#000")), w.mode === "dark" && (mt(w.common, "background", "#000"), mt(w.common, "onBackground", "#fff"));
    function W(et, B, tt) {
      if (N) {
        let rt;
        return et === qa && (rt = `transparent ${((1 - tt) * 100).toFixed(0)}%`), et === Ne && (rt = `#000 ${(tt * 100).toFixed(0)}%`), et === $e && (rt = `#fff ${(tt * 100).toFixed(0)}%`), `color-mix(in ${N}, ${B}, ${rt})`;
      }
      return et(B, tt);
    }
    if (_3(w, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), w.mode === "light") {
      mt(w.Alert, "errorColor", W(Ne, w.error.light, 0.6)), mt(w.Alert, "infoColor", W(Ne, w.info.light, 0.6)), mt(w.Alert, "successColor", W(Ne, w.success.light, 0.6)), mt(w.Alert, "warningColor", W(Ne, w.warning.light, 0.6)), mt(w.Alert, "errorFilledBg", st("palette-error-main")), mt(w.Alert, "infoFilledBg", st("palette-info-main")), mt(w.Alert, "successFilledBg", st("palette-success-main")), mt(w.Alert, "warningFilledBg", st("palette-warning-main")), mt(w.Alert, "errorFilledColor", $o(() => w.getContrastText(w.error.main))), mt(w.Alert, "infoFilledColor", $o(() => w.getContrastText(w.info.main))), mt(w.Alert, "successFilledColor", $o(() => w.getContrastText(w.success.main))), mt(w.Alert, "warningFilledColor", $o(() => w.getContrastText(w.warning.main))), mt(w.Alert, "errorStandardBg", W($e, w.error.light, 0.9)), mt(w.Alert, "infoStandardBg", W($e, w.info.light, 0.9)), mt(w.Alert, "successStandardBg", W($e, w.success.light, 0.9)), mt(w.Alert, "warningStandardBg", W($e, w.warning.light, 0.9)), mt(w.Alert, "errorIconColor", st("palette-error-main")), mt(w.Alert, "infoIconColor", st("palette-info-main")), mt(w.Alert, "successIconColor", st("palette-success-main")), mt(w.Alert, "warningIconColor", st("palette-warning-main")), mt(w.AppBar, "defaultBg", st("palette-grey-100")), mt(w.Avatar, "defaultBg", st("palette-grey-400")), mt(w.Button, "inheritContainedBg", st("palette-grey-300")), mt(w.Button, "inheritContainedHoverBg", st("palette-grey-A100")), mt(w.Chip, "defaultBorder", st("palette-grey-400")), mt(w.Chip, "defaultAvatarColor", st("palette-grey-700")), mt(w.Chip, "defaultIconColor", st("palette-grey-700")), mt(w.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), mt(w.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), mt(w.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), mt(w.LinearProgress, "primaryBg", W($e, w.primary.main, 0.62)), mt(w.LinearProgress, "secondaryBg", W($e, w.secondary.main, 0.62)), mt(w.LinearProgress, "errorBg", W($e, w.error.main, 0.62)), mt(w.LinearProgress, "infoBg", W($e, w.info.main, 0.62)), mt(w.LinearProgress, "successBg", W($e, w.success.main, 0.62)), mt(w.LinearProgress, "warningBg", W($e, w.warning.main, 0.62)), mt(w.Skeleton, "bg", N ? W(qa, w.text.primary, 0.11) : `rgba(${st("palette-text-primaryChannel")} / 0.11)`), mt(w.Slider, "primaryTrack", W($e, w.primary.main, 0.62)), mt(w.Slider, "secondaryTrack", W($e, w.secondary.main, 0.62)), mt(w.Slider, "errorTrack", W($e, w.error.main, 0.62)), mt(w.Slider, "infoTrack", W($e, w.info.main, 0.62)), mt(w.Slider, "successTrack", W($e, w.success.main, 0.62)), mt(w.Slider, "warningTrack", W($e, w.warning.main, 0.62));
      const et = N ? W(Ne, w.background.default, 0.6825) : tf(w.background.default, 0.8);
      mt(w.SnackbarContent, "bg", et), mt(w.SnackbarContent, "color", $o(() => N ? yp.text.primary : w.getContrastText(et))), mt(w.SpeedDialAction, "fabHoverBg", tf(w.background.paper, 0.15)), mt(w.StepConnector, "border", st("palette-grey-400")), mt(w.StepContent, "border", st("palette-grey-400")), mt(w.Switch, "defaultColor", st("palette-common-white")), mt(w.Switch, "defaultDisabledColor", st("palette-grey-100")), mt(w.Switch, "primaryDisabledColor", W($e, w.primary.main, 0.62)), mt(w.Switch, "secondaryDisabledColor", W($e, w.secondary.main, 0.62)), mt(w.Switch, "errorDisabledColor", W($e, w.error.main, 0.62)), mt(w.Switch, "infoDisabledColor", W($e, w.info.main, 0.62)), mt(w.Switch, "successDisabledColor", W($e, w.success.main, 0.62)), mt(w.Switch, "warningDisabledColor", W($e, w.warning.main, 0.62)), mt(w.TableCell, "border", W($e, W(qa, w.divider, 1), 0.88)), mt(w.Tooltip, "bg", W(qa, w.grey[700], 0.92));
    }
    if (w.mode === "dark") {
      mt(w.Alert, "errorColor", W($e, w.error.light, 0.6)), mt(w.Alert, "infoColor", W($e, w.info.light, 0.6)), mt(w.Alert, "successColor", W($e, w.success.light, 0.6)), mt(w.Alert, "warningColor", W($e, w.warning.light, 0.6)), mt(w.Alert, "errorFilledBg", st("palette-error-dark")), mt(w.Alert, "infoFilledBg", st("palette-info-dark")), mt(w.Alert, "successFilledBg", st("palette-success-dark")), mt(w.Alert, "warningFilledBg", st("palette-warning-dark")), mt(w.Alert, "errorFilledColor", $o(() => w.getContrastText(w.error.dark))), mt(w.Alert, "infoFilledColor", $o(() => w.getContrastText(w.info.dark))), mt(w.Alert, "successFilledColor", $o(() => w.getContrastText(w.success.dark))), mt(w.Alert, "warningFilledColor", $o(() => w.getContrastText(w.warning.dark))), mt(w.Alert, "errorStandardBg", W(Ne, w.error.light, 0.9)), mt(w.Alert, "infoStandardBg", W(Ne, w.info.light, 0.9)), mt(w.Alert, "successStandardBg", W(Ne, w.success.light, 0.9)), mt(w.Alert, "warningStandardBg", W(Ne, w.warning.light, 0.9)), mt(w.Alert, "errorIconColor", st("palette-error-main")), mt(w.Alert, "infoIconColor", st("palette-info-main")), mt(w.Alert, "successIconColor", st("palette-success-main")), mt(w.Alert, "warningIconColor", st("palette-warning-main")), mt(w.AppBar, "defaultBg", st("palette-grey-900")), mt(w.AppBar, "darkBg", st("palette-background-paper")), mt(w.AppBar, "darkColor", st("palette-text-primary")), mt(w.Avatar, "defaultBg", st("palette-grey-600")), mt(w.Button, "inheritContainedBg", st("palette-grey-800")), mt(w.Button, "inheritContainedHoverBg", st("palette-grey-700")), mt(w.Chip, "defaultBorder", st("palette-grey-700")), mt(w.Chip, "defaultAvatarColor", st("palette-grey-300")), mt(w.Chip, "defaultIconColor", st("palette-grey-300")), mt(w.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), mt(w.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), mt(w.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), mt(w.LinearProgress, "primaryBg", W(Ne, w.primary.main, 0.5)), mt(w.LinearProgress, "secondaryBg", W(Ne, w.secondary.main, 0.5)), mt(w.LinearProgress, "errorBg", W(Ne, w.error.main, 0.5)), mt(w.LinearProgress, "infoBg", W(Ne, w.info.main, 0.5)), mt(w.LinearProgress, "successBg", W(Ne, w.success.main, 0.5)), mt(w.LinearProgress, "warningBg", W(Ne, w.warning.main, 0.5)), mt(w.Skeleton, "bg", N ? W(qa, w.text.primary, 0.13) : `rgba(${st("palette-text-primaryChannel")} / 0.13)`), mt(w.Slider, "primaryTrack", W(Ne, w.primary.main, 0.5)), mt(w.Slider, "secondaryTrack", W(Ne, w.secondary.main, 0.5)), mt(w.Slider, "errorTrack", W(Ne, w.error.main, 0.5)), mt(w.Slider, "infoTrack", W(Ne, w.info.main, 0.5)), mt(w.Slider, "successTrack", W(Ne, w.success.main, 0.5)), mt(w.Slider, "warningTrack", W(Ne, w.warning.main, 0.5));
      const et = N ? W($e, w.background.default, 0.985) : tf(w.background.default, 0.98);
      mt(w.SnackbarContent, "bg", et), mt(w.SnackbarContent, "color", $o(() => N ? L1.text.primary : w.getContrastText(et))), mt(w.SpeedDialAction, "fabHoverBg", tf(w.background.paper, 0.15)), mt(w.StepConnector, "border", st("palette-grey-600")), mt(w.StepContent, "border", st("palette-grey-600")), mt(w.Switch, "defaultColor", st("palette-grey-300")), mt(w.Switch, "defaultDisabledColor", st("palette-grey-600")), mt(w.Switch, "primaryDisabledColor", W(Ne, w.primary.main, 0.55)), mt(w.Switch, "secondaryDisabledColor", W(Ne, w.secondary.main, 0.55)), mt(w.Switch, "errorDisabledColor", W(Ne, w.error.main, 0.55)), mt(w.Switch, "infoDisabledColor", W(Ne, w.info.main, 0.55)), mt(w.Switch, "successDisabledColor", W(Ne, w.success.main, 0.55)), mt(w.Switch, "warningDisabledColor", W(Ne, w.warning.main, 0.55)), mt(w.TableCell, "border", W(Ne, W(qa, w.divider, 1), 0.68)), mt(w.Tooltip, "bg", W(qa, w.grey[700], 0.92));
    }
    br(w.background, "default"), br(w.background, "paper"), br(w.common, "background"), br(w.common, "onBackground"), br(w, "divider"), Object.keys(w).forEach((et) => {
      const B = w[et];
      et !== "tonalOffset" && B && typeof B == "object" && (B.main && mt(w[et], "mainChannel", lu(uu(B.main))), B.light && mt(w[et], "lightChannel", lu(uu(B.light))), B.dark && mt(w[et], "darkChannel", lu(uu(B.dark))), B.contrastText && mt(w[et], "contrastTextChannel", lu(uu(B.contrastText))), et === "text" && (br(w[et], "primary"), br(w[et], "secondary")), et === "action" && (B.active && br(w[et], "active"), B.selected && br(w[et], "selected")));
    });
  }), U = r.reduce((ot, w) => Pn(ot, w), U);
  const K = { prefix: h, disableCssColorScheme: f, shouldSkipGeneratingVar: v, getSelector: y3(U), enableContrastVars: g }, { vars: J, generateThemeVars: it, generateStyleSheets: ut } = DS(U, K);
  return U.vars = J, Object.entries(U.colorSchemes[U.defaultColorScheme]).forEach(([ot, w]) => {
    U[ot] = w;
  }), U.generateThemeVars = it, U.generateStyleSheets = ut, U.generateSpacing = function() {
    return v1(S.spacing, kf(this));
  }, U.getColorSchemeSelector = NS(y), U.spacing = U.generateSpacing(), U.shouldSkipGeneratingVar = v, U.unstable_sxConfig = { ...zu, ...S == null ? void 0 : S.unstable_sxConfig }, U.unstable_sx = function(w) {
    return va({ sx: w, theme: this });
  }, U.toRuntimeSource = B1, U;
}
function iy(n2, r, a) {
  n2.colorSchemes && a && (n2.colorSchemes[r] = { ...a !== true && a, palette: em({ ...a === true ? {} : a.palette, mode: r }) });
}
function Hf(n2 = {}, ...r) {
  const { palette: a, cssVariables: u = false, colorSchemes: f = a ? void 0 : { light: true }, defaultColorScheme: h = a == null ? void 0 : a.mode, ...g } = n2, v = h || "light", y = f == null ? void 0 : f[v], b = { ...f, ...a ? { [v]: { ...typeof y != "boolean" && y, palette: a } } : void 0 };
  if (u === false) {
    if (!("colorSchemes" in n2)) return _p(n2, ...r);
    let S = a;
    "palette" in n2 || b[v] && (b[v] !== true ? S = b[v].palette : v === "dark" && (S = { mode: "dark" }));
    const E = _p({ ...n2, palette: S }, ...r);
    return E.defaultColorScheme = v, E.colorSchemes = b, E.palette.mode === "light" && (E.colorSchemes.light = { ...b.light !== true && b.light, palette: E.palette }, iy(E, "dark", b.dark)), E.palette.mode === "dark" && (E.colorSchemes.dark = { ...b.dark !== true && b.dark, palette: E.palette }, iy(E, "light", b.light)), E;
  }
  return !a && !("light" in b) && v === "light" && (b.light = true), S3({ ...g, colorSchemes: b, defaultColorScheme: v, ...typeof u != "boolean" && u }, ...r);
}
const nm = Hf();
function qo() {
  const n2 = $f(nm);
  return n2[Fo] || n2;
}
function $1(n2) {
  return n2 !== "ownerState" && n2 !== "theme" && n2 !== "sx" && n2 !== "as";
}
const Co = (n2) => $1(n2) && n2 !== "classes", Ot = w1({ themeId: Fo, defaultTheme: nm, rootShouldForwardProp: Co });
function w3({ theme: n2, ...r }) {
  const a = Fo in n2 ? n2[Fo] : void 0;
  return I.jsx(A1, { ...r, themeId: a ? Fo : void 0, theme: a || n2 });
}
const ef = { colorSchemeStorageKey: "mui-color-scheme", defaultLightColorScheme: "light", defaultDarkColorScheme: "dark", modeStorageKey: "mui-mode" }, { CssVarsProvider: C3 } = LS({ themeId: Fo, theme: () => Hf({ cssVariables: true }), colorSchemeStorageKey: ef.colorSchemeStorageKey, modeStorageKey: ef.modeStorageKey, defaultColorScheme: { light: ef.defaultLightColorScheme, dark: ef.defaultDarkColorScheme }, resolveTheme: (n2) => {
  const r = { ...n2, typography: P1(n2.palette, n2.typography) };
  return r.unstable_sx = function(u) {
    return va({ sx: u, theme: this });
  }, r;
} }), T3 = C3;
function E3({ theme: n2, ...r }) {
  const a = M.useMemo(() => {
    if (typeof n2 == "function") return n2;
    const u = Fo in n2 ? n2[Fo] : n2;
    return "colorSchemes" in u ? null : "vars" in u ? n2 : { ...n2, vars: null };
  }, [n2]);
  return a ? I.jsx(w3, { theme: a, ...r }) : I.jsx(T3, { theme: n2, ...r });
}
const M3 = `<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\r
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="600px"\r
	 height="600px" viewBox="0 0 600 600" enable-background="new 0 0 600 600" xml:space="preserve">\r
<symbol  id="happyface" viewBox="-12 -11.75 24 23.5">\r
	<g>\r
		<g>\r
			<path fill="#FF4D4E" d="M11.25-1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10s4.479,10,10,10\r
				C6.773,8.75,11.25,4.272,11.25-1.25z"/>\r
			<path fill="none" stroke="#FF4D4E" stroke-miterlimit="10" d="M11.25-1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10\r
				s4.479,10,10,10C6.773,8.75,11.25,4.272,11.25-1.25z"/>\r
		</g>\r
		<g>\r
			<path fill="#FFFFFF" d="M8.75,1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10s4.479,10,10,10\r
				C4.273,11.25,8.75,6.772,8.75,1.25z"/>\r
			<path fill="none" stroke="#FF4D4E" stroke-miterlimit="10" d="M8.75,1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10\r
				s4.479,10,10,10C4.273,11.25,8.75,6.772,8.75,1.25z"/>\r
		</g>\r
	</g>\r
	<polygon display="none" fill="none" points="-12,11 12,11 12,-11 -12,-11 	"/>\r
</symbol>\r
<g id="BACK">\r
	<circle fill="#FFFFFF" stroke="#000000" stroke-width="10" stroke-miterlimit="10" cx="382" cy="459" r="96.333"/>\r
</g>\r
<g id="BASE">\r
	<g>\r
		<g>\r
			<path fill="#FFFFFF" d="M459,300c0,87.807-71.178,159-159,159c-87.791,0-159-71.193-159-159s71.209-159,159-159\r
				C387.822,141,459,212.193,459,300z"/>\r
			<path fill="none" stroke="#000000" stroke-width="16" stroke-miterlimit="10" d="M459,300c0,87.807-71.178,159-159,159\r
				c-87.791,0-159-71.193-159-159s71.209-159,159-159C387.822,141,459,212.193,459,300z"/>\r
		</g>\r
		<path fill="none" stroke="#000000" stroke-width="16" stroke-linecap="round" stroke-miterlimit="10" d="M347.871,330.837\r
			c-11.785,13.634-28.602,22.158-47.296,22.158c-19.301,0-36.629-9.084-48.445-23.493"/>\r
		<g>\r
			<path fill="none" stroke="#000000" stroke-width="16" stroke-miterlimit="10" d="M259.59,279.473c0,4.037-3.26,7.298-7.297,7.298\r
				c-4.021,0-7.283-3.261-7.283-7.298c0-4.021,3.262-7.282,7.283-7.282C256.33,272.19,259.59,275.451,259.59,279.473z"/>\r
			<path fill="none" stroke="#000000" stroke-width="16" stroke-miterlimit="10" d="M354.99,279.473\r
				c0,4.037-3.261,7.298-7.298,7.298c-4.021,0-7.282-3.261-7.282-7.298c0-4.021,3.261-7.282,7.282-7.282\r
				C351.729,272.19,354.99,275.451,354.99,279.473z"/>\r
		</g>\r
	</g>\r
</g>\r
<g id="FRONT">\r
	<circle fill="#FFFFFF" stroke="#000000" stroke-width="10" stroke-miterlimit="10" cx="218" cy="459" r="96.333"/>\r
</g>\r
</svg>\r
`, O3 = `<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\r
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="600px"\r
	 height="600px" viewBox="0 0 600 600" enable-background="new 0 0 600 600" xml:space="preserve">\r
<symbol  id="happyface" viewBox="-12 -11.75 24 23.5">\r
	<g>\r
		<g>\r
			<path fill="#FF4D4E" d="M11.25-1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10s4.479,10,10,10\r
				C6.773,8.75,11.25,4.272,11.25-1.25z"/>\r
			<path fill="none" stroke="#FF4D4E" stroke-miterlimit="10" d="M11.25-1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10\r
				s4.479,10,10,10C6.773,8.75,11.25,4.272,11.25-1.25z"/>\r
		</g>\r
		<g>\r
			<path fill="#FFFFFF" d="M8.75,1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10s4.479,10,10,10\r
				C4.273,11.25,8.75,6.772,8.75,1.25z"/>\r
			<path fill="none" stroke="#FF4D4E" stroke-miterlimit="10" d="M8.75,1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10\r
				s4.479,10,10,10C4.273,11.25,8.75,6.772,8.75,1.25z"/>\r
		</g>\r
	</g>\r
	<polygon display="none" fill="none" points="-12,11 12,11 12,-11 -12,-11 	"/>\r
</symbol>\r
<g id="BACK">\r
</g>\r
<g id="BASE">\r
	<g>\r
		<g>\r
			<path fill="#FFFFFF" d="M459.001,300c0,87.807-71.178,159-159,159c-87.791,0-159-71.193-159-159s71.209-159,159-159\r
				C387.823,141,459.001,212.193,459.001,300z"/>\r
			<path fill="none" stroke="#000000" stroke-width="16" stroke-miterlimit="10" d="M459.001,300c0,87.807-71.178,159-159,159\r
				c-87.791,0-159-71.193-159-159s71.209-159,159-159C387.823,141,459.001,212.193,459.001,300z"/>\r
		</g>\r
		<g>\r
			<path fill="none" stroke="#000000" stroke-width="16" stroke-linecap="round" stroke-miterlimit="10" d="M348.251,330.837\r
				c-11.785,13.634-28.601,22.158-47.296,22.158c-19.301,0-36.629-9.084-48.445-23.493"/>\r
			<g>\r
				<path fill="none" stroke="#000000" stroke-width="16" stroke-miterlimit="10" d="M259.59,279.473\r
					c0,4.037-3.26,7.298-7.297,7.298c-4.021,0-7.283-3.261-7.283-7.298c0-4.021,3.262-7.282,7.283-7.282\r
					C256.33,272.19,259.59,275.451,259.59,279.473z"/>\r
				<path fill="none" stroke="#000000" stroke-width="16" stroke-miterlimit="10" d="M354.99,279.473\r
					c0,4.037-3.261,7.298-7.298,7.298c-4.021,0-7.282-3.261-7.282-7.298c0-4.021,3.261-7.282,7.282-7.282\r
					C351.729,272.19,354.99,275.451,354.99,279.473z"/>\r
			</g>\r
		</g>\r
	</g>\r
</g>\r
<g id="FRONT">\r
	<g>\r
		<g>\r
			<path fill="#FFFFFF" d="M483.216,483.215c-31.044,31.045-81.38,31.05-112.43,0c-31.039-31.039-31.044-81.386,0-112.43\r
				c31.044-31.045,81.392-31.039,112.43,0C514.266,401.835,514.26,452.171,483.216,483.215z"/>\r
			<path fill="none" stroke="#000000" stroke-width="10" stroke-miterlimit="10" d="M483.216,483.215\r
				c-31.044,31.045-81.38,31.05-112.43,0c-31.039-31.039-31.044-81.386,0-112.43c31.044-31.045,81.392-31.039,112.43,0\r
				C514.266,401.835,514.26,452.171,483.216,483.215z"/>\r
		</g>\r
		<path fill="none" stroke="#000000" stroke-width="10" stroke-linecap="round" stroke-miterlimit="10" d="M422.283,444.086\r
			c-8.987,0.654-17.946-2.276-24.557-8.886c-6.823-6.824-9.737-16.163-8.821-25.435"/>\r
		<g>\r
			<path fill="none" stroke="#000000" stroke-width="10" stroke-miterlimit="10" d="M409.097,394.58\r
				c-1.428,1.428-3.732,1.428-5.159,0c-1.422-1.422-1.423-3.727,0.004-5.154c1.422-1.422,3.729-1.421,5.149,0\r
				C410.519,390.854,410.519,393.158,409.097,394.58z"/>\r
			<path fill="none" stroke="#000000" stroke-width="10" stroke-miterlimit="10" d="M442.826,428.31\r
				c-1.428,1.428-3.732,1.428-5.161-0.001c-1.421-1.421-1.421-3.727,0.006-5.154c1.422-1.422,3.728-1.421,5.148,0\r
				C444.248,424.583,444.248,426.888,442.826,428.31z"/>\r
		</g>\r
	</g>\r
</g>\r
</svg>\r
`, A3 = `<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\r
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="600px"\r
	 height="600px" viewBox="0 0 600 600" enable-background="new 0 0 600 600" xml:space="preserve">\r
<symbol  id="happyface" viewBox="-12 -11.75 24 23.5">\r
	<g>\r
		<g>\r
			<path fill="#FF4D4E" d="M11.25-1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10s4.479,10,10,10\r
				C6.773,8.75,11.25,4.272,11.25-1.25z"/>\r
			<path fill="none" stroke="#FF4D4E" stroke-miterlimit="10" d="M11.25-1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10\r
				s4.479,10,10,10C6.773,8.75,11.25,4.272,11.25-1.25z"/>\r
		</g>\r
		<g>\r
			<path fill="#FFFFFF" d="M8.75,1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10s4.479,10,10,10\r
				C4.273,11.25,8.75,6.772,8.75,1.25z"/>\r
			<path fill="none" stroke="#FF4D4E" stroke-miterlimit="10" d="M8.75,1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10\r
				s4.479,10,10,10C4.273,11.25,8.75,6.772,8.75,1.25z"/>\r
		</g>\r
	</g>\r
	<polygon display="none" fill="none" points="-12,11 12,11 12,-11 -12,-11 	"/>\r
</symbol>\r
<g id="BACK">\r
	<g>\r
		\r
			<line fill="#FFFFFF" stroke="#000000" stroke-width="10" stroke-linecap="round" stroke-miterlimit="10" x1="487" y1="516" x2="487" y2="352"/>\r
		<path fill="none" stroke="#000000" stroke-width="10" stroke-linecap="round" stroke-miterlimit="10" d="M426.174,353.045\r
			c0-16.844,13.654-30.5,30.5-30.5c16.845,0,30.5,13.656,30.5,30.5"/>\r
	</g>\r
</g>\r
<g id="BASE">\r
	<g>\r
		<g>\r
			<path fill="#FFFFFF" d="M459.001,300c0,87.807-71.178,159-159,159c-87.791,0-159-71.193-159-159s71.209-159,159-159\r
				C387.823,141,459.001,212.193,459.001,300z"/>\r
			<path fill="none" stroke="#000000" stroke-width="16" stroke-miterlimit="10" d="M459.001,300c0,87.807-71.178,159-159,159\r
				c-87.791,0-159-71.193-159-159s71.209-159,159-159C387.823,141,459.001,212.193,459.001,300z"/>\r
		</g>\r
		<g>\r
			<path fill="none" stroke="#000000" stroke-width="16" stroke-linecap="round" stroke-miterlimit="10" d="M348.251,330.837\r
				c-11.785,13.634-28.601,22.158-47.296,22.158c-19.301,0-36.629-9.084-48.445-23.493"/>\r
			<g>\r
				<path fill="none" stroke="#000000" stroke-width="16" stroke-miterlimit="10" d="M259.59,279.473\r
					c0,4.037-3.26,7.298-7.297,7.298c-4.021,0-7.283-3.261-7.283-7.298c0-4.021,3.262-7.282,7.283-7.282\r
					C256.33,272.19,259.59,275.451,259.59,279.473z"/>\r
				<path fill="none" stroke="#000000" stroke-width="16" stroke-miterlimit="10" d="M354.99,279.473\r
					c0,4.037-3.261,7.298-7.298,7.298c-4.021,0-7.282-3.261-7.282-7.298c0-4.021,3.261-7.282,7.282-7.282\r
					C351.729,272.19,354.99,275.451,354.99,279.473z"/>\r
			</g>\r
		</g>\r
	</g>\r
</g>\r
<g id="FRONT">\r
	<g>\r
		<circle fill="#FFFFFF" stroke="#000000" stroke-width="10" stroke-miterlimit="10" cx="252" cy="279.48" r="32.667"/>\r
		<circle fill="#FFFFFF" stroke="#000000" stroke-width="10" stroke-miterlimit="10" cx="348" cy="279.48" r="32.667"/>\r
		<path fill="#FFFFFF" stroke="#000000" stroke-width="10" stroke-miterlimit="10" d="M284.583,281.855\r
			c0-8.491,6.884-15.375,15.375-15.375s15.375,6.884,15.375,15.375"/>\r
	</g>\r
</g>\r
</svg>\r
`, I1 = `<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\r
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="600px"\r
	 height="600px" viewBox="0 0 600 600" enable-background="new 0 0 600 600" xml:space="preserve">\r
<symbol  id="happyface" viewBox="-12 -11.75 24 23.5">\r
	<g>\r
		<g>\r
			<path fill="#FF4D4E" d="M11.25-1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10s4.479,10,10,10\r
				C6.773,8.75,11.25,4.272,11.25-1.25z"/>\r
			<path fill="none" stroke="#FF4D4E" stroke-miterlimit="10" d="M11.25-1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10\r
				s4.479,10,10,10C6.773,8.75,11.25,4.272,11.25-1.25z"/>\r
		</g>\r
		<g>\r
			<path fill="#FFFFFF" d="M8.75,1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10s4.479,10,10,10\r
				C4.273,11.25,8.75,6.772,8.75,1.25z"/>\r
			<path fill="none" stroke="#FF4D4E" stroke-miterlimit="10" d="M8.75,1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10\r
				s4.479,10,10,10C4.273,11.25,8.75,6.772,8.75,1.25z"/>\r
		</g>\r
	</g>\r
	<polygon display="none" fill="none" points="-12,11 12,11 12,-11 -12,-11 	"/>\r
</symbol>\r
<g id="BACK">\r
</g>\r
<g id="BASE">\r
	<g>\r
		<g>\r
			<path fill="#FFFFFF" d="M459.001,300c0,87.807-71.178,159-159,159c-87.791,0-159-71.193-159-159s71.209-159,159-159\r
				C387.823,141,459.001,212.193,459.001,300z"/>\r
			<path fill="none" stroke="#000000" stroke-width="16" stroke-miterlimit="10" d="M459.001,300c0,87.807-71.178,159-159,159\r
				c-87.791,0-159-71.193-159-159s71.209-159,159-159C387.823,141,459.001,212.193,459.001,300z"/>\r
		</g>\r
		<g>\r
			<path fill="none" stroke="#000000" stroke-width="16" stroke-linecap="round" stroke-miterlimit="10" d="M348.251,330.837\r
				c-11.785,13.634-28.601,22.158-47.296,22.158c-19.301,0-36.629-9.084-48.445-23.493"/>\r
			<g>\r
				<path fill="none" stroke="#000000" stroke-width="16" stroke-miterlimit="10" d="M259.59,279.473\r
					c0,4.037-3.26,7.298-7.297,7.298c-4.021,0-7.283-3.261-7.283-7.298c0-4.021,3.262-7.282,7.283-7.282\r
					C256.33,272.19,259.59,275.451,259.59,279.473z"/>\r
				<path fill="none" stroke="#000000" stroke-width="16" stroke-miterlimit="10" d="M354.99,279.473\r
					c0,4.037-3.261,7.298-7.298,7.298c-4.021,0-7.282-3.261-7.282-7.298c0-4.021,3.261-7.282,7.282-7.282\r
					C351.729,272.19,354.99,275.451,354.99,279.473z"/>\r
			</g>\r
		</g>\r
	</g>\r
</g>\r
<g id="FRONT">\r
</g>\r
</svg>\r
`, R3 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='600px'%20height='600px'%20viewBox='0%200%20600%20600'%20enable-background='new%200%200%20600%20600'%20xml:space='preserve'%3e%3csymbol%20id='happyface'%20viewBox='-12%20-11.75%2024%2023.5'%3e%3cg%3e%3cg%3e%3cpath%20fill='%23FF4D4E'%20d='M11.25-1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10s4.479,10,10,10%20C6.773,8.75,11.25,4.272,11.25-1.25z'/%3e%3cpath%20fill='none'%20stroke='%23FF4D4E'%20stroke-miterlimit='10'%20d='M11.25-1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10%20s4.479,10,10,10C6.773,8.75,11.25,4.272,11.25-1.25z'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='%23FFFFFF'%20d='M8.75,1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10s4.479,10,10,10%20C4.273,11.25,8.75,6.772,8.75,1.25z'/%3e%3cpath%20fill='none'%20stroke='%23FF4D4E'%20stroke-miterlimit='10'%20d='M8.75,1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10%20s4.479,10,10,10C4.273,11.25,8.75,6.772,8.75,1.25z'/%3e%3c/g%3e%3c/g%3e%3cpolygon%20display='none'%20fill='none'%20points='-12,11%2012,11%2012,-11%20-12,-11%20'/%3e%3c/symbol%3e%3cg%20id='BACK'%3e%3ccircle%20fill='%23FFFFFF'%20stroke='%23000000'%20stroke-width='10'%20stroke-miterlimit='10'%20cx='382'%20cy='459'%20r='96.333'/%3e%3c/g%3e%3cg%20id='BASE'%3e%3cg%3e%3cg%3e%3cpath%20fill='%23FFFFFF'%20d='M459,300c0,87.807-71.178,159-159,159c-87.791,0-159-71.193-159-159s71.209-159,159-159%20C387.822,141,459,212.193,459,300z'/%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='16'%20stroke-miterlimit='10'%20d='M459,300c0,87.807-71.178,159-159,159%20c-87.791,0-159-71.193-159-159s71.209-159,159-159C387.822,141,459,212.193,459,300z'/%3e%3c/g%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='16'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M347.871,330.837%20c-11.785,13.634-28.602,22.158-47.296,22.158c-19.301,0-36.629-9.084-48.445-23.493'/%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='16'%20stroke-miterlimit='10'%20d='M259.59,279.473c0,4.037-3.26,7.298-7.297,7.298%20c-4.021,0-7.283-3.261-7.283-7.298c0-4.021,3.262-7.282,7.283-7.282C256.33,272.19,259.59,275.451,259.59,279.473z'/%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='16'%20stroke-miterlimit='10'%20d='M354.99,279.473%20c0,4.037-3.261,7.298-7.298,7.298c-4.021,0-7.282-3.261-7.282-7.298c0-4.021,3.261-7.282,7.282-7.282%20C351.729,272.19,354.99,275.451,354.99,279.473z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20id='FRONT'%3e%3ccircle%20fill='%23FFFFFF'%20stroke='%23000000'%20stroke-width='10'%20stroke-miterlimit='10'%20cx='218'%20cy='459'%20r='96.333'/%3e%3c/g%3e%3c/svg%3e", k3 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='600px'%20height='600px'%20viewBox='0%200%20600%20600'%20enable-background='new%200%200%20600%20600'%20xml:space='preserve'%3e%3csymbol%20id='happyface'%20viewBox='-12%20-11.75%2024%2023.5'%3e%3cg%3e%3cg%3e%3cpath%20fill='%23FF4D4E'%20d='M11.25-1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10s4.479,10,10,10%20C6.773,8.75,11.25,4.272,11.25-1.25z'/%3e%3cpath%20fill='none'%20stroke='%23FF4D4E'%20stroke-miterlimit='10'%20d='M11.25-1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10%20s4.479,10,10,10C6.773,8.75,11.25,4.272,11.25-1.25z'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='%23FFFFFF'%20d='M8.75,1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10s4.479,10,10,10%20C4.273,11.25,8.75,6.772,8.75,1.25z'/%3e%3cpath%20fill='none'%20stroke='%23FF4D4E'%20stroke-miterlimit='10'%20d='M8.75,1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10%20s4.479,10,10,10C4.273,11.25,8.75,6.772,8.75,1.25z'/%3e%3c/g%3e%3c/g%3e%3cpolygon%20display='none'%20fill='none'%20points='-12,11%2012,11%2012,-11%20-12,-11%20'/%3e%3c/symbol%3e%3cg%20id='BACK'%3e%3c/g%3e%3cg%20id='BASE'%3e%3cg%3e%3cg%3e%3cpath%20fill='%23FFFFFF'%20d='M459.001,300c0,87.807-71.178,159-159,159c-87.791,0-159-71.193-159-159s71.209-159,159-159%20C387.823,141,459.001,212.193,459.001,300z'/%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='16'%20stroke-miterlimit='10'%20d='M459.001,300c0,87.807-71.178,159-159,159%20c-87.791,0-159-71.193-159-159s71.209-159,159-159C387.823,141,459.001,212.193,459.001,300z'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='16'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M348.251,330.837%20c-11.785,13.634-28.601,22.158-47.296,22.158c-19.301,0-36.629-9.084-48.445-23.493'/%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='16'%20stroke-miterlimit='10'%20d='M259.59,279.473%20c0,4.037-3.26,7.298-7.297,7.298c-4.021,0-7.283-3.261-7.283-7.298c0-4.021,3.262-7.282,7.283-7.282%20C256.33,272.19,259.59,275.451,259.59,279.473z'/%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='16'%20stroke-miterlimit='10'%20d='M354.99,279.473%20c0,4.037-3.261,7.298-7.298,7.298c-4.021,0-7.282-3.261-7.282-7.298c0-4.021,3.261-7.282,7.282-7.282%20C351.729,272.19,354.99,275.451,354.99,279.473z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20id='FRONT'%3e%3cg%3e%3cg%3e%3cpath%20fill='%23FFFFFF'%20d='M483.216,483.215c-31.044,31.045-81.38,31.05-112.43,0c-31.039-31.039-31.044-81.386,0-112.43%20c31.044-31.045,81.392-31.039,112.43,0C514.266,401.835,514.26,452.171,483.216,483.215z'/%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='10'%20stroke-miterlimit='10'%20d='M483.216,483.215%20c-31.044,31.045-81.38,31.05-112.43,0c-31.039-31.039-31.044-81.386,0-112.43c31.044-31.045,81.392-31.039,112.43,0%20C514.266,401.835,514.26,452.171,483.216,483.215z'/%3e%3c/g%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='10'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M422.283,444.086%20c-8.987,0.654-17.946-2.276-24.557-8.886c-6.823-6.824-9.737-16.163-8.821-25.435'/%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='10'%20stroke-miterlimit='10'%20d='M409.097,394.58%20c-1.428,1.428-3.732,1.428-5.159,0c-1.422-1.422-1.423-3.727,0.004-5.154c1.422-1.422,3.729-1.421,5.149,0%20C410.519,390.854,410.519,393.158,409.097,394.58z'/%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='10'%20stroke-miterlimit='10'%20d='M442.826,428.31%20c-1.428,1.428-3.732,1.428-5.161-0.001c-1.421-1.421-1.421-3.727,0.006-5.154c1.422-1.422,3.728-1.421,5.148,0%20C444.248,424.583,444.248,426.888,442.826,428.31z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", L3 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='600px'%20height='600px'%20viewBox='0%200%20600%20600'%20enable-background='new%200%200%20600%20600'%20xml:space='preserve'%3e%3csymbol%20id='happyface'%20viewBox='-12%20-11.75%2024%2023.5'%3e%3cg%3e%3cg%3e%3cpath%20fill='%23FF4D4E'%20d='M11.25-1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10s4.479,10,10,10%20C6.773,8.75,11.25,4.272,11.25-1.25z'/%3e%3cpath%20fill='none'%20stroke='%23FF4D4E'%20stroke-miterlimit='10'%20d='M11.25-1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10%20s4.479,10,10,10C6.773,8.75,11.25,4.272,11.25-1.25z'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='%23FFFFFF'%20d='M8.75,1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10s4.479,10,10,10%20C4.273,11.25,8.75,6.772,8.75,1.25z'/%3e%3cpath%20fill='none'%20stroke='%23FF4D4E'%20stroke-miterlimit='10'%20d='M8.75,1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10%20s4.479,10,10,10C4.273,11.25,8.75,6.772,8.75,1.25z'/%3e%3c/g%3e%3c/g%3e%3cpolygon%20display='none'%20fill='none'%20points='-12,11%2012,11%2012,-11%20-12,-11%20'/%3e%3c/symbol%3e%3cg%20id='BACK'%3e%3cg%3e%3cline%20fill='%23FFFFFF'%20stroke='%23000000'%20stroke-width='10'%20stroke-linecap='round'%20stroke-miterlimit='10'%20x1='487'%20y1='516'%20x2='487'%20y2='352'/%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='10'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M426.174,353.045%20c0-16.844,13.654-30.5,30.5-30.5c16.845,0,30.5,13.656,30.5,30.5'/%3e%3c/g%3e%3c/g%3e%3cg%20id='BASE'%3e%3cg%3e%3cg%3e%3cpath%20fill='%23FFFFFF'%20d='M459.001,300c0,87.807-71.178,159-159,159c-87.791,0-159-71.193-159-159s71.209-159,159-159%20C387.823,141,459.001,212.193,459.001,300z'/%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='16'%20stroke-miterlimit='10'%20d='M459.001,300c0,87.807-71.178,159-159,159%20c-87.791,0-159-71.193-159-159s71.209-159,159-159C387.823,141,459.001,212.193,459.001,300z'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='16'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M348.251,330.837%20c-11.785,13.634-28.601,22.158-47.296,22.158c-19.301,0-36.629-9.084-48.445-23.493'/%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='16'%20stroke-miterlimit='10'%20d='M259.59,279.473%20c0,4.037-3.26,7.298-7.297,7.298c-4.021,0-7.283-3.261-7.283-7.298c0-4.021,3.262-7.282,7.283-7.282%20C256.33,272.19,259.59,275.451,259.59,279.473z'/%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='16'%20stroke-miterlimit='10'%20d='M354.99,279.473%20c0,4.037-3.261,7.298-7.298,7.298c-4.021,0-7.282-3.261-7.282-7.298c0-4.021,3.261-7.282,7.282-7.282%20C351.729,272.19,354.99,275.451,354.99,279.473z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20id='FRONT'%3e%3cg%3e%3ccircle%20fill='%23FFFFFF'%20stroke='%23000000'%20stroke-width='10'%20stroke-miterlimit='10'%20cx='252'%20cy='279.48'%20r='32.667'/%3e%3ccircle%20fill='%23FFFFFF'%20stroke='%23000000'%20stroke-width='10'%20stroke-miterlimit='10'%20cx='348'%20cy='279.48'%20r='32.667'/%3e%3cpath%20fill='%23FFFFFF'%20stroke='%23000000'%20stroke-width='10'%20stroke-miterlimit='10'%20d='M284.583,281.855%20c0-8.491,6.884-15.375,15.375-15.375s15.375,6.884,15.375,15.375'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", z3 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='600px'%20height='600px'%20viewBox='0%200%20600%20600'%20enable-background='new%200%200%20600%20600'%20xml:space='preserve'%3e%3csymbol%20id='happyface'%20viewBox='-12%20-11.75%2024%2023.5'%3e%3cg%3e%3cg%3e%3cpath%20fill='%23FF4D4E'%20d='M11.25-1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10s4.479,10,10,10%20C6.773,8.75,11.25,4.272,11.25-1.25z'/%3e%3cpath%20fill='none'%20stroke='%23FF4D4E'%20stroke-miterlimit='10'%20d='M11.25-1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10%20s4.479,10,10,10C6.773,8.75,11.25,4.272,11.25-1.25z'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='%23FFFFFF'%20d='M8.75,1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10s4.479,10,10,10%20C4.273,11.25,8.75,6.772,8.75,1.25z'/%3e%3cpath%20fill='none'%20stroke='%23FF4D4E'%20stroke-miterlimit='10'%20d='M8.75,1.25c0-5.522-4.477-10-10-10c-5.521,0-10,4.478-10,10%20s4.479,10,10,10C4.273,11.25,8.75,6.772,8.75,1.25z'/%3e%3c/g%3e%3c/g%3e%3cpolygon%20display='none'%20fill='none'%20points='-12,11%2012,11%2012,-11%20-12,-11%20'/%3e%3c/symbol%3e%3cg%20id='BACK'%3e%3c/g%3e%3cg%20id='BASE'%3e%3cg%3e%3cg%3e%3cpath%20fill='%23FFFFFF'%20d='M459.001,300c0,87.807-71.178,159-159,159c-87.791,0-159-71.193-159-159s71.209-159,159-159%20C387.823,141,459.001,212.193,459.001,300z'/%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='16'%20stroke-miterlimit='10'%20d='M459.001,300c0,87.807-71.178,159-159,159%20c-87.791,0-159-71.193-159-159s71.209-159,159-159C387.823,141,459.001,212.193,459.001,300z'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='16'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M348.251,330.837%20c-11.785,13.634-28.601,22.158-47.296,22.158c-19.301,0-36.629-9.084-48.445-23.493'/%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='16'%20stroke-miterlimit='10'%20d='M259.59,279.473%20c0,4.037-3.26,7.298-7.297,7.298c-4.021,0-7.283-3.261-7.283-7.298c0-4.021,3.262-7.282,7.283-7.282%20C256.33,272.19,259.59,275.451,259.59,279.473z'/%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-width='16'%20stroke-miterlimit='10'%20d='M354.99,279.473%20c0,4.037-3.261,7.298-7.298,7.298c-4.021,0-7.282-3.261-7.282-7.298c0-4.021,3.261-7.282,7.282-7.282%20C351.729,272.19,354.99,275.451,354.99,279.473z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20id='FRONT'%3e%3c/g%3e%3c/svg%3e", P3 = { wheelchair: { id: 0, label: "Sedia a rotelle", color: "#0875f9", svg: M3, icon: R3, params: { steps: ["STEPS", "STEP_STAIRS"], width_min: 1.35, crash: 0.1, pali_luce: 0.6, slope: 1 } }, parent: { id: 1, label: "Genitore", color: "#ffa500", svg: O3, icon: k3, params: { steps: ["STEP_STAIRS"], width_min: 1.2, crash: 0.4, pali_luce: 0.45, slope: 0.7 } }, elderly: { id: 2, label: "Anziano", color: "#41ce69", svg: A3, icon: L3, params: { steps: ["STEPS"], width_min: 0.9, crash: 0.2, pali_luce: 0.7, slope: 1 } }, other: { id: 3, label: "Altro", color: "#ed4347", svg: I1, icon: z3, params: { steps: [], width_min: 0.1, crash: 0.5, pali_luce: 0.5, slope: 1 } } }, yf = Object.entries(P3).map(([n2, r]) => ({ id: n2, ...r })), B3 = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true, xp = 16, _a = 8, cu = { w: 6, h: B3 ? 13 : 12 }, Uf = { h: (window.innerHeight - xp * 2 - (_a * cu.h - 1)) / cu.h, w: (window.innerWidth - xp * 2 - (_a * cu.w - 1)) / cu.w }, D3 = { spacing: `${_a}px`, resolution: cu, units: Uf }, ip = `${Uf.h - _a}px`, op = `${(Uf.h - _a) / 2}px`, N3 = `${(Uf.h - _a) / 4}px`;
function $3(n2 = "#000000") {
  const r = "#ffffff";
  return Hf({ mainContainerPadding: `${xp}px`, iconH: ip, grid: D3, brdRad: op, offRad: N3, palette: { primary: { main: n2, contrastText: n2 }, secondary: { main: r, contrastText: r }, text: { primary: n2, secondary: `${n2}aa` }, background: { main: "#f5f5f5" } }, noBlurShadows: { active: `${1 * _a / 2}px ${1 * _a / 2}px 0 ${n2}`, none: `0 0 0 ${n2}`, transition: "box-shadow 0.2s ease-in-out" }, typography: { fontFamily: "Work Sans" }, components: { MuiButton: { styleOverrides: { root: { borderRadius: 8, border: `2px solid ${n2}`, boxShadow: `0 2px 6px ${n2}55`, color: n2, "&:hover": { backgroundColor: `${n2}10` } } } }, MuiChip: { styleOverrides: { root: { borderRadius: op, color: n2, border: `2px solid ${n2}`, backgroundColor: r } } }, MuiIconButton: { styleOverrides: { root: { width: ip, height: ip, borderRadius: op, backgroundColor: n2, "&:focus": { backgroundColor: Ja(n2, 0.15) }, "&:hover": { backgroundColor: Ja(n2, 0.15) }, "&.Mui-disabled": { color: n2, backgroundColor: r, border: `2px solid ${n2}` }, "& .MuiSvgIcon-root": { width: "80%", height: "80%", color: r } } }, variants: [{ props: { variant: "mini" }, style: { border: `4px solid ${n2}`, transform: "scale(0.5)", color: r, "& .MuiSvgIcon-root": { color: r } } }, { props: { variant: "inverted" }, style: { color: n2, backgroundColor: r, border: `2px solid ${n2}`, "&:hover": { backgroundColor: Ja(r, 0.1) }, "& .MuiSvgIcon-root": { color: n2 } } }] } } });
}
function oy(...n2) {
  return n2.reduce((r, a) => a == null ? r : function(...f) {
    r.apply(this, f), a.apply(this, f);
  }, () => {
  });
}
function I3(n2) {
  return I.jsx(y1, { ...n2, defaultTheme: nm, themeId: Fo });
}
function im(n2) {
  return function(a) {
    return I.jsx(I3, { styles: typeof n2 == "function" ? (u) => n2({ theme: u, ...a }) : n2 });
  };
}
function j3() {
  return Xp;
}
const Ee = CS;
function ze(n2) {
  return bS(n2);
}
function H3(n2) {
  return Re("MuiSvgIcon", n2);
}
ke("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const U3 = (n2) => {
  const { color: r, fontSize: a, classes: u } = n2, f = { root: ["root", r !== "inherit" && `color${wt(r)}`, `fontSize${wt(a)}`] };
  return Le(f, H3, u);
}, F3 = Ot("svg", { name: "MuiSvgIcon", slot: "Root", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.root, a.color !== "inherit" && r[`color${wt(a.color)}`], r[`fontSize${wt(a.fontSize)}`]];
} })(Ee(({ theme: n2 }) => {
  var _a2, _b2, _c, _d, _e, _f2, _g, _h, _i, _j, _k, _l, _m2, _n2;
  return { userSelect: "none", width: "1em", height: "1em", display: "inline-block", flexShrink: 0, transition: (_d = (_a2 = n2.transitions) == null ? void 0 : _a2.create) == null ? void 0 : _d.call(_a2, "fill", { duration: (_c = (_b2 = (n2.vars ?? n2).transitions) == null ? void 0 : _b2.duration) == null ? void 0 : _c.shorter }), variants: [{ props: (r) => !r.hasSvgAsChild, style: { fill: "currentColor" } }, { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } }, { props: { fontSize: "small" }, style: { fontSize: ((_f2 = (_e = n2.typography) == null ? void 0 : _e.pxToRem) == null ? void 0 : _f2.call(_e, 20)) || "1.25rem" } }, { props: { fontSize: "medium" }, style: { fontSize: ((_h = (_g = n2.typography) == null ? void 0 : _g.pxToRem) == null ? void 0 : _h.call(_g, 24)) || "1.5rem" } }, { props: { fontSize: "large" }, style: { fontSize: ((_j = (_i = n2.typography) == null ? void 0 : _i.pxToRem) == null ? void 0 : _j.call(_i, 35)) || "2.1875rem" } }, ...Object.entries((n2.vars ?? n2).palette).filter(([, r]) => r && r.main).map(([r]) => {
    var _a3, _b3;
    return { props: { color: r }, style: { color: (_b3 = (_a3 = (n2.vars ?? n2).palette) == null ? void 0 : _a3[r]) == null ? void 0 : _b3.main } };
  }), { props: { color: "action" }, style: { color: (_l = (_k = (n2.vars ?? n2).palette) == null ? void 0 : _k.action) == null ? void 0 : _l.active } }, { props: { color: "disabled" }, style: { color: (_n2 = (_m2 = (n2.vars ?? n2).palette) == null ? void 0 : _m2.action) == null ? void 0 : _n2.disabled } }, { props: { color: "inherit" }, style: { color: void 0 } }] };
})), Sp = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiSvgIcon" }), { children: f, className: h, color: g = "inherit", component: v = "svg", fontSize: y = "medium", htmlColor: b, inheritViewBox: S = false, titleAccess: E, viewBox: R = "0 0 24 24", ...k } = u, A = M.isValidElement(f) && f.type === "svg", O = { ...u, color: g, component: v, fontSize: y, instanceFontSize: r.fontSize, inheritViewBox: S, viewBox: R, hasSvgAsChild: A }, $ = {};
  S || ($.viewBox = R);
  const F = U3(O);
  return I.jsxs(F3, { as: v, className: qt(F.root, h), focusable: "false", color: b, "aria-hidden": E ? void 0 : true, role: E ? "img" : void 0, ref: a, ...$, ...k, ...A && f.props, ownerState: O, children: [A ? f.props.children : f, E ? I.jsx("title", { children: E }) : null] });
});
Sp.muiName = "SvgIcon";
function Er(n2, r) {
  function a(u, f) {
    return I.jsx(Sp, { "data-testid": void 0, ref: f, ...u, children: n2 });
  }
  return a.muiName = Sp.muiName, M.memo(M.forwardRef(a));
}
function j1(n2, r = 166) {
  let a;
  function u(...f) {
    const h = () => {
      n2.apply(this, f);
    };
    clearTimeout(a), a = setTimeout(h, r);
  }
  return u.clear = () => {
    clearTimeout(a);
  }, u;
}
function Ui(n2) {
  return n2 && n2.ownerDocument || document;
}
function wr(n2) {
  return Ui(n2).defaultView || window;
}
function wp(n2, r) {
  typeof n2 == "function" ? n2(r) : n2 && (n2.current = r);
}
function pu(n2) {
  const { controlled: r, default: a, name: u, state: f = "value" } = n2, { current: h } = M.useRef(r !== void 0), [g, v] = M.useState(a), y = h ? r : g, b = M.useCallback((S) => {
    h || v(S);
  }, []);
  return [y, b];
}
function xo(n2) {
  const r = M.useRef(n2);
  return wo(() => {
    r.current = n2;
  }), M.useRef((...a) => (0, r.current)(...a)).current;
}
function Fn(...n2) {
  const r = M.useRef(void 0), a = M.useCallback((u) => {
    const f = n2.map((h) => {
      if (h == null) return null;
      if (typeof h == "function") {
        const g = h, v = g(u);
        return typeof v == "function" ? v : () => {
          g(null);
        };
      }
      return h.current = u, () => {
        h.current = null;
      };
    });
    return () => {
      f.forEach((h) => h == null ? void 0 : h());
    };
  }, n2);
  return M.useMemo(() => n2.every((u) => u == null) ? null : (u) => {
    r.current && (r.current(), r.current = void 0), u != null && (r.current = a(u));
  }, n2);
}
function Z3(n2, r) {
  const a = n2.charCodeAt(2);
  return n2[0] === "o" && n2[1] === "n" && a >= 65 && a <= 90 && typeof r == "function";
}
function V3(n2, r) {
  if (!n2) return r;
  function a(g, v) {
    const y = {};
    return Object.keys(v).forEach((b) => {
      Z3(b, v[b]) && typeof g[b] == "function" && (y[b] = (...S) => {
        g[b](...S), v[b](...S);
      });
    }), y;
  }
  if (typeof n2 == "function" || typeof r == "function") return (g) => {
    const v = typeof r == "function" ? r(g) : r, y = typeof n2 == "function" ? n2({ ...g, ...v }) : n2, b = qt(g == null ? void 0 : g.className, v == null ? void 0 : v.className, y == null ? void 0 : y.className), S = a(y, v);
    return { ...v, ...y, ...S, ...!!b && { className: b }, ...(v == null ? void 0 : v.style) && (y == null ? void 0 : y.style) && { style: { ...v.style, ...y.style } }, ...(v == null ? void 0 : v.sx) && (y == null ? void 0 : y.sx) && { sx: [...Array.isArray(v.sx) ? v.sx : [v.sx], ...Array.isArray(y.sx) ? y.sx : [y.sx]] } };
  };
  const u = r, f = a(n2, u), h = qt(u == null ? void 0 : u.className, n2 == null ? void 0 : n2.className);
  return { ...r, ...n2, ...f, ...!!h && { className: h }, ...(u == null ? void 0 : u.style) && (n2 == null ? void 0 : n2.style) && { style: { ...u.style, ...n2.style } }, ...(u == null ? void 0 : u.sx) && (n2 == null ? void 0 : n2.sx) && { sx: [...Array.isArray(u.sx) ? u.sx : [u.sx], ...Array.isArray(n2.sx) ? n2.sx : [n2.sx]] } };
}
function H1(n2, r) {
  if (n2 == null) return {};
  var a = {};
  for (var u in n2) if ({}.hasOwnProperty.call(n2, u)) {
    if (r.indexOf(u) !== -1) continue;
    a[u] = n2[u];
  }
  return a;
}
function Cp(n2, r) {
  return Cp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, u) {
    return a.__proto__ = u, a;
  }, Cp(n2, r);
}
function U1(n2, r) {
  n2.prototype = Object.create(r.prototype), n2.prototype.constructor = n2, Cp(n2, r);
}
var om = Wy();
const nf = Dp(om), ry = { disabled: false }, _f = Xn.createContext(null);
var G3 = function(r) {
  return r.scrollTop;
}, fu = "unmounted", Ka = "exited", Xa = "entering", Gs = "entered", Tp = "exiting", Yo = function(n2) {
  U1(r, n2);
  function r(u, f) {
    var h;
    h = n2.call(this, u, f) || this;
    var g = f, v = g && !g.isMounting ? u.enter : u.appear, y;
    return h.appearStatus = null, u.in ? v ? (y = Ka, h.appearStatus = Xa) : y = Gs : u.unmountOnExit || u.mountOnEnter ? y = fu : y = Ka, h.state = { status: y }, h.nextCallback = null, h;
  }
  r.getDerivedStateFromProps = function(f, h) {
    var g = f.in;
    return g && h.status === fu ? { status: Ka } : null;
  };
  var a = r.prototype;
  return a.componentDidMount = function() {
    this.updateStatus(true, this.appearStatus);
  }, a.componentDidUpdate = function(f) {
    var h = null;
    if (f !== this.props) {
      var g = this.state.status;
      this.props.in ? g !== Xa && g !== Gs && (h = Xa) : (g === Xa || g === Gs) && (h = Tp);
    }
    this.updateStatus(false, h);
  }, a.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, a.getTimeouts = function() {
    var f = this.props.timeout, h, g, v;
    return h = g = v = f, f != null && typeof f != "number" && (h = f.exit, g = f.enter, v = f.appear !== void 0 ? f.appear : g), { exit: h, enter: g, appear: v };
  }, a.updateStatus = function(f, h) {
    if (f === void 0 && (f = false), h !== null) if (this.cancelNextCallback(), h === Xa) {
      if (this.props.unmountOnExit || this.props.mountOnEnter) {
        var g = this.props.nodeRef ? this.props.nodeRef.current : nf.findDOMNode(this);
        g && G3(g);
      }
      this.performEnter(f);
    } else this.performExit();
    else this.props.unmountOnExit && this.state.status === Ka && this.setState({ status: fu });
  }, a.performEnter = function(f) {
    var h = this, g = this.props.enter, v = this.context ? this.context.isMounting : f, y = this.props.nodeRef ? [v] : [nf.findDOMNode(this), v], b = y[0], S = y[1], E = this.getTimeouts(), R = v ? E.appear : E.enter;
    if (!f && !g || ry.disabled) {
      this.safeSetState({ status: Gs }, function() {
        h.props.onEntered(b);
      });
      return;
    }
    this.props.onEnter(b, S), this.safeSetState({ status: Xa }, function() {
      h.props.onEntering(b, S), h.onTransitionEnd(R, function() {
        h.safeSetState({ status: Gs }, function() {
          h.props.onEntered(b, S);
        });
      });
    });
  }, a.performExit = function() {
    var f = this, h = this.props.exit, g = this.getTimeouts(), v = this.props.nodeRef ? void 0 : nf.findDOMNode(this);
    if (!h || ry.disabled) {
      this.safeSetState({ status: Ka }, function() {
        f.props.onExited(v);
      });
      return;
    }
    this.props.onExit(v), this.safeSetState({ status: Tp }, function() {
      f.props.onExiting(v), f.onTransitionEnd(g.exit, function() {
        f.safeSetState({ status: Ka }, function() {
          f.props.onExited(v);
        });
      });
    });
  }, a.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, a.safeSetState = function(f, h) {
    h = this.setNextCallback(h), this.setState(f, h);
  }, a.setNextCallback = function(f) {
    var h = this, g = true;
    return this.nextCallback = function(v) {
      g && (g = false, h.nextCallback = null, f(v));
    }, this.nextCallback.cancel = function() {
      g = false;
    }, this.nextCallback;
  }, a.onTransitionEnd = function(f, h) {
    this.setNextCallback(h);
    var g = this.props.nodeRef ? this.props.nodeRef.current : nf.findDOMNode(this), v = f == null && !this.props.addEndListener;
    if (!g || v) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var y = this.props.nodeRef ? [this.nextCallback] : [g, this.nextCallback], b = y[0], S = y[1];
      this.props.addEndListener(b, S);
    }
    f != null && setTimeout(this.nextCallback, f);
  }, a.render = function() {
    var f = this.state.status;
    if (f === fu) return null;
    var h = this.props, g = h.children;
    h.in, h.mountOnEnter, h.unmountOnExit, h.appear, h.enter, h.exit, h.timeout, h.addEndListener, h.onEnter, h.onEntering, h.onEntered, h.onExit, h.onExiting, h.onExited, h.nodeRef;
    var v = H1(h, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return Xn.createElement(_f.Provider, { value: null }, typeof g == "function" ? g(f, v) : Xn.cloneElement(Xn.Children.only(g), v));
  }, r;
}(Xn.Component);
Yo.contextType = _f;
Yo.propTypes = {};
function Vs() {
}
Yo.defaultProps = { in: false, mountOnEnter: false, unmountOnExit: false, appear: false, enter: true, exit: true, onEnter: Vs, onEntering: Vs, onEntered: Vs, onExit: Vs, onExiting: Vs, onExited: Vs };
Yo.UNMOUNTED = fu;
Yo.EXITED = Ka;
Yo.ENTERING = Xa;
Yo.ENTERED = Gs;
Yo.EXITING = Tp;
function q3(n2) {
  if (n2 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n2;
}
function rm(n2, r) {
  var a = function(h) {
    return r && M.isValidElement(h) ? r(h) : h;
  }, u = /* @__PURE__ */ Object.create(null);
  return n2 && M.Children.map(n2, function(f) {
    return f;
  }).forEach(function(f) {
    u[f.key] = a(f);
  }), u;
}
function Y3(n2, r) {
  n2 = n2 || {}, r = r || {};
  function a(S) {
    return S in r ? r[S] : n2[S];
  }
  var u = /* @__PURE__ */ Object.create(null), f = [];
  for (var h in n2) h in r ? f.length && (u[h] = f, f = []) : f.push(h);
  var g, v = {};
  for (var y in r) {
    if (u[y]) for (g = 0; g < u[y].length; g++) {
      var b = u[y][g];
      v[u[y][g]] = a(b);
    }
    v[y] = a(y);
  }
  for (g = 0; g < f.length; g++) v[f[g]] = a(f[g]);
  return v;
}
function Qa(n2, r, a) {
  return a[r] != null ? a[r] : n2.props[r];
}
function K3(n2, r) {
  return rm(n2.children, function(a) {
    return M.cloneElement(a, { onExited: r.bind(null, a), in: true, appear: Qa(a, "appear", n2), enter: Qa(a, "enter", n2), exit: Qa(a, "exit", n2) });
  });
}
function X3(n2, r, a) {
  var u = rm(n2.children), f = Y3(r, u);
  return Object.keys(f).forEach(function(h) {
    var g = f[h];
    if (M.isValidElement(g)) {
      var v = h in r, y = h in u, b = r[h], S = M.isValidElement(b) && !b.props.in;
      y && (!v || S) ? f[h] = M.cloneElement(g, { onExited: a.bind(null, g), in: true, exit: Qa(g, "exit", n2), enter: Qa(g, "enter", n2) }) : !y && v && !S ? f[h] = M.cloneElement(g, { in: false }) : y && v && M.isValidElement(b) && (f[h] = M.cloneElement(g, { onExited: a.bind(null, g), in: b.props.in, exit: Qa(g, "exit", n2), enter: Qa(g, "enter", n2) }));
    }
  }), f;
}
var W3 = Object.values || function(n2) {
  return Object.keys(n2).map(function(r) {
    return n2[r];
  });
}, Q3 = { component: "div", childFactory: function(r) {
  return r;
} }, am = function(n2) {
  U1(r, n2);
  function r(u, f) {
    var h;
    h = n2.call(this, u, f) || this;
    var g = h.handleExited.bind(q3(h));
    return h.state = { contextValue: { isMounting: true }, handleExited: g, firstRender: true }, h;
  }
  var a = r.prototype;
  return a.componentDidMount = function() {
    this.mounted = true, this.setState({ contextValue: { isMounting: false } });
  }, a.componentWillUnmount = function() {
    this.mounted = false;
  }, r.getDerivedStateFromProps = function(f, h) {
    var g = h.children, v = h.handleExited, y = h.firstRender;
    return { children: y ? K3(f, v) : X3(f, g, v), firstRender: false };
  }, a.handleExited = function(f, h) {
    var g = rm(this.props.children);
    f.key in g || (f.props.onExited && f.props.onExited(h), this.mounted && this.setState(function(v) {
      var y = mf({}, v.children);
      return delete y[f.key], { children: y };
    }));
  }, a.render = function() {
    var f = this.props, h = f.component, g = f.childFactory, v = H1(f, ["component", "childFactory"]), y = this.state.contextValue, b = W3(this.state.children).map(g);
    return delete v.appear, delete v.enter, delete v.exit, h === null ? Xn.createElement(_f.Provider, { value: y }, b) : Xn.createElement(_f.Provider, { value: y }, Xn.createElement(h, v, b));
  }, r;
}(Xn.Component);
am.propTypes = {};
am.defaultProps = Q3;
const ay = {};
function F1(n2, r) {
  const a = M.useRef(ay);
  return a.current === ay && (a.current = n2(r)), a;
}
const J3 = [];
function tw(n2) {
  M.useEffect(n2, J3);
}
class sm {
  constructor() {
    __publicField(this, "currentId", null);
    __publicField(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    __publicField(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new sm();
  }
  start(r, a) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, a();
    }, r);
  }
}
function Z1() {
  const n2 = F1(sm.create).current;
  return tw(n2.disposeEffect), n2;
}
const V1 = (n2) => n2.scrollTop;
function bf(n2, r) {
  const { timeout: a, easing: u, style: f = {} } = n2;
  return { duration: f.transitionDuration ?? (typeof a == "number" ? a : a[r.mode] || 0), easing: f.transitionTimingFunction ?? (typeof u == "object" ? u[r.mode] : u), delay: f.transitionDelay };
}
function ew(n2) {
  return Re("MuiPaper", n2);
}
ke("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const nw = (n2) => {
  const { square: r, elevation: a, variant: u, classes: f } = n2, h = { root: ["root", u, !r && "rounded", u === "elevation" && `elevation${a}`] };
  return Le(h, ew, f);
}, iw = Ot("div", { name: "MuiPaper", slot: "Root", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.root, r[a.variant], !a.square && r.rounded, a.variant === "elevation" && r[`elevation${a.elevation}`]];
} })(Ee(({ theme: n2 }) => ({ backgroundColor: (n2.vars || n2).palette.background.paper, color: (n2.vars || n2).palette.text.primary, transition: n2.transitions.create("box-shadow"), variants: [{ props: ({ ownerState: r }) => !r.square, style: { borderRadius: n2.shape.borderRadius } }, { props: { variant: "outlined" }, style: { border: `1px solid ${(n2.vars || n2).palette.divider}` } }, { props: { variant: "elevation" }, style: { boxShadow: "var(--Paper-shadow)", backgroundImage: "var(--Paper-overlay)" } }] }))), lm = M.forwardRef(function(r, a) {
  var _a2;
  const u = ze({ props: r, name: "MuiPaper" }), f = qo(), { className: h, component: g = "div", elevation: v = 1, square: y = false, variant: b = "elevation", ...S } = u, E = { ...u, component: g, elevation: v, square: y, variant: b }, R = nw(E);
  return I.jsx(iw, { as: g, ownerState: E, className: qt(R.root, h), ref: a, ...S, style: { ...b === "elevation" && { "--Paper-shadow": (f.vars || f).shadows[v], ...f.vars && { "--Paper-overlay": (_a2 = f.vars.overlays) == null ? void 0 : _a2[v] }, ...!f.vars && f.palette.mode === "dark" && { "--Paper-overlay": `linear-gradient(${wu("#fff", bp(v))}, ${wu("#fff", bp(v))})` } }, ...S.style } });
});
function xf(n2) {
  return typeof n2 == "string";
}
function G1(n2, r, a) {
  return n2 === void 0 || xf(n2) ? r : { ...r, ownerState: { ...r.ownerState, ...a } };
}
function q1(n2, r, a) {
  return typeof n2 == "function" ? n2(r, a) : n2;
}
function Y1(n2, r = []) {
  if (n2 === void 0) return {};
  const a = {};
  return Object.keys(n2).filter((u) => u.match(/^on[A-Z]/) && typeof n2[u] == "function" && !r.includes(u)).forEach((u) => {
    a[u] = n2[u];
  }), a;
}
function sy(n2) {
  if (n2 === void 0) return {};
  const r = {};
  return Object.keys(n2).filter((a) => !(a.match(/^on[A-Z]/) && typeof n2[a] == "function")).forEach((a) => {
    r[a] = n2[a];
  }), r;
}
function K1(n2) {
  const { getSlotProps: r, additionalProps: a, externalSlotProps: u, externalForwardedProps: f, className: h } = n2;
  if (!r) {
    const k = qt(a == null ? void 0 : a.className, h, f == null ? void 0 : f.className, u == null ? void 0 : u.className), A = { ...a == null ? void 0 : a.style, ...f == null ? void 0 : f.style, ...u == null ? void 0 : u.style }, O = { ...a, ...f, ...u };
    return k.length > 0 && (O.className = k), Object.keys(A).length > 0 && (O.style = A), { props: O, internalRef: void 0 };
  }
  const g = Y1({ ...f, ...u }), v = sy(u), y = sy(f), b = r(g), S = qt(b == null ? void 0 : b.className, a == null ? void 0 : a.className, h, f == null ? void 0 : f.className, u == null ? void 0 : u.className), E = { ...b == null ? void 0 : b.style, ...a == null ? void 0 : a.style, ...f == null ? void 0 : f.style, ...u == null ? void 0 : u.style }, R = { ...b, ...a, ...y, ...v };
  return S.length > 0 && (R.className = S), Object.keys(E).length > 0 && (R.style = E), { props: R, internalRef: b.ref };
}
function yn(n2, r) {
  const { className: a, elementType: u, ownerState: f, externalForwardedProps: h, internalForwardedProps: g, shouldForwardComponentProp: v = false, ...y } = r, { component: b, slots: S = { [n2]: void 0 }, slotProps: E = { [n2]: void 0 }, ...R } = h, k = S[n2] || u, A = q1(E[n2], f), { props: { component: O, ...$ }, internalRef: F } = K1({ className: a, ...y, externalForwardedProps: n2 === "root" ? R : void 0, externalSlotProps: A }), V = Fn(F, A == null ? void 0 : A.ref, r.ref), D = n2 === "root" ? O || b : O, N = G1(k, { ...n2 === "root" && !b && !S[n2] && g, ...n2 !== "root" && !S[n2] && g, ...$, ...D && !v && { as: D }, ...D && v && { component: D }, ref: V }, f);
  return [k, N];
}
function Sf(n2) {
  try {
    return n2.matches(":focus-visible");
  } catch {
  }
  return false;
}
class wf {
  constructor() {
    __publicField(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = true, this.mounted.resolve());
    });
    this.ref = { current: null }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
  }
  static create() {
    return new wf();
  }
  static use() {
    const r = F1(wf.create).current, [a, u] = M.useState(false);
    return r.shouldMount = a, r.setShouldMount = u, M.useEffect(r.mountEffect, [a]), r;
  }
  mount() {
    return this.mounted || (this.mounted = rw(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  start(...r) {
    this.mount().then(() => {
      var _a2;
      return (_a2 = this.ref.current) == null ? void 0 : _a2.start(...r);
    });
  }
  stop(...r) {
    this.mount().then(() => {
      var _a2;
      return (_a2 = this.ref.current) == null ? void 0 : _a2.stop(...r);
    });
  }
  pulsate(...r) {
    this.mount().then(() => {
      var _a2;
      return (_a2 = this.ref.current) == null ? void 0 : _a2.pulsate(...r);
    });
  }
}
function ow() {
  return wf.use();
}
function rw() {
  let n2, r;
  const a = new Promise((u, f) => {
    n2 = u, r = f;
  });
  return a.resolve = n2, a.reject = r, a;
}
function aw(n2) {
  const { className: r, classes: a, pulsate: u = false, rippleX: f, rippleY: h, rippleSize: g, in: v, onExited: y, timeout: b } = n2, [S, E] = M.useState(false), R = qt(r, a.ripple, a.rippleVisible, u && a.ripplePulsate), k = { width: g, height: g, top: -(g / 2) + h, left: -(g / 2) + f }, A = qt(a.child, S && a.childLeaving, u && a.childPulsate);
  return !v && !S && E(true), M.useEffect(() => {
    if (!v && y != null) {
      const O = setTimeout(y, b);
      return () => {
        clearTimeout(O);
      };
    }
  }, [y, v, b]), I.jsx("span", { className: R, style: k, children: I.jsx("span", { className: A }) });
}
const no = ke("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ep = 550, sw = 80, lw = ku`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, uw = ku`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, cw = ku`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, fw = Ot("span", { name: "MuiTouchRipple", slot: "Root" })({ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: 0, top: 0, right: 0, bottom: 0, left: 0, borderRadius: "inherit" }), dw = Ot(aw, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${no.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${lw};
    animation-duration: ${Ep}ms;
    animation-timing-function: ${({ theme: n2 }) => n2.transitions.easing.easeInOut};
  }

  &.${no.ripplePulsate} {
    animation-duration: ${({ theme: n2 }) => n2.transitions.duration.shorter}ms;
  }

  & .${no.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${no.childLeaving} {
    opacity: 0;
    animation-name: ${uw};
    animation-duration: ${Ep}ms;
    animation-timing-function: ${({ theme: n2 }) => n2.transitions.easing.easeInOut};
  }

  & .${no.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${cw};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: n2 }) => n2.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, hw = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiTouchRipple" }), { center: f = false, classes: h = {}, className: g, ...v } = u, [y, b] = M.useState([]), S = M.useRef(0), E = M.useRef(null);
  M.useEffect(() => {
    E.current && (E.current(), E.current = null);
  }, [y]);
  const R = M.useRef(false), k = Z1(), A = M.useRef(null), O = M.useRef(null), $ = M.useCallback((N) => {
    const { pulsate: P, rippleX: U, rippleY: K, rippleSize: J, cb: it } = N;
    b((ut) => [...ut, I.jsx(dw, { classes: { ripple: qt(h.ripple, no.ripple), rippleVisible: qt(h.rippleVisible, no.rippleVisible), ripplePulsate: qt(h.ripplePulsate, no.ripplePulsate), child: qt(h.child, no.child), childLeaving: qt(h.childLeaving, no.childLeaving), childPulsate: qt(h.childPulsate, no.childPulsate) }, timeout: Ep, pulsate: P, rippleX: U, rippleY: K, rippleSize: J }, S.current)]), S.current += 1, E.current = it;
  }, [h]), F = M.useCallback((N = {}, P = {}, U = () => {
  }) => {
    const { pulsate: K = false, center: J = f || P.pulsate, fakeElement: it = false } = P;
    if ((N == null ? void 0 : N.type) === "mousedown" && R.current) {
      R.current = false;
      return;
    }
    (N == null ? void 0 : N.type) === "touchstart" && (R.current = true);
    const ut = it ? null : O.current, ot = ut ? ut.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
    let w, st, W;
    if (J || N === void 0 || N.clientX === 0 && N.clientY === 0 || !N.clientX && !N.touches) w = Math.round(ot.width / 2), st = Math.round(ot.height / 2);
    else {
      const { clientX: et, clientY: B } = N.touches && N.touches.length > 0 ? N.touches[0] : N;
      w = Math.round(et - ot.left), st = Math.round(B - ot.top);
    }
    if (J) W = Math.sqrt((2 * ot.width ** 2 + ot.height ** 2) / 3), W % 2 === 0 && (W += 1);
    else {
      const et = Math.max(Math.abs((ut ? ut.clientWidth : 0) - w), w) * 2 + 2, B = Math.max(Math.abs((ut ? ut.clientHeight : 0) - st), st) * 2 + 2;
      W = Math.sqrt(et ** 2 + B ** 2);
    }
    (N == null ? void 0 : N.touches) ? A.current === null && (A.current = () => {
      $({ pulsate: K, rippleX: w, rippleY: st, rippleSize: W, cb: U });
    }, k.start(sw, () => {
      A.current && (A.current(), A.current = null);
    })) : $({ pulsate: K, rippleX: w, rippleY: st, rippleSize: W, cb: U });
  }, [f, $, k]), V = M.useCallback(() => {
    F({}, { pulsate: true });
  }, [F]), D = M.useCallback((N, P) => {
    if (k.clear(), (N == null ? void 0 : N.type) === "touchend" && A.current) {
      A.current(), A.current = null, k.start(0, () => {
        D(N, P);
      });
      return;
    }
    A.current = null, b((U) => U.length > 0 ? U.slice(1) : U), E.current = P;
  }, [k]);
  return M.useImperativeHandle(a, () => ({ pulsate: V, start: F, stop: D }), [V, F, D]), I.jsx(fw, { className: qt(no.root, h.root, g), ref: O, ...v, children: I.jsx(am, { component: null, exit: true, children: y }) });
});
function pw(n2) {
  return Re("MuiButtonBase", n2);
}
const mw = ke("MuiButtonBase", ["root", "disabled", "focusVisible"]), gw = (n2) => {
  const { disabled: r, focusVisible: a, focusVisibleClassName: u, classes: f } = n2, g = Le({ root: ["root", r && "disabled", a && "focusVisible"] }, pw, f);
  return a && u && (g.root += ` ${u}`), g;
}, vw = Ot("button", { name: "MuiButtonBase", slot: "Root" })({ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", boxSizing: "border-box", WebkitTapHighlightColor: "transparent", backgroundColor: "transparent", outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: "pointer", userSelect: "none", verticalAlign: "middle", MozAppearance: "none", WebkitAppearance: "none", textDecoration: "none", color: "inherit", "&::-moz-focus-inner": { borderStyle: "none" }, [`&.${mw.disabled}`]: { pointerEvents: "none", cursor: "default" }, "@media print": { colorAdjust: "exact" } }), Cf = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiButtonBase" }), { action: f, centerRipple: h = false, children: g, className: v, component: y = "button", disabled: b = false, disableRipple: S = false, disableTouchRipple: E = false, focusRipple: R = false, focusVisibleClassName: k, LinkComponent: A = "a", onBlur: O, onClick: $, onContextMenu: F, onDragLeave: V, onFocus: D, onFocusVisible: N, onKeyDown: P, onKeyUp: U, onMouseDown: K, onMouseLeave: J, onMouseUp: it, onTouchEnd: ut, onTouchMove: ot, onTouchStart: w, tabIndex: st = 0, TouchRippleProps: W, touchRippleRef: et, type: B, ...tt } = u, rt = M.useRef(null), gt = ow(), z = Fn(gt.ref, et), [q, ft] = M.useState(false);
  b && q && ft(false), M.useImperativeHandle(f, () => ({ focusVisible: () => {
    ft(true), rt.current.focus();
  } }), []);
  const dt = gt.shouldMount && !S && !b;
  M.useEffect(() => {
    q && R && !S && gt.pulsate();
  }, [S, R, q, gt]);
  const bt = xr(gt, "start", K, E), _t = xr(gt, "stop", F, E), ct = xr(gt, "stop", V, E), At = xr(gt, "stop", it, E), Lt = xr(gt, "stop", (Mt) => {
    q && Mt.preventDefault(), J && J(Mt);
  }, E), $t = xr(gt, "start", w, E), Rt = xr(gt, "stop", ut, E), Ut = xr(gt, "stop", ot, E), Wt = xr(gt, "stop", (Mt) => {
    Sf(Mt.target) || ft(false), O && O(Mt);
  }, false), te = xo((Mt) => {
    rt.current || (rt.current = Mt.currentTarget), Sf(Mt.target) && (ft(true), N && N(Mt)), D && D(Mt);
  }), Zt = () => {
    const Mt = rt.current;
    return y && y !== "button" && !(Mt.tagName === "A" && Mt.href);
  }, de = xo((Mt) => {
    R && !Mt.repeat && q && Mt.key === " " && gt.stop(Mt, () => {
      gt.start(Mt);
    }), Mt.target === Mt.currentTarget && Zt() && Mt.key === " " && Mt.preventDefault(), P && P(Mt), Mt.target === Mt.currentTarget && Zt() && Mt.key === "Enter" && !b && (Mt.preventDefault(), $ && $(Mt));
  }), ie = xo((Mt) => {
    R && Mt.key === " " && q && !Mt.defaultPrevented && gt.stop(Mt, () => {
      gt.pulsate(Mt);
    }), U && U(Mt), $ && Mt.target === Mt.currentTarget && Zt() && Mt.key === " " && !Mt.defaultPrevented && $(Mt);
  });
  let ue = y;
  ue === "button" && (tt.href || tt.to) && (ue = A);
  const Ct = {};
  ue === "button" ? (Ct.type = B === void 0 ? "button" : B, Ct.disabled = b) : (!tt.href && !tt.to && (Ct.role = "button"), b && (Ct["aria-disabled"] = b));
  const _e = Fn(a, rt), Bt = { ...u, centerRipple: h, component: y, disabled: b, disableRipple: S, disableTouchRipple: E, focusRipple: R, tabIndex: st, focusVisible: q }, Jt = gw(Bt);
  return I.jsxs(vw, { as: ue, className: qt(Jt.root, v), ownerState: Bt, onBlur: Wt, onClick: $, onContextMenu: _t, onFocus: te, onKeyDown: de, onKeyUp: ie, onMouseDown: bt, onMouseLeave: Lt, onMouseUp: At, onDragLeave: ct, onTouchEnd: Rt, onTouchMove: Ut, onTouchStart: $t, ref: _e, tabIndex: b ? -1 : st, type: B, ...Ct, ...tt, children: [g, dt ? I.jsx(hw, { ref: z, center: h, ...W }) : null] });
});
function xr(n2, r, a, u = false) {
  return xo((f) => (a && a(f), u || n2[r](f), true));
}
function yw(n2) {
  return typeof n2.main == "string";
}
function _w(n2, r = []) {
  if (!yw(n2)) return false;
  for (const a of r) if (!n2.hasOwnProperty(a) || typeof n2[a] != "string") return false;
  return true;
}
function xi(n2 = []) {
  return ([, r]) => r && _w(r, n2);
}
function bw(n2) {
  return Re("MuiCircularProgress", n2);
}
ke("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const bo = 44, Mp = ku`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Op = ku`
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
`, xw = typeof Mp != "string" ? Vp`
        animation: ${Mp} 1.4s linear infinite;
      ` : null, Sw = typeof Op != "string" ? Vp`
        animation: ${Op} 1.4s ease-in-out infinite;
      ` : null, ww = (n2) => {
  const { classes: r, variant: a, color: u, disableShrink: f } = n2, h = { root: ["root", a, `color${wt(u)}`], svg: ["svg"], track: ["track"], circle: ["circle", `circle${wt(a)}`, f && "circleDisableShrink"] };
  return Le(h, bw, r);
}, Cw = Ot("span", { name: "MuiCircularProgress", slot: "Root", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.root, r[a.variant], r[`color${wt(a.color)}`]];
} })(Ee(({ theme: n2 }) => ({ display: "inline-block", variants: [{ props: { variant: "determinate" }, style: { transition: n2.transitions.create("transform") } }, { props: { variant: "indeterminate" }, style: xw || { animation: `${Mp} 1.4s linear infinite` } }, ...Object.entries(n2.palette).filter(xi()).map(([r]) => ({ props: { color: r }, style: { color: (n2.vars || n2).palette[r].main } }))] }))), Tw = Ot("svg", { name: "MuiCircularProgress", slot: "Svg" })({ display: "block" }), Ew = Ot("circle", { name: "MuiCircularProgress", slot: "Circle", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.circle, r[`circle${wt(a.variant)}`], a.disableShrink && r.circleDisableShrink];
} })(Ee(({ theme: n2 }) => ({ stroke: "currentColor", variants: [{ props: { variant: "determinate" }, style: { transition: n2.transitions.create("stroke-dashoffset") } }, { props: { variant: "indeterminate" }, style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 } }, { props: ({ ownerState: r }) => r.variant === "indeterminate" && !r.disableShrink, style: Sw || { animation: `${Op} 1.4s ease-in-out infinite` } }] }))), Mw = Ot("circle", { name: "MuiCircularProgress", slot: "Track" })(Ee(({ theme: n2 }) => ({ stroke: "currentColor", opacity: (n2.vars || n2).palette.action.activatedOpacity }))), um = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiCircularProgress" }), { className: f, color: h = "primary", disableShrink: g = false, enableTrackSlot: v = false, size: y = 40, style: b, thickness: S = 3.6, value: E = 0, variant: R = "indeterminate", ...k } = u, A = { ...u, color: h, disableShrink: g, size: y, thickness: S, value: E, variant: R, enableTrackSlot: v }, O = ww(A), $ = {}, F = {}, V = {};
  if (R === "determinate") {
    const D = 2 * Math.PI * ((bo - S) / 2);
    $.strokeDasharray = D.toFixed(3), V["aria-valuenow"] = Math.round(E), $.strokeDashoffset = `${((100 - E) / 100 * D).toFixed(3)}px`, F.transform = "rotate(-90deg)";
  }
  return I.jsx(Cw, { className: qt(O.root, f), style: { width: y, height: y, ...F, ...b }, ownerState: A, ref: a, role: "progressbar", ...V, ...k, children: I.jsxs(Tw, { className: O.svg, ownerState: A, viewBox: `${bo / 2} ${bo / 2} ${bo} ${bo}`, children: [v ? I.jsx(Mw, { className: O.track, ownerState: A, cx: bo, cy: bo, r: (bo - S) / 2, fill: "none", strokeWidth: S, "aria-hidden": "true" }) : null, I.jsx(Ew, { className: O.circle, style: $, ownerState: A, cx: bo, cy: bo, r: (bo - S) / 2, fill: "none", strokeWidth: S })] }) });
});
function Ow(n2) {
  return Re("MuiIconButton", n2);
}
const ly = ke("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), Aw = (n2) => {
  const { classes: r, disabled: a, color: u, edge: f, size: h, loading: g } = n2, v = { root: ["root", g && "loading", a && "disabled", u !== "default" && `color${wt(u)}`, f && `edge${wt(f)}`, `size${wt(h)}`], loadingIndicator: ["loadingIndicator"], loadingWrapper: ["loadingWrapper"] };
  return Le(v, Ow, r);
}, Rw = Ot(Cf, { name: "MuiIconButton", slot: "Root", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.root, a.loading && r.loading, a.color !== "default" && r[`color${wt(a.color)}`], a.edge && r[`edge${wt(a.edge)}`], r[`size${wt(a.size)}`]];
} })(Ee(({ theme: n2 }) => ({ textAlign: "center", flex: "0 0 auto", fontSize: n2.typography.pxToRem(24), padding: 8, borderRadius: "50%", color: (n2.vars || n2).palette.action.active, transition: n2.transitions.create("background-color", { duration: n2.transitions.duration.shortest }), variants: [{ props: (r) => !r.disableRipple, style: { "--IconButton-hoverBg": n2.alpha((n2.vars || n2).palette.action.active, (n2.vars || n2).palette.action.hoverOpacity), "&:hover": { backgroundColor: "var(--IconButton-hoverBg)", "@media (hover: none)": { backgroundColor: "transparent" } } } }, { props: { edge: "start" }, style: { marginLeft: -12 } }, { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } }, { props: { edge: "end" }, style: { marginRight: -12 } }, { props: { edge: "end", size: "small" }, style: { marginRight: -3 } }] })), Ee(({ theme: n2 }) => ({ variants: [{ props: { color: "inherit" }, style: { color: "inherit" } }, ...Object.entries(n2.palette).filter(xi()).map(([r]) => ({ props: { color: r }, style: { color: (n2.vars || n2).palette[r].main } })), ...Object.entries(n2.palette).filter(xi()).map(([r]) => ({ props: { color: r }, style: { "--IconButton-hoverBg": n2.alpha((n2.vars || n2).palette[r].main, (n2.vars || n2).palette.action.hoverOpacity) } })), { props: { size: "small" }, style: { padding: 5, fontSize: n2.typography.pxToRem(18) } }, { props: { size: "large" }, style: { padding: 12, fontSize: n2.typography.pxToRem(28) } }], [`&.${ly.disabled}`]: { backgroundColor: "transparent", color: (n2.vars || n2).palette.action.disabled }, [`&.${ly.loading}`]: { color: "transparent" } }))), kw = Ot("span", { name: "MuiIconButton", slot: "LoadingIndicator" })(({ theme: n2 }) => ({ display: "none", position: "absolute", visibility: "visible", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: (n2.vars || n2).palette.action.disabled, variants: [{ props: { loading: true }, style: { display: "flex" } }] })), Cr = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiIconButton" }), { edge: f = false, children: h, className: g, color: v = "default", disabled: y = false, disableFocusRipple: b = false, size: S = "medium", id: E, loading: R = null, loadingIndicator: k, ...A } = u, O = el(E), $ = k ?? I.jsx(um, { "aria-labelledby": O, color: "inherit", size: 16 }), F = { ...u, edge: f, color: v, disabled: y, disableFocusRipple: b, loading: R, loadingIndicator: $, size: S }, V = Aw(F);
  return I.jsxs(Rw, { id: R ? O : E, className: qt(V.root, g), centerRipple: true, focusRipple: !b, disabled: y || R, ref: a, ...A, ownerState: F, children: [typeof R == "boolean" && I.jsx("span", { className: V.loadingWrapper, style: { display: "contents" }, children: I.jsx(kw, { className: V.loadingIndicator, ownerState: F, children: R && $ }) }), h] });
}), Lw = Er(I.jsx("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }));
function zw(n2) {
  return Re("MuiTypography", n2);
}
ke("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Pw = { primary: true, secondary: true, error: true, info: true, success: true, warning: true, textPrimary: true, textSecondary: true, textDisabled: true }, Bw = j3(), Dw = (n2) => {
  const { align: r, gutterBottom: a, noWrap: u, paragraph: f, variant: h, classes: g } = n2, v = { root: ["root", h, n2.align !== "inherit" && `align${wt(r)}`, a && "gutterBottom", u && "noWrap", f && "paragraph"] };
  return Le(v, zw, g);
}, Nw = Ot("span", { name: "MuiTypography", slot: "Root", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.root, a.variant && r[a.variant], a.align !== "inherit" && r[`align${wt(a.align)}`], a.noWrap && r.noWrap, a.gutterBottom && r.gutterBottom, a.paragraph && r.paragraph];
} })(Ee(({ theme: n2 }) => {
  var _a2;
  return { margin: 0, variants: [{ props: { variant: "inherit" }, style: { font: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } }, ...Object.entries(n2.typography).filter(([r, a]) => r !== "inherit" && a && typeof a == "object").map(([r, a]) => ({ props: { variant: r }, style: a })), ...Object.entries(n2.palette).filter(xi()).map(([r]) => ({ props: { color: r }, style: { color: (n2.vars || n2).palette[r].main } })), ...Object.entries(((_a2 = n2.palette) == null ? void 0 : _a2.text) || {}).filter(([, r]) => typeof r == "string").map(([r]) => ({ props: { color: `text${wt(r)}` }, style: { color: (n2.vars || n2).palette.text[r] } })), { props: ({ ownerState: r }) => r.align !== "inherit", style: { textAlign: "var(--Typography-textAlign)" } }, { props: ({ ownerState: r }) => r.noWrap, style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, { props: ({ ownerState: r }) => r.gutterBottom, style: { marginBottom: "0.35em" } }, { props: ({ ownerState: r }) => r.paragraph, style: { marginBottom: 16 } }] };
})), uy = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6", subtitle1: "h6", subtitle2: "h6", body1: "p", body2: "p", inherit: "p" }, Ff = M.forwardRef(function(r, a) {
  const { color: u, ...f } = ze({ props: r, name: "MuiTypography" }), h = !Pw[u], g = Bw({ ...f, ...h && { color: u } }), { align: v = "inherit", className: y, component: b, gutterBottom: S = false, noWrap: E = false, paragraph: R = false, variant: k = "body1", variantMapping: A = uy, ...O } = g, $ = { ...g, align: v, color: u, className: y, component: b, gutterBottom: S, noWrap: E, paragraph: R, variant: k, variantMapping: A }, F = b || (R ? "p" : A[k] || uy[k]) || "span", V = Dw($);
  return I.jsx(Nw, { as: F, ref: a, className: qt(V.root, y), ...O, ownerState: $, style: { ...v !== "inherit" && { "--Typography-textAlign": v }, ...O.style } });
});
function $w(n2) {
  const r = M.useRef({});
  return M.useEffect(() => {
    r.current = n2;
  }), r.current;
}
function cy({ array1: n2, array2: r, parser: a = (u) => u }) {
  return n2 && r && n2.length === r.length && n2.every((u, f) => a(u) === a(r[f]));
}
function fy(n2) {
  return n2.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function X1(n2 = {}) {
  const { ignoreAccents: r = true, ignoreCase: a = true, limit: u, matchFrom: f = "any", stringify: h, trim: g = false } = n2;
  return (v, { inputValue: y, getOptionLabel: b }) => {
    let S = g ? y.trim() : y;
    a && (S = S.toLowerCase()), r && (S = fy(S));
    const E = S ? v.filter((R) => {
      let k = (h || b)(R);
      return a && (k = k.toLowerCase()), r && (k = fy(k)), f === "start" ? k.startsWith(S) : k.includes(S);
    }) : v;
    return typeof u == "number" ? E.slice(0, u) : E;
  };
}
const Iw = X1(), jw = 5, Hw = (n2) => {
  var _a2;
  return n2.current !== null && ((_a2 = n2.current.parentElement) == null ? void 0 : _a2.contains(document.activeElement));
}, Uw = [];
function dy(n2, r, a, u) {
  if (r || n2 == null || u) return "";
  const f = a(n2);
  return typeof f == "string" ? f : "";
}
function Fw(n2) {
  const { unstable_isActiveElementInListbox: r = Hw, unstable_classNamePrefix: a = "Mui", autoComplete: u = false, autoHighlight: f = false, autoSelect: h = false, blurOnSelect: g = false, clearOnBlur: v = !n2.freeSolo, clearOnEscape: y = false, componentName: b = "useAutocomplete", defaultValue: S = n2.multiple ? Uw : null, disableClearable: E = false, disableCloseOnSelect: R = false, disabled: k, disabledItemsFocusable: A = false, disableListWrap: O = false, filterOptions: $ = Iw, filterSelectedOptions: F = false, freeSolo: V = false, getOptionDisabled: D, getOptionKey: N, getOptionLabel: P = (pt) => pt.label ?? pt, groupBy: U, handleHomeEndKeys: K = !n2.freeSolo, id: J, includeInputInList: it = false, inputValue: ut, isOptionEqualToValue: ot = (pt, ht) => pt === ht, multiple: w = false, onChange: st, onClose: W, onHighlightChange: et, onInputChange: B, onOpen: tt, open: rt, openOnFocus: gt = false, options: z, readOnly: q = false, renderValue: ft, selectOnFocus: dt = !n2.freeSolo, value: bt } = n2, _t = el(J);
  let ct = P;
  ct = (pt) => {
    const ht = P(pt);
    return typeof ht != "string" ? String(ht) : ht;
  };
  const At = M.useRef(false), Lt = M.useRef(true), $t = M.useRef(null), Rt = M.useRef(null), [Ut, Wt] = M.useState(null), [te, Zt] = M.useState(-1), de = f ? 0 : -1, ie = M.useRef(de), ue = M.useRef(dy(S ?? bt, w, ct)).current, [Ct, _e] = pu({ controlled: bt, default: S, name: b }), [Bt, Jt] = pu({ controlled: ut, default: ue, name: b, state: "inputValue" }), [Mt, tn] = M.useState(false), be = M.useCallback((pt, ht, Tt) => {
    if (!(w ? Ct.length < ht.length : ht !== null) && !v) return;
    const Yt = dy(ht, w, ct, ft);
    Bt !== Yt && (Jt(Yt), B && B(pt, Yt, Tt));
  }, [ct, Bt, w, B, Jt, v, Ct, ft]), [Ze, ce] = pu({ controlled: rt, default: false, name: b, state: "open" }), [Vt, oe] = M.useState(true), he = !w && Ct != null && Bt === ct(Ct), xe = Ze && !q, Ht = xe ? $(z.filter((pt) => !(F && (w ? Ct : [Ct]).some((ht) => ht !== null && ot(pt, ht)))), { inputValue: he && Vt ? "" : Bt, getOptionLabel: ct }) : [], fn = $w({ filteredOptions: Ht, value: Ct, inputValue: Bt });
  M.useEffect(() => {
    const pt = Ct !== fn.value;
    Mt && !pt || V && !pt || be(null, Ct, "reset");
  }, [Ct, be, Mt, fn.value, V]);
  const Bn = Ze && Ht.length > 0 && !q, rn = xo((pt) => {
    if (pt === -1) $t.current.focus();
    else {
      const ht = ft ? "data-item-index" : "data-tag-index";
      Ut.querySelector(`[${ht}="${pt}"]`).focus();
    }
  });
  M.useEffect(() => {
    w && te > Ct.length - 1 && (Zt(-1), rn(-1));
  }, [Ct, w, te, rn]);
  function Pt(pt, ht) {
    if (!Rt.current || pt < 0 || pt >= Ht.length) return -1;
    let Tt = pt;
    for (; ; ) {
      const It = Rt.current.querySelector(`[data-option-index="${Tt}"]`), Yt = A ? false : !It || It.disabled || It.getAttribute("aria-disabled") === "true";
      if (It && It.hasAttribute("tabindex") && !Yt) return Tt;
      if (ht === "next" ? Tt = (Tt + 1) % Ht.length : Tt = (Tt - 1 + Ht.length) % Ht.length, Tt === pt) return -1;
    }
  }
  const ne = xo(({ event: pt, index: ht, reason: Tt }) => {
    if (ie.current = ht, ht === -1 ? $t.current.removeAttribute("aria-activedescendant") : $t.current.setAttribute("aria-activedescendant", `${_t}-option-${ht}`), et && ["mouse", "keyboard", "touch"].includes(Tt) && et(pt, ht === -1 ? null : Ht[ht], Tt), !Rt.current) return;
    const It = Rt.current.querySelector(`[role="option"].${a}-focused`);
    It && (It.classList.remove(`${a}-focused`), It.classList.remove(`${a}-focusVisible`));
    let Yt = Rt.current;
    if (Rt.current.getAttribute("role") !== "listbox" && (Yt = Rt.current.parentElement.querySelector('[role="listbox"]')), !Yt) return;
    if (ht === -1) {
      Yt.scrollTop = 0;
      return;
    }
    const Ge = Rt.current.querySelector(`[data-option-index="${ht}"]`);
    if (Ge && (Ge.classList.add(`${a}-focused`), Tt === "keyboard" && Ge.classList.add(`${a}-focusVisible`), Yt.scrollHeight > Yt.clientHeight && Tt !== "mouse" && Tt !== "touch")) {
      const qe = Ge, ti = Yt.clientHeight + Yt.scrollTop, fo = qe.offsetTop + qe.offsetHeight;
      fo > ti ? Yt.scrollTop = fo - Yt.clientHeight : qe.offsetTop - qe.offsetHeight * (U ? 1.3 : 0) < Yt.scrollTop && (Yt.scrollTop = qe.offsetTop - qe.offsetHeight * (U ? 1.3 : 0));
    }
  }), re = xo(({ event: pt, diff: ht, direction: Tt = "next", reason: It }) => {
    if (!xe) return;
    const Ge = Pt((() => {
      const qe = Ht.length - 1;
      if (ht === "reset") return de;
      if (ht === "start") return 0;
      if (ht === "end") return qe;
      const ti = ie.current + ht;
      return ti < 0 ? ti === -1 && it ? -1 : O && ie.current !== -1 || Math.abs(ht) > 1 ? 0 : qe : ti > qe ? ti === qe + 1 && it ? -1 : O || Math.abs(ht) > 1 ? qe : 0 : ti;
    })(), Tt);
    if (ne({ index: Ge, reason: It, event: pt }), u && ht !== "reset") if (Ge === -1) $t.current.value = Bt;
    else {
      const qe = ct(Ht[Ge]);
      $t.current.value = qe, qe.toLowerCase().indexOf(Bt.toLowerCase()) === 0 && Bt.length > 0 && $t.current.setSelectionRange(Bt.length, qe.length);
    }
  }), Wn = !cy({ array1: fn.filteredOptions, array2: Ht, parser: ct }), lo = () => {
    const pt = (ht, Tt) => {
      const It = ht ? ct(ht) : "", Yt = Tt ? ct(Tt) : "";
      return It === Yt;
    };
    if (ie.current !== -1 && !cy({ array1: fn.filteredOptions, array2: Ht, parser: ct }) && fn.inputValue === Bt && (w ? Ct.length === fn.value.length && fn.value.every((ht, Tt) => ct(Ct[Tt]) === ct(ht)) : pt(fn.value, Ct))) {
      const ht = fn.filteredOptions[ie.current];
      if (ht) return Ht.findIndex((Tt) => ct(Tt) === ct(ht));
    }
    return -1;
  }, uo = M.useCallback(() => {
    if (!xe) return;
    const pt = lo();
    if (pt !== -1) {
      ie.current = pt;
      return;
    }
    const ht = w ? Ct[0] : Ct;
    if (Ht.length === 0 || ht == null) {
      re({ diff: "reset" });
      return;
    }
    if (Rt.current) {
      if (ht != null) {
        const Tt = Ht[ie.current];
        if (w && Tt && Ct.findIndex((Yt) => ot(Tt, Yt)) !== -1) return;
        const It = Ht.findIndex((Yt) => ot(Yt, ht));
        It === -1 ? re({ diff: "reset" }) : ne({ index: It });
        return;
      }
      if (ie.current >= Ht.length - 1) {
        ne({ index: Ht.length - 1 });
        return;
      }
      ne({ index: ie.current });
    }
  }, [Ht.length, w ? false : Ct, F, re, ne, xe, Bt, w]), Qn = xo((pt) => {
    wp(Rt, pt), pt && uo();
  });
  M.useEffect(() => {
    (Wn || xe) && uo();
  }, [uo, Wn, xe]);
  const Tn = (pt) => {
    Ze || (ce(true), oe(true), tt && tt(pt));
  }, co = (pt, ht) => {
    Ze && (ce(false), W && W(pt, ht));
  }, ui = (pt, ht, Tt, It) => {
    if (w) {
      if (Ct.length === ht.length && Ct.every((Yt, Ge) => Yt === ht[Ge])) return;
    } else if (Ct === ht) return;
    st && st(pt, ht, Tt, It), _e(ht);
  }, ci = M.useRef(false), fi = (pt, ht, Tt = "selectOption", It = "options") => {
    let Yt = Tt, Ge = ht;
    if (w) {
      Ge = Array.isArray(Ct) ? Ct.slice() : [];
      const qe = Ge.findIndex((ti) => ot(ht, ti));
      qe === -1 ? Ge.push(ht) : It !== "freeSolo" && (Ge.splice(qe, 1), Yt = "removeOption");
    }
    be(pt, Ge, Yt), ui(pt, Ge, Yt, { option: ht }), !R && (!pt || !pt.ctrlKey && !pt.metaKey) && co(pt, Yt), (g === true || g === "touch" && ci.current || g === "mouse" && !ci.current) && $t.current.blur();
  };
  function Ko(pt, ht) {
    if (pt === -1) return -1;
    let Tt = pt;
    for (; ; ) {
      if (ht === "next" && Tt === Ct.length || ht === "previous" && Tt === -1) return -1;
      const It = ft ? "data-item-index" : "data-tag-index", Yt = Ut.querySelector(`[${It}="${Tt}"]`);
      if (!Yt || !Yt.hasAttribute("tabindex") || Yt.disabled || Yt.getAttribute("aria-disabled") === "true") Tt += ht === "next" ? 1 : -1;
      else return Tt;
    }
  }
  const Zi = (pt, ht) => {
    if (!w) return;
    Bt === "" && co(pt, "toggleInput");
    let Tt = te;
    te === -1 ? Bt === "" && ht === "previous" && (Tt = Ct.length - 1) : (Tt += ht === "next" ? 1 : -1, Tt < 0 && (Tt = 0), Tt === Ct.length && (Tt = -1)), Tt = Ko(Tt, ht), Zt(Tt), rn(Tt);
  }, To = (pt) => {
    At.current = true, Jt(""), B && B(pt, "", "clear"), ui(pt, w ? [] : null, "clear");
  }, di = (pt) => (ht) => {
    if (pt.onKeyDown && pt.onKeyDown(ht), !ht.defaultMuiPrevented && (te !== -1 && !["ArrowLeft", "ArrowRight"].includes(ht.key) && (Zt(-1), rn(-1)), ht.which !== 229)) switch (ht.key) {
      case "Home":
        xe && K && (ht.preventDefault(), re({ diff: "start", direction: "next", reason: "keyboard", event: ht }));
        break;
      case "End":
        xe && K && (ht.preventDefault(), re({ diff: "end", direction: "previous", reason: "keyboard", event: ht }));
        break;
      case "PageUp":
        ht.preventDefault(), re({ diff: -5, direction: "previous", reason: "keyboard", event: ht }), Tn(ht);
        break;
      case "PageDown":
        ht.preventDefault(), re({ diff: jw, direction: "next", reason: "keyboard", event: ht }), Tn(ht);
        break;
      case "ArrowDown":
        ht.preventDefault(), re({ diff: 1, direction: "next", reason: "keyboard", event: ht }), Tn(ht);
        break;
      case "ArrowUp":
        ht.preventDefault(), re({ diff: -1, direction: "previous", reason: "keyboard", event: ht }), Tn(ht);
        break;
      case "ArrowLeft":
        !w && ft ? rn(0) : Zi(ht, "previous");
        break;
      case "ArrowRight":
        !w && ft ? rn(-1) : Zi(ht, "next");
        break;
      case "Enter":
        if (ie.current !== -1 && xe) {
          const Tt = Ht[ie.current], It = D ? D(Tt) : false;
          if (ht.preventDefault(), It) return;
          fi(ht, Tt, "selectOption"), u && $t.current.setSelectionRange($t.current.value.length, $t.current.value.length);
        } else V && Bt !== "" && he === false && (w && ht.preventDefault(), fi(ht, Bt, "createOption", "freeSolo"));
        break;
      case "Escape":
        xe ? (ht.preventDefault(), ht.stopPropagation(), co(ht, "escape")) : y && (Bt !== "" || w && Ct.length > 0 || ft) && (ht.preventDefault(), ht.stopPropagation(), To(ht));
        break;
      case "Backspace":
        if (w && !q && Bt === "" && Ct.length > 0) {
          const Tt = te === -1 ? Ct.length - 1 : te, It = Ct.slice();
          It.splice(Tt, 1), ui(ht, It, "removeOption", { option: Ct[Tt] });
        }
        !w && ft && !q && (_e(null), rn(-1));
        break;
      case "Delete":
        if (w && !q && Bt === "" && Ct.length > 0 && te !== -1) {
          const Tt = te, It = Ct.slice();
          It.splice(Tt, 1), ui(ht, It, "removeOption", { option: Ct[Tt] });
        }
        !w && ft && !q && (_e(null), rn(-1));
        break;
    }
  }, Qe = (pt) => {
    tn(true), gt && !At.current && Tn(pt);
  }, an = (pt) => {
    if (r(Rt)) {
      $t.current.focus();
      return;
    }
    tn(false), Lt.current = true, At.current = false, h && ie.current !== -1 && xe ? fi(pt, Ht[ie.current], "blur") : h && V && Bt !== "" ? fi(pt, Bt, "blur", "freeSolo") : v && be(pt, Ct, "blur"), co(pt, "blur");
  }, hi = (pt) => {
    const ht = pt.target.value;
    Bt !== ht && (Jt(ht), oe(false), B && B(pt, ht, "input")), ht === "" ? !E && !w && ui(pt, null, "clear") : Tn(pt);
  }, En = (pt) => {
    const ht = Number(pt.currentTarget.getAttribute("data-option-index"));
    ie.current !== ht && ne({ event: pt, index: ht, reason: "mouse" });
  }, Dt = (pt) => {
    ne({ event: pt, index: Number(pt.currentTarget.getAttribute("data-option-index")), reason: "touch" }), ci.current = true;
  }, Mr = (pt) => {
    const ht = Number(pt.currentTarget.getAttribute("data-option-index"));
    fi(pt, Ht[ht], "selectOption"), ci.current = false;
  }, Xo = (pt) => (ht) => {
    const Tt = Ct.slice();
    Tt.splice(pt, 1), ui(ht, Tt, "removeOption", { option: Ct[pt] });
  }, pi = (pt) => {
    ui(pt, null, "removeOption", { option: Ct });
  }, Ve = (pt) => {
    Ze ? co(pt, "toggleInput") : Tn(pt);
  }, Pe = (pt) => {
    pt.currentTarget.contains(pt.target) && pt.target.getAttribute("id") !== _t && pt.preventDefault();
  }, Mn = (pt) => {
    pt.currentTarget.contains(pt.target) && ($t.current.focus(), dt && Lt.current && $t.current.selectionEnd - $t.current.selectionStart === 0 && $t.current.select(), Lt.current = false);
  }, Zn = (pt) => {
    !k && (Bt === "" || !Ze) && Ve(pt);
  };
  let Jn = V && Bt.length > 0;
  Jn = Jn || (w ? Ct.length > 0 : Ct !== null);
  let Je = Ht;
  return U && (Je = Ht.reduce((pt, ht, Tt) => {
    const It = U(ht);
    return pt.length > 0 && pt[pt.length - 1].group === It ? pt[pt.length - 1].options.push(ht) : pt.push({ key: Tt, index: Tt, group: It, options: [ht] }), pt;
  }, [])), k && Mt && an(), { getRootProps: (pt = {}) => ({ ...pt, onKeyDown: di(pt), onMouseDown: Pe, onClick: Mn }), getInputLabelProps: () => ({ id: `${_t}-label`, htmlFor: _t }), getInputProps: () => ({ id: _t, value: Bt, onBlur: an, onFocus: Qe, onChange: hi, onMouseDown: Zn, "aria-activedescendant": xe ? "" : null, "aria-autocomplete": u ? "both" : "list", "aria-controls": Bn ? `${_t}-listbox` : void 0, "aria-expanded": Bn, autoComplete: "off", ref: $t, autoCapitalize: "none", spellCheck: "false", role: "combobox", disabled: k }), getClearProps: () => ({ tabIndex: -1, type: "button", onClick: To }), getItemProps: ({ index: pt = 0 } = {}) => ({ ...w && { key: pt }, ...ft ? { "data-item-index": pt } : { "data-tag-index": pt }, tabIndex: -1, ...!q && { onDelete: w ? Xo(pt) : pi } }), getPopupIndicatorProps: () => ({ tabIndex: -1, type: "button", onClick: Ve }), getTagProps: ({ index: pt }) => ({ key: pt, "data-tag-index": pt, tabIndex: -1, ...!q && { onDelete: Xo(pt) } }), getListboxProps: () => ({ role: "listbox", id: `${_t}-listbox`, "aria-labelledby": `${_t}-label`, ref: Qn, onMouseDown: (pt) => {
    pt.preventDefault();
  } }), getOptionProps: ({ index: pt, option: ht }) => {
    const Tt = (w ? Ct : [Ct]).some((Yt) => Yt != null && ot(ht, Yt)), It = D ? D(ht) : false;
    return { key: (N == null ? void 0 : N(ht)) ?? ct(ht), tabIndex: -1, role: "option", id: `${_t}-option-${pt}`, onMouseMove: En, onClick: Mr, onTouchStart: Dt, "data-option-index": pt, "aria-disabled": It, "aria-selected": Tt };
  }, id: _t, inputValue: Bt, value: Ct, dirty: Jn, expanded: xe && Ut, popupOpen: xe, focused: Mt || te !== -1, anchorEl: Ut, setAnchorEl: Wt, focusedItem: te, focusedTag: te, groupedOptions: Je };
}
var Si = "top", ro = "bottom", ao = "right", wi = "left", cm = "auto", Pu = [Si, ro, ao, wi], Xs = "start", Tu = "end", Zw = "clippingParents", W1 = "viewport", ru = "popper", Vw = "reference", hy = Pu.reduce(function(n2, r) {
  return n2.concat([r + "-" + Xs, r + "-" + Tu]);
}, []), Q1 = [].concat(Pu, [cm]).reduce(function(n2, r) {
  return n2.concat([r, r + "-" + Xs, r + "-" + Tu]);
}, []), Gw = "beforeRead", qw = "read", Yw = "afterRead", Kw = "beforeMain", Xw = "main", Ww = "afterMain", Qw = "beforeWrite", Jw = "write", t5 = "afterWrite", e5 = [Gw, qw, Yw, Kw, Xw, Ww, Qw, Jw, t5];
function Go(n2) {
  return n2 ? (n2.nodeName || "").toLowerCase() : null;
}
function Fi(n2) {
  if (n2 == null) return window;
  if (n2.toString() !== "[object Window]") {
    var r = n2.ownerDocument;
    return r && r.defaultView || window;
  }
  return n2;
}
function ns(n2) {
  var r = Fi(n2).Element;
  return n2 instanceof r || n2 instanceof Element;
}
function oo(n2) {
  var r = Fi(n2).HTMLElement;
  return n2 instanceof r || n2 instanceof HTMLElement;
}
function fm(n2) {
  if (typeof ShadowRoot > "u") return false;
  var r = Fi(n2).ShadowRoot;
  return n2 instanceof r || n2 instanceof ShadowRoot;
}
function n5(n2) {
  var r = n2.state;
  Object.keys(r.elements).forEach(function(a) {
    var u = r.styles[a] || {}, f = r.attributes[a] || {}, h = r.elements[a];
    !oo(h) || !Go(h) || (Object.assign(h.style, u), Object.keys(f).forEach(function(g) {
      var v = f[g];
      v === false ? h.removeAttribute(g) : h.setAttribute(g, v === true ? "" : v);
    }));
  });
}
function i5(n2) {
  var r = n2.state, a = { popper: { position: r.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(r.elements.popper.style, a.popper), r.styles = a, r.elements.arrow && Object.assign(r.elements.arrow.style, a.arrow), function() {
    Object.keys(r.elements).forEach(function(u) {
      var f = r.elements[u], h = r.attributes[u] || {}, g = Object.keys(r.styles.hasOwnProperty(u) ? r.styles[u] : a[u]), v = g.reduce(function(y, b) {
        return y[b] = "", y;
      }, {});
      !oo(f) || !Go(f) || (Object.assign(f.style, v), Object.keys(h).forEach(function(y) {
        f.removeAttribute(y);
      }));
    });
  };
}
const o5 = { name: "applyStyles", enabled: true, phase: "write", fn: n5, effect: i5, requires: ["computeStyles"] };
function Vo(n2) {
  return n2.split("-")[0];
}
var ts = Math.max, Tf = Math.min, Ws = Math.round;
function Ap() {
  var n2 = navigator.userAgentData;
  return n2 != null && n2.brands && Array.isArray(n2.brands) ? n2.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function J1() {
  return !/^((?!chrome|android).)*safari/i.test(Ap());
}
function Qs(n2, r, a) {
  r === void 0 && (r = false), a === void 0 && (a = false);
  var u = n2.getBoundingClientRect(), f = 1, h = 1;
  r && oo(n2) && (f = n2.offsetWidth > 0 && Ws(u.width) / n2.offsetWidth || 1, h = n2.offsetHeight > 0 && Ws(u.height) / n2.offsetHeight || 1);
  var g = ns(n2) ? Fi(n2) : window, v = g.visualViewport, y = !J1() && a, b = (u.left + (y && v ? v.offsetLeft : 0)) / f, S = (u.top + (y && v ? v.offsetTop : 0)) / h, E = u.width / f, R = u.height / h;
  return { width: E, height: R, top: S, right: b + E, bottom: S + R, left: b, x: b, y: S };
}
function dm(n2) {
  var r = Qs(n2), a = n2.offsetWidth, u = n2.offsetHeight;
  return Math.abs(r.width - a) <= 1 && (a = r.width), Math.abs(r.height - u) <= 1 && (u = r.height), { x: n2.offsetLeft, y: n2.offsetTop, width: a, height: u };
}
function t_(n2, r) {
  var a = r.getRootNode && r.getRootNode();
  if (n2.contains(r)) return true;
  if (a && fm(a)) {
    var u = r;
    do {
      if (u && n2.isSameNode(u)) return true;
      u = u.parentNode || u.host;
    } while (u);
  }
  return false;
}
function Tr(n2) {
  return Fi(n2).getComputedStyle(n2);
}
function r5(n2) {
  return ["table", "td", "th"].indexOf(Go(n2)) >= 0;
}
function ba(n2) {
  return ((ns(n2) ? n2.ownerDocument : n2.document) || window.document).documentElement;
}
function Zf(n2) {
  return Go(n2) === "html" ? n2 : n2.assignedSlot || n2.parentNode || (fm(n2) ? n2.host : null) || ba(n2);
}
function py(n2) {
  return !oo(n2) || Tr(n2).position === "fixed" ? null : n2.offsetParent;
}
function a5(n2) {
  var r = /firefox/i.test(Ap()), a = /Trident/i.test(Ap());
  if (a && oo(n2)) {
    var u = Tr(n2);
    if (u.position === "fixed") return null;
  }
  var f = Zf(n2);
  for (fm(f) && (f = f.host); oo(f) && ["html", "body"].indexOf(Go(f)) < 0; ) {
    var h = Tr(f);
    if (h.transform !== "none" || h.perspective !== "none" || h.contain === "paint" || ["transform", "perspective"].indexOf(h.willChange) !== -1 || r && h.willChange === "filter" || r && h.filter && h.filter !== "none") return f;
    f = f.parentNode;
  }
  return null;
}
function Bu(n2) {
  for (var r = Fi(n2), a = py(n2); a && r5(a) && Tr(a).position === "static"; ) a = py(a);
  return a && (Go(a) === "html" || Go(a) === "body" && Tr(a).position === "static") ? r : a || a5(n2) || r;
}
function hm(n2) {
  return ["top", "bottom"].indexOf(n2) >= 0 ? "x" : "y";
}
function mu(n2, r, a) {
  return ts(n2, Tf(r, a));
}
function s5(n2, r, a) {
  var u = mu(n2, r, a);
  return u > a ? a : u;
}
function e_() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function n_(n2) {
  return Object.assign({}, e_(), n2);
}
function i_(n2, r) {
  return r.reduce(function(a, u) {
    return a[u] = n2, a;
  }, {});
}
var l5 = function(r, a) {
  return r = typeof r == "function" ? r(Object.assign({}, a.rects, { placement: a.placement })) : r, n_(typeof r != "number" ? r : i_(r, Pu));
};
function u5(n2) {
  var r, a = n2.state, u = n2.name, f = n2.options, h = a.elements.arrow, g = a.modifiersData.popperOffsets, v = Vo(a.placement), y = hm(v), b = [wi, ao].indexOf(v) >= 0, S = b ? "height" : "width";
  if (!(!h || !g)) {
    var E = l5(f.padding, a), R = dm(h), k = y === "y" ? Si : wi, A = y === "y" ? ro : ao, O = a.rects.reference[S] + a.rects.reference[y] - g[y] - a.rects.popper[S], $ = g[y] - a.rects.reference[y], F = Bu(h), V = F ? y === "y" ? F.clientHeight || 0 : F.clientWidth || 0 : 0, D = O / 2 - $ / 2, N = E[k], P = V - R[S] - E[A], U = V / 2 - R[S] / 2 + D, K = mu(N, U, P), J = y;
    a.modifiersData[u] = (r = {}, r[J] = K, r.centerOffset = K - U, r);
  }
}
function c5(n2) {
  var r = n2.state, a = n2.options, u = a.element, f = u === void 0 ? "[data-popper-arrow]" : u;
  f != null && (typeof f == "string" && (f = r.elements.popper.querySelector(f), !f) || t_(r.elements.popper, f) && (r.elements.arrow = f));
}
const f5 = { name: "arrow", enabled: true, phase: "main", fn: u5, effect: c5, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Js(n2) {
  return n2.split("-")[1];
}
var d5 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function h5(n2, r) {
  var a = n2.x, u = n2.y, f = r.devicePixelRatio || 1;
  return { x: Ws(a * f) / f || 0, y: Ws(u * f) / f || 0 };
}
function my(n2) {
  var r, a = n2.popper, u = n2.popperRect, f = n2.placement, h = n2.variation, g = n2.offsets, v = n2.position, y = n2.gpuAcceleration, b = n2.adaptive, S = n2.roundOffsets, E = n2.isFixed, R = g.x, k = R === void 0 ? 0 : R, A = g.y, O = A === void 0 ? 0 : A, $ = typeof S == "function" ? S({ x: k, y: O }) : { x: k, y: O };
  k = $.x, O = $.y;
  var F = g.hasOwnProperty("x"), V = g.hasOwnProperty("y"), D = wi, N = Si, P = window;
  if (b) {
    var U = Bu(a), K = "clientHeight", J = "clientWidth";
    if (U === Fi(a) && (U = ba(a), Tr(U).position !== "static" && v === "absolute" && (K = "scrollHeight", J = "scrollWidth")), U = U, f === Si || (f === wi || f === ao) && h === Tu) {
      N = ro;
      var it = E && U === P && P.visualViewport ? P.visualViewport.height : U[K];
      O -= it - u.height, O *= y ? 1 : -1;
    }
    if (f === wi || (f === Si || f === ro) && h === Tu) {
      D = ao;
      var ut = E && U === P && P.visualViewport ? P.visualViewport.width : U[J];
      k -= ut - u.width, k *= y ? 1 : -1;
    }
  }
  var ot = Object.assign({ position: v }, b && d5), w = S === true ? h5({ x: k, y: O }, Fi(a)) : { x: k, y: O };
  if (k = w.x, O = w.y, y) {
    var st;
    return Object.assign({}, ot, (st = {}, st[N] = V ? "0" : "", st[D] = F ? "0" : "", st.transform = (P.devicePixelRatio || 1) <= 1 ? "translate(" + k + "px, " + O + "px)" : "translate3d(" + k + "px, " + O + "px, 0)", st));
  }
  return Object.assign({}, ot, (r = {}, r[N] = V ? O + "px" : "", r[D] = F ? k + "px" : "", r.transform = "", r));
}
function p5(n2) {
  var r = n2.state, a = n2.options, u = a.gpuAcceleration, f = u === void 0 ? true : u, h = a.adaptive, g = h === void 0 ? true : h, v = a.roundOffsets, y = v === void 0 ? true : v, b = { placement: Vo(r.placement), variation: Js(r.placement), popper: r.elements.popper, popperRect: r.rects.popper, gpuAcceleration: f, isFixed: r.options.strategy === "fixed" };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, my(Object.assign({}, b, { offsets: r.modifiersData.popperOffsets, position: r.options.strategy, adaptive: g, roundOffsets: y })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, my(Object.assign({}, b, { offsets: r.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: y })))), r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-placement": r.placement });
}
const m5 = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: p5, data: {} };
var of = { passive: true };
function g5(n2) {
  var r = n2.state, a = n2.instance, u = n2.options, f = u.scroll, h = f === void 0 ? true : f, g = u.resize, v = g === void 0 ? true : g, y = Fi(r.elements.popper), b = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return h && b.forEach(function(S) {
    S.addEventListener("scroll", a.update, of);
  }), v && y.addEventListener("resize", a.update, of), function() {
    h && b.forEach(function(S) {
      S.removeEventListener("scroll", a.update, of);
    }), v && y.removeEventListener("resize", a.update, of);
  };
}
const v5 = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: g5, data: {} };
var y5 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function hf(n2) {
  return n2.replace(/left|right|bottom|top/g, function(r) {
    return y5[r];
  });
}
var _5 = { start: "end", end: "start" };
function gy(n2) {
  return n2.replace(/start|end/g, function(r) {
    return _5[r];
  });
}
function pm(n2) {
  var r = Fi(n2), a = r.pageXOffset, u = r.pageYOffset;
  return { scrollLeft: a, scrollTop: u };
}
function mm(n2) {
  return Qs(ba(n2)).left + pm(n2).scrollLeft;
}
function b5(n2, r) {
  var a = Fi(n2), u = ba(n2), f = a.visualViewport, h = u.clientWidth, g = u.clientHeight, v = 0, y = 0;
  if (f) {
    h = f.width, g = f.height;
    var b = J1();
    (b || !b && r === "fixed") && (v = f.offsetLeft, y = f.offsetTop);
  }
  return { width: h, height: g, x: v + mm(n2), y };
}
function x5(n2) {
  var r, a = ba(n2), u = pm(n2), f = (r = n2.ownerDocument) == null ? void 0 : r.body, h = ts(a.scrollWidth, a.clientWidth, f ? f.scrollWidth : 0, f ? f.clientWidth : 0), g = ts(a.scrollHeight, a.clientHeight, f ? f.scrollHeight : 0, f ? f.clientHeight : 0), v = -u.scrollLeft + mm(n2), y = -u.scrollTop;
  return Tr(f || a).direction === "rtl" && (v += ts(a.clientWidth, f ? f.clientWidth : 0) - h), { width: h, height: g, x: v, y };
}
function gm(n2) {
  var r = Tr(n2), a = r.overflow, u = r.overflowX, f = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(a + f + u);
}
function o_(n2) {
  return ["html", "body", "#document"].indexOf(Go(n2)) >= 0 ? n2.ownerDocument.body : oo(n2) && gm(n2) ? n2 : o_(Zf(n2));
}
function gu(n2, r) {
  var a;
  r === void 0 && (r = []);
  var u = o_(n2), f = u === ((a = n2.ownerDocument) == null ? void 0 : a.body), h = Fi(u), g = f ? [h].concat(h.visualViewport || [], gm(u) ? u : []) : u, v = r.concat(g);
  return f ? v : v.concat(gu(Zf(g)));
}
function Rp(n2) {
  return Object.assign({}, n2, { left: n2.x, top: n2.y, right: n2.x + n2.width, bottom: n2.y + n2.height });
}
function S5(n2, r) {
  var a = Qs(n2, false, r === "fixed");
  return a.top = a.top + n2.clientTop, a.left = a.left + n2.clientLeft, a.bottom = a.top + n2.clientHeight, a.right = a.left + n2.clientWidth, a.width = n2.clientWidth, a.height = n2.clientHeight, a.x = a.left, a.y = a.top, a;
}
function vy(n2, r, a) {
  return r === W1 ? Rp(b5(n2, a)) : ns(r) ? S5(r, a) : Rp(x5(ba(n2)));
}
function w5(n2) {
  var r = gu(Zf(n2)), a = ["absolute", "fixed"].indexOf(Tr(n2).position) >= 0, u = a && oo(n2) ? Bu(n2) : n2;
  return ns(u) ? r.filter(function(f) {
    return ns(f) && t_(f, u) && Go(f) !== "body";
  }) : [];
}
function C5(n2, r, a, u) {
  var f = r === "clippingParents" ? w5(n2) : [].concat(r), h = [].concat(f, [a]), g = h[0], v = h.reduce(function(y, b) {
    var S = vy(n2, b, u);
    return y.top = ts(S.top, y.top), y.right = Tf(S.right, y.right), y.bottom = Tf(S.bottom, y.bottom), y.left = ts(S.left, y.left), y;
  }, vy(n2, g, u));
  return v.width = v.right - v.left, v.height = v.bottom - v.top, v.x = v.left, v.y = v.top, v;
}
function r_(n2) {
  var r = n2.reference, a = n2.element, u = n2.placement, f = u ? Vo(u) : null, h = u ? Js(u) : null, g = r.x + r.width / 2 - a.width / 2, v = r.y + r.height / 2 - a.height / 2, y;
  switch (f) {
    case Si:
      y = { x: g, y: r.y - a.height };
      break;
    case ro:
      y = { x: g, y: r.y + r.height };
      break;
    case ao:
      y = { x: r.x + r.width, y: v };
      break;
    case wi:
      y = { x: r.x - a.width, y: v };
      break;
    default:
      y = { x: r.x, y: r.y };
  }
  var b = f ? hm(f) : null;
  if (b != null) {
    var S = b === "y" ? "height" : "width";
    switch (h) {
      case Xs:
        y[b] = y[b] - (r[S] / 2 - a[S] / 2);
        break;
      case Tu:
        y[b] = y[b] + (r[S] / 2 - a[S] / 2);
        break;
    }
  }
  return y;
}
function Eu(n2, r) {
  r === void 0 && (r = {});
  var a = r, u = a.placement, f = u === void 0 ? n2.placement : u, h = a.strategy, g = h === void 0 ? n2.strategy : h, v = a.boundary, y = v === void 0 ? Zw : v, b = a.rootBoundary, S = b === void 0 ? W1 : b, E = a.elementContext, R = E === void 0 ? ru : E, k = a.altBoundary, A = k === void 0 ? false : k, O = a.padding, $ = O === void 0 ? 0 : O, F = n_(typeof $ != "number" ? $ : i_($, Pu)), V = R === ru ? Vw : ru, D = n2.rects.popper, N = n2.elements[A ? V : R], P = C5(ns(N) ? N : N.contextElement || ba(n2.elements.popper), y, S, g), U = Qs(n2.elements.reference), K = r_({ reference: U, element: D, placement: f }), J = Rp(Object.assign({}, D, K)), it = R === ru ? J : U, ut = { top: P.top - it.top + F.top, bottom: it.bottom - P.bottom + F.bottom, left: P.left - it.left + F.left, right: it.right - P.right + F.right }, ot = n2.modifiersData.offset;
  if (R === ru && ot) {
    var w = ot[f];
    Object.keys(ut).forEach(function(st) {
      var W = [ao, ro].indexOf(st) >= 0 ? 1 : -1, et = [Si, ro].indexOf(st) >= 0 ? "y" : "x";
      ut[st] += w[et] * W;
    });
  }
  return ut;
}
function T5(n2, r) {
  r === void 0 && (r = {});
  var a = r, u = a.placement, f = a.boundary, h = a.rootBoundary, g = a.padding, v = a.flipVariations, y = a.allowedAutoPlacements, b = y === void 0 ? Q1 : y, S = Js(u), E = S ? v ? hy : hy.filter(function(A) {
    return Js(A) === S;
  }) : Pu, R = E.filter(function(A) {
    return b.indexOf(A) >= 0;
  });
  R.length === 0 && (R = E);
  var k = R.reduce(function(A, O) {
    return A[O] = Eu(n2, { placement: O, boundary: f, rootBoundary: h, padding: g })[Vo(O)], A;
  }, {});
  return Object.keys(k).sort(function(A, O) {
    return k[A] - k[O];
  });
}
function E5(n2) {
  if (Vo(n2) === cm) return [];
  var r = hf(n2);
  return [gy(n2), r, gy(r)];
}
function M5(n2) {
  var r = n2.state, a = n2.options, u = n2.name;
  if (!r.modifiersData[u]._skip) {
    for (var f = a.mainAxis, h = f === void 0 ? true : f, g = a.altAxis, v = g === void 0 ? true : g, y = a.fallbackPlacements, b = a.padding, S = a.boundary, E = a.rootBoundary, R = a.altBoundary, k = a.flipVariations, A = k === void 0 ? true : k, O = a.allowedAutoPlacements, $ = r.options.placement, F = Vo($), V = F === $, D = y || (V || !A ? [hf($)] : E5($)), N = [$].concat(D).reduce(function(bt, _t) {
      return bt.concat(Vo(_t) === cm ? T5(r, { placement: _t, boundary: S, rootBoundary: E, padding: b, flipVariations: A, allowedAutoPlacements: O }) : _t);
    }, []), P = r.rects.reference, U = r.rects.popper, K = /* @__PURE__ */ new Map(), J = true, it = N[0], ut = 0; ut < N.length; ut++) {
      var ot = N[ut], w = Vo(ot), st = Js(ot) === Xs, W = [Si, ro].indexOf(w) >= 0, et = W ? "width" : "height", B = Eu(r, { placement: ot, boundary: S, rootBoundary: E, altBoundary: R, padding: b }), tt = W ? st ? ao : wi : st ? ro : Si;
      P[et] > U[et] && (tt = hf(tt));
      var rt = hf(tt), gt = [];
      if (h && gt.push(B[w] <= 0), v && gt.push(B[tt] <= 0, B[rt] <= 0), gt.every(function(bt) {
        return bt;
      })) {
        it = ot, J = false;
        break;
      }
      K.set(ot, gt);
    }
    if (J) for (var z = A ? 3 : 1, q = function(_t) {
      var ct = N.find(function(At) {
        var Lt = K.get(At);
        if (Lt) return Lt.slice(0, _t).every(function($t) {
          return $t;
        });
      });
      if (ct) return it = ct, "break";
    }, ft = z; ft > 0; ft--) {
      var dt = q(ft);
      if (dt === "break") break;
    }
    r.placement !== it && (r.modifiersData[u]._skip = true, r.placement = it, r.reset = true);
  }
}
const O5 = { name: "flip", enabled: true, phase: "main", fn: M5, requiresIfExists: ["offset"], data: { _skip: false } };
function yy(n2, r, a) {
  return a === void 0 && (a = { x: 0, y: 0 }), { top: n2.top - r.height - a.y, right: n2.right - r.width + a.x, bottom: n2.bottom - r.height + a.y, left: n2.left - r.width - a.x };
}
function _y(n2) {
  return [Si, ao, ro, wi].some(function(r) {
    return n2[r] >= 0;
  });
}
function A5(n2) {
  var r = n2.state, a = n2.name, u = r.rects.reference, f = r.rects.popper, h = r.modifiersData.preventOverflow, g = Eu(r, { elementContext: "reference" }), v = Eu(r, { altBoundary: true }), y = yy(g, u), b = yy(v, f, h), S = _y(y), E = _y(b);
  r.modifiersData[a] = { referenceClippingOffsets: y, popperEscapeOffsets: b, isReferenceHidden: S, hasPopperEscaped: E }, r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-reference-hidden": S, "data-popper-escaped": E });
}
const R5 = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: A5 };
function k5(n2, r, a) {
  var u = Vo(n2), f = [wi, Si].indexOf(u) >= 0 ? -1 : 1, h = typeof a == "function" ? a(Object.assign({}, r, { placement: n2 })) : a, g = h[0], v = h[1];
  return g = g || 0, v = (v || 0) * f, [wi, ao].indexOf(u) >= 0 ? { x: v, y: g } : { x: g, y: v };
}
function L5(n2) {
  var r = n2.state, a = n2.options, u = n2.name, f = a.offset, h = f === void 0 ? [0, 0] : f, g = Q1.reduce(function(S, E) {
    return S[E] = k5(E, r.rects, h), S;
  }, {}), v = g[r.placement], y = v.x, b = v.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += y, r.modifiersData.popperOffsets.y += b), r.modifiersData[u] = g;
}
const z5 = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: L5 };
function P5(n2) {
  var r = n2.state, a = n2.name;
  r.modifiersData[a] = r_({ reference: r.rects.reference, element: r.rects.popper, placement: r.placement });
}
const B5 = { name: "popperOffsets", enabled: true, phase: "read", fn: P5, data: {} };
function D5(n2) {
  return n2 === "x" ? "y" : "x";
}
function N5(n2) {
  var r = n2.state, a = n2.options, u = n2.name, f = a.mainAxis, h = f === void 0 ? true : f, g = a.altAxis, v = g === void 0 ? false : g, y = a.boundary, b = a.rootBoundary, S = a.altBoundary, E = a.padding, R = a.tether, k = R === void 0 ? true : R, A = a.tetherOffset, O = A === void 0 ? 0 : A, $ = Eu(r, { boundary: y, rootBoundary: b, padding: E, altBoundary: S }), F = Vo(r.placement), V = Js(r.placement), D = !V, N = hm(F), P = D5(N), U = r.modifiersData.popperOffsets, K = r.rects.reference, J = r.rects.popper, it = typeof O == "function" ? O(Object.assign({}, r.rects, { placement: r.placement })) : O, ut = typeof it == "number" ? { mainAxis: it, altAxis: it } : Object.assign({ mainAxis: 0, altAxis: 0 }, it), ot = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null, w = { x: 0, y: 0 };
  if (U) {
    if (h) {
      var st, W = N === "y" ? Si : wi, et = N === "y" ? ro : ao, B = N === "y" ? "height" : "width", tt = U[N], rt = tt + $[W], gt = tt - $[et], z = k ? -J[B] / 2 : 0, q = V === Xs ? K[B] : J[B], ft = V === Xs ? -J[B] : -K[B], dt = r.elements.arrow, bt = k && dt ? dm(dt) : { width: 0, height: 0 }, _t = r.modifiersData["arrow#persistent"] ? r.modifiersData["arrow#persistent"].padding : e_(), ct = _t[W], At = _t[et], Lt = mu(0, K[B], bt[B]), $t = D ? K[B] / 2 - z - Lt - ct - ut.mainAxis : q - Lt - ct - ut.mainAxis, Rt = D ? -K[B] / 2 + z + Lt + At + ut.mainAxis : ft + Lt + At + ut.mainAxis, Ut = r.elements.arrow && Bu(r.elements.arrow), Wt = Ut ? N === "y" ? Ut.clientTop || 0 : Ut.clientLeft || 0 : 0, te = (st = ot == null ? void 0 : ot[N]) != null ? st : 0, Zt = tt + $t - te - Wt, de = tt + Rt - te, ie = mu(k ? Tf(rt, Zt) : rt, tt, k ? ts(gt, de) : gt);
      U[N] = ie, w[N] = ie - tt;
    }
    if (v) {
      var ue, Ct = N === "x" ? Si : wi, _e = N === "x" ? ro : ao, Bt = U[P], Jt = P === "y" ? "height" : "width", Mt = Bt + $[Ct], tn = Bt - $[_e], be = [Si, wi].indexOf(F) !== -1, Ze = (ue = ot == null ? void 0 : ot[P]) != null ? ue : 0, ce = be ? Mt : Bt - K[Jt] - J[Jt] - Ze + ut.altAxis, Vt = be ? Bt + K[Jt] + J[Jt] - Ze - ut.altAxis : tn, oe = k && be ? s5(ce, Bt, Vt) : mu(k ? ce : Mt, Bt, k ? Vt : tn);
      U[P] = oe, w[P] = oe - Bt;
    }
    r.modifiersData[u] = w;
  }
}
const $5 = { name: "preventOverflow", enabled: true, phase: "main", fn: N5, requiresIfExists: ["offset"] };
function I5(n2) {
  return { scrollLeft: n2.scrollLeft, scrollTop: n2.scrollTop };
}
function j5(n2) {
  return n2 === Fi(n2) || !oo(n2) ? pm(n2) : I5(n2);
}
function H5(n2) {
  var r = n2.getBoundingClientRect(), a = Ws(r.width) / n2.offsetWidth || 1, u = Ws(r.height) / n2.offsetHeight || 1;
  return a !== 1 || u !== 1;
}
function U5(n2, r, a) {
  a === void 0 && (a = false);
  var u = oo(r), f = oo(r) && H5(r), h = ba(r), g = Qs(n2, f, a), v = { scrollLeft: 0, scrollTop: 0 }, y = { x: 0, y: 0 };
  return (u || !u && !a) && ((Go(r) !== "body" || gm(h)) && (v = j5(r)), oo(r) ? (y = Qs(r, true), y.x += r.clientLeft, y.y += r.clientTop) : h && (y.x = mm(h))), { x: g.left + v.scrollLeft - y.x, y: g.top + v.scrollTop - y.y, width: g.width, height: g.height };
}
function F5(n2) {
  var r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), u = [];
  n2.forEach(function(h) {
    r.set(h.name, h);
  });
  function f(h) {
    a.add(h.name);
    var g = [].concat(h.requires || [], h.requiresIfExists || []);
    g.forEach(function(v) {
      if (!a.has(v)) {
        var y = r.get(v);
        y && f(y);
      }
    }), u.push(h);
  }
  return n2.forEach(function(h) {
    a.has(h.name) || f(h);
  }), u;
}
function Z5(n2) {
  var r = F5(n2);
  return e5.reduce(function(a, u) {
    return a.concat(r.filter(function(f) {
      return f.phase === u;
    }));
  }, []);
}
function V5(n2) {
  var r;
  return function() {
    return r || (r = new Promise(function(a) {
      Promise.resolve().then(function() {
        r = void 0, a(n2());
      });
    })), r;
  };
}
function G5(n2) {
  var r = n2.reduce(function(a, u) {
    var f = a[u.name];
    return a[u.name] = f ? Object.assign({}, f, u, { options: Object.assign({}, f.options, u.options), data: Object.assign({}, f.data, u.data) }) : u, a;
  }, {});
  return Object.keys(r).map(function(a) {
    return r[a];
  });
}
var by = { placement: "bottom", modifiers: [], strategy: "absolute" };
function xy() {
  for (var n2 = arguments.length, r = new Array(n2), a = 0; a < n2; a++) r[a] = arguments[a];
  return !r.some(function(u) {
    return !(u && typeof u.getBoundingClientRect == "function");
  });
}
function q5(n2) {
  n2 === void 0 && (n2 = {});
  var r = n2, a = r.defaultModifiers, u = a === void 0 ? [] : a, f = r.defaultOptions, h = f === void 0 ? by : f;
  return function(v, y, b) {
    b === void 0 && (b = h);
    var S = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, by, h), modifiersData: {}, elements: { reference: v, popper: y }, attributes: {}, styles: {} }, E = [], R = false, k = { state: S, setOptions: function(F) {
      var V = typeof F == "function" ? F(S.options) : F;
      O(), S.options = Object.assign({}, h, S.options, V), S.scrollParents = { reference: ns(v) ? gu(v) : v.contextElement ? gu(v.contextElement) : [], popper: gu(y) };
      var D = Z5(G5([].concat(u, S.options.modifiers)));
      return S.orderedModifiers = D.filter(function(N) {
        return N.enabled;
      }), A(), k.update();
    }, forceUpdate: function() {
      if (!R) {
        var F = S.elements, V = F.reference, D = F.popper;
        if (xy(V, D)) {
          S.rects = { reference: U5(V, Bu(D), S.options.strategy === "fixed"), popper: dm(D) }, S.reset = false, S.placement = S.options.placement, S.orderedModifiers.forEach(function(ut) {
            return S.modifiersData[ut.name] = Object.assign({}, ut.data);
          });
          for (var N = 0; N < S.orderedModifiers.length; N++) {
            if (S.reset === true) {
              S.reset = false, N = -1;
              continue;
            }
            var P = S.orderedModifiers[N], U = P.fn, K = P.options, J = K === void 0 ? {} : K, it = P.name;
            typeof U == "function" && (S = U({ state: S, options: J, name: it, instance: k }) || S);
          }
        }
      }
    }, update: V5(function() {
      return new Promise(function($) {
        k.forceUpdate(), $(S);
      });
    }), destroy: function() {
      O(), R = true;
    } };
    if (!xy(v, y)) return k;
    k.setOptions(b).then(function($) {
      !R && b.onFirstUpdate && b.onFirstUpdate($);
    });
    function A() {
      S.orderedModifiers.forEach(function($) {
        var F = $.name, V = $.options, D = V === void 0 ? {} : V, N = $.effect;
        if (typeof N == "function") {
          var P = N({ state: S, name: F, instance: k, options: D }), U = function() {
          };
          E.push(P || U);
        }
      });
    }
    function O() {
      E.forEach(function($) {
        return $();
      }), E = [];
    }
    return k;
  };
}
var Y5 = [v5, B5, m5, o5, z5, O5, $5, f5, R5], K5 = q5({ defaultModifiers: Y5 });
function a_(n2) {
  var _a2;
  const { elementType: r, externalSlotProps: a, ownerState: u, skipResolvingSlotProps: f = false, ...h } = n2, g = f ? {} : q1(a, u), { props: v, internalRef: y } = K1({ ...h, externalSlotProps: g }), b = Fn(y, g == null ? void 0 : g.ref, (_a2 = n2.additionalProps) == null ? void 0 : _a2.ref);
  return G1(r, { ...v, ref: b }, u);
}
function Du(n2) {
  var _a2;
  return parseInt(M.version, 10) >= 19 ? ((_a2 = n2 == null ? void 0 : n2.props) == null ? void 0 : _a2.ref) || null : (n2 == null ? void 0 : n2.ref) || null;
}
function X5(n2) {
  return typeof n2 == "function" ? n2() : n2;
}
const s_ = M.forwardRef(function(r, a) {
  const { children: u, container: f, disablePortal: h = false } = r, [g, v] = M.useState(null), y = Fn(M.isValidElement(u) ? Du(u) : null, a);
  if (wo(() => {
    h || v(X5(f) || document.body);
  }, [f, h]), wo(() => {
    if (g && !h) return wp(a, g), () => {
      wp(a, null);
    };
  }, [a, g, h]), h) {
    if (M.isValidElement(u)) {
      const b = { ref: y };
      return M.cloneElement(u, b);
    }
    return u;
  }
  return g && om.createPortal(u, g);
});
function W5(n2) {
  return Re("MuiPopper", n2);
}
ke("MuiPopper", ["root"]);
function Q5(n2, r) {
  if (r === "ltr") return n2;
  switch (n2) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return n2;
  }
}
function kp(n2) {
  return typeof n2 == "function" ? n2() : n2;
}
function J5(n2) {
  return n2.nodeType !== void 0;
}
const tC = (n2) => {
  const { classes: r } = n2;
  return Le({ root: ["root"] }, W5, r);
}, eC = {}, nC = M.forwardRef(function(r, a) {
  const { anchorEl: u, children: f, direction: h, disablePortal: g, modifiers: v, open: y, placement: b, popperOptions: S, popperRef: E, slotProps: R = {}, slots: k = {}, TransitionProps: A, ownerState: O, ...$ } = r, F = M.useRef(null), V = Fn(F, a), D = M.useRef(null), N = Fn(D, E), P = M.useRef(N);
  wo(() => {
    P.current = N;
  }, [N]), M.useImperativeHandle(E, () => D.current, []);
  const U = Q5(b, h), [K, J] = M.useState(U), [it, ut] = M.useState(kp(u));
  M.useEffect(() => {
    D.current && D.current.forceUpdate();
  }), M.useEffect(() => {
    u && ut(kp(u));
  }, [u]), wo(() => {
    if (!it || !y) return;
    const et = (rt) => {
      J(rt.placement);
    };
    let B = [{ name: "preventOverflow", options: { altBoundary: g } }, { name: "flip", options: { altBoundary: g } }, { name: "onUpdate", enabled: true, phase: "afterWrite", fn: ({ state: rt }) => {
      et(rt);
    } }];
    v != null && (B = B.concat(v)), S && S.modifiers != null && (B = B.concat(S.modifiers));
    const tt = K5(it, F.current, { placement: U, ...S, modifiers: B });
    return P.current(tt), () => {
      tt.destroy(), P.current(null);
    };
  }, [it, g, v, y, S, U]);
  const ot = { placement: K };
  A !== null && (ot.TransitionProps = A);
  const w = tC(r), st = k.root ?? "div", W = a_({ elementType: st, externalSlotProps: R.root, externalForwardedProps: $, additionalProps: { role: "tooltip", ref: V }, ownerState: r, className: w.root });
  return I.jsx(st, { ...W, children: typeof f == "function" ? f(ot) : f });
}), iC = M.forwardRef(function(r, a) {
  const { anchorEl: u, children: f, container: h, direction: g = "ltr", disablePortal: v = false, keepMounted: y = false, modifiers: b, open: S, placement: E = "bottom", popperOptions: R = eC, popperRef: k, style: A, transition: O = false, slotProps: $ = {}, slots: F = {}, ...V } = r, [D, N] = M.useState(true), P = () => {
    N(false);
  }, U = () => {
    N(true);
  };
  if (!y && !S && (!O || D)) return null;
  let K;
  if (h) K = h;
  else if (u) {
    const ut = kp(u);
    K = ut && J5(ut) ? Ui(ut).body : Ui(null).body;
  }
  const J = !S && y && (!O || D) ? "none" : void 0, it = O ? { in: S, onEnter: P, onExited: U } : void 0;
  return I.jsx(s_, { disablePortal: v, container: K, children: I.jsx(nC, { anchorEl: u, direction: g, disablePortal: v, modifiers: b, ref: a, open: O ? !D : S, placement: E, popperOptions: R, popperRef: k, slotProps: $, slots: F, ...V, style: { position: "fixed", top: 0, left: 0, display: J, ...A }, TransitionProps: it, children: f }) });
}), oC = Ot(iC, { name: "MuiPopper", slot: "Root" })({}), l_ = M.forwardRef(function(r, a) {
  const u = M1(), f = ze({ props: r, name: "MuiPopper" }), { anchorEl: h, component: g, components: v, componentsProps: y, container: b, disablePortal: S, keepMounted: E, modifiers: R, open: k, placement: A, popperOptions: O, popperRef: $, transition: F, slots: V, slotProps: D, ...N } = f, P = (V == null ? void 0 : V.root) ?? (v == null ? void 0 : v.Root), U = { anchorEl: h, container: b, disablePortal: S, keepMounted: E, modifiers: R, open: k, placement: A, popperOptions: O, popperRef: $, transition: F, ...N };
  return I.jsx(oC, { as: g, direction: u ? "rtl" : "ltr", slots: { root: P }, slotProps: D ?? y, ...U, ref: a });
});
function rC(n2) {
  return Re("MuiListSubheader", n2);
}
ke("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const aC = (n2) => {
  const { classes: r, color: a, disableGutters: u, inset: f, disableSticky: h } = n2, g = { root: ["root", a !== "default" && `color${wt(a)}`, !u && "gutters", f && "inset", !h && "sticky"] };
  return Le(g, rC, r);
}, sC = Ot("li", { name: "MuiListSubheader", slot: "Root", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.root, a.color !== "default" && r[`color${wt(a.color)}`], !a.disableGutters && r.gutters, a.inset && r.inset, !a.disableSticky && r.sticky];
} })(Ee(({ theme: n2 }) => ({ boxSizing: "border-box", lineHeight: "48px", listStyle: "none", color: (n2.vars || n2).palette.text.secondary, fontFamily: n2.typography.fontFamily, fontWeight: n2.typography.fontWeightMedium, fontSize: n2.typography.pxToRem(14), variants: [{ props: { color: "primary" }, style: { color: (n2.vars || n2).palette.primary.main } }, { props: { color: "inherit" }, style: { color: "inherit" } }, { props: ({ ownerState: r }) => !r.disableGutters, style: { paddingLeft: 16, paddingRight: 16 } }, { props: ({ ownerState: r }) => r.inset, style: { paddingLeft: 72 } }, { props: ({ ownerState: r }) => !r.disableSticky, style: { position: "sticky", top: 0, zIndex: 1, backgroundColor: (n2.vars || n2).palette.background.paper } }] }))), Lp = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiListSubheader" }), { className: f, color: h = "default", component: g = "li", disableGutters: v = false, disableSticky: y = false, inset: b = false, ...S } = u, E = { ...u, color: h, component: g, disableGutters: v, disableSticky: y, inset: b }, R = aC(E);
  return I.jsx(sC, { as: g, className: qt(R.root, f), ref: a, ownerState: E, ...S });
});
Lp && (Lp.muiSkipListHighlight = true);
const lC = Er(I.jsx("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" }));
function uC(n2) {
  return Re("MuiChip", n2);
}
const ye = ke("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), cC = (n2) => {
  const { classes: r, disabled: a, size: u, color: f, iconColor: h, onDelete: g, clickable: v, variant: y } = n2, b = { root: ["root", y, a && "disabled", `size${wt(u)}`, `color${wt(f)}`, v && "clickable", v && `clickableColor${wt(f)}`, g && "deletable", g && `deletableColor${wt(f)}`, `${y}${wt(f)}`], label: ["label", `label${wt(u)}`], avatar: ["avatar", `avatar${wt(u)}`, `avatarColor${wt(f)}`], icon: ["icon", `icon${wt(u)}`, `iconColor${wt(h)}`], deleteIcon: ["deleteIcon", `deleteIcon${wt(u)}`, `deleteIconColor${wt(f)}`, `deleteIcon${wt(y)}Color${wt(f)}`] };
  return Le(b, uC, r);
}, fC = Ot("div", { name: "MuiChip", slot: "Root", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2, { color: u, iconColor: f, clickable: h, onDelete: g, size: v, variant: y } = a;
  return [{ [`& .${ye.avatar}`]: r.avatar }, { [`& .${ye.avatar}`]: r[`avatar${wt(v)}`] }, { [`& .${ye.avatar}`]: r[`avatarColor${wt(u)}`] }, { [`& .${ye.icon}`]: r.icon }, { [`& .${ye.icon}`]: r[`icon${wt(v)}`] }, { [`& .${ye.icon}`]: r[`iconColor${wt(f)}`] }, { [`& .${ye.deleteIcon}`]: r.deleteIcon }, { [`& .${ye.deleteIcon}`]: r[`deleteIcon${wt(v)}`] }, { [`& .${ye.deleteIcon}`]: r[`deleteIconColor${wt(u)}`] }, { [`& .${ye.deleteIcon}`]: r[`deleteIcon${wt(y)}Color${wt(u)}`] }, r.root, r[`size${wt(v)}`], r[`color${wt(u)}`], h && r.clickable, h && u !== "default" && r[`clickableColor${wt(u)})`], g && r.deletable, g && u !== "default" && r[`deletableColor${wt(u)}`], r[y], r[`${y}${wt(u)}`]];
} })(Ee(({ theme: n2 }) => {
  const r = n2.palette.mode === "light" ? n2.palette.grey[700] : n2.palette.grey[300];
  return { maxWidth: "100%", fontFamily: n2.typography.fontFamily, fontSize: n2.typography.pxToRem(13), display: "inline-flex", alignItems: "center", justifyContent: "center", height: 32, lineHeight: 1.5, color: (n2.vars || n2).palette.text.primary, backgroundColor: (n2.vars || n2).palette.action.selected, borderRadius: 32 / 2, whiteSpace: "nowrap", transition: n2.transitions.create(["background-color", "box-shadow"]), cursor: "unset", outline: 0, textDecoration: "none", border: 0, padding: 0, verticalAlign: "middle", boxSizing: "border-box", [`&.${ye.disabled}`]: { opacity: (n2.vars || n2).palette.action.disabledOpacity, pointerEvents: "none" }, [`& .${ye.avatar}`]: { marginLeft: 5, marginRight: -6, width: 24, height: 24, color: n2.vars ? n2.vars.palette.Chip.defaultAvatarColor : r, fontSize: n2.typography.pxToRem(12) }, [`& .${ye.avatarColorPrimary}`]: { color: (n2.vars || n2).palette.primary.contrastText, backgroundColor: (n2.vars || n2).palette.primary.dark }, [`& .${ye.avatarColorSecondary}`]: { color: (n2.vars || n2).palette.secondary.contrastText, backgroundColor: (n2.vars || n2).palette.secondary.dark }, [`& .${ye.avatarSmall}`]: { marginLeft: 4, marginRight: -4, width: 18, height: 18, fontSize: n2.typography.pxToRem(10) }, [`& .${ye.icon}`]: { marginLeft: 5, marginRight: -6 }, [`& .${ye.deleteIcon}`]: { WebkitTapHighlightColor: "transparent", color: n2.alpha((n2.vars || n2).palette.text.primary, 0.26), fontSize: 22, cursor: "pointer", margin: "0 5px 0 -6px", "&:hover": { color: n2.alpha((n2.vars || n2).palette.text.primary, 0.4) } }, variants: [{ props: { size: "small" }, style: { height: 24, [`& .${ye.icon}`]: { fontSize: 18, marginLeft: 4, marginRight: -4 }, [`& .${ye.deleteIcon}`]: { fontSize: 16, marginRight: 4, marginLeft: -4 } } }, ...Object.entries(n2.palette).filter(xi(["contrastText"])).map(([a]) => ({ props: { color: a }, style: { backgroundColor: (n2.vars || n2).palette[a].main, color: (n2.vars || n2).palette[a].contrastText, [`& .${ye.deleteIcon}`]: { color: n2.alpha((n2.vars || n2).palette[a].contrastText, 0.7), "&:hover, &:active": { color: (n2.vars || n2).palette[a].contrastText } } } })), { props: (a) => a.iconColor === a.color, style: { [`& .${ye.icon}`]: { color: n2.vars ? n2.vars.palette.Chip.defaultIconColor : r } } }, { props: (a) => a.iconColor === a.color && a.color !== "default", style: { [`& .${ye.icon}`]: { color: "inherit" } } }, { props: { onDelete: true }, style: { [`&.${ye.focusVisible}`]: { backgroundColor: n2.alpha((n2.vars || n2).palette.action.selected, `${(n2.vars || n2).palette.action.selectedOpacity} + ${(n2.vars || n2).palette.action.focusOpacity}`) } } }, ...Object.entries(n2.palette).filter(xi(["dark"])).map(([a]) => ({ props: { color: a, onDelete: true }, style: { [`&.${ye.focusVisible}`]: { background: (n2.vars || n2).palette[a].dark } } })), { props: { clickable: true }, style: { userSelect: "none", WebkitTapHighlightColor: "transparent", cursor: "pointer", "&:hover": { backgroundColor: n2.alpha((n2.vars || n2).palette.action.selected, `${(n2.vars || n2).palette.action.selectedOpacity} + ${(n2.vars || n2).palette.action.hoverOpacity}`) }, [`&.${ye.focusVisible}`]: { backgroundColor: n2.alpha((n2.vars || n2).palette.action.selected, `${(n2.vars || n2).palette.action.selectedOpacity} + ${(n2.vars || n2).palette.action.focusOpacity}`) }, "&:active": { boxShadow: (n2.vars || n2).shadows[1] } } }, ...Object.entries(n2.palette).filter(xi(["dark"])).map(([a]) => ({ props: { color: a, clickable: true }, style: { [`&:hover, &.${ye.focusVisible}`]: { backgroundColor: (n2.vars || n2).palette[a].dark } } })), { props: { variant: "outlined" }, style: { backgroundColor: "transparent", border: n2.vars ? `1px solid ${n2.vars.palette.Chip.defaultBorder}` : `1px solid ${n2.palette.mode === "light" ? n2.palette.grey[400] : n2.palette.grey[700]}`, [`&.${ye.clickable}:hover`]: { backgroundColor: (n2.vars || n2).palette.action.hover }, [`&.${ye.focusVisible}`]: { backgroundColor: (n2.vars || n2).palette.action.focus }, [`& .${ye.avatar}`]: { marginLeft: 4 }, [`& .${ye.avatarSmall}`]: { marginLeft: 2 }, [`& .${ye.icon}`]: { marginLeft: 4 }, [`& .${ye.iconSmall}`]: { marginLeft: 2 }, [`& .${ye.deleteIcon}`]: { marginRight: 5 }, [`& .${ye.deleteIconSmall}`]: { marginRight: 3 } } }, ...Object.entries(n2.palette).filter(xi()).map(([a]) => ({ props: { variant: "outlined", color: a }, style: { color: (n2.vars || n2).palette[a].main, border: `1px solid ${n2.alpha((n2.vars || n2).palette[a].main, 0.7)}`, [`&.${ye.clickable}:hover`]: { backgroundColor: n2.alpha((n2.vars || n2).palette[a].main, (n2.vars || n2).palette.action.hoverOpacity) }, [`&.${ye.focusVisible}`]: { backgroundColor: n2.alpha((n2.vars || n2).palette[a].main, (n2.vars || n2).palette.action.focusOpacity) }, [`& .${ye.deleteIcon}`]: { color: n2.alpha((n2.vars || n2).palette[a].main, 0.7), "&:hover, &:active": { color: (n2.vars || n2).palette[a].main } } } }))] };
})), dC = Ot("span", { name: "MuiChip", slot: "Label", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2, { size: u } = a;
  return [r.label, r[`label${wt(u)}`]];
} })({ overflow: "hidden", textOverflow: "ellipsis", paddingLeft: 12, paddingRight: 12, whiteSpace: "nowrap", variants: [{ props: { variant: "outlined" }, style: { paddingLeft: 11, paddingRight: 11 } }, { props: { size: "small" }, style: { paddingLeft: 8, paddingRight: 8 } }, { props: { size: "small", variant: "outlined" }, style: { paddingLeft: 7, paddingRight: 7 } }] });
function Sy(n2) {
  return n2.key === "Backspace" || n2.key === "Delete";
}
const u_ = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiChip" }), { avatar: f, className: h, clickable: g, color: v = "default", component: y, deleteIcon: b, disabled: S = false, icon: E, label: R, onClick: k, onDelete: A, onKeyDown: O, onKeyUp: $, size: F = "medium", variant: V = "filled", tabIndex: D, skipFocusWhenDisabled: N = false, slots: P = {}, slotProps: U = {}, ...K } = u, J = M.useRef(null), it = Fn(J, a), ut = (ct) => {
    ct.stopPropagation(), A && A(ct);
  }, ot = (ct) => {
    ct.currentTarget === ct.target && Sy(ct) && ct.preventDefault(), O && O(ct);
  }, w = (ct) => {
    ct.currentTarget === ct.target && A && Sy(ct) && A(ct), $ && $(ct);
  }, st = g !== false && k ? true : g, W = st || A ? Cf : y || "div", et = { ...u, component: W, disabled: S, size: F, color: v, iconColor: M.isValidElement(E) && E.props.color || v, onDelete: !!A, clickable: st, variant: V }, B = cC(et), tt = W === Cf ? { component: y || "div", focusVisibleClassName: B.focusVisible, ...A && { disableRipple: true } } : {};
  let rt = null;
  A && (rt = b && M.isValidElement(b) ? M.cloneElement(b, { className: qt(b.props.className, B.deleteIcon), onClick: ut }) : I.jsx(lC, { className: B.deleteIcon, onClick: ut }));
  let gt = null;
  f && M.isValidElement(f) && (gt = M.cloneElement(f, { className: qt(B.avatar, f.props.className) }));
  let z = null;
  E && M.isValidElement(E) && (z = M.cloneElement(E, { className: qt(B.icon, E.props.className) }));
  const q = { slots: P, slotProps: U }, [ft, dt] = yn("root", { elementType: fC, externalForwardedProps: { ...q, ...K }, ownerState: et, shouldForwardComponentProp: true, ref: it, className: qt(B.root, h), additionalProps: { disabled: st && S ? true : void 0, tabIndex: N && S ? -1 : D, ...tt }, getSlotProps: (ct) => ({ ...ct, onClick: (At) => {
    var _a2;
    (_a2 = ct.onClick) == null ? void 0 : _a2.call(ct, At), k == null ? void 0 : k(At);
  }, onKeyDown: (At) => {
    var _a2;
    (_a2 = ct.onKeyDown) == null ? void 0 : _a2.call(ct, At), ot(At);
  }, onKeyUp: (At) => {
    var _a2;
    (_a2 = ct.onKeyUp) == null ? void 0 : _a2.call(ct, At), w(At);
  } }) }), [bt, _t] = yn("label", { elementType: dC, externalForwardedProps: q, ownerState: et, className: B.label });
  return I.jsxs(ft, { as: W, ...dt, children: [gt || z, I.jsx(bt, { ..._t, children: R }), rt] });
});
function rf(n2) {
  return parseInt(n2, 10) || 0;
}
const hC = { shadow: { visibility: "hidden", position: "absolute", overflow: "hidden", height: 0, top: 0, left: 0, transform: "translateZ(0)" } };
function pC(n2) {
  for (const r in n2) return false;
  return true;
}
function wy(n2) {
  return pC(n2) || n2.outerHeightStyle === 0 && !n2.overflowing;
}
const mC = M.forwardRef(function(r, a) {
  const { onChange: u, maxRows: f, minRows: h = 1, style: g, value: v, ...y } = r, { current: b } = M.useRef(v != null), S = M.useRef(null), E = Fn(a, S), R = M.useRef(null), k = M.useRef(null), A = M.useCallback(() => {
    const D = S.current, N = k.current;
    if (!D || !N) return;
    const U = wr(D).getComputedStyle(D);
    if (U.width === "0px") return { outerHeightStyle: 0, overflowing: false };
    N.style.width = U.width, N.value = D.value || r.placeholder || "x", N.value.slice(-1) === `
` && (N.value += " ");
    const K = U.boxSizing, J = rf(U.paddingBottom) + rf(U.paddingTop), it = rf(U.borderBottomWidth) + rf(U.borderTopWidth), ut = N.scrollHeight;
    N.value = "x";
    const ot = N.scrollHeight;
    let w = ut;
    h && (w = Math.max(Number(h) * ot, w)), f && (w = Math.min(Number(f) * ot, w)), w = Math.max(w, ot);
    const st = w + (K === "border-box" ? J + it : 0), W = Math.abs(w - ut) <= 1;
    return { outerHeightStyle: st, overflowing: W };
  }, [f, h, r.placeholder]), O = xo(() => {
    const D = S.current, N = A();
    if (!D || !N || wy(N)) return false;
    const P = N.outerHeightStyle;
    return R.current != null && R.current !== P;
  }), $ = M.useCallback(() => {
    const D = S.current, N = A();
    if (!D || !N || wy(N)) return;
    const P = N.outerHeightStyle;
    R.current !== P && (R.current = P, D.style.height = `${P}px`), D.style.overflow = N.overflowing ? "hidden" : "";
  }, [A]), F = M.useRef(-1);
  wo(() => {
    const D = j1($), N = S == null ? void 0 : S.current;
    if (!N) return;
    const P = wr(N);
    P.addEventListener("resize", D);
    let U;
    return typeof ResizeObserver < "u" && (U = new ResizeObserver(() => {
      O() && (U.unobserve(N), cancelAnimationFrame(F.current), $(), F.current = requestAnimationFrame(() => {
        U.observe(N);
      }));
    }), U.observe(N)), () => {
      D.clear(), cancelAnimationFrame(F.current), P.removeEventListener("resize", D), U && U.disconnect();
    };
  }, [A, $, O]), wo(() => {
    $();
  });
  const V = (D) => {
    b || $();
    const N = D.target, P = N.value.length, U = N.value.endsWith(`
`), K = N.selectionStart === P;
    U && K && N.setSelectionRange(P, P), u && u(D);
  };
  return I.jsxs(M.Fragment, { children: [I.jsx("textarea", { value: v, onChange: V, ref: E, rows: h, style: g, ...y }), I.jsx("textarea", { "aria-hidden": true, className: r.className, readOnly: true, ref: k, tabIndex: -1, style: { ...hC.shadow, ...g, paddingTop: 0, paddingBottom: 0 } })] });
});
function nl({ props: n2, states: r, muiFormControl: a }) {
  return r.reduce((u, f) => (u[f] = n2[f], a && typeof n2[f] > "u" && (u[f] = a[f]), u), {});
}
const vm = M.createContext(void 0);
function il() {
  return M.useContext(vm);
}
function Cy(n2) {
  return n2 != null && !(Array.isArray(n2) && n2.length === 0);
}
function Ef(n2, r = false) {
  return n2 && (Cy(n2.value) && n2.value !== "" || r && Cy(n2.defaultValue) && n2.defaultValue !== "");
}
function gC(n2) {
  return n2.startAdornment;
}
function vC(n2) {
  return Re("MuiInputBase", n2);
}
const Ni = ke("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var Ty;
const Vf = (n2, r) => {
  const { ownerState: a } = n2;
  return [r.root, a.formControl && r.formControl, a.startAdornment && r.adornedStart, a.endAdornment && r.adornedEnd, a.error && r.error, a.size === "small" && r.sizeSmall, a.multiline && r.multiline, a.color && r[`color${wt(a.color)}`], a.fullWidth && r.fullWidth, a.hiddenLabel && r.hiddenLabel];
}, Gf = (n2, r) => {
  const { ownerState: a } = n2;
  return [r.input, a.size === "small" && r.inputSizeSmall, a.multiline && r.inputMultiline, a.type === "search" && r.inputTypeSearch, a.startAdornment && r.inputAdornedStart, a.endAdornment && r.inputAdornedEnd, a.hiddenLabel && r.inputHiddenLabel];
}, yC = (n2) => {
  const { classes: r, color: a, disabled: u, error: f, endAdornment: h, focused: g, formControl: v, fullWidth: y, hiddenLabel: b, multiline: S, readOnly: E, size: R, startAdornment: k, type: A } = n2, O = { root: ["root", `color${wt(a)}`, u && "disabled", f && "error", y && "fullWidth", g && "focused", v && "formControl", R && R !== "medium" && `size${wt(R)}`, S && "multiline", k && "adornedStart", h && "adornedEnd", b && "hiddenLabel", E && "readOnly"], input: ["input", u && "disabled", A === "search" && "inputTypeSearch", S && "inputMultiline", R === "small" && "inputSizeSmall", b && "inputHiddenLabel", k && "inputAdornedStart", h && "inputAdornedEnd", E && "readOnly"] };
  return Le(O, vC, r);
}, qf = Ot("div", { name: "MuiInputBase", slot: "Root", overridesResolver: Vf })(Ee(({ theme: n2 }) => ({ ...n2.typography.body1, color: (n2.vars || n2).palette.text.primary, lineHeight: "1.4375em", boxSizing: "border-box", position: "relative", cursor: "text", display: "inline-flex", alignItems: "center", [`&.${Ni.disabled}`]: { color: (n2.vars || n2).palette.text.disabled, cursor: "default" }, variants: [{ props: ({ ownerState: r }) => r.multiline, style: { padding: "4px 0 5px" } }, { props: ({ ownerState: r, size: a }) => r.multiline && a === "small", style: { paddingTop: 1 } }, { props: ({ ownerState: r }) => r.fullWidth, style: { width: "100%" } }] }))), Yf = Ot("input", { name: "MuiInputBase", slot: "Input", overridesResolver: Gf })(Ee(({ theme: n2 }) => {
  const r = n2.palette.mode === "light", a = { color: "currentColor", ...n2.vars ? { opacity: n2.vars.opacity.inputPlaceholder } : { opacity: r ? 0.42 : 0.5 }, transition: n2.transitions.create("opacity", { duration: n2.transitions.duration.shorter }) }, u = { opacity: "0 !important" }, f = n2.vars ? { opacity: n2.vars.opacity.inputPlaceholder } : { opacity: r ? 0.42 : 0.5 };
  return { font: "inherit", letterSpacing: "inherit", color: "currentColor", padding: "4px 0 5px", border: 0, boxSizing: "content-box", background: "none", height: "1.4375em", margin: 0, WebkitTapHighlightColor: "transparent", display: "block", minWidth: 0, width: "100%", "&::-webkit-input-placeholder": a, "&::-moz-placeholder": a, "&::-ms-input-placeholder": a, "&:focus": { outline: 0 }, "&:invalid": { boxShadow: "none" }, "&::-webkit-search-decoration": { WebkitAppearance: "none" }, [`label[data-shrink=false] + .${Ni.formControl} &`]: { "&::-webkit-input-placeholder": u, "&::-moz-placeholder": u, "&::-ms-input-placeholder": u, "&:focus::-webkit-input-placeholder": f, "&:focus::-moz-placeholder": f, "&:focus::-ms-input-placeholder": f }, [`&.${Ni.disabled}`]: { opacity: 1, WebkitTextFillColor: (n2.vars || n2).palette.text.disabled }, variants: [{ props: ({ ownerState: h }) => !h.disableInjectingGlobalStyles, style: { animationName: "mui-auto-fill-cancel", animationDuration: "10ms", "&:-webkit-autofill": { animationDuration: "5000s", animationName: "mui-auto-fill" } } }, { props: { size: "small" }, style: { paddingTop: 1 } }, { props: ({ ownerState: h }) => h.multiline, style: { height: "auto", resize: "none", padding: 0, paddingTop: 0 } }, { props: { type: "search" }, style: { MozAppearance: "textfield" } }] };
})), Ey = im({ "@keyframes mui-auto-fill": { from: { display: "block" } }, "@keyframes mui-auto-fill-cancel": { from: { display: "block" } } }), ym = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiInputBase" }), { "aria-describedby": f, autoComplete: h, autoFocus: g, className: v, color: y, components: b = {}, componentsProps: S = {}, defaultValue: E, disabled: R, disableInjectingGlobalStyles: k, endAdornment: A, error: O, fullWidth: $ = false, id: F, inputComponent: V = "input", inputProps: D = {}, inputRef: N, margin: P, maxRows: U, minRows: K, multiline: J = false, name: it, onBlur: ut, onChange: ot, onClick: w, onFocus: st, onKeyDown: W, onKeyUp: et, placeholder: B, readOnly: tt, renderSuffix: rt, rows: gt, size: z, slotProps: q = {}, slots: ft = {}, startAdornment: dt, type: bt = "text", value: _t, ...ct } = u, At = D.value != null ? D.value : _t, { current: Lt } = M.useRef(At != null), $t = M.useRef(), Rt = M.useCallback((Ht) => {
  }, []), Ut = Fn($t, N, D.ref, Rt), [Wt, te] = M.useState(false), Zt = il(), de = nl({ props: u, muiFormControl: Zt, states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"] });
  de.focused = Zt ? Zt.focused : Wt, M.useEffect(() => {
    !Zt && R && Wt && (te(false), ut && ut());
  }, [Zt, R, Wt, ut]);
  const ie = Zt && Zt.onFilled, ue = Zt && Zt.onEmpty, Ct = M.useCallback((Ht) => {
    Ef(Ht) ? ie && ie() : ue && ue();
  }, [ie, ue]);
  wo(() => {
    Lt && Ct({ value: At });
  }, [At, Ct, Lt]);
  const _e = (Ht) => {
    st && st(Ht), D.onFocus && D.onFocus(Ht), Zt && Zt.onFocus ? Zt.onFocus(Ht) : te(true);
  }, Bt = (Ht) => {
    ut && ut(Ht), D.onBlur && D.onBlur(Ht), Zt && Zt.onBlur ? Zt.onBlur(Ht) : te(false);
  }, Jt = (Ht, ...fn) => {
    if (!Lt) {
      const Bn = Ht.target || $t.current;
      if (Bn == null) throw new Error(Sr(1));
      Ct({ value: Bn.value });
    }
    D.onChange && D.onChange(Ht, ...fn), ot && ot(Ht, ...fn);
  };
  M.useEffect(() => {
    Ct($t.current);
  }, []);
  const Mt = (Ht) => {
    $t.current && Ht.currentTarget === Ht.target && $t.current.focus(), w && w(Ht);
  };
  let tn = V, be = D;
  J && tn === "input" && (gt ? be = { type: void 0, minRows: gt, maxRows: gt, ...be } : be = { type: void 0, maxRows: U, minRows: K, ...be }, tn = mC);
  const Ze = (Ht) => {
    Ct(Ht.animationName === "mui-auto-fill-cancel" ? $t.current : { value: "x" });
  };
  M.useEffect(() => {
    Zt && Zt.setAdornedStart(!!dt);
  }, [Zt, dt]);
  const ce = { ...u, color: de.color || "primary", disabled: de.disabled, endAdornment: A, error: de.error, focused: de.focused, formControl: Zt, fullWidth: $, hiddenLabel: de.hiddenLabel, multiline: J, size: de.size, startAdornment: dt, type: bt }, Vt = yC(ce), oe = ft.root || b.Root || qf, he = q.root || S.root || {}, xe = ft.input || b.Input || Yf;
  return be = { ...be, ...q.input ?? S.input }, I.jsxs(M.Fragment, { children: [!k && typeof Ey == "function" && (Ty || (Ty = I.jsx(Ey, {}))), I.jsxs(oe, { ...he, ref: a, onClick: Mt, ...ct, ...!xf(oe) && { ownerState: { ...ce, ...he.ownerState } }, className: qt(Vt.root, he.className, v, tt && "MuiInputBase-readOnly"), children: [dt, I.jsx(vm.Provider, { value: null, children: I.jsx(xe, { "aria-invalid": de.error, "aria-describedby": f, autoComplete: h, autoFocus: g, defaultValue: E, disabled: de.disabled, id: F, onAnimationStart: Ze, name: it, placeholder: B, readOnly: tt, required: de.required, rows: gt, value: At, onKeyDown: W, onKeyUp: et, type: bt, ...be, ...!xf(xe) && { as: tn, ownerState: { ...ce, ...be.ownerState } }, ref: Ut, className: qt(Vt.input, be.className, tt && "MuiInputBase-readOnly"), onBlur: Bt, onChange: Jt, onFocus: _e }) }), A, rt ? rt({ ...de, startAdornment: dt }) : null] })] });
});
function _C(n2) {
  return Re("MuiInput", n2);
}
const ma = { ...Ni, ...ke("MuiInput", ["root", "underline", "input"]) };
function bC(n2) {
  return Re("MuiOutlinedInput", n2);
}
const eo = { ...Ni, ...ke("MuiOutlinedInput", ["root", "notchedOutline", "input"]) };
function xC(n2) {
  return Re("MuiFilledInput", n2);
}
const $i = { ...Ni, ...ke("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"]) }, c_ = Er(I.jsx("path", { d: "M7 10l5 5 5-5z" }));
function SC(n2) {
  return Re("MuiAutocomplete", n2);
}
const le = ke("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]);
var My, Oy;
const wC = (n2) => {
  const { classes: r, disablePortal: a, expanded: u, focused: f, fullWidth: h, hasClearIcon: g, hasPopupIcon: v, inputFocused: y, popupOpen: b, size: S } = n2, E = { root: ["root", u && "expanded", f && "focused", h && "fullWidth", g && "hasClearIcon", v && "hasPopupIcon"], inputRoot: ["inputRoot"], input: ["input", y && "inputFocused"], tag: ["tag", `tagSize${wt(S)}`], endAdornment: ["endAdornment"], clearIndicator: ["clearIndicator"], popupIndicator: ["popupIndicator", b && "popupIndicatorOpen"], popper: ["popper", a && "popperDisablePortal"], paper: ["paper"], listbox: ["listbox"], loading: ["loading"], noOptions: ["noOptions"], option: ["option"], groupLabel: ["groupLabel"], groupUl: ["groupUl"] };
  return Le(E, SC, r);
}, CC = Ot("div", { name: "MuiAutocomplete", slot: "Root", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2, { fullWidth: u, hasClearIcon: f, hasPopupIcon: h, inputFocused: g, size: v } = a;
  return [{ [`& .${le.tag}`]: r.tag }, { [`& .${le.tag}`]: r[`tagSize${wt(v)}`] }, { [`& .${le.inputRoot}`]: r.inputRoot }, { [`& .${le.input}`]: r.input }, { [`& .${le.input}`]: g && r.inputFocused }, r.root, u && r.fullWidth, h && r.hasPopupIcon, f && r.hasClearIcon];
} })({ [`&.${le.focused} .${le.clearIndicator}`]: { visibility: "visible" }, "@media (pointer: fine)": { [`&:hover .${le.clearIndicator}`]: { visibility: "visible" } }, [`& .${le.tag}`]: { margin: 3, maxWidth: "calc(100% - 6px)" }, [`& .${le.inputRoot}`]: { [`.${le.hasPopupIcon}&, .${le.hasClearIcon}&`]: { paddingRight: 30 }, [`.${le.hasPopupIcon}.${le.hasClearIcon}&`]: { paddingRight: 56 }, [`& .${le.input}`]: { width: 0, minWidth: 30 } }, [`& .${ma.root}`]: { paddingBottom: 1, "& .MuiInput-input": { padding: "4px 4px 4px 0px" } }, [`& .${ma.root}.${Ni.sizeSmall}`]: { [`& .${ma.input}`]: { padding: "2px 4px 3px 0" } }, [`& .${eo.root}`]: { padding: 9, [`.${le.hasPopupIcon}&, .${le.hasClearIcon}&`]: { paddingRight: 39 }, [`.${le.hasPopupIcon}.${le.hasClearIcon}&`]: { paddingRight: 65 }, [`& .${le.input}`]: { padding: "7.5px 4px 7.5px 5px" }, [`& .${le.endAdornment}`]: { right: 9 } }, [`& .${eo.root}.${Ni.sizeSmall}`]: { paddingTop: 6, paddingBottom: 6, paddingLeft: 6, [`& .${le.input}`]: { padding: "2.5px 4px 2.5px 8px" } }, [`& .${$i.root}`]: { paddingTop: 19, paddingLeft: 8, [`.${le.hasPopupIcon}&, .${le.hasClearIcon}&`]: { paddingRight: 39 }, [`.${le.hasPopupIcon}.${le.hasClearIcon}&`]: { paddingRight: 65 }, [`& .${$i.input}`]: { padding: "7px 4px" }, [`& .${le.endAdornment}`]: { right: 9 } }, [`& .${$i.root}.${Ni.sizeSmall}`]: { paddingBottom: 1, [`& .${$i.input}`]: { padding: "2.5px 4px" } }, [`& .${Ni.hiddenLabel}`]: { paddingTop: 8 }, [`& .${$i.root}.${Ni.hiddenLabel}`]: { paddingTop: 0, paddingBottom: 0, [`& .${le.input}`]: { paddingTop: 16, paddingBottom: 17 } }, [`& .${$i.root}.${Ni.hiddenLabel}.${Ni.sizeSmall}`]: { [`& .${le.input}`]: { paddingTop: 8, paddingBottom: 9 } }, [`& .${le.input}`]: { flexGrow: 1, textOverflow: "ellipsis", opacity: 0 }, variants: [{ props: { fullWidth: true }, style: { width: "100%" } }, { props: { size: "small" }, style: { [`& .${le.tag}`]: { margin: 2, maxWidth: "calc(100% - 4px)" } } }, { props: { inputFocused: true }, style: { [`& .${le.input}`]: { opacity: 1 } } }, { props: { multiple: true }, style: { [`& .${le.inputRoot}`]: { flexWrap: "wrap" } } }] }), TC = Ot("div", { name: "MuiAutocomplete", slot: "EndAdornment" })({ position: "absolute", right: 0, top: "50%", transform: "translate(0, -50%)" }), EC = Ot(Cr, { name: "MuiAutocomplete", slot: "ClearIndicator" })({ marginRight: -2, padding: 4, visibility: "hidden" }), MC = Ot(Cr, { name: "MuiAutocomplete", slot: "PopupIndicator", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.popupIndicator, a.popupOpen && r.popupIndicatorOpen];
} })({ padding: 2, marginRight: -2, variants: [{ props: { popupOpen: true }, style: { transform: "rotate(180deg)" } }] }), OC = Ot(l_, { name: "MuiAutocomplete", slot: "Popper", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [{ [`& .${le.option}`]: r.option }, r.popper, a.disablePortal && r.popperDisablePortal];
} })(Ee(({ theme: n2 }) => ({ zIndex: (n2.vars || n2).zIndex.modal, variants: [{ props: { disablePortal: true }, style: { position: "absolute" } }] }))), AC = Ot(lm, { name: "MuiAutocomplete", slot: "Paper" })(Ee(({ theme: n2 }) => ({ ...n2.typography.body1, overflow: "auto" }))), RC = Ot("div", { name: "MuiAutocomplete", slot: "Loading" })(Ee(({ theme: n2 }) => ({ color: (n2.vars || n2).palette.text.secondary, padding: "14px 16px" }))), kC = Ot("div", { name: "MuiAutocomplete", slot: "NoOptions" })(Ee(({ theme: n2 }) => ({ color: (n2.vars || n2).palette.text.secondary, padding: "14px 16px" }))), LC = Ot("ul", { name: "MuiAutocomplete", slot: "Listbox" })(Ee(({ theme: n2 }) => ({ listStyle: "none", margin: 0, padding: "8px 0", maxHeight: "40vh", overflow: "auto", position: "relative", [`& .${le.option}`]: { minHeight: 48, display: "flex", overflow: "hidden", justifyContent: "flex-start", alignItems: "center", cursor: "pointer", paddingTop: 6, boxSizing: "border-box", outline: "0", WebkitTapHighlightColor: "transparent", paddingBottom: 6, paddingLeft: 16, paddingRight: 16, [n2.breakpoints.up("sm")]: { minHeight: "auto" }, [`&.${le.focused}`]: { backgroundColor: (n2.vars || n2).palette.action.hover, "@media (hover: none)": { backgroundColor: "transparent" } }, '&[aria-disabled="true"]': { opacity: (n2.vars || n2).palette.action.disabledOpacity, pointerEvents: "none" }, [`&.${le.focusVisible}`]: { backgroundColor: (n2.vars || n2).palette.action.focus }, '&[aria-selected="true"]': { backgroundColor: n2.alpha((n2.vars || n2).palette.primary.main, (n2.vars || n2).palette.action.selectedOpacity), [`&.${le.focused}`]: { backgroundColor: n2.alpha((n2.vars || n2).palette.primary.main, `${(n2.vars || n2).palette.action.selectedOpacity} + ${(n2.vars || n2).palette.action.hoverOpacity}`), "@media (hover: none)": { backgroundColor: (n2.vars || n2).palette.action.selected } }, [`&.${le.focusVisible}`]: { backgroundColor: n2.alpha((n2.vars || n2).palette.primary.main, `${(n2.vars || n2).palette.action.selectedOpacity} + ${(n2.vars || n2).palette.action.focusOpacity}`) } } } }))), zC = Ot(Lp, { name: "MuiAutocomplete", slot: "GroupLabel" })(Ee(({ theme: n2 }) => ({ backgroundColor: (n2.vars || n2).palette.background.paper, top: -8 }))), PC = Ot("ul", { name: "MuiAutocomplete", slot: "GroupUl" })({ padding: 0, [`& .${le.option}`]: { paddingLeft: 24 } }), BC = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiAutocomplete" }), { autoComplete: f = false, autoHighlight: h = false, autoSelect: g = false, blurOnSelect: v = false, ChipProps: y, className: b, clearIcon: S = My || (My = I.jsx(Lw, { fontSize: "small" })), clearOnBlur: E = !u.freeSolo, clearOnEscape: R = false, clearText: k = "Clear", closeText: A = "Close", componentsProps: O, defaultValue: $ = u.multiple ? [] : null, disableClearable: F = false, disableCloseOnSelect: V = false, disabled: D = false, disabledItemsFocusable: N = false, disableListWrap: P = false, disablePortal: U = false, filterOptions: K, filterSelectedOptions: J = false, forcePopupIcon: it = "auto", freeSolo: ut = false, fullWidth: ot = false, getLimitTagsText: w = (ae) => `+${ae}`, getOptionDisabled: st, getOptionKey: W, getOptionLabel: et, isOptionEqualToValue: B, groupBy: tt, handleHomeEndKeys: rt = !u.freeSolo, id: gt, includeInputInList: z = false, inputValue: q, limitTags: ft = -1, ListboxComponent: dt, ListboxProps: bt, loading: _t = false, loadingText: ct = "Loading\u2026", multiple: At = false, noOptionsText: Lt = "No options", onChange: $t, onClose: Rt, onHighlightChange: Ut, onInputChange: Wt, onOpen: te, open: Zt, openOnFocus: de = false, openText: ie = "Open", options: ue, PaperComponent: Ct, PopperComponent: _e, popupIcon: Bt = Oy || (Oy = I.jsx(c_, {})), readOnly: Jt = false, renderGroup: Mt, renderInput: tn, renderOption: be, renderTags: Ze, renderValue: ce, selectOnFocus: Vt = !u.freeSolo, size: oe = "medium", slots: he = {}, slotProps: xe = {}, value: Ht, ...fn } = u, { getRootProps: Bn, getInputProps: rn, getInputLabelProps: Pt, getPopupIndicatorProps: ne, getClearProps: re, getItemProps: Wn, getListboxProps: lo, getOptionProps: uo, value: Qn, dirty: Tn, expanded: co, id: ui, popupOpen: ci, focused: fi, focusedItem: Ko, anchorEl: Zi, setAnchorEl: To, inputValue: di, groupedOptions: Qe } = Fw({ ...u, componentName: "Autocomplete" }), an = !F && !D && Tn && !Jt, hi = (!ut || it === true) && it !== false, { onMouseDown: En } = rn(), { ref: Dt, ...Mr } = lo(), pi = et || ((ae) => ae.label ?? ae), Ve = { ...u, disablePortal: U, expanded: co, focused: fi, fullWidth: ot, getOptionLabel: pi, hasClearIcon: an, hasPopupIcon: hi, inputFocused: Ko === -1, popupOpen: ci, size: oe }, Pe = wC(Ve), Mn = { slots: { paper: Ct, popper: _e, ...he }, slotProps: { chip: y, listbox: bt, ...O, ...xe } }, [Zn, Jn] = yn("listbox", { elementType: LC, externalForwardedProps: Mn, ownerState: Ve, className: Pe.listbox, additionalProps: Mr, ref: Dt }), [Je, pt] = yn("paper", { elementType: lm, externalForwardedProps: Mn, ownerState: Ve, className: Pe.paper }), [ht, Tt] = yn("popper", { elementType: l_, externalForwardedProps: Mn, ownerState: Ve, className: Pe.popper, additionalProps: { disablePortal: U, style: { width: Zi ? Zi.clientWidth : null }, role: "presentation", anchorEl: Zi, open: ci } });
  let It;
  const Yt = (ae) => ({ className: Pe.tag, disabled: D, ...Wn(ae) });
  if (At ? Qn.length > 0 && (Ze ? It = Ze(Qn, Yt, Ve) : ce ? It = ce(Qn, Yt, Ve) : It = Qn.map((ae, On) => {
    const { key: ei, ...ni } = Yt({ index: On });
    return I.jsx(u_, { label: pi(ae), size: oe, ...ni, ...Mn.slotProps.chip }, ei);
  })) : ce && Qn != null && (It = ce(Qn, Yt, Ve)), ft > -1 && Array.isArray(It)) {
    const ae = It.length - ft;
    !fi && ae > 0 && (It = It.splice(0, ft), It.push(I.jsx("span", { className: Pe.tag, children: w(ae) }, It.length)));
  }
  const qe = Mt || ((ae) => I.jsxs("li", { children: [I.jsx(zC, { className: Pe.groupLabel, ownerState: Ve, component: "div", children: ae.group }), I.jsx(PC, { className: Pe.groupUl, ownerState: Ve, children: ae.children })] }, ae.key)), fo = be || ((ae, On) => {
    const { key: ei, ...ni } = ae;
    return I.jsx("li", { ...ni, children: pi(On) }, ei);
  }), Wo = (ae, On) => {
    const ei = uo({ option: ae, index: On });
    return fo({ ...ei, className: Pe.option }, ae, { selected: ei["aria-selected"], index: On, inputValue: di }, Ve);
  }, mi = Mn.slotProps.clearIndicator, Eo = Mn.slotProps.popupIndicator;
  return I.jsxs(M.Fragment, { children: [I.jsx(CC, { ref: a, className: qt(Pe.root, b), ownerState: Ve, ...Bn(fn), children: tn({ id: ui, disabled: D, fullWidth: true, size: oe === "small" ? "small" : void 0, InputLabelProps: Pt(), InputProps: { ref: To, className: Pe.inputRoot, startAdornment: It, onMouseDown: (ae) => {
    ae.target === ae.currentTarget && En(ae);
  }, ...(an || hi) && { endAdornment: I.jsxs(TC, { className: Pe.endAdornment, ownerState: Ve, children: [an ? I.jsx(EC, { ...re(), "aria-label": k, title: k, ownerState: Ve, ...mi, className: qt(Pe.clearIndicator, mi == null ? void 0 : mi.className), children: S }) : null, hi ? I.jsx(MC, { ...ne(), disabled: D, "aria-label": ci ? A : ie, title: ci ? A : ie, ownerState: Ve, ...Eo, className: qt(Pe.popupIndicator, Eo == null ? void 0 : Eo.className), children: Bt }) : null] }) } }, inputProps: { className: Pe.input, disabled: D, readOnly: Jt, ...rn() } }) }), Zi ? I.jsx(OC, { as: ht, ...Tt, children: I.jsxs(AC, { as: Je, ...pt, children: [_t && Qe.length === 0 ? I.jsx(RC, { className: Pe.loading, ownerState: Ve, children: ct }) : null, Qe.length === 0 && !ut && !_t ? I.jsx(kC, { className: Pe.noOptions, ownerState: Ve, role: "presentation", onMouseDown: (ae) => {
    ae.preventDefault();
  }, children: Lt }) : null, Qe.length > 0 ? I.jsx(Zn, { as: dt, ...Jn, children: Qe.map((ae, On) => tt ? qe({ key: ae.key, group: ae.group, children: ae.options.map((ei, ni) => Wo(ei, ae.index + ni)) }) : Wo(ae, On)) }) : null] }) }) : null] });
}), DC = { entering: { opacity: 1 }, entered: { opacity: 1 } }, NC = M.forwardRef(function(r, a) {
  const u = qo(), f = { enter: u.transitions.duration.enteringScreen, exit: u.transitions.duration.leavingScreen }, { addEndListener: h, appear: g = true, children: v, easing: y, in: b, onEnter: S, onEntered: E, onEntering: R, onExit: k, onExited: A, onExiting: O, style: $, timeout: F = f, TransitionComponent: V = Yo, ...D } = r, N = M.useRef(null), P = Fn(N, Du(v), a), U = (W) => (et) => {
    if (W) {
      const B = N.current;
      et === void 0 ? W(B) : W(B, et);
    }
  }, K = U(R), J = U((W, et) => {
    V1(W);
    const B = bf({ style: $, timeout: F, easing: y }, { mode: "enter" });
    W.style.webkitTransition = u.transitions.create("opacity", B), W.style.transition = u.transitions.create("opacity", B), S && S(W, et);
  }), it = U(E), ut = U(O), ot = U((W) => {
    const et = bf({ style: $, timeout: F, easing: y }, { mode: "exit" });
    W.style.webkitTransition = u.transitions.create("opacity", et), W.style.transition = u.transitions.create("opacity", et), k && k(W);
  }), w = U(A), st = (W) => {
    h && h(N.current, W);
  };
  return I.jsx(V, { appear: g, in: b, nodeRef: N, onEnter: J, onEntered: it, onEntering: K, onExit: ot, onExited: w, onExiting: ut, addEndListener: st, timeout: F, ...D, children: (W, { ownerState: et, ...B }) => M.cloneElement(v, { style: { opacity: 0, visibility: W === "exited" && !b ? "hidden" : void 0, ...DC[W], ...$, ...v.props.style }, ref: P, ...B }) });
});
function $C(n2) {
  return Re("MuiBackdrop", n2);
}
ke("MuiBackdrop", ["root", "invisible"]);
const IC = (n2) => {
  const { classes: r, invisible: a } = n2;
  return Le({ root: ["root", a && "invisible"] }, $C, r);
}, jC = Ot("div", { name: "MuiBackdrop", slot: "Root", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.root, a.invisible && r.invisible];
} })({ position: "fixed", display: "flex", alignItems: "center", justifyContent: "center", right: 0, bottom: 0, top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", WebkitTapHighlightColor: "transparent", variants: [{ props: { invisible: true }, style: { backgroundColor: "transparent" } }] }), HC = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiBackdrop" }), { children: f, className: h, component: g = "div", invisible: v = false, open: y, components: b = {}, componentsProps: S = {}, slotProps: E = {}, slots: R = {}, TransitionComponent: k, transitionDuration: A, ...O } = u, $ = { ...u, component: g, invisible: v }, F = IC($), V = { transition: k, root: b.Root, ...R }, D = { ...S, ...E }, N = { component: g, slots: V, slotProps: D }, [P, U] = yn("root", { elementType: jC, externalForwardedProps: N, className: qt(F.root, h), ownerState: $ }), [K, J] = yn("transition", { elementType: NC, externalForwardedProps: N, ownerState: $ });
  return I.jsx(K, { in: y, timeout: A, ...O, ...J, children: I.jsx(P, { "aria-hidden": true, ...U, classes: F, ref: a, children: f }) });
}), UC = ke("MuiBox", ["root"]), FC = Hf(), ji = Xx({ themeId: Fo, defaultTheme: FC, defaultClassName: UC.root, generateClassName: _1.generate });
function ZC(n2) {
  return Re("MuiButton", n2);
}
const Ya = ke("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), VC = M.createContext({}), GC = M.createContext(void 0), qC = (n2) => {
  const { color: r, disableElevation: a, fullWidth: u, size: f, variant: h, loading: g, loadingPosition: v, classes: y } = n2, b = { root: ["root", g && "loading", h, `${h}${wt(r)}`, `size${wt(f)}`, `${h}Size${wt(f)}`, `color${wt(r)}`, a && "disableElevation", u && "fullWidth", g && `loadingPosition${wt(v)}`], startIcon: ["icon", "startIcon", `iconSize${wt(f)}`], endIcon: ["icon", "endIcon", `iconSize${wt(f)}`], loadingIndicator: ["loadingIndicator"], loadingWrapper: ["loadingWrapper"] }, S = Le(b, ZC, y);
  return { ...y, ...S };
}, f_ = [{ props: { size: "small" }, style: { "& > *:nth-of-type(1)": { fontSize: 18 } } }, { props: { size: "medium" }, style: { "& > *:nth-of-type(1)": { fontSize: 20 } } }, { props: { size: "large" }, style: { "& > *:nth-of-type(1)": { fontSize: 22 } } }], YC = Ot(Cf, { shouldForwardProp: (n2) => Co(n2) || n2 === "classes", name: "MuiButton", slot: "Root", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.root, r[a.variant], r[`${a.variant}${wt(a.color)}`], r[`size${wt(a.size)}`], r[`${a.variant}Size${wt(a.size)}`], a.color === "inherit" && r.colorInherit, a.disableElevation && r.disableElevation, a.fullWidth && r.fullWidth, a.loading && r.loading];
} })(Ee(({ theme: n2 }) => {
  const r = n2.palette.mode === "light" ? n2.palette.grey[300] : n2.palette.grey[800], a = n2.palette.mode === "light" ? n2.palette.grey.A100 : n2.palette.grey[700];
  return { ...n2.typography.button, minWidth: 64, padding: "6px 16px", border: 0, borderRadius: (n2.vars || n2).shape.borderRadius, transition: n2.transitions.create(["background-color", "box-shadow", "border-color", "color"], { duration: n2.transitions.duration.short }), "&:hover": { textDecoration: "none" }, [`&.${Ya.disabled}`]: { color: (n2.vars || n2).palette.action.disabled }, variants: [{ props: { variant: "contained" }, style: { color: "var(--variant-containedColor)", backgroundColor: "var(--variant-containedBg)", boxShadow: (n2.vars || n2).shadows[2], "&:hover": { boxShadow: (n2.vars || n2).shadows[4], "@media (hover: none)": { boxShadow: (n2.vars || n2).shadows[2] } }, "&:active": { boxShadow: (n2.vars || n2).shadows[8] }, [`&.${Ya.focusVisible}`]: { boxShadow: (n2.vars || n2).shadows[6] }, [`&.${Ya.disabled}`]: { color: (n2.vars || n2).palette.action.disabled, boxShadow: (n2.vars || n2).shadows[0], backgroundColor: (n2.vars || n2).palette.action.disabledBackground } } }, { props: { variant: "outlined" }, style: { padding: "5px 15px", border: "1px solid currentColor", borderColor: "var(--variant-outlinedBorder, currentColor)", backgroundColor: "var(--variant-outlinedBg)", color: "var(--variant-outlinedColor)", [`&.${Ya.disabled}`]: { border: `1px solid ${(n2.vars || n2).palette.action.disabledBackground}` } } }, { props: { variant: "text" }, style: { padding: "6px 8px", color: "var(--variant-textColor)", backgroundColor: "var(--variant-textBg)" } }, ...Object.entries(n2.palette).filter(xi()).map(([u]) => ({ props: { color: u }, style: { "--variant-textColor": (n2.vars || n2).palette[u].main, "--variant-outlinedColor": (n2.vars || n2).palette[u].main, "--variant-outlinedBorder": n2.alpha((n2.vars || n2).palette[u].main, 0.5), "--variant-containedColor": (n2.vars || n2).palette[u].contrastText, "--variant-containedBg": (n2.vars || n2).palette[u].main, "@media (hover: hover)": { "&:hover": { "--variant-containedBg": (n2.vars || n2).palette[u].dark, "--variant-textBg": n2.alpha((n2.vars || n2).palette[u].main, (n2.vars || n2).palette.action.hoverOpacity), "--variant-outlinedBorder": (n2.vars || n2).palette[u].main, "--variant-outlinedBg": n2.alpha((n2.vars || n2).palette[u].main, (n2.vars || n2).palette.action.hoverOpacity) } } } })), { props: { color: "inherit" }, style: { color: "inherit", borderColor: "currentColor", "--variant-containedBg": n2.vars ? n2.vars.palette.Button.inheritContainedBg : r, "@media (hover: hover)": { "&:hover": { "--variant-containedBg": n2.vars ? n2.vars.palette.Button.inheritContainedHoverBg : a, "--variant-textBg": n2.alpha((n2.vars || n2).palette.text.primary, (n2.vars || n2).palette.action.hoverOpacity), "--variant-outlinedBg": n2.alpha((n2.vars || n2).palette.text.primary, (n2.vars || n2).palette.action.hoverOpacity) } } } }, { props: { size: "small", variant: "text" }, style: { padding: "4px 5px", fontSize: n2.typography.pxToRem(13) } }, { props: { size: "large", variant: "text" }, style: { padding: "8px 11px", fontSize: n2.typography.pxToRem(15) } }, { props: { size: "small", variant: "outlined" }, style: { padding: "3px 9px", fontSize: n2.typography.pxToRem(13) } }, { props: { size: "large", variant: "outlined" }, style: { padding: "7px 21px", fontSize: n2.typography.pxToRem(15) } }, { props: { size: "small", variant: "contained" }, style: { padding: "4px 10px", fontSize: n2.typography.pxToRem(13) } }, { props: { size: "large", variant: "contained" }, style: { padding: "8px 22px", fontSize: n2.typography.pxToRem(15) } }, { props: { disableElevation: true }, style: { boxShadow: "none", "&:hover": { boxShadow: "none" }, [`&.${Ya.focusVisible}`]: { boxShadow: "none" }, "&:active": { boxShadow: "none" }, [`&.${Ya.disabled}`]: { boxShadow: "none" } } }, { props: { fullWidth: true }, style: { width: "100%" } }, { props: { loadingPosition: "center" }, style: { transition: n2.transitions.create(["background-color", "box-shadow", "border-color"], { duration: n2.transitions.duration.short }), [`&.${Ya.loading}`]: { color: "transparent" } } }] };
})), KC = Ot("span", { name: "MuiButton", slot: "StartIcon", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.startIcon, a.loading && r.startIconLoadingStart, r[`iconSize${wt(a.size)}`]];
} })(({ theme: n2 }) => ({ display: "inherit", marginRight: 8, marginLeft: -4, variants: [{ props: { size: "small" }, style: { marginLeft: -2 } }, { props: { loadingPosition: "start", loading: true }, style: { transition: n2.transitions.create(["opacity"], { duration: n2.transitions.duration.short }), opacity: 0 } }, { props: { loadingPosition: "start", loading: true, fullWidth: true }, style: { marginRight: -8 } }, ...f_] })), XC = Ot("span", { name: "MuiButton", slot: "EndIcon", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.endIcon, a.loading && r.endIconLoadingEnd, r[`iconSize${wt(a.size)}`]];
} })(({ theme: n2 }) => ({ display: "inherit", marginRight: -4, marginLeft: 8, variants: [{ props: { size: "small" }, style: { marginRight: -2 } }, { props: { loadingPosition: "end", loading: true }, style: { transition: n2.transitions.create(["opacity"], { duration: n2.transitions.duration.short }), opacity: 0 } }, { props: { loadingPosition: "end", loading: true, fullWidth: true }, style: { marginLeft: -8 } }, ...f_] })), WC = Ot("span", { name: "MuiButton", slot: "LoadingIndicator" })(({ theme: n2 }) => ({ display: "none", position: "absolute", visibility: "visible", variants: [{ props: { loading: true }, style: { display: "flex" } }, { props: { loadingPosition: "start" }, style: { left: 14 } }, { props: { loadingPosition: "start", size: "small" }, style: { left: 10 } }, { props: { variant: "text", loadingPosition: "start" }, style: { left: 6 } }, { props: { loadingPosition: "center" }, style: { left: "50%", transform: "translate(-50%)", color: (n2.vars || n2).palette.action.disabled } }, { props: { loadingPosition: "end" }, style: { right: 14 } }, { props: { loadingPosition: "end", size: "small" }, style: { right: 10 } }, { props: { variant: "text", loadingPosition: "end" }, style: { right: 6 } }, { props: { loadingPosition: "start", fullWidth: true }, style: { position: "relative", left: -10 } }, { props: { loadingPosition: "end", fullWidth: true }, style: { position: "relative", right: -10 } }] })), Ay = Ot("span", { name: "MuiButton", slot: "LoadingIconPlaceholder" })({ display: "inline-block", width: "1em", height: "1em" }), QC = M.forwardRef(function(r, a) {
  const u = M.useContext(VC), f = M.useContext(GC), h = Su(u, r), g = ze({ props: h, name: "MuiButton" }), { children: v, color: y = "primary", component: b = "button", className: S, disabled: E = false, disableElevation: R = false, disableFocusRipple: k = false, endIcon: A, focusVisibleClassName: O, fullWidth: $ = false, id: F, loading: V = null, loadingIndicator: D, loadingPosition: N = "center", size: P = "medium", startIcon: U, type: K, variant: J = "text", ...it } = g, ut = el(F), ot = D ?? I.jsx(um, { "aria-labelledby": ut, color: "inherit", size: 16 }), w = { ...g, color: y, component: b, disabled: E, disableElevation: R, disableFocusRipple: k, fullWidth: $, loading: V, loadingIndicator: ot, loadingPosition: N, size: P, type: K, variant: J }, st = qC(w), W = (U || V && N === "start") && I.jsx(KC, { className: st.startIcon, ownerState: w, children: U || I.jsx(Ay, { className: st.loadingIconPlaceholder, ownerState: w }) }), et = (A || V && N === "end") && I.jsx(XC, { className: st.endIcon, ownerState: w, children: A || I.jsx(Ay, { className: st.loadingIconPlaceholder, ownerState: w }) }), B = f || "", tt = typeof V == "boolean" ? I.jsx("span", { className: st.loadingWrapper, style: { display: "contents" }, children: V && I.jsx(WC, { className: st.loadingIndicator, ownerState: w, children: ot }) }) : null;
  return I.jsxs(YC, { ownerState: w, className: qt(u.className, st.root, S, B), component: b, disabled: E || V, focusRipple: !k, focusVisibleClassName: qt(st.focusVisible, O), ref: a, type: K, id: V ? ut : F, ...it, classes: st, children: [W, N !== "end" && tt, v, N === "end" && tt, et] });
}), zp = typeof im({}) == "function", JC = (n2, r) => ({ WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", boxSizing: "border-box", WebkitTextSizeAdjust: "100%", ...r && !n2.vars && { colorScheme: n2.palette.mode } }), tT = (n2) => ({ color: (n2.vars || n2).palette.text.primary, ...n2.typography.body1, backgroundColor: (n2.vars || n2).palette.background.default, "@media print": { backgroundColor: (n2.vars || n2).palette.common.white } }), d_ = (n2, r = false) => {
  var _a2, _b2;
  const a = {};
  r && n2.colorSchemes && typeof n2.getColorSchemeSelector == "function" && Object.entries(n2.colorSchemes).forEach(([h, g]) => {
    var _a3, _b3;
    const v = n2.getColorSchemeSelector(h);
    v.startsWith("@") ? a[v] = { ":root": { colorScheme: (_a3 = g.palette) == null ? void 0 : _a3.mode } } : a[v.replace(/\s*&/, "")] = { colorScheme: (_b3 = g.palette) == null ? void 0 : _b3.mode };
  });
  let u = { html: JC(n2, r), "*, *::before, *::after": { boxSizing: "inherit" }, "strong, b": { fontWeight: n2.typography.fontWeightBold }, body: { margin: 0, ...tT(n2), "&::backdrop": { backgroundColor: (n2.vars || n2).palette.background.default } }, ...a };
  const f = (_b2 = (_a2 = n2.components) == null ? void 0 : _a2.MuiCssBaseline) == null ? void 0 : _b2.styleOverrides;
  return f && (u = [u, f]), u;
}, pf = "mui-ecs", eT = (n2) => {
  const r = d_(n2, false), a = Array.isArray(r) ? r[0] : r;
  return !n2.vars && a && (a.html[`:root:has(${pf})`] = { colorScheme: n2.palette.mode }), n2.colorSchemes && Object.entries(n2.colorSchemes).forEach(([u, f]) => {
    var _a2, _b2;
    const h = n2.getColorSchemeSelector(u);
    h.startsWith("@") ? a[h] = { [`:root:not(:has(.${pf}))`]: { colorScheme: (_a2 = f.palette) == null ? void 0 : _a2.mode } } : a[h.replace(/\s*&/, "")] = { [`&:not(:has(.${pf}))`]: { colorScheme: (_b2 = f.palette) == null ? void 0 : _b2.mode } };
  }), r;
}, nT = im(zp ? ({ theme: n2, enableColorScheme: r }) => d_(n2, r) : ({ theme: n2 }) => eT(n2));
function iT(n2) {
  const r = ze({ props: n2, name: "MuiCssBaseline" }), { children: a, enableColorScheme: u = false } = r;
  return I.jsxs(M.Fragment, { children: [zp && I.jsx(nT, { enableColorScheme: u }), !zp && !u && I.jsx("span", { className: pf, style: { display: "none" } }), a] });
}
function h_(n2 = window) {
  const r = n2.document.documentElement.clientWidth;
  return n2.innerWidth - r;
}
function oT(n2) {
  const r = Ui(n2);
  return r.body === n2 ? wr(n2).innerWidth > r.documentElement.clientWidth : n2.scrollHeight > n2.clientHeight;
}
function vu(n2, r) {
  r ? n2.setAttribute("aria-hidden", "true") : n2.removeAttribute("aria-hidden");
}
function Ry(n2) {
  return parseInt(wr(n2).getComputedStyle(n2).paddingRight, 10) || 0;
}
function rT(n2) {
  const a = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(n2.tagName), u = n2.tagName === "INPUT" && n2.getAttribute("type") === "hidden";
  return a || u;
}
function ky(n2, r, a, u, f) {
  const h = [r, a, ...u];
  [].forEach.call(n2.children, (g) => {
    const v = !h.includes(g), y = !rT(g);
    v && y && vu(g, f);
  });
}
function rp(n2, r) {
  let a = -1;
  return n2.some((u, f) => r(u) ? (a = f, true) : false), a;
}
function aT(n2, r) {
  const a = [], u = n2.container;
  if (!r.disableScrollLock) {
    if (oT(u)) {
      const g = h_(wr(u));
      a.push({ value: u.style.paddingRight, property: "padding-right", el: u }), u.style.paddingRight = `${Ry(u) + g}px`;
      const v = Ui(u).querySelectorAll(".mui-fixed");
      [].forEach.call(v, (y) => {
        a.push({ value: y.style.paddingRight, property: "padding-right", el: y }), y.style.paddingRight = `${Ry(y) + g}px`;
      });
    }
    let h;
    if (u.parentNode instanceof DocumentFragment) h = Ui(u).body;
    else {
      const g = u.parentElement, v = wr(u);
      h = (g == null ? void 0 : g.nodeName) === "HTML" && v.getComputedStyle(g).overflowY === "scroll" ? g : u;
    }
    a.push({ value: h.style.overflow, property: "overflow", el: h }, { value: h.style.overflowX, property: "overflow-x", el: h }, { value: h.style.overflowY, property: "overflow-y", el: h }), h.style.overflow = "hidden";
  }
  return () => {
    a.forEach(({ value: h, el: g, property: v }) => {
      h ? g.style.setProperty(v, h) : g.style.removeProperty(v);
    });
  };
}
function sT(n2) {
  const r = [];
  return [].forEach.call(n2.children, (a) => {
    a.getAttribute("aria-hidden") === "true" && r.push(a);
  }), r;
}
class lT {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(r, a) {
    let u = this.modals.indexOf(r);
    if (u !== -1) return u;
    u = this.modals.length, this.modals.push(r), r.modalRef && vu(r.modalRef, false);
    const f = sT(a);
    ky(a, r.mount, r.modalRef, f, true);
    const h = rp(this.containers, (g) => g.container === a);
    return h !== -1 ? (this.containers[h].modals.push(r), u) : (this.containers.push({ modals: [r], container: a, restore: null, hiddenSiblings: f }), u);
  }
  mount(r, a) {
    const u = rp(this.containers, (h) => h.modals.includes(r)), f = this.containers[u];
    f.restore || (f.restore = aT(f, a));
  }
  remove(r, a = true) {
    const u = this.modals.indexOf(r);
    if (u === -1) return u;
    const f = rp(this.containers, (g) => g.modals.includes(r)), h = this.containers[f];
    if (h.modals.splice(h.modals.indexOf(r), 1), this.modals.splice(u, 1), h.modals.length === 0) h.restore && h.restore(), r.modalRef && vu(r.modalRef, a), ky(h.container, r.mount, r.modalRef, h.hiddenSiblings, false), this.containers.splice(f, 1);
    else {
      const g = h.modals[h.modals.length - 1];
      g.modalRef && vu(g.modalRef, false);
    }
    return u;
  }
  isTopModal(r) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === r;
  }
}
const uT = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function cT(n2) {
  const r = parseInt(n2.getAttribute("tabindex") || "", 10);
  return Number.isNaN(r) ? n2.contentEditable === "true" || (n2.nodeName === "AUDIO" || n2.nodeName === "VIDEO" || n2.nodeName === "DETAILS") && n2.getAttribute("tabindex") === null ? 0 : n2.tabIndex : r;
}
function fT(n2) {
  if (n2.tagName !== "INPUT" || n2.type !== "radio" || !n2.name) return false;
  const r = (u) => n2.ownerDocument.querySelector(`input[type="radio"]${u}`);
  let a = r(`[name="${n2.name}"]:checked`);
  return a || (a = r(`[name="${n2.name}"]`)), a !== n2;
}
function dT(n2) {
  return !(n2.disabled || n2.tagName === "INPUT" && n2.type === "hidden" || fT(n2));
}
function hT(n2) {
  const r = [], a = [];
  return Array.from(n2.querySelectorAll(uT)).forEach((u, f) => {
    const h = cT(u);
    h === -1 || !dT(u) || (h === 0 ? r.push(u) : a.push({ documentOrder: f, tabIndex: h, node: u }));
  }), a.sort((u, f) => u.tabIndex === f.tabIndex ? u.documentOrder - f.documentOrder : u.tabIndex - f.tabIndex).map((u) => u.node).concat(r);
}
function pT() {
  return true;
}
function mT(n2) {
  const { children: r, disableAutoFocus: a = false, disableEnforceFocus: u = false, disableRestoreFocus: f = false, getTabbable: h = hT, isEnabled: g = pT, open: v } = n2, y = M.useRef(false), b = M.useRef(null), S = M.useRef(null), E = M.useRef(null), R = M.useRef(null), k = M.useRef(false), A = M.useRef(null), O = Fn(Du(r), A), $ = M.useRef(null);
  M.useEffect(() => {
    !v || !A.current || (k.current = !a);
  }, [a, v]), M.useEffect(() => {
    if (!v || !A.current) return;
    const D = Ui(A.current);
    return A.current.contains(D.activeElement) || (A.current.hasAttribute("tabIndex") || A.current.setAttribute("tabIndex", "-1"), k.current && A.current.focus()), () => {
      f || (E.current && E.current.focus && (y.current = true, E.current.focus()), E.current = null);
    };
  }, [v]), M.useEffect(() => {
    if (!v || !A.current) return;
    const D = Ui(A.current), N = (K) => {
      $.current = K, !(u || !g() || K.key !== "Tab") && D.activeElement === A.current && K.shiftKey && (y.current = true, S.current && S.current.focus());
    }, P = () => {
      var _a2, _b2;
      const K = A.current;
      if (K === null) return;
      if (!D.hasFocus() || !g() || y.current) {
        y.current = false;
        return;
      }
      if (K.contains(D.activeElement) || u && D.activeElement !== b.current && D.activeElement !== S.current) return;
      if (D.activeElement !== R.current) R.current = null;
      else if (R.current !== null) return;
      if (!k.current) return;
      let J = [];
      if ((D.activeElement === b.current || D.activeElement === S.current) && (J = h(A.current)), J.length > 0) {
        const it = !!(((_a2 = $.current) == null ? void 0 : _a2.shiftKey) && ((_b2 = $.current) == null ? void 0 : _b2.key) === "Tab"), ut = J[0], ot = J[J.length - 1];
        typeof ut != "string" && typeof ot != "string" && (it ? ot.focus() : ut.focus());
      } else K.focus();
    };
    D.addEventListener("focusin", P), D.addEventListener("keydown", N, true);
    const U = setInterval(() => {
      D.activeElement && D.activeElement.tagName === "BODY" && P();
    }, 50);
    return () => {
      clearInterval(U), D.removeEventListener("focusin", P), D.removeEventListener("keydown", N, true);
    };
  }, [a, u, f, g, v, h]);
  const F = (D) => {
    E.current === null && (E.current = D.relatedTarget), k.current = true, R.current = D.target;
    const N = r.props.onFocus;
    N && N(D);
  }, V = (D) => {
    E.current === null && (E.current = D.relatedTarget), k.current = true;
  };
  return I.jsxs(M.Fragment, { children: [I.jsx("div", { tabIndex: v ? 0 : -1, onFocus: V, ref: b, "data-testid": "sentinelStart" }), M.cloneElement(r, { ref: O, onFocus: F }), I.jsx("div", { tabIndex: v ? 0 : -1, onFocus: V, ref: S, "data-testid": "sentinelEnd" })] });
}
function gT(n2) {
  return typeof n2 == "function" ? n2() : n2;
}
function vT(n2) {
  return n2 ? n2.props.hasOwnProperty("in") : false;
}
const Ly = () => {
}, af = new lT();
function yT(n2) {
  const { container: r, disableEscapeKeyDown: a = false, disableScrollLock: u = false, closeAfterTransition: f = false, onTransitionEnter: h, onTransitionExited: g, children: v, onClose: y, open: b, rootRef: S } = n2, E = M.useRef({}), R = M.useRef(null), k = M.useRef(null), A = Fn(k, S), [O, $] = M.useState(!b), F = vT(v);
  let V = true;
  (n2["aria-hidden"] === "false" || n2["aria-hidden"] === false) && (V = false);
  const D = () => Ui(R.current), N = () => (E.current.modalRef = k.current, E.current.mount = R.current, E.current), P = () => {
    af.mount(N(), { disableScrollLock: u }), k.current && (k.current.scrollTop = 0);
  }, U = xo(() => {
    const et = gT(r) || D().body;
    af.add(N(), et), k.current && P();
  }), K = () => af.isTopModal(N()), J = xo((et) => {
    R.current = et, et && (b && K() ? P() : k.current && vu(k.current, V));
  }), it = M.useCallback(() => {
    af.remove(N(), V);
  }, [V]);
  M.useEffect(() => () => {
    it();
  }, [it]), M.useEffect(() => {
    b ? U() : (!F || !f) && it();
  }, [b, it, F, f, U]);
  const ut = (et) => (B) => {
    var _a2;
    (_a2 = et.onKeyDown) == null ? void 0 : _a2.call(et, B), !(B.key !== "Escape" || B.which === 229 || !K()) && (a || (B.stopPropagation(), y && y(B, "escapeKeyDown")));
  }, ot = (et) => (B) => {
    var _a2;
    (_a2 = et.onClick) == null ? void 0 : _a2.call(et, B), B.target === B.currentTarget && y && y(B, "backdropClick");
  };
  return { getRootProps: (et = {}) => {
    const B = Y1(n2);
    delete B.onTransitionEnter, delete B.onTransitionExited;
    const tt = { ...B, ...et };
    return { role: "presentation", ...tt, onKeyDown: ut(tt), ref: A };
  }, getBackdropProps: (et = {}) => {
    const B = et;
    return { "aria-hidden": true, ...B, onClick: ot(B), open: b };
  }, getTransitionProps: () => {
    const et = () => {
      $(false), h && h();
    }, B = () => {
      $(true), g && g(), f && it();
    };
    return { onEnter: oy(et, (v == null ? void 0 : v.props.onEnter) ?? Ly), onExited: oy(B, (v == null ? void 0 : v.props.onExited) ?? Ly) };
  }, rootRef: A, portalRef: J, isTopModal: K, exited: O, hasTransition: F };
}
function _T(n2) {
  return Re("MuiModal", n2);
}
ke("MuiModal", ["root", "hidden", "backdrop"]);
const bT = (n2) => {
  const { open: r, exited: a, classes: u } = n2;
  return Le({ root: ["root", !r && a && "hidden"], backdrop: ["backdrop"] }, _T, u);
}, xT = Ot("div", { name: "MuiModal", slot: "Root", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.root, !a.open && a.exited && r.hidden];
} })(Ee(({ theme: n2 }) => ({ position: "fixed", zIndex: (n2.vars || n2).zIndex.modal, right: 0, bottom: 0, top: 0, left: 0, variants: [{ props: ({ ownerState: r }) => !r.open && r.exited, style: { visibility: "hidden" } }] }))), ST = Ot(HC, { name: "MuiModal", slot: "Backdrop" })({ zIndex: -1 }), wT = M.forwardRef(function(r, a) {
  const u = ze({ name: "MuiModal", props: r }), { BackdropComponent: f = ST, BackdropProps: h, classes: g, className: v, closeAfterTransition: y = false, children: b, container: S, component: E, components: R = {}, componentsProps: k = {}, disableAutoFocus: A = false, disableEnforceFocus: O = false, disableEscapeKeyDown: $ = false, disablePortal: F = false, disableRestoreFocus: V = false, disableScrollLock: D = false, hideBackdrop: N = false, keepMounted: P = false, onClose: U, onTransitionEnter: K, onTransitionExited: J, open: it, slotProps: ut = {}, slots: ot = {}, theme: w, ...st } = u, W = { ...u, closeAfterTransition: y, disableAutoFocus: A, disableEnforceFocus: O, disableEscapeKeyDown: $, disablePortal: F, disableRestoreFocus: V, disableScrollLock: D, hideBackdrop: N, keepMounted: P }, { getRootProps: et, getBackdropProps: B, getTransitionProps: tt, portalRef: rt, isTopModal: gt, exited: z, hasTransition: q } = yT({ ...W, rootRef: a }), ft = { ...W, exited: z }, dt = bT(ft), bt = {};
  if (b.props.tabIndex === void 0 && (bt.tabIndex = "-1"), q) {
    const { onEnter: Rt, onExited: Ut } = tt();
    bt.onEnter = Rt, bt.onExited = Ut;
  }
  const _t = { slots: { root: R.Root, backdrop: R.Backdrop, ...ot }, slotProps: { ...k, ...ut } }, [ct, At] = yn("root", { ref: a, elementType: xT, externalForwardedProps: { ..._t, ...st, component: E }, getSlotProps: et, ownerState: ft, className: qt(v, dt == null ? void 0 : dt.root, !ft.open && ft.exited && (dt == null ? void 0 : dt.hidden)) }), [Lt, $t] = yn("backdrop", { ref: h == null ? void 0 : h.ref, elementType: f, externalForwardedProps: _t, shouldForwardComponentProp: true, additionalProps: h, getSlotProps: (Rt) => B({ ...Rt, onClick: (Ut) => {
    (Rt == null ? void 0 : Rt.onClick) && Rt.onClick(Ut);
  } }), className: qt(h == null ? void 0 : h.className, dt == null ? void 0 : dt.backdrop), ownerState: ft });
  return !P && !it && (!q || z) ? null : I.jsx(s_, { ref: rt, container: S, disablePortal: F, children: I.jsxs(ct, { ...At, children: [!N && f ? I.jsx(Lt, { ...$t }) : null, I.jsx(mT, { disableEnforceFocus: O, disableAutoFocus: A, disableRestoreFocus: V, isEnabled: gt, open: it, children: M.cloneElement(b, bt) })] }) });
}), CT = (n2) => {
  const { classes: r, disableUnderline: a, startAdornment: u, endAdornment: f, size: h, hiddenLabel: g, multiline: v } = n2, y = { root: ["root", !a && "underline", u && "adornedStart", f && "adornedEnd", h === "small" && `size${wt(h)}`, g && "hiddenLabel", v && "multiline"], input: ["input"] }, b = Le(y, xC, r);
  return { ...r, ...b };
}, TT = Ot(qf, { shouldForwardProp: (n2) => Co(n2) || n2 === "classes", name: "MuiFilledInput", slot: "Root", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [...Vf(n2, r), !a.disableUnderline && r.underline];
} })(Ee(({ theme: n2 }) => {
  const r = n2.palette.mode === "light", a = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", u = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", f = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", h = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return { position: "relative", backgroundColor: n2.vars ? n2.vars.palette.FilledInput.bg : u, borderTopLeftRadius: (n2.vars || n2).shape.borderRadius, borderTopRightRadius: (n2.vars || n2).shape.borderRadius, transition: n2.transitions.create("background-color", { duration: n2.transitions.duration.shorter, easing: n2.transitions.easing.easeOut }), "&:hover": { backgroundColor: n2.vars ? n2.vars.palette.FilledInput.hoverBg : f, "@media (hover: none)": { backgroundColor: n2.vars ? n2.vars.palette.FilledInput.bg : u } }, [`&.${$i.focused}`]: { backgroundColor: n2.vars ? n2.vars.palette.FilledInput.bg : u }, [`&.${$i.disabled}`]: { backgroundColor: n2.vars ? n2.vars.palette.FilledInput.disabledBg : h }, variants: [{ props: ({ ownerState: g }) => !g.disableUnderline, style: { "&::after": { left: 0, bottom: 0, content: '""', position: "absolute", right: 0, transform: "scaleX(0)", transition: n2.transitions.create("transform", { duration: n2.transitions.duration.shorter, easing: n2.transitions.easing.easeOut }), pointerEvents: "none" }, [`&.${$i.focused}:after`]: { transform: "scaleX(1) translateX(0)" }, [`&.${$i.error}`]: { "&::before, &::after": { borderBottomColor: (n2.vars || n2).palette.error.main } }, "&::before": { borderBottom: `1px solid ${n2.vars ? n2.alpha(n2.vars.palette.common.onBackground, n2.vars.opacity.inputUnderline) : a}`, left: 0, bottom: 0, content: '"\\00a0"', position: "absolute", right: 0, transition: n2.transitions.create("border-bottom-color", { duration: n2.transitions.duration.shorter }), pointerEvents: "none" }, [`&:hover:not(.${$i.disabled}, .${$i.error}):before`]: { borderBottom: `1px solid ${(n2.vars || n2).palette.text.primary}` }, [`&.${$i.disabled}:before`]: { borderBottomStyle: "dotted" } } }, ...Object.entries(n2.palette).filter(xi()).map(([g]) => {
    var _a2;
    return { props: { disableUnderline: false, color: g }, style: { "&::after": { borderBottom: `2px solid ${(_a2 = (n2.vars || n2).palette[g]) == null ? void 0 : _a2.main}` } } };
  }), { props: ({ ownerState: g }) => g.startAdornment, style: { paddingLeft: 12 } }, { props: ({ ownerState: g }) => g.endAdornment, style: { paddingRight: 12 } }, { props: ({ ownerState: g }) => g.multiline, style: { padding: "25px 12px 8px" } }, { props: ({ ownerState: g, size: v }) => g.multiline && v === "small", style: { paddingTop: 21, paddingBottom: 4 } }, { props: ({ ownerState: g }) => g.multiline && g.hiddenLabel, style: { paddingTop: 16, paddingBottom: 17 } }, { props: ({ ownerState: g }) => g.multiline && g.hiddenLabel && g.size === "small", style: { paddingTop: 8, paddingBottom: 9 } }] };
})), ET = Ot(Yf, { name: "MuiFilledInput", slot: "Input", overridesResolver: Gf })(Ee(({ theme: n2 }) => ({ paddingTop: 25, paddingRight: 12, paddingBottom: 8, paddingLeft: 12, ...!n2.vars && { "&:-webkit-autofill": { WebkitBoxShadow: n2.palette.mode === "light" ? null : "0 0 0 100px #266798 inset", WebkitTextFillColor: n2.palette.mode === "light" ? null : "#fff", caretColor: n2.palette.mode === "light" ? null : "#fff", borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit" } }, ...n2.vars && { "&:-webkit-autofill": { borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit" }, [n2.getColorSchemeSelector("dark")]: { "&:-webkit-autofill": { WebkitBoxShadow: "0 0 0 100px #266798 inset", WebkitTextFillColor: "#fff", caretColor: "#fff" } } }, variants: [{ props: { size: "small" }, style: { paddingTop: 21, paddingBottom: 4 } }, { props: ({ ownerState: r }) => r.hiddenLabel, style: { paddingTop: 16, paddingBottom: 17 } }, { props: ({ ownerState: r }) => r.startAdornment, style: { paddingLeft: 0 } }, { props: ({ ownerState: r }) => r.endAdornment, style: { paddingRight: 0 } }, { props: ({ ownerState: r }) => r.hiddenLabel && r.size === "small", style: { paddingTop: 8, paddingBottom: 9 } }, { props: ({ ownerState: r }) => r.multiline, style: { paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 } }] }))), _m = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiFilledInput" }), { disableUnderline: f = false, components: h = {}, componentsProps: g, fullWidth: v = false, hiddenLabel: y, inputComponent: b = "input", multiline: S = false, slotProps: E, slots: R = {}, type: k = "text", ...A } = u, O = { ...u, disableUnderline: f, fullWidth: v, inputComponent: b, multiline: S, type: k }, $ = CT(u), F = { root: { ownerState: O }, input: { ownerState: O } }, V = E ?? g ? Pn(F, E ?? g) : F, D = R.root ?? h.Root ?? TT, N = R.input ?? h.Input ?? ET;
  return I.jsx(ym, { slots: { root: D, input: N }, slotProps: V, fullWidth: v, inputComponent: b, multiline: S, ref: a, type: k, ...A, classes: $ });
});
_m.muiName = "Input";
function MT(n2) {
  return Re("MuiFormControl", n2);
}
ke("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const OT = (n2) => {
  const { classes: r, margin: a, fullWidth: u } = n2, f = { root: ["root", a !== "none" && `margin${wt(a)}`, u && "fullWidth"] };
  return Le(f, MT, r);
}, AT = Ot("div", { name: "MuiFormControl", slot: "Root", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.root, r[`margin${wt(a.margin)}`], a.fullWidth && r.fullWidth];
} })({ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, margin: 0, border: 0, verticalAlign: "top", variants: [{ props: { margin: "normal" }, style: { marginTop: 16, marginBottom: 8 } }, { props: { margin: "dense" }, style: { marginTop: 8, marginBottom: 4 } }, { props: { fullWidth: true }, style: { width: "100%" } }] }), RT = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiFormControl" }), { children: f, className: h, color: g = "primary", component: v = "div", disabled: y = false, error: b = false, focused: S, fullWidth: E = false, hiddenLabel: R = false, margin: k = "none", required: A = false, size: O = "medium", variant: $ = "outlined", ...F } = u, V = { ...u, color: g, component: v, disabled: y, error: b, fullWidth: E, hiddenLabel: R, margin: k, required: A, size: O, variant: $ }, D = OT(V), [N, P] = M.useState(() => {
    let et = false;
    return f && M.Children.forEach(f, (B) => {
      if (!ep(B, ["Input", "Select"])) return;
      const tt = ep(B, ["Select"]) ? B.props.input : B;
      tt && gC(tt.props) && (et = true);
    }), et;
  }), [U, K] = M.useState(() => {
    let et = false;
    return f && M.Children.forEach(f, (B) => {
      ep(B, ["Input", "Select"]) && (Ef(B.props, true) || Ef(B.props.inputProps, true)) && (et = true);
    }), et;
  }), [J, it] = M.useState(false);
  y && J && it(false);
  const ut = S !== void 0 && !y ? S : J;
  let ot;
  M.useRef(false);
  const w = M.useCallback(() => {
    K(true);
  }, []), st = M.useCallback(() => {
    K(false);
  }, []), W = M.useMemo(() => ({ adornedStart: N, setAdornedStart: P, color: g, disabled: y, error: b, filled: U, focused: ut, fullWidth: E, hiddenLabel: R, size: O, onBlur: () => {
    it(false);
  }, onFocus: () => {
    it(true);
  }, onEmpty: st, onFilled: w, registerEffect: ot, required: A, variant: $ }), [N, g, y, b, U, ut, E, R, ot, st, w, A, O, $]);
  return I.jsx(vm.Provider, { value: W, children: I.jsx(AT, { as: v, ownerState: V, className: qt(D.root, h), ref: a, ...F, children: f }) });
});
function kT(n2) {
  return Re("MuiFormHelperText", n2);
}
const zy = ke("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var Py;
const LT = (n2) => {
  const { classes: r, contained: a, size: u, disabled: f, error: h, filled: g, focused: v, required: y } = n2, b = { root: ["root", f && "disabled", h && "error", u && `size${wt(u)}`, a && "contained", v && "focused", g && "filled", y && "required"] };
  return Le(b, kT, r);
}, zT = Ot("p", { name: "MuiFormHelperText", slot: "Root", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.root, a.size && r[`size${wt(a.size)}`], a.contained && r.contained, a.filled && r.filled];
} })(Ee(({ theme: n2 }) => ({ color: (n2.vars || n2).palette.text.secondary, ...n2.typography.caption, textAlign: "left", marginTop: 3, marginRight: 0, marginBottom: 0, marginLeft: 0, [`&.${zy.disabled}`]: { color: (n2.vars || n2).palette.text.disabled }, [`&.${zy.error}`]: { color: (n2.vars || n2).palette.error.main }, variants: [{ props: { size: "small" }, style: { marginTop: 4 } }, { props: ({ ownerState: r }) => r.contained, style: { marginLeft: 14, marginRight: 14 } }] }))), PT = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiFormHelperText" }), { children: f, className: h, component: g = "p", disabled: v, error: y, filled: b, focused: S, margin: E, required: R, variant: k, ...A } = u, O = il(), $ = nl({ props: u, muiFormControl: O, states: ["variant", "size", "disabled", "error", "filled", "focused", "required"] }), F = { ...u, component: g, contained: $.variant === "filled" || $.variant === "outlined", variant: $.variant, size: $.size, disabled: $.disabled, error: $.error, filled: $.filled, focused: $.focused, required: $.required };
  delete F.ownerState;
  const V = LT(F);
  return I.jsx(zT, { as: g, className: qt(V.root, h), ref: a, ...A, ownerState: F, children: f === " " ? Py || (Py = I.jsx("span", { className: "notranslate", "aria-hidden": true, children: "\u200B" })) : f });
});
function BT(n2) {
  return Re("MuiFormLabel", n2);
}
const yu = ke("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), DT = (n2) => {
  const { classes: r, color: a, focused: u, disabled: f, error: h, filled: g, required: v } = n2, y = { root: ["root", `color${wt(a)}`, f && "disabled", h && "error", g && "filled", u && "focused", v && "required"], asterisk: ["asterisk", h && "error"] };
  return Le(y, BT, r);
}, NT = Ot("label", { name: "MuiFormLabel", slot: "Root", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.root, a.color === "secondary" && r.colorSecondary, a.filled && r.filled];
} })(Ee(({ theme: n2 }) => ({ color: (n2.vars || n2).palette.text.secondary, ...n2.typography.body1, lineHeight: "1.4375em", padding: 0, position: "relative", variants: [...Object.entries(n2.palette).filter(xi()).map(([r]) => ({ props: { color: r }, style: { [`&.${yu.focused}`]: { color: (n2.vars || n2).palette[r].main } } })), { props: {}, style: { [`&.${yu.disabled}`]: { color: (n2.vars || n2).palette.text.disabled }, [`&.${yu.error}`]: { color: (n2.vars || n2).palette.error.main } } }] }))), $T = Ot("span", { name: "MuiFormLabel", slot: "Asterisk" })(Ee(({ theme: n2 }) => ({ [`&.${yu.error}`]: { color: (n2.vars || n2).palette.error.main } }))), IT = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiFormLabel" }), { children: f, className: h, color: g, component: v = "label", disabled: y, error: b, filled: S, focused: E, required: R, ...k } = u, A = il(), O = nl({ props: u, muiFormControl: A, states: ["color", "required", "focused", "disabled", "error", "filled"] }), $ = { ...u, color: O.color || "primary", component: v, disabled: O.disabled, error: O.error, filled: O.filled, focused: O.focused, required: O.required }, F = DT($);
  return I.jsxs(NT, { as: v, ownerState: $, className: qt(F.root, h), ref: a, ...k, children: [f, O.required && I.jsxs($T, { ownerState: $, "aria-hidden": true, className: F.asterisk, children: ["\u2009", "*"] })] });
});
function Pp(n2) {
  return `scale(${n2}, ${n2 ** 2})`;
}
const jT = { entering: { opacity: 1, transform: Pp(1) }, entered: { opacity: 1, transform: "none" } }, ap = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Bp = M.forwardRef(function(r, a) {
  const { addEndListener: u, appear: f = true, children: h, easing: g, in: v, onEnter: y, onEntered: b, onEntering: S, onExit: E, onExited: R, onExiting: k, style: A, timeout: O = "auto", TransitionComponent: $ = Yo, ...F } = r, V = Z1(), D = M.useRef(), N = qo(), P = M.useRef(null), U = Fn(P, Du(h), a), K = (et) => (B) => {
    if (et) {
      const tt = P.current;
      B === void 0 ? et(tt) : et(tt, B);
    }
  }, J = K(S), it = K((et, B) => {
    V1(et);
    const { duration: tt, delay: rt, easing: gt } = bf({ style: A, timeout: O, easing: g }, { mode: "enter" });
    let z;
    O === "auto" ? (z = N.transitions.getAutoHeightDuration(et.clientHeight), D.current = z) : z = tt, et.style.transition = [N.transitions.create("opacity", { duration: z, delay: rt }), N.transitions.create("transform", { duration: ap ? z : z * 0.666, delay: rt, easing: gt })].join(","), y && y(et, B);
  }), ut = K(b), ot = K(k), w = K((et) => {
    const { duration: B, delay: tt, easing: rt } = bf({ style: A, timeout: O, easing: g }, { mode: "exit" });
    let gt;
    O === "auto" ? (gt = N.transitions.getAutoHeightDuration(et.clientHeight), D.current = gt) : gt = B, et.style.transition = [N.transitions.create("opacity", { duration: gt, delay: tt }), N.transitions.create("transform", { duration: ap ? gt : gt * 0.666, delay: ap ? tt : tt || gt * 0.333, easing: rt })].join(","), et.style.opacity = 0, et.style.transform = Pp(0.75), E && E(et);
  }), st = K(R), W = (et) => {
    O === "auto" && V.start(D.current || 0, et), u && u(P.current, et);
  };
  return I.jsx($, { appear: f, in: v, nodeRef: P, onEnter: it, onEntered: ut, onEntering: J, onExit: w, onExited: st, onExiting: ot, addEndListener: W, timeout: O === "auto" ? null : O, ...F, children: (et, { ownerState: B, ...tt }) => M.cloneElement(h, { style: { opacity: 0, transform: Pp(0.75), visibility: et === "exited" && !v ? "hidden" : void 0, ...jT[et], ...A, ...h.props.style }, ref: U, ...tt }) });
});
Bp && (Bp.muiSupportAuto = true);
const HT = (n2) => {
  const { classes: r, disableUnderline: a } = n2, f = Le({ root: ["root", !a && "underline"], input: ["input"] }, _C, r);
  return { ...r, ...f };
}, UT = Ot(qf, { shouldForwardProp: (n2) => Co(n2) || n2 === "classes", name: "MuiInput", slot: "Root", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [...Vf(n2, r), !a.disableUnderline && r.underline];
} })(Ee(({ theme: n2 }) => {
  let a = n2.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return n2.vars && (a = n2.alpha(n2.vars.palette.common.onBackground, n2.vars.opacity.inputUnderline)), { position: "relative", variants: [{ props: ({ ownerState: u }) => u.formControl, style: { "label + &": { marginTop: 16 } } }, { props: ({ ownerState: u }) => !u.disableUnderline, style: { "&::after": { left: 0, bottom: 0, content: '""', position: "absolute", right: 0, transform: "scaleX(0)", transition: n2.transitions.create("transform", { duration: n2.transitions.duration.shorter, easing: n2.transitions.easing.easeOut }), pointerEvents: "none" }, [`&.${ma.focused}:after`]: { transform: "scaleX(1) translateX(0)" }, [`&.${ma.error}`]: { "&::before, &::after": { borderBottomColor: (n2.vars || n2).palette.error.main } }, "&::before": { borderBottom: `1px solid ${a}`, left: 0, bottom: 0, content: '"\\00a0"', position: "absolute", right: 0, transition: n2.transitions.create("border-bottom-color", { duration: n2.transitions.duration.shorter }), pointerEvents: "none" }, [`&:hover:not(.${ma.disabled}, .${ma.error}):before`]: { borderBottom: `2px solid ${(n2.vars || n2).palette.text.primary}`, "@media (hover: none)": { borderBottom: `1px solid ${a}` } }, [`&.${ma.disabled}:before`]: { borderBottomStyle: "dotted" } } }, ...Object.entries(n2.palette).filter(xi()).map(([u]) => ({ props: { color: u, disableUnderline: false }, style: { "&::after": { borderBottom: `2px solid ${(n2.vars || n2).palette[u].main}` } } }))] };
})), FT = Ot(Yf, { name: "MuiInput", slot: "Input", overridesResolver: Gf })({}), bm = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiInput" }), { disableUnderline: f = false, components: h = {}, componentsProps: g, fullWidth: v = false, inputComponent: y = "input", multiline: b = false, slotProps: S, slots: E = {}, type: R = "text", ...k } = u, A = HT(u), $ = { root: { ownerState: { disableUnderline: f } } }, F = S ?? g ? Pn(S ?? g, $) : $, V = E.root ?? h.Root ?? UT, D = E.input ?? h.Input ?? FT;
  return I.jsx(ym, { slots: { root: V, input: D }, slotProps: F, fullWidth: v, inputComponent: y, multiline: b, ref: a, type: R, ...k, classes: A });
});
bm.muiName = "Input";
function ZT(n2) {
  return Re("MuiInputLabel", n2);
}
ke("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const VT = (n2) => {
  const { classes: r, formControl: a, size: u, shrink: f, disableAnimation: h, variant: g, required: v } = n2, y = { root: ["root", a && "formControl", !h && "animated", f && "shrink", u && u !== "medium" && `size${wt(u)}`, g], asterisk: [v && "asterisk"] }, b = Le(y, ZT, r);
  return { ...r, ...b };
}, GT = Ot(IT, { shouldForwardProp: (n2) => Co(n2) || n2 === "classes", name: "MuiInputLabel", slot: "Root", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [{ [`& .${yu.asterisk}`]: r.asterisk }, r.root, a.formControl && r.formControl, a.size === "small" && r.sizeSmall, a.shrink && r.shrink, !a.disableAnimation && r.animated, a.focused && r.focused, r[a.variant]];
} })(Ee(({ theme: n2 }) => ({ display: "block", transformOrigin: "top left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%", variants: [{ props: ({ ownerState: r }) => r.formControl, style: { position: "absolute", left: 0, top: 0, transform: "translate(0, 20px) scale(1)" } }, { props: { size: "small" }, style: { transform: "translate(0, 17px) scale(1)" } }, { props: ({ ownerState: r }) => r.shrink, style: { transform: "translate(0, -1.5px) scale(0.75)", transformOrigin: "top left", maxWidth: "133%" } }, { props: ({ ownerState: r }) => !r.disableAnimation, style: { transition: n2.transitions.create(["color", "transform", "max-width"], { duration: n2.transitions.duration.shorter, easing: n2.transitions.easing.easeOut }) } }, { props: { variant: "filled" }, style: { zIndex: 1, pointerEvents: "none", transform: "translate(12px, 16px) scale(1)", maxWidth: "calc(100% - 24px)" } }, { props: { variant: "filled", size: "small" }, style: { transform: "translate(12px, 13px) scale(1)" } }, { props: ({ variant: r, ownerState: a }) => r === "filled" && a.shrink, style: { userSelect: "none", pointerEvents: "auto", transform: "translate(12px, 7px) scale(0.75)", maxWidth: "calc(133% - 24px)" } }, { props: ({ variant: r, ownerState: a, size: u }) => r === "filled" && a.shrink && u === "small", style: { transform: "translate(12px, 4px) scale(0.75)" } }, { props: { variant: "outlined" }, style: { zIndex: 1, pointerEvents: "none", transform: "translate(14px, 16px) scale(1)", maxWidth: "calc(100% - 24px)" } }, { props: { variant: "outlined", size: "small" }, style: { transform: "translate(14px, 9px) scale(1)" } }, { props: ({ variant: r, ownerState: a }) => r === "outlined" && a.shrink, style: { userSelect: "none", pointerEvents: "auto", maxWidth: "calc(133% - 32px)", transform: "translate(14px, -9px) scale(0.75)" } }] }))), qT = M.forwardRef(function(r, a) {
  const u = ze({ name: "MuiInputLabel", props: r }), { disableAnimation: f = false, margin: h, shrink: g, variant: v, className: y, ...b } = u, S = il();
  let E = g;
  typeof E > "u" && S && (E = S.filled || S.focused || S.adornedStart);
  const R = nl({ props: u, muiFormControl: S, states: ["size", "variant", "required", "focused"] }), k = { ...u, disableAnimation: f, formControl: S, shrink: E, size: R.size, variant: R.variant, required: R.required, focused: R.focused }, A = VT(k);
  return I.jsx(GT, { "data-shrink": E, ref: a, className: qt(A.root, y), ...b, ownerState: k, classes: A });
});
function YT(n2) {
  return Re("MuiLink", n2);
}
const KT = ke("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]), XT = ({ theme: n2, ownerState: r }) => {
  const a = r.color;
  if ("colorSpace" in n2 && n2.colorSpace) {
    const h = Ho(n2, `palette.${a}.main`) || Ho(n2, `palette.${a}`) || r.color;
    return n2.alpha(h, 0.4);
  }
  const u = Ho(n2, `palette.${a}.main`, false) || Ho(n2, `palette.${a}`, false) || r.color, f = Ho(n2, `palette.${a}.mainChannel`) || Ho(n2, `palette.${a}Channel`);
  return "vars" in n2 && f ? `rgba(${f} / 0.4)` : wu(u, 0.4);
}, By = { primary: true, secondary: true, error: true, info: true, success: true, warning: true, textPrimary: true, textSecondary: true, textDisabled: true }, WT = (n2) => {
  const { classes: r, component: a, focusVisible: u, underline: f } = n2, h = { root: ["root", `underline${wt(f)}`, a === "button" && "button", u && "focusVisible"] };
  return Le(h, YT, r);
}, QT = Ot(Ff, { name: "MuiLink", slot: "Root", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.root, r[`underline${wt(a.underline)}`], a.component === "button" && r.button];
} })(Ee(({ theme: n2 }) => ({ variants: [{ props: { underline: "none" }, style: { textDecoration: "none" } }, { props: { underline: "hover" }, style: { textDecoration: "none", "&:hover": { textDecoration: "underline" } } }, { props: { underline: "always" }, style: { textDecoration: "underline", "&:hover": { textDecorationColor: "inherit" } } }, { props: ({ underline: r, ownerState: a }) => r === "always" && a.color !== "inherit", style: { textDecorationColor: "var(--Link-underlineColor)" } }, { props: ({ underline: r, ownerState: a }) => r === "always" && a.color === "inherit", style: n2.colorSpace ? { textDecorationColor: n2.alpha("currentColor", 0.4) } : null }, ...Object.entries(n2.palette).filter(xi()).map(([r]) => ({ props: { underline: "always", color: r }, style: { "--Link-underlineColor": n2.alpha((n2.vars || n2).palette[r].main, 0.4) } })), { props: { underline: "always", color: "textPrimary" }, style: { "--Link-underlineColor": n2.alpha((n2.vars || n2).palette.text.primary, 0.4) } }, { props: { underline: "always", color: "textSecondary" }, style: { "--Link-underlineColor": n2.alpha((n2.vars || n2).palette.text.secondary, 0.4) } }, { props: { underline: "always", color: "textDisabled" }, style: { "--Link-underlineColor": (n2.vars || n2).palette.text.disabled } }, { props: { component: "button" }, style: { position: "relative", WebkitTapHighlightColor: "transparent", backgroundColor: "transparent", outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: "pointer", userSelect: "none", verticalAlign: "middle", MozAppearance: "none", WebkitAppearance: "none", "&::-moz-focus-inner": { borderStyle: "none" }, [`&.${KT.focusVisible}`]: { outline: "auto" } } }] }))), JT = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiLink" }), f = qo(), { className: h, color: g = "primary", component: v = "a", onBlur: y, onFocus: b, TypographyClasses: S, underline: E = "always", variant: R = "inherit", sx: k, ...A } = u, [O, $] = M.useState(false), F = (P) => {
    Sf(P.target) || $(false), y && y(P);
  }, V = (P) => {
    Sf(P.target) && $(true), b && b(P);
  }, D = { ...u, color: g, component: v, focusVisible: O, underline: E, variant: R }, N = WT(D);
  return I.jsx(QT, { color: g, className: qt(N.root, h), classes: S, component: v, onBlur: F, onFocus: V, ref: a, ownerState: D, variant: R, ...A, sx: [...By[g] === void 0 ? [{ color: g }] : [], ...Array.isArray(k) ? k : [k]], style: { ...A.style, ...E === "always" && g !== "inherit" && !By[g] && { "--Link-underlineColor": XT({ theme: f, ownerState: D }) } } });
}), t4 = M.createContext({});
function e4(n2) {
  return Re("MuiList", n2);
}
ke("MuiList", ["root", "padding", "dense", "subheader"]);
const n4 = (n2) => {
  const { classes: r, disablePadding: a, dense: u, subheader: f } = n2;
  return Le({ root: ["root", !a && "padding", u && "dense", f && "subheader"] }, e4, r);
}, i4 = Ot("ul", { name: "MuiList", slot: "Root", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.root, !a.disablePadding && r.padding, a.dense && r.dense, a.subheader && r.subheader];
} })({ listStyle: "none", margin: 0, padding: 0, position: "relative", variants: [{ props: ({ ownerState: n2 }) => !n2.disablePadding, style: { paddingTop: 8, paddingBottom: 8 } }, { props: ({ ownerState: n2 }) => n2.subheader, style: { paddingTop: 0 } }] }), o4 = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiList" }), { children: f, className: h, component: g = "ul", dense: v = false, disablePadding: y = false, subheader: b, ...S } = u, E = M.useMemo(() => ({ dense: v }), [v]), R = { ...u, component: g, dense: v, disablePadding: y }, k = n4(R);
  return I.jsx(t4.Provider, { value: E, children: I.jsxs(i4, { as: g, className: qt(k.root, h), ref: a, ownerState: R, ...S, children: [b, f] }) });
});
function sp(n2, r, a) {
  return n2 === r ? n2.firstChild : r && r.nextElementSibling ? r.nextElementSibling : a ? null : n2.firstChild;
}
function Dy(n2, r, a) {
  return n2 === r ? a ? n2.firstChild : n2.lastChild : r && r.previousElementSibling ? r.previousElementSibling : a ? null : n2.lastChild;
}
function p_(n2, r) {
  if (r === void 0) return true;
  let a = n2.innerText;
  return a === void 0 && (a = n2.textContent), a = a.trim().toLowerCase(), a.length === 0 ? false : r.repeating ? a[0] === r.keys[0] : a.startsWith(r.keys.join(""));
}
function au(n2, r, a, u, f, h) {
  let g = false, v = f(n2, r, r ? a : false);
  for (; v; ) {
    if (v === n2.firstChild) {
      if (g) return false;
      g = true;
    }
    const y = u ? false : v.disabled || v.getAttribute("aria-disabled") === "true";
    if (!v.hasAttribute("tabindex") || !p_(v, h) || y) v = f(n2, v, a);
    else return v.focus(), true;
  }
  return false;
}
const r4 = M.forwardRef(function(r, a) {
  const { actions: u, autoFocus: f = false, autoFocusItem: h = false, children: g, className: v, disabledItemsFocusable: y = false, disableListWrap: b = false, onKeyDown: S, variant: E = "selectedMenu", ...R } = r, k = M.useRef(null), A = M.useRef({ keys: [], repeating: true, previousKeyMatched: true, lastTime: null });
  wo(() => {
    f && k.current.focus();
  }, [f]), M.useImperativeHandle(u, () => ({ adjustStyleForScrollbar: (D, { direction: N }) => {
    const P = !k.current.style.width;
    if (D.clientHeight < k.current.clientHeight && P) {
      const U = `${h_(wr(D))}px`;
      k.current.style[N === "rtl" ? "paddingLeft" : "paddingRight"] = U, k.current.style.width = `calc(100% + ${U})`;
    }
    return k.current;
  } }), []);
  const O = (D) => {
    const N = k.current, P = D.key;
    if (D.ctrlKey || D.metaKey || D.altKey) {
      S && S(D);
      return;
    }
    const K = Ui(N).activeElement;
    if (P === "ArrowDown") D.preventDefault(), au(N, K, b, y, sp);
    else if (P === "ArrowUp") D.preventDefault(), au(N, K, b, y, Dy);
    else if (P === "Home") D.preventDefault(), au(N, null, b, y, sp);
    else if (P === "End") D.preventDefault(), au(N, null, b, y, Dy);
    else if (P.length === 1) {
      const J = A.current, it = P.toLowerCase(), ut = performance.now();
      J.keys.length > 0 && (ut - J.lastTime > 500 ? (J.keys = [], J.repeating = true, J.previousKeyMatched = true) : J.repeating && it !== J.keys[0] && (J.repeating = false)), J.lastTime = ut, J.keys.push(it);
      const ot = K && !J.repeating && p_(K, J);
      J.previousKeyMatched && (ot || au(N, K, false, y, sp, J)) ? D.preventDefault() : J.previousKeyMatched = false;
    }
    S && S(D);
  }, $ = Fn(k, a);
  let F = -1;
  M.Children.forEach(g, (D, N) => {
    if (!M.isValidElement(D)) {
      F === N && (F += 1, F >= g.length && (F = -1));
      return;
    }
    D.props.disabled || (E === "selectedMenu" && D.props.selected || F === -1) && (F = N), F === N && (D.props.disabled || D.props.muiSkipListHighlight || D.type.muiSkipListHighlight) && (F += 1, F >= g.length && (F = -1));
  });
  const V = M.Children.map(g, (D, N) => {
    if (N === F) {
      const P = {};
      return h && (P.autoFocus = true), D.props.tabIndex === void 0 && E === "selectedMenu" && (P.tabIndex = 0), M.cloneElement(D, P);
    }
    return D;
  });
  return I.jsx(o4, { role: "menu", ref: $, className: v, onKeyDown: O, tabIndex: f ? 0 : -1, ...R, children: V });
});
function a4(n2) {
  return Re("MuiPopover", n2);
}
ke("MuiPopover", ["root", "paper"]);
function Ny(n2, r) {
  let a = 0;
  return typeof r == "number" ? a = r : r === "center" ? a = n2.height / 2 : r === "bottom" && (a = n2.height), a;
}
function $y(n2, r) {
  let a = 0;
  return typeof r == "number" ? a = r : r === "center" ? a = n2.width / 2 : r === "right" && (a = n2.width), a;
}
function Iy(n2) {
  return [n2.horizontal, n2.vertical].map((r) => typeof r == "number" ? `${r}px` : r).join(" ");
}
function sf(n2) {
  return typeof n2 == "function" ? n2() : n2;
}
const s4 = (n2) => {
  const { classes: r } = n2;
  return Le({ root: ["root"], paper: ["paper"] }, a4, r);
}, l4 = Ot(wT, { name: "MuiPopover", slot: "Root" })({}), m_ = Ot(lm, { name: "MuiPopover", slot: "Paper" })({ position: "absolute", overflowY: "auto", overflowX: "hidden", minWidth: 16, minHeight: 16, maxWidth: "calc(100% - 32px)", maxHeight: "calc(100% - 32px)", outline: 0 }), u4 = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiPopover" }), { action: f, anchorEl: h, anchorOrigin: g = { vertical: "top", horizontal: "left" }, anchorPosition: v, anchorReference: y = "anchorEl", children: b, className: S, container: E, elevation: R = 8, marginThreshold: k = 16, open: A, PaperProps: O = {}, slots: $ = {}, slotProps: F = {}, transformOrigin: V = { vertical: "top", horizontal: "left" }, TransitionComponent: D, transitionDuration: N = "auto", TransitionProps: P = {}, disableScrollLock: U = false, ...K } = u, J = M.useRef(), it = { ...u, anchorOrigin: g, anchorReference: y, elevation: R, marginThreshold: k, transformOrigin: V, TransitionComponent: D, transitionDuration: N, TransitionProps: P }, ut = s4(it), ot = M.useCallback(() => {
    if (y === "anchorPosition") return v;
    const Rt = sf(h), Wt = (Rt && Rt.nodeType === 1 ? Rt : Ui(J.current).body).getBoundingClientRect();
    return { top: Wt.top + Ny(Wt, g.vertical), left: Wt.left + $y(Wt, g.horizontal) };
  }, [h, g.horizontal, g.vertical, v, y]), w = M.useCallback((Rt) => ({ vertical: Ny(Rt, V.vertical), horizontal: $y(Rt, V.horizontal) }), [V.horizontal, V.vertical]), st = M.useCallback((Rt) => {
    const Ut = { width: Rt.offsetWidth, height: Rt.offsetHeight }, Wt = w(Ut);
    if (y === "none") return { top: null, left: null, transformOrigin: Iy(Wt) };
    const te = ot();
    let Zt = te.top - Wt.vertical, de = te.left - Wt.horizontal;
    const ie = Zt + Ut.height, ue = de + Ut.width, Ct = wr(sf(h)), _e = Ct.innerHeight - k, Bt = Ct.innerWidth - k;
    if (k !== null && Zt < k) {
      const Jt = Zt - k;
      Zt -= Jt, Wt.vertical += Jt;
    } else if (k !== null && ie > _e) {
      const Jt = ie - _e;
      Zt -= Jt, Wt.vertical += Jt;
    }
    if (k !== null && de < k) {
      const Jt = de - k;
      de -= Jt, Wt.horizontal += Jt;
    } else if (ue > Bt) {
      const Jt = ue - Bt;
      de -= Jt, Wt.horizontal += Jt;
    }
    return { top: `${Math.round(Zt)}px`, left: `${Math.round(de)}px`, transformOrigin: Iy(Wt) };
  }, [h, y, ot, w, k]), [W, et] = M.useState(A), B = M.useCallback(() => {
    const Rt = J.current;
    if (!Rt) return;
    const Ut = st(Rt);
    Ut.top !== null && Rt.style.setProperty("top", Ut.top), Ut.left !== null && (Rt.style.left = Ut.left), Rt.style.transformOrigin = Ut.transformOrigin, et(true);
  }, [st]);
  M.useEffect(() => (U && window.addEventListener("scroll", B), () => window.removeEventListener("scroll", B)), [h, U, B]);
  const tt = () => {
    B();
  }, rt = () => {
    et(false);
  };
  M.useEffect(() => {
    A && B();
  }), M.useImperativeHandle(f, () => A ? { updatePosition: () => {
    B();
  } } : null, [A, B]), M.useEffect(() => {
    if (!A) return;
    const Rt = j1(() => {
      B();
    }), Ut = wr(sf(h));
    return Ut.addEventListener("resize", Rt), () => {
      Rt.clear(), Ut.removeEventListener("resize", Rt);
    };
  }, [h, A, B]);
  let gt = N;
  const z = { slots: { transition: D, ...$ }, slotProps: { transition: P, paper: O, ...F } }, [q, ft] = yn("transition", { elementType: Bp, externalForwardedProps: z, ownerState: it, getSlotProps: (Rt) => ({ ...Rt, onEntering: (Ut, Wt) => {
    var _a2;
    (_a2 = Rt.onEntering) == null ? void 0 : _a2.call(Rt, Ut, Wt), tt();
  }, onExited: (Ut) => {
    var _a2;
    (_a2 = Rt.onExited) == null ? void 0 : _a2.call(Rt, Ut), rt();
  } }), additionalProps: { appear: true, in: A } });
  N === "auto" && !q.muiSupportAuto && (gt = void 0);
  const dt = E || (h ? Ui(sf(h)).body : void 0), [bt, { slots: _t, slotProps: ct, ...At }] = yn("root", { ref: a, elementType: l4, externalForwardedProps: { ...z, ...K }, shouldForwardComponentProp: true, additionalProps: { slots: { backdrop: $.backdrop }, slotProps: { backdrop: V3(typeof F.backdrop == "function" ? F.backdrop(it) : F.backdrop, { invisible: true }) }, container: dt, open: A }, ownerState: it, className: qt(ut.root, S) }), [Lt, $t] = yn("paper", { ref: J, className: ut.paper, elementType: m_, externalForwardedProps: z, shouldForwardComponentProp: true, additionalProps: { elevation: R, style: W ? void 0 : { opacity: 0 } }, ownerState: it });
  return I.jsx(bt, { ...At, ...!xf(bt) && { slots: _t, slotProps: ct, disableScrollLock: U }, children: I.jsx(q, { ...ft, timeout: gt, children: I.jsx(Lt, { ...$t, children: b }) }) });
});
function c4(n2) {
  return Re("MuiMenu", n2);
}
ke("MuiMenu", ["root", "paper", "list"]);
const f4 = { vertical: "top", horizontal: "right" }, d4 = { vertical: "top", horizontal: "left" }, h4 = (n2) => {
  const { classes: r } = n2;
  return Le({ root: ["root"], paper: ["paper"], list: ["list"] }, c4, r);
}, p4 = Ot(u4, { shouldForwardProp: (n2) => Co(n2) || n2 === "classes", name: "MuiMenu", slot: "Root" })({}), m4 = Ot(m_, { name: "MuiMenu", slot: "Paper" })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }), g4 = Ot(r4, { name: "MuiMenu", slot: "List" })({ outline: 0 }), v4 = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiMenu" }), { autoFocus: f = true, children: h, className: g, disableAutoFocusItem: v = false, MenuListProps: y = {}, onClose: b, open: S, PaperProps: E = {}, PopoverClasses: R, transitionDuration: k = "auto", TransitionProps: { onEntering: A, ...O } = {}, variant: $ = "selectedMenu", slots: F = {}, slotProps: V = {}, ...D } = u, N = M1(), P = { ...u, autoFocus: f, disableAutoFocusItem: v, MenuListProps: y, onEntering: A, PaperProps: E, transitionDuration: k, TransitionProps: O, variant: $ }, U = h4(P), K = f && !v && S, J = M.useRef(null), it = (gt, z) => {
    J.current && J.current.adjustStyleForScrollbar(gt, { direction: N ? "rtl" : "ltr" }), A && A(gt, z);
  }, ut = (gt) => {
    gt.key === "Tab" && (gt.preventDefault(), b && b(gt, "tabKeyDown"));
  };
  let ot = -1;
  M.Children.map(h, (gt, z) => {
    M.isValidElement(gt) && (gt.props.disabled || ($ === "selectedMenu" && gt.props.selected || ot === -1) && (ot = z));
  });
  const w = { slots: F, slotProps: { list: y, transition: O, paper: E, ...V } }, st = a_({ elementType: F.root, externalSlotProps: V.root, ownerState: P, className: [U.root, g] }), [W, et] = yn("paper", { className: U.paper, elementType: m4, externalForwardedProps: w, shouldForwardComponentProp: true, ownerState: P }), [B, tt] = yn("list", { className: qt(U.list, y.className), elementType: g4, shouldForwardComponentProp: true, externalForwardedProps: w, getSlotProps: (gt) => ({ ...gt, onKeyDown: (z) => {
    var _a2;
    ut(z), (_a2 = gt.onKeyDown) == null ? void 0 : _a2.call(gt, z);
  } }), ownerState: P }), rt = typeof w.slotProps.transition == "function" ? w.slotProps.transition(P) : w.slotProps.transition;
  return I.jsx(p4, { onClose: b, anchorOrigin: { vertical: "bottom", horizontal: N ? "right" : "left" }, transformOrigin: N ? f4 : d4, slots: { root: F.root, paper: W, backdrop: F.backdrop, ...F.transition && { transition: F.transition } }, slotProps: { root: st, paper: et, backdrop: typeof V.backdrop == "function" ? V.backdrop(P) : V.backdrop, transition: { ...rt, onEntering: (...gt) => {
    var _a2;
    it(...gt), (_a2 = rt == null ? void 0 : rt.onEntering) == null ? void 0 : _a2.call(rt, ...gt);
  } } }, open: S, ref: a, transitionDuration: k, ownerState: P, ...D, classes: R, children: I.jsx(B, { actions: J, autoFocus: f && (ot === -1 || v), autoFocusItem: K, variant: $, ...tt, children: h }) });
});
function y4(n2) {
  return Re("MuiNativeSelect", n2);
}
const xm = ke("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), _4 = (n2) => {
  const { classes: r, variant: a, disabled: u, multiple: f, open: h, error: g } = n2, v = { select: ["select", a, u && "disabled", f && "multiple", g && "error"], icon: ["icon", `icon${wt(a)}`, h && "iconOpen", u && "disabled"] };
  return Le(v, y4, r);
}, g_ = Ot("select", { name: "MuiNativeSelect" })(({ theme: n2 }) => ({ MozAppearance: "none", WebkitAppearance: "none", userSelect: "none", borderRadius: 0, cursor: "pointer", "&:focus": { borderRadius: 0 }, [`&.${xm.disabled}`]: { cursor: "default" }, "&[multiple]": { height: "auto" }, "&:not([multiple]) option, &:not([multiple]) optgroup": { backgroundColor: (n2.vars || n2).palette.background.paper }, variants: [{ props: ({ ownerState: r }) => r.variant !== "filled" && r.variant !== "outlined", style: { "&&&": { paddingRight: 24, minWidth: 16 } } }, { props: { variant: "filled" }, style: { "&&&": { paddingRight: 32 } } }, { props: { variant: "outlined" }, style: { borderRadius: (n2.vars || n2).shape.borderRadius, "&:focus": { borderRadius: (n2.vars || n2).shape.borderRadius }, "&&&": { paddingRight: 32 } } }] })), b4 = Ot(g_, { name: "MuiNativeSelect", slot: "Select", shouldForwardProp: Co, overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.select, r[a.variant], a.error && r.error, { [`&.${xm.multiple}`]: r.multiple }];
} })({}), v_ = Ot("svg", { name: "MuiNativeSelect" })(({ theme: n2 }) => ({ position: "absolute", right: 0, top: "calc(50% - .5em)", pointerEvents: "none", color: (n2.vars || n2).palette.action.active, [`&.${xm.disabled}`]: { color: (n2.vars || n2).palette.action.disabled }, variants: [{ props: ({ ownerState: r }) => r.open, style: { transform: "rotate(180deg)" } }, { props: { variant: "filled" }, style: { right: 7 } }, { props: { variant: "outlined" }, style: { right: 7 } }] })), x4 = Ot(v_, { name: "MuiNativeSelect", slot: "Icon", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.icon, a.variant && r[`icon${wt(a.variant)}`], a.open && r.iconOpen];
} })({}), S4 = M.forwardRef(function(r, a) {
  const { className: u, disabled: f, error: h, IconComponent: g, inputRef: v, variant: y = "standard", ...b } = r, S = { ...r, disabled: f, variant: y, error: h }, E = _4(S);
  return I.jsxs(M.Fragment, { children: [I.jsx(b4, { ownerState: S, className: qt(E.select, u), disabled: f, ref: v || a, ...b }), r.multiple ? null : I.jsx(x4, { as: g, ownerState: S, className: E.icon })] });
});
var jy;
const w4 = Ot("fieldset", { name: "MuiNotchedOutlined", shouldForwardProp: Co })({ textAlign: "left", position: "absolute", bottom: 0, right: 0, top: -5, left: 0, margin: 0, padding: "0 8px", pointerEvents: "none", borderRadius: "inherit", borderStyle: "solid", borderWidth: 1, overflow: "hidden", minWidth: "0%" }), C4 = Ot("legend", { name: "MuiNotchedOutlined", shouldForwardProp: Co })(Ee(({ theme: n2 }) => ({ float: "unset", width: "auto", overflow: "hidden", variants: [{ props: ({ ownerState: r }) => !r.withLabel, style: { padding: 0, lineHeight: "11px", transition: n2.transitions.create("width", { duration: 150, easing: n2.transitions.easing.easeOut }) } }, { props: ({ ownerState: r }) => r.withLabel, style: { display: "block", padding: 0, height: 11, fontSize: "0.75em", visibility: "hidden", maxWidth: 0.01, transition: n2.transitions.create("max-width", { duration: 50, easing: n2.transitions.easing.easeOut }), whiteSpace: "nowrap", "& > span": { paddingLeft: 5, paddingRight: 5, display: "inline-block", opacity: 0, visibility: "visible" } } }, { props: ({ ownerState: r }) => r.withLabel && r.notched, style: { maxWidth: "100%", transition: n2.transitions.create("max-width", { duration: 100, easing: n2.transitions.easing.easeOut, delay: 50 }) } }] })));
function T4(n2) {
  const { children: r, classes: a, className: u, label: f, notched: h, ...g } = n2, v = f != null && f !== "", y = { ...n2, notched: h, withLabel: v };
  return I.jsx(w4, { "aria-hidden": true, className: u, ownerState: y, ...g, children: I.jsx(C4, { ownerState: y, children: v ? I.jsx("span", { children: f }) : jy || (jy = I.jsx("span", { className: "notranslate", "aria-hidden": true, children: "\u200B" })) }) });
}
const E4 = (n2) => {
  const { classes: r } = n2, u = Le({ root: ["root"], notchedOutline: ["notchedOutline"], input: ["input"] }, bC, r);
  return { ...r, ...u };
}, M4 = Ot(qf, { shouldForwardProp: (n2) => Co(n2) || n2 === "classes", name: "MuiOutlinedInput", slot: "Root", overridesResolver: Vf })(Ee(({ theme: n2 }) => {
  const r = n2.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return { position: "relative", borderRadius: (n2.vars || n2).shape.borderRadius, [`&:hover .${eo.notchedOutline}`]: { borderColor: (n2.vars || n2).palette.text.primary }, "@media (hover: none)": { [`&:hover .${eo.notchedOutline}`]: { borderColor: n2.vars ? n2.alpha(n2.vars.palette.common.onBackground, 0.23) : r } }, [`&.${eo.focused} .${eo.notchedOutline}`]: { borderWidth: 2 }, variants: [...Object.entries(n2.palette).filter(xi()).map(([a]) => ({ props: { color: a }, style: { [`&.${eo.focused} .${eo.notchedOutline}`]: { borderColor: (n2.vars || n2).palette[a].main } } })), { props: {}, style: { [`&.${eo.error} .${eo.notchedOutline}`]: { borderColor: (n2.vars || n2).palette.error.main }, [`&.${eo.disabled} .${eo.notchedOutline}`]: { borderColor: (n2.vars || n2).palette.action.disabled } } }, { props: ({ ownerState: a }) => a.startAdornment, style: { paddingLeft: 14 } }, { props: ({ ownerState: a }) => a.endAdornment, style: { paddingRight: 14 } }, { props: ({ ownerState: a }) => a.multiline, style: { padding: "16.5px 14px" } }, { props: ({ ownerState: a, size: u }) => a.multiline && u === "small", style: { padding: "8.5px 14px" } }] };
})), O4 = Ot(T4, { name: "MuiOutlinedInput", slot: "NotchedOutline" })(Ee(({ theme: n2 }) => {
  const r = n2.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return { borderColor: n2.vars ? n2.alpha(n2.vars.palette.common.onBackground, 0.23) : r };
})), A4 = Ot(Yf, { name: "MuiOutlinedInput", slot: "Input", overridesResolver: Gf })(Ee(({ theme: n2 }) => ({ padding: "16.5px 14px", ...!n2.vars && { "&:-webkit-autofill": { WebkitBoxShadow: n2.palette.mode === "light" ? null : "0 0 0 100px #266798 inset", WebkitTextFillColor: n2.palette.mode === "light" ? null : "#fff", caretColor: n2.palette.mode === "light" ? null : "#fff", borderRadius: "inherit" } }, ...n2.vars && { "&:-webkit-autofill": { borderRadius: "inherit" }, [n2.getColorSchemeSelector("dark")]: { "&:-webkit-autofill": { WebkitBoxShadow: "0 0 0 100px #266798 inset", WebkitTextFillColor: "#fff", caretColor: "#fff" } } }, variants: [{ props: { size: "small" }, style: { padding: "8.5px 14px" } }, { props: ({ ownerState: r }) => r.multiline, style: { padding: 0 } }, { props: ({ ownerState: r }) => r.startAdornment, style: { paddingLeft: 0 } }, { props: ({ ownerState: r }) => r.endAdornment, style: { paddingRight: 0 } }] }))), Sm = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiOutlinedInput" }), { components: f = {}, fullWidth: h = false, inputComponent: g = "input", label: v, multiline: y = false, notched: b, slots: S = {}, slotProps: E = {}, type: R = "text", ...k } = u, A = E4(u), O = il(), $ = nl({ props: u, muiFormControl: O, states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"] }), F = { ...u, color: $.color || "primary", disabled: $.disabled, error: $.error, focused: $.focused, formControl: O, fullWidth: h, hiddenLabel: $.hiddenLabel, multiline: y, size: $.size, type: R }, V = S.root ?? f.Root ?? M4, D = S.input ?? f.Input ?? A4, [N, P] = yn("notchedOutline", { elementType: O4, className: A.notchedOutline, shouldForwardComponentProp: true, ownerState: F, externalForwardedProps: { slots: S, slotProps: E }, additionalProps: { label: v != null && v !== "" && $.required ? I.jsxs(M.Fragment, { children: [v, "\u2009", "*"] }) : v } });
  return I.jsx(ym, { slots: { root: V, input: D }, slotProps: E, renderSuffix: (U) => I.jsx(N, { ...P, notched: typeof b < "u" ? b : !!(U.startAdornment || U.filled || U.focused) }), fullWidth: h, inputComponent: g, multiline: y, ref: a, type: R, ...k, classes: { ...A, notchedOutline: null } });
});
Sm.muiName = "Input";
function y_(n2) {
  return Re("MuiSelect", n2);
}
const su = ke("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var Hy;
const R4 = Ot(g_, { name: "MuiSelect", slot: "Select", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [{ [`&.${su.select}`]: r.select }, { [`&.${su.select}`]: r[a.variant] }, { [`&.${su.error}`]: r.error }, { [`&.${su.multiple}`]: r.multiple }];
} })({ [`&.${su.select}`]: { height: "auto", minHeight: "1.4375em", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" } }), k4 = Ot(v_, { name: "MuiSelect", slot: "Icon", overridesResolver: (n2, r) => {
  const { ownerState: a } = n2;
  return [r.icon, a.variant && r[`icon${wt(a.variant)}`], a.open && r.iconOpen];
} })({}), L4 = Ot("input", { shouldForwardProp: (n2) => $1(n2) && n2 !== "classes", name: "MuiSelect", slot: "NativeInput" })({ bottom: 0, left: 0, position: "absolute", opacity: 0, pointerEvents: "none", width: "100%", boxSizing: "border-box" });
function Uy(n2, r) {
  return typeof r == "object" && r !== null ? n2 === r : String(n2) === String(r);
}
function z4(n2) {
  return n2 == null || typeof n2 == "string" && !n2.trim();
}
const P4 = (n2) => {
  const { classes: r, variant: a, disabled: u, multiple: f, open: h, error: g } = n2, v = { select: ["select", a, u && "disabled", f && "multiple", g && "error"], icon: ["icon", `icon${wt(a)}`, h && "iconOpen", u && "disabled"], nativeInput: ["nativeInput"] };
  return Le(v, y_, r);
}, B4 = M.forwardRef(function(r, a) {
  var _a2, _b2, _c, _d;
  const { "aria-describedby": u, "aria-label": f, autoFocus: h, autoWidth: g, children: v, className: y, defaultOpen: b, defaultValue: S, disabled: E, displayEmpty: R, error: k = false, IconComponent: A, inputRef: O, labelId: $, MenuProps: F = {}, multiple: V, name: D, onBlur: N, onChange: P, onClose: U, onFocus: K, onOpen: J, open: it, readOnly: ut, renderValue: ot, required: w, SelectDisplayProps: st = {}, tabIndex: W, type: et, value: B, variant: tt = "standard", ...rt } = r, [gt, z] = pu({ controlled: B, default: S, name: "Select" }), [q, ft] = pu({ controlled: it, default: b, name: "Select" }), dt = M.useRef(null), bt = M.useRef(null), [_t, ct] = M.useState(null), { current: At } = M.useRef(it != null), [Lt, $t] = M.useState(), Rt = Fn(a, O), Ut = M.useCallback((Pt) => {
    bt.current = Pt, Pt && ct(Pt);
  }, []), Wt = _t == null ? void 0 : _t.parentNode;
  M.useImperativeHandle(Rt, () => ({ focus: () => {
    bt.current.focus();
  }, node: dt.current, value: gt }), [gt]), M.useEffect(() => {
    b && q && _t && !At && ($t(g ? null : Wt.clientWidth), bt.current.focus());
  }, [_t, g]), M.useEffect(() => {
    h && bt.current.focus();
  }, [h]), M.useEffect(() => {
    if (!$) return;
    const Pt = Ui(bt.current).getElementById($);
    if (Pt) {
      const ne = () => {
        getSelection().isCollapsed && bt.current.focus();
      };
      return Pt.addEventListener("click", ne), () => {
        Pt.removeEventListener("click", ne);
      };
    }
  }, [$]);
  const te = (Pt, ne) => {
    Pt ? J && J(ne) : U && U(ne), At || ($t(g ? null : Wt.clientWidth), ft(Pt));
  }, Zt = (Pt) => {
    Pt.button === 0 && (Pt.preventDefault(), bt.current.focus(), te(true, Pt));
  }, de = (Pt) => {
    te(false, Pt);
  }, ie = M.Children.toArray(v), ue = (Pt) => {
    const ne = ie.find((re) => re.props.value === Pt.target.value);
    ne !== void 0 && (z(ne.props.value), P && P(Pt, ne));
  }, Ct = (Pt) => (ne) => {
    let re;
    if (ne.currentTarget.hasAttribute("tabindex")) {
      if (V) {
        re = Array.isArray(gt) ? gt.slice() : [];
        const Wn = gt.indexOf(Pt.props.value);
        Wn === -1 ? re.push(Pt.props.value) : re.splice(Wn, 1);
      } else re = Pt.props.value;
      if (Pt.props.onClick && Pt.props.onClick(ne), gt !== re && (z(re), P)) {
        const Wn = ne.nativeEvent || ne, lo = new Wn.constructor(Wn.type, Wn);
        Object.defineProperty(lo, "target", { writable: true, value: { value: re, name: D } }), P(lo, Pt);
      }
      V || te(false, ne);
    }
  }, _e = (Pt) => {
    ut || [" ", "ArrowUp", "ArrowDown", "Enter"].includes(Pt.key) && (Pt.preventDefault(), te(true, Pt));
  }, Bt = _t !== null && q, Jt = (Pt) => {
    !Bt && N && (Object.defineProperty(Pt, "target", { writable: true, value: { value: gt, name: D } }), N(Pt));
  };
  delete rt["aria-invalid"];
  let Mt, tn;
  const be = [];
  let Ze = false;
  (Ef({ value: gt }) || R) && (ot ? Mt = ot(gt) : Ze = true);
  const ce = ie.map((Pt) => {
    if (!M.isValidElement(Pt)) return null;
    let ne;
    if (V) {
      if (!Array.isArray(gt)) throw new Error(Sr(2));
      ne = gt.some((re) => Uy(re, Pt.props.value)), ne && Ze && be.push(Pt.props.children);
    } else ne = Uy(gt, Pt.props.value), ne && Ze && (tn = Pt.props.children);
    return M.cloneElement(Pt, { "aria-selected": ne ? "true" : "false", onClick: Ct(Pt), onKeyUp: (re) => {
      re.key === " " && re.preventDefault(), Pt.props.onKeyUp && Pt.props.onKeyUp(re);
    }, role: "option", selected: ne, value: void 0, "data-value": Pt.props.value });
  });
  Ze && (V ? be.length === 0 ? Mt = null : Mt = be.reduce((Pt, ne, re) => (Pt.push(ne), re < be.length - 1 && Pt.push(", "), Pt), []) : Mt = tn);
  let Vt = Lt;
  !g && At && _t && (Vt = Wt.clientWidth);
  let oe;
  typeof W < "u" ? oe = W : oe = E ? null : 0;
  const he = st.id || (D ? `mui-component-select-${D}` : void 0), xe = { ...r, variant: tt, value: gt, open: Bt, error: k }, Ht = P4(xe), fn = { ...F.PaperProps, ...typeof ((_a2 = F.slotProps) == null ? void 0 : _a2.paper) == "function" ? F.slotProps.paper(xe) : (_b2 = F.slotProps) == null ? void 0 : _b2.paper }, Bn = { ...F.MenuListProps, ...typeof ((_c = F.slotProps) == null ? void 0 : _c.list) == "function" ? F.slotProps.list(xe) : (_d = F.slotProps) == null ? void 0 : _d.list }, rn = el();
  return I.jsxs(M.Fragment, { children: [I.jsx(R4, { as: "div", ref: Ut, tabIndex: oe, role: "combobox", "aria-controls": Bt ? rn : void 0, "aria-disabled": E ? "true" : void 0, "aria-expanded": Bt ? "true" : "false", "aria-haspopup": "listbox", "aria-label": f, "aria-labelledby": [$, he].filter(Boolean).join(" ") || void 0, "aria-describedby": u, "aria-required": w ? "true" : void 0, "aria-invalid": k ? "true" : void 0, onKeyDown: _e, onMouseDown: E || ut ? null : Zt, onBlur: Jt, onFocus: K, ...st, ownerState: xe, className: qt(st.className, Ht.select, y), id: he, children: z4(Mt) ? Hy || (Hy = I.jsx("span", { className: "notranslate", "aria-hidden": true, children: "\u200B" })) : Mt }), I.jsx(L4, { "aria-invalid": k, value: Array.isArray(gt) ? gt.join(",") : gt, name: D, ref: dt, "aria-hidden": true, onChange: ue, tabIndex: -1, disabled: E, className: Ht.nativeInput, autoFocus: h, required: w, ...rt, ownerState: xe }), I.jsx(k4, { as: A, className: Ht.icon, ownerState: xe }), I.jsx(v4, { id: `menu-${D || ""}`, anchorEl: Wt, open: Bt, onClose: de, anchorOrigin: { vertical: "bottom", horizontal: "center" }, transformOrigin: { vertical: "top", horizontal: "center" }, ...F, slotProps: { ...F.slotProps, list: { "aria-labelledby": $, role: "listbox", "aria-multiselectable": V ? "true" : void 0, disableListWrap: true, id: rn, ...Bn }, paper: { ...fn, style: { minWidth: Vt, ...fn != null ? fn.style : null } } }, children: ce })] });
}), D4 = (n2) => {
  const { classes: r } = n2, u = Le({ root: ["root"] }, y_, r);
  return { ...r, ...u };
}, wm = { name: "MuiSelect", slot: "Root", shouldForwardProp: (n2) => Co(n2) && n2 !== "variant" }, N4 = Ot(bm, wm)(""), $4 = Ot(Sm, wm)(""), I4 = Ot(_m, wm)(""), __ = M.forwardRef(function(r, a) {
  const u = ze({ name: "MuiSelect", props: r }), { autoWidth: f = false, children: h, classes: g = {}, className: v, defaultOpen: y = false, displayEmpty: b = false, IconComponent: S = c_, id: E, input: R, inputProps: k, label: A, labelId: O, MenuProps: $, multiple: F = false, native: V = false, onClose: D, onOpen: N, open: P, renderValue: U, SelectDisplayProps: K, variant: J = "outlined", ...it } = u, ut = V ? S4 : B4, ot = il(), w = nl({ props: u, muiFormControl: ot, states: ["variant", "error"] }), st = w.variant || J, W = { ...u, variant: st, classes: g }, et = D4(W), { root: B, ...tt } = et, rt = R || { standard: I.jsx(N4, { ownerState: W }), outlined: I.jsx($4, { label: A, ownerState: W }), filled: I.jsx(I4, { ownerState: W }) }[st], gt = Fn(a, Du(rt));
  return I.jsx(M.Fragment, { children: M.cloneElement(rt, { inputComponent: ut, inputProps: { children: h, error: w.error, IconComponent: S, variant: st, type: void 0, multiple: F, ...V ? { id: E } : { autoWidth: f, defaultOpen: y, displayEmpty: b, labelId: O, MenuProps: $, onClose: D, onOpen: N, open: P, renderValue: U, SelectDisplayProps: { id: E, ...K } }, ...k, classes: k ? Pn(tt, k.classes) : tt, ...R ? R.props.inputProps : {} }, ...(F && V || b) && st === "outlined" ? { notched: true } : {}, ref: gt, className: qt(rt.props.className, v, et.root), ...!R && { variant: st }, ...it }) });
});
__.muiName = "Select";
const j4 = ZS({ createStyledComponent: Ot("div", { name: "MuiStack", slot: "Root" }), useThemeProps: (n2) => ze({ props: n2, name: "MuiStack" }) });
function H4(n2) {
  return Re("MuiTextField", n2);
}
ke("MuiTextField", ["root"]);
const U4 = { standard: bm, filled: _m, outlined: Sm }, F4 = (n2) => {
  const { classes: r } = n2;
  return Le({ root: ["root"] }, H4, r);
}, Z4 = Ot(RT, { name: "MuiTextField", slot: "Root" })({}), V4 = M.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiTextField" }), { autoComplete: f, autoFocus: h = false, children: g, className: v, color: y = "primary", defaultValue: b, disabled: S = false, error: E = false, FormHelperTextProps: R, fullWidth: k = false, helperText: A, id: O, InputLabelProps: $, inputProps: F, InputProps: V, inputRef: D, label: N, maxRows: P, minRows: U, multiline: K = false, name: J, onBlur: it, onChange: ut, onFocus: ot, placeholder: w, required: st = false, rows: W, select: et = false, SelectProps: B, slots: tt = {}, slotProps: rt = {}, type: gt, value: z, variant: q = "outlined", ...ft } = u, dt = { ...u, autoFocus: h, color: y, disabled: S, error: E, fullWidth: k, multiline: K, required: st, select: et, variant: q }, bt = F4(dt), _t = el(O), ct = A && _t ? `${_t}-helper-text` : void 0, At = N && _t ? `${_t}-label` : void 0, Lt = U4[q], $t = { slots: tt, slotProps: { input: V, inputLabel: $, htmlInput: F, formHelperText: R, select: B, ...rt } }, Rt = {}, Ut = $t.slotProps.inputLabel;
  q === "outlined" && (Ut && typeof Ut.shrink < "u" && (Rt.notched = Ut.shrink), Rt.label = N), et && ((!B || !B.native) && (Rt.id = void 0), Rt["aria-describedby"] = void 0);
  const [Wt, te] = yn("root", { elementType: Z4, shouldForwardComponentProp: true, externalForwardedProps: { ...$t, ...ft }, ownerState: dt, className: qt(bt.root, v), ref: a, additionalProps: { disabled: S, error: E, fullWidth: k, required: st, color: y, variant: q } }), [Zt, de] = yn("input", { elementType: Lt, externalForwardedProps: $t, additionalProps: Rt, ownerState: dt }), [ie, ue] = yn("inputLabel", { elementType: qT, externalForwardedProps: $t, ownerState: dt }), [Ct, _e] = yn("htmlInput", { elementType: "input", externalForwardedProps: $t, ownerState: dt }), [Bt, Jt] = yn("formHelperText", { elementType: PT, externalForwardedProps: $t, ownerState: dt }), [Mt, tn] = yn("select", { elementType: __, externalForwardedProps: $t, ownerState: dt }), be = I.jsx(Zt, { "aria-describedby": ct, autoComplete: f, autoFocus: h, defaultValue: b, fullWidth: k, multiline: K, name: J, rows: W, maxRows: P, minRows: U, type: gt, value: z, id: _t, inputRef: D, onBlur: it, onChange: ut, onFocus: ot, placeholder: w, inputProps: _e, slots: { input: tt.htmlInput ? Ct : void 0 }, ...de });
  return I.jsxs(Wt, { ...te, children: [N != null && N !== "" && I.jsx(ie, { htmlFor: _t, id: At, ...ue, children: N }), et ? I.jsx(Mt, { "aria-describedby": ct, id: _t, labelId: At, value: z, input: be, ...tn, children: g }) : be, A && I.jsx(Bt, { id: ct, ...Jt, children: A })] });
}), Fy = (n2) => {
  let r;
  const a = /* @__PURE__ */ new Set(), u = (b, S) => {
    const E = typeof b == "function" ? b(r) : b;
    if (!Object.is(E, r)) {
      const R = r;
      r = S ?? (typeof E != "object" || E === null) ? E : Object.assign({}, r, E), a.forEach((k) => k(r, R));
    }
  }, f = () => r, v = { setState: u, getState: f, getInitialState: () => y, subscribe: (b) => (a.add(b), () => a.delete(b)) }, y = r = n2(u, f, v);
  return v;
}, G4 = (n2) => n2 ? Fy(n2) : Fy, q4 = (n2) => n2;
function Y4(n2, r = q4) {
  const a = Xn.useSyncExternalStore(n2.subscribe, () => r(n2.getState()), () => r(n2.getInitialState()));
  return Xn.useDebugValue(a), a;
}
const Zy = (n2) => {
  const r = G4(n2), a = (u) => Y4(r, u);
  return Object.assign(a, r), a;
}, K4 = (n2) => n2 ? Zy(n2) : Zy, X4 = "http://192.168.1.154:8000", Vy = X4, W4 = { "Content-Type": "application/json" };
async function Gy(n2, { method: r = "GET", headers: a = {}, body: u, signal: f } = {}) {
  console.log("inside api", Vy, n2);
  const h = await fetch(`${Vy}${n2}`, { method: r, headers: { ...W4, ...a }, body: u ? JSON.stringify(u) : void 0, signal: f, credentials: "omit" });
  if (!h.ok) {
    const v = await h.text().catch(() => h.statusText);
    throw new Error(`HTTP ${h.status}: ${v}`);
  }
  const g = await h.text();
  try {
    return JSON.parse(g);
  } catch {
    return g;
  }
}
const b_ = { get: (n2, r) => Gy(n2, { ...r, method: "GET" }), post: (n2, r, a) => Gy(n2, { ...a, method: "POST", body: r }) };
function Q4({ origin: n2, destination: r, params: a }) {
  return b_.post("/route", { origin: n2, destination: r, params: a });
}
function J4({}) {
  return b_.get("/bbox", {});
}
let cn = K4((n2, r) => ({ prevSession: null, selectedProfile: null, selectedProfileId: 0, mainColor: "#000000", bbox: null, page: "profiles", markers: [], setNextColor: () => {
  const a = r().colors, u = r().profile, f = Object.keys(a), g = (f.indexOf(u) + 1) % f.length, v = f[g], y = a[v];
  n2({ profile: v, mainColor: y });
}, setMarkers: (a) => {
  const u = r().markers;
  n2({ markers: u.length < 2 ? [...u, a] : [a] });
}, setProfile: (a) => n2(() => ({ selectedProfile: yf[a], selectedProfileId: a, mainColor: yf[a].color })), calcRoute: async (a, u) => {
  const { markers: f, selectedProfile: h } = r();
  if (f.length < 2) return null;
  const g = await Q4({ origin: a, destination: u, params: h.params });
  n2({ route: g });
} }));
const tE = Er(I.jsx("path", { d: "M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z" })), eE = Er(I.jsx("path", { d: "M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" }));
function lp(n2, r) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="${r}"
         width="100%"
         height="100%"
         preserveAspectRatio="xMidYMid meet">
      ${n2}
    </svg>
  `;
}
function up(n2) {
  const a = new DOMParser().parseFromString(n2, "image/svg+xml"), f = a.querySelector("svg").getAttribute("viewBox") || "0 0 1000 1000", h = a.getElementById("BASE"), g = a.getElementById("BACK"), v = a.getElementById("FRONT");
  return { viewBox: f, base: h ? h.innerHTML : "", back: g ? g.innerHTML : "", front: v ? v.innerHTML : "" };
}
function cp(n2, r) {
  if (!n2) return n2;
  let a = n2;
  return a = a.replace(/stroke="[^"]*"/g, `stroke="${r}"`), a;
}
function nE({ baseSvg: n2, profilesSvg: r, viewBox: a, index: u, color: f }) {
  return I.jsx(I.Fragment, { children: n2 && r && I.jsxs(ji, { className: "carousel-container", sx: {}, children: [I.jsx(ji, { className: "costume-layer", sx: { zIndex: 1 }, dangerouslySetInnerHTML: { __html: lp(cp(n2, f), a) } }), r.map((h, g) => {
    const v = g === u ? "0%" : g < u ? "-100%" : "100%";
    return I.jsxs(M.Fragment, { children: [I.jsx(ji, { className: "costume-layer", sx: { zIndex: 0, transform: `translateX(${v})`, opacity: g === u ? 1 : 0 }, dangerouslySetInnerHTML: { __html: lp(cp(h.back, r[g].color), a) } }), I.jsx(ji, { className: "costume-layer", sx: { zIndex: 2, transform: `translateX(${v})`, opacity: g === u ? 1 : 0 }, dangerouslySetInnerHTML: { __html: lp(cp(h.front, r[g].color), a) } })] }, h.id);
  })] }) });
}
function iE() {
  const n2 = cn((v) => v.selectedProfileId), r = cn((v) => v.setProfile), a = cn((v) => v.mainColor);
  qo();
  const u = M.useMemo(() => {
    const v = up(I1);
    return { base: v.base, viewBox: v.viewBox, costumes: yf.map((y) => ({ id: y.id, label: y.label, color: y.color, front: up(y.svg).front, back: up(y.svg).back })) };
  }, []);
  M.useEffect(() => {
    cn.setState({ mainColor: u.costumes[n2].color, selectedProfile: yf[n2] });
  }, []);
  const f = u.costumes.length, h = () => {
    const v = n2 === 0 ? f - 1 : n2 - 1;
    r(u.costumes[v].id);
  }, g = () => {
    const v = n2 === f - 1 ? 0 : n2 + 1;
    r(u.costumes[v].id);
  };
  return I.jsxs(ji, { sx: { width: "100%", height: "100%", position: "relative", flexGrow: 1 }, children: [I.jsx(Cr, { onClick: h, sx: { position: "absolute", top: "50%", left: 0, transform: "translateY(-50%)", zIndex: 10 }, children: I.jsx(tE, { fontSize: "small" }) }), I.jsx(Cr, { onClick: g, sx: { position: "absolute", top: "50%", right: 0, transform: "translateY(-50%)", zIndex: 10 }, children: I.jsx(eE, { fontSize: "small" }) }), I.jsx(nE, { baseSvg: u.base, profilesSvg: u.costumes, viewBox: u.viewBox, index: n2, color: a })] });
}
function Mu({ focus: n2 = false, outlined: r = true, ...a }) {
  const u = qo(), f = u.noBlurShadows;
  return I.jsx(ji, { ...a, sx: { width: "100%", borderRadius: u.brdRad, border: r ? `solid 2px ${u.palette.primary.main}` : "none", boxShadow: n2 ? f.active : f.none, transition: f.transition, color: u.palette.primary.main, backgroundColor: r ? u.palette.secondary.main : "transparent", ...a.sx }, children: a.children });
}
function qy({ unit: n2 = 1, children: r, ...a }) {
  const u = qo();
  return I.jsx(ji, { sx: { width: "100%", marginY: u.grid.spacing, height: `${u.grid.units.h * n2}px`, ...a.sx }, children: r });
}
function x_({ label: n2, ...r }) {
  const a = qo();
  return I.jsx(QC, { ...r, sx: { width: "50%", borderRadius: a.brdRad, border: "none", backgroundColor: a.palette.primary.main, color: a.palette.secondary.main }, children: n2 });
}
function oE({ theme: n2 }) {
  return cn((r) => r.selectedProfile), I.jsxs(I.Fragment, { children: [I.jsx(qy, { sx: { display: "flex", justifyContent: "center" }, children: I.jsx(Mu, { focus: true, sx: { display: "flex", justifyContent: "center", alignItems: "center", width: "75%", height: `${n2.grid.units.h}px` }, children: I.jsx(Ff, { as: "h1", children: "Pedone" }) }) }), I.jsx(ji, { sx: { flexGrow: 1, marginY: n2.grid.spacing }, children: I.jsx(iE, {}) }), I.jsx(Mu, { focus: true, sx: { overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", marginY: n2.grid.spacing, height: `${n2.grid.units.h * 3}px` } }), I.jsx(qy, { sx: { display: "flex", justifyContent: "center" }, children: I.jsx(x_, { label: "Conferma", onClick: () => cn.setState({ page: "map" }) }) })] });
}
function Yy({ theme: n2, label: r = "Da", placeholder: a = "Seleziona una Destinazione" }) {
  const u = M.useRef(null), { addresses: f, setMarkers: h } = cn(), [g, v] = M.useState(null), [y, b] = M.useState(""), [S, E] = M.useState(false), R = () => {
    u.current.blur();
  }, k = M.useMemo(() => f.map((O, $) => ({ label: `${O.properties["nome strada"]}, ${O.properties.numero}`, value: O.geometry.coordinates })), [f]), A = X1({ limit: 10, ignoreCase: true, trim: true });
  return M.useEffect(() => {
    S || R();
  }, [S]), I.jsxs(Mu, { outlined: false, sx: { height: `${n2.grid.units.h}px`, marginY: n2.grid.spacing, display: "flex", flexDirection: "row", alignItems: "center" }, children: [I.jsx(Cr, { disabled: true, children: I.jsx(Ff, { children: r }) }), I.jsx(Mu, { sx: { height: `${n2.grid.units.h}px`, marginLeft: n2.grid.spacing, borderRadius: n2.brdRad, display: "flex", alignItems: "center", paddingLeft: n2.offRad }, children: I.jsx(BC, { value: g, disableClearable: true, onChange: (O, $) => {
    v($), h({ coordinates: $.value.reverse(), key: Date.now() }), E(false);
  }, inputValue: y, onInputChange: (O, $) => {
    b($), E($.length > 0);
  }, options: k, filterOptions: A, getOptionLabel: (O) => (O == null ? void 0 : O.label) || "", open: S, sx: { width: "100%", "& .MuiOutlinedInput-root": { paddingY: 0, paddingX: 0.5, height: "100%", color: n2.palette.primary.main }, "& .MuiInputBase-input": { padding: 0, fontSize: "0.9rem" }, "& .MuiOutlinedInput-notchedOutline": { border: "none" }, "& .MuiAutocomplete-endAdornment": { display: "none" } }, renderInput: (O) => I.jsx(V4, { inputRef: u, ...O, placeholder: a, variant: "outlined" }) }) })] });
}
function rE(n2, r) {
  const a = M.useRef(r);
  M.useEffect(function() {
    r !== a.current && n2.attributionControl != null && (a.current != null && n2.attributionControl.removeAttribution(a.current), r != null && n2.attributionControl.addAttribution(r)), a.current = r;
  }, [n2, r]);
}
function aE(n2, r, a) {
  r.center !== a.center && n2.setLatLng(r.center), r.radius != null && r.radius !== a.radius && n2.setRadius(r.radius);
}
const sE = 1;
function lE(n2) {
  return Object.freeze({ __version: sE, map: n2 });
}
function Cm(n2, r) {
  return Object.freeze({ ...n2, ...r });
}
const Kf = M.createContext(null);
function Xf() {
  const n2 = M.use(Kf);
  if (n2 == null) throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");
  return n2;
}
function uE(n2) {
  function r(a, u) {
    const { instance: f, context: h } = n2(a).current;
    M.useImperativeHandle(u, () => f);
    const { children: g } = a;
    return g == null ? null : Xn.createElement(Kf, { value: h }, g);
  }
  return M.forwardRef(r);
}
function cE(n2) {
  function r(a, u) {
    const { instance: f } = n2(a).current;
    return M.useImperativeHandle(u, () => f), null;
  }
  return M.forwardRef(r);
}
function S_(n2, r) {
  const a = M.useRef(void 0);
  M.useEffect(function() {
    return r != null && n2.instance.on(r), a.current = r, function() {
      a.current != null && n2.instance.off(a.current), a.current = null;
    };
  }, [n2, r]);
}
function Tm(n2, r) {
  const a = n2.pane ?? r.pane;
  return a ? { ...n2, pane: a } : n2;
}
var du = { exports: {} };
/* @preserve
* Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
* (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
*/
var fE = du.exports, Ky;
function dE() {
  return Ky || (Ky = 1, function(n2, r) {
    (function(a, u) {
      u(r);
    })(fE, function(a) {
      var u = "1.9.4";
      function f(i) {
        var s, c, m, _;
        for (c = 1, m = arguments.length; c < m; c++) {
          _ = arguments[c];
          for (s in _) i[s] = _[s];
        }
        return i;
      }
      var h = Object.create || /* @__PURE__ */ function() {
        function i() {
        }
        return function(s) {
          return i.prototype = s, new i();
        };
      }();
      function g(i, s) {
        var c = Array.prototype.slice;
        if (i.bind) return i.bind.apply(i, c.call(arguments, 1));
        var m = c.call(arguments, 2);
        return function() {
          return i.apply(s, m.length ? m.concat(c.call(arguments)) : arguments);
        };
      }
      var v = 0;
      function y(i) {
        return "_leaflet_id" in i || (i._leaflet_id = ++v), i._leaflet_id;
      }
      function b(i, s, c) {
        var m, _, C, j;
        return j = function() {
          m = false, _ && (C.apply(c, _), _ = false);
        }, C = function() {
          m ? _ = arguments : (i.apply(c, arguments), setTimeout(j, s), m = true);
        }, C;
      }
      function S(i, s, c) {
        var m = s[1], _ = s[0], C = m - _;
        return i === m && c ? i : ((i - _) % C + C) % C + _;
      }
      function E() {
        return false;
      }
      function R(i, s) {
        if (s === false) return i;
        var c = Math.pow(10, s === void 0 ? 6 : s);
        return Math.round(i * c) / c;
      }
      function k(i) {
        return i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, "");
      }
      function A(i) {
        return k(i).split(/\s+/);
      }
      function O(i, s) {
        Object.prototype.hasOwnProperty.call(i, "options") || (i.options = i.options ? h(i.options) : {});
        for (var c in s) i.options[c] = s[c];
        return i.options;
      }
      function $(i, s, c) {
        var m = [];
        for (var _ in i) m.push(encodeURIComponent(c ? _.toUpperCase() : _) + "=" + encodeURIComponent(i[_]));
        return (!s || s.indexOf("?") === -1 ? "?" : "&") + m.join("&");
      }
      var F = /\{ *([\w_ -]+) *\}/g;
      function V(i, s) {
        return i.replace(F, function(c, m) {
          var _ = s[m];
          if (_ === void 0) throw new Error("No value provided for variable " + c);
          return typeof _ == "function" && (_ = _(s)), _;
        });
      }
      var D = Array.isArray || function(i) {
        return Object.prototype.toString.call(i) === "[object Array]";
      };
      function N(i, s) {
        for (var c = 0; c < i.length; c++) if (i[c] === s) return c;
        return -1;
      }
      var P = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function U(i) {
        return window["webkit" + i] || window["moz" + i] || window["ms" + i];
      }
      var K = 0;
      function J(i) {
        var s = +/* @__PURE__ */ new Date(), c = Math.max(0, 16 - (s - K));
        return K = s + c, window.setTimeout(i, c);
      }
      var it = window.requestAnimationFrame || U("RequestAnimationFrame") || J, ut = window.cancelAnimationFrame || U("CancelAnimationFrame") || U("CancelRequestAnimationFrame") || function(i) {
        window.clearTimeout(i);
      };
      function ot(i, s, c) {
        if (c && it === J) i.call(s);
        else return it.call(window, g(i, s));
      }
      function w(i) {
        i && ut.call(window, i);
      }
      var st = { __proto__: null, extend: f, create: h, bind: g, get lastId() {
        return v;
      }, stamp: y, throttle: b, wrapNum: S, falseFn: E, formatNum: R, trim: k, splitWords: A, setOptions: O, getParamString: $, template: V, isArray: D, indexOf: N, emptyImageUrl: P, requestFn: it, cancelFn: ut, requestAnimFrame: ot, cancelAnimFrame: w };
      function W() {
      }
      W.extend = function(i) {
        var s = function() {
          O(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, c = s.__super__ = this.prototype, m = h(c);
        m.constructor = s, s.prototype = m;
        for (var _ in this) Object.prototype.hasOwnProperty.call(this, _) && _ !== "prototype" && _ !== "__super__" && (s[_] = this[_]);
        return i.statics && f(s, i.statics), i.includes && (et(i.includes), f.apply(null, [m].concat(i.includes))), f(m, i), delete m.statics, delete m.includes, m.options && (m.options = c.options ? h(c.options) : {}, f(m.options, i.options)), m._initHooks = [], m.callInitHooks = function() {
          if (!this._initHooksCalled) {
            c.callInitHooks && c.callInitHooks.call(this), this._initHooksCalled = true;
            for (var C = 0, j = m._initHooks.length; C < j; C++) m._initHooks[C].call(this);
          }
        }, s;
      }, W.include = function(i) {
        var s = this.prototype.options;
        return f(this.prototype, i), i.options && (this.prototype.options = s, this.mergeOptions(i.options)), this;
      }, W.mergeOptions = function(i) {
        return f(this.prototype.options, i), this;
      }, W.addInitHook = function(i) {
        var s = Array.prototype.slice.call(arguments, 1), c = typeof i == "function" ? i : function() {
          this[i].apply(this, s);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(c), this;
      };
      function et(i) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          i = D(i) ? i : [i];
          for (var s = 0; s < i.length; s++) i[s] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var B = { on: function(i, s, c) {
        if (typeof i == "object") for (var m in i) this._on(m, i[m], s);
        else {
          i = A(i);
          for (var _ = 0, C = i.length; _ < C; _++) this._on(i[_], s, c);
        }
        return this;
      }, off: function(i, s, c) {
        if (!arguments.length) delete this._events;
        else if (typeof i == "object") for (var m in i) this._off(m, i[m], s);
        else {
          i = A(i);
          for (var _ = arguments.length === 1, C = 0, j = i.length; C < j; C++) _ ? this._off(i[C]) : this._off(i[C], s, c);
        }
        return this;
      }, _on: function(i, s, c, m) {
        if (typeof s != "function") {
          console.warn("wrong listener type: " + typeof s);
          return;
        }
        if (this._listens(i, s, c) === false) {
          c === this && (c = void 0);
          var _ = { fn: s, ctx: c };
          m && (_.once = true), this._events = this._events || {}, this._events[i] = this._events[i] || [], this._events[i].push(_);
        }
      }, _off: function(i, s, c) {
        var m, _, C;
        if (this._events && (m = this._events[i], !!m)) {
          if (arguments.length === 1) {
            if (this._firingCount) for (_ = 0, C = m.length; _ < C; _++) m[_].fn = E;
            delete this._events[i];
            return;
          }
          if (typeof s != "function") {
            console.warn("wrong listener type: " + typeof s);
            return;
          }
          var j = this._listens(i, s, c);
          if (j !== false) {
            var Y = m[j];
            this._firingCount && (Y.fn = E, this._events[i] = m = m.slice()), m.splice(j, 1);
          }
        }
      }, fire: function(i, s, c) {
        if (!this.listens(i, c)) return this;
        var m = f({}, s, { type: i, target: this, sourceTarget: s && s.sourceTarget || this });
        if (this._events) {
          var _ = this._events[i];
          if (_) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var C = 0, j = _.length; C < j; C++) {
              var Y = _[C], lt = Y.fn;
              Y.once && this.off(i, lt, Y.ctx), lt.call(Y.ctx || this, m);
            }
            this._firingCount--;
          }
        }
        return c && this._propagateEvent(m), this;
      }, listens: function(i, s, c, m) {
        typeof i != "string" && console.warn('"string" type argument expected');
        var _ = s;
        typeof s != "function" && (m = !!s, _ = void 0, c = void 0);
        var C = this._events && this._events[i];
        if (C && C.length && this._listens(i, _, c) !== false) return true;
        if (m) {
          for (var j in this._eventParents) if (this._eventParents[j].listens(i, s, c, m)) return true;
        }
        return false;
      }, _listens: function(i, s, c) {
        if (!this._events) return false;
        var m = this._events[i] || [];
        if (!s) return !!m.length;
        c === this && (c = void 0);
        for (var _ = 0, C = m.length; _ < C; _++) if (m[_].fn === s && m[_].ctx === c) return _;
        return false;
      }, once: function(i, s, c) {
        if (typeof i == "object") for (var m in i) this._on(m, i[m], s, true);
        else {
          i = A(i);
          for (var _ = 0, C = i.length; _ < C; _++) this._on(i[_], s, c, true);
        }
        return this;
      }, addEventParent: function(i) {
        return this._eventParents = this._eventParents || {}, this._eventParents[y(i)] = i, this;
      }, removeEventParent: function(i) {
        return this._eventParents && delete this._eventParents[y(i)], this;
      }, _propagateEvent: function(i) {
        for (var s in this._eventParents) this._eventParents[s].fire(i.type, f({ layer: i.target, propagatedFrom: i.target }, i), true);
      } };
      B.addEventListener = B.on, B.removeEventListener = B.clearAllEventListeners = B.off, B.addOneTimeEventListener = B.once, B.fireEvent = B.fire, B.hasEventListeners = B.listens;
      var tt = W.extend(B);
      function rt(i, s, c) {
        this.x = c ? Math.round(i) : i, this.y = c ? Math.round(s) : s;
      }
      var gt = Math.trunc || function(i) {
        return i > 0 ? Math.floor(i) : Math.ceil(i);
      };
      rt.prototype = { clone: function() {
        return new rt(this.x, this.y);
      }, add: function(i) {
        return this.clone()._add(z(i));
      }, _add: function(i) {
        return this.x += i.x, this.y += i.y, this;
      }, subtract: function(i) {
        return this.clone()._subtract(z(i));
      }, _subtract: function(i) {
        return this.x -= i.x, this.y -= i.y, this;
      }, divideBy: function(i) {
        return this.clone()._divideBy(i);
      }, _divideBy: function(i) {
        return this.x /= i, this.y /= i, this;
      }, multiplyBy: function(i) {
        return this.clone()._multiplyBy(i);
      }, _multiplyBy: function(i) {
        return this.x *= i, this.y *= i, this;
      }, scaleBy: function(i) {
        return new rt(this.x * i.x, this.y * i.y);
      }, unscaleBy: function(i) {
        return new rt(this.x / i.x, this.y / i.y);
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
        return this.x = gt(this.x), this.y = gt(this.y), this;
      }, distanceTo: function(i) {
        i = z(i);
        var s = i.x - this.x, c = i.y - this.y;
        return Math.sqrt(s * s + c * c);
      }, equals: function(i) {
        return i = z(i), i.x === this.x && i.y === this.y;
      }, contains: function(i) {
        return i = z(i), Math.abs(i.x) <= Math.abs(this.x) && Math.abs(i.y) <= Math.abs(this.y);
      }, toString: function() {
        return "Point(" + R(this.x) + ", " + R(this.y) + ")";
      } };
      function z(i, s, c) {
        return i instanceof rt ? i : D(i) ? new rt(i[0], i[1]) : i == null ? i : typeof i == "object" && "x" in i && "y" in i ? new rt(i.x, i.y) : new rt(i, s, c);
      }
      function q(i, s) {
        if (i) for (var c = s ? [i, s] : i, m = 0, _ = c.length; m < _; m++) this.extend(c[m]);
      }
      q.prototype = { extend: function(i) {
        var s, c;
        if (!i) return this;
        if (i instanceof rt || typeof i[0] == "number" || "x" in i) s = c = z(i);
        else if (i = ft(i), s = i.min, c = i.max, !s || !c) return this;
        return !this.min && !this.max ? (this.min = s.clone(), this.max = c.clone()) : (this.min.x = Math.min(s.x, this.min.x), this.max.x = Math.max(c.x, this.max.x), this.min.y = Math.min(s.y, this.min.y), this.max.y = Math.max(c.y, this.max.y)), this;
      }, getCenter: function(i) {
        return z((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, i);
      }, getBottomLeft: function() {
        return z(this.min.x, this.max.y);
      }, getTopRight: function() {
        return z(this.max.x, this.min.y);
      }, getTopLeft: function() {
        return this.min;
      }, getBottomRight: function() {
        return this.max;
      }, getSize: function() {
        return this.max.subtract(this.min);
      }, contains: function(i) {
        var s, c;
        return typeof i[0] == "number" || i instanceof rt ? i = z(i) : i = ft(i), i instanceof q ? (s = i.min, c = i.max) : s = c = i, s.x >= this.min.x && c.x <= this.max.x && s.y >= this.min.y && c.y <= this.max.y;
      }, intersects: function(i) {
        i = ft(i);
        var s = this.min, c = this.max, m = i.min, _ = i.max, C = _.x >= s.x && m.x <= c.x, j = _.y >= s.y && m.y <= c.y;
        return C && j;
      }, overlaps: function(i) {
        i = ft(i);
        var s = this.min, c = this.max, m = i.min, _ = i.max, C = _.x > s.x && m.x < c.x, j = _.y > s.y && m.y < c.y;
        return C && j;
      }, isValid: function() {
        return !!(this.min && this.max);
      }, pad: function(i) {
        var s = this.min, c = this.max, m = Math.abs(s.x - c.x) * i, _ = Math.abs(s.y - c.y) * i;
        return ft(z(s.x - m, s.y - _), z(c.x + m, c.y + _));
      }, equals: function(i) {
        return i ? (i = ft(i), this.min.equals(i.getTopLeft()) && this.max.equals(i.getBottomRight())) : false;
      } };
      function ft(i, s) {
        return !i || i instanceof q ? i : new q(i, s);
      }
      function dt(i, s) {
        if (i) for (var c = s ? [i, s] : i, m = 0, _ = c.length; m < _; m++) this.extend(c[m]);
      }
      dt.prototype = { extend: function(i) {
        var s = this._southWest, c = this._northEast, m, _;
        if (i instanceof _t) m = i, _ = i;
        else if (i instanceof dt) {
          if (m = i._southWest, _ = i._northEast, !m || !_) return this;
        } else return i ? this.extend(ct(i) || bt(i)) : this;
        return !s && !c ? (this._southWest = new _t(m.lat, m.lng), this._northEast = new _t(_.lat, _.lng)) : (s.lat = Math.min(m.lat, s.lat), s.lng = Math.min(m.lng, s.lng), c.lat = Math.max(_.lat, c.lat), c.lng = Math.max(_.lng, c.lng)), this;
      }, pad: function(i) {
        var s = this._southWest, c = this._northEast, m = Math.abs(s.lat - c.lat) * i, _ = Math.abs(s.lng - c.lng) * i;
        return new dt(new _t(s.lat - m, s.lng - _), new _t(c.lat + m, c.lng + _));
      }, getCenter: function() {
        return new _t((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
      }, getSouthWest: function() {
        return this._southWest;
      }, getNorthEast: function() {
        return this._northEast;
      }, getNorthWest: function() {
        return new _t(this.getNorth(), this.getWest());
      }, getSouthEast: function() {
        return new _t(this.getSouth(), this.getEast());
      }, getWest: function() {
        return this._southWest.lng;
      }, getSouth: function() {
        return this._southWest.lat;
      }, getEast: function() {
        return this._northEast.lng;
      }, getNorth: function() {
        return this._northEast.lat;
      }, contains: function(i) {
        typeof i[0] == "number" || i instanceof _t || "lat" in i ? i = ct(i) : i = bt(i);
        var s = this._southWest, c = this._northEast, m, _;
        return i instanceof dt ? (m = i.getSouthWest(), _ = i.getNorthEast()) : m = _ = i, m.lat >= s.lat && _.lat <= c.lat && m.lng >= s.lng && _.lng <= c.lng;
      }, intersects: function(i) {
        i = bt(i);
        var s = this._southWest, c = this._northEast, m = i.getSouthWest(), _ = i.getNorthEast(), C = _.lat >= s.lat && m.lat <= c.lat, j = _.lng >= s.lng && m.lng <= c.lng;
        return C && j;
      }, overlaps: function(i) {
        i = bt(i);
        var s = this._southWest, c = this._northEast, m = i.getSouthWest(), _ = i.getNorthEast(), C = _.lat > s.lat && m.lat < c.lat, j = _.lng > s.lng && m.lng < c.lng;
        return C && j;
      }, toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      }, equals: function(i, s) {
        return i ? (i = bt(i), this._southWest.equals(i.getSouthWest(), s) && this._northEast.equals(i.getNorthEast(), s)) : false;
      }, isValid: function() {
        return !!(this._southWest && this._northEast);
      } };
      function bt(i, s) {
        return i instanceof dt ? i : new dt(i, s);
      }
      function _t(i, s, c) {
        if (isNaN(i) || isNaN(s)) throw new Error("Invalid LatLng object: (" + i + ", " + s + ")");
        this.lat = +i, this.lng = +s, c !== void 0 && (this.alt = +c);
      }
      _t.prototype = { equals: function(i, s) {
        if (!i) return false;
        i = ct(i);
        var c = Math.max(Math.abs(this.lat - i.lat), Math.abs(this.lng - i.lng));
        return c <= (s === void 0 ? 1e-9 : s);
      }, toString: function(i) {
        return "LatLng(" + R(this.lat, i) + ", " + R(this.lng, i) + ")";
      }, distanceTo: function(i) {
        return Lt.distance(this, ct(i));
      }, wrap: function() {
        return Lt.wrapLatLng(this);
      }, toBounds: function(i) {
        var s = 180 * i / 40075017, c = s / Math.cos(Math.PI / 180 * this.lat);
        return bt([this.lat - s, this.lng - c], [this.lat + s, this.lng + c]);
      }, clone: function() {
        return new _t(this.lat, this.lng, this.alt);
      } };
      function ct(i, s, c) {
        return i instanceof _t ? i : D(i) && typeof i[0] != "object" ? i.length === 3 ? new _t(i[0], i[1], i[2]) : i.length === 2 ? new _t(i[0], i[1]) : null : i == null ? i : typeof i == "object" && "lat" in i ? new _t(i.lat, "lng" in i ? i.lng : i.lon, i.alt) : s === void 0 ? null : new _t(i, s, c);
      }
      var At = { latLngToPoint: function(i, s) {
        var c = this.projection.project(i), m = this.scale(s);
        return this.transformation._transform(c, m);
      }, pointToLatLng: function(i, s) {
        var c = this.scale(s), m = this.transformation.untransform(i, c);
        return this.projection.unproject(m);
      }, project: function(i) {
        return this.projection.project(i);
      }, unproject: function(i) {
        return this.projection.unproject(i);
      }, scale: function(i) {
        return 256 * Math.pow(2, i);
      }, zoom: function(i) {
        return Math.log(i / 256) / Math.LN2;
      }, getProjectedBounds: function(i) {
        if (this.infinite) return null;
        var s = this.projection.bounds, c = this.scale(i), m = this.transformation.transform(s.min, c), _ = this.transformation.transform(s.max, c);
        return new q(m, _);
      }, infinite: false, wrapLatLng: function(i) {
        var s = this.wrapLng ? S(i.lng, this.wrapLng, true) : i.lng, c = this.wrapLat ? S(i.lat, this.wrapLat, true) : i.lat, m = i.alt;
        return new _t(c, s, m);
      }, wrapLatLngBounds: function(i) {
        var s = i.getCenter(), c = this.wrapLatLng(s), m = s.lat - c.lat, _ = s.lng - c.lng;
        if (m === 0 && _ === 0) return i;
        var C = i.getSouthWest(), j = i.getNorthEast(), Y = new _t(C.lat - m, C.lng - _), lt = new _t(j.lat - m, j.lng - _);
        return new dt(Y, lt);
      } }, Lt = f({}, At, { wrapLng: [-180, 180], R: 6371e3, distance: function(i, s) {
        var c = Math.PI / 180, m = i.lat * c, _ = s.lat * c, C = Math.sin((s.lat - i.lat) * c / 2), j = Math.sin((s.lng - i.lng) * c / 2), Y = C * C + Math.cos(m) * Math.cos(_) * j * j, lt = 2 * Math.atan2(Math.sqrt(Y), Math.sqrt(1 - Y));
        return this.R * lt;
      } }), $t = 6378137, Rt = { R: $t, MAX_LATITUDE: 85.0511287798, project: function(i) {
        var s = Math.PI / 180, c = this.MAX_LATITUDE, m = Math.max(Math.min(c, i.lat), -c), _ = Math.sin(m * s);
        return new rt(this.R * i.lng * s, this.R * Math.log((1 + _) / (1 - _)) / 2);
      }, unproject: function(i) {
        var s = 180 / Math.PI;
        return new _t((2 * Math.atan(Math.exp(i.y / this.R)) - Math.PI / 2) * s, i.x * s / this.R);
      }, bounds: function() {
        var i = $t * Math.PI;
        return new q([-i, -i], [i, i]);
      }() };
      function Ut(i, s, c, m) {
        if (D(i)) {
          this._a = i[0], this._b = i[1], this._c = i[2], this._d = i[3];
          return;
        }
        this._a = i, this._b = s, this._c = c, this._d = m;
      }
      Ut.prototype = { transform: function(i, s) {
        return this._transform(i.clone(), s);
      }, _transform: function(i, s) {
        return s = s || 1, i.x = s * (this._a * i.x + this._b), i.y = s * (this._c * i.y + this._d), i;
      }, untransform: function(i, s) {
        return s = s || 1, new rt((i.x / s - this._b) / this._a, (i.y / s - this._d) / this._c);
      } };
      function Wt(i, s, c, m) {
        return new Ut(i, s, c, m);
      }
      var te = f({}, Lt, { code: "EPSG:3857", projection: Rt, transformation: function() {
        var i = 0.5 / (Math.PI * Rt.R);
        return Wt(i, 0.5, -i, 0.5);
      }() }), Zt = f({}, te, { code: "EPSG:900913" });
      function de(i) {
        return document.createElementNS("http://www.w3.org/2000/svg", i);
      }
      function ie(i, s) {
        var c = "", m, _, C, j, Y, lt;
        for (m = 0, C = i.length; m < C; m++) {
          for (Y = i[m], _ = 0, j = Y.length; _ < j; _++) lt = Y[_], c += (_ ? "L" : "M") + lt.x + " " + lt.y;
          c += s ? Dt.svg ? "z" : "x" : "";
        }
        return c || "M0 0";
      }
      var ue = document.documentElement.style, Ct = "ActiveXObject" in window, _e = Ct && !document.addEventListener, Bt = "msLaunchUri" in navigator && !("documentMode" in document), Jt = En("webkit"), Mt = En("android"), tn = En("android 2") || En("android 3"), be = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), Ze = Mt && En("Google") && be < 537 && !("AudioNode" in window), ce = !!window.opera, Vt = !Bt && En("chrome"), oe = En("gecko") && !Jt && !ce && !Ct, he = !Vt && En("safari"), xe = En("phantom"), Ht = "OTransition" in ue, fn = navigator.platform.indexOf("Win") === 0, Bn = Ct && "transition" in ue, rn = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !tn, Pt = "MozPerspective" in ue, ne = !window.L_DISABLE_3D && (Bn || rn || Pt) && !Ht && !xe, re = typeof orientation < "u" || En("mobile"), Wn = re && Jt, lo = re && rn, uo = !window.PointerEvent && window.MSPointerEvent, Qn = !!(window.PointerEvent || uo), Tn = "ontouchstart" in window || !!window.TouchEvent, co = !window.L_NO_TOUCH && (Tn || Qn), ui = re && ce, ci = re && oe, fi = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, Ko = function() {
        var i = false;
        try {
          var s = Object.defineProperty({}, "passive", { get: function() {
            i = true;
          } });
          window.addEventListener("testPassiveEventSupport", E, s), window.removeEventListener("testPassiveEventSupport", E, s);
        } catch {
        }
        return i;
      }(), Zi = function() {
        return !!document.createElement("canvas").getContext;
      }(), To = !!(document.createElementNS && de("svg").createSVGRect), di = !!To && function() {
        var i = document.createElement("div");
        return i.innerHTML = "<svg/>", (i.firstChild && i.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      }(), Qe = !To && function() {
        try {
          var i = document.createElement("div");
          i.innerHTML = '<v:shape adj="1"/>';
          var s = i.firstChild;
          return s.style.behavior = "url(#default#VML)", s && typeof s.adj == "object";
        } catch {
          return false;
        }
      }(), an = navigator.platform.indexOf("Mac") === 0, hi = navigator.platform.indexOf("Linux") === 0;
      function En(i) {
        return navigator.userAgent.toLowerCase().indexOf(i) >= 0;
      }
      var Dt = { ie: Ct, ielt9: _e, edge: Bt, webkit: Jt, android: Mt, android23: tn, androidStock: Ze, opera: ce, chrome: Vt, gecko: oe, safari: he, phantom: xe, opera12: Ht, win: fn, ie3d: Bn, webkit3d: rn, gecko3d: Pt, any3d: ne, mobile: re, mobileWebkit: Wn, mobileWebkit3d: lo, msPointer: uo, pointer: Qn, touch: co, touchNative: Tn, mobileOpera: ui, mobileGecko: ci, retina: fi, passiveEvents: Ko, canvas: Zi, svg: To, vml: Qe, inlineSvg: di, mac: an, linux: hi }, Mr = Dt.msPointer ? "MSPointerDown" : "pointerdown", Xo = Dt.msPointer ? "MSPointerMove" : "pointermove", pi = Dt.msPointer ? "MSPointerUp" : "pointerup", Ve = Dt.msPointer ? "MSPointerCancel" : "pointercancel", Pe = { touchstart: Mr, touchmove: Xo, touchend: pi, touchcancel: Ve }, Mn = { touchstart: qe, touchmove: Ge, touchend: Ge, touchcancel: Ge }, Zn = {}, Jn = false;
      function Je(i, s, c) {
        return s === "touchstart" && Yt(), Mn[s] ? (c = Mn[s].bind(this, c), i.addEventListener(Pe[s], c, false), c) : (console.warn("wrong event specified:", s), E);
      }
      function pt(i, s, c) {
        if (!Pe[s]) {
          console.warn("wrong event specified:", s);
          return;
        }
        i.removeEventListener(Pe[s], c, false);
      }
      function ht(i) {
        Zn[i.pointerId] = i;
      }
      function Tt(i) {
        Zn[i.pointerId] && (Zn[i.pointerId] = i);
      }
      function It(i) {
        delete Zn[i.pointerId];
      }
      function Yt() {
        Jn || (document.addEventListener(Mr, ht, true), document.addEventListener(Xo, Tt, true), document.addEventListener(pi, It, true), document.addEventListener(Ve, It, true), Jn = true);
      }
      function Ge(i, s) {
        if (s.pointerType !== (s.MSPOINTER_TYPE_MOUSE || "mouse")) {
          s.touches = [];
          for (var c in Zn) s.touches.push(Zn[c]);
          s.changedTouches = [s], i(s);
        }
      }
      function qe(i, s) {
        s.MSPOINTER_TYPE_TOUCH && s.pointerType === s.MSPOINTER_TYPE_TOUCH && dn(s), Ge(i, s);
      }
      function ti(i) {
        var s = {}, c, m;
        for (m in i) c = i[m], s[m] = c && c.bind ? c.bind(i) : c;
        return i = s, s.type = "dblclick", s.detail = 2, s.isTrusted = false, s._simulated = true, s;
      }
      var fo = 200;
      function Wo(i, s) {
        i.addEventListener("dblclick", s);
        var c = 0, m;
        function _(C) {
          if (C.detail !== 1) {
            m = C.detail;
            return;
          }
          if (!(C.pointerType === "mouse" || C.sourceCapabilities && !C.sourceCapabilities.firesTouchEvents)) {
            var j = sl(C);
            if (!(j.some(function(lt) {
              return lt instanceof HTMLLabelElement && lt.attributes.for;
            }) && !j.some(function(lt) {
              return lt instanceof HTMLInputElement || lt instanceof HTMLSelectElement;
            }))) {
              var Y = Date.now();
              Y - c <= fo ? (m++, m === 2 && s(ti(C))) : m = 1, c = Y;
            }
          }
        }
        return i.addEventListener("click", _), { dblclick: s, simDblclick: _ };
      }
      function mi(i, s) {
        i.removeEventListener("dblclick", s.dblclick), i.removeEventListener("click", s.simDblclick);
      }
      var Eo = Rr(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), ae = Rr(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), On = ae === "webkitTransition" || ae === "OTransition" ? ae + "End" : "transitionend";
      function ei(i) {
        return typeof i == "string" ? document.getElementById(i) : i;
      }
      function ni(i, s) {
        var c = i.style[s] || i.currentStyle && i.currentStyle[s];
        if ((!c || c === "auto") && document.defaultView) {
          var m = document.defaultView.getComputedStyle(i, null);
          c = m ? m[s] : null;
        }
        return c === "auto" ? null : c;
      }
      function Se(i, s, c) {
        var m = document.createElement(i);
        return m.className = s || "", c && c.appendChild(m), m;
      }
      function Ye(i) {
        var s = i.parentNode;
        s && s.removeChild(i);
      }
      function Dn(i) {
        for (; i.firstChild; ) i.removeChild(i.firstChild);
      }
      function Qo(i) {
        var s = i.parentNode;
        s && s.lastChild !== i && s.appendChild(i);
      }
      function Or(i) {
        var s = i.parentNode;
        s && s.firstChild !== i && s.insertBefore(i, s.firstChild);
      }
      function Ar(i, s) {
        if (i.classList !== void 0) return i.classList.contains(s);
        var c = Nn(i);
        return c.length > 0 && new RegExp("(^|\\s)" + s + "(\\s|$)").test(c);
      }
      function ee(i, s) {
        if (i.classList !== void 0) for (var c = A(s), m = 0, _ = c.length; m < _; m++) i.classList.add(c[m]);
        else if (!Ar(i, s)) {
          var C = Nn(i);
          rl(i, (C ? C + " " : "") + s);
        }
      }
      function Ke(i, s) {
        i.classList !== void 0 ? i.classList.remove(s) : rl(i, k((" " + Nn(i) + " ").replace(" " + s + " ", " ")));
      }
      function rl(i, s) {
        i.className.baseVal === void 0 ? i.className = s : i.className.baseVal = s;
      }
      function Nn(i) {
        return i.correspondingElement && (i = i.correspondingElement), i.className.baseVal === void 0 ? i.className : i.className.baseVal;
      }
      function Vn(i, s) {
        "opacity" in i.style ? i.style.opacity = s : "filter" in i.style && Nu(i, s);
      }
      function Nu(i, s) {
        var c = false, m = "DXImageTransform.Microsoft.Alpha";
        try {
          c = i.filters.item(m);
        } catch {
          if (s === 1) return;
        }
        s = Math.round(s * 100), c ? (c.Enabled = s !== 100, c.Opacity = s) : i.style.filter += " progid:" + m + "(opacity=" + s + ")";
      }
      function Rr(i) {
        for (var s = document.documentElement.style, c = 0; c < i.length; c++) if (i[c] in s) return i[c];
        return false;
      }
      function gi(i, s, c) {
        var m = s || new rt(0, 0);
        i.style[Eo] = (Dt.ie3d ? "translate(" + m.x + "px," + m.y + "px)" : "translate3d(" + m.x + "px," + m.y + "px,0)") + (c ? " scale(" + c + ")" : "");
      }
      function sn(i, s) {
        i._leaflet_pos = s, Dt.any3d ? gi(i, s) : (i.style.left = s.x + "px", i.style.top = s.y + "px");
      }
      function Mo(i) {
        return i._leaflet_pos || new rt(0, 0);
      }
      var Vi, xa, is;
      if ("onselectstart" in document) Vi = function() {
        Qt(window, "selectstart", dn);
      }, xa = function() {
        Ce(window, "selectstart", dn);
      };
      else {
        var kr = Rr(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        Vi = function() {
          if (kr) {
            var i = document.documentElement.style;
            is = i[kr], i[kr] = "none";
          }
        }, xa = function() {
          kr && (document.documentElement.style[kr] = is, is = void 0);
        };
      }
      function Sa() {
        Qt(window, "dragstart", dn);
      }
      function al() {
        Ce(window, "dragstart", dn);
      }
      var os, Lr;
      function wa(i) {
        for (; i.tabIndex === -1; ) i = i.parentNode;
        i.style && (zr(), os = i, Lr = i.style.outlineStyle, i.style.outlineStyle = "none", Qt(window, "keydown", zr));
      }
      function zr() {
        os && (os.style.outlineStyle = Lr, os = void 0, Lr = void 0, Ce(window, "keydown", zr));
      }
      function Jo(i) {
        do
          i = i.parentNode;
        while ((!i.offsetWidth || !i.offsetHeight) && i !== document.body);
        return i;
      }
      function Oo(i) {
        var s = i.getBoundingClientRect();
        return { x: s.width / i.offsetWidth || 1, y: s.height / i.offsetHeight || 1, boundingClientRect: s };
      }
      var $u = { __proto__: null, TRANSFORM: Eo, TRANSITION: ae, TRANSITION_END: On, get: ei, getStyle: ni, create: Se, remove: Ye, empty: Dn, toFront: Qo, toBack: Or, hasClass: Ar, addClass: ee, removeClass: Ke, setClass: rl, getClass: Nn, setOpacity: Vn, testProp: Rr, setTransform: gi, setPosition: sn, getPosition: Mo, get disableTextSelection() {
        return Vi;
      }, get enableTextSelection() {
        return xa;
      }, disableImageDrag: Sa, enableImageDrag: al, preventOutline: wa, restoreOutline: zr, getSizedParentNode: Jo, getScale: Oo };
      function Qt(i, s, c, m) {
        if (s && typeof s == "object") for (var _ in s) tr(i, _, s[_], c);
        else {
          s = A(s);
          for (var C = 0, j = s.length; C < j; C++) tr(i, s[C], c, m);
        }
        return this;
      }
      var Ti = "_leaflet_events";
      function Ce(i, s, c, m) {
        if (arguments.length === 1) Gi(i), delete i[Ti];
        else if (s && typeof s == "object") for (var _ in s) qi(i, _, s[_], c);
        else if (s = A(s), arguments.length === 2) Gi(i, function(Y) {
          return N(s, Y) !== -1;
        });
        else for (var C = 0, j = s.length; C < j; C++) qi(i, s[C], c, m);
        return this;
      }
      function Gi(i, s) {
        for (var c in i[Ti]) {
          var m = c.split(/\d/)[0];
          (!s || s(m)) && qi(i, m, null, null, c);
        }
      }
      var Ca = { mouseenter: "mouseover", mouseleave: "mouseout", wheel: !("onwheel" in window) && "mousewheel" };
      function tr(i, s, c, m) {
        var _ = s + y(c) + (m ? "_" + y(m) : "");
        if (i[Ti] && i[Ti][_]) return this;
        var C = function(Y) {
          return c.call(m || i, Y || window.event);
        }, j = C;
        !Dt.touchNative && Dt.pointer && s.indexOf("touch") === 0 ? C = Je(i, s, C) : Dt.touch && s === "dblclick" ? C = Wo(i, C) : "addEventListener" in i ? s === "touchstart" || s === "touchmove" || s === "wheel" || s === "mousewheel" ? i.addEventListener(Ca[s] || s, C, Dt.passiveEvents ? { passive: false } : false) : s === "mouseenter" || s === "mouseleave" ? (C = function(Y) {
          Y = Y || window.event, nr(i, Y) && j(Y);
        }, i.addEventListener(Ca[s], C, false)) : i.addEventListener(s, j, false) : i.attachEvent("on" + s, C), i[Ti] = i[Ti] || {}, i[Ti][_] = C;
      }
      function qi(i, s, c, m, _) {
        _ = _ || s + y(c) + (m ? "_" + y(m) : "");
        var C = i[Ti] && i[Ti][_];
        if (!C) return this;
        !Dt.touchNative && Dt.pointer && s.indexOf("touch") === 0 ? pt(i, s, C) : Dt.touch && s === "dblclick" ? mi(i, C) : "removeEventListener" in i ? i.removeEventListener(Ca[s] || s, C, false) : i.detachEvent("on" + s, C), i[Ti][_] = null;
      }
      function ho(i) {
        return i.stopPropagation ? i.stopPropagation() : i.originalEvent ? i.originalEvent._stopped = true : i.cancelBubble = true, this;
      }
      function Pr(i) {
        return tr(i, "wheel", ho), this;
      }
      function Br(i) {
        return Qt(i, "mousedown touchstart dblclick contextmenu", ho), i._leaflet_disable_click = true, this;
      }
      function dn(i) {
        return i.preventDefault ? i.preventDefault() : i.returnValue = false, this;
      }
      function Yi(i) {
        return dn(i), ho(i), this;
      }
      function sl(i) {
        if (i.composedPath) return i.composedPath();
        for (var s = [], c = i.target; c; ) s.push(c), c = c.parentNode;
        return s;
      }
      function $n(i, s) {
        if (!s) return new rt(i.clientX, i.clientY);
        var c = Oo(s), m = c.boundingClientRect;
        return new rt((i.clientX - m.left) / c.x - s.clientLeft, (i.clientY - m.top) / c.y - s.clientTop);
      }
      var er = Dt.linux && Dt.chrome ? window.devicePixelRatio : Dt.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function Ta(i) {
        return Dt.edge ? i.wheelDeltaY / 2 : i.deltaY && i.deltaMode === 0 ? -i.deltaY / er : i.deltaY && i.deltaMode === 1 ? -i.deltaY * 20 : i.deltaY && i.deltaMode === 2 ? -i.deltaY * 60 : i.deltaX || i.deltaZ ? 0 : i.wheelDelta ? (i.wheelDeltaY || i.wheelDelta) / 2 : i.detail && Math.abs(i.detail) < 32765 ? -i.detail * 20 : i.detail ? i.detail / -32765 * 60 : 0;
      }
      function nr(i, s) {
        var c = s.relatedTarget;
        if (!c) return true;
        try {
          for (; c && c !== i; ) c = c.parentNode;
        } catch {
          return false;
        }
        return c !== i;
      }
      var Qf = { __proto__: null, on: Qt, off: Ce, stopPropagation: ho, disableScrollPropagation: Pr, disableClickPropagation: Br, preventDefault: dn, stop: Yi, getPropagationPath: sl, getMousePosition: $n, getWheelDelta: Ta, isExternalTarget: nr, addListener: Qt, removeListener: Ce }, rs = tt.extend({ run: function(i, s, c, m) {
        this.stop(), this._el = i, this._inProgress = true, this._duration = c || 0.25, this._easeOutPower = 1 / Math.max(m || 0.5, 0.2), this._startPos = Mo(i), this._offset = s.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
      }, stop: function() {
        this._inProgress && (this._step(true), this._complete());
      }, _animate: function() {
        this._animId = ot(this._animate, this), this._step();
      }, _step: function(i) {
        var s = +/* @__PURE__ */ new Date() - this._startTime, c = this._duration * 1e3;
        s < c ? this._runFrame(this._easeOut(s / c), i) : (this._runFrame(1), this._complete());
      }, _runFrame: function(i, s) {
        var c = this._startPos.add(this._offset.multiplyBy(i));
        s && c._round(), sn(this._el, c), this.fire("step");
      }, _complete: function() {
        w(this._animId), this._inProgress = false, this.fire("end");
      }, _easeOut: function(i) {
        return 1 - Math.pow(1 - i, this._easeOutPower);
      } }), pe = tt.extend({ options: { crs: te, center: void 0, zoom: void 0, minZoom: void 0, maxZoom: void 0, layers: [], maxBounds: void 0, renderer: void 0, zoomAnimation: true, zoomAnimationThreshold: 4, fadeAnimation: true, markerZoomAnimation: true, transform3DLimit: 8388608, zoomSnap: 1, zoomDelta: 1, trackResize: true }, initialize: function(i, s) {
        s = O(this, s), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = true, this._initContainer(i), this._initLayout(), this._onResize = g(this._onResize, this), this._initEvents(), s.maxBounds && this.setMaxBounds(s.maxBounds), s.zoom !== void 0 && (this._zoom = this._limitZoom(s.zoom)), s.center && s.zoom !== void 0 && this.setView(ct(s.center), s.zoom, { reset: true }), this.callInitHooks(), this._zoomAnimated = ae && Dt.any3d && !Dt.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Qt(this._proxy, On, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      }, setView: function(i, s, c) {
        if (s = s === void 0 ? this._zoom : this._limitZoom(s), i = this._limitCenter(ct(i), s, this.options.maxBounds), c = c || {}, this._stop(), this._loaded && !c.reset && c !== true) {
          c.animate !== void 0 && (c.zoom = f({ animate: c.animate }, c.zoom), c.pan = f({ animate: c.animate, duration: c.duration }, c.pan));
          var m = this._zoom !== s ? this._tryAnimatedZoom && this._tryAnimatedZoom(i, s, c.zoom) : this._tryAnimatedPan(i, c.pan);
          if (m) return clearTimeout(this._sizeTimer), this;
        }
        return this._resetView(i, s, c.pan && c.pan.noMoveStart), this;
      }, setZoom: function(i, s) {
        return this._loaded ? this.setView(this.getCenter(), i, { zoom: s }) : (this._zoom = i, this);
      }, zoomIn: function(i, s) {
        return i = i || (Dt.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + i, s);
      }, zoomOut: function(i, s) {
        return i = i || (Dt.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - i, s);
      }, setZoomAround: function(i, s, c) {
        var m = this.getZoomScale(s), _ = this.getSize().divideBy(2), C = i instanceof rt ? i : this.latLngToContainerPoint(i), j = C.subtract(_).multiplyBy(1 - 1 / m), Y = this.containerPointToLatLng(_.add(j));
        return this.setView(Y, s, { zoom: c });
      }, _getBoundsCenterZoom: function(i, s) {
        s = s || {}, i = i.getBounds ? i.getBounds() : bt(i);
        var c = z(s.paddingTopLeft || s.padding || [0, 0]), m = z(s.paddingBottomRight || s.padding || [0, 0]), _ = this.getBoundsZoom(i, false, c.add(m));
        if (_ = typeof s.maxZoom == "number" ? Math.min(s.maxZoom, _) : _, _ === 1 / 0) return { center: i.getCenter(), zoom: _ };
        var C = m.subtract(c).divideBy(2), j = this.project(i.getSouthWest(), _), Y = this.project(i.getNorthEast(), _), lt = this.unproject(j.add(Y).divideBy(2).add(C), _);
        return { center: lt, zoom: _ };
      }, fitBounds: function(i, s) {
        if (i = bt(i), !i.isValid()) throw new Error("Bounds are not valid.");
        var c = this._getBoundsCenterZoom(i, s);
        return this.setView(c.center, c.zoom, s);
      }, fitWorld: function(i) {
        return this.fitBounds([[-90, -180], [90, 180]], i);
      }, panTo: function(i, s) {
        return this.setView(i, this._zoom, { pan: s });
      }, panBy: function(i, s) {
        if (i = z(i).round(), s = s || {}, !i.x && !i.y) return this.fire("moveend");
        if (s.animate !== true && !this.getSize().contains(i)) return this._resetView(this.unproject(this.project(this.getCenter()).add(i)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new rs(), this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)), s.noMoveStart || this.fire("movestart"), s.animate !== false) {
          ee(this._mapPane, "leaflet-pan-anim");
          var c = this._getMapPanePos().subtract(i).round();
          this._panAnim.run(this._mapPane, c, s.duration || 0.25, s.easeLinearity);
        } else this._rawPanBy(i), this.fire("move").fire("moveend");
        return this;
      }, flyTo: function(i, s, c) {
        if (c = c || {}, c.animate === false || !Dt.any3d) return this.setView(i, s, c);
        this._stop();
        var m = this.project(this.getCenter()), _ = this.project(i), C = this.getSize(), j = this._zoom;
        i = ct(i), s = s === void 0 ? j : s;
        var Y = Math.max(C.x, C.y), lt = Y * this.getZoomScale(j, s), St = _.distanceTo(m) || 1, Et = 1.42, kt = Et * Et;
        function Nt(en) {
          var Wi = en ? -1 : 1, go = en ? lt : Y, zo = lt * lt - Y * Y + Wi * kt * kt * St * St, vo = 2 * go * kt * St, $a = zo / vo, ys = Math.sqrt($a * $a + 1) - $a, Ia = ys < 1e-9 ? -18 : Math.log(ys);
          return Ia;
        }
        function Xt(en) {
          return (Math.exp(en) - Math.exp(-en)) / 2;
        }
        function Xe(en) {
          return (Math.exp(en) + Math.exp(-en)) / 2;
        }
        function ln(en) {
          return Xt(en) / Xe(en);
        }
        var Rn = Nt(0);
        function vi(en) {
          return Y * (Xe(Rn) / Xe(Rn + Et * en));
        }
        function ic(en) {
          return Y * (Xe(Rn) * ln(Rn + Et * en) - Xt(Rn)) / kt;
        }
        function oc(en) {
          return 1 - Math.pow(1 - en, 1.5);
        }
        var Na = Date.now(), qr = (Nt(1) - Rn) / Et, rc = c.duration ? 1e3 * c.duration : 1e3 * qr * 0.8;
        function Yr() {
          var en = (Date.now() - Na) / rc, Wi = oc(en) * qr;
          en <= 1 ? (this._flyToFrame = ot(Yr, this), this._move(this.unproject(m.add(_.subtract(m).multiplyBy(ic(Wi) / St)), j), this.getScaleZoom(Y / vi(Wi), j), { flyTo: true })) : this._move(i, s)._moveEnd(true);
        }
        return this._moveStart(true, c.noMoveStart), Yr.call(this), this;
      }, flyToBounds: function(i, s) {
        var c = this._getBoundsCenterZoom(i, s);
        return this.flyTo(c.center, c.zoom, s);
      }, setMaxBounds: function(i) {
        return i = bt(i), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), i.isValid() ? (this.options.maxBounds = i, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      }, setMinZoom: function(i) {
        var s = this.options.minZoom;
        return this.options.minZoom = i, this._loaded && s !== i && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(i) : this;
      }, setMaxZoom: function(i) {
        var s = this.options.maxZoom;
        return this.options.maxZoom = i, this._loaded && s !== i && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(i) : this;
      }, panInsideBounds: function(i, s) {
        this._enforcingBounds = true;
        var c = this.getCenter(), m = this._limitCenter(c, this._zoom, bt(i));
        return c.equals(m) || this.panTo(m, s), this._enforcingBounds = false, this;
      }, panInside: function(i, s) {
        s = s || {};
        var c = z(s.paddingTopLeft || s.padding || [0, 0]), m = z(s.paddingBottomRight || s.padding || [0, 0]), _ = this.project(this.getCenter()), C = this.project(i), j = this.getPixelBounds(), Y = ft([j.min.add(c), j.max.subtract(m)]), lt = Y.getSize();
        if (!Y.contains(C)) {
          this._enforcingBounds = true;
          var St = C.subtract(Y.getCenter()), Et = Y.extend(C).getSize().subtract(lt);
          _.x += St.x < 0 ? -Et.x : Et.x, _.y += St.y < 0 ? -Et.y : Et.y, this.panTo(this.unproject(_), s), this._enforcingBounds = false;
        }
        return this;
      }, invalidateSize: function(i) {
        if (!this._loaded) return this;
        i = f({ animate: false, pan: true }, i === true ? { animate: true } : i);
        var s = this.getSize();
        this._sizeChanged = true, this._lastCenter = null;
        var c = this.getSize(), m = s.divideBy(2).round(), _ = c.divideBy(2).round(), C = m.subtract(_);
        return !C.x && !C.y ? this : (i.animate && i.pan ? this.panBy(C) : (i.pan && this._rawPanBy(C), this.fire("move"), i.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(g(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", { oldSize: s, newSize: c }));
      }, stop: function() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
      }, locate: function(i) {
        if (i = this._locateOptions = f({ timeout: 1e4, watch: false }, i), !("geolocation" in navigator)) return this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }), this;
        var s = g(this._handleGeolocationResponse, this), c = g(this._handleGeolocationError, this);
        return i.watch ? this._locationWatchId = navigator.geolocation.watchPosition(s, c, i) : navigator.geolocation.getCurrentPosition(s, c, i), this;
      }, stopLocate: function() {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = false), this;
      }, _handleGeolocationError: function(i) {
        if (this._container._leaflet_id) {
          var s = i.code, c = i.message || (s === 1 ? "permission denied" : s === 2 ? "position unavailable" : "timeout");
          this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", { code: s, message: "Geolocation error: " + c + "." });
        }
      }, _handleGeolocationResponse: function(i) {
        if (this._container._leaflet_id) {
          var s = i.coords.latitude, c = i.coords.longitude, m = new _t(s, c), _ = m.toBounds(i.coords.accuracy * 2), C = this._locateOptions;
          if (C.setView) {
            var j = this.getBoundsZoom(_);
            this.setView(m, C.maxZoom ? Math.min(j, C.maxZoom) : j);
          }
          var Y = { latlng: m, bounds: _, timestamp: i.timestamp };
          for (var lt in i.coords) typeof i.coords[lt] == "number" && (Y[lt] = i.coords[lt]);
          this.fire("locationfound", Y);
        }
      }, addHandler: function(i, s) {
        if (!s) return this;
        var c = this[i] = new s(this);
        return this._handlers.push(c), this.options[i] && c.enable(), this;
      }, remove: function() {
        if (this._initEvents(true), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), Ye(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (w(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var i;
        for (i in this._layers) this._layers[i].remove();
        for (i in this._panes) Ye(this._panes[i]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      }, createPane: function(i, s) {
        var c = "leaflet-pane" + (i ? " leaflet-" + i.replace("Pane", "") + "-pane" : ""), m = Se("div", c, s || this._mapPane);
        return i && (this._panes[i] = m), m;
      }, getCenter: function() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
      }, getZoom: function() {
        return this._zoom;
      }, getBounds: function() {
        var i = this.getPixelBounds(), s = this.unproject(i.getBottomLeft()), c = this.unproject(i.getTopRight());
        return new dt(s, c);
      }, getMinZoom: function() {
        return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
      }, getMaxZoom: function() {
        return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      }, getBoundsZoom: function(i, s, c) {
        i = bt(i), c = z(c || [0, 0]);
        var m = this.getZoom() || 0, _ = this.getMinZoom(), C = this.getMaxZoom(), j = i.getNorthWest(), Y = i.getSouthEast(), lt = this.getSize().subtract(c), St = ft(this.project(Y, m), this.project(j, m)).getSize(), Et = Dt.any3d ? this.options.zoomSnap : 1, kt = lt.x / St.x, Nt = lt.y / St.y, Xt = s ? Math.max(kt, Nt) : Math.min(kt, Nt);
        return m = this.getScaleZoom(Xt, m), Et && (m = Math.round(m / (Et / 100)) * (Et / 100), m = s ? Math.ceil(m / Et) * Et : Math.floor(m / Et) * Et), Math.max(_, Math.min(C, m));
      }, getSize: function() {
        return (!this._size || this._sizeChanged) && (this._size = new rt(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = false), this._size.clone();
      }, getPixelBounds: function(i, s) {
        var c = this._getTopLeftPoint(i, s);
        return new q(c, c.add(this.getSize()));
      }, getPixelOrigin: function() {
        return this._checkIfLoaded(), this._pixelOrigin;
      }, getPixelWorldBounds: function(i) {
        return this.options.crs.getProjectedBounds(i === void 0 ? this.getZoom() : i);
      }, getPane: function(i) {
        return typeof i == "string" ? this._panes[i] : i;
      }, getPanes: function() {
        return this._panes;
      }, getContainer: function() {
        return this._container;
      }, getZoomScale: function(i, s) {
        var c = this.options.crs;
        return s = s === void 0 ? this._zoom : s, c.scale(i) / c.scale(s);
      }, getScaleZoom: function(i, s) {
        var c = this.options.crs;
        s = s === void 0 ? this._zoom : s;
        var m = c.zoom(i * c.scale(s));
        return isNaN(m) ? 1 / 0 : m;
      }, project: function(i, s) {
        return s = s === void 0 ? this._zoom : s, this.options.crs.latLngToPoint(ct(i), s);
      }, unproject: function(i, s) {
        return s = s === void 0 ? this._zoom : s, this.options.crs.pointToLatLng(z(i), s);
      }, layerPointToLatLng: function(i) {
        var s = z(i).add(this.getPixelOrigin());
        return this.unproject(s);
      }, latLngToLayerPoint: function(i) {
        var s = this.project(ct(i))._round();
        return s._subtract(this.getPixelOrigin());
      }, wrapLatLng: function(i) {
        return this.options.crs.wrapLatLng(ct(i));
      }, wrapLatLngBounds: function(i) {
        return this.options.crs.wrapLatLngBounds(bt(i));
      }, distance: function(i, s) {
        return this.options.crs.distance(ct(i), ct(s));
      }, containerPointToLayerPoint: function(i) {
        return z(i).subtract(this._getMapPanePos());
      }, layerPointToContainerPoint: function(i) {
        return z(i).add(this._getMapPanePos());
      }, containerPointToLatLng: function(i) {
        var s = this.containerPointToLayerPoint(z(i));
        return this.layerPointToLatLng(s);
      }, latLngToContainerPoint: function(i) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(ct(i)));
      }, mouseEventToContainerPoint: function(i) {
        return $n(i, this._container);
      }, mouseEventToLayerPoint: function(i) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i));
      }, mouseEventToLatLng: function(i) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(i));
      }, _initContainer: function(i) {
        var s = this._container = ei(i);
        if (s) {
          if (s._leaflet_id) throw new Error("Map container is already initialized.");
        } else throw new Error("Map container not found.");
        Qt(s, "scroll", this._onScroll, this), this._containerId = y(s);
      }, _initLayout: function() {
        var i = this._container;
        this._fadeAnimated = this.options.fadeAnimation && Dt.any3d, ee(i, "leaflet-container" + (Dt.touch ? " leaflet-touch" : "") + (Dt.retina ? " leaflet-retina" : "") + (Dt.ielt9 ? " leaflet-oldie" : "") + (Dt.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var s = ni(i, "position");
        s !== "absolute" && s !== "relative" && s !== "fixed" && s !== "sticky" && (i.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      }, _initPanes: function() {
        var i = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), sn(this._mapPane, new rt(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (ee(i.markerPane, "leaflet-zoom-hide"), ee(i.shadowPane, "leaflet-zoom-hide"));
      }, _resetView: function(i, s, c) {
        sn(this._mapPane, new rt(0, 0));
        var m = !this._loaded;
        this._loaded = true, s = this._limitZoom(s), this.fire("viewprereset");
        var _ = this._zoom !== s;
        this._moveStart(_, c)._move(i, s)._moveEnd(_), this.fire("viewreset"), m && this.fire("load");
      }, _moveStart: function(i, s) {
        return i && this.fire("zoomstart"), s || this.fire("movestart"), this;
      }, _move: function(i, s, c, m) {
        s === void 0 && (s = this._zoom);
        var _ = this._zoom !== s;
        return this._zoom = s, this._lastCenter = i, this._pixelOrigin = this._getNewPixelOrigin(i), m ? c && c.pinch && this.fire("zoom", c) : ((_ || c && c.pinch) && this.fire("zoom", c), this.fire("move", c)), this;
      }, _moveEnd: function(i) {
        return i && this.fire("zoomend"), this.fire("moveend");
      }, _stop: function() {
        return w(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      }, _rawPanBy: function(i) {
        sn(this._mapPane, this._getMapPanePos().subtract(i));
      }, _getZoomSpan: function() {
        return this.getMaxZoom() - this.getMinZoom();
      }, _panInsideMaxBounds: function() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      }, _checkIfLoaded: function() {
        if (!this._loaded) throw new Error("Set map center and zoom first.");
      }, _initEvents: function(i) {
        this._targets = {}, this._targets[y(this._container)] = this;
        var s = i ? Ce : Qt;
        s(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && s(window, "resize", this._onResize, this), Dt.any3d && this.options.transform3DLimit && (i ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      }, _onResize: function() {
        w(this._resizeRequest), this._resizeRequest = ot(function() {
          this.invalidateSize({ debounceMoveend: true });
        }, this);
      }, _onScroll: function() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      }, _onMoveEnd: function() {
        var i = this._getMapPanePos();
        Math.max(Math.abs(i.x), Math.abs(i.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      }, _findEventTargets: function(i, s) {
        for (var c = [], m, _ = s === "mouseout" || s === "mouseover", C = i.target || i.srcElement, j = false; C; ) {
          if (m = this._targets[y(C)], m && (s === "click" || s === "preclick") && this._draggableMoved(m)) {
            j = true;
            break;
          }
          if (m && m.listens(s, true) && (_ && !nr(C, i) || (c.push(m), _)) || C === this._container) break;
          C = C.parentNode;
        }
        return !c.length && !j && !_ && this.listens(s, true) && (c = [this]), c;
      }, _isClickDisabled: function(i) {
        for (; i && i !== this._container; ) {
          if (i._leaflet_disable_click) return true;
          i = i.parentNode;
        }
      }, _handleDOMEvent: function(i) {
        var s = i.target || i.srcElement;
        if (!(!this._loaded || s._leaflet_disable_events || i.type === "click" && this._isClickDisabled(s))) {
          var c = i.type;
          c === "mousedown" && wa(s), this._fireDOMEvent(i, c);
        }
      }, _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"], _fireDOMEvent: function(i, s, c) {
        if (i.type === "click") {
          var m = f({}, i);
          m.type = "preclick", this._fireDOMEvent(m, m.type, c);
        }
        var _ = this._findEventTargets(i, s);
        if (c) {
          for (var C = [], j = 0; j < c.length; j++) c[j].listens(s, true) && C.push(c[j]);
          _ = C.concat(_);
        }
        if (_.length) {
          s === "contextmenu" && dn(i);
          var Y = _[0], lt = { originalEvent: i };
          if (i.type !== "keypress" && i.type !== "keydown" && i.type !== "keyup") {
            var St = Y.getLatLng && (!Y._radius || Y._radius <= 10);
            lt.containerPoint = St ? this.latLngToContainerPoint(Y.getLatLng()) : this.mouseEventToContainerPoint(i), lt.layerPoint = this.containerPointToLayerPoint(lt.containerPoint), lt.latlng = St ? Y.getLatLng() : this.layerPointToLatLng(lt.layerPoint);
          }
          for (j = 0; j < _.length; j++) if (_[j].fire(s, lt, true), lt.originalEvent._stopped || _[j].options.bubblingMouseEvents === false && N(this._mouseEvents, s) !== -1) return;
        }
      }, _draggableMoved: function(i) {
        return i = i.dragging && i.dragging.enabled() ? i : this, i.dragging && i.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      }, _clearHandlers: function() {
        for (var i = 0, s = this._handlers.length; i < s; i++) this._handlers[i].disable();
      }, whenReady: function(i, s) {
        return this._loaded ? i.call(s || this, { target: this }) : this.on("load", i, s), this;
      }, _getMapPanePos: function() {
        return Mo(this._mapPane) || new rt(0, 0);
      }, _moved: function() {
        var i = this._getMapPanePos();
        return i && !i.equals([0, 0]);
      }, _getTopLeftPoint: function(i, s) {
        var c = i && s !== void 0 ? this._getNewPixelOrigin(i, s) : this.getPixelOrigin();
        return c.subtract(this._getMapPanePos());
      }, _getNewPixelOrigin: function(i, s) {
        var c = this.getSize()._divideBy(2);
        return this.project(i, s)._subtract(c)._add(this._getMapPanePos())._round();
      }, _latLngToNewLayerPoint: function(i, s, c) {
        var m = this._getNewPixelOrigin(c, s);
        return this.project(i, s)._subtract(m);
      }, _latLngBoundsToNewLayerBounds: function(i, s, c) {
        var m = this._getNewPixelOrigin(c, s);
        return ft([this.project(i.getSouthWest(), s)._subtract(m), this.project(i.getNorthWest(), s)._subtract(m), this.project(i.getSouthEast(), s)._subtract(m), this.project(i.getNorthEast(), s)._subtract(m)]);
      }, _getCenterLayerPoint: function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      }, _getCenterOffset: function(i) {
        return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint());
      }, _limitCenter: function(i, s, c) {
        if (!c) return i;
        var m = this.project(i, s), _ = this.getSize().divideBy(2), C = new q(m.subtract(_), m.add(_)), j = this._getBoundsOffset(C, c, s);
        return Math.abs(j.x) <= 1 && Math.abs(j.y) <= 1 ? i : this.unproject(m.add(j), s);
      }, _limitOffset: function(i, s) {
        if (!s) return i;
        var c = this.getPixelBounds(), m = new q(c.min.add(i), c.max.add(i));
        return i.add(this._getBoundsOffset(m, s));
      }, _getBoundsOffset: function(i, s, c) {
        var m = ft(this.project(s.getNorthEast(), c), this.project(s.getSouthWest(), c)), _ = m.min.subtract(i.min), C = m.max.subtract(i.max), j = this._rebound(_.x, -C.x), Y = this._rebound(_.y, -C.y);
        return new rt(j, Y);
      }, _rebound: function(i, s) {
        return i + s > 0 ? Math.round(i - s) / 2 : Math.max(0, Math.ceil(i)) - Math.max(0, Math.floor(s));
      }, _limitZoom: function(i) {
        var s = this.getMinZoom(), c = this.getMaxZoom(), m = Dt.any3d ? this.options.zoomSnap : 1;
        return m && (i = Math.round(i / m) * m), Math.max(s, Math.min(c, i));
      }, _onPanTransitionStep: function() {
        this.fire("move");
      }, _onPanTransitionEnd: function() {
        Ke(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      }, _tryAnimatedPan: function(i, s) {
        var c = this._getCenterOffset(i)._trunc();
        return (s && s.animate) !== true && !this.getSize().contains(c) ? false : (this.panBy(c, s), true);
      }, _createAnimProxy: function() {
        var i = this._proxy = Se("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(i), this.on("zoomanim", function(s) {
          var c = Eo, m = this._proxy.style[c];
          gi(this._proxy, this.project(s.center, s.zoom), this.getZoomScale(s.zoom, 1)), m === this._proxy.style[c] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      }, _destroyAnimProxy: function() {
        Ye(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      }, _animMoveEnd: function() {
        var i = this.getCenter(), s = this.getZoom();
        gi(this._proxy, this.project(i, s), this.getZoomScale(s, 1));
      }, _catchTransitionEnd: function(i) {
        this._animatingZoom && i.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
      }, _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      }, _tryAnimatedZoom: function(i, s, c) {
        if (this._animatingZoom) return true;
        if (c = c || {}, !this._zoomAnimated || c.animate === false || this._nothingToAnimate() || Math.abs(s - this._zoom) > this.options.zoomAnimationThreshold) return false;
        var m = this.getZoomScale(s), _ = this._getCenterOffset(i)._divideBy(1 - 1 / m);
        return c.animate !== true && !this.getSize().contains(_) ? false : (ot(function() {
          this._moveStart(true, c.noMoveStart || false)._animateZoom(i, s, true);
        }, this), true);
      }, _animateZoom: function(i, s, c, m) {
        this._mapPane && (c && (this._animatingZoom = true, this._animateToCenter = i, this._animateToZoom = s, ee(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", { center: i, zoom: s, noUpdate: m }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, true), setTimeout(g(this._onZoomTransitionEnd, this), 250));
      }, _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && Ke(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = false, this._move(this._animateToCenter, this._animateToZoom, void 0, true), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(true));
      } });
      function Ea(i, s) {
        return new pe(i, s);
      }
      var Gn = W.extend({ options: { position: "topright" }, initialize: function(i) {
        O(this, i);
      }, getPosition: function() {
        return this.options.position;
      }, setPosition: function(i) {
        var s = this._map;
        return s && s.removeControl(this), this.options.position = i, s && s.addControl(this), this;
      }, getContainer: function() {
        return this._container;
      }, addTo: function(i) {
        this.remove(), this._map = i;
        var s = this._container = this.onAdd(i), c = this.getPosition(), m = i._controlCorners[c];
        return ee(s, "leaflet-control"), c.indexOf("bottom") !== -1 ? m.insertBefore(s, m.firstChild) : m.appendChild(s), this._map.on("unload", this.remove, this), this;
      }, remove: function() {
        return this._map ? (Ye(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      }, _refocusOnMap: function(i) {
        this._map && i && i.screenX > 0 && i.screenY > 0 && this._map.getContainer().focus();
      } }), Dr = function(i) {
        return new Gn(i);
      };
      pe.include({ addControl: function(i) {
        return i.addTo(this), this;
      }, removeControl: function(i) {
        return i.remove(), this;
      }, _initControlPos: function() {
        var i = this._controlCorners = {}, s = "leaflet-", c = this._controlContainer = Se("div", s + "control-container", this._container);
        function m(_, C) {
          var j = s + _ + " " + s + C;
          i[_ + C] = Se("div", j, c);
        }
        m("top", "left"), m("top", "right"), m("bottom", "left"), m("bottom", "right");
      }, _clearControlPos: function() {
        for (var i in this._controlCorners) Ye(this._controlCorners[i]);
        Ye(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      } });
      var Iu = Gn.extend({ options: { collapsed: true, position: "topright", autoZIndex: true, hideSingleBase: false, sortLayers: false, sortFunction: function(i, s, c, m) {
        return c < m ? -1 : m < c ? 1 : 0;
      } }, initialize: function(i, s, c) {
        O(this, c), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = false, this._preventClick = false;
        for (var m in i) this._addLayer(i[m], m);
        for (m in s) this._addLayer(s[m], m, true);
      }, onAdd: function(i) {
        this._initLayout(), this._update(), this._map = i, i.on("zoomend", this._checkDisabledLayers, this);
        for (var s = 0; s < this._layers.length; s++) this._layers[s].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      }, addTo: function(i) {
        return Gn.prototype.addTo.call(this, i), this._expandIfNotCollapsed();
      }, onRemove: function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var i = 0; i < this._layers.length; i++) this._layers[i].layer.off("add remove", this._onLayerChange, this);
      }, addBaseLayer: function(i, s) {
        return this._addLayer(i, s), this._map ? this._update() : this;
      }, addOverlay: function(i, s) {
        return this._addLayer(i, s, true), this._map ? this._update() : this;
      }, removeLayer: function(i) {
        i.off("add remove", this._onLayerChange, this);
        var s = this._getLayer(y(i));
        return s && this._layers.splice(this._layers.indexOf(s), 1), this._map ? this._update() : this;
      }, expand: function() {
        ee(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var i = this._map.getSize().y - (this._container.offsetTop + 50);
        return i < this._section.clientHeight ? (ee(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = i + "px") : Ke(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      }, collapse: function() {
        return Ke(this._container, "leaflet-control-layers-expanded"), this;
      }, _initLayout: function() {
        var i = "leaflet-control-layers", s = this._container = Se("div", i), c = this.options.collapsed;
        s.setAttribute("aria-haspopup", true), Br(s), Pr(s);
        var m = this._section = Se("section", i + "-list");
        c && (this._map.on("click", this.collapse, this), Qt(s, { mouseenter: this._expandSafely, mouseleave: this.collapse }, this));
        var _ = this._layersLink = Se("a", i + "-toggle", s);
        _.href = "#", _.title = "Layers", _.setAttribute("role", "button"), Qt(_, { keydown: function(C) {
          C.keyCode === 13 && this._expandSafely();
        }, click: function(C) {
          dn(C), this._expandSafely();
        } }, this), c || this.expand(), this._baseLayersList = Se("div", i + "-base", m), this._separator = Se("div", i + "-separator", m), this._overlaysList = Se("div", i + "-overlays", m), s.appendChild(m);
      }, _getLayer: function(i) {
        for (var s = 0; s < this._layers.length; s++) if (this._layers[s] && y(this._layers[s].layer) === i) return this._layers[s];
      }, _addLayer: function(i, s, c) {
        this._map && i.on("add remove", this._onLayerChange, this), this._layers.push({ layer: i, name: s, overlay: c }), this.options.sortLayers && this._layers.sort(g(function(m, _) {
          return this.options.sortFunction(m.layer, _.layer, m.name, _.name);
        }, this)), this.options.autoZIndex && i.setZIndex && (this._lastZIndex++, i.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      }, _update: function() {
        if (!this._container) return this;
        Dn(this._baseLayersList), Dn(this._overlaysList), this._layerControlInputs = [];
        var i, s, c, m, _ = 0;
        for (c = 0; c < this._layers.length; c++) m = this._layers[c], this._addItem(m), s = s || m.overlay, i = i || !m.overlay, _ += m.overlay ? 0 : 1;
        return this.options.hideSingleBase && (i = i && _ > 1, this._baseLayersList.style.display = i ? "" : "none"), this._separator.style.display = s && i ? "" : "none", this;
      }, _onLayerChange: function(i) {
        this._handlingClick || this._update();
        var s = this._getLayer(y(i.target)), c = s.overlay ? i.type === "add" ? "overlayadd" : "overlayremove" : i.type === "add" ? "baselayerchange" : null;
        c && this._map.fire(c, s);
      }, _createRadioElement: function(i, s) {
        var c = '<input type="radio" class="leaflet-control-layers-selector" name="' + i + '"' + (s ? ' checked="checked"' : "") + "/>", m = document.createElement("div");
        return m.innerHTML = c, m.firstChild;
      }, _addItem: function(i) {
        var s = document.createElement("label"), c = this._map.hasLayer(i.layer), m;
        i.overlay ? (m = document.createElement("input"), m.type = "checkbox", m.className = "leaflet-control-layers-selector", m.defaultChecked = c) : m = this._createRadioElement("leaflet-base-layers_" + y(this), c), this._layerControlInputs.push(m), m.layerId = y(i.layer), Qt(m, "click", this._onInputClick, this);
        var _ = document.createElement("span");
        _.innerHTML = " " + i.name;
        var C = document.createElement("span");
        s.appendChild(C), C.appendChild(m), C.appendChild(_);
        var j = i.overlay ? this._overlaysList : this._baseLayersList;
        return j.appendChild(s), this._checkDisabledLayers(), s;
      }, _onInputClick: function() {
        if (!this._preventClick) {
          var i = this._layerControlInputs, s, c, m = [], _ = [];
          this._handlingClick = true;
          for (var C = i.length - 1; C >= 0; C--) s = i[C], c = this._getLayer(s.layerId).layer, s.checked ? m.push(c) : s.checked || _.push(c);
          for (C = 0; C < _.length; C++) this._map.hasLayer(_[C]) && this._map.removeLayer(_[C]);
          for (C = 0; C < m.length; C++) this._map.hasLayer(m[C]) || this._map.addLayer(m[C]);
          this._handlingClick = false, this._refocusOnMap();
        }
      }, _checkDisabledLayers: function() {
        for (var i = this._layerControlInputs, s, c, m = this._map.getZoom(), _ = i.length - 1; _ >= 0; _--) s = i[_], c = this._getLayer(s.layerId).layer, s.disabled = c.options.minZoom !== void 0 && m < c.options.minZoom || c.options.maxZoom !== void 0 && m > c.options.maxZoom;
      }, _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      }, _expandSafely: function() {
        var i = this._section;
        this._preventClick = true, Qt(i, "click", dn), this.expand();
        var s = this;
        setTimeout(function() {
          Ce(i, "click", dn), s._preventClick = false;
        });
      } }), Jf = function(i, s, c) {
        return new Iu(i, s, c);
      }, ll = Gn.extend({ options: { position: "topleft", zoomInText: '<span aria-hidden="true">+</span>', zoomInTitle: "Zoom in", zoomOutText: '<span aria-hidden="true">&#x2212;</span>', zoomOutTitle: "Zoom out" }, onAdd: function(i) {
        var s = "leaflet-control-zoom", c = Se("div", s + " leaflet-bar"), m = this.options;
        return this._zoomInButton = this._createButton(m.zoomInText, m.zoomInTitle, s + "-in", c, this._zoomIn), this._zoomOutButton = this._createButton(m.zoomOutText, m.zoomOutTitle, s + "-out", c, this._zoomOut), this._updateDisabled(), i.on("zoomend zoomlevelschange", this._updateDisabled, this), c;
      }, onRemove: function(i) {
        i.off("zoomend zoomlevelschange", this._updateDisabled, this);
      }, disable: function() {
        return this._disabled = true, this._updateDisabled(), this;
      }, enable: function() {
        return this._disabled = false, this._updateDisabled(), this;
      }, _zoomIn: function(i) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (i.shiftKey ? 3 : 1));
      }, _zoomOut: function(i) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (i.shiftKey ? 3 : 1));
      }, _createButton: function(i, s, c, m, _) {
        var C = Se("a", c, m);
        return C.innerHTML = i, C.href = "#", C.title = s, C.setAttribute("role", "button"), C.setAttribute("aria-label", s), Br(C), Qt(C, "click", Yi), Qt(C, "click", _, this), Qt(C, "click", this._refocusOnMap, this), C;
      }, _updateDisabled: function() {
        var i = this._map, s = "leaflet-disabled";
        Ke(this._zoomInButton, s), Ke(this._zoomOutButton, s), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || i._zoom === i.getMinZoom()) && (ee(this._zoomOutButton, s), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || i._zoom === i.getMaxZoom()) && (ee(this._zoomInButton, s), this._zoomInButton.setAttribute("aria-disabled", "true"));
      } });
      pe.mergeOptions({ zoomControl: true }), pe.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new ll(), this.addControl(this.zoomControl));
      });
      var ul = function(i) {
        return new ll(i);
      }, ju = Gn.extend({ options: { position: "bottomleft", maxWidth: 100, metric: true, imperial: true }, onAdd: function(i) {
        var s = "leaflet-control-scale", c = Se("div", s), m = this.options;
        return this._addScales(m, s + "-line", c), i.on(m.updateWhenIdle ? "moveend" : "move", this._update, this), i.whenReady(this._update, this), c;
      }, onRemove: function(i) {
        i.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      }, _addScales: function(i, s, c) {
        i.metric && (this._mScale = Se("div", s, c)), i.imperial && (this._iScale = Se("div", s, c));
      }, _update: function() {
        var i = this._map, s = i.getSize().y / 2, c = i.distance(i.containerPointToLatLng([0, s]), i.containerPointToLatLng([this.options.maxWidth, s]));
        this._updateScales(c);
      }, _updateScales: function(i) {
        this.options.metric && i && this._updateMetric(i), this.options.imperial && i && this._updateImperial(i);
      }, _updateMetric: function(i) {
        var s = this._getRoundNum(i), c = s < 1e3 ? s + " m" : s / 1e3 + " km";
        this._updateScale(this._mScale, c, s / i);
      }, _updateImperial: function(i) {
        var s = i * 3.2808399, c, m, _;
        s > 5280 ? (c = s / 5280, m = this._getRoundNum(c), this._updateScale(this._iScale, m + " mi", m / c)) : (_ = this._getRoundNum(s), this._updateScale(this._iScale, _ + " ft", _ / s));
      }, _updateScale: function(i, s, c) {
        i.style.width = Math.round(this.options.maxWidth * c) + "px", i.innerHTML = s;
      }, _getRoundNum: function(i) {
        var s = Math.pow(10, (Math.floor(i) + "").length - 1), c = i / s;
        return c = c >= 10 ? 10 : c >= 5 ? 5 : c >= 3 ? 3 : c >= 2 ? 2 : 1, s * c;
      } }), td = function(i) {
        return new ju(i);
      }, ed = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', cl = Gn.extend({ options: { position: "bottomright", prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (Dt.inlineSvg ? ed + " " : "") + "Leaflet</a>" }, initialize: function(i) {
        O(this, i), this._attributions = {};
      }, onAdd: function(i) {
        i.attributionControl = this, this._container = Se("div", "leaflet-control-attribution"), Br(this._container);
        for (var s in i._layers) i._layers[s].getAttribution && this.addAttribution(i._layers[s].getAttribution());
        return this._update(), i.on("layeradd", this._addAttribution, this), this._container;
      }, onRemove: function(i) {
        i.off("layeradd", this._addAttribution, this);
      }, _addAttribution: function(i) {
        i.layer.getAttribution && (this.addAttribution(i.layer.getAttribution()), i.layer.once("remove", function() {
          this.removeAttribution(i.layer.getAttribution());
        }, this));
      }, setPrefix: function(i) {
        return this.options.prefix = i, this._update(), this;
      }, addAttribution: function(i) {
        return i ? (this._attributions[i] || (this._attributions[i] = 0), this._attributions[i]++, this._update(), this) : this;
      }, removeAttribution: function(i) {
        return i ? (this._attributions[i] && (this._attributions[i]--, this._update()), this) : this;
      }, _update: function() {
        if (this._map) {
          var i = [];
          for (var s in this._attributions) this._attributions[s] && i.push(s);
          var c = [];
          this.options.prefix && c.push(this.options.prefix), i.length && c.push(i.join(", ")), this._container.innerHTML = c.join(' <span aria-hidden="true">|</span> ');
        }
      } });
      pe.mergeOptions({ attributionControl: true }), pe.addInitHook(function() {
        this.options.attributionControl && new cl().addTo(this);
      });
      var nd = function(i) {
        return new cl(i);
      };
      Gn.Layers = Iu, Gn.Zoom = ll, Gn.Scale = ju, Gn.Attribution = cl, Dr.layers = Jf, Dr.zoom = ul, Dr.scale = td, Dr.attribution = nd;
      var Ei = W.extend({ initialize: function(i) {
        this._map = i;
      }, enable: function() {
        return this._enabled ? this : (this._enabled = true, this.addHooks(), this);
      }, disable: function() {
        return this._enabled ? (this._enabled = false, this.removeHooks(), this) : this;
      }, enabled: function() {
        return !!this._enabled;
      } });
      Ei.addTo = function(i, s) {
        return i.addHandler(s, this), this;
      };
      var id = { Events: B }, Hu = Dt.touch ? "touchstart mousedown" : "mousedown", Ao = tt.extend({ options: { clickTolerance: 3 }, initialize: function(i, s, c, m) {
        O(this, m), this._element = i, this._dragStartTarget = s || i, this._preventOutline = c;
      }, enable: function() {
        this._enabled || (Qt(this._dragStartTarget, Hu, this._onDown, this), this._enabled = true);
      }, disable: function() {
        this._enabled && (Ao._dragging === this && this.finishDrag(true), Ce(this._dragStartTarget, Hu, this._onDown, this), this._enabled = false, this._moved = false);
      }, _onDown: function(i) {
        if (this._enabled && (this._moved = false, !Ar(this._element, "leaflet-zoom-anim"))) {
          if (i.touches && i.touches.length !== 1) {
            Ao._dragging === this && this.finishDrag();
            return;
          }
          if (!(Ao._dragging || i.shiftKey || i.which !== 1 && i.button !== 1 && !i.touches) && (Ao._dragging = this, this._preventOutline && wa(this._element), Sa(), Vi(), !this._moving)) {
            this.fire("down");
            var s = i.touches ? i.touches[0] : i, c = Jo(this._element);
            this._startPoint = new rt(s.clientX, s.clientY), this._startPos = Mo(this._element), this._parentScale = Oo(c);
            var m = i.type === "mousedown";
            Qt(document, m ? "mousemove" : "touchmove", this._onMove, this), Qt(document, m ? "mouseup" : "touchend touchcancel", this._onUp, this);
          }
        }
      }, _onMove: function(i) {
        if (this._enabled) {
          if (i.touches && i.touches.length > 1) {
            this._moved = true;
            return;
          }
          var s = i.touches && i.touches.length === 1 ? i.touches[0] : i, c = new rt(s.clientX, s.clientY)._subtract(this._startPoint);
          !c.x && !c.y || Math.abs(c.x) + Math.abs(c.y) < this.options.clickTolerance || (c.x /= this._parentScale.x, c.y /= this._parentScale.y, dn(i), this._moved || (this.fire("dragstart"), this._moved = true, ee(document.body, "leaflet-dragging"), this._lastTarget = i.target || i.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), ee(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(c), this._moving = true, this._lastEvent = i, this._updatePosition());
        }
      }, _updatePosition: function() {
        var i = { originalEvent: this._lastEvent };
        this.fire("predrag", i), sn(this._element, this._newPos), this.fire("drag", i);
      }, _onUp: function() {
        this._enabled && this.finishDrag();
      }, finishDrag: function(i) {
        Ke(document.body, "leaflet-dragging"), this._lastTarget && (Ke(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), Ce(document, "mousemove touchmove", this._onMove, this), Ce(document, "mouseup touchend touchcancel", this._onUp, this), al(), xa();
        var s = this._moved && this._moving;
        this._moving = false, Ao._dragging = false, s && this.fire("dragend", { noInertia: i, distance: this._newPos.distanceTo(this._startPos) });
      } });
      function Uu(i, s, c) {
        var m, _ = [1, 4, 2, 8], C, j, Y, lt, St, Et, kt, Nt;
        for (C = 0, Et = i.length; C < Et; C++) i[C]._code = ir(i[C], s);
        for (Y = 0; Y < 4; Y++) {
          for (kt = _[Y], m = [], C = 0, Et = i.length, j = Et - 1; C < Et; j = C++) lt = i[C], St = i[j], lt._code & kt ? St._code & kt || (Nt = ss(St, lt, kt, s, c), Nt._code = ir(Nt, s), m.push(Nt)) : (St._code & kt && (Nt = ss(St, lt, kt, s, c), Nt._code = ir(Nt, s), m.push(Nt)), m.push(lt));
          i = m;
        }
        return i;
      }
      function as(i, s) {
        var c, m, _, C, j, Y, lt, St, Et;
        if (!i || i.length === 0) throw new Error("latlngs not passed");
        An(i) || (console.warn("latlngs are not flat! Only the first ring will be used"), i = i[0]);
        var kt = ct([0, 0]), Nt = bt(i), Xt = Nt.getNorthWest().distanceTo(Nt.getSouthWest()) * Nt.getNorthEast().distanceTo(Nt.getNorthWest());
        Xt < 1700 && (kt = fl(i));
        var Xe = i.length, ln = [];
        for (c = 0; c < Xe; c++) {
          var Rn = ct(i[c]);
          ln.push(s.project(ct([Rn.lat - kt.lat, Rn.lng - kt.lng])));
        }
        for (Y = lt = St = 0, c = 0, m = Xe - 1; c < Xe; m = c++) _ = ln[c], C = ln[m], j = _.y * C.x - C.y * _.x, lt += (_.x + C.x) * j, St += (_.y + C.y) * j, Y += j * 3;
        Y === 0 ? Et = ln[0] : Et = [lt / Y, St / Y];
        var vi = s.unproject(z(Et));
        return ct([vi.lat + kt.lat, vi.lng + kt.lng]);
      }
      function fl(i) {
        for (var s = 0, c = 0, m = 0, _ = 0; _ < i.length; _++) {
          var C = ct(i[_]);
          s += C.lat, c += C.lng, m++;
        }
        return ct([s / m, c / m]);
      }
      var od = { __proto__: null, clipPolygon: Uu, polygonCenter: as, centroid: fl };
      function Fu(i, s) {
        if (!s || !i.length) return i.slice();
        var c = s * s;
        return i = sd(i, c), i = ad(i, c), i;
      }
      function dl(i, s, c) {
        return Math.sqrt(or(i, s, c, true));
      }
      function rd(i, s, c) {
        return or(i, s, c);
      }
      function ad(i, s) {
        var c = i.length, m = typeof Uint8Array < "u" ? Uint8Array : Array, _ = new m(c);
        _[0] = _[c - 1] = 1, hl(i, _, s, 0, c - 1);
        var C, j = [];
        for (C = 0; C < c; C++) _[C] && j.push(i[C]);
        return j;
      }
      function hl(i, s, c, m, _) {
        var C = 0, j, Y, lt;
        for (Y = m + 1; Y <= _ - 1; Y++) lt = or(i[Y], i[m], i[_], true), lt > C && (j = Y, C = lt);
        C > c && (s[j] = 1, hl(i, s, c, m, j), hl(i, s, c, j, _));
      }
      function sd(i, s) {
        for (var c = [i[0]], m = 1, _ = 0, C = i.length; m < C; m++) ld(i[m], i[_]) > s && (c.push(i[m]), _ = m);
        return _ < C - 1 && c.push(i[C - 1]), c;
      }
      var Zu;
      function Vu(i, s, c, m, _) {
        var C = m ? Zu : ir(i, c), j = ir(s, c), Y, lt, St;
        for (Zu = j; ; ) {
          if (!(C | j)) return [i, s];
          if (C & j) return false;
          Y = C || j, lt = ss(i, s, Y, c, _), St = ir(lt, c), Y === C ? (i = lt, C = St) : (s = lt, j = St);
        }
      }
      function ss(i, s, c, m, _) {
        var C = s.x - i.x, j = s.y - i.y, Y = m.min, lt = m.max, St, Et;
        return c & 8 ? (St = i.x + C * (lt.y - i.y) / j, Et = lt.y) : c & 4 ? (St = i.x + C * (Y.y - i.y) / j, Et = Y.y) : c & 2 ? (St = lt.x, Et = i.y + j * (lt.x - i.x) / C) : c & 1 && (St = Y.x, Et = i.y + j * (Y.x - i.x) / C), new rt(St, Et, _);
      }
      function ir(i, s) {
        var c = 0;
        return i.x < s.min.x ? c |= 1 : i.x > s.max.x && (c |= 2), i.y < s.min.y ? c |= 4 : i.y > s.max.y && (c |= 8), c;
      }
      function ld(i, s) {
        var c = s.x - i.x, m = s.y - i.y;
        return c * c + m * m;
      }
      function or(i, s, c, m) {
        var _ = s.x, C = s.y, j = c.x - _, Y = c.y - C, lt = j * j + Y * Y, St;
        return lt > 0 && (St = ((i.x - _) * j + (i.y - C) * Y) / lt, St > 1 ? (_ = c.x, C = c.y) : St > 0 && (_ += j * St, C += Y * St)), j = i.x - _, Y = i.y - C, m ? j * j + Y * Y : new rt(_, C);
      }
      function An(i) {
        return !D(i[0]) || typeof i[0][0] != "object" && typeof i[0][0] < "u";
      }
      function Gu(i) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), An(i);
      }
      function pl(i, s) {
        var c, m, _, C, j, Y, lt, St;
        if (!i || i.length === 0) throw new Error("latlngs not passed");
        An(i) || (console.warn("latlngs are not flat! Only the first ring will be used"), i = i[0]);
        var Et = ct([0, 0]), kt = bt(i), Nt = kt.getNorthWest().distanceTo(kt.getSouthWest()) * kt.getNorthEast().distanceTo(kt.getNorthWest());
        Nt < 1700 && (Et = fl(i));
        var Xt = i.length, Xe = [];
        for (c = 0; c < Xt; c++) {
          var ln = ct(i[c]);
          Xe.push(s.project(ct([ln.lat - Et.lat, ln.lng - Et.lng])));
        }
        for (c = 0, m = 0; c < Xt - 1; c++) m += Xe[c].distanceTo(Xe[c + 1]) / 2;
        if (m === 0) St = Xe[0];
        else for (c = 0, C = 0; c < Xt - 1; c++) if (j = Xe[c], Y = Xe[c + 1], _ = j.distanceTo(Y), C += _, C > m) {
          lt = (C - m) / _, St = [Y.x - lt * (Y.x - j.x), Y.y - lt * (Y.y - j.y)];
          break;
        }
        var Rn = s.unproject(z(St));
        return ct([Rn.lat + Et.lat, Rn.lng + Et.lng]);
      }
      var qu = { __proto__: null, simplify: Fu, pointToSegmentDistance: dl, closestPointOnSegment: rd, clipSegment: Vu, _getEdgeIntersection: ss, _getBitCode: ir, _sqClosestPointOnSegment: or, isFlat: An, _flat: Gu, polylineCenter: pl }, ls = { project: function(i) {
        return new rt(i.lng, i.lat);
      }, unproject: function(i) {
        return new _t(i.y, i.x);
      }, bounds: new q([-180, -90], [180, 90]) }, us = { R: 6378137, R_MINOR: 6356752314245179e-9, bounds: new q([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]), project: function(i) {
        var s = Math.PI / 180, c = this.R, m = i.lat * s, _ = this.R_MINOR / c, C = Math.sqrt(1 - _ * _), j = C * Math.sin(m), Y = Math.tan(Math.PI / 4 - m / 2) / Math.pow((1 - j) / (1 + j), C / 2);
        return m = -c * Math.log(Math.max(Y, 1e-10)), new rt(i.lng * s * c, m);
      }, unproject: function(i) {
        for (var s = 180 / Math.PI, c = this.R, m = this.R_MINOR / c, _ = Math.sqrt(1 - m * m), C = Math.exp(-i.y / c), j = Math.PI / 2 - 2 * Math.atan(C), Y = 0, lt = 0.1, St; Y < 15 && Math.abs(lt) > 1e-7; Y++) St = _ * Math.sin(j), St = Math.pow((1 - St) / (1 + St), _ / 2), lt = Math.PI / 2 - 2 * Math.atan(C * St) - j, j += lt;
        return new _t(j * s, i.x * s / c);
      } }, Yu = { __proto__: null, LonLat: ls, Mercator: us, SphericalMercator: Rt }, Nr = f({}, Lt, { code: "EPSG:3395", projection: us, transformation: function() {
        var i = 0.5 / (Math.PI * us.R);
        return Wt(i, 0.5, -i, 0.5);
      }() }), Ku = f({}, Lt, { code: "EPSG:4326", projection: ls, transformation: Wt(1 / 180, 1, -1 / 180, 0.5) }), ud = f({}, At, { projection: ls, transformation: Wt(1, 0, -1, 0), scale: function(i) {
        return Math.pow(2, i);
      }, zoom: function(i) {
        return Math.log(i) / Math.LN2;
      }, distance: function(i, s) {
        var c = s.lng - i.lng, m = s.lat - i.lat;
        return Math.sqrt(c * c + m * m);
      }, infinite: true });
      At.Earth = Lt, At.EPSG3395 = Nr, At.EPSG3857 = te, At.EPSG900913 = Zt, At.EPSG4326 = Ku, At.Simple = ud;
      var Mi = tt.extend({ options: { pane: "overlayPane", attribution: null, bubblingMouseEvents: true }, addTo: function(i) {
        return i.addLayer(this), this;
      }, remove: function() {
        return this.removeFrom(this._map || this._mapToAdd);
      }, removeFrom: function(i) {
        return i && i.removeLayer(this), this;
      }, getPane: function(i) {
        return this._map.getPane(i ? this.options[i] || i : this.options.pane);
      }, addInteractiveTarget: function(i) {
        return this._map._targets[y(i)] = this, this;
      }, removeInteractiveTarget: function(i) {
        return delete this._map._targets[y(i)], this;
      }, getAttribution: function() {
        return this.options.attribution;
      }, _layerAdd: function(i) {
        var s = i.target;
        if (s.hasLayer(this)) {
          if (this._map = s, this._zoomAnimated = s._zoomAnimated, this.getEvents) {
            var c = this.getEvents();
            s.on(c, this), this.once("remove", function() {
              s.off(c, this);
            }, this);
          }
          this.onAdd(s), this.fire("add"), s.fire("layeradd", { layer: this });
        }
      } });
      pe.include({ addLayer: function(i) {
        if (!i._layerAdd) throw new Error("The provided object is not a Layer.");
        var s = y(i);
        return this._layers[s] ? this : (this._layers[s] = i, i._mapToAdd = this, i.beforeAdd && i.beforeAdd(this), this.whenReady(i._layerAdd, i), this);
      }, removeLayer: function(i) {
        var s = y(i);
        return this._layers[s] ? (this._loaded && i.onRemove(this), delete this._layers[s], this._loaded && (this.fire("layerremove", { layer: i }), i.fire("remove")), i._map = i._mapToAdd = null, this) : this;
      }, hasLayer: function(i) {
        return y(i) in this._layers;
      }, eachLayer: function(i, s) {
        for (var c in this._layers) i.call(s, this._layers[c]);
        return this;
      }, _addLayers: function(i) {
        i = i ? D(i) ? i : [i] : [];
        for (var s = 0, c = i.length; s < c; s++) this.addLayer(i[s]);
      }, _addZoomLimit: function(i) {
        (!isNaN(i.options.maxZoom) || !isNaN(i.options.minZoom)) && (this._zoomBoundLayers[y(i)] = i, this._updateZoomLevels());
      }, _removeZoomLimit: function(i) {
        var s = y(i);
        this._zoomBoundLayers[s] && (delete this._zoomBoundLayers[s], this._updateZoomLevels());
      }, _updateZoomLevels: function() {
        var i = 1 / 0, s = -1 / 0, c = this._getZoomSpan();
        for (var m in this._zoomBoundLayers) {
          var _ = this._zoomBoundLayers[m].options;
          i = _.minZoom === void 0 ? i : Math.min(i, _.minZoom), s = _.maxZoom === void 0 ? s : Math.max(s, _.maxZoom);
        }
        this._layersMaxZoom = s === -1 / 0 ? void 0 : s, this._layersMinZoom = i === 1 / 0 ? void 0 : i, c !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      } });
      var rr = Mi.extend({ initialize: function(i, s) {
        O(this, s), this._layers = {};
        var c, m;
        if (i) for (c = 0, m = i.length; c < m; c++) this.addLayer(i[c]);
      }, addLayer: function(i) {
        var s = this.getLayerId(i);
        return this._layers[s] = i, this._map && this._map.addLayer(i), this;
      }, removeLayer: function(i) {
        var s = i in this._layers ? i : this.getLayerId(i);
        return this._map && this._layers[s] && this._map.removeLayer(this._layers[s]), delete this._layers[s], this;
      }, hasLayer: function(i) {
        var s = typeof i == "number" ? i : this.getLayerId(i);
        return s in this._layers;
      }, clearLayers: function() {
        return this.eachLayer(this.removeLayer, this);
      }, invoke: function(i) {
        var s = Array.prototype.slice.call(arguments, 1), c, m;
        for (c in this._layers) m = this._layers[c], m[i] && m[i].apply(m, s);
        return this;
      }, onAdd: function(i) {
        this.eachLayer(i.addLayer, i);
      }, onRemove: function(i) {
        this.eachLayer(i.removeLayer, i);
      }, eachLayer: function(i, s) {
        for (var c in this._layers) i.call(s, this._layers[c]);
        return this;
      }, getLayer: function(i) {
        return this._layers[i];
      }, getLayers: function() {
        var i = [];
        return this.eachLayer(i.push, i), i;
      }, setZIndex: function(i) {
        return this.invoke("setZIndex", i);
      }, getLayerId: function(i) {
        return y(i);
      } }), Xu = function(i, s) {
        return new rr(i, s);
      }, ii = rr.extend({ addLayer: function(i) {
        return this.hasLayer(i) ? this : (i.addEventParent(this), rr.prototype.addLayer.call(this, i), this.fire("layeradd", { layer: i }));
      }, removeLayer: function(i) {
        return this.hasLayer(i) ? (i in this._layers && (i = this._layers[i]), i.removeEventParent(this), rr.prototype.removeLayer.call(this, i), this.fire("layerremove", { layer: i })) : this;
      }, setStyle: function(i) {
        return this.invoke("setStyle", i);
      }, bringToFront: function() {
        return this.invoke("bringToFront");
      }, bringToBack: function() {
        return this.invoke("bringToBack");
      }, getBounds: function() {
        var i = new dt();
        for (var s in this._layers) {
          var c = this._layers[s];
          i.extend(c.getBounds ? c.getBounds() : c.getLatLng());
        }
        return i;
      } }), Ma = function(i, s) {
        return new ii(i, s);
      }, $r = W.extend({ options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: false }, initialize: function(i) {
        O(this, i);
      }, createIcon: function(i) {
        return this._createIcon("icon", i);
      }, createShadow: function(i) {
        return this._createIcon("shadow", i);
      }, _createIcon: function(i, s) {
        var c = this._getIconUrl(i);
        if (!c) {
          if (i === "icon") throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var m = this._createImg(c, s && s.tagName === "IMG" ? s : null);
        return this._setIconStyles(m, i), (this.options.crossOrigin || this.options.crossOrigin === "") && (m.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin), m;
      }, _setIconStyles: function(i, s) {
        var c = this.options, m = c[s + "Size"];
        typeof m == "number" && (m = [m, m]);
        var _ = z(m), C = z(s === "shadow" && c.shadowAnchor || c.iconAnchor || _ && _.divideBy(2, true));
        i.className = "leaflet-marker-" + s + " " + (c.className || ""), C && (i.style.marginLeft = -C.x + "px", i.style.marginTop = -C.y + "px"), _ && (i.style.width = _.x + "px", i.style.height = _.y + "px");
      }, _createImg: function(i, s) {
        return s = s || document.createElement("img"), s.src = i, s;
      }, _getIconUrl: function(i) {
        return Dt.retina && this.options[i + "RetinaUrl"] || this.options[i + "Url"];
      } });
      function cs(i) {
        return new $r(i);
      }
      var Ir = $r.extend({ options: { iconUrl: "marker-icon.png", iconRetinaUrl: "marker-icon-2x.png", shadowUrl: "marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28], shadowSize: [41, 41] }, _getIconUrl: function(i) {
        return typeof Ir.imagePath != "string" && (Ir.imagePath = this._detectIconPath()), (this.options.imagePath || Ir.imagePath) + $r.prototype._getIconUrl.call(this, i);
      }, _stripUrl: function(i) {
        var s = function(c, m, _) {
          var C = m.exec(c);
          return C && C[_];
        };
        return i = s(i, /^url\((['"])?(.+)\1\)$/, 2), i && s(i, /^(.*)marker-icon\.png$/, 1);
      }, _detectIconPath: function() {
        var i = Se("div", "leaflet-default-icon-path", document.body), s = ni(i, "background-image") || ni(i, "backgroundImage");
        if (document.body.removeChild(i), s = this._stripUrl(s), s) return s;
        var c = document.querySelector('link[href$="leaflet.css"]');
        return c ? c.href.substring(0, c.href.length - 11 - 1) : "";
      } }), ml = Ei.extend({ initialize: function(i) {
        this._marker = i;
      }, addHooks: function() {
        var i = this._marker._icon;
        this._draggable || (this._draggable = new Ao(i, i, true)), this._draggable.on({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).enable(), ee(i, "leaflet-marker-draggable");
      }, removeHooks: function() {
        this._draggable.off({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).disable(), this._marker._icon && Ke(this._marker._icon, "leaflet-marker-draggable");
      }, moved: function() {
        return this._draggable && this._draggable._moved;
      }, _adjustPan: function(i) {
        var s = this._marker, c = s._map, m = this._marker.options.autoPanSpeed, _ = this._marker.options.autoPanPadding, C = Mo(s._icon), j = c.getPixelBounds(), Y = c.getPixelOrigin(), lt = ft(j.min._subtract(Y).add(_), j.max._subtract(Y).subtract(_));
        if (!lt.contains(C)) {
          var St = z((Math.max(lt.max.x, C.x) - lt.max.x) / (j.max.x - lt.max.x) - (Math.min(lt.min.x, C.x) - lt.min.x) / (j.min.x - lt.min.x), (Math.max(lt.max.y, C.y) - lt.max.y) / (j.max.y - lt.max.y) - (Math.min(lt.min.y, C.y) - lt.min.y) / (j.min.y - lt.min.y)).multiplyBy(m);
          c.panBy(St, { animate: false }), this._draggable._newPos._add(St), this._draggable._startPos._add(St), sn(s._icon, this._draggable._newPos), this._onDrag(i), this._panRequest = ot(this._adjustPan.bind(this, i));
        }
      }, _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      }, _onPreDrag: function(i) {
        this._marker.options.autoPan && (w(this._panRequest), this._panRequest = ot(this._adjustPan.bind(this, i)));
      }, _onDrag: function(i) {
        var s = this._marker, c = s._shadow, m = Mo(s._icon), _ = s._map.layerPointToLatLng(m);
        c && sn(c, m), s._latlng = _, i.latlng = _, i.oldLatLng = this._oldLatLng, s.fire("move", i).fire("drag", i);
      }, _onDragEnd: function(i) {
        w(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", i);
      } }), jr = Mi.extend({ options: { icon: new Ir(), interactive: true, keyboard: true, title: "", alt: "Marker", zIndexOffset: 0, opacity: 1, riseOnHover: false, riseOffset: 250, pane: "markerPane", shadowPane: "shadowPane", bubblingMouseEvents: false, autoPanOnFocus: true, draggable: false, autoPan: false, autoPanPadding: [50, 50], autoPanSpeed: 10 }, initialize: function(i, s) {
        O(this, s), this._latlng = ct(i);
      }, onAdd: function(i) {
        this._zoomAnimated = this._zoomAnimated && i.options.markerZoomAnimation, this._zoomAnimated && i.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
      }, onRemove: function(i) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = true, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && i.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
      }, getEvents: function() {
        return { zoom: this.update, viewreset: this.update };
      }, getLatLng: function() {
        return this._latlng;
      }, setLatLng: function(i) {
        var s = this._latlng;
        return this._latlng = ct(i), this.update(), this.fire("move", { oldLatLng: s, latlng: this._latlng });
      }, setZIndexOffset: function(i) {
        return this.options.zIndexOffset = i, this.update();
      }, getIcon: function() {
        return this.options.icon;
      }, setIcon: function(i) {
        return this.options.icon = i, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
      }, getElement: function() {
        return this._icon;
      }, update: function() {
        if (this._icon && this._map) {
          var i = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(i);
        }
        return this;
      }, _initIcon: function() {
        var i = this.options, s = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), c = i.icon.createIcon(this._icon), m = false;
        c !== this._icon && (this._icon && this._removeIcon(), m = true, i.title && (c.title = i.title), c.tagName === "IMG" && (c.alt = i.alt || "")), ee(c, s), i.keyboard && (c.tabIndex = "0", c.setAttribute("role", "button")), this._icon = c, i.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), this.options.autoPanOnFocus && Qt(c, "focus", this._panOnFocus, this);
        var _ = i.icon.createShadow(this._shadow), C = false;
        _ !== this._shadow && (this._removeShadow(), C = true), _ && (ee(_, s), _.alt = ""), this._shadow = _, i.opacity < 1 && this._updateOpacity(), m && this.getPane().appendChild(this._icon), this._initInteraction(), _ && C && this.getPane(i.shadowPane).appendChild(this._shadow);
      }, _removeIcon: function() {
        this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), this.options.autoPanOnFocus && Ce(this._icon, "focus", this._panOnFocus, this), Ye(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      }, _removeShadow: function() {
        this._shadow && Ye(this._shadow), this._shadow = null;
      }, _setPos: function(i) {
        this._icon && sn(this._icon, i), this._shadow && sn(this._shadow, i), this._zIndex = i.y + this.options.zIndexOffset, this._resetZIndex();
      }, _updateZIndex: function(i) {
        this._icon && (this._icon.style.zIndex = this._zIndex + i);
      }, _animateZoom: function(i) {
        var s = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center).round();
        this._setPos(s);
      }, _initInteraction: function() {
        if (this.options.interactive && (ee(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), ml)) {
          var i = this.options.draggable;
          this.dragging && (i = this.dragging.enabled(), this.dragging.disable()), this.dragging = new ml(this), i && this.dragging.enable();
        }
      }, setOpacity: function(i) {
        return this.options.opacity = i, this._map && this._updateOpacity(), this;
      }, _updateOpacity: function() {
        var i = this.options.opacity;
        this._icon && Vn(this._icon, i), this._shadow && Vn(this._shadow, i);
      }, _bringToFront: function() {
        this._updateZIndex(this.options.riseOffset);
      }, _resetZIndex: function() {
        this._updateZIndex(0);
      }, _panOnFocus: function() {
        var i = this._map;
        if (i) {
          var s = this.options.icon.options, c = s.iconSize ? z(s.iconSize) : z(0, 0), m = s.iconAnchor ? z(s.iconAnchor) : z(0, 0);
          i.panInside(this._latlng, { paddingTopLeft: m, paddingBottomRight: c.subtract(m) });
        }
      }, _getPopupAnchor: function() {
        return this.options.icon.options.popupAnchor;
      }, _getTooltipAnchor: function() {
        return this.options.icon.options.tooltipAnchor;
      } });
      function gl(i, s) {
        return new jr(i, s);
      }
      var po = Mi.extend({ options: { stroke: true, color: "#3388ff", weight: 3, opacity: 1, lineCap: "round", lineJoin: "round", dashArray: null, dashOffset: null, fill: false, fillColor: null, fillOpacity: 0.2, fillRule: "evenodd", interactive: true, bubblingMouseEvents: true }, beforeAdd: function(i) {
        this._renderer = i.getRenderer(this);
      }, onAdd: function() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      }, onRemove: function() {
        this._renderer._removePath(this);
      }, redraw: function() {
        return this._map && this._renderer._updatePath(this), this;
      }, setStyle: function(i) {
        return O(this, i), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && i && Object.prototype.hasOwnProperty.call(i, "weight") && this._updateBounds()), this;
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
      } }), Oa = po.extend({ options: { fill: true, radius: 10 }, initialize: function(i, s) {
        O(this, s), this._latlng = ct(i), this._radius = this.options.radius;
      }, setLatLng: function(i) {
        var s = this._latlng;
        return this._latlng = ct(i), this.redraw(), this.fire("move", { oldLatLng: s, latlng: this._latlng });
      }, getLatLng: function() {
        return this._latlng;
      }, setRadius: function(i) {
        return this.options.radius = this._radius = i, this.redraw();
      }, getRadius: function() {
        return this._radius;
      }, setStyle: function(i) {
        var s = i && i.radius || this._radius;
        return po.prototype.setStyle.call(this, i), this.setRadius(s), this;
      }, _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      }, _updateBounds: function() {
        var i = this._radius, s = this._radiusY || i, c = this._clickTolerance(), m = [i + c, s + c];
        this._pxBounds = new q(this._point.subtract(m), this._point.add(m));
      }, _update: function() {
        this._map && this._updatePath();
      }, _updatePath: function() {
        this._renderer._updateCircle(this);
      }, _empty: function() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      }, _containsPoint: function(i) {
        return i.distanceTo(this._point) <= this._radius + this._clickTolerance();
      } });
      function Wu(i, s) {
        return new Oa(i, s);
      }
      var vl = Oa.extend({ initialize: function(i, s, c) {
        if (typeof s == "number" && (s = f({}, c, { radius: s })), O(this, s), this._latlng = ct(i), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      }, setRadius: function(i) {
        return this._mRadius = i, this.redraw();
      }, getRadius: function() {
        return this._mRadius;
      }, getBounds: function() {
        var i = [this._radius, this._radiusY || this._radius];
        return new dt(this._map.layerPointToLatLng(this._point.subtract(i)), this._map.layerPointToLatLng(this._point.add(i)));
      }, setStyle: po.prototype.setStyle, _project: function() {
        var i = this._latlng.lng, s = this._latlng.lat, c = this._map, m = c.options.crs;
        if (m.distance === Lt.distance) {
          var _ = Math.PI / 180, C = this._mRadius / Lt.R / _, j = c.project([s + C, i]), Y = c.project([s - C, i]), lt = j.add(Y).divideBy(2), St = c.unproject(lt).lat, Et = Math.acos((Math.cos(C * _) - Math.sin(s * _) * Math.sin(St * _)) / (Math.cos(s * _) * Math.cos(St * _))) / _;
          (isNaN(Et) || Et === 0) && (Et = C / Math.cos(Math.PI / 180 * s)), this._point = lt.subtract(c.getPixelOrigin()), this._radius = isNaN(Et) ? 0 : lt.x - c.project([St, i - Et]).x, this._radiusY = lt.y - j.y;
        } else {
          var kt = m.unproject(m.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = c.latLngToLayerPoint(this._latlng), this._radius = this._point.x - c.latLngToLayerPoint(kt).x;
        }
        this._updateBounds();
      } });
      function cd(i, s, c) {
        return new vl(i, s, c);
      }
      var mo = po.extend({ options: { smoothFactor: 1, noClip: false }, initialize: function(i, s) {
        O(this, s), this._setLatLngs(i);
      }, getLatLngs: function() {
        return this._latlngs;
      }, setLatLngs: function(i) {
        return this._setLatLngs(i), this.redraw();
      }, isEmpty: function() {
        return !this._latlngs.length;
      }, closestLayerPoint: function(i) {
        for (var s = 1 / 0, c = null, m = or, _, C, j = 0, Y = this._parts.length; j < Y; j++) for (var lt = this._parts[j], St = 1, Et = lt.length; St < Et; St++) {
          _ = lt[St - 1], C = lt[St];
          var kt = m(i, _, C, true);
          kt < s && (s = kt, c = m(i, _, C));
        }
        return c && (c.distance = Math.sqrt(s)), c;
      }, getCenter: function() {
        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
        return pl(this._defaultShape(), this._map.options.crs);
      }, getBounds: function() {
        return this._bounds;
      }, addLatLng: function(i, s) {
        return s = s || this._defaultShape(), i = ct(i), s.push(i), this._bounds.extend(i), this.redraw();
      }, _setLatLngs: function(i) {
        this._bounds = new dt(), this._latlngs = this._convertLatLngs(i);
      }, _defaultShape: function() {
        return An(this._latlngs) ? this._latlngs : this._latlngs[0];
      }, _convertLatLngs: function(i) {
        for (var s = [], c = An(i), m = 0, _ = i.length; m < _; m++) c ? (s[m] = ct(i[m]), this._bounds.extend(s[m])) : s[m] = this._convertLatLngs(i[m]);
        return s;
      }, _project: function() {
        var i = new q();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, i), this._bounds.isValid() && i.isValid() && (this._rawPxBounds = i, this._updateBounds());
      }, _updateBounds: function() {
        var i = this._clickTolerance(), s = new rt(i, i);
        this._rawPxBounds && (this._pxBounds = new q([this._rawPxBounds.min.subtract(s), this._rawPxBounds.max.add(s)]));
      }, _projectLatlngs: function(i, s, c) {
        var m = i[0] instanceof _t, _ = i.length, C, j;
        if (m) {
          for (j = [], C = 0; C < _; C++) j[C] = this._map.latLngToLayerPoint(i[C]), c.extend(j[C]);
          s.push(j);
        } else for (C = 0; C < _; C++) this._projectLatlngs(i[C], s, c);
      }, _clipPoints: function() {
        var i = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(i))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var s = this._parts, c, m, _, C, j, Y, lt;
          for (c = 0, _ = 0, C = this._rings.length; c < C; c++) for (lt = this._rings[c], m = 0, j = lt.length; m < j - 1; m++) Y = Vu(lt[m], lt[m + 1], i, m, true), Y && (s[_] = s[_] || [], s[_].push(Y[0]), (Y[1] !== lt[m + 1] || m === j - 2) && (s[_].push(Y[1]), _++));
        }
      }, _simplifyPoints: function() {
        for (var i = this._parts, s = this.options.smoothFactor, c = 0, m = i.length; c < m; c++) i[c] = Fu(i[c], s);
      }, _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      }, _updatePath: function() {
        this._renderer._updatePoly(this);
      }, _containsPoint: function(i, s) {
        var c, m, _, C, j, Y, lt = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(i)) return false;
        for (c = 0, C = this._parts.length; c < C; c++) for (Y = this._parts[c], m = 0, j = Y.length, _ = j - 1; m < j; _ = m++) if (!(!s && m === 0) && dl(i, Y[_], Y[m]) <= lt) return true;
        return false;
      } });
      function fd(i, s) {
        return new mo(i, s);
      }
      mo._flat = Gu;
      var Hr = mo.extend({ options: { fill: true }, isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      }, getCenter: function() {
        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
        return as(this._defaultShape(), this._map.options.crs);
      }, _convertLatLngs: function(i) {
        var s = mo.prototype._convertLatLngs.call(this, i), c = s.length;
        return c >= 2 && s[0] instanceof _t && s[0].equals(s[c - 1]) && s.pop(), s;
      }, _setLatLngs: function(i) {
        mo.prototype._setLatLngs.call(this, i), An(this._latlngs) && (this._latlngs = [this._latlngs]);
      }, _defaultShape: function() {
        return An(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      }, _clipPoints: function() {
        var i = this._renderer._bounds, s = this.options.weight, c = new rt(s, s);
        if (i = new q(i.min.subtract(c), i.max.add(c)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(i))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var m = 0, _ = this._rings.length, C; m < _; m++) C = Uu(this._rings[m], i, true), C.length && this._parts.push(C);
        }
      }, _updatePath: function() {
        this._renderer._updatePoly(this, true);
      }, _containsPoint: function(i) {
        var s = false, c, m, _, C, j, Y, lt, St;
        if (!this._pxBounds || !this._pxBounds.contains(i)) return false;
        for (C = 0, lt = this._parts.length; C < lt; C++) for (c = this._parts[C], j = 0, St = c.length, Y = St - 1; j < St; Y = j++) m = c[j], _ = c[Y], m.y > i.y != _.y > i.y && i.x < (_.x - m.x) * (i.y - m.y) / (_.y - m.y) + m.x && (s = !s);
        return s || mo.prototype._containsPoint.call(this, i, true);
      } });
      function oi(i, s) {
        return new Hr(i, s);
      }
      var ri = ii.extend({ initialize: function(i, s) {
        O(this, s), this._layers = {}, i && this.addData(i);
      }, addData: function(i) {
        var s = D(i) ? i : i.features, c, m, _;
        if (s) {
          for (c = 0, m = s.length; c < m; c++) _ = s[c], (_.geometries || _.geometry || _.features || _.coordinates) && this.addData(_);
          return this;
        }
        var C = this.options;
        if (C.filter && !C.filter(i)) return this;
        var j = Aa(i, C);
        return j ? (j.feature = Ur(i), j.defaultOptions = j.options, this.resetStyle(j), C.onEachFeature && C.onEachFeature(i, j), this.addLayer(j)) : this;
      }, resetStyle: function(i) {
        return i === void 0 ? this.eachLayer(this.resetStyle, this) : (i.options = f({}, i.defaultOptions), this._setLayerStyle(i, this.options.style), this);
      }, setStyle: function(i) {
        return this.eachLayer(function(s) {
          this._setLayerStyle(s, i);
        }, this);
      }, _setLayerStyle: function(i, s) {
        i.setStyle && (typeof s == "function" && (s = s(i.feature)), i.setStyle(s));
      } });
      function Aa(i, s) {
        var c = i.type === "Feature" ? i.geometry : i, m = c ? c.coordinates : null, _ = [], C = s && s.pointToLayer, j = s && s.coordsToLatLng || fs, Y, lt, St, Et;
        if (!m && !c) return null;
        switch (c.type) {
          case "Point":
            return Y = j(m), yl(C, i, Y, s);
          case "MultiPoint":
            for (St = 0, Et = m.length; St < Et; St++) Y = j(m[St]), _.push(yl(C, i, Y, s));
            return new ii(_);
          case "LineString":
          case "MultiLineString":
            return lt = Ra(m, c.type === "LineString" ? 0 : 1, j), new mo(lt, s);
          case "Polygon":
          case "MultiPolygon":
            return lt = Ra(m, c.type === "Polygon" ? 1 : 2, j), new Hr(lt, s);
          case "GeometryCollection":
            for (St = 0, Et = c.geometries.length; St < Et; St++) {
              var kt = Aa({ geometry: c.geometries[St], type: "Feature", properties: i.properties }, s);
              kt && _.push(kt);
            }
            return new ii(_);
          case "FeatureCollection":
            for (St = 0, Et = c.features.length; St < Et; St++) {
              var Nt = Aa(c.features[St], s);
              Nt && _.push(Nt);
            }
            return new ii(_);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function yl(i, s, c, m) {
        return i ? i(s, c) : new jr(c, m && m.markersInheritOptions && m);
      }
      function fs(i) {
        return new _t(i[1], i[0], i[2]);
      }
      function Ra(i, s, c) {
        for (var m = [], _ = 0, C = i.length, j; _ < C; _++) j = s ? Ra(i[_], s - 1, c) : (c || fs)(i[_]), m.push(j);
        return m;
      }
      function ka(i, s) {
        return i = ct(i), i.alt !== void 0 ? [R(i.lng, s), R(i.lat, s), R(i.alt, s)] : [R(i.lng, s), R(i.lat, s)];
      }
      function ds(i, s, c, m) {
        for (var _ = [], C = 0, j = i.length; C < j; C++) _.push(s ? ds(i[C], An(i[C]) ? 0 : s - 1, c, m) : ka(i[C], m));
        return !s && c && _.length > 0 && _.push(_[0].slice()), _;
      }
      function Oi(i, s) {
        return i.feature ? f({}, i.feature, { geometry: s }) : Ur(s);
      }
      function Ur(i) {
        return i.type === "Feature" || i.type === "FeatureCollection" ? i : { type: "Feature", properties: {}, geometry: i };
      }
      var ar = { toGeoJSON: function(i) {
        return Oi(this, { type: "Point", coordinates: ka(this.getLatLng(), i) });
      } };
      jr.include(ar), vl.include(ar), Oa.include(ar), mo.include({ toGeoJSON: function(i) {
        var s = !An(this._latlngs), c = ds(this._latlngs, s ? 1 : 0, false, i);
        return Oi(this, { type: (s ? "Multi" : "") + "LineString", coordinates: c });
      } }), Hr.include({ toGeoJSON: function(i) {
        var s = !An(this._latlngs), c = s && !An(this._latlngs[0]), m = ds(this._latlngs, c ? 2 : s ? 1 : 0, true, i);
        return s || (m = [m]), Oi(this, { type: (c ? "Multi" : "") + "Polygon", coordinates: m });
      } }), rr.include({ toMultiPoint: function(i) {
        var s = [];
        return this.eachLayer(function(c) {
          s.push(c.toGeoJSON(i).geometry.coordinates);
        }), Oi(this, { type: "MultiPoint", coordinates: s });
      }, toGeoJSON: function(i) {
        var s = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (s === "MultiPoint") return this.toMultiPoint(i);
        var c = s === "GeometryCollection", m = [];
        return this.eachLayer(function(_) {
          if (_.toGeoJSON) {
            var C = _.toGeoJSON(i);
            if (c) m.push(C.geometry);
            else {
              var j = Ur(C);
              j.type === "FeatureCollection" ? m.push.apply(m, j.features) : m.push(j);
            }
          }
        }), c ? Oi(this, { geometries: m, type: "GeometryCollection" }) : { type: "FeatureCollection", features: m };
      } });
      function hs(i, s) {
        return new ri(i, s);
      }
      var Qu = hs, Ki = Mi.extend({ options: { opacity: 1, alt: "", interactive: false, crossOrigin: false, errorOverlayUrl: "", zIndex: 1, className: "" }, initialize: function(i, s, c) {
        this._url = i, this._bounds = bt(s), O(this, c);
      }, onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (ee(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      }, onRemove: function() {
        Ye(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      }, setOpacity: function(i) {
        return this.options.opacity = i, this._image && this._updateOpacity(), this;
      }, setStyle: function(i) {
        return i.opacity && this.setOpacity(i.opacity), this;
      }, bringToFront: function() {
        return this._map && Qo(this._image), this;
      }, bringToBack: function() {
        return this._map && Or(this._image), this;
      }, setUrl: function(i) {
        return this._url = i, this._image && (this._image.src = i), this;
      }, setBounds: function(i) {
        return this._bounds = bt(i), this._map && this._reset(), this;
      }, getEvents: function() {
        var i = { zoom: this._reset, viewreset: this._reset };
        return this._zoomAnimated && (i.zoomanim = this._animateZoom), i;
      }, setZIndex: function(i) {
        return this.options.zIndex = i, this._updateZIndex(), this;
      }, getBounds: function() {
        return this._bounds;
      }, getElement: function() {
        return this._image;
      }, _initImage: function() {
        var i = this._url.tagName === "IMG", s = this._image = i ? this._url : Se("img");
        if (ee(s, "leaflet-image-layer"), this._zoomAnimated && ee(s, "leaflet-zoom-animated"), this.options.className && ee(s, this.options.className), s.onselectstart = E, s.onmousemove = E, s.onload = g(this.fire, this, "load"), s.onerror = g(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (s.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), i) {
          this._url = s.src;
          return;
        }
        s.src = this._url, s.alt = this.options.alt;
      }, _animateZoom: function(i) {
        var s = this._map.getZoomScale(i.zoom), c = this._map._latLngBoundsToNewLayerBounds(this._bounds, i.zoom, i.center).min;
        gi(this._image, c, s);
      }, _reset: function() {
        var i = this._image, s = new q(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())), c = s.getSize();
        sn(i, s.min), i.style.width = c.x + "px", i.style.height = c.y + "px";
      }, _updateOpacity: function() {
        Vn(this._image, this.options.opacity);
      }, _updateZIndex: function() {
        this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
      }, _overlayOnError: function() {
        this.fire("error");
        var i = this.options.errorOverlayUrl;
        i && this._url !== i && (this._url = i, this._image.src = i);
      }, getCenter: function() {
        return this._bounds.getCenter();
      } }), Fr = function(i, s, c) {
        return new Ki(i, s, c);
      }, ps = Ki.extend({ options: { autoplay: true, loop: true, keepAspectRatio: true, muted: false, playsInline: true }, _initImage: function() {
        var i = this._url.tagName === "VIDEO", s = this._image = i ? this._url : Se("video");
        if (ee(s, "leaflet-image-layer"), this._zoomAnimated && ee(s, "leaflet-zoom-animated"), this.options.className && ee(s, this.options.className), s.onselectstart = E, s.onmousemove = E, s.onloadeddata = g(this.fire, this, "load"), i) {
          for (var c = s.getElementsByTagName("source"), m = [], _ = 0; _ < c.length; _++) m.push(c[_].src);
          this._url = c.length > 0 ? m : [s.src];
          return;
        }
        D(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(s.style, "objectFit") && (s.style.objectFit = "fill"), s.autoplay = !!this.options.autoplay, s.loop = !!this.options.loop, s.muted = !!this.options.muted, s.playsInline = !!this.options.playsInline;
        for (var C = 0; C < this._url.length; C++) {
          var j = Se("source");
          j.src = this._url[C], s.appendChild(j);
        }
      } });
      function Ju(i, s, c) {
        return new ps(i, s, c);
      }
      var Ro = Ki.extend({ _initImage: function() {
        var i = this._image = this._url;
        ee(i, "leaflet-image-layer"), this._zoomAnimated && ee(i, "leaflet-zoom-animated"), this.options.className && ee(i, this.options.className), i.onselectstart = E, i.onmousemove = E;
      } });
      function tc(i, s, c) {
        return new Ro(i, s, c);
      }
      var Ai = Mi.extend({ options: { interactive: false, offset: [0, 0], className: "", pane: void 0, content: "" }, initialize: function(i, s) {
        i && (i instanceof _t || D(i)) ? (this._latlng = ct(i), O(this, s)) : (O(this, i), this._source = s), this.options.content && (this._content = this.options.content);
      }, openOn: function(i) {
        return i = arguments.length ? i : this._source._map, i.hasLayer(this) || i.addLayer(this), this;
      }, close: function() {
        return this._map && this._map.removeLayer(this), this;
      }, toggle: function(i) {
        return this._map ? this.close() : (arguments.length ? this._source = i : i = this._source, this._prepareOpen(), this.openOn(i._map)), this;
      }, onAdd: function(i) {
        this._zoomAnimated = i._zoomAnimated, this._container || this._initLayout(), i._fadeAnimated && Vn(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), i._fadeAnimated && Vn(this._container, 1), this.bringToFront(), this.options.interactive && (ee(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      }, onRemove: function(i) {
        i._fadeAnimated ? (Vn(this._container, 0), this._removeTimeout = setTimeout(g(Ye, void 0, this._container), 200)) : Ye(this._container), this.options.interactive && (Ke(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
      }, getLatLng: function() {
        return this._latlng;
      }, setLatLng: function(i) {
        return this._latlng = ct(i), this._map && (this._updatePosition(), this._adjustPan()), this;
      }, getContent: function() {
        return this._content;
      }, setContent: function(i) {
        return this._content = i, this.update(), this;
      }, getElement: function() {
        return this._container;
      }, update: function() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      }, getEvents: function() {
        var i = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (i.zoomanim = this._animateZoom), i;
      }, isOpen: function() {
        return !!this._map && this._map.hasLayer(this);
      }, bringToFront: function() {
        return this._map && Qo(this._container), this;
      }, bringToBack: function() {
        return this._map && Or(this._container), this;
      }, _prepareOpen: function(i) {
        var s = this._source;
        if (!s._map) return false;
        if (s instanceof ii) {
          s = null;
          var c = this._source._layers;
          for (var m in c) if (c[m]._map) {
            s = c[m];
            break;
          }
          if (!s) return false;
          this._source = s;
        }
        if (!i) if (s.getCenter) i = s.getCenter();
        else if (s.getLatLng) i = s.getLatLng();
        else if (s.getBounds) i = s.getBounds().getCenter();
        else throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(i), this._map && this.update(), true;
      }, _updateContent: function() {
        if (this._content) {
          var i = this._contentNode, s = typeof this._content == "function" ? this._content(this._source || this) : this._content;
          if (typeof s == "string") i.innerHTML = s;
          else {
            for (; i.hasChildNodes(); ) i.removeChild(i.firstChild);
            i.appendChild(s);
          }
          this.fire("contentupdate");
        }
      }, _updatePosition: function() {
        if (this._map) {
          var i = this._map.latLngToLayerPoint(this._latlng), s = z(this.options.offset), c = this._getAnchor();
          this._zoomAnimated ? sn(this._container, i.add(c)) : s = s.add(i).add(c);
          var m = this._containerBottom = -s.y, _ = this._containerLeft = -Math.round(this._containerWidth / 2) + s.x;
          this._container.style.bottom = m + "px", this._container.style.left = _ + "px";
        }
      }, _getAnchor: function() {
        return [0, 0];
      } });
      pe.include({ _initOverlay: function(i, s, c, m) {
        var _ = s;
        return _ instanceof i || (_ = new i(m).setContent(s)), c && _.setLatLng(c), _;
      } }), Mi.include({ _initOverlay: function(i, s, c, m) {
        var _ = c;
        return _ instanceof i ? (O(_, m), _._source = this) : (_ = s && !m ? s : new i(m, this), _.setContent(c)), _;
      } });
      var La = Ai.extend({ options: { pane: "popupPane", offset: [0, 7], maxWidth: 300, minWidth: 50, maxHeight: null, autoPan: true, autoPanPaddingTopLeft: null, autoPanPaddingBottomRight: null, autoPanPadding: [5, 5], keepInView: false, closeButton: true, autoClose: true, closeOnEscapeKey: true, className: "" }, openOn: function(i) {
        return i = arguments.length ? i : this._source._map, !i.hasLayer(this) && i._popup && i._popup.options.autoClose && i.removeLayer(i._popup), i._popup = this, Ai.prototype.openOn.call(this, i);
      }, onAdd: function(i) {
        Ai.prototype.onAdd.call(this, i), i.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, true), this._source instanceof po || this._source.on("preclick", ho));
      }, onRemove: function(i) {
        Ai.prototype.onRemove.call(this, i), i.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, true), this._source instanceof po || this._source.off("preclick", ho));
      }, getEvents: function() {
        var i = Ai.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (i.preclick = this.close), this.options.keepInView && (i.moveend = this._adjustPan), i;
      }, _initLayout: function() {
        var i = "leaflet-popup", s = this._container = Se("div", i + " " + (this.options.className || "") + " leaflet-zoom-animated"), c = this._wrapper = Se("div", i + "-content-wrapper", s);
        if (this._contentNode = Se("div", i + "-content", c), Br(s), Pr(this._contentNode), Qt(s, "contextmenu", ho), this._tipContainer = Se("div", i + "-tip-container", s), this._tip = Se("div", i + "-tip", this._tipContainer), this.options.closeButton) {
          var m = this._closeButton = Se("a", i + "-close-button", s);
          m.setAttribute("role", "button"), m.setAttribute("aria-label", "Close popup"), m.href = "#close", m.innerHTML = '<span aria-hidden="true">&#215;</span>', Qt(m, "click", function(_) {
            dn(_), this.close();
          }, this);
        }
      }, _updateLayout: function() {
        var i = this._contentNode, s = i.style;
        s.width = "", s.whiteSpace = "nowrap";
        var c = i.offsetWidth;
        c = Math.min(c, this.options.maxWidth), c = Math.max(c, this.options.minWidth), s.width = c + 1 + "px", s.whiteSpace = "", s.height = "";
        var m = i.offsetHeight, _ = this.options.maxHeight, C = "leaflet-popup-scrolled";
        _ && m > _ ? (s.height = _ + "px", ee(i, C)) : Ke(i, C), this._containerWidth = this._container.offsetWidth;
      }, _animateZoom: function(i) {
        var s = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center), c = this._getAnchor();
        sn(this._container, s.add(c));
      }, _adjustPan: function() {
        if (this.options.autoPan) {
          if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
            this._autopanning = false;
            return;
          }
          var i = this._map, s = parseInt(ni(this._container, "marginBottom"), 10) || 0, c = this._container.offsetHeight + s, m = this._containerWidth, _ = new rt(this._containerLeft, -c - this._containerBottom);
          _._add(Mo(this._container));
          var C = i.layerPointToContainerPoint(_), j = z(this.options.autoPanPadding), Y = z(this.options.autoPanPaddingTopLeft || j), lt = z(this.options.autoPanPaddingBottomRight || j), St = i.getSize(), Et = 0, kt = 0;
          C.x + m + lt.x > St.x && (Et = C.x + m - St.x + lt.x), C.x - Et - Y.x < 0 && (Et = C.x - Y.x), C.y + c + lt.y > St.y && (kt = C.y + c - St.y + lt.y), C.y - kt - Y.y < 0 && (kt = C.y - Y.y), (Et || kt) && (this.options.keepInView && (this._autopanning = true), i.fire("autopanstart").panBy([Et, kt]));
        }
      }, _getAnchor: function() {
        return z(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      } }), dd = function(i, s) {
        return new La(i, s);
      };
      pe.mergeOptions({ closePopupOnClick: true }), pe.include({ openPopup: function(i, s, c) {
        return this._initOverlay(La, i, s, c).openOn(this), this;
      }, closePopup: function(i) {
        return i = arguments.length ? i : this._popup, i && i.close(), this;
      } }), Mi.include({ bindPopup: function(i, s) {
        return this._popup = this._initOverlay(La, this._popup, i, s), this._popupHandlersAdded || (this.on({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = true), this;
      }, unbindPopup: function() {
        return this._popup && (this.off({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = false, this._popup = null), this;
      }, openPopup: function(i) {
        return this._popup && (this instanceof ii || (this._popup._source = this), this._popup._prepareOpen(i || this._latlng) && this._popup.openOn(this._map)), this;
      }, closePopup: function() {
        return this._popup && this._popup.close(), this;
      }, togglePopup: function() {
        return this._popup && this._popup.toggle(this), this;
      }, isPopupOpen: function() {
        return this._popup ? this._popup.isOpen() : false;
      }, setPopupContent: function(i) {
        return this._popup && this._popup.setContent(i), this;
      }, getPopup: function() {
        return this._popup;
      }, _openPopup: function(i) {
        if (!(!this._popup || !this._map)) {
          Yi(i);
          var s = i.layer || i.target;
          if (this._popup._source === s && !(s instanceof po)) {
            this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(i.latlng);
            return;
          }
          this._popup._source = s, this.openPopup(i.latlng);
        }
      }, _movePopup: function(i) {
        this._popup.setLatLng(i.latlng);
      }, _onKeyPress: function(i) {
        i.originalEvent.keyCode === 13 && this._openPopup(i);
      } });
      var ms = Ai.extend({ options: { pane: "tooltipPane", offset: [0, 0], direction: "auto", permanent: false, sticky: false, opacity: 0.9 }, onAdd: function(i) {
        Ai.prototype.onAdd.call(this, i), this.setOpacity(this.options.opacity), i.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, true));
      }, onRemove: function(i) {
        Ai.prototype.onRemove.call(this, i), i.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, true));
      }, getEvents: function() {
        var i = Ai.prototype.getEvents.call(this);
        return this.options.permanent || (i.preclick = this.close), i;
      }, _initLayout: function() {
        var i = "leaflet-tooltip", s = i + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = Se("div", s), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + y(this));
      }, _updateLayout: function() {
      }, _adjustPan: function() {
      }, _setPosition: function(i) {
        var s, c, m = this._map, _ = this._container, C = m.latLngToContainerPoint(m.getCenter()), j = m.layerPointToContainerPoint(i), Y = this.options.direction, lt = _.offsetWidth, St = _.offsetHeight, Et = z(this.options.offset), kt = this._getAnchor();
        Y === "top" ? (s = lt / 2, c = St) : Y === "bottom" ? (s = lt / 2, c = 0) : Y === "center" ? (s = lt / 2, c = St / 2) : Y === "right" ? (s = 0, c = St / 2) : Y === "left" ? (s = lt, c = St / 2) : j.x < C.x ? (Y = "right", s = 0, c = St / 2) : (Y = "left", s = lt + (Et.x + kt.x) * 2, c = St / 2), i = i.subtract(z(s, c, true)).add(Et).add(kt), Ke(_, "leaflet-tooltip-right"), Ke(_, "leaflet-tooltip-left"), Ke(_, "leaflet-tooltip-top"), Ke(_, "leaflet-tooltip-bottom"), ee(_, "leaflet-tooltip-" + Y), sn(_, i);
      }, _updatePosition: function() {
        var i = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(i);
      }, setOpacity: function(i) {
        this.options.opacity = i, this._container && Vn(this._container, i);
      }, _animateZoom: function(i) {
        var s = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center);
        this._setPosition(s);
      }, _getAnchor: function() {
        return z(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      } }), hd = function(i, s) {
        return new ms(i, s);
      };
      pe.include({ openTooltip: function(i, s, c) {
        return this._initOverlay(ms, i, s, c).openOn(this), this;
      }, closeTooltip: function(i) {
        return i.close(), this;
      } }), Mi.include({ bindTooltip: function(i, s) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(ms, this._tooltip, i, s), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      }, unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(true), this.closeTooltip(), this._tooltip = null), this;
      }, _initTooltipInteractions: function(i) {
        if (!(!i && this._tooltipHandlersAdded)) {
          var s = i ? "off" : "on", c = { remove: this.closeTooltip, move: this._moveTooltip };
          this._tooltip.options.permanent ? c.add = this._openTooltip : (c.mouseover = this._openTooltip, c.mouseout = this.closeTooltip, c.click = this._openTooltip, this._map ? this._addFocusListeners() : c.add = this._addFocusListeners), this._tooltip.options.sticky && (c.mousemove = this._moveTooltip), this[s](c), this._tooltipHandlersAdded = !i;
        }
      }, openTooltip: function(i) {
        return this._tooltip && (this instanceof ii || (this._tooltip._source = this), this._tooltip._prepareOpen(i) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
      }, closeTooltip: function() {
        if (this._tooltip) return this._tooltip.close();
      }, toggleTooltip: function() {
        return this._tooltip && this._tooltip.toggle(this), this;
      }, isTooltipOpen: function() {
        return this._tooltip.isOpen();
      }, setTooltipContent: function(i) {
        return this._tooltip && this._tooltip.setContent(i), this;
      }, getTooltip: function() {
        return this._tooltip;
      }, _addFocusListeners: function() {
        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
      }, _addFocusListenersOnLayer: function(i) {
        var s = typeof i.getElement == "function" && i.getElement();
        s && (Qt(s, "focus", function() {
          this._tooltip._source = i, this.openTooltip();
        }, this), Qt(s, "blur", this.closeTooltip, this));
      }, _setAriaDescribedByOnLayer: function(i) {
        var s = typeof i.getElement == "function" && i.getElement();
        s && s.setAttribute("aria-describedby", this._tooltip._container.id);
      }, _openTooltip: function(i) {
        if (!(!this._tooltip || !this._map)) {
          if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
            this._openOnceFlag = true;
            var s = this;
            this._map.once("moveend", function() {
              s._openOnceFlag = false, s._openTooltip(i);
            });
            return;
          }
          this._tooltip._source = i.layer || i.target, this.openTooltip(this._tooltip.options.sticky ? i.latlng : void 0);
        }
      }, _moveTooltip: function(i) {
        var s = i.latlng, c, m;
        this._tooltip.options.sticky && i.originalEvent && (c = this._map.mouseEventToContainerPoint(i.originalEvent), m = this._map.containerPointToLayerPoint(c), s = this._map.layerPointToLatLng(m)), this._tooltip.setLatLng(s);
      } });
      var _l = $r.extend({ options: { iconSize: [12, 12], html: false, bgPos: null, className: "leaflet-div-icon" }, createIcon: function(i) {
        var s = i && i.tagName === "DIV" ? i : document.createElement("div"), c = this.options;
        if (c.html instanceof Element ? (Dn(s), s.appendChild(c.html)) : s.innerHTML = c.html !== false ? c.html : "", c.bgPos) {
          var m = z(c.bgPos);
          s.style.backgroundPosition = -m.x + "px " + -m.y + "px";
        }
        return this._setIconStyles(s, "icon"), s;
      }, createShadow: function() {
        return null;
      } });
      function ec(i) {
        return new _l(i);
      }
      $r.Default = Ir;
      var sr = Mi.extend({ options: { tileSize: 256, opacity: 1, updateWhenIdle: Dt.mobile, updateWhenZooming: true, updateInterval: 200, zIndex: 1, bounds: null, minZoom: 0, maxZoom: void 0, maxNativeZoom: void 0, minNativeZoom: void 0, noWrap: false, pane: "tilePane", className: "", keepBuffer: 2 }, initialize: function(i) {
        O(this, i);
      }, onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
      }, beforeAdd: function(i) {
        i._addZoomLimit(this);
      }, onRemove: function(i) {
        this._removeAllTiles(), Ye(this._container), i._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      }, bringToFront: function() {
        return this._map && (Qo(this._container), this._setAutoZIndex(Math.max)), this;
      }, bringToBack: function() {
        return this._map && (Or(this._container), this._setAutoZIndex(Math.min)), this;
      }, getContainer: function() {
        return this._container;
      }, setOpacity: function(i) {
        return this.options.opacity = i, this._updateOpacity(), this;
      }, setZIndex: function(i) {
        return this.options.zIndex = i, this._updateZIndex(), this;
      }, isLoading: function() {
        return this._loading;
      }, redraw: function() {
        if (this._map) {
          this._removeAllTiles();
          var i = this._clampZoom(this._map.getZoom());
          i !== this._tileZoom && (this._tileZoom = i, this._updateLevels()), this._update();
        }
        return this;
      }, getEvents: function() {
        var i = { viewprereset: this._invalidateAll, viewreset: this._resetView, zoom: this._resetView, moveend: this._onMoveEnd };
        return this.options.updateWhenIdle || (this._onMove || (this._onMove = b(this._onMoveEnd, this.options.updateInterval, this)), i.move = this._onMove), this._zoomAnimated && (i.zoomanim = this._animateZoom), i;
      }, createTile: function() {
        return document.createElement("div");
      }, getTileSize: function() {
        var i = this.options.tileSize;
        return i instanceof rt ? i : new rt(i, i);
      }, _updateZIndex: function() {
        this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
      }, _setAutoZIndex: function(i) {
        for (var s = this.getPane().children, c = -i(-1 / 0, 1 / 0), m = 0, _ = s.length, C; m < _; m++) C = s[m].style.zIndex, s[m] !== this._container && C && (c = i(c, +C));
        isFinite(c) && (this.options.zIndex = c + i(-1, 1), this._updateZIndex());
      }, _updateOpacity: function() {
        if (this._map && !Dt.ielt9) {
          Vn(this._container, this.options.opacity);
          var i = +/* @__PURE__ */ new Date(), s = false, c = false;
          for (var m in this._tiles) {
            var _ = this._tiles[m];
            if (!(!_.current || !_.loaded)) {
              var C = Math.min(1, (i - _.loaded) / 200);
              Vn(_.el, C), C < 1 ? s = true : (_.active ? c = true : this._onOpaqueTile(_), _.active = true);
            }
          }
          c && !this._noPrune && this._pruneTiles(), s && (w(this._fadeFrame), this._fadeFrame = ot(this._updateOpacity, this));
        }
      }, _onOpaqueTile: E, _initContainer: function() {
        this._container || (this._container = Se("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      }, _updateLevels: function() {
        var i = this._tileZoom, s = this.options.maxZoom;
        if (i !== void 0) {
          for (var c in this._levels) c = Number(c), this._levels[c].el.children.length || c === i ? (this._levels[c].el.style.zIndex = s - Math.abs(i - c), this._onUpdateLevel(c)) : (Ye(this._levels[c].el), this._removeTilesAtZoom(c), this._onRemoveLevel(c), delete this._levels[c]);
          var m = this._levels[i], _ = this._map;
          return m || (m = this._levels[i] = {}, m.el = Se("div", "leaflet-tile-container leaflet-zoom-animated", this._container), m.el.style.zIndex = s, m.origin = _.project(_.unproject(_.getPixelOrigin()), i).round(), m.zoom = i, this._setZoomTransform(m, _.getCenter(), _.getZoom()), E(m.el.offsetWidth), this._onCreateLevel(m)), this._level = m, m;
        }
      }, _onUpdateLevel: E, _onRemoveLevel: E, _onCreateLevel: E, _pruneTiles: function() {
        if (this._map) {
          var i, s, c = this._map.getZoom();
          if (c > this.options.maxZoom || c < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (i in this._tiles) s = this._tiles[i], s.retain = s.current;
          for (i in this._tiles) if (s = this._tiles[i], s.current && !s.active) {
            var m = s.coords;
            this._retainParent(m.x, m.y, m.z, m.z - 5) || this._retainChildren(m.x, m.y, m.z, m.z + 2);
          }
          for (i in this._tiles) this._tiles[i].retain || this._removeTile(i);
        }
      }, _removeTilesAtZoom: function(i) {
        for (var s in this._tiles) this._tiles[s].coords.z === i && this._removeTile(s);
      }, _removeAllTiles: function() {
        for (var i in this._tiles) this._removeTile(i);
      }, _invalidateAll: function() {
        for (var i in this._levels) Ye(this._levels[i].el), this._onRemoveLevel(Number(i)), delete this._levels[i];
        this._removeAllTiles(), this._tileZoom = void 0;
      }, _retainParent: function(i, s, c, m) {
        var _ = Math.floor(i / 2), C = Math.floor(s / 2), j = c - 1, Y = new rt(+_, +C);
        Y.z = +j;
        var lt = this._tileCoordsToKey(Y), St = this._tiles[lt];
        return St && St.active ? (St.retain = true, true) : (St && St.loaded && (St.retain = true), j > m ? this._retainParent(_, C, j, m) : false);
      }, _retainChildren: function(i, s, c, m) {
        for (var _ = 2 * i; _ < 2 * i + 2; _++) for (var C = 2 * s; C < 2 * s + 2; C++) {
          var j = new rt(_, C);
          j.z = c + 1;
          var Y = this._tileCoordsToKey(j), lt = this._tiles[Y];
          if (lt && lt.active) {
            lt.retain = true;
            continue;
          } else lt && lt.loaded && (lt.retain = true);
          c + 1 < m && this._retainChildren(_, C, c + 1, m);
        }
      }, _resetView: function(i) {
        var s = i && (i.pinch || i.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), s, s);
      }, _animateZoom: function(i) {
        this._setView(i.center, i.zoom, true, i.noUpdate);
      }, _clampZoom: function(i) {
        var s = this.options;
        return s.minNativeZoom !== void 0 && i < s.minNativeZoom ? s.minNativeZoom : s.maxNativeZoom !== void 0 && s.maxNativeZoom < i ? s.maxNativeZoom : i;
      }, _setView: function(i, s, c, m) {
        var _ = Math.round(s);
        this.options.maxZoom !== void 0 && _ > this.options.maxZoom || this.options.minZoom !== void 0 && _ < this.options.minZoom ? _ = void 0 : _ = this._clampZoom(_);
        var C = this.options.updateWhenZooming && _ !== this._tileZoom;
        (!m || C) && (this._tileZoom = _, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), _ !== void 0 && this._update(i), c || this._pruneTiles(), this._noPrune = !!c), this._setZoomTransforms(i, s);
      }, _setZoomTransforms: function(i, s) {
        for (var c in this._levels) this._setZoomTransform(this._levels[c], i, s);
      }, _setZoomTransform: function(i, s, c) {
        var m = this._map.getZoomScale(c, i.zoom), _ = i.origin.multiplyBy(m).subtract(this._map._getNewPixelOrigin(s, c)).round();
        Dt.any3d ? gi(i.el, _, m) : sn(i.el, _);
      }, _resetGrid: function() {
        var i = this._map, s = i.options.crs, c = this._tileSize = this.getTileSize(), m = this._tileZoom, _ = this._map.getPixelWorldBounds(this._tileZoom);
        _ && (this._globalTileRange = this._pxBoundsToTileRange(_)), this._wrapX = s.wrapLng && !this.options.noWrap && [Math.floor(i.project([0, s.wrapLng[0]], m).x / c.x), Math.ceil(i.project([0, s.wrapLng[1]], m).x / c.y)], this._wrapY = s.wrapLat && !this.options.noWrap && [Math.floor(i.project([s.wrapLat[0], 0], m).y / c.x), Math.ceil(i.project([s.wrapLat[1], 0], m).y / c.y)];
      }, _onMoveEnd: function() {
        !this._map || this._map._animatingZoom || this._update();
      }, _getTiledPixelBounds: function(i) {
        var s = this._map, c = s._animatingZoom ? Math.max(s._animateToZoom, s.getZoom()) : s.getZoom(), m = s.getZoomScale(c, this._tileZoom), _ = s.project(i, this._tileZoom).floor(), C = s.getSize().divideBy(m * 2);
        return new q(_.subtract(C), _.add(C));
      }, _update: function(i) {
        var s = this._map;
        if (s) {
          var c = this._clampZoom(s.getZoom());
          if (i === void 0 && (i = s.getCenter()), this._tileZoom !== void 0) {
            var m = this._getTiledPixelBounds(i), _ = this._pxBoundsToTileRange(m), C = _.getCenter(), j = [], Y = this.options.keepBuffer, lt = new q(_.getBottomLeft().subtract([Y, -Y]), _.getTopRight().add([Y, -Y]));
            if (!(isFinite(_.min.x) && isFinite(_.min.y) && isFinite(_.max.x) && isFinite(_.max.y))) throw new Error("Attempted to load an infinite number of tiles");
            for (var St in this._tiles) {
              var Et = this._tiles[St].coords;
              (Et.z !== this._tileZoom || !lt.contains(new rt(Et.x, Et.y))) && (this._tiles[St].current = false);
            }
            if (Math.abs(c - this._tileZoom) > 1) {
              this._setView(i, c);
              return;
            }
            for (var kt = _.min.y; kt <= _.max.y; kt++) for (var Nt = _.min.x; Nt <= _.max.x; Nt++) {
              var Xt = new rt(Nt, kt);
              if (Xt.z = this._tileZoom, !!this._isValidTile(Xt)) {
                var Xe = this._tiles[this._tileCoordsToKey(Xt)];
                Xe ? Xe.current = true : j.push(Xt);
              }
            }
            if (j.sort(function(Rn, vi) {
              return Rn.distanceTo(C) - vi.distanceTo(C);
            }), j.length !== 0) {
              this._loading || (this._loading = true, this.fire("loading"));
              var ln = document.createDocumentFragment();
              for (Nt = 0; Nt < j.length; Nt++) this._addTile(j[Nt], ln);
              this._level.el.appendChild(ln);
            }
          }
        }
      }, _isValidTile: function(i) {
        var s = this._map.options.crs;
        if (!s.infinite) {
          var c = this._globalTileRange;
          if (!s.wrapLng && (i.x < c.min.x || i.x > c.max.x) || !s.wrapLat && (i.y < c.min.y || i.y > c.max.y)) return false;
        }
        if (!this.options.bounds) return true;
        var m = this._tileCoordsToBounds(i);
        return bt(this.options.bounds).overlaps(m);
      }, _keyToBounds: function(i) {
        return this._tileCoordsToBounds(this._keyToTileCoords(i));
      }, _tileCoordsToNwSe: function(i) {
        var s = this._map, c = this.getTileSize(), m = i.scaleBy(c), _ = m.add(c), C = s.unproject(m, i.z), j = s.unproject(_, i.z);
        return [C, j];
      }, _tileCoordsToBounds: function(i) {
        var s = this._tileCoordsToNwSe(i), c = new dt(s[0], s[1]);
        return this.options.noWrap || (c = this._map.wrapLatLngBounds(c)), c;
      }, _tileCoordsToKey: function(i) {
        return i.x + ":" + i.y + ":" + i.z;
      }, _keyToTileCoords: function(i) {
        var s = i.split(":"), c = new rt(+s[0], +s[1]);
        return c.z = +s[2], c;
      }, _removeTile: function(i) {
        var s = this._tiles[i];
        s && (Ye(s.el), delete this._tiles[i], this.fire("tileunload", { tile: s.el, coords: this._keyToTileCoords(i) }));
      }, _initTile: function(i) {
        ee(i, "leaflet-tile");
        var s = this.getTileSize();
        i.style.width = s.x + "px", i.style.height = s.y + "px", i.onselectstart = E, i.onmousemove = E, Dt.ielt9 && this.options.opacity < 1 && Vn(i, this.options.opacity);
      }, _addTile: function(i, s) {
        var c = this._getTilePos(i), m = this._tileCoordsToKey(i), _ = this.createTile(this._wrapCoords(i), g(this._tileReady, this, i));
        this._initTile(_), this.createTile.length < 2 && ot(g(this._tileReady, this, i, null, _)), sn(_, c), this._tiles[m] = { el: _, coords: i, current: true }, s.appendChild(_), this.fire("tileloadstart", { tile: _, coords: i });
      }, _tileReady: function(i, s, c) {
        s && this.fire("tileerror", { error: s, tile: c, coords: i });
        var m = this._tileCoordsToKey(i);
        c = this._tiles[m], c && (c.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (Vn(c.el, 0), w(this._fadeFrame), this._fadeFrame = ot(this._updateOpacity, this)) : (c.active = true, this._pruneTiles()), s || (ee(c.el, "leaflet-tile-loaded"), this.fire("tileload", { tile: c.el, coords: i })), this._noTilesToLoad() && (this._loading = false, this.fire("load"), Dt.ielt9 || !this._map._fadeAnimated ? ot(this._pruneTiles, this) : setTimeout(g(this._pruneTiles, this), 250)));
      }, _getTilePos: function(i) {
        return i.scaleBy(this.getTileSize()).subtract(this._level.origin);
      }, _wrapCoords: function(i) {
        var s = new rt(this._wrapX ? S(i.x, this._wrapX) : i.x, this._wrapY ? S(i.y, this._wrapY) : i.y);
        return s.z = i.z, s;
      }, _pxBoundsToTileRange: function(i) {
        var s = this.getTileSize();
        return new q(i.min.unscaleBy(s).floor(), i.max.unscaleBy(s).ceil().subtract([1, 1]));
      }, _noTilesToLoad: function() {
        for (var i in this._tiles) if (!this._tiles[i].loaded) return false;
        return true;
      } });
      function Ri(i) {
        return new sr(i);
      }
      var lr = sr.extend({ options: { minZoom: 0, maxZoom: 18, subdomains: "abc", errorTileUrl: "", zoomOffset: 0, tms: false, zoomReverse: false, detectRetina: false, crossOrigin: false, referrerPolicy: false }, initialize: function(i, s) {
        this._url = i, s = O(this, s), s.detectRetina && Dt.retina && s.maxZoom > 0 ? (s.tileSize = Math.floor(s.tileSize / 2), s.zoomReverse ? (s.zoomOffset--, s.minZoom = Math.min(s.maxZoom, s.minZoom + 1)) : (s.zoomOffset++, s.maxZoom = Math.max(s.minZoom, s.maxZoom - 1)), s.minZoom = Math.max(0, s.minZoom)) : s.zoomReverse ? s.minZoom = Math.min(s.maxZoom, s.minZoom) : s.maxZoom = Math.max(s.minZoom, s.maxZoom), typeof s.subdomains == "string" && (s.subdomains = s.subdomains.split("")), this.on("tileunload", this._onTileRemove);
      }, setUrl: function(i, s) {
        return this._url === i && s === void 0 && (s = true), this._url = i, s || this.redraw(), this;
      }, createTile: function(i, s) {
        var c = document.createElement("img");
        return Qt(c, "load", g(this._tileOnLoad, this, s, c)), Qt(c, "error", g(this._tileOnError, this, s, c)), (this.options.crossOrigin || this.options.crossOrigin === "") && (c.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (c.referrerPolicy = this.options.referrerPolicy), c.alt = "", c.src = this.getTileUrl(i), c;
      }, getTileUrl: function(i) {
        var s = { r: Dt.retina ? "@2x" : "", s: this._getSubdomain(i), x: i.x, y: i.y, z: this._getZoomForUrl() };
        if (this._map && !this._map.options.crs.infinite) {
          var c = this._globalTileRange.max.y - i.y;
          this.options.tms && (s.y = c), s["-y"] = c;
        }
        return V(this._url, f(s, this.options));
      }, _tileOnLoad: function(i, s) {
        Dt.ielt9 ? setTimeout(g(i, this, null, s), 0) : i(null, s);
      }, _tileOnError: function(i, s, c) {
        var m = this.options.errorTileUrl;
        m && s.getAttribute("src") !== m && (s.src = m), i(c, s);
      }, _onTileRemove: function(i) {
        i.tile.onload = null;
      }, _getZoomForUrl: function() {
        var i = this._tileZoom, s = this.options.maxZoom, c = this.options.zoomReverse, m = this.options.zoomOffset;
        return c && (i = s - i), i + m;
      }, _getSubdomain: function(i) {
        var s = Math.abs(i.x + i.y) % this.options.subdomains.length;
        return this.options.subdomains[s];
      }, _abortLoading: function() {
        var i, s;
        for (i in this._tiles) if (this._tiles[i].coords.z !== this._tileZoom && (s = this._tiles[i].el, s.onload = E, s.onerror = E, !s.complete)) {
          s.src = P;
          var c = this._tiles[i].coords;
          Ye(s), delete this._tiles[i], this.fire("tileabort", { tile: s, coords: c });
        }
      }, _removeTile: function(i) {
        var s = this._tiles[i];
        if (s) return s.el.setAttribute("src", P), sr.prototype._removeTile.call(this, i);
      }, _tileReady: function(i, s, c) {
        if (!(!this._map || c && c.getAttribute("src") === P)) return sr.prototype._tileReady.call(this, i, s, c);
      } });
      function ai(i, s) {
        return new lr(i, s);
      }
      var si = lr.extend({ defaultWmsParams: { service: "WMS", request: "GetMap", layers: "", styles: "", format: "image/jpeg", transparent: false, version: "1.1.1" }, options: { crs: null, uppercase: false }, initialize: function(i, s) {
        this._url = i;
        var c = f({}, this.defaultWmsParams);
        for (var m in s) m in this.options || (c[m] = s[m]);
        s = O(this, s);
        var _ = s.detectRetina && Dt.retina ? 2 : 1, C = this.getTileSize();
        c.width = C.x * _, c.height = C.y * _, this.wmsParams = c;
      }, onAdd: function(i) {
        this._crs = this.options.crs || i.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var s = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[s] = this._crs.code, lr.prototype.onAdd.call(this, i);
      }, getTileUrl: function(i) {
        var s = this._tileCoordsToNwSe(i), c = this._crs, m = ft(c.project(s[0]), c.project(s[1])), _ = m.min, C = m.max, j = (this._wmsVersion >= 1.3 && this._crs === Ku ? [_.y, _.x, C.y, C.x] : [_.x, _.y, C.x, C.y]).join(","), Y = lr.prototype.getTileUrl.call(this, i);
        return Y + $(this.wmsParams, Y, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + j;
      }, setParams: function(i, s) {
        return f(this.wmsParams, i), s || this.redraw(), this;
      } });
      function Zr(i, s) {
        return new si(i, s);
      }
      lr.WMS = si, ai.wms = Zr;
      var ki = Mi.extend({ options: { padding: 0.1 }, initialize: function(i) {
        O(this, i), y(this), this._layers = this._layers || {};
      }, onAdd: function() {
        this._container || (this._initContainer(), ee(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
      }, onRemove: function() {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      }, getEvents: function() {
        var i = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd };
        return this._zoomAnimated && (i.zoomanim = this._onAnimZoom), i;
      }, _onAnimZoom: function(i) {
        this._updateTransform(i.center, i.zoom);
      }, _onZoom: function() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      }, _updateTransform: function(i, s) {
        var c = this._map.getZoomScale(s, this._zoom), m = this._map.getSize().multiplyBy(0.5 + this.options.padding), _ = this._map.project(this._center, s), C = m.multiplyBy(-c).add(_).subtract(this._map._getNewPixelOrigin(i, s));
        Dt.any3d ? gi(this._container, C, c) : sn(this._container, C);
      }, _reset: function() {
        this._update(), this._updateTransform(this._center, this._zoom);
        for (var i in this._layers) this._layers[i]._reset();
      }, _onZoomEnd: function() {
        for (var i in this._layers) this._layers[i]._project();
      }, _updatePaths: function() {
        for (var i in this._layers) this._layers[i]._update();
      }, _update: function() {
        var i = this.options.padding, s = this._map.getSize(), c = this._map.containerPointToLayerPoint(s.multiplyBy(-i)).round();
        this._bounds = new q(c, c.add(s.multiplyBy(1 + i * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      } }), za = ki.extend({ options: { tolerance: 0 }, getEvents: function() {
        var i = ki.prototype.getEvents.call(this);
        return i.viewprereset = this._onViewPreReset, i;
      }, _onViewPreReset: function() {
        this._postponeUpdatePaths = true;
      }, onAdd: function() {
        ki.prototype.onAdd.call(this), this._draw();
      }, _initContainer: function() {
        var i = this._container = document.createElement("canvas");
        Qt(i, "mousemove", this._onMouseMove, this), Qt(i, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Qt(i, "mouseout", this._handleMouseOut, this), i._leaflet_disable_events = true, this._ctx = i.getContext("2d");
      }, _destroyContainer: function() {
        w(this._redrawRequest), delete this._ctx, Ye(this._container), Ce(this._container), delete this._container;
      }, _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          var i;
          this._redrawBounds = null;
          for (var s in this._layers) i = this._layers[s], i._update();
          this._redraw();
        }
      }, _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          ki.prototype._update.call(this);
          var i = this._bounds, s = this._container, c = i.getSize(), m = Dt.retina ? 2 : 1;
          sn(s, i.min), s.width = m * c.x, s.height = m * c.y, s.style.width = c.x + "px", s.style.height = c.y + "px", Dt.retina && this._ctx.scale(2, 2), this._ctx.translate(-i.min.x, -i.min.y), this.fire("update");
        }
      }, _reset: function() {
        ki.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = false, this._updatePaths());
      }, _initPath: function(i) {
        this._updateDashArray(i), this._layers[y(i)] = i;
        var s = i._order = { layer: i, prev: this._drawLast, next: null };
        this._drawLast && (this._drawLast.next = s), this._drawLast = s, this._drawFirst = this._drawFirst || this._drawLast;
      }, _addPath: function(i) {
        this._requestRedraw(i);
      }, _removePath: function(i) {
        var s = i._order, c = s.next, m = s.prev;
        c ? c.prev = m : this._drawLast = m, m ? m.next = c : this._drawFirst = c, delete i._order, delete this._layers[y(i)], this._requestRedraw(i);
      }, _updatePath: function(i) {
        this._extendRedrawBounds(i), i._project(), i._update(), this._requestRedraw(i);
      }, _updateStyle: function(i) {
        this._updateDashArray(i), this._requestRedraw(i);
      }, _updateDashArray: function(i) {
        if (typeof i.options.dashArray == "string") {
          var s = i.options.dashArray.split(/[, ]+/), c = [], m, _;
          for (_ = 0; _ < s.length; _++) {
            if (m = Number(s[_]), isNaN(m)) return;
            c.push(m);
          }
          i.options._dashArray = c;
        } else i.options._dashArray = i.options.dashArray;
      }, _requestRedraw: function(i) {
        this._map && (this._extendRedrawBounds(i), this._redrawRequest = this._redrawRequest || ot(this._redraw, this));
      }, _extendRedrawBounds: function(i) {
        if (i._pxBounds) {
          var s = (i.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new q(), this._redrawBounds.extend(i._pxBounds.min.subtract([s, s])), this._redrawBounds.extend(i._pxBounds.max.add([s, s]));
        }
      }, _redraw: function() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      }, _clear: function() {
        var i = this._redrawBounds;
        if (i) {
          var s = i.getSize();
          this._ctx.clearRect(i.min.x, i.min.y, s.x, s.y);
        } else this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
      }, _draw: function() {
        var i, s = this._redrawBounds;
        if (this._ctx.save(), s) {
          var c = s.getSize();
          this._ctx.beginPath(), this._ctx.rect(s.min.x, s.min.y, c.x, c.y), this._ctx.clip();
        }
        this._drawing = true;
        for (var m = this._drawFirst; m; m = m.next) i = m.layer, (!s || i._pxBounds && i._pxBounds.intersects(s)) && i._updatePath();
        this._drawing = false, this._ctx.restore();
      }, _updatePoly: function(i, s) {
        if (this._drawing) {
          var c, m, _, C, j = i._parts, Y = j.length, lt = this._ctx;
          if (Y) {
            for (lt.beginPath(), c = 0; c < Y; c++) {
              for (m = 0, _ = j[c].length; m < _; m++) C = j[c][m], lt[m ? "lineTo" : "moveTo"](C.x, C.y);
              s && lt.closePath();
            }
            this._fillStroke(lt, i);
          }
        }
      }, _updateCircle: function(i) {
        if (!(!this._drawing || i._empty())) {
          var s = i._point, c = this._ctx, m = Math.max(Math.round(i._radius), 1), _ = (Math.max(Math.round(i._radiusY), 1) || m) / m;
          _ !== 1 && (c.save(), c.scale(1, _)), c.beginPath(), c.arc(s.x, s.y / _, m, 0, Math.PI * 2, false), _ !== 1 && c.restore(), this._fillStroke(c, i);
        }
      }, _fillStroke: function(i, s) {
        var c = s.options;
        c.fill && (i.globalAlpha = c.fillOpacity, i.fillStyle = c.fillColor || c.color, i.fill(c.fillRule || "evenodd")), c.stroke && c.weight !== 0 && (i.setLineDash && i.setLineDash(s.options && s.options._dashArray || []), i.globalAlpha = c.opacity, i.lineWidth = c.weight, i.strokeStyle = c.color, i.lineCap = c.lineCap, i.lineJoin = c.lineJoin, i.stroke());
      }, _onClick: function(i) {
        for (var s = this._map.mouseEventToLayerPoint(i), c, m, _ = this._drawFirst; _; _ = _.next) c = _.layer, c.options.interactive && c._containsPoint(s) && (!(i.type === "click" || i.type === "preclick") || !this._map._draggableMoved(c)) && (m = c);
        this._fireEvent(m ? [m] : false, i);
      }, _onMouseMove: function(i) {
        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
          var s = this._map.mouseEventToLayerPoint(i);
          this._handleMouseHover(i, s);
        }
      }, _handleMouseOut: function(i) {
        var s = this._hoveredLayer;
        s && (Ke(this._container, "leaflet-interactive"), this._fireEvent([s], i, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = false);
      }, _handleMouseHover: function(i, s) {
        if (!this._mouseHoverThrottled) {
          for (var c, m, _ = this._drawFirst; _; _ = _.next) c = _.layer, c.options.interactive && c._containsPoint(s) && (m = c);
          m !== this._hoveredLayer && (this._handleMouseOut(i), m && (ee(this._container, "leaflet-interactive"), this._fireEvent([m], i, "mouseover"), this._hoveredLayer = m)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : false, i), this._mouseHoverThrottled = true, setTimeout(g(function() {
            this._mouseHoverThrottled = false;
          }, this), 32);
        }
      }, _fireEvent: function(i, s, c) {
        this._map._fireDOMEvent(s, c || s.type, i);
      }, _bringToFront: function(i) {
        var s = i._order;
        if (s) {
          var c = s.next, m = s.prev;
          if (c) c.prev = m;
          else return;
          m ? m.next = c : c && (this._drawFirst = c), s.prev = this._drawLast, this._drawLast.next = s, s.next = null, this._drawLast = s, this._requestRedraw(i);
        }
      }, _bringToBack: function(i) {
        var s = i._order;
        if (s) {
          var c = s.next, m = s.prev;
          if (m) m.next = c;
          else return;
          c ? c.prev = m : m && (this._drawLast = m), s.prev = null, s.next = this._drawFirst, this._drawFirst.prev = s, this._drawFirst = s, this._requestRedraw(i);
        }
      } });
      function Pa(i) {
        return Dt.canvas ? new za(i) : null;
      }
      var ur = function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(i) {
            return document.createElement("<lvml:" + i + ' class="lvml">');
          };
        } catch {
        }
        return function(i) {
          return document.createElement("<" + i + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      }(), Vr = { _initContainer: function() {
        this._container = Se("div", "leaflet-vml-container");
      }, _update: function() {
        this._map._animatingZoom || (ki.prototype._update.call(this), this.fire("update"));
      }, _initPath: function(i) {
        var s = i._container = ur("shape");
        ee(s, "leaflet-vml-shape " + (this.options.className || "")), s.coordsize = "1 1", i._path = ur("path"), s.appendChild(i._path), this._updateStyle(i), this._layers[y(i)] = i;
      }, _addPath: function(i) {
        var s = i._container;
        this._container.appendChild(s), i.options.interactive && i.addInteractiveTarget(s);
      }, _removePath: function(i) {
        var s = i._container;
        Ye(s), i.removeInteractiveTarget(s), delete this._layers[y(i)];
      }, _updateStyle: function(i) {
        var s = i._stroke, c = i._fill, m = i.options, _ = i._container;
        _.stroked = !!m.stroke, _.filled = !!m.fill, m.stroke ? (s || (s = i._stroke = ur("stroke")), _.appendChild(s), s.weight = m.weight + "px", s.color = m.color, s.opacity = m.opacity, m.dashArray ? s.dashStyle = D(m.dashArray) ? m.dashArray.join(" ") : m.dashArray.replace(/( *, *)/g, " ") : s.dashStyle = "", s.endcap = m.lineCap.replace("butt", "flat"), s.joinstyle = m.lineJoin) : s && (_.removeChild(s), i._stroke = null), m.fill ? (c || (c = i._fill = ur("fill")), _.appendChild(c), c.color = m.fillColor || m.color, c.opacity = m.fillOpacity) : c && (_.removeChild(c), i._fill = null);
      }, _updateCircle: function(i) {
        var s = i._point.round(), c = Math.round(i._radius), m = Math.round(i._radiusY || c);
        this._setPath(i, i._empty() ? "M0 0" : "AL " + s.x + "," + s.y + " " + c + "," + m + " 0," + 65535 * 360);
      }, _setPath: function(i, s) {
        i._path.v = s;
      }, _bringToFront: function(i) {
        Qo(i._container);
      }, _bringToBack: function(i) {
        Or(i._container);
      } }, Ba = Dt.vml ? ur : de, ko = ki.extend({ _initContainer: function() {
        this._container = Ba("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Ba("g"), this._container.appendChild(this._rootGroup);
      }, _destroyContainer: function() {
        Ye(this._container), Ce(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      }, _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          ki.prototype._update.call(this);
          var i = this._bounds, s = i.getSize(), c = this._container;
          (!this._svgSize || !this._svgSize.equals(s)) && (this._svgSize = s, c.setAttribute("width", s.x), c.setAttribute("height", s.y)), sn(c, i.min), c.setAttribute("viewBox", [i.min.x, i.min.y, s.x, s.y].join(" ")), this.fire("update");
        }
      }, _initPath: function(i) {
        var s = i._path = Ba("path");
        i.options.className && ee(s, i.options.className), i.options.interactive && ee(s, "leaflet-interactive"), this._updateStyle(i), this._layers[y(i)] = i;
      }, _addPath: function(i) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(i._path), i.addInteractiveTarget(i._path);
      }, _removePath: function(i) {
        Ye(i._path), i.removeInteractiveTarget(i._path), delete this._layers[y(i)];
      }, _updatePath: function(i) {
        i._project(), i._update();
      }, _updateStyle: function(i) {
        var s = i._path, c = i.options;
        s && (c.stroke ? (s.setAttribute("stroke", c.color), s.setAttribute("stroke-opacity", c.opacity), s.setAttribute("stroke-width", c.weight), s.setAttribute("stroke-linecap", c.lineCap), s.setAttribute("stroke-linejoin", c.lineJoin), c.dashArray ? s.setAttribute("stroke-dasharray", c.dashArray) : s.removeAttribute("stroke-dasharray"), c.dashOffset ? s.setAttribute("stroke-dashoffset", c.dashOffset) : s.removeAttribute("stroke-dashoffset")) : s.setAttribute("stroke", "none"), c.fill ? (s.setAttribute("fill", c.fillColor || c.color), s.setAttribute("fill-opacity", c.fillOpacity), s.setAttribute("fill-rule", c.fillRule || "evenodd")) : s.setAttribute("fill", "none"));
      }, _updatePoly: function(i, s) {
        this._setPath(i, ie(i._parts, s));
      }, _updateCircle: function(i) {
        var s = i._point, c = Math.max(Math.round(i._radius), 1), m = Math.max(Math.round(i._radiusY), 1) || c, _ = "a" + c + "," + m + " 0 1,0 ", C = i._empty() ? "M0 0" : "M" + (s.x - c) + "," + s.y + _ + c * 2 + ",0 " + _ + -c * 2 + ",0 ";
        this._setPath(i, C);
      }, _setPath: function(i, s) {
        i._path.setAttribute("d", s);
      }, _bringToFront: function(i) {
        Qo(i._path);
      }, _bringToBack: function(i) {
        Or(i._path);
      } });
      Dt.vml && ko.include(Vr);
      function cr(i) {
        return Dt.svg || Dt.vml ? new ko(i) : null;
      }
      pe.include({ getRenderer: function(i) {
        var s = i.options.renderer || this._getPaneRenderer(i.options.pane) || this.options.renderer || this._renderer;
        return s || (s = this._renderer = this._createRenderer()), this.hasLayer(s) || this.addLayer(s), s;
      }, _getPaneRenderer: function(i) {
        if (i === "overlayPane" || i === void 0) return false;
        var s = this._paneRenderers[i];
        return s === void 0 && (s = this._createRenderer({ pane: i }), this._paneRenderers[i] = s), s;
      }, _createRenderer: function(i) {
        return this.options.preferCanvas && Pa(i) || cr(i);
      } });
      var nc = Hr.extend({ initialize: function(i, s) {
        Hr.prototype.initialize.call(this, this._boundsToLatLngs(i), s);
      }, setBounds: function(i) {
        return this.setLatLngs(this._boundsToLatLngs(i));
      }, _boundsToLatLngs: function(i) {
        return i = bt(i), [i.getSouthWest(), i.getNorthWest(), i.getNorthEast(), i.getSouthEast()];
      } });
      function li(i, s) {
        return new nc(i, s);
      }
      ko.create = Ba, ko.pointsToPath = ie, ri.geometryToLayer = Aa, ri.coordsToLatLng = fs, ri.coordsToLatLngs = Ra, ri.latLngToCoords = ka, ri.latLngsToCoords = ds, ri.getFeature = Oi, ri.asFeature = Ur, pe.mergeOptions({ boxZoom: true });
      var gs = Ei.extend({ initialize: function(i) {
        this._map = i, this._container = i._container, this._pane = i._panes.overlayPane, this._resetStateTimeout = 0, i.on("unload", this._destroy, this);
      }, addHooks: function() {
        Qt(this._container, "mousedown", this._onMouseDown, this);
      }, removeHooks: function() {
        Ce(this._container, "mousedown", this._onMouseDown, this);
      }, moved: function() {
        return this._moved;
      }, _destroy: function() {
        Ye(this._pane), delete this._pane;
      }, _resetState: function() {
        this._resetStateTimeout = 0, this._moved = false;
      }, _clearDeferredResetState: function() {
        this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      }, _onMouseDown: function(i) {
        if (!i.shiftKey || i.which !== 1 && i.button !== 1) return false;
        this._clearDeferredResetState(), this._resetState(), Vi(), Sa(), this._startPoint = this._map.mouseEventToContainerPoint(i), Qt(document, { contextmenu: Yi, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
      }, _onMouseMove: function(i) {
        this._moved || (this._moved = true, this._box = Se("div", "leaflet-zoom-box", this._container), ee(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(i);
        var s = new q(this._point, this._startPoint), c = s.getSize();
        sn(this._box, s.min), this._box.style.width = c.x + "px", this._box.style.height = c.y + "px";
      }, _finish: function() {
        this._moved && (Ye(this._box), Ke(this._container, "leaflet-crosshair")), xa(), al(), Ce(document, { contextmenu: Yi, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
      }, _onMouseUp: function(i) {
        if (!(i.which !== 1 && i.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(g(this._resetState, this), 0);
          var s = new dt(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
          this._map.fitBounds(s).fire("boxzoomend", { boxZoomBounds: s });
        }
      }, _onKeyDown: function(i) {
        i.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      } });
      pe.addInitHook("addHandler", "boxZoom", gs), pe.mergeOptions({ doubleClickZoom: true });
      var Xi = Ei.extend({ addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      }, removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      }, _onDoubleClick: function(i) {
        var s = this._map, c = s.getZoom(), m = s.options.zoomDelta, _ = i.originalEvent.shiftKey ? c - m : c + m;
        s.options.doubleClickZoom === "center" ? s.setZoom(_) : s.setZoomAround(i.containerPoint, _);
      } });
      pe.addInitHook("addHandler", "doubleClickZoom", Xi), pe.mergeOptions({ dragging: true, inertia: true, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, easeLinearity: 0.2, worldCopyJump: false, maxBoundsViscosity: 0 });
      var bl = Ei.extend({ addHooks: function() {
        if (!this._draggable) {
          var i = this._map;
          this._draggable = new Ao(i._mapPane, i._container), this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this), this._draggable.on("predrag", this._onPreDragLimit, this), i.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), i.on("zoomend", this._onZoomEnd, this), i.whenReady(this._onZoomEnd, this));
        }
        ee(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      }, removeHooks: function() {
        Ke(this._map._container, "leaflet-grab"), Ke(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
      }, moved: function() {
        return this._draggable && this._draggable._moved;
      }, moving: function() {
        return this._draggable && this._draggable._moving;
      }, _onDragStart: function() {
        var i = this._map;
        if (i._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
          var s = bt(this._map.options.maxBounds);
          this._offsetLimit = ft(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
        } else this._offsetLimit = null;
        i.fire("movestart").fire("dragstart"), i.options.inertia && (this._positions = [], this._times = []);
      }, _onDrag: function(i) {
        if (this._map.options.inertia) {
          var s = this._lastTime = +/* @__PURE__ */ new Date(), c = this._lastPos = this._draggable._absPos || this._draggable._newPos;
          this._positions.push(c), this._times.push(s), this._prunePositions(s);
        }
        this._map.fire("move", i).fire("drag", i);
      }, _prunePositions: function(i) {
        for (; this._positions.length > 1 && i - this._times[0] > 50; ) this._positions.shift(), this._times.shift();
      }, _onZoomEnd: function() {
        var i = this._map.getSize().divideBy(2), s = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = s.subtract(i).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      }, _viscousLimit: function(i, s) {
        return i - (i - s) * this._viscosity;
      }, _onPreDragLimit: function() {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var i = this._draggable._newPos.subtract(this._draggable._startPos), s = this._offsetLimit;
          i.x < s.min.x && (i.x = this._viscousLimit(i.x, s.min.x)), i.y < s.min.y && (i.y = this._viscousLimit(i.y, s.min.y)), i.x > s.max.x && (i.x = this._viscousLimit(i.x, s.max.x)), i.y > s.max.y && (i.y = this._viscousLimit(i.y, s.max.y)), this._draggable._newPos = this._draggable._startPos.add(i);
        }
      }, _onPreDragWrap: function() {
        var i = this._worldWidth, s = Math.round(i / 2), c = this._initialWorldOffset, m = this._draggable._newPos.x, _ = (m - s + c) % i + s - c, C = (m + s + c) % i - s - c, j = Math.abs(_ + c) < Math.abs(C + c) ? _ : C;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = j;
      }, _onDragEnd: function(i) {
        var s = this._map, c = s.options, m = !c.inertia || i.noInertia || this._times.length < 2;
        if (s.fire("dragend", i), m) s.fire("moveend");
        else {
          this._prunePositions(+/* @__PURE__ */ new Date());
          var _ = this._lastPos.subtract(this._positions[0]), C = (this._lastTime - this._times[0]) / 1e3, j = c.easeLinearity, Y = _.multiplyBy(j / C), lt = Y.distanceTo([0, 0]), St = Math.min(c.inertiaMaxSpeed, lt), Et = Y.multiplyBy(St / lt), kt = St / (c.inertiaDeceleration * j), Nt = Et.multiplyBy(-kt / 2).round();
          !Nt.x && !Nt.y ? s.fire("moveend") : (Nt = s._limitOffset(Nt, s.options.maxBounds), ot(function() {
            s.panBy(Nt, { duration: kt, easeLinearity: j, noMoveStart: true, animate: true });
          }));
        }
      } });
      pe.addInitHook("addHandler", "dragging", bl), pe.mergeOptions({ keyboard: true, keyboardPanDelta: 80 });
      var Da = Ei.extend({ keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 54, 173] }, initialize: function(i) {
        this._map = i, this._setPanDelta(i.options.keyboardPanDelta), this._setZoomDelta(i.options.zoomDelta);
      }, addHooks: function() {
        var i = this._map._container;
        i.tabIndex <= 0 && (i.tabIndex = "0"), Qt(i, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
      }, removeHooks: function() {
        this._removeHooks(), Ce(this._map._container, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
      }, _onMouseDown: function() {
        if (!this._focused) {
          var i = document.body, s = document.documentElement, c = i.scrollTop || s.scrollTop, m = i.scrollLeft || s.scrollLeft;
          this._map._container.focus(), window.scrollTo(m, c);
        }
      }, _onFocus: function() {
        this._focused = true, this._map.fire("focus");
      }, _onBlur: function() {
        this._focused = false, this._map.fire("blur");
      }, _setPanDelta: function(i) {
        var s = this._panKeys = {}, c = this.keyCodes, m, _;
        for (m = 0, _ = c.left.length; m < _; m++) s[c.left[m]] = [-1 * i, 0];
        for (m = 0, _ = c.right.length; m < _; m++) s[c.right[m]] = [i, 0];
        for (m = 0, _ = c.down.length; m < _; m++) s[c.down[m]] = [0, i];
        for (m = 0, _ = c.up.length; m < _; m++) s[c.up[m]] = [0, -1 * i];
      }, _setZoomDelta: function(i) {
        var s = this._zoomKeys = {}, c = this.keyCodes, m, _;
        for (m = 0, _ = c.zoomIn.length; m < _; m++) s[c.zoomIn[m]] = i;
        for (m = 0, _ = c.zoomOut.length; m < _; m++) s[c.zoomOut[m]] = -i;
      }, _addHooks: function() {
        Qt(document, "keydown", this._onKeyDown, this);
      }, _removeHooks: function() {
        Ce(document, "keydown", this._onKeyDown, this);
      }, _onKeyDown: function(i) {
        if (!(i.altKey || i.ctrlKey || i.metaKey)) {
          var s = i.keyCode, c = this._map, m;
          if (s in this._panKeys) {
            if (!c._panAnim || !c._panAnim._inProgress) if (m = this._panKeys[s], i.shiftKey && (m = z(m).multiplyBy(3)), c.options.maxBounds && (m = c._limitOffset(z(m), c.options.maxBounds)), c.options.worldCopyJump) {
              var _ = c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(m)));
              c.panTo(_);
            } else c.panBy(m);
          } else if (s in this._zoomKeys) c.setZoom(c.getZoom() + (i.shiftKey ? 3 : 1) * this._zoomKeys[s]);
          else if (s === 27 && c._popup && c._popup.options.closeOnEscapeKey) c.closePopup();
          else return;
          Yi(i);
        }
      } });
      pe.addInitHook("addHandler", "keyboard", Da), pe.mergeOptions({ scrollWheelZoom: true, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 });
      var Lo = Ei.extend({ addHooks: function() {
        Qt(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      }, removeHooks: function() {
        Ce(this._map._container, "wheel", this._onWheelScroll, this);
      }, _onWheelScroll: function(i) {
        var s = Ta(i), c = this._map.options.wheelDebounceTime;
        this._delta += s, this._lastMousePos = this._map.mouseEventToContainerPoint(i), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
        var m = Math.max(c - (+/* @__PURE__ */ new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(g(this._performZoom, this), m), Yi(i);
      }, _performZoom: function() {
        var i = this._map, s = i.getZoom(), c = this._map.options.zoomSnap || 0;
        i._stop();
        var m = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), _ = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(m)))) / Math.LN2, C = c ? Math.ceil(_ / c) * c : _, j = i._limitZoom(s + (this._delta > 0 ? C : -C)) - s;
        this._delta = 0, this._startTime = null, j && (i.options.scrollWheelZoom === "center" ? i.setZoom(s + j) : i.setZoomAround(this._lastMousePos, s + j));
      } });
      pe.addInitHook("addHandler", "scrollWheelZoom", Lo);
      var xl = 600;
      pe.mergeOptions({ tapHold: Dt.touchNative && Dt.safari && Dt.mobile, tapTolerance: 15 });
      var vs = Ei.extend({ addHooks: function() {
        Qt(this._map._container, "touchstart", this._onDown, this);
      }, removeHooks: function() {
        Ce(this._map._container, "touchstart", this._onDown, this);
      }, _onDown: function(i) {
        if (clearTimeout(this._holdTimeout), i.touches.length === 1) {
          var s = i.touches[0];
          this._startPos = this._newPos = new rt(s.clientX, s.clientY), this._holdTimeout = setTimeout(g(function() {
            this._cancel(), this._isTapValid() && (Qt(document, "touchend", dn), Qt(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", s));
          }, this), xl), Qt(document, "touchend touchcancel contextmenu", this._cancel, this), Qt(document, "touchmove", this._onMove, this);
        }
      }, _cancelClickPrevent: function i() {
        Ce(document, "touchend", dn), Ce(document, "touchend touchcancel", i);
      }, _cancel: function() {
        clearTimeout(this._holdTimeout), Ce(document, "touchend touchcancel contextmenu", this._cancel, this), Ce(document, "touchmove", this._onMove, this);
      }, _onMove: function(i) {
        var s = i.touches[0];
        this._newPos = new rt(s.clientX, s.clientY);
      }, _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      }, _simulateEvent: function(i, s) {
        var c = new MouseEvent(i, { bubbles: true, cancelable: true, view: window, screenX: s.screenX, screenY: s.screenY, clientX: s.clientX, clientY: s.clientY });
        c._simulated = true, s.target.dispatchEvent(c);
      } });
      pe.addInitHook("addHandler", "tapHold", vs), pe.mergeOptions({ touchZoom: Dt.touch, bounceAtZoomLimits: true });
      var fr = Ei.extend({ addHooks: function() {
        ee(this._map._container, "leaflet-touch-zoom"), Qt(this._map._container, "touchstart", this._onTouchStart, this);
      }, removeHooks: function() {
        Ke(this._map._container, "leaflet-touch-zoom"), Ce(this._map._container, "touchstart", this._onTouchStart, this);
      }, _onTouchStart: function(i) {
        var s = this._map;
        if (!(!i.touches || i.touches.length !== 2 || s._animatingZoom || this._zooming)) {
          var c = s.mouseEventToContainerPoint(i.touches[0]), m = s.mouseEventToContainerPoint(i.touches[1]);
          this._centerPoint = s.getSize()._divideBy(2), this._startLatLng = s.containerPointToLatLng(this._centerPoint), s.options.touchZoom !== "center" && (this._pinchStartLatLng = s.containerPointToLatLng(c.add(m)._divideBy(2))), this._startDist = c.distanceTo(m), this._startZoom = s.getZoom(), this._moved = false, this._zooming = true, s._stop(), Qt(document, "touchmove", this._onTouchMove, this), Qt(document, "touchend touchcancel", this._onTouchEnd, this), dn(i);
        }
      }, _onTouchMove: function(i) {
        if (!(!i.touches || i.touches.length !== 2 || !this._zooming)) {
          var s = this._map, c = s.mouseEventToContainerPoint(i.touches[0]), m = s.mouseEventToContainerPoint(i.touches[1]), _ = c.distanceTo(m) / this._startDist;
          if (this._zoom = s.getScaleZoom(_, this._startZoom), !s.options.bounceAtZoomLimits && (this._zoom < s.getMinZoom() && _ < 1 || this._zoom > s.getMaxZoom() && _ > 1) && (this._zoom = s._limitZoom(this._zoom)), s.options.touchZoom === "center") {
            if (this._center = this._startLatLng, _ === 1) return;
          } else {
            var C = c._add(m)._divideBy(2)._subtract(this._centerPoint);
            if (_ === 1 && C.x === 0 && C.y === 0) return;
            this._center = s.unproject(s.project(this._pinchStartLatLng, this._zoom).subtract(C), this._zoom);
          }
          this._moved || (s._moveStart(true, false), this._moved = true), w(this._animRequest);
          var j = g(s._move, s, this._center, this._zoom, { pinch: true, round: false }, void 0);
          this._animRequest = ot(j, this, true), dn(i);
        }
      }, _onTouchEnd: function() {
        if (!this._moved || !this._zooming) {
          this._zooming = false;
          return;
        }
        this._zooming = false, w(this._animRequest), Ce(document, "touchmove", this._onTouchMove, this), Ce(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      } });
      pe.addInitHook("addHandler", "touchZoom", fr), pe.BoxZoom = gs, pe.DoubleClickZoom = Xi, pe.Drag = bl, pe.Keyboard = Da, pe.ScrollWheelZoom = Lo, pe.TapHold = vs, pe.TouchZoom = fr, a.Bounds = q, a.Browser = Dt, a.CRS = At, a.Canvas = za, a.Circle = vl, a.CircleMarker = Oa, a.Class = W, a.Control = Gn, a.DivIcon = _l, a.DivOverlay = Ai, a.DomEvent = Qf, a.DomUtil = $u, a.Draggable = Ao, a.Evented = tt, a.FeatureGroup = ii, a.GeoJSON = ri, a.GridLayer = sr, a.Handler = Ei, a.Icon = $r, a.ImageOverlay = Ki, a.LatLng = _t, a.LatLngBounds = dt, a.Layer = Mi, a.LayerGroup = rr, a.LineUtil = qu, a.Map = pe, a.Marker = jr, a.Mixin = id, a.Path = po, a.Point = rt, a.PolyUtil = od, a.Polygon = Hr, a.Polyline = mo, a.Popup = La, a.PosAnimation = rs, a.Projection = Yu, a.Rectangle = nc, a.Renderer = ki, a.SVG = ko, a.SVGOverlay = Ro, a.TileLayer = lr, a.Tooltip = ms, a.Transformation = Ut, a.Util = st, a.VideoOverlay = ps, a.bind = g, a.bounds = ft, a.canvas = Pa, a.circle = cd, a.circleMarker = Wu, a.control = Dr, a.divIcon = ec, a.extend = f, a.featureGroup = Ma, a.geoJSON = hs, a.geoJson = Qu, a.gridLayer = Ri, a.icon = cs, a.imageOverlay = Fr, a.latLng = ct, a.latLngBounds = bt, a.layerGroup = Xu, a.map = Ea, a.marker = gl, a.point = z, a.polygon = oi, a.polyline = fd, a.popup = dd, a.rectangle = li, a.setOptions = O, a.stamp = y, a.svg = cr, a.svgOverlay = tc, a.tileLayer = ai, a.tooltip = hd, a.transformation = Wt, a.version = u, a.videoOverlay = Ju;
      var Gr = window.L;
      a.noConflict = function() {
        return window.L = Gr, this;
      }, window.L = a;
    });
  }(du, du.exports)), du.exports;
}
var ol = dE();
function hE(n2) {
  return n2.split(" ").filter(Boolean);
}
function pE(n2, r) {
  for (const a of hE(r)) ol.DomUtil.addClass(n2, a);
}
function Wf(n2, r, a) {
  return Object.freeze({ instance: n2, context: r, container: a });
}
function w_(n2, r) {
  return r == null ? function(u, f) {
    const h = M.useRef(void 0);
    return h.current || (h.current = n2(u, f)), h;
  } : function(u, f) {
    const h = M.useRef(void 0);
    h.current || (h.current = n2(u, f));
    const g = M.useRef(u), { instance: v } = h.current;
    return M.useEffect(function() {
      g.current !== u && (r(v, u, g.current), g.current = u);
    }, [v, u, r]), h;
  };
}
function C_(n2, r) {
  M.useEffect(function() {
    return (r.layerContainer ?? r.map).addLayer(n2.instance), function() {
      var _a2;
      (_a2 = r.layerContainer) == null ? void 0 : _a2.removeLayer(n2.instance), r.map.removeLayer(n2.instance);
    };
  }, [r, n2]);
}
function mE(n2) {
  return function(a) {
    const u = Xf(), f = n2(Tm(a, u), u);
    return rE(u.map, a.attribution), S_(f.current, a.eventHandlers), C_(f.current, u), f;
  };
}
function gE(n2, r) {
  const a = M.useRef(void 0);
  M.useEffect(function() {
    if (r.pathOptions !== a.current) {
      const f = r.pathOptions ?? {};
      n2.instance.setStyle(f), a.current = f;
    }
  }, [n2, r]);
}
function vE(n2) {
  return function(a) {
    const u = Xf(), f = n2(Tm(a, u), u);
    return S_(f.current, a.eventHandlers), C_(f.current, u), gE(f.current, a), f;
  };
}
function Em(n2, r) {
  const a = w_(n2, r), u = vE(a);
  return uE(u);
}
function yE(n2, r) {
  const a = w_(n2, r), u = mE(a);
  return cE(u);
}
function _E(n2, r, a) {
  const { opacity: u, zIndex: f } = r;
  u != null && u !== a.opacity && n2.setOpacity(u), f != null && f !== a.zIndex && n2.setZIndex(f);
}
function bE() {
  return Xf().map;
}
function xE(n2) {
  const r = bE();
  return M.useEffect(function() {
    return r.on(n2), function() {
      r.off(n2);
    };
  }, [r, n2]), r;
}
const SE = Em(function({ center: r, children: a, ...u }, f) {
  const h = new ol.CircleMarker(r, u);
  return Wf(h, Cm(f, { overlayContainer: h }));
}, aE), wE = Em(function({ data: r, ...a }, u) {
  const f = new ol.GeoJSON(r, a);
  return Wf(f, Cm(u, { overlayContainer: f }));
}, function(r, a, u) {
  a.style !== u.style && (a.style == null ? r.resetStyle() : r.setStyle(a.style));
});
function CE({ bounds: n2, boundsOptions: r, center: a, children: u, className: f, id: h, placeholder: g, style: v, whenReady: y, zoom: b, ...S }, E) {
  const [R] = M.useState({ className: f, id: h, style: v }), [k, A] = M.useState(null), O = M.useRef(void 0);
  M.useImperativeHandle(E, () => (k == null ? void 0 : k.map) ?? null, [k]);
  const $ = M.useCallback((V) => {
    if (V !== null && !O.current) {
      const D = new ol.Map(V, S);
      O.current = D, a != null && b != null ? D.setView(a, b) : n2 != null && D.fitBounds(n2, r), y != null && D.whenReady(y), A(lE(D));
    }
  }, []);
  M.useEffect(() => () => {
    k == null ? void 0 : k.map.remove();
  }, [k]);
  const F = k ? Xn.createElement(Kf, { value: k }, u) : g ?? null;
  return Xn.createElement("div", { ...R, ref: $ }, F);
}
const TE = M.forwardRef(CE), EE = ["mapPane", "markerPane", "overlayPane", "popupPane", "shadowPane", "tilePane", "tooltipPane"];
function Xy(n2, r) {
  const { [r]: a, ...u } = n2;
  return u;
}
function ME(n2, r, a) {
  if (EE.indexOf(n2) !== -1) throw new Error(`You must use a unique name for a pane that is not a default Leaflet pane: ${n2}`);
  if (a.map.getPane(n2) != null) throw new Error(`A pane with this name already exists: ${n2}`);
  const u = r.pane ?? a.pane, f = u ? a.map.getPane(u) : void 0, h = a.map.createPane(n2, f);
  if (r.className != null && pE(h, r.className), r.style != null) for (const g of Object.keys(r.style)) h.style[g] = r.style[g];
  return h;
}
function OE(n2, r) {
  const [a] = M.useState(n2.name), [u, f] = M.useState(null);
  M.useImperativeHandle(r, () => u, [u]);
  const h = Xf(), g = M.useMemo(() => ({ ...h, pane: a }), [h]);
  return M.useEffect(() => (f(ME(a, n2, h)), function() {
    var _a2, _b2;
    (_b2 = (_a2 = h.map.getPane(a)) == null ? void 0 : _a2.remove) == null ? void 0 : _b2.call(_a2), h.map._panes != null && (h.map._panes = Xy(h.map._panes, a), h.map._paneRenderers = Xy(h.map._paneRenderers, a));
  }), []), n2.children != null && u != null ? om.createPortal(Xn.createElement(Kf, { value: g }, n2.children), u) : null;
}
const lf = M.forwardRef(OE), AE = Em(function({ bounds: r, ...a }, u) {
  const f = new ol.Rectangle(r, a);
  return Wf(f, Cm(u, { overlayContainer: f }));
}, function(r, a, u) {
  a.bounds !== u.bounds && r.setBounds(a.bounds);
}), RE = yE(function({ url: r, ...a }, u) {
  const f = new ol.TileLayer(r, Tm(a, u));
  return Wf(f, u);
}, function(r, a, u) {
  _E(r, a, u);
  const { url: f } = a;
  f != null && f !== u.url && r.setUrl(f);
});
function kE() {
  const n2 = cn((u) => u.mainColor), r = cn((u) => u.calcRoute), { markers: a } = cn();
  return M.useEffect(() => {
    if (a.length < 2 && cn.setState({ route: null }), a.length === 2) {
      const u = { lat: a[0].coordinates[0], lon: a[0].coordinates[1] }, f = { lat: a[1].coordinates[0], lon: a[1].coordinates[1] };
      r(u, f);
    }
  }, [a]), I.jsxs(I.Fragment, { children: [I.jsx(LE, {}), a.length != 0 && a.map((u, f) => I.jsx(SE, { center: [u.coordinates[0], u.coordinates[1]], radius: 7, color: n2, fillColor: "white", fillOpacity: 1, style: { boxShadow: "0 0 5px rgba(0,0,0,1)" } }, u.key))] });
}
function LE() {
  const { setMarkers: n2 } = cn();
  return xE({ click(r) {
    const { lat: a, lng: u } = r.latlng;
    n2({ coordinates: [a, u], key: Date.now() });
  } }), null;
}
function zE({ routeData: n2, mainColor: r, ...a }) {
  return console.log(n2), I.jsx(I.Fragment, { children: n2 && n2.features.map((u, f) => I.jsx(wE, { ...a, data: u, style: { color: r, weight: 5, dashArray: u.properties.profile == "baseline" ? "5,15" : null, lineCap: "round", lineJoin: "round" } }, f)) });
}
function PE({ mainColor: n2 }) {
  const r = M.useRef(), a = M.useRef(), u = M.useRef();
  M.useRef();
  const f = cn((g) => g.route), h = cn((g) => g.bbox);
  return M.useEffect(() => {
    if (f && a.current && (a.current.clearLayers(), a.current.addData(f), r.current)) {
      const v = a.current.getBounds().pad(0.1);
      r.current.fitBounds(v);
    }
  }, [f, n2]), M.useEffect(() => {
    u.current && u.current.setStyle({ fillColor: n2 });
  }, [n2]), I.jsx("div", { style: { position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }, children: I.jsxs(TE, { zoom: 10, bounds: h, zoomControl: false, ref: r, style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }, children: [I.jsx(lf, { name: "basemap", style: { zIndex: 0 }, children: I.jsx(RE, { url: "https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", attribution: '\xA9 <a href="https://carto.com/">CARTO</a>' }) }), I.jsx(lf, { name: "color-overlay", style: { zIndex: 1, mixBlendMode: "lighten", transform: "translateZ(0)" }, children: I.jsx(AE, { bounds: [[-90, -180], [90, 180]], pathOptions: { fillOpacity: 1, color: n2 } }, u) }), I.jsx("div", { style: { position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: n2, mixBlendMode: "lighten", pointerEvents: "none", zIndex: 10 } }), f && I.jsx(lf, { name: "route", style: { zIndex: 500 }, children: I.jsx(zE, { ref: a, routeData: f, mainColor: n2 }) }), I.jsx(lf, { name: "markers", style: { zIndex: 600 }, children: I.jsx(kE, { mapRef: r }) })] }) });
}
function BE({ theme: n2, options: r, showLabel: a = true, variant: u = "mini", prev: f = null, next: h = null }) {
  const [g, v] = M.useState(r[0]);
  function y(S) {
    const R = (r.indexOf(g) + S + r.length) % r.length;
    v(r[R]);
  }
  const b = { left: { label: "\u25C0", fn: () => {
    y(-1), f && f();
  } }, right: { label: "\u25B6", fn: () => {
    y(1), h && h();
  } } };
  return I.jsxs(j4, { sx: { position: "absolute", top: 0, width: "100%", zIndex: 10, height: `${n2.grid.units.h - 2}px`, color: n2.palette.primary.main, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", pointerEvents: "none" }, children: [I.jsx(Cr, { variant: u, sx: { pointerEvents: "auto" }, onClick: b.left.fn, children: b.left.label }), a && I.jsx(u_, { label: g }), I.jsx(Cr, { variant: u, onClick: b.right.fn, sx: { pointerEvents: "auto" }, children: b.right.label })] });
}
function DE({ theme: n2, initMap: r }) {
  const a = ["Distanza", "Pendenza", "Larghezza", "Incidenti"];
  return I.jsxs(Mu, { focus: true, sx: { overflow: "hidden", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", marginY: n2.grid.spacing, flexGrow: 1 }, children: [I.jsx(BE, { theme: n2, options: a }), I.jsx(x_, { sx: { position: "absolute", bottom: 0, width: "100%", zIndex: 10 }, label: "Segnala un Problema" }), r && I.jsx(PE, { mainColor: n2.palette.primary.main })] });
}
function NE({ theme: n2 }) {
  const [r, a] = M.useState(false);
  return M.useEffect(() => {
    async function u() {
      try {
        const f = await J4({});
        cn.setState({ bbox: f.bbox }), a(true);
      } catch (f) {
        console.error("Error fetching bbox:", f);
      }
    }
    u();
  }, []), I.jsxs(I.Fragment, { children: [I.jsx(Yy, { theme: n2, label: "Da", placeholder: "Seleziona origine" }), I.jsx(Yy, { theme: n2, label: "A", placeholder: "Seleziona destinazione" }), I.jsx(DE, { theme: n2, initMap: r })] });
}
const $E = Er(I.jsx("path", { d: "M19 12h3L12 3 2 12h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2zM7 15v-4.81l4-3.6V15zm6 0V6.59l4 3.6V15z" })), IE = Er(I.jsx("path", { d: "m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M15 19l-6-2.11V5l6 2.11z" })), jE = Er(I.jsx("path", { d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6" }));
function HE({ page: n2 }) {
  const r = qo(), a = [{ icon: $E, action: () => console.log("Logo clicked") }, { icon: jE, action: () => cn.setState({ page: "profiles" }), page: "profiles" }, { icon: IE, action: () => cn.setState({ page: "map" }), page: "map" }];
  return I.jsx(ji, { sx: { width: "100%", height: `${r.grid.units.h}px`, marginY: r.grid.spacing, borderRadius: r.brdRad, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }, children: a.map((u, f) => {
    const h = n2 == u.page;
    return I.jsxs(M.Fragment, { children: [I.jsx(Cr, { onClick: u.action, variant: h ? "inverted" : "default", sx: { width: `${r.iconH}`, height: `${r.iconH}`, marginLeft: f === 0 ? 0 : r.grid.spacing }, children: I.jsx(u.icon, {}) }), f == 0 ? I.jsx(ji, { sx: { flexGrow: 1 } }) : null] }, f);
  }) });
}
const UE = Er(I.jsx("path", { d: "M21.95 10.99c-1.79-.03-3.7-1.95-2.68-4.22-2.98 1-5.77-1.59-5.19-4.56C6.95.71 2 6.58 2 12c0 5.52 4.48 10 10 10 5.89 0 10.54-5.08 9.95-11.01M8.5 15c-.83 0-1.5-.67-1.5-1.5S7.67 12 8.5 12s1.5.67 1.5 1.5S9.33 15 8.5 15m2-5C9.67 10 9 9.33 9 8.5S9.67 7 10.5 7s1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" }));
function FE() {
  const n2 = qo();
  return I.jsxs(ji, { sx: { width: "100%", height: `${n2.grid.units.h}px`, marginY: n2.grid.spacing, borderRadius: n2.brdRad, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, children: [I.jsxs(ji, { sx: { display: "flex", flexDirection: "column", height: "100%", justifyContent: "flex-end", alignItems: "flex-start", fontSize: "0.8rem" }, children: [I.jsx(JT, { sx: { fontWeight: "bold" }, children: "Contattaci" }), I.jsx(Ff, { sx: { fontSize: "0.8rem" }, children: "Systematica - Transform Transport" })] }), I.jsx(Cr, { sx: { width: `${n2.iconH}`, height: `${n2.iconH}` }, children: I.jsx(UE, { sx: { width: "60%", height: "60%", color: n2.palette.secondary.main } }) })] });
}
function ZE({ theme: n2 }) {
  const r = cn((a) => a.page);
  return I.jsxs(I.Fragment, { children: [I.jsx(HE, { page: r }), r == "profiles" && I.jsx(oE, { theme: n2 }), r == "map" && I.jsx(NE, { theme: n2 }), I.jsx(FE, { page: r })] });
}
function VE() {
  cn((a) => a.prevSession), cn((a) => a.profile);
  const n2 = cn((a) => a.mainColor), r = $3(n2);
  return cn((a) => a.page), I.jsx(E3, { theme: r, children: I.jsx(iT, { children: I.jsx(ji, { sx: { height: "100%", width: "100%", p: r.mainContainerPadding, boxSizing: "border-box", display: "flex", flexDirection: "column", backgroundColor: r.palette.background.main }, children: I.jsx(ZE, { theme: r }) }) }) });
}
const GE = K2.createRoot(document.querySelector("#root"));
function qE() {
  const [n2, r] = M.useState(0), a = { addresses: { file: "./COMUNE_MONZA_Numerazione_Civica_Comunale.geojson" } };
  return M.useEffect(() => {
    Object.entries(a).forEach(([u, { file: f }]) => {
      fetch(f).then((h) => h.json()).then((h) => {
        console.log(h), cn.setState({ [u]: h.features });
      }).catch(console.error).finally(() => {
        r((h) => h + 1);
      });
    });
  }, []), n2 < Object.keys(a).length ? I.jsx("div", { style: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: I.jsx(um, {}) }) : I.jsx(VE, {});
}
GE.render(I.jsx(qE, {}));
