import {h as le, a as de, u as ge} from "./BP_obRgz.js";
import {a4 as ye, r as x, a5 as pe, a6 as be, a7 as he, a as V, w as ve, a8 as me, a9 as je, h as Te, aa as we, z as _e, ab as v, v as De, ac as Oe, x as $e, u as Pe, a1 as Se, ad as Ce, B as Ae} from "./Dsfj8rDd.js";
const xe = e=>e === "defer" || e === !1;
function Ee(...e) {
    var P;
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    let[a,i,r={}] = e;
    if (typeof a != "string")
        throw new TypeError("[nuxt] [asyncData] key must be a string.");
    if (typeof i != "function")
        throw new TypeError("[nuxt] [asyncData] handler must be a function.");
    const n = me()
      , c = i
      , g = ()=>null
      , j = ()=>n.isHydrating ? n.payload.data[a] : n.static.data[a];
    r.server = r.server ?? !0,
    r.default = r.default ?? g,
    r.getCachedData = r.getCachedData ?? j,
    r.lazy = r.lazy ?? !1,
    r.immediate = r.immediate ?? !0,
    r.deep = r.deep ?? ye.deep,
    r.dedupe = r.dedupe ?? "cancel";
    const u = ()=>r.getCachedData(a, n) != null;
    if (!n._asyncData[a] || !r.immediate) {
        (P = n.payload._errors)[a] ?? (P[a] = null);
        const l = r.deep ? x : pe;
        n._asyncData[a] = {
            data: l(r.getCachedData(a, n) ?? r.default()),
            pending: x(!u()),
            error: be(n.payload._errors, a),
            status: x("idle")
        }
    }
    const o = {
        ...n._asyncData[a]
    };
    o.refresh = o.execute = (l={})=>{
        if (n._asyncDataPromises[a]) {
            if (xe(l.dedupe ?? r.dedupe))
                return n._asyncDataPromises[a];
            n._asyncDataPromises[a].cancelled = !0
        }
        if ((l._initial || n.isHydrating && l._initial !== !1) && u())
            return Promise.resolve(r.getCachedData(a, n));
        o.pending.value = !0,
        o.status.value = "pending";
        const y = new Promise((f,d)=>{
            try {
                f(c(n))
            } catch (S) {
                d(S)
            }
        }
        ).then(async f=>{
            if (y.cancelled)
                return n._asyncDataPromises[a];
            let d = f;
            r.transform && (d = await r.transform(f)),
            r.pick && (d = Me(d, r.pick)),
            n.payload.data[a] = d,
            o.data.value = d,
            o.error.value = null,
            o.status.value = "success"
        }
        ).catch(f=>{
            if (y.cancelled)
                return n._asyncDataPromises[a];
            o.error.value = je(f),
            o.data.value = Te(r.default()),
            o.status.value = "error"
        }
        ).finally(()=>{
            y.cancelled || (o.pending.value = !1,
            delete n._asyncDataPromises[a])
        }
        );
        return n._asyncDataPromises[a] = y,
        n._asyncDataPromises[a]
    }
    ,
    o.clear = ()=>ke(n, a);
    const $ = ()=>o.refresh({
        _initial: !0
    })
      , A = r.server !== !1 && n.payload.serverRendered;
    {
        const l = we();
        if (l && !l._nuxtOnBeforeMountCbs) {
            l._nuxtOnBeforeMountCbs = [];
            const f = l._nuxtOnBeforeMountCbs;
            l && (he(()=>{
                f.forEach(d=>{
                    d()
                }
                ),
                f.splice(0, f.length)
            }
            ),
            V(()=>f.splice(0, f.length)))
        }
        A && n.isHydrating && (o.error.value || u()) ? (o.pending.value = !1,
        o.status.value = o.error.value ? "error" : "success") : l && (n.payload.serverRendered && n.isHydrating || r.lazy) && r.immediate ? l._nuxtOnBeforeMountCbs.push($) : r.immediate && $(),
        r.watch && ve(r.watch, ()=>o.refresh());
        const y = n.hook("app:data:refresh", async f=>{
            (!f || f.includes(a)) && await o.refresh()
        }
        );
        l && V(y)
    }
    const T = Promise.resolve(n._asyncDataPromises[a]).then(()=>o);
    return Object.assign(T, o),
    T
}
function ke(e, t) {
    t in e.payload.data && (e.payload.data[t] = void 0),
    t in e.payload._errors && (e.payload._errors[t] = null),
    e._asyncData[t] && (e._asyncData[t].data.value = void 0,
    e._asyncData[t].error.value = null,
    e._asyncData[t].pending.value = !1,
    e._asyncData[t].status.value = "idle"),
    t in e._asyncDataPromises && (e._asyncDataPromises[t].cancelled = !0,
    e._asyncDataPromises[t] = void 0)
}
function Me(e, t) {
    const a = {};
    for (const i of t)
        a[i] = e[i];
    return a
}
function Fe(e, t, a) {
    const [i={},r] = typeof t == "string" ? [{}, t] : [t, a]
      , n = _e(()=>v(e))
      , c = i.key || le([r, typeof n.value == "string" ? n.value : "", ...Re(i)]);
    if (!c || typeof c != "string")
        throw new TypeError("[nuxt] [useFetch] key must be a string: " + c);
    if (!e)
        throw new Error("[nuxt] [useFetch] request is missing.");
    const g = c === r ? "$f" + c : c;
    if (!i.baseURL && typeof n.value == "string" && n.value[0] === "/" && n.value[1] === "/")
        throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
    const {server: j, lazy: u, default: o, transform: $, pick: A, watch: T, immediate: P, getCachedData: l, deep: y, dedupe: f, ...d} = i
      , S = De({
        ...Oe,
        ...d,
        cache: typeof i.cache == "boolean" ? void 0 : i.cache
    })
      , fe = {
        server: j,
        lazy: u,
        default: o,
        transform: $,
        pick: A,
        immediate: P,
        getCachedData: l,
        deep: y,
        dedupe: f,
        watch: T === !1 ? [] : [S, n, ...T || []]
    };
    let p;
    return Ee(g, ()=>{
        var N;
        (N = p == null ? void 0 : p.abort) == null || N.call(p),
        p = typeof AbortController < "u" ? new AbortController : {};
        const L = v(i.timeout);
        return L && setTimeout(()=>p.abort(), L),
        (i.$fetch || globalThis.$fetch)(n.value, {
            signal: p.signal,
            ...S
        })
    }
    , fe)
}
function Re(e) {
    var a;
    const t = [((a = v(e.method)) == null ? void 0 : a.toUpperCase()) || "GET", v(e.baseURL)];
    for (const i of [e.params || e.query]) {
        const r = v(i);
        if (!r)
            continue;
        const n = {};
        for (const [c,g] of Object.entries(r))
            n[v(c)] = v(g);
        t.push(n)
    }
    return t
}
var te = typeof global == "object" && global && global.Object === Object && global
  , Ie = typeof self == "object" && self && self.Object === Object && self
  , b = te || Ie || Function("return this")()
  , C = b.Symbol
  , ae = Object.prototype
  , Be = ae.hasOwnProperty
  , Ue = ae.toString
  , w = C ? C.toStringTag : void 0;
