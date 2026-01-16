import uc, { useRef as ia, useEffect as dc } from "react";
function Bo(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Gr = { exports: {} }, bi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sa;
function fc() {
  if (sa) return bi;
  sa = 1;
  var s = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function e(i, r, n) {
    var a = null;
    if (n !== void 0 && (a = "" + n), r.key !== void 0 && (a = "" + r.key), "key" in r) {
      n = {};
      for (var o in r)
        o !== "key" && (n[o] = r[o]);
    } else n = r;
    return r = n.ref, {
      $$typeof: s,
      type: i,
      key: a,
      ref: r !== void 0 ? r : null,
      props: n
    };
  }
  return bi.Fragment = t, bi.jsx = e, bi.jsxs = e, bi;
}
var wi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ra;
function pc() {
  return ra || (ra = 1, process.env.NODE_ENV !== "production" && function() {
    function s(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === k ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case m:
          return "Fragment";
        case x:
          return "Profiler";
        case _:
          return "StrictMode";
        case A:
          return "Suspense";
        case v:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case p:
            return "Portal";
          case b:
            return S.displayName || "Context";
          case y:
            return (S._context.displayName || "Context") + ".Consumer";
          case w:
            var B = S.render;
            return S = S.displayName, S || (S = B.displayName || B.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case C:
            return B = S.displayName || null, B !== null ? B : s(S.type) || "Memo";
          case T:
            B = S._payload, S = S._init;
            try {
              return s(S(B));
            } catch {
            }
        }
      return null;
    }
    function t(S) {
      return "" + S;
    }
    function e(S) {
      try {
        t(S);
        var B = !1;
      } catch {
        B = !0;
      }
      if (B) {
        B = console;
        var Y = B.error, N = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return Y.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), t(S);
      }
    }
    function i(S) {
      if (S === m) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === T)
        return "<...>";
      try {
        var B = s(S);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var S = I.A;
      return S === null ? null : S.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function a(S) {
      if (O.call(S, "key")) {
        var B = Object.getOwnPropertyDescriptor(S, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function o(S, B) {
      function Y() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          B
        ));
      }
      Y.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: Y,
        configurable: !0
      });
    }
    function h() {
      var S = s(this.type);
      return E[S] || (E[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function l(S, B, Y, N, mt, ne) {
      var at = Y.ref;
      return S = {
        $$typeof: g,
        type: S,
        key: B,
        props: Y,
        _owner: N
      }, (at !== void 0 ? at : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(S, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: mt
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function c(S, B, Y, N, mt, ne) {
      var at = B.children;
      if (at !== void 0)
        if (N)
          if (z(at)) {
            for (N = 0; N < at.length; N++)
              u(at[N]);
            Object.freeze && Object.freeze(at);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else u(at);
      if (O.call(B, "key")) {
        at = s(S);
        var ae = Object.keys(B).filter(function(qe) {
          return qe !== "key";
        });
        N = 0 < ae.length ? "{key: someKey, " + ae.join(": ..., ") + ": ...}" : "{key: someKey}", $[at + N] || (ae = 0 < ae.length ? "{" + ae.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          at,
          ae,
          at
        ), $[at + N] = !0);
      }
      if (at = null, Y !== void 0 && (e(Y), at = "" + Y), a(B) && (e(B.key), at = "" + B.key), "key" in B) {
        Y = {};
        for (var me in B)
          me !== "key" && (Y[me] = B[me]);
      } else Y = B;
      return at && o(
        Y,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), l(
        S,
        at,
        Y,
        r(),
        mt,
        ne
      );
    }
    function u(S) {
      f(S) ? S._store && (S._store.validated = 1) : typeof S == "object" && S !== null && S.$$typeof === T && (S._payload.status === "fulfilled" ? f(S._payload.value) && S._payload.value._store && (S._payload.value._store.validated = 1) : S._store && (S._store.validated = 1));
    }
    function f(S) {
      return typeof S == "object" && S !== null && S.$$typeof === g;
    }
    var d = uc, g = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), b = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), I = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = Object.prototype.hasOwnProperty, z = Array.isArray, R = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var M, E = {}, X = d.react_stack_bottom_frame.bind(
      d,
      n
    )(), D = R(i(n)), $ = {};
    wi.Fragment = m, wi.jsx = function(S, B, Y) {
      var N = 1e4 > I.recentlyCreatedOwnerStacks++;
      return c(
        S,
        B,
        Y,
        !1,
        N ? Error("react-stack-top-frame") : X,
        N ? R(i(S)) : D
      );
    }, wi.jsxs = function(S, B, Y) {
      var N = 1e4 > I.recentlyCreatedOwnerStacks++;
      return c(
        S,
        B,
        Y,
        !0,
        N ? Error("react-stack-top-frame") : X,
        N ? R(i(S)) : D
      );
    };
  }()), wi;
}
process.env.NODE_ENV === "production" ? Gr.exports = fc() : Gr.exports = pc();
var mc = Gr.exports;
function he(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function Oo(s, t) {
  s.prototype = Object.create(t.prototype), s.prototype.constructor = s, s.__proto__ = t;
}
/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Ot = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, oi = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Tn, gt, tt, Nt = 1e8, K = 1 / Nt, Ur = Math.PI * 2, gc = Ur / 4, _c = 0, Lo = Math.sqrt, xc = Math.cos, yc = Math.sin, pt = function(t) {
  return typeof t == "string";
}, ht = function(t) {
  return typeof t == "function";
}, de = function(t) {
  return typeof t == "number";
}, Cn = function(t) {
  return typeof t > "u";
}, se = function(t) {
  return typeof t == "object";
}, Tt = function(t) {
  return t !== !1;
}, Pn = function() {
  return typeof window < "u";
}, as = function(t) {
  return ht(t) || pt(t);
}, Do = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, wt = Array.isArray, bc = /random\([^)]+\)/g, wc = /,\s*/g, na = /(?:-?\.?\d|\.)+/gi, zo = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Je = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Js = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Go = /[+-]=-?[.\d]+/, vc = /[^,'"\[\]\s]+/gi, Ac = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, it, Jt, Nr, Mn, Dt = {}, Es = {}, Uo, No = function(t) {
  return (Es = hi(t, Dt)) && kt;
}, kn = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, Yi = function(t, e) {
  return !e && console.warn(t);
}, Wo = function(t, e) {
  return t && (Dt[t] = e) && Es && (Es[t] = e) || Dt;
}, $i = function() {
  return 0;
}, Sc = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, As = {
  suppressEvents: !0,
  kill: !1
}, Tc = {
  suppressEvents: !0
}, En = {}, be = [], Wr = {}, Vo, Rt = {}, tr = {}, aa = 30, Ss = [], Rn = "", Fn = function(t) {
  var e = t[0], i, r;
  if (se(e) || ht(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
    for (r = Ss.length; r-- && !Ss[r].targetTest(e); )
      ;
    i = Ss[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new fh(t[r], i))) || t.splice(r, 1);
  return t;
}, We = function(t) {
  return t._gsap || Fn(Wt(t))[0]._gsap;
}, Yo = function(t, e, i) {
  return (i = t[e]) && ht(i) ? t[e]() : Cn(i) && t.getAttribute && t.getAttribute(e) || i;
}, Ct = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, ct = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, et = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, ii = function(t, e) {
  var i = e.charAt(0), r = parseFloat(e.substr(2));
  return t = parseFloat(t), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r;
}, Cc = function(t, e) {
  for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
    ;
  return r < i;
}, Rs = function() {
  var t = be.length, e = be.slice(0), i, r;
  for (Wr = {}, be.length = 0, i = 0; i < t; i++)
    r = e[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, In = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, $o = function(t, e, i, r) {
  be.length && !gt && Rs(), t.render(e, i, !!(gt && e < 0 && In(t))), be.length && !gt && Rs();
}, Xo = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(vc).length < 2 ? e : pt(t) ? t.trim() : t;
}, jo = function(t) {
  return t;
}, zt = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, Pc = function(t) {
  return function(e, i) {
    for (var r in i)
      r in e || r === "duration" && t || r === "ease" || (e[r] = i[r]);
  };
}, hi = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, oa = function s(t, e) {
  for (var i in e)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = se(e[i]) ? s(t[i] || (t[i] = {}), e[i]) : e[i]);
  return t;
}, Fs = function(t, e) {
  var i = {}, r;
  for (r in t)
    r in e || (i[r] = t[r]);
  return i;
}, Li = function(t) {
  var e = t.parent || it, i = t.keyframes ? Pc(wt(t.keyframes)) : zt;
  if (Tt(t.inherit))
    for (; e; )
      i(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, Mc = function(t, e) {
  for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
    ;
  return i < 0;
}, Ho = function(t, e, i, r, n) {
  var a = t[r], o;
  if (n)
    for (o = e[n]; a && a[n] > o; )
      a = a._prev;
  return a ? (e._next = a._next, a._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = a, e.parent = e._dp = t, e;
}, Vs = function(t, e, i, r) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var n = e._prev, a = e._next;
  n ? n._next = a : t[i] === e && (t[i] = a), a ? a._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null;
}, ve = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Ve = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var i = t; i; )
      i._dirty = 1, i = i.parent;
  return t;
}, kc = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, Vr = function(t, e, i, r) {
  return t._startAt && (gt ? t._startAt.revert(As) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r));
}, Ec = function s(t) {
  return !t || t._ts && s(t.parent);
}, ha = function(t) {
  return t._repeat ? li(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, li = function(t, e) {
  var i = Math.floor(t = et(t / e));
  return t && i === t ? i - 1 : i;
}, Is = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Ys = function(t) {
  return t._end = et(t._start + (t._tDur / Math.abs(t._ts || t._rts || K) || 0));
}, $s = function(t, e) {
  var i = t._dp;
  return i && i.smoothChildTiming && t._ts && (t._start = et(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ys(t), i._dirty || Ve(i, t)), t;
}, qo = function(t, e) {
  var i;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = Is(t.rawTime(), e), (!e._dur || rs(0, e.totalDuration(), i) - e._tTime > K) && e.render(i, !0)), Ve(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (i = t; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    t._zTime = -K;
  }
}, te = function(t, e, i, r) {
  return e.parent && ve(e), e._start = et((de(i) ? i : i || t !== it ? Gt(t, i, e) : t._time) + e._delay), e._end = et(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Ho(t, e, "_first", "_last", t._sort ? "_start" : 0), Yr(e) || (t._recent = e), r || qo(t, e), t._ts < 0 && $s(t, t._tTime), t;
}, Ko = function(t, e) {
  return (Dt.ScrollTrigger || kn("scrollTrigger", e)) && Dt.ScrollTrigger.create(e, t);
}, Zo = function(t, e, i, r, n) {
  if (On(t, e, n), !t._initted)
    return 1;
  if (!i && t._pt && !gt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Vo !== Ft.frame)
    return be.push(t), t._lazy = [n, r], 1;
}, Rc = function s(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || s(e));
}, Yr = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, Fc = function(t, e, i, r) {
  var n = t.ratio, a = e < 0 || !e && (!t._start && Rc(t) && !(!t._initted && Yr(t)) || (t._ts < 0 || t._dp._ts < 0) && !Yr(t)) ? 0 : 1, o = t._rDelay, h = 0, l, c, u;
  if (o && t._repeat && (h = rs(0, t._tDur, e), c = li(h, o), t._yoyo && c & 1 && (a = 1 - a), c !== li(t._tTime, o) && (n = 1 - a, t.vars.repeatRefresh && t._initted && t.invalidate())), a !== n || gt || r || t._zTime === K || !e && t._zTime) {
    if (!t._initted && Zo(t, e, r, i, h))
      return;
    for (u = t._zTime, t._zTime = e || (i ? K : 0), i || (i = e && !u), t.ratio = a, t._from && (a = 1 - a), t._time = 0, t._tTime = h, l = t._pt; l; )
      l.r(a, l.d), l = l._next;
    e < 0 && Vr(t, e, i, !0), t._onUpdate && !i && It(t, "onUpdate"), h && t._repeat && !i && t.parent && It(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === a && (a && ve(t, 1), !i && !gt && (It(t, a ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, Ic = function(t, e, i) {
  var r;
  if (i > e)
    for (r = t._first; r && r._start <= i; ) {
      if (r.data === "isPause" && r._start > e)
        return r;
      r = r._next;
    }
  else
    for (r = t._last; r && r._start >= i; ) {
      if (r.data === "isPause" && r._start < e)
        return r;
      r = r._prev;
    }
}, ci = function(t, e, i, r) {
  var n = t._repeat, a = et(e) || 0, o = t._tTime / t._tDur;
  return o && !r && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : et(a * (n + 1) + t._rDelay * n) : a, o > 0 && !r && $s(t, t._tTime = t._tDur * o), t.parent && Ys(t), i || Ve(t.parent, t), t;
}, la = function(t) {
  return t instanceof vt ? Ve(t) : ci(t, t._dur);
}, Bc = {
  _start: 0,
  endTime: $i,
  totalDuration: $i
}, Gt = function s(t, e, i) {
  var r = t.labels, n = t._recent || Bc, a = t.duration() >= Nt ? n.endTime(!1) : t._dur, o, h, l;
  return pt(e) && (isNaN(e) || e in r) ? (h = e.charAt(0), l = e.substr(-1) === "%", o = e.indexOf("="), h === "<" || h === ">" ? (o >= 0 && (e = e.replace(/=/, "")), (h === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (l ? (o < 0 ? n : i).totalDuration() / 100 : 1)) : o < 0 ? (e in r || (r[e] = a), r[e]) : (h = parseFloat(e.charAt(o - 1) + e.substr(o + 1)), l && i && (h = h / 100 * (wt(i) ? i[0] : i).totalDuration()), o > 1 ? s(t, e.substr(0, o - 1), i) + h : a + h)) : e == null ? a : +e;
}, Di = function(t, e, i) {
  var r = de(e[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), a = e[n], o, h;
  if (r && (a.duration = e[1]), a.parent = i, t) {
    for (o = a, h = i; h && !("immediateRender" in o); )
      o = h.vars.defaults || {}, h = Tt(h.vars.inherit) && h.parent;
    a.immediateRender = Tt(o.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[n - 1];
  }
  return new dt(e[0], a, e[n + 1]);
}, Te = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, rs = function(t, e, i) {
  return i < t ? t : i > e ? e : i;
}, yt = function(t, e) {
  return !pt(t) || !(e = Ac.exec(t)) ? "" : e[1];
}, Oc = function(t, e, i) {
  return Te(i, function(r) {
    return rs(t, e, r);
  });
}, $r = [].slice, Qo = function(t, e) {
  return t && se(t) && "length" in t && (!e && !t.length || t.length - 1 in t && se(t[0])) && !t.nodeType && t !== Jt;
}, Lc = function(t, e, i) {
  return i === void 0 && (i = []), t.forEach(function(r) {
    var n;
    return pt(r) && !e || Qo(r, 1) ? (n = i).push.apply(n, Wt(r)) : i.push(r);
  }) || i;
}, Wt = function(t, e, i) {
  return tt && !e && tt.selector ? tt.selector(t) : pt(t) && !i && (Nr || !ui()) ? $r.call((e || Mn).querySelectorAll(t), 0) : wt(t) ? Lc(t, i) : Qo(t) ? $r.call(t, 0) : t ? [t] : [];
}, Xr = function(t) {
  return t = Wt(t)[0] || Yi("Invalid scope") || {}, function(e) {
    var i = t.current || t.nativeElement || t;
    return Wt(e, i.querySelectorAll ? i : i === t ? Yi("Invalid scope") || Mn.createElement("div") : t);
  };
}, Jo = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, th = function(t) {
  if (ht(t))
    return t;
  var e = se(t) ? t : {
    each: t
  }, i = Ye(e.ease), r = e.from || 0, n = parseFloat(e.base) || 0, a = {}, o = r > 0 && r < 1, h = isNaN(r) || o, l = e.axis, c = r, u = r;
  return pt(r) ? c = u = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !o && h && (c = r[0], u = r[1]), function(f, d, g) {
    var p = (g || e).length, m = a[p], _, x, y, b, w, A, v, C, T;
    if (!m) {
      if (T = e.grid === "auto" ? 0 : (e.grid || [1, Nt])[1], !T) {
        for (v = -Nt; v < (v = g[T++].getBoundingClientRect().left) && T < p; )
          ;
        T < p && T--;
      }
      for (m = a[p] = [], _ = h ? Math.min(T, p) * c - 0.5 : r % T, x = T === Nt ? 0 : h ? p * u / T - 0.5 : r / T | 0, v = 0, C = Nt, A = 0; A < p; A++)
        y = A % T - _, b = x - (A / T | 0), m[A] = w = l ? Math.abs(l === "y" ? b : y) : Lo(y * y + b * b), w > v && (v = w), w < C && (C = w);
      r === "random" && Jo(m), m.max = v - C, m.min = C, m.v = p = (parseFloat(e.amount) || parseFloat(e.each) * (T > p ? p - 1 : l ? l === "y" ? p / T : T : Math.max(T, p / T)) || 0) * (r === "edges" ? -1 : 1), m.b = p < 0 ? n - p : n, m.u = yt(e.amount || e.each) || 0, i = i && p < 0 ? ch(i) : i;
    }
    return p = (m[f] - m.min) / m.max || 0, et(m.b + (i ? i(p) : p) * m.v) + m.u;
  };
}, jr = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(i) {
    var r = et(Math.round(parseFloat(i) / t) * t * e);
    return (r - r % 1) / e + (de(i) ? 0 : yt(i));
  };
}, eh = function(t, e) {
  var i = wt(t), r, n;
  return !i && se(t) && (r = i = t.radius || Nt, t.values ? (t = Wt(t.values), (n = !de(t[0])) && (r *= r)) : t = jr(t.increment)), Te(e, i ? ht(t) ? function(a) {
    return n = t(a), Math.abs(n - a) <= r ? n : a;
  } : function(a) {
    for (var o = parseFloat(n ? a.x : a), h = parseFloat(n ? a.y : 0), l = Nt, c = 0, u = t.length, f, d; u--; )
      n ? (f = t[u].x - o, d = t[u].y - h, f = f * f + d * d) : f = Math.abs(t[u] - o), f < l && (l = f, c = u);
    return c = !r || l <= r ? t[c] : a, n || c === a || de(a) ? c : c + yt(a);
  } : jr(t));
}, ih = function(t, e, i, r) {
  return Te(wt(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
    return wt(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * r) / r;
  });
}, Dc = function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  return function(r) {
    return e.reduce(function(n, a) {
      return a(n);
    }, r);
  };
}, zc = function(t, e) {
  return function(i) {
    return t(parseFloat(i)) + (e || yt(i));
  };
}, Gc = function(t, e, i) {
  return rh(t, e, 0, 1, i);
}, sh = function(t, e, i) {
  return Te(i, function(r) {
    return t[~~e(r)];
  });
}, Uc = function s(t, e, i) {
  var r = e - t;
  return wt(t) ? sh(t, s(0, t.length), e) : Te(i, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, Nc = function s(t, e, i) {
  var r = e - t, n = r * 2;
  return wt(t) ? sh(t, s(0, t.length - 1), e) : Te(i, function(a) {
    return a = (n + (a - t) % n) % n || 0, t + (a > r ? n - a : a);
  });
}, Xi = function(t) {
  return t.replace(bc, function(e) {
    var i = e.indexOf("[") + 1, r = e.substring(i || 7, i ? e.indexOf("]") : e.length - 1).split(wc);
    return ih(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5);
  });
}, rh = function(t, e, i, r, n) {
  var a = e - t, o = r - i;
  return Te(n, function(h) {
    return i + ((h - t) / a * o || 0);
  });
}, Wc = function s(t, e, i, r) {
  var n = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!n) {
    var a = pt(t), o = {}, h, l, c, u, f;
    if (i === !0 && (r = 1) && (i = null), a)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (wt(t) && !wt(e)) {
      for (c = [], u = t.length, f = u - 2, l = 1; l < u; l++)
        c.push(s(t[l - 1], t[l]));
      u--, n = function(g) {
        g *= u;
        var p = Math.min(f, ~~g);
        return c[p](g - p);
      }, i = e;
    } else r || (t = hi(wt(t) ? [] : {}, t));
    if (!c) {
      for (h in e)
        Bn.call(o, t, h, "get", e[h]);
      n = function(g) {
        return zn(g, o) || (a ? t.p : t);
      };
    }
  }
  return Te(i, n);
}, ca = function(t, e, i) {
  var r = t.labels, n = Nt, a, o, h;
  for (a in r)
    o = r[a] - e, o < 0 == !!i && o && n > (o = Math.abs(o)) && (h = a, n = o);
  return h;
}, It = function(t, e, i) {
  var r = t.vars, n = r[e], a = tt, o = t._ctx, h, l, c;
  if (n)
    return h = r[e + "Params"], l = r.callbackScope || t, i && be.length && Rs(), o && (tt = o), c = h ? n.apply(l, h) : n.call(l), tt = a, c;
}, Ei = function(t) {
  return ve(t), t.scrollTrigger && t.scrollTrigger.kill(!!gt), t.progress() < 1 && It(t, "onInterrupt"), t;
}, ti, nh = [], ah = function(t) {
  if (t)
    if (t = !t.name && t.default || t, Pn() || t.headless) {
      var e = t.name, i = ht(t), r = e && !i && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: $i,
        render: zn,
        add: Bn,
        kill: ru,
        modifier: su,
        rawVars: 0
      }, a = {
        targetTest: 0,
        get: 0,
        getSetter: Dn,
        aliases: {},
        register: 0
      };
      if (ui(), t !== r) {
        if (Rt[e])
          return;
        zt(r, zt(Fs(t, n), a)), hi(r.prototype, hi(n, Fs(t, a))), Rt[r.prop = e] = r, t.targetTest && (Ss.push(r), En[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      Wo(e, r), t.register && t.register(kt, r, Pt);
    } else
      nh.push(t);
}, q = 255, Ri = {
  aqua: [0, q, q],
  lime: [0, q, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, q],
  navy: [0, 0, 128],
  white: [q, q, q],
  olive: [128, 128, 0],
  yellow: [q, q, 0],
  orange: [q, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [q, 0, 0],
  pink: [q, 192, 203],
  cyan: [0, q, q],
  transparent: [q, q, q, 0]
}, er = function(t, e, i) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * q + 0.5 | 0;
}, oh = function(t, e, i) {
  var r = t ? de(t) ? [t >> 16, t >> 8 & q, t & q] : 0 : Ri.black, n, a, o, h, l, c, u, f, d, g;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Ri[t])
      r = Ri[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), a = t.charAt(2), o = t.charAt(3), t = "#" + n + n + a + a + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & q, r & q, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & q, t & q];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = g = t.match(na), !e)
        h = +r[0] % 360 / 360, l = +r[1] / 100, c = +r[2] / 100, a = c <= 0.5 ? c * (l + 1) : c + l - c * l, n = c * 2 - a, r.length > 3 && (r[3] *= 1), r[0] = er(h + 1 / 3, n, a), r[1] = er(h, n, a), r[2] = er(h - 1 / 3, n, a);
      else if (~t.indexOf("="))
        return r = t.match(zo), i && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(na) || Ri.transparent;
    r = r.map(Number);
  }
  return e && !g && (n = r[0] / q, a = r[1] / q, o = r[2] / q, u = Math.max(n, a, o), f = Math.min(n, a, o), c = (u + f) / 2, u === f ? h = l = 0 : (d = u - f, l = c > 0.5 ? d / (2 - u - f) : d / (u + f), h = u === n ? (a - o) / d + (a < o ? 6 : 0) : u === a ? (o - n) / d + 2 : (n - a) / d + 4, h *= 60), r[0] = ~~(h + 0.5), r[1] = ~~(l * 100 + 0.5), r[2] = ~~(c * 100 + 0.5)), i && r.length < 4 && (r[3] = 1), r;
}, hh = function(t) {
  var e = [], i = [], r = -1;
  return t.split(we).forEach(function(n) {
    var a = n.match(Je) || [];
    e.push.apply(e, a), i.push(r += a.length + 1);
  }), e.c = i, e;
}, ua = function(t, e, i) {
  var r = "", n = (t + r).match(we), a = e ? "hsla(" : "rgba(", o = 0, h, l, c, u;
  if (!n)
    return t;
  if (n = n.map(function(f) {
    return (f = oh(f, e, 1)) && a + (e ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")";
  }), i && (c = hh(t), h = i.c, h.join(r) !== c.c.join(r)))
    for (l = t.replace(we, "1").split(Je), u = l.length - 1; o < u; o++)
      r += l[o] + (~h.indexOf(o) ? n.shift() || a + "0,0,0,0)" : (c.length ? c : n.length ? n : i).shift());
  if (!l)
    for (l = t.split(we), u = l.length - 1; o < u; o++)
      r += l[o] + n[o];
  return r + l[u];
}, we = function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Ri)
    s += "|" + t + "\\b";
  return new RegExp(s + ")", "gi");
}(), Vc = /hsl[a]?\(/, lh = function(t) {
  var e = t.join(" "), i;
  if (we.lastIndex = 0, we.test(e))
    return i = Vc.test(e), t[1] = ua(t[1], i), t[0] = ua(t[0], i, hh(t[1])), !0;
}, ji, Ft = function() {
  var s = Date.now, t = 500, e = 33, i = s(), r = i, n = 1e3 / 240, a = n, o = [], h, l, c, u, f, d, g = function p(m) {
    var _ = s() - r, x = m === !0, y, b, w, A;
    if ((_ > t || _ < 0) && (i += _ - e), r += _, w = r - i, y = w - a, (y > 0 || x) && (A = ++u.frame, f = w - u.time * 1e3, u.time = w = w / 1e3, a += y + (y >= n ? 4 : n - y), b = 1), x || (h = l(p)), b)
      for (d = 0; d < o.length; d++)
        o[d](w, f, A, m);
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
      Uo && (!Nr && Pn() && (Jt = Nr = window, Mn = Jt.document || {}, Dt.gsap = kt, (Jt.gsapVersions || (Jt.gsapVersions = [])).push(kt.version), No(Es || Jt.GreenSockGlobals || !Jt.gsap && Jt || {}), nh.forEach(ah)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, h && u.sleep(), l = c || function(m) {
        return setTimeout(m, a - u.time * 1e3 + 1 | 0);
      }, ji = 1, g(2));
    },
    sleep: function() {
      (c ? cancelAnimationFrame : clearTimeout)(h), ji = 0, l = $i;
    },
    lagSmoothing: function(m, _) {
      t = m || 1 / 0, e = Math.min(_ || 33, t);
    },
    fps: function(m) {
      n = 1e3 / (m || 240), a = u.time * 1e3 + n;
    },
    add: function(m, _, x) {
      var y = _ ? function(b, w, A, v) {
        m(b, w, A, v), u.remove(y);
      } : m;
      return u.remove(m), o[x ? "unshift" : "push"](y), ui(), y;
    },
    remove: function(m, _) {
      ~(_ = o.indexOf(m)) && o.splice(_, 1) && d >= _ && d--;
    },
    _listeners: o
  }, u;
}(), ui = function() {
  return !ji && Ft.wake();
}, W = {}, Yc = /^[\d.\-M][\d.\-,\s]/, $c = /["']/g, Xc = function(t) {
  for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, a = i.length, o, h, l; n < a; n++)
    h = i[n], o = n !== a - 1 ? h.lastIndexOf(",") : h.length, l = h.substr(0, o), e[r] = isNaN(l) ? l.replace($c, "").trim() : +l, r = h.substr(o + 1).trim();
  return e;
}, jc = function(t) {
  var e = t.indexOf("(") + 1, i = t.indexOf(")"), r = t.indexOf("(", e);
  return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
}, Hc = function(t) {
  var e = (t + "").split("("), i = W[e[0]];
  return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [Xc(e[1])] : jc(t).split(",").map(Xo)) : W._CE && Yc.test(t) ? W._CE("", t) : i;
}, ch = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, uh = function s(t, e) {
  for (var i = t._first, r; i; )
    i instanceof vt ? s(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? s(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
}, Ye = function(t, e) {
  return t && (ht(t) ? t : W[t] || Hc(t)) || e;
}, He = function(t, e, i, r) {
  i === void 0 && (i = function(h) {
    return 1 - e(1 - h);
  }), r === void 0 && (r = function(h) {
    return h < 0.5 ? e(h * 2) / 2 : 1 - e((1 - h) * 2) / 2;
  });
  var n = {
    easeIn: e,
    easeOut: i,
    easeInOut: r
  }, a;
  return Ct(t, function(o) {
    W[o] = Dt[o] = n, W[a = o.toLowerCase()] = i;
    for (var h in n)
      W[a + (h === "easeIn" ? ".in" : h === "easeOut" ? ".out" : ".inOut")] = W[o + "." + h] = n[h];
  }), n;
}, dh = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, ir = function s(t, e, i) {
  var r = e >= 1 ? e : 1, n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), a = n / Ur * (Math.asin(1 / r) || 0), o = function(c) {
    return c === 1 ? 1 : r * Math.pow(2, -10 * c) * yc((c - a) * n) + 1;
  }, h = t === "out" ? o : t === "in" ? function(l) {
    return 1 - o(1 - l);
  } : dh(o);
  return n = Ur / n, h.config = function(l, c) {
    return s(t, l, c);
  }, h;
}, sr = function s(t, e) {
  e === void 0 && (e = 1.70158);
  var i = function(a) {
    return a ? --a * a * ((e + 1) * a + e) + 1 : 0;
  }, r = t === "out" ? i : t === "in" ? function(n) {
    return 1 - i(1 - n);
  } : dh(i);
  return r.config = function(n) {
    return s(t, n);
  }, r;
};
Ct("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, t) {
  var e = t < 5 ? t + 1 : t;
  He(s + ",Power" + (e - 1), t ? function(i) {
    return Math.pow(i, e);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, e);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
  });
});
W.Linear.easeNone = W.none = W.Linear.easeIn;
He("Elastic", ir("in"), ir("out"), ir());
(function(s, t) {
  var e = 1 / t, i = 2 * e, r = 2.5 * e, n = function(o) {
    return o < e ? s * o * o : o < i ? s * Math.pow(o - 1.5 / t, 2) + 0.75 : o < r ? s * (o -= 2.25 / t) * o + 0.9375 : s * Math.pow(o - 2.625 / t, 2) + 0.984375;
  };
  He("Bounce", function(a) {
    return 1 - n(1 - a);
  }, n);
})(7.5625, 2.75);
He("Expo", function(s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
He("Circ", function(s) {
  return -(Lo(1 - s * s) - 1);
});
He("Sine", function(s) {
  return s === 1 ? 1 : -xc(s * gc) + 1;
});
He("Back", sr("in"), sr("out"), sr());
W.SteppedEase = W.steps = Dt.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var i = 1 / t, r = t + (e ? 0 : 1), n = e ? 1 : 0, a = 1 - K;
    return function(o) {
      return ((r * rs(0, a, o) | 0) + n) * i;
    };
  }
};
oi.ease = W["quad.out"];
Ct("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
  return Rn += s + "," + s + "Params,";
});
var fh = function(t, e) {
  this.id = _c++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Yo, this.set = e ? e.getSetter : Dn;
}, Hi = /* @__PURE__ */ function() {
  function s(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, ci(this, +e.duration, 1, 1), this.data = e.data, tt && (this._ctx = tt, tt.data.push(this)), ji || Ft.wake();
  }
  var t = s.prototype;
  return t.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, t.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, ci(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(i, r) {
    if (ui(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for ($s(this, i), !n._dp || n.parent || qo(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && te(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === K || !this._initted && this._dur && i || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), $o(this, i, r)), this;
  }, t.time = function(i, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + ha(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(i, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(i, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + ha(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(i, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? li(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(i, r) {
    if (!arguments.length)
      return this._rts === -K ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var n = this.parent && this._ts ? Is(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -K ? 0 : this._rts, this.totalTime(rs(-Math.abs(this._delay), this.totalDuration(), n), r !== !1), Ys(this), kc(this);
  }, t.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ui(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== K && (this._tTime -= K)))), this) : this._ps;
  }, t.startTime = function(i) {
    if (arguments.length) {
      this._start = et(i);
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && te(r, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(i) {
    return this._start + (Tt(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(i) {
    var r = this.parent || this._dp;
    return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Is(r.rawTime(i), this) : this._tTime : this._tTime;
  }, t.revert = function(i) {
    i === void 0 && (i = Tc);
    var r = gt;
    return gt = i, In(this) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), gt = r, this;
  }, t.globalTime = function(i) {
    for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
      n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(i) : n;
  }, t.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, la(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(i) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = i, la(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, t.seek = function(i, r) {
    return this.totalTime(Gt(this, i), Tt(r));
  }, t.restart = function(i, r) {
    return this.play().totalTime(i ? -this._delay : 0, Tt(r)), this._dur || (this._zTime = -K), this;
  }, t.play = function(i, r) {
    return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
  }, t.reverse = function(i, r) {
    return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, t.pause = function(i, r) {
    return i != null && this.seek(i, r), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -K : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -K, this;
  }, t.isActive = function() {
    var i = this.parent || this._dp, r = this._start, n;
    return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - K);
  }, t.eventCallback = function(i, r, n) {
    var a = this.vars;
    return arguments.length > 1 ? (r ? (a[i] = r, n && (a[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete a[i], this) : a[i];
  }, t.then = function(i) {
    var r = this, n = r._prom;
    return new Promise(function(a) {
      var o = ht(i) ? i : jo, h = function() {
        var c = r.then;
        r.then = null, n && n(), ht(o) && (o = o(r)) && (o.then || o === r) && (r.then = c), a(o), r.then = c;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? h() : r._prom = h;
    });
  }, t.kill = function() {
    Ei(this);
  }, s;
}();
zt(Hi.prototype, {
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
  _zTime: -K,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var vt = /* @__PURE__ */ function(s) {
  Oo(t, s);
  function t(i, r) {
    var n;
    return i === void 0 && (i = {}), n = s.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = Tt(i.sortChildren), it && te(i.parent || it, he(n), r), i.reversed && n.reverse(), i.paused && n.paused(!0), i.scrollTrigger && Ko(he(n), i.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(r, n, a) {
    return Di(0, arguments, this), this;
  }, e.from = function(r, n, a) {
    return Di(1, arguments, this), this;
  }, e.fromTo = function(r, n, a, o) {
    return Di(2, arguments, this), this;
  }, e.set = function(r, n, a) {
    return n.duration = 0, n.parent = this, Li(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new dt(r, n, Gt(this, a), 1), this;
  }, e.call = function(r, n, a) {
    return te(this, dt.delayedCall(0, r, n), a);
  }, e.staggerTo = function(r, n, a, o, h, l, c) {
    return a.duration = n, a.stagger = a.stagger || o, a.onComplete = l, a.onCompleteParams = c, a.parent = this, new dt(r, a, Gt(this, h)), this;
  }, e.staggerFrom = function(r, n, a, o, h, l, c) {
    return a.runBackwards = 1, Li(a).immediateRender = Tt(a.immediateRender), this.staggerTo(r, n, a, o, h, l, c);
  }, e.staggerFromTo = function(r, n, a, o, h, l, c, u) {
    return o.startAt = a, Li(o).immediateRender = Tt(o.immediateRender), this.staggerTo(r, n, o, h, l, c, u);
  }, e.render = function(r, n, a) {
    var o = this._time, h = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, c = r <= 0 ? 0 : et(r), u = this._zTime < 0 != r < 0 && (this._initted || !l), f, d, g, p, m, _, x, y, b, w, A, v;
    if (this !== it && c > h && r >= 0 && (c = h), c !== this._tTime || a || u) {
      if (o !== this._time && l && (c += this._time - o, r += this._time - o), f = c, b = this._start, y = this._ts, _ = !y, u && (l || (o = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (A = this._yoyo, m = l + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(m * 100 + r, n, a);
        if (f = et(c % m), c === h ? (p = this._repeat, f = l) : (w = et(c / m), p = ~~w, p && p === w && (f = l, p--), f > l && (f = l)), w = li(this._tTime, m), !o && this._tTime && w !== p && this._tTime - w * m - this._dur <= 0 && (w = p), A && p & 1 && (f = l - f, v = 1), p !== w && !this._lock) {
          var C = A && w & 1, T = C === (A && p & 1);
          if (p < w && (C = !C), o = C ? 0 : c % l ? l : c, this._lock = 1, this.render(o || (v ? 0 : et(p * m)), n, !l)._lock = 0, this._tTime = c, !n && this.parent && It(this, "onRepeat"), this.vars.repeatRefresh && !v && (this.invalidate()._lock = 1, w = p), o && o !== this._time || _ !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (l = this._dur, h = this._tDur, T && (this._lock = 2, o = C ? l : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !v && this.invalidate()), this._lock = 0, !this._ts && !_)
            return this;
          uh(this, v);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (x = Ic(this, et(o), et(f)), x && (c -= f - (f = x._start))), this._tTime = c, this._time = f, this._act = !y, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, o = 0), !o && c && l && !n && !w && (It(this, "onStart"), this._tTime !== c))
        return this;
      if (f >= o && r >= 0)
        for (d = this._first; d; ) {
          if (g = d._next, (d._act || f >= d._start) && d._ts && x !== d) {
            if (d.parent !== this)
              return this.render(r, n, a);
            if (d.render(d._ts > 0 ? (f - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (f - d._start) * d._ts, n, a), f !== this._time || !this._ts && !_) {
              x = 0, g && (c += this._zTime = -K);
              break;
            }
          }
          d = g;
        }
      else {
        d = this._last;
        for (var P = r < 0 ? r : f; d; ) {
          if (g = d._prev, (d._act || P <= d._end) && d._ts && x !== d) {
            if (d.parent !== this)
              return this.render(r, n, a);
            if (d.render(d._ts > 0 ? (P - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (P - d._start) * d._ts, n, a || gt && In(d)), f !== this._time || !this._ts && !_) {
              x = 0, g && (c += this._zTime = P ? -K : K);
              break;
            }
          }
          d = g;
        }
      }
      if (x && !n && (this.pause(), x.render(f >= o ? 0 : -K)._zTime = f >= o ? 1 : -1, this._ts))
        return this._start = b, Ys(this), this.render(r, n, a);
      this._onUpdate && !n && It(this, "onUpdate", !0), (c === h && this._tTime >= this.totalDuration() || !c && o) && (b === this._start || Math.abs(y) !== Math.abs(this._ts)) && (this._lock || ((r || !l) && (c === h && this._ts > 0 || !c && this._ts < 0) && ve(this, 1), !n && !(r < 0 && !o) && (c || o || !h) && (It(this, c === h && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < h && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(r, n) {
    var a = this;
    if (de(n) || (n = Gt(this, n, r)), !(r instanceof Hi)) {
      if (wt(r))
        return r.forEach(function(o) {
          return a.add(o, n);
        }), this;
      if (pt(r))
        return this.addLabel(r, n);
      if (ht(r))
        r = dt.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? te(this, r, n) : this;
  }, e.getChildren = function(r, n, a, o) {
    r === void 0 && (r = !0), n === void 0 && (n = !0), a === void 0 && (a = !0), o === void 0 && (o = -Nt);
    for (var h = [], l = this._first; l; )
      l._start >= o && (l instanceof dt ? n && h.push(l) : (a && h.push(l), r && h.push.apply(h, l.getChildren(!0, n, a)))), l = l._next;
    return h;
  }, e.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), a = n.length; a--; )
      if (n[a].vars.id === r)
        return n[a];
  }, e.remove = function(r) {
    return pt(r) ? this.removeLabel(r) : ht(r) ? this.killTweensOf(r) : (r.parent === this && Vs(this, r), r === this._recent && (this._recent = this._last), Ve(this));
  }, e.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = et(Ft.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), s.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(r, n) {
    return this.labels[r] = Gt(this, n), this;
  }, e.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, e.addPause = function(r, n, a) {
    var o = dt.delayedCall(0, n || $i, a);
    return o.data = "isPause", this._hasPause = 1, te(this, o, Gt(this, r));
  }, e.removePause = function(r) {
    var n = this._first;
    for (r = Gt(this, r); n; )
      n._start === r && n.data === "isPause" && ve(n), n = n._next;
  }, e.killTweensOf = function(r, n, a) {
    for (var o = this.getTweensOf(r, a), h = o.length; h--; )
      ge !== o[h] && o[h].kill(r, n);
    return this;
  }, e.getTweensOf = function(r, n) {
    for (var a = [], o = Wt(r), h = this._first, l = de(n), c; h; )
      h instanceof dt ? Cc(h._targets, o) && (l ? (!ge || h._initted && h._ts) && h.globalTime(0) <= n && h.globalTime(h.totalDuration()) > n : !n || h.isActive()) && a.push(h) : (c = h.getTweensOf(o, n)).length && a.push.apply(a, c), h = h._next;
    return a;
  }, e.tweenTo = function(r, n) {
    n = n || {};
    var a = this, o = Gt(a, r), h = n, l = h.startAt, c = h.onStart, u = h.onStartParams, f = h.immediateRender, d, g = dt.to(a, zt({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: n.duration || Math.abs((o - (l && "time" in l ? l.time : a._time)) / a.timeScale()) || K,
      onStart: function() {
        if (a.pause(), !d) {
          var m = n.duration || Math.abs((o - (l && "time" in l ? l.time : a._time)) / a.timeScale());
          g._dur !== m && ci(g, m, 0, 1).render(g._time, !0, !0), d = 1;
        }
        c && c.apply(g, u || []);
      }
    }, n));
    return f ? g.render(0) : g;
  }, e.tweenFromTo = function(r, n, a) {
    return this.tweenTo(n, zt({
      startAt: {
        time: Gt(this, r)
      }
    }, a));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(r) {
    return r === void 0 && (r = this._time), ca(this, Gt(this, r));
  }, e.previousLabel = function(r) {
    return r === void 0 && (r = this._time), ca(this, Gt(this, r), 1);
  }, e.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + K);
  }, e.shiftChildren = function(r, n, a) {
    a === void 0 && (a = 0);
    var o = this._first, h = this.labels, l;
    for (r = et(r); o; )
      o._start >= a && (o._start += r, o._end += r), o = o._next;
    if (n)
      for (l in h)
        h[l] >= a && (h[l] += r);
    return Ve(this);
  }, e.invalidate = function(r) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(r), n = n._next;
    return s.prototype.invalidate.call(this, r);
  }, e.clear = function(r) {
    r === void 0 && (r = !0);
    for (var n = this._first, a; n; )
      a = n._next, this.remove(n), n = a;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Ve(this);
  }, e.totalDuration = function(r) {
    var n = 0, a = this, o = a._last, h = Nt, l, c, u;
    if (arguments.length)
      return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -r : r));
    if (a._dirty) {
      for (u = a.parent; o; )
        l = o._prev, o._dirty && o.totalDuration(), c = o._start, c > h && a._sort && o._ts && !a._lock ? (a._lock = 1, te(a, o, c - o._delay, 1)._lock = 0) : h = c, c < 0 && o._ts && (n -= c, (!u && !a._dp || u && u.smoothChildTiming) && (a._start += et(c / a._ts), a._time -= c, a._tTime -= c), a.shiftChildren(-c, !1, -1 / 0), h = 0), o._end > n && o._ts && (n = o._end), o = l;
      ci(a, a === it && a._time > n ? a._time : n, 1, 1), a._dirty = 0;
    }
    return a._tDur;
  }, t.updateRoot = function(r) {
    if (it._ts && ($o(it, Is(r, it)), Vo = Ft.frame), Ft.frame >= aa) {
      aa += Ot.autoSleep || 120;
      var n = it._first;
      if ((!n || !n._ts) && Ot.autoSleep && Ft._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || Ft.sleep();
      }
    }
  }, t;
}(Hi);
zt(vt.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var qc = function(t, e, i, r, n, a, o) {
  var h = new Pt(this._pt, t, e, 0, 1, yh, null, n), l = 0, c = 0, u, f, d, g, p, m, _, x;
  for (h.b = i, h.e = r, i += "", r += "", (_ = ~r.indexOf("random(")) && (r = Xi(r)), a && (x = [i, r], a(x, t, e), i = x[0], r = x[1]), f = i.match(Js) || []; u = Js.exec(r); )
    g = u[0], p = r.substring(l, u.index), d ? d = (d + 1) % 5 : p.substr(-5) === "rgba(" && (d = 1), g !== f[c++] && (m = parseFloat(f[c - 1]) || 0, h._pt = {
      _next: h._pt,
      p: p || c === 1 ? p : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: g.charAt(1) === "=" ? ii(m, g) - m : parseFloat(g) - m,
      m: d && d < 4 ? Math.round : 0
    }, l = Js.lastIndex);
  return h.c = l < r.length ? r.substring(l, r.length) : "", h.fp = o, (Go.test(r) || _) && (h.e = 0), this._pt = h, h;
}, Bn = function(t, e, i, r, n, a, o, h, l, c) {
  ht(r) && (r = r(n || 0, t, a));
  var u = t[e], f = i !== "get" ? i : ht(u) ? l ? t[e.indexOf("set") || !ht(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : u, d = ht(u) ? l ? tu : _h : Ln, g;
  if (pt(r) && (~r.indexOf("random(") && (r = Xi(r)), r.charAt(1) === "=" && (g = ii(f, r) + (yt(f) || 0), (g || g === 0) && (r = g))), !c || f !== r || Hr)
    return !isNaN(f * r) && r !== "" ? (g = new Pt(this._pt, t, e, +f || 0, r - (f || 0), typeof u == "boolean" ? iu : xh, 0, d), l && (g.fp = l), o && g.modifier(o, this, t), this._pt = g) : (!u && !(e in t) && kn(e, r), qc.call(this, t, e, f, r, d, h || Ot.stringFilter, l));
}, Kc = function(t, e, i, r, n) {
  if (ht(t) && (t = zi(t, n, e, i, r)), !se(t) || t.style && t.nodeType || wt(t) || Do(t))
    return pt(t) ? zi(t, n, e, i, r) : t;
  var a = {}, o;
  for (o in t)
    a[o] = zi(t[o], n, e, i, r);
  return a;
}, ph = function(t, e, i, r, n, a) {
  var o, h, l, c;
  if (Rt[t] && (o = new Rt[t]()).init(n, o.rawVars ? e[t] : Kc(e[t], r, n, a, i), i, r, a) !== !1 && (i._pt = h = new Pt(i._pt, n, t, 0, 1, o.render, o, 0, o.priority), i !== ti))
    for (l = i._ptLookup[i._targets.indexOf(n)], c = o._props.length; c--; )
      l[o._props[c]] = h;
  return o;
}, ge, Hr, On = function s(t, e, i) {
  var r = t.vars, n = r.ease, a = r.startAt, o = r.immediateRender, h = r.lazy, l = r.onUpdate, c = r.runBackwards, u = r.yoyoEase, f = r.keyframes, d = r.autoRevert, g = t._dur, p = t._startAt, m = t._targets, _ = t.parent, x = _ && _.data === "nested" ? _.vars.targets : m, y = t._overwrite === "auto" && !Tn, b = t.timeline, w, A, v, C, T, P, k, I, O, z, R, M, E;
  if (b && (!f || !n) && (n = "none"), t._ease = Ye(n, oi.ease), t._yEase = u ? ch(Ye(u === !0 ? n : u, oi.ease)) : 0, u && t._yoyo && !t._repeat && (u = t._yEase, t._yEase = t._ease, t._ease = u), t._from = !b && !!r.runBackwards, !b || f && !r.stagger) {
    if (I = m[0] ? We(m[0]).harness : 0, M = I && r[I.prop], w = Fs(r, En), p && (p._zTime < 0 && p.progress(1), e < 0 && c && o && !d ? p.render(-1, !0) : p.revert(c && g ? As : Sc), p._lazy = 0), a) {
      if (ve(t._startAt = dt.set(m, zt({
        data: "isStart",
        overwrite: !1,
        parent: _,
        immediateRender: !0,
        lazy: !p && Tt(h),
        startAt: null,
        delay: 0,
        onUpdate: l && function() {
          return It(t, "onUpdate");
        },
        stagger: 0
      }, a))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (gt || !o && !d) && t._startAt.revert(As), o && g && e <= 0 && i <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (c && g && !p) {
      if (e && (o = !1), v = zt({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !p && Tt(h),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: _
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, w), M && (v[I.prop] = M), ve(t._startAt = dt.set(m, v)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (gt ? t._startAt.revert(As) : t._startAt.render(-1, !0)), t._zTime = e, !o)
        s(t._startAt, K, K);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, h = g && Tt(h) || h && !g, A = 0; A < m.length; A++) {
      if (T = m[A], k = T._gsap || Fn(m)[A]._gsap, t._ptLookup[A] = z = {}, Wr[k.id] && be.length && Rs(), R = x === m ? A : x.indexOf(T), I && (O = new I()).init(T, M || w, t, R, x) !== !1 && (t._pt = C = new Pt(t._pt, T, O.name, 0, 1, O.render, O, 0, O.priority), O._props.forEach(function(X) {
        z[X] = C;
      }), O.priority && (P = 1)), !I || M)
        for (v in w)
          Rt[v] && (O = ph(v, w, t, R, T, x)) ? O.priority && (P = 1) : z[v] = C = Bn.call(t, T, v, "get", w[v], R, x, 0, r.stringFilter);
      t._op && t._op[A] && t.kill(T, t._op[A]), y && t._pt && (ge = t, it.killTweensOf(T, z, t.globalTime(e)), E = !t.parent, ge = 0), t._pt && h && (Wr[k.id] = 1);
    }
    P && bh(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = l, t._initted = (!t._op || t._pt) && !E, f && e <= 0 && b.render(Nt, !0, !0);
}, Zc = function(t, e, i, r, n, a, o, h) {
  var l = (t._pt && t._ptCache || (t._ptCache = {}))[e], c, u, f, d;
  if (!l)
    for (l = t._ptCache[e] = [], f = t._ptLookup, d = t._targets.length; d--; ) {
      if (c = f[d][e], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== e && c.fp !== e; )
          c = c._next;
      if (!c)
        return Hr = 1, t.vars[e] = "+=0", On(t, o), Hr = 0, h ? Yi(e + " not eligible for reset") : 1;
      l.push(c);
    }
  for (d = l.length; d--; )
    u = l[d], c = u._pt || u, c.s = (r || r === 0) && !n ? r : c.s + (r || 0) + a * c.c, c.c = i - c.s, u.e && (u.e = ct(i) + yt(u.e)), u.b && (u.b = c.s + yt(u.b));
}, Qc = function(t, e) {
  var i = t[0] ? We(t[0]).harness : 0, r = i && i.aliases, n, a, o, h;
  if (!r)
    return e;
  n = hi({}, e);
  for (a in r)
    if (a in n)
      for (h = r[a].split(","), o = h.length; o--; )
        n[h[o]] = n[a];
  return n;
}, Jc = function(t, e, i, r) {
  var n = e.ease || r || "power1.inOut", a, o;
  if (wt(e))
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
}, zi = function(t, e, i, r, n) {
  return ht(t) ? t.call(e, i, r, n) : pt(t) && ~t.indexOf("random(") ? Xi(t) : t;
}, mh = Rn + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", gh = {};
Ct(mh + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
  return gh[s] = 1;
});
var dt = /* @__PURE__ */ function(s) {
  Oo(t, s);
  function t(i, r, n, a) {
    var o;
    typeof r == "number" && (n.duration = r, r = n, n = null), o = s.call(this, a ? r : Li(r)) || this;
    var h = o.vars, l = h.duration, c = h.delay, u = h.immediateRender, f = h.stagger, d = h.overwrite, g = h.keyframes, p = h.defaults, m = h.scrollTrigger, _ = h.yoyoEase, x = r.parent || it, y = (wt(i) || Do(i) ? de(i[0]) : "length" in r) ? [i] : Wt(i), b, w, A, v, C, T, P, k;
    if (o._targets = y.length ? Fn(y) : Yi("GSAP target " + i + " not found. https://gsap.com", !Ot.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = d, g || f || as(l) || as(c)) {
      if (r = o.vars, b = o.timeline = new vt({
        data: "nested",
        defaults: p || {},
        targets: x && x.data === "nested" ? x.vars.targets : y
      }), b.kill(), b.parent = b._dp = he(o), b._start = 0, f || as(l) || as(c)) {
        if (v = y.length, P = f && th(f), se(f))
          for (C in f)
            ~mh.indexOf(C) && (k || (k = {}), k[C] = f[C]);
        for (w = 0; w < v; w++)
          A = Fs(r, gh), A.stagger = 0, _ && (A.yoyoEase = _), k && hi(A, k), T = y[w], A.duration = +zi(l, he(o), w, T, y), A.delay = (+zi(c, he(o), w, T, y) || 0) - o._delay, !f && v === 1 && A.delay && (o._delay = c = A.delay, o._start += c, A.delay = 0), b.to(T, A, P ? P(w, T, y) : 0), b._ease = W.none;
        b.duration() ? l = c = 0 : o.timeline = 0;
      } else if (g) {
        Li(zt(b.vars.defaults, {
          ease: "none"
        })), b._ease = Ye(g.ease || r.ease || "none");
        var I = 0, O, z, R;
        if (wt(g))
          g.forEach(function(M) {
            return b.to(y, M, ">");
          }), b.duration();
        else {
          A = {};
          for (C in g)
            C === "ease" || C === "easeEach" || Jc(C, g[C], A, g.easeEach);
          for (C in A)
            for (O = A[C].sort(function(M, E) {
              return M.t - E.t;
            }), I = 0, w = 0; w < O.length; w++)
              z = O[w], R = {
                ease: z.e,
                duration: (z.t - (w ? O[w - 1].t : 0)) / 100 * l
              }, R[C] = z.v, b.to(y, R, I), I += R.duration;
          b.duration() < l && b.to({}, {
            duration: l - b.duration()
          });
        }
      }
      l || o.duration(l = b.duration());
    } else
      o.timeline = 0;
    return d === !0 && !Tn && (ge = he(o), it.killTweensOf(y), ge = 0), te(x, he(o), n), r.reversed && o.reverse(), r.paused && o.paused(!0), (u || !l && !g && o._start === et(x._time) && Tt(u) && Ec(he(o)) && x.data !== "nested") && (o._tTime = -K, o.render(Math.max(0, -c) || 0)), m && Ko(he(o), m), o;
  }
  var e = t.prototype;
  return e.render = function(r, n, a) {
    var o = this._time, h = this._tDur, l = this._dur, c = r < 0, u = r > h - K && !c ? h : r < K ? 0 : r, f, d, g, p, m, _, x, y, b;
    if (!l)
      Fc(this, r, n, a);
    else if (u !== this._tTime || !r || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (f = u, y = this.timeline, this._repeat) {
        if (p = l + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(p * 100 + r, n, a);
        if (f = et(u % p), u === h ? (g = this._repeat, f = l) : (m = et(u / p), g = ~~m, g && g === m ? (f = l, g--) : f > l && (f = l)), _ = this._yoyo && g & 1, _ && (b = this._yEase, f = l - f), m = li(this._tTime, p), f === o && !a && this._initted && g === m)
          return this._tTime = u, this;
        g !== m && (y && this._yEase && uh(y, _), this.vars.repeatRefresh && !_ && !this._lock && f !== p && this._initted && (this._lock = a = 1, this.render(et(p * g), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Zo(this, c ? r : f, a, n, u))
          return this._tTime = 0, this;
        if (o !== this._time && !(a && this.vars.repeatRefresh && g !== m))
          return this;
        if (l !== this._dur)
          return this.render(r, n, a);
      }
      if (this._tTime = u, this._time = f, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = x = (b || this._ease)(f / l), this._from && (this.ratio = x = 1 - x), !o && u && !n && !m && (It(this, "onStart"), this._tTime !== u))
        return this;
      for (d = this._pt; d; )
        d.r(x, d.d), d = d._next;
      y && y.render(r < 0 ? r : y._dur * y._ease(f / this._dur), n, a) || this._startAt && (this._zTime = r), this._onUpdate && !n && (c && Vr(this, r, n, a), It(this, "onUpdate")), this._repeat && g !== m && this.vars.onRepeat && !n && this.parent && It(this, "onRepeat"), (u === this._tDur || !u) && this._tTime === u && (c && !this._onUpdate && Vr(this, r, !0, !0), (r || !l) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && ve(this, 1), !n && !(c && !o) && (u || o || _) && (It(this, u === h ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < h && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), s.prototype.invalidate.call(this, r);
  }, e.resetTo = function(r, n, a, o, h) {
    ji || Ft.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || On(this, l), c = this._ease(l / this._dur), Zc(this, r, n, a, o, c, l, h) ? this.resetTo(r, n, a, o, 1) : ($s(this, 0), this.parent || Ho(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Ei(this) : this.scrollTrigger && this.scrollTrigger.kill(!!gt), this;
    if (this.timeline) {
      var a = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, ge && ge.vars.overwrite !== !0)._first || Ei(this), this.parent && a !== this.timeline.totalDuration() && ci(this, this._dur * this.timeline._tDur / a, 0, 1), this;
    }
    var o = this._targets, h = r ? Wt(r) : o, l = this._ptLookup, c = this._pt, u, f, d, g, p, m, _;
    if ((!n || n === "all") && Mc(o, h))
      return n === "all" && (this._pt = 0), Ei(this);
    for (u = this._op = this._op || [], n !== "all" && (pt(n) && (p = {}, Ct(n, function(x) {
      return p[x] = 1;
    }), n = p), n = Qc(o, n)), _ = o.length; _--; )
      if (~h.indexOf(o[_])) {
        f = l[_], n === "all" ? (u[_] = n, g = f, d = {}) : (d = u[_] = u[_] || {}, g = n);
        for (p in g)
          m = f && f[p], m && ((!("kill" in m.d) || m.d.kill(p) === !0) && Vs(this, m, "_pt"), delete f[p]), d !== "all" && (d[p] = 1);
      }
    return this._initted && !this._pt && c && Ei(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return Di(1, arguments);
  }, t.delayedCall = function(r, n, a, o) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: r,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: a,
      onReverseCompleteParams: a,
      callbackScope: o
    });
  }, t.fromTo = function(r, n, a) {
    return Di(2, arguments);
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, a) {
    return it.killTweensOf(r, n, a);
  }, t;
}(Hi);
zt(dt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Ct("staggerTo,staggerFrom,staggerFromTo", function(s) {
  dt[s] = function() {
    var t = new vt(), e = $r.call(arguments, 0);
    return e.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, e);
  };
});
var Ln = function(t, e, i) {
  return t[e] = i;
}, _h = function(t, e, i) {
  return t[e](i);
}, tu = function(t, e, i, r) {
  return t[e](r.fp, i);
}, eu = function(t, e, i) {
  return t.setAttribute(e, i);
}, Dn = function(t, e) {
  return ht(t[e]) ? _h : Cn(t[e]) && t.setAttribute ? eu : Ln;
}, xh = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, iu = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, yh = function(t, e) {
  var i = e._pt, r = "";
  if (!t && e.b)
    r = e.b;
  else if (t === 1 && e.e)
    r = e.e;
  else {
    for (; i; )
      r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r, i = i._next;
    r += e.c;
  }
  e.set(e.t, e.p, r, e);
}, zn = function(t, e) {
  for (var i = e._pt; i; )
    i.r(t, i.d), i = i._next;
}, su = function(t, e, i, r) {
  for (var n = this._pt, a; n; )
    a = n._next, n.p === r && n.modifier(t, e, i), n = a;
}, ru = function(t) {
  for (var e = this._pt, i, r; e; )
    r = e._next, e.p === t && !e.op || e.op === t ? Vs(this, e, "_pt") : e.dep || (i = 1), e = r;
  return !i;
}, nu = function(t, e, i, r) {
  r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
}, bh = function(t) {
  for (var e = t._pt, i, r, n, a; e; ) {
    for (i = e._next, r = n; r && r.pr > e.pr; )
      r = r._next;
    (e._prev = r ? r._prev : a) ? e._prev._next = e : n = e, (e._next = r) ? r._prev = e : a = e, e = i;
  }
  t._pt = n;
}, Pt = /* @__PURE__ */ function() {
  function s(e, i, r, n, a, o, h, l, c) {
    this.t = i, this.s = n, this.c = a, this.p = r, this.r = o || xh, this.d = h || this, this.set = l || Ln, this.pr = c || 0, this._next = e, e && (e._prev = this);
  }
  var t = s.prototype;
  return t.modifier = function(i, r, n) {
    this.mSet = this.mSet || this.set, this.set = nu, this.m = i, this.mt = n, this.tween = r;
  }, s;
}();
Ct(Rn + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(s) {
  return En[s] = 1;
});
Dt.TweenMax = Dt.TweenLite = dt;
Dt.TimelineLite = Dt.TimelineMax = vt;
it = new vt({
  sortChildren: !1,
  defaults: oi,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Ot.stringFilter = lh;
var $e = [], Ts = {}, au = [], da = 0, ou = 0, rr = function(t) {
  return (Ts[t] || au).map(function(e) {
    return e();
  });
}, qr = function() {
  var t = Date.now(), e = [];
  t - da > 2 && (rr("matchMediaInit"), $e.forEach(function(i) {
    var r = i.queries, n = i.conditions, a, o, h, l;
    for (o in r)
      a = Jt.matchMedia(r[o]).matches, a && (h = 1), a !== n[o] && (n[o] = a, l = 1);
    l && (i.revert(), h && e.push(i));
  }), rr("matchMediaRevert"), e.forEach(function(i) {
    return i.onMatch(i, function(r) {
      return i.add(null, r);
    });
  }), da = t, rr("matchMedia"));
}, wh = /* @__PURE__ */ function() {
  function s(e, i) {
    this.selector = i && Xr(i), this.data = [], this._r = [], this.isReverted = !1, this.id = ou++, e && this.add(e);
  }
  var t = s.prototype;
  return t.add = function(i, r, n) {
    ht(i) && (n = r, r = i, i = ht);
    var a = this, o = function() {
      var l = tt, c = a.selector, u;
      return l && l !== a && l.data.push(a), n && (a.selector = Xr(n)), tt = a, u = r.apply(a, arguments), ht(u) && a._r.push(u), tt = l, a.selector = c, a.isReverted = !1, u;
    };
    return a.last = o, i === ht ? o(a, function(h) {
      return a.add(null, h);
    }) : i ? a[i] = o : o;
  }, t.ignore = function(i) {
    var r = tt;
    tt = null, i(this), tt = r;
  }, t.getTweens = function() {
    var i = [];
    return this.data.forEach(function(r) {
      return r instanceof s ? i.push.apply(i, r.getTweens()) : r instanceof dt && !(r.parent && r.parent.data === "nested") && i.push(r);
    }), i;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(i, r) {
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
        l = n.data[h], l instanceof vt ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof dt) && l.revert && l.revert(i);
      n._r.forEach(function(c) {
        return c(i, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), r)
      for (var a = $e.length; a--; )
        $e[a].id === this.id && $e.splice(a, 1);
  }, t.revert = function(i) {
    this.kill(i || {});
  }, s;
}(), hu = /* @__PURE__ */ function() {
  function s(e) {
    this.contexts = [], this.scope = e, tt && tt.data.push(this);
  }
  var t = s.prototype;
  return t.add = function(i, r, n) {
    se(i) || (i = {
      matches: i
    });
    var a = new wh(0, n || this.scope), o = a.conditions = {}, h, l, c;
    tt && !a.selector && (a.selector = tt.selector), this.contexts.push(a), r = a.add("onMatch", r), a.queries = i;
    for (l in i)
      l === "all" ? c = 1 : (h = Jt.matchMedia(i[l]), h && ($e.indexOf(a) < 0 && $e.push(a), (o[l] = h.matches) && (c = 1), h.addListener ? h.addListener(qr) : h.addEventListener("change", qr)));
    return c && r(a, function(u) {
      return a.add(null, u);
    }), this;
  }, t.revert = function(i) {
    this.kill(i || {});
  }, t.kill = function(i) {
    this.contexts.forEach(function(r) {
      return r.kill(i, !0);
    });
  }, s;
}(), Bs = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    e.forEach(function(r) {
      return ah(r);
    });
  },
  timeline: function(t) {
    return new vt(t);
  },
  getTweensOf: function(t, e) {
    return it.getTweensOf(t, e);
  },
  getProperty: function(t, e, i, r) {
    pt(t) && (t = Wt(t)[0]);
    var n = We(t || {}).get, a = i ? jo : Xo;
    return i === "native" && (i = ""), t && (e ? a((Rt[e] && Rt[e].get || n)(t, e, i, r)) : function(o, h, l) {
      return a((Rt[o] && Rt[o].get || n)(t, o, h, l));
    });
  },
  quickSetter: function(t, e, i) {
    if (t = Wt(t), t.length > 1) {
      var r = t.map(function(c) {
        return kt.quickSetter(c, e, i);
      }), n = r.length;
      return function(c) {
        for (var u = n; u--; )
          r[u](c);
      };
    }
    t = t[0] || {};
    var a = Rt[e], o = We(t), h = o.harness && (o.harness.aliases || {})[e] || e, l = a ? function(c) {
      var u = new a();
      ti._pt = 0, u.init(t, i ? c + i : c, ti, 0, [t]), u.render(1, u), ti._pt && zn(1, ti);
    } : o.set(t, h);
    return a ? l : function(c) {
      return l(t, h, i ? c + i : c, o, 1);
    };
  },
  quickTo: function(t, e, i) {
    var r, n = kt.to(t, zt((r = {}, r[e] = "+=0.1", r.paused = !0, r.stagger = 0, r), i || {})), a = function(h, l, c) {
      return n.resetTo(e, h, l, c);
    };
    return a.tween = n, a;
  },
  isTweening: function(t) {
    return it.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Ye(t.ease, oi.ease)), oa(oi, t || {});
  },
  config: function(t) {
    return oa(Ot, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, i = t.effect, r = t.plugins, n = t.defaults, a = t.extendTimeline;
    (r || "").split(",").forEach(function(o) {
      return o && !Rt[o] && !Dt[o] && Yi(e + " effect requires " + o + " plugin.");
    }), tr[e] = function(o, h, l) {
      return i(Wt(o), zt(h || {}, n), l);
    }, a && (vt.prototype[e] = function(o, h, l) {
      return this.add(tr[e](o, se(h) ? h : (l = h) && {}, this), l);
    });
  },
  registerEase: function(t, e) {
    W[t] = Ye(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? Ye(t, e) : W;
  },
  getById: function(t) {
    return it.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var i = new vt(t), r, n;
    for (i.smoothChildTiming = Tt(t.smoothChildTiming), it.remove(i), i._dp = 0, i._time = i._tTime = it._time, r = it._first; r; )
      n = r._next, (e || !(!r._dur && r instanceof dt && r.vars.onComplete === r._targets[0])) && te(i, r, r._start - r._delay), r = n;
    return te(it, i, 0), i;
  },
  context: function(t, e) {
    return t ? new wh(t, e) : tt;
  },
  matchMedia: function(t) {
    return new hu(t);
  },
  matchMediaRefresh: function() {
    return $e.forEach(function(t) {
      var e = t.conditions, i, r;
      for (r in e)
        e[r] && (e[r] = !1, i = 1);
      i && t.revert();
    }) || qr();
  },
  addEventListener: function(t, e) {
    var i = Ts[t] || (Ts[t] = []);
    ~i.indexOf(e) || i.push(e);
  },
  removeEventListener: function(t, e) {
    var i = Ts[t], r = i && i.indexOf(e);
    r >= 0 && i.splice(r, 1);
  },
  utils: {
    wrap: Uc,
    wrapYoyo: Nc,
    distribute: th,
    random: ih,
    snap: eh,
    normalize: Gc,
    getUnit: yt,
    clamp: Oc,
    splitColor: oh,
    toArray: Wt,
    selector: Xr,
    mapRange: rh,
    pipe: Dc,
    unitize: zc,
    interpolate: Wc,
    shuffle: Jo
  },
  install: No,
  effects: tr,
  ticker: Ft,
  updateRoot: vt.updateRoot,
  plugins: Rt,
  globalTimeline: it,
  core: {
    PropTween: Pt,
    globals: Wo,
    Tween: dt,
    Timeline: vt,
    Animation: Hi,
    getCache: We,
    _removeLinkedListItem: Vs,
    reverting: function() {
      return gt;
    },
    context: function(t) {
      return t && tt && (tt.data.push(t), t._ctx = tt), tt;
    },
    suppressOverwrites: function(t) {
      return Tn = t;
    }
  }
};
Ct("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
  return Bs[s] = dt[s];
});
Ft.add(vt.updateRoot);
ti = Bs.to({}, {
  duration: 0
});
var lu = function(t, e) {
  for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
    i = i._next;
  return i;
}, cu = function(t, e) {
  var i = t._targets, r, n, a;
  for (r in e)
    for (n = i.length; n--; )
      a = t._ptLookup[n][r], a && (a = a.d) && (a._pt && (a = lu(a, r)), a && a.modifier && a.modifier(e[r], t, i[n], r));
}, nr = function(t, e) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, n, a) {
      a._onInit = function(o) {
        var h, l;
        if (pt(n) && (h = {}, Ct(n, function(c) {
          return h[c] = 1;
        }), n = h), e) {
          h = {};
          for (l in n)
            h[l] = e(n[l]);
          n = h;
        }
        cu(o, n);
      };
    }
  };
}, kt = Bs.registerPlugin({
  name: "attr",
  init: function(t, e, i, r, n) {
    var a, o, h;
    this.tween = i;
    for (a in e)
      h = t.getAttribute(a) || "", o = this.add(t, "setAttribute", (h || 0) + "", e[a], r, n, 0, 0, a), o.op = a, o.b = h, this._props.push(a);
  },
  render: function(t, e) {
    for (var i = e._pt; i; )
      gt ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, e) {
    for (var i = e.length; i--; )
      this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
  }
}, nr("roundProps", jr), nr("modifiers"), nr("snap", eh)) || Bs;
dt.version = vt.version = kt.version = "3.14.2";
Uo = 1;
Pn() && ui();
W.Power0;
W.Power1;
W.Power2;
W.Power3;
W.Power4;
W.Linear;
W.Quad;
W.Cubic;
W.Quart;
W.Quint;
W.Strong;
W.Elastic;
W.Back;
W.SteppedEase;
W.Bounce;
W.Sine;
W.Expo;
W.Circ;
/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var fa, _e, si, Gn, Ge, pa, Un, uu = function() {
  return typeof window < "u";
}, fe = {}, Be = 180 / Math.PI, ri = Math.PI / 180, Ke = Math.atan2, ma = 1e8, Nn = /([A-Z])/g, du = /(left|right|width|margin|padding|x)/i, fu = /[\s,\(]\S/, ie = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Kr = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, pu = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, mu = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, gu = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, _u = function(t, e) {
  var i = e.s + e.c * t;
  e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
}, vh = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, Ah = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, xu = function(t, e, i) {
  return t.style[e] = i;
}, yu = function(t, e, i) {
  return t.style.setProperty(e, i);
}, bu = function(t, e, i) {
  return t._gsap[e] = i;
}, wu = function(t, e, i) {
  return t._gsap.scaleX = t._gsap.scaleY = i;
}, vu = function(t, e, i, r, n) {
  var a = t._gsap;
  a.scaleX = a.scaleY = i, a.renderTransform(n, a);
}, Au = function(t, e, i, r, n) {
  var a = t._gsap;
  a[e] = i, a.renderTransform(n, a);
}, st = "transform", Mt = st + "Origin", Su = function s(t, e) {
  var i = this, r = this.target, n = r.style, a = r._gsap;
  if (t in fe && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = ie[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(o) {
        return i.tfm[o] = le(r, o);
      }) : this.tfm[t] = a.x ? a[t] : le(r, t), t === Mt && (this.tfm.zOrigin = a.zOrigin);
    else
      return ie.transform.split(",").forEach(function(o) {
        return s.call(i, o, e);
      });
    if (this.props.indexOf(st) >= 0)
      return;
    a.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(Mt, e, "")), t = st;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, Sh = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Tu = function() {
  var t = this.props, e = this.target, i = e.style, r = e._gsap, n, a;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? e[t[n]](t[n + 2]) : e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(Nn, "-$1").toLowerCase());
  if (this.tfm) {
    for (a in this.tfm)
      r[a] = this.tfm[a];
    r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = Un(), (!n || !n.isStart) && !i[st] && (Sh(i), r.zOrigin && i[Mt] && (i[Mt] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, Th = function(t, e) {
  var i = {
    target: t,
    props: [],
    revert: Tu,
    save: Su
  };
  return t._gsap || kt.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(r) {
    return i.save(r);
  }), i;
}, Ch, Zr = function(t, e) {
  var i = _e.createElementNS ? _e.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : _e.createElement(t);
  return i && i.style ? i : _e.createElement(t);
}, Bt = function s(t, e, i) {
  var r = getComputedStyle(t);
  return r[e] || r.getPropertyValue(e.replace(Nn, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && s(t, di(e) || e, 1) || "";
}, ga = "O,Moz,ms,Ms,Webkit".split(","), di = function(t, e, i) {
  var r = e || Ge, n = r.style, a = 5;
  if (t in n && !i)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); a-- && !(ga[a] + t in n); )
    ;
  return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? ga[a] : "") + t;
}, Qr = function() {
  uu() && window.document && (fa = window, _e = fa.document, si = _e.documentElement, Ge = Zr("div") || {
    style: {}
  }, Zr("div"), st = di(st), Mt = st + "Origin", Ge.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ch = !!di("perspective"), Un = kt.core.reverting, Gn = 1);
}, _a = function(t) {
  var e = t.ownerSVGElement, i = Zr("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(!0), n;
  r.style.display = "block", i.appendChild(r), si.appendChild(i);
  try {
    n = r.getBBox();
  } catch {
  }
  return i.removeChild(r), si.removeChild(i), n;
}, xa = function(t, e) {
  for (var i = e.length; i--; )
    if (t.hasAttribute(e[i]))
      return t.getAttribute(e[i]);
}, Ph = function(t) {
  var e, i;
  try {
    e = t.getBBox();
  } catch {
    e = _a(t), i = 1;
  }
  return e && (e.width || e.height) || i || (e = _a(t)), e && !e.width && !e.x && !e.y ? {
    x: +xa(t, ["x", "cx", "x1"]) || 0,
    y: +xa(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, Mh = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Ph(t));
}, Ae = function(t, e) {
  if (e) {
    var i = t.style, r;
    e in fe && e !== Mt && (e = st), i.removeProperty ? (r = e.substr(0, 2), (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(r === "--" ? e : e.replace(Nn, "-$1").toLowerCase())) : i.removeAttribute(e);
  }
}, xe = function(t, e, i, r, n, a) {
  var o = new Pt(t._pt, e, i, 0, 1, a ? Ah : vh);
  return t._pt = o, o.b = r, o.e = n, t._props.push(i), o;
}, ya = {
  deg: 1,
  rad: 1,
  turn: 1
}, Cu = {
  grid: 1,
  flex: 1
}, Se = function s(t, e, i, r) {
  var n = parseFloat(i) || 0, a = (i + "").trim().substr((n + "").length) || "px", o = Ge.style, h = du.test(e), l = t.tagName.toLowerCase() === "svg", c = (l ? "client" : "offset") + (h ? "Width" : "Height"), u = 100, f = r === "px", d = r === "%", g, p, m, _;
  if (r === a || !n || ya[r] || ya[a])
    return n;
  if (a !== "px" && !f && (n = s(t, e, i, "px")), _ = t.getCTM && Mh(t), (d || a === "%") && (fe[e] || ~e.indexOf("adius")))
    return g = _ ? t.getBBox()[h ? "width" : "height"] : t[c], ct(d ? n / g * u : n / 100 * g);
  if (o[h ? "width" : "height"] = u + (f ? a : r), p = r !== "rem" && ~e.indexOf("adius") || r === "em" && t.appendChild && !l ? t : t.parentNode, _ && (p = (t.ownerSVGElement || {}).parentNode), (!p || p === _e || !p.appendChild) && (p = _e.body), m = p._gsap, m && d && m.width && h && m.time === Ft.time && !m.uncache)
    return ct(n / m.width * u);
  if (d && (e === "height" || e === "width")) {
    var x = t.style[e];
    t.style[e] = u + r, g = t[c], x ? t.style[e] = x : Ae(t, e);
  } else
    (d || a === "%") && !Cu[Bt(p, "display")] && (o.position = Bt(t, "position")), p === t && (o.position = "static"), p.appendChild(Ge), g = Ge[c], p.removeChild(Ge), o.position = "absolute";
  return h && d && (m = We(p), m.time = Ft.time, m.width = p[c]), ct(f ? g * n / u : g && n ? u / g * n : 0);
}, le = function(t, e, i, r) {
  var n;
  return Gn || Qr(), e in ie && e !== "transform" && (e = ie[e], ~e.indexOf(",") && (e = e.split(",")[0])), fe[e] && e !== "transform" ? (n = Ki(t, r), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Ls(Bt(t, Mt)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Os[e] && Os[e](t, e, i) || Bt(t, e) || Yo(t, e) || (e === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? Se(t, e, n, i) + i : n;
}, Pu = function(t, e, i, r) {
  if (!i || i === "none") {
    var n = di(e, t, 1), a = n && Bt(t, n, 1);
    a && a !== i ? (e = n, i = a) : e === "borderColor" && (i = Bt(t, "borderTopColor"));
  }
  var o = new Pt(this._pt, t.style, e, 0, 1, yh), h = 0, l = 0, c, u, f, d, g, p, m, _, x, y, b, w;
  if (o.b = i, o.e = r, i += "", r += "", r.substring(0, 6) === "var(--" && (r = Bt(t, r.substring(4, r.indexOf(")")))), r === "auto" && (p = t.style[e], t.style[e] = r, r = Bt(t, e) || r, p ? t.style[e] = p : Ae(t, e)), c = [i, r], lh(c), i = c[0], r = c[1], f = i.match(Je) || [], w = r.match(Je) || [], w.length) {
    for (; u = Je.exec(r); )
      m = u[0], x = r.substring(h, u.index), g ? g = (g + 1) % 5 : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (g = 1), m !== (p = f[l++] || "") && (d = parseFloat(p) || 0, b = p.substr((d + "").length), m.charAt(1) === "=" && (m = ii(d, m) + b), _ = parseFloat(m), y = m.substr((_ + "").length), h = Je.lastIndex - y.length, y || (y = y || Ot.units[e] || b, h === r.length && (r += y, o.e += y)), b !== y && (d = Se(t, e, p, y) || 0), o._pt = {
        _next: o._pt,
        p: x || l === 1 ? x : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: _ - d,
        m: g && g < 4 || e === "zIndex" ? Math.round : 0
      });
    o.c = h < r.length ? r.substring(h, r.length) : "";
  } else
    o.r = e === "display" && r === "none" ? Ah : vh;
  return Go.test(r) && (o.e = 0), this._pt = o, o;
}, ba = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Mu = function(t) {
  var e = t.split(" "), i = e[0], r = e[1] || "50%";
  return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), e[0] = ba[i] || i, e[1] = ba[r] || r, e.join(" ");
}, ku = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var i = e.t, r = i.style, n = e.u, a = i._gsap, o, h, l;
    if (n === "all" || n === !0)
      r.cssText = "", h = 1;
    else
      for (n = n.split(","), l = n.length; --l > -1; )
        o = n[l], fe[o] && (h = 1, o = o === "transformOrigin" ? Mt : st), Ae(i, o);
    h && (Ae(i, st), a && (a.svg && i.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", Ki(i, 1), a.uncache = 1, Sh(r)));
  }
}, Os = {
  clearProps: function(t, e, i, r, n) {
    if (n.data !== "isFromStart") {
      var a = t._pt = new Pt(t._pt, e, i, 0, 0, ku);
      return a.u = r, a.pr = -10, a.tween = n, t._props.push(i), 1;
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
}, qi = [1, 0, 0, 1, 0, 0], kh = {}, Eh = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, wa = function(t) {
  var e = Bt(t, st);
  return Eh(e) ? qi : e.substr(7).match(zo).map(ct);
}, Wn = function(t, e) {
  var i = t._gsap || We(t), r = t.style, n = wa(t), a, o, h, l;
  return i.svg && t.getAttribute("transform") ? (h = t.transform.baseVal.consolidate().matrix, n = [h.a, h.b, h.c, h.d, h.e, h.f], n.join(",") === "1,0,0,1,0,0" ? qi : n) : (n === qi && !t.offsetParent && t !== si && !i.svg && (h = r.display, r.display = "block", a = t.parentNode, (!a || !t.offsetParent && !t.getBoundingClientRect().width) && (l = 1, o = t.nextElementSibling, si.appendChild(t)), n = wa(t), h ? r.display = h : Ae(t, "display"), l && (o ? a.insertBefore(t, o) : a ? a.appendChild(t) : si.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, Jr = function(t, e, i, r, n, a) {
  var o = t._gsap, h = n || Wn(t, !0), l = o.xOrigin || 0, c = o.yOrigin || 0, u = o.xOffset || 0, f = o.yOffset || 0, d = h[0], g = h[1], p = h[2], m = h[3], _ = h[4], x = h[5], y = e.split(" "), b = parseFloat(y[0]) || 0, w = parseFloat(y[1]) || 0, A, v, C, T;
  i ? h !== qi && (v = d * m - g * p) && (C = b * (m / v) + w * (-p / v) + (p * x - m * _) / v, T = b * (-g / v) + w * (d / v) - (d * x - g * _) / v, b = C, w = T) : (A = Ph(t), b = A.x + (~y[0].indexOf("%") ? b / 100 * A.width : b), w = A.y + (~(y[1] || y[0]).indexOf("%") ? w / 100 * A.height : w)), r || r !== !1 && o.smooth ? (_ = b - l, x = w - c, o.xOffset = u + (_ * d + x * p) - _, o.yOffset = f + (_ * g + x * m) - x) : o.xOffset = o.yOffset = 0, o.xOrigin = b, o.yOrigin = w, o.smooth = !!r, o.origin = e, o.originIsAbsolute = !!i, t.style[Mt] = "0px 0px", a && (xe(a, o, "xOrigin", l, b), xe(a, o, "yOrigin", c, w), xe(a, o, "xOffset", u, o.xOffset), xe(a, o, "yOffset", f, o.yOffset)), t.setAttribute("data-svg-origin", b + " " + w);
}, Ki = function(t, e) {
  var i = t._gsap || new fh(t);
  if ("x" in i && !e && !i.uncache)
    return i;
  var r = t.style, n = i.scaleX < 0, a = "px", o = "deg", h = getComputedStyle(t), l = Bt(t, Mt) || "0", c, u, f, d, g, p, m, _, x, y, b, w, A, v, C, T, P, k, I, O, z, R, M, E, X, D, $, S, B, Y, N, mt;
  return c = u = f = p = m = _ = x = y = b = 0, d = g = 1, i.svg = !!(t.getCTM && Mh(t)), h.translate && ((h.translate !== "none" || h.scale !== "none" || h.rotate !== "none") && (r[st] = (h.translate !== "none" ? "translate3d(" + (h.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (h.rotate !== "none" ? "rotate(" + h.rotate + ") " : "") + (h.scale !== "none" ? "scale(" + h.scale.split(" ").join(",") + ") " : "") + (h[st] !== "none" ? h[st] : "")), r.scale = r.rotate = r.translate = "none"), v = Wn(t, i.svg), i.svg && (i.uncache ? (X = t.getBBox(), l = i.xOrigin - X.x + "px " + (i.yOrigin - X.y) + "px", E = "") : E = !e && t.getAttribute("data-svg-origin"), Jr(t, E || l, !!E || i.originIsAbsolute, i.smooth !== !1, v)), w = i.xOrigin || 0, A = i.yOrigin || 0, v !== qi && (k = v[0], I = v[1], O = v[2], z = v[3], c = R = v[4], u = M = v[5], v.length === 6 ? (d = Math.sqrt(k * k + I * I), g = Math.sqrt(z * z + O * O), p = k || I ? Ke(I, k) * Be : 0, x = O || z ? Ke(O, z) * Be + p : 0, x && (g *= Math.abs(Math.cos(x * ri))), i.svg && (c -= w - (w * k + A * O), u -= A - (w * I + A * z))) : (mt = v[6], Y = v[7], $ = v[8], S = v[9], B = v[10], N = v[11], c = v[12], u = v[13], f = v[14], C = Ke(mt, B), m = C * Be, C && (T = Math.cos(-C), P = Math.sin(-C), E = R * T + $ * P, X = M * T + S * P, D = mt * T + B * P, $ = R * -P + $ * T, S = M * -P + S * T, B = mt * -P + B * T, N = Y * -P + N * T, R = E, M = X, mt = D), C = Ke(-O, B), _ = C * Be, C && (T = Math.cos(-C), P = Math.sin(-C), E = k * T - $ * P, X = I * T - S * P, D = O * T - B * P, N = z * P + N * T, k = E, I = X, O = D), C = Ke(I, k), p = C * Be, C && (T = Math.cos(C), P = Math.sin(C), E = k * T + I * P, X = R * T + M * P, I = I * T - k * P, M = M * T - R * P, k = E, R = X), m && Math.abs(m) + Math.abs(p) > 359.9 && (m = p = 0, _ = 180 - _), d = ct(Math.sqrt(k * k + I * I + O * O)), g = ct(Math.sqrt(M * M + mt * mt)), C = Ke(R, M), x = Math.abs(C) > 2e-4 ? C * Be : 0, b = N ? 1 / (N < 0 ? -N : N) : 0), i.svg && (E = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Eh(Bt(t, st)), E && t.setAttribute("transform", E))), Math.abs(x) > 90 && Math.abs(x) < 270 && (n ? (d *= -1, x += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (g *= -1, x += x <= 0 ? 180 : -180)), e = e || i.uncache, i.x = c - ((i.xPercent = c && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + a, i.y = u - ((i.yPercent = u && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + a, i.z = f + a, i.scaleX = ct(d), i.scaleY = ct(g), i.rotation = ct(p) + o, i.rotationX = ct(m) + o, i.rotationY = ct(_) + o, i.skewX = x + o, i.skewY = y + o, i.transformPerspective = b + a, (i.zOrigin = parseFloat(l.split(" ")[2]) || !e && i.zOrigin || 0) && (r[Mt] = Ls(l)), i.xOffset = i.yOffset = 0, i.force3D = Ot.force3D, i.renderTransform = i.svg ? Ru : Ch ? Rh : Eu, i.uncache = 0, i;
}, Ls = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, ar = function(t, e, i) {
  var r = yt(e);
  return ct(parseFloat(e) + parseFloat(Se(t, "x", i + "px", r))) + r;
}, Eu = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Rh(t, e);
}, Re = "0deg", vi = "0px", Fe = ") ", Rh = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, a = i.x, o = i.y, h = i.z, l = i.rotation, c = i.rotationY, u = i.rotationX, f = i.skewX, d = i.skewY, g = i.scaleX, p = i.scaleY, m = i.transformPerspective, _ = i.force3D, x = i.target, y = i.zOrigin, b = "", w = _ === "auto" && t && t !== 1 || _ === !0;
  if (y && (u !== Re || c !== Re)) {
    var A = parseFloat(c) * ri, v = Math.sin(A), C = Math.cos(A), T;
    A = parseFloat(u) * ri, T = Math.cos(A), a = ar(x, a, v * T * -y), o = ar(x, o, -Math.sin(A) * -y), h = ar(x, h, C * T * -y + y);
  }
  m !== vi && (b += "perspective(" + m + Fe), (r || n) && (b += "translate(" + r + "%, " + n + "%) "), (w || a !== vi || o !== vi || h !== vi) && (b += h !== vi || w ? "translate3d(" + a + ", " + o + ", " + h + ") " : "translate(" + a + ", " + o + Fe), l !== Re && (b += "rotate(" + l + Fe), c !== Re && (b += "rotateY(" + c + Fe), u !== Re && (b += "rotateX(" + u + Fe), (f !== Re || d !== Re) && (b += "skew(" + f + ", " + d + Fe), (g !== 1 || p !== 1) && (b += "scale(" + g + ", " + p + Fe), x.style[st] = b || "translate(0, 0)";
}, Ru = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, a = i.x, o = i.y, h = i.rotation, l = i.skewX, c = i.skewY, u = i.scaleX, f = i.scaleY, d = i.target, g = i.xOrigin, p = i.yOrigin, m = i.xOffset, _ = i.yOffset, x = i.forceCSS, y = parseFloat(a), b = parseFloat(o), w, A, v, C, T;
  h = parseFloat(h), l = parseFloat(l), c = parseFloat(c), c && (c = parseFloat(c), l += c, h += c), h || l ? (h *= ri, l *= ri, w = Math.cos(h) * u, A = Math.sin(h) * u, v = Math.sin(h - l) * -f, C = Math.cos(h - l) * f, l && (c *= ri, T = Math.tan(l - c), T = Math.sqrt(1 + T * T), v *= T, C *= T, c && (T = Math.tan(c), T = Math.sqrt(1 + T * T), w *= T, A *= T)), w = ct(w), A = ct(A), v = ct(v), C = ct(C)) : (w = u, C = f, A = v = 0), (y && !~(a + "").indexOf("px") || b && !~(o + "").indexOf("px")) && (y = Se(d, "x", a, "px"), b = Se(d, "y", o, "px")), (g || p || m || _) && (y = ct(y + g - (g * w + p * v) + m), b = ct(b + p - (g * A + p * C) + _)), (r || n) && (T = d.getBBox(), y = ct(y + r / 100 * T.width), b = ct(b + n / 100 * T.height)), T = "matrix(" + w + "," + A + "," + v + "," + C + "," + y + "," + b + ")", d.setAttribute("transform", T), x && (d.style[st] = T);
}, Fu = function(t, e, i, r, n) {
  var a = 360, o = pt(n), h = parseFloat(n) * (o && ~n.indexOf("rad") ? Be : 1), l = h - r, c = r + l + "deg", u, f;
  return o && (u = n.split("_")[1], u === "short" && (l %= a, l !== l % (a / 2) && (l += l < 0 ? a : -a)), u === "cw" && l < 0 ? l = (l + a * ma) % a - ~~(l / a) * a : u === "ccw" && l > 0 && (l = (l - a * ma) % a - ~~(l / a) * a)), t._pt = f = new Pt(t._pt, e, i, r, l, pu), f.e = c, f.u = "deg", t._props.push(i), f;
}, va = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, Iu = function(t, e, i) {
  var r = va({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", a = i.style, o, h, l, c, u, f, d, g;
  r.svg ? (l = i.getAttribute("transform"), i.setAttribute("transform", ""), a[st] = e, o = Ki(i, 1), Ae(i, st), i.setAttribute("transform", l)) : (l = getComputedStyle(i)[st], a[st] = e, o = Ki(i, 1), a[st] = l);
  for (h in fe)
    l = r[h], c = o[h], l !== c && n.indexOf(h) < 0 && (d = yt(l), g = yt(c), u = d !== g ? Se(i, h, l, g) : parseFloat(l), f = parseFloat(c), t._pt = new Pt(t._pt, o, h, u, f - u, Kr), t._pt.u = g || 0, t._props.push(h));
  va(o, r);
};
Ct("padding,margin,Width,Radius", function(s, t) {
  var e = "Top", i = "Right", r = "Bottom", n = "Left", a = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(o) {
    return t < 2 ? s + o : "border" + o + s;
  });
  Os[t > 1 ? "border" + s : s] = function(o, h, l, c, u) {
    var f, d;
    if (arguments.length < 4)
      return f = a.map(function(g) {
        return le(o, g, l);
      }), d = f.join(" "), d.split(f[0]).length === 5 ? f[0] : d;
    f = (c + "").split(" "), d = {}, a.forEach(function(g, p) {
      return d[g] = f[p] = f[p] || f[(p - 1) / 2 | 0];
    }), o.init(h, d, u);
  };
});
var Fh = {
  name: "css",
  register: Qr,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, i, r, n) {
    var a = this._props, o = t.style, h = i.vars.startAt, l, c, u, f, d, g, p, m, _, x, y, b, w, A, v, C, T;
    Gn || Qr(), this.styles = this.styles || Th(t), C = this.styles.props, this.tween = i;
    for (p in e)
      if (p !== "autoRound" && (c = e[p], !(Rt[p] && ph(p, e, i, r, t, n)))) {
        if (d = typeof c, g = Os[p], d === "function" && (c = c.call(i, r, t, n), d = typeof c), d === "string" && ~c.indexOf("random(") && (c = Xi(c)), g)
          g(this, t, p, c, i) && (v = 1);
        else if (p.substr(0, 2) === "--")
          l = (getComputedStyle(t).getPropertyValue(p) + "").trim(), c += "", we.lastIndex = 0, we.test(l) || (m = yt(l), _ = yt(c), _ ? m !== _ && (l = Se(t, p, l, _) + _) : m && (c += m)), this.add(o, "setProperty", l, c, r, n, 0, 0, p), a.push(p), C.push(p, 0, o[p]);
        else if (d !== "undefined") {
          if (h && p in h ? (l = typeof h[p] == "function" ? h[p].call(i, r, t, n) : h[p], pt(l) && ~l.indexOf("random(") && (l = Xi(l)), yt(l + "") || l === "auto" || (l += Ot.units[p] || yt(le(t, p)) || ""), (l + "").charAt(1) === "=" && (l = le(t, p))) : l = le(t, p), f = parseFloat(l), x = d === "string" && c.charAt(1) === "=" && c.substr(0, 2), x && (c = c.substr(2)), u = parseFloat(c), p in ie && (p === "autoAlpha" && (f === 1 && le(t, "visibility") === "hidden" && u && (f = 0), C.push("visibility", 0, o.visibility), xe(this, o, "visibility", f ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), p !== "scale" && p !== "transform" && (p = ie[p], ~p.indexOf(",") && (p = p.split(",")[0]))), y = p in fe, y) {
            if (this.styles.save(p), T = c, d === "string" && c.substring(0, 6) === "var(--") {
              if (c = Bt(t, c.substring(4, c.indexOf(")"))), c.substring(0, 5) === "calc(") {
                var P = t.style.perspective;
                t.style.perspective = c, c = Bt(t, "perspective"), P ? t.style.perspective = P : Ae(t, "perspective");
              }
              u = parseFloat(c);
            }
            if (b || (w = t._gsap, w.renderTransform && !e.parseTransform || Ki(t, e.parseTransform), A = e.smoothOrigin !== !1 && w.smooth, b = this._pt = new Pt(this._pt, o, st, 0, 1, w.renderTransform, w, 0, -1), b.dep = 1), p === "scale")
              this._pt = new Pt(this._pt, w, "scaleY", w.scaleY, (x ? ii(w.scaleY, x + u) : u) - w.scaleY || 0, Kr), this._pt.u = 0, a.push("scaleY", p), p += "X";
            else if (p === "transformOrigin") {
              C.push(Mt, 0, o[Mt]), c = Mu(c), w.svg ? Jr(t, c, 0, A, 0, this) : (_ = parseFloat(c.split(" ")[2]) || 0, _ !== w.zOrigin && xe(this, w, "zOrigin", w.zOrigin, _), xe(this, o, p, Ls(l), Ls(c)));
              continue;
            } else if (p === "svgOrigin") {
              Jr(t, c, 1, A, 0, this);
              continue;
            } else if (p in kh) {
              Fu(this, w, p, f, x ? ii(f, x + c) : c);
              continue;
            } else if (p === "smoothOrigin") {
              xe(this, w, "smooth", w.smooth, c);
              continue;
            } else if (p === "force3D") {
              w[p] = c;
              continue;
            } else if (p === "transform") {
              Iu(this, c, t);
              continue;
            }
          } else p in o || (p = di(p) || p);
          if (y || (u || u === 0) && (f || f === 0) && !fu.test(c) && p in o)
            m = (l + "").substr((f + "").length), u || (u = 0), _ = yt(c) || (p in Ot.units ? Ot.units[p] : m), m !== _ && (f = Se(t, p, l, _)), this._pt = new Pt(this._pt, y ? w : o, p, f, (x ? ii(f, x + u) : u) - f, !y && (_ === "px" || p === "zIndex") && e.autoRound !== !1 ? _u : Kr), this._pt.u = _ || 0, y && T !== c ? (this._pt.b = l, this._pt.e = T, this._pt.r = gu) : m !== _ && _ !== "%" && (this._pt.b = l, this._pt.r = mu);
          else if (p in o)
            Pu.call(this, t, p, l, x ? x + c : c);
          else if (p in t)
            this.add(t, p, l || t[p], x ? x + c : c, r, n);
          else if (p !== "parseTransform") {
            kn(p, c);
            continue;
          }
          y || (p in o ? C.push(p, 0, o[p]) : typeof t[p] == "function" ? C.push(p, 2, t[p]()) : C.push(p, 1, l || t[p])), a.push(p);
        }
      }
    v && bh(this);
  },
  render: function(t, e) {
    if (e.tween._time || !Un())
      for (var i = e._pt; i; )
        i.r(t, i.d), i = i._next;
    else
      e.styles.revert();
  },
  get: le,
  aliases: ie,
  getSetter: function(t, e, i) {
    var r = ie[e];
    return r && r.indexOf(",") < 0 && (e = r), e in fe && e !== Mt && (t._gsap.x || le(t, "x")) ? i && pa === i ? e === "scale" ? wu : bu : (pa = i || {}) && (e === "scale" ? vu : Au) : t.style && !Cn(t.style[e]) ? xu : ~e.indexOf("-") ? yu : Dn(t, e);
  },
  core: {
    _removeProperty: Ae,
    _getMatrix: Wn
  }
};
kt.utils.checkPrefix = di;
kt.core.getStyleSaver = Th;
(function(s, t, e, i) {
  var r = Ct(s + "," + t + "," + e, function(n) {
    fe[n] = 1;
  });
  Ct(t, function(n) {
    Ot.units[n] = "deg", kh[n] = 1;
  }), ie[r[13]] = s + "," + t, Ct(i, function(n) {
    var a = n.split(":");
    ie[a[1]] = r[a[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Ct("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
  Ot.units[s] = "px";
});
kt.registerPlugin(Fh);
var tn = kt.registerPlugin(Fh) || kt;
tn.core.Tween;
var L = /* @__PURE__ */ ((s) => (s.Application = "application", s.WebGLPipes = "webgl-pipes", s.WebGLPipesAdaptor = "webgl-pipes-adaptor", s.WebGLSystem = "webgl-system", s.WebGPUPipes = "webgpu-pipes", s.WebGPUPipesAdaptor = "webgpu-pipes-adaptor", s.WebGPUSystem = "webgpu-system", s.CanvasSystem = "canvas-system", s.CanvasPipesAdaptor = "canvas-pipes-adaptor", s.CanvasPipes = "canvas-pipes", s.Asset = "asset", s.LoadParser = "load-parser", s.ResolveParser = "resolve-parser", s.CacheParser = "cache-parser", s.DetectionParser = "detection-parser", s.MaskEffect = "mask-effect", s.BlendMode = "blend-mode", s.TextureSource = "texture-source", s.Environment = "environment", s.ShapeBuilder = "shape-builder", s.Batcher = "batcher", s))(L || {});
const en = (s) => {
  if (typeof s == "function" || typeof s == "object" && s.extension) {
    if (!s.extension)
      throw new Error("Extension class must have an extension object");
    s = { ...typeof s.extension != "object" ? { type: s.extension } : s.extension, ref: s };
  }
  if (typeof s == "object")
    s = { ...s };
  else
    throw new Error("Invalid extension type");
  return typeof s.type == "string" && (s.type = [s.type]), s;
}, os = (s, t) => en(s).priority ?? t, _t = {
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
  remove(...s) {
    return s.map(en).forEach((t) => {
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
  add(...s) {
    return s.map(en).forEach((t) => {
      t.type.forEach((e) => {
        const i = this._addHandlers, r = this._queue;
        i[e] ? i[e]?.(t) : (r[e] = r[e] || [], r[e]?.push(t));
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
  handle(s, t, e) {
    const i = this._addHandlers, r = this._removeHandlers;
    if (i[s] || r[s])
      throw new Error(`Extension type ${s} already has a handler`);
    i[s] = t, r[s] = e;
    const n = this._queue;
    return n[s] && (n[s]?.forEach((a) => t(a)), delete n[s]), this;
  },
  /**
   * Handle a type, but using a map by `name` property.
   * @param type - Type of extension to handle.
   * @param map - The object map of named extensions.
   * @returns this for chaining.
   * @ignore
   */
  handleByMap(s, t) {
    return this.handle(
      s,
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
  handleByNamedList(s, t, e = -1) {
    return this.handle(
      s,
      (i) => {
        t.findIndex((n) => n.name === i.name) >= 0 || (t.push({ name: i.name, value: i.ref }), t.sort((n, a) => os(a.value, e) - os(n.value, e)));
      },
      (i) => {
        const r = t.findIndex((n) => n.name === i.name);
        r !== -1 && t.splice(r, 1);
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
  handleByList(s, t, e = -1) {
    return this.handle(
      s,
      (i) => {
        t.includes(i.ref) || (t.push(i.ref), t.sort((r, n) => os(n, e) - os(r, e)));
      },
      (i) => {
        const r = t.indexOf(i.ref);
        r !== -1 && t.splice(r, 1);
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
  mixin(s, ...t) {
    for (const e of t)
      Object.defineProperties(s.prototype, Object.getOwnPropertyDescriptors(e));
  }
}, Bu = {
  extension: {
    type: L.Environment,
    name: "browser",
    priority: -1
  },
  test: () => !0,
  load: async () => {
    await import("./browserAll-BVbsm86v.js");
  }
}, Ou = {
  extension: {
    type: L.Environment,
    name: "webworker",
    priority: 0
  },
  test: () => typeof self < "u" && self.WorkerGlobalScope !== void 0,
  load: async () => {
    await import("./webworkerAll-DpAdsru2.js");
  }
};
class xt {
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
    return new xt(t ?? this._observer, this._x, this._y);
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
var Ih = { exports: {} };
(function(s) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function i() {
  }
  Object.create && (i.prototype = /* @__PURE__ */ Object.create(null), new i().__proto__ || (e = !1));
  function r(h, l, c) {
    this.fn = h, this.context = l, this.once = c || !1;
  }
  function n(h, l, c, u, f) {
    if (typeof c != "function")
      throw new TypeError("The listener must be a function");
    var d = new r(c, u || h, f), g = e ? e + l : l;
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
    var m = this._events[p], _ = arguments.length, x, y;
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
      for (y = 1, x = new Array(_ - 1); y < _; y++)
        x[y - 1] = arguments[y];
      m.fn.apply(m.context, x);
    } else {
      var b = m.length, w;
      for (y = 0; y < b; y++)
        switch (m[y].once && this.removeListener(l, m[y].fn, void 0, !0), _) {
          case 1:
            m[y].fn.call(m[y].context);
            break;
          case 2:
            m[y].fn.call(m[y].context, c);
            break;
          case 3:
            m[y].fn.call(m[y].context, c, u);
            break;
          case 4:
            m[y].fn.call(m[y].context, c, u, f);
            break;
          default:
            if (!x) for (w = 1, x = new Array(_ - 1); w < _; w++)
              x[w - 1] = arguments[w];
            m[y].fn.apply(m[y].context, x);
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
  }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = e, o.EventEmitter = o, s.exports = o;
})(Ih);
var Lu = Ih.exports;
const Ht = /* @__PURE__ */ Bo(Lu), Du = Math.PI * 2, zu = 180 / Math.PI, Gu = Math.PI / 180;
class bt {
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
    return new bt(this.x, this.y);
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
    return or.x = 0, or.y = 0, or;
  }
}
const or = new bt();
class U {
  /**
   * @param a - x scale
   * @param b - y skew
   * @param c - x skew
   * @param d - y scale
   * @param tx - x translation
   * @param ty - y translation
   */
  constructor(t = 1, e = 0, i = 0, r = 1, n = 0, a = 0) {
    this.array = null, this.a = t, this.b = e, this.c = i, this.d = r, this.tx = n, this.ty = a;
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
  set(t, e, i, r, n, a) {
    return this.a = t, this.b = e, this.c = i, this.d = r, this.tx = n, this.ty = a, this;
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
    e = e || new bt();
    const i = t.x, r = t.y;
    return e.x = this.a * i + this.c * r + this.tx, e.y = this.b * i + this.d * r + this.ty, e;
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
    e = e || new bt();
    const i = this.a, r = this.b, n = this.c, a = this.d, o = this.tx, h = this.ty, l = 1 / (i * a + n * -r), c = t.x, u = t.y;
    return e.x = a * l * c + -n * l * u + (h * n - o * a) * l, e.y = i * l * u + -r * l * c + (-h * i + o * r) * l, e;
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
    const e = Math.cos(t), i = Math.sin(t), r = this.a, n = this.c, a = this.tx;
    return this.a = r * e - this.b * i, this.b = r * i + this.b * e, this.c = n * e - this.d * i, this.d = n * i + this.d * e, this.tx = a * e - this.ty * i, this.ty = a * i + this.ty * e, this;
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
    const e = this.a, i = this.b, r = this.c, n = this.d;
    return this.a = t.a * e + t.b * r, this.b = t.a * i + t.b * n, this.c = t.c * e + t.d * r, this.d = t.c * i + t.d * n, this.tx = t.tx * e + t.ty * r + this.tx, this.ty = t.tx * i + t.ty * n + this.ty, this;
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
    const i = t.a, r = t.b, n = t.c, a = t.d, o = t.tx, h = t.ty, l = e.a, c = e.b, u = e.c, f = e.d;
    return this.a = i * l + r * u, this.b = i * c + r * f, this.c = n * l + a * u, this.d = n * c + a * f, this.tx = o * l + h * u + e.tx, this.ty = o * c + h * f + e.ty, this;
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
  setTransform(t, e, i, r, n, a, o, h, l) {
    return this.a = Math.cos(o + l) * n, this.b = Math.sin(o + l) * n, this.c = -Math.sin(o - h) * a, this.d = Math.cos(o - h) * a, this.tx = t - (i * this.a + r * this.c), this.ty = e - (i * this.b + r * this.d), this;
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
      const i = this.a, r = this.c;
      this.a = i * t.a + this.b * t.c, this.b = i * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, this.d = r * t.b + this.d * t.d;
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
    const e = this.a, i = this.b, r = this.c, n = this.d, a = t.pivot, o = -Math.atan2(-r, n), h = Math.atan2(i, e), l = Math.abs(o + h);
    return l < 1e-5 || Math.abs(Du - l) < 1e-5 ? (t.rotation = h, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = o, t.skew.y = h), t.scale.x = Math.sqrt(e * e + i * i), t.scale.y = Math.sqrt(r * r + n * n), t.position.x = this.tx + (a.x * e + a.y * r), t.position.y = this.ty + (a.x * i + a.y * n), t;
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
    const t = this.a, e = this.b, i = this.c, r = this.d, n = this.tx, a = t * r - e * i;
    return this.a = r / a, this.b = -e / a, this.c = -i / a, this.d = t / a, this.tx = (i * this.ty - r * n) / a, this.ty = -(t * this.ty - e * n) / a, this;
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
    const t = new U();
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
    return Nu.identity();
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
    return Uu.identity();
  }
}
const Uu = new U(), Nu = new U(), Oe = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1], Le = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1], De = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1], ze = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1], sn = [], Bh = [], hs = Math.sign;
function Wu() {
  for (let s = 0; s < 16; s++) {
    const t = [];
    sn.push(t);
    for (let e = 0; e < 16; e++) {
      const i = hs(Oe[s] * Oe[e] + De[s] * Le[e]), r = hs(Le[s] * Oe[e] + ze[s] * Le[e]), n = hs(Oe[s] * De[e] + De[s] * ze[e]), a = hs(Le[s] * De[e] + ze[s] * ze[e]);
      for (let o = 0; o < 16; o++)
        if (Oe[o] === i && Le[o] === r && De[o] === n && ze[o] === a) {
          t.push(o);
          break;
        }
    }
  }
  for (let s = 0; s < 16; s++) {
    const t = new U();
    t.set(Oe[s], Le[s], De[s], ze[s], 0, 0), Bh.push(t);
  }
}
Wu();
const H = {
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
  uX: (s) => Oe[s],
  /**
   * @group groupD8
   * @param {GD8Symmetry} ind - sprite rotation angle.
   * @returns {GD8Symmetry} The Y-component of the U-axis
   *    after rotating the axes.
   */
  uY: (s) => Le[s],
  /**
   * @group groupD8
   * @param {GD8Symmetry} ind - sprite rotation angle.
   * @returns {GD8Symmetry} The X-component of the V-axis
   *    after rotating the axes.
   */
  vX: (s) => De[s],
  /**
   * @group groupD8
   * @param {GD8Symmetry} ind - sprite rotation angle.
   * @returns {GD8Symmetry} The Y-component of the V-axis
   *    after rotating the axes.
   */
  vY: (s) => ze[s],
  /**
   * @group groupD8
   * @param {GD8Symmetry} rotation - symmetry whose opposite
   *   is needed. Only rotations have opposite symmetries while
   *   reflections don't.
   * @returns {GD8Symmetry} The opposite symmetry of `rotation`
   */
  inv: (s) => s & 8 ? s & 15 : -s & 7,
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
  add: (s, t) => sn[s][t],
  /**
   * Reverse of `add`.
   * @group groupD8
   * @param {GD8Symmetry} rotationSecond - Second operation
   * @param {GD8Symmetry} rotationFirst - First operation
   * @returns {GD8Symmetry} Result
   */
  sub: (s, t) => sn[s][H.inv(t)],
  /**
   * Adds 180 degrees to rotation, which is a commutative
   * operation.
   * @group groupD8
   * @param {number} rotation - The number to rotate.
   * @returns {number} Rotated number
   */
  rotate180: (s) => s ^ 4,
  /**
   * Checks if the rotation angle is vertical, i.e. south
   * or north. It doesn't work for reflections.
   * @group groupD8
   * @param {GD8Symmetry} rotation - The number to check.
   * @returns {boolean} Whether or not the direction is vertical
   */
  isVertical: (s) => (s & 3) === 2,
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
  byDirection: (s, t) => Math.abs(s) * 2 <= Math.abs(t) ? t >= 0 ? H.S : H.N : Math.abs(t) * 2 <= Math.abs(s) ? s > 0 ? H.E : H.W : t > 0 ? s > 0 ? H.SE : H.SW : s > 0 ? H.NE : H.NW,
  /**
   * Helps sprite to compensate texture packer rotation.
   * @group groupD8
   * @param {Matrix} matrix - sprite world matrix
   * @param {GD8Symmetry} rotation - The rotation factor to use.
   * @param {number} tx - sprite anchoring
   * @param {number} ty - sprite anchoring
   */
  matrixAppendRotationInv: (s, t, e = 0, i = 0) => {
    const r = Bh[H.inv(t)];
    r.tx = e, r.ty = i, s.append(r);
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
  transformRectCoords: (s, t, e, i) => {
    const { x: r, y: n, width: a, height: o } = s, { x: h, y: l, width: c, height: u } = t;
    return e === H.E ? (i.set(r + h, n + l, a, o), i) : e === H.S ? i.set(
      c - n - o + h,
      r + l,
      o,
      a
    ) : e === H.W ? i.set(
      c - r - a + h,
      u - n - o + l,
      a,
      o
    ) : e === H.N ? i.set(
      n + h,
      u - r - a + l,
      o,
      a
    ) : i.set(r + h, n + l, a, o);
  }
}, ls = [new bt(), new bt(), new bt(), new bt()];
class ut {
  /**
   * @param x - The X coordinate of the upper-left corner of the rectangle
   * @param y - The Y coordinate of the upper-left corner of the rectangle
   * @param width - The overall width of the rectangle
   * @param height - The overall height of the rectangle
   */
  constructor(t = 0, e = 0, i = 0, r = 0) {
    this.type = "rectangle", this.x = Number(t), this.y = Number(e), this.width = Number(i), this.height = Number(r);
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
    return new ut(0, 0, 0, 0);
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
    return new ut(this.x, this.y, this.width, this.height);
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
  strokeContains(t, e, i, r = 0.5) {
    const { width: n, height: a } = this;
    if (n <= 0 || a <= 0)
      return !1;
    const o = this.x, h = this.y, l = i * (1 - r), c = i - l, u = o - l, f = o + n + l, d = h - l, g = h + a + l, p = o + c, m = o + n - c, _ = h + c, x = h + a - c;
    return t >= u && t <= f && e >= d && e <= g && !(t > p && t < m && e > _ && e < x);
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
    const i = this.left, r = this.right, n = this.top, a = this.bottom;
    if (r <= i || a <= n)
      return !1;
    const o = ls[0].set(t.left, t.top), h = ls[1].set(t.left, t.bottom), l = ls[2].set(t.right, t.top), c = ls[3].set(t.right, t.bottom);
    if (l.x <= o.x || h.y <= o.y)
      return !1;
    const u = Math.sign(e.a * e.d - e.b * e.c);
    if (u === 0 || (e.apply(o, o), e.apply(h, h), e.apply(l, l), e.apply(c, c), Math.max(o.x, h.x, l.x, c.x) <= i || Math.min(o.x, h.x, l.x, c.x) >= r || Math.max(o.y, h.y, l.y, c.y) <= n || Math.min(o.y, h.y, l.y, c.y) >= a))
      return !1;
    const f = u * (h.y - o.y), d = u * (o.x - h.x), g = f * i + d * n, p = f * r + d * n, m = f * i + d * a, _ = f * r + d * a;
    if (Math.max(g, p, m, _) <= f * o.x + d * o.y || Math.min(g, p, m, _) >= f * c.x + d * c.y)
      return !1;
    const x = u * (o.y - l.y), y = u * (l.x - o.x), b = x * i + y * n, w = x * r + y * n, A = x * i + y * a, v = x * r + y * a;
    return !(Math.max(b, w, A, v) <= x * o.x + y * o.y || Math.min(b, w, A, v) >= x * c.x + y * c.y);
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
    const e = Math.max(this.x, t.x), i = Math.min(this.x + this.width, t.x + t.width), r = Math.max(this.y, t.y), n = Math.min(this.y + this.height, t.y + t.height);
    return this.x = e, this.width = Math.max(i - e, 0), this.y = r, this.height = Math.max(n - r, 0), this;
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
    const i = Math.ceil((this.x + this.width - e) * t) / t, r = Math.ceil((this.y + this.height - e) * t) / t;
    return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = i - this.x, this.height = r - this.y, this;
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
    const e = Math.min(this.x, t.x), i = Math.max(this.x + this.width, t.x + t.width), r = Math.min(this.y, t.y), n = Math.max(this.y + this.height, t.y + t.height);
    return this.x = e, this.width = i - e, this.y = r, this.height = n - r, this;
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
    return t || (t = new ut()), t.copyFrom(this), t;
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
    const e = t.x, i = t.y, r = t.x + t.width, n = t.y + t.height;
    return e >= this.x && e < this.x + this.width && i >= this.y && i < this.y + this.height && r >= this.x && r < this.x + this.width && n >= this.y && n < this.y + this.height;
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
  set(t, e, i, r) {
    return this.x = t, this.y = e, this.width = i, this.height = r, this;
  }
  toString() {
    return `[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
  }
}
const hr = {
  default: -1
};
function lt(s = "default") {
  return hr[s] === void 0 && (hr[s] = -1), ++hr[s];
}
const Aa = /* @__PURE__ */ new Set(), j = "8.0.0", Vu = "8.3.4", ei = {
  quiet: !1,
  noColor: !1
}, G = (s, t, e = 3) => {
  if (ei.quiet || Aa.has(t))
    return;
  let i = new Error().stack;
  const r = `${t}
Deprecated since v${s}`, n = typeof console.groupCollapsed == "function" && !ei.noColor;
  typeof i > "u" ? console.warn("PixiJS Deprecation Warning: ", r) : (i = i.split(`
`).splice(e).join(`
`), n ? (console.groupCollapsed(
    "%cPixiJS Deprecation Warning: %c%s",
    "color:#614108;background:#fffbe6",
    "font-weight:normal;color:#614108;background:#fffbe6",
    r
  ), console.warn(i), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", r), console.warn(i))), Aa.add(t);
};
Object.defineProperties(G, {
  quiet: {
    get: () => ei.quiet,
    set: (s) => {
      ei.quiet = s;
    },
    enumerable: !0,
    configurable: !1
  },
  noColor: {
    get: () => ei.noColor,
    set: (s) => {
      ei.noColor = s;
    },
    enumerable: !0,
    configurable: !1
  }
});
const Oh = () => {
};
function Ds(s) {
  return s += s === 0 ? 1 : 0, --s, s |= s >>> 1, s |= s >>> 2, s |= s >>> 4, s |= s >>> 8, s |= s >>> 16, s + 1;
}
function Sa(s) {
  return !(s & s - 1) && !!s;
}
function Lh(s) {
  const t = {};
  for (const e in s)
    s[e] !== void 0 && (t[e] = s[e]);
  return t;
}
const Ta = /* @__PURE__ */ Object.create(null);
function Yu(s) {
  const t = Ta[s];
  return t === void 0 && (Ta[s] = lt("resource")), t;
}
const Dh = class zh extends Ht {
  /**
   * @param options - options for the style
   */
  constructor(t = {}) {
    super(), this._resourceType = "textureSampler", this._touched = 0, this._maxAnisotropy = 1, this.destroyed = !1, t = { ...zh.defaultOptions, ...t }, this.addressMode = t.addressMode, this.addressModeU = t.addressModeU ?? this.addressModeU, this.addressModeV = t.addressModeV ?? this.addressModeV, this.addressModeW = t.addressModeW ?? this.addressModeW, this.scaleMode = t.scaleMode, this.magFilter = t.magFilter ?? this.magFilter, this.minFilter = t.minFilter ?? this.minFilter, this.mipmapFilter = t.mipmapFilter ?? this.mipmapFilter, this.lodMinClamp = t.lodMinClamp, this.lodMaxClamp = t.lodMaxClamp, this.compare = t.compare, this.maxAnisotropy = t.maxAnisotropy ?? 1;
  }
  set addressMode(t) {
    this.addressModeU = t, this.addressModeV = t, this.addressModeW = t;
  }
  /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */
  get addressMode() {
    return this.addressModeU;
  }
  set wrapMode(t) {
    G(j, "TextureStyle.wrapMode is now TextureStyle.addressMode"), this.addressMode = t;
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
    return this._sharedResourceId = Yu(t), this._resourceId;
  }
  /** Destroys the style */
  destroy() {
    this.destroyed = !0, this.emit("destroy", this), this.emit("change", this), this.removeAllListeners();
  }
};
Dh.defaultOptions = {
  addressMode: "clamp-to-edge",
  scaleMode: "linear"
};
let zs = Dh;
const Gh = class Uh extends Ht {
  /**
   * @param options - options for creating a new TextureSource
   */
  constructor(t = {}) {
    super(), this.options = t, this._gpuData = /* @__PURE__ */ Object.create(null), this._gcLastUsed = -1, this.uid = lt("textureSource"), this._resourceType = "textureSource", this._resourceId = lt("resource"), this.uploadMethodId = "unknown", this._resolution = 1, this.pixelWidth = 1, this.pixelHeight = 1, this.width = 1, this.height = 1, this.sampleCount = 1, this.mipLevelCount = 1, this.autoGenerateMipmaps = !1, this.format = "rgba8unorm", this.dimension = "2d", this.antialias = !1, this._touched = 0, this._batchTick = -1, this._textureBindLocation = -1, t = { ...Uh.defaultOptions, ...t }, this.label = t.label ?? "", this.resource = t.resource, this.autoGarbageCollect = t.autoGarbageCollect, this._resolution = t.resolution, t.width ? this.pixelWidth = t.width * this._resolution : this.pixelWidth = this.resource ? this.resourceWidth ?? 1 : 1, t.height ? this.pixelHeight = t.height * this._resolution : this.pixelHeight = this.resource ? this.resourceHeight ?? 1 : 1, this.width = this.pixelWidth / this._resolution, this.height = this.pixelHeight / this._resolution, this.format = t.format, this.dimension = t.dimensions, this.mipLevelCount = t.mipLevelCount, this.autoGenerateMipmaps = t.autoGenerateMipmaps, this.sampleCount = t.sampleCount, this.antialias = t.antialias, this.alphaMode = t.alphaMode, this.style = new zs(Lh(t)), this.destroyed = !1, this._refreshPOT();
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
    this._resourceId = lt("resource"), this.emit("change", this), this.emit("unload", this);
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
    const r = Math.round(t * i), n = Math.round(e * i);
    return this.width = r / i, this.height = n / i, this._resolution = i, this.pixelWidth === r && this.pixelHeight === n ? !1 : (this._refreshPOT(), this.pixelWidth = r, this.pixelHeight = n, this.emit("resize", this), this._resourceId = lt("resource"), this.emit("change", this), !0);
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
    this.isPowerOfTwo = Sa(this.pixelWidth) && Sa(this.pixelHeight);
  }
  static test(t) {
    throw new Error("Unimplemented");
  }
};
Gh.defaultOptions = {
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
let qt = Gh;
class Vn extends qt {
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
Vn.extension = L.TextureSource;
const Ca = new U();
class $u {
  /**
   * @param texture - observed texture
   * @param clampMargin - Changes frame clamping, 0.5 by default. Use -0.5 for extra border.
   */
  constructor(t, e) {
    this.mapCoord = new U(), this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, typeof e > "u" ? this.clampMargin = t.width < 10 ? 0 : 0.5 : this.clampMargin = e, this.isSimple = !1, this.texture = t;
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
    for (let r = 0; r < t.length; r += 2) {
      const n = t[r], a = t[r + 1];
      e[r] = n * i.a + a * i.c + i.tx, e[r + 1] = n * i.b + a * i.d + i.ty;
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
    const i = t.orig, r = t.trim;
    r && (Ca.set(
      i.width / r.width,
      0,
      0,
      i.height / r.height,
      -r.x / r.width,
      -r.y / r.height
    ), this.mapCoord.append(Ca));
    const n = t.source, a = this.uClampFrame, o = this.clampMargin / n._resolution, h = this.clampOffset / n._resolution;
    return a[0] = (t.frame.x + o + h) / n.width, a[1] = (t.frame.y + o + h) / n.height, a[2] = (t.frame.x + t.frame.width - o + h) / n.width, a[3] = (t.frame.y + t.frame.height - o + h) / n.height, this.uClampOffset[0] = this.clampOffset / n.pixelWidth, this.uClampOffset[1] = this.clampOffset / n.pixelHeight, this.isSimple = t.frame.width === n.width && t.frame.height === n.height && t.rotate === 0, !0;
  }
}
class V extends Ht {
  /**
   * @param {TextureOptions} options - Options for the texture
   */
  constructor({
    source: t,
    label: e,
    frame: i,
    orig: r,
    trim: n,
    defaultAnchor: a,
    defaultBorders: o,
    rotate: h,
    dynamic: l
  } = {}) {
    if (super(), this.uid = lt("texture"), this.uvs = { x0: 0, y0: 0, x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0 }, this.frame = new ut(), this.noFrame = !1, this.dynamic = !1, this.isTexture = !0, this.label = e, this.source = t?.source ?? new qt(), this.noFrame = !i, i)
      this.frame.copyFrom(i);
    else {
      const { width: c, height: u } = this._source;
      this.frame.width = c, this.frame.height = u;
    }
    this.orig = r || this.frame, this.trim = n, this.rotate = h ?? 0, this.defaultAnchor = a, this.defaultBorders = o, this.destroyed = !1, this.dynamic = l || !1, this.updateUvs();
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
    return this._textureMatrix || (this._textureMatrix = new $u(this)), this._textureMatrix;
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
    const { uvs: t, frame: e } = this, { width: i, height: r } = this._source, n = e.x / i, a = e.y / r, o = e.width / i, h = e.height / r;
    let l = this.rotate;
    if (l) {
      const c = o / 2, u = h / 2, f = n + c, d = a + u;
      l = H.add(l, H.NW), t.x0 = f + c * H.uX(l), t.y0 = d + u * H.uY(l), l = H.add(l, 2), t.x1 = f + c * H.uX(l), t.y1 = d + u * H.uY(l), l = H.add(l, 2), t.x2 = f + c * H.uX(l), t.y2 = d + u * H.uY(l), l = H.add(l, 2), t.x3 = f + c * H.uX(l), t.y3 = d + u * H.uY(l);
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
    return G(j, "Texture.baseTexture is now Texture.source"), this._source;
  }
}
V.EMPTY = new V({
  label: "EMPTY",
  source: new qt({
    label: "EMPTY"
  })
});
V.EMPTY.destroy = Oh;
V.WHITE = new V({
  source: new Vn({
    resource: new Uint8Array([255, 255, 255, 255]),
    width: 1,
    height: 1,
    alphaMode: "premultiply-alpha-on-upload",
    label: "WHITE"
  }),
  label: "WHITE"
});
V.WHITE.destroy = Oh;
function Xu(s, t, e) {
  const { width: i, height: r } = e.orig, n = e.trim;
  if (n) {
    const a = n.width, o = n.height;
    s.minX = n.x - t._x * i, s.maxX = s.minX + a, s.minY = n.y - t._y * r, s.maxY = s.minY + o;
  } else
    s.minX = -t._x * i, s.maxX = s.minX + i, s.minY = -t._y * r, s.maxY = s.minY + r;
}
const Pa = new U();
class jt {
  /**
   * Creates a new Bounds object.
   * @param minX - The minimum X coordinate of the bounds.
   * @param minY - The minimum Y coordinate of the bounds.
   * @param maxX - The maximum X coordinate of the bounds.
   * @param maxY - The maximum Y coordinate of the bounds.
   */
  constructor(t = 1 / 0, e = 1 / 0, i = -1 / 0, r = -1 / 0) {
    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.matrix = Pa, this.minX = t, this.minY = e, this.maxX = i, this.maxY = r;
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
    this._rectangle || (this._rectangle = new ut());
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
    return this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.matrix = Pa, this;
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
  set(t, e, i, r) {
    this.minX = t, this.minY = e, this.maxX = i, this.maxY = r;
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
  addFrame(t, e, i, r, n) {
    n || (n = this.matrix);
    const a = n.a, o = n.b, h = n.c, l = n.d, c = n.tx, u = n.ty;
    let f = this.minX, d = this.minY, g = this.maxX, p = this.maxY, m = a * t + h * e + c, _ = o * t + l * e + u;
    m < f && (f = m), _ < d && (d = _), m > g && (g = m), _ > p && (p = _), m = a * i + h * e + c, _ = o * i + l * e + u, m < f && (f = m), _ < d && (d = _), m > g && (g = m), _ > p && (p = _), m = a * t + h * r + c, _ = o * t + l * r + u, m < f && (f = m), _ < d && (d = _), m > g && (g = m), _ > p && (p = _), m = a * i + h * r + c, _ = o * i + l * r + u, m < f && (f = m), _ < d && (d = _), m > g && (g = m), _ > p && (p = _), this.minX = f, this.minY = d, this.maxX = g, this.maxY = p;
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
    const e = this.minX, i = this.minY, r = this.maxX, n = this.maxY, { a, b: o, c: h, d: l, tx: c, ty: u } = t;
    let f = a * e + h * i + c, d = o * e + l * i + u;
    this.minX = f, this.minY = d, this.maxX = f, this.maxY = d, f = a * r + h * i + c, d = o * r + l * i + u, this.minX = f < this.minX ? f : this.minX, this.minY = d < this.minY ? d : this.minY, this.maxX = f > this.maxX ? f : this.maxX, this.maxY = d > this.maxY ? d : this.maxY, f = a * e + h * n + c, d = o * e + l * n + u, this.minX = f < this.minX ? f : this.minX, this.minY = d < this.minY ? d : this.minY, this.maxX = f > this.maxX ? f : this.maxX, this.maxY = d > this.maxY ? d : this.maxY, f = a * r + h * n + c, d = o * r + l * n + u, this.minX = f < this.minX ? f : this.minX, this.minY = d < this.minY ? d : this.minY, this.maxX = f > this.maxX ? f : this.maxX, this.maxY = d > this.maxY ? d : this.maxY;
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
  fitBounds(t, e, i, r) {
    return this.minX < t && (this.minX = t), this.maxX > e && (this.maxX = e), this.minY < i && (this.minY = i), this.maxY > r && (this.maxY = r), this;
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
    return new jt(this.minX, this.minY, this.maxX, this.maxY);
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
  addVertexData(t, e, i, r) {
    let n = this.minX, a = this.minY, o = this.maxX, h = this.maxY;
    r || (r = this.matrix);
    const l = r.a, c = r.b, u = r.c, f = r.d, d = r.tx, g = r.ty;
    for (let p = e; p < i; p += 2) {
      const m = t[p], _ = t[p + 1], x = l * m + u * _ + d, y = c * m + f * _ + g;
      n = x < n ? x : n, a = y < a ? y : a, o = x > o ? x : o, h = y > h ? y : h;
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
var ju = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, oe = function(s) {
  return typeof s == "string" ? s.length > 0 : typeof s == "number";
}, ft = function(s, t, e) {
  return t === void 0 && (t = 0), e === void 0 && (e = Math.pow(10, t)), Math.round(e * s) / e + 0;
}, Vt = function(s, t, e) {
  return t === void 0 && (t = 0), e === void 0 && (e = 1), s > e ? e : s > t ? s : t;
}, Nh = function(s) {
  return (s = isFinite(s) ? s % 360 : 0) > 0 ? s : s + 360;
}, Ma = function(s) {
  return { r: Vt(s.r, 0, 255), g: Vt(s.g, 0, 255), b: Vt(s.b, 0, 255), a: Vt(s.a) };
}, lr = function(s) {
  return { r: ft(s.r), g: ft(s.g), b: ft(s.b), a: ft(s.a, 3) };
}, Hu = /^#([0-9a-f]{3,8})$/i, cs = function(s) {
  var t = s.toString(16);
  return t.length < 2 ? "0" + t : t;
}, Wh = function(s) {
  var t = s.r, e = s.g, i = s.b, r = s.a, n = Math.max(t, e, i), a = n - Math.min(t, e, i), o = a ? n === t ? (e - i) / a : n === e ? 2 + (i - t) / a : 4 + (t - e) / a : 0;
  return { h: 60 * (o < 0 ? o + 6 : o), s: n ? a / n * 100 : 0, v: n / 255 * 100, a: r };
}, Vh = function(s) {
  var t = s.h, e = s.s, i = s.v, r = s.a;
  t = t / 360 * 6, e /= 100, i /= 100;
  var n = Math.floor(t), a = i * (1 - e), o = i * (1 - (t - n) * e), h = i * (1 - (1 - t + n) * e), l = n % 6;
  return { r: 255 * [i, o, a, a, h, i][l], g: 255 * [h, i, i, o, a, a][l], b: 255 * [a, a, h, i, i, o][l], a: r };
}, ka = function(s) {
  return { h: Nh(s.h), s: Vt(s.s, 0, 100), l: Vt(s.l, 0, 100), a: Vt(s.a) };
}, Ea = function(s) {
  return { h: ft(s.h), s: ft(s.s), l: ft(s.l), a: ft(s.a, 3) };
}, Ra = function(s) {
  return Vh((e = (t = s).s, { h: t.h, s: (e *= ((i = t.l) < 50 ? i : 100 - i) / 100) > 0 ? 2 * e / (i + e) * 100 : 0, v: i + e, a: t.a }));
  var t, e, i;
}, Gi = function(s) {
  return { h: (t = Wh(s)).h, s: (r = (200 - (e = t.s)) * (i = t.v) / 100) > 0 && r < 200 ? e * i / 100 / (r <= 100 ? r : 200 - r) * 100 : 0, l: r / 2, a: t.a };
  var t, e, i, r;
}, qu = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Ku = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Zu = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Qu = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, rn = { string: [[function(s) {
  var t = Hu.exec(s);
  return t ? (s = t[1]).length <= 4 ? { r: parseInt(s[0] + s[0], 16), g: parseInt(s[1] + s[1], 16), b: parseInt(s[2] + s[2], 16), a: s.length === 4 ? ft(parseInt(s[3] + s[3], 16) / 255, 2) : 1 } : s.length === 6 || s.length === 8 ? { r: parseInt(s.substr(0, 2), 16), g: parseInt(s.substr(2, 2), 16), b: parseInt(s.substr(4, 2), 16), a: s.length === 8 ? ft(parseInt(s.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(s) {
  var t = Zu.exec(s) || Qu.exec(s);
  return t ? t[2] !== t[4] || t[4] !== t[6] ? null : Ma({ r: Number(t[1]) / (t[2] ? 100 / 255 : 1), g: Number(t[3]) / (t[4] ? 100 / 255 : 1), b: Number(t[5]) / (t[6] ? 100 / 255 : 1), a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1) }) : null;
}, "rgb"], [function(s) {
  var t = qu.exec(s) || Ku.exec(s);
  if (!t) return null;
  var e, i, r = ka({ h: (e = t[1], i = t[2], i === void 0 && (i = "deg"), Number(e) * (ju[i] || 1)), s: Number(t[3]), l: Number(t[4]), a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1) });
  return Ra(r);
}, "hsl"]], object: [[function(s) {
  var t = s.r, e = s.g, i = s.b, r = s.a, n = r === void 0 ? 1 : r;
  return oe(t) && oe(e) && oe(i) ? Ma({ r: Number(t), g: Number(e), b: Number(i), a: Number(n) }) : null;
}, "rgb"], [function(s) {
  var t = s.h, e = s.s, i = s.l, r = s.a, n = r === void 0 ? 1 : r;
  if (!oe(t) || !oe(e) || !oe(i)) return null;
  var a = ka({ h: Number(t), s: Number(e), l: Number(i), a: Number(n) });
  return Ra(a);
}, "hsl"], [function(s) {
  var t = s.h, e = s.s, i = s.v, r = s.a, n = r === void 0 ? 1 : r;
  if (!oe(t) || !oe(e) || !oe(i)) return null;
  var a = function(o) {
    return { h: Nh(o.h), s: Vt(o.s, 0, 100), v: Vt(o.v, 0, 100), a: Vt(o.a) };
  }({ h: Number(t), s: Number(e), v: Number(i), a: Number(n) });
  return Vh(a);
}, "hsv"]] }, Fa = function(s, t) {
  for (var e = 0; e < t.length; e++) {
    var i = t[e][0](s);
    if (i) return [i, t[e][1]];
  }
  return [null, void 0];
}, Ju = function(s) {
  return typeof s == "string" ? Fa(s.trim(), rn.string) : typeof s == "object" && s !== null ? Fa(s, rn.object) : [null, void 0];
}, cr = function(s, t) {
  var e = Gi(s);
  return { h: e.h, s: Vt(e.s + 100 * t, 0, 100), l: e.l, a: e.a };
}, ur = function(s) {
  return (299 * s.r + 587 * s.g + 114 * s.b) / 1e3 / 255;
}, Ia = function(s, t) {
  var e = Gi(s);
  return { h: e.h, s: e.s, l: Vt(e.l + 100 * t, 0, 100), a: e.a };
}, nn = function() {
  function s(t) {
    this.parsed = Ju(t)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return s.prototype.isValid = function() {
    return this.parsed !== null;
  }, s.prototype.brightness = function() {
    return ft(ur(this.rgba), 2);
  }, s.prototype.isDark = function() {
    return ur(this.rgba) < 0.5;
  }, s.prototype.isLight = function() {
    return ur(this.rgba) >= 0.5;
  }, s.prototype.toHex = function() {
    return t = lr(this.rgba), e = t.r, i = t.g, r = t.b, a = (n = t.a) < 1 ? cs(ft(255 * n)) : "", "#" + cs(e) + cs(i) + cs(r) + a;
    var t, e, i, r, n, a;
  }, s.prototype.toRgb = function() {
    return lr(this.rgba);
  }, s.prototype.toRgbString = function() {
    return t = lr(this.rgba), e = t.r, i = t.g, r = t.b, (n = t.a) < 1 ? "rgba(" + e + ", " + i + ", " + r + ", " + n + ")" : "rgb(" + e + ", " + i + ", " + r + ")";
    var t, e, i, r, n;
  }, s.prototype.toHsl = function() {
    return Ea(Gi(this.rgba));
  }, s.prototype.toHslString = function() {
    return t = Ea(Gi(this.rgba)), e = t.h, i = t.s, r = t.l, (n = t.a) < 1 ? "hsla(" + e + ", " + i + "%, " + r + "%, " + n + ")" : "hsl(" + e + ", " + i + "%, " + r + "%)";
    var t, e, i, r, n;
  }, s.prototype.toHsv = function() {
    return t = Wh(this.rgba), { h: ft(t.h), s: ft(t.s), v: ft(t.v), a: ft(t.a, 3) };
    var t;
  }, s.prototype.invert = function() {
    return Zt({ r: 255 - (t = this.rgba).r, g: 255 - t.g, b: 255 - t.b, a: t.a });
    var t;
  }, s.prototype.saturate = function(t) {
    return t === void 0 && (t = 0.1), Zt(cr(this.rgba, t));
  }, s.prototype.desaturate = function(t) {
    return t === void 0 && (t = 0.1), Zt(cr(this.rgba, -t));
  }, s.prototype.grayscale = function() {
    return Zt(cr(this.rgba, -1));
  }, s.prototype.lighten = function(t) {
    return t === void 0 && (t = 0.1), Zt(Ia(this.rgba, t));
  }, s.prototype.darken = function(t) {
    return t === void 0 && (t = 0.1), Zt(Ia(this.rgba, -t));
  }, s.prototype.rotate = function(t) {
    return t === void 0 && (t = 15), this.hue(this.hue() + t);
  }, s.prototype.alpha = function(t) {
    return typeof t == "number" ? Zt({ r: (e = this.rgba).r, g: e.g, b: e.b, a: t }) : ft(this.rgba.a, 3);
    var e;
  }, s.prototype.hue = function(t) {
    var e = Gi(this.rgba);
    return typeof t == "number" ? Zt({ h: t, s: e.s, l: e.l, a: e.a }) : ft(e.h);
  }, s.prototype.isEqual = function(t) {
    return this.toHex() === Zt(t).toHex();
  }, s;
}(), Zt = function(s) {
  return s instanceof nn ? s : new nn(s);
}, Ba = [], td = function(s) {
  s.forEach(function(t) {
    Ba.indexOf(t) < 0 && (t(nn, rn), Ba.push(t));
  });
};
function ed(s, t) {
  var e = { white: "#ffffff", bisque: "#ffe4c4", blue: "#0000ff", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", antiquewhite: "#faebd7", aqua: "#00ffff", azure: "#f0ffff", whitesmoke: "#f5f5f5", papayawhip: "#ffefd5", plum: "#dda0dd", blanchedalmond: "#ffebcd", black: "#000000", gold: "#ffd700", goldenrod: "#daa520", gainsboro: "#dcdcdc", cornsilk: "#fff8dc", cornflowerblue: "#6495ed", burlywood: "#deb887", aquamarine: "#7fffd4", beige: "#f5f5dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkkhaki: "#bdb76b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", peachpuff: "#ffdab9", darkmagenta: "#8b008b", darkred: "#8b0000", darkorchid: "#9932cc", darkorange: "#ff8c00", darkslateblue: "#483d8b", gray: "#808080", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", deeppink: "#ff1493", deepskyblue: "#00bfff", wheat: "#f5deb3", firebrick: "#b22222", floralwhite: "#fffaf0", ghostwhite: "#f8f8ff", darkviolet: "#9400d3", magenta: "#ff00ff", green: "#008000", dodgerblue: "#1e90ff", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", blueviolet: "#8a2be2", forestgreen: "#228b22", lawngreen: "#7cfc00", indianred: "#cd5c5c", indigo: "#4b0082", fuchsia: "#ff00ff", brown: "#a52a2a", maroon: "#800000", mediumblue: "#0000cd", lightcoral: "#f08080", darkturquoise: "#00ced1", lightcyan: "#e0ffff", ivory: "#fffff0", lightyellow: "#ffffe0", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", linen: "#faf0e6", mediumaquamarine: "#66cdaa", lemonchiffon: "#fffacd", lime: "#00ff00", khaki: "#f0e68c", mediumseagreen: "#3cb371", limegreen: "#32cd32", mediumspringgreen: "#00fa9a", lightskyblue: "#87cefa", lightblue: "#add8e6", midnightblue: "#191970", lightpink: "#ffb6c1", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", mintcream: "#f5fffa", lightslategray: "#778899", lightslategrey: "#778899", navajowhite: "#ffdead", navy: "#000080", mediumvioletred: "#c71585", powderblue: "#b0e0e6", palegoldenrod: "#eee8aa", oldlace: "#fdf5e6", paleturquoise: "#afeeee", mediumturquoise: "#48d1cc", mediumorchid: "#ba55d3", rebeccapurple: "#663399", lightsteelblue: "#b0c4de", mediumslateblue: "#7b68ee", thistle: "#d8bfd8", tan: "#d2b48c", orchid: "#da70d6", mediumpurple: "#9370db", purple: "#800080", pink: "#ffc0cb", skyblue: "#87ceeb", springgreen: "#00ff7f", palegreen: "#98fb98", red: "#ff0000", yellow: "#ffff00", slateblue: "#6a5acd", lavenderblush: "#fff0f5", peru: "#cd853f", palevioletred: "#db7093", violet: "#ee82ee", teal: "#008080", slategray: "#708090", slategrey: "#708090", aliceblue: "#f0f8ff", darkseagreen: "#8fbc8f", darkolivegreen: "#556b2f", greenyellow: "#adff2f", seagreen: "#2e8b57", seashell: "#fff5ee", tomato: "#ff6347", silver: "#c0c0c0", sienna: "#a0522d", lavender: "#e6e6fa", lightgreen: "#90ee90", orange: "#ffa500", orangered: "#ff4500", steelblue: "#4682b4", royalblue: "#4169e1", turquoise: "#40e0d0", yellowgreen: "#9acd32", salmon: "#fa8072", saddlebrown: "#8b4513", sandybrown: "#f4a460", rosybrown: "#bc8f8f", darksalmon: "#e9967a", lightgoldenrodyellow: "#fafad2", snow: "#fffafa", lightgrey: "#d3d3d3", lightgray: "#d3d3d3", dimgray: "#696969", dimgrey: "#696969", olivedrab: "#6b8e23", olive: "#808000" }, i = {};
  for (var r in e) i[e[r]] = r;
  var n = {};
  s.prototype.toName = function(a) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
    var o, h, l = i[this.toHex()];
    if (l) return l;
    if (a?.closest) {
      var c = this.toRgb(), u = 1 / 0, f = "black";
      if (!n.length) for (var d in e) n[d] = new s(e[d]).toRgb();
      for (var g in e) {
        var p = (o = c, h = n[g], Math.pow(o.r - h.r, 2) + Math.pow(o.g - h.g, 2) + Math.pow(o.b - h.b, 2));
        p < u && (u = p, f = g);
      }
      return f;
    }
  }, t.string.push([function(a) {
    var o = a.toLowerCase(), h = o === "transparent" ? "#0000" : e[o];
    return h ? new s(h).toRgb() : null;
  }, "name"]);
}
td([ed]);
const fi = class Fi {
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
    if (t instanceof Fi)
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
    const [t, e, i, r] = this._components;
    return { r: t, g: e, b: i, a: r };
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
    const [e, i, r] = this._components;
    return this._arrayRgb || (this._arrayRgb = []), t || (t = this._arrayRgb), t[0] = Math.round(e * 255), t[1] = Math.round(i * 255), t[2] = Math.round(r * 255), t;
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
    const [e, i, r, n] = this._components;
    return t[0] = e, t[1] = i, t[2] = r, t[3] = n, t;
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
    const [e, i, r] = this._components;
    return t[0] = e, t[1] = i, t[2] = r, t;
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
    const [e, i, r, n] = Fi._temp.setValue(t)._components;
    return this._components[0] *= e, this._components[1] *= i, this._components[2] *= r, this._components[3] *= n, this._refreshInt(), this._value = null, this;
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
    let i = this._int >> 16 & 255, r = this._int >> 8 & 255, n = this._int & 255;
    return e && (i = i * t + 0.5 | 0, r = r * t + 0.5 | 0, n = n * t + 0.5 | 0), (t * 255 << 24) + (i << 16) + (r << 8) + n;
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
    let e, i, r, n;
    if ((typeof t == "number" || t instanceof Number) && t >= 0 && t <= 16777215) {
      const a = t;
      e = (a >> 16 & 255) / 255, i = (a >> 8 & 255) / 255, r = (a & 255) / 255, n = 1;
    } else if ((Array.isArray(t) || t instanceof Float32Array) && t.length >= 3 && t.length <= 4)
      t = this._clamp(t), [e, i, r, n = 1] = t;
    else if ((t instanceof Uint8Array || t instanceof Uint8ClampedArray) && t.length >= 3 && t.length <= 4)
      t = this._clamp(t, 0, 255), [e, i, r, n = 255] = t, e /= 255, i /= 255, r /= 255, n /= 255;
    else if (typeof t == "string" || typeof t == "object") {
      if (typeof t == "string") {
        const o = Fi.HEX_PATTERN.exec(t);
        o && (t = `#${o[2]}`);
      }
      const a = Zt(t);
      a.isValid() && ({ r: e, g: i, b: r, a: n } = a.rgba, e /= 255, i /= 255, r /= 255);
    }
    if (e !== void 0)
      this._components[0] = e, this._components[1] = i, this._components[2] = r, this._components[3] = n, this._refreshInt();
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
    return typeof t == "number" ? Math.min(Math.max(t, e), i) : (t.forEach((r, n) => {
      t[n] = Math.min(Math.max(r, e), i);
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
    return typeof t == "number" || typeof t == "string" || t instanceof Number || t instanceof Fi || Array.isArray(t) || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Float32Array || t.r !== void 0 && t.g !== void 0 && t.b !== void 0 || t.r !== void 0 && t.g !== void 0 && t.b !== void 0 && t.a !== void 0 || t.h !== void 0 && t.s !== void 0 && t.l !== void 0 || t.h !== void 0 && t.s !== void 0 && t.l !== void 0 && t.a !== void 0 || t.h !== void 0 && t.s !== void 0 && t.v !== void 0 || t.h !== void 0 && t.s !== void 0 && t.v !== void 0 && t.a !== void 0;
  }
};
fi.shared = new fi();
fi._temp = new fi();
fi.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
let nt = fi;
const id = {
  cullArea: null,
  cullable: !1,
  cullableChildren: !0
};
let dr = 0;
const Oa = 500;
function Q(...s) {
  dr !== Oa && (dr++, dr === Oa ? console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS.") : console.warn("PixiJS Warning: ", ...s));
}
const ns = {
  /**
   * Set of registered pools and cleanable objects.
   * @private
   */
  _registeredResources: /* @__PURE__ */ new Set(),
  /**
   * Registers a pool or cleanable object for cleanup.
   * @param {Cleanable} pool - The pool or object to register.
   */
  register(s) {
    this._registeredResources.add(s);
  },
  /**
   * Unregisters a pool or cleanable object from cleanup.
   * @param {Cleanable} pool - The pool or object to unregister.
   */
  unregister(s) {
    this._registeredResources.delete(s);
  },
  /** Clears all registered pools and cleanable objects. This will call clear() on each registered item. */
  release() {
    this._registeredResources.forEach((s) => s.clear());
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
  isRegistered(s) {
    return this._registeredResources.has(s);
  },
  /**
   * Removes all registrations without clearing the pools.
   * Useful if you want to reset the collector without affecting the pools.
   */
  reset() {
    this._registeredResources.clear();
  }
};
class sd {
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
class rd {
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
    return this._poolsByClass.has(t) || this._poolsByClass.set(t, new sd(t)), this._poolsByClass.get(t);
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
const Yt = new rd();
ns.register(Yt);
const nd = {
  get isCachedAsTexture() {
    return !!this.renderGroup?.isCachedAsTexture;
  },
  cacheAsTexture(s) {
    typeof s == "boolean" && s === !1 ? this.disableRenderGroup() : (this.enableRenderGroup(), this.renderGroup.enableCacheAsTexture(s === !0 ? {} : s));
  },
  updateCacheTexture() {
    this.renderGroup?.updateCacheTexture();
  },
  get cacheAsBitmap() {
    return this.isCachedAsTexture;
  },
  set cacheAsBitmap(s) {
    G("v8.6.0", "cacheAsBitmap is deprecated, use cacheAsTexture instead."), this.cacheAsTexture(s);
  }
};
function ad(s, t, e) {
  const i = s.length;
  let r;
  if (t >= i || e === 0)
    return;
  e = t + e > i ? i - t : e;
  const n = i - e;
  for (r = t; r < n; ++r)
    s[r] = s[r + e];
  s.length = n;
}
const od = {
  allowChildren: !0,
  removeChildren(s = 0, t) {
    const e = t ?? this.children.length, i = e - s, r = [];
    if (i > 0 && i <= e) {
      for (let a = e - 1; a >= s; a--) {
        const o = this.children[a];
        o && (r.push(o), o.parent = null);
      }
      ad(this.children, s, e);
      const n = this.renderGroup || this.parentRenderGroup;
      n && n.removeChildren(r);
      for (let a = 0; a < r.length; ++a) {
        const o = r[a];
        o.parentRenderLayer?.detach(o), this.emit("childRemoved", o, this, a), r[a].emit("removed", this);
      }
      return r.length > 0 && this._didViewChangeTick++, r;
    } else if (i === 0 && this.children.length === 0)
      return r;
    throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
  },
  removeChildAt(s) {
    const t = this.getChildAt(s);
    return this.removeChild(t);
  },
  getChildAt(s) {
    if (s < 0 || s >= this.children.length)
      throw new Error(`getChildAt: Index (${s}) does not exist.`);
    return this.children[s];
  },
  setChildIndex(s, t) {
    if (t < 0 || t >= this.children.length)
      throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);
    this.getChildIndex(s), this.addChildAt(s, t);
  },
  getChildIndex(s) {
    const t = this.children.indexOf(s);
    if (t === -1)
      throw new Error("The supplied Container must be a child of the caller");
    return t;
  },
  addChildAt(s, t) {
    this.allowChildren || G(j, "addChildAt: Only Containers will be allowed to add children in v8.0.0");
    const { children: e } = this;
    if (t < 0 || t > e.length)
      throw new Error(`${s}addChildAt: The index ${t} supplied is out of bounds ${e.length}`);
    if (s.parent) {
      const r = s.parent.children.indexOf(s);
      if (s.parent === this && r === t)
        return s;
      r !== -1 && s.parent.children.splice(r, 1);
    }
    t === e.length ? e.push(s) : e.splice(t, 0, s), s.parent = this, s.didChange = !0, s._updateFlags = 15;
    const i = this.renderGroup || this.parentRenderGroup;
    return i && i.addChild(s), this.sortableChildren && (this.sortDirty = !0), this.emit("childAdded", s, this, t), s.emit("added", this), s;
  },
  swapChildren(s, t) {
    if (s === t)
      return;
    const e = this.getChildIndex(s), i = this.getChildIndex(t);
    this.children[e] = t, this.children[i] = s;
    const r = this.renderGroup || this.parentRenderGroup;
    r && (r.structureDidChange = !0), this._didContainerChangeTick++;
  },
  removeFromParent() {
    this.parent?.removeChild(this);
  },
  reparentChild(...s) {
    return s.length === 1 ? this.reparentChildAt(s[0], this.children.length) : (s.forEach((t) => this.reparentChildAt(t, this.children.length)), s[0]);
  },
  reparentChildAt(s, t) {
    if (s.parent === this)
      return this.setChildIndex(s, t), s;
    const e = s.worldTransform.clone();
    s.removeFromParent(), this.addChildAt(s, t);
    const i = this.worldTransform.clone();
    return i.invert(), e.prepend(i), s.setFromMatrix(e), s;
  },
  replaceChild(s, t) {
    s.updateLocalTransform(), this.addChildAt(t, this.getChildIndex(s)), t.setFromMatrix(s.localTransform), t.updateLocalTransform(), this.removeChild(s);
  }
}, hd = {
  collectRenderables(s, t, e) {
    this.parentRenderLayer && this.parentRenderLayer !== e || this.globalDisplayStatus < 7 || !this.includeInBuild || (this.sortableChildren && this.sortChildren(), this.isSimple ? this.collectRenderablesSimple(s, t, e) : this.renderGroup ? t.renderPipes.renderGroup.addRenderGroup(this.renderGroup, s) : this.collectRenderablesWithEffects(s, t, e));
  },
  collectRenderablesSimple(s, t, e) {
    const i = this.children, r = i.length;
    for (let n = 0; n < r; n++)
      i[n].collectRenderables(s, t, e);
  },
  collectRenderablesWithEffects(s, t, e) {
    const { renderPipes: i } = t;
    for (let r = 0; r < this.effects.length; r++) {
      const n = this.effects[r];
      i[n.pipe].push(n, this, s);
    }
    this.collectRenderablesSimple(s, t, e);
    for (let r = this.effects.length - 1; r >= 0; r--) {
      const n = this.effects[r];
      i[n.pipe].pop(n, this, s);
    }
  }
};
class La {
  constructor() {
    this.pipe = "filter", this.priority = 1;
  }
  destroy() {
    for (let t = 0; t < this.filters.length; t++)
      this.filters[t].destroy();
    this.filters = null, this.filterArea = null;
  }
}
class ld {
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
        return Yt.get(i.maskClass, t);
    }
    return t;
  }
  returnMaskEffect(t) {
    Yt.return(t);
  }
}
const an = new ld();
_t.handleByList(L.MaskEffect, an._effectClasses);
const cd = {
  _maskEffect: null,
  _maskOptions: {
    inverse: !1
  },
  _filterEffect: null,
  effects: [],
  _markStructureAsChanged() {
    const s = this.renderGroup || this.parentRenderGroup;
    s && (s.structureDidChange = !0);
  },
  addEffect(s) {
    this.effects.indexOf(s) === -1 && (this.effects.push(s), this.effects.sort((e, i) => e.priority - i.priority), this._markStructureAsChanged(), this._updateIsSimple());
  },
  removeEffect(s) {
    const t = this.effects.indexOf(s);
    t !== -1 && (this.effects.splice(t, 1), this._markStructureAsChanged(), this._updateIsSimple());
  },
  set mask(s) {
    const t = this._maskEffect;
    t?.mask !== s && (t && (this.removeEffect(t), an.returnMaskEffect(t), this._maskEffect = null), s != null && (this._maskEffect = an.getMaskEffect(s), this.addEffect(this._maskEffect)));
  },
  get mask() {
    return this._maskEffect?.mask;
  },
  setMask(s) {
    this._maskOptions = {
      ...this._maskOptions,
      ...s
    }, s.mask && (this.mask = s.mask), this._markStructureAsChanged();
  },
  set filters(s) {
    !Array.isArray(s) && s && (s = [s]);
    const t = this._filterEffect || (this._filterEffect = new La());
    s = s;
    const e = s?.length > 0, i = t.filters?.length > 0, r = e !== i;
    s = Array.isArray(s) ? s.slice(0) : s, t.filters = Object.freeze(s), r && (e ? this.addEffect(t) : (this.removeEffect(t), t.filters = s ?? null));
  },
  get filters() {
    return this._filterEffect?.filters;
  },
  set filterArea(s) {
    this._filterEffect || (this._filterEffect = new La()), this._filterEffect.filterArea = s;
  },
  get filterArea() {
    return this._filterEffect?.filterArea;
  }
}, ud = {
  label: null,
  get name() {
    return G(j, "Container.name property has been removed, use Container.label instead"), this.label;
  },
  set name(s) {
    G(j, "Container.name property has been removed, use Container.label instead"), this.label = s;
  },
  getChildByName(s, t = !1) {
    return this.getChildByLabel(s, t);
  },
  getChildByLabel(s, t = !1) {
    const e = this.children;
    for (let i = 0; i < e.length; i++) {
      const r = e[i];
      if (r.label === s || s instanceof RegExp && s.test(r.label))
        return r;
    }
    if (t)
      for (let i = 0; i < e.length; i++) {
        const n = e[i].getChildByLabel(s, !0);
        if (n)
          return n;
      }
    return null;
  },
  getChildrenByLabel(s, t = !1, e = []) {
    const i = this.children;
    for (let r = 0; r < i.length; r++) {
      const n = i[r];
      (n.label === s || s instanceof RegExp && s.test(n.label)) && e.push(n);
    }
    if (t)
      for (let r = 0; r < i.length; r++)
        i[r].getChildrenByLabel(s, !0, e);
    return e;
  }
}, At = Yt.getPool(U), ce = Yt.getPool(jt), dd = new U(), fd = {
  getFastGlobalBounds(s, t) {
    t || (t = new jt()), t.clear(), this._getGlobalBoundsRecursive(!!s, t, this.parentRenderLayer), t.isValid || t.set(0, 0, 0, 0);
    const e = this.renderGroup || this.parentRenderGroup;
    return t.applyMatrix(e.worldTransform), t;
  },
  _getGlobalBoundsRecursive(s, t, e) {
    let i = t;
    if (s && this.parentRenderLayer && this.parentRenderLayer !== e || this.localDisplayStatus !== 7 || !this.measurable)
      return;
    const r = !!this.effects.length;
    if ((this.renderGroup || r) && (i = ce.get().clear()), this.boundsArea)
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
        n[a]._getGlobalBoundsRecursive(s, i, e);
    }
    if (r) {
      let n = !1;
      const a = this.renderGroup || this.parentRenderGroup;
      for (let o = 0; o < this.effects.length; o++)
        this.effects[o].addBounds && (n || (n = !0, i.applyMatrix(a.worldTransform)), this.effects[o].addBounds(i, !0));
      n && i.applyMatrix(a.worldTransform.copyTo(dd).invert()), t.addBounds(i), ce.return(i);
    } else this.renderGroup && (t.addBounds(i, this.relativeGroupTransform), ce.return(i));
  }
};
function Yh(s, t, e) {
  e.clear();
  let i, r;
  return s.parent ? t ? i = s.parent.worldTransform : (r = At.get().identity(), i = Yn(s, r)) : i = U.IDENTITY, $h(s, e, i, t), r && At.return(r), e.isValid || e.set(0, 0, 0, 0), e;
}
function $h(s, t, e, i) {
  if (!s.visible || !s.measurable)
    return;
  let r;
  i ? r = s.worldTransform : (s.updateLocalTransform(), r = At.get(), r.appendFrom(s.localTransform, e));
  const n = t, a = !!s.effects.length;
  if (a && (t = ce.get().clear()), s.boundsArea)
    t.addRect(s.boundsArea, r);
  else {
    const o = s.bounds;
    o && !o.isEmpty() && (t.matrix = r, t.addBounds(o));
    for (let h = 0; h < s.children.length; h++)
      $h(s.children[h], t, r, i);
  }
  if (a) {
    for (let o = 0; o < s.effects.length; o++)
      s.effects[o].addBounds?.(t);
    n.addBounds(t, U.IDENTITY), ce.return(t);
  }
  i || At.return(r);
}
function Yn(s, t) {
  const e = s.parent;
  return e && (Yn(e, t), e.updateLocalTransform(), t.append(e.localTransform)), t;
}
function Xh(s, t) {
  if (s === 16777215 || !t)
    return t;
  if (t === 16777215 || !s)
    return s;
  const e = s >> 16 & 255, i = s >> 8 & 255, r = s & 255, n = t >> 16 & 255, a = t >> 8 & 255, o = t & 255, h = e * n / 255 | 0, l = i * a / 255 | 0, c = r * o / 255 | 0;
  return (h << 16) + (l << 8) + c;
}
const Da = 16777215;
function za(s, t) {
  return s === Da ? t : t === Da ? s : Xh(s, t);
}
function Cs(s) {
  return ((s & 255) << 16) + (s & 65280) + (s >> 16 & 255);
}
const pd = {
  getGlobalAlpha(s) {
    if (s)
      return this.renderGroup ? this.renderGroup.worldAlpha : this.parentRenderGroup ? this.parentRenderGroup.worldAlpha * this.alpha : this.alpha;
    let t = this.alpha, e = this.parent;
    for (; e; )
      t *= e.alpha, e = e.parent;
    return t;
  },
  getGlobalTransform(s = new U(), t) {
    if (t)
      return s.copyFrom(this.worldTransform);
    this.updateLocalTransform();
    const e = Yn(this, At.get().identity());
    return s.appendFrom(this.localTransform, e), At.return(e), s;
  },
  getGlobalTint(s) {
    if (s)
      return this.renderGroup ? Cs(this.renderGroup.worldColor) : this.parentRenderGroup ? Cs(
        za(this.localColor, this.parentRenderGroup.worldColor)
      ) : this.tint;
    let t = this.localColor, e = this.parent;
    for (; e; )
      t = za(t, e.localColor), e = e.parent;
    return Cs(t);
  }
};
function jh(s, t, e) {
  return t.clear(), e || (e = U.IDENTITY), Hh(s, t, e, s, !0), t.isValid || t.set(0, 0, 0, 0), t;
}
function Hh(s, t, e, i, r) {
  let n;
  if (r)
    n = At.get(), n = e.copyTo(n);
  else {
    if (!s.visible || !s.measurable)
      return;
    s.updateLocalTransform();
    const h = s.localTransform;
    n = At.get(), n.appendFrom(h, e);
  }
  const a = t, o = !!s.effects.length;
  if (o && (t = ce.get().clear()), s.boundsArea)
    t.addRect(s.boundsArea, n);
  else {
    s.renderPipeId && (t.matrix = n, t.addBounds(s.bounds));
    const h = s.children;
    for (let l = 0; l < h.length; l++)
      Hh(h[l], t, n, i, !1);
  }
  if (o) {
    for (let h = 0; h < s.effects.length; h++)
      s.effects[h].addLocalBounds?.(t, i);
    a.addBounds(t, U.IDENTITY), ce.return(t);
  }
  At.return(n);
}
function qh(s, t) {
  const e = s.children;
  for (let i = 0; i < e.length; i++) {
    const r = e[i], n = r.uid, a = (r._didViewChangeTick & 65535) << 16 | r._didContainerChangeTick & 65535, o = t.index;
    (t.data[o] !== n || t.data[o + 1] !== a) && (t.data[t.index] = n, t.data[t.index + 1] = a, t.didChange = !0), t.index = o + 2, r.children.length && qh(r, t);
  }
  return t.didChange;
}
const md = new U(), gd = {
  _localBoundsCacheId: -1,
  _localBoundsCacheData: null,
  _setWidth(s, t) {
    const e = Math.sign(this.scale.x) || 1;
    t !== 0 ? this.scale.x = s / t * e : this.scale.x = e;
  },
  _setHeight(s, t) {
    const e = Math.sign(this.scale.y) || 1;
    t !== 0 ? this.scale.y = s / t * e : this.scale.y = e;
  },
  getLocalBounds() {
    this._localBoundsCacheData || (this._localBoundsCacheData = {
      data: [],
      index: 1,
      didChange: !1,
      localBounds: new jt()
    });
    const s = this._localBoundsCacheData;
    return s.index = 1, s.didChange = !1, s.data[0] !== this._didViewChangeTick && (s.didChange = !0, s.data[0] = this._didViewChangeTick), qh(this, s), s.didChange && jh(this, s.localBounds, md), s.localBounds;
  },
  getBounds(s, t) {
    return Yh(this, s, t || new jt());
  }
}, _d = {
  _onRender: null,
  set onRender(s) {
    const t = this.renderGroup || this.parentRenderGroup;
    if (!s) {
      this._onRender && t?.removeOnRender(this), this._onRender = null;
      return;
    }
    this._onRender || t?.addOnRender(this), this._onRender = s;
  },
  get onRender() {
    return this._onRender;
  }
}, xd = {
  _zIndex: 0,
  sortDirty: !1,
  sortableChildren: !1,
  get zIndex() {
    return this._zIndex;
  },
  set zIndex(s) {
    this._zIndex !== s && (this._zIndex = s, this.depthOfChildModified());
  },
  depthOfChildModified() {
    this.parent && (this.parent.sortableChildren = !0, this.parent.sortDirty = !0), this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0);
  },
  sortChildren() {
    this.sortDirty && (this.sortDirty = !1, this.children.sort(yd));
  }
};
function yd(s, t) {
  return s._zIndex - t._zIndex;
}
const bd = {
  getGlobalPosition(s = new bt(), t = !1) {
    return this.parent ? this.parent.toGlobal(this._position, s, t) : (s.x = this._position.x, s.y = this._position.y), s;
  },
  toGlobal(s, t, e = !1) {
    const i = this.getGlobalTransform(At.get(), e);
    return t = i.apply(s, t), At.return(i), t;
  },
  toLocal(s, t, e, i) {
    t && (s = t.toGlobal(s, e, i));
    const r = this.getGlobalTransform(At.get(), i);
    return e = r.applyInverse(s, e), At.return(r), e;
  }
};
class Kh {
  constructor() {
    this.uid = lt("instructionSet"), this.instructions = [], this.instructionSize = 0, this.renderables = [], this.gcTick = 0;
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
let wd = 0;
class vd {
  /**
   * @param textureOptions - options that will be passed to BaseRenderTexture constructor
   * @param {SCALE_MODE} [textureOptions.scaleMode] - See {@link SCALE_MODE} for possible values.
   */
  constructor(t) {
    this._poolKeyHash = /* @__PURE__ */ Object.create(null), this._texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, this.textureStyle = new zs(this.textureOptions);
  }
  /**
   * Creates texture with params that were specified in pool constructor.
   * @param pixelWidth - Width of texture in pixels.
   * @param pixelHeight - Height of texture in pixels.
   * @param antialias
   */
  createTexture(t, e, i) {
    const r = new qt({
      ...this.textureOptions,
      width: t,
      height: e,
      resolution: 1,
      antialias: i,
      autoGarbageCollect: !1
    });
    return new V({
      source: r,
      label: `texturePool_${wd++}`
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
  getOptimalTexture(t, e, i = 1, r) {
    let n = Math.ceil(t * i - 1e-6), a = Math.ceil(e * i - 1e-6);
    n = Ds(n), a = Ds(a);
    const o = (n << 17) + (a << 1) + (r ? 1 : 0);
    this._texturePool[o] || (this._texturePool[o] = []);
    let h = this._texturePool[o].pop();
    return h || (h = this.createTexture(n, a, r)), h.source._resolution = i, h.source.width = n / i, h.source.height = a / i, h.source.pixelWidth = n, h.source.pixelHeight = a, h.frame.x = 0, h.frame.y = 0, h.frame.width = t, h.frame.height = e, h.updateUvs(), this._poolKeyHash[h.uid] = o, h;
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
          for (let r = 0; r < i.length; r++)
            i[r].destroy(!0);
      }
    this._texturePool = {};
  }
}
const pi = new vd();
ns.register(pi);
class Ad {
  constructor() {
    this.renderPipeId = "renderGroup", this.root = null, this.canBundle = !1, this.renderGroupParent = null, this.renderGroupChildren = [], this.worldTransform = new U(), this.worldColorAlpha = 4294967295, this.worldColor = 16777215, this.worldAlpha = 1, this.childrenToUpdate = /* @__PURE__ */ Object.create(null), this.updateTick = 0, this.gcTick = 0, this.childrenRenderablesToUpdate = { list: [], index: 0 }, this.structureDidChange = !0, this.instructionSet = new Kh(), this._onRenderContainers = [], this.textureNeedsUpdate = !0, this.isCachedAsTexture = !1, this._matrixDirty = 7;
  }
  init(t) {
    this.root = t, t._onRender && this.addOnRender(t), t.didChange = !0;
    const e = t.children;
    for (let i = 0; i < e.length; i++) {
      const r = e[i];
      r._updateFlags = 15, this.addChild(r);
    }
  }
  enableCacheAsTexture(t = {}) {
    this.textureOptions = t, this.isCachedAsTexture = !0, this.textureNeedsUpdate = !0;
  }
  disableCacheAsTexture() {
    this.isCachedAsTexture = !1, this.texture && (pi.returnTexture(this.texture, !0), this.texture = null);
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
    for (let r = 0; r < i.length; r++)
      this._getChildren(i[r], e);
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
    return this._matrixDirty & 1 ? (this._matrixDirty &= -2, this._inverseWorldTransform || (this._inverseWorldTransform = new U()), this._inverseWorldTransform.copyFrom(this.worldTransform).invert()) : this._inverseWorldTransform;
  }
  /**
   * Returns the inverse of the texture offset transform matrix.
   * @returns {Matrix} The inverse of the texture offset transform matrix.
   */
  get textureOffsetInverseTransform() {
    return this._matrixDirty & 2 ? (this._matrixDirty &= -3, this._textureOffsetInverseTransform || (this._textureOffsetInverseTransform = new U()), this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(
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
    return t ? (this._inverseParentTextureTransform || (this._inverseParentTextureTransform = new U()), this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(t.inverseWorldTransform).translate(
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
function Sd(s, t, e = {}) {
  for (const i in t)
    !e[i] && t[i] !== void 0 && (s[i] = t[i]);
}
const fr = new xt(null), us = new xt(null), pr = new xt(null, 1, 1), ds = new xt(null), Ga = 1, Td = 2, mr = 4;
class re extends Ht {
  constructor(t = {}) {
    super(), this.uid = lt("renderable"), this._updateFlags = 15, this.renderGroup = null, this.parentRenderGroup = null, this.parentRenderGroupIndex = 0, this.didChange = !1, this.didViewUpdate = !1, this.relativeRenderGroupDepth = 0, this.children = [], this.parent = null, this.includeInBuild = !0, this.measurable = !0, this.isSimple = !0, this.parentRenderLayer = null, this.updateTick = -1, this.localTransform = new U(), this.relativeGroupTransform = new U(), this.groupTransform = this.relativeGroupTransform, this.destroyed = !1, this._position = new xt(this, 0, 0), this._scale = pr, this._pivot = us, this._origin = ds, this._skew = fr, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._rotation = 0, this.localColor = 16777215, this.localAlpha = 1, this.groupAlpha = 1, this.groupColor = 16777215, this.groupColorAlpha = 4294967295, this.localBlendMode = "inherit", this.groupBlendMode = "normal", this.localDisplayStatus = 7, this.globalDisplayStatus = 7, this._didContainerChangeTick = 0, this._didViewChangeTick = 0, this._didLocalTransformChangeId = -1, this.effects = [], Sd(this, t, {
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
    G("8.8.0", "Container.mixin is deprecated, please use extensions.mixin instead."), _t.mixin(re, t);
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
    if (this.allowChildren || G(j, "addChild: Only Containers will be allowed to add children in v8.0.0"), t.length > 1) {
      for (let r = 0; r < t.length; r++)
        this.addChild(t[r]);
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
      for (let r = 0; r < t.length; r++)
        this.removeChild(t[r]);
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
    t?.removeChild(this), this.renderGroup = Yt.get(Ad, this), this.groupTransform = U.IDENTITY, t?.addChild(this), this._updateIsSimple();
  }
  /**
   * This will disable the render group for this container.
   * @advanced
   */
  disableRenderGroup() {
    if (!this.renderGroup)
      return;
    const t = this.parentRenderGroup;
    t?.removeChild(this), Yt.return(this.renderGroup), this.renderGroup = null, this.groupTransform = this.relativeGroupTransform, t?.addChild(this), this._updateIsSimple();
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
    return this._worldTransform || (this._worldTransform = new U()), this.renderGroup ? this._worldTransform.copyFrom(this.renderGroup.worldTransform) : this.parentRenderGroup && this._worldTransform.appendFrom(this.relativeGroupTransform, this.parentRenderGroup.worldTransform), this._worldTransform;
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
    return this.rotation * zu;
  }
  set angle(t) {
    this.rotation = t * Gu;
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
    return this._pivot === us && (this._pivot = new xt(this, 0, 0)), this._pivot;
  }
  set pivot(t) {
    this._pivot === us && (this._pivot = new xt(this, 0, 0), this._origin !== ds && Q("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")), typeof t == "number" ? this._pivot.set(t) : this._pivot.copyFrom(t);
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
    return this._skew === fr && (this._skew = new xt(this, 0, 0)), this._skew;
  }
  set skew(t) {
    this._skew === fr && (this._skew = new xt(this, 0, 0)), this._skew.copyFrom(t);
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
    return this._scale === pr && (this._scale = new xt(this, 1, 1)), this._scale;
  }
  set scale(t) {
    this._scale === pr && (this._scale = new xt(this, 0, 0)), typeof t == "string" && (t = parseFloat(t)), typeof t == "number" ? this._scale.set(t) : this._scale.copyFrom(t);
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
    return this._origin === ds && (this._origin = new xt(this, 0, 0)), this._origin;
  }
  set origin(t) {
    this._origin === ds && (this._origin = new xt(this, 0, 0), this._pivot !== us && Q("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")), typeof t == "number" ? this._origin.set(t) : this._origin.copyFrom(t);
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
    const e = this.localTransform, i = this._scale, r = this._pivot, n = this._origin, a = this._position, o = i._x, h = i._y, l = r._x, c = r._y, u = -n._x, f = -n._y;
    e.a = this._cx * o, e.b = this._sx * o, e.c = this._cy * h, e.d = this._sy * h, e.tx = a._x - (l * e.a + c * e.c) + (u * e.a + f * e.c) - u, e.ty = a._y - (l * e.b + c * e.d) + (u * e.b + f * e.d) - f;
  }
  // / ///// color related stuff
  set alpha(t) {
    t !== this.localAlpha && (this.localAlpha = t, this._updateFlags |= Ga, this._onUpdate());
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
    const i = nt.shared.setValue(t ?? 16777215).toBgrNumber();
    i !== this.localColor && (this.localColor = i, this._updateFlags |= Ga, this._onUpdate());
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
    return Cs(this.localColor);
  }
  // / //////////////// blend related stuff
  set blendMode(t) {
    this.localBlendMode !== t && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= Td, this.localBlendMode = t, this._onUpdate());
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
    (this.localDisplayStatus & 2) !== e && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= mr, this.localDisplayStatus ^= 2, this._onUpdate());
  }
  /** @ignore */
  get culled() {
    return !(this.localDisplayStatus & 4);
  }
  /** @ignore */
  set culled(t) {
    const e = t ? 0 : 4;
    (this.localDisplayStatus & 4) !== e && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= mr, this.localDisplayStatus ^= 4, this._onUpdate());
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
    (this.localDisplayStatus & 1) !== e && (this._updateFlags |= mr, this.localDisplayStatus ^= 1, this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._onUpdate());
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
      for (let r = 0; r < e.length; ++r)
        e[r].destroy(t);
    this.renderGroup?.destroy(), this.renderGroup = null;
  }
}
_t.mixin(
  re,
  od,
  fd,
  bd,
  _d,
  gd,
  cd,
  ud,
  xd,
  id,
  nd,
  pd,
  hd
);
class Zh extends re {
  constructor(t) {
    super(t), this.canBundle = !0, this.allowChildren = !1, this._roundPixels = 0, this._lastUsed = -1, this._gpuData = /* @__PURE__ */ Object.create(null), this.autoGarbageCollect = !0, this._gcLastUsed = -1, this._bounds = new jt(0, 1, 0, 0), this._boundsDirty = !0, this.autoGarbageCollect = t.autoGarbageCollect ?? !0;
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
    const e = this.bounds, { x: i, y: r } = t;
    return i >= e.minX && i <= e.maxX && r >= e.minY && r <= e.maxY;
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
    const { renderPipes: r } = e;
    r.blendMode.pushBlendMode(this, this.groupBlendMode, t), r[this.renderPipeId].addRenderable(this, t), this.didViewUpdate = !1;
    const a = this.children, o = a.length;
    for (let h = 0; h < o; h++)
      a[h].collectRenderables(t, e, i);
    r.blendMode.popBlendMode(t);
  }
}
class ee extends Zh {
  /**
   * @param options - The options for creating the sprite.
   */
  constructor(t = V.EMPTY) {
    t instanceof V && (t = { texture: t });
    const { texture: e = V.EMPTY, anchor: i, roundPixels: r, width: n, height: a, ...o } = t;
    super({
      label: "Sprite",
      ...o
    }), this.renderPipeId = "sprite", this.batched = !0, this._visualBounds = { minX: 0, maxX: 1, minY: 0, maxY: 0 }, this._anchor = new xt(
      {
        _onUpdate: () => {
          this.onViewUpdate();
        }
      }
    ), i ? this.anchor = i : e.defaultAnchor && (this.anchor = e.defaultAnchor), this.texture = e, this.allowChildren = !1, this.roundPixels = r ?? !1, n !== void 0 && (this.width = n), a !== void 0 && (this.height = a);
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
    return t instanceof V ? new ee(t) : new ee(V.from(t, e));
  }
  set texture(t) {
    t || (t = V.EMPTY);
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
    return Xu(this._visualBounds, this._anchor, this._texture), this._visualBounds;
  }
  /**
   * @deprecated
   * @ignore
   */
  get sourceBounds() {
    return G("8.6.1", "Sprite.sourceBounds is deprecated, use visualBounds instead."), this.visualBounds;
  }
  /** @private */
  updateBounds() {
    const t = this._anchor, e = this._texture, i = this._bounds, { width: r, height: n } = e.orig;
    i.minX = -t._x * r, i.maxX = i.minX + r, i.minY = -t._y * n, i.maxY = i.minY + n;
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
const Cd = new jt();
function Qh(s, t, e) {
  const i = Cd;
  s.measurable = !0, Yh(s, e, i), t.addBoundsMask(i), s.measurable = !1;
}
function Jh(s, t, e) {
  const i = ce.get();
  s.measurable = !0;
  const r = At.get().identity(), n = tl(s, e, r);
  jh(s, i, n), s.measurable = !1, t.addBoundsMask(i), At.return(r), ce.return(i);
}
function tl(s, t, e) {
  return s ? (s !== t && (tl(s.parent, t, e), s.updateLocalTransform(), e.append(s.localTransform)), e) : (Q("Mask bounds, renderable is not inside the root container"), e);
}
class el {
  constructor(t) {
    this.priority = 0, this.inverse = !1, this.pipe = "alphaMask", t?.mask && this.init(t.mask);
  }
  init(t) {
    this.mask = t, this.renderMaskToTexture = !(t instanceof ee), this.mask.renderable = this.renderMaskToTexture, this.mask.includeInBuild = !this.renderMaskToTexture, this.mask.measurable = !1;
  }
  reset() {
    this.mask !== null && (this.mask.measurable = !0, this.mask = null);
  }
  addBounds(t, e) {
    this.inverse || Qh(this.mask, t, e);
  }
  addLocalBounds(t, e) {
    Jh(this.mask, t, e);
  }
  containsPoint(t, e) {
    const i = this.mask;
    return e(i, t);
  }
  destroy() {
    this.reset();
  }
  static test(t) {
    return t instanceof ee;
  }
}
el.extension = L.MaskEffect;
class il {
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
il.extension = L.MaskEffect;
class sl {
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
    Qh(this.mask, t, e);
  }
  addLocalBounds(t, e) {
    Jh(this.mask, t, e);
  }
  containsPoint(t, e) {
    const i = this.mask;
    return e(i, t);
  }
  destroy() {
    this.reset();
  }
  static test(t) {
    return t instanceof re;
  }
}
sl.extension = L.MaskEffect;
const Pd = {
  createCanvas: (s, t) => {
    const e = document.createElement("canvas");
    return e.width = s, e.height = t, e;
  },
  createImage: () => new Image(),
  getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
  getWebGLRenderingContext: () => WebGLRenderingContext,
  getNavigator: () => navigator,
  getBaseUrl: () => document.baseURI ?? window.location.href,
  getFontFaceSet: () => document.fonts,
  fetch: (s, t) => fetch(s, t),
  parseXML: (s) => new DOMParser().parseFromString(s, "text/xml")
};
let Ua = Pd;
const J = {
  /**
   * Returns the current adapter.
   * @returns {environment.Adapter} The current adapter.
   */
  get() {
    return Ua;
  },
  /**
   * Sets the current adapter.
   * @param adapter - The new adapter.
   */
  set(s) {
    Ua = s;
  }
};
class rl extends qt {
  constructor(t) {
    t.resource || (t.resource = J.get().createCanvas()), t.width || (t.width = t.resource.width, t.autoDensity || (t.width /= t.resolution)), t.height || (t.height = t.resource.height, t.autoDensity || (t.height /= t.resolution)), super(t), this.uploadMethodId = "image", this.autoDensity = t.autoDensity, this.resizeCanvas(), this.transparent = !!t.transparent;
  }
  resizeCanvas() {
    this.autoDensity && "style" in this.resource && (this.resource.style.width = `${this.width}px`, this.resource.style.height = `${this.height}px`), (this.resource.width !== this.pixelWidth || this.resource.height !== this.pixelHeight) && (this.resource.width = this.pixelWidth, this.resource.height = this.pixelHeight);
  }
  resize(t = this.width, e = this.height, i = this._resolution) {
    const r = super.resize(t, e, i);
    return r && this.resizeCanvas(), r;
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
rl.extension = L.TextureSource;
class Xe extends qt {
  constructor(t) {
    super(t), this.uploadMethodId = "image", this.autoGarbageCollect = !0;
  }
  static test(t) {
    return globalThis.HTMLImageElement && t instanceof HTMLImageElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap || globalThis.VideoFrame && t instanceof VideoFrame;
  }
}
Xe.extension = L.TextureSource;
var on = /* @__PURE__ */ ((s) => (s[s.INTERACTION = 50] = "INTERACTION", s[s.HIGH = 25] = "HIGH", s[s.NORMAL = 0] = "NORMAL", s[s.LOW = -25] = "LOW", s[s.UTILITY = -50] = "UTILITY", s))(on || {});
class gr {
  /**
   * Constructor
   * @private
   * @param fn - The listener function to be added for one update
   * @param context - The listener context
   * @param priority - The priority for emitting
   * @param once - If the handler should fire once
   */
  constructor(t, e = null, i = 0, r = !1) {
    this.next = null, this.previous = null, this._destroyed = !1, this._fn = t, this._context = e, this.priority = i, this._once = r;
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
const nl = class Et {
  constructor() {
    this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new gr(null, null, 1 / 0), this.deltaMS = 1 / Et.targetFPMS, this.elapsedMS = 1 / Et.targetFPMS, this._tick = (t) => {
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
  add(t, e, i = on.NORMAL) {
    return this._addListener(new gr(t, e, i));
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
  addOnce(t, e, i = on.NORMAL) {
    return this._addListener(new gr(t, e, i, !0));
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
      this.deltaMS = e, this.deltaTime = this.deltaMS * Et.targetFPMS;
      const i = this._head;
      let r = i.next;
      for (; r; )
        r = r.emit(this);
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
    const e = Math.min(this.maxFPS, t), i = Math.min(Math.max(0, e) / 1e3, Et.targetFPMS);
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
    if (!Et._shared) {
      const t = Et._shared = new Et();
      t.autoStart = !0, t._protected = !0;
    }
    return Et._shared;
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
    if (!Et._system) {
      const t = Et._system = new Et();
      t.autoStart = !0, t._protected = !0;
    }
    return Et._system;
  }
};
nl.targetFPMS = 0.06;
let fs = nl, _r;
async function al() {
  return _r ?? (_r = (async () => {
    const t = J.get().createCanvas(1, 1).getContext("webgl");
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
    const r = t.createFramebuffer();
    t.bindFramebuffer(t.FRAMEBUFFER, r), t.framebufferTexture2D(
      t.FRAMEBUFFER,
      t.COLOR_ATTACHMENT0,
      t.TEXTURE_2D,
      i,
      0
    ), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e);
    const n = new Uint8Array(4);
    return t.readPixels(0, 0, 1, 1, t.RGBA, t.UNSIGNED_BYTE, n), t.deleteFramebuffer(r), t.deleteTexture(i), t.getExtension("WEBGL_lose_context")?.loseContext(), n[0] <= n[3] ? "premultiplied-alpha" : "premultiply-alpha-on-upload";
  })()), _r;
}
const Xs = class ol extends qt {
  constructor(t) {
    super(t), this.isReady = !1, this.uploadMethodId = "video", t = {
      ...ol.defaultOptions,
      ...t
    }, this._autoUpdate = !0, this._isConnectedToTicker = !1, this._updateFPS = t.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = t.autoPlay !== !1, this.alphaMode = t.alphaMode ?? "premultiply-alpha-on-upload", this._videoFrameRequestCallback = this._videoFrameRequestCallback.bind(this), this._videoFrameRequestCallbackHandle = null, this._load = null, this._resolve = null, this._reject = null, this._onCanPlay = this._onCanPlay.bind(this), this._onCanPlayThrough = this._onCanPlayThrough.bind(this), this._onError = this._onError.bind(this), this._onPlayStart = this._onPlayStart.bind(this), this._onPlayStop = this._onPlayStop.bind(this), this._onSeeked = this._onSeeked.bind(this), t.autoLoad !== !1 && this.load();
  }
  /** Update the video frame if the source is not destroyed and meets certain conditions. */
  updateFrame() {
    if (!this.destroyed) {
      if (this._updateFPS) {
        const t = fs.shared.elapsedMS * this.resource.playbackRate;
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
    return (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0), t.addEventListener("play", this._onPlayStart), t.addEventListener("pause", this._onPlayStop), t.addEventListener("seeked", this._onSeeked), this._isSourceReady() ? this._mediaReady() : (e.preload || t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlayThrough), t.addEventListener("error", this._onError, !0)), this.alphaMode = await al(), this._load = new Promise((i, r) => {
      this.isValid ? i(this) : (this._resolve = i, this._reject = r, e.preloadTimeoutMs !== void 0 && (this._preloadTimeout = setTimeout(() => {
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
    this._autoUpdate && this._isSourcePlaying() ? !this._updateFPS && this.resource.requestVideoFrameCallback ? (this._isConnectedToTicker && (fs.shared.remove(this.updateFrame, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0), this._videoFrameRequestCallbackHandle === null && (this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(
      this._videoFrameRequestCallback
    ))) : (this._videoFrameRequestCallbackHandle !== null && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker || (fs.shared.add(this.updateFrame, this), this._isConnectedToTicker = !0, this._msToNextUpdate = 0)) : (this._videoFrameRequestCallbackHandle !== null && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker && (fs.shared.remove(this.updateFrame, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0));
  }
  static test(t) {
    return globalThis.HTMLVideoElement && t instanceof HTMLVideoElement;
  }
};
Xs.extension = L.TextureSource;
Xs.defaultOptions = {
  ...qt.defaultOptions,
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
Xs.MIME_TYPES = {
  ogv: "video/ogg",
  mov: "video/quicktime",
  m4v: "video/mp4"
};
let Ui = Xs;
const Xt = (s, t, e = !1) => (Array.isArray(s) || (s = [s]), t ? s.map((i) => typeof i == "string" || e ? t(i) : i) : s);
class Md {
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
    return e || Q(`[Assets] Asset id ${t} was not found in the Cache`), e;
  }
  /**
   * Set a value by key or keys name
   * @param key - The key or keys to set
   * @param value - The value to store in the cache or from which cacheable assets will be derived.
   */
  set(t, e) {
    const i = Xt(t);
    let r;
    for (let h = 0; h < this.parsers.length; h++) {
      const l = this.parsers[h];
      if (l.test(e)) {
        r = l.getCacheableAssets(i, e);
        break;
      }
    }
    const n = new Map(Object.entries(r || {}));
    r || i.forEach((h) => {
      n.set(h, e);
    });
    const a = [...n.keys()], o = {
      cacheKeys: a,
      keys: i
    };
    i.forEach((h) => {
      this._cacheMap.set(h, o);
    }), a.forEach((h) => {
      const l = r ? r[h] : e;
      this._cache.has(h) && this._cache.get(h) !== l && Q("[Cache] already has key:", h), this._cache.set(h, n.get(h));
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
      Q(`[Assets] Asset id ${t} was not found in the Cache`);
      return;
    }
    const e = this._cacheMap.get(t);
    e.cacheKeys.forEach((r) => {
      this._cache.delete(r);
    }), e.keys.forEach((r) => {
      this._cacheMap.delete(r);
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
const Z = new Md(), hn = [];
_t.handleByList(L.TextureSource, hn);
function hl(s = {}) {
  const t = s && s.resource, e = t ? s.resource : s, i = t ? s : { resource: s };
  for (let r = 0; r < hn.length; r++) {
    const n = hn[r];
    if (n.test(e))
      return new n(i);
  }
  throw new Error(`Could not find a source type for resource: ${i.resource}`);
}
function kd(s = {}, t = !1) {
  const e = s && s.resource, i = e ? s.resource : s, r = e ? s : { resource: s };
  if (!t && Z.has(i))
    return Z.get(i);
  const n = new V({ source: hl(r) });
  return n.on("destroy", () => {
    Z.has(i) && Z.remove(i);
  }), t || Z.set(i, n), n;
}
function Ed(s, t = !1) {
  return typeof s == "string" ? Z.get(s) : s instanceof qt ? new V({ source: s }) : kd(s, t);
}
V.from = Ed;
qt.from = hl;
_t.add(el, il, sl, Ui, Xe, rl, Vn);
var Ce = /* @__PURE__ */ ((s) => (s[s.Low = 0] = "Low", s[s.Normal = 1] = "Normal", s[s.High = 2] = "High", s))(Ce || {});
function $t(s) {
  if (typeof s != "string")
    throw new TypeError(`Path must be a string. Received ${JSON.stringify(s)}`);
}
function Ai(s) {
  return s.split("?")[0].split("#")[0];
}
function Rd(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Fd(s, t, e) {
  return s.replace(new RegExp(Rd(t), "g"), e);
}
function Id(s, t) {
  let e = "", i = 0, r = -1, n = 0, a = -1;
  for (let o = 0; o <= s.length; ++o) {
    if (o < s.length)
      a = s.charCodeAt(o);
    else {
      if (a === 47)
        break;
      a = 47;
    }
    if (a === 47) {
      if (!(r === o - 1 || n === 1)) if (r !== o - 1 && n === 2) {
        if (e.length < 2 || i !== 2 || e.charCodeAt(e.length - 1) !== 46 || e.charCodeAt(e.length - 2) !== 46) {
          if (e.length > 2) {
            const h = e.lastIndexOf("/");
            if (h !== e.length - 1) {
              h === -1 ? (e = "", i = 0) : (e = e.slice(0, h), i = e.length - 1 - e.lastIndexOf("/")), r = o, n = 0;
              continue;
            }
          } else if (e.length === 2 || e.length === 1) {
            e = "", i = 0, r = o, n = 0;
            continue;
          }
        }
      } else
        e.length > 0 ? e += `/${s.slice(r + 1, o)}` : e = s.slice(r + 1, o), i = o - r - 1;
      r = o, n = 0;
    } else a === 46 && n !== -1 ? ++n : n = -1;
  }
  return e;
}
const Lt = {
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
  toPosix(s) {
    return Fd(s, "\\", "/");
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
  isUrl(s) {
    return /^https?:/.test(this.toPosix(s));
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
  isDataUrl(s) {
    return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(s);
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
  isBlobUrl(s) {
    return s.startsWith("blob:");
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
  hasProtocol(s) {
    return /^[^/:]+:/.test(this.toPosix(s));
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
  getProtocol(s) {
    $t(s), s = this.toPosix(s);
    const t = /^file:\/\/\//.exec(s);
    if (t)
      return t[0];
    const e = /^[^/:]+:\/{0,2}/.exec(s);
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
  toAbsolute(s, t, e) {
    if ($t(s), this.isDataUrl(s) || this.isBlobUrl(s))
      return s;
    const i = Ai(this.toPosix(t ?? J.get().getBaseUrl())), r = Ai(this.toPosix(e ?? this.rootname(i)));
    return s = this.toPosix(s), s.startsWith("/") ? Lt.join(r, s.slice(1)) : this.isAbsolute(s) ? s : this.join(i, s);
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
  normalize(s) {
    if ($t(s), s.length === 0)
      return ".";
    if (this.isDataUrl(s) || this.isBlobUrl(s))
      return s;
    s = this.toPosix(s);
    let t = "";
    const e = s.startsWith("/");
    this.hasProtocol(s) && (t = this.rootname(s), s = s.slice(t.length));
    const i = s.endsWith("/");
    return s = Id(s), s.length > 0 && i && (s += "/"), e ? `/${s}` : t + s;
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
  isAbsolute(s) {
    return $t(s), s = this.toPosix(s), this.hasProtocol(s) ? !0 : s.startsWith("/");
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
  join(...s) {
    if (s.length === 0)
      return ".";
    let t;
    for (let e = 0; e < s.length; ++e) {
      const i = s[e];
      if ($t(i), i.length > 0)
        if (t === void 0)
          t = i;
        else {
          const r = s[e - 1] ?? "";
          this.joinExtensions.includes(this.extname(r).toLowerCase()) ? t += `/../${i}` : t += `/${i}`;
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
  dirname(s) {
    if ($t(s), s.length === 0)
      return ".";
    s = this.toPosix(s);
    let t = s.charCodeAt(0);
    const e = t === 47;
    let i = -1, r = !0;
    const n = this.getProtocol(s), a = s;
    s = s.slice(n.length);
    for (let o = s.length - 1; o >= 1; --o)
      if (t = s.charCodeAt(o), t === 47) {
        if (!r) {
          i = o;
          break;
        }
      } else
        r = !1;
    return i === -1 ? e ? "/" : this.isUrl(a) ? n + s : n : e && i === 1 ? "//" : n + s.slice(0, i);
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
  rootname(s) {
    $t(s), s = this.toPosix(s);
    let t = "";
    if (s.startsWith("/") ? t = "/" : t = this.getProtocol(s), this.isUrl(s)) {
      const e = s.indexOf("/", t.length);
      e !== -1 ? t = s.slice(0, e) : t = s, t.endsWith("/") || (t += "/");
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
  basename(s, t) {
    $t(s), t && $t(t), s = Ai(this.toPosix(s));
    let e = 0, i = -1, r = !0, n;
    if (t !== void 0 && t.length > 0 && t.length <= s.length) {
      if (t.length === s.length && t === s)
        return "";
      let a = t.length - 1, o = -1;
      for (n = s.length - 1; n >= 0; --n) {
        const h = s.charCodeAt(n);
        if (h === 47) {
          if (!r) {
            e = n + 1;
            break;
          }
        } else
          o === -1 && (r = !1, o = n + 1), a >= 0 && (h === t.charCodeAt(a) ? --a === -1 && (i = n) : (a = -1, i = o));
      }
      return e === i ? i = o : i === -1 && (i = s.length), s.slice(e, i);
    }
    for (n = s.length - 1; n >= 0; --n)
      if (s.charCodeAt(n) === 47) {
        if (!r) {
          e = n + 1;
          break;
        }
      } else i === -1 && (r = !1, i = n + 1);
    return i === -1 ? "" : s.slice(e, i);
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
  extname(s) {
    $t(s), s = Ai(this.toPosix(s));
    let t = -1, e = 0, i = -1, r = !0, n = 0;
    for (let a = s.length - 1; a >= 0; --a) {
      const o = s.charCodeAt(a);
      if (o === 47) {
        if (!r) {
          e = a + 1;
          break;
        }
        continue;
      }
      i === -1 && (r = !1, i = a + 1), o === 46 ? t === -1 ? t = a : n !== 1 && (n = 1) : t !== -1 && (n = -1);
    }
    return t === -1 || i === -1 || n === 0 || n === 1 && t === i - 1 && t === e + 1 ? "" : s.slice(t, i);
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
  parse(s) {
    $t(s);
    const t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (s.length === 0)
      return t;
    s = Ai(this.toPosix(s));
    let e = s.charCodeAt(0);
    const i = this.isAbsolute(s);
    let r;
    t.root = this.rootname(s), i || this.hasProtocol(s) ? r = 1 : r = 0;
    let n = -1, a = 0, o = -1, h = !0, l = s.length - 1, c = 0;
    for (; l >= r; --l) {
      if (e = s.charCodeAt(l), e === 47) {
        if (!h) {
          a = l + 1;
          break;
        }
        continue;
      }
      o === -1 && (h = !1, o = l + 1), e === 46 ? n === -1 ? n = l : c !== 1 && (c = 1) : n !== -1 && (c = -1);
    }
    return n === -1 || o === -1 || c === 0 || c === 1 && n === o - 1 && n === a + 1 ? o !== -1 && (a === 0 && i ? t.base = t.name = s.slice(1, o) : t.base = t.name = s.slice(a, o)) : (a === 0 && i ? (t.name = s.slice(1, n), t.base = s.slice(1, o)) : (t.name = s.slice(a, n), t.base = s.slice(a, o)), t.ext = s.slice(n, o)), t.dir = this.dirname(s), t;
  },
  sep: "/",
  delimiter: ":",
  joinExtensions: [".html"]
};
function ll(s, t, e, i, r) {
  const n = t[e];
  for (let a = 0; a < n.length; a++) {
    const o = n[a];
    e < t.length - 1 ? ll(s.replace(i[e], o), t, e + 1, i, r) : r.push(s.replace(i[e], o));
  }
}
function Bd(s) {
  const t = /\{(.*?)\}/g, e = s.match(t), i = [];
  if (e) {
    const r = [];
    e.forEach((n) => {
      const a = n.substring(1, n.length - 1).split(",");
      r.push(a);
    }), ll(s, r, 0, e, i);
  } else
    i.push(s);
  return i;
}
const Gs = (s) => !Array.isArray(s);
class gi {
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
    return Xt(
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
    this._manifest && Q("[Resolver] Manifest already exists, this will be overwritten"), this._manifest = t, t.bundles.forEach((e) => {
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
    let r = e;
    Array.isArray(e) || (r = Object.entries(e).map(([n, a]) => typeof a == "string" || Array.isArray(a) ? { alias: n, src: a } : { alias: n, ...a })), r.forEach((n) => {
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
      this.hasKey(n) && Q(`[Resolver] already has key: ${n} overwriting`);
    }, Xt(e).forEach((n) => {
      const { src: a } = n;
      let {
        data: o,
        format: h,
        loadParser: l,
        parser: c
      } = n;
      const u = Xt(a).map((p) => typeof p == "string" ? Bd(p) : Array.isArray(p) ? p : [p]), f = this.getAlias(n);
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
    const e = Gs(t);
    t = Xt(t);
    const i = {};
    return t.forEach((r) => {
      const n = this._bundles[r];
      if (n) {
        const a = this.resolve(n), o = {};
        for (const h in a) {
          const l = a[h];
          o[this._extractAssetIdFromBundle(r, h)] = l;
        }
        i[r] = o;
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
      for (const r in e)
        i[r] = e[r].src;
      return i;
    }
    return e.src;
  }
  resolve(t) {
    const e = Gs(t);
    t = Xt(t);
    const i = {};
    return t.forEach((r) => {
      if (!this._resolverHash[r])
        if (this._assetMap[r]) {
          let n = this._assetMap[r];
          const a = this._getPreferredOrder(n);
          a?.priority.forEach((o) => {
            a.params[o].forEach((h) => {
              const l = n.filter((c) => c[o] ? c[o] === h : !1);
              l.length && (n = l);
            });
          }), this._resolverHash[r] = n[0];
        } else
          this._resolverHash[r] = this._buildResolvedAsset({
            alias: [r],
            src: r
          }, {});
      i[r] = this._resolverHash[r];
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
      const i = t[e], r = this._preferredOrder.find((n) => n.params.format.includes(i.format));
      if (r)
        return r;
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
    const { aliases: i, data: r, loadParser: n, parser: a, format: o, progressSize: h } = e;
    return (this._basePath || this._rootPath) && (t.src = Lt.toAbsolute(t.src, this._basePath, this._rootPath)), t.alias = i ?? t.alias ?? [t.src], t.src = this._appendDefaultSearchParams(t.src), t.data = { ...r || {}, ...t.data }, t.loadParser = n ?? t.loadParser, t.parser = a ?? t.parser, t.format = o ?? t.format ?? Od(t.src), h !== void 0 && (t.progressSize = h), t;
  }
}
gi.RETINA_PREFIX = /@([0-9\.]+)x/;
function Od(s) {
  return s.split(".").pop().split("?").shift().split("#").shift();
}
const ln = (s, t) => {
  const e = t.split("?")[1];
  return e && (s += `?${e}`), s;
}, cl = class Ii {
  constructor(t, e) {
    this.linkedSheets = [];
    let i = t;
    t?.source instanceof qt && (i = {
      texture: t,
      data: e
    });
    const { texture: r, data: n, cachePrefix: a = "" } = i;
    this.cachePrefix = a, this._texture = r instanceof V ? r : null, this.textureSource = r.source, this.textures = {}, this.animations = {}, this.data = n;
    const o = parseFloat(n.meta.scale);
    o ? (this.resolution = o, r.source.resolution = this.resolution) : this.resolution = r.source._resolution, this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null;
  }
  /**
   * Parser spritesheet from loaded data. This is done asynchronously
   * to prevent creating too many Texture within a single process.
   */
  parse() {
    return new Promise((t) => {
      this._callback = t, this._batchIndex = 0, this._frameKeys.length <= Ii.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch();
    });
  }
  /**
   * Process a batch of frames
   * @param initialFrameIndex - The index of frame to start.
   */
  _processFrames(t) {
    let e = t;
    const i = Ii.BATCH_SIZE;
    for (; e - t < i && e < this._frameKeys.length; ) {
      const r = this._frameKeys[e], n = this._frames[r], a = n.frame;
      if (a) {
        let o = null, h = null;
        const l = n.trimmed !== !1 && n.sourceSize ? n.sourceSize : n.frame, c = new ut(
          0,
          0,
          Math.floor(l.w) / this.resolution,
          Math.floor(l.h) / this.resolution
        );
        n.rotated ? o = new ut(
          Math.floor(a.x) / this.resolution,
          Math.floor(a.y) / this.resolution,
          Math.floor(a.h) / this.resolution,
          Math.floor(a.w) / this.resolution
        ) : o = new ut(
          Math.floor(a.x) / this.resolution,
          Math.floor(a.y) / this.resolution,
          Math.floor(a.w) / this.resolution,
          Math.floor(a.h) / this.resolution
        ), n.trimmed !== !1 && n.spriteSourceSize && (h = new ut(
          Math.floor(n.spriteSourceSize.x) / this.resolution,
          Math.floor(n.spriteSourceSize.y) / this.resolution,
          Math.floor(a.w) / this.resolution,
          Math.floor(a.h) / this.resolution
        )), this.textures[r] = new V({
          source: this.textureSource,
          frame: o,
          orig: c,
          trim: h,
          rotate: n.rotated ? 2 : 0,
          defaultAnchor: n.anchor,
          defaultBorders: n.borders,
          label: r.toString()
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
        const r = t[e][i];
        this.animations[e].push(this.textures[r]);
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
    this._processFrames(this._batchIndex * Ii.BATCH_SIZE), this._batchIndex++, setTimeout(() => {
      this._batchIndex * Ii.BATCH_SIZE < this._frameKeys.length ? this._nextBatch() : (this._processAnimations(), this._parseComplete());
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
cl.BATCH_SIZE = 1e3;
let Na = cl;
const Ld = [
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
function ul(s, t, e) {
  const i = {};
  if (s.forEach((r) => {
    i[r] = t;
  }), Object.keys(t.textures).forEach((r) => {
    i[`${t.cachePrefix}${r}`] = t.textures[r];
  }), !e) {
    const r = Lt.dirname(s[0]);
    t.linkedSheets.forEach((n, a) => {
      const o = ul([`${r}/${t.data.meta.related_multi_packs[a]}`], n, !0);
      Object.assign(i, o);
    });
  }
  return i;
}
const Dd = {
  extension: L.Asset,
  /** Handle the caching of the related Spritesheet Textures */
  cache: {
    test: (s) => s instanceof Na,
    getCacheableAssets: (s, t) => ul(s, t, !1)
  },
  /** Resolve the resolution of the asset. */
  resolver: {
    extension: {
      type: L.ResolveParser,
      name: "resolveSpritesheet"
    },
    test: (s) => {
      const e = s.split("?")[0].split("."), i = e.pop(), r = e.pop();
      return i === "json" && Ld.includes(r);
    },
    parse: (s) => {
      const t = s.split(".");
      return {
        resolution: parseFloat(gi.RETINA_PREFIX.exec(s)?.[1] ?? "1"),
        format: t[t.length - 2],
        src: s
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
      type: L.LoadParser,
      priority: Ce.Normal,
      name: "spritesheetLoader"
    },
    async testParse(s, t) {
      return Lt.extname(t.src).toLowerCase() === ".json" && !!s.frames;
    },
    async parse(s, t, e) {
      const {
        texture: i,
        // if user need to use preloaded texture
        imageFilename: r,
        // if user need to use custom filename (not from jsonFile.meta.image)
        textureOptions: n,
        // if user need to set texture options on texture
        cachePrefix: a
        // if user need to use custom cache prefix
      } = t?.data ?? {};
      let o = Lt.dirname(t.src);
      o && o.lastIndexOf("/") !== o.length - 1 && (o += "/");
      let h;
      if (i instanceof V)
        h = i;
      else {
        const u = ln(o + (r ?? s.meta.image), t.src);
        h = (await e.load([{ src: u, data: n }]))[u];
      }
      const l = new Na({
        texture: h.source,
        data: s,
        cachePrefix: a
      });
      await l.parse();
      const c = s?.meta?.related_multi_packs;
      if (Array.isArray(c)) {
        const u = [];
        for (const d of c) {
          if (typeof d != "string")
            continue;
          let g = o + d;
          t.data?.ignoreMultiPack || (g = ln(g, t.src), u.push(e.load({
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
    async unload(s, t, e) {
      await e.unload(s.textureSource._sourceOrigin), s.destroy(!1);
    }
  }
};
_t.add(Dd);
const xr = /* @__PURE__ */ Object.create(null), Wa = /* @__PURE__ */ Object.create(null);
function $n(s, t) {
  let e = Wa[s];
  return e === void 0 && (xr[t] === void 0 && (xr[t] = 1), Wa[s] = e = xr[t]++), e;
}
let ps;
function dl() {
  return (!ps || ps?.isContextLost()) && (ps = J.get().createCanvas().getContext("webgl", {})), ps;
}
let ms;
function zd() {
  if (!ms) {
    ms = "mediump";
    const s = dl();
    s && s.getShaderPrecisionFormat && (ms = s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision ? "highp" : "mediump");
  }
  return ms;
}
function Gd(s, t, e) {
  return t ? s : e ? (s = s.replace("out vec4 finalColor;", ""), `

        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${s}
        `) : `

        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${s}
        `;
}
function Ud(s, t, e) {
  const i = e ? t.maxSupportedFragmentPrecision : t.maxSupportedVertexPrecision;
  if (s.substring(0, 9) !== "precision") {
    let r = e ? t.requestedFragmentPrecision : t.requestedVertexPrecision;
    return r === "highp" && i !== "highp" && (r = "mediump"), `precision ${r} float;
${s}`;
  } else if (i !== "highp" && s.substring(0, 15) === "precision highp")
    return s.replace("precision highp", "precision mediump");
  return s;
}
function Nd(s, t) {
  return t ? `#version 300 es
${s}` : s;
}
const Wd = {}, Vd = {};
function Yd(s, { name: t = "pixi-program" }, e = !0) {
  t = t.replace(/\s+/g, "-"), t += e ? "-fragment" : "-vertex";
  const i = e ? Wd : Vd;
  return i[t] ? (i[t]++, t += `-${i[t]}`) : i[t] = 1, s.indexOf("#define SHADER_NAME") !== -1 ? s : `${`#define SHADER_NAME ${t}`}
${s}`;
}
function $d(s, t) {
  return t ? s.replace("#version 300 es", "") : s;
}
const yr = {
  // strips any version headers..
  stripVersion: $d,
  // adds precision string if not already present
  ensurePrecision: Ud,
  // add some defines if WebGL1 to make it more compatible with WebGL2 shaders
  addProgramDefines: Gd,
  // add the program name to the shader
  setProgramName: Yd,
  // add the version string to the shader header
  insertVersion: Nd
}, Si = /* @__PURE__ */ Object.create(null), fl = class cn {
  /**
   * Creates a shiny new GlProgram. Used by WebGL renderer.
   * @param options - The options for the program.
   */
  constructor(t) {
    t = { ...cn.defaultOptions, ...t };
    const e = t.fragment.indexOf("#version 300 es") !== -1, i = {
      stripVersion: e,
      ensurePrecision: {
        requestedFragmentPrecision: t.preferredFragmentPrecision,
        requestedVertexPrecision: t.preferredVertexPrecision,
        maxSupportedVertexPrecision: "highp",
        maxSupportedFragmentPrecision: zd()
      },
      setProgramName: {
        name: t.name
      },
      addProgramDefines: e,
      insertVersion: e
    };
    let r = t.fragment, n = t.vertex;
    Object.keys(yr).forEach((a) => {
      const o = i[a];
      r = yr[a](r, o, !0), n = yr[a](n, o, !1);
    }), this.fragment = r, this.vertex = n, this.transformFeedbackVaryings = t.transformFeedbackVaryings, this._key = $n(`${this.vertex}:${this.fragment}`, "gl-program");
  }
  /** destroys the program */
  destroy() {
    this.fragment = null, this.vertex = null, this._attributeData = null, this._uniformData = null, this._uniformBlockData = null, this.transformFeedbackVaryings = null, Si[this._cacheKey] = null;
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
    return Si[e] || (Si[e] = new cn(t), Si[e]._cacheKey = e), Si[e];
  }
};
fl.defaultOptions = {
  preferredVertexPrecision: "highp",
  preferredFragmentPrecision: "mediump"
};
let js = fl;
const Va = {
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
function Xd(s) {
  return Va[s] ?? Va.float32;
}
const jd = {
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
function Hd({ source: s, entryPoint: t }) {
  const e = {}, i = s.indexOf(`fn ${t}`);
  if (i !== -1) {
    const r = s.indexOf("->", i);
    if (r !== -1) {
      const n = s.substring(i, r), a = /@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;
      let o;
      for (; (o = a.exec(n)) !== null; ) {
        const h = jd[o[3]] ?? "float32";
        e[o[2]] = {
          location: parseInt(o[1], 10),
          format: h,
          stride: Xd(h).stride,
          offset: 0,
          instance: !1,
          start: 0
        };
      }
    }
  }
  return e;
}
function br(s) {
  const t = /(^|[^/])@(group|binding)\(\d+\)[^;]+;/g, e = /@group\((\d+)\)/, i = /@binding\((\d+)\)/, r = /var(<[^>]+>)? (\w+)/, n = /:\s*(\w+)/, a = /struct\s+(\w+)\s*{([^}]+)}/g, o = /(\w+)\s*:\s*([\w\<\>]+)/g, h = /struct\s+(\w+)/, l = s.match(t)?.map((u) => ({
    group: parseInt(u.match(e)[1], 10),
    binding: parseInt(u.match(i)[1], 10),
    name: u.match(r)[2],
    isUniform: u.match(r)[1] === "<uniform>",
    type: u.match(n)[1]
  }));
  if (!l)
    return {
      groups: [],
      structs: []
    };
  const c = s.match(a)?.map((u) => {
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
var Bi = /* @__PURE__ */ ((s) => (s[s.VERTEX = 1] = "VERTEX", s[s.FRAGMENT = 2] = "FRAGMENT", s[s.COMPUTE = 4] = "COMPUTE", s))(Bi || {});
function qd({ groups: s }) {
  const t = [];
  for (let e = 0; e < s.length; e++) {
    const i = s[e];
    t[i.group] || (t[i.group] = []), i.isUniform ? t[i.group].push({
      binding: i.binding,
      visibility: Bi.VERTEX | Bi.FRAGMENT,
      buffer: {
        type: "uniform"
      }
    }) : i.type === "sampler" ? t[i.group].push({
      binding: i.binding,
      visibility: Bi.FRAGMENT,
      sampler: {
        type: "filtering"
      }
    }) : i.type === "texture_2d" && t[i.group].push({
      binding: i.binding,
      visibility: Bi.FRAGMENT,
      texture: {
        sampleType: "float",
        viewDimension: "2d",
        multisampled: !1
      }
    });
  }
  return t;
}
function Kd({ groups: s }) {
  const t = [];
  for (let e = 0; e < s.length; e++) {
    const i = s[e];
    t[i.group] || (t[i.group] = {}), t[i.group][i.name] = i.binding;
  }
  return t;
}
function Zd(s, t) {
  const e = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), r = [...s.structs, ...t.structs].filter((a) => e.has(a.name) ? !1 : (e.add(a.name), !0)), n = [...s.groups, ...t.groups].filter((a) => {
    const o = `${a.name}-${a.binding}`;
    return i.has(o) ? !1 : (i.add(o), !0);
  });
  return { structs: r, groups: n };
}
const Ti = /* @__PURE__ */ Object.create(null);
class _i {
  /**
   * Create a new GpuProgram
   * @param options - The options for the gpu program
   */
  constructor(t) {
    this._layoutKey = 0, this._attributeLocationsKey = 0;
    const { fragment: e, vertex: i, layout: r, gpuLayout: n, name: a } = t;
    if (this.name = a, this.fragment = e, this.vertex = i, e.source === i.source) {
      const o = br(e.source);
      this.structsAndGroups = o;
    } else {
      const o = br(i.source), h = br(e.source);
      this.structsAndGroups = Zd(o, h);
    }
    this.layout = r ?? Kd(this.structsAndGroups), this.gpuLayout = n ?? qd(this.structsAndGroups), this.autoAssignGlobalUniforms = this.layout[0]?.globalUniforms !== void 0, this.autoAssignLocalUniforms = this.layout[1]?.localUniforms !== void 0, this._generateProgramKey();
  }
  // TODO maker this pure
  _generateProgramKey() {
    const { vertex: t, fragment: e } = this, i = t.source + e.source + t.entryPoint + e.entryPoint;
    this._layoutKey = $n(i, "program");
  }
  get attributeData() {
    return this._attributeData ?? (this._attributeData = Hd(this.vertex)), this._attributeData;
  }
  /** destroys the program */
  destroy() {
    this.gpuLayout = null, this.layout = null, this.structsAndGroups = null, this.fragment = null, this.vertex = null, Ti[this._cacheKey] = null;
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
    return Ti[e] || (Ti[e] = new _i(t), Ti[e]._cacheKey = e), Ti[e];
  }
}
const pl = [
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
], Qd = pl.reduce((s, t) => (s[t] = !0, s), {});
function Jd(s, t) {
  switch (s) {
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
const ml = class gl {
  /**
   * Create a new Uniform group
   * @param uniformStructures - The structures of the uniform group
   * @param options - The optional parameters of this uniform group
   */
  constructor(t, e) {
    this._touched = 0, this.uid = lt("uniform"), this._resourceType = "uniformGroup", this._resourceId = lt("resource"), this.isUniformGroup = !0, this._dirtyId = 0, this.destroyed = !1, e = { ...gl.defaultOptions, ...e }, this.uniformStructures = t;
    const i = {};
    for (const r in t) {
      const n = t[r];
      if (n.name = r, n.size = n.size ?? 1, !Qd[n.type]) {
        const a = n.type.match(/^array<(\w+(?:<\w+>)?),\s*(\d+)>$/);
        if (a) {
          const [, o, h] = a;
          throw new Error(
            `Uniform type ${n.type} is not supported. Use type: '${o}', size: ${h} instead.`
          );
        }
        throw new Error(`Uniform type ${n.type} is not supported. Supported uniform types are: ${pl.join(", ")}`);
      }
      n.value ?? (n.value = Jd(n.type, n.size)), i[r] = n.value;
    }
    this.uniforms = i, this._dirtyId = 1, this.ubo = e.ubo, this.isStatic = e.isStatic, this._signature = $n(Object.keys(i).map(
      (r) => `${r}-${t[r].type}`
    ).join("-"), "uniform-group");
  }
  /** Call this if you want the uniform groups data to be uploaded to the GPU only useful if `isStatic` is true. */
  update() {
    this._dirtyId++;
  }
};
ml.defaultOptions = {
  /** if true the UniformGroup is handled as an Uniform buffer object. */
  ubo: !1,
  /** if true, then you are responsible for when the data is uploaded to the GPU by calling `update()` */
  isStatic: !1
};
let _l = ml;
class Ps {
  /**
   * Create a new instance eof the Bind Group.
   * @param resources - The resources that are bound together for use by a shader.
   */
  constructor(t) {
    this.resources = /* @__PURE__ */ Object.create(null), this._dirty = !0;
    let e = 0;
    for (const i in t) {
      const r = t[i];
      this.setResource(r, e++);
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
    for (const r in i)
      i[r]._gcLastUsed = t, i[r]._touched = e;
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
var Zi = /* @__PURE__ */ ((s) => (s[s.WEBGL = 1] = "WEBGL", s[s.WEBGPU = 2] = "WEBGPU", s[s.BOTH = 3] = "BOTH", s))(Zi || {});
class Hs extends Ht {
  constructor(t) {
    super(), this.uid = lt("shader"), this._uniformBindMap = /* @__PURE__ */ Object.create(null), this._ownedBindGroups = [], this._destroyed = !1;
    let {
      gpuProgram: e,
      glProgram: i,
      groups: r,
      resources: n,
      compatibleRenderers: a,
      groupMap: o
    } = t;
    this.gpuProgram = e, this.glProgram = i, a === void 0 && (a = 0, e && (a |= Zi.WEBGPU), i && (a |= Zi.WEBGL)), this.compatibleRenderers = a;
    const h = {};
    if (!n && !r && (n = {}), n && r)
      throw new Error("[Shader] Cannot have both resources and groups");
    if (!e && r && !o)
      throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");
    if (!e && r && o)
      for (const l in o)
        for (const c in o[l]) {
          const u = o[l][c];
          h[u] = {
            group: l,
            binding: c,
            name: u
          };
        }
    else if (e && r && !o) {
      const l = e.structsAndGroups.groups;
      o = {}, l.forEach((c) => {
        o[c.group] = o[c.group] || {}, o[c.group][c.binding] = c.name, h[c.name] = c;
      });
    } else if (n) {
      r = {}, o = {}, e && e.structsAndGroups.groups.forEach((u) => {
        o[u.group] = o[u.group] || {}, o[u.group][u.binding] = u.name, h[u.name] = u;
      });
      let l = 0;
      for (const c in n)
        h[c] || (r[99] || (r[99] = new Ps(), this._ownedBindGroups.push(r[99])), h[c] = { group: 99, binding: l, name: c }, o[99] = o[99] || {}, o[99][l] = c, l++);
      for (const c in n) {
        const u = c;
        let f = n[c];
        !f.source && !f._resourceType && (f = new _l(f));
        const d = h[u];
        d && (r[d.group] || (r[d.group] = new Ps(), this._ownedBindGroups.push(r[d.group])), r[d.group].setResource(f, d.binding));
      }
    }
    this.groups = r, this._uniformBindMap = o, this.resources = this._buildResourceAccessor(r, h);
  }
  /**
   * Sometimes a resource group will be provided later (for example global uniforms)
   * In such cases, this method can be used to let the shader know about the group.
   * @param name - the name of the resource group
   * @param groupIndex - the index of the group (should match the webGPU shader group location)
   * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
   */
  addResource(t, e, i) {
    var r, n;
    (r = this._uniformBindMap)[e] || (r[e] = {}), (n = this._uniformBindMap[e])[i] || (n[i] = t), this.groups[e] || (this.groups[e] = new Ps(), this._ownedBindGroups.push(this.groups[e]));
  }
  _buildResourceAccessor(t, e) {
    const i = {};
    for (const r in e) {
      const n = e[r];
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
    const { gpu: e, gl: i, ...r } = t;
    let n, a;
    return e && (n = _i.from(e)), i && (a = js.from(i)), new Hs({
      gpuProgram: n,
      glProgram: a,
      ...r
    });
  }
}
const tf = {
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
}, wr = 0, vr = 1, Ar = 2, Sr = 3, Tr = 4, Cr = 5, un = class xl {
  constructor() {
    this.data = 0, this.blendMode = "normal", this.polygonOffset = 0, this.blend = !0, this.depthMask = !0;
  }
  /**
   * Activates blending of the computed fragment color values.
   * @default true
   */
  get blend() {
    return !!(this.data & 1 << wr);
  }
  set blend(t) {
    !!(this.data & 1 << wr) !== t && (this.data ^= 1 << wr);
  }
  /**
   * Activates adding an offset to depth values of polygon's fragments
   * @default false
   */
  get offsets() {
    return !!(this.data & 1 << vr);
  }
  set offsets(t) {
    !!(this.data & 1 << vr) !== t && (this.data ^= 1 << vr);
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
    return !!(this.data & 1 << Ar);
  }
  set culling(t) {
    !!(this.data & 1 << Ar) !== t && (this.data ^= 1 << Ar);
  }
  /**
   * Activates depth comparisons and updates to the depth buffer.
   * @default false
   */
  get depthTest() {
    return !!(this.data & 1 << Sr);
  }
  set depthTest(t) {
    !!(this.data & 1 << Sr) !== t && (this.data ^= 1 << Sr);
  }
  /**
   * Enables or disables writing to the depth buffer.
   * @default true
   */
  get depthMask() {
    return !!(this.data & 1 << Cr);
  }
  set depthMask(t) {
    !!(this.data & 1 << Cr) !== t && (this.data ^= 1 << Cr);
  }
  /**
   * Specifies whether or not front or back-facing polygons can be culled.
   * @default false
   */
  get clockwiseFrontFace() {
    return !!(this.data & 1 << Tr);
  }
  set clockwiseFrontFace(t) {
    !!(this.data & 1 << Tr) !== t && (this.data ^= 1 << Tr);
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
    this.blend = t !== "none", this._blendMode = t, this._blendModeId = tf[t] || 0;
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
    const t = new xl();
    return t.depthTest = !1, t.blend = !0, t;
  }
};
un.default2d = un.for2d();
let ef = un;
const yl = class dn extends Hs {
  /**
   * @param options - The optional parameters of this filter.
   */
  constructor(t) {
    t = { ...dn.defaultOptions, ...t }, super(t), this.enabled = !0, this._state = ef.for2d(), this.blendMode = t.blendMode, this.padding = t.padding, typeof t.antialias == "boolean" ? this.antialias = t.antialias ? "on" : "off" : this.antialias = t.antialias, this.resolution = t.resolution, this.blendRequired = t.blendRequired, this.clipToViewport = t.clipToViewport, this.addResource("uTexture", 0, 1), t.blendRequired && this.addResource("uBackTexture", 0, 3);
  }
  /**
   * Applies the filter
   * @param filterManager - The renderer to retrieve the filter from
   * @param input - The input render target.
   * @param output - The target to output to.
   * @param clearMode - Should the output be cleared before rendering to it
   */
  apply(t, e, i, r) {
    t.applyFilter(this, e, i, r);
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
    const { gpu: e, gl: i, ...r } = t;
    let n, a;
    return e && (n = _i.from(e)), i && (a = js.from(i)), new dn({
      gpuProgram: n,
      glProgram: a,
      ...r
    });
  }
};
yl.defaultOptions = {
  blendMode: "normal",
  resolution: 1,
  padding: 0,
  antialias: "off",
  blendRequired: !1,
  clipToViewport: !0
};
let bl = yl;
const fn = [];
_t.handleByNamedList(L.Environment, fn);
async function sf(s) {
  if (!s)
    for (let t = 0; t < fn.length; t++) {
      const e = fn[t];
      if (e.value.test()) {
        await e.value.load();
        return;
      }
    }
}
let Ci;
function rf() {
  if (typeof Ci == "boolean")
    return Ci;
  try {
    Ci = new Function("param1", "param2", "param3", "return param1[param2] === param3;")({ a: "b" }, "a", "b") === !0;
  } catch {
    Ci = !1;
  }
  return Ci;
}
function Ya(s, t, e = 2) {
  const i = t && t.length, r = i ? t[0] * e : s.length;
  let n = wl(s, 0, r, e, !0);
  const a = [];
  if (!n || n.next === n.prev) return a;
  let o, h, l;
  if (i && (n = lf(s, t, n, e)), s.length > 80 * e) {
    o = s[0], h = s[1];
    let c = o, u = h;
    for (let f = e; f < r; f += e) {
      const d = s[f], g = s[f + 1];
      d < o && (o = d), g < h && (h = g), d > c && (c = d), g > u && (u = g);
    }
    l = Math.max(c - o, u - h), l = l !== 0 ? 32767 / l : 0;
  }
  return Qi(n, a, e, o, h, l, 0), a;
}
function wl(s, t, e, i, r) {
  let n;
  if (r === bf(s, t, e, i) > 0)
    for (let a = t; a < e; a += i) n = $a(a / i | 0, s[a], s[a + 1], n);
  else
    for (let a = e - i; a >= t; a -= i) n = $a(a / i | 0, s[a], s[a + 1], n);
  return n && mi(n, n.next) && (ts(n), n = n.next), n;
}
function je(s, t) {
  if (!s) return s;
  t || (t = s);
  let e = s, i;
  do
    if (i = !1, !e.steiner && (mi(e, e.next) || rt(e.prev, e, e.next) === 0)) {
      if (ts(e), e = t = e.prev, e === e.next) break;
      i = !0;
    } else
      e = e.next;
  while (i || e !== t);
  return t;
}
function Qi(s, t, e, i, r, n, a) {
  if (!s) return;
  !a && n && pf(s, i, r, n);
  let o = s;
  for (; s.prev !== s.next; ) {
    const h = s.prev, l = s.next;
    if (n ? af(s, i, r, n) : nf(s)) {
      t.push(h.i, s.i, l.i), ts(s), s = l.next, o = l.next;
      continue;
    }
    if (s = l, s === o) {
      a ? a === 1 ? (s = of(je(s), t), Qi(s, t, e, i, r, n, 2)) : a === 2 && hf(s, t, e, i, r, n) : Qi(je(s), t, e, i, r, n, 1);
      break;
    }
  }
}
function nf(s) {
  const t = s.prev, e = s, i = s.next;
  if (rt(t, e, i) >= 0) return !1;
  const r = t.x, n = e.x, a = i.x, o = t.y, h = e.y, l = i.y, c = Math.min(r, n, a), u = Math.min(o, h, l), f = Math.max(r, n, a), d = Math.max(o, h, l);
  let g = i.next;
  for (; g !== t; ) {
    if (g.x >= c && g.x <= f && g.y >= u && g.y <= d && Oi(r, o, n, h, a, l, g.x, g.y) && rt(g.prev, g, g.next) >= 0) return !1;
    g = g.next;
  }
  return !0;
}
function af(s, t, e, i) {
  const r = s.prev, n = s, a = s.next;
  if (rt(r, n, a) >= 0) return !1;
  const o = r.x, h = n.x, l = a.x, c = r.y, u = n.y, f = a.y, d = Math.min(o, h, l), g = Math.min(c, u, f), p = Math.max(o, h, l), m = Math.max(c, u, f), _ = pn(d, g, t, e, i), x = pn(p, m, t, e, i);
  let y = s.prevZ, b = s.nextZ;
  for (; y && y.z >= _ && b && b.z <= x; ) {
    if (y.x >= d && y.x <= p && y.y >= g && y.y <= m && y !== r && y !== a && Oi(o, c, h, u, l, f, y.x, y.y) && rt(y.prev, y, y.next) >= 0 || (y = y.prevZ, b.x >= d && b.x <= p && b.y >= g && b.y <= m && b !== r && b !== a && Oi(o, c, h, u, l, f, b.x, b.y) && rt(b.prev, b, b.next) >= 0)) return !1;
    b = b.nextZ;
  }
  for (; y && y.z >= _; ) {
    if (y.x >= d && y.x <= p && y.y >= g && y.y <= m && y !== r && y !== a && Oi(o, c, h, u, l, f, y.x, y.y) && rt(y.prev, y, y.next) >= 0) return !1;
    y = y.prevZ;
  }
  for (; b && b.z <= x; ) {
    if (b.x >= d && b.x <= p && b.y >= g && b.y <= m && b !== r && b !== a && Oi(o, c, h, u, l, f, b.x, b.y) && rt(b.prev, b, b.next) >= 0) return !1;
    b = b.nextZ;
  }
  return !0;
}
function of(s, t) {
  let e = s;
  do {
    const i = e.prev, r = e.next.next;
    !mi(i, r) && Al(i, e, e.next, r) && Ji(i, r) && Ji(r, i) && (t.push(i.i, e.i, r.i), ts(e), ts(e.next), e = s = r), e = e.next;
  } while (e !== s);
  return je(e);
}
function hf(s, t, e, i, r, n) {
  let a = s;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && _f(a, o)) {
        let h = Sl(a, o);
        a = je(a, a.next), h = je(h, h.next), Qi(a, t, e, i, r, n, 0), Qi(h, t, e, i, r, n, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== s);
}
function lf(s, t, e, i) {
  const r = [];
  for (let n = 0, a = t.length; n < a; n++) {
    const o = t[n] * i, h = n < a - 1 ? t[n + 1] * i : s.length, l = wl(s, o, h, i, !1);
    l === l.next && (l.steiner = !0), r.push(gf(l));
  }
  r.sort(cf);
  for (let n = 0; n < r.length; n++)
    e = uf(r[n], e);
  return e;
}
function cf(s, t) {
  let e = s.x - t.x;
  if (e === 0 && (e = s.y - t.y, e === 0)) {
    const i = (s.next.y - s.y) / (s.next.x - s.x), r = (t.next.y - t.y) / (t.next.x - t.x);
    e = i - r;
  }
  return e;
}
function uf(s, t) {
  const e = df(s, t);
  if (!e)
    return t;
  const i = Sl(e, s);
  return je(i, i.next), je(e, e.next);
}
function df(s, t) {
  let e = t;
  const i = s.x, r = s.y;
  let n = -1 / 0, a;
  if (mi(s, e)) return e;
  do {
    if (mi(s, e.next)) return e.next;
    if (r <= e.y && r >= e.next.y && e.next.y !== e.y) {
      const u = e.x + (r - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
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
    if (i >= e.x && e.x >= h && i !== e.x && vl(r < l ? i : n, r, h, l, r < l ? n : i, r, e.x, e.y)) {
      const u = Math.abs(r - e.y) / (i - e.x);
      Ji(e, s) && (u < c || u === c && (e.x > a.x || e.x === a.x && ff(a, e))) && (a = e, c = u);
    }
    e = e.next;
  } while (e !== o);
  return a;
}
function ff(s, t) {
  return rt(s.prev, s, t.prev) < 0 && rt(t.next, s, s.next) < 0;
}
function pf(s, t, e, i) {
  let r = s;
  do
    r.z === 0 && (r.z = pn(r.x, r.y, t, e, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
  while (r !== s);
  r.prevZ.nextZ = null, r.prevZ = null, mf(r);
}
function mf(s) {
  let t, e = 1;
  do {
    let i = s, r;
    s = null;
    let n = null;
    for (t = 0; i; ) {
      t++;
      let a = i, o = 0;
      for (let l = 0; l < e && (o++, a = a.nextZ, !!a); l++)
        ;
      let h = e;
      for (; o > 0 || h > 0 && a; )
        o !== 0 && (h === 0 || !a || i.z <= a.z) ? (r = i, i = i.nextZ, o--) : (r = a, a = a.nextZ, h--), n ? n.nextZ = r : s = r, r.prevZ = n, n = r;
      i = a;
    }
    n.nextZ = null, e *= 2;
  } while (t > 1);
  return s;
}
function pn(s, t, e, i, r) {
  return s = (s - e) * r | 0, t = (t - i) * r | 0, s = (s | s << 8) & 16711935, s = (s | s << 4) & 252645135, s = (s | s << 2) & 858993459, s = (s | s << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, s | t << 1;
}
function gf(s) {
  let t = s, e = s;
  do
    (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
  while (t !== s);
  return e;
}
function vl(s, t, e, i, r, n, a, o) {
  return (r - a) * (t - o) >= (s - a) * (n - o) && (s - a) * (i - o) >= (e - a) * (t - o) && (e - a) * (n - o) >= (r - a) * (i - o);
}
function Oi(s, t, e, i, r, n, a, o) {
  return !(s === a && t === o) && vl(s, t, e, i, r, n, a, o);
}
function _f(s, t) {
  return s.next.i !== t.i && s.prev.i !== t.i && !xf(s, t) && // doesn't intersect other edges
  (Ji(s, t) && Ji(t, s) && yf(s, t) && // locally visible
  (rt(s.prev, s, t.prev) || rt(s, t.prev, t)) || // does not create opposite-facing sectors
  mi(s, t) && rt(s.prev, s, s.next) > 0 && rt(t.prev, t, t.next) > 0);
}
function rt(s, t, e) {
  return (t.y - s.y) * (e.x - t.x) - (t.x - s.x) * (e.y - t.y);
}
function mi(s, t) {
  return s.x === t.x && s.y === t.y;
}
function Al(s, t, e, i) {
  const r = _s(rt(s, t, e)), n = _s(rt(s, t, i)), a = _s(rt(e, i, s)), o = _s(rt(e, i, t));
  return !!(r !== n && a !== o || r === 0 && gs(s, e, t) || n === 0 && gs(s, i, t) || a === 0 && gs(e, s, i) || o === 0 && gs(e, t, i));
}
function gs(s, t, e) {
  return t.x <= Math.max(s.x, e.x) && t.x >= Math.min(s.x, e.x) && t.y <= Math.max(s.y, e.y) && t.y >= Math.min(s.y, e.y);
}
function _s(s) {
  return s > 0 ? 1 : s < 0 ? -1 : 0;
}
function xf(s, t) {
  let e = s;
  do {
    if (e.i !== s.i && e.next.i !== s.i && e.i !== t.i && e.next.i !== t.i && Al(e, e.next, s, t)) return !0;
    e = e.next;
  } while (e !== s);
  return !1;
}
function Ji(s, t) {
  return rt(s.prev, s, s.next) < 0 ? rt(s, t, s.next) >= 0 && rt(s, s.prev, t) >= 0 : rt(s, t, s.prev) < 0 || rt(s, s.next, t) < 0;
}
function yf(s, t) {
  let e = s, i = !1;
  const r = (s.x + t.x) / 2, n = (s.y + t.y) / 2;
  do
    e.y > n != e.next.y > n && e.next.y !== e.y && r < (e.next.x - e.x) * (n - e.y) / (e.next.y - e.y) + e.x && (i = !i), e = e.next;
  while (e !== s);
  return i;
}
function Sl(s, t) {
  const e = mn(s.i, s.x, s.y), i = mn(t.i, t.x, t.y), r = s.next, n = t.prev;
  return s.next = t, t.prev = s, e.next = r, r.prev = e, i.next = e, e.prev = i, n.next = i, i.prev = n, i;
}
function $a(s, t, e, i) {
  const r = mn(s, t, e);
  return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r;
}
function ts(s) {
  s.next.prev = s.prev, s.prev.next = s.next, s.prevZ && (s.prevZ.nextZ = s.nextZ), s.nextZ && (s.nextZ.prevZ = s.prevZ);
}
function mn(s, t, e) {
  return {
    i: s,
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
function bf(s, t, e, i) {
  let r = 0;
  for (let n = t, a = e - i; n < e; n += i)
    r += (s[a] - s[n]) * (s[n + 1] + s[a + 1]), a = n;
  return r;
}
const wf = Ya.default || Ya;
var Tl = /* @__PURE__ */ ((s) => (s[s.NONE = 0] = "NONE", s[s.COLOR = 16384] = "COLOR", s[s.STENCIL = 1024] = "STENCIL", s[s.DEPTH = 256] = "DEPTH", s[s.COLOR_DEPTH = 16640] = "COLOR_DEPTH", s[s.COLOR_STENCIL = 17408] = "COLOR_STENCIL", s[s.DEPTH_STENCIL = 1280] = "DEPTH_STENCIL", s[s.ALL = 17664] = "ALL", s))(Tl || {});
class vf {
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
  emit(t, e, i, r, n, a, o, h) {
    const { name: l, items: c } = this;
    for (let u = 0, f = c.length; u < f; u++)
      c[u][l](t, e, i, r, n, a, o, h);
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
const Af = [
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
], Cl = class Pl extends Ht {
  /**
   * Set up a system with a collection of SystemClasses and runners.
   * Systems are attached dynamically to this class when added.
   * @param config - the config for the system manager
   */
  constructor(t) {
    super(), this.tick = 0, this.uid = lt("renderer"), this.runners = /* @__PURE__ */ Object.create(null), this.renderPipes = /* @__PURE__ */ Object.create(null), this._initOptions = {}, this._systemsHash = /* @__PURE__ */ Object.create(null), this.type = t.type, this.name = t.name, this.config = t;
    const e = [...Af, ...this.config.runners ?? []];
    this._addRunners(...e), this._unsafeEvalCheck();
  }
  /**
   * Initialize the renderer.
   * @param options - The options to use to create the renderer.
   */
  async init(t = {}) {
    const e = t.skipExtensionImports === !0 ? !0 : t.manageImports === !1;
    await sf(e), this._addSystems(this.config.systems), this._addPipes(this.config.renderPipes, this.config.renderPipeAdaptors);
    for (const i in this._systemsHash)
      t = { ...this._systemsHash[i].constructor.defaultOptions, ...t };
    t = { ...Pl.defaultOptions, ...t }, this._roundPixels = t.roundPixels ? 1 : 0;
    for (let i = 0; i < this.runners.init.items.length; i++)
      await this.runners.init.items[i].init(t);
    this._initOptions = t;
  }
  render(t, e) {
    this.tick++;
    let i = t;
    if (i instanceof re && (i = { container: i }, e && (G(j, "passing a second argument is deprecated, please use render options instead"), i.target = e.renderTexture)), i.target || (i.target = this.view.renderTarget), i.target === this.view.renderTarget && (this._lastObjectRendered = i.container, i.clearColor ?? (i.clearColor = this.background.colorRgba), i.clear ?? (i.clear = this.background.clearBeforeRender)), i.clearColor) {
      const r = Array.isArray(i.clearColor) && i.clearColor.length === 4;
      i.clearColor = r ? i.clearColor : nt.shared.setValue(i.clearColor).toArray();
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
    const r = this.view.resolution;
    this.view.resize(t, e, i), this.emit("resize", this.view.screen.width, this.view.screen.height, this.view.resolution), i !== void 0 && i !== r && this.runners.resolutionChange.emit(i);
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
    t.target || (t.target = e.renderTarget.renderTarget), t.clearColor || (t.clearColor = this.background.colorRgba), t.clear ?? (t.clear = Tl.ALL);
    const { clear: i, clearColor: r, target: n } = t;
    nt.shared.setValue(r ?? this.background.colorRgba), e.renderTarget.clear(n, i, nt.shared.toArray());
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
      this.runners[e] = new vf(e);
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
    for (const r in this.runners)
      this.runners[r].add(i);
    return this;
  }
  _addPipes(t, e) {
    const i = e.reduce((r, n) => (r[n.name] = n.value, r), {});
    t.forEach((r) => {
      const n = r.value, a = r.name, o = i[a];
      this.renderPipes[a] = new n(
        this,
        o ? new o() : null
      ), this.runners.destroy.add(this.renderPipes[a]);
    });
  }
  destroy(t = !1) {
    this.runners.destroy.items.reverse(), this.runners.destroy.emit(t), (t === !0 || typeof t == "object" && t.releaseGlobalResources) && ns.release(), Object.values(this.runners).forEach((e) => {
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
    if (!rf())
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
Cl.defaultOptions = {
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
let Ml = Cl, xs;
function Sf(s) {
  return xs !== void 0 || (xs = (() => {
    const t = {
      stencil: !0,
      failIfMajorPerformanceCaveat: s ?? Ml.defaultOptions.failIfMajorPerformanceCaveat
    };
    try {
      if (!J.get().getWebGLRenderingContext())
        return !1;
      let i = J.get().createCanvas().getContext("webgl", t);
      const r = !!i?.getContextAttributes()?.stencil;
      if (i) {
        const n = i.getExtension("WEBGL_lose_context");
        n && n.loseContext();
      }
      return i = null, r;
    } catch {
      return !1;
    }
  })()), xs;
}
let ys;
async function Tf(s = {}) {
  return ys !== void 0 || (ys = await (async () => {
    const t = J.get().getNavigator().gpu;
    if (!t)
      return !1;
    try {
      return await (await t.requestAdapter(s)).requestDevice(), !0;
    } catch {
      return !1;
    }
  })()), ys;
}
const Xa = ["webgl", "webgpu", "canvas"];
async function Cf(s) {
  let t = [];
  s.preference ? (t.push(s.preference), Xa.forEach((n) => {
    n !== s.preference && t.push(n);
  })) : t = Xa.slice();
  let e, i = {};
  for (let n = 0; n < t.length; n++) {
    const a = t[n];
    if (a === "webgpu" && await Tf()) {
      const { WebGPURenderer: o } = await import("./WebGPURenderer-Dcn_VkOn.js");
      e = o, i = { ...s, ...s.webgpu };
      break;
    } else if (a === "webgl" && Sf(
      s.failIfMajorPerformanceCaveat ?? Ml.defaultOptions.failIfMajorPerformanceCaveat
    )) {
      const { WebGLRenderer: o } = await import("./WebGLRenderer-BmwQcQX2.js");
      e = o, i = { ...s, ...s.webgl };
      break;
    } else if (a === "canvas")
      throw i = { ...s }, new Error("CanvasRenderer is not yet implemented");
  }
  if (delete i.webgpu, delete i.webgl, !e)
    throw new Error("No available renderer for the current environment");
  const r = new e();
  return await r.init(i), r;
}
const kl = "8.15.0";
class El {
  static init() {
    globalThis.__PIXI_APP_INIT__?.(this, kl);
  }
  static destroy() {
  }
}
El.extension = L.Application;
class Pf {
  constructor(t) {
    this._renderer = t;
  }
  init() {
    globalThis.__PIXI_RENDERER_INIT__?.(this._renderer, kl);
  }
  destroy() {
    this._renderer = null;
  }
}
Pf.extension = {
  type: [
    L.WebGLSystem,
    L.WebGPUSystem
  ],
  name: "initHook",
  priority: -10
};
const Rl = class gn {
  constructor(...t) {
    this.stage = new re(), t[0] !== void 0 && G(j, "Application constructor options are deprecated, please use Application.init() instead.");
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
    t = { ...t }, this.stage || (this.stage = new re()), this.renderer = await Cf(t), gn._plugins.forEach((e) => {
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
    return G(j, "Application.view is deprecated, please use Application.canvas instead."), this.renderer.canvas;
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
    const i = gn._plugins.slice(0);
    i.reverse(), i.forEach((r) => {
      r.destroy.call(this);
    }), this.stage.destroy(e), this.stage = null, this.renderer.destroy(t), this.renderer = null;
  }
};
Rl._plugins = [];
let Fl = Rl;
_t.handleByList(L.Application, Fl._plugins);
_t.add(El);
class Il extends Ht {
  constructor() {
    super(...arguments), this.chars = /* @__PURE__ */ Object.create(null), this.lineHeight = 0, this.fontFamily = "", this.fontMetrics = { fontSize: 0, ascent: 0, descent: 0 }, this.baseLineOffset = 0, this.distanceField = { type: "none", range: 0 }, this.pages = [], this.applyFillAsTint = !0, this.baseMeasurementFontSize = 100, this.baseRenderedFontSize = 100;
  }
  /**
   * The name of the font face.
   * @deprecated since 8.0.0 Use `fontFamily` instead.
   */
  get font() {
    return G(j, "BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."), this.fontFamily;
  }
  /**
   * The map of base page textures (i.e., sheets of glyphs).
   * @deprecated since 8.0.0 Use `pages` instead.
   */
  get pageTextures() {
    return G(j, "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."), this.pages;
  }
  /**
   * The size of the font face in pixels.
   * @deprecated since 8.0.0 Use `fontMetrics.fontSize` instead.
   */
  get size() {
    return G(j, "BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."), this.fontMetrics.fontSize;
  }
  /**
   * The kind of distance field for this font or "none".
   * @deprecated since 8.0.0 Use `distanceField.type` instead.
   */
  get distanceFieldRange() {
    return G(j, "BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."), this.distanceField.range;
  }
  /**
   * The range of the distance field in pixels.
   * @deprecated since 8.0.0 Use `distanceField.range` instead.
   */
  get distanceFieldType() {
    return G(j, "BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."), this.distanceField.type;
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
class Mf {
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
      const r = t[i];
      e[i] = [r, this.get(r)];
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
    let r = null;
    if (this.has(t))
      this.set(t, e, !0, i);
    else {
      this.max > 0 && this.size === this.max && (r = { ...this.first }, this.evict(!0));
      let n = this.items[t] = {
        expiry: this.ttl > 0 ? Date.now() + this.ttl : this.ttl,
        key: t,
        prev: this.last,
        next: null,
        value: e
      };
      ++this.size === 1 ? this.first = n : this.last.next = n, this.last = n;
    }
    return r;
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
  set(t, e, i = !1, r = this.resetTtl) {
    let n = this.items[t];
    return i || n !== void 0 ? (n.value = e, i === !1 && r && (n.expiry = this.ttl > 0 ? Date.now() + this.ttl : this.ttl), this.moveToEnd(n)) : (this.max > 0 && this.size === this.max && this.evict(!0), n = this.items[t] = {
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
function Bl(s = 1e3, t = 0, e = !1) {
  if (isNaN(s) || s < 0)
    throw new TypeError("Invalid max value");
  if (isNaN(t) || t < 0)
    throw new TypeError("Invalid ttl value");
  if (typeof e != "boolean")
    throw new TypeError("Invalid resetTtl value");
  return new Mf(s, t, e);
}
const kf = [
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui"
];
function _n(s) {
  const t = typeof s.fontSize == "number" ? `${s.fontSize}px` : s.fontSize;
  let e = s.fontFamily;
  Array.isArray(s.fontFamily) || (e = s.fontFamily.split(","));
  for (let i = e.length - 1; i >= 0; i--) {
    let r = e[i].trim();
    !/([\"\'])[^\'\"]+\1/.test(r) && !kf.includes(r) && (r = `"${r}"`), e[i] = r;
  }
  return `${s.fontStyle} ${s.fontVariant} ${s.fontWeight} ${t} ${e.join(",")}`;
}
const Pr = {
  // TextMetrics requires getImageData readback for measuring fonts.
  willReadFrequently: !0
}, Kt = class F {
  /**
   * Checking that we can use modern canvas 2D API.
   *
   * Note: This is an unstable API, Chrome < 94 use `textLetterSpacing`, later versions use `letterSpacing`.
   * @see TextMetrics.experimentalLetterSpacing
   * @see https://developer.mozilla.org/en-US/docs/Web/API/ICanvasRenderingContext2D/letterSpacing
   * @see https://developer.chrome.com/origintrials/#/view_trial/3585991203293757441
   */
  static get experimentalLetterSpacingSupported() {
    let t = F._experimentalLetterSpacingSupported;
    if (t === void 0) {
      const e = J.get().getCanvasRenderingContext2D().prototype;
      t = F._experimentalLetterSpacingSupported = "letterSpacing" in e || "textLetterSpacing" in e;
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
  constructor(t, e, i, r, n, a, o, h, l) {
    this.text = t, this.style = e, this.width = i, this.height = r, this.lines = n, this.lineWidths = a, this.lineHeight = o, this.maxLineWidth = h, this.fontProperties = l;
  }
  /**
   * Measures the supplied string of text and returns a Rectangle.
   * @param text - The text to measure.
   * @param style - The text style to use for measuring
   * @param canvas - optional specification of the canvas to use for measuring.
   * @param wordWrap
   * @returns Measured width and height of the text.
   */
  static measureText(t = " ", e, i = F._canvas, r = e.wordWrap) {
    const n = `${t}-${e.styleKey}-wordWrap-${r}`;
    if (F._measurementCache.has(n))
      return F._measurementCache.get(n);
    const a = _n(e), o = F.measureFont(a);
    o.fontSize === 0 && (o.fontSize = e.fontSize, o.ascent = e.fontSize);
    const h = F.__context;
    h.font = a;
    const c = (r ? F._wordWrap(t, e, i) : t).split(/(?:\r\n|\r|\n)/), u = new Array(c.length);
    let f = 0;
    for (let x = 0; x < c.length; x++) {
      const y = F._measureText(c[x], e.letterSpacing, h);
      u[x] = y, f = Math.max(f, y);
    }
    const d = e._stroke?.width || 0;
    let g = f + d;
    e.dropShadow && (g += e.dropShadow.distance);
    const p = e.lineHeight || o.fontSize;
    let m = Math.max(p, o.fontSize + d) + (c.length - 1) * (p + e.leading);
    e.dropShadow && (m += e.dropShadow.distance);
    const _ = new F(
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
    return F._measurementCache.set(n, _), _;
  }
  static _measureText(t, e, i) {
    let r = !1;
    F.experimentalLetterSpacingSupported && (F.experimentalLetterSpacing ? (i.letterSpacing = `${e}px`, i.textLetterSpacing = `${e}px`, r = !0) : (i.letterSpacing = "0px", i.textLetterSpacing = "0px"));
    const n = i.measureText(t);
    let a = n.width;
    const o = -n.actualBoundingBoxLeft;
    let l = n.actualBoundingBoxRight - o;
    if (a > 0)
      if (r)
        a -= e, l -= e;
      else {
        const c = (F.graphemeSegmenter(t).length - 1) * e;
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
  static _wordWrap(t, e, i = F._canvas) {
    const r = i.getContext("2d", Pr);
    let n = 0, a = "", o = "";
    const h = /* @__PURE__ */ Object.create(null), { letterSpacing: l, whiteSpace: c } = e, u = F._collapseSpaces(c), f = F._collapseNewlines(c);
    let d = !u;
    const g = e.wordWrapWidth + l, p = F._tokenize(t);
    for (let m = 0; m < p.length; m++) {
      let _ = p[m];
      if (F._isNewline(_)) {
        if (!f) {
          o += F._addLine(a), d = !u, a = "", n = 0;
          continue;
        }
        _ = " ";
      }
      if (u) {
        const y = F.isBreakingSpace(_), b = F.isBreakingSpace(a[a.length - 1]);
        if (y && b)
          continue;
      }
      const x = F._getFromCache(_, l, h, r);
      if (x > g)
        if (a !== "" && (o += F._addLine(a), a = "", n = 0), F.canBreakWords(_, e.breakWords)) {
          const y = F.wordWrapSplit(_);
          for (let b = 0; b < y.length; b++) {
            let w = y[b], A = w, v = 1;
            for (; y[b + v]; ) {
              const T = y[b + v];
              if (!F.canBreakChars(A, T, _, b, e.breakWords))
                w += T;
              else
                break;
              A = T, v++;
            }
            b += v - 1;
            const C = F._getFromCache(w, l, h, r);
            C + n > g && (o += F._addLine(a), d = !1, a = "", n = 0), a += w, n += C;
          }
        } else {
          a.length > 0 && (o += F._addLine(a), a = "", n = 0);
          const y = m === p.length - 1;
          o += F._addLine(_, !y), d = !1, a = "", n = 0;
        }
      else
        x + n > g && (d = !1, o += F._addLine(a), a = "", n = 0), (a.length > 0 || !F.isBreakingSpace(_) || d) && (a += _, n += x);
    }
    return o += F._addLine(a, !1), o;
  }
  /**
   * Convenience function for logging each line added during the wordWrap method.
   * @param line    - The line of text to add
   * @param newLine - Add new line character to end
   * @returns A formatted line
   */
  static _addLine(t, e = !0) {
    return t = F._trimRight(t), t = e ? `${t}
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
  static _getFromCache(t, e, i, r) {
    let n = i[t];
    return typeof n != "number" && (n = F._measureText(t, e, r) + e, i[t] = n), n;
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
      if (!F.isBreakingSpace(i))
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
    return typeof t != "string" ? !1 : F._newlines.includes(t.charCodeAt(0));
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
    return typeof t != "string" ? !1 : F._breakingSpaces.includes(t.charCodeAt(0));
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
    for (let r = 0; r < t.length; r++) {
      const n = t[r], a = t[r + 1];
      if (F.isBreakingSpace(n, a) || F._isNewline(n)) {
        i !== "" && (e.push(i), i = ""), n === "\r" && a === `
` ? (e.push(`\r
`), r++) : e.push(n);
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
  static canBreakChars(t, e, i, r, n) {
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
    return F.graphemeSegmenter(t);
  }
  /**
   * Calculates the ascent, descent and fontSize of a given font-style
   * @param font - String representing the style of the font
   * @returns Font properties object
   */
  static measureFont(t) {
    if (F._fonts[t])
      return F._fonts[t];
    const e = F._context;
    e.font = t;
    const i = e.measureText(F.METRICS_STRING + F.BASELINE_SYMBOL), r = {
      ascent: i.actualBoundingBoxAscent,
      descent: i.actualBoundingBoxDescent,
      fontSize: i.actualBoundingBoxAscent + i.actualBoundingBoxDescent
    };
    return F._fonts[t] = r, r;
  }
  /**
   * Clear font metrics in metrics cache.
   * @param {string} [font] - font name. If font name not set then clear cache for all fonts.
   */
  static clearMetrics(t = "") {
    t ? delete F._fonts[t] : F._fonts = {};
  }
  /**
   * Cached canvas element for measuring text
   * TODO: this should be private, but isn't because of backward compat, will fix later.
   * @ignore
   */
  static get _canvas() {
    if (!F.__canvas) {
      let t;
      try {
        const e = new OffscreenCanvas(0, 0);
        if (e.getContext("2d", Pr)?.measureText)
          return F.__canvas = e, e;
        t = J.get().createCanvas();
      } catch {
        t = J.get().createCanvas();
      }
      t.width = t.height = 10, F.__canvas = t;
    }
    return F.__canvas;
  }
  /**
   * TODO: this should be private, but isn't because of backward compat, will fix later.
   * @ignore
   */
  static get _context() {
    return F.__context || (F.__context = F._canvas.getContext("2d", Pr)), F.__context;
  }
};
Kt.METRICS_STRING = "|ÉqÅ";
Kt.BASELINE_SYMBOL = "M";
Kt.BASELINE_MULTIPLIER = 1.4;
Kt.HEIGHT_MULTIPLIER = 2;
Kt.graphemeSegmenter = (() => {
  if (typeof Intl?.Segmenter == "function") {
    const s = new Intl.Segmenter();
    return (t) => {
      const e = s.segment(t), i = [];
      let r = 0;
      for (const n of e)
        i[r++] = n.segment;
      return i;
    };
  }
  return (s) => [...s];
})();
Kt.experimentalLetterSpacing = !1;
Kt._fonts = {};
Kt._newlines = [
  10,
  // line feed
  13
  // carriage return
];
Kt._breakingSpaces = [
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
Kt._measurementCache = Bl(1e3);
let Ms = Kt;
const ja = [{ offset: 0, color: "white" }, { offset: 1, color: "black" }], Xn = class xn {
  constructor(...t) {
    this.uid = lt("fillGradient"), this._tick = 0, this.type = "linear", this.colorStops = [];
    let e = Ef(t);
    e = { ...e.type === "radial" ? xn.defaultRadialOptions : xn.defaultLinearOptions, ...Lh(e) }, this._textureSize = e.textureSize, this._wrapMode = e.wrapMode, e.type === "radial" ? (this.center = e.center, this.outerCenter = e.outerCenter ?? this.center, this.innerRadius = e.innerRadius, this.outerRadius = e.outerRadius, this.scale = e.scale, this.rotation = e.rotation) : (this.start = e.start, this.end = e.end), this.textureSpace = e.textureSpace, this.type = e.type, e.colorStops.forEach((r) => {
      this.addColorStop(r.offset, r.color);
    });
  }
  /**
   * Adds a color stop to the gradient
   * @param offset - Position of the stop (0-1)
   * @param color - Color of the stop
   * @returns This gradient instance for chaining
   */
  addColorStop(t, e) {
    return this.colorStops.push({ offset: t, color: nt.shared.setValue(e).toHexa() }), this;
  }
  /**
   * Builds the internal texture and transform for the gradient.
   * Called automatically when the gradient is first used.
   * @internal
   */
  buildLinearGradient() {
    if (this.texture)
      return;
    let { x: t, y: e } = this.start, { x: i, y: r } = this.end, n = i - t, a = r - e;
    const o = n < 0 || a < 0;
    if (this._wrapMode === "clamp-to-edge") {
      if (n < 0) {
        const m = t;
        t = i, i = m, n *= -1;
      }
      if (a < 0) {
        const m = e;
        e = r, r = m, a *= -1;
      }
    }
    const h = this.colorStops.length ? this.colorStops : ja, l = this._textureSize, { canvas: c, context: u } = qa(l, 1), f = o ? u.createLinearGradient(this._textureSize, 0, 0, 0) : u.createLinearGradient(0, 0, this._textureSize, 0);
    Ha(f, h), u.fillStyle = f, u.fillRect(0, 0, l, 1), this.texture = new V({
      source: new Xe({
        resource: c,
        addressMode: this._wrapMode
      })
    });
    const d = Math.sqrt(n * n + a * a), g = Math.atan2(a, n), p = new U();
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
    const t = this.colorStops.length ? this.colorStops : ja, e = this._textureSize, { canvas: i, context: r } = qa(e, e), { x: n, y: a } = this.center, { x: o, y: h } = this.outerCenter, l = this.innerRadius, c = this.outerRadius, u = o - c, f = h - c, d = e / (c * 2), g = (n - u) * d, p = (a - f) * d, m = r.createRadialGradient(
      g,
      p,
      l * d,
      (o - u) * d,
      (h - f) * d,
      c * d
    );
    Ha(m, t), r.fillStyle = t[t.length - 1].color, r.fillRect(0, 0, e, e), r.fillStyle = m, r.translate(g, p), r.rotate(this.rotation), r.scale(1, this.scale), r.translate(-g, -p), r.fillRect(0, 0, e, e), this.texture = new V({
      source: new Xe({
        resource: i,
        addressMode: this._wrapMode
      })
    });
    const _ = new U();
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
Xn.defaultLinearOptions = {
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
  colorStops: [],
  textureSpace: "local",
  type: "linear",
  textureSize: 256,
  wrapMode: "clamp-to-edge"
};
Xn.defaultRadialOptions = {
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
let pe = Xn;
function Ha(s, t) {
  for (let e = 0; e < t.length; e++) {
    const i = t[e];
    s.addColorStop(i.offset, i.color);
  }
}
function qa(s, t) {
  const e = J.get().createCanvas(s, t), i = e.getContext("2d");
  return { canvas: e, context: i };
}
function Ef(s) {
  let t = s[0] ?? {};
  return (typeof t == "number" || s[1]) && (G("8.5.2", "use options object instead"), t = {
    type: "linear",
    start: { x: s[0], y: s[1] },
    end: { x: s[2], y: s[3] },
    textureSpace: s[4],
    textureSize: s[5] ?? pe.defaultLinearOptions.textureSize
  }), t;
}
const Ka = {
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
class qs {
  constructor(t, e) {
    this.uid = lt("fillPattern"), this._tick = 0, this.transform = new U(), this.texture = t, this.transform.scale(
      1 / t.frame.width,
      1 / t.frame.height
    ), e && (t.source.style.addressModeU = Ka[e].addressModeU, t.source.style.addressModeV = Ka[e].addressModeV);
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
var Rf = If, Mr = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 }, Ff = /([astvzqmhlc])([^astvzqmhlc]*)/ig;
function If(s) {
  var t = [];
  return s.replace(Ff, function(e, i, r) {
    var n = i.toLowerCase();
    for (r = Of(r), n == "m" && r.length > 2 && (t.push([i].concat(r.splice(0, 2))), n = "l", i = i == "m" ? "l" : "L"); ; ) {
      if (r.length == Mr[n])
        return r.unshift(i), t.push(r);
      if (r.length < Mr[n]) throw new Error("malformed path data");
      t.push([i].concat(r.splice(0, Mr[n])));
    }
  }), t;
}
var Bf = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;
function Of(s) {
  var t = s.match(Bf);
  return t ? t.map(Number) : [];
}
const Lf = /* @__PURE__ */ Bo(Rf);
function Df(s, t) {
  const e = Lf(s), i = [];
  let r = null, n = 0, a = 0;
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
        t.closePath(), i.length > 0 && (r = i.pop(), r ? (n = r.startX, a = r.startY) : (n = 0, a = 0)), r = null;
        break;
      default:
        Q(`Unknown SVG path command: ${l}`);
    }
    l !== "Z" && l !== "z" && r === null && (r = { startX: n, startY: a }, i.push(r));
  }
  return t;
}
class jn {
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
    return new jn(this.x, this.y, this.radius);
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
    let r = this.x - t, n = this.y - e;
    return r *= r, n *= n, r + n <= i;
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
  strokeContains(t, e, i, r = 0.5) {
    if (this.radius === 0)
      return !1;
    const n = this.x - t, a = this.y - e, o = this.radius, h = (1 - r) * i, l = Math.sqrt(n * n + a * a);
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
    return t || (t = new ut()), t.x = this.x - this.radius, t.y = this.y - this.radius, t.width = this.radius * 2, t.height = this.radius * 2, t;
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
class Hn {
  /**
   * @param x - The X coordinate of the center of this ellipse
   * @param y - The Y coordinate of the center of this ellipse
   * @param halfWidth - The half width of this ellipse
   * @param halfHeight - The half height of this ellipse
   */
  constructor(t = 0, e = 0, i = 0, r = 0) {
    this.type = "ellipse", this.x = t, this.y = e, this.halfWidth = i, this.halfHeight = r;
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
    return new Hn(this.x, this.y, this.halfWidth, this.halfHeight);
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
    let i = (t - this.x) / this.halfWidth, r = (e - this.y) / this.halfHeight;
    return i *= i, r *= r, i + r <= 1;
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
  strokeContains(t, e, i, r = 0.5) {
    const { halfWidth: n, halfHeight: a } = this;
    if (n <= 0 || a <= 0)
      return !1;
    const o = i * (1 - r), h = i - o, l = n - h, c = a - h, u = n + o, f = a + o, d = t - this.x, g = e - this.y, p = d * d / (l * l) + g * g / (c * c), m = d * d / (u * u) + g * g / (f * f);
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
    return t || (t = new ut()), t.x = this.x - this.halfWidth, t.y = this.y - this.halfHeight, t.width = this.halfWidth * 2, t.height = this.halfHeight * 2, t;
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
function zf(s, t, e, i, r, n) {
  const a = s - e, o = t - i, h = r - e, l = n - i, c = a * h + o * l, u = h * h + l * l;
  let f = -1;
  u !== 0 && (f = c / u);
  let d, g;
  f < 0 ? (d = e, g = i) : f > 1 ? (d = r, g = n) : (d = e + f * h, g = i + f * l);
  const p = s - d, m = t - g;
  return p * p + m * m;
}
let Gf, Uf;
class Ni {
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
      for (let r = 0, n = e.length; r < n; r++)
        i.push(e[r].x, e[r].y);
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
    for (let r = 0; r < i; r += 2) {
      const n = e[r], a = e[r + 1], o = e[(r + 2) % i], h = e[(r + 3) % i];
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
    const e = this.getBounds(Gf), i = t.getBounds(Uf);
    if (!e.containsRect(i))
      return !1;
    const r = t.points;
    for (let n = 0; n < r.length; n += 2) {
      const a = r[n], o = r[n + 1];
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
    const t = this.points.slice(), e = new Ni(t);
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
    const r = this.points.length / 2;
    for (let n = 0, a = r - 1; n < r; a = n++) {
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
  strokeContains(t, e, i, r = 0.5) {
    const n = i * i, a = n * (1 - r), o = n - a, { points: h } = this, l = h.length - (this.closePath ? 0 : 2);
    for (let c = 0; c < l; c += 2) {
      const u = h[c], f = h[c + 1], d = h[(c + 2) % h.length], g = h[(c + 3) % h.length], p = zf(t, e, u, f, d, g), m = Math.sign((d - u) * (e - f) - (g - f) * (t - u));
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
    t || (t = new ut());
    const e = this.points;
    let i = 1 / 0, r = -1 / 0, n = 1 / 0, a = -1 / 0;
    for (let o = 0, h = e.length; o < h; o += 2) {
      const l = e[o], c = e[o + 1];
      i = l < i ? l : i, r = l > r ? l : r, n = c < n ? c : n, a = c > a ? c : a;
    }
    return t.x = i, t.width = r - i, t.y = n, t.height = a - n, t;
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
    return G("8.11.0", "Polygon.lastX is deprecated, please use Polygon.lastX instead."), this.points[this.points.length - 2];
  }
  /**
   * Get the last Y coordinate of the polygon.
   * @readonly
   * @deprecated since 8.11.0, use {@link Polygon.lastY} instead.
   */
  get y() {
    return G("8.11.0", "Polygon.y is deprecated, please use Polygon.lastY instead."), this.points[this.points.length - 1];
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
const bs = (s, t, e, i, r, n, a) => {
  const o = s - e, h = t - i, l = Math.sqrt(o * o + h * h);
  return l >= r - n && l <= r + a;
};
class qn {
  /**
   * @param x - The X coordinate of the upper-left corner of the rounded rectangle
   * @param y - The Y coordinate of the upper-left corner of the rounded rectangle
   * @param width - The overall width of this rounded rectangle
   * @param height - The overall height of this rounded rectangle
   * @param radius - Controls the radius of the rounded corners
   */
  constructor(t = 0, e = 0, i = 0, r = 0, n = 20) {
    this.type = "roundedRectangle", this.x = t, this.y = e, this.width = i, this.height = r, this.radius = n;
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
    return t || (t = new ut()), t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t;
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
    return new qn(this.x, this.y, this.width, this.height, this.radius);
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
      let r = t - (this.x + i), n = e - (this.y + i);
      const a = i * i;
      if (r * r + n * n <= a || (r = t - (this.x + this.width - i), r * r + n * n <= a) || (n = e - (this.y + this.height - i), r * r + n * n <= a) || (r = t - (this.x + i), r * r + n * n <= a))
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
  strokeContains(t, e, i, r = 0.5) {
    const { x: n, y: a, width: o, height: h, radius: l } = this, c = i * (1 - r), u = i - c, f = n + l, d = a + l, g = o - l * 2, p = h - l * 2, m = n + o, _ = a + h;
    return (t >= n - c && t <= n + u || t >= m - u && t <= m + c) && e >= d && e <= d + p || (e >= a - c && e <= a + u || e >= _ - u && e <= _ + c) && t >= f && t <= f + g ? !0 : (
      // Top-left
      t < f && e < d && bs(
        t,
        e,
        f,
        d,
        l,
        u,
        c
      ) || t > m - l && e < d && bs(
        t,
        e,
        m - l,
        d,
        l,
        u,
        c
      ) || t > m - l && e > _ - l && bs(
        t,
        e,
        m - l,
        _ - l,
        l,
        u,
        c
      ) || t < f && e > _ - l && bs(
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
const Ol = {};
function Nf(s, t, e) {
  let i = 2166136261;
  for (let r = 0; r < t; r++)
    i ^= s[r].uid, i = Math.imul(i, 16777619), i >>>= 0;
  return Ol[i] || Wf(s, t, i, e);
}
function Wf(s, t, e, i) {
  const r = {};
  let n = 0;
  for (let o = 0; o < i; o++) {
    const h = o < t ? s[o] : V.EMPTY.source;
    r[n++] = h.source, r[n++] = h.style;
  }
  const a = new Ps(r);
  return Ol[e] = a, a;
}
class Za {
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
function Qa(s, t) {
  const e = s.byteLength / 8 | 0, i = new Float64Array(s, 0, e);
  new Float64Array(t, 0, e).set(i);
  const n = s.byteLength - e * 8;
  if (n > 0) {
    const a = new Uint8Array(s, e * 8, n);
    new Uint8Array(t, e * 8, n).set(a);
  }
}
const Vf = {
  normal: "normal-npm",
  add: "add-npm",
  screen: "screen-npm"
};
var Yf = /* @__PURE__ */ ((s) => (s[s.DISABLED = 0] = "DISABLED", s[s.RENDERING_MASK_ADD = 1] = "RENDERING_MASK_ADD", s[s.MASK_ACTIVE = 2] = "MASK_ACTIVE", s[s.INVERSE_MASK_ACTIVE = 3] = "INVERSE_MASK_ACTIVE", s[s.RENDERING_MASK_REMOVE = 4] = "RENDERING_MASK_REMOVE", s[s.NONE = 5] = "NONE", s))(Yf || {});
function Ja(s, t) {
  return t.alphaMode === "no-premultiply-alpha" && Vf[s] || s;
}
const $f = [
  "precision mediump float;",
  "void main(void){",
  "float test = 0.1;",
  "%forloop%",
  "gl_FragColor = vec4(0.0);",
  "}"
].join(`
`);
function Xf(s) {
  let t = "";
  for (let e = 0; e < s; ++e)
    e > 0 && (t += `
else `), e < s - 1 && (t += `if(test == ${e}.0){}`);
  return t;
}
function jf(s, t) {
  if (s === 0)
    throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
  const e = t.createShader(t.FRAGMENT_SHADER);
  try {
    for (; ; ) {
      const i = $f.replace(/%forloop%/gi, Xf(s));
      if (t.shaderSource(e, i), t.compileShader(e), !t.getShaderParameter(e, t.COMPILE_STATUS))
        s = s / 2 | 0;
      else
        break;
    }
  } finally {
    t.deleteShader(e);
  }
  return s;
}
let Ze = null;
function Hf() {
  if (Ze)
    return Ze;
  const s = dl();
  return Ze = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), Ze = jf(
    Ze,
    s
  ), s.getExtension("WEBGL_lose_context")?.loseContext(), Ze;
}
class qf {
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
class Kf {
  constructor() {
    this.renderPipeId = "batch", this.action = "startBatch", this.start = 0, this.size = 0, this.textures = new qf(), this.blendMode = "normal", this.topology = "triangle-strip", this.canBundle = !0;
  }
  destroy() {
    this.textures = null, this.gpuBindGroup = null, this.bindGroup = null, this.batcher = null;
  }
}
const Wi = [];
let Us = 0;
ns.register({
  clear: () => {
    if (Wi.length > 0)
      for (const s of Wi)
        s && s.destroy();
    Wi.length = 0, Us = 0;
  }
});
function to() {
  return Us > 0 ? Wi[--Us] : new Kf();
}
function eo(s) {
  Wi[Us++] = s;
}
let Pi = 0;
const Ll = class Dl {
  constructor(t) {
    this.uid = lt("batcher"), this.dirty = !0, this.batchIndex = 0, this.batches = [], this._elements = [], t = { ...Dl.defaultOptions, ...t }, t.maxTextures || (G("v8.8.0", "maxTextures is a required option for Batcher now, please pass it in the options"), t.maxTextures = Hf());
    const { maxTextures: e, attributesInitialSize: i, indicesInitialSize: r } = t;
    this.attributeBuffer = new Za(i * 4), this.indexBuffer = new Uint16Array(r), this.maxTextures = e;
  }
  begin() {
    this.elementSize = 0, this.elementStart = 0, this.indexSize = 0, this.attributeSize = 0;
    for (let t = 0; t < this.batchIndex; t++)
      eo(this.batches[t]);
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
    let i = to(), r = i.textures;
    r.clear();
    const n = e[this.elementStart];
    let a = Ja(n.blendMode, n.texture._source), o = n.topology;
    this.attributeSize * 4 > this.attributeBuffer.size && this._resizeAttributeBuffer(this.attributeSize * 4), this.indexSize > this.indexBuffer.length && this._resizeIndexBuffer(this.indexSize);
    const h = this.attributeBuffer.float32View, l = this.attributeBuffer.uint32View, c = this.indexBuffer;
    let u = this._batchIndexSize, f = this._batchIndexStart, d = "startBatch";
    const g = this.maxTextures;
    for (let p = this.elementStart; p < this.elementSize; ++p) {
      const m = e[p];
      e[p] = null;
      const x = m.texture._source, y = Ja(m.blendMode, x), b = a !== y || o !== m.topology;
      if (x._batchTick === Pi && !b) {
        m._textureId = x._textureBindLocation, u += m.indexSize, m.packAsQuad ? (this.packQuadAttributes(
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
      x._batchTick = Pi, (r.count >= g || b) && (this._finishBatch(
        i,
        f,
        u - f,
        r,
        a,
        o,
        t,
        d
      ), d = "renderBatch", f = u, a = y, o = m.topology, i = to(), r = i.textures, r.clear(), ++Pi), m._textureId = x._textureBindLocation = r.count, r.ids[x.uid] = r.count, r.textures[r.count++] = x, m._batch = i, u += m.indexSize, m.packAsQuad ? (this.packQuadAttributes(
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
    r.count > 0 && (this._finishBatch(
      i,
      f,
      u - f,
      r,
      a,
      o,
      t,
      d
    ), f = u, ++Pi), this.elementStart = this.elementSize, this._batchIndexStart = f, this._batchIndexSize = u;
  }
  _finishBatch(t, e, i, r, n, a, o, h) {
    t.gpuBindGroup = null, t.bindGroup = null, t.action = h, t.batcher = this, t.textures = r, t.blendMode = n, t.topology = a, t.start = e, t.size = i, ++Pi, this.batches[this.batchIndex++] = t, o.add(t);
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
    const e = Math.max(t, this.attributeBuffer.size * 2), i = new Za(e);
    Qa(this.attributeBuffer.rawBinaryData, i.rawBinaryData), this.attributeBuffer = i;
  }
  _resizeIndexBuffer(t) {
    const e = this.indexBuffer;
    let i = Math.max(t, e.length * 1.5);
    i += i % 2;
    const r = i > 65535 ? new Uint32Array(i) : new Uint16Array(i);
    if (r.BYTES_PER_ELEMENT !== e.BYTES_PER_ELEMENT)
      for (let n = 0; n < e.length; n++)
        r[n] = e[n];
    else
      Qa(e.buffer, r.buffer);
    this.indexBuffer = r;
  }
  packQuadIndex(t, e, i) {
    t[e] = i + 0, t[e + 1] = i + 1, t[e + 2] = i + 2, t[e + 3] = i + 0, t[e + 4] = i + 2, t[e + 5] = i + 3;
  }
  packIndex(t, e, i, r) {
    const n = t.indices, a = t.indexSize, o = t.indexOffset, h = t.attributeOffset;
    for (let l = 0; l < a; l++)
      e[i++] = r + n[l + o] - h;
  }
  /**
   * Destroys the batch and its resources.
   * @param options - destruction options
   * @param options.shader - whether to destroy the associated shader
   */
  destroy(t = {}) {
    if (this.batches !== null) {
      for (let e = 0; e < this.batchIndex; e++)
        eo(this.batches[e]);
      this.batches = null, this.geometry.destroy(!0), this.geometry = null, t.shader && (this.shader?.destroy(), this.shader = null);
      for (let e = 0; e < this._elements.length; e++)
        this._elements[e] && (this._elements[e]._batch = null);
      this._elements = null, this.indexBuffer = null, this.attributeBuffer.destroy(), this.attributeBuffer = null;
    }
  }
};
Ll.defaultOptions = {
  maxTextures: null,
  attributesInitialSize: 4,
  indicesInitialSize: 6
};
let Zf = Ll;
var St = /* @__PURE__ */ ((s) => (s[s.MAP_READ = 1] = "MAP_READ", s[s.MAP_WRITE = 2] = "MAP_WRITE", s[s.COPY_SRC = 4] = "COPY_SRC", s[s.COPY_DST = 8] = "COPY_DST", s[s.INDEX = 16] = "INDEX", s[s.VERTEX = 32] = "VERTEX", s[s.UNIFORM = 64] = "UNIFORM", s[s.STORAGE = 128] = "STORAGE", s[s.INDIRECT = 256] = "INDIRECT", s[s.QUERY_RESOLVE = 512] = "QUERY_RESOLVE", s[s.STATIC = 1024] = "STATIC", s))(St || {});
class es extends Ht {
  /**
   * Creates a new Buffer with the given options
   * @param options - the options for the buffer
   */
  constructor(t) {
    let { data: e, size: i } = t;
    const { usage: r, label: n, shrinkToFit: a } = t;
    super(), this._gpuData = /* @__PURE__ */ Object.create(null), this._gcLastUsed = -1, this.autoGarbageCollect = !0, this.uid = lt("buffer"), this._resourceType = "buffer", this._resourceId = lt("resource"), this._touched = 0, this._updateID = 1, this._dataInt32 = null, this.shrinkToFit = !0, this.destroyed = !1, e instanceof Array && (e = new Float32Array(e)), this._data = e, i ?? (i = e?.byteLength);
    const o = !!e;
    this.descriptor = {
      size: i,
      usage: r,
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
    return !!(this.descriptor.usage & St.STATIC);
  }
  set static(t) {
    t ? this.descriptor.usage |= St.STATIC : this.descriptor.usage &= ~St.STATIC;
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
    const r = this._data;
    if (this._data = t, this._dataInt32 = null, !r || r.length !== t.length) {
      !this.shrinkToFit && r && t.byteLength < r.byteLength ? i && this.emit("update", this) : (this.descriptor.size = t.byteLength, this._resourceId = lt("resource"), this.emit("change", this));
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
function zl(s, t) {
  if (!(s instanceof es)) {
    let e = t ? St.INDEX : St.VERTEX;
    s instanceof Array && (t ? (s = new Uint32Array(s), e = St.INDEX | St.COPY_DST) : (s = new Float32Array(s), e = St.VERTEX | St.COPY_DST)), s = new es({
      data: s,
      label: t ? "index-mesh-buffer" : "vertex-mesh-buffer",
      usage: e
    });
  }
  return s;
}
function Qf(s, t, e) {
  const i = s.getAttribute(t);
  if (!i)
    return e.minX = 0, e.minY = 0, e.maxX = 0, e.maxY = 0, e;
  const r = i.buffer.data;
  let n = 1 / 0, a = 1 / 0, o = -1 / 0, h = -1 / 0;
  const l = r.BYTES_PER_ELEMENT, c = (i.offset || 0) / l, u = (i.stride || 2 * 4) / l;
  for (let f = c; f < r.length; f += u) {
    const d = r[f], g = r[f + 1];
    d > o && (o = d), g > h && (h = g), d < n && (n = d), g < a && (a = g);
  }
  return e.minX = n, e.minY = a, e.maxX = o, e.maxY = h, e;
}
function Jf(s) {
  return (s instanceof es || Array.isArray(s) || s.BYTES_PER_ELEMENT) && (s = {
    buffer: s
  }), s.buffer = zl(s.buffer, !1), s;
}
class tp extends Ht {
  /**
   * Create a new instance of a geometry
   * @param options - The options for the geometry.
   */
  constructor(t = {}) {
    super(), this._gpuData = /* @__PURE__ */ Object.create(null), this.autoGarbageCollect = !0, this._gcLastUsed = -1, this.uid = lt("geometry"), this._layoutKey = 0, this.instanceCount = 1, this._bounds = new jt(), this._boundsDirty = !0;
    const { attributes: e, indexBuffer: i, topology: r } = t;
    if (this.buffers = [], this.attributes = {}, e)
      for (const n in e)
        this.addAttribute(n, e[n]);
    this.instanceCount = t.instanceCount ?? 1, i && this.addIndex(i), this.topology = r || "triangle-list";
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
    const i = Jf(e);
    this.buffers.indexOf(i.buffer) === -1 && (this.buffers.push(i.buffer), i.buffer.on("update", this.onBufferUpdate, this), i.buffer.on("change", this.onBufferUpdate, this)), this.attributes[t] = i;
  }
  /**
   * Adds an index buffer to the geometry.
   * @param indexBuffer - The index buffer to add. Can be a Buffer, TypedArray, or an array of numbers.
   */
  addIndex(t) {
    this.indexBuffer = zl(t, !0), this.buffers.push(this.indexBuffer);
  }
  /** Returns the bounds of the geometry. */
  get bounds() {
    return this._boundsDirty ? (this._boundsDirty = !1, Qf(this, "aPosition", this._bounds)) : this._bounds;
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
const ep = new Float32Array(1), ip = new Uint32Array(1);
class sp extends tp {
  constructor() {
    const e = new es({
      data: ep,
      label: "attribute-batch-buffer",
      usage: St.VERTEX | St.COPY_DST,
      shrinkToFit: !1
    }), i = new es({
      data: ip,
      label: "index-batch-buffer",
      usage: St.INDEX | St.COPY_DST,
      // | BufferUsage.STATIC,
      shrinkToFit: !1
    }), r = 6 * 4;
    super({
      attributes: {
        aPosition: {
          buffer: e,
          format: "float32x2",
          stride: r,
          offset: 0
        },
        aUV: {
          buffer: e,
          format: "float32x2",
          stride: r,
          offset: 2 * 4
        },
        aColor: {
          buffer: e,
          format: "unorm8x4",
          stride: r,
          offset: 4 * 4
        },
        aTextureIdAndRound: {
          buffer: e,
          format: "uint16x2",
          stride: r,
          offset: 5 * 4
        }
      },
      indexBuffer: i
    });
  }
}
function io(s, t, e) {
  if (s)
    for (const i in s) {
      const r = i.toLocaleLowerCase(), n = t[r];
      if (n) {
        let a = s[i];
        i === "header" && (a = a.replace(/@in\s+[^;]+;\s*/g, "").replace(/@out\s+[^;]+;\s*/g, "")), e && n.push(`//----${e}----//`), n.push(a);
      } else
        Q(`${i} placement hook does not exist in shader`);
    }
}
const rp = /\{\{(.*?)\}\}/g;
function so(s) {
  const t = {};
  return (s.match(rp)?.map((i) => i.replace(/[{()}]/g, "")) ?? []).forEach((i) => {
    t[i] = [];
  }), t;
}
function ro(s, t) {
  let e;
  const i = /@in\s+([^;]+);/g;
  for (; (e = i.exec(s)) !== null; )
    t.push(e[1]);
}
function no(s, t, e = !1) {
  const i = [];
  ro(t, i), s.forEach((o) => {
    o.header && ro(o.header, i);
  });
  const r = i;
  e && r.sort();
  const n = r.map((o, h) => `       @location(${h}) ${o},`).join(`
`);
  let a = t.replace(/@in\s+[^;]+;\s*/g, "");
  return a = a.replace("{{in}}", `
${n}
`), a;
}
function ao(s, t) {
  let e;
  const i = /@out\s+([^;]+);/g;
  for (; (e = i.exec(s)) !== null; )
    t.push(e[1]);
}
function np(s) {
  const e = /\b(\w+)\s*:/g.exec(s);
  return e ? e[1] : "";
}
function ap(s) {
  const t = /@.*?\s+/g;
  return s.replace(t, "");
}
function op(s, t) {
  const e = [];
  ao(t, e), s.forEach((h) => {
    h.header && ao(h.header, e);
  });
  let i = 0;
  const r = e.sort().map((h) => h.indexOf("builtin") > -1 ? h : `@location(${i++}) ${h}`).join(`,
`), n = e.sort().map((h) => `       var ${ap(h)};`).join(`
`), a = `return VSOutput(
            ${e.sort().map((h) => ` ${np(h)}`).join(`,
`)});`;
  let o = t.replace(/@out\s+[^;]+;\s*/g, "");
  return o = o.replace("{{struct}}", `
${r}
`), o = o.replace("{{start}}", `
${n}
`), o = o.replace("{{return}}", `
${a}
`), o;
}
function oo(s, t) {
  let e = s;
  for (const i in t) {
    const r = t[i];
    r.join(`
`).length ? e = e.replace(`{{${i}}}`, `//-----${i} START-----//
${r.join(`
`)}
//----${i} FINISH----//`) : e = e.replace(`{{${i}}}`, "");
  }
  return e;
}
const ye = /* @__PURE__ */ Object.create(null), kr = /* @__PURE__ */ new Map();
let hp = 0;
function lp({
  template: s,
  bits: t
}) {
  const e = Gl(s, t);
  if (ye[e])
    return ye[e];
  const { vertex: i, fragment: r } = up(s, t);
  return ye[e] = Ul(i, r, t), ye[e];
}
function cp({
  template: s,
  bits: t
}) {
  const e = Gl(s, t);
  return ye[e] || (ye[e] = Ul(s.vertex, s.fragment, t)), ye[e];
}
function up(s, t) {
  const e = t.map((a) => a.vertex).filter((a) => !!a), i = t.map((a) => a.fragment).filter((a) => !!a);
  let r = no(e, s.vertex, !0);
  r = op(e, r);
  const n = no(i, s.fragment, !0);
  return {
    vertex: r,
    fragment: n
  };
}
function Gl(s, t) {
  return t.map((e) => (kr.has(e) || kr.set(e, hp++), kr.get(e))).sort((e, i) => e - i).join("-") + s.vertex + s.fragment;
}
function Ul(s, t, e) {
  const i = so(s), r = so(t);
  return e.forEach((n) => {
    io(n.vertex, i, n.name), io(n.fragment, r, n.name);
  }), {
    vertex: oo(s, i),
    fragment: oo(t, r)
  };
}
const dp = (
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
), fp = (
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
), pp = (
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
), mp = (
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
), gp = {
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
}, _p = {
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
function xp({ bits: s, name: t }) {
  const e = lp({
    template: {
      fragment: fp,
      vertex: dp
    },
    bits: [
      gp,
      ...s
    ]
  });
  return _i.from({
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
function yp({ bits: s, name: t }) {
  return new js({
    name: t,
    ...cp({
      template: {
        vertex: pp,
        fragment: mp
      },
      bits: [
        _p,
        ...s
      ]
    })
  });
}
const bp = {
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
}, wp = {
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
}, Er = {};
function vp(s) {
  const t = [];
  if (s === 1)
    t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"), t.push("@group(1) @binding(1) var textureSampler1: sampler;");
  else {
    let e = 0;
    for (let i = 0; i < s; i++)
      t.push(`@group(1) @binding(${e++}) var textureSource${i + 1}: texture_2d<f32>;`), t.push(`@group(1) @binding(${e++}) var textureSampler${i + 1}: sampler;`);
  }
  return t.join(`
`);
}
function Ap(s) {
  const t = [];
  if (s === 1)
    t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");
  else {
    t.push("switch vTextureId {");
    for (let e = 0; e < s; e++)
      e === s - 1 ? t.push("  default:{") : t.push(`  case ${e}:{`), t.push(`      outColor = textureSampleGrad(textureSource${e + 1}, textureSampler${e + 1}, vUV, uvDx, uvDy);`), t.push("      break;}");
    t.push("}");
  }
  return t.join(`
`);
}
function Sp(s) {
  return Er[s] || (Er[s] = {
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

                ${vp(s)}
            `,
      main: `
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${Ap(s)}
            `
    }
  }), Er[s];
}
const Rr = {};
function Tp(s) {
  const t = [];
  for (let e = 0; e < s; e++)
    e > 0 && t.push("else"), e < s - 1 && t.push(`if(vTextureId < ${e}.5)`), t.push("{"), t.push(`	outColor = texture(uTextures[${e}], vUV);`), t.push("}");
  return t.join(`
`);
}
function Cp(s) {
  return Rr[s] || (Rr[s] = {
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

                uniform sampler2D uTextures[${s}];

            `,
      main: `

                ${Tp(s)}
            `
    }
  }), Rr[s];
}
const Pp = {
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
}, Mp = {
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
}, ho = {};
function kp(s) {
  let t = ho[s];
  if (t)
    return t;
  const e = new Int32Array(s);
  for (let i = 0; i < s; i++)
    e[i] = i;
  return t = ho[s] = new _l({
    uTextures: { value: e, type: "i32", size: s }
  }, { isStatic: !0 }), t;
}
class lo extends Hs {
  constructor(t) {
    const e = yp({
      name: "batch",
      bits: [
        wp,
        Cp(t),
        Mp
      ]
    }), i = xp({
      name: "batch",
      bits: [
        bp,
        Sp(t),
        Pp
      ]
    });
    super({
      glProgram: e,
      gpuProgram: i,
      resources: {
        batchSamplers: kp(t)
      }
    }), this.maxTextures = t;
  }
}
let Mi = null;
const Nl = class Wl extends Zf {
  constructor(t) {
    super(t), this.geometry = new sp(), this.name = Wl.extension.name, this.vertexSize = 6, Mi ?? (Mi = new lo(t.maxTextures)), this.shader = Mi;
  }
  /**
   * Packs the attributes of a DefaultBatchableMeshElement into the provided views.
   * @param element - The DefaultBatchableMeshElement to pack.
   * @param float32View - The Float32Array view to pack into.
   * @param uint32View - The Uint32Array view to pack into.
   * @param index - The starting index in the views.
   * @param textureId - The texture ID to use.
   */
  packAttributes(t, e, i, r, n) {
    const a = n << 16 | t.roundPixels & 65535, o = t.transform, h = o.a, l = o.b, c = o.c, u = o.d, f = o.tx, d = o.ty, { positions: g, uvs: p } = t, m = t.color, _ = t.attributeOffset, x = _ + t.attributeSize;
    for (let y = _; y < x; y++) {
      const b = y * 2, w = g[b], A = g[b + 1];
      e[r++] = h * w + c * A + f, e[r++] = u * A + l * w + d, e[r++] = p[b], e[r++] = p[b + 1], i[r++] = m, i[r++] = a;
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
  packQuadAttributes(t, e, i, r, n) {
    const a = t.texture, o = t.transform, h = o.a, l = o.b, c = o.c, u = o.d, f = o.tx, d = o.ty, g = t.bounds, p = g.maxX, m = g.minX, _ = g.maxY, x = g.minY, y = a.uvs, b = t.color, w = n << 16 | t.roundPixels & 65535;
    e[r + 0] = h * m + c * x + f, e[r + 1] = u * x + l * m + d, e[r + 2] = y.x0, e[r + 3] = y.y0, i[r + 4] = b, i[r + 5] = w, e[r + 6] = h * p + c * x + f, e[r + 7] = u * x + l * p + d, e[r + 8] = y.x1, e[r + 9] = y.y1, i[r + 10] = b, i[r + 11] = w, e[r + 12] = h * p + c * _ + f, e[r + 13] = u * _ + l * p + d, e[r + 14] = y.x2, e[r + 15] = y.y2, i[r + 16] = b, i[r + 17] = w, e[r + 18] = h * m + c * _ + f, e[r + 19] = u * _ + l * m + d, e[r + 20] = y.x3, e[r + 21] = y.y3, i[r + 22] = b, i[r + 23] = w;
  }
  /**
   * Updates the maximum number of textures that can be used in the shader.
   * @param maxTextures - The maximum number of textures that can be used in the shader.
   * @internal
   */
  _updateMaxTextures(t) {
    this.shader.maxTextures !== t && (Mi = new lo(t), this.shader = Mi);
  }
  destroy() {
    this.shader = null, super.destroy();
  }
};
Nl.extension = {
  type: [
    L.Batcher
  ],
  name: "default"
};
let Ep = Nl;
class Rp {
  constructor(t) {
    this.items = /* @__PURE__ */ Object.create(null);
    const { renderer: e, type: i, onUnload: r, priority: n, name: a } = t;
    this._renderer = e, e.gc.addResourceHash(this, "items", i, n ?? 0), this._onUnload = r, this.name = a;
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
function Fp(s, t, e, i, r, n, a, o = null) {
  let h = 0;
  e *= t, r *= n;
  const l = o.a, c = o.b, u = o.c, f = o.d, d = o.tx, g = o.ty;
  for (; h < a; ) {
    const p = s[e], m = s[e + 1];
    i[r] = l * p + u * m + d, i[r + 1] = c * p + f * m + g, r += n, e += t, h++;
  }
}
function Ip(s, t, e, i) {
  let r = 0;
  for (t *= e; r < i; )
    s[t] = 0, s[t + 1] = 0, t += e, r++;
}
function Vl(s, t, e, i, r) {
  const n = t.a, a = t.b, o = t.c, h = t.d, l = t.tx, c = t.ty;
  e || (e = 0), i || (i = 2), r || (r = s.length / i - e);
  let u = e * i;
  for (let f = 0; f < r; f++) {
    const d = s[u], g = s[u + 1];
    s[u] = n * d + o * g + l, s[u + 1] = a * d + h * g + c, u += i;
  }
}
const Bp = new U();
class Yl {
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
    return i ? Xh(e, i.groupColor) + (this.alpha * i.groupAlpha * 255 << 24) : e + (this.alpha * 255 << 24);
  }
  get transform() {
    return this.renderable?.groupTransform || Bp;
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
const is = {
  extension: {
    type: L.ShapeBuilder,
    name: "circle"
  },
  build(s, t) {
    let e, i, r, n, a, o;
    if (s.type === "circle") {
      const b = s;
      if (a = o = b.radius, a <= 0)
        return !1;
      e = b.x, i = b.y, r = n = 0;
    } else if (s.type === "ellipse") {
      const b = s;
      if (a = b.halfWidth, o = b.halfHeight, a <= 0 || o <= 0)
        return !1;
      e = b.x, i = b.y, r = n = 0;
    } else {
      const b = s, w = b.width / 2, A = b.height / 2;
      e = b.x + w, i = b.y + A, a = o = Math.max(0, Math.min(b.radius, Math.min(w, A))), r = w - a, n = A - o;
    }
    if (r < 0 || n < 0)
      return !1;
    const h = Math.ceil(2.3 * Math.sqrt(a + o)), l = h * 8 + (r ? 4 : 0) + (n ? 4 : 0);
    if (l === 0)
      return !1;
    if (h === 0)
      return t[0] = t[6] = e + r, t[1] = t[3] = i + n, t[2] = t[4] = e - r, t[5] = t[7] = i - n, !0;
    let c = 0, u = h * 4 + (r ? 2 : 0) + 2, f = u, d = l, g = r + a, p = n, m = e + g, _ = e - g, x = i + p;
    if (t[c++] = m, t[c++] = x, t[--u] = x, t[--u] = _, n) {
      const b = i - p;
      t[f++] = _, t[f++] = b, t[--d] = b, t[--d] = m;
    }
    for (let b = 1; b < h; b++) {
      const w = Math.PI / 2 * (b / h), A = r + Math.cos(w) * a, v = n + Math.sin(w) * o, C = e + A, T = e - A, P = i + v, k = i - v;
      t[c++] = C, t[c++] = P, t[--u] = P, t[--u] = T, t[f++] = T, t[f++] = k, t[--d] = k, t[--d] = C;
    }
    g = r, p = n + o, m = e + g, _ = e - g, x = i + p;
    const y = i - p;
    return t[c++] = m, t[c++] = x, t[--d] = y, t[--d] = m, r && (t[c++] = _, t[c++] = x, t[--d] = y, t[--d] = _), !0;
  },
  triangulate(s, t, e, i, r, n) {
    if (s.length === 0)
      return;
    let a = 0, o = 0;
    for (let c = 0; c < s.length; c += 2)
      a += s[c], o += s[c + 1];
    a /= s.length / 2, o /= s.length / 2;
    let h = i;
    t[h * e] = a, t[h * e + 1] = o;
    const l = h++;
    for (let c = 0; c < s.length; c += 2)
      t[h * e] = s[c], t[h * e + 1] = s[c + 1], c > 0 && (r[n++] = h, r[n++] = l, r[n++] = h - 1), h++;
    r[n++] = l + 1, r[n++] = l, r[n++] = h - 1;
  }
}, Op = { ...is, extension: { ...is.extension, name: "ellipse" } }, Lp = { ...is, extension: { ...is.extension, name: "roundedRectangle" } }, $l = 1e-4, co = 1e-4;
function Dp(s) {
  const t = s.length;
  if (t < 6)
    return 1;
  let e = 0;
  for (let i = 0, r = s[t - 2], n = s[t - 1]; i < t; i += 2) {
    const a = s[i], o = s[i + 1];
    e += (a - r) * (o + n), r = a, n = o;
  }
  return e < 0 ? -1 : 1;
}
function uo(s, t, e, i, r, n, a, o) {
  const h = s - e * r, l = t - i * r, c = s + e * n, u = t + i * n;
  let f, d;
  a ? (f = i, d = -e) : (f = -i, d = e);
  const g = h + f, p = l + d, m = c + f, _ = u + d;
  return o.push(g, p), o.push(m, _), 2;
}
function Ie(s, t, e, i, r, n, a, o) {
  const h = e - s, l = i - t;
  let c = Math.atan2(h, l), u = Math.atan2(r - s, n - t);
  o && c < u ? c += Math.PI * 2 : !o && c > u && (u += Math.PI * 2);
  let f = c;
  const d = u - c, g = Math.abs(d), p = Math.sqrt(h * h + l * l), m = (15 * g * Math.sqrt(p) / Math.PI >> 0) + 1, _ = d / m;
  if (f += _, o) {
    a.push(s, t), a.push(e, i);
    for (let x = 1, y = f; x < m; x++, y += _)
      a.push(s, t), a.push(
        s + Math.sin(y) * p,
        t + Math.cos(y) * p
      );
    a.push(s, t), a.push(r, n);
  } else {
    a.push(e, i), a.push(s, t);
    for (let x = 1, y = f; x < m; x++, y += _)
      a.push(
        s + Math.sin(y) * p,
        t + Math.cos(y) * p
      ), a.push(s, t);
    a.push(r, n), a.push(s, t);
  }
  return m * 2;
}
function zp(s, t, e, i, r, n) {
  const a = $l;
  if (s.length === 0)
    return;
  const o = t;
  let h = o.alignment;
  if (t.alignment !== 0.5) {
    let D = Dp(s);
    h = (h - 0.5) * D + 0.5;
  }
  const l = new bt(s[0], s[1]), c = new bt(s[s.length - 2], s[s.length - 1]), u = i, f = Math.abs(l.x - c.x) < a && Math.abs(l.y - c.y) < a;
  if (u) {
    s = s.slice(), f && (s.pop(), s.pop(), c.set(s[s.length - 2], s[s.length - 1]));
    const D = (l.x + c.x) * 0.5, $ = (c.y + l.y) * 0.5;
    s.unshift(D, $), s.push(D, $);
  }
  const d = r, g = s.length / 2;
  let p = s.length;
  const m = d.length / 2, _ = o.width / 2, x = _ * _, y = o.miterLimit * o.miterLimit;
  let b = s[0], w = s[1], A = s[2], v = s[3], C = 0, T = 0, P = -(w - v), k = b - A, I = 0, O = 0, z = Math.sqrt(P * P + k * k);
  P /= z, k /= z, P *= _, k *= _;
  const R = h, M = (1 - R) * 2, E = R * 2;
  u || (o.cap === "round" ? p += Ie(
    b - P * (M - E) * 0.5,
    w - k * (M - E) * 0.5,
    b - P * M,
    w - k * M,
    b + P * E,
    w + k * E,
    d,
    !0
  ) + 2 : o.cap === "square" && (p += uo(b, w, P, k, M, E, !0, d))), d.push(
    b - P * M,
    w - k * M
  ), d.push(
    b + P * E,
    w + k * E
  );
  for (let D = 1; D < g - 1; ++D) {
    b = s[(D - 1) * 2], w = s[(D - 1) * 2 + 1], A = s[D * 2], v = s[D * 2 + 1], C = s[(D + 1) * 2], T = s[(D + 1) * 2 + 1], P = -(w - v), k = b - A, z = Math.sqrt(P * P + k * k), P /= z, k /= z, P *= _, k *= _, I = -(v - T), O = A - C, z = Math.sqrt(I * I + O * O), I /= z, O /= z, I *= _, O *= _;
    const $ = A - b, S = w - v, B = A - C, Y = T - v, N = $ * B + S * Y, mt = S * B - Y * $, ne = mt < 0;
    if (Math.abs(mt) < 1e-3 * Math.abs(N)) {
      d.push(
        A - P * M,
        v - k * M
      ), d.push(
        A + P * E,
        v + k * E
      ), N >= 0 && (o.join === "round" ? p += Ie(
        A,
        v,
        A - P * M,
        v - k * M,
        A - I * M,
        v - O * M,
        d,
        !1
      ) + 4 : p += 2, d.push(
        A - I * E,
        v - O * E
      ), d.push(
        A + I * M,
        v + O * M
      ));
      continue;
    }
    const at = (-P + b) * (-k + v) - (-P + A) * (-k + w), ae = (-I + C) * (-O + v) - (-I + A) * (-O + T), me = ($ * ae - B * at) / mt, qe = (Y * at - S * ae) / mt, Qs = (me - A) * (me - A) + (qe - v) * (qe - v), Pe = A + (me - A) * M, Me = v + (qe - v) * M, ke = A - (me - A) * E, Ee = v - (qe - v) * E, lc = Math.min($ * $ + S * S, B * B + Y * Y), ea = ne ? M : E, cc = lc + ea * ea * x;
    Qs <= cc ? o.join === "bevel" || Qs / x > y ? (ne ? (d.push(Pe, Me), d.push(A + P * E, v + k * E), d.push(Pe, Me), d.push(A + I * E, v + O * E)) : (d.push(A - P * M, v - k * M), d.push(ke, Ee), d.push(A - I * M, v - O * M), d.push(ke, Ee)), p += 2) : o.join === "round" ? ne ? (d.push(Pe, Me), d.push(A + P * E, v + k * E), p += Ie(
      A,
      v,
      A + P * E,
      v + k * E,
      A + I * E,
      v + O * E,
      d,
      !0
    ) + 4, d.push(Pe, Me), d.push(A + I * E, v + O * E)) : (d.push(A - P * M, v - k * M), d.push(ke, Ee), p += Ie(
      A,
      v,
      A - P * M,
      v - k * M,
      A - I * M,
      v - O * M,
      d,
      !1
    ) + 4, d.push(A - I * M, v - O * M), d.push(ke, Ee)) : (d.push(Pe, Me), d.push(ke, Ee)) : (d.push(A - P * M, v - k * M), d.push(A + P * E, v + k * E), o.join === "round" ? ne ? p += Ie(
      A,
      v,
      A + P * E,
      v + k * E,
      A + I * E,
      v + O * E,
      d,
      !0
    ) + 2 : p += Ie(
      A,
      v,
      A - P * M,
      v - k * M,
      A - I * M,
      v - O * M,
      d,
      !1
    ) + 2 : o.join === "miter" && Qs / x <= y && (ne ? (d.push(ke, Ee), d.push(ke, Ee)) : (d.push(Pe, Me), d.push(Pe, Me)), p += 2), d.push(A - I * M, v - O * M), d.push(A + I * E, v + O * E), p += 2);
  }
  b = s[(g - 2) * 2], w = s[(g - 2) * 2 + 1], A = s[(g - 1) * 2], v = s[(g - 1) * 2 + 1], P = -(w - v), k = b - A, z = Math.sqrt(P * P + k * k), P /= z, k /= z, P *= _, k *= _, d.push(A - P * M, v - k * M), d.push(A + P * E, v + k * E), u || (o.cap === "round" ? p += Ie(
    A - P * (M - E) * 0.5,
    v - k * (M - E) * 0.5,
    A - P * M,
    v - k * M,
    A + P * E,
    v + k * E,
    d,
    !1
  ) + 2 : o.cap === "square" && (p += uo(A, v, P, k, M, E, !1, d)));
  const X = co * co;
  for (let D = m; D < p + m - 2; ++D)
    b = d[D * 2], w = d[D * 2 + 1], A = d[(D + 1) * 2], v = d[(D + 1) * 2 + 1], C = d[(D + 2) * 2], T = d[(D + 2) * 2 + 1], !(Math.abs(b * (v - T) + A * (T - w) + C * (w - v)) < X) && n.push(D, D + 1, D + 2);
}
function Gp(s, t, e, i) {
  const r = $l;
  if (s.length === 0)
    return;
  const n = s[0], a = s[1], o = s[s.length - 2], h = s[s.length - 1], l = t || Math.abs(n - o) < r && Math.abs(a - h) < r, c = e, u = s.length / 2, f = c.length / 2;
  for (let d = 0; d < u; d++)
    c.push(s[d * 2]), c.push(s[d * 2 + 1]);
  for (let d = 0; d < u - 1; d++)
    i.push(f + d, f + d + 1);
  l && i.push(f + u - 1, f);
}
function Xl(s, t, e, i, r, n, a) {
  const o = wf(s, t, 2);
  if (!o)
    return;
  for (let l = 0; l < o.length; l += 3)
    n[a++] = o[l] + r, n[a++] = o[l + 1] + r, n[a++] = o[l + 2] + r;
  let h = r * i;
  for (let l = 0; l < s.length; l += 2)
    e[h] = s[l], e[h + 1] = s[l + 1], h += i;
}
const Up = [], Np = {
  extension: {
    type: L.ShapeBuilder,
    name: "polygon"
  },
  build(s, t) {
    for (let e = 0; e < s.points.length; e++)
      t[e] = s.points[e];
    return !0;
  },
  triangulate(s, t, e, i, r, n) {
    Xl(s, Up, t, e, i, r, n);
  }
}, Wp = {
  extension: {
    type: L.ShapeBuilder,
    name: "rectangle"
  },
  build(s, t) {
    const e = s, i = e.x, r = e.y, n = e.width, a = e.height;
    return n > 0 && a > 0 ? (t[0] = i, t[1] = r, t[2] = i + n, t[3] = r, t[4] = i + n, t[5] = r + a, t[6] = i, t[7] = r + a, !0) : !1;
  },
  triangulate(s, t, e, i, r, n) {
    let a = 0;
    i *= e, t[i + a] = s[0], t[i + a + 1] = s[1], a += e, t[i + a] = s[2], t[i + a + 1] = s[3], a += e, t[i + a] = s[6], t[i + a + 1] = s[7], a += e, t[i + a] = s[4], t[i + a + 1] = s[5], a += e;
    const o = i / e;
    r[n++] = o, r[n++] = o + 1, r[n++] = o + 2, r[n++] = o + 1, r[n++] = o + 3, r[n++] = o + 2;
  }
}, Vp = {
  extension: {
    type: L.ShapeBuilder,
    name: "triangle"
  },
  build(s, t) {
    return t[0] = s.x, t[1] = s.y, t[2] = s.x2, t[3] = s.y2, t[4] = s.x3, t[5] = s.y3, !0;
  },
  triangulate(s, t, e, i, r, n) {
    let a = 0;
    i *= e, t[i + a] = s[0], t[i + a + 1] = s[1], a += e, t[i + a] = s[2], t[i + a + 1] = s[3], a += e, t[i + a] = s[4], t[i + a + 1] = s[5];
    const o = i / e;
    r[n++] = o, r[n++] = o + 1, r[n++] = o + 2;
  }
}, Yp = new U(), $p = new ut();
function Xp(s, t, e, i) {
  const r = t.matrix ? s.copyFrom(t.matrix).invert() : s.identity();
  if (t.textureSpace === "local") {
    const a = e.getBounds($p);
    t.width && a.pad(t.width);
    const { x: o, y: h } = a, l = 1 / a.width, c = 1 / a.height, u = -o * l, f = -h * c, d = r.a, g = r.b, p = r.c, m = r.d;
    r.a *= l, r.b *= l, r.c *= c, r.d *= c, r.tx = u * d + f * p + r.tx, r.ty = u * g + f * m + r.ty;
  } else
    r.translate(t.texture.frame.x, t.texture.frame.y), r.scale(1 / t.texture.source.width, 1 / t.texture.source.height);
  const n = t.texture.source.style;
  return !(t.fill instanceof pe) && n.addressMode === "clamp-to-edge" && (n.addressMode = "repeat", n.update()), i && r.append(Yp.copyFrom(i).invert()), r;
}
const Ks = {};
_t.handleByMap(L.ShapeBuilder, Ks);
_t.add(Wp, Np, Vp, is, Op, Lp);
const jp = new ut(), Hp = new U();
function qp(s, t) {
  const { geometryData: e, batches: i } = t;
  i.length = 0, e.indices.length = 0, e.vertices.length = 0, e.uvs.length = 0;
  for (let r = 0; r < s.instructions.length; r++) {
    const n = s.instructions[r];
    if (n.action === "texture")
      Kp(n.data, i, e);
    else if (n.action === "fill" || n.action === "stroke") {
      const a = n.action === "stroke", o = n.data.path.shapePath, h = n.data.style, l = n.data.hole;
      a && l && fo(l.shapePath, h, !0, i, e), l && (o.shapePrimitives[o.shapePrimitives.length - 1].holes = l.shapePath.shapePrimitives), fo(o, h, a, i, e);
    }
  }
}
function Kp(s, t, e) {
  const i = [], r = Ks.rectangle, n = jp;
  n.x = s.dx, n.y = s.dy, n.width = s.dw, n.height = s.dh;
  const a = s.transform;
  if (!r.build(n, i))
    return;
  const { vertices: o, uvs: h, indices: l } = e, c = l.length, u = o.length / 2;
  a && Vl(i, a), r.triangulate(i, o, 2, u, l, c);
  const f = s.image, d = f.uvs;
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
  const g = Yt.get(Yl);
  g.indexOffset = c, g.indexSize = l.length - c, g.attributeOffset = u, g.attributeSize = o.length / 2 - u, g.baseColor = s.style, g.alpha = s.alpha, g.texture = f, g.geometryData = e, t.push(g);
}
function fo(s, t, e, i, r) {
  const { vertices: n, uvs: a, indices: o } = r;
  s.shapePrimitives.forEach(({ shape: h, transform: l, holes: c }) => {
    const u = [], f = Ks[h.type];
    if (!f.build(h, u))
      return;
    const d = o.length, g = n.length / 2;
    let p = "triangle-list";
    if (l && Vl(u, l), e) {
      const y = h.closePath ?? !0, b = t;
      b.pixelLine ? (Gp(u, y, n, o), p = "line-list") : zp(u, b, !1, y, n, o);
    } else if (c) {
      const y = [], b = u.slice();
      Zp(c).forEach((A) => {
        y.push(b.length / 2), b.push(...A);
      }), Xl(b, y, n, 2, g, o, d);
    } else
      f.triangulate(u, n, 2, g, o, d);
    const m = a.length / 2, _ = t.texture;
    if (_ !== V.WHITE) {
      const y = Xp(Hp, t, h, l);
      Fp(n, 2, g, a, m, 2, n.length / 2 - g, y);
    } else
      Ip(a, m, 2, n.length / 2 - g);
    const x = Yt.get(Yl);
    x.indexOffset = d, x.indexSize = o.length - d, x.attributeOffset = g, x.attributeSize = n.length / 2 - g, x.baseColor = t.color, x.alpha = t.alpha, x.texture = _, x.geometryData = r, x.topology = p, i.push(x);
  });
}
function Zp(s) {
  const t = [];
  for (let e = 0; e < s.length; e++) {
    const i = s[e].shape, r = [];
    Ks[i.type].build(i, r) && t.push(r);
  }
  return t;
}
class Qp {
  constructor() {
    this.batches = [], this.geometryData = {
      vertices: [],
      uvs: [],
      indices: []
    };
  }
  reset() {
    this.batches && this.batches.forEach((t) => {
      Yt.return(t);
    }), this.graphicsData && Yt.return(this.graphicsData), this.isBatchable = !1, this.context = null, this.batches.length = 0, this.geometryData.indices.length = 0, this.geometryData.vertices.length = 0, this.geometryData.uvs.length = 0, this.graphicsData = null;
  }
  destroy() {
    this.reset(), this.batches = null, this.geometryData = null;
  }
}
class Jp {
  constructor() {
    this.instructions = new Kh();
  }
  init(t) {
    const e = t.maxTextures;
    this.batcher ? this.batcher._updateMaxTextures(e) : this.batcher = new Ep({ maxTextures: e }), this.instructions.reset();
  }
  /**
   * @deprecated since version 8.0.0
   * Use `batcher.geometry` instead.
   * @see {Batcher#geometry}
   */
  get geometry() {
    return G(Vu, "GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."), this.batcher.geometry;
  }
  destroy() {
    this.batcher.destroy(), this.instructions.destroy(), this.batcher = null, this.instructions = null;
  }
}
const Kn = class yn {
  constructor(t) {
    this._renderer = t, this._managedContexts = new Rp({ renderer: t, type: "resource", name: "graphicsContext" });
  }
  /**
   * Runner init called, update the default options
   * @ignore
   */
  init(t) {
    yn.defaultOptions.bezierSmoothness = t?.bezierSmoothness ?? yn.defaultOptions.bezierSmoothness;
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
      e && i.reset(), qp(t, i);
      const r = t.batchMode;
      t.customShader || r === "no-batch" ? i.isBatchable = !1 : r === "auto" ? i.isBatchable = i.geometryData.vertices.length < 400 : i.isBatchable = !0, t.dirty = !1;
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
    const e = Yt.get(Jp, {
      maxTextures: this._renderer.limits.maxBatchableTextures
    }), i = t._gpuData[this._renderer.uid], { batches: r, geometryData: n } = i;
    i.graphicsData = e;
    const a = n.vertices.length, o = n.indices.length;
    for (let u = 0; u < r.length; u++)
      r[u].applyTransform = !1;
    const h = e.batcher;
    h.ensureAttributeBuffer(a), h.ensureIndexBuffer(o), h.begin();
    for (let u = 0; u < r.length; u++) {
      const f = r[u];
      h.add(f);
    }
    h.finish(e.instructions);
    const l = h.geometry;
    l.indexBuffer.setDataWithSize(h.indexBuffer, h.indexSize, !0), l.buffers[0].setDataWithSize(h.attributeBuffer.float32View, h.attributeSize, !0);
    const c = h.batches;
    for (let u = 0; u < c.length; u++) {
      const f = c[u];
      f.bindGroup = Nf(
        f.textures.textures,
        f.textures.count,
        this._renderer.limits.maxBatchableTextures
      );
    }
    return e;
  }
  _initContext(t) {
    const e = new Qp();
    return e.context = t, t._gpuData[this._renderer.uid] = e, this._managedContexts.add(t), e;
  }
  destroy() {
    this._managedContexts.destroy(), this._renderer = null;
  }
};
Kn.extension = {
  type: [
    L.WebGLSystem,
    L.WebGPUSystem,
    L.CanvasSystem
  ],
  name: "graphicsContext"
};
Kn.defaultOptions = {
  /**
   * A value from 0 to 1 that controls the smoothness of bezier curves (the higher the smoother)
   * @default 0.5
   */
  bezierSmoothness: 0.5
};
let jl = Kn;
const tm = 8, ws = 11920929e-14, em = 1;
function Hl(s, t, e, i, r, n, a, o, h, l) {
  const u = Math.min(
    0.99,
    // a value of 1.0 actually inverts smoothing, so we cap it at 0.99
    Math.max(0, l ?? jl.defaultOptions.bezierSmoothness)
  );
  let f = (em - u) / 1;
  return f *= f, im(t, e, i, r, n, a, o, h, s, f), s;
}
function im(s, t, e, i, r, n, a, o, h, l) {
  bn(s, t, e, i, r, n, a, o, h, l, 0), h.push(a, o);
}
function bn(s, t, e, i, r, n, a, o, h, l, c) {
  if (c > tm)
    return;
  const u = (s + e) / 2, f = (t + i) / 2, d = (e + r) / 2, g = (i + n) / 2, p = (r + a) / 2, m = (n + o) / 2, _ = (u + d) / 2, x = (f + g) / 2, y = (d + p) / 2, b = (g + m) / 2, w = (_ + y) / 2, A = (x + b) / 2;
  if (c > 0) {
    let v = a - s, C = o - t;
    const T = Math.abs((e - a) * C - (i - o) * v), P = Math.abs((r - a) * C - (n - o) * v);
    if (T > ws && P > ws) {
      if ((T + P) * (T + P) <= l * (v * v + C * C)) {
        h.push(w, A);
        return;
      }
    } else if (T > ws) {
      if (T * T <= l * (v * v + C * C)) {
        h.push(w, A);
        return;
      }
    } else if (P > ws) {
      if (P * P <= l * (v * v + C * C)) {
        h.push(w, A);
        return;
      }
    } else if (v = w - (s + a) / 2, C = A - (t + o) / 2, v * v + C * C <= l) {
      h.push(w, A);
      return;
    }
  }
  bn(s, t, u, f, _, x, w, A, h, l, c + 1), bn(w, A, y, b, p, m, a, o, h, l, c + 1);
}
const sm = 8, rm = 11920929e-14, nm = 1;
function am(s, t, e, i, r, n, a, o) {
  const l = Math.min(
    0.99,
    // a value of 1.0 actually inverts smoothing, so we cap it at 0.99
    Math.max(0, o ?? jl.defaultOptions.bezierSmoothness)
  );
  let c = (nm - l) / 1;
  return c *= c, om(t, e, i, r, n, a, s, c), s;
}
function om(s, t, e, i, r, n, a, o) {
  wn(a, s, t, e, i, r, n, o, 0), a.push(r, n);
}
function wn(s, t, e, i, r, n, a, o, h) {
  if (h > sm)
    return;
  const l = (t + i) / 2, c = (e + r) / 2, u = (i + n) / 2, f = (r + a) / 2, d = (l + u) / 2, g = (c + f) / 2;
  let p = n - t, m = a - e;
  const _ = Math.abs((i - n) * m - (r - a) * p);
  if (_ > rm) {
    if (_ * _ <= o * (p * p + m * m)) {
      s.push(d, g);
      return;
    }
  } else if (p = d - (t + n) / 2, m = g - (e + a) / 2, p * p + m * m <= o) {
    s.push(d, g);
    return;
  }
  wn(s, t, e, l, c, d, g, o, h + 1), wn(s, d, g, u, f, n, a, o, h + 1);
}
function ql(s, t, e, i, r, n, a, o) {
  let h = Math.abs(r - n);
  (!a && r > n || a && n > r) && (h = 2 * Math.PI - h), o || (o = Math.max(6, Math.floor(6 * Math.pow(i, 1 / 3) * (h / Math.PI)))), o = Math.max(o, 3);
  let l = h / o, c = r;
  l *= a ? -1 : 1;
  for (let u = 0; u < o + 1; u++) {
    const f = Math.cos(c), d = Math.sin(c), g = t + f * i, p = e + d * i;
    s.push(g, p), c += l;
  }
}
function hm(s, t, e, i, r, n) {
  const a = s[s.length - 2], h = s[s.length - 1] - e, l = a - t, c = r - e, u = i - t, f = Math.abs(h * u - l * c);
  if (f < 1e-8 || n === 0) {
    (s[s.length - 2] !== t || s[s.length - 1] !== e) && s.push(t, e);
    return;
  }
  const d = h * h + l * l, g = c * c + u * u, p = h * c + l * u, m = n * Math.sqrt(d) / f, _ = n * Math.sqrt(g) / f, x = m * p / d, y = _ * p / g, b = m * u + _ * l, w = m * c + _ * h, A = l * (_ + x), v = h * (_ + x), C = u * (m + y), T = c * (m + y), P = Math.atan2(v - w, A - b), k = Math.atan2(T - w, C - b);
  ql(
    s,
    b + t,
    w + e,
    n,
    P,
    k,
    l * c > u * h
  );
}
const Vi = Math.PI * 2, Fr = {
  centerX: 0,
  centerY: 0,
  ang1: 0,
  ang2: 0
}, Ir = ({ x: s, y: t }, e, i, r, n, a, o, h) => {
  s *= e, t *= i;
  const l = r * s - n * t, c = n * s + r * t;
  return h.x = l + a, h.y = c + o, h;
};
function lm(s, t) {
  const e = t === -1.5707963267948966 ? -0.551915024494 : 1.3333333333333333 * Math.tan(t / 4), i = t === 1.5707963267948966 ? 0.551915024494 : e, r = Math.cos(s), n = Math.sin(s), a = Math.cos(s + t), o = Math.sin(s + t);
  return [
    {
      x: r - n * i,
      y: n + r * i
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
const po = (s, t, e, i) => {
  const r = s * i - t * e < 0 ? -1 : 1;
  let n = s * e + t * i;
  return n > 1 && (n = 1), n < -1 && (n = -1), r * Math.acos(n);
}, cm = (s, t, e, i, r, n, a, o, h, l, c, u, f) => {
  const d = Math.pow(r, 2), g = Math.pow(n, 2), p = Math.pow(c, 2), m = Math.pow(u, 2);
  let _ = d * g - d * m - g * p;
  _ < 0 && (_ = 0), _ /= d * m + g * p, _ = Math.sqrt(_) * (a === o ? -1 : 1);
  const x = _ * r / n * u, y = _ * -n / r * c, b = l * x - h * y + (s + e) / 2, w = h * x + l * y + (t + i) / 2, A = (c - x) / r, v = (u - y) / n, C = (-c - x) / r, T = (-u - y) / n, P = po(1, 0, A, v);
  let k = po(A, v, C, T);
  o === 0 && k > 0 && (k -= Vi), o === 1 && k < 0 && (k += Vi), f.centerX = b, f.centerY = w, f.ang1 = P, f.ang2 = k;
};
function um(s, t, e, i, r, n, a, o = 0, h = 0, l = 0) {
  if (n === 0 || a === 0)
    return;
  const c = Math.sin(o * Vi / 360), u = Math.cos(o * Vi / 360), f = u * (t - i) / 2 + c * (e - r) / 2, d = -c * (t - i) / 2 + u * (e - r) / 2;
  if (f === 0 && d === 0)
    return;
  n = Math.abs(n), a = Math.abs(a);
  const g = Math.pow(f, 2) / Math.pow(n, 2) + Math.pow(d, 2) / Math.pow(a, 2);
  g > 1 && (n *= Math.sqrt(g), a *= Math.sqrt(g)), cm(
    t,
    e,
    i,
    r,
    n,
    a,
    h,
    l,
    c,
    u,
    f,
    d,
    Fr
  );
  let { ang1: p, ang2: m } = Fr;
  const { centerX: _, centerY: x } = Fr;
  let y = Math.abs(m) / (Vi / 4);
  Math.abs(1 - y) < 1e-7 && (y = 1);
  const b = Math.max(Math.ceil(y), 1);
  m /= b;
  let w = s[s.length - 2], A = s[s.length - 1];
  const v = { x: 0, y: 0 };
  for (let C = 0; C < b; C++) {
    const T = lm(p, m), { x: P, y: k } = Ir(T[0], n, a, u, c, _, x, v), { x: I, y: O } = Ir(T[1], n, a, u, c, _, x, v), { x: z, y: R } = Ir(T[2], n, a, u, c, _, x, v);
    Hl(
      s,
      w,
      A,
      P,
      k,
      I,
      O,
      z,
      R
    ), w = z, A = R, p += m;
  }
}
function dm(s, t, e) {
  const i = (a, o) => {
    const h = o.x - a.x, l = o.y - a.y, c = Math.sqrt(h * h + l * l), u = h / c, f = l / c;
    return { len: c, nx: u, ny: f };
  }, r = (a, o) => {
    a === 0 ? s.moveTo(o.x, o.y) : s.lineTo(o.x, o.y);
  };
  let n = t[t.length - 1];
  for (let a = 0; a < t.length; a++) {
    const o = t[a % t.length], h = o.radius ?? e;
    if (h <= 0) {
      r(a, o), n = o;
      continue;
    }
    const l = t[(a + 1) % t.length], c = i(o, n), u = i(o, l);
    if (c.len < 1e-4 || u.len < 1e-4) {
      r(a, o), n = o;
      continue;
    }
    let f = Math.asin(c.nx * u.ny - c.ny * u.nx), d = 1, g = !1;
    c.nx * u.nx - c.ny * -u.ny < 0 ? f < 0 ? f = Math.PI + f : (f = Math.PI - f, d = -1, g = !0) : f > 0 && (d = -1, g = !0);
    const p = f / 2;
    let m, _ = Math.abs(
      Math.cos(p) * h / Math.sin(p)
    );
    _ > Math.min(c.len / 2, u.len / 2) ? (_ = Math.min(c.len / 2, u.len / 2), m = Math.abs(_ * Math.sin(p) / Math.cos(p))) : m = h;
    const x = o.x + u.nx * _ + -u.ny * m * d, y = o.y + u.ny * _ + u.nx * m * d, b = Math.atan2(c.ny, c.nx) + Math.PI / 2 * d, w = Math.atan2(u.ny, u.nx) - Math.PI / 2 * d;
    a === 0 && s.moveTo(
      x + Math.cos(b) * m,
      y + Math.sin(b) * m
    ), s.arc(x, y, m, b, w, g), n = o;
  }
}
function fm(s, t, e, i) {
  const r = (o, h) => Math.sqrt((o.x - h.x) ** 2 + (o.y - h.y) ** 2), n = (o, h, l) => ({
    x: o.x + (h.x - o.x) * l,
    y: o.y + (h.y - o.y) * l
  }), a = t.length;
  for (let o = 0; o < a; o++) {
    const h = t[(o + 1) % a], l = h.radius ?? e;
    if (l <= 0) {
      o === 0 ? s.moveTo(h.x, h.y) : s.lineTo(h.x, h.y);
      continue;
    }
    const c = t[o], u = t[(o + 2) % a], f = r(c, h);
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
    const g = r(u, h);
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
    o === 0 ? s.moveTo(d.x, d.y) : s.lineTo(d.x, d.y), s.quadraticCurveTo(h.x, h.y, p.x, p.y, i);
  }
}
const pm = new ut();
class mm {
  constructor(t) {
    this.shapePrimitives = [], this._currentPoly = null, this._bounds = new jt(), this._graphicsPath2D = t, this.signed = t.checkForHoles;
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
    const i = this._currentPoly.points, r = i[i.length - 2], n = i[i.length - 1];
    return (r !== t || n !== e) && i.push(t, e), this;
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
  arc(t, e, i, r, n, a) {
    this._ensurePoly(!1);
    const o = this._currentPoly.points;
    return ql(o, t, e, i, r, n, a), this;
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
  arcTo(t, e, i, r, n) {
    this._ensurePoly();
    const a = this._currentPoly.points;
    return hm(a, t, e, i, r, n), this;
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
  arcToSvg(t, e, i, r, n, a, o) {
    const h = this._currentPoly.points;
    return um(
      h,
      this._currentPoly.lastX,
      this._currentPoly.lastY,
      a,
      o,
      t,
      e,
      i,
      r,
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
  bezierCurveTo(t, e, i, r, n, a, o) {
    this._ensurePoly();
    const h = this._currentPoly;
    return Hl(
      this._currentPoly.points,
      h.lastX,
      h.lastY,
      t,
      e,
      i,
      r,
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
  quadraticCurveTo(t, e, i, r, n) {
    this._ensurePoly();
    const a = this._currentPoly;
    return am(
      this._currentPoly.points,
      a.lastX,
      a.lastY,
      t,
      e,
      i,
      r,
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
    const i = this.shapePrimitives, r = i.length;
    for (let n = 0; n < t.instructions.length; n++) {
      const a = t.instructions[n];
      this[a.action](...a.data);
    }
    if (t.checkForHoles && i.length - r > 1) {
      let n = null;
      for (let a = r; a < i.length; a++) {
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
  rect(t, e, i, r, n) {
    return this.drawShape(new ut(t, e, i, r), n), this;
  }
  /**
   * Draws a circle shape. This method adds a new circle path to the current drawing.
   * @param x - The x-coordinate of the center of the circle.
   * @param y - The y-coordinate of the center of the circle.
   * @param radius - The radius of the circle.
   * @param transform - An optional `Matrix` object to apply a transformation to the circle.
   * @returns The instance of the current object for chaining.
   */
  circle(t, e, i, r) {
    return this.drawShape(new jn(t, e, i), r), this;
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
    const r = new Ni(t);
    return r.closePath = e, this.drawShape(r, i), this;
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
  regularPoly(t, e, i, r, n = 0, a) {
    r = Math.max(r | 0, 3);
    const o = -1 * Math.PI / 2 + n, h = Math.PI * 2 / r, l = [];
    for (let c = 0; c < r; c++) {
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
  roundPoly(t, e, i, r, n, a = 0, o) {
    if (r = Math.max(r | 0, 3), n <= 0)
      return this.regularPoly(t, e, i, r, a);
    const h = i * Math.sin(Math.PI / r) - 1e-3;
    n = Math.min(n, h);
    const l = -1 * Math.PI / 2 + a, c = Math.PI * 2 / r, u = (r - 2) * Math.PI / r / 2;
    for (let f = 0; f < r; f++) {
      const d = f * c + l, g = t + i * Math.cos(d), p = e + i * Math.sin(d), m = d + Math.PI + u, _ = d - Math.PI - u, x = g + n * Math.cos(m), y = p + n * Math.sin(m), b = g + n * Math.cos(_), w = p + n * Math.sin(_);
      f === 0 ? this.moveTo(x, y) : this.lineTo(x, y), this.quadraticCurveTo(g, p, b, w, o);
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
  roundShape(t, e, i = !1, r) {
    return t.length < 3 ? this : (i ? fm(this, t, e, r) : dm(this, t, e), this.closePath());
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
  filletRect(t, e, i, r, n) {
    if (n === 0)
      return this.rect(t, e, i, r);
    const a = Math.min(i, r) / 2, o = Math.min(a, Math.max(-a, n)), h = t + i, l = e + r, c = o < 0 ? -o : 0, u = Math.abs(o);
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
  chamferRect(t, e, i, r, n, a) {
    if (n <= 0)
      return this.rect(t, e, i, r);
    const o = Math.min(n, Math.min(i, r) / 2), h = t + i, l = e + r, c = [
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
  ellipse(t, e, i, r, n) {
    return this.drawShape(new Hn(t, e, i, r), n), this;
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
  roundRect(t, e, i, r, n, a) {
    return this.drawShape(new qn(t, e, i, r, n), a), this;
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
    return i && this.endPoly(), i = new Ni(), i.points.push(t, e), this._currentPoly = i, this;
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
    if (!this._currentPoly && (this._currentPoly = new Ni(), t)) {
      const e = this.shapePrimitives[this.shapePrimitives.length - 1];
      if (e) {
        let i = e.shape.x, r = e.shape.y;
        if (e.transform && !e.transform.isIdentity()) {
          const n = e.transform, a = i;
          i = n.a * i + n.c * r + n.tx, r = n.b * a + n.d * r + n.ty;
        }
        this._currentPoly.points.push(i, r);
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
      const r = e[i], n = r.shape.getBounds(pm);
      r.transform ? t.addRect(n, r.transform) : t.addRect(n);
    }
    return t;
  }
}
class ue {
  /**
   * Creates a `GraphicsPath` instance optionally from an SVG path string or an array of `PathInstruction`.
   * @param instructions - An SVG path string or an array of `PathInstruction` objects.
   * @param signed
   */
  constructor(t, e = !1) {
    this.instructions = [], this.uid = lt("graphicsPath"), this._dirty = !0, this.checkForHoles = e, typeof t == "string" ? Df(t, this) : this.instructions = t?.slice() ?? [];
  }
  /**
   * Provides access to the internal shape path, ensuring it is up-to-date with the current instructions.
   * @returns The `ShapePath` instance associated with this `GraphicsPath`.
   */
  get shapePath() {
    return this._shapePath || (this._shapePath = new mm(this)), this._dirty && (this._dirty = !1, this._shapePath.buildPath()), this._shapePath;
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
  bezierCurveToShort(t, e, i, r, n) {
    const a = this.instructions[this.instructions.length - 1], o = this.getLastPoint(bt.shared);
    let h = 0, l = 0;
    if (!a || a.action !== "bezierCurveTo")
      h = o.x, l = o.y;
    else {
      h = a.data[2], l = a.data[3];
      const c = o.x, u = o.y;
      h = c + (c - h), l = u + (u - l);
    }
    return this.instructions.push({ action: "bezierCurveTo", data: [h, l, t, e, i, r, n] }), this._dirty = !0, this;
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
    const r = this.instructions[this.instructions.length - 1], n = this.getLastPoint(bt.shared);
    let a = 0, o = 0;
    if (!r || r.action !== "quadraticCurveTo")
      a = n.x, o = n.y;
    else {
      a = r.data[0], o = r.data[1];
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
  rect(t, e, i, r, n) {
    return this.instructions.push({ action: "rect", data: [t, e, i, r, n] }), this._dirty = !0, this;
  }
  /**
   * Draws a circle shape. This method adds a new circle path to the current drawing.
   * @param x - The x-coordinate of the center of the circle.
   * @param y - The y-coordinate of the center of the circle.
   * @param radius - The radius of the circle.
   * @param transform - An optional `Matrix` object to apply a transformation to the circle.
   * @returns The instance of the current object for chaining.
   */
  circle(t, e, i, r) {
    return this.instructions.push({ action: "circle", data: [t, e, i, r] }), this._dirty = !0, this;
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
  star(t, e, i, r, n, a, o) {
    n || (n = r / 2);
    const h = -1 * Math.PI / 2 + a, l = i * 2, c = Math.PI * 2 / l, u = [];
    for (let f = 0; f < l; f++) {
      const d = f % 2 ? n : r, g = f * c + h;
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
    const e = new ue();
    if (e.checkForHoles = this.checkForHoles, !t)
      e.instructions = this.instructions.slice();
    else
      for (let i = 0; i < this.instructions.length; i++) {
        const r = this.instructions[i];
        e.instructions.push({ action: r.action, data: r.data.slice() });
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
    const e = t.a, i = t.b, r = t.c, n = t.d, a = t.tx, o = t.ty;
    let h = 0, l = 0, c = 0, u = 0, f = 0, d = 0, g = 0, p = 0;
    for (let m = 0; m < this.instructions.length; m++) {
      const _ = this.instructions[m], x = _.data;
      switch (_.action) {
        case "moveTo":
        case "lineTo":
          h = x[0], l = x[1], x[0] = e * h + r * l + a, x[1] = i * h + n * l + o;
          break;
        case "bezierCurveTo":
          c = x[0], u = x[1], f = x[2], d = x[3], h = x[4], l = x[5], x[0] = e * c + r * u + a, x[1] = i * c + n * u + o, x[2] = e * f + r * d + a, x[3] = i * f + n * d + o, x[4] = e * h + r * l + a, x[5] = i * h + n * l + o;
          break;
        case "quadraticCurveTo":
          c = x[0], u = x[1], h = x[2], l = x[3], x[0] = e * c + r * u + a, x[1] = i * c + n * u + o, x[2] = e * h + r * l + a, x[3] = i * h + n * l + o;
          break;
        case "arcToSvg":
          h = x[5], l = x[6], g = x[0], p = x[1], x[0] = e * g + r * p, x[1] = i * g + n * p, x[5] = e * h + r * l + a, x[6] = i * h + n * l + o;
          break;
        case "circle":
          x[4] = ki(x[3], t);
          break;
        case "rect":
          x[4] = ki(x[4], t);
          break;
        case "ellipse":
          x[8] = ki(x[8], t);
          break;
        case "roundRect":
          x[5] = ki(x[5], t);
          break;
        case "addPath":
          x[0].transform(t);
          break;
        case "poly":
          x[2] = ki(x[2], t);
          break;
        default:
          Q("unknown transform action", _.action);
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
function ki(s, t) {
  return s ? s.prepend(t) : t.clone();
}
function ot(s, t, e) {
  const i = s.getAttribute(t);
  return i ? Number(i) : e;
}
function gm(s, t) {
  const e = s.querySelectorAll("defs");
  for (let i = 0; i < e.length; i++) {
    const r = e[i];
    for (let n = 0; n < r.children.length; n++) {
      const a = r.children[n];
      switch (a.nodeName.toLowerCase()) {
        case "lineargradient":
          t.defs[a.id] = _m(a);
          break;
        case "radialgradient":
          t.defs[a.id] = xm();
          break;
      }
    }
  }
}
function _m(s) {
  const t = ot(s, "x1", 0), e = ot(s, "y1", 0), i = ot(s, "x2", 1), r = ot(s, "y2", 0), n = s.getAttribute("gradientUnits") || "objectBoundingBox", a = new pe(
    t,
    e,
    i,
    r,
    n === "objectBoundingBox" ? "local" : "global"
  );
  for (let o = 0; o < s.children.length; o++) {
    const h = s.children[o], l = ot(h, "offset", 0), c = nt.shared.setValue(h.getAttribute("stop-color")).toNumber();
    a.addColorStop(l, c);
  }
  return a;
}
function xm(s) {
  return Q("[SVG Parser] Radial gradients are not yet supported"), new pe(0, 0, 1, 0);
}
function mo(s) {
  const t = s.match(/url\s*\(\s*['"]?\s*#([^'"\s)]+)\s*['"]?\s*\)/i);
  return t ? t[1] : "";
}
const go = {
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
function Kl(s, t) {
  const e = s.getAttribute("style"), i = {}, r = {}, n = {
    strokeStyle: i,
    fillStyle: r,
    useFill: !1,
    useStroke: !1
  };
  for (const a in go) {
    const o = s.getAttribute(a);
    o && _o(t, n, a, o.trim());
  }
  if (e) {
    const a = e.split(";");
    for (let o = 0; o < a.length; o++) {
      const h = a[o].trim(), [l, c] = h.split(":");
      go[l] && _o(t, n, l, c.trim());
    }
  }
  return {
    strokeStyle: n.useStroke ? i : null,
    fillStyle: n.useFill ? r : null,
    useFill: n.useFill,
    useStroke: n.useStroke
  };
}
function _o(s, t, e, i) {
  switch (e) {
    case "stroke":
      if (i !== "none") {
        if (i.startsWith("url(")) {
          const r = mo(i);
          t.strokeStyle.fill = s.defs[r];
        } else
          t.strokeStyle.color = nt.shared.setValue(i).toNumber();
        t.useStroke = !0;
      }
      break;
    case "stroke-width":
      t.strokeStyle.width = Number(i);
      break;
    case "fill":
      if (i !== "none") {
        if (i.startsWith("url(")) {
          const r = mo(i);
          t.fillStyle.fill = s.defs[r];
        } else
          t.fillStyle.color = nt.shared.setValue(i).toNumber();
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
function ym(s) {
  if (s.length <= 2)
    return !0;
  const t = s.map((o) => o.area).sort((o, h) => h - o), [e, i] = t, r = t[t.length - 1], n = e / i, a = i / r;
  return !(n > 3 && a < 2);
}
function bm(s) {
  return s.split(/(?=[Mm])/).filter((i) => i.trim().length > 0);
}
function wm(s) {
  const t = s.match(/[-+]?[0-9]*\.?[0-9]+/g);
  if (!t || t.length < 4)
    return 0;
  const e = t.map(Number), i = [], r = [];
  for (let c = 0; c < e.length; c += 2)
    c + 1 < e.length && (i.push(e[c]), r.push(e[c + 1]));
  if (i.length === 0 || r.length === 0)
    return 0;
  const n = Math.min(...i), a = Math.max(...i), o = Math.min(...r), h = Math.max(...r);
  return (a - n) * (h - o);
}
function xo(s, t) {
  const e = new ue(s, !1);
  for (const i of e.instructions)
    t.instructions.push(i);
}
function vm(s, t) {
  if (typeof s == "string") {
    const a = document.createElement("div");
    a.innerHTML = s.trim(), s = a.querySelector("svg");
  }
  const e = {
    context: t,
    defs: {},
    path: new ue()
  };
  gm(s, e);
  const i = s.children, { fillStyle: r, strokeStyle: n } = Kl(s, e);
  for (let a = 0; a < i.length; a++) {
    const o = i[a];
    o.nodeName.toLowerCase() !== "defs" && Zl(o, e, r, n);
  }
  return t;
}
function Zl(s, t, e, i) {
  const r = s.children, { fillStyle: n, strokeStyle: a } = Kl(s, t);
  n && e ? e = { ...e, ...n } : n && (e = n), a && i ? i = { ...i, ...a } : a && (i = a);
  const o = !e && !i;
  o && (e = { color: 0 });
  let h, l, c, u, f, d, g, p, m, _, x, y, b, w, A, v, C;
  switch (s.nodeName.toLowerCase()) {
    case "path": {
      w = s.getAttribute("d");
      const T = s.getAttribute("fill-rule"), P = bm(w), k = T === "evenodd", I = P.length > 1;
      if (k && I) {
        const z = P.map((M) => ({
          path: M,
          area: wm(M)
        }));
        if (z.sort((M, E) => E.area - M.area), P.length > 3 || !ym(z))
          for (let M = 0; M < z.length; M++) {
            const E = z[M], X = M === 0;
            t.context.beginPath();
            const D = new ue(void 0, !0);
            xo(E.path, D), t.context.path(D), X ? (e && t.context.fill(e), i && t.context.stroke(i)) : t.context.cut();
          }
        else
          for (let M = 0; M < z.length; M++) {
            const E = z[M], X = M % 2 === 1;
            t.context.beginPath();
            const D = new ue(void 0, !0);
            xo(E.path, D), t.context.path(D), X ? t.context.cut() : (e && t.context.fill(e), i && t.context.stroke(i));
          }
      } else {
        const z = T ? T === "evenodd" : !0;
        A = new ue(w, z), t.context.path(A), e && t.context.fill(e), i && t.context.stroke(i);
      }
      break;
    }
    case "circle":
      g = ot(s, "cx", 0), p = ot(s, "cy", 0), m = ot(s, "r", 0), t.context.ellipse(g, p, m, m), e && t.context.fill(e), i && t.context.stroke(i);
      break;
    case "rect":
      h = ot(s, "x", 0), l = ot(s, "y", 0), v = ot(s, "width", 0), C = ot(s, "height", 0), _ = ot(s, "rx", 0), x = ot(s, "ry", 0), _ || x ? t.context.roundRect(h, l, v, C, _ || x) : t.context.rect(h, l, v, C), e && t.context.fill(e), i && t.context.stroke(i);
      break;
    case "ellipse":
      g = ot(s, "cx", 0), p = ot(s, "cy", 0), _ = ot(s, "rx", 0), x = ot(s, "ry", 0), t.context.beginPath(), t.context.ellipse(g, p, _, x), e && t.context.fill(e), i && t.context.stroke(i);
      break;
    case "line":
      c = ot(s, "x1", 0), u = ot(s, "y1", 0), f = ot(s, "x2", 0), d = ot(s, "y2", 0), t.context.beginPath(), t.context.moveTo(c, u), t.context.lineTo(f, d), i && t.context.stroke(i);
      break;
    case "polygon":
      b = s.getAttribute("points"), y = b.match(/-?\d+/g).map((T) => parseInt(T, 10)), t.context.poly(y, !0), e && t.context.fill(e), i && t.context.stroke(i);
      break;
    case "polyline":
      b = s.getAttribute("points"), y = b.match(/-?\d+/g).map((T) => parseInt(T, 10)), t.context.poly(y, !1), i && t.context.stroke(i);
      break;
    case "g":
    case "svg":
      break;
    default: {
      Q(`[SVG parser] <${s.nodeName}> elements unsupported`);
      break;
    }
  }
  o && (e = null);
  for (let T = 0; T < r.length; T++)
    Zl(r[T], t, e, i);
}
function Am(s) {
  return nt.isColorLike(s);
}
function yo(s) {
  return s instanceof qs;
}
function bo(s) {
  return s instanceof pe;
}
function Sm(s) {
  return s instanceof V;
}
function Tm(s, t, e) {
  const i = nt.shared.setValue(t ?? 0);
  return s.color = i.toNumber(), s.alpha = i.alpha === 1 ? e.alpha : i.alpha, s.texture = V.WHITE, { ...e, ...s };
}
function Cm(s, t, e) {
  return s.texture = t, { ...e, ...s };
}
function wo(s, t, e) {
  return s.fill = t, s.color = 16777215, s.texture = t.texture, s.matrix = t.transform, { ...e, ...s };
}
function vo(s, t, e) {
  return t.buildGradient(), s.fill = t, s.color = 16777215, s.texture = t.texture, s.matrix = t.transform, s.textureSpace = t.textureSpace, { ...e, ...s };
}
function Pm(s, t) {
  const e = { ...t, ...s }, i = nt.shared.setValue(e.color);
  return e.alpha *= i.alpha, e.color = i.toNumber(), e;
}
function Ue(s, t) {
  if (s == null)
    return null;
  const e = {}, i = s;
  return Am(s) ? Tm(e, s, t) : Sm(s) ? Cm(e, s, t) : yo(s) ? wo(e, s, t) : bo(s) ? vo(e, s, t) : i.fill && yo(i.fill) ? wo(i, i.fill, t) : i.fill && bo(i.fill) ? vo(i, i.fill, t) : Pm(i, t);
}
function Ns(s, t) {
  const { width: e, alignment: i, miterLimit: r, cap: n, join: a, pixelLine: o, ...h } = t, l = Ue(s, h);
  return l ? {
    width: e,
    alignment: i,
    miterLimit: r,
    cap: n,
    join: a,
    pixelLine: o,
    ...l
  } : null;
}
const Mm = new bt(), Ao = new U(), Zn = class Qt extends Ht {
  constructor() {
    super(...arguments), this._gpuData = /* @__PURE__ */ Object.create(null), this.autoGarbageCollect = !0, this._gcLastUsed = -1, this.uid = lt("graphicsContext"), this.dirty = !0, this.batchMode = "auto", this.instructions = [], this.destroyed = !1, this._activePath = new ue(), this._transform = new U(), this._fillStyle = { ...Qt.defaultFillStyle }, this._strokeStyle = { ...Qt.defaultStrokeStyle }, this._stateStack = [], this._tick = 0, this._bounds = new jt(), this._boundsDirty = !0;
  }
  /**
   * Creates a new GraphicsContext object that is a clone of this instance, copying all properties,
   * including the current drawing state, transformations, styles, and instructions.
   * @returns A new GraphicsContext instance with the same properties and state as this one.
   */
  clone() {
    const t = new Qt();
    return t.batchMode = this.batchMode, t.instructions = this.instructions.slice(), t._activePath = this._activePath.clone(), t._transform = this._transform.clone(), t._fillStyle = { ...this._fillStyle }, t._strokeStyle = { ...this._strokeStyle }, t._stateStack = this._stateStack.slice(), t._bounds = this._bounds.clone(), t._boundsDirty = !0, t;
  }
  /**
   * The current fill style of the graphics context. This can be a color, gradient, pattern, or a more complex style defined by a FillStyle object.
   */
  get fillStyle() {
    return this._fillStyle;
  }
  set fillStyle(t) {
    this._fillStyle = Ue(t, Qt.defaultFillStyle);
  }
  /**
   * The current stroke style of the graphics context. Similar to fill styles, stroke styles can encompass colors, gradients, patterns, or more detailed configurations via a StrokeStyle object.
   */
  get strokeStyle() {
    return this._strokeStyle;
  }
  set strokeStyle(t) {
    this._strokeStyle = Ns(t, Qt.defaultStrokeStyle);
  }
  /**
   * Sets the current fill style of the graphics context. The fill style can be a color, gradient,
   * pattern, or a more complex style defined by a FillStyle object.
   * @param style - The fill style to apply. This can be a simple color, a gradient or pattern object,
   *                or a FillStyle or ConvertedFillStyle object.
   * @returns The instance of the current GraphicsContext for method chaining.
   */
  setFillStyle(t) {
    return this._fillStyle = Ue(t, Qt.defaultFillStyle), this;
  }
  /**
   * Sets the current stroke style of the graphics context. Similar to fill styles, stroke styles can
   * encompass colors, gradients, patterns, or more detailed configurations via a StrokeStyle object.
   * @param style - The stroke style to apply. Can be defined as a color, a gradient or pattern,
   *                or a StrokeStyle or ConvertedStrokeStyle object.
   * @returns The instance of the current GraphicsContext for method chaining.
   */
  setStrokeStyle(t) {
    return this._strokeStyle = Ue(t, Qt.defaultStrokeStyle), this;
  }
  texture(t, e, i, r, n, a) {
    return this.instructions.push({
      action: "texture",
      data: {
        image: t,
        dx: i || 0,
        dy: r || 0,
        dw: n || t.frame.width,
        dh: a || t.frame.height,
        transform: this._transform.clone(),
        alpha: this._fillStyle.alpha,
        style: e ? nt.shared.setValue(e).toNumber() : 16777215
      }
    }), this.onUpdate(), this;
  }
  /**
   * Resets the current path. Any previous path and its commands are discarded and a new path is
   * started. This is typically called before beginning a new shape or series of drawing commands.
   * @returns The instance of the current GraphicsContext for method chaining.
   */
  beginPath() {
    return this._activePath = new ue(), this;
  }
  fill(t, e) {
    let i;
    const r = this.instructions[this.instructions.length - 1];
    return this._tick === 0 && r?.action === "stroke" ? i = r.data.path : i = this._activePath.clone(), i ? (t != null && (e !== void 0 && typeof t == "number" && (G(j, "GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"), t = { color: t, alpha: e }), this._fillStyle = Ue(t, Qt.defaultFillStyle)), this.instructions.push({
      action: "fill",
      // TODO copy fill style!
      data: { style: this.fillStyle, path: i }
    }), this.onUpdate(), this._initNextPathLocation(), this._tick = 0, this) : this;
  }
  _initNextPathLocation() {
    const { x: t, y: e } = this._activePath.getLastPoint(bt.shared);
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
    return this._tick === 0 && i?.action === "fill" ? e = i.data.path : e = this._activePath.clone(), e ? (t != null && (this._strokeStyle = Ns(t, Qt.defaultStrokeStyle)), this.instructions.push({
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
  arc(t, e, i, r, n, a) {
    this._tick++;
    const o = this._transform;
    return this._activePath.arc(
      o.a * t + o.c * e + o.tx,
      o.b * t + o.d * e + o.ty,
      i,
      r,
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
  arcTo(t, e, i, r, n) {
    this._tick++;
    const a = this._transform;
    return this._activePath.arcTo(
      a.a * t + a.c * e + a.tx,
      a.b * t + a.d * e + a.ty,
      a.a * i + a.c * r + a.tx,
      a.b * i + a.d * r + a.ty,
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
  arcToSvg(t, e, i, r, n, a, o) {
    this._tick++;
    const h = this._transform;
    return this._activePath.arcToSvg(
      t,
      e,
      i,
      // should we rotate this with transform??
      r,
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
  bezierCurveTo(t, e, i, r, n, a, o) {
    this._tick++;
    const h = this._transform;
    return this._activePath.bezierCurveTo(
      h.a * t + h.c * e + h.tx,
      h.b * t + h.d * e + h.ty,
      h.a * i + h.c * r + h.tx,
      h.b * i + h.d * r + h.ty,
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
  ellipse(t, e, i, r) {
    return this._tick++, this._activePath.ellipse(t, e, i, r, this._transform.clone()), this;
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
    const i = this._transform, r = this._activePath.instructions, n = i.a * t + i.c * e + i.tx, a = i.b * t + i.d * e + i.ty;
    return r.length === 1 && r[0].action === "moveTo" ? (r[0].data[0] = n, r[0].data[1] = a, this) : (this._activePath.moveTo(
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
  quadraticCurveTo(t, e, i, r, n) {
    this._tick++;
    const a = this._transform;
    return this._activePath.quadraticCurveTo(
      a.a * t + a.c * e + a.tx,
      a.b * t + a.d * e + a.ty,
      a.a * i + a.c * r + a.tx,
      a.b * i + a.d * r + a.ty,
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
  rect(t, e, i, r) {
    return this._tick++, this._activePath.rect(t, e, i, r, this._transform.clone()), this;
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
  roundRect(t, e, i, r, n) {
    return this._tick++, this._activePath.roundRect(t, e, i, r, n, this._transform.clone()), this;
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
  regularPoly(t, e, i, r, n = 0, a) {
    return this._tick++, this._activePath.regularPoly(t, e, i, r, n, a), this;
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
  roundPoly(t, e, i, r, n, a) {
    return this._tick++, this._activePath.roundPoly(t, e, i, r, n, a), this;
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
  roundShape(t, e, i, r) {
    return this._tick++, this._activePath.roundShape(t, e, i, r), this;
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
  filletRect(t, e, i, r, n) {
    return this._tick++, this._activePath.filletRect(t, e, i, r, n), this;
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
  chamferRect(t, e, i, r, n, a) {
    return this._tick++, this._activePath.chamferRect(t, e, i, r, n, a), this;
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
  star(t, e, i, r, n = 0, a = 0) {
    return this._tick++, this._activePath.star(t, e, i, r, n, a, this._transform.clone()), this;
  }
  /**
   * Parses and renders an SVG string into the graphics context. This allows for complex shapes and paths
   * defined in SVG format to be drawn within the graphics context.
   * @param svg - The SVG string to be parsed and rendered.
   */
  svg(t) {
    return this._tick++, vm(t, this), this;
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
  setTransform(t, e, i, r, n, a) {
    return t instanceof U ? (this._transform.set(t.a, t.b, t.c, t.d, t.tx, t.ty), this) : (this._transform.set(t, e, i, r, n, a), this);
  }
  transform(t, e, i, r, n, a) {
    return t instanceof U ? (this._transform.append(t), this) : (Ao.set(t, e, i, r, n, a), this._transform.append(Ao), this);
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
      const i = this.instructions[e], r = i.action;
      if (r === "fill") {
        const n = i.data;
        t.addBounds(n.path.bounds);
      } else if (r === "texture") {
        const n = i.data;
        t.addFrame(n.dx, n.dy, n.dx + n.dw, n.dy + n.dh, n.transform);
      }
      if (r === "stroke") {
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
    for (let r = 0; r < e.length; r++) {
      const n = e[r], a = n.data, o = a.path;
      if (!n.action || !o)
        continue;
      const h = a.style, l = o.shapePath.shapePrimitives;
      for (let c = 0; c < l.length; c++) {
        const u = l[c].shape;
        if (!h || !u)
          continue;
        const f = l[c].transform, d = f ? f.applyInverse(t, Mm) : t;
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
Zn.defaultFillStyle = {
  /** The color to use for the fill. */
  color: 16777215,
  /** The alpha value to use for the fill. */
  alpha: 1,
  /** The texture to use for the fill. */
  texture: V.WHITE,
  /** The matrix to apply. */
  matrix: null,
  /** The fill pattern to use. */
  fill: null,
  /** Whether coordinates are 'global' or 'local' */
  textureSpace: "local"
};
Zn.defaultStrokeStyle = {
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
  texture: V.WHITE,
  /** The matrix to apply. */
  matrix: null,
  /** The fill pattern to use. */
  fill: null,
  /** Whether coordinates are 'global' or 'local' */
  textureSpace: "local",
  /** If the stroke is a pixel line. */
  pixelLine: !1
};
let Ut = Zn;
const Qn = class Qe extends Ht {
  constructor(t = {}) {
    super(), this.uid = lt("textStyle"), this._tick = 0, km(t);
    const e = { ...Qe.defaultTextStyle, ...t };
    for (const i in e) {
      const r = i;
      this[r] = e[i];
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
    this._dropShadow !== t && (t !== null && typeof t == "object" ? this._dropShadow = this._createProxy({ ...Qe.defaultDropShadow, ...t }) : this._dropShadow = t ? this._createProxy({ ...Qe.defaultDropShadow }) : null, this.update());
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
    t !== this._originalFill && (this._originalFill = t, this._isFillStyle(t) && (this._originalFill = this._createProxy({ ...Ut.defaultFillStyle, ...t }, () => {
      this._fill = Ue(
        { ...this._originalFill },
        Ut.defaultFillStyle
      );
    })), this._fill = Ue(
      t === 0 ? "black" : t,
      Ut.defaultFillStyle
    ), this.update());
  }
  /** A fillstyle that will be used on the text stroke, e.g., 'blue', '#FCFF00'. */
  get stroke() {
    return this._originalStroke;
  }
  set stroke(t) {
    t !== this._originalStroke && (this._originalStroke = t, this._isFillStyle(t) && (this._originalStroke = this._createProxy({ ...Ut.defaultStrokeStyle, ...t }, () => {
      this._stroke = Ns(
        { ...this._originalStroke },
        Ut.defaultStrokeStyle
      );
    })), this._stroke = Ns(t, Ut.defaultStrokeStyle), this.update());
  }
  update() {
    this._tick++, this.emit("update", this);
  }
  /** Resets all properties to the default values */
  reset() {
    const t = Qe.defaultTextStyle;
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
    return new Qe({
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
      set: (i, r, n) => (i[r] === n || (i[r] = n, e?.(r, n), this.update()), !0)
    });
  }
  _isFillStyle(t) {
    return (t ?? null) !== null && !(nt.isColorLike(t) || t instanceof pe || t instanceof qs);
  }
};
Qn.defaultDropShadow = {
  alpha: 1,
  angle: Math.PI / 6,
  blur: 0,
  color: "black",
  distance: 5
};
Qn.defaultTextStyle = {
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
let Ws = Qn;
function km(s) {
  const t = s;
  if (typeof t.dropShadow == "boolean" && t.dropShadow) {
    const e = Ws.defaultDropShadow;
    s.dropShadow = {
      alpha: t.dropShadowAlpha ?? e.alpha,
      angle: t.dropShadowAngle ?? e.angle,
      blur: t.dropShadowBlur ?? e.blur,
      color: t.dropShadowColor ?? e.color,
      distance: t.dropShadowDistance ?? e.distance
    };
  }
  if (t.strokeThickness !== void 0) {
    G(j, "strokeThickness is now a part of stroke");
    const e = t.stroke;
    let i = {};
    if (nt.isColorLike(e))
      i.color = e;
    else if (e instanceof pe || e instanceof qs)
      i.fill = e;
    else if (Object.hasOwnProperty.call(e, "color") || Object.hasOwnProperty.call(e, "fill"))
      i = e;
    else
      throw new Error("Invalid stroke value.");
    s.stroke = {
      ...i,
      width: t.strokeThickness
    };
  }
  if (Array.isArray(t.fillGradientStops)) {
    if (G(j, "gradient fill is now a fill pattern: `new FillGradient(...)`"), !Array.isArray(t.fill) || t.fill.length === 0)
      throw new Error("Invalid fill value. Expected an array of colors for gradient fill.");
    t.fill.length !== t.fillGradientStops.length && Q("The number of fill colors must match the number of fill gradient stops.");
    const e = new pe({
      start: { x: 0, y: 0 },
      end: { x: 0, y: 1 },
      textureSpace: "local"
    }), i = t.fillGradientStops.slice(), r = t.fill.map((n) => nt.shared.setValue(n).toNumber());
    i.forEach((n, a) => {
      e.addColorStop(n, r[a]);
    }), s.fill = {
      fill: e
    };
  }
}
class Em {
  constructor(t) {
    this._canvasPool = /* @__PURE__ */ Object.create(null), this.canvasOptions = t || {}, this.enableFullScreen = !1;
  }
  /**
   * Creates texture with params that were specified in pool constructor.
   * @param pixelWidth - Width of texture in pixels.
   * @param pixelHeight - Height of texture in pixels.
   */
  _createCanvasAndContext(t, e) {
    const i = J.get().createCanvas();
    i.width = t, i.height = e;
    const r = i.getContext("2d");
    return { canvas: i, context: r };
  }
  /**
   * Gets a Power-of-Two render texture or fullScreen texture
   * @param minWidth - The minimum width of the render texture.
   * @param minHeight - The minimum height of the render texture.
   * @param resolution - The resolution of the render texture.
   * @returns The new render texture.
   */
  getOptimalCanvasAndContext(t, e, i = 1) {
    t = Math.ceil(t * i - 1e-6), e = Math.ceil(e * i - 1e-6), t = Ds(t), e = Ds(e);
    const r = (t << 17) + (e << 1);
    this._canvasPool[r] || (this._canvasPool[r] = []);
    let n = this._canvasPool[r].pop();
    return n || (n = this._createCanvasAndContext(t, e)), n;
  }
  /**
   * Place a render texture back into the pool.
   * @param canvasAndContext
   */
  returnCanvasAndContext(t) {
    const e = t.canvas, { width: i, height: r } = e, n = (i << 17) + (r << 1);
    t.context.resetTransform(), t.context.clearRect(0, 0, i, r), this._canvasPool[n].push(t);
  }
  clear() {
    this._canvasPool = {};
  }
}
const vn = new Em();
ns.register(vn);
const So = 1e5;
function To(s, t, e, i = 0) {
  if (s.texture === V.WHITE && !s.fill)
    return nt.shared.setValue(s.color).setAlpha(s.alpha ?? 1).toHexa();
  if (s.fill) {
    if (s.fill instanceof qs) {
      const r = s.fill, n = t.createPattern(r.texture.source.resource, "repeat"), a = r.transform.copyTo(U.shared);
      return a.scale(
        r.texture.frame.width,
        r.texture.frame.height
      ), n.setTransform(a), n;
    } else if (s.fill instanceof pe) {
      const r = s.fill, n = r.type === "linear", a = r.textureSpace === "local";
      let o = 1, h = 1;
      a && e && (o = e.width + i, h = e.height + i);
      let l, c = !1;
      if (n) {
        const { start: u, end: f } = r;
        l = t.createLinearGradient(
          u.x * o,
          u.y * h,
          f.x * o,
          f.y * h
        ), c = Math.abs(f.x - u.x) < Math.abs((f.y - u.y) * 0.1);
      } else {
        const { center: u, innerRadius: f, outerCenter: d, outerRadius: g } = r;
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
          r.colorStops.forEach((g) => {
            const p = d + g.offset * u;
            l.addColorStop(
              // fix to 5 decimal places to avoid floating point precision issues
              Math.floor(p * So) / So,
              nt.shared.setValue(g.color).toHex()
            );
          });
        }
      } else
        r.colorStops.forEach((u) => {
          l.addColorStop(u.offset, nt.shared.setValue(u.color).toHex());
        });
      return l;
    }
  } else {
    const r = t.createPattern(s.texture.source.resource, "repeat"), n = s.matrix.copyTo(U.shared);
    return n.scale(s.texture.frame.width, s.texture.frame.height), r.setTransform(n), r;
  }
  return Q("FillStyle not recognised", s), "red";
}
const Ql = class Jl extends Il {
  /**
   * @param options - The options for the dynamic bitmap font.
   */
  constructor(t) {
    super(), this.resolution = 1, this.pages = [], this._padding = 0, this._measureCache = /* @__PURE__ */ Object.create(null), this._currentChars = [], this._currentX = 0, this._currentY = 0, this._currentMaxCharHeight = 0, this._currentPageIndex = -1, this._skipKerning = !1;
    const e = { ...Jl.defaultOptions, ...t };
    this._textureSize = e.textureSize, this._mipmap = e.mipmap;
    const i = e.style.clone();
    e.overrideFill && (i._fill.color = 16777215, i._fill.alpha = 1, i._fill.texture = V.WHITE, i._fill.fill = null), this.applyFillAsTint = e.overrideFill;
    const r = i.fontSize;
    i.fontSize = this.baseMeasurementFontSize;
    const n = _n(i);
    e.overrideSize ? i._stroke && (i._stroke.width *= this.baseRenderedFontSize / r) : i.fontSize = this.baseRenderedFontSize = r, this._style = i, this._skipKerning = e.skipKerning ?? !1, this.resolution = e.resolution ?? 1, this._padding = e.padding ?? 4, e.textureStyle && (this._textureStyle = e.textureStyle instanceof zs ? e.textureStyle : new zs(e.textureStyle)), this.fontMetrics = Ms.measureFont(n), this.lineHeight = i.lineHeight || this.fontMetrics.fontSize || i.fontSize;
  }
  ensureCharacters(t) {
    const e = Ms.graphemeSegmenter(t).filter((m) => !this._currentChars.includes(m)).filter((m, _, x) => x.indexOf(m) === _);
    if (!e.length)
      return;
    this._currentChars = [...this._currentChars, ...e];
    let i;
    this._currentPageIndex === -1 ? i = this._nextPage() : i = this.pages[this._currentPageIndex];
    let { canvas: r, context: n } = i.canvasAndContext, a = i.texture.source;
    const o = this._style;
    let h = this._currentX, l = this._currentY, c = this._currentMaxCharHeight;
    const u = this.baseRenderedFontSize / this.baseMeasurementFontSize, f = this._padding * u;
    let d = !1;
    const g = r.width / this.resolution, p = r.height / this.resolution;
    for (let m = 0; m < e.length; m++) {
      const _ = e[m], x = Ms.measureText(_, o, r, !1);
      x.lineHeight = x.height;
      const y = x.width * u, b = Math.ceil((o.fontStyle === "italic" ? 2 : 1) * y), w = x.height * u, A = b + f * 2, v = w + f * 2;
      if (d = !1, _ !== `
` && _ !== "\r" && _ !== "	" && _ !== " " && (d = !0, c = Math.ceil(Math.max(v, c))), h + A > g && (l += c, c = v, h = 0, l + c > p)) {
        a.update();
        const T = this._nextPage();
        r = T.canvasAndContext.canvas, n = T.canvasAndContext.context, a = T.texture.source, h = 0, l = 0, c = 0;
      }
      const C = y / u - (o.dropShadow?.distance ?? 0) - (o._stroke?.width ?? 0);
      if (this.chars[_] = {
        id: _.codePointAt(0),
        xOffset: -this._padding,
        yOffset: -this._padding,
        xAdvance: C,
        kerning: {}
      }, d) {
        this._drawGlyph(
          n,
          x,
          h + f,
          l + f,
          u,
          o
        );
        const T = a.width * u, P = a.height * u, k = new ut(
          h / T * a.width,
          l / P * a.height,
          A / T * a.width,
          v / P * a.height
        );
        this.chars[_].texture = new V({
          source: a,
          frame: k
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
    return G(j, "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."), this.pages;
  }
  _applyKerning(t, e) {
    const i = this._measureCache;
    for (let r = 0; r < t.length; r++) {
      const n = t[r];
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
    const t = this.resolution, e = vn.getOptimalCanvasAndContext(
      this._textureSize,
      this._textureSize,
      t
    );
    this._setupContext(e.context, this._style, t);
    const i = t * (this.baseRenderedFontSize / this.baseMeasurementFontSize), r = new V({
      source: new Xe({
        resource: e.canvas,
        resolution: i,
        alphaMode: "premultiply-alpha-on-upload",
        autoGenerateMipmaps: this._mipmap
      })
    });
    this._textureStyle && (r.source.style = this._textureStyle);
    const n = {
      canvasAndContext: e,
      texture: r
    };
    return this.pages[this._currentPageIndex] = n, n;
  }
  // canvas style!
  _setupContext(t, e, i) {
    e.fontSize = this.baseRenderedFontSize, t.scale(i, i), t.font = _n(e), e.fontSize = this.baseMeasurementFontSize, t.textBaseline = e.textBaseline;
    const r = e._stroke, n = r?.width ?? 0;
    if (r && (t.lineWidth = n, t.lineJoin = r.join, t.miterLimit = r.miterLimit, t.strokeStyle = To(r, t)), e._fill && (t.fillStyle = To(e._fill, t)), e.dropShadow) {
      const a = e.dropShadow, o = nt.shared.setValue(a.color).toArray(), h = a.blur * i, l = a.distance * i;
      t.shadowColor = `rgba(${o[0] * 255},${o[1] * 255},${o[2] * 255},${a.alpha})`, t.shadowBlur = h, t.shadowOffsetX = Math.cos(a.angle) * l, t.shadowOffsetY = Math.sin(a.angle) * l;
    } else
      t.shadowColor = "black", t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0;
  }
  _drawGlyph(t, e, i, r, n, a) {
    const o = e.text, h = e.fontProperties, c = (a._stroke?.width ?? 0) * n, u = i + c / 2, f = r - c / 2, d = h.descent * n, g = e.lineHeight * n;
    let p = !1;
    a.stroke && c && (p = !0, t.strokeText(o, u, f + g - d));
    const { shadowBlur: m, shadowOffsetX: _, shadowOffsetY: x } = t;
    a._fill && (p && (t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0), t.fillText(o, u, f + g - d)), p && (t.shadowBlur = m, t.shadowOffsetX = _, t.shadowOffsetY = x);
  }
  destroy() {
    super.destroy();
    for (let t = 0; t < this.pages.length; t++) {
      const { canvasAndContext: e, texture: i } = this.pages[t];
      vn.returnCanvasAndContext(e), i.destroy(!0);
    }
    this.pages = null;
  }
};
Ql.defaultOptions = {
  textureSize: 512,
  style: new Ws(),
  mipmap: !0
};
let Co = Ql;
function Rm(s, t, e, i) {
  const r = {
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
  r.offsetY = e.baseLineOffset;
  let n = r.lines[0], a = null, o = !0;
  const h = {
    width: 0,
    start: 0,
    index: 0,
    // use index to not modify the array as we use it a lot!
    positions: [],
    chars: []
  }, l = e.baseMeasurementFontSize / t.fontSize, c = t.letterSpacing * l, u = t.wordWrapWidth * l, f = t.lineHeight ? t.lineHeight * l : e.lineHeight, d = t.wordWrap && t.breakWords, g = (_) => {
    const x = n.width;
    for (let y = 0; y < h.index; y++) {
      const b = _.positions[y];
      n.chars.push(_.chars[y]), n.charPositions.push(b + x);
    }
    n.width += _.width, o = !1, h.width = 0, h.index = 0, h.chars.length = 0;
  }, p = () => {
    let _ = n.chars.length - 1;
    if (i) {
      let x = n.chars[_];
      for (; x === " "; )
        n.width -= e.chars[x].xAdvance, x = n.chars[--_];
    }
    r.width = Math.max(r.width, n.width), n = {
      width: 0,
      charPositions: [],
      chars: [],
      spaceWidth: 0,
      spacesIndex: []
    }, o = !0, r.lines.push(n), r.height += f;
  }, m = (_) => _ - c > u;
  for (let _ = 0; _ < s.length + 1; _++) {
    let x;
    const y = _ === s.length;
    y || (x = s[_]);
    const b = e.chars[x] || e.chars[" "];
    if (/(?:\s)/.test(x) || x === "\r" || x === `
` || y) {
      if (!o && t.wordWrap && m(n.width + h.width) ? (p(), g(h), y || n.charPositions.push(0)) : (h.start = n.width, g(h), y || n.charPositions.push(0)), x === "\r" || x === `
`)
        p();
      else if (!y) {
        const C = b.xAdvance + (b.kerning[a] || 0) + c;
        n.width += C, n.spaceWidth = C, n.spacesIndex.push(n.charPositions.length), n.chars.push(x);
      }
    } else {
      const v = b.kerning[a] || 0, C = b.xAdvance + v + c;
      d && m(n.width + h.width + C) && (g(h), p()), h.positions[h.index++] = h.width + v, h.chars.push(x), h.width += C;
    }
    a = x;
  }
  return p(), t.align === "center" ? Fm(r) : t.align === "right" ? Im(r) : t.align === "justify" && Bm(r), r;
}
function Fm(s) {
  for (let t = 0; t < s.lines.length; t++) {
    const e = s.lines[t], i = s.width / 2 - e.width / 2;
    for (let r = 0; r < e.charPositions.length; r++)
      e.charPositions[r] += i;
  }
}
function Im(s) {
  for (let t = 0; t < s.lines.length; t++) {
    const e = s.lines[t], i = s.width - e.width;
    for (let r = 0; r < e.charPositions.length; r++)
      e.charPositions[r] += i;
  }
}
function Bm(s) {
  const t = s.width;
  for (let e = 0; e < s.lines.length; e++) {
    const i = s.lines[e];
    let r = 0, n = i.spacesIndex[r++], a = 0;
    const o = i.spacesIndex.length, l = (t - i.width) / o;
    for (let c = 0; c < i.charPositions.length; c++)
      c === n && (n = i.spacesIndex[r++], a += l), i.charPositions[c] += a;
  }
}
function Om(s) {
  if (s === "")
    return [];
  typeof s == "string" && (s = [s]);
  const t = [];
  for (let e = 0, i = s.length; e < i; e++) {
    const r = s[e];
    if (Array.isArray(r)) {
      if (r.length !== 2)
        throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${r.length}.`);
      if (r[0].length === 0 || r[1].length === 0)
        throw new Error("[BitmapFont]: Invalid character delimiter.");
      const n = r[0].charCodeAt(0), a = r[1].charCodeAt(0);
      if (a < n)
        throw new Error("[BitmapFont]: Invalid character range.");
      for (let o = n, h = a; o <= h; o++)
        t.push(String.fromCharCode(o));
    } else
      t.push(...Array.from(r));
  }
  if (t.length === 0)
    throw new Error("[BitmapFont]: Empty set when resolving characters.");
  return t;
}
let vs = 0;
class Lm {
  constructor() {
    this.ALPHA = [["a", "z"], ["A", "Z"], " "], this.NUMERIC = [["0", "9"]], this.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "], this.ASCII = [[" ", "~"]], this.defaultOptions = {
      chars: this.ALPHANUMERIC,
      resolution: 1,
      padding: 4,
      skipKerning: !1,
      textureStyle: null
    }, this.measureCache = Bl(1e3);
  }
  /**
   * Get a font for the specified text and style.
   * @param text - The text to get the font for
   * @param style - The style to use
   */
  getFont(t, e) {
    let i = `${e.fontFamily}-bitmap`, r = !0;
    if (e._fill.fill && !e._stroke ? (i += e._fill.fill.styleKey, r = !1) : (e._stroke || e.dropShadow) && (i = `${e.styleKey}-bitmap`, r = !1), !Z.has(i)) {
      const a = Object.create(e);
      a.lineHeight = 0;
      const o = new Co({
        style: a,
        overrideFill: r,
        overrideSize: !0,
        ...this.defaultOptions
      });
      vs++, vs > 50 && Q("BitmapText", `You have dynamically created ${vs} bitmap fonts, this can be inefficient. Try pre installing your font styles using \`BitmapFont.install({name:"style1", style})\``), o.once("destroy", () => {
        vs--, Z.remove(i);
      }), Z.set(
        i,
        o
      );
    }
    const n = Z.get(i);
    return n.ensureCharacters?.(t), n;
  }
  /**
   * Get the layout of a text for the specified style.
   * @param text - The text to get the layout for
   * @param style - The style to use
   * @param trimEnd - Whether to ignore whitespaces at the end of each line
   */
  getLayout(t, e, i = !0) {
    const r = this.getFont(t, e), n = `${t}-${e.styleKey}-${i}`;
    if (this.measureCache.has(n))
      return this.measureCache.get(n);
    const a = Ms.graphemeSegmenter(t), o = Rm(a, e, r, i);
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
    }, G(j, "BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})"));
    const i = e?.name;
    if (!i)
      throw new Error("[BitmapFontManager] Property `name` is required.");
    e = { ...this.defaultOptions, ...e };
    const r = e.style, n = r instanceof Ws ? r : new Ws(r), a = e.dynamicFill ?? this._canUseTintForStyle(n), o = new Co({
      style: n,
      overrideFill: a,
      skipKerning: e.skipKerning,
      padding: e.padding,
      resolution: e.resolution,
      overrideSize: !1,
      textureStyle: e.textureStyle
    }), h = Om(e.chars);
    return o.ensureCharacters(h.join("")), Z.set(`${i}-bitmap`, o), o.once("destroy", () => Z.remove(`${i}-bitmap`)), o;
  }
  /**
   * Uninstalls a bitmap font from the cache.
   * @param {string} name - The name of the bitmap font to uninstall.
   */
  uninstall(t) {
    const e = `${t}-bitmap`, i = Z.get(e);
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
const Po = new Lm();
class tc extends Il {
  constructor(t, e) {
    super();
    const { textures: i, data: r } = t;
    Object.keys(r.pages).forEach((n) => {
      const a = r.pages[parseInt(n, 10)], o = i[a.id];
      this.pages.push({ texture: o });
    }), Object.keys(r.chars).forEach((n) => {
      const a = r.chars[n], {
        frame: o,
        source: h,
        rotate: l
      } = i[a.page], c = H.transformRectCoords(
        a,
        o,
        l,
        new ut()
      ), u = new V({
        frame: c,
        orig: new ut(0, 0, a.width, a.height),
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
    }), this.baseRenderedFontSize = r.fontSize, this.baseMeasurementFontSize = r.fontSize, this.fontMetrics = {
      ascent: 0,
      descent: 0,
      fontSize: r.fontSize
    }, this.baseLineOffset = r.baseLineOffset, this.lineHeight = r.lineHeight, this.fontFamily = r.fontFamily, this.distanceField = r.distanceField ?? {
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
    Po.install(t);
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
    Po.uninstall(t);
  }
}
const Br = {
  test(s) {
    return typeof s == "string" && s.startsWith("info face=");
  },
  parse(s) {
    const t = s.match(/^[a-z]+\s+.+$/gm), e = {
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
        const m = d[p].split("="), _ = m[0], x = m[1].replace(/"/gm, ""), y = parseFloat(x), b = isNaN(y) ? x : y;
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
    }, [r] = e.info, [n] = e.common, [a] = e.distanceField ?? [];
    a && (i.distanceField = {
      range: parseInt(a.distanceRange, 10),
      type: a.fieldType
    }), i.fontSize = parseInt(r.size, 10), i.fontFamily = r.face, i.lineHeight = parseInt(n.lineHeight, 10);
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
}, Mo = {
  test(s) {
    const t = s;
    return typeof t != "string" && "getElementsByTagName" in t && t.getElementsByTagName("page").length && t.getElementsByTagName("info")[0].getAttribute("face") !== null;
  },
  parse(s) {
    const t = {
      chars: {},
      pages: [],
      lineHeight: 0,
      fontSize: 0,
      fontFamily: "",
      distanceField: null,
      baseLineOffset: 0
    }, e = s.getElementsByTagName("info")[0], i = s.getElementsByTagName("common")[0], r = s.getElementsByTagName("distanceField")[0];
    r && (t.distanceField = {
      type: r.getAttribute("fieldType"),
      range: parseInt(r.getAttribute("distanceRange"), 10)
    });
    const n = s.getElementsByTagName("page"), a = s.getElementsByTagName("char"), o = s.getElementsByTagName("kerning");
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
}, ko = {
  test(s) {
    return typeof s == "string" && s.match(/<font(\s|>)/) ? Mo.test(J.get().parseXML(s)) : !1;
  },
  parse(s) {
    return Mo.parse(J.get().parseXML(s));
  }
}, Dm = [".xml", ".fnt"], zm = {
  extension: {
    type: L.CacheParser,
    name: "cacheBitmapFont"
  },
  test: (s) => s instanceof tc,
  getCacheableAssets(s, t) {
    const e = {};
    return s.forEach((i) => {
      e[i] = t, e[`${i}-bitmap`] = t;
    }), e[`${t.fontFamily}-bitmap`] = t, e;
  }
}, Gm = {
  extension: {
    type: L.LoadParser,
    priority: Ce.Normal
  },
  /** used for deprecation purposes */
  name: "loadBitmapFont",
  id: "bitmap-font",
  test(s) {
    return Dm.includes(Lt.extname(s).toLowerCase());
  },
  async testParse(s) {
    return Br.test(s) || ko.test(s);
  },
  async parse(s, t, e) {
    const i = Br.test(s) ? Br.parse(s) : ko.parse(s), { src: r } = t, { pages: n } = i, a = [], o = i.distanceField ? {
      scaleMode: "linear",
      alphaMode: "premultiply-alpha-on-upload",
      autoGenerateMipmaps: !1,
      resolution: 1
    } : {};
    for (let u = 0; u < n.length; ++u) {
      const f = n[u].file;
      let d = Lt.join(Lt.dirname(r), f);
      d = ln(d, r), a.push({
        src: d,
        data: o
      });
    }
    const h = await e.load(a), l = a.map((u) => h[u.src]);
    return new tc({
      data: i,
      textures: l
    }, r);
  },
  async load(s, t) {
    return await (await J.get().fetch(s)).text();
  },
  async unload(s, t, e) {
    await Promise.all(s.pages.map((i) => e.unload(i.texture.source._sourceOrigin))), s.destroy();
  }
};
class Um {
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
const Nm = {
  extension: {
    type: L.CacheParser,
    name: "cacheTextureArray"
  },
  test: (s) => Array.isArray(s) && s.every((t) => t instanceof V),
  getCacheableAssets: (s, t) => {
    const e = {};
    return s.forEach((i) => {
      t.forEach((r, n) => {
        e[i + (n === 0 ? "" : n + 1)] = r;
      });
    }), e;
  }
};
async function ec(s) {
  if ("Image" in globalThis)
    return new Promise((t) => {
      const e = new Image();
      e.onload = () => {
        t(!0);
      }, e.onerror = () => {
        t(!1);
      }, e.src = s;
    });
  if ("createImageBitmap" in globalThis && "fetch" in globalThis) {
    try {
      const t = await (await fetch(s)).blob();
      await createImageBitmap(t);
    } catch {
      return !1;
    }
    return !0;
  }
  return !1;
}
const Wm = {
  extension: {
    type: L.DetectionParser,
    priority: 1
  },
  test: async () => ec(
    // eslint-disable-next-line max-len
    "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="
  ),
  add: async (s) => [...s, "avif"],
  remove: async (s) => s.filter((t) => t !== "avif")
}, Eo = ["png", "jpg", "jpeg"], Vm = {
  extension: {
    type: L.DetectionParser,
    priority: -1
  },
  test: () => Promise.resolve(!0),
  add: async (s) => [...s, ...Eo],
  remove: async (s) => s.filter((t) => !Eo.includes(t))
}, Ym = "WorkerGlobalScope" in globalThis && globalThis instanceof globalThis.WorkerGlobalScope;
function Zs(s) {
  return Ym ? !1 : document.createElement("video").canPlayType(s) !== "";
}
const $m = {
  extension: {
    type: L.DetectionParser,
    priority: 0
  },
  test: async () => Zs("video/mp4"),
  add: async (s) => [...s, "mp4", "m4v"],
  remove: async (s) => s.filter((t) => t !== "mp4" && t !== "m4v")
}, Xm = {
  extension: {
    type: L.DetectionParser,
    priority: 0
  },
  test: async () => Zs("video/ogg"),
  add: async (s) => [...s, "ogv"],
  remove: async (s) => s.filter((t) => t !== "ogv")
}, jm = {
  extension: {
    type: L.DetectionParser,
    priority: 0
  },
  test: async () => Zs("video/webm"),
  add: async (s) => [...s, "webm"],
  remove: async (s) => s.filter((t) => t !== "webm")
}, Hm = {
  extension: {
    type: L.DetectionParser,
    priority: 0
  },
  test: async () => ec(
    "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
  ),
  add: async (s) => [...s, "webp"],
  remove: async (s) => s.filter((t) => t !== "webp")
}, ic = class ks {
  constructor() {
    this.loadOptions = { ...ks.defaultOptions }, this._parsers = [], this._parsersValidated = !1, this.parsers = new Proxy(this._parsers, {
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
      let r = null, n = null;
      if ((e.parser || e.loadParser) && (n = this._parserHash[e.parser || e.loadParser], e.loadParser && Q(
        `[Assets] "loadParser" is deprecated, use "parser" instead for ${t}`
      ), n || Q(
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
          return Q(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`), null;
      }
      r = await n.load(t, e, this), i.parser = n;
      for (let a = 0; a < this.parsers.length; a++) {
        const o = this.parsers[a];
        o.parse && o.parse && await o.testParse?.(r, e, this) && (r = await o.parse(r, e, this) || r, i.parser = o);
      }
      return r;
    })(), i;
  }
  async load(t, e) {
    this._parsersValidated || this._validateParsers();
    const i = typeof e == "function" ? { ...ks.defaultOptions, ...this.loadOptions, onProgress: e } : { ...ks.defaultOptions, ...this.loadOptions, ...e || {} }, { onProgress: r, onError: n, strategy: a, retryCount: o, retryDelay: h } = i;
    let l = 0;
    const c = {}, u = Gs(t), f = Xt(t, (p) => ({
      alias: [p],
      src: p,
      data: {}
    })), d = f.reduce((p, m) => p + (m.progressSize || 1), 0), g = f.map(async (p) => {
      const m = Lt.toAbsolute(p.src);
      c[p.src] || (await this._loadAssetWithRetry(m, p, { onProgress: r, onError: n, strategy: a, retryCount: o, retryDelay: h }, c), l += p.progressSize || 1, r && r(l / d));
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
    const i = Xt(t, (r) => ({
      alias: [r],
      src: r
    })).map(async (r) => {
      const n = Lt.toAbsolute(r.src), a = this.promiseCache[n];
      if (a) {
        const o = await a.promise;
        delete this.promiseCache[n], await a.parser?.unload?.(o, r, this);
      }
    });
    await Promise.all(i);
  }
  /** validates our parsers, right now it only checks for name conflicts but we can add more here as required! */
  _validateParsers() {
    this._parsersValidated = !0, this._parserHash = this._parsers.filter((t) => t.name || t.id).reduce((t, e) => (!e.name && !e.id ? Q("[Assets] parser should have an id") : (t[e.name] || t[e.id]) && Q(`[Assets] parser id conflict "${e.id}"`), t[e.name] = e, e.id && (t[e.id] = e), t), {});
  }
  async _loadAssetWithRetry(t, e, i, r) {
    let n = 0;
    const { onError: a, strategy: o, retryCount: h, retryDelay: l } = i, c = (u) => new Promise((f) => setTimeout(f, u));
    for (; ; )
      try {
        this.promiseCache[t] || (this.promiseCache[t] = this._getLoadPromiseAndParser(t, e)), r[e.src] = await this.promiseCache[t].promise;
        return;
      } catch (u) {
        delete this.promiseCache[t], delete r[e.src], n++;
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
ic.defaultOptions = {
  onProgress: void 0,
  onError: void 0,
  strategy: "throw",
  retryCount: 3,
  retryDelay: 250
};
let qm = ic;
function xi(s, t) {
  if (Array.isArray(t)) {
    for (const e of t)
      if (s.startsWith(`data:${e}`))
        return !0;
    return !1;
  }
  return s.startsWith(`data:${t}`);
}
function yi(s, t) {
  const e = s.split("?")[0], i = Lt.extname(e).toLowerCase();
  return Array.isArray(t) ? t.includes(i) : i === t;
}
const Km = ".json", Zm = "application/json", Qm = {
  extension: {
    type: L.LoadParser,
    priority: Ce.Low
  },
  /** used for deprecation purposes */
  name: "loadJson",
  id: "json",
  test(s) {
    return xi(s, Zm) || yi(s, Km);
  },
  async load(s) {
    return await (await J.get().fetch(s)).json();
  }
}, Jm = ".txt", tg = "text/plain", eg = {
  /** used for deprecation purposes */
  name: "loadTxt",
  id: "text",
  extension: {
    type: L.LoadParser,
    priority: Ce.Low,
    name: "loadTxt"
  },
  test(s) {
    return xi(s, tg) || yi(s, Jm);
  },
  async load(s) {
    return await (await J.get().fetch(s)).text();
  }
}, ig = [
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
], sg = [".ttf", ".otf", ".woff", ".woff2"], rg = [
  "font/ttf",
  "font/otf",
  "font/woff",
  "font/woff2"
], ng = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
function ag(s) {
  const t = Lt.extname(s), r = Lt.basename(s, t).replace(/(-|_)/g, " ").toLowerCase().split(" ").map((o) => o.charAt(0).toUpperCase() + o.slice(1));
  let n = r.length > 0;
  for (const o of r)
    if (!o.match(ng)) {
      n = !1;
      break;
    }
  let a = r.join(" ");
  return n || (a = `"${a.replace(/[\\"]/g, "\\$&")}"`), a;
}
const og = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;
function hg(s) {
  return og.test(s) ? s : encodeURI(s);
}
const lg = {
  extension: {
    type: L.LoadParser,
    priority: Ce.Low
  },
  /** used for deprecation purposes */
  name: "loadWebFont",
  id: "web-font",
  test(s) {
    return xi(s, rg) || yi(s, sg);
  },
  async load(s, t) {
    const e = J.get().getFontFaceSet();
    if (e) {
      const i = [], r = t.data?.family ?? ag(s), n = t.data?.weights?.filter((o) => ig.includes(o)) ?? ["normal"], a = t.data ?? {};
      for (let o = 0; o < n.length; o++) {
        const h = n[o], l = new FontFace(r, `url(${hg(s)})`, {
          ...a,
          weight: h
        });
        await l.load(), e.add(l), i.push(l);
      }
      return Z.has(`${r}-and-url`) ? Z.get(`${r}-and-url`).entries.push({ url: s, faces: i }) : Z.set(`${r}-and-url`, {
        entries: [{ url: s, faces: i }]
      }), i.length === 1 ? i[0] : i;
    }
    return Q("[loadWebFont] FontFace API is not supported. Skipping loading font"), null;
  },
  unload(s) {
    const t = Array.isArray(s) ? s : [s], e = t[0].family, i = Z.get(`${e}-and-url`), r = i.entries.find((n) => n.faces.some((a) => t.indexOf(a) !== -1));
    r.faces = r.faces.filter((n) => t.indexOf(n) === -1), r.faces.length === 0 && (i.entries = i.entries.filter((n) => n !== r)), t.forEach((n) => {
      J.get().getFontFaceSet().delete(n);
    }), i.entries.length === 0 && Z.remove(`${e}-and-url`);
  }
};
function Jn(s, t = 1) {
  const e = gi.RETINA_PREFIX?.exec(s);
  return e ? parseFloat(e[1]) : t;
}
function ta(s, t, e) {
  s.label = e, s._sourceOrigin = e;
  const i = new V({
    source: s,
    label: e
  }), r = () => {
    delete t.promiseCache[e], Z.has(e) && Z.remove(e);
  };
  return i.source.once("destroy", () => {
    t.promiseCache[e] && (Q("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."), r());
  }), i.once("destroy", () => {
    s.destroyed || (Q("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."), r());
  }), i;
}
const cg = ".svg", ug = "image/svg+xml", dg = {
  extension: {
    type: L.LoadParser,
    priority: Ce.Low,
    name: "loadSVG"
  },
  /** used for deprecation purposes */
  name: "loadSVG",
  id: "svg",
  config: {
    crossOrigin: "anonymous",
    parseAsGraphicsContext: !1
  },
  test(s) {
    return xi(s, ug) || yi(s, cg);
  },
  async load(s, t, e) {
    return t.data?.parseAsGraphicsContext ?? this.config.parseAsGraphicsContext ? pg(s) : fg(s, t, e, this.config.crossOrigin);
  },
  unload(s) {
    s.destroy(!0);
  }
};
async function fg(s, t, e, i) {
  const r = await J.get().fetch(s), n = J.get().createImage();
  n.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(await r.text())}`, n.crossOrigin = i, await n.decode();
  const a = t.data?.width ?? n.width, o = t.data?.height ?? n.height, h = t.data?.resolution || Jn(s), l = Math.ceil(a * h), c = Math.ceil(o * h), u = J.get().createCanvas(l, c), f = u.getContext("2d");
  f.imageSmoothingEnabled = !0, f.imageSmoothingQuality = "high", f.drawImage(n, 0, 0, a * h, o * h);
  const { parseAsGraphicsContext: d, ...g } = t.data ?? {}, p = new Xe({
    resource: u,
    alphaMode: "premultiply-alpha-on-upload",
    resolution: h,
    ...g
  });
  return ta(p, e, s);
}
async function pg(s) {
  const e = await (await J.get().fetch(s)).text(), i = new Ut();
  return i.svg(e), i;
}
const mg = `(function () {
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
let ni = null, An = class {
  constructor() {
    ni || (ni = URL.createObjectURL(new Blob([mg], { type: "application/javascript" }))), this.worker = new Worker(ni);
  }
};
An.revokeObjectURL = function() {
  ni && (URL.revokeObjectURL(ni), ni = null);
};
const gg = `(function () {
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
let ai = null;
class sc {
  constructor() {
    ai || (ai = URL.createObjectURL(new Blob([gg], { type: "application/javascript" }))), this.worker = new Worker(ai);
  }
}
sc.revokeObjectURL = function() {
  ai && (URL.revokeObjectURL(ai), ai = null);
};
let Ro = 0, Or;
class _g {
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
      const { worker: e } = new An();
      e.addEventListener("message", (i) => {
        e.terminate(), An.revokeObjectURL(), t(i.data);
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
    Or === void 0 && (Or = navigator.hardwareConcurrency || 4);
    let t = this._workerPool.pop();
    return !t && this._createdWorkers < Or && (this._createdWorkers++, t = new sc().worker, t.addEventListener("message", (e) => {
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
    const i = new Promise((r, n) => {
      this._queue.push({ id: t, arguments: e, resolve: r, reject: n });
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
    this._resolveHash[Ro] = { resolve: e.resolve, reject: e.reject }, t.postMessage({
      data: e.arguments,
      uuid: Ro++,
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
const Fo = new _g(), xg = [".jpeg", ".jpg", ".png", ".webp", ".avif"], yg = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif"
];
async function bg(s, t) {
  const e = await J.get().fetch(s);
  if (!e.ok)
    throw new Error(`[loadImageBitmap] Failed to fetch ${s}: ${e.status} ${e.statusText}`);
  const i = await e.blob();
  return t?.data?.alphaMode === "premultiplied-alpha" ? createImageBitmap(i, { premultiplyAlpha: "none" }) : createImageBitmap(i);
}
const rc = {
  /** used for deprecation purposes */
  name: "loadTextures",
  id: "texture",
  extension: {
    type: L.LoadParser,
    priority: Ce.High,
    name: "loadTextures"
  },
  config: {
    preferWorkers: !0,
    preferCreateImageBitmap: !0,
    crossOrigin: "anonymous"
  },
  test(s) {
    return xi(s, yg) || yi(s, xg);
  },
  async load(s, t, e) {
    let i = null;
    globalThis.createImageBitmap && this.config.preferCreateImageBitmap ? this.config.preferWorkers && await Fo.isImageBitmapSupported() ? i = await Fo.loadImageBitmap(s, t) : i = await bg(s, t) : i = await new Promise((n, a) => {
      i = J.get().createImage(), i.crossOrigin = this.config.crossOrigin, i.src = s, i.complete ? n(i) : (i.onload = () => {
        n(i);
      }, i.onerror = a);
    });
    const r = new Xe({
      resource: i,
      alphaMode: "premultiply-alpha-on-upload",
      resolution: t.data?.resolution || Jn(s),
      ...t.data
    });
    return ta(r, e, s);
  },
  unload(s) {
    s.destroy(!0);
  }
}, wg = [".mp4", ".m4v", ".webm", ".ogg", ".ogv", ".h264", ".avi", ".mov"];
let Lr, Dr;
function vg(s, t, e) {
  e === void 0 && !t.startsWith("data:") ? s.crossOrigin = Sg(t) : e !== !1 && (s.crossOrigin = typeof e == "string" ? e : "anonymous");
}
function Ag(s) {
  return new Promise((t, e) => {
    s.addEventListener("canplaythrough", i), s.addEventListener("error", r), s.load();
    function i() {
      n(), t();
    }
    function r(a) {
      n(), e(a);
    }
    function n() {
      s.removeEventListener("canplaythrough", i), s.removeEventListener("error", r);
    }
  });
}
function Sg(s, t = globalThis.location) {
  if (s.startsWith("data:"))
    return "";
  t || (t = globalThis.location);
  const e = new URL(s, document.baseURI);
  return e.hostname !== t.hostname || e.port !== t.port || e.protocol !== t.protocol ? "anonymous" : "";
}
function Tg() {
  const s = [], t = [];
  for (const e of wg) {
    const i = Ui.MIME_TYPES[e.substring(1)] || `video/${e.substring(1)}`;
    Zs(i) && (s.push(e), t.includes(i) || t.push(i));
  }
  return {
    validVideoExtensions: s,
    validVideoMime: t
  };
}
const Cg = {
  /** used for deprecation purposes */
  name: "loadVideo",
  id: "video",
  extension: {
    type: L.LoadParser,
    name: "loadVideo"
  },
  test(s) {
    if (!Lr || !Dr) {
      const { validVideoExtensions: i, validVideoMime: r } = Tg();
      Lr = i, Dr = r;
    }
    const t = xi(s, Dr), e = yi(s, Lr);
    return t || e;
  },
  async load(s, t, e) {
    const i = {
      ...Ui.defaultOptions,
      resolution: t.data?.resolution || Jn(s),
      alphaMode: t.data?.alphaMode || await al(),
      ...t.data
    }, r = document.createElement("video"), n = {
      preload: i.autoLoad !== !1 ? "auto" : void 0,
      "webkit-playsinline": i.playsinline !== !1 ? "" : void 0,
      playsinline: i.playsinline !== !1 ? "" : void 0,
      muted: i.muted === !0 ? "" : void 0,
      loop: i.loop === !0 ? "" : void 0,
      autoplay: i.autoPlay !== !1 ? "" : void 0
    };
    Object.keys(n).forEach((h) => {
      const l = n[h];
      l !== void 0 && r.setAttribute(h, l);
    }), i.muted === !0 && (r.muted = !0), vg(r, s, i.crossorigin);
    const a = document.createElement("source");
    let o;
    if (i.mime)
      o = i.mime;
    else if (s.startsWith("data:"))
      o = s.slice(5, s.indexOf(";"));
    else if (!s.startsWith("blob:")) {
      const h = s.split("?")[0].slice(s.lastIndexOf(".") + 1).toLowerCase();
      o = Ui.MIME_TYPES[h] || `video/${h}`;
    }
    return a.src = s, o && (a.type = o), new Promise((h) => {
      const l = async () => {
        const c = new Ui({ ...i, resource: r });
        r.removeEventListener("canplay", l), t.data.preload && await Ag(r), h(ta(c, e, s));
      };
      i.preload && !i.autoPlay && r.load(), r.addEventListener("canplay", l), r.appendChild(a);
    });
  },
  unload(s) {
    s.destroy(!0);
  }
}, nc = {
  extension: {
    type: L.ResolveParser,
    name: "resolveTexture"
  },
  test: rc.test,
  parse: (s) => ({
    resolution: parseFloat(gi.RETINA_PREFIX.exec(s)?.[1] ?? "1"),
    format: s.split(".").pop(),
    src: s
  })
}, Pg = {
  extension: {
    type: L.ResolveParser,
    priority: -2,
    name: "resolveJson"
  },
  test: (s) => gi.RETINA_PREFIX.test(s) && s.endsWith(".json"),
  parse: nc.parse
};
class Mg {
  constructor() {
    this._detections = [], this._initialized = !1, this.resolver = new gi(), this.loader = new qm(), this.cache = Z, this._backgroundLoader = new Um(this.loader), this._backgroundLoader.active = !0, this.reset();
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
      Q("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");
      return;
    }
    if (this._initialized = !0, t.defaultSearchParams && this.resolver.setDefaultSearchParams(t.defaultSearchParams), t.basePath && (this.resolver.basePath = t.basePath), t.bundleIdentifier && this.resolver.setBundleIdentifier(t.bundleIdentifier), t.manifest) {
      let n = t.manifest;
      typeof n == "string" && (n = await this.load(n)), this.resolver.addManifest(n);
    }
    const e = t.texturePreference?.resolution ?? 1, i = typeof e == "number" ? [e] : e, r = await this._detectFormats({
      preferredFormats: t.texturePreference?.format,
      skipDetections: t.skipDetections,
      detections: this._detections
    });
    this.resolver.prefer({
      params: {
        format: r,
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
    const i = Gs(t), r = Xt(t).map((o) => {
      if (typeof o != "string") {
        const h = this.resolver.getAlias(o);
        return h.some((l) => !this.resolver.hasKey(l)) && this.add(o), Array.isArray(h) ? h[0] : h;
      }
      return this.resolver.hasKey(o) || this.add({ alias: o, src: o }), o;
    }), n = this.resolver.resolve(r), a = await this._mapLoadToResolve(n, e);
    return i ? a[r[0]] : a;
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
    const r = this.resolver.resolveBundle(t), n = {}, a = Object.keys(r);
    let o = 0;
    const h = [], l = () => {
      e?.(h.reduce((u, f) => u + f, 0) / o);
    }, c = a.map((u, f) => {
      const d = r[u], g = Object.values(d), m = [...new Set(g.flat())].reduce((_, x) => _ + (x.progressSize || 1), 0);
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
      return Z.get(t);
    const e = {};
    for (let i = 0; i < t.length; i++)
      e[i] = Z.get(t[i]);
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
    const r = await this.loader.load(i, e);
    this._backgroundLoader.active = !0;
    const n = {};
    return i.forEach((a) => {
      const o = r[a.src], h = [a.src];
      a.alias && h.push(...a.alias), h.forEach((l) => {
        n[l] = o;
      }), Z.set(h, o);
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
    const e = Xt(t).map((r) => typeof r != "string" ? r.src : r), i = this.resolver.resolve(e);
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
    this._initialized || await this.init(), t = Xt(t);
    const e = this.resolver.resolveBundle(t), i = Object.keys(e).map((r) => this._unloadFromResolved(e[r]));
    await Promise.all(i);
  }
  async _unloadFromResolved(t) {
    const e = Object.values(t);
    e.forEach((i) => {
      Z.remove(i.src);
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
    return e = e.filter((i, r) => e.indexOf(i) === r), e;
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
const Ne = new Mg();
_t.handleByList(L.LoadParser, Ne.loader.parsers).handleByList(L.ResolveParser, Ne.resolver.parsers).handleByList(L.CacheParser, Ne.cache.parsers).handleByList(L.DetectionParser, Ne.detections);
_t.add(
  Nm,
  Vm,
  Wm,
  Hm,
  $m,
  Xm,
  jm,
  Qm,
  eg,
  lg,
  dg,
  rc,
  Cg,
  Gm,
  zm,
  nc,
  Pg
);
const Io = {
  loader: L.LoadParser,
  resolver: L.ResolveParser,
  cache: L.CacheParser,
  detection: L.DetectionParser
};
_t.handle(L.Asset, (s) => {
  const t = s.ref;
  Object.entries(Io).filter(([e]) => !!t[e]).forEach(([e, i]) => _t.add(Object.assign(
    t[e],
    // Allow the function to optionally define it's own
    // ExtensionMetadata, the use cases here is priority for LoaderParsers
    { extension: t[e].extension ?? i }
  )));
}, (s) => {
  const t = s.ref;
  Object.keys(Io).filter((e) => !!t[e]).forEach((e) => _t.remove(t[e]));
});
const ac = {
  5: [0.153388, 0.221461, 0.250301],
  7: [0.071303, 0.131514, 0.189879, 0.214607],
  9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
  11: [93e-4, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
  13: [2406e-6, 9255e-6, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641],
  15: [489e-6, 2403e-6, 9246e-6, 0.02784, 0.065602, 0.120999, 0.174697, 0.197448]
}, kg = [
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
function Eg(s) {
  const t = ac[s], e = t.length;
  let i = kg, r = "";
  const n = "finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";
  let a;
  for (let o = 0; o < s; o++) {
    let h = n.replace("%index%", o.toString());
    a = o, o >= e && (a = s - o - 1), h = h.replace("%value%", t[a].toString()), r += h, r += `
`;
  }
  return i = i.replace("%blur%", r), i = i.replace("%size%", s.toString()), i;
}
const Rg = `
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
function Fg(s, t) {
  const e = Math.ceil(s / 2);
  let i = Rg, r = "", n;
  t ? n = "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);" : n = "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";
  for (let a = 0; a < s; a++) {
    let o = n.replace("%index%", a.toString());
    o = o.replace("%sampleIndex%", `${a - (e - 1)}.0`), r += o, r += `
`;
  }
  return i = i.replace("%blur%", r), i = i.replace("%size%", s.toString()), i = i.replace("%dimension%", t ? "z" : "w"), i;
}
function Ig(s, t) {
  const e = Fg(t, s), i = Eg(t);
  return js.from({
    vertex: e,
    fragment: i,
    name: `blur-${s ? "horizontal" : "vertical"}-pass-filter`
  });
}
var Bg = `

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
function Og(s, t) {
  const e = ac[t], i = e.length, r = [], n = [], a = [];
  for (let u = 0; u < t; u++) {
    r[u] = `@location(${u}) offset${u}: vec2<f32>,`, s ? n[u] = `filteredCord + vec2(${u - i + 1} * pixelStrength, 0.0),` : n[u] = `filteredCord + vec2(0.0, ${u - i + 1} * pixelStrength),`;
    const f = u < i ? u : t - u - 1, d = e[f].toString();
    a[u] = `finalColor += textureSample(uTexture, uSampler, offset${u}) * ${d};`;
  }
  const o = r.join(`
`), h = n.join(`
`), l = a.join(`
`), c = Bg.replace("%blur-struct%", o).replace("%blur-vertex-out%", h).replace("%blur-fragment-in%", o).replace("%blur-sampling%", l).replace("%dimension%", s ? "z" : "w");
  return _i.from({
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
const oc = class hc extends bl {
  /**
   * @param options
   * @param options.horizontal - Do pass along the x-axis (`true`) or y-axis (`false`).
   * @param options.strength - The strength of the blur filter.
   * @param options.quality - The quality of the blur filter.
   * @param options.kernelSize - The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15.
   */
  constructor(t) {
    t = { ...hc.defaultOptions, ...t };
    const e = Ig(t.horizontal, t.kernelSize), i = Og(t.horizontal, t.kernelSize);
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
  apply(t, e, i, r) {
    if (this._uniforms.uStrength = this.strength / this.passes, this.passes === 1)
      t.applyFilter(this, e, i, r);
    else {
      const n = pi.getSameSizeTexture(e);
      let a = e, o = n;
      this._state.blend = !1;
      const h = t.renderer.type === Zi.WEBGPU;
      for (let l = 0; l < this.passes - 1; l++) {
        t.applyFilter(this, a, o, l === 0 ? !0 : h);
        const c = o;
        o = a, a = c;
      }
      this._state.blend = !0, t.applyFilter(this, a, i, r), pi.returnTexture(n);
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
oc.defaultOptions = {
  /** The strength of the blur filter. */
  strength: 8,
  /** The quality of the blur filter. */
  quality: 4,
  /** The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15. */
  kernelSize: 5
};
let zr = oc;
class Sn extends bl {
  constructor(...t) {
    let e = t[0] ?? {};
    typeof e == "number" && (G(j, "BlurFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }"), e = { strength: e }, t[1] !== void 0 && (e.quality = t[1]), t[2] !== void 0 && (e.resolution = t[2] || "inherit"), t[3] !== void 0 && (e.kernelSize = t[3])), e = { ...zr.defaultOptions, ...e };
    const { strength: i, strengthX: r, strengthY: n, quality: a, ...o } = e;
    super({
      ...o,
      compatibleRenderers: Zi.BOTH,
      resources: {}
    }), this._repeatEdgePixels = !1, this.blurXFilter = new zr({ horizontal: !0, ...e }), this.blurYFilter = new zr({ horizontal: !1, ...e }), this.quality = a, this.strengthX = r ?? i, this.strengthY = n ?? i, this.repeatEdgePixels = !1;
  }
  /**
   * Applies the filter.
   * @param filterManager - The manager.
   * @param input - The input target.
   * @param output - The output target.
   * @param clearMode - How to clear
   * @advanced
   */
  apply(t, e, i, r) {
    const n = Math.abs(this.blurXFilter.strength), a = Math.abs(this.blurYFilter.strength);
    if (n && a) {
      const o = pi.getSameSizeTexture(e);
      this.blurXFilter.blendMode = "normal", this.blurXFilter.apply(t, e, o, !0), this.blurYFilter.blendMode = this.blendMode, this.blurYFilter.apply(t, o, i, r), pi.returnTexture(o);
    } else a ? (this.blurYFilter.blendMode = this.blendMode, this.blurYFilter.apply(t, e, i, r)) : (this.blurXFilter.blendMode = this.blendMode, this.blurXFilter.apply(t, e, i, r));
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
    return G("8.3.0", "BlurFilter.blur is deprecated, please use BlurFilter.strength instead."), this.strength;
  }
  set blur(t) {
    G("8.3.0", "BlurFilter.blur is deprecated, please use BlurFilter.strength instead."), this.strength = t;
  }
  /**
   * Sets the strength of the blurX property
   * @default 2
   * @deprecated since 8.3.0
   * @see BlurFilter.strengthX
   */
  get blurX() {
    return G("8.3.0", "BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead."), this.strengthX;
  }
  set blurX(t) {
    G("8.3.0", "BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead."), this.strengthX = t;
  }
  /**
   * Sets the strength of the blurY property
   * @default 2
   * @deprecated since 8.3.0
   * @see BlurFilter.strengthY
   */
  get blurY() {
    return G("8.3.0", "BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead."), this.strengthY;
  }
  set blurY(t) {
    G("8.3.0", "BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead."), this.strengthY = t;
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
Sn.defaultOptions = {
  /** The strength of the blur filter. */
  strength: 8,
  /** The quality of the blur filter. */
  quality: 4,
  /** The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15. */
  kernelSize: 5
};
class ss extends Zh {
  /**
   * Creates a new Graphics object.
   * @param options - Options for the Graphics.
   */
  constructor(t) {
    t instanceof Ut && (t = { context: t });
    const { context: e, roundPixels: i, ...r } = t || {};
    super({
      label: "Graphics",
      ...r
    }), this.renderPipeId = "graphics", e ? this.context = e : (this.context = this._ownedContext = new Ut(), this.context.autoGarbageCollect = this.autoGarbageCollect), this.didViewUpdate = !0, this.allowChildren = !1, this.roundPixels = i ?? !1;
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
    return t ? new ss(this._context.clone()) : (this._ownedContext = null, new ss(this._context));
  }
  // -------- v7 deprecations ---------
  /**
   * @param width
   * @param color
   * @param alpha
   * @deprecated since 8.0.0 Use {@link Graphics#setStrokeStyle} instead
   */
  lineStyle(t, e, i) {
    G(j, "Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");
    const r = {};
    return t && (r.width = t), e && (r.color = e), i && (r.alpha = i), this.context.strokeStyle = r, this;
  }
  /**
   * @param color
   * @param alpha
   * @deprecated since 8.0.0 Use {@link Graphics#fill} instead
   */
  beginFill(t, e) {
    G(j, "Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");
    const i = {};
    return t !== void 0 && (i.color = t), e !== void 0 && (i.alpha = e), this.context.fillStyle = i, this;
  }
  /**
   * @deprecated since 8.0.0 Use {@link Graphics#fill} instead
   */
  endFill() {
    G(j, "Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."), this.context.fill();
    const t = this.context.strokeStyle;
    return (t.width !== Ut.defaultStrokeStyle.width || t.color !== Ut.defaultStrokeStyle.color || t.alpha !== Ut.defaultStrokeStyle.alpha) && this.context.stroke(), this;
  }
  /**
   * @param {...any} args
   * @deprecated since 8.0.0 Use {@link Graphics#circle} instead
   */
  drawCircle(...t) {
    return G(j, "Graphics#drawCircle has been renamed to Graphics#circle"), this._callContextMethod("circle", t);
  }
  /**
   * @param {...any} args
   * @deprecated since 8.0.0 Use {@link Graphics#ellipse} instead
   */
  drawEllipse(...t) {
    return G(j, "Graphics#drawEllipse has been renamed to Graphics#ellipse"), this._callContextMethod("ellipse", t);
  }
  /**
   * @param {...any} args
   * @deprecated since 8.0.0 Use {@link Graphics#poly} instead
   */
  drawPolygon(...t) {
    return G(j, "Graphics#drawPolygon has been renamed to Graphics#poly"), this._callContextMethod("poly", t);
  }
  /**
   * @param {...any} args
   * @deprecated since 8.0.0 Use {@link Graphics#rect} instead
   */
  drawRect(...t) {
    return G(j, "Graphics#drawRect has been renamed to Graphics#rect"), this._callContextMethod("rect", t);
  }
  /**
   * @param {...any} args
   * @deprecated since 8.0.0 Use {@link Graphics#roundRect} instead
   */
  drawRoundedRect(...t) {
    return G(j, "Graphics#drawRoundedRect has been renamed to Graphics#roundRect"), this._callContextMethod("roundRect", t);
  }
  /**
   * @param {...any} args
   * @deprecated since 8.0.0 Use {@link Graphics#star} instead
   */
  drawStar(...t) {
    return G(j, "Graphics#drawStar has been renamed to Graphics#star"), this._callContextMethod("star", t);
  }
}
_t.add(Bu, Ou);
function Gg({
  numCandles: s = 9,
  girlImage: t = "/girl.png",
  cakeImage: e = "/cake.png",
  candleImage: i = "/candle.png",
  backgroundColor: r = "#000000"
}) {
  const n = ia(null), a = ia(null);
  return dc(() => {
    if (!n.current) return;
    let o = null, h = !1, l = !1;
    const c = [], u = { x: 0, y: 0, offset: { x: 0, y: 0 } };
    let f = !1, d, g, p, m, _;
    const x = (R, M) => Math.random() * (M - R) + R, y = async () => {
      if (!n.current || l || (o = new Fl(), await o.init({
        resizeTo: n.current,
        backgroundAlpha: r === "transparent" ? 0 : 1,
        backgroundColor: r,
        antialias: !0,
        autoDensity: !0,
        resolution: Math.min(window.devicePixelRatio || 1, 2)
      }), l)) return;
      n.current.appendChild(o.canvas), o.stage.sortableChildren = !0, a.current = o;
      const R = await Ne.load(t);
      if (l) return;
      d = Object.assign(new ee(R), { anim: { brightness: 0 } }), d.anchor.set(0.5), d.tint = 0, o.stage.addChild(d);
      const M = await Ne.load(e);
      if (l) return;
      g = new ee(M), g.anchor.set(0.5, 0), o.stage.addChild(g);
      const E = await Ne.load(i);
      if (l) return;
      p = E;
      const X = new ss().circle(0, 0, 25).fill(16777215);
      m = o.renderer.generateTexture(X);
      const D = new ss().circle(0, 0, 20).fill({
        color: 16777011,
        alpha: 0.5
      });
      _ = o.renderer.generateTexture(D);
      for (let $ = 0; $ < s; $++)
        C();
      setTimeout(() => {
        c.findIndex((S) => S.isLit) === -1 && c.length > 0 && (c[Math.floor(Math.random() * c.length)].isLit = !0);
      }, 3e3), k(), o.ticker.add(I), h = !0;
    };
    class b extends re {
      isLit = !1;
      flameBursts = [];
      flameBurstsContainer;
      flameGlowSprite;
      candleBg;
      constructor() {
        super(), this.flameBurstsContainer = new v(), this.flameGlowSprite = new w(), this.candleBg = new ee(p), this.candleBg.anchor.set(0.5, 1), this.addChild(this.candleBg), this.addChild(this.flameGlowSprite), this.addChild(this.flameBurstsContainer), this.flameGlowSprite.y = -this.candleBg.height, this.flameBurstsContainer.y = -this.candleBg.height, this.scale.set(0.7);
      }
      onTick(M) {
        if (this.isLit && Math.random() < 0.8 && this.flameBursts.length < 30) {
          const $ = new A();
          this.flameBurstsContainer.addChild($), this.flameBursts.push($);
        }
        this.flameGlowSprite.alpha = this.flameBursts.length / 40, this.flameGlowSprite.scale.set(x(1.8, 2.2));
        const D = 256 * Math.max(0.2, Math.min(1, this.flameBursts.length / 20));
        this.candleBg.tint = new nt({ r: D, g: D, b: D }).toNumber();
        for (let $ = this.flameBursts.length - 1; $ >= 0; $--) {
          const S = this.flameBursts[$];
          if (S.anim.energy <= 0 && S.anim.fuel <= 0) {
            this.flameBurstsContainer.removeChild(S), S.destroy(), this.flameBursts.splice($, 1);
            continue;
          }
          !S || !S?.scale?.x || (S.anim.fuel > 0 && (S.anim.energy += S.anim.burnRate * M.deltaTime, S.anim.fuel -= S.anim.burnRate * M.deltaTime), S.anim.energy -= S.anim.fadeRate * M.deltaTime, S.scale.x = S.anim.energy * 0.07, S.scale.y = S.anim.energy * 0.1, S.x += S.anim.vector.x - u.offset.x * 2e-3, S.y += S.anim.vector.y, S.anim.color.setValue([S.anim.color.red, S.anim.color.green, S.anim.color.blue - 0.03]), S.tint = S.anim.color.toNumber());
        }
      }
    }
    class w extends ee {
      constructor() {
        super(_), this.filters = [new Sn({ strength: 36, quality: 8 })], this.anchor.set(0.5), this.scale.set(2), this.alpha = 0.5;
      }
    }
    class A extends ee {
      anim;
      constructor() {
        super(m), this.alpha = 1, this.anchor.set(0.5), this.anim = {
          vector: {
            x: x(-0.2, 0.2),
            y: x(-1.5, -0.8)
          },
          color: new nt([1, 1, 1]),
          fuel: x(5, 6),
          burnRate: 1,
          energy: 1,
          fadeRate: x(0.2, 0.3)
        }, this.tint = this.anim.color.toNumber();
      }
    }
    class v extends re {
      constructor() {
        super(), this.filters = [new Sn({ strength: 0.5 })], this.alpha = 0.8;
      }
    }
    const C = () => {
      if (!o) throw new Error("PIXI app not initialized");
      const R = new b();
      return o.stage.addChild(R), c.push(R), R.interactive = !0, R.cursor = "pointer", R.on("click", () => {
        R.isLit = !R.isLit;
      }), R;
    }, T = () => {
      const R = d.anim.brightness * 256;
      d.tint = new nt({ r: R, g: R, b: R }).toNumber();
    }, P = () => {
      if (!g) return;
      const R = window.innerWidth / 2, M = g.y + g.height * 0.27, E = Math.PI / 180, X = 15, D = 360 / c.length, $ = g.width * 0.3, S = g.height * 0.15;
      c.forEach((B, Y) => {
        const N = X + D * Y;
        B.x = R + Math.sin(N * E) * $, B.y = M + Math.cos(N * E) * S, B.zIndex = B.y;
      });
    }, k = () => {
      !d || !g || (d.x = window.innerWidth / 2, d.y = window.innerHeight / 2.7, d.scale.set(0.7), g.x = window.innerWidth / 2, g.y = window.innerHeight / 1.7, g.scale.set(2), P());
    }, I = (R) => {
      let M = 0, E = 0;
      c.forEach((D) => {
        D.onTick(R), M += D.flameBursts.length, E += D.isLit ? 1 : 0;
      });
      const X = 256 * Math.max(0.2, Math.min(1, M / (20 * c.length)));
      g && (g.tint = new nt({ r: X, g: X, b: X }).toNumber()), E === c.length && !f ? (f = !0, tn.to(d.anim, {
        brightness: 1,
        duration: 2,
        ease: "power2.out",
        onUpdate: T,
        onComplete: () => {
          c.forEach((D) => {
            D.isLit = !1;
          }), f = !1, tn.to(d.anim, {
            brightness: 0,
            duration: 1,
            ease: "power2.out",
            onUpdate: T
          });
        }
      })) : E < c.length && f && (f = !1);
    }, O = (R) => {
      u.x = R.clientX, u.y = R.clientY, u.offset.x = R.clientX - window.innerWidth / 2, u.offset.y = R.clientY - window.innerHeight / 2;
    }, z = () => {
      k();
    };
    return window.addEventListener("pointermove", O), window.addEventListener("resize", z), y(), () => {
      if (l = !0, window.removeEventListener("pointermove", O), window.removeEventListener("resize", z), o && h)
        try {
          o.destroy(!0, { children: !0, texture: !0 });
        } catch (R) {
          console.warn("Error destroying PIXI app:", R);
        }
    };
  }, [s, t, e, i, r]), /* @__PURE__ */ mc.jsx(
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
  Td as $,
  Ml as A,
  St as B,
  re as C,
  J as D,
  L as E,
  bl as F,
  Rp as G,
  Yt as H,
  Yh as I,
  jt as J,
  pi as K,
  La as L,
  U as M,
  ee as N,
  Xd as O,
  bt as P,
  rf as Q,
  Zi as R,
  ef as S,
  fs as T,
  on as U,
  ns as V,
  ut as W,
  vf as X,
  za as Y,
  mr as Z,
  Ga as _,
  Ht as a,
  zs as a0,
  nt as a1,
  Ad as a2,
  jh as a3,
  kl as a4,
  G as a5,
  j as a6,
  Pf as a7,
  tp as a8,
  jf as a9,
  yp as aa,
  wp as ab,
  Cp as ac,
  Mp as ad,
  kp as ae,
  Ds as af,
  Ms as ag,
  _n as ah,
  To as ai,
  Yl as aj,
  Ja as ak,
  Za as al,
  Po as am,
  Rm as an,
  Z as ao,
  ss as ap,
  Xu as aq,
  Ws as ar,
  jl as as,
  Gg as at,
  Yf as b,
  es as c,
  Ps as d,
  _t as e,
  Qa as f,
  Nf as g,
  $n as h,
  Tl as i,
  rl as j,
  qt as k,
  _l as l,
  vn as m,
  xp as n,
  bp as o,
  Sp as p,
  Pp as q,
  ad as r,
  Hs as s,
  V as t,
  lt as u,
  $u as v,
  Q as w,
  _i as x,
  js as y,
  Ep as z
};
