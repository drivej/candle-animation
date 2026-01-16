import mh, { useRef as za, useEffect as pu } from "react";
function _h(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var un = { exports: {} }, Ui = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ga;
function gu() {
  if (Ga) return Ui;
  Ga = 1;
  var r = mh, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, h, l) {
    var c, u = {}, f = null, d = null;
    l !== void 0 && (f = "" + l), h.key !== void 0 && (f = "" + h.key), h.ref !== void 0 && (d = h.ref);
    for (c in h) i.call(h, c) && !n.hasOwnProperty(c) && (u[c] = h[c]);
    if (o && o.defaultProps) for (c in h = o.defaultProps, h) u[c] === void 0 && (u[c] = h[c]);
    return { $$typeof: t, type: o, key: f, ref: d, props: u, _owner: s.current };
  }
  return Ui.Fragment = e, Ui.jsx = a, Ui.jsxs = a, Ui;
}
var Wi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ua;
function mu() {
  return Ua || (Ua = 1, process.env.NODE_ENV !== "production" && function() {
    var r = mh, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), g = Symbol.iterator, p = "@@iterator";
    function m(w) {
      if (w === null || typeof w != "object")
        return null;
      var k = g && w[g] || w[p];
      return typeof k == "function" ? k : null;
    }
    var _ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(w) {
      {
        for (var k = arguments.length, F = new Array(k > 1 ? k - 1 : 0), W = 1; W < k; W++)
          F[W - 1] = arguments[W];
        x("error", w, F);
      }
    }
    function x(w, k, F) {
      {
        var W = _.ReactDebugCurrentFrame, q = W.getStackAddendum();
        q !== "" && (k += "%s", F = F.concat([q]));
        var J = F.map(function(j) {
          return String(j);
        });
        J.unshift("Warning: " + k), Function.prototype.apply.call(console[w], console, J);
      }
    }
    var b = !1, v = !1, A = !1, S = !1, C = !1, T;
    T = Symbol.for("react.module.reference");
    function P(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === i || w === n || C || w === s || w === l || w === c || S || w === d || b || v || A || typeof w == "object" && w !== null && (w.$$typeof === f || w.$$typeof === u || w.$$typeof === a || w.$$typeof === o || w.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === T || w.getModuleId !== void 0));
    }
    function E(w, k, F) {
      var W = w.displayName;
      if (W)
        return W;
      var q = k.displayName || k.name || "";
      return q !== "" ? F + "(" + q + ")" : F;
    }
    function L(w) {
      return w.displayName || "Context";
    }
    function B(w) {
      if (w == null)
        return null;
      if (typeof w.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
        return w.displayName || w.name || null;
      if (typeof w == "string")
        return w;
      switch (w) {
        case i:
          return "Fragment";
        case e:
          return "Portal";
        case n:
          return "Profiler";
        case s:
          return "StrictMode";
        case l:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case o:
            var k = w;
            return L(k) + ".Consumer";
          case a:
            var F = w;
            return L(F._context) + ".Provider";
          case h:
            return E(w, w.render, "ForwardRef");
          case u:
            var W = w.displayName || null;
            return W !== null ? W : B(w.type) || "Memo";
          case f: {
            var q = w, J = q._payload, j = q._init;
            try {
              return B(j(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, I = 0, M, R, K, z, H, U, pt;
    function Ut() {
    }
    Ut.__reactDisabledLog = !0;
    function vt() {
      {
        if (I === 0) {
          M = console.log, R = console.info, K = console.warn, z = console.error, H = console.group, U = console.groupCollapsed, pt = console.groupEnd;
          var w = {
            configurable: !0,
            enumerable: !0,
            value: Ut,
            writable: !0
          };
          Object.defineProperties(console, {
            info: w,
            log: w,
            warn: w,
            error: w,
            group: w,
            groupCollapsed: w,
            groupEnd: w
          });
        }
        I++;
      }
    }
    function Ft() {
      {
        if (I--, I === 0) {
          var w = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, w, {
              value: M
            }),
            info: G({}, w, {
              value: R
            }),
            warn: G({}, w, {
              value: K
            }),
            error: G({}, w, {
              value: z
            }),
            group: G({}, w, {
              value: H
            }),
            groupCollapsed: G({}, w, {
              value: U
            }),
            groupEnd: G({}, w, {
              value: pt
            })
          });
        }
        I < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xe = _.ReactCurrentDispatcher, ci;
    function Ve(w, k, F) {
      {
        if (ci === void 0)
          try {
            throw Error();
          } catch (q) {
            var W = q.stack.trim().match(/\n( *(at )?)/);
            ci = W && W[1] || "";
          }
        return `
` + ci + w;
      }
    }
    var Re = !1, be;
    {
      var Di = typeof WeakMap == "function" ? WeakMap : Map;
      be = new Di();
    }
    function ce(w, k) {
      if (!w || Re)
        return "";
      {
        var F = be.get(w);
        if (F !== void 0)
          return F;
      }
      var W;
      Re = !0;
      var q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var J;
      J = xe.current, xe.current = null, vt();
      try {
        if (k) {
          var j = function() {
            throw Error();
          };
          if (Object.defineProperty(j.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(j, []);
            } catch (It) {
              W = It;
            }
            Reflect.construct(w, [], j);
          } else {
            try {
              j.call();
            } catch (It) {
              W = It;
            }
            w.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (It) {
            W = It;
          }
          w();
        }
      } catch (It) {
        if (It && W && typeof It.stack == "string") {
          for (var V = It.stack.split(`
`), kt = W.stack.split(`
`), gt = V.length - 1, yt = kt.length - 1; gt >= 1 && yt >= 0 && V[gt] !== kt[yt]; )
            yt--;
          for (; gt >= 1 && yt >= 0; gt--, yt--)
            if (V[gt] !== kt[yt]) {
              if (gt !== 1 || yt !== 1)
                do
                  if (gt--, yt--, yt < 0 || V[gt] !== kt[yt]) {
                    var Zt = `
` + V[gt].replace(" at new ", " at ");
                    return w.displayName && Zt.includes("<anonymous>") && (Zt = Zt.replace("<anonymous>", w.displayName)), typeof w == "function" && be.set(w, Zt), Zt;
                  }
                while (gt >= 1 && yt >= 0);
              break;
            }
        }
      } finally {
        Re = !1, xe.current = J, Ft(), Error.prepareStackTrace = q;
      }
      var di = w ? w.displayName || w.name : "", $e = di ? Ve(di) : "";
      return typeof w == "function" && be.set(w, $e), $e;
    }
    function we(w, k, F) {
      return ce(w, !1);
    }
    function ve(w) {
      var k = w.prototype;
      return !!(k && k.isReactComponent);
    }
    function Kt(w, k, F) {
      if (w == null)
        return "";
      if (typeof w == "function")
        return ce(w, ve(w));
      if (typeof w == "string")
        return Ve(w);
      switch (w) {
        case l:
          return Ve("Suspense");
        case c:
          return Ve("SuspenseList");
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case h:
            return we(w.render);
          case u:
            return Kt(w.type, k, F);
          case f: {
            var W = w, q = W._payload, J = W._init;
            try {
              return Kt(J(q), k, F);
            } catch {
            }
          }
        }
      return "";
    }
    var Ye = Object.prototype.hasOwnProperty, zi = {}, Cr = _.ReactDebugCurrentFrame;
    function Gi(w) {
      if (w) {
        var k = w._owner, F = Kt(w.type, w._source, k ? k.type : null);
        Cr.setExtraStackFrame(F);
      } else
        Cr.setExtraStackFrame(null);
    }
    function jc(w, k, F, W, q) {
      {
        var J = Function.call.bind(Ye);
        for (var j in w)
          if (J(w, j)) {
            var V = void 0;
            try {
              if (typeof w[j] != "function") {
                var kt = Error((W || "React class") + ": " + F + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw kt.name = "Invariant Violation", kt;
              }
              V = w[j](k, j, W, F, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (gt) {
              V = gt;
            }
            V && !(V instanceof Error) && (Gi(q), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", W || "React class", F, j, typeof V), Gi(null)), V instanceof Error && !(V.message in zi) && (zi[V.message] = !0, Gi(q), y("Failed %s type: %s", F, V.message), Gi(null));
          }
      }
    }
    var Xc = Array.isArray;
    function xs(w) {
      return Xc(w);
    }
    function Hc(w) {
      {
        var k = typeof Symbol == "function" && Symbol.toStringTag, F = k && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return F;
      }
    }
    function qc(w) {
      try {
        return Ca(w), !1;
      } catch {
        return !0;
      }
    }
    function Ca(w) {
      return "" + w;
    }
    function Pa(w) {
      if (qc(w))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hc(w)), Ca(w);
    }
    var Ma = _.ReactCurrentOwner, Kc = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ka, Ea;
    function Zc(w) {
      if (Ye.call(w, "ref")) {
        var k = Object.getOwnPropertyDescriptor(w, "ref").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return w.ref !== void 0;
    }
    function Qc(w) {
      if (Ye.call(w, "key")) {
        var k = Object.getOwnPropertyDescriptor(w, "key").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return w.key !== void 0;
    }
    function Jc(w, k) {
      typeof w.ref == "string" && Ma.current;
    }
    function tu(w, k) {
      {
        var F = function() {
          ka || (ka = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        F.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: F,
          configurable: !0
        });
      }
    }
    function eu(w, k) {
      {
        var F = function() {
          Ea || (Ea = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        F.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: F,
          configurable: !0
        });
      }
    }
    var iu = function(w, k, F, W, q, J, j) {
      var V = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: w,
        key: k,
        ref: F,
        props: j,
        // Record the component responsible for creating this element.
        _owner: J
      };
      return V._store = {}, Object.defineProperty(V._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(V, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.defineProperty(V, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.freeze && (Object.freeze(V.props), Object.freeze(V)), V;
    };
    function ru(w, k, F, W, q) {
      {
        var J, j = {}, V = null, kt = null;
        F !== void 0 && (Pa(F), V = "" + F), Qc(k) && (Pa(k.key), V = "" + k.key), Zc(k) && (kt = k.ref, Jc(k, q));
        for (J in k)
          Ye.call(k, J) && !Kc.hasOwnProperty(J) && (j[J] = k[J]);
        if (w && w.defaultProps) {
          var gt = w.defaultProps;
          for (J in gt)
            j[J] === void 0 && (j[J] = gt[J]);
        }
        if (V || kt) {
          var yt = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          V && tu(j, yt), kt && eu(j, yt);
        }
        return iu(w, V, kt, q, W, Ma.current, j);
      }
    }
    var bs = _.ReactCurrentOwner, Ra = _.ReactDebugCurrentFrame;
    function ui(w) {
      if (w) {
        var k = w._owner, F = Kt(w.type, w._source, k ? k.type : null);
        Ra.setExtraStackFrame(F);
      } else
        Ra.setExtraStackFrame(null);
    }
    var ws;
    ws = !1;
    function vs(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function Fa() {
      {
        if (bs.current) {
          var w = B(bs.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
    }
    function su(w) {
      return "";
    }
    var Ia = {};
    function nu(w) {
      {
        var k = Fa();
        if (!k) {
          var F = typeof w == "string" ? w : w.displayName || w.name;
          F && (k = `

Check the top-level render call using <` + F + ">.");
        }
        return k;
      }
    }
    function Ba(w, k) {
      {
        if (!w._store || w._store.validated || w.key != null)
          return;
        w._store.validated = !0;
        var F = nu(k);
        if (Ia[F])
          return;
        Ia[F] = !0;
        var W = "";
        w && w._owner && w._owner !== bs.current && (W = " It was passed a child from " + B(w._owner.type) + "."), ui(w), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, W), ui(null);
      }
    }
    function Oa(w, k) {
      {
        if (typeof w != "object")
          return;
        if (xs(w))
          for (var F = 0; F < w.length; F++) {
            var W = w[F];
            vs(W) && Ba(W, k);
          }
        else if (vs(w))
          w._store && (w._store.validated = !0);
        else if (w) {
          var q = m(w);
          if (typeof q == "function" && q !== w.entries)
            for (var J = q.call(w), j; !(j = J.next()).done; )
              vs(j.value) && Ba(j.value, k);
        }
      }
    }
    function au(w) {
      {
        var k = w.type;
        if (k == null || typeof k == "string")
          return;
        var F;
        if (typeof k == "function")
          F = k.propTypes;
        else if (typeof k == "object" && (k.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        k.$$typeof === u))
          F = k.propTypes;
        else
          return;
        if (F) {
          var W = B(k);
          jc(F, w.props, "prop", W, w);
        } else if (k.PropTypes !== void 0 && !ws) {
          ws = !0;
          var q = B(k);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
        }
        typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ou(w) {
      {
        for (var k = Object.keys(w.props), F = 0; F < k.length; F++) {
          var W = k[F];
          if (W !== "children" && W !== "key") {
            ui(w), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", W), ui(null);
            break;
          }
        }
        w.ref !== null && (ui(w), y("Invalid attribute `ref` supplied to `React.Fragment`."), ui(null));
      }
    }
    var La = {};
    function Da(w, k, F, W, q, J) {
      {
        var j = P(w);
        if (!j) {
          var V = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (V += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var kt = su();
          kt ? V += kt : V += Fa();
          var gt;
          w === null ? gt = "null" : xs(w) ? gt = "array" : w !== void 0 && w.$$typeof === t ? (gt = "<" + (B(w.type) || "Unknown") + " />", V = " Did you accidentally export a JSX literal instead of a component?") : gt = typeof w, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", gt, V);
        }
        var yt = ru(w, k, F, q, J);
        if (yt == null)
          return yt;
        if (j) {
          var Zt = k.children;
          if (Zt !== void 0)
            if (W)
              if (xs(Zt)) {
                for (var di = 0; di < Zt.length; di++)
                  Oa(Zt[di], w);
                Object.freeze && Object.freeze(Zt);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oa(Zt, w);
        }
        if (Ye.call(k, "key")) {
          var $e = B(w), It = Object.keys(k).filter(function(fu) {
            return fu !== "key";
          }), Ss = It.length > 0 ? "{key: someKey, " + It.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!La[$e + Ss]) {
            var du = It.length > 0 ? "{" + It.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ss, $e, du, $e), La[$e + Ss] = !0;
          }
        }
        return w === i ? ou(yt) : au(yt), yt;
      }
    }
    function hu(w, k, F) {
      return Da(w, k, F, !0);
    }
    function lu(w, k, F) {
      return Da(w, k, F, !1);
    }
    var cu = lu, uu = hu;
    Wi.Fragment = i, Wi.jsx = cu, Wi.jsxs = uu;
  }()), Wi;
}
process.env.NODE_ENV === "production" ? un.exports = gu() : un.exports = mu();
var _u = un.exports;
function Ae(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function yh(r, t) {
  r.prototype = Object.create(t.prototype), r.prototype.constructor = r, r.__proto__ = t;
}
/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var jt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Ai = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Kn, St, nt, te = 1e8, et = 1 / te, dn = Math.PI * 2, yu = dn / 4, xu = 0, xh = Math.sqrt, bu = Math.cos, wu = Math.sin, wt = function(t) {
  return typeof t == "string";
}, dt = function(t) {
  return typeof t == "function";
}, Me = function(t) {
  return typeof t == "number";
}, Zn = function(t) {
  return typeof t > "u";
}, _e = function(t) {
  return typeof t == "object";
}, Ot = function(t) {
  return t !== !1;
}, Qn = function() {
  return typeof window < "u";
}, Pr = function(t) {
  return dt(t) || wt(t);
}, bh = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Mt = Array.isArray, vu = /random\([^)]+\)/g, Su = /,\s*/g, Wa = /(?:-?\.?\d|\.)+/gi, wh = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, mi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, As = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, vh = /[+-]=-?[.\d]+/, Au = /[^,'"\[\]\s]+/gi, Tu = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ot, fe, fn, Jn, Ht = {}, Zr = {}, Sh, Ah = function(t) {
  return (Zr = Ti(t, Ht)) && Gt;
}, ta = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, cr = function(t, e) {
  return !e && console.warn(t);
}, Th = function(t, e) {
  return t && (Ht[t] = e) && Zr && (Zr[t] = e) || Ht;
}, ur = function() {
  return 0;
}, Cu = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Yr = {
  suppressEvents: !0,
  kill: !1
}, Pu = {
  suppressEvents: !0
}, ea = {}, Le = [], pn = {}, Ch, Nt = {}, Ts = {}, Na = 30, $r = [], ia = "", ra = function(t) {
  var e = t[0], i, s;
  if (_e(e) || dt(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
    for (s = $r.length; s-- && !$r[s].targetTest(e); )
      ;
    i = $r[s];
  }
  for (s = t.length; s--; )
    t[s] && (t[s]._gsap || (t[s]._gsap = new Kh(t[s], i))) || t.splice(s, 1);
  return t;
}, ri = function(t) {
  return t._gsap || ra(ee(t))[0]._gsap;
}, Ph = function(t, e, i) {
  return (i = t[e]) && dt(i) ? t[e]() : Zn(i) && t.getAttribute && t.getAttribute(e) || i;
}, Lt = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, mt = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, at = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, xi = function(t, e) {
  var i = e.charAt(0), s = parseFloat(e.substr(2));
  return t = parseFloat(t), i === "+" ? t + s : i === "-" ? t - s : i === "*" ? t * s : t / s;
}, Mu = function(t, e) {
  for (var i = e.length, s = 0; t.indexOf(e[s]) < 0 && ++s < i; )
    ;
  return s < i;
}, Qr = function() {
  var t = Le.length, e = Le.slice(0), i, s;
  for (pn = {}, Le.length = 0, i = 0; i < t; i++)
    s = e[i], s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0);
}, sa = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, Mh = function(t, e, i, s) {
  Le.length && !St && Qr(), t.render(e, i, !!(St && e < 0 && sa(t))), Le.length && !St && Qr();
}, kh = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(Au).length < 2 ? e : wt(t) ? t.trim() : t;
}, Eh = function(t) {
  return t;
}, qt = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, ku = function(t) {
  return function(e, i) {
    for (var s in i)
      s in e || s === "duration" && t || s === "ease" || (e[s] = i[s]);
  };
}, Ti = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, Va = function r(t, e) {
  for (var i in e)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = _e(e[i]) ? r(t[i] || (t[i] = {}), e[i]) : e[i]);
  return t;
}, Jr = function(t, e) {
  var i = {}, s;
  for (s in t)
    s in e || (i[s] = t[s]);
  return i;
}, ir = function(t) {
  var e = t.parent || ot, i = t.keyframes ? ku(Mt(t.keyframes)) : qt;
  if (Ot(t.inherit))
    for (; e; )
      i(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, Eu = function(t, e) {
  for (var i = t.length, s = i === e.length; s && i-- && t[i] === e[i]; )
    ;
  return i < 0;
}, Rh = function(t, e, i, s, n) {
  var a = t[s], o;
  if (n)
    for (o = e[n]; a && a[n] > o; )
      a = a._prev;
  return a ? (e._next = a._next, a._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[s] = e, e._prev = a, e.parent = e._dp = t, e;
}, cs = function(t, e, i, s) {
  i === void 0 && (i = "_first"), s === void 0 && (s = "_last");
  var n = e._prev, a = e._next;
  n ? n._next = a : t[i] === e && (t[i] = a), a ? a._prev = n : t[s] === e && (t[s] = n), e._next = e._prev = e.parent = null;
}, ze = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, si = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var i = t; i; )
      i._dirty = 1, i = i.parent;
  return t;
}, Ru = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, gn = function(t, e, i, s) {
  return t._startAt && (St ? t._startAt.revert(Yr) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, s));
}, Fu = function r(t) {
  return !t || t._ts && r(t.parent);
}, Ya = function(t) {
  return t._repeat ? Ci(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Ci = function(t, e) {
  var i = Math.floor(t = at(t / e));
  return t && i === t ? i - 1 : i;
}, ts = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, us = function(t) {
  return t._end = at(t._start + (t._tDur / Math.abs(t._ts || t._rts || et) || 0));
}, ds = function(t, e) {
  var i = t._dp;
  return i && i.smoothChildTiming && t._ts && (t._start = at(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), us(t), i._dirty || si(i, t)), t;
}, Fh = function(t, e) {
  var i;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = ts(t.rawTime(), e), (!e._dur || Ar(0, e.totalDuration(), i) - e._tTime > et) && e.render(i, !0)), si(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (i = t; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    t._zTime = -et;
  }
}, pe = function(t, e, i, s) {
  return e.parent && ze(e), e._start = at((Me(i) ? i : i || t !== ot ? Qt(t, i, e) : t._time) + e._delay), e._end = at(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Rh(t, e, "_first", "_last", t._sort ? "_start" : 0), mn(e) || (t._recent = e), s || Fh(t, e), t._ts < 0 && ds(t, t._tTime), t;
}, Ih = function(t, e) {
  return (Ht.ScrollTrigger || ta("scrollTrigger", e)) && Ht.ScrollTrigger.create(e, t);
}, Bh = function(t, e, i, s, n) {
  if (aa(t, e, n), !t._initted)
    return 1;
  if (!i && t._pt && !St && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Ch !== Vt.frame)
    return Le.push(t), t._lazy = [n, s], 1;
}, Iu = function r(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || r(e));
}, mn = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, Bu = function(t, e, i, s) {
  var n = t.ratio, a = e < 0 || !e && (!t._start && Iu(t) && !(!t._initted && mn(t)) || (t._ts < 0 || t._dp._ts < 0) && !mn(t)) ? 0 : 1, o = t._rDelay, h = 0, l, c, u;
  if (o && t._repeat && (h = Ar(0, t._tDur, e), c = Ci(h, o), t._yoyo && c & 1 && (a = 1 - a), c !== Ci(t._tTime, o) && (n = 1 - a, t.vars.repeatRefresh && t._initted && t.invalidate())), a !== n || St || s || t._zTime === et || !e && t._zTime) {
    if (!t._initted && Bh(t, e, s, i, h))
      return;
    for (u = t._zTime, t._zTime = e || (i ? et : 0), i || (i = e && !u), t.ratio = a, t._from && (a = 1 - a), t._time = 0, t._tTime = h, l = t._pt; l; )
      l.r(a, l.d), l = l._next;
    e < 0 && gn(t, e, i, !0), t._onUpdate && !i && Yt(t, "onUpdate"), h && t._repeat && !i && t.parent && Yt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === a && (a && ze(t, 1), !i && !St && (Yt(t, a ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, Ou = function(t, e, i) {
  var s;
  if (i > e)
    for (s = t._first; s && s._start <= i; ) {
      if (s.data === "isPause" && s._start > e)
        return s;
      s = s._next;
    }
  else
    for (s = t._last; s && s._start >= i; ) {
      if (s.data === "isPause" && s._start < e)
        return s;
      s = s._prev;
    }
}, Pi = function(t, e, i, s) {
  var n = t._repeat, a = at(e) || 0, o = t._tTime / t._tDur;
  return o && !s && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : at(a * (n + 1) + t._rDelay * n) : a, o > 0 && !s && ds(t, t._tTime = t._tDur * o), t.parent && us(t), i || si(t.parent, t), t;
}, $a = function(t) {
  return t instanceof Et ? si(t) : Pi(t, t._dur);
}, Lu = {
  _start: 0,
  endTime: ur,
  totalDuration: ur
}, Qt = function r(t, e, i) {
  var s = t.labels, n = t._recent || Lu, a = t.duration() >= te ? n.endTime(!1) : t._dur, o, h, l;
  return wt(e) && (isNaN(e) || e in s) ? (h = e.charAt(0), l = e.substr(-1) === "%", o = e.indexOf("="), h === "<" || h === ">" ? (o >= 0 && (e = e.replace(/=/, "")), (h === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (l ? (o < 0 ? n : i).totalDuration() / 100 : 1)) : o < 0 ? (e in s || (s[e] = a), s[e]) : (h = parseFloat(e.charAt(o - 1) + e.substr(o + 1)), l && i && (h = h / 100 * (Mt(i) ? i[0] : i).totalDuration()), o > 1 ? r(t, e.substr(0, o - 1), i) + h : a + h)) : e == null ? a : +e;
}, rr = function(t, e, i) {
  var s = Me(e[1]), n = (s ? 2 : 1) + (t < 2 ? 0 : 1), a = e[n], o, h;
  if (s && (a.duration = e[1]), a.parent = i, t) {
    for (o = a, h = i; h && !("immediateRender" in o); )
      o = h.vars.defaults || {}, h = Ot(h.vars.inherit) && h.parent;
    a.immediateRender = Ot(o.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[n - 1];
  }
  return new xt(e[0], a, e[n + 1]);
}, We = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, Ar = function(t, e, i) {
  return i < t ? t : i > e ? e : i;
}, Ct = function(t, e) {
  return !wt(t) || !(e = Tu.exec(t)) ? "" : e[1];
}, Du = function(t, e, i) {
  return We(i, function(s) {
    return Ar(t, e, s);
  });
}, _n = [].slice, Oh = function(t, e) {
  return t && _e(t) && "length" in t && (!e && !t.length || t.length - 1 in t && _e(t[0])) && !t.nodeType && t !== fe;
}, zu = function(t, e, i) {
  return i === void 0 && (i = []), t.forEach(function(s) {
    var n;
    return wt(s) && !e || Oh(s, 1) ? (n = i).push.apply(n, ee(s)) : i.push(s);
  }) || i;
}, ee = function(t, e, i) {
  return nt && !e && nt.selector ? nt.selector(t) : wt(t) && !i && (fn || !Mi()) ? _n.call((e || Jn).querySelectorAll(t), 0) : Mt(t) ? zu(t, i) : Oh(t) ? _n.call(t, 0) : t ? [t] : [];
}, yn = function(t) {
  return t = ee(t)[0] || cr("Invalid scope") || {}, function(e) {
    var i = t.current || t.nativeElement || t;
    return ee(e, i.querySelectorAll ? i : i === t ? cr("Invalid scope") || Jn.createElement("div") : t);
  };
}, Lh = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Dh = function(t) {
  if (dt(t))
    return t;
  var e = _e(t) ? t : {
    each: t
  }, i = ni(e.ease), s = e.from || 0, n = parseFloat(e.base) || 0, a = {}, o = s > 0 && s < 1, h = isNaN(s) || o, l = e.axis, c = s, u = s;
  return wt(s) ? c = u = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[s] || 0 : !o && h && (c = s[0], u = s[1]), function(f, d, g) {
    var p = (g || e).length, m = a[p], _, y, x, b, v, A, S, C, T;
    if (!m) {
      if (T = e.grid === "auto" ? 0 : (e.grid || [1, te])[1], !T) {
        for (S = -te; S < (S = g[T++].getBoundingClientRect().left) && T < p; )
          ;
        T < p && T--;
      }
      for (m = a[p] = [], _ = h ? Math.min(T, p) * c - 0.5 : s % T, y = T === te ? 0 : h ? p * u / T - 0.5 : s / T | 0, S = 0, C = te, A = 0; A < p; A++)
        x = A % T - _, b = y - (A / T | 0), m[A] = v = l ? Math.abs(l === "y" ? b : x) : xh(x * x + b * b), v > S && (S = v), v < C && (C = v);
      s === "random" && Lh(m), m.max = S - C, m.min = C, m.v = p = (parseFloat(e.amount) || parseFloat(e.each) * (T > p ? p - 1 : l ? l === "y" ? p / T : T : Math.max(T, p / T)) || 0) * (s === "edges" ? -1 : 1), m.b = p < 0 ? n - p : n, m.u = Ct(e.amount || e.each) || 0, i = i && p < 0 ? Xh(i) : i;
    }
    return p = (m[f] - m.min) / m.max || 0, at(m.b + (i ? i(p) : p) * m.v) + m.u;
  };
}, xn = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(i) {
    var s = at(Math.round(parseFloat(i) / t) * t * e);
    return (s - s % 1) / e + (Me(i) ? 0 : Ct(i));
  };
}, zh = function(t, e) {
  var i = Mt(t), s, n;
  return !i && _e(t) && (s = i = t.radius || te, t.values ? (t = ee(t.values), (n = !Me(t[0])) && (s *= s)) : t = xn(t.increment)), We(e, i ? dt(t) ? function(a) {
    return n = t(a), Math.abs(n - a) <= s ? n : a;
  } : function(a) {
    for (var o = parseFloat(n ? a.x : a), h = parseFloat(n ? a.y : 0), l = te, c = 0, u = t.length, f, d; u--; )
      n ? (f = t[u].x - o, d = t[u].y - h, f = f * f + d * d) : f = Math.abs(t[u] - o), f < l && (l = f, c = u);
    return c = !s || l <= s ? t[c] : a, n || c === a || Me(a) ? c : c + Ct(a);
  } : xn(t));
}, Gh = function(t, e, i, s) {
  return We(Mt(t) ? !e : i === !0 ? !!(i = 0) : !s, function() {
    return Mt(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (s = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * s) / s;
  });
}, Gu = function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  return function(s) {
    return e.reduce(function(n, a) {
      return a(n);
    }, s);
  };
}, Uu = function(t, e) {
  return function(i) {
    return t(parseFloat(i)) + (e || Ct(i));
  };
}, Wu = function(t, e, i) {
  return Wh(t, e, 0, 1, i);
}, Uh = function(t, e, i) {
  return We(i, function(s) {
    return t[~~e(s)];
  });
}, Nu = function r(t, e, i) {
  var s = e - t;
  return Mt(t) ? Uh(t, r(0, t.length), e) : We(i, function(n) {
    return (s + (n - t) % s) % s + t;
  });
}, Vu = function r(t, e, i) {
  var s = e - t, n = s * 2;
  return Mt(t) ? Uh(t, r(0, t.length - 1), e) : We(i, function(a) {
    return a = (n + (a - t) % n) % n || 0, t + (a > s ? n - a : a);
  });
}, dr = function(t) {
  return t.replace(vu, function(e) {
    var i = e.indexOf("[") + 1, s = e.substring(i || 7, i ? e.indexOf("]") : e.length - 1).split(Su);
    return Gh(i ? s : +s[0], i ? 0 : +s[1], +s[2] || 1e-5);
  });
}, Wh = function(t, e, i, s, n) {
  var a = e - t, o = s - i;
  return We(n, function(h) {
    return i + ((h - t) / a * o || 0);
  });
}, Yu = function r(t, e, i, s) {
  var n = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!n) {
    var a = wt(t), o = {}, h, l, c, u, f;
    if (i === !0 && (s = 1) && (i = null), a)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (Mt(t) && !Mt(e)) {
      for (c = [], u = t.length, f = u - 2, l = 1; l < u; l++)
        c.push(r(t[l - 1], t[l]));
      u--, n = function(g) {
        g *= u;
        var p = Math.min(f, ~~g);
        return c[p](g - p);
      }, i = e;
    } else s || (t = Ti(Mt(t) ? [] : {}, t));
    if (!c) {
      for (h in e)
        na.call(o, t, h, "get", e[h]);
      n = function(g) {
        return la(g, o) || (a ? t.p : t);
      };
    }
  }
  return We(i, n);
}, ja = function(t, e, i) {
  var s = t.labels, n = te, a, o, h;
  for (a in s)
    o = s[a] - e, o < 0 == !!i && o && n > (o = Math.abs(o)) && (h = a, n = o);
  return h;
}, Yt = function(t, e, i) {
  var s = t.vars, n = s[e], a = nt, o = t._ctx, h, l, c;
  if (n)
    return h = s[e + "Params"], l = s.callbackScope || t, i && Le.length && Qr(), o && (nt = o), c = h ? n.apply(l, h) : n.call(l), nt = a, c;
}, Ki = function(t) {
  return ze(t), t.scrollTrigger && t.scrollTrigger.kill(!!St), t.progress() < 1 && Yt(t, "onInterrupt"), t;
}, _i, Nh = [], Vh = function(t) {
  if (t)
    if (t = !t.name && t.default || t, Qn() || t.headless) {
      var e = t.name, i = dt(t), s = e && !i && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: ur,
        render: la,
        add: na,
        kill: ad,
        modifier: nd,
        rawVars: 0
      }, a = {
        targetTest: 0,
        get: 0,
        getSetter: ha,
        aliases: {},
        register: 0
      };
      if (Mi(), t !== s) {
        if (Nt[e])
          return;
        qt(s, qt(Jr(t, n), a)), Ti(s.prototype, Ti(n, Jr(t, a))), Nt[s.prop = e] = s, t.targetTest && ($r.push(s), ea[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      Th(e, s), t.register && t.register(Gt, s, Dt);
    } else
      Nh.push(t);
}, tt = 255, Zi = {
  aqua: [0, tt, tt],
  lime: [0, tt, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, tt],
  navy: [0, 0, 128],
  white: [tt, tt, tt],
  olive: [128, 128, 0],
  yellow: [tt, tt, 0],
  orange: [tt, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [tt, 0, 0],
  pink: [tt, 192, 203],
  cyan: [0, tt, tt],
  transparent: [tt, tt, tt, 0]
}, Cs = function(t, e, i) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * tt + 0.5 | 0;
}, Yh = function(t, e, i) {
  var s = t ? Me(t) ? [t >> 16, t >> 8 & tt, t & tt] : 0 : Zi.black, n, a, o, h, l, c, u, f, d, g;
  if (!s) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Zi[t])
      s = Zi[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), a = t.charAt(2), o = t.charAt(3), t = "#" + n + n + a + a + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return s = parseInt(t.substr(1, 6), 16), [s >> 16, s >> 8 & tt, s & tt, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), s = [t >> 16, t >> 8 & tt, t & tt];
    } else if (t.substr(0, 3) === "hsl") {
      if (s = g = t.match(Wa), !e)
        h = +s[0] % 360 / 360, l = +s[1] / 100, c = +s[2] / 100, a = c <= 0.5 ? c * (l + 1) : c + l - c * l, n = c * 2 - a, s.length > 3 && (s[3] *= 1), s[0] = Cs(h + 1 / 3, n, a), s[1] = Cs(h, n, a), s[2] = Cs(h - 1 / 3, n, a);
      else if (~t.indexOf("="))
        return s = t.match(wh), i && s.length < 4 && (s[3] = 1), s;
    } else
      s = t.match(Wa) || Zi.transparent;
    s = s.map(Number);
  }
  return e && !g && (n = s[0] / tt, a = s[1] / tt, o = s[2] / tt, u = Math.max(n, a, o), f = Math.min(n, a, o), c = (u + f) / 2, u === f ? h = l = 0 : (d = u - f, l = c > 0.5 ? d / (2 - u - f) : d / (u + f), h = u === n ? (a - o) / d + (a < o ? 6 : 0) : u === a ? (o - n) / d + 2 : (n - a) / d + 4, h *= 60), s[0] = ~~(h + 0.5), s[1] = ~~(l * 100 + 0.5), s[2] = ~~(c * 100 + 0.5)), i && s.length < 4 && (s[3] = 1), s;
}, $h = function(t) {
  var e = [], i = [], s = -1;
  return t.split(De).forEach(function(n) {
    var a = n.match(mi) || [];
    e.push.apply(e, a), i.push(s += a.length + 1);
  }), e.c = i, e;
}, Xa = function(t, e, i) {
  var s = "", n = (t + s).match(De), a = e ? "hsla(" : "rgba(", o = 0, h, l, c, u;
  if (!n)
    return t;
  if (n = n.map(function(f) {
    return (f = Yh(f, e, 1)) && a + (e ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")";
  }), i && (c = $h(t), h = i.c, h.join(s) !== c.c.join(s)))
    for (l = t.replace(De, "1").split(mi), u = l.length - 1; o < u; o++)
      s += l[o] + (~h.indexOf(o) ? n.shift() || a + "0,0,0,0)" : (c.length ? c : n.length ? n : i).shift());
  if (!l)
    for (l = t.split(De), u = l.length - 1; o < u; o++)
      s += l[o] + n[o];
  return s + l[u];
}, De = function() {
  var r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Zi)
    r += "|" + t + "\\b";
  return new RegExp(r + ")", "gi");
}(), $u = /hsl[a]?\(/, jh = function(t) {
  var e = t.join(" "), i;
  if (De.lastIndex = 0, De.test(e))
    return i = $u.test(e), t[1] = Xa(t[1], i), t[0] = Xa(t[0], i, $h(t[1])), !0;
}, fr, Vt = function() {
  var r = Date.now, t = 500, e = 33, i = r(), s = i, n = 1e3 / 240, a = n, o = [], h, l, c, u, f, d, g = function p(m) {
    var _ = r() - s, y = m === !0, x, b, v, A;
    if ((_ > t || _ < 0) && (i += _ - e), s += _, v = s - i, x = v - a, (x > 0 || y) && (A = ++u.frame, f = v - u.time * 1e3, u.time = v = v / 1e3, a += x + (x >= n ? 4 : n - x), b = 1), y || (h = l(p)), b)
      for (d = 0; d < o.length; d++)
        o[d](v, f, A, m);
  };
  return u = {
    time: 0,
    frame: 0,
    tick: function() {
      g(!0);
    },
    deltaRatio: function(m) {
      return f / (1e3 / (m || 60));
    },
    wake: function() {
      Sh && (!fn && Qn() && (fe = fn = window, Jn = fe.document || {}, Ht.gsap = Gt, (fe.gsapVersions || (fe.gsapVersions = [])).push(Gt.version), Ah(Zr || fe.GreenSockGlobals || !fe.gsap && fe || {}), Nh.forEach(Vh)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, h && u.sleep(), l = c || function(m) {
        return setTimeout(m, a - u.time * 1e3 + 1 | 0);
      }, fr = 1, g(2));
    },
    sleep: function() {
      (c ? cancelAnimationFrame : clearTimeout)(h), fr = 0, l = ur;
    },
    lagSmoothing: function(m, _) {
      t = m || 1 / 0, e = Math.min(_ || 33, t);
    },
    fps: function(m) {
      n = 1e3 / (m || 240), a = u.time * 1e3 + n;
    },
    add: function(m, _, y) {
      var x = _ ? function(b, v, A, S) {
        m(b, v, A, S), u.remove(x);
      } : m;
      return u.remove(m), o[y ? "unshift" : "push"](x), Mi(), x;
    },
    remove: function(m, _) {
      ~(_ = o.indexOf(m)) && o.splice(_, 1) && d >= _ && d--;
    },
    _listeners: o
  }, u;
}(), Mi = function() {
  return !fr && Vt.wake();
}, $ = {}, ju = /^[\d.\-M][\d.\-,\s]/, Xu = /["']/g, Hu = function(t) {
  for (var e = {}, i = t.substr(1, t.length - 3).split(":"), s = i[0], n = 1, a = i.length, o, h, l; n < a; n++)
    h = i[n], o = n !== a - 1 ? h.lastIndexOf(",") : h.length, l = h.substr(0, o), e[s] = isNaN(l) ? l.replace(Xu, "").trim() : +l, s = h.substr(o + 1).trim();
  return e;
}, qu = function(t) {
  var e = t.indexOf("(") + 1, i = t.indexOf(")"), s = t.indexOf("(", e);
  return t.substring(e, ~s && s < i ? t.indexOf(")", i + 1) : i);
}, Ku = function(t) {
  var e = (t + "").split("("), i = $[e[0]];
  return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [Hu(e[1])] : qu(t).split(",").map(kh)) : $._CE && ju.test(t) ? $._CE("", t) : i;
}, Xh = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Hh = function r(t, e) {
  for (var i = t._first, s; i; )
    i instanceof Et ? r(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? r(i.timeline, e) : (s = i._ease, i._ease = i._yEase, i._yEase = s, i._yoyo = e)), i = i._next;
}, ni = function(t, e) {
  return t && (dt(t) ? t : $[t] || Ku(t)) || e;
}, li = function(t, e, i, s) {
  i === void 0 && (i = function(h) {
    return 1 - e(1 - h);
  }), s === void 0 && (s = function(h) {
    return h < 0.5 ? e(h * 2) / 2 : 1 - e((1 - h) * 2) / 2;
  });
  var n = {
    easeIn: e,
    easeOut: i,
    easeInOut: s
  }, a;
  return Lt(t, function(o) {
    $[o] = Ht[o] = n, $[a = o.toLowerCase()] = i;
    for (var h in n)
      $[a + (h === "easeIn" ? ".in" : h === "easeOut" ? ".out" : ".inOut")] = $[o + "." + h] = n[h];
  }), n;
}, qh = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, Ps = function r(t, e, i) {
  var s = e >= 1 ? e : 1, n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), a = n / dn * (Math.asin(1 / s) || 0), o = function(c) {
    return c === 1 ? 1 : s * Math.pow(2, -10 * c) * wu((c - a) * n) + 1;
  }, h = t === "out" ? o : t === "in" ? function(l) {
    return 1 - o(1 - l);
  } : qh(o);
  return n = dn / n, h.config = function(l, c) {
    return r(t, l, c);
  }, h;
}, Ms = function r(t, e) {
  e === void 0 && (e = 1.70158);
  var i = function(a) {
    return a ? --a * a * ((e + 1) * a + e) + 1 : 0;
  }, s = t === "out" ? i : t === "in" ? function(n) {
    return 1 - i(1 - n);
  } : qh(i);
  return s.config = function(n) {
    return r(t, n);
  }, s;
};
Lt("Linear,Quad,Cubic,Quart,Quint,Strong", function(r, t) {
  var e = t < 5 ? t + 1 : t;
  li(r + ",Power" + (e - 1), t ? function(i) {
    return Math.pow(i, e);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, e);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
  });
});
$.Linear.easeNone = $.none = $.Linear.easeIn;
li("Elastic", Ps("in"), Ps("out"), Ps());
(function(r, t) {
  var e = 1 / t, i = 2 * e, s = 2.5 * e, n = function(o) {
    return o < e ? r * o * o : o < i ? r * Math.pow(o - 1.5 / t, 2) + 0.75 : o < s ? r * (o -= 2.25 / t) * o + 0.9375 : r * Math.pow(o - 2.625 / t, 2) + 0.984375;
  };
  li("Bounce", function(a) {
    return 1 - n(1 - a);
  }, n);
})(7.5625, 2.75);
li("Expo", function(r) {
  return Math.pow(2, 10 * (r - 1)) * r + r * r * r * r * r * r * (1 - r);
});
li("Circ", function(r) {
  return -(xh(1 - r * r) - 1);
});
li("Sine", function(r) {
  return r === 1 ? 1 : -bu(r * yu) + 1;
});
li("Back", Ms("in"), Ms("out"), Ms());
$.SteppedEase = $.steps = Ht.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var i = 1 / t, s = t + (e ? 0 : 1), n = e ? 1 : 0, a = 1 - et;
    return function(o) {
      return ((s * Ar(0, a, o) | 0) + n) * i;
    };
  }
};
Ai.ease = $["quad.out"];
Lt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r) {
  return ia += r + "," + r + "Params,";
});
var Kh = function(t, e) {
  this.id = xu++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Ph, this.set = e ? e.getSetter : ha;
}, pr = /* @__PURE__ */ function() {
  function r(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Pi(this, +e.duration, 1, 1), this.data = e.data, nt && (this._ctx = nt, nt.data.push(this)), fr || Vt.wake();
  }
  var t = r.prototype;
  return t.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, t.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, Pi(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(i, s) {
    if (Mi(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (ds(this, i), !n._dp || n.parent || Fh(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && pe(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !s || this._initted && Math.abs(this._zTime) === et || !this._initted && this._dur && i || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Mh(this, i, s)), this;
  }, t.time = function(i, s) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Ya(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), s) : this._time;
  }, t.totalProgress = function(i, s) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, s) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(i, s) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Ya(this), s) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(i, s) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * n, s) : this._repeat ? Ci(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(i, s) {
    if (!arguments.length)
      return this._rts === -et ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var n = this.parent && this._ts ? ts(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -et ? 0 : this._rts, this.totalTime(Ar(-Math.abs(this._delay), this.totalDuration(), n), s !== !1), us(this), Ru(this);
  }, t.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Mi(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== et && (this._tTime -= et)))), this) : this._ps;
  }, t.startTime = function(i) {
    if (arguments.length) {
      this._start = at(i);
      var s = this.parent || this._dp;
      return s && (s._sort || !this.parent) && pe(s, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(i) {
    return this._start + (Ot(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(i) {
    var s = this.parent || this._dp;
    return s ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ts(s.rawTime(i), this) : this._tTime : this._tTime;
  }, t.revert = function(i) {
    i === void 0 && (i = Pu);
    var s = St;
    return St = i, sa(this) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), St = s, this;
  }, t.globalTime = function(i) {
    for (var s = this, n = arguments.length ? i : s.rawTime(); s; )
      n = s._start + n / (Math.abs(s._ts) || 1), s = s._dp;
    return !this.parent && this._sat ? this._sat.globalTime(i) : n;
  }, t.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, $a(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(i) {
    if (arguments.length) {
      var s = this._time;
      return this._rDelay = i, $a(this), s ? this.time(s) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, t.seek = function(i, s) {
    return this.totalTime(Qt(this, i), Ot(s));
  }, t.restart = function(i, s) {
    return this.play().totalTime(i ? -this._delay : 0, Ot(s)), this._dur || (this._zTime = -et), this;
  }, t.play = function(i, s) {
    return i != null && this.seek(i, s), this.reversed(!1).paused(!1);
  }, t.reverse = function(i, s) {
    return i != null && this.seek(i || this.totalDuration(), s), this.reversed(!0).paused(!1);
  }, t.pause = function(i, s) {
    return i != null && this.seek(i, s), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -et : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -et, this;
  }, t.isActive = function() {
    var i = this.parent || this._dp, s = this._start, n;
    return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= s && n < this.endTime(!0) - et);
  }, t.eventCallback = function(i, s, n) {
    var a = this.vars;
    return arguments.length > 1 ? (s ? (a[i] = s, n && (a[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = s)) : delete a[i], this) : a[i];
  }, t.then = function(i) {
    var s = this, n = s._prom;
    return new Promise(function(a) {
      var o = dt(i) ? i : Eh, h = function() {
        var c = s.then;
        s.then = null, n && n(), dt(o) && (o = o(s)) && (o.then || o === s) && (s.then = c), a(o), s.then = c;
      };
      s._initted && s.totalProgress() === 1 && s._ts >= 0 || !s._tTime && s._ts < 0 ? h() : s._prom = h;
    });
  }, t.kill = function() {
    Ki(this);
  }, r;
}();
qt(pr.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -et,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Et = /* @__PURE__ */ function(r) {
  yh(t, r);
  function t(i, s) {
    var n;
    return i === void 0 && (i = {}), n = r.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = Ot(i.sortChildren), ot && pe(i.parent || ot, Ae(n), s), i.reversed && n.reverse(), i.paused && n.paused(!0), i.scrollTrigger && Ih(Ae(n), i.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(s, n, a) {
    return rr(0, arguments, this), this;
  }, e.from = function(s, n, a) {
    return rr(1, arguments, this), this;
  }, e.fromTo = function(s, n, a, o) {
    return rr(2, arguments, this), this;
  }, e.set = function(s, n, a) {
    return n.duration = 0, n.parent = this, ir(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new xt(s, n, Qt(this, a), 1), this;
  }, e.call = function(s, n, a) {
    return pe(this, xt.delayedCall(0, s, n), a);
  }, e.staggerTo = function(s, n, a, o, h, l, c) {
    return a.duration = n, a.stagger = a.stagger || o, a.onComplete = l, a.onCompleteParams = c, a.parent = this, new xt(s, a, Qt(this, h)), this;
  }, e.staggerFrom = function(s, n, a, o, h, l, c) {
    return a.runBackwards = 1, ir(a).immediateRender = Ot(a.immediateRender), this.staggerTo(s, n, a, o, h, l, c);
  }, e.staggerFromTo = function(s, n, a, o, h, l, c, u) {
    return o.startAt = a, ir(o).immediateRender = Ot(o.immediateRender), this.staggerTo(s, n, o, h, l, c, u);
  }, e.render = function(s, n, a) {
    var o = this._time, h = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, c = s <= 0 ? 0 : at(s), u = this._zTime < 0 != s < 0 && (this._initted || !l), f, d, g, p, m, _, y, x, b, v, A, S;
    if (this !== ot && c > h && s >= 0 && (c = h), c !== this._tTime || a || u) {
      if (o !== this._time && l && (c += this._time - o, s += this._time - o), f = c, b = this._start, x = this._ts, _ = !x, u && (l || (o = this._zTime), (s || !n) && (this._zTime = s)), this._repeat) {
        if (A = this._yoyo, m = l + this._rDelay, this._repeat < -1 && s < 0)
          return this.totalTime(m * 100 + s, n, a);
        if (f = at(c % m), c === h ? (p = this._repeat, f = l) : (v = at(c / m), p = ~~v, p && p === v && (f = l, p--), f > l && (f = l)), v = Ci(this._tTime, m), !o && this._tTime && v !== p && this._tTime - v * m - this._dur <= 0 && (v = p), A && p & 1 && (f = l - f, S = 1), p !== v && !this._lock) {
          var C = A && v & 1, T = C === (A && p & 1);
          if (p < v && (C = !C), o = C ? 0 : c % l ? l : c, this._lock = 1, this.render(o || (S ? 0 : at(p * m)), n, !l)._lock = 0, this._tTime = c, !n && this.parent && Yt(this, "onRepeat"), this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1, v = p), o && o !== this._time || _ !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (l = this._dur, h = this._tDur, T && (this._lock = 2, o = C ? l : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !S && this.invalidate()), this._lock = 0, !this._ts && !_)
            return this;
          Hh(this, S);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = Ou(this, at(o), at(f)), y && (c -= f - (f = y._start))), this._tTime = c, this._time = f, this._act = !x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = s, o = 0), !o && c && l && !n && !v && (Yt(this, "onStart"), this._tTime !== c))
        return this;
      if (f >= o && s >= 0)
        for (d = this._first; d; ) {
          if (g = d._next, (d._act || f >= d._start) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(s, n, a);
            if (d.render(d._ts > 0 ? (f - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (f - d._start) * d._ts, n, a), f !== this._time || !this._ts && !_) {
              y = 0, g && (c += this._zTime = -et);
              break;
            }
          }
          d = g;
        }
      else {
        d = this._last;
        for (var P = s < 0 ? s : f; d; ) {
          if (g = d._prev, (d._act || P <= d._end) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(s, n, a);
            if (d.render(d._ts > 0 ? (P - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (P - d._start) * d._ts, n, a || St && sa(d)), f !== this._time || !this._ts && !_) {
              y = 0, g && (c += this._zTime = P ? -et : et);
              break;
            }
          }
          d = g;
        }
      }
      if (y && !n && (this.pause(), y.render(f >= o ? 0 : -et)._zTime = f >= o ? 1 : -1, this._ts))
        return this._start = b, us(this), this.render(s, n, a);
      this._onUpdate && !n && Yt(this, "onUpdate", !0), (c === h && this._tTime >= this.totalDuration() || !c && o) && (b === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((s || !l) && (c === h && this._ts > 0 || !c && this._ts < 0) && ze(this, 1), !n && !(s < 0 && !o) && (c || o || !h) && (Yt(this, c === h && s >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < h && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(s, n) {
    var a = this;
    if (Me(n) || (n = Qt(this, n, s)), !(s instanceof pr)) {
      if (Mt(s))
        return s.forEach(function(o) {
          return a.add(o, n);
        }), this;
      if (wt(s))
        return this.addLabel(s, n);
      if (dt(s))
        s = xt.delayedCall(0, s);
      else
        return this;
    }
    return this !== s ? pe(this, s, n) : this;
  }, e.getChildren = function(s, n, a, o) {
    s === void 0 && (s = !0), n === void 0 && (n = !0), a === void 0 && (a = !0), o === void 0 && (o = -te);
    for (var h = [], l = this._first; l; )
      l._start >= o && (l instanceof xt ? n && h.push(l) : (a && h.push(l), s && h.push.apply(h, l.getChildren(!0, n, a)))), l = l._next;
    return h;
  }, e.getById = function(s) {
    for (var n = this.getChildren(1, 1, 1), a = n.length; a--; )
      if (n[a].vars.id === s)
        return n[a];
  }, e.remove = function(s) {
    return wt(s) ? this.removeLabel(s) : dt(s) ? this.killTweensOf(s) : (s.parent === this && cs(this, s), s === this._recent && (this._recent = this._last), si(this));
  }, e.totalTime = function(s, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = at(Vt.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))), r.prototype.totalTime.call(this, s, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(s, n) {
    return this.labels[s] = Qt(this, n), this;
  }, e.removeLabel = function(s) {
    return delete this.labels[s], this;
  }, e.addPause = function(s, n, a) {
    var o = xt.delayedCall(0, n || ur, a);
    return o.data = "isPause", this._hasPause = 1, pe(this, o, Qt(this, s));
  }, e.removePause = function(s) {
    var n = this._first;
    for (s = Qt(this, s); n; )
      n._start === s && n.data === "isPause" && ze(n), n = n._next;
  }, e.killTweensOf = function(s, n, a) {
    for (var o = this.getTweensOf(s, a), h = o.length; h--; )
      Fe !== o[h] && o[h].kill(s, n);
    return this;
  }, e.getTweensOf = function(s, n) {
    for (var a = [], o = ee(s), h = this._first, l = Me(n), c; h; )
      h instanceof xt ? Mu(h._targets, o) && (l ? (!Fe || h._initted && h._ts) && h.globalTime(0) <= n && h.globalTime(h.totalDuration()) > n : !n || h.isActive()) && a.push(h) : (c = h.getTweensOf(o, n)).length && a.push.apply(a, c), h = h._next;
    return a;
  }, e.tweenTo = function(s, n) {
    n = n || {};
    var a = this, o = Qt(a, s), h = n, l = h.startAt, c = h.onStart, u = h.onStartParams, f = h.immediateRender, d, g = xt.to(a, qt({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: n.duration || Math.abs((o - (l && "time" in l ? l.time : a._time)) / a.timeScale()) || et,
      onStart: function() {
        if (a.pause(), !d) {
          var m = n.duration || Math.abs((o - (l && "time" in l ? l.time : a._time)) / a.timeScale());
          g._dur !== m && Pi(g, m, 0, 1).render(g._time, !0, !0), d = 1;
        }
        c && c.apply(g, u || []);
      }
    }, n));
    return f ? g.render(0) : g;
  }, e.tweenFromTo = function(s, n, a) {
    return this.tweenTo(n, qt({
      startAt: {
        time: Qt(this, s)
      }
    }, a));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(s) {
    return s === void 0 && (s = this._time), ja(this, Qt(this, s));
  }, e.previousLabel = function(s) {
    return s === void 0 && (s = this._time), ja(this, Qt(this, s), 1);
  }, e.currentLabel = function(s) {
    return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + et);
  }, e.shiftChildren = function(s, n, a) {
    a === void 0 && (a = 0);
    var o = this._first, h = this.labels, l;
    for (s = at(s); o; )
      o._start >= a && (o._start += s, o._end += s), o = o._next;
    if (n)
      for (l in h)
        h[l] >= a && (h[l] += s);
    return si(this);
  }, e.invalidate = function(s) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(s), n = n._next;
    return r.prototype.invalidate.call(this, s);
  }, e.clear = function(s) {
    s === void 0 && (s = !0);
    for (var n = this._first, a; n; )
      a = n._next, this.remove(n), n = a;
    return this._dp && (this._time = this._tTime = this._pTime = 0), s && (this.labels = {}), si(this);
  }, e.totalDuration = function(s) {
    var n = 0, a = this, o = a._last, h = te, l, c, u;
    if (arguments.length)
      return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -s : s));
    if (a._dirty) {
      for (u = a.parent; o; )
        l = o._prev, o._dirty && o.totalDuration(), c = o._start, c > h && a._sort && o._ts && !a._lock ? (a._lock = 1, pe(a, o, c - o._delay, 1)._lock = 0) : h = c, c < 0 && o._ts && (n -= c, (!u && !a._dp || u && u.smoothChildTiming) && (a._start += at(c / a._ts), a._time -= c, a._tTime -= c), a.shiftChildren(-c, !1, -1 / 0), h = 0), o._end > n && o._ts && (n = o._end), o = l;
      Pi(a, a === ot && a._time > n ? a._time : n, 1, 1), a._dirty = 0;
    }
    return a._tDur;
  }, t.updateRoot = function(s) {
    if (ot._ts && (Mh(ot, ts(s, ot)), Ch = Vt.frame), Vt.frame >= Na) {
      Na += jt.autoSleep || 120;
      var n = ot._first;
      if ((!n || !n._ts) && jt.autoSleep && Vt._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || Vt.sleep();
      }
    }
  }, t;
}(pr);
qt(Et.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Zu = function(t, e, i, s, n, a, o) {
  var h = new Dt(this._pt, t, e, 0, 1, il, null, n), l = 0, c = 0, u, f, d, g, p, m, _, y;
  for (h.b = i, h.e = s, i += "", s += "", (_ = ~s.indexOf("random(")) && (s = dr(s)), a && (y = [i, s], a(y, t, e), i = y[0], s = y[1]), f = i.match(As) || []; u = As.exec(s); )
    g = u[0], p = s.substring(l, u.index), d ? d = (d + 1) % 5 : p.substr(-5) === "rgba(" && (d = 1), g !== f[c++] && (m = parseFloat(f[c - 1]) || 0, h._pt = {
      _next: h._pt,
      p: p || c === 1 ? p : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: g.charAt(1) === "=" ? xi(m, g) - m : parseFloat(g) - m,
      m: d && d < 4 ? Math.round : 0
    }, l = As.lastIndex);
  return h.c = l < s.length ? s.substring(l, s.length) : "", h.fp = o, (vh.test(s) || _) && (h.e = 0), this._pt = h, h;
}, na = function(t, e, i, s, n, a, o, h, l, c) {
  dt(s) && (s = s(n || 0, t, a));
  var u = t[e], f = i !== "get" ? i : dt(u) ? l ? t[e.indexOf("set") || !dt(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : u, d = dt(u) ? l ? id : tl : oa, g;
  if (wt(s) && (~s.indexOf("random(") && (s = dr(s)), s.charAt(1) === "=" && (g = xi(f, s) + (Ct(f) || 0), (g || g === 0) && (s = g))), !c || f !== s || bn)
    return !isNaN(f * s) && s !== "" ? (g = new Dt(this._pt, t, e, +f || 0, s - (f || 0), typeof u == "boolean" ? sd : el, 0, d), l && (g.fp = l), o && g.modifier(o, this, t), this._pt = g) : (!u && !(e in t) && ta(e, s), Zu.call(this, t, e, f, s, d, h || jt.stringFilter, l));
}, Qu = function(t, e, i, s, n) {
  if (dt(t) && (t = sr(t, n, e, i, s)), !_e(t) || t.style && t.nodeType || Mt(t) || bh(t))
    return wt(t) ? sr(t, n, e, i, s) : t;
  var a = {}, o;
  for (o in t)
    a[o] = sr(t[o], n, e, i, s);
  return a;
}, Zh = function(t, e, i, s, n, a) {
  var o, h, l, c;
  if (Nt[t] && (o = new Nt[t]()).init(n, o.rawVars ? e[t] : Qu(e[t], s, n, a, i), i, s, a) !== !1 && (i._pt = h = new Dt(i._pt, n, t, 0, 1, o.render, o, 0, o.priority), i !== _i))
    for (l = i._ptLookup[i._targets.indexOf(n)], c = o._props.length; c--; )
      l[o._props[c]] = h;
  return o;
}, Fe, bn, aa = function r(t, e, i) {
  var s = t.vars, n = s.ease, a = s.startAt, o = s.immediateRender, h = s.lazy, l = s.onUpdate, c = s.runBackwards, u = s.yoyoEase, f = s.keyframes, d = s.autoRevert, g = t._dur, p = t._startAt, m = t._targets, _ = t.parent, y = _ && _.data === "nested" ? _.vars.targets : m, x = t._overwrite === "auto" && !Kn, b = t.timeline, v, A, S, C, T, P, E, L, B, G, I, M, R;
  if (b && (!f || !n) && (n = "none"), t._ease = ni(n, Ai.ease), t._yEase = u ? Xh(ni(u === !0 ? n : u, Ai.ease)) : 0, u && t._yoyo && !t._repeat && (u = t._yEase, t._yEase = t._ease, t._ease = u), t._from = !b && !!s.runBackwards, !b || f && !s.stagger) {
    if (L = m[0] ? ri(m[0]).harness : 0, M = L && s[L.prop], v = Jr(s, ea), p && (p._zTime < 0 && p.progress(1), e < 0 && c && o && !d ? p.render(-1, !0) : p.revert(c && g ? Yr : Cu), p._lazy = 0), a) {
      if (ze(t._startAt = xt.set(m, qt({
        data: "isStart",
        overwrite: !1,
        parent: _,
        immediateRender: !0,
        lazy: !p && Ot(h),
        startAt: null,
        delay: 0,
        onUpdate: l && function() {
          return Yt(t, "onUpdate");
        },
        stagger: 0
      }, a))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (St || !o && !d) && t._startAt.revert(Yr), o && g && e <= 0 && i <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (c && g && !p) {
      if (e && (o = !1), S = qt({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !p && Ot(h),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: _
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, v), M && (S[L.prop] = M), ze(t._startAt = xt.set(m, S)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (St ? t._startAt.revert(Yr) : t._startAt.render(-1, !0)), t._zTime = e, !o)
        r(t._startAt, et, et);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, h = g && Ot(h) || h && !g, A = 0; A < m.length; A++) {
      if (T = m[A], E = T._gsap || ra(m)[A]._gsap, t._ptLookup[A] = G = {}, pn[E.id] && Le.length && Qr(), I = y === m ? A : y.indexOf(T), L && (B = new L()).init(T, M || v, t, I, y) !== !1 && (t._pt = C = new Dt(t._pt, T, B.name, 0, 1, B.render, B, 0, B.priority), B._props.forEach(function(K) {
        G[K] = C;
      }), B.priority && (P = 1)), !L || M)
        for (S in v)
          Nt[S] && (B = Zh(S, v, t, I, T, y)) ? B.priority && (P = 1) : G[S] = C = na.call(t, T, S, "get", v[S], I, y, 0, s.stringFilter);
      t._op && t._op[A] && t.kill(T, t._op[A]), x && t._pt && (Fe = t, ot.killTweensOf(T, G, t.globalTime(e)), R = !t.parent, Fe = 0), t._pt && h && (pn[E.id] = 1);
    }
    P && rl(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = l, t._initted = (!t._op || t._pt) && !R, f && e <= 0 && b.render(te, !0, !0);
}, Ju = function(t, e, i, s, n, a, o, h) {
  var l = (t._pt && t._ptCache || (t._ptCache = {}))[e], c, u, f, d;
  if (!l)
    for (l = t._ptCache[e] = [], f = t._ptLookup, d = t._targets.length; d--; ) {
      if (c = f[d][e], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== e && c.fp !== e; )
          c = c._next;
      if (!c)
        return bn = 1, t.vars[e] = "+=0", aa(t, o), bn = 0, h ? cr(e + " not eligible for reset") : 1;
      l.push(c);
    }
  for (d = l.length; d--; )
    u = l[d], c = u._pt || u, c.s = (s || s === 0) && !n ? s : c.s + (s || 0) + a * c.c, c.c = i - c.s, u.e && (u.e = mt(i) + Ct(u.e)), u.b && (u.b = c.s + Ct(u.b));
}, td = function(t, e) {
  var i = t[0] ? ri(t[0]).harness : 0, s = i && i.aliases, n, a, o, h;
  if (!s)
    return e;
  n = Ti({}, e);
  for (a in s)
    if (a in n)
      for (h = s[a].split(","), o = h.length; o--; )
        n[h[o]] = n[a];
  return n;
}, ed = function(t, e, i, s) {
  var n = e.ease || s || "power1.inOut", a, o;
  if (Mt(e))
    o = i[t] || (i[t] = []), e.forEach(function(h, l) {
      return o.push({
        t: l / (e.length - 1) * 100,
        v: h,
        e: n
      });
    });
  else
    for (a in e)
      o = i[a] || (i[a] = []), a === "ease" || o.push({
        t: parseFloat(t),
        v: e[a],
        e: n
      });
}, sr = function(t, e, i, s, n) {
  return dt(t) ? t.call(e, i, s, n) : wt(t) && ~t.indexOf("random(") ? dr(t) : t;
}, Qh = ia + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Jh = {};
Lt(Qh + ",id,stagger,delay,duration,paused,scrollTrigger", function(r) {
  return Jh[r] = 1;
});
var xt = /* @__PURE__ */ function(r) {
  yh(t, r);
  function t(i, s, n, a) {
    var o;
    typeof s == "number" && (n.duration = s, s = n, n = null), o = r.call(this, a ? s : ir(s)) || this;
    var h = o.vars, l = h.duration, c = h.delay, u = h.immediateRender, f = h.stagger, d = h.overwrite, g = h.keyframes, p = h.defaults, m = h.scrollTrigger, _ = h.yoyoEase, y = s.parent || ot, x = (Mt(i) || bh(i) ? Me(i[0]) : "length" in s) ? [i] : ee(i), b, v, A, S, C, T, P, E;
    if (o._targets = x.length ? ra(x) : cr("GSAP target " + i + " not found. https://gsap.com", !jt.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = d, g || f || Pr(l) || Pr(c)) {
      if (s = o.vars, b = o.timeline = new Et({
        data: "nested",
        defaults: p || {},
        targets: y && y.data === "nested" ? y.vars.targets : x
      }), b.kill(), b.parent = b._dp = Ae(o), b._start = 0, f || Pr(l) || Pr(c)) {
        if (S = x.length, P = f && Dh(f), _e(f))
          for (C in f)
            ~Qh.indexOf(C) && (E || (E = {}), E[C] = f[C]);
        for (v = 0; v < S; v++)
          A = Jr(s, Jh), A.stagger = 0, _ && (A.yoyoEase = _), E && Ti(A, E), T = x[v], A.duration = +sr(l, Ae(o), v, T, x), A.delay = (+sr(c, Ae(o), v, T, x) || 0) - o._delay, !f && S === 1 && A.delay && (o._delay = c = A.delay, o._start += c, A.delay = 0), b.to(T, A, P ? P(v, T, x) : 0), b._ease = $.none;
        b.duration() ? l = c = 0 : o.timeline = 0;
      } else if (g) {
        ir(qt(b.vars.defaults, {
          ease: "none"
        })), b._ease = ni(g.ease || s.ease || "none");
        var L = 0, B, G, I;
        if (Mt(g))
          g.forEach(function(M) {
            return b.to(x, M, ">");
          }), b.duration();
        else {
          A = {};
          for (C in g)
            C === "ease" || C === "easeEach" || ed(C, g[C], A, g.easeEach);
          for (C in A)
            for (B = A[C].sort(function(M, R) {
              return M.t - R.t;
            }), L = 0, v = 0; v < B.length; v++)
              G = B[v], I = {
                ease: G.e,
                duration: (G.t - (v ? B[v - 1].t : 0)) / 100 * l
              }, I[C] = G.v, b.to(x, I, L), L += I.duration;
          b.duration() < l && b.to({}, {
            duration: l - b.duration()
          });
        }
      }
      l || o.duration(l = b.duration());
    } else
      o.timeline = 0;
    return d === !0 && !Kn && (Fe = Ae(o), ot.killTweensOf(x), Fe = 0), pe(y, Ae(o), n), s.reversed && o.reverse(), s.paused && o.paused(!0), (u || !l && !g && o._start === at(y._time) && Ot(u) && Fu(Ae(o)) && y.data !== "nested") && (o._tTime = -et, o.render(Math.max(0, -c) || 0)), m && Ih(Ae(o), m), o;
  }
  var e = t.prototype;
  return e.render = function(s, n, a) {
    var o = this._time, h = this._tDur, l = this._dur, c = s < 0, u = s > h - et && !c ? h : s < et ? 0 : s, f, d, g, p, m, _, y, x, b;
    if (!l)
      Bu(this, s, n, a);
    else if (u !== this._tTime || !s || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (f = u, x = this.timeline, this._repeat) {
        if (p = l + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(p * 100 + s, n, a);
        if (f = at(u % p), u === h ? (g = this._repeat, f = l) : (m = at(u / p), g = ~~m, g && g === m ? (f = l, g--) : f > l && (f = l)), _ = this._yoyo && g & 1, _ && (b = this._yEase, f = l - f), m = Ci(this._tTime, p), f === o && !a && this._initted && g === m)
          return this._tTime = u, this;
        g !== m && (x && this._yEase && Hh(x, _), this.vars.repeatRefresh && !_ && !this._lock && f !== p && this._initted && (this._lock = a = 1, this.render(at(p * g), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Bh(this, c ? s : f, a, n, u))
          return this._tTime = 0, this;
        if (o !== this._time && !(a && this.vars.repeatRefresh && g !== m))
          return this;
        if (l !== this._dur)
          return this.render(s, n, a);
      }
      if (this._tTime = u, this._time = f, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (b || this._ease)(f / l), this._from && (this.ratio = y = 1 - y), !o && u && !n && !m && (Yt(this, "onStart"), this._tTime !== u))
        return this;
      for (d = this._pt; d; )
        d.r(y, d.d), d = d._next;
      x && x.render(s < 0 ? s : x._dur * x._ease(f / this._dur), n, a) || this._startAt && (this._zTime = s), this._onUpdate && !n && (c && gn(this, s, n, a), Yt(this, "onUpdate")), this._repeat && g !== m && this.vars.onRepeat && !n && this.parent && Yt(this, "onRepeat"), (u === this._tDur || !u) && this._tTime === u && (c && !this._onUpdate && gn(this, s, !0, !0), (s || !l) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && ze(this, 1), !n && !(c && !o) && (u || o || _) && (Yt(this, u === h ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < h && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(s) {
    return (!s || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(s), r.prototype.invalidate.call(this, s);
  }, e.resetTo = function(s, n, a, o, h) {
    fr || Vt.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || aa(this, l), c = this._ease(l / this._dur), Ju(this, s, n, a, o, c, l, h) ? this.resetTo(s, n, a, o, 1) : (ds(this, 0), this.parent || Rh(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(s, n) {
    if (n === void 0 && (n = "all"), !s && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Ki(this) : this.scrollTrigger && this.scrollTrigger.kill(!!St), this;
    if (this.timeline) {
      var a = this.timeline.totalDuration();
      return this.timeline.killTweensOf(s, n, Fe && Fe.vars.overwrite !== !0)._first || Ki(this), this.parent && a !== this.timeline.totalDuration() && Pi(this, this._dur * this.timeline._tDur / a, 0, 1), this;
    }
    var o = this._targets, h = s ? ee(s) : o, l = this._ptLookup, c = this._pt, u, f, d, g, p, m, _;
    if ((!n || n === "all") && Eu(o, h))
      return n === "all" && (this._pt = 0), Ki(this);
    for (u = this._op = this._op || [], n !== "all" && (wt(n) && (p = {}, Lt(n, function(y) {
      return p[y] = 1;
    }), n = p), n = td(o, n)), _ = o.length; _--; )
      if (~h.indexOf(o[_])) {
        f = l[_], n === "all" ? (u[_] = n, g = f, d = {}) : (d = u[_] = u[_] || {}, g = n);
        for (p in g)
          m = f && f[p], m && ((!("kill" in m.d) || m.d.kill(p) === !0) && cs(this, m, "_pt"), delete f[p]), d !== "all" && (d[p] = 1);
      }
    return this._initted && !this._pt && c && Ki(this), this;
  }, t.to = function(s, n) {
    return new t(s, n, arguments[2]);
  }, t.from = function(s, n) {
    return rr(1, arguments);
  }, t.delayedCall = function(s, n, a, o) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: s,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: a,
      onReverseCompleteParams: a,
      callbackScope: o
    });
  }, t.fromTo = function(s, n, a) {
    return rr(2, arguments);
  }, t.set = function(s, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(s, n);
  }, t.killTweensOf = function(s, n, a) {
    return ot.killTweensOf(s, n, a);
  }, t;
}(pr);
qt(xt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Lt("staggerTo,staggerFrom,staggerFromTo", function(r) {
  xt[r] = function() {
    var t = new Et(), e = _n.call(arguments, 0);
    return e.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), t[r].apply(t, e);
  };
});
var oa = function(t, e, i) {
  return t[e] = i;
}, tl = function(t, e, i) {
  return t[e](i);
}, id = function(t, e, i, s) {
  return t[e](s.fp, i);
}, rd = function(t, e, i) {
  return t.setAttribute(e, i);
}, ha = function(t, e) {
  return dt(t[e]) ? tl : Zn(t[e]) && t.setAttribute ? rd : oa;
}, el = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, sd = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, il = function(t, e) {
  var i = e._pt, s = "";
  if (!t && e.b)
    s = e.b;
  else if (t === 1 && e.e)
    s = e.e;
  else {
    for (; i; )
      s = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + s, i = i._next;
    s += e.c;
  }
  e.set(e.t, e.p, s, e);
}, la = function(t, e) {
  for (var i = e._pt; i; )
    i.r(t, i.d), i = i._next;
}, nd = function(t, e, i, s) {
  for (var n = this._pt, a; n; )
    a = n._next, n.p === s && n.modifier(t, e, i), n = a;
}, ad = function(t) {
  for (var e = this._pt, i, s; e; )
    s = e._next, e.p === t && !e.op || e.op === t ? cs(this, e, "_pt") : e.dep || (i = 1), e = s;
  return !i;
}, od = function(t, e, i, s) {
  s.mSet(t, e, s.m.call(s.tween, i, s.mt), s);
}, rl = function(t) {
  for (var e = t._pt, i, s, n, a; e; ) {
    for (i = e._next, s = n; s && s.pr > e.pr; )
      s = s._next;
    (e._prev = s ? s._prev : a) ? e._prev._next = e : n = e, (e._next = s) ? s._prev = e : a = e, e = i;
  }
  t._pt = n;
}, Dt = /* @__PURE__ */ function() {
  function r(e, i, s, n, a, o, h, l, c) {
    this.t = i, this.s = n, this.c = a, this.p = s, this.r = o || el, this.d = h || this, this.set = l || oa, this.pr = c || 0, this._next = e, e && (e._prev = this);
  }
  var t = r.prototype;
  return t.modifier = function(i, s, n) {
    this.mSet = this.mSet || this.set, this.set = od, this.m = i, this.mt = n, this.tween = s;
  }, r;
}();
Lt(ia + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(r) {
  return ea[r] = 1;
});
Ht.TweenMax = Ht.TweenLite = xt;
Ht.TimelineLite = Ht.TimelineMax = Et;
ot = new Et({
  sortChildren: !1,
  defaults: Ai,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
jt.stringFilter = jh;
var ai = [], jr = {}, hd = [], Ha = 0, ld = 0, ks = function(t) {
  return (jr[t] || hd).map(function(e) {
    return e();
  });
}, wn = function() {
  var t = Date.now(), e = [];
  t - Ha > 2 && (ks("matchMediaInit"), ai.forEach(function(i) {
    var s = i.queries, n = i.conditions, a, o, h, l;
    for (o in s)
      a = fe.matchMedia(s[o]).matches, a && (h = 1), a !== n[o] && (n[o] = a, l = 1);
    l && (i.revert(), h && e.push(i));
  }), ks("matchMediaRevert"), e.forEach(function(i) {
    return i.onMatch(i, function(s) {
      return i.add(null, s);
    });
  }), Ha = t, ks("matchMedia"));
}, sl = /* @__PURE__ */ function() {
  function r(e, i) {
    this.selector = i && yn(i), this.data = [], this._r = [], this.isReverted = !1, this.id = ld++, e && this.add(e);
  }
  var t = r.prototype;
  return t.add = function(i, s, n) {
    dt(i) && (n = s, s = i, i = dt);
    var a = this, o = function() {
      var l = nt, c = a.selector, u;
      return l && l !== a && l.data.push(a), n && (a.selector = yn(n)), nt = a, u = s.apply(a, arguments), dt(u) && a._r.push(u), nt = l, a.selector = c, a.isReverted = !1, u;
    };
    return a.last = o, i === dt ? o(a, function(h) {
      return a.add(null, h);
    }) : i ? a[i] = o : o;
  }, t.ignore = function(i) {
    var s = nt;
    nt = null, i(this), nt = s;
  }, t.getTweens = function() {
    var i = [];
    return this.data.forEach(function(s) {
      return s instanceof r ? i.push.apply(i, s.getTweens()) : s instanceof xt && !(s.parent && s.parent.data === "nested") && i.push(s);
    }), i;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(i, s) {
    var n = this;
    if (i ? function() {
      for (var o = n.getTweens(), h = n.data.length, l; h--; )
        l = n.data[h], l.data === "isFlip" && (l.revert(), l.getChildren(!0, !0, !1).forEach(function(c) {
          return o.splice(o.indexOf(c), 1);
        }));
      for (o.map(function(c) {
        return {
          g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
          t: c
        };
      }).sort(function(c, u) {
        return u.g - c.g || -1 / 0;
      }).forEach(function(c) {
        return c.t.revert(i);
      }), h = n.data.length; h--; )
        l = n.data[h], l instanceof Et ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof xt) && l.revert && l.revert(i);
      n._r.forEach(function(c) {
        return c(i, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), s)
      for (var a = ai.length; a--; )
        ai[a].id === this.id && ai.splice(a, 1);
  }, t.revert = function(i) {
    this.kill(i || {});
  }, r;
}(), cd = /* @__PURE__ */ function() {
  function r(e) {
    this.contexts = [], this.scope = e, nt && nt.data.push(this);
  }
  var t = r.prototype;
  return t.add = function(i, s, n) {
    _e(i) || (i = {
      matches: i
    });
    var a = new sl(0, n || this.scope), o = a.conditions = {}, h, l, c;
    nt && !a.selector && (a.selector = nt.selector), this.contexts.push(a), s = a.add("onMatch", s), a.queries = i;
    for (l in i)
      l === "all" ? c = 1 : (h = fe.matchMedia(i[l]), h && (ai.indexOf(a) < 0 && ai.push(a), (o[l] = h.matches) && (c = 1), h.addListener ? h.addListener(wn) : h.addEventListener("change", wn)));
    return c && s(a, function(u) {
      return a.add(null, u);
    }), this;
  }, t.revert = function(i) {
    this.kill(i || {});
  }, t.kill = function(i) {
    this.contexts.forEach(function(s) {
      return s.kill(i, !0);
    });
  }, r;
}(), es = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    e.forEach(function(s) {
      return Vh(s);
    });
  },
  timeline: function(t) {
    return new Et(t);
  },
  getTweensOf: function(t, e) {
    return ot.getTweensOf(t, e);
  },
  getProperty: function(t, e, i, s) {
    wt(t) && (t = ee(t)[0]);
    var n = ri(t || {}).get, a = i ? Eh : kh;
    return i === "native" && (i = ""), t && (e ? a((Nt[e] && Nt[e].get || n)(t, e, i, s)) : function(o, h, l) {
      return a((Nt[o] && Nt[o].get || n)(t, o, h, l));
    });
  },
  quickSetter: function(t, e, i) {
    if (t = ee(t), t.length > 1) {
      var s = t.map(function(c) {
        return Gt.quickSetter(c, e, i);
      }), n = s.length;
      return function(c) {
        for (var u = n; u--; )
          s[u](c);
      };
    }
    t = t[0] || {};
    var a = Nt[e], o = ri(t), h = o.harness && (o.harness.aliases || {})[e] || e, l = a ? function(c) {
      var u = new a();
      _i._pt = 0, u.init(t, i ? c + i : c, _i, 0, [t]), u.render(1, u), _i._pt && la(1, _i);
    } : o.set(t, h);
    return a ? l : function(c) {
      return l(t, h, i ? c + i : c, o, 1);
    };
  },
  quickTo: function(t, e, i) {
    var s, n = Gt.to(t, qt((s = {}, s[e] = "+=0.1", s.paused = !0, s.stagger = 0, s), i || {})), a = function(h, l, c) {
      return n.resetTo(e, h, l, c);
    };
    return a.tween = n, a;
  },
  isTweening: function(t) {
    return ot.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = ni(t.ease, Ai.ease)), Va(Ai, t || {});
  },
  config: function(t) {
    return Va(jt, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, i = t.effect, s = t.plugins, n = t.defaults, a = t.extendTimeline;
    (s || "").split(",").forEach(function(o) {
      return o && !Nt[o] && !Ht[o] && cr(e + " effect requires " + o + " plugin.");
    }), Ts[e] = function(o, h, l) {
      return i(ee(o), qt(h || {}, n), l);
    }, a && (Et.prototype[e] = function(o, h, l) {
      return this.add(Ts[e](o, _e(h) ? h : (l = h) && {}, this), l);
    });
  },
  registerEase: function(t, e) {
    $[t] = ni(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? ni(t, e) : $;
  },
  getById: function(t) {
    return ot.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var i = new Et(t), s, n;
    for (i.smoothChildTiming = Ot(t.smoothChildTiming), ot.remove(i), i._dp = 0, i._time = i._tTime = ot._time, s = ot._first; s; )
      n = s._next, (e || !(!s._dur && s instanceof xt && s.vars.onComplete === s._targets[0])) && pe(i, s, s._start - s._delay), s = n;
    return pe(ot, i, 0), i;
  },
  context: function(t, e) {
    return t ? new sl(t, e) : nt;
  },
  matchMedia: function(t) {
    return new cd(t);
  },
  matchMediaRefresh: function() {
    return ai.forEach(function(t) {
      var e = t.conditions, i, s;
      for (s in e)
        e[s] && (e[s] = !1, i = 1);
      i && t.revert();
    }) || wn();
  },
  addEventListener: function(t, e) {
    var i = jr[t] || (jr[t] = []);
    ~i.indexOf(e) || i.push(e);
  },
  removeEventListener: function(t, e) {
    var i = jr[t], s = i && i.indexOf(e);
    s >= 0 && i.splice(s, 1);
  },
  utils: {
    wrap: Nu,
    wrapYoyo: Vu,
    distribute: Dh,
    random: Gh,
    snap: zh,
    normalize: Wu,
    getUnit: Ct,
    clamp: Du,
    splitColor: Yh,
    toArray: ee,
    selector: yn,
    mapRange: Wh,
    pipe: Gu,
    unitize: Uu,
    interpolate: Yu,
    shuffle: Lh
  },
  install: Ah,
  effects: Ts,
  ticker: Vt,
  updateRoot: Et.updateRoot,
  plugins: Nt,
  globalTimeline: ot,
  core: {
    PropTween: Dt,
    globals: Th,
    Tween: xt,
    Timeline: Et,
    Animation: pr,
    getCache: ri,
    _removeLinkedListItem: cs,
    reverting: function() {
      return St;
    },
    context: function(t) {
      return t && nt && (nt.data.push(t), t._ctx = nt), nt;
    },
    suppressOverwrites: function(t) {
      return Kn = t;
    }
  }
};
Lt("to,from,fromTo,delayedCall,set,killTweensOf", function(r) {
  return es[r] = xt[r];
});
Vt.add(Et.updateRoot);
_i = es.to({}, {
  duration: 0
});
var ud = function(t, e) {
  for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
    i = i._next;
  return i;
}, dd = function(t, e) {
  var i = t._targets, s, n, a;
  for (s in e)
    for (n = i.length; n--; )
      a = t._ptLookup[n][s], a && (a = a.d) && (a._pt && (a = ud(a, s)), a && a.modifier && a.modifier(e[s], t, i[n], s));
}, Es = function(t, e) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(s, n, a) {
      a._onInit = function(o) {
        var h, l;
        if (wt(n) && (h = {}, Lt(n, function(c) {
          return h[c] = 1;
        }), n = h), e) {
          h = {};
          for (l in n)
            h[l] = e(n[l]);
          n = h;
        }
        dd(o, n);
      };
    }
  };
}, Gt = es.registerPlugin({
  name: "attr",
  init: function(t, e, i, s, n) {
    var a, o, h;
    this.tween = i;
    for (a in e)
      h = t.getAttribute(a) || "", o = this.add(t, "setAttribute", (h || 0) + "", e[a], s, n, 0, 0, a), o.op = a, o.b = h, this._props.push(a);
  },
  render: function(t, e) {
    for (var i = e._pt; i; )
      St ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, e) {
    for (var i = e.length; i--; )
      this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
  }
}, Es("roundProps", xn), Es("modifiers"), Es("snap", zh)) || es;
xt.version = Et.version = Gt.version = "3.14.2";
Sh = 1;
Qn() && Mi();
$.Power0;
$.Power1;
$.Power2;
$.Power3;
$.Power4;
$.Linear;
$.Quad;
$.Cubic;
$.Quart;
$.Quint;
$.Strong;
$.Elastic;
$.Back;
$.SteppedEase;
$.Bounce;
$.Sine;
$.Expo;
$.Circ;
/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var qa, Ie, bi, ca, ti, Ka, ua, fd = function() {
  return typeof window < "u";
}, ke = {}, qe = 180 / Math.PI, wi = Math.PI / 180, fi = Math.atan2, Za = 1e8, da = /([A-Z])/g, pd = /(left|right|width|margin|padding|x)/i, gd = /[\s,\(]\S/, me = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, vn = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, md = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, _d = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, yd = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, xd = function(t, e) {
  var i = e.s + e.c * t;
  e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
}, nl = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, al = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, bd = function(t, e, i) {
  return t.style[e] = i;
}, wd = function(t, e, i) {
  return t.style.setProperty(e, i);
}, vd = function(t, e, i) {
  return t._gsap[e] = i;
}, Sd = function(t, e, i) {
  return t._gsap.scaleX = t._gsap.scaleY = i;
}, Ad = function(t, e, i, s, n) {
  var a = t._gsap;
  a.scaleX = a.scaleY = i, a.renderTransform(n, a);
}, Td = function(t, e, i, s, n) {
  var a = t._gsap;
  a[e] = i, a.renderTransform(n, a);
}, ht = "transform", zt = ht + "Origin", Cd = function r(t, e) {
  var i = this, s = this.target, n = s.style, a = s._gsap;
  if (t in ke && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = me[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(o) {
        return i.tfm[o] = Te(s, o);
      }) : this.tfm[t] = a.x ? a[t] : Te(s, t), t === zt && (this.tfm.zOrigin = a.zOrigin);
    else
      return me.transform.split(",").forEach(function(o) {
        return r.call(i, o, e);
      });
    if (this.props.indexOf(ht) >= 0)
      return;
    a.svg && (this.svgo = s.getAttribute("data-svg-origin"), this.props.push(zt, e, "")), t = ht;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, ol = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Pd = function() {
  var t = this.props, e = this.target, i = e.style, s = e._gsap, n, a;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? e[t[n]](t[n + 2]) : e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(da, "-$1").toLowerCase());
  if (this.tfm) {
    for (a in this.tfm)
      s[a] = this.tfm[a];
    s.svg && (s.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = ua(), (!n || !n.isStart) && !i[ht] && (ol(i), s.zOrigin && i[zt] && (i[zt] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1);
  }
}, hl = function(t, e) {
  var i = {
    target: t,
    props: [],
    revert: Pd,
    save: Cd
  };
  return t._gsap || Gt.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(s) {
    return i.save(s);
  }), i;
}, ll, Sn = function(t, e) {
  var i = Ie.createElementNS ? Ie.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ie.createElement(t);
  return i && i.style ? i : Ie.createElement(t);
}, $t = function r(t, e, i) {
  var s = getComputedStyle(t);
  return s[e] || s.getPropertyValue(e.replace(da, "-$1").toLowerCase()) || s.getPropertyValue(e) || !i && r(t, ki(e) || e, 1) || "";
}, Qa = "O,Moz,ms,Ms,Webkit".split(","), ki = function(t, e, i) {
  var s = e || ti, n = s.style, a = 5;
  if (t in n && !i)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); a-- && !(Qa[a] + t in n); )
    ;
  return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? Qa[a] : "") + t;
}, An = function() {
  fd() && window.document && (qa = window, Ie = qa.document, bi = Ie.documentElement, ti = Sn("div") || {
    style: {}
  }, Sn("div"), ht = ki(ht), zt = ht + "Origin", ti.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ll = !!ki("perspective"), ua = Gt.core.reverting, ca = 1);
}, Ja = function(t) {
  var e = t.ownerSVGElement, i = Sn("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), s = t.cloneNode(!0), n;
  s.style.display = "block", i.appendChild(s), bi.appendChild(i);
  try {
    n = s.getBBox();
  } catch {
  }
  return i.removeChild(s), bi.removeChild(i), n;
}, to = function(t, e) {
  for (var i = e.length; i--; )
    if (t.hasAttribute(e[i]))
      return t.getAttribute(e[i]);
}, cl = function(t) {
  var e, i;
  try {
    e = t.getBBox();
  } catch {
    e = Ja(t), i = 1;
  }
  return e && (e.width || e.height) || i || (e = Ja(t)), e && !e.width && !e.x && !e.y ? {
    x: +to(t, ["x", "cx", "x1"]) || 0,
    y: +to(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, ul = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && cl(t));
}, Ge = function(t, e) {
  if (e) {
    var i = t.style, s;
    e in ke && e !== zt && (e = ht), i.removeProperty ? (s = e.substr(0, 2), (s === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(s === "--" ? e : e.replace(da, "-$1").toLowerCase())) : i.removeAttribute(e);
  }
}, Be = function(t, e, i, s, n, a) {
  var o = new Dt(t._pt, e, i, 0, 1, a ? al : nl);
  return t._pt = o, o.b = s, o.e = n, t._props.push(i), o;
}, eo = {
  deg: 1,
  rad: 1,
  turn: 1
}, Md = {
  grid: 1,
  flex: 1
}, Ue = function r(t, e, i, s) {
  var n = parseFloat(i) || 0, a = (i + "").trim().substr((n + "").length) || "px", o = ti.style, h = pd.test(e), l = t.tagName.toLowerCase() === "svg", c = (l ? "client" : "offset") + (h ? "Width" : "Height"), u = 100, f = s === "px", d = s === "%", g, p, m, _;
  if (s === a || !n || eo[s] || eo[a])
    return n;
  if (a !== "px" && !f && (n = r(t, e, i, "px")), _ = t.getCTM && ul(t), (d || a === "%") && (ke[e] || ~e.indexOf("adius")))
    return g = _ ? t.getBBox()[h ? "width" : "height"] : t[c], mt(d ? n / g * u : n / 100 * g);
  if (o[h ? "width" : "height"] = u + (f ? a : s), p = s !== "rem" && ~e.indexOf("adius") || s === "em" && t.appendChild && !l ? t : t.parentNode, _ && (p = (t.ownerSVGElement || {}).parentNode), (!p || p === Ie || !p.appendChild) && (p = Ie.body), m = p._gsap, m && d && m.width && h && m.time === Vt.time && !m.uncache)
    return mt(n / m.width * u);
  if (d && (e === "height" || e === "width")) {
    var y = t.style[e];
    t.style[e] = u + s, g = t[c], y ? t.style[e] = y : Ge(t, e);
  } else
    (d || a === "%") && !Md[$t(p, "display")] && (o.position = $t(t, "position")), p === t && (o.position = "static"), p.appendChild(ti), g = ti[c], p.removeChild(ti), o.position = "absolute";
  return h && d && (m = ri(p), m.time = Vt.time, m.width = p[c]), mt(f ? g * n / u : g && n ? u / g * n : 0);
}, Te = function(t, e, i, s) {
  var n;
  return ca || An(), e in me && e !== "transform" && (e = me[e], ~e.indexOf(",") && (e = e.split(",")[0])), ke[e] && e !== "transform" ? (n = mr(t, s), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : rs($t(t, zt)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || s || ~(n + "").indexOf("calc(")) && (n = is[e] && is[e](t, e, i) || $t(t, e) || Ph(t, e) || (e === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? Ue(t, e, n, i) + i : n;
}, kd = function(t, e, i, s) {
  if (!i || i === "none") {
    var n = ki(e, t, 1), a = n && $t(t, n, 1);
    a && a !== i ? (e = n, i = a) : e === "borderColor" && (i = $t(t, "borderTopColor"));
  }
  var o = new Dt(this._pt, t.style, e, 0, 1, il), h = 0, l = 0, c, u, f, d, g, p, m, _, y, x, b, v;
  if (o.b = i, o.e = s, i += "", s += "", s.substring(0, 6) === "var(--" && (s = $t(t, s.substring(4, s.indexOf(")")))), s === "auto" && (p = t.style[e], t.style[e] = s, s = $t(t, e) || s, p ? t.style[e] = p : Ge(t, e)), c = [i, s], jh(c), i = c[0], s = c[1], f = i.match(mi) || [], v = s.match(mi) || [], v.length) {
    for (; u = mi.exec(s); )
      m = u[0], y = s.substring(h, u.index), g ? g = (g + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (g = 1), m !== (p = f[l++] || "") && (d = parseFloat(p) || 0, b = p.substr((d + "").length), m.charAt(1) === "=" && (m = xi(d, m) + b), _ = parseFloat(m), x = m.substr((_ + "").length), h = mi.lastIndex - x.length, x || (x = x || jt.units[e] || b, h === s.length && (s += x, o.e += x)), b !== x && (d = Ue(t, e, p, x) || 0), o._pt = {
        _next: o._pt,
        p: y || l === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: _ - d,
        m: g && g < 4 || e === "zIndex" ? Math.round : 0
      });
    o.c = h < s.length ? s.substring(h, s.length) : "";
  } else
    o.r = e === "display" && s === "none" ? al : nl;
  return vh.test(s) && (o.e = 0), this._pt = o, o;
}, io = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Ed = function(t) {
  var e = t.split(" "), i = e[0], s = e[1] || "50%";
  return (i === "top" || i === "bottom" || s === "left" || s === "right") && (t = i, i = s, s = t), e[0] = io[i] || i, e[1] = io[s] || s, e.join(" ");
}, Rd = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var i = e.t, s = i.style, n = e.u, a = i._gsap, o, h, l;
    if (n === "all" || n === !0)
      s.cssText = "", h = 1;
    else
      for (n = n.split(","), l = n.length; --l > -1; )
        o = n[l], ke[o] && (h = 1, o = o === "transformOrigin" ? zt : ht), Ge(i, o);
    h && (Ge(i, ht), a && (a.svg && i.removeAttribute("transform"), s.scale = s.rotate = s.translate = "none", mr(i, 1), a.uncache = 1, ol(s)));
  }
}, is = {
  clearProps: function(t, e, i, s, n) {
    if (n.data !== "isFromStart") {
      var a = t._pt = new Dt(t._pt, e, i, 0, 0, Rd);
      return a.u = s, a.pr = -10, a.tween = n, t._props.push(i), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, gr = [1, 0, 0, 1, 0, 0], dl = {}, fl = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, ro = function(t) {
  var e = $t(t, ht);
  return fl(e) ? gr : e.substr(7).match(wh).map(mt);
}, fa = function(t, e) {
  var i = t._gsap || ri(t), s = t.style, n = ro(t), a, o, h, l;
  return i.svg && t.getAttribute("transform") ? (h = t.transform.baseVal.consolidate().matrix, n = [h.a, h.b, h.c, h.d, h.e, h.f], n.join(",") === "1,0,0,1,0,0" ? gr : n) : (n === gr && !t.offsetParent && t !== bi && !i.svg && (h = s.display, s.display = "block", a = t.parentNode, (!a || !t.offsetParent && !t.getBoundingClientRect().width) && (l = 1, o = t.nextElementSibling, bi.appendChild(t)), n = ro(t), h ? s.display = h : Ge(t, "display"), l && (o ? a.insertBefore(t, o) : a ? a.appendChild(t) : bi.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, Tn = function(t, e, i, s, n, a) {
  var o = t._gsap, h = n || fa(t, !0), l = o.xOrigin || 0, c = o.yOrigin || 0, u = o.xOffset || 0, f = o.yOffset || 0, d = h[0], g = h[1], p = h[2], m = h[3], _ = h[4], y = h[5], x = e.split(" "), b = parseFloat(x[0]) || 0, v = parseFloat(x[1]) || 0, A, S, C, T;
  i ? h !== gr && (S = d * m - g * p) && (C = b * (m / S) + v * (-p / S) + (p * y - m * _) / S, T = b * (-g / S) + v * (d / S) - (d * y - g * _) / S, b = C, v = T) : (A = cl(t), b = A.x + (~x[0].indexOf("%") ? b / 100 * A.width : b), v = A.y + (~(x[1] || x[0]).indexOf("%") ? v / 100 * A.height : v)), s || s !== !1 && o.smooth ? (_ = b - l, y = v - c, o.xOffset = u + (_ * d + y * p) - _, o.yOffset = f + (_ * g + y * m) - y) : o.xOffset = o.yOffset = 0, o.xOrigin = b, o.yOrigin = v, o.smooth = !!s, o.origin = e, o.originIsAbsolute = !!i, t.style[zt] = "0px 0px", a && (Be(a, o, "xOrigin", l, b), Be(a, o, "yOrigin", c, v), Be(a, o, "xOffset", u, o.xOffset), Be(a, o, "yOffset", f, o.yOffset)), t.setAttribute("data-svg-origin", b + " " + v);
}, mr = function(t, e) {
  var i = t._gsap || new Kh(t);
  if ("x" in i && !e && !i.uncache)
    return i;
  var s = t.style, n = i.scaleX < 0, a = "px", o = "deg", h = getComputedStyle(t), l = $t(t, zt) || "0", c, u, f, d, g, p, m, _, y, x, b, v, A, S, C, T, P, E, L, B, G, I, M, R, K, z, H, U, pt, Ut, vt, Ft;
  return c = u = f = p = m = _ = y = x = b = 0, d = g = 1, i.svg = !!(t.getCTM && ul(t)), h.translate && ((h.translate !== "none" || h.scale !== "none" || h.rotate !== "none") && (s[ht] = (h.translate !== "none" ? "translate3d(" + (h.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (h.rotate !== "none" ? "rotate(" + h.rotate + ") " : "") + (h.scale !== "none" ? "scale(" + h.scale.split(" ").join(",") + ") " : "") + (h[ht] !== "none" ? h[ht] : "")), s.scale = s.rotate = s.translate = "none"), S = fa(t, i.svg), i.svg && (i.uncache ? (K = t.getBBox(), l = i.xOrigin - K.x + "px " + (i.yOrigin - K.y) + "px", R = "") : R = !e && t.getAttribute("data-svg-origin"), Tn(t, R || l, !!R || i.originIsAbsolute, i.smooth !== !1, S)), v = i.xOrigin || 0, A = i.yOrigin || 0, S !== gr && (E = S[0], L = S[1], B = S[2], G = S[3], c = I = S[4], u = M = S[5], S.length === 6 ? (d = Math.sqrt(E * E + L * L), g = Math.sqrt(G * G + B * B), p = E || L ? fi(L, E) * qe : 0, y = B || G ? fi(B, G) * qe + p : 0, y && (g *= Math.abs(Math.cos(y * wi))), i.svg && (c -= v - (v * E + A * B), u -= A - (v * L + A * G))) : (Ft = S[6], Ut = S[7], H = S[8], U = S[9], pt = S[10], vt = S[11], c = S[12], u = S[13], f = S[14], C = fi(Ft, pt), m = C * qe, C && (T = Math.cos(-C), P = Math.sin(-C), R = I * T + H * P, K = M * T + U * P, z = Ft * T + pt * P, H = I * -P + H * T, U = M * -P + U * T, pt = Ft * -P + pt * T, vt = Ut * -P + vt * T, I = R, M = K, Ft = z), C = fi(-B, pt), _ = C * qe, C && (T = Math.cos(-C), P = Math.sin(-C), R = E * T - H * P, K = L * T - U * P, z = B * T - pt * P, vt = G * P + vt * T, E = R, L = K, B = z), C = fi(L, E), p = C * qe, C && (T = Math.cos(C), P = Math.sin(C), R = E * T + L * P, K = I * T + M * P, L = L * T - E * P, M = M * T - I * P, E = R, I = K), m && Math.abs(m) + Math.abs(p) > 359.9 && (m = p = 0, _ = 180 - _), d = mt(Math.sqrt(E * E + L * L + B * B)), g = mt(Math.sqrt(M * M + Ft * Ft)), C = fi(I, M), y = Math.abs(C) > 2e-4 ? C * qe : 0, b = vt ? 1 / (vt < 0 ? -vt : vt) : 0), i.svg && (R = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !fl($t(t, ht)), R && t.setAttribute("transform", R))), Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (d *= -1, y += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (g *= -1, y += y <= 0 ? 180 : -180)), e = e || i.uncache, i.x = c - ((i.xPercent = c && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + a, i.y = u - ((i.yPercent = u && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + a, i.z = f + a, i.scaleX = mt(d), i.scaleY = mt(g), i.rotation = mt(p) + o, i.rotationX = mt(m) + o, i.rotationY = mt(_) + o, i.skewX = y + o, i.skewY = x + o, i.transformPerspective = b + a, (i.zOrigin = parseFloat(l.split(" ")[2]) || !e && i.zOrigin || 0) && (s[zt] = rs(l)), i.xOffset = i.yOffset = 0, i.force3D = jt.force3D, i.renderTransform = i.svg ? Id : ll ? pl : Fd, i.uncache = 0, i;
}, rs = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Rs = function(t, e, i) {
  var s = Ct(e);
  return mt(parseFloat(e) + parseFloat(Ue(t, "x", i + "px", s))) + s;
}, Fd = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, pl(t, e);
}, je = "0deg", Ni = "0px", Xe = ") ", pl = function(t, e) {
  var i = e || this, s = i.xPercent, n = i.yPercent, a = i.x, o = i.y, h = i.z, l = i.rotation, c = i.rotationY, u = i.rotationX, f = i.skewX, d = i.skewY, g = i.scaleX, p = i.scaleY, m = i.transformPerspective, _ = i.force3D, y = i.target, x = i.zOrigin, b = "", v = _ === "auto" && t && t !== 1 || _ === !0;
  if (x && (u !== je || c !== je)) {
    var A = parseFloat(c) * wi, S = Math.sin(A), C = Math.cos(A), T;
    A = parseFloat(u) * wi, T = Math.cos(A), a = Rs(y, a, S * T * -x), o = Rs(y, o, -Math.sin(A) * -x), h = Rs(y, h, C * T * -x + x);
  }
  m !== Ni && (b += "perspective(" + m + Xe), (s || n) && (b += "translate(" + s + "%, " + n + "%) "), (v || a !== Ni || o !== Ni || h !== Ni) && (b += h !== Ni || v ? "translate3d(" + a + ", " + o + ", " + h + ") " : "translate(" + a + ", " + o + Xe), l !== je && (b += "rotate(" + l + Xe), c !== je && (b += "rotateY(" + c + Xe), u !== je && (b += "rotateX(" + u + Xe), (f !== je || d !== je) && (b += "skew(" + f + ", " + d + Xe), (g !== 1 || p !== 1) && (b += "scale(" + g + ", " + p + Xe), y.style[ht] = b || "translate(0, 0)";
}, Id = function(t, e) {
  var i = e || this, s = i.xPercent, n = i.yPercent, a = i.x, o = i.y, h = i.rotation, l = i.skewX, c = i.skewY, u = i.scaleX, f = i.scaleY, d = i.target, g = i.xOrigin, p = i.yOrigin, m = i.xOffset, _ = i.yOffset, y = i.forceCSS, x = parseFloat(a), b = parseFloat(o), v, A, S, C, T;
  h = parseFloat(h), l = parseFloat(l), c = parseFloat(c), c && (c = parseFloat(c), l += c, h += c), h || l ? (h *= wi, l *= wi, v = Math.cos(h) * u, A = Math.sin(h) * u, S = Math.sin(h - l) * -f, C = Math.cos(h - l) * f, l && (c *= wi, T = Math.tan(l - c), T = Math.sqrt(1 + T * T), S *= T, C *= T, c && (T = Math.tan(c), T = Math.sqrt(1 + T * T), v *= T, A *= T)), v = mt(v), A = mt(A), S = mt(S), C = mt(C)) : (v = u, C = f, A = S = 0), (x && !~(a + "").indexOf("px") || b && !~(o + "").indexOf("px")) && (x = Ue(d, "x", a, "px"), b = Ue(d, "y", o, "px")), (g || p || m || _) && (x = mt(x + g - (g * v + p * S) + m), b = mt(b + p - (g * A + p * C) + _)), (s || n) && (T = d.getBBox(), x = mt(x + s / 100 * T.width), b = mt(b + n / 100 * T.height)), T = "matrix(" + v + "," + A + "," + S + "," + C + "," + x + "," + b + ")", d.setAttribute("transform", T), y && (d.style[ht] = T);
}, Bd = function(t, e, i, s, n) {
  var a = 360, o = wt(n), h = parseFloat(n) * (o && ~n.indexOf("rad") ? qe : 1), l = h - s, c = s + l + "deg", u, f;
  return o && (u = n.split("_")[1], u === "short" && (l %= a, l !== l % (a / 2) && (l += l < 0 ? a : -a)), u === "cw" && l < 0 ? l = (l + a * Za) % a - ~~(l / a) * a : u === "ccw" && l > 0 && (l = (l - a * Za) % a - ~~(l / a) * a)), t._pt = f = new Dt(t._pt, e, i, s, l, md), f.e = c, f.u = "deg", t._props.push(i), f;
}, so = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, Od = function(t, e, i) {
  var s = so({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", a = i.style, o, h, l, c, u, f, d, g;
  s.svg ? (l = i.getAttribute("transform"), i.setAttribute("transform", ""), a[ht] = e, o = mr(i, 1), Ge(i, ht), i.setAttribute("transform", l)) : (l = getComputedStyle(i)[ht], a[ht] = e, o = mr(i, 1), a[ht] = l);
  for (h in ke)
    l = s[h], c = o[h], l !== c && n.indexOf(h) < 0 && (d = Ct(l), g = Ct(c), u = d !== g ? Ue(i, h, l, g) : parseFloat(l), f = parseFloat(c), t._pt = new Dt(t._pt, o, h, u, f - u, vn), t._pt.u = g || 0, t._props.push(h));
  so(o, s);
};
Lt("padding,margin,Width,Radius", function(r, t) {
  var e = "Top", i = "Right", s = "Bottom", n = "Left", a = (t < 3 ? [e, i, s, n] : [e + n, e + i, s + i, s + n]).map(function(o) {
    return t < 2 ? r + o : "border" + o + r;
  });
  is[t > 1 ? "border" + r : r] = function(o, h, l, c, u) {
    var f, d;
    if (arguments.length < 4)
      return f = a.map(function(g) {
        return Te(o, g, l);
      }), d = f.join(" "), d.split(f[0]).length === 5 ? f[0] : d;
    f = (c + "").split(" "), d = {}, a.forEach(function(g, p) {
      return d[g] = f[p] = f[p] || f[(p - 1) / 2 | 0];
    }), o.init(h, d, u);
  };
});
var gl = {
  name: "css",
  register: An,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, i, s, n) {
    var a = this._props, o = t.style, h = i.vars.startAt, l, c, u, f, d, g, p, m, _, y, x, b, v, A, S, C, T;
    ca || An(), this.styles = this.styles || hl(t), C = this.styles.props, this.tween = i;
    for (p in e)
      if (p !== "autoRound" && (c = e[p], !(Nt[p] && Zh(p, e, i, s, t, n)))) {
        if (d = typeof c, g = is[p], d === "function" && (c = c.call(i, s, t, n), d = typeof c), d === "string" && ~c.indexOf("random(") && (c = dr(c)), g)
          g(this, t, p, c, i) && (S = 1);
        else if (p.substr(0, 2) === "--")
          l = (getComputedStyle(t).getPropertyValue(p) + "").trim(), c += "", De.lastIndex = 0, De.test(l) || (m = Ct(l), _ = Ct(c), _ ? m !== _ && (l = Ue(t, p, l, _) + _) : m && (c += m)), this.add(o, "setProperty", l, c, s, n, 0, 0, p), a.push(p), C.push(p, 0, o[p]);
        else if (d !== "undefined") {
          if (h && p in h ? (l = typeof h[p] == "function" ? h[p].call(i, s, t, n) : h[p], wt(l) && ~l.indexOf("random(") && (l = dr(l)), Ct(l + "") || l === "auto" || (l += jt.units[p] || Ct(Te(t, p)) || ""), (l + "").charAt(1) === "=" && (l = Te(t, p))) : l = Te(t, p), f = parseFloat(l), y = d === "string" && c.charAt(1) === "=" && c.substr(0, 2), y && (c = c.substr(2)), u = parseFloat(c), p in me && (p === "autoAlpha" && (f === 1 && Te(t, "visibility") === "hidden" && u && (f = 0), C.push("visibility", 0, o.visibility), Be(this, o, "visibility", f ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), p !== "scale" && p !== "transform" && (p = me[p], ~p.indexOf(",") && (p = p.split(",")[0]))), x = p in ke, x) {
            if (this.styles.save(p), T = c, d === "string" && c.substring(0, 6) === "var(--") {
              if (c = $t(t, c.substring(4, c.indexOf(")"))), c.substring(0, 5) === "calc(") {
                var P = t.style.perspective;
                t.style.perspective = c, c = $t(t, "perspective"), P ? t.style.perspective = P : Ge(t, "perspective");
              }
              u = parseFloat(c);
            }
            if (b || (v = t._gsap, v.renderTransform && !e.parseTransform || mr(t, e.parseTransform), A = e.smoothOrigin !== !1 && v.smooth, b = this._pt = new Dt(this._pt, o, ht, 0, 1, v.renderTransform, v, 0, -1), b.dep = 1), p === "scale")
              this._pt = new Dt(this._pt, v, "scaleY", v.scaleY, (y ? xi(v.scaleY, y + u) : u) - v.scaleY || 0, vn), this._pt.u = 0, a.push("scaleY", p), p += "X";
            else if (p === "transformOrigin") {
              C.push(zt, 0, o[zt]), c = Ed(c), v.svg ? Tn(t, c, 0, A, 0, this) : (_ = parseFloat(c.split(" ")[2]) || 0, _ !== v.zOrigin && Be(this, v, "zOrigin", v.zOrigin, _), Be(this, o, p, rs(l), rs(c)));
              continue;
            } else if (p === "svgOrigin") {
              Tn(t, c, 1, A, 0, this);
              continue;
            } else if (p in dl) {
              Bd(this, v, p, f, y ? xi(f, y + c) : c);
              continue;
            } else if (p === "smoothOrigin") {
              Be(this, v, "smooth", v.smooth, c);
              continue;
            } else if (p === "force3D") {
              v[p] = c;
              continue;
            } else if (p === "transform") {
              Od(this, c, t);
              continue;
            }
          } else p in o || (p = ki(p) || p);
          if (x || (u || u === 0) && (f || f === 0) && !gd.test(c) && p in o)
            m = (l + "").substr((f + "").length), u || (u = 0), _ = Ct(c) || (p in jt.units ? jt.units[p] : m), m !== _ && (f = Ue(t, p, l, _)), this._pt = new Dt(this._pt, x ? v : o, p, f, (y ? xi(f, y + u) : u) - f, !x && (_ === "px" || p === "zIndex") && e.autoRound !== !1 ? xd : vn), this._pt.u = _ || 0, x && T !== c ? (this._pt.b = l, this._pt.e = T, this._pt.r = yd) : m !== _ && _ !== "%" && (this._pt.b = l, this._pt.r = _d);
          else if (p in o)
            kd.call(this, t, p, l, y ? y + c : c);
          else if (p in t)
            this.add(t, p, l || t[p], y ? y + c : c, s, n);
          else if (p !== "parseTransform") {
            ta(p, c);
            continue;
          }
          x || (p in o ? C.push(p, 0, o[p]) : typeof t[p] == "function" ? C.push(p, 2, t[p]()) : C.push(p, 1, l || t[p])), a.push(p);
        }
      }
    S && rl(this);
  },
  render: function(t, e) {
    if (e.tween._time || !ua())
      for (var i = e._pt; i; )
        i.r(t, i.d), i = i._next;
    else
      e.styles.revert();
  },
  get: Te,
  aliases: me,
  getSetter: function(t, e, i) {
    var s = me[e];
    return s && s.indexOf(",") < 0 && (e = s), e in ke && e !== zt && (t._gsap.x || Te(t, "x")) ? i && Ka === i ? e === "scale" ? Sd : vd : (Ka = i || {}) && (e === "scale" ? Ad : Td) : t.style && !Zn(t.style[e]) ? bd : ~e.indexOf("-") ? wd : ha(t, e);
  },
  core: {
    _removeProperty: Ge,
    _getMatrix: fa
  }
};
Gt.utils.checkPrefix = ki;
Gt.core.getStyleSaver = hl;
(function(r, t, e, i) {
  var s = Lt(r + "," + t + "," + e, function(n) {
    ke[n] = 1;
  });
  Lt(t, function(n) {
    jt.units[n] = "deg", dl[n] = 1;
  }), me[s[13]] = r + "," + t, Lt(i, function(n) {
    var a = n.split(":");
    me[a[1]] = s[a[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Lt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
  jt.units[r] = "px";
});
Gt.registerPlugin(gl);
var Cn = Gt.registerPlugin(gl) || Gt;
Cn.core.Tween;
var D = /* @__PURE__ */ ((r) => (r.Application = "application", r.WebGLPipes = "webgl-pipes", r.WebGLPipesAdaptor = "webgl-pipes-adaptor", r.WebGLSystem = "webgl-system", r.WebGPUPipes = "webgpu-pipes", r.WebGPUPipesAdaptor = "webgpu-pipes-adaptor", r.WebGPUSystem = "webgpu-system", r.CanvasSystem = "canvas-system", r.CanvasPipesAdaptor = "canvas-pipes-adaptor", r.CanvasPipes = "canvas-pipes", r.Asset = "asset", r.LoadParser = "load-parser", r.ResolveParser = "resolve-parser", r.CacheParser = "cache-parser", r.DetectionParser = "detection-parser", r.MaskEffect = "mask-effect", r.BlendMode = "blend-mode", r.TextureSource = "texture-source", r.Environment = "environment", r.ShapeBuilder = "shape-builder", r.Batcher = "batcher", r))(D || {});
const Pn = (r) => {
  if (typeof r == "function" || typeof r == "object" && r.extension) {
    if (!r.extension)
      throw new Error("Extension class must have an extension object");
    r = { ...typeof r.extension != "object" ? { type: r.extension } : r.extension, ref: r };
  }
  if (typeof r == "object")
    r = { ...r };
  else
    throw new Error("Invalid extension type");
  return typeof r.type == "string" && (r.type = [r.type]), r;
}, Mr = (r, t) => Pn(r).priority ?? t, At = {
  /** @ignore */
  _addHandlers: {},
  /** @ignore */
  _removeHandlers: {},
  /** @ignore */
  _queue: {},
  /**
   * Remove extensions from PixiJS.
   * @param extensions - Extensions to be removed. Can be:
   * - Extension class with static `extension` property
   * - Extension format object with `type` and `ref`
   * - Multiple extensions as separate arguments
   * @returns {extensions} this for chaining
   * @example
   * ```ts
   * // Remove a single extension
   * extensions.remove(MyRendererPlugin);
   *
   * // Remove multiple extensions
   * extensions.remove(
   *     MyRendererPlugin,
   *     MySystemPlugin
   * );
   * ```
   * @see {@link ExtensionType} For available extension types
   * @see {@link ExtensionFormat} For extension format details
   */
  remove(...r) {
    return r.map(Pn).forEach((t) => {
      t.type.forEach((e) => this._removeHandlers[e]?.(t));
    }), this;
  },
  /**
   * Register new extensions with PixiJS. Extensions can be registered in multiple formats:
   * - As a class with a static `extension` property
   * - As an extension format object
   * - As multiple extensions passed as separate arguments
   * @param extensions - Extensions to add to PixiJS. Each can be:
   * - A class with static `extension` property
   * - An extension format object with `type` and `ref`
   * - Multiple extensions as separate arguments
   * @returns This extensions instance for chaining
   * @example
   * ```ts
   * // Register a simple extension
   * extensions.add(MyRendererPlugin);
   *
   * // Register multiple extensions
   * extensions.add(
   *     MyRendererPlugin,
   *     MySystemPlugin,
   * });
   * ```
   * @see {@link ExtensionType} For available extension types
   * @see {@link ExtensionFormat} For extension format details
   * @see {@link extensions.remove} For removing registered extensions
   */
  add(...r) {
    return r.map(Pn).forEach((t) => {
      t.type.forEach((e) => {
        const i = this._addHandlers, s = this._queue;
        i[e] ? i[e]?.(t) : (s[e] = s[e] || [], s[e]?.push(t));
      });
    }), this;
  },
  /**
   * Internal method to handle extensions by name.
   * @param type - The extension type.
   * @param onAdd  - Function handler when extensions are added/registered {@link StrictExtensionFormat}.
   * @param onRemove  - Function handler when extensions are removed/unregistered {@link StrictExtensionFormat}.
   * @returns this for chaining.
   * @internal
   * @ignore
   */
  handle(r, t, e) {
    const i = this._addHandlers, s = this._removeHandlers;
    if (i[r] || s[r])
      throw new Error(`Extension type ${r} already has a handler`);
    i[r] = t, s[r] = e;
    const n = this._queue;
    return n[r] && (n[r]?.forEach((a) => t(a)), delete n[r]), this;
  },
  /**
   * Handle a type, but using a map by `name` property.
   * @param type - Type of extension to handle.
   * @param map - The object map of named extensions.
   * @returns this for chaining.
   * @ignore
   */
  handleByMap(r, t) {
    return this.handle(
      r,
      (e) => {
        e.name && (t[e.name] = e.ref);
      },
      (e) => {
        e.name && delete t[e.name];
      }
    );
  },
  /**
   * Handle a type, but using a list of extensions with a `name` property.
   * @param type - Type of extension to handle.
   * @param map - The array of named extensions.
   * @param defaultPriority - Fallback priority if none is defined.
   * @returns this for chaining.
   * @ignore
   */
  handleByNamedList(r, t, e = -1) {
    return this.handle(
      r,
      (i) => {
        t.findIndex((n) => n.name === i.name) >= 0 || (t.push({ name: i.name, value: i.ref }), t.sort((n, a) => Mr(a.value, e) - Mr(n.value, e)));
      },
      (i) => {
        const s = t.findIndex((n) => n.name === i.name);
        s !== -1 && t.splice(s, 1);
      }
    );
  },
  /**
   * Handle a type, but using a list of extensions.
   * @param type - Type of extension to handle.
   * @param list - The list of extensions.
   * @param defaultPriority - The default priority to use if none is specified.
   * @returns this for chaining.
   * @ignore
   */
  handleByList(r, t, e = -1) {
    return this.handle(
      r,
      (i) => {
        t.includes(i.ref) || (t.push(i.ref), t.sort((s, n) => Mr(n, e) - Mr(s, e)));
      },
      (i) => {
        const s = t.indexOf(i.ref);
        s !== -1 && t.splice(s, 1);
      }
    );
  },
  /**
   * Mixin the source object(s) properties into the target class's prototype.
   * Copies all property descriptors from source objects to the target's prototype.
   * @param Target - The target class to mix properties into
   * @param sources - One or more source objects containing properties to mix in
   * @example
   * ```ts
   * // Create a mixin with shared properties
   * const moveable = {
   *     x: 0,
   *     y: 0,
   *     move(x: number, y: number) {
   *         this.x += x;
   *         this.y += y;
   *     }
   * };
   *
   * // Create a mixin with computed properties
   * const scalable = {
   *     scale: 1,
   *     get scaled() {
   *         return this.scale > 1;
   *     }
   * };
   *
   * // Apply mixins to a class
   * extensions.mixin(Sprite, moveable, scalable);
   *
   * // Use mixed-in properties
   * const sprite = new Sprite();
   * sprite.move(10, 20);
   * console.log(sprite.x, sprite.y); // 10, 20
   * ```
   * @remarks
   * - Copies all properties including getters/setters
   * - Does not modify source objects
   * - Preserves property descriptors
   * @see {@link Object.defineProperties} For details on property descriptors
   * @see {@link Object.getOwnPropertyDescriptors} For details on property copying
   */
  mixin(r, ...t) {
    for (const e of t)
      Object.defineProperties(r.prototype, Object.getOwnPropertyDescriptors(e));
  }
}, Ld = {
  extension: {
    type: D.Environment,
    name: "browser",
    priority: -1
  },
  test: () => !0,
  load: async () => {
    await import("./browserAll-BghQHQCe.js");
  }
}, Dd = {
  extension: {
    type: D.Environment,
    name: "webworker",
    priority: 0
  },
  test: () => typeof self < "u" && self.WorkerGlobalScope !== void 0,
  load: async () => {
    await import("./webworkerAll-C1WKQV1I.js");
  }
};
class Tt {
  /**
   * Creates a new `ObservablePoint`
   * @param observer - Observer to pass to listen for change events.
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=0] - position of the point on the y axis
   */
  constructor(t, e, i) {
    this._x = e || 0, this._y = i || 0, this._observer = t;
  }
  /**
   * Creates a clone of this point.
   * @example
   * ```ts
   * // Basic cloning
   * const point = new ObservablePoint(observer, 100, 200);
   * const copy = point.clone();
   *
   * // Clone with new observer
   * const newObserver = {
   *     _onUpdate: (p) => console.log(`Clone updated: (${p.x}, ${p.y})`)
   * };
   * const watched = point.clone(newObserver);
   *
   * // Verify independence
   * watched.set(300, 400); // Only triggers new observer
   * ```
   * @param observer - Optional observer to pass to the new observable point
   * @returns A copy of this observable point
   * @see {@link ObservablePoint.copyFrom} For copying into existing point
   * @see {@link Observer} For observer interface details
   */
  clone(t) {
    return new Tt(t ?? this._observer, this._x, this._y);
  }
  /**
   * Sets the point to a new x and y position.
   *
   * If y is omitted, both x and y will be set to x.
   * @example
   * ```ts
   * // Basic position setting
   * const point = new ObservablePoint(observer);
   * point.set(100, 200);
   *
   * // Set both x and y to same value
   * point.set(50); // x=50, y=50
   * ```
   * @param x - Position on the x axis
   * @param y - Position on the y axis, defaults to x
   * @returns The point instance itself
   * @see {@link ObservablePoint.copyFrom} For copying from another point
   * @see {@link ObservablePoint.equals} For comparing positions
   */
  set(t = 0, e = t) {
    return (this._x !== t || this._y !== e) && (this._x = t, this._y = e, this._observer._onUpdate(this)), this;
  }
  /**
   * Copies x and y from the given point into this point.
   * @example
   * ```ts
   * // Basic copying
   * const source = new ObservablePoint(observer, 100, 200);
   * const target = new ObservablePoint();
   * target.copyFrom(source);
   *
   * // Copy and chain operations
   * const point = new ObservablePoint()
   *     .copyFrom(source)
   *     .set(x + 50, y + 50);
   *
   * // Copy from any PointData
   * const data = { x: 10, y: 20 };
   * point.copyFrom(data);
   * ```
   * @param p - The point to copy from
   * @returns The point instance itself
   * @see {@link ObservablePoint.copyTo} For copying to another point
   * @see {@link ObservablePoint.clone} For creating new point copy
   */
  copyFrom(t) {
    return (this._x !== t.x || this._y !== t.y) && (this._x = t.x, this._y = t.y, this._observer._onUpdate(this)), this;
  }
  /**
   * Copies this point's x and y into the given point.
   * @example
   * ```ts
   * // Basic copying
   * const source = new ObservablePoint(100, 200);
   * const target = new ObservablePoint();
   * source.copyTo(target);
   * ```
   * @param p - The point to copy to. Can be any type that is or extends `PointLike`
   * @returns The point (`p`) with values updated
   * @see {@link ObservablePoint.copyFrom} For copying from another point
   * @see {@link ObservablePoint.clone} For creating new point copy
   */
  copyTo(t) {
    return t.set(this._x, this._y), t;
  }
  /**
   * Checks if another point is equal to this point.
   *
   * Compares x and y values using strict equality.
   * @example
   * ```ts
   * // Basic equality check
   * const p1 = new ObservablePoint(100, 200);
   * const p2 = new ObservablePoint(100, 200);
   * console.log(p1.equals(p2)); // true
   *
   * // Compare with PointData
   * const data = { x: 100, y: 200 };
   * console.log(p1.equals(data)); // true
   *
   * // Check different points
   * const p3 = new ObservablePoint(200, 300);
   * console.log(p1.equals(p3)); // false
   * ```
   * @param p - The point to check
   * @returns `true` if both `x` and `y` are equal
   * @see {@link ObservablePoint.copyFrom} For making points equal
   * @see {@link PointData} For point data interface
   */
  equals(t) {
    return t.x === this._x && t.y === this._y;
  }
  toString() {
    return `[pixi.js/math:ObservablePoint x=${this._x} y=${this._y} scope=${this._observer}]`;
  }
  /**
   * Position of the observable point on the x axis.
   * Triggers observer callback when value changes.
   * @example
   * ```ts
   * // Basic x position
   * const point = new ObservablePoint(observer);
   * point.x = 100; // Triggers observer
   *
   * // Use in calculations
   * const width = rightPoint.x - leftPoint.x;
   * ```
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(t) {
    this._x !== t && (this._x = t, this._observer._onUpdate(this));
  }
  /**
   * Position of the observable point on the y axis.
   * Triggers observer callback when value changes.
   * @example
   * ```ts
   * // Basic y position
   * const point = new ObservablePoint(observer);
   * point.y = 200; // Triggers observer
   *
   * // Use in calculations
   * const height = bottomPoint.y - topPoint.y;
   * ```
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(t) {
    this._y !== t && (this._y = t, this._observer._onUpdate(this));
  }
}
var ml = { exports: {} };
(function(r) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function i() {
  }
  Object.create && (i.prototype = /* @__PURE__ */ Object.create(null), new i().__proto__ || (e = !1));
  function s(h, l, c) {
    this.fn = h, this.context = l, this.once = c || !1;
  }
  function n(h, l, c, u, f) {
    if (typeof c != "function")
      throw new TypeError("The listener must be a function");
    var d = new s(c, u || h, f), g = e ? e + l : l;
    return h._events[g] ? h._events[g].fn ? h._events[g] = [h._events[g], d] : h._events[g].push(d) : (h._events[g] = d, h._eventsCount++), h;
  }
  function a(h, l) {
    --h._eventsCount === 0 ? h._events = new i() : delete h._events[l];
  }
  function o() {
    this._events = new i(), this._eventsCount = 0;
  }
  o.prototype.eventNames = function() {
    var l = [], c, u;
    if (this._eventsCount === 0) return l;
    for (u in c = this._events)
      t.call(c, u) && l.push(e ? u.slice(1) : u);
    return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(c)) : l;
  }, o.prototype.listeners = function(l) {
    var c = e ? e + l : l, u = this._events[c];
    if (!u) return [];
    if (u.fn) return [u.fn];
    for (var f = 0, d = u.length, g = new Array(d); f < d; f++)
      g[f] = u[f].fn;
    return g;
  }, o.prototype.listenerCount = function(l) {
    var c = e ? e + l : l, u = this._events[c];
    return u ? u.fn ? 1 : u.length : 0;
  }, o.prototype.emit = function(l, c, u, f, d, g) {
    var p = e ? e + l : l;
    if (!this._events[p]) return !1;
    var m = this._events[p], _ = arguments.length, y, x;
    if (m.fn) {
      switch (m.once && this.removeListener(l, m.fn, void 0, !0), _) {
        case 1:
          return m.fn.call(m.context), !0;
        case 2:
          return m.fn.call(m.context, c), !0;
        case 3:
          return m.fn.call(m.context, c, u), !0;
        case 4:
          return m.fn.call(m.context, c, u, f), !0;
        case 5:
          return m.fn.call(m.context, c, u, f, d), !0;
        case 6:
          return m.fn.call(m.context, c, u, f, d, g), !0;
      }
      for (x = 1, y = new Array(_ - 1); x < _; x++)
        y[x - 1] = arguments[x];
      m.fn.apply(m.context, y);
    } else {
      var b = m.length, v;
      for (x = 0; x < b; x++)
        switch (m[x].once && this.removeListener(l, m[x].fn, void 0, !0), _) {
          case 1:
            m[x].fn.call(m[x].context);
            break;
          case 2:
            m[x].fn.call(m[x].context, c);
            break;
          case 3:
            m[x].fn.call(m[x].context, c, u);
            break;
          case 4:
            m[x].fn.call(m[x].context, c, u, f);
            break;
          default:
            if (!y) for (v = 1, y = new Array(_ - 1); v < _; v++)
              y[v - 1] = arguments[v];
            m[x].fn.apply(m[x].context, y);
        }
    }
    return !0;
  }, o.prototype.on = function(l, c, u) {
    return n(this, l, c, u, !1);
  }, o.prototype.once = function(l, c, u) {
    return n(this, l, c, u, !0);
  }, o.prototype.removeListener = function(l, c, u, f) {
    var d = e ? e + l : l;
    if (!this._events[d]) return this;
    if (!c)
      return a(this, d), this;
    var g = this._events[d];
    if (g.fn)
      g.fn === c && (!f || g.once) && (!u || g.context === u) && a(this, d);
    else {
      for (var p = 0, m = [], _ = g.length; p < _; p++)
        (g[p].fn !== c || f && !g[p].once || u && g[p].context !== u) && m.push(g[p]);
      m.length ? this._events[d] = m.length === 1 ? m[0] : m : a(this, d);
    }
    return this;
  }, o.prototype.removeAllListeners = function(l) {
    var c;
    return l ? (c = e ? e + l : l, this._events[c] && a(this, c)) : (this._events = new i(), this._eventsCount = 0), this;
  }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = e, o.EventEmitter = o, r.exports = o;
})(ml);
var zd = ml.exports;
const oe = /* @__PURE__ */ _h(zd), Gd = Math.PI * 2, Ud = 180 / Math.PI, Wd = Math.PI / 180;
class Pt {
  /**
   * Creates a new `Point`
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=0] - position of the point on the y axis
   */
  constructor(t = 0, e = 0) {
    this.x = 0, this.y = 0, this.x = t, this.y = e;
  }
  /**
   * Creates a clone of this point, which is a new instance with the same `x` and `y` values.
   * @example
   * ```ts
   * // Basic point cloning
   * const original = new Point(100, 200);
   * const copy = original.clone();
   *
   * // Clone and modify
   * const modified = original.clone();
   * modified.set(300, 400);
   *
   * // Verify independence
   * console.log(original); // Point(100, 200)
   * console.log(modified); // Point(300, 400)
   * ```
   * @remarks
   * - Creates new Point instance
   * - Deep copies x and y values
   * - Independent from original
   * - Useful for preserving values
   * @returns A clone of this point
   * @see {@link Point.copyFrom} For copying into existing point
   * @see {@link Point.copyTo} For copying to existing point
   */
  clone() {
    return new Pt(this.x, this.y);
  }
  /**
   * Copies x and y from the given point into this point.
   * @example
   * ```ts
   * // Basic copying
   * const source = new Point(100, 200);
   * const target = new Point();
   * target.copyFrom(source);
   *
   * // Copy and chain operations
   * const point = new Point()
   *     .copyFrom(source)
   *     .set(x + 50, y + 50);
   *
   * // Copy from any PointData
   * const data = { x: 10, y: 20 };
   * point.copyFrom(data);
   * ```
   * @param p - The point to copy from
   * @returns The point instance itself
   * @see {@link Point.copyTo} For copying to another point
   * @see {@link Point.clone} For creating new point copy
   */
  copyFrom(t) {
    return this.set(t.x, t.y), this;
  }
  /**
   * Copies this point's x and y into the given point.
   * @example
   * ```ts
   * // Basic copying
   * const source = new Point(100, 200);
   * const target = new Point();
   * source.copyTo(target);
   * ```
   * @param p - The point to copy to. Can be any type that is or extends `PointLike`
   * @returns The point (`p`) with values updated
   * @see {@link Point.copyFrom} For copying from another point
   * @see {@link Point.clone} For creating new point copy
   */
  copyTo(t) {
    return t.set(this.x, this.y), t;
  }
  /**
   * Checks if another point is equal to this point.
   *
   * Compares x and y values using strict equality.
   * @example
   * ```ts
   * // Basic equality check
   * const p1 = new Point(100, 200);
   * const p2 = new Point(100, 200);
   * console.log(p1.equals(p2)); // true
   *
   * // Compare with PointData
   * const data = { x: 100, y: 200 };
   * console.log(p1.equals(data)); // true
   *
   * // Check different points
   * const p3 = new Point(200, 300);
   * console.log(p1.equals(p3)); // false
   * ```
   * @param p - The point to check
   * @returns `true` if both `x` and `y` are equal
   * @see {@link Point.copyFrom} For making points equal
   * @see {@link PointData} For point data interface
   */
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  /**
   * Sets the point to a new x and y position.
   *
   * If y is omitted, both x and y will be set to x.
   * @example
   * ```ts
   * // Basic position setting
   * const point = new Point();
   * point.set(100, 200);
   *
   * // Set both x and y to same value
   * point.set(50); // x=50, y=50
   *
   * // Chain with other operations
   * point
   *     .set(10, 20)
   *     .copyTo(otherPoint);
   * ```
   * @param x - Position on the x axis
   * @param y - Position on the y axis, defaults to x
   * @returns The point instance itself
   * @see {@link Point.copyFrom} For copying from another point
   * @see {@link Point.equals} For comparing positions
   */
  set(t = 0, e = t) {
    return this.x = t, this.y = e, this;
  }
  toString() {
    return `[pixi.js/math:Point x=${this.x} y=${this.y}]`;
  }
  /**
   * A static Point object with `x` and `y` values of `0`.
   *
   * This shared instance is reset to zero values when accessed.
   *
   * > [!IMPORTANT] This point is shared and temporary. Do not store references to it.
   * @example
   * ```ts
   * // Use for temporary calculations
   * const tempPoint = Point.shared;
   * tempPoint.set(100, 200);
   * matrix.apply(tempPoint);
   *
   * // Will be reset to (0,0) on next access
   * const fresh = Point.shared; // x=0, y=0
   * ```
   * @readonly
   * @returns A fresh zeroed point for temporary use
   * @see {@link Point.constructor} For creating new points
   * @see {@link PointData} For basic point interface
   */
  static get shared() {
    return Fs.x = 0, Fs.y = 0, Fs;
  }
}
const Fs = new Pt();
class Y {
  /**
   * @param a - x scale
   * @param b - y skew
   * @param c - x skew
   * @param d - y scale
   * @param tx - x translation
   * @param ty - y translation
   */
  constructor(t = 1, e = 0, i = 0, s = 1, n = 0, a = 0) {
    this.array = null, this.a = t, this.b = e, this.c = i, this.d = s, this.tx = n, this.ty = a;
  }
  /**
   * Creates a Matrix object based on the given array.
   * Populates matrix components from a flat array in column-major order.
   *
   * > [!NOTE] Array mapping order:
   * > ```
   * > array[0] = a  (x scale)
   * > array[1] = b  (y skew)
   * > array[2] = tx (x translation)
   * > array[3] = c  (x skew)
   * > array[4] = d  (y scale)
   * > array[5] = ty (y translation)
   * > ```
   * @example
   * ```ts
   * // Create matrix from array
   * const matrix = new Matrix();
   * matrix.fromArray([
   *     2, 0,  100,  // a, b, tx
   *     0, 2,  100   // c, d, ty
   * ]);
   *
   * // Create matrix from typed array
   * const float32Array = new Float32Array([
   *     1, 0, 0,     // Scale x1, no skew
   *     0, 1, 0      // No skew, scale x1
   * ]);
   * matrix.fromArray(float32Array);
   * ```
   * @param array - The array to populate the matrix from
   * @see {@link Matrix.toArray} For converting matrix to array
   * @see {@link Matrix.set} For setting values directly
   */
  fromArray(t) {
    this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5];
  }
  /**
   * Sets the matrix properties directly.
   * All matrix components can be set in one call.
   * @example
   * ```ts
   * // Set to identity matrix
   * matrix.set(1, 0, 0, 1, 0, 0);
   *
   * // Set to scale matrix
   * matrix.set(2, 0, 0, 2, 0, 0); // Scale 2x
   *
   * // Set to translation matrix
   * matrix.set(1, 0, 0, 1, 100, 50); // Move 100,50
   * ```
   * @param a - Scale on x axis
   * @param b - Shear on y axis
   * @param c - Shear on x axis
   * @param d - Scale on y axis
   * @param tx - Translation on x axis
   * @param ty - Translation on y axis
   * @returns This matrix. Good for chaining method calls.
   * @see {@link Matrix.identity} For resetting to identity
   * @see {@link Matrix.fromArray} For setting from array
   */
  set(t, e, i, s, n, a) {
    return this.a = t, this.b = e, this.c = i, this.d = s, this.tx = n, this.ty = a, this;
  }
  /**
   * Creates an array from the current Matrix object.
   *
   * > [!NOTE] The array format is:
   * > ```
   * > Non-transposed:
   * > [a, c, tx,
   * > b, d, ty,
   * > 0, 0, 1]
   * >
   * > Transposed:
   * > [a, b, 0,
   * > c, d, 0,
   * > tx,ty,1]
   * > ```
   * @example
   * ```ts
   * // Basic array conversion
   * const matrix = new Matrix(2, 0, 0, 2, 100, 100);
   * const array = matrix.toArray();
   *
   * // Using existing array
   * const float32Array = new Float32Array(9);
   * matrix.toArray(false, float32Array);
   *
   * // Get transposed array
   * const transposed = matrix.toArray(true);
   * ```
   * @param transpose - Whether to transpose the matrix
   * @param out - Optional Float32Array to store the result
   * @returns The array containing the matrix values
   * @see {@link Matrix.fromArray} For creating matrix from array
   * @see {@link Matrix.array} For cached array storage
   */
  toArray(t, e) {
    this.array || (this.array = new Float32Array(9));
    const i = e || this.array;
    return t ? (i[0] = this.a, i[1] = this.b, i[2] = 0, i[3] = this.c, i[4] = this.d, i[5] = 0, i[6] = this.tx, i[7] = this.ty, i[8] = 1) : (i[0] = this.a, i[1] = this.c, i[2] = this.tx, i[3] = this.b, i[4] = this.d, i[5] = this.ty, i[6] = 0, i[7] = 0, i[8] = 1), i;
  }
  /**
   * Get a new position with the current transformation applied.
   *
   * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
   * @example
   * ```ts
   * // Basic point transformation
   * const matrix = new Matrix().translate(100, 50).rotate(Math.PI / 4);
   * const point = new Point(10, 20);
   * const transformed = matrix.apply(point);
   *
   * // Reuse existing point
   * const output = new Point();
   * matrix.apply(point, output);
   * ```
   * @param pos - The origin point to transform
   * @param newPos - Optional point to store the result
   * @returns The transformed point
   * @see {@link Matrix.applyInverse} For inverse transformation
   * @see {@link Point} For point operations
   */
  apply(t, e) {
    e = e || new Pt();
    const i = t.x, s = t.y;
    return e.x = this.a * i + this.c * s + this.tx, e.y = this.b * i + this.d * s + this.ty, e;
  }
  /**
   * Get a new position with the inverse of the current transformation applied.
   *
   * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
   * @example
   * ```ts
   * // Basic inverse transformation
   * const matrix = new Matrix().translate(100, 50).rotate(Math.PI / 4);
   * const worldPoint = new Point(150, 100);
   * const localPoint = matrix.applyInverse(worldPoint);
   *
   * // Reuse existing point
   * const output = new Point();
   * matrix.applyInverse(worldPoint, output);
   *
   * // Convert mouse position to local space
   * const mousePoint = new Point(mouseX, mouseY);
   * const localMouse = matrix.applyInverse(mousePoint);
   * ```
   * @param pos - The origin point to inverse-transform
   * @param newPos - Optional point to store the result
   * @returns The inverse-transformed point
   * @see {@link Matrix.apply} For forward transformation
   * @see {@link Matrix.invert} For getting inverse matrix
   */
  applyInverse(t, e) {
    e = e || new Pt();
    const i = this.a, s = this.b, n = this.c, a = this.d, o = this.tx, h = this.ty, l = 1 / (i * a + n * -s), c = t.x, u = t.y;
    return e.x = a * l * c + -n * l * u + (h * n - o * a) * l, e.y = i * l * u + -s * l * c + (-h * i + o * s) * l, e;
  }
  /**
   * Translates the matrix on the x and y axes.
   * Adds to the position values while preserving scale, rotation and skew.
   * @example
   * ```ts
   * // Basic translation
   * const matrix = new Matrix();
   * matrix.translate(100, 50); // Move right 100, down 50
   *
   * // Chain with other transformations
   * matrix
   *     .scale(2, 2)
   *     .translate(100, 0)
   *     .rotate(Math.PI / 4);
   * ```
   * @param x - How much to translate on the x axis
   * @param y - How much to translate on the y axis
   * @returns This matrix. Good for chaining method calls.
   * @see {@link Matrix.set} For setting position directly
   * @see {@link Matrix.setTransform} For complete transform setup
   */
  translate(t, e) {
    return this.tx += t, this.ty += e, this;
  }
  /**
   * Applies a scale transformation to the matrix.
   * Multiplies the scale values with existing matrix components.
   * @example
   * ```ts
   * // Basic scaling
   * const matrix = new Matrix();
   * matrix.scale(2, 3); // Scale 2x horizontally, 3x vertically
   *
   * // Chain with other transformations
   * matrix
   *     .translate(100, 100)
   *     .scale(2, 2)     // Scales after translation
   *     .rotate(Math.PI / 4);
   * ```
   * @param x - The amount to scale horizontally
   * @param y - The amount to scale vertically
   * @returns This matrix. Good for chaining method calls.
   * @see {@link Matrix.setTransform} For setting scale directly
   * @see {@link Matrix.append} For combining transformations
   */
  scale(t, e) {
    return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this;
  }
  /**
   * Applies a rotation transformation to the matrix.
   *
   * Rotates around the origin (0,0) by the given angle in radians.
   * @example
   * ```ts
   * // Basic rotation
   * const matrix = new Matrix();
   * matrix.rotate(Math.PI / 4); // Rotate 45 degrees
   *
   * // Chain with other transformations
   * matrix
   *     .translate(100, 100) // Move to rotation center
   *     .rotate(Math.PI)     // Rotate 180 degrees
   *     .scale(2, 2);        // Scale after rotation
   *
   * // Common angles
   * matrix.rotate(Math.PI / 2);  // 90 degrees
   * matrix.rotate(Math.PI);      // 180 degrees
   * matrix.rotate(Math.PI * 2);  // 360 degrees
   * ```
   * @remarks
   * - Rotates around origin point (0,0)
   * - Affects position if translation was set
   * - Uses counter-clockwise rotation
   * - Order of operations matters when chaining
   * @param angle - The angle in radians
   * @returns This matrix. Good for chaining method calls.
   * @see {@link Matrix.setTransform} For setting rotation directly
   * @see {@link Matrix.append} For combining transformations
   */
  rotate(t) {
    const e = Math.cos(t), i = Math.sin(t), s = this.a, n = this.c, a = this.tx;
    return this.a = s * e - this.b * i, this.b = s * i + this.b * e, this.c = n * e - this.d * i, this.d = n * i + this.d * e, this.tx = a * e - this.ty * i, this.ty = a * i + this.ty * e, this;
  }
  /**
   * Appends the given Matrix to this Matrix.
   * Combines two matrices by multiplying them together: this = this * matrix
   * @example
   * ```ts
   * // Basic matrix combination
   * const matrix = new Matrix();
   * const other = new Matrix().translate(100, 0).rotate(Math.PI / 4);
   * matrix.append(other);
   * ```
   * @remarks
   * - Order matters: A.append(B) !== B.append(A)
   * - Modifies current matrix
   * - Preserves transformation order
   * - Commonly used for combining transforms
   * @param matrix - The matrix to append
   * @returns This matrix. Good for chaining method calls.
   * @see {@link Matrix.prepend} For prepending transformations
   * @see {@link Matrix.appendFrom} For appending two external matrices
   */
  append(t) {
    const e = this.a, i = this.b, s = this.c, n = this.d;
    return this.a = t.a * e + t.b * s, this.b = t.a * i + t.b * n, this.c = t.c * e + t.d * s, this.d = t.c * i + t.d * n, this.tx = t.tx * e + t.ty * s + this.tx, this.ty = t.tx * i + t.ty * n + this.ty, this;
  }
  /**
   * Appends two matrices and sets the result to this matrix.
   * Performs matrix multiplication: this = A * B
   * @example
   * ```ts
   * // Basic matrix multiplication
   * const result = new Matrix();
   * const matrixA = new Matrix().scale(2, 2);
   * const matrixB = new Matrix().rotate(Math.PI / 4);
   * result.appendFrom(matrixA, matrixB);
   * ```
   * @remarks
   * - Order matters: A * B !== B * A
   * - Creates a new transformation from two others
   * - More efficient than append() for multiple operations
   * - Does not modify input matrices
   * @param a - The first matrix to multiply
   * @param b - The second matrix to multiply
   * @returns This matrix. Good for chaining method calls.
   * @see {@link Matrix.append} For single matrix combination
   * @see {@link Matrix.prepend} For reverse order multiplication
   */
  appendFrom(t, e) {
    const i = t.a, s = t.b, n = t.c, a = t.d, o = t.tx, h = t.ty, l = e.a, c = e.b, u = e.c, f = e.d;
    return this.a = i * l + s * u, this.b = i * c + s * f, this.c = n * l + a * u, this.d = n * c + a * f, this.tx = o * l + h * u + e.tx, this.ty = o * c + h * f + e.ty, this;
  }
  /**
   * Sets the matrix based on all the available properties.
   * Combines position, scale, rotation, skew and pivot in a single operation.
   * @example
   * ```ts
   * // Basic transform setup
   * const matrix = new Matrix();
   * matrix.setTransform(
   *     100, 100,    // position
   *     0, 0,        // pivot
   *     2, 2,        // scale
   *     Math.PI / 4, // rotation (45 degrees)
   *     0, 0         // skew
   * );
   * ```
   * @remarks
   * - Updates all matrix components at once
   * - More efficient than separate transform calls
   * - Uses radians for rotation and skew
   * - Pivot affects rotation center
   * @param x - Position on the x axis
   * @param y - Position on the y axis
   * @param pivotX - Pivot on the x axis
   * @param pivotY - Pivot on the y axis
   * @param scaleX - Scale on the x axis
   * @param scaleY - Scale on the y axis
   * @param rotation - Rotation in radians
   * @param skewX - Skew on the x axis
   * @param skewY - Skew on the y axis
   * @returns This matrix. Good for chaining method calls.
   * @see {@link Matrix.decompose} For extracting transform properties
   * @see {@link TransformableObject} For transform data structure
   */
  setTransform(t, e, i, s, n, a, o, h, l) {
    return this.a = Math.cos(o + l) * n, this.b = Math.sin(o + l) * n, this.c = -Math.sin(o - h) * a, this.d = Math.cos(o - h) * a, this.tx = t - (i * this.a + s * this.c), this.ty = e - (i * this.b + s * this.d), this;
  }
  /**
   * Prepends the given Matrix to this Matrix.
   * Combines two matrices by multiplying them together: this = matrix * this
   * @example
   * ```ts
   * // Basic matrix prepend
   * const matrix = new Matrix().scale(2, 2);
   * const other = new Matrix().translate(100, 0);
   * matrix.prepend(other); // Translation happens before scaling
   * ```
   * @remarks
   * - Order matters: A.prepend(B) !== B.prepend(A)
   * - Modifies current matrix
   * - Reverses transformation order compared to append()
   * @param matrix - The matrix to prepend
   * @returns This matrix. Good for chaining method calls.
   * @see {@link Matrix.append} For appending transformations
   * @see {@link Matrix.appendFrom} For combining external matrices
   */
  prepend(t) {
    const e = this.tx;
    if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
      const i = this.a, s = this.c;
      this.a = i * t.a + this.b * t.c, this.b = i * t.b + this.b * t.d, this.c = s * t.a + this.d * t.c, this.d = s * t.b + this.d * t.d;
    }
    return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this;
  }
  /**
   * Decomposes the matrix into its individual transform components.
   * Extracts position, scale, rotation and skew values from the matrix.
   * @example
   * ```ts
   * // Basic decomposition
   * const matrix = new Matrix()
   *     .translate(100, 100)
   *     .rotate(Math.PI / 4)
   *     .scale(2, 2);
   *
   * const transform = {
   *     position: new Point(),
   *     scale: new Point(),
   *     pivot: new Point(),
   *     skew: new Point(),
   *     rotation: 0
   * };
   *
   * matrix.decompose(transform);
   * console.log(transform.position); // Point(100, 100)
   * console.log(transform.rotation); // ~0.785 (PI/4)
   * console.log(transform.scale); // Point(2, 2)
   * ```
   * @remarks
   * - Handles combined transformations
   * - Accounts for pivot points
   * - Chooses between rotation/skew based on transform type
   * - Uses radians for rotation and skew
   * @param transform - The transform object to store the decomposed values
   * @returns The transform with the newly applied properties
   * @see {@link Matrix.setTransform} For composing from components
   * @see {@link TransformableObject} For transform structure
   */
  decompose(t) {
    const e = this.a, i = this.b, s = this.c, n = this.d, a = t.pivot, o = -Math.atan2(-s, n), h = Math.atan2(i, e), l = Math.abs(o + h);
    return l < 1e-5 || Math.abs(Gd - l) < 1e-5 ? (t.rotation = h, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = o, t.skew.y = h), t.scale.x = Math.sqrt(e * e + i * i), t.scale.y = Math.sqrt(s * s + n * n), t.position.x = this.tx + (a.x * e + a.y * s), t.position.y = this.ty + (a.x * i + a.y * n), t;
  }
  /**
   * Inverts this matrix.
   * Creates the matrix that when multiplied with this matrix results in an identity matrix.
   * @example
   * ```ts
   * // Basic matrix inversion
   * const matrix = new Matrix()
   *     .translate(100, 50)
   *     .scale(2, 2);
   *
   * matrix.invert(); // Now transforms in opposite direction
   *
   * // Verify inversion
   * const point = new Point(50, 50);
   * const transformed = matrix.apply(point);
   * const original = matrix.invert().apply(transformed);
   * // original ≈ point
   * ```
   * @remarks
   * - Modifies the current matrix
   * - Useful for reversing transformations
   * - Cannot invert matrices with zero determinant
   * @returns This matrix. Good for chaining method calls.
   * @see {@link Matrix.identity} For resetting to identity
   * @see {@link Matrix.applyInverse} For inverse transformations
   */
  invert() {
    const t = this.a, e = this.b, i = this.c, s = this.d, n = this.tx, a = t * s - e * i;
    return this.a = s / a, this.b = -e / a, this.c = -i / a, this.d = t / a, this.tx = (i * this.ty - s * n) / a, this.ty = -(t * this.ty - e * n) / a, this;
  }
  /**
   * Checks if this matrix is an identity matrix.
   *
   * An identity matrix has no transformations applied (default state).
   * @example
   * ```ts
   * // Check if matrix is identity
   * const matrix = new Matrix();
   * console.log(matrix.isIdentity()); // true
   *
   * // Check after transformations
   * matrix.translate(100, 0);
   * console.log(matrix.isIdentity()); // false
   *
   * // Reset and verify
   * matrix.identity();
   * console.log(matrix.isIdentity()); // true
   * ```
   * @remarks
   * - Verifies a = 1, d = 1 (no scale)
   * - Verifies b = 0, c = 0 (no skew)
   * - Verifies tx = 0, ty = 0 (no translation)
   * @returns True if matrix has no transformations
   * @see {@link Matrix.identity} For resetting to identity
   * @see {@link Matrix.IDENTITY} For constant identity matrix
   */
  isIdentity() {
    return this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1 && this.tx === 0 && this.ty === 0;
  }
  /**
   * Resets this Matrix to an identity (default) matrix.
   * Sets all components to their default values: scale=1, no skew, no translation.
   * @example
   * ```ts
   * // Reset transformed matrix
   * const matrix = new Matrix()
   *     .scale(2, 2)
   *     .rotate(Math.PI / 4);
   * matrix.identity(); // Back to default state
   *
   * // Chain after reset
   * matrix
   *     .identity()
   *     .translate(100, 100)
   *     .scale(2, 2);
   *
   * // Compare with identity constant
   * const isDefault = matrix.equals(Matrix.IDENTITY);
   * ```
   * @remarks
   * - Sets a=1, d=1 (default scale)
   * - Sets b=0, c=0 (no skew)
   * - Sets tx=0, ty=0 (no translation)
   * @returns This matrix. Good for chaining method calls.
   * @see {@link Matrix.IDENTITY} For constant identity matrix
   * @see {@link Matrix.isIdentity} For checking identity state
   */
  identity() {
    return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this;
  }
  /**
   * Creates a new Matrix object with the same values as this one.
   * @returns A copy of this matrix. Good for chaining method calls.
   */
  clone() {
    const t = new Y();
    return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t;
  }
  /**
   * Creates a new Matrix object with the same values as this one.
   * @param matrix
   * @example
   * ```ts
   * // Basic matrix cloning
   * const matrix = new Matrix()
   *     .translate(100, 100)
   *     .rotate(Math.PI / 4);
   * const copy = matrix.clone();
   *
   * // Clone and modify
   * const modified = matrix.clone()
   *     .scale(2, 2);
   *
   * // Compare matrices
   * console.log(matrix.equals(copy));     // true
   * console.log(matrix.equals(modified)); // false
   * ```
   * @returns A copy of this matrix. Good for chaining method calls.
   * @see {@link Matrix.copyTo} For copying to existing matrix
   * @see {@link Matrix.copyFrom} For copying from another matrix
   */
  copyTo(t) {
    return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t;
  }
  /**
   * Changes the values of the matrix to be the same as the ones in given matrix.
   * @example
   * ```ts
   * // Basic matrix copying
   * const source = new Matrix()
   *     .translate(100, 100)
   *     .rotate(Math.PI / 4);
   * const target = new Matrix();
   * target.copyFrom(source);
   * ```
   * @param matrix - The matrix to copy from
   * @returns This matrix. Good for chaining method calls.
   * @see {@link Matrix.clone} For creating new matrix copy
   * @see {@link Matrix.copyTo} For copying to another matrix
   */
  copyFrom(t) {
    return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this;
  }
  /**
   * Checks if this matrix equals another matrix.
   * Compares all components for exact equality.
   * @example
   * ```ts
   * // Basic equality check
   * const m1 = new Matrix();
   * const m2 = new Matrix();
   * console.log(m1.equals(m2)); // true
   *
   * // Compare transformed matrices
   * const transform = new Matrix()
   *     .translate(100, 100)
   * const clone = new Matrix()
   *     .scale(2, 2);
   * console.log(transform.equals(clone)); // false
   * ```
   * @param matrix - The matrix to compare to
   * @returns True if matrices are identical
   * @see {@link Matrix.copyFrom} For copying matrix values
   * @see {@link Matrix.isIdentity} For identity comparison
   */
  equals(t) {
    return t.a === this.a && t.b === this.b && t.c === this.c && t.d === this.d && t.tx === this.tx && t.ty === this.ty;
  }
  toString() {
    return `[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
  }
  /**
   * A default (identity) matrix with no transformations applied.
   *
   * > [!IMPORTANT] This is a shared read-only object. Create a new Matrix if you need to modify it.
   * @example
   * ```ts
   * // Get identity matrix reference
   * const identity = Matrix.IDENTITY;
   * console.log(identity.isIdentity()); // true
   *
   * // Compare with identity
   * const matrix = new Matrix();
   * console.log(matrix.equals(Matrix.IDENTITY)); // true
   *
   * // Create new matrix instead of modifying IDENTITY
   * const transform = new Matrix()
   *     .copyFrom(Matrix.IDENTITY)
   *     .translate(100, 100);
   * ```
   * @readonly
   * @returns A read-only identity matrix
   * @see {@link Matrix.shared} For temporary calculations
   * @see {@link Matrix.identity} For resetting matrices
   */
  static get IDENTITY() {
    return Vd.identity();
  }
  /**
   * A static Matrix that can be used to avoid creating new objects.
   * Will always ensure the matrix is reset to identity when requested.
   *
   * > [!IMPORTANT] This matrix is shared and temporary. Do not store references to it.
   * @example
   * ```ts
   * // Use for temporary calculations
   * const tempMatrix = Matrix.shared;
   * tempMatrix.translate(100, 100).rotate(Math.PI / 4);
   * const point = tempMatrix.apply({ x: 10, y: 20 });
   *
   * // Will be reset to identity on next access
   * const fresh = Matrix.shared; // Back to identity
   * ```
   * @remarks
   * - Always returns identity matrix
   * - Safe to modify temporarily
   * - Not safe to store references
   * - Useful for one-off calculations
   * @readonly
   * @returns A fresh identity matrix for temporary use
   * @see {@link Matrix.IDENTITY} For immutable identity matrix
   * @see {@link Matrix.identity} For resetting matrices
   */
  static get shared() {
    return Nd.identity();
  }
}
const Nd = new Y(), Vd = new Y(), Ke = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1], Ze = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1], Qe = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1], Je = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1], Mn = [], _l = [], kr = Math.sign;
function Yd() {
  for (let r = 0; r < 16; r++) {
    const t = [];
    Mn.push(t);
    for (let e = 0; e < 16; e++) {
      const i = kr(Ke[r] * Ke[e] + Qe[r] * Ze[e]), s = kr(Ze[r] * Ke[e] + Je[r] * Ze[e]), n = kr(Ke[r] * Qe[e] + Qe[r] * Je[e]), a = kr(Ze[r] * Qe[e] + Je[r] * Je[e]);
      for (let o = 0; o < 16; o++)
        if (Ke[o] === i && Ze[o] === s && Qe[o] === n && Je[o] === a) {
          t.push(o);
          break;
        }
    }
  }
  for (let r = 0; r < 16; r++) {
    const t = new Y();
    t.set(Ke[r], Ze[r], Qe[r], Je[r], 0, 0), _l.push(t);
  }
}
Yd();
const Q = {
  /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 0°       | East      |
   * @group groupD8
   * @type {GD8Symmetry}
   */
  E: 0,
  /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 45°↻     | Southeast |
   * @group groupD8
   * @type {GD8Symmetry}
   */
  SE: 1,
  /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 90°↻     | South     |
   * @group groupD8
   * @type {GD8Symmetry}
   */
  S: 2,
  /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 135°↻    | Southwest |
   * @group groupD8
   * @type {GD8Symmetry}
   */
  SW: 3,
  /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 180°     | West      |
   * @group groupD8
   * @type {GD8Symmetry}
   */
  W: 4,
  /**
   * | Rotation    | Direction    |
   * |-------------|--------------|
   * | -135°/225°↻ | Northwest    |
   * @group groupD8
   * @type {GD8Symmetry}
   */
  NW: 5,
  /**
   * | Rotation    | Direction    |
   * |-------------|--------------|
   * | -90°/270°↻  | North        |
   * @group groupD8
   * @type {GD8Symmetry}
   */
  N: 6,
  /**
   * | Rotation    | Direction    |
   * |-------------|--------------|
   * | -45°/315°↻  | Northeast    |
   * @group groupD8
   * @type {GD8Symmetry}
   */
  NE: 7,
  /**
   * Reflection about Y-axis.
   * @group groupD8
   * @type {GD8Symmetry}
   */
  MIRROR_VERTICAL: 8,
  /**
   * Reflection about the main diagonal.
   * @group groupD8
   * @type {GD8Symmetry}
   */
  MAIN_DIAGONAL: 10,
  /**
   * Reflection about X-axis.
   * @group groupD8
   * @type {GD8Symmetry}
   */
  MIRROR_HORIZONTAL: 12,
  /**
   * Reflection about reverse diagonal.
   * @group groupD8
   * @type {GD8Symmetry}
   */
  REVERSE_DIAGONAL: 14,
  /**
   * @group groupD8
   * @param {GD8Symmetry} ind - sprite rotation angle.
   * @returns {GD8Symmetry} The X-component of the U-axis
   *    after rotating the axes.
   */
  uX: (r) => Ke[r],
  /**
   * @group groupD8
   * @param {GD8Symmetry} ind - sprite rotation angle.
   * @returns {GD8Symmetry} The Y-component of the U-axis
   *    after rotating the axes.
   */
  uY: (r) => Ze[r],
  /**
   * @group groupD8
   * @param {GD8Symmetry} ind - sprite rotation angle.
   * @returns {GD8Symmetry} The X-component of the V-axis
   *    after rotating the axes.
   */
  vX: (r) => Qe[r],
  /**
   * @group groupD8
   * @param {GD8Symmetry} ind - sprite rotation angle.
   * @returns {GD8Symmetry} The Y-component of the V-axis
   *    after rotating the axes.
   */
  vY: (r) => Je[r],
  /**
   * @group groupD8
   * @param {GD8Symmetry} rotation - symmetry whose opposite
   *   is needed. Only rotations have opposite symmetries while
   *   reflections don't.
   * @returns {GD8Symmetry} The opposite symmetry of `rotation`
   */
  inv: (r) => r & 8 ? r & 15 : -r & 7,
  /**
   * Composes the two D8 operations.
   *
   * Taking `^` as reflection:
   *
   * |       | E=0 | S=2 | W=4 | N=6 | E^=8 | S^=10 | W^=12 | N^=14 |
   * |-------|-----|-----|-----|-----|------|-------|-------|-------|
   * | E=0   | E   | S   | W   | N   | E^   | S^    | W^    | N^    |
   * | S=2   | S   | W   | N   | E   | S^   | W^    | N^    | E^    |
   * | W=4   | W   | N   | E   | S   | W^   | N^    | E^    | S^    |
   * | N=6   | N   | E   | S   | W   | N^   | E^    | S^    | W^    |
   * | E^=8  | E^  | N^  | W^  | S^  | E    | N     | W     | S     |
   * | S^=10 | S^  | E^  | N^  | W^  | S    | E     | N     | W     |
   * | W^=12 | W^  | S^  | E^  | N^  | W    | S     | E     | N     |
   * | N^=14 | N^  | W^  | S^  | E^  | N    | W     | S     | E     |
   *
   * [This is a Cayley table]{@link https://en.wikipedia.org/wiki/Cayley_table}
   * @group groupD8
   * @param {GD8Symmetry} rotationSecond - Second operation, which
   *   is the row in the above cayley table.
   * @param {GD8Symmetry} rotationFirst - First operation, which
   *   is the column in the above cayley table.
   * @returns {GD8Symmetry} Composed operation
   */
  add: (r, t) => Mn[r][t],
  /**
   * Reverse of `add`.
   * @group groupD8
   * @param {GD8Symmetry} rotationSecond - Second operation
   * @param {GD8Symmetry} rotationFirst - First operation
   * @returns {GD8Symmetry} Result
   */
  sub: (r, t) => Mn[r][Q.inv(t)],
  /**
   * Adds 180 degrees to rotation, which is a commutative
   * operation.
   * @group groupD8
   * @param {number} rotation - The number to rotate.
   * @returns {number} Rotated number
   */
  rotate180: (r) => r ^ 4,
  /**
   * Checks if the rotation angle is vertical, i.e. south
   * or north. It doesn't work for reflections.
   * @group groupD8
   * @param {GD8Symmetry} rotation - The number to check.
   * @returns {boolean} Whether or not the direction is vertical
   */
  isVertical: (r) => (r & 3) === 2,
  // rotation % 4 === 2
  /**
   * Approximates the vector `V(dx,dy)` into one of the
   * eight directions provided by `groupD8`.
   * @group groupD8
   * @param {number} dx - X-component of the vector
   * @param {number} dy - Y-component of the vector
   * @returns {GD8Symmetry} Approximation of the vector into
   *  one of the eight symmetries.
   */
  byDirection: (r, t) => Math.abs(r) * 2 <= Math.abs(t) ? t >= 0 ? Q.S : Q.N : Math.abs(t) * 2 <= Math.abs(r) ? r > 0 ? Q.E : Q.W : t > 0 ? r > 0 ? Q.SE : Q.SW : r > 0 ? Q.NE : Q.NW,
  /**
   * Helps sprite to compensate texture packer rotation.
   * @group groupD8
   * @param {Matrix} matrix - sprite world matrix
   * @param {GD8Symmetry} rotation - The rotation factor to use.
   * @param {number} tx - sprite anchoring
   * @param {number} ty - sprite anchoring
   */
  matrixAppendRotationInv: (r, t, e = 0, i = 0) => {
    const s = _l[Q.inv(t)];
    s.tx = e, s.ty = i, r.append(s);
  },
  /**
   * Transforms rectangle coordinates based on texture packer rotation.
   * Used when texture atlas pages are rotated and coordinates need to be adjusted.
   * @group groupD8
   * @param {RectangleLike} rect - Rectangle with original coordinates to transform
   * @param {RectangleLike} sourceFrame - Source texture frame (includes offset and dimensions)
   * @param {GD8Symmetry} rotation - The groupD8 rotation value
   * @param {Rectangle} out - Rectangle to store the result
   * @returns {Rectangle} Transformed coordinates (includes source frame offset)
   */
  transformRectCoords: (r, t, e, i) => {
    const { x: s, y: n, width: a, height: o } = r, { x: h, y: l, width: c, height: u } = t;
    return e === Q.E ? (i.set(s + h, n + l, a, o), i) : e === Q.S ? i.set(
      c - n - o + h,
      s + l,
      o,
      a
    ) : e === Q.W ? i.set(
      c - s - a + h,
      u - n - o + l,
      a,
      o
    ) : e === Q.N ? i.set(
      n + h,
      u - s - a + l,
      o,
      a
    ) : i.set(s + h, n + l, a, o);
  }
}, Er = [new Pt(), new Pt(), new Pt(), new Pt()];
class _t {
  /**
   * @param x - The X coordinate of the upper-left corner of the rectangle
   * @param y - The Y coordinate of the upper-left corner of the rectangle
   * @param width - The overall width of the rectangle
   * @param height - The overall height of the rectangle
   */
  constructor(t = 0, e = 0, i = 0, s = 0) {
    this.type = "rectangle", this.x = Number(t), this.y = Number(e), this.width = Number(i), this.height = Number(s);
  }
  /**
   * Returns the left edge (x-coordinate) of the rectangle.
   * @example
   * ```ts
   * // Get left edge position
   * const rect = new Rectangle(100, 100, 200, 150);
   * console.log(rect.left); // 100
   *
   * // Use in alignment calculations
   * sprite.x = rect.left + padding;
   *
   * // Compare positions
   * if (point.x > rect.left) {
   *     console.log('Point is right of rectangle');
   * }
   * ```
   * @readonly
   * @returns The x-coordinate of the left edge
   * @see {@link Rectangle.right} For right edge position
   * @see {@link Rectangle.x} For direct x-coordinate access
   */
  get left() {
    return this.x;
  }
  /**
   * Returns the right edge (x + width) of the rectangle.
   * @example
   * ```ts
   * // Get right edge position
   * const rect = new Rectangle(100, 100, 200, 150);
   * console.log(rect.right); // 300
   *
   * // Align to right edge
   * sprite.x = rect.right - sprite.width;
   *
   * // Check boundaries
   * if (point.x < rect.right) {
   *     console.log('Point is inside right bound');
   * }
   * ```
   * @readonly
   * @returns The x-coordinate of the right edge
   * @see {@link Rectangle.left} For left edge position
   * @see {@link Rectangle.width} For width value
   */
  get right() {
    return this.x + this.width;
  }
  /**
   * Returns the top edge (y-coordinate) of the rectangle.
   * @example
   * ```ts
   * // Get top edge position
   * const rect = new Rectangle(100, 100, 200, 150);
   * console.log(rect.top); // 100
   *
   * // Position above rectangle
   * sprite.y = rect.top - sprite.height;
   *
   * // Check vertical position
   * if (point.y > rect.top) {
   *     console.log('Point is below top edge');
   * }
   * ```
   * @readonly
   * @returns The y-coordinate of the top edge
   * @see {@link Rectangle.bottom} For bottom edge position
   * @see {@link Rectangle.y} For direct y-coordinate access
   */
  get top() {
    return this.y;
  }
  /**
   * Returns the bottom edge (y + height) of the rectangle.
   * @example
   * ```ts
   * // Get bottom edge position
   * const rect = new Rectangle(100, 100, 200, 150);
   * console.log(rect.bottom); // 250
   *
   * // Stack below rectangle
   * sprite.y = rect.bottom + margin;
   *
   * // Check vertical bounds
   * if (point.y < rect.bottom) {
   *     console.log('Point is above bottom edge');
   * }
   * ```
   * @readonly
   * @returns The y-coordinate of the bottom edge
   * @see {@link Rectangle.top} For top edge position
   * @see {@link Rectangle.height} For height value
   */
  get bottom() {
    return this.y + this.height;
  }
  /**
   * Determines whether the Rectangle is empty (has no area).
   * @example
   * ```ts
   * // Check zero dimensions
   * const rect = new Rectangle(100, 100, 0, 50);
   * console.log(rect.isEmpty()); // true
   * ```
   * @returns True if the rectangle has no area
   * @see {@link Rectangle.width} For width value
   * @see {@link Rectangle.height} For height value
   */
  isEmpty() {
    return this.left === this.right || this.top === this.bottom;
  }
  /**
   * A constant empty rectangle. This is a new object every time the property is accessed.
   * @example
   * ```ts
   * // Get fresh empty rectangle
   * const empty = Rectangle.EMPTY;
   * console.log(empty.isEmpty()); // true
   * ```
   * @returns A new empty rectangle instance
   * @see {@link Rectangle.isEmpty} For empty state testing
   */
  static get EMPTY() {
    return new _t(0, 0, 0, 0);
  }
  /**
   * Creates a clone of this Rectangle
   * @example
   * ```ts
   * // Basic cloning
   * const original = new Rectangle(100, 100, 200, 150);
   * const copy = original.clone();
   *
   * // Clone and modify
   * const modified = original.clone();
   * modified.width *= 2;
   * modified.height += 50;
   *
   * // Verify independence
   * console.log(original.width);  // 200
   * console.log(modified.width);  // 400
   * ```
   * @returns A copy of the rectangle
   * @see {@link Rectangle.copyFrom} For copying into existing rectangle
   * @see {@link Rectangle.copyTo} For copying to another rectangle
   */
  clone() {
    return new _t(this.x, this.y, this.width, this.height);
  }
  /**
   * Converts a Bounds object to a Rectangle object.
   * @example
   * ```ts
   * // Convert bounds to rectangle
   * const bounds = container.getBounds();
   * const rect = new Rectangle().copyFromBounds(bounds);
   * ```
   * @param bounds - The bounds to copy and convert to a rectangle
   * @returns Returns itself
   * @see {@link Bounds} For bounds object structure
   * @see {@link Rectangle.getBounds} For getting rectangle bounds
   */
  copyFromBounds(t) {
    return this.x = t.minX, this.y = t.minY, this.width = t.maxX - t.minX, this.height = t.maxY - t.minY, this;
  }
  /**
   * Copies another rectangle to this one.
   * @example
   * ```ts
   * // Basic copying
   * const source = new Rectangle(100, 100, 200, 150);
   * const target = new Rectangle();
   * target.copyFrom(source);
   *
   * // Chain with other operations
   * const rect = new Rectangle()
   *     .copyFrom(source)
   *     .pad(10);
   * ```
   * @param rectangle - The rectangle to copy from
   * @returns Returns itself
   * @see {@link Rectangle.copyTo} For copying to another rectangle
   * @see {@link Rectangle.clone} For creating new rectangle copy
   */
  copyFrom(t) {
    return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this;
  }
  /**
   * Copies this rectangle to another one.
   * @example
   * ```ts
   * // Basic copying
   * const source = new Rectangle(100, 100, 200, 150);
   * const target = new Rectangle();
   * source.copyTo(target);
   *
   * // Chain with other operations
   * const result = source
   *     .copyTo(new Rectangle())
   *     .getBounds();
   * ```
   * @param rectangle - The rectangle to copy to
   * @returns Returns given parameter
   * @see {@link Rectangle.copyFrom} For copying from another rectangle
   * @see {@link Rectangle.clone} For creating new rectangle copy
   */
  copyTo(t) {
    return t.copyFrom(this), t;
  }
  /**
   * Checks whether the x and y coordinates given are contained within this Rectangle
   * @example
   * ```ts
   * // Basic containment check
   * const rect = new Rectangle(100, 100, 200, 150);
   * const isInside = rect.contains(150, 125); // true
   * // Check edge cases
   * console.log(rect.contains(100, 100)); // true (on edge)
   * console.log(rect.contains(300, 250)); // false (outside)
   * ```
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @returns Whether the x/y coordinates are within this Rectangle
   * @see {@link Rectangle.containsRect} For rectangle containment
   * @see {@link Rectangle.strokeContains} For checking stroke intersection
   */
  contains(t, e) {
    return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height;
  }
  /**
   * Checks whether the x and y coordinates given are contained within this rectangle including the stroke.
   * @example
   * ```ts
   * // Basic stroke check
   * const rect = new Rectangle(100, 100, 200, 150);
   * const isOnStroke = rect.strokeContains(150, 100, 4); // 4px line width
   *
   * // Check with different alignments
   * const innerStroke = rect.strokeContains(150, 100, 4, 1);   // Inside
   * const centerStroke = rect.strokeContains(150, 100, 4, 0.5); // Centered
   * const outerStroke = rect.strokeContains(150, 100, 4, 0);   // Outside
   * ```
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @param strokeWidth - The width of the line to check
   * @param alignment - The alignment of the stroke (1 = inner, 0.5 = centered, 0 = outer)
   * @returns Whether the x/y coordinates are within this rectangle's stroke
   * @see {@link Rectangle.contains} For checking fill containment
   * @see {@link Rectangle.getBounds} For getting stroke bounds
   */
  strokeContains(t, e, i, s = 0.5) {
    const { width: n, height: a } = this;
    if (n <= 0 || a <= 0)
      return !1;
    const o = this.x, h = this.y, l = i * (1 - s), c = i - l, u = o - l, f = o + n + l, d = h - l, g = h + a + l, p = o + c, m = o + n - c, _ = h + c, y = h + a - c;
    return t >= u && t <= f && e >= d && e <= g && !(t > p && t < m && e > _ && e < y);
  }
  /**
   * Determines whether the `other` Rectangle transformed by `transform` intersects with `this` Rectangle object.
   * Returns true only if the area of the intersection is >0, this means that Rectangles
   * sharing a side are not overlapping. Another side effect is that an arealess rectangle
   * (width or height equal to zero) can't intersect any other rectangle.
   * @param {Rectangle} other - The Rectangle to intersect with `this`.
   * @param {Matrix} transform - The transformation matrix of `other`.
   * @returns {boolean} A value of `true` if the transformed `other` Rectangle intersects with `this`; otherwise `false`.
   */
  /**
   * Determines whether the `other` Rectangle transformed by `transform` intersects with `this` Rectangle object.
   *
   * Returns true only if the area of the intersection is greater than 0.
   * This means that rectangles sharing only a side are not considered intersecting.
   * @example
   * ```ts
   * // Basic intersection check
   * const rect1 = new Rectangle(0, 0, 100, 100);
   * const rect2 = new Rectangle(50, 50, 100, 100);
   * console.log(rect1.intersects(rect2)); // true
   *
   * // With transformation matrix
   * const matrix = new Matrix();
   * matrix.rotate(Math.PI / 4); // 45 degrees
   * console.log(rect1.intersects(rect2, matrix)); // Checks with rotation
   *
   * // Edge cases
   * const zeroWidth = new Rectangle(0, 0, 0, 100);
   * console.log(rect1.intersects(zeroWidth)); // false (no area)
   * ```
   * @remarks
   * - Returns true only if intersection area is > 0
   * - Rectangles sharing only a side are not intersecting
   * - Zero-area rectangles cannot intersect anything
   * - Supports optional transformation matrix
   * @param other - The Rectangle to intersect with `this`
   * @param transform - Optional transformation matrix of `other`
   * @returns True if the transformed `other` Rectangle intersects with `this`
   * @see {@link Rectangle.containsRect} For containment testing
   * @see {@link Rectangle.contains} For point testing
   */
  intersects(t, e) {
    if (!e) {
      const C = this.x < t.x ? t.x : this.x;
      if ((this.right > t.right ? t.right : this.right) <= C)
        return !1;
      const P = this.y < t.y ? t.y : this.y;
      return (this.bottom > t.bottom ? t.bottom : this.bottom) > P;
    }
    const i = this.left, s = this.right, n = this.top, a = this.bottom;
    if (s <= i || a <= n)
      return !1;
    const o = Er[0].set(t.left, t.top), h = Er[1].set(t.left, t.bottom), l = Er[2].set(t.right, t.top), c = Er[3].set(t.right, t.bottom);
    if (l.x <= o.x || h.y <= o.y)
      return !1;
    const u = Math.sign(e.a * e.d - e.b * e.c);
    if (u === 0 || (e.apply(o, o), e.apply(h, h), e.apply(l, l), e.apply(c, c), Math.max(o.x, h.x, l.x, c.x) <= i || Math.min(o.x, h.x, l.x, c.x) >= s || Math.max(o.y, h.y, l.y, c.y) <= n || Math.min(o.y, h.y, l.y, c.y) >= a))
      return !1;
    const f = u * (h.y - o.y), d = u * (o.x - h.x), g = f * i + d * n, p = f * s + d * n, m = f * i + d * a, _ = f * s + d * a;
    if (Math.max(g, p, m, _) <= f * o.x + d * o.y || Math.min(g, p, m, _) >= f * c.x + d * c.y)
      return !1;
    const y = u * (o.y - l.y), x = u * (l.x - o.x), b = y * i + x * n, v = y * s + x * n, A = y * i + x * a, S = y * s + x * a;
    return !(Math.max(b, v, A, S) <= y * o.x + x * o.y || Math.min(b, v, A, S) >= y * c.x + x * c.y);
  }
  /**
   * Pads the rectangle making it grow in all directions.
   *
   * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
   * @example
   * ```ts
   * // Basic padding
   * const rect = new Rectangle(100, 100, 200, 150);
   * rect.pad(10); // Adds 10px padding on all sides
   *
   * // Different horizontal and vertical padding
   * const uiRect = new Rectangle(0, 0, 100, 50);
   * uiRect.pad(20, 10); // 20px horizontal, 10px vertical
   * ```
   * @remarks
   * - Adjusts x/y by subtracting padding
   * - Increases width/height by padding * 2
   * - Common in UI layout calculations
   * - Chainable with other methods
   * @param paddingX - The horizontal padding amount
   * @param paddingY - The vertical padding amount
   * @returns Returns itself
   * @see {@link Rectangle.enlarge} For growing to include another rectangle
   * @see {@link Rectangle.fit} For shrinking to fit within another rectangle
   */
  pad(t = 0, e = t) {
    return this.x -= t, this.y -= e, this.width += t * 2, this.height += e * 2, this;
  }
  /**
   * Fits this rectangle around the passed one.
   * @example
   * ```ts
   * // Basic fitting
   * const container = new Rectangle(0, 0, 100, 100);
   * const content = new Rectangle(25, 25, 200, 200);
   * content.fit(container); // Clips to container bounds
   * ```
   * @param rectangle - The rectangle to fit around
   * @returns Returns itself
   * @see {@link Rectangle.enlarge} For growing to include another rectangle
   * @see {@link Rectangle.pad} For adding padding around the rectangle
   */
  fit(t) {
    const e = Math.max(this.x, t.x), i = Math.min(this.x + this.width, t.x + t.width), s = Math.max(this.y, t.y), n = Math.min(this.y + this.height, t.y + t.height);
    return this.x = e, this.width = Math.max(i - e, 0), this.y = s, this.height = Math.max(n - s, 0), this;
  }
  /**
   * Enlarges rectangle so that its corners lie on a grid defined by resolution.
   * @example
   * ```ts
   * // Basic grid alignment
   * const rect = new Rectangle(10.2, 10.6, 100.8, 100.4);
   * rect.ceil(); // Aligns to whole pixels
   *
   * // Custom resolution grid
   * const uiRect = new Rectangle(5.3, 5.7, 50.2, 50.8);
   * uiRect.ceil(0.5); // Aligns to half pixels
   *
   * // Use with precision value
   * const preciseRect = new Rectangle(20.001, 20.999, 100.001, 100.999);
   * preciseRect.ceil(1, 0.01); // Handles small decimal variations
   * ```
   * @param resolution - The grid size to align to (1 = whole pixels)
   * @param eps - Small number to prevent floating point errors
   * @returns Returns itself
   * @see {@link Rectangle.fit} For constraining to bounds
   * @see {@link Rectangle.enlarge} For growing dimensions
   */
  ceil(t = 1, e = 1e-3) {
    const i = Math.ceil((this.x + this.width - e) * t) / t, s = Math.ceil((this.y + this.height - e) * t) / t;
    return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = i - this.x, this.height = s - this.y, this;
  }
  /**
   * Scales the rectangle's dimensions and position by the specified factors.
   * @example
   * ```ts
   * const rect = new Rectangle(50, 50, 100, 100);
   *
   * // Scale uniformly
   * rect.scale(0.5, 0.5);
   * // rect is now: x=25, y=25, width=50, height=50
   *
   * // non-uniformly
   * rect.scale(0.5, 1);
   * // rect is now: x=25, y=50, width=50, height=100
   * ```
   * @param x - The factor by which to scale the horizontal properties (x, width).
   * @param y - The factor by which to scale the vertical properties (y, height).
   * @returns Returns itself
   */
  scale(t, e = t) {
    return this.x *= t, this.y *= e, this.width *= t, this.height *= e, this;
  }
  /**
   * Enlarges this rectangle to include the passed rectangle.
   * @example
   * ```ts
   * // Basic enlargement
   * const rect = new Rectangle(50, 50, 100, 100);
   * const other = new Rectangle(0, 0, 200, 75);
   * rect.enlarge(other);
   * // rect is now: x=0, y=0, width=200, height=150
   *
   * // Use for bounding box calculation
   * const bounds = new Rectangle();
   * objects.forEach((obj) => {
   *     bounds.enlarge(obj.getBounds());
   * });
   * ```
   * @param rectangle - The rectangle to include
   * @returns Returns itself
   * @see {@link Rectangle.fit} For shrinking to fit within another rectangle
   * @see {@link Rectangle.pad} For adding padding around the rectangle
   */
  enlarge(t) {
    const e = Math.min(this.x, t.x), i = Math.max(this.x + this.width, t.x + t.width), s = Math.min(this.y, t.y), n = Math.max(this.y + this.height, t.y + t.height);
    return this.x = e, this.width = i - e, this.y = s, this.height = n - s, this;
  }
  /**
   * Returns the framing rectangle of the rectangle as a Rectangle object
   * @example
   * ```ts
   * // Basic bounds retrieval
   * const rect = new Rectangle(100, 100, 200, 150);
   * const bounds = rect.getBounds();
   *
   * // Reuse existing rectangle
   * const out = new Rectangle();
   * rect.getBounds(out);
   * ```
   * @param out - Optional rectangle to store the result
   * @returns The framing rectangle
   * @see {@link Rectangle.copyFrom} For direct copying
   * @see {@link Rectangle.clone} For creating new copy
   */
  getBounds(t) {
    return t || (t = new _t()), t.copyFrom(this), t;
  }
  /**
   * Determines whether another Rectangle is fully contained within this Rectangle.
   *
   * Rectangles that occupy the same space are considered to be containing each other.
   *
   * Rectangles without area (width or height equal to zero) can't contain anything,
   * not even other arealess rectangles.
   * @example
   * ```ts
   * // Check if one rectangle contains another
   * const container = new Rectangle(0, 0, 100, 100);
   * const inner = new Rectangle(25, 25, 50, 50);
   *
   * console.log(container.containsRect(inner)); // true
   *
   * // Check overlapping rectangles
   * const partial = new Rectangle(75, 75, 50, 50);
   * console.log(container.containsRect(partial)); // false
   *
   * // Zero-area rectangles
   * const empty = new Rectangle(0, 0, 0, 100);
   * console.log(container.containsRect(empty)); // false
   * ```
   * @param other - The Rectangle to check for containment
   * @returns True if other is fully contained within this Rectangle
   * @see {@link Rectangle.contains} For point containment
   * @see {@link Rectangle.intersects} For overlap testing
   */
  containsRect(t) {
    if (this.width <= 0 || this.height <= 0)
      return !1;
    const e = t.x, i = t.y, s = t.x + t.width, n = t.y + t.height;
    return e >= this.x && e < this.x + this.width && i >= this.y && i < this.y + this.height && s >= this.x && s < this.x + this.width && n >= this.y && n < this.y + this.height;
  }
  /**
   * Sets the position and dimensions of the rectangle.
   * @example
   * ```ts
   * // Basic usage
   * const rect = new Rectangle();
   * rect.set(100, 100, 200, 150);
   *
   * // Chain with other operations
   * const bounds = new Rectangle()
   *     .set(0, 0, 100, 100)
   *     .pad(10);
   * ```
   * @param x - The X coordinate of the upper-left corner of the rectangle
   * @param y - The Y coordinate of the upper-left corner of the rectangle
   * @param width - The overall width of the rectangle
   * @param height - The overall height of the rectangle
   * @returns Returns itself for method chaining
   * @see {@link Rectangle.copyFrom} For copying from another rectangle
   * @see {@link Rectangle.clone} For creating a new copy
   */
  set(t, e, i, s) {
    return this.x = t, this.y = e, this.width = i, this.height = s, this;
  }
  toString() {
    return `[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
  }
}
const Is = {
  default: -1
};
function ft(r = "default") {
  return Is[r] === void 0 && (Is[r] = -1), ++Is[r];
}
const no = /* @__PURE__ */ new Set(), Z = "8.0.0", $d = "8.3.4", yi = {
  quiet: !1,
  noColor: !1
}, N = (r, t, e = 3) => {
  if (yi.quiet || no.has(t))
    return;
  let i = new Error().stack;
  const s = `${t}
Deprecated since v${r}`, n = typeof console.groupCollapsed == "function" && !yi.noColor;
  typeof i > "u" ? console.warn("PixiJS Deprecation Warning: ", s) : (i = i.split(`
`).splice(e).join(`
`), n ? (console.groupCollapsed(
    "%cPixiJS Deprecation Warning: %c%s",
    "color:#614108;background:#fffbe6",
    "font-weight:normal;color:#614108;background:#fffbe6",
    s
  ), console.warn(i), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", s), console.warn(i))), no.add(t);
};
Object.defineProperties(N, {
  quiet: {
    get: () => yi.quiet,
    set: (r) => {
      yi.quiet = r;
    },
    enumerable: !0,
    configurable: !1
  },
  noColor: {
    get: () => yi.noColor,
    set: (r) => {
      yi.noColor = r;
    },
    enumerable: !0,
    configurable: !1
  }
});
const yl = () => {
};
function ss(r) {
  return r += r === 0 ? 1 : 0, --r, r |= r >>> 1, r |= r >>> 2, r |= r >>> 4, r |= r >>> 8, r |= r >>> 16, r + 1;
}
function ao(r) {
  return !(r & r - 1) && !!r;
}
function xl(r) {
  const t = {};
  for (const e in r)
    r[e] !== void 0 && (t[e] = r[e]);
  return t;
}
const oo = /* @__PURE__ */ Object.create(null);
function jd(r) {
  const t = oo[r];
  return t === void 0 && (oo[r] = ft("resource")), t;
}
const bl = class wl extends oe {
  /**
   * @param options - options for the style
   */
  constructor(t = {}) {
    super(), this._resourceType = "textureSampler", this._touched = 0, this._maxAnisotropy = 1, this.destroyed = !1, t = { ...wl.defaultOptions, ...t }, this.addressMode = t.addressMode, this.addressModeU = t.addressModeU ?? this.addressModeU, this.addressModeV = t.addressModeV ?? this.addressModeV, this.addressModeW = t.addressModeW ?? this.addressModeW, this.scaleMode = t.scaleMode, this.magFilter = t.magFilter ?? this.magFilter, this.minFilter = t.minFilter ?? this.minFilter, this.mipmapFilter = t.mipmapFilter ?? this.mipmapFilter, this.lodMinClamp = t.lodMinClamp, this.lodMaxClamp = t.lodMaxClamp, this.compare = t.compare, this.maxAnisotropy = t.maxAnisotropy ?? 1;
  }
  set addressMode(t) {
    this.addressModeU = t, this.addressModeV = t, this.addressModeW = t;
  }
  /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */
  get addressMode() {
    return this.addressModeU;
  }
  set wrapMode(t) {
    N(Z, "TextureStyle.wrapMode is now TextureStyle.addressMode"), this.addressMode = t;
  }
  get wrapMode() {
    return this.addressMode;
  }
  set scaleMode(t) {
    this.magFilter = t, this.minFilter = t, this.mipmapFilter = t;
  }
  /** setting this will set magFilter,minFilter and mipmapFilter all at once!  */
  get scaleMode() {
    return this.magFilter;
  }
  /** Specifies the maximum anisotropy value clamp used by the sampler. */
  set maxAnisotropy(t) {
    this._maxAnisotropy = Math.min(t, 16), this._maxAnisotropy > 1 && (this.scaleMode = "linear");
  }
  get maxAnisotropy() {
    return this._maxAnisotropy;
  }
  // TODO - move this to WebGL?
  get _resourceId() {
    return this._sharedResourceId || this._generateResourceId();
  }
  update() {
    this._sharedResourceId = null, this.emit("change", this);
  }
  _generateResourceId() {
    const t = `${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;
    return this._sharedResourceId = jd(t), this._resourceId;
  }
  /** Destroys the style */
  destroy() {
    this.destroyed = !0, this.emit("destroy", this), this.emit("change", this), this.removeAllListeners();
  }
};
bl.defaultOptions = {
  addressMode: "clamp-to-edge",
  scaleMode: "linear"
};
let ns = bl;
const vl = class Sl extends oe {
  /**
   * @param options - options for creating a new TextureSource
   */
  constructor(t = {}) {
    super(), this.options = t, this._gpuData = /* @__PURE__ */ Object.create(null), this._gcLastUsed = -1, this.uid = ft("textureSource"), this._resourceType = "textureSource", this._resourceId = ft("resource"), this.uploadMethodId = "unknown", this._resolution = 1, this.pixelWidth = 1, this.pixelHeight = 1, this.width = 1, this.height = 1, this.sampleCount = 1, this.mipLevelCount = 1, this.autoGenerateMipmaps = !1, this.format = "rgba8unorm", this.dimension = "2d", this.antialias = !1, this._touched = 0, this._batchTick = -1, this._textureBindLocation = -1, t = { ...Sl.defaultOptions, ...t }, this.label = t.label ?? "", this.resource = t.resource, this.autoGarbageCollect = t.autoGarbageCollect, this._resolution = t.resolution, t.width ? this.pixelWidth = t.width * this._resolution : this.pixelWidth = this.resource ? this.resourceWidth ?? 1 : 1, t.height ? this.pixelHeight = t.height * this._resolution : this.pixelHeight = this.resource ? this.resourceHeight ?? 1 : 1, this.width = this.pixelWidth / this._resolution, this.height = this.pixelHeight / this._resolution, this.format = t.format, this.dimension = t.dimensions, this.mipLevelCount = t.mipLevelCount, this.autoGenerateMipmaps = t.autoGenerateMipmaps, this.sampleCount = t.sampleCount, this.antialias = t.antialias, this.alphaMode = t.alphaMode, this.style = new ns(xl(t)), this.destroyed = !1, this._refreshPOT();
  }
  /** returns itself */
  get source() {
    return this;
  }
  /** the style of the texture */
  get style() {
    return this._style;
  }
  set style(t) {
    this.style !== t && (this._style?.off("change", this._onStyleChange, this), this._style = t, this._style?.on("change", this._onStyleChange, this), this._onStyleChange());
  }
  /** Specifies the maximum anisotropy value clamp used by the sampler. */
  set maxAnisotropy(t) {
    this._style.maxAnisotropy = t;
  }
  get maxAnisotropy() {
    return this._style.maxAnisotropy;
  }
  /** setting this will set wrapModeU, wrapModeV and wrapModeW all at once! */
  get addressMode() {
    return this._style.addressMode;
  }
  set addressMode(t) {
    this._style.addressMode = t;
  }
  /** setting this will set wrapModeU, wrapModeV and wrapModeW all at once! */
  get repeatMode() {
    return this._style.addressMode;
  }
  set repeatMode(t) {
    this._style.addressMode = t;
  }
  /** Specifies the sampling behavior when the sample footprint is smaller than or equal to one texel. */
  get magFilter() {
    return this._style.magFilter;
  }
  set magFilter(t) {
    this._style.magFilter = t;
  }
  /** Specifies the sampling behavior when the sample footprint is larger than one texel. */
  get minFilter() {
    return this._style.minFilter;
  }
  set minFilter(t) {
    this._style.minFilter = t;
  }
  /** Specifies behavior for sampling between mipmap levels. */
  get mipmapFilter() {
    return this._style.mipmapFilter;
  }
  set mipmapFilter(t) {
    this._style.mipmapFilter = t;
  }
  /** Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. */
  get lodMinClamp() {
    return this._style.lodMinClamp;
  }
  set lodMinClamp(t) {
    this._style.lodMinClamp = t;
  }
  /** Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. */
  get lodMaxClamp() {
    return this._style.lodMaxClamp;
  }
  set lodMaxClamp(t) {
    this._style.lodMaxClamp = t;
  }
  _onStyleChange() {
    this.emit("styleChange", this);
  }
  /** call this if you have modified the texture outside of the constructor */
  update() {
    if (this.resource) {
      const t = this._resolution;
      if (this.resize(this.resourceWidth / t, this.resourceHeight / t))
        return;
    }
    this.emit("update", this);
  }
  /** Destroys this texture source */
  destroy() {
    this.destroyed = !0, this.unload(), this.emit("destroy", this), this._style && (this._style.destroy(), this._style = null), this.uploadMethodId = null, this.resource = null, this.removeAllListeners();
  }
  /**
   * This will unload the Texture source from the GPU. This will free up the GPU memory
   * As soon as it is required fore rendering, it will be re-uploaded.
   */
  unload() {
    this._resourceId = ft("resource"), this.emit("change", this), this.emit("unload", this);
    for (const t in this._gpuData)
      this._gpuData[t]?.destroy?.();
    this._gpuData = /* @__PURE__ */ Object.create(null);
  }
  /** the width of the resource. This is the REAL pure number, not accounting resolution   */
  get resourceWidth() {
    const { resource: t } = this;
    return t.naturalWidth || t.videoWidth || t.displayWidth || t.width;
  }
  /** the height of the resource. This is the REAL pure number, not accounting resolution */
  get resourceHeight() {
    const { resource: t } = this;
    return t.naturalHeight || t.videoHeight || t.displayHeight || t.height;
  }
  /**
   * the resolution of the texture. Changing this number, will not change the number of pixels in the actual texture
   * but will the size of the texture when rendered.
   *
   * changing the resolution of this texture to 2 for example will make it appear twice as small when rendered (as pixel
   * density will have increased)
   */
  get resolution() {
    return this._resolution;
  }
  set resolution(t) {
    this._resolution !== t && (this._resolution = t, this.width = this.pixelWidth / t, this.height = this.pixelHeight / t);
  }
  /**
   * Resize the texture, this is handy if you want to use the texture as a render texture
   * @param width - the new width of the texture
   * @param height - the new height of the texture
   * @param resolution - the new resolution of the texture
   * @returns - if the texture was resized
   */
  resize(t, e, i) {
    i || (i = this._resolution), t || (t = this.width), e || (e = this.height);
    const s = Math.round(t * i), n = Math.round(e * i);
    return this.width = s / i, this.height = n / i, this._resolution = i, this.pixelWidth === s && this.pixelHeight === n ? !1 : (this._refreshPOT(), this.pixelWidth = s, this.pixelHeight = n, this.emit("resize", this), this._resourceId = ft("resource"), this.emit("change", this), !0);
  }
  /**
   * Lets the renderer know that this texture has been updated and its mipmaps should be re-generated.
   * This is only important for RenderTexture instances, as standard Texture instances will have their
   * mipmaps generated on upload. You should call this method after you make any change to the texture
   *
   * The reason for this is is can be quite expensive to update mipmaps for a texture. So by default,
   * We want you, the developer to specify when this action should happen.
   *
   * Generally you don't want to have mipmaps generated on Render targets that are changed every frame,
   */
  updateMipmaps() {
    this.autoGenerateMipmaps && this.mipLevelCount > 1 && this.emit("updateMipmaps", this);
  }
  set wrapMode(t) {
    this._style.wrapMode = t;
  }
  get wrapMode() {
    return this._style.wrapMode;
  }
  set scaleMode(t) {
    this._style.scaleMode = t;
  }
  /** setting this will set magFilter,minFilter and mipmapFilter all at once!  */
  get scaleMode() {
    return this._style.scaleMode;
  }
  /**
   * Refresh check for isPowerOfTwo texture based on size
   * @private
   */
  _refreshPOT() {
    this.isPowerOfTwo = ao(this.pixelWidth) && ao(this.pixelHeight);
  }
  static test(t) {
    throw new Error("Unimplemented");
  }
};
vl.defaultOptions = {
  resolution: 1,
  format: "bgra8unorm",
  alphaMode: "premultiply-alpha-on-upload",
  dimensions: "2d",
  mipLevelCount: 1,
  autoGenerateMipmaps: !1,
  sampleCount: 1,
  antialias: !1,
  autoGarbageCollect: !1
};
let he = vl;
class pa extends he {
  constructor(t) {
    const e = t.resource || new Float32Array(t.width * t.height * 4);
    let i = t.format;
    i || (e instanceof Float32Array ? i = "rgba32float" : e instanceof Int32Array || e instanceof Uint32Array ? i = "rgba32uint" : e instanceof Int16Array || e instanceof Uint16Array ? i = "rgba16uint" : (e instanceof Int8Array, i = "bgra8unorm")), super({
      ...t,
      resource: e,
      format: i
    }), this.uploadMethodId = "buffer";
  }
  static test(t) {
    return t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array;
  }
}
pa.extension = D.TextureSource;
const ho = new Y();
class Xd {
  /**
   * @param texture - observed texture
   * @param clampMargin - Changes frame clamping, 0.5 by default. Use -0.5 for extra border.
   */
  constructor(t, e) {
    this.mapCoord = new Y(), this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, typeof e > "u" ? this.clampMargin = t.width < 10 ? 0 : 0.5 : this.clampMargin = e, this.isSimple = !1, this.texture = t;
  }
  /** Texture property. */
  get texture() {
    return this._texture;
  }
  set texture(t) {
    this.texture !== t && (this._texture?.removeListener("update", this.update, this), this._texture = t, this._texture.addListener("update", this.update, this), this.update());
  }
  /**
   * Multiplies uvs array to transform
   * @param uvs - mesh uvs
   * @param [out=uvs] - output
   * @returns - output
   */
  multiplyUvs(t, e) {
    e === void 0 && (e = t);
    const i = this.mapCoord;
    for (let s = 0; s < t.length; s += 2) {
      const n = t[s], a = t[s + 1];
      e[s] = n * i.a + a * i.c + i.tx, e[s + 1] = n * i.b + a * i.d + i.ty;
    }
    return e;
  }
  /**
   * Updates matrices if texture was changed
   * @returns - whether or not it was updated
   */
  update() {
    const t = this._texture;
    this._updateID++;
    const e = t.uvs;
    this.mapCoord.set(e.x1 - e.x0, e.y1 - e.y0, e.x3 - e.x0, e.y3 - e.y0, e.x0, e.y0);
    const i = t.orig, s = t.trim;
    s && (ho.set(
      i.width / s.width,
      0,
      0,
      i.height / s.height,
      -s.x / s.width,
      -s.y / s.height
    ), this.mapCoord.append(ho));
    const n = t.source, a = this.uClampFrame, o = this.clampMargin / n._resolution, h = this.clampOffset / n._resolution;
    return a[0] = (t.frame.x + o + h) / n.width, a[1] = (t.frame.y + o + h) / n.height, a[2] = (t.frame.x + t.frame.width - o + h) / n.width, a[3] = (t.frame.y + t.frame.height - o + h) / n.height, this.uClampOffset[0] = this.clampOffset / n.pixelWidth, this.uClampOffset[1] = this.clampOffset / n.pixelHeight, this.isSimple = t.frame.width === n.width && t.frame.height === n.height && t.rotate === 0, !0;
  }
}
class X extends oe {
  /**
   * @param {TextureOptions} options - Options for the texture
   */
  constructor({
    source: t,
    label: e,
    frame: i,
    orig: s,
    trim: n,
    defaultAnchor: a,
    defaultBorders: o,
    rotate: h,
    dynamic: l
  } = {}) {
    if (super(), this.uid = ft("texture"), this.uvs = { x0: 0, y0: 0, x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0 }, this.frame = new _t(), this.noFrame = !1, this.dynamic = !1, this.isTexture = !0, this.label = e, this.source = t?.source ?? new he(), this.noFrame = !i, i)
      this.frame.copyFrom(i);
    else {
      const { width: c, height: u } = this._source;
      this.frame.width = c, this.frame.height = u;
    }
    this.orig = s || this.frame, this.trim = n, this.rotate = h ?? 0, this.defaultAnchor = a, this.defaultBorders = o, this.destroyed = !1, this.dynamic = l || !1, this.updateUvs();
  }
  set source(t) {
    this._source && this._source.off("resize", this.update, this), this._source = t, t.on("resize", this.update, this), this.emit("update", this);
  }
  /** the underlying source of the texture (equivalent of baseTexture in v7) */
  get source() {
    return this._source;
  }
  /** returns a TextureMatrix instance for this texture. By default, that object is not created because its heavy. */
  get textureMatrix() {
    return this._textureMatrix || (this._textureMatrix = new Xd(this)), this._textureMatrix;
  }
  /** The width of the Texture in pixels. */
  get width() {
    return this.orig.width;
  }
  /** The height of the Texture in pixels. */
  get height() {
    return this.orig.height;
  }
  /** Call this function when you have modified the frame of this texture. */
  updateUvs() {
    const { uvs: t, frame: e } = this, { width: i, height: s } = this._source, n = e.x / i, a = e.y / s, o = e.width / i, h = e.height / s;
    let l = this.rotate;
    if (l) {
      const c = o / 2, u = h / 2, f = n + c, d = a + u;
      l = Q.add(l, Q.NW), t.x0 = f + c * Q.uX(l), t.y0 = d + u * Q.uY(l), l = Q.add(l, 2), t.x1 = f + c * Q.uX(l), t.y1 = d + u * Q.uY(l), l = Q.add(l, 2), t.x2 = f + c * Q.uX(l), t.y2 = d + u * Q.uY(l), l = Q.add(l, 2), t.x3 = f + c * Q.uX(l), t.y3 = d + u * Q.uY(l);
    } else
      t.x0 = n, t.y0 = a, t.x1 = n + o, t.y1 = a, t.x2 = n + o, t.y2 = a + h, t.x3 = n, t.y3 = a + h;
  }
  /**
   * Destroys this texture
   * @param destroySource - Destroy the source when the texture is destroyed.
   */
  destroy(t = !1) {
    this._source && (this._source.off("resize", this.update, this), t && (this._source.destroy(), this._source = null)), this._textureMatrix = null, this.destroyed = !0, this.emit("destroy", this), this.removeAllListeners();
  }
  /**
   * Call this if you have modified the `texture outside` of the constructor.
   *
   * If you have modified this texture's source, you must separately call `texture.source.update()` to see those changes.
   */
  update() {
    this.noFrame && (this.frame.width = this._source.width, this.frame.height = this._source.height), this.updateUvs(), this.emit("update", this);
  }
  /** @deprecated since 8.0.0 */
  get baseTexture() {
    return N(Z, "Texture.baseTexture is now Texture.source"), this._source;
  }
}
X.EMPTY = new X({
  label: "EMPTY",
  source: new he({
    label: "EMPTY"
  })
});
X.EMPTY.destroy = yl;
X.WHITE = new X({
  source: new pa({
    resource: new Uint8Array([255, 255, 255, 255]),
    width: 1,
    height: 1,
    alphaMode: "premultiply-alpha-on-upload",
    label: "WHITE"
  }),
  label: "WHITE"
});
X.WHITE.destroy = yl;
function Hd(r, t, e) {
  const { width: i, height: s } = e.orig, n = e.trim;
  if (n) {
    const a = n.width, o = n.height;
    r.minX = n.x - t._x * i, r.maxX = r.minX + a, r.minY = n.y - t._y * s, r.maxY = r.minY + o;
  } else
    r.minX = -t._x * i, r.maxX = r.minX + i, r.minY = -t._y * s, r.maxY = r.minY + s;
}
const lo = new Y();
class ae {
  /**
   * Creates a new Bounds object.
   * @param minX - The minimum X coordinate of the bounds.
   * @param minY - The minimum Y coordinate of the bounds.
   * @param maxX - The maximum X coordinate of the bounds.
   * @param maxY - The maximum Y coordinate of the bounds.
   */
  constructor(t = 1 / 0, e = 1 / 0, i = -1 / 0, s = -1 / 0) {
    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.matrix = lo, this.minX = t, this.minY = e, this.maxX = i, this.maxY = s;
  }
  /**
   * Checks if bounds are empty, meaning either width or height is zero or negative.
   * Empty bounds occur when min values exceed max values on either axis.
   * @example
   * ```ts
   * const bounds = new Bounds();
   *
   * // Check if newly created bounds are empty
   * console.log(bounds.isEmpty()); // true, default bounds are empty
   *
   * // Add frame and check again
   * bounds.addFrame(0, 0, 100, 100);
   * console.log(bounds.isEmpty()); // false, bounds now have area
   *
   * // Clear bounds
   * bounds.clear();
   * console.log(bounds.isEmpty()); // true, bounds are empty again
   * ```
   * @returns True if bounds are empty (have no area)
   * @see {@link Bounds#clear} For resetting bounds
   * @see {@link Bounds#isValid} For checking validity
   */
  isEmpty() {
    return this.minX > this.maxX || this.minY > this.maxY;
  }
  /**
   * The bounding rectangle representation of these bounds.
   * Lazily creates and updates a Rectangle instance based on the current bounds.
   * @example
   * ```ts
   * const bounds = new Bounds(0, 0, 100, 100);
   *
   * // Get rectangle representation
   * const rect = bounds.rectangle;
   * console.log(rect.x, rect.y, rect.width, rect.height);
   *
   * // Use for hit testing
   * if (bounds.rectangle.contains(mouseX, mouseY)) {
   *     console.log('Mouse is inside bounds!');
   * }
   * ```
   * @see {@link Rectangle} For rectangle methods
   * @see {@link Bounds.isEmpty} For bounds validation
   */
  get rectangle() {
    this._rectangle || (this._rectangle = new _t());
    const t = this._rectangle;
    return this.minX > this.maxX || this.minY > this.maxY ? (t.x = 0, t.y = 0, t.width = 0, t.height = 0) : t.copyFromBounds(this), t;
  }
  /**
   * Clears the bounds and resets all coordinates to their default values.
   * Resets the transformation matrix back to identity.
   * @example
   * ```ts
   * const bounds = new Bounds(0, 0, 100, 100);
   * console.log(bounds.isEmpty()); // false
   * // Clear the bounds
   * bounds.clear();
   * console.log(bounds.isEmpty()); // true
   * ```
   * @returns This bounds object for chaining
   */
  clear() {
    return this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.matrix = lo, this;
  }
  /**
   * Sets the bounds directly using coordinate values.
   * Provides a way to set all bounds values at once.
   * @example
   * ```ts
   * const bounds = new Bounds();
   * bounds.set(0, 0, 100, 100);
   * ```
   * @param x0 - Left X coordinate of frame
   * @param y0 - Top Y coordinate of frame
   * @param x1 - Right X coordinate of frame
   * @param y1 - Bottom Y coordinate of frame
   * @see {@link Bounds#addFrame} For matrix-aware bounds setting
   * @see {@link Bounds#clear} For resetting bounds
   */
  set(t, e, i, s) {
    this.minX = t, this.minY = e, this.maxX = i, this.maxY = s;
  }
  /**
   * Adds a rectangular frame to the bounds, optionally transformed by a matrix.
   * Updates the bounds to encompass the new frame coordinates.
   * @example
   * ```ts
   * const bounds = new Bounds();
   * bounds.addFrame(0, 0, 100, 100);
   *
   * // Add transformed frame
   * const matrix = new Matrix()
   *     .translate(50, 50)
   *     .rotate(Math.PI / 4);
   * bounds.addFrame(0, 0, 100, 100, matrix);
   * ```
   * @param x0 - Left X coordinate of frame
   * @param y0 - Top Y coordinate of frame
   * @param x1 - Right X coordinate of frame
   * @param y1 - Bottom Y coordinate of frame
   * @param matrix - Optional transformation matrix
   * @see {@link Bounds#addRect} For adding Rectangle objects
   * @see {@link Bounds#addBounds} For adding other Bounds
   */
  addFrame(t, e, i, s, n) {
    n || (n = this.matrix);
    const a = n.a, o = n.b, h = n.c, l = n.d, c = n.tx, u = n.ty;
    let f = this.minX, d = this.minY, g = this.maxX, p = this.maxY, m = a * t + h * e + c, _ = o * t + l * e + u;
    m < f && (f = m), _ < d && (d = _), m > g && (g = m), _ > p && (p = _), m = a * i + h * e + c, _ = o * i + l * e + u, m < f && (f = m), _ < d && (d = _), m > g && (g = m), _ > p && (p = _), m = a * t + h * s + c, _ = o * t + l * s + u, m < f && (f = m), _ < d && (d = _), m > g && (g = m), _ > p && (p = _), m = a * i + h * s + c, _ = o * i + l * s + u, m < f && (f = m), _ < d && (d = _), m > g && (g = m), _ > p && (p = _), this.minX = f, this.minY = d, this.maxX = g, this.maxY = p;
  }
  /**
   * Adds a rectangle to the bounds, optionally transformed by a matrix.
   * Updates the bounds to encompass the given rectangle.
   * @example
   * ```ts
   * const bounds = new Bounds();
   * // Add simple rectangle
   * const rect = new Rectangle(0, 0, 100, 100);
   * bounds.addRect(rect);
   *
   * // Add transformed rectangle
   * const matrix = new Matrix()
   *     .translate(50, 50)
   *     .rotate(Math.PI / 4);
   * bounds.addRect(rect, matrix);
   * ```
   * @param rect - The rectangle to be added
   * @param matrix - Optional transformation matrix
   * @see {@link Bounds#addFrame} For adding raw coordinates
   * @see {@link Bounds#addBounds} For adding other bounds
   */
  addRect(t, e) {
    this.addFrame(t.x, t.y, t.x + t.width, t.y + t.height, e);
  }
  /**
   * Adds another bounds object to this one, optionally transformed by a matrix.
   * Expands the bounds to include the given bounds' area.
   * @example
   * ```ts
   * const bounds = new Bounds();
   *
   * // Add child bounds
   * const childBounds = sprite.getBounds();
   * bounds.addBounds(childBounds);
   *
   * // Add transformed bounds
   * const matrix = new Matrix()
   *     .scale(2, 2);
   * bounds.addBounds(childBounds, matrix);
   * ```
   * @param bounds - The bounds to be added
   * @param matrix - Optional transformation matrix
   * @see {@link Bounds#addFrame} For adding raw coordinates
   * @see {@link Bounds#addRect} For adding rectangles
   */
  addBounds(t, e) {
    this.addFrame(t.minX, t.minY, t.maxX, t.maxY, e);
  }
  /**
   * Adds other Bounds as a mask, creating an intersection of the two bounds.
   * Only keeps the overlapping region between current bounds and mask bounds.
   * @example
   * ```ts
   * const bounds = new Bounds(0, 0, 100, 100);
   * // Create mask bounds
   * const mask = new Bounds();
   * mask.addFrame(50, 50, 150, 150);
   * // Apply mask - results in bounds of (50,50,100,100)
   * bounds.addBoundsMask(mask);
   * ```
   * @param mask - The Bounds to use as a mask
   * @see {@link Bounds#addBounds} For union operation
   * @see {@link Bounds#fit} For fitting to rectangle
   */
  addBoundsMask(t) {
    this.minX = this.minX > t.minX ? this.minX : t.minX, this.minY = this.minY > t.minY ? this.minY : t.minY, this.maxX = this.maxX < t.maxX ? this.maxX : t.maxX, this.maxY = this.maxY < t.maxY ? this.maxY : t.maxY;
  }
  /**
   * Applies a transformation matrix to the bounds, updating its coordinates.
   * Transforms all corners of the bounds using the given matrix.
   * @example
   * ```ts
   * const bounds = new Bounds(0, 0, 100, 100);
   * // Apply translation
   * const translateMatrix = new Matrix()
   *     .translate(50, 50);
   * bounds.applyMatrix(translateMatrix);
   * ```
   * @param matrix - The matrix to apply to the bounds
   * @see {@link Matrix} For matrix operations
   * @see {@link Bounds#addFrame} For adding transformed frames
   */
  applyMatrix(t) {
    const e = this.minX, i = this.minY, s = this.maxX, n = this.maxY, { a, b: o, c: h, d: l, tx: c, ty: u } = t;
    let f = a * e + h * i + c, d = o * e + l * i + u;
    this.minX = f, this.minY = d, this.maxX = f, this.maxY = d, f = a * s + h * i + c, d = o * s + l * i + u, this.minX = f < this.minX ? f : this.minX, this.minY = d < this.minY ? d : this.minY, this.maxX = f > this.maxX ? f : this.maxX, this.maxY = d > this.maxY ? d : this.maxY, f = a * e + h * n + c, d = o * e + l * n + u, this.minX = f < this.minX ? f : this.minX, this.minY = d < this.minY ? d : this.minY, this.maxX = f > this.maxX ? f : this.maxX, this.maxY = d > this.maxY ? d : this.maxY, f = a * s + h * n + c, d = o * s + l * n + u, this.minX = f < this.minX ? f : this.minX, this.minY = d < this.minY ? d : this.minY, this.maxX = f > this.maxX ? f : this.maxX, this.maxY = d > this.maxY ? d : this.maxY;
  }
  /**
   * Resizes the bounds object to fit within the given rectangle.
   * Clips the bounds if they extend beyond the rectangle's edges.
   * @example
   * ```ts
   * const bounds = new Bounds(0, 0, 200, 200);
   * // Fit within viewport
   * const viewport = new Rectangle(50, 50, 100, 100);
   * bounds.fit(viewport);
   * // bounds are now (50, 50, 150, 150)
   * ```
   * @param rect - The rectangle to fit within
   * @returns This bounds object for chaining
   * @see {@link Bounds#addBoundsMask} For intersection
   * @see {@link Bounds#pad} For expanding bounds
   */
  fit(t) {
    return this.minX < t.left && (this.minX = t.left), this.maxX > t.right && (this.maxX = t.right), this.minY < t.top && (this.minY = t.top), this.maxY > t.bottom && (this.maxY = t.bottom), this;
  }
  /**
   * Resizes the bounds object to include the given bounds.
   * Similar to fit() but works with raw coordinate values instead of a Rectangle.
   * @example
   * ```ts
   * const bounds = new Bounds(0, 0, 200, 200);
   * // Fit to specific coordinates
   * bounds.fitBounds(50, 150, 50, 150);
   * // bounds are now (50, 50, 150, 150)
   * ```
   * @param left - The left value of the bounds
   * @param right - The right value of the bounds
   * @param top - The top value of the bounds
   * @param bottom - The bottom value of the bounds
   * @returns This bounds object for chaining
   * @see {@link Bounds#fit} For fitting to Rectangle
   * @see {@link Bounds#addBoundsMask} For intersection
   */
  fitBounds(t, e, i, s) {
    return this.minX < t && (this.minX = t), this.maxX > e && (this.maxX = e), this.minY < i && (this.minY = i), this.maxY > s && (this.maxY = s), this;
  }
  /**
   * Pads bounds object, making it grow in all directions.
   * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
   * @example
   * ```ts
   * const bounds = new Bounds(0, 0, 100, 100);
   *
   * // Add equal padding
   * bounds.pad(10);
   * // bounds are now (-10, -10, 110, 110)
   *
   * // Add different padding for x and y
   * bounds.pad(20, 10);
   * // bounds are now (-30, -20, 130, 120)
   * ```
   * @param paddingX - The horizontal padding amount
   * @param paddingY - The vertical padding amount
   * @returns This bounds object for chaining
   * @see {@link Bounds#fit} For constraining bounds
   * @see {@link Bounds#scale} For uniform scaling
   */
  pad(t, e = t) {
    return this.minX -= t, this.maxX += t, this.minY -= e, this.maxY += e, this;
  }
  /**
   * Ceils the bounds by rounding up max values and rounding down min values.
   * Useful for pixel-perfect calculations and avoiding fractional pixels.
   * @example
   * ```ts
   * const bounds = new Bounds();
   * bounds.set(10.2, 10.9, 50.1, 50.8);
   *
   * // Round to whole pixels
   * bounds.ceil();
   * // bounds are now (10, 10, 51, 51)
   * ```
   * @returns This bounds object for chaining
   * @see {@link Bounds#scale} For size adjustments
   * @see {@link Bounds#fit} For constraining bounds
   */
  ceil() {
    return this.minX = Math.floor(this.minX), this.minY = Math.floor(this.minY), this.maxX = Math.ceil(this.maxX), this.maxY = Math.ceil(this.maxY), this;
  }
  /**
   * Creates a new Bounds instance with the same values.
   * @example
   * ```ts
   * const bounds = new Bounds(0, 0, 100, 100);
   *
   * // Create a copy
   * const copy = bounds.clone();
   *
   * // Original and copy are independent
   * bounds.pad(10);
   * console.log(copy.width === bounds.width); // false
   * ```
   * @returns A new Bounds instance with the same values
   * @see {@link Bounds#copyFrom} For reusing existing bounds
   */
  clone() {
    return new ae(this.minX, this.minY, this.maxX, this.maxY);
  }
  /**
   * Scales the bounds by the given values, adjusting all edges proportionally.
   * @example
   * ```ts
   * const bounds = new Bounds(0, 0, 100, 100);
   *
   * // Scale uniformly
   * bounds.scale(2);
   * // bounds are now (0, 0, 200, 200)
   *
   * // Scale non-uniformly
   * bounds.scale(0.5, 2);
   * // bounds are now (0, 0, 100, 400)
   * ```
   * @param x - The X value to scale by
   * @param y - The Y value to scale by (defaults to x)
   * @returns This bounds object for chaining
   * @see {@link Bounds#pad} For adding padding
   * @see {@link Bounds#fit} For constraining size
   */
  scale(t, e = t) {
    return this.minX *= t, this.minY *= e, this.maxX *= t, this.maxY *= e, this;
  }
  /**
   * The x position of the bounds in local space.
   * Setting this value will move the bounds while maintaining its width.
   * @example
   * ```ts
   * const bounds = new Bounds(0, 0, 100, 100);
   * // Get x position
   * console.log(bounds.x); // 0
   *
   * // Move bounds horizontally
   * bounds.x = 50;
   * console.log(bounds.minX, bounds.maxX); // 50, 150
   *
   * // Width stays the same
   * console.log(bounds.width); // Still 100
   * ```
   */
  get x() {
    return this.minX;
  }
  set x(t) {
    const e = this.maxX - this.minX;
    this.minX = t, this.maxX = t + e;
  }
  /**
   * The y position of the bounds in local space.
   * Setting this value will move the bounds while maintaining its height.
   * @example
   * ```ts
   * const bounds = new Bounds(0, 0, 100, 100);
   * // Get y position
   * console.log(bounds.y); // 0
   *
   * // Move bounds vertically
   * bounds.y = 50;
   * console.log(bounds.minY, bounds.maxY); // 50, 150
   *
   * // Height stays the same
   * console.log(bounds.height); // Still 100
   * ```
   */
  get y() {
    return this.minY;
  }
  set y(t) {
    const e = this.maxY - this.minY;
    this.minY = t, this.maxY = t + e;
  }
  /**
   * The width value of the bounds.
   * Represents the distance between minX and maxX coordinates.
   * @example
   * ```ts
   * const bounds = new Bounds(0, 0, 100, 100);
   * // Get width
   * console.log(bounds.width); // 100
   * // Resize width
   * bounds.width = 200;
   * console.log(bounds.maxX - bounds.minX); // 200
   * ```
   */
  get width() {
    return this.maxX - this.minX;
  }
  set width(t) {
    this.maxX = this.minX + t;
  }
  /**
   * The height value of the bounds.
   * Represents the distance between minY and maxY coordinates.
   * @example
   * ```ts
   * const bounds = new Bounds(0, 0, 100, 100);
   * // Get height
   * console.log(bounds.height); // 100
   * // Resize height
   * bounds.height = 150;
   * console.log(bounds.maxY - bounds.minY); // 150
   * ```
   */
  get height() {
    return this.maxY - this.minY;
  }
  set height(t) {
    this.maxY = this.minY + t;
  }
  /**
   * The left edge coordinate of the bounds.
   * Alias for minX.
   * @example
   * ```ts
   * const bounds = new Bounds(50, 0, 150, 100);
   * console.log(bounds.left); // 50
   * console.log(bounds.left === bounds.minX); // true
   * ```
   * @readonly
   */
  get left() {
    return this.minX;
  }
  /**
   * The right edge coordinate of the bounds.
   * Alias for maxX.
   * @example
   * ```ts
   * const bounds = new Bounds(0, 0, 100, 100);
   * console.log(bounds.right); // 100
   * console.log(bounds.right === bounds.maxX); // true
   * ```
   * @readonly
   */
  get right() {
    return this.maxX;
  }
  /**
   * The top edge coordinate of the bounds.
   * Alias for minY.
   * @example
   * ```ts
   * const bounds = new Bounds(0, 25, 100, 125);
   * console.log(bounds.top); // 25
   * console.log(bounds.top === bounds.minY); // true
   * ```
   * @readonly
   */
  get top() {
    return this.minY;
  }
  /**
   * The bottom edge coordinate of the bounds.
   * Alias for maxY.
   * @example
   * ```ts
   * const bounds = new Bounds(0, 0, 100, 200);
   * console.log(bounds.bottom); // 200
   * console.log(bounds.bottom === bounds.maxY); // true
   * ```
   * @readonly
   */
  get bottom() {
    return this.maxY;
  }
  /**
   * Whether the bounds has positive width and height.
   * Checks if both dimensions are greater than zero.
   * @example
   * ```ts
   * const bounds = new Bounds(0, 0, 100, 100);
   * // Check if bounds are positive
   * console.log(bounds.isPositive); // true
   *
   * // Negative bounds
   * bounds.maxX = bounds.minX;
   * console.log(bounds.isPositive); // false, width is 0
   * ```
   * @readonly
   * @see {@link Bounds#isEmpty} For checking empty state
   * @see {@link Bounds#isValid} For checking validity
   */
  get isPositive() {
    return this.maxX - this.minX > 0 && this.maxY - this.minY > 0;
  }
  /**
   * Whether the bounds has valid coordinates.
   * Checks if the bounds has been initialized with real values.
   * @example
   * ```ts
   * const bounds = new Bounds();
   * console.log(bounds.isValid); // false, default state
   *
   * // Set valid bounds
   * bounds.addFrame(0, 0, 100, 100);
   * console.log(bounds.isValid); // true
   * ```
   * @readonly
   * @see {@link Bounds#isEmpty} For checking empty state
   * @see {@link Bounds#isPositive} For checking dimensions
   */
  get isValid() {
    return this.minX + this.minY !== 1 / 0;
  }
  /**
   * Adds vertices from a Float32Array to the bounds, optionally transformed by a matrix.
   * Used for efficiently updating bounds from raw vertex data.
   * @example
   * ```ts
   * const bounds = new Bounds();
   *
   * // Add vertices from geometry
   * const vertices = new Float32Array([
   *     0, 0,    // Vertex 1
   *     100, 0,  // Vertex 2
   *     100, 100 // Vertex 3
   * ]);
   * bounds.addVertexData(vertices, 0, 6);
   *
   * // Add transformed vertices
   * const matrix = new Matrix()
   *     .translate(50, 50)
   *     .rotate(Math.PI / 4);
   * bounds.addVertexData(vertices, 0, 6, matrix);
   *
   * // Add subset of vertices
   * bounds.addVertexData(vertices, 2, 4); // Only second vertex
   * ```
   * @param vertexData - The array of vertices to add
   * @param beginOffset - Starting index in the vertex array
   * @param endOffset - Ending index in the vertex array (excluded)
   * @param matrix - Optional transformation matrix
   * @see {@link Bounds#addFrame} For adding rectangular frames
   * @see {@link Matrix} For transformation details
   */
  addVertexData(t, e, i, s) {
    let n = this.minX, a = this.minY, o = this.maxX, h = this.maxY;
    s || (s = this.matrix);
    const l = s.a, c = s.b, u = s.c, f = s.d, d = s.tx, g = s.ty;
    for (let p = e; p < i; p += 2) {
      const m = t[p], _ = t[p + 1], y = l * m + u * _ + d, x = c * m + f * _ + g;
      n = y < n ? y : n, a = x < a ? x : a, o = y > o ? y : o, h = x > h ? x : h;
    }
    this.minX = n, this.minY = a, this.maxX = o, this.maxY = h;
  }
  /**
   * Checks if a point is contained within the bounds.
   * Returns true if the point's coordinates fall within the bounds' area.
   * @example
   * ```ts
   * const bounds = new Bounds(0, 0, 100, 100);
   * // Basic point check
   * console.log(bounds.containsPoint(50, 50)); // true
   * console.log(bounds.containsPoint(150, 150)); // false
   *
   * // Check edges
   * console.log(bounds.containsPoint(0, 0));   // true, includes edges
   * console.log(bounds.containsPoint(100, 100)); // true, includes edges
   * ```
   * @param x - x coordinate to check
   * @param y - y coordinate to check
   * @returns True if the point is inside the bounds
   * @see {@link Bounds#isPositive} For valid bounds check
   * @see {@link Bounds#rectangle} For Rectangle representation
   */
  containsPoint(t, e) {
    return this.minX <= t && this.minY <= e && this.maxX >= t && this.maxY >= e;
  }
  /**
   * Returns a string representation of the bounds.
   * Useful for debugging and logging bounds information.
   * @example
   * ```ts
   * const bounds = new Bounds(0, 0, 100, 100);
   * console.log(bounds.toString()); // "[pixi.js:Bounds minX=0 minY=0 maxX=100 maxY=100 width=100 height=100]"
   * ```
   * @returns A string describing the bounds
   * @see {@link Bounds#copyFrom} For copying bounds
   * @see {@link Bounds#clone} For creating a new instance
   */
  toString() {
    return `[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`;
  }
  /**
   * Copies the bounds from another bounds object.
   * Useful for reusing bounds objects and avoiding allocations.
   * @example
   * ```ts
   * const sourceBounds = new Bounds(0, 0, 100, 100);
   * // Copy bounds
   * const targetBounds = new Bounds();
   * targetBounds.copyFrom(sourceBounds);
   * ```
   * @param bounds - The bounds to copy from
   * @returns This bounds object for chaining
   * @see {@link Bounds#clone} For creating new instances
   */
  copyFrom(t) {
    return this.minX = t.minX, this.minY = t.minY, this.maxX = t.maxX, this.maxY = t.maxY, this;
  }
}
var qd = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, Se = function(r) {
  return typeof r == "string" ? r.length > 0 : typeof r == "number";
}, bt = function(r, t, e) {
  return t === void 0 && (t = 0), e === void 0 && (e = Math.pow(10, t)), Math.round(e * r) / e + 0;
}, ie = function(r, t, e) {
  return t === void 0 && (t = 0), e === void 0 && (e = 1), r > e ? e : r > t ? r : t;
}, Al = function(r) {
  return (r = isFinite(r) ? r % 360 : 0) > 0 ? r : r + 360;
}, co = function(r) {
  return { r: ie(r.r, 0, 255), g: ie(r.g, 0, 255), b: ie(r.b, 0, 255), a: ie(r.a) };
}, Bs = function(r) {
  return { r: bt(r.r), g: bt(r.g), b: bt(r.b), a: bt(r.a, 3) };
}, Kd = /^#([0-9a-f]{3,8})$/i, Rr = function(r) {
  var t = r.toString(16);
  return t.length < 2 ? "0" + t : t;
}, Tl = function(r) {
  var t = r.r, e = r.g, i = r.b, s = r.a, n = Math.max(t, e, i), a = n - Math.min(t, e, i), o = a ? n === t ? (e - i) / a : n === e ? 2 + (i - t) / a : 4 + (t - e) / a : 0;
  return { h: 60 * (o < 0 ? o + 6 : o), s: n ? a / n * 100 : 0, v: n / 255 * 100, a: s };
}, Cl = function(r) {
  var t = r.h, e = r.s, i = r.v, s = r.a;
  t = t / 360 * 6, e /= 100, i /= 100;
  var n = Math.floor(t), a = i * (1 - e), o = i * (1 - (t - n) * e), h = i * (1 - (1 - t + n) * e), l = n % 6;
  return { r: 255 * [i, o, a, a, h, i][l], g: 255 * [h, i, i, o, a, a][l], b: 255 * [a, a, h, i, i, o][l], a: s };
}, uo = function(r) {
  return { h: Al(r.h), s: ie(r.s, 0, 100), l: ie(r.l, 0, 100), a: ie(r.a) };
}, fo = function(r) {
  return { h: bt(r.h), s: bt(r.s), l: bt(r.l), a: bt(r.a, 3) };
}, po = function(r) {
  return Cl((e = (t = r).s, { h: t.h, s: (e *= ((i = t.l) < 50 ? i : 100 - i) / 100) > 0 ? 2 * e / (i + e) * 100 : 0, v: i + e, a: t.a }));
  var t, e, i;
}, nr = function(r) {
  return { h: (t = Tl(r)).h, s: (s = (200 - (e = t.s)) * (i = t.v) / 100) > 0 && s < 200 ? e * i / 100 / (s <= 100 ? s : 200 - s) * 100 : 0, l: s / 2, a: t.a };
  var t, e, i, s;
}, Zd = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Qd = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Jd = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, tf = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, kn = { string: [[function(r) {
  var t = Kd.exec(r);
  return t ? (r = t[1]).length <= 4 ? { r: parseInt(r[0] + r[0], 16), g: parseInt(r[1] + r[1], 16), b: parseInt(r[2] + r[2], 16), a: r.length === 4 ? bt(parseInt(r[3] + r[3], 16) / 255, 2) : 1 } : r.length === 6 || r.length === 8 ? { r: parseInt(r.substr(0, 2), 16), g: parseInt(r.substr(2, 2), 16), b: parseInt(r.substr(4, 2), 16), a: r.length === 8 ? bt(parseInt(r.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(r) {
  var t = Jd.exec(r) || tf.exec(r);
  return t ? t[2] !== t[4] || t[4] !== t[6] ? null : co({ r: Number(t[1]) / (t[2] ? 100 / 255 : 1), g: Number(t[3]) / (t[4] ? 100 / 255 : 1), b: Number(t[5]) / (t[6] ? 100 / 255 : 1), a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1) }) : null;
}, "rgb"], [function(r) {
  var t = Zd.exec(r) || Qd.exec(r);
  if (!t) return null;
  var e, i, s = uo({ h: (e = t[1], i = t[2], i === void 0 && (i = "deg"), Number(e) * (qd[i] || 1)), s: Number(t[3]), l: Number(t[4]), a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1) });
  return po(s);
}, "hsl"]], object: [[function(r) {
  var t = r.r, e = r.g, i = r.b, s = r.a, n = s === void 0 ? 1 : s;
  return Se(t) && Se(e) && Se(i) ? co({ r: Number(t), g: Number(e), b: Number(i), a: Number(n) }) : null;
}, "rgb"], [function(r) {
  var t = r.h, e = r.s, i = r.l, s = r.a, n = s === void 0 ? 1 : s;
  if (!Se(t) || !Se(e) || !Se(i)) return null;
  var a = uo({ h: Number(t), s: Number(e), l: Number(i), a: Number(n) });
  return po(a);
}, "hsl"], [function(r) {
  var t = r.h, e = r.s, i = r.v, s = r.a, n = s === void 0 ? 1 : s;
  if (!Se(t) || !Se(e) || !Se(i)) return null;
  var a = function(o) {
    return { h: Al(o.h), s: ie(o.s, 0, 100), v: ie(o.v, 0, 100), a: ie(o.a) };
  }({ h: Number(t), s: Number(e), v: Number(i), a: Number(n) });
  return Cl(a);
}, "hsv"]] }, go = function(r, t) {
  for (var e = 0; e < t.length; e++) {
    var i = t[e][0](r);
    if (i) return [i, t[e][1]];
  }
  return [null, void 0];
}, ef = function(r) {
  return typeof r == "string" ? go(r.trim(), kn.string) : typeof r == "object" && r !== null ? go(r, kn.object) : [null, void 0];
}, Os = function(r, t) {
  var e = nr(r);
  return { h: e.h, s: ie(e.s + 100 * t, 0, 100), l: e.l, a: e.a };
}, Ls = function(r) {
  return (299 * r.r + 587 * r.g + 114 * r.b) / 1e3 / 255;
}, mo = function(r, t) {
  var e = nr(r);
  return { h: e.h, s: e.s, l: ie(e.l + 100 * t, 0, 100), a: e.a };
}, En = function() {
  function r(t) {
    this.parsed = ef(t)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return r.prototype.isValid = function() {
    return this.parsed !== null;
  }, r.prototype.brightness = function() {
    return bt(Ls(this.rgba), 2);
  }, r.prototype.isDark = function() {
    return Ls(this.rgba) < 0.5;
  }, r.prototype.isLight = function() {
    return Ls(this.rgba) >= 0.5;
  }, r.prototype.toHex = function() {
    return t = Bs(this.rgba), e = t.r, i = t.g, s = t.b, a = (n = t.a) < 1 ? Rr(bt(255 * n)) : "", "#" + Rr(e) + Rr(i) + Rr(s) + a;
    var t, e, i, s, n, a;
  }, r.prototype.toRgb = function() {
    return Bs(this.rgba);
  }, r.prototype.toRgbString = function() {
    return t = Bs(this.rgba), e = t.r, i = t.g, s = t.b, (n = t.a) < 1 ? "rgba(" + e + ", " + i + ", " + s + ", " + n + ")" : "rgb(" + e + ", " + i + ", " + s + ")";
    var t, e, i, s, n;
  }, r.prototype.toHsl = function() {
    return fo(nr(this.rgba));
  }, r.prototype.toHslString = function() {
    return t = fo(nr(this.rgba)), e = t.h, i = t.s, s = t.l, (n = t.a) < 1 ? "hsla(" + e + ", " + i + "%, " + s + "%, " + n + ")" : "hsl(" + e + ", " + i + "%, " + s + "%)";
    var t, e, i, s, n;
  }, r.prototype.toHsv = function() {
    return t = Tl(this.rgba), { h: bt(t.h), s: bt(t.s), v: bt(t.v), a: bt(t.a, 3) };
    var t;
  }, r.prototype.invert = function() {
    return ue({ r: 255 - (t = this.rgba).r, g: 255 - t.g, b: 255 - t.b, a: t.a });
    var t;
  }, r.prototype.saturate = function(t) {
    return t === void 0 && (t = 0.1), ue(Os(this.rgba, t));
  }, r.prototype.desaturate = function(t) {
    return t === void 0 && (t = 0.1), ue(Os(this.rgba, -t));
  }, r.prototype.grayscale = function() {
    return ue(Os(this.rgba, -1));
  }, r.prototype.lighten = function(t) {
    return t === void 0 && (t = 0.1), ue(mo(this.rgba, t));
  }, r.prototype.darken = function(t) {
    return t === void 0 && (t = 0.1), ue(mo(this.rgba, -t));
  }, r.prototype.rotate = function(t) {
    return t === void 0 && (t = 15), this.hue(this.hue() + t);
  }, r.prototype.alpha = function(t) {
    return typeof t == "number" ? ue({ r: (e = this.rgba).r, g: e.g, b: e.b, a: t }) : bt(this.rgba.a, 3);
    var e;
  }, r.prototype.hue = function(t) {
    var e = nr(this.rgba);
    return typeof t == "number" ? ue({ h: t, s: e.s, l: e.l, a: e.a }) : bt(e.h);
  }, r.prototype.isEqual = function(t) {
    return this.toHex() === ue(t).toHex();
  }, r;
}(), ue = function(r) {
  return r instanceof En ? r : new En(r);
}, _o = [], rf = function(r) {
  r.forEach(function(t) {
    _o.indexOf(t) < 0 && (t(En, kn), _o.push(t));
  });
};
function sf(r, t) {
  var e = { white: "#ffffff", bisque: "#ffe4c4", blue: "#0000ff", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", antiquewhite: "#faebd7", aqua: "#00ffff", azure: "#f0ffff", whitesmoke: "#f5f5f5", papayawhip: "#ffefd5", plum: "#dda0dd", blanchedalmond: "#ffebcd", black: "#000000", gold: "#ffd700", goldenrod: "#daa520", gainsboro: "#dcdcdc", cornsilk: "#fff8dc", cornflowerblue: "#6495ed", burlywood: "#deb887", aquamarine: "#7fffd4", beige: "#f5f5dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkkhaki: "#bdb76b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", peachpuff: "#ffdab9", darkmagenta: "#8b008b", darkred: "#8b0000", darkorchid: "#9932cc", darkorange: "#ff8c00", darkslateblue: "#483d8b", gray: "#808080", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", deeppink: "#ff1493", deepskyblue: "#00bfff", wheat: "#f5deb3", firebrick: "#b22222", floralwhite: "#fffaf0", ghostwhite: "#f8f8ff", darkviolet: "#9400d3", magenta: "#ff00ff", green: "#008000", dodgerblue: "#1e90ff", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", blueviolet: "#8a2be2", forestgreen: "#228b22", lawngreen: "#7cfc00", indianred: "#cd5c5c", indigo: "#4b0082", fuchsia: "#ff00ff", brown: "#a52a2a", maroon: "#800000", mediumblue: "#0000cd", lightcoral: "#f08080", darkturquoise: "#00ced1", lightcyan: "#e0ffff", ivory: "#fffff0", lightyellow: "#ffffe0", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", linen: "#faf0e6", mediumaquamarine: "#66cdaa", lemonchiffon: "#fffacd", lime: "#00ff00", khaki: "#f0e68c", mediumseagreen: "#3cb371", limegreen: "#32cd32", mediumspringgreen: "#00fa9a", lightskyblue: "#87cefa", lightblue: "#add8e6", midnightblue: "#191970", lightpink: "#ffb6c1", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", mintcream: "#f5fffa", lightslategray: "#778899", lightslategrey: "#778899", navajowhite: "#ffdead", navy: "#000080", mediumvioletred: "#c71585", powderblue: "#b0e0e6", palegoldenrod: "#eee8aa", oldlace: "#fdf5e6", paleturquoise: "#afeeee", mediumturquoise: "#48d1cc", mediumorchid: "#ba55d3", rebeccapurple: "#663399", lightsteelblue: "#b0c4de", mediumslateblue: "#7b68ee", thistle: "#d8bfd8", tan: "#d2b48c", orchid: "#da70d6", mediumpurple: "#9370db", purple: "#800080", pink: "#ffc0cb", skyblue: "#87ceeb", springgreen: "#00ff7f", palegreen: "#98fb98", red: "#ff0000", yellow: "#ffff00", slateblue: "#6a5acd", lavenderblush: "#fff0f5", peru: "#cd853f", palevioletred: "#db7093", violet: "#ee82ee", teal: "#008080", slategray: "#708090", slategrey: "#708090", aliceblue: "#f0f8ff", darkseagreen: "#8fbc8f", darkolivegreen: "#556b2f", greenyellow: "#adff2f", seagreen: "#2e8b57", seashell: "#fff5ee", tomato: "#ff6347", silver: "#c0c0c0", sienna: "#a0522d", lavender: "#e6e6fa", lightgreen: "#90ee90", orange: "#ffa500", orangered: "#ff4500", steelblue: "#4682b4", royalblue: "#4169e1", turquoise: "#40e0d0", yellowgreen: "#9acd32", salmon: "#fa8072", saddlebrown: "#8b4513", sandybrown: "#f4a460", rosybrown: "#bc8f8f", darksalmon: "#e9967a", lightgoldenrodyellow: "#fafad2", snow: "#fffafa", lightgrey: "#d3d3d3", lightgray: "#d3d3d3", dimgray: "#696969", dimgrey: "#696969", olivedrab: "#6b8e23", olive: "#808000" }, i = {};
  for (var s in e) i[e[s]] = s;
  var n = {};
  r.prototype.toName = function(a) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
    var o, h, l = i[this.toHex()];
    if (l) return l;
    if (a?.closest) {
      var c = this.toRgb(), u = 1 / 0, f = "black";
      if (!n.length) for (var d in e) n[d] = new r(e[d]).toRgb();
      for (var g in e) {
        var p = (o = c, h = n[g], Math.pow(o.r - h.r, 2) + Math.pow(o.g - h.g, 2) + Math.pow(o.b - h.b, 2));
        p < u && (u = p, f = g);
      }
      return f;
    }
  }, t.string.push([function(a) {
    var o = a.toLowerCase(), h = o === "transparent" ? "#0000" : e[o];
    return h ? new r(h).toRgb() : null;
  }, "name"]);
}
rf([sf]);
const Ei = class Qi {
  /**
   * @param {ColorSource} value - Optional value to use, if not provided, white is used.
   */
  constructor(t = 16777215) {
    this._value = null, this._components = new Float32Array(4), this._components.fill(1), this._int = 16777215, this.value = t;
  }
  /**
   * Get the red component of the color, normalized between 0 and 1.
   * @example
   * ```ts
   * const color = new Color('red');
   * console.log(color.red); // 1
   *
   * const green = new Color('#00ff00');
   * console.log(green.red); // 0
   * ```
   */
  get red() {
    return this._components[0];
  }
  /**
   * Get the green component of the color, normalized between 0 and 1.
   * @example
   * ```ts
   * const color = new Color('lime');
   * console.log(color.green); // 1
   *
   * const red = new Color('#ff0000');
   * console.log(red.green); // 0
   * ```
   */
  get green() {
    return this._components[1];
  }
  /**
   * Get the blue component of the color, normalized between 0 and 1.
   * @example
   * ```ts
   * const color = new Color('blue');
   * console.log(color.blue); // 1
   *
   * const yellow = new Color('#ffff00');
   * console.log(yellow.blue); // 0
   * ```
   */
  get blue() {
    return this._components[2];
  }
  /**
   * Get the alpha component of the color, normalized between 0 and 1.
   * @example
   * ```ts
   * const color = new Color('red');
   * console.log(color.alpha); // 1 (fully opaque)
   *
   * const transparent = new Color('rgba(255, 0, 0, 0.5)');
   * console.log(transparent.alpha); // 0.5 (semi-transparent)
   * ```
   */
  get alpha() {
    return this._components[3];
  }
  /**
   * Sets the color value and returns the instance for chaining.
   *
   * This is a chainable version of setting the `value` property.
   * @param value - The color to set. Accepts various formats:
   * - Hex strings/numbers (e.g., '#ff0000', 0xff0000)
   * - RGB/RGBA values (arrays, objects)
   * - CSS color names
   * - HSL/HSLA values
   * - HSV/HSVA values
   * @returns The Color instance for chaining
   * @example
   * ```ts
   * // Basic usage
   * const color = new Color();
   * color.setValue('#ff0000')
   *     .setAlpha(0.5)
   *     .premultiply(0.8);
   *
   * // Different formats
   * color.setValue(0xff0000);          // Hex number
   * color.setValue('#ff0000');         // Hex string
   * color.setValue([1, 0, 0]);         // RGB array
   * color.setValue([1, 0, 0, 0.5]);    // RGBA array
   * color.setValue({ r: 1, g: 0, b: 0 }); // RGB object
   *
   * // Copy from another color
   * const red = new Color('red');
   * color.setValue(red);
   * ```
   * @throws {Error} If the color value is invalid or null
   * @see {@link Color.value} For the underlying value property
   */
  setValue(t) {
    return this.value = t, this;
  }
  /**
   * The current color source. This property allows getting and setting the color value
   * while preserving the original format where possible.
   * @remarks
   * When setting:
   * - Setting to a `Color` instance copies its source and components
   * - Setting to other valid sources normalizes and stores the value
   * - Setting to `null` throws an Error
   * - The color remains unchanged if normalization fails
   *
   * When getting:
   * - Returns `null` if color was modified by {@link Color.multiply} or {@link Color.premultiply}
   * - Otherwise returns the original color source
   * @example
   * ```ts
   * // Setting different color formats
   * const color = new Color();
   *
   * color.value = 0xff0000;         // Hex number
   * color.value = '#ff0000';        // Hex string
   * color.value = [1, 0, 0];        // RGB array
   * color.value = [1, 0, 0, 0.5];   // RGBA array
   * color.value = { r: 1, g: 0, b: 0 }; // RGB object
   *
   * // Copying from another color
   * const red = new Color('red');
   * color.value = red;  // Copies red's components
   *
   * // Getting the value
   * console.log(color.value);  // Returns original format
   *
   * // After modifications
   * color.multiply([0.5, 0.5, 0.5]);
   * console.log(color.value);  // Returns null
   * ```
   * @throws {Error} When attempting to set `null`
   */
  set value(t) {
    if (t instanceof Qi)
      this._value = this._cloneSource(t._value), this._int = t._int, this._components.set(t._components);
    else {
      if (t === null)
        throw new Error("Cannot set Color#value to null");
      (this._value === null || !this._isSourceEqual(this._value, t)) && (this._value = this._cloneSource(t), this._normalize(this._value));
    }
  }
  get value() {
    return this._value;
  }
  /**
   * Copy a color source internally.
   * @param value - Color source
   */
  _cloneSource(t) {
    return typeof t == "string" || typeof t == "number" || t instanceof Number || t === null ? t : Array.isArray(t) || ArrayBuffer.isView(t) ? t.slice(0) : typeof t == "object" && t !== null ? { ...t } : t;
  }
  /**
   * Equality check for color sources.
   * @param value1 - First color source
   * @param value2 - Second color source
   * @returns `true` if the color sources are equal, `false` otherwise.
   */
  _isSourceEqual(t, e) {
    const i = typeof t;
    if (i !== typeof e)
      return !1;
    if (i === "number" || i === "string" || t instanceof Number)
      return t === e;
    if (Array.isArray(t) && Array.isArray(e) || ArrayBuffer.isView(t) && ArrayBuffer.isView(e))
      return t.length !== e.length ? !1 : t.every((n, a) => n === e[a]);
    if (t !== null && e !== null) {
      const n = Object.keys(t), a = Object.keys(e);
      return n.length !== a.length ? !1 : n.every((o) => t[o] === e[o]);
    }
    return t === e;
  }
  /**
   * Convert to a RGBA color object with normalized components (0-1).
   * @example
   * ```ts
   * import { Color } from 'pixi.js';
   *
   * // Convert colors to RGBA objects
   * new Color('white').toRgba();     // returns { r: 1, g: 1, b: 1, a: 1 }
   * new Color('#ff0000').toRgba();   // returns { r: 1, g: 0, b: 0, a: 1 }
   *
   * // With transparency
   * new Color('rgba(255,0,0,0.5)').toRgba(); // returns { r: 1, g: 0, b: 0, a: 0.5 }
   * ```
   * @returns An RGBA object with normalized components
   */
  toRgba() {
    const [t, e, i, s] = this._components;
    return { r: t, g: e, b: i, a: s };
  }
  /**
   * Convert to a RGB color object with normalized components (0-1).
   *
   * Alpha component is omitted in the output.
   * @example
   * ```ts
   * import { Color } from 'pixi.js';
   *
   * // Convert colors to RGB objects
   * new Color('white').toRgb();     // returns { r: 1, g: 1, b: 1 }
   * new Color('#ff0000').toRgb();   // returns { r: 1, g: 0, b: 0 }
   *
   * // Alpha is ignored
   * new Color('rgba(255,0,0,0.5)').toRgb(); // returns { r: 1, g: 0, b: 0 }
   * ```
   * @returns An RGB object with normalized components
   */
  toRgb() {
    const [t, e, i] = this._components;
    return { r: t, g: e, b: i };
  }
  /**
   * Convert to a CSS-style rgba string representation.
   *
   * RGB components are scaled to 0-255 range, alpha remains 0-1.
   * @example
   * ```ts
   * import { Color } from 'pixi.js';
   *
   * // Convert colors to RGBA strings
   * new Color('white').toRgbaString();     // returns "rgba(255,255,255,1)"
   * new Color('#ff0000').toRgbaString();   // returns "rgba(255,0,0,1)"
   *
   * // With transparency
   * new Color([1, 0, 0, 0.5]).toRgbaString(); // returns "rgba(255,0,0,0.5)"
   * ```
   * @returns A CSS-compatible rgba string
   */
  toRgbaString() {
    const [t, e, i] = this.toUint8RgbArray();
    return `rgba(${t},${e},${i},${this.alpha})`;
  }
  /**
   * Convert to an [R, G, B] array of clamped uint8 values (0 to 255).
   * @param {number[]|Uint8Array|Uint8ClampedArray} [out] - Optional output array. If not provided,
   * a cached array will be used and returned.
   * @returns Array containing RGB components as integers between 0-255
   * @example
   * ```ts
   * // Basic usage
   * new Color('white').toUint8RgbArray(); // returns [255, 255, 255]
   * new Color('#ff0000').toUint8RgbArray(); // returns [255, 0, 0]
   *
   * // Using custom output array
   * const rgb = new Uint8Array(3);
   * new Color('blue').toUint8RgbArray(rgb); // rgb is now [0, 0, 255]
   *
   * // Using different array types
   * new Color('red').toUint8RgbArray(new Uint8ClampedArray(3)); // [255, 0, 0]
   * new Color('red').toUint8RgbArray([]); // [255, 0, 0]
   * ```
   * @remarks
   * - Output values are always clamped between 0-255
   * - Alpha component is not included in output
   * - Reuses internal cache array if no output array provided
   */
  toUint8RgbArray(t) {
    const [e, i, s] = this._components;
    return this._arrayRgb || (this._arrayRgb = []), t || (t = this._arrayRgb), t[0] = Math.round(e * 255), t[1] = Math.round(i * 255), t[2] = Math.round(s * 255), t;
  }
  /**
   * Convert to an [R, G, B, A] array of normalized floats (numbers from 0.0 to 1.0).
   * @param {number[]|Float32Array} [out] - Optional output array. If not provided,
   * a cached array will be used and returned.
   * @returns Array containing RGBA components as floats between 0-1
   * @example
   * ```ts
   * // Basic usage
   * new Color('white').toArray();  // returns [1, 1, 1, 1]
   * new Color('red').toArray();    // returns [1, 0, 0, 1]
   *
   * // With alpha
   * new Color('rgba(255,0,0,0.5)').toArray(); // returns [1, 0, 0, 0.5]
   *
   * // Using custom output array
   * const rgba = new Float32Array(4);
   * new Color('blue').toArray(rgba); // rgba is now [0, 0, 1, 1]
   * ```
   * @remarks
   * - Output values are normalized between 0-1
   * - Includes alpha component as the fourth value
   * - Reuses internal cache array if no output array provided
   */
  toArray(t) {
    this._arrayRgba || (this._arrayRgba = []), t || (t = this._arrayRgba);
    const [e, i, s, n] = this._components;
    return t[0] = e, t[1] = i, t[2] = s, t[3] = n, t;
  }
  /**
   * Convert to an [R, G, B] array of normalized floats (numbers from 0.0 to 1.0).
   * @param {number[]|Float32Array} [out] - Optional output array. If not provided,
   * a cached array will be used and returned.
   * @returns Array containing RGB components as floats between 0-1
   * @example
   * ```ts
   * // Basic usage
   * new Color('white').toRgbArray(); // returns [1, 1, 1]
   * new Color('red').toRgbArray();   // returns [1, 0, 0]
   *
   * // Using custom output array
   * const rgb = new Float32Array(3);
   * new Color('blue').toRgbArray(rgb); // rgb is now [0, 0, 1]
   * ```
   * @remarks
   * - Output values are normalized between 0-1
   * - Alpha component is omitted from output
   * - Reuses internal cache array if no output array provided
   */
  toRgbArray(t) {
    this._arrayRgb || (this._arrayRgb = []), t || (t = this._arrayRgb);
    const [e, i, s] = this._components;
    return t[0] = e, t[1] = i, t[2] = s, t;
  }
  /**
   * Convert to a hexadecimal number.
   * @returns The color as a 24-bit RGB integer
   * @example
   * ```ts
   * // Basic usage
   * new Color('white').toNumber(); // returns 0xffffff
   * new Color('red').toNumber();   // returns 0xff0000
   *
   * // Store as hex
   * const color = new Color('blue');
   * const hex = color.toNumber(); // 0x0000ff
   * ```
   */
  toNumber() {
    return this._int;
  }
  /**
   * Convert to a BGR number.
   *
   * Useful for platforms that expect colors in BGR format.
   * @returns The color as a 24-bit BGR integer
   * @example
   * ```ts
   * // Convert RGB to BGR
   * new Color(0xffcc99).toBgrNumber(); // returns 0x99ccff
   *
   * // Common use case: platform-specific color format
   * const color = new Color('orange');
   * const bgrColor = color.toBgrNumber(); // Color with swapped R/B channels
   * ```
   * @remarks
   * This swaps the red and blue channels compared to the normal RGB format:
   * - RGB 0xRRGGBB becomes BGR 0xBBGGRR
   */
  toBgrNumber() {
    const [t, e, i] = this.toUint8RgbArray();
    return (i << 16) + (e << 8) + t;
  }
  /**
   * Convert to a hexadecimal number in little endian format (e.g., BBGGRR).
   *
   * Useful for platforms that expect colors in little endian byte order.
   * @example
   * ```ts
   * import { Color } from 'pixi.js';
   *
   * // Convert RGB color to little endian format
   * new Color(0xffcc99).toLittleEndianNumber(); // returns 0x99ccff
   *
   * // Common use cases:
   * const color = new Color('orange');
   * const leColor = color.toLittleEndianNumber(); // Swaps byte order for LE systems
   *
   * // Multiple conversions
   * const colors = {
   *     normal: 0xffcc99,
   *     littleEndian: new Color(0xffcc99).toLittleEndianNumber(), // 0x99ccff
   *     backToNormal: new Color(0x99ccff).toLittleEndianNumber()  // 0xffcc99
   * };
   * ```
   * @remarks
   * - Swaps R and B channels in the color value
   * - RGB 0xRRGGBB becomes 0xBBGGRR
   * - Useful for systems that use little endian byte order
   * - Can be used to convert back and forth between formats
   * @returns The color as a number in little endian format (BBGGRR)
   * @see {@link Color.toBgrNumber} For BGR format without byte swapping
   */
  toLittleEndianNumber() {
    const t = this._int;
    return (t >> 16) + (t & 65280) + ((t & 255) << 16);
  }
  /**
   * Multiply with another color.
   *
   * This action is destructive and modifies the original color.
   * @param {ColorSource} value - The color to multiply by. Accepts any valid color format:
   * - Hex strings/numbers (e.g., '#ff0000', 0xff0000)
   * - RGB/RGBA arrays ([1, 0, 0], [1, 0, 0, 1])
   * - Color objects ({ r: 1, g: 0, b: 0 })
   * - CSS color names ('red', 'blue')
   * @returns this - The Color instance for chaining
   * @example
   * ```ts
   * // Basic multiplication
   * const color = new Color('#ff0000');
   * color.multiply(0x808080); // 50% darker red
   *
   * // With transparency
   * color.multiply([1, 1, 1, 0.5]); // 50% transparent
   *
   * // Chain operations
   * color
   *     .multiply('#808080')
   *     .multiply({ r: 1, g: 1, b: 1, a: 0.5 });
   * ```
   * @remarks
   * - Multiplies each RGB component and alpha separately
   * - Values are clamped between 0-1
   * - Original color format is lost (value becomes null)
   * - Operation cannot be undone
   */
  multiply(t) {
    const [e, i, s, n] = Qi._temp.setValue(t)._components;
    return this._components[0] *= e, this._components[1] *= i, this._components[2] *= s, this._components[3] *= n, this._refreshInt(), this._value = null, this;
  }
  /**
   * Converts color to a premultiplied alpha format.
   *
   * This action is destructive and modifies the original color.
   * @param alpha - The alpha value to multiply by (0-1)
   * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels
   * @returns {Color} The Color instance for chaining
   * @example
   * ```ts
   * // Basic premultiplication
   * const color = new Color('red');
   * color.premultiply(0.5); // 50% transparent red with premultiplied RGB
   *
   * // Alpha only (RGB unchanged)
   * color.premultiply(0.5, false); // 50% transparent, original RGB
   *
   * // Chain with other operations
   * color
   *     .multiply(0x808080)
   *     .premultiply(0.5)
   *     .toNumber();
   * ```
   * @remarks
   * - RGB channels are multiplied by alpha when applyToRGB is true
   * - Alpha is always set to the provided value
   * - Values are clamped between 0-1
   * - Original color format is lost (value becomes null)
   * - Operation cannot be undone
   */
  premultiply(t, e = !0) {
    return e && (this._components[0] *= t, this._components[1] *= t, this._components[2] *= t), this._components[3] = t, this._refreshInt(), this._value = null, this;
  }
  /**
   * Returns the color as a 32-bit premultiplied alpha integer.
   *
   * Format: 0xAARRGGBB
   * @param {number} alpha - The alpha value to multiply by (0-1)
   * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels
   * @returns {number} The premultiplied color as a 32-bit integer
   * @example
   * ```ts
   * // Convert to premultiplied format
   * const color = new Color('red');
   *
   * // Full opacity (0xFFRRGGBB)
   * color.toPremultiplied(1.0); // 0xFFFF0000
   *
   * // 50% transparency with premultiplied RGB
   * color.toPremultiplied(0.5); // 0x7F7F0000
   *
   * // 50% transparency without RGB premultiplication
   * color.toPremultiplied(0.5, false); // 0x7FFF0000
   * ```
   * @remarks
   * - Returns full opacity (0xFF000000) when alpha is 1.0
   * - Returns 0 when alpha is 0.0 and applyToRGB is true
   * - RGB values are rounded during premultiplication
   */
  toPremultiplied(t, e = !0) {
    if (t === 1)
      return (255 << 24) + this._int;
    if (t === 0)
      return e ? 0 : this._int;
    let i = this._int >> 16 & 255, s = this._int >> 8 & 255, n = this._int & 255;
    return e && (i = i * t + 0.5 | 0, s = s * t + 0.5 | 0, n = n * t + 0.5 | 0), (t * 255 << 24) + (i << 16) + (s << 8) + n;
  }
  /**
   * Convert to a hexadecimal string (6 characters).
   * @returns A CSS-compatible hex color string (e.g., "#ff0000")
   * @example
   * ```ts
   * import { Color } from 'pixi.js';
   *
   * // Basic colors
   * new Color('red').toHex();    // returns "#ff0000"
   * new Color('white').toHex();  // returns "#ffffff"
   * new Color('black').toHex();  // returns "#000000"
   *
   * // From different formats
   * new Color(0xff0000).toHex(); // returns "#ff0000"
   * new Color([1, 0, 0]).toHex(); // returns "#ff0000"
   * new Color({ r: 1, g: 0, b: 0 }).toHex(); // returns "#ff0000"
   * ```
   * @remarks
   * - Always returns a 6-character hex string
   * - Includes leading "#" character
   * - Alpha channel is ignored
   * - Values are rounded to nearest hex value
   */
  toHex() {
    const t = this._int.toString(16);
    return `#${"000000".substring(0, 6 - t.length) + t}`;
  }
  /**
   * Convert to a hexadecimal string with alpha (8 characters).
   * @returns A CSS-compatible hex color string with alpha (e.g., "#ff0000ff")
   * @example
   * ```ts
   * import { Color } from 'pixi.js';
   *
   * // Fully opaque colors
   * new Color('red').toHexa();   // returns "#ff0000ff"
   * new Color('white').toHexa(); // returns "#ffffffff"
   *
   * // With transparency
   * new Color('rgba(255, 0, 0, 0.5)').toHexa(); // returns "#ff00007f"
   * new Color([1, 0, 0, 0]).toHexa(); // returns "#ff000000"
   * ```
   * @remarks
   * - Returns an 8-character hex string
   * - Includes leading "#" character
   * - Alpha is encoded in last two characters
   * - Values are rounded to nearest hex value
   */
  toHexa() {
    const e = Math.round(this._components[3] * 255).toString(16);
    return this.toHex() + "00".substring(0, 2 - e.length) + e;
  }
  /**
   * Set alpha (transparency) value while preserving color components.
   *
   * Provides a chainable interface for setting alpha.
   * @param alpha - Alpha value between 0 (fully transparent) and 1 (fully opaque)
   * @returns The Color instance for chaining
   * @example
   * ```ts
   * // Basic alpha setting
   * const color = new Color('red');
   * color.setAlpha(0.5);  // 50% transparent red
   *
   * // Chain with other operations
   * color
   *     .setValue('#ff0000')
   *     .setAlpha(0.8)    // 80% opaque
   *     .premultiply(0.5); // Further modify alpha
   *
   * // Reset to fully opaque
   * color.setAlpha(1);
   * ```
   * @remarks
   * - Alpha value is clamped between 0-1
   * - Can be chained with other color operations
   */
  setAlpha(t) {
    return this._components[3] = this._clamp(t), this;
  }
  /**
   * Normalize the input value into rgba
   * @param value - Input value
   */
  _normalize(t) {
    let e, i, s, n;
    if ((typeof t == "number" || t instanceof Number) && t >= 0 && t <= 16777215) {
      const a = t;
      e = (a >> 16 & 255) / 255, i = (a >> 8 & 255) / 255, s = (a & 255) / 255, n = 1;
    } else if ((Array.isArray(t) || t instanceof Float32Array) && t.length >= 3 && t.length <= 4)
      t = this._clamp(t), [e, i, s, n = 1] = t;
    else if ((t instanceof Uint8Array || t instanceof Uint8ClampedArray) && t.length >= 3 && t.length <= 4)
      t = this._clamp(t, 0, 255), [e, i, s, n = 255] = t, e /= 255, i /= 255, s /= 255, n /= 255;
    else if (typeof t == "string" || typeof t == "object") {
      if (typeof t == "string") {
        const o = Qi.HEX_PATTERN.exec(t);
        o && (t = `#${o[2]}`);
      }
      const a = ue(t);
      a.isValid() && ({ r: e, g: i, b: s, a: n } = a.rgba, e /= 255, i /= 255, s /= 255);
    }
    if (e !== void 0)
      this._components[0] = e, this._components[1] = i, this._components[2] = s, this._components[3] = n, this._refreshInt();
    else
      throw new Error(`Unable to convert color ${t}`);
  }
  /** Refresh the internal color rgb number */
  _refreshInt() {
    this._clamp(this._components);
    const [t, e, i] = this._components;
    this._int = (t * 255 << 16) + (e * 255 << 8) + (i * 255 | 0);
  }
  /**
   * Clamps values to a range. Will override original values
   * @param value - Value(s) to clamp
   * @param min - Minimum value
   * @param max - Maximum value
   */
  _clamp(t, e = 0, i = 1) {
    return typeof t == "number" ? Math.min(Math.max(t, e), i) : (t.forEach((s, n) => {
      t[n] = Math.min(Math.max(s, e), i);
    }), t);
  }
  /**
   * Check if a value can be interpreted as a valid color format.
   * Supports all color formats that can be used with the Color class.
   * @param value - Value to check
   * @returns True if the value can be used as a color
   * @example
   * ```ts
   * import { Color } from 'pixi.js';
   *
   * // CSS colors and hex values
   * Color.isColorLike('red');          // true
   * Color.isColorLike('#ff0000');      // true
   * Color.isColorLike(0xff0000);       // true
   *
   * // Arrays (RGB/RGBA)
   * Color.isColorLike([1, 0, 0]);      // true
   * Color.isColorLike([1, 0, 0, 0.5]); // true
   *
   * // TypedArrays
   * Color.isColorLike(new Float32Array([1, 0, 0]));          // true
   * Color.isColorLike(new Uint8Array([255, 0, 0]));          // true
   * Color.isColorLike(new Uint8ClampedArray([255, 0, 0]));   // true
   *
   * // Object formats
   * Color.isColorLike({ r: 1, g: 0, b: 0 });            // true (RGB)
   * Color.isColorLike({ r: 1, g: 0, b: 0, a: 0.5 });    // true (RGBA)
   * Color.isColorLike({ h: 0, s: 100, l: 50 });         // true (HSL)
   * Color.isColorLike({ h: 0, s: 100, l: 50, a: 0.5 }); // true (HSLA)
   * Color.isColorLike({ h: 0, s: 100, v: 100 });        // true (HSV)
   * Color.isColorLike({ h: 0, s: 100, v: 100, a: 0.5 });// true (HSVA)
   *
   * // Color instances
   * Color.isColorLike(new Color('red')); // true
   *
   * // Invalid values
   * Color.isColorLike(null);           // false
   * Color.isColorLike(undefined);      // false
   * Color.isColorLike({});             // false
   * Color.isColorLike([]);             // false
   * Color.isColorLike('not-a-color');  // false
   * ```
   * @remarks
   * Checks for the following formats:
   * - Numbers (0x000000 to 0xffffff)
   * - CSS color strings
   * - RGB/RGBA arrays and objects
   * - HSL/HSLA objects
   * - HSV/HSVA objects
   * - TypedArrays (Float32Array, Uint8Array, Uint8ClampedArray)
   * - Color instances
   * @see {@link ColorSource} For supported color format types
   * @see {@link Color.setValue} For setting color values
   * @category utility
   */
  static isColorLike(t) {
    return typeof t == "number" || typeof t == "string" || t instanceof Number || t instanceof Qi || Array.isArray(t) || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Float32Array || t.r !== void 0 && t.g !== void 0 && t.b !== void 0 || t.r !== void 0 && t.g !== void 0 && t.b !== void 0 && t.a !== void 0 || t.h !== void 0 && t.s !== void 0 && t.l !== void 0 || t.h !== void 0 && t.s !== void 0 && t.l !== void 0 && t.a !== void 0 || t.h !== void 0 && t.s !== void 0 && t.v !== void 0 || t.h !== void 0 && t.s !== void 0 && t.v !== void 0 && t.a !== void 0;
  }
};
Ei.shared = new Ei();
Ei._temp = new Ei();
Ei.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
let ct = Ei;
const nf = {
  cullArea: null,
  cullable: !1,
  cullableChildren: !0
};
let Ds = 0;
const yo = 500;
function rt(...r) {
  Ds !== yo && (Ds++, Ds === yo ? console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS.") : console.warn("PixiJS Warning: ", ...r));
}
const Tr = {
  /**
   * Set of registered pools and cleanable objects.
   * @private
   */
  _registeredResources: /* @__PURE__ */ new Set(),
  /**
   * Registers a pool or cleanable object for cleanup.
   * @param {Cleanable} pool - The pool or object to register.
   */
  register(r) {
    this._registeredResources.add(r);
  },
  /**
   * Unregisters a pool or cleanable object from cleanup.
   * @param {Cleanable} pool - The pool or object to unregister.
   */
  unregister(r) {
    this._registeredResources.delete(r);
  },
  /** Clears all registered pools and cleanable objects. This will call clear() on each registered item. */
  release() {
    this._registeredResources.forEach((r) => r.clear());
  },
  /**
   * Gets the number of registered pools and cleanable objects.
   * @returns {number} The count of registered items.
   */
  get registeredCount() {
    return this._registeredResources.size;
  },
  /**
   * Checks if a specific pool or cleanable object is registered.
   * @param {Cleanable} pool - The pool or object to check.
   * @returns {boolean} True if the item is registered, false otherwise.
   */
  isRegistered(r) {
    return this._registeredResources.has(r);
  },
  /**
   * Removes all registrations without clearing the pools.
   * Useful if you want to reset the collector without affecting the pools.
   */
  reset() {
    this._registeredResources.clear();
  }
};
class af {
  /**
   * Constructs a new Pool.
   * @param ClassType - The constructor of the items in the pool.
   * @param {number} [initialSize] - The initial size of the pool.
   */
  constructor(t, e) {
    this._pool = [], this._count = 0, this._index = 0, this._classType = t, e && this.prepopulate(e);
  }
  /**
   * Prepopulates the pool with a given number of items.
   * @param total - The number of items to add to the pool.
   */
  prepopulate(t) {
    for (let e = 0; e < t; e++)
      this._pool[this._index++] = new this._classType();
    this._count += t;
  }
  /**
   * Gets an item from the pool. Calls the item's `init` method if it exists.
   * If there are no items left in the pool, a new one will be created.
   * @param {unknown} [data] - Optional data to pass to the item's constructor.
   * @returns {T} The item from the pool.
   */
  get(t) {
    let e;
    return this._index > 0 ? e = this._pool[--this._index] : (e = new this._classType(), this._count++), e.init?.(t), e;
  }
  /**
   * Returns an item to the pool. Calls the item's `reset` method if it exists.
   * @param {T} item - The item to return to the pool.
   */
  return(t) {
    t.reset?.(), this._pool[this._index++] = t;
  }
  /**
   * Gets the number of items in the pool.
   * @readonly
   */
  get totalSize() {
    return this._count;
  }
  /**
   * Gets the number of items in the pool that are free to use without needing to create more.
   * @readonly
   */
  get totalFree() {
    return this._index;
  }
  /**
   * Gets the number of items in the pool that are currently in use.
   * @readonly
   */
  get totalUsed() {
    return this._count - this._index;
  }
  /** clears the pool */
  clear() {
    if (this._pool.length > 0 && this._pool[0].destroy)
      for (let t = 0; t < this._index; t++)
        this._pool[t].destroy();
    this._pool.length = 0, this._count = 0, this._index = 0;
  }
}
class of {
  constructor() {
    this._poolsByClass = /* @__PURE__ */ new Map();
  }
  /**
   * Prepopulates a specific pool with a given number of items.
   * @template T The type of items in the pool. Must extend PoolItem.
   * @param {PoolItemConstructor<T>} Class - The constructor of the items in the pool.
   * @param {number} total - The number of items to add to the pool.
   */
  prepopulate(t, e) {
    this.getPool(t).prepopulate(e);
  }
  /**
   * Gets an item from a specific pool.
   * @template T The type of items in the pool. Must extend PoolItem.
   * @param {PoolItemConstructor<T>} Class - The constructor of the items in the pool.
   * @param {unknown} [data] - Optional data to pass to the item's constructor.
   * @returns {T} The item from the pool.
   */
  get(t, e) {
    return this.getPool(t).get(e);
  }
  /**
   * Returns an item to its respective pool.
   * @param {PoolItem} item - The item to return to the pool.
   */
  return(t) {
    this.getPool(t.constructor).return(t);
  }
  /**
   * Gets a specific pool based on the class type.
   * @template T The type of items in the pool. Must extend PoolItem.
   * @param {PoolItemConstructor<T>} ClassType - The constructor of the items in the pool.
   * @returns {Pool<T>} The pool of the given class type.
   */
  getPool(t) {
    return this._poolsByClass.has(t) || this._poolsByClass.set(t, new af(t)), this._poolsByClass.get(t);
  }
  /** gets the usage stats of each pool in the system */
  stats() {
    const t = {};
    return this._poolsByClass.forEach((e) => {
      const i = t[e._classType.name] ? e._classType.name + e._classType.ID : e._classType.name;
      t[i] = {
        free: e.totalFree,
        used: e.totalUsed,
        size: e.totalSize
      };
    }), t;
  }
  /** Clears all pools in the group. This will reset all pools and free their resources. */
  clear() {
    this._poolsByClass.forEach((t) => t.clear()), this._poolsByClass.clear();
  }
}
const re = new of();
Tr.register(re);
const hf = {
  get isCachedAsTexture() {
    return !!this.renderGroup?.isCachedAsTexture;
  },
  cacheAsTexture(r) {
    typeof r == "boolean" && r === !1 ? this.disableRenderGroup() : (this.enableRenderGroup(), this.renderGroup.enableCacheAsTexture(r === !0 ? {} : r));
  },
  updateCacheTexture() {
    this.renderGroup?.updateCacheTexture();
  },
  get cacheAsBitmap() {
    return this.isCachedAsTexture;
  },
  set cacheAsBitmap(r) {
    N("v8.6.0", "cacheAsBitmap is deprecated, use cacheAsTexture instead."), this.cacheAsTexture(r);
  }
};
function lf(r, t, e) {
  const i = r.length;
  let s;
  if (t >= i || e === 0)
    return;
  e = t + e > i ? i - t : e;
  const n = i - e;
  for (s = t; s < n; ++s)
    r[s] = r[s + e];
  r.length = n;
}
const cf = {
  allowChildren: !0,
  removeChildren(r = 0, t) {
    const e = t ?? this.children.length, i = e - r, s = [];
    if (i > 0 && i <= e) {
      for (let a = e - 1; a >= r; a--) {
        const o = this.children[a];
        o && (s.push(o), o.parent = null);
      }
      lf(this.children, r, e);
      const n = this.renderGroup || this.parentRenderGroup;
      n && n.removeChildren(s);
      for (let a = 0; a < s.length; ++a) {
        const o = s[a];
        o.parentRenderLayer?.detach(o), this.emit("childRemoved", o, this, a), s[a].emit("removed", this);
      }
      return s.length > 0 && this._didViewChangeTick++, s;
    } else if (i === 0 && this.children.length === 0)
      return s;
    throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
  },
  removeChildAt(r) {
    const t = this.getChildAt(r);
    return this.removeChild(t);
  },
  getChildAt(r) {
    if (r < 0 || r >= this.children.length)
      throw new Error(`getChildAt: Index (${r}) does not exist.`);
    return this.children[r];
  },
  setChildIndex(r, t) {
    if (t < 0 || t >= this.children.length)
      throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);
    this.getChildIndex(r), this.addChildAt(r, t);
  },
  getChildIndex(r) {
    const t = this.children.indexOf(r);
    if (t === -1)
      throw new Error("The supplied Container must be a child of the caller");
    return t;
  },
  addChildAt(r, t) {
    this.allowChildren || N(Z, "addChildAt: Only Containers will be allowed to add children in v8.0.0");
    const { children: e } = this;
    if (t < 0 || t > e.length)
      throw new Error(`${r}addChildAt: The index ${t} supplied is out of bounds ${e.length}`);
    if (r.parent) {
      const s = r.parent.children.indexOf(r);
      if (r.parent === this && s === t)
        return r;
      s !== -1 && r.parent.children.splice(s, 1);
    }
    t === e.length ? e.push(r) : e.splice(t, 0, r), r.parent = this, r.didChange = !0, r._updateFlags = 15;
    const i = this.renderGroup || this.parentRenderGroup;
    return i && i.addChild(r), this.sortableChildren && (this.sortDirty = !0), this.emit("childAdded", r, this, t), r.emit("added", this), r;
  },
  swapChildren(r, t) {
    if (r === t)
      return;
    const e = this.getChildIndex(r), i = this.getChildIndex(t);
    this.children[e] = t, this.children[i] = r;
    const s = this.renderGroup || this.parentRenderGroup;
    s && (s.structureDidChange = !0), this._didContainerChangeTick++;
  },
  removeFromParent() {
    this.parent?.removeChild(this);
  },
  reparentChild(...r) {
    return r.length === 1 ? this.reparentChildAt(r[0], this.children.length) : (r.forEach((t) => this.reparentChildAt(t, this.children.length)), r[0]);
  },
  reparentChildAt(r, t) {
    if (r.parent === this)
      return this.setChildIndex(r, t), r;
    const e = r.worldTransform.clone();
    r.removeFromParent(), this.addChildAt(r, t);
    const i = this.worldTransform.clone();
    return i.invert(), e.prepend(i), r.setFromMatrix(e), r;
  },
  replaceChild(r, t) {
    r.updateLocalTransform(), this.addChildAt(t, this.getChildIndex(r)), t.setFromMatrix(r.localTransform), t.updateLocalTransform(), this.removeChild(r);
  }
}, uf = {
  collectRenderables(r, t, e) {
    this.parentRenderLayer && this.parentRenderLayer !== e || this.globalDisplayStatus < 7 || !this.includeInBuild || (this.sortableChildren && this.sortChildren(), this.isSimple ? this.collectRenderablesSimple(r, t, e) : this.renderGroup ? t.renderPipes.renderGroup.addRenderGroup(this.renderGroup, r) : this.collectRenderablesWithEffects(r, t, e));
  },
  collectRenderablesSimple(r, t, e) {
    const i = this.children, s = i.length;
    for (let n = 0; n < s; n++)
      i[n].collectRenderables(r, t, e);
  },
  collectRenderablesWithEffects(r, t, e) {
    const { renderPipes: i } = t;
    for (let s = 0; s < this.effects.length; s++) {
      const n = this.effects[s];
      i[n.pipe].push(n, this, r);
    }
    this.collectRenderablesSimple(r, t, e);
    for (let s = this.effects.length - 1; s >= 0; s--) {
      const n = this.effects[s];
      i[n.pipe].pop(n, this, r);
    }
  }
};
class xo {
  constructor() {
    this.pipe = "filter", this.priority = 1;
  }
  destroy() {
    for (let t = 0; t < this.filters.length; t++)
      this.filters[t].destroy();
    this.filters = null, this.filterArea = null;
  }
}
class df {
  constructor() {
    this._effectClasses = [], this._tests = [], this._initialized = !1;
  }
  init() {
    this._initialized || (this._initialized = !0, this._effectClasses.forEach((t) => {
      this.add({
        test: t.test,
        maskClass: t
      });
    }));
  }
  add(t) {
    this._tests.push(t);
  }
  getMaskEffect(t) {
    this._initialized || this.init();
    for (let e = 0; e < this._tests.length; e++) {
      const i = this._tests[e];
      if (i.test(t))
        return re.get(i.maskClass, t);
    }
    return t;
  }
  returnMaskEffect(t) {
    re.return(t);
  }
}
const Rn = new df();
At.handleByList(D.MaskEffect, Rn._effectClasses);
const ff = {
  _maskEffect: null,
  _maskOptions: {
    inverse: !1
  },
  _filterEffect: null,
  effects: [],
  _markStructureAsChanged() {
    const r = this.renderGroup || this.parentRenderGroup;
    r && (r.structureDidChange = !0);
  },
  addEffect(r) {
    this.effects.indexOf(r) === -1 && (this.effects.push(r), this.effects.sort((e, i) => e.priority - i.priority), this._markStructureAsChanged(), this._updateIsSimple());
  },
  removeEffect(r) {
    const t = this.effects.indexOf(r);
    t !== -1 && (this.effects.splice(t, 1), this._markStructureAsChanged(), this._updateIsSimple());
  },
  set mask(r) {
    const t = this._maskEffect;
    t?.mask !== r && (t && (this.removeEffect(t), Rn.returnMaskEffect(t), this._maskEffect = null), r != null && (this._maskEffect = Rn.getMaskEffect(r), this.addEffect(this._maskEffect)));
  },
  get mask() {
    return this._maskEffect?.mask;
  },
  setMask(r) {
    this._maskOptions = {
      ...this._maskOptions,
      ...r
    }, r.mask && (this.mask = r.mask), this._markStructureAsChanged();
  },
  set filters(r) {
    !Array.isArray(r) && r && (r = [r]);
    const t = this._filterEffect || (this._filterEffect = new xo());
    r = r;
    const e = r?.length > 0, i = t.filters?.length > 0, s = e !== i;
    r = Array.isArray(r) ? r.slice(0) : r, t.filters = Object.freeze(r), s && (e ? this.addEffect(t) : (this.removeEffect(t), t.filters = r ?? null));
  },
  get filters() {
    return this._filterEffect?.filters;
  },
  set filterArea(r) {
    this._filterEffect || (this._filterEffect = new xo()), this._filterEffect.filterArea = r;
  },
  get filterArea() {
    return this._filterEffect?.filterArea;
  }
}, pf = {
  label: null,
  get name() {
    return N(Z, "Container.name property has been removed, use Container.label instead"), this.label;
  },
  set name(r) {
    N(Z, "Container.name property has been removed, use Container.label instead"), this.label = r;
  },
  getChildByName(r, t = !1) {
    return this.getChildByLabel(r, t);
  },
  getChildByLabel(r, t = !1) {
    const e = this.children;
    for (let i = 0; i < e.length; i++) {
      const s = e[i];
      if (s.label === r || r instanceof RegExp && r.test(s.label))
        return s;
    }
    if (t)
      for (let i = 0; i < e.length; i++) {
        const n = e[i].getChildByLabel(r, !0);
        if (n)
          return n;
      }
    return null;
  },
  getChildrenByLabel(r, t = !1, e = []) {
    const i = this.children;
    for (let s = 0; s < i.length; s++) {
      const n = i[s];
      (n.label === r || r instanceof RegExp && r.test(n.label)) && e.push(n);
    }
    if (t)
      for (let s = 0; s < i.length; s++)
        i[s].getChildrenByLabel(r, !0, e);
    return e;
  }
}, Rt = re.getPool(Y), Ce = re.getPool(ae), gf = new Y(), mf = {
  getFastGlobalBounds(r, t) {
    t || (t = new ae()), t.clear(), this._getGlobalBoundsRecursive(!!r, t, this.parentRenderLayer), t.isValid || t.set(0, 0, 0, 0);
    const e = this.renderGroup || this.parentRenderGroup;
    return t.applyMatrix(e.worldTransform), t;
  },
  _getGlobalBoundsRecursive(r, t, e) {
    let i = t;
    if (r && this.parentRenderLayer && this.parentRenderLayer !== e || this.localDisplayStatus !== 7 || !this.measurable)
      return;
    const s = !!this.effects.length;
    if ((this.renderGroup || s) && (i = Ce.get().clear()), this.boundsArea)
      t.addRect(this.boundsArea, this.worldTransform);
    else {
      if (this.renderPipeId) {
        const a = this.bounds;
        i.addFrame(
          a.minX,
          a.minY,
          a.maxX,
          a.maxY,
          this.groupTransform
        );
      }
      const n = this.children;
      for (let a = 0; a < n.length; a++)
        n[a]._getGlobalBoundsRecursive(r, i, e);
    }
    if (s) {
      let n = !1;
      const a = this.renderGroup || this.parentRenderGroup;
      for (let o = 0; o < this.effects.length; o++)
        this.effects[o].addBounds && (n || (n = !0, i.applyMatrix(a.worldTransform)), this.effects[o].addBounds(i, !0));
      n && i.applyMatrix(a.worldTransform.copyTo(gf).invert()), t.addBounds(i), Ce.return(i);
    } else this.renderGroup && (t.addBounds(i, this.relativeGroupTransform), Ce.return(i));
  }
};
function Pl(r, t, e) {
  e.clear();
  let i, s;
  return r.parent ? t ? i = r.parent.worldTransform : (s = Rt.get().identity(), i = ga(r, s)) : i = Y.IDENTITY, Ml(r, e, i, t), s && Rt.return(s), e.isValid || e.set(0, 0, 0, 0), e;
}
function Ml(r, t, e, i) {
  if (!r.visible || !r.measurable)
    return;
  let s;
  i ? s = r.worldTransform : (r.updateLocalTransform(), s = Rt.get(), s.appendFrom(r.localTransform, e));
  const n = t, a = !!r.effects.length;
  if (a && (t = Ce.get().clear()), r.boundsArea)
    t.addRect(r.boundsArea, s);
  else {
    const o = r.bounds;
    o && !o.isEmpty() && (t.matrix = s, t.addBounds(o));
    for (let h = 0; h < r.children.length; h++)
      Ml(r.children[h], t, s, i);
  }
  if (a) {
    for (let o = 0; o < r.effects.length; o++)
      r.effects[o].addBounds?.(t);
    n.addBounds(t, Y.IDENTITY), Ce.return(t);
  }
  i || Rt.return(s);
}
function ga(r, t) {
  const e = r.parent;
  return e && (ga(e, t), e.updateLocalTransform(), t.append(e.localTransform)), t;
}
function kl(r, t) {
  if (r === 16777215 || !t)
    return t;
  if (t === 16777215 || !r)
    return r;
  const e = r >> 16 & 255, i = r >> 8 & 255, s = r & 255, n = t >> 16 & 255, a = t >> 8 & 255, o = t & 255, h = e * n / 255 | 0, l = i * a / 255 | 0, c = s * o / 255 | 0;
  return (h << 16) + (l << 8) + c;
}
const bo = 16777215;
function wo(r, t) {
  return r === bo ? t : t === bo ? r : kl(r, t);
}
function Xr(r) {
  return ((r & 255) << 16) + (r & 65280) + (r >> 16 & 255);
}
const _f = {
  getGlobalAlpha(r) {
    if (r)
      return this.renderGroup ? this.renderGroup.worldAlpha : this.parentRenderGroup ? this.parentRenderGroup.worldAlpha * this.alpha : this.alpha;
    let t = this.alpha, e = this.parent;
    for (; e; )
      t *= e.alpha, e = e.parent;
    return t;
  },
  getGlobalTransform(r = new Y(), t) {
    if (t)
      return r.copyFrom(this.worldTransform);
    this.updateLocalTransform();
    const e = ga(this, Rt.get().identity());
    return r.appendFrom(this.localTransform, e), Rt.return(e), r;
  },
  getGlobalTint(r) {
    if (r)
      return this.renderGroup ? Xr(this.renderGroup.worldColor) : this.parentRenderGroup ? Xr(
        wo(this.localColor, this.parentRenderGroup.worldColor)
      ) : this.tint;
    let t = this.localColor, e = this.parent;
    for (; e; )
      t = wo(t, e.localColor), e = e.parent;
    return Xr(t);
  }
};
function El(r, t, e) {
  return t.clear(), e || (e = Y.IDENTITY), Rl(r, t, e, r, !0), t.isValid || t.set(0, 0, 0, 0), t;
}
function Rl(r, t, e, i, s) {
  let n;
  if (s)
    n = Rt.get(), n = e.copyTo(n);
  else {
    if (!r.visible || !r.measurable)
      return;
    r.updateLocalTransform();
    const h = r.localTransform;
    n = Rt.get(), n.appendFrom(h, e);
  }
  const a = t, o = !!r.effects.length;
  if (o && (t = Ce.get().clear()), r.boundsArea)
    t.addRect(r.boundsArea, n);
  else {
    r.renderPipeId && (t.matrix = n, t.addBounds(r.bounds));
    const h = r.children;
    for (let l = 0; l < h.length; l++)
      Rl(h[l], t, n, i, !1);
  }
  if (o) {
    for (let h = 0; h < r.effects.length; h++)
      r.effects[h].addLocalBounds?.(t, i);
    a.addBounds(t, Y.IDENTITY), Ce.return(t);
  }
  Rt.return(n);
}
function Fl(r, t) {
  const e = r.children;
  for (let i = 0; i < e.length; i++) {
    const s = e[i], n = s.uid, a = (s._didViewChangeTick & 65535) << 16 | s._didContainerChangeTick & 65535, o = t.index;
    (t.data[o] !== n || t.data[o + 1] !== a) && (t.data[t.index] = n, t.data[t.index + 1] = a, t.didChange = !0), t.index = o + 2, s.children.length && Fl(s, t);
  }
  return t.didChange;
}
const yf = new Y(), xf = {
  _localBoundsCacheId: -1,
  _localBoundsCacheData: null,
  _setWidth(r, t) {
    const e = Math.sign(this.scale.x) || 1;
    t !== 0 ? this.scale.x = r / t * e : this.scale.x = e;
  },
  _setHeight(r, t) {
    const e = Math.sign(this.scale.y) || 1;
    t !== 0 ? this.scale.y = r / t * e : this.scale.y = e;
  },
  getLocalBounds() {
    this._localBoundsCacheData || (this._localBoundsCacheData = {
      data: [],
      index: 1,
      didChange: !1,
      localBounds: new ae()
    });
    const r = this._localBoundsCacheData;
    return r.index = 1, r.didChange = !1, r.data[0] !== this._didViewChangeTick && (r.didChange = !0, r.data[0] = this._didViewChangeTick), Fl(this, r), r.didChange && El(this, r.localBounds, yf), r.localBounds;
  },
  getBounds(r, t) {
    return Pl(this, r, t || new ae());
  }
}, bf = {
  _onRender: null,
  set onRender(r) {
    const t = this.renderGroup || this.parentRenderGroup;
    if (!r) {
      this._onRender && t?.removeOnRender(this), this._onRender = null;
      return;
    }
    this._onRender || t?.addOnRender(this), this._onRender = r;
  },
  get onRender() {
    return this._onRender;
  }
}, wf = {
  _zIndex: 0,
  sortDirty: !1,
  sortableChildren: !1,
  get zIndex() {
    return this._zIndex;
  },
  set zIndex(r) {
    this._zIndex !== r && (this._zIndex = r, this.depthOfChildModified());
  },
  depthOfChildModified() {
    this.parent && (this.parent.sortableChildren = !0, this.parent.sortDirty = !0), this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0);
  },
  sortChildren() {
    this.sortDirty && (this.sortDirty = !1, this.children.sort(vf));
  }
};
function vf(r, t) {
  return r._zIndex - t._zIndex;
}
const Sf = {
  getGlobalPosition(r = new Pt(), t = !1) {
    return this.parent ? this.parent.toGlobal(this._position, r, t) : (r.x = this._position.x, r.y = this._position.y), r;
  },
  toGlobal(r, t, e = !1) {
    const i = this.getGlobalTransform(Rt.get(), e);
    return t = i.apply(r, t), Rt.return(i), t;
  },
  toLocal(r, t, e, i) {
    t && (r = t.toGlobal(r, e, i));
    const s = this.getGlobalTransform(Rt.get(), i);
    return e = s.applyInverse(r, e), Rt.return(s), e;
  }
};
class Il {
  constructor() {
    this.uid = ft("instructionSet"), this.instructions = [], this.instructionSize = 0, this.renderables = [], this.gcTick = 0;
  }
  /** reset the instruction set so it can be reused set size back to 0 */
  reset() {
    this.instructionSize = 0;
  }
  /**
   * Destroy the instruction set, clearing the instructions and renderables.
   * @internal
   */
  destroy() {
    this.instructions.length = 0, this.renderables.length = 0, this.renderPipes = null, this.gcTick = 0;
  }
  /**
   * Add an instruction to the set
   * @param instruction - add an instruction to the set
   */
  add(t) {
    this.instructions[this.instructionSize++] = t;
  }
  /**
   * Log the instructions to the console (for debugging)
   * @internal
   */
  log() {
    this.instructions.length = this.instructionSize, console.table(this.instructions, ["type", "action"]);
  }
}
let Af = 0;
class Tf {
  /**
   * @param textureOptions - options that will be passed to BaseRenderTexture constructor
   * @param {SCALE_MODE} [textureOptions.scaleMode] - See {@link SCALE_MODE} for possible values.
   */
  constructor(t) {
    this._poolKeyHash = /* @__PURE__ */ Object.create(null), this._texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, this.textureStyle = new ns(this.textureOptions);
  }
  /**
   * Creates texture with params that were specified in pool constructor.
   * @param pixelWidth - Width of texture in pixels.
   * @param pixelHeight - Height of texture in pixels.
   * @param antialias
   */
  createTexture(t, e, i) {
    const s = new he({
      ...this.textureOptions,
      width: t,
      height: e,
      resolution: 1,
      antialias: i,
      autoGarbageCollect: !1
    });
    return new X({
      source: s,
      label: `texturePool_${Af++}`
    });
  }
  /**
   * Gets a Power-of-Two render texture or fullScreen texture
   * @param frameWidth - The minimum width of the render texture.
   * @param frameHeight - The minimum height of the render texture.
   * @param resolution - The resolution of the render texture.
   * @param antialias
   * @returns The new render texture.
   */
  getOptimalTexture(t, e, i = 1, s) {
    let n = Math.ceil(t * i - 1e-6), a = Math.ceil(e * i - 1e-6);
    n = ss(n), a = ss(a);
    const o = (n << 17) + (a << 1) + (s ? 1 : 0);
    this._texturePool[o] || (this._texturePool[o] = []);
    let h = this._texturePool[o].pop();
    return h || (h = this.createTexture(n, a, s)), h.source._resolution = i, h.source.width = n / i, h.source.height = a / i, h.source.pixelWidth = n, h.source.pixelHeight = a, h.frame.x = 0, h.frame.y = 0, h.frame.width = t, h.frame.height = e, h.updateUvs(), this._poolKeyHash[h.uid] = o, h;
  }
  /**
   * Gets extra texture of the same size as input renderTexture
   * @param texture - The texture to check what size it is.
   * @param antialias - Whether to use antialias.
   * @returns A texture that is a power of two
   */
  getSameSizeTexture(t, e = !1) {
    const i = t.source;
    return this.getOptimalTexture(t.width, t.height, i._resolution, e);
  }
  /**
   * Place a render texture back into the pool. Optionally reset the style of the texture to the default texture style.
   * useful if you modified the style of the texture after getting it from the pool.
   * @param renderTexture - The renderTexture to free
   * @param resetStyle - Whether to reset the style of the texture to the default texture style
   */
  returnTexture(t, e = !1) {
    const i = this._poolKeyHash[t.uid];
    e && (t.source.style = this.textureStyle), this._texturePool[i].push(t);
  }
  /**
   * Clears the pool.
   * @param destroyTextures - Destroy all stored textures.
   */
  clear(t) {
    if (t = t !== !1, t)
      for (const e in this._texturePool) {
        const i = this._texturePool[e];
        if (i)
          for (let s = 0; s < i.length; s++)
            i[s].destroy(!0);
      }
    this._texturePool = {};
  }
}
const Ri = new Tf();
Tr.register(Ri);
class Cf {
  constructor() {
    this.renderPipeId = "renderGroup", this.root = null, this.canBundle = !1, this.renderGroupParent = null, this.renderGroupChildren = [], this.worldTransform = new Y(), this.worldColorAlpha = 4294967295, this.worldColor = 16777215, this.worldAlpha = 1, this.childrenToUpdate = /* @__PURE__ */ Object.create(null), this.updateTick = 0, this.gcTick = 0, this.childrenRenderablesToUpdate = { list: [], index: 0 }, this.structureDidChange = !0, this.instructionSet = new Il(), this._onRenderContainers = [], this.textureNeedsUpdate = !0, this.isCachedAsTexture = !1, this._matrixDirty = 7;
  }
  init(t) {
    this.root = t, t._onRender && this.addOnRender(t), t.didChange = !0;
    const e = t.children;
    for (let i = 0; i < e.length; i++) {
      const s = e[i];
      s._updateFlags = 15, this.addChild(s);
    }
  }
  enableCacheAsTexture(t = {}) {
    this.textureOptions = t, this.isCachedAsTexture = !0, this.textureNeedsUpdate = !0;
  }
  disableCacheAsTexture() {
    this.isCachedAsTexture = !1, this.texture && (Ri.returnTexture(this.texture, !0), this.texture = null);
  }
  updateCacheTexture() {
    this.textureNeedsUpdate = !0;
    const t = this._parentCacheAsTextureRenderGroup;
    t && !t.textureNeedsUpdate && t.updateCacheTexture();
  }
  reset() {
    this.renderGroupChildren.length = 0;
    for (const t in this.childrenToUpdate) {
      const e = this.childrenToUpdate[t];
      e.list.fill(null), e.index = 0;
    }
    this.childrenRenderablesToUpdate.index = 0, this.childrenRenderablesToUpdate.list.fill(null), this.root = null, this.updateTick = 0, this.structureDidChange = !0, this._onRenderContainers.length = 0, this.renderGroupParent = null, this.disableCacheAsTexture();
  }
  get localTransform() {
    return this.root.localTransform;
  }
  addRenderGroupChild(t) {
    t.renderGroupParent && t.renderGroupParent._removeRenderGroupChild(t), t.renderGroupParent = this, this.renderGroupChildren.push(t);
  }
  _removeRenderGroupChild(t) {
    const e = this.renderGroupChildren.indexOf(t);
    e > -1 && this.renderGroupChildren.splice(e, 1), t.renderGroupParent = null;
  }
  addChild(t) {
    if (this.structureDidChange = !0, t.parentRenderGroup = this, t.updateTick = -1, t.parent === this.root ? t.relativeRenderGroupDepth = 1 : t.relativeRenderGroupDepth = t.parent.relativeRenderGroupDepth + 1, t.didChange = !0, this.onChildUpdate(t), t.renderGroup) {
      this.addRenderGroupChild(t.renderGroup);
      return;
    }
    t._onRender && this.addOnRender(t);
    const e = t.children;
    for (let i = 0; i < e.length; i++)
      this.addChild(e[i]);
  }
  removeChild(t) {
    if (this.structureDidChange = !0, t._onRender && (t.renderGroup || this.removeOnRender(t)), t.parentRenderGroup = null, t.renderGroup) {
      this._removeRenderGroupChild(t.renderGroup);
      return;
    }
    const e = t.children;
    for (let i = 0; i < e.length; i++)
      this.removeChild(e[i]);
  }
  removeChildren(t) {
    for (let e = 0; e < t.length; e++)
      this.removeChild(t[e]);
  }
  onChildUpdate(t) {
    let e = this.childrenToUpdate[t.relativeRenderGroupDepth];
    e || (e = this.childrenToUpdate[t.relativeRenderGroupDepth] = {
      index: 0,
      list: []
    }), e.list[e.index++] = t;
  }
  updateRenderable(t) {
    t.globalDisplayStatus < 7 || (this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t), t.didViewUpdate = !1);
  }
  onChildViewUpdate(t) {
    this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++] = t;
  }
  get isRenderable() {
    return this.root.localDisplayStatus === 7 && this.worldAlpha > 0;
  }
  /**
   * adding a container to the onRender list will make sure the user function
   * passed in to the user defined 'onRender` callBack
   * @param container - the container to add to the onRender list
   */
  addOnRender(t) {
    this._onRenderContainers.push(t);
  }
  removeOnRender(t) {
    this._onRenderContainers.splice(this._onRenderContainers.indexOf(t), 1);
  }
  runOnRender(t) {
    for (let e = 0; e < this._onRenderContainers.length; e++)
      this._onRenderContainers[e]._onRender(t);
  }
  destroy() {
    this.disableCacheAsTexture(), this.renderGroupParent = null, this.root = null, this.childrenRenderablesToUpdate = null, this.childrenToUpdate = null, this.renderGroupChildren = null, this._onRenderContainers = null, this.instructionSet = null;
  }
  getChildren(t = []) {
    const e = this.root.children;
    for (let i = 0; i < e.length; i++)
      this._getChildren(e[i], t);
    return t;
  }
  _getChildren(t, e = []) {
    if (e.push(t), t.renderGroup)
      return e;
    const i = t.children;
    for (let s = 0; s < i.length; s++)
      this._getChildren(i[s], e);
    return e;
  }
  invalidateMatrices() {
    this._matrixDirty = 7;
  }
  /**
   * Returns the inverse of the world transform matrix.
   * @returns {Matrix} The inverse of the world transform matrix.
   */
  get inverseWorldTransform() {
    return this._matrixDirty & 1 ? (this._matrixDirty &= -2, this._inverseWorldTransform || (this._inverseWorldTransform = new Y()), this._inverseWorldTransform.copyFrom(this.worldTransform).invert()) : this._inverseWorldTransform;
  }
  /**
   * Returns the inverse of the texture offset transform matrix.
   * @returns {Matrix} The inverse of the texture offset transform matrix.
   */
  get textureOffsetInverseTransform() {
    return this._matrixDirty & 2 ? (this._matrixDirty &= -3, this._textureOffsetInverseTransform || (this._textureOffsetInverseTransform = new Y()), this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(
      -this._textureBounds.x,
      -this._textureBounds.y
    )) : this._textureOffsetInverseTransform;
  }
  /**
   * Returns the inverse of the parent texture transform matrix.
   * This is used to properly transform coordinates when rendering into cached textures.
   * @returns {Matrix} The inverse of the parent texture transform matrix.
   */
  get inverseParentTextureTransform() {
    if (!(this._matrixDirty & 4))
      return this._inverseParentTextureTransform;
    this._matrixDirty &= -5;
    const t = this._parentCacheAsTextureRenderGroup;
    return t ? (this._inverseParentTextureTransform || (this._inverseParentTextureTransform = new Y()), this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(t.inverseWorldTransform).translate(
      -t._textureBounds.x,
      -t._textureBounds.y
    )) : this.worldTransform;
  }
  /**
   * Returns a matrix that transforms coordinates to the correct coordinate space of the texture being rendered to.
   * This is the texture offset inverse transform of the closest parent RenderGroup that is cached as a texture.
   * @returns {Matrix | null} The transform matrix for the cached texture coordinate space,
   * or null if no parent is cached as texture.
   */
  get cacheToLocalTransform() {
    return this.isCachedAsTexture ? this.textureOffsetInverseTransform : this._parentCacheAsTextureRenderGroup ? this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform : null;
  }
}
function Pf(r, t, e = {}) {
  for (const i in t)
    !e[i] && t[i] !== void 0 && (r[i] = t[i]);
}
const zs = new Tt(null), Fr = new Tt(null), Gs = new Tt(null, 1, 1), Ir = new Tt(null), vo = 1, Mf = 2, Us = 4;
class ye extends oe {
  constructor(t = {}) {
    super(), this.uid = ft("renderable"), this._updateFlags = 15, this.renderGroup = null, this.parentRenderGroup = null, this.parentRenderGroupIndex = 0, this.didChange = !1, this.didViewUpdate = !1, this.relativeRenderGroupDepth = 0, this.children = [], this.parent = null, this.includeInBuild = !0, this.measurable = !0, this.isSimple = !0, this.parentRenderLayer = null, this.updateTick = -1, this.localTransform = new Y(), this.relativeGroupTransform = new Y(), this.groupTransform = this.relativeGroupTransform, this.destroyed = !1, this._position = new Tt(this, 0, 0), this._scale = Gs, this._pivot = Fr, this._origin = Ir, this._skew = zs, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._rotation = 0, this.localColor = 16777215, this.localAlpha = 1, this.groupAlpha = 1, this.groupColor = 16777215, this.groupColorAlpha = 4294967295, this.localBlendMode = "inherit", this.groupBlendMode = "normal", this.localDisplayStatus = 7, this.globalDisplayStatus = 7, this._didContainerChangeTick = 0, this._didViewChangeTick = 0, this._didLocalTransformChangeId = -1, this.effects = [], Pf(this, t, {
      children: !0,
      parent: !0,
      effects: !0
    }), t.children?.forEach((e) => this.addChild(e)), t.parent?.addChild(this);
  }
  /**
   * Mixes all enumerable properties and methods from a source object to Container.
   * @param source - The source of properties and methods to mix in.
   * @deprecated since 8.8.0
   */
  static mixin(t) {
    N("8.8.0", "Container.mixin is deprecated, please use extensions.mixin instead."), At.mixin(ye, t);
  }
  // = 'default';
  /**
   * We now use the _didContainerChangeTick and _didViewChangeTick to track changes
   * @deprecated since 8.2.6
   * @ignore
   */
  set _didChangeId(t) {
    this._didViewChangeTick = t >> 12 & 4095, this._didContainerChangeTick = t & 4095;
  }
  /** @ignore */
  get _didChangeId() {
    return this._didContainerChangeTick & 4095 | (this._didViewChangeTick & 4095) << 12;
  }
  /**
   * Adds one or more children to the container.
   * The children will be rendered as part of this container's display list.
   * @example
   * ```ts
   * // Add a single child
   * container.addChild(sprite);
   *
   * // Add multiple children
   * container.addChild(background, player, foreground);
   *
   * // Add with type checking
   * const sprite = container.addChild<Sprite>(new Sprite(texture));
   * sprite.tint = 'red';
   * ```
   * @param children - The Container(s) to add to the container
   * @returns The first child that was added
   * @see {@link Container#removeChild} For removing children
   * @see {@link Container#addChildAt} For adding at specific index
   */
  addChild(...t) {
    if (this.allowChildren || N(Z, "addChild: Only Containers will be allowed to add children in v8.0.0"), t.length > 1) {
      for (let s = 0; s < t.length; s++)
        this.addChild(t[s]);
      return t[0];
    }
    const e = t[0], i = this.renderGroup || this.parentRenderGroup;
    return e.parent === this ? (this.children.splice(this.children.indexOf(e), 1), this.children.push(e), i && (i.structureDidChange = !0), e) : (e.parent && e.parent.removeChild(e), this.children.push(e), this.sortableChildren && (this.sortDirty = !0), e.parent = this, e.didChange = !0, e._updateFlags = 15, i && i.addChild(e), this.emit("childAdded", e, this, this.children.length - 1), e.emit("added", this), this._didViewChangeTick++, e._zIndex !== 0 && e.depthOfChildModified(), e);
  }
  /**
   * Removes one or more children from the container.
   * When removing multiple children, events will be triggered for each child in sequence.
   * @example
   * ```ts
   * // Remove a single child
   * const removed = container.removeChild(sprite);
   *
   * // Remove multiple children
   * const bg = container.removeChild(background, player, userInterface);
   *
   * // Remove with type checking
   * const sprite = container.removeChild<Sprite>(childSprite);
   * sprite.texture = newTexture;
   * ```
   * @param children - The Container(s) to remove
   * @returns The first child that was removed
   * @see {@link Container#addChild} For adding children
   * @see {@link Container#removeChildren} For removing multiple children
   */
  removeChild(...t) {
    if (t.length > 1) {
      for (let s = 0; s < t.length; s++)
        this.removeChild(t[s]);
      return t[0];
    }
    const e = t[0], i = this.children.indexOf(e);
    return i > -1 && (this._didViewChangeTick++, this.children.splice(i, 1), this.renderGroup ? this.renderGroup.removeChild(e) : this.parentRenderGroup && this.parentRenderGroup.removeChild(e), e.parentRenderLayer && e.parentRenderLayer.detach(e), e.parent = null, this.emit("childRemoved", e, this, i), e.emit("removed", this)), e;
  }
  /** @ignore */
  _onUpdate(t) {
    t && t === this._skew && this._updateSkew(), this._didContainerChangeTick++, !this.didChange && (this.didChange = !0, this.parentRenderGroup && this.parentRenderGroup.onChildUpdate(this));
  }
  set isRenderGroup(t) {
    !!this.renderGroup !== t && (t ? this.enableRenderGroup() : this.disableRenderGroup());
  }
  /**
   * Returns true if this container is a render group.
   * This means that it will be rendered as a separate pass, with its own set of instructions
   * @advanced
   */
  get isRenderGroup() {
    return !!this.renderGroup;
  }
  /**
   * Calling this enables a render group for this container.
   * This means it will be rendered as a separate set of instructions.
   * The transform of the container will also be handled on the GPU rather than the CPU.
   * @advanced
   */
  enableRenderGroup() {
    if (this.renderGroup)
      return;
    const t = this.parentRenderGroup;
    t?.removeChild(this), this.renderGroup = re.get(Cf, this), this.groupTransform = Y.IDENTITY, t?.addChild(this), this._updateIsSimple();
  }
  /**
   * This will disable the render group for this container.
   * @advanced
   */
  disableRenderGroup() {
    if (!this.renderGroup)
      return;
    const t = this.parentRenderGroup;
    t?.removeChild(this), re.return(this.renderGroup), this.renderGroup = null, this.groupTransform = this.relativeGroupTransform, t?.addChild(this), this._updateIsSimple();
  }
  /** @ignore */
  _updateIsSimple() {
    this.isSimple = !this.renderGroup && this.effects.length === 0;
  }
  /**
   * Current transform of the object based on world (parent) factors.
   *
   * This matrix represents the absolute transformation in the scene graph.
   * @example
   * ```ts
   * // Get world position
   * const worldPos = container.worldTransform;
   * console.log(`World position: (${worldPos.tx}, ${worldPos.ty})`);
   * ```
   * @readonly
   * @see {@link Container#localTransform} For local space transform
   */
  get worldTransform() {
    return this._worldTransform || (this._worldTransform = new Y()), this.renderGroup ? this._worldTransform.copyFrom(this.renderGroup.worldTransform) : this.parentRenderGroup && this._worldTransform.appendFrom(this.relativeGroupTransform, this.parentRenderGroup.worldTransform), this._worldTransform;
  }
  /**
   * The position of the container on the x axis relative to the local coordinates of the parent.
   *
   * An alias to position.x
   * @example
   * ```ts
   * // Basic position
   * container.x = 100;
   * ```
   */
  get x() {
    return this._position.x;
  }
  set x(t) {
    this._position.x = t;
  }
  /**
   * The position of the container on the y axis relative to the local coordinates of the parent.
   *
   * An alias to position.y
   * @example
   * ```ts
   * // Basic position
   * container.y = 200;
   * ```
   */
  get y() {
    return this._position.y;
  }
  set y(t) {
    this._position.y = t;
  }
  /**
   * The coordinate of the object relative to the local coordinates of the parent.
   * @example
   * ```ts
   * // Basic position setting
   * container.position.set(100, 200);
   * container.position.set(100); // Sets both x and y to 100
   * // Using point data
   * container.position = { x: 50, y: 75 };
   * ```
   * @since 4.0.0
   */
  get position() {
    return this._position;
  }
  set position(t) {
    this._position.copyFrom(t);
  }
  /**
   * The rotation of the object in radians.
   *
   * > [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
   * > rotation is in radians, angle is in degrees.
   * @example
   * ```ts
   * // Basic rotation
   * container.rotation = Math.PI / 4; // 45 degrees
   *
   * // Convert from degrees
   * const degrees = 45;
   * container.rotation = degrees * Math.PI / 180;
   *
   * // Rotate around center
   * container.pivot.set(container.width / 2, container.height / 2);
   * container.rotation = Math.PI; // 180 degrees
   *
   * // Rotate around center with origin
   * container.origin.set(container.width / 2, container.height / 2);
   * container.rotation = Math.PI; // 180 degrees
   * ```
   */
  get rotation() {
    return this._rotation;
  }
  set rotation(t) {
    this._rotation !== t && (this._rotation = t, this._onUpdate(this._skew));
  }
  /**
   * The angle of the object in degrees.
   *
   * > [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
   * > rotation is in radians, angle is in degrees.
   * @example
   * ```ts
   * // Basic angle rotation
   * sprite.angle = 45; // 45 degrees
   *
   * // Rotate around center
   * sprite.pivot.set(sprite.width / 2, sprite.height / 2);
   * sprite.angle = 180; // Half rotation
   *
   * // Rotate around center with origin
   * sprite.origin.set(sprite.width / 2, sprite.height / 2);
   * sprite.angle = 180; // Half rotation
   *
   * // Reset rotation
   * sprite.angle = 0;
   * ```
   */
  get angle() {
    return this.rotation * Ud;
  }
  set angle(t) {
    this.rotation = t * Wd;
  }
  /**
   * The center of rotation, scaling, and skewing for this display object in its local space.
   * The `position` is the projection of `pivot` in the parent's local space.
   *
   * By default, the pivot is the origin (0, 0).
   * @example
   * ```ts
   * // Rotate around center
   * container.pivot.set(container.width / 2, container.height / 2);
   * container.rotation = Math.PI; // Rotates around center
   * ```
   * @since 4.0.0
   */
  get pivot() {
    return this._pivot === Fr && (this._pivot = new Tt(this, 0, 0)), this._pivot;
  }
  set pivot(t) {
    this._pivot === Fr && (this._pivot = new Tt(this, 0, 0), this._origin !== Ir && rt("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")), typeof t == "number" ? this._pivot.set(t) : this._pivot.copyFrom(t);
  }
  /**
   * The skew factor for the object in radians. Skewing is a transformation that distorts
   * the object by rotating it differently at each point, creating a non-uniform shape.
   * @example
   * ```ts
   * // Basic skewing
   * container.skew.set(0.5, 0); // Skew horizontally
   * container.skew.set(0, 0.5); // Skew vertically
   *
   * // Skew with point data
   * container.skew = { x: 0.3, y: 0.3 }; // Diagonal skew
   *
   * // Reset skew
   * container.skew.set(0, 0);
   *
   * // Animate skew
   * app.ticker.add(() => {
   *     // Create wave effect
   *     container.skew.x = Math.sin(Date.now() / 1000) * 0.3;
   * });
   *
   * // Combine with rotation
   * container.rotation = Math.PI / 4; // 45 degrees
   * container.skew.set(0.2, 0.2); // Skew the rotated object
   * ```
   * @since 4.0.0
   * @type {ObservablePoint} Point-like object with x/y properties in radians
   * @default {x: 0, y: 0}
   */
  get skew() {
    return this._skew === zs && (this._skew = new Tt(this, 0, 0)), this._skew;
  }
  set skew(t) {
    this._skew === zs && (this._skew = new Tt(this, 0, 0)), this._skew.copyFrom(t);
  }
  /**
   * The scale factors of this object along the local coordinate axes.
   *
   * The default scale is (1, 1).
   * @example
   * ```ts
   * // Basic scaling
   * container.scale.set(2, 2); // Scales to double size
   * container.scale.set(2); // Scales uniformly to double size
   * container.scale = 2; // Scales uniformly to double size
   * // Scale to a specific width and height
   * container.setSize(200, 100); // Sets width to 200 and height to 100
   * ```
   * @since 4.0.0
   */
  get scale() {
    return this._scale === Gs && (this._scale = new Tt(this, 1, 1)), this._scale;
  }
  set scale(t) {
    this._scale === Gs && (this._scale = new Tt(this, 0, 0)), typeof t == "string" && (t = parseFloat(t)), typeof t == "number" ? this._scale.set(t) : this._scale.copyFrom(t);
  }
  /**
   * @experimental
   * The origin point around which the container rotates and scales without affecting its position.
   * Unlike pivot, changing the origin will not move the container's position.
   * @example
   * ```ts
   * // Rotate around center point
   * container.origin.set(container.width / 2, container.height / 2);
   * container.rotation = Math.PI; // Rotates around center
   *
   * // Reset origin
   * container.origin.set(0, 0);
   * ```
   */
  get origin() {
    return this._origin === Ir && (this._origin = new Tt(this, 0, 0)), this._origin;
  }
  set origin(t) {
    this._origin === Ir && (this._origin = new Tt(this, 0, 0), this._pivot !== Fr && rt("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")), typeof t == "number" ? this._origin.set(t) : this._origin.copyFrom(t);
  }
  /**
   * The width of the Container, setting this will actually modify the scale to achieve the value set.
   * > [!NOTE] Changing the width will adjust the scale.x property of the container while maintaining its aspect ratio.
   * > [!NOTE] If you want to set both width and height at the same time, use {@link Container#setSize}
   * as it is more optimized by not recalculating the local bounds twice.
   * @example
   * ```ts
   * // Basic width setting
   * container.width = 100;
   * // Optimized width setting
   * container.setSize(100, 100);
   * ```
   */
  get width() {
    return Math.abs(this.scale.x * this.getLocalBounds().width);
  }
  set width(t) {
    const e = this.getLocalBounds().width;
    this._setWidth(t, e);
  }
  /**
   * The height of the Container,
   * > [!NOTE] Changing the height will adjust the scale.y property of the container while maintaining its aspect ratio.
   * > [!NOTE] If you want to set both width and height at the same time, use {@link Container#setSize}
   * as it is more optimized by not recalculating the local bounds twice.
   * @example
   * ```ts
   * // Basic height setting
   * container.height = 200;
   * // Optimized height setting
   * container.setSize(100, 200);
   * ```
   */
  get height() {
    return Math.abs(this.scale.y * this.getLocalBounds().height);
  }
  set height(t) {
    const e = this.getLocalBounds().height;
    this._setHeight(t, e);
  }
  /**
   * Retrieves the size of the container as a [Size]{@link Size} object.
   *
   * This is faster than get the width and height separately.
   * @example
   * ```ts
   * // Basic size retrieval
   * const size = container.getSize();
   * console.log(`Size: ${size.width}x${size.height}`);
   *
   * // Reuse existing size object
   * const reuseSize = { width: 0, height: 0 };
   * container.getSize(reuseSize);
   * ```
   * @param out - Optional object to store the size in.
   * @returns The size of the container.
   */
  getSize(t) {
    t || (t = {});
    const e = this.getLocalBounds();
    return t.width = Math.abs(this.scale.x * e.width), t.height = Math.abs(this.scale.y * e.height), t;
  }
  /**
   * Sets the size of the container to the specified width and height.
   * This is more efficient than setting width and height separately as it only recalculates bounds once.
   * @example
   * ```ts
   * // Basic size setting
   * container.setSize(100, 200);
   *
   * // Set uniform size
   * container.setSize(100); // Sets both width and height to 100
   * ```
   * @param value - This can be either a number or a [Size]{@link Size} object.
   * @param height - The height to set. Defaults to the value of `width` if not provided.
   */
  setSize(t, e) {
    const i = this.getLocalBounds();
    typeof t == "object" ? (e = t.height ?? t.width, t = t.width) : e ?? (e = t), t !== void 0 && this._setWidth(t, i.width), e !== void 0 && this._setHeight(e, i.height);
  }
  /** Called when the skew or the rotation changes. */
  _updateSkew() {
    const t = this._rotation, e = this._skew;
    this._cx = Math.cos(t + e._y), this._sx = Math.sin(t + e._y), this._cy = -Math.sin(t - e._x), this._sy = Math.cos(t - e._x);
  }
  /**
   * Updates the transform properties of the container.
   * Allows partial updates of transform properties for optimized manipulation.
   * @example
   * ```ts
   * // Basic transform update
   * container.updateTransform({
   *     x: 100,
   *     y: 200,
   *     rotation: Math.PI / 4
   * });
   *
   * // Scale and rotate around center
   * sprite.updateTransform({
   *     pivotX: sprite.width / 2,
   *     pivotY: sprite.height / 2,
   *     scaleX: 2,
   *     scaleY: 2,
   *     rotation: Math.PI
   * });
   *
   * // Update position only
   * button.updateTransform({
   *     x: button.x + 10, // Move right
   *     y: button.y      // Keep same y
   * });
   * ```
   * @param opts - Transform options to update
   * @param opts.x - The x position
   * @param opts.y - The y position
   * @param opts.scaleX - The x-axis scale factor
   * @param opts.scaleY - The y-axis scale factor
   * @param opts.rotation - The rotation in radians
   * @param opts.skewX - The x-axis skew factor
   * @param opts.skewY - The y-axis skew factor
   * @param opts.pivotX - The x-axis pivot point
   * @param opts.pivotY - The y-axis pivot point
   * @returns This container, for chaining
   * @see {@link Container#setFromMatrix} For matrix-based transforms
   * @see {@link Container#position} For direct position access
   */
  updateTransform(t) {
    return this.position.set(
      typeof t.x == "number" ? t.x : this.position.x,
      typeof t.y == "number" ? t.y : this.position.y
    ), this.scale.set(
      typeof t.scaleX == "number" ? t.scaleX || 1 : this.scale.x,
      typeof t.scaleY == "number" ? t.scaleY || 1 : this.scale.y
    ), this.rotation = typeof t.rotation == "number" ? t.rotation : this.rotation, this.skew.set(
      typeof t.skewX == "number" ? t.skewX : this.skew.x,
      typeof t.skewY == "number" ? t.skewY : this.skew.y
    ), this.pivot.set(
      typeof t.pivotX == "number" ? t.pivotX : this.pivot.x,
      typeof t.pivotY == "number" ? t.pivotY : this.pivot.y
    ), this.origin.set(
      typeof t.originX == "number" ? t.originX : this.origin.x,
      typeof t.originY == "number" ? t.originY : this.origin.y
    ), this;
  }
  /**
   * Updates the local transform properties by decomposing the given matrix.
   * Extracts position, scale, rotation, and skew from a transformation matrix.
   * @example
   * ```ts
   * // Basic matrix transform
   * const matrix = new Matrix()
   *     .translate(100, 100)
   *     .rotate(Math.PI / 4)
   *     .scale(2, 2);
   *
   * container.setFromMatrix(matrix);
   *
   * // Copy transform from another container
   * const source = new Container();
   * source.position.set(100, 100);
   * source.rotation = Math.PI / 2;
   *
   * target.setFromMatrix(source.localTransform);
   *
   * // Reset transform
   * container.setFromMatrix(Matrix.IDENTITY);
   * ```
   * @param matrix - The matrix to use for updating the transform
   * @see {@link Container#updateTransform} For property-based updates
   * @see {@link Matrix#decompose} For matrix decomposition details
   */
  setFromMatrix(t) {
    t.decompose(this);
  }
  /** Updates the local transform. */
  updateLocalTransform() {
    const t = this._didContainerChangeTick;
    if (this._didLocalTransformChangeId === t)
      return;
    this._didLocalTransformChangeId = t;
    const e = this.localTransform, i = this._scale, s = this._pivot, n = this._origin, a = this._position, o = i._x, h = i._y, l = s._x, c = s._y, u = -n._x, f = -n._y;
    e.a = this._cx * o, e.b = this._sx * o, e.c = this._cy * h, e.d = this._sy * h, e.tx = a._x - (l * e.a + c * e.c) + (u * e.a + f * e.c) - u, e.ty = a._y - (l * e.b + c * e.d) + (u * e.b + f * e.d) - f;
  }
  // / ///// color related stuff
  set alpha(t) {
    t !== this.localAlpha && (this.localAlpha = t, this._updateFlags |= vo, this._onUpdate());
  }
  /**
   * The opacity of the object relative to its parent's opacity.
   * Value ranges from 0 (fully transparent) to 1 (fully opaque).
   * @example
   * ```ts
   * // Basic transparency
   * sprite.alpha = 0.5; // 50% opacity
   *
   * // Inherited opacity
   * container.alpha = 0.5;
   * const child = new Sprite(texture);
   * child.alpha = 0.5;
   * container.addChild(child);
   * // child's effective opacity is 0.25 (0.5 * 0.5)
   * ```
   * @default 1
   * @see {@link Container#visible} For toggling visibility
   * @see {@link Container#renderable} For render control
   */
  get alpha() {
    return this.localAlpha;
  }
  set tint(t) {
    const i = ct.shared.setValue(t ?? 16777215).toBgrNumber();
    i !== this.localColor && (this.localColor = i, this._updateFlags |= vo, this._onUpdate());
  }
  /**
   * The tint applied to the sprite.
   *
   * This can be any valid {@link ColorSource}.
   * @example
   * ```ts
   * // Basic color tinting
   * container.tint = 0xff0000; // Red tint
   * container.tint = 'red';    // Same as above
   * container.tint = '#00ff00'; // Green
   * container.tint = 'rgb(0,0,255)'; // Blue
   *
   * // Remove tint
   * container.tint = 0xffffff; // White = no tint
   * container.tint = null;     // Also removes tint
   * ```
   * @default 0xFFFFFF
   * @see {@link Container#alpha} For transparency
   * @see {@link Container#visible} For visibility control
   */
  get tint() {
    return Xr(this.localColor);
  }
  // / //////////////// blend related stuff
  set blendMode(t) {
    this.localBlendMode !== t && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= Mf, this.localBlendMode = t, this._onUpdate());
  }
  /**
   * The blend mode to be applied to the sprite. Controls how pixels are blended when rendering.
   *
   * Setting to 'normal' will reset to default blending.
   * > [!NOTE] More blend modes are available after importing the `pixi.js/advanced-blend-modes` sub-export.
   * @example
   * ```ts
   * // Basic blend modes
   * sprite.blendMode = 'add';        // Additive blending
   * sprite.blendMode = 'multiply';   // Multiply colors
   * sprite.blendMode = 'screen';     // Screen blend
   *
   * // Reset blend mode
   * sprite.blendMode = 'normal';     // Normal blending
   * ```
   * @default 'normal'
   * @see {@link Container#alpha} For transparency
   * @see {@link Container#tint} For color adjustments
   */
  get blendMode() {
    return this.localBlendMode;
  }
  // / ///////// VISIBILITY / RENDERABLE /////////////////
  /**
   * The visibility of the object. If false the object will not be drawn,
   * and the transform will not be updated.
   * @example
   * ```ts
   * // Basic visibility toggle
   * sprite.visible = false; // Hide sprite
   * sprite.visible = true;  // Show sprite
   * ```
   * @default true
   * @see {@link Container#renderable} For render-only control
   * @see {@link Container#alpha} For transparency
   */
  get visible() {
    return !!(this.localDisplayStatus & 2);
  }
  set visible(t) {
    const e = t ? 2 : 0;
    (this.localDisplayStatus & 2) !== e && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= Us, this.localDisplayStatus ^= 2, this._onUpdate());
  }
  /** @ignore */
  get culled() {
    return !(this.localDisplayStatus & 4);
  }
  /** @ignore */
  set culled(t) {
    const e = t ? 0 : 4;
    (this.localDisplayStatus & 4) !== e && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= Us, this.localDisplayStatus ^= 4, this._onUpdate());
  }
  /**
   * Controls whether this object can be rendered. If false the object will not be drawn,
   * but the transform will still be updated. This is different from visible, which skips
   * transform updates.
   * @example
   * ```ts
   * // Basic render control
   * sprite.renderable = false; // Skip rendering
   * sprite.renderable = true;  // Enable rendering
   * ```
   * @default true
   * @see {@link Container#visible} For skipping transform updates
   * @see {@link Container#alpha} For transparency
   */
  get renderable() {
    return !!(this.localDisplayStatus & 1);
  }
  set renderable(t) {
    const e = t ? 1 : 0;
    (this.localDisplayStatus & 1) !== e && (this._updateFlags |= Us, this.localDisplayStatus ^= 1, this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._onUpdate());
  }
  /**
   * Whether or not the object should be rendered.
   * @advanced
   */
  get isRenderable() {
    return this.localDisplayStatus === 7 && this.groupAlpha > 0;
  }
  /**
   * Removes all internal references and listeners as well as removes children from the display list.
   * Do not use a Container after calling `destroy`.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @example
   * ```ts
   * container.destroy();
   * container.destroy(true);
   * container.destroy({ children: true });
   * container.destroy({ children: true, texture: true, textureSource: true });
   * ```
   */
  destroy(t = !1) {
    if (this.destroyed)
      return;
    this.destroyed = !0;
    let e;
    if (this.children.length && (e = this.removeChildren(0, this.children.length)), this.removeFromParent(), this.parent = null, this._maskEffect = null, this._filterEffect = null, this.effects = null, this._position = null, this._scale = null, this._pivot = null, this._origin = null, this._skew = null, this.emit("destroyed", this), this.removeAllListeners(), (typeof t == "boolean" ? t : t?.children) && e)
      for (let s = 0; s < e.length; ++s)
        e[s].destroy(t);
    this.renderGroup?.destroy(), this.renderGroup = null;
  }
}
At.mixin(
  ye,
  cf,
  mf,
  Sf,
  bf,
  xf,
  ff,
  pf,
  wf,
  nf,
  hf,
  _f,
  uf
);
class Bl extends ye {
  constructor(t) {
    super(t), this.canBundle = !0, this.allowChildren = !1, this._roundPixels = 0, this._lastUsed = -1, this._gpuData = /* @__PURE__ */ Object.create(null), this.autoGarbageCollect = !0, this._gcLastUsed = -1, this._bounds = new ae(0, 1, 0, 0), this._boundsDirty = !0, this.autoGarbageCollect = t.autoGarbageCollect ?? !0;
  }
  /**
   * The local bounds of the view in its own coordinate space.
   * Bounds are automatically updated when the view's content changes.
   * @example
   * ```ts
   * // Get bounds dimensions
   * const bounds = view.bounds;
   * console.log(`Width: ${bounds.maxX - bounds.minX}`);
   * console.log(`Height: ${bounds.maxY - bounds.minY}`);
   * ```
   * @returns The rectangular bounds of the view
   * @see {@link Bounds} For bounds operations
   */
  get bounds() {
    return this._boundsDirty ? (this.updateBounds(), this._boundsDirty = !1, this._bounds) : this._bounds;
  }
  /**
   * Whether or not to round the x/y position of the sprite.
   * @example
   * ```ts
   * // Enable pixel rounding for crisp rendering
   * view.roundPixels = true;
   * ```
   * @default false
   */
  get roundPixels() {
    return !!this._roundPixels;
  }
  set roundPixels(t) {
    this._roundPixels = t ? 1 : 0;
  }
  /**
   * Checks if the object contains the given point in local coordinates.
   * Uses the view's bounds for hit testing.
   * @example
   * ```ts
   * // Basic point check
   * const localPoint = { x: 50, y: 25 };
   * const contains = view.containsPoint(localPoint);
   * console.log('Point is inside:', contains);
   * ```
   * @param point - The point to check in local coordinates
   * @returns True if the point is within the view's bounds
   * @see {@link ViewContainer#bounds} For the bounds used in hit testing
   * @see {@link Container#toLocal} For converting global coordinates to local
   */
  containsPoint(t) {
    const e = this.bounds, { x: i, y: s } = t;
    return i >= e.minX && i <= e.maxX && s >= e.minY && s <= e.maxY;
  }
  /** @private */
  onViewUpdate() {
    if (this._didViewChangeTick++, this._boundsDirty = !0, this.didViewUpdate)
      return;
    this.didViewUpdate = !0;
    const t = this.renderGroup || this.parentRenderGroup;
    t && t.onChildViewUpdate(this);
  }
  /** Unloads the GPU data from the view. */
  unload() {
    this.emit("unload", this);
    for (const t in this._gpuData)
      this._gpuData[t]?.destroy();
    this._gpuData = /* @__PURE__ */ Object.create(null), this.onViewUpdate();
  }
  destroy(t) {
    this.unload(), super.destroy(t), this._bounds = null;
  }
  /**
   * Collects renderables for the view container.
   * @param instructionSet - The instruction set to collect renderables for.
   * @param renderer - The renderer to collect renderables for.
   * @param currentLayer - The current render layer.
   * @internal
   */
  collectRenderablesSimple(t, e, i) {
    const { renderPipes: s } = e;
    s.blendMode.pushBlendMode(this, this.groupBlendMode, t), s[this.renderPipeId].addRenderable(this, t), this.didViewUpdate = !1;
    const a = this.children, o = a.length;
    for (let h = 0; h < o; h++)
      a[h].collectRenderables(t, e, i);
    s.blendMode.popBlendMode(t);
  }
}
class ge extends Bl {
  /**
   * @param options - The options for creating the sprite.
   */
  constructor(t = X.EMPTY) {
    t instanceof X && (t = { texture: t });
    const { texture: e = X.EMPTY, anchor: i, roundPixels: s, width: n, height: a, ...o } = t;
    super({
      label: "Sprite",
      ...o
    }), this.renderPipeId = "sprite", this.batched = !0, this._visualBounds = { minX: 0, maxX: 1, minY: 0, maxY: 0 }, this._anchor = new Tt(
      {
        _onUpdate: () => {
          this.onViewUpdate();
        }
      }
    ), i ? this.anchor = i : e.defaultAnchor && (this.anchor = e.defaultAnchor), this.texture = e, this.allowChildren = !1, this.roundPixels = s ?? !1, n !== void 0 && (this.width = n), a !== void 0 && (this.height = a);
  }
  /**
   * Creates a new sprite based on a source texture, image, video, or canvas element.
   * This is a convenience method that automatically creates and manages textures.
   * @example
   * ```ts
   * // Create from path or URL
   * const sprite = Sprite.from('assets/image.png');
   *
   * // Create from existing texture
   * const sprite = Sprite.from(texture);
   *
   * // Create from canvas
   * const canvas = document.createElement('canvas');
   * const sprite = Sprite.from(canvas, true); // Skip caching new texture
   * ```
   * @param source - The source to create the sprite from. Can be a path to an image, a texture,
   * or any valid texture source (canvas, video, etc.)
   * @param skipCache - Whether to skip adding to the texture cache when creating a new texture
   * @returns A new sprite based on the source
   * @see {@link Texture.from} For texture creation details
   * @see {@link Assets} For asset loading and management
   */
  static from(t, e = !1) {
    return t instanceof X ? new ge(t) : new ge(X.from(t, e));
  }
  set texture(t) {
    t || (t = X.EMPTY);
    const e = this._texture;
    e !== t && (e && e.dynamic && e.off("update", this.onViewUpdate, this), t.dynamic && t.on("update", this.onViewUpdate, this), this._texture = t, this._width && this._setWidth(this._width, this._texture.orig.width), this._height && this._setHeight(this._height, this._texture.orig.height), this.onViewUpdate());
  }
  /**
   * The texture that is displayed by the sprite. When changed, automatically updates
   * the sprite dimensions and manages texture event listeners.
   * @example
   * ```ts
   * // Create sprite with texture
   * const sprite = new Sprite({
   *     texture: Texture.from('sprite.png')
   * });
   *
   * // Update texture
   * sprite.texture = Texture.from('newSprite.png');
   *
   * // Use texture from spritesheet
   * const sheet = await Assets.load('spritesheet.json');
   * sprite.texture = sheet.textures['frame1.png'];
   *
   * // Reset to empty texture
   * sprite.texture = Texture.EMPTY;
   * ```
   * @see {@link Texture} For texture creation and management
   * @see {@link Assets} For asset loading
   */
  get texture() {
    return this._texture;
  }
  /**
   * The bounds of the sprite, taking into account the texture's trim area.
   * @example
   * ```ts
   * const texture = new Texture({
   *     source: new TextureSource({ width: 300, height: 300 }),
   *     frame: new Rectangle(196, 66, 58, 56),
   *     trim: new Rectangle(4, 4, 58, 56),
   *     orig: new Rectangle(0, 0, 64, 64),
   *     rotate: 2,
   * });
   * const sprite = new Sprite(texture);
   * const visualBounds = sprite.visualBounds;
   * // console.log(visualBounds); // { minX: -4, maxX: 62, minY: -4, maxY: 60 }
   */
  get visualBounds() {
    return Hd(this._visualBounds, this._anchor, this._texture), this._visualBounds;
  }
  /**
   * @deprecated
   * @ignore
   */
  get sourceBounds() {
    return N("8.6.1", "Sprite.sourceBounds is deprecated, use visualBounds instead."), this.visualBounds;
  }
  /** @private */
  updateBounds() {
    const t = this._anchor, e = this._texture, i = this._bounds, { width: s, height: n } = e.orig;
    i.minX = -t._x * s, i.maxX = i.minX + s, i.minY = -t._y * n, i.maxY = i.minY + n;
  }
  /**
   * Destroys this sprite renderable and optionally its texture.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @example
   * sprite.destroy();
   * sprite.destroy(true);
   * sprite.destroy({ texture: true, textureSource: true });
   */
  destroy(t = !1) {
    if (super.destroy(t), typeof t == "boolean" ? t : t?.texture) {
      const i = typeof t == "boolean" ? t : t?.textureSource;
      this._texture.destroy(i);
    }
    this._texture = null, this._visualBounds = null, this._bounds = null, this._anchor = null;
  }
  /**
   * The anchor sets the origin point of the sprite. The default value is taken from the {@link Texture}
   * and passed to the constructor.
   *
   * - The default is `(0,0)`, this means the sprite's origin is the top left.
   * - Setting the anchor to `(0.5,0.5)` means the sprite's origin is centered.
   * - Setting the anchor to `(1,1)` would mean the sprite's origin point will be the bottom right corner.
   *
   * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
   * @example
   * ```ts
   * // Center the anchor point
   * sprite.anchor = 0.5; // Sets both x and y to 0.5
   * sprite.position.set(400, 300); // Sprite will be centered at this position
   *
   * // Set specific x/y anchor points
   * sprite.anchor = {
   *     x: 1, // Right edge
   *     y: 0  // Top edge
   * };
   *
   * // Using individual coordinates
   * sprite.anchor.set(0.5, 1); // Center-bottom
   *
   * // For rotation around center
   * sprite.anchor.set(0.5);
   * sprite.rotation = Math.PI / 4; // 45 degrees around center
   *
   * // For scaling from center
   * sprite.anchor.set(0.5);
   * sprite.scale.set(2); // Scales from center point
   * ```
   */
  get anchor() {
    return this._anchor;
  }
  set anchor(t) {
    typeof t == "number" ? this._anchor.set(t) : this._anchor.copyFrom(t);
  }
  /**
   * The width of the sprite, setting this will actually modify the scale to achieve the value set.
   * @example
   * ```ts
   * // Set width directly
   * sprite.width = 200;
   * console.log(sprite.scale.x); // Scale adjusted to match width
   *
   * // Set width while preserving aspect ratio
   * const ratio = sprite.height / sprite.width;
   * sprite.width = 300;
   * sprite.height = 300 * ratio;
   *
   * // For better performance when setting both width and height
   * sprite.setSize(300, 400); // Avoids recalculating bounds twice
   *
   * // Reset to original texture size
   * sprite.width = sprite.texture.orig.width;
   * ```
   */
  get width() {
    return Math.abs(this.scale.x) * this._texture.orig.width;
  }
  set width(t) {
    this._setWidth(t, this._texture.orig.width), this._width = t;
  }
  /**
   * The height of the sprite, setting this will actually modify the scale to achieve the value set.
   * @example
   * ```ts
   * // Set height directly
   * sprite.height = 150;
   * console.log(sprite.scale.y); // Scale adjusted to match height
   *
   * // Set height while preserving aspect ratio
   * const ratio = sprite.width / sprite.height;
   * sprite.height = 200;
   * sprite.width = 200 * ratio;
   *
   * // For better performance when setting both width and height
   * sprite.setSize(300, 400); // Avoids recalculating bounds twice
   *
   * // Reset to original texture size
   * sprite.height = sprite.texture.orig.height;
   * ```
   */
  get height() {
    return Math.abs(this.scale.y) * this._texture.orig.height;
  }
  set height(t) {
    this._setHeight(t, this._texture.orig.height), this._height = t;
  }
  /**
   * Retrieves the size of the Sprite as a [Size]{@link Size} object based on the texture dimensions and scale.
   * This is faster than getting width and height separately as it only calculates the bounds once.
   * @example
   * ```ts
   * // Basic size retrieval
   * const sprite = new Sprite(Texture.from('sprite.png'));
   * const size = sprite.getSize();
   * console.log(`Size: ${size.width}x${size.height}`);
   *
   * // Reuse existing size object
   * const reuseSize = { width: 0, height: 0 };
   * sprite.getSize(reuseSize);
   * ```
   * @param out - Optional object to store the size in, to avoid allocating a new object
   * @returns The size of the Sprite
   * @see {@link Sprite#width} For getting just the width
   * @see {@link Sprite#height} For getting just the height
   * @see {@link Sprite#setSize} For setting both width and height
   */
  getSize(t) {
    return t || (t = {}), t.width = Math.abs(this.scale.x) * this._texture.orig.width, t.height = Math.abs(this.scale.y) * this._texture.orig.height, t;
  }
  /**
   * Sets the size of the Sprite to the specified width and height.
   * This is faster than setting width and height separately as it only recalculates bounds once.
   * @example
   * ```ts
   * // Basic size setting
   * const sprite = new Sprite(Texture.from('sprite.png'));
   * sprite.setSize(100, 200); // Width: 100, Height: 200
   *
   * // Set uniform size
   * sprite.setSize(100); // Sets both width and height to 100
   *
   * // Set size with object
   * sprite.setSize({
   *     width: 200,
   *     height: 300
   * });
   *
   * // Reset to texture size
   * sprite.setSize(
   *     sprite.texture.orig.width,
   *     sprite.texture.orig.height
   * );
   * ```
   * @param value - This can be either a number or a {@link Size} object
   * @param height - The height to set. Defaults to the value of `width` if not provided
   * @see {@link Sprite#width} For setting width only
   * @see {@link Sprite#height} For setting height only
   * @see {@link Sprite#texture} For the source dimensions
   */
  setSize(t, e) {
    typeof t == "object" ? (e = t.height ?? t.width, t = t.width) : e ?? (e = t), t !== void 0 && this._setWidth(t, this._texture.orig.width), e !== void 0 && this._setHeight(e, this._texture.orig.height);
  }
}
const kf = new ae();
function Ol(r, t, e) {
  const i = kf;
  r.measurable = !0, Pl(r, e, i), t.addBoundsMask(i), r.measurable = !1;
}
function Ll(r, t, e) {
  const i = Ce.get();
  r.measurable = !0;
  const s = Rt.get().identity(), n = Dl(r, e, s);
  El(r, i, n), r.measurable = !1, t.addBoundsMask(i), Rt.return(s), Ce.return(i);
}
function Dl(r, t, e) {
  return r ? (r !== t && (Dl(r.parent, t, e), r.updateLocalTransform(), e.append(r.localTransform)), e) : (rt("Mask bounds, renderable is not inside the root container"), e);
}
class zl {
  constructor(t) {
    this.priority = 0, this.inverse = !1, this.pipe = "alphaMask", t?.mask && this.init(t.mask);
  }
  init(t) {
    this.mask = t, this.renderMaskToTexture = !(t instanceof ge), this.mask.renderable = this.renderMaskToTexture, this.mask.includeInBuild = !this.renderMaskToTexture, this.mask.measurable = !1;
  }
  reset() {
    this.mask !== null && (this.mask.measurable = !0, this.mask = null);
  }
  addBounds(t, e) {
    this.inverse || Ol(this.mask, t, e);
  }
  addLocalBounds(t, e) {
    Ll(this.mask, t, e);
  }
  containsPoint(t, e) {
    const i = this.mask;
    return e(i, t);
  }
  destroy() {
    this.reset();
  }
  static test(t) {
    return t instanceof ge;
  }
}
zl.extension = D.MaskEffect;
class Gl {
  constructor(t) {
    this.priority = 0, this.pipe = "colorMask", t?.mask && this.init(t.mask);
  }
  init(t) {
    this.mask = t;
  }
  destroy() {
  }
  static test(t) {
    return typeof t == "number";
  }
}
Gl.extension = D.MaskEffect;
class Ul {
  constructor(t) {
    this.priority = 0, this.pipe = "stencilMask", t?.mask && this.init(t.mask);
  }
  init(t) {
    this.mask = t, this.mask.includeInBuild = !1, this.mask.measurable = !1;
  }
  reset() {
    this.mask !== null && (this.mask.measurable = !0, this.mask.includeInBuild = !0, this.mask = null);
  }
  addBounds(t, e) {
    Ol(this.mask, t, e);
  }
  addLocalBounds(t, e) {
    Ll(this.mask, t, e);
  }
  containsPoint(t, e) {
    const i = this.mask;
    return e(i, t);
  }
  destroy() {
    this.reset();
  }
  static test(t) {
    return t instanceof ye;
  }
}
Ul.extension = D.MaskEffect;
const Ef = {
  createCanvas: (r, t) => {
    const e = document.createElement("canvas");
    return e.width = r, e.height = t, e;
  },
  createImage: () => new Image(),
  getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
  getWebGLRenderingContext: () => WebGLRenderingContext,
  getNavigator: () => navigator,
  getBaseUrl: () => document.baseURI ?? window.location.href,
  getFontFaceSet: () => document.fonts,
  fetch: (r, t) => fetch(r, t),
  parseXML: (r) => new DOMParser().parseFromString(r, "text/xml")
};
let So = Ef;
const st = {
  /**
   * Returns the current adapter.
   * @returns {environment.Adapter} The current adapter.
   */
  get() {
    return So;
  },
  /**
   * Sets the current adapter.
   * @param adapter - The new adapter.
   */
  set(r) {
    So = r;
  }
};
class Wl extends he {
  constructor(t) {
    t.resource || (t.resource = st.get().createCanvas()), t.width || (t.width = t.resource.width, t.autoDensity || (t.width /= t.resolution)), t.height || (t.height = t.resource.height, t.autoDensity || (t.height /= t.resolution)), super(t), this.uploadMethodId = "image", this.autoDensity = t.autoDensity, this.resizeCanvas(), this.transparent = !!t.transparent;
  }
  resizeCanvas() {
    this.autoDensity && "style" in this.resource && (this.resource.style.width = `${this.width}px`, this.resource.style.height = `${this.height}px`), (this.resource.width !== this.pixelWidth || this.resource.height !== this.pixelHeight) && (this.resource.width = this.pixelWidth, this.resource.height = this.pixelHeight);
  }
  resize(t = this.width, e = this.height, i = this._resolution) {
    const s = super.resize(t, e, i);
    return s && this.resizeCanvas(), s;
  }
  static test(t) {
    return globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement || globalThis.OffscreenCanvas && t instanceof OffscreenCanvas;
  }
  /**
   * Returns the 2D rendering context for the canvas.
   * Caches the context after creating it.
   * @returns The 2D rendering context of the canvas.
   */
  get context2D() {
    return this._context2D || (this._context2D = this.resource.getContext("2d"));
  }
}
Wl.extension = D.TextureSource;
class oi extends he {
  constructor(t) {
    super(t), this.uploadMethodId = "image", this.autoGarbageCollect = !0;
  }
  static test(t) {
    return globalThis.HTMLImageElement && t instanceof HTMLImageElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap || globalThis.VideoFrame && t instanceof VideoFrame;
  }
}
oi.extension = D.TextureSource;
var Fn = /* @__PURE__ */ ((r) => (r[r.INTERACTION = 50] = "INTERACTION", r[r.HIGH = 25] = "HIGH", r[r.NORMAL = 0] = "NORMAL", r[r.LOW = -25] = "LOW", r[r.UTILITY = -50] = "UTILITY", r))(Fn || {});
class Ws {
  /**
   * Constructor
   * @private
   * @param fn - The listener function to be added for one update
   * @param context - The listener context
   * @param priority - The priority for emitting
   * @param once - If the handler should fire once
   */
  constructor(t, e = null, i = 0, s = !1) {
    this.next = null, this.previous = null, this._destroyed = !1, this._fn = t, this._context = e, this.priority = i, this._once = s;
  }
  /**
   * Simple compare function to figure out if a function and context match.
   * @param fn - The listener function to be added for one update
   * @param context - The listener context
   * @returns `true` if the listener match the arguments
   */
  match(t, e = null) {
    return this._fn === t && this._context === e;
  }
  /**
   * Emit by calling the current function.
   * @param ticker - The ticker emitting.
   * @returns Next ticker
   */
  emit(t) {
    this._fn && (this._context ? this._fn.call(this._context, t) : this._fn(t));
    const e = this.next;
    return this._once && this.destroy(!0), this._destroyed && (this.next = null), e;
  }
  /**
   * Connect to the list.
   * @param previous - Input node, previous listener
   */
  connect(t) {
    this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this;
  }
  /**
   * Destroy and don't use after this.
   * @param hard - `true` to remove the `next` reference, this
   *        is considered a hard destroy. Soft destroy maintains the next reference.
   * @returns The listener to redirect while emitting or removing.
   */
  destroy(t = !1) {
    this._destroyed = !0, this._fn = null, this._context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
    const e = this.next;
    return this.next = t ? null : e, this.previous = null, e;
  }
}
const Nl = class Wt {
  constructor() {
    this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new Ws(null, null, 1 / 0), this.deltaMS = 1 / Wt.targetFPMS, this.elapsedMS = 1 / Wt.targetFPMS, this._tick = (t) => {
      this._requestId = null, this.started && (this.update(t), this.started && this._requestId === null && this._head.next && (this._requestId = requestAnimationFrame(this._tick)));
    };
  }
  /**
   * Conditionally requests a new animation frame.
   * If a frame has not already been requested, and if the internal
   * emitter has listeners, a new frame is requested.
   */
  _requestIfNeeded() {
    this._requestId === null && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick));
  }
  /** Conditionally cancels a pending animation frame. */
  _cancelIfNeeded() {
    this._requestId !== null && (cancelAnimationFrame(this._requestId), this._requestId = null);
  }
  /**
   * Conditionally requests a new animation frame.
   * If the ticker has been started it checks if a frame has not already
   * been requested, and if the internal emitter has listeners. If these
   * conditions are met, a new frame is requested. If the ticker has not
   * been started, but autoStart is `true`, then the ticker starts now,
   * and continues with the previous conditions to request a new frame.
   */
  _startIfPossible() {
    this.started ? this._requestIfNeeded() : this.autoStart && this.start();
  }
  /**
   * Register a handler for tick events.
   * @param fn - The listener function to add. Receives the Ticker instance as parameter
   * @param context - The context for the listener
   * @param priority - The priority of the listener
   * @example
   * ```ts
   * // Access time properties through the ticker parameter
   * ticker.add((ticker) => {
   *     // Use deltaTime (dimensionless scalar) for frame-independent animations
   *     sprite.rotation += 0.1 * ticker.deltaTime;
   *
   *     // Use deltaMS (milliseconds) for time-based calculations
   *     const progress = ticker.deltaMS / animationDuration;
   *
   *     // Use elapsedMS for raw timing measurements
   *     console.log(`Raw frame time: ${ticker.elapsedMS}ms`);
   * });
   * ```
   */
  add(t, e, i = Fn.NORMAL) {
    return this._addListener(new Ws(t, e, i));
  }
  /**
   * Add a handler for the tick event which is only executed once on the next frame.
   * @example
   * ```ts
   * // Basic one-time update
   * ticker.addOnce(() => {
   *     console.log('Runs next frame only');
   * });
   *
   * // With specific context
   * const game = {
   *     init(ticker) {
   *         this.loadResources();
   *         console.log('Game initialized');
   *     }
   * };
   * ticker.addOnce(game.init, game);
   *
   * // With priority
   * ticker.addOnce(
   *     () => {
   *         // High priority one-time setup
   *         physics.init();
   *     },
   *     undefined,
   *     UPDATE_PRIORITY.HIGH
   * );
   * ```
   * @param fn - The listener function to be added for one update
   * @param context - The listener context
   * @param priority - The priority for emitting (default: UPDATE_PRIORITY.NORMAL)
   * @returns This instance of a ticker
   * @see {@link Ticker#add} For continuous updates
   * @see {@link Ticker#remove} For removing handlers
   */
  addOnce(t, e, i = Fn.NORMAL) {
    return this._addListener(new Ws(t, e, i, !0));
  }
  /**
   * Internally adds the event handler so that it can be sorted by priority.
   * Priority allows certain handler (user, AnimatedSprite, Interaction) to be run
   * before the rendering.
   * @private
   * @param listener - Current listener being added.
   * @returns This instance of a ticker
   */
  _addListener(t) {
    let e = this._head.next, i = this._head;
    if (!e)
      t.connect(i);
    else {
      for (; e; ) {
        if (t.priority > e.priority) {
          t.connect(i);
          break;
        }
        i = e, e = e.next;
      }
      t.previous || t.connect(i);
    }
    return this._startIfPossible(), this;
  }
  /**
   * Removes any handlers matching the function and context parameters.
   * If no handlers are left after removing, then it cancels the animation frame.
   * @example
   * ```ts
   * // Basic removal
   * const onTick = () => {
   *     sprite.rotation += 0.1;
   * };
   * ticker.add(onTick);
   * ticker.remove(onTick);
   *
   * // Remove with context
   * const game = {
   *     update(ticker) {
   *         this.physics.update(ticker.deltaTime);
   *     }
   * };
   * ticker.add(game.update, game);
   * ticker.remove(game.update, game);
   *
   * // Remove all matching handlers
   * // (if same function was added multiple times)
   * ticker.add(onTick);
   * ticker.add(onTick);
   * ticker.remove(onTick); // Removes all instances
   * ```
   * @param fn - The listener function to be removed
   * @param context - The listener context to be removed
   * @returns This instance of a ticker
   * @see {@link Ticker#add} For adding handlers
   * @see {@link Ticker#addOnce} For one-time handlers
   */
  remove(t, e) {
    let i = this._head.next;
    for (; i; )
      i.match(t, e) ? i = i.destroy() : i = i.next;
    return this._head.next || this._cancelIfNeeded(), this;
  }
  /**
   * The number of listeners on this ticker, calculated by walking through linked list.
   * @example
   * ```ts
   * // Check number of active listeners
   * const ticker = new Ticker();
   * console.log(ticker.count); // 0
   *
   * // Add some listeners
   * ticker.add(() => {});
   * ticker.add(() => {});
   * console.log(ticker.count); // 2
   *
   * // Check after cleanup
   * ticker.destroy();
   * console.log(ticker.count); // 0
   * ```
   * @readonly
   * @see {@link Ticker#add} For adding listeners
   * @see {@link Ticker#remove} For removing listeners
   */
  get count() {
    if (!this._head)
      return 0;
    let t = 0, e = this._head;
    for (; e = e.next; )
      t++;
    return t;
  }
  /**
   * Starts the ticker. If the ticker has listeners a new animation frame is requested at this point.
   * @example
   * ```ts
   * // Basic manual start
   * const ticker = new Ticker();
   * ticker.add(() => {
   *     // Animation code here
   * });
   * ticker.start();
   * ```
   * @see {@link Ticker#stop} For stopping the ticker
   * @see {@link Ticker#autoStart} For automatic starting
   * @see {@link Ticker#started} For checking ticker state
   */
  start() {
    this.started || (this.started = !0, this._requestIfNeeded());
  }
  /**
   * Stops the ticker. If the ticker has requested an animation frame it is canceled at this point.
   * @example
   * ```ts
   * // Basic stop
   * const ticker = new Ticker();
   * ticker.stop();
   * ```
   * @see {@link Ticker#start} For starting the ticker
   * @see {@link Ticker#started} For checking ticker state
   * @see {@link Ticker#destroy} For cleaning up the ticker
   */
  stop() {
    this.started && (this.started = !1, this._cancelIfNeeded());
  }
  /**
   * Destroy the ticker and don't use after this. Calling this method removes all references to internal events.
   * @example
   * ```ts
   * // Clean up with active listeners
   * const ticker = new Ticker();
   * ticker.add(() => {});
   * ticker.destroy(); // Removes all listeners
   * ```
   * @see {@link Ticker#stop} For stopping without destroying
   * @see {@link Ticker#remove} For removing specific listeners
   */
  destroy() {
    if (!this._protected) {
      this.stop();
      let t = this._head.next;
      for (; t; )
        t = t.destroy(!0);
      this._head.destroy(), this._head = null;
    }
  }
  /**
   * Triggers an update.
   *
   * An update entails setting the
   * current {@link Ticker#elapsedMS|elapsedMS},
   * the current {@link Ticker#deltaTime|deltaTime},
   * invoking all listeners with current deltaTime,
   * and then finally setting {@link Ticker#lastTime|lastTime}
   * with the value of currentTime that was provided.
   *
   * This method will be called automatically by animation
   * frame callbacks if the ticker instance has been started
   * and listeners are added.
   * @example
   * ```ts
   * // Basic manual update
   * const ticker = new Ticker();
   * ticker.update(performance.now());
   * ```
   * @param currentTime - The current time of execution (defaults to performance.now())
   * @see {@link Ticker#deltaTime} For frame delta value
   * @see {@link Ticker#elapsedMS} For raw elapsed time
   */
  update(t = performance.now()) {
    let e;
    if (t > this.lastTime) {
      if (e = this.elapsedMS = t - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), e *= this.speed, this._minElapsedMS) {
        const n = t - this._lastFrame | 0;
        if (n < this._minElapsedMS)
          return;
        this._lastFrame = t - n % this._minElapsedMS;
      }
      this.deltaMS = e, this.deltaTime = this.deltaMS * Wt.targetFPMS;
      const i = this._head;
      let s = i.next;
      for (; s; )
        s = s.emit(this);
      i.next || this._cancelIfNeeded();
    } else
      this.deltaTime = this.deltaMS = this.elapsedMS = 0;
    this.lastTime = t;
  }
  /**
   * The frames per second at which this ticker is running.
   * The default is approximately 60 in most modern browsers.
   * > [!NOTE] This does not factor in the value of
   * > {@link Ticker#speed|speed}, which is specific
   * > to scaling {@link Ticker#deltaTime|deltaTime}.
   * @example
   * ```ts
   * // Basic FPS monitoring
   * ticker.add(() => {
   *     console.log(`Current FPS: ${Math.round(ticker.FPS)}`);
   * });
   * ```
   * @readonly
   */
  get FPS() {
    return 1e3 / this.elapsedMS;
  }
  /**
   * Manages the maximum amount of milliseconds allowed to
   * elapse between invoking {@link Ticker#update|update}.
   *
   * This value is used to cap {@link Ticker#deltaTime|deltaTime},
   * but does not effect the measured value of {@link Ticker#FPS|FPS}.
   *
   * When setting this property it is clamped to a value between
   * `0` and `Ticker.targetFPMS * 1000`.
   * @example
   * ```ts
   * // Set minimum acceptable frame rate
   * const ticker = new Ticker();
   * ticker.minFPS = 30; // Never go below 30 FPS
   *
   * // Use with maxFPS for frame rate clamping
   * ticker.minFPS = 30;
   * ticker.maxFPS = 60;
   *
   * // Monitor delta capping
   * ticker.add(() => {
   *     // Delta time will be capped based on minFPS
   *     console.log(`Delta time: ${ticker.deltaTime}`);
   * });
   * ```
   * @default 10
   */
  get minFPS() {
    return 1e3 / this._maxElapsedMS;
  }
  set minFPS(t) {
    const e = Math.min(this.maxFPS, t), i = Math.min(Math.max(0, e) / 1e3, Wt.targetFPMS);
    this._maxElapsedMS = 1 / i;
  }
  /**
   * Manages the minimum amount of milliseconds required to
   * elapse between invoking {@link Ticker#update|update}.
   *
   * This will effect the measured value of {@link Ticker#FPS|FPS}.
   *
   * If it is set to `0`, then there is no limit; PixiJS will render as many frames as it can.
   * Otherwise it will be at least `minFPS`
   * @example
   * ```ts
   * // Set minimum acceptable frame rate
   * const ticker = new Ticker();
   * ticker.maxFPS = 60; // Never go above 60 FPS
   *
   * // Use with maxFPS for frame rate clamping
   * ticker.minFPS = 30;
   * ticker.maxFPS = 60;
   *
   * // Monitor delta capping
   * ticker.add(() => {
   *     // Delta time will be capped based on maxFPS
   *     console.log(`Delta time: ${ticker.deltaTime}`);
   * });
   * ```
   * @default 0
   */
  get maxFPS() {
    return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
  }
  set maxFPS(t) {
    if (t === 0)
      this._minElapsedMS = 0;
    else {
      const e = Math.max(this.minFPS, t);
      this._minElapsedMS = 1 / (e / 1e3);
    }
  }
  /**
   * The shared ticker instance used by {@link AnimatedSprite} and by
   * {@link VideoSource} to update animation frames / video textures.
   *
   * It may also be used by {@link Application} if created with the `sharedTicker` option property set to true.
   *
   * The property {@link Ticker#autoStart|autoStart} is set to `true` for this instance.
   * Please follow the examples for usage, including how to opt-out of auto-starting the shared ticker.
   * @example
   * import { Ticker } from 'pixi.js';
   *
   * const ticker = Ticker.shared;
   * // Set this to prevent starting this ticker when listeners are added.
   * // By default this is true only for the Ticker.shared instance.
   * ticker.autoStart = false;
   *
   * // FYI, call this to ensure the ticker is stopped. It should be stopped
   * // if you have not attempted to render anything yet.
   * ticker.stop();
   *
   * // Call this when you are ready for a running shared ticker.
   * ticker.start();
   * @example
   * import { autoDetectRenderer, Container } from 'pixi.js';
   *
   * // You may use the shared ticker to render...
   * const renderer = autoDetectRenderer();
   * const stage = new Container();
   * document.body.appendChild(renderer.view);
   * ticker.add((time) => renderer.render(stage));
   *
   * // Or you can just update it manually.
   * ticker.autoStart = false;
   * ticker.stop();
   * const animate = (time) => {
   *     ticker.update(time);
   *     renderer.render(stage);
   *     requestAnimationFrame(animate);
   * };
   * animate(performance.now());
   * @type {Ticker}
   * @readonly
   */
  static get shared() {
    if (!Wt._shared) {
      const t = Wt._shared = new Wt();
      t.autoStart = !0, t._protected = !0;
    }
    return Wt._shared;
  }
  /**
   * The system ticker instance used by {@link PrepareBase} for core timing
   * functionality that shouldn't usually need to be paused, unlike the `shared`
   * ticker which drives visual animations and rendering which may want to be paused.
   *
   * The property {@link Ticker#autoStart|autoStart} is set to `true` for this instance.
   * @type {Ticker}
   * @readonly
   * @advanced
   */
  static get system() {
    if (!Wt._system) {
      const t = Wt._system = new Wt();
      t.autoStart = !0, t._protected = !0;
    }
    return Wt._system;
  }
};
Nl.targetFPMS = 0.06;
let Br = Nl, Ns;
async function Vl() {
  return Ns ?? (Ns = (async () => {
    const t = st.get().createCanvas(1, 1).getContext("webgl");
    if (!t)
      return "premultiply-alpha-on-upload";
    const e = await new Promise((a) => {
      const o = document.createElement("video");
      o.onloadeddata = () => a(o), o.onerror = () => a(null), o.autoplay = !1, o.crossOrigin = "anonymous", o.preload = "auto", o.src = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=", o.load();
    });
    if (!e)
      return "premultiply-alpha-on-upload";
    const i = t.createTexture();
    t.bindTexture(t.TEXTURE_2D, i);
    const s = t.createFramebuffer();
    t.bindFramebuffer(t.FRAMEBUFFER, s), t.framebufferTexture2D(
      t.FRAMEBUFFER,
      t.COLOR_ATTACHMENT0,
      t.TEXTURE_2D,
      i,
      0
    ), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e);
    const n = new Uint8Array(4);
    return t.readPixels(0, 0, 1, 1, t.RGBA, t.UNSIGNED_BYTE, n), t.deleteFramebuffer(s), t.deleteTexture(i), t.getExtension("WEBGL_lose_context")?.loseContext(), n[0] <= n[3] ? "premultiplied-alpha" : "premultiply-alpha-on-upload";
  })()), Ns;
}
const fs = class Yl extends he {
  constructor(t) {
    super(t), this.isReady = !1, this.uploadMethodId = "video", t = {
      ...Yl.defaultOptions,
      ...t
    }, this._autoUpdate = !0, this._isConnectedToTicker = !1, this._updateFPS = t.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = t.autoPlay !== !1, this.alphaMode = t.alphaMode ?? "premultiply-alpha-on-upload", this._videoFrameRequestCallback = this._videoFrameRequestCallback.bind(this), this._videoFrameRequestCallbackHandle = null, this._load = null, this._resolve = null, this._reject = null, this._onCanPlay = this._onCanPlay.bind(this), this._onCanPlayThrough = this._onCanPlayThrough.bind(this), this._onError = this._onError.bind(this), this._onPlayStart = this._onPlayStart.bind(this), this._onPlayStop = this._onPlayStop.bind(this), this._onSeeked = this._onSeeked.bind(this), t.autoLoad !== !1 && this.load();
  }
  /** Update the video frame if the source is not destroyed and meets certain conditions. */
  updateFrame() {
    if (!this.destroyed) {
      if (this._updateFPS) {
        const t = Br.shared.elapsedMS * this.resource.playbackRate;
        this._msToNextUpdate = Math.floor(this._msToNextUpdate - t);
      }
      (!this._updateFPS || this._msToNextUpdate <= 0) && (this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0), this.isValid && this.update();
    }
  }
  /** Callback to update the video frame and potentially request the next frame update. */
  _videoFrameRequestCallback() {
    this.updateFrame(), this.destroyed ? this._videoFrameRequestCallbackHandle = null : this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(
      this._videoFrameRequestCallback
    );
  }
  /**
   * Checks if the resource has valid dimensions.
   * @returns {boolean} True if width and height are set, otherwise false.
   */
  get isValid() {
    return !!this.resource.videoWidth && !!this.resource.videoHeight;
  }
  /**
   * Start preloading the video resource.
   * @returns {Promise<this>} Handle the validate event
   */
  async load() {
    if (this._load)
      return this._load;
    const t = this.resource, e = this.options;
    return (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0), t.addEventListener("play", this._onPlayStart), t.addEventListener("pause", this._onPlayStop), t.addEventListener("seeked", this._onSeeked), this._isSourceReady() ? this._mediaReady() : (e.preload || t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlayThrough), t.addEventListener("error", this._onError, !0)), this.alphaMode = await Vl(), this._load = new Promise((i, s) => {
      this.isValid ? i(this) : (this._resolve = i, this._reject = s, e.preloadTimeoutMs !== void 0 && (this._preloadTimeout = setTimeout(() => {
        this._onError(new ErrorEvent(`Preload exceeded timeout of ${e.preloadTimeoutMs}ms`));
      })), t.load());
    }), this._load;
  }
  /**
   * Handle video error events.
   * @param event - The error event
   */
  _onError(t) {
    this.resource.removeEventListener("error", this._onError, !0), this.emit("error", t), this._reject && (this._reject(t), this._reject = null, this._resolve = null);
  }
  /**
   * Checks if the underlying source is playing.
   * @returns True if playing.
   */
  _isSourcePlaying() {
    const t = this.resource;
    return !t.paused && !t.ended;
  }
  /**
   * Checks if the underlying source is ready for playing.
   * @returns True if ready.
   */
  _isSourceReady() {
    return this.resource.readyState > 2;
  }
  /** Runs the update loop when the video is ready to play. */
  _onPlayStart() {
    this.isValid || this._mediaReady(), this._configureAutoUpdate();
  }
  /** Stops the update loop when a pause event is triggered. */
  _onPlayStop() {
    this._configureAutoUpdate();
  }
  /** Handles behavior when the video completes seeking to the current playback position. */
  _onSeeked() {
    this._autoUpdate && !this._isSourcePlaying() && (this._msToNextUpdate = 0, this.updateFrame(), this._msToNextUpdate = 0);
  }
  _onCanPlay() {
    this.resource.removeEventListener("canplay", this._onCanPlay), this._mediaReady();
  }
  _onCanPlayThrough() {
    this.resource.removeEventListener("canplaythrough", this._onCanPlay), this._preloadTimeout && (clearTimeout(this._preloadTimeout), this._preloadTimeout = void 0), this._mediaReady();
  }
  /** Fired when the video is loaded and ready to play. */
  _mediaReady() {
    const t = this.resource;
    this.isValid && (this.isReady = !0, this.resize(t.videoWidth, t.videoHeight)), this._msToNextUpdate = 0, this.updateFrame(), this._msToNextUpdate = 0, this._resolve && (this._resolve(this), this._resolve = null, this._reject = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && this.resource.play();
  }
  /** Cleans up resources and event listeners associated with this texture. */
  destroy() {
    this._configureAutoUpdate();
    const t = this.resource;
    t && (t.removeEventListener("play", this._onPlayStart), t.removeEventListener("pause", this._onPlayStop), t.removeEventListener("seeked", this._onSeeked), t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlayThrough), t.removeEventListener("error", this._onError, !0), t.pause(), t.src = "", t.load()), super.destroy();
  }
  /** Should the base texture automatically update itself, set to true by default. */
  get autoUpdate() {
    return this._autoUpdate;
  }
  set autoUpdate(t) {
    t !== this._autoUpdate && (this._autoUpdate = t, this._configureAutoUpdate());
  }
  /**
   * How many times a second to update the texture from the video.
   * Leave at 0 to update at every render.
   * A lower fps can help performance, as updating the texture at 60fps on a 30ps video may not be efficient.
   */
  get updateFPS() {
    return this._updateFPS;
  }
  set updateFPS(t) {
    t !== this._updateFPS && (this._updateFPS = t, this._configureAutoUpdate());
  }
  /**
   * Configures the updating mechanism based on the current state and settings.
   *
   * This method decides between using the browser's native video frame callback or a custom ticker
   * for updating the video frame. It ensures optimal performance and responsiveness
   * based on the video's state, playback status, and the desired frames-per-second setting.
   *
   * - If `_autoUpdate` is enabled and the video source is playing:
   *   - It will prefer the native video frame callback if available and no specific FPS is set.
   *   - Otherwise, it will use a custom ticker for manual updates.
   * - If `_autoUpdate` is disabled or the video isn't playing, any active update mechanisms are halted.
   */
  _configureAutoUpdate() {
    this._autoUpdate && this._isSourcePlaying() ? !this._updateFPS && this.resource.requestVideoFrameCallback ? (this._isConnectedToTicker && (Br.shared.remove(this.updateFrame, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0), this._videoFrameRequestCallbackHandle === null && (this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(
      this._videoFrameRequestCallback
    ))) : (this._videoFrameRequestCallbackHandle !== null && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker || (Br.shared.add(this.updateFrame, this), this._isConnectedToTicker = !0, this._msToNextUpdate = 0)) : (this._videoFrameRequestCallbackHandle !== null && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker && (Br.shared.remove(this.updateFrame, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0));
  }
  static test(t) {
    return globalThis.HTMLVideoElement && t instanceof HTMLVideoElement;
  }
};
fs.extension = D.TextureSource;
fs.defaultOptions = {
  ...he.defaultOptions,
  /** If true, the video will start loading immediately. */
  autoLoad: !0,
  /** If true, the video will start playing as soon as it is loaded. */
  autoPlay: !0,
  /** The number of times a second to update the texture from the video. Leave at 0 to update at every render. */
  updateFPS: 0,
  /** If true, the video will be loaded with the `crossorigin` attribute. */
  crossorigin: !0,
  /** If true, the video will loop when it ends. */
  loop: !1,
  /** If true, the video will be muted. */
  muted: !0,
  /** If true, the video will play inline. */
  playsinline: !0,
  /** If true, the video will be preloaded. */
  preload: !1
};
fs.MIME_TYPES = {
  ogv: "video/ogg",
  mov: "video/quicktime",
  m4v: "video/mp4"
};
let ar = fs;
const ne = (r, t, e = !1) => (Array.isArray(r) || (r = [r]), t ? r.map((i) => typeof i == "string" || e ? t(i) : i) : r);
class Rf {
  constructor() {
    this._parsers = [], this._cache = /* @__PURE__ */ new Map(), this._cacheMap = /* @__PURE__ */ new Map();
  }
  /** Clear all entries. */
  reset() {
    this._cacheMap.clear(), this._cache.clear();
  }
  /**
   * Check if the key exists
   * @param key - The key to check
   */
  has(t) {
    return this._cache.has(t);
  }
  /**
   * Fetch entry by key
   * @param key - The key of the entry to get
   */
  get(t) {
    const e = this._cache.get(t);
    return e || rt(`[Assets] Asset id ${t} was not found in the Cache`), e;
  }
  /**
   * Set a value by key or keys name
   * @param key - The key or keys to set
   * @param value - The value to store in the cache or from which cacheable assets will be derived.
   */
  set(t, e) {
    const i = ne(t);
    let s;
    for (let h = 0; h < this.parsers.length; h++) {
      const l = this.parsers[h];
      if (l.test(e)) {
        s = l.getCacheableAssets(i, e);
        break;
      }
    }
    const n = new Map(Object.entries(s || {}));
    s || i.forEach((h) => {
      n.set(h, e);
    });
    const a = [...n.keys()], o = {
      cacheKeys: a,
      keys: i
    };
    i.forEach((h) => {
      this._cacheMap.set(h, o);
    }), a.forEach((h) => {
      const l = s ? s[h] : e;
      this._cache.has(h) && this._cache.get(h) !== l && rt("[Cache] already has key:", h), this._cache.set(h, n.get(h));
    });
  }
  /**
   * Remove entry by key
   *
   * This function will also remove any associated alias from the cache also.
   * @param key - The key of the entry to remove
   */
  remove(t) {
    if (!this._cacheMap.has(t)) {
      rt(`[Assets] Asset id ${t} was not found in the Cache`);
      return;
    }
    const e = this._cacheMap.get(t);
    e.cacheKeys.forEach((s) => {
      this._cache.delete(s);
    }), e.keys.forEach((s) => {
      this._cacheMap.delete(s);
    });
  }
  /**
   * All loader parsers registered
   * @advanced
   */
  get parsers() {
    return this._parsers;
  }
}
const it = new Rf(), In = [];
At.handleByList(D.TextureSource, In);
function $l(r = {}) {
  const t = r && r.resource, e = t ? r.resource : r, i = t ? r : { resource: r };
  for (let s = 0; s < In.length; s++) {
    const n = In[s];
    if (n.test(e))
      return new n(i);
  }
  throw new Error(`Could not find a source type for resource: ${i.resource}`);
}
function Ff(r = {}, t = !1) {
  const e = r && r.resource, i = e ? r.resource : r, s = e ? r : { resource: r };
  if (!t && it.has(i))
    return it.get(i);
  const n = new X({ source: $l(s) });
  return n.on("destroy", () => {
    it.has(i) && it.remove(i);
  }), t || it.set(i, n), n;
}
function If(r, t = !1) {
  return typeof r == "string" ? it.get(r) : r instanceof he ? new X({ source: r }) : Ff(r, t);
}
X.from = If;
he.from = $l;
At.add(zl, Gl, Ul, ar, oi, Wl, pa);
var Ne = /* @__PURE__ */ ((r) => (r[r.Low = 0] = "Low", r[r.Normal = 1] = "Normal", r[r.High = 2] = "High", r))(Ne || {});
function se(r) {
  if (typeof r != "string")
    throw new TypeError(`Path must be a string. Received ${JSON.stringify(r)}`);
}
function Vi(r) {
  return r.split("?")[0].split("#")[0];
}
function Bf(r) {
  return r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Of(r, t, e) {
  return r.replace(new RegExp(Bf(t), "g"), e);
}
function Lf(r, t) {
  let e = "", i = 0, s = -1, n = 0, a = -1;
  for (let o = 0; o <= r.length; ++o) {
    if (o < r.length)
      a = r.charCodeAt(o);
    else {
      if (a === 47)
        break;
      a = 47;
    }
    if (a === 47) {
      if (!(s === o - 1 || n === 1)) if (s !== o - 1 && n === 2) {
        if (e.length < 2 || i !== 2 || e.charCodeAt(e.length - 1) !== 46 || e.charCodeAt(e.length - 2) !== 46) {
          if (e.length > 2) {
            const h = e.lastIndexOf("/");
            if (h !== e.length - 1) {
              h === -1 ? (e = "", i = 0) : (e = e.slice(0, h), i = e.length - 1 - e.lastIndexOf("/")), s = o, n = 0;
              continue;
            }
          } else if (e.length === 2 || e.length === 1) {
            e = "", i = 0, s = o, n = 0;
            continue;
          }
        }
      } else
        e.length > 0 ? e += `/${r.slice(s + 1, o)}` : e = r.slice(s + 1, o), i = o - s - 1;
      s = o, n = 0;
    } else a === 46 && n !== -1 ? ++n : n = -1;
  }
  return e;
}
const Xt = {
  /**
   * Converts a path to posix format.
   * @param path - The path to convert to posix
   * @example
   * ```ts
   * // Convert a Windows path to POSIX format
   * path.toPosix('C:\\Users\\User\\Documents\\file.txt');
   * // -> 'C:/Users/User/Documents/file.txt'
   * ```
   */
  toPosix(r) {
    return Of(r, "\\", "/");
  },
  /**
   * Checks if the path is a URL e.g. http://, https://
   * @param path - The path to check
   * @example
   * ```ts
   * // Check if a path is a URL
   * path.isUrl('http://www.example.com');
   * // -> true
   * path.isUrl('C:/Users/User/Documents/file.txt');
   * // -> false
   * ```
   */
  isUrl(r) {
    return /^https?:/.test(this.toPosix(r));
  },
  /**
   * Checks if the path is a data URL
   * @param path - The path to check
   * @example
   * ```ts
   * // Check if a path is a data URL
   * path.isDataUrl('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...');
   * // -> true
   * ```
   */
  isDataUrl(r) {
    return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(r);
  },
  /**
   * Checks if the path is a blob URL
   * @param path - The path to check
   * @example
   * ```ts
   * // Check if a path is a blob URL
   * path.isBlobUrl('blob:http://www.example.com/12345678-1234-1234-1234-123456789012');
   * // -> true
   * ```
   */
  isBlobUrl(r) {
    return r.startsWith("blob:");
  },
  /**
   * Checks if the path has a protocol e.g. http://, https://, file:///, data:, blob:, C:/
   * This will return true for windows file paths
   * @param path - The path to check
   * @example
   * ```ts
   * // Check if a path has a protocol
   * path.hasProtocol('http://www.example.com');
   * // -> true
   * path.hasProtocol('C:/Users/User/Documents/file.txt');
   * // -> true
   * ```
   */
  hasProtocol(r) {
    return /^[^/:]+:/.test(this.toPosix(r));
  },
  /**
   * Returns the protocol of the path e.g. http://, https://, file:///, data:, blob:, C:/
   * @param path - The path to get the protocol from
   * @example
   * ```ts
   * // Get the protocol from a URL
   * path.getProtocol('http://www.example.com/path/to/resource');
   * // -> 'http://'
   * // Get the protocol from a file path
   * path.getProtocol('C:/Users/User/Documents/file.txt');
   * // -> 'C:/'
   * ```
   */
  getProtocol(r) {
    se(r), r = this.toPosix(r);
    const t = /^file:\/\/\//.exec(r);
    if (t)
      return t[0];
    const e = /^[^/:]+:\/{0,2}/.exec(r);
    return e ? e[0] : "";
  },
  /**
   * Converts URL to an absolute path.
   * When loading from a Web Worker, we must use absolute paths.
   * If the URL is already absolute we return it as is
   * If it's not, we convert it
   * @param url - The URL to test
   * @param customBaseUrl - The base URL to use
   * @param customRootUrl - The root URL to use
   * @example
   * ```ts
   * // Convert a relative URL to an absolute path
   * path.toAbsolute('images/texture.png', 'http://example.com/assets/');
   * // -> 'http://example.com/assets/images/texture.png'
   * ```
   */
  toAbsolute(r, t, e) {
    if (se(r), this.isDataUrl(r) || this.isBlobUrl(r))
      return r;
    const i = Vi(this.toPosix(t ?? st.get().getBaseUrl())), s = Vi(this.toPosix(e ?? this.rootname(i)));
    return r = this.toPosix(r), r.startsWith("/") ? Xt.join(s, r.slice(1)) : this.isAbsolute(r) ? r : this.join(i, r);
  },
  /**
   * Normalizes the given path, resolving '..' and '.' segments
   * @param path - The path to normalize
   * @example
   * ```ts
   * // Normalize a path with relative segments
   * path.normalize('http://www.example.com/foo/bar/../baz');
   * // -> 'http://www.example.com/foo/baz'
   * // Normalize a file path with relative segments
   * path.normalize('C:\\Users\\User\\Documents\\..\\file.txt');
   * // -> 'C:/Users/User/file.txt'
   * ```
   */
  normalize(r) {
    if (se(r), r.length === 0)
      return ".";
    if (this.isDataUrl(r) || this.isBlobUrl(r))
      return r;
    r = this.toPosix(r);
    let t = "";
    const e = r.startsWith("/");
    this.hasProtocol(r) && (t = this.rootname(r), r = r.slice(t.length));
    const i = r.endsWith("/");
    return r = Lf(r), r.length > 0 && i && (r += "/"), e ? `/${r}` : t + r;
  },
  /**
   * Determines if path is an absolute path.
   * Absolute paths can be urls, data urls, or paths on disk
   * @param path - The path to test
   * @example
   * ```ts
   * // Check if a path is absolute
   * path.isAbsolute('http://www.example.com/foo/bar');
   * // -> true
   * path.isAbsolute('C:/Users/User/Documents/file.txt');
   * // -> true
   * ```
   */
  isAbsolute(r) {
    return se(r), r = this.toPosix(r), this.hasProtocol(r) ? !0 : r.startsWith("/");
  },
  /**
   * Joins all given path segments together using the platform-specific separator as a delimiter,
   * then normalizes the resulting path
   * @param segments - The segments of the path to join
   * @example
   * ```ts
   * // Join multiple path segments
   * path.join('assets', 'images', 'sprite.png');
   * // -> 'assets/images/sprite.png'
   * // Join with relative segments
   * path.join('assets', 'images', '../textures', 'sprite.png');
   * // -> 'assets/textures/sprite.png'
   * ```
   */
  join(...r) {
    if (r.length === 0)
      return ".";
    let t;
    for (let e = 0; e < r.length; ++e) {
      const i = r[e];
      if (se(i), i.length > 0)
        if (t === void 0)
          t = i;
        else {
          const s = r[e - 1] ?? "";
          this.joinExtensions.includes(this.extname(s).toLowerCase()) ? t += `/../${i}` : t += `/${i}`;
        }
    }
    return t === void 0 ? "." : this.normalize(t);
  },
  /**
   * Returns the directory name of a path
   * @param path - The path to parse
   * @example
   * ```ts
   * // Get the directory name of a path
   * path.dirname('http://www.example.com/foo/bar/baz.png');
   * // -> 'http://www.example.com/foo/bar'
   * // Get the directory name of a file path
   * path.dirname('C:/Users/User/Documents/file.txt');
   * // -> 'C:/Users/User/Documents'
   * ```
   */
  dirname(r) {
    if (se(r), r.length === 0)
      return ".";
    r = this.toPosix(r);
    let t = r.charCodeAt(0);
    const e = t === 47;
    let i = -1, s = !0;
    const n = this.getProtocol(r), a = r;
    r = r.slice(n.length);
    for (let o = r.length - 1; o >= 1; --o)
      if (t = r.charCodeAt(o), t === 47) {
        if (!s) {
          i = o;
          break;
        }
      } else
        s = !1;
    return i === -1 ? e ? "/" : this.isUrl(a) ? n + r : n : e && i === 1 ? "//" : n + r.slice(0, i);
  },
  /**
   * Returns the root of the path e.g. /, C:/, file:///, http://domain.com/
   * @param path - The path to parse
   * @example
   * ```ts
   * // Get the root of a URL
   * path.rootname('http://www.example.com/foo/bar/baz.png');
   * // -> 'http://www.example.com/'
   * // Get the root of a file path
   * path.rootname('C:/Users/User/Documents/file.txt');
   * // -> 'C:/'
   * ```
   */
  rootname(r) {
    se(r), r = this.toPosix(r);
    let t = "";
    if (r.startsWith("/") ? t = "/" : t = this.getProtocol(r), this.isUrl(r)) {
      const e = r.indexOf("/", t.length);
      e !== -1 ? t = r.slice(0, e) : t = r, t.endsWith("/") || (t += "/");
    }
    return t;
  },
  /**
   * Returns the last portion of a path
   * @param path - The path to test
   * @param ext - Optional extension to remove
   * @example
   * ```ts
   * // Get the basename of a URL
   * path.basename('http://www.example.com/foo/bar/baz.png');
   * // -> 'baz.png'
   * // Get the basename of a file path
   * path.basename('C:/Users/User/Documents/file.txt');
   * // -> 'file.txt'
   * ```
   */
  basename(r, t) {
    se(r), t && se(t), r = Vi(this.toPosix(r));
    let e = 0, i = -1, s = !0, n;
    if (t !== void 0 && t.length > 0 && t.length <= r.length) {
      if (t.length === r.length && t === r)
        return "";
      let a = t.length - 1, o = -1;
      for (n = r.length - 1; n >= 0; --n) {
        const h = r.charCodeAt(n);
        if (h === 47) {
          if (!s) {
            e = n + 1;
            break;
          }
        } else
          o === -1 && (s = !1, o = n + 1), a >= 0 && (h === t.charCodeAt(a) ? --a === -1 && (i = n) : (a = -1, i = o));
      }
      return e === i ? i = o : i === -1 && (i = r.length), r.slice(e, i);
    }
    for (n = r.length - 1; n >= 0; --n)
      if (r.charCodeAt(n) === 47) {
        if (!s) {
          e = n + 1;
          break;
        }
      } else i === -1 && (s = !1, i = n + 1);
    return i === -1 ? "" : r.slice(e, i);
  },
  /**
   * Returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last
   * portion of the path. If there is no . in the last portion of the path, or if there are no . characters other than
   * the first character of the basename of path, an empty string is returned.
   * @param path - The path to parse
   * @example
   * ```ts
   * // Get the extension of a URL
   * path.extname('http://www.example.com/foo/bar/baz.png');
   * // -> '.png'
   * // Get the extension of a file path
   * path.extname('C:/Users/User/Documents/file.txt');
   * // -> '.txt'
   * ```
   */
  extname(r) {
    se(r), r = Vi(this.toPosix(r));
    let t = -1, e = 0, i = -1, s = !0, n = 0;
    for (let a = r.length - 1; a >= 0; --a) {
      const o = r.charCodeAt(a);
      if (o === 47) {
        if (!s) {
          e = a + 1;
          break;
        }
        continue;
      }
      i === -1 && (s = !1, i = a + 1), o === 46 ? t === -1 ? t = a : n !== 1 && (n = 1) : t !== -1 && (n = -1);
    }
    return t === -1 || i === -1 || n === 0 || n === 1 && t === i - 1 && t === e + 1 ? "" : r.slice(t, i);
  },
  /**
   * Parses a path into an object containing the 'root', `dir`, `base`, `ext`, and `name` properties.
   * @param path - The path to parse
   * @example
   * ```ts
   * // Parse a URL
   * const parsed = path.parse('http://www.example.com/foo/bar/baz.png');
   * // -> {
   * //   root: 'http://www.example.com/',
   * //   dir: 'http://www.example.com/foo/bar',
   * //   base: 'baz.png',
   * //   ext: '.png',
   * //   name: 'baz'
   * // }
   * // Parse a file path
   * const parsedFile = path.parse('C:/Users/User/Documents/file.txt');
   * // -> {
   * //   root: 'C:/',
   * //   dir: 'C:/Users/User/Documents',
   * //   base: 'file.txt',
   * //   ext: '.txt',
   * //   name: 'file'
   * // }
   * ```
   */
  parse(r) {
    se(r);
    const t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (r.length === 0)
      return t;
    r = Vi(this.toPosix(r));
    let e = r.charCodeAt(0);
    const i = this.isAbsolute(r);
    let s;
    t.root = this.rootname(r), i || this.hasProtocol(r) ? s = 1 : s = 0;
    let n = -1, a = 0, o = -1, h = !0, l = r.length - 1, c = 0;
    for (; l >= s; --l) {
      if (e = r.charCodeAt(l), e === 47) {
        if (!h) {
          a = l + 1;
          break;
        }
        continue;
      }
      o === -1 && (h = !1, o = l + 1), e === 46 ? n === -1 ? n = l : c !== 1 && (c = 1) : n !== -1 && (c = -1);
    }
    return n === -1 || o === -1 || c === 0 || c === 1 && n === o - 1 && n === a + 1 ? o !== -1 && (a === 0 && i ? t.base = t.name = r.slice(1, o) : t.base = t.name = r.slice(a, o)) : (a === 0 && i ? (t.name = r.slice(1, n), t.base = r.slice(1, o)) : (t.name = r.slice(a, n), t.base = r.slice(a, o)), t.ext = r.slice(n, o)), t.dir = this.dirname(r), t;
  },
  sep: "/",
  delimiter: ":",
  joinExtensions: [".html"]
};
function jl(r, t, e, i, s) {
  const n = t[e];
  for (let a = 0; a < n.length; a++) {
    const o = n[a];
    e < t.length - 1 ? jl(r.replace(i[e], o), t, e + 1, i, s) : s.push(r.replace(i[e], o));
  }
}
function Df(r) {
  const t = /\{(.*?)\}/g, e = r.match(t), i = [];
  if (e) {
    const s = [];
    e.forEach((n) => {
      const a = n.substring(1, n.length - 1).split(",");
      s.push(a);
    }), jl(r, s, 0, e, i);
  } else
    i.push(r);
  return i;
}
const as = (r) => !Array.isArray(r);
class Ii {
  constructor() {
    this._defaultBundleIdentifierOptions = {
      connector: "-",
      createBundleAssetId: (t, e) => `${t}${this._bundleIdConnector}${e}`,
      extractAssetIdFromBundle: (t, e) => e.replace(`${t}${this._bundleIdConnector}`, "")
    }, this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector, this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId, this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle, this._assetMap = {}, this._preferredOrder = [], this._parsers = [], this._resolverHash = {}, this._bundles = {};
  }
  /**
   * Override how the resolver deals with generating bundle ids.
   * must be called before any bundles are added
   * @param bundleIdentifier - the bundle identifier options
   */
  setBundleIdentifier(t) {
    if (this._bundleIdConnector = t.connector ?? this._bundleIdConnector, this._createBundleAssetId = t.createBundleAssetId ?? this._createBundleAssetId, this._extractAssetIdFromBundle = t.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle, this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar")
      throw new Error("[Resolver] GenerateBundleAssetId are not working correctly");
  }
  /**
   * Let the resolver know which assets you prefer to use when resolving assets.
   * Multiple prefer user defined rules can be added.
   * @example
   * resolver.prefer({
   *     // first look for something with the correct format, and then then correct resolution
   *     priority: ['format', 'resolution'],
   *     params:{
   *         format:'webp', // prefer webp images
   *         resolution: 2, // prefer a resolution of 2
   *     }
   * })
   * resolver.add('foo', ['bar@2x.webp', 'bar@2x.png', 'bar.webp', 'bar.png']);
   * resolver.resolveUrl('foo') // => 'bar@2x.webp'
   * @param preferOrders - the prefer options
   */
  prefer(...t) {
    t.forEach((e) => {
      this._preferredOrder.push(e), e.priority || (e.priority = Object.keys(e.params));
    }), this._resolverHash = {};
  }
  /**
   * Set the base path to prepend to all urls when resolving
   * @example
   * resolver.basePath = 'https://home.com/';
   * resolver.add('foo', 'bar.ong');
   * resolver.resolveUrl('foo', 'bar.png'); // => 'https://home.com/bar.png'
   * @param basePath - the base path to use
   */
  set basePath(t) {
    this._basePath = t;
  }
  get basePath() {
    return this._basePath;
  }
  /**
   * Set the root path for root-relative URLs. By default the `basePath`'s root is used. If no `basePath` is set, then the
   * default value for browsers is `window.location.origin`
   * @example
   * // Application hosted on https://home.com/some-path/index.html
   * resolver.basePath = 'https://home.com/some-path/';
   * resolver.rootPath = 'https://home.com/';
   * resolver.add('foo', '/bar.png');
   * resolver.resolveUrl('foo', '/bar.png'); // => 'https://home.com/bar.png'
   * @param rootPath - the root path to use
   */
  set rootPath(t) {
    this._rootPath = t;
  }
  get rootPath() {
    return this._rootPath;
  }
  /**
   * All the active URL parsers that help the parser to extract information and create
   * an asset object-based on parsing the URL itself.
   *
   * Can be added using the extensions API
   * @example
   * resolver.add('foo', [
   *     {
   *         resolution: 2,
   *         format: 'png',
   *         src: 'image@2x.png',
   *     },
   *     {
   *         resolution:1,
   *         format:'png',
   *         src: 'image.png',
   *     },
   * ]);
   *
   * // With a url parser the information such as resolution and file format could extracted from the url itself:
   * extensions.add({
   *     extension: ExtensionType.ResolveParser,
   *     test: loadTextures.test, // test if url ends in an image
   *     parse: (value: string) =>
   *     ({
   *         resolution: parseFloat(Resolver.RETINA_PREFIX.exec(value)?.[1] ?? '1'),
   *         format: value.split('.').pop(),
   *         src: value,
   *     }),
   * });
   *
   * // Now resolution and format can be extracted from the url
   * resolver.add('foo', [
   *     'image@2x.png',
   *     'image.png',
   * ]);
   */
  get parsers() {
    return this._parsers;
  }
  /** Used for testing, this resets the resolver to its initial state */
  reset() {
    this.setBundleIdentifier(this._defaultBundleIdentifierOptions), this._assetMap = {}, this._preferredOrder = [], this._resolverHash = {}, this._rootPath = null, this._basePath = null, this._manifest = null, this._bundles = {}, this._defaultSearchParams = null;
  }
  /**
   * Sets the default URL search parameters for the URL resolver. The urls can be specified as a string or an object.
   * @param searchParams - the default url parameters to append when resolving urls
   */
  setDefaultSearchParams(t) {
    if (typeof t == "string")
      this._defaultSearchParams = t;
    else {
      const e = t;
      this._defaultSearchParams = Object.keys(e).map((i) => `${encodeURIComponent(i)}=${encodeURIComponent(e[i])}`).join("&");
    }
  }
  /**
   * Returns the aliases for a given asset
   * @param asset - the asset to get the aliases for
   */
  getAlias(t) {
    const { alias: e, src: i } = t;
    return ne(
      e || i,
      (n) => typeof n == "string" ? n : Array.isArray(n) ? n.map((a) => a?.src ?? a) : n?.src ? n.src : n,
      !0
    );
  }
  /**
   * Add a manifest to the asset resolver. This is a nice way to add all the asset information in one go.
   * generally a manifest would be built using a tool.
   * @param manifest - the manifest to add to the resolver
   */
  addManifest(t) {
    this._manifest && rt("[Resolver] Manifest already exists, this will be overwritten"), this._manifest = t, t.bundles.forEach((e) => {
      this.addBundle(e.name, e.assets);
    });
  }
  /**
   * This adds a bundle of assets in one go so that you can resolve them as a group.
   * For example you could add a bundle for each screen in you pixi app
   * @example
   * resolver.addBundle('animals', [
   *  { alias: 'bunny', src: 'bunny.png' },
   *  { alias: 'chicken', src: 'chicken.png' },
   *  { alias: 'thumper', src: 'thumper.png' },
   * ]);
   * // or
   * resolver.addBundle('animals', {
   *     bunny: 'bunny.png',
   *     chicken: 'chicken.png',
   *     thumper: 'thumper.png',
   * });
   *
   * const resolvedAssets = await resolver.resolveBundle('animals');
   * @param bundleId - The id of the bundle to add
   * @param assets - A record of the asset or assets that will be chosen from when loading via the specified key
   */
  addBundle(t, e) {
    const i = [];
    let s = e;
    Array.isArray(e) || (s = Object.entries(e).map(([n, a]) => typeof a == "string" || Array.isArray(a) ? { alias: n, src: a } : { alias: n, ...a })), s.forEach((n) => {
      const a = n.src, o = n.alias;
      let h;
      if (typeof o == "string") {
        const l = this._createBundleAssetId(t, o);
        i.push(l), h = [o, l];
      } else {
        const l = o.map((c) => this._createBundleAssetId(t, c));
        i.push(...l), h = [...o, ...l];
      }
      this.add({
        ...n,
        alias: h,
        src: a
      });
    }), this._bundles[t] = i;
  }
  /**
   * Tells the resolver what keys are associated with witch asset.
   * The most important thing the resolver does
   * @example
   * // Single key, single asset:
   * resolver.add({alias: 'foo', src: 'bar.png');
   * resolver.resolveUrl('foo') // => 'bar.png'
   *
   * // Multiple keys, single asset:
   * resolver.add({alias: ['foo', 'boo'], src: 'bar.png'});
   * resolver.resolveUrl('foo') // => 'bar.png'
   * resolver.resolveUrl('boo') // => 'bar.png'
   *
   * // Multiple keys, multiple assets:
   * resolver.add({alias: ['foo', 'boo'], src: ['bar.png', 'bar.webp']});
   * resolver.resolveUrl('foo') // => 'bar.png'
   *
   * // Add custom data attached to the resolver
   * Resolver.add({
   *     alias: 'bunnyBooBooSmooth',
   *     src: 'bunny{png,webp}',
   *     data: { scaleMode:SCALE_MODES.NEAREST }, // Base texture options
   * });
   *
   * resolver.resolve('bunnyBooBooSmooth') // => { src: 'bunny.png', data: { scaleMode: SCALE_MODES.NEAREST } }
   * @param aliases - the UnresolvedAsset or array of UnresolvedAssets to add to the resolver
   */
  add(t) {
    const e = [];
    Array.isArray(t) ? e.push(...t) : e.push(t);
    let i;
    i = (n) => {
      this.hasKey(n) && rt(`[Resolver] already has key: ${n} overwriting`);
    }, ne(e).forEach((n) => {
      const { src: a } = n;
      let {
        data: o,
        format: h,
        loadParser: l,
        parser: c
      } = n;
      const u = ne(a).map((p) => typeof p == "string" ? Df(p) : Array.isArray(p) ? p : [p]), f = this.getAlias(n);
      Array.isArray(f) ? f.forEach(i) : i(f);
      const d = [], g = (p) => ({
        ...this._parsers.find((_) => _.test(p))?.parse(p),
        src: p
      });
      u.forEach((p) => {
        p.forEach((m) => {
          let _ = {};
          if (typeof m != "object" ? _ = g(m) : (o = m.data ?? o, h = m.format ?? h, (m.loadParser || m.parser) && (l = m.loadParser ?? l, c = m.parser ?? c), _ = {
            ...g(m.src),
            ...m
          }), !f)
            throw new Error(`[Resolver] alias is undefined for this asset: ${_.src}`);
          _ = this._buildResolvedAsset(_, {
            aliases: f,
            data: o,
            format: h,
            loadParser: l,
            parser: c,
            progressSize: n.progressSize
          }), d.push(_);
        });
      }), f.forEach((p) => {
        this._assetMap[p] = d;
      });
    });
  }
  // TODO: this needs an overload like load did in Assets
  /**
   * If the resolver has had a manifest set via setManifest, this will return the assets urls for
   * a given bundleId or bundleIds.
   * @example
   * // Manifest Example
   * const manifest = {
   *     bundles: [
   *         {
   *             name: 'load-screen',
   *             assets: [
   *                 {
   *                     alias: 'background',
   *                     src: 'sunset.png',
   *                 },
   *                 {
   *                     alias: 'bar',
   *                     src: 'load-bar.{png,webp}',
   *                 },
   *             ],
   *         },
   *         {
   *             name: 'game-screen',
   *             assets: [
   *                 {
   *                     alias: 'character',
   *                     src: 'robot.png',
   *                 },
   *                 {
   *                     alias: 'enemy',
   *                     src: 'bad-guy.png',
   *                 },
   *             ],
   *         },
   *     ]
   * };
   *
   * resolver.setManifest(manifest);
   * const resolved = resolver.resolveBundle('load-screen');
   * @param bundleIds - The bundle ids to resolve
   * @returns All the bundles assets or a hash of assets for each bundle specified
   */
  resolveBundle(t) {
    const e = as(t);
    t = ne(t);
    const i = {};
    return t.forEach((s) => {
      const n = this._bundles[s];
      if (n) {
        const a = this.resolve(n), o = {};
        for (const h in a) {
          const l = a[h];
          o[this._extractAssetIdFromBundle(s, h)] = l;
        }
        i[s] = o;
      }
    }), e ? i[t[0]] : i;
  }
  /**
   * Does exactly what resolve does, but returns just the URL rather than the whole asset object
   * @param key - The key or keys to resolve
   * @returns - The URLs associated with the key(s)
   */
  resolveUrl(t) {
    const e = this.resolve(t);
    if (typeof t != "string") {
      const i = {};
      for (const s in e)
        i[s] = e[s].src;
      return i;
    }
    return e.src;
  }
  resolve(t) {
    const e = as(t);
    t = ne(t);
    const i = {};
    return t.forEach((s) => {
      if (!this._resolverHash[s])
        if (this._assetMap[s]) {
          let n = this._assetMap[s];
          const a = this._getPreferredOrder(n);
          a?.priority.forEach((o) => {
            a.params[o].forEach((h) => {
              const l = n.filter((c) => c[o] ? c[o] === h : !1);
              l.length && (n = l);
            });
          }), this._resolverHash[s] = n[0];
        } else
          this._resolverHash[s] = this._buildResolvedAsset({
            alias: [s],
            src: s
          }, {});
      i[s] = this._resolverHash[s];
    }), e ? i[t[0]] : i;
  }
  /**
   * Checks if an asset with a given key exists in the resolver
   * @param key - The key of the asset
   */
  hasKey(t) {
    return !!this._assetMap[t];
  }
  /**
   * Checks if a bundle with the given key exists in the resolver
   * @param key - The key of the bundle
   */
  hasBundle(t) {
    return !!this._bundles[t];
  }
  /**
   * Internal function for figuring out what prefer criteria an asset should use.
   * @param assets
   */
  _getPreferredOrder(t) {
    for (let e = 0; e < t.length; e++) {
      const i = t[e], s = this._preferredOrder.find((n) => n.params.format.includes(i.format));
      if (s)
        return s;
    }
    return this._preferredOrder[0];
  }
  /**
   * Appends the default url parameters to the url
   * @param url - The url to append the default parameters to
   * @returns - The url with the default parameters appended
   */
  _appendDefaultSearchParams(t) {
    if (!this._defaultSearchParams)
      return t;
    const e = /\?/.test(t) ? "&" : "?";
    return `${t}${e}${this._defaultSearchParams}`;
  }
  _buildResolvedAsset(t, e) {
    const { aliases: i, data: s, loadParser: n, parser: a, format: o, progressSize: h } = e;
    return (this._basePath || this._rootPath) && (t.src = Xt.toAbsolute(t.src, this._basePath, this._rootPath)), t.alias = i ?? t.alias ?? [t.src], t.src = this._appendDefaultSearchParams(t.src), t.data = { ...s || {}, ...t.data }, t.loadParser = n ?? t.loadParser, t.parser = a ?? t.parser, t.format = o ?? t.format ?? zf(t.src), h !== void 0 && (t.progressSize = h), t;
  }
}
Ii.RETINA_PREFIX = /@([0-9\.]+)x/;
function zf(r) {
  return r.split(".").pop().split("?").shift().split("#").shift();
}
const Bn = (r, t) => {
  const e = t.split("?")[1];
  return e && (r += `?${e}`), r;
}, Xl = class Ji {
  constructor(t, e) {
    this.linkedSheets = [];
    let i = t;
    t?.source instanceof he && (i = {
      texture: t,
      data: e
    });
    const { texture: s, data: n, cachePrefix: a = "" } = i;
    this.cachePrefix = a, this._texture = s instanceof X ? s : null, this.textureSource = s.source, this.textures = {}, this.animations = {}, this.data = n;
    const o = parseFloat(n.meta.scale);
    o ? (this.resolution = o, s.source.resolution = this.resolution) : this.resolution = s.source._resolution, this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null;
  }
  /**
   * Parser spritesheet from loaded data. This is done asynchronously
   * to prevent creating too many Texture within a single process.
   */
  parse() {
    return new Promise((t) => {
      this._callback = t, this._batchIndex = 0, this._frameKeys.length <= Ji.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch();
    });
  }
  /**
   * Process a batch of frames
   * @param initialFrameIndex - The index of frame to start.
   */
  _processFrames(t) {
    let e = t;
    const i = Ji.BATCH_SIZE;
    for (; e - t < i && e < this._frameKeys.length; ) {
      const s = this._frameKeys[e], n = this._frames[s], a = n.frame;
      if (a) {
        let o = null, h = null;
        const l = n.trimmed !== !1 && n.sourceSize ? n.sourceSize : n.frame, c = new _t(
          0,
          0,
          Math.floor(l.w) / this.resolution,
          Math.floor(l.h) / this.resolution
        );
        n.rotated ? o = new _t(
          Math.floor(a.x) / this.resolution,
          Math.floor(a.y) / this.resolution,
          Math.floor(a.h) / this.resolution,
          Math.floor(a.w) / this.resolution
        ) : o = new _t(
          Math.floor(a.x) / this.resolution,
          Math.floor(a.y) / this.resolution,
          Math.floor(a.w) / this.resolution,
          Math.floor(a.h) / this.resolution
        ), n.trimmed !== !1 && n.spriteSourceSize && (h = new _t(
          Math.floor(n.spriteSourceSize.x) / this.resolution,
          Math.floor(n.spriteSourceSize.y) / this.resolution,
          Math.floor(a.w) / this.resolution,
          Math.floor(a.h) / this.resolution
        )), this.textures[s] = new X({
          source: this.textureSource,
          frame: o,
          orig: c,
          trim: h,
          rotate: n.rotated ? 2 : 0,
          defaultAnchor: n.anchor,
          defaultBorders: n.borders,
          label: s.toString()
        });
      }
      e++;
    }
  }
  /** Parse animations config. */
  _processAnimations() {
    const t = this.data.animations || {};
    for (const e in t) {
      this.animations[e] = [];
      for (let i = 0; i < t[e].length; i++) {
        const s = t[e][i];
        this.animations[e].push(this.textures[s]);
      }
    }
  }
  /** The parse has completed. */
  _parseComplete() {
    const t = this._callback;
    this._callback = null, this._batchIndex = 0, t.call(this, this.textures);
  }
  /** Begin the next batch of textures. */
  _nextBatch() {
    this._processFrames(this._batchIndex * Ji.BATCH_SIZE), this._batchIndex++, setTimeout(() => {
      this._batchIndex * Ji.BATCH_SIZE < this._frameKeys.length ? this._nextBatch() : (this._processAnimations(), this._parseComplete());
    }, 0);
  }
  /**
   * Destroy Spritesheet and don't use after this.
   * @param {boolean} [destroyBase=false] - Whether to destroy the base texture as well
   */
  destroy(t = !1) {
    for (const e in this.textures)
      this.textures[e].destroy();
    this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && (this._texture?.destroy(), this.textureSource.destroy()), this._texture = null, this.textureSource = null, this.linkedSheets = [];
  }
};
Xl.BATCH_SIZE = 1e3;
let Ao = Xl;
const Gf = [
  "jpg",
  "png",
  "jpeg",
  "avif",
  "webp",
  "basis",
  "etc2",
  "bc7",
  "bc6h",
  "bc5",
  "bc4",
  "bc3",
  "bc2",
  "bc1",
  "eac",
  "astc"
];
function Hl(r, t, e) {
  const i = {};
  if (r.forEach((s) => {
    i[s] = t;
  }), Object.keys(t.textures).forEach((s) => {
    i[`${t.cachePrefix}${s}`] = t.textures[s];
  }), !e) {
    const s = Xt.dirname(r[0]);
    t.linkedSheets.forEach((n, a) => {
      const o = Hl([`${s}/${t.data.meta.related_multi_packs[a]}`], n, !0);
      Object.assign(i, o);
    });
  }
  return i;
}
const Uf = {
  extension: D.Asset,
  /** Handle the caching of the related Spritesheet Textures */
  cache: {
    test: (r) => r instanceof Ao,
    getCacheableAssets: (r, t) => Hl(r, t, !1)
  },
  /** Resolve the resolution of the asset. */
  resolver: {
    extension: {
      type: D.ResolveParser,
      name: "resolveSpritesheet"
    },
    test: (r) => {
      const e = r.split("?")[0].split("."), i = e.pop(), s = e.pop();
      return i === "json" && Gf.includes(s);
    },
    parse: (r) => {
      const t = r.split(".");
      return {
        resolution: parseFloat(Ii.RETINA_PREFIX.exec(r)?.[1] ?? "1"),
        format: t[t.length - 2],
        src: r
      };
    }
  },
  /**
   * Loader plugin that parses sprite sheets!
   * once the JSON has been loaded this checks to see if the JSON is spritesheet data.
   * If it is, we load the spritesheets image and parse the data into Spritesheet
   * All textures in the sprite sheet are then added to the cache
   */
  loader: {
    /** used for deprecation purposes */
    name: "spritesheetLoader",
    id: "spritesheet",
    extension: {
      type: D.LoadParser,
      priority: Ne.Normal,
      name: "spritesheetLoader"
    },
    async testParse(r, t) {
      return Xt.extname(t.src).toLowerCase() === ".json" && !!r.frames;
    },
    async parse(r, t, e) {
      const {
        texture: i,
        // if user need to use preloaded texture
        imageFilename: s,
        // if user need to use custom filename (not from jsonFile.meta.image)
        textureOptions: n,
        // if user need to set texture options on texture
        cachePrefix: a
        // if user need to use custom cache prefix
      } = t?.data ?? {};
      let o = Xt.dirname(t.src);
      o && o.lastIndexOf("/") !== o.length - 1 && (o += "/");
      let h;
      if (i instanceof X)
        h = i;
      else {
        const u = Bn(o + (s ?? r.meta.image), t.src);
        h = (await e.load([{ src: u, data: n }]))[u];
      }
      const l = new Ao({
        texture: h.source,
        data: r,
        cachePrefix: a
      });
      await l.parse();
      const c = r?.meta?.related_multi_packs;
      if (Array.isArray(c)) {
        const u = [];
        for (const d of c) {
          if (typeof d != "string")
            continue;
          let g = o + d;
          t.data?.ignoreMultiPack || (g = Bn(g, t.src), u.push(e.load({
            src: g,
            data: {
              textureOptions: n,
              ignoreMultiPack: !0
            }
          })));
        }
        const f = await Promise.all(u);
        l.linkedSheets = f, f.forEach((d) => {
          d.linkedSheets = [l].concat(l.linkedSheets.filter((g) => g !== d));
        });
      }
      return l;
    },
    async unload(r, t, e) {
      await e.unload(r.textureSource._sourceOrigin), r.destroy(!1);
    }
  }
};
At.add(Uf);
const Vs = /* @__PURE__ */ Object.create(null), To = /* @__PURE__ */ Object.create(null);
function ma(r, t) {
  let e = To[r];
  return e === void 0 && (Vs[t] === void 0 && (Vs[t] = 1), To[r] = e = Vs[t]++), e;
}
let Or;
function ql() {
  return (!Or || Or?.isContextLost()) && (Or = st.get().createCanvas().getContext("webgl", {})), Or;
}
let Lr;
function Wf() {
  if (!Lr) {
    Lr = "mediump";
    const r = ql();
    r && r.getShaderPrecisionFormat && (Lr = r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision ? "highp" : "mediump");
  }
  return Lr;
}
function Nf(r, t, e) {
  return t ? r : e ? (r = r.replace("out vec4 finalColor;", ""), `

        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${r}
        `) : `

        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${r}
        `;
}
function Vf(r, t, e) {
  const i = e ? t.maxSupportedFragmentPrecision : t.maxSupportedVertexPrecision;
  if (r.substring(0, 9) !== "precision") {
    let s = e ? t.requestedFragmentPrecision : t.requestedVertexPrecision;
    return s === "highp" && i !== "highp" && (s = "mediump"), `precision ${s} float;
${r}`;
  } else if (i !== "highp" && r.substring(0, 15) === "precision highp")
    return r.replace("precision highp", "precision mediump");
  return r;
}
function Yf(r, t) {
  return t ? `#version 300 es
${r}` : r;
}
const $f = {}, jf = {};
function Xf(r, { name: t = "pixi-program" }, e = !0) {
  t = t.replace(/\s+/g, "-"), t += e ? "-fragment" : "-vertex";
  const i = e ? $f : jf;
  return i[t] ? (i[t]++, t += `-${i[t]}`) : i[t] = 1, r.indexOf("#define SHADER_NAME") !== -1 ? r : `${`#define SHADER_NAME ${t}`}
${r}`;
}
function Hf(r, t) {
  return t ? r.replace("#version 300 es", "") : r;
}
const Ys = {
  // strips any version headers..
  stripVersion: Hf,
  // adds precision string if not already present
  ensurePrecision: Vf,
  // add some defines if WebGL1 to make it more compatible with WebGL2 shaders
  addProgramDefines: Nf,
  // add the program name to the shader
  setProgramName: Xf,
  // add the version string to the shader header
  insertVersion: Yf
}, Yi = /* @__PURE__ */ Object.create(null), Kl = class On {
  /**
   * Creates a shiny new GlProgram. Used by WebGL renderer.
   * @param options - The options for the program.
   */
  constructor(t) {
    t = { ...On.defaultOptions, ...t };
    const e = t.fragment.indexOf("#version 300 es") !== -1, i = {
      stripVersion: e,
      ensurePrecision: {
        requestedFragmentPrecision: t.preferredFragmentPrecision,
        requestedVertexPrecision: t.preferredVertexPrecision,
        maxSupportedVertexPrecision: "highp",
        maxSupportedFragmentPrecision: Wf()
      },
      setProgramName: {
        name: t.name
      },
      addProgramDefines: e,
      insertVersion: e
    };
    let s = t.fragment, n = t.vertex;
    Object.keys(Ys).forEach((a) => {
      const o = i[a];
      s = Ys[a](s, o, !0), n = Ys[a](n, o, !1);
    }), this.fragment = s, this.vertex = n, this.transformFeedbackVaryings = t.transformFeedbackVaryings, this._key = ma(`${this.vertex}:${this.fragment}`, "gl-program");
  }
  /** destroys the program */
  destroy() {
    this.fragment = null, this.vertex = null, this._attributeData = null, this._uniformData = null, this._uniformBlockData = null, this.transformFeedbackVaryings = null, Yi[this._cacheKey] = null;
  }
  /**
   * Helper function that creates a program for a given source.
   * It will check the program cache if the program has already been created.
   * If it has that one will be returned, if not a new one will be created and cached.
   * @param options - The options for the program.
   * @returns A program using the same source
   */
  static from(t) {
    const e = `${t.vertex}:${t.fragment}`;
    return Yi[e] || (Yi[e] = new On(t), Yi[e]._cacheKey = e), Yi[e];
  }
};
Kl.defaultOptions = {
  preferredVertexPrecision: "highp",
  preferredFragmentPrecision: "mediump"
};
let ps = Kl;
const Co = {
  uint8x2: { size: 2, stride: 2, normalised: !1 },
  uint8x4: { size: 4, stride: 4, normalised: !1 },
  sint8x2: { size: 2, stride: 2, normalised: !1 },
  sint8x4: { size: 4, stride: 4, normalised: !1 },
  unorm8x2: { size: 2, stride: 2, normalised: !0 },
  unorm8x4: { size: 4, stride: 4, normalised: !0 },
  snorm8x2: { size: 2, stride: 2, normalised: !0 },
  snorm8x4: { size: 4, stride: 4, normalised: !0 },
  uint16x2: { size: 2, stride: 4, normalised: !1 },
  uint16x4: { size: 4, stride: 8, normalised: !1 },
  sint16x2: { size: 2, stride: 4, normalised: !1 },
  sint16x4: { size: 4, stride: 8, normalised: !1 },
  unorm16x2: { size: 2, stride: 4, normalised: !0 },
  unorm16x4: { size: 4, stride: 8, normalised: !0 },
  snorm16x2: { size: 2, stride: 4, normalised: !0 },
  snorm16x4: { size: 4, stride: 8, normalised: !0 },
  float16x2: { size: 2, stride: 4, normalised: !1 },
  float16x4: { size: 4, stride: 8, normalised: !1 },
  float32: { size: 1, stride: 4, normalised: !1 },
  float32x2: { size: 2, stride: 8, normalised: !1 },
  float32x3: { size: 3, stride: 12, normalised: !1 },
  float32x4: { size: 4, stride: 16, normalised: !1 },
  uint32: { size: 1, stride: 4, normalised: !1 },
  uint32x2: { size: 2, stride: 8, normalised: !1 },
  uint32x3: { size: 3, stride: 12, normalised: !1 },
  uint32x4: { size: 4, stride: 16, normalised: !1 },
  sint32: { size: 1, stride: 4, normalised: !1 },
  sint32x2: { size: 2, stride: 8, normalised: !1 },
  sint32x3: { size: 3, stride: 12, normalised: !1 },
  sint32x4: { size: 4, stride: 16, normalised: !1 }
};
function qf(r) {
  return Co[r] ?? Co.float32;
}
const Kf = {
  f32: "float32",
  "vec2<f32>": "float32x2",
  "vec3<f32>": "float32x3",
  "vec4<f32>": "float32x4",
  vec2f: "float32x2",
  vec3f: "float32x3",
  vec4f: "float32x4",
  i32: "sint32",
  "vec2<i32>": "sint32x2",
  "vec3<i32>": "sint32x3",
  "vec4<i32>": "sint32x4",
  u32: "uint32",
  "vec2<u32>": "uint32x2",
  "vec3<u32>": "uint32x3",
  "vec4<u32>": "uint32x4",
  bool: "uint32",
  "vec2<bool>": "uint32x2",
  "vec3<bool>": "uint32x3",
  "vec4<bool>": "uint32x4"
};
function Zf({ source: r, entryPoint: t }) {
  const e = {}, i = r.indexOf(`fn ${t}`);
  if (i !== -1) {
    const s = r.indexOf("->", i);
    if (s !== -1) {
      const n = r.substring(i, s), a = /@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;
      let o;
      for (; (o = a.exec(n)) !== null; ) {
        const h = Kf[o[3]] ?? "float32";
        e[o[2]] = {
          location: parseInt(o[1], 10),
          format: h,
          stride: qf(h).stride,
          offset: 0,
          instance: !1,
          start: 0
        };
      }
    }
  }
  return e;
}
function $s(r) {
  const t = /(^|[^/])@(group|binding)\(\d+\)[^;]+;/g, e = /@group\((\d+)\)/, i = /@binding\((\d+)\)/, s = /var(<[^>]+>)? (\w+)/, n = /:\s*(\w+)/, a = /struct\s+(\w+)\s*{([^}]+)}/g, o = /(\w+)\s*:\s*([\w\<\>]+)/g, h = /struct\s+(\w+)/, l = r.match(t)?.map((u) => ({
    group: parseInt(u.match(e)[1], 10),
    binding: parseInt(u.match(i)[1], 10),
    name: u.match(s)[2],
    isUniform: u.match(s)[1] === "<uniform>",
    type: u.match(n)[1]
  }));
  if (!l)
    return {
      groups: [],
      structs: []
    };
  const c = r.match(a)?.map((u) => {
    const f = u.match(h)[1], d = u.match(o).reduce((g, p) => {
      const [m, _] = p.split(":");
      return g[m.trim()] = _.trim(), g;
    }, {});
    return d ? { name: f, members: d } : null;
  }).filter(({ name: u }) => l.some((f) => f.type === u)) ?? [];
  return {
    groups: l,
    structs: c
  };
}
var tr = /* @__PURE__ */ ((r) => (r[r.VERTEX = 1] = "VERTEX", r[r.FRAGMENT = 2] = "FRAGMENT", r[r.COMPUTE = 4] = "COMPUTE", r))(tr || {});
function Qf({ groups: r }) {
  const t = [];
  for (let e = 0; e < r.length; e++) {
    const i = r[e];
    t[i.group] || (t[i.group] = []), i.isUniform ? t[i.group].push({
      binding: i.binding,
      visibility: tr.VERTEX | tr.FRAGMENT,
      buffer: {
        type: "uniform"
      }
    }) : i.type === "sampler" ? t[i.group].push({
      binding: i.binding,
      visibility: tr.FRAGMENT,
      sampler: {
        type: "filtering"
      }
    }) : i.type === "texture_2d" && t[i.group].push({
      binding: i.binding,
      visibility: tr.FRAGMENT,
      texture: {
        sampleType: "float",
        viewDimension: "2d",
        multisampled: !1
      }
    });
  }
  return t;
}
function Jf({ groups: r }) {
  const t = [];
  for (let e = 0; e < r.length; e++) {
    const i = r[e];
    t[i.group] || (t[i.group] = {}), t[i.group][i.name] = i.binding;
  }
  return t;
}
function tp(r, t) {
  const e = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), s = [...r.structs, ...t.structs].filter((a) => e.has(a.name) ? !1 : (e.add(a.name), !0)), n = [...r.groups, ...t.groups].filter((a) => {
    const o = `${a.name}-${a.binding}`;
    return i.has(o) ? !1 : (i.add(o), !0);
  });
  return { structs: s, groups: n };
}
const $i = /* @__PURE__ */ Object.create(null);
class Bi {
  /**
   * Create a new GpuProgram
   * @param options - The options for the gpu program
   */
  constructor(t) {
    this._layoutKey = 0, this._attributeLocationsKey = 0;
    const { fragment: e, vertex: i, layout: s, gpuLayout: n, name: a } = t;
    if (this.name = a, this.fragment = e, this.vertex = i, e.source === i.source) {
      const o = $s(e.source);
      this.structsAndGroups = o;
    } else {
      const o = $s(i.source), h = $s(e.source);
      this.structsAndGroups = tp(o, h);
    }
    this.layout = s ?? Jf(this.structsAndGroups), this.gpuLayout = n ?? Qf(this.structsAndGroups), this.autoAssignGlobalUniforms = this.layout[0]?.globalUniforms !== void 0, this.autoAssignLocalUniforms = this.layout[1]?.localUniforms !== void 0, this._generateProgramKey();
  }
  // TODO maker this pure
  _generateProgramKey() {
    const { vertex: t, fragment: e } = this, i = t.source + e.source + t.entryPoint + e.entryPoint;
    this._layoutKey = ma(i, "program");
  }
  get attributeData() {
    return this._attributeData ?? (this._attributeData = Zf(this.vertex)), this._attributeData;
  }
  /** destroys the program */
  destroy() {
    this.gpuLayout = null, this.layout = null, this.structsAndGroups = null, this.fragment = null, this.vertex = null, $i[this._cacheKey] = null;
  }
  /**
   * Helper function that creates a program for a given source.
   * It will check the program cache if the program has already been created.
   * If it has that one will be returned, if not a new one will be created and cached.
   * @param options - The options for the program.
   * @returns A program using the same source
   */
  static from(t) {
    const e = `${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;
    return $i[e] || ($i[e] = new Bi(t), $i[e]._cacheKey = e), $i[e];
  }
}
const Zl = [
  "f32",
  "i32",
  "vec2<f32>",
  "vec3<f32>",
  "vec4<f32>",
  "mat2x2<f32>",
  "mat3x3<f32>",
  "mat4x4<f32>",
  "mat3x2<f32>",
  "mat4x2<f32>",
  "mat2x3<f32>",
  "mat4x3<f32>",
  "mat2x4<f32>",
  "mat3x4<f32>",
  "vec2<i32>",
  "vec3<i32>",
  "vec4<i32>"
], ep = Zl.reduce((r, t) => (r[t] = !0, r), {});
function ip(r, t) {
  switch (r) {
    case "f32":
      return 0;
    case "vec2<f32>":
      return new Float32Array(2 * t);
    case "vec3<f32>":
      return new Float32Array(3 * t);
    case "vec4<f32>":
      return new Float32Array(4 * t);
    case "mat2x2<f32>":
      return new Float32Array([
        1,
        0,
        0,
        1
      ]);
    case "mat3x3<f32>":
      return new Float32Array([
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ]);
    case "mat4x4<f32>":
      return new Float32Array([
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ]);
  }
  return null;
}
const Ql = class Jl {
  /**
   * Create a new Uniform group
   * @param uniformStructures - The structures of the uniform group
   * @param options - The optional parameters of this uniform group
   */
  constructor(t, e) {
    this._touched = 0, this.uid = ft("uniform"), this._resourceType = "uniformGroup", this._resourceId = ft("resource"), this.isUniformGroup = !0, this._dirtyId = 0, this.destroyed = !1, e = { ...Jl.defaultOptions, ...e }, this.uniformStructures = t;
    const i = {};
    for (const s in t) {
      const n = t[s];
      if (n.name = s, n.size = n.size ?? 1, !ep[n.type]) {
        const a = n.type.match(/^array<(\w+(?:<\w+>)?),\s*(\d+)>$/);
        if (a) {
          const [, o, h] = a;
          throw new Error(
            `Uniform type ${n.type} is not supported. Use type: '${o}', size: ${h} instead.`
          );
        }
        throw new Error(`Uniform type ${n.type} is not supported. Supported uniform types are: ${Zl.join(", ")}`);
      }
      n.value ?? (n.value = ip(n.type, n.size)), i[s] = n.value;
    }
    this.uniforms = i, this._dirtyId = 1, this.ubo = e.ubo, this.isStatic = e.isStatic, this._signature = ma(Object.keys(i).map(
      (s) => `${s}-${t[s].type}`
    ).join("-"), "uniform-group");
  }
  /** Call this if you want the uniform groups data to be uploaded to the GPU only useful if `isStatic` is true. */
  update() {
    this._dirtyId++;
  }
};
Ql.defaultOptions = {
  /** if true the UniformGroup is handled as an Uniform buffer object. */
  ubo: !1,
  /** if true, then you are responsible for when the data is uploaded to the GPU by calling `update()` */
  isStatic: !1
};
let tc = Ql;
class Hr {
  /**
   * Create a new instance eof the Bind Group.
   * @param resources - The resources that are bound together for use by a shader.
   */
  constructor(t) {
    this.resources = /* @__PURE__ */ Object.create(null), this._dirty = !0;
    let e = 0;
    for (const i in t) {
      const s = t[i];
      this.setResource(s, e++);
    }
    this._updateKey();
  }
  /**
   * Updates the key if its flagged as dirty. This is used internally to
   * match this bind group to a WebGPU BindGroup.
   * @internal
   */
  _updateKey() {
    if (!this._dirty)
      return;
    this._dirty = !1;
    const t = [];
    let e = 0;
    for (const i in this.resources)
      t[e++] = this.resources[i]._resourceId;
    this._key = t.join("|");
  }
  /**
   * Set a resource at a given index. this function will
   * ensure that listeners will be removed from the current resource
   * and added to the new resource.
   * @param resource - The resource to set.
   * @param index - The index to set the resource at.
   */
  setResource(t, e) {
    const i = this.resources[e];
    t !== i && (i && t.off?.("change", this.onResourceChange, this), t.on?.("change", this.onResourceChange, this), this.resources[e] = t, this._dirty = !0);
  }
  /**
   * Returns the resource at the current specified index.
   * @param index - The index of the resource to get.
   * @returns - The resource at the specified index.
   */
  getResource(t) {
    return this.resources[t];
  }
  /**
   * Used internally to 'touch' each resource, to ensure that the GC
   * knows that all resources in this bind group are still being used.
   * @param now - The current time in milliseconds.
   * @param tick - The current tick.
   * @internal
   */
  _touch(t, e) {
    const i = this.resources;
    for (const s in i)
      i[s]._gcLastUsed = t, i[s]._touched = e;
  }
  /** Destroys this bind group and removes all listeners. */
  destroy() {
    const t = this.resources;
    for (const e in t)
      t[e]?.off?.("change", this.onResourceChange, this);
    this.resources = null;
  }
  onResourceChange(t) {
    if (this._dirty = !0, t.destroyed) {
      const e = this.resources;
      for (const i in e)
        e[i] === t && (e[i] = null);
    } else
      this._updateKey();
  }
}
var _r = /* @__PURE__ */ ((r) => (r[r.WEBGL = 1] = "WEBGL", r[r.WEBGPU = 2] = "WEBGPU", r[r.BOTH = 3] = "BOTH", r))(_r || {});
class gs extends oe {
  constructor(t) {
    super(), this.uid = ft("shader"), this._uniformBindMap = /* @__PURE__ */ Object.create(null), this._ownedBindGroups = [], this._destroyed = !1;
    let {
      gpuProgram: e,
      glProgram: i,
      groups: s,
      resources: n,
      compatibleRenderers: a,
      groupMap: o
    } = t;
    this.gpuProgram = e, this.glProgram = i, a === void 0 && (a = 0, e && (a |= _r.WEBGPU), i && (a |= _r.WEBGL)), this.compatibleRenderers = a;
    const h = {};
    if (!n && !s && (n = {}), n && s)
      throw new Error("[Shader] Cannot have both resources and groups");
    if (!e && s && !o)
      throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");
    if (!e && s && o)
      for (const l in o)
        for (const c in o[l]) {
          const u = o[l][c];
          h[u] = {
            group: l,
            binding: c,
            name: u
          };
        }
    else if (e && s && !o) {
      const l = e.structsAndGroups.groups;
      o = {}, l.forEach((c) => {
        o[c.group] = o[c.group] || {}, o[c.group][c.binding] = c.name, h[c.name] = c;
      });
    } else if (n) {
      s = {}, o = {}, e && e.structsAndGroups.groups.forEach((u) => {
        o[u.group] = o[u.group] || {}, o[u.group][u.binding] = u.name, h[u.name] = u;
      });
      let l = 0;
      for (const c in n)
        h[c] || (s[99] || (s[99] = new Hr(), this._ownedBindGroups.push(s[99])), h[c] = { group: 99, binding: l, name: c }, o[99] = o[99] || {}, o[99][l] = c, l++);
      for (const c in n) {
        const u = c;
        let f = n[c];
        !f.source && !f._resourceType && (f = new tc(f));
        const d = h[u];
        d && (s[d.group] || (s[d.group] = new Hr(), this._ownedBindGroups.push(s[d.group])), s[d.group].setResource(f, d.binding));
      }
    }
    this.groups = s, this._uniformBindMap = o, this.resources = this._buildResourceAccessor(s, h);
  }
  /**
   * Sometimes a resource group will be provided later (for example global uniforms)
   * In such cases, this method can be used to let the shader know about the group.
   * @param name - the name of the resource group
   * @param groupIndex - the index of the group (should match the webGPU shader group location)
   * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
   */
  addResource(t, e, i) {
    var s, n;
    (s = this._uniformBindMap)[e] || (s[e] = {}), (n = this._uniformBindMap[e])[i] || (n[i] = t), this.groups[e] || (this.groups[e] = new Hr(), this._ownedBindGroups.push(this.groups[e]));
  }
  _buildResourceAccessor(t, e) {
    const i = {};
    for (const s in e) {
      const n = e[s];
      Object.defineProperty(i, n.name, {
        get() {
          return t[n.group].getResource(n.binding);
        },
        set(a) {
          t[n.group].setResource(a, n.binding);
        }
      });
    }
    return i;
  }
  /**
   * Use to destroy the shader when its not longer needed.
   * It will destroy the resources and remove listeners.
   * @param destroyPrograms - if the programs should be destroyed as well.
   * Make sure its not being used by other shaders!
   */
  destroy(t = !1) {
    this._destroyed || (this._destroyed = !0, this.emit("destroy", this), t && (this.gpuProgram?.destroy(), this.glProgram?.destroy()), this.gpuProgram = null, this.glProgram = null, this.removeAllListeners(), this._uniformBindMap = null, this._ownedBindGroups.forEach((e) => {
      e.destroy();
    }), this._ownedBindGroups = null, this.resources = null, this.groups = null);
  }
  static from(t) {
    const { gpu: e, gl: i, ...s } = t;
    let n, a;
    return e && (n = Bi.from(e)), i && (a = ps.from(i)), new gs({
      gpuProgram: n,
      glProgram: a,
      ...s
    });
  }
}
const rp = {
  normal: 0,
  add: 1,
  multiply: 2,
  screen: 3,
  overlay: 4,
  erase: 5,
  "normal-npm": 6,
  "add-npm": 7,
  "screen-npm": 8,
  min: 9,
  max: 10
}, js = 0, Xs = 1, Hs = 2, qs = 3, Ks = 4, Zs = 5, Ln = class ec {
  constructor() {
    this.data = 0, this.blendMode = "normal", this.polygonOffset = 0, this.blend = !0, this.depthMask = !0;
  }
  /**
   * Activates blending of the computed fragment color values.
   * @default true
   */
  get blend() {
    return !!(this.data & 1 << js);
  }
  set blend(t) {
    !!(this.data & 1 << js) !== t && (this.data ^= 1 << js);
  }
  /**
   * Activates adding an offset to depth values of polygon's fragments
   * @default false
   */
  get offsets() {
    return !!(this.data & 1 << Xs);
  }
  set offsets(t) {
    !!(this.data & 1 << Xs) !== t && (this.data ^= 1 << Xs);
  }
  /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
  set cullMode(t) {
    if (t === "none") {
      this.culling = !1;
      return;
    }
    this.culling = !0, this.clockwiseFrontFace = t === "front";
  }
  get cullMode() {
    return this.culling ? this.clockwiseFrontFace ? "front" : "back" : "none";
  }
  /**
   * Activates culling of polygons.
   * @default false
   */
  get culling() {
    return !!(this.data & 1 << Hs);
  }
  set culling(t) {
    !!(this.data & 1 << Hs) !== t && (this.data ^= 1 << Hs);
  }
  /**
   * Activates depth comparisons and updates to the depth buffer.
   * @default false
   */
  get depthTest() {
    return !!(this.data & 1 << qs);
  }
  set depthTest(t) {
    !!(this.data & 1 << qs) !== t && (this.data ^= 1 << qs);
  }
  /**
   * Enables or disables writing to the depth buffer.
   * @default true
   */
  get depthMask() {
    return !!(this.data & 1 << Zs);
  }
  set depthMask(t) {
    !!(this.data & 1 << Zs) !== t && (this.data ^= 1 << Zs);
  }
  /**
   * Specifies whether or not front or back-facing polygons can be culled.
   * @default false
   */
  get clockwiseFrontFace() {
    return !!(this.data & 1 << Ks);
  }
  set clockwiseFrontFace(t) {
    !!(this.data & 1 << Ks) !== t && (this.data ^= 1 << Ks);
  }
  /**
   * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
   * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
   * @default 'normal'
   */
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(t) {
    this.blend = t !== "none", this._blendMode = t, this._blendModeId = rp[t] || 0;
  }
  /**
   * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
   * @default 0
   */
  get polygonOffset() {
    return this._polygonOffset;
  }
  set polygonOffset(t) {
    this.offsets = !!t, this._polygonOffset = t;
  }
  toString() {
    return `[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`;
  }
  /**
   * A quickly getting an instance of a State that is configured for 2d rendering.
   * @returns a new State with values set for 2d rendering
   */
  static for2d() {
    const t = new ec();
    return t.depthTest = !1, t.blend = !0, t;
  }
};
Ln.default2d = Ln.for2d();
let sp = Ln;
const ic = class Dn extends gs {
  /**
   * @param options - The optional parameters of this filter.
   */
  constructor(t) {
    t = { ...Dn.defaultOptions, ...t }, super(t), this.enabled = !0, this._state = sp.for2d(), this.blendMode = t.blendMode, this.padding = t.padding, typeof t.antialias == "boolean" ? this.antialias = t.antialias ? "on" : "off" : this.antialias = t.antialias, this.resolution = t.resolution, this.blendRequired = t.blendRequired, this.clipToViewport = t.clipToViewport, this.addResource("uTexture", 0, 1), t.blendRequired && this.addResource("uBackTexture", 0, 3);
  }
  /**
   * Applies the filter
   * @param filterManager - The renderer to retrieve the filter from
   * @param input - The input render target.
   * @param output - The target to output to.
   * @param clearMode - Should the output be cleared before rendering to it
   */
  apply(t, e, i, s) {
    t.applyFilter(this, e, i, s);
  }
  /**
   * Get the blend mode of the filter.
   * @default "normal"
   */
  get blendMode() {
    return this._state.blendMode;
  }
  /** Sets the blend mode of the filter. */
  set blendMode(t) {
    this._state.blendMode = t;
  }
  /**
   * A short hand function to create a filter based of a vertex and fragment shader src.
   * @param options
   * @returns A shiny new PixiJS filter!
   */
  static from(t) {
    const { gpu: e, gl: i, ...s } = t;
    let n, a;
    return e && (n = Bi.from(e)), i && (a = ps.from(i)), new Dn({
      gpuProgram: n,
      glProgram: a,
      ...s
    });
  }
};
ic.defaultOptions = {
  blendMode: "normal",
  resolution: 1,
  padding: 0,
  antialias: "off",
  blendRequired: !1,
  clipToViewport: !0
};
let rc = ic;
const zn = [];
At.handleByNamedList(D.Environment, zn);
async function np(r) {
  if (!r)
    for (let t = 0; t < zn.length; t++) {
      const e = zn[t];
      if (e.value.test()) {
        await e.value.load();
        return;
      }
    }
}
let ji;
function ap() {
  if (typeof ji == "boolean")
    return ji;
  try {
    ji = new Function("param1", "param2", "param3", "return param1[param2] === param3;")({ a: "b" }, "a", "b") === !0;
  } catch {
    ji = !1;
  }
  return ji;
}
function Po(r, t, e = 2) {
  const i = t && t.length, s = i ? t[0] * e : r.length;
  let n = sc(r, 0, s, e, !0);
  const a = [];
  if (!n || n.next === n.prev) return a;
  let o, h, l;
  if (i && (n = up(r, t, n, e)), r.length > 80 * e) {
    o = r[0], h = r[1];
    let c = o, u = h;
    for (let f = e; f < s; f += e) {
      const d = r[f], g = r[f + 1];
      d < o && (o = d), g < h && (h = g), d > c && (c = d), g > u && (u = g);
    }
    l = Math.max(c - o, u - h), l = l !== 0 ? 32767 / l : 0;
  }
  return yr(n, a, e, o, h, l, 0), a;
}
function sc(r, t, e, i, s) {
  let n;
  if (s === vp(r, t, e, i) > 0)
    for (let a = t; a < e; a += i) n = Mo(a / i | 0, r[a], r[a + 1], n);
  else
    for (let a = e - i; a >= t; a -= i) n = Mo(a / i | 0, r[a], r[a + 1], n);
  return n && Fi(n, n.next) && (br(n), n = n.next), n;
}
function hi(r, t) {
  if (!r) return r;
  t || (t = r);
  let e = r, i;
  do
    if (i = !1, !e.steiner && (Fi(e, e.next) || lt(e.prev, e, e.next) === 0)) {
      if (br(e), e = t = e.prev, e === e.next) break;
      i = !0;
    } else
      e = e.next;
  while (i || e !== t);
  return t;
}
function yr(r, t, e, i, s, n, a) {
  if (!r) return;
  !a && n && mp(r, i, s, n);
  let o = r;
  for (; r.prev !== r.next; ) {
    const h = r.prev, l = r.next;
    if (n ? hp(r, i, s, n) : op(r)) {
      t.push(h.i, r.i, l.i), br(r), r = l.next, o = l.next;
      continue;
    }
    if (r = l, r === o) {
      a ? a === 1 ? (r = lp(hi(r), t), yr(r, t, e, i, s, n, 2)) : a === 2 && cp(r, t, e, i, s, n) : yr(hi(r), t, e, i, s, n, 1);
      break;
    }
  }
}
function op(r) {
  const t = r.prev, e = r, i = r.next;
  if (lt(t, e, i) >= 0) return !1;
  const s = t.x, n = e.x, a = i.x, o = t.y, h = e.y, l = i.y, c = Math.min(s, n, a), u = Math.min(o, h, l), f = Math.max(s, n, a), d = Math.max(o, h, l);
  let g = i.next;
  for (; g !== t; ) {
    if (g.x >= c && g.x <= f && g.y >= u && g.y <= d && er(s, o, n, h, a, l, g.x, g.y) && lt(g.prev, g, g.next) >= 0) return !1;
    g = g.next;
  }
  return !0;
}
function hp(r, t, e, i) {
  const s = r.prev, n = r, a = r.next;
  if (lt(s, n, a) >= 0) return !1;
  const o = s.x, h = n.x, l = a.x, c = s.y, u = n.y, f = a.y, d = Math.min(o, h, l), g = Math.min(c, u, f), p = Math.max(o, h, l), m = Math.max(c, u, f), _ = Gn(d, g, t, e, i), y = Gn(p, m, t, e, i);
  let x = r.prevZ, b = r.nextZ;
  for (; x && x.z >= _ && b && b.z <= y; ) {
    if (x.x >= d && x.x <= p && x.y >= g && x.y <= m && x !== s && x !== a && er(o, c, h, u, l, f, x.x, x.y) && lt(x.prev, x, x.next) >= 0 || (x = x.prevZ, b.x >= d && b.x <= p && b.y >= g && b.y <= m && b !== s && b !== a && er(o, c, h, u, l, f, b.x, b.y) && lt(b.prev, b, b.next) >= 0)) return !1;
    b = b.nextZ;
  }
  for (; x && x.z >= _; ) {
    if (x.x >= d && x.x <= p && x.y >= g && x.y <= m && x !== s && x !== a && er(o, c, h, u, l, f, x.x, x.y) && lt(x.prev, x, x.next) >= 0) return !1;
    x = x.prevZ;
  }
  for (; b && b.z <= y; ) {
    if (b.x >= d && b.x <= p && b.y >= g && b.y <= m && b !== s && b !== a && er(o, c, h, u, l, f, b.x, b.y) && lt(b.prev, b, b.next) >= 0) return !1;
    b = b.nextZ;
  }
  return !0;
}
function lp(r, t) {
  let e = r;
  do {
    const i = e.prev, s = e.next.next;
    !Fi(i, s) && ac(i, e, e.next, s) && xr(i, s) && xr(s, i) && (t.push(i.i, e.i, s.i), br(e), br(e.next), e = r = s), e = e.next;
  } while (e !== r);
  return hi(e);
}
function cp(r, t, e, i, s, n) {
  let a = r;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && xp(a, o)) {
        let h = oc(a, o);
        a = hi(a, a.next), h = hi(h, h.next), yr(a, t, e, i, s, n, 0), yr(h, t, e, i, s, n, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== r);
}
function up(r, t, e, i) {
  const s = [];
  for (let n = 0, a = t.length; n < a; n++) {
    const o = t[n] * i, h = n < a - 1 ? t[n + 1] * i : r.length, l = sc(r, o, h, i, !1);
    l === l.next && (l.steiner = !0), s.push(yp(l));
  }
  s.sort(dp);
  for (let n = 0; n < s.length; n++)
    e = fp(s[n], e);
  return e;
}
function dp(r, t) {
  let e = r.x - t.x;
  if (e === 0 && (e = r.y - t.y, e === 0)) {
    const i = (r.next.y - r.y) / (r.next.x - r.x), s = (t.next.y - t.y) / (t.next.x - t.x);
    e = i - s;
  }
  return e;
}
function fp(r, t) {
  const e = pp(r, t);
  if (!e)
    return t;
  const i = oc(e, r);
  return hi(i, i.next), hi(e, e.next);
}
function pp(r, t) {
  let e = t;
  const i = r.x, s = r.y;
  let n = -1 / 0, a;
  if (Fi(r, e)) return e;
  do {
    if (Fi(r, e.next)) return e.next;
    if (s <= e.y && s >= e.next.y && e.next.y !== e.y) {
      const u = e.x + (s - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
      if (u <= i && u > n && (n = u, a = e.x < e.next.x ? e : e.next, u === i))
        return a;
    }
    e = e.next;
  } while (e !== t);
  if (!a) return null;
  const o = a, h = a.x, l = a.y;
  let c = 1 / 0;
  e = a;
  do {
    if (i >= e.x && e.x >= h && i !== e.x && nc(s < l ? i : n, s, h, l, s < l ? n : i, s, e.x, e.y)) {
      const u = Math.abs(s - e.y) / (i - e.x);
      xr(e, r) && (u < c || u === c && (e.x > a.x || e.x === a.x && gp(a, e))) && (a = e, c = u);
    }
    e = e.next;
  } while (e !== o);
  return a;
}
function gp(r, t) {
  return lt(r.prev, r, t.prev) < 0 && lt(t.next, r, r.next) < 0;
}
function mp(r, t, e, i) {
  let s = r;
  do
    s.z === 0 && (s.z = Gn(s.x, s.y, t, e, i)), s.prevZ = s.prev, s.nextZ = s.next, s = s.next;
  while (s !== r);
  s.prevZ.nextZ = null, s.prevZ = null, _p(s);
}
function _p(r) {
  let t, e = 1;
  do {
    let i = r, s;
    r = null;
    let n = null;
    for (t = 0; i; ) {
      t++;
      let a = i, o = 0;
      for (let l = 0; l < e && (o++, a = a.nextZ, !!a); l++)
        ;
      let h = e;
      for (; o > 0 || h > 0 && a; )
        o !== 0 && (h === 0 || !a || i.z <= a.z) ? (s = i, i = i.nextZ, o--) : (s = a, a = a.nextZ, h--), n ? n.nextZ = s : r = s, s.prevZ = n, n = s;
      i = a;
    }
    n.nextZ = null, e *= 2;
  } while (t > 1);
  return r;
}
function Gn(r, t, e, i, s) {
  return r = (r - e) * s | 0, t = (t - i) * s | 0, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, r | t << 1;
}
function yp(r) {
  let t = r, e = r;
  do
    (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
  while (t !== r);
  return e;
}
function nc(r, t, e, i, s, n, a, o) {
  return (s - a) * (t - o) >= (r - a) * (n - o) && (r - a) * (i - o) >= (e - a) * (t - o) && (e - a) * (n - o) >= (s - a) * (i - o);
}
function er(r, t, e, i, s, n, a, o) {
  return !(r === a && t === o) && nc(r, t, e, i, s, n, a, o);
}
function xp(r, t) {
  return r.next.i !== t.i && r.prev.i !== t.i && !bp(r, t) && // doesn't intersect other edges
  (xr(r, t) && xr(t, r) && wp(r, t) && // locally visible
  (lt(r.prev, r, t.prev) || lt(r, t.prev, t)) || // does not create opposite-facing sectors
  Fi(r, t) && lt(r.prev, r, r.next) > 0 && lt(t.prev, t, t.next) > 0);
}
function lt(r, t, e) {
  return (t.y - r.y) * (e.x - t.x) - (t.x - r.x) * (e.y - t.y);
}
function Fi(r, t) {
  return r.x === t.x && r.y === t.y;
}
function ac(r, t, e, i) {
  const s = zr(lt(r, t, e)), n = zr(lt(r, t, i)), a = zr(lt(e, i, r)), o = zr(lt(e, i, t));
  return !!(s !== n && a !== o || s === 0 && Dr(r, e, t) || n === 0 && Dr(r, i, t) || a === 0 && Dr(e, r, i) || o === 0 && Dr(e, t, i));
}
function Dr(r, t, e) {
  return t.x <= Math.max(r.x, e.x) && t.x >= Math.min(r.x, e.x) && t.y <= Math.max(r.y, e.y) && t.y >= Math.min(r.y, e.y);
}
function zr(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}
function bp(r, t) {
  let e = r;
  do {
    if (e.i !== r.i && e.next.i !== r.i && e.i !== t.i && e.next.i !== t.i && ac(e, e.next, r, t)) return !0;
    e = e.next;
  } while (e !== r);
  return !1;
}
function xr(r, t) {
  return lt(r.prev, r, r.next) < 0 ? lt(r, t, r.next) >= 0 && lt(r, r.prev, t) >= 0 : lt(r, t, r.prev) < 0 || lt(r, r.next, t) < 0;
}
function wp(r, t) {
  let e = r, i = !1;
  const s = (r.x + t.x) / 2, n = (r.y + t.y) / 2;
  do
    e.y > n != e.next.y > n && e.next.y !== e.y && s < (e.next.x - e.x) * (n - e.y) / (e.next.y - e.y) + e.x && (i = !i), e = e.next;
  while (e !== r);
  return i;
}
function oc(r, t) {
  const e = Un(r.i, r.x, r.y), i = Un(t.i, t.x, t.y), s = r.next, n = t.prev;
  return r.next = t, t.prev = r, e.next = s, s.prev = e, i.next = e, e.prev = i, n.next = i, i.prev = n, i;
}
function Mo(r, t, e, i) {
  const s = Un(r, t, e);
  return i ? (s.next = i.next, s.prev = i, i.next.prev = s, i.next = s) : (s.prev = s, s.next = s), s;
}
function br(r) {
  r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
}
function Un(r, t, e) {
  return {
    i: r,
    // vertex index in coordinates array
    x: t,
    y: e,
    // vertex coordinates
    prev: null,
    // previous and next vertex nodes in a polygon ring
    next: null,
    z: 0,
    // z-order curve value
    prevZ: null,
    // previous and next nodes in z-order
    nextZ: null,
    steiner: !1
    // indicates whether this is a steiner point
  };
}
function vp(r, t, e, i) {
  let s = 0;
  for (let n = t, a = e - i; n < e; n += i)
    s += (r[a] - r[n]) * (r[n + 1] + r[a + 1]), a = n;
  return s;
}
const Sp = Po.default || Po;
var hc = /* @__PURE__ */ ((r) => (r[r.NONE = 0] = "NONE", r[r.COLOR = 16384] = "COLOR", r[r.STENCIL = 1024] = "STENCIL", r[r.DEPTH = 256] = "DEPTH", r[r.COLOR_DEPTH = 16640] = "COLOR_DEPTH", r[r.COLOR_STENCIL = 17408] = "COLOR_STENCIL", r[r.DEPTH_STENCIL = 1280] = "DEPTH_STENCIL", r[r.ALL = 17664] = "ALL", r))(hc || {});
class Ap {
  /**
   * @param name - The function name that will be executed on the listeners added to this Runner.
   */
  constructor(t) {
    this.items = [], this._name = t;
  }
  /* jsdoc/check-param-names */
  /**
   * Dispatch/Broadcast Runner to all listeners added to the queue.
   * @param {...any} params - (optional) parameters to pass to each listener
   */
  /* jsdoc/check-param-names */
  emit(t, e, i, s, n, a, o, h) {
    const { name: l, items: c } = this;
    for (let u = 0, f = c.length; u < f; u++)
      c[u][l](t, e, i, s, n, a, o, h);
    return this;
  }
  /**
   * Add a listener to the Runner
   *
   * Runners do not need to have scope or functions passed to them.
   * All that is required is to pass the listening object and ensure that it has contains a function that has the same name
   * as the name provided to the Runner when it was created.
   *
   * Eg A listener passed to this Runner will require a 'complete' function.
   *
   * ```ts
   * import { Runner } from 'pixi.js';
   *
   * const complete = new Runner('complete');
   * ```
   *
   * The scope used will be the object itself.
   * @param {any} item - The object that will be listening.
   */
  add(t) {
    return t[this._name] && (this.remove(t), this.items.push(t)), this;
  }
  /**
   * Remove a single listener from the dispatch queue.
   * @param {any} item - The listener that you would like to remove.
   */
  remove(t) {
    const e = this.items.indexOf(t);
    return e !== -1 && this.items.splice(e, 1), this;
  }
  /**
   * Check to see if the listener is already in the Runner
   * @param {any} item - The listener that you would like to check.
   */
  contains(t) {
    return this.items.indexOf(t) !== -1;
  }
  /** Remove all listeners from the Runner */
  removeAll() {
    return this.items.length = 0, this;
  }
  /** Remove all references, don't use after this. */
  destroy() {
    this.removeAll(), this.items = null, this._name = null;
  }
  /**
   * `true` if there are no this Runner contains no listeners
   * @readonly
   */
  get empty() {
    return this.items.length === 0;
  }
  /**
   * The name of the runner.
   * @readonly
   */
  get name() {
    return this._name;
  }
}
const Tp = [
  "init",
  "destroy",
  "contextChange",
  "resolutionChange",
  "resetState",
  "renderEnd",
  "renderStart",
  "render",
  "update",
  "postrender",
  "prerender"
], lc = class cc extends oe {
  /**
   * Set up a system with a collection of SystemClasses and runners.
   * Systems are attached dynamically to this class when added.
   * @param config - the config for the system manager
   */
  constructor(t) {
    super(), this.tick = 0, this.uid = ft("renderer"), this.runners = /* @__PURE__ */ Object.create(null), this.renderPipes = /* @__PURE__ */ Object.create(null), this._initOptions = {}, this._systemsHash = /* @__PURE__ */ Object.create(null), this.type = t.type, this.name = t.name, this.config = t;
    const e = [...Tp, ...this.config.runners ?? []];
    this._addRunners(...e), this._unsafeEvalCheck();
  }
  /**
   * Initialize the renderer.
   * @param options - The options to use to create the renderer.
   */
  async init(t = {}) {
    const e = t.skipExtensionImports === !0 ? !0 : t.manageImports === !1;
    await np(e), this._addSystems(this.config.systems), this._addPipes(this.config.renderPipes, this.config.renderPipeAdaptors);
    for (const i in this._systemsHash)
      t = { ...this._systemsHash[i].constructor.defaultOptions, ...t };
    t = { ...cc.defaultOptions, ...t }, this._roundPixels = t.roundPixels ? 1 : 0;
    for (let i = 0; i < this.runners.init.items.length; i++)
      await this.runners.init.items[i].init(t);
    this._initOptions = t;
  }
  render(t, e) {
    this.tick++;
    let i = t;
    if (i instanceof ye && (i = { container: i }, e && (N(Z, "passing a second argument is deprecated, please use render options instead"), i.target = e.renderTexture)), i.target || (i.target = this.view.renderTarget), i.target === this.view.renderTarget && (this._lastObjectRendered = i.container, i.clearColor ?? (i.clearColor = this.background.colorRgba), i.clear ?? (i.clear = this.background.clearBeforeRender)), i.clearColor) {
      const s = Array.isArray(i.clearColor) && i.clearColor.length === 4;
      i.clearColor = s ? i.clearColor : ct.shared.setValue(i.clearColor).toArray();
    }
    i.transform || (i.container.updateLocalTransform(), i.transform = i.container.localTransform), i.container.visible && (i.container.enableRenderGroup(), this.runners.prerender.emit(i), this.runners.renderStart.emit(i), this.runners.render.emit(i), this.runners.renderEnd.emit(i), this.runners.postrender.emit(i));
  }
  /**
   * Resizes the WebGL view to the specified width and height.
   * @param desiredScreenWidth - The desired width of the screen.
   * @param desiredScreenHeight - The desired height of the screen.
   * @param resolution - The resolution / device pixel ratio of the renderer.
   */
  resize(t, e, i) {
    const s = this.view.resolution;
    this.view.resize(t, e, i), this.emit("resize", this.view.screen.width, this.view.screen.height, this.view.resolution), i !== void 0 && i !== s && this.runners.resolutionChange.emit(i);
  }
  /**
   * Clears the render target.
   * @param options - The options to use when clearing the render target.
   * @param options.target - The render target to clear.
   * @param options.clearColor - The color to clear with.
   * @param options.clear - The clear mode to use.
   * @advanced
   */
  clear(t = {}) {
    const e = this;
    t.target || (t.target = e.renderTarget.renderTarget), t.clearColor || (t.clearColor = this.background.colorRgba), t.clear ?? (t.clear = hc.ALL);
    const { clear: i, clearColor: s, target: n } = t;
    ct.shared.setValue(s ?? this.background.colorRgba), e.renderTarget.clear(n, i, ct.shared.toArray());
  }
  /** The resolution / device pixel ratio of the renderer. */
  get resolution() {
    return this.view.resolution;
  }
  set resolution(t) {
    this.view.resolution = t, this.runners.resolutionChange.emit(t);
  }
  /**
   * Same as view.width, actual number of pixels in the canvas by horizontal.
   * @type {number}
   * @readonly
   * @default 800
   */
  get width() {
    return this.view.texture.frame.width;
  }
  /**
   * Same as view.height, actual number of pixels in the canvas by vertical.
   * @default 600
   */
  get height() {
    return this.view.texture.frame.height;
  }
  // NOTE: this was `view` in v7
  /**
   * The canvas element that everything is drawn to.
   * @type {environment.ICanvas}
   */
  get canvas() {
    return this.view.canvas;
  }
  /**
   * the last object rendered by the renderer. Useful for other plugins like interaction managers
   * @readonly
   */
  get lastObjectRendered() {
    return this._lastObjectRendered;
  }
  /**
   * Flag if we are rendering to the screen vs renderTexture
   * @readonly
   * @default true
   */
  get renderingToScreen() {
    return this.renderTarget.renderingToScreen;
  }
  /**
   * Measurements of the screen. (0, 0, screenWidth, screenHeight).
   *
   * Its safe to use as filterArea or hitArea for the whole stage.
   */
  get screen() {
    return this.view.screen;
  }
  /**
   * Create a bunch of runners based of a collection of ids
   * @param runnerIds - the runner ids to add
   */
  _addRunners(...t) {
    t.forEach((e) => {
      this.runners[e] = new Ap(e);
    });
  }
  _addSystems(t) {
    let e;
    for (e in t) {
      const i = t[e];
      this._addSystem(i.value, i.name);
    }
  }
  /**
   * Add a new system to the renderer.
   * @param ClassRef - Class reference
   * @param name - Property name for system, if not specified
   *        will use a static `name` property on the class itself. This
   *        name will be assigned as s property on the Renderer so make
   *        sure it doesn't collide with properties on Renderer.
   * @returns Return instance of renderer
   */
  _addSystem(t, e) {
    const i = new t(this);
    if (this[e])
      throw new Error(`Whoops! The name "${e}" is already in use`);
    this[e] = i, this._systemsHash[e] = i;
    for (const s in this.runners)
      this.runners[s].add(i);
    return this;
  }
  _addPipes(t, e) {
    const i = e.reduce((s, n) => (s[n.name] = n.value, s), {});
    t.forEach((s) => {
      const n = s.value, a = s.name, o = i[a];
      this.renderPipes[a] = new n(
        this,
        o ? new o() : null
      ), this.runners.destroy.add(this.renderPipes[a]);
    });
  }
  destroy(t = !1) {
    this.runners.destroy.items.reverse(), this.runners.destroy.emit(t), (t === !0 || typeof t == "object" && t.releaseGlobalResources) && Tr.release(), Object.values(this.runners).forEach((e) => {
      e.destroy();
    }), this._systemsHash = null, this.renderPipes = null;
  }
  /**
   * Generate a texture from a container.
   * @param options - options or container target to use when generating the texture
   * @returns a texture
   */
  generateTexture(t) {
    return this.textureGenerator.generateTexture(t);
  }
  /**
   * Whether the renderer will round coordinates to whole pixels when rendering.
   * Can be overridden on a per scene item basis.
   */
  get roundPixels() {
    return !!this._roundPixels;
  }
  /**
   * Overridable function by `pixi.js/unsafe-eval` to silence
   * throwing an error if platform doesn't support unsafe-evals.
   * @private
   * @ignore
   */
  _unsafeEvalCheck() {
    if (!ap())
      throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.");
  }
  /**
   * Resets the rendering state of the renderer.
   * This is useful when you want to use the WebGL context directly and need to ensure PixiJS's internal state
   * stays synchronized. When modifying the WebGL context state externally, calling this method before the next Pixi
   * render will reset all internal caches and ensure it executes correctly.
   *
   * This is particularly useful when combining PixiJS with other rendering engines like Three.js:
   * ```js
   * // Reset Three.js state
   * threeRenderer.resetState();
   *
   * // Render a Three.js scene
   * threeRenderer.render(threeScene, threeCamera);
   *
   * // Reset PixiJS state since Three.js modified the WebGL context
   * pixiRenderer.resetState();
   *
   * // Now render Pixi content
   * pixiRenderer.render(pixiScene);
   * ```
   * @advanced
   */
  resetState() {
    this.runners.resetState.emit();
  }
};
lc.defaultOptions = {
  /**
   * Default resolution / device pixel ratio of the renderer.
   * @default 1
   */
  resolution: 1,
  /**
   * Should the `failIfMajorPerformanceCaveat` flag be enabled as a context option used in the `isWebGLSupported`
   * function. If set to true, a WebGL renderer can fail to be created if the browser thinks there could be
   * performance issues when using WebGL.
   *
   * In PixiJS v6 this has changed from true to false by default, to allow WebGL to work in as many
   * scenarios as possible. However, some users may have a poor experience, for example, if a user has a gpu or
   * driver version blacklisted by the
   * browser.
   *
   * If your application requires high performance rendering, you may wish to set this to false.
   * We recommend one of two options if you decide to set this flag to false:
   *
   * 1: Use the Canvas renderer as a fallback in case high performance WebGL is
   *    not supported.
   *
   * 2: Call `isWebGLSupported` (which if found in the utils package) in your code before attempting to create a
   *    PixiJS renderer, and show an error message to the user if the function returns false, explaining that their
   *    device & browser combination does not support high performance WebGL.
   *    This is a much better strategy than trying to create a PixiJS renderer and finding it then fails.
   * @default false
   */
  failIfMajorPerformanceCaveat: !1,
  /**
   * Should round pixels be forced when rendering?
   * @default false
   */
  roundPixels: !1
};
let uc = lc, Gr;
function Cp(r) {
  return Gr !== void 0 || (Gr = (() => {
    const t = {
      stencil: !0,
      failIfMajorPerformanceCaveat: r ?? uc.defaultOptions.failIfMajorPerformanceCaveat
    };
    try {
      if (!st.get().getWebGLRenderingContext())
        return !1;
      let i = st.get().createCanvas().getContext("webgl", t);
      const s = !!i?.getContextAttributes()?.stencil;
      if (i) {
        const n = i.getExtension("WEBGL_lose_context");
        n && n.loseContext();
      }
      return i = null, s;
    } catch {
      return !1;
    }
  })()), Gr;
}
let Ur;
async function Pp(r = {}) {
  return Ur !== void 0 || (Ur = await (async () => {
    const t = st.get().getNavigator().gpu;
    if (!t)
      return !1;
    try {
      return await (await t.requestAdapter(r)).requestDevice(), !0;
    } catch {
      return !1;
    }
  })()), Ur;
}
const ko = ["webgl", "webgpu", "canvas"];
async function Mp(r) {
  let t = [];
  r.preference ? (t.push(r.preference), ko.forEach((n) => {
    n !== r.preference && t.push(n);
  })) : t = ko.slice();
  let e, i = {};
  for (let n = 0; n < t.length; n++) {
    const a = t[n];
    if (a === "webgpu" && await Pp()) {
      const { WebGPURenderer: o } = await import("./WebGPURenderer-m-kyO8Av.js");
      e = o, i = { ...r, ...r.webgpu };
      break;
    } else if (a === "webgl" && Cp(
      r.failIfMajorPerformanceCaveat ?? uc.defaultOptions.failIfMajorPerformanceCaveat
    )) {
      const { WebGLRenderer: o } = await import("./WebGLRenderer-X2y9JNm3.js");
      e = o, i = { ...r, ...r.webgl };
      break;
    } else if (a === "canvas")
      throw i = { ...r }, new Error("CanvasRenderer is not yet implemented");
  }
  if (delete i.webgpu, delete i.webgl, !e)
    throw new Error("No available renderer for the current environment");
  const s = new e();
  return await s.init(i), s;
}
const dc = "8.15.0";
class fc {
  static init() {
    globalThis.__PIXI_APP_INIT__?.(this, dc);
  }
  static destroy() {
  }
}
fc.extension = D.Application;
class kp {
  constructor(t) {
    this._renderer = t;
  }
  init() {
    globalThis.__PIXI_RENDERER_INIT__?.(this._renderer, dc);
  }
  destroy() {
    this._renderer = null;
  }
}
kp.extension = {
  type: [
    D.WebGLSystem,
    D.WebGPUSystem
  ],
  name: "initHook",
  priority: -10
};
const pc = class Wn {
  constructor(...t) {
    this.stage = new ye(), t[0] !== void 0 && N(Z, "Application constructor options are deprecated, please use Application.init() instead.");
  }
  /**
   * Initializes the PixiJS application with the specified options.
   *
   * This method must be called after creating a new Application instance.
   * @param options - Configuration options for the application and renderer
   * @returns A promise that resolves when initialization is complete
   * @example
   * ```js
   * const app = new Application();
   *
   * // Initialize with custom options
   * await app.init({
   *     width: 800,
   *     height: 600,
   *     backgroundColor: 0x1099bb,
   *     preference: 'webgl', // or 'webgpu'
   * });
   * ```
   */
  async init(t) {
    t = { ...t }, this.stage || (this.stage = new ye()), this.renderer = await Mp(t), Wn._plugins.forEach((e) => {
      e.init.call(this, t);
    });
  }
  /**
   * Renders the current stage to the screen.
   *
   * When using the default setup with {@link TickerPlugin} (enabled by default), you typically don't need to call
   * this method directly as rendering is handled automatically.
   *
   * Only use this method if you've disabled the {@link TickerPlugin} or need custom
   * render timing control.
   * @example
   * ```js
   * // Example 1: Default setup (TickerPlugin handles rendering)
   * const app = new Application();
   * await app.init();
   * // No need to call render() - TickerPlugin handles it
   *
   * // Example 2: Custom rendering loop (if TickerPlugin is disabled)
   * const app = new Application();
   * await app.init({ autoStart: false }); // Disable automatic rendering
   *
   * function animate() {
   *     app.render();
   *     requestAnimationFrame(animate);
   * }
   * animate();
   * ```
   */
  render() {
    this.renderer.render({ container: this.stage });
  }
  /**
   * Reference to the renderer's canvas element. This is the HTML element
   * that displays your application's graphics.
   * @readonly
   * @type {HTMLCanvasElement}
   * @example
   * ```js
   * // Create a new application
   * const app = new Application();
   * // Initialize the application
   * await app.init({...});
   * // Add canvas to the page
   * document.body.appendChild(app.canvas);
   *
   * // Access the canvas directly
   * console.log(app.canvas); // HTMLCanvasElement
   * ```
   */
  get canvas() {
    return this.renderer.canvas;
  }
  /**
   * Reference to the renderer's canvas element.
   * @type {HTMLCanvasElement}
   * @deprecated since 8.0.0
   * @see {@link Application#canvas}
   */
  get view() {
    return N(Z, "Application.view is deprecated, please use Application.canvas instead."), this.renderer.canvas;
  }
  /**
   * Reference to the renderer's screen rectangle. This represents the visible area of your application.
   *
   * It's commonly used for:
   * - Setting filter areas for full-screen effects
   * - Defining hit areas for screen-wide interaction
   * - Determining the visible bounds of your application
   * @readonly
   * @example
   * ```js
   * // Use as filter area for a full-screen effect
   * const blurFilter = new BlurFilter();
   * sprite.filterArea = app.screen;
   *
   * // Use as hit area for screen-wide interaction
   * const screenSprite = new Sprite();
   * screenSprite.hitArea = app.screen;
   *
   * // Get screen dimensions
   * console.log(app.screen.width, app.screen.height);
   * ```
   * @see {@link Rectangle} For all available properties and methods
   */
  get screen() {
    return this.renderer.screen;
  }
  /**
   * Destroys the application and all of its resources.
   *
   * This method should be called when you want to completely
   * clean up the application and free all associated memory.
   * @param rendererDestroyOptions - Options for destroying the renderer:
   *  - `false` or `undefined`: Preserves the canvas element (default)
   *  - `true`: Removes the canvas element
   *  - `{ removeView: boolean }`: Object with removeView property to control canvas removal
   * @param options - Options for destroying the application:
   *  - `false` or `undefined`: Basic cleanup (default)
   *  - `true`: Complete cleanup including children
   *  - Detailed options object:
   *    - `children`: Remove children
   *    - `texture`: Destroy textures
   *    - `textureSource`: Destroy texture sources
   *    - `context`: Destroy WebGL context
   * @example
   * ```js
   * // Basic cleanup
   * app.destroy();
   *
   * // Remove canvas and do complete cleanup
   * app.destroy(true, true);
   *
   * // Remove canvas with explicit options
   * app.destroy({ removeView: true }, true);
   *
   * // Detailed cleanup with specific options
   * app.destroy(
   *     { removeView: true },
   *     {
   *         children: true,
   *         texture: true,
   *         textureSource: true,
   *         context: true
   *     }
   * );
   * ```
   * > [!WARNING] After calling destroy, the application instance should no longer be used.
   * > All properties will be null and further operations will throw errors.
   */
  destroy(t = !1, e = !1) {
    const i = Wn._plugins.slice(0);
    i.reverse(), i.forEach((s) => {
      s.destroy.call(this);
    }), this.stage.destroy(e), this.stage = null, this.renderer.destroy(t), this.renderer = null;
  }
};
pc._plugins = [];
let gc = pc;
At.handleByList(D.Application, gc._plugins);
At.add(fc);
class mc extends oe {
  constructor() {
    super(...arguments), this.chars = /* @__PURE__ */ Object.create(null), this.lineHeight = 0, this.fontFamily = "", this.fontMetrics = { fontSize: 0, ascent: 0, descent: 0 }, this.baseLineOffset = 0, this.distanceField = { type: "none", range: 0 }, this.pages = [], this.applyFillAsTint = !0, this.baseMeasurementFontSize = 100, this.baseRenderedFontSize = 100;
  }
  /**
   * The name of the font face.
   * @deprecated since 8.0.0 Use `fontFamily` instead.
   */
  get font() {
    return N(Z, "BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."), this.fontFamily;
  }
  /**
   * The map of base page textures (i.e., sheets of glyphs).
   * @deprecated since 8.0.0 Use `pages` instead.
   */
  get pageTextures() {
    return N(Z, "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."), this.pages;
  }
  /**
   * The size of the font face in pixels.
   * @deprecated since 8.0.0 Use `fontMetrics.fontSize` instead.
   */
  get size() {
    return N(Z, "BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."), this.fontMetrics.fontSize;
  }
  /**
   * The kind of distance field for this font or "none".
   * @deprecated since 8.0.0 Use `distanceField.type` instead.
   */
  get distanceFieldRange() {
    return N(Z, "BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."), this.distanceField.range;
  }
  /**
   * The range of the distance field in pixels.
   * @deprecated since 8.0.0 Use `distanceField.range` instead.
   */
  get distanceFieldType() {
    return N(Z, "BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."), this.distanceField.type;
  }
  destroy(t = !1) {
    this.emit("destroy", this), this.removeAllListeners();
    for (const e in this.chars)
      this.chars[e].texture?.destroy();
    this.chars = null, t && (this.pages.forEach((e) => e.texture.destroy(!0)), this.pages = null);
  }
}
/**
 * tiny-lru
 *
 * @copyright 2026 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 11.4.7
 */
class Ep {
  /**
   * Creates a new LRU cache instance.
   * Note: Constructor does not validate parameters. Use lru() factory function for parameter validation.
   *
   * @constructor
   * @param {number} [max=0] - Maximum number of items to store. 0 means unlimited.
   * @param {number} [ttl=0] - Time to live in milliseconds. 0 means no expiration.
   * @param {boolean} [resetTtl=false] - Whether to reset TTL when accessing existing items via get().
   * @example
   * const cache = new LRU(1000, 60000, true); // 1000 items, 1 minute TTL, reset on access
   * @see {@link lru} For parameter validation
   * @since 1.0.0
   */
  constructor(t = 0, e = 0, i = !1) {
    this.first = null, this.items = /* @__PURE__ */ Object.create(null), this.last = null, this.max = t, this.resetTtl = i, this.size = 0, this.ttl = e;
  }
  /**
   * Removes all items from the cache.
   *
   * @method clear
   * @memberof LRU
   * @returns {LRU} The LRU instance for method chaining.
   * @example
   * cache.clear();
   * console.log(cache.size); // 0
   * @since 1.0.0
   */
  clear() {
    return this.first = null, this.items = /* @__PURE__ */ Object.create(null), this.last = null, this.size = 0, this;
  }
  /**
   * Removes an item from the cache by key.
   *
   * @method delete
   * @memberof LRU
   * @param {string} key - The key of the item to delete.
   * @returns {LRU} The LRU instance for method chaining.
   * @example
   * cache.set('key1', 'value1');
   * cache.delete('key1');
   * console.log(cache.has('key1')); // false
   * @see {@link LRU#has}
   * @see {@link LRU#clear}
   * @since 1.0.0
   */
  delete(t) {
    if (this.has(t)) {
      const e = this.items[t];
      delete this.items[t], this.size--, e.prev !== null && (e.prev.next = e.next), e.next !== null && (e.next.prev = e.prev), this.first === e && (this.first = e.next), this.last === e && (this.last = e.prev);
    }
    return this;
  }
  /**
   * Returns an array of [key, value] pairs for the specified keys.
   * Order follows LRU order (least to most recently used).
   *
   * @method entries
   * @memberof LRU
   * @param {string[]} [keys=this.keys()] - Array of keys to get entries for. Defaults to all keys.
   * @returns {Array<Array<*>>} Array of [key, value] pairs in LRU order.
   * @example
   * cache.set('a', 1).set('b', 2);
   * console.log(cache.entries()); // [['a', 1], ['b', 2]]
   * console.log(cache.entries(['a'])); // [['a', 1]]
   * @see {@link LRU#keys}
   * @see {@link LRU#values}
   * @since 11.1.0
   */
  entries(t = this.keys()) {
    const e = new Array(t.length);
    for (let i = 0; i < t.length; i++) {
      const s = t[i];
      e[i] = [s, this.get(s)];
    }
    return e;
  }
  /**
   * Removes the least recently used item from the cache.
   *
   * @method evict
   * @memberof LRU
   * @param {boolean} [bypass=false] - Whether to force eviction even when cache is empty.
   * @returns {LRU} The LRU instance for method chaining.
   * @example
   * cache.set('old', 'value').set('new', 'value');
   * cache.evict(); // Removes 'old' item
   * @see {@link LRU#setWithEvicted}
   * @since 1.0.0
   */
  evict(t = !1) {
    if (t || this.size > 0) {
      const e = this.first;
      delete this.items[e.key], --this.size === 0 ? (this.first = null, this.last = null) : (this.first = e.next, this.first.prev = null);
    }
    return this;
  }
  /**
   * Returns the expiration timestamp for a given key.
   *
   * @method expiresAt
   * @memberof LRU
   * @param {string} key - The key to check expiration for.
   * @returns {number|undefined} The expiration timestamp in milliseconds, or undefined if key doesn't exist.
   * @example
   * const cache = new LRU(100, 5000); // 5 second TTL
   * cache.set('key1', 'value1');
   * console.log(cache.expiresAt('key1')); // timestamp 5 seconds from now
   * @see {@link LRU#get}
   * @see {@link LRU#has}
   * @since 1.0.0
   */
  expiresAt(t) {
    let e;
    return this.has(t) && (e = this.items[t].expiry), e;
  }
  /**
   * Retrieves a value from the cache by key. Updates the item's position to most recently used.
   *
   * @method get
   * @memberof LRU
   * @param {string} key - The key to retrieve.
   * @returns {*} The value associated with the key, or undefined if not found or expired.
   * @example
   * cache.set('key1', 'value1');
   * console.log(cache.get('key1')); // 'value1'
   * console.log(cache.get('nonexistent')); // undefined
   * @see {@link LRU#set}
   * @see {@link LRU#has}
   * @since 1.0.0
   */
  get(t) {
    const e = this.items[t];
    if (e !== void 0) {
      if (this.ttl > 0 && e.expiry <= Date.now()) {
        this.delete(t);
        return;
      }
      return this.moveToEnd(e), e.value;
    }
  }
  /**
   * Checks if a key exists in the cache.
   *
   * @method has
   * @memberof LRU
   * @param {string} key - The key to check for.
   * @returns {boolean} True if the key exists, false otherwise.
   * @example
   * cache.set('key1', 'value1');
   * console.log(cache.has('key1')); // true
   * console.log(cache.has('nonexistent')); // false
   * @see {@link LRU#get}
   * @see {@link LRU#delete}
   * @since 9.0.0
   */
  has(t) {
    return t in this.items;
  }
  /**
   * Efficiently moves an item to the end of the LRU list (most recently used position).
   * This is an internal optimization method that avoids the overhead of the full set() operation
   * when only LRU position needs to be updated.
   *
   * @method moveToEnd
   * @memberof LRU
   * @param {Object} item - The cache item with prev/next pointers to reposition.
   * @private
   * @since 11.3.5
   */
  moveToEnd(t) {
    this.last !== t && (t.prev !== null && (t.prev.next = t.next), t.next !== null && (t.next.prev = t.prev), this.first === t && (this.first = t.next), t.prev = this.last, t.next = null, this.last !== null && (this.last.next = t), this.last = t, this.first === null && (this.first = t));
  }
  /**
   * Returns an array of all keys in the cache, ordered from least to most recently used.
   *
   * @method keys
   * @memberof LRU
   * @returns {string[]} Array of keys in LRU order.
   * @example
   * cache.set('a', 1).set('b', 2);
   * cache.get('a'); // Move 'a' to most recent
   * console.log(cache.keys()); // ['b', 'a']
   * @see {@link LRU#values}
   * @see {@link LRU#entries}
   * @since 9.0.0
   */
  keys() {
    const t = new Array(this.size);
    let e = this.first, i = 0;
    for (; e !== null; )
      t[i++] = e.key, e = e.next;
    return t;
  }
  /**
   * Sets a value in the cache and returns any evicted item.
   *
   * @method setWithEvicted
   * @memberof LRU
   * @param {string} key - The key to set.
   * @param {*} value - The value to store.
   * @param {boolean} [resetTtl=this.resetTtl] - Whether to reset the TTL for this operation.
   * @returns {Object|null} The evicted item (if any) with shape {key, value, expiry, prev, next}, or null.
   * @example
   * const cache = new LRU(2);
   * cache.set('a', 1).set('b', 2);
   * const evicted = cache.setWithEvicted('c', 3); // evicted = {key: 'a', value: 1, ...}
   * @see {@link LRU#set}
   * @see {@link LRU#evict}
   * @since 11.3.0
   */
  setWithEvicted(t, e, i = this.resetTtl) {
    let s = null;
    if (this.has(t))
      this.set(t, e, !0, i);
    else {
      this.max > 0 && this.size === this.max && (s = { ...this.first }, this.evict(!0));
      let n = this.items[t] = {
        expiry: this.ttl > 0 ? Date.now() + this.ttl : this.ttl,
        key: t,
        prev: this.last,
        next: null,
        value: e
      };
      ++this.size === 1 ? this.first = n : this.last.next = n, this.last = n;
    }
    return s;
  }
  /**
   * Sets a value in the cache. Updates the item's position to most recently used.
   *
   * @method set
   * @memberof LRU
   * @param {string} key - The key to set.
   * @param {*} value - The value to store.
   * @param {boolean} [bypass=false] - Internal parameter for setWithEvicted method.
   * @param {boolean} [resetTtl=this.resetTtl] - Whether to reset the TTL for this operation.
   * @returns {LRU} The LRU instance for method chaining.
   * @example
   * cache.set('key1', 'value1')
   *      .set('key2', 'value2')
   *      .set('key3', 'value3');
   * @see {@link LRU#get}
   * @see {@link LRU#setWithEvicted}
   * @since 1.0.0
   */
  set(t, e, i = !1, s = this.resetTtl) {
    let n = this.items[t];
    return i || n !== void 0 ? (n.value = e, i === !1 && s && (n.expiry = this.ttl > 0 ? Date.now() + this.ttl : this.ttl), this.moveToEnd(n)) : (this.max > 0 && this.size === this.max && this.evict(!0), n = this.items[t] = {
      expiry: this.ttl > 0 ? Date.now() + this.ttl : this.ttl,
      key: t,
      prev: this.last,
      next: null,
      value: e
    }, ++this.size === 1 ? this.first = n : this.last.next = n, this.last = n), this;
  }
  /**
   * Returns an array of all values in the cache for the specified keys.
   * Order follows LRU order (least to most recently used).
   *
   * @method values
   * @memberof LRU
   * @param {string[]} [keys=this.keys()] - Array of keys to get values for. Defaults to all keys.
   * @returns {Array<*>} Array of values corresponding to the keys in LRU order.
   * @example
   * cache.set('a', 1).set('b', 2);
   * console.log(cache.values()); // [1, 2]
   * console.log(cache.values(['a'])); // [1]
   * @see {@link LRU#keys}
   * @see {@link LRU#entries}
   * @since 11.1.0
   */
  values(t = this.keys()) {
    const e = new Array(t.length);
    for (let i = 0; i < t.length; i++)
      e[i] = this.get(t[i]);
    return e;
  }
}
function _c(r = 1e3, t = 0, e = !1) {
  if (isNaN(r) || r < 0)
    throw new TypeError("Invalid max value");
  if (isNaN(t) || t < 0)
    throw new TypeError("Invalid ttl value");
  if (typeof e != "boolean")
    throw new TypeError("Invalid resetTtl value");
  return new Ep(r, t, e);
}
const Rp = [
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui"
];
function Nn(r) {
  const t = typeof r.fontSize == "number" ? `${r.fontSize}px` : r.fontSize;
  let e = r.fontFamily;
  Array.isArray(r.fontFamily) || (e = r.fontFamily.split(","));
  for (let i = e.length - 1; i >= 0; i--) {
    let s = e[i].trim();
    !/([\"\'])[^\'\"]+\1/.test(s) && !Rp.includes(s) && (s = `"${s}"`), e[i] = s;
  }
  return `${r.fontStyle} ${r.fontVariant} ${r.fontWeight} ${t} ${e.join(",")}`;
}
const Qs = {
  // TextMetrics requires getImageData readback for measuring fonts.
  willReadFrequently: !0
}, le = class O {
  /**
   * Checking that we can use modern canvas 2D API.
   *
   * Note: This is an unstable API, Chrome < 94 use `textLetterSpacing`, later versions use `letterSpacing`.
   * @see TextMetrics.experimentalLetterSpacing
   * @see https://developer.mozilla.org/en-US/docs/Web/API/ICanvasRenderingContext2D/letterSpacing
   * @see https://developer.chrome.com/origintrials/#/view_trial/3585991203293757441
   */
  static get experimentalLetterSpacingSupported() {
    let t = O._experimentalLetterSpacingSupported;
    if (t === void 0) {
      const e = st.get().getCanvasRenderingContext2D().prototype;
      t = O._experimentalLetterSpacingSupported = "letterSpacing" in e || "textLetterSpacing" in e;
    }
    return t;
  }
  /**
   * @param text - the text that was measured
   * @param style - the style that was measured
   * @param width - the measured width of the text
   * @param height - the measured height of the text
   * @param lines - an array of the lines of text broken by new lines and wrapping if specified in style
   * @param lineWidths - an array of the line widths for each line matched to `lines`
   * @param lineHeight - the measured line height for this style
   * @param maxLineWidth - the maximum line width for all measured lines
   * @param {FontMetrics} fontProperties - the font properties object from TextMetrics.measureFont
   */
  constructor(t, e, i, s, n, a, o, h, l) {
    this.text = t, this.style = e, this.width = i, this.height = s, this.lines = n, this.lineWidths = a, this.lineHeight = o, this.maxLineWidth = h, this.fontProperties = l;
  }
  /**
   * Measures the supplied string of text and returns a Rectangle.
   * @param text - The text to measure.
   * @param style - The text style to use for measuring
   * @param canvas - optional specification of the canvas to use for measuring.
   * @param wordWrap
   * @returns Measured width and height of the text.
   */
  static measureText(t = " ", e, i = O._canvas, s = e.wordWrap) {
    const n = `${t}-${e.styleKey}-wordWrap-${s}`;
    if (O._measurementCache.has(n))
      return O._measurementCache.get(n);
    const a = Nn(e), o = O.measureFont(a);
    o.fontSize === 0 && (o.fontSize = e.fontSize, o.ascent = e.fontSize);
    const h = O.__context;
    h.font = a;
    const c = (s ? O._wordWrap(t, e, i) : t).split(/(?:\r\n|\r|\n)/), u = new Array(c.length);
    let f = 0;
    for (let y = 0; y < c.length; y++) {
      const x = O._measureText(c[y], e.letterSpacing, h);
      u[y] = x, f = Math.max(f, x);
    }
    const d = e._stroke?.width || 0;
    let g = f + d;
    e.dropShadow && (g += e.dropShadow.distance);
    const p = e.lineHeight || o.fontSize;
    let m = Math.max(p, o.fontSize + d) + (c.length - 1) * (p + e.leading);
    e.dropShadow && (m += e.dropShadow.distance);
    const _ = new O(
      t,
      e,
      g,
      m,
      c,
      u,
      p + e.leading,
      f,
      o
    );
    return O._measurementCache.set(n, _), _;
  }
  static _measureText(t, e, i) {
    let s = !1;
    O.experimentalLetterSpacingSupported && (O.experimentalLetterSpacing ? (i.letterSpacing = `${e}px`, i.textLetterSpacing = `${e}px`, s = !0) : (i.letterSpacing = "0px", i.textLetterSpacing = "0px"));
    const n = i.measureText(t);
    let a = n.width;
    const o = -n.actualBoundingBoxLeft;
    let l = n.actualBoundingBoxRight - o;
    if (a > 0)
      if (s)
        a -= e, l -= e;
      else {
        const c = (O.graphemeSegmenter(t).length - 1) * e;
        a += c, l += c;
      }
    return Math.max(a, l);
  }
  /**
   * Applies newlines to a string to have it optimally fit into the horizontal
   * bounds set by the Text object's wordWrapWidth property.
   * @param text - String to apply word wrapping to
   * @param style - the style to use when wrapping
   * @param canvas - optional specification of the canvas to use for measuring.
   * @returns New string with new lines applied where required
   */
  static _wordWrap(t, e, i = O._canvas) {
    const s = i.getContext("2d", Qs);
    let n = 0, a = "", o = "";
    const h = /* @__PURE__ */ Object.create(null), { letterSpacing: l, whiteSpace: c } = e, u = O._collapseSpaces(c), f = O._collapseNewlines(c);
    let d = !u;
    const g = e.wordWrapWidth + l, p = O._tokenize(t);
    for (let m = 0; m < p.length; m++) {
      let _ = p[m];
      if (O._isNewline(_)) {
        if (!f) {
          o += O._addLine(a), d = !u, a = "", n = 0;
          continue;
        }
        _ = " ";
      }
      if (u) {
        const x = O.isBreakingSpace(_), b = O.isBreakingSpace(a[a.length - 1]);
        if (x && b)
          continue;
      }
      const y = O._getFromCache(_, l, h, s);
      if (y > g)
        if (a !== "" && (o += O._addLine(a), a = "", n = 0), O.canBreakWords(_, e.breakWords)) {
          const x = O.wordWrapSplit(_);
          for (let b = 0; b < x.length; b++) {
            let v = x[b], A = v, S = 1;
            for (; x[b + S]; ) {
              const T = x[b + S];
              if (!O.canBreakChars(A, T, _, b, e.breakWords))
                v += T;
              else
                break;
              A = T, S++;
            }
            b += S - 1;
            const C = O._getFromCache(v, l, h, s);
            C + n > g && (o += O._addLine(a), d = !1, a = "", n = 0), a += v, n += C;
          }
        } else {
          a.length > 0 && (o += O._addLine(a), a = "", n = 0);
          const x = m === p.length - 1;
          o += O._addLine(_, !x), d = !1, a = "", n = 0;
        }
      else
        y + n > g && (d = !1, o += O._addLine(a), a = "", n = 0), (a.length > 0 || !O.isBreakingSpace(_) || d) && (a += _, n += y);
    }
    return o += O._addLine(a, !1), o;
  }
  /**
   * Convenience function for logging each line added during the wordWrap method.
   * @param line    - The line of text to add
   * @param newLine - Add new line character to end
   * @returns A formatted line
   */
  static _addLine(t, e = !0) {
    return t = O._trimRight(t), t = e ? `${t}
` : t, t;
  }
  /**
   * Gets & sets the widths of calculated characters in a cache object
   * @param key            - The key
   * @param letterSpacing  - The letter spacing
   * @param cache          - The cache
   * @param context        - The canvas context
   * @returns The from cache.
   */
  static _getFromCache(t, e, i, s) {
    let n = i[t];
    return typeof n != "number" && (n = O._measureText(t, e, s) + e, i[t] = n), n;
  }
  /**
   * Determines whether we should collapse breaking spaces.
   * @param whiteSpace - The TextStyle property whiteSpace
   * @returns Should collapse
   */
  static _collapseSpaces(t) {
    return t === "normal" || t === "pre-line";
  }
  /**
   * Determines whether we should collapse newLine chars.
   * @param whiteSpace - The white space
   * @returns should collapse
   */
  static _collapseNewlines(t) {
    return t === "normal";
  }
  /**
   * Trims breaking whitespaces from string.
   * @param text - The text
   * @returns Trimmed string
   */
  static _trimRight(t) {
    if (typeof t != "string")
      return "";
    for (let e = t.length - 1; e >= 0; e--) {
      const i = t[e];
      if (!O.isBreakingSpace(i))
        break;
      t = t.slice(0, -1);
    }
    return t;
  }
  /**
   * Determines if char is a newline.
   * @param char - The character
   * @returns True if newline, False otherwise.
   */
  static _isNewline(t) {
    return typeof t != "string" ? !1 : O._newlines.includes(t.charCodeAt(0));
  }
  /**
   * Determines if char is a breaking whitespace.
   *
   * It allows one to determine whether char should be a breaking whitespace
   * For example certain characters in CJK langs or numbers.
   * It must return a boolean.
   * @param char - The character
   * @param [_nextChar] - The next character
   * @returns True if whitespace, False otherwise.
   */
  static isBreakingSpace(t, e) {
    return typeof t != "string" ? !1 : O._breakingSpaces.includes(t.charCodeAt(0));
  }
  /**
   * Splits a string into words, breaking-spaces and newLine characters
   * @param text - The text
   * @returns A tokenized array
   */
  static _tokenize(t) {
    const e = [];
    let i = "";
    if (typeof t != "string")
      return e;
    for (let s = 0; s < t.length; s++) {
      const n = t[s], a = t[s + 1];
      if (O.isBreakingSpace(n, a) || O._isNewline(n)) {
        i !== "" && (e.push(i), i = ""), n === "\r" && a === `
` ? (e.push(`\r
`), s++) : e.push(n);
        continue;
      }
      i += n;
    }
    return i !== "" && e.push(i), e;
  }
  /**
   * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
   *
   * It allows one to customise which words should break
   * Examples are if the token is CJK or numbers.
   * It must return a boolean.
   * @param _token - The token
   * @param breakWords - The style attr break words
   * @returns Whether to break word or not
   */
  static canBreakWords(t, e) {
    return e;
  }
  /**
   * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
   *
   * It allows one to determine whether a pair of characters
   * should be broken by newlines
   * For example certain characters in CJK langs or numbers.
   * It must return a boolean.
   * @param _char - The character
   * @param _nextChar - The next character
   * @param _token - The token/word the characters are from
   * @param _index - The index in the token of the char
   * @param _breakWords - The style attr break words
   * @returns whether to break word or not
   */
  static canBreakChars(t, e, i, s, n) {
    return !0;
  }
  /**
   * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
   *
   * It is called when a token (usually a word) has to be split into separate pieces
   * in order to determine the point to break a word.
   * It must return an array of characters.
   * @param token - The token to split
   * @returns The characters of the token
   * @see CanvasTextMetrics.graphemeSegmenter
   */
  static wordWrapSplit(t) {
    return O.graphemeSegmenter(t);
  }
  /**
   * Calculates the ascent, descent and fontSize of a given font-style
   * @param font - String representing the style of the font
   * @returns Font properties object
   */
  static measureFont(t) {
    if (O._fonts[t])
      return O._fonts[t];
    const e = O._context;
    e.font = t;
    const i = e.measureText(O.METRICS_STRING + O.BASELINE_SYMBOL), s = {
      ascent: i.actualBoundingBoxAscent,
      descent: i.actualBoundingBoxDescent,
      fontSize: i.actualBoundingBoxAscent + i.actualBoundingBoxDescent
    };
    return O._fonts[t] = s, s;
  }
  /**
   * Clear font metrics in metrics cache.
   * @param {string} [font] - font name. If font name not set then clear cache for all fonts.
   */
  static clearMetrics(t = "") {
    t ? delete O._fonts[t] : O._fonts = {};
  }
  /**
   * Cached canvas element for measuring text
   * TODO: this should be private, but isn't because of backward compat, will fix later.
   * @ignore
   */
  static get _canvas() {
    if (!O.__canvas) {
      let t;
      try {
        const e = new OffscreenCanvas(0, 0);
        if (e.getContext("2d", Qs)?.measureText)
          return O.__canvas = e, e;
        t = st.get().createCanvas();
      } catch {
        t = st.get().createCanvas();
      }
      t.width = t.height = 10, O.__canvas = t;
    }
    return O.__canvas;
  }
  /**
   * TODO: this should be private, but isn't because of backward compat, will fix later.
   * @ignore
   */
  static get _context() {
    return O.__context || (O.__context = O._canvas.getContext("2d", Qs)), O.__context;
  }
};
le.METRICS_STRING = "|ÉqÅ";
le.BASELINE_SYMBOL = "M";
le.BASELINE_MULTIPLIER = 1.4;
le.HEIGHT_MULTIPLIER = 2;
le.graphemeSegmenter = (() => {
  if (typeof Intl?.Segmenter == "function") {
    const r = new Intl.Segmenter();
    return (t) => {
      const e = r.segment(t), i = [];
      let s = 0;
      for (const n of e)
        i[s++] = n.segment;
      return i;
    };
  }
  return (r) => [...r];
})();
le.experimentalLetterSpacing = !1;
le._fonts = {};
le._newlines = [
  10,
  // line feed
  13
  // carriage return
];
le._breakingSpaces = [
  9,
  // character tabulation
  32,
  // space
  8192,
  // en quad
  8193,
  // em quad
  8194,
  // en space
  8195,
  // em space
  8196,
  // three-per-em space
  8197,
  // four-per-em space
  8198,
  // six-per-em space
  8200,
  // punctuation space
  8201,
  // thin space
  8202,
  // hair space
  8287,
  // medium mathematical space
  12288
  // ideographic space
];
le._measurementCache = _c(1e3);
let qr = le;
const Eo = [{ offset: 0, color: "white" }, { offset: 1, color: "black" }], _a = class Vn {
  constructor(...t) {
    this.uid = ft("fillGradient"), this._tick = 0, this.type = "linear", this.colorStops = [];
    let e = Fp(t);
    e = { ...e.type === "radial" ? Vn.defaultRadialOptions : Vn.defaultLinearOptions, ...xl(e) }, this._textureSize = e.textureSize, this._wrapMode = e.wrapMode, e.type === "radial" ? (this.center = e.center, this.outerCenter = e.outerCenter ?? this.center, this.innerRadius = e.innerRadius, this.outerRadius = e.outerRadius, this.scale = e.scale, this.rotation = e.rotation) : (this.start = e.start, this.end = e.end), this.textureSpace = e.textureSpace, this.type = e.type, e.colorStops.forEach((s) => {
      this.addColorStop(s.offset, s.color);
    });
  }
  /**
   * Adds a color stop to the gradient
   * @param offset - Position of the stop (0-1)
   * @param color - Color of the stop
   * @returns This gradient instance for chaining
   */
  addColorStop(t, e) {
    return this.colorStops.push({ offset: t, color: ct.shared.setValue(e).toHexa() }), this;
  }
  /**
   * Builds the internal texture and transform for the gradient.
   * Called automatically when the gradient is first used.
   * @internal
   */
  buildLinearGradient() {
    if (this.texture)
      return;
    let { x: t, y: e } = this.start, { x: i, y: s } = this.end, n = i - t, a = s - e;
    const o = n < 0 || a < 0;
    if (this._wrapMode === "clamp-to-edge") {
      if (n < 0) {
        const m = t;
        t = i, i = m, n *= -1;
      }
      if (a < 0) {
        const m = e;
        e = s, s = m, a *= -1;
      }
    }
    const h = this.colorStops.length ? this.colorStops : Eo, l = this._textureSize, { canvas: c, context: u } = Fo(l, 1), f = o ? u.createLinearGradient(this._textureSize, 0, 0, 0) : u.createLinearGradient(0, 0, this._textureSize, 0);
    Ro(f, h), u.fillStyle = f, u.fillRect(0, 0, l, 1), this.texture = new X({
      source: new oi({
        resource: c,
        addressMode: this._wrapMode
      })
    });
    const d = Math.sqrt(n * n + a * a), g = Math.atan2(a, n), p = new Y();
    p.scale(d / l, 1), p.rotate(g), p.translate(t, e), this.textureSpace === "local" && p.scale(l, l), this.transform = p;
  }
  /**
   * Builds the internal texture and transform for the gradient.
   * Called automatically when the gradient is first used.
   * @internal
   */
  buildGradient() {
    this.texture || this._tick++, this.type === "linear" ? this.buildLinearGradient() : this.buildRadialGradient();
  }
  /**
   * Builds the internal texture and transform for the radial gradient.
   * Called automatically when the gradient is first used.
   * @internal
   */
  buildRadialGradient() {
    if (this.texture)
      return;
    const t = this.colorStops.length ? this.colorStops : Eo, e = this._textureSize, { canvas: i, context: s } = Fo(e, e), { x: n, y: a } = this.center, { x: o, y: h } = this.outerCenter, l = this.innerRadius, c = this.outerRadius, u = o - c, f = h - c, d = e / (c * 2), g = (n - u) * d, p = (a - f) * d, m = s.createRadialGradient(
      g,
      p,
      l * d,
      (o - u) * d,
      (h - f) * d,
      c * d
    );
    Ro(m, t), s.fillStyle = t[t.length - 1].color, s.fillRect(0, 0, e, e), s.fillStyle = m, s.translate(g, p), s.rotate(this.rotation), s.scale(1, this.scale), s.translate(-g, -p), s.fillRect(0, 0, e, e), this.texture = new X({
      source: new oi({
        resource: i,
        addressMode: this._wrapMode
      })
    });
    const _ = new Y();
    _.scale(1 / d, 1 / d), _.translate(u, f), this.textureSpace === "local" && _.scale(e, e), this.transform = _;
  }
  /** Destroys the gradient, releasing resources. This will also destroy the internal texture. */
  destroy() {
    this.texture?.destroy(!0), this.texture = null, this.transform = null, this.colorStops = [], this.start = null, this.end = null, this.center = null, this.outerCenter = null;
  }
  /**
   * Returns a unique key for this gradient instance.
   * This key is used for caching and texture management.
   * @returns {string} Unique key for the gradient
   */
  get styleKey() {
    return `fill-gradient-${this.uid}-${this._tick}`;
  }
};
_a.defaultLinearOptions = {
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
  colorStops: [],
  textureSpace: "local",
  type: "linear",
  textureSize: 256,
  wrapMode: "clamp-to-edge"
};
_a.defaultRadialOptions = {
  center: { x: 0.5, y: 0.5 },
  innerRadius: 0,
  outerRadius: 0.5,
  colorStops: [],
  scale: 1,
  textureSpace: "local",
  type: "radial",
  textureSize: 256,
  wrapMode: "clamp-to-edge"
};
let Ee = _a;
function Ro(r, t) {
  for (let e = 0; e < t.length; e++) {
    const i = t[e];
    r.addColorStop(i.offset, i.color);
  }
}
function Fo(r, t) {
  const e = st.get().createCanvas(r, t), i = e.getContext("2d");
  return { canvas: e, context: i };
}
function Fp(r) {
  let t = r[0] ?? {};
  return (typeof t == "number" || r[1]) && (N("8.5.2", "use options object instead"), t = {
    type: "linear",
    start: { x: r[0], y: r[1] },
    end: { x: r[2], y: r[3] },
    textureSpace: r[4],
    textureSize: r[5] ?? Ee.defaultLinearOptions.textureSize
  }), t;
}
const Io = {
  repeat: {
    addressModeU: "repeat",
    addressModeV: "repeat"
  },
  "repeat-x": {
    addressModeU: "repeat",
    addressModeV: "clamp-to-edge"
  },
  "repeat-y": {
    addressModeU: "clamp-to-edge",
    addressModeV: "repeat"
  },
  "no-repeat": {
    addressModeU: "clamp-to-edge",
    addressModeV: "clamp-to-edge"
  }
};
class ms {
  constructor(t, e) {
    this.uid = ft("fillPattern"), this._tick = 0, this.transform = new Y(), this.texture = t, this.transform.scale(
      1 / t.frame.width,
      1 / t.frame.height
    ), e && (t.source.style.addressModeU = Io[e].addressModeU, t.source.style.addressModeV = Io[e].addressModeV);
  }
  /**
   * Sets the transform for the pattern
   * @param transform - The transform matrix to apply to the pattern.
   * If not provided, the pattern will use the default transform.
   */
  setTransform(t) {
    const e = this.texture;
    this.transform.copyFrom(t), this.transform.invert(), this.transform.scale(
      1 / e.frame.width,
      1 / e.frame.height
    ), this._tick++;
  }
  /** Internal texture used to render the gradient */
  get texture() {
    return this._texture;
  }
  set texture(t) {
    this._texture !== t && (this._texture = t, this._tick++);
  }
  /**
   * Returns a unique key for this instance.
   * This key is used for caching.
   * @returns {string} Unique key for the instance
   */
  get styleKey() {
    return `fill-pattern-${this.uid}-${this._tick}`;
  }
  /** Destroys the fill pattern, releasing resources. This will also destroy the internal texture. */
  destroy() {
    this.texture.destroy(!0), this.texture = null;
  }
}
var Ip = Op, Js = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 }, Bp = /([astvzqmhlc])([^astvzqmhlc]*)/ig;
function Op(r) {
  var t = [];
  return r.replace(Bp, function(e, i, s) {
    var n = i.toLowerCase();
    for (s = Dp(s), n == "m" && s.length > 2 && (t.push([i].concat(s.splice(0, 2))), n = "l", i = i == "m" ? "l" : "L"); ; ) {
      if (s.length == Js[n])
        return s.unshift(i), t.push(s);
      if (s.length < Js[n]) throw new Error("malformed path data");
      t.push([i].concat(s.splice(0, Js[n])));
    }
  }), t;
}
var Lp = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;
function Dp(r) {
  var t = r.match(Lp);
  return t ? t.map(Number) : [];
}
const zp = /* @__PURE__ */ _h(Ip);
function Gp(r, t) {
  const e = zp(r), i = [];
  let s = null, n = 0, a = 0;
  for (let o = 0; o < e.length; o++) {
    const h = e[o], l = h[0], c = h;
    switch (l) {
      case "M":
        n = c[1], a = c[2], t.moveTo(n, a);
        break;
      case "m":
        n += c[1], a += c[2], t.moveTo(n, a);
        break;
      case "H":
        n = c[1], t.lineTo(n, a);
        break;
      case "h":
        n += c[1], t.lineTo(n, a);
        break;
      case "V":
        a = c[1], t.lineTo(n, a);
        break;
      case "v":
        a += c[1], t.lineTo(n, a);
        break;
      case "L":
        n = c[1], a = c[2], t.lineTo(n, a);
        break;
      case "l":
        n += c[1], a += c[2], t.lineTo(n, a);
        break;
      case "C":
        n = c[5], a = c[6], t.bezierCurveTo(
          c[1],
          c[2],
          // First control point
          c[3],
          c[4],
          // Second control point
          n,
          a
          // End point
        );
        break;
      case "c":
        t.bezierCurveTo(
          n + c[1],
          a + c[2],
          // First control point
          n + c[3],
          a + c[4],
          // Second control point
          n + c[5],
          a + c[6]
          // End point
        ), n += c[5], a += c[6];
        break;
      case "S":
        n = c[3], a = c[4], t.bezierCurveToShort(
          c[1],
          c[2],
          // Control point
          n,
          a
          // End point
        );
        break;
      case "s":
        t.bezierCurveToShort(
          n + c[1],
          a + c[2],
          // Control point
          n + c[3],
          a + c[4]
          // End point
        ), n += c[3], a += c[4];
        break;
      case "Q":
        n = c[3], a = c[4], t.quadraticCurveTo(
          c[1],
          c[2],
          // Control point
          n,
          a
          // End point
        );
        break;
      case "q":
        t.quadraticCurveTo(
          n + c[1],
          a + c[2],
          // Control point
          n + c[3],
          a + c[4]
          // End point
        ), n += c[3], a += c[4];
        break;
      case "T":
        n = c[1], a = c[2], t.quadraticCurveToShort(
          n,
          a
          // End point
        );
        break;
      case "t":
        n += c[1], a += c[2], t.quadraticCurveToShort(
          n,
          a
          // End point
        );
        break;
      case "A":
        n = c[6], a = c[7], t.arcToSvg(
          c[1],
          // rx
          c[2],
          // ry
          c[3],
          // x-axis-rotation
          c[4],
          // large-arc-flag
          c[5],
          // sweep-flag
          n,
          a
          // End point
        );
        break;
      case "a":
        n += c[6], a += c[7], t.arcToSvg(
          c[1],
          // rx
          c[2],
          // ry
          c[3],
          // x-axis-rotation
          c[4],
          // large-arc-flag
          c[5],
          // sweep-flag
          n,
          a
          // End point
        );
        break;
      case "Z":
      case "z":
        t.closePath(), i.length > 0 && (s = i.pop(), s ? (n = s.startX, a = s.startY) : (n = 0, a = 0)), s = null;
        break;
      default:
        rt(`Unknown SVG path command: ${l}`);
    }
    l !== "Z" && l !== "z" && s === null && (s = { startX: n, startY: a }, i.push(s));
  }
  return t;
}
class ya {
  /**
   * @param x - The X coordinate of the center of this circle
   * @param y - The Y coordinate of the center of this circle
   * @param radius - The radius of the circle
   */
  constructor(t = 0, e = 0, i = 0) {
    this.type = "circle", this.x = t, this.y = e, this.radius = i;
  }
  /**
   * Creates a clone of this Circle instance.
   * @example
   * ```ts
   * // Basic circle cloning
   * const original = new Circle(100, 100, 50);
   * const copy = original.clone();
   *
   * // Clone and modify
   * const modified = original.clone();
   * modified.radius = 75;
   *
   * // Verify independence
   * console.log(original.radius); // 50
   * console.log(modified.radius); // 75
   * ```
   * @returns A copy of the Circle
   * @see {@link Circle.copyFrom} For copying into existing circle
   * @see {@link Circle.copyTo} For copying to another circle
   */
  clone() {
    return new ya(this.x, this.y, this.radius);
  }
  /**
   * Checks whether the x and y coordinates given are contained within this circle.
   *
   * Uses the distance formula to determine if a point is inside the circle's radius.
   *
   * Commonly used for hit testing in PixiJS events and graphics.
   * @example
   * ```ts
   * // Basic containment check
   * const circle = new Circle(100, 100, 50);
   * const isInside = circle.contains(120, 120);
   *
   * // Check mouse position
   * const circle = new Circle(0, 0, 100);
   * container.hitArea = circle;
   * container.on('pointermove', (e) => {
   *     // only called if pointer is within circle
   * });
   * ```
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @returns Whether the x/y coordinates are within this Circle
   * @see {@link Circle.strokeContains} For checking stroke intersection
   * @see {@link Circle.getBounds} For getting bounding box
   */
  contains(t, e) {
    if (this.radius <= 0)
      return !1;
    const i = this.radius * this.radius;
    let s = this.x - t, n = this.y - e;
    return s *= s, n *= n, s + n <= i;
  }
  /**
   * Checks whether the x and y coordinates given are contained within this circle including the stroke.
   * @example
   * ```ts
   * // Basic stroke check
   * const circle = new Circle(100, 100, 50);
   * const isOnStroke = circle.strokeContains(150, 100, 4); // 4px line width
   *
   * // Check with different alignments
   * const innerStroke = circle.strokeContains(150, 100, 4, 1);   // Inside
   * const centerStroke = circle.strokeContains(150, 100, 4, 0.5); // Centered
   * const outerStroke = circle.strokeContains(150, 100, 4, 0);   // Outside
   * ```
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @param width - The width of the line to check
   * @param alignment - The alignment of the stroke, 0.5 by default
   * @returns Whether the x/y coordinates are within this Circle's stroke
   * @see {@link Circle.contains} For checking fill containment
   * @see {@link Circle.getBounds} For getting stroke bounds
   */
  strokeContains(t, e, i, s = 0.5) {
    if (this.radius === 0)
      return !1;
    const n = this.x - t, a = this.y - e, o = this.radius, h = (1 - s) * i, l = Math.sqrt(n * n + a * a);
    return l <= o + h && l > o - (i - h);
  }
  /**
   * Returns the framing rectangle of the circle as a Rectangle object.
   * @example
   * ```ts
   * // Basic bounds calculation
   * const circle = new Circle(100, 100, 50);
   * const bounds = circle.getBounds();
   * // bounds: x=50, y=50, width=100, height=100
   *
   * // Reuse existing rectangle
   * const rect = new Rectangle();
   * circle.getBounds(rect);
   * ```
   * @param out - Optional Rectangle object to store the result
   * @returns The framing rectangle
   * @see {@link Rectangle} For rectangle properties
   * @see {@link Circle.contains} For point containment
   */
  getBounds(t) {
    return t || (t = new _t()), t.x = this.x - this.radius, t.y = this.y - this.radius, t.width = this.radius * 2, t.height = this.radius * 2, t;
  }
  /**
   * Copies another circle to this one.
   * @example
   * ```ts
   * // Basic copying
   * const source = new Circle(100, 100, 50);
   * const target = new Circle();
   * target.copyFrom(source);
   * ```
   * @param circle - The circle to copy from
   * @returns Returns itself
   * @see {@link Circle.copyTo} For copying to another circle
   * @see {@link Circle.clone} For creating new circle copy
   */
  copyFrom(t) {
    return this.x = t.x, this.y = t.y, this.radius = t.radius, this;
  }
  /**
   * Copies this circle to another one.
   * @example
   * ```ts
   * // Basic copying
   * const source = new Circle(100, 100, 50);
   * const target = new Circle();
   * source.copyTo(target);
   * ```
   * @param circle - The circle to copy to
   * @returns Returns given parameter
   * @see {@link Circle.copyFrom} For copying from another circle
   * @see {@link Circle.clone} For creating new circle copy
   */
  copyTo(t) {
    return t.copyFrom(this), t;
  }
  toString() {
    return `[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
  }
}
class xa {
  /**
   * @param x - The X coordinate of the center of this ellipse
   * @param y - The Y coordinate of the center of this ellipse
   * @param halfWidth - The half width of this ellipse
   * @param halfHeight - The half height of this ellipse
   */
  constructor(t = 0, e = 0, i = 0, s = 0) {
    this.type = "ellipse", this.x = t, this.y = e, this.halfWidth = i, this.halfHeight = s;
  }
  /**
   * Creates a clone of this Ellipse instance.
   * @example
   * ```ts
   * // Basic cloning
   * const original = new Ellipse(100, 100, 50, 25);
   * const copy = original.clone();
   *
   * // Clone and modify
   * const modified = original.clone();
   * modified.halfWidth *= 2;
   * modified.halfHeight *= 2;
   *
   * // Verify independence
   * console.log(original.halfWidth);  // 50
   * console.log(modified.halfWidth);  // 100
   * ```
   * @returns A copy of the ellipse
   * @see {@link Ellipse.copyFrom} For copying into existing ellipse
   * @see {@link Ellipse.copyTo} For copying to another ellipse
   */
  clone() {
    return new xa(this.x, this.y, this.halfWidth, this.halfHeight);
  }
  /**
   * Checks whether the x and y coordinates given are contained within this ellipse.
   * Uses normalized coordinates and the ellipse equation to determine containment.
   * @example
   * ```ts
   * // Basic containment check
   * const ellipse = new Ellipse(100, 100, 50, 25);
   * const isInside = ellipse.contains(120, 110);
   * ```
   * @remarks
   * - Uses ellipse equation (x²/a² + y²/b² ≤ 1)
   * - Returns false if dimensions are 0 or negative
   * - Normalized to center (0,0) for calculation
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @returns Whether the x/y coords are within this ellipse
   * @see {@link Ellipse.strokeContains} For checking stroke intersection
   * @see {@link Ellipse.getBounds} For getting containing rectangle
   */
  contains(t, e) {
    if (this.halfWidth <= 0 || this.halfHeight <= 0)
      return !1;
    let i = (t - this.x) / this.halfWidth, s = (e - this.y) / this.halfHeight;
    return i *= i, s *= s, i + s <= 1;
  }
  /**
   * Checks whether the x and y coordinates given are contained within this ellipse including stroke.
   * @example
   * ```ts
   * // Basic stroke check
   * const ellipse = new Ellipse(100, 100, 50, 25);
   * const isOnStroke = ellipse.strokeContains(150, 100, 4); // 4px line width
   *
   * // Check with different alignments
   * const innerStroke = ellipse.strokeContains(150, 100, 4, 1);   // Inside
   * const centerStroke = ellipse.strokeContains(150, 100, 4, 0.5); // Centered
   * const outerStroke = ellipse.strokeContains(150, 100, 4, 0);   // Outside
   * ```
   * @remarks
   * - Uses normalized ellipse equations
   * - Considers stroke alignment
   * - Returns false if dimensions are 0
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @param strokeWidth - The width of the line to check
   * @param alignment - The alignment of the stroke (1 = inner, 0.5 = centered, 0 = outer)
   * @returns Whether the x/y coords are within this ellipse's stroke
   * @see {@link Ellipse.contains} For checking fill containment
   * @see {@link Ellipse.getBounds} For getting stroke bounds
   */
  strokeContains(t, e, i, s = 0.5) {
    const { halfWidth: n, halfHeight: a } = this;
    if (n <= 0 || a <= 0)
      return !1;
    const o = i * (1 - s), h = i - o, l = n - h, c = a - h, u = n + o, f = a + o, d = t - this.x, g = e - this.y, p = d * d / (l * l) + g * g / (c * c), m = d * d / (u * u) + g * g / (f * f);
    return p > 1 && m <= 1;
  }
  /**
   * Returns the framing rectangle of the ellipse as a Rectangle object.
   * @example
   * ```ts
   * // Basic bounds calculation
   * const ellipse = new Ellipse(100, 100, 50, 25);
   * const bounds = ellipse.getBounds();
   * // bounds: x=50, y=75, width=100, height=50
   *
   * // Reuse existing rectangle
   * const rect = new Rectangle();
   * ellipse.getBounds(rect);
   * ```
   * @remarks
   * - Creates Rectangle if none provided
   * - Top-left is (x-halfWidth, y-halfHeight)
   * - Width is halfWidth * 2
   * - Height is halfHeight * 2
   * @param out - Optional Rectangle object to store the result
   * @returns The framing rectangle
   * @see {@link Rectangle} For rectangle properties
   * @see {@link Ellipse.contains} For checking if a point is inside
   */
  getBounds(t) {
    return t || (t = new _t()), t.x = this.x - this.halfWidth, t.y = this.y - this.halfHeight, t.width = this.halfWidth * 2, t.height = this.halfHeight * 2, t;
  }
  /**
   * Copies another ellipse to this one.
   * @example
   * ```ts
   * // Basic copying
   * const source = new Ellipse(100, 100, 50, 25);
   * const target = new Ellipse();
   * target.copyFrom(source);
   * ```
   * @param ellipse - The ellipse to copy from
   * @returns Returns itself
   * @see {@link Ellipse.copyTo} For copying to another ellipse
   * @see {@link Ellipse.clone} For creating new ellipse copy
   */
  copyFrom(t) {
    return this.x = t.x, this.y = t.y, this.halfWidth = t.halfWidth, this.halfHeight = t.halfHeight, this;
  }
  /**
   * Copies this ellipse to another one.
   * @example
   * ```ts
   * // Basic copying
   * const source = new Ellipse(100, 100, 50, 25);
   * const target = new Ellipse();
   * source.copyTo(target);
   * ```
   * @param ellipse - The ellipse to copy to
   * @returns Returns given parameter
   * @see {@link Ellipse.copyFrom} For copying from another ellipse
   * @see {@link Ellipse.clone} For creating new ellipse copy
   */
  copyTo(t) {
    return t.copyFrom(this), t;
  }
  toString() {
    return `[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`;
  }
}
function Up(r, t, e, i, s, n) {
  const a = r - e, o = t - i, h = s - e, l = n - i, c = a * h + o * l, u = h * h + l * l;
  let f = -1;
  u !== 0 && (f = c / u);
  let d, g;
  f < 0 ? (d = e, g = i) : f > 1 ? (d = s, g = n) : (d = e + f * h, g = i + f * l);
  const p = r - d, m = t - g;
  return p * p + m * m;
}
let Wp, Np;
class or {
  /**
   * @param points - This can be an array of Points
   *  that form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or
   *  the arguments passed can be all the points of the polygon e.g.
   *  `new Polygon(new Point(), new Point(), ...)`, or the arguments passed can be flat
   *  x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are Numbers.
   */
  constructor(...t) {
    this.type = "polygon";
    let e = Array.isArray(t[0]) ? t[0] : t;
    if (typeof e[0] != "number") {
      const i = [];
      for (let s = 0, n = e.length; s < n; s++)
        i.push(e[s].x, e[s].y);
      e = i;
    }
    this.points = e, this.closePath = !0;
  }
  /**
   * Determines whether the polygon's points are arranged in a clockwise direction.
   * Uses the shoelace formula (surveyor's formula) to calculate the signed area.
   *
   * A positive area indicates clockwise winding, while negative indicates counter-clockwise.
   *
   * The formula sums up the cross products of adjacent vertices:
   * For each pair of adjacent points (x1,y1) and (x2,y2), we calculate (x1*y2 - x2*y1)
   * The final sum divided by 2 gives the signed area - positive for clockwise.
   * @example
   * ```ts
   * // Check polygon winding
   * const polygon = new Polygon([0, 0, 100, 0, 50, 100]);
   * console.log(polygon.isClockwise()); // Check direction
   *
   * // Use in path construction
   * const hole = new Polygon([25, 25, 75, 25, 75, 75, 25, 75]);
   * if (hole.isClockwise() === shape.isClockwise()) {
   *     hole.points.reverse(); // Reverse for proper hole winding
   * }
   * ```
   * @returns `true` if the polygon's points are arranged clockwise, `false` if counter-clockwise
   */
  isClockwise() {
    let t = 0;
    const e = this.points, i = e.length;
    for (let s = 0; s < i; s += 2) {
      const n = e[s], a = e[s + 1], o = e[(s + 2) % i], h = e[(s + 3) % i];
      t += (o - n) * (h + a);
    }
    return t < 0;
  }
  /**
   * Checks if this polygon completely contains another polygon.
   * Used for detecting holes in shapes, like when parsing SVG paths.
   * @example
   * ```ts
   * // Basic containment check
   * const outerSquare = new Polygon([0,0, 100,0, 100,100, 0,100]); // A square
   * const innerSquare = new Polygon([25,25, 75,25, 75,75, 25,75]); // A smaller square inside
   *
   * outerSquare.containsPolygon(innerSquare); // Returns true
   * innerSquare.containsPolygon(outerSquare); // Returns false
   * ```
   * @remarks
   * - Uses bounds check for quick rejection
   * - Tests all points for containment
   * @param polygon - The polygon to test for containment
   * @returns True if this polygon completely contains the other polygon
   * @see {@link Polygon.contains} For single point testing
   * @see {@link Polygon.getBounds} For bounds calculation
   */
  containsPolygon(t) {
    const e = this.getBounds(Wp), i = t.getBounds(Np);
    if (!e.containsRect(i))
      return !1;
    const s = t.points;
    for (let n = 0; n < s.length; n += 2) {
      const a = s[n], o = s[n + 1];
      if (!this.contains(a, o))
        return !1;
    }
    return !0;
  }
  /**
   * Creates a clone of this polygon.
   * @example
   * ```ts
   * // Basic cloning
   * const original = new Polygon([0, 0, 100, 0, 50, 100]);
   * const copy = original.clone();
   *
   * // Clone and modify
   * const modified = original.clone();
   * modified.points[0] = 10; // Modify first x coordinate
   * ```
   * @returns A copy of the polygon
   * @see {@link Polygon.copyFrom} For copying into existing polygon
   * @see {@link Polygon.copyTo} For copying to another polygon
   */
  clone() {
    const t = this.points.slice(), e = new or(t);
    return e.closePath = this.closePath, e;
  }
  /**
   * Checks whether the x and y coordinates passed to this function are contained within this polygon.
   * Uses raycasting algorithm for point-in-polygon testing.
   * @example
   * ```ts
   * // Basic containment check
   * const polygon = new Polygon([0, 0, 100, 0, 50, 100]);
   * const isInside = polygon.contains(25, 25); // true
   * ```
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @returns Whether the x/y coordinates are within this polygon
   * @see {@link Polygon.strokeContains} For checking stroke intersection
   * @see {@link Polygon.containsPolygon} For polygon-in-polygon testing
   */
  contains(t, e) {
    let i = !1;
    const s = this.points.length / 2;
    for (let n = 0, a = s - 1; n < s; a = n++) {
      const o = this.points[n * 2], h = this.points[n * 2 + 1], l = this.points[a * 2], c = this.points[a * 2 + 1];
      h > e != c > e && t < (l - o) * ((e - h) / (c - h)) + o && (i = !i);
    }
    return i;
  }
  /**
   * Checks whether the x and y coordinates given are contained within this polygon including the stroke.
   * @example
   * ```ts
   * // Basic stroke check
   * const polygon = new Polygon([0, 0, 100, 0, 50, 100]);
   * const isOnStroke = polygon.strokeContains(25, 25, 4); // 4px line width
   *
   * // Check with different alignments
   * const innerStroke = polygon.strokeContains(25, 25, 4, 1);   // Inside
   * const centerStroke = polygon.strokeContains(25, 25, 4, 0.5); // Centered
   * const outerStroke = polygon.strokeContains(25, 25, 4, 0);   // Outside
   * ```
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @param strokeWidth - The width of the line to check
   * @param alignment - The alignment of the stroke (1 = inner, 0.5 = centered, 0 = outer)
   * @returns Whether the x/y coordinates are within this polygon's stroke
   * @see {@link Polygon.contains} For checking fill containment
   * @see {@link Polygon.getBounds} For getting stroke bounds
   */
  strokeContains(t, e, i, s = 0.5) {
    const n = i * i, a = n * (1 - s), o = n - a, { points: h } = this, l = h.length - (this.closePath ? 0 : 2);
    for (let c = 0; c < l; c += 2) {
      const u = h[c], f = h[c + 1], d = h[(c + 2) % h.length], g = h[(c + 3) % h.length], p = Up(t, e, u, f, d, g), m = Math.sign((d - u) * (e - f) - (g - f) * (t - u));
      if (p <= (m < 0 ? o : a))
        return !0;
    }
    return !1;
  }
  /**
   * Returns the framing rectangle of the polygon as a Rectangle object.
   * @example
   * ```ts
   * // Basic bounds calculation
   * const polygon = new Polygon([0, 0, 100, 0, 50, 100]);
   * const bounds = polygon.getBounds();
   * // bounds: x=0, y=0, width=100, height=100
   *
   * // Reuse existing rectangle
   * const rect = new Rectangle();
   * polygon.getBounds(rect);
   * ```
   * @param out - Optional rectangle to store the result
   * @returns The framing rectangle
   * @see {@link Rectangle} For rectangle properties
   * @see {@link Polygon.contains} For checking if a point is inside
   */
  getBounds(t) {
    t || (t = new _t());
    const e = this.points;
    let i = 1 / 0, s = -1 / 0, n = 1 / 0, a = -1 / 0;
    for (let o = 0, h = e.length; o < h; o += 2) {
      const l = e[o], c = e[o + 1];
      i = l < i ? l : i, s = l > s ? l : s, n = c < n ? c : n, a = c > a ? c : a;
    }
    return t.x = i, t.width = s - i, t.y = n, t.height = a - n, t;
  }
  /**
   * Copies another polygon to this one.
   * @example
   * ```ts
   * // Basic copying
   * const source = new Polygon([0, 0, 100, 0, 50, 100]);
   * const target = new Polygon();
   * target.copyFrom(source);
   * ```
   * @param polygon - The polygon to copy from
   * @returns Returns itself
   * @see {@link Polygon.copyTo} For copying to another polygon
   * @see {@link Polygon.clone} For creating new polygon copy
   */
  copyFrom(t) {
    return this.points = t.points.slice(), this.closePath = t.closePath, this;
  }
  /**
   * Copies this polygon to another one.
   * @example
   * ```ts
   * // Basic copying
   * const source = new Polygon([0, 0, 100, 0, 50, 100]);
   * const target = new Polygon();
   * source.copyTo(target);
   * ```
   * @param polygon - The polygon to copy to
   * @returns Returns given parameter
   * @see {@link Polygon.copyFrom} For copying from another polygon
   * @see {@link Polygon.clone} For creating new polygon copy
   */
  copyTo(t) {
    return t.copyFrom(this), t;
  }
  toString() {
    return `[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t, e) => `${t}, ${e}`, "")}]`;
  }
  /**
   * Get the last X coordinate of the polygon.
   * @example
   * ```ts
   * // Basic coordinate access
   * const polygon = new Polygon([0, 0, 100, 200, 300, 400]);
   * console.log(polygon.lastX); // 300
   * ```
   * @readonly
   * @returns The x-coordinate of the last vertex
   * @see {@link Polygon.lastY} For last Y coordinate
   * @see {@link Polygon.points} For raw points array
   */
  get lastX() {
    return this.points[this.points.length - 2];
  }
  /**
   * Get the last Y coordinate of the polygon.
   * @example
   * ```ts
   * // Basic coordinate access
   * const polygon = new Polygon([0, 0, 100, 200, 300, 400]);
   * console.log(polygon.lastY); // 400
   * ```
   * @readonly
   * @returns The y-coordinate of the last vertex
   * @see {@link Polygon.lastX} For last X coordinate
   * @see {@link Polygon.points} For raw points array
   */
  get lastY() {
    return this.points[this.points.length - 1];
  }
  /**
   * Get the last X coordinate of the polygon.
   * @readonly
   * @deprecated since 8.11.0, use {@link Polygon.lastX} instead.
   */
  get x() {
    return N("8.11.0", "Polygon.lastX is deprecated, please use Polygon.lastX instead."), this.points[this.points.length - 2];
  }
  /**
   * Get the last Y coordinate of the polygon.
   * @readonly
   * @deprecated since 8.11.0, use {@link Polygon.lastY} instead.
   */
  get y() {
    return N("8.11.0", "Polygon.y is deprecated, please use Polygon.lastY instead."), this.points[this.points.length - 1];
  }
  /**
   * Get the first X coordinate of the polygon.
   * @example
   * ```ts
   * // Basic coordinate access
   * const polygon = new Polygon([0, 0, 100, 200, 300, 400]);
   * console.log(polygon.x); // 0
   * ```
   * @readonly
   * @returns The x-coordinate of the first vertex
   * @see {@link Polygon.startY} For first Y coordinate
   * @see {@link Polygon.points} For raw points array
   */
  get startX() {
    return this.points[0];
  }
  /**
   * Get the first Y coordinate of the polygon.
   * @example
   * ```ts
   * // Basic coordinate access
   * const polygon = new Polygon([0, 0, 100, 200, 300, 400]);
   * console.log(polygon.y); // 0
   * ```
   * @readonly
   * @returns The y-coordinate of the first vertex
   * @see {@link Polygon.startX} For first X coordinate
   * @see {@link Polygon.points} For raw points array
   */
  get startY() {
    return this.points[1];
  }
}
const Wr = (r, t, e, i, s, n, a) => {
  const o = r - e, h = t - i, l = Math.sqrt(o * o + h * h);
  return l >= s - n && l <= s + a;
};
class ba {
  /**
   * @param x - The X coordinate of the upper-left corner of the rounded rectangle
   * @param y - The Y coordinate of the upper-left corner of the rounded rectangle
   * @param width - The overall width of this rounded rectangle
   * @param height - The overall height of this rounded rectangle
   * @param radius - Controls the radius of the rounded corners
   */
  constructor(t = 0, e = 0, i = 0, s = 0, n = 20) {
    this.type = "roundedRectangle", this.x = t, this.y = e, this.width = i, this.height = s, this.radius = n;
  }
  /**
   * Returns the framing rectangle of the rounded rectangle as a Rectangle object
   * @example
   * ```ts
   * // Basic bounds calculation
   * const rect = new RoundedRectangle(100, 100, 200, 150, 20);
   * const bounds = rect.getBounds();
   * // bounds: x=100, y=100, width=200, height=150
   *
   * // Reuse existing rectangle
   * const out = new Rectangle();
   * rect.getBounds(out);
   * ```
   * @remarks
   * - Rectangle matches outer dimensions
   * - Ignores corner radius
   * @param out - Optional rectangle to store the result
   * @returns The framing rectangle
   * @see {@link Rectangle} For rectangle properties
   * @see {@link RoundedRectangle.contains} For checking if a point is inside
   */
  getBounds(t) {
    return t || (t = new _t()), t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t;
  }
  /**
   * Creates a clone of this Rounded Rectangle.
   * @example
   * ```ts
   * // Basic cloning
   * const original = new RoundedRectangle(100, 100, 200, 150, 20);
   * const copy = original.clone();
   *
   * // Clone and modify
   * const modified = original.clone();
   * modified.radius = 30;
   * modified.width *= 2;
   *
   * // Verify independence
   * console.log(original.radius);  // 20
   * console.log(modified.radius);  // 30
   * ```
   * @returns A copy of the rounded rectangle
   * @see {@link RoundedRectangle.copyFrom} For copying into existing rectangle
   * @see {@link RoundedRectangle.copyTo} For copying to another rectangle
   */
  clone() {
    return new ba(this.x, this.y, this.width, this.height, this.radius);
  }
  /**
   * Copies another rectangle to this one.
   * @example
   * ```ts
   * // Basic copying
   * const source = new RoundedRectangle(100, 100, 200, 150, 20);
   * const target = new RoundedRectangle();
   * target.copyFrom(source);
   *
   * // Chain with other operations
   * const rect = new RoundedRectangle()
   *     .copyFrom(source)
   *     .getBounds(rect);
   * ```
   * @param rectangle - The rectangle to copy from
   * @returns Returns itself
   * @see {@link RoundedRectangle.copyTo} For copying to another rectangle
   * @see {@link RoundedRectangle.clone} For creating new rectangle copy
   */
  copyFrom(t) {
    return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this;
  }
  /**
   * Copies this rectangle to another one.
   * @example
   * ```ts
   * // Basic copying
   * const source = new RoundedRectangle(100, 100, 200, 150, 20);
   * const target = new RoundedRectangle();
   * source.copyTo(target);
   *
   * // Chain with other operations
   * const result = source
   *     .copyTo(new RoundedRectangle())
   *     .getBounds();
   * ```
   * @param rectangle - The rectangle to copy to
   * @returns Returns given parameter
   * @see {@link RoundedRectangle.copyFrom} For copying from another rectangle
   * @see {@link RoundedRectangle.clone} For creating new rectangle copy
   */
  copyTo(t) {
    return t.copyFrom(this), t;
  }
  /**
   * Checks whether the x and y coordinates given are contained within this Rounded Rectangle
   * @example
   * ```ts
   * // Basic containment check
   * const rect = new RoundedRectangle(100, 100, 200, 150, 20);
   * const isInside = rect.contains(150, 125); // true
   * // Check corner radius
   * const corner = rect.contains(100, 100); // false if within corner curve
   * ```
   * @remarks
   * - Returns false if width/height is 0 or negative
   * - Handles rounded corners with radius check
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @returns Whether the x/y coordinates are within this Rounded Rectangle
   * @see {@link RoundedRectangle.strokeContains} For checking stroke intersection
   * @see {@link RoundedRectangle.getBounds} For getting containing rectangle
   */
  contains(t, e) {
    if (this.width <= 0 || this.height <= 0)
      return !1;
    if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
      const i = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
      if (e >= this.y + i && e <= this.y + this.height - i || t >= this.x + i && t <= this.x + this.width - i)
        return !0;
      let s = t - (this.x + i), n = e - (this.y + i);
      const a = i * i;
      if (s * s + n * n <= a || (s = t - (this.x + this.width - i), s * s + n * n <= a) || (n = e - (this.y + this.height - i), s * s + n * n <= a) || (s = t - (this.x + i), s * s + n * n <= a))
        return !0;
    }
    return !1;
  }
  /**
   * Checks whether the x and y coordinates given are contained within this rectangle including the stroke.
   * @example
   * ```ts
   * // Basic stroke check
   * const rect = new RoundedRectangle(100, 100, 200, 150, 20);
   * const isOnStroke = rect.strokeContains(150, 100, 4); // 4px line width
   *
   * // Check with different alignments
   * const innerStroke = rect.strokeContains(150, 100, 4, 1);   // Inside
   * const centerStroke = rect.strokeContains(150, 100, 4, 0.5); // Centered
   * const outerStroke = rect.strokeContains(150, 100, 4, 0);   // Outside
   * ```
   * @param pX - The X coordinate of the point to test
   * @param pY - The Y coordinate of the point to test
   * @param strokeWidth - The width of the line to check
   * @param alignment - The alignment of the stroke (1 = inner, 0.5 = centered, 0 = outer)
   * @returns Whether the x/y coordinates are within this rectangle's stroke
   * @see {@link RoundedRectangle.contains} For checking fill containment
   * @see {@link RoundedRectangle.getBounds} For getting stroke bounds
   */
  strokeContains(t, e, i, s = 0.5) {
    const { x: n, y: a, width: o, height: h, radius: l } = this, c = i * (1 - s), u = i - c, f = n + l, d = a + l, g = o - l * 2, p = h - l * 2, m = n + o, _ = a + h;
    return (t >= n - c && t <= n + u || t >= m - u && t <= m + c) && e >= d && e <= d + p || (e >= a - c && e <= a + u || e >= _ - u && e <= _ + c) && t >= f && t <= f + g ? !0 : (
      // Top-left
      t < f && e < d && Wr(
        t,
        e,
        f,
        d,
        l,
        u,
        c
      ) || t > m - l && e < d && Wr(
        t,
        e,
        m - l,
        d,
        l,
        u,
        c
      ) || t > m - l && e > _ - l && Wr(
        t,
        e,
        m - l,
        _ - l,
        l,
        u,
        c
      ) || t < f && e > _ - l && Wr(
        t,
        e,
        f,
        _ - l,
        l,
        u,
        c
      )
    );
  }
  toString() {
    return `[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
  }
}
const yc = {};
function Vp(r, t, e) {
  let i = 2166136261;
  for (let s = 0; s < t; s++)
    i ^= r[s].uid, i = Math.imul(i, 16777619), i >>>= 0;
  return yc[i] || Yp(r, t, i, e);
}
function Yp(r, t, e, i) {
  const s = {};
  let n = 0;
  for (let o = 0; o < i; o++) {
    const h = o < t ? r[o] : X.EMPTY.source;
    s[n++] = h.source, s[n++] = h.style;
  }
  const a = new Hr(s);
  return yc[e] = a, a;
}
class Bo {
  constructor(t) {
    typeof t == "number" ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData), this.size = this.rawBinaryData.byteLength;
  }
  /** View on the raw binary data as a `Int8Array`. */
  get int8View() {
    return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View;
  }
  /** View on the raw binary data as a `Uint8Array`. */
  get uint8View() {
    return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View;
  }
  /**  View on the raw binary data as a `Int16Array`. */
  get int16View() {
    return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View;
  }
  /** View on the raw binary data as a `Int32Array`. */
  get int32View() {
    return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View;
  }
  /** View on the raw binary data as a `Float64Array`. */
  get float64View() {
    return this._float64Array || (this._float64Array = new Float64Array(this.rawBinaryData)), this._float64Array;
  }
  /** View on the raw binary data as a `BigUint64Array`. */
  get bigUint64View() {
    return this._bigUint64Array || (this._bigUint64Array = new BigUint64Array(this.rawBinaryData)), this._bigUint64Array;
  }
  /**
   * Returns the view of the given type.
   * @param type - One of `int8`, `uint8`, `int16`,
   *    `uint16`, `int32`, `uint32`, and `float32`.
   * @returns - typed array of given type
   */
  view(t) {
    return this[`${t}View`];
  }
  /** Destroys all buffer references. Do not use after calling this. */
  destroy() {
    this.rawBinaryData = null, this.uint32View = null, this.float32View = null, this.uint16View = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._int32View = null, this._float64Array = null, this._bigUint64Array = null;
  }
  /**
   * Returns the size of the given type in bytes.
   * @param type - One of `int8`, `uint8`, `int16`,
   *   `uint16`, `int32`, `uint32`, and `float32`.
   * @returns - size of the type in bytes
   */
  static sizeOf(t) {
    switch (t) {
      case "int8":
      case "uint8":
        return 1;
      case "int16":
      case "uint16":
        return 2;
      case "int32":
      case "uint32":
      case "float32":
        return 4;
      default:
        throw new Error(`${t} isn't a valid view type`);
    }
  }
}
function Oo(r, t) {
  const e = r.byteLength / 8 | 0, i = new Float64Array(r, 0, e);
  new Float64Array(t, 0, e).set(i);
  const n = r.byteLength - e * 8;
  if (n > 0) {
    const a = new Uint8Array(r, e * 8, n);
    new Uint8Array(t, e * 8, n).set(a);
  }
}
const $p = {
  normal: "normal-npm",
  add: "add-npm",
  screen: "screen-npm"
};
var jp = /* @__PURE__ */ ((r) => (r[r.DISABLED = 0] = "DISABLED", r[r.RENDERING_MASK_ADD = 1] = "RENDERING_MASK_ADD", r[r.MASK_ACTIVE = 2] = "MASK_ACTIVE", r[r.INVERSE_MASK_ACTIVE = 3] = "INVERSE_MASK_ACTIVE", r[r.RENDERING_MASK_REMOVE = 4] = "RENDERING_MASK_REMOVE", r[r.NONE = 5] = "NONE", r))(jp || {});
function Lo(r, t) {
  return t.alphaMode === "no-premultiply-alpha" && $p[r] || r;
}
const Xp = [
  "precision mediump float;",
  "void main(void){",
  "float test = 0.1;",
  "%forloop%",
  "gl_FragColor = vec4(0.0);",
  "}"
].join(`
`);
function Hp(r) {
  let t = "";
  for (let e = 0; e < r; ++e)
    e > 0 && (t += `
else `), e < r - 1 && (t += `if(test == ${e}.0){}`);
  return t;
}
function qp(r, t) {
  if (r === 0)
    throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
  const e = t.createShader(t.FRAGMENT_SHADER);
  try {
    for (; ; ) {
      const i = Xp.replace(/%forloop%/gi, Hp(r));
      if (t.shaderSource(e, i), t.compileShader(e), !t.getShaderParameter(e, t.COMPILE_STATUS))
        r = r / 2 | 0;
      else
        break;
    }
  } finally {
    t.deleteShader(e);
  }
  return r;
}
let pi = null;
function Kp() {
  if (pi)
    return pi;
  const r = ql();
  return pi = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), pi = qp(
    pi,
    r
  ), r.getExtension("WEBGL_lose_context")?.loseContext(), pi;
}
class Zp {
  constructor() {
    this.ids = /* @__PURE__ */ Object.create(null), this.textures = [], this.count = 0;
  }
  /** Clear the textures and their locations. */
  clear() {
    for (let t = 0; t < this.count; t++) {
      const e = this.textures[t];
      this.textures[t] = null, this.ids[e.uid] = null;
    }
    this.count = 0;
  }
}
class Qp {
  constructor() {
    this.renderPipeId = "batch", this.action = "startBatch", this.start = 0, this.size = 0, this.textures = new Zp(), this.blendMode = "normal", this.topology = "triangle-strip", this.canBundle = !0;
  }
  destroy() {
    this.textures = null, this.gpuBindGroup = null, this.bindGroup = null, this.batcher = null;
  }
}
const hr = [];
let os = 0;
Tr.register({
  clear: () => {
    if (hr.length > 0)
      for (const r of hr)
        r && r.destroy();
    hr.length = 0, os = 0;
  }
});
function Do() {
  return os > 0 ? hr[--os] : new Qp();
}
function zo(r) {
  hr[os++] = r;
}
let Xi = 0;
const xc = class bc {
  constructor(t) {
    this.uid = ft("batcher"), this.dirty = !0, this.batchIndex = 0, this.batches = [], this._elements = [], t = { ...bc.defaultOptions, ...t }, t.maxTextures || (N("v8.8.0", "maxTextures is a required option for Batcher now, please pass it in the options"), t.maxTextures = Kp());
    const { maxTextures: e, attributesInitialSize: i, indicesInitialSize: s } = t;
    this.attributeBuffer = new Bo(i * 4), this.indexBuffer = new Uint16Array(s), this.maxTextures = e;
  }
  begin() {
    this.elementSize = 0, this.elementStart = 0, this.indexSize = 0, this.attributeSize = 0;
    for (let t = 0; t < this.batchIndex; t++)
      zo(this.batches[t]);
    this.batchIndex = 0, this._batchIndexStart = 0, this._batchIndexSize = 0, this.dirty = !0;
  }
  add(t) {
    this._elements[this.elementSize++] = t, t._indexStart = this.indexSize, t._attributeStart = this.attributeSize, t._batcher = this, this.indexSize += t.indexSize, this.attributeSize += t.attributeSize * this.vertexSize;
  }
  checkAndUpdateTexture(t, e) {
    const i = t._batch.textures.ids[e._source.uid];
    return !i && i !== 0 ? !1 : (t._textureId = i, t.texture = e, !0);
  }
  updateElement(t) {
    this.dirty = !0;
    const e = this.attributeBuffer;
    t.packAsQuad ? this.packQuadAttributes(
      t,
      e.float32View,
      e.uint32View,
      t._attributeStart,
      t._textureId
    ) : this.packAttributes(
      t,
      e.float32View,
      e.uint32View,
      t._attributeStart,
      t._textureId
    );
  }
  /**
   * breaks the batcher. This happens when a batch gets too big,
   * or we need to switch to a different type of rendering (a filter for example)
   * @param instructionSet
   */
  break(t) {
    const e = this._elements;
    if (!e[this.elementStart])
      return;
    let i = Do(), s = i.textures;
    s.clear();
    const n = e[this.elementStart];
    let a = Lo(n.blendMode, n.texture._source), o = n.topology;
    this.attributeSize * 4 > this.attributeBuffer.size && this._resizeAttributeBuffer(this.attributeSize * 4), this.indexSize > this.indexBuffer.length && this._resizeIndexBuffer(this.indexSize);
    const h = this.attributeBuffer.float32View, l = this.attributeBuffer.uint32View, c = this.indexBuffer;
    let u = this._batchIndexSize, f = this._batchIndexStart, d = "startBatch";
    const g = this.maxTextures;
    for (let p = this.elementStart; p < this.elementSize; ++p) {
      const m = e[p];
      e[p] = null;
      const y = m.texture._source, x = Lo(m.blendMode, y), b = a !== x || o !== m.topology;
      if (y._batchTick === Xi && !b) {
        m._textureId = y._textureBindLocation, u += m.indexSize, m.packAsQuad ? (this.packQuadAttributes(
          m,
          h,
          l,
          m._attributeStart,
          m._textureId
        ), this.packQuadIndex(
          c,
          m._indexStart,
          m._attributeStart / this.vertexSize
        )) : (this.packAttributes(
          m,
          h,
          l,
          m._attributeStart,
          m._textureId
        ), this.packIndex(
          m,
          c,
          m._indexStart,
          m._attributeStart / this.vertexSize
        )), m._batch = i;
        continue;
      }
      y._batchTick = Xi, (s.count >= g || b) && (this._finishBatch(
        i,
        f,
        u - f,
        s,
        a,
        o,
        t,
        d
      ), d = "renderBatch", f = u, a = x, o = m.topology, i = Do(), s = i.textures, s.clear(), ++Xi), m._textureId = y._textureBindLocation = s.count, s.ids[y.uid] = s.count, s.textures[s.count++] = y, m._batch = i, u += m.indexSize, m.packAsQuad ? (this.packQuadAttributes(
        m,
        h,
        l,
        m._attributeStart,
        m._textureId
      ), this.packQuadIndex(
        c,
        m._indexStart,
        m._attributeStart / this.vertexSize
      )) : (this.packAttributes(
        m,
        h,
        l,
        m._attributeStart,
        m._textureId
      ), this.packIndex(
        m,
        c,
        m._indexStart,
        m._attributeStart / this.vertexSize
      ));
    }
    s.count > 0 && (this._finishBatch(
      i,
      f,
      u - f,
      s,
      a,
      o,
      t,
      d
    ), f = u, ++Xi), this.elementStart = this.elementSize, this._batchIndexStart = f, this._batchIndexSize = u;
  }
  _finishBatch(t, e, i, s, n, a, o, h) {
    t.gpuBindGroup = null, t.bindGroup = null, t.action = h, t.batcher = this, t.textures = s, t.blendMode = n, t.topology = a, t.start = e, t.size = i, ++Xi, this.batches[this.batchIndex++] = t, o.add(t);
  }
  finish(t) {
    this.break(t);
  }
  /**
   * Resizes the attribute buffer to the given size (1 = 1 float32)
   * @param size - the size in vertices to ensure (not bytes!)
   */
  ensureAttributeBuffer(t) {
    t * 4 <= this.attributeBuffer.size || this._resizeAttributeBuffer(t * 4);
  }
  /**
   * Resizes the index buffer to the given size (1 = 1 float32)
   * @param size - the size in vertices to ensure (not bytes!)
   */
  ensureIndexBuffer(t) {
    t <= this.indexBuffer.length || this._resizeIndexBuffer(t);
  }
  _resizeAttributeBuffer(t) {
    const e = Math.max(t, this.attributeBuffer.size * 2), i = new Bo(e);
    Oo(this.attributeBuffer.rawBinaryData, i.rawBinaryData), this.attributeBuffer = i;
  }
  _resizeIndexBuffer(t) {
    const e = this.indexBuffer;
    let i = Math.max(t, e.length * 1.5);
    i += i % 2;
    const s = i > 65535 ? new Uint32Array(i) : new Uint16Array(i);
    if (s.BYTES_PER_ELEMENT !== e.BYTES_PER_ELEMENT)
      for (let n = 0; n < e.length; n++)
        s[n] = e[n];
    else
      Oo(e.buffer, s.buffer);
    this.indexBuffer = s;
  }
  packQuadIndex(t, e, i) {
    t[e] = i + 0, t[e + 1] = i + 1, t[e + 2] = i + 2, t[e + 3] = i + 0, t[e + 4] = i + 2, t[e + 5] = i + 3;
  }
  packIndex(t, e, i, s) {
    const n = t.indices, a = t.indexSize, o = t.indexOffset, h = t.attributeOffset;
    for (let l = 0; l < a; l++)
      e[i++] = s + n[l + o] - h;
  }
  /**
   * Destroys the batch and its resources.
   * @param options - destruction options
   * @param options.shader - whether to destroy the associated shader
   */
  destroy(t = {}) {
    if (this.batches !== null) {
      for (let e = 0; e < this.batchIndex; e++)
        zo(this.batches[e]);
      this.batches = null, this.geometry.destroy(!0), this.geometry = null, t.shader && (this.shader?.destroy(), this.shader = null);
      for (let e = 0; e < this._elements.length; e++)
        this._elements[e] && (this._elements[e]._batch = null);
      this._elements = null, this.indexBuffer = null, this.attributeBuffer.destroy(), this.attributeBuffer = null;
    }
  }
};
xc.defaultOptions = {
  maxTextures: null,
  attributesInitialSize: 4,
  indicesInitialSize: 6
};
let Jp = xc;
var Bt = /* @__PURE__ */ ((r) => (r[r.MAP_READ = 1] = "MAP_READ", r[r.MAP_WRITE = 2] = "MAP_WRITE", r[r.COPY_SRC = 4] = "COPY_SRC", r[r.COPY_DST = 8] = "COPY_DST", r[r.INDEX = 16] = "INDEX", r[r.VERTEX = 32] = "VERTEX", r[r.UNIFORM = 64] = "UNIFORM", r[r.STORAGE = 128] = "STORAGE", r[r.INDIRECT = 256] = "INDIRECT", r[r.QUERY_RESOLVE = 512] = "QUERY_RESOLVE", r[r.STATIC = 1024] = "STATIC", r))(Bt || {});
class wr extends oe {
  /**
   * Creates a new Buffer with the given options
   * @param options - the options for the buffer
   */
  constructor(t) {
    let { data: e, size: i } = t;
    const { usage: s, label: n, shrinkToFit: a } = t;
    super(), this._gpuData = /* @__PURE__ */ Object.create(null), this._gcLastUsed = -1, this.autoGarbageCollect = !0, this.uid = ft("buffer"), this._resourceType = "buffer", this._resourceId = ft("resource"), this._touched = 0, this._updateID = 1, this._dataInt32 = null, this.shrinkToFit = !0, this.destroyed = !1, e instanceof Array && (e = new Float32Array(e)), this._data = e, i ?? (i = e?.byteLength);
    const o = !!e;
    this.descriptor = {
      size: i,
      usage: s,
      mappedAtCreation: o,
      label: n
    }, this.shrinkToFit = a ?? !0;
  }
  /** the data in the buffer */
  get data() {
    return this._data;
  }
  set data(t) {
    this.setDataWithSize(t, t.length, !0);
  }
  get dataInt32() {
    return this._dataInt32 || (this._dataInt32 = new Int32Array(this.data.buffer)), this._dataInt32;
  }
  /** whether the buffer is static or not */
  get static() {
    return !!(this.descriptor.usage & Bt.STATIC);
  }
  set static(t) {
    t ? this.descriptor.usage |= Bt.STATIC : this.descriptor.usage &= ~Bt.STATIC;
  }
  /**
   * Sets the data in the buffer to the given value. This will immediately update the buffer on the GPU.
   * If you only want to update a subset of the buffer, you can pass in the size of the data.
   * @param value - the data to set
   * @param size - the size of the data in bytes
   * @param syncGPU - should the buffer be updated on the GPU immediately?
   */
  setDataWithSize(t, e, i) {
    if (this._updateID++, this._updateSize = e * t.BYTES_PER_ELEMENT, this._data === t) {
      i && this.emit("update", this);
      return;
    }
    const s = this._data;
    if (this._data = t, this._dataInt32 = null, !s || s.length !== t.length) {
      !this.shrinkToFit && s && t.byteLength < s.byteLength ? i && this.emit("update", this) : (this.descriptor.size = t.byteLength, this._resourceId = ft("resource"), this.emit("change", this));
      return;
    }
    i && this.emit("update", this);
  }
  /**
   * updates the buffer on the GPU to reflect the data in the buffer.
   * By default it will update the entire buffer. If you only want to update a subset of the buffer,
   * you can pass in the size of the buffer to update.
   * @param sizeInBytes - the new size of the buffer in bytes
   */
  update(t) {
    this._updateSize = t ?? this._updateSize, this._updateID++, this.emit("update", this);
  }
  /** Unloads the buffer from the GPU */
  unload() {
    this.emit("unload", this);
    for (const t in this._gpuData)
      this._gpuData[t]?.destroy();
    this._gpuData = /* @__PURE__ */ Object.create(null);
  }
  /** Destroys the buffer */
  destroy() {
    this.destroyed = !0, this.unload(), this.emit("destroy", this), this.emit("change", this), this._data = null, this.descriptor = null, this.removeAllListeners();
  }
}
function wc(r, t) {
  if (!(r instanceof wr)) {
    let e = t ? Bt.INDEX : Bt.VERTEX;
    r instanceof Array && (t ? (r = new Uint32Array(r), e = Bt.INDEX | Bt.COPY_DST) : (r = new Float32Array(r), e = Bt.VERTEX | Bt.COPY_DST)), r = new wr({
      data: r,
      label: t ? "index-mesh-buffer" : "vertex-mesh-buffer",
      usage: e
    });
  }
  return r;
}
function tg(r, t, e) {
  const i = r.getAttribute(t);
  if (!i)
    return e.minX = 0, e.minY = 0, e.maxX = 0, e.maxY = 0, e;
  const s = i.buffer.data;
  let n = 1 / 0, a = 1 / 0, o = -1 / 0, h = -1 / 0;
  const l = s.BYTES_PER_ELEMENT, c = (i.offset || 0) / l, u = (i.stride || 2 * 4) / l;
  for (let f = c; f < s.length; f += u) {
    const d = s[f], g = s[f + 1];
    d > o && (o = d), g > h && (h = g), d < n && (n = d), g < a && (a = g);
  }
  return e.minX = n, e.minY = a, e.maxX = o, e.maxY = h, e;
}
function eg(r) {
  return (r instanceof wr || Array.isArray(r) || r.BYTES_PER_ELEMENT) && (r = {
    buffer: r
  }), r.buffer = wc(r.buffer, !1), r;
}
class ig extends oe {
  /**
   * Create a new instance of a geometry
   * @param options - The options for the geometry.
   */
  constructor(t = {}) {
    super(), this._gpuData = /* @__PURE__ */ Object.create(null), this.autoGarbageCollect = !0, this._gcLastUsed = -1, this.uid = ft("geometry"), this._layoutKey = 0, this.instanceCount = 1, this._bounds = new ae(), this._boundsDirty = !0;
    const { attributes: e, indexBuffer: i, topology: s } = t;
    if (this.buffers = [], this.attributes = {}, e)
      for (const n in e)
        this.addAttribute(n, e[n]);
    this.instanceCount = t.instanceCount ?? 1, i && this.addIndex(i), this.topology = s || "triangle-list";
  }
  onBufferUpdate() {
    this._boundsDirty = !0, this.emit("update", this);
  }
  /**
   * Returns the requested attribute.
   * @param id - The name of the attribute required
   * @returns - The attribute requested.
   */
  getAttribute(t) {
    return this.attributes[t];
  }
  /**
   * Returns the index buffer
   * @returns - The index buffer.
   */
  getIndex() {
    return this.indexBuffer;
  }
  /**
   * Returns the requested buffer.
   * @param id - The name of the buffer required.
   * @returns - The buffer requested.
   */
  getBuffer(t) {
    return this.getAttribute(t).buffer;
  }
  /**
   * Used to figure out how many vertices there are in this geometry
   * @returns the number of vertices in the geometry
   */
  getSize() {
    for (const t in this.attributes) {
      const e = this.attributes[t];
      return e.buffer.data.length / (e.stride / 4 || e.size);
    }
    return 0;
  }
  /**
   * Adds an attribute to the geometry.
   * @param name - The name of the attribute to add.
   * @param attributeOption - The attribute option to add.
   */
  addAttribute(t, e) {
    const i = eg(e);
    this.buffers.indexOf(i.buffer) === -1 && (this.buffers.push(i.buffer), i.buffer.on("update", this.onBufferUpdate, this), i.buffer.on("change", this.onBufferUpdate, this)), this.attributes[t] = i;
  }
  /**
   * Adds an index buffer to the geometry.
   * @param indexBuffer - The index buffer to add. Can be a Buffer, TypedArray, or an array of numbers.
   */
  addIndex(t) {
    this.indexBuffer = wc(t, !0), this.buffers.push(this.indexBuffer);
  }
  /** Returns the bounds of the geometry. */
  get bounds() {
    return this._boundsDirty ? (this._boundsDirty = !1, tg(this, "aPosition", this._bounds)) : this._bounds;
  }
  /** Unloads the geometry from the GPU. */
  unload() {
    this.emit("unload", this);
    for (const t in this._gpuData)
      this._gpuData[t]?.destroy();
    this._gpuData = /* @__PURE__ */ Object.create(null);
  }
  /**
   * destroys the geometry.
   * @param destroyBuffers - destroy the buffers associated with this geometry
   */
  destroy(t = !1) {
    this.emit("destroy", this), this.removeAllListeners(), t && this.buffers.forEach((e) => e.destroy()), this.unload(), this.indexBuffer?.destroy(), this.attributes = null, this.buffers = null, this.indexBuffer = null, this._bounds = null;
  }
}
const rg = new Float32Array(1), sg = new Uint32Array(1);
class ng extends ig {
  constructor() {
    const e = new wr({
      data: rg,
      label: "attribute-batch-buffer",
      usage: Bt.VERTEX | Bt.COPY_DST,
      shrinkToFit: !1
    }), i = new wr({
      data: sg,
      label: "index-batch-buffer",
      usage: Bt.INDEX | Bt.COPY_DST,
      // | BufferUsage.STATIC,
      shrinkToFit: !1
    }), s = 6 * 4;
    super({
      attributes: {
        aPosition: {
          buffer: e,
          format: "float32x2",
          stride: s,
          offset: 0
        },
        aUV: {
          buffer: e,
          format: "float32x2",
          stride: s,
          offset: 2 * 4
        },
        aColor: {
          buffer: e,
          format: "unorm8x4",
          stride: s,
          offset: 4 * 4
        },
        aTextureIdAndRound: {
          buffer: e,
          format: "uint16x2",
          stride: s,
          offset: 5 * 4
        }
      },
      indexBuffer: i
    });
  }
}
function Go(r, t, e) {
  if (r)
    for (const i in r) {
      const s = i.toLocaleLowerCase(), n = t[s];
      if (n) {
        let a = r[i];
        i === "header" && (a = a.replace(/@in\s+[^;]+;\s*/g, "").replace(/@out\s+[^;]+;\s*/g, "")), e && n.push(`//----${e}----//`), n.push(a);
      } else
        rt(`${i} placement hook does not exist in shader`);
    }
}
const ag = /\{\{(.*?)\}\}/g;
function Uo(r) {
  const t = {};
  return (r.match(ag)?.map((i) => i.replace(/[{()}]/g, "")) ?? []).forEach((i) => {
    t[i] = [];
  }), t;
}
function Wo(r, t) {
  let e;
  const i = /@in\s+([^;]+);/g;
  for (; (e = i.exec(r)) !== null; )
    t.push(e[1]);
}
function No(r, t, e = !1) {
  const i = [];
  Wo(t, i), r.forEach((o) => {
    o.header && Wo(o.header, i);
  });
  const s = i;
  e && s.sort();
  const n = s.map((o, h) => `       @location(${h}) ${o},`).join(`
`);
  let a = t.replace(/@in\s+[^;]+;\s*/g, "");
  return a = a.replace("{{in}}", `
${n}
`), a;
}
function Vo(r, t) {
  let e;
  const i = /@out\s+([^;]+);/g;
  for (; (e = i.exec(r)) !== null; )
    t.push(e[1]);
}
function og(r) {
  const e = /\b(\w+)\s*:/g.exec(r);
  return e ? e[1] : "";
}
function hg(r) {
  const t = /@.*?\s+/g;
  return r.replace(t, "");
}
function lg(r, t) {
  const e = [];
  Vo(t, e), r.forEach((h) => {
    h.header && Vo(h.header, e);
  });
  let i = 0;
  const s = e.sort().map((h) => h.indexOf("builtin") > -1 ? h : `@location(${i++}) ${h}`).join(`,
`), n = e.sort().map((h) => `       var ${hg(h)};`).join(`
`), a = `return VSOutput(
            ${e.sort().map((h) => ` ${og(h)}`).join(`,
`)});`;
  let o = t.replace(/@out\s+[^;]+;\s*/g, "");
  return o = o.replace("{{struct}}", `
${s}
`), o = o.replace("{{start}}", `
${n}
`), o = o.replace("{{return}}", `
${a}
`), o;
}
function Yo(r, t) {
  let e = r;
  for (const i in t) {
    const s = t[i];
    s.join(`
`).length ? e = e.replace(`{{${i}}}`, `//-----${i} START-----//
${s.join(`
`)}
//----${i} FINISH----//`) : e = e.replace(`{{${i}}}`, "");
  }
  return e;
}
const Oe = /* @__PURE__ */ Object.create(null), tn = /* @__PURE__ */ new Map();
let cg = 0;
function ug({
  template: r,
  bits: t
}) {
  const e = vc(r, t);
  if (Oe[e])
    return Oe[e];
  const { vertex: i, fragment: s } = fg(r, t);
  return Oe[e] = Sc(i, s, t), Oe[e];
}
function dg({
  template: r,
  bits: t
}) {
  const e = vc(r, t);
  return Oe[e] || (Oe[e] = Sc(r.vertex, r.fragment, t)), Oe[e];
}
function fg(r, t) {
  const e = t.map((a) => a.vertex).filter((a) => !!a), i = t.map((a) => a.fragment).filter((a) => !!a);
  let s = No(e, r.vertex, !0);
  s = lg(e, s);
  const n = No(i, r.fragment, !0);
  return {
    vertex: s,
    fragment: n
  };
}
function vc(r, t) {
  return t.map((e) => (tn.has(e) || tn.set(e, cg++), tn.get(e))).sort((e, i) => e - i).join("-") + r.vertex + r.fragment;
}
function Sc(r, t, e) {
  const i = Uo(r), s = Uo(t);
  return e.forEach((n) => {
    Go(n.vertex, i, n.name), Go(n.fragment, s, n.name);
  }), {
    vertex: Yo(r, i),
    fragment: Yo(t, s)
  };
}
const pg = (
  /* wgsl */
  `
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}

        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);

        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`
), gg = (
  /* wgsl */
  `
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;

    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {

        {{start}}

        var outColor:vec4<f32>;

        {{main}}

        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`
), mg = (
  /* glsl */
  `
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;

        {{start}}

        vColor = vec4(1.);

        {{main}}

        vUV = uv;

        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`
), _g = (
  /* glsl */
  `

    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {

        {{start}}

        vec4 outColor;

        {{main}}

        finalColor = outColor * vColor;

        {{end}}
    }
`
), yg = {
  name: "global-uniforms-bit",
  vertex: {
    header: (
      /* wgsl */
      `
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `
    )
  }
}, xg = {
  name: "global-uniforms-bit",
  vertex: {
    header: (
      /* glsl */
      `
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `
    )
  }
};
function bg({ bits: r, name: t }) {
  const e = ug({
    template: {
      fragment: gg,
      vertex: pg
    },
    bits: [
      yg,
      ...r
    ]
  });
  return Bi.from({
    name: t,
    vertex: {
      source: e.vertex,
      entryPoint: "main"
    },
    fragment: {
      source: e.fragment,
      entryPoint: "main"
    }
  });
}
function wg({ bits: r, name: t }) {
  return new ps({
    name: t,
    ...dg({
      template: {
        vertex: mg,
        fragment: _g
      },
      bits: [
        xg,
        ...r
      ]
    })
  });
}
const vg = {
  name: "color-bit",
  vertex: {
    header: (
      /* wgsl */
      `
            @in aColor: vec4<f32>;
        `
    ),
    main: (
      /* wgsl */
      `
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `
    )
  }
}, Sg = {
  name: "color-bit",
  vertex: {
    header: (
      /* glsl */
      `
            in vec4 aColor;
        `
    ),
    main: (
      /* glsl */
      `
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `
    )
  }
}, en = {};
function Ag(r) {
  const t = [];
  if (r === 1)
    t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"), t.push("@group(1) @binding(1) var textureSampler1: sampler;");
  else {
    let e = 0;
    for (let i = 0; i < r; i++)
      t.push(`@group(1) @binding(${e++}) var textureSource${i + 1}: texture_2d<f32>;`), t.push(`@group(1) @binding(${e++}) var textureSampler${i + 1}: sampler;`);
  }
  return t.join(`
`);
}
function Tg(r) {
  const t = [];
  if (r === 1)
    t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");
  else {
    t.push("switch vTextureId {");
    for (let e = 0; e < r; e++)
      e === r - 1 ? t.push("  default:{") : t.push(`  case ${e}:{`), t.push(`      outColor = textureSampleGrad(textureSource${e + 1}, textureSampler${e + 1}, vUV, uvDx, uvDy);`), t.push("      break;}");
    t.push("}");
  }
  return t.join(`
`);
}
function Cg(r) {
  return en[r] || (en[r] = {
    name: "texture-batch-bit",
    vertex: {
      header: `
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,
      main: `
                vTextureId = aTextureIdAndRound.y;
            `,
      end: `
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `
    },
    fragment: {
      header: `
                @in @interpolate(flat) vTextureId: u32;

                ${Ag(r)}
            `,
      main: `
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${Tg(r)}
            `
    }
  }), en[r];
}
const rn = {};
function Pg(r) {
  const t = [];
  for (let e = 0; e < r; e++)
    e > 0 && t.push("else"), e < r - 1 && t.push(`if(vTextureId < ${e}.5)`), t.push("{"), t.push(`	outColor = texture(uTextures[${e}], vUV);`), t.push("}");
  return t.join(`
`);
}
function Mg(r) {
  return rn[r] || (rn[r] = {
    name: "texture-batch-bit",
    vertex: {
      header: `
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,
      main: `
                vTextureId = aTextureIdAndRound.y;
            `,
      end: `
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `
    },
    fragment: {
      header: `
                in float vTextureId;

                uniform sampler2D uTextures[${r}];

            `,
      main: `

                ${Pg(r)}
            `
    }
  }), rn[r];
}
const kg = {
  name: "round-pixels-bit",
  vertex: {
    header: (
      /* wgsl */
      `
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `
    )
  }
}, Eg = {
  name: "round-pixels-bit",
  vertex: {
    header: (
      /* glsl */
      `
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `
    )
  }
}, $o = {};
function Rg(r) {
  let t = $o[r];
  if (t)
    return t;
  const e = new Int32Array(r);
  for (let i = 0; i < r; i++)
    e[i] = i;
  return t = $o[r] = new tc({
    uTextures: { value: e, type: "i32", size: r }
  }, { isStatic: !0 }), t;
}
class jo extends gs {
  constructor(t) {
    const e = wg({
      name: "batch",
      bits: [
        Sg,
        Mg(t),
        Eg
      ]
    }), i = bg({
      name: "batch",
      bits: [
        vg,
        Cg(t),
        kg
      ]
    });
    super({
      glProgram: e,
      gpuProgram: i,
      resources: {
        batchSamplers: Rg(t)
      }
    }), this.maxTextures = t;
  }
}
let Hi = null;
const Ac = class Tc extends Jp {
  constructor(t) {
    super(t), this.geometry = new ng(), this.name = Tc.extension.name, this.vertexSize = 6, Hi ?? (Hi = new jo(t.maxTextures)), this.shader = Hi;
  }
  /**
   * Packs the attributes of a DefaultBatchableMeshElement into the provided views.
   * @param element - The DefaultBatchableMeshElement to pack.
   * @param float32View - The Float32Array view to pack into.
   * @param uint32View - The Uint32Array view to pack into.
   * @param index - The starting index in the views.
   * @param textureId - The texture ID to use.
   */
  packAttributes(t, e, i, s, n) {
    const a = n << 16 | t.roundPixels & 65535, o = t.transform, h = o.a, l = o.b, c = o.c, u = o.d, f = o.tx, d = o.ty, { positions: g, uvs: p } = t, m = t.color, _ = t.attributeOffset, y = _ + t.attributeSize;
    for (let x = _; x < y; x++) {
      const b = x * 2, v = g[b], A = g[b + 1];
      e[s++] = h * v + c * A + f, e[s++] = u * A + l * v + d, e[s++] = p[b], e[s++] = p[b + 1], i[s++] = m, i[s++] = a;
    }
  }
  /**
   * Packs the attributes of a DefaultBatchableQuadElement into the provided views.
   * @param element - The DefaultBatchableQuadElement to pack.
   * @param float32View - The Float32Array view to pack into.
   * @param uint32View - The Uint32Array view to pack into.
   * @param index - The starting index in the views.
   * @param textureId - The texture ID to use.
   */
  packQuadAttributes(t, e, i, s, n) {
    const a = t.texture, o = t.transform, h = o.a, l = o.b, c = o.c, u = o.d, f = o.tx, d = o.ty, g = t.bounds, p = g.maxX, m = g.minX, _ = g.maxY, y = g.minY, x = a.uvs, b = t.color, v = n << 16 | t.roundPixels & 65535;
    e[s + 0] = h * m + c * y + f, e[s + 1] = u * y + l * m + d, e[s + 2] = x.x0, e[s + 3] = x.y0, i[s + 4] = b, i[s + 5] = v, e[s + 6] = h * p + c * y + f, e[s + 7] = u * y + l * p + d, e[s + 8] = x.x1, e[s + 9] = x.y1, i[s + 10] = b, i[s + 11] = v, e[s + 12] = h * p + c * _ + f, e[s + 13] = u * _ + l * p + d, e[s + 14] = x.x2, e[s + 15] = x.y2, i[s + 16] = b, i[s + 17] = v, e[s + 18] = h * m + c * _ + f, e[s + 19] = u * _ + l * m + d, e[s + 20] = x.x3, e[s + 21] = x.y3, i[s + 22] = b, i[s + 23] = v;
  }
  /**
   * Updates the maximum number of textures that can be used in the shader.
   * @param maxTextures - The maximum number of textures that can be used in the shader.
   * @internal
   */
  _updateMaxTextures(t) {
    this.shader.maxTextures !== t && (Hi = new jo(t), this.shader = Hi);
  }
  destroy() {
    this.shader = null, super.destroy();
  }
};
Ac.extension = {
  type: [
    D.Batcher
  ],
  name: "default"
};
let Fg = Ac;
class Ig {
  constructor(t) {
    this.items = /* @__PURE__ */ Object.create(null);
    const { renderer: e, type: i, onUnload: s, priority: n, name: a } = t;
    this._renderer = e, e.gc.addResourceHash(this, "items", i, n ?? 0), this._onUnload = s, this.name = a;
  }
  /**
   * Add an item to the hash. No-op if already added.
   * @param item
   * @returns true if the item was added, false if it was already in the hash
   */
  add(t) {
    return this.items[t.uid] ? !1 : (this.items[t.uid] = t, t.once("unload", this.remove, this), t._gcLastUsed = this._renderer.gc.now, !0);
  }
  remove(t, ...e) {
    if (!this.items[t.uid])
      return;
    const i = t._gpuData[this._renderer.uid];
    i && (this._onUnload?.(t, ...e), i.destroy(), t._gpuData[this._renderer.uid] = null, this.items[t.uid] = null);
  }
  removeAll(...t) {
    Object.values(this.items).forEach((e) => e && this.remove(e, ...t));
  }
  destroy(...t) {
    this.removeAll(...t), this.items = /* @__PURE__ */ Object.create(null), this._renderer = null, this._onUnload = null;
  }
}
function Bg(r, t, e, i, s, n, a, o = null) {
  let h = 0;
  e *= t, s *= n;
  const l = o.a, c = o.b, u = o.c, f = o.d, d = o.tx, g = o.ty;
  for (; h < a; ) {
    const p = r[e], m = r[e + 1];
    i[s] = l * p + u * m + d, i[s + 1] = c * p + f * m + g, s += n, e += t, h++;
  }
}
function Og(r, t, e, i) {
  let s = 0;
  for (t *= e; s < i; )
    r[t] = 0, r[t + 1] = 0, t += e, s++;
}
function Cc(r, t, e, i, s) {
  const n = t.a, a = t.b, o = t.c, h = t.d, l = t.tx, c = t.ty;
  e || (e = 0), i || (i = 2), s || (s = r.length / i - e);
  let u = e * i;
  for (let f = 0; f < s; f++) {
    const d = r[u], g = r[u + 1];
    r[u] = n * d + o * g + l, r[u + 1] = a * d + h * g + c, u += i;
  }
}
const Lg = new Y();
class Pc {
  constructor() {
    this.packAsQuad = !1, this.batcherName = "default", this.topology = "triangle-list", this.applyTransform = !0, this.roundPixels = 0, this._batcher = null, this._batch = null;
  }
  get uvs() {
    return this.geometryData.uvs;
  }
  get positions() {
    return this.geometryData.vertices;
  }
  get indices() {
    return this.geometryData.indices;
  }
  get blendMode() {
    return this.renderable && this.applyTransform ? this.renderable.groupBlendMode : "normal";
  }
  get color() {
    const t = this.baseColor, e = t >> 16 | t & 65280 | (t & 255) << 16, i = this.renderable;
    return i ? kl(e, i.groupColor) + (this.alpha * i.groupAlpha * 255 << 24) : e + (this.alpha * 255 << 24);
  }
  get transform() {
    return this.renderable?.groupTransform || Lg;
  }
  copyTo(t) {
    t.indexOffset = this.indexOffset, t.indexSize = this.indexSize, t.attributeOffset = this.attributeOffset, t.attributeSize = this.attributeSize, t.baseColor = this.baseColor, t.alpha = this.alpha, t.texture = this.texture, t.geometryData = this.geometryData, t.topology = this.topology;
  }
  reset() {
    this.applyTransform = !0, this.renderable = null, this.topology = "triangle-list";
  }
  destroy() {
    this.renderable = null, this.texture = null, this.geometryData = null, this._batcher = null, this._batch = null;
  }
}
const vr = {
  extension: {
    type: D.ShapeBuilder,
    name: "circle"
  },
  build(r, t) {
    let e, i, s, n, a, o;
    if (r.type === "circle") {
      const b = r;
      if (a = o = b.radius, a <= 0)
        return !1;
      e = b.x, i = b.y, s = n = 0;
    } else if (r.type === "ellipse") {
      const b = r;
      if (a = b.halfWidth, o = b.halfHeight, a <= 0 || o <= 0)
        return !1;
      e = b.x, i = b.y, s = n = 0;
    } else {
      const b = r, v = b.width / 2, A = b.height / 2;
      e = b.x + v, i = b.y + A, a = o = Math.max(0, Math.min(b.radius, Math.min(v, A))), s = v - a, n = A - o;
    }
    if (s < 0 || n < 0)
      return !1;
    const h = Math.ceil(2.3 * Math.sqrt(a + o)), l = h * 8 + (s ? 4 : 0) + (n ? 4 : 0);
    if (l === 0)
      return !1;
    if (h === 0)
      return t[0] = t[6] = e + s, t[1] = t[3] = i + n, t[2] = t[4] = e - s, t[5] = t[7] = i - n, !0;
    let c = 0, u = h * 4 + (s ? 2 : 0) + 2, f = u, d = l, g = s + a, p = n, m = e + g, _ = e - g, y = i + p;
    if (t[c++] = m, t[c++] = y, t[--u] = y, t[--u] = _, n) {
      const b = i - p;
      t[f++] = _, t[f++] = b, t[--d] = b, t[--d] = m;
    }
    for (let b = 1; b < h; b++) {
      const v = Math.PI / 2 * (b / h), A = s + Math.cos(v) * a, S = n + Math.sin(v) * o, C = e + A, T = e - A, P = i + S, E = i - S;
      t[c++] = C, t[c++] = P, t[--u] = P, t[--u] = T, t[f++] = T, t[f++] = E, t[--d] = E, t[--d] = C;
    }
    g = s, p = n + o, m = e + g, _ = e - g, y = i + p;
    const x = i - p;
    return t[c++] = m, t[c++] = y, t[--d] = x, t[--d] = m, s && (t[c++] = _, t[c++] = y, t[--d] = x, t[--d] = _), !0;
  },
  triangulate(r, t, e, i, s, n) {
    if (r.length === 0)
      return;
    let a = 0, o = 0;
    for (let c = 0; c < r.length; c += 2)
      a += r[c], o += r[c + 1];
    a /= r.length / 2, o /= r.length / 2;
    let h = i;
    t[h * e] = a, t[h * e + 1] = o;
    const l = h++;
    for (let c = 0; c < r.length; c += 2)
      t[h * e] = r[c], t[h * e + 1] = r[c + 1], c > 0 && (s[n++] = h, s[n++] = l, s[n++] = h - 1), h++;
    s[n++] = l + 1, s[n++] = l, s[n++] = h - 1;
  }
}, Dg = { ...vr, extension: { ...vr.extension, name: "ellipse" } }, zg = { ...vr, extension: { ...vr.extension, name: "roundedRectangle" } }, Mc = 1e-4, Xo = 1e-4;
function Gg(r) {
  const t = r.length;
  if (t < 6)
    return 1;
  let e = 0;
  for (let i = 0, s = r[t - 2], n = r[t - 1]; i < t; i += 2) {
    const a = r[i], o = r[i + 1];
    e += (a - s) * (o + n), s = a, n = o;
  }
  return e < 0 ? -1 : 1;
}
function Ho(r, t, e, i, s, n, a, o) {
  const h = r - e * s, l = t - i * s, c = r + e * n, u = t + i * n;
  let f, d;
  a ? (f = i, d = -e) : (f = -i, d = e);
  const g = h + f, p = l + d, m = c + f, _ = u + d;
  return o.push(g, p), o.push(m, _), 2;
}
function He(r, t, e, i, s, n, a, o) {
  const h = e - r, l = i - t;
  let c = Math.atan2(h, l), u = Math.atan2(s - r, n - t);
  o && c < u ? c += Math.PI * 2 : !o && c > u && (u += Math.PI * 2);
  let f = c;
  const d = u - c, g = Math.abs(d), p = Math.sqrt(h * h + l * l), m = (15 * g * Math.sqrt(p) / Math.PI >> 0) + 1, _ = d / m;
  if (f += _, o) {
    a.push(r, t), a.push(e, i);
    for (let y = 1, x = f; y < m; y++, x += _)
      a.push(r, t), a.push(
        r + Math.sin(x) * p,
        t + Math.cos(x) * p
      );
    a.push(r, t), a.push(s, n);
  } else {
    a.push(e, i), a.push(r, t);
    for (let y = 1, x = f; y < m; y++, x += _)
      a.push(
        r + Math.sin(x) * p,
        t + Math.cos(x) * p
      ), a.push(r, t);
    a.push(s, n), a.push(r, t);
  }
  return m * 2;
}
function Ug(r, t, e, i, s, n) {
  const a = Mc;
  if (r.length === 0)
    return;
  const o = t;
  let h = o.alignment;
  if (t.alignment !== 0.5) {
    let z = Gg(r);
    h = (h - 0.5) * z + 0.5;
  }
  const l = new Pt(r[0], r[1]), c = new Pt(r[r.length - 2], r[r.length - 1]), u = i, f = Math.abs(l.x - c.x) < a && Math.abs(l.y - c.y) < a;
  if (u) {
    r = r.slice(), f && (r.pop(), r.pop(), c.set(r[r.length - 2], r[r.length - 1]));
    const z = (l.x + c.x) * 0.5, H = (c.y + l.y) * 0.5;
    r.unshift(z, H), r.push(z, H);
  }
  const d = s, g = r.length / 2;
  let p = r.length;
  const m = d.length / 2, _ = o.width / 2, y = _ * _, x = o.miterLimit * o.miterLimit;
  let b = r[0], v = r[1], A = r[2], S = r[3], C = 0, T = 0, P = -(v - S), E = b - A, L = 0, B = 0, G = Math.sqrt(P * P + E * E);
  P /= G, E /= G, P *= _, E *= _;
  const I = h, M = (1 - I) * 2, R = I * 2;
  u || (o.cap === "round" ? p += He(
    b - P * (M - R) * 0.5,
    v - E * (M - R) * 0.5,
    b - P * M,
    v - E * M,
    b + P * R,
    v + E * R,
    d,
    !0
  ) + 2 : o.cap === "square" && (p += Ho(b, v, P, E, M, R, !0, d))), d.push(
    b - P * M,
    v - E * M
  ), d.push(
    b + P * R,
    v + E * R
  );
  for (let z = 1; z < g - 1; ++z) {
    b = r[(z - 1) * 2], v = r[(z - 1) * 2 + 1], A = r[z * 2], S = r[z * 2 + 1], C = r[(z + 1) * 2], T = r[(z + 1) * 2 + 1], P = -(v - S), E = b - A, G = Math.sqrt(P * P + E * E), P /= G, E /= G, P *= _, E *= _, L = -(S - T), B = A - C, G = Math.sqrt(L * L + B * B), L /= G, B /= G, L *= _, B *= _;
    const H = A - b, U = v - S, pt = A - C, Ut = T - S, vt = H * pt + U * Ut, Ft = U * pt - Ut * H, xe = Ft < 0;
    if (Math.abs(Ft) < 1e-3 * Math.abs(vt)) {
      d.push(
        A - P * M,
        S - E * M
      ), d.push(
        A + P * R,
        S + E * R
      ), vt >= 0 && (o.join === "round" ? p += He(
        A,
        S,
        A - P * M,
        S - E * M,
        A - L * M,
        S - B * M,
        d,
        !1
      ) + 4 : p += 2, d.push(
        A - L * R,
        S - B * R
      ), d.push(
        A + L * M,
        S + B * M
      ));
      continue;
    }
    const ci = (-P + b) * (-E + S) - (-P + A) * (-E + v), Ve = (-L + C) * (-B + S) - (-L + A) * (-B + T), Re = (H * Ve - pt * ci) / Ft, be = (Ut * ci - U * Ve) / Ft, Di = (Re - A) * (Re - A) + (be - S) * (be - S), ce = A + (Re - A) * M, we = S + (be - S) * M, ve = A - (Re - A) * R, Kt = S - (be - S) * R, Ye = Math.min(H * H + U * U, pt * pt + Ut * Ut), zi = xe ? M : R, Cr = Ye + zi * zi * y;
    Di <= Cr ? o.join === "bevel" || Di / y > x ? (xe ? (d.push(ce, we), d.push(A + P * R, S + E * R), d.push(ce, we), d.push(A + L * R, S + B * R)) : (d.push(A - P * M, S - E * M), d.push(ve, Kt), d.push(A - L * M, S - B * M), d.push(ve, Kt)), p += 2) : o.join === "round" ? xe ? (d.push(ce, we), d.push(A + P * R, S + E * R), p += He(
      A,
      S,
      A + P * R,
      S + E * R,
      A + L * R,
      S + B * R,
      d,
      !0
    ) + 4, d.push(ce, we), d.push(A + L * R, S + B * R)) : (d.push(A - P * M, S - E * M), d.push(ve, Kt), p += He(
      A,
      S,
      A - P * M,
      S - E * M,
      A - L * M,
      S - B * M,
      d,
      !1
    ) + 4, d.push(A - L * M, S - B * M), d.push(ve, Kt)) : (d.push(ce, we), d.push(ve, Kt)) : (d.push(A - P * M, S - E * M), d.push(A + P * R, S + E * R), o.join === "round" ? xe ? p += He(
      A,
      S,
      A + P * R,
      S + E * R,
      A + L * R,
      S + B * R,
      d,
      !0
    ) + 2 : p += He(
      A,
      S,
      A - P * M,
      S - E * M,
      A - L * M,
      S - B * M,
      d,
      !1
    ) + 2 : o.join === "miter" && Di / y <= x && (xe ? (d.push(ve, Kt), d.push(ve, Kt)) : (d.push(ce, we), d.push(ce, we)), p += 2), d.push(A - L * M, S - B * M), d.push(A + L * R, S + B * R), p += 2);
  }
  b = r[(g - 2) * 2], v = r[(g - 2) * 2 + 1], A = r[(g - 1) * 2], S = r[(g - 1) * 2 + 1], P = -(v - S), E = b - A, G = Math.sqrt(P * P + E * E), P /= G, E /= G, P *= _, E *= _, d.push(A - P * M, S - E * M), d.push(A + P * R, S + E * R), u || (o.cap === "round" ? p += He(
    A - P * (M - R) * 0.5,
    S - E * (M - R) * 0.5,
    A - P * M,
    S - E * M,
    A + P * R,
    S + E * R,
    d,
    !1
  ) + 2 : o.cap === "square" && (p += Ho(A, S, P, E, M, R, !1, d)));
  const K = Xo * Xo;
  for (let z = m; z < p + m - 2; ++z)
    b = d[z * 2], v = d[z * 2 + 1], A = d[(z + 1) * 2], S = d[(z + 1) * 2 + 1], C = d[(z + 2) * 2], T = d[(z + 2) * 2 + 1], !(Math.abs(b * (S - T) + A * (T - v) + C * (v - S)) < K) && n.push(z, z + 1, z + 2);
}
function Wg(r, t, e, i) {
  const s = Mc;
  if (r.length === 0)
    return;
  const n = r[0], a = r[1], o = r[r.length - 2], h = r[r.length - 1], l = t || Math.abs(n - o) < s && Math.abs(a - h) < s, c = e, u = r.length / 2, f = c.length / 2;
  for (let d = 0; d < u; d++)
    c.push(r[d * 2]), c.push(r[d * 2 + 1]);
  for (let d = 0; d < u - 1; d++)
    i.push(f + d, f + d + 1);
  l && i.push(f + u - 1, f);
}
function kc(r, t, e, i, s, n, a) {
  const o = Sp(r, t, 2);
  if (!o)
    return;
  for (let l = 0; l < o.length; l += 3)
    n[a++] = o[l] + s, n[a++] = o[l + 1] + s, n[a++] = o[l + 2] + s;
  let h = s * i;
  for (let l = 0; l < r.length; l += 2)
    e[h] = r[l], e[h + 1] = r[l + 1], h += i;
}
const Ng = [], Vg = {
  extension: {
    type: D.ShapeBuilder,
    name: "polygon"
  },
  build(r, t) {
    for (let e = 0; e < r.points.length; e++)
      t[e] = r.points[e];
    return !0;
  },
  triangulate(r, t, e, i, s, n) {
    kc(r, Ng, t, e, i, s, n);
  }
}, Yg = {
  extension: {
    type: D.ShapeBuilder,
    name: "rectangle"
  },
  build(r, t) {
    const e = r, i = e.x, s = e.y, n = e.width, a = e.height;
    return n > 0 && a > 0 ? (t[0] = i, t[1] = s, t[2] = i + n, t[3] = s, t[4] = i + n, t[5] = s + a, t[6] = i, t[7] = s + a, !0) : !1;
  },
  triangulate(r, t, e, i, s, n) {
    let a = 0;
    i *= e, t[i + a] = r[0], t[i + a + 1] = r[1], a += e, t[i + a] = r[2], t[i + a + 1] = r[3], a += e, t[i + a] = r[6], t[i + a + 1] = r[7], a += e, t[i + a] = r[4], t[i + a + 1] = r[5], a += e;
    const o = i / e;
    s[n++] = o, s[n++] = o + 1, s[n++] = o + 2, s[n++] = o + 1, s[n++] = o + 3, s[n++] = o + 2;
  }
}, $g = {
  extension: {
    type: D.ShapeBuilder,
    name: "triangle"
  },
  build(r, t) {
    return t[0] = r.x, t[1] = r.y, t[2] = r.x2, t[3] = r.y2, t[4] = r.x3, t[5] = r.y3, !0;
  },
  triangulate(r, t, e, i, s, n) {
    let a = 0;
    i *= e, t[i + a] = r[0], t[i + a + 1] = r[1], a += e, t[i + a] = r[2], t[i + a + 1] = r[3], a += e, t[i + a] = r[4], t[i + a + 1] = r[5];
    const o = i / e;
    s[n++] = o, s[n++] = o + 1, s[n++] = o + 2;
  }
}, jg = new Y(), Xg = new _t();
function Hg(r, t, e, i) {
  const s = t.matrix ? r.copyFrom(t.matrix).invert() : r.identity();
  if (t.textureSpace === "local") {
    const a = e.getBounds(Xg);
    t.width && a.pad(t.width);
    const { x: o, y: h } = a, l = 1 / a.width, c = 1 / a.height, u = -o * l, f = -h * c, d = s.a, g = s.b, p = s.c, m = s.d;
    s.a *= l, s.b *= l, s.c *= c, s.d *= c, s.tx = u * d + f * p + s.tx, s.ty = u * g + f * m + s.ty;
  } else
    s.translate(t.texture.frame.x, t.texture.frame.y), s.scale(1 / t.texture.source.width, 1 / t.texture.source.height);
  const n = t.texture.source.style;
  return !(t.fill instanceof Ee) && n.addressMode === "clamp-to-edge" && (n.addressMode = "repeat", n.update()), i && s.append(jg.copyFrom(i).invert()), s;
}
const _s = {};
At.handleByMap(D.ShapeBuilder, _s);
At.add(Yg, Vg, $g, vr, Dg, zg);
const qg = new _t(), Kg = new Y();
function Zg(r, t) {
  const { geometryData: e, batches: i } = t;
  i.length = 0, e.indices.length = 0, e.vertices.length = 0, e.uvs.length = 0;
  for (let s = 0; s < r.instructions.length; s++) {
    const n = r.instructions[s];
    if (n.action === "texture")
      Qg(n.data, i, e);
    else if (n.action === "fill" || n.action === "stroke") {
      const a = n.action === "stroke", o = n.data.path.shapePath, h = n.data.style, l = n.data.hole;
      a && l && qo(l.shapePath, h, !0, i, e), l && (o.shapePrimitives[o.shapePrimitives.length - 1].holes = l.shapePath.shapePrimitives), qo(o, h, a, i, e);
    }
  }
}
function Qg(r, t, e) {
  const i = [], s = _s.rectangle, n = qg;
  n.x = r.dx, n.y = r.dy, n.width = r.dw, n.height = r.dh;
  const a = r.transform;
  if (!s.build(n, i))
    return;
  const { vertices: o, uvs: h, indices: l } = e, c = l.length, u = o.length / 2;
  a && Cc(i, a), s.triangulate(i, o, 2, u, l, c);
  const f = r.image, d = f.uvs;
  h.push(
    d.x0,
    d.y0,
    d.x1,
    d.y1,
    d.x3,
    d.y3,
    d.x2,
    d.y2
  );
  const g = re.get(Pc);
  g.indexOffset = c, g.indexSize = l.length - c, g.attributeOffset = u, g.attributeSize = o.length / 2 - u, g.baseColor = r.style, g.alpha = r.alpha, g.texture = f, g.geometryData = e, t.push(g);
}
function qo(r, t, e, i, s) {
  const { vertices: n, uvs: a, indices: o } = s;
  r.shapePrimitives.forEach(({ shape: h, transform: l, holes: c }) => {
    const u = [], f = _s[h.type];
    if (!f.build(h, u))
      return;
    const d = o.length, g = n.length / 2;
    let p = "triangle-list";
    if (l && Cc(u, l), e) {
      const x = h.closePath ?? !0, b = t;
      b.pixelLine ? (Wg(u, x, n, o), p = "line-list") : Ug(u, b, !1, x, n, o);
    } else if (c) {
      const x = [], b = u.slice();
      Jg(c).forEach((A) => {
        x.push(b.length / 2), b.push(...A);
      }), kc(b, x, n, 2, g, o, d);
    } else
      f.triangulate(u, n, 2, g, o, d);
    const m = a.length / 2, _ = t.texture;
    if (_ !== X.WHITE) {
      const x = Hg(Kg, t, h, l);
      Bg(n, 2, g, a, m, 2, n.length / 2 - g, x);
    } else
      Og(a, m, 2, n.length / 2 - g);
    const y = re.get(Pc);
    y.indexOffset = d, y.indexSize = o.length - d, y.attributeOffset = g, y.attributeSize = n.length / 2 - g, y.baseColor = t.color, y.alpha = t.alpha, y.texture = _, y.geometryData = s, y.topology = p, i.push(y);
  });
}
function Jg(r) {
  const t = [];
  for (let e = 0; e < r.length; e++) {
    const i = r[e].shape, s = [];
    _s[i.type].build(i, s) && t.push(s);
  }
  return t;
}
class tm {
  constructor() {
    this.batches = [], this.geometryData = {
      vertices: [],
      uvs: [],
      indices: []
    };
  }
  reset() {
    this.batches && this.batches.forEach((t) => {
      re.return(t);
    }), this.graphicsData && re.return(this.graphicsData), this.isBatchable = !1, this.context = null, this.batches.length = 0, this.geometryData.indices.length = 0, this.geometryData.vertices.length = 0, this.geometryData.uvs.length = 0, this.graphicsData = null;
  }
  destroy() {
    this.reset(), this.batches = null, this.geometryData = null;
  }
}
class em {
  constructor() {
    this.instructions = new Il();
  }
  init(t) {
    const e = t.maxTextures;
    this.batcher ? this.batcher._updateMaxTextures(e) : this.batcher = new Fg({ maxTextures: e }), this.instructions.reset();
  }
  /**
   * @deprecated since version 8.0.0
   * Use `batcher.geometry` instead.
   * @see {Batcher#geometry}
   */
  get geometry() {
    return N($d, "GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."), this.batcher.geometry;
  }
  destroy() {
    this.batcher.destroy(), this.instructions.destroy(), this.batcher = null, this.instructions = null;
  }
}
const wa = class Yn {
  constructor(t) {
    this._renderer = t, this._managedContexts = new Ig({ renderer: t, type: "resource", name: "graphicsContext" });
  }
  /**
   * Runner init called, update the default options
   * @ignore
   */
  init(t) {
    Yn.defaultOptions.bezierSmoothness = t?.bezierSmoothness ?? Yn.defaultOptions.bezierSmoothness;
  }
  /**
   * Returns the render data for a given GraphicsContext.
   * @param context - The GraphicsContext to get the render data for.
   * @internal
   */
  getContextRenderData(t) {
    return t._gpuData[this._renderer.uid].graphicsData || this._initContextRenderData(t);
  }
  /**
   * Updates the GPU context for a given GraphicsContext.
   * If the context is dirty, it will rebuild the batches and geometry data.
   * @param context - The GraphicsContext to update.
   * @returns The updated GpuGraphicsContext.
   * @internal
   */
  updateGpuContext(t) {
    const e = !!t._gpuData[this._renderer.uid], i = t._gpuData[this._renderer.uid] || this._initContext(t);
    if (t.dirty || !e) {
      e && i.reset(), Zg(t, i);
      const s = t.batchMode;
      t.customShader || s === "no-batch" ? i.isBatchable = !1 : s === "auto" ? i.isBatchable = i.geometryData.vertices.length < 400 : i.isBatchable = !0, t.dirty = !1;
    }
    return i;
  }
  /**
   * Returns the GpuGraphicsContext for a given GraphicsContext.
   * If it does not exist, it will initialize a new one.
   * @param context - The GraphicsContext to get the GpuGraphicsContext for.
   * @returns The GpuGraphicsContext for the given GraphicsContext.
   * @internal
   */
  getGpuContext(t) {
    return t._gpuData[this._renderer.uid] || this._initContext(t);
  }
  _initContextRenderData(t) {
    const e = re.get(em, {
      maxTextures: this._renderer.limits.maxBatchableTextures
    }), i = t._gpuData[this._renderer.uid], { batches: s, geometryData: n } = i;
    i.graphicsData = e;
    const a = n.vertices.length, o = n.indices.length;
    for (let u = 0; u < s.length; u++)
      s[u].applyTransform = !1;
    const h = e.batcher;
    h.ensureAttributeBuffer(a), h.ensureIndexBuffer(o), h.begin();
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      h.add(f);
    }
    h.finish(e.instructions);
    const l = h.geometry;
    l.indexBuffer.setDataWithSize(h.indexBuffer, h.indexSize, !0), l.buffers[0].setDataWithSize(h.attributeBuffer.float32View, h.attributeSize, !0);
    const c = h.batches;
    for (let u = 0; u < c.length; u++) {
      const f = c[u];
      f.bindGroup = Vp(
        f.textures.textures,
        f.textures.count,
        this._renderer.limits.maxBatchableTextures
      );
    }
    return e;
  }
  _initContext(t) {
    const e = new tm();
    return e.context = t, t._gpuData[this._renderer.uid] = e, this._managedContexts.add(t), e;
  }
  destroy() {
    this._managedContexts.destroy(), this._renderer = null;
  }
};
wa.extension = {
  type: [
    D.WebGLSystem,
    D.WebGPUSystem,
    D.CanvasSystem
  ],
  name: "graphicsContext"
};
wa.defaultOptions = {
  /**
   * A value from 0 to 1 that controls the smoothness of bezier curves (the higher the smoother)
   * @default 0.5
   */
  bezierSmoothness: 0.5
};
let Ec = wa;
const im = 8, Nr = 11920929e-14, rm = 1;
function Rc(r, t, e, i, s, n, a, o, h, l) {
  const u = Math.min(
    0.99,
    // a value of 1.0 actually inverts smoothing, so we cap it at 0.99
    Math.max(0, l ?? Ec.defaultOptions.bezierSmoothness)
  );
  let f = (rm - u) / 1;
  return f *= f, sm(t, e, i, s, n, a, o, h, r, f), r;
}
function sm(r, t, e, i, s, n, a, o, h, l) {
  $n(r, t, e, i, s, n, a, o, h, l, 0), h.push(a, o);
}
function $n(r, t, e, i, s, n, a, o, h, l, c) {
  if (c > im)
    return;
  const u = (r + e) / 2, f = (t + i) / 2, d = (e + s) / 2, g = (i + n) / 2, p = (s + a) / 2, m = (n + o) / 2, _ = (u + d) / 2, y = (f + g) / 2, x = (d + p) / 2, b = (g + m) / 2, v = (_ + x) / 2, A = (y + b) / 2;
  if (c > 0) {
    let S = a - r, C = o - t;
    const T = Math.abs((e - a) * C - (i - o) * S), P = Math.abs((s - a) * C - (n - o) * S);
    if (T > Nr && P > Nr) {
      if ((T + P) * (T + P) <= l * (S * S + C * C)) {
        h.push(v, A);
        return;
      }
    } else if (T > Nr) {
      if (T * T <= l * (S * S + C * C)) {
        h.push(v, A);
        return;
      }
    } else if (P > Nr) {
      if (P * P <= l * (S * S + C * C)) {
        h.push(v, A);
        return;
      }
    } else if (S = v - (r + a) / 2, C = A - (t + o) / 2, S * S + C * C <= l) {
      h.push(v, A);
      return;
    }
  }
  $n(r, t, u, f, _, y, v, A, h, l, c + 1), $n(v, A, x, b, p, m, a, o, h, l, c + 1);
}
const nm = 8, am = 11920929e-14, om = 1;
function hm(r, t, e, i, s, n, a, o) {
  const l = Math.min(
    0.99,
    // a value of 1.0 actually inverts smoothing, so we cap it at 0.99
    Math.max(0, o ?? Ec.defaultOptions.bezierSmoothness)
  );
  let c = (om - l) / 1;
  return c *= c, lm(t, e, i, s, n, a, r, c), r;
}
function lm(r, t, e, i, s, n, a, o) {
  jn(a, r, t, e, i, s, n, o, 0), a.push(s, n);
}
function jn(r, t, e, i, s, n, a, o, h) {
  if (h > nm)
    return;
  const l = (t + i) / 2, c = (e + s) / 2, u = (i + n) / 2, f = (s + a) / 2, d = (l + u) / 2, g = (c + f) / 2;
  let p = n - t, m = a - e;
  const _ = Math.abs((i - n) * m - (s - a) * p);
  if (_ > am) {
    if (_ * _ <= o * (p * p + m * m)) {
      r.push(d, g);
      return;
    }
  } else if (p = d - (t + n) / 2, m = g - (e + a) / 2, p * p + m * m <= o) {
    r.push(d, g);
    return;
  }
  jn(r, t, e, l, c, d, g, o, h + 1), jn(r, d, g, u, f, n, a, o, h + 1);
}
function Fc(r, t, e, i, s, n, a, o) {
  let h = Math.abs(s - n);
  (!a && s > n || a && n > s) && (h = 2 * Math.PI - h), o || (o = Math.max(6, Math.floor(6 * Math.pow(i, 1 / 3) * (h / Math.PI)))), o = Math.max(o, 3);
  let l = h / o, c = s;
  l *= a ? -1 : 1;
  for (let u = 0; u < o + 1; u++) {
    const f = Math.cos(c), d = Math.sin(c), g = t + f * i, p = e + d * i;
    r.push(g, p), c += l;
  }
}
function cm(r, t, e, i, s, n) {
  const a = r[r.length - 2], h = r[r.length - 1] - e, l = a - t, c = s - e, u = i - t, f = Math.abs(h * u - l * c);
  if (f < 1e-8 || n === 0) {
    (r[r.length - 2] !== t || r[r.length - 1] !== e) && r.push(t, e);
    return;
  }
  const d = h * h + l * l, g = c * c + u * u, p = h * c + l * u, m = n * Math.sqrt(d) / f, _ = n * Math.sqrt(g) / f, y = m * p / d, x = _ * p / g, b = m * u + _ * l, v = m * c + _ * h, A = l * (_ + y), S = h * (_ + y), C = u * (m + x), T = c * (m + x), P = Math.atan2(S - v, A - b), E = Math.atan2(T - v, C - b);
  Fc(
    r,
    b + t,
    v + e,
    n,
    P,
    E,
    l * c > u * h
  );
}
const lr = Math.PI * 2, sn = {
  centerX: 0,
  centerY: 0,
  ang1: 0,
  ang2: 0
}, nn = ({ x: r, y: t }, e, i, s, n, a, o, h) => {
  r *= e, t *= i;
  const l = s * r - n * t, c = n * r + s * t;
  return h.x = l + a, h.y = c + o, h;
};
function um(r, t) {
  const e = t === -1.5707963267948966 ? -0.551915024494 : 1.3333333333333333 * Math.tan(t / 4), i = t === 1.5707963267948966 ? 0.551915024494 : e, s = Math.cos(r), n = Math.sin(r), a = Math.cos(r + t), o = Math.sin(r + t);
  return [
    {
      x: s - n * i,
      y: n + s * i
    },
    {
      x: a + o * i,
      y: o - a * i
    },
    {
      x: a,
      y: o
    }
  ];
}
const Ko = (r, t, e, i) => {
  const s = r * i - t * e < 0 ? -1 : 1;
  let n = r * e + t * i;
  return n > 1 && (n = 1), n < -1 && (n = -1), s * Math.acos(n);
}, dm = (r, t, e, i, s, n, a, o, h, l, c, u, f) => {
  const d = Math.pow(s, 2), g = Math.pow(n, 2), p = Math.pow(c, 2), m = Math.pow(u, 2);
  let _ = d * g - d * m - g * p;
  _ < 0 && (_ = 0), _ /= d * m + g * p, _ = Math.sqrt(_) * (a === o ? -1 : 1);
  const y = _ * s / n * u, x = _ * -n / s * c, b = l * y - h * x + (r + e) / 2, v = h * y + l * x + (t + i) / 2, A = (c - y) / s, S = (u - x) / n, C = (-c - y) / s, T = (-u - x) / n, P = Ko(1, 0, A, S);
  let E = Ko(A, S, C, T);
  o === 0 && E > 0 && (E -= lr), o === 1 && E < 0 && (E += lr), f.centerX = b, f.centerY = v, f.ang1 = P, f.ang2 = E;
};
function fm(r, t, e, i, s, n, a, o = 0, h = 0, l = 0) {
  if (n === 0 || a === 0)
    return;
  const c = Math.sin(o * lr / 360), u = Math.cos(o * lr / 360), f = u * (t - i) / 2 + c * (e - s) / 2, d = -c * (t - i) / 2 + u * (e - s) / 2;
  if (f === 0 && d === 0)
    return;
  n = Math.abs(n), a = Math.abs(a);
  const g = Math.pow(f, 2) / Math.pow(n, 2) + Math.pow(d, 2) / Math.pow(a, 2);
  g > 1 && (n *= Math.sqrt(g), a *= Math.sqrt(g)), dm(
    t,
    e,
    i,
    s,
    n,
    a,
    h,
    l,
    c,
    u,
    f,
    d,
    sn
  );
  let { ang1: p, ang2: m } = sn;
  const { centerX: _, centerY: y } = sn;
  let x = Math.abs(m) / (lr / 4);
  Math.abs(1 - x) < 1e-7 && (x = 1);
  const b = Math.max(Math.ceil(x), 1);
  m /= b;
  let v = r[r.length - 2], A = r[r.length - 1];
  const S = { x: 0, y: 0 };
  for (let C = 0; C < b; C++) {
    const T = um(p, m), { x: P, y: E } = nn(T[0], n, a, u, c, _, y, S), { x: L, y: B } = nn(T[1], n, a, u, c, _, y, S), { x: G, y: I } = nn(T[2], n, a, u, c, _, y, S);
    Rc(
      r,
      v,
      A,
      P,
      E,
      L,
      B,
      G,
      I
    ), v = G, A = I, p += m;
  }
}
function pm(r, t, e) {
  const i = (a, o) => {
    const h = o.x - a.x, l = o.y - a.y, c = Math.sqrt(h * h + l * l), u = h / c, f = l / c;
    return { len: c, nx: u, ny: f };
  }, s = (a, o) => {
    a === 0 ? r.moveTo(o.x, o.y) : r.lineTo(o.x, o.y);
  };
  let n = t[t.length - 1];
  for (let a = 0; a < t.length; a++) {
    const o = t[a % t.length], h = o.radius ?? e;
    if (h <= 0) {
      s(a, o), n = o;
      continue;
    }
    const l = t[(a + 1) % t.length], c = i(o, n), u = i(o, l);
    if (c.len < 1e-4 || u.len < 1e-4) {
      s(a, o), n = o;
      continue;
    }
    let f = Math.asin(c.nx * u.ny - c.ny * u.nx), d = 1, g = !1;
    c.nx * u.nx - c.ny * -u.ny < 0 ? f < 0 ? f = Math.PI + f : (f = Math.PI - f, d = -1, g = !0) : f > 0 && (d = -1, g = !0);
    const p = f / 2;
    let m, _ = Math.abs(
      Math.cos(p) * h / Math.sin(p)
    );
    _ > Math.min(c.len / 2, u.len / 2) ? (_ = Math.min(c.len / 2, u.len / 2), m = Math.abs(_ * Math.sin(p) / Math.cos(p))) : m = h;
    const y = o.x + u.nx * _ + -u.ny * m * d, x = o.y + u.ny * _ + u.nx * m * d, b = Math.atan2(c.ny, c.nx) + Math.PI / 2 * d, v = Math.atan2(u.ny, u.nx) - Math.PI / 2 * d;
    a === 0 && r.moveTo(
      y + Math.cos(b) * m,
      x + Math.sin(b) * m
    ), r.arc(y, x, m, b, v, g), n = o;
  }
}
function gm(r, t, e, i) {
  const s = (o, h) => Math.sqrt((o.x - h.x) ** 2 + (o.y - h.y) ** 2), n = (o, h, l) => ({
    x: o.x + (h.x - o.x) * l,
    y: o.y + (h.y - o.y) * l
  }), a = t.length;
  for (let o = 0; o < a; o++) {
    const h = t[(o + 1) % a], l = h.radius ?? e;
    if (l <= 0) {
      o === 0 ? r.moveTo(h.x, h.y) : r.lineTo(h.x, h.y);
      continue;
    }
    const c = t[o], u = t[(o + 2) % a], f = s(c, h);
    let d;
    if (f < 1e-4)
      d = h;
    else {
      const m = Math.min(f / 2, l);
      d = n(
        h,
        c,
        m / f
      );
    }
    const g = s(u, h);
    let p;
    if (g < 1e-4)
      p = h;
    else {
      const m = Math.min(g / 2, l);
      p = n(
        h,
        u,
        m / g
      );
    }
    o === 0 ? r.moveTo(d.x, d.y) : r.lineTo(d.x, d.y), r.quadraticCurveTo(h.x, h.y, p.x, p.y, i);
  }
}
const mm = new _t();
class _m {
  constructor(t) {
    this.shapePrimitives = [], this._currentPoly = null, this._bounds = new ae(), this._graphicsPath2D = t, this.signed = t.checkForHoles;
  }
  /**
   * Sets the starting point for a new sub-path. Any subsequent drawing commands are considered part of this path.
   * @param x - The x-coordinate for the starting point.
   * @param y - The y-coordinate for the starting point.
   * @returns The instance of the current object for chaining.
   */
  moveTo(t, e) {
    return this.startPoly(t, e), this;
  }
  /**
   * Connects the current point to a new point with a straight line. This method updates the current path.
   * @param x - The x-coordinate of the new point to connect to.
   * @param y - The y-coordinate of the new point to connect to.
   * @returns The instance of the current object for chaining.
   */
  lineTo(t, e) {
    this._ensurePoly();
    const i = this._currentPoly.points, s = i[i.length - 2], n = i[i.length - 1];
    return (s !== t || n !== e) && i.push(t, e), this;
  }
  /**
   * Adds an arc to the path. The arc is centered at (x, y)
   *  position with radius `radius` starting at `startAngle` and ending at `endAngle`.
   * @param x - The x-coordinate of the arc's center.
   * @param y - The y-coordinate of the arc's center.
   * @param radius - The radius of the arc.
   * @param startAngle - The starting angle of the arc, in radians.
   * @param endAngle - The ending angle of the arc, in radians.
   * @param counterclockwise - Specifies whether the arc should be drawn in the anticlockwise direction. False by default.
   * @returns The instance of the current object for chaining.
   */
  arc(t, e, i, s, n, a) {
    this._ensurePoly(!1);
    const o = this._currentPoly.points;
    return Fc(o, t, e, i, s, n, a), this;
  }
  /**
   * Adds an arc to the path with the arc tangent to the line joining two specified points.
   * The arc radius is specified by `radius`.
   * @param x1 - The x-coordinate of the first point.
   * @param y1 - The y-coordinate of the first point.
   * @param x2 - The x-coordinate of the second point.
   * @param y2 - The y-coordinate of the second point.
   * @param radius - The radius of the arc.
   * @returns The instance of the current object for chaining.
   */
  arcTo(t, e, i, s, n) {
    this._ensurePoly();
    const a = this._currentPoly.points;
    return cm(a, t, e, i, s, n), this;
  }
  /**
   * Adds an SVG-style arc to the path, allowing for elliptical arcs based on the SVG spec.
   * @param rx - The x-radius of the ellipse.
   * @param ry - The y-radius of the ellipse.
   * @param xAxisRotation - The rotation of the ellipse's x-axis relative
   * to the x-axis of the coordinate system, in degrees.
   * @param largeArcFlag - Determines if the arc should be greater than or less than 180 degrees.
   * @param sweepFlag - Determines if the arc should be swept in a positive angle direction.
   * @param x - The x-coordinate of the arc's end point.
   * @param y - The y-coordinate of the arc's end point.
   * @returns The instance of the current object for chaining.
   */
  arcToSvg(t, e, i, s, n, a, o) {
    const h = this._currentPoly.points;
    return fm(
      h,
      this._currentPoly.lastX,
      this._currentPoly.lastY,
      a,
      o,
      t,
      e,
      i,
      s,
      n
    ), this;
  }
  /**
   * Adds a cubic Bezier curve to the path.
   * It requires three points: the first two are control points and the third one is the end point.
   * The starting point is the last point in the current path.
   * @param cp1x - The x-coordinate of the first control point.
   * @param cp1y - The y-coordinate of the first control point.
   * @param cp2x - The x-coordinate of the second control point.
   * @param cp2y - The y-coordinate of the second control point.
   * @param x - The x-coordinate of the end point.
   * @param y - The y-coordinate of the end point.
   * @param smoothness - Optional parameter to adjust the smoothness of the curve.
   * @returns The instance of the current object for chaining.
   */
  bezierCurveTo(t, e, i, s, n, a, o) {
    this._ensurePoly();
    const h = this._currentPoly;
    return Rc(
      this._currentPoly.points,
      h.lastX,
      h.lastY,
      t,
      e,
      i,
      s,
      n,
      a,
      o
    ), this;
  }
  /**
   * Adds a quadratic curve to the path. It requires two points: the control point and the end point.
   * The starting point is the last point in the current path.
   * @param cp1x - The x-coordinate of the control point.
   * @param cp1y - The y-coordinate of the control point.
   * @param x - The x-coordinate of the end point.
   * @param y - The y-coordinate of the end point.
   * @param smoothing - Optional parameter to adjust the smoothness of the curve.
   * @returns The instance of the current object for chaining.
   */
  quadraticCurveTo(t, e, i, s, n) {
    this._ensurePoly();
    const a = this._currentPoly;
    return hm(
      this._currentPoly.points,
      a.lastX,
      a.lastY,
      t,
      e,
      i,
      s,
      n
    ), this;
  }
  /**
   * Closes the current path by drawing a straight line back to the start.
   * If the shape is already closed or there are no points in the path, this method does nothing.
   * @returns The instance of the current object for chaining.
   */
  closePath() {
    return this.endPoly(!0), this;
  }
  /**
   * Adds another path to the current path. This method allows for the combination of multiple paths into one.
   * @param path - The `GraphicsPath` object representing the path to add.
   * @param transform - An optional `Matrix` object to apply a transformation to the path before adding it.
   * @returns The instance of the current object for chaining.
   */
  addPath(t, e) {
    this.endPoly(), e && !e.isIdentity() && (t = t.clone(!0), t.transform(e));
    const i = this.shapePrimitives, s = i.length;
    for (let n = 0; n < t.instructions.length; n++) {
      const a = t.instructions[n];
      this[a.action](...a.data);
    }
    if (t.checkForHoles && i.length - s > 1) {
      let n = null;
      for (let a = s; a < i.length; a++) {
        const o = i[a];
        if (o.shape.type === "polygon") {
          const h = o.shape, l = n?.shape;
          l && l.containsPolygon(h) ? (n.holes || (n.holes = []), n.holes.push(o), i.copyWithin(a, a + 1), i.length--, a--) : n = o;
        }
      }
    }
    return this;
  }
  /**
   * Finalizes the drawing of the current path. Optionally, it can close the path.
   * @param closePath - A boolean indicating whether to close the path after finishing. False by default.
   */
  finish(t = !1) {
    this.endPoly(t);
  }
  /**
   * Draws a rectangle shape. This method adds a new rectangle path to the current drawing.
   * @param x - The x-coordinate of the top-left corner of the rectangle.
   * @param y - The y-coordinate of the top-left corner of the rectangle.
   * @param w - The width of the rectangle.
   * @param h - The height of the rectangle.
   * @param transform - An optional `Matrix` object to apply a transformation to the rectangle.
   * @returns The instance of the current object for chaining.
   */
  rect(t, e, i, s, n) {
    return this.drawShape(new _t(t, e, i, s), n), this;
  }
  /**
   * Draws a circle shape. This method adds a new circle path to the current drawing.
   * @param x - The x-coordinate of the center of the circle.
   * @param y - The y-coordinate of the center of the circle.
   * @param radius - The radius of the circle.
   * @param transform - An optional `Matrix` object to apply a transformation to the circle.
   * @returns The instance of the current object for chaining.
   */
  circle(t, e, i, s) {
    return this.drawShape(new ya(t, e, i), s), this;
  }
  /**
   * Draws a polygon shape. This method allows for the creation of complex polygons by specifying a sequence of points.
   * @param points - An array of numbers, or or an array of PointData objects eg [{x,y}, {x,y}, {x,y}]
   * representing the x and y coordinates of the polygon's vertices, in sequence.
   * @param close - A boolean indicating whether to close the polygon path. True by default.
   * @param transform - An optional `Matrix` object to apply a transformation to the polygon.
   * @returns The instance of the current object for chaining.
   */
  poly(t, e, i) {
    const s = new or(t);
    return s.closePath = e, this.drawShape(s, i), this;
  }
  /**
   * Draws a regular polygon with a specified number of sides. All sides and angles are equal.
   * @param x - The x-coordinate of the center of the polygon.
   * @param y - The y-coordinate of the center of the polygon.
   * @param radius - The radius of the circumscribed circle of the polygon.
   * @param sides - The number of sides of the polygon. Must be 3 or more.
   * @param rotation - The rotation angle of the polygon, in radians. Zero by default.
   * @param transform - An optional `Matrix` object to apply a transformation to the polygon.
   * @returns The instance of the current object for chaining.
   */
  regularPoly(t, e, i, s, n = 0, a) {
    s = Math.max(s | 0, 3);
    const o = -1 * Math.PI / 2 + n, h = Math.PI * 2 / s, l = [];
    for (let c = 0; c < s; c++) {
      const u = o - c * h;
      l.push(
        t + i * Math.cos(u),
        e + i * Math.sin(u)
      );
    }
    return this.poly(l, !0, a), this;
  }
  /**
   * Draws a polygon with rounded corners.
   * Similar to `regularPoly` but with the ability to round the corners of the polygon.
   * @param x - The x-coordinate of the center of the polygon.
   * @param y - The y-coordinate of the center of the polygon.
   * @param radius - The radius of the circumscribed circle of the polygon.
   * @param sides - The number of sides of the polygon. Must be 3 or more.
   * @param corner - The radius of the rounding of the corners.
   * @param rotation - The rotation angle of the polygon, in radians. Zero by default.
   * @param smoothness - Optional parameter to adjust the smoothness of the rounding.
   * @returns The instance of the current object for chaining.
   */
  roundPoly(t, e, i, s, n, a = 0, o) {
    if (s = Math.max(s | 0, 3), n <= 0)
      return this.regularPoly(t, e, i, s, a);
    const h = i * Math.sin(Math.PI / s) - 1e-3;
    n = Math.min(n, h);
    const l = -1 * Math.PI / 2 + a, c = Math.PI * 2 / s, u = (s - 2) * Math.PI / s / 2;
    for (let f = 0; f < s; f++) {
      const d = f * c + l, g = t + i * Math.cos(d), p = e + i * Math.sin(d), m = d + Math.PI + u, _ = d - Math.PI - u, y = g + n * Math.cos(m), x = p + n * Math.sin(m), b = g + n * Math.cos(_), v = p + n * Math.sin(_);
      f === 0 ? this.moveTo(y, x) : this.lineTo(y, x), this.quadraticCurveTo(g, p, b, v, o);
    }
    return this.closePath();
  }
  /**
   * Draws a shape with rounded corners. This function supports custom radius for each corner of the shape.
   * Optionally, corners can be rounded using a quadratic curve instead of an arc, providing a different aesthetic.
   * @param points - An array of `RoundedPoint` representing the corners of the shape to draw.
   * A minimum of 3 points is required.
   * @param radius - The default radius for the corners.
   * This radius is applied to all corners unless overridden in `points`.
   * @param useQuadratic - If set to true, rounded corners are drawn using a quadraticCurve
   *  method instead of an arc method. Defaults to false.
   * @param smoothness - Specifies the smoothness of the curve when `useQuadratic` is true.
   * Higher values make the curve smoother.
   * @returns The instance of the current object for chaining.
   */
  roundShape(t, e, i = !1, s) {
    return t.length < 3 ? this : (i ? gm(this, t, e, s) : pm(this, t, e), this.closePath());
  }
  /**
   * Draw Rectangle with fillet corners. This is much like rounded rectangle
   * however it support negative numbers as well for the corner radius.
   * @param x - Upper left corner of rect
   * @param y - Upper right corner of rect
   * @param width - Width of rect
   * @param height - Height of rect
   * @param fillet - accept negative or positive values
   */
  filletRect(t, e, i, s, n) {
    if (n === 0)
      return this.rect(t, e, i, s);
    const a = Math.min(i, s) / 2, o = Math.min(a, Math.max(-a, n)), h = t + i, l = e + s, c = o < 0 ? -o : 0, u = Math.abs(o);
    return this.moveTo(t, e + u).arcTo(t + c, e + c, t + u, e, u).lineTo(h - u, e).arcTo(h - c, e + c, h, e + u, u).lineTo(h, l - u).arcTo(h - c, l - c, t + i - u, l, u).lineTo(t + u, l).arcTo(t + c, l - c, t, l - u, u).closePath();
  }
  /**
   * Draw Rectangle with chamfer corners. These are angled corners.
   * @param x - Upper left corner of rect
   * @param y - Upper right corner of rect
   * @param width - Width of rect
   * @param height - Height of rect
   * @param chamfer - non-zero real number, size of corner cutout
   * @param transform
   */
  chamferRect(t, e, i, s, n, a) {
    if (n <= 0)
      return this.rect(t, e, i, s);
    const o = Math.min(n, Math.min(i, s) / 2), h = t + i, l = e + s, c = [
      t + o,
      e,
      h - o,
      e,
      h,
      e + o,
      h,
      l - o,
      h - o,
      l,
      t + o,
      l,
      t,
      l - o,
      t,
      e + o
    ];
    for (let u = c.length - 1; u >= 2; u -= 2)
      c[u] === c[u - 2] && c[u - 1] === c[u - 3] && c.splice(u - 1, 2);
    return this.poly(c, !0, a);
  }
  /**
   * Draws an ellipse at the specified location and with the given x and y radii.
   * An optional transformation can be applied, allowing for rotation, scaling, and translation.
   * @param x - The x-coordinate of the center of the ellipse.
   * @param y - The y-coordinate of the center of the ellipse.
   * @param radiusX - The horizontal radius of the ellipse.
   * @param radiusY - The vertical radius of the ellipse.
   * @param transform - An optional `Matrix` object to apply a transformation to the ellipse. This can include rotations.
   * @returns The instance of the current object for chaining.
   */
  ellipse(t, e, i, s, n) {
    return this.drawShape(new xa(t, e, i, s), n), this;
  }
  /**
   * Draws a rectangle with rounded corners.
   * The corner radius can be specified to determine how rounded the corners should be.
   * An optional transformation can be applied, which allows for rotation, scaling, and translation of the rectangle.
   * @param x - The x-coordinate of the top-left corner of the rectangle.
   * @param y - The y-coordinate of the top-left corner of the rectangle.
   * @param w - The width of the rectangle.
   * @param h - The height of the rectangle.
   * @param radius - The radius of the rectangle's corners. If not specified, corners will be sharp.
   * @param transform - An optional `Matrix` object to apply a transformation to the rectangle.
   * @returns The instance of the current object for chaining.
   */
  roundRect(t, e, i, s, n, a) {
    return this.drawShape(new ba(t, e, i, s, n), a), this;
  }
  /**
   * Draws a given shape on the canvas.
   * This is a generic method that can draw any type of shape specified by the `ShapePrimitive` parameter.
   * An optional transformation matrix can be applied to the shape, allowing for complex transformations.
   * @param shape - The shape to draw, defined as a `ShapePrimitive` object.
   * @param matrix - An optional `Matrix` for transforming the shape. This can include rotations,
   * scaling, and translations.
   * @returns The instance of the current object for chaining.
   */
  drawShape(t, e) {
    return this.endPoly(), this.shapePrimitives.push({ shape: t, transform: e }), this;
  }
  /**
   * Starts a new polygon path from the specified starting point.
   * This method initializes a new polygon or ends the current one if it exists.
   * @param x - The x-coordinate of the starting point of the new polygon.
   * @param y - The y-coordinate of the starting point of the new polygon.
   * @returns The instance of the current object for chaining.
   */
  startPoly(t, e) {
    let i = this._currentPoly;
    return i && this.endPoly(), i = new or(), i.points.push(t, e), this._currentPoly = i, this;
  }
  /**
   * Ends the current polygon path. If `closePath` is set to true,
   * the path is closed by connecting the last point to the first one.
   * This method finalizes the current polygon and prepares it for drawing or adding to the shape primitives.
   * @param closePath - A boolean indicating whether to close the polygon by connecting the last point
   *  back to the starting point. False by default.
   * @returns The instance of the current object for chaining.
   */
  endPoly(t = !1) {
    const e = this._currentPoly;
    return e && e.points.length > 2 && (e.closePath = t, this.shapePrimitives.push({ shape: e })), this._currentPoly = null, this;
  }
  _ensurePoly(t = !0) {
    if (!this._currentPoly && (this._currentPoly = new or(), t)) {
      const e = this.shapePrimitives[this.shapePrimitives.length - 1];
      if (e) {
        let i = e.shape.x, s = e.shape.y;
        if (e.transform && !e.transform.isIdentity()) {
          const n = e.transform, a = i;
          i = n.a * i + n.c * s + n.tx, s = n.b * a + n.d * s + n.ty;
        }
        this._currentPoly.points.push(i, s);
      } else
        this._currentPoly.points.push(0, 0);
    }
  }
  /** Builds the path. */
  buildPath() {
    const t = this._graphicsPath2D;
    this.shapePrimitives.length = 0, this._currentPoly = null;
    for (let e = 0; e < t.instructions.length; e++) {
      const i = t.instructions[e];
      this[i.action](...i.data);
    }
    this.finish();
  }
  /** Gets the bounds of the path. */
  get bounds() {
    const t = this._bounds;
    t.clear();
    const e = this.shapePrimitives;
    for (let i = 0; i < e.length; i++) {
      const s = e[i], n = s.shape.getBounds(mm);
      s.transform ? t.addRect(n, s.transform) : t.addRect(n);
    }
    return t;
  }
}
class Pe {
  /**
   * Creates a `GraphicsPath` instance optionally from an SVG path string or an array of `PathInstruction`.
   * @param instructions - An SVG path string or an array of `PathInstruction` objects.
   * @param signed
   */
  constructor(t, e = !1) {
    this.instructions = [], this.uid = ft("graphicsPath"), this._dirty = !0, this.checkForHoles = e, typeof t == "string" ? Gp(t, this) : this.instructions = t?.slice() ?? [];
  }
  /**
   * Provides access to the internal shape path, ensuring it is up-to-date with the current instructions.
   * @returns The `ShapePath` instance associated with this `GraphicsPath`.
   */
  get shapePath() {
    return this._shapePath || (this._shapePath = new _m(this)), this._dirty && (this._dirty = !1, this._shapePath.buildPath()), this._shapePath;
  }
  /**
   * Adds another `GraphicsPath` to this path, optionally applying a transformation.
   * @param path - The `GraphicsPath` to add.
   * @param transform - An optional transformation to apply to the added path.
   * @returns The instance of the current object for chaining.
   */
  addPath(t, e) {
    return t = t.clone(), this.instructions.push({ action: "addPath", data: [t, e] }), this._dirty = !0, this;
  }
  arc(...t) {
    return this.instructions.push({ action: "arc", data: t }), this._dirty = !0, this;
  }
  arcTo(...t) {
    return this.instructions.push({ action: "arcTo", data: t }), this._dirty = !0, this;
  }
  arcToSvg(...t) {
    return this.instructions.push({ action: "arcToSvg", data: t }), this._dirty = !0, this;
  }
  bezierCurveTo(...t) {
    return this.instructions.push({ action: "bezierCurveTo", data: t }), this._dirty = !0, this;
  }
  /**
   * Adds a cubic Bezier curve to the path.
   * It requires two points: the second control point and the end point. The first control point is assumed to be
   * The starting point is the last point in the current path.
   * @param cp2x - The x-coordinate of the second control point.
   * @param cp2y - The y-coordinate of the second control point.
   * @param x - The x-coordinate of the end point.
   * @param y - The y-coordinate of the end point.
   * @param smoothness - Optional parameter to adjust the smoothness of the curve.
   * @returns The instance of the current object for chaining.
   */
  bezierCurveToShort(t, e, i, s, n) {
    const a = this.instructions[this.instructions.length - 1], o = this.getLastPoint(Pt.shared);
    let h = 0, l = 0;
    if (!a || a.action !== "bezierCurveTo")
      h = o.x, l = o.y;
    else {
      h = a.data[2], l = a.data[3];
      const c = o.x, u = o.y;
      h = c + (c - h), l = u + (u - l);
    }
    return this.instructions.push({ action: "bezierCurveTo", data: [h, l, t, e, i, s, n] }), this._dirty = !0, this;
  }
  /**
   * Closes the current path by drawing a straight line back to the start.
   * If the shape is already closed or there are no points in the path, this method does nothing.
   * @returns The instance of the current object for chaining.
   */
  closePath() {
    return this.instructions.push({ action: "closePath", data: [] }), this._dirty = !0, this;
  }
  ellipse(...t) {
    return this.instructions.push({ action: "ellipse", data: t }), this._dirty = !0, this;
  }
  lineTo(...t) {
    return this.instructions.push({ action: "lineTo", data: t }), this._dirty = !0, this;
  }
  moveTo(...t) {
    return this.instructions.push({ action: "moveTo", data: t }), this;
  }
  quadraticCurveTo(...t) {
    return this.instructions.push({ action: "quadraticCurveTo", data: t }), this._dirty = !0, this;
  }
  /**
   * Adds a quadratic curve to the path. It uses the previous point as the control point.
   * @param x - The x-coordinate of the end point.
   * @param y - The y-coordinate of the end point.
   * @param smoothness - Optional parameter to adjust the smoothness of the curve.
   * @returns The instance of the current object for chaining.
   */
  quadraticCurveToShort(t, e, i) {
    const s = this.instructions[this.instructions.length - 1], n = this.getLastPoint(Pt.shared);
    let a = 0, o = 0;
    if (!s || s.action !== "quadraticCurveTo")
      a = n.x, o = n.y;
    else {
      a = s.data[0], o = s.data[1];
      const h = n.x, l = n.y;
      a = h + (h - a), o = l + (l - o);
    }
    return this.instructions.push({ action: "quadraticCurveTo", data: [a, o, t, e, i] }), this._dirty = !0, this;
  }
  /**
   * Draws a rectangle shape. This method adds a new rectangle path to the current drawing.
   * @param x - The x-coordinate of the top-left corner of the rectangle.
   * @param y - The y-coordinate of the top-left corner of the rectangle.
   * @param w - The width of the rectangle.
   * @param h - The height of the rectangle.
   * @param transform - An optional `Matrix` object to apply a transformation to the rectangle.
   * @returns The instance of the current object for chaining.
   */
  rect(t, e, i, s, n) {
    return this.instructions.push({ action: "rect", data: [t, e, i, s, n] }), this._dirty = !0, this;
  }
  /**
   * Draws a circle shape. This method adds a new circle path to the current drawing.
   * @param x - The x-coordinate of the center of the circle.
   * @param y - The y-coordinate of the center of the circle.
   * @param radius - The radius of the circle.
   * @param transform - An optional `Matrix` object to apply a transformation to the circle.
   * @returns The instance of the current object for chaining.
   */
  circle(t, e, i, s) {
    return this.instructions.push({ action: "circle", data: [t, e, i, s] }), this._dirty = !0, this;
  }
  roundRect(...t) {
    return this.instructions.push({ action: "roundRect", data: t }), this._dirty = !0, this;
  }
  poly(...t) {
    return this.instructions.push({ action: "poly", data: t }), this._dirty = !0, this;
  }
  regularPoly(...t) {
    return this.instructions.push({ action: "regularPoly", data: t }), this._dirty = !0, this;
  }
  roundPoly(...t) {
    return this.instructions.push({ action: "roundPoly", data: t }), this._dirty = !0, this;
  }
  roundShape(...t) {
    return this.instructions.push({ action: "roundShape", data: t }), this._dirty = !0, this;
  }
  filletRect(...t) {
    return this.instructions.push({ action: "filletRect", data: t }), this._dirty = !0, this;
  }
  chamferRect(...t) {
    return this.instructions.push({ action: "chamferRect", data: t }), this._dirty = !0, this;
  }
  /**
   * Draws a star shape centered at a specified location. This method allows for the creation
   *  of stars with a variable number of points, outer radius, optional inner radius, and rotation.
   * The star is drawn as a closed polygon with alternating outer and inner vertices to create the star's points.
   * An optional transformation can be applied to scale, rotate, or translate the star as needed.
   * @param x - The x-coordinate of the center of the star.
   * @param y - The y-coordinate of the center of the star.
   * @param points - The number of points of the star.
   * @param radius - The outer radius of the star (distance from the center to the outer points).
   * @param innerRadius - Optional. The inner radius of the star
   * (distance from the center to the inner points between the outer points).
   * If not provided, defaults to half of the `radius`.
   * @param rotation - Optional. The rotation of the star in radians, where 0 is aligned with the y-axis.
   * Defaults to 0, meaning one point is directly upward.
   * @param transform - An optional `Matrix` object to apply a transformation to the star.
   * This can include rotations, scaling, and translations.
   * @returns The instance of the current object for chaining further drawing commands.
   */
  // eslint-disable-next-line max-len
  star(t, e, i, s, n, a, o) {
    n || (n = s / 2);
    const h = -1 * Math.PI / 2 + a, l = i * 2, c = Math.PI * 2 / l, u = [];
    for (let f = 0; f < l; f++) {
      const d = f % 2 ? n : s, g = f * c + h;
      u.push(
        t + d * Math.cos(g),
        e + d * Math.sin(g)
      );
    }
    return this.poly(u, !0, o), this;
  }
  /**
   * Creates a copy of the current `GraphicsPath` instance. This method supports both shallow and deep cloning.
   * A shallow clone copies the reference of the instructions array, while a deep clone creates a new array and
   * copies each instruction individually, ensuring that modifications to the instructions of the cloned `GraphicsPath`
   * do not affect the original `GraphicsPath` and vice versa.
   * @param deep - A boolean flag indicating whether the clone should be deep.
   * @returns A new `GraphicsPath` instance that is a clone of the current instance.
   */
  clone(t = !1) {
    const e = new Pe();
    if (e.checkForHoles = this.checkForHoles, !t)
      e.instructions = this.instructions.slice();
    else
      for (let i = 0; i < this.instructions.length; i++) {
        const s = this.instructions[i];
        e.instructions.push({ action: s.action, data: s.data.slice() });
      }
    return e;
  }
  clear() {
    return this.instructions.length = 0, this._dirty = !0, this;
  }
  /**
   * Applies a transformation matrix to all drawing instructions within the `GraphicsPath`.
   * This method enables the modification of the path's geometry according to the provided
   * transformation matrix, which can include translations, rotations, scaling, and skewing.
   *
   * Each drawing instruction in the path is updated to reflect the transformation,
   * ensuring the visual representation of the path is consistent with the applied matrix.
   *
   * Note: The transformation is applied directly to the coordinates and control points of the drawing instructions,
   * not to the path as a whole. This means the transformation's effects are baked into the individual instructions,
   * allowing for fine-grained control over the path's appearance.
   * @param matrix - A `Matrix` object representing the transformation to apply.
   * @returns The instance of the current object for chaining further operations.
   */
  transform(t) {
    if (t.isIdentity())
      return this;
    const e = t.a, i = t.b, s = t.c, n = t.d, a = t.tx, o = t.ty;
    let h = 0, l = 0, c = 0, u = 0, f = 0, d = 0, g = 0, p = 0;
    for (let m = 0; m < this.instructions.length; m++) {
      const _ = this.instructions[m], y = _.data;
      switch (_.action) {
        case "moveTo":
        case "lineTo":
          h = y[0], l = y[1], y[0] = e * h + s * l + a, y[1] = i * h + n * l + o;
          break;
        case "bezierCurveTo":
          c = y[0], u = y[1], f = y[2], d = y[3], h = y[4], l = y[5], y[0] = e * c + s * u + a, y[1] = i * c + n * u + o, y[2] = e * f + s * d + a, y[3] = i * f + n * d + o, y[4] = e * h + s * l + a, y[5] = i * h + n * l + o;
          break;
        case "quadraticCurveTo":
          c = y[0], u = y[1], h = y[2], l = y[3], y[0] = e * c + s * u + a, y[1] = i * c + n * u + o, y[2] = e * h + s * l + a, y[3] = i * h + n * l + o;
          break;
        case "arcToSvg":
          h = y[5], l = y[6], g = y[0], p = y[1], y[0] = e * g + s * p, y[1] = i * g + n * p, y[5] = e * h + s * l + a, y[6] = i * h + n * l + o;
          break;
        case "circle":
          y[4] = qi(y[3], t);
          break;
        case "rect":
          y[4] = qi(y[4], t);
          break;
        case "ellipse":
          y[8] = qi(y[8], t);
          break;
        case "roundRect":
          y[5] = qi(y[5], t);
          break;
        case "addPath":
          y[0].transform(t);
          break;
        case "poly":
          y[2] = qi(y[2], t);
          break;
        default:
          rt("unknown transform action", _.action);
          break;
      }
    }
    return this._dirty = !0, this;
  }
  get bounds() {
    return this.shapePath.bounds;
  }
  /**
   * Retrieves the last point from the current drawing instructions in the `GraphicsPath`.
   * This method is useful for operations that depend on the path's current endpoint,
   * such as connecting subsequent shapes or paths. It supports various drawing instructions,
   * ensuring the last point's position is accurately determined regardless of the path's complexity.
   *
   * If the last instruction is a `closePath`, the method iterates backward through the instructions
   *  until it finds an actionable instruction that defines a point (e.g., `moveTo`, `lineTo`,
   * `quadraticCurveTo`, etc.). For compound paths added via `addPath`, it recursively retrieves
   * the last point from the nested path.
   * @param out - A `Point` object where the last point's coordinates will be stored.
   * This object is modified directly to contain the result.
   * @returns The `Point` object containing the last point's coordinates.
   */
  getLastPoint(t) {
    let e = this.instructions.length - 1, i = this.instructions[e];
    if (!i)
      return t.x = 0, t.y = 0, t;
    for (; i.action === "closePath"; ) {
      if (e--, e < 0)
        return t.x = 0, t.y = 0, t;
      i = this.instructions[e];
    }
    switch (i.action) {
      case "moveTo":
      case "lineTo":
        t.x = i.data[0], t.y = i.data[1];
        break;
      case "quadraticCurveTo":
        t.x = i.data[2], t.y = i.data[3];
        break;
      case "bezierCurveTo":
        t.x = i.data[4], t.y = i.data[5];
        break;
      case "arc":
      case "arcToSvg":
        t.x = i.data[5], t.y = i.data[6];
        break;
      case "addPath":
        i.data[0].getLastPoint(t);
        break;
    }
    return t;
  }
}
function qi(r, t) {
  return r ? r.prepend(t) : t.clone();
}
function ut(r, t, e) {
  const i = r.getAttribute(t);
  return i ? Number(i) : e;
}
function ym(r, t) {
  const e = r.querySelectorAll("defs");
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    for (let n = 0; n < s.children.length; n++) {
      const a = s.children[n];
      switch (a.nodeName.toLowerCase()) {
        case "lineargradient":
          t.defs[a.id] = xm(a);
          break;
        case "radialgradient":
          t.defs[a.id] = bm();
          break;
      }
    }
  }
}
function xm(r) {
  const t = ut(r, "x1", 0), e = ut(r, "y1", 0), i = ut(r, "x2", 1), s = ut(r, "y2", 0), n = r.getAttribute("gradientUnits") || "objectBoundingBox", a = new Ee(
    t,
    e,
    i,
    s,
    n === "objectBoundingBox" ? "local" : "global"
  );
  for (let o = 0; o < r.children.length; o++) {
    const h = r.children[o], l = ut(h, "offset", 0), c = ct.shared.setValue(h.getAttribute("stop-color")).toNumber();
    a.addColorStop(l, c);
  }
  return a;
}
function bm(r) {
  return rt("[SVG Parser] Radial gradients are not yet supported"), new Ee(0, 0, 1, 0);
}
function Zo(r) {
  const t = r.match(/url\s*\(\s*['"]?\s*#([^'"\s)]+)\s*['"]?\s*\)/i);
  return t ? t[1] : "";
}
const Qo = {
  // Fill properties
  fill: { type: "paint", default: 0 },
  // Fill color/gradient
  "fill-opacity": { type: "number", default: 1 },
  // Fill transparency
  // Stroke properties
  stroke: { type: "paint", default: 0 },
  // Stroke color/gradient
  "stroke-width": { type: "number", default: 1 },
  // Width of stroke
  "stroke-opacity": { type: "number", default: 1 },
  // Stroke transparency
  "stroke-linecap": { type: "string", default: "butt" },
  // End cap style: butt, round, square
  "stroke-linejoin": { type: "string", default: "miter" },
  // Join style: miter, round, bevel
  "stroke-miterlimit": { type: "number", default: 10 },
  // Limit on miter join sharpness
  "stroke-dasharray": { type: "string", default: "none" },
  // Dash pattern
  "stroke-dashoffset": { type: "number", default: 0 },
  // Offset for dash pattern
  // Global properties
  opacity: { type: "number", default: 1 }
  // Overall opacity
};
function Ic(r, t) {
  const e = r.getAttribute("style"), i = {}, s = {}, n = {
    strokeStyle: i,
    fillStyle: s,
    useFill: !1,
    useStroke: !1
  };
  for (const a in Qo) {
    const o = r.getAttribute(a);
    o && Jo(t, n, a, o.trim());
  }
  if (e) {
    const a = e.split(";");
    for (let o = 0; o < a.length; o++) {
      const h = a[o].trim(), [l, c] = h.split(":");
      Qo[l] && Jo(t, n, l, c.trim());
    }
  }
  return {
    strokeStyle: n.useStroke ? i : null,
    fillStyle: n.useFill ? s : null,
    useFill: n.useFill,
    useStroke: n.useStroke
  };
}
function Jo(r, t, e, i) {
  switch (e) {
    case "stroke":
      if (i !== "none") {
        if (i.startsWith("url(")) {
          const s = Zo(i);
          t.strokeStyle.fill = r.defs[s];
        } else
          t.strokeStyle.color = ct.shared.setValue(i).toNumber();
        t.useStroke = !0;
      }
      break;
    case "stroke-width":
      t.strokeStyle.width = Number(i);
      break;
    case "fill":
      if (i !== "none") {
        if (i.startsWith("url(")) {
          const s = Zo(i);
          t.fillStyle.fill = r.defs[s];
        } else
          t.fillStyle.color = ct.shared.setValue(i).toNumber();
        t.useFill = !0;
      }
      break;
    case "fill-opacity":
      t.fillStyle.alpha = Number(i);
      break;
    case "stroke-opacity":
      t.strokeStyle.alpha = Number(i);
      break;
    case "opacity":
      t.fillStyle.alpha = Number(i), t.strokeStyle.alpha = Number(i);
      break;
  }
}
function wm(r) {
  if (r.length <= 2)
    return !0;
  const t = r.map((o) => o.area).sort((o, h) => h - o), [e, i] = t, s = t[t.length - 1], n = e / i, a = i / s;
  return !(n > 3 && a < 2);
}
function vm(r) {
  return r.split(/(?=[Mm])/).filter((i) => i.trim().length > 0);
}
function Sm(r) {
  const t = r.match(/[-+]?[0-9]*\.?[0-9]+/g);
  if (!t || t.length < 4)
    return 0;
  const e = t.map(Number), i = [], s = [];
  for (let c = 0; c < e.length; c += 2)
    c + 1 < e.length && (i.push(e[c]), s.push(e[c + 1]));
  if (i.length === 0 || s.length === 0)
    return 0;
  const n = Math.min(...i), a = Math.max(...i), o = Math.min(...s), h = Math.max(...s);
  return (a - n) * (h - o);
}
function th(r, t) {
  const e = new Pe(r, !1);
  for (const i of e.instructions)
    t.instructions.push(i);
}
function Am(r, t) {
  if (typeof r == "string") {
    const a = document.createElement("div");
    a.innerHTML = r.trim(), r = a.querySelector("svg");
  }
  const e = {
    context: t,
    defs: {},
    path: new Pe()
  };
  ym(r, e);
  const i = r.children, { fillStyle: s, strokeStyle: n } = Ic(r, e);
  for (let a = 0; a < i.length; a++) {
    const o = i[a];
    o.nodeName.toLowerCase() !== "defs" && Bc(o, e, s, n);
  }
  return t;
}
function Bc(r, t, e, i) {
  const s = r.children, { fillStyle: n, strokeStyle: a } = Ic(r, t);
  n && e ? e = { ...e, ...n } : n && (e = n), a && i ? i = { ...i, ...a } : a && (i = a);
  const o = !e && !i;
  o && (e = { color: 0 });
  let h, l, c, u, f, d, g, p, m, _, y, x, b, v, A, S, C;
  switch (r.nodeName.toLowerCase()) {
    case "path": {
      v = r.getAttribute("d");
      const T = r.getAttribute("fill-rule"), P = vm(v), E = T === "evenodd", L = P.length > 1;
      if (E && L) {
        const G = P.map((M) => ({
          path: M,
          area: Sm(M)
        }));
        if (G.sort((M, R) => R.area - M.area), P.length > 3 || !wm(G))
          for (let M = 0; M < G.length; M++) {
            const R = G[M], K = M === 0;
            t.context.beginPath();
            const z = new Pe(void 0, !0);
            th(R.path, z), t.context.path(z), K ? (e && t.context.fill(e), i && t.context.stroke(i)) : t.context.cut();
          }
        else
          for (let M = 0; M < G.length; M++) {
            const R = G[M], K = M % 2 === 1;
            t.context.beginPath();
            const z = new Pe(void 0, !0);
            th(R.path, z), t.context.path(z), K ? t.context.cut() : (e && t.context.fill(e), i && t.context.stroke(i));
          }
      } else {
        const G = T ? T === "evenodd" : !0;
        A = new Pe(v, G), t.context.path(A), e && t.context.fill(e), i && t.context.stroke(i);
      }
      break;
    }
    case "circle":
      g = ut(r, "cx", 0), p = ut(r, "cy", 0), m = ut(r, "r", 0), t.context.ellipse(g, p, m, m), e && t.context.fill(e), i && t.context.stroke(i);
      break;
    case "rect":
      h = ut(r, "x", 0), l = ut(r, "y", 0), S = ut(r, "width", 0), C = ut(r, "height", 0), _ = ut(r, "rx", 0), y = ut(r, "ry", 0), _ || y ? t.context.roundRect(h, l, S, C, _ || y) : t.context.rect(h, l, S, C), e && t.context.fill(e), i && t.context.stroke(i);
      break;
    case "ellipse":
      g = ut(r, "cx", 0), p = ut(r, "cy", 0), _ = ut(r, "rx", 0), y = ut(r, "ry", 0), t.context.beginPath(), t.context.ellipse(g, p, _, y), e && t.context.fill(e), i && t.context.stroke(i);
      break;
    case "line":
      c = ut(r, "x1", 0), u = ut(r, "y1", 0), f = ut(r, "x2", 0), d = ut(r, "y2", 0), t.context.beginPath(), t.context.moveTo(c, u), t.context.lineTo(f, d), i && t.context.stroke(i);
      break;
    case "polygon":
      b = r.getAttribute("points"), x = b.match(/-?\d+/g).map((T) => parseInt(T, 10)), t.context.poly(x, !0), e && t.context.fill(e), i && t.context.stroke(i);
      break;
    case "polyline":
      b = r.getAttribute("points"), x = b.match(/-?\d+/g).map((T) => parseInt(T, 10)), t.context.poly(x, !1), i && t.context.stroke(i);
      break;
    case "g":
    case "svg":
      break;
    default: {
      rt(`[SVG parser] <${r.nodeName}> elements unsupported`);
      break;
    }
  }
  o && (e = null);
  for (let T = 0; T < s.length; T++)
    Bc(s[T], t, e, i);
}
function Tm(r) {
  return ct.isColorLike(r);
}
function eh(r) {
  return r instanceof ms;
}
function ih(r) {
  return r instanceof Ee;
}
function Cm(r) {
  return r instanceof X;
}
function Pm(r, t, e) {
  const i = ct.shared.setValue(t ?? 0);
  return r.color = i.toNumber(), r.alpha = i.alpha === 1 ? e.alpha : i.alpha, r.texture = X.WHITE, { ...e, ...r };
}
function Mm(r, t, e) {
  return r.texture = t, { ...e, ...r };
}
function rh(r, t, e) {
  return r.fill = t, r.color = 16777215, r.texture = t.texture, r.matrix = t.transform, { ...e, ...r };
}
function sh(r, t, e) {
  return t.buildGradient(), r.fill = t, r.color = 16777215, r.texture = t.texture, r.matrix = t.transform, r.textureSpace = t.textureSpace, { ...e, ...r };
}
function km(r, t) {
  const e = { ...t, ...r }, i = ct.shared.setValue(e.color);
  return e.alpha *= i.alpha, e.color = i.toNumber(), e;
}
function ei(r, t) {
  if (r == null)
    return null;
  const e = {}, i = r;
  return Tm(r) ? Pm(e, r, t) : Cm(r) ? Mm(e, r, t) : eh(r) ? rh(e, r, t) : ih(r) ? sh(e, r, t) : i.fill && eh(i.fill) ? rh(i, i.fill, t) : i.fill && ih(i.fill) ? sh(i, i.fill, t) : km(i, t);
}
function hs(r, t) {
  const { width: e, alignment: i, miterLimit: s, cap: n, join: a, pixelLine: o, ...h } = t, l = ei(r, h);
  return l ? {
    width: e,
    alignment: i,
    miterLimit: s,
    cap: n,
    join: a,
    pixelLine: o,
    ...l
  } : null;
}
const Em = new Pt(), nh = new Y(), va = class de extends oe {
  constructor() {
    super(...arguments), this._gpuData = /* @__PURE__ */ Object.create(null), this.autoGarbageCollect = !0, this._gcLastUsed = -1, this.uid = ft("graphicsContext"), this.dirty = !0, this.batchMode = "auto", this.instructions = [], this.destroyed = !1, this._activePath = new Pe(), this._transform = new Y(), this._fillStyle = { ...de.defaultFillStyle }, this._strokeStyle = { ...de.defaultStrokeStyle }, this._stateStack = [], this._tick = 0, this._bounds = new ae(), this._boundsDirty = !0;
  }
  /**
   * Creates a new GraphicsContext object that is a clone of this instance, copying all properties,
   * including the current drawing state, transformations, styles, and instructions.
   * @returns A new GraphicsContext instance with the same properties and state as this one.
   */
  clone() {
    const t = new de();
    return t.batchMode = this.batchMode, t.instructions = this.instructions.slice(), t._activePath = this._activePath.clone(), t._transform = this._transform.clone(), t._fillStyle = { ...this._fillStyle }, t._strokeStyle = { ...this._strokeStyle }, t._stateStack = this._stateStack.slice(), t._bounds = this._bounds.clone(), t._boundsDirty = !0, t;
  }
  /**
   * The current fill style of the graphics context. This can be a color, gradient, pattern, or a more complex style defined by a FillStyle object.
   */
  get fillStyle() {
    return this._fillStyle;
  }
  set fillStyle(t) {
    this._fillStyle = ei(t, de.defaultFillStyle);
  }
  /**
   * The current stroke style of the graphics context. Similar to fill styles, stroke styles can encompass colors, gradients, patterns, or more detailed configurations via a StrokeStyle object.
   */
  get strokeStyle() {
    return this._strokeStyle;
  }
  set strokeStyle(t) {
    this._strokeStyle = hs(t, de.defaultStrokeStyle);
  }
  /**
   * Sets the current fill style of the graphics context. The fill style can be a color, gradient,
   * pattern, or a more complex style defined by a FillStyle object.
   * @param style - The fill style to apply. This can be a simple color, a gradient or pattern object,
   *                or a FillStyle or ConvertedFillStyle object.
   * @returns The instance of the current GraphicsContext for method chaining.
   */
  setFillStyle(t) {
    return this._fillStyle = ei(t, de.defaultFillStyle), this;
  }
  /**
   * Sets the current stroke style of the graphics context. Similar to fill styles, stroke styles can
   * encompass colors, gradients, patterns, or more detailed configurations via a StrokeStyle object.
   * @param style - The stroke style to apply. Can be defined as a color, a gradient or pattern,
   *                or a StrokeStyle or ConvertedStrokeStyle object.
   * @returns The instance of the current GraphicsContext for method chaining.
   */
  setStrokeStyle(t) {
    return this._strokeStyle = ei(t, de.defaultStrokeStyle), this;
  }
  texture(t, e, i, s, n, a) {
    return this.instructions.push({
      action: "texture",
      data: {
        image: t,
        dx: i || 0,
        dy: s || 0,
        dw: n || t.frame.width,
        dh: a || t.frame.height,
        transform: this._transform.clone(),
        alpha: this._fillStyle.alpha,
        style: e ? ct.shared.setValue(e).toNumber() : 16777215
      }
    }), this.onUpdate(), this;
  }
  /**
   * Resets the current path. Any previous path and its commands are discarded and a new path is
   * started. This is typically called before beginning a new shape or series of drawing commands.
   * @returns The instance of the current GraphicsContext for method chaining.
   */
  beginPath() {
    return this._activePath = new Pe(), this;
  }
  fill(t, e) {
    let i;
    const s = this.instructions[this.instructions.length - 1];
    return this._tick === 0 && s?.action === "stroke" ? i = s.data.path : i = this._activePath.clone(), i ? (t != null && (e !== void 0 && typeof t == "number" && (N(Z, "GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"), t = { color: t, alpha: e }), this._fillStyle = ei(t, de.defaultFillStyle)), this.instructions.push({
      action: "fill",
      // TODO copy fill style!
      data: { style: this.fillStyle, path: i }
    }), this.onUpdate(), this._initNextPathLocation(), this._tick = 0, this) : this;
  }
  _initNextPathLocation() {
    const { x: t, y: e } = this._activePath.getLastPoint(Pt.shared);
    this._activePath.clear(), this._activePath.moveTo(t, e);
  }
  /**
   * Strokes the current path with the current stroke style. This method can take an optional
   * FillInput parameter to define the stroke's appearance, including its color, width, and other properties.
   * @param style - (Optional) The stroke style to apply. Can be defined as a simple color or a more complex style object. If omitted, uses the current stroke style.
   * @returns The instance of the current GraphicsContext for method chaining.
   */
  stroke(t) {
    let e;
    const i = this.instructions[this.instructions.length - 1];
    return this._tick === 0 && i?.action === "fill" ? e = i.data.path : e = this._activePath.clone(), e ? (t != null && (this._strokeStyle = hs(t, de.defaultStrokeStyle)), this.instructions.push({
      action: "stroke",
      // TODO copy fill style!
      data: { style: this.strokeStyle, path: e }
    }), this.onUpdate(), this._initNextPathLocation(), this._tick = 0, this) : this;
  }
  /**
   * Applies a cutout to the last drawn shape. This is used to create holes or complex shapes by
   * subtracting a path from the previously drawn path. If a hole is not completely in a shape, it will
   * fail to cut correctly!
   * @returns The instance of the current GraphicsContext for method chaining.
   */
  cut() {
    for (let t = 0; t < 2; t++) {
      const e = this.instructions[this.instructions.length - 1 - t], i = this._activePath.clone();
      if (e && (e.action === "stroke" || e.action === "fill"))
        if (e.data.hole)
          e.data.hole.addPath(i);
        else {
          e.data.hole = i;
          break;
        }
    }
    return this._initNextPathLocation(), this;
  }
  /**
   * Adds an arc to the current path, which is centered at (x, y) with the specified radius,
   * starting and ending angles, and direction.
   * @param x - The x-coordinate of the arc's center.
   * @param y - The y-coordinate of the arc's center.
   * @param radius - The arc's radius.
   * @param startAngle - The starting angle, in radians.
   * @param endAngle - The ending angle, in radians.
   * @param counterclockwise - (Optional) Specifies whether the arc is drawn counterclockwise (true) or clockwise (false). Defaults to false.
   * @returns The instance of the current GraphicsContext for method chaining.
   */
  arc(t, e, i, s, n, a) {
    this._tick++;
    const o = this._transform;
    return this._activePath.arc(
      o.a * t + o.c * e + o.tx,
      o.b * t + o.d * e + o.ty,
      i,
      s,
      n,
      a
    ), this;
  }
  /**
   * Adds an arc to the current path with the given control points and radius, connected to the previous point
   * by a straight line if necessary.
   * @param x1 - The x-coordinate of the first control point.
   * @param y1 - The y-coordinate of the first control point.
   * @param x2 - The x-coordinate of the second control point.
   * @param y2 - The y-coordinate of the second control point.
   * @param radius - The arc's radius.
   * @returns The instance of the current GraphicsContext for method chaining.
   */
  arcTo(t, e, i, s, n) {
    this._tick++;
    const a = this._transform;
    return this._activePath.arcTo(
      a.a * t + a.c * e + a.tx,
      a.b * t + a.d * e + a.ty,
      a.a * i + a.c * s + a.tx,
      a.b * i + a.d * s + a.ty,
      n
    ), this;
  }
  /**
   * Adds an SVG-style arc to the path, allowing for elliptical arcs based on the SVG spec.
   * @param rx - The x-radius of the ellipse.
   * @param ry - The y-radius of the ellipse.
   * @param xAxisRotation - The rotation of the ellipse's x-axis relative
   * to the x-axis of the coordinate system, in degrees.
   * @param largeArcFlag - Determines if the arc should be greater than or less than 180 degrees.
   * @param sweepFlag - Determines if the arc should be swept in a positive angle direction.
   * @param x - The x-coordinate of the arc's end point.
   * @param y - The y-coordinate of the arc's end point.
   * @returns The instance of the current object for chaining.
   */
  arcToSvg(t, e, i, s, n, a, o) {
    this._tick++;
    const h = this._transform;
    return this._activePath.arcToSvg(
      t,
      e,
      i,
      // should we rotate this with transform??
      s,
      n,
      h.a * a + h.c * o + h.tx,
      h.b * a + h.d * o + h.ty
    ), this;
  }
  /**
   * Adds a cubic Bezier curve to the path.
   * It requires three points: the first two are control points and the third one is the end point.
   * The starting point is the last point in the current path.
   * @param cp1x - The x-coordinate of the first control point.
   * @param cp1y - The y-coordinate of the first control point.
   * @param cp2x - The x-coordinate of the second control point.
   * @param cp2y - The y-coordinate of the second control point.
   * @param x - The x-coordinate of the end point.
   * @param y - The y-coordinate of the end point.
   * @param smoothness - Optional parameter to adjust the smoothness of the curve.
   * @returns The instance of the current object for chaining.
   */
  bezierCurveTo(t, e, i, s, n, a, o) {
    this._tick++;
    const h = this._transform;
    return this._activePath.bezierCurveTo(
      h.a * t + h.c * e + h.tx,
      h.b * t + h.d * e + h.ty,
      h.a * i + h.c * s + h.tx,
      h.b * i + h.d * s + h.ty,
      h.a * n + h.c * a + h.tx,
      h.b * n + h.d * a + h.ty,
      o
    ), this;
  }
  /**
   * Closes the current path by drawing a straight line back to the start.
   * If the shape is already closed or there are no points in the path, this method does nothing.
   * @returns The instance of the current object for chaining.
   */
  closePath() {
    return this._tick++, this._activePath?.closePath(), this;
  }
  /**
   * Draws an ellipse at the specified location and with the given x and y radii.
   * An optional transformation can be applied, allowing for rotation, scaling, and translation.
   * @param x - The x-coordinate of the center of the ellipse.
   * @param y - The y-coordinate of the center of the ellipse.
   * @param radiusX - The horizontal radius of the ellipse.
   * @param radiusY - The vertical radius of the ellipse.
   * @returns The instance of the current object for chaining.
   */
  ellipse(t, e, i, s) {
    return this._tick++, this._activePath.ellipse(t, e, i, s, this._transform.clone()), this;
  }
  /**
   * Draws a circle shape. This method adds a new circle path to the current drawing.
   * @param x - The x-coordinate of the center of the circle.
   * @param y - The y-coordinate of the center of the circle.
   * @param radius - The radius of the circle.
   * @returns The instance of the current object for chaining.
   */
  circle(t, e, i) {
    return this._tick++, this._activePath.circle(t, e, i, this._transform.clone()), this;
  }
  /**
   * Adds another `GraphicsPath` to this path, optionally applying a transformation.
   * @param path - The `GraphicsPath` to add.
   * @returns The instance of the current object for chaining.
   */
  path(t) {
    return this._tick++, this._activePath.addPath(t, this._transform.clone()), this;
  }
  /**
   * Connects the current point to a new point with a straight line. This method updates the current path.
   * @param x - The x-coordinate of the new point to connect to.
   * @param y - The y-coordinate of the new point to connect to.
   * @returns The instance of the current object for chaining.
   */
  lineTo(t, e) {
    this._tick++;
    const i = this._transform;
    return this._activePath.lineTo(
      i.a * t + i.c * e + i.tx,
      i.b * t + i.d * e + i.ty
    ), this;
  }
  /**
   * Sets the starting point for a new sub-path. Any subsequent drawing commands are considered part of this path.
   * @param x - The x-coordinate for the starting point.
   * @param y - The y-coordinate for the starting point.
   * @returns The instance of the current object for chaining.
   */
  moveTo(t, e) {
    this._tick++;
    const i = this._transform, s = this._activePath.instructions, n = i.a * t + i.c * e + i.tx, a = i.b * t + i.d * e + i.ty;
    return s.length === 1 && s[0].action === "moveTo" ? (s[0].data[0] = n, s[0].data[1] = a, this) : (this._activePath.moveTo(
      n,
      a
    ), this);
  }
  /**
   * Adds a quadratic curve to the path. It requires two points: the control point and the end point.
   * The starting point is the last point in the current path.
   * @param cpx - The x-coordinate of the control point.
   * @param cpy - The y-coordinate of the control point.
   * @param x - The x-coordinate of the end point.
   * @param y - The y-coordinate of the end point.
   * @param smoothness - Optional parameter to adjust the smoothness of the curve.
   * @returns The instance of the current object for chaining.
   */
  quadraticCurveTo(t, e, i, s, n) {
    this._tick++;
    const a = this._transform;
    return this._activePath.quadraticCurveTo(
      a.a * t + a.c * e + a.tx,
      a.b * t + a.d * e + a.ty,
      a.a * i + a.c * s + a.tx,
      a.b * i + a.d * s + a.ty,
      n
    ), this;
  }
  /**
   * Draws a rectangle shape. This method adds a new rectangle path to the current drawing.
   * @param x - The x-coordinate of the top-left corner of the rectangle.
   * @param y - The y-coordinate of the top-left corner of the rectangle.
   * @param w - The width of the rectangle.
   * @param h - The height of the rectangle.
   * @returns The instance of the current object for chaining.
   */
  rect(t, e, i, s) {
    return this._tick++, this._activePath.rect(t, e, i, s, this._transform.clone()), this;
  }
  /**
   * Draws a rectangle with rounded corners.
   * The corner radius can be specified to determine how rounded the corners should be.
   * An optional transformation can be applied, which allows for rotation, scaling, and translation of the rectangle.
   * @param x - The x-coordinate of the top-left corner of the rectangle.
   * @param y - The y-coordinate of the top-left corner of the rectangle.
   * @param w - The width of the rectangle.
   * @param h - The height of the rectangle.
   * @param radius - The radius of the rectangle's corners. If not specified, corners will be sharp.
   * @returns The instance of the current object for chaining.
   */
  roundRect(t, e, i, s, n) {
    return this._tick++, this._activePath.roundRect(t, e, i, s, n, this._transform.clone()), this;
  }
  /**
   * Draws a polygon shape by specifying a sequence of points. This method allows for the creation of complex polygons,
   * which can be both open and closed. An optional transformation can be applied, enabling the polygon to be scaled,
   * rotated, or translated as needed.
   * @param points - An array of numbers, or an array of PointData objects eg [{x,y}, {x,y}, {x,y}]
   * representing the x and y coordinates, of the polygon's vertices, in sequence.
   * @param close - A boolean indicating whether to close the polygon path. True by default.
   */
  poly(t, e) {
    return this._tick++, this._activePath.poly(t, e, this._transform.clone()), this;
  }
  /**
   * Draws a regular polygon with a specified number of sides. All sides and angles are equal.
   * @param x - The x-coordinate of the center of the polygon.
   * @param y - The y-coordinate of the center of the polygon.
   * @param radius - The radius of the circumscribed circle of the polygon.
   * @param sides - The number of sides of the polygon. Must be 3 or more.
   * @param rotation - The rotation angle of the polygon, in radians. Zero by default.
   * @param transform - An optional `Matrix` object to apply a transformation to the polygon.
   * @returns The instance of the current object for chaining.
   */
  regularPoly(t, e, i, s, n = 0, a) {
    return this._tick++, this._activePath.regularPoly(t, e, i, s, n, a), this;
  }
  /**
   * Draws a polygon with rounded corners.
   * Similar to `regularPoly` but with the ability to round the corners of the polygon.
   * @param x - The x-coordinate of the center of the polygon.
   * @param y - The y-coordinate of the center of the polygon.
   * @param radius - The radius of the circumscribed circle of the polygon.
   * @param sides - The number of sides of the polygon. Must be 3 or more.
   * @param corner - The radius of the rounding of the corners.
   * @param rotation - The rotation angle of the polygon, in radians. Zero by default.
   * @returns The instance of the current object for chaining.
   */
  roundPoly(t, e, i, s, n, a) {
    return this._tick++, this._activePath.roundPoly(t, e, i, s, n, a), this;
  }
  /**
   * Draws a shape with rounded corners. This function supports custom radius for each corner of the shape.
   * Optionally, corners can be rounded using a quadratic curve instead of an arc, providing a different aesthetic.
   * @param points - An array of `RoundedPoint` representing the corners of the shape to draw.
   * A minimum of 3 points is required.
   * @param radius - The default radius for the corners.
   * This radius is applied to all corners unless overridden in `points`.
   * @param useQuadratic - If set to true, rounded corners are drawn using a quadraticCurve
   *  method instead of an arc method. Defaults to false.
   * @param smoothness - Specifies the smoothness of the curve when `useQuadratic` is true.
   * Higher values make the curve smoother.
   * @returns The instance of the current object for chaining.
   */
  roundShape(t, e, i, s) {
    return this._tick++, this._activePath.roundShape(t, e, i, s), this;
  }
  /**
   * Draw Rectangle with fillet corners. This is much like rounded rectangle
   * however it support negative numbers as well for the corner radius.
   * @param x - Upper left corner of rect
   * @param y - Upper right corner of rect
   * @param width - Width of rect
   * @param height - Height of rect
   * @param fillet - accept negative or positive values
   */
  filletRect(t, e, i, s, n) {
    return this._tick++, this._activePath.filletRect(t, e, i, s, n), this;
  }
  /**
   * Draw Rectangle with chamfer corners. These are angled corners.
   * @param x - Upper left corner of rect
   * @param y - Upper right corner of rect
   * @param width - Width of rect
   * @param height - Height of rect
   * @param chamfer - non-zero real number, size of corner cutout
   * @param transform
   */
  chamferRect(t, e, i, s, n, a) {
    return this._tick++, this._activePath.chamferRect(t, e, i, s, n, a), this;
  }
  /**
   * Draws a star shape centered at a specified location. This method allows for the creation
   *  of stars with a variable number of points, outer radius, optional inner radius, and rotation.
   * The star is drawn as a closed polygon with alternating outer and inner vertices to create the star's points.
   * An optional transformation can be applied to scale, rotate, or translate the star as needed.
   * @param x - The x-coordinate of the center of the star.
   * @param y - The y-coordinate of the center of the star.
   * @param points - The number of points of the star.
   * @param radius - The outer radius of the star (distance from the center to the outer points).
   * @param innerRadius - Optional. The inner radius of the star
   * (distance from the center to the inner points between the outer points).
   * If not provided, defaults to half of the `radius`.
   * @param rotation - Optional. The rotation of the star in radians, where 0 is aligned with the y-axis.
   * Defaults to 0, meaning one point is directly upward.
   * @returns The instance of the current object for chaining further drawing commands.
   */
  star(t, e, i, s, n = 0, a = 0) {
    return this._tick++, this._activePath.star(t, e, i, s, n, a, this._transform.clone()), this;
  }
  /**
   * Parses and renders an SVG string into the graphics context. This allows for complex shapes and paths
   * defined in SVG format to be drawn within the graphics context.
   * @param svg - The SVG string to be parsed and rendered.
   */
  svg(t) {
    return this._tick++, Am(t, this), this;
  }
  /**
   * Restores the most recently saved graphics state by popping the top of the graphics state stack.
   * This includes transformations, fill styles, and stroke styles.
   */
  restore() {
    const t = this._stateStack.pop();
    return t && (this._transform = t.transform, this._fillStyle = t.fillStyle, this._strokeStyle = t.strokeStyle), this;
  }
  /** Saves the current graphics state, including transformations, fill styles, and stroke styles, onto a stack. */
  save() {
    return this._stateStack.push({
      transform: this._transform.clone(),
      fillStyle: { ...this._fillStyle },
      strokeStyle: { ...this._strokeStyle }
    }), this;
  }
  /**
   * Returns the current transformation matrix of the graphics context.
   * @returns The current transformation matrix.
   */
  getTransform() {
    return this._transform;
  }
  /**
   * Resets the current transformation matrix to the identity matrix, effectively removing any transformations (rotation, scaling, translation) previously applied.
   * @returns The instance of the current GraphicsContext for method chaining.
   */
  resetTransform() {
    return this._transform.identity(), this;
  }
  /**
   * Applies a rotation transformation to the graphics context around the current origin.
   * @param angle - The angle of rotation in radians.
   * @returns The instance of the current GraphicsContext for method chaining.
   */
  rotate(t) {
    return this._transform.rotate(t), this;
  }
  /**
   * Applies a scaling transformation to the graphics context, scaling drawings by x horizontally and by y vertically.
   * @param x - The scale factor in the horizontal direction.
   * @param y - (Optional) The scale factor in the vertical direction. If not specified, the x value is used for both directions.
   * @returns The instance of the current GraphicsContext for method chaining.
   */
  scale(t, e = t) {
    return this._transform.scale(t, e), this;
  }
  setTransform(t, e, i, s, n, a) {
    return t instanceof Y ? (this._transform.set(t.a, t.b, t.c, t.d, t.tx, t.ty), this) : (this._transform.set(t, e, i, s, n, a), this);
  }
  transform(t, e, i, s, n, a) {
    return t instanceof Y ? (this._transform.append(t), this) : (nh.set(t, e, i, s, n, a), this._transform.append(nh), this);
  }
  /**
   * Applies a translation transformation to the graphics context, moving the origin by the specified amounts.
   * @param x - The amount to translate in the horizontal direction.
   * @param y - (Optional) The amount to translate in the vertical direction. If not specified, the x value is used for both directions.
   * @returns The instance of the current GraphicsContext for method chaining.
   */
  translate(t, e = t) {
    return this._transform.translate(t, e), this;
  }
  /**
   * Clears all drawing commands from the graphics context, effectively resetting it. This includes clearing the path,
   * and optionally resetting transformations to the identity matrix.
   * @returns The instance of the current GraphicsContext for method chaining.
   */
  clear() {
    return this._activePath.clear(), this.instructions.length = 0, this.resetTransform(), this.onUpdate(), this;
  }
  onUpdate() {
    this._boundsDirty = !0, !this.dirty && (this.emit("update", this, 16), this.dirty = !0);
  }
  /** The bounds of the graphic shape. */
  get bounds() {
    if (!this._boundsDirty)
      return this._bounds;
    this._boundsDirty = !1;
    const t = this._bounds;
    t.clear();
    for (let e = 0; e < this.instructions.length; e++) {
      const i = this.instructions[e], s = i.action;
      if (s === "fill") {
        const n = i.data;
        t.addBounds(n.path.bounds);
      } else if (s === "texture") {
        const n = i.data;
        t.addFrame(n.dx, n.dy, n.dx + n.dw, n.dy + n.dh, n.transform);
      }
      if (s === "stroke") {
        const n = i.data, a = n.style.alignment, o = n.style.width * (1 - a), h = n.path.bounds;
        t.addFrame(
          h.minX - o,
          h.minY - o,
          h.maxX + o,
          h.maxY + o
        );
      }
    }
    return t;
  }
  /**
   * Check to see if a point is contained within this geometry.
   * @param point - Point to check if it's contained.
   * @returns {boolean} `true` if the point is contained within geometry.
   */
  containsPoint(t) {
    if (!this.bounds.containsPoint(t.x, t.y))
      return !1;
    const e = this.instructions;
    let i = !1;
    for (let s = 0; s < e.length; s++) {
      const n = e[s], a = n.data, o = a.path;
      if (!n.action || !o)
        continue;
      const h = a.style, l = o.shapePath.shapePrimitives;
      for (let c = 0; c < l.length; c++) {
        const u = l[c].shape;
        if (!h || !u)
          continue;
        const f = l[c].transform, d = f ? f.applyInverse(t, Em) : t;
        if (n.action === "fill")
          i = u.contains(d.x, d.y);
        else {
          const p = h;
          i = u.strokeContains(d.x, d.y, p.width, p.alignment);
        }
        const g = a.hole;
        if (g) {
          const p = g.shapePath?.shapePrimitives;
          if (p)
            for (let m = 0; m < p.length; m++)
              p[m].shape.contains(d.x, d.y) && (i = !1);
        }
        if (i)
          return !0;
      }
    }
    return i;
  }
  /** Unloads the GPU data from the graphics context. */
  unload() {
    this.emit("unload", this);
    for (const t in this._gpuData)
      this._gpuData[t]?.destroy();
    this._gpuData = /* @__PURE__ */ Object.create(null);
  }
  /**
   * Destroys the GraphicsData object.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @example
   * context.destroy();
   * context.destroy(true);
   * context.destroy({ texture: true, textureSource: true });
   */
  destroy(t = !1) {
    if (this.destroyed)
      return;
    if (this.destroyed = !0, this._stateStack.length = 0, this._transform = null, this.unload(), this.emit("destroy", this), this.removeAllListeners(), typeof t == "boolean" ? t : t?.texture) {
      const i = typeof t == "boolean" ? t : t?.textureSource;
      this._fillStyle.texture && (this._fillStyle.fill && "uid" in this._fillStyle.fill ? this._fillStyle.fill.destroy() : this._fillStyle.texture.destroy(i)), this._strokeStyle.texture && (this._strokeStyle.fill && "uid" in this._strokeStyle.fill ? this._strokeStyle.fill.destroy() : this._strokeStyle.texture.destroy(i));
    }
    this._fillStyle = null, this._strokeStyle = null, this.instructions = null, this._activePath = null, this._bounds = null, this._stateStack = null, this.customShader = null, this._transform = null;
  }
};
va.defaultFillStyle = {
  /** The color to use for the fill. */
  color: 16777215,
  /** The alpha value to use for the fill. */
  alpha: 1,
  /** The texture to use for the fill. */
  texture: X.WHITE,
  /** The matrix to apply. */
  matrix: null,
  /** The fill pattern to use. */
  fill: null,
  /** Whether coordinates are 'global' or 'local' */
  textureSpace: "local"
};
va.defaultStrokeStyle = {
  /** The width of the stroke. */
  width: 1,
  /** The color to use for the stroke. */
  color: 16777215,
  /** The alpha value to use for the stroke. */
  alpha: 1,
  /** The alignment of the stroke. */
  alignment: 0.5,
  /** The miter limit to use. */
  miterLimit: 10,
  /** The line cap style to use. */
  cap: "butt",
  /** The line join style to use. */
  join: "miter",
  /** The texture to use for the fill. */
  texture: X.WHITE,
  /** The matrix to apply. */
  matrix: null,
  /** The fill pattern to use. */
  fill: null,
  /** Whether coordinates are 'global' or 'local' */
  textureSpace: "local",
  /** If the stroke is a pixel line. */
  pixelLine: !1
};
let Jt = va;
const Sa = class gi extends oe {
  constructor(t = {}) {
    super(), this.uid = ft("textStyle"), this._tick = 0, Rm(t);
    const e = { ...gi.defaultTextStyle, ...t };
    for (const i in e) {
      const s = i;
      this[s] = e[i];
    }
    this.update(), this._tick = 0;
  }
  /**
   * Alignment for multiline text, does not affect single line text.
   * @type {'left'|'center'|'right'|'justify'}
   */
  get align() {
    return this._align;
  }
  set align(t) {
    this._align !== t && (this._align = t, this.update());
  }
  /** Indicates if lines can be wrapped within words, it needs wordWrap to be set to true. */
  get breakWords() {
    return this._breakWords;
  }
  set breakWords(t) {
    this._breakWords !== t && (this._breakWords = t, this.update());
  }
  /** Set a drop shadow for the text. */
  get dropShadow() {
    return this._dropShadow;
  }
  set dropShadow(t) {
    this._dropShadow !== t && (t !== null && typeof t == "object" ? this._dropShadow = this._createProxy({ ...gi.defaultDropShadow, ...t }) : this._dropShadow = t ? this._createProxy({ ...gi.defaultDropShadow }) : null, this.update());
  }
  /** The font family, can be a single font name, or a list of names where the first is the preferred font. */
  get fontFamily() {
    return this._fontFamily;
  }
  set fontFamily(t) {
    this._fontFamily !== t && (this._fontFamily = t, this.update());
  }
  /** The font size (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em') */
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(t) {
    this._fontSize !== t && (typeof t == "string" ? this._fontSize = parseInt(t, 10) : this._fontSize = t, this.update());
  }
  /**
   * The font style.
   * @type {'normal'|'italic'|'oblique'}
   */
  get fontStyle() {
    return this._fontStyle;
  }
  set fontStyle(t) {
    this._fontStyle !== t && (this._fontStyle = t.toLowerCase(), this.update());
  }
  /**
   * The font variant.
   * @type {'normal'|'small-caps'}
   */
  get fontVariant() {
    return this._fontVariant;
  }
  set fontVariant(t) {
    this._fontVariant !== t && (this._fontVariant = t, this.update());
  }
  /**
   * The font weight.
   * @type {'normal'|'bold'|'bolder'|'lighter'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'}
   */
  get fontWeight() {
    return this._fontWeight;
  }
  set fontWeight(t) {
    this._fontWeight !== t && (this._fontWeight = t, this.update());
  }
  /** The space between lines. */
  get leading() {
    return this._leading;
  }
  set leading(t) {
    this._leading !== t && (this._leading = t, this.update());
  }
  /** The amount of spacing between letters, default is 0. */
  get letterSpacing() {
    return this._letterSpacing;
  }
  set letterSpacing(t) {
    this._letterSpacing !== t && (this._letterSpacing = t, this.update());
  }
  /** The line height, a number that represents the vertical space that a letter uses. */
  get lineHeight() {
    return this._lineHeight;
  }
  set lineHeight(t) {
    this._lineHeight !== t && (this._lineHeight = t, this.update());
  }
  /**
   * Occasionally some fonts are cropped. Adding some padding will prevent this from happening
   * by adding padding to all sides of the text.
   * > [!NOTE] This will NOT affect the positioning or bounds of the text.
   */
  get padding() {
    return this._padding;
  }
  set padding(t) {
    this._padding !== t && (this._padding = t, this.update());
  }
  /**
   * An optional filter or array of filters to apply to the text, allowing for advanced visual effects.
   * These filters will be applied to the text as it is created, resulting in faster rendering for static text
   * compared to applying the filter directly to the text object (which would be applied at run time).
   * @default null
   */
  get filters() {
    return this._filters;
  }
  set filters(t) {
    this._filters !== t && (this._filters = Object.freeze(t), this.update());
  }
  /**
   * Trim transparent borders from the text texture.
   * > [!IMPORTANT] PERFORMANCE WARNING:
   * > This is a costly operation as it requires scanning pixel alpha values.
   * > Avoid using `trim: true` for dynamic text, as it could significantly impact performance.
   */
  get trim() {
    return this._trim;
  }
  set trim(t) {
    this._trim !== t && (this._trim = t, this.update());
  }
  /**
   * The baseline of the text that is rendered.
   * @type {'alphabetic'|'top'|'hanging'|'middle'|'ideographic'|'bottom'}
   */
  get textBaseline() {
    return this._textBaseline;
  }
  set textBaseline(t) {
    this._textBaseline !== t && (this._textBaseline = t, this.update());
  }
  /**
   * How newlines and spaces should be handled.
   * Default is 'pre' (preserve, preserve).
   *
   *  value       | New lines     |   Spaces
   *  ---         | ---           |   ---
   * 'normal'     | Collapse      |   Collapse
   * 'pre'        | Preserve      |   Preserve
   * 'pre-line'   | Preserve      |   Collapse
   * @type {'normal'|'pre'|'pre-line'}
   */
  get whiteSpace() {
    return this._whiteSpace;
  }
  set whiteSpace(t) {
    this._whiteSpace !== t && (this._whiteSpace = t, this.update());
  }
  /** Indicates if word wrap should be used. */
  get wordWrap() {
    return this._wordWrap;
  }
  set wordWrap(t) {
    this._wordWrap !== t && (this._wordWrap = t, this.update());
  }
  /** The width at which text will wrap, it needs wordWrap to be set to true. */
  get wordWrapWidth() {
    return this._wordWrapWidth;
  }
  set wordWrapWidth(t) {
    this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.update());
  }
  /**
   * The fill style that will be used to color the text.
   * This can be:
   * - A color string like 'red', '#00FF00', or 'rgba(255,0,0,0.5)'
   * - A hex number like 0xff0000 for red
   * - A FillStyle object with properties like { color: 0xff0000, alpha: 0.5 }
   * - A FillGradient for gradient fills
   * - A FillPattern for pattern/texture fills
   *
   * When using a FillGradient, vertical gradients (angle of 90 degrees) are applied per line of text,
   * while gradients at any other angle are spread across the entire text body as a whole.
   * @example
   * // Vertical gradient applied per line
   * const verticalGradient = new FillGradient(0, 0, 0, 1)
   *     .addColorStop(0, 0xff0000)
   *     .addColorStop(1, 0x0000ff);
   *
   * const text = new Text({
   *     text: 'Line 1\nLine 2',
   *     style: { fill: verticalGradient }
   * });
   *
   * To manage the gradient in a global scope, set the textureSpace property of the FillGradient to 'global'.
   * @type {string|number|FillStyle|FillGradient|FillPattern}
   */
  get fill() {
    return this._originalFill;
  }
  set fill(t) {
    t !== this._originalFill && (this._originalFill = t, this._isFillStyle(t) && (this._originalFill = this._createProxy({ ...Jt.defaultFillStyle, ...t }, () => {
      this._fill = ei(
        { ...this._originalFill },
        Jt.defaultFillStyle
      );
    })), this._fill = ei(
      t === 0 ? "black" : t,
      Jt.defaultFillStyle
    ), this.update());
  }
  /** A fillstyle that will be used on the text stroke, e.g., 'blue', '#FCFF00'. */
  get stroke() {
    return this._originalStroke;
  }
  set stroke(t) {
    t !== this._originalStroke && (this._originalStroke = t, this._isFillStyle(t) && (this._originalStroke = this._createProxy({ ...Jt.defaultStrokeStyle, ...t }, () => {
      this._stroke = hs(
        { ...this._originalStroke },
        Jt.defaultStrokeStyle
      );
    })), this._stroke = hs(t, Jt.defaultStrokeStyle), this.update());
  }
  update() {
    this._tick++, this.emit("update", this);
  }
  /** Resets all properties to the default values */
  reset() {
    const t = gi.defaultTextStyle;
    for (const e in t)
      this[e] = t[e];
  }
  /**
   * Returns a unique key for this instance.
   * This key is used for caching.
   * @returns {string} Unique key for the instance
   */
  get styleKey() {
    return `${this.uid}-${this._tick}`;
  }
  /**
   * Creates a new TextStyle object with the same values as this one.
   * @returns New cloned TextStyle object
   */
  clone() {
    return new gi({
      align: this.align,
      breakWords: this.breakWords,
      dropShadow: this._dropShadow ? { ...this._dropShadow } : null,
      fill: this._fill,
      fontFamily: this.fontFamily,
      fontSize: this.fontSize,
      fontStyle: this.fontStyle,
      fontVariant: this.fontVariant,
      fontWeight: this.fontWeight,
      leading: this.leading,
      letterSpacing: this.letterSpacing,
      lineHeight: this.lineHeight,
      padding: this.padding,
      stroke: this._stroke,
      textBaseline: this.textBaseline,
      whiteSpace: this.whiteSpace,
      wordWrap: this.wordWrap,
      wordWrapWidth: this.wordWrapWidth,
      filters: this._filters ? [...this._filters] : void 0
    });
  }
  /**
   * Returns the final padding for the text style, taking into account any filters applied.
   * Used internally for correct measurements
   * @internal
   * @returns {number} The final padding for the text style.
   */
  _getFinalPadding() {
    let t = 0;
    if (this._filters)
      for (let e = 0; e < this._filters.length; e++)
        t += this._filters[e].padding;
    return Math.max(this._padding, t);
  }
  /**
   * Destroys this text style.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @example
   * // Destroy the text style and its textures
   * textStyle.destroy({ texture: true, textureSource: true });
   * textStyle.destroy(true);
   */
  destroy(t = !1) {
    if (this.removeAllListeners(), typeof t == "boolean" ? t : t?.texture) {
      const i = typeof t == "boolean" ? t : t?.textureSource;
      this._fill?.texture && this._fill.texture.destroy(i), this._originalFill?.texture && this._originalFill.texture.destroy(i), this._stroke?.texture && this._stroke.texture.destroy(i), this._originalStroke?.texture && this._originalStroke.texture.destroy(i);
    }
    this._fill = null, this._stroke = null, this.dropShadow = null, this._originalStroke = null, this._originalFill = null;
  }
  _createProxy(t, e) {
    return new Proxy(t, {
      set: (i, s, n) => (i[s] === n || (i[s] = n, e?.(s, n), this.update()), !0)
    });
  }
  _isFillStyle(t) {
    return (t ?? null) !== null && !(ct.isColorLike(t) || t instanceof Ee || t instanceof ms);
  }
};
Sa.defaultDropShadow = {
  alpha: 1,
  angle: Math.PI / 6,
  blur: 0,
  color: "black",
  distance: 5
};
Sa.defaultTextStyle = {
  align: "left",
  breakWords: !1,
  dropShadow: null,
  fill: "black",
  fontFamily: "Arial",
  fontSize: 26,
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "normal",
  leading: 0,
  letterSpacing: 0,
  lineHeight: 0,
  padding: 0,
  stroke: null,
  textBaseline: "alphabetic",
  trim: !1,
  whiteSpace: "pre",
  wordWrap: !1,
  wordWrapWidth: 100
};
let ls = Sa;
function Rm(r) {
  const t = r;
  if (typeof t.dropShadow == "boolean" && t.dropShadow) {
    const e = ls.defaultDropShadow;
    r.dropShadow = {
      alpha: t.dropShadowAlpha ?? e.alpha,
      angle: t.dropShadowAngle ?? e.angle,
      blur: t.dropShadowBlur ?? e.blur,
      color: t.dropShadowColor ?? e.color,
      distance: t.dropShadowDistance ?? e.distance
    };
  }
  if (t.strokeThickness !== void 0) {
    N(Z, "strokeThickness is now a part of stroke");
    const e = t.stroke;
    let i = {};
    if (ct.isColorLike(e))
      i.color = e;
    else if (e instanceof Ee || e instanceof ms)
      i.fill = e;
    else if (Object.hasOwnProperty.call(e, "color") || Object.hasOwnProperty.call(e, "fill"))
      i = e;
    else
      throw new Error("Invalid stroke value.");
    r.stroke = {
      ...i,
      width: t.strokeThickness
    };
  }
  if (Array.isArray(t.fillGradientStops)) {
    if (N(Z, "gradient fill is now a fill pattern: `new FillGradient(...)`"), !Array.isArray(t.fill) || t.fill.length === 0)
      throw new Error("Invalid fill value. Expected an array of colors for gradient fill.");
    t.fill.length !== t.fillGradientStops.length && rt("The number of fill colors must match the number of fill gradient stops.");
    const e = new Ee({
      start: { x: 0, y: 0 },
      end: { x: 0, y: 1 },
      textureSpace: "local"
    }), i = t.fillGradientStops.slice(), s = t.fill.map((n) => ct.shared.setValue(n).toNumber());
    i.forEach((n, a) => {
      e.addColorStop(n, s[a]);
    }), r.fill = {
      fill: e
    };
  }
}
class Fm {
  constructor(t) {
    this._canvasPool = /* @__PURE__ */ Object.create(null), this.canvasOptions = t || {}, this.enableFullScreen = !1;
  }
  /**
   * Creates texture with params that were specified in pool constructor.
   * @param pixelWidth - Width of texture in pixels.
   * @param pixelHeight - Height of texture in pixels.
   */
  _createCanvasAndContext(t, e) {
    const i = st.get().createCanvas();
    i.width = t, i.height = e;
    const s = i.getContext("2d");
    return { canvas: i, context: s };
  }
  /**
   * Gets a Power-of-Two render texture or fullScreen texture
   * @param minWidth - The minimum width of the render texture.
   * @param minHeight - The minimum height of the render texture.
   * @param resolution - The resolution of the render texture.
   * @returns The new render texture.
   */
  getOptimalCanvasAndContext(t, e, i = 1) {
    t = Math.ceil(t * i - 1e-6), e = Math.ceil(e * i - 1e-6), t = ss(t), e = ss(e);
    const s = (t << 17) + (e << 1);
    this._canvasPool[s] || (this._canvasPool[s] = []);
    let n = this._canvasPool[s].pop();
    return n || (n = this._createCanvasAndContext(t, e)), n;
  }
  /**
   * Place a render texture back into the pool.
   * @param canvasAndContext
   */
  returnCanvasAndContext(t) {
    const e = t.canvas, { width: i, height: s } = e, n = (i << 17) + (s << 1);
    t.context.resetTransform(), t.context.clearRect(0, 0, i, s), this._canvasPool[n].push(t);
  }
  clear() {
    this._canvasPool = {};
  }
}
const Xn = new Fm();
Tr.register(Xn);
const ah = 1e5;
function oh(r, t, e, i = 0) {
  if (r.texture === X.WHITE && !r.fill)
    return ct.shared.setValue(r.color).setAlpha(r.alpha ?? 1).toHexa();
  if (r.fill) {
    if (r.fill instanceof ms) {
      const s = r.fill, n = t.createPattern(s.texture.source.resource, "repeat"), a = s.transform.copyTo(Y.shared);
      return a.scale(
        s.texture.frame.width,
        s.texture.frame.height
      ), n.setTransform(a), n;
    } else if (r.fill instanceof Ee) {
      const s = r.fill, n = s.type === "linear", a = s.textureSpace === "local";
      let o = 1, h = 1;
      a && e && (o = e.width + i, h = e.height + i);
      let l, c = !1;
      if (n) {
        const { start: u, end: f } = s;
        l = t.createLinearGradient(
          u.x * o,
          u.y * h,
          f.x * o,
          f.y * h
        ), c = Math.abs(f.x - u.x) < Math.abs((f.y - u.y) * 0.1);
      } else {
        const { center: u, innerRadius: f, outerCenter: d, outerRadius: g } = s;
        l = t.createRadialGradient(
          u.x * o,
          u.y * h,
          f * o,
          d.x * o,
          d.y * h,
          g * o
        );
      }
      if (c && a && e) {
        const u = e.lineHeight / h;
        for (let f = 0; f < e.lines.length; f++) {
          const d = (f * e.lineHeight + i / 2) / h;
          s.colorStops.forEach((g) => {
            const p = d + g.offset * u;
            l.addColorStop(
              // fix to 5 decimal places to avoid floating point precision issues
              Math.floor(p * ah) / ah,
              ct.shared.setValue(g.color).toHex()
            );
          });
        }
      } else
        s.colorStops.forEach((u) => {
          l.addColorStop(u.offset, ct.shared.setValue(u.color).toHex());
        });
      return l;
    }
  } else {
    const s = t.createPattern(r.texture.source.resource, "repeat"), n = r.matrix.copyTo(Y.shared);
    return n.scale(r.texture.frame.width, r.texture.frame.height), s.setTransform(n), s;
  }
  return rt("FillStyle not recognised", r), "red";
}
const Oc = class Lc extends mc {
  /**
   * @param options - The options for the dynamic bitmap font.
   */
  constructor(t) {
    super(), this.resolution = 1, this.pages = [], this._padding = 0, this._measureCache = /* @__PURE__ */ Object.create(null), this._currentChars = [], this._currentX = 0, this._currentY = 0, this._currentMaxCharHeight = 0, this._currentPageIndex = -1, this._skipKerning = !1;
    const e = { ...Lc.defaultOptions, ...t };
    this._textureSize = e.textureSize, this._mipmap = e.mipmap;
    const i = e.style.clone();
    e.overrideFill && (i._fill.color = 16777215, i._fill.alpha = 1, i._fill.texture = X.WHITE, i._fill.fill = null), this.applyFillAsTint = e.overrideFill;
    const s = i.fontSize;
    i.fontSize = this.baseMeasurementFontSize;
    const n = Nn(i);
    e.overrideSize ? i._stroke && (i._stroke.width *= this.baseRenderedFontSize / s) : i.fontSize = this.baseRenderedFontSize = s, this._style = i, this._skipKerning = e.skipKerning ?? !1, this.resolution = e.resolution ?? 1, this._padding = e.padding ?? 4, e.textureStyle && (this._textureStyle = e.textureStyle instanceof ns ? e.textureStyle : new ns(e.textureStyle)), this.fontMetrics = qr.measureFont(n), this.lineHeight = i.lineHeight || this.fontMetrics.fontSize || i.fontSize;
  }
  ensureCharacters(t) {
    const e = qr.graphemeSegmenter(t).filter((m) => !this._currentChars.includes(m)).filter((m, _, y) => y.indexOf(m) === _);
    if (!e.length)
      return;
    this._currentChars = [...this._currentChars, ...e];
    let i;
    this._currentPageIndex === -1 ? i = this._nextPage() : i = this.pages[this._currentPageIndex];
    let { canvas: s, context: n } = i.canvasAndContext, a = i.texture.source;
    const o = this._style;
    let h = this._currentX, l = this._currentY, c = this._currentMaxCharHeight;
    const u = this.baseRenderedFontSize / this.baseMeasurementFontSize, f = this._padding * u;
    let d = !1;
    const g = s.width / this.resolution, p = s.height / this.resolution;
    for (let m = 0; m < e.length; m++) {
      const _ = e[m], y = qr.measureText(_, o, s, !1);
      y.lineHeight = y.height;
      const x = y.width * u, b = Math.ceil((o.fontStyle === "italic" ? 2 : 1) * x), v = y.height * u, A = b + f * 2, S = v + f * 2;
      if (d = !1, _ !== `
` && _ !== "\r" && _ !== "	" && _ !== " " && (d = !0, c = Math.ceil(Math.max(S, c))), h + A > g && (l += c, c = S, h = 0, l + c > p)) {
        a.update();
        const T = this._nextPage();
        s = T.canvasAndContext.canvas, n = T.canvasAndContext.context, a = T.texture.source, h = 0, l = 0, c = 0;
      }
      const C = x / u - (o.dropShadow?.distance ?? 0) - (o._stroke?.width ?? 0);
      if (this.chars[_] = {
        id: _.codePointAt(0),
        xOffset: -this._padding,
        yOffset: -this._padding,
        xAdvance: C,
        kerning: {}
      }, d) {
        this._drawGlyph(
          n,
          y,
          h + f,
          l + f,
          u,
          o
        );
        const T = a.width * u, P = a.height * u, E = new _t(
          h / T * a.width,
          l / P * a.height,
          A / T * a.width,
          S / P * a.height
        );
        this.chars[_].texture = new X({
          source: a,
          frame: E
        }), h += Math.ceil(A);
      }
    }
    a.update(), this._currentX = h, this._currentY = l, this._currentMaxCharHeight = c, this._skipKerning && this._applyKerning(e, n);
  }
  /**
   * @deprecated since 8.0.0
   * The map of base page textures (i.e., sheets of glyphs).
   */
  get pageTextures() {
    return N(Z, "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."), this.pages;
  }
  _applyKerning(t, e) {
    const i = this._measureCache;
    for (let s = 0; s < t.length; s++) {
      const n = t[s];
      for (let a = 0; a < this._currentChars.length; a++) {
        const o = this._currentChars[a];
        let h = i[n];
        h || (h = i[n] = e.measureText(n).width);
        let l = i[o];
        l || (l = i[o] = e.measureText(o).width);
        let c = e.measureText(n + o).width, u = c - (h + l);
        u && (this.chars[n].kerning[o] = u), c = e.measureText(n + o).width, u = c - (h + l), u && (this.chars[o].kerning[n] = u);
      }
    }
  }
  _nextPage() {
    this._currentPageIndex++;
    const t = this.resolution, e = Xn.getOptimalCanvasAndContext(
      this._textureSize,
      this._textureSize,
      t
    );
    this._setupContext(e.context, this._style, t);
    const i = t * (this.baseRenderedFontSize / this.baseMeasurementFontSize), s = new X({
      source: new oi({
        resource: e.canvas,
        resolution: i,
        alphaMode: "premultiply-alpha-on-upload",
        autoGenerateMipmaps: this._mipmap
      })
    });
    this._textureStyle && (s.source.style = this._textureStyle);
    const n = {
      canvasAndContext: e,
      texture: s
    };
    return this.pages[this._currentPageIndex] = n, n;
  }
  // canvas style!
  _setupContext(t, e, i) {
    e.fontSize = this.baseRenderedFontSize, t.scale(i, i), t.font = Nn(e), e.fontSize = this.baseMeasurementFontSize, t.textBaseline = e.textBaseline;
    const s = e._stroke, n = s?.width ?? 0;
    if (s && (t.lineWidth = n, t.lineJoin = s.join, t.miterLimit = s.miterLimit, t.strokeStyle = oh(s, t)), e._fill && (t.fillStyle = oh(e._fill, t)), e.dropShadow) {
      const a = e.dropShadow, o = ct.shared.setValue(a.color).toArray(), h = a.blur * i, l = a.distance * i;
      t.shadowColor = `rgba(${o[0] * 255},${o[1] * 255},${o[2] * 255},${a.alpha})`, t.shadowBlur = h, t.shadowOffsetX = Math.cos(a.angle) * l, t.shadowOffsetY = Math.sin(a.angle) * l;
    } else
      t.shadowColor = "black", t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0;
  }
  _drawGlyph(t, e, i, s, n, a) {
    const o = e.text, h = e.fontProperties, c = (a._stroke?.width ?? 0) * n, u = i + c / 2, f = s - c / 2, d = h.descent * n, g = e.lineHeight * n;
    let p = !1;
    a.stroke && c && (p = !0, t.strokeText(o, u, f + g - d));
    const { shadowBlur: m, shadowOffsetX: _, shadowOffsetY: y } = t;
    a._fill && (p && (t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0), t.fillText(o, u, f + g - d)), p && (t.shadowBlur = m, t.shadowOffsetX = _, t.shadowOffsetY = y);
  }
  destroy() {
    super.destroy();
    for (let t = 0; t < this.pages.length; t++) {
      const { canvasAndContext: e, texture: i } = this.pages[t];
      Xn.returnCanvasAndContext(e), i.destroy(!0);
    }
    this.pages = null;
  }
};
Oc.defaultOptions = {
  textureSize: 512,
  style: new ls(),
  mipmap: !0
};
let hh = Oc;
function Im(r, t, e, i) {
  const s = {
    width: 0,
    height: 0,
    offsetY: 0,
    scale: t.fontSize / e.baseMeasurementFontSize,
    lines: [{
      width: 0,
      charPositions: [],
      spaceWidth: 0,
      spacesIndex: [],
      chars: []
    }]
  };
  s.offsetY = e.baseLineOffset;
  let n = s.lines[0], a = null, o = !0;
  const h = {
    width: 0,
    start: 0,
    index: 0,
    // use index to not modify the array as we use it a lot!
    positions: [],
    chars: []
  }, l = e.baseMeasurementFontSize / t.fontSize, c = t.letterSpacing * l, u = t.wordWrapWidth * l, f = t.lineHeight ? t.lineHeight * l : e.lineHeight, d = t.wordWrap && t.breakWords, g = (_) => {
    const y = n.width;
    for (let x = 0; x < h.index; x++) {
      const b = _.positions[x];
      n.chars.push(_.chars[x]), n.charPositions.push(b + y);
    }
    n.width += _.width, o = !1, h.width = 0, h.index = 0, h.chars.length = 0;
  }, p = () => {
    let _ = n.chars.length - 1;
    if (i) {
      let y = n.chars[_];
      for (; y === " "; )
        n.width -= e.chars[y].xAdvance, y = n.chars[--_];
    }
    s.width = Math.max(s.width, n.width), n = {
      width: 0,
      charPositions: [],
      chars: [],
      spaceWidth: 0,
      spacesIndex: []
    }, o = !0, s.lines.push(n), s.height += f;
  }, m = (_) => _ - c > u;
  for (let _ = 0; _ < r.length + 1; _++) {
    let y;
    const x = _ === r.length;
    x || (y = r[_]);
    const b = e.chars[y] || e.chars[" "];
    if (/(?:\s)/.test(y) || y === "\r" || y === `
` || x) {
      if (!o && t.wordWrap && m(n.width + h.width) ? (p(), g(h), x || n.charPositions.push(0)) : (h.start = n.width, g(h), x || n.charPositions.push(0)), y === "\r" || y === `
`)
        p();
      else if (!x) {
        const C = b.xAdvance + (b.kerning[a] || 0) + c;
        n.width += C, n.spaceWidth = C, n.spacesIndex.push(n.charPositions.length), n.chars.push(y);
      }
    } else {
      const S = b.kerning[a] || 0, C = b.xAdvance + S + c;
      d && m(n.width + h.width + C) && (g(h), p()), h.positions[h.index++] = h.width + S, h.chars.push(y), h.width += C;
    }
    a = y;
  }
  return p(), t.align === "center" ? Bm(s) : t.align === "right" ? Om(s) : t.align === "justify" && Lm(s), s;
}
function Bm(r) {
  for (let t = 0; t < r.lines.length; t++) {
    const e = r.lines[t], i = r.width / 2 - e.width / 2;
    for (let s = 0; s < e.charPositions.length; s++)
      e.charPositions[s] += i;
  }
}
function Om(r) {
  for (let t = 0; t < r.lines.length; t++) {
    const e = r.lines[t], i = r.width - e.width;
    for (let s = 0; s < e.charPositions.length; s++)
      e.charPositions[s] += i;
  }
}
function Lm(r) {
  const t = r.width;
  for (let e = 0; e < r.lines.length; e++) {
    const i = r.lines[e];
    let s = 0, n = i.spacesIndex[s++], a = 0;
    const o = i.spacesIndex.length, l = (t - i.width) / o;
    for (let c = 0; c < i.charPositions.length; c++)
      c === n && (n = i.spacesIndex[s++], a += l), i.charPositions[c] += a;
  }
}
function Dm(r) {
  if (r === "")
    return [];
  typeof r == "string" && (r = [r]);
  const t = [];
  for (let e = 0, i = r.length; e < i; e++) {
    const s = r[e];
    if (Array.isArray(s)) {
      if (s.length !== 2)
        throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${s.length}.`);
      if (s[0].length === 0 || s[1].length === 0)
        throw new Error("[BitmapFont]: Invalid character delimiter.");
      const n = s[0].charCodeAt(0), a = s[1].charCodeAt(0);
      if (a < n)
        throw new Error("[BitmapFont]: Invalid character range.");
      for (let o = n, h = a; o <= h; o++)
        t.push(String.fromCharCode(o));
    } else
      t.push(...Array.from(s));
  }
  if (t.length === 0)
    throw new Error("[BitmapFont]: Empty set when resolving characters.");
  return t;
}
let Vr = 0;
class zm {
  constructor() {
    this.ALPHA = [["a", "z"], ["A", "Z"], " "], this.NUMERIC = [["0", "9"]], this.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "], this.ASCII = [[" ", "~"]], this.defaultOptions = {
      chars: this.ALPHANUMERIC,
      resolution: 1,
      padding: 4,
      skipKerning: !1,
      textureStyle: null
    }, this.measureCache = _c(1e3);
  }
  /**
   * Get a font for the specified text and style.
   * @param text - The text to get the font for
   * @param style - The style to use
   */
  getFont(t, e) {
    let i = `${e.fontFamily}-bitmap`, s = !0;
    if (e._fill.fill && !e._stroke ? (i += e._fill.fill.styleKey, s = !1) : (e._stroke || e.dropShadow) && (i = `${e.styleKey}-bitmap`, s = !1), !it.has(i)) {
      const a = Object.create(e);
      a.lineHeight = 0;
      const o = new hh({
        style: a,
        overrideFill: s,
        overrideSize: !0,
        ...this.defaultOptions
      });
      Vr++, Vr > 50 && rt("BitmapText", `You have dynamically created ${Vr} bitmap fonts, this can be inefficient. Try pre installing your font styles using \`BitmapFont.install({name:"style1", style})\``), o.once("destroy", () => {
        Vr--, it.remove(i);
      }), it.set(
        i,
        o
      );
    }
    const n = it.get(i);
    return n.ensureCharacters?.(t), n;
  }
  /**
   * Get the layout of a text for the specified style.
   * @param text - The text to get the layout for
   * @param style - The style to use
   * @param trimEnd - Whether to ignore whitespaces at the end of each line
   */
  getLayout(t, e, i = !0) {
    const s = this.getFont(t, e), n = `${t}-${e.styleKey}-${i}`;
    if (this.measureCache.has(n))
      return this.measureCache.get(n);
    const a = qr.graphemeSegmenter(t), o = Im(a, e, s, i);
    return this.measureCache.set(n, o), o;
  }
  /**
   * Measure the text using the specified style.
   * @param text - The text to measure
   * @param style - The style to use
   * @param trimEnd - Whether to ignore whitespaces at the end of each line
   */
  measureText(t, e, i = !0) {
    return this.getLayout(t, e, i);
  }
  // eslint-disable-next-line max-len
  install(...t) {
    let e = t[0];
    typeof e == "string" && (e = {
      name: e,
      style: t[1],
      chars: t[2]?.chars,
      resolution: t[2]?.resolution,
      padding: t[2]?.padding,
      skipKerning: t[2]?.skipKerning
    }, N(Z, "BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})"));
    const i = e?.name;
    if (!i)
      throw new Error("[BitmapFontManager] Property `name` is required.");
    e = { ...this.defaultOptions, ...e };
    const s = e.style, n = s instanceof ls ? s : new ls(s), a = e.dynamicFill ?? this._canUseTintForStyle(n), o = new hh({
      style: n,
      overrideFill: a,
      skipKerning: e.skipKerning,
      padding: e.padding,
      resolution: e.resolution,
      overrideSize: !1,
      textureStyle: e.textureStyle
    }), h = Dm(e.chars);
    return o.ensureCharacters(h.join("")), it.set(`${i}-bitmap`, o), o.once("destroy", () => it.remove(`${i}-bitmap`)), o;
  }
  /**
   * Uninstalls a bitmap font from the cache.
   * @param {string} name - The name of the bitmap font to uninstall.
   */
  uninstall(t) {
    const e = `${t}-bitmap`, i = it.get(e);
    i && i.destroy();
  }
  /**
   * Determines if a style can use tinting instead of baking colors into the bitmap.
   * Tinting is more efficient as it allows reusing the same bitmap with different colors.
   * @param style - The text style to evaluate
   * @returns true if the style can use tinting, false if colors must be baked in
   * @private
   */
  _canUseTintForStyle(t) {
    return !t._stroke && (!t.dropShadow || t.dropShadow.color === 0) && !t._fill.fill && t._fill.color === 16777215;
  }
}
const lh = new zm();
class Dc extends mc {
  constructor(t, e) {
    super();
    const { textures: i, data: s } = t;
    Object.keys(s.pages).forEach((n) => {
      const a = s.pages[parseInt(n, 10)], o = i[a.id];
      this.pages.push({ texture: o });
    }), Object.keys(s.chars).forEach((n) => {
      const a = s.chars[n], {
        frame: o,
        source: h,
        rotate: l
      } = i[a.page], c = Q.transformRectCoords(
        a,
        o,
        l,
        new _t()
      ), u = new X({
        frame: c,
        orig: new _t(0, 0, a.width, a.height),
        source: h,
        rotate: l
      });
      this.chars[n] = {
        id: n.codePointAt(0),
        xOffset: a.xOffset,
        yOffset: a.yOffset,
        xAdvance: a.xAdvance,
        kerning: a.kerning ?? {},
        texture: u
      };
    }), this.baseRenderedFontSize = s.fontSize, this.baseMeasurementFontSize = s.fontSize, this.fontMetrics = {
      ascent: 0,
      descent: 0,
      fontSize: s.fontSize
    }, this.baseLineOffset = s.baseLineOffset, this.lineHeight = s.lineHeight, this.fontFamily = s.fontFamily, this.distanceField = s.distanceField ?? {
      type: "none",
      range: 0
    }, this.url = e;
  }
  /** Destroys the BitmapFont object. */
  destroy() {
    super.destroy();
    for (let t = 0; t < this.pages.length; t++) {
      const { texture: e } = this.pages[t];
      e.destroy(!0);
    }
    this.pages = null;
  }
  /**
   * Generates and installs a bitmap font with the specified options.
   * The font will be cached and available for use in BitmapText objects.
   * @param options - Setup options for font generation
   * @returns Installed font instance
   * @example
   * ```ts
   * // Install a basic font
   * BitmapFont.install({
   *     name: 'Title',
   *     style: {
   *         fontFamily: 'Arial',
   *         fontSize: 32,
   *         fill: '#ffffff'
   *     }
   * });
   *
   * // Install with advanced options
   * BitmapFont.install({
   *     name: 'Custom',
   *     style: {
   *         fontFamily: 'Arial',
   *         fontSize: 24,
   *         fill: '#00ff00',
   *         stroke: { color: '#000000', width: 2 }
   *     },
   *     chars: [['a', 'z'], ['A', 'Z'], ['0', '9']],
   *     resolution: 2,
   *     padding: 4,
   *     textureStyle: {
   *         scaleMode: 'nearest'
   *     }
   * });
   * ```
   */
  static install(t) {
    lh.install(t);
  }
  /**
   * Uninstalls a bitmap font from the cache.
   * This frees up memory and resources associated with the font.
   * @param name - The name of the bitmap font to uninstall
   * @example
   * ```ts
   * // Remove a font when it's no longer needed
   * BitmapFont.uninstall('MyCustomFont');
   *
   * // Clear multiple fonts
   * ['Title', 'Heading', 'Body'].forEach(BitmapFont.uninstall);
   * ```
   */
  static uninstall(t) {
    lh.uninstall(t);
  }
}
const an = {
  test(r) {
    return typeof r == "string" && r.startsWith("info face=");
  },
  parse(r) {
    const t = r.match(/^[a-z]+\s+.+$/gm), e = {
      info: [],
      common: [],
      page: [],
      char: [],
      chars: [],
      kerning: [],
      kernings: [],
      distanceField: []
    };
    for (const u in t) {
      const f = t[u].match(/^[a-z]+/gm)[0], d = t[u].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm), g = {};
      for (const p in d) {
        const m = d[p].split("="), _ = m[0], y = m[1].replace(/"/gm, ""), x = parseFloat(y), b = isNaN(x) ? y : x;
        g[_] = b;
      }
      e[f].push(g);
    }
    const i = {
      chars: {},
      pages: [],
      lineHeight: 0,
      fontSize: 0,
      fontFamily: "",
      distanceField: null,
      baseLineOffset: 0
    }, [s] = e.info, [n] = e.common, [a] = e.distanceField ?? [];
    a && (i.distanceField = {
      range: parseInt(a.distanceRange, 10),
      type: a.fieldType
    }), i.fontSize = parseInt(s.size, 10), i.fontFamily = s.face, i.lineHeight = parseInt(n.lineHeight, 10);
    const o = e.page;
    for (let u = 0; u < o.length; u++)
      i.pages.push({
        id: parseInt(o[u].id, 10) || 0,
        file: o[u].file
      });
    const h = {};
    i.baseLineOffset = i.lineHeight - parseInt(n.base, 10);
    const l = e.char;
    for (let u = 0; u < l.length; u++) {
      const f = l[u], d = parseInt(f.id, 10);
      let g = f.letter ?? f.char ?? String.fromCharCode(d);
      g === "space" && (g = " "), h[d] = g, i.chars[g] = {
        id: d,
        // texture deets..
        page: parseInt(f.page, 10) || 0,
        x: parseInt(f.x, 10),
        y: parseInt(f.y, 10),
        width: parseInt(f.width, 10),
        height: parseInt(f.height, 10),
        xOffset: parseInt(f.xoffset, 10),
        yOffset: parseInt(f.yoffset, 10),
        xAdvance: parseInt(f.xadvance, 10),
        kerning: {}
      };
    }
    const c = e.kerning || [];
    for (let u = 0; u < c.length; u++) {
      const f = parseInt(c[u].first, 10), d = parseInt(c[u].second, 10), g = parseInt(c[u].amount, 10);
      i.chars[h[d]].kerning[h[f]] = g;
    }
    return i;
  }
}, ch = {
  test(r) {
    const t = r;
    return typeof t != "string" && "getElementsByTagName" in t && t.getElementsByTagName("page").length && t.getElementsByTagName("info")[0].getAttribute("face") !== null;
  },
  parse(r) {
    const t = {
      chars: {},
      pages: [],
      lineHeight: 0,
      fontSize: 0,
      fontFamily: "",
      distanceField: null,
      baseLineOffset: 0
    }, e = r.getElementsByTagName("info")[0], i = r.getElementsByTagName("common")[0], s = r.getElementsByTagName("distanceField")[0];
    s && (t.distanceField = {
      type: s.getAttribute("fieldType"),
      range: parseInt(s.getAttribute("distanceRange"), 10)
    });
    const n = r.getElementsByTagName("page"), a = r.getElementsByTagName("char"), o = r.getElementsByTagName("kerning");
    t.fontSize = parseInt(e.getAttribute("size"), 10), t.fontFamily = e.getAttribute("face"), t.lineHeight = parseInt(i.getAttribute("lineHeight"), 10);
    for (let l = 0; l < n.length; l++)
      t.pages.push({
        id: parseInt(n[l].getAttribute("id"), 10) || 0,
        file: n[l].getAttribute("file")
      });
    const h = {};
    t.baseLineOffset = t.lineHeight - parseInt(i.getAttribute("base"), 10);
    for (let l = 0; l < a.length; l++) {
      const c = a[l], u = parseInt(c.getAttribute("id"), 10);
      let f = c.getAttribute("letter") ?? c.getAttribute("char") ?? String.fromCharCode(u);
      f === "space" && (f = " "), h[u] = f, t.chars[f] = {
        id: u,
        // texture deets..
        page: parseInt(c.getAttribute("page"), 10) || 0,
        x: parseInt(c.getAttribute("x"), 10),
        y: parseInt(c.getAttribute("y"), 10),
        width: parseInt(c.getAttribute("width"), 10),
        height: parseInt(c.getAttribute("height"), 10),
        // render deets..
        xOffset: parseInt(c.getAttribute("xoffset"), 10),
        yOffset: parseInt(c.getAttribute("yoffset"), 10),
        // + baseLineOffset,
        xAdvance: parseInt(c.getAttribute("xadvance"), 10),
        kerning: {}
      };
    }
    for (let l = 0; l < o.length; l++) {
      const c = parseInt(o[l].getAttribute("first"), 10), u = parseInt(o[l].getAttribute("second"), 10), f = parseInt(o[l].getAttribute("amount"), 10);
      t.chars[h[u]].kerning[h[c]] = f;
    }
    return t;
  }
}, uh = {
  test(r) {
    return typeof r == "string" && r.match(/<font(\s|>)/) ? ch.test(st.get().parseXML(r)) : !1;
  },
  parse(r) {
    return ch.parse(st.get().parseXML(r));
  }
}, Gm = [".xml", ".fnt"], Um = {
  extension: {
    type: D.CacheParser,
    name: "cacheBitmapFont"
  },
  test: (r) => r instanceof Dc,
  getCacheableAssets(r, t) {
    const e = {};
    return r.forEach((i) => {
      e[i] = t, e[`${i}-bitmap`] = t;
    }), e[`${t.fontFamily}-bitmap`] = t, e;
  }
}, Wm = {
  extension: {
    type: D.LoadParser,
    priority: Ne.Normal
  },
  /** used for deprecation purposes */
  name: "loadBitmapFont",
  id: "bitmap-font",
  test(r) {
    return Gm.includes(Xt.extname(r).toLowerCase());
  },
  async testParse(r) {
    return an.test(r) || uh.test(r);
  },
  async parse(r, t, e) {
    const i = an.test(r) ? an.parse(r) : uh.parse(r), { src: s } = t, { pages: n } = i, a = [], o = i.distanceField ? {
      scaleMode: "linear",
      alphaMode: "premultiply-alpha-on-upload",
      autoGenerateMipmaps: !1,
      resolution: 1
    } : {};
    for (let u = 0; u < n.length; ++u) {
      const f = n[u].file;
      let d = Xt.join(Xt.dirname(s), f);
      d = Bn(d, s), a.push({
        src: d,
        data: o
      });
    }
    const h = await e.load(a), l = a.map((u) => h[u.src]);
    return new Dc({
      data: i,
      textures: l
    }, s);
  },
  async load(r, t) {
    return await (await st.get().fetch(r)).text();
  },
  async unload(r, t, e) {
    await Promise.all(r.pages.map((i) => e.unload(i.texture.source._sourceOrigin))), r.destroy();
  }
};
class Nm {
  /**
   * @param loader
   * @param verbose - should the loader log to the console
   */
  constructor(t, e = !1) {
    this._loader = t, this._assetList = [], this._isLoading = !1, this._maxConcurrent = 1, this.verbose = e;
  }
  /**
   * Adds assets to the background loading queue. Assets are loaded one at a time to minimize
   * performance impact.
   * @param assetUrls - Array of resolved assets to load in the background
   * @example
   * ```ts
   * // Add assets to background load queue
   * backgroundLoader.add([
   *     { src: 'images/level1/bg.png' },
   *     { src: 'images/level1/characters.json' }
   * ]);
   *
   * // Assets will load sequentially in the background
   * // The loader automatically pauses when high-priority loads occur
   * // e.g. Assets.load() is called
   * ```
   * @remarks
   * - Assets are loaded one at a time to minimize performance impact
   * - Loading automatically pauses when Assets.load() is called
   * - No progress tracking is available for background loading
   * - Assets are cached as they complete loading
   * @internal
   */
  add(t) {
    t.forEach((e) => {
      this._assetList.push(e);
    }), this.verbose && console.log("[BackgroundLoader] assets: ", this._assetList), this._isActive && !this._isLoading && this._next();
  }
  /**
   * Loads the next set of assets. Will try to load as many assets as it can at the same time.
   *
   * The max assets it will try to load at one time will be 4.
   */
  async _next() {
    if (this._assetList.length && this._isActive) {
      this._isLoading = !0;
      const t = [], e = Math.min(this._assetList.length, this._maxConcurrent);
      for (let i = 0; i < e; i++)
        t.push(this._assetList.pop());
      await this._loader.load(t), this._isLoading = !1, this._next();
    }
  }
  /**
   * Controls the active state of the background loader. When active, the loader will
   * continue processing its queue. When inactive, loading is paused.
   * @returns Whether the background loader is currently active
   * @example
   * ```ts
   * // Pause background loading
   * backgroundLoader.active = false;
   *
   * // Resume background loading
   * backgroundLoader.active = true;
   *
   * // Check current state
   * console.log(backgroundLoader.active); // true/false
   *
   * // Common use case: Pause during intensive operations
   * backgroundLoader.active = false;  // Pause background loading
   * ... // Perform high-priority tasks
   * backgroundLoader.active = true;   // Resume background loading
   * ```
   * @remarks
   * - Setting to true resumes loading immediately
   * - Setting to false pauses after current asset completes
   * - Background loading is automatically paused during `Assets.load()`
   * - Assets already being loaded will complete even when set to false
   */
  get active() {
    return this._isActive;
  }
  set active(t) {
    this._isActive !== t && (this._isActive = t, t && !this._isLoading && this._next());
  }
}
const Vm = {
  extension: {
    type: D.CacheParser,
    name: "cacheTextureArray"
  },
  test: (r) => Array.isArray(r) && r.every((t) => t instanceof X),
  getCacheableAssets: (r, t) => {
    const e = {};
    return r.forEach((i) => {
      t.forEach((s, n) => {
        e[i + (n === 0 ? "" : n + 1)] = s;
      });
    }), e;
  }
};
async function zc(r) {
  if ("Image" in globalThis)
    return new Promise((t) => {
      const e = new Image();
      e.onload = () => {
        t(!0);
      }, e.onerror = () => {
        t(!1);
      }, e.src = r;
    });
  if ("createImageBitmap" in globalThis && "fetch" in globalThis) {
    try {
      const t = await (await fetch(r)).blob();
      await createImageBitmap(t);
    } catch {
      return !1;
    }
    return !0;
  }
  return !1;
}
const Ym = {
  extension: {
    type: D.DetectionParser,
    priority: 1
  },
  test: async () => zc(
    // eslint-disable-next-line max-len
    "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="
  ),
  add: async (r) => [...r, "avif"],
  remove: async (r) => r.filter((t) => t !== "avif")
}, dh = ["png", "jpg", "jpeg"], $m = {
  extension: {
    type: D.DetectionParser,
    priority: -1
  },
  test: () => Promise.resolve(!0),
  add: async (r) => [...r, ...dh],
  remove: async (r) => r.filter((t) => !dh.includes(t))
}, jm = "WorkerGlobalScope" in globalThis && globalThis instanceof globalThis.WorkerGlobalScope;
function ys(r) {
  return jm ? !1 : document.createElement("video").canPlayType(r) !== "";
}
const Xm = {
  extension: {
    type: D.DetectionParser,
    priority: 0
  },
  test: async () => ys("video/mp4"),
  add: async (r) => [...r, "mp4", "m4v"],
  remove: async (r) => r.filter((t) => t !== "mp4" && t !== "m4v")
}, Hm = {
  extension: {
    type: D.DetectionParser,
    priority: 0
  },
  test: async () => ys("video/ogg"),
  add: async (r) => [...r, "ogv"],
  remove: async (r) => r.filter((t) => t !== "ogv")
}, qm = {
  extension: {
    type: D.DetectionParser,
    priority: 0
  },
  test: async () => ys("video/webm"),
  add: async (r) => [...r, "webm"],
  remove: async (r) => r.filter((t) => t !== "webm")
}, Km = {
  extension: {
    type: D.DetectionParser,
    priority: 0
  },
  test: async () => zc(
    "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
  ),
  add: async (r) => [...r, "webp"],
  remove: async (r) => r.filter((t) => t !== "webp")
}, Gc = class Kr {
  constructor() {
    this.loadOptions = { ...Kr.defaultOptions }, this._parsers = [], this._parsersValidated = !1, this.parsers = new Proxy(this._parsers, {
      set: (t, e, i) => (this._parsersValidated = !1, t[e] = i, !0)
    }), this.promiseCache = {};
  }
  /** function used for testing */
  reset() {
    this._parsersValidated = !1, this.promiseCache = {};
  }
  /**
   * Used internally to generate a promise for the asset to be loaded.
   * @param url - The URL to be loaded
   * @param data - any custom additional information relevant to the asset being loaded
   * @returns - a promise that will resolve to an Asset for example a Texture of a JSON object
   */
  _getLoadPromiseAndParser(t, e) {
    const i = {
      promise: null,
      parser: null
    };
    return i.promise = (async () => {
      let s = null, n = null;
      if ((e.parser || e.loadParser) && (n = this._parserHash[e.parser || e.loadParser], e.loadParser && rt(
        `[Assets] "loadParser" is deprecated, use "parser" instead for ${t}`
      ), n || rt(
        `[Assets] specified load parser "${e.parser || e.loadParser}" not found while loading ${t}`
      )), !n) {
        for (let a = 0; a < this.parsers.length; a++) {
          const o = this.parsers[a];
          if (o.load && o.test?.(t, e, this)) {
            n = o;
            break;
          }
        }
        if (!n)
          return rt(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`), null;
      }
      s = await n.load(t, e, this), i.parser = n;
      for (let a = 0; a < this.parsers.length; a++) {
        const o = this.parsers[a];
        o.parse && o.parse && await o.testParse?.(s, e, this) && (s = await o.parse(s, e, this) || s, i.parser = o);
      }
      return s;
    })(), i;
  }
  async load(t, e) {
    this._parsersValidated || this._validateParsers();
    const i = typeof e == "function" ? { ...Kr.defaultOptions, ...this.loadOptions, onProgress: e } : { ...Kr.defaultOptions, ...this.loadOptions, ...e || {} }, { onProgress: s, onError: n, strategy: a, retryCount: o, retryDelay: h } = i;
    let l = 0;
    const c = {}, u = as(t), f = ne(t, (p) => ({
      alias: [p],
      src: p,
      data: {}
    })), d = f.reduce((p, m) => p + (m.progressSize || 1), 0), g = f.map(async (p) => {
      const m = Xt.toAbsolute(p.src);
      c[p.src] || (await this._loadAssetWithRetry(m, p, { onProgress: s, onError: n, strategy: a, retryCount: o, retryDelay: h }, c), l += p.progressSize || 1, s && s(l / d));
    });
    return await Promise.all(g), u ? c[f[0].src] : c;
  }
  /**
   * Unloads one or more assets. Any unloaded assets will be destroyed, freeing up memory for your app.
   * The parser that created the asset, will be the one that unloads it.
   * @example
   * // Single asset:
   * const asset = await Loader.load('cool.png');
   *
   * await Loader.unload('cool.png');
   *
   * console.log(asset.destroyed); // true
   * @param assetsToUnloadIn - urls that you want to unload, or a single one!
   */
  async unload(t) {
    const i = ne(t, (s) => ({
      alias: [s],
      src: s
    })).map(async (s) => {
      const n = Xt.toAbsolute(s.src), a = this.promiseCache[n];
      if (a) {
        const o = await a.promise;
        delete this.promiseCache[n], await a.parser?.unload?.(o, s, this);
      }
    });
    await Promise.all(i);
  }
  /** validates our parsers, right now it only checks for name conflicts but we can add more here as required! */
  _validateParsers() {
    this._parsersValidated = !0, this._parserHash = this._parsers.filter((t) => t.name || t.id).reduce((t, e) => (!e.name && !e.id ? rt("[Assets] parser should have an id") : (t[e.name] || t[e.id]) && rt(`[Assets] parser id conflict "${e.id}"`), t[e.name] = e, e.id && (t[e.id] = e), t), {});
  }
  async _loadAssetWithRetry(t, e, i, s) {
    let n = 0;
    const { onError: a, strategy: o, retryCount: h, retryDelay: l } = i, c = (u) => new Promise((f) => setTimeout(f, u));
    for (; ; )
      try {
        this.promiseCache[t] || (this.promiseCache[t] = this._getLoadPromiseAndParser(t, e)), s[e.src] = await this.promiseCache[t].promise;
        return;
      } catch (u) {
        delete this.promiseCache[t], delete s[e.src], n++;
        const f = o !== "retry" || n > h;
        if (o === "retry" && !f) {
          a && a(u, e), await c(l);
          continue;
        }
        if (o === "skip") {
          a && a(u, e);
          return;
        }
        a && a(u, e);
        const d = new Error(`[Loader.load] Failed to load ${t}.
${u}`);
        throw u instanceof Error && u.stack && (d.stack = u.stack), d;
      }
  }
};
Gc.defaultOptions = {
  onProgress: void 0,
  onError: void 0,
  strategy: "throw",
  retryCount: 3,
  retryDelay: 250
};
let Zm = Gc;
function Oi(r, t) {
  if (Array.isArray(t)) {
    for (const e of t)
      if (r.startsWith(`data:${e}`))
        return !0;
    return !1;
  }
  return r.startsWith(`data:${t}`);
}
function Li(r, t) {
  const e = r.split("?")[0], i = Xt.extname(e).toLowerCase();
  return Array.isArray(t) ? t.includes(i) : i === t;
}
const Qm = ".json", Jm = "application/json", t_ = {
  extension: {
    type: D.LoadParser,
    priority: Ne.Low
  },
  /** used for deprecation purposes */
  name: "loadJson",
  id: "json",
  test(r) {
    return Oi(r, Jm) || Li(r, Qm);
  },
  async load(r) {
    return await (await st.get().fetch(r)).json();
  }
}, e_ = ".txt", i_ = "text/plain", r_ = {
  /** used for deprecation purposes */
  name: "loadTxt",
  id: "text",
  extension: {
    type: D.LoadParser,
    priority: Ne.Low,
    name: "loadTxt"
  },
  test(r) {
    return Oi(r, i_) || Li(r, e_);
  },
  async load(r) {
    return await (await st.get().fetch(r)).text();
  }
}, s_ = [
  "normal",
  "bold",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900"
], n_ = [".ttf", ".otf", ".woff", ".woff2"], a_ = [
  "font/ttf",
  "font/otf",
  "font/woff",
  "font/woff2"
], o_ = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
function h_(r) {
  const t = Xt.extname(r), s = Xt.basename(r, t).replace(/(-|_)/g, " ").toLowerCase().split(" ").map((o) => o.charAt(0).toUpperCase() + o.slice(1));
  let n = s.length > 0;
  for (const o of s)
    if (!o.match(o_)) {
      n = !1;
      break;
    }
  let a = s.join(" ");
  return n || (a = `"${a.replace(/[\\"]/g, "\\$&")}"`), a;
}
const l_ = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;
function c_(r) {
  return l_.test(r) ? r : encodeURI(r);
}
const u_ = {
  extension: {
    type: D.LoadParser,
    priority: Ne.Low
  },
  /** used for deprecation purposes */
  name: "loadWebFont",
  id: "web-font",
  test(r) {
    return Oi(r, a_) || Li(r, n_);
  },
  async load(r, t) {
    const e = st.get().getFontFaceSet();
    if (e) {
      const i = [], s = t.data?.family ?? h_(r), n = t.data?.weights?.filter((o) => s_.includes(o)) ?? ["normal"], a = t.data ?? {};
      for (let o = 0; o < n.length; o++) {
        const h = n[o], l = new FontFace(s, `url(${c_(r)})`, {
          ...a,
          weight: h
        });
        await l.load(), e.add(l), i.push(l);
      }
      return it.has(`${s}-and-url`) ? it.get(`${s}-and-url`).entries.push({ url: r, faces: i }) : it.set(`${s}-and-url`, {
        entries: [{ url: r, faces: i }]
      }), i.length === 1 ? i[0] : i;
    }
    return rt("[loadWebFont] FontFace API is not supported. Skipping loading font"), null;
  },
  unload(r) {
    const t = Array.isArray(r) ? r : [r], e = t[0].family, i = it.get(`${e}-and-url`), s = i.entries.find((n) => n.faces.some((a) => t.indexOf(a) !== -1));
    s.faces = s.faces.filter((n) => t.indexOf(n) === -1), s.faces.length === 0 && (i.entries = i.entries.filter((n) => n !== s)), t.forEach((n) => {
      st.get().getFontFaceSet().delete(n);
    }), i.entries.length === 0 && it.remove(`${e}-and-url`);
  }
};
function Aa(r, t = 1) {
  const e = Ii.RETINA_PREFIX?.exec(r);
  return e ? parseFloat(e[1]) : t;
}
function Ta(r, t, e) {
  r.label = e, r._sourceOrigin = e;
  const i = new X({
    source: r,
    label: e
  }), s = () => {
    delete t.promiseCache[e], it.has(e) && it.remove(e);
  };
  return i.source.once("destroy", () => {
    t.promiseCache[e] && (rt("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."), s());
  }), i.once("destroy", () => {
    r.destroyed || (rt("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."), s());
  }), i;
}
const d_ = ".svg", f_ = "image/svg+xml", p_ = {
  extension: {
    type: D.LoadParser,
    priority: Ne.Low,
    name: "loadSVG"
  },
  /** used for deprecation purposes */
  name: "loadSVG",
  id: "svg",
  config: {
    crossOrigin: "anonymous",
    parseAsGraphicsContext: !1
  },
  test(r) {
    return Oi(r, f_) || Li(r, d_);
  },
  async load(r, t, e) {
    return t.data?.parseAsGraphicsContext ?? this.config.parseAsGraphicsContext ? m_(r) : g_(r, t, e, this.config.crossOrigin);
  },
  unload(r) {
    r.destroy(!0);
  }
};
async function g_(r, t, e, i) {
  const s = await st.get().fetch(r), n = st.get().createImage();
  n.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(await s.text())}`, n.crossOrigin = i, await n.decode();
  const a = t.data?.width ?? n.width, o = t.data?.height ?? n.height, h = t.data?.resolution || Aa(r), l = Math.ceil(a * h), c = Math.ceil(o * h), u = st.get().createCanvas(l, c), f = u.getContext("2d");
  f.imageSmoothingEnabled = !0, f.imageSmoothingQuality = "high", f.drawImage(n, 0, 0, a * h, o * h);
  const { parseAsGraphicsContext: d, ...g } = t.data ?? {}, p = new oi({
    resource: u,
    alphaMode: "premultiply-alpha-on-upload",
    resolution: h,
    ...g
  });
  return Ta(p, e, r);
}
async function m_(r) {
  const e = await (await st.get().fetch(r)).text(), i = new Jt();
  return i.svg(e), i;
}
const __ = `(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (_e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;
let vi = null, Hn = class {
  constructor() {
    vi || (vi = URL.createObjectURL(new Blob([__], { type: "application/javascript" }))), this.worker = new Worker(vi);
  }
};
Hn.revokeObjectURL = function() {
  vi && (URL.revokeObjectURL(vi), vi = null);
};
const y_ = `(function () {
    'use strict';

    async function loadImageBitmap(url, alphaMode) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`;
let Si = null;
class Uc {
  constructor() {
    Si || (Si = URL.createObjectURL(new Blob([y_], { type: "application/javascript" }))), this.worker = new Worker(Si);
  }
}
Uc.revokeObjectURL = function() {
  Si && (URL.revokeObjectURL(Si), Si = null);
};
let fh = 0, on;
class x_ {
  constructor() {
    this._initialized = !1, this._createdWorkers = 0, this._workerPool = [], this._queue = [], this._resolveHash = {};
  }
  /**
   * Checks if ImageBitmap is supported in the current environment.
   *
   * This method uses a dedicated worker to test ImageBitmap support
   * and caches the result for subsequent calls.
   * @returns Promise that resolves to true if ImageBitmap is supported, false otherwise
   */
  isImageBitmapSupported() {
    return this._isImageBitmapSupported !== void 0 ? this._isImageBitmapSupported : (this._isImageBitmapSupported = new Promise((t) => {
      const { worker: e } = new Hn();
      e.addEventListener("message", (i) => {
        e.terminate(), Hn.revokeObjectURL(), t(i.data);
      });
    }), this._isImageBitmapSupported);
  }
  /**
   * Loads an image as an ImageBitmap using a web worker.
   * @param src - The source URL or path of the image to load
   * @param asset - Optional resolved asset containing additional texture source options
   * @returns Promise that resolves to the loaded ImageBitmap
   * @example
   * ```typescript
   * const bitmap = await WorkerManager.loadImageBitmap('image.png');
   * const bitmapWithOptions = await WorkerManager.loadImageBitmap('image.png', asset);
   * ```
   */
  loadImageBitmap(t, e) {
    return this._run("loadImageBitmap", [t, e?.data?.alphaMode]);
  }
  /**
   * Initializes the worker pool if not already initialized.
   * Currently a no-op but reserved for future initialization logic.
   */
  async _initWorkers() {
    this._initialized || (this._initialized = !0);
  }
  /**
   * Gets an available worker from the pool or creates a new one if needed.
   *
   * Workers are created up to the MAX_WORKERS limit (based on navigator.hardwareConcurrency).
   * Each worker is configured with a message handler for processing results.
   * @returns Available worker or undefined if pool is at capacity and no workers are free
   */
  _getWorker() {
    on === void 0 && (on = navigator.hardwareConcurrency || 4);
    let t = this._workerPool.pop();
    return !t && this._createdWorkers < on && (this._createdWorkers++, t = new Uc().worker, t.addEventListener("message", (e) => {
      this._complete(e.data), this._returnWorker(e.target), this._next();
    })), t;
  }
  /**
   * Returns a worker to the pool after completing a task.
   * @param worker - The worker to return to the pool
   */
  _returnWorker(t) {
    this._workerPool.push(t);
  }
  /**
   * Handles completion of a worker task by resolving or rejecting the corresponding promise.
   * @param data - Result data from the worker containing uuid, data, and optional error
   */
  _complete(t) {
    this._resolveHash[t.uuid] && (t.error !== void 0 ? this._resolveHash[t.uuid].reject(t.error) : this._resolveHash[t.uuid].resolve(t.data), delete this._resolveHash[t.uuid]);
  }
  /**
   * Executes a task using the worker pool system.
   *
   * Queues the task and processes it when a worker becomes available.
   * @param id - Identifier for the type of task to run
   * @param args - Arguments to pass to the worker
   * @returns Promise that resolves with the worker's result
   */
  async _run(t, e) {
    await this._initWorkers();
    const i = new Promise((s, n) => {
      this._queue.push({ id: t, arguments: e, resolve: s, reject: n });
    });
    return this._next(), i;
  }
  /**
   * Processes the next item in the queue if workers are available.
   *
   * This method is called after worker initialization and when workers
   * complete tasks to continue processing the queue.
   */
  _next() {
    if (!this._queue.length)
      return;
    const t = this._getWorker();
    if (!t)
      return;
    const e = this._queue.pop(), i = e.id;
    this._resolveHash[fh] = { resolve: e.resolve, reject: e.reject }, t.postMessage({
      data: e.arguments,
      uuid: fh++,
      id: i
    });
  }
  /**
   * Resets the worker manager, terminating all workers and clearing the queue.
   *
   * This method:
   * - Terminates all active workers
   * - Rejects all pending promises with an error
   * - Clears all internal state
   * - Resets initialization flags
   *
   * This should be called when the worker manager is no longer needed
   * to prevent memory leaks and ensure proper cleanup.
   * @example
   * ```typescript
   * // Clean up when shutting down
   * WorkerManager.reset();
   * ```
   */
  reset() {
    this._workerPool.forEach((t) => t.terminate()), this._workerPool.length = 0, Object.values(this._resolveHash).forEach(({ reject: t }) => {
      t?.(new Error("WorkerManager has been reset before completion"));
    }), this._resolveHash = {}, this._queue.length = 0, this._initialized = !1, this._createdWorkers = 0;
  }
}
const ph = new x_(), b_ = [".jpeg", ".jpg", ".png", ".webp", ".avif"], w_ = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif"
];
async function v_(r, t) {
  const e = await st.get().fetch(r);
  if (!e.ok)
    throw new Error(`[loadImageBitmap] Failed to fetch ${r}: ${e.status} ${e.statusText}`);
  const i = await e.blob();
  return t?.data?.alphaMode === "premultiplied-alpha" ? createImageBitmap(i, { premultiplyAlpha: "none" }) : createImageBitmap(i);
}
const Wc = {
  /** used for deprecation purposes */
  name: "loadTextures",
  id: "texture",
  extension: {
    type: D.LoadParser,
    priority: Ne.High,
    name: "loadTextures"
  },
  config: {
    preferWorkers: !0,
    preferCreateImageBitmap: !0,
    crossOrigin: "anonymous"
  },
  test(r) {
    return Oi(r, w_) || Li(r, b_);
  },
  async load(r, t, e) {
    let i = null;
    globalThis.createImageBitmap && this.config.preferCreateImageBitmap ? this.config.preferWorkers && await ph.isImageBitmapSupported() ? i = await ph.loadImageBitmap(r, t) : i = await v_(r, t) : i = await new Promise((n, a) => {
      i = st.get().createImage(), i.crossOrigin = this.config.crossOrigin, i.src = r, i.complete ? n(i) : (i.onload = () => {
        n(i);
      }, i.onerror = a);
    });
    const s = new oi({
      resource: i,
      alphaMode: "premultiply-alpha-on-upload",
      resolution: t.data?.resolution || Aa(r),
      ...t.data
    });
    return Ta(s, e, r);
  },
  unload(r) {
    r.destroy(!0);
  }
}, S_ = [".mp4", ".m4v", ".webm", ".ogg", ".ogv", ".h264", ".avi", ".mov"];
let hn, ln;
function A_(r, t, e) {
  e === void 0 && !t.startsWith("data:") ? r.crossOrigin = C_(t) : e !== !1 && (r.crossOrigin = typeof e == "string" ? e : "anonymous");
}
function T_(r) {
  return new Promise((t, e) => {
    r.addEventListener("canplaythrough", i), r.addEventListener("error", s), r.load();
    function i() {
      n(), t();
    }
    function s(a) {
      n(), e(a);
    }
    function n() {
      r.removeEventListener("canplaythrough", i), r.removeEventListener("error", s);
    }
  });
}
function C_(r, t = globalThis.location) {
  if (r.startsWith("data:"))
    return "";
  t || (t = globalThis.location);
  const e = new URL(r, document.baseURI);
  return e.hostname !== t.hostname || e.port !== t.port || e.protocol !== t.protocol ? "anonymous" : "";
}
function P_() {
  const r = [], t = [];
  for (const e of S_) {
    const i = ar.MIME_TYPES[e.substring(1)] || `video/${e.substring(1)}`;
    ys(i) && (r.push(e), t.includes(i) || t.push(i));
  }
  return {
    validVideoExtensions: r,
    validVideoMime: t
  };
}
const M_ = {
  /** used for deprecation purposes */
  name: "loadVideo",
  id: "video",
  extension: {
    type: D.LoadParser,
    name: "loadVideo"
  },
  test(r) {
    if (!hn || !ln) {
      const { validVideoExtensions: i, validVideoMime: s } = P_();
      hn = i, ln = s;
    }
    const t = Oi(r, ln), e = Li(r, hn);
    return t || e;
  },
  async load(r, t, e) {
    const i = {
      ...ar.defaultOptions,
      resolution: t.data?.resolution || Aa(r),
      alphaMode: t.data?.alphaMode || await Vl(),
      ...t.data
    }, s = document.createElement("video"), n = {
      preload: i.autoLoad !== !1 ? "auto" : void 0,
      "webkit-playsinline": i.playsinline !== !1 ? "" : void 0,
      playsinline: i.playsinline !== !1 ? "" : void 0,
      muted: i.muted === !0 ? "" : void 0,
      loop: i.loop === !0 ? "" : void 0,
      autoplay: i.autoPlay !== !1 ? "" : void 0
    };
    Object.keys(n).forEach((h) => {
      const l = n[h];
      l !== void 0 && s.setAttribute(h, l);
    }), i.muted === !0 && (s.muted = !0), A_(s, r, i.crossorigin);
    const a = document.createElement("source");
    let o;
    if (i.mime)
      o = i.mime;
    else if (r.startsWith("data:"))
      o = r.slice(5, r.indexOf(";"));
    else if (!r.startsWith("blob:")) {
      const h = r.split("?")[0].slice(r.lastIndexOf(".") + 1).toLowerCase();
      o = ar.MIME_TYPES[h] || `video/${h}`;
    }
    return a.src = r, o && (a.type = o), new Promise((h) => {
      const l = async () => {
        const c = new ar({ ...i, resource: s });
        s.removeEventListener("canplay", l), t.data.preload && await T_(s), h(Ta(c, e, r));
      };
      i.preload && !i.autoPlay && s.load(), s.addEventListener("canplay", l), s.appendChild(a);
    });
  },
  unload(r) {
    r.destroy(!0);
  }
}, Nc = {
  extension: {
    type: D.ResolveParser,
    name: "resolveTexture"
  },
  test: Wc.test,
  parse: (r) => ({
    resolution: parseFloat(Ii.RETINA_PREFIX.exec(r)?.[1] ?? "1"),
    format: r.split(".").pop(),
    src: r
  })
}, k_ = {
  extension: {
    type: D.ResolveParser,
    priority: -2,
    name: "resolveJson"
  },
  test: (r) => Ii.RETINA_PREFIX.test(r) && r.endsWith(".json"),
  parse: Nc.parse
};
class E_ {
  constructor() {
    this._detections = [], this._initialized = !1, this.resolver = new Ii(), this.loader = new Zm(), this.cache = it, this._backgroundLoader = new Nm(this.loader), this._backgroundLoader.active = !0, this.reset();
  }
  /**
   * Initializes the Assets class with configuration options. While not required,
   * calling this before loading assets is recommended to set up default behaviors.
   * @param options - Configuration options for the Assets system
   * @example
   * ```ts
   * // Basic initialization (optional as Assets.load will call this automatically)
   * await Assets.init();
   *
   * // With CDN configuration
   * await Assets.init({
   *     basePath: 'https://my-cdn.com/assets/',
   *     defaultSearchParams: { version: '1.0.0' }
   * });
   *
   * // With manifest and preferences
   * await Assets.init({
   *     manifest: {
   *         bundles: [{
   *             name: 'game-screen',
   *             assets: [
   *                 {
   *                     alias: 'hero',
   *                     src: 'hero.{png,webp}',
   *                     data: { scaleMode: SCALE_MODES.NEAREST }
   *                 },
   *                 {
   *                     alias: 'map',
   *                     src: 'map.json'
   *                 }
   *             ]
   *         }]
   *     },
   *     // Optimize for device capabilities
   *     texturePreference: {
   *         resolution: window.devicePixelRatio,
   *         format: ['webp', 'png']
   *     },
   *     // Set global preferences
   *     preferences: {
   *         crossOrigin: 'anonymous',
   *     }
   * });
   *
   * // Load assets after initialization
   * const heroTexture = await Assets.load('hero');
   * ```
   * @remarks
   * - Can be called only once; subsequent calls will be ignored with a warning
   * - Format detection runs automatically unless `skipDetections` is true
   * - The manifest can be a URL to a JSON file or an inline object
   * @see {@link AssetInitOptions} For all available initialization options
   * @see {@link AssetsManifest} For manifest format details
   */
  async init(t = {}) {
    if (this._initialized) {
      rt("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");
      return;
    }
    if (this._initialized = !0, t.defaultSearchParams && this.resolver.setDefaultSearchParams(t.defaultSearchParams), t.basePath && (this.resolver.basePath = t.basePath), t.bundleIdentifier && this.resolver.setBundleIdentifier(t.bundleIdentifier), t.manifest) {
      let n = t.manifest;
      typeof n == "string" && (n = await this.load(n)), this.resolver.addManifest(n);
    }
    const e = t.texturePreference?.resolution ?? 1, i = typeof e == "number" ? [e] : e, s = await this._detectFormats({
      preferredFormats: t.texturePreference?.format,
      skipDetections: t.skipDetections,
      detections: this._detections
    });
    this.resolver.prefer({
      params: {
        format: s,
        resolution: i
      }
    }), t.preferences && this.setPreferences(t.preferences), t.loadOptions && (this.loader.loadOptions = {
      ...this.loader.loadOptions,
      ...t.loadOptions
    });
  }
  /**
   * Registers assets with the Assets resolver. This method maps keys (aliases) to asset sources,
   * allowing you to load assets using friendly names instead of direct URLs.
   * @param assets - The unresolved assets to add to the resolver
   * @example
   * ```ts
   * // Basic usage - single asset
   * Assets.add({
   *     alias: 'myTexture',
   *     src: 'assets/texture.png'
   * });
   * const texture = await Assets.load('myTexture');
   *
   * // Multiple aliases for the same asset
   * Assets.add({
   *     alias: ['hero', 'player'],
   *     src: 'hero.png'
   * });
   * const hero1 = await Assets.load('hero');
   * const hero2 = await Assets.load('player'); // Same texture
   *
   * // Multiple format support
   * Assets.add({
   *     alias: 'character',
   *     src: 'character.{webp,png}' // Will choose best format
   * });
   * Assets.add({
   *     alias: 'character',
   *     src: ['character.webp', 'character.png'], // Explicitly specify formats
   * });
   *
   * // With texture options
   * Assets.add({
   *     alias: 'sprite',
   *     src: 'sprite.png',
   *     data: { scaleMode: 'nearest' }
   * });
   *
   * // Multiple assets at once
   * Assets.add([
   *     { alias: 'bg', src: 'background.png' },
   *     { alias: 'music', src: 'music.mp3' },
   *     { alias: 'spritesheet', src: 'sheet.json', data: { ignoreMultiPack: false } }
   * ]);
   * ```
   * @remarks
   * - Assets are resolved when loaded, not when added
   * - Multiple formats use the best available format for the browser
   * - Adding with same alias overwrites previous definition
   * - The `data` property is passed to the asset loader
   * @see {@link Resolver} For details on asset resolution
   * @see {@link LoaderParser} For asset-specific data options
   * @advanced
   */
  add(t) {
    this.resolver.add(t);
  }
  async load(t, e) {
    this._initialized || await this.init();
    const i = as(t), s = ne(t).map((o) => {
      if (typeof o != "string") {
        const h = this.resolver.getAlias(o);
        return h.some((l) => !this.resolver.hasKey(l)) && this.add(o), Array.isArray(h) ? h[0] : h;
      }
      return this.resolver.hasKey(o) || this.add({ alias: o, src: o }), o;
    }), n = this.resolver.resolve(s), a = await this._mapLoadToResolve(n, e);
    return i ? a[s[0]] : a;
  }
  /**
   * Registers a bundle of assets that can be loaded as a group. Bundles are useful for organizing
   * assets into logical groups, such as game levels or UI screens.
   * @param bundleId - Unique identifier for the bundle
   * @param assets - Assets to include in the bundle
   * @example
   * ```ts
   * // Add a bundle using array format
   * Assets.addBundle('animals', [
   *     { alias: 'bunny', src: 'bunny.png' },
   *     { alias: 'chicken', src: 'chicken.png' },
   *     { alias: 'thumper', src: 'thumper.png' },
   * ]);
   *
   * // Add a bundle using object format
   * Assets.addBundle('animals', {
   *     bunny: 'bunny.png',
   *     chicken: 'chicken.png',
   *     thumper: 'thumper.png',
   * });
   *
   * // Add a bundle with advanced options
   * Assets.addBundle('ui', [
   *     {
   *         alias: 'button',
   *         src: 'button.{webp,png}',
   *         data: { scaleMode: 'nearest' }
   *     },
   *     {
   *         alias: ['logo', 'brand'],  // Multiple aliases
   *         src: 'logo.svg',
   *         data: { resolution: 2 }
   *     }
   * ]);
   *
   * // Load the bundle
   * await Assets.loadBundle('animals');
   *
   * // Use the loaded assets
   * const bunny = Sprite.from('bunny');
   * const chicken = Sprite.from('chicken');
   * ```
   * @remarks
   * - Bundle IDs must be unique
   * - Assets in bundles are not loaded until `loadBundle` is called
   * - Bundles can be background loaded using `backgroundLoadBundle`
   * - Assets in bundles can be loaded individually using their aliases
   * @see {@link Assets.loadBundle} For loading bundles
   * @see {@link Assets.backgroundLoadBundle} For background loading bundles
   * @see {@link Assets.unloadBundle} For unloading bundles
   * @see {@link AssetsManifest} For manifest format details
   */
  addBundle(t, e) {
    this.resolver.addBundle(t, e);
  }
  /**
   * Loads a bundle or multiple bundles of assets. Bundles are collections of related assets
   * that can be loaded together.
   * @param bundleIds - Single bundle ID or array of bundle IDs to load
   * @param onProgress - Optional callback for load progress (0.0 to 1.0)
   * @returns Promise that resolves with the loaded bundle assets
   * @example
   * ```ts
   * // Define bundles in your manifest
   * const manifest = {
   *     bundles: [
   *         {
   *             name: 'load-screen',
   *             assets: [
   *                 {
   *                     alias: 'background',
   *                     src: 'sunset.png',
   *                 },
   *                 {
   *                     alias: 'bar',
   *                     src: 'load-bar.{png,webp}', // use an array of individual assets
   *                 },
   *             ],
   *         },
   *         {
   *             name: 'game-screen',
   *             assets: [
   *                 {
   *                     alias: 'character',
   *                     src: 'robot.png',
   *                 },
   *                 {
   *                     alias: 'enemy',
   *                     src: 'bad-guy.png',
   *                 },
   *             ],
   *         },
   *     ]
   * };
   *
   * // Initialize with manifest
   * await Assets.init({ manifest });
   *
   * // Or add bundles programmatically
   * Assets.addBundle('load-screen', [...]);
   * Assets.loadBundle('load-screen');
   *
   * // Load a single bundle
   * await Assets.loadBundle('load-screen');
   * const bg = Sprite.from('background'); // Uses alias from bundle
   *
   * // Load multiple bundles
   * await Assets.loadBundle([
   *     'load-screen',
   *     'game-screen'
   * ]);
   *
   * // Load with progress tracking
   * await Assets.loadBundle('game-screen', (progress) => {
   *     console.log(`Loading: ${Math.round(progress * 100)}%`);
   * });
   * ```
   * @remarks
   * - Bundle assets are cached automatically
   * - Bundles can be pre-loaded using `backgroundLoadBundle`
   * - Assets in bundles can be accessed by their aliases
   * - Progress callback receives values from 0.0 to 1.0
   * @throws {Error} If the bundle ID doesn't exist in the manifest
   * @see {@link Assets.addBundle} For adding bundles programmatically
   * @see {@link Assets.backgroundLoadBundle} For background loading bundles
   * @see {@link Assets.unloadBundle} For unloading bundles
   * @see {@link AssetsManifest} For manifest format details
   */
  async loadBundle(t, e) {
    this._initialized || await this.init();
    let i = !1;
    typeof t == "string" && (i = !0, t = [t]);
    const s = this.resolver.resolveBundle(t), n = {}, a = Object.keys(s);
    let o = 0;
    const h = [], l = () => {
      e?.(h.reduce((u, f) => u + f, 0) / o);
    }, c = a.map((u, f) => {
      const d = s[u], g = Object.values(d), m = [...new Set(g.flat())].reduce((_, y) => _ + (y.progressSize || 1), 0);
      return h.push(0), o += m, this._mapLoadToResolve(d, (_) => {
        h[f] = _ * m, l();
      }).then((_) => {
        n[u] = _;
      });
    });
    return await Promise.all(c), i ? n[t[0]] : n;
  }
  /**
   * Initiates background loading of assets. This allows assets to be loaded passively while other operations
   * continue, making them instantly available when needed later.
   *
   * Background loading is useful for:
   * - Preloading game levels while in a menu
   * - Loading non-critical assets during gameplay
   * - Reducing visible loading screens
   * @param urls - Single URL/alias or array of URLs/aliases to load in the background
   * @example
   * ```ts
   * // Basic background loading
   * Assets.backgroundLoad('images/level2-assets.png');
   *
   * // Background load multiple assets
   * Assets.backgroundLoad([
   *     'images/sprite1.png',
   *     'images/sprite2.png',
   *     'images/background.png'
   * ]);
   *
   * // Later, when you need the assets
   * const textures = await Assets.load([
   *     'images/sprite1.png',
   *     'images/sprite2.png'
   * ]); // Resolves immediately if background loading completed
   * ```
   * @remarks
   * - Background loading happens one asset at a time to avoid blocking the main thread
   * - Loading can be interrupted safely by calling `Assets.load()`
   * - Assets are cached as they complete loading
   * - No progress tracking is available for background loading
   */
  async backgroundLoad(t) {
    this._initialized || await this.init(), typeof t == "string" && (t = [t]);
    const e = this.resolver.resolve(t);
    this._backgroundLoader.add(Object.values(e));
  }
  /**
   * Initiates background loading of asset bundles. Similar to backgroundLoad but works with
   * predefined bundles of assets.
   *
   * Perfect for:
   * - Preloading level bundles during gameplay
   * - Loading UI assets during splash screens
   * - Preparing assets for upcoming game states
   * @param bundleIds - Single bundle ID or array of bundle IDs to load in the background
   * @example
   * ```ts
   * // Define bundles in your manifest
   * await Assets.init({
   *     manifest: {
   *         bundles: [
   *             {
   *               name: 'home',
   *               assets: [
   *                 {
   *                     alias: 'background',
   *                     src: 'images/home-bg.png',
   *                 },
   *                 {
   *                     alias: 'logo',
   *                     src: 'images/logo.png',
   *                 }
   *              ]
   *            },
   *            {
   *             name: 'level-1',
   *             assets: [
   *                 {
   *                     alias: 'background',
   *                     src: 'images/level1/bg.png',
   *                 },
   *                 {
   *                     alias: 'sprites',
   *                     src: 'images/level1/sprites.json'
   *                 }
   *             ]
   *         }]
   *     }
   * });
   *
   * // Load the home screen assets right away
   * await Assets.loadBundle('home');
   * showHomeScreen();
   *
   * // Start background loading while showing home screen
   * Assets.backgroundLoadBundle('level-1');
   *
   * // When player starts level, load completes faster
   * await Assets.loadBundle('level-1');
   * hideHomeScreen();
   * startLevel();
   * ```
   * @remarks
   * - Bundle assets are loaded one at a time
   * - Loading can be interrupted safely by calling `Assets.loadBundle()`
   * - Assets are cached as they complete loading
   * - Requires bundles to be registered via manifest or `addBundle`
   * @see {@link Assets.addBundle} For adding bundles programmatically
   * @see {@link Assets.loadBundle} For immediate bundle loading
   * @see {@link AssetsManifest} For manifest format details
   */
  async backgroundLoadBundle(t) {
    this._initialized || await this.init(), typeof t == "string" && (t = [t]);
    const e = this.resolver.resolveBundle(t);
    Object.values(e).forEach((i) => {
      this._backgroundLoader.add(Object.values(i));
    });
  }
  /**
   * Only intended for development purposes.
   * This will wipe the resolver and caches.
   * You will need to reinitialize the Asset
   * @internal
   */
  reset() {
    this.resolver.reset(), this.loader.reset(), this.cache.reset(), this._initialized = !1;
  }
  get(t) {
    if (typeof t == "string")
      return it.get(t);
    const e = {};
    for (let i = 0; i < t.length; i++)
      e[i] = it.get(t[i]);
    return e;
  }
  /**
   * helper function to map resolved assets back to loaded assets
   * @param resolveResults - the resolve results from the resolver
   * @param progressOrLoadOptions - the progress callback or load options
   */
  async _mapLoadToResolve(t, e) {
    const i = [...new Set(Object.values(t))];
    this._backgroundLoader.active = !1;
    const s = await this.loader.load(i, e);
    this._backgroundLoader.active = !0;
    const n = {};
    return i.forEach((a) => {
      const o = s[a.src], h = [a.src];
      a.alias && h.push(...a.alias), h.forEach((l) => {
        n[l] = o;
      }), it.set(h, o);
    }), n;
  }
  /**
   * Unloads assets and releases them from memory. This method ensures proper cleanup of
   * loaded assets when they're no longer needed.
   * @param urls - Single URL/alias or array of URLs/aliases to unload
   * @example
   * ```ts
   * // Unload a single asset
   * await Assets.unload('images/sprite.png');
   *
   * // Unload using an alias
   * await Assets.unload('hero'); // Unloads the asset registered with 'hero' alias
   *
   * // Unload multiple assets
   * await Assets.unload([
   *     'images/background.png',
   *     'images/character.png',
   *     'hero'
   * ]);
   *
   * // Unload and handle creation of new instances
   * await Assets.unload('hero');
   * const newHero = await Assets.load('hero'); // Will load fresh from source
   * ```
   * @remarks
   * > [!WARNING]
   * > Make sure assets aren't being used before unloading:
   * > - Remove sprites using the texture
   * > - Clear any references to the asset
   * > - Textures will be destroyed and can't be used after unloading
   * @throws {Error} If the asset is not found in cache
   */
  async unload(t) {
    this._initialized || await this.init();
    const e = ne(t).map((s) => typeof s != "string" ? s.src : s), i = this.resolver.resolve(e);
    await this._unloadFromResolved(i);
  }
  /**
   * Unloads all assets in a bundle. Use this to free memory when a bundle's assets
   * are no longer needed, such as when switching game levels.
   * @param bundleIds - Single bundle ID or array of bundle IDs to unload
   * @example
   * ```ts
   * // Define and load a bundle
   * Assets.addBundle('level-1', {
   *     background: 'level1/bg.png',
   *     sprites: 'level1/sprites.json',
   *     music: 'level1/music.mp3'
   * });
   *
   * // Load the bundle
   * const level1 = await Assets.loadBundle('level-1');
   *
   * // Use the assets
   * const background = Sprite.from(level1.background);
   *
   * // When done with the level, unload everything
   * await Assets.unloadBundle('level-1');
   * // background sprite is now invalid!
   *
   * // Unload multiple bundles
   * await Assets.unloadBundle([
   *     'level-1',
   *     'level-2',
   *     'ui-elements'
   * ]);
   * ```
   * @remarks
   * > [!WARNING]
   * > - All assets in the bundle will be destroyed
   * > - Bundle needs to be reloaded to use assets again
   * > - Make sure no sprites or other objects are using the assets
   * @throws {Error} If the bundle is not found
   * @see {@link Assets.addBundle} For adding bundles
   * @see {@link Assets.loadBundle} For loading bundles
   */
  async unloadBundle(t) {
    this._initialized || await this.init(), t = ne(t);
    const e = this.resolver.resolveBundle(t), i = Object.keys(e).map((s) => this._unloadFromResolved(e[s]));
    await Promise.all(i);
  }
  async _unloadFromResolved(t) {
    const e = Object.values(t);
    e.forEach((i) => {
      it.remove(i.src);
    }), await this.loader.unload(e);
  }
  /**
   * Detects the supported formats for the browser, and returns an array of supported formats, respecting
   * the users preferred formats order.
   * @param options - the options to use when detecting formats
   * @param options.preferredFormats - the preferred formats to use
   * @param options.skipDetections - if we should skip the detections altogether
   * @param options.detections - the detections to use
   * @returns - the detected formats
   */
  async _detectFormats(t) {
    let e = [];
    t.preferredFormats && (e = Array.isArray(t.preferredFormats) ? t.preferredFormats : [t.preferredFormats]);
    for (const i of t.detections)
      t.skipDetections || await i.test() ? e = await i.add(e) : t.skipDetections || (e = await i.remove(e));
    return e = e.filter((i, s) => e.indexOf(i) === s), e;
  }
  /**
   * All the detection parsers currently added to the Assets class.
   * @advanced
   */
  get detections() {
    return this._detections;
  }
  /**
   * Sets global preferences for asset loading behavior. This method configures how assets
   * are loaded and processed across all parsers.
   * @param preferences - Asset loading preferences
   * @example
   * ```ts
   * // Basic preferences
   * Assets.setPreferences({
   *     crossOrigin: 'anonymous',
   *     parseAsGraphicsContext: false
   * });
   * ```
   * @remarks
   * Preferences are applied to all compatible parsers and affect future asset loading.
   * Common preferences include:
   * - `crossOrigin`: CORS setting for loaded assets
   * - `preferWorkers`: Whether to use web workers for loading textures
   * - `preferCreateImageBitmap`: Use `createImageBitmap` for texture creation. Turning this off will use the `Image` constructor instead.
   * @see {@link AssetsPreferences} For all available preferences
   */
  setPreferences(t) {
    this.loader.parsers.forEach((e) => {
      e.config && Object.keys(e.config).filter((i) => i in t).forEach((i) => {
        e.config[i] = t[i];
      });
    });
  }
}
const ii = new E_();
At.handleByList(D.LoadParser, ii.loader.parsers).handleByList(D.ResolveParser, ii.resolver.parsers).handleByList(D.CacheParser, ii.cache.parsers).handleByList(D.DetectionParser, ii.detections);
At.add(
  Vm,
  $m,
  Ym,
  Km,
  Xm,
  Hm,
  qm,
  t_,
  r_,
  u_,
  p_,
  Wc,
  M_,
  Wm,
  Um,
  Nc,
  k_
);
const gh = {
  loader: D.LoadParser,
  resolver: D.ResolveParser,
  cache: D.CacheParser,
  detection: D.DetectionParser
};
At.handle(D.Asset, (r) => {
  const t = r.ref;
  Object.entries(gh).filter(([e]) => !!t[e]).forEach(([e, i]) => At.add(Object.assign(
    t[e],
    // Allow the function to optionally define it's own
    // ExtensionMetadata, the use cases here is priority for LoaderParsers
    { extension: t[e].extension ?? i }
  )));
}, (r) => {
  const t = r.ref;
  Object.keys(gh).filter((e) => !!t[e]).forEach((e) => At.remove(t[e]));
});
const Vc = {
  5: [0.153388, 0.221461, 0.250301],
  7: [0.071303, 0.131514, 0.189879, 0.214607],
  9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
  11: [93e-4, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
  13: [2406e-6, 9255e-6, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641],
  15: [489e-6, 2403e-6, 9246e-6, 0.02784, 0.065602, 0.120999, 0.174697, 0.197448]
}, R_ = [
  "in vec2 vBlurTexCoords[%size%];",
  "uniform sampler2D uTexture;",
  "out vec4 finalColor;",
  "void main(void)",
  "{",
  "    finalColor = vec4(0.0);",
  "    %blur%",
  "}"
].join(`
`);
function F_(r) {
  const t = Vc[r], e = t.length;
  let i = R_, s = "";
  const n = "finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";
  let a;
  for (let o = 0; o < r; o++) {
    let h = n.replace("%index%", o.toString());
    a = o, o >= e && (a = r - o - 1), h = h.replace("%value%", t[a].toString()), s += h, s += `
`;
  }
  return i = i.replace("%blur%", s), i = i.replace("%size%", r.toString()), i;
}
const I_ = `
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;

    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;
function B_(r, t) {
  const e = Math.ceil(r / 2);
  let i = I_, s = "", n;
  t ? n = "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);" : n = "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";
  for (let a = 0; a < r; a++) {
    let o = n.replace("%index%", a.toString());
    o = o.replace("%sampleIndex%", `${a - (e - 1)}.0`), s += o, s += `
`;
  }
  return i = i.replace("%blur%", s), i = i.replace("%size%", r.toString()), i = i.replace("%dimension%", t ? "z" : "w"), i;
}
function O_(r, t) {
  const e = B_(t, r), i = F_(t);
  return ps.from({
    vertex: e,
    fragment: i,
    name: `blur-${r ? "horizontal" : "vertical"}-pass-filter`
  });
}
var L_ = `

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let pixelStrength = gfu.uInputSize.%dimension% * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;
function D_(r, t) {
  const e = Vc[t], i = e.length, s = [], n = [], a = [];
  for (let u = 0; u < t; u++) {
    s[u] = `@location(${u}) offset${u}: vec2<f32>,`, r ? n[u] = `filteredCord + vec2(${u - i + 1} * pixelStrength, 0.0),` : n[u] = `filteredCord + vec2(0.0, ${u - i + 1} * pixelStrength),`;
    const f = u < i ? u : t - u - 1, d = e[f].toString();
    a[u] = `finalColor += textureSample(uTexture, uSampler, offset${u}) * ${d};`;
  }
  const o = s.join(`
`), h = n.join(`
`), l = a.join(`
`), c = L_.replace("%blur-struct%", o).replace("%blur-vertex-out%", h).replace("%blur-fragment-in%", o).replace("%blur-sampling%", l).replace("%dimension%", r ? "z" : "w");
  return Bi.from({
    vertex: {
      source: c,
      entryPoint: "mainVertex"
    },
    fragment: {
      source: c,
      entryPoint: "mainFragment"
    }
  });
}
const Yc = class $c extends rc {
  /**
   * @param options
   * @param options.horizontal - Do pass along the x-axis (`true`) or y-axis (`false`).
   * @param options.strength - The strength of the blur filter.
   * @param options.quality - The quality of the blur filter.
   * @param options.kernelSize - The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15.
   */
  constructor(t) {
    t = { ...$c.defaultOptions, ...t };
    const e = O_(t.horizontal, t.kernelSize), i = D_(t.horizontal, t.kernelSize);
    super({
      glProgram: e,
      gpuProgram: i,
      resources: {
        blurUniforms: {
          uStrength: { value: 0, type: "f32" }
        }
      },
      ...t
    }), this.horizontal = t.horizontal, this._quality = 0, this.quality = t.quality, this.blur = t.strength, this._uniforms = this.resources.blurUniforms.uniforms;
  }
  /**
   * Applies the filter.
   * @param filterManager - The manager.
   * @param input - The input target.
   * @param output - The output target.
   * @param clearMode - How to clear
   */
  apply(t, e, i, s) {
    if (this._uniforms.uStrength = this.strength / this.passes, this.passes === 1)
      t.applyFilter(this, e, i, s);
    else {
      const n = Ri.getSameSizeTexture(e);
      let a = e, o = n;
      this._state.blend = !1;
      const h = t.renderer.type === _r.WEBGPU;
      for (let l = 0; l < this.passes - 1; l++) {
        t.applyFilter(this, a, o, l === 0 ? !0 : h);
        const c = o;
        o = a, a = c;
      }
      this._state.blend = !0, t.applyFilter(this, a, i, s), Ri.returnTexture(n);
    }
  }
  /**
   * Sets the strength of both the blur.
   * @default 16
   */
  get blur() {
    return this.strength;
  }
  set blur(t) {
    this.padding = 1 + Math.abs(t) * 2, this.strength = t;
  }
  /**
   * Sets the quality of the blur by modifying the number of passes. More passes means higher
   * quality blurring but the lower the performance.
   * @default 4
   */
  get quality() {
    return this._quality;
  }
  set quality(t) {
    this._quality = t, this.passes = t;
  }
};
Yc.defaultOptions = {
  /** The strength of the blur filter. */
  strength: 8,
  /** The quality of the blur filter. */
  quality: 4,
  /** The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15. */
  kernelSize: 5
};
let cn = Yc;
class qn extends rc {
  constructor(...t) {
    let e = t[0] ?? {};
    typeof e == "number" && (N(Z, "BlurFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }"), e = { strength: e }, t[1] !== void 0 && (e.quality = t[1]), t[2] !== void 0 && (e.resolution = t[2] || "inherit"), t[3] !== void 0 && (e.kernelSize = t[3])), e = { ...cn.defaultOptions, ...e };
    const { strength: i, strengthX: s, strengthY: n, quality: a, ...o } = e;
    super({
      ...o,
      compatibleRenderers: _r.BOTH,
      resources: {}
    }), this._repeatEdgePixels = !1, this.blurXFilter = new cn({ horizontal: !0, ...e }), this.blurYFilter = new cn({ horizontal: !1, ...e }), this.quality = a, this.strengthX = s ?? i, this.strengthY = n ?? i, this.repeatEdgePixels = !1;
  }
  /**
   * Applies the filter.
   * @param filterManager - The manager.
   * @param input - The input target.
   * @param output - The output target.
   * @param clearMode - How to clear
   * @advanced
   */
  apply(t, e, i, s) {
    const n = Math.abs(this.blurXFilter.strength), a = Math.abs(this.blurYFilter.strength);
    if (n && a) {
      const o = Ri.getSameSizeTexture(e);
      this.blurXFilter.blendMode = "normal", this.blurXFilter.apply(t, e, o, !0), this.blurYFilter.blendMode = this.blendMode, this.blurYFilter.apply(t, o, i, s), Ri.returnTexture(o);
    } else a ? (this.blurYFilter.blendMode = this.blendMode, this.blurYFilter.apply(t, e, i, s)) : (this.blurXFilter.blendMode = this.blendMode, this.blurXFilter.apply(t, e, i, s));
  }
  updatePadding() {
    this._repeatEdgePixels ? this.padding = 0 : this.padding = Math.max(Math.abs(this.blurXFilter.blur), Math.abs(this.blurYFilter.blur)) * 2;
  }
  /**
   * Sets the strength of both the blurX and blurY properties simultaneously.
   * Controls the overall intensity of the Gaussian blur effect.
   * @example
   * ```ts
   * // Set equal blur strength for both axes
   * filter.strength = 8;
   *
   * // Will throw error if X and Y are different
   * filter.strengthX = 4;
   * filter.strengthY = 8;
   * filter.strength; // Error: BlurFilter's strengthX and strengthY are different
   * ```
   * @default 8
   * @throws {Error} If strengthX and strengthY are different values
   */
  get strength() {
    if (this.strengthX !== this.strengthY)
      throw new Error("BlurFilter's strengthX and strengthY are different");
    return this.strengthX;
  }
  set strength(t) {
    this.blurXFilter.blur = this.blurYFilter.blur = t, this.updatePadding();
  }
  /**
   * Sets the number of passes for blur. More passes means higher quality blurring.
   * Controls the precision and smoothness of the blur effect at the cost of performance.
   * @example
   * ```ts
   * // High quality blur (slower)
   * filter.quality = 8;
   *
   * // Low quality blur (faster)
   * filter.quality = 2;
   * ```
   * @default 4
   * @remarks Higher values produce better quality but impact performance
   */
  get quality() {
    return this.blurXFilter.quality;
  }
  set quality(t) {
    this.blurXFilter.quality = this.blurYFilter.quality = t;
  }
  /**
   * Sets the strength of horizontal blur.
   * Controls the blur intensity along the x-axis independently.
   * @example
   * ```ts
   * // Apply horizontal-only blur
   * filter.strengthX = 8;
   * filter.strengthY = 0;
   *
   * // Create motion blur effect
   * filter.strengthX = 16;
   * filter.strengthY = 2;
   * ```
   * @default 8
   */
  get strengthX() {
    return this.blurXFilter.blur;
  }
  set strengthX(t) {
    this.blurXFilter.blur = t, this.updatePadding();
  }
  /**
   * Sets the strength of the vertical blur.
   * Controls the blur intensity along the y-axis independently.
   * @example
   * ```ts
   * // Apply vertical-only blur
   * filter.strengthX = 0;
   * filter.strengthY = 8;
   *
   * // Create radial blur effect
   * filter.strengthX = 8;
   * filter.strengthY = 8;
   * ```
   * @default 8
   */
  get strengthY() {
    return this.blurYFilter.blur;
  }
  set strengthY(t) {
    this.blurYFilter.blur = t, this.updatePadding();
  }
  /**
   * Sets the strength of both the blurX and blurY properties simultaneously
   * @default 2
   * @deprecated since 8.3.0
   * @see BlurFilter.strength
   */
  get blur() {
    return N("8.3.0", "BlurFilter.blur is deprecated, please use BlurFilter.strength instead."), this.strength;
  }
  set blur(t) {
    N("8.3.0", "BlurFilter.blur is deprecated, please use BlurFilter.strength instead."), this.strength = t;
  }
  /**
   * Sets the strength of the blurX property
   * @default 2
   * @deprecated since 8.3.0
   * @see BlurFilter.strengthX
   */
  get blurX() {
    return N("8.3.0", "BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead."), this.strengthX;
  }
  set blurX(t) {
    N("8.3.0", "BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead."), this.strengthX = t;
  }
  /**
   * Sets the strength of the blurY property
   * @default 2
   * @deprecated since 8.3.0
   * @see BlurFilter.strengthY
   */
  get blurY() {
    return N("8.3.0", "BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead."), this.strengthY;
  }
  set blurY(t) {
    N("8.3.0", "BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead."), this.strengthY = t;
  }
  /**
   * If set to true the edge of the target will be clamped
   * @default false
   */
  get repeatEdgePixels() {
    return this._repeatEdgePixels;
  }
  set repeatEdgePixels(t) {
    this._repeatEdgePixels = t, this.updatePadding();
  }
}
qn.defaultOptions = {
  /** The strength of the blur filter. */
  strength: 8,
  /** The quality of the blur filter. */
  quality: 4,
  /** The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15. */
  kernelSize: 5
};
class Sr extends Bl {
  /**
   * Creates a new Graphics object.
   * @param options - Options for the Graphics.
   */
  constructor(t) {
    t instanceof Jt && (t = { context: t });
    const { context: e, roundPixels: i, ...s } = t || {};
    super({
      label: "Graphics",
      ...s
    }), this.renderPipeId = "graphics", e ? this.context = e : (this.context = this._ownedContext = new Jt(), this.context.autoGarbageCollect = this.autoGarbageCollect), this.didViewUpdate = !0, this.allowChildren = !1, this.roundPixels = i ?? !1;
  }
  set context(t) {
    t !== this._context && (this._context && (this._context.off("update", this.onViewUpdate, this), this._context.off("unload", this.unload, this)), this._context = t, this._context.on("update", this.onViewUpdate, this), this._context.on("unload", this.unload, this), this.onViewUpdate());
  }
  /**
   * The underlying graphics context used for drawing operations.
   * Controls how shapes and paths are rendered.
   * @example
   * ```ts
   * // Create a shared context
   * const sharedContext = new GraphicsContext();
   *
   * // Create graphics objects sharing the same context
   * const graphics1 = new Graphics();
   * const graphics2 = new Graphics();
   *
   * // Assign shared context
   * graphics1.context = sharedContext;
   * graphics2.context = sharedContext;
   *
   * // Both graphics will show the same shapes
   * sharedContext
   *     .rect(0, 0, 100, 100)
   *     .fill({ color: 0xff0000 });
   * ```
   * @see {@link GraphicsContext} For drawing operations
   * @see {@link GraphicsOptions} For context configuration
   */
  get context() {
    return this._context;
  }
  /**
   * The local bounds of the graphics object.
   * Returns the boundaries after all graphical operations but before any transforms.
   * @example
   * ```ts
   * const graphics = new Graphics();
   *
   * // Draw a shape
   * graphics
   *     .rect(0, 0, 100, 100)
   *     .fill({ color: 0xff0000 });
   *
   * // Get bounds information
   * const bounds = graphics.bounds;
   * console.log(bounds.width);  // 100
   * console.log(bounds.height); // 100
   * ```
   * @readonly
   * @see {@link Bounds} For bounds operations
   * @see {@link Container#getBounds} For transformed bounds
   */
  get bounds() {
    return this._context.bounds;
  }
  /**
   * Graphics objects do not need to update their bounds as the context handles this.
   * @private
   */
  updateBounds() {
  }
  /**
   * Checks if the object contains the given point.
   * Returns true if the point lies within the Graphics object's rendered area.
   * @example
   * ```ts
   * const graphics = new Graphics();
   *
   * // Draw a shape
   * graphics
   *     .rect(0, 0, 100, 100)
   *     .fill({ color: 0xff0000 });
   *
   * // Check point intersection
   * if (graphics.containsPoint({ x: 50, y: 50 })) {
   *     console.log('Point is inside rectangle!');
   * }
   * ```
   * @param point - The point to check in local coordinates
   * @returns True if the point is inside the Graphics object
   * @see {@link Graphics#bounds} For bounding box checks
   * @see {@link PointData} For point data structure
   */
  containsPoint(t) {
    return this._context.containsPoint(t);
  }
  /**
   * Destroys this graphics renderable and optionally its context.
   * @param options - Options parameter. A boolean will act as if all options
   *
   * If the context was created by this graphics and `destroy(false)` or `destroy()` is called
   * then the context will still be destroyed.
   *
   * If you want to explicitly not destroy this context that this graphics created,
   * then you should pass destroy({ context: false })
   *
   * If the context was passed in as an argument to the constructor then it will not be destroyed
   * @example
   * ```ts
   * // Destroy the graphics and its context
   * graphics.destroy();
   * graphics.destroy(true);
   * graphics.destroy({ context: true, texture: true, textureSource: true });
   * ```
   */
  destroy(t) {
    this._ownedContext && !t ? this._ownedContext.destroy(t) : (t === !0 || t?.context === !0) && this._context.destroy(t), this._ownedContext = null, this._context = null, super.destroy(t);
  }
  /**
   * @param now - The current time in milliseconds.
   * @internal
   */
  _onTouch(t) {
    this._gcLastUsed = t, this._context._gcLastUsed = t;
  }
  _callContextMethod(t, e) {
    return this.context[t](...e), this;
  }
  // --------------------------------------- GraphicsContext methods ---------------------------------------
  /**
   * Sets the current fill style of the graphics context.
   * The fill style can be a color, gradient, pattern, or a complex style object.
   * @example
   * ```ts
   * const graphics = new Graphics();
   *
   * // Basic color fill
   * graphics
   *     .setFillStyle({ color: 0xff0000 }) // Red fill
   *     .rect(0, 0, 100, 100)
   *     .fill();
   *
   * // Gradient fill
   * const gradient = new FillGradient({
   *    end: { x: 1, y: 0 },
   *    colorStops: [
   *         { offset: 0, color: 0xff0000 }, // Red at start
   *         { offset: 0.5, color: 0x00ff00 }, // Green at middle
   *         { offset: 1, color: 0x0000ff }, // Blue at end
   *    ],
   * });
   *
   * graphics
   *     .setFillStyle(gradient)
   *     .circle(100, 100, 50)
   *     .fill();
   *
   * // Pattern fill
   * const pattern = new FillPattern(texture);
   * graphics
   *     .setFillStyle({
   *         fill: pattern,
   *         alpha: 0.5
   *     })
   *     .rect(0, 0, 200, 200)
   *     .fill();
   * ```
   * @param {FillInput} args - The fill style to apply
   * @returns The Graphics instance for chaining
   * @see {@link FillStyle} For fill style options
   * @see {@link FillGradient} For gradient fills
   * @see {@link FillPattern} For pattern fills
   */
  setFillStyle(...t) {
    return this._callContextMethod("setFillStyle", t);
  }
  /**
   * Sets the current stroke style of the graphics context.
   * Similar to fill styles, stroke styles can encompass colors, gradients, patterns, or more detailed configurations.
   * @example
   * ```ts
   * const graphics = new Graphics();
   *
   * // Basic color stroke
   * graphics
   *     .setStrokeStyle({
   *         width: 2,
   *         color: 0x000000
   *     })
   *     .rect(0, 0, 100, 100)
   *     .stroke();
   *
   * // Complex stroke style
   * graphics
   *     .setStrokeStyle({
   *         width: 4,
   *         color: 0xff0000,
   *         alpha: 0.5,
   *         join: 'round',
   *         cap: 'round',
   *         alignment: 0.5
   *     })
   *     .circle(100, 100, 50)
   *     .stroke();
   *
   * // Gradient stroke
   * const gradient = new FillGradient({
   *    end: { x: 1, y: 0 },
   *    colorStops: [
   *         { offset: 0, color: 0xff0000 }, // Red at start
   *         { offset: 0.5, color: 0x00ff00 }, // Green at middle
   *         { offset: 1, color: 0x0000ff }, // Blue at end
   *    ],
   * });
   *
   * graphics
   *     .setStrokeStyle({
   *         width: 10,
   *         fill: gradient
   *     })
   *     .poly([0,0, 100,50, 0,100])
   *     .stroke();
   * ```
   * @param {StrokeInput} args - The stroke style to apply
   * @returns The Graphics instance for chaining
   * @see {@link StrokeStyle} For stroke style options
   * @see {@link FillGradient} For gradient strokes
   * @see {@link FillPattern} For pattern strokes
   */
  setStrokeStyle(...t) {
    return this._callContextMethod("setStrokeStyle", t);
  }
  fill(...t) {
    return this._callContextMethod("fill", t);
  }
  /**
   * Strokes the current path with the current stroke style or specified style.
   * Outlines the shape using the stroke settings.
   * @example
   * ```ts
   * const graphics = new Graphics();
   *
   * // Stroke with direct color
   * graphics
   *     .circle(50, 50, 25)
   *     .stroke({
   *         width: 2,
   *         color: 0xff0000
   *     }); // 2px red stroke
   *
   * // Fill with texture
   * graphics
   *    .rect(0, 0, 100, 100)
   *    .stroke(myTexture); // Fill with texture
   *
   * // Stroke with gradient
   * const gradient = new FillGradient({
   *     end: { x: 1, y: 0 },
   *     colorStops: [
   *         { offset: 0, color: 0xff0000 },
   *         { offset: 0.5, color: 0x00ff00 },
   *         { offset: 1, color: 0x0000ff },
   *     ],
   * });
   *
   * graphics
   *     .rect(0, 0, 100, 100)
   *     .stroke({
   *         width: 4,
   *         fill: gradient,
   *         alignment: 0.5,
   *         join: 'round'
   *     });
   * ```
   * @param {StrokeStyle} args - Optional stroke style to apply. Can be:
   * - A stroke style object with width, color, etc.
   * - A gradient
   * - A pattern
   * If omitted, uses current stroke style.
   * @returns The Graphics instance for chaining
   * @see {@link StrokeStyle} For stroke style options
   * @see {@link FillGradient} For gradient strokes
   * @see {@link setStrokeStyle} For setting default stroke style
   */
  stroke(...t) {
    return this._callContextMethod("stroke", t);
  }
  texture(...t) {
    return this._callContextMethod("texture", t);
  }
  /**
   * Resets the current path. Any previous path and its commands are discarded and a new path is
   * started. This is typically called before beginning a new shape or series of drawing commands.
   * @example
   * ```ts
   * const graphics = new Graphics();
   * graphics
   *     .circle(150, 150, 50)
   *     .fill({ color: 0x00ff00 })
   *     .beginPath() // Starts a new path
   *     .circle(250, 150, 50)
   *     .fill({ color: 0x0000ff });
   * ```
   * @returns The Graphics instance for chaining
   * @see {@link Graphics#moveTo} For starting a new subpath
   * @see {@link Graphics#closePath} For closing the current path
   */
  beginPath() {
    return this._callContextMethod("beginPath", []);
  }
  /**
   * Applies a cutout to the last drawn shape. This is used to create holes or complex shapes by
   * subtracting a path from the previously drawn path.
   *
   * If a hole is not completely in a shape, it will fail to cut correctly.
   * @example
   * ```ts
   * const graphics = new Graphics();
   *
   * // Draw outer circle
   * graphics
   *     .circle(100, 100, 50)
   *     .fill({ color: 0xff0000 });
   *     .circle(100, 100, 25) // Inner circle
   *     .cut() // Cuts out the inner circle from the outer circle
   * ```
   */
  cut() {
    return this._callContextMethod("cut", []);
  }
  arc(...t) {
    return this._callContextMethod("arc", t);
  }
  arcTo(...t) {
    return this._callContextMethod("arcTo", t);
  }
  arcToSvg(...t) {
    return this._callContextMethod("arcToSvg", t);
  }
  bezierCurveTo(...t) {
    return this._callContextMethod("bezierCurveTo", t);
  }
  /**
   * Closes the current path by drawing a straight line back to the start point.
   *
   * This is useful for completing shapes and ensuring they are properly closed for fills.
   * @example
   * ```ts
   * // Create a triangle with closed path
   * const graphics = new Graphics();
   * graphics
   *     .moveTo(50, 50)
   *     .lineTo(100, 100)
   *     .lineTo(0, 100)
   *     .closePath()
   * ```
   * @returns The Graphics instance for method chaining
   * @see {@link Graphics#beginPath} For starting a new path
   * @see {@link Graphics#fill} For filling closed paths
   * @see {@link Graphics#stroke} For stroking paths
   */
  closePath() {
    return this._callContextMethod("closePath", []);
  }
  ellipse(...t) {
    return this._callContextMethod("ellipse", t);
  }
  circle(...t) {
    return this._callContextMethod("circle", t);
  }
  path(...t) {
    return this._callContextMethod("path", t);
  }
  lineTo(...t) {
    return this._callContextMethod("lineTo", t);
  }
  moveTo(...t) {
    return this._callContextMethod("moveTo", t);
  }
  quadraticCurveTo(...t) {
    return this._callContextMethod("quadraticCurveTo", t);
  }
  rect(...t) {
    return this._callContextMethod("rect", t);
  }
  roundRect(...t) {
    return this._callContextMethod("roundRect", t);
  }
  poly(...t) {
    return this._callContextMethod("poly", t);
  }
  regularPoly(...t) {
    return this._callContextMethod("regularPoly", t);
  }
  roundPoly(...t) {
    return this._callContextMethod("roundPoly", t);
  }
  roundShape(...t) {
    return this._callContextMethod("roundShape", t);
  }
  filletRect(...t) {
    return this._callContextMethod("filletRect", t);
  }
  chamferRect(...t) {
    return this._callContextMethod("chamferRect", t);
  }
  star(...t) {
    return this._callContextMethod("star", t);
  }
  svg(...t) {
    return this._callContextMethod("svg", t);
  }
  restore(...t) {
    return this._callContextMethod("restore", t);
  }
  /**
   * Saves the current graphics state onto a stack. The state includes:
   * - Current transformation matrix
   * - Current fill style
   * - Current stroke style
   * @example
   * ```ts
   * const graphics = new Graphics();
   *
   * // Save state before complex operations
   * graphics.save();
   *
   * // Create transformed and styled shape
   * graphics
   *     .translateTransform(100, 100)
   *     .rotateTransform(Math.PI / 4)
   *     .setFillStyle({
   *         color: 0xff0000,
   *         alpha: 0.5
   *     })
   *     .rect(-25, -25, 50, 50)
   *     .fill();
   *
   * // Restore to original state
   * graphics.restore();
   *
   * // Continue drawing with previous state
   * graphics
   *     .circle(50, 50, 25)
   *     .fill();
   * ```
   * @returns The Graphics instance for method chaining
   * @see {@link Graphics#restore} For restoring the saved state
   * @see {@link Graphics#setTransform} For setting transformations
   */
  save() {
    return this._callContextMethod("save", []);
  }
  /**
   * Returns the current transformation matrix of the graphics context.
   * This matrix represents all accumulated transformations including translate, scale, and rotate.
   * @example
   * ```ts
   * const graphics = new Graphics();
   *
   * // Apply some transformations
   * graphics
   *     .translateTransform(100, 100)
   *     .rotateTransform(Math.PI / 4);
   *
   * // Get the current transform matrix
   * const matrix = graphics.getTransform();
   * console.log(matrix.tx, matrix.ty); // 100, 100
   *
   * // Use the matrix for other operations
   * graphics
   *     .setTransform(matrix)
   *     .circle(0, 0, 50)
   *     .fill({ color: 0xff0000 });
   * ```
   * @returns The current transformation matrix.
   * @see {@link Graphics#setTransform} For setting the transform matrix
   * @see {@link Matrix} For matrix operations
   */
  getTransform() {
    return this.context.getTransform();
  }
  /**
   * Resets the current transformation matrix to the identity matrix, effectively removing
   * any transformations (rotation, scaling, translation) previously applied.
   * @example
   * ```ts
   * const graphics = new Graphics();
   *
   * // Apply transformations
   * graphics
   *     .translateTransform(100, 100)
   *     .scaleTransform(2, 2)
   *     .circle(0, 0, 25)
   *     .fill({ color: 0xff0000 });
   * // Reset transform to default state
   * graphics
   *     .resetTransform()
   *     .circle(50, 50, 25) // Will draw at actual coordinates
   *     .fill({ color: 0x00ff00 });
   * ```
   * @returns The Graphics instance for method chaining
   * @see {@link Graphics#getTransform} For getting the current transform
   * @see {@link Graphics#setTransform} For setting a specific transform
   * @see {@link Graphics#save} For saving the current transform state
   * @see {@link Graphics#restore} For restoring a previous transform state
   */
  resetTransform() {
    return this._callContextMethod("resetTransform", []);
  }
  rotateTransform(...t) {
    return this._callContextMethod("rotate", t);
  }
  scaleTransform(...t) {
    return this._callContextMethod("scale", t);
  }
  setTransform(...t) {
    return this._callContextMethod("setTransform", t);
  }
  transform(...t) {
    return this._callContextMethod("transform", t);
  }
  translateTransform(...t) {
    return this._callContextMethod("translate", t);
  }
  /**
   * Clears all drawing commands from the graphics context, effectively resetting it.
   * This includes clearing the current path, fill style, stroke style, and transformations.
   *
   * > [!NOTE] Graphics objects are not designed to be continuously cleared and redrawn.
   * > Instead, they are intended to be used for static or semi-static graphics that
   * > can be redrawn as needed. Frequent clearing and redrawing may lead to performance issues.
   * @example
   * ```ts
   * const graphics = new Graphics();
   *
   * // Draw some shapes
   * graphics
   *     .circle(100, 100, 50)
   *     .fill({ color: 0xff0000 })
   *     .rect(200, 100, 100, 50)
   *     .fill({ color: 0x00ff00 });
   *
   * // Clear all graphics
   * graphics.clear();
   *
   * // Start fresh with new shapes
   * graphics
   *     .circle(150, 150, 30)
   *     .fill({ color: 0x0000ff });
   * ```
   * @returns The Graphics instance for method chaining
   * @see {@link Graphics#beginPath} For starting a new path without clearing styles
   * @see {@link Graphics#save} For saving the current state
   * @see {@link Graphics#restore} For restoring a previous state
   */
  clear() {
    return this._callContextMethod("clear", []);
  }
  /**
   * Gets or sets the current fill style for the graphics context. The fill style determines
   * how shapes are filled when using the fill() method.
   * @example
   * ```ts
   * const graphics = new Graphics();
   *
   * // Basic color fill
   * graphics.fillStyle = {
   *     color: 0xff0000,  // Red
   *     alpha: 1
   * };
   *
   * // Using gradients
   * const gradient = new FillGradient({
   *     end: { x: 0, y: 1 }, // Vertical gradient
   *     stops: [
   *         { offset: 0, color: 0xff0000, alpha: 1 }, // Start color
   *         { offset: 1, color: 0x0000ff, alpha: 1 }  // End color
   *     ]
   * });
   *
   * graphics.fillStyle = {
   *     fill: gradient,
   *     alpha: 0.8
   * };
   *
   * // Using patterns
   * graphics.fillStyle = {
   *     texture: myTexture,
   *     alpha: 1,
   *     matrix: new Matrix()
   *         .scale(0.5, 0.5)
   *         .rotate(Math.PI / 4)
   * };
   * ```
   * @type {ConvertedFillStyle}
   * @see {@link FillStyle} For all available fill style options
   * @see {@link FillGradient} For creating gradient fills
   * @see {@link Graphics#fill} For applying the fill to paths
   */
  get fillStyle() {
    return this._context.fillStyle;
  }
  set fillStyle(t) {
    this._context.fillStyle = t;
  }
  /**
   * Gets or sets the current stroke style for the graphics context. The stroke style determines
   * how paths are outlined when using the stroke() method.
   * @example
   * ```ts
   * const graphics = new Graphics();
   *
   * // Basic stroke style
   * graphics.strokeStyle = {
   *     width: 2,
   *     color: 0xff0000,
   *     alpha: 1
   * };
   *
   * // Using with gradients
   * const gradient = new FillGradient({
   *   end: { x: 0, y: 1 },
   *   stops: [
   *       { offset: 0, color: 0xff0000, alpha: 1 },
   *       { offset: 1, color: 0x0000ff, alpha: 1 }
   *   ]
   * });
   *
   * graphics.strokeStyle = {
   *     width: 4,
   *     fill: gradient,
   *     alignment: 0.5,
   *     join: 'round',
   *     cap: 'round'
   * };
   *
   * // Complex stroke settings
   * graphics.strokeStyle = {
   *     width: 6,
   *     color: 0x00ff00,
   *     alpha: 0.5,
   *     join: 'miter',
   *     miterLimit: 10,
   * };
   * ```
   * @see {@link StrokeStyle} For all available stroke style options
   * @see {@link Graphics#stroke} For applying the stroke to paths
   */
  get strokeStyle() {
    return this._context.strokeStyle;
  }
  set strokeStyle(t) {
    this._context.strokeStyle = t;
  }
  /**
   * Creates a new Graphics object that copies the current graphics content.
   * The clone can either share the same context (shallow clone) or have its own independent
   * context (deep clone).
   * @example
   * ```ts
   * const graphics = new Graphics();
   *
   * // Create original graphics content
   * graphics
   *     .circle(100, 100, 50)
   *     .fill({ color: 0xff0000 });
   *
   * // Create a shallow clone (shared context)
   * const shallowClone = graphics.clone();
   *
   * // Changes to original affect the clone
   * graphics
   *     .circle(200, 100, 30)
   *     .fill({ color: 0x00ff00 });
   *
   * // Create a deep clone (independent context)
   * const deepClone = graphics.clone(true);
   *
   * // Modify deep clone independently
   * deepClone
   *     .translateTransform(100, 100)
   *     .circle(0, 0, 40)
   *     .fill({ color: 0x0000ff });
   * ```
   * @param deep - Whether to create a deep clone of the graphics object.
   *              If false (default), the context will be shared between objects.
   *              If true, creates an independent copy of the context.
   * @returns A new Graphics instance with either shared or copied context
   * @see {@link Graphics#context} For accessing the underlying graphics context
   * @see {@link GraphicsContext} For understanding the shared context behavior
   */
  clone(t = !1) {
    return t ? new Sr(this._context.clone()) : (this._ownedContext = null, new Sr(this._context));
  }
  // -------- v7 deprecations ---------
  /**
   * @param width
   * @param color
   * @param alpha
   * @deprecated since 8.0.0 Use {@link Graphics#setStrokeStyle} instead
   */
  lineStyle(t, e, i) {
    N(Z, "Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");
    const s = {};
    return t && (s.width = t), e && (s.color = e), i && (s.alpha = i), this.context.strokeStyle = s, this;
  }
  /**
   * @param color
   * @param alpha
   * @deprecated since 8.0.0 Use {@link Graphics#fill} instead
   */
  beginFill(t, e) {
    N(Z, "Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");
    const i = {};
    return t !== void 0 && (i.color = t), e !== void 0 && (i.alpha = e), this.context.fillStyle = i, this;
  }
  /**
   * @deprecated since 8.0.0 Use {@link Graphics#fill} instead
   */
  endFill() {
    N(Z, "Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."), this.context.fill();
    const t = this.context.strokeStyle;
    return (t.width !== Jt.defaultStrokeStyle.width || t.color !== Jt.defaultStrokeStyle.color || t.alpha !== Jt.defaultStrokeStyle.alpha) && this.context.stroke(), this;
  }
  /**
   * @param {...any} args
   * @deprecated since 8.0.0 Use {@link Graphics#circle} instead
   */
  drawCircle(...t) {
    return N(Z, "Graphics#drawCircle has been renamed to Graphics#circle"), this._callContextMethod("circle", t);
  }
  /**
   * @param {...any} args
   * @deprecated since 8.0.0 Use {@link Graphics#ellipse} instead
   */
  drawEllipse(...t) {
    return N(Z, "Graphics#drawEllipse has been renamed to Graphics#ellipse"), this._callContextMethod("ellipse", t);
  }
  /**
   * @param {...any} args
   * @deprecated since 8.0.0 Use {@link Graphics#poly} instead
   */
  drawPolygon(...t) {
    return N(Z, "Graphics#drawPolygon has been renamed to Graphics#poly"), this._callContextMethod("poly", t);
  }
  /**
   * @param {...any} args
   * @deprecated since 8.0.0 Use {@link Graphics#rect} instead
   */
  drawRect(...t) {
    return N(Z, "Graphics#drawRect has been renamed to Graphics#rect"), this._callContextMethod("rect", t);
  }
  /**
   * @param {...any} args
   * @deprecated since 8.0.0 Use {@link Graphics#roundRect} instead
   */
  drawRoundedRect(...t) {
    return N(Z, "Graphics#drawRoundedRect has been renamed to Graphics#roundRect"), this._callContextMethod("roundRect", t);
  }
  /**
   * @param {...any} args
   * @deprecated since 8.0.0 Use {@link Graphics#star} instead
   */
  drawStar(...t) {
    return N(Z, "Graphics#drawStar has been renamed to Graphics#star"), this._callContextMethod("star", t);
  }
}
At.add(Ld, Dd);
function U_({
  numCandles: r = 9,
  girlImage: t = "/girl.png",
  cakeImage: e = "/cake.png",
  candleImage: i = "/candle.png",
  backgroundColor: s = "#000000"
}) {
  const n = za(null), a = za(null);
  return pu(() => {
    if (!n.current) return;
    let o = null, h = !1, l = !1;
    const c = [], u = { x: 0, y: 0, offset: { x: 0, y: 0 } };
    let f = !1, d, g, p, m, _;
    const y = (I, M) => Math.random() * (M - I) + I, x = async () => {
      if (!n.current || l || (o = new gc(), await o.init({
        resizeTo: n.current,
        backgroundAlpha: s === "transparent" ? 0 : 1,
        backgroundColor: s,
        antialias: !0,
        autoDensity: !0,
        resolution: Math.min(window.devicePixelRatio || 1, 2)
      }), l)) return;
      n.current.appendChild(o.canvas), o.stage.sortableChildren = !0, a.current = o;
      const I = await ii.load(t);
      if (l) return;
      d = Object.assign(new ge(I), { anim: { brightness: 0 } }), d.anchor.set(0.5), d.tint = 0, o.stage.addChild(d);
      const M = await ii.load(e);
      if (l) return;
      g = new ge(M), g.anchor.set(0.5, 0), o.stage.addChild(g);
      const R = await ii.load(i);
      if (l) return;
      p = R;
      const K = new Sr().circle(0, 0, 25).fill(16777215);
      m = o.renderer.generateTexture(K);
      const z = new Sr().circle(0, 0, 20).fill({
        color: 16777011,
        alpha: 0.5
      });
      _ = o.renderer.generateTexture(z);
      for (let H = 0; H < r; H++)
        C();
      setTimeout(() => {
        c.findIndex((U) => U.isLit) === -1 && c.length > 0 && (c[Math.floor(Math.random() * c.length)].isLit = !0);
      }, 3e3), E(), o.ticker.add(L), h = !0;
    };
    class b extends ye {
      isLit = !1;
      flameBursts = [];
      flameBurstsContainer;
      flameGlowSprite;
      candleBg;
      constructor() {
        super(), this.flameBurstsContainer = new S(), this.flameGlowSprite = new v(), this.candleBg = new ge(p), this.candleBg.anchor.set(0.5, 1), this.addChild(this.candleBg), this.addChild(this.flameGlowSprite), this.addChild(this.flameBurstsContainer), this.flameGlowSprite.y = -this.candleBg.height, this.flameBurstsContainer.y = -this.candleBg.height, this.scale.set(0.7);
      }
      onTick(M) {
        if (this.isLit && Math.random() < 0.8 && this.flameBursts.length < 30) {
          const H = new A();
          this.flameBurstsContainer.addChild(H), this.flameBursts.push(H);
        }
        this.flameGlowSprite.alpha = this.flameBursts.length / 40, this.flameGlowSprite.scale.set(y(1.8, 2.2));
        const z = 256 * Math.max(0.2, Math.min(1, this.flameBursts.length / 20));
        this.candleBg.tint = new ct({ r: z, g: z, b: z }).toNumber();
        for (let H = this.flameBursts.length - 1; H >= 0; H--) {
          const U = this.flameBursts[H];
          if (U.anim.energy <= 0 && U.anim.fuel <= 0) {
            this.flameBurstsContainer.removeChild(U), U.destroy(), this.flameBursts.splice(H, 1);
            continue;
          }
          !U || !U?.scale?.x || (U.anim.fuel > 0 && (U.anim.energy += U.anim.burnRate * M.deltaTime, U.anim.fuel -= U.anim.burnRate * M.deltaTime), U.anim.energy -= U.anim.fadeRate * M.deltaTime, U.scale.x = U.anim.energy * 0.07, U.scale.y = U.anim.energy * 0.1, U.x += U.anim.vector.x - u.offset.x * 2e-3, U.y += U.anim.vector.y, U.anim.color.setValue([U.anim.color.red, U.anim.color.green, U.anim.color.blue - 0.03]), U.tint = U.anim.color.toNumber());
        }
      }
    }
    class v extends ge {
      constructor() {
        super(_), this.filters = [new qn({ strength: 36, quality: 8 })], this.anchor.set(0.5), this.scale.set(2), this.alpha = 0.5;
      }
    }
    class A extends ge {
      anim;
      constructor() {
        super(m), this.alpha = 1, this.anchor.set(0.5), this.anim = {
          vector: {
            x: y(-0.2, 0.2),
            y: y(-1.5, -0.8)
          },
          color: new ct([1, 1, 1]),
          fuel: y(5, 6),
          burnRate: 1,
          energy: 1,
          fadeRate: y(0.2, 0.3)
        }, this.tint = this.anim.color.toNumber();
      }
    }
    class S extends ye {
      constructor() {
        super(), this.filters = [new qn({ strength: 0.5 })], this.alpha = 0.8;
      }
    }
    const C = () => {
      if (!o) throw new Error("PIXI app not initialized");
      const I = new b();
      return o.stage.addChild(I), c.push(I), I.interactive = !0, I.cursor = "pointer", I.on("click", () => {
        I.isLit = !I.isLit;
      }), I;
    }, T = () => {
      const I = d.anim.brightness * 256;
      d.tint = new ct({ r: I, g: I, b: I }).toNumber();
    }, P = () => {
      if (!g) return;
      const I = window.innerWidth / 2, M = g.y + g.height * 0.27, R = Math.PI / 180, K = 15, z = 360 / c.length, H = g.width * 0.3, U = g.height * 0.15;
      c.forEach((pt, Ut) => {
        const vt = K + z * Ut;
        pt.x = I + Math.sin(vt * R) * H, pt.y = M + Math.cos(vt * R) * U, pt.zIndex = pt.y;
      });
    }, E = () => {
      !d || !g || (d.x = window.innerWidth / 2, d.y = window.innerHeight / 2.7, d.scale.set(0.7), g.x = window.innerWidth / 2, g.y = window.innerHeight / 1.7, g.scale.set(2), P());
    }, L = (I) => {
      let M = 0, R = 0;
      c.forEach((z) => {
        z.onTick(I), M += z.flameBursts.length, R += z.isLit ? 1 : 0;
      });
      const K = 256 * Math.max(0.2, Math.min(1, M / (20 * c.length)));
      g && (g.tint = new ct({ r: K, g: K, b: K }).toNumber()), R === c.length && !f ? (f = !0, Cn.to(d.anim, {
        brightness: 1,
        duration: 2,
        ease: "power2.out",
        onUpdate: T,
        onComplete: () => {
          c.forEach((z) => {
            z.isLit = !1;
          }), f = !1, Cn.to(d.anim, {
            brightness: 0,
            duration: 1,
            ease: "power2.out",
            onUpdate: T
          });
        }
      })) : R < c.length && f && (f = !1);
    }, B = (I) => {
      u.x = I.clientX, u.y = I.clientY, u.offset.x = I.clientX - window.innerWidth / 2, u.offset.y = I.clientY - window.innerHeight / 2;
    }, G = () => {
      E();
    };
    return window.addEventListener("pointermove", B), window.addEventListener("resize", G), x(), () => {
      if (l = !0, window.removeEventListener("pointermove", B), window.removeEventListener("resize", G), o && h)
        try {
          o.destroy(!0, { children: !0, texture: !0 });
        } catch (I) {
          console.warn("Error destroying PIXI app:", I);
        }
    };
  }, [r, t, e, i, s]), /* @__PURE__ */ _u.jsx(
    "div",
    {
      ref: n,
      style: {
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative"
      }
    }
  );
}
export {
  Mf as $,
  uc as A,
  Bt as B,
  ye as C,
  st as D,
  D as E,
  rc as F,
  Ig as G,
  re as H,
  Pl as I,
  ae as J,
  Ri as K,
  xo as L,
  Y as M,
  ge as N,
  qf as O,
  Pt as P,
  ap as Q,
  _r as R,
  sp as S,
  Br as T,
  Fn as U,
  Tr as V,
  _t as W,
  Ap as X,
  wo as Y,
  Us as Z,
  vo as _,
  oe as a,
  ns as a0,
  ct as a1,
  Cf as a2,
  El as a3,
  dc as a4,
  N as a5,
  Z as a6,
  kp as a7,
  ig as a8,
  qp as a9,
  wg as aa,
  Sg as ab,
  Mg as ac,
  Eg as ad,
  Rg as ae,
  ss as af,
  qr as ag,
  Nn as ah,
  oh as ai,
  Pc as aj,
  Lo as ak,
  Bo as al,
  lh as am,
  Im as an,
  it as ao,
  Sr as ap,
  Hd as aq,
  ls as ar,
  Ec as as,
  U_ as at,
  jp as b,
  wr as c,
  Hr as d,
  At as e,
  Oo as f,
  Vp as g,
  ma as h,
  hc as i,
  Wl as j,
  he as k,
  tc as l,
  Xn as m,
  bg as n,
  vg as o,
  Cg as p,
  kg as q,
  lf as r,
  gs as s,
  X as t,
  ft as u,
  Xd as v,
  rt as w,
  Bi as x,
  ps as y,
  Fg as z
};
