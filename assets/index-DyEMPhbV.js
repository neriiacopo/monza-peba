var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function z1(n3, r) {
  for (var a = 0; a < r.length; a++) {
    const u = r[a];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const f in u) if (f !== "default" && !(f in n3)) {
        const h = Object.getOwnPropertyDescriptor(u, f);
        h && Object.defineProperty(n3, f, h.get ? h : { enumerable: true, get: () => u[f] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(n3, Symbol.toStringTag, { value: "Module" }));
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
function Lp(n3) {
  return n3 && n3.__esModule && Object.prototype.hasOwnProperty.call(n3, "default") ? n3.default : n3;
}
var Dh = { exports: {} }, eu = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var fy;
function k1() {
  if (fy) return eu;
  fy = 1;
  var n3 = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function a(u, f, h) {
    var g = null;
    if (h !== void 0 && (g = "" + h), f.key !== void 0 && (g = "" + f.key), "key" in f) {
      h = {};
      for (var v in f) v !== "key" && (h[v] = f[v]);
    } else h = f;
    return f = h.ref, { $$typeof: n3, type: u, key: g, ref: f !== void 0 ? f : null, props: h };
  }
  return eu.Fragment = r, eu.jsx = a, eu.jsxs = a, eu;
}
var dy;
function B1() {
  return dy || (dy = 1, Dh.exports = k1()), Dh.exports;
}
var Z = B1(), Nh = { exports: {} }, nu = {}, $h = { exports: {} }, Ih = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var hy;
function D1() {
  return hy || (hy = 1, function(n3) {
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
        t: for (var gt = 0, z = B.length, Y = z >>> 1; gt < Y; ) {
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
    if (n3.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      n3.unstable_now = function() {
        return h.now();
      };
    } else {
      var g = Date, v = g.now();
      n3.unstable_now = function() {
        return g.now() - v;
      };
    }
    var y = [], b = [], S = 1, w = null, A = 3, P = false, R = false, M = false, $ = false, U = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function N(B) {
      for (var tt = a(b); tt !== null; ) {
        if (tt.callback === null) u(b);
        else if (tt.startTime <= B) u(b), tt.sortIndex = tt.expirationTime, r(y, tt);
        else break;
        tt = a(b);
      }
    }
    function k(B) {
      if (M = false, N(B), !R) if (a(y) !== null) R = true, j || (j = true, C());
      else {
        var tt = a(b);
        tt !== null && et(k, tt.startTime - B);
      }
    }
    var j = false, X = -1, J = 5, it = -1;
    function ut() {
      return $ ? true : !(n3.unstable_now() - it < J);
    }
    function ot() {
      if ($ = false, j) {
        var B = n3.unstable_now();
        it = B;
        var tt = true;
        try {
          t: {
            R = false, M && (M = false, V(X), X = -1), P = true;
            var rt = A;
            try {
              e: {
                for (N(B), w = a(y); w !== null && !(w.expirationTime > B && ut()); ) {
                  var gt = w.callback;
                  if (typeof gt == "function") {
                    w.callback = null, A = w.priorityLevel;
                    var z = gt(w.expirationTime <= B);
                    if (B = n3.unstable_now(), typeof z == "function") {
                      w.callback = z, N(B), tt = true;
                      break e;
                    }
                    w === a(y) && u(y), N(B);
                  } else u(y);
                  w = a(y);
                }
                if (w !== null) tt = true;
                else {
                  var Y = a(b);
                  Y !== null && et(k, Y.startTime - B), tt = false;
                }
              }
              break t;
            } finally {
              w = null, A = rt, P = false;
            }
            tt = void 0;
          }
        } finally {
          tt ? C() : j = false;
        }
      }
    }
    var C;
    if (typeof D == "function") C = function() {
      D(ot);
    };
    else if (typeof MessageChannel < "u") {
      var st = new MessageChannel(), W = st.port2;
      st.port1.onmessage = ot, C = function() {
        W.postMessage(null);
      };
    } else C = function() {
      U(ot, 0);
    };
    function et(B, tt) {
      X = U(function() {
        B(n3.unstable_now());
      }, tt);
    }
    n3.unstable_IdlePriority = 5, n3.unstable_ImmediatePriority = 1, n3.unstable_LowPriority = 4, n3.unstable_NormalPriority = 3, n3.unstable_Profiling = null, n3.unstable_UserBlockingPriority = 2, n3.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, n3.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : J = 0 < B ? Math.floor(1e3 / B) : 5;
    }, n3.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, n3.unstable_next = function(B) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var tt = 3;
          break;
        default:
          tt = A;
      }
      var rt = A;
      A = tt;
      try {
        return B();
      } finally {
        A = rt;
      }
    }, n3.unstable_requestPaint = function() {
      $ = true;
    }, n3.unstable_runWithPriority = function(B, tt) {
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
      var rt = A;
      A = B;
      try {
        return tt();
      } finally {
        A = rt;
      }
    }, n3.unstable_scheduleCallback = function(B, tt, rt) {
      var gt = n3.unstable_now();
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
      return z = rt + z, B = { id: S++, callback: tt, priorityLevel: B, startTime: rt, expirationTime: z, sortIndex: -1 }, rt > gt ? (B.sortIndex = rt, r(b, B), a(y) === null && B === a(b) && (M ? (V(X), X = -1) : M = true, et(k, rt - gt))) : (B.sortIndex = z, r(y, B), R || P || (R = true, j || (j = true, C()))), B;
    }, n3.unstable_shouldYield = ut, n3.unstable_wrapCallback = function(B) {
      var tt = A;
      return function() {
        var rt = A;
        A = tt;
        try {
          return B.apply(this, arguments);
        } finally {
          A = rt;
        }
      };
    };
  }(Ih)), Ih;
}
var py;
function N1() {
  return py || (py = 1, $h.exports = D1()), $h.exports;
}
var Hh = { exports: {} }, se = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var my;
function $1() {
  if (my) return se;
  my = 1;
  var n3 = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), g = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), w = Symbol.iterator;
  function A(z) {
    return z === null || typeof z != "object" ? null : (z = w && z[w] || z["@@iterator"], typeof z == "function" ? z : null);
  }
  var P = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, R = Object.assign, M = {};
  function $(z, Y, ft) {
    this.props = z, this.context = Y, this.refs = M, this.updater = ft || P;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(z, Y) {
    if (typeof z != "object" && typeof z != "function" && z != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, z, Y, "setState");
  }, $.prototype.forceUpdate = function(z) {
    this.updater.enqueueForceUpdate(this, z, "forceUpdate");
  };
  function U() {
  }
  U.prototype = $.prototype;
  function V(z, Y, ft) {
    this.props = z, this.context = Y, this.refs = M, this.updater = ft || P;
  }
  var D = V.prototype = new U();
  D.constructor = V, R(D, $.prototype), D.isPureReactComponent = true;
  var N = Array.isArray, k = { H: null, A: null, T: null, S: null, V: null }, j = Object.prototype.hasOwnProperty;
  function X(z, Y, ft, dt, bt, _t) {
    return ft = _t.ref, { $$typeof: n3, type: z, key: Y, ref: ft !== void 0 ? ft : null, props: _t };
  }
  function J(z, Y) {
    return X(z.type, Y, void 0, void 0, void 0, z.props);
  }
  function it(z) {
    return typeof z == "object" && z !== null && z.$$typeof === n3;
  }
  function ut(z) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + z.replace(/[=:]/g, function(ft) {
      return Y[ft];
    });
  }
  var ot = /\/+/g;
  function C(z, Y) {
    return typeof z == "object" && z !== null && z.key != null ? ut("" + z.key) : Y.toString(36);
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
        switch (typeof z.status == "string" ? z.then(st, st) : (z.status = "pending", z.then(function(Y) {
          z.status === "pending" && (z.status = "fulfilled", z.value = Y);
        }, function(Y) {
          z.status === "pending" && (z.status = "rejected", z.reason = Y);
        })), z.status) {
          case "fulfilled":
            return z.value;
          case "rejected":
            throw z.reason;
        }
    }
    throw z;
  }
  function et(z, Y, ft, dt, bt) {
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
          case n3:
          case r:
            ct = true;
            break;
          case S:
            return ct = z._init, et(ct(z._payload), Y, ft, dt, bt);
        }
    }
    if (ct) return bt = bt(z), ct = dt === "" ? "." + C(z, 0) : dt, N(bt) ? (ft = "", ct != null && (ft = ct.replace(ot, "$&/") + "/"), et(bt, Y, ft, "", function($t) {
      return $t;
    })) : bt != null && (it(bt) && (bt = J(bt, ft + (bt.key == null || z && z.key === bt.key ? "" : ("" + bt.key).replace(ot, "$&/") + "/") + ct)), Y.push(bt)), 1;
    ct = 0;
    var At = dt === "" ? "." : dt + ":";
    if (N(z)) for (var Pt = 0; Pt < z.length; Pt++) dt = z[Pt], _t = At + C(dt, Pt), ct += et(dt, Y, ft, _t, bt);
    else if (Pt = A(z), typeof Pt == "function") for (z = Pt.call(z), Pt = 0; !(dt = z.next()).done; ) dt = dt.value, _t = At + C(dt, Pt++), ct += et(dt, Y, ft, _t, bt);
    else if (_t === "object") {
      if (typeof z.then == "function") return et(W(z), Y, ft, dt, bt);
      throw Y = String(z), Error("Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead.");
    }
    return ct;
  }
  function B(z, Y, ft) {
    if (z == null) return z;
    var dt = [], bt = 0;
    return et(z, dt, "", "", function(_t) {
      return Y.call(ft, _t, bt++);
    }), dt;
  }
  function tt(z) {
    if (z._status === -1) {
      var Y = z._result;
      Y = Y(), Y.then(function(ft) {
        (z._status === 0 || z._status === -1) && (z._status = 1, z._result = ft);
      }, function(ft) {
        (z._status === 0 || z._status === -1) && (z._status = 2, z._result = ft);
      }), z._status === -1 && (z._status = 0, z._result = Y);
    }
    if (z._status === 1) return z._result.default;
    throw z._result;
  }
  var rt = typeof reportError == "function" ? reportError : function(z) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof z == "object" && z !== null && typeof z.message == "string" ? String(z.message) : String(z), error: z });
      if (!window.dispatchEvent(Y)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", z);
      return;
    }
    console.error(z);
  };
  function gt() {
  }
  return se.Children = { map: B, forEach: function(z, Y, ft) {
    B(z, function() {
      Y.apply(this, arguments);
    }, ft);
  }, count: function(z) {
    var Y = 0;
    return B(z, function() {
      Y++;
    }), Y;
  }, toArray: function(z) {
    return B(z, function(Y) {
      return Y;
    }) || [];
  }, only: function(z) {
    if (!it(z)) throw Error("React.Children.only expected to receive a single React element child.");
    return z;
  } }, se.Component = $, se.Fragment = a, se.Profiler = f, se.PureComponent = V, se.StrictMode = u, se.Suspense = y, se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, se.__COMPILER_RUNTIME = { __proto__: null, c: function(z) {
    return k.H.useMemoCache(z);
  } }, se.cache = function(z) {
    return function() {
      return z.apply(null, arguments);
    };
  }, se.cloneElement = function(z, Y, ft) {
    if (z == null) throw Error("The argument must be a React element, but you passed " + z + ".");
    var dt = R({}, z.props), bt = z.key, _t = void 0;
    if (Y != null) for (ct in Y.ref !== void 0 && (_t = void 0), Y.key !== void 0 && (bt = "" + Y.key), Y) !j.call(Y, ct) || ct === "key" || ct === "__self" || ct === "__source" || ct === "ref" && Y.ref === void 0 || (dt[ct] = Y[ct]);
    var ct = arguments.length - 2;
    if (ct === 1) dt.children = ft;
    else if (1 < ct) {
      for (var At = Array(ct), Pt = 0; Pt < ct; Pt++) At[Pt] = arguments[Pt + 2];
      dt.children = At;
    }
    return X(z.type, bt, void 0, void 0, _t, dt);
  }, se.createContext = function(z) {
    return z = { $$typeof: g, _currentValue: z, _currentValue2: z, _threadCount: 0, Provider: null, Consumer: null }, z.Provider = z, z.Consumer = { $$typeof: h, _context: z }, z;
  }, se.createElement = function(z, Y, ft) {
    var dt, bt = {}, _t = null;
    if (Y != null) for (dt in Y.key !== void 0 && (_t = "" + Y.key), Y) j.call(Y, dt) && dt !== "key" && dt !== "__self" && dt !== "__source" && (bt[dt] = Y[dt]);
    var ct = arguments.length - 2;
    if (ct === 1) bt.children = ft;
    else if (1 < ct) {
      for (var At = Array(ct), Pt = 0; Pt < ct; Pt++) At[Pt] = arguments[Pt + 2];
      bt.children = At;
    }
    if (z && z.defaultProps) for (dt in ct = z.defaultProps, ct) bt[dt] === void 0 && (bt[dt] = ct[dt]);
    return X(z, _t, void 0, void 0, null, bt);
  }, se.createRef = function() {
    return { current: null };
  }, se.forwardRef = function(z) {
    return { $$typeof: v, render: z };
  }, se.isValidElement = it, se.lazy = function(z) {
    return { $$typeof: S, _payload: { _status: -1, _result: z }, _init: tt };
  }, se.memo = function(z, Y) {
    return { $$typeof: b, type: z, compare: Y === void 0 ? null : Y };
  }, se.startTransition = function(z) {
    var Y = k.T, ft = {};
    k.T = ft;
    try {
      var dt = z(), bt = k.S;
      bt !== null && bt(ft, dt), typeof dt == "object" && dt !== null && typeof dt.then == "function" && dt.then(gt, rt);
    } catch (_t) {
      rt(_t);
    } finally {
      k.T = Y;
    }
  }, se.unstable_useCacheRefresh = function() {
    return k.H.useCacheRefresh();
  }, se.use = function(z) {
    return k.H.use(z);
  }, se.useActionState = function(z, Y, ft) {
    return k.H.useActionState(z, Y, ft);
  }, se.useCallback = function(z, Y) {
    return k.H.useCallback(z, Y);
  }, se.useContext = function(z) {
    return k.H.useContext(z);
  }, se.useDebugValue = function() {
  }, se.useDeferredValue = function(z, Y) {
    return k.H.useDeferredValue(z, Y);
  }, se.useEffect = function(z, Y, ft) {
    var dt = k.H;
    if (typeof ft == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
    return dt.useEffect(z, Y);
  }, se.useId = function() {
    return k.H.useId();
  }, se.useImperativeHandle = function(z, Y, ft) {
    return k.H.useImperativeHandle(z, Y, ft);
  }, se.useInsertionEffect = function(z, Y) {
    return k.H.useInsertionEffect(z, Y);
  }, se.useLayoutEffect = function(z, Y) {
    return k.H.useLayoutEffect(z, Y);
  }, se.useMemo = function(z, Y) {
    return k.H.useMemo(z, Y);
  }, se.useOptimistic = function(z, Y) {
    return k.H.useOptimistic(z, Y);
  }, se.useReducer = function(z, Y, ft) {
    return k.H.useReducer(z, Y, ft);
  }, se.useRef = function(z) {
    return k.H.useRef(z);
  }, se.useState = function(z) {
    return k.H.useState(z);
  }, se.useSyncExternalStore = function(z, Y, ft) {
    return k.H.useSyncExternalStore(z, Y, ft);
  }, se.useTransition = function() {
    return k.H.useTransition();
  }, se.version = "19.1.0", se;
}
var gy;
function Pp() {
  return gy || (gy = 1, Hh.exports = $1()), Hh.exports;
}
var jh = { exports: {} }, Yn = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var vy;
function I1() {
  if (vy) return Yn;
  vy = 1;
  var n3 = Pp();
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
    var w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: f, key: w == null ? null : "" + w, children: y, containerInfo: b, implementation: S };
  }
  var g = n3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
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
      var S = b.as, w = v(S, b.crossOrigin), A = typeof b.integrity == "string" ? b.integrity : void 0, P = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      S === "style" ? u.d.S(y, typeof b.precedence == "string" ? b.precedence : void 0, { crossOrigin: w, integrity: A, fetchPriority: P }) : S === "script" && u.d.X(y, { crossOrigin: w, integrity: A, fetchPriority: P, nonce: typeof b.nonce == "string" ? b.nonce : void 0 });
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
      var S = b.as, w = v(S, b.crossOrigin);
      u.d.L(y, S, { crossOrigin: w, integrity: typeof b.integrity == "string" ? b.integrity : void 0, nonce: typeof b.nonce == "string" ? b.nonce : void 0, type: typeof b.type == "string" ? b.type : void 0, fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0, referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0, imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0, imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0, media: typeof b.media == "string" ? b.media : void 0 });
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
var yy;
function Y_() {
  if (yy) return jh.exports;
  yy = 1;
  function n3() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n3);
    } catch (r) {
      console.error(r);
    }
  }
  return n3(), jh.exports = I1(), jh.exports;
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
var _y;
function H1() {
  if (_y) return nu;
  _y = 1;
  var n3 = N1(), r = Pp(), a = Y_();
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
        for (var x = false, E = d.child; E; ) {
          if (E === o) {
            x = true, o = d, l = p;
            break;
          }
          if (E === l) {
            x = true, l = d, o = p;
            break;
          }
          E = E.sibling;
        }
        if (!x) {
          for (E = p.child; E; ) {
            if (E === o) {
              x = true, o = p, l = d;
              break;
            }
            if (E === l) {
              x = true, l = p, o = d;
              break;
            }
            E = E.sibling;
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
  var S = Object.assign, w = Symbol.for("react.element"), A = Symbol.for("react.transitional.element"), P = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), V = Symbol.for("react.consumer"), D = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), it = Symbol.for("react.activity"), ut = Symbol.for("react.memo_cache_sentinel"), ot = Symbol.iterator;
  function C(t) {
    return t === null || typeof t != "object" ? null : (t = ot && t[ot] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var st = Symbol.for("react.client.reference");
  function W(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === st ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case R:
        return "Fragment";
      case $:
        return "Profiler";
      case M:
        return "StrictMode";
      case k:
        return "Suspense";
      case j:
        return "SuspenseList";
      case it:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case P:
        return "Portal";
      case D:
        return (t.displayName || "Context") + ".Provider";
      case V:
        return (t._context.displayName || "Context") + ".Consumer";
      case N:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case X:
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
  function Y(t) {
    return { current: t };
  }
  function ft(t) {
    0 > z || (t.current = gt[z], gt[z] = null, z--);
  }
  function dt(t, e) {
    z++, gt[z] = t.current, t.current = e;
  }
  var bt = Y(null), _t = Y(null), ct = Y(null), At = Y(null);
  function Pt(t, e) {
    switch (dt(ct, e), dt(_t, t), dt(bt, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Iv(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI) e = Iv(e), t = Hv(e, t);
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
    var e = bt.current, o = Hv(e, t.type);
    e !== o && (dt(_t, t), dt(bt, o));
  }
  function Ut(t) {
    _t.current === t && (ft(bt), ft(_t)), At.current === t && (ft(At), Kl._currentValue = rt);
  }
  var Wt = Object.prototype.hasOwnProperty, te = n3.unstable_scheduleCallback, qt = n3.unstable_cancelCallback, de = n3.unstable_shouldYield, ie = n3.unstable_requestPaint, ue = n3.unstable_now, Tt = n3.unstable_getCurrentPriorityLevel, _e = n3.unstable_ImmediatePriority, Bt = n3.unstable_UserBlockingPriority, Jt = n3.unstable_NormalPriority, Ot = n3.unstable_LowPriority, tn = n3.unstable_IdlePriority, be = n3.log, qe = n3.unstable_setDisableYieldValue, ce = null, Vt = null;
  function oe(t) {
    if (typeof be == "function" && qe(t), Vt && typeof Vt.setStrictMode == "function") try {
      Vt.setStrictMode(ce, t);
    } catch {
    }
  }
  var he = Math.clz32 ? Math.clz32 : cn, xe = Math.log, jt = Math.LN2;
  function cn(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (xe(t) / jt | 0) | 0;
  }
  var kn = 256, rn = 4194304;
  function kt(t) {
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
    var E = l & 134217727;
    return E !== 0 ? (l = E & ~p, l !== 0 ? d = kt(l) : (x &= E, x !== 0 ? d = kt(x) : o || (o = E & ~t, o !== 0 && (d = kt(o))))) : (E = l & ~p, E !== 0 ? d = kt(E) : x !== 0 ? d = kt(x) : o || (o = l & ~t, o !== 0 && (d = kt(o)))), d === 0 ? 0 : e !== 0 && e !== d && (e & p) === 0 && (p = d & -d, o = e & -e, p >= o || p === 32 && (o & 4194048) !== 0) ? e : d;
  }
  function re(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Kn(t, e) {
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
  function so() {
    var t = kn;
    return kn <<= 1, (kn & 4194048) === 0 && (kn = 256), t;
  }
  function lo() {
    var t = rn;
    return rn <<= 1, (rn & 62914560) === 0 && (rn = 4194304), t;
  }
  function Wn(t) {
    for (var e = [], o = 0; 31 > o; o++) e.push(t);
    return e;
  }
  function Tn(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function uo(t, e, o, l, d, p) {
    var x = t.pendingLanes;
    t.pendingLanes = o, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= o, t.entangledLanes &= o, t.errorRecoveryDisabledLanes &= o, t.shellSuspendCounter = 0;
    var E = t.entanglements, H = t.expirationTimes, Q = t.hiddenUpdates;
    for (o = x & ~o; 0 < o; ) {
      var vt = 31 - he(o), xt = 1 << vt;
      E[vt] = 0, H[vt] = -1;
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
  function Yo(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Zi() {
    var t = tt.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : ry(t.type));
  }
  function To(t, e) {
    var o = tt.p;
    try {
      return tt.p = t, e();
    } finally {
      tt.p = o;
    }
  }
  var di = Math.random().toString(36).slice(2), Qe = "__reactFiber$" + di, an = "__reactProps$" + di, hi = "__reactContainer$" + di, wn = "__reactEvents$" + di, Dt = "__reactListeners$" + di, Cr = "__reactHandles$" + di, Fo = "__reactResources$" + di, pi = "__reactMarker$" + di;
  function Ve(t) {
    delete t[Qe], delete t[an], delete t[wn], delete t[Dt], delete t[Cr];
  }
  function ke(t) {
    var e = t[Qe];
    if (e) return e;
    for (var o = t.parentNode; o; ) {
      if (e = o[hi] || o[Qe]) {
        if (o = e.alternate, e.child !== null || o !== null && o.child !== null) for (t = qv(t); t !== null; ) {
          if (o = t[Qe]) return o;
          t = qv(t);
        }
        return e;
      }
      t = o, o = t.parentNode;
    }
    return null;
  }
  function En(t) {
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
  function Qn(t) {
    var e = t[Fo];
    return e || (e = t[Fo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Je(t) {
    t[pi] = true;
  }
  var pt = /* @__PURE__ */ new Set(), ht = {};
  function wt(t, e) {
    It(t, e), It(t + "Capture", e);
  }
  function It(t, e) {
    for (ht[t] = e, t = 0; t < e.length; t++) pt.add(e[t]);
  }
  var Ft = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ge = {}, Ye = {};
  function Jn(t) {
    return Wt.call(Ye, t) ? true : Wt.call(Ge, t) ? false : Ft.test(t) ? Ye[t] = true : (Ge[t] = true, false);
  }
  function co(t, e, o) {
    if (Jn(e)) if (o === null) t.removeAttribute(e);
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
  function Xo(t, e, o) {
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
  var wo, ae;
  function On(t) {
    if (wo === void 0) try {
      throw Error();
    } catch (o) {
      var e = o.stack.trim().match(/\n( *(at )?)/);
      wo = e && e[1] || "", ae = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + wo + t + ae;
  }
  var ti = false;
  function ei(t, e) {
    if (!t || ti) return "";
    ti = true;
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
      var p = l.DetermineComponentFrameRoot(), x = p[0], E = p[1];
      if (x && E) {
        var H = x.split(`
`), Q = E.split(`
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
      ti = false, Error.prepareStackTrace = o;
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
        return ei(t.type, false);
      case 11:
        return ei(t.type.render, false);
      case 1:
        return ei(t.type, true);
      case 31:
        return On("Activity");
      default:
        return "";
    }
  }
  function Fe(t) {
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
  function Bn(t) {
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
  function Ko(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Tr(t) {
    var e = Ko(t) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), l = "" + t[e];
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
  function wr(t) {
    t._valueTracker || (t._valueTracker = Tr(t));
  }
  function ee(t) {
    if (!t) return false;
    var e = t._valueTracker;
    if (!e) return true;
    var o = e.getValue(), l = "";
    return t && (l = Ko(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== o ? (e.setValue(t), true) : false;
  }
  function Xe(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var rl = /[\n"\\]/g;
  function Dn(t) {
    return t.replace(rl, function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function qn(t, e, o, l, d, p, x, E) {
    t.name = "", x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? t.type = x : t.removeAttribute("type"), e != null ? x === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Bn(e)) : t.value !== "" + Bn(e) && (t.value = "" + Bn(e)) : x !== "submit" && x !== "reset" || t.removeAttribute("value"), e != null ? Er(t, x, Bn(e)) : o != null ? Er(t, x, Bn(o)) : l != null && t.removeAttribute("value"), d == null && p != null && (t.defaultChecked = !!p), d != null && (t.checked = d && typeof d != "function" && typeof d != "symbol"), E != null && typeof E != "function" && typeof E != "symbol" && typeof E != "boolean" ? t.name = "" + Bn(E) : t.removeAttribute("name");
  }
  function Du(t, e, o, l, d, p, x, E) {
    if (p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (t.type = p), e != null || o != null) {
      if (!(p !== "submit" && p !== "reset" || e != null)) return;
      o = o != null ? "" + Bn(o) : "", e = e != null ? "" + Bn(e) : o, E || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? d, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = E ? t.checked : !!l, t.defaultChecked = !!l, x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" && (t.name = x);
  }
  function Er(t, e, o) {
    e === "number" && Xe(t.ownerDocument) === t || t.defaultValue === "" + o || (t.defaultValue = "" + o);
  }
  function gi(t, e, o, l) {
    if (t = t.options, e) {
      e = {};
      for (var d = 0; d < o.length; d++) e["$" + o[d]] = true;
      for (o = 0; o < t.length; o++) d = e.hasOwnProperty("$" + t[o].value), t[o].selected !== d && (t[o].selected = d), d && l && (t[o].defaultSelected = true);
    } else {
      for (o = "" + Bn(o), e = null, d = 0; d < t.length; d++) {
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
    if (e != null && (e = "" + Bn(e), e !== t.value && (t.value = e), o == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = o != null ? "" + Bn(o) : "";
  }
  function Eo(t, e, o, l) {
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
    o = Bn(e), t.defaultValue = o, l = t.textContent, l === o && l !== "" && l !== null && (t.value = l);
  }
  function qi(t, e) {
    if (e) {
      var o = t.firstChild;
      if (o && o === t.lastChild && o.nodeType === 3) {
        o.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var ga = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function ts(t, e, o) {
    var l = e.indexOf("--") === 0;
    o == null || typeof o == "boolean" || o === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, o) : typeof o != "number" || o === 0 || ga.has(e) ? e === "float" ? t.cssFloat = o : t[e] = ("" + o).trim() : t[e] = o + "px";
  }
  function Or(t, e, o) {
    if (e != null && typeof e != "object") throw Error(u(62));
    if (t = t.style, o != null) {
      for (var l in o) !o.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var d in e) l = e[d], e.hasOwnProperty(d) && o[d] !== l && ts(t, d, l);
    } else for (var p in e) e.hasOwnProperty(p) && ts(t, p, e[p]);
  }
  function va(t) {
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
  var al = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), es = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Mr(t) {
    return es.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var ya = null;
  function Ar(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Wo = null, Oo = null;
  function Nu(t) {
    var e = En(t);
    if (e && (t = e.stateNode)) {
      var o = t[an] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (qn(t, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name), e = o.name, o.type === "radio" && e != null) {
            for (o = t; o.parentNode; ) o = o.parentNode;
            for (o = o.querySelectorAll('input[name="' + Dn("" + e) + '"][type="radio"]'), e = 0; e < o.length; e++) {
              var l = o[e];
              if (l !== t && l.form === t.form) {
                var d = l[an] || null;
                if (!d) throw Error(u(90));
                qn(l, d.value, d.defaultValue, d.defaultValue, d.checked, d.defaultChecked, d.type, d.name);
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
  function wi(t, e, o) {
    if (Qt) return t(e, o);
    Qt = true;
    try {
      var l = t(e);
      return l;
    } finally {
      if (Qt = false, (Wo !== null || Oo !== null) && (Lc(), Wo && (e = Wo, t = Oo, Oo = Wo = null, Nu(e), t))) for (e = 0; e < t.length; e++) Nu(t[e]);
    }
  }
  function Te(t, e) {
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
  var Vi = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _a = false;
  if (Vi) try {
    var Qo = {};
    Object.defineProperty(Qo, "passive", { get: function() {
      _a = true;
    } }), window.addEventListener("test", Qo, Qo), window.removeEventListener("test", Qo, Qo);
  } catch {
    _a = false;
  }
  var Gi = null, fo = null, Rr = null;
  function Lr() {
    if (Rr) return Rr;
    var t, e = fo, o = e.length, l, d = "value" in Gi ? Gi.value : Gi.textContent, p = d.length;
    for (t = 0; t < o && e[t] === d[t]; t++) ;
    var x = o - t;
    for (l = 1; l <= x && e[o - l] === d[p - l]; l++) ;
    return Rr = d.slice(t, 1 < l ? 1 - l : void 0);
  }
  function fn(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Yi() {
    return true;
  }
  function sl() {
    return false;
  }
  function Nn(t) {
    function e(o, l, d, p, x) {
      this._reactName = o, this._targetInst = d, this.type = l, this.nativeEvent = p, this.target = x, this.currentTarget = null;
      for (var E in t) t.hasOwnProperty(E) && (o = t[E], this[E] = o ? o(p) : p[E]);
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
  var Jo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ba = Nn(Jo), tr = S({}, Jo, { view: 0, detail: 0 }), Ff = Nn(tr), ns, pe, xa, Vn = S({}, tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: is, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== xa && (xa && t.type === "mousemove" ? (ns = t.screenX - xa.screenX, pe = t.screenY - xa.screenY) : pe = ns = 0, xa = t), ns);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : pe;
  } }), Pr = Nn(Vn), $u = S({}, Vn, { dataTransfer: 0 }), Xf = Nn($u), ll = S({}, tr, { relatedTarget: 0 }), ul = Nn(ll), Iu = S({}, Jo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Kf = Nn(Iu), Wf = S({}, Jo, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), cl = Nn(Wf), Qf = S({}, Jo, { data: 0 }), Ei = Nn(Qf), Jf = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Hu = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Mo = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ju(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Mo[t]) ? !!e[t] : false;
  }
  function is() {
    return ju;
  }
  var fl = S({}, tr, { key: function(t) {
    if (t.key) {
      var e = Jf[t.key] || t.key;
      if (e !== "Unidentified") return e;
    }
    return t.type === "keypress" ? (t = fn(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Hu[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: is, charCode: function(t) {
    return t.type === "keypress" ? fn(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? fn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), td = Nn(fl), Uu = S({}, Vn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), dl = Nn(Uu), ed = S({}, tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: is }), nd = Nn(ed), hl = S({}, Jo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), id = Nn(hl), Zu = S({}, Vn, { deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  }, deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), qu = Nn(Zu), os = S({}, Jo, { newState: 0, oldState: 0 }), er = Nn(os), od = [9, 13, 27, 32], nr = Vi && "CompositionEvent" in window, Mn = null;
  Vi && "documentMode" in document && (Mn = document.documentMode);
  var Vu = Vi && "TextEvent" in window && !Mn, pl = Vi && (!nr || Mn && 8 < Mn && 11 >= Mn), Gu = " ", rs = false;
  function as(t, e) {
    switch (t) {
      case "keyup":
        return od.indexOf(e.keyCode) !== -1;
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
  var zr = false;
  function Fu(t, e) {
    switch (t) {
      case "compositionend":
        return Yu(e);
      case "keypress":
        return e.which !== 32 ? null : (rs = true, Gu);
      case "textInput":
        return t = e.data, t === Gu && rs ? null : t;
      default:
        return null;
    }
  }
  function rd(t, e) {
    if (zr) return t === "compositionend" || !nr && as(t, e) ? (t = Lr(), Rr = fo = Gi = null, zr = false, t) : null;
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
  var Oi = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function ir(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Oi[t.type] : e === "textarea";
  }
  function Xu(t, e, o, l) {
    Wo ? Oo ? Oo.push(l) : Oo = [l] : Wo = l, e = Nc(e, "onChange"), 0 < e.length && (o = new ba("onChange", "change", null, o, l), t.push({ event: o, listeners: e }));
  }
  var ni = null, Sa = null;
  function kr(t) {
    kv(t, 0);
  }
  function ss(t) {
    var e = Zn(t);
    if (ee(e)) return t;
  }
  function Br(t, e) {
    if (t === "change") return e;
  }
  var ml = false;
  if (Vi) {
    var Dr;
    if (Vi) {
      var gl = "oninput" in document;
      if (!gl) {
        var ho = document.createElement("div");
        ho.setAttribute("oninput", "return;"), gl = typeof ho.oninput == "function";
      }
      Dr = gl;
    } else Dr = false;
    ml = Dr && (!document.documentMode || 9 < document.documentMode);
  }
  function Ca() {
    ni && (ni.detachEvent("onpropertychange", Ku), Sa = ni = null);
  }
  function Ku(t) {
    if (t.propertyName === "value" && ss(Sa)) {
      var e = [];
      Xu(e, Sa, t, Ar(t)), wi(kr, e);
    }
  }
  function vl(t, e, o) {
    t === "focusin" ? (Ca(), ni = e, Sa = o, ni.attachEvent("onpropertychange", Ku)) : t === "focusout" && Ca();
  }
  function ad(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return ss(Sa);
  }
  function po(t, e) {
    if (t === "click") return ss(e);
  }
  function sd(t, e) {
    if (t === "input" || t === "change") return ss(e);
  }
  function Nr(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ii = typeof Object.is == "function" ? Object.is : Nr;
  function oi(t, e) {
    if (ii(t, e)) return true;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
    var o = Object.keys(t), l = Object.keys(e);
    if (o.length !== l.length) return false;
    for (l = 0; l < o.length; l++) {
      var d = o[l];
      if (!Wt.call(e, d) || !ii(t[d], e[d])) return false;
    }
    return true;
  }
  function Ta(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function yl(t, e) {
    var o = Ta(t);
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
      o = Ta(o);
    }
  }
  function ls(t, e) {
    return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? ls(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
  }
  function wa(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Xe(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var o = typeof e.contentWindow.location.href == "string";
      } catch {
        o = false;
      }
      if (o) t = e.contentWindow;
      else break;
      e = Xe(t.document);
    }
    return e;
  }
  function Ea(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var us = Vi && "documentMode" in document && 11 >= document.documentMode, Mi = null, $r = null, or = null, cs = false;
  function Wu(t, e, o) {
    var l = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    cs || Mi == null || Mi !== Xe(l) || (l = Mi, "selectionStart" in l && Ea(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), or && oi(or, l) || (or = l, l = Nc($r, "onSelect"), 0 < l.length && (e = new ba("onSelect", "select", null, e, o), t.push({ event: e, listeners: l }), e.target = Mi)));
  }
  function Fi(t, e) {
    var o = {};
    return o[t.toLowerCase()] = e.toLowerCase(), o["Webkit" + t] = "webkit" + e, o["Moz" + t] = "moz" + e, o;
  }
  var Ir = { animationend: Fi("Animation", "AnimationEnd"), animationiteration: Fi("Animation", "AnimationIteration"), animationstart: Fi("Animation", "AnimationStart"), transitionrun: Fi("Transition", "TransitionRun"), transitionstart: Fi("Transition", "TransitionStart"), transitioncancel: Fi("Transition", "TransitionCancel"), transitionend: Fi("Transition", "TransitionEnd") }, fs = {}, Qu = {};
  Vi && (Qu = document.createElement("div").style, "AnimationEvent" in window || (delete Ir.animationend.animation, delete Ir.animationiteration.animation, delete Ir.animationstart.animation), "TransitionEvent" in window || delete Ir.transitionend.transition);
  function Ao(t) {
    if (fs[t]) return fs[t];
    if (!Ir[t]) return t;
    var e = Ir[t], o;
    for (o in e) if (e.hasOwnProperty(o) && o in Qu) return fs[t] = e[o];
    return t;
  }
  var Ju = Ao("animationend"), Ai = Ao("animationiteration"), Oa = Ao("animationstart"), ld = Ao("transitionrun"), ds = Ao("transitionstart"), ud = Ao("transitioncancel"), _l = Ao("transitionend"), tc = /* @__PURE__ */ new Map(), rr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  rr.push("scrollEnd");
  function Ri(t, e) {
    tc.set(t, e), wt(e, [t]);
  }
  var ar = /* @__PURE__ */ new WeakMap();
  function ri(t, e) {
    if (typeof t == "object" && t !== null) {
      var o = ar.get(t);
      return o !== void 0 ? o : (e = { value: t, source: e, stack: Fe(e) }, ar.set(t, e), e);
    }
    return { value: t, source: e, stack: Fe(e) };
  }
  var ai = [], Hr = 0, Li = 0;
  function Ma() {
    for (var t = Hr, e = Li = Hr = 0; e < t; ) {
      var o = ai[e];
      ai[e++] = null;
      var l = ai[e];
      ai[e++] = null;
      var d = ai[e];
      ai[e++] = null;
      var p = ai[e];
      if (ai[e++] = null, l !== null && d !== null) {
        var x = l.pending;
        x === null ? d.next = d : (d.next = x.next, x.next = d), l.pending = d;
      }
      p !== 0 && Ra(o, d, p);
    }
  }
  function Aa(t, e, o, l) {
    ai[Hr++] = t, ai[Hr++] = e, ai[Hr++] = o, ai[Hr++] = l, Li |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function sr(t, e, o, l) {
    return Aa(t, e, o, l), Ro(t);
  }
  function jr(t, e) {
    return Aa(t, null, null, e), Ro(t);
  }
  function Ra(t, e, o) {
    t.lanes |= o;
    var l = t.alternate;
    l !== null && (l.lanes |= o);
    for (var d = false, p = t.return; p !== null; ) p.childLanes |= o, l = p.alternate, l !== null && (l.childLanes |= o), p.tag === 22 && (t = p.stateNode, t === null || t._visibility & 1 || (d = true)), t = p, p = p.return;
    return t.tag === 3 ? (p = t.stateNode, d && e !== null && (d = 31 - he(o), t = p.hiddenUpdates, l = t[d], l === null ? t[d] = [e] : l.push(e), e.lane = o | 536870912), p) : null;
  }
  function Ro(t) {
    if (50 < Ul) throw Ul = 0, ah = null, Error(u(185));
    for (var e = t.return; e !== null; ) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var lr = {};
  function ec(t, e, o, l) {
    this.tag = t, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function si(t, e, o, l) {
    return new ec(t, e, o, l);
  }
  function hs(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Xi(t, e) {
    var o = t.alternate;
    return o === null ? (o = si(t.tag, e, t.key, t.mode), o.elementType = t.elementType, o.type = t.type, o.stateNode = t.stateNode, o.alternate = t, t.alternate = o) : (o.pendingProps = e, o.type = t.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = t.flags & 65011712, o.childLanes = t.childLanes, o.lanes = t.lanes, o.child = t.child, o.memoizedProps = t.memoizedProps, o.memoizedState = t.memoizedState, o.updateQueue = t.updateQueue, e = t.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, o.sibling = t.sibling, o.index = t.index, o.ref = t.ref, o.refCleanup = t.refCleanup, o;
  }
  function bl(t, e) {
    t.flags &= 65011714;
    var o = t.alternate;
    return o === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = o.childLanes, t.lanes = o.lanes, t.child = o.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = o.memoizedProps, t.memoizedState = o.memoizedState, t.updateQueue = o.updateQueue, t.type = o.type, e = o.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t;
  }
  function La(t, e, o, l, d, p) {
    var x = 0;
    if (l = t, typeof t == "function") hs(t) && (x = 1);
    else if (typeof t == "string") x = b1(t, o, bt.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case it:
        return t = si(31, o, e, d), t.elementType = it, t.lanes = p, t;
      case R:
        return Lo(o.children, d, p, e);
      case M:
        x = 8, d |= 24;
        break;
      case $:
        return t = si(12, o, e, d | 2), t.elementType = $, t.lanes = p, t;
      case k:
        return t = si(13, o, e, d), t.elementType = k, t.lanes = p, t;
      case j:
        return t = si(19, o, e, d), t.elementType = j, t.lanes = p, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case U:
          case D:
            x = 10;
            break t;
          case V:
            x = 9;
            break t;
          case N:
            x = 11;
            break t;
          case X:
            x = 14;
            break t;
          case J:
            x = 16, l = null;
            break t;
        }
        x = 29, o = Error(u(130, t === null ? "null" : typeof t, "")), l = null;
    }
    return e = si(x, o, e, d), e.elementType = t, e.type = l, e.lanes = p, e;
  }
  function Lo(t, e, o, l) {
    return t = si(7, t, l, e), t.lanes = o, t;
  }
  function xl(t, e, o) {
    return t = si(6, t, null, e), t.lanes = o, t;
  }
  function ps(t, e, o) {
    return e = si(4, t.children !== null ? t.children : [], t.key, e), e.lanes = o, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
  }
  var ur = [], Ur = 0, i = null, s = 0, c = [], m = 0, _ = null, T = 1, I = "";
  function F(t, e) {
    ur[Ur++] = s, ur[Ur++] = i, i = t, s = e;
  }
  function lt(t, e, o) {
    c[m++] = T, c[m++] = I, c[m++] = _, _ = t;
    var l = T;
    t = I;
    var d = 32 - he(l) - 1;
    l &= ~(1 << d), o += 1;
    var p = 32 - he(e) + d;
    if (30 < p) {
      var x = d - d % 5;
      p = (l & (1 << x) - 1).toString(32), l >>= x, d -= x, T = 1 << 32 - he(e) + d | o << d | l, I = p + t;
    } else T = 1 << p | o << d | l, I = t;
  }
  function St(t) {
    t.return !== null && (F(t, 1), lt(t, 1, 0));
  }
  function Et(t) {
    for (; t === i; ) i = ur[--Ur], ur[Ur] = null, s = ur[--Ur], ur[Ur] = null;
    for (; t === _; ) _ = c[--m], c[m] = null, I = c[--m], c[m] = null, T = c[--m], c[m] = null;
  }
  var Lt = null, Nt = null, Kt = false, Ke = null, ln = false, An = Error(u(519));
  function vi(t) {
    var e = Error(u(418, ""));
    throw qr(ri(e, t)), An;
  }
  function nc(t) {
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
        for (o = 0; o < ql.length; o++) ve(ql[o], e);
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
        ve("invalid", e), Du(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, true), wr(e);
        break;
      case "select":
        ve("invalid", e);
        break;
      case "textarea":
        ve("invalid", e), Eo(e, l.value, l.defaultValue, l.children), wr(e);
    }
    o = l.children, typeof o != "string" && typeof o != "number" && typeof o != "bigint" || e.textContent === "" + o || l.suppressHydrationWarning === true || $v(e.textContent, o) ? (l.popover != null && (ve("beforetoggle", e), ve("toggle", e)), l.onScroll != null && ve("scroll", e), l.onScrollEnd != null && ve("scrollend", e), l.onClick != null && (e.onclick = $c), e = true) : e = false, e || vi(t);
  }
  function ic(t) {
    for (Lt = t.return; Lt; ) switch (Lt.tag) {
      case 5:
      case 13:
        ln = false;
        return;
      case 27:
      case 3:
        ln = true;
        return;
      default:
        Lt = Lt.return;
    }
  }
  function Pa(t) {
    if (t !== Lt) return false;
    if (!Kt) return ic(t), Kt = true, false;
    var e = t.tag, o;
    if ((o = e !== 3 && e !== 27) && ((o = e === 5) && (o = t.type, o = !(o !== "form" && o !== "button") || Sh(t.type, t.memoizedProps)), o = !o), o && Nt && vi(t), ic(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8) if (o = t.data, o === "/$") {
            if (e === 0) {
              Nt = yo(t.nextSibling);
              break t;
            }
            e--;
          } else o !== "$" && o !== "$!" && o !== "$?" || e++;
          t = t.nextSibling;
        }
        Nt = null;
      }
    } else e === 27 ? (e = Nt, ra(t.type) ? (t = Eh, Eh = null, Nt = t) : Nt = e) : Nt = Lt ? yo(t.stateNode.nextSibling) : null;
    return true;
  }
  function Zr() {
    Nt = Lt = null, Kt = false;
  }
  function oc() {
    var t = Ke;
    return t !== null && (bi === null ? bi = t : bi.push.apply(bi, t), Ke = null), t;
  }
  function qr(t) {
    Ke === null ? Ke = [t] : Ke.push(t);
  }
  var en = Y(null), Ki = null, mo = null;
  function Po(t, e, o) {
    dt(en, e._currentValue), e._currentValue = o;
  }
  function go(t) {
    t._currentValue = en.current, ft(en);
  }
  function za(t, e, o) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === o) break;
      t = t.return;
    }
  }
  function ms(t, e, o, l) {
    var d = t.child;
    for (d !== null && (d.return = t); d !== null; ) {
      var p = d.dependencies;
      if (p !== null) {
        var x = d.child;
        p = p.firstContext;
        t: for (; p !== null; ) {
          var E = p;
          p = d;
          for (var H = 0; H < e.length; H++) if (E.context === e[H]) {
            p.lanes |= o, E = p.alternate, E !== null && (E.lanes |= o), za(p.return, o, t), l || (x = null);
            break t;
          }
          p = E.next;
        }
      } else if (d.tag === 18) {
        if (x = d.return, x === null) throw Error(u(341));
        x.lanes |= o, p = x.alternate, p !== null && (p.lanes |= o), za(x, o, t), x = null;
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
  function ka(t, e, o, l) {
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
          var E = d.type;
          ii(d.pendingProps.value, x.value) || (t !== null ? t.push(E) : t = [E]);
        }
      } else if (d === At.current) {
        if (x = d.alternate, x === null) throw Error(u(387));
        x.memoizedState.memoizedState !== d.memoizedState.memoizedState && (t !== null ? t.push(Kl) : t = [Kl]);
      }
      d = d.return;
    }
    t !== null && ms(e, t, o, l), e.flags |= 262144;
  }
  function rc(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ii(t.context._currentValue, t.memoizedValue)) return true;
      t = t.next;
    }
    return false;
  }
  function Ba(t) {
    Ki = t, mo = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Gn(t) {
    return Tm(Ki, t);
  }
  function ac(t, e) {
    return Ki === null && Ba(t), Tm(t, e);
  }
  function Tm(t, e) {
    var o = e._currentValue;
    if (e = { context: e, memoizedValue: o, next: null }, mo === null) {
      if (t === null) throw Error(u(308));
      mo = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else mo = mo.next = e;
    return o;
  }
  var _b = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = { aborted: false, addEventListener: function(o, l) {
      t.push(l);
    } };
    this.abort = function() {
      e.aborted = true, t.forEach(function(o) {
        return o();
      });
    };
  }, bb = n3.unstable_scheduleCallback, xb = n3.unstable_NormalPriority, Sn = { $$typeof: D, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function cd() {
    return { controller: new _b(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function Sl(t) {
    t.refCount--, t.refCount === 0 && bb(xb, function() {
      t.controller.abort();
    });
  }
  var Cl = null, fd = 0, gs = 0, vs = null;
  function Sb(t, e) {
    if (Cl === null) {
      var o = Cl = [];
      fd = 0, gs = hh(), vs = { status: "pending", value: void 0, then: function(l) {
        o.push(l);
      } };
    }
    return fd++, e.then(wm, wm), e;
  }
  function wm() {
    if (--fd === 0 && Cl !== null) {
      vs !== null && (vs.status = "fulfilled");
      var t = Cl;
      Cl = null, gs = 0, vs = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Cb(t, e) {
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
  var Em = B.S;
  B.S = function(t, e) {
    typeof e == "object" && e !== null && typeof e.then == "function" && Sb(t, e), Em !== null && Em(t, e);
  };
  var Da = Y(null);
  function dd() {
    var t = Da.current;
    return t !== null ? t : We.pooledCache;
  }
  function sc(t, e) {
    e === null ? dt(Da, Da.current) : dt(Da, e.pool);
  }
  function Om() {
    var t = dd();
    return t === null ? null : { parent: Sn._currentValue, pool: t };
  }
  var Tl = Error(u(460)), Mm = Error(u(474)), lc = Error(u(542)), hd = { then: function() {
  } };
  function Am(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function uc() {
  }
  function Rm(t, e, o) {
    switch (o = t[o], o === void 0 ? t.push(e) : o !== e && (e.then(uc, uc), e = o), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Pm(t), t;
      default:
        if (typeof e.status == "string") e.then(uc, uc);
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
            throw t = e.reason, Pm(t), t;
        }
        throw wl = e, Tl;
    }
  }
  var wl = null;
  function Lm() {
    if (wl === null) throw Error(u(459));
    var t = wl;
    return wl = null, t;
  }
  function Pm(t) {
    if (t === Tl || t === lc) throw Error(u(483));
  }
  var Vr = false;
  function pd(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function md(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null });
  }
  function Gr(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Yr(t, e, o) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Be & 2) !== 0) {
      var d = l.pending;
      return d === null ? e.next = e : (e.next = d.next, d.next = e), l.pending = e, e = Ro(t), Ra(t, null, o), e;
    }
    return Aa(t, l, e, o), Ro(t);
  }
  function El(t, e, o) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (o & 4194048) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, o |= l, e.lanes = o, ci(t, o);
    }
  }
  function gd(t, e) {
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
  var vd = false;
  function Ol() {
    if (vd) {
      var t = vs;
      if (t !== null) throw t;
    }
  }
  function Ml(t, e, o, l) {
    vd = false;
    var d = t.updateQueue;
    Vr = false;
    var p = d.firstBaseUpdate, x = d.lastBaseUpdate, E = d.shared.pending;
    if (E !== null) {
      d.shared.pending = null;
      var H = E, Q = H.next;
      H.next = null, x === null ? p = Q : x.next = Q, x = H;
      var vt = t.alternate;
      vt !== null && (vt = vt.updateQueue, E = vt.lastBaseUpdate, E !== x && (E === null ? vt.firstBaseUpdate = Q : E.next = Q, vt.lastBaseUpdate = H));
    }
    if (p !== null) {
      var xt = d.baseState;
      x = 0, vt = Q = H = null, E = p;
      do {
        var nt = E.lane & -536870913, at = nt !== E.lane;
        if (at ? (Ce & nt) === nt : (l & nt) === nt) {
          nt !== 0 && nt === gs && (vd = true), vt !== null && (vt = vt.next = { lane: 0, tag: E.tag, payload: E.payload, callback: null, next: null });
          t: {
            var Xt = t, Zt = E;
            nt = e;
            var je = o;
            switch (Zt.tag) {
              case 1:
                if (Xt = Zt.payload, typeof Xt == "function") {
                  xt = Xt.call(je, xt, nt);
                  break t;
                }
                xt = Xt;
                break t;
              case 3:
                Xt.flags = Xt.flags & -65537 | 128;
              case 0:
                if (Xt = Zt.payload, nt = typeof Xt == "function" ? Xt.call(je, xt, nt) : Xt, nt == null) break t;
                xt = S({}, xt, nt);
                break t;
              case 2:
                Vr = true;
            }
          }
          nt = E.callback, nt !== null && (t.flags |= 64, at && (t.flags |= 8192), at = d.callbacks, at === null ? d.callbacks = [nt] : at.push(nt));
        } else at = { lane: nt, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, vt === null ? (Q = vt = at, H = xt) : vt = vt.next = at, x |= nt;
        if (E = E.next, E === null) {
          if (E = d.shared.pending, E === null) break;
          at = E, E = at.next, at.next = null, d.lastBaseUpdate = at, d.shared.pending = null;
        }
      } while (true);
      vt === null && (H = xt), d.baseState = H, d.firstBaseUpdate = Q, d.lastBaseUpdate = vt, p === null && (d.shared.lanes = 0), ea |= x, t.lanes = x, t.memoizedState = xt;
    }
  }
  function zm(t, e) {
    if (typeof t != "function") throw Error(u(191, t));
    t.call(e);
  }
  function km(t, e) {
    var o = t.callbacks;
    if (o !== null) for (t.callbacks = null, t = 0; t < o.length; t++) zm(o[t], e);
  }
  var ys = Y(null), cc = Y(0);
  function Bm(t, e) {
    t = gr, dt(cc, t), dt(ys, e), gr = t | e.baseLanes;
  }
  function yd() {
    dt(cc, gr), dt(ys, ys.current);
  }
  function _d() {
    gr = cc.current, ft(ys), ft(cc);
  }
  var Fr = 0, fe = null, Ie = null, _n = null, fc = false, _s = false, Na = false, dc = 0, Al = 0, bs = null, Tb = 0;
  function mn() {
    throw Error(u(321));
  }
  function bd(t, e) {
    if (e === null) return false;
    for (var o = 0; o < e.length && o < t.length; o++) if (!ii(t[o], e[o])) return false;
    return true;
  }
  function xd(t, e, o, l, d, p) {
    return Fr = p, fe = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, B.H = t === null || t.memoizedState === null ? yg : _g, Na = false, p = o(l, d), Na = false, _s && (p = Nm(e, o, l, d)), Dm(t), p;
  }
  function Dm(t) {
    B.H = yc;
    var e = Ie !== null && Ie.next !== null;
    if (Fr = 0, _n = Ie = fe = null, fc = false, Al = 0, bs = null, e) throw Error(u(300));
    t === null || Rn || (t = t.dependencies, t !== null && rc(t) && (Rn = true));
  }
  function Nm(t, e, o, l) {
    fe = t;
    var d = 0;
    do {
      if (_s && (bs = null), Al = 0, _s = false, 25 <= d) throw Error(u(301));
      if (d += 1, _n = Ie = null, t.updateQueue != null) {
        var p = t.updateQueue;
        p.lastEffect = null, p.events = null, p.stores = null, p.memoCache != null && (p.memoCache.index = 0);
      }
      B.H = Lb, p = e(o, l);
    } while (_s);
    return p;
  }
  function wb() {
    var t = B.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Rl(e) : e, t = t.useState()[0], (Ie !== null ? Ie.memoizedState : null) !== t && (fe.flags |= 1024), e;
  }
  function Sd() {
    var t = dc !== 0;
    return dc = 0, t;
  }
  function Cd(t, e, o) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~o;
  }
  function Td(t) {
    if (fc) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      fc = false;
    }
    Fr = 0, _n = Ie = fe = null, _s = false, Al = dc = 0, bs = null;
  }
  function yi() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return _n === null ? fe.memoizedState = _n = t : _n = _n.next = t, _n;
  }
  function bn() {
    if (Ie === null) {
      var t = fe.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Ie.next;
    var e = _n === null ? fe.memoizedState : _n.next;
    if (e !== null) _n = e, Ie = t;
    else {
      if (t === null) throw fe.alternate === null ? Error(u(467)) : Error(u(310));
      Ie = t, t = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, _n === null ? fe.memoizedState = _n = t : _n = _n.next = t;
    }
    return _n;
  }
  function wd() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Rl(t) {
    var e = Al;
    return Al += 1, bs === null && (bs = []), t = Rm(bs, t, e), e = fe, (_n === null ? e.memoizedState : _n.next) === null && (e = e.alternate, B.H = e === null || e.memoizedState === null ? yg : _g), t;
  }
  function hc(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Rl(t);
      if (t.$$typeof === D) return Gn(t);
    }
    throw Error(u(438, String(t)));
  }
  function Ed(t) {
    var e = null, o = fe.updateQueue;
    if (o !== null && (e = o.memoCache), e == null) {
      var l = fe.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = { data: l.data.map(function(d) {
        return d.slice();
      }), index: 0 })));
    }
    if (e == null && (e = { data: [], index: 0 }), o === null && (o = wd(), fe.updateQueue = o), o.memoCache = e, o = e.data[e.index], o === void 0) for (o = e.data[e.index] = Array(t), l = 0; l < t; l++) o[l] = ut;
    return e.index++, o;
  }
  function cr(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function pc(t) {
    var e = bn();
    return Od(e, Ie, t);
  }
  function Od(t, e, o) {
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
      var E = x = null, H = null, Q = e, vt = false;
      do {
        var xt = Q.lane & -536870913;
        if (xt !== Q.lane ? (Ce & xt) === xt : (Fr & xt) === xt) {
          var nt = Q.revertLane;
          if (nt === 0) H !== null && (H = H.next = { lane: 0, revertLane: 0, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }), xt === gs && (vt = true);
          else if ((Fr & nt) === nt) {
            Q = Q.next, nt === gs && (vt = true);
            continue;
          } else xt = { lane: 0, revertLane: Q.revertLane, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }, H === null ? (E = H = xt, x = p) : H = H.next = xt, fe.lanes |= nt, ea |= nt;
          xt = Q.action, Na && o(p, xt), p = Q.hasEagerState ? Q.eagerState : o(p, xt);
        } else nt = { lane: xt, revertLane: Q.revertLane, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }, H === null ? (E = H = nt, x = p) : H = H.next = nt, fe.lanes |= xt, ea |= xt;
        Q = Q.next;
      } while (Q !== null && Q !== e);
      if (H === null ? x = p : H.next = E, !ii(p, t.memoizedState) && (Rn = true, vt && (o = vs, o !== null))) throw o;
      t.memoizedState = p, t.baseState = x, t.baseQueue = H, l.lastRenderedState = p;
    }
    return d === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function Md(t) {
    var e = bn(), o = e.queue;
    if (o === null) throw Error(u(311));
    o.lastRenderedReducer = t;
    var l = o.dispatch, d = o.pending, p = e.memoizedState;
    if (d !== null) {
      o.pending = null;
      var x = d = d.next;
      do
        p = t(p, x.action), x = x.next;
      while (x !== d);
      ii(p, e.memoizedState) || (Rn = true), e.memoizedState = p, e.baseQueue === null && (e.baseState = p), o.lastRenderedState = p;
    }
    return [p, l];
  }
  function $m(t, e, o) {
    var l = fe, d = bn(), p = Kt;
    if (p) {
      if (o === void 0) throw Error(u(407));
      o = o();
    } else o = e();
    var x = !ii((Ie || d).memoizedState, o);
    x && (d.memoizedState = o, Rn = true), d = d.queue;
    var E = jm.bind(null, l, d, t);
    if (Ll(2048, 8, E, [t]), d.getSnapshot !== e || x || _n !== null && _n.memoizedState.tag & 1) {
      if (l.flags |= 2048, xs(9, mc(), Hm.bind(null, l, d, o, e), null), We === null) throw Error(u(349));
      p || (Fr & 124) !== 0 || Im(l, e, o);
    }
    return o;
  }
  function Im(t, e, o) {
    t.flags |= 16384, t = { getSnapshot: e, value: o }, e = fe.updateQueue, e === null ? (e = wd(), fe.updateQueue = e, e.stores = [t]) : (o = e.stores, o === null ? e.stores = [t] : o.push(t));
  }
  function Hm(t, e, o, l) {
    e.value = o, e.getSnapshot = l, Um(e) && Zm(t);
  }
  function jm(t, e, o) {
    return o(function() {
      Um(e) && Zm(t);
    });
  }
  function Um(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var o = e();
      return !ii(t, o);
    } catch {
      return true;
    }
  }
  function Zm(t) {
    var e = jr(t, 2);
    e !== null && Di(e, t, 2);
  }
  function Ad(t) {
    var e = yi();
    if (typeof t == "function") {
      var o = t;
      if (t = o(), Na) {
        oe(true);
        try {
          o();
        } finally {
          oe(false);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: cr, lastRenderedState: t }, e;
  }
  function qm(t, e, o, l) {
    return t.baseState = o, Od(t, Ie, typeof l == "function" ? l : cr);
  }
  function Eb(t, e, o, l, d) {
    if (vc(t)) throw Error(u(485));
    if (t = e.action, t !== null) {
      var p = { payload: d, action: t, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(x) {
        p.listeners.push(x);
      } };
      B.T !== null ? o(true) : p.isTransition = false, l(p), o = e.pending, o === null ? (p.next = e.pending = p, Vm(e, p)) : (p.next = o.next, e.pending = o.next = p);
    }
  }
  function Vm(t, e) {
    var o = e.action, l = e.payload, d = t.state;
    if (e.isTransition) {
      var p = B.T, x = {};
      B.T = x;
      try {
        var E = o(d, l), H = B.S;
        H !== null && H(x, E), Gm(t, e, E);
      } catch (Q) {
        Rd(t, e, Q);
      } finally {
        B.T = p;
      }
    } else try {
      p = o(d, l), Gm(t, e, p);
    } catch (Q) {
      Rd(t, e, Q);
    }
  }
  function Gm(t, e, o) {
    o !== null && typeof o == "object" && typeof o.then == "function" ? o.then(function(l) {
      Ym(t, e, l);
    }, function(l) {
      return Rd(t, e, l);
    }) : Ym(t, e, o);
  }
  function Ym(t, e, o) {
    e.status = "fulfilled", e.value = o, Fm(e), t.state = o, e = t.pending, e !== null && (o = e.next, o === e ? t.pending = null : (o = o.next, e.next = o, Vm(t, o)));
  }
  function Rd(t, e, o) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = o, Fm(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function Fm(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Xm(t, e) {
    return e;
  }
  function Km(t, e) {
    if (Kt) {
      var o = We.formState;
      if (o !== null) {
        t: {
          var l = fe;
          if (Kt) {
            if (Nt) {
              e: {
                for (var d = Nt, p = ln; d.nodeType !== 8; ) {
                  if (!p) {
                    d = null;
                    break e;
                  }
                  if (d = yo(d.nextSibling), d === null) {
                    d = null;
                    break e;
                  }
                }
                p = d.data, d = p === "F!" || p === "F" ? d : null;
              }
              if (d) {
                Nt = yo(d.nextSibling), l = d.data === "F!";
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
    return o = yi(), o.memoizedState = o.baseState = e, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Xm, lastRenderedState: e }, o.queue = l, o = mg.bind(null, fe, l), l.dispatch = o, l = Ad(false), p = Bd.bind(null, fe, false, l.queue), l = yi(), d = { state: e, dispatch: null, action: t, pending: null }, l.queue = d, o = Eb.bind(null, fe, d, p, o), d.dispatch = o, l.memoizedState = t, [e, o, false];
  }
  function Wm(t) {
    var e = bn();
    return Qm(e, Ie, t);
  }
  function Qm(t, e, o) {
    if (e = Od(t, e, Xm)[0], t = pc(cr)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
      var l = Rl(e);
    } catch (x) {
      throw x === Tl ? lc : x;
    }
    else l = e;
    e = bn();
    var d = e.queue, p = d.dispatch;
    return o !== e.memoizedState && (fe.flags |= 2048, xs(9, mc(), Ob.bind(null, d, o), null)), [l, p, t];
  }
  function Ob(t, e) {
    t.action = e;
  }
  function Jm(t) {
    var e = bn(), o = Ie;
    if (o !== null) return Qm(e, o, t);
    bn(), e = e.memoizedState, o = bn();
    var l = o.queue.dispatch;
    return o.memoizedState = t, [e, l, false];
  }
  function xs(t, e, o, l) {
    return t = { tag: t, create: o, deps: l, inst: e, next: null }, e = fe.updateQueue, e === null && (e = wd(), fe.updateQueue = e), o = e.lastEffect, o === null ? e.lastEffect = t.next = t : (l = o.next, o.next = t, t.next = l, e.lastEffect = t), t;
  }
  function mc() {
    return { destroy: void 0, resource: void 0 };
  }
  function tg() {
    return bn().memoizedState;
  }
  function gc(t, e, o, l) {
    var d = yi();
    l = l === void 0 ? null : l, fe.flags |= t, d.memoizedState = xs(1 | e, mc(), o, l);
  }
  function Ll(t, e, o, l) {
    var d = bn();
    l = l === void 0 ? null : l;
    var p = d.memoizedState.inst;
    Ie !== null && l !== null && bd(l, Ie.memoizedState.deps) ? d.memoizedState = xs(e, p, o, l) : (fe.flags |= t, d.memoizedState = xs(1 | e, p, o, l));
  }
  function eg(t, e) {
    gc(8390656, 8, t, e);
  }
  function ng(t, e) {
    Ll(2048, 8, t, e);
  }
  function ig(t, e) {
    return Ll(4, 2, t, e);
  }
  function og(t, e) {
    return Ll(4, 4, t, e);
  }
  function rg(t, e) {
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
  function ag(t, e, o) {
    o = o != null ? o.concat([t]) : null, Ll(4, 4, rg.bind(null, e, t), o);
  }
  function Ld() {
  }
  function sg(t, e) {
    var o = bn();
    e = e === void 0 ? null : e;
    var l = o.memoizedState;
    return e !== null && bd(e, l[1]) ? l[0] : (o.memoizedState = [t, e], t);
  }
  function lg(t, e) {
    var o = bn();
    e = e === void 0 ? null : e;
    var l = o.memoizedState;
    if (e !== null && bd(e, l[1])) return l[0];
    if (l = t(), Na) {
      oe(true);
      try {
        t();
      } finally {
        oe(false);
      }
    }
    return o.memoizedState = [l, e], l;
  }
  function Pd(t, e, o) {
    return o === void 0 || (Fr & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = o, t = fv(), fe.lanes |= t, ea |= t, o);
  }
  function ug(t, e, o, l) {
    return ii(o, e) ? o : ys.current !== null ? (t = Pd(t, o, l), ii(t, e) || (Rn = true), t) : (Fr & 42) === 0 ? (Rn = true, t.memoizedState = o) : (t = fv(), fe.lanes |= t, ea |= t, e);
  }
  function cg(t, e, o, l, d) {
    var p = tt.p;
    tt.p = p !== 0 && 8 > p ? p : 8;
    var x = B.T, E = {};
    B.T = E, Bd(t, false, e, o);
    try {
      var H = d(), Q = B.S;
      if (Q !== null && Q(E, H), H !== null && typeof H == "object" && typeof H.then == "function") {
        var vt = Cb(H, l);
        Pl(t, e, vt, Bi(t));
      } else Pl(t, e, l, Bi(t));
    } catch (xt) {
      Pl(t, e, { then: function() {
      }, status: "rejected", reason: xt }, Bi());
    } finally {
      tt.p = p, B.T = x;
    }
  }
  function Mb() {
  }
  function zd(t, e, o, l) {
    if (t.tag !== 5) throw Error(u(476));
    var d = fg(t).queue;
    cg(t, d, e, rt, o === null ? Mb : function() {
      return dg(t), o(l);
    });
  }
  function fg(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = { memoizedState: rt, baseState: rt, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: cr, lastRenderedState: rt }, next: null };
    var o = {};
    return e.next = { memoizedState: o, baseState: o, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: cr, lastRenderedState: o }, next: null }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function dg(t) {
    var e = fg(t).next.queue;
    Pl(t, e, {}, Bi());
  }
  function kd() {
    return Gn(Kl);
  }
  function hg() {
    return bn().memoizedState;
  }
  function pg() {
    return bn().memoizedState;
  }
  function Ab(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var o = Bi();
          t = Gr(o);
          var l = Yr(e, t, o);
          l !== null && (Di(l, e, o), El(l, e, o)), e = { cache: cd() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Rb(t, e, o) {
    var l = Bi();
    o = { lane: l, revertLane: 0, action: o, hasEagerState: false, eagerState: null, next: null }, vc(t) ? gg(e, o) : (o = sr(t, e, o, l), o !== null && (Di(o, t, l), vg(o, e, l)));
  }
  function mg(t, e, o) {
    var l = Bi();
    Pl(t, e, o, l);
  }
  function Pl(t, e, o, l) {
    var d = { lane: l, revertLane: 0, action: o, hasEagerState: false, eagerState: null, next: null };
    if (vc(t)) gg(e, d);
    else {
      var p = t.alternate;
      if (t.lanes === 0 && (p === null || p.lanes === 0) && (p = e.lastRenderedReducer, p !== null)) try {
        var x = e.lastRenderedState, E = p(x, o);
        if (d.hasEagerState = true, d.eagerState = E, ii(E, x)) return Aa(t, e, d, 0), We === null && Ma(), false;
      } catch {
      } finally {
      }
      if (o = sr(t, e, d, l), o !== null) return Di(o, t, l), vg(o, e, l), true;
    }
    return false;
  }
  function Bd(t, e, o, l) {
    if (l = { lane: 2, revertLane: hh(), action: l, hasEagerState: false, eagerState: null, next: null }, vc(t)) {
      if (e) throw Error(u(479));
    } else e = sr(t, o, l, 2), e !== null && Di(e, t, 2);
  }
  function vc(t) {
    var e = t.alternate;
    return t === fe || e !== null && e === fe;
  }
  function gg(t, e) {
    _s = fc = true;
    var o = t.pending;
    o === null ? e.next = e : (e.next = o.next, o.next = e), t.pending = e;
  }
  function vg(t, e, o) {
    if ((o & 4194048) !== 0) {
      var l = e.lanes;
      l &= t.pendingLanes, o |= l, e.lanes = o, ci(t, o);
    }
  }
  var yc = { readContext: Gn, use: hc, useCallback: mn, useContext: mn, useEffect: mn, useImperativeHandle: mn, useLayoutEffect: mn, useInsertionEffect: mn, useMemo: mn, useReducer: mn, useRef: mn, useState: mn, useDebugValue: mn, useDeferredValue: mn, useTransition: mn, useSyncExternalStore: mn, useId: mn, useHostTransitionStatus: mn, useFormState: mn, useActionState: mn, useOptimistic: mn, useMemoCache: mn, useCacheRefresh: mn }, yg = { readContext: Gn, use: hc, useCallback: function(t, e) {
    return yi().memoizedState = [t, e === void 0 ? null : e], t;
  }, useContext: Gn, useEffect: eg, useImperativeHandle: function(t, e, o) {
    o = o != null ? o.concat([t]) : null, gc(4194308, 4, rg.bind(null, e, t), o);
  }, useLayoutEffect: function(t, e) {
    return gc(4194308, 4, t, e);
  }, useInsertionEffect: function(t, e) {
    gc(4, 2, t, e);
  }, useMemo: function(t, e) {
    var o = yi();
    e = e === void 0 ? null : e;
    var l = t();
    if (Na) {
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
      if (Na) {
        oe(true);
        try {
          o(e);
        } finally {
          oe(false);
        }
      }
    } else d = e;
    return l.memoizedState = l.baseState = d, t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: d }, l.queue = t, t = t.dispatch = Rb.bind(null, fe, t), [l.memoizedState, t];
  }, useRef: function(t) {
    var e = yi();
    return t = { current: t }, e.memoizedState = t;
  }, useState: function(t) {
    t = Ad(t);
    var e = t.queue, o = mg.bind(null, fe, e);
    return e.dispatch = o, [t.memoizedState, o];
  }, useDebugValue: Ld, useDeferredValue: function(t, e) {
    var o = yi();
    return Pd(o, t, e);
  }, useTransition: function() {
    var t = Ad(false);
    return t = cg.bind(null, fe, t.queue, true, false), yi().memoizedState = t, [false, t];
  }, useSyncExternalStore: function(t, e, o) {
    var l = fe, d = yi();
    if (Kt) {
      if (o === void 0) throw Error(u(407));
      o = o();
    } else {
      if (o = e(), We === null) throw Error(u(349));
      (Ce & 124) !== 0 || Im(l, e, o);
    }
    d.memoizedState = o;
    var p = { value: o, getSnapshot: e };
    return d.queue = p, eg(jm.bind(null, l, p, t), [t]), l.flags |= 2048, xs(9, mc(), Hm.bind(null, l, p, o, e), null), o;
  }, useId: function() {
    var t = yi(), e = We.identifierPrefix;
    if (Kt) {
      var o = I, l = T;
      o = (l & ~(1 << 32 - he(l) - 1)).toString(32) + o, e = "\xAB" + e + "R" + o, o = dc++, 0 < o && (e += "H" + o.toString(32)), e += "\xBB";
    } else o = Tb++, e = "\xAB" + e + "r" + o.toString(32) + "\xBB";
    return t.memoizedState = e;
  }, useHostTransitionStatus: kd, useFormState: Km, useActionState: Km, useOptimistic: function(t) {
    var e = yi();
    e.memoizedState = e.baseState = t;
    var o = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return e.queue = o, e = Bd.bind(null, fe, true, o), o.dispatch = e, [t, e];
  }, useMemoCache: Ed, useCacheRefresh: function() {
    return yi().memoizedState = Ab.bind(null, fe);
  } }, _g = { readContext: Gn, use: hc, useCallback: sg, useContext: Gn, useEffect: ng, useImperativeHandle: ag, useInsertionEffect: ig, useLayoutEffect: og, useMemo: lg, useReducer: pc, useRef: tg, useState: function() {
    return pc(cr);
  }, useDebugValue: Ld, useDeferredValue: function(t, e) {
    var o = bn();
    return ug(o, Ie.memoizedState, t, e);
  }, useTransition: function() {
    var t = pc(cr)[0], e = bn().memoizedState;
    return [typeof t == "boolean" ? t : Rl(t), e];
  }, useSyncExternalStore: $m, useId: hg, useHostTransitionStatus: kd, useFormState: Wm, useActionState: Wm, useOptimistic: function(t, e) {
    var o = bn();
    return qm(o, Ie, t, e);
  }, useMemoCache: Ed, useCacheRefresh: pg }, Lb = { readContext: Gn, use: hc, useCallback: sg, useContext: Gn, useEffect: ng, useImperativeHandle: ag, useInsertionEffect: ig, useLayoutEffect: og, useMemo: lg, useReducer: Md, useRef: tg, useState: function() {
    return Md(cr);
  }, useDebugValue: Ld, useDeferredValue: function(t, e) {
    var o = bn();
    return Ie === null ? Pd(o, t, e) : ug(o, Ie.memoizedState, t, e);
  }, useTransition: function() {
    var t = Md(cr)[0], e = bn().memoizedState;
    return [typeof t == "boolean" ? t : Rl(t), e];
  }, useSyncExternalStore: $m, useId: hg, useHostTransitionStatus: kd, useFormState: Jm, useActionState: Jm, useOptimistic: function(t, e) {
    var o = bn();
    return Ie !== null ? qm(o, Ie, t, e) : (o.baseState = t, [t, o.queue.dispatch]);
  }, useMemoCache: Ed, useCacheRefresh: pg }, Ss = null, zl = 0;
  function _c(t) {
    var e = zl;
    return zl += 1, Ss === null && (Ss = []), Rm(Ss, t, e);
  }
  function kl(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function bc(t, e) {
    throw e.$$typeof === w ? Error(u(525)) : (t = Object.prototype.toString.call(e), Error(u(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function bg(t) {
    var e = t._init;
    return e(t._payload);
  }
  function xg(t) {
    function e(G, q) {
      if (t) {
        var K = G.deletions;
        K === null ? (G.deletions = [q], G.flags |= 16) : K.push(q);
      }
    }
    function o(G, q) {
      if (!t) return null;
      for (; q !== null; ) e(G, q), q = q.sibling;
      return null;
    }
    function l(G) {
      for (var q = /* @__PURE__ */ new Map(); G !== null; ) G.key !== null ? q.set(G.key, G) : q.set(G.index, G), G = G.sibling;
      return q;
    }
    function d(G, q) {
      return G = Xi(G, q), G.index = 0, G.sibling = null, G;
    }
    function p(G, q, K) {
      return G.index = K, t ? (K = G.alternate, K !== null ? (K = K.index, K < q ? (G.flags |= 67108866, q) : K) : (G.flags |= 67108866, q)) : (G.flags |= 1048576, q);
    }
    function x(G) {
      return t && G.alternate === null && (G.flags |= 67108866), G;
    }
    function E(G, q, K, yt) {
      return q === null || q.tag !== 6 ? (q = xl(K, G.mode, yt), q.return = G, q) : (q = d(q, K), q.return = G, q);
    }
    function H(G, q, K, yt) {
      var zt = K.type;
      return zt === R ? vt(G, q, K.props.children, yt, K.key) : q !== null && (q.elementType === zt || typeof zt == "object" && zt !== null && zt.$$typeof === J && bg(zt) === q.type) ? (q = d(q, K.props), kl(q, K), q.return = G, q) : (q = La(K.type, K.key, K.props, null, G.mode, yt), kl(q, K), q.return = G, q);
    }
    function Q(G, q, K, yt) {
      return q === null || q.tag !== 4 || q.stateNode.containerInfo !== K.containerInfo || q.stateNode.implementation !== K.implementation ? (q = ps(K, G.mode, yt), q.return = G, q) : (q = d(q, K.children || []), q.return = G, q);
    }
    function vt(G, q, K, yt, zt) {
      return q === null || q.tag !== 7 ? (q = Lo(K, G.mode, yt, zt), q.return = G, q) : (q = d(q, K), q.return = G, q);
    }
    function xt(G, q, K) {
      if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint") return q = xl("" + q, G.mode, K), q.return = G, q;
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case A:
            return K = La(q.type, q.key, q.props, null, G.mode, K), kl(K, q), K.return = G, K;
          case P:
            return q = ps(q, G.mode, K), q.return = G, q;
          case J:
            var yt = q._init;
            return q = yt(q._payload), xt(G, q, K);
        }
        if (et(q) || C(q)) return q = Lo(q, G.mode, K, null), q.return = G, q;
        if (typeof q.then == "function") return xt(G, _c(q), K);
        if (q.$$typeof === D) return xt(G, ac(G, q), K);
        bc(G, q);
      }
      return null;
    }
    function nt(G, q, K, yt) {
      var zt = q !== null ? q.key : null;
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint") return zt !== null ? null : E(G, q, "" + K, yt);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case A:
            return K.key === zt ? H(G, q, K, yt) : null;
          case P:
            return K.key === zt ? Q(G, q, K, yt) : null;
          case J:
            return zt = K._init, K = zt(K._payload), nt(G, q, K, yt);
        }
        if (et(K) || C(K)) return zt !== null ? null : vt(G, q, K, yt, null);
        if (typeof K.then == "function") return nt(G, q, _c(K), yt);
        if (K.$$typeof === D) return nt(G, q, ac(G, K), yt);
        bc(G, K);
      }
      return null;
    }
    function at(G, q, K, yt, zt) {
      if (typeof yt == "string" && yt !== "" || typeof yt == "number" || typeof yt == "bigint") return G = G.get(K) || null, E(q, G, "" + yt, zt);
      if (typeof yt == "object" && yt !== null) {
        switch (yt.$$typeof) {
          case A:
            return G = G.get(yt.key === null ? K : yt.key) || null, H(q, G, yt, zt);
          case P:
            return G = G.get(yt.key === null ? K : yt.key) || null, Q(q, G, yt, zt);
          case J:
            var me = yt._init;
            return yt = me(yt._payload), at(G, q, K, yt, zt);
        }
        if (et(yt) || C(yt)) return G = G.get(K) || null, vt(q, G, yt, zt, null);
        if (typeof yt.then == "function") return at(G, q, K, _c(yt), zt);
        if (yt.$$typeof === D) return at(G, q, K, ac(q, yt), zt);
        bc(q, yt);
      }
      return null;
    }
    function Xt(G, q, K, yt) {
      for (var zt = null, me = null, Ht = q, Gt = q = 0, Pn = null; Ht !== null && Gt < K.length; Gt++) {
        Ht.index > Gt ? (Pn = Ht, Ht = null) : Pn = Ht.sibling;
        var we = nt(G, Ht, K[Gt], yt);
        if (we === null) {
          Ht === null && (Ht = Pn);
          break;
        }
        t && Ht && we.alternate === null && e(G, Ht), q = p(we, q, Gt), me === null ? zt = we : me.sibling = we, me = we, Ht = Pn;
      }
      if (Gt === K.length) return o(G, Ht), Kt && F(G, Gt), zt;
      if (Ht === null) {
        for (; Gt < K.length; Gt++) Ht = xt(G, K[Gt], yt), Ht !== null && (q = p(Ht, q, Gt), me === null ? zt = Ht : me.sibling = Ht, me = Ht);
        return Kt && F(G, Gt), zt;
      }
      for (Ht = l(Ht); Gt < K.length; Gt++) Pn = at(Ht, G, Gt, K[Gt], yt), Pn !== null && (t && Pn.alternate !== null && Ht.delete(Pn.key === null ? Gt : Pn.key), q = p(Pn, q, Gt), me === null ? zt = Pn : me.sibling = Pn, me = Pn);
      return t && Ht.forEach(function(ca) {
        return e(G, ca);
      }), Kt && F(G, Gt), zt;
    }
    function Zt(G, q, K, yt) {
      if (K == null) throw Error(u(151));
      for (var zt = null, me = null, Ht = q, Gt = q = 0, Pn = null, we = K.next(); Ht !== null && !we.done; Gt++, we = K.next()) {
        Ht.index > Gt ? (Pn = Ht, Ht = null) : Pn = Ht.sibling;
        var ca = nt(G, Ht, we.value, yt);
        if (ca === null) {
          Ht === null && (Ht = Pn);
          break;
        }
        t && Ht && ca.alternate === null && e(G, Ht), q = p(ca, q, Gt), me === null ? zt = ca : me.sibling = ca, me = ca, Ht = Pn;
      }
      if (we.done) return o(G, Ht), Kt && F(G, Gt), zt;
      if (Ht === null) {
        for (; !we.done; Gt++, we = K.next()) we = xt(G, we.value, yt), we !== null && (q = p(we, q, Gt), me === null ? zt = we : me.sibling = we, me = we);
        return Kt && F(G, Gt), zt;
      }
      for (Ht = l(Ht); !we.done; Gt++, we = K.next()) we = at(Ht, G, Gt, we.value, yt), we !== null && (t && we.alternate !== null && Ht.delete(we.key === null ? Gt : we.key), q = p(we, q, Gt), me === null ? zt = we : me.sibling = we, me = we);
      return t && Ht.forEach(function(P1) {
        return e(G, P1);
      }), Kt && F(G, Gt), zt;
    }
    function je(G, q, K, yt) {
      if (typeof K == "object" && K !== null && K.type === R && K.key === null && (K = K.props.children), typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case A:
            t: {
              for (var zt = K.key; q !== null; ) {
                if (q.key === zt) {
                  if (zt = K.type, zt === R) {
                    if (q.tag === 7) {
                      o(G, q.sibling), yt = d(q, K.props.children), yt.return = G, G = yt;
                      break t;
                    }
                  } else if (q.elementType === zt || typeof zt == "object" && zt !== null && zt.$$typeof === J && bg(zt) === q.type) {
                    o(G, q.sibling), yt = d(q, K.props), kl(yt, K), yt.return = G, G = yt;
                    break t;
                  }
                  o(G, q);
                  break;
                } else e(G, q);
                q = q.sibling;
              }
              K.type === R ? (yt = Lo(K.props.children, G.mode, yt, K.key), yt.return = G, G = yt) : (yt = La(K.type, K.key, K.props, null, G.mode, yt), kl(yt, K), yt.return = G, G = yt);
            }
            return x(G);
          case P:
            t: {
              for (zt = K.key; q !== null; ) {
                if (q.key === zt) if (q.tag === 4 && q.stateNode.containerInfo === K.containerInfo && q.stateNode.implementation === K.implementation) {
                  o(G, q.sibling), yt = d(q, K.children || []), yt.return = G, G = yt;
                  break t;
                } else {
                  o(G, q);
                  break;
                }
                else e(G, q);
                q = q.sibling;
              }
              yt = ps(K, G.mode, yt), yt.return = G, G = yt;
            }
            return x(G);
          case J:
            return zt = K._init, K = zt(K._payload), je(G, q, K, yt);
        }
        if (et(K)) return Xt(G, q, K, yt);
        if (C(K)) {
          if (zt = C(K), typeof zt != "function") throw Error(u(150));
          return K = zt.call(K), Zt(G, q, K, yt);
        }
        if (typeof K.then == "function") return je(G, q, _c(K), yt);
        if (K.$$typeof === D) return je(G, q, ac(G, K), yt);
        bc(G, K);
      }
      return typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint" ? (K = "" + K, q !== null && q.tag === 6 ? (o(G, q.sibling), yt = d(q, K), yt.return = G, G = yt) : (o(G, q), yt = xl(K, G.mode, yt), yt.return = G, G = yt), x(G)) : o(G, q);
    }
    return function(G, q, K, yt) {
      try {
        zl = 0;
        var zt = je(G, q, K, yt);
        return Ss = null, zt;
      } catch (Ht) {
        if (Ht === Tl || Ht === lc) throw Ht;
        var me = si(29, Ht, null, G.mode);
        return me.lanes = yt, me.return = G, me;
      } finally {
      }
    };
  }
  var Cs = xg(true), Sg = xg(false), Wi = Y(null), zo = null;
  function Xr(t) {
    var e = t.alternate;
    dt(Cn, Cn.current & 1), dt(Wi, t), zo === null && (e === null || ys.current !== null || e.memoizedState !== null) && (zo = t);
  }
  function Cg(t) {
    if (t.tag === 22) {
      if (dt(Cn, Cn.current), dt(Wi, t), zo === null) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (zo = t);
      }
    } else Kr();
  }
  function Kr() {
    dt(Cn, Cn.current), dt(Wi, Wi.current);
  }
  function fr(t) {
    ft(Wi), zo === t && (zo = null), ft(Cn);
  }
  var Cn = Y(0);
  function xc(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var o = e.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || wh(o))) return e;
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
  function Dd(t, e, o, l) {
    e = t.memoizedState, o = o(l, e), o = o == null ? e : S({}, e, o), t.memoizedState = o, t.lanes === 0 && (t.updateQueue.baseState = o);
  }
  var Nd = { enqueueSetState: function(t, e, o) {
    t = t._reactInternals;
    var l = Bi(), d = Gr(l);
    d.payload = e, o != null && (d.callback = o), e = Yr(t, d, l), e !== null && (Di(e, t, l), El(e, t, l));
  }, enqueueReplaceState: function(t, e, o) {
    t = t._reactInternals;
    var l = Bi(), d = Gr(l);
    d.tag = 1, d.payload = e, o != null && (d.callback = o), e = Yr(t, d, l), e !== null && (Di(e, t, l), El(e, t, l));
  }, enqueueForceUpdate: function(t, e) {
    t = t._reactInternals;
    var o = Bi(), l = Gr(o);
    l.tag = 2, e != null && (l.callback = e), e = Yr(t, l, o), e !== null && (Di(e, t, o), El(e, t, o));
  } };
  function Tg(t, e, o, l, d, p, x) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, p, x) : e.prototype && e.prototype.isPureReactComponent ? !oi(o, l) || !oi(d, p) : true;
  }
  function wg(t, e, o, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(o, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(o, l), e.state !== t && Nd.enqueueReplaceState(e, e.state, null);
  }
  function $a(t, e) {
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
  var Sc = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function Eg(t) {
    Sc(t);
  }
  function Og(t) {
    console.error(t);
  }
  function Mg(t) {
    Sc(t);
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
  function Ag(t, e, o) {
    try {
      var l = t.onCaughtError;
      l(o.value, { componentStack: o.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (d) {
      setTimeout(function() {
        throw d;
      });
    }
  }
  function $d(t, e, o) {
    return o = Gr(o), o.tag = 3, o.payload = { element: null }, o.callback = function() {
      Cc(t, e);
    }, o;
  }
  function Rg(t) {
    return t = Gr(t), t.tag = 3, t;
  }
  function Lg(t, e, o, l) {
    var d = o.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var p = l.value;
      t.payload = function() {
        return d(p);
      }, t.callback = function() {
        Ag(e, o, l);
      };
    }
    var x = o.stateNode;
    x !== null && typeof x.componentDidCatch == "function" && (t.callback = function() {
      Ag(e, o, l), typeof d != "function" && (na === null ? na = /* @__PURE__ */ new Set([this]) : na.add(this));
      var E = l.stack;
      this.componentDidCatch(l.value, { componentStack: E !== null ? E : "" });
    });
  }
  function Pb(t, e, o, l, d) {
    if (o.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = o.alternate, e !== null && ka(e, o, d, true), o = Wi.current, o !== null) {
        switch (o.tag) {
          case 13:
            return zo === null ? lh() : o.alternate === null && dn === 0 && (dn = 3), o.flags &= -257, o.flags |= 65536, o.lanes = d, l === hd ? o.flags |= 16384 : (e = o.updateQueue, e === null ? o.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), ch(t, l, d)), false;
          case 22:
            return o.flags |= 65536, l === hd ? o.flags |= 16384 : (e = o.updateQueue, e === null ? (e = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([l]) }, o.updateQueue = e) : (o = e.retryQueue, o === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : o.add(l)), ch(t, l, d)), false;
        }
        throw Error(u(435, o.tag));
      }
      return ch(t, l, d), lh(), false;
    }
    if (Kt) return e = Wi.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = d, l !== An && (t = Error(u(422), { cause: l }), qr(ri(t, o)))) : (l !== An && (e = Error(u(423), { cause: l }), qr(ri(e, o))), t = t.current.alternate, t.flags |= 65536, d &= -d, t.lanes |= d, l = ri(l, o), d = $d(t.stateNode, l, d), gd(t, d), dn !== 4 && (dn = 2)), false;
    var p = Error(u(520), { cause: l });
    if (p = ri(p, o), jl === null ? jl = [p] : jl.push(p), dn !== 4 && (dn = 2), e === null) return true;
    l = ri(l, o), o = e;
    do {
      switch (o.tag) {
        case 3:
          return o.flags |= 65536, t = d & -d, o.lanes |= t, t = $d(o.stateNode, l, t), gd(o, t), false;
        case 1:
          if (e = o.type, p = o.stateNode, (o.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (na === null || !na.has(p)))) return o.flags |= 65536, d &= -d, o.lanes |= d, d = Rg(d), Lg(d, t, o, l), gd(o, d), false;
      }
      o = o.return;
    } while (o !== null);
    return false;
  }
  var Pg = Error(u(461)), Rn = false;
  function $n(t, e, o, l) {
    e.child = t === null ? Sg(e, null, o, l) : Cs(e, t.child, o, l);
  }
  function zg(t, e, o, l, d) {
    o = o.render;
    var p = e.ref;
    if ("ref" in l) {
      var x = {};
      for (var E in l) E !== "ref" && (x[E] = l[E]);
    } else x = l;
    return Ba(e), l = xd(t, e, o, x, p, d), E = Sd(), t !== null && !Rn ? (Cd(t, e, d), dr(t, e, d)) : (Kt && E && St(e), e.flags |= 1, $n(t, e, l, d), e.child);
  }
  function kg(t, e, o, l, d) {
    if (t === null) {
      var p = o.type;
      return typeof p == "function" && !hs(p) && p.defaultProps === void 0 && o.compare === null ? (e.tag = 15, e.type = p, Bg(t, e, p, l, d)) : (t = La(o.type, null, l, e, e.mode, d), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (p = t.child, !Gd(t, d)) {
      var x = p.memoizedProps;
      if (o = o.compare, o = o !== null ? o : oi, o(x, l) && t.ref === e.ref) return dr(t, e, d);
    }
    return e.flags |= 1, t = Xi(p, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Bg(t, e, o, l, d) {
    if (t !== null) {
      var p = t.memoizedProps;
      if (oi(p, l) && t.ref === e.ref) if (Rn = false, e.pendingProps = l = p, Gd(t, d)) (t.flags & 131072) !== 0 && (Rn = true);
      else return e.lanes = t.lanes, dr(t, e, d);
    }
    return Id(t, e, o, l, d);
  }
  function Dg(t, e, o) {
    var l = e.pendingProps, d = l.children, p = t !== null ? t.memoizedState : null;
    if (l.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (l = p !== null ? p.baseLanes | o : o, t !== null) {
          for (d = e.child = t.child, p = 0; d !== null; ) p = p | d.lanes | d.childLanes, d = d.sibling;
          e.childLanes = p & ~l;
        } else e.childLanes = 0, e.child = null;
        return Ng(t, e, l, o);
      }
      if ((o & 536870912) !== 0) e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && sc(e, p !== null ? p.cachePool : null), p !== null ? Bm(e, p) : yd(), Cg(e);
      else return e.lanes = e.childLanes = 536870912, Ng(t, e, p !== null ? p.baseLanes | o : o, o);
    } else p !== null ? (sc(e, p.cachePool), Bm(e, p), Kr(), e.memoizedState = null) : (t !== null && sc(e, null), yd(), Kr());
    return $n(t, e, d, o), e.child;
  }
  function Ng(t, e, o, l) {
    var d = dd();
    return d = d === null ? null : { parent: Sn._currentValue, pool: d }, e.memoizedState = { baseLanes: o, cachePool: d }, t !== null && sc(e, null), yd(), Cg(e), t !== null && ka(t, e, l, true), null;
  }
  function Tc(t, e) {
    var o = e.ref;
    if (o === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof o != "function" && typeof o != "object") throw Error(u(284));
      (t === null || t.ref !== o) && (e.flags |= 4194816);
    }
  }
  function Id(t, e, o, l, d) {
    return Ba(e), o = xd(t, e, o, l, void 0, d), l = Sd(), t !== null && !Rn ? (Cd(t, e, d), dr(t, e, d)) : (Kt && l && St(e), e.flags |= 1, $n(t, e, o, d), e.child);
  }
  function $g(t, e, o, l, d, p) {
    return Ba(e), e.updateQueue = null, o = Nm(e, l, o, d), Dm(t), l = Sd(), t !== null && !Rn ? (Cd(t, e, p), dr(t, e, p)) : (Kt && l && St(e), e.flags |= 1, $n(t, e, o, p), e.child);
  }
  function Ig(t, e, o, l, d) {
    if (Ba(e), e.stateNode === null) {
      var p = lr, x = o.contextType;
      typeof x == "object" && x !== null && (p = Gn(x)), p = new o(l, p), e.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, p.updater = Nd, e.stateNode = p, p._reactInternals = e, p = e.stateNode, p.props = l, p.state = e.memoizedState, p.refs = {}, pd(e), x = o.contextType, p.context = typeof x == "object" && x !== null ? Gn(x) : lr, p.state = e.memoizedState, x = o.getDerivedStateFromProps, typeof x == "function" && (Dd(e, o, x, l), p.state = e.memoizedState), typeof o.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (x = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), x !== p.state && Nd.enqueueReplaceState(p, p.state, null), Ml(e, l, p, d), Ol(), p.state = e.memoizedState), typeof p.componentDidMount == "function" && (e.flags |= 4194308), l = true;
    } else if (t === null) {
      p = e.stateNode;
      var E = e.memoizedProps, H = $a(o, E);
      p.props = H;
      var Q = p.context, vt = o.contextType;
      x = lr, typeof vt == "object" && vt !== null && (x = Gn(vt));
      var xt = o.getDerivedStateFromProps;
      vt = typeof xt == "function" || typeof p.getSnapshotBeforeUpdate == "function", E = e.pendingProps !== E, vt || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (E || Q !== x) && wg(e, p, l, x), Vr = false;
      var nt = e.memoizedState;
      p.state = nt, Ml(e, l, p, d), Ol(), Q = e.memoizedState, E || nt !== Q || Vr ? (typeof xt == "function" && (Dd(e, o, xt, l), Q = e.memoizedState), (H = Vr || Tg(e, o, H, l, nt, Q, x)) ? (vt || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = Q), p.props = l, p.state = Q, p.context = x, l = H) : (typeof p.componentDidMount == "function" && (e.flags |= 4194308), l = false);
    } else {
      p = e.stateNode, md(t, e), x = e.memoizedProps, vt = $a(o, x), p.props = vt, xt = e.pendingProps, nt = p.context, Q = o.contextType, H = lr, typeof Q == "object" && Q !== null && (H = Gn(Q)), E = o.getDerivedStateFromProps, (Q = typeof E == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (x !== xt || nt !== H) && wg(e, p, l, H), Vr = false, nt = e.memoizedState, p.state = nt, Ml(e, l, p, d), Ol();
      var at = e.memoizedState;
      x !== xt || nt !== at || Vr || t !== null && t.dependencies !== null && rc(t.dependencies) ? (typeof E == "function" && (Dd(e, o, E, l), at = e.memoizedState), (vt = Vr || Tg(e, o, vt, l, nt, at, H) || t !== null && t.dependencies !== null && rc(t.dependencies)) ? (Q || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(l, at, H), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(l, at, H)), typeof p.componentDidUpdate == "function" && (e.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || x === t.memoizedProps && nt === t.memoizedState || (e.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || x === t.memoizedProps && nt === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = at), p.props = l, p.state = at, p.context = H, l = vt) : (typeof p.componentDidUpdate != "function" || x === t.memoizedProps && nt === t.memoizedState || (e.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || x === t.memoizedProps && nt === t.memoizedState || (e.flags |= 1024), l = false);
    }
    return p = l, Tc(t, e), l = (e.flags & 128) !== 0, p || l ? (p = e.stateNode, o = l && typeof o.getDerivedStateFromError != "function" ? null : p.render(), e.flags |= 1, t !== null && l ? (e.child = Cs(e, t.child, null, d), e.child = Cs(e, null, o, d)) : $n(t, e, o, d), e.memoizedState = p.state, t = e.child) : t = dr(t, e, d), t;
  }
  function Hg(t, e, o, l) {
    return Zr(), e.flags |= 256, $n(t, e, o, l), e.child;
  }
  var Hd = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function jd(t) {
    return { baseLanes: t, cachePool: Om() };
  }
  function Ud(t, e, o) {
    return t = t !== null ? t.childLanes & ~o : 0, e && (t |= Qi), t;
  }
  function jg(t, e, o) {
    var l = e.pendingProps, d = false, p = (e.flags & 128) !== 0, x;
    if ((x = p) || (x = t !== null && t.memoizedState === null ? false : (Cn.current & 2) !== 0), x && (d = true, e.flags &= -129), x = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Kt) {
        if (d ? Xr(e) : Kr(), Kt) {
          var E = Nt, H;
          if (H = E) {
            t: {
              for (H = E, E = ln; H.nodeType !== 8; ) {
                if (!E) {
                  E = null;
                  break t;
                }
                if (H = yo(H.nextSibling), H === null) {
                  E = null;
                  break t;
                }
              }
              E = H;
            }
            E !== null ? (e.memoizedState = { dehydrated: E, treeContext: _ !== null ? { id: T, overflow: I } : null, retryLane: 536870912, hydrationErrors: null }, H = si(18, null, null, 0), H.stateNode = E, H.return = e, e.child = H, Lt = e, Nt = null, H = true) : H = false;
          }
          H || vi(e);
        }
        if (E = e.memoizedState, E !== null && (E = E.dehydrated, E !== null)) return wh(E) ? e.lanes = 32 : e.lanes = 536870912, null;
        fr(e);
      }
      return E = l.children, l = l.fallback, d ? (Kr(), d = e.mode, E = wc({ mode: "hidden", children: E }, d), l = Lo(l, d, o, null), E.return = e, l.return = e, E.sibling = l, e.child = E, d = e.child, d.memoizedState = jd(o), d.childLanes = Ud(t, x, o), e.memoizedState = Hd, l) : (Xr(e), Zd(e, E));
    }
    if (H = t.memoizedState, H !== null && (E = H.dehydrated, E !== null)) {
      if (p) e.flags & 256 ? (Xr(e), e.flags &= -257, e = qd(t, e, o)) : e.memoizedState !== null ? (Kr(), e.child = t.child, e.flags |= 128, e = null) : (Kr(), d = l.fallback, E = e.mode, l = wc({ mode: "visible", children: l.children }, E), d = Lo(d, E, o, null), d.flags |= 2, l.return = e, d.return = e, l.sibling = d, e.child = l, Cs(e, t.child, null, o), l = e.child, l.memoizedState = jd(o), l.childLanes = Ud(t, x, o), e.memoizedState = Hd, e = d);
      else if (Xr(e), wh(E)) {
        if (x = E.nextSibling && E.nextSibling.dataset, x) var Q = x.dgst;
        x = Q, l = Error(u(419)), l.stack = "", l.digest = x, qr({ value: l, source: null, stack: null }), e = qd(t, e, o);
      } else if (Rn || ka(t, e, o, false), x = (o & t.childLanes) !== 0, Rn || x) {
        if (x = We, x !== null && (l = o & -o, l = (l & 42) !== 0 ? 1 : fi(l), l = (l & (x.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== H.retryLane)) throw H.retryLane = l, jr(t, l), Di(x, t, l), Pg;
        E.data === "$?" || lh(), e = qd(t, e, o);
      } else E.data === "$?" ? (e.flags |= 192, e.child = t.child, e = null) : (t = H.treeContext, Nt = yo(E.nextSibling), Lt = e, Kt = true, Ke = null, ln = false, t !== null && (c[m++] = T, c[m++] = I, c[m++] = _, T = t.id, I = t.overflow, _ = e), e = Zd(e, l.children), e.flags |= 4096);
      return e;
    }
    return d ? (Kr(), d = l.fallback, E = e.mode, H = t.child, Q = H.sibling, l = Xi(H, { mode: "hidden", children: l.children }), l.subtreeFlags = H.subtreeFlags & 65011712, Q !== null ? d = Xi(Q, d) : (d = Lo(d, E, o, null), d.flags |= 2), d.return = e, l.return = e, l.sibling = d, e.child = l, l = d, d = e.child, E = t.child.memoizedState, E === null ? E = jd(o) : (H = E.cachePool, H !== null ? (Q = Sn._currentValue, H = H.parent !== Q ? { parent: Q, pool: Q } : H) : H = Om(), E = { baseLanes: E.baseLanes | o, cachePool: H }), d.memoizedState = E, d.childLanes = Ud(t, x, o), e.memoizedState = Hd, l) : (Xr(e), o = t.child, t = o.sibling, o = Xi(o, { mode: "visible", children: l.children }), o.return = e, o.sibling = null, t !== null && (x = e.deletions, x === null ? (e.deletions = [t], e.flags |= 16) : x.push(t)), e.child = o, e.memoizedState = null, o);
  }
  function Zd(t, e) {
    return e = wc({ mode: "visible", children: e }, t.mode), e.return = t, t.child = e;
  }
  function wc(t, e) {
    return t = si(22, t, null, e), t.lanes = 0, t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }, t;
  }
  function qd(t, e, o) {
    return Cs(e, t.child, null, o), t = Zd(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
  }
  function Ug(t, e, o) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), za(t.return, e, o);
  }
  function Vd(t, e, o, l, d) {
    var p = t.memoizedState;
    p === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: l, tail: o, tailMode: d } : (p.isBackwards = e, p.rendering = null, p.renderingStartTime = 0, p.last = l, p.tail = o, p.tailMode = d);
  }
  function Zg(t, e, o) {
    var l = e.pendingProps, d = l.revealOrder, p = l.tail;
    if ($n(t, e, l.children, o), l = Cn.current, (l & 2) !== 0) l = l & 1 | 2, e.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Ug(t, o, e);
        else if (t.tag === 19) Ug(t, o, e);
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
        for (o = e.child, d = null; o !== null; ) t = o.alternate, t !== null && xc(t) === null && (d = o), o = o.sibling;
        o = d, o === null ? (d = e.child, e.child = null) : (d = o.sibling, o.sibling = null), Vd(e, false, d, o, p);
        break;
      case "backwards":
        for (o = null, d = e.child, e.child = null; d !== null; ) {
          if (t = d.alternate, t !== null && xc(t) === null) {
            e.child = d;
            break;
          }
          t = d.sibling, d.sibling = o, o = d, d = t;
        }
        Vd(e, true, o, null, p);
        break;
      case "together":
        Vd(e, false, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function dr(t, e, o) {
    if (t !== null && (e.dependencies = t.dependencies), ea |= e.lanes, (o & e.childLanes) === 0) if (t !== null) {
      if (ka(t, e, o, false), (o & e.childLanes) === 0) return null;
    } else return null;
    if (t !== null && e.child !== t.child) throw Error(u(153));
    if (e.child !== null) {
      for (t = e.child, o = Xi(t, t.pendingProps), e.child = o, o.return = e; t.sibling !== null; ) t = t.sibling, o = o.sibling = Xi(t, t.pendingProps), o.return = e;
      o.sibling = null;
    }
    return e.child;
  }
  function Gd(t, e) {
    return (t.lanes & e) !== 0 ? true : (t = t.dependencies, !!(t !== null && rc(t)));
  }
  function zb(t, e, o) {
    switch (e.tag) {
      case 3:
        Pt(e, e.stateNode.containerInfo), Po(e, Sn, t.memoizedState.cache), Zr();
        break;
      case 27:
      case 5:
        Rt(e);
        break;
      case 4:
        Pt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Po(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null) return l.dehydrated !== null ? (Xr(e), e.flags |= 128, null) : (o & e.child.childLanes) !== 0 ? jg(t, e, o) : (Xr(e), t = dr(t, e, o), t !== null ? t.sibling : null);
        Xr(e);
        break;
      case 19:
        var d = (t.flags & 128) !== 0;
        if (l = (o & e.childLanes) !== 0, l || (ka(t, e, o, false), l = (o & e.childLanes) !== 0), d) {
          if (l) return Zg(t, e, o);
          e.flags |= 128;
        }
        if (d = e.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), dt(Cn, Cn.current), l) break;
        return null;
      case 22:
      case 23:
        return e.lanes = 0, Dg(t, e, o);
      case 24:
        Po(e, Sn, t.memoizedState.cache);
    }
    return dr(t, e, o);
  }
  function qg(t, e, o) {
    if (t !== null) if (t.memoizedProps !== e.pendingProps) Rn = true;
    else {
      if (!Gd(t, o) && (e.flags & 128) === 0) return Rn = false, zb(t, e, o);
      Rn = (t.flags & 131072) !== 0;
    }
    else Rn = false, Kt && (e.flags & 1048576) !== 0 && lt(e, s, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          t = e.pendingProps;
          var l = e.elementType, d = l._init;
          if (l = d(l._payload), e.type = l, typeof l == "function") hs(l) ? (t = $a(l, t), e.tag = 1, e = Ig(null, e, l, t, o)) : (e.tag = 0, e = Id(null, e, l, t, o));
          else {
            if (l != null) {
              if (d = l.$$typeof, d === N) {
                e.tag = 11, e = zg(null, e, l, t, o);
                break t;
              } else if (d === X) {
                e.tag = 14, e = kg(null, e, l, t, o);
                break t;
              }
            }
            throw e = W(l) || l, Error(u(306, e, ""));
          }
        }
        return e;
      case 0:
        return Id(t, e, e.type, e.pendingProps, o);
      case 1:
        return l = e.type, d = $a(l, e.pendingProps), Ig(t, e, l, d, o);
      case 3:
        t: {
          if (Pt(e, e.stateNode.containerInfo), t === null) throw Error(u(387));
          l = e.pendingProps;
          var p = e.memoizedState;
          d = p.element, md(t, e), Ml(e, l, null, o);
          var x = e.memoizedState;
          if (l = x.cache, Po(e, Sn, l), l !== p.cache && ms(e, [Sn], o, true), Ol(), l = x.element, p.isDehydrated) if (p = { element: l, isDehydrated: false, cache: x.cache }, e.updateQueue.baseState = p, e.memoizedState = p, e.flags & 256) {
            e = Hg(t, e, l, o);
            break t;
          } else if (l !== d) {
            d = ri(Error(u(424)), e), qr(d), e = Hg(t, e, l, o);
            break t;
          } else {
            switch (t = e.stateNode.containerInfo, t.nodeType) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
            }
            for (Nt = yo(t.firstChild), Lt = e, Kt = true, Ke = null, ln = true, o = Sg(e, null, l, o), e.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          }
          else {
            if (Zr(), l === d) {
              e = dr(t, e, o);
              break t;
            }
            $n(t, e, l, o);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Tc(t, e), t === null ? (o = Fv(e.type, null, e.pendingProps, null)) ? e.memoizedState = o : Kt || (o = e.type, t = e.pendingProps, l = Ic(ct.current).createElement(o), l[Qe] = e, l[an] = t, Hn(l, o, t), Je(l), e.stateNode = l) : e.memoizedState = Fv(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return Rt(e), t === null && Kt && (l = e.stateNode = Vv(e.type, e.pendingProps, ct.current), Lt = e, ln = true, d = Nt, ra(e.type) ? (Eh = d, Nt = yo(l.firstChild)) : Nt = d), $n(t, e, e.pendingProps.children, o), Tc(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Kt && ((d = l = Nt) && (l = s1(l, e.type, e.pendingProps, ln), l !== null ? (e.stateNode = l, Lt = e, Nt = yo(l.firstChild), ln = false, d = true) : d = false), d || vi(e)), Rt(e), d = e.type, p = e.pendingProps, x = t !== null ? t.memoizedProps : null, l = p.children, Sh(d, p) ? l = null : x !== null && Sh(d, x) && (e.flags |= 32), e.memoizedState !== null && (d = xd(t, e, wb, null, null, o), Kl._currentValue = d), Tc(t, e), $n(t, e, l, o), e.child;
      case 6:
        return t === null && Kt && ((t = o = Nt) && (o = l1(o, e.pendingProps, ln), o !== null ? (e.stateNode = o, Lt = e, Nt = null, t = true) : t = false), t || vi(e)), null;
      case 13:
        return jg(t, e, o);
      case 4:
        return Pt(e, e.stateNode.containerInfo), l = e.pendingProps, t === null ? e.child = Cs(e, null, l, o) : $n(t, e, l, o), e.child;
      case 11:
        return zg(t, e, e.type, e.pendingProps, o);
      case 7:
        return $n(t, e, e.pendingProps, o), e.child;
      case 8:
        return $n(t, e, e.pendingProps.children, o), e.child;
      case 12:
        return $n(t, e, e.pendingProps.children, o), e.child;
      case 10:
        return l = e.pendingProps, Po(e, e.type, l.value), $n(t, e, l.children, o), e.child;
      case 9:
        return d = e.type._context, l = e.pendingProps.children, Ba(e), d = Gn(d), l = l(d), e.flags |= 1, $n(t, e, l, o), e.child;
      case 14:
        return kg(t, e, e.type, e.pendingProps, o);
      case 15:
        return Bg(t, e, e.type, e.pendingProps, o);
      case 19:
        return Zg(t, e, o);
      case 31:
        return l = e.pendingProps, o = e.mode, l = { mode: l.mode, children: l.children }, t === null ? (o = wc(l, o), o.ref = e.ref, e.child = o, o.return = e, e = o) : (o = Xi(t.child, l), o.ref = e.ref, e.child = o, o.return = e, e = o), e;
      case 22:
        return Dg(t, e, o);
      case 24:
        return Ba(e), l = Gn(Sn), t === null ? (d = dd(), d === null && (d = We, p = cd(), d.pooledCache = p, p.refCount++, p !== null && (d.pooledCacheLanes |= o), d = p), e.memoizedState = { parent: l, cache: d }, pd(e), Po(e, Sn, d)) : ((t.lanes & o) !== 0 && (md(t, e), Ml(e, null, null, o), Ol()), d = t.memoizedState, p = e.memoizedState, d.parent !== l ? (d = { parent: l, cache: l }, e.memoizedState = d, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = d), Po(e, Sn, l)) : (l = p.cache, Po(e, Sn, l), l !== d.cache && ms(e, [Sn], o, true))), $n(t, e, e.pendingProps.children, o), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(u(156, e.tag));
  }
  function hr(t) {
    t.flags |= 4;
  }
  function Vg(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (t.flags |= 16777216, !Jv(e)) {
      if (e = Wi.current, e !== null && ((Ce & 4194048) === Ce ? zo !== null : (Ce & 62914560) !== Ce && (Ce & 536870912) === 0 || e !== zo)) throw wl = hd, Mm;
      t.flags |= 8192;
    }
  }
  function Ec(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? lo() : 536870912, t.lanes |= e, Os |= e);
  }
  function Bl(t, e) {
    if (!Kt) switch (t.tailMode) {
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
  function kb(t, e, o) {
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
        return o = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), go(Sn), $t(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (t === null || t.child === null) && (Pa(e) ? hr(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, oc())), un(e), null;
      case 26:
        return o = e.memoizedState, t === null ? (hr(e), o !== null ? (un(e), Vg(e, o)) : (un(e), e.flags &= -16777217)) : o ? o !== t.memoizedState ? (hr(e), un(e), Vg(e, o)) : (un(e), e.flags &= -16777217) : (t.memoizedProps !== l && hr(e), un(e), e.flags &= -16777217), null;
      case 27:
        Ut(e), o = ct.current;
        var d = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== l && hr(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(u(166));
            return un(e), null;
          }
          t = bt.current, Pa(e) ? nc(e) : (t = Vv(d, l, o), e.stateNode = t, hr(e));
        }
        return un(e), null;
      case 5:
        if (Ut(e), o = e.type, t !== null && e.stateNode != null) t.memoizedProps !== l && hr(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(u(166));
            return un(e), null;
          }
          if (t = bt.current, Pa(e)) nc(e);
          else {
            switch (d = Ic(ct.current), t) {
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
            t && hr(e);
          }
        }
        return un(e), e.flags &= -16777217, null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && hr(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(u(166));
          if (t = ct.current, Pa(e)) {
            if (t = e.stateNode, o = e.memoizedProps, l = null, d = Lt, d !== null) switch (d.tag) {
              case 27:
              case 5:
                l = d.memoizedProps;
            }
            t[Qe] = e, t = !!(t.nodeValue === o || l !== null && l.suppressHydrationWarning === true || $v(t.nodeValue, o)), t || vi(e);
          } else t = Ic(t).createTextNode(l), t[Qe] = e, e.stateNode = t;
        }
        return un(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (d = Pa(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!d) throw Error(u(318));
              if (d = e.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(u(317));
              d[Qe] = e;
            } else Zr(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            un(e), d = false;
          } else d = oc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = d), d = true;
          if (!d) return e.flags & 256 ? (fr(e), e) : (fr(e), null);
        }
        if (fr(e), (e.flags & 128) !== 0) return e.lanes = o, e;
        if (o = l !== null, t = t !== null && t.memoizedState !== null, o) {
          l = e.child, d = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (d = l.alternate.memoizedState.cachePool.pool);
          var p = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (p = l.memoizedState.cachePool.pool), p !== d && (l.flags |= 2048);
        }
        return o !== t && o && (e.child.flags |= 8192), Ec(e, e.updateQueue), un(e), null;
      case 4:
        return $t(), t === null && vh(e.stateNode.containerInfo), un(e), null;
      case 10:
        return go(e.type), un(e), null;
      case 19:
        if (ft(Cn), d = e.memoizedState, d === null) return un(e), null;
        if (l = (e.flags & 128) !== 0, p = d.rendering, p === null) if (l) Bl(d, false);
        else {
          if (dn !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
            if (p = xc(t), p !== null) {
              for (e.flags |= 128, Bl(d, false), t = p.updateQueue, e.updateQueue = t, Ec(e, t), e.subtreeFlags = 0, t = o, o = e.child; o !== null; ) bl(o, t), o = o.sibling;
              return dt(Cn, Cn.current & 1 | 2), e.child;
            }
            t = t.sibling;
          }
          d.tail !== null && ue() > Ac && (e.flags |= 128, l = true, Bl(d, false), e.lanes = 4194304);
        }
        else {
          if (!l) if (t = xc(p), t !== null) {
            if (e.flags |= 128, l = true, t = t.updateQueue, e.updateQueue = t, Ec(e, t), Bl(d, true), d.tail === null && d.tailMode === "hidden" && !p.alternate && !Kt) return un(e), null;
          } else 2 * ue() - d.renderingStartTime > Ac && o !== 536870912 && (e.flags |= 128, l = true, Bl(d, false), e.lanes = 4194304);
          d.isBackwards ? (p.sibling = e.child, e.child = p) : (t = d.last, t !== null ? t.sibling = p : e.child = p, d.last = p);
        }
        return d.tail !== null ? (e = d.tail, d.rendering = e, d.tail = e.sibling, d.renderingStartTime = ue(), e.sibling = null, t = Cn.current, dt(Cn, l ? t & 1 | 2 : t & 1), e) : (un(e), null);
      case 22:
      case 23:
        return fr(e), _d(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (o & 536870912) !== 0 && (e.flags & 128) === 0 && (un(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : un(e), o = e.updateQueue, o !== null && Ec(e, o.retryQueue), o = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (o = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== o && (e.flags |= 2048), t !== null && ft(Da), null;
      case 24:
        return o = null, t !== null && (o = t.memoizedState.cache), e.memoizedState.cache !== o && (e.flags |= 2048), go(Sn), un(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, e.tag));
  }
  function Bb(t, e) {
    switch (Et(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return go(Sn), $t(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Ut(e), null;
      case 13:
        if (fr(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null) throw Error(u(340));
          Zr();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return ft(Cn), null;
      case 4:
        return $t(), null;
      case 10:
        return go(e.type), null;
      case 22:
      case 23:
        return fr(e), _d(), t !== null && ft(Da), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return go(Sn), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Gg(t, e) {
    switch (Et(e), e.tag) {
      case 3:
        go(Sn), $t();
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
        fr(e);
        break;
      case 19:
        ft(Cn);
        break;
      case 10:
        go(e.type);
        break;
      case 22:
      case 23:
        fr(e), _d(), t !== null && ft(Da);
        break;
      case 24:
        go(Sn);
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
    } catch (E) {
      Ze(e, e.return, E);
    }
  }
  function Wr(t, e, o) {
    try {
      var l = e.updateQueue, d = l !== null ? l.lastEffect : null;
      if (d !== null) {
        var p = d.next;
        l = p;
        do {
          if ((l.tag & t) === t) {
            var x = l.inst, E = x.destroy;
            if (E !== void 0) {
              x.destroy = void 0, d = e;
              var H = o, Q = E;
              try {
                Q();
              } catch (vt) {
                Ze(d, H, vt);
              }
            }
          }
          l = l.next;
        } while (l !== p);
      }
    } catch (vt) {
      Ze(e, e.return, vt);
    }
  }
  function Yg(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var o = t.stateNode;
      try {
        km(e, o);
      } catch (l) {
        Ze(t, t.return, l);
      }
    }
  }
  function Fg(t, e, o) {
    o.props = $a(t.type, t.memoizedProps), o.state = t.memoizedState;
    try {
      o.componentWillUnmount();
    } catch (l) {
      Ze(t, e, l);
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
      Ze(t, e, d);
    }
  }
  function ko(t, e) {
    var o = t.ref, l = t.refCleanup;
    if (o !== null) if (typeof l == "function") try {
      l();
    } catch (d) {
      Ze(t, e, d);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof o == "function") try {
      o(null);
    } catch (d) {
      Ze(t, e, d);
    }
    else o.current = null;
  }
  function Xg(t) {
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
      Ze(t, t.return, d);
    }
  }
  function Yd(t, e, o) {
    try {
      var l = t.stateNode;
      n1(l, t.type, o, e), l[an] = e;
    } catch (d) {
      Ze(t, t.return, d);
    }
  }
  function Kg(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ra(t.type) || t.tag === 4;
  }
  function Fd(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Kg(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && ra(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Xd(t, e, o) {
    var l = t.tag;
    if (l === 5 || l === 6) t = t.stateNode, e ? (o.nodeType === 9 ? o.body : o.nodeName === "HTML" ? o.ownerDocument.body : o).insertBefore(t, e) : (e = o.nodeType === 9 ? o.body : o.nodeName === "HTML" ? o.ownerDocument.body : o, e.appendChild(t), o = o._reactRootContainer, o != null || e.onclick !== null || (e.onclick = $c));
    else if (l !== 4 && (l === 27 && ra(t.type) && (o = t.stateNode, e = null), t = t.child, t !== null)) for (Xd(t, e, o), t = t.sibling; t !== null; ) Xd(t, e, o), t = t.sibling;
  }
  function Oc(t, e, o) {
    var l = t.tag;
    if (l === 5 || l === 6) t = t.stateNode, e ? o.insertBefore(t, e) : o.appendChild(t);
    else if (l !== 4 && (l === 27 && ra(t.type) && (o = t.stateNode), t = t.child, t !== null)) for (Oc(t, e, o), t = t.sibling; t !== null; ) Oc(t, e, o), t = t.sibling;
  }
  function Wg(t) {
    var e = t.stateNode, o = t.memoizedProps;
    try {
      for (var l = t.type, d = e.attributes; d.length; ) e.removeAttributeNode(d[0]);
      Hn(e, l, o), e[Qe] = t, e[an] = o;
    } catch (p) {
      Ze(t, t.return, p);
    }
  }
  var pr = false, gn = false, Kd = false, Qg = typeof WeakSet == "function" ? WeakSet : Set, Ln = null;
  function Db(t, e) {
    if (t = t.containerInfo, bh = Vc, t = wa(t), Ea(t)) {
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
          var x = 0, E = -1, H = -1, Q = 0, vt = 0, xt = t, nt = null;
          e: for (; ; ) {
            for (var at; xt !== o || d !== 0 && xt.nodeType !== 3 || (E = x + d), xt !== p || l !== 0 && xt.nodeType !== 3 || (H = x + l), xt.nodeType === 3 && (x += xt.nodeValue.length), (at = xt.firstChild) !== null; ) nt = xt, xt = at;
            for (; ; ) {
              if (xt === t) break e;
              if (nt === o && ++Q === d && (E = x), nt === p && ++vt === l && (H = x), (at = xt.nextSibling) !== null) break;
              xt = nt, nt = xt.parentNode;
            }
            xt = at;
          }
          o = E === -1 || H === -1 ? null : { start: E, end: H };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (xh = { focusedElem: t, selectionRange: o }, Vc = false, Ln = e; Ln !== null; ) if (e = Ln, t = e.child, (e.subtreeFlags & 1024) !== 0 && t !== null) t.return = e, Ln = t;
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
              var Xt = $a(o.type, d, o.elementType === o.type);
              t = l.getSnapshotBeforeUpdate(Xt, p), l.__reactInternalSnapshotBeforeUpdate = t;
            } catch (Zt) {
              Ze(o, o.return, Zt);
            }
          }
          break;
        case 3:
          if ((t & 1024) !== 0) {
            if (t = e.stateNode.containerInfo, o = t.nodeType, o === 9) Th(t);
            else if (o === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Th(t);
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
  function Jg(t, e, o) {
    var l = o.flags;
    switch (o.tag) {
      case 0:
      case 11:
      case 15:
        Qr(t, o), l & 4 && Dl(5, o);
        break;
      case 1:
        if (Qr(t, o), l & 4) if (t = o.stateNode, e === null) try {
          t.componentDidMount();
        } catch (x) {
          Ze(o, o.return, x);
        }
        else {
          var d = $a(o.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            t.componentDidUpdate(d, e, t.__reactInternalSnapshotBeforeUpdate);
          } catch (x) {
            Ze(o, o.return, x);
          }
        }
        l & 64 && Yg(o), l & 512 && Nl(o, o.return);
        break;
      case 3:
        if (Qr(t, o), l & 64 && (t = o.updateQueue, t !== null)) {
          if (e = null, o.child !== null) switch (o.child.tag) {
            case 27:
            case 5:
              e = o.child.stateNode;
              break;
            case 1:
              e = o.child.stateNode;
          }
          try {
            km(t, e);
          } catch (x) {
            Ze(o, o.return, x);
          }
        }
        break;
      case 27:
        e === null && l & 4 && Wg(o);
      case 26:
      case 5:
        Qr(t, o), e === null && l & 4 && Xg(o), l & 512 && Nl(o, o.return);
        break;
      case 12:
        Qr(t, o);
        break;
      case 13:
        Qr(t, o), l & 4 && nv(t, o), l & 64 && (t = o.memoizedState, t !== null && (t = t.dehydrated, t !== null && (o = Vb.bind(null, o), u1(t, o))));
        break;
      case 22:
        if (l = o.memoizedState !== null || pr, !l) {
          e = e !== null && e.memoizedState !== null || gn, d = pr;
          var p = gn;
          pr = l, (gn = e) && !p ? Jr(t, o, (o.subtreeFlags & 8772) !== 0) : Qr(t, o), pr = d, gn = p;
        }
        break;
      case 30:
        break;
      default:
        Qr(t, o);
    }
  }
  function tv(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, tv(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Ve(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var nn = null, _i = false;
  function mr(t, e, o) {
    for (o = o.child; o !== null; ) ev(t, e, o), o = o.sibling;
  }
  function ev(t, e, o) {
    if (Vt && typeof Vt.onCommitFiberUnmount == "function") try {
      Vt.onCommitFiberUnmount(ce, o);
    } catch {
    }
    switch (o.tag) {
      case 26:
        gn || ko(o, e), mr(t, e, o), o.memoizedState ? o.memoizedState.count-- : o.stateNode && (o = o.stateNode, o.parentNode.removeChild(o));
        break;
      case 27:
        gn || ko(o, e);
        var l = nn, d = _i;
        ra(o.type) && (nn = o.stateNode, _i = false), mr(t, e, o), Gl(o.stateNode), nn = l, _i = d;
        break;
      case 5:
        gn || ko(o, e);
      case 6:
        if (l = nn, d = _i, nn = null, mr(t, e, o), nn = l, _i = d, nn !== null) if (_i) try {
          (nn.nodeType === 9 ? nn.body : nn.nodeName === "HTML" ? nn.ownerDocument.body : nn).removeChild(o.stateNode);
        } catch (p) {
          Ze(o, e, p);
        }
        else try {
          nn.removeChild(o.stateNode);
        } catch (p) {
          Ze(o, e, p);
        }
        break;
      case 18:
        nn !== null && (_i ? (t = nn, Zv(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, o.stateNode), tu(t)) : Zv(nn, o.stateNode));
        break;
      case 4:
        l = nn, d = _i, nn = o.stateNode.containerInfo, _i = true, mr(t, e, o), nn = l, _i = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        gn || Wr(2, o, e), gn || Wr(4, o, e), mr(t, e, o);
        break;
      case 1:
        gn || (ko(o, e), l = o.stateNode, typeof l.componentWillUnmount == "function" && Fg(o, e, l)), mr(t, e, o);
        break;
      case 21:
        mr(t, e, o);
        break;
      case 22:
        gn = (l = gn) || o.memoizedState !== null, mr(t, e, o), gn = l;
        break;
      default:
        mr(t, e, o);
    }
  }
  function nv(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      tu(t);
    } catch (o) {
      Ze(e, e.return, o);
    }
  }
  function Nb(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Qg()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Qg()), e;
      default:
        throw Error(u(435, t.tag));
    }
  }
  function Wd(t, e) {
    var o = Nb(t);
    e.forEach(function(l) {
      var d = Gb.bind(null, t, l);
      o.has(l) || (o.add(l), l.then(d, d));
    });
  }
  function Pi(t, e) {
    var o = e.deletions;
    if (o !== null) for (var l = 0; l < o.length; l++) {
      var d = o[l], p = t, x = e, E = x;
      t: for (; E !== null; ) {
        switch (E.tag) {
          case 27:
            if (ra(E.type)) {
              nn = E.stateNode, _i = false;
              break t;
            }
            break;
          case 5:
            nn = E.stateNode, _i = false;
            break t;
          case 3:
          case 4:
            nn = E.stateNode.containerInfo, _i = true;
            break t;
        }
        E = E.return;
      }
      if (nn === null) throw Error(u(160));
      ev(p, x, d), nn = null, _i = false, p = d.alternate, p !== null && (p.return = null), d.return = null;
    }
    if (e.subtreeFlags & 13878) for (e = e.child; e !== null; ) iv(e, t), e = e.sibling;
  }
  var vo = null;
  function iv(t, e) {
    var o = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pi(e, t), zi(t), l & 4 && (Wr(3, t, t.return), Dl(3, t), Wr(5, t, t.return));
        break;
      case 1:
        Pi(e, t), zi(t), l & 512 && (gn || o === null || ko(o, o.return)), l & 64 && pr && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (o = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = o === null ? l : o.concat(l))));
        break;
      case 26:
        var d = vo;
        if (Pi(e, t), zi(t), l & 512 && (gn || o === null || ko(o, o.return)), l & 4) {
          var p = o !== null ? o.memoizedState : null;
          if (l = t.memoizedState, o === null) if (l === null) if (t.stateNode === null) {
            t: {
              l = t.type, o = t.memoizedProps, d = d.ownerDocument || d;
              e: switch (l) {
                case "title":
                  p = d.getElementsByTagName("title")[0], (!p || p[pi] || p[Qe] || p.namespaceURI === "http://www.w3.org/2000/svg" || p.hasAttribute("itemprop")) && (p = d.createElement(l), d.head.insertBefore(p, d.querySelector("head > title"))), Hn(p, l, o), p[Qe] = t, Je(p), l = p;
                  break t;
                case "link":
                  var x = Wv("link", "href", d).get(l + (o.href || ""));
                  if (x) {
                    for (var E = 0; E < x.length; E++) if (p = x[E], p.getAttribute("href") === (o.href == null || o.href === "" ? null : o.href) && p.getAttribute("rel") === (o.rel == null ? null : o.rel) && p.getAttribute("title") === (o.title == null ? null : o.title) && p.getAttribute("crossorigin") === (o.crossOrigin == null ? null : o.crossOrigin)) {
                      x.splice(E, 1);
                      break e;
                    }
                  }
                  p = d.createElement(l), Hn(p, l, o), d.head.appendChild(p);
                  break;
                case "meta":
                  if (x = Wv("meta", "content", d).get(l + (o.content || ""))) {
                    for (E = 0; E < x.length; E++) if (p = x[E], p.getAttribute("content") === (o.content == null ? null : "" + o.content) && p.getAttribute("name") === (o.name == null ? null : o.name) && p.getAttribute("property") === (o.property == null ? null : o.property) && p.getAttribute("http-equiv") === (o.httpEquiv == null ? null : o.httpEquiv) && p.getAttribute("charset") === (o.charSet == null ? null : o.charSet)) {
                      x.splice(E, 1);
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
          } else Qv(d, t.type, t.stateNode);
          else t.stateNode = Kv(d, l, t.memoizedProps);
          else p !== l ? (p === null ? o.stateNode !== null && (o = o.stateNode, o.parentNode.removeChild(o)) : p.count--, l === null ? Qv(d, t.type, t.stateNode) : Kv(d, l, t.memoizedProps)) : l === null && t.stateNode !== null && Yd(t, t.memoizedProps, o.memoizedProps);
        }
        break;
      case 27:
        Pi(e, t), zi(t), l & 512 && (gn || o === null || ko(o, o.return)), o !== null && l & 4 && Yd(t, t.memoizedProps, o.memoizedProps);
        break;
      case 5:
        if (Pi(e, t), zi(t), l & 512 && (gn || o === null || ko(o, o.return)), t.flags & 32) {
          d = t.stateNode;
          try {
            qi(d, "");
          } catch (at) {
            Ze(t, t.return, at);
          }
        }
        l & 4 && t.stateNode != null && (d = t.memoizedProps, Yd(t, d, o !== null ? o.memoizedProps : d)), l & 1024 && (Kd = true);
        break;
      case 6:
        if (Pi(e, t), zi(t), l & 4) {
          if (t.stateNode === null) throw Error(u(162));
          l = t.memoizedProps, o = t.stateNode;
          try {
            o.nodeValue = l;
          } catch (at) {
            Ze(t, t.return, at);
          }
        }
        break;
      case 3:
        if (Uc = null, d = vo, vo = Hc(e.containerInfo), Pi(e, t), vo = d, zi(t), l & 4 && o !== null && o.memoizedState.isDehydrated) try {
          tu(e.containerInfo);
        } catch (at) {
          Ze(t, t.return, at);
        }
        Kd && (Kd = false, ov(t));
        break;
      case 4:
        l = vo, vo = Hc(t.stateNode.containerInfo), Pi(e, t), zi(t), vo = l;
        break;
      case 12:
        Pi(e, t), zi(t);
        break;
      case 13:
        Pi(e, t), zi(t), t.child.flags & 8192 && t.memoizedState !== null != (o !== null && o.memoizedState !== null) && (ih = ue()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Wd(t, l)));
        break;
      case 22:
        d = t.memoizedState !== null;
        var H = o !== null && o.memoizedState !== null, Q = pr, vt = gn;
        if (pr = Q || d, gn = vt || H, Pi(e, t), gn = vt, pr = Q, zi(t), l & 8192) t: for (e = t.stateNode, e._visibility = d ? e._visibility & -2 : e._visibility | 1, d && (o === null || H || pr || gn || Ia(t)), o = null, e = t; ; ) {
          if (e.tag === 5 || e.tag === 26) {
            if (o === null) {
              H = o = e;
              try {
                if (p = H.stateNode, d) x = p.style, typeof x.setProperty == "function" ? x.setProperty("display", "none", "important") : x.display = "none";
                else {
                  E = H.stateNode;
                  var xt = H.memoizedProps.style, nt = xt != null && xt.hasOwnProperty("display") ? xt.display : null;
                  E.style.display = nt == null || typeof nt == "boolean" ? "" : ("" + nt).trim();
                }
              } catch (at) {
                Ze(H, H.return, at);
              }
            }
          } else if (e.tag === 6) {
            if (o === null) {
              H = e;
              try {
                H.stateNode.nodeValue = d ? "" : H.memoizedProps;
              } catch (at) {
                Ze(H, H.return, at);
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
        l & 4 && (l = t.updateQueue, l !== null && (o = l.retryQueue, o !== null && (l.retryQueue = null, Wd(t, o))));
        break;
      case 19:
        Pi(e, t), zi(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Wd(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pi(e, t), zi(t);
    }
  }
  function zi(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var o, l = t.return; l !== null; ) {
          if (Kg(l)) {
            o = l;
            break;
          }
          l = l.return;
        }
        if (o == null) throw Error(u(160));
        switch (o.tag) {
          case 27:
            var d = o.stateNode, p = Fd(t);
            Oc(t, p, d);
            break;
          case 5:
            var x = o.stateNode;
            o.flags & 32 && (qi(x, ""), o.flags &= -33);
            var E = Fd(t);
            Oc(t, E, x);
            break;
          case 3:
          case 4:
            var H = o.stateNode.containerInfo, Q = Fd(t);
            Xd(t, Q, H);
            break;
          default:
            throw Error(u(161));
        }
      } catch (vt) {
        Ze(t, t.return, vt);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function ov(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var e = t;
      ov(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
    }
  }
  function Qr(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) Jg(t, e.alternate, e), e = e.sibling;
  }
  function Ia(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Wr(4, e, e.return), Ia(e);
          break;
        case 1:
          ko(e, e.return);
          var o = e.stateNode;
          typeof o.componentWillUnmount == "function" && Fg(e, e.return, o), Ia(e);
          break;
        case 27:
          Gl(e.stateNode);
        case 26:
        case 5:
          ko(e, e.return), Ia(e);
          break;
        case 22:
          e.memoizedState === null && Ia(e);
          break;
        case 30:
          Ia(e);
          break;
        default:
          Ia(e);
      }
      t = t.sibling;
    }
  }
  function Jr(t, e, o) {
    for (o = o && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate, d = t, p = e, x = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          Jr(d, p, o), Dl(4, p);
          break;
        case 1:
          if (Jr(d, p, o), l = p, d = l.stateNode, typeof d.componentDidMount == "function") try {
            d.componentDidMount();
          } catch (Q) {
            Ze(l, l.return, Q);
          }
          if (l = p, d = l.updateQueue, d !== null) {
            var E = l.stateNode;
            try {
              var H = d.shared.hiddenCallbacks;
              if (H !== null) for (d.shared.hiddenCallbacks = null, d = 0; d < H.length; d++) zm(H[d], E);
            } catch (Q) {
              Ze(l, l.return, Q);
            }
          }
          o && x & 64 && Yg(p), Nl(p, p.return);
          break;
        case 27:
          Wg(p);
        case 26:
        case 5:
          Jr(d, p, o), o && l === null && x & 4 && Xg(p), Nl(p, p.return);
          break;
        case 12:
          Jr(d, p, o);
          break;
        case 13:
          Jr(d, p, o), o && x & 4 && nv(d, p);
          break;
        case 22:
          p.memoizedState === null && Jr(d, p, o), Nl(p, p.return);
          break;
        case 30:
          break;
        default:
          Jr(d, p, o);
      }
      e = e.sibling;
    }
  }
  function Qd(t, e) {
    var o = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (o = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== o && (t != null && t.refCount++, o != null && Sl(o));
  }
  function Jd(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Sl(t));
  }
  function Bo(t, e, o, l) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) rv(t, e, o, l), e = e.sibling;
  }
  function rv(t, e, o, l) {
    var d = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Bo(t, e, o, l), d & 2048 && Dl(9, e);
        break;
      case 1:
        Bo(t, e, o, l);
        break;
      case 3:
        Bo(t, e, o, l), d & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Sl(t)));
        break;
      case 12:
        if (d & 2048) {
          Bo(t, e, o, l), t = e.stateNode;
          try {
            var p = e.memoizedProps, x = p.id, E = p.onPostCommit;
            typeof E == "function" && E(x, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (H) {
            Ze(e, e.return, H);
          }
        } else Bo(t, e, o, l);
        break;
      case 13:
        Bo(t, e, o, l);
        break;
      case 23:
        break;
      case 22:
        p = e.stateNode, x = e.alternate, e.memoizedState !== null ? p._visibility & 2 ? Bo(t, e, o, l) : $l(t, e) : p._visibility & 2 ? Bo(t, e, o, l) : (p._visibility |= 2, Ts(t, e, o, l, (e.subtreeFlags & 10256) !== 0)), d & 2048 && Qd(x, e);
        break;
      case 24:
        Bo(t, e, o, l), d & 2048 && Jd(e.alternate, e);
        break;
      default:
        Bo(t, e, o, l);
    }
  }
  function Ts(t, e, o, l, d) {
    for (d = d && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var p = t, x = e, E = o, H = l, Q = x.flags;
      switch (x.tag) {
        case 0:
        case 11:
        case 15:
          Ts(p, x, E, H, d), Dl(8, x);
          break;
        case 23:
          break;
        case 22:
          var vt = x.stateNode;
          x.memoizedState !== null ? vt._visibility & 2 ? Ts(p, x, E, H, d) : $l(p, x) : (vt._visibility |= 2, Ts(p, x, E, H, d)), d && Q & 2048 && Qd(x.alternate, x);
          break;
        case 24:
          Ts(p, x, E, H, d), d && Q & 2048 && Jd(x.alternate, x);
          break;
        default:
          Ts(p, x, E, H, d);
      }
      e = e.sibling;
    }
  }
  function $l(t, e) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
      var o = t, l = e, d = l.flags;
      switch (l.tag) {
        case 22:
          $l(o, l), d & 2048 && Qd(l.alternate, l);
          break;
        case 24:
          $l(o, l), d & 2048 && Jd(l.alternate, l);
          break;
        default:
          $l(o, l);
      }
      e = e.sibling;
    }
  }
  var Il = 8192;
  function ws(t) {
    if (t.subtreeFlags & Il) for (t = t.child; t !== null; ) av(t), t = t.sibling;
  }
  function av(t) {
    switch (t.tag) {
      case 26:
        ws(t), t.flags & Il && t.memoizedState !== null && S1(vo, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ws(t);
        break;
      case 3:
      case 4:
        var e = vo;
        vo = Hc(t.stateNode.containerInfo), ws(t), vo = e;
        break;
      case 22:
        t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = Il, Il = 16777216, ws(t), Il = e) : ws(t));
        break;
      default:
        ws(t);
    }
  }
  function sv(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Hl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null) for (var o = 0; o < e.length; o++) {
        var l = e[o];
        Ln = l, uv(l, t);
      }
      sv(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) lv(t), t = t.sibling;
  }
  function lv(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Hl(t), t.flags & 2048 && Wr(9, t, t.return);
        break;
      case 3:
        Hl(t);
        break;
      case 12:
        Hl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Mc(t)) : Hl(t);
        break;
      default:
        Hl(t);
    }
  }
  function Mc(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null) for (var o = 0; o < e.length; o++) {
        var l = e[o];
        Ln = l, uv(l, t);
      }
      sv(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Wr(8, e, e.return), Mc(e);
          break;
        case 22:
          o = e.stateNode, o._visibility & 2 && (o._visibility &= -3, Mc(e));
          break;
        default:
          Mc(e);
      }
      t = t.sibling;
    }
  }
  function uv(t, e) {
    for (; Ln !== null; ) {
      var o = Ln;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Wr(8, o, e);
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
        if (tv(l), l === o) {
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
  var $b = { getCacheForType: function(t) {
    var e = Gn(Sn), o = e.data.get(t);
    return o === void 0 && (o = t(), e.data.set(t, o)), o;
  } }, Ib = typeof WeakMap == "function" ? WeakMap : Map, Be = 0, We = null, ge = null, Ce = 0, De = 0, ki = null, ta = false, Es = false, th = false, gr = 0, dn = 0, ea = 0, Ha = 0, eh = 0, Qi = 0, Os = 0, jl = null, bi = null, nh = false, ih = 0, Ac = 1 / 0, Rc = null, na = null, In = 0, ia = null, Ms = null, As = 0, oh = 0, rh = null, cv = null, Ul = 0, ah = null;
  function Bi() {
    if ((Be & 2) !== 0 && Ce !== 0) return Ce & -Ce;
    if (B.T !== null) {
      var t = gs;
      return t !== 0 ? t : hh();
    }
    return Zi();
  }
  function fv() {
    Qi === 0 && (Qi = (Ce & 536870912) === 0 || Kt ? so() : 536870912);
    var t = Wi.current;
    return t !== null && (t.flags |= 32), Qi;
  }
  function Di(t, e, o) {
    (t === We && (De === 2 || De === 9) || t.cancelPendingCommit !== null) && (Rs(t, 0), oa(t, Ce, Qi, false)), Tn(t, o), ((Be & 2) === 0 || t !== We) && (t === We && ((Be & 2) === 0 && (Ha |= o), dn === 4 && oa(t, Ce, Qi, false)), Do(t));
  }
  function dv(t, e, o) {
    if ((Be & 6) !== 0) throw Error(u(327));
    var l = !o && (e & 124) === 0 && (e & t.expiredLanes) === 0 || re(t, e), d = l ? Ub(t, e) : uh(t, e, true), p = l;
    do {
      if (d === 0) {
        Es && !l && oa(t, e, 0, false);
        break;
      } else {
        if (o = t.current.alternate, p && !Hb(o)) {
          d = uh(t, e, false), p = false;
          continue;
        }
        if (d === 2) {
          if (p = e, t.errorRecoveryDisabledLanes & p) var x = 0;
          else x = t.pendingLanes & -536870913, x = x !== 0 ? x : x & 536870912 ? 536870912 : 0;
          if (x !== 0) {
            e = x;
            t: {
              var E = t;
              d = jl;
              var H = E.current.memoizedState.isDehydrated;
              if (H && (Rs(E, x).flags |= 256), x = uh(E, x, false), x !== 2) {
                if (th && !H) {
                  E.errorRecoveryDisabledLanes |= p, Ha |= p, d = 4;
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
          Rs(t, 0), oa(t, e, 0, true);
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
              oa(l, e, Qi, !ta);
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
          if ((e & 62914560) === e && (d = ih + 300 - ue(), 10 < d)) {
            if (oa(l, e, Qi, !ta), ne(l, 0, true) !== 0) break t;
            l.timeoutHandle = jv(hv.bind(null, l, o, bi, Rc, nh, e, Qi, Ha, Os, ta, p, 2, -0, 0), d);
            break t;
          }
          hv(l, o, bi, Rc, nh, e, Qi, Ha, Os, ta, p, 0, -0, 0);
        }
      }
      break;
    } while (true);
    Do(t);
  }
  function hv(t, e, o, l, d, p, x, E, H, Q, vt, xt, nt, at) {
    if (t.timeoutHandle = -1, xt = e.subtreeFlags, (xt & 8192 || (xt & 16785408) === 16785408) && (Xl = { stylesheets: null, count: 0, unsuspend: x1 }, av(e), xt = C1(), xt !== null)) {
      t.cancelPendingCommit = xt(bv.bind(null, t, e, p, o, l, d, x, E, H, vt, 1, nt, at)), oa(t, p, x, !Q);
      return;
    }
    bv(t, e, p, o, l, d, x, E, H);
  }
  function Hb(t) {
    for (var e = t; ; ) {
      var o = e.tag;
      if ((o === 0 || o === 11 || o === 15) && e.flags & 16384 && (o = e.updateQueue, o !== null && (o = o.stores, o !== null))) for (var l = 0; l < o.length; l++) {
        var d = o[l], p = d.getSnapshot;
        d = d.value;
        try {
          if (!ii(p(), d)) return false;
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
  function oa(t, e, o, l) {
    e &= ~eh, e &= ~Ha, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var d = e; 0 < d; ) {
      var p = 31 - he(d), x = 1 << p;
      l[p] = -1, d &= ~x;
    }
    o !== 0 && ui(t, o, e);
  }
  function Lc() {
    return (Be & 6) === 0 ? (Zl(0), false) : true;
  }
  function sh() {
    if (ge !== null) {
      if (De === 0) var t = ge.return;
      else t = ge, mo = Ki = null, Td(t), Ss = null, zl = 0, t = ge;
      for (; t !== null; ) Gg(t.alternate, t), t = t.return;
      ge = null;
    }
  }
  function Rs(t, e) {
    var o = t.timeoutHandle;
    o !== -1 && (t.timeoutHandle = -1, o1(o)), o = t.cancelPendingCommit, o !== null && (t.cancelPendingCommit = null, o()), sh(), We = t, ge = o = Xi(t.current, null), Ce = e, De = 0, ki = null, ta = false, Es = re(t, e), th = false, Os = Qi = eh = Ha = ea = dn = 0, bi = jl = null, nh = false, (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0) for (t = t.entanglements, l &= e; 0 < l; ) {
      var d = 31 - he(l), p = 1 << d;
      e |= t[d], l &= ~p;
    }
    return gr = e, Ma(), o;
  }
  function pv(t, e) {
    fe = null, B.H = yc, e === Tl || e === lc ? (e = Lm(), De = 3) : e === Mm ? (e = Lm(), De = 4) : De = e === Pg ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, ki = e, ge === null && (dn = 1, Cc(t, ri(e, t.current)));
  }
  function mv() {
    var t = B.H;
    return B.H = yc, t === null ? yc : t;
  }
  function gv() {
    var t = B.A;
    return B.A = $b, t;
  }
  function lh() {
    dn = 4, ta || (Ce & 4194048) !== Ce && Wi.current !== null || (Es = true), (ea & 134217727) === 0 && (Ha & 134217727) === 0 || We === null || oa(We, Ce, Qi, false);
  }
  function uh(t, e, o) {
    var l = Be;
    Be |= 2;
    var d = mv(), p = gv();
    (We !== t || Ce !== e) && (Rc = null, Rs(t, e)), e = false;
    var x = dn;
    t: do
      try {
        if (De !== 0 && ge !== null) {
          var E = ge, H = ki;
          switch (De) {
            case 8:
              sh(), x = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Wi.current === null && (e = true);
              var Q = De;
              if (De = 0, ki = null, Ls(t, E, H, Q), o && Es) {
                x = 0;
                break t;
              }
              break;
            default:
              Q = De, De = 0, ki = null, Ls(t, E, H, Q);
          }
        }
        jb(), x = dn;
        break;
      } catch (vt) {
        pv(t, vt);
      }
    while (true);
    return e && t.shellSuspendCounter++, mo = Ki = null, Be = l, B.H = d, B.A = p, ge === null && (We = null, Ce = 0, Ma()), x;
  }
  function jb() {
    for (; ge !== null; ) vv(ge);
  }
  function Ub(t, e) {
    var o = Be;
    Be |= 2;
    var l = mv(), d = gv();
    We !== t || Ce !== e ? (Rc = null, Ac = ue() + 500, Rs(t, e)) : Es = re(t, e);
    t: do
      try {
        if (De !== 0 && ge !== null) {
          e = ge;
          var p = ki;
          e: switch (De) {
            case 1:
              De = 0, ki = null, Ls(t, e, p, 1);
              break;
            case 2:
            case 9:
              if (Am(p)) {
                De = 0, ki = null, yv(e);
                break;
              }
              e = function() {
                De !== 2 && De !== 9 || We !== t || (De = 7), Do(t);
              }, p.then(e, e);
              break t;
            case 3:
              De = 7;
              break t;
            case 4:
              De = 5;
              break t;
            case 7:
              Am(p) ? (De = 0, ki = null, yv(e)) : (De = 0, ki = null, Ls(t, e, p, 7));
              break;
            case 5:
              var x = null;
              switch (ge.tag) {
                case 26:
                  x = ge.memoizedState;
                case 5:
                case 27:
                  var E = ge;
                  if (!x || Jv(x)) {
                    De = 0, ki = null;
                    var H = E.sibling;
                    if (H !== null) ge = H;
                    else {
                      var Q = E.return;
                      Q !== null ? (ge = Q, Pc(Q)) : ge = null;
                    }
                    break e;
                  }
              }
              De = 0, ki = null, Ls(t, e, p, 5);
              break;
            case 6:
              De = 0, ki = null, Ls(t, e, p, 6);
              break;
            case 8:
              sh(), dn = 6;
              break t;
            default:
              throw Error(u(462));
          }
        }
        Zb();
        break;
      } catch (vt) {
        pv(t, vt);
      }
    while (true);
    return mo = Ki = null, B.H = l, B.A = d, Be = o, ge !== null ? 0 : (We = null, Ce = 0, Ma(), dn);
  }
  function Zb() {
    for (; ge !== null && !de(); ) vv(ge);
  }
  function vv(t) {
    var e = qg(t.alternate, t, gr);
    t.memoizedProps = t.pendingProps, e === null ? Pc(t) : ge = e;
  }
  function yv(t) {
    var e = t, o = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = $g(o, e, e.pendingProps, e.type, void 0, Ce);
        break;
      case 11:
        e = $g(o, e, e.pendingProps, e.type.render, e.ref, Ce);
        break;
      case 5:
        Td(e);
      default:
        Gg(o, e), e = ge = bl(e, gr), e = qg(o, e, gr);
    }
    t.memoizedProps = t.pendingProps, e === null ? Pc(t) : ge = e;
  }
  function Ls(t, e, o, l) {
    mo = Ki = null, Td(e), Ss = null, zl = 0;
    var d = e.return;
    try {
      if (Pb(t, d, e, o, Ce)) {
        dn = 1, Cc(t, ri(o, t.current)), ge = null;
        return;
      }
    } catch (p) {
      if (d !== null) throw ge = d, p;
      dn = 1, Cc(t, ri(o, t.current)), ge = null;
      return;
    }
    e.flags & 32768 ? (Kt || l === 1 ? t = true : Es || (Ce & 536870912) !== 0 ? t = false : (ta = t = true, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Wi.current, l !== null && l.tag === 13 && (l.flags |= 16384))), _v(e, t)) : Pc(e);
  }
  function Pc(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        _v(e, ta);
        return;
      }
      t = e.return;
      var o = kb(e.alternate, e, gr);
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
    dn === 0 && (dn = 5);
  }
  function _v(t, e) {
    do {
      var o = Bb(t.alternate, t);
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
    dn = 6, ge = null;
  }
  function bv(t, e, o, l, d, p, x, E, H) {
    t.cancelPendingCommit = null;
    do
      zc();
    while (In !== 0);
    if ((Be & 6) !== 0) throw Error(u(327));
    if (e !== null) {
      if (e === t.current) throw Error(u(177));
      if (p = e.lanes | e.childLanes, p |= Li, uo(t, o, p, x, E, H), t === We && (ge = We = null, Ce = 0), Ms = e, ia = t, As = o, oh = p, rh = d, cv = l, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Yb(Jt, function() {
        return wv(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
        l = B.T, B.T = null, d = tt.p, tt.p = 2, x = Be, Be |= 4;
        try {
          Db(t, e, o);
        } finally {
          Be = x, tt.p = d, B.T = l;
        }
      }
      In = 1, xv(), Sv(), Cv();
    }
  }
  function xv() {
    if (In === 1) {
      In = 0;
      var t = ia, e = Ms, o = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || o) {
        o = B.T, B.T = null;
        var l = tt.p;
        tt.p = 2;
        var d = Be;
        Be |= 4;
        try {
          iv(e, t);
          var p = xh, x = wa(t.containerInfo), E = p.focusedElem, H = p.selectionRange;
          if (x !== E && E && E.ownerDocument && ls(E.ownerDocument.documentElement, E)) {
            if (H !== null && Ea(E)) {
              var Q = H.start, vt = H.end;
              if (vt === void 0 && (vt = Q), "selectionStart" in E) E.selectionStart = Q, E.selectionEnd = Math.min(vt, E.value.length);
              else {
                var xt = E.ownerDocument || document, nt = xt && xt.defaultView || window;
                if (nt.getSelection) {
                  var at = nt.getSelection(), Xt = E.textContent.length, Zt = Math.min(H.start, Xt), je = H.end === void 0 ? Zt : Math.min(H.end, Xt);
                  !at.extend && Zt > je && (x = je, je = Zt, Zt = x);
                  var G = yl(E, Zt), q = yl(E, je);
                  if (G && q && (at.rangeCount !== 1 || at.anchorNode !== G.node || at.anchorOffset !== G.offset || at.focusNode !== q.node || at.focusOffset !== q.offset)) {
                    var K = xt.createRange();
                    K.setStart(G.node, G.offset), at.removeAllRanges(), Zt > je ? (at.addRange(K), at.extend(q.node, q.offset)) : (K.setEnd(q.node, q.offset), at.addRange(K));
                  }
                }
              }
            }
            for (xt = [], at = E; at = at.parentNode; ) at.nodeType === 1 && xt.push({ element: at, left: at.scrollLeft, top: at.scrollTop });
            for (typeof E.focus == "function" && E.focus(), E = 0; E < xt.length; E++) {
              var yt = xt[E];
              yt.element.scrollLeft = yt.left, yt.element.scrollTop = yt.top;
            }
          }
          Vc = !!bh, xh = bh = null;
        } finally {
          Be = d, tt.p = l, B.T = o;
        }
      }
      t.current = e, In = 2;
    }
  }
  function Sv() {
    if (In === 2) {
      In = 0;
      var t = ia, e = Ms, o = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || o) {
        o = B.T, B.T = null;
        var l = tt.p;
        tt.p = 2;
        var d = Be;
        Be |= 4;
        try {
          Jg(t, e.alternate, e);
        } finally {
          Be = d, tt.p = l, B.T = o;
        }
      }
      In = 3;
    }
  }
  function Cv() {
    if (In === 4 || In === 3) {
      In = 0, ie();
      var t = ia, e = Ms, o = As, l = cv;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? In = 5 : (In = 0, Ms = ia = null, Tv(t, t.pendingLanes));
      var d = t.pendingLanes;
      if (d === 0 && (na = null), Yo(o), e = e.stateNode, Vt && typeof Vt.onCommitFiberRoot == "function") try {
        Vt.onCommitFiberRoot(ce, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
      if (l !== null) {
        e = B.T, d = tt.p, tt.p = 2, B.T = null;
        try {
          for (var p = t.onRecoverableError, x = 0; x < l.length; x++) {
            var E = l[x];
            p(E.value, { componentStack: E.stack });
          }
        } finally {
          B.T = e, tt.p = d;
        }
      }
      (As & 3) !== 0 && zc(), Do(t), d = t.pendingLanes, (o & 4194090) !== 0 && (d & 42) !== 0 ? t === ah ? Ul++ : (Ul = 0, ah = t) : Ul = 0, Zl(0);
    }
  }
  function Tv(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Sl(e)));
  }
  function zc(t) {
    return xv(), Sv(), Cv(), wv();
  }
  function wv() {
    if (In !== 5) return false;
    var t = ia, e = oh;
    oh = 0;
    var o = Yo(As), l = B.T, d = tt.p;
    try {
      tt.p = 32 > o ? 32 : o, B.T = null, o = rh, rh = null;
      var p = ia, x = As;
      if (In = 0, Ms = ia = null, As = 0, (Be & 6) !== 0) throw Error(u(331));
      var E = Be;
      if (Be |= 4, lv(p.current), rv(p, p.current, x, o), Be = E, Zl(0, false), Vt && typeof Vt.onPostCommitFiberRoot == "function") try {
        Vt.onPostCommitFiberRoot(ce, p);
      } catch {
      }
      return true;
    } finally {
      tt.p = d, B.T = l, Tv(t, e);
    }
  }
  function Ev(t, e, o) {
    e = ri(o, e), e = $d(t.stateNode, e, 2), t = Yr(t, e, 2), t !== null && (Tn(t, 2), Do(t));
  }
  function Ze(t, e, o) {
    if (t.tag === 3) Ev(t, t, o);
    else for (; e !== null; ) {
      if (e.tag === 3) {
        Ev(e, t, o);
        break;
      } else if (e.tag === 1) {
        var l = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (na === null || !na.has(l))) {
          t = ri(o, t), o = Rg(2), l = Yr(e, o, 2), l !== null && (Lg(o, l, e, t), Tn(l, 2), Do(l));
          break;
        }
      }
      e = e.return;
    }
  }
  function ch(t, e, o) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new Ib();
      var d = /* @__PURE__ */ new Set();
      l.set(e, d);
    } else d = l.get(e), d === void 0 && (d = /* @__PURE__ */ new Set(), l.set(e, d));
    d.has(o) || (th = true, d.add(o), t = qb.bind(null, t, e, o), e.then(t, t));
  }
  function qb(t, e, o) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & o, t.warmLanes &= ~o, We === t && (Ce & o) === o && (dn === 4 || dn === 3 && (Ce & 62914560) === Ce && 300 > ue() - ih ? (Be & 2) === 0 && Rs(t, 0) : eh |= o, Os === Ce && (Os = 0)), Do(t);
  }
  function Ov(t, e) {
    e === 0 && (e = lo()), t = jr(t, e), t !== null && (Tn(t, e), Do(t));
  }
  function Vb(t) {
    var e = t.memoizedState, o = 0;
    e !== null && (o = e.retryLane), Ov(t, o);
  }
  function Gb(t, e) {
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
    l !== null && l.delete(e), Ov(t, o);
  }
  function Yb(t, e) {
    return te(t, e);
  }
  var kc = null, Ps = null, fh = false, Bc = false, dh = false, ja = 0;
  function Do(t) {
    t !== Ps && t.next === null && (Ps === null ? kc = Ps = t : Ps = Ps.next = t), Bc = true, fh || (fh = true, Xb());
  }
  function Zl(t, e) {
    if (!dh && Bc) {
      dh = true;
      do
        for (var o = false, l = kc; l !== null; ) {
          if (t !== 0) {
            var d = l.pendingLanes;
            if (d === 0) var p = 0;
            else {
              var x = l.suspendedLanes, E = l.pingedLanes;
              p = (1 << 31 - he(42 | t) + 1) - 1, p &= d & ~(x & ~E), p = p & 201326741 ? p & 201326741 | 1 : p ? p | 2 : 0;
            }
            p !== 0 && (o = true, Lv(l, p));
          } else p = Ce, p = ne(l, l === We ? p : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (p & 3) === 0 || re(l, p) || (o = true, Lv(l, p));
          l = l.next;
        }
      while (o);
      dh = false;
    }
  }
  function Fb() {
    Mv();
  }
  function Mv() {
    Bc = fh = false;
    var t = 0;
    ja !== 0 && (i1() && (t = ja), ja = 0);
    for (var e = ue(), o = null, l = kc; l !== null; ) {
      var d = l.next, p = Av(l, e);
      p === 0 ? (l.next = null, o === null ? kc = d : o.next = d, d === null && (Ps = o)) : (o = l, (t !== 0 || (p & 3) !== 0) && (Bc = true)), l = d;
    }
    Zl(t);
  }
  function Av(t, e) {
    for (var o = t.suspendedLanes, l = t.pingedLanes, d = t.expirationTimes, p = t.pendingLanes & -62914561; 0 < p; ) {
      var x = 31 - he(p), E = 1 << x, H = d[x];
      H === -1 ? ((E & o) === 0 || (E & l) !== 0) && (d[x] = Kn(E, e)) : H <= e && (t.expiredLanes |= E), p &= ~E;
    }
    if (e = We, o = Ce, o = ne(t, t === e ? o : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l = t.callbackNode, o === 0 || t === e && (De === 2 || De === 9) || t.cancelPendingCommit !== null) return l !== null && l !== null && qt(l), t.callbackNode = null, t.callbackPriority = 0;
    if ((o & 3) === 0 || re(t, o)) {
      if (e = o & -o, e === t.callbackPriority) return e;
      switch (l !== null && qt(l), Yo(o)) {
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
      return l = Rv.bind(null, t), o = te(o, l), t.callbackPriority = e, t.callbackNode = o, e;
    }
    return l !== null && l !== null && qt(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Rv(t, e) {
    if (In !== 0 && In !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var o = t.callbackNode;
    if (zc() && t.callbackNode !== o) return null;
    var l = Ce;
    return l = ne(t, t === We ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l === 0 ? null : (dv(t, l, e), Av(t, ue()), t.callbackNode != null && t.callbackNode === o ? Rv.bind(null, t) : null);
  }
  function Lv(t, e) {
    if (zc()) return null;
    dv(t, e, true);
  }
  function Xb() {
    r1(function() {
      (Be & 6) !== 0 ? te(_e, Fb) : Mv();
    });
  }
  function hh() {
    return ja === 0 && (ja = so()), ja;
  }
  function Pv(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Mr("" + t);
  }
  function zv(t, e) {
    var o = e.ownerDocument.createElement("input");
    return o.name = e.name, o.value = e.value, t.id && o.setAttribute("form", t.id), e.parentNode.insertBefore(o, e), t = new FormData(t), o.parentNode.removeChild(o), t;
  }
  function Kb(t, e, o, l, d) {
    if (e === "submit" && o && o.stateNode === d) {
      var p = Pv((d[an] || null).action), x = l.submitter;
      x && (e = (e = x[an] || null) ? Pv(e.formAction) : x.getAttribute("formAction"), e !== null && (p = e, x = null));
      var E = new ba("action", "action", null, l, d);
      t.push({ event: E, listeners: [{ instance: null, listener: function() {
        if (l.defaultPrevented) {
          if (ja !== 0) {
            var H = x ? zv(d, x) : new FormData(d);
            zd(o, { pending: true, data: H, method: d.method, action: p }, null, H);
          }
        } else typeof p == "function" && (E.preventDefault(), H = x ? zv(d, x) : new FormData(d), zd(o, { pending: true, data: H, method: d.method, action: p }, p, H));
      }, currentTarget: d }] });
    }
  }
  for (var ph = 0; ph < rr.length; ph++) {
    var mh = rr[ph], Wb = mh.toLowerCase(), Qb = mh[0].toUpperCase() + mh.slice(1);
    Ri(Wb, "on" + Qb);
  }
  Ri(Ju, "onAnimationEnd"), Ri(Ai, "onAnimationIteration"), Ri(Oa, "onAnimationStart"), Ri("dblclick", "onDoubleClick"), Ri("focusin", "onFocus"), Ri("focusout", "onBlur"), Ri(ld, "onTransitionRun"), Ri(ds, "onTransitionStart"), Ri(ud, "onTransitionCancel"), Ri(_l, "onTransitionEnd"), It("onMouseEnter", ["mouseout", "mouseover"]), It("onMouseLeave", ["mouseout", "mouseover"]), It("onPointerEnter", ["pointerout", "pointerover"]), It("onPointerLeave", ["pointerout", "pointerover"]), wt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), wt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), wt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), wt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), wt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ql = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jb = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));
  function kv(t, e) {
    e = (e & 4) !== 0;
    for (var o = 0; o < t.length; o++) {
      var l = t[o], d = l.event;
      l = l.listeners;
      t: {
        var p = void 0;
        if (e) for (var x = l.length - 1; 0 <= x; x--) {
          var E = l[x], H = E.instance, Q = E.currentTarget;
          if (E = E.listener, H !== p && d.isPropagationStopped()) break t;
          p = E, d.currentTarget = Q;
          try {
            p(d);
          } catch (vt) {
            Sc(vt);
          }
          d.currentTarget = null, p = H;
        }
        else for (x = 0; x < l.length; x++) {
          if (E = l[x], H = E.instance, Q = E.currentTarget, E = E.listener, H !== p && d.isPropagationStopped()) break t;
          p = E, d.currentTarget = Q;
          try {
            p(d);
          } catch (vt) {
            Sc(vt);
          }
          d.currentTarget = null, p = H;
        }
      }
    }
  }
  function ve(t, e) {
    var o = e[wn];
    o === void 0 && (o = e[wn] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    o.has(l) || (Bv(e, t, 2, false), o.add(l));
  }
  function gh(t, e, o) {
    var l = 0;
    e && (l |= 4), Bv(o, t, l, e);
  }
  var Dc = "_reactListening" + Math.random().toString(36).slice(2);
  function vh(t) {
    if (!t[Dc]) {
      t[Dc] = true, pt.forEach(function(o) {
        o !== "selectionchange" && (Jb.has(o) || gh(o, false, t), gh(o, true, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Dc] || (e[Dc] = true, gh("selectionchange", false, e));
    }
  }
  function Bv(t, e, o, l) {
    switch (ry(e)) {
      case 2:
        var d = E1;
        break;
      case 8:
        d = O1;
        break;
      default:
        d = Lh;
    }
    o = d.bind(null, e, o, t), d = void 0, !_a || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (d = true), l ? d !== void 0 ? t.addEventListener(e, o, { capture: true, passive: d }) : t.addEventListener(e, o, true) : d !== void 0 ? t.addEventListener(e, o, { passive: d }) : t.addEventListener(e, o, false);
  }
  function yh(t, e, o, l, d) {
    var p = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null) t: for (; ; ) {
      if (l === null) return;
      var x = l.tag;
      if (x === 3 || x === 4) {
        var E = l.stateNode.containerInfo;
        if (E === d) break;
        if (x === 4) for (x = l.return; x !== null; ) {
          var H = x.tag;
          if ((H === 3 || H === 4) && x.stateNode.containerInfo === d) return;
          x = x.return;
        }
        for (; E !== null; ) {
          if (x = ke(E), x === null) return;
          if (H = x.tag, H === 5 || H === 6 || H === 26 || H === 27) {
            l = p = x;
            continue t;
          }
          E = E.parentNode;
        }
      }
      l = l.return;
    }
    wi(function() {
      var Q = p, vt = Ar(o), xt = [];
      t: {
        var nt = tc.get(t);
        if (nt !== void 0) {
          var at = ba, Xt = t;
          switch (t) {
            case "keypress":
              if (fn(o) === 0) break t;
            case "keydown":
            case "keyup":
              at = td;
              break;
            case "focusin":
              Xt = "focus", at = ul;
              break;
            case "focusout":
              Xt = "blur", at = ul;
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
              at = Pr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              at = Xf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              at = nd;
              break;
            case Ju:
            case Ai:
            case Oa:
              at = Kf;
              break;
            case _l:
              at = id;
              break;
            case "scroll":
            case "scrollend":
              at = Ff;
              break;
            case "wheel":
              at = qu;
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
              at = er;
          }
          var Zt = (e & 4) !== 0, je = !Zt && (t === "scroll" || t === "scrollend"), G = Zt ? nt !== null ? nt + "Capture" : null : nt;
          Zt = [];
          for (var q = Q, K; q !== null; ) {
            var yt = q;
            if (K = yt.stateNode, yt = yt.tag, yt !== 5 && yt !== 26 && yt !== 27 || K === null || G === null || (yt = Te(q, G), yt != null && Zt.push(Vl(q, yt, K))), je) break;
            q = q.return;
          }
          0 < Zt.length && (nt = new at(nt, Xt, null, o, vt), xt.push({ event: nt, listeners: Zt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (nt = t === "mouseover" || t === "pointerover", at = t === "mouseout" || t === "pointerout", nt && o !== ya && (Xt = o.relatedTarget || o.fromElement) && (ke(Xt) || Xt[hi])) break t;
          if ((at || nt) && (nt = vt.window === vt ? vt : (nt = vt.ownerDocument) ? nt.defaultView || nt.parentWindow : window, at ? (Xt = o.relatedTarget || o.toElement, at = Q, Xt = Xt ? ke(Xt) : null, Xt !== null && (je = h(Xt), Zt = Xt.tag, Xt !== je || Zt !== 5 && Zt !== 27 && Zt !== 6) && (Xt = null)) : (at = null, Xt = Q), at !== Xt)) {
            if (Zt = Pr, yt = "onMouseLeave", G = "onMouseEnter", q = "mouse", (t === "pointerout" || t === "pointerover") && (Zt = dl, yt = "onPointerLeave", G = "onPointerEnter", q = "pointer"), je = at == null ? nt : Zn(at), K = Xt == null ? nt : Zn(Xt), nt = new Zt(yt, q + "leave", at, o, vt), nt.target = je, nt.relatedTarget = K, yt = null, ke(vt) === Q && (Zt = new Zt(G, q + "enter", Xt, o, vt), Zt.target = K, Zt.relatedTarget = je, yt = Zt), je = yt, at && Xt) e: {
              for (Zt = at, G = Xt, q = 0, K = Zt; K; K = zs(K)) q++;
              for (K = 0, yt = G; yt; yt = zs(yt)) K++;
              for (; 0 < q - K; ) Zt = zs(Zt), q--;
              for (; 0 < K - q; ) G = zs(G), K--;
              for (; q--; ) {
                if (Zt === G || G !== null && Zt === G.alternate) break e;
                Zt = zs(Zt), G = zs(G);
              }
              Zt = null;
            }
            else Zt = null;
            at !== null && Dv(xt, nt, at, Zt, false), Xt !== null && je !== null && Dv(xt, je, Xt, Zt, true);
          }
        }
        t: {
          if (nt = Q ? Zn(Q) : window, at = nt.nodeName && nt.nodeName.toLowerCase(), at === "select" || at === "input" && nt.type === "file") var zt = Br;
          else if (ir(nt)) if (ml) zt = sd;
          else {
            zt = ad;
            var me = vl;
          }
          else at = nt.nodeName, !at || at.toLowerCase() !== "input" || nt.type !== "checkbox" && nt.type !== "radio" ? Q && va(Q.elementType) && (zt = Br) : zt = po;
          if (zt && (zt = zt(t, Q))) {
            Xu(xt, zt, o, vt);
            break t;
          }
          me && me(t, nt, Q), t === "focusout" && Q && nt.type === "number" && Q.memoizedProps.value != null && Er(nt, "number", nt.value);
        }
        switch (me = Q ? Zn(Q) : window, t) {
          case "focusin":
            (ir(me) || me.contentEditable === "true") && (Mi = me, $r = Q, or = null);
            break;
          case "focusout":
            or = $r = Mi = null;
            break;
          case "mousedown":
            cs = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            cs = false, Wu(xt, o, vt);
            break;
          case "selectionchange":
            if (us) break;
          case "keydown":
          case "keyup":
            Wu(xt, o, vt);
        }
        var Ht;
        if (nr) t: {
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
        else zr ? as(t, o) && (Gt = "onCompositionEnd") : t === "keydown" && o.keyCode === 229 && (Gt = "onCompositionStart");
        Gt && (pl && o.locale !== "ko" && (zr || Gt !== "onCompositionStart" ? Gt === "onCompositionEnd" && zr && (Ht = Lr()) : (Gi = vt, fo = "value" in Gi ? Gi.value : Gi.textContent, zr = true)), me = Nc(Q, Gt), 0 < me.length && (Gt = new Ei(Gt, t, null, o, vt), xt.push({ event: Gt, listeners: me }), Ht ? Gt.data = Ht : (Ht = Yu(o), Ht !== null && (Gt.data = Ht)))), (Ht = Vu ? Fu(t, o) : rd(t, o)) && (Gt = Nc(Q, "onBeforeInput"), 0 < Gt.length && (me = new Ei("onBeforeInput", "beforeinput", null, o, vt), xt.push({ event: me, listeners: Gt }), me.data = Ht)), Kb(xt, t, Q, o, vt);
      }
      kv(xt, e);
    });
  }
  function Vl(t, e, o) {
    return { instance: t, listener: e, currentTarget: o };
  }
  function Nc(t, e) {
    for (var o = e + "Capture", l = []; t !== null; ) {
      var d = t, p = d.stateNode;
      if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || p === null || (d = Te(t, o), d != null && l.unshift(Vl(t, d, p)), d = Te(t, e), d != null && l.push(Vl(t, d, p))), t.tag === 3) return l;
      t = t.return;
    }
    return [];
  }
  function zs(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Dv(t, e, o, l, d) {
    for (var p = e._reactName, x = []; o !== null && o !== l; ) {
      var E = o, H = E.alternate, Q = E.stateNode;
      if (E = E.tag, H !== null && H === l) break;
      E !== 5 && E !== 26 && E !== 27 || Q === null || (H = Q, d ? (Q = Te(o, p), Q != null && x.unshift(Vl(o, Q, H))) : d || (Q = Te(o, p), Q != null && x.push(Vl(o, Q, H)))), o = o.return;
    }
    x.length !== 0 && t.push({ event: e, listeners: x });
  }
  var t1 = /\r\n?/g, e1 = /\u0000|\uFFFD/g;
  function Nv(t) {
    return (typeof t == "string" ? t : "" + t).replace(t1, `
`).replace(e1, "");
  }
  function $v(t, e) {
    return e = Nv(e), Nv(t) === e;
  }
  function $c() {
  }
  function He(t, e, o, l, d, p) {
    switch (o) {
      case "children":
        typeof l == "string" ? e === "body" || e === "textarea" && l === "" || qi(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && qi(t, "" + l);
        break;
      case "className":
        Xo(t, "class", l);
        break;
      case "tabIndex":
        Xo(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Xo(t, o, l);
        break;
      case "style":
        Or(t, l, p);
        break;
      case "data":
        if (e !== "object") {
          Xo(t, "data", l);
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
        l = Mr("" + l), t.setAttribute(o, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(o, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof p == "function" && (o === "formAction" ? (e !== "input" && He(t, e, "name", d.name, d, null), He(t, e, "formEncType", d.formEncType, d, null), He(t, e, "formMethod", d.formMethod, d, null), He(t, e, "formTarget", d.formTarget, d, null)) : (He(t, e, "encType", d.encType, d, null), He(t, e, "method", d.method, d, null), He(t, e, "target", d.target, d, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(o);
          break;
        }
        l = Mr("" + l), t.setAttribute(o, l);
        break;
      case "onClick":
        l != null && (t.onclick = $c);
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
        o = Mr("" + l), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o);
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
        ve("beforetoggle", t), ve("toggle", t), co(t, "popover", l);
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
        co(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") && (o = al.get(o) || o, co(t, o, l));
    }
  }
  function _h(t, e, o, l, d, p) {
    switch (o) {
      case "style":
        Or(t, l, p);
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
        typeof l == "string" ? qi(t, l) : (typeof l == "number" || typeof l == "bigint") && qi(t, "" + l);
        break;
      case "onScroll":
        l != null && ve("scroll", t);
        break;
      case "onScrollEnd":
        l != null && ve("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = $c);
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
          o in t ? t[o] = l : l === true ? t.setAttribute(o, "") : co(t, o, l);
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
              He(t, e, p, x, o, null);
          }
        }
        d && He(t, e, "srcSet", o.srcSet, o, null), l && He(t, e, "src", o.src, o, null);
        return;
      case "input":
        ve("invalid", t);
        var E = p = x = d = null, H = null, Q = null;
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
              E = vt;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (vt != null) throw Error(u(137, e));
              break;
            default:
              He(t, e, l, vt, o, null);
          }
        }
        Du(t, p, E, H, Q, x, d, false), wr(t);
        return;
      case "select":
        ve("invalid", t), l = x = p = null;
        for (d in o) if (o.hasOwnProperty(d) && (E = o[d], E != null)) switch (d) {
          case "value":
            p = E;
            break;
          case "defaultValue":
            x = E;
            break;
          case "multiple":
            l = E;
          default:
            He(t, e, d, E, o, null);
        }
        e = p, o = x, t.multiple = !!l, e != null ? gi(t, !!l, e, false) : o != null && gi(t, !!l, o, true);
        return;
      case "textarea":
        ve("invalid", t), p = d = l = null;
        for (x in o) if (o.hasOwnProperty(x) && (E = o[x], E != null)) switch (x) {
          case "value":
            l = E;
            break;
          case "defaultValue":
            d = E;
            break;
          case "children":
            p = E;
            break;
          case "dangerouslySetInnerHTML":
            if (E != null) throw Error(u(91));
            break;
          default:
            He(t, e, x, E, o, null);
        }
        Eo(t, l, d, p), wr(t);
        return;
      case "option":
        for (H in o) if (o.hasOwnProperty(H) && (l = o[H], l != null)) switch (H) {
          case "selected":
            t.selected = l && typeof l != "function" && typeof l != "symbol";
            break;
          default:
            He(t, e, H, l, o, null);
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
        for (l = 0; l < ql.length; l++) ve(ql[l], t);
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
            He(t, e, Q, l, o, null);
        }
        return;
      default:
        if (va(e)) {
          for (vt in o) o.hasOwnProperty(vt) && (l = o[vt], l !== void 0 && _h(t, e, vt, l, o, void 0));
          return;
        }
    }
    for (E in o) o.hasOwnProperty(E) && (l = o[E], l != null && He(t, e, E, l, o, null));
  }
  function n1(t, e, o, l) {
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
        var d = null, p = null, x = null, E = null, H = null, Q = null, vt = null;
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
              l.hasOwnProperty(at) || He(t, e, at, null, l, xt);
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
              E = at;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (at != null) throw Error(u(137, e));
              break;
            default:
              at !== xt && He(t, e, nt, at, l, xt);
          }
        }
        qn(t, x, E, H, Q, vt, p, d);
        return;
      case "select":
        at = x = E = nt = null;
        for (p in o) if (H = o[p], o.hasOwnProperty(p) && H != null) switch (p) {
          case "value":
            break;
          case "multiple":
            at = H;
          default:
            l.hasOwnProperty(p) || He(t, e, p, null, l, H);
        }
        for (d in l) if (p = l[d], H = o[d], l.hasOwnProperty(d) && (p != null || H != null)) switch (d) {
          case "value":
            nt = p;
            break;
          case "defaultValue":
            E = p;
            break;
          case "multiple":
            x = p;
          default:
            p !== H && He(t, e, d, p, l, H);
        }
        e = E, o = x, l = at, nt != null ? gi(t, !!o, nt, false) : !!l != !!o && (e != null ? gi(t, !!o, e, true) : gi(t, !!o, o ? [] : "", false));
        return;
      case "textarea":
        at = nt = null;
        for (E in o) if (d = o[E], o.hasOwnProperty(E) && d != null && !l.hasOwnProperty(E)) switch (E) {
          case "value":
            break;
          case "children":
            break;
          default:
            He(t, e, E, null, l, d);
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
            d !== p && He(t, e, x, d, l, p);
        }
        sn(t, nt, at);
        return;
      case "option":
        for (var Xt in o) if (nt = o[Xt], o.hasOwnProperty(Xt) && nt != null && !l.hasOwnProperty(Xt)) switch (Xt) {
          case "selected":
            t.selected = false;
            break;
          default:
            He(t, e, Xt, null, l, nt);
        }
        for (H in l) if (nt = l[H], at = o[H], l.hasOwnProperty(H) && nt !== at && (nt != null || at != null)) switch (H) {
          case "selected":
            t.selected = nt && typeof nt != "function" && typeof nt != "symbol";
            break;
          default:
            He(t, e, H, nt, l, at);
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
        for (var Zt in o) nt = o[Zt], o.hasOwnProperty(Zt) && nt != null && !l.hasOwnProperty(Zt) && He(t, e, Zt, null, l, nt);
        for (Q in l) if (nt = l[Q], at = o[Q], l.hasOwnProperty(Q) && nt !== at && (nt != null || at != null)) switch (Q) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (nt != null) throw Error(u(137, e));
            break;
          default:
            He(t, e, Q, nt, l, at);
        }
        return;
      default:
        if (va(e)) {
          for (var je in o) nt = o[je], o.hasOwnProperty(je) && nt !== void 0 && !l.hasOwnProperty(je) && _h(t, e, je, void 0, l, nt);
          for (vt in l) nt = l[vt], at = o[vt], !l.hasOwnProperty(vt) || nt === at || nt === void 0 && at === void 0 || _h(t, e, vt, nt, l, at);
          return;
        }
    }
    for (var G in o) nt = o[G], o.hasOwnProperty(G) && nt != null && !l.hasOwnProperty(G) && He(t, e, G, null, l, nt);
    for (xt in l) nt = l[xt], at = o[xt], !l.hasOwnProperty(xt) || nt === at || nt == null && at == null || He(t, e, xt, nt, l, at);
  }
  var bh = null, xh = null;
  function Ic(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Iv(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Hv(t, e) {
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
  function Sh(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Ch = null;
  function i1() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Ch ? false : (Ch = t, true) : (Ch = null, false);
  }
  var jv = typeof setTimeout == "function" ? setTimeout : void 0, o1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Uv = typeof Promise == "function" ? Promise : void 0, r1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Uv < "u" ? function(t) {
    return Uv.resolve(null).then(t).catch(a1);
  } : jv;
  function a1(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function ra(t) {
    return t === "head";
  }
  function Zv(t, e) {
    var o = e, l = 0, d = 0;
    do {
      var p = o.nextSibling;
      if (t.removeChild(o), p && p.nodeType === 8) if (o = p.data, o === "/$") {
        if (0 < l && 8 > l) {
          o = l;
          var x = t.ownerDocument;
          if (o & 1 && Gl(x.documentElement), o & 2 && Gl(x.body), o & 4) for (o = x.head, Gl(o), x = o.firstChild; x; ) {
            var E = x.nextSibling, H = x.nodeName;
            x[pi] || H === "SCRIPT" || H === "STYLE" || H === "LINK" && x.rel.toLowerCase() === "stylesheet" || o.removeChild(x), x = E;
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
  function Th(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var o = e;
      switch (e = e.nextSibling, o.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Th(o), Ve(o);
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
  function s1(t, e, o, l) {
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
      if (t = yo(t.nextSibling), t === null) break;
    }
    return null;
  }
  function l1(t, e, o) {
    if (e === "") return null;
    for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !o || (t = yo(t.nextSibling), t === null)) return null;
    return t;
  }
  function wh(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function u1(t, e) {
    var o = t.ownerDocument;
    if (t.data !== "$?" || o.readyState === "complete") e();
    else {
      var l = function() {
        e(), o.removeEventListener("DOMContentLoaded", l);
      };
      o.addEventListener("DOMContentLoaded", l), t._reactRetry = l;
    }
  }
  function yo(t) {
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
  var Eh = null;
  function qv(t) {
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
  function Vv(t, e, o) {
    switch (e = Ic(o), t) {
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
  var Ji = /* @__PURE__ */ new Map(), Gv = /* @__PURE__ */ new Set();
  function Hc(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var vr = tt.d;
  tt.d = { f: c1, r: f1, D: d1, C: h1, L: p1, m: m1, X: v1, S: g1, M: y1 };
  function c1() {
    var t = vr.f(), e = Lc();
    return t || e;
  }
  function f1(t) {
    var e = En(t);
    e !== null && e.tag === 5 && e.type === "form" ? dg(e) : vr.r(t);
  }
  var ks = typeof document > "u" ? null : document;
  function Yv(t, e, o) {
    var l = ks;
    if (l && typeof e == "string" && e) {
      var d = Dn(e);
      d = 'link[rel="' + t + '"][href="' + d + '"]', typeof o == "string" && (d += '[crossorigin="' + o + '"]'), Gv.has(d) || (Gv.add(d), t = { rel: t, crossOrigin: o, href: e }, l.querySelector(d) === null && (e = l.createElement("link"), Hn(e, "link", t), Je(e), l.head.appendChild(e)));
    }
  }
  function d1(t) {
    vr.D(t), Yv("dns-prefetch", t, null);
  }
  function h1(t, e) {
    vr.C(t, e), Yv("preconnect", t, e);
  }
  function p1(t, e, o) {
    vr.L(t, e, o);
    var l = ks;
    if (l && t && e) {
      var d = 'link[rel="preload"][as="' + Dn(e) + '"]';
      e === "image" && o && o.imageSrcSet ? (d += '[imagesrcset="' + Dn(o.imageSrcSet) + '"]', typeof o.imageSizes == "string" && (d += '[imagesizes="' + Dn(o.imageSizes) + '"]')) : d += '[href="' + Dn(t) + '"]';
      var p = d;
      switch (e) {
        case "style":
          p = Bs(t);
          break;
        case "script":
          p = Ds(t);
      }
      Ji.has(p) || (t = S({ rel: "preload", href: e === "image" && o && o.imageSrcSet ? void 0 : t, as: e }, o), Ji.set(p, t), l.querySelector(d) !== null || e === "style" && l.querySelector(Yl(p)) || e === "script" && l.querySelector(Fl(p)) || (e = l.createElement("link"), Hn(e, "link", t), Je(e), l.head.appendChild(e)));
    }
  }
  function m1(t, e) {
    vr.m(t, e);
    var o = ks;
    if (o && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", d = 'link[rel="modulepreload"][as="' + Dn(l) + '"][href="' + Dn(t) + '"]', p = d;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          p = Ds(t);
      }
      if (!Ji.has(p) && (t = S({ rel: "modulepreload", href: t }, e), Ji.set(p, t), o.querySelector(d) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (o.querySelector(Fl(p))) return;
        }
        l = o.createElement("link"), Hn(l, "link", t), Je(l), o.head.appendChild(l);
      }
    }
  }
  function g1(t, e, o) {
    vr.S(t, e, o);
    var l = ks;
    if (l && t) {
      var d = Qn(l).hoistableStyles, p = Bs(t);
      e = e || "default";
      var x = d.get(p);
      if (!x) {
        var E = { loading: 0, preload: null };
        if (x = l.querySelector(Yl(p))) E.loading = 5;
        else {
          t = S({ rel: "stylesheet", href: t, "data-precedence": e }, o), (o = Ji.get(p)) && Oh(t, o);
          var H = x = l.createElement("link");
          Je(H), Hn(H, "link", t), H._p = new Promise(function(Q, vt) {
            H.onload = Q, H.onerror = vt;
          }), H.addEventListener("load", function() {
            E.loading |= 1;
          }), H.addEventListener("error", function() {
            E.loading |= 2;
          }), E.loading |= 4, jc(x, e, l);
        }
        x = { type: "stylesheet", instance: x, count: 1, state: E }, d.set(p, x);
      }
    }
  }
  function v1(t, e) {
    vr.X(t, e);
    var o = ks;
    if (o && t) {
      var l = Qn(o).hoistableScripts, d = Ds(t), p = l.get(d);
      p || (p = o.querySelector(Fl(d)), p || (t = S({ src: t, async: true }, e), (e = Ji.get(d)) && Mh(t, e), p = o.createElement("script"), Je(p), Hn(p, "link", t), o.head.appendChild(p)), p = { type: "script", instance: p, count: 1, state: null }, l.set(d, p));
    }
  }
  function y1(t, e) {
    vr.M(t, e);
    var o = ks;
    if (o && t) {
      var l = Qn(o).hoistableScripts, d = Ds(t), p = l.get(d);
      p || (p = o.querySelector(Fl(d)), p || (t = S({ src: t, async: true, type: "module" }, e), (e = Ji.get(d)) && Mh(t, e), p = o.createElement("script"), Je(p), Hn(p, "link", t), o.head.appendChild(p)), p = { type: "script", instance: p, count: 1, state: null }, l.set(d, p));
    }
  }
  function Fv(t, e, o, l) {
    var d = (d = ct.current) ? Hc(d) : null;
    if (!d) throw Error(u(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof o.precedence == "string" && typeof o.href == "string" ? (e = Bs(o.href), o = Qn(d).hoistableStyles, l = o.get(e), l || (l = { type: "style", instance: null, count: 0, state: null }, o.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (o.rel === "stylesheet" && typeof o.href == "string" && typeof o.precedence == "string") {
          t = Bs(o.href);
          var p = Qn(d).hoistableStyles, x = p.get(t);
          if (x || (d = d.ownerDocument || d, x = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, p.set(t, x), (p = d.querySelector(Yl(t))) && !p._p && (x.instance = p, x.state.loading = 5), Ji.has(t) || (o = { rel: "preload", as: "style", href: o.href, crossOrigin: o.crossOrigin, integrity: o.integrity, media: o.media, hrefLang: o.hrefLang, referrerPolicy: o.referrerPolicy }, Ji.set(t, o), p || _1(d, t, o, x.state))), e && l === null) throw Error(u(528, ""));
          return x;
        }
        if (e && l !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return e = o.async, o = o.src, typeof o == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Ds(o), o = Qn(d).hoistableScripts, l = o.get(e), l || (l = { type: "script", instance: null, count: 0, state: null }, o.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, t));
    }
  }
  function Bs(t) {
    return 'href="' + Dn(t) + '"';
  }
  function Yl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Xv(t) {
    return S({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function _1(t, e, o, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    }), Hn(e, "link", o), Je(e), t.head.appendChild(e));
  }
  function Ds(t) {
    return '[src="' + Dn(t) + '"]';
  }
  function Fl(t) {
    return "script[async]" + t;
  }
  function Kv(t, e, o) {
    if (e.count++, e.instance === null) switch (e.type) {
      case "style":
        var l = t.querySelector('style[data-href~="' + Dn(o.href) + '"]');
        if (l) return e.instance = l, Je(l), l;
        var d = S({}, o, { "data-href": o.href, "data-precedence": o.precedence, href: null, precedence: null });
        return l = (t.ownerDocument || t).createElement("style"), Je(l), Hn(l, "style", d), jc(l, o.precedence, t), e.instance = l;
      case "stylesheet":
        d = Bs(o.href);
        var p = t.querySelector(Yl(d));
        if (p) return e.state.loading |= 4, e.instance = p, Je(p), p;
        l = Xv(o), (d = Ji.get(d)) && Oh(l, d), p = (t.ownerDocument || t).createElement("link"), Je(p);
        var x = p;
        return x._p = new Promise(function(E, H) {
          x.onload = E, x.onerror = H;
        }), Hn(p, "link", l), e.state.loading |= 4, jc(p, o.precedence, t), e.instance = p;
      case "script":
        return p = Ds(o.src), (d = t.querySelector(Fl(p))) ? (e.instance = d, Je(d), d) : (l = o, (d = Ji.get(p)) && (l = S({}, o), Mh(l, d)), t = t.ownerDocument || t, d = t.createElement("script"), Je(d), Hn(d, "link", l), t.head.appendChild(d), e.instance = d);
      case "void":
        return null;
      default:
        throw Error(u(443, e.type));
    }
    else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance, e.state.loading |= 4, jc(l, o.precedence, t));
    return e.instance;
  }
  function jc(t, e, o) {
    for (var l = o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), d = l.length ? l[l.length - 1] : null, p = d, x = 0; x < l.length; x++) {
      var E = l[x];
      if (E.dataset.precedence === e) p = E;
      else if (p !== d) break;
    }
    p ? p.parentNode.insertBefore(t, p.nextSibling) : (e = o.nodeType === 9 ? o.head : o, e.insertBefore(t, e.firstChild));
  }
  function Oh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Mh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Uc = null;
  function Wv(t, e, o) {
    if (Uc === null) {
      var l = /* @__PURE__ */ new Map(), d = Uc = /* @__PURE__ */ new Map();
      d.set(o, l);
    } else d = Uc, l = d.get(o), l || (l = /* @__PURE__ */ new Map(), d.set(o, l));
    if (l.has(t)) return l;
    for (l.set(t, null), o = o.getElementsByTagName(t), d = 0; d < o.length; d++) {
      var p = o[d];
      if (!(p[pi] || p[Qe] || t === "link" && p.getAttribute("rel") === "stylesheet") && p.namespaceURI !== "http://www.w3.org/2000/svg") {
        var x = p.getAttribute(e) || "";
        x = t + x;
        var E = l.get(x);
        E ? E.push(p) : l.set(x, [p]);
      }
    }
    return l;
  }
  function Qv(t, e, o) {
    t = t.ownerDocument || t, t.head.insertBefore(o, e === "title" ? t.querySelector("head > title") : null);
  }
  function b1(t, e, o) {
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
  function Jv(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Xl = null;
  function x1() {
  }
  function S1(t, e, o) {
    if (Xl === null) throw Error(u(475));
    var l = Xl;
    if (e.type === "stylesheet" && (typeof o.media != "string" || matchMedia(o.media).matches !== false) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var d = Bs(o.href), p = t.querySelector(Yl(d));
        if (p) {
          t = p._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Zc.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = p, Je(p);
          return;
        }
        p = t.ownerDocument || t, o = Xv(o), (d = Ji.get(d)) && Oh(o, d), p = p.createElement("link"), Je(p);
        var x = p;
        x._p = new Promise(function(E, H) {
          x.onload = E, x.onerror = H;
        }), Hn(p, "link", o), e.instance = p;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = Zc.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  function C1() {
    if (Xl === null) throw Error(u(475));
    var t = Xl;
    return t.stylesheets && t.count === 0 && Ah(t, t.stylesheets), 0 < t.count ? function(e) {
      var o = setTimeout(function() {
        if (t.stylesheets && Ah(t, t.stylesheets), t.unsuspend) {
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
      if (this.stylesheets) Ah(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var qc = null;
  function Ah(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, qc = /* @__PURE__ */ new Map(), e.forEach(T1, t), qc = null, Zc.call(t));
  }
  function T1(t, e) {
    if (!(e.state.loading & 4)) {
      var o = qc.get(t);
      if (o) var l = o.get(null);
      else {
        o = /* @__PURE__ */ new Map(), qc.set(t, o);
        for (var d = t.querySelectorAll("link[data-precedence],style[data-precedence]"), p = 0; p < d.length; p++) {
          var x = d[p];
          (x.nodeName === "LINK" || x.getAttribute("media") !== "not all") && (o.set(x.dataset.precedence, x), l = x);
        }
        l && o.set(null, l);
      }
      d = e.instance, x = d.getAttribute("data-precedence"), p = o.get(x) || l, p === l && o.set(null, d), o.set(x, d), this.count++, l = Zc.bind(this), d.addEventListener("load", l), d.addEventListener("error", l), p ? p.parentNode.insertBefore(d, p.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(d, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Kl = { $$typeof: D, Provider: null, Consumer: null, _currentValue: rt, _currentValue2: rt, _threadCount: 0 };
  function w1(t, e, o, l, d, p, x, E) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Wn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wn(0), this.hiddenUpdates = Wn(null), this.identifierPrefix = l, this.onUncaughtError = d, this.onCaughtError = p, this.onRecoverableError = x, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = E, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ty(t, e, o, l, d, p, x, E, H, Q, vt, xt) {
    return t = new w1(t, e, o, x, E, H, Q, xt), e = 1, p === true && (e |= 24), p = si(3, null, null, e), t.current = p, p.stateNode = t, e = cd(), e.refCount++, t.pooledCache = e, e.refCount++, p.memoizedState = { element: l, isDehydrated: o, cache: e }, pd(p), t;
  }
  function ey(t) {
    return t ? (t = lr, t) : lr;
  }
  function ny(t, e, o, l, d, p) {
    d = ey(d), l.context === null ? l.context = d : l.pendingContext = d, l = Gr(e), l.payload = { element: o }, p = p === void 0 ? null : p, p !== null && (l.callback = p), o = Yr(t, l, e), o !== null && (Di(o, t, e), El(o, t, e));
  }
  function iy(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var o = t.retryLane;
      t.retryLane = o !== 0 && o < e ? o : e;
    }
  }
  function Rh(t, e) {
    iy(t, e), (t = t.alternate) && iy(t, e);
  }
  function oy(t) {
    if (t.tag === 13) {
      var e = jr(t, 67108864);
      e !== null && Di(e, t, 67108864), Rh(t, 67108864);
    }
  }
  var Vc = true;
  function E1(t, e, o, l) {
    var d = B.T;
    B.T = null;
    var p = tt.p;
    try {
      tt.p = 2, Lh(t, e, o, l);
    } finally {
      tt.p = p, B.T = d;
    }
  }
  function O1(t, e, o, l) {
    var d = B.T;
    B.T = null;
    var p = tt.p;
    try {
      tt.p = 8, Lh(t, e, o, l);
    } finally {
      tt.p = p, B.T = d;
    }
  }
  function Lh(t, e, o, l) {
    if (Vc) {
      var d = Ph(l);
      if (d === null) yh(t, e, l, Gc, o), ay(t, l);
      else if (A1(d, t, e, o, l)) l.stopPropagation();
      else if (ay(t, l), e & 4 && -1 < M1.indexOf(t)) {
        for (; d !== null; ) {
          var p = En(d);
          if (p !== null) switch (p.tag) {
            case 3:
              if (p = p.stateNode, p.current.memoizedState.isDehydrated) {
                var x = kt(p.pendingLanes);
                if (x !== 0) {
                  var E = p;
                  for (E.pendingLanes |= 2, E.entangledLanes |= 2; x; ) {
                    var H = 1 << 31 - he(x);
                    E.entanglements[1] |= H, x &= ~H;
                  }
                  Do(p), (Be & 6) === 0 && (Ac = ue() + 500, Zl(0));
                }
              }
              break;
            case 13:
              E = jr(p, 2), E !== null && Di(E, p, 2), Lc(), Rh(p, 2);
          }
          if (p = Ph(l), p === null && yh(t, e, l, Gc, o), p === d) break;
          d = p;
        }
        d !== null && l.stopPropagation();
      } else yh(t, e, l, null, o);
    }
  }
  function Ph(t) {
    return t = Ar(t), zh(t);
  }
  var Gc = null;
  function zh(t) {
    if (Gc = null, t = ke(t), t !== null) {
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
    return Gc = t, null;
  }
  function ry(t) {
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
        switch (Tt()) {
          case _e:
            return 2;
          case Bt:
            return 8;
          case Jt:
          case Ot:
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
  var kh = false, aa = null, sa = null, la = null, Wl = /* @__PURE__ */ new Map(), Ql = /* @__PURE__ */ new Map(), ua = [], M1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function ay(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        aa = null;
        break;
      case "dragenter":
      case "dragleave":
        sa = null;
        break;
      case "mouseover":
      case "mouseout":
        la = null;
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
    return t === null || t.nativeEvent !== p ? (t = { blockedOn: e, domEventName: o, eventSystemFlags: l, nativeEvent: p, targetContainers: [d] }, e !== null && (e = En(e), e !== null && oy(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, d !== null && e.indexOf(d) === -1 && e.push(d), t);
  }
  function A1(t, e, o, l, d) {
    switch (e) {
      case "focusin":
        return aa = Jl(aa, t, e, o, l, d), true;
      case "dragenter":
        return sa = Jl(sa, t, e, o, l, d), true;
      case "mouseover":
        return la = Jl(la, t, e, o, l, d), true;
      case "pointerover":
        var p = d.pointerId;
        return Wl.set(p, Jl(Wl.get(p) || null, t, e, o, l, d)), true;
      case "gotpointercapture":
        return p = d.pointerId, Ql.set(p, Jl(Ql.get(p) || null, t, e, o, l, d)), true;
    }
    return false;
  }
  function sy(t) {
    var e = ke(t.target);
    if (e !== null) {
      var o = h(e);
      if (o !== null) {
        if (e = o.tag, e === 13) {
          if (e = g(o), e !== null) {
            t.blockedOn = e, To(t.priority, function() {
              if (o.tag === 13) {
                var l = Bi();
                l = fi(l);
                var d = jr(o, l);
                d !== null && Di(d, o, l), Rh(o, l);
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
      var o = Ph(t.nativeEvent);
      if (o === null) {
        o = t.nativeEvent;
        var l = new o.constructor(o.type, o);
        ya = l, o.target.dispatchEvent(l), ya = null;
      } else return e = En(o), e !== null && oy(e), t.blockedOn = o, false;
      e.shift();
    }
    return true;
  }
  function ly(t, e, o) {
    Yc(t) && o.delete(e);
  }
  function R1() {
    kh = false, aa !== null && Yc(aa) && (aa = null), sa !== null && Yc(sa) && (sa = null), la !== null && Yc(la) && (la = null), Wl.forEach(ly), Ql.forEach(ly);
  }
  function Fc(t, e) {
    t.blockedOn === e && (t.blockedOn = null, kh || (kh = true, n3.unstable_scheduleCallback(n3.unstable_NormalPriority, R1)));
  }
  var Xc = null;
  function uy(t) {
    Xc !== t && (Xc = t, n3.unstable_scheduleCallback(n3.unstable_NormalPriority, function() {
      Xc === t && (Xc = null);
      for (var e = 0; e < t.length; e += 3) {
        var o = t[e], l = t[e + 1], d = t[e + 2];
        if (typeof l != "function") {
          if (zh(l || o) === null) continue;
          break;
        }
        var p = En(o);
        p !== null && (t.splice(e, 3), e -= 3, zd(p, { pending: true, data: d, method: o.method, action: l }, l, d));
      }
    }));
  }
  function tu(t) {
    function e(H) {
      return Fc(H, t);
    }
    aa !== null && Fc(aa, t), sa !== null && Fc(sa, t), la !== null && Fc(la, t), Wl.forEach(e), Ql.forEach(e);
    for (var o = 0; o < ua.length; o++) {
      var l = ua[o];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < ua.length && (o = ua[0], o.blockedOn === null); ) sy(o), o.blockedOn === null && ua.shift();
    if (o = (t.ownerDocument || t).$$reactFormReplay, o != null) for (l = 0; l < o.length; l += 3) {
      var d = o[l], p = o[l + 1], x = d[an] || null;
      if (typeof p == "function") x || uy(o);
      else if (x) {
        var E = null;
        if (p && p.hasAttribute("formAction")) {
          if (d = p, x = p[an] || null) E = x.formAction;
          else if (zh(d) !== null) continue;
        } else E = x.action;
        typeof E == "function" ? o[l + 1] = E : (o.splice(l, 3), l -= 3), uy(o);
      }
    }
  }
  function Bh(t) {
    this._internalRoot = t;
  }
  Kc.prototype.render = Bh.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(u(409));
    var o = e.current, l = Bi();
    ny(o, l, t, e, null, null);
  }, Kc.prototype.unmount = Bh.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      ny(t.current, 2, null, t, null, null), Lc(), e[hi] = null;
    }
  };
  function Kc(t) {
    this._internalRoot = t;
  }
  Kc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Zi();
      t = { blockedOn: null, target: t, priority: e };
      for (var o = 0; o < ua.length && e !== 0 && e < ua[o].priority; o++) ;
      ua.splice(o, 0, t), o === 0 && sy(t);
    }
  };
  var cy = r.version;
  if (cy !== "19.1.0") throw Error(u(527, cy, "19.1.0"));
  tt.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(u(188)) : (t = Object.keys(t).join(","), Error(u(268, t)));
    return t = y(e), t = t !== null ? b(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var L1 = { bundleType: 0, version: "19.1.0", rendererPackageName: "react-dom", currentDispatcherRef: B, reconcilerVersion: "19.1.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wc.isDisabled && Wc.supportsFiber) try {
      ce = Wc.inject(L1), Vt = Wc;
    } catch {
    }
  }
  return nu.createRoot = function(t, e) {
    if (!f(t)) throw Error(u(299));
    var o = false, l = "", d = Eg, p = Og, x = Mg, E = null;
    return e != null && (e.unstable_strictMode === true && (o = true), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (d = e.onUncaughtError), e.onCaughtError !== void 0 && (p = e.onCaughtError), e.onRecoverableError !== void 0 && (x = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (E = e.unstable_transitionCallbacks)), e = ty(t, 1, false, null, null, o, l, d, p, x, E, null), t[hi] = e.current, vh(t), new Bh(e);
  }, nu.hydrateRoot = function(t, e, o) {
    if (!f(t)) throw Error(u(299));
    var l = false, d = "", p = Eg, x = Og, E = Mg, H = null, Q = null;
    return o != null && (o.unstable_strictMode === true && (l = true), o.identifierPrefix !== void 0 && (d = o.identifierPrefix), o.onUncaughtError !== void 0 && (p = o.onUncaughtError), o.onCaughtError !== void 0 && (x = o.onCaughtError), o.onRecoverableError !== void 0 && (E = o.onRecoverableError), o.unstable_transitionCallbacks !== void 0 && (H = o.unstable_transitionCallbacks), o.formState !== void 0 && (Q = o.formState)), e = ty(t, 1, true, e, o ?? null, l, d, p, x, E, H, Q), e.context = ey(null), o = e.current, l = Bi(), l = fi(l), d = Gr(l), d.callback = null, Yr(o, d, l), o = l, e.current.lanes = o, Tn(e, o), Do(e), t[hi] = e.current, vh(t), new Kc(e);
  }, nu.version = "19.1.0", nu;
}
var by;
function j1() {
  if (by) return Nh.exports;
  by = 1;
  function n3() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n3);
    } catch (r) {
      console.error(r);
    }
  }
  return n3(), Nh.exports = H1(), Nh.exports;
}
var U1 = j1();
const Z1 = Lp(U1);
function br(n3, ...r) {
  const a = new URL(`https://mui.com/production-error/?code=${n3}`);
  return r.forEach((u) => a.searchParams.append("args[]", u)), `Minified MUI error #${n3}; visit ${a} for the full message.`;
}
const Uo = "$$material";
function hf() {
  return hf = Object.assign ? Object.assign.bind() : function(n3) {
    for (var r = 1; r < arguments.length; r++) {
      var a = arguments[r];
      for (var u in a) ({}).hasOwnProperty.call(a, u) && (n3[u] = a[u]);
    }
    return n3;
  }, hf.apply(null, arguments);
}
var O = Pp();
const Xn = Lp(O), op = z1({ __proto__: null, default: Xn }, [O]);
function q1(n3) {
  if (n3.sheet) return n3.sheet;
  for (var r = 0; r < document.styleSheets.length; r++) if (document.styleSheets[r].ownerNode === n3) return document.styleSheets[r];
}
function V1(n3) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", n3.key), n3.nonce !== void 0 && r.setAttribute("nonce", n3.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var G1 = function() {
  function n3(a) {
    var u = this;
    this._insertTag = function(f) {
      var h;
      u.tags.length === 0 ? u.insertionPoint ? h = u.insertionPoint.nextSibling : u.prepend ? h = u.container.firstChild : h = u.before : h = u.tags[u.tags.length - 1].nextSibling, u.container.insertBefore(f, h), u.tags.push(f);
    }, this.isSpeedy = a.speedy === void 0 ? true : a.speedy, this.tags = [], this.ctr = 0, this.nonce = a.nonce, this.key = a.key, this.container = a.container, this.prepend = a.prepend, this.insertionPoint = a.insertionPoint, this.before = null;
  }
  var r = n3.prototype;
  return r.hydrate = function(u) {
    u.forEach(this._insertTag);
  }, r.insert = function(u) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(V1(this));
    var f = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var h = q1(f);
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
  }, n3;
}(), Fn = "-ms-", pf = "-moz-", Oe = "-webkit-", F_ = "comm", zp = "rule", kp = "decl", Y1 = "@import", X_ = "@keyframes", F1 = "@layer", X1 = Math.abs, Tf = String.fromCharCode, K1 = Object.assign;
function W1(n3, r) {
  return jn(n3, 0) ^ 45 ? (((r << 2 ^ jn(n3, 0)) << 2 ^ jn(n3, 1)) << 2 ^ jn(n3, 2)) << 2 ^ jn(n3, 3) : 0;
}
function K_(n3) {
  return n3.trim();
}
function Q1(n3, r) {
  return (n3 = r.exec(n3)) ? n3[0] : n3;
}
function Me(n3, r, a) {
  return n3.replace(r, a);
}
function rp(n3, r) {
  return n3.indexOf(r);
}
function jn(n3, r) {
  return n3.charCodeAt(r) | 0;
}
function _u(n3, r, a) {
  return n3.slice(r, a);
}
function $o(n3) {
  return n3.length;
}
function Bp(n3) {
  return n3.length;
}
function Qc(n3, r) {
  return r.push(n3), n3;
}
function J1(n3, r) {
  return n3.map(r).join("");
}
var wf = 1, Gs = 1, W_ = 0, Ti = 0, xn = 0, tl = "";
function Ef(n3, r, a, u, f, h, g) {
  return { value: n3, root: r, parent: a, type: u, props: f, children: h, line: wf, column: Gs, length: g, return: "" };
}
function iu(n3, r) {
  return K1(Ef("", null, null, "", null, null, 0), n3, { length: -n3.length }, r);
}
function tx() {
  return xn;
}
function ex() {
  return xn = Ti > 0 ? jn(tl, --Ti) : 0, Gs--, xn === 10 && (Gs = 1, wf--), xn;
}
function Hi() {
  return xn = Ti < W_ ? jn(tl, Ti++) : 0, Gs++, xn === 10 && (Gs = 1, wf++), xn;
}
function Zo() {
  return jn(tl, Ti);
}
function sf() {
  return Ti;
}
function Ou(n3, r) {
  return _u(tl, n3, r);
}
function bu(n3) {
  switch (n3) {
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
function Q_(n3) {
  return wf = Gs = 1, W_ = $o(tl = n3), Ti = 0, [];
}
function J_(n3) {
  return tl = "", n3;
}
function lf(n3) {
  return K_(Ou(Ti - 1, ap(n3 === 91 ? n3 + 2 : n3 === 40 ? n3 + 1 : n3)));
}
function nx(n3) {
  for (; (xn = Zo()) && xn < 33; ) Hi();
  return bu(n3) > 2 || bu(xn) > 3 ? "" : " ";
}
function ix(n3, r) {
  for (; --r && Hi() && !(xn < 48 || xn > 102 || xn > 57 && xn < 65 || xn > 70 && xn < 97); ) ;
  return Ou(n3, sf() + (r < 6 && Zo() == 32 && Hi() == 32));
}
function ap(n3) {
  for (; Hi(); ) switch (xn) {
    case n3:
      return Ti;
    case 34:
    case 39:
      n3 !== 34 && n3 !== 39 && ap(xn);
      break;
    case 40:
      n3 === 41 && ap(n3);
      break;
    case 92:
      Hi();
      break;
  }
  return Ti;
}
function ox(n3, r) {
  for (; Hi() && n3 + xn !== 57; ) if (n3 + xn === 84 && Zo() === 47) break;
  return "/*" + Ou(r, Ti - 1) + "*" + Tf(n3 === 47 ? n3 : Hi());
}
function rx(n3) {
  for (; !bu(Zo()); ) Hi();
  return Ou(n3, Ti);
}
function ax(n3) {
  return J_(uf("", null, null, null, [""], n3 = Q_(n3), 0, [0], n3));
}
function uf(n3, r, a, u, f, h, g, v, y) {
  for (var b = 0, S = 0, w = g, A = 0, P = 0, R = 0, M = 1, $ = 1, U = 1, V = 0, D = "", N = f, k = h, j = u, X = D; $; ) switch (R = V, V = Hi()) {
    case 40:
      if (R != 108 && jn(X, w - 1) == 58) {
        rp(X += Me(lf(V), "&", "&\f"), "&\f") != -1 && (U = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      X += lf(V);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      X += nx(R);
      break;
    case 92:
      X += ix(sf() - 1, 7);
      continue;
    case 47:
      switch (Zo()) {
        case 42:
        case 47:
          Qc(sx(ox(Hi(), sf()), r, a), y);
          break;
        default:
          X += "/";
      }
      break;
    case 123 * M:
      v[b++] = $o(X) * U;
    case 125 * M:
    case 59:
    case 0:
      switch (V) {
        case 0:
        case 125:
          $ = 0;
        case 59 + S:
          U == -1 && (X = Me(X, /\f/g, "")), P > 0 && $o(X) - w && Qc(P > 32 ? Sy(X + ";", u, a, w - 1) : Sy(Me(X, " ", "") + ";", u, a, w - 2), y);
          break;
        case 59:
          X += ";";
        default:
          if (Qc(j = xy(X, r, a, b, S, f, v, D, N = [], k = [], w), h), V === 123) if (S === 0) uf(X, r, j, j, N, h, w, v, k);
          else switch (A === 99 && jn(X, 3) === 110 ? 100 : A) {
            case 100:
            case 108:
            case 109:
            case 115:
              uf(n3, j, j, u && Qc(xy(n3, j, j, 0, 0, f, v, D, f, N = [], w), k), f, k, w, v, u ? N : k);
              break;
            default:
              uf(X, j, j, j, [""], k, 0, v, k);
          }
      }
      b = S = P = 0, M = U = 1, D = X = "", w = g;
      break;
    case 58:
      w = 1 + $o(X), P = R;
    default:
      if (M < 1) {
        if (V == 123) --M;
        else if (V == 125 && M++ == 0 && ex() == 125) continue;
      }
      switch (X += Tf(V), V * M) {
        case 38:
          U = S > 0 ? 1 : (X += "\f", -1);
          break;
        case 44:
          v[b++] = ($o(X) - 1) * U, U = 1;
          break;
        case 64:
          Zo() === 45 && (X += lf(Hi())), A = Zo(), S = w = $o(D = X += rx(sf())), V++;
          break;
        case 45:
          R === 45 && $o(X) == 2 && (M = 0);
      }
  }
  return h;
}
function xy(n3, r, a, u, f, h, g, v, y, b, S) {
  for (var w = f - 1, A = f === 0 ? h : [""], P = Bp(A), R = 0, M = 0, $ = 0; R < u; ++R) for (var U = 0, V = _u(n3, w + 1, w = X1(M = g[R])), D = n3; U < P; ++U) (D = K_(M > 0 ? A[U] + " " + V : Me(V, /&\f/g, A[U]))) && (y[$++] = D);
  return Ef(n3, r, a, f === 0 ? zp : v, y, b, S);
}
function sx(n3, r, a) {
  return Ef(n3, r, a, F_, Tf(tx()), _u(n3, 2, -2), 0);
}
function Sy(n3, r, a, u) {
  return Ef(n3, r, a, kp, _u(n3, 0, u), _u(n3, u + 1, -1), u);
}
function qs(n3, r) {
  for (var a = "", u = Bp(n3), f = 0; f < u; f++) a += r(n3[f], f, n3, r) || "";
  return a;
}
function lx(n3, r, a, u) {
  switch (n3.type) {
    case F1:
      if (n3.children.length) break;
    case Y1:
    case kp:
      return n3.return = n3.return || n3.value;
    case F_:
      return "";
    case X_:
      return n3.return = n3.value + "{" + qs(n3.children, u) + "}";
    case zp:
      n3.value = n3.props.join(",");
  }
  return $o(a = qs(n3.children, u)) ? n3.return = n3.value + "{" + a + "}" : "";
}
function ux(n3) {
  var r = Bp(n3);
  return function(a, u, f, h) {
    for (var g = "", v = 0; v < r; v++) g += n3[v](a, u, f, h) || "";
    return g;
  };
}
function cx(n3) {
  return function(r) {
    r.root || (r = r.return) && n3(r);
  };
}
function t0(n3) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(a) {
    return r[a] === void 0 && (r[a] = n3(a)), r[a];
  };
}
var fx = function(r, a, u) {
  for (var f = 0, h = 0; f = h, h = Zo(), f === 38 && h === 12 && (a[u] = 1), !bu(h); ) Hi();
  return Ou(r, Ti);
}, dx = function(r, a) {
  var u = -1, f = 44;
  do
    switch (bu(f)) {
      case 0:
        f === 38 && Zo() === 12 && (a[u] = 1), r[u] += fx(Ti - 1, a, u);
        break;
      case 2:
        r[u] += lf(f);
        break;
      case 4:
        if (f === 44) {
          r[++u] = Zo() === 58 ? "&\f" : "", a[u] = r[u].length;
          break;
        }
      default:
        r[u] += Tf(f);
    }
  while (f = Hi());
  return r;
}, hx = function(r, a) {
  return J_(dx(Q_(r), a));
}, Cy = /* @__PURE__ */ new WeakMap(), px = function(r) {
  if (!(r.type !== "rule" || !r.parent || r.length < 1)) {
    for (var a = r.value, u = r.parent, f = r.column === u.column && r.line === u.line; u.type !== "rule"; ) if (u = u.parent, !u) return;
    if (!(r.props.length === 1 && a.charCodeAt(0) !== 58 && !Cy.get(u)) && !f) {
      Cy.set(r, true);
      for (var h = [], g = hx(a, h), v = u.props, y = 0, b = 0; y < g.length; y++) for (var S = 0; S < v.length; S++, b++) r.props[b] = h[y] ? g[y].replace(/&\f/g, v[S]) : v[S] + " " + g[y];
    }
  }
}, mx = function(r) {
  if (r.type === "decl") {
    var a = r.value;
    a.charCodeAt(0) === 108 && a.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function e0(n3, r) {
  switch (W1(n3, r)) {
    case 5103:
      return Oe + "print-" + n3 + n3;
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
      return Oe + n3 + n3;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Oe + n3 + pf + n3 + Fn + n3 + n3;
    case 6828:
    case 4268:
      return Oe + n3 + Fn + n3 + n3;
    case 6165:
      return Oe + n3 + Fn + "flex-" + n3 + n3;
    case 5187:
      return Oe + n3 + Me(n3, /(\w+).+(:[^]+)/, Oe + "box-$1$2" + Fn + "flex-$1$2") + n3;
    case 5443:
      return Oe + n3 + Fn + "flex-item-" + Me(n3, /flex-|-self/, "") + n3;
    case 4675:
      return Oe + n3 + Fn + "flex-line-pack" + Me(n3, /align-content|flex-|-self/, "") + n3;
    case 5548:
      return Oe + n3 + Fn + Me(n3, "shrink", "negative") + n3;
    case 5292:
      return Oe + n3 + Fn + Me(n3, "basis", "preferred-size") + n3;
    case 6060:
      return Oe + "box-" + Me(n3, "-grow", "") + Oe + n3 + Fn + Me(n3, "grow", "positive") + n3;
    case 4554:
      return Oe + Me(n3, /([^-])(transform)/g, "$1" + Oe + "$2") + n3;
    case 6187:
      return Me(Me(Me(n3, /(zoom-|grab)/, Oe + "$1"), /(image-set)/, Oe + "$1"), n3, "") + n3;
    case 5495:
    case 3959:
      return Me(n3, /(image-set\([^]*)/, Oe + "$1$`$1");
    case 4968:
      return Me(Me(n3, /(.+:)(flex-)?(.*)/, Oe + "box-pack:$3" + Fn + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Oe + n3 + n3;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Me(n3, /(.+)-inline(.+)/, Oe + "$1$2") + n3;
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
      if ($o(n3) - 1 - r > 6) switch (jn(n3, r + 1)) {
        case 109:
          if (jn(n3, r + 4) !== 45) break;
        case 102:
          return Me(n3, /(.+:)(.+)-([^]+)/, "$1" + Oe + "$2-$3$1" + pf + (jn(n3, r + 3) == 108 ? "$3" : "$2-$3")) + n3;
        case 115:
          return ~rp(n3, "stretch") ? e0(Me(n3, "stretch", "fill-available"), r) + n3 : n3;
      }
      break;
    case 4949:
      if (jn(n3, r + 1) !== 115) break;
    case 6444:
      switch (jn(n3, $o(n3) - 3 - (~rp(n3, "!important") && 10))) {
        case 107:
          return Me(n3, ":", ":" + Oe) + n3;
        case 101:
          return Me(n3, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Oe + (jn(n3, 14) === 45 ? "inline-" : "") + "box$3$1" + Oe + "$2$3$1" + Fn + "$2box$3") + n3;
      }
      break;
    case 5936:
      switch (jn(n3, r + 11)) {
        case 114:
          return Oe + n3 + Fn + Me(n3, /[svh]\w+-[tblr]{2}/, "tb") + n3;
        case 108:
          return Oe + n3 + Fn + Me(n3, /[svh]\w+-[tblr]{2}/, "tb-rl") + n3;
        case 45:
          return Oe + n3 + Fn + Me(n3, /[svh]\w+-[tblr]{2}/, "lr") + n3;
      }
      return Oe + n3 + Fn + n3 + n3;
  }
  return n3;
}
var gx = function(r, a, u, f) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case kp:
      r.return = e0(r.value, r.length);
      break;
    case X_:
      return qs([iu(r, { value: Me(r.value, "@", "@" + Oe) })], f);
    case zp:
      if (r.length) return J1(r.props, function(h) {
        switch (Q1(h, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return qs([iu(r, { props: [Me(h, /:(read-\w+)/, ":" + pf + "$1")] })], f);
          case "::placeholder":
            return qs([iu(r, { props: [Me(h, /:(plac\w+)/, ":" + Oe + "input-$1")] }), iu(r, { props: [Me(h, /:(plac\w+)/, ":" + pf + "$1")] }), iu(r, { props: [Me(h, /:(plac\w+)/, Fn + "input-$1")] })], f);
        }
        return "";
      });
  }
}, vx = [gx], yx = function(r) {
  var a = r.key;
  if (a === "css") {
    var u = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(u, function(M) {
      var $ = M.getAttribute("data-emotion");
      $.indexOf(" ") !== -1 && (document.head.appendChild(M), M.setAttribute("data-s", ""));
    });
  }
  var f = r.stylisPlugins || vx, h = {}, g, v = [];
  g = r.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + a + ' "]'), function(M) {
    for (var $ = M.getAttribute("data-emotion").split(" "), U = 1; U < $.length; U++) h[$[U]] = true;
    v.push(M);
  });
  var y, b = [px, mx];
  {
    var S, w = [lx, cx(function(M) {
      S.insert(M);
    })], A = ux(b.concat(f, w)), P = function($) {
      return qs(ax($), A);
    };
    y = function($, U, V, D) {
      S = V, P($ ? $ + "{" + U.styles + "}" : U.styles), D && (R.inserted[U.name] = true);
    };
  }
  var R = { key: a, sheet: new G1({ key: a, container: g, nonce: r.nonce, speedy: r.speedy, prepend: r.prepend, insertionPoint: r.insertionPoint }), nonce: r.nonce, inserted: h, registered: {}, insert: y };
  return R.sheet.hydrate(v), R;
}, Uh = { exports: {} }, Ae = {};
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ty;
function _x() {
  if (Ty) return Ae;
  Ty = 1;
  var n3 = typeof Symbol == "function" && Symbol.for, r = n3 ? Symbol.for("react.element") : 60103, a = n3 ? Symbol.for("react.portal") : 60106, u = n3 ? Symbol.for("react.fragment") : 60107, f = n3 ? Symbol.for("react.strict_mode") : 60108, h = n3 ? Symbol.for("react.profiler") : 60114, g = n3 ? Symbol.for("react.provider") : 60109, v = n3 ? Symbol.for("react.context") : 60110, y = n3 ? Symbol.for("react.async_mode") : 60111, b = n3 ? Symbol.for("react.concurrent_mode") : 60111, S = n3 ? Symbol.for("react.forward_ref") : 60112, w = n3 ? Symbol.for("react.suspense") : 60113, A = n3 ? Symbol.for("react.suspense_list") : 60120, P = n3 ? Symbol.for("react.memo") : 60115, R = n3 ? Symbol.for("react.lazy") : 60116, M = n3 ? Symbol.for("react.block") : 60121, $ = n3 ? Symbol.for("react.fundamental") : 60117, U = n3 ? Symbol.for("react.responder") : 60118, V = n3 ? Symbol.for("react.scope") : 60119;
  function D(k) {
    if (typeof k == "object" && k !== null) {
      var j = k.$$typeof;
      switch (j) {
        case r:
          switch (k = k.type, k) {
            case y:
            case b:
            case u:
            case h:
            case f:
            case w:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case v:
                case S:
                case R:
                case P:
                case g:
                  return k;
                default:
                  return j;
              }
          }
        case a:
          return j;
      }
    }
  }
  function N(k) {
    return D(k) === b;
  }
  return Ae.AsyncMode = y, Ae.ConcurrentMode = b, Ae.ContextConsumer = v, Ae.ContextProvider = g, Ae.Element = r, Ae.ForwardRef = S, Ae.Fragment = u, Ae.Lazy = R, Ae.Memo = P, Ae.Portal = a, Ae.Profiler = h, Ae.StrictMode = f, Ae.Suspense = w, Ae.isAsyncMode = function(k) {
    return N(k) || D(k) === y;
  }, Ae.isConcurrentMode = N, Ae.isContextConsumer = function(k) {
    return D(k) === v;
  }, Ae.isContextProvider = function(k) {
    return D(k) === g;
  }, Ae.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === r;
  }, Ae.isForwardRef = function(k) {
    return D(k) === S;
  }, Ae.isFragment = function(k) {
    return D(k) === u;
  }, Ae.isLazy = function(k) {
    return D(k) === R;
  }, Ae.isMemo = function(k) {
    return D(k) === P;
  }, Ae.isPortal = function(k) {
    return D(k) === a;
  }, Ae.isProfiler = function(k) {
    return D(k) === h;
  }, Ae.isStrictMode = function(k) {
    return D(k) === f;
  }, Ae.isSuspense = function(k) {
    return D(k) === w;
  }, Ae.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === u || k === b || k === h || k === f || k === w || k === A || typeof k == "object" && k !== null && (k.$$typeof === R || k.$$typeof === P || k.$$typeof === g || k.$$typeof === v || k.$$typeof === S || k.$$typeof === $ || k.$$typeof === U || k.$$typeof === V || k.$$typeof === M);
  }, Ae.typeOf = D, Ae;
}
var wy;
function bx() {
  return wy || (wy = 1, Uh.exports = _x()), Uh.exports;
}
var Zh, Ey;
function xx() {
  if (Ey) return Zh;
  Ey = 1;
  var n3 = bx(), r = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, a = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, u = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, f = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, h = {};
  h[n3.ForwardRef] = u, h[n3.Memo] = f;
  function g(R) {
    return n3.isMemo(R) ? f : h[R.$$typeof] || r;
  }
  var v = Object.defineProperty, y = Object.getOwnPropertyNames, b = Object.getOwnPropertySymbols, S = Object.getOwnPropertyDescriptor, w = Object.getPrototypeOf, A = Object.prototype;
  function P(R, M, $) {
    if (typeof M != "string") {
      if (A) {
        var U = w(M);
        U && U !== A && P(R, U, $);
      }
      var V = y(M);
      b && (V = V.concat(b(M)));
      for (var D = g(R), N = g(M), k = 0; k < V.length; ++k) {
        var j = V[k];
        if (!a[j] && !($ && $[j]) && !(N && N[j]) && !(D && D[j])) {
          var X = S(M, j);
          try {
            v(R, j, X);
          } catch {
          }
        }
      }
    }
    return R;
  }
  return Zh = P, Zh;
}
xx();
var Sx = true;
function n0(n3, r, a) {
  var u = "";
  return a.split(" ").forEach(function(f) {
    n3[f] !== void 0 ? r.push(n3[f] + ";") : f && (u += f + " ");
  }), u;
}
var Dp = function(r, a, u) {
  var f = r.key + "-" + a.name;
  (u === false || Sx === false) && r.registered[f] === void 0 && (r.registered[f] = a.styles);
}, Np = function(r, a, u) {
  Dp(r, a, u);
  var f = r.key + "-" + a.name;
  if (r.inserted[a.name] === void 0) {
    var h = a;
    do
      r.insert(a === h ? "." + f : "", h, r.sheet, true), h = h.next;
    while (h !== void 0);
  }
};
function Cx(n3) {
  for (var r = 0, a, u = 0, f = n3.length; f >= 4; ++u, f -= 4) a = n3.charCodeAt(u) & 255 | (n3.charCodeAt(++u) & 255) << 8 | (n3.charCodeAt(++u) & 255) << 16 | (n3.charCodeAt(++u) & 255) << 24, a = (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16), a ^= a >>> 24, r = (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16) ^ (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (f) {
    case 3:
      r ^= (n3.charCodeAt(u + 2) & 255) << 16;
    case 2:
      r ^= (n3.charCodeAt(u + 1) & 255) << 8;
    case 1:
      r ^= n3.charCodeAt(u) & 255, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var Tx = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, wx = /[A-Z]|^ms/g, Ex = /_EMO_([^_]+?)_([^]*?)_EMO_/g, i0 = function(r) {
  return r.charCodeAt(1) === 45;
}, Oy = function(r) {
  return r != null && typeof r != "boolean";
}, qh = t0(function(n3) {
  return i0(n3) ? n3 : n3.replace(wx, "-$&").toLowerCase();
}), My = function(r, a) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof a == "string") return a.replace(Ex, function(u, f, h) {
        return Io = { name: f, styles: h, next: Io }, f;
      });
  }
  return Tx[r] !== 1 && !i0(r) && typeof a == "number" && a !== 0 ? a + "px" : a;
};
function xu(n3, r, a) {
  if (a == null) return "";
  var u = a;
  if (u.__emotion_styles !== void 0) return u;
  switch (typeof a) {
    case "boolean":
      return "";
    case "object": {
      var f = a;
      if (f.anim === 1) return Io = { name: f.name, styles: f.styles, next: Io }, f.name;
      var h = a;
      if (h.styles !== void 0) {
        var g = h.next;
        if (g !== void 0) for (; g !== void 0; ) Io = { name: g.name, styles: g.styles, next: Io }, g = g.next;
        var v = h.styles + ";";
        return v;
      }
      return Ox(n3, r, a);
    }
    case "function": {
      if (n3 !== void 0) {
        var y = Io, b = a(n3);
        return Io = y, xu(n3, r, b);
      }
      break;
    }
  }
  var S = a;
  if (r == null) return S;
  var w = r[S];
  return w !== void 0 ? w : S;
}
function Ox(n3, r, a) {
  var u = "";
  if (Array.isArray(a)) for (var f = 0; f < a.length; f++) u += xu(n3, r, a[f]) + ";";
  else for (var h in a) {
    var g = a[h];
    if (typeof g != "object") {
      var v = g;
      r != null && r[v] !== void 0 ? u += h + "{" + r[v] + "}" : Oy(v) && (u += qh(h) + ":" + My(h, v) + ";");
    } else if (Array.isArray(g) && typeof g[0] == "string" && (r == null || r[g[0]] === void 0)) for (var y = 0; y < g.length; y++) Oy(g[y]) && (u += qh(h) + ":" + My(h, g[y]) + ";");
    else {
      var b = xu(n3, r, g);
      switch (h) {
        case "animation":
        case "animationName": {
          u += qh(h) + ":" + b + ";";
          break;
        }
        default:
          u += h + "{" + b + "}";
      }
    }
  }
  return u;
}
var Ay = /label:\s*([^\s;{]+)\s*(;|$)/g, Io;
function Mu(n3, r, a) {
  if (n3.length === 1 && typeof n3[0] == "object" && n3[0] !== null && n3[0].styles !== void 0) return n3[0];
  var u = true, f = "";
  Io = void 0;
  var h = n3[0];
  if (h == null || h.raw === void 0) u = false, f += xu(a, r, h);
  else {
    var g = h;
    f += g[0];
  }
  for (var v = 1; v < n3.length; v++) if (f += xu(a, r, n3[v]), u) {
    var y = h;
    f += y[v];
  }
  Ay.lastIndex = 0;
  for (var b = "", S; (S = Ay.exec(f)) !== null; ) b += "-" + S[1];
  var w = Cx(f) + b;
  return { name: w, styles: f, next: Io };
}
var Mx = function(r) {
  return r();
}, o0 = op.useInsertionEffect ? op.useInsertionEffect : false, r0 = o0 || Mx, Ry = o0 || O.useLayoutEffect, a0 = O.createContext(typeof HTMLElement < "u" ? yx({ key: "css" }) : null);
a0.Provider;
var $p = function(r) {
  return O.forwardRef(function(a, u) {
    var f = O.useContext(a0);
    return r(a, f, u);
  });
}, Au = O.createContext({}), Ip = {}.hasOwnProperty, sp = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ax = function(r, a) {
  var u = {};
  for (var f in a) Ip.call(a, f) && (u[f] = a[f]);
  return u[sp] = r, u;
}, Rx = function(r) {
  var a = r.cache, u = r.serialized, f = r.isStringTag;
  return Dp(a, u, f), r0(function() {
    return Np(a, u, f);
  }), null;
}, Lx = $p(function(n3, r, a) {
  var u = n3.css;
  typeof u == "string" && r.registered[u] !== void 0 && (u = r.registered[u]);
  var f = n3[sp], h = [u], g = "";
  typeof n3.className == "string" ? g = n0(r.registered, h, n3.className) : n3.className != null && (g = n3.className + " ");
  var v = Mu(h, void 0, O.useContext(Au));
  g += r.key + "-" + v.name;
  var y = {};
  for (var b in n3) Ip.call(n3, b) && b !== "css" && b !== sp && (y[b] = n3[b]);
  return y.className = g, a && (y.ref = a), O.createElement(O.Fragment, null, O.createElement(Rx, { cache: r, serialized: v, isStringTag: typeof f == "string" }), O.createElement(f, y));
}), Px = Lx, Ly = function(r, a) {
  var u = arguments;
  if (a == null || !Ip.call(a, "css")) return O.createElement.apply(void 0, u);
  var f = u.length, h = new Array(f);
  h[0] = Px, h[1] = Ax(r, a);
  for (var g = 2; g < f; g++) h[g] = u[g];
  return O.createElement.apply(null, h);
};
(function(n3) {
  var r;
  r || (r = n3.JSX || (n3.JSX = {}));
})(Ly || (Ly = {}));
var zx = $p(function(n3, r) {
  var a = n3.styles, u = Mu([a], void 0, O.useContext(Au)), f = O.useRef();
  return Ry(function() {
    var h = r.key + "-global", g = new r.sheet.constructor({ key: h, nonce: r.sheet.nonce, container: r.sheet.container, speedy: r.sheet.isSpeedy }), v = false, y = document.querySelector('style[data-emotion="' + h + " " + u.name + '"]');
    return r.sheet.tags.length && (g.before = r.sheet.tags[0]), y !== null && (v = true, y.setAttribute("data-emotion", h), g.hydrate([y])), f.current = [g, v], function() {
      g.flush();
    };
  }, [r]), Ry(function() {
    var h = f.current, g = h[0], v = h[1];
    if (v) {
      h[1] = false;
      return;
    }
    if (u.next !== void 0 && Np(r, u.next, true), g.tags.length) {
      var y = g.tags[g.tags.length - 1].nextElementSibling;
      g.before = y, g.flush();
    }
    r.insert("", u, g, false);
  }, [r, u.name]), null;
});
function Hp() {
  for (var n3 = arguments.length, r = new Array(n3), a = 0; a < n3; a++) r[a] = arguments[a];
  return Mu(r);
}
function Ru() {
  var n3 = Hp.apply(void 0, arguments), r = "animation-" + n3.name;
  return { name: r, styles: "@keyframes " + r + "{" + n3.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}
var kx = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Bx = t0(function(n3) {
  return kx.test(n3) || n3.charCodeAt(0) === 111 && n3.charCodeAt(1) === 110 && n3.charCodeAt(2) < 91;
}), Dx = Bx, Nx = function(r) {
  return r !== "theme";
}, Py = function(r) {
  return typeof r == "string" && r.charCodeAt(0) > 96 ? Dx : Nx;
}, zy = function(r, a, u) {
  var f;
  if (a) {
    var h = a.shouldForwardProp;
    f = r.__emotion_forwardProp && h ? function(g) {
      return r.__emotion_forwardProp(g) && h(g);
    } : h;
  }
  return typeof f != "function" && u && (f = r.__emotion_forwardProp), f;
}, $x = function(r) {
  var a = r.cache, u = r.serialized, f = r.isStringTag;
  return Dp(a, u, f), r0(function() {
    return Np(a, u, f);
  }), null;
}, Ix = function n(r, a) {
  var u = r.__emotion_real === r, f = u && r.__emotion_base || r, h, g;
  a !== void 0 && (h = a.label, g = a.target);
  var v = zy(r, a, u), y = v || Py(f), b = !y("as");
  return function() {
    var S = arguments, w = u && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (h !== void 0 && w.push("label:" + h + ";"), S[0] == null || S[0].raw === void 0) w.push.apply(w, S);
    else {
      var A = S[0];
      w.push(A[0]);
      for (var P = S.length, R = 1; R < P; R++) w.push(S[R], A[R]);
    }
    var M = $p(function($, U, V) {
      var D = b && $.as || f, N = "", k = [], j = $;
      if ($.theme == null) {
        j = {};
        for (var X in $) j[X] = $[X];
        j.theme = O.useContext(Au);
      }
      typeof $.className == "string" ? N = n0(U.registered, k, $.className) : $.className != null && (N = $.className + " ");
      var J = Mu(w.concat(k), U.registered, j);
      N += U.key + "-" + J.name, g !== void 0 && (N += " " + g);
      var it = b && v === void 0 ? Py(D) : y, ut = {};
      for (var ot in $) b && ot === "as" || it(ot) && (ut[ot] = $[ot]);
      return ut.className = N, V && (ut.ref = V), O.createElement(O.Fragment, null, O.createElement($x, { cache: U, serialized: J, isStringTag: typeof D == "string" }), O.createElement(D, ut));
    });
    return M.displayName = h !== void 0 ? h : "Styled(" + (typeof f == "string" ? f : f.displayName || f.name || "Component") + ")", M.defaultProps = r.defaultProps, M.__emotion_real = M, M.__emotion_base = f, M.__emotion_styles = w, M.__emotion_forwardProp = v, Object.defineProperty(M, "toString", { value: function() {
      return "." + g;
    } }), M.withComponent = function($, U) {
      var V = n($, hf({}, a, U, { shouldForwardProp: zy(M, U, true) }));
      return V.apply(void 0, w);
    }, M;
  };
}, Hx = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], lp = Ix.bind(null);
Hx.forEach(function(n3) {
  lp[n3] = lp(n3);
});
function jx(n3) {
  return n3 == null || Object.keys(n3).length === 0;
}
function s0(n3) {
  const { styles: r, defaultTheme: a = {} } = n3, u = typeof r == "function" ? (f) => r(jx(f) ? a : f) : r;
  return Z.jsx(zx, { styles: u });
}
function l0(n3, r) {
  return lp(n3, r);
}
function Ux(n3, r) {
  Array.isArray(n3.__emotion_styles) && (n3.__emotion_styles = r(n3.__emotion_styles));
}
const ky = [];
function da(n3) {
  return ky[0] = n3, Mu(ky);
}
var Vh = { exports: {} }, Ue = {};
/**
* @license React
* react-is.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var By;
function Zx() {
  if (By) return Ue;
  By = 1;
  var n3 = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), g = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), A = Symbol.for("react.view_transition"), P = Symbol.for("react.client.reference");
  function R(M) {
    if (typeof M == "object" && M !== null) {
      var $ = M.$$typeof;
      switch ($) {
        case n3:
          switch (M = M.type, M) {
            case a:
            case f:
            case u:
            case y:
            case b:
            case A:
              return M;
            default:
              switch (M = M && M.$$typeof, M) {
                case g:
                case v:
                case w:
                case S:
                  return M;
                case h:
                  return M;
                default:
                  return $;
              }
          }
        case r:
          return $;
      }
    }
  }
  return Ue.ContextConsumer = h, Ue.ContextProvider = g, Ue.Element = n3, Ue.ForwardRef = v, Ue.Fragment = a, Ue.Lazy = w, Ue.Memo = S, Ue.Portal = r, Ue.Profiler = f, Ue.StrictMode = u, Ue.Suspense = y, Ue.SuspenseList = b, Ue.isContextConsumer = function(M) {
    return R(M) === h;
  }, Ue.isContextProvider = function(M) {
    return R(M) === g;
  }, Ue.isElement = function(M) {
    return typeof M == "object" && M !== null && M.$$typeof === n3;
  }, Ue.isForwardRef = function(M) {
    return R(M) === v;
  }, Ue.isFragment = function(M) {
    return R(M) === a;
  }, Ue.isLazy = function(M) {
    return R(M) === w;
  }, Ue.isMemo = function(M) {
    return R(M) === S;
  }, Ue.isPortal = function(M) {
    return R(M) === r;
  }, Ue.isProfiler = function(M) {
    return R(M) === f;
  }, Ue.isStrictMode = function(M) {
    return R(M) === u;
  }, Ue.isSuspense = function(M) {
    return R(M) === y;
  }, Ue.isSuspenseList = function(M) {
    return R(M) === b;
  }, Ue.isValidElementType = function(M) {
    return typeof M == "string" || typeof M == "function" || M === a || M === f || M === u || M === y || M === b || typeof M == "object" && M !== null && (M.$$typeof === w || M.$$typeof === S || M.$$typeof === g || M.$$typeof === h || M.$$typeof === v || M.$$typeof === P || M.getModuleId !== void 0);
  }, Ue.typeOf = R, Ue;
}
var Dy;
function qx() {
  return Dy || (Dy = 1, Vh.exports = Zx()), Vh.exports;
}
var u0 = qx();
function jo(n3) {
  if (typeof n3 != "object" || n3 === null) return false;
  const r = Object.getPrototypeOf(n3);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in n3) && !(Symbol.iterator in n3);
}
function c0(n3) {
  if (O.isValidElement(n3) || u0.isValidElementType(n3) || !jo(n3)) return n3;
  const r = {};
  return Object.keys(n3).forEach((a) => {
    r[a] = c0(n3[a]);
  }), r;
}
function zn(n3, r, a = { clone: true }) {
  const u = a.clone ? { ...n3 } : n3;
  return jo(n3) && jo(r) && Object.keys(r).forEach((f) => {
    O.isValidElement(r[f]) || u0.isValidElementType(r[f]) ? u[f] = r[f] : jo(r[f]) && Object.prototype.hasOwnProperty.call(n3, f) && jo(n3[f]) ? u[f] = zn(n3[f], r[f], a) : a.clone ? u[f] = jo(r[f]) ? c0(r[f]) : r[f] : u[f] = r[f];
  }), u;
}
const Vx = (n3) => {
  const r = Object.keys(n3).map((a) => ({ key: a, val: n3[a] })) || [];
  return r.sort((a, u) => a.val - u.val), r.reduce((a, u) => ({ ...a, [u.key]: u.val }), {});
};
function Gx(n3) {
  const { values: r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: a = "px", step: u = 5, ...f } = n3, h = Vx(r), g = Object.keys(h);
  function v(A) {
    return `@media (min-width:${typeof r[A] == "number" ? r[A] : A}${a})`;
  }
  function y(A) {
    return `@media (max-width:${(typeof r[A] == "number" ? r[A] : A) - u / 100}${a})`;
  }
  function b(A, P) {
    const R = g.indexOf(P);
    return `@media (min-width:${typeof r[A] == "number" ? r[A] : A}${a}) and (max-width:${(R !== -1 && typeof r[g[R]] == "number" ? r[g[R]] : P) - u / 100}${a})`;
  }
  function S(A) {
    return g.indexOf(A) + 1 < g.length ? b(A, g[g.indexOf(A) + 1]) : v(A);
  }
  function w(A) {
    const P = g.indexOf(A);
    return P === 0 ? v(g[1]) : P === g.length - 1 ? y(g[P]) : b(A, g[g.indexOf(A) + 1]).replace("@media", "@media not all and");
  }
  return { keys: g, values: h, up: v, down: y, between: b, only: S, not: w, unit: a, ...f };
}
function Ny(n3, r) {
  if (!n3.containerQueries) return r;
  const a = Object.keys(r).filter((u) => u.startsWith("@container")).sort((u, f) => {
    var _a, _b;
    const h = /min-width:\s*([0-9.]+)/;
    return +(((_a = u.match(h)) == null ? void 0 : _a[1]) || 0) - +(((_b = f.match(h)) == null ? void 0 : _b[1]) || 0);
  });
  return a.length ? a.reduce((u, f) => {
    const h = r[f];
    return delete u[f], u[f] = h, u;
  }, { ...r }) : r;
}
function Yx(n3, r) {
  return r === "@" || r.startsWith("@") && (n3.some((a) => r.startsWith(`@${a}`)) || !!r.match(/^@\d/));
}
function Fx(n3, r) {
  const a = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!a) return null;
  const [, u, f] = a, h = Number.isNaN(+u) ? u || 0 : +u;
  return n3.containerQueries(f).up(h);
}
function Xx(n3) {
  const r = (h, g) => h.replace("@media", g ? `@container ${g}` : "@container");
  function a(h, g) {
    h.up = (...v) => r(n3.breakpoints.up(...v), g), h.down = (...v) => r(n3.breakpoints.down(...v), g), h.between = (...v) => r(n3.breakpoints.between(...v), g), h.only = (...v) => r(n3.breakpoints.only(...v), g), h.not = (...v) => {
      const y = r(n3.breakpoints.not(...v), g);
      return y.includes("not all and") ? y.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : y;
    };
  }
  const u = {}, f = (h) => (a(u, h), u);
  return a(f), { ...n3, containerQueries: f };
}
const Kx = { borderRadius: 4 };
function hu(n3, r) {
  return r ? zn(n3, r, { clone: false }) : n3;
}
const Of = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, $y = { keys: ["xs", "sm", "md", "lg", "xl"], up: (n3) => `@media (min-width:${Of[n3]}px)` }, Wx = { containerQueries: (n3) => ({ up: (r) => {
  let a = typeof r == "number" ? r : Of[r] || r;
  return typeof a == "number" && (a = `${a}px`), n3 ? `@container ${n3} (min-width:${a})` : `@container (min-width:${a})`;
} }) };
function xo(n3, r, a) {
  const u = n3.theme || {};
  if (Array.isArray(r)) {
    const h = u.breakpoints || $y;
    return r.reduce((g, v, y) => (g[h.up(h.keys[y])] = a(r[y]), g), {});
  }
  if (typeof r == "object") {
    const h = u.breakpoints || $y;
    return Object.keys(r).reduce((g, v) => {
      if (Yx(h.keys, v)) {
        const y = Fx(u.containerQueries ? u : Wx, v);
        y && (g[y] = a(r[v], v));
      } else if (Object.keys(h.values || Of).includes(v)) {
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
function f0(n3 = {}) {
  var _a;
  return ((_a = n3.keys) == null ? void 0 : _a.reduce((a, u) => {
    const f = n3.up(u);
    return a[f] = {}, a;
  }, {})) || {};
}
function up(n3, r) {
  return n3.reduce((a, u) => {
    const f = a[u];
    return (!f || Object.keys(f).length === 0) && delete a[u], a;
  }, r);
}
function Qx(n3, ...r) {
  const a = f0(n3), u = [a, ...r].reduce((f, h) => zn(f, h), {});
  return up(Object.keys(a), u);
}
function Jx(n3, r) {
  if (typeof n3 != "object") return {};
  const a = {}, u = Object.keys(r);
  return Array.isArray(n3) ? u.forEach((f, h) => {
    h < n3.length && (a[f] = true);
  }) : u.forEach((f) => {
    n3[f] != null && (a[f] = true);
  }), a;
}
function Gh({ values: n3, breakpoints: r, base: a }) {
  const u = a || Jx(n3, r), f = Object.keys(u);
  if (f.length === 0) return n3;
  let h;
  return f.reduce((g, v, y) => (Array.isArray(n3) ? (g[v] = n3[y] != null ? n3[y] : n3[h], h = y) : typeof n3 == "object" ? (g[v] = n3[v] != null ? n3[v] : n3[h], h = v) : g[v] = n3, g), {});
}
function Ct(n3) {
  if (typeof n3 != "string") throw new Error(br(7));
  return n3.charAt(0).toUpperCase() + n3.slice(1);
}
function Ho(n3, r, a = true) {
  if (!r || typeof r != "string") return null;
  if (n3 && n3.vars && a) {
    const u = `vars.${r}`.split(".").reduce((f, h) => f && f[h] ? f[h] : null, n3);
    if (u != null) return u;
  }
  return r.split(".").reduce((u, f) => u && u[f] != null ? u[f] : null, n3);
}
function mf(n3, r, a, u = a) {
  let f;
  return typeof n3 == "function" ? f = n3(a) : Array.isArray(n3) ? f = n3[a] || u : f = Ho(n3, a) || u, r && (f = r(f, u, n3)), f;
}
function yn(n3) {
  const { prop: r, cssProperty: a = n3.prop, themeKey: u, transform: f } = n3, h = (g) => {
    if (g[r] == null) return null;
    const v = g[r], y = g.theme, b = Ho(y, u) || {};
    return xo(g, v, (w) => {
      let A = mf(b, f, w);
      return w === A && typeof w == "string" && (A = mf(b, f, `${r}${w === "default" ? "" : Ct(w)}`, w)), a === false ? A : { [a]: A };
    });
  };
  return h.propTypes = {}, h.filterProps = [r], h;
}
function tS(n3) {
  const r = {};
  return (a) => (r[a] === void 0 && (r[a] = n3(a)), r[a]);
}
const eS = { m: "margin", p: "padding" }, nS = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] }, Iy = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" }, iS = tS((n3) => {
  if (n3.length > 2) if (Iy[n3]) n3 = Iy[n3];
  else return [n3];
  const [r, a] = n3.split(""), u = eS[r], f = nS[a] || "";
  return Array.isArray(f) ? f.map((h) => u + h) : [u + f];
}), jp = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Up = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...jp, ...Up];
function Lu(n3, r, a, u) {
  const f = Ho(n3, r, true) ?? a;
  return typeof f == "number" || typeof f == "string" ? (h) => typeof h == "string" ? h : typeof f == "string" ? f.startsWith("var(") && h === 0 ? 0 : f.startsWith("var(") && h === 1 ? f : `calc(${h} * ${f})` : f * h : Array.isArray(f) ? (h) => {
    if (typeof h == "string") return h;
    const g = Math.abs(h), v = f[g];
    return h >= 0 ? v : typeof v == "number" ? -v : typeof v == "string" && v.startsWith("var(") ? `calc(-1 * ${v})` : `-${v}`;
  } : typeof f == "function" ? f : () => {
  };
}
function Mf(n3) {
  return Lu(n3, "spacing", 8);
}
function Xa(n3, r) {
  return typeof r == "string" || r == null ? r : n3(r);
}
function oS(n3, r) {
  return (a) => n3.reduce((u, f) => (u[f] = Xa(r, a), u), {});
}
function rS(n3, r, a, u) {
  if (!r.includes(a)) return null;
  const f = iS(a), h = oS(f, u), g = n3[a];
  return xo(n3, g, h);
}
function d0(n3, r) {
  const a = Mf(n3.theme);
  return Object.keys(n3).map((u) => rS(n3, r, u, a)).reduce(hu, {});
}
function hn(n3) {
  return d0(n3, jp);
}
hn.propTypes = {};
hn.filterProps = jp;
function pn(n3) {
  return d0(n3, Up);
}
pn.propTypes = {};
pn.filterProps = Up;
function h0(n3 = 8, r = Mf({ spacing: n3 })) {
  if (n3.mui) return n3;
  const a = (...u) => (u.length === 0 ? [1] : u).map((h) => {
    const g = r(h);
    return typeof g == "number" ? `${g}px` : g;
  }).join(" ");
  return a.mui = true, a;
}
function Af(...n3) {
  const r = n3.reduce((u, f) => (f.filterProps.forEach((h) => {
    u[h] = f;
  }), u), {}), a = (u) => Object.keys(u).reduce((f, h) => r[h] ? hu(f, r[h](u)) : f, {});
  return a.propTypes = {}, a.filterProps = n3.reduce((u, f) => u.concat(f.filterProps), []), a;
}
function no(n3) {
  return typeof n3 != "number" ? n3 : `${n3}px solid`;
}
function ao(n3, r) {
  return yn({ prop: n3, themeKey: "borders", transform: r });
}
const aS = ao("border", no), sS = ao("borderTop", no), lS = ao("borderRight", no), uS = ao("borderBottom", no), cS = ao("borderLeft", no), fS = ao("borderColor"), dS = ao("borderTopColor"), hS = ao("borderRightColor"), pS = ao("borderBottomColor"), mS = ao("borderLeftColor"), gS = ao("outline", no), vS = ao("outlineColor"), Rf = (n3) => {
  if (n3.borderRadius !== void 0 && n3.borderRadius !== null) {
    const r = Lu(n3.theme, "shape.borderRadius", 4), a = (u) => ({ borderRadius: Xa(r, u) });
    return xo(n3, n3.borderRadius, a);
  }
  return null;
};
Rf.propTypes = {};
Rf.filterProps = ["borderRadius"];
Af(aS, sS, lS, uS, cS, fS, dS, hS, pS, mS, Rf, gS, vS);
const Lf = (n3) => {
  if (n3.gap !== void 0 && n3.gap !== null) {
    const r = Lu(n3.theme, "spacing", 8), a = (u) => ({ gap: Xa(r, u) });
    return xo(n3, n3.gap, a);
  }
  return null;
};
Lf.propTypes = {};
Lf.filterProps = ["gap"];
const Pf = (n3) => {
  if (n3.columnGap !== void 0 && n3.columnGap !== null) {
    const r = Lu(n3.theme, "spacing", 8), a = (u) => ({ columnGap: Xa(r, u) });
    return xo(n3, n3.columnGap, a);
  }
  return null;
};
Pf.propTypes = {};
Pf.filterProps = ["columnGap"];
const zf = (n3) => {
  if (n3.rowGap !== void 0 && n3.rowGap !== null) {
    const r = Lu(n3.theme, "spacing", 8), a = (u) => ({ rowGap: Xa(r, u) });
    return xo(n3, n3.rowGap, a);
  }
  return null;
};
zf.propTypes = {};
zf.filterProps = ["rowGap"];
const yS = yn({ prop: "gridColumn" }), _S = yn({ prop: "gridRow" }), bS = yn({ prop: "gridAutoFlow" }), xS = yn({ prop: "gridAutoColumns" }), SS = yn({ prop: "gridAutoRows" }), CS = yn({ prop: "gridTemplateColumns" }), TS = yn({ prop: "gridTemplateRows" }), wS = yn({ prop: "gridTemplateAreas" }), ES = yn({ prop: "gridArea" });
Af(Lf, Pf, zf, yS, _S, bS, xS, SS, CS, TS, wS, ES);
function Vs(n3, r) {
  return r === "grey" ? r : n3;
}
const OS = yn({ prop: "color", themeKey: "palette", transform: Vs }), MS = yn({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: Vs }), AS = yn({ prop: "backgroundColor", themeKey: "palette", transform: Vs });
Af(OS, MS, AS);
function Ii(n3) {
  return n3 <= 1 && n3 !== 0 ? `${n3 * 100}%` : n3;
}
const RS = yn({ prop: "width", transform: Ii }), Zp = (n3) => {
  if (n3.maxWidth !== void 0 && n3.maxWidth !== null) {
    const r = (a) => {
      var _a, _b, _c, _d, _e;
      const u = ((_c = (_b = (_a = n3.theme) == null ? void 0 : _a.breakpoints) == null ? void 0 : _b.values) == null ? void 0 : _c[a]) || Of[a];
      return u ? ((_e = (_d = n3.theme) == null ? void 0 : _d.breakpoints) == null ? void 0 : _e.unit) !== "px" ? { maxWidth: `${u}${n3.theme.breakpoints.unit}` } : { maxWidth: u } : { maxWidth: Ii(a) };
    };
    return xo(n3, n3.maxWidth, r);
  }
  return null;
};
Zp.filterProps = ["maxWidth"];
const LS = yn({ prop: "minWidth", transform: Ii }), PS = yn({ prop: "height", transform: Ii }), zS = yn({ prop: "maxHeight", transform: Ii }), kS = yn({ prop: "minHeight", transform: Ii });
yn({ prop: "size", cssProperty: "width", transform: Ii });
yn({ prop: "size", cssProperty: "height", transform: Ii });
const BS = yn({ prop: "boxSizing" });
Af(RS, Zp, LS, PS, zS, kS, BS);
const Pu = { border: { themeKey: "borders", transform: no }, borderTop: { themeKey: "borders", transform: no }, borderRight: { themeKey: "borders", transform: no }, borderBottom: { themeKey: "borders", transform: no }, borderLeft: { themeKey: "borders", transform: no }, borderColor: { themeKey: "palette" }, borderTopColor: { themeKey: "palette" }, borderRightColor: { themeKey: "palette" }, borderBottomColor: { themeKey: "palette" }, borderLeftColor: { themeKey: "palette" }, outline: { themeKey: "borders", transform: no }, outlineColor: { themeKey: "palette" }, borderRadius: { themeKey: "shape.borderRadius", style: Rf }, color: { themeKey: "palette", transform: Vs }, bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: Vs }, backgroundColor: { themeKey: "palette", transform: Vs }, p: { style: pn }, pt: { style: pn }, pr: { style: pn }, pb: { style: pn }, pl: { style: pn }, px: { style: pn }, py: { style: pn }, padding: { style: pn }, paddingTop: { style: pn }, paddingRight: { style: pn }, paddingBottom: { style: pn }, paddingLeft: { style: pn }, paddingX: { style: pn }, paddingY: { style: pn }, paddingInline: { style: pn }, paddingInlineStart: { style: pn }, paddingInlineEnd: { style: pn }, paddingBlock: { style: pn }, paddingBlockStart: { style: pn }, paddingBlockEnd: { style: pn }, m: { style: hn }, mt: { style: hn }, mr: { style: hn }, mb: { style: hn }, ml: { style: hn }, mx: { style: hn }, my: { style: hn }, margin: { style: hn }, marginTop: { style: hn }, marginRight: { style: hn }, marginBottom: { style: hn }, marginLeft: { style: hn }, marginX: { style: hn }, marginY: { style: hn }, marginInline: { style: hn }, marginInlineStart: { style: hn }, marginInlineEnd: { style: hn }, marginBlock: { style: hn }, marginBlockStart: { style: hn }, marginBlockEnd: { style: hn }, displayPrint: { cssProperty: false, transform: (n3) => ({ "@media print": { display: n3 } }) }, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: { style: Lf }, rowGap: { style: zf }, columnGap: { style: Pf }, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: { themeKey: "zIndex" }, top: {}, right: {}, bottom: {}, left: {}, boxShadow: { themeKey: "shadows" }, width: { transform: Ii }, maxWidth: { style: Zp }, minWidth: { transform: Ii }, height: { transform: Ii }, maxHeight: { transform: Ii }, minHeight: { transform: Ii }, boxSizing: {}, font: { themeKey: "font" }, fontFamily: { themeKey: "typography" }, fontSize: { themeKey: "typography" }, fontStyle: { themeKey: "typography" }, fontWeight: { themeKey: "typography" }, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: { cssProperty: false, themeKey: "typography" } };
function DS(...n3) {
  const r = n3.reduce((u, f) => u.concat(Object.keys(f)), []), a = new Set(r);
  return n3.every((u) => a.size === Object.keys(u).length);
}
function NS(n3, r) {
  return typeof n3 == "function" ? n3(r) : n3;
}
function $S() {
  function n3(a, u, f, h) {
    const g = { [a]: u, theme: f }, v = h[a];
    if (!v) return { [a]: u };
    const { cssProperty: y = a, themeKey: b, transform: S, style: w } = v;
    if (u == null) return null;
    if (b === "typography" && u === "inherit") return { [a]: u };
    const A = Ho(f, b) || {};
    return w ? w(g) : xo(g, u, (R) => {
      let M = mf(A, S, R);
      return R === M && typeof R == "string" && (M = mf(A, S, `${a}${R === "default" ? "" : Ct(R)}`, R)), y === false ? M : { [y]: M };
    });
  }
  function r(a) {
    const { sx: u, theme: f = {}, nested: h } = a || {};
    if (!u) return null;
    const g = f.unstable_sxConfig ?? Pu;
    function v(y) {
      let b = y;
      if (typeof y == "function") b = y(f);
      else if (typeof y != "object") return y;
      if (!b) return null;
      const S = f0(f.breakpoints), w = Object.keys(S);
      let A = S;
      return Object.keys(b).forEach((P) => {
        const R = NS(b[P], f);
        if (R != null) if (typeof R == "object") if (g[P]) A = hu(A, n3(P, R, f, g));
        else {
          const M = xo({ theme: f }, R, ($) => ({ [P]: $ }));
          DS(M, R) ? A[P] = r({ sx: R, theme: f, nested: true }) : A = hu(A, M);
        }
        else A = hu(A, n3(P, R, f, g));
      }), !h && f.modularCssLayers ? { "@layer sx": Ny(f, up(w, A)) } : Ny(f, up(w, A));
    }
    return Array.isArray(u) ? u.map(v) : v(u);
  }
  return r;
}
const ha = $S();
ha.filterProps = ["sx"];
function IS(n3, r) {
  var _a;
  const a = this;
  if (a.vars) {
    if (!((_a = a.colorSchemes) == null ? void 0 : _a[n3]) || typeof a.getColorSchemeSelector != "function") return {};
    let u = a.getColorSchemeSelector(n3);
    return u === "&" ? r : ((u.includes("data-") || u.includes(".")) && (u = `*:where(${u.replace(/\s*&$/, "")}) &`), { [u]: r });
  }
  return a.palette.mode === n3 ? r : {};
}
function kf(n3 = {}, ...r) {
  const { breakpoints: a = {}, palette: u = {}, spacing: f, shape: h = {}, ...g } = n3, v = Gx(a), y = h0(f);
  let b = zn({ breakpoints: v, direction: "ltr", components: {}, palette: { mode: "light", ...u }, spacing: y, shape: { ...Kx, ...h } }, g);
  return b = Xx(b), b.applyStyles = IS, b = r.reduce((S, w) => zn(S, w), b), b.unstable_sxConfig = { ...Pu, ...g == null ? void 0 : g.unstable_sxConfig }, b.unstable_sx = function(w) {
    return ha({ sx: w, theme: this });
  }, b;
}
function HS(n3) {
  return Object.keys(n3).length === 0;
}
function qp(n3 = null) {
  const r = O.useContext(Au);
  return !r || HS(r) ? n3 : r;
}
const jS = kf();
function Bf(n3 = jS) {
  return qp(n3);
}
function Yh(n3) {
  const r = da(n3);
  return n3 !== r && r.styles ? (r.styles.match(/^@layer\s+[^{]*$/) || (r.styles = `@layer global{${r.styles}}`), r) : n3;
}
function p0({ styles: n3, themeId: r, defaultTheme: a = {} }) {
  const u = Bf(a), f = r && u[r] || u;
  let h = typeof n3 == "function" ? n3(f) : n3;
  return f.modularCssLayers && (Array.isArray(h) ? h = h.map((g) => Yh(typeof g == "function" ? g(f) : g)) : h = Yh(h)), Z.jsx(s0, { styles: h });
}
const US = (n3) => {
  var _a;
  const r = { systemProps: {}, otherProps: {} }, a = ((_a = n3 == null ? void 0 : n3.theme) == null ? void 0 : _a.unstable_sxConfig) ?? Pu;
  return Object.keys(n3).forEach((u) => {
    a[u] ? r.systemProps[u] = n3[u] : r.otherProps[u] = n3[u];
  }), r;
};
function Vp(n3) {
  const { sx: r, ...a } = n3, { systemProps: u, otherProps: f } = US(a);
  let h;
  return Array.isArray(r) ? h = [u, ...r] : typeof r == "function" ? h = (...g) => {
    const v = r(...g);
    return jo(v) ? { ...u, ...v } : u;
  } : h = { ...u, ...r }, { ...f, sx: h };
}
const Hy = (n3) => n3, ZS = () => {
  let n3 = Hy;
  return { configure(r) {
    n3 = r;
  }, generate(r) {
    return n3(r);
  }, reset() {
    n3 = Hy;
  } };
}, m0 = ZS();
function g0(n3) {
  var r, a, u = "";
  if (typeof n3 == "string" || typeof n3 == "number") u += n3;
  else if (typeof n3 == "object") if (Array.isArray(n3)) {
    var f = n3.length;
    for (r = 0; r < f; r++) n3[r] && (a = g0(n3[r])) && (u && (u += " "), u += a);
  } else for (a in n3) n3[a] && (u && (u += " "), u += a);
  return u;
}
function Yt() {
  for (var n3, r, a = 0, u = "", f = arguments.length; a < f; a++) (n3 = arguments[a]) && (r = g0(n3)) && (u && (u += " "), u += r);
  return u;
}
function qS(n3 = {}) {
  const { themeId: r, defaultTheme: a, defaultClassName: u = "MuiBox-root", generateClassName: f } = n3, h = l0("div", { shouldForwardProp: (v) => v !== "theme" && v !== "sx" && v !== "as" })(ha);
  return O.forwardRef(function(y, b) {
    const S = Bf(a), { className: w, component: A = "div", ...P } = Vp(y);
    return Z.jsx(h, { as: A, ref: b, className: Yt(w, f ? f(u) : u), theme: r && S[r] || S, ...P });
  });
}
const VS = { active: "active", checked: "checked", completed: "completed", disabled: "disabled", error: "error", expanded: "expanded", focused: "focused", focusVisible: "focusVisible", open: "open", readOnly: "readOnly", required: "required", selected: "selected" };
function Re(n3, r, a = "Mui") {
  const u = VS[r];
  return u ? `${a}-${u}` : `${m0.generate(n3)}-${r}`;
}
function Le(n3, r, a = "Mui") {
  const u = {};
  return r.forEach((f) => {
    u[f] = Re(n3, f, a);
  }), u;
}
function v0(n3) {
  const { variants: r, ...a } = n3, u = { variants: r, style: da(a), isProcessed: true };
  return u.style === a || r && r.forEach((f) => {
    typeof f.style != "function" && (f.style = da(f.style));
  }), u;
}
const GS = kf();
function Fh(n3) {
  return n3 !== "ownerState" && n3 !== "theme" && n3 !== "sx" && n3 !== "as";
}
function Ga(n3, r) {
  return r && n3 && typeof n3 == "object" && n3.styles && !n3.styles.startsWith("@layer") && (n3.styles = `@layer ${r}{${String(n3.styles)}}`), n3;
}
function YS(n3) {
  return n3 ? (r, a) => a[n3] : null;
}
function FS(n3, r, a) {
  n3.theme = KS(n3.theme) ? a : n3.theme[r] || n3.theme;
}
function cf(n3, r, a) {
  const u = typeof r == "function" ? r(n3) : r;
  if (Array.isArray(u)) return u.flatMap((f) => cf(n3, f, a));
  if (Array.isArray(u == null ? void 0 : u.variants)) {
    let f;
    if (u.isProcessed) f = a ? Ga(u.style, a) : u.style;
    else {
      const { variants: h, ...g } = u;
      f = a ? Ga(da(g), a) : g;
    }
    return y0(n3, u.variants, [f], a);
  }
  return (u == null ? void 0 : u.isProcessed) ? a ? Ga(da(u.style), a) : u.style : a ? Ga(da(u), a) : u;
}
function y0(n3, r, a = [], u = void 0) {
  var _a;
  let f;
  t: for (let h = 0; h < r.length; h += 1) {
    const g = r[h];
    if (typeof g.props == "function") {
      if (f ?? (f = { ...n3, ...n3.ownerState, ownerState: n3.ownerState }), !g.props(f)) continue;
    } else for (const v in g.props) if (n3[v] !== g.props[v] && ((_a = n3.ownerState) == null ? void 0 : _a[v]) !== g.props[v]) continue t;
    typeof g.style == "function" ? (f ?? (f = { ...n3, ...n3.ownerState, ownerState: n3.ownerState }), a.push(u ? Ga(da(g.style(f)), u) : g.style(f))) : a.push(u ? Ga(da(g.style), u) : g.style);
  }
  return a;
}
function _0(n3 = {}) {
  const { themeId: r, defaultTheme: a = GS, rootShouldForwardProp: u = Fh, slotShouldForwardProp: f = Fh } = n3;
  function h(v) {
    FS(v, r, a);
  }
  return (v, y = {}) => {
    Ux(v, (j) => j.filter((X) => X !== ha));
    const { name: b, slot: S, skipVariantsResolver: w, skipSx: A, overridesResolver: P = YS(QS(S)), ...R } = y, M = b && b.startsWith("Mui") || S ? "components" : "custom", $ = w !== void 0 ? w : S && S !== "Root" && S !== "root" || false, U = A || false;
    let V = Fh;
    S === "Root" || S === "root" ? V = u : S ? V = f : WS(v) && (V = void 0);
    const D = l0(v, { shouldForwardProp: V, label: XS(), ...R }), N = (j) => {
      if (j.__emotion_real === j) return j;
      if (typeof j == "function") return function(J) {
        return cf(J, j, J.theme.modularCssLayers ? M : void 0);
      };
      if (jo(j)) {
        const X = v0(j);
        return function(it) {
          return X.variants ? cf(it, X, it.theme.modularCssLayers ? M : void 0) : it.theme.modularCssLayers ? Ga(X.style, M) : X.style;
        };
      }
      return j;
    }, k = (...j) => {
      const X = [], J = j.map(N), it = [];
      if (X.push(h), b && P && it.push(function(st) {
        var _a, _b;
        const et = (_b = (_a = st.theme.components) == null ? void 0 : _a[b]) == null ? void 0 : _b.styleOverrides;
        if (!et) return null;
        const B = {};
        for (const tt in et) B[tt] = cf(st, et[tt], st.theme.modularCssLayers ? "theme" : void 0);
        return P(st, B);
      }), b && !$ && it.push(function(st) {
        var _a, _b, _c;
        const et = (_c = (_b = (_a = st.theme) == null ? void 0 : _a.components) == null ? void 0 : _b[b]) == null ? void 0 : _c.variants;
        return et ? y0(st, et, [], st.theme.modularCssLayers ? "theme" : void 0) : null;
      }), U || it.push(ha), Array.isArray(J[0])) {
        const C = J.shift(), st = new Array(X.length).fill(""), W = new Array(it.length).fill("");
        let et;
        et = [...st, ...C, ...W], et.raw = [...st, ...C.raw, ...W], X.unshift(et);
      }
      const ut = [...X, ...J, ...it], ot = D(...ut);
      return v.muiName && (ot.muiName = v.muiName), ot;
    };
    return D.withConfig && (k.withConfig = D.withConfig), k;
  };
}
function XS(n3, r) {
  return void 0;
}
function KS(n3) {
  for (const r in n3) return false;
  return true;
}
function WS(n3) {
  return typeof n3 == "string" && n3.charCodeAt(0) > 96;
}
function QS(n3) {
  return n3 && n3.charAt(0).toLowerCase() + n3.slice(1);
}
const JS = _0();
function Su(n3, r, a = false) {
  const u = { ...r };
  for (const f in n3) if (Object.prototype.hasOwnProperty.call(n3, f)) {
    const h = f;
    if (h === "components" || h === "slots") u[h] = { ...n3[h], ...u[h] };
    else if (h === "componentsProps" || h === "slotProps") {
      const g = n3[h], v = r[h];
      if (!v) u[h] = g || {};
      else if (!g) u[h] = v;
      else {
        u[h] = { ...v };
        for (const y in g) if (Object.prototype.hasOwnProperty.call(g, y)) {
          const b = y;
          u[h][b] = Su(g[b], v[b], a);
        }
      }
    } else h === "className" && a && r.className ? u.className = Yt(n3 == null ? void 0 : n3.className, r == null ? void 0 : r.className) : h === "style" && a && r.style ? u.style = { ...n3 == null ? void 0 : n3.style, ...r == null ? void 0 : r.style } : u[h] === void 0 && (u[h] = n3[h]);
  }
  return u;
}
function tC(n3) {
  const { theme: r, name: a, props: u } = n3;
  return !r || !r.components || !r.components[a] || !r.components[a].defaultProps ? u : Su(r.components[a].defaultProps, u);
}
function eC({ props: n3, name: r, defaultTheme: a, themeId: u }) {
  let f = Bf(a);
  return u && (f = f[u] || f), tC({ theme: f, name: r, props: n3 });
}
const So = typeof window < "u" ? O.useLayoutEffect : O.useEffect;
function nC(n3, r = Number.MIN_SAFE_INTEGER, a = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(n3, a));
}
function Gp(n3, r = 0, a = 1) {
  return nC(n3, r, a);
}
function iC(n3) {
  n3 = n3.slice(1);
  const r = new RegExp(`.{1,${n3.length >= 6 ? 2 : 1}}`, "g");
  let a = n3.match(r);
  return a && a[0].length === 1 && (a = a.map((u) => u + u)), a ? `rgb${a.length === 4 ? "a" : ""}(${a.map((u, f) => f < 3 ? parseInt(u, 16) : Math.round(parseInt(u, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function pa(n3) {
  if (n3.type) return n3;
  if (n3.charAt(0) === "#") return pa(iC(n3));
  const r = n3.indexOf("("), a = n3.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(a)) throw new Error(br(9, n3));
  let u = n3.substring(r + 1, n3.length - 1), f;
  if (a === "color") {
    if (u = u.split(" "), f = u.shift(), u.length === 4 && u[3].charAt(0) === "/" && (u[3] = u[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(f)) throw new Error(br(10, f));
  } else u = u.split(",");
  return u = u.map((h) => parseFloat(h)), { type: a, values: u, colorSpace: f };
}
const oC = (n3) => {
  const r = pa(n3);
  return r.values.slice(0, 3).map((a, u) => r.type.includes("hsl") && u !== 0 ? `${a}%` : a).join(" ");
}, uu = (n3, r) => {
  try {
    return oC(n3);
  } catch {
    return n3;
  }
};
function Df(n3) {
  const { type: r, colorSpace: a } = n3;
  let { values: u } = n3;
  return r.includes("rgb") ? u = u.map((f, h) => h < 3 ? parseInt(f, 10) : f) : r.includes("hsl") && (u[1] = `${u[1]}%`, u[2] = `${u[2]}%`), r.includes("color") ? u = `${a} ${u.join(" ")}` : u = `${u.join(", ")}`, `${r}(${u})`;
}
function b0(n3) {
  n3 = pa(n3);
  const { values: r } = n3, a = r[0], u = r[1] / 100, f = r[2] / 100, h = u * Math.min(f, 1 - f), g = (b, S = (b + a / 30) % 12) => f - h * Math.max(Math.min(S - 3, 9 - S, 1), -1);
  let v = "rgb";
  const y = [Math.round(g(0) * 255), Math.round(g(8) * 255), Math.round(g(4) * 255)];
  return n3.type === "hsla" && (v += "a", y.push(r[3])), Df({ type: v, values: y });
}
function cp(n3) {
  n3 = pa(n3);
  let r = n3.type === "hsl" || n3.type === "hsla" ? pa(b0(n3)).values : n3.values;
  return r = r.map((a) => (n3.type !== "color" && (a /= 255), a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function rC(n3, r) {
  const a = cp(n3), u = cp(r);
  return (Math.max(a, u) + 0.05) / (Math.min(a, u) + 0.05);
}
function Cu(n3, r) {
  return n3 = pa(n3), r = Gp(r), (n3.type === "rgb" || n3.type === "hsl") && (n3.type += "a"), n3.type === "color" ? n3.values[3] = `/${r}` : n3.values[3] = r, Df(n3);
}
function Ua(n3, r, a) {
  try {
    return Cu(n3, r);
  } catch {
    return n3;
  }
}
function Ys(n3, r) {
  if (n3 = pa(n3), r = Gp(r), n3.type.includes("hsl")) n3.values[2] *= 1 - r;
  else if (n3.type.includes("rgb") || n3.type.includes("color")) for (let a = 0; a < 3; a += 1) n3.values[a] *= 1 - r;
  return Df(n3);
}
function Ne(n3, r, a) {
  try {
    return Ys(n3, r);
  } catch {
    return n3;
  }
}
function Nf(n3, r) {
  if (n3 = pa(n3), r = Gp(r), n3.type.includes("hsl")) n3.values[2] += (100 - n3.values[2]) * r;
  else if (n3.type.includes("rgb")) for (let a = 0; a < 3; a += 1) n3.values[a] += (255 - n3.values[a]) * r;
  else if (n3.type.includes("color")) for (let a = 0; a < 3; a += 1) n3.values[a] += (1 - n3.values[a]) * r;
  return Df(n3);
}
function $e(n3, r, a) {
  try {
    return Nf(n3, r);
  } catch {
    return n3;
  }
}
function aC(n3, r = 0.15) {
  return cp(n3) > 0.5 ? Ys(n3, r) : Nf(n3, r);
}
function Jc(n3, r, a) {
  try {
    return aC(n3, r);
  } catch {
    return n3;
  }
}
const x0 = O.createContext(null);
function Yp() {
  return O.useContext(x0);
}
const sC = typeof Symbol == "function" && Symbol.for, lC = sC ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function uC(n3, r) {
  return typeof r == "function" ? r(n3) : { ...n3, ...r };
}
function cC(n3) {
  const { children: r, theme: a } = n3, u = Yp(), f = O.useMemo(() => {
    const h = u === null ? { ...a } : uC(u, a);
    return h != null && (h[lC] = u !== null), h;
  }, [a, u]);
  return Z.jsx(x0.Provider, { value: f, children: r });
}
const S0 = O.createContext();
function fC({ value: n3, ...r }) {
  return Z.jsx(S0.Provider, { value: n3 ?? true, ...r });
}
const C0 = () => O.useContext(S0) ?? false, T0 = O.createContext(void 0);
function dC({ value: n3, children: r }) {
  return Z.jsx(T0.Provider, { value: n3, children: r });
}
function hC(n3) {
  const { theme: r, name: a, props: u } = n3;
  if (!r || !r.components || !r.components[a]) return u;
  const f = r.components[a];
  return f.defaultProps ? Su(f.defaultProps, u, r.components.mergeClassNameAndStyle) : !f.styleOverrides && !f.variants ? Su(f, u, r.components.mergeClassNameAndStyle) : u;
}
function pC({ props: n3, name: r }) {
  const a = O.useContext(T0);
  return hC({ props: n3, name: r, theme: { components: a } });
}
let jy = 0;
function mC(n3) {
  const [r, a] = O.useState(n3), u = n3 || r;
  return O.useEffect(() => {
    r == null && (jy += 1, a(`mui-${jy}`));
  }, [r]), u;
}
const gC = { ...op }, Uy = gC.useId;
function el(n3) {
  if (Uy !== void 0) {
    const r = Uy();
    return n3 ?? r;
  }
  return mC(n3);
}
function vC(n3) {
  const r = qp(), a = el() || "", { modularCssLayers: u } = n3;
  let f = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !u || r !== null ? f = "" : typeof u == "string" ? f = u.replace(/mui(?!\.)/g, f) : f = `@layer ${f};`, So(() => {
    var _a, _b;
    const h = document.querySelector("head");
    if (!h) return;
    const g = h.firstChild;
    if (f) {
      if (g && ((_a = g.hasAttribute) == null ? void 0 : _a.call(g, "data-mui-layer-order")) && g.getAttribute("data-mui-layer-order") === a) return;
      const v = document.createElement("style");
      v.setAttribute("data-mui-layer-order", a), v.textContent = f, h.prepend(v);
    } else (_b = h.querySelector(`style[data-mui-layer-order="${a}"]`)) == null ? void 0 : _b.remove();
  }, [f, a]), f ? Z.jsx(p0, { styles: f }) : null;
}
const Zy = {};
function qy(n3, r, a, u = false) {
  return O.useMemo(() => {
    const f = n3 && r[n3] || r;
    if (typeof a == "function") {
      const h = a(f), g = n3 ? { ...r, [n3]: h } : h;
      return u ? () => g : g;
    }
    return n3 ? { ...r, [n3]: a } : { ...r, ...a };
  }, [n3, r, a, u]);
}
function w0(n3) {
  const { children: r, theme: a, themeId: u } = n3, f = qp(Zy), h = Yp() || Zy, g = qy(u, f, a), v = qy(u, h, a, true), y = (u ? g[u] : g).direction === "rtl", b = vC(g);
  return Z.jsx(cC, { theme: v, children: Z.jsx(Au.Provider, { value: g, children: Z.jsx(fC, { value: y, children: Z.jsxs(dC, { value: u ? g[u].components : g.components, children: [b, r] }) }) }) });
}
const Vy = { theme: void 0 };
function yC(n3) {
  let r, a;
  return function(f) {
    let h = r;
    return (h === void 0 || f.theme !== a) && (Vy.theme = f.theme, h = v0(n3(Vy)), r = h, a = f.theme), h;
  };
}
const Fp = "mode", Xp = "color-scheme", _C = "data-color-scheme";
function bC(n3) {
  const { defaultMode: r = "system", defaultLightColorScheme: a = "light", defaultDarkColorScheme: u = "dark", modeStorageKey: f = Fp, colorSchemeStorageKey: h = Xp, attribute: g = _C, colorSchemeNode: v = "document.documentElement", nonce: y } = n3 || {};
  let b = "", S = g;
  if (g === "class" && (S = ".%s"), g === "data" && (S = "[data-%s]"), S.startsWith(".")) {
    const A = S.substring(1);
    b += `${v}.classList.remove('${A}'.replace('%s', light), '${A}'.replace('%s', dark));
      ${v}.classList.add('${A}'.replace('%s', colorScheme));`;
  }
  const w = S.match(/\[([^[\]]+)\]/);
  if (w) {
    const [A, P] = w[1].split("=");
    P || (b += `${v}.removeAttribute('${A}'.replace('%s', light));
      ${v}.removeAttribute('${A}'.replace('%s', dark));`), b += `
      ${v}.setAttribute('${A}'.replace('%s', colorScheme), ${P ? `${P}.replace('%s', colorScheme)` : '""'});`;
  } else b += `${v}.setAttribute('${S}', colorScheme);`;
  return Z.jsx("script", { suppressHydrationWarning: true, nonce: typeof window > "u" ? y : "", dangerouslySetInnerHTML: { __html: `(function() {
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
function xC() {
}
const SC = ({ key: n3, storageWindow: r }) => (!r && typeof window < "u" && (r = window), { get(a) {
  if (typeof window > "u") return;
  if (!r) return a;
  let u;
  try {
    u = r.localStorage.getItem(n3);
  } catch {
  }
  return u || a;
}, set: (a) => {
  if (r) try {
    r.localStorage.setItem(n3, a);
  } catch {
  }
}, subscribe: (a) => {
  if (!r) return xC;
  const u = (f) => {
    const h = f.newValue;
    f.key === n3 && a(h);
  };
  return r.addEventListener("storage", u), () => {
    r.removeEventListener("storage", u);
  };
} });
function Xh() {
}
function Gy(n3) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && n3 === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function E0(n3, r) {
  if (n3.mode === "light" || n3.mode === "system" && n3.systemMode === "light") return r("light");
  if (n3.mode === "dark" || n3.mode === "system" && n3.systemMode === "dark") return r("dark");
}
function CC(n3) {
  return E0(n3, (r) => {
    if (r === "light") return n3.lightColorScheme;
    if (r === "dark") return n3.darkColorScheme;
  });
}
function TC(n3) {
  const { defaultMode: r = "light", defaultLightColorScheme: a, defaultDarkColorScheme: u, supportedColorSchemes: f = [], modeStorageKey: h = Fp, colorSchemeStorageKey: g = Xp, storageWindow: v = typeof window > "u" ? void 0 : window, storageManager: y = SC, noSsr: b = false } = n3, S = f.join(","), w = f.length > 1, A = O.useMemo(() => y == null ? void 0 : y({ key: h, storageWindow: v }), [y, h, v]), P = O.useMemo(() => y == null ? void 0 : y({ key: `${g}-light`, storageWindow: v }), [y, g, v]), R = O.useMemo(() => y == null ? void 0 : y({ key: `${g}-dark`, storageWindow: v }), [y, g, v]), [M, $] = O.useState(() => {
    const J = (A == null ? void 0 : A.get(r)) || r, it = (P == null ? void 0 : P.get(a)) || a, ut = (R == null ? void 0 : R.get(u)) || u;
    return { mode: J, systemMode: Gy(J), lightColorScheme: it, darkColorScheme: ut };
  }), [U, V] = O.useState(b || !w);
  O.useEffect(() => {
    V(true);
  }, []);
  const D = CC(M), N = O.useCallback((J) => {
    $((it) => {
      if (J === it.mode) return it;
      const ut = J ?? r;
      return A == null ? void 0 : A.set(ut), { ...it, mode: ut, systemMode: Gy(ut) };
    });
  }, [A, r]), k = O.useCallback((J) => {
    J ? typeof J == "string" ? J && !S.includes(J) ? console.error(`\`${J}\` does not exist in \`theme.colorSchemes\`.`) : $((it) => {
      const ut = { ...it };
      return E0(it, (ot) => {
        ot === "light" && (P == null ? void 0 : P.set(J), ut.lightColorScheme = J), ot === "dark" && (R == null ? void 0 : R.set(J), ut.darkColorScheme = J);
      }), ut;
    }) : $((it) => {
      const ut = { ...it }, ot = J.light === null ? a : J.light, C = J.dark === null ? u : J.dark;
      return ot && (S.includes(ot) ? (ut.lightColorScheme = ot, P == null ? void 0 : P.set(ot)) : console.error(`\`${ot}\` does not exist in \`theme.colorSchemes\`.`)), C && (S.includes(C) ? (ut.darkColorScheme = C, R == null ? void 0 : R.set(C)) : console.error(`\`${C}\` does not exist in \`theme.colorSchemes\`.`)), ut;
    }) : $((it) => (P == null ? void 0 : P.set(a), R == null ? void 0 : R.set(u), { ...it, lightColorScheme: a, darkColorScheme: u }));
  }, [S, P, R, a, u]), j = O.useCallback((J) => {
    M.mode === "system" && $((it) => {
      const ut = (J == null ? void 0 : J.matches) ? "dark" : "light";
      return it.systemMode === ut ? it : { ...it, systemMode: ut };
    });
  }, [M.mode]), X = O.useRef(j);
  return X.current = j, O.useEffect(() => {
    if (typeof window.matchMedia != "function" || !w) return;
    const J = (...ut) => X.current(...ut), it = window.matchMedia("(prefers-color-scheme: dark)");
    return it.addListener(J), J(it), () => {
      it.removeListener(J);
    };
  }, [w]), O.useEffect(() => {
    if (w) {
      const J = (A == null ? void 0 : A.subscribe((ot) => {
        (!ot || ["light", "dark", "system"].includes(ot)) && N(ot || r);
      })) || Xh, it = (P == null ? void 0 : P.subscribe((ot) => {
        (!ot || S.match(ot)) && k({ light: ot });
      })) || Xh, ut = (R == null ? void 0 : R.subscribe((ot) => {
        (!ot || S.match(ot)) && k({ dark: ot });
      })) || Xh;
      return () => {
        J(), it(), ut();
      };
    }
  }, [k, N, S, r, v, w, A, P, R]), { ...M, mode: U ? M.mode : void 0, systemMode: U ? M.systemMode : void 0, colorScheme: U ? D : void 0, setMode: N, setColorScheme: k };
}
const wC = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function EC(n3) {
  const { themeId: r, theme: a = {}, modeStorageKey: u = Fp, colorSchemeStorageKey: f = Xp, disableTransitionOnChange: h = false, defaultColorScheme: g, resolveTheme: v } = n3, y = { allColorSchemes: [], colorScheme: void 0, darkColorScheme: void 0, lightColorScheme: void 0, mode: void 0, setColorScheme: () => {
  }, setMode: () => {
  }, systemMode: void 0 }, b = O.createContext(void 0), S = () => O.useContext(b) || y, w = {}, A = {};
  function P(U) {
    var _a, _b, _c, _d;
    const { children: V, theme: D, modeStorageKey: N = u, colorSchemeStorageKey: k = f, disableTransitionOnChange: j = h, storageManager: X, storageWindow: J = typeof window > "u" ? void 0 : window, documentNode: it = typeof document > "u" ? void 0 : document, colorSchemeNode: ut = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: ot = false, disableStyleSheetGeneration: C = false, defaultMode: st = "system", forceThemeRerender: W = false, noSsr: et } = U, B = O.useRef(false), tt = Yp(), rt = O.useContext(b), gt = !!rt && !ot, z = O.useMemo(() => D || (typeof a == "function" ? a() : a), [D]), Y = z[r], ft = Y || z, { colorSchemes: dt = w, components: bt = A, cssVarPrefix: _t } = ft, ct = Object.keys(dt).filter((ce) => !!dt[ce]).join(","), At = O.useMemo(() => ct.split(","), [ct]), Pt = typeof g == "string" ? g : g.light, $t = typeof g == "string" ? g : g.dark, Rt = dt[Pt] && dt[$t] ? st : ((_b = (_a = dt[ft.defaultColorScheme]) == null ? void 0 : _a.palette) == null ? void 0 : _b.mode) || ((_c = ft.palette) == null ? void 0 : _c.mode), { mode: Ut, setMode: Wt, systemMode: te, lightColorScheme: qt, darkColorScheme: de, colorScheme: ie, setColorScheme: ue } = TC({ supportedColorSchemes: At, defaultLightColorScheme: Pt, defaultDarkColorScheme: $t, modeStorageKey: N, colorSchemeStorageKey: k, defaultMode: Rt, storageManager: X, storageWindow: J, noSsr: et });
    let Tt = Ut, _e = ie;
    gt && (Tt = rt.mode, _e = rt.colorScheme);
    let Bt = _e || ft.defaultColorScheme;
    ft.vars && !W && (Bt = ft.defaultColorScheme);
    const Jt = O.useMemo(() => {
      var _a2;
      const ce = ((_a2 = ft.generateThemeVars) == null ? void 0 : _a2.call(ft)) || ft.vars, Vt = { ...ft, components: bt, colorSchemes: dt, cssVarPrefix: _t, vars: ce };
      if (typeof Vt.generateSpacing == "function" && (Vt.spacing = Vt.generateSpacing()), Bt) {
        const oe = dt[Bt];
        oe && typeof oe == "object" && Object.keys(oe).forEach((he) => {
          oe[he] && typeof oe[he] == "object" ? Vt[he] = { ...Vt[he], ...oe[he] } : Vt[he] = oe[he];
        });
      }
      return v ? v(Vt) : Vt;
    }, [ft, Bt, bt, dt, _t]), Ot = ft.colorSchemeSelector;
    So(() => {
      if (_e && ut && Ot && Ot !== "media") {
        const ce = Ot;
        let Vt = Ot;
        if (ce === "class" && (Vt = ".%s"), ce === "data" && (Vt = "[data-%s]"), (ce == null ? void 0 : ce.startsWith("data-")) && !ce.includes("%s") && (Vt = `[${ce}="%s"]`), Vt.startsWith(".")) ut.classList.remove(...At.map((oe) => Vt.substring(1).replace("%s", oe))), ut.classList.add(Vt.substring(1).replace("%s", _e));
        else {
          const oe = Vt.replace("%s", _e).match(/\[([^\]]+)\]/);
          if (oe) {
            const [he, xe] = oe[1].split("=");
            xe || At.forEach((jt) => {
              ut.removeAttribute(he.replace(_e, jt));
            }), ut.setAttribute(he, xe ? xe.replace(/"|'/g, "") : "");
          } else ut.setAttribute(Vt, _e);
        }
      }
    }, [_e, Ot, ut, At]), O.useEffect(() => {
      let ce;
      if (j && B.current && it) {
        const Vt = it.createElement("style");
        Vt.appendChild(it.createTextNode(wC)), it.head.appendChild(Vt), window.getComputedStyle(it.body), ce = setTimeout(() => {
          it.head.removeChild(Vt);
        }, 1);
      }
      return () => {
        clearTimeout(ce);
      };
    }, [_e, j, it]), O.useEffect(() => (B.current = true, () => {
      B.current = false;
    }), []);
    const tn = O.useMemo(() => ({ allColorSchemes: At, colorScheme: _e, darkColorScheme: de, lightColorScheme: qt, mode: Tt, setColorScheme: ue, setMode: Wt, systemMode: te }), [At, _e, de, qt, Tt, ue, Wt, te, Jt.colorSchemeSelector]);
    let be = true;
    (C || ft.cssVariables === false || gt && (tt == null ? void 0 : tt.cssVarPrefix) === _t) && (be = false);
    const qe = Z.jsxs(O.Fragment, { children: [Z.jsx(w0, { themeId: Y ? r : void 0, theme: Jt, children: V }), be && Z.jsx(s0, { styles: ((_d = Jt.generateStyleSheets) == null ? void 0 : _d.call(Jt)) || [] })] });
    return gt ? qe : Z.jsx(b.Provider, { value: tn, children: qe });
  }
  const R = typeof g == "string" ? g : g.light, M = typeof g == "string" ? g : g.dark;
  return { CssVarsProvider: P, useColorScheme: S, getInitColorSchemeScript: (U) => bC({ colorSchemeStorageKey: f, defaultLightColorScheme: R, defaultDarkColorScheme: M, modeStorageKey: u, ...U }) };
}
function OC(n3 = "") {
  function r(...u) {
    if (!u.length) return "";
    const f = u[0];
    return typeof f == "string" && !f.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${n3 ? `${n3}-` : ""}${f}${r(...u.slice(1))})` : `, ${f}`;
  }
  return (u, ...f) => `var(--${n3 ? `${n3}-` : ""}${u}${r(...f)})`;
}
const Yy = (n3, r, a, u = []) => {
  let f = n3;
  r.forEach((h, g) => {
    g === r.length - 1 ? Array.isArray(f) ? f[Number(h)] = a : f && typeof f == "object" && (f[h] = a) : f && typeof f == "object" && (f[h] || (f[h] = u.includes(h) ? [] : {}), f = f[h]);
  });
}, MC = (n3, r, a) => {
  function u(f, h = [], g = []) {
    Object.entries(f).forEach(([v, y]) => {
      (!a || a && !a([...h, v])) && y != null && (typeof y == "object" && Object.keys(y).length > 0 ? u(y, [...h, v], Array.isArray(y) ? [...g, v] : g) : r([...h, v], y, g));
    });
  }
  u(n3);
}, AC = (n3, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((u) => n3.includes(u)) || n3[n3.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function Kh(n3, r) {
  const { prefix: a, shouldSkipGeneratingVar: u } = r || {}, f = {}, h = {}, g = {};
  return MC(n3, (v, y, b) => {
    if ((typeof y == "string" || typeof y == "number") && (!u || !u(v, y))) {
      const S = `--${a ? `${a}-` : ""}${v.join("-")}`, w = AC(v, y);
      Object.assign(f, { [S]: w }), Yy(h, v, `var(${S})`, b), Yy(g, v, `var(${S}, ${w})`, b);
    }
  }, (v) => v[0] === "vars"), { css: f, vars: h, varsWithDefaults: g };
}
function RC(n3, r = {}) {
  const { getSelector: a = U, disableCssColorScheme: u, colorSchemeSelector: f, enableContrastVars: h } = r, { colorSchemes: g = {}, components: v, defaultColorScheme: y = "light", ...b } = n3, { vars: S, css: w, varsWithDefaults: A } = Kh(b, r);
  let P = A;
  const R = {}, { [y]: M, ...$ } = g;
  if (Object.entries($ || {}).forEach(([N, k]) => {
    const { vars: j, css: X, varsWithDefaults: J } = Kh(k, r);
    P = zn(P, J), R[N] = { css: X, vars: j };
  }), M) {
    const { css: N, vars: k, varsWithDefaults: j } = Kh(M, r);
    P = zn(P, j), R[y] = { css: N, vars: k };
  }
  function U(N, k) {
    var _a, _b;
    let j = f;
    if (f === "class" && (j = ".%s"), f === "data" && (j = "[data-%s]"), (f == null ? void 0 : f.startsWith("data-")) && !f.includes("%s") && (j = `[${f}="%s"]`), N) {
      if (j === "media") return n3.defaultColorScheme === N ? ":root" : { [`@media (prefers-color-scheme: ${((_b = (_a = g[N]) == null ? void 0 : _a.palette) == null ? void 0 : _b.mode) || N})`]: { ":root": k } };
      if (j) return n3.defaultColorScheme === N ? `:root, ${j.replace("%s", String(N))}` : j.replace("%s", String(N));
    }
    return ":root";
  }
  return { vars: P, generateThemeVars: () => {
    let N = { ...S };
    return Object.entries(R).forEach(([, { vars: k }]) => {
      N = zn(N, k);
    }), N;
  }, generateStyleSheets: () => {
    var _a, _b;
    const N = [], k = n3.defaultColorScheme || "light";
    function j(it, ut) {
      Object.keys(ut).length && N.push(typeof it == "string" ? { [it]: { ...ut } } : it);
    }
    j(a(void 0, { ...w }), w);
    const { [k]: X, ...J } = R;
    if (X) {
      const { css: it } = X, ut = (_b = (_a = g[k]) == null ? void 0 : _a.palette) == null ? void 0 : _b.mode, ot = !u && ut ? { colorScheme: ut, ...it } : { ...it };
      j(a(k, { ...ot }), ot);
    }
    return Object.entries(J).forEach(([it, { css: ut }]) => {
      var _a2, _b2;
      const ot = (_b2 = (_a2 = g[it]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode, C = !u && ot ? { colorScheme: ot, ...ut } : { ...ut };
      j(a(it, { ...C }), C);
    }), h && N.push({ ":root": { "--__l-threshold": "0.7", "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)", "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)" } }), N;
  } };
}
function LC(n3) {
  return function(a) {
    return n3 === "media" ? `@media (prefers-color-scheme: ${a})` : n3 ? n3.startsWith("data-") && !n3.includes("%s") ? `[${n3}="${a}"] &` : n3 === "class" ? `.${a} &` : n3 === "data" ? `[data-${a}] &` : `${n3.replace("%s", a)} &` : "&";
  };
}
function Pe(n3, r, a = void 0) {
  const u = {};
  for (const f in n3) {
    const h = n3[f];
    let g = "", v = true;
    for (let y = 0; y < h.length; y += 1) {
      const b = h[y];
      b && (g += (v === true ? "" : " ") + r(b), v = false, a && a[b] && (g += " " + a[b]));
    }
    u[f] = g;
  }
  return u;
}
function Wh(n3, r) {
  var _a, _b, _c;
  return O.isValidElement(n3) && r.indexOf(n3.type.muiName ?? ((_c = (_b = (_a = n3.type) == null ? void 0 : _a._payload) == null ? void 0 : _b.value) == null ? void 0 : _c.muiName)) !== -1;
}
const PC = kf(), zC = JS("div", { name: "MuiStack", slot: "Root" });
function kC(n3) {
  return eC({ props: n3, name: "MuiStack", defaultTheme: PC });
}
function BC(n3, r) {
  const a = O.Children.toArray(n3).filter(Boolean);
  return a.reduce((u, f, h) => (u.push(f), h < a.length - 1 && u.push(O.cloneElement(r, { key: `separator-${h}` })), u), []);
}
const DC = (n3) => ({ row: "Left", "row-reverse": "Right", column: "Top", "column-reverse": "Bottom" })[n3], NC = ({ ownerState: n3, theme: r }) => {
  let a = { display: "flex", flexDirection: "column", ...xo({ theme: r }, Gh({ values: n3.direction, breakpoints: r.breakpoints.values }), (u) => ({ flexDirection: u })) };
  if (n3.spacing) {
    const u = Mf(r), f = Object.keys(r.breakpoints.values).reduce((y, b) => ((typeof n3.spacing == "object" && n3.spacing[b] != null || typeof n3.direction == "object" && n3.direction[b] != null) && (y[b] = true), y), {}), h = Gh({ values: n3.direction, base: f }), g = Gh({ values: n3.spacing, base: f });
    typeof h == "object" && Object.keys(h).forEach((y, b, S) => {
      if (!h[y]) {
        const A = b > 0 ? h[S[b - 1]] : "column";
        h[y] = A;
      }
    }), a = zn(a, xo({ theme: r }, g, (y, b) => n3.useFlexGap ? { gap: Xa(u, y) } : { "& > :not(style):not(style)": { margin: 0 }, "& > :not(style) ~ :not(style)": { [`margin${DC(b ? h[b] : n3.direction)}`]: Xa(u, y) } }));
  }
  return a = Qx(r.breakpoints, a), a;
};
function $C(n3 = {}) {
  const { createStyledComponent: r = zC, useThemeProps: a = kC, componentName: u = "MuiStack" } = n3, f = () => Pe({ root: ["root"] }, (y) => Re(u, y), {}), h = r(NC);
  return O.forwardRef(function(y, b) {
    const S = a(y), w = Vp(S), { component: A = "div", direction: P = "column", spacing: R = 0, divider: M, children: $, className: U, useFlexGap: V = false, ...D } = w, N = { direction: P, spacing: R, useFlexGap: V }, k = f();
    return Z.jsx(h, { as: A, ownerState: N, ref: b, className: Yt(k.root, U), ...D, children: M ? BC($, M) : $ });
  });
}
const Tu = { black: "#000", white: "#fff" }, IC = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121", A100: "#f5f5f5", A200: "#eeeeee", A400: "#bdbdbd", A700: "#616161" }, Ns = { 50: "#f3e5f5", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 700: "#7b1fa2" }, $s = { 300: "#e57373", 400: "#ef5350", 500: "#f44336", 700: "#d32f2f", 800: "#c62828" }, ou = { 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 700: "#f57c00", 900: "#e65100" }, Is = { 50: "#e3f2fd", 200: "#90caf9", 400: "#42a5f5", 700: "#1976d2", 800: "#1565c0" }, Hs = { 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 700: "#0288d1", 900: "#01579b" }, js = { 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20" };
function O0() {
  return { text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)" }, divider: "rgba(0, 0, 0, 0.12)", background: { paper: Tu.white, default: Tu.white }, action: { active: "rgba(0, 0, 0, 0.54)", hover: "rgba(0, 0, 0, 0.04)", hoverOpacity: 0.04, selected: "rgba(0, 0, 0, 0.08)", selectedOpacity: 0.08, disabled: "rgba(0, 0, 0, 0.26)", disabledBackground: "rgba(0, 0, 0, 0.12)", disabledOpacity: 0.38, focus: "rgba(0, 0, 0, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.12 } };
}
const M0 = O0();
function A0() {
  return { text: { primary: Tu.white, secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", icon: "rgba(255, 255, 255, 0.5)" }, divider: "rgba(255, 255, 255, 0.12)", background: { paper: "#121212", default: "#121212" }, action: { active: Tu.white, hover: "rgba(255, 255, 255, 0.08)", hoverOpacity: 0.08, selected: "rgba(255, 255, 255, 0.16)", selectedOpacity: 0.16, disabled: "rgba(255, 255, 255, 0.3)", disabledBackground: "rgba(255, 255, 255, 0.12)", disabledOpacity: 0.38, focus: "rgba(255, 255, 255, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.24 } };
}
const fp = A0();
function Fy(n3, r, a, u) {
  const f = u.light || u, h = u.dark || u * 1.5;
  n3[r] || (n3.hasOwnProperty(a) ? n3[r] = n3[a] : r === "light" ? n3.light = Nf(n3.main, f) : r === "dark" && (n3.dark = Ys(n3.main, h)));
}
function Xy(n3, r, a, u, f) {
  const h = f.light || f, g = f.dark || f * 1.5;
  r[a] || (r.hasOwnProperty(u) ? r[a] = r[u] : a === "light" ? r.light = `color-mix(in ${n3}, ${r.main}, #fff ${(h * 100).toFixed(0)}%)` : a === "dark" && (r.dark = `color-mix(in ${n3}, ${r.main}, #000 ${(g * 100).toFixed(0)}%)`));
}
function HC(n3 = "light") {
  return n3 === "dark" ? { main: Is[200], light: Is[50], dark: Is[400] } : { main: Is[700], light: Is[400], dark: Is[800] };
}
function jC(n3 = "light") {
  return n3 === "dark" ? { main: Ns[200], light: Ns[50], dark: Ns[400] } : { main: Ns[500], light: Ns[300], dark: Ns[700] };
}
function UC(n3 = "light") {
  return n3 === "dark" ? { main: $s[500], light: $s[300], dark: $s[700] } : { main: $s[700], light: $s[400], dark: $s[800] };
}
function ZC(n3 = "light") {
  return n3 === "dark" ? { main: Hs[400], light: Hs[300], dark: Hs[700] } : { main: Hs[700], light: Hs[500], dark: Hs[900] };
}
function qC(n3 = "light") {
  return n3 === "dark" ? { main: js[400], light: js[300], dark: js[700] } : { main: js[800], light: js[500], dark: js[900] };
}
function VC(n3 = "light") {
  return n3 === "dark" ? { main: ou[400], light: ou[300], dark: ou[700] } : { main: "#ed6c02", light: ou[500], dark: ou[900] };
}
function GC(n3) {
  return `oklch(from ${n3} var(--__l) 0 h / var(--__a))`;
}
function Kp(n3) {
  const { mode: r = "light", contrastThreshold: a = 3, tonalOffset: u = 0.2, colorSpace: f, ...h } = n3, g = n3.primary || HC(r), v = n3.secondary || jC(r), y = n3.error || UC(r), b = n3.info || ZC(r), S = n3.success || qC(r), w = n3.warning || VC(r);
  function A($) {
    return f ? GC($) : rC($, fp.text.primary) >= a ? fp.text.primary : M0.text.primary;
  }
  const P = ({ color: $, name: U, mainShade: V = 500, lightShade: D = 300, darkShade: N = 700 }) => {
    if ($ = { ...$ }, !$.main && $[V] && ($.main = $[V]), !$.hasOwnProperty("main")) throw new Error(br(11, U ? ` (${U})` : "", V));
    if (typeof $.main != "string") throw new Error(br(12, U ? ` (${U})` : "", JSON.stringify($.main)));
    return f ? (Xy(f, $, "light", D, u), Xy(f, $, "dark", N, u)) : (Fy($, "light", D, u), Fy($, "dark", N, u)), $.contrastText || ($.contrastText = A($.main)), $;
  };
  let R;
  return r === "light" ? R = O0() : r === "dark" && (R = A0()), zn({ common: { ...Tu }, mode: r, primary: P({ color: g, name: "primary" }), secondary: P({ color: v, name: "secondary", mainShade: "A400", lightShade: "A200", darkShade: "A700" }), error: P({ color: y, name: "error" }), warning: P({ color: w, name: "warning" }), info: P({ color: b, name: "info" }), success: P({ color: S, name: "success" }), grey: IC, contrastThreshold: a, getContrastText: A, augmentColor: P, tonalOffset: u, ...R }, h);
}
function YC(n3) {
  const r = {};
  return Object.entries(n3).forEach((u) => {
    const [f, h] = u;
    typeof h == "object" && (r[f] = `${h.fontStyle ? `${h.fontStyle} ` : ""}${h.fontVariant ? `${h.fontVariant} ` : ""}${h.fontWeight ? `${h.fontWeight} ` : ""}${h.fontStretch ? `${h.fontStretch} ` : ""}${h.fontSize || ""}${h.lineHeight ? `/${h.lineHeight} ` : ""}${h.fontFamily || ""}`);
  }), r;
}
function FC(n3, r) {
  return { toolbar: { minHeight: 56, [n3.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } }, [n3.up("sm")]: { minHeight: 64 } }, ...r };
}
function XC(n3) {
  return Math.round(n3 * 1e5) / 1e5;
}
const Ky = { textTransform: "uppercase" }, Wy = '"Roboto", "Helvetica", "Arial", sans-serif';
function R0(n3, r) {
  const { fontFamily: a = Wy, fontSize: u = 14, fontWeightLight: f = 300, fontWeightRegular: h = 400, fontWeightMedium: g = 500, fontWeightBold: v = 700, htmlFontSize: y = 16, allVariants: b, pxToRem: S, ...w } = typeof r == "function" ? r(n3) : r, A = u / 14, P = S || (($) => `${$ / y * A}rem`), R = ($, U, V, D, N) => ({ fontFamily: a, fontWeight: $, fontSize: P(U), lineHeight: V, ...a === Wy ? { letterSpacing: `${XC(D / U)}em` } : {}, ...N, ...b }), M = { h1: R(f, 96, 1.167, -1.5), h2: R(f, 60, 1.2, -0.5), h3: R(h, 48, 1.167, 0), h4: R(h, 34, 1.235, 0.25), h5: R(h, 24, 1.334, 0), h6: R(g, 20, 1.6, 0.15), subtitle1: R(h, 16, 1.75, 0.15), subtitle2: R(g, 14, 1.57, 0.1), body1: R(h, 16, 1.5, 0.15), body2: R(h, 14, 1.43, 0.15), button: R(g, 14, 1.75, 0.4, Ky), caption: R(h, 12, 1.66, 0.4), overline: R(h, 12, 2.66, 1, Ky), inherit: { fontFamily: "inherit", fontWeight: "inherit", fontSize: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } };
  return zn({ htmlFontSize: y, pxToRem: P, fontFamily: a, fontSize: u, fontWeightLight: f, fontWeightRegular: h, fontWeightMedium: g, fontWeightBold: v, ...M }, w, { clone: false });
}
const KC = 0.2, WC = 0.14, QC = 0.12;
function on(...n3) {
  return [`${n3[0]}px ${n3[1]}px ${n3[2]}px ${n3[3]}px rgba(0,0,0,${KC})`, `${n3[4]}px ${n3[5]}px ${n3[6]}px ${n3[7]}px rgba(0,0,0,${WC})`, `${n3[8]}px ${n3[9]}px ${n3[10]}px ${n3[11]}px rgba(0,0,0,${QC})`].join(",");
}
const JC = ["none", on(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), on(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), on(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), on(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), on(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), on(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), on(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), on(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), on(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), on(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), on(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), on(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), on(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), on(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), on(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), on(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), on(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), on(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), on(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), on(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), on(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), on(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), on(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), on(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], tT = { easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)", easeOut: "cubic-bezier(0.0, 0, 0.2, 1)", easeIn: "cubic-bezier(0.4, 0, 1, 1)", sharp: "cubic-bezier(0.4, 0, 0.6, 1)" }, eT = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 };
function Qy(n3) {
  return `${Math.round(n3)}ms`;
}
function nT(n3) {
  if (!n3) return 0;
  const r = n3 / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function iT(n3) {
  const r = { ...tT, ...n3.easing }, a = { ...eT, ...n3.duration };
  return { getAutoHeightDuration: nT, create: (f = ["all"], h = {}) => {
    const { duration: g = a.standard, easing: v = r.easeInOut, delay: y = 0, ...b } = h;
    return (Array.isArray(f) ? f : [f]).map((S) => `${S} ${typeof g == "string" ? g : Qy(g)} ${v} ${typeof y == "string" ? y : Qy(y)}`).join(",");
  }, ...n3, easing: r, duration: a };
}
const oT = { mobileStepper: 1e3, fab: 1050, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500 };
function rT(n3) {
  return jo(n3) || typeof n3 > "u" || typeof n3 == "string" || typeof n3 == "boolean" || typeof n3 == "number" || Array.isArray(n3);
}
function L0(n3 = {}) {
  const r = { ...n3 };
  function a(u) {
    const f = Object.entries(u);
    for (let h = 0; h < f.length; h++) {
      const [g, v] = f[h];
      !rT(v) || g.startsWith("unstable_") ? delete u[g] : jo(v) && (u[g] = { ...v }, a(u[g]));
    }
  }
  return a(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Jy(n3) {
  return typeof n3 == "number" ? `${(n3 * 100).toFixed(0)}%` : `calc((${n3}) * 100%)`;
}
const aT = (n3) => {
  if (!Number.isNaN(+n3)) return +n3;
  const r = n3.match(/\d*\.?\d+/g);
  if (!r) return 0;
  let a = 0;
  for (let u = 0; u < r.length; u += 1) a += +r[u];
  return a;
};
function sT(n3) {
  Object.assign(n3, { alpha(r, a) {
    const u = this || n3;
    return u.colorSpace ? `oklch(from ${r} l c h / ${typeof a == "string" ? `calc(${a})` : a})` : u.vars ? `rgba(${r.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof a == "string" ? `calc(${a})` : a})` : Cu(r, aT(a));
  }, lighten(r, a) {
    const u = this || n3;
    return u.colorSpace ? `color-mix(in ${u.colorSpace}, ${r}, #fff ${Jy(a)})` : Nf(r, a);
  }, darken(r, a) {
    const u = this || n3;
    return u.colorSpace ? `color-mix(in ${u.colorSpace}, ${r}, #000 ${Jy(a)})` : Ys(r, a);
  } });
}
function dp(n3 = {}, ...r) {
  const { breakpoints: a, mixins: u = {}, spacing: f, palette: h = {}, transitions: g = {}, typography: v = {}, shape: y, colorSpace: b, ...S } = n3;
  if (n3.vars && n3.generateThemeVars === void 0) throw new Error(br(20));
  const w = Kp({ ...h, colorSpace: b }), A = kf(n3);
  let P = zn(A, { mixins: FC(A.breakpoints, u), palette: w, shadows: JC.slice(), typography: R0(w, v), transitions: iT(g), zIndex: { ...oT } });
  return P = zn(P, S), P = r.reduce((R, M) => zn(R, M), P), P.unstable_sxConfig = { ...Pu, ...S == null ? void 0 : S.unstable_sxConfig }, P.unstable_sx = function(M) {
    return ha({ sx: M, theme: this });
  }, P.toRuntimeSource = L0, sT(P), P;
}
function hp(n3) {
  let r;
  return n3 < 1 ? r = 5.11916 * n3 ** 2 : r = 4.5 * Math.log(n3 + 1) + 2, Math.round(r * 10) / 1e3;
}
const lT = [...Array(25)].map((n3, r) => {
  if (r === 0) return "none";
  const a = hp(r);
  return `linear-gradient(rgba(255 255 255 / ${a}), rgba(255 255 255 / ${a}))`;
});
function P0(n3) {
  return { inputPlaceholder: n3 === "dark" ? 0.5 : 0.42, inputUnderline: n3 === "dark" ? 0.7 : 0.42, switchTrackDisabled: n3 === "dark" ? 0.2 : 0.12, switchTrack: n3 === "dark" ? 0.3 : 0.38 };
}
function z0(n3) {
  return n3 === "dark" ? lT : [];
}
function uT(n3) {
  const { palette: r = { mode: "light" }, opacity: a, overlays: u, colorSpace: f, ...h } = n3, g = Kp({ ...r, colorSpace: f });
  return { palette: g, opacity: { ...P0(g.mode), ...a }, overlays: u || z0(g.mode), ...h };
}
function cT(n3) {
  var _a;
  return !!n3[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!n3[0].match(/sxConfig$/) || n3[0] === "palette" && !!((_a = n3[1]) == null ? void 0 : _a.match(/(mode|contrastThreshold|tonalOffset)/));
}
const fT = (n3) => [...[...Array(25)].map((r, a) => `--${n3 ? `${n3}-` : ""}overlays-${a}`), `--${n3 ? `${n3}-` : ""}palette-AppBar-darkBg`, `--${n3 ? `${n3}-` : ""}palette-AppBar-darkColor`], dT = (n3) => (r, a) => {
  const u = n3.rootSelector || ":root", f = n3.colorSchemeSelector;
  let h = f;
  if (f === "class" && (h = ".%s"), f === "data" && (h = "[data-%s]"), (f == null ? void 0 : f.startsWith("data-")) && !f.includes("%s") && (h = `[${f}="%s"]`), n3.defaultColorScheme === r) {
    if (r === "dark") {
      const g = {};
      return fT(n3.cssVarPrefix).forEach((v) => {
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
function hT(n3, r) {
  r.forEach((a) => {
    n3[a] || (n3[a] = {});
  });
}
function mt(n3, r, a) {
  !n3[r] && a && (n3[r] = a);
}
function cu(n3) {
  return typeof n3 != "string" || !n3.startsWith("hsl") ? n3 : b0(n3);
}
function yr(n3, r) {
  `${r}Channel` in n3 || (n3[`${r}Channel`] = uu(cu(n3[r])));
}
function pT(n3) {
  return typeof n3 == "number" ? `${n3}px` : typeof n3 == "string" || typeof n3 == "function" || Array.isArray(n3) ? n3 : "8px";
}
const No = (n3) => {
  try {
    return n3();
  } catch {
  }
}, mT = (n3 = "mui") => OC(n3);
function Qh(n3, r, a, u, f) {
  if (!a) return;
  a = a === true ? {} : a;
  const h = f === "dark" ? "dark" : "light";
  if (!u) {
    r[f] = uT({ ...a, palette: { mode: h, ...a == null ? void 0 : a.palette }, colorSpace: n3 });
    return;
  }
  const { palette: g, ...v } = dp({ ...u, palette: { mode: h, ...a == null ? void 0 : a.palette }, colorSpace: n3 });
  return r[f] = { ...a, palette: g, opacity: { ...P0(h), ...a == null ? void 0 : a.opacity }, overlays: (a == null ? void 0 : a.overlays) || z0(h) }, v;
}
function gT(n3 = {}, ...r) {
  const { colorSchemes: a = { light: true }, defaultColorScheme: u, disableCssColorScheme: f = false, cssVarPrefix: h = "mui", nativeColor: g = false, shouldSkipGeneratingVar: v = cT, colorSchemeSelector: y = a.light && a.dark ? "media" : void 0, rootSelector: b = ":root", ...S } = n3, w = Object.keys(a)[0], A = u || (a.light && w !== "light" ? "light" : w), P = mT(h), { [A]: R, light: M, dark: $, ...U } = a, V = { ...U };
  let D = R;
  if ((A === "dark" && !("dark" in a) || A === "light" && !("light" in a)) && (D = true), !D) throw new Error(br(21, A));
  let N;
  g && (N = "oklch");
  const k = Qh(N, V, D, S, A);
  M && !V.light && Qh(N, V, M, void 0, "light"), $ && !V.dark && Qh(N, V, $, void 0, "dark");
  let j = { defaultColorScheme: A, ...k, cssVarPrefix: h, colorSchemeSelector: y, rootSelector: b, getCssVar: P, colorSchemes: V, font: { ...YC(k.typography), ...k.font }, spacing: pT(S.spacing) };
  Object.keys(j.colorSchemes).forEach((ot) => {
    const C = j.colorSchemes[ot].palette, st = (et) => {
      const B = et.split("-"), tt = B[1], rt = B[2];
      return P(et, C[tt][rt]);
    };
    C.mode === "light" && (mt(C.common, "background", "#fff"), mt(C.common, "onBackground", "#000")), C.mode === "dark" && (mt(C.common, "background", "#000"), mt(C.common, "onBackground", "#fff"));
    function W(et, B, tt) {
      if (N) {
        let rt;
        return et === Ua && (rt = `transparent ${((1 - tt) * 100).toFixed(0)}%`), et === Ne && (rt = `#000 ${(tt * 100).toFixed(0)}%`), et === $e && (rt = `#fff ${(tt * 100).toFixed(0)}%`), `color-mix(in ${N}, ${B}, ${rt})`;
      }
      return et(B, tt);
    }
    if (hT(C, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), C.mode === "light") {
      mt(C.Alert, "errorColor", W(Ne, C.error.light, 0.6)), mt(C.Alert, "infoColor", W(Ne, C.info.light, 0.6)), mt(C.Alert, "successColor", W(Ne, C.success.light, 0.6)), mt(C.Alert, "warningColor", W(Ne, C.warning.light, 0.6)), mt(C.Alert, "errorFilledBg", st("palette-error-main")), mt(C.Alert, "infoFilledBg", st("palette-info-main")), mt(C.Alert, "successFilledBg", st("palette-success-main")), mt(C.Alert, "warningFilledBg", st("palette-warning-main")), mt(C.Alert, "errorFilledColor", No(() => C.getContrastText(C.error.main))), mt(C.Alert, "infoFilledColor", No(() => C.getContrastText(C.info.main))), mt(C.Alert, "successFilledColor", No(() => C.getContrastText(C.success.main))), mt(C.Alert, "warningFilledColor", No(() => C.getContrastText(C.warning.main))), mt(C.Alert, "errorStandardBg", W($e, C.error.light, 0.9)), mt(C.Alert, "infoStandardBg", W($e, C.info.light, 0.9)), mt(C.Alert, "successStandardBg", W($e, C.success.light, 0.9)), mt(C.Alert, "warningStandardBg", W($e, C.warning.light, 0.9)), mt(C.Alert, "errorIconColor", st("palette-error-main")), mt(C.Alert, "infoIconColor", st("palette-info-main")), mt(C.Alert, "successIconColor", st("palette-success-main")), mt(C.Alert, "warningIconColor", st("palette-warning-main")), mt(C.AppBar, "defaultBg", st("palette-grey-100")), mt(C.Avatar, "defaultBg", st("palette-grey-400")), mt(C.Button, "inheritContainedBg", st("palette-grey-300")), mt(C.Button, "inheritContainedHoverBg", st("palette-grey-A100")), mt(C.Chip, "defaultBorder", st("palette-grey-400")), mt(C.Chip, "defaultAvatarColor", st("palette-grey-700")), mt(C.Chip, "defaultIconColor", st("palette-grey-700")), mt(C.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), mt(C.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), mt(C.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), mt(C.LinearProgress, "primaryBg", W($e, C.primary.main, 0.62)), mt(C.LinearProgress, "secondaryBg", W($e, C.secondary.main, 0.62)), mt(C.LinearProgress, "errorBg", W($e, C.error.main, 0.62)), mt(C.LinearProgress, "infoBg", W($e, C.info.main, 0.62)), mt(C.LinearProgress, "successBg", W($e, C.success.main, 0.62)), mt(C.LinearProgress, "warningBg", W($e, C.warning.main, 0.62)), mt(C.Skeleton, "bg", N ? W(Ua, C.text.primary, 0.11) : `rgba(${st("palette-text-primaryChannel")} / 0.11)`), mt(C.Slider, "primaryTrack", W($e, C.primary.main, 0.62)), mt(C.Slider, "secondaryTrack", W($e, C.secondary.main, 0.62)), mt(C.Slider, "errorTrack", W($e, C.error.main, 0.62)), mt(C.Slider, "infoTrack", W($e, C.info.main, 0.62)), mt(C.Slider, "successTrack", W($e, C.success.main, 0.62)), mt(C.Slider, "warningTrack", W($e, C.warning.main, 0.62));
      const et = N ? W(Ne, C.background.default, 0.6825) : Jc(C.background.default, 0.8);
      mt(C.SnackbarContent, "bg", et), mt(C.SnackbarContent, "color", No(() => N ? fp.text.primary : C.getContrastText(et))), mt(C.SpeedDialAction, "fabHoverBg", Jc(C.background.paper, 0.15)), mt(C.StepConnector, "border", st("palette-grey-400")), mt(C.StepContent, "border", st("palette-grey-400")), mt(C.Switch, "defaultColor", st("palette-common-white")), mt(C.Switch, "defaultDisabledColor", st("palette-grey-100")), mt(C.Switch, "primaryDisabledColor", W($e, C.primary.main, 0.62)), mt(C.Switch, "secondaryDisabledColor", W($e, C.secondary.main, 0.62)), mt(C.Switch, "errorDisabledColor", W($e, C.error.main, 0.62)), mt(C.Switch, "infoDisabledColor", W($e, C.info.main, 0.62)), mt(C.Switch, "successDisabledColor", W($e, C.success.main, 0.62)), mt(C.Switch, "warningDisabledColor", W($e, C.warning.main, 0.62)), mt(C.TableCell, "border", W($e, W(Ua, C.divider, 1), 0.88)), mt(C.Tooltip, "bg", W(Ua, C.grey[700], 0.92));
    }
    if (C.mode === "dark") {
      mt(C.Alert, "errorColor", W($e, C.error.light, 0.6)), mt(C.Alert, "infoColor", W($e, C.info.light, 0.6)), mt(C.Alert, "successColor", W($e, C.success.light, 0.6)), mt(C.Alert, "warningColor", W($e, C.warning.light, 0.6)), mt(C.Alert, "errorFilledBg", st("palette-error-dark")), mt(C.Alert, "infoFilledBg", st("palette-info-dark")), mt(C.Alert, "successFilledBg", st("palette-success-dark")), mt(C.Alert, "warningFilledBg", st("palette-warning-dark")), mt(C.Alert, "errorFilledColor", No(() => C.getContrastText(C.error.dark))), mt(C.Alert, "infoFilledColor", No(() => C.getContrastText(C.info.dark))), mt(C.Alert, "successFilledColor", No(() => C.getContrastText(C.success.dark))), mt(C.Alert, "warningFilledColor", No(() => C.getContrastText(C.warning.dark))), mt(C.Alert, "errorStandardBg", W(Ne, C.error.light, 0.9)), mt(C.Alert, "infoStandardBg", W(Ne, C.info.light, 0.9)), mt(C.Alert, "successStandardBg", W(Ne, C.success.light, 0.9)), mt(C.Alert, "warningStandardBg", W(Ne, C.warning.light, 0.9)), mt(C.Alert, "errorIconColor", st("palette-error-main")), mt(C.Alert, "infoIconColor", st("palette-info-main")), mt(C.Alert, "successIconColor", st("palette-success-main")), mt(C.Alert, "warningIconColor", st("palette-warning-main")), mt(C.AppBar, "defaultBg", st("palette-grey-900")), mt(C.AppBar, "darkBg", st("palette-background-paper")), mt(C.AppBar, "darkColor", st("palette-text-primary")), mt(C.Avatar, "defaultBg", st("palette-grey-600")), mt(C.Button, "inheritContainedBg", st("palette-grey-800")), mt(C.Button, "inheritContainedHoverBg", st("palette-grey-700")), mt(C.Chip, "defaultBorder", st("palette-grey-700")), mt(C.Chip, "defaultAvatarColor", st("palette-grey-300")), mt(C.Chip, "defaultIconColor", st("palette-grey-300")), mt(C.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), mt(C.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), mt(C.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), mt(C.LinearProgress, "primaryBg", W(Ne, C.primary.main, 0.5)), mt(C.LinearProgress, "secondaryBg", W(Ne, C.secondary.main, 0.5)), mt(C.LinearProgress, "errorBg", W(Ne, C.error.main, 0.5)), mt(C.LinearProgress, "infoBg", W(Ne, C.info.main, 0.5)), mt(C.LinearProgress, "successBg", W(Ne, C.success.main, 0.5)), mt(C.LinearProgress, "warningBg", W(Ne, C.warning.main, 0.5)), mt(C.Skeleton, "bg", N ? W(Ua, C.text.primary, 0.13) : `rgba(${st("palette-text-primaryChannel")} / 0.13)`), mt(C.Slider, "primaryTrack", W(Ne, C.primary.main, 0.5)), mt(C.Slider, "secondaryTrack", W(Ne, C.secondary.main, 0.5)), mt(C.Slider, "errorTrack", W(Ne, C.error.main, 0.5)), mt(C.Slider, "infoTrack", W(Ne, C.info.main, 0.5)), mt(C.Slider, "successTrack", W(Ne, C.success.main, 0.5)), mt(C.Slider, "warningTrack", W(Ne, C.warning.main, 0.5));
      const et = N ? W($e, C.background.default, 0.985) : Jc(C.background.default, 0.98);
      mt(C.SnackbarContent, "bg", et), mt(C.SnackbarContent, "color", No(() => N ? M0.text.primary : C.getContrastText(et))), mt(C.SpeedDialAction, "fabHoverBg", Jc(C.background.paper, 0.15)), mt(C.StepConnector, "border", st("palette-grey-600")), mt(C.StepContent, "border", st("palette-grey-600")), mt(C.Switch, "defaultColor", st("palette-grey-300")), mt(C.Switch, "defaultDisabledColor", st("palette-grey-600")), mt(C.Switch, "primaryDisabledColor", W(Ne, C.primary.main, 0.55)), mt(C.Switch, "secondaryDisabledColor", W(Ne, C.secondary.main, 0.55)), mt(C.Switch, "errorDisabledColor", W(Ne, C.error.main, 0.55)), mt(C.Switch, "infoDisabledColor", W(Ne, C.info.main, 0.55)), mt(C.Switch, "successDisabledColor", W(Ne, C.success.main, 0.55)), mt(C.Switch, "warningDisabledColor", W(Ne, C.warning.main, 0.55)), mt(C.TableCell, "border", W(Ne, W(Ua, C.divider, 1), 0.68)), mt(C.Tooltip, "bg", W(Ua, C.grey[700], 0.92));
    }
    yr(C.background, "default"), yr(C.background, "paper"), yr(C.common, "background"), yr(C.common, "onBackground"), yr(C, "divider"), Object.keys(C).forEach((et) => {
      const B = C[et];
      et !== "tonalOffset" && B && typeof B == "object" && (B.main && mt(C[et], "mainChannel", uu(cu(B.main))), B.light && mt(C[et], "lightChannel", uu(cu(B.light))), B.dark && mt(C[et], "darkChannel", uu(cu(B.dark))), B.contrastText && mt(C[et], "contrastTextChannel", uu(cu(B.contrastText))), et === "text" && (yr(C[et], "primary"), yr(C[et], "secondary")), et === "action" && (B.active && yr(C[et], "active"), B.selected && yr(C[et], "selected")));
    });
  }), j = r.reduce((ot, C) => zn(ot, C), j);
  const X = { prefix: h, disableCssColorScheme: f, shouldSkipGeneratingVar: v, getSelector: dT(j), enableContrastVars: g }, { vars: J, generateThemeVars: it, generateStyleSheets: ut } = RC(j, X);
  return j.vars = J, Object.entries(j.colorSchemes[j.defaultColorScheme]).forEach(([ot, C]) => {
    j[ot] = C;
  }), j.generateThemeVars = it, j.generateStyleSheets = ut, j.generateSpacing = function() {
    return h0(S.spacing, Mf(this));
  }, j.getColorSchemeSelector = LC(y), j.spacing = j.generateSpacing(), j.shouldSkipGeneratingVar = v, j.unstable_sxConfig = { ...Pu, ...S == null ? void 0 : S.unstable_sxConfig }, j.unstable_sx = function(C) {
    return ha({ sx: C, theme: this });
  }, j.toRuntimeSource = L0, j;
}
function t_(n3, r, a) {
  n3.colorSchemes && a && (n3.colorSchemes[r] = { ...a !== true && a, palette: Kp({ ...a === true ? {} : a.palette, mode: r }) });
}
function $f(n3 = {}, ...r) {
  const { palette: a, cssVariables: u = false, colorSchemes: f = a ? void 0 : { light: true }, defaultColorScheme: h = a == null ? void 0 : a.mode, ...g } = n3, v = h || "light", y = f == null ? void 0 : f[v], b = { ...f, ...a ? { [v]: { ...typeof y != "boolean" && y, palette: a } } : void 0 };
  if (u === false) {
    if (!("colorSchemes" in n3)) return dp(n3, ...r);
    let S = a;
    "palette" in n3 || b[v] && (b[v] !== true ? S = b[v].palette : v === "dark" && (S = { mode: "dark" }));
    const w = dp({ ...n3, palette: S }, ...r);
    return w.defaultColorScheme = v, w.colorSchemes = b, w.palette.mode === "light" && (w.colorSchemes.light = { ...b.light !== true && b.light, palette: w.palette }, t_(w, "dark", b.dark)), w.palette.mode === "dark" && (w.colorSchemes.dark = { ...b.dark !== true && b.dark, palette: w.palette }, t_(w, "light", b.light)), w;
  }
  return !a && !("light" in b) && v === "light" && (b.light = true), gT({ ...g, colorSchemes: b, defaultColorScheme: v, ...typeof u != "boolean" && u }, ...r);
}
const Wp = $f();
function Qa() {
  const n3 = Bf(Wp);
  return n3[Uo] || n3;
}
function k0(n3) {
  return n3 !== "ownerState" && n3 !== "theme" && n3 !== "sx" && n3 !== "as";
}
const Co = (n3) => k0(n3) && n3 !== "classes", Mt = _0({ themeId: Uo, defaultTheme: Wp, rootShouldForwardProp: Co });
function vT({ theme: n3, ...r }) {
  const a = Uo in n3 ? n3[Uo] : void 0;
  return Z.jsx(w0, { ...r, themeId: a ? Uo : void 0, theme: a || n3 });
}
const tf = { colorSchemeStorageKey: "mui-color-scheme", defaultLightColorScheme: "light", defaultDarkColorScheme: "dark", modeStorageKey: "mui-mode" }, { CssVarsProvider: yT } = EC({ themeId: Uo, theme: () => $f({ cssVariables: true }), colorSchemeStorageKey: tf.colorSchemeStorageKey, modeStorageKey: tf.modeStorageKey, defaultColorScheme: { light: tf.defaultLightColorScheme, dark: tf.defaultDarkColorScheme }, resolveTheme: (n3) => {
  const r = { ...n3, typography: R0(n3.palette, n3.typography) };
  return r.unstable_sx = function(u) {
    return ha({ sx: u, theme: this });
  }, r;
} }), _T = yT;
function bT({ theme: n3, ...r }) {
  const a = O.useMemo(() => {
    if (typeof n3 == "function") return n3;
    const u = Uo in n3 ? n3[Uo] : n3;
    return "colorSchemes" in u ? null : "vars" in u ? n3 : { ...n3, vars: null };
  }, [n3]);
  return a ? Z.jsx(vT, { theme: a, ...r }) : Z.jsx(_T, { theme: n3, ...r });
}
const xT = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true, pp = 15, Fs = 7, mp = { w: 6, h: xT ? 13 : 12 }, If = { h: (window.innerHeight - pp * 2) / mp.h, w: (window.innerWidth - pp * 2) / mp.w }, ST = { spacing: `${Fs}px`, resolution: mp, units: If }, Jh = `${If.h - Fs}px`, tp = `${(If.h - Fs) / 2}px`, CT = `${(If.h - Fs) / 4}px`, TT = { pedone: "#ed4347", wheelchair: "#0875f9", visuallyImpaired: "#ff8ec7", elderly: "#41ce69", parent: "#ff9848" };
function wT(n3 = "pedone") {
  const r = TT[n3] || "#000000", a = "#f5f5f5";
  return $f({ mainContainerPadding: `${pp}px`, iconH: Jh, grid: ST, brdRad: tp, offRad: CT, palette: { primary: { main: r, contrastText: r }, secondary: { main: a, contrastText: a }, text: { primary: r, secondary: `${r}aa` }, background: { main: "#f5f5f5" } }, noBlurShadows: { active: `${Fs / 2}px ${Fs / 2}px 0 ${r}`, none: `0 0 0 ${r}`, transition: "box-shadow 0.2s ease-in-out" }, typography: { fontFamily: "Work Sans" }, components: { MuiButton: { styleOverrides: { root: { borderRadius: 8, border: `2px solid ${r}`, boxShadow: `0 2px 6px ${r}55`, color: r, "&:hover": { backgroundColor: `${r}10` } } } }, MuiChip: { styleOverrides: { root: { borderRadius: tp, color: r, border: `2px solid ${r}`, backgroundColor: a } } }, MuiIconButton: { styleOverrides: { root: { width: Jh, height: Jh, borderRadius: tp, backgroundColor: r, "&:focus": { backgroundColor: Ys(r, 0.15) }, "&:hover": { backgroundColor: Ys(r, 0.15) }, "&.Mui-disabled": { color: r, backgroundColor: a, border: `2px solid ${r}` } } }, variants: [{ props: { variant: "mini" }, style: { color: r, backgroundColor: a, border: `4px solid ${r}`, transform: "scale(0.5)", "&:hover": {} } }] } } });
}
function e_(...n3) {
  return n3.reduce((r, a) => a == null ? r : function(...f) {
    r.apply(this, f), a.apply(this, f);
  }, () => {
  });
}
function ET(n3) {
  return Z.jsx(p0, { ...n3, defaultTheme: Wp, themeId: Uo });
}
function Qp(n3) {
  return function(a) {
    return Z.jsx(ET, { styles: typeof n3 == "function" ? (u) => n3({ theme: u, ...a }) : n3 });
  };
}
function OT() {
  return Vp;
}
const Ee = yC;
function ze(n3) {
  return pC(n3);
}
function MT(n3) {
  return Re("MuiSvgIcon", n3);
}
Le("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const AT = (n3) => {
  const { color: r, fontSize: a, classes: u } = n3, f = { root: ["root", r !== "inherit" && `color${Ct(r)}`, `fontSize${Ct(a)}`] };
  return Pe(f, MT, u);
}, RT = Mt("svg", { name: "MuiSvgIcon", slot: "Root", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.root, a.color !== "inherit" && r[`color${Ct(a.color)}`], r[`fontSize${Ct(a.fontSize)}`]];
} })(Ee(({ theme: n3 }) => {
  var _a, _b, _c, _d, _e, _f2, _g, _h, _i, _j, _k, _l, _m2, _n;
  return { userSelect: "none", width: "1em", height: "1em", display: "inline-block", flexShrink: 0, transition: (_d = (_a = n3.transitions) == null ? void 0 : _a.create) == null ? void 0 : _d.call(_a, "fill", { duration: (_c = (_b = (n3.vars ?? n3).transitions) == null ? void 0 : _b.duration) == null ? void 0 : _c.shorter }), variants: [{ props: (r) => !r.hasSvgAsChild, style: { fill: "currentColor" } }, { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } }, { props: { fontSize: "small" }, style: { fontSize: ((_f2 = (_e = n3.typography) == null ? void 0 : _e.pxToRem) == null ? void 0 : _f2.call(_e, 20)) || "1.25rem" } }, { props: { fontSize: "medium" }, style: { fontSize: ((_h = (_g = n3.typography) == null ? void 0 : _g.pxToRem) == null ? void 0 : _h.call(_g, 24)) || "1.5rem" } }, { props: { fontSize: "large" }, style: { fontSize: ((_j = (_i = n3.typography) == null ? void 0 : _i.pxToRem) == null ? void 0 : _j.call(_i, 35)) || "2.1875rem" } }, ...Object.entries((n3.vars ?? n3).palette).filter(([, r]) => r && r.main).map(([r]) => {
    var _a2, _b2;
    return { props: { color: r }, style: { color: (_b2 = (_a2 = (n3.vars ?? n3).palette) == null ? void 0 : _a2[r]) == null ? void 0 : _b2.main } };
  }), { props: { color: "action" }, style: { color: (_l = (_k = (n3.vars ?? n3).palette) == null ? void 0 : _k.action) == null ? void 0 : _l.active } }, { props: { color: "disabled" }, style: { color: (_n = (_m2 = (n3.vars ?? n3).palette) == null ? void 0 : _m2.action) == null ? void 0 : _n.disabled } }, { props: { color: "inherit" }, style: { color: void 0 } }] };
})), gp = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiSvgIcon" }), { children: f, className: h, color: g = "inherit", component: v = "svg", fontSize: y = "medium", htmlColor: b, inheritViewBox: S = false, titleAccess: w, viewBox: A = "0 0 24 24", ...P } = u, R = O.isValidElement(f) && f.type === "svg", M = { ...u, color: g, component: v, fontSize: y, instanceFontSize: r.fontSize, inheritViewBox: S, viewBox: A, hasSvgAsChild: R }, $ = {};
  S || ($.viewBox = A);
  const U = AT(M);
  return Z.jsxs(RT, { as: v, className: Yt(U.root, h), focusable: "false", color: b, "aria-hidden": w ? void 0 : true, role: w ? "img" : void 0, ref: a, ...$, ...P, ...R && f.props, ownerState: M, children: [R ? f.props.children : f, w ? Z.jsx("title", { children: w }) : null] });
});
gp.muiName = "SvgIcon";
function Ja(n3, r) {
  function a(u, f) {
    return Z.jsx(gp, { "data-testid": void 0, ref: f, ...u, children: n3 });
  }
  return a.muiName = gp.muiName, O.memo(O.forwardRef(a));
}
function B0(n3, r = 166) {
  let a;
  function u(...f) {
    const h = () => {
      n3.apply(this, f);
    };
    clearTimeout(a), a = setTimeout(h, r);
  }
  return u.clear = () => {
    clearTimeout(a);
  }, u;
}
function ji(n3) {
  return n3 && n3.ownerDocument || document;
}
function xr(n3) {
  return ji(n3).defaultView || window;
}
function vp(n3, r) {
  typeof n3 == "function" ? n3(r) : n3 && (n3.current = r);
}
function pu(n3) {
  const { controlled: r, default: a, name: u, state: f = "value" } = n3, { current: h } = O.useRef(r !== void 0), [g, v] = O.useState(a), y = h ? r : g, b = O.useCallback((S) => {
    h || v(S);
  }, []);
  return [y, b];
}
function bo(n3) {
  const r = O.useRef(n3);
  return So(() => {
    r.current = n3;
  }), O.useRef((...a) => (0, r.current)(...a)).current;
}
function Un(...n3) {
  const r = O.useRef(void 0), a = O.useCallback((u) => {
    const f = n3.map((h) => {
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
  }, n3);
  return O.useMemo(() => n3.every((u) => u == null) ? null : (u) => {
    r.current && (r.current(), r.current = void 0), u != null && (r.current = a(u));
  }, n3);
}
function LT(n3, r) {
  const a = n3.charCodeAt(2);
  return n3[0] === "o" && n3[1] === "n" && a >= 65 && a <= 90 && typeof r == "function";
}
function PT(n3, r) {
  if (!n3) return r;
  function a(g, v) {
    const y = {};
    return Object.keys(v).forEach((b) => {
      LT(b, v[b]) && typeof g[b] == "function" && (y[b] = (...S) => {
        g[b](...S), v[b](...S);
      });
    }), y;
  }
  if (typeof n3 == "function" || typeof r == "function") return (g) => {
    const v = typeof r == "function" ? r(g) : r, y = typeof n3 == "function" ? n3({ ...g, ...v }) : n3, b = Yt(g == null ? void 0 : g.className, v == null ? void 0 : v.className, y == null ? void 0 : y.className), S = a(y, v);
    return { ...v, ...y, ...S, ...!!b && { className: b }, ...(v == null ? void 0 : v.style) && (y == null ? void 0 : y.style) && { style: { ...v.style, ...y.style } }, ...(v == null ? void 0 : v.sx) && (y == null ? void 0 : y.sx) && { sx: [...Array.isArray(v.sx) ? v.sx : [v.sx], ...Array.isArray(y.sx) ? y.sx : [y.sx]] } };
  };
  const u = r, f = a(n3, u), h = Yt(u == null ? void 0 : u.className, n3 == null ? void 0 : n3.className);
  return { ...r, ...n3, ...f, ...!!h && { className: h }, ...(u == null ? void 0 : u.style) && (n3 == null ? void 0 : n3.style) && { style: { ...u.style, ...n3.style } }, ...(u == null ? void 0 : u.sx) && (n3 == null ? void 0 : n3.sx) && { sx: [...Array.isArray(u.sx) ? u.sx : [u.sx], ...Array.isArray(n3.sx) ? n3.sx : [n3.sx]] } };
}
function D0(n3, r) {
  if (n3 == null) return {};
  var a = {};
  for (var u in n3) if ({}.hasOwnProperty.call(n3, u)) {
    if (r.indexOf(u) !== -1) continue;
    a[u] = n3[u];
  }
  return a;
}
function yp(n3, r) {
  return yp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, u) {
    return a.__proto__ = u, a;
  }, yp(n3, r);
}
function N0(n3, r) {
  n3.prototype = Object.create(r.prototype), n3.prototype.constructor = n3, yp(n3, r);
}
var Jp = Y_();
const ef = Lp(Jp), n_ = { disabled: false }, gf = Xn.createContext(null);
var zT = function(r) {
  return r.scrollTop;
}, fu = "unmounted", qa = "exited", Va = "entering", Zs = "entered", _p = "exiting", Go = function(n3) {
  N0(r, n3);
  function r(u, f) {
    var h;
    h = n3.call(this, u, f) || this;
    var g = f, v = g && !g.isMounting ? u.enter : u.appear, y;
    return h.appearStatus = null, u.in ? v ? (y = qa, h.appearStatus = Va) : y = Zs : u.unmountOnExit || u.mountOnEnter ? y = fu : y = qa, h.state = { status: y }, h.nextCallback = null, h;
  }
  r.getDerivedStateFromProps = function(f, h) {
    var g = f.in;
    return g && h.status === fu ? { status: qa } : null;
  };
  var a = r.prototype;
  return a.componentDidMount = function() {
    this.updateStatus(true, this.appearStatus);
  }, a.componentDidUpdate = function(f) {
    var h = null;
    if (f !== this.props) {
      var g = this.state.status;
      this.props.in ? g !== Va && g !== Zs && (h = Va) : (g === Va || g === Zs) && (h = _p);
    }
    this.updateStatus(false, h);
  }, a.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, a.getTimeouts = function() {
    var f = this.props.timeout, h, g, v;
    return h = g = v = f, f != null && typeof f != "number" && (h = f.exit, g = f.enter, v = f.appear !== void 0 ? f.appear : g), { exit: h, enter: g, appear: v };
  }, a.updateStatus = function(f, h) {
    if (f === void 0 && (f = false), h !== null) if (this.cancelNextCallback(), h === Va) {
      if (this.props.unmountOnExit || this.props.mountOnEnter) {
        var g = this.props.nodeRef ? this.props.nodeRef.current : ef.findDOMNode(this);
        g && zT(g);
      }
      this.performEnter(f);
    } else this.performExit();
    else this.props.unmountOnExit && this.state.status === qa && this.setState({ status: fu });
  }, a.performEnter = function(f) {
    var h = this, g = this.props.enter, v = this.context ? this.context.isMounting : f, y = this.props.nodeRef ? [v] : [ef.findDOMNode(this), v], b = y[0], S = y[1], w = this.getTimeouts(), A = v ? w.appear : w.enter;
    if (!f && !g || n_.disabled) {
      this.safeSetState({ status: Zs }, function() {
        h.props.onEntered(b);
      });
      return;
    }
    this.props.onEnter(b, S), this.safeSetState({ status: Va }, function() {
      h.props.onEntering(b, S), h.onTransitionEnd(A, function() {
        h.safeSetState({ status: Zs }, function() {
          h.props.onEntered(b, S);
        });
      });
    });
  }, a.performExit = function() {
    var f = this, h = this.props.exit, g = this.getTimeouts(), v = this.props.nodeRef ? void 0 : ef.findDOMNode(this);
    if (!h || n_.disabled) {
      this.safeSetState({ status: qa }, function() {
        f.props.onExited(v);
      });
      return;
    }
    this.props.onExit(v), this.safeSetState({ status: _p }, function() {
      f.props.onExiting(v), f.onTransitionEnd(g.exit, function() {
        f.safeSetState({ status: qa }, function() {
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
    var g = this.props.nodeRef ? this.props.nodeRef.current : ef.findDOMNode(this), v = f == null && !this.props.addEndListener;
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
    var v = D0(h, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return Xn.createElement(gf.Provider, { value: null }, typeof g == "function" ? g(f, v) : Xn.cloneElement(Xn.Children.only(g), v));
  }, r;
}(Xn.Component);
Go.contextType = gf;
Go.propTypes = {};
function Us() {
}
Go.defaultProps = { in: false, mountOnEnter: false, unmountOnExit: false, appear: false, enter: true, exit: true, onEnter: Us, onEntering: Us, onEntered: Us, onExit: Us, onExiting: Us, onExited: Us };
Go.UNMOUNTED = fu;
Go.EXITED = qa;
Go.ENTERING = Va;
Go.ENTERED = Zs;
Go.EXITING = _p;
function kT(n3) {
  if (n3 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n3;
}
function tm(n3, r) {
  var a = function(h) {
    return r && O.isValidElement(h) ? r(h) : h;
  }, u = /* @__PURE__ */ Object.create(null);
  return n3 && O.Children.map(n3, function(f) {
    return f;
  }).forEach(function(f) {
    u[f.key] = a(f);
  }), u;
}
function BT(n3, r) {
  n3 = n3 || {}, r = r || {};
  function a(S) {
    return S in r ? r[S] : n3[S];
  }
  var u = /* @__PURE__ */ Object.create(null), f = [];
  for (var h in n3) h in r ? f.length && (u[h] = f, f = []) : f.push(h);
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
function Ya(n3, r, a) {
  return a[r] != null ? a[r] : n3.props[r];
}
function DT(n3, r) {
  return tm(n3.children, function(a) {
    return O.cloneElement(a, { onExited: r.bind(null, a), in: true, appear: Ya(a, "appear", n3), enter: Ya(a, "enter", n3), exit: Ya(a, "exit", n3) });
  });
}
function NT(n3, r, a) {
  var u = tm(n3.children), f = BT(r, u);
  return Object.keys(f).forEach(function(h) {
    var g = f[h];
    if (O.isValidElement(g)) {
      var v = h in r, y = h in u, b = r[h], S = O.isValidElement(b) && !b.props.in;
      y && (!v || S) ? f[h] = O.cloneElement(g, { onExited: a.bind(null, g), in: true, exit: Ya(g, "exit", n3), enter: Ya(g, "enter", n3) }) : !y && v && !S ? f[h] = O.cloneElement(g, { in: false }) : y && v && O.isValidElement(b) && (f[h] = O.cloneElement(g, { onExited: a.bind(null, g), in: b.props.in, exit: Ya(g, "exit", n3), enter: Ya(g, "enter", n3) }));
    }
  }), f;
}
var $T = Object.values || function(n3) {
  return Object.keys(n3).map(function(r) {
    return n3[r];
  });
}, IT = { component: "div", childFactory: function(r) {
  return r;
} }, em = function(n3) {
  N0(r, n3);
  function r(u, f) {
    var h;
    h = n3.call(this, u, f) || this;
    var g = h.handleExited.bind(kT(h));
    return h.state = { contextValue: { isMounting: true }, handleExited: g, firstRender: true }, h;
  }
  var a = r.prototype;
  return a.componentDidMount = function() {
    this.mounted = true, this.setState({ contextValue: { isMounting: false } });
  }, a.componentWillUnmount = function() {
    this.mounted = false;
  }, r.getDerivedStateFromProps = function(f, h) {
    var g = h.children, v = h.handleExited, y = h.firstRender;
    return { children: y ? DT(f, v) : NT(f, g, v), firstRender: false };
  }, a.handleExited = function(f, h) {
    var g = tm(this.props.children);
    f.key in g || (f.props.onExited && f.props.onExited(h), this.mounted && this.setState(function(v) {
      var y = hf({}, v.children);
      return delete y[f.key], { children: y };
    }));
  }, a.render = function() {
    var f = this.props, h = f.component, g = f.childFactory, v = D0(f, ["component", "childFactory"]), y = this.state.contextValue, b = $T(this.state.children).map(g);
    return delete v.appear, delete v.enter, delete v.exit, h === null ? Xn.createElement(gf.Provider, { value: y }, b) : Xn.createElement(gf.Provider, { value: y }, Xn.createElement(h, v, b));
  }, r;
}(Xn.Component);
em.propTypes = {};
em.defaultProps = IT;
const i_ = {};
function $0(n3, r) {
  const a = O.useRef(i_);
  return a.current === i_ && (a.current = n3(r)), a;
}
const HT = [];
function jT(n3) {
  O.useEffect(n3, HT);
}
class nm {
  constructor() {
    __publicField(this, "currentId", null);
    __publicField(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    __publicField(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new nm();
  }
  start(r, a) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, a();
    }, r);
  }
}
function I0() {
  const n3 = $0(nm.create).current;
  return jT(n3.disposeEffect), n3;
}
const H0 = (n3) => n3.scrollTop;
function vf(n3, r) {
  const { timeout: a, easing: u, style: f = {} } = n3;
  return { duration: f.transitionDuration ?? (typeof a == "number" ? a : a[r.mode] || 0), easing: f.transitionTimingFunction ?? (typeof u == "object" ? u[r.mode] : u), delay: f.transitionDelay };
}
function UT(n3) {
  return Re("MuiPaper", n3);
}
Le("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const ZT = (n3) => {
  const { square: r, elevation: a, variant: u, classes: f } = n3, h = { root: ["root", u, !r && "rounded", u === "elevation" && `elevation${a}`] };
  return Pe(h, UT, f);
}, qT = Mt("div", { name: "MuiPaper", slot: "Root", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.root, r[a.variant], !a.square && r.rounded, a.variant === "elevation" && r[`elevation${a.elevation}`]];
} })(Ee(({ theme: n3 }) => ({ backgroundColor: (n3.vars || n3).palette.background.paper, color: (n3.vars || n3).palette.text.primary, transition: n3.transitions.create("box-shadow"), variants: [{ props: ({ ownerState: r }) => !r.square, style: { borderRadius: n3.shape.borderRadius } }, { props: { variant: "outlined" }, style: { border: `1px solid ${(n3.vars || n3).palette.divider}` } }, { props: { variant: "elevation" }, style: { boxShadow: "var(--Paper-shadow)", backgroundImage: "var(--Paper-overlay)" } }] }))), im = O.forwardRef(function(r, a) {
  var _a;
  const u = ze({ props: r, name: "MuiPaper" }), f = Qa(), { className: h, component: g = "div", elevation: v = 1, square: y = false, variant: b = "elevation", ...S } = u, w = { ...u, component: g, elevation: v, square: y, variant: b }, A = ZT(w);
  return Z.jsx(qT, { as: g, ownerState: w, className: Yt(A.root, h), ref: a, ...S, style: { ...b === "elevation" && { "--Paper-shadow": (f.vars || f).shadows[v], ...f.vars && { "--Paper-overlay": (_a = f.vars.overlays) == null ? void 0 : _a[v] }, ...!f.vars && f.palette.mode === "dark" && { "--Paper-overlay": `linear-gradient(${Cu("#fff", hp(v))}, ${Cu("#fff", hp(v))})` } }, ...S.style } });
});
function yf(n3) {
  return typeof n3 == "string";
}
function j0(n3, r, a) {
  return n3 === void 0 || yf(n3) ? r : { ...r, ownerState: { ...r.ownerState, ...a } };
}
function U0(n3, r, a) {
  return typeof n3 == "function" ? n3(r, a) : n3;
}
function Z0(n3, r = []) {
  if (n3 === void 0) return {};
  const a = {};
  return Object.keys(n3).filter((u) => u.match(/^on[A-Z]/) && typeof n3[u] == "function" && !r.includes(u)).forEach((u) => {
    a[u] = n3[u];
  }), a;
}
function o_(n3) {
  if (n3 === void 0) return {};
  const r = {};
  return Object.keys(n3).filter((a) => !(a.match(/^on[A-Z]/) && typeof n3[a] == "function")).forEach((a) => {
    r[a] = n3[a];
  }), r;
}
function q0(n3) {
  const { getSlotProps: r, additionalProps: a, externalSlotProps: u, externalForwardedProps: f, className: h } = n3;
  if (!r) {
    const P = Yt(a == null ? void 0 : a.className, h, f == null ? void 0 : f.className, u == null ? void 0 : u.className), R = { ...a == null ? void 0 : a.style, ...f == null ? void 0 : f.style, ...u == null ? void 0 : u.style }, M = { ...a, ...f, ...u };
    return P.length > 0 && (M.className = P), Object.keys(R).length > 0 && (M.style = R), { props: M, internalRef: void 0 };
  }
  const g = Z0({ ...f, ...u }), v = o_(u), y = o_(f), b = r(g), S = Yt(b == null ? void 0 : b.className, a == null ? void 0 : a.className, h, f == null ? void 0 : f.className, u == null ? void 0 : u.className), w = { ...b == null ? void 0 : b.style, ...a == null ? void 0 : a.style, ...f == null ? void 0 : f.style, ...u == null ? void 0 : u.style }, A = { ...b, ...a, ...y, ...v };
  return S.length > 0 && (A.className = S), Object.keys(w).length > 0 && (A.style = w), { props: A, internalRef: b.ref };
}
function vn(n3, r) {
  const { className: a, elementType: u, ownerState: f, externalForwardedProps: h, internalForwardedProps: g, shouldForwardComponentProp: v = false, ...y } = r, { component: b, slots: S = { [n3]: void 0 }, slotProps: w = { [n3]: void 0 }, ...A } = h, P = S[n3] || u, R = U0(w[n3], f), { props: { component: M, ...$ }, internalRef: U } = q0({ className: a, ...y, externalForwardedProps: n3 === "root" ? A : void 0, externalSlotProps: R }), V = Un(U, R == null ? void 0 : R.ref, r.ref), D = n3 === "root" ? M || b : M, N = j0(P, { ...n3 === "root" && !b && !S[n3] && g, ...n3 !== "root" && !S[n3] && g, ...$, ...D && !v && { as: D }, ...D && v && { component: D }, ref: V }, f);
  return [P, N];
}
function _f(n3) {
  try {
    return n3.matches(":focus-visible");
  } catch {
  }
  return false;
}
class bf {
  constructor() {
    __publicField(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = true, this.mounted.resolve());
    });
    this.ref = { current: null }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
  }
  static create() {
    return new bf();
  }
  static use() {
    const r = $0(bf.create).current, [a, u] = O.useState(false);
    return r.shouldMount = a, r.setShouldMount = u, O.useEffect(r.mountEffect, [a]), r;
  }
  mount() {
    return this.mounted || (this.mounted = GT(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  start(...r) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.start(...r);
    });
  }
  stop(...r) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.stop(...r);
    });
  }
  pulsate(...r) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.pulsate(...r);
    });
  }
}
function VT() {
  return bf.use();
}
function GT() {
  let n3, r;
  const a = new Promise((u, f) => {
    n3 = u, r = f;
  });
  return a.resolve = n3, a.reject = r, a;
}
function YT(n3) {
  const { className: r, classes: a, pulsate: u = false, rippleX: f, rippleY: h, rippleSize: g, in: v, onExited: y, timeout: b } = n3, [S, w] = O.useState(false), A = Yt(r, a.ripple, a.rippleVisible, u && a.ripplePulsate), P = { width: g, height: g, top: -(g / 2) + h, left: -(g / 2) + f }, R = Yt(a.child, S && a.childLeaving, u && a.childPulsate);
  return !v && !S && w(true), O.useEffect(() => {
    if (!v && y != null) {
      const M = setTimeout(y, b);
      return () => {
        clearTimeout(M);
      };
    }
  }, [y, v, b]), Z.jsx("span", { className: A, style: P, children: Z.jsx("span", { className: R }) });
}
const eo = Le("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), bp = 550, FT = 80, XT = Ru`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, KT = Ru`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, WT = Ru`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, QT = Mt("span", { name: "MuiTouchRipple", slot: "Root" })({ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: 0, top: 0, right: 0, bottom: 0, left: 0, borderRadius: "inherit" }), JT = Mt(YT, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${eo.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${XT};
    animation-duration: ${bp}ms;
    animation-timing-function: ${({ theme: n3 }) => n3.transitions.easing.easeInOut};
  }

  &.${eo.ripplePulsate} {
    animation-duration: ${({ theme: n3 }) => n3.transitions.duration.shorter}ms;
  }

  & .${eo.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${eo.childLeaving} {
    opacity: 0;
    animation-name: ${KT};
    animation-duration: ${bp}ms;
    animation-timing-function: ${({ theme: n3 }) => n3.transitions.easing.easeInOut};
  }

  & .${eo.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${WT};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: n3 }) => n3.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, tw = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiTouchRipple" }), { center: f = false, classes: h = {}, className: g, ...v } = u, [y, b] = O.useState([]), S = O.useRef(0), w = O.useRef(null);
  O.useEffect(() => {
    w.current && (w.current(), w.current = null);
  }, [y]);
  const A = O.useRef(false), P = I0(), R = O.useRef(null), M = O.useRef(null), $ = O.useCallback((N) => {
    const { pulsate: k, rippleX: j, rippleY: X, rippleSize: J, cb: it } = N;
    b((ut) => [...ut, Z.jsx(JT, { classes: { ripple: Yt(h.ripple, eo.ripple), rippleVisible: Yt(h.rippleVisible, eo.rippleVisible), ripplePulsate: Yt(h.ripplePulsate, eo.ripplePulsate), child: Yt(h.child, eo.child), childLeaving: Yt(h.childLeaving, eo.childLeaving), childPulsate: Yt(h.childPulsate, eo.childPulsate) }, timeout: bp, pulsate: k, rippleX: j, rippleY: X, rippleSize: J }, S.current)]), S.current += 1, w.current = it;
  }, [h]), U = O.useCallback((N = {}, k = {}, j = () => {
  }) => {
    const { pulsate: X = false, center: J = f || k.pulsate, fakeElement: it = false } = k;
    if ((N == null ? void 0 : N.type) === "mousedown" && A.current) {
      A.current = false;
      return;
    }
    (N == null ? void 0 : N.type) === "touchstart" && (A.current = true);
    const ut = it ? null : M.current, ot = ut ? ut.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
    let C, st, W;
    if (J || N === void 0 || N.clientX === 0 && N.clientY === 0 || !N.clientX && !N.touches) C = Math.round(ot.width / 2), st = Math.round(ot.height / 2);
    else {
      const { clientX: et, clientY: B } = N.touches && N.touches.length > 0 ? N.touches[0] : N;
      C = Math.round(et - ot.left), st = Math.round(B - ot.top);
    }
    if (J) W = Math.sqrt((2 * ot.width ** 2 + ot.height ** 2) / 3), W % 2 === 0 && (W += 1);
    else {
      const et = Math.max(Math.abs((ut ? ut.clientWidth : 0) - C), C) * 2 + 2, B = Math.max(Math.abs((ut ? ut.clientHeight : 0) - st), st) * 2 + 2;
      W = Math.sqrt(et ** 2 + B ** 2);
    }
    (N == null ? void 0 : N.touches) ? R.current === null && (R.current = () => {
      $({ pulsate: X, rippleX: C, rippleY: st, rippleSize: W, cb: j });
    }, P.start(FT, () => {
      R.current && (R.current(), R.current = null);
    })) : $({ pulsate: X, rippleX: C, rippleY: st, rippleSize: W, cb: j });
  }, [f, $, P]), V = O.useCallback(() => {
    U({}, { pulsate: true });
  }, [U]), D = O.useCallback((N, k) => {
    if (P.clear(), (N == null ? void 0 : N.type) === "touchend" && R.current) {
      R.current(), R.current = null, P.start(0, () => {
        D(N, k);
      });
      return;
    }
    R.current = null, b((j) => j.length > 0 ? j.slice(1) : j), w.current = k;
  }, [P]);
  return O.useImperativeHandle(a, () => ({ pulsate: V, start: U, stop: D }), [V, U, D]), Z.jsx(QT, { className: Yt(eo.root, h.root, g), ref: M, ...v, children: Z.jsx(em, { component: null, exit: true, children: y }) });
});
function ew(n3) {
  return Re("MuiButtonBase", n3);
}
const nw = Le("MuiButtonBase", ["root", "disabled", "focusVisible"]), iw = (n3) => {
  const { disabled: r, focusVisible: a, focusVisibleClassName: u, classes: f } = n3, g = Pe({ root: ["root", r && "disabled", a && "focusVisible"] }, ew, f);
  return a && u && (g.root += ` ${u}`), g;
}, ow = Mt("button", { name: "MuiButtonBase", slot: "Root" })({ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", boxSizing: "border-box", WebkitTapHighlightColor: "transparent", backgroundColor: "transparent", outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: "pointer", userSelect: "none", verticalAlign: "middle", MozAppearance: "none", WebkitAppearance: "none", textDecoration: "none", color: "inherit", "&::-moz-focus-inner": { borderStyle: "none" }, [`&.${nw.disabled}`]: { pointerEvents: "none", cursor: "default" }, "@media print": { colorAdjust: "exact" } }), xf = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiButtonBase" }), { action: f, centerRipple: h = false, children: g, className: v, component: y = "button", disabled: b = false, disableRipple: S = false, disableTouchRipple: w = false, focusRipple: A = false, focusVisibleClassName: P, LinkComponent: R = "a", onBlur: M, onClick: $, onContextMenu: U, onDragLeave: V, onFocus: D, onFocusVisible: N, onKeyDown: k, onKeyUp: j, onMouseDown: X, onMouseLeave: J, onMouseUp: it, onTouchEnd: ut, onTouchMove: ot, onTouchStart: C, tabIndex: st = 0, TouchRippleProps: W, touchRippleRef: et, type: B, ...tt } = u, rt = O.useRef(null), gt = VT(), z = Un(gt.ref, et), [Y, ft] = O.useState(false);
  b && Y && ft(false), O.useImperativeHandle(f, () => ({ focusVisible: () => {
    ft(true), rt.current.focus();
  } }), []);
  const dt = gt.shouldMount && !S && !b;
  O.useEffect(() => {
    Y && A && !S && gt.pulsate();
  }, [S, A, Y, gt]);
  const bt = _r(gt, "start", X, w), _t = _r(gt, "stop", U, w), ct = _r(gt, "stop", V, w), At = _r(gt, "stop", it, w), Pt = _r(gt, "stop", (Ot) => {
    Y && Ot.preventDefault(), J && J(Ot);
  }, w), $t = _r(gt, "start", C, w), Rt = _r(gt, "stop", ut, w), Ut = _r(gt, "stop", ot, w), Wt = _r(gt, "stop", (Ot) => {
    _f(Ot.target) || ft(false), M && M(Ot);
  }, false), te = bo((Ot) => {
    rt.current || (rt.current = Ot.currentTarget), _f(Ot.target) && (ft(true), N && N(Ot)), D && D(Ot);
  }), qt = () => {
    const Ot = rt.current;
    return y && y !== "button" && !(Ot.tagName === "A" && Ot.href);
  }, de = bo((Ot) => {
    A && !Ot.repeat && Y && Ot.key === " " && gt.stop(Ot, () => {
      gt.start(Ot);
    }), Ot.target === Ot.currentTarget && qt() && Ot.key === " " && Ot.preventDefault(), k && k(Ot), Ot.target === Ot.currentTarget && qt() && Ot.key === "Enter" && !b && (Ot.preventDefault(), $ && $(Ot));
  }), ie = bo((Ot) => {
    A && Ot.key === " " && Y && !Ot.defaultPrevented && gt.stop(Ot, () => {
      gt.pulsate(Ot);
    }), j && j(Ot), $ && Ot.target === Ot.currentTarget && qt() && Ot.key === " " && !Ot.defaultPrevented && $(Ot);
  });
  let ue = y;
  ue === "button" && (tt.href || tt.to) && (ue = R);
  const Tt = {};
  ue === "button" ? (Tt.type = B === void 0 ? "button" : B, Tt.disabled = b) : (!tt.href && !tt.to && (Tt.role = "button"), b && (Tt["aria-disabled"] = b));
  const _e = Un(a, rt), Bt = { ...u, centerRipple: h, component: y, disabled: b, disableRipple: S, disableTouchRipple: w, focusRipple: A, tabIndex: st, focusVisible: Y }, Jt = iw(Bt);
  return Z.jsxs(ow, { as: ue, className: Yt(Jt.root, v), ownerState: Bt, onBlur: Wt, onClick: $, onContextMenu: _t, onFocus: te, onKeyDown: de, onKeyUp: ie, onMouseDown: bt, onMouseLeave: Pt, onMouseUp: At, onDragLeave: ct, onTouchEnd: Rt, onTouchMove: Ut, onTouchStart: $t, ref: _e, tabIndex: b ? -1 : st, type: B, ...Tt, ...tt, children: [g, dt ? Z.jsx(tw, { ref: z, center: h, ...W }) : null] });
});
function _r(n3, r, a, u = false) {
  return bo((f) => (a && a(f), u || n3[r](f), true));
}
function rw(n3) {
  return typeof n3.main == "string";
}
function aw(n3, r = []) {
  if (!rw(n3)) return false;
  for (const a of r) if (!n3.hasOwnProperty(a) || typeof n3[a] != "string") return false;
  return true;
}
function xi(n3 = []) {
  return ([, r]) => r && aw(r, n3);
}
function sw(n3) {
  return Re("MuiCircularProgress", n3);
}
Le("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const _o = 44, xp = Ru`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Sp = Ru`
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
`, lw = typeof xp != "string" ? Hp`
        animation: ${xp} 1.4s linear infinite;
      ` : null, uw = typeof Sp != "string" ? Hp`
        animation: ${Sp} 1.4s ease-in-out infinite;
      ` : null, cw = (n3) => {
  const { classes: r, variant: a, color: u, disableShrink: f } = n3, h = { root: ["root", a, `color${Ct(u)}`], svg: ["svg"], track: ["track"], circle: ["circle", `circle${Ct(a)}`, f && "circleDisableShrink"] };
  return Pe(h, sw, r);
}, fw = Mt("span", { name: "MuiCircularProgress", slot: "Root", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.root, r[a.variant], r[`color${Ct(a.color)}`]];
} })(Ee(({ theme: n3 }) => ({ display: "inline-block", variants: [{ props: { variant: "determinate" }, style: { transition: n3.transitions.create("transform") } }, { props: { variant: "indeterminate" }, style: lw || { animation: `${xp} 1.4s linear infinite` } }, ...Object.entries(n3.palette).filter(xi()).map(([r]) => ({ props: { color: r }, style: { color: (n3.vars || n3).palette[r].main } }))] }))), dw = Mt("svg", { name: "MuiCircularProgress", slot: "Svg" })({ display: "block" }), hw = Mt("circle", { name: "MuiCircularProgress", slot: "Circle", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.circle, r[`circle${Ct(a.variant)}`], a.disableShrink && r.circleDisableShrink];
} })(Ee(({ theme: n3 }) => ({ stroke: "currentColor", variants: [{ props: { variant: "determinate" }, style: { transition: n3.transitions.create("stroke-dashoffset") } }, { props: { variant: "indeterminate" }, style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 } }, { props: ({ ownerState: r }) => r.variant === "indeterminate" && !r.disableShrink, style: uw || { animation: `${Sp} 1.4s ease-in-out infinite` } }] }))), pw = Mt("circle", { name: "MuiCircularProgress", slot: "Track" })(Ee(({ theme: n3 }) => ({ stroke: "currentColor", opacity: (n3.vars || n3).palette.action.activatedOpacity }))), om = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiCircularProgress" }), { className: f, color: h = "primary", disableShrink: g = false, enableTrackSlot: v = false, size: y = 40, style: b, thickness: S = 3.6, value: w = 0, variant: A = "indeterminate", ...P } = u, R = { ...u, color: h, disableShrink: g, size: y, thickness: S, value: w, variant: A, enableTrackSlot: v }, M = cw(R), $ = {}, U = {}, V = {};
  if (A === "determinate") {
    const D = 2 * Math.PI * ((_o - S) / 2);
    $.strokeDasharray = D.toFixed(3), V["aria-valuenow"] = Math.round(w), $.strokeDashoffset = `${((100 - w) / 100 * D).toFixed(3)}px`, U.transform = "rotate(-90deg)";
  }
  return Z.jsx(fw, { className: Yt(M.root, f), style: { width: y, height: y, ...U, ...b }, ownerState: R, ref: a, role: "progressbar", ...V, ...P, children: Z.jsxs(dw, { className: M.svg, ownerState: R, viewBox: `${_o / 2} ${_o / 2} ${_o} ${_o}`, children: [v ? Z.jsx(pw, { className: M.track, ownerState: R, cx: _o, cy: _o, r: (_o - S) / 2, fill: "none", strokeWidth: S, "aria-hidden": "true" }) : null, Z.jsx(hw, { className: M.circle, style: $, ownerState: R, cx: _o, cy: _o, r: (_o - S) / 2, fill: "none", strokeWidth: S })] }) });
});
function mw(n3) {
  return Re("MuiIconButton", n3);
}
const r_ = Le("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), gw = (n3) => {
  const { classes: r, disabled: a, color: u, edge: f, size: h, loading: g } = n3, v = { root: ["root", g && "loading", a && "disabled", u !== "default" && `color${Ct(u)}`, f && `edge${Ct(f)}`, `size${Ct(h)}`], loadingIndicator: ["loadingIndicator"], loadingWrapper: ["loadingWrapper"] };
  return Pe(v, mw, r);
}, vw = Mt(xf, { name: "MuiIconButton", slot: "Root", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.root, a.loading && r.loading, a.color !== "default" && r[`color${Ct(a.color)}`], a.edge && r[`edge${Ct(a.edge)}`], r[`size${Ct(a.size)}`]];
} })(Ee(({ theme: n3 }) => ({ textAlign: "center", flex: "0 0 auto", fontSize: n3.typography.pxToRem(24), padding: 8, borderRadius: "50%", color: (n3.vars || n3).palette.action.active, transition: n3.transitions.create("background-color", { duration: n3.transitions.duration.shortest }), variants: [{ props: (r) => !r.disableRipple, style: { "--IconButton-hoverBg": n3.alpha((n3.vars || n3).palette.action.active, (n3.vars || n3).palette.action.hoverOpacity), "&:hover": { backgroundColor: "var(--IconButton-hoverBg)", "@media (hover: none)": { backgroundColor: "transparent" } } } }, { props: { edge: "start" }, style: { marginLeft: -12 } }, { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } }, { props: { edge: "end" }, style: { marginRight: -12 } }, { props: { edge: "end", size: "small" }, style: { marginRight: -3 } }] })), Ee(({ theme: n3 }) => ({ variants: [{ props: { color: "inherit" }, style: { color: "inherit" } }, ...Object.entries(n3.palette).filter(xi()).map(([r]) => ({ props: { color: r }, style: { color: (n3.vars || n3).palette[r].main } })), ...Object.entries(n3.palette).filter(xi()).map(([r]) => ({ props: { color: r }, style: { "--IconButton-hoverBg": n3.alpha((n3.vars || n3).palette[r].main, (n3.vars || n3).palette.action.hoverOpacity) } })), { props: { size: "small" }, style: { padding: 5, fontSize: n3.typography.pxToRem(18) } }, { props: { size: "large" }, style: { padding: 12, fontSize: n3.typography.pxToRem(28) } }], [`&.${r_.disabled}`]: { backgroundColor: "transparent", color: (n3.vars || n3).palette.action.disabled }, [`&.${r_.loading}`]: { color: "transparent" } }))), yw = Mt("span", { name: "MuiIconButton", slot: "LoadingIndicator" })(({ theme: n3 }) => ({ display: "none", position: "absolute", visibility: "visible", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: (n3.vars || n3).palette.action.disabled, variants: [{ props: { loading: true }, style: { display: "flex" } }] })), Ka = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiIconButton" }), { edge: f = false, children: h, className: g, color: v = "default", disabled: y = false, disableFocusRipple: b = false, size: S = "medium", id: w, loading: A = null, loadingIndicator: P, ...R } = u, M = el(w), $ = P ?? Z.jsx(om, { "aria-labelledby": M, color: "inherit", size: 16 }), U = { ...u, edge: f, color: v, disabled: y, disableFocusRipple: b, loading: A, loadingIndicator: $, size: S }, V = gw(U);
  return Z.jsxs(vw, { id: A ? M : w, className: Yt(V.root, g), centerRipple: true, focusRipple: !b, disabled: y || A, ref: a, ...R, ownerState: U, children: [typeof A == "boolean" && Z.jsx("span", { className: V.loadingWrapper, style: { display: "contents" }, children: Z.jsx(yw, { className: V.loadingIndicator, ownerState: U, children: A && $ }) }), h] });
}), _w = Ja(Z.jsx("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }));
function bw(n3) {
  return Re("MuiTypography", n3);
}
Le("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const xw = { primary: true, secondary: true, error: true, info: true, success: true, warning: true, textPrimary: true, textSecondary: true, textDisabled: true }, Sw = OT(), Cw = (n3) => {
  const { align: r, gutterBottom: a, noWrap: u, paragraph: f, variant: h, classes: g } = n3, v = { root: ["root", h, n3.align !== "inherit" && `align${Ct(r)}`, a && "gutterBottom", u && "noWrap", f && "paragraph"] };
  return Pe(v, bw, g);
}, Tw = Mt("span", { name: "MuiTypography", slot: "Root", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.root, a.variant && r[a.variant], a.align !== "inherit" && r[`align${Ct(a.align)}`], a.noWrap && r.noWrap, a.gutterBottom && r.gutterBottom, a.paragraph && r.paragraph];
} })(Ee(({ theme: n3 }) => {
  var _a;
  return { margin: 0, variants: [{ props: { variant: "inherit" }, style: { font: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } }, ...Object.entries(n3.typography).filter(([r, a]) => r !== "inherit" && a && typeof a == "object").map(([r, a]) => ({ props: { variant: r }, style: a })), ...Object.entries(n3.palette).filter(xi()).map(([r]) => ({ props: { color: r }, style: { color: (n3.vars || n3).palette[r].main } })), ...Object.entries(((_a = n3.palette) == null ? void 0 : _a.text) || {}).filter(([, r]) => typeof r == "string").map(([r]) => ({ props: { color: `text${Ct(r)}` }, style: { color: (n3.vars || n3).palette.text[r] } })), { props: ({ ownerState: r }) => r.align !== "inherit", style: { textAlign: "var(--Typography-textAlign)" } }, { props: ({ ownerState: r }) => r.noWrap, style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, { props: ({ ownerState: r }) => r.gutterBottom, style: { marginBottom: "0.35em" } }, { props: ({ ownerState: r }) => r.paragraph, style: { marginBottom: 16 } }] };
})), a_ = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6", subtitle1: "h6", subtitle2: "h6", body1: "p", body2: "p", inherit: "p" }, rm = O.forwardRef(function(r, a) {
  const { color: u, ...f } = ze({ props: r, name: "MuiTypography" }), h = !xw[u], g = Sw({ ...f, ...h && { color: u } }), { align: v = "inherit", className: y, component: b, gutterBottom: S = false, noWrap: w = false, paragraph: A = false, variant: P = "body1", variantMapping: R = a_, ...M } = g, $ = { ...g, align: v, color: u, className: y, component: b, gutterBottom: S, noWrap: w, paragraph: A, variant: P, variantMapping: R }, U = b || (A ? "p" : R[P] || a_[P]) || "span", V = Cw($);
  return Z.jsx(Tw, { as: U, ref: a, className: Yt(V.root, y), ...M, ownerState: $, style: { ...v !== "inherit" && { "--Typography-textAlign": v }, ...M.style } });
});
function ww(n3) {
  const r = O.useRef({});
  return O.useEffect(() => {
    r.current = n3;
  }), r.current;
}
function s_({ array1: n3, array2: r, parser: a = (u) => u }) {
  return n3 && r && n3.length === r.length && n3.every((u, f) => a(u) === a(r[f]));
}
function l_(n3) {
  return n3.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function V0(n3 = {}) {
  const { ignoreAccents: r = true, ignoreCase: a = true, limit: u, matchFrom: f = "any", stringify: h, trim: g = false } = n3;
  return (v, { inputValue: y, getOptionLabel: b }) => {
    let S = g ? y.trim() : y;
    a && (S = S.toLowerCase()), r && (S = l_(S));
    const w = S ? v.filter((A) => {
      let P = (h || b)(A);
      return a && (P = P.toLowerCase()), r && (P = l_(P)), f === "start" ? P.startsWith(S) : P.includes(S);
    }) : v;
    return typeof u == "number" ? w.slice(0, u) : w;
  };
}
const Ew = V0(), Ow = 5, Mw = (n3) => {
  var _a;
  return n3.current !== null && ((_a = n3.current.parentElement) == null ? void 0 : _a.contains(document.activeElement));
}, Aw = [];
function u_(n3, r, a, u) {
  if (r || n3 == null || u) return "";
  const f = a(n3);
  return typeof f == "string" ? f : "";
}
function Rw(n3) {
  const { unstable_isActiveElementInListbox: r = Mw, unstable_classNamePrefix: a = "Mui", autoComplete: u = false, autoHighlight: f = false, autoSelect: h = false, blurOnSelect: g = false, clearOnBlur: v = !n3.freeSolo, clearOnEscape: y = false, componentName: b = "useAutocomplete", defaultValue: S = n3.multiple ? Aw : null, disableClearable: w = false, disableCloseOnSelect: A = false, disabled: P, disabledItemsFocusable: R = false, disableListWrap: M = false, filterOptions: $ = Ew, filterSelectedOptions: U = false, freeSolo: V = false, getOptionDisabled: D, getOptionKey: N, getOptionLabel: k = (pt) => pt.label ?? pt, groupBy: j, handleHomeEndKeys: X = !n3.freeSolo, id: J, includeInputInList: it = false, inputValue: ut, isOptionEqualToValue: ot = (pt, ht) => pt === ht, multiple: C = false, onChange: st, onClose: W, onHighlightChange: et, onInputChange: B, onOpen: tt, open: rt, openOnFocus: gt = false, options: z, readOnly: Y = false, renderValue: ft, selectOnFocus: dt = !n3.freeSolo, value: bt } = n3, _t = el(J);
  let ct = k;
  ct = (pt) => {
    const ht = k(pt);
    return typeof ht != "string" ? String(ht) : ht;
  };
  const At = O.useRef(false), Pt = O.useRef(true), $t = O.useRef(null), Rt = O.useRef(null), [Ut, Wt] = O.useState(null), [te, qt] = O.useState(-1), de = f ? 0 : -1, ie = O.useRef(de), ue = O.useRef(u_(S ?? bt, C, ct)).current, [Tt, _e] = pu({ controlled: bt, default: S, name: b }), [Bt, Jt] = pu({ controlled: ut, default: ue, name: b, state: "inputValue" }), [Ot, tn] = O.useState(false), be = O.useCallback((pt, ht, wt) => {
    if (!(C ? Tt.length < ht.length : ht !== null) && !v) return;
    const Ft = u_(ht, C, ct, ft);
    Bt !== Ft && (Jt(Ft), B && B(pt, Ft, wt));
  }, [ct, Bt, C, B, Jt, v, Tt, ft]), [qe, ce] = pu({ controlled: rt, default: false, name: b, state: "open" }), [Vt, oe] = O.useState(true), he = !C && Tt != null && Bt === ct(Tt), xe = qe && !Y, jt = xe ? $(z.filter((pt) => !(U && (C ? Tt : [Tt]).some((ht) => ht !== null && ot(pt, ht)))), { inputValue: he && Vt ? "" : Bt, getOptionLabel: ct }) : [], cn = ww({ filteredOptions: jt, value: Tt, inputValue: Bt });
  O.useEffect(() => {
    const pt = Tt !== cn.value;
    Ot && !pt || V && !pt || be(null, Tt, "reset");
  }, [Tt, be, Ot, cn.value, V]);
  const kn = qe && jt.length > 0 && !Y, rn = bo((pt) => {
    if (pt === -1) $t.current.focus();
    else {
      const ht = ft ? "data-item-index" : "data-tag-index";
      Ut.querySelector(`[${ht}="${pt}"]`).focus();
    }
  });
  O.useEffect(() => {
    C && te > Tt.length - 1 && (qt(-1), rn(-1));
  }, [Tt, C, te, rn]);
  function kt(pt, ht) {
    if (!Rt.current || pt < 0 || pt >= jt.length) return -1;
    let wt = pt;
    for (; ; ) {
      const It = Rt.current.querySelector(`[data-option-index="${wt}"]`), Ft = R ? false : !It || It.disabled || It.getAttribute("aria-disabled") === "true";
      if (It && It.hasAttribute("tabindex") && !Ft) return wt;
      if (ht === "next" ? wt = (wt + 1) % jt.length : wt = (wt - 1 + jt.length) % jt.length, wt === pt) return -1;
    }
  }
  const ne = bo(({ event: pt, index: ht, reason: wt }) => {
    if (ie.current = ht, ht === -1 ? $t.current.removeAttribute("aria-activedescendant") : $t.current.setAttribute("aria-activedescendant", `${_t}-option-${ht}`), et && ["mouse", "keyboard", "touch"].includes(wt) && et(pt, ht === -1 ? null : jt[ht], wt), !Rt.current) return;
    const It = Rt.current.querySelector(`[role="option"].${a}-focused`);
    It && (It.classList.remove(`${a}-focused`), It.classList.remove(`${a}-focusVisible`));
    let Ft = Rt.current;
    if (Rt.current.getAttribute("role") !== "listbox" && (Ft = Rt.current.parentElement.querySelector('[role="listbox"]')), !Ft) return;
    if (ht === -1) {
      Ft.scrollTop = 0;
      return;
    }
    const Ge = Rt.current.querySelector(`[data-option-index="${ht}"]`);
    if (Ge && (Ge.classList.add(`${a}-focused`), wt === "keyboard" && Ge.classList.add(`${a}-focusVisible`), Ft.scrollHeight > Ft.clientHeight && wt !== "mouse" && wt !== "touch")) {
      const Ye = Ge, Jn = Ft.clientHeight + Ft.scrollTop, co = Ye.offsetTop + Ye.offsetHeight;
      co > Jn ? Ft.scrollTop = co - Ft.clientHeight : Ye.offsetTop - Ye.offsetHeight * (j ? 1.3 : 0) < Ft.scrollTop && (Ft.scrollTop = Ye.offsetTop - Ye.offsetHeight * (j ? 1.3 : 0));
    }
  }), re = bo(({ event: pt, diff: ht, direction: wt = "next", reason: It }) => {
    if (!xe) return;
    const Ge = kt((() => {
      const Ye = jt.length - 1;
      if (ht === "reset") return de;
      if (ht === "start") return 0;
      if (ht === "end") return Ye;
      const Jn = ie.current + ht;
      return Jn < 0 ? Jn === -1 && it ? -1 : M && ie.current !== -1 || Math.abs(ht) > 1 ? 0 : Ye : Jn > Ye ? Jn === Ye + 1 && it ? -1 : M || Math.abs(ht) > 1 ? Ye : 0 : Jn;
    })(), wt);
    if (ne({ index: Ge, reason: It, event: pt }), u && ht !== "reset") if (Ge === -1) $t.current.value = Bt;
    else {
      const Ye = ct(jt[Ge]);
      $t.current.value = Ye, Ye.toLowerCase().indexOf(Bt.toLowerCase()) === 0 && Bt.length > 0 && $t.current.setSelectionRange(Bt.length, Ye.length);
    }
  }), Kn = !s_({ array1: cn.filteredOptions, array2: jt, parser: ct }), so = () => {
    const pt = (ht, wt) => {
      const It = ht ? ct(ht) : "", Ft = wt ? ct(wt) : "";
      return It === Ft;
    };
    if (ie.current !== -1 && !s_({ array1: cn.filteredOptions, array2: jt, parser: ct }) && cn.inputValue === Bt && (C ? Tt.length === cn.value.length && cn.value.every((ht, wt) => ct(Tt[wt]) === ct(ht)) : pt(cn.value, Tt))) {
      const ht = cn.filteredOptions[ie.current];
      if (ht) return jt.findIndex((wt) => ct(wt) === ct(ht));
    }
    return -1;
  }, lo = O.useCallback(() => {
    if (!xe) return;
    const pt = so();
    if (pt !== -1) {
      ie.current = pt;
      return;
    }
    const ht = C ? Tt[0] : Tt;
    if (jt.length === 0 || ht == null) {
      re({ diff: "reset" });
      return;
    }
    if (Rt.current) {
      if (ht != null) {
        const wt = jt[ie.current];
        if (C && wt && Tt.findIndex((Ft) => ot(wt, Ft)) !== -1) return;
        const It = jt.findIndex((Ft) => ot(Ft, ht));
        It === -1 ? re({ diff: "reset" }) : ne({ index: It });
        return;
      }
      if (ie.current >= jt.length - 1) {
        ne({ index: jt.length - 1 });
        return;
      }
      ne({ index: ie.current });
    }
  }, [jt.length, C ? false : Tt, U, re, ne, xe, Bt, C]), Wn = bo((pt) => {
    vp(Rt, pt), pt && lo();
  });
  O.useEffect(() => {
    (Kn || xe) && lo();
  }, [lo, Kn, xe]);
  const Tn = (pt) => {
    qe || (ce(true), oe(true), tt && tt(pt));
  }, uo = (pt, ht) => {
    qe && (ce(false), W && W(pt, ht));
  }, ui = (pt, ht, wt, It) => {
    if (C) {
      if (Tt.length === ht.length && Tt.every((Ft, Ge) => Ft === ht[Ge])) return;
    } else if (Tt === ht) return;
    st && st(pt, ht, wt, It), _e(ht);
  }, ci = O.useRef(false), fi = (pt, ht, wt = "selectOption", It = "options") => {
    let Ft = wt, Ge = ht;
    if (C) {
      Ge = Array.isArray(Tt) ? Tt.slice() : [];
      const Ye = Ge.findIndex((Jn) => ot(ht, Jn));
      Ye === -1 ? Ge.push(ht) : It !== "freeSolo" && (Ge.splice(Ye, 1), Ft = "removeOption");
    }
    be(pt, Ge, Ft), ui(pt, Ge, Ft, { option: ht }), !A && (!pt || !pt.ctrlKey && !pt.metaKey) && uo(pt, Ft), (g === true || g === "touch" && ci.current || g === "mouse" && !ci.current) && $t.current.blur();
  };
  function Yo(pt, ht) {
    if (pt === -1) return -1;
    let wt = pt;
    for (; ; ) {
      if (ht === "next" && wt === Tt.length || ht === "previous" && wt === -1) return -1;
      const It = ft ? "data-item-index" : "data-tag-index", Ft = Ut.querySelector(`[${It}="${wt}"]`);
      if (!Ft || !Ft.hasAttribute("tabindex") || Ft.disabled || Ft.getAttribute("aria-disabled") === "true") wt += ht === "next" ? 1 : -1;
      else return wt;
    }
  }
  const Zi = (pt, ht) => {
    if (!C) return;
    Bt === "" && uo(pt, "toggleInput");
    let wt = te;
    te === -1 ? Bt === "" && ht === "previous" && (wt = Tt.length - 1) : (wt += ht === "next" ? 1 : -1, wt < 0 && (wt = 0), wt === Tt.length && (wt = -1)), wt = Yo(wt, ht), qt(wt), rn(wt);
  }, To = (pt) => {
    At.current = true, Jt(""), B && B(pt, "", "clear"), ui(pt, C ? [] : null, "clear");
  }, di = (pt) => (ht) => {
    if (pt.onKeyDown && pt.onKeyDown(ht), !ht.defaultMuiPrevented && (te !== -1 && !["ArrowLeft", "ArrowRight"].includes(ht.key) && (qt(-1), rn(-1)), ht.which !== 229)) switch (ht.key) {
      case "Home":
        xe && X && (ht.preventDefault(), re({ diff: "start", direction: "next", reason: "keyboard", event: ht }));
        break;
      case "End":
        xe && X && (ht.preventDefault(), re({ diff: "end", direction: "previous", reason: "keyboard", event: ht }));
        break;
      case "PageUp":
        ht.preventDefault(), re({ diff: -5, direction: "previous", reason: "keyboard", event: ht }), Tn(ht);
        break;
      case "PageDown":
        ht.preventDefault(), re({ diff: Ow, direction: "next", reason: "keyboard", event: ht }), Tn(ht);
        break;
      case "ArrowDown":
        ht.preventDefault(), re({ diff: 1, direction: "next", reason: "keyboard", event: ht }), Tn(ht);
        break;
      case "ArrowUp":
        ht.preventDefault(), re({ diff: -1, direction: "previous", reason: "keyboard", event: ht }), Tn(ht);
        break;
      case "ArrowLeft":
        !C && ft ? rn(0) : Zi(ht, "previous");
        break;
      case "ArrowRight":
        !C && ft ? rn(-1) : Zi(ht, "next");
        break;
      case "Enter":
        if (ie.current !== -1 && xe) {
          const wt = jt[ie.current], It = D ? D(wt) : false;
          if (ht.preventDefault(), It) return;
          fi(ht, wt, "selectOption"), u && $t.current.setSelectionRange($t.current.value.length, $t.current.value.length);
        } else V && Bt !== "" && he === false && (C && ht.preventDefault(), fi(ht, Bt, "createOption", "freeSolo"));
        break;
      case "Escape":
        xe ? (ht.preventDefault(), ht.stopPropagation(), uo(ht, "escape")) : y && (Bt !== "" || C && Tt.length > 0 || ft) && (ht.preventDefault(), ht.stopPropagation(), To(ht));
        break;
      case "Backspace":
        if (C && !Y && Bt === "" && Tt.length > 0) {
          const wt = te === -1 ? Tt.length - 1 : te, It = Tt.slice();
          It.splice(wt, 1), ui(ht, It, "removeOption", { option: Tt[wt] });
        }
        !C && ft && !Y && (_e(null), rn(-1));
        break;
      case "Delete":
        if (C && !Y && Bt === "" && Tt.length > 0 && te !== -1) {
          const wt = te, It = Tt.slice();
          It.splice(wt, 1), ui(ht, It, "removeOption", { option: Tt[wt] });
        }
        !C && ft && !Y && (_e(null), rn(-1));
        break;
    }
  }, Qe = (pt) => {
    tn(true), gt && !At.current && Tn(pt);
  }, an = (pt) => {
    if (r(Rt)) {
      $t.current.focus();
      return;
    }
    tn(false), Pt.current = true, At.current = false, h && ie.current !== -1 && xe ? fi(pt, jt[ie.current], "blur") : h && V && Bt !== "" ? fi(pt, Bt, "blur", "freeSolo") : v && be(pt, Tt, "blur"), uo(pt, "blur");
  }, hi = (pt) => {
    const ht = pt.target.value;
    Bt !== ht && (Jt(ht), oe(false), B && B(pt, ht, "input")), ht === "" ? !w && !C && ui(pt, null, "clear") : Tn(pt);
  }, wn = (pt) => {
    const ht = Number(pt.currentTarget.getAttribute("data-option-index"));
    ie.current !== ht && ne({ event: pt, index: ht, reason: "mouse" });
  }, Dt = (pt) => {
    ne({ event: pt, index: Number(pt.currentTarget.getAttribute("data-option-index")), reason: "touch" }), ci.current = true;
  }, Cr = (pt) => {
    const ht = Number(pt.currentTarget.getAttribute("data-option-index"));
    fi(pt, jt[ht], "selectOption"), ci.current = false;
  }, Fo = (pt) => (ht) => {
    const wt = Tt.slice();
    wt.splice(pt, 1), ui(ht, wt, "removeOption", { option: Tt[pt] });
  }, pi = (pt) => {
    ui(pt, null, "removeOption", { option: Tt });
  }, Ve = (pt) => {
    qe ? uo(pt, "toggleInput") : Tn(pt);
  }, ke = (pt) => {
    pt.currentTarget.contains(pt.target) && pt.target.getAttribute("id") !== _t && pt.preventDefault();
  }, En = (pt) => {
    pt.currentTarget.contains(pt.target) && ($t.current.focus(), dt && Pt.current && $t.current.selectionEnd - $t.current.selectionStart === 0 && $t.current.select(), Pt.current = false);
  }, Zn = (pt) => {
    !P && (Bt === "" || !qe) && Ve(pt);
  };
  let Qn = V && Bt.length > 0;
  Qn = Qn || (C ? Tt.length > 0 : Tt !== null);
  let Je = jt;
  return j && (Je = jt.reduce((pt, ht, wt) => {
    const It = j(ht);
    return pt.length > 0 && pt[pt.length - 1].group === It ? pt[pt.length - 1].options.push(ht) : pt.push({ key: wt, index: wt, group: It, options: [ht] }), pt;
  }, [])), P && Ot && an(), { getRootProps: (pt = {}) => ({ ...pt, onKeyDown: di(pt), onMouseDown: ke, onClick: En }), getInputLabelProps: () => ({ id: `${_t}-label`, htmlFor: _t }), getInputProps: () => ({ id: _t, value: Bt, onBlur: an, onFocus: Qe, onChange: hi, onMouseDown: Zn, "aria-activedescendant": xe ? "" : null, "aria-autocomplete": u ? "both" : "list", "aria-controls": kn ? `${_t}-listbox` : void 0, "aria-expanded": kn, autoComplete: "off", ref: $t, autoCapitalize: "none", spellCheck: "false", role: "combobox", disabled: P }), getClearProps: () => ({ tabIndex: -1, type: "button", onClick: To }), getItemProps: ({ index: pt = 0 } = {}) => ({ ...C && { key: pt }, ...ft ? { "data-item-index": pt } : { "data-tag-index": pt }, tabIndex: -1, ...!Y && { onDelete: C ? Fo(pt) : pi } }), getPopupIndicatorProps: () => ({ tabIndex: -1, type: "button", onClick: Ve }), getTagProps: ({ index: pt }) => ({ key: pt, "data-tag-index": pt, tabIndex: -1, ...!Y && { onDelete: Fo(pt) } }), getListboxProps: () => ({ role: "listbox", id: `${_t}-listbox`, "aria-labelledby": `${_t}-label`, ref: Wn, onMouseDown: (pt) => {
    pt.preventDefault();
  } }), getOptionProps: ({ index: pt, option: ht }) => {
    const wt = (C ? Tt : [Tt]).some((Ft) => Ft != null && ot(ht, Ft)), It = D ? D(ht) : false;
    return { key: (N == null ? void 0 : N(ht)) ?? ct(ht), tabIndex: -1, role: "option", id: `${_t}-option-${pt}`, onMouseMove: wn, onClick: Cr, onTouchStart: Dt, "data-option-index": pt, "aria-disabled": It, "aria-selected": wt };
  }, id: _t, inputValue: Bt, value: Tt, dirty: Qn, expanded: xe && Ut, popupOpen: xe, focused: Ot || te !== -1, anchorEl: Ut, setAnchorEl: Wt, focusedItem: te, focusedTag: te, groupedOptions: Je };
}
var Si = "top", oo = "bottom", ro = "right", Ci = "left", am = "auto", zu = [Si, oo, ro, Ci], Xs = "start", wu = "end", Lw = "clippingParents", G0 = "viewport", ru = "popper", Pw = "reference", c_ = zu.reduce(function(n3, r) {
  return n3.concat([r + "-" + Xs, r + "-" + wu]);
}, []), Y0 = [].concat(zu, [am]).reduce(function(n3, r) {
  return n3.concat([r, r + "-" + Xs, r + "-" + wu]);
}, []), zw = "beforeRead", kw = "read", Bw = "afterRead", Dw = "beforeMain", Nw = "main", $w = "afterMain", Iw = "beforeWrite", Hw = "write", jw = "afterWrite", Uw = [zw, kw, Bw, Dw, Nw, $w, Iw, Hw, jw];
function Vo(n3) {
  return n3 ? (n3.nodeName || "").toLowerCase() : null;
}
function Ui(n3) {
  if (n3 == null) return window;
  if (n3.toString() !== "[object Window]") {
    var r = n3.ownerDocument;
    return r && r.defaultView || window;
  }
  return n3;
}
function Wa(n3) {
  var r = Ui(n3).Element;
  return n3 instanceof r || n3 instanceof Element;
}
function io(n3) {
  var r = Ui(n3).HTMLElement;
  return n3 instanceof r || n3 instanceof HTMLElement;
}
function sm(n3) {
  if (typeof ShadowRoot > "u") return false;
  var r = Ui(n3).ShadowRoot;
  return n3 instanceof r || n3 instanceof ShadowRoot;
}
function Zw(n3) {
  var r = n3.state;
  Object.keys(r.elements).forEach(function(a) {
    var u = r.styles[a] || {}, f = r.attributes[a] || {}, h = r.elements[a];
    !io(h) || !Vo(h) || (Object.assign(h.style, u), Object.keys(f).forEach(function(g) {
      var v = f[g];
      v === false ? h.removeAttribute(g) : h.setAttribute(g, v === true ? "" : v);
    }));
  });
}
function qw(n3) {
  var r = n3.state, a = { popper: { position: r.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(r.elements.popper.style, a.popper), r.styles = a, r.elements.arrow && Object.assign(r.elements.arrow.style, a.arrow), function() {
    Object.keys(r.elements).forEach(function(u) {
      var f = r.elements[u], h = r.attributes[u] || {}, g = Object.keys(r.styles.hasOwnProperty(u) ? r.styles[u] : a[u]), v = g.reduce(function(y, b) {
        return y[b] = "", y;
      }, {});
      !io(f) || !Vo(f) || (Object.assign(f.style, v), Object.keys(h).forEach(function(y) {
        f.removeAttribute(y);
      }));
    });
  };
}
const Vw = { name: "applyStyles", enabled: true, phase: "write", fn: Zw, effect: qw, requires: ["computeStyles"] };
function qo(n3) {
  return n3.split("-")[0];
}
var Fa = Math.max, Sf = Math.min, Ks = Math.round;
function Cp() {
  var n3 = navigator.userAgentData;
  return n3 != null && n3.brands && Array.isArray(n3.brands) ? n3.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function F0() {
  return !/^((?!chrome|android).)*safari/i.test(Cp());
}
function Ws(n3, r, a) {
  r === void 0 && (r = false), a === void 0 && (a = false);
  var u = n3.getBoundingClientRect(), f = 1, h = 1;
  r && io(n3) && (f = n3.offsetWidth > 0 && Ks(u.width) / n3.offsetWidth || 1, h = n3.offsetHeight > 0 && Ks(u.height) / n3.offsetHeight || 1);
  var g = Wa(n3) ? Ui(n3) : window, v = g.visualViewport, y = !F0() && a, b = (u.left + (y && v ? v.offsetLeft : 0)) / f, S = (u.top + (y && v ? v.offsetTop : 0)) / h, w = u.width / f, A = u.height / h;
  return { width: w, height: A, top: S, right: b + w, bottom: S + A, left: b, x: b, y: S };
}
function lm(n3) {
  var r = Ws(n3), a = n3.offsetWidth, u = n3.offsetHeight;
  return Math.abs(r.width - a) <= 1 && (a = r.width), Math.abs(r.height - u) <= 1 && (u = r.height), { x: n3.offsetLeft, y: n3.offsetTop, width: a, height: u };
}
function X0(n3, r) {
  var a = r.getRootNode && r.getRootNode();
  if (n3.contains(r)) return true;
  if (a && sm(a)) {
    var u = r;
    do {
      if (u && n3.isSameNode(u)) return true;
      u = u.parentNode || u.host;
    } while (u);
  }
  return false;
}
function Sr(n3) {
  return Ui(n3).getComputedStyle(n3);
}
function Gw(n3) {
  return ["table", "td", "th"].indexOf(Vo(n3)) >= 0;
}
function ma(n3) {
  return ((Wa(n3) ? n3.ownerDocument : n3.document) || window.document).documentElement;
}
function Hf(n3) {
  return Vo(n3) === "html" ? n3 : n3.assignedSlot || n3.parentNode || (sm(n3) ? n3.host : null) || ma(n3);
}
function f_(n3) {
  return !io(n3) || Sr(n3).position === "fixed" ? null : n3.offsetParent;
}
function Yw(n3) {
  var r = /firefox/i.test(Cp()), a = /Trident/i.test(Cp());
  if (a && io(n3)) {
    var u = Sr(n3);
    if (u.position === "fixed") return null;
  }
  var f = Hf(n3);
  for (sm(f) && (f = f.host); io(f) && ["html", "body"].indexOf(Vo(f)) < 0; ) {
    var h = Sr(f);
    if (h.transform !== "none" || h.perspective !== "none" || h.contain === "paint" || ["transform", "perspective"].indexOf(h.willChange) !== -1 || r && h.willChange === "filter" || r && h.filter && h.filter !== "none") return f;
    f = f.parentNode;
  }
  return null;
}
function ku(n3) {
  for (var r = Ui(n3), a = f_(n3); a && Gw(a) && Sr(a).position === "static"; ) a = f_(a);
  return a && (Vo(a) === "html" || Vo(a) === "body" && Sr(a).position === "static") ? r : a || Yw(n3) || r;
}
function um(n3) {
  return ["top", "bottom"].indexOf(n3) >= 0 ? "x" : "y";
}
function mu(n3, r, a) {
  return Fa(n3, Sf(r, a));
}
function Fw(n3, r, a) {
  var u = mu(n3, r, a);
  return u > a ? a : u;
}
function K0() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function W0(n3) {
  return Object.assign({}, K0(), n3);
}
function Q0(n3, r) {
  return r.reduce(function(a, u) {
    return a[u] = n3, a;
  }, {});
}
var Xw = function(r, a) {
  return r = typeof r == "function" ? r(Object.assign({}, a.rects, { placement: a.placement })) : r, W0(typeof r != "number" ? r : Q0(r, zu));
};
function Kw(n3) {
  var r, a = n3.state, u = n3.name, f = n3.options, h = a.elements.arrow, g = a.modifiersData.popperOffsets, v = qo(a.placement), y = um(v), b = [Ci, ro].indexOf(v) >= 0, S = b ? "height" : "width";
  if (!(!h || !g)) {
    var w = Xw(f.padding, a), A = lm(h), P = y === "y" ? Si : Ci, R = y === "y" ? oo : ro, M = a.rects.reference[S] + a.rects.reference[y] - g[y] - a.rects.popper[S], $ = g[y] - a.rects.reference[y], U = ku(h), V = U ? y === "y" ? U.clientHeight || 0 : U.clientWidth || 0 : 0, D = M / 2 - $ / 2, N = w[P], k = V - A[S] - w[R], j = V / 2 - A[S] / 2 + D, X = mu(N, j, k), J = y;
    a.modifiersData[u] = (r = {}, r[J] = X, r.centerOffset = X - j, r);
  }
}
function Ww(n3) {
  var r = n3.state, a = n3.options, u = a.element, f = u === void 0 ? "[data-popper-arrow]" : u;
  f != null && (typeof f == "string" && (f = r.elements.popper.querySelector(f), !f) || X0(r.elements.popper, f) && (r.elements.arrow = f));
}
const Qw = { name: "arrow", enabled: true, phase: "main", fn: Kw, effect: Ww, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Qs(n3) {
  return n3.split("-")[1];
}
var Jw = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function t2(n3, r) {
  var a = n3.x, u = n3.y, f = r.devicePixelRatio || 1;
  return { x: Ks(a * f) / f || 0, y: Ks(u * f) / f || 0 };
}
function d_(n3) {
  var r, a = n3.popper, u = n3.popperRect, f = n3.placement, h = n3.variation, g = n3.offsets, v = n3.position, y = n3.gpuAcceleration, b = n3.adaptive, S = n3.roundOffsets, w = n3.isFixed, A = g.x, P = A === void 0 ? 0 : A, R = g.y, M = R === void 0 ? 0 : R, $ = typeof S == "function" ? S({ x: P, y: M }) : { x: P, y: M };
  P = $.x, M = $.y;
  var U = g.hasOwnProperty("x"), V = g.hasOwnProperty("y"), D = Ci, N = Si, k = window;
  if (b) {
    var j = ku(a), X = "clientHeight", J = "clientWidth";
    if (j === Ui(a) && (j = ma(a), Sr(j).position !== "static" && v === "absolute" && (X = "scrollHeight", J = "scrollWidth")), j = j, f === Si || (f === Ci || f === ro) && h === wu) {
      N = oo;
      var it = w && j === k && k.visualViewport ? k.visualViewport.height : j[X];
      M -= it - u.height, M *= y ? 1 : -1;
    }
    if (f === Ci || (f === Si || f === oo) && h === wu) {
      D = ro;
      var ut = w && j === k && k.visualViewport ? k.visualViewport.width : j[J];
      P -= ut - u.width, P *= y ? 1 : -1;
    }
  }
  var ot = Object.assign({ position: v }, b && Jw), C = S === true ? t2({ x: P, y: M }, Ui(a)) : { x: P, y: M };
  if (P = C.x, M = C.y, y) {
    var st;
    return Object.assign({}, ot, (st = {}, st[N] = V ? "0" : "", st[D] = U ? "0" : "", st.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + P + "px, " + M + "px)" : "translate3d(" + P + "px, " + M + "px, 0)", st));
  }
  return Object.assign({}, ot, (r = {}, r[N] = V ? M + "px" : "", r[D] = U ? P + "px" : "", r.transform = "", r));
}
function e2(n3) {
  var r = n3.state, a = n3.options, u = a.gpuAcceleration, f = u === void 0 ? true : u, h = a.adaptive, g = h === void 0 ? true : h, v = a.roundOffsets, y = v === void 0 ? true : v, b = { placement: qo(r.placement), variation: Qs(r.placement), popper: r.elements.popper, popperRect: r.rects.popper, gpuAcceleration: f, isFixed: r.options.strategy === "fixed" };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, d_(Object.assign({}, b, { offsets: r.modifiersData.popperOffsets, position: r.options.strategy, adaptive: g, roundOffsets: y })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, d_(Object.assign({}, b, { offsets: r.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: y })))), r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-placement": r.placement });
}
const n2 = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: e2, data: {} };
var nf = { passive: true };
function i2(n3) {
  var r = n3.state, a = n3.instance, u = n3.options, f = u.scroll, h = f === void 0 ? true : f, g = u.resize, v = g === void 0 ? true : g, y = Ui(r.elements.popper), b = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return h && b.forEach(function(S) {
    S.addEventListener("scroll", a.update, nf);
  }), v && y.addEventListener("resize", a.update, nf), function() {
    h && b.forEach(function(S) {
      S.removeEventListener("scroll", a.update, nf);
    }), v && y.removeEventListener("resize", a.update, nf);
  };
}
const o2 = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: i2, data: {} };
var r2 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ff(n3) {
  return n3.replace(/left|right|bottom|top/g, function(r) {
    return r2[r];
  });
}
var a2 = { start: "end", end: "start" };
function h_(n3) {
  return n3.replace(/start|end/g, function(r) {
    return a2[r];
  });
}
function cm(n3) {
  var r = Ui(n3), a = r.pageXOffset, u = r.pageYOffset;
  return { scrollLeft: a, scrollTop: u };
}
function fm(n3) {
  return Ws(ma(n3)).left + cm(n3).scrollLeft;
}
function s2(n3, r) {
  var a = Ui(n3), u = ma(n3), f = a.visualViewport, h = u.clientWidth, g = u.clientHeight, v = 0, y = 0;
  if (f) {
    h = f.width, g = f.height;
    var b = F0();
    (b || !b && r === "fixed") && (v = f.offsetLeft, y = f.offsetTop);
  }
  return { width: h, height: g, x: v + fm(n3), y };
}
function l2(n3) {
  var r, a = ma(n3), u = cm(n3), f = (r = n3.ownerDocument) == null ? void 0 : r.body, h = Fa(a.scrollWidth, a.clientWidth, f ? f.scrollWidth : 0, f ? f.clientWidth : 0), g = Fa(a.scrollHeight, a.clientHeight, f ? f.scrollHeight : 0, f ? f.clientHeight : 0), v = -u.scrollLeft + fm(n3), y = -u.scrollTop;
  return Sr(f || a).direction === "rtl" && (v += Fa(a.clientWidth, f ? f.clientWidth : 0) - h), { width: h, height: g, x: v, y };
}
function dm(n3) {
  var r = Sr(n3), a = r.overflow, u = r.overflowX, f = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(a + f + u);
}
function J0(n3) {
  return ["html", "body", "#document"].indexOf(Vo(n3)) >= 0 ? n3.ownerDocument.body : io(n3) && dm(n3) ? n3 : J0(Hf(n3));
}
function gu(n3, r) {
  var a;
  r === void 0 && (r = []);
  var u = J0(n3), f = u === ((a = n3.ownerDocument) == null ? void 0 : a.body), h = Ui(u), g = f ? [h].concat(h.visualViewport || [], dm(u) ? u : []) : u, v = r.concat(g);
  return f ? v : v.concat(gu(Hf(g)));
}
function Tp(n3) {
  return Object.assign({}, n3, { left: n3.x, top: n3.y, right: n3.x + n3.width, bottom: n3.y + n3.height });
}
function u2(n3, r) {
  var a = Ws(n3, false, r === "fixed");
  return a.top = a.top + n3.clientTop, a.left = a.left + n3.clientLeft, a.bottom = a.top + n3.clientHeight, a.right = a.left + n3.clientWidth, a.width = n3.clientWidth, a.height = n3.clientHeight, a.x = a.left, a.y = a.top, a;
}
function p_(n3, r, a) {
  return r === G0 ? Tp(s2(n3, a)) : Wa(r) ? u2(r, a) : Tp(l2(ma(n3)));
}
function c2(n3) {
  var r = gu(Hf(n3)), a = ["absolute", "fixed"].indexOf(Sr(n3).position) >= 0, u = a && io(n3) ? ku(n3) : n3;
  return Wa(u) ? r.filter(function(f) {
    return Wa(f) && X0(f, u) && Vo(f) !== "body";
  }) : [];
}
function f2(n3, r, a, u) {
  var f = r === "clippingParents" ? c2(n3) : [].concat(r), h = [].concat(f, [a]), g = h[0], v = h.reduce(function(y, b) {
    var S = p_(n3, b, u);
    return y.top = Fa(S.top, y.top), y.right = Sf(S.right, y.right), y.bottom = Sf(S.bottom, y.bottom), y.left = Fa(S.left, y.left), y;
  }, p_(n3, g, u));
  return v.width = v.right - v.left, v.height = v.bottom - v.top, v.x = v.left, v.y = v.top, v;
}
function tb(n3) {
  var r = n3.reference, a = n3.element, u = n3.placement, f = u ? qo(u) : null, h = u ? Qs(u) : null, g = r.x + r.width / 2 - a.width / 2, v = r.y + r.height / 2 - a.height / 2, y;
  switch (f) {
    case Si:
      y = { x: g, y: r.y - a.height };
      break;
    case oo:
      y = { x: g, y: r.y + r.height };
      break;
    case ro:
      y = { x: r.x + r.width, y: v };
      break;
    case Ci:
      y = { x: r.x - a.width, y: v };
      break;
    default:
      y = { x: r.x, y: r.y };
  }
  var b = f ? um(f) : null;
  if (b != null) {
    var S = b === "y" ? "height" : "width";
    switch (h) {
      case Xs:
        y[b] = y[b] - (r[S] / 2 - a[S] / 2);
        break;
      case wu:
        y[b] = y[b] + (r[S] / 2 - a[S] / 2);
        break;
    }
  }
  return y;
}
function Eu(n3, r) {
  r === void 0 && (r = {});
  var a = r, u = a.placement, f = u === void 0 ? n3.placement : u, h = a.strategy, g = h === void 0 ? n3.strategy : h, v = a.boundary, y = v === void 0 ? Lw : v, b = a.rootBoundary, S = b === void 0 ? G0 : b, w = a.elementContext, A = w === void 0 ? ru : w, P = a.altBoundary, R = P === void 0 ? false : P, M = a.padding, $ = M === void 0 ? 0 : M, U = W0(typeof $ != "number" ? $ : Q0($, zu)), V = A === ru ? Pw : ru, D = n3.rects.popper, N = n3.elements[R ? V : A], k = f2(Wa(N) ? N : N.contextElement || ma(n3.elements.popper), y, S, g), j = Ws(n3.elements.reference), X = tb({ reference: j, element: D, placement: f }), J = Tp(Object.assign({}, D, X)), it = A === ru ? J : j, ut = { top: k.top - it.top + U.top, bottom: it.bottom - k.bottom + U.bottom, left: k.left - it.left + U.left, right: it.right - k.right + U.right }, ot = n3.modifiersData.offset;
  if (A === ru && ot) {
    var C = ot[f];
    Object.keys(ut).forEach(function(st) {
      var W = [ro, oo].indexOf(st) >= 0 ? 1 : -1, et = [Si, oo].indexOf(st) >= 0 ? "y" : "x";
      ut[st] += C[et] * W;
    });
  }
  return ut;
}
function d2(n3, r) {
  r === void 0 && (r = {});
  var a = r, u = a.placement, f = a.boundary, h = a.rootBoundary, g = a.padding, v = a.flipVariations, y = a.allowedAutoPlacements, b = y === void 0 ? Y0 : y, S = Qs(u), w = S ? v ? c_ : c_.filter(function(R) {
    return Qs(R) === S;
  }) : zu, A = w.filter(function(R) {
    return b.indexOf(R) >= 0;
  });
  A.length === 0 && (A = w);
  var P = A.reduce(function(R, M) {
    return R[M] = Eu(n3, { placement: M, boundary: f, rootBoundary: h, padding: g })[qo(M)], R;
  }, {});
  return Object.keys(P).sort(function(R, M) {
    return P[R] - P[M];
  });
}
function h2(n3) {
  if (qo(n3) === am) return [];
  var r = ff(n3);
  return [h_(n3), r, h_(r)];
}
function p2(n3) {
  var r = n3.state, a = n3.options, u = n3.name;
  if (!r.modifiersData[u]._skip) {
    for (var f = a.mainAxis, h = f === void 0 ? true : f, g = a.altAxis, v = g === void 0 ? true : g, y = a.fallbackPlacements, b = a.padding, S = a.boundary, w = a.rootBoundary, A = a.altBoundary, P = a.flipVariations, R = P === void 0 ? true : P, M = a.allowedAutoPlacements, $ = r.options.placement, U = qo($), V = U === $, D = y || (V || !R ? [ff($)] : h2($)), N = [$].concat(D).reduce(function(bt, _t) {
      return bt.concat(qo(_t) === am ? d2(r, { placement: _t, boundary: S, rootBoundary: w, padding: b, flipVariations: R, allowedAutoPlacements: M }) : _t);
    }, []), k = r.rects.reference, j = r.rects.popper, X = /* @__PURE__ */ new Map(), J = true, it = N[0], ut = 0; ut < N.length; ut++) {
      var ot = N[ut], C = qo(ot), st = Qs(ot) === Xs, W = [Si, oo].indexOf(C) >= 0, et = W ? "width" : "height", B = Eu(r, { placement: ot, boundary: S, rootBoundary: w, altBoundary: A, padding: b }), tt = W ? st ? ro : Ci : st ? oo : Si;
      k[et] > j[et] && (tt = ff(tt));
      var rt = ff(tt), gt = [];
      if (h && gt.push(B[C] <= 0), v && gt.push(B[tt] <= 0, B[rt] <= 0), gt.every(function(bt) {
        return bt;
      })) {
        it = ot, J = false;
        break;
      }
      X.set(ot, gt);
    }
    if (J) for (var z = R ? 3 : 1, Y = function(_t) {
      var ct = N.find(function(At) {
        var Pt = X.get(At);
        if (Pt) return Pt.slice(0, _t).every(function($t) {
          return $t;
        });
      });
      if (ct) return it = ct, "break";
    }, ft = z; ft > 0; ft--) {
      var dt = Y(ft);
      if (dt === "break") break;
    }
    r.placement !== it && (r.modifiersData[u]._skip = true, r.placement = it, r.reset = true);
  }
}
const m2 = { name: "flip", enabled: true, phase: "main", fn: p2, requiresIfExists: ["offset"], data: { _skip: false } };
function m_(n3, r, a) {
  return a === void 0 && (a = { x: 0, y: 0 }), { top: n3.top - r.height - a.y, right: n3.right - r.width + a.x, bottom: n3.bottom - r.height + a.y, left: n3.left - r.width - a.x };
}
function g_(n3) {
  return [Si, ro, oo, Ci].some(function(r) {
    return n3[r] >= 0;
  });
}
function g2(n3) {
  var r = n3.state, a = n3.name, u = r.rects.reference, f = r.rects.popper, h = r.modifiersData.preventOverflow, g = Eu(r, { elementContext: "reference" }), v = Eu(r, { altBoundary: true }), y = m_(g, u), b = m_(v, f, h), S = g_(y), w = g_(b);
  r.modifiersData[a] = { referenceClippingOffsets: y, popperEscapeOffsets: b, isReferenceHidden: S, hasPopperEscaped: w }, r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-reference-hidden": S, "data-popper-escaped": w });
}
const v2 = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: g2 };
function y2(n3, r, a) {
  var u = qo(n3), f = [Ci, Si].indexOf(u) >= 0 ? -1 : 1, h = typeof a == "function" ? a(Object.assign({}, r, { placement: n3 })) : a, g = h[0], v = h[1];
  return g = g || 0, v = (v || 0) * f, [Ci, ro].indexOf(u) >= 0 ? { x: v, y: g } : { x: g, y: v };
}
function _2(n3) {
  var r = n3.state, a = n3.options, u = n3.name, f = a.offset, h = f === void 0 ? [0, 0] : f, g = Y0.reduce(function(S, w) {
    return S[w] = y2(w, r.rects, h), S;
  }, {}), v = g[r.placement], y = v.x, b = v.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += y, r.modifiersData.popperOffsets.y += b), r.modifiersData[u] = g;
}
const b2 = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: _2 };
function x2(n3) {
  var r = n3.state, a = n3.name;
  r.modifiersData[a] = tb({ reference: r.rects.reference, element: r.rects.popper, placement: r.placement });
}
const S2 = { name: "popperOffsets", enabled: true, phase: "read", fn: x2, data: {} };
function C2(n3) {
  return n3 === "x" ? "y" : "x";
}
function T2(n3) {
  var r = n3.state, a = n3.options, u = n3.name, f = a.mainAxis, h = f === void 0 ? true : f, g = a.altAxis, v = g === void 0 ? false : g, y = a.boundary, b = a.rootBoundary, S = a.altBoundary, w = a.padding, A = a.tether, P = A === void 0 ? true : A, R = a.tetherOffset, M = R === void 0 ? 0 : R, $ = Eu(r, { boundary: y, rootBoundary: b, padding: w, altBoundary: S }), U = qo(r.placement), V = Qs(r.placement), D = !V, N = um(U), k = C2(N), j = r.modifiersData.popperOffsets, X = r.rects.reference, J = r.rects.popper, it = typeof M == "function" ? M(Object.assign({}, r.rects, { placement: r.placement })) : M, ut = typeof it == "number" ? { mainAxis: it, altAxis: it } : Object.assign({ mainAxis: 0, altAxis: 0 }, it), ot = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null, C = { x: 0, y: 0 };
  if (j) {
    if (h) {
      var st, W = N === "y" ? Si : Ci, et = N === "y" ? oo : ro, B = N === "y" ? "height" : "width", tt = j[N], rt = tt + $[W], gt = tt - $[et], z = P ? -J[B] / 2 : 0, Y = V === Xs ? X[B] : J[B], ft = V === Xs ? -J[B] : -X[B], dt = r.elements.arrow, bt = P && dt ? lm(dt) : { width: 0, height: 0 }, _t = r.modifiersData["arrow#persistent"] ? r.modifiersData["arrow#persistent"].padding : K0(), ct = _t[W], At = _t[et], Pt = mu(0, X[B], bt[B]), $t = D ? X[B] / 2 - z - Pt - ct - ut.mainAxis : Y - Pt - ct - ut.mainAxis, Rt = D ? -X[B] / 2 + z + Pt + At + ut.mainAxis : ft + Pt + At + ut.mainAxis, Ut = r.elements.arrow && ku(r.elements.arrow), Wt = Ut ? N === "y" ? Ut.clientTop || 0 : Ut.clientLeft || 0 : 0, te = (st = ot == null ? void 0 : ot[N]) != null ? st : 0, qt = tt + $t - te - Wt, de = tt + Rt - te, ie = mu(P ? Sf(rt, qt) : rt, tt, P ? Fa(gt, de) : gt);
      j[N] = ie, C[N] = ie - tt;
    }
    if (v) {
      var ue, Tt = N === "x" ? Si : Ci, _e = N === "x" ? oo : ro, Bt = j[k], Jt = k === "y" ? "height" : "width", Ot = Bt + $[Tt], tn = Bt - $[_e], be = [Si, Ci].indexOf(U) !== -1, qe = (ue = ot == null ? void 0 : ot[k]) != null ? ue : 0, ce = be ? Ot : Bt - X[Jt] - J[Jt] - qe + ut.altAxis, Vt = be ? Bt + X[Jt] + J[Jt] - qe - ut.altAxis : tn, oe = P && be ? Fw(ce, Bt, Vt) : mu(P ? ce : Ot, Bt, P ? Vt : tn);
      j[k] = oe, C[k] = oe - Bt;
    }
    r.modifiersData[u] = C;
  }
}
const w2 = { name: "preventOverflow", enabled: true, phase: "main", fn: T2, requiresIfExists: ["offset"] };
function E2(n3) {
  return { scrollLeft: n3.scrollLeft, scrollTop: n3.scrollTop };
}
function O2(n3) {
  return n3 === Ui(n3) || !io(n3) ? cm(n3) : E2(n3);
}
function M2(n3) {
  var r = n3.getBoundingClientRect(), a = Ks(r.width) / n3.offsetWidth || 1, u = Ks(r.height) / n3.offsetHeight || 1;
  return a !== 1 || u !== 1;
}
function A2(n3, r, a) {
  a === void 0 && (a = false);
  var u = io(r), f = io(r) && M2(r), h = ma(r), g = Ws(n3, f, a), v = { scrollLeft: 0, scrollTop: 0 }, y = { x: 0, y: 0 };
  return (u || !u && !a) && ((Vo(r) !== "body" || dm(h)) && (v = O2(r)), io(r) ? (y = Ws(r, true), y.x += r.clientLeft, y.y += r.clientTop) : h && (y.x = fm(h))), { x: g.left + v.scrollLeft - y.x, y: g.top + v.scrollTop - y.y, width: g.width, height: g.height };
}
function R2(n3) {
  var r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), u = [];
  n3.forEach(function(h) {
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
  return n3.forEach(function(h) {
    a.has(h.name) || f(h);
  }), u;
}
function L2(n3) {
  var r = R2(n3);
  return Uw.reduce(function(a, u) {
    return a.concat(r.filter(function(f) {
      return f.phase === u;
    }));
  }, []);
}
function P2(n3) {
  var r;
  return function() {
    return r || (r = new Promise(function(a) {
      Promise.resolve().then(function() {
        r = void 0, a(n3());
      });
    })), r;
  };
}
function z2(n3) {
  var r = n3.reduce(function(a, u) {
    var f = a[u.name];
    return a[u.name] = f ? Object.assign({}, f, u, { options: Object.assign({}, f.options, u.options), data: Object.assign({}, f.data, u.data) }) : u, a;
  }, {});
  return Object.keys(r).map(function(a) {
    return r[a];
  });
}
var v_ = { placement: "bottom", modifiers: [], strategy: "absolute" };
function y_() {
  for (var n3 = arguments.length, r = new Array(n3), a = 0; a < n3; a++) r[a] = arguments[a];
  return !r.some(function(u) {
    return !(u && typeof u.getBoundingClientRect == "function");
  });
}
function k2(n3) {
  n3 === void 0 && (n3 = {});
  var r = n3, a = r.defaultModifiers, u = a === void 0 ? [] : a, f = r.defaultOptions, h = f === void 0 ? v_ : f;
  return function(v, y, b) {
    b === void 0 && (b = h);
    var S = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, v_, h), modifiersData: {}, elements: { reference: v, popper: y }, attributes: {}, styles: {} }, w = [], A = false, P = { state: S, setOptions: function(U) {
      var V = typeof U == "function" ? U(S.options) : U;
      M(), S.options = Object.assign({}, h, S.options, V), S.scrollParents = { reference: Wa(v) ? gu(v) : v.contextElement ? gu(v.contextElement) : [], popper: gu(y) };
      var D = L2(z2([].concat(u, S.options.modifiers)));
      return S.orderedModifiers = D.filter(function(N) {
        return N.enabled;
      }), R(), P.update();
    }, forceUpdate: function() {
      if (!A) {
        var U = S.elements, V = U.reference, D = U.popper;
        if (y_(V, D)) {
          S.rects = { reference: A2(V, ku(D), S.options.strategy === "fixed"), popper: lm(D) }, S.reset = false, S.placement = S.options.placement, S.orderedModifiers.forEach(function(ut) {
            return S.modifiersData[ut.name] = Object.assign({}, ut.data);
          });
          for (var N = 0; N < S.orderedModifiers.length; N++) {
            if (S.reset === true) {
              S.reset = false, N = -1;
              continue;
            }
            var k = S.orderedModifiers[N], j = k.fn, X = k.options, J = X === void 0 ? {} : X, it = k.name;
            typeof j == "function" && (S = j({ state: S, options: J, name: it, instance: P }) || S);
          }
        }
      }
    }, update: P2(function() {
      return new Promise(function($) {
        P.forceUpdate(), $(S);
      });
    }), destroy: function() {
      M(), A = true;
    } };
    if (!y_(v, y)) return P;
    P.setOptions(b).then(function($) {
      !A && b.onFirstUpdate && b.onFirstUpdate($);
    });
    function R() {
      S.orderedModifiers.forEach(function($) {
        var U = $.name, V = $.options, D = V === void 0 ? {} : V, N = $.effect;
        if (typeof N == "function") {
          var k = N({ state: S, name: U, instance: P, options: D }), j = function() {
          };
          w.push(k || j);
        }
      });
    }
    function M() {
      w.forEach(function($) {
        return $();
      }), w = [];
    }
    return P;
  };
}
var B2 = [o2, S2, n2, Vw, b2, m2, w2, Qw, v2], D2 = k2({ defaultModifiers: B2 });
function eb(n3) {
  var _a;
  const { elementType: r, externalSlotProps: a, ownerState: u, skipResolvingSlotProps: f = false, ...h } = n3, g = f ? {} : U0(a, u), { props: v, internalRef: y } = q0({ ...h, externalSlotProps: g }), b = Un(y, g == null ? void 0 : g.ref, (_a = n3.additionalProps) == null ? void 0 : _a.ref);
  return j0(r, { ...v, ref: b }, u);
}
function Bu(n3) {
  var _a;
  return parseInt(O.version, 10) >= 19 ? ((_a = n3 == null ? void 0 : n3.props) == null ? void 0 : _a.ref) || null : (n3 == null ? void 0 : n3.ref) || null;
}
function N2(n3) {
  return typeof n3 == "function" ? n3() : n3;
}
const nb = O.forwardRef(function(r, a) {
  const { children: u, container: f, disablePortal: h = false } = r, [g, v] = O.useState(null), y = Un(O.isValidElement(u) ? Bu(u) : null, a);
  if (So(() => {
    h || v(N2(f) || document.body);
  }, [f, h]), So(() => {
    if (g && !h) return vp(a, g), () => {
      vp(a, null);
    };
  }, [a, g, h]), h) {
    if (O.isValidElement(u)) {
      const b = { ref: y };
      return O.cloneElement(u, b);
    }
    return u;
  }
  return g && Jp.createPortal(u, g);
});
function $2(n3) {
  return Re("MuiPopper", n3);
}
Le("MuiPopper", ["root"]);
function I2(n3, r) {
  if (r === "ltr") return n3;
  switch (n3) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return n3;
  }
}
function wp(n3) {
  return typeof n3 == "function" ? n3() : n3;
}
function H2(n3) {
  return n3.nodeType !== void 0;
}
const j2 = (n3) => {
  const { classes: r } = n3;
  return Pe({ root: ["root"] }, $2, r);
}, U2 = {}, Z2 = O.forwardRef(function(r, a) {
  const { anchorEl: u, children: f, direction: h, disablePortal: g, modifiers: v, open: y, placement: b, popperOptions: S, popperRef: w, slotProps: A = {}, slots: P = {}, TransitionProps: R, ownerState: M, ...$ } = r, U = O.useRef(null), V = Un(U, a), D = O.useRef(null), N = Un(D, w), k = O.useRef(N);
  So(() => {
    k.current = N;
  }, [N]), O.useImperativeHandle(w, () => D.current, []);
  const j = I2(b, h), [X, J] = O.useState(j), [it, ut] = O.useState(wp(u));
  O.useEffect(() => {
    D.current && D.current.forceUpdate();
  }), O.useEffect(() => {
    u && ut(wp(u));
  }, [u]), So(() => {
    if (!it || !y) return;
    const et = (rt) => {
      J(rt.placement);
    };
    let B = [{ name: "preventOverflow", options: { altBoundary: g } }, { name: "flip", options: { altBoundary: g } }, { name: "onUpdate", enabled: true, phase: "afterWrite", fn: ({ state: rt }) => {
      et(rt);
    } }];
    v != null && (B = B.concat(v)), S && S.modifiers != null && (B = B.concat(S.modifiers));
    const tt = D2(it, U.current, { placement: j, ...S, modifiers: B });
    return k.current(tt), () => {
      tt.destroy(), k.current(null);
    };
  }, [it, g, v, y, S, j]);
  const ot = { placement: X };
  R !== null && (ot.TransitionProps = R);
  const C = j2(r), st = P.root ?? "div", W = eb({ elementType: st, externalSlotProps: A.root, externalForwardedProps: $, additionalProps: { role: "tooltip", ref: V }, ownerState: r, className: C.root });
  return Z.jsx(st, { ...W, children: typeof f == "function" ? f(ot) : f });
}), q2 = O.forwardRef(function(r, a) {
  const { anchorEl: u, children: f, container: h, direction: g = "ltr", disablePortal: v = false, keepMounted: y = false, modifiers: b, open: S, placement: w = "bottom", popperOptions: A = U2, popperRef: P, style: R, transition: M = false, slotProps: $ = {}, slots: U = {}, ...V } = r, [D, N] = O.useState(true), k = () => {
    N(false);
  }, j = () => {
    N(true);
  };
  if (!y && !S && (!M || D)) return null;
  let X;
  if (h) X = h;
  else if (u) {
    const ut = wp(u);
    X = ut && H2(ut) ? ji(ut).body : ji(null).body;
  }
  const J = !S && y && (!M || D) ? "none" : void 0, it = M ? { in: S, onEnter: k, onExited: j } : void 0;
  return Z.jsx(nb, { disablePortal: v, container: X, children: Z.jsx(Z2, { anchorEl: u, direction: g, disablePortal: v, modifiers: b, ref: a, open: M ? !D : S, placement: w, popperOptions: A, popperRef: P, slotProps: $, slots: U, ...V, style: { position: "fixed", top: 0, left: 0, display: J, ...R }, TransitionProps: it, children: f }) });
}), V2 = Mt(q2, { name: "MuiPopper", slot: "Root" })({}), ib = O.forwardRef(function(r, a) {
  const u = C0(), f = ze({ props: r, name: "MuiPopper" }), { anchorEl: h, component: g, components: v, componentsProps: y, container: b, disablePortal: S, keepMounted: w, modifiers: A, open: P, placement: R, popperOptions: M, popperRef: $, transition: U, slots: V, slotProps: D, ...N } = f, k = (V == null ? void 0 : V.root) ?? (v == null ? void 0 : v.Root), j = { anchorEl: h, container: b, disablePortal: S, keepMounted: w, modifiers: A, open: P, placement: R, popperOptions: M, popperRef: $, transition: U, ...N };
  return Z.jsx(V2, { as: g, direction: u ? "rtl" : "ltr", slots: { root: k }, slotProps: D ?? y, ...j, ref: a });
});
function G2(n3) {
  return Re("MuiListSubheader", n3);
}
Le("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const Y2 = (n3) => {
  const { classes: r, color: a, disableGutters: u, inset: f, disableSticky: h } = n3, g = { root: ["root", a !== "default" && `color${Ct(a)}`, !u && "gutters", f && "inset", !h && "sticky"] };
  return Pe(g, G2, r);
}, F2 = Mt("li", { name: "MuiListSubheader", slot: "Root", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.root, a.color !== "default" && r[`color${Ct(a.color)}`], !a.disableGutters && r.gutters, a.inset && r.inset, !a.disableSticky && r.sticky];
} })(Ee(({ theme: n3 }) => ({ boxSizing: "border-box", lineHeight: "48px", listStyle: "none", color: (n3.vars || n3).palette.text.secondary, fontFamily: n3.typography.fontFamily, fontWeight: n3.typography.fontWeightMedium, fontSize: n3.typography.pxToRem(14), variants: [{ props: { color: "primary" }, style: { color: (n3.vars || n3).palette.primary.main } }, { props: { color: "inherit" }, style: { color: "inherit" } }, { props: ({ ownerState: r }) => !r.disableGutters, style: { paddingLeft: 16, paddingRight: 16 } }, { props: ({ ownerState: r }) => r.inset, style: { paddingLeft: 72 } }, { props: ({ ownerState: r }) => !r.disableSticky, style: { position: "sticky", top: 0, zIndex: 1, backgroundColor: (n3.vars || n3).palette.background.paper } }] }))), Ep = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiListSubheader" }), { className: f, color: h = "default", component: g = "li", disableGutters: v = false, disableSticky: y = false, inset: b = false, ...S } = u, w = { ...u, color: h, component: g, disableGutters: v, disableSticky: y, inset: b }, A = Y2(w);
  return Z.jsx(F2, { as: g, className: Yt(A.root, f), ref: a, ownerState: w, ...S });
});
Ep && (Ep.muiSkipListHighlight = true);
const X2 = Ja(Z.jsx("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" }));
function K2(n3) {
  return Re("MuiChip", n3);
}
const ye = Le("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), W2 = (n3) => {
  const { classes: r, disabled: a, size: u, color: f, iconColor: h, onDelete: g, clickable: v, variant: y } = n3, b = { root: ["root", y, a && "disabled", `size${Ct(u)}`, `color${Ct(f)}`, v && "clickable", v && `clickableColor${Ct(f)}`, g && "deletable", g && `deletableColor${Ct(f)}`, `${y}${Ct(f)}`], label: ["label", `label${Ct(u)}`], avatar: ["avatar", `avatar${Ct(u)}`, `avatarColor${Ct(f)}`], icon: ["icon", `icon${Ct(u)}`, `iconColor${Ct(h)}`], deleteIcon: ["deleteIcon", `deleteIcon${Ct(u)}`, `deleteIconColor${Ct(f)}`, `deleteIcon${Ct(y)}Color${Ct(f)}`] };
  return Pe(b, K2, r);
}, Q2 = Mt("div", { name: "MuiChip", slot: "Root", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3, { color: u, iconColor: f, clickable: h, onDelete: g, size: v, variant: y } = a;
  return [{ [`& .${ye.avatar}`]: r.avatar }, { [`& .${ye.avatar}`]: r[`avatar${Ct(v)}`] }, { [`& .${ye.avatar}`]: r[`avatarColor${Ct(u)}`] }, { [`& .${ye.icon}`]: r.icon }, { [`& .${ye.icon}`]: r[`icon${Ct(v)}`] }, { [`& .${ye.icon}`]: r[`iconColor${Ct(f)}`] }, { [`& .${ye.deleteIcon}`]: r.deleteIcon }, { [`& .${ye.deleteIcon}`]: r[`deleteIcon${Ct(v)}`] }, { [`& .${ye.deleteIcon}`]: r[`deleteIconColor${Ct(u)}`] }, { [`& .${ye.deleteIcon}`]: r[`deleteIcon${Ct(y)}Color${Ct(u)}`] }, r.root, r[`size${Ct(v)}`], r[`color${Ct(u)}`], h && r.clickable, h && u !== "default" && r[`clickableColor${Ct(u)})`], g && r.deletable, g && u !== "default" && r[`deletableColor${Ct(u)}`], r[y], r[`${y}${Ct(u)}`]];
} })(Ee(({ theme: n3 }) => {
  const r = n3.palette.mode === "light" ? n3.palette.grey[700] : n3.palette.grey[300];
  return { maxWidth: "100%", fontFamily: n3.typography.fontFamily, fontSize: n3.typography.pxToRem(13), display: "inline-flex", alignItems: "center", justifyContent: "center", height: 32, lineHeight: 1.5, color: (n3.vars || n3).palette.text.primary, backgroundColor: (n3.vars || n3).palette.action.selected, borderRadius: 32 / 2, whiteSpace: "nowrap", transition: n3.transitions.create(["background-color", "box-shadow"]), cursor: "unset", outline: 0, textDecoration: "none", border: 0, padding: 0, verticalAlign: "middle", boxSizing: "border-box", [`&.${ye.disabled}`]: { opacity: (n3.vars || n3).palette.action.disabledOpacity, pointerEvents: "none" }, [`& .${ye.avatar}`]: { marginLeft: 5, marginRight: -6, width: 24, height: 24, color: n3.vars ? n3.vars.palette.Chip.defaultAvatarColor : r, fontSize: n3.typography.pxToRem(12) }, [`& .${ye.avatarColorPrimary}`]: { color: (n3.vars || n3).palette.primary.contrastText, backgroundColor: (n3.vars || n3).palette.primary.dark }, [`& .${ye.avatarColorSecondary}`]: { color: (n3.vars || n3).palette.secondary.contrastText, backgroundColor: (n3.vars || n3).palette.secondary.dark }, [`& .${ye.avatarSmall}`]: { marginLeft: 4, marginRight: -4, width: 18, height: 18, fontSize: n3.typography.pxToRem(10) }, [`& .${ye.icon}`]: { marginLeft: 5, marginRight: -6 }, [`& .${ye.deleteIcon}`]: { WebkitTapHighlightColor: "transparent", color: n3.alpha((n3.vars || n3).palette.text.primary, 0.26), fontSize: 22, cursor: "pointer", margin: "0 5px 0 -6px", "&:hover": { color: n3.alpha((n3.vars || n3).palette.text.primary, 0.4) } }, variants: [{ props: { size: "small" }, style: { height: 24, [`& .${ye.icon}`]: { fontSize: 18, marginLeft: 4, marginRight: -4 }, [`& .${ye.deleteIcon}`]: { fontSize: 16, marginRight: 4, marginLeft: -4 } } }, ...Object.entries(n3.palette).filter(xi(["contrastText"])).map(([a]) => ({ props: { color: a }, style: { backgroundColor: (n3.vars || n3).palette[a].main, color: (n3.vars || n3).palette[a].contrastText, [`& .${ye.deleteIcon}`]: { color: n3.alpha((n3.vars || n3).palette[a].contrastText, 0.7), "&:hover, &:active": { color: (n3.vars || n3).palette[a].contrastText } } } })), { props: (a) => a.iconColor === a.color, style: { [`& .${ye.icon}`]: { color: n3.vars ? n3.vars.palette.Chip.defaultIconColor : r } } }, { props: (a) => a.iconColor === a.color && a.color !== "default", style: { [`& .${ye.icon}`]: { color: "inherit" } } }, { props: { onDelete: true }, style: { [`&.${ye.focusVisible}`]: { backgroundColor: n3.alpha((n3.vars || n3).palette.action.selected, `${(n3.vars || n3).palette.action.selectedOpacity} + ${(n3.vars || n3).palette.action.focusOpacity}`) } } }, ...Object.entries(n3.palette).filter(xi(["dark"])).map(([a]) => ({ props: { color: a, onDelete: true }, style: { [`&.${ye.focusVisible}`]: { background: (n3.vars || n3).palette[a].dark } } })), { props: { clickable: true }, style: { userSelect: "none", WebkitTapHighlightColor: "transparent", cursor: "pointer", "&:hover": { backgroundColor: n3.alpha((n3.vars || n3).palette.action.selected, `${(n3.vars || n3).palette.action.selectedOpacity} + ${(n3.vars || n3).palette.action.hoverOpacity}`) }, [`&.${ye.focusVisible}`]: { backgroundColor: n3.alpha((n3.vars || n3).palette.action.selected, `${(n3.vars || n3).palette.action.selectedOpacity} + ${(n3.vars || n3).palette.action.focusOpacity}`) }, "&:active": { boxShadow: (n3.vars || n3).shadows[1] } } }, ...Object.entries(n3.palette).filter(xi(["dark"])).map(([a]) => ({ props: { color: a, clickable: true }, style: { [`&:hover, &.${ye.focusVisible}`]: { backgroundColor: (n3.vars || n3).palette[a].dark } } })), { props: { variant: "outlined" }, style: { backgroundColor: "transparent", border: n3.vars ? `1px solid ${n3.vars.palette.Chip.defaultBorder}` : `1px solid ${n3.palette.mode === "light" ? n3.palette.grey[400] : n3.palette.grey[700]}`, [`&.${ye.clickable}:hover`]: { backgroundColor: (n3.vars || n3).palette.action.hover }, [`&.${ye.focusVisible}`]: { backgroundColor: (n3.vars || n3).palette.action.focus }, [`& .${ye.avatar}`]: { marginLeft: 4 }, [`& .${ye.avatarSmall}`]: { marginLeft: 2 }, [`& .${ye.icon}`]: { marginLeft: 4 }, [`& .${ye.iconSmall}`]: { marginLeft: 2 }, [`& .${ye.deleteIcon}`]: { marginRight: 5 }, [`& .${ye.deleteIconSmall}`]: { marginRight: 3 } } }, ...Object.entries(n3.palette).filter(xi()).map(([a]) => ({ props: { variant: "outlined", color: a }, style: { color: (n3.vars || n3).palette[a].main, border: `1px solid ${n3.alpha((n3.vars || n3).palette[a].main, 0.7)}`, [`&.${ye.clickable}:hover`]: { backgroundColor: n3.alpha((n3.vars || n3).palette[a].main, (n3.vars || n3).palette.action.hoverOpacity) }, [`&.${ye.focusVisible}`]: { backgroundColor: n3.alpha((n3.vars || n3).palette[a].main, (n3.vars || n3).palette.action.focusOpacity) }, [`& .${ye.deleteIcon}`]: { color: n3.alpha((n3.vars || n3).palette[a].main, 0.7), "&:hover, &:active": { color: (n3.vars || n3).palette[a].main } } } }))] };
})), J2 = Mt("span", { name: "MuiChip", slot: "Label", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3, { size: u } = a;
  return [r.label, r[`label${Ct(u)}`]];
} })({ overflow: "hidden", textOverflow: "ellipsis", paddingLeft: 12, paddingRight: 12, whiteSpace: "nowrap", variants: [{ props: { variant: "outlined" }, style: { paddingLeft: 11, paddingRight: 11 } }, { props: { size: "small" }, style: { paddingLeft: 8, paddingRight: 8 } }, { props: { size: "small", variant: "outlined" }, style: { paddingLeft: 7, paddingRight: 7 } }] });
function __(n3) {
  return n3.key === "Backspace" || n3.key === "Delete";
}
const ob = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiChip" }), { avatar: f, className: h, clickable: g, color: v = "default", component: y, deleteIcon: b, disabled: S = false, icon: w, label: A, onClick: P, onDelete: R, onKeyDown: M, onKeyUp: $, size: U = "medium", variant: V = "filled", tabIndex: D, skipFocusWhenDisabled: N = false, slots: k = {}, slotProps: j = {}, ...X } = u, J = O.useRef(null), it = Un(J, a), ut = (ct) => {
    ct.stopPropagation(), R && R(ct);
  }, ot = (ct) => {
    ct.currentTarget === ct.target && __(ct) && ct.preventDefault(), M && M(ct);
  }, C = (ct) => {
    ct.currentTarget === ct.target && R && __(ct) && R(ct), $ && $(ct);
  }, st = g !== false && P ? true : g, W = st || R ? xf : y || "div", et = { ...u, component: W, disabled: S, size: U, color: v, iconColor: O.isValidElement(w) && w.props.color || v, onDelete: !!R, clickable: st, variant: V }, B = W2(et), tt = W === xf ? { component: y || "div", focusVisibleClassName: B.focusVisible, ...R && { disableRipple: true } } : {};
  let rt = null;
  R && (rt = b && O.isValidElement(b) ? O.cloneElement(b, { className: Yt(b.props.className, B.deleteIcon), onClick: ut }) : Z.jsx(X2, { className: B.deleteIcon, onClick: ut }));
  let gt = null;
  f && O.isValidElement(f) && (gt = O.cloneElement(f, { className: Yt(B.avatar, f.props.className) }));
  let z = null;
  w && O.isValidElement(w) && (z = O.cloneElement(w, { className: Yt(B.icon, w.props.className) }));
  const Y = { slots: k, slotProps: j }, [ft, dt] = vn("root", { elementType: Q2, externalForwardedProps: { ...Y, ...X }, ownerState: et, shouldForwardComponentProp: true, ref: it, className: Yt(B.root, h), additionalProps: { disabled: st && S ? true : void 0, tabIndex: N && S ? -1 : D, ...tt }, getSlotProps: (ct) => ({ ...ct, onClick: (At) => {
    var _a;
    (_a = ct.onClick) == null ? void 0 : _a.call(ct, At), P == null ? void 0 : P(At);
  }, onKeyDown: (At) => {
    var _a;
    (_a = ct.onKeyDown) == null ? void 0 : _a.call(ct, At), ot(At);
  }, onKeyUp: (At) => {
    var _a;
    (_a = ct.onKeyUp) == null ? void 0 : _a.call(ct, At), C(At);
  } }) }), [bt, _t] = vn("label", { elementType: J2, externalForwardedProps: Y, ownerState: et, className: B.label });
  return Z.jsxs(ft, { as: W, ...dt, children: [gt || z, Z.jsx(bt, { ..._t, children: A }), rt] });
});
function of(n3) {
  return parseInt(n3, 10) || 0;
}
const tE = { shadow: { visibility: "hidden", position: "absolute", overflow: "hidden", height: 0, top: 0, left: 0, transform: "translateZ(0)" } };
function eE(n3) {
  for (const r in n3) return false;
  return true;
}
function b_(n3) {
  return eE(n3) || n3.outerHeightStyle === 0 && !n3.overflowing;
}
const nE = O.forwardRef(function(r, a) {
  const { onChange: u, maxRows: f, minRows: h = 1, style: g, value: v, ...y } = r, { current: b } = O.useRef(v != null), S = O.useRef(null), w = Un(a, S), A = O.useRef(null), P = O.useRef(null), R = O.useCallback(() => {
    const D = S.current, N = P.current;
    if (!D || !N) return;
    const j = xr(D).getComputedStyle(D);
    if (j.width === "0px") return { outerHeightStyle: 0, overflowing: false };
    N.style.width = j.width, N.value = D.value || r.placeholder || "x", N.value.slice(-1) === `
` && (N.value += " ");
    const X = j.boxSizing, J = of(j.paddingBottom) + of(j.paddingTop), it = of(j.borderBottomWidth) + of(j.borderTopWidth), ut = N.scrollHeight;
    N.value = "x";
    const ot = N.scrollHeight;
    let C = ut;
    h && (C = Math.max(Number(h) * ot, C)), f && (C = Math.min(Number(f) * ot, C)), C = Math.max(C, ot);
    const st = C + (X === "border-box" ? J + it : 0), W = Math.abs(C - ut) <= 1;
    return { outerHeightStyle: st, overflowing: W };
  }, [f, h, r.placeholder]), M = bo(() => {
    const D = S.current, N = R();
    if (!D || !N || b_(N)) return false;
    const k = N.outerHeightStyle;
    return A.current != null && A.current !== k;
  }), $ = O.useCallback(() => {
    const D = S.current, N = R();
    if (!D || !N || b_(N)) return;
    const k = N.outerHeightStyle;
    A.current !== k && (A.current = k, D.style.height = `${k}px`), D.style.overflow = N.overflowing ? "hidden" : "";
  }, [R]), U = O.useRef(-1);
  So(() => {
    const D = B0($), N = S == null ? void 0 : S.current;
    if (!N) return;
    const k = xr(N);
    k.addEventListener("resize", D);
    let j;
    return typeof ResizeObserver < "u" && (j = new ResizeObserver(() => {
      M() && (j.unobserve(N), cancelAnimationFrame(U.current), $(), U.current = requestAnimationFrame(() => {
        j.observe(N);
      }));
    }), j.observe(N)), () => {
      D.clear(), cancelAnimationFrame(U.current), k.removeEventListener("resize", D), j && j.disconnect();
    };
  }, [R, $, M]), So(() => {
    $();
  });
  const V = (D) => {
    b || $();
    const N = D.target, k = N.value.length, j = N.value.endsWith(`
`), X = N.selectionStart === k;
    j && X && N.setSelectionRange(k, k), u && u(D);
  };
  return Z.jsxs(O.Fragment, { children: [Z.jsx("textarea", { value: v, onChange: V, ref: w, rows: h, style: g, ...y }), Z.jsx("textarea", { "aria-hidden": true, className: r.className, readOnly: true, ref: P, tabIndex: -1, style: { ...tE.shadow, ...g, paddingTop: 0, paddingBottom: 0 } })] });
});
function nl({ props: n3, states: r, muiFormControl: a }) {
  return r.reduce((u, f) => (u[f] = n3[f], a && typeof n3[f] > "u" && (u[f] = a[f]), u), {});
}
const hm = O.createContext(void 0);
function il() {
  return O.useContext(hm);
}
function x_(n3) {
  return n3 != null && !(Array.isArray(n3) && n3.length === 0);
}
function Cf(n3, r = false) {
  return n3 && (x_(n3.value) && n3.value !== "" || r && x_(n3.defaultValue) && n3.defaultValue !== "");
}
function iE(n3) {
  return n3.startAdornment;
}
function oE(n3) {
  return Re("MuiInputBase", n3);
}
const Ni = Le("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var S_;
const jf = (n3, r) => {
  const { ownerState: a } = n3;
  return [r.root, a.formControl && r.formControl, a.startAdornment && r.adornedStart, a.endAdornment && r.adornedEnd, a.error && r.error, a.size === "small" && r.sizeSmall, a.multiline && r.multiline, a.color && r[`color${Ct(a.color)}`], a.fullWidth && r.fullWidth, a.hiddenLabel && r.hiddenLabel];
}, Uf = (n3, r) => {
  const { ownerState: a } = n3;
  return [r.input, a.size === "small" && r.inputSizeSmall, a.multiline && r.inputMultiline, a.type === "search" && r.inputTypeSearch, a.startAdornment && r.inputAdornedStart, a.endAdornment && r.inputAdornedEnd, a.hiddenLabel && r.inputHiddenLabel];
}, rE = (n3) => {
  const { classes: r, color: a, disabled: u, error: f, endAdornment: h, focused: g, formControl: v, fullWidth: y, hiddenLabel: b, multiline: S, readOnly: w, size: A, startAdornment: P, type: R } = n3, M = { root: ["root", `color${Ct(a)}`, u && "disabled", f && "error", y && "fullWidth", g && "focused", v && "formControl", A && A !== "medium" && `size${Ct(A)}`, S && "multiline", P && "adornedStart", h && "adornedEnd", b && "hiddenLabel", w && "readOnly"], input: ["input", u && "disabled", R === "search" && "inputTypeSearch", S && "inputMultiline", A === "small" && "inputSizeSmall", b && "inputHiddenLabel", P && "inputAdornedStart", h && "inputAdornedEnd", w && "readOnly"] };
  return Pe(M, oE, r);
}, Zf = Mt("div", { name: "MuiInputBase", slot: "Root", overridesResolver: jf })(Ee(({ theme: n3 }) => ({ ...n3.typography.body1, color: (n3.vars || n3).palette.text.primary, lineHeight: "1.4375em", boxSizing: "border-box", position: "relative", cursor: "text", display: "inline-flex", alignItems: "center", [`&.${Ni.disabled}`]: { color: (n3.vars || n3).palette.text.disabled, cursor: "default" }, variants: [{ props: ({ ownerState: r }) => r.multiline, style: { padding: "4px 0 5px" } }, { props: ({ ownerState: r, size: a }) => r.multiline && a === "small", style: { paddingTop: 1 } }, { props: ({ ownerState: r }) => r.fullWidth, style: { width: "100%" } }] }))), qf = Mt("input", { name: "MuiInputBase", slot: "Input", overridesResolver: Uf })(Ee(({ theme: n3 }) => {
  const r = n3.palette.mode === "light", a = { color: "currentColor", ...n3.vars ? { opacity: n3.vars.opacity.inputPlaceholder } : { opacity: r ? 0.42 : 0.5 }, transition: n3.transitions.create("opacity", { duration: n3.transitions.duration.shorter }) }, u = { opacity: "0 !important" }, f = n3.vars ? { opacity: n3.vars.opacity.inputPlaceholder } : { opacity: r ? 0.42 : 0.5 };
  return { font: "inherit", letterSpacing: "inherit", color: "currentColor", padding: "4px 0 5px", border: 0, boxSizing: "content-box", background: "none", height: "1.4375em", margin: 0, WebkitTapHighlightColor: "transparent", display: "block", minWidth: 0, width: "100%", "&::-webkit-input-placeholder": a, "&::-moz-placeholder": a, "&::-ms-input-placeholder": a, "&:focus": { outline: 0 }, "&:invalid": { boxShadow: "none" }, "&::-webkit-search-decoration": { WebkitAppearance: "none" }, [`label[data-shrink=false] + .${Ni.formControl} &`]: { "&::-webkit-input-placeholder": u, "&::-moz-placeholder": u, "&::-ms-input-placeholder": u, "&:focus::-webkit-input-placeholder": f, "&:focus::-moz-placeholder": f, "&:focus::-ms-input-placeholder": f }, [`&.${Ni.disabled}`]: { opacity: 1, WebkitTextFillColor: (n3.vars || n3).palette.text.disabled }, variants: [{ props: ({ ownerState: h }) => !h.disableInjectingGlobalStyles, style: { animationName: "mui-auto-fill-cancel", animationDuration: "10ms", "&:-webkit-autofill": { animationDuration: "5000s", animationName: "mui-auto-fill" } } }, { props: { size: "small" }, style: { paddingTop: 1 } }, { props: ({ ownerState: h }) => h.multiline, style: { height: "auto", resize: "none", padding: 0, paddingTop: 0 } }, { props: { type: "search" }, style: { MozAppearance: "textfield" } }] };
})), C_ = Qp({ "@keyframes mui-auto-fill": { from: { display: "block" } }, "@keyframes mui-auto-fill-cancel": { from: { display: "block" } } }), pm = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiInputBase" }), { "aria-describedby": f, autoComplete: h, autoFocus: g, className: v, color: y, components: b = {}, componentsProps: S = {}, defaultValue: w, disabled: A, disableInjectingGlobalStyles: P, endAdornment: R, error: M, fullWidth: $ = false, id: U, inputComponent: V = "input", inputProps: D = {}, inputRef: N, margin: k, maxRows: j, minRows: X, multiline: J = false, name: it, onBlur: ut, onChange: ot, onClick: C, onFocus: st, onKeyDown: W, onKeyUp: et, placeholder: B, readOnly: tt, renderSuffix: rt, rows: gt, size: z, slotProps: Y = {}, slots: ft = {}, startAdornment: dt, type: bt = "text", value: _t, ...ct } = u, At = D.value != null ? D.value : _t, { current: Pt } = O.useRef(At != null), $t = O.useRef(), Rt = O.useCallback((jt) => {
  }, []), Ut = Un($t, N, D.ref, Rt), [Wt, te] = O.useState(false), qt = il(), de = nl({ props: u, muiFormControl: qt, states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"] });
  de.focused = qt ? qt.focused : Wt, O.useEffect(() => {
    !qt && A && Wt && (te(false), ut && ut());
  }, [qt, A, Wt, ut]);
  const ie = qt && qt.onFilled, ue = qt && qt.onEmpty, Tt = O.useCallback((jt) => {
    Cf(jt) ? ie && ie() : ue && ue();
  }, [ie, ue]);
  So(() => {
    Pt && Tt({ value: At });
  }, [At, Tt, Pt]);
  const _e = (jt) => {
    st && st(jt), D.onFocus && D.onFocus(jt), qt && qt.onFocus ? qt.onFocus(jt) : te(true);
  }, Bt = (jt) => {
    ut && ut(jt), D.onBlur && D.onBlur(jt), qt && qt.onBlur ? qt.onBlur(jt) : te(false);
  }, Jt = (jt, ...cn) => {
    if (!Pt) {
      const kn = jt.target || $t.current;
      if (kn == null) throw new Error(br(1));
      Tt({ value: kn.value });
    }
    D.onChange && D.onChange(jt, ...cn), ot && ot(jt, ...cn);
  };
  O.useEffect(() => {
    Tt($t.current);
  }, []);
  const Ot = (jt) => {
    $t.current && jt.currentTarget === jt.target && $t.current.focus(), C && C(jt);
  };
  let tn = V, be = D;
  J && tn === "input" && (gt ? be = { type: void 0, minRows: gt, maxRows: gt, ...be } : be = { type: void 0, maxRows: j, minRows: X, ...be }, tn = nE);
  const qe = (jt) => {
    Tt(jt.animationName === "mui-auto-fill-cancel" ? $t.current : { value: "x" });
  };
  O.useEffect(() => {
    qt && qt.setAdornedStart(!!dt);
  }, [qt, dt]);
  const ce = { ...u, color: de.color || "primary", disabled: de.disabled, endAdornment: R, error: de.error, focused: de.focused, formControl: qt, fullWidth: $, hiddenLabel: de.hiddenLabel, multiline: J, size: de.size, startAdornment: dt, type: bt }, Vt = rE(ce), oe = ft.root || b.Root || Zf, he = Y.root || S.root || {}, xe = ft.input || b.Input || qf;
  return be = { ...be, ...Y.input ?? S.input }, Z.jsxs(O.Fragment, { children: [!P && typeof C_ == "function" && (S_ || (S_ = Z.jsx(C_, {}))), Z.jsxs(oe, { ...he, ref: a, onClick: Ot, ...ct, ...!yf(oe) && { ownerState: { ...ce, ...he.ownerState } }, className: Yt(Vt.root, he.className, v, tt && "MuiInputBase-readOnly"), children: [dt, Z.jsx(hm.Provider, { value: null, children: Z.jsx(xe, { "aria-invalid": de.error, "aria-describedby": f, autoComplete: h, autoFocus: g, defaultValue: w, disabled: de.disabled, id: U, onAnimationStart: qe, name: it, placeholder: B, readOnly: tt, required: de.required, rows: gt, value: At, onKeyDown: W, onKeyUp: et, type: bt, ...be, ...!yf(xe) && { as: tn, ownerState: { ...ce, ...be.ownerState } }, ref: Ut, className: Yt(Vt.input, be.className, tt && "MuiInputBase-readOnly"), onBlur: Bt, onChange: Jt, onFocus: _e }) }), R, rt ? rt({ ...de, startAdornment: dt }) : null] })] });
});
function aE(n3) {
  return Re("MuiInput", n3);
}
const fa = { ...Ni, ...Le("MuiInput", ["root", "underline", "input"]) };
function sE(n3) {
  return Re("MuiOutlinedInput", n3);
}
const to = { ...Ni, ...Le("MuiOutlinedInput", ["root", "notchedOutline", "input"]) };
function lE(n3) {
  return Re("MuiFilledInput", n3);
}
const $i = { ...Ni, ...Le("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"]) }, rb = Ja(Z.jsx("path", { d: "M7 10l5 5 5-5z" }));
function uE(n3) {
  return Re("MuiAutocomplete", n3);
}
const le = Le("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]);
var T_, w_;
const cE = (n3) => {
  const { classes: r, disablePortal: a, expanded: u, focused: f, fullWidth: h, hasClearIcon: g, hasPopupIcon: v, inputFocused: y, popupOpen: b, size: S } = n3, w = { root: ["root", u && "expanded", f && "focused", h && "fullWidth", g && "hasClearIcon", v && "hasPopupIcon"], inputRoot: ["inputRoot"], input: ["input", y && "inputFocused"], tag: ["tag", `tagSize${Ct(S)}`], endAdornment: ["endAdornment"], clearIndicator: ["clearIndicator"], popupIndicator: ["popupIndicator", b && "popupIndicatorOpen"], popper: ["popper", a && "popperDisablePortal"], paper: ["paper"], listbox: ["listbox"], loading: ["loading"], noOptions: ["noOptions"], option: ["option"], groupLabel: ["groupLabel"], groupUl: ["groupUl"] };
  return Pe(w, uE, r);
}, fE = Mt("div", { name: "MuiAutocomplete", slot: "Root", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3, { fullWidth: u, hasClearIcon: f, hasPopupIcon: h, inputFocused: g, size: v } = a;
  return [{ [`& .${le.tag}`]: r.tag }, { [`& .${le.tag}`]: r[`tagSize${Ct(v)}`] }, { [`& .${le.inputRoot}`]: r.inputRoot }, { [`& .${le.input}`]: r.input }, { [`& .${le.input}`]: g && r.inputFocused }, r.root, u && r.fullWidth, h && r.hasPopupIcon, f && r.hasClearIcon];
} })({ [`&.${le.focused} .${le.clearIndicator}`]: { visibility: "visible" }, "@media (pointer: fine)": { [`&:hover .${le.clearIndicator}`]: { visibility: "visible" } }, [`& .${le.tag}`]: { margin: 3, maxWidth: "calc(100% - 6px)" }, [`& .${le.inputRoot}`]: { [`.${le.hasPopupIcon}&, .${le.hasClearIcon}&`]: { paddingRight: 30 }, [`.${le.hasPopupIcon}.${le.hasClearIcon}&`]: { paddingRight: 56 }, [`& .${le.input}`]: { width: 0, minWidth: 30 } }, [`& .${fa.root}`]: { paddingBottom: 1, "& .MuiInput-input": { padding: "4px 4px 4px 0px" } }, [`& .${fa.root}.${Ni.sizeSmall}`]: { [`& .${fa.input}`]: { padding: "2px 4px 3px 0" } }, [`& .${to.root}`]: { padding: 9, [`.${le.hasPopupIcon}&, .${le.hasClearIcon}&`]: { paddingRight: 39 }, [`.${le.hasPopupIcon}.${le.hasClearIcon}&`]: { paddingRight: 65 }, [`& .${le.input}`]: { padding: "7.5px 4px 7.5px 5px" }, [`& .${le.endAdornment}`]: { right: 9 } }, [`& .${to.root}.${Ni.sizeSmall}`]: { paddingTop: 6, paddingBottom: 6, paddingLeft: 6, [`& .${le.input}`]: { padding: "2.5px 4px 2.5px 8px" } }, [`& .${$i.root}`]: { paddingTop: 19, paddingLeft: 8, [`.${le.hasPopupIcon}&, .${le.hasClearIcon}&`]: { paddingRight: 39 }, [`.${le.hasPopupIcon}.${le.hasClearIcon}&`]: { paddingRight: 65 }, [`& .${$i.input}`]: { padding: "7px 4px" }, [`& .${le.endAdornment}`]: { right: 9 } }, [`& .${$i.root}.${Ni.sizeSmall}`]: { paddingBottom: 1, [`& .${$i.input}`]: { padding: "2.5px 4px" } }, [`& .${Ni.hiddenLabel}`]: { paddingTop: 8 }, [`& .${$i.root}.${Ni.hiddenLabel}`]: { paddingTop: 0, paddingBottom: 0, [`& .${le.input}`]: { paddingTop: 16, paddingBottom: 17 } }, [`& .${$i.root}.${Ni.hiddenLabel}.${Ni.sizeSmall}`]: { [`& .${le.input}`]: { paddingTop: 8, paddingBottom: 9 } }, [`& .${le.input}`]: { flexGrow: 1, textOverflow: "ellipsis", opacity: 0 }, variants: [{ props: { fullWidth: true }, style: { width: "100%" } }, { props: { size: "small" }, style: { [`& .${le.tag}`]: { margin: 2, maxWidth: "calc(100% - 4px)" } } }, { props: { inputFocused: true }, style: { [`& .${le.input}`]: { opacity: 1 } } }, { props: { multiple: true }, style: { [`& .${le.inputRoot}`]: { flexWrap: "wrap" } } }] }), dE = Mt("div", { name: "MuiAutocomplete", slot: "EndAdornment" })({ position: "absolute", right: 0, top: "50%", transform: "translate(0, -50%)" }), hE = Mt(Ka, { name: "MuiAutocomplete", slot: "ClearIndicator" })({ marginRight: -2, padding: 4, visibility: "hidden" }), pE = Mt(Ka, { name: "MuiAutocomplete", slot: "PopupIndicator", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.popupIndicator, a.popupOpen && r.popupIndicatorOpen];
} })({ padding: 2, marginRight: -2, variants: [{ props: { popupOpen: true }, style: { transform: "rotate(180deg)" } }] }), mE = Mt(ib, { name: "MuiAutocomplete", slot: "Popper", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [{ [`& .${le.option}`]: r.option }, r.popper, a.disablePortal && r.popperDisablePortal];
} })(Ee(({ theme: n3 }) => ({ zIndex: (n3.vars || n3).zIndex.modal, variants: [{ props: { disablePortal: true }, style: { position: "absolute" } }] }))), gE = Mt(im, { name: "MuiAutocomplete", slot: "Paper" })(Ee(({ theme: n3 }) => ({ ...n3.typography.body1, overflow: "auto" }))), vE = Mt("div", { name: "MuiAutocomplete", slot: "Loading" })(Ee(({ theme: n3 }) => ({ color: (n3.vars || n3).palette.text.secondary, padding: "14px 16px" }))), yE = Mt("div", { name: "MuiAutocomplete", slot: "NoOptions" })(Ee(({ theme: n3 }) => ({ color: (n3.vars || n3).palette.text.secondary, padding: "14px 16px" }))), _E = Mt("ul", { name: "MuiAutocomplete", slot: "Listbox" })(Ee(({ theme: n3 }) => ({ listStyle: "none", margin: 0, padding: "8px 0", maxHeight: "40vh", overflow: "auto", position: "relative", [`& .${le.option}`]: { minHeight: 48, display: "flex", overflow: "hidden", justifyContent: "flex-start", alignItems: "center", cursor: "pointer", paddingTop: 6, boxSizing: "border-box", outline: "0", WebkitTapHighlightColor: "transparent", paddingBottom: 6, paddingLeft: 16, paddingRight: 16, [n3.breakpoints.up("sm")]: { minHeight: "auto" }, [`&.${le.focused}`]: { backgroundColor: (n3.vars || n3).palette.action.hover, "@media (hover: none)": { backgroundColor: "transparent" } }, '&[aria-disabled="true"]': { opacity: (n3.vars || n3).palette.action.disabledOpacity, pointerEvents: "none" }, [`&.${le.focusVisible}`]: { backgroundColor: (n3.vars || n3).palette.action.focus }, '&[aria-selected="true"]': { backgroundColor: n3.alpha((n3.vars || n3).palette.primary.main, (n3.vars || n3).palette.action.selectedOpacity), [`&.${le.focused}`]: { backgroundColor: n3.alpha((n3.vars || n3).palette.primary.main, `${(n3.vars || n3).palette.action.selectedOpacity} + ${(n3.vars || n3).palette.action.hoverOpacity}`), "@media (hover: none)": { backgroundColor: (n3.vars || n3).palette.action.selected } }, [`&.${le.focusVisible}`]: { backgroundColor: n3.alpha((n3.vars || n3).palette.primary.main, `${(n3.vars || n3).palette.action.selectedOpacity} + ${(n3.vars || n3).palette.action.focusOpacity}`) } } } }))), bE = Mt(Ep, { name: "MuiAutocomplete", slot: "GroupLabel" })(Ee(({ theme: n3 }) => ({ backgroundColor: (n3.vars || n3).palette.background.paper, top: -8 }))), xE = Mt("ul", { name: "MuiAutocomplete", slot: "GroupUl" })({ padding: 0, [`& .${le.option}`]: { paddingLeft: 24 } }), SE = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiAutocomplete" }), { autoComplete: f = false, autoHighlight: h = false, autoSelect: g = false, blurOnSelect: v = false, ChipProps: y, className: b, clearIcon: S = T_ || (T_ = Z.jsx(_w, { fontSize: "small" })), clearOnBlur: w = !u.freeSolo, clearOnEscape: A = false, clearText: P = "Clear", closeText: R = "Close", componentsProps: M, defaultValue: $ = u.multiple ? [] : null, disableClearable: U = false, disableCloseOnSelect: V = false, disabled: D = false, disabledItemsFocusable: N = false, disableListWrap: k = false, disablePortal: j = false, filterOptions: X, filterSelectedOptions: J = false, forcePopupIcon: it = "auto", freeSolo: ut = false, fullWidth: ot = false, getLimitTagsText: C = (ae) => `+${ae}`, getOptionDisabled: st, getOptionKey: W, getOptionLabel: et, isOptionEqualToValue: B, groupBy: tt, handleHomeEndKeys: rt = !u.freeSolo, id: gt, includeInputInList: z = false, inputValue: Y, limitTags: ft = -1, ListboxComponent: dt, ListboxProps: bt, loading: _t = false, loadingText: ct = "Loading\u2026", multiple: At = false, noOptionsText: Pt = "No options", onChange: $t, onClose: Rt, onHighlightChange: Ut, onInputChange: Wt, onOpen: te, open: qt, openOnFocus: de = false, openText: ie = "Open", options: ue, PaperComponent: Tt, PopperComponent: _e, popupIcon: Bt = w_ || (w_ = Z.jsx(rb, {})), readOnly: Jt = false, renderGroup: Ot, renderInput: tn, renderOption: be, renderTags: qe, renderValue: ce, selectOnFocus: Vt = !u.freeSolo, size: oe = "medium", slots: he = {}, slotProps: xe = {}, value: jt, ...cn } = u, { getRootProps: kn, getInputProps: rn, getInputLabelProps: kt, getPopupIndicatorProps: ne, getClearProps: re, getItemProps: Kn, getListboxProps: so, getOptionProps: lo, value: Wn, dirty: Tn, expanded: uo, id: ui, popupOpen: ci, focused: fi, focusedItem: Yo, anchorEl: Zi, setAnchorEl: To, inputValue: di, groupedOptions: Qe } = Rw({ ...u, componentName: "Autocomplete" }), an = !U && !D && Tn && !Jt, hi = (!ut || it === true) && it !== false, { onMouseDown: wn } = rn(), { ref: Dt, ...Cr } = so(), pi = et || ((ae) => ae.label ?? ae), Ve = { ...u, disablePortal: j, expanded: uo, focused: fi, fullWidth: ot, getOptionLabel: pi, hasClearIcon: an, hasPopupIcon: hi, inputFocused: Yo === -1, popupOpen: ci, size: oe }, ke = cE(Ve), En = { slots: { paper: Tt, popper: _e, ...he }, slotProps: { chip: y, listbox: bt, ...M, ...xe } }, [Zn, Qn] = vn("listbox", { elementType: _E, externalForwardedProps: En, ownerState: Ve, className: ke.listbox, additionalProps: Cr, ref: Dt }), [Je, pt] = vn("paper", { elementType: im, externalForwardedProps: En, ownerState: Ve, className: ke.paper }), [ht, wt] = vn("popper", { elementType: ib, externalForwardedProps: En, ownerState: Ve, className: ke.popper, additionalProps: { disablePortal: j, style: { width: Zi ? Zi.clientWidth : null }, role: "presentation", anchorEl: Zi, open: ci } });
  let It;
  const Ft = (ae) => ({ className: ke.tag, disabled: D, ...Kn(ae) });
  if (At ? Wn.length > 0 && (qe ? It = qe(Wn, Ft, Ve) : ce ? It = ce(Wn, Ft, Ve) : It = Wn.map((ae, On) => {
    const { key: ti, ...ei } = Ft({ index: On });
    return Z.jsx(ob, { label: pi(ae), size: oe, ...ei, ...En.slotProps.chip }, ti);
  })) : ce && Wn != null && (It = ce(Wn, Ft, Ve)), ft > -1 && Array.isArray(It)) {
    const ae = It.length - ft;
    !fi && ae > 0 && (It = It.splice(0, ft), It.push(Z.jsx("span", { className: ke.tag, children: C(ae) }, It.length)));
  }
  const Ye = Ot || ((ae) => Z.jsxs("li", { children: [Z.jsx(bE, { className: ke.groupLabel, ownerState: Ve, component: "div", children: ae.group }), Z.jsx(xE, { className: ke.groupUl, ownerState: Ve, children: ae.children })] }, ae.key)), co = be || ((ae, On) => {
    const { key: ti, ...ei } = ae;
    return Z.jsx("li", { ...ei, children: pi(On) }, ti);
  }), Xo = (ae, On) => {
    const ti = lo({ option: ae, index: On });
    return co({ ...ti, className: ke.option }, ae, { selected: ti["aria-selected"], index: On, inputValue: di }, Ve);
  }, mi = En.slotProps.clearIndicator, wo = En.slotProps.popupIndicator;
  return Z.jsxs(O.Fragment, { children: [Z.jsx(fE, { ref: a, className: Yt(ke.root, b), ownerState: Ve, ...kn(cn), children: tn({ id: ui, disabled: D, fullWidth: true, size: oe === "small" ? "small" : void 0, InputLabelProps: kt(), InputProps: { ref: To, className: ke.inputRoot, startAdornment: It, onMouseDown: (ae) => {
    ae.target === ae.currentTarget && wn(ae);
  }, ...(an || hi) && { endAdornment: Z.jsxs(dE, { className: ke.endAdornment, ownerState: Ve, children: [an ? Z.jsx(hE, { ...re(), "aria-label": P, title: P, ownerState: Ve, ...mi, className: Yt(ke.clearIndicator, mi == null ? void 0 : mi.className), children: S }) : null, hi ? Z.jsx(pE, { ...ne(), disabled: D, "aria-label": ci ? R : ie, title: ci ? R : ie, ownerState: Ve, ...wo, className: Yt(ke.popupIndicator, wo == null ? void 0 : wo.className), children: Bt }) : null] }) } }, inputProps: { className: ke.input, disabled: D, readOnly: Jt, ...rn() } }) }), Zi ? Z.jsx(mE, { as: ht, ...wt, children: Z.jsxs(gE, { as: Je, ...pt, children: [_t && Qe.length === 0 ? Z.jsx(vE, { className: ke.loading, ownerState: Ve, children: ct }) : null, Qe.length === 0 && !ut && !_t ? Z.jsx(yE, { className: ke.noOptions, ownerState: Ve, role: "presentation", onMouseDown: (ae) => {
    ae.preventDefault();
  }, children: Pt }) : null, Qe.length > 0 ? Z.jsx(Zn, { as: dt, ...Qn, children: Qe.map((ae, On) => tt ? Ye({ key: ae.key, group: ae.group, children: ae.options.map((ti, ei) => Xo(ti, ae.index + ei)) }) : Xo(ae, On)) }) : null] }) }) : null] });
}), CE = { entering: { opacity: 1 }, entered: { opacity: 1 } }, TE = O.forwardRef(function(r, a) {
  const u = Qa(), f = { enter: u.transitions.duration.enteringScreen, exit: u.transitions.duration.leavingScreen }, { addEndListener: h, appear: g = true, children: v, easing: y, in: b, onEnter: S, onEntered: w, onEntering: A, onExit: P, onExited: R, onExiting: M, style: $, timeout: U = f, TransitionComponent: V = Go, ...D } = r, N = O.useRef(null), k = Un(N, Bu(v), a), j = (W) => (et) => {
    if (W) {
      const B = N.current;
      et === void 0 ? W(B) : W(B, et);
    }
  }, X = j(A), J = j((W, et) => {
    H0(W);
    const B = vf({ style: $, timeout: U, easing: y }, { mode: "enter" });
    W.style.webkitTransition = u.transitions.create("opacity", B), W.style.transition = u.transitions.create("opacity", B), S && S(W, et);
  }), it = j(w), ut = j(M), ot = j((W) => {
    const et = vf({ style: $, timeout: U, easing: y }, { mode: "exit" });
    W.style.webkitTransition = u.transitions.create("opacity", et), W.style.transition = u.transitions.create("opacity", et), P && P(W);
  }), C = j(R), st = (W) => {
    h && h(N.current, W);
  };
  return Z.jsx(V, { appear: g, in: b, nodeRef: N, onEnter: J, onEntered: it, onEntering: X, onExit: ot, onExited: C, onExiting: ut, addEndListener: st, timeout: U, ...D, children: (W, { ownerState: et, ...B }) => O.cloneElement(v, { style: { opacity: 0, visibility: W === "exited" && !b ? "hidden" : void 0, ...CE[W], ...$, ...v.props.style }, ref: k, ...B }) });
});
function wE(n3) {
  return Re("MuiBackdrop", n3);
}
Le("MuiBackdrop", ["root", "invisible"]);
const EE = (n3) => {
  const { classes: r, invisible: a } = n3;
  return Pe({ root: ["root", a && "invisible"] }, wE, r);
}, OE = Mt("div", { name: "MuiBackdrop", slot: "Root", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.root, a.invisible && r.invisible];
} })({ position: "fixed", display: "flex", alignItems: "center", justifyContent: "center", right: 0, bottom: 0, top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", WebkitTapHighlightColor: "transparent", variants: [{ props: { invisible: true }, style: { backgroundColor: "transparent" } }] }), ME = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiBackdrop" }), { children: f, className: h, component: g = "div", invisible: v = false, open: y, components: b = {}, componentsProps: S = {}, slotProps: w = {}, slots: A = {}, TransitionComponent: P, transitionDuration: R, ...M } = u, $ = { ...u, component: g, invisible: v }, U = EE($), V = { transition: P, root: b.Root, ...A }, D = { ...S, ...w }, N = { component: g, slots: V, slotProps: D }, [k, j] = vn("root", { elementType: OE, externalForwardedProps: N, className: Yt(U.root, h), ownerState: $ }), [X, J] = vn("transition", { elementType: TE, externalForwardedProps: N, ownerState: $ });
  return Z.jsx(X, { in: y, timeout: R, ...M, ...J, children: Z.jsx(k, { "aria-hidden": true, ...j, classes: U, ref: a, children: f }) });
}), AE = Le("MuiBox", ["root"]), RE = $f(), Js = qS({ themeId: Uo, defaultTheme: RE, defaultClassName: AE.root, generateClassName: m0.generate });
function LE(n3) {
  return Re("MuiButton", n3);
}
const Za = Le("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), PE = O.createContext({}), zE = O.createContext(void 0), kE = (n3) => {
  const { color: r, disableElevation: a, fullWidth: u, size: f, variant: h, loading: g, loadingPosition: v, classes: y } = n3, b = { root: ["root", g && "loading", h, `${h}${Ct(r)}`, `size${Ct(f)}`, `${h}Size${Ct(f)}`, `color${Ct(r)}`, a && "disableElevation", u && "fullWidth", g && `loadingPosition${Ct(v)}`], startIcon: ["icon", "startIcon", `iconSize${Ct(f)}`], endIcon: ["icon", "endIcon", `iconSize${Ct(f)}`], loadingIndicator: ["loadingIndicator"], loadingWrapper: ["loadingWrapper"] }, S = Pe(b, LE, y);
  return { ...y, ...S };
}, ab = [{ props: { size: "small" }, style: { "& > *:nth-of-type(1)": { fontSize: 18 } } }, { props: { size: "medium" }, style: { "& > *:nth-of-type(1)": { fontSize: 20 } } }, { props: { size: "large" }, style: { "& > *:nth-of-type(1)": { fontSize: 22 } } }], BE = Mt(xf, { shouldForwardProp: (n3) => Co(n3) || n3 === "classes", name: "MuiButton", slot: "Root", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.root, r[a.variant], r[`${a.variant}${Ct(a.color)}`], r[`size${Ct(a.size)}`], r[`${a.variant}Size${Ct(a.size)}`], a.color === "inherit" && r.colorInherit, a.disableElevation && r.disableElevation, a.fullWidth && r.fullWidth, a.loading && r.loading];
} })(Ee(({ theme: n3 }) => {
  const r = n3.palette.mode === "light" ? n3.palette.grey[300] : n3.palette.grey[800], a = n3.palette.mode === "light" ? n3.palette.grey.A100 : n3.palette.grey[700];
  return { ...n3.typography.button, minWidth: 64, padding: "6px 16px", border: 0, borderRadius: (n3.vars || n3).shape.borderRadius, transition: n3.transitions.create(["background-color", "box-shadow", "border-color", "color"], { duration: n3.transitions.duration.short }), "&:hover": { textDecoration: "none" }, [`&.${Za.disabled}`]: { color: (n3.vars || n3).palette.action.disabled }, variants: [{ props: { variant: "contained" }, style: { color: "var(--variant-containedColor)", backgroundColor: "var(--variant-containedBg)", boxShadow: (n3.vars || n3).shadows[2], "&:hover": { boxShadow: (n3.vars || n3).shadows[4], "@media (hover: none)": { boxShadow: (n3.vars || n3).shadows[2] } }, "&:active": { boxShadow: (n3.vars || n3).shadows[8] }, [`&.${Za.focusVisible}`]: { boxShadow: (n3.vars || n3).shadows[6] }, [`&.${Za.disabled}`]: { color: (n3.vars || n3).palette.action.disabled, boxShadow: (n3.vars || n3).shadows[0], backgroundColor: (n3.vars || n3).palette.action.disabledBackground } } }, { props: { variant: "outlined" }, style: { padding: "5px 15px", border: "1px solid currentColor", borderColor: "var(--variant-outlinedBorder, currentColor)", backgroundColor: "var(--variant-outlinedBg)", color: "var(--variant-outlinedColor)", [`&.${Za.disabled}`]: { border: `1px solid ${(n3.vars || n3).palette.action.disabledBackground}` } } }, { props: { variant: "text" }, style: { padding: "6px 8px", color: "var(--variant-textColor)", backgroundColor: "var(--variant-textBg)" } }, ...Object.entries(n3.palette).filter(xi()).map(([u]) => ({ props: { color: u }, style: { "--variant-textColor": (n3.vars || n3).palette[u].main, "--variant-outlinedColor": (n3.vars || n3).palette[u].main, "--variant-outlinedBorder": n3.alpha((n3.vars || n3).palette[u].main, 0.5), "--variant-containedColor": (n3.vars || n3).palette[u].contrastText, "--variant-containedBg": (n3.vars || n3).palette[u].main, "@media (hover: hover)": { "&:hover": { "--variant-containedBg": (n3.vars || n3).palette[u].dark, "--variant-textBg": n3.alpha((n3.vars || n3).palette[u].main, (n3.vars || n3).palette.action.hoverOpacity), "--variant-outlinedBorder": (n3.vars || n3).palette[u].main, "--variant-outlinedBg": n3.alpha((n3.vars || n3).palette[u].main, (n3.vars || n3).palette.action.hoverOpacity) } } } })), { props: { color: "inherit" }, style: { color: "inherit", borderColor: "currentColor", "--variant-containedBg": n3.vars ? n3.vars.palette.Button.inheritContainedBg : r, "@media (hover: hover)": { "&:hover": { "--variant-containedBg": n3.vars ? n3.vars.palette.Button.inheritContainedHoverBg : a, "--variant-textBg": n3.alpha((n3.vars || n3).palette.text.primary, (n3.vars || n3).palette.action.hoverOpacity), "--variant-outlinedBg": n3.alpha((n3.vars || n3).palette.text.primary, (n3.vars || n3).palette.action.hoverOpacity) } } } }, { props: { size: "small", variant: "text" }, style: { padding: "4px 5px", fontSize: n3.typography.pxToRem(13) } }, { props: { size: "large", variant: "text" }, style: { padding: "8px 11px", fontSize: n3.typography.pxToRem(15) } }, { props: { size: "small", variant: "outlined" }, style: { padding: "3px 9px", fontSize: n3.typography.pxToRem(13) } }, { props: { size: "large", variant: "outlined" }, style: { padding: "7px 21px", fontSize: n3.typography.pxToRem(15) } }, { props: { size: "small", variant: "contained" }, style: { padding: "4px 10px", fontSize: n3.typography.pxToRem(13) } }, { props: { size: "large", variant: "contained" }, style: { padding: "8px 22px", fontSize: n3.typography.pxToRem(15) } }, { props: { disableElevation: true }, style: { boxShadow: "none", "&:hover": { boxShadow: "none" }, [`&.${Za.focusVisible}`]: { boxShadow: "none" }, "&:active": { boxShadow: "none" }, [`&.${Za.disabled}`]: { boxShadow: "none" } } }, { props: { fullWidth: true }, style: { width: "100%" } }, { props: { loadingPosition: "center" }, style: { transition: n3.transitions.create(["background-color", "box-shadow", "border-color"], { duration: n3.transitions.duration.short }), [`&.${Za.loading}`]: { color: "transparent" } } }] };
})), DE = Mt("span", { name: "MuiButton", slot: "StartIcon", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.startIcon, a.loading && r.startIconLoadingStart, r[`iconSize${Ct(a.size)}`]];
} })(({ theme: n3 }) => ({ display: "inherit", marginRight: 8, marginLeft: -4, variants: [{ props: { size: "small" }, style: { marginLeft: -2 } }, { props: { loadingPosition: "start", loading: true }, style: { transition: n3.transitions.create(["opacity"], { duration: n3.transitions.duration.short }), opacity: 0 } }, { props: { loadingPosition: "start", loading: true, fullWidth: true }, style: { marginRight: -8 } }, ...ab] })), NE = Mt("span", { name: "MuiButton", slot: "EndIcon", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.endIcon, a.loading && r.endIconLoadingEnd, r[`iconSize${Ct(a.size)}`]];
} })(({ theme: n3 }) => ({ display: "inherit", marginRight: -4, marginLeft: 8, variants: [{ props: { size: "small" }, style: { marginRight: -2 } }, { props: { loadingPosition: "end", loading: true }, style: { transition: n3.transitions.create(["opacity"], { duration: n3.transitions.duration.short }), opacity: 0 } }, { props: { loadingPosition: "end", loading: true, fullWidth: true }, style: { marginLeft: -8 } }, ...ab] })), $E = Mt("span", { name: "MuiButton", slot: "LoadingIndicator" })(({ theme: n3 }) => ({ display: "none", position: "absolute", visibility: "visible", variants: [{ props: { loading: true }, style: { display: "flex" } }, { props: { loadingPosition: "start" }, style: { left: 14 } }, { props: { loadingPosition: "start", size: "small" }, style: { left: 10 } }, { props: { variant: "text", loadingPosition: "start" }, style: { left: 6 } }, { props: { loadingPosition: "center" }, style: { left: "50%", transform: "translate(-50%)", color: (n3.vars || n3).palette.action.disabled } }, { props: { loadingPosition: "end" }, style: { right: 14 } }, { props: { loadingPosition: "end", size: "small" }, style: { right: 10 } }, { props: { variant: "text", loadingPosition: "end" }, style: { right: 6 } }, { props: { loadingPosition: "start", fullWidth: true }, style: { position: "relative", left: -10 } }, { props: { loadingPosition: "end", fullWidth: true }, style: { position: "relative", right: -10 } }] })), E_ = Mt("span", { name: "MuiButton", slot: "LoadingIconPlaceholder" })({ display: "inline-block", width: "1em", height: "1em" }), IE = O.forwardRef(function(r, a) {
  const u = O.useContext(PE), f = O.useContext(zE), h = Su(u, r), g = ze({ props: h, name: "MuiButton" }), { children: v, color: y = "primary", component: b = "button", className: S, disabled: w = false, disableElevation: A = false, disableFocusRipple: P = false, endIcon: R, focusVisibleClassName: M, fullWidth: $ = false, id: U, loading: V = null, loadingIndicator: D, loadingPosition: N = "center", size: k = "medium", startIcon: j, type: X, variant: J = "text", ...it } = g, ut = el(U), ot = D ?? Z.jsx(om, { "aria-labelledby": ut, color: "inherit", size: 16 }), C = { ...g, color: y, component: b, disabled: w, disableElevation: A, disableFocusRipple: P, fullWidth: $, loading: V, loadingIndicator: ot, loadingPosition: N, size: k, type: X, variant: J }, st = kE(C), W = (j || V && N === "start") && Z.jsx(DE, { className: st.startIcon, ownerState: C, children: j || Z.jsx(E_, { className: st.loadingIconPlaceholder, ownerState: C }) }), et = (R || V && N === "end") && Z.jsx(NE, { className: st.endIcon, ownerState: C, children: R || Z.jsx(E_, { className: st.loadingIconPlaceholder, ownerState: C }) }), B = f || "", tt = typeof V == "boolean" ? Z.jsx("span", { className: st.loadingWrapper, style: { display: "contents" }, children: V && Z.jsx($E, { className: st.loadingIndicator, ownerState: C, children: ot }) }) : null;
  return Z.jsxs(BE, { ownerState: C, className: Yt(u.className, st.root, S, B), component: b, disabled: w || V, focusRipple: !P, focusVisibleClassName: Yt(st.focusVisible, M), ref: a, type: X, id: V ? ut : U, ...it, classes: st, children: [W, N !== "end" && tt, v, N === "end" && tt, et] });
}), Op = typeof Qp({}) == "function", HE = (n3, r) => ({ WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", boxSizing: "border-box", WebkitTextSizeAdjust: "100%", ...r && !n3.vars && { colorScheme: n3.palette.mode } }), jE = (n3) => ({ color: (n3.vars || n3).palette.text.primary, ...n3.typography.body1, backgroundColor: (n3.vars || n3).palette.background.default, "@media print": { backgroundColor: (n3.vars || n3).palette.common.white } }), sb = (n3, r = false) => {
  var _a, _b;
  const a = {};
  r && n3.colorSchemes && typeof n3.getColorSchemeSelector == "function" && Object.entries(n3.colorSchemes).forEach(([h, g]) => {
    var _a2, _b2;
    const v = n3.getColorSchemeSelector(h);
    v.startsWith("@") ? a[v] = { ":root": { colorScheme: (_a2 = g.palette) == null ? void 0 : _a2.mode } } : a[v.replace(/\s*&/, "")] = { colorScheme: (_b2 = g.palette) == null ? void 0 : _b2.mode };
  });
  let u = { html: HE(n3, r), "*, *::before, *::after": { boxSizing: "inherit" }, "strong, b": { fontWeight: n3.typography.fontWeightBold }, body: { margin: 0, ...jE(n3), "&::backdrop": { backgroundColor: (n3.vars || n3).palette.background.default } }, ...a };
  const f = (_b = (_a = n3.components) == null ? void 0 : _a.MuiCssBaseline) == null ? void 0 : _b.styleOverrides;
  return f && (u = [u, f]), u;
}, df = "mui-ecs", UE = (n3) => {
  const r = sb(n3, false), a = Array.isArray(r) ? r[0] : r;
  return !n3.vars && a && (a.html[`:root:has(${df})`] = { colorScheme: n3.palette.mode }), n3.colorSchemes && Object.entries(n3.colorSchemes).forEach(([u, f]) => {
    var _a, _b;
    const h = n3.getColorSchemeSelector(u);
    h.startsWith("@") ? a[h] = { [`:root:not(:has(.${df}))`]: { colorScheme: (_a = f.palette) == null ? void 0 : _a.mode } } : a[h.replace(/\s*&/, "")] = { [`&:not(:has(.${df}))`]: { colorScheme: (_b = f.palette) == null ? void 0 : _b.mode } };
  }), r;
}, ZE = Qp(Op ? ({ theme: n3, enableColorScheme: r }) => sb(n3, r) : ({ theme: n3 }) => UE(n3));
function qE(n3) {
  const r = ze({ props: n3, name: "MuiCssBaseline" }), { children: a, enableColorScheme: u = false } = r;
  return Z.jsxs(O.Fragment, { children: [Op && Z.jsx(ZE, { enableColorScheme: u }), !Op && !u && Z.jsx("span", { className: df, style: { display: "none" } }), a] });
}
function lb(n3 = window) {
  const r = n3.document.documentElement.clientWidth;
  return n3.innerWidth - r;
}
function VE(n3) {
  const r = ji(n3);
  return r.body === n3 ? xr(n3).innerWidth > r.documentElement.clientWidth : n3.scrollHeight > n3.clientHeight;
}
function vu(n3, r) {
  r ? n3.setAttribute("aria-hidden", "true") : n3.removeAttribute("aria-hidden");
}
function O_(n3) {
  return parseInt(xr(n3).getComputedStyle(n3).paddingRight, 10) || 0;
}
function GE(n3) {
  const a = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(n3.tagName), u = n3.tagName === "INPUT" && n3.getAttribute("type") === "hidden";
  return a || u;
}
function M_(n3, r, a, u, f) {
  const h = [r, a, ...u];
  [].forEach.call(n3.children, (g) => {
    const v = !h.includes(g), y = !GE(g);
    v && y && vu(g, f);
  });
}
function ep(n3, r) {
  let a = -1;
  return n3.some((u, f) => r(u) ? (a = f, true) : false), a;
}
function YE(n3, r) {
  const a = [], u = n3.container;
  if (!r.disableScrollLock) {
    if (VE(u)) {
      const g = lb(xr(u));
      a.push({ value: u.style.paddingRight, property: "padding-right", el: u }), u.style.paddingRight = `${O_(u) + g}px`;
      const v = ji(u).querySelectorAll(".mui-fixed");
      [].forEach.call(v, (y) => {
        a.push({ value: y.style.paddingRight, property: "padding-right", el: y }), y.style.paddingRight = `${O_(y) + g}px`;
      });
    }
    let h;
    if (u.parentNode instanceof DocumentFragment) h = ji(u).body;
    else {
      const g = u.parentElement, v = xr(u);
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
function FE(n3) {
  const r = [];
  return [].forEach.call(n3.children, (a) => {
    a.getAttribute("aria-hidden") === "true" && r.push(a);
  }), r;
}
class XE {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(r, a) {
    let u = this.modals.indexOf(r);
    if (u !== -1) return u;
    u = this.modals.length, this.modals.push(r), r.modalRef && vu(r.modalRef, false);
    const f = FE(a);
    M_(a, r.mount, r.modalRef, f, true);
    const h = ep(this.containers, (g) => g.container === a);
    return h !== -1 ? (this.containers[h].modals.push(r), u) : (this.containers.push({ modals: [r], container: a, restore: null, hiddenSiblings: f }), u);
  }
  mount(r, a) {
    const u = ep(this.containers, (h) => h.modals.includes(r)), f = this.containers[u];
    f.restore || (f.restore = YE(f, a));
  }
  remove(r, a = true) {
    const u = this.modals.indexOf(r);
    if (u === -1) return u;
    const f = ep(this.containers, (g) => g.modals.includes(r)), h = this.containers[f];
    if (h.modals.splice(h.modals.indexOf(r), 1), this.modals.splice(u, 1), h.modals.length === 0) h.restore && h.restore(), r.modalRef && vu(r.modalRef, a), M_(h.container, r.mount, r.modalRef, h.hiddenSiblings, false), this.containers.splice(f, 1);
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
const KE = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function WE(n3) {
  const r = parseInt(n3.getAttribute("tabindex") || "", 10);
  return Number.isNaN(r) ? n3.contentEditable === "true" || (n3.nodeName === "AUDIO" || n3.nodeName === "VIDEO" || n3.nodeName === "DETAILS") && n3.getAttribute("tabindex") === null ? 0 : n3.tabIndex : r;
}
function QE(n3) {
  if (n3.tagName !== "INPUT" || n3.type !== "radio" || !n3.name) return false;
  const r = (u) => n3.ownerDocument.querySelector(`input[type="radio"]${u}`);
  let a = r(`[name="${n3.name}"]:checked`);
  return a || (a = r(`[name="${n3.name}"]`)), a !== n3;
}
function JE(n3) {
  return !(n3.disabled || n3.tagName === "INPUT" && n3.type === "hidden" || QE(n3));
}
function tO(n3) {
  const r = [], a = [];
  return Array.from(n3.querySelectorAll(KE)).forEach((u, f) => {
    const h = WE(u);
    h === -1 || !JE(u) || (h === 0 ? r.push(u) : a.push({ documentOrder: f, tabIndex: h, node: u }));
  }), a.sort((u, f) => u.tabIndex === f.tabIndex ? u.documentOrder - f.documentOrder : u.tabIndex - f.tabIndex).map((u) => u.node).concat(r);
}
function eO() {
  return true;
}
function nO(n3) {
  const { children: r, disableAutoFocus: a = false, disableEnforceFocus: u = false, disableRestoreFocus: f = false, getTabbable: h = tO, isEnabled: g = eO, open: v } = n3, y = O.useRef(false), b = O.useRef(null), S = O.useRef(null), w = O.useRef(null), A = O.useRef(null), P = O.useRef(false), R = O.useRef(null), M = Un(Bu(r), R), $ = O.useRef(null);
  O.useEffect(() => {
    !v || !R.current || (P.current = !a);
  }, [a, v]), O.useEffect(() => {
    if (!v || !R.current) return;
    const D = ji(R.current);
    return R.current.contains(D.activeElement) || (R.current.hasAttribute("tabIndex") || R.current.setAttribute("tabIndex", "-1"), P.current && R.current.focus()), () => {
      f || (w.current && w.current.focus && (y.current = true, w.current.focus()), w.current = null);
    };
  }, [v]), O.useEffect(() => {
    if (!v || !R.current) return;
    const D = ji(R.current), N = (X) => {
      $.current = X, !(u || !g() || X.key !== "Tab") && D.activeElement === R.current && X.shiftKey && (y.current = true, S.current && S.current.focus());
    }, k = () => {
      var _a, _b;
      const X = R.current;
      if (X === null) return;
      if (!D.hasFocus() || !g() || y.current) {
        y.current = false;
        return;
      }
      if (X.contains(D.activeElement) || u && D.activeElement !== b.current && D.activeElement !== S.current) return;
      if (D.activeElement !== A.current) A.current = null;
      else if (A.current !== null) return;
      if (!P.current) return;
      let J = [];
      if ((D.activeElement === b.current || D.activeElement === S.current) && (J = h(R.current)), J.length > 0) {
        const it = !!(((_a = $.current) == null ? void 0 : _a.shiftKey) && ((_b = $.current) == null ? void 0 : _b.key) === "Tab"), ut = J[0], ot = J[J.length - 1];
        typeof ut != "string" && typeof ot != "string" && (it ? ot.focus() : ut.focus());
      } else X.focus();
    };
    D.addEventListener("focusin", k), D.addEventListener("keydown", N, true);
    const j = setInterval(() => {
      D.activeElement && D.activeElement.tagName === "BODY" && k();
    }, 50);
    return () => {
      clearInterval(j), D.removeEventListener("focusin", k), D.removeEventListener("keydown", N, true);
    };
  }, [a, u, f, g, v, h]);
  const U = (D) => {
    w.current === null && (w.current = D.relatedTarget), P.current = true, A.current = D.target;
    const N = r.props.onFocus;
    N && N(D);
  }, V = (D) => {
    w.current === null && (w.current = D.relatedTarget), P.current = true;
  };
  return Z.jsxs(O.Fragment, { children: [Z.jsx("div", { tabIndex: v ? 0 : -1, onFocus: V, ref: b, "data-testid": "sentinelStart" }), O.cloneElement(r, { ref: M, onFocus: U }), Z.jsx("div", { tabIndex: v ? 0 : -1, onFocus: V, ref: S, "data-testid": "sentinelEnd" })] });
}
function iO(n3) {
  return typeof n3 == "function" ? n3() : n3;
}
function oO(n3) {
  return n3 ? n3.props.hasOwnProperty("in") : false;
}
const A_ = () => {
}, rf = new XE();
function rO(n3) {
  const { container: r, disableEscapeKeyDown: a = false, disableScrollLock: u = false, closeAfterTransition: f = false, onTransitionEnter: h, onTransitionExited: g, children: v, onClose: y, open: b, rootRef: S } = n3, w = O.useRef({}), A = O.useRef(null), P = O.useRef(null), R = Un(P, S), [M, $] = O.useState(!b), U = oO(v);
  let V = true;
  (n3["aria-hidden"] === "false" || n3["aria-hidden"] === false) && (V = false);
  const D = () => ji(A.current), N = () => (w.current.modalRef = P.current, w.current.mount = A.current, w.current), k = () => {
    rf.mount(N(), { disableScrollLock: u }), P.current && (P.current.scrollTop = 0);
  }, j = bo(() => {
    const et = iO(r) || D().body;
    rf.add(N(), et), P.current && k();
  }), X = () => rf.isTopModal(N()), J = bo((et) => {
    A.current = et, et && (b && X() ? k() : P.current && vu(P.current, V));
  }), it = O.useCallback(() => {
    rf.remove(N(), V);
  }, [V]);
  O.useEffect(() => () => {
    it();
  }, [it]), O.useEffect(() => {
    b ? j() : (!U || !f) && it();
  }, [b, it, U, f, j]);
  const ut = (et) => (B) => {
    var _a;
    (_a = et.onKeyDown) == null ? void 0 : _a.call(et, B), !(B.key !== "Escape" || B.which === 229 || !X()) && (a || (B.stopPropagation(), y && y(B, "escapeKeyDown")));
  }, ot = (et) => (B) => {
    var _a;
    (_a = et.onClick) == null ? void 0 : _a.call(et, B), B.target === B.currentTarget && y && y(B, "backdropClick");
  };
  return { getRootProps: (et = {}) => {
    const B = Z0(n3);
    delete B.onTransitionEnter, delete B.onTransitionExited;
    const tt = { ...B, ...et };
    return { role: "presentation", ...tt, onKeyDown: ut(tt), ref: R };
  }, getBackdropProps: (et = {}) => {
    const B = et;
    return { "aria-hidden": true, ...B, onClick: ot(B), open: b };
  }, getTransitionProps: () => {
    const et = () => {
      $(false), h && h();
    }, B = () => {
      $(true), g && g(), f && it();
    };
    return { onEnter: e_(et, (v == null ? void 0 : v.props.onEnter) ?? A_), onExited: e_(B, (v == null ? void 0 : v.props.onExited) ?? A_) };
  }, rootRef: R, portalRef: J, isTopModal: X, exited: M, hasTransition: U };
}
function aO(n3) {
  return Re("MuiModal", n3);
}
Le("MuiModal", ["root", "hidden", "backdrop"]);
const sO = (n3) => {
  const { open: r, exited: a, classes: u } = n3;
  return Pe({ root: ["root", !r && a && "hidden"], backdrop: ["backdrop"] }, aO, u);
}, lO = Mt("div", { name: "MuiModal", slot: "Root", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.root, !a.open && a.exited && r.hidden];
} })(Ee(({ theme: n3 }) => ({ position: "fixed", zIndex: (n3.vars || n3).zIndex.modal, right: 0, bottom: 0, top: 0, left: 0, variants: [{ props: ({ ownerState: r }) => !r.open && r.exited, style: { visibility: "hidden" } }] }))), uO = Mt(ME, { name: "MuiModal", slot: "Backdrop" })({ zIndex: -1 }), cO = O.forwardRef(function(r, a) {
  const u = ze({ name: "MuiModal", props: r }), { BackdropComponent: f = uO, BackdropProps: h, classes: g, className: v, closeAfterTransition: y = false, children: b, container: S, component: w, components: A = {}, componentsProps: P = {}, disableAutoFocus: R = false, disableEnforceFocus: M = false, disableEscapeKeyDown: $ = false, disablePortal: U = false, disableRestoreFocus: V = false, disableScrollLock: D = false, hideBackdrop: N = false, keepMounted: k = false, onClose: j, onTransitionEnter: X, onTransitionExited: J, open: it, slotProps: ut = {}, slots: ot = {}, theme: C, ...st } = u, W = { ...u, closeAfterTransition: y, disableAutoFocus: R, disableEnforceFocus: M, disableEscapeKeyDown: $, disablePortal: U, disableRestoreFocus: V, disableScrollLock: D, hideBackdrop: N, keepMounted: k }, { getRootProps: et, getBackdropProps: B, getTransitionProps: tt, portalRef: rt, isTopModal: gt, exited: z, hasTransition: Y } = rO({ ...W, rootRef: a }), ft = { ...W, exited: z }, dt = sO(ft), bt = {};
  if (b.props.tabIndex === void 0 && (bt.tabIndex = "-1"), Y) {
    const { onEnter: Rt, onExited: Ut } = tt();
    bt.onEnter = Rt, bt.onExited = Ut;
  }
  const _t = { slots: { root: A.Root, backdrop: A.Backdrop, ...ot }, slotProps: { ...P, ...ut } }, [ct, At] = vn("root", { ref: a, elementType: lO, externalForwardedProps: { ..._t, ...st, component: w }, getSlotProps: et, ownerState: ft, className: Yt(v, dt == null ? void 0 : dt.root, !ft.open && ft.exited && (dt == null ? void 0 : dt.hidden)) }), [Pt, $t] = vn("backdrop", { ref: h == null ? void 0 : h.ref, elementType: f, externalForwardedProps: _t, shouldForwardComponentProp: true, additionalProps: h, getSlotProps: (Rt) => B({ ...Rt, onClick: (Ut) => {
    (Rt == null ? void 0 : Rt.onClick) && Rt.onClick(Ut);
  } }), className: Yt(h == null ? void 0 : h.className, dt == null ? void 0 : dt.backdrop), ownerState: ft });
  return !k && !it && (!Y || z) ? null : Z.jsx(nb, { ref: rt, container: S, disablePortal: U, children: Z.jsxs(ct, { ...At, children: [!N && f ? Z.jsx(Pt, { ...$t }) : null, Z.jsx(nO, { disableEnforceFocus: M, disableAutoFocus: R, disableRestoreFocus: V, isEnabled: gt, open: it, children: O.cloneElement(b, bt) })] }) });
}), fO = (n3) => {
  const { classes: r, disableUnderline: a, startAdornment: u, endAdornment: f, size: h, hiddenLabel: g, multiline: v } = n3, y = { root: ["root", !a && "underline", u && "adornedStart", f && "adornedEnd", h === "small" && `size${Ct(h)}`, g && "hiddenLabel", v && "multiline"], input: ["input"] }, b = Pe(y, lE, r);
  return { ...r, ...b };
}, dO = Mt(Zf, { shouldForwardProp: (n3) => Co(n3) || n3 === "classes", name: "MuiFilledInput", slot: "Root", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [...jf(n3, r), !a.disableUnderline && r.underline];
} })(Ee(({ theme: n3 }) => {
  const r = n3.palette.mode === "light", a = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", u = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", f = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", h = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return { position: "relative", backgroundColor: n3.vars ? n3.vars.palette.FilledInput.bg : u, borderTopLeftRadius: (n3.vars || n3).shape.borderRadius, borderTopRightRadius: (n3.vars || n3).shape.borderRadius, transition: n3.transitions.create("background-color", { duration: n3.transitions.duration.shorter, easing: n3.transitions.easing.easeOut }), "&:hover": { backgroundColor: n3.vars ? n3.vars.palette.FilledInput.hoverBg : f, "@media (hover: none)": { backgroundColor: n3.vars ? n3.vars.palette.FilledInput.bg : u } }, [`&.${$i.focused}`]: { backgroundColor: n3.vars ? n3.vars.palette.FilledInput.bg : u }, [`&.${$i.disabled}`]: { backgroundColor: n3.vars ? n3.vars.palette.FilledInput.disabledBg : h }, variants: [{ props: ({ ownerState: g }) => !g.disableUnderline, style: { "&::after": { left: 0, bottom: 0, content: '""', position: "absolute", right: 0, transform: "scaleX(0)", transition: n3.transitions.create("transform", { duration: n3.transitions.duration.shorter, easing: n3.transitions.easing.easeOut }), pointerEvents: "none" }, [`&.${$i.focused}:after`]: { transform: "scaleX(1) translateX(0)" }, [`&.${$i.error}`]: { "&::before, &::after": { borderBottomColor: (n3.vars || n3).palette.error.main } }, "&::before": { borderBottom: `1px solid ${n3.vars ? n3.alpha(n3.vars.palette.common.onBackground, n3.vars.opacity.inputUnderline) : a}`, left: 0, bottom: 0, content: '"\\00a0"', position: "absolute", right: 0, transition: n3.transitions.create("border-bottom-color", { duration: n3.transitions.duration.shorter }), pointerEvents: "none" }, [`&:hover:not(.${$i.disabled}, .${$i.error}):before`]: { borderBottom: `1px solid ${(n3.vars || n3).palette.text.primary}` }, [`&.${$i.disabled}:before`]: { borderBottomStyle: "dotted" } } }, ...Object.entries(n3.palette).filter(xi()).map(([g]) => {
    var _a;
    return { props: { disableUnderline: false, color: g }, style: { "&::after": { borderBottom: `2px solid ${(_a = (n3.vars || n3).palette[g]) == null ? void 0 : _a.main}` } } };
  }), { props: ({ ownerState: g }) => g.startAdornment, style: { paddingLeft: 12 } }, { props: ({ ownerState: g }) => g.endAdornment, style: { paddingRight: 12 } }, { props: ({ ownerState: g }) => g.multiline, style: { padding: "25px 12px 8px" } }, { props: ({ ownerState: g, size: v }) => g.multiline && v === "small", style: { paddingTop: 21, paddingBottom: 4 } }, { props: ({ ownerState: g }) => g.multiline && g.hiddenLabel, style: { paddingTop: 16, paddingBottom: 17 } }, { props: ({ ownerState: g }) => g.multiline && g.hiddenLabel && g.size === "small", style: { paddingTop: 8, paddingBottom: 9 } }] };
})), hO = Mt(qf, { name: "MuiFilledInput", slot: "Input", overridesResolver: Uf })(Ee(({ theme: n3 }) => ({ paddingTop: 25, paddingRight: 12, paddingBottom: 8, paddingLeft: 12, ...!n3.vars && { "&:-webkit-autofill": { WebkitBoxShadow: n3.palette.mode === "light" ? null : "0 0 0 100px #266798 inset", WebkitTextFillColor: n3.palette.mode === "light" ? null : "#fff", caretColor: n3.palette.mode === "light" ? null : "#fff", borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit" } }, ...n3.vars && { "&:-webkit-autofill": { borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit" }, [n3.getColorSchemeSelector("dark")]: { "&:-webkit-autofill": { WebkitBoxShadow: "0 0 0 100px #266798 inset", WebkitTextFillColor: "#fff", caretColor: "#fff" } } }, variants: [{ props: { size: "small" }, style: { paddingTop: 21, paddingBottom: 4 } }, { props: ({ ownerState: r }) => r.hiddenLabel, style: { paddingTop: 16, paddingBottom: 17 } }, { props: ({ ownerState: r }) => r.startAdornment, style: { paddingLeft: 0 } }, { props: ({ ownerState: r }) => r.endAdornment, style: { paddingRight: 0 } }, { props: ({ ownerState: r }) => r.hiddenLabel && r.size === "small", style: { paddingTop: 8, paddingBottom: 9 } }, { props: ({ ownerState: r }) => r.multiline, style: { paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 } }] }))), mm = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiFilledInput" }), { disableUnderline: f = false, components: h = {}, componentsProps: g, fullWidth: v = false, hiddenLabel: y, inputComponent: b = "input", multiline: S = false, slotProps: w, slots: A = {}, type: P = "text", ...R } = u, M = { ...u, disableUnderline: f, fullWidth: v, inputComponent: b, multiline: S, type: P }, $ = fO(u), U = { root: { ownerState: M }, input: { ownerState: M } }, V = w ?? g ? zn(U, w ?? g) : U, D = A.root ?? h.Root ?? dO, N = A.input ?? h.Input ?? hO;
  return Z.jsx(pm, { slots: { root: D, input: N }, slotProps: V, fullWidth: v, inputComponent: b, multiline: S, ref: a, type: P, ...R, classes: $ });
});
mm.muiName = "Input";
function pO(n3) {
  return Re("MuiFormControl", n3);
}
Le("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const mO = (n3) => {
  const { classes: r, margin: a, fullWidth: u } = n3, f = { root: ["root", a !== "none" && `margin${Ct(a)}`, u && "fullWidth"] };
  return Pe(f, pO, r);
}, gO = Mt("div", { name: "MuiFormControl", slot: "Root", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.root, r[`margin${Ct(a.margin)}`], a.fullWidth && r.fullWidth];
} })({ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, margin: 0, border: 0, verticalAlign: "top", variants: [{ props: { margin: "normal" }, style: { marginTop: 16, marginBottom: 8 } }, { props: { margin: "dense" }, style: { marginTop: 8, marginBottom: 4 } }, { props: { fullWidth: true }, style: { width: "100%" } }] }), vO = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiFormControl" }), { children: f, className: h, color: g = "primary", component: v = "div", disabled: y = false, error: b = false, focused: S, fullWidth: w = false, hiddenLabel: A = false, margin: P = "none", required: R = false, size: M = "medium", variant: $ = "outlined", ...U } = u, V = { ...u, color: g, component: v, disabled: y, error: b, fullWidth: w, hiddenLabel: A, margin: P, required: R, size: M, variant: $ }, D = mO(V), [N, k] = O.useState(() => {
    let et = false;
    return f && O.Children.forEach(f, (B) => {
      if (!Wh(B, ["Input", "Select"])) return;
      const tt = Wh(B, ["Select"]) ? B.props.input : B;
      tt && iE(tt.props) && (et = true);
    }), et;
  }), [j, X] = O.useState(() => {
    let et = false;
    return f && O.Children.forEach(f, (B) => {
      Wh(B, ["Input", "Select"]) && (Cf(B.props, true) || Cf(B.props.inputProps, true)) && (et = true);
    }), et;
  }), [J, it] = O.useState(false);
  y && J && it(false);
  const ut = S !== void 0 && !y ? S : J;
  let ot;
  O.useRef(false);
  const C = O.useCallback(() => {
    X(true);
  }, []), st = O.useCallback(() => {
    X(false);
  }, []), W = O.useMemo(() => ({ adornedStart: N, setAdornedStart: k, color: g, disabled: y, error: b, filled: j, focused: ut, fullWidth: w, hiddenLabel: A, size: M, onBlur: () => {
    it(false);
  }, onFocus: () => {
    it(true);
  }, onEmpty: st, onFilled: C, registerEffect: ot, required: R, variant: $ }), [N, g, y, b, j, ut, w, A, ot, st, C, R, M, $]);
  return Z.jsx(hm.Provider, { value: W, children: Z.jsx(gO, { as: v, ownerState: V, className: Yt(D.root, h), ref: a, ...U, children: f }) });
});
function yO(n3) {
  return Re("MuiFormHelperText", n3);
}
const R_ = Le("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var L_;
const _O = (n3) => {
  const { classes: r, contained: a, size: u, disabled: f, error: h, filled: g, focused: v, required: y } = n3, b = { root: ["root", f && "disabled", h && "error", u && `size${Ct(u)}`, a && "contained", v && "focused", g && "filled", y && "required"] };
  return Pe(b, yO, r);
}, bO = Mt("p", { name: "MuiFormHelperText", slot: "Root", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.root, a.size && r[`size${Ct(a.size)}`], a.contained && r.contained, a.filled && r.filled];
} })(Ee(({ theme: n3 }) => ({ color: (n3.vars || n3).palette.text.secondary, ...n3.typography.caption, textAlign: "left", marginTop: 3, marginRight: 0, marginBottom: 0, marginLeft: 0, [`&.${R_.disabled}`]: { color: (n3.vars || n3).palette.text.disabled }, [`&.${R_.error}`]: { color: (n3.vars || n3).palette.error.main }, variants: [{ props: { size: "small" }, style: { marginTop: 4 } }, { props: ({ ownerState: r }) => r.contained, style: { marginLeft: 14, marginRight: 14 } }] }))), xO = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiFormHelperText" }), { children: f, className: h, component: g = "p", disabled: v, error: y, filled: b, focused: S, margin: w, required: A, variant: P, ...R } = u, M = il(), $ = nl({ props: u, muiFormControl: M, states: ["variant", "size", "disabled", "error", "filled", "focused", "required"] }), U = { ...u, component: g, contained: $.variant === "filled" || $.variant === "outlined", variant: $.variant, size: $.size, disabled: $.disabled, error: $.error, filled: $.filled, focused: $.focused, required: $.required };
  delete U.ownerState;
  const V = _O(U);
  return Z.jsx(bO, { as: g, className: Yt(V.root, h), ref: a, ...R, ownerState: U, children: f === " " ? L_ || (L_ = Z.jsx("span", { className: "notranslate", "aria-hidden": true, children: "\u200B" })) : f });
});
function SO(n3) {
  return Re("MuiFormLabel", n3);
}
const yu = Le("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), CO = (n3) => {
  const { classes: r, color: a, focused: u, disabled: f, error: h, filled: g, required: v } = n3, y = { root: ["root", `color${Ct(a)}`, f && "disabled", h && "error", g && "filled", u && "focused", v && "required"], asterisk: ["asterisk", h && "error"] };
  return Pe(y, SO, r);
}, TO = Mt("label", { name: "MuiFormLabel", slot: "Root", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.root, a.color === "secondary" && r.colorSecondary, a.filled && r.filled];
} })(Ee(({ theme: n3 }) => ({ color: (n3.vars || n3).palette.text.secondary, ...n3.typography.body1, lineHeight: "1.4375em", padding: 0, position: "relative", variants: [...Object.entries(n3.palette).filter(xi()).map(([r]) => ({ props: { color: r }, style: { [`&.${yu.focused}`]: { color: (n3.vars || n3).palette[r].main } } })), { props: {}, style: { [`&.${yu.disabled}`]: { color: (n3.vars || n3).palette.text.disabled }, [`&.${yu.error}`]: { color: (n3.vars || n3).palette.error.main } } }] }))), wO = Mt("span", { name: "MuiFormLabel", slot: "Asterisk" })(Ee(({ theme: n3 }) => ({ [`&.${yu.error}`]: { color: (n3.vars || n3).palette.error.main } }))), EO = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiFormLabel" }), { children: f, className: h, color: g, component: v = "label", disabled: y, error: b, filled: S, focused: w, required: A, ...P } = u, R = il(), M = nl({ props: u, muiFormControl: R, states: ["color", "required", "focused", "disabled", "error", "filled"] }), $ = { ...u, color: M.color || "primary", component: v, disabled: M.disabled, error: M.error, filled: M.filled, focused: M.focused, required: M.required }, U = CO($);
  return Z.jsxs(TO, { as: v, ownerState: $, className: Yt(U.root, h), ref: a, ...P, children: [f, M.required && Z.jsxs(wO, { ownerState: $, "aria-hidden": true, className: U.asterisk, children: ["\u2009", "*"] })] });
});
function Mp(n3) {
  return `scale(${n3}, ${n3 ** 2})`;
}
const OO = { entering: { opacity: 1, transform: Mp(1) }, entered: { opacity: 1, transform: "none" } }, np = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Ap = O.forwardRef(function(r, a) {
  const { addEndListener: u, appear: f = true, children: h, easing: g, in: v, onEnter: y, onEntered: b, onEntering: S, onExit: w, onExited: A, onExiting: P, style: R, timeout: M = "auto", TransitionComponent: $ = Go, ...U } = r, V = I0(), D = O.useRef(), N = Qa(), k = O.useRef(null), j = Un(k, Bu(h), a), X = (et) => (B) => {
    if (et) {
      const tt = k.current;
      B === void 0 ? et(tt) : et(tt, B);
    }
  }, J = X(S), it = X((et, B) => {
    H0(et);
    const { duration: tt, delay: rt, easing: gt } = vf({ style: R, timeout: M, easing: g }, { mode: "enter" });
    let z;
    M === "auto" ? (z = N.transitions.getAutoHeightDuration(et.clientHeight), D.current = z) : z = tt, et.style.transition = [N.transitions.create("opacity", { duration: z, delay: rt }), N.transitions.create("transform", { duration: np ? z : z * 0.666, delay: rt, easing: gt })].join(","), y && y(et, B);
  }), ut = X(b), ot = X(P), C = X((et) => {
    const { duration: B, delay: tt, easing: rt } = vf({ style: R, timeout: M, easing: g }, { mode: "exit" });
    let gt;
    M === "auto" ? (gt = N.transitions.getAutoHeightDuration(et.clientHeight), D.current = gt) : gt = B, et.style.transition = [N.transitions.create("opacity", { duration: gt, delay: tt }), N.transitions.create("transform", { duration: np ? gt : gt * 0.666, delay: np ? tt : tt || gt * 0.333, easing: rt })].join(","), et.style.opacity = 0, et.style.transform = Mp(0.75), w && w(et);
  }), st = X(A), W = (et) => {
    M === "auto" && V.start(D.current || 0, et), u && u(k.current, et);
  };
  return Z.jsx($, { appear: f, in: v, nodeRef: k, onEnter: it, onEntered: ut, onEntering: J, onExit: C, onExited: st, onExiting: ot, addEndListener: W, timeout: M === "auto" ? null : M, ...U, children: (et, { ownerState: B, ...tt }) => O.cloneElement(h, { style: { opacity: 0, transform: Mp(0.75), visibility: et === "exited" && !v ? "hidden" : void 0, ...OO[et], ...R, ...h.props.style }, ref: j, ...tt }) });
});
Ap && (Ap.muiSupportAuto = true);
const MO = (n3) => {
  const { classes: r, disableUnderline: a } = n3, f = Pe({ root: ["root", !a && "underline"], input: ["input"] }, aE, r);
  return { ...r, ...f };
}, AO = Mt(Zf, { shouldForwardProp: (n3) => Co(n3) || n3 === "classes", name: "MuiInput", slot: "Root", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [...jf(n3, r), !a.disableUnderline && r.underline];
} })(Ee(({ theme: n3 }) => {
  let a = n3.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return n3.vars && (a = n3.alpha(n3.vars.palette.common.onBackground, n3.vars.opacity.inputUnderline)), { position: "relative", variants: [{ props: ({ ownerState: u }) => u.formControl, style: { "label + &": { marginTop: 16 } } }, { props: ({ ownerState: u }) => !u.disableUnderline, style: { "&::after": { left: 0, bottom: 0, content: '""', position: "absolute", right: 0, transform: "scaleX(0)", transition: n3.transitions.create("transform", { duration: n3.transitions.duration.shorter, easing: n3.transitions.easing.easeOut }), pointerEvents: "none" }, [`&.${fa.focused}:after`]: { transform: "scaleX(1) translateX(0)" }, [`&.${fa.error}`]: { "&::before, &::after": { borderBottomColor: (n3.vars || n3).palette.error.main } }, "&::before": { borderBottom: `1px solid ${a}`, left: 0, bottom: 0, content: '"\\00a0"', position: "absolute", right: 0, transition: n3.transitions.create("border-bottom-color", { duration: n3.transitions.duration.shorter }), pointerEvents: "none" }, [`&:hover:not(.${fa.disabled}, .${fa.error}):before`]: { borderBottom: `2px solid ${(n3.vars || n3).palette.text.primary}`, "@media (hover: none)": { borderBottom: `1px solid ${a}` } }, [`&.${fa.disabled}:before`]: { borderBottomStyle: "dotted" } } }, ...Object.entries(n3.palette).filter(xi()).map(([u]) => ({ props: { color: u, disableUnderline: false }, style: { "&::after": { borderBottom: `2px solid ${(n3.vars || n3).palette[u].main}` } } }))] };
})), RO = Mt(qf, { name: "MuiInput", slot: "Input", overridesResolver: Uf })({}), gm = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiInput" }), { disableUnderline: f = false, components: h = {}, componentsProps: g, fullWidth: v = false, inputComponent: y = "input", multiline: b = false, slotProps: S, slots: w = {}, type: A = "text", ...P } = u, R = MO(u), $ = { root: { ownerState: { disableUnderline: f } } }, U = S ?? g ? zn(S ?? g, $) : $, V = w.root ?? h.Root ?? AO, D = w.input ?? h.Input ?? RO;
  return Z.jsx(pm, { slots: { root: V, input: D }, slotProps: U, fullWidth: v, inputComponent: y, multiline: b, ref: a, type: A, ...P, classes: R });
});
gm.muiName = "Input";
function LO(n3) {
  return Re("MuiInputLabel", n3);
}
Le("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const PO = (n3) => {
  const { classes: r, formControl: a, size: u, shrink: f, disableAnimation: h, variant: g, required: v } = n3, y = { root: ["root", a && "formControl", !h && "animated", f && "shrink", u && u !== "medium" && `size${Ct(u)}`, g], asterisk: [v && "asterisk"] }, b = Pe(y, LO, r);
  return { ...r, ...b };
}, zO = Mt(EO, { shouldForwardProp: (n3) => Co(n3) || n3 === "classes", name: "MuiInputLabel", slot: "Root", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [{ [`& .${yu.asterisk}`]: r.asterisk }, r.root, a.formControl && r.formControl, a.size === "small" && r.sizeSmall, a.shrink && r.shrink, !a.disableAnimation && r.animated, a.focused && r.focused, r[a.variant]];
} })(Ee(({ theme: n3 }) => ({ display: "block", transformOrigin: "top left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%", variants: [{ props: ({ ownerState: r }) => r.formControl, style: { position: "absolute", left: 0, top: 0, transform: "translate(0, 20px) scale(1)" } }, { props: { size: "small" }, style: { transform: "translate(0, 17px) scale(1)" } }, { props: ({ ownerState: r }) => r.shrink, style: { transform: "translate(0, -1.5px) scale(0.75)", transformOrigin: "top left", maxWidth: "133%" } }, { props: ({ ownerState: r }) => !r.disableAnimation, style: { transition: n3.transitions.create(["color", "transform", "max-width"], { duration: n3.transitions.duration.shorter, easing: n3.transitions.easing.easeOut }) } }, { props: { variant: "filled" }, style: { zIndex: 1, pointerEvents: "none", transform: "translate(12px, 16px) scale(1)", maxWidth: "calc(100% - 24px)" } }, { props: { variant: "filled", size: "small" }, style: { transform: "translate(12px, 13px) scale(1)" } }, { props: ({ variant: r, ownerState: a }) => r === "filled" && a.shrink, style: { userSelect: "none", pointerEvents: "auto", transform: "translate(12px, 7px) scale(0.75)", maxWidth: "calc(133% - 24px)" } }, { props: ({ variant: r, ownerState: a, size: u }) => r === "filled" && a.shrink && u === "small", style: { transform: "translate(12px, 4px) scale(0.75)" } }, { props: { variant: "outlined" }, style: { zIndex: 1, pointerEvents: "none", transform: "translate(14px, 16px) scale(1)", maxWidth: "calc(100% - 24px)" } }, { props: { variant: "outlined", size: "small" }, style: { transform: "translate(14px, 9px) scale(1)" } }, { props: ({ variant: r, ownerState: a }) => r === "outlined" && a.shrink, style: { userSelect: "none", pointerEvents: "auto", maxWidth: "calc(133% - 32px)", transform: "translate(14px, -9px) scale(0.75)" } }] }))), kO = O.forwardRef(function(r, a) {
  const u = ze({ name: "MuiInputLabel", props: r }), { disableAnimation: f = false, margin: h, shrink: g, variant: v, className: y, ...b } = u, S = il();
  let w = g;
  typeof w > "u" && S && (w = S.filled || S.focused || S.adornedStart);
  const A = nl({ props: u, muiFormControl: S, states: ["size", "variant", "required", "focused"] }), P = { ...u, disableAnimation: f, formControl: S, shrink: w, size: A.size, variant: A.variant, required: A.required, focused: A.focused }, R = PO(P);
  return Z.jsx(zO, { "data-shrink": w, ref: a, className: Yt(R.root, y), ...b, ownerState: P, classes: R });
});
function BO(n3) {
  return Re("MuiLink", n3);
}
const DO = Le("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]), NO = ({ theme: n3, ownerState: r }) => {
  const a = r.color;
  if ("colorSpace" in n3 && n3.colorSpace) {
    const h = Ho(n3, `palette.${a}.main`) || Ho(n3, `palette.${a}`) || r.color;
    return n3.alpha(h, 0.4);
  }
  const u = Ho(n3, `palette.${a}.main`, false) || Ho(n3, `palette.${a}`, false) || r.color, f = Ho(n3, `palette.${a}.mainChannel`) || Ho(n3, `palette.${a}Channel`);
  return "vars" in n3 && f ? `rgba(${f} / 0.4)` : Cu(u, 0.4);
}, P_ = { primary: true, secondary: true, error: true, info: true, success: true, warning: true, textPrimary: true, textSecondary: true, textDisabled: true }, $O = (n3) => {
  const { classes: r, component: a, focusVisible: u, underline: f } = n3, h = { root: ["root", `underline${Ct(f)}`, a === "button" && "button", u && "focusVisible"] };
  return Pe(h, BO, r);
}, IO = Mt(rm, { name: "MuiLink", slot: "Root", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.root, r[`underline${Ct(a.underline)}`], a.component === "button" && r.button];
} })(Ee(({ theme: n3 }) => ({ variants: [{ props: { underline: "none" }, style: { textDecoration: "none" } }, { props: { underline: "hover" }, style: { textDecoration: "none", "&:hover": { textDecoration: "underline" } } }, { props: { underline: "always" }, style: { textDecoration: "underline", "&:hover": { textDecorationColor: "inherit" } } }, { props: ({ underline: r, ownerState: a }) => r === "always" && a.color !== "inherit", style: { textDecorationColor: "var(--Link-underlineColor)" } }, { props: ({ underline: r, ownerState: a }) => r === "always" && a.color === "inherit", style: n3.colorSpace ? { textDecorationColor: n3.alpha("currentColor", 0.4) } : null }, ...Object.entries(n3.palette).filter(xi()).map(([r]) => ({ props: { underline: "always", color: r }, style: { "--Link-underlineColor": n3.alpha((n3.vars || n3).palette[r].main, 0.4) } })), { props: { underline: "always", color: "textPrimary" }, style: { "--Link-underlineColor": n3.alpha((n3.vars || n3).palette.text.primary, 0.4) } }, { props: { underline: "always", color: "textSecondary" }, style: { "--Link-underlineColor": n3.alpha((n3.vars || n3).palette.text.secondary, 0.4) } }, { props: { underline: "always", color: "textDisabled" }, style: { "--Link-underlineColor": (n3.vars || n3).palette.text.disabled } }, { props: { component: "button" }, style: { position: "relative", WebkitTapHighlightColor: "transparent", backgroundColor: "transparent", outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: "pointer", userSelect: "none", verticalAlign: "middle", MozAppearance: "none", WebkitAppearance: "none", "&::-moz-focus-inner": { borderStyle: "none" }, [`&.${DO.focusVisible}`]: { outline: "auto" } } }] }))), HO = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiLink" }), f = Qa(), { className: h, color: g = "primary", component: v = "a", onBlur: y, onFocus: b, TypographyClasses: S, underline: w = "always", variant: A = "inherit", sx: P, ...R } = u, [M, $] = O.useState(false), U = (k) => {
    _f(k.target) || $(false), y && y(k);
  }, V = (k) => {
    _f(k.target) && $(true), b && b(k);
  }, D = { ...u, color: g, component: v, focusVisible: M, underline: w, variant: A }, N = $O(D);
  return Z.jsx(IO, { color: g, className: Yt(N.root, h), classes: S, component: v, onBlur: U, onFocus: V, ref: a, ownerState: D, variant: A, ...R, sx: [...P_[g] === void 0 ? [{ color: g }] : [], ...Array.isArray(P) ? P : [P]], style: { ...R.style, ...w === "always" && g !== "inherit" && !P_[g] && { "--Link-underlineColor": NO({ theme: f, ownerState: D }) } } });
}), jO = O.createContext({});
function UO(n3) {
  return Re("MuiList", n3);
}
Le("MuiList", ["root", "padding", "dense", "subheader"]);
const ZO = (n3) => {
  const { classes: r, disablePadding: a, dense: u, subheader: f } = n3;
  return Pe({ root: ["root", !a && "padding", u && "dense", f && "subheader"] }, UO, r);
}, qO = Mt("ul", { name: "MuiList", slot: "Root", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.root, !a.disablePadding && r.padding, a.dense && r.dense, a.subheader && r.subheader];
} })({ listStyle: "none", margin: 0, padding: 0, position: "relative", variants: [{ props: ({ ownerState: n3 }) => !n3.disablePadding, style: { paddingTop: 8, paddingBottom: 8 } }, { props: ({ ownerState: n3 }) => n3.subheader, style: { paddingTop: 0 } }] }), VO = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiList" }), { children: f, className: h, component: g = "ul", dense: v = false, disablePadding: y = false, subheader: b, ...S } = u, w = O.useMemo(() => ({ dense: v }), [v]), A = { ...u, component: g, dense: v, disablePadding: y }, P = ZO(A);
  return Z.jsx(jO.Provider, { value: w, children: Z.jsxs(qO, { as: g, className: Yt(P.root, h), ref: a, ownerState: A, ...S, children: [b, f] }) });
});
function ip(n3, r, a) {
  return n3 === r ? n3.firstChild : r && r.nextElementSibling ? r.nextElementSibling : a ? null : n3.firstChild;
}
function z_(n3, r, a) {
  return n3 === r ? a ? n3.firstChild : n3.lastChild : r && r.previousElementSibling ? r.previousElementSibling : a ? null : n3.lastChild;
}
function ub(n3, r) {
  if (r === void 0) return true;
  let a = n3.innerText;
  return a === void 0 && (a = n3.textContent), a = a.trim().toLowerCase(), a.length === 0 ? false : r.repeating ? a[0] === r.keys[0] : a.startsWith(r.keys.join(""));
}
function au(n3, r, a, u, f, h) {
  let g = false, v = f(n3, r, r ? a : false);
  for (; v; ) {
    if (v === n3.firstChild) {
      if (g) return false;
      g = true;
    }
    const y = u ? false : v.disabled || v.getAttribute("aria-disabled") === "true";
    if (!v.hasAttribute("tabindex") || !ub(v, h) || y) v = f(n3, v, a);
    else return v.focus(), true;
  }
  return false;
}
const GO = O.forwardRef(function(r, a) {
  const { actions: u, autoFocus: f = false, autoFocusItem: h = false, children: g, className: v, disabledItemsFocusable: y = false, disableListWrap: b = false, onKeyDown: S, variant: w = "selectedMenu", ...A } = r, P = O.useRef(null), R = O.useRef({ keys: [], repeating: true, previousKeyMatched: true, lastTime: null });
  So(() => {
    f && P.current.focus();
  }, [f]), O.useImperativeHandle(u, () => ({ adjustStyleForScrollbar: (D, { direction: N }) => {
    const k = !P.current.style.width;
    if (D.clientHeight < P.current.clientHeight && k) {
      const j = `${lb(xr(D))}px`;
      P.current.style[N === "rtl" ? "paddingLeft" : "paddingRight"] = j, P.current.style.width = `calc(100% + ${j})`;
    }
    return P.current;
  } }), []);
  const M = (D) => {
    const N = P.current, k = D.key;
    if (D.ctrlKey || D.metaKey || D.altKey) {
      S && S(D);
      return;
    }
    const X = ji(N).activeElement;
    if (k === "ArrowDown") D.preventDefault(), au(N, X, b, y, ip);
    else if (k === "ArrowUp") D.preventDefault(), au(N, X, b, y, z_);
    else if (k === "Home") D.preventDefault(), au(N, null, b, y, ip);
    else if (k === "End") D.preventDefault(), au(N, null, b, y, z_);
    else if (k.length === 1) {
      const J = R.current, it = k.toLowerCase(), ut = performance.now();
      J.keys.length > 0 && (ut - J.lastTime > 500 ? (J.keys = [], J.repeating = true, J.previousKeyMatched = true) : J.repeating && it !== J.keys[0] && (J.repeating = false)), J.lastTime = ut, J.keys.push(it);
      const ot = X && !J.repeating && ub(X, J);
      J.previousKeyMatched && (ot || au(N, X, false, y, ip, J)) ? D.preventDefault() : J.previousKeyMatched = false;
    }
    S && S(D);
  }, $ = Un(P, a);
  let U = -1;
  O.Children.forEach(g, (D, N) => {
    if (!O.isValidElement(D)) {
      U === N && (U += 1, U >= g.length && (U = -1));
      return;
    }
    D.props.disabled || (w === "selectedMenu" && D.props.selected || U === -1) && (U = N), U === N && (D.props.disabled || D.props.muiSkipListHighlight || D.type.muiSkipListHighlight) && (U += 1, U >= g.length && (U = -1));
  });
  const V = O.Children.map(g, (D, N) => {
    if (N === U) {
      const k = {};
      return h && (k.autoFocus = true), D.props.tabIndex === void 0 && w === "selectedMenu" && (k.tabIndex = 0), O.cloneElement(D, k);
    }
    return D;
  });
  return Z.jsx(VO, { role: "menu", ref: $, className: v, onKeyDown: M, tabIndex: f ? 0 : -1, ...A, children: V });
});
function YO(n3) {
  return Re("MuiPopover", n3);
}
Le("MuiPopover", ["root", "paper"]);
function k_(n3, r) {
  let a = 0;
  return typeof r == "number" ? a = r : r === "center" ? a = n3.height / 2 : r === "bottom" && (a = n3.height), a;
}
function B_(n3, r) {
  let a = 0;
  return typeof r == "number" ? a = r : r === "center" ? a = n3.width / 2 : r === "right" && (a = n3.width), a;
}
function D_(n3) {
  return [n3.horizontal, n3.vertical].map((r) => typeof r == "number" ? `${r}px` : r).join(" ");
}
function af(n3) {
  return typeof n3 == "function" ? n3() : n3;
}
const FO = (n3) => {
  const { classes: r } = n3;
  return Pe({ root: ["root"], paper: ["paper"] }, YO, r);
}, XO = Mt(cO, { name: "MuiPopover", slot: "Root" })({}), cb = Mt(im, { name: "MuiPopover", slot: "Paper" })({ position: "absolute", overflowY: "auto", overflowX: "hidden", minWidth: 16, minHeight: 16, maxWidth: "calc(100% - 32px)", maxHeight: "calc(100% - 32px)", outline: 0 }), KO = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiPopover" }), { action: f, anchorEl: h, anchorOrigin: g = { vertical: "top", horizontal: "left" }, anchorPosition: v, anchorReference: y = "anchorEl", children: b, className: S, container: w, elevation: A = 8, marginThreshold: P = 16, open: R, PaperProps: M = {}, slots: $ = {}, slotProps: U = {}, transformOrigin: V = { vertical: "top", horizontal: "left" }, TransitionComponent: D, transitionDuration: N = "auto", TransitionProps: k = {}, disableScrollLock: j = false, ...X } = u, J = O.useRef(), it = { ...u, anchorOrigin: g, anchorReference: y, elevation: A, marginThreshold: P, transformOrigin: V, TransitionComponent: D, transitionDuration: N, TransitionProps: k }, ut = FO(it), ot = O.useCallback(() => {
    if (y === "anchorPosition") return v;
    const Rt = af(h), Wt = (Rt && Rt.nodeType === 1 ? Rt : ji(J.current).body).getBoundingClientRect();
    return { top: Wt.top + k_(Wt, g.vertical), left: Wt.left + B_(Wt, g.horizontal) };
  }, [h, g.horizontal, g.vertical, v, y]), C = O.useCallback((Rt) => ({ vertical: k_(Rt, V.vertical), horizontal: B_(Rt, V.horizontal) }), [V.horizontal, V.vertical]), st = O.useCallback((Rt) => {
    const Ut = { width: Rt.offsetWidth, height: Rt.offsetHeight }, Wt = C(Ut);
    if (y === "none") return { top: null, left: null, transformOrigin: D_(Wt) };
    const te = ot();
    let qt = te.top - Wt.vertical, de = te.left - Wt.horizontal;
    const ie = qt + Ut.height, ue = de + Ut.width, Tt = xr(af(h)), _e = Tt.innerHeight - P, Bt = Tt.innerWidth - P;
    if (P !== null && qt < P) {
      const Jt = qt - P;
      qt -= Jt, Wt.vertical += Jt;
    } else if (P !== null && ie > _e) {
      const Jt = ie - _e;
      qt -= Jt, Wt.vertical += Jt;
    }
    if (P !== null && de < P) {
      const Jt = de - P;
      de -= Jt, Wt.horizontal += Jt;
    } else if (ue > Bt) {
      const Jt = ue - Bt;
      de -= Jt, Wt.horizontal += Jt;
    }
    return { top: `${Math.round(qt)}px`, left: `${Math.round(de)}px`, transformOrigin: D_(Wt) };
  }, [h, y, ot, C, P]), [W, et] = O.useState(R), B = O.useCallback(() => {
    const Rt = J.current;
    if (!Rt) return;
    const Ut = st(Rt);
    Ut.top !== null && Rt.style.setProperty("top", Ut.top), Ut.left !== null && (Rt.style.left = Ut.left), Rt.style.transformOrigin = Ut.transformOrigin, et(true);
  }, [st]);
  O.useEffect(() => (j && window.addEventListener("scroll", B), () => window.removeEventListener("scroll", B)), [h, j, B]);
  const tt = () => {
    B();
  }, rt = () => {
    et(false);
  };
  O.useEffect(() => {
    R && B();
  }), O.useImperativeHandle(f, () => R ? { updatePosition: () => {
    B();
  } } : null, [R, B]), O.useEffect(() => {
    if (!R) return;
    const Rt = B0(() => {
      B();
    }), Ut = xr(af(h));
    return Ut.addEventListener("resize", Rt), () => {
      Rt.clear(), Ut.removeEventListener("resize", Rt);
    };
  }, [h, R, B]);
  let gt = N;
  const z = { slots: { transition: D, ...$ }, slotProps: { transition: k, paper: M, ...U } }, [Y, ft] = vn("transition", { elementType: Ap, externalForwardedProps: z, ownerState: it, getSlotProps: (Rt) => ({ ...Rt, onEntering: (Ut, Wt) => {
    var _a;
    (_a = Rt.onEntering) == null ? void 0 : _a.call(Rt, Ut, Wt), tt();
  }, onExited: (Ut) => {
    var _a;
    (_a = Rt.onExited) == null ? void 0 : _a.call(Rt, Ut), rt();
  } }), additionalProps: { appear: true, in: R } });
  N === "auto" && !Y.muiSupportAuto && (gt = void 0);
  const dt = w || (h ? ji(af(h)).body : void 0), [bt, { slots: _t, slotProps: ct, ...At }] = vn("root", { ref: a, elementType: XO, externalForwardedProps: { ...z, ...X }, shouldForwardComponentProp: true, additionalProps: { slots: { backdrop: $.backdrop }, slotProps: { backdrop: PT(typeof U.backdrop == "function" ? U.backdrop(it) : U.backdrop, { invisible: true }) }, container: dt, open: R }, ownerState: it, className: Yt(ut.root, S) }), [Pt, $t] = vn("paper", { ref: J, className: ut.paper, elementType: cb, externalForwardedProps: z, shouldForwardComponentProp: true, additionalProps: { elevation: A, style: W ? void 0 : { opacity: 0 } }, ownerState: it });
  return Z.jsx(bt, { ...At, ...!yf(bt) && { slots: _t, slotProps: ct, disableScrollLock: j }, children: Z.jsx(Y, { ...ft, timeout: gt, children: Z.jsx(Pt, { ...$t, children: b }) }) });
});
function WO(n3) {
  return Re("MuiMenu", n3);
}
Le("MuiMenu", ["root", "paper", "list"]);
const QO = { vertical: "top", horizontal: "right" }, JO = { vertical: "top", horizontal: "left" }, tM = (n3) => {
  const { classes: r } = n3;
  return Pe({ root: ["root"], paper: ["paper"], list: ["list"] }, WO, r);
}, eM = Mt(KO, { shouldForwardProp: (n3) => Co(n3) || n3 === "classes", name: "MuiMenu", slot: "Root" })({}), nM = Mt(cb, { name: "MuiMenu", slot: "Paper" })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }), iM = Mt(GO, { name: "MuiMenu", slot: "List" })({ outline: 0 }), oM = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiMenu" }), { autoFocus: f = true, children: h, className: g, disableAutoFocusItem: v = false, MenuListProps: y = {}, onClose: b, open: S, PaperProps: w = {}, PopoverClasses: A, transitionDuration: P = "auto", TransitionProps: { onEntering: R, ...M } = {}, variant: $ = "selectedMenu", slots: U = {}, slotProps: V = {}, ...D } = u, N = C0(), k = { ...u, autoFocus: f, disableAutoFocusItem: v, MenuListProps: y, onEntering: R, PaperProps: w, transitionDuration: P, TransitionProps: M, variant: $ }, j = tM(k), X = f && !v && S, J = O.useRef(null), it = (gt, z) => {
    J.current && J.current.adjustStyleForScrollbar(gt, { direction: N ? "rtl" : "ltr" }), R && R(gt, z);
  }, ut = (gt) => {
    gt.key === "Tab" && (gt.preventDefault(), b && b(gt, "tabKeyDown"));
  };
  let ot = -1;
  O.Children.map(h, (gt, z) => {
    O.isValidElement(gt) && (gt.props.disabled || ($ === "selectedMenu" && gt.props.selected || ot === -1) && (ot = z));
  });
  const C = { slots: U, slotProps: { list: y, transition: M, paper: w, ...V } }, st = eb({ elementType: U.root, externalSlotProps: V.root, ownerState: k, className: [j.root, g] }), [W, et] = vn("paper", { className: j.paper, elementType: nM, externalForwardedProps: C, shouldForwardComponentProp: true, ownerState: k }), [B, tt] = vn("list", { className: Yt(j.list, y.className), elementType: iM, shouldForwardComponentProp: true, externalForwardedProps: C, getSlotProps: (gt) => ({ ...gt, onKeyDown: (z) => {
    var _a;
    ut(z), (_a = gt.onKeyDown) == null ? void 0 : _a.call(gt, z);
  } }), ownerState: k }), rt = typeof C.slotProps.transition == "function" ? C.slotProps.transition(k) : C.slotProps.transition;
  return Z.jsx(eM, { onClose: b, anchorOrigin: { vertical: "bottom", horizontal: N ? "right" : "left" }, transformOrigin: N ? QO : JO, slots: { root: U.root, paper: W, backdrop: U.backdrop, ...U.transition && { transition: U.transition } }, slotProps: { root: st, paper: et, backdrop: typeof V.backdrop == "function" ? V.backdrop(k) : V.backdrop, transition: { ...rt, onEntering: (...gt) => {
    var _a;
    it(...gt), (_a = rt == null ? void 0 : rt.onEntering) == null ? void 0 : _a.call(rt, ...gt);
  } } }, open: S, ref: a, transitionDuration: P, ownerState: k, ...D, classes: A, children: Z.jsx(B, { actions: J, autoFocus: f && (ot === -1 || v), autoFocusItem: X, variant: $, ...tt, children: h }) });
});
function rM(n3) {
  return Re("MuiNativeSelect", n3);
}
const vm = Le("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), aM = (n3) => {
  const { classes: r, variant: a, disabled: u, multiple: f, open: h, error: g } = n3, v = { select: ["select", a, u && "disabled", f && "multiple", g && "error"], icon: ["icon", `icon${Ct(a)}`, h && "iconOpen", u && "disabled"] };
  return Pe(v, rM, r);
}, fb = Mt("select", { name: "MuiNativeSelect" })(({ theme: n3 }) => ({ MozAppearance: "none", WebkitAppearance: "none", userSelect: "none", borderRadius: 0, cursor: "pointer", "&:focus": { borderRadius: 0 }, [`&.${vm.disabled}`]: { cursor: "default" }, "&[multiple]": { height: "auto" }, "&:not([multiple]) option, &:not([multiple]) optgroup": { backgroundColor: (n3.vars || n3).palette.background.paper }, variants: [{ props: ({ ownerState: r }) => r.variant !== "filled" && r.variant !== "outlined", style: { "&&&": { paddingRight: 24, minWidth: 16 } } }, { props: { variant: "filled" }, style: { "&&&": { paddingRight: 32 } } }, { props: { variant: "outlined" }, style: { borderRadius: (n3.vars || n3).shape.borderRadius, "&:focus": { borderRadius: (n3.vars || n3).shape.borderRadius }, "&&&": { paddingRight: 32 } } }] })), sM = Mt(fb, { name: "MuiNativeSelect", slot: "Select", shouldForwardProp: Co, overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.select, r[a.variant], a.error && r.error, { [`&.${vm.multiple}`]: r.multiple }];
} })({}), db = Mt("svg", { name: "MuiNativeSelect" })(({ theme: n3 }) => ({ position: "absolute", right: 0, top: "calc(50% - .5em)", pointerEvents: "none", color: (n3.vars || n3).palette.action.active, [`&.${vm.disabled}`]: { color: (n3.vars || n3).palette.action.disabled }, variants: [{ props: ({ ownerState: r }) => r.open, style: { transform: "rotate(180deg)" } }, { props: { variant: "filled" }, style: { right: 7 } }, { props: { variant: "outlined" }, style: { right: 7 } }] })), lM = Mt(db, { name: "MuiNativeSelect", slot: "Icon", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.icon, a.variant && r[`icon${Ct(a.variant)}`], a.open && r.iconOpen];
} })({}), uM = O.forwardRef(function(r, a) {
  const { className: u, disabled: f, error: h, IconComponent: g, inputRef: v, variant: y = "standard", ...b } = r, S = { ...r, disabled: f, variant: y, error: h }, w = aM(S);
  return Z.jsxs(O.Fragment, { children: [Z.jsx(sM, { ownerState: S, className: Yt(w.select, u), disabled: f, ref: v || a, ...b }), r.multiple ? null : Z.jsx(lM, { as: g, ownerState: S, className: w.icon })] });
});
var N_;
const cM = Mt("fieldset", { name: "MuiNotchedOutlined", shouldForwardProp: Co })({ textAlign: "left", position: "absolute", bottom: 0, right: 0, top: -5, left: 0, margin: 0, padding: "0 8px", pointerEvents: "none", borderRadius: "inherit", borderStyle: "solid", borderWidth: 1, overflow: "hidden", minWidth: "0%" }), fM = Mt("legend", { name: "MuiNotchedOutlined", shouldForwardProp: Co })(Ee(({ theme: n3 }) => ({ float: "unset", width: "auto", overflow: "hidden", variants: [{ props: ({ ownerState: r }) => !r.withLabel, style: { padding: 0, lineHeight: "11px", transition: n3.transitions.create("width", { duration: 150, easing: n3.transitions.easing.easeOut }) } }, { props: ({ ownerState: r }) => r.withLabel, style: { display: "block", padding: 0, height: 11, fontSize: "0.75em", visibility: "hidden", maxWidth: 0.01, transition: n3.transitions.create("max-width", { duration: 50, easing: n3.transitions.easing.easeOut }), whiteSpace: "nowrap", "& > span": { paddingLeft: 5, paddingRight: 5, display: "inline-block", opacity: 0, visibility: "visible" } } }, { props: ({ ownerState: r }) => r.withLabel && r.notched, style: { maxWidth: "100%", transition: n3.transitions.create("max-width", { duration: 100, easing: n3.transitions.easing.easeOut, delay: 50 }) } }] })));
function dM(n3) {
  const { children: r, classes: a, className: u, label: f, notched: h, ...g } = n3, v = f != null && f !== "", y = { ...n3, notched: h, withLabel: v };
  return Z.jsx(cM, { "aria-hidden": true, className: u, ownerState: y, ...g, children: Z.jsx(fM, { ownerState: y, children: v ? Z.jsx("span", { children: f }) : N_ || (N_ = Z.jsx("span", { className: "notranslate", "aria-hidden": true, children: "\u200B" })) }) });
}
const hM = (n3) => {
  const { classes: r } = n3, u = Pe({ root: ["root"], notchedOutline: ["notchedOutline"], input: ["input"] }, sE, r);
  return { ...r, ...u };
}, pM = Mt(Zf, { shouldForwardProp: (n3) => Co(n3) || n3 === "classes", name: "MuiOutlinedInput", slot: "Root", overridesResolver: jf })(Ee(({ theme: n3 }) => {
  const r = n3.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return { position: "relative", borderRadius: (n3.vars || n3).shape.borderRadius, [`&:hover .${to.notchedOutline}`]: { borderColor: (n3.vars || n3).palette.text.primary }, "@media (hover: none)": { [`&:hover .${to.notchedOutline}`]: { borderColor: n3.vars ? n3.alpha(n3.vars.palette.common.onBackground, 0.23) : r } }, [`&.${to.focused} .${to.notchedOutline}`]: { borderWidth: 2 }, variants: [...Object.entries(n3.palette).filter(xi()).map(([a]) => ({ props: { color: a }, style: { [`&.${to.focused} .${to.notchedOutline}`]: { borderColor: (n3.vars || n3).palette[a].main } } })), { props: {}, style: { [`&.${to.error} .${to.notchedOutline}`]: { borderColor: (n3.vars || n3).palette.error.main }, [`&.${to.disabled} .${to.notchedOutline}`]: { borderColor: (n3.vars || n3).palette.action.disabled } } }, { props: ({ ownerState: a }) => a.startAdornment, style: { paddingLeft: 14 } }, { props: ({ ownerState: a }) => a.endAdornment, style: { paddingRight: 14 } }, { props: ({ ownerState: a }) => a.multiline, style: { padding: "16.5px 14px" } }, { props: ({ ownerState: a, size: u }) => a.multiline && u === "small", style: { padding: "8.5px 14px" } }] };
})), mM = Mt(dM, { name: "MuiOutlinedInput", slot: "NotchedOutline" })(Ee(({ theme: n3 }) => {
  const r = n3.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return { borderColor: n3.vars ? n3.alpha(n3.vars.palette.common.onBackground, 0.23) : r };
})), gM = Mt(qf, { name: "MuiOutlinedInput", slot: "Input", overridesResolver: Uf })(Ee(({ theme: n3 }) => ({ padding: "16.5px 14px", ...!n3.vars && { "&:-webkit-autofill": { WebkitBoxShadow: n3.palette.mode === "light" ? null : "0 0 0 100px #266798 inset", WebkitTextFillColor: n3.palette.mode === "light" ? null : "#fff", caretColor: n3.palette.mode === "light" ? null : "#fff", borderRadius: "inherit" } }, ...n3.vars && { "&:-webkit-autofill": { borderRadius: "inherit" }, [n3.getColorSchemeSelector("dark")]: { "&:-webkit-autofill": { WebkitBoxShadow: "0 0 0 100px #266798 inset", WebkitTextFillColor: "#fff", caretColor: "#fff" } } }, variants: [{ props: { size: "small" }, style: { padding: "8.5px 14px" } }, { props: ({ ownerState: r }) => r.multiline, style: { padding: 0 } }, { props: ({ ownerState: r }) => r.startAdornment, style: { paddingLeft: 0 } }, { props: ({ ownerState: r }) => r.endAdornment, style: { paddingRight: 0 } }] }))), ym = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiOutlinedInput" }), { components: f = {}, fullWidth: h = false, inputComponent: g = "input", label: v, multiline: y = false, notched: b, slots: S = {}, slotProps: w = {}, type: A = "text", ...P } = u, R = hM(u), M = il(), $ = nl({ props: u, muiFormControl: M, states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"] }), U = { ...u, color: $.color || "primary", disabled: $.disabled, error: $.error, focused: $.focused, formControl: M, fullWidth: h, hiddenLabel: $.hiddenLabel, multiline: y, size: $.size, type: A }, V = S.root ?? f.Root ?? pM, D = S.input ?? f.Input ?? gM, [N, k] = vn("notchedOutline", { elementType: mM, className: R.notchedOutline, shouldForwardComponentProp: true, ownerState: U, externalForwardedProps: { slots: S, slotProps: w }, additionalProps: { label: v != null && v !== "" && $.required ? Z.jsxs(O.Fragment, { children: [v, "\u2009", "*"] }) : v } });
  return Z.jsx(pm, { slots: { root: V, input: D }, slotProps: w, renderSuffix: (j) => Z.jsx(N, { ...k, notched: typeof b < "u" ? b : !!(j.startAdornment || j.filled || j.focused) }), fullWidth: h, inputComponent: g, multiline: y, ref: a, type: A, ...P, classes: { ...R, notchedOutline: null } });
});
ym.muiName = "Input";
function hb(n3) {
  return Re("MuiSelect", n3);
}
const su = Le("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var $_;
const vM = Mt(fb, { name: "MuiSelect", slot: "Select", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [{ [`&.${su.select}`]: r.select }, { [`&.${su.select}`]: r[a.variant] }, { [`&.${su.error}`]: r.error }, { [`&.${su.multiple}`]: r.multiple }];
} })({ [`&.${su.select}`]: { height: "auto", minHeight: "1.4375em", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" } }), yM = Mt(db, { name: "MuiSelect", slot: "Icon", overridesResolver: (n3, r) => {
  const { ownerState: a } = n3;
  return [r.icon, a.variant && r[`icon${Ct(a.variant)}`], a.open && r.iconOpen];
} })({}), _M = Mt("input", { shouldForwardProp: (n3) => k0(n3) && n3 !== "classes", name: "MuiSelect", slot: "NativeInput" })({ bottom: 0, left: 0, position: "absolute", opacity: 0, pointerEvents: "none", width: "100%", boxSizing: "border-box" });
function I_(n3, r) {
  return typeof r == "object" && r !== null ? n3 === r : String(n3) === String(r);
}
function bM(n3) {
  return n3 == null || typeof n3 == "string" && !n3.trim();
}
const xM = (n3) => {
  const { classes: r, variant: a, disabled: u, multiple: f, open: h, error: g } = n3, v = { select: ["select", a, u && "disabled", f && "multiple", g && "error"], icon: ["icon", `icon${Ct(a)}`, h && "iconOpen", u && "disabled"], nativeInput: ["nativeInput"] };
  return Pe(v, hb, r);
}, SM = O.forwardRef(function(r, a) {
  var _a, _b, _c, _d;
  const { "aria-describedby": u, "aria-label": f, autoFocus: h, autoWidth: g, children: v, className: y, defaultOpen: b, defaultValue: S, disabled: w, displayEmpty: A, error: P = false, IconComponent: R, inputRef: M, labelId: $, MenuProps: U = {}, multiple: V, name: D, onBlur: N, onChange: k, onClose: j, onFocus: X, onOpen: J, open: it, readOnly: ut, renderValue: ot, required: C, SelectDisplayProps: st = {}, tabIndex: W, type: et, value: B, variant: tt = "standard", ...rt } = r, [gt, z] = pu({ controlled: B, default: S, name: "Select" }), [Y, ft] = pu({ controlled: it, default: b, name: "Select" }), dt = O.useRef(null), bt = O.useRef(null), [_t, ct] = O.useState(null), { current: At } = O.useRef(it != null), [Pt, $t] = O.useState(), Rt = Un(a, M), Ut = O.useCallback((kt) => {
    bt.current = kt, kt && ct(kt);
  }, []), Wt = _t == null ? void 0 : _t.parentNode;
  O.useImperativeHandle(Rt, () => ({ focus: () => {
    bt.current.focus();
  }, node: dt.current, value: gt }), [gt]), O.useEffect(() => {
    b && Y && _t && !At && ($t(g ? null : Wt.clientWidth), bt.current.focus());
  }, [_t, g]), O.useEffect(() => {
    h && bt.current.focus();
  }, [h]), O.useEffect(() => {
    if (!$) return;
    const kt = ji(bt.current).getElementById($);
    if (kt) {
      const ne = () => {
        getSelection().isCollapsed && bt.current.focus();
      };
      return kt.addEventListener("click", ne), () => {
        kt.removeEventListener("click", ne);
      };
    }
  }, [$]);
  const te = (kt, ne) => {
    kt ? J && J(ne) : j && j(ne), At || ($t(g ? null : Wt.clientWidth), ft(kt));
  }, qt = (kt) => {
    kt.button === 0 && (kt.preventDefault(), bt.current.focus(), te(true, kt));
  }, de = (kt) => {
    te(false, kt);
  }, ie = O.Children.toArray(v), ue = (kt) => {
    const ne = ie.find((re) => re.props.value === kt.target.value);
    ne !== void 0 && (z(ne.props.value), k && k(kt, ne));
  }, Tt = (kt) => (ne) => {
    let re;
    if (ne.currentTarget.hasAttribute("tabindex")) {
      if (V) {
        re = Array.isArray(gt) ? gt.slice() : [];
        const Kn = gt.indexOf(kt.props.value);
        Kn === -1 ? re.push(kt.props.value) : re.splice(Kn, 1);
      } else re = kt.props.value;
      if (kt.props.onClick && kt.props.onClick(ne), gt !== re && (z(re), k)) {
        const Kn = ne.nativeEvent || ne, so = new Kn.constructor(Kn.type, Kn);
        Object.defineProperty(so, "target", { writable: true, value: { value: re, name: D } }), k(so, kt);
      }
      V || te(false, ne);
    }
  }, _e = (kt) => {
    ut || [" ", "ArrowUp", "ArrowDown", "Enter"].includes(kt.key) && (kt.preventDefault(), te(true, kt));
  }, Bt = _t !== null && Y, Jt = (kt) => {
    !Bt && N && (Object.defineProperty(kt, "target", { writable: true, value: { value: gt, name: D } }), N(kt));
  };
  delete rt["aria-invalid"];
  let Ot, tn;
  const be = [];
  let qe = false;
  (Cf({ value: gt }) || A) && (ot ? Ot = ot(gt) : qe = true);
  const ce = ie.map((kt) => {
    if (!O.isValidElement(kt)) return null;
    let ne;
    if (V) {
      if (!Array.isArray(gt)) throw new Error(br(2));
      ne = gt.some((re) => I_(re, kt.props.value)), ne && qe && be.push(kt.props.children);
    } else ne = I_(gt, kt.props.value), ne && qe && (tn = kt.props.children);
    return O.cloneElement(kt, { "aria-selected": ne ? "true" : "false", onClick: Tt(kt), onKeyUp: (re) => {
      re.key === " " && re.preventDefault(), kt.props.onKeyUp && kt.props.onKeyUp(re);
    }, role: "option", selected: ne, value: void 0, "data-value": kt.props.value });
  });
  qe && (V ? be.length === 0 ? Ot = null : Ot = be.reduce((kt, ne, re) => (kt.push(ne), re < be.length - 1 && kt.push(", "), kt), []) : Ot = tn);
  let Vt = Pt;
  !g && At && _t && (Vt = Wt.clientWidth);
  let oe;
  typeof W < "u" ? oe = W : oe = w ? null : 0;
  const he = st.id || (D ? `mui-component-select-${D}` : void 0), xe = { ...r, variant: tt, value: gt, open: Bt, error: P }, jt = xM(xe), cn = { ...U.PaperProps, ...typeof ((_a = U.slotProps) == null ? void 0 : _a.paper) == "function" ? U.slotProps.paper(xe) : (_b = U.slotProps) == null ? void 0 : _b.paper }, kn = { ...U.MenuListProps, ...typeof ((_c = U.slotProps) == null ? void 0 : _c.list) == "function" ? U.slotProps.list(xe) : (_d = U.slotProps) == null ? void 0 : _d.list }, rn = el();
  return Z.jsxs(O.Fragment, { children: [Z.jsx(vM, { as: "div", ref: Ut, tabIndex: oe, role: "combobox", "aria-controls": Bt ? rn : void 0, "aria-disabled": w ? "true" : void 0, "aria-expanded": Bt ? "true" : "false", "aria-haspopup": "listbox", "aria-label": f, "aria-labelledby": [$, he].filter(Boolean).join(" ") || void 0, "aria-describedby": u, "aria-required": C ? "true" : void 0, "aria-invalid": P ? "true" : void 0, onKeyDown: _e, onMouseDown: w || ut ? null : qt, onBlur: Jt, onFocus: X, ...st, ownerState: xe, className: Yt(st.className, jt.select, y), id: he, children: bM(Ot) ? $_ || ($_ = Z.jsx("span", { className: "notranslate", "aria-hidden": true, children: "\u200B" })) : Ot }), Z.jsx(_M, { "aria-invalid": P, value: Array.isArray(gt) ? gt.join(",") : gt, name: D, ref: dt, "aria-hidden": true, onChange: ue, tabIndex: -1, disabled: w, className: jt.nativeInput, autoFocus: h, required: C, ...rt, ownerState: xe }), Z.jsx(yM, { as: R, className: jt.icon, ownerState: xe }), Z.jsx(oM, { id: `menu-${D || ""}`, anchorEl: Wt, open: Bt, onClose: de, anchorOrigin: { vertical: "bottom", horizontal: "center" }, transformOrigin: { vertical: "top", horizontal: "center" }, ...U, slotProps: { ...U.slotProps, list: { "aria-labelledby": $, role: "listbox", "aria-multiselectable": V ? "true" : void 0, disableListWrap: true, id: rn, ...kn }, paper: { ...cn, style: { minWidth: Vt, ...cn != null ? cn.style : null } } }, children: ce })] });
}), CM = (n3) => {
  const { classes: r } = n3, u = Pe({ root: ["root"] }, hb, r);
  return { ...r, ...u };
}, _m = { name: "MuiSelect", slot: "Root", shouldForwardProp: (n3) => Co(n3) && n3 !== "variant" }, TM = Mt(gm, _m)(""), wM = Mt(ym, _m)(""), EM = Mt(mm, _m)(""), pb = O.forwardRef(function(r, a) {
  const u = ze({ name: "MuiSelect", props: r }), { autoWidth: f = false, children: h, classes: g = {}, className: v, defaultOpen: y = false, displayEmpty: b = false, IconComponent: S = rb, id: w, input: A, inputProps: P, label: R, labelId: M, MenuProps: $, multiple: U = false, native: V = false, onClose: D, onOpen: N, open: k, renderValue: j, SelectDisplayProps: X, variant: J = "outlined", ...it } = u, ut = V ? uM : SM, ot = il(), C = nl({ props: u, muiFormControl: ot, states: ["variant", "error"] }), st = C.variant || J, W = { ...u, variant: st, classes: g }, et = CM(W), { root: B, ...tt } = et, rt = A || { standard: Z.jsx(TM, { ownerState: W }), outlined: Z.jsx(wM, { label: R, ownerState: W }), filled: Z.jsx(EM, { ownerState: W }) }[st], gt = Un(a, Bu(rt));
  return Z.jsx(O.Fragment, { children: O.cloneElement(rt, { inputComponent: ut, inputProps: { children: h, error: C.error, IconComponent: S, variant: st, type: void 0, multiple: U, ...V ? { id: w } : { autoWidth: f, defaultOpen: y, displayEmpty: b, labelId: M, MenuProps: $, onClose: D, onOpen: N, open: k, renderValue: j, SelectDisplayProps: { id: w, ...X } }, ...P, classes: P ? zn(tt, P.classes) : tt, ...A ? A.props.inputProps : {} }, ...(U && V || b) && st === "outlined" ? { notched: true } : {}, ref: gt, className: Yt(rt.props.className, v, et.root), ...!A && { variant: st }, ...it }) });
});
pb.muiName = "Select";
const OM = $C({ createStyledComponent: Mt("div", { name: "MuiStack", slot: "Root" }), useThemeProps: (n3) => ze({ props: n3, name: "MuiStack" }) });
function MM(n3) {
  return Re("MuiTextField", n3);
}
Le("MuiTextField", ["root"]);
const AM = { standard: gm, filled: mm, outlined: ym }, RM = (n3) => {
  const { classes: r } = n3;
  return Pe({ root: ["root"] }, MM, r);
}, LM = Mt(vO, { name: "MuiTextField", slot: "Root" })({}), PM = O.forwardRef(function(r, a) {
  const u = ze({ props: r, name: "MuiTextField" }), { autoComplete: f, autoFocus: h = false, children: g, className: v, color: y = "primary", defaultValue: b, disabled: S = false, error: w = false, FormHelperTextProps: A, fullWidth: P = false, helperText: R, id: M, InputLabelProps: $, inputProps: U, InputProps: V, inputRef: D, label: N, maxRows: k, minRows: j, multiline: X = false, name: J, onBlur: it, onChange: ut, onFocus: ot, placeholder: C, required: st = false, rows: W, select: et = false, SelectProps: B, slots: tt = {}, slotProps: rt = {}, type: gt, value: z, variant: Y = "outlined", ...ft } = u, dt = { ...u, autoFocus: h, color: y, disabled: S, error: w, fullWidth: P, multiline: X, required: st, select: et, variant: Y }, bt = RM(dt), _t = el(M), ct = R && _t ? `${_t}-helper-text` : void 0, At = N && _t ? `${_t}-label` : void 0, Pt = AM[Y], $t = { slots: tt, slotProps: { input: V, inputLabel: $, htmlInput: U, formHelperText: A, select: B, ...rt } }, Rt = {}, Ut = $t.slotProps.inputLabel;
  Y === "outlined" && (Ut && typeof Ut.shrink < "u" && (Rt.notched = Ut.shrink), Rt.label = N), et && ((!B || !B.native) && (Rt.id = void 0), Rt["aria-describedby"] = void 0);
  const [Wt, te] = vn("root", { elementType: LM, shouldForwardComponentProp: true, externalForwardedProps: { ...$t, ...ft }, ownerState: dt, className: Yt(bt.root, v), ref: a, additionalProps: { disabled: S, error: w, fullWidth: P, required: st, color: y, variant: Y } }), [qt, de] = vn("input", { elementType: Pt, externalForwardedProps: $t, additionalProps: Rt, ownerState: dt }), [ie, ue] = vn("inputLabel", { elementType: kO, externalForwardedProps: $t, ownerState: dt }), [Tt, _e] = vn("htmlInput", { elementType: "input", externalForwardedProps: $t, ownerState: dt }), [Bt, Jt] = vn("formHelperText", { elementType: xO, externalForwardedProps: $t, ownerState: dt }), [Ot, tn] = vn("select", { elementType: pb, externalForwardedProps: $t, ownerState: dt }), be = Z.jsx(qt, { "aria-describedby": ct, autoComplete: f, autoFocus: h, defaultValue: b, fullWidth: P, multiline: X, name: J, rows: W, maxRows: k, minRows: j, type: gt, value: z, id: _t, inputRef: D, onBlur: it, onChange: ut, onFocus: ot, placeholder: C, inputProps: _e, slots: { input: tt.htmlInput ? Tt : void 0 }, ...de });
  return Z.jsxs(Wt, { ...te, children: [N != null && N !== "" && Z.jsx(ie, { htmlFor: _t, id: At, ...ue, children: N }), et ? Z.jsx(Ot, { "aria-describedby": ct, id: _t, labelId: At, value: z, input: be, ...tn, children: g }) : be, R && Z.jsx(Bt, { id: ct, ...Jt, children: R })] });
}), H_ = (n3) => {
  let r;
  const a = /* @__PURE__ */ new Set(), u = (b, S) => {
    const w = typeof b == "function" ? b(r) : b;
    if (!Object.is(w, r)) {
      const A = r;
      r = S ?? (typeof w != "object" || w === null) ? w : Object.assign({}, r, w), a.forEach((P) => P(r, A));
    }
  }, f = () => r, v = { setState: u, getState: f, getInitialState: () => y, subscribe: (b) => (a.add(b), () => a.delete(b)) }, y = r = n3(u, f, v);
  return v;
}, zM = (n3) => n3 ? H_(n3) : H_, kM = (n3) => n3;
function BM(n3, r = kM) {
  const a = Xn.useSyncExternalStore(n3.subscribe, () => r(n3.getState()), () => r(n3.getInitialState()));
  return Xn.useDebugValue(a), a;
}
const j_ = (n3) => {
  const r = zM(n3), a = (u) => BM(r, u);
  return Object.assign(a, r), a;
}, DM = (n3) => n3 ? j_(n3) : j_;
let li = DM((n3, r) => ({ prevSession: null, mainColor: "", profile: "pedone", bbox: null, page: null, markers: [], profiles: { wheelchair: "Sedia a rotelle", normo: "Pedone", visuallyImpaired: "Ipovedente", elderly: "Anziano", parent: "Genitore" }, colors: { pedone: "#ed4347", wheelchair: "#0875f9", visuallyImpaired: "#ff8ec7", elderly: "#41ce69", parent: "#ff9848" }, setNextColor: () => {
  const a = r().colors, u = r().profile, f = Object.keys(a), g = (f.indexOf(u) + 1) % f.length, v = f[g], y = a[v];
  n3({ profile: v, mainColor: y });
}, setMarkers: (a) => {
  const u = r().markers;
  n3({ markers: u.length < 2 ? [...u, a] : [a] });
} }));
const NM = "https://peba-app-95m3h.ondigitalocean.app", U_ = NM, $M = { "Content-Type": "application/json" };
async function Z_(n3, { method: r = "GET", headers: a = {}, body: u, signal: f } = {}) {
  console.log("inside api", U_, n3);
  const h = await fetch(`${U_}${n3}`, { method: r, headers: { ...$M, ...a }, body: u ? JSON.stringify(u) : void 0, signal: f, credentials: "omit" });
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
const bm = { get: (n3, r) => Z_(n3, { ...r, method: "GET" }), post: (n3, r, a) => Z_(n3, { ...a, method: "POST", body: r }) };
function IM({ origin: n3, destination: r }) {
  return bm.post("/route", { origin: n3, destination: r });
}
function HM({}) {
  return bm.get("/bbox", {});
}
function jM() {
  return bm.get("/network", {});
}
const UM = Ja(Z.jsx("path", { d: "M19 12h3L12 3 2 12h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2zM7 15v-4.81l4-3.6V15zm6 0V6.59l4 3.6V15z" })), ZM = Ja(Z.jsx("path", { d: "M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15M14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2" })), qM = Ja(Z.jsx("path", { d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6" }));
function VM() {
  const n3 = Qa(), r = li((u) => u.setNextColor), a = [{ icon: UM, action: () => console.log("Logo clicked") }, { icon: ZM, action: () => console.log("Help clicked") }, { icon: qM, action: () => r() }];
  return Z.jsx(Js, { sx: { width: "100%", height: `${n3.grid.units.h}px`, marginY: n3.grid.spacing, borderRadius: n3.brdRad, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }, children: a.map((u, f) => Z.jsxs(O.Fragment, { children: [Z.jsx(Ka, { onClick: u.action, sx: { width: `${n3.iconH}`, height: `${n3.iconH}`, marginLeft: f === 0 ? 0 : n3.grid.spacing }, children: Z.jsx(u.icon, { sx: { width: "60%", height: "60%", color: n3.palette.secondary.main } }) }), f == 0 ? Z.jsx(Js, { sx: { flexGrow: 1 } }) : null] }, f)) });
}
function Rp({ focus: n3 = false, outlined: r = true, ...a }) {
  const u = Qa(), f = u.noBlurShadows;
  return Z.jsx(Js, { ...a, on: true, sx: { width: "100%", borderRadius: u.brdRad, border: r ? `solid 2px ${u.palette.primary.main}` : "none", boxShadow: n3 ? f.active : f.none, transition: f.transition, color: u.palette.primary.main, ...a.sx } });
}
function q_({ theme: n3, label: r = "Da", placeholder: a = "Seleziona una Destinazione" }) {
  const { addresses: u, setMarkers: f } = li(), [h, g] = O.useState(null), [v, y] = O.useState(""), b = O.useMemo(() => u.map((w, A) => ({ label: `${w.properties["nome strada"]}, ${w.properties.numero}`, value: w.geometry.coordinates })), [u]), S = V0({ limit: 10, ignoreCase: true, trim: true });
  return Z.jsxs(Rp, { outlined: false, sx: { height: `${n3.grid.units.h}px`, marginY: n3.grid.spacing, display: "flex", flexDirection: "row", alignItems: "center" }, children: [Z.jsx(Ka, { disabled: true, children: Z.jsx(rm, { children: r }) }), Z.jsx(Rp, { sx: { height: "100%", marginLeft: n3.grid.spacing, borderRadius: n3.brdRad, flexGrow: 1, display: "flex", alignItems: "center", backgroundColor: n3.palette.primary.secondary, paddingLeft: n3.offRad }, children: Z.jsx(SE, { value: h, disableClearable: true, onChange: (w, A) => {
    g(A), f({ coordinates: A.value.reverse(), key: Date.now() });
  }, inputValue: v, onInputChange: (w, A) => {
    y(A);
  }, options: b, filterOptions: S, getOptionLabel: (w) => (w == null ? void 0 : w.label) || "", open: v.length > 0, sx: { width: "100%", "& .MuiOutlinedInput-root": { paddingY: 0, paddingX: 0.5, height: "100%", color: n3.palette.primary.main }, "& .MuiInputBase-input": { padding: 0, fontSize: "0.9rem" }, "& .MuiOutlinedInput-notchedOutline": { border: "none" }, "& .MuiAutocomplete-endAdornment": { display: "none" } }, renderInput: (w) => Z.jsx(PM, { ...w, placeholder: a, variant: "outlined" }) }) })] });
}
const GM = Ja(Z.jsx("path", { d: "M21.95 10.99c-1.79-.03-3.7-1.95-2.68-4.22-2.98 1-5.77-1.59-5.19-4.56C6.95.71 2 6.58 2 12c0 5.52 4.48 10 10 10 5.89 0 10.54-5.08 9.95-11.01M8.5 15c-.83 0-1.5-.67-1.5-1.5S7.67 12 8.5 12s1.5.67 1.5 1.5S9.33 15 8.5 15m2-5C9.67 10 9 9.33 9 8.5S9.67 7 10.5 7s1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" }));
function YM() {
  const n3 = Qa();
  return Z.jsxs(Js, { sx: { width: "100%", height: `${n3.grid.units.h}px`, marginY: n3.grid.spacing, borderRadius: n3.brdRad, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, children: [Z.jsxs(Js, { sx: { display: "flex", flexDirection: "column", height: "100%", justifyContent: "flex-end", alignItems: "flex-start", fontSize: "0.8rem" }, children: [Z.jsx(HO, { sx: { fontWeight: "bold" }, children: "Contattaci" }), Z.jsx(rm, { sx: { fontSize: "0.8rem" }, children: "Systematica - Transform Transport" })] }), Z.jsx(Ka, { sx: { width: `${n3.iconH}`, height: `${n3.iconH}` }, children: Z.jsx(GM, { sx: { width: "60%", height: "60%", color: n3.palette.secondary.main } }) })] });
}
function FM(n3, r) {
  const a = O.useRef(r);
  O.useEffect(function() {
    r !== a.current && n3.attributionControl != null && (a.current != null && n3.attributionControl.removeAttribution(a.current), r != null && n3.attributionControl.addAttribution(r)), a.current = r;
  }, [n3, r]);
}
function XM(n3, r, a) {
  r.center !== a.center && n3.setLatLng(r.center), r.radius != null && r.radius !== a.radius && n3.setRadius(r.radius);
}
const KM = 1;
function WM(n3) {
  return Object.freeze({ __version: KM, map: n3 });
}
function xm(n3, r) {
  return Object.freeze({ ...n3, ...r });
}
const Vf = O.createContext(null);
function Gf() {
  const n3 = O.use(Vf);
  if (n3 == null) throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");
  return n3;
}
function QM(n3) {
  function r(a, u) {
    const { instance: f, context: h } = n3(a).current;
    O.useImperativeHandle(u, () => f);
    const { children: g } = a;
    return g == null ? null : Xn.createElement(Vf, { value: h }, g);
  }
  return O.forwardRef(r);
}
function JM(n3) {
  function r(a, u) {
    const { instance: f } = n3(a).current;
    return O.useImperativeHandle(u, () => f), null;
  }
  return O.forwardRef(r);
}
function mb(n3, r) {
  const a = O.useRef(void 0);
  O.useEffect(function() {
    return r != null && n3.instance.on(r), a.current = r, function() {
      a.current != null && n3.instance.off(a.current), a.current = null;
    };
  }, [n3, r]);
}
function Sm(n3, r) {
  const a = n3.pane ?? r.pane;
  return a ? { ...n3, pane: a } : n3;
}
var du = { exports: {} };
/* @preserve
* Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
* (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
*/
var tA = du.exports, V_;
function eA() {
  return V_ || (V_ = 1, function(n3, r) {
    (function(a, u) {
      u(r);
    })(tA, function(a) {
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
        var m, _, T, I;
        return I = function() {
          m = false, _ && (T.apply(c, _), _ = false);
        }, T = function() {
          m ? _ = arguments : (i.apply(c, arguments), setTimeout(I, s), m = true);
        }, T;
      }
      function S(i, s, c) {
        var m = s[1], _ = s[0], T = m - _;
        return i === m && c ? i : ((i - _) % T + T) % T + _;
      }
      function w() {
        return false;
      }
      function A(i, s) {
        if (s === false) return i;
        var c = Math.pow(10, s === void 0 ? 6 : s);
        return Math.round(i * c) / c;
      }
      function P(i) {
        return i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, "");
      }
      function R(i) {
        return P(i).split(/\s+/);
      }
      function M(i, s) {
        Object.prototype.hasOwnProperty.call(i, "options") || (i.options = i.options ? h(i.options) : {});
        for (var c in s) i.options[c] = s[c];
        return i.options;
      }
      function $(i, s, c) {
        var m = [];
        for (var _ in i) m.push(encodeURIComponent(c ? _.toUpperCase() : _) + "=" + encodeURIComponent(i[_]));
        return (!s || s.indexOf("?") === -1 ? "?" : "&") + m.join("&");
      }
      var U = /\{ *([\w_ -]+) *\}/g;
      function V(i, s) {
        return i.replace(U, function(c, m) {
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
      var k = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function j(i) {
        return window["webkit" + i] || window["moz" + i] || window["ms" + i];
      }
      var X = 0;
      function J(i) {
        var s = +/* @__PURE__ */ new Date(), c = Math.max(0, 16 - (s - X));
        return X = s + c, window.setTimeout(i, c);
      }
      var it = window.requestAnimationFrame || j("RequestAnimationFrame") || J, ut = window.cancelAnimationFrame || j("CancelAnimationFrame") || j("CancelRequestAnimationFrame") || function(i) {
        window.clearTimeout(i);
      };
      function ot(i, s, c) {
        if (c && it === J) i.call(s);
        else return it.call(window, g(i, s));
      }
      function C(i) {
        i && ut.call(window, i);
      }
      var st = { __proto__: null, extend: f, create: h, bind: g, get lastId() {
        return v;
      }, stamp: y, throttle: b, wrapNum: S, falseFn: w, formatNum: A, trim: P, splitWords: R, setOptions: M, getParamString: $, template: V, isArray: D, indexOf: N, emptyImageUrl: k, requestFn: it, cancelFn: ut, requestAnimFrame: ot, cancelAnimFrame: C };
      function W() {
      }
      W.extend = function(i) {
        var s = function() {
          M(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, c = s.__super__ = this.prototype, m = h(c);
        m.constructor = s, s.prototype = m;
        for (var _ in this) Object.prototype.hasOwnProperty.call(this, _) && _ !== "prototype" && _ !== "__super__" && (s[_] = this[_]);
        return i.statics && f(s, i.statics), i.includes && (et(i.includes), f.apply(null, [m].concat(i.includes))), f(m, i), delete m.statics, delete m.includes, m.options && (m.options = c.options ? h(c.options) : {}, f(m.options, i.options)), m._initHooks = [], m.callInitHooks = function() {
          if (!this._initHooksCalled) {
            c.callInitHooks && c.callInitHooks.call(this), this._initHooksCalled = true;
            for (var T = 0, I = m._initHooks.length; T < I; T++) m._initHooks[T].call(this);
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
          i = R(i);
          for (var _ = 0, T = i.length; _ < T; _++) this._on(i[_], s, c);
        }
        return this;
      }, off: function(i, s, c) {
        if (!arguments.length) delete this._events;
        else if (typeof i == "object") for (var m in i) this._off(m, i[m], s);
        else {
          i = R(i);
          for (var _ = arguments.length === 1, T = 0, I = i.length; T < I; T++) _ ? this._off(i[T]) : this._off(i[T], s, c);
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
        var m, _, T;
        if (this._events && (m = this._events[i], !!m)) {
          if (arguments.length === 1) {
            if (this._firingCount) for (_ = 0, T = m.length; _ < T; _++) m[_].fn = w;
            delete this._events[i];
            return;
          }
          if (typeof s != "function") {
            console.warn("wrong listener type: " + typeof s);
            return;
          }
          var I = this._listens(i, s, c);
          if (I !== false) {
            var F = m[I];
            this._firingCount && (F.fn = w, this._events[i] = m = m.slice()), m.splice(I, 1);
          }
        }
      }, fire: function(i, s, c) {
        if (!this.listens(i, c)) return this;
        var m = f({}, s, { type: i, target: this, sourceTarget: s && s.sourceTarget || this });
        if (this._events) {
          var _ = this._events[i];
          if (_) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var T = 0, I = _.length; T < I; T++) {
              var F = _[T], lt = F.fn;
              F.once && this.off(i, lt, F.ctx), lt.call(F.ctx || this, m);
            }
            this._firingCount--;
          }
        }
        return c && this._propagateEvent(m), this;
      }, listens: function(i, s, c, m) {
        typeof i != "string" && console.warn('"string" type argument expected');
        var _ = s;
        typeof s != "function" && (m = !!s, _ = void 0, c = void 0);
        var T = this._events && this._events[i];
        if (T && T.length && this._listens(i, _, c) !== false) return true;
        if (m) {
          for (var I in this._eventParents) if (this._eventParents[I].listens(i, s, c, m)) return true;
        }
        return false;
      }, _listens: function(i, s, c) {
        if (!this._events) return false;
        var m = this._events[i] || [];
        if (!s) return !!m.length;
        c === this && (c = void 0);
        for (var _ = 0, T = m.length; _ < T; _++) if (m[_].fn === s && m[_].ctx === c) return _;
        return false;
      }, once: function(i, s, c) {
        if (typeof i == "object") for (var m in i) this._on(m, i[m], s, true);
        else {
          i = R(i);
          for (var _ = 0, T = i.length; _ < T; _++) this._on(i[_], s, c, true);
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
        return "Point(" + A(this.x) + ", " + A(this.y) + ")";
      } };
      function z(i, s, c) {
        return i instanceof rt ? i : D(i) ? new rt(i[0], i[1]) : i == null ? i : typeof i == "object" && "x" in i && "y" in i ? new rt(i.x, i.y) : new rt(i, s, c);
      }
      function Y(i, s) {
        if (i) for (var c = s ? [i, s] : i, m = 0, _ = c.length; m < _; m++) this.extend(c[m]);
      }
      Y.prototype = { extend: function(i) {
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
        return typeof i[0] == "number" || i instanceof rt ? i = z(i) : i = ft(i), i instanceof Y ? (s = i.min, c = i.max) : s = c = i, s.x >= this.min.x && c.x <= this.max.x && s.y >= this.min.y && c.y <= this.max.y;
      }, intersects: function(i) {
        i = ft(i);
        var s = this.min, c = this.max, m = i.min, _ = i.max, T = _.x >= s.x && m.x <= c.x, I = _.y >= s.y && m.y <= c.y;
        return T && I;
      }, overlaps: function(i) {
        i = ft(i);
        var s = this.min, c = this.max, m = i.min, _ = i.max, T = _.x > s.x && m.x < c.x, I = _.y > s.y && m.y < c.y;
        return T && I;
      }, isValid: function() {
        return !!(this.min && this.max);
      }, pad: function(i) {
        var s = this.min, c = this.max, m = Math.abs(s.x - c.x) * i, _ = Math.abs(s.y - c.y) * i;
        return ft(z(s.x - m, s.y - _), z(c.x + m, c.y + _));
      }, equals: function(i) {
        return i ? (i = ft(i), this.min.equals(i.getTopLeft()) && this.max.equals(i.getBottomRight())) : false;
      } };
      function ft(i, s) {
        return !i || i instanceof Y ? i : new Y(i, s);
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
        var s = this._southWest, c = this._northEast, m = i.getSouthWest(), _ = i.getNorthEast(), T = _.lat >= s.lat && m.lat <= c.lat, I = _.lng >= s.lng && m.lng <= c.lng;
        return T && I;
      }, overlaps: function(i) {
        i = bt(i);
        var s = this._southWest, c = this._northEast, m = i.getSouthWest(), _ = i.getNorthEast(), T = _.lat > s.lat && m.lat < c.lat, I = _.lng > s.lng && m.lng < c.lng;
        return T && I;
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
        return "LatLng(" + A(this.lat, i) + ", " + A(this.lng, i) + ")";
      }, distanceTo: function(i) {
        return Pt.distance(this, ct(i));
      }, wrap: function() {
        return Pt.wrapLatLng(this);
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
        return new Y(m, _);
      }, infinite: false, wrapLatLng: function(i) {
        var s = this.wrapLng ? S(i.lng, this.wrapLng, true) : i.lng, c = this.wrapLat ? S(i.lat, this.wrapLat, true) : i.lat, m = i.alt;
        return new _t(c, s, m);
      }, wrapLatLngBounds: function(i) {
        var s = i.getCenter(), c = this.wrapLatLng(s), m = s.lat - c.lat, _ = s.lng - c.lng;
        if (m === 0 && _ === 0) return i;
        var T = i.getSouthWest(), I = i.getNorthEast(), F = new _t(T.lat - m, T.lng - _), lt = new _t(I.lat - m, I.lng - _);
        return new dt(F, lt);
      } }, Pt = f({}, At, { wrapLng: [-180, 180], R: 6371e3, distance: function(i, s) {
        var c = Math.PI / 180, m = i.lat * c, _ = s.lat * c, T = Math.sin((s.lat - i.lat) * c / 2), I = Math.sin((s.lng - i.lng) * c / 2), F = T * T + Math.cos(m) * Math.cos(_) * I * I, lt = 2 * Math.atan2(Math.sqrt(F), Math.sqrt(1 - F));
        return this.R * lt;
      } }), $t = 6378137, Rt = { R: $t, MAX_LATITUDE: 85.0511287798, project: function(i) {
        var s = Math.PI / 180, c = this.MAX_LATITUDE, m = Math.max(Math.min(c, i.lat), -c), _ = Math.sin(m * s);
        return new rt(this.R * i.lng * s, this.R * Math.log((1 + _) / (1 - _)) / 2);
      }, unproject: function(i) {
        var s = 180 / Math.PI;
        return new _t((2 * Math.atan(Math.exp(i.y / this.R)) - Math.PI / 2) * s, i.x * s / this.R);
      }, bounds: function() {
        var i = $t * Math.PI;
        return new Y([-i, -i], [i, i]);
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
      var te = f({}, Pt, { code: "EPSG:3857", projection: Rt, transformation: function() {
        var i = 0.5 / (Math.PI * Rt.R);
        return Wt(i, 0.5, -i, 0.5);
      }() }), qt = f({}, te, { code: "EPSG:900913" });
      function de(i) {
        return document.createElementNS("http://www.w3.org/2000/svg", i);
      }
      function ie(i, s) {
        var c = "", m, _, T, I, F, lt;
        for (m = 0, T = i.length; m < T; m++) {
          for (F = i[m], _ = 0, I = F.length; _ < I; _++) lt = F[_], c += (_ ? "L" : "M") + lt.x + " " + lt.y;
          c += s ? Dt.svg ? "z" : "x" : "";
        }
        return c || "M0 0";
      }
      var ue = document.documentElement.style, Tt = "ActiveXObject" in window, _e = Tt && !document.addEventListener, Bt = "msLaunchUri" in navigator && !("documentMode" in document), Jt = wn("webkit"), Ot = wn("android"), tn = wn("android 2") || wn("android 3"), be = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), qe = Ot && wn("Google") && be < 537 && !("AudioNode" in window), ce = !!window.opera, Vt = !Bt && wn("chrome"), oe = wn("gecko") && !Jt && !ce && !Tt, he = !Vt && wn("safari"), xe = wn("phantom"), jt = "OTransition" in ue, cn = navigator.platform.indexOf("Win") === 0, kn = Tt && "transition" in ue, rn = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !tn, kt = "MozPerspective" in ue, ne = !window.L_DISABLE_3D && (kn || rn || kt) && !jt && !xe, re = typeof orientation < "u" || wn("mobile"), Kn = re && Jt, so = re && rn, lo = !window.PointerEvent && window.MSPointerEvent, Wn = !!(window.PointerEvent || lo), Tn = "ontouchstart" in window || !!window.TouchEvent, uo = !window.L_NO_TOUCH && (Tn || Wn), ui = re && ce, ci = re && oe, fi = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, Yo = function() {
        var i = false;
        try {
          var s = Object.defineProperty({}, "passive", { get: function() {
            i = true;
          } });
          window.addEventListener("testPassiveEventSupport", w, s), window.removeEventListener("testPassiveEventSupport", w, s);
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
      function wn(i) {
        return navigator.userAgent.toLowerCase().indexOf(i) >= 0;
      }
      var Dt = { ie: Tt, ielt9: _e, edge: Bt, webkit: Jt, android: Ot, android23: tn, androidStock: qe, opera: ce, chrome: Vt, gecko: oe, safari: he, phantom: xe, opera12: jt, win: cn, ie3d: kn, webkit3d: rn, gecko3d: kt, any3d: ne, mobile: re, mobileWebkit: Kn, mobileWebkit3d: so, msPointer: lo, pointer: Wn, touch: uo, touchNative: Tn, mobileOpera: ui, mobileGecko: ci, retina: fi, passiveEvents: Yo, canvas: Zi, svg: To, vml: Qe, inlineSvg: di, mac: an, linux: hi }, Cr = Dt.msPointer ? "MSPointerDown" : "pointerdown", Fo = Dt.msPointer ? "MSPointerMove" : "pointermove", pi = Dt.msPointer ? "MSPointerUp" : "pointerup", Ve = Dt.msPointer ? "MSPointerCancel" : "pointercancel", ke = { touchstart: Cr, touchmove: Fo, touchend: pi, touchcancel: Ve }, En = { touchstart: Ye, touchmove: Ge, touchend: Ge, touchcancel: Ge }, Zn = {}, Qn = false;
      function Je(i, s, c) {
        return s === "touchstart" && Ft(), En[s] ? (c = En[s].bind(this, c), i.addEventListener(ke[s], c, false), c) : (console.warn("wrong event specified:", s), w);
      }
      function pt(i, s, c) {
        if (!ke[s]) {
          console.warn("wrong event specified:", s);
          return;
        }
        i.removeEventListener(ke[s], c, false);
      }
      function ht(i) {
        Zn[i.pointerId] = i;
      }
      function wt(i) {
        Zn[i.pointerId] && (Zn[i.pointerId] = i);
      }
      function It(i) {
        delete Zn[i.pointerId];
      }
      function Ft() {
        Qn || (document.addEventListener(Cr, ht, true), document.addEventListener(Fo, wt, true), document.addEventListener(pi, It, true), document.addEventListener(Ve, It, true), Qn = true);
      }
      function Ge(i, s) {
        if (s.pointerType !== (s.MSPOINTER_TYPE_MOUSE || "mouse")) {
          s.touches = [];
          for (var c in Zn) s.touches.push(Zn[c]);
          s.changedTouches = [s], i(s);
        }
      }
      function Ye(i, s) {
        s.MSPOINTER_TYPE_TOUCH && s.pointerType === s.MSPOINTER_TYPE_TOUCH && fn(s), Ge(i, s);
      }
      function Jn(i) {
        var s = {}, c, m;
        for (m in i) c = i[m], s[m] = c && c.bind ? c.bind(i) : c;
        return i = s, s.type = "dblclick", s.detail = 2, s.isTrusted = false, s._simulated = true, s;
      }
      var co = 200;
      function Xo(i, s) {
        i.addEventListener("dblclick", s);
        var c = 0, m;
        function _(T) {
          if (T.detail !== 1) {
            m = T.detail;
            return;
          }
          if (!(T.pointerType === "mouse" || T.sourceCapabilities && !T.sourceCapabilities.firesTouchEvents)) {
            var I = sl(T);
            if (!(I.some(function(lt) {
              return lt instanceof HTMLLabelElement && lt.attributes.for;
            }) && !I.some(function(lt) {
              return lt instanceof HTMLInputElement || lt instanceof HTMLSelectElement;
            }))) {
              var F = Date.now();
              F - c <= co ? (m++, m === 2 && s(Jn(T))) : m = 1, c = F;
            }
          }
        }
        return i.addEventListener("click", _), { dblclick: s, simDblclick: _ };
      }
      function mi(i, s) {
        i.removeEventListener("dblclick", s.dblclick), i.removeEventListener("click", s.simDblclick);
      }
      var wo = Er(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), ae = Er(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), On = ae === "webkitTransition" || ae === "OTransition" ? ae + "End" : "transitionend";
      function ti(i) {
        return typeof i == "string" ? document.getElementById(i) : i;
      }
      function ei(i, s) {
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
      function Fe(i) {
        var s = i.parentNode;
        s && s.removeChild(i);
      }
      function Bn(i) {
        for (; i.firstChild; ) i.removeChild(i.firstChild);
      }
      function Ko(i) {
        var s = i.parentNode;
        s && s.lastChild !== i && s.appendChild(i);
      }
      function Tr(i) {
        var s = i.parentNode;
        s && s.firstChild !== i && s.insertBefore(i, s.firstChild);
      }
      function wr(i, s) {
        if (i.classList !== void 0) return i.classList.contains(s);
        var c = Dn(i);
        return c.length > 0 && new RegExp("(^|\\s)" + s + "(\\s|$)").test(c);
      }
      function ee(i, s) {
        if (i.classList !== void 0) for (var c = R(s), m = 0, _ = c.length; m < _; m++) i.classList.add(c[m]);
        else if (!wr(i, s)) {
          var T = Dn(i);
          rl(i, (T ? T + " " : "") + s);
        }
      }
      function Xe(i, s) {
        i.classList !== void 0 ? i.classList.remove(s) : rl(i, P((" " + Dn(i) + " ").replace(" " + s + " ", " ")));
      }
      function rl(i, s) {
        i.className.baseVal === void 0 ? i.className = s : i.className.baseVal = s;
      }
      function Dn(i) {
        return i.correspondingElement && (i = i.correspondingElement), i.className.baseVal === void 0 ? i.className : i.className.baseVal;
      }
      function qn(i, s) {
        "opacity" in i.style ? i.style.opacity = s : "filter" in i.style && Du(i, s);
      }
      function Du(i, s) {
        var c = false, m = "DXImageTransform.Microsoft.Alpha";
        try {
          c = i.filters.item(m);
        } catch {
          if (s === 1) return;
        }
        s = Math.round(s * 100), c ? (c.Enabled = s !== 100, c.Opacity = s) : i.style.filter += " progid:" + m + "(opacity=" + s + ")";
      }
      function Er(i) {
        for (var s = document.documentElement.style, c = 0; c < i.length; c++) if (i[c] in s) return i[c];
        return false;
      }
      function gi(i, s, c) {
        var m = s || new rt(0, 0);
        i.style[wo] = (Dt.ie3d ? "translate(" + m.x + "px," + m.y + "px)" : "translate3d(" + m.x + "px," + m.y + "px,0)") + (c ? " scale(" + c + ")" : "");
      }
      function sn(i, s) {
        i._leaflet_pos = s, Dt.any3d ? gi(i, s) : (i.style.left = s.x + "px", i.style.top = s.y + "px");
      }
      function Eo(i) {
        return i._leaflet_pos || new rt(0, 0);
      }
      var qi, ga, ts;
      if ("onselectstart" in document) qi = function() {
        Qt(window, "selectstart", fn);
      }, ga = function() {
        Te(window, "selectstart", fn);
      };
      else {
        var Or = Er(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        qi = function() {
          if (Or) {
            var i = document.documentElement.style;
            ts = i[Or], i[Or] = "none";
          }
        }, ga = function() {
          Or && (document.documentElement.style[Or] = ts, ts = void 0);
        };
      }
      function va() {
        Qt(window, "dragstart", fn);
      }
      function al() {
        Te(window, "dragstart", fn);
      }
      var es, Mr;
      function ya(i) {
        for (; i.tabIndex === -1; ) i = i.parentNode;
        i.style && (Ar(), es = i, Mr = i.style.outlineStyle, i.style.outlineStyle = "none", Qt(window, "keydown", Ar));
      }
      function Ar() {
        es && (es.style.outlineStyle = Mr, es = void 0, Mr = void 0, Te(window, "keydown", Ar));
      }
      function Wo(i) {
        do
          i = i.parentNode;
        while ((!i.offsetWidth || !i.offsetHeight) && i !== document.body);
        return i;
      }
      function Oo(i) {
        var s = i.getBoundingClientRect();
        return { x: s.width / i.offsetWidth || 1, y: s.height / i.offsetHeight || 1, boundingClientRect: s };
      }
      var Nu = { __proto__: null, TRANSFORM: wo, TRANSITION: ae, TRANSITION_END: On, get: ti, getStyle: ei, create: Se, remove: Fe, empty: Bn, toFront: Ko, toBack: Tr, hasClass: wr, addClass: ee, removeClass: Xe, setClass: rl, getClass: Dn, setOpacity: qn, testProp: Er, setTransform: gi, setPosition: sn, getPosition: Eo, get disableTextSelection() {
        return qi;
      }, get enableTextSelection() {
        return ga;
      }, disableImageDrag: va, enableImageDrag: al, preventOutline: ya, restoreOutline: Ar, getSizedParentNode: Wo, getScale: Oo };
      function Qt(i, s, c, m) {
        if (s && typeof s == "object") for (var _ in s) Qo(i, _, s[_], c);
        else {
          s = R(s);
          for (var T = 0, I = s.length; T < I; T++) Qo(i, s[T], c, m);
        }
        return this;
      }
      var wi = "_leaflet_events";
      function Te(i, s, c, m) {
        if (arguments.length === 1) Vi(i), delete i[wi];
        else if (s && typeof s == "object") for (var _ in s) Gi(i, _, s[_], c);
        else if (s = R(s), arguments.length === 2) Vi(i, function(F) {
          return N(s, F) !== -1;
        });
        else for (var T = 0, I = s.length; T < I; T++) Gi(i, s[T], c, m);
        return this;
      }
      function Vi(i, s) {
        for (var c in i[wi]) {
          var m = c.split(/\d/)[0];
          (!s || s(m)) && Gi(i, m, null, null, c);
        }
      }
      var _a = { mouseenter: "mouseover", mouseleave: "mouseout", wheel: !("onwheel" in window) && "mousewheel" };
      function Qo(i, s, c, m) {
        var _ = s + y(c) + (m ? "_" + y(m) : "");
        if (i[wi] && i[wi][_]) return this;
        var T = function(F) {
          return c.call(m || i, F || window.event);
        }, I = T;
        !Dt.touchNative && Dt.pointer && s.indexOf("touch") === 0 ? T = Je(i, s, T) : Dt.touch && s === "dblclick" ? T = Xo(i, T) : "addEventListener" in i ? s === "touchstart" || s === "touchmove" || s === "wheel" || s === "mousewheel" ? i.addEventListener(_a[s] || s, T, Dt.passiveEvents ? { passive: false } : false) : s === "mouseenter" || s === "mouseleave" ? (T = function(F) {
          F = F || window.event, tr(i, F) && I(F);
        }, i.addEventListener(_a[s], T, false)) : i.addEventListener(s, I, false) : i.attachEvent("on" + s, T), i[wi] = i[wi] || {}, i[wi][_] = T;
      }
      function Gi(i, s, c, m, _) {
        _ = _ || s + y(c) + (m ? "_" + y(m) : "");
        var T = i[wi] && i[wi][_];
        if (!T) return this;
        !Dt.touchNative && Dt.pointer && s.indexOf("touch") === 0 ? pt(i, s, T) : Dt.touch && s === "dblclick" ? mi(i, T) : "removeEventListener" in i ? i.removeEventListener(_a[s] || s, T, false) : i.detachEvent("on" + s, T), i[wi][_] = null;
      }
      function fo(i) {
        return i.stopPropagation ? i.stopPropagation() : i.originalEvent ? i.originalEvent._stopped = true : i.cancelBubble = true, this;
      }
      function Rr(i) {
        return Qo(i, "wheel", fo), this;
      }
      function Lr(i) {
        return Qt(i, "mousedown touchstart dblclick contextmenu", fo), i._leaflet_disable_click = true, this;
      }
      function fn(i) {
        return i.preventDefault ? i.preventDefault() : i.returnValue = false, this;
      }
      function Yi(i) {
        return fn(i), fo(i), this;
      }
      function sl(i) {
        if (i.composedPath) return i.composedPath();
        for (var s = [], c = i.target; c; ) s.push(c), c = c.parentNode;
        return s;
      }
      function Nn(i, s) {
        if (!s) return new rt(i.clientX, i.clientY);
        var c = Oo(s), m = c.boundingClientRect;
        return new rt((i.clientX - m.left) / c.x - s.clientLeft, (i.clientY - m.top) / c.y - s.clientTop);
      }
      var Jo = Dt.linux && Dt.chrome ? window.devicePixelRatio : Dt.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function ba(i) {
        return Dt.edge ? i.wheelDeltaY / 2 : i.deltaY && i.deltaMode === 0 ? -i.deltaY / Jo : i.deltaY && i.deltaMode === 1 ? -i.deltaY * 20 : i.deltaY && i.deltaMode === 2 ? -i.deltaY * 60 : i.deltaX || i.deltaZ ? 0 : i.wheelDelta ? (i.wheelDeltaY || i.wheelDelta) / 2 : i.detail && Math.abs(i.detail) < 32765 ? -i.detail * 20 : i.detail ? i.detail / -32765 * 60 : 0;
      }
      function tr(i, s) {
        var c = s.relatedTarget;
        if (!c) return true;
        try {
          for (; c && c !== i; ) c = c.parentNode;
        } catch {
          return false;
        }
        return c !== i;
      }
      var Ff = { __proto__: null, on: Qt, off: Te, stopPropagation: fo, disableScrollPropagation: Rr, disableClickPropagation: Lr, preventDefault: fn, stop: Yi, getPropagationPath: sl, getMousePosition: Nn, getWheelDelta: ba, isExternalTarget: tr, addListener: Qt, removeListener: Te }, ns = tt.extend({ run: function(i, s, c, m) {
        this.stop(), this._el = i, this._inProgress = true, this._duration = c || 0.25, this._easeOutPower = 1 / Math.max(m || 0.5, 0.2), this._startPos = Eo(i), this._offset = s.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
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
        C(this._animId), this._inProgress = false, this.fire("end");
      }, _easeOut: function(i) {
        return 1 - Math.pow(1 - i, this._easeOutPower);
      } }), pe = tt.extend({ options: { crs: te, center: void 0, zoom: void 0, minZoom: void 0, maxZoom: void 0, layers: [], maxBounds: void 0, renderer: void 0, zoomAnimation: true, zoomAnimationThreshold: 4, fadeAnimation: true, markerZoomAnimation: true, transform3DLimit: 8388608, zoomSnap: 1, zoomDelta: 1, trackResize: true }, initialize: function(i, s) {
        s = M(this, s), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = true, this._initContainer(i), this._initLayout(), this._onResize = g(this._onResize, this), this._initEvents(), s.maxBounds && this.setMaxBounds(s.maxBounds), s.zoom !== void 0 && (this._zoom = this._limitZoom(s.zoom)), s.center && s.zoom !== void 0 && this.setView(ct(s.center), s.zoom, { reset: true }), this.callInitHooks(), this._zoomAnimated = ae && Dt.any3d && !Dt.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Qt(this._proxy, On, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
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
        var m = this.getZoomScale(s), _ = this.getSize().divideBy(2), T = i instanceof rt ? i : this.latLngToContainerPoint(i), I = T.subtract(_).multiplyBy(1 - 1 / m), F = this.containerPointToLatLng(_.add(I));
        return this.setView(F, s, { zoom: c });
      }, _getBoundsCenterZoom: function(i, s) {
        s = s || {}, i = i.getBounds ? i.getBounds() : bt(i);
        var c = z(s.paddingTopLeft || s.padding || [0, 0]), m = z(s.paddingBottomRight || s.padding || [0, 0]), _ = this.getBoundsZoom(i, false, c.add(m));
        if (_ = typeof s.maxZoom == "number" ? Math.min(s.maxZoom, _) : _, _ === 1 / 0) return { center: i.getCenter(), zoom: _ };
        var T = m.subtract(c).divideBy(2), I = this.project(i.getSouthWest(), _), F = this.project(i.getNorthEast(), _), lt = this.unproject(I.add(F).divideBy(2).add(T), _);
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
        if (this._panAnim || (this._panAnim = new ns(), this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)), s.noMoveStart || this.fire("movestart"), s.animate !== false) {
          ee(this._mapPane, "leaflet-pan-anim");
          var c = this._getMapPanePos().subtract(i).round();
          this._panAnim.run(this._mapPane, c, s.duration || 0.25, s.easeLinearity);
        } else this._rawPanBy(i), this.fire("move").fire("moveend");
        return this;
      }, flyTo: function(i, s, c) {
        if (c = c || {}, c.animate === false || !Dt.any3d) return this.setView(i, s, c);
        this._stop();
        var m = this.project(this.getCenter()), _ = this.project(i), T = this.getSize(), I = this._zoom;
        i = ct(i), s = s === void 0 ? I : s;
        var F = Math.max(T.x, T.y), lt = F * this.getZoomScale(I, s), St = _.distanceTo(m) || 1, Et = 1.42, Lt = Et * Et;
        function Nt(en) {
          var Ki = en ? -1 : 1, mo = en ? lt : F, Po = lt * lt - F * F + Ki * Lt * Lt * St * St, go = 2 * mo * Lt * St, za = Po / go, ms = Math.sqrt(za * za + 1) - za, ka = ms < 1e-9 ? -18 : Math.log(ms);
          return ka;
        }
        function Kt(en) {
          return (Math.exp(en) - Math.exp(-en)) / 2;
        }
        function Ke(en) {
          return (Math.exp(en) + Math.exp(-en)) / 2;
        }
        function ln(en) {
          return Kt(en) / Ke(en);
        }
        var An = Nt(0);
        function vi(en) {
          return F * (Ke(An) / Ke(An + Et * en));
        }
        function nc(en) {
          return F * (Ke(An) * ln(An + Et * en) - Kt(An)) / Lt;
        }
        function ic(en) {
          return 1 - Math.pow(1 - en, 1.5);
        }
        var Pa = Date.now(), Zr = (Nt(1) - An) / Et, oc = c.duration ? 1e3 * c.duration : 1e3 * Zr * 0.8;
        function qr() {
          var en = (Date.now() - Pa) / oc, Ki = ic(en) * Zr;
          en <= 1 ? (this._flyToFrame = ot(qr, this), this._move(this.unproject(m.add(_.subtract(m).multiplyBy(nc(Ki) / St)), I), this.getScaleZoom(F / vi(Ki), I), { flyTo: true })) : this._move(i, s)._moveEnd(true);
        }
        return this._moveStart(true, c.noMoveStart), qr.call(this), this;
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
        var c = z(s.paddingTopLeft || s.padding || [0, 0]), m = z(s.paddingBottomRight || s.padding || [0, 0]), _ = this.project(this.getCenter()), T = this.project(i), I = this.getPixelBounds(), F = ft([I.min.add(c), I.max.subtract(m)]), lt = F.getSize();
        if (!F.contains(T)) {
          this._enforcingBounds = true;
          var St = T.subtract(F.getCenter()), Et = F.extend(T).getSize().subtract(lt);
          _.x += St.x < 0 ? -Et.x : Et.x, _.y += St.y < 0 ? -Et.y : Et.y, this.panTo(this.unproject(_), s), this._enforcingBounds = false;
        }
        return this;
      }, invalidateSize: function(i) {
        if (!this._loaded) return this;
        i = f({ animate: false, pan: true }, i === true ? { animate: true } : i);
        var s = this.getSize();
        this._sizeChanged = true, this._lastCenter = null;
        var c = this.getSize(), m = s.divideBy(2).round(), _ = c.divideBy(2).round(), T = m.subtract(_);
        return !T.x && !T.y ? this : (i.animate && i.pan ? this.panBy(T) : (i.pan && this._rawPanBy(T), this.fire("move"), i.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(g(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", { oldSize: s, newSize: c }));
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
          var s = i.coords.latitude, c = i.coords.longitude, m = new _t(s, c), _ = m.toBounds(i.coords.accuracy * 2), T = this._locateOptions;
          if (T.setView) {
            var I = this.getBoundsZoom(_);
            this.setView(m, T.maxZoom ? Math.min(I, T.maxZoom) : I);
          }
          var F = { latlng: m, bounds: _, timestamp: i.timestamp };
          for (var lt in i.coords) typeof i.coords[lt] == "number" && (F[lt] = i.coords[lt]);
          this.fire("locationfound", F);
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
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), Fe(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (C(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var i;
        for (i in this._layers) this._layers[i].remove();
        for (i in this._panes) Fe(this._panes[i]);
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
        var m = this.getZoom() || 0, _ = this.getMinZoom(), T = this.getMaxZoom(), I = i.getNorthWest(), F = i.getSouthEast(), lt = this.getSize().subtract(c), St = ft(this.project(F, m), this.project(I, m)).getSize(), Et = Dt.any3d ? this.options.zoomSnap : 1, Lt = lt.x / St.x, Nt = lt.y / St.y, Kt = s ? Math.max(Lt, Nt) : Math.min(Lt, Nt);
        return m = this.getScaleZoom(Kt, m), Et && (m = Math.round(m / (Et / 100)) * (Et / 100), m = s ? Math.ceil(m / Et) * Et : Math.floor(m / Et) * Et), Math.max(_, Math.min(T, m));
      }, getSize: function() {
        return (!this._size || this._sizeChanged) && (this._size = new rt(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = false), this._size.clone();
      }, getPixelBounds: function(i, s) {
        var c = this._getTopLeftPoint(i, s);
        return new Y(c, c.add(this.getSize()));
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
        return Nn(i, this._container);
      }, mouseEventToLayerPoint: function(i) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i));
      }, mouseEventToLatLng: function(i) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(i));
      }, _initContainer: function(i) {
        var s = this._container = ti(i);
        if (s) {
          if (s._leaflet_id) throw new Error("Map container is already initialized.");
        } else throw new Error("Map container not found.");
        Qt(s, "scroll", this._onScroll, this), this._containerId = y(s);
      }, _initLayout: function() {
        var i = this._container;
        this._fadeAnimated = this.options.fadeAnimation && Dt.any3d, ee(i, "leaflet-container" + (Dt.touch ? " leaflet-touch" : "") + (Dt.retina ? " leaflet-retina" : "") + (Dt.ielt9 ? " leaflet-oldie" : "") + (Dt.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var s = ei(i, "position");
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
        return C(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
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
        var s = i ? Te : Qt;
        s(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && s(window, "resize", this._onResize, this), Dt.any3d && this.options.transform3DLimit && (i ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      }, _onResize: function() {
        C(this._resizeRequest), this._resizeRequest = ot(function() {
          this.invalidateSize({ debounceMoveend: true });
        }, this);
      }, _onScroll: function() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      }, _onMoveEnd: function() {
        var i = this._getMapPanePos();
        Math.max(Math.abs(i.x), Math.abs(i.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      }, _findEventTargets: function(i, s) {
        for (var c = [], m, _ = s === "mouseout" || s === "mouseover", T = i.target || i.srcElement, I = false; T; ) {
          if (m = this._targets[y(T)], m && (s === "click" || s === "preclick") && this._draggableMoved(m)) {
            I = true;
            break;
          }
          if (m && m.listens(s, true) && (_ && !tr(T, i) || (c.push(m), _)) || T === this._container) break;
          T = T.parentNode;
        }
        return !c.length && !I && !_ && this.listens(s, true) && (c = [this]), c;
      }, _isClickDisabled: function(i) {
        for (; i && i !== this._container; ) {
          if (i._leaflet_disable_click) return true;
          i = i.parentNode;
        }
      }, _handleDOMEvent: function(i) {
        var s = i.target || i.srcElement;
        if (!(!this._loaded || s._leaflet_disable_events || i.type === "click" && this._isClickDisabled(s))) {
          var c = i.type;
          c === "mousedown" && ya(s), this._fireDOMEvent(i, c);
        }
      }, _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"], _fireDOMEvent: function(i, s, c) {
        if (i.type === "click") {
          var m = f({}, i);
          m.type = "preclick", this._fireDOMEvent(m, m.type, c);
        }
        var _ = this._findEventTargets(i, s);
        if (c) {
          for (var T = [], I = 0; I < c.length; I++) c[I].listens(s, true) && T.push(c[I]);
          _ = T.concat(_);
        }
        if (_.length) {
          s === "contextmenu" && fn(i);
          var F = _[0], lt = { originalEvent: i };
          if (i.type !== "keypress" && i.type !== "keydown" && i.type !== "keyup") {
            var St = F.getLatLng && (!F._radius || F._radius <= 10);
            lt.containerPoint = St ? this.latLngToContainerPoint(F.getLatLng()) : this.mouseEventToContainerPoint(i), lt.layerPoint = this.containerPointToLayerPoint(lt.containerPoint), lt.latlng = St ? F.getLatLng() : this.layerPointToLatLng(lt.layerPoint);
          }
          for (I = 0; I < _.length; I++) if (_[I].fire(s, lt, true), lt.originalEvent._stopped || _[I].options.bubblingMouseEvents === false && N(this._mouseEvents, s) !== -1) return;
        }
      }, _draggableMoved: function(i) {
        return i = i.dragging && i.dragging.enabled() ? i : this, i.dragging && i.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      }, _clearHandlers: function() {
        for (var i = 0, s = this._handlers.length; i < s; i++) this._handlers[i].disable();
      }, whenReady: function(i, s) {
        return this._loaded ? i.call(s || this, { target: this }) : this.on("load", i, s), this;
      }, _getMapPanePos: function() {
        return Eo(this._mapPane) || new rt(0, 0);
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
        var m = this.project(i, s), _ = this.getSize().divideBy(2), T = new Y(m.subtract(_), m.add(_)), I = this._getBoundsOffset(T, c, s);
        return Math.abs(I.x) <= 1 && Math.abs(I.y) <= 1 ? i : this.unproject(m.add(I), s);
      }, _limitOffset: function(i, s) {
        if (!s) return i;
        var c = this.getPixelBounds(), m = new Y(c.min.add(i), c.max.add(i));
        return i.add(this._getBoundsOffset(m, s));
      }, _getBoundsOffset: function(i, s, c) {
        var m = ft(this.project(s.getNorthEast(), c), this.project(s.getSouthWest(), c)), _ = m.min.subtract(i.min), T = m.max.subtract(i.max), I = this._rebound(_.x, -T.x), F = this._rebound(_.y, -T.y);
        return new rt(I, F);
      }, _rebound: function(i, s) {
        return i + s > 0 ? Math.round(i - s) / 2 : Math.max(0, Math.ceil(i)) - Math.max(0, Math.floor(s));
      }, _limitZoom: function(i) {
        var s = this.getMinZoom(), c = this.getMaxZoom(), m = Dt.any3d ? this.options.zoomSnap : 1;
        return m && (i = Math.round(i / m) * m), Math.max(s, Math.min(c, i));
      }, _onPanTransitionStep: function() {
        this.fire("move");
      }, _onPanTransitionEnd: function() {
        Xe(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      }, _tryAnimatedPan: function(i, s) {
        var c = this._getCenterOffset(i)._trunc();
        return (s && s.animate) !== true && !this.getSize().contains(c) ? false : (this.panBy(c, s), true);
      }, _createAnimProxy: function() {
        var i = this._proxy = Se("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(i), this.on("zoomanim", function(s) {
          var c = wo, m = this._proxy.style[c];
          gi(this._proxy, this.project(s.center, s.zoom), this.getZoomScale(s.zoom, 1)), m === this._proxy.style[c] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      }, _destroyAnimProxy: function() {
        Fe(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
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
        this._animatingZoom && (this._mapPane && Xe(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = false, this._move(this._animateToCenter, this._animateToZoom, void 0, true), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(true));
      } });
      function xa(i, s) {
        return new pe(i, s);
      }
      var Vn = W.extend({ options: { position: "topright" }, initialize: function(i) {
        M(this, i);
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
        return this._map ? (Fe(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      }, _refocusOnMap: function(i) {
        this._map && i && i.screenX > 0 && i.screenY > 0 && this._map.getContainer().focus();
      } }), Pr = function(i) {
        return new Vn(i);
      };
      pe.include({ addControl: function(i) {
        return i.addTo(this), this;
      }, removeControl: function(i) {
        return i.remove(), this;
      }, _initControlPos: function() {
        var i = this._controlCorners = {}, s = "leaflet-", c = this._controlContainer = Se("div", s + "control-container", this._container);
        function m(_, T) {
          var I = s + _ + " " + s + T;
          i[_ + T] = Se("div", I, c);
        }
        m("top", "left"), m("top", "right"), m("bottom", "left"), m("bottom", "right");
      }, _clearControlPos: function() {
        for (var i in this._controlCorners) Fe(this._controlCorners[i]);
        Fe(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      } });
      var $u = Vn.extend({ options: { collapsed: true, position: "topright", autoZIndex: true, hideSingleBase: false, sortLayers: false, sortFunction: function(i, s, c, m) {
        return c < m ? -1 : m < c ? 1 : 0;
      } }, initialize: function(i, s, c) {
        M(this, c), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = false, this._preventClick = false;
        for (var m in i) this._addLayer(i[m], m);
        for (m in s) this._addLayer(s[m], m, true);
      }, onAdd: function(i) {
        this._initLayout(), this._update(), this._map = i, i.on("zoomend", this._checkDisabledLayers, this);
        for (var s = 0; s < this._layers.length; s++) this._layers[s].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      }, addTo: function(i) {
        return Vn.prototype.addTo.call(this, i), this._expandIfNotCollapsed();
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
        return i < this._section.clientHeight ? (ee(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = i + "px") : Xe(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      }, collapse: function() {
        return Xe(this._container, "leaflet-control-layers-expanded"), this;
      }, _initLayout: function() {
        var i = "leaflet-control-layers", s = this._container = Se("div", i), c = this.options.collapsed;
        s.setAttribute("aria-haspopup", true), Lr(s), Rr(s);
        var m = this._section = Se("section", i + "-list");
        c && (this._map.on("click", this.collapse, this), Qt(s, { mouseenter: this._expandSafely, mouseleave: this.collapse }, this));
        var _ = this._layersLink = Se("a", i + "-toggle", s);
        _.href = "#", _.title = "Layers", _.setAttribute("role", "button"), Qt(_, { keydown: function(T) {
          T.keyCode === 13 && this._expandSafely();
        }, click: function(T) {
          fn(T), this._expandSafely();
        } }, this), c || this.expand(), this._baseLayersList = Se("div", i + "-base", m), this._separator = Se("div", i + "-separator", m), this._overlaysList = Se("div", i + "-overlays", m), s.appendChild(m);
      }, _getLayer: function(i) {
        for (var s = 0; s < this._layers.length; s++) if (this._layers[s] && y(this._layers[s].layer) === i) return this._layers[s];
      }, _addLayer: function(i, s, c) {
        this._map && i.on("add remove", this._onLayerChange, this), this._layers.push({ layer: i, name: s, overlay: c }), this.options.sortLayers && this._layers.sort(g(function(m, _) {
          return this.options.sortFunction(m.layer, _.layer, m.name, _.name);
        }, this)), this.options.autoZIndex && i.setZIndex && (this._lastZIndex++, i.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      }, _update: function() {
        if (!this._container) return this;
        Bn(this._baseLayersList), Bn(this._overlaysList), this._layerControlInputs = [];
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
        var T = document.createElement("span");
        s.appendChild(T), T.appendChild(m), T.appendChild(_);
        var I = i.overlay ? this._overlaysList : this._baseLayersList;
        return I.appendChild(s), this._checkDisabledLayers(), s;
      }, _onInputClick: function() {
        if (!this._preventClick) {
          var i = this._layerControlInputs, s, c, m = [], _ = [];
          this._handlingClick = true;
          for (var T = i.length - 1; T >= 0; T--) s = i[T], c = this._getLayer(s.layerId).layer, s.checked ? m.push(c) : s.checked || _.push(c);
          for (T = 0; T < _.length; T++) this._map.hasLayer(_[T]) && this._map.removeLayer(_[T]);
          for (T = 0; T < m.length; T++) this._map.hasLayer(m[T]) || this._map.addLayer(m[T]);
          this._handlingClick = false, this._refocusOnMap();
        }
      }, _checkDisabledLayers: function() {
        for (var i = this._layerControlInputs, s, c, m = this._map.getZoom(), _ = i.length - 1; _ >= 0; _--) s = i[_], c = this._getLayer(s.layerId).layer, s.disabled = c.options.minZoom !== void 0 && m < c.options.minZoom || c.options.maxZoom !== void 0 && m > c.options.maxZoom;
      }, _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      }, _expandSafely: function() {
        var i = this._section;
        this._preventClick = true, Qt(i, "click", fn), this.expand();
        var s = this;
        setTimeout(function() {
          Te(i, "click", fn), s._preventClick = false;
        });
      } }), Xf = function(i, s, c) {
        return new $u(i, s, c);
      }, ll = Vn.extend({ options: { position: "topleft", zoomInText: '<span aria-hidden="true">+</span>', zoomInTitle: "Zoom in", zoomOutText: '<span aria-hidden="true">&#x2212;</span>', zoomOutTitle: "Zoom out" }, onAdd: function(i) {
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
        var T = Se("a", c, m);
        return T.innerHTML = i, T.href = "#", T.title = s, T.setAttribute("role", "button"), T.setAttribute("aria-label", s), Lr(T), Qt(T, "click", Yi), Qt(T, "click", _, this), Qt(T, "click", this._refocusOnMap, this), T;
      }, _updateDisabled: function() {
        var i = this._map, s = "leaflet-disabled";
        Xe(this._zoomInButton, s), Xe(this._zoomOutButton, s), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || i._zoom === i.getMinZoom()) && (ee(this._zoomOutButton, s), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || i._zoom === i.getMaxZoom()) && (ee(this._zoomInButton, s), this._zoomInButton.setAttribute("aria-disabled", "true"));
      } });
      pe.mergeOptions({ zoomControl: true }), pe.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new ll(), this.addControl(this.zoomControl));
      });
      var ul = function(i) {
        return new ll(i);
      }, Iu = Vn.extend({ options: { position: "bottomleft", maxWidth: 100, metric: true, imperial: true }, onAdd: function(i) {
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
      } }), Kf = function(i) {
        return new Iu(i);
      }, Wf = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', cl = Vn.extend({ options: { position: "bottomright", prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (Dt.inlineSvg ? Wf + " " : "") + "Leaflet</a>" }, initialize: function(i) {
        M(this, i), this._attributions = {};
      }, onAdd: function(i) {
        i.attributionControl = this, this._container = Se("div", "leaflet-control-attribution"), Lr(this._container);
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
      var Qf = function(i) {
        return new cl(i);
      };
      Vn.Layers = $u, Vn.Zoom = ll, Vn.Scale = Iu, Vn.Attribution = cl, Pr.layers = Xf, Pr.zoom = ul, Pr.scale = Kf, Pr.attribution = Qf;
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
      var Jf = { Events: B }, Hu = Dt.touch ? "touchstart mousedown" : "mousedown", Mo = tt.extend({ options: { clickTolerance: 3 }, initialize: function(i, s, c, m) {
        M(this, m), this._element = i, this._dragStartTarget = s || i, this._preventOutline = c;
      }, enable: function() {
        this._enabled || (Qt(this._dragStartTarget, Hu, this._onDown, this), this._enabled = true);
      }, disable: function() {
        this._enabled && (Mo._dragging === this && this.finishDrag(true), Te(this._dragStartTarget, Hu, this._onDown, this), this._enabled = false, this._moved = false);
      }, _onDown: function(i) {
        if (this._enabled && (this._moved = false, !wr(this._element, "leaflet-zoom-anim"))) {
          if (i.touches && i.touches.length !== 1) {
            Mo._dragging === this && this.finishDrag();
            return;
          }
          if (!(Mo._dragging || i.shiftKey || i.which !== 1 && i.button !== 1 && !i.touches) && (Mo._dragging = this, this._preventOutline && ya(this._element), va(), qi(), !this._moving)) {
            this.fire("down");
            var s = i.touches ? i.touches[0] : i, c = Wo(this._element);
            this._startPoint = new rt(s.clientX, s.clientY), this._startPos = Eo(this._element), this._parentScale = Oo(c);
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
          !c.x && !c.y || Math.abs(c.x) + Math.abs(c.y) < this.options.clickTolerance || (c.x /= this._parentScale.x, c.y /= this._parentScale.y, fn(i), this._moved || (this.fire("dragstart"), this._moved = true, ee(document.body, "leaflet-dragging"), this._lastTarget = i.target || i.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), ee(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(c), this._moving = true, this._lastEvent = i, this._updatePosition());
        }
      }, _updatePosition: function() {
        var i = { originalEvent: this._lastEvent };
        this.fire("predrag", i), sn(this._element, this._newPos), this.fire("drag", i);
      }, _onUp: function() {
        this._enabled && this.finishDrag();
      }, finishDrag: function(i) {
        Xe(document.body, "leaflet-dragging"), this._lastTarget && (Xe(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), Te(document, "mousemove touchmove", this._onMove, this), Te(document, "mouseup touchend touchcancel", this._onUp, this), al(), ga();
        var s = this._moved && this._moving;
        this._moving = false, Mo._dragging = false, s && this.fire("dragend", { noInertia: i, distance: this._newPos.distanceTo(this._startPos) });
      } });
      function ju(i, s, c) {
        var m, _ = [1, 4, 2, 8], T, I, F, lt, St, Et, Lt, Nt;
        for (T = 0, Et = i.length; T < Et; T++) i[T]._code = er(i[T], s);
        for (F = 0; F < 4; F++) {
          for (Lt = _[F], m = [], T = 0, Et = i.length, I = Et - 1; T < Et; I = T++) lt = i[T], St = i[I], lt._code & Lt ? St._code & Lt || (Nt = os(St, lt, Lt, s, c), Nt._code = er(Nt, s), m.push(Nt)) : (St._code & Lt && (Nt = os(St, lt, Lt, s, c), Nt._code = er(Nt, s), m.push(Nt)), m.push(lt));
          i = m;
        }
        return i;
      }
      function is(i, s) {
        var c, m, _, T, I, F, lt, St, Et;
        if (!i || i.length === 0) throw new Error("latlngs not passed");
        Mn(i) || (console.warn("latlngs are not flat! Only the first ring will be used"), i = i[0]);
        var Lt = ct([0, 0]), Nt = bt(i), Kt = Nt.getNorthWest().distanceTo(Nt.getSouthWest()) * Nt.getNorthEast().distanceTo(Nt.getNorthWest());
        Kt < 1700 && (Lt = fl(i));
        var Ke = i.length, ln = [];
        for (c = 0; c < Ke; c++) {
          var An = ct(i[c]);
          ln.push(s.project(ct([An.lat - Lt.lat, An.lng - Lt.lng])));
        }
        for (F = lt = St = 0, c = 0, m = Ke - 1; c < Ke; m = c++) _ = ln[c], T = ln[m], I = _.y * T.x - T.y * _.x, lt += (_.x + T.x) * I, St += (_.y + T.y) * I, F += I * 3;
        F === 0 ? Et = ln[0] : Et = [lt / F, St / F];
        var vi = s.unproject(z(Et));
        return ct([vi.lat + Lt.lat, vi.lng + Lt.lng]);
      }
      function fl(i) {
        for (var s = 0, c = 0, m = 0, _ = 0; _ < i.length; _++) {
          var T = ct(i[_]);
          s += T.lat, c += T.lng, m++;
        }
        return ct([s / m, c / m]);
      }
      var td = { __proto__: null, clipPolygon: ju, polygonCenter: is, centroid: fl };
      function Uu(i, s) {
        if (!s || !i.length) return i.slice();
        var c = s * s;
        return i = id(i, c), i = nd(i, c), i;
      }
      function dl(i, s, c) {
        return Math.sqrt(nr(i, s, c, true));
      }
      function ed(i, s, c) {
        return nr(i, s, c);
      }
      function nd(i, s) {
        var c = i.length, m = typeof Uint8Array < "u" ? Uint8Array : Array, _ = new m(c);
        _[0] = _[c - 1] = 1, hl(i, _, s, 0, c - 1);
        var T, I = [];
        for (T = 0; T < c; T++) _[T] && I.push(i[T]);
        return I;
      }
      function hl(i, s, c, m, _) {
        var T = 0, I, F, lt;
        for (F = m + 1; F <= _ - 1; F++) lt = nr(i[F], i[m], i[_], true), lt > T && (I = F, T = lt);
        T > c && (s[I] = 1, hl(i, s, c, m, I), hl(i, s, c, I, _));
      }
      function id(i, s) {
        for (var c = [i[0]], m = 1, _ = 0, T = i.length; m < T; m++) od(i[m], i[_]) > s && (c.push(i[m]), _ = m);
        return _ < T - 1 && c.push(i[T - 1]), c;
      }
      var Zu;
      function qu(i, s, c, m, _) {
        var T = m ? Zu : er(i, c), I = er(s, c), F, lt, St;
        for (Zu = I; ; ) {
          if (!(T | I)) return [i, s];
          if (T & I) return false;
          F = T || I, lt = os(i, s, F, c, _), St = er(lt, c), F === T ? (i = lt, T = St) : (s = lt, I = St);
        }
      }
      function os(i, s, c, m, _) {
        var T = s.x - i.x, I = s.y - i.y, F = m.min, lt = m.max, St, Et;
        return c & 8 ? (St = i.x + T * (lt.y - i.y) / I, Et = lt.y) : c & 4 ? (St = i.x + T * (F.y - i.y) / I, Et = F.y) : c & 2 ? (St = lt.x, Et = i.y + I * (lt.x - i.x) / T) : c & 1 && (St = F.x, Et = i.y + I * (F.x - i.x) / T), new rt(St, Et, _);
      }
      function er(i, s) {
        var c = 0;
        return i.x < s.min.x ? c |= 1 : i.x > s.max.x && (c |= 2), i.y < s.min.y ? c |= 4 : i.y > s.max.y && (c |= 8), c;
      }
      function od(i, s) {
        var c = s.x - i.x, m = s.y - i.y;
        return c * c + m * m;
      }
      function nr(i, s, c, m) {
        var _ = s.x, T = s.y, I = c.x - _, F = c.y - T, lt = I * I + F * F, St;
        return lt > 0 && (St = ((i.x - _) * I + (i.y - T) * F) / lt, St > 1 ? (_ = c.x, T = c.y) : St > 0 && (_ += I * St, T += F * St)), I = i.x - _, F = i.y - T, m ? I * I + F * F : new rt(_, T);
      }
      function Mn(i) {
        return !D(i[0]) || typeof i[0][0] != "object" && typeof i[0][0] < "u";
      }
      function Vu(i) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Mn(i);
      }
      function pl(i, s) {
        var c, m, _, T, I, F, lt, St;
        if (!i || i.length === 0) throw new Error("latlngs not passed");
        Mn(i) || (console.warn("latlngs are not flat! Only the first ring will be used"), i = i[0]);
        var Et = ct([0, 0]), Lt = bt(i), Nt = Lt.getNorthWest().distanceTo(Lt.getSouthWest()) * Lt.getNorthEast().distanceTo(Lt.getNorthWest());
        Nt < 1700 && (Et = fl(i));
        var Kt = i.length, Ke = [];
        for (c = 0; c < Kt; c++) {
          var ln = ct(i[c]);
          Ke.push(s.project(ct([ln.lat - Et.lat, ln.lng - Et.lng])));
        }
        for (c = 0, m = 0; c < Kt - 1; c++) m += Ke[c].distanceTo(Ke[c + 1]) / 2;
        if (m === 0) St = Ke[0];
        else for (c = 0, T = 0; c < Kt - 1; c++) if (I = Ke[c], F = Ke[c + 1], _ = I.distanceTo(F), T += _, T > m) {
          lt = (T - m) / _, St = [F.x - lt * (F.x - I.x), F.y - lt * (F.y - I.y)];
          break;
        }
        var An = s.unproject(z(St));
        return ct([An.lat + Et.lat, An.lng + Et.lng]);
      }
      var Gu = { __proto__: null, simplify: Uu, pointToSegmentDistance: dl, closestPointOnSegment: ed, clipSegment: qu, _getEdgeIntersection: os, _getBitCode: er, _sqClosestPointOnSegment: nr, isFlat: Mn, _flat: Vu, polylineCenter: pl }, rs = { project: function(i) {
        return new rt(i.lng, i.lat);
      }, unproject: function(i) {
        return new _t(i.y, i.x);
      }, bounds: new Y([-180, -90], [180, 90]) }, as = { R: 6378137, R_MINOR: 6356752314245179e-9, bounds: new Y([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]), project: function(i) {
        var s = Math.PI / 180, c = this.R, m = i.lat * s, _ = this.R_MINOR / c, T = Math.sqrt(1 - _ * _), I = T * Math.sin(m), F = Math.tan(Math.PI / 4 - m / 2) / Math.pow((1 - I) / (1 + I), T / 2);
        return m = -c * Math.log(Math.max(F, 1e-10)), new rt(i.lng * s * c, m);
      }, unproject: function(i) {
        for (var s = 180 / Math.PI, c = this.R, m = this.R_MINOR / c, _ = Math.sqrt(1 - m * m), T = Math.exp(-i.y / c), I = Math.PI / 2 - 2 * Math.atan(T), F = 0, lt = 0.1, St; F < 15 && Math.abs(lt) > 1e-7; F++) St = _ * Math.sin(I), St = Math.pow((1 - St) / (1 + St), _ / 2), lt = Math.PI / 2 - 2 * Math.atan(T * St) - I, I += lt;
        return new _t(I * s, i.x * s / c);
      } }, Yu = { __proto__: null, LonLat: rs, Mercator: as, SphericalMercator: Rt }, zr = f({}, Pt, { code: "EPSG:3395", projection: as, transformation: function() {
        var i = 0.5 / (Math.PI * as.R);
        return Wt(i, 0.5, -i, 0.5);
      }() }), Fu = f({}, Pt, { code: "EPSG:4326", projection: rs, transformation: Wt(1 / 180, 1, -1 / 180, 0.5) }), rd = f({}, At, { projection: rs, transformation: Wt(1, 0, -1, 0), scale: function(i) {
        return Math.pow(2, i);
      }, zoom: function(i) {
        return Math.log(i) / Math.LN2;
      }, distance: function(i, s) {
        var c = s.lng - i.lng, m = s.lat - i.lat;
        return Math.sqrt(c * c + m * m);
      }, infinite: true });
      At.Earth = Pt, At.EPSG3395 = zr, At.EPSG3857 = te, At.EPSG900913 = qt, At.EPSG4326 = Fu, At.Simple = rd;
      var Oi = tt.extend({ options: { pane: "overlayPane", attribution: null, bubblingMouseEvents: true }, addTo: function(i) {
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
      var ir = Oi.extend({ initialize: function(i, s) {
        M(this, s), this._layers = {};
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
        return new ir(i, s);
      }, ni = ir.extend({ addLayer: function(i) {
        return this.hasLayer(i) ? this : (i.addEventParent(this), ir.prototype.addLayer.call(this, i), this.fire("layeradd", { layer: i }));
      }, removeLayer: function(i) {
        return this.hasLayer(i) ? (i in this._layers && (i = this._layers[i]), i.removeEventParent(this), ir.prototype.removeLayer.call(this, i), this.fire("layerremove", { layer: i })) : this;
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
      } }), Sa = function(i, s) {
        return new ni(i, s);
      }, kr = W.extend({ options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: false }, initialize: function(i) {
        M(this, i);
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
        var _ = z(m), T = z(s === "shadow" && c.shadowAnchor || c.iconAnchor || _ && _.divideBy(2, true));
        i.className = "leaflet-marker-" + s + " " + (c.className || ""), T && (i.style.marginLeft = -T.x + "px", i.style.marginTop = -T.y + "px"), _ && (i.style.width = _.x + "px", i.style.height = _.y + "px");
      }, _createImg: function(i, s) {
        return s = s || document.createElement("img"), s.src = i, s;
      }, _getIconUrl: function(i) {
        return Dt.retina && this.options[i + "RetinaUrl"] || this.options[i + "Url"];
      } });
      function ss(i) {
        return new kr(i);
      }
      var Br = kr.extend({ options: { iconUrl: "marker-icon.png", iconRetinaUrl: "marker-icon-2x.png", shadowUrl: "marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28], shadowSize: [41, 41] }, _getIconUrl: function(i) {
        return typeof Br.imagePath != "string" && (Br.imagePath = this._detectIconPath()), (this.options.imagePath || Br.imagePath) + kr.prototype._getIconUrl.call(this, i);
      }, _stripUrl: function(i) {
        var s = function(c, m, _) {
          var T = m.exec(c);
          return T && T[_];
        };
        return i = s(i, /^url\((['"])?(.+)\1\)$/, 2), i && s(i, /^(.*)marker-icon\.png$/, 1);
      }, _detectIconPath: function() {
        var i = Se("div", "leaflet-default-icon-path", document.body), s = ei(i, "background-image") || ei(i, "backgroundImage");
        if (document.body.removeChild(i), s = this._stripUrl(s), s) return s;
        var c = document.querySelector('link[href$="leaflet.css"]');
        return c ? c.href.substring(0, c.href.length - 11 - 1) : "";
      } }), ml = Ei.extend({ initialize: function(i) {
        this._marker = i;
      }, addHooks: function() {
        var i = this._marker._icon;
        this._draggable || (this._draggable = new Mo(i, i, true)), this._draggable.on({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).enable(), ee(i, "leaflet-marker-draggable");
      }, removeHooks: function() {
        this._draggable.off({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).disable(), this._marker._icon && Xe(this._marker._icon, "leaflet-marker-draggable");
      }, moved: function() {
        return this._draggable && this._draggable._moved;
      }, _adjustPan: function(i) {
        var s = this._marker, c = s._map, m = this._marker.options.autoPanSpeed, _ = this._marker.options.autoPanPadding, T = Eo(s._icon), I = c.getPixelBounds(), F = c.getPixelOrigin(), lt = ft(I.min._subtract(F).add(_), I.max._subtract(F).subtract(_));
        if (!lt.contains(T)) {
          var St = z((Math.max(lt.max.x, T.x) - lt.max.x) / (I.max.x - lt.max.x) - (Math.min(lt.min.x, T.x) - lt.min.x) / (I.min.x - lt.min.x), (Math.max(lt.max.y, T.y) - lt.max.y) / (I.max.y - lt.max.y) - (Math.min(lt.min.y, T.y) - lt.min.y) / (I.min.y - lt.min.y)).multiplyBy(m);
          c.panBy(St, { animate: false }), this._draggable._newPos._add(St), this._draggable._startPos._add(St), sn(s._icon, this._draggable._newPos), this._onDrag(i), this._panRequest = ot(this._adjustPan.bind(this, i));
        }
      }, _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      }, _onPreDrag: function(i) {
        this._marker.options.autoPan && (C(this._panRequest), this._panRequest = ot(this._adjustPan.bind(this, i)));
      }, _onDrag: function(i) {
        var s = this._marker, c = s._shadow, m = Eo(s._icon), _ = s._map.layerPointToLatLng(m);
        c && sn(c, m), s._latlng = _, i.latlng = _, i.oldLatLng = this._oldLatLng, s.fire("move", i).fire("drag", i);
      }, _onDragEnd: function(i) {
        C(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", i);
      } }), Dr = Oi.extend({ options: { icon: new Br(), interactive: true, keyboard: true, title: "", alt: "Marker", zIndexOffset: 0, opacity: 1, riseOnHover: false, riseOffset: 250, pane: "markerPane", shadowPane: "shadowPane", bubblingMouseEvents: false, autoPanOnFocus: true, draggable: false, autoPan: false, autoPanPadding: [50, 50], autoPanSpeed: 10 }, initialize: function(i, s) {
        M(this, s), this._latlng = ct(i);
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
        var _ = i.icon.createShadow(this._shadow), T = false;
        _ !== this._shadow && (this._removeShadow(), T = true), _ && (ee(_, s), _.alt = ""), this._shadow = _, i.opacity < 1 && this._updateOpacity(), m && this.getPane().appendChild(this._icon), this._initInteraction(), _ && T && this.getPane(i.shadowPane).appendChild(this._shadow);
      }, _removeIcon: function() {
        this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), this.options.autoPanOnFocus && Te(this._icon, "focus", this._panOnFocus, this), Fe(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      }, _removeShadow: function() {
        this._shadow && Fe(this._shadow), this._shadow = null;
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
        this._icon && qn(this._icon, i), this._shadow && qn(this._shadow, i);
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
        return new Dr(i, s);
      }
      var ho = Oi.extend({ options: { stroke: true, color: "#3388ff", weight: 3, opacity: 1, lineCap: "round", lineJoin: "round", dashArray: null, dashOffset: null, fill: false, fillColor: null, fillOpacity: 0.2, fillRule: "evenodd", interactive: true, bubblingMouseEvents: true }, beforeAdd: function(i) {
        this._renderer = i.getRenderer(this);
      }, onAdd: function() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      }, onRemove: function() {
        this._renderer._removePath(this);
      }, redraw: function() {
        return this._map && this._renderer._updatePath(this), this;
      }, setStyle: function(i) {
        return M(this, i), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && i && Object.prototype.hasOwnProperty.call(i, "weight") && this._updateBounds()), this;
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
      } }), Ca = ho.extend({ options: { fill: true, radius: 10 }, initialize: function(i, s) {
        M(this, s), this._latlng = ct(i), this._radius = this.options.radius;
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
        return ho.prototype.setStyle.call(this, i), this.setRadius(s), this;
      }, _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      }, _updateBounds: function() {
        var i = this._radius, s = this._radiusY || i, c = this._clickTolerance(), m = [i + c, s + c];
        this._pxBounds = new Y(this._point.subtract(m), this._point.add(m));
      }, _update: function() {
        this._map && this._updatePath();
      }, _updatePath: function() {
        this._renderer._updateCircle(this);
      }, _empty: function() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      }, _containsPoint: function(i) {
        return i.distanceTo(this._point) <= this._radius + this._clickTolerance();
      } });
      function Ku(i, s) {
        return new Ca(i, s);
      }
      var vl = Ca.extend({ initialize: function(i, s, c) {
        if (typeof s == "number" && (s = f({}, c, { radius: s })), M(this, s), this._latlng = ct(i), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      }, setRadius: function(i) {
        return this._mRadius = i, this.redraw();
      }, getRadius: function() {
        return this._mRadius;
      }, getBounds: function() {
        var i = [this._radius, this._radiusY || this._radius];
        return new dt(this._map.layerPointToLatLng(this._point.subtract(i)), this._map.layerPointToLatLng(this._point.add(i)));
      }, setStyle: ho.prototype.setStyle, _project: function() {
        var i = this._latlng.lng, s = this._latlng.lat, c = this._map, m = c.options.crs;
        if (m.distance === Pt.distance) {
          var _ = Math.PI / 180, T = this._mRadius / Pt.R / _, I = c.project([s + T, i]), F = c.project([s - T, i]), lt = I.add(F).divideBy(2), St = c.unproject(lt).lat, Et = Math.acos((Math.cos(T * _) - Math.sin(s * _) * Math.sin(St * _)) / (Math.cos(s * _) * Math.cos(St * _))) / _;
          (isNaN(Et) || Et === 0) && (Et = T / Math.cos(Math.PI / 180 * s)), this._point = lt.subtract(c.getPixelOrigin()), this._radius = isNaN(Et) ? 0 : lt.x - c.project([St, i - Et]).x, this._radiusY = lt.y - I.y;
        } else {
          var Lt = m.unproject(m.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = c.latLngToLayerPoint(this._latlng), this._radius = this._point.x - c.latLngToLayerPoint(Lt).x;
        }
        this._updateBounds();
      } });
      function ad(i, s, c) {
        return new vl(i, s, c);
      }
      var po = ho.extend({ options: { smoothFactor: 1, noClip: false }, initialize: function(i, s) {
        M(this, s), this._setLatLngs(i);
      }, getLatLngs: function() {
        return this._latlngs;
      }, setLatLngs: function(i) {
        return this._setLatLngs(i), this.redraw();
      }, isEmpty: function() {
        return !this._latlngs.length;
      }, closestLayerPoint: function(i) {
        for (var s = 1 / 0, c = null, m = nr, _, T, I = 0, F = this._parts.length; I < F; I++) for (var lt = this._parts[I], St = 1, Et = lt.length; St < Et; St++) {
          _ = lt[St - 1], T = lt[St];
          var Lt = m(i, _, T, true);
          Lt < s && (s = Lt, c = m(i, _, T));
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
        return Mn(this._latlngs) ? this._latlngs : this._latlngs[0];
      }, _convertLatLngs: function(i) {
        for (var s = [], c = Mn(i), m = 0, _ = i.length; m < _; m++) c ? (s[m] = ct(i[m]), this._bounds.extend(s[m])) : s[m] = this._convertLatLngs(i[m]);
        return s;
      }, _project: function() {
        var i = new Y();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, i), this._bounds.isValid() && i.isValid() && (this._rawPxBounds = i, this._updateBounds());
      }, _updateBounds: function() {
        var i = this._clickTolerance(), s = new rt(i, i);
        this._rawPxBounds && (this._pxBounds = new Y([this._rawPxBounds.min.subtract(s), this._rawPxBounds.max.add(s)]));
      }, _projectLatlngs: function(i, s, c) {
        var m = i[0] instanceof _t, _ = i.length, T, I;
        if (m) {
          for (I = [], T = 0; T < _; T++) I[T] = this._map.latLngToLayerPoint(i[T]), c.extend(I[T]);
          s.push(I);
        } else for (T = 0; T < _; T++) this._projectLatlngs(i[T], s, c);
      }, _clipPoints: function() {
        var i = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(i))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var s = this._parts, c, m, _, T, I, F, lt;
          for (c = 0, _ = 0, T = this._rings.length; c < T; c++) for (lt = this._rings[c], m = 0, I = lt.length; m < I - 1; m++) F = qu(lt[m], lt[m + 1], i, m, true), F && (s[_] = s[_] || [], s[_].push(F[0]), (F[1] !== lt[m + 1] || m === I - 2) && (s[_].push(F[1]), _++));
        }
      }, _simplifyPoints: function() {
        for (var i = this._parts, s = this.options.smoothFactor, c = 0, m = i.length; c < m; c++) i[c] = Uu(i[c], s);
      }, _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      }, _updatePath: function() {
        this._renderer._updatePoly(this);
      }, _containsPoint: function(i, s) {
        var c, m, _, T, I, F, lt = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(i)) return false;
        for (c = 0, T = this._parts.length; c < T; c++) for (F = this._parts[c], m = 0, I = F.length, _ = I - 1; m < I; _ = m++) if (!(!s && m === 0) && dl(i, F[_], F[m]) <= lt) return true;
        return false;
      } });
      function sd(i, s) {
        return new po(i, s);
      }
      po._flat = Vu;
      var Nr = po.extend({ options: { fill: true }, isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      }, getCenter: function() {
        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
        return is(this._defaultShape(), this._map.options.crs);
      }, _convertLatLngs: function(i) {
        var s = po.prototype._convertLatLngs.call(this, i), c = s.length;
        return c >= 2 && s[0] instanceof _t && s[0].equals(s[c - 1]) && s.pop(), s;
      }, _setLatLngs: function(i) {
        po.prototype._setLatLngs.call(this, i), Mn(this._latlngs) && (this._latlngs = [this._latlngs]);
      }, _defaultShape: function() {
        return Mn(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      }, _clipPoints: function() {
        var i = this._renderer._bounds, s = this.options.weight, c = new rt(s, s);
        if (i = new Y(i.min.subtract(c), i.max.add(c)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(i))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var m = 0, _ = this._rings.length, T; m < _; m++) T = ju(this._rings[m], i, true), T.length && this._parts.push(T);
        }
      }, _updatePath: function() {
        this._renderer._updatePoly(this, true);
      }, _containsPoint: function(i) {
        var s = false, c, m, _, T, I, F, lt, St;
        if (!this._pxBounds || !this._pxBounds.contains(i)) return false;
        for (T = 0, lt = this._parts.length; T < lt; T++) for (c = this._parts[T], I = 0, St = c.length, F = St - 1; I < St; F = I++) m = c[I], _ = c[F], m.y > i.y != _.y > i.y && i.x < (_.x - m.x) * (i.y - m.y) / (_.y - m.y) + m.x && (s = !s);
        return s || po.prototype._containsPoint.call(this, i, true);
      } });
      function ii(i, s) {
        return new Nr(i, s);
      }
      var oi = ni.extend({ initialize: function(i, s) {
        M(this, s), this._layers = {}, i && this.addData(i);
      }, addData: function(i) {
        var s = D(i) ? i : i.features, c, m, _;
        if (s) {
          for (c = 0, m = s.length; c < m; c++) _ = s[c], (_.geometries || _.geometry || _.features || _.coordinates) && this.addData(_);
          return this;
        }
        var T = this.options;
        if (T.filter && !T.filter(i)) return this;
        var I = Ta(i, T);
        return I ? (I.feature = $r(i), I.defaultOptions = I.options, this.resetStyle(I), T.onEachFeature && T.onEachFeature(i, I), this.addLayer(I)) : this;
      }, resetStyle: function(i) {
        return i === void 0 ? this.eachLayer(this.resetStyle, this) : (i.options = f({}, i.defaultOptions), this._setLayerStyle(i, this.options.style), this);
      }, setStyle: function(i) {
        return this.eachLayer(function(s) {
          this._setLayerStyle(s, i);
        }, this);
      }, _setLayerStyle: function(i, s) {
        i.setStyle && (typeof s == "function" && (s = s(i.feature)), i.setStyle(s));
      } });
      function Ta(i, s) {
        var c = i.type === "Feature" ? i.geometry : i, m = c ? c.coordinates : null, _ = [], T = s && s.pointToLayer, I = s && s.coordsToLatLng || ls, F, lt, St, Et;
        if (!m && !c) return null;
        switch (c.type) {
          case "Point":
            return F = I(m), yl(T, i, F, s);
          case "MultiPoint":
            for (St = 0, Et = m.length; St < Et; St++) F = I(m[St]), _.push(yl(T, i, F, s));
            return new ni(_);
          case "LineString":
          case "MultiLineString":
            return lt = wa(m, c.type === "LineString" ? 0 : 1, I), new po(lt, s);
          case "Polygon":
          case "MultiPolygon":
            return lt = wa(m, c.type === "Polygon" ? 1 : 2, I), new Nr(lt, s);
          case "GeometryCollection":
            for (St = 0, Et = c.geometries.length; St < Et; St++) {
              var Lt = Ta({ geometry: c.geometries[St], type: "Feature", properties: i.properties }, s);
              Lt && _.push(Lt);
            }
            return new ni(_);
          case "FeatureCollection":
            for (St = 0, Et = c.features.length; St < Et; St++) {
              var Nt = Ta(c.features[St], s);
              Nt && _.push(Nt);
            }
            return new ni(_);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function yl(i, s, c, m) {
        return i ? i(s, c) : new Dr(c, m && m.markersInheritOptions && m);
      }
      function ls(i) {
        return new _t(i[1], i[0], i[2]);
      }
      function wa(i, s, c) {
        for (var m = [], _ = 0, T = i.length, I; _ < T; _++) I = s ? wa(i[_], s - 1, c) : (c || ls)(i[_]), m.push(I);
        return m;
      }
      function Ea(i, s) {
        return i = ct(i), i.alt !== void 0 ? [A(i.lng, s), A(i.lat, s), A(i.alt, s)] : [A(i.lng, s), A(i.lat, s)];
      }
      function us(i, s, c, m) {
        for (var _ = [], T = 0, I = i.length; T < I; T++) _.push(s ? us(i[T], Mn(i[T]) ? 0 : s - 1, c, m) : Ea(i[T], m));
        return !s && c && _.length > 0 && _.push(_[0].slice()), _;
      }
      function Mi(i, s) {
        return i.feature ? f({}, i.feature, { geometry: s }) : $r(s);
      }
      function $r(i) {
        return i.type === "Feature" || i.type === "FeatureCollection" ? i : { type: "Feature", properties: {}, geometry: i };
      }
      var or = { toGeoJSON: function(i) {
        return Mi(this, { type: "Point", coordinates: Ea(this.getLatLng(), i) });
      } };
      Dr.include(or), vl.include(or), Ca.include(or), po.include({ toGeoJSON: function(i) {
        var s = !Mn(this._latlngs), c = us(this._latlngs, s ? 1 : 0, false, i);
        return Mi(this, { type: (s ? "Multi" : "") + "LineString", coordinates: c });
      } }), Nr.include({ toGeoJSON: function(i) {
        var s = !Mn(this._latlngs), c = s && !Mn(this._latlngs[0]), m = us(this._latlngs, c ? 2 : s ? 1 : 0, true, i);
        return s || (m = [m]), Mi(this, { type: (c ? "Multi" : "") + "Polygon", coordinates: m });
      } }), ir.include({ toMultiPoint: function(i) {
        var s = [];
        return this.eachLayer(function(c) {
          s.push(c.toGeoJSON(i).geometry.coordinates);
        }), Mi(this, { type: "MultiPoint", coordinates: s });
      }, toGeoJSON: function(i) {
        var s = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (s === "MultiPoint") return this.toMultiPoint(i);
        var c = s === "GeometryCollection", m = [];
        return this.eachLayer(function(_) {
          if (_.toGeoJSON) {
            var T = _.toGeoJSON(i);
            if (c) m.push(T.geometry);
            else {
              var I = $r(T);
              I.type === "FeatureCollection" ? m.push.apply(m, I.features) : m.push(I);
            }
          }
        }), c ? Mi(this, { geometries: m, type: "GeometryCollection" }) : { type: "FeatureCollection", features: m };
      } });
      function cs(i, s) {
        return new oi(i, s);
      }
      var Wu = cs, Fi = Oi.extend({ options: { opacity: 1, alt: "", interactive: false, crossOrigin: false, errorOverlayUrl: "", zIndex: 1, className: "" }, initialize: function(i, s, c) {
        this._url = i, this._bounds = bt(s), M(this, c);
      }, onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (ee(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      }, onRemove: function() {
        Fe(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      }, setOpacity: function(i) {
        return this.options.opacity = i, this._image && this._updateOpacity(), this;
      }, setStyle: function(i) {
        return i.opacity && this.setOpacity(i.opacity), this;
      }, bringToFront: function() {
        return this._map && Ko(this._image), this;
      }, bringToBack: function() {
        return this._map && Tr(this._image), this;
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
        if (ee(s, "leaflet-image-layer"), this._zoomAnimated && ee(s, "leaflet-zoom-animated"), this.options.className && ee(s, this.options.className), s.onselectstart = w, s.onmousemove = w, s.onload = g(this.fire, this, "load"), s.onerror = g(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (s.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), i) {
          this._url = s.src;
          return;
        }
        s.src = this._url, s.alt = this.options.alt;
      }, _animateZoom: function(i) {
        var s = this._map.getZoomScale(i.zoom), c = this._map._latLngBoundsToNewLayerBounds(this._bounds, i.zoom, i.center).min;
        gi(this._image, c, s);
      }, _reset: function() {
        var i = this._image, s = new Y(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())), c = s.getSize();
        sn(i, s.min), i.style.width = c.x + "px", i.style.height = c.y + "px";
      }, _updateOpacity: function() {
        qn(this._image, this.options.opacity);
      }, _updateZIndex: function() {
        this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
      }, _overlayOnError: function() {
        this.fire("error");
        var i = this.options.errorOverlayUrl;
        i && this._url !== i && (this._url = i, this._image.src = i);
      }, getCenter: function() {
        return this._bounds.getCenter();
      } }), Ir = function(i, s, c) {
        return new Fi(i, s, c);
      }, fs = Fi.extend({ options: { autoplay: true, loop: true, keepAspectRatio: true, muted: false, playsInline: true }, _initImage: function() {
        var i = this._url.tagName === "VIDEO", s = this._image = i ? this._url : Se("video");
        if (ee(s, "leaflet-image-layer"), this._zoomAnimated && ee(s, "leaflet-zoom-animated"), this.options.className && ee(s, this.options.className), s.onselectstart = w, s.onmousemove = w, s.onloadeddata = g(this.fire, this, "load"), i) {
          for (var c = s.getElementsByTagName("source"), m = [], _ = 0; _ < c.length; _++) m.push(c[_].src);
          this._url = c.length > 0 ? m : [s.src];
          return;
        }
        D(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(s.style, "objectFit") && (s.style.objectFit = "fill"), s.autoplay = !!this.options.autoplay, s.loop = !!this.options.loop, s.muted = !!this.options.muted, s.playsInline = !!this.options.playsInline;
        for (var T = 0; T < this._url.length; T++) {
          var I = Se("source");
          I.src = this._url[T], s.appendChild(I);
        }
      } });
      function Qu(i, s, c) {
        return new fs(i, s, c);
      }
      var Ao = Fi.extend({ _initImage: function() {
        var i = this._image = this._url;
        ee(i, "leaflet-image-layer"), this._zoomAnimated && ee(i, "leaflet-zoom-animated"), this.options.className && ee(i, this.options.className), i.onselectstart = w, i.onmousemove = w;
      } });
      function Ju(i, s, c) {
        return new Ao(i, s, c);
      }
      var Ai = Oi.extend({ options: { interactive: false, offset: [0, 0], className: "", pane: void 0, content: "" }, initialize: function(i, s) {
        i && (i instanceof _t || D(i)) ? (this._latlng = ct(i), M(this, s)) : (M(this, i), this._source = s), this.options.content && (this._content = this.options.content);
      }, openOn: function(i) {
        return i = arguments.length ? i : this._source._map, i.hasLayer(this) || i.addLayer(this), this;
      }, close: function() {
        return this._map && this._map.removeLayer(this), this;
      }, toggle: function(i) {
        return this._map ? this.close() : (arguments.length ? this._source = i : i = this._source, this._prepareOpen(), this.openOn(i._map)), this;
      }, onAdd: function(i) {
        this._zoomAnimated = i._zoomAnimated, this._container || this._initLayout(), i._fadeAnimated && qn(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), i._fadeAnimated && qn(this._container, 1), this.bringToFront(), this.options.interactive && (ee(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      }, onRemove: function(i) {
        i._fadeAnimated ? (qn(this._container, 0), this._removeTimeout = setTimeout(g(Fe, void 0, this._container), 200)) : Fe(this._container), this.options.interactive && (Xe(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
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
        return this._map && Ko(this._container), this;
      }, bringToBack: function() {
        return this._map && Tr(this._container), this;
      }, _prepareOpen: function(i) {
        var s = this._source;
        if (!s._map) return false;
        if (s instanceof ni) {
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
      } }), Oi.include({ _initOverlay: function(i, s, c, m) {
        var _ = c;
        return _ instanceof i ? (M(_, m), _._source = this) : (_ = s && !m ? s : new i(m, this), _.setContent(c)), _;
      } });
      var Oa = Ai.extend({ options: { pane: "popupPane", offset: [0, 7], maxWidth: 300, minWidth: 50, maxHeight: null, autoPan: true, autoPanPaddingTopLeft: null, autoPanPaddingBottomRight: null, autoPanPadding: [5, 5], keepInView: false, closeButton: true, autoClose: true, closeOnEscapeKey: true, className: "" }, openOn: function(i) {
        return i = arguments.length ? i : this._source._map, !i.hasLayer(this) && i._popup && i._popup.options.autoClose && i.removeLayer(i._popup), i._popup = this, Ai.prototype.openOn.call(this, i);
      }, onAdd: function(i) {
        Ai.prototype.onAdd.call(this, i), i.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, true), this._source instanceof ho || this._source.on("preclick", fo));
      }, onRemove: function(i) {
        Ai.prototype.onRemove.call(this, i), i.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, true), this._source instanceof ho || this._source.off("preclick", fo));
      }, getEvents: function() {
        var i = Ai.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (i.preclick = this.close), this.options.keepInView && (i.moveend = this._adjustPan), i;
      }, _initLayout: function() {
        var i = "leaflet-popup", s = this._container = Se("div", i + " " + (this.options.className || "") + " leaflet-zoom-animated"), c = this._wrapper = Se("div", i + "-content-wrapper", s);
        if (this._contentNode = Se("div", i + "-content", c), Lr(s), Rr(this._contentNode), Qt(s, "contextmenu", fo), this._tipContainer = Se("div", i + "-tip-container", s), this._tip = Se("div", i + "-tip", this._tipContainer), this.options.closeButton) {
          var m = this._closeButton = Se("a", i + "-close-button", s);
          m.setAttribute("role", "button"), m.setAttribute("aria-label", "Close popup"), m.href = "#close", m.innerHTML = '<span aria-hidden="true">&#215;</span>', Qt(m, "click", function(_) {
            fn(_), this.close();
          }, this);
        }
      }, _updateLayout: function() {
        var i = this._contentNode, s = i.style;
        s.width = "", s.whiteSpace = "nowrap";
        var c = i.offsetWidth;
        c = Math.min(c, this.options.maxWidth), c = Math.max(c, this.options.minWidth), s.width = c + 1 + "px", s.whiteSpace = "", s.height = "";
        var m = i.offsetHeight, _ = this.options.maxHeight, T = "leaflet-popup-scrolled";
        _ && m > _ ? (s.height = _ + "px", ee(i, T)) : Xe(i, T), this._containerWidth = this._container.offsetWidth;
      }, _animateZoom: function(i) {
        var s = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center), c = this._getAnchor();
        sn(this._container, s.add(c));
      }, _adjustPan: function() {
        if (this.options.autoPan) {
          if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
            this._autopanning = false;
            return;
          }
          var i = this._map, s = parseInt(ei(this._container, "marginBottom"), 10) || 0, c = this._container.offsetHeight + s, m = this._containerWidth, _ = new rt(this._containerLeft, -c - this._containerBottom);
          _._add(Eo(this._container));
          var T = i.layerPointToContainerPoint(_), I = z(this.options.autoPanPadding), F = z(this.options.autoPanPaddingTopLeft || I), lt = z(this.options.autoPanPaddingBottomRight || I), St = i.getSize(), Et = 0, Lt = 0;
          T.x + m + lt.x > St.x && (Et = T.x + m - St.x + lt.x), T.x - Et - F.x < 0 && (Et = T.x - F.x), T.y + c + lt.y > St.y && (Lt = T.y + c - St.y + lt.y), T.y - Lt - F.y < 0 && (Lt = T.y - F.y), (Et || Lt) && (this.options.keepInView && (this._autopanning = true), i.fire("autopanstart").panBy([Et, Lt]));
        }
      }, _getAnchor: function() {
        return z(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      } }), ld = function(i, s) {
        return new Oa(i, s);
      };
      pe.mergeOptions({ closePopupOnClick: true }), pe.include({ openPopup: function(i, s, c) {
        return this._initOverlay(Oa, i, s, c).openOn(this), this;
      }, closePopup: function(i) {
        return i = arguments.length ? i : this._popup, i && i.close(), this;
      } }), Oi.include({ bindPopup: function(i, s) {
        return this._popup = this._initOverlay(Oa, this._popup, i, s), this._popupHandlersAdded || (this.on({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = true), this;
      }, unbindPopup: function() {
        return this._popup && (this.off({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = false, this._popup = null), this;
      }, openPopup: function(i) {
        return this._popup && (this instanceof ni || (this._popup._source = this), this._popup._prepareOpen(i || this._latlng) && this._popup.openOn(this._map)), this;
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
          if (this._popup._source === s && !(s instanceof ho)) {
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
      var ds = Ai.extend({ options: { pane: "tooltipPane", offset: [0, 0], direction: "auto", permanent: false, sticky: false, opacity: 0.9 }, onAdd: function(i) {
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
        var s, c, m = this._map, _ = this._container, T = m.latLngToContainerPoint(m.getCenter()), I = m.layerPointToContainerPoint(i), F = this.options.direction, lt = _.offsetWidth, St = _.offsetHeight, Et = z(this.options.offset), Lt = this._getAnchor();
        F === "top" ? (s = lt / 2, c = St) : F === "bottom" ? (s = lt / 2, c = 0) : F === "center" ? (s = lt / 2, c = St / 2) : F === "right" ? (s = 0, c = St / 2) : F === "left" ? (s = lt, c = St / 2) : I.x < T.x ? (F = "right", s = 0, c = St / 2) : (F = "left", s = lt + (Et.x + Lt.x) * 2, c = St / 2), i = i.subtract(z(s, c, true)).add(Et).add(Lt), Xe(_, "leaflet-tooltip-right"), Xe(_, "leaflet-tooltip-left"), Xe(_, "leaflet-tooltip-top"), Xe(_, "leaflet-tooltip-bottom"), ee(_, "leaflet-tooltip-" + F), sn(_, i);
      }, _updatePosition: function() {
        var i = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(i);
      }, setOpacity: function(i) {
        this.options.opacity = i, this._container && qn(this._container, i);
      }, _animateZoom: function(i) {
        var s = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center);
        this._setPosition(s);
      }, _getAnchor: function() {
        return z(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      } }), ud = function(i, s) {
        return new ds(i, s);
      };
      pe.include({ openTooltip: function(i, s, c) {
        return this._initOverlay(ds, i, s, c).openOn(this), this;
      }, closeTooltip: function(i) {
        return i.close(), this;
      } }), Oi.include({ bindTooltip: function(i, s) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(ds, this._tooltip, i, s), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      }, unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(true), this.closeTooltip(), this._tooltip = null), this;
      }, _initTooltipInteractions: function(i) {
        if (!(!i && this._tooltipHandlersAdded)) {
          var s = i ? "off" : "on", c = { remove: this.closeTooltip, move: this._moveTooltip };
          this._tooltip.options.permanent ? c.add = this._openTooltip : (c.mouseover = this._openTooltip, c.mouseout = this.closeTooltip, c.click = this._openTooltip, this._map ? this._addFocusListeners() : c.add = this._addFocusListeners), this._tooltip.options.sticky && (c.mousemove = this._moveTooltip), this[s](c), this._tooltipHandlersAdded = !i;
        }
      }, openTooltip: function(i) {
        return this._tooltip && (this instanceof ni || (this._tooltip._source = this), this._tooltip._prepareOpen(i) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
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
      var _l = kr.extend({ options: { iconSize: [12, 12], html: false, bgPos: null, className: "leaflet-div-icon" }, createIcon: function(i) {
        var s = i && i.tagName === "DIV" ? i : document.createElement("div"), c = this.options;
        if (c.html instanceof Element ? (Bn(s), s.appendChild(c.html)) : s.innerHTML = c.html !== false ? c.html : "", c.bgPos) {
          var m = z(c.bgPos);
          s.style.backgroundPosition = -m.x + "px " + -m.y + "px";
        }
        return this._setIconStyles(s, "icon"), s;
      }, createShadow: function() {
        return null;
      } });
      function tc(i) {
        return new _l(i);
      }
      kr.Default = Br;
      var rr = Oi.extend({ options: { tileSize: 256, opacity: 1, updateWhenIdle: Dt.mobile, updateWhenZooming: true, updateInterval: 200, zIndex: 1, bounds: null, minZoom: 0, maxZoom: void 0, maxNativeZoom: void 0, minNativeZoom: void 0, noWrap: false, pane: "tilePane", className: "", keepBuffer: 2 }, initialize: function(i) {
        M(this, i);
      }, onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
      }, beforeAdd: function(i) {
        i._addZoomLimit(this);
      }, onRemove: function(i) {
        this._removeAllTiles(), Fe(this._container), i._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      }, bringToFront: function() {
        return this._map && (Ko(this._container), this._setAutoZIndex(Math.max)), this;
      }, bringToBack: function() {
        return this._map && (Tr(this._container), this._setAutoZIndex(Math.min)), this;
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
        for (var s = this.getPane().children, c = -i(-1 / 0, 1 / 0), m = 0, _ = s.length, T; m < _; m++) T = s[m].style.zIndex, s[m] !== this._container && T && (c = i(c, +T));
        isFinite(c) && (this.options.zIndex = c + i(-1, 1), this._updateZIndex());
      }, _updateOpacity: function() {
        if (this._map && !Dt.ielt9) {
          qn(this._container, this.options.opacity);
          var i = +/* @__PURE__ */ new Date(), s = false, c = false;
          for (var m in this._tiles) {
            var _ = this._tiles[m];
            if (!(!_.current || !_.loaded)) {
              var T = Math.min(1, (i - _.loaded) / 200);
              qn(_.el, T), T < 1 ? s = true : (_.active ? c = true : this._onOpaqueTile(_), _.active = true);
            }
          }
          c && !this._noPrune && this._pruneTiles(), s && (C(this._fadeFrame), this._fadeFrame = ot(this._updateOpacity, this));
        }
      }, _onOpaqueTile: w, _initContainer: function() {
        this._container || (this._container = Se("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      }, _updateLevels: function() {
        var i = this._tileZoom, s = this.options.maxZoom;
        if (i !== void 0) {
          for (var c in this._levels) c = Number(c), this._levels[c].el.children.length || c === i ? (this._levels[c].el.style.zIndex = s - Math.abs(i - c), this._onUpdateLevel(c)) : (Fe(this._levels[c].el), this._removeTilesAtZoom(c), this._onRemoveLevel(c), delete this._levels[c]);
          var m = this._levels[i], _ = this._map;
          return m || (m = this._levels[i] = {}, m.el = Se("div", "leaflet-tile-container leaflet-zoom-animated", this._container), m.el.style.zIndex = s, m.origin = _.project(_.unproject(_.getPixelOrigin()), i).round(), m.zoom = i, this._setZoomTransform(m, _.getCenter(), _.getZoom()), w(m.el.offsetWidth), this._onCreateLevel(m)), this._level = m, m;
        }
      }, _onUpdateLevel: w, _onRemoveLevel: w, _onCreateLevel: w, _pruneTiles: function() {
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
        for (var i in this._levels) Fe(this._levels[i].el), this._onRemoveLevel(Number(i)), delete this._levels[i];
        this._removeAllTiles(), this._tileZoom = void 0;
      }, _retainParent: function(i, s, c, m) {
        var _ = Math.floor(i / 2), T = Math.floor(s / 2), I = c - 1, F = new rt(+_, +T);
        F.z = +I;
        var lt = this._tileCoordsToKey(F), St = this._tiles[lt];
        return St && St.active ? (St.retain = true, true) : (St && St.loaded && (St.retain = true), I > m ? this._retainParent(_, T, I, m) : false);
      }, _retainChildren: function(i, s, c, m) {
        for (var _ = 2 * i; _ < 2 * i + 2; _++) for (var T = 2 * s; T < 2 * s + 2; T++) {
          var I = new rt(_, T);
          I.z = c + 1;
          var F = this._tileCoordsToKey(I), lt = this._tiles[F];
          if (lt && lt.active) {
            lt.retain = true;
            continue;
          } else lt && lt.loaded && (lt.retain = true);
          c + 1 < m && this._retainChildren(_, T, c + 1, m);
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
        var T = this.options.updateWhenZooming && _ !== this._tileZoom;
        (!m || T) && (this._tileZoom = _, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), _ !== void 0 && this._update(i), c || this._pruneTiles(), this._noPrune = !!c), this._setZoomTransforms(i, s);
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
        var s = this._map, c = s._animatingZoom ? Math.max(s._animateToZoom, s.getZoom()) : s.getZoom(), m = s.getZoomScale(c, this._tileZoom), _ = s.project(i, this._tileZoom).floor(), T = s.getSize().divideBy(m * 2);
        return new Y(_.subtract(T), _.add(T));
      }, _update: function(i) {
        var s = this._map;
        if (s) {
          var c = this._clampZoom(s.getZoom());
          if (i === void 0 && (i = s.getCenter()), this._tileZoom !== void 0) {
            var m = this._getTiledPixelBounds(i), _ = this._pxBoundsToTileRange(m), T = _.getCenter(), I = [], F = this.options.keepBuffer, lt = new Y(_.getBottomLeft().subtract([F, -F]), _.getTopRight().add([F, -F]));
            if (!(isFinite(_.min.x) && isFinite(_.min.y) && isFinite(_.max.x) && isFinite(_.max.y))) throw new Error("Attempted to load an infinite number of tiles");
            for (var St in this._tiles) {
              var Et = this._tiles[St].coords;
              (Et.z !== this._tileZoom || !lt.contains(new rt(Et.x, Et.y))) && (this._tiles[St].current = false);
            }
            if (Math.abs(c - this._tileZoom) > 1) {
              this._setView(i, c);
              return;
            }
            for (var Lt = _.min.y; Lt <= _.max.y; Lt++) for (var Nt = _.min.x; Nt <= _.max.x; Nt++) {
              var Kt = new rt(Nt, Lt);
              if (Kt.z = this._tileZoom, !!this._isValidTile(Kt)) {
                var Ke = this._tiles[this._tileCoordsToKey(Kt)];
                Ke ? Ke.current = true : I.push(Kt);
              }
            }
            if (I.sort(function(An, vi) {
              return An.distanceTo(T) - vi.distanceTo(T);
            }), I.length !== 0) {
              this._loading || (this._loading = true, this.fire("loading"));
              var ln = document.createDocumentFragment();
              for (Nt = 0; Nt < I.length; Nt++) this._addTile(I[Nt], ln);
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
        var s = this._map, c = this.getTileSize(), m = i.scaleBy(c), _ = m.add(c), T = s.unproject(m, i.z), I = s.unproject(_, i.z);
        return [T, I];
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
        s && (Fe(s.el), delete this._tiles[i], this.fire("tileunload", { tile: s.el, coords: this._keyToTileCoords(i) }));
      }, _initTile: function(i) {
        ee(i, "leaflet-tile");
        var s = this.getTileSize();
        i.style.width = s.x + "px", i.style.height = s.y + "px", i.onselectstart = w, i.onmousemove = w, Dt.ielt9 && this.options.opacity < 1 && qn(i, this.options.opacity);
      }, _addTile: function(i, s) {
        var c = this._getTilePos(i), m = this._tileCoordsToKey(i), _ = this.createTile(this._wrapCoords(i), g(this._tileReady, this, i));
        this._initTile(_), this.createTile.length < 2 && ot(g(this._tileReady, this, i, null, _)), sn(_, c), this._tiles[m] = { el: _, coords: i, current: true }, s.appendChild(_), this.fire("tileloadstart", { tile: _, coords: i });
      }, _tileReady: function(i, s, c) {
        s && this.fire("tileerror", { error: s, tile: c, coords: i });
        var m = this._tileCoordsToKey(i);
        c = this._tiles[m], c && (c.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (qn(c.el, 0), C(this._fadeFrame), this._fadeFrame = ot(this._updateOpacity, this)) : (c.active = true, this._pruneTiles()), s || (ee(c.el, "leaflet-tile-loaded"), this.fire("tileload", { tile: c.el, coords: i })), this._noTilesToLoad() && (this._loading = false, this.fire("load"), Dt.ielt9 || !this._map._fadeAnimated ? ot(this._pruneTiles, this) : setTimeout(g(this._pruneTiles, this), 250)));
      }, _getTilePos: function(i) {
        return i.scaleBy(this.getTileSize()).subtract(this._level.origin);
      }, _wrapCoords: function(i) {
        var s = new rt(this._wrapX ? S(i.x, this._wrapX) : i.x, this._wrapY ? S(i.y, this._wrapY) : i.y);
        return s.z = i.z, s;
      }, _pxBoundsToTileRange: function(i) {
        var s = this.getTileSize();
        return new Y(i.min.unscaleBy(s).floor(), i.max.unscaleBy(s).ceil().subtract([1, 1]));
      }, _noTilesToLoad: function() {
        for (var i in this._tiles) if (!this._tiles[i].loaded) return false;
        return true;
      } });
      function Ri(i) {
        return new rr(i);
      }
      var ar = rr.extend({ options: { minZoom: 0, maxZoom: 18, subdomains: "abc", errorTileUrl: "", zoomOffset: 0, tms: false, zoomReverse: false, detectRetina: false, crossOrigin: false, referrerPolicy: false }, initialize: function(i, s) {
        this._url = i, s = M(this, s), s.detectRetina && Dt.retina && s.maxZoom > 0 ? (s.tileSize = Math.floor(s.tileSize / 2), s.zoomReverse ? (s.zoomOffset--, s.minZoom = Math.min(s.maxZoom, s.minZoom + 1)) : (s.zoomOffset++, s.maxZoom = Math.max(s.minZoom, s.maxZoom - 1)), s.minZoom = Math.max(0, s.minZoom)) : s.zoomReverse ? s.minZoom = Math.min(s.maxZoom, s.minZoom) : s.maxZoom = Math.max(s.minZoom, s.maxZoom), typeof s.subdomains == "string" && (s.subdomains = s.subdomains.split("")), this.on("tileunload", this._onTileRemove);
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
        for (i in this._tiles) if (this._tiles[i].coords.z !== this._tileZoom && (s = this._tiles[i].el, s.onload = w, s.onerror = w, !s.complete)) {
          s.src = k;
          var c = this._tiles[i].coords;
          Fe(s), delete this._tiles[i], this.fire("tileabort", { tile: s, coords: c });
        }
      }, _removeTile: function(i) {
        var s = this._tiles[i];
        if (s) return s.el.setAttribute("src", k), rr.prototype._removeTile.call(this, i);
      }, _tileReady: function(i, s, c) {
        if (!(!this._map || c && c.getAttribute("src") === k)) return rr.prototype._tileReady.call(this, i, s, c);
      } });
      function ri(i, s) {
        return new ar(i, s);
      }
      var ai = ar.extend({ defaultWmsParams: { service: "WMS", request: "GetMap", layers: "", styles: "", format: "image/jpeg", transparent: false, version: "1.1.1" }, options: { crs: null, uppercase: false }, initialize: function(i, s) {
        this._url = i;
        var c = f({}, this.defaultWmsParams);
        for (var m in s) m in this.options || (c[m] = s[m]);
        s = M(this, s);
        var _ = s.detectRetina && Dt.retina ? 2 : 1, T = this.getTileSize();
        c.width = T.x * _, c.height = T.y * _, this.wmsParams = c;
      }, onAdd: function(i) {
        this._crs = this.options.crs || i.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var s = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[s] = this._crs.code, ar.prototype.onAdd.call(this, i);
      }, getTileUrl: function(i) {
        var s = this._tileCoordsToNwSe(i), c = this._crs, m = ft(c.project(s[0]), c.project(s[1])), _ = m.min, T = m.max, I = (this._wmsVersion >= 1.3 && this._crs === Fu ? [_.y, _.x, T.y, T.x] : [_.x, _.y, T.x, T.y]).join(","), F = ar.prototype.getTileUrl.call(this, i);
        return F + $(this.wmsParams, F, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + I;
      }, setParams: function(i, s) {
        return f(this.wmsParams, i), s || this.redraw(), this;
      } });
      function Hr(i, s) {
        return new ai(i, s);
      }
      ar.WMS = ai, ri.wms = Hr;
      var Li = Oi.extend({ options: { padding: 0.1 }, initialize: function(i) {
        M(this, i), y(this), this._layers = this._layers || {};
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
        var c = this._map.getZoomScale(s, this._zoom), m = this._map.getSize().multiplyBy(0.5 + this.options.padding), _ = this._map.project(this._center, s), T = m.multiplyBy(-c).add(_).subtract(this._map._getNewPixelOrigin(i, s));
        Dt.any3d ? gi(this._container, T, c) : sn(this._container, T);
      }, _reset: function() {
        this._update(), this._updateTransform(this._center, this._zoom);
        for (var i in this._layers) this._layers[i]._reset();
      }, _onZoomEnd: function() {
        for (var i in this._layers) this._layers[i]._project();
      }, _updatePaths: function() {
        for (var i in this._layers) this._layers[i]._update();
      }, _update: function() {
        var i = this.options.padding, s = this._map.getSize(), c = this._map.containerPointToLayerPoint(s.multiplyBy(-i)).round();
        this._bounds = new Y(c, c.add(s.multiplyBy(1 + i * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      } }), Ma = Li.extend({ options: { tolerance: 0 }, getEvents: function() {
        var i = Li.prototype.getEvents.call(this);
        return i.viewprereset = this._onViewPreReset, i;
      }, _onViewPreReset: function() {
        this._postponeUpdatePaths = true;
      }, onAdd: function() {
        Li.prototype.onAdd.call(this), this._draw();
      }, _initContainer: function() {
        var i = this._container = document.createElement("canvas");
        Qt(i, "mousemove", this._onMouseMove, this), Qt(i, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Qt(i, "mouseout", this._handleMouseOut, this), i._leaflet_disable_events = true, this._ctx = i.getContext("2d");
      }, _destroyContainer: function() {
        C(this._redrawRequest), delete this._ctx, Fe(this._container), Te(this._container), delete this._container;
      }, _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          var i;
          this._redrawBounds = null;
          for (var s in this._layers) i = this._layers[s], i._update();
          this._redraw();
        }
      }, _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          Li.prototype._update.call(this);
          var i = this._bounds, s = this._container, c = i.getSize(), m = Dt.retina ? 2 : 1;
          sn(s, i.min), s.width = m * c.x, s.height = m * c.y, s.style.width = c.x + "px", s.style.height = c.y + "px", Dt.retina && this._ctx.scale(2, 2), this._ctx.translate(-i.min.x, -i.min.y), this.fire("update");
        }
      }, _reset: function() {
        Li.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = false, this._updatePaths());
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
          this._redrawBounds = this._redrawBounds || new Y(), this._redrawBounds.extend(i._pxBounds.min.subtract([s, s])), this._redrawBounds.extend(i._pxBounds.max.add([s, s]));
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
          var c, m, _, T, I = i._parts, F = I.length, lt = this._ctx;
          if (F) {
            for (lt.beginPath(), c = 0; c < F; c++) {
              for (m = 0, _ = I[c].length; m < _; m++) T = I[c][m], lt[m ? "lineTo" : "moveTo"](T.x, T.y);
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
        s && (Xe(this._container, "leaflet-interactive"), this._fireEvent([s], i, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = false);
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
      function Aa(i) {
        return Dt.canvas ? new Ma(i) : null;
      }
      var sr = function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(i) {
            return document.createElement("<lvml:" + i + ' class="lvml">');
          };
        } catch {
        }
        return function(i) {
          return document.createElement("<" + i + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      }(), jr = { _initContainer: function() {
        this._container = Se("div", "leaflet-vml-container");
      }, _update: function() {
        this._map._animatingZoom || (Li.prototype._update.call(this), this.fire("update"));
      }, _initPath: function(i) {
        var s = i._container = sr("shape");
        ee(s, "leaflet-vml-shape " + (this.options.className || "")), s.coordsize = "1 1", i._path = sr("path"), s.appendChild(i._path), this._updateStyle(i), this._layers[y(i)] = i;
      }, _addPath: function(i) {
        var s = i._container;
        this._container.appendChild(s), i.options.interactive && i.addInteractiveTarget(s);
      }, _removePath: function(i) {
        var s = i._container;
        Fe(s), i.removeInteractiveTarget(s), delete this._layers[y(i)];
      }, _updateStyle: function(i) {
        var s = i._stroke, c = i._fill, m = i.options, _ = i._container;
        _.stroked = !!m.stroke, _.filled = !!m.fill, m.stroke ? (s || (s = i._stroke = sr("stroke")), _.appendChild(s), s.weight = m.weight + "px", s.color = m.color, s.opacity = m.opacity, m.dashArray ? s.dashStyle = D(m.dashArray) ? m.dashArray.join(" ") : m.dashArray.replace(/( *, *)/g, " ") : s.dashStyle = "", s.endcap = m.lineCap.replace("butt", "flat"), s.joinstyle = m.lineJoin) : s && (_.removeChild(s), i._stroke = null), m.fill ? (c || (c = i._fill = sr("fill")), _.appendChild(c), c.color = m.fillColor || m.color, c.opacity = m.fillOpacity) : c && (_.removeChild(c), i._fill = null);
      }, _updateCircle: function(i) {
        var s = i._point.round(), c = Math.round(i._radius), m = Math.round(i._radiusY || c);
        this._setPath(i, i._empty() ? "M0 0" : "AL " + s.x + "," + s.y + " " + c + "," + m + " 0," + 65535 * 360);
      }, _setPath: function(i, s) {
        i._path.v = s;
      }, _bringToFront: function(i) {
        Ko(i._container);
      }, _bringToBack: function(i) {
        Tr(i._container);
      } }, Ra = Dt.vml ? sr : de, Ro = Li.extend({ _initContainer: function() {
        this._container = Ra("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Ra("g"), this._container.appendChild(this._rootGroup);
      }, _destroyContainer: function() {
        Fe(this._container), Te(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      }, _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          Li.prototype._update.call(this);
          var i = this._bounds, s = i.getSize(), c = this._container;
          (!this._svgSize || !this._svgSize.equals(s)) && (this._svgSize = s, c.setAttribute("width", s.x), c.setAttribute("height", s.y)), sn(c, i.min), c.setAttribute("viewBox", [i.min.x, i.min.y, s.x, s.y].join(" ")), this.fire("update");
        }
      }, _initPath: function(i) {
        var s = i._path = Ra("path");
        i.options.className && ee(s, i.options.className), i.options.interactive && ee(s, "leaflet-interactive"), this._updateStyle(i), this._layers[y(i)] = i;
      }, _addPath: function(i) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(i._path), i.addInteractiveTarget(i._path);
      }, _removePath: function(i) {
        Fe(i._path), i.removeInteractiveTarget(i._path), delete this._layers[y(i)];
      }, _updatePath: function(i) {
        i._project(), i._update();
      }, _updateStyle: function(i) {
        var s = i._path, c = i.options;
        s && (c.stroke ? (s.setAttribute("stroke", c.color), s.setAttribute("stroke-opacity", c.opacity), s.setAttribute("stroke-width", c.weight), s.setAttribute("stroke-linecap", c.lineCap), s.setAttribute("stroke-linejoin", c.lineJoin), c.dashArray ? s.setAttribute("stroke-dasharray", c.dashArray) : s.removeAttribute("stroke-dasharray"), c.dashOffset ? s.setAttribute("stroke-dashoffset", c.dashOffset) : s.removeAttribute("stroke-dashoffset")) : s.setAttribute("stroke", "none"), c.fill ? (s.setAttribute("fill", c.fillColor || c.color), s.setAttribute("fill-opacity", c.fillOpacity), s.setAttribute("fill-rule", c.fillRule || "evenodd")) : s.setAttribute("fill", "none"));
      }, _updatePoly: function(i, s) {
        this._setPath(i, ie(i._parts, s));
      }, _updateCircle: function(i) {
        var s = i._point, c = Math.max(Math.round(i._radius), 1), m = Math.max(Math.round(i._radiusY), 1) || c, _ = "a" + c + "," + m + " 0 1,0 ", T = i._empty() ? "M0 0" : "M" + (s.x - c) + "," + s.y + _ + c * 2 + ",0 " + _ + -c * 2 + ",0 ";
        this._setPath(i, T);
      }, _setPath: function(i, s) {
        i._path.setAttribute("d", s);
      }, _bringToFront: function(i) {
        Ko(i._path);
      }, _bringToBack: function(i) {
        Tr(i._path);
      } });
      Dt.vml && Ro.include(jr);
      function lr(i) {
        return Dt.svg || Dt.vml ? new Ro(i) : null;
      }
      pe.include({ getRenderer: function(i) {
        var s = i.options.renderer || this._getPaneRenderer(i.options.pane) || this.options.renderer || this._renderer;
        return s || (s = this._renderer = this._createRenderer()), this.hasLayer(s) || this.addLayer(s), s;
      }, _getPaneRenderer: function(i) {
        if (i === "overlayPane" || i === void 0) return false;
        var s = this._paneRenderers[i];
        return s === void 0 && (s = this._createRenderer({ pane: i }), this._paneRenderers[i] = s), s;
      }, _createRenderer: function(i) {
        return this.options.preferCanvas && Aa(i) || lr(i);
      } });
      var ec = Nr.extend({ initialize: function(i, s) {
        Nr.prototype.initialize.call(this, this._boundsToLatLngs(i), s);
      }, setBounds: function(i) {
        return this.setLatLngs(this._boundsToLatLngs(i));
      }, _boundsToLatLngs: function(i) {
        return i = bt(i), [i.getSouthWest(), i.getNorthWest(), i.getNorthEast(), i.getSouthEast()];
      } });
      function si(i, s) {
        return new ec(i, s);
      }
      Ro.create = Ra, Ro.pointsToPath = ie, oi.geometryToLayer = Ta, oi.coordsToLatLng = ls, oi.coordsToLatLngs = wa, oi.latLngToCoords = Ea, oi.latLngsToCoords = us, oi.getFeature = Mi, oi.asFeature = $r, pe.mergeOptions({ boxZoom: true });
      var hs = Ei.extend({ initialize: function(i) {
        this._map = i, this._container = i._container, this._pane = i._panes.overlayPane, this._resetStateTimeout = 0, i.on("unload", this._destroy, this);
      }, addHooks: function() {
        Qt(this._container, "mousedown", this._onMouseDown, this);
      }, removeHooks: function() {
        Te(this._container, "mousedown", this._onMouseDown, this);
      }, moved: function() {
        return this._moved;
      }, _destroy: function() {
        Fe(this._pane), delete this._pane;
      }, _resetState: function() {
        this._resetStateTimeout = 0, this._moved = false;
      }, _clearDeferredResetState: function() {
        this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      }, _onMouseDown: function(i) {
        if (!i.shiftKey || i.which !== 1 && i.button !== 1) return false;
        this._clearDeferredResetState(), this._resetState(), qi(), va(), this._startPoint = this._map.mouseEventToContainerPoint(i), Qt(document, { contextmenu: Yi, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
      }, _onMouseMove: function(i) {
        this._moved || (this._moved = true, this._box = Se("div", "leaflet-zoom-box", this._container), ee(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(i);
        var s = new Y(this._point, this._startPoint), c = s.getSize();
        sn(this._box, s.min), this._box.style.width = c.x + "px", this._box.style.height = c.y + "px";
      }, _finish: function() {
        this._moved && (Fe(this._box), Xe(this._container, "leaflet-crosshair")), ga(), al(), Te(document, { contextmenu: Yi, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
      }, _onMouseUp: function(i) {
        if (!(i.which !== 1 && i.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(g(this._resetState, this), 0);
          var s = new dt(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
          this._map.fitBounds(s).fire("boxzoomend", { boxZoomBounds: s });
        }
      }, _onKeyDown: function(i) {
        i.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      } });
      pe.addInitHook("addHandler", "boxZoom", hs), pe.mergeOptions({ doubleClickZoom: true });
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
          this._draggable = new Mo(i._mapPane, i._container), this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this), this._draggable.on("predrag", this._onPreDragLimit, this), i.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), i.on("zoomend", this._onZoomEnd, this), i.whenReady(this._onZoomEnd, this));
        }
        ee(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      }, removeHooks: function() {
        Xe(this._map._container, "leaflet-grab"), Xe(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
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
        var i = this._worldWidth, s = Math.round(i / 2), c = this._initialWorldOffset, m = this._draggable._newPos.x, _ = (m - s + c) % i + s - c, T = (m + s + c) % i - s - c, I = Math.abs(_ + c) < Math.abs(T + c) ? _ : T;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = I;
      }, _onDragEnd: function(i) {
        var s = this._map, c = s.options, m = !c.inertia || i.noInertia || this._times.length < 2;
        if (s.fire("dragend", i), m) s.fire("moveend");
        else {
          this._prunePositions(+/* @__PURE__ */ new Date());
          var _ = this._lastPos.subtract(this._positions[0]), T = (this._lastTime - this._times[0]) / 1e3, I = c.easeLinearity, F = _.multiplyBy(I / T), lt = F.distanceTo([0, 0]), St = Math.min(c.inertiaMaxSpeed, lt), Et = F.multiplyBy(St / lt), Lt = St / (c.inertiaDeceleration * I), Nt = Et.multiplyBy(-Lt / 2).round();
          !Nt.x && !Nt.y ? s.fire("moveend") : (Nt = s._limitOffset(Nt, s.options.maxBounds), ot(function() {
            s.panBy(Nt, { duration: Lt, easeLinearity: I, noMoveStart: true, animate: true });
          }));
        }
      } });
      pe.addInitHook("addHandler", "dragging", bl), pe.mergeOptions({ keyboard: true, keyboardPanDelta: 80 });
      var La = Ei.extend({ keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 54, 173] }, initialize: function(i) {
        this._map = i, this._setPanDelta(i.options.keyboardPanDelta), this._setZoomDelta(i.options.zoomDelta);
      }, addHooks: function() {
        var i = this._map._container;
        i.tabIndex <= 0 && (i.tabIndex = "0"), Qt(i, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
      }, removeHooks: function() {
        this._removeHooks(), Te(this._map._container, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
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
        Te(document, "keydown", this._onKeyDown, this);
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
      pe.addInitHook("addHandler", "keyboard", La), pe.mergeOptions({ scrollWheelZoom: true, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 });
      var Lo = Ei.extend({ addHooks: function() {
        Qt(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      }, removeHooks: function() {
        Te(this._map._container, "wheel", this._onWheelScroll, this);
      }, _onWheelScroll: function(i) {
        var s = ba(i), c = this._map.options.wheelDebounceTime;
        this._delta += s, this._lastMousePos = this._map.mouseEventToContainerPoint(i), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
        var m = Math.max(c - (+/* @__PURE__ */ new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(g(this._performZoom, this), m), Yi(i);
      }, _performZoom: function() {
        var i = this._map, s = i.getZoom(), c = this._map.options.zoomSnap || 0;
        i._stop();
        var m = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), _ = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(m)))) / Math.LN2, T = c ? Math.ceil(_ / c) * c : _, I = i._limitZoom(s + (this._delta > 0 ? T : -T)) - s;
        this._delta = 0, this._startTime = null, I && (i.options.scrollWheelZoom === "center" ? i.setZoom(s + I) : i.setZoomAround(this._lastMousePos, s + I));
      } });
      pe.addInitHook("addHandler", "scrollWheelZoom", Lo);
      var xl = 600;
      pe.mergeOptions({ tapHold: Dt.touchNative && Dt.safari && Dt.mobile, tapTolerance: 15 });
      var ps = Ei.extend({ addHooks: function() {
        Qt(this._map._container, "touchstart", this._onDown, this);
      }, removeHooks: function() {
        Te(this._map._container, "touchstart", this._onDown, this);
      }, _onDown: function(i) {
        if (clearTimeout(this._holdTimeout), i.touches.length === 1) {
          var s = i.touches[0];
          this._startPos = this._newPos = new rt(s.clientX, s.clientY), this._holdTimeout = setTimeout(g(function() {
            this._cancel(), this._isTapValid() && (Qt(document, "touchend", fn), Qt(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", s));
          }, this), xl), Qt(document, "touchend touchcancel contextmenu", this._cancel, this), Qt(document, "touchmove", this._onMove, this);
        }
      }, _cancelClickPrevent: function i() {
        Te(document, "touchend", fn), Te(document, "touchend touchcancel", i);
      }, _cancel: function() {
        clearTimeout(this._holdTimeout), Te(document, "touchend touchcancel contextmenu", this._cancel, this), Te(document, "touchmove", this._onMove, this);
      }, _onMove: function(i) {
        var s = i.touches[0];
        this._newPos = new rt(s.clientX, s.clientY);
      }, _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      }, _simulateEvent: function(i, s) {
        var c = new MouseEvent(i, { bubbles: true, cancelable: true, view: window, screenX: s.screenX, screenY: s.screenY, clientX: s.clientX, clientY: s.clientY });
        c._simulated = true, s.target.dispatchEvent(c);
      } });
      pe.addInitHook("addHandler", "tapHold", ps), pe.mergeOptions({ touchZoom: Dt.touch, bounceAtZoomLimits: true });
      var ur = Ei.extend({ addHooks: function() {
        ee(this._map._container, "leaflet-touch-zoom"), Qt(this._map._container, "touchstart", this._onTouchStart, this);
      }, removeHooks: function() {
        Xe(this._map._container, "leaflet-touch-zoom"), Te(this._map._container, "touchstart", this._onTouchStart, this);
      }, _onTouchStart: function(i) {
        var s = this._map;
        if (!(!i.touches || i.touches.length !== 2 || s._animatingZoom || this._zooming)) {
          var c = s.mouseEventToContainerPoint(i.touches[0]), m = s.mouseEventToContainerPoint(i.touches[1]);
          this._centerPoint = s.getSize()._divideBy(2), this._startLatLng = s.containerPointToLatLng(this._centerPoint), s.options.touchZoom !== "center" && (this._pinchStartLatLng = s.containerPointToLatLng(c.add(m)._divideBy(2))), this._startDist = c.distanceTo(m), this._startZoom = s.getZoom(), this._moved = false, this._zooming = true, s._stop(), Qt(document, "touchmove", this._onTouchMove, this), Qt(document, "touchend touchcancel", this._onTouchEnd, this), fn(i);
        }
      }, _onTouchMove: function(i) {
        if (!(!i.touches || i.touches.length !== 2 || !this._zooming)) {
          var s = this._map, c = s.mouseEventToContainerPoint(i.touches[0]), m = s.mouseEventToContainerPoint(i.touches[1]), _ = c.distanceTo(m) / this._startDist;
          if (this._zoom = s.getScaleZoom(_, this._startZoom), !s.options.bounceAtZoomLimits && (this._zoom < s.getMinZoom() && _ < 1 || this._zoom > s.getMaxZoom() && _ > 1) && (this._zoom = s._limitZoom(this._zoom)), s.options.touchZoom === "center") {
            if (this._center = this._startLatLng, _ === 1) return;
          } else {
            var T = c._add(m)._divideBy(2)._subtract(this._centerPoint);
            if (_ === 1 && T.x === 0 && T.y === 0) return;
            this._center = s.unproject(s.project(this._pinchStartLatLng, this._zoom).subtract(T), this._zoom);
          }
          this._moved || (s._moveStart(true, false), this._moved = true), C(this._animRequest);
          var I = g(s._move, s, this._center, this._zoom, { pinch: true, round: false }, void 0);
          this._animRequest = ot(I, this, true), fn(i);
        }
      }, _onTouchEnd: function() {
        if (!this._moved || !this._zooming) {
          this._zooming = false;
          return;
        }
        this._zooming = false, C(this._animRequest), Te(document, "touchmove", this._onTouchMove, this), Te(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      } });
      pe.addInitHook("addHandler", "touchZoom", ur), pe.BoxZoom = hs, pe.DoubleClickZoom = Xi, pe.Drag = bl, pe.Keyboard = La, pe.ScrollWheelZoom = Lo, pe.TapHold = ps, pe.TouchZoom = ur, a.Bounds = Y, a.Browser = Dt, a.CRS = At, a.Canvas = Ma, a.Circle = vl, a.CircleMarker = Ca, a.Class = W, a.Control = Vn, a.DivIcon = _l, a.DivOverlay = Ai, a.DomEvent = Ff, a.DomUtil = Nu, a.Draggable = Mo, a.Evented = tt, a.FeatureGroup = ni, a.GeoJSON = oi, a.GridLayer = rr, a.Handler = Ei, a.Icon = kr, a.ImageOverlay = Fi, a.LatLng = _t, a.LatLngBounds = dt, a.Layer = Oi, a.LayerGroup = ir, a.LineUtil = Gu, a.Map = pe, a.Marker = Dr, a.Mixin = Jf, a.Path = ho, a.Point = rt, a.PolyUtil = td, a.Polygon = Nr, a.Polyline = po, a.Popup = Oa, a.PosAnimation = ns, a.Projection = Yu, a.Rectangle = ec, a.Renderer = Li, a.SVG = Ro, a.SVGOverlay = Ao, a.TileLayer = ar, a.Tooltip = ds, a.Transformation = Ut, a.Util = st, a.VideoOverlay = fs, a.bind = g, a.bounds = ft, a.canvas = Aa, a.circle = ad, a.circleMarker = Ku, a.control = Pr, a.divIcon = tc, a.extend = f, a.featureGroup = Sa, a.geoJSON = cs, a.geoJson = Wu, a.gridLayer = Ri, a.icon = ss, a.imageOverlay = Ir, a.latLng = ct, a.latLngBounds = bt, a.layerGroup = Xu, a.map = xa, a.marker = gl, a.point = z, a.polygon = ii, a.polyline = sd, a.popup = ld, a.rectangle = si, a.setOptions = M, a.stamp = y, a.svg = lr, a.svgOverlay = Ju, a.tileLayer = ri, a.tooltip = ud, a.transformation = Wt, a.version = u, a.videoOverlay = Qu;
      var Ur = window.L;
      a.noConflict = function() {
        return window.L = Ur, this;
      }, window.L = a;
    });
  }(du, du.exports)), du.exports;
}
var ol = eA();
function nA(n3) {
  return n3.split(" ").filter(Boolean);
}
function iA(n3, r) {
  for (const a of nA(r)) ol.DomUtil.addClass(n3, a);
}
function Yf(n3, r, a) {
  return Object.freeze({ instance: n3, context: r, container: a });
}
function gb(n3, r) {
  return r == null ? function(u, f) {
    const h = O.useRef(void 0);
    return h.current || (h.current = n3(u, f)), h;
  } : function(u, f) {
    const h = O.useRef(void 0);
    h.current || (h.current = n3(u, f));
    const g = O.useRef(u), { instance: v } = h.current;
    return O.useEffect(function() {
      g.current !== u && (r(v, u, g.current), g.current = u);
    }, [v, u, r]), h;
  };
}
function vb(n3, r) {
  O.useEffect(function() {
    return (r.layerContainer ?? r.map).addLayer(n3.instance), function() {
      var _a;
      (_a = r.layerContainer) == null ? void 0 : _a.removeLayer(n3.instance), r.map.removeLayer(n3.instance);
    };
  }, [r, n3]);
}
function oA(n3) {
  return function(a) {
    const u = Gf(), f = n3(Sm(a, u), u);
    return FM(u.map, a.attribution), mb(f.current, a.eventHandlers), vb(f.current, u), f;
  };
}
function rA(n3, r) {
  const a = O.useRef(void 0);
  O.useEffect(function() {
    if (r.pathOptions !== a.current) {
      const f = r.pathOptions ?? {};
      n3.instance.setStyle(f), a.current = f;
    }
  }, [n3, r]);
}
function aA(n3) {
  return function(a) {
    const u = Gf(), f = n3(Sm(a, u), u);
    return mb(f.current, a.eventHandlers), vb(f.current, u), rA(f.current, a), f;
  };
}
function Cm(n3, r) {
  const a = gb(n3, r), u = aA(a);
  return QM(u);
}
function sA(n3, r) {
  const a = gb(n3, r), u = oA(a);
  return JM(u);
}
function lA(n3, r, a) {
  const { opacity: u, zIndex: f } = r;
  u != null && u !== a.opacity && n3.setOpacity(u), f != null && f !== a.zIndex && n3.setZIndex(f);
}
function uA() {
  return Gf().map;
}
function cA(n3) {
  const r = uA();
  return O.useEffect(function() {
    return r.on(n3), function() {
      r.off(n3);
    };
  }, [r, n3]), r;
}
const fA = Cm(function({ center: r, children: a, ...u }, f) {
  const h = new ol.CircleMarker(r, u);
  return Yf(h, xm(f, { overlayContainer: h }));
}, XM), yb = Cm(function({ data: r, ...a }, u) {
  const f = new ol.GeoJSON(r, a);
  return Yf(f, xm(u, { overlayContainer: f }));
}, function(r, a, u) {
  a.style !== u.style && (a.style == null ? r.resetStyle() : r.setStyle(a.style));
});
function dA({ bounds: n3, boundsOptions: r, center: a, children: u, className: f, id: h, placeholder: g, style: v, whenReady: y, zoom: b, ...S }, w) {
  const [A] = O.useState({ className: f, id: h, style: v }), [P, R] = O.useState(null), M = O.useRef(void 0);
  O.useImperativeHandle(w, () => (P == null ? void 0 : P.map) ?? null, [P]);
  const $ = O.useCallback((V) => {
    if (V !== null && !M.current) {
      const D = new ol.Map(V, S);
      M.current = D, a != null && b != null ? D.setView(a, b) : n3 != null && D.fitBounds(n3, r), y != null && D.whenReady(y), R(WM(D));
    }
  }, []);
  O.useEffect(() => () => {
    P == null ? void 0 : P.map.remove();
  }, [P]);
  const U = P ? Xn.createElement(Vf, { value: P }, u) : g ?? null;
  return Xn.createElement("div", { ...A, ref: $ }, U);
}
const hA = O.forwardRef(dA), pA = ["mapPane", "markerPane", "overlayPane", "popupPane", "shadowPane", "tilePane", "tooltipPane"];
function G_(n3, r) {
  const { [r]: a, ...u } = n3;
  return u;
}
function mA(n3, r, a) {
  if (pA.indexOf(n3) !== -1) throw new Error(`You must use a unique name for a pane that is not a default Leaflet pane: ${n3}`);
  if (a.map.getPane(n3) != null) throw new Error(`A pane with this name already exists: ${n3}`);
  const u = r.pane ?? a.pane, f = u ? a.map.getPane(u) : void 0, h = a.map.createPane(n3, f);
  if (r.className != null && iA(h, r.className), r.style != null) for (const g of Object.keys(r.style)) h.style[g] = r.style[g];
  return h;
}
function gA(n3, r) {
  const [a] = O.useState(n3.name), [u, f] = O.useState(null);
  O.useImperativeHandle(r, () => u, [u]);
  const h = Gf(), g = O.useMemo(() => ({ ...h, pane: a }), [h]);
  return O.useEffect(() => (f(mA(a, n3, h)), function() {
    var _a, _b;
    (_b = (_a = h.map.getPane(a)) == null ? void 0 : _a.remove) == null ? void 0 : _b.call(_a), h.map._panes != null && (h.map._panes = G_(h.map._panes, a), h.map._paneRenderers = G_(h.map._paneRenderers, a));
  }), []), n3.children != null && u != null ? Jp.createPortal(Xn.createElement(Vf, { value: g }, n3.children), u) : null;
}
const lu = O.forwardRef(gA), vA = Cm(function({ bounds: r, ...a }, u) {
  const f = new ol.Rectangle(r, a);
  return Yf(f, xm(u, { overlayContainer: f }));
}, function(r, a, u) {
  a.bounds !== u.bounds && r.setBounds(a.bounds);
}), yA = sA(function({ url: r, ...a }, u) {
  const f = new ol.TileLayer(r, Sm(a, u));
  return Yf(f, u);
}, function(r, a, u) {
  lA(r, a, u);
  const { url: f } = a;
  f != null && f !== u.url && r.setUrl(f);
});
function _A({ calcRoute: n3 }) {
  const r = li((u) => u.mainColor), { markers: a } = li();
  return O.useEffect(() => {
    if (a.length < 2 && (console.log(a), li.setState({ route: null })), a.length === 2) {
      const u = { lat: a[0].coordinates[0], lon: a[0].coordinates[1] }, f = { lat: a[1].coordinates[0], lon: a[1].coordinates[1] };
      n3(u, f);
    }
  }, [a]), Z.jsxs(Z.Fragment, { children: [Z.jsx(bA, {}), a.length != 0 && a.map((u, f) => Z.jsx(fA, { center: [u.coordinates[0], u.coordinates[1]], radius: 7, color: r || "black", fillColor: f == 0 ? r : "white", fillOpacity: 1, style: { boxShadow: "0 0 5px rgba(0,0,0,1)" } }, u.key))] });
}
function bA() {
  const { setMarkers: n3 } = li();
  return cA({ click(r) {
    const { lat: a, lng: u } = r.latlng;
    n3({ coordinates: [a, u], key: Date.now() });
  } }), null;
}
function xA() {
  const n3 = li((h) => h.page), r = li((h) => h.mainColor), a = O.useRef(), [u, f] = O.useState(null);
  return O.useEffect(() => {
    if (n3 === "explore") {
      async function h() {
        try {
          const g = await jM();
          console.log("Network data:", g), f(g);
        } catch (g) {
          console.error("Error fetching network data:", g);
        }
      }
      h();
    }
  }, [n3]), Z.jsx(Z.Fragment, { children: u && Z.jsx(yb, { ref: a, style: { color: r, weight: 5 } }) });
}
function SA({ mainColor: n3 }) {
  const r = O.useRef(), a = O.useRef(), u = O.useRef();
  O.useRef();
  const f = li((y) => y.bbox), [h, g] = O.useState(null);
  async function v(y, b) {
    console.log("running route");
    try {
      const S = await IM({ origin: y, destination: b });
      g(S);
    } catch (S) {
      console.error("Error fetching route:", S);
    }
  }
  return O.useEffect(() => {
    if (h && a.current && (a.current.clearLayers(), a.current.addData(h), r.current)) {
      const b = a.current.getBounds().pad(0.1);
      r.current.fitBounds(b);
    }
  }, [h, n3]), O.useEffect(() => {
    u.current && u.current.setStyle({ fillColor: n3 }), a.current && a.current.setStyle({ color: n3 });
  }, [n3]), Z.jsx("div", { style: { position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }, children: Z.jsxs(hA, { zoom: 10, bounds: f, zoomControl: false, ref: r, style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }, children: [Z.jsx(lu, { name: "basemap", style: { zIndex: 0 }, children: Z.jsx(yA, { url: "https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", attribution: '\xA9 <a href="https://carto.com/">CARTO</a>' }) }), Z.jsx(lu, { name: "color-overlay", style: { zIndex: 1, mixBlendMode: "lighten", transform: "translateZ(0)" }, children: Z.jsx(vA, { bounds: [[-90, -180], [90, 180]], pathOptions: { fillOpacity: 1, color: n3 } }, u) }), Z.jsx("div", { style: { position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: n3, mixBlendMode: "lighten", pointerEvents: "none", zIndex: 10 } }), h && Z.jsx(lu, { name: "route", style: { zIndex: 500 }, children: Z.jsx(yb, { ref: a, style: { color: n3, weight: 5 } }) }), Z.jsx(lu, { name: "markers", style: { zIndex: 600 }, children: Z.jsx(_A, { mapRef: r, calcRoute: v }) }), Z.jsx(lu, { name: "network", style: { zIndex: 400 }, children: Z.jsx(xA, { mapRef: r }) })] }) });
}
function CA({ theme: n3 }) {
  const r = ["Distanza", "Pendenza", "Larghezza", "Incidenti"], [a, u] = O.useState(r[0]);
  function f(g) {
    const y = (r.indexOf(a) + g + r.length) % r.length;
    u(r[y]);
  }
  const h = { left: { label: "\u25C0", fn: () => {
    f(-1);
  } }, right: { label: "\u25B6", fn: () => {
    f(1);
  } } };
  return Z.jsxs(OM, { sx: { position: "absolute", top: 0, width: "100%", zIndex: 10, height: `${n3.grid.units.h - 2}px`, color: n3.palette.primary.main, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", pointerEvents: "none" }, children: [Z.jsx(Ka, { variant: "mini", sx: { pointerEvents: "auto" }, onClick: h.left.fn, children: h.left.label }), Z.jsx(ob, { label: a }), Z.jsx(Ka, { variant: "mini", onClick: h.right.fn, sx: { pointerEvents: "auto" }, children: h.right.label })] });
}
function TA({ theme: n3, initMap: r }) {
  return Z.jsxs(Rp, { sx: { overflow: "hidden", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", marginY: n3.grid.spacing, height: `${n3.grid.units.h * 9}px` }, children: [Z.jsx(CA, { theme: n3 }), Z.jsx(IE, { sx: { position: "absolute", bottom: 0, width: "100%", zIndex: 10, height: `${n3.grid.units.h - 2}px`, borderRadius: n3.brdRad, border: "none", outline: "2px solid" + n3.palette.primary.main, backgroundColor: n3.palette.primary.main, color: n3.palette.secondary.main }, children: "Segnala un Problema" }), r && Z.jsx(SA, { mainColor: n3.palette.primary.main })] });
}
function wA() {
  li((f) => f.prevSession), li((f) => f.mainColor);
  const n3 = li((f) => f.profile), r = wT(n3);
  li((f) => f.page);
  const [a, u] = O.useState(false);
  return O.useEffect(() => {
    async function f() {
      try {
        const h = await HM({});
        li.setState({ bbox: h.bbox }), u(true);
      } catch (h) {
        console.error("Error fetching bbox:", h);
      }
    }
    f();
  }, []), Z.jsx(bT, { theme: r, children: Z.jsx(qE, { children: Z.jsxs(Js, { sx: { height: "100%", width: "100%", p: r.mainContainerPadding, boxSizing: "border-box", display: "flex", flexDirection: "column", backgroundColor: r.palette.background.main }, children: [Z.jsx(VM, {}), Z.jsx(q_, { theme: r, label: "Da", placeholder: "Seleziona origine" }), Z.jsx(q_, { theme: r, label: "A", placeholder: "Seleziona destinazione" }), Z.jsx(TA, { theme: r, initMap: a }), Z.jsx(YM, {})] }) }) });
}
const EA = Z1.createRoot(document.querySelector("#root"));
function OA() {
  const [n3, r] = O.useState(0), a = { addresses: { file: "./COMUNE_MONZA_Numerazione_Civica_Comunale.geojson" } };
  return O.useEffect(() => {
    Object.entries(a).forEach(([u, { file: f }]) => {
      fetch(f).then((h) => h.json()).then((h) => {
        console.log(h), li.setState({ [u]: h.features });
      }).catch(console.error).finally(() => {
        r((h) => h + 1);
      });
    });
  }, []), n3 < Object.keys(a).length ? Z.jsx("div", { style: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: Z.jsx(om, {}) }) : Z.jsx(wA, {});
}
EA.render(Z.jsx(OA, {}));