function Le(e) {
    var t = Be.call(e, w)
      , a = e[w];
    try {
        e[w] = void 0;
        var i = !0
    } catch {}
    var r = Ue.call(e);
    return i && (t ? e[w] = a : delete e[w]),
    r
}
var Ne = Object.prototype
  , Ve = Ne.toString;
function qe(e) {
    return Ve.call(e)
}
var We = "[object Null]"
  , ze = "[object Undefined]"
  , q = C ? C.toStringTag : void 0;
function D(e) {
    return e == null ? e === void 0 ? ze : We : q && q in Object(e) ? Le(e) : qe(e)
}
function U(e) {
    return e != null && typeof e == "object"
}
var Ke = Array.isArray;
function re(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}
var Ge = "[object AsyncFunction]"
  , He = "[object Function]"
  , Je = "[object GeneratorFunction]"
  , Xe = "[object Proxy]";
function ne(e) {
    if (!re(e))
        return !1;
    var t = D(e);
    return t == He || t == Je || t == Ge || t == Xe
}
var E = b["__core-js_shared__"]
  , W = function() {
    var e = /[^.]+$/.exec(E && E.keys && E.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : ""
}();
function Qe(e) {
    return !!W && W in e
}
var Ye = Function.prototype
  , Ze = Ye.toString;
function m(e) {
    if (e != null) {
        try {
            return Ze.call(e)
        } catch {}
        try {
            return e + ""
        } catch {}
    }
    return ""
}
var et = /[\\^$.*+?()[\]{}|]/g
  , tt = /^\[object .+?Constructor\]$/
  , at = Function.prototype
  , rt = Object.prototype
  , nt = at.toString
  , ot = rt.hasOwnProperty
  , st = RegExp("^" + nt.call(ot).replace(et, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function it(e) {
    if (!re(e) || Qe(e))
        return !1;
    var t = ne(e) ? st : tt;
    return t.test(m(e))
}
function ct(e, t) {
    return e == null ? void 0 : e[t]
}
function O(e, t) {
    var a = ct(e, t);
    return it(a) ? a : void 0
}
var M = O(b, "WeakMap")
  , ut = 9007199254740991;
function oe(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ut
}
function ft(e) {
    return e != null && oe(e.length) && !ne(e)
}
var lt = Object.prototype;
function se(e) {
    var t = e && e.constructor
      , a = typeof t == "function" && t.prototype || lt;
    return e === a
}
var dt = "[object Arguments]";
function z(e) {
    return U(e) && D(e) == dt
}
var ie = Object.prototype
  , gt = ie.hasOwnProperty
  , yt = ie.propertyIsEnumerable
  , pt = z(function() {
    return arguments
}()) ? z : function(e) {
    return U(e) && gt.call(e, "callee") && !yt.call(e, "callee")
}
;
const bt = pt;
function ht() {
    return !1
}
var ce = typeof exports == "object" && exports && !exports.nodeType && exports
  , K = ce && typeof module == "object" && module && !module.nodeType && module
  , vt = K && K.exports === ce
  , G = vt ? b.Buffer : void 0
  , mt = G ? G.isBuffer : void 0
  , jt = mt || ht;
const Tt = jt;
var wt = "[object Arguments]"
  , _t = "[object Array]"
  , Dt = "[object Boolean]"
  , Ot = "[object Date]"
  , $t = "[object Error]"
  , Pt = "[object Function]"
  , St = "[object Map]"
  , Ct = "[object Number]"
  , At = "[object Object]"
  , xt = "[object RegExp]"
  , Et = "[object Set]"
  , kt = "[object String]"
  , Mt = "[object WeakMap]"
  , Ft = "[object ArrayBuffer]"
  , Rt = "[object DataView]"
  , It = "[object Float32Array]"
  , Bt = "[object Float64Array]"
  , Ut = "[object Int8Array]"
  , Lt = "[object Int16Array]"
  , Nt = "[object Int32Array]"
  , Vt = "[object Uint8Array]"
  , qt = "[object Uint8ClampedArray]"
  , Wt = "[object Uint16Array]"
  , zt = "[object Uint32Array]"
  , s = {};
s[It] = s[Bt] = s[Ut] = s[Lt] = s[Nt] = s[Vt] = s[qt] = s[Wt] = s[zt] = !0;
s[wt] = s[_t] = s[Ft] = s[Dt] = s[Rt] = s[Ot] = s[$t] = s[Pt] = s[St] = s[Ct] = s[At] = s[xt] = s[Et] = s[kt] = s[Mt] = !1;
function Kt(e) {
    return U(e) && oe(e.length) && !!s[D(e)]
}
function Gt(e) {
    return function(t) {
        return e(t)
    }
}
var ue = typeof exports == "object" && exports && !exports.nodeType && exports
  , _ = ue && typeof module == "object" && module && !module.nodeType && module
  , Ht = _ && _.exports === ue
  , k = Ht && te.process
  , H = function() {
    try {
        var e = _ && _.require && _.require("util").types;
        return e || k && k.binding && k.binding("util")
    } catch {}
}()
  , J = H && H.isTypedArray
  , Jt = J ? Gt(J) : Kt;
const Xt = Jt;
function Qt(e, t) {
    return function(a) {
        return e(t(a))
    }
}
var Yt = Qt(Object.keys, Object)
  , Zt = Object.prototype
  , ea = Zt.hasOwnProperty;
function ta(e) {
    if (!se(e))
        return Yt(e);
    var t = [];
    for (var a in Object(e))
        ea.call(e, a) && a != "constructor" && t.push(a);
    return t
}
var F = O(b, "Map")
  , R = O(b, "DataView")
  , I = O(b, "Promise")
  , B = O(b, "Set")
  , X = "[object Map]"
  , aa = "[object Object]"
  , Q = "[object Promise]"
  , Y = "[object Set]"
  , Z = "[object WeakMap]"
  , ee = "[object DataView]"
  , ra = m(R)
  , na = m(F)
  , oa = m(I)
  , sa = m(B)
  , ia = m(M)
  , h = D;
(R && h(new R(new ArrayBuffer(1))) != ee || F && h(new F) != X || I && h(I.resolve()) != Q || B && h(new B) != Y || M && h(new M) != Z) && (h = function(e) {
    var t = D(e)
      , a = t == aa ? e.constructor : void 0
      , i = a ? m(a) : "";
    if (i)
        switch (i) {
        case ra:
            return ee;
        case na:
            return X;
        case oa:
            return Q;
        case sa:
            return Y;
        case ia:
            return Z
        }
    return t
}
);
const ca = h;
var ua = "[object Map]"
  , fa = "[object Set]"
  , la = Object.prototype
  , da = la.hasOwnProperty;
function ga(e) {
    if (e == null)
        return !0;
    if (ft(e) && (Ke(e) || typeof e == "string" || typeof e.splice == "function" || Tt(e) || Xt(e) || bt(e)))
        return !e.length;
    var t = ca(e);
    if (t == ua || t == fa)
        return !e.size;
    if (se(e))
        return !ta(e).length;
    for (var a in e)
        if (da.call(e, a))
            return !1;
    return !0
}
const va = (e,t={},a={},i)=>{
    const r = de("auth_cookie")
      , n = ge()
      , c = $e(e)
      , g = Ae()
      , j = {
        retry: 0,
        baseURL: g.public.baseURL,
        key: e,
        headers: {
            ...i !== !1 && {
                Authorization: `Bearer ${i || g.public.authToken}`
            },
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        onRequest: ()=>{
            c.value.isWorking = !0,
            c.value.error = null
        }
        ,
        onResponse: ({response: u})=>{
            if (c.value.isWorking = !1,
            c.value.error = null,
            !u.ok)
                return c.value.error = u.message,
                Promise.reject(u);
            if (e === "/auth/login") {
                r.value = {
                    user: u._data.user,
                    accessToken: u._data.access_token,
                    isLoggedIn: !0
                },
                n.value = r.value;
                const o = Pe("page_intended", ()=>"/");
                Se(o.value)
            }
            e === "/auth/logout" && (r.value = {
                user: {},
                accessToken: null,
                isLoggedIn: !1
            },
            n.value = r.value)
        }
        ,
        onRequestError: ({error: u})=>{
            c.value.isWorking = !1,
            c.value.error = u.message
        }
        ,
        onResponseError: ({error: u})=>{
            c.value.isWorking = !1,
            c.value.error = u == null ? void 0 : u.message
        }
    };
    return ga(a) || (t.body = JSON.stringify(a)),
    Fe(e, Ce(t, j), "$29JI6xDX9F")
}
;
export {F as M, C as S, re as a, Ke as b, bt as c, U as d, Gt as e, Tt as f, ca as g, D as h, ga as i, ft as j, ta as k, O as l, Xt as m, H as n, se as o, Qt as p, ne as q, b as r, va as u};