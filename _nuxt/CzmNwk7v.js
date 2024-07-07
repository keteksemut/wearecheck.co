import {g as V, S as gt, O as Ni, Z as xi} from "./Dsfj8rDd.js";
/*!
 * matrix 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ce, Ve, Kt, qe, at, St, Dt, dt, he = "transform", $t = he + "Origin", yi, wi = function(e) {
    var o = e.ownerDocument || e;
    for (!(he in e.style) && ("msTransform"in e.style) && (he = "msTransform",
    $t = he + "Origin"); o.parentNode && (o = o.parentNode); )
        ;
    if (Ve = window,
    Dt = new Ge,
    o) {
        Ce = o,
        Kt = o.documentElement,
        qe = o.body,
        dt = Ce.createElementNS("http://www.w3.org/2000/svg", "g"),
        dt.style.transform = "none";
        var i = o.createElement("div")
          , n = o.createElement("div");
        qe.appendChild(i),
        i.appendChild(n),
        i.style.position = "static",
        i.style[he] = "translate3d(0,0,1px)",
        yi = n.offsetParent !== i,
        qe.removeChild(i)
    }
    return o
}, Xi = function(e) {
    for (var o, i; e && e !== qe; )
        i = e._gsap,
        i && i.uncache && i.get(e, "x"),
        i && !i.scaleX && !i.scaleY && i.renderTransform && (i.scaleX = i.scaleY = 1e-4,
        i.renderTransform(1, i),
        o ? o.push(i) : o = [i]),
        e = e.parentNode;
    return o
}, mi = [], _i = [], Ri = function() {
    return Ve.pageYOffset || Ce.scrollTop || Kt.scrollTop || qe.scrollTop || 0
}, Oi = function() {
    return Ve.pageXOffset || Ce.scrollLeft || Kt.scrollLeft || qe.scrollLeft || 0
}, qt = function(e) {
    return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
}, Ai = function a(e) {
    if (Ve.getComputedStyle(e).position === "fixed")
        return !0;
    if (e = e.parentNode,
    e && e.nodeType === 1)
        return a(e)
}, At = function a(e, o) {
    if (e.parentNode && (Ce || wi(e))) {
        var i = qt(e)
          , n = i ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml"
          , s = i ? o ? "rect" : "g" : "div"
          , u = o !== 2 ? 0 : 100
          , f = o === 3 ? 100 : 0
          , g = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;"
          , d = Ce.createElementNS ? Ce.createElementNS(n.replace(/^https/, "http"), s) : Ce.createElement(s);
        return o && (i ? (St || (St = a(e)),
        d.setAttribute("width", .01),
        d.setAttribute("height", .01),
        d.setAttribute("transform", "translate(" + u + "," + f + ")"),
        St.appendChild(d)) : (at || (at = a(e),
        at.style.cssText = g),
        d.style.cssText = g + "width:0.1px;height:0.1px;top:" + f + "px;left:" + u + "px",
        at.appendChild(d))),
        d
    }
    throw "Need document and parent."
}, Yi = function(e) {
    for (var o = new Ge, i = 0; i < e.numberOfItems; i++)
        o.multiply(e.getItem(i).matrix);
    return o
}, Ii = function(e) {
    var o = e.getCTM(), i;
    return o || (i = e.style[he],
    e.style[he] = "none",
    e.appendChild(dt),
    o = dt.getCTM(),
    e.removeChild(dt),
    i ? e.style[he] = i : e.style.removeProperty(he.replace(/([A-Z])/g, "-$1").toLowerCase())),
    o || Dt.clone()
}, Bi = function(e, o) {
    var i = qt(e), n = e === i, s = i ? mi : _i, u = e.parentNode, f, g, d, w, m, v;
    if (e === Ve)
        return e;
    if (s.length || s.push(At(e, 1), At(e, 2), At(e, 3)),
    f = i ? St : at,
    i)
        n ? (d = Ii(e),
        w = -d.e / d.a,
        m = -d.f / d.d,
        g = Dt) : e.getBBox ? (d = e.getBBox(),
        g = e.transform ? e.transform.baseVal : {},
        g = g.numberOfItems ? g.numberOfItems > 1 ? Yi(g) : g.getItem(0).matrix : Dt,
        w = g.a * d.x + g.c * d.y,
        m = g.b * d.x + g.d * d.y) : (g = new Ge,
        w = m = 0),
        o && e.tagName.toLowerCase() === "g" && (w = m = 0),
        (n ? i : u).appendChild(f),
        f.setAttribute("transform", "matrix(" + g.a + "," + g.b + "," + g.c + "," + g.d + "," + (g.e + w) + "," + (g.f + m) + ")");
    else {
        if (w = m = 0,
        yi)
            for (g = e.offsetParent,
            d = e; d && (d = d.parentNode) && d !== g && d.parentNode; )
                (Ve.getComputedStyle(d)[he] + "").length > 4 && (w = d.offsetLeft,
                m = d.offsetTop,
                d = 0);
        if (v = Ve.getComputedStyle(e),
        v.position !== "absolute" && v.position !== "fixed")
            for (g = e.offsetParent; u && u !== g; )
                w += u.scrollLeft || 0,
                m += u.scrollTop || 0,
                u = u.parentNode;
        d = f.style,
        d.top = e.offsetTop - m + "px",
        d.left = e.offsetLeft - w + "px",
        d[he] = v[he],
        d[$t] = v[$t],
        d.position = v.position === "fixed" ? "fixed" : "absolute",
        e.parentNode.appendChild(f)
    }
    return f
}, Yt = function(e, o, i, n, s, u, f) {
    return e.a = o,
    e.b = i,
    e.c = n,
    e.d = s,
    e.e = u,
    e.f = f,
    e
}, Ge = function() {
    function a(o, i, n, s, u, f) {
        o === void 0 && (o = 1),
        i === void 0 && (i = 0),
        n === void 0 && (n = 0),
        s === void 0 && (s = 1),
        u === void 0 && (u = 0),
        f === void 0 && (f = 0),
        Yt(this, o, i, n, s, u, f)
    }
    var e = a.prototype;
    return e.inverse = function() {
        var i = this.a
          , n = this.b
          , s = this.c
          , u = this.d
          , f = this.e
          , g = this.f
          , d = i * u - n * s || 1e-10;
        return Yt(this, u / d, -n / d, -s / d, i / d, (s * g - u * f) / d, -(i * g - n * f) / d)
    }
    ,
    e.multiply = function(i) {
        var n = this.a
          , s = this.b
          , u = this.c
          , f = this.d
          , g = this.e
          , d = this.f
          , w = i.a
          , m = i.c
          , v = i.b
          , t = i.d
          , T = i.e
          , N = i.f;
        return Yt(this, w * n + v * u, w * s + v * f, m * n + t * u, m * s + t * f, g + T * n + N * u, d + T * s + N * f)
    }
    ,
    e.clone = function() {
        return new a(this.a,this.b,this.c,this.d,this.e,this.f)
    }
    ,
    e.equals = function(i) {
        var n = this.a
          , s = this.b
          , u = this.c
          , f = this.d
          , g = this.e
          , d = this.f;
        return n === i.a && s === i.b && u === i.c && f === i.d && g === i.e && d === i.f
    }
    ,
    e.apply = function(i, n) {
        n === void 0 && (n = {});
        var s = i.x
          , u = i.y
          , f = this.a
          , g = this.b
          , d = this.c
          , w = this.d
          , m = this.e
          , v = this.f;
        return n.x = s * f + u * d + m || 0,
        n.y = s * g + u * w + v || 0,
        n
    }
    ,
    a
}();
function $e(a, e, o, i) {
    if (!a || !a.parentNode || (Ce || wi(a)).documentElement === a)
        return new Ge;
    var n = Xi(a)
      , s = qt(a)
      , u = s ? mi : _i
      , f = Bi(a, o)
      , g = u[0].getBoundingClientRect()
      , d = u[1].getBoundingClientRect()
      , w = u[2].getBoundingClientRect()
      , m = f.parentNode
      , v = !i && Ai(a)
      , t = new Ge((d.left - g.left) / 100,(d.top - g.top) / 100,(w.left - g.left) / 100,(w.top - g.top) / 100,g.left + (v ? 0 : Oi()),g.top + (v ? 0 : Ri()));
    if (m.removeChild(f),
    n)
        for (g = n.length; g--; )
            d = n[g],
            d.scaleX = d.scaleY = 0,
            d.renderTransform(1, d);
    return e ? t.inverse() : t
}
function ri(a) {
    if (a === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a
}
function Fi(a, e) {
    a.prototype = Object.create(e.prototype),
    a.prototype.constructor = a,
    a.__proto__ = e
}
var D, B, le, be, Le, It, Me, Vt, ft, Ye, bi, zt, xt, Zt, ct, me, ut, Et, vi, Gt, Mt = 0, Ti = function() {
    return typeof window < "u"
}, Si = function() {
    return D || Ti() && (D = window.gsap) && D.registerPlugin && D
}, Ae = function(e) {
    return typeof e == "function"
}, pt = function(e) {
    return typeof e == "object"
}, _e = function(e) {
    return typeof e > "u"
}, Pt = function() {
    return !1
}, ht = "transform", Ut = "transformOrigin", Re = function(e) {
    return Math.round(e * 1e4) / 1e4
}, st = Array.isArray, vt = function(e, o) {
    var i = le.createElementNS ? le.createElementNS((o || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : le.createElement(e);
    return i.style ? i : le.createElement(e)
}, li = 180 / Math.PI, We = 1e20, Wi = new Ge, Oe = Date.now || function() {
    return new Date().getTime()
}
, ze = [], Ze = {}, Hi = 0, $i = /^(?:a|input|textarea|button|select)$/i, si = 0, Qe = {}, De = {}, Ei = function(e, o) {
    var i = {}, n;
    for (n in e)
        i[n] = o ? e[n] * o : e[n];
    return i
}, Vi = function(e, o) {
    for (var i in o)
        i in e || (e[i] = o[i]);
    return e
}, ai = function a(e, o) {
    for (var i = e.length, n; i--; )
        o ? e[i].style.touchAction = o : e[i].style.removeProperty("touch-action"),
        n = e[i].children,
        n && n.length && a(n, o)
}, Pi = function() {
    return ze.forEach(function(e) {
        return e()
    })
}, zi = function(e) {
    ze.push(e),
    ze.length === 1 && D.ticker.add(Pi)
}, fi = function() {
    return !ze.length && D.ticker.remove(Pi)
}, ci = function(e) {
    for (var o = ze.length; o--; )
        ze[o] === e && ze.splice(o, 1);
    D.to(fi, {
        overwrite: !0,
        delay: 15,
        duration: 0,
        onComplete: fi,
        data: "_draggable"
    })
}, Gi = function(e, o) {
    for (var i in o)
        i in e || (e[i] = o[i]);
    return e
}, Z = function(e, o, i, n) {
    if (e.addEventListener) {
        var s = xt[o];
        n = n || (bi ? {
            passive: !1
        } : null),
        e.addEventListener(s || o, i, n),
        s && o !== s && e.addEventListener(o, i, n)
    }
}, K = function(e, o, i, n) {
    if (e.removeEventListener) {
        var s = xt[o];
        e.removeEventListener(s || o, i, n),
        s && o !== s && e.removeEventListener(o, i, n)
    }
}, de = function(e) {
    e.preventDefault && e.preventDefault(),
    e.preventManipulation && e.preventManipulation()
}, Ui = function(e, o) {
    for (var i = e.length; i--; )
        if (e[i].identifier === o)
            return !0
}, Qi = function a(e) {
    Zt = e.touches && Mt < e.touches.length,
    K(e.target, "touchend", a)
}, ui = function(e) {
    Zt = e.touches && Mt < e.touches.length,
    Z(e.target, "touchend", Qi)
}, je = function(e) {
    return B.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0
}, Je = function(e) {
    return B.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0
}, di = function a(e, o) {
    Z(e, "scroll", o),
    et(e.parentNode) || a(e.parentNode, o)
}, pi = function a(e, o) {
    K(e, "scroll", o),
    et(e.parentNode) || a(e.parentNode, o)
}, et = function(e) {
    return !e || e === be || e.nodeType === 9 || e === le.body || e === B || !e.nodeType || !e.parentNode
}, hi = function(e, o) {
    var i = o === "x" ? "Width" : "Height"
      , n = "scroll" + i
      , s = "client" + i;
    return Math.max(0, et(e) ? Math.max(be[n], Le[n]) - (B["inner" + i] || be[s] || Le[s]) : e[n] - e[s])
}, Bt = function a(e, o) {
    var i = hi(e, "x")
      , n = hi(e, "y");
    et(e) ? e = De : a(e.parentNode, o),
    e._gsMaxScrollX = i,
    e._gsMaxScrollY = n,
    o || (e._gsScrollX = e.scrollLeft || 0,
    e._gsScrollY = e.scrollTop || 0)
}, Ft = function(e, o, i) {
    var n = e.style;
    n && (_e(n[o]) && (o = ft(o, e) || o),
    i == null ? n.removeProperty && n.removeProperty(o.replace(/([A-Z])/g, "-$1").toLowerCase()) : n[o] = i)
}, yt = function(e) {
    return B.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e)
}, He = {}, Ke = function(e) {
    if (e === B)
        return He.left = He.top = 0,
        He.width = He.right = be.clientWidth || e.innerWidth || Le.clientWidth || 0,
        He.height = He.bottom = (e.innerHeight || 0) - 20 < be.clientHeight ? be.clientHeight : e.innerHeight || Le.clientHeight || 0,
        He;
    var o = e.ownerDocument || le
      , i = _e(e.pageX) ? !e.nodeType && !_e(e.left) && !_e(e.top) ? e : Ye(e)[0].getBoundingClientRect() : {
        left: e.pageX - Je(o),
        top: e.pageY - je(o),
        right: e.pageX - Je(o) + 1,
        bottom: e.pageY - je(o) + 1
    };
    return _e(i.right) && !_e(i.width) ? (i.right = i.left + i.width,
    i.bottom = i.top + i.height) : _e(i.width) && (i = {
        width: i.right - i.left,
        height: i.bottom - i.top,
        right: i.right,
        left: i.left,
        bottom: i.bottom,
        top: i.top
    }),
    i
}, U = function(e, o, i) {
    var n = e.vars, s = n[i], u = e._listeners[o], f;
    return Ae(s) && (f = s.apply(n.callbackScope || e, n[i + "Params"] || [e.pointerEvent])),
    u && e.dispatchEvent(o) === !1 && (f = !1),
    f
}, gi = function(e, o) {
    var i = Ye(e)[0], n, s, u;
    return !i.nodeType && i !== B ? _e(e.left) ? (s = e.min || e.minX || e.minRotation || 0,
    n = e.min || e.minY || 0,
    {
        left: s,
        top: n,
        width: (e.max || e.maxX || e.maxRotation || 0) - s,
        height: (e.max || e.maxY || 0) - n
    }) : (u = {
        x: 0,
        y: 0
    },
    {
        left: e.left - u.x,
        top: e.top - u.y,
        width: e.width,
        height: e.height
    }) : Ki(i, o)
}, pe = {}, Ki = function(e, o) {
    o = Ye(o)[0];
    var i = e.getBBox && e.ownerSVGElement, n = e.ownerDocument || le, s, u, f, g, d, w, m, v, t, T, N, q, O;
    if (e === B)
        f = je(n),
        s = Je(n),
        u = s + (n.documentElement.clientWidth || e.innerWidth || n.body.clientWidth || 0),
        g = f + ((e.innerHeight || 0) - 20 < n.documentElement.clientHeight ? n.documentElement.clientHeight : e.innerHeight || n.body.clientHeight || 0);
    else {
        if (o === B || _e(o))
            return e.getBoundingClientRect();
        s = f = 0,
        i ? (T = e.getBBox(),
        N = T.width,
        q = T.height) : (e.viewBox && (T = e.viewBox.baseVal) && (s = T.x || 0,
        f = T.y || 0,
        N = T.width,
        q = T.height),
        N || (O = yt(e),
        T = O.boxSizing === "border-box",
        N = (parseFloat(O.width) || e.clientWidth || 0) + (T ? 0 : parseFloat(O.borderLeftWidth) + parseFloat(O.borderRightWidth)),
        q = (parseFloat(O.height) || e.clientHeight || 0) + (T ? 0 : parseFloat(O.borderTopWidth) + parseFloat(O.borderBottomWidth)))),
        u = N,
        g = q
    }
    return e === o ? {
        left: s,
        top: f,
        width: u - s,
        height: g - f
    } : (d = $e(o, !0).multiply($e(e)),
    w = d.apply({
        x: s,
        y: f
    }),
    m = d.apply({
        x: u,
        y: f
    }),
    v = d.apply({
        x: u,
        y: g
    }),
    t = d.apply({
        x: s,
        y: g
    }),
    s = Math.min(w.x, m.x, v.x, t.x),
    f = Math.min(w.y, m.y, v.y, t.y),
    {
        left: s,
        top: f,
        width: Math.max(w.x, m.x, v.x, t.x) - s,
        height: Math.max(w.y, m.y, v.y, t.y) - f
    })
}, Wt = function(e, o, i, n, s, u) {
    var f = {}, g, d, w;
    if (o)
        if (s !== 1 && o instanceof Array) {
            if (f.end = g = [],
            w = o.length,
            pt(o[0]))
                for (d = 0; d < w; d++)
                    g[d] = Ei(o[d], s);
            else
                for (d = 0; d < w; d++)
                    g[d] = o[d] * s;
            i += 1.1,
            n -= 1.1
        } else
            Ae(o) ? f.end = function(m) {
                var v = o.call(e, m), t, T;
                if (s !== 1)
                    if (pt(v)) {
                        t = {};
                        for (T in v)
                            t[T] = v[T] * s;
                        v = t
                    } else
                        v *= s;
                return v
            }
            : f.end = o;
    return (i || i === 0) && (f.max = i),
    (n || n === 0) && (f.min = n),
    u && (f.velocity = 0),
    f
}, qi = function a(e) {
    var o;
    return !e || !e.getAttribute || e === Le ? !1 : (o = e.getAttribute("data-clickable")) === "true" || o !== "false" && (e.onclick || $i.test(e.nodeName + "") || e.getAttribute("contentEditable") === "true") ? !0 : a(e.parentNode)
}, Tt = function(e, o) {
    for (var i = e.length, n; i--; )
        n = e[i],
        n.ondragstart = n.onselectstart = o ? null : Pt,
        D.set(n, {
            lazy: !0,
            userSelect: o ? "text" : "none"
        })
}, Zi = function a(e) {
    if (yt(e).position === "fixed")
        return !0;
    if (e = e.parentNode,
    e && e.nodeType === 1)
        return a(e)
}, Di, Qt, ji = function(e, o) {
    e = D.utils.toArray(e)[0],
    o = o || {};
    var i = document.createElement("div"), n = i.style, s = e.firstChild, u = 0, f = 0, g = e.scrollTop, d = e.scrollLeft, w = e.scrollWidth, m = e.scrollHeight, v = 0, t = 0, T = 0, N, q, O, Ee, ve, se;
    Di && o.force3D !== !1 ? (ve = "translate3d(",
    se = "px,0px)") : ht && (ve = "translate(",
    se = "px)"),
    this.scrollTop = function(X, te) {
        if (!arguments.length)
            return -this.top();
        this.top(-X, te)
    }
    ,
    this.scrollLeft = function(X, te) {
        if (!arguments.length)
            return -this.left();
        this.left(-X, te)
    }
    ,
    this.left = function(X, te) {
        if (!arguments.length)
            return -(e.scrollLeft + f);
        var W = e.scrollLeft - d
          , C = f;
        if ((W > 2 || W < -2) && !te) {
            d = e.scrollLeft,
            D.killTweensOf(this, {
                left: 1,
                scrollLeft: 1
            }),
            this.left(-d),
            o.onKill && o.onKill();
            return
        }
        X = -X,
        X < 0 ? (f = X - .5 | 0,
        X = 0) : X > t ? (f = X - t | 0,
        X = t) : f = 0,
        (f || C) && (this._skip || (n[ht] = ve + -f + "px," + -u + se),
        f + v >= 0 && (n.paddingRight = f + v + "px")),
        e.scrollLeft = X | 0,
        d = e.scrollLeft
    }
    ,
    this.top = function(X, te) {
        if (!arguments.length)
            return -(e.scrollTop + u);
        var W = e.scrollTop - g
          , C = u;
        if ((W > 2 || W < -2) && !te) {
            g = e.scrollTop,
            D.killTweensOf(this, {
                top: 1,
                scrollTop: 1
            }),
            this.top(-g),
            o.onKill && o.onKill();
            return
        }
        X = -X,
        X < 0 ? (u = X - .5 | 0,
        X = 0) : X > T ? (u = X - T | 0,
        X = T) : u = 0,
        (u || C) && (this._skip || (n[ht] = ve + -f + "px," + -u + se)),
        e.scrollTop = X | 0,
        g = e.scrollTop
    }
    ,
    this.maxScrollTop = function() {
        return T
    }
    ,
    this.maxScrollLeft = function() {
        return t
    }
    ,
    this.disable = function() {
        for (s = i.firstChild; s; )
            Ee = s.nextSibling,
            e.appendChild(s),
            s = Ee;
        e === i.parentNode && e.removeChild(i)
    }
    ,
    this.enable = function() {
        if (s = e.firstChild,
        s !== i) {
            for (; s; )
                Ee = s.nextSibling,
                i.appendChild(s),
                s = Ee;
            e.appendChild(i),
            this.calibrate()
        }
    }
    ,
    this.calibrate = function(X) {
        var te = e.clientWidth === N, W, C, oe;
        g = e.scrollTop,
        d = e.scrollLeft,
        !(te && e.clientHeight === q && i.offsetHeight === O && w === e.scrollWidth && m === e.scrollHeight && !X) && ((u || f) && (C = this.left(),
        oe = this.top(),
        this.left(-e.scrollLeft),
        this.top(-e.scrollTop)),
        W = yt(e),
        (!te || X) && (n.display = "block",
        n.width = "auto",
        n.paddingRight = "0px",
        v = Math.max(0, e.scrollWidth - e.clientWidth),
        v && (v += parseFloat(W.paddingLeft) + (Qt ? parseFloat(W.paddingRight) : 0))),
        n.display = "inline-block",
        n.position = "relative",
        n.overflow = "visible",
        n.verticalAlign = "top",
        n.boxSizing = "content-box",
        n.width = "100%",
        n.paddingRight = v + "px",
        Qt && (n.paddingBottom = W.paddingBottom),
        N = e.clientWidth,
        q = e.clientHeight,
        w = e.scrollWidth,
        m = e.scrollHeight,
        t = e.scrollWidth - N,
        T = e.scrollHeight - q,
        O = i.offsetHeight,
        n.display = "block",
        (C || oe) && (this.left(C),
        this.top(oe)))
    }
    ,
    this.content = i,
    this.element = e,
    this._skip = !1,
    this.enable()
}, Ht = function(e) {
    if (Ti() && document.body) {
        var o = window && window.navigator;
        B = window,
        le = document,
        be = le.documentElement,
        Le = le.body,
        It = vt("div"),
        Et = !!window.PointerEvent,
        Me = vt("div"),
        Me.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",
        ut = Me.style.cursor === "grab" ? "grab" : "move",
        ct = o && o.userAgent.toLowerCase().indexOf("android") !== -1,
        zt = "ontouchstart"in be && "orientation"in B || o && (o.MaxTouchPoints > 0 || o.msMaxTouchPoints > 0),
        Qt = function() {
            var i = vt("div"), n = vt("div"), s = n.style, u = Le, f;
            return s.display = "inline-block",
            s.position = "relative",
            i.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",
            i.appendChild(n),
            u.appendChild(i),
            f = n.offsetHeight + 18 > i.scrollHeight,
            u.removeChild(i),
            f
        }(),
        xt = function(i) {
            for (var n = i.split(","), s = ("onpointerdown"in It ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown"in It ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : i).split(","), u = {}, f = 4; --f > -1; )
                u[n[f]] = s[f],
                u[s[f]] = n[f];
            try {
                be.addEventListener("test", null, Object.defineProperty({}, "passive", {
                    get: function() {
                        bi = 1
                    }
                }))
            } catch {}
            return u
        }("touchstart,touchmove,touchend,touchcancel"),
        Z(le, "touchcancel", Pt),
        Z(B, "touchmove", Pt),
        Le && Le.addEventListener("touchstart", Pt),
        Z(le, "contextmenu", function() {
            for (var i in Ze)
                Ze[i].isPressed && Ze[i].endDrag()
        }),
        D = Vt = Si()
    }
    D ? (me = D.plugins.inertia,
    vi = D.core.context || function() {}
    ,
    ft = D.utils.checkPrefix,
    ht = ft(ht),
    Ut = ft(Ut),
    Ye = D.utils.toArray,
    Gt = D.core.getStyleSaver,
    Di = !!ft("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)")
}, Ji = function() {
    function a(o) {
        this._listeners = {},
        this.target = o || this
    }
    var e = a.prototype;
    return e.addEventListener = function(i, n) {
        var s = this._listeners[i] || (this._listeners[i] = []);
        ~s.indexOf(n) || s.push(n)
    }
    ,
    e.removeEventListener = function(i, n) {
        var s = this._listeners[i]
          , u = s && s.indexOf(n);
        u >= 0 && s.splice(u, 1)
    }
    ,
    e.dispatchEvent = function(i) {
        var n = this, s;
        return (this._listeners[i] || []).forEach(function(u) {
            return u.call(n, {
                type: i,
                target: n.target
            }) === !1 && (s = !1)
        }),
        s
    }
    ,
    a
}(), Ue = function(a) {
    Fi(e, a);
    function e(o, i) {
        var n;
        n = a.call(this) || this,
        Vt || Ht(1),
        o = Ye(o)[0],
        n.styles = Gt && Gt(o, "transform,left,top"),
        me || (me = D.plugins.inertia),
        n.vars = i = Ei(i || {}),
        n.target = o,
        n.x = n.y = n.rotation = 0,
        n.dragResistance = parseFloat(i.dragResistance) || 0,
        n.edgeResistance = isNaN(i.edgeResistance) ? 1 : parseFloat(i.edgeResistance) || 0,
        n.lockAxis = i.lockAxis,
        n.autoScroll = i.autoScroll || 0,
        n.lockedAxis = null,
        n.allowEventDefault = !!i.allowEventDefault,
        D.getProperty(o, "x");
        var s = (i.type || "x,y").toLowerCase(), u = ~s.indexOf("x") || ~s.indexOf("y"), f = s.indexOf("rotation") !== -1, g = f ? "rotation" : u ? "x" : "left", d = u ? "y" : "top", w = !!(~s.indexOf("x") || ~s.indexOf("left") || s === "scroll"), m = !!(~s.indexOf("y") || ~s.indexOf("top") || s === "scroll"), v = i.minimumMovement || 2, t = ri(n), T = Ye(i.trigger || i.handle || o), N = {}, q = 0, O = !1, Ee = i.autoScrollMarginTop || 40, ve = i.autoScrollMarginRight || 40, se = i.autoScrollMarginBottom || 40, X = i.autoScrollMarginLeft || 40, te = i.clickableTest || qi, W = 0, C = o._gsap || D.core.getCache(o), oe = Zi(o), Te = function(r, c) {
            return parseFloat(C.get(o, r, c))
        }, R = o.ownerDocument || le, ae, h, S, L, E, k, ne, ge, tt, F, H, $, Q, wt, fe, it, j, Ct, ke, Ne, Ie, ot, J, A, jt, ce, xe, Lt, kt, Jt, re, ei, mt, ti = function(r) {
            return de(r),
            r.stopImmediatePropagation && r.stopImmediatePropagation(),
            !1
        }, Se = function b(r) {
            if (t.autoScroll && t.isDragging && (O || j)) {
                var c = o, l = t.autoScroll * 15, p, x, y, P, _, Y, M, I;
                for (O = !1,
                De.scrollTop = B.pageYOffset != null ? B.pageYOffset : R.documentElement.scrollTop != null ? R.documentElement.scrollTop : R.body.scrollTop,
                De.scrollLeft = B.pageXOffset != null ? B.pageXOffset : R.documentElement.scrollLeft != null ? R.documentElement.scrollLeft : R.body.scrollLeft,
                P = t.pointerX - De.scrollLeft,
                _ = t.pointerY - De.scrollTop; c && !x; )
                    x = et(c.parentNode),
                    p = x ? De : c.parentNode,
                    y = x ? {
                        bottom: Math.max(be.clientHeight, B.innerHeight || 0),
                        right: Math.max(be.clientWidth, B.innerWidth || 0),
                        left: 0,
                        top: 0
                    } : p.getBoundingClientRect(),
                    Y = M = 0,
                    m && (I = p._gsMaxScrollY - p.scrollTop,
                    I < 0 ? M = I : _ > y.bottom - se && I ? (O = !0,
                    M = Math.min(I, l * (1 - Math.max(0, y.bottom - _) / se) | 0)) : _ < y.top + Ee && p.scrollTop && (O = !0,
                    M = -Math.min(p.scrollTop, l * (1 - Math.max(0, _ - y.top) / Ee) | 0)),
                    M && (p.scrollTop += M)),
                    w && (I = p._gsMaxScrollX - p.scrollLeft,
                    I < 0 ? Y = I : P > y.right - ve && I ? (O = !0,
                    Y = Math.min(I, l * (1 - Math.max(0, y.right - P) / ve) | 0)) : P < y.left + X && p.scrollLeft && (O = !0,
                    Y = -Math.min(p.scrollLeft, l * (1 - Math.max(0, P - y.left) / X) | 0)),
                    Y && (p.scrollLeft += Y)),
                    x && (Y || M) && (B.scrollTo(p.scrollLeft, p.scrollTop),
                    lt(t.pointerX + Y, t.pointerY + M)),
                    c = p
            }
            if (j) {
                var z = t.x
                  , ie = t.y;
                f ? (t.deltaX = z - parseFloat(C.rotation),
                t.rotation = z,
                C.rotation = z + "deg",
                C.renderTransform(1, C)) : h ? (m && (t.deltaY = ie - h.top(),
                h.top(ie)),
                w && (t.deltaX = z - h.left(),
                h.left(z))) : u ? (m && (t.deltaY = ie - parseFloat(C.y),
                C.y = ie + "px"),
                w && (t.deltaX = z - parseFloat(C.x),
                C.x = z + "px"),
                C.renderTransform(1, C)) : (m && (t.deltaY = ie - parseFloat(o.style.top || 0),
                o.style.top = ie + "px"),
                w && (t.deltaX = z - parseFloat(o.style.left || 0),
                o.style.left = z + "px")),
                ge && !r && !Lt && (Lt = !0,
                U(t, "drag", "onDrag") === !1 && (w && (t.x -= t.deltaX),
                m && (t.y -= t.deltaY),
                b(!0)),
                Lt = !1)
            }
            j = !1
        }, Be = function(r, c) {
            var l = t.x, p = t.y, x, y;
            o._gsap || (C = D.core.getCache(o)),
            C.uncache && D.getProperty(o, "x"),
            u ? (t.x = parseFloat(C.x),
            t.y = parseFloat(C.y)) : f ? t.x = t.rotation = parseFloat(C.rotation) : h ? (t.y = h.top(),
            t.x = h.left()) : (t.y = parseFloat(o.style.top || (y = yt(o)) && y.top) || 0,
            t.x = parseFloat(o.style.left || (y || {}).left) || 0),
            (ke || Ne || Ie) && !c && (t.isDragging || t.isThrowing) && (Ie && (Qe.x = t.x,
            Qe.y = t.y,
            x = Ie(Qe),
            x.x !== t.x && (t.x = x.x,
            j = !0),
            x.y !== t.y && (t.y = x.y,
            j = !0)),
            ke && (x = ke(t.x),
            x !== t.x && (t.x = x,
            f && (t.rotation = x),
            j = !0)),
            Ne && (x = Ne(t.y),
            x !== t.y && (t.y = x),
            j = !0)),
            j && Se(!0),
            r || (t.deltaX = t.x - l,
            t.deltaY = t.y - p,
            U(t, "throwupdate", "onThrowUpdate"))
        }, Nt = function(r, c, l, p) {
            return c == null && (c = -We),
            l == null && (l = We),
            Ae(r) ? function(x) {
                var y = t.isPressed ? 1 - t.edgeResistance : 1;
                return r.call(t, (x > l ? l + (x - l) * y : x < c ? c + (x - c) * y : x) * p) * p
            }
            : st(r) ? function(x) {
                for (var y = r.length, P = 0, _ = We, Y, M; --y > -1; )
                    Y = r[y],
                    M = Y - x,
                    M < 0 && (M = -M),
                    M < _ && Y >= c && Y <= l && (P = y,
                    _ = M);
                return r[P]
            }
            : isNaN(r) ? function(x) {
                return x
            }
            : function() {
                return r * p
            }
        }, Mi = function(r, c, l, p, x, y, P) {
            return y = y && y < We ? y * y : We,
            Ae(r) ? function(_) {
                var Y = t.isPressed ? 1 - t.edgeResistance : 1, M = _.x, I = _.y, z, ie, Pe;
                return _.x = M = M > l ? l + (M - l) * Y : M < c ? c + (M - c) * Y : M,
                _.y = I = I > x ? x + (I - x) * Y : I < p ? p + (I - p) * Y : I,
                z = r.call(t, _),
                z !== _ && (_.x = z.x,
                _.y = z.y),
                P !== 1 && (_.x *= P,
                _.y *= P),
                y < We && (ie = _.x - M,
                Pe = _.y - I,
                ie * ie + Pe * Pe > y && (_.x = M,
                _.y = I)),
                _
            }
            : st(r) ? function(_) {
                for (var Y = r.length, M = 0, I = We, z, ie, Pe, ue; --Y > -1; )
                    Pe = r[Y],
                    z = Pe.x - _.x,
                    ie = Pe.y - _.y,
                    ue = z * z + ie * ie,
                    ue < I && (M = Y,
                    I = ue);
                return I <= y ? r[M] : _
            }
            : function(_) {
                return _
            }
        }, Xt = function() {
            var r, c, l, p;
            ne = !1,
            h ? (h.calibrate(),
            t.minX = H = -h.maxScrollLeft(),
            t.minY = Q = -h.maxScrollTop(),
            t.maxX = F = t.maxY = $ = 0,
            ne = !0) : i.bounds && (r = gi(i.bounds, o.parentNode),
            f ? (t.minX = H = r.left,
            t.maxX = F = r.left + r.width,
            t.minY = Q = t.maxY = $ = 0) : !_e(i.bounds.maxX) || !_e(i.bounds.maxY) ? (r = i.bounds,
            t.minX = H = r.minX,
            t.minY = Q = r.minY,
            t.maxX = F = r.maxX,
            t.maxY = $ = r.maxY) : (c = gi(o, o.parentNode),
            t.minX = H = Math.round(Te(g, "px") + r.left - c.left),
            t.minY = Q = Math.round(Te(d, "px") + r.top - c.top),
            t.maxX = F = Math.round(H + (r.width - c.width)),
            t.maxY = $ = Math.round(Q + (r.height - c.height))),
            H > F && (t.minX = F,
            t.maxX = F = H,
            H = t.minX),
            Q > $ && (t.minY = $,
            t.maxY = $ = Q,
            Q = t.minY),
            f && (t.minRotation = H,
            t.maxRotation = F),
            ne = !0),
            i.liveSnap && (l = i.liveSnap === !0 ? i.snap || {} : i.liveSnap,
            p = st(l) || Ae(l),
            f ? (ke = Nt(p ? l : l.rotation, H, F, 1),
            Ne = null) : l.points ? Ie = Mi(p ? l : l.points, H, F, Q, $, l.radius, h ? -1 : 1) : (w && (ke = Nt(p ? l : l.x || l.left || l.scrollLeft, H, F, h ? -1 : 1)),
            m && (Ne = Nt(p ? l : l.y || l.top || l.scrollTop, Q, $, h ? -1 : 1))))
        }, Ci = function() {
            t.isThrowing = !1,
            U(t, "throwcomplete", "onThrowComplete")
        }, Li = function() {
            t.isThrowing = !1
        }, Rt = function(r, c) {
            var l, p, x, y;
            r && me ? (r === !0 && (l = i.snap || i.liveSnap || {},
            p = st(l) || Ae(l),
            r = {
                resistance: (i.throwResistance || i.resistance || 1e3) / (f ? 10 : 1)
            },
            f ? r.rotation = Wt(t, p ? l : l.rotation, F, H, 1, c) : (w && (r[g] = Wt(t, p ? l : l.points || l.x || l.left, F, H, h ? -1 : 1, c || t.lockedAxis === "x")),
            m && (r[d] = Wt(t, p ? l : l.points || l.y || l.top, $, Q, h ? -1 : 1, c || t.lockedAxis === "y")),
            (l.points || st(l) && pt(l[0])) && (r.linkedProps = g + "," + d,
            r.radius = l.radius))),
            t.isThrowing = !0,
            y = isNaN(i.overshootTolerance) ? i.edgeResistance === 1 ? 0 : 1 - t.edgeResistance + .2 : i.overshootTolerance,
            r.duration || (r.duration = {
                max: Math.max(i.minDuration || 0, "maxDuration"in i ? i.maxDuration : 2),
                min: isNaN(i.minDuration) ? y === 0 || pt(r) && r.resistance > 1e3 ? 0 : .5 : i.minDuration,
                overshoot: y
            }),
            t.tween = x = D.to(h || o, {
                inertia: r,
                data: "_draggable",
                onComplete: Ci,
                onInterrupt: Li,
                onUpdate: i.fastMode ? U : Be,
                onUpdateParams: i.fastMode ? [t, "onthrowupdate", "onThrowUpdate"] : l && l.radius ? [!1, !0] : []
            }),
            i.fastMode || (h && (h._skip = !0),
            x.render(1e9, !0, !0),
            Be(!0, !0),
            t.endX = t.x,
            t.endY = t.y,
            f && (t.endRotation = t.x),
            x.play(0),
            Be(!0, !0),
            h && (h._skip = !1))) : ne && t.applyBounds()
        }, ii = function(r) {
            var c = A, l;
            A = $e(o.parentNode, !0),
            r && t.isPressed && !A.equals(c || new Ge) && (l = c.inverse().apply({
                x: S,
                y: L
            }),
            A.apply(l, l),
            S = l.x,
            L = l.y),
            A.equals(Wi) && (A = null)
        }, _t = function() {
            var r = 1 - t.edgeResistance, c = oe ? Je(R) : 0, l = oe ? je(R) : 0, p, x, y;
            u && (C.x = Te(g, "px") + "px",
            C.y = Te(d, "px") + "px",
            C.renderTransform()),
            ii(!1),
            pe.x = t.pointerX - c,
            pe.y = t.pointerY - l,
            A && A.apply(pe, pe),
            S = pe.x,
            L = pe.y,
            j && (lt(t.pointerX, t.pointerY),
            Se(!0)),
            ei = $e(o),
            h ? (Xt(),
            k = h.top(),
            E = h.left()) : (nt() ? (Be(!0, !0),
            Xt()) : t.applyBounds(),
            f ? (p = o.ownerSVGElement ? [C.xOrigin - o.getBBox().x, C.yOrigin - o.getBBox().y] : (yt(o)[Ut] || "0 0").split(" "),
            it = t.rotationOrigin = $e(o).apply({
                x: parseFloat(p[0]) || 0,
                y: parseFloat(p[1]) || 0
            }),
            Be(!0, !0),
            x = t.pointerX - it.x - c,
            y = it.y - t.pointerY + l,
            E = t.x,
            k = t.y = Math.atan2(y, x) * li) : (k = Te(d, "px"),
            E = Te(g, "px"))),
            ne && r && (E > F ? E = F + (E - F) / r : E < H && (E = H - (H - E) / r),
            f || (k > $ ? k = $ + (k - $) / r : k < Q && (k = Q - (Q - k) / r))),
            t.startX = E = Re(E),
            t.startY = k = Re(k)
        }, nt = function() {
            return t.tween && t.tween.isActive()
        }, ki = function() {
            Me.parentNode && !nt() && !t.isDragging && Me.parentNode.removeChild(Me)
        }, rt = function(r, c) {
            var l;
            if (!ae || t.isPressed || !r || (r.type === "mousedown" || r.type === "pointerdown") && !c && Oe() - W < 30 && xt[t.pointerEvent.type]) {
                re && r && ae && de(r);
                return
            }
            if (jt = nt(),
            mt = !1,
            t.pointerEvent = r,
            xt[r.type] ? (J = ~r.type.indexOf("touch") ? r.currentTarget || r.target : R,
            Z(J, "touchend", ye),
            Z(J, "touchmove", Fe),
            Z(J, "touchcancel", ye),
            Z(R, "touchstart", ui)) : (J = null,
            Z(R, "mousemove", Fe)),
            xe = null,
            (!Et || !J) && (Z(R, "mouseup", ye),
            r && r.target && Z(r.target, "mouseup", ye)),
            ot = te.call(t, r.target) && i.dragClickables === !1 && !c,
            ot) {
                Z(r.target, "change", ye),
                U(t, "pressInit", "onPressInit"),
                U(t, "press", "onPress"),
                Tt(T, !0),
                re = !1;
                return
            }
            if (ce = !J || w === m || t.vars.allowNativeTouchScrolling === !1 || t.vars.allowContextMenu && r && (r.ctrlKey || r.which > 2) ? !1 : w ? "y" : "x",
            re = !ce && !t.allowEventDefault,
            re && (de(r),
            Z(B, "touchforcechange", de)),
            r.changedTouches ? (r = wt = r.changedTouches[0],
            fe = r.identifier) : r.pointerId ? fe = r.pointerId : wt = fe = null,
            Mt++,
            zi(Se),
            L = t.pointerY = r.pageY,
            S = t.pointerX = r.pageX,
            U(t, "pressInit", "onPressInit"),
            (ce || t.autoScroll) && Bt(o.parentNode),
            o.parentNode && t.autoScroll && !h && !f && o.parentNode._gsMaxScrollX && !Me.parentNode && !o.getBBox && (Me.style.width = o.parentNode.scrollWidth + "px",
            o.parentNode.appendChild(Me)),
            _t(),
            t.tween && t.tween.kill(),
            t.isThrowing = !1,
            D.killTweensOf(h || o, N, !0),
            h && D.killTweensOf(o, {
                scrollTo: 1
            }, !0),
            t.tween = t.lockedAxis = null,
            (i.zIndexBoost || !f && !h && i.zIndexBoost !== !1) && (o.style.zIndex = e.zIndex++),
            t.isPressed = !0,
            ge = !!(i.onDrag || t._listeners.drag),
            tt = !!(i.onMove || t._listeners.move),
            i.cursor !== !1 || i.activeCursor)
                for (l = T.length; --l > -1; )
                    D.set(T[l], {
                        cursor: i.activeCursor || i.cursor || (ut === "grab" ? "grabbing" : ut)
                    });
            U(t, "press", "onPress")
        }, Fe = function(r) {
            var c = r, l, p, x, y, P, _;
            if (!ae || Zt || !t.isPressed || !r) {
                re && r && ae && de(r);
                return
            }
            if (t.pointerEvent = r,
            l = r.changedTouches,
            l) {
                if (r = l[0],
                r !== wt && r.identifier !== fe) {
                    for (y = l.length; --y > -1 && (r = l[y]).identifier !== fe && r.target !== o; )
                        ;
                    if (y < 0)
                        return
                }
            } else if (r.pointerId && fe && r.pointerId !== fe)
                return;
            if (J && ce && !xe && (pe.x = r.pageX - (oe ? Je(R) : 0),
            pe.y = r.pageY - (oe ? je(R) : 0),
            A && A.apply(pe, pe),
            p = pe.x,
            x = pe.y,
            P = Math.abs(p - S),
            _ = Math.abs(x - L),
            (P !== _ && (P > v || _ > v) || ct && ce === xe) && (xe = P > _ && w ? "x" : "y",
            ce && xe !== ce && Z(B, "touchforcechange", de),
            t.vars.lockAxisOnTouchScroll !== !1 && w && m && (t.lockedAxis = xe === "x" ? "y" : "x",
            Ae(t.vars.onLockAxis) && t.vars.onLockAxis.call(t, c)),
            ct && ce === xe))) {
                ye(c);
                return
            }
            !t.allowEventDefault && (!ce || xe && ce !== xe) && c.cancelable !== !1 ? (de(c),
            re = !0) : re && (re = !1),
            t.autoScroll && (O = !0),
            lt(r.pageX, r.pageY, tt)
        }, lt = function(r, c, l) {
            var p = 1 - t.dragResistance, x = 1 - t.edgeResistance, y = t.pointerX, P = t.pointerY, _ = k, Y = t.x, M = t.y, I = t.endX, z = t.endY, ie = t.endRotation, Pe = j, ue, Xe, ee, G, Ot, we;
            t.pointerX = r,
            t.pointerY = c,
            oe && (r -= Je(R),
            c -= je(R)),
            f ? (G = Math.atan2(it.y - c, r - it.x) * li,
            Ot = t.y - G,
            Ot > 180 ? (k -= 360,
            t.y = G) : Ot < -180 && (k += 360,
            t.y = G),
            t.x !== E || Math.abs(k - G) > v ? (t.y = G,
            ee = E + (k - G) * p) : ee = E) : (A && (we = r * A.a + c * A.c + A.e,
            c = r * A.b + c * A.d + A.f,
            r = we),
            Xe = c - L,
            ue = r - S,
            Xe < v && Xe > -v && (Xe = 0),
            ue < v && ue > -v && (ue = 0),
            (t.lockAxis || t.lockedAxis) && (ue || Xe) && (we = t.lockedAxis,
            we || (t.lockedAxis = we = w && Math.abs(ue) > Math.abs(Xe) ? "y" : m ? "x" : null,
            we && Ae(t.vars.onLockAxis) && t.vars.onLockAxis.call(t, t.pointerEvent)),
            we === "y" ? Xe = 0 : we === "x" && (ue = 0)),
            ee = Re(E + ue * p),
            G = Re(k + Xe * p)),
            (ke || Ne || Ie) && (t.x !== ee || t.y !== G && !f) && (Ie && (Qe.x = ee,
            Qe.y = G,
            we = Ie(Qe),
            ee = Re(we.x),
            G = Re(we.y)),
            ke && (ee = Re(ke(ee))),
            Ne && (G = Re(Ne(G)))),
            ne && (ee > F ? ee = F + Math.round((ee - F) * x) : ee < H && (ee = H + Math.round((ee - H) * x)),
            f || (G > $ ? G = Math.round($ + (G - $) * x) : G < Q && (G = Math.round(Q + (G - Q) * x)))),
            (t.x !== ee || t.y !== G && !f) && (f ? (t.endRotation = t.x = t.endX = ee,
            j = !0) : (m && (t.y = t.endY = G,
            j = !0),
            w && (t.x = t.endX = ee,
            j = !0)),
            !l || U(t, "move", "onMove") !== !1 ? !t.isDragging && t.isPressed && (t.isDragging = mt = !0,
            U(t, "dragstart", "onDragStart")) : (t.pointerX = y,
            t.pointerY = P,
            k = _,
            t.x = Y,
            t.y = M,
            t.endX = I,
            t.endY = z,
            t.endRotation = ie,
            j = Pe))
        }, ye = function b(r, c) {
            if (!ae || !t.isPressed || r && fe != null && !c && (r.pointerId && r.pointerId !== fe && r.target !== o || r.changedTouches && !Ui(r.changedTouches, fe))) {
                re && r && ae && de(r);
                return
            }
            t.isPressed = !1;
            var l = r, p = t.isDragging, x = t.vars.allowContextMenu && r && (r.ctrlKey || r.which > 2), y = D.delayedCall(.001, ki), P, _, Y, M, I;
            if (J ? (K(J, "touchend", b),
            K(J, "touchmove", Fe),
            K(J, "touchcancel", b),
            K(R, "touchstart", ui)) : K(R, "mousemove", Fe),
            K(B, "touchforcechange", de),
            (!Et || !J) && (K(R, "mouseup", b),
            r && r.target && K(r.target, "mouseup", b)),
            j = !1,
            p && (q = si = Oe(),
            t.isDragging = !1),
            ci(Se),
            ot && !x) {
                r && (K(r.target, "change", b),
                t.pointerEvent = l),
                Tt(T, !1),
                U(t, "release", "onRelease"),
                U(t, "click", "onClick"),
                ot = !1;
                return
            }
            for (_ = T.length; --_ > -1; )
                Ft(T[_], "cursor", i.cursor || (i.cursor !== !1 ? ut : null));
            if (Mt--,
            r) {
                if (P = r.changedTouches,
                P && (r = P[0],
                r !== wt && r.identifier !== fe)) {
                    for (_ = P.length; --_ > -1 && (r = P[_]).identifier !== fe && r.target !== o; )
                        ;
                    if (_ < 0 && !c)
                        return
                }
                t.pointerEvent = l,
                t.pointerX = r.pageX,
                t.pointerY = r.pageY
            }
            return x && l ? (de(l),
            re = !0,
            U(t, "release", "onRelease")) : l && !p ? (re = !1,
            jt && (i.snap || i.bounds) && Rt(i.inertia || i.throwProps),
            U(t, "release", "onRelease"),
            (!ct || l.type !== "touchmove") && l.type.indexOf("cancel") === -1 && (U(t, "click", "onClick"),
            Oe() - W < 300 && U(t, "doubleclick", "onDoubleClick"),
            M = l.target || o,
            W = Oe(),
            I = function() {
                W !== kt && t.enabled() && !t.isPressed && !l.defaultPrevented && (M.click ? M.click() : R.createEvent && (Y = R.createEvent("MouseEvents"),
                Y.initMouseEvent("click", !0, !0, B, 1, t.pointerEvent.screenX, t.pointerEvent.screenY, t.pointerX, t.pointerY, !1, !1, !1, !1, 0, null),
                M.dispatchEvent(Y)))
            }
            ,
            !ct && !l.defaultPrevented && D.delayedCall(.05, I))) : (Rt(i.inertia || i.throwProps),
            !t.allowEventDefault && l && (i.dragClickables !== !1 || !te.call(t, l.target)) && p && (!ce || xe && ce === xe) && l.cancelable !== !1 ? (re = !0,
            de(l)) : re = !1,
            U(t, "release", "onRelease")),
            nt() && y.duration(t.tween.duration()),
            p && U(t, "dragend", "onDragEnd"),
            !0
        }, bt = function(r) {
            if (r && t.isDragging && !h) {
                var c = r.target || o.parentNode
                  , l = c.scrollLeft - c._gsScrollX
                  , p = c.scrollTop - c._gsScrollY;
                (l || p) && (A ? (S -= l * A.a + p * A.c,
                L -= p * A.d + l * A.b) : (S -= l,
                L -= p),
                c._gsScrollX += l,
                c._gsScrollY += p,
                lt(t.pointerX, t.pointerY))
            }
        }, oi = function(r) {
            var c = Oe()
              , l = c - W < 100
              , p = c - q < 50
              , x = l && kt === W
              , y = t.pointerEvent && t.pointerEvent.defaultPrevented
              , P = l && Jt === W
              , _ = r.isTrusted || r.isTrusted == null && l && x;
            if ((x || p && t.vars.suppressClickOnDrag !== !1) && r.stopImmediatePropagation && r.stopImmediatePropagation(),
            l && !(t.pointerEvent && t.pointerEvent.defaultPrevented) && (!x || _ && !P)) {
                _ && x && (Jt = W),
                kt = W;
                return
            }
            (t.isPressed || p || l) && (!_ || !r.detail || !l || y) && de(r),
            !l && !p && !mt && (r && r.target && (t.pointerEvent = r),
            U(t, "click", "onClick"))
        }, ni = function(r) {
            return A ? {
                x: r.x * A.a + r.y * A.c + A.e,
                y: r.x * A.b + r.y * A.d + A.f
            } : {
                x: r.x,
                y: r.y
            }
        };
        return Ct = e.get(o),
        Ct && Ct.kill(),
        n.startDrag = function(b, r) {
            var c, l, p, x;
            rt(b || t.pointerEvent, !0),
            r && !t.hitTest(b || t.pointerEvent) && (c = Ke(b || t.pointerEvent),
            l = Ke(o),
            p = ni({
                x: c.left + c.width / 2,
                y: c.top + c.height / 2
            }),
            x = ni({
                x: l.left + l.width / 2,
                y: l.top + l.height / 2
            }),
            S -= p.x - x.x,
            L -= p.y - x.y),
            t.isDragging || (t.isDragging = mt = !0,
            U(t, "dragstart", "onDragStart"))
        }
        ,
        n.drag = Fe,
        n.endDrag = function(b) {
            return ye(b || t.pointerEvent, !0)
        }
        ,
        n.timeSinceDrag = function() {
            return t.isDragging ? 0 : (Oe() - q) / 1e3
        }
        ,
        n.timeSinceClick = function() {
            return (Oe() - W) / 1e3
        }
        ,
        n.hitTest = function(b, r) {
            return e.hitTest(t.target, b, r)
        }
        ,
        n.getDirection = function(b, r) {
            var c = b === "velocity" && me ? b : pt(b) && !f ? "element" : "start", l, p, x, y, P, _;
            return c === "element" && (P = Ke(t.target),
            _ = Ke(b)),
            l = c === "start" ? t.x - E : c === "velocity" ? me.getVelocity(o, g) : P.left + P.width / 2 - (_.left + _.width / 2),
            f ? l < 0 ? "counter-clockwise" : "clockwise" : (r = r || 2,
            p = c === "start" ? t.y - k : c === "velocity" ? me.getVelocity(o, d) : P.top + P.height / 2 - (_.top + _.height / 2),
            x = Math.abs(l / p),
            y = x < 1 / r ? "" : l < 0 ? "left" : "right",
            x < r && (y !== "" && (y += "-"),
            y += p < 0 ? "up" : "down"),
            y)
        }
        ,
        n.applyBounds = function(b, r) {
            var c, l, p, x, y, P;
            if (b && i.bounds !== b)
                return i.bounds = b,
                t.update(!0, r);
            if (Be(!0),
            Xt(),
            ne && !nt()) {
                if (c = t.x,
                l = t.y,
                c > F ? c = F : c < H && (c = H),
                l > $ ? l = $ : l < Q && (l = Q),
                (t.x !== c || t.y !== l) && (p = !0,
                t.x = t.endX = c,
                f ? t.endRotation = c : t.y = t.endY = l,
                j = !0,
                Se(!0),
                t.autoScroll && !t.isDragging))
                    for (Bt(o.parentNode),
                    x = o,
                    De.scrollTop = B.pageYOffset != null ? B.pageYOffset : R.documentElement.scrollTop != null ? R.documentElement.scrollTop : R.body.scrollTop,
                    De.scrollLeft = B.pageXOffset != null ? B.pageXOffset : R.documentElement.scrollLeft != null ? R.documentElement.scrollLeft : R.body.scrollLeft; x && !P; )
                        P = et(x.parentNode),
                        y = P ? De : x.parentNode,
                        m && y.scrollTop > y._gsMaxScrollY && (y.scrollTop = y._gsMaxScrollY),
                        w && y.scrollLeft > y._gsMaxScrollX && (y.scrollLeft = y._gsMaxScrollX),
                        x = y;
                t.isThrowing && (p || t.endX > F || t.endX < H || t.endY > $ || t.endY < Q) && Rt(i.inertia || i.throwProps, p)
            }
            return t
        }
        ,
        n.update = function(b, r, c) {
            if (r && t.isPressed) {
                var l = $e(o)
                  , p = ei.apply({
                    x: t.x - E,
                    y: t.y - k
                })
                  , x = $e(o.parentNode, !0);
                x.apply({
                    x: l.e - p.x,
                    y: l.f - p.y
                }, p),
                t.x -= p.x - x.e,
                t.y -= p.y - x.f,
                Se(!0),
                _t()
            }
            var y = t.x
              , P = t.y;
            return ii(!r),
            b ? t.applyBounds() : (j && c && Se(!0),
            Be(!0)),
            r && (lt(t.pointerX, t.pointerY),
            j && Se(!0)),
            t.isPressed && !r && (w && Math.abs(y - t.x) > .01 || m && Math.abs(P - t.y) > .01 && !f) && _t(),
            t.autoScroll && (Bt(o.parentNode, t.isDragging),
            O = t.isDragging,
            Se(!0),
            pi(o, bt),
            di(o, bt)),
            t
        }
        ,
        n.enable = function(b) {
            var r = {
                lazy: !0
            }, c, l, p;
            if (i.cursor !== !1 && (r.cursor = i.cursor || ut),
            D.utils.checkPrefix("touchCallout") && (r.touchCallout = "none"),
            b !== "soft") {
                for (ai(T, w === m ? "none" : i.allowNativeTouchScrolling && o.scrollHeight === o.clientHeight == (o.scrollWidth === o.clientHeight) || i.allowEventDefault ? "manipulation" : w ? "pan-y" : "pan-x"),
                l = T.length; --l > -1; )
                    p = T[l],
                    Et || Z(p, "mousedown", rt),
                    Z(p, "touchstart", rt),
                    Z(p, "click", oi, !0),
                    D.set(p, r),
                    p.getBBox && p.ownerSVGElement && w !== m && D.set(p.ownerSVGElement, {
                        touchAction: i.allowNativeTouchScrolling || i.allowEventDefault ? "manipulation" : w ? "pan-y" : "pan-x"
                    }),
                    i.allowContextMenu || Z(p, "contextmenu", ti);
                Tt(T, !1)
            }
            return di(o, bt),
            ae = !0,
            me && b !== "soft" && me.track(h || o, u ? "x,y" : f ? "rotation" : "top,left"),
            o._gsDragID = c = "d" + Hi++,
            Ze[c] = t,
            h && (h.enable(),
            h.element._gsDragID = c),
            (i.bounds || f) && _t(),
            i.bounds && t.applyBounds(),
            t
        }
        ,
        n.disable = function(b) {
            for (var r = t.isDragging, c = T.length, l; --c > -1; )
                Ft(T[c], "cursor", null);
            if (b !== "soft") {
                for (ai(T, null),
                c = T.length; --c > -1; )
                    l = T[c],
                    Ft(l, "touchCallout", null),
                    K(l, "mousedown", rt),
                    K(l, "touchstart", rt),
                    K(l, "click", oi, !0),
                    K(l, "contextmenu", ti);
                Tt(T, !0),
                J && (K(J, "touchcancel", ye),
                K(J, "touchend", ye),
                K(J, "touchmove", Fe)),
                K(R, "mouseup", ye),
                K(R, "mousemove", Fe)
            }
            return pi(o, bt),
            ae = !1,
            me && b !== "soft" && me.untrack(h || o, u ? "x,y" : f ? "rotation" : "top,left"),
            h && h.disable(),
            ci(Se),
            t.isDragging = t.isPressed = ot = !1,
            r && U(t, "dragend", "onDragEnd"),
            t
        }
        ,
        n.enabled = function(b, r) {
            return arguments.length ? b ? t.enable(r) : t.disable(r) : ae
        }
        ,
        n.kill = function() {
            return t.isThrowing = !1,
            t.tween && t.tween.kill(),
            t.disable(),
            D.set(T, {
                clearProps: "userSelect"
            }),
            delete Ze[o._gsDragID],
            t
        }
        ,
        n.revert = function() {
            this.kill(),
            this.styles && this.styles.revert()
        }
        ,
        ~s.indexOf("scroll") && (h = n.scrollProxy = new ji(o,Vi({
            onKill: function() {
                t.isPressed && ye(null)
            }
        }, i)),
        o.style.overflowY = m && !zt ? "auto" : "hidden",
        o.style.overflowX = w && !zt ? "auto" : "hidden",
        o = h.content),
        f ? N.rotation = 1 : (w && (N[g] = 1),
        m && (N[d] = 1)),
        C.force3D = "force3D"in i ? i.force3D : !0,
        vi(ri(n)),
        n.enable(),
        n
    }
    return e.register = function(i) {
        D = i,
        Ht()
    }
    ,
    e.create = function(i, n) {
        return Vt || Ht(!0),
        Ye(i).map(function(s) {
            return new e(s,n)
        })
    }
    ,
    e.get = function(i) {
        return Ze[(Ye(i)[0] || {})._gsDragID]
    }
    ,
    e.timeSinceDrag = function() {
        return (Oe() - si) / 1e3
    }
    ,
    e.hitTest = function(i, n, s) {
        if (i === n)
            return !1;
        var u = Ke(i), f = Ke(n), g = u.top, d = u.left, w = u.right, m = u.bottom, v = u.width, t = u.height, T = f.left > w || f.right < d || f.top > m || f.bottom < g, N, q, O;
        return T || !s ? !T : (O = (s + "").indexOf("%") !== -1,
        s = parseFloat(s) || 0,
        N = {
            left: Math.max(d, f.left),
            top: Math.max(g, f.top)
        },
        N.width = Math.min(w, f.right) - N.left,
        N.height = Math.min(m, f.bottom) - N.top,
        N.width < 0 || N.height < 0 ? !1 : O ? (s *= .01,
        q = N.width * N.height,
        q >= v * t * s || q >= f.width * f.height * s) : N.width > s && N.height > s)
    }
    ,
    e
}(Ji);
Gi(Ue.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: !1,
    isPressed: !1
});
Ue.zIndex = 1e3;
Ue.version = "3.11.5";
Si() && D.registerPlugin(Ue);
V.registerPlugin(gt, Ue, Ni);
const to = (a,e)=>{
    var R, ae;
    V.registerPlugin(InertiaPlugin),
    a = V.utils.toArray(a),
    e = e || {};
    const o = e.onChange;
    let i = 0;
    const n = V.timeline({
        repeat: e.repeat,
        onUpdate: ()=>{
            o && (()=>{
                const h = n.closestIndex();
                i !== h && (i = h,
                o(a[h], h))
            }
            )()
        }
        ,
        paused: e.paused,
        defaults: {
            ease: "none",
            duration: 2
        },
        onReverseComplete: ()=>{
            n.totalTime(n.rawTime() + n.duration() * 10)
        }
    })
      , s = a.length
      , u = a[0].offsetLeft
      , f = []
      , g = []
      , d = []
      , w = [];
    let m = 0;
    const v = e.center
      , t = (e.speed || 1) * 10
      , T = e.snap === !1 ? h=>h : V.utils.snap(e.snap || 1);
    let N = 0;
    const q = v === !0 ? a[0].parentNode : (typeof v == "string" || typeof v == "object") && V.utils.toArray(v)[0] || a[0].parentNode;
    let O;
    const Ee = ()=>a[s - 1].offsetLeft + w[s - 1] / 100 * g[s - 1] - u + d[0] + a[s - 1].offsetWidth * V.getProperty(a[s - 1], "scaleX") + (parseFloat(String(e.paddingRight)) || 0)
      , ve = ()=>{
        let h = q.getBoundingClientRect(), S;
        a.forEach((L,E)=>{
            g[E] = parseFloat(V.getProperty(L, "width", "px")),
            w[E] = T(parseFloat(V.getProperty(L, "x", "px")) / g[E] * 100 + (parseFloat(V.getProperty(L, "xPercent")) || 0)),
            S = L.getBoundingClientRect(),
            d[E] = S.left - (E ? h.right : h.left),
            h = S
        }
        ),
        V.set(a, {
            xPercent: L=>w[L]
        }),
        O = Ee()
    }
    ;
    let se;
    const X = ()=>{
        N = v ? n.duration() * (q.offsetWidth / 2) / O : 0,
        v && f.forEach((h,S)=>{
            f[S] = se(n.labels[`label${S}`] + n.duration() * g[S] / 2 / O - N)
        }
        )
    }
      , te = (h,S,L)=>{
        let E = h.length, k = 1e10, ne = 0, ge;
        for (; E--; )
            ge = Math.abs(h[E] - S),
            ge > L / 2 && (ge = L - ge),
            ge < k && (k = ge,
            ne = E);
        return ne
    }
      , W = ()=>{
        let h, S, L, E, k;
        for (n.clear(),
        h = 0; h < s; h++)
            S = a[h],
            L = w[h] / 100 * g[h],
            E = S.offsetLeft + L - u + d[0],
            k = E + g[h] * V.getProperty(S, "scaleX"),
            n.to(S, {
                xPercent: T((L - k) / g[h] * 100),
                duration: k / t
            }, 0).fromTo(S, {
                xPercent: T((L - k + O) / g[h] * 100)
            }, {
                xPercent: w[h],
                duration: (L - k + O - L) / t,
                immediateRender: !1
            }, k / t).add(`label${h}`, E / t),
            f[h] = E / t;
        se = V.utils.wrap(0, n.duration())
    }
      , C = h=>{
        const S = n.progress();
        n.progress(0, !0),
        ve(),
        h && W(),
        X(),
        h && n.draggable ? n.time(f[m], !0) : n.progress(S, !0)
    }
    ;
    let oe;
    V.set(a, {
        x: 0
    }),
    ve(),
    W(),
    X(),
    window.addEventListener("resize", ()=>C(!0));
    const Te = (h,S)=>{
        S = S || {},
        Math.abs(h - m) > s / 2 && (h += h > m ? -s : s);
        const L = V.utils.wrap(0, s, h);
        let E = f[L];
        return E > n.time() != h > m && (E += n.duration() * (h > m ? 1 : -1)),
        (E < 0 || E > n.duration()) && (S.modifiers = {
            time: se
        }),
        m = L,
        S.overwrite = !0,
        V.killTweensOf(oe),
        n.tweenTo(E, S)
    }
    ;
    if (n.next = h=>Te(m + 1, h),
    n.previous = h=>Te(m - 1, h),
    n.current = ()=>m,
    n.toIndex = (h,S)=>Te(h, S),
    n.closestIndex = h=>{
        const S = te(f, n.time(), n.duration());
        return h && (m = S),
        S
    }
    ,
    n.times = f,
    n.progress(1, !0).progress(0, !0),
    e.reversed && ((ae = (R = n.vars).onReverseComplete) == null || ae.call(R),
    n.reverse()),
    e.draggable && typeof Ue == "function") {
        oe = document.createElement("div");
        const h = V.utils.wrap(0, 1);
        let S, L, E = null;
        const k = ()=>n.progress(h(L + (E.startX - E.x) * S))
          , ne = ()=>n.closestIndex(!0);
        E = Ue.create(oe, {
            trigger: a[0].parentNode,
            type: "x",
            onPressInit: ()=>{
                V.killTweensOf(n),
                L = n.progress(),
                C(),
                S = 1 / O,
                V.set(oe, {
                    x: L / -S
                })
            }
            ,
            onDrag: ()=>{
                k()
            }
            ,
            onThrowUpdate: ()=>{
                k()
            }
            ,
            inertia: !0,
            snap: ge=>{
                const tt = -(ge * S) * n.duration()
                  , F = se(tt);
                let $ = f[te(f, F, n.duration())] - F;
                return Math.abs($) > n.duration() / 2 && ($ += $ < 0 ? n.duration() : -n.duration()),
                (tt + $) / n.duration() / -S
            }
            ,
            onRelease: ne,
            onThrowComplete: ne
        })[0],
        n.draggable = E
    }
    return n.closestIndex(!0),
    o && o(a[m], m),
    n
}
  , io = a=>{
    const e = {
        frame: 0
    }
      , o = V.utils.toArray(a.target)[0]
      , i = {
        trigger: o,
        containerAnimation: a.containerAnimation,
        pin: !1,
        start: a.containerAnimation ? "left 0%" : "top top",
        end: a.end,
        scrub: !0,
        ease: "none"
    }
      , n = V.context && V.context()
      , s = xi.loadAnimation({
        container: o,
        renderer: a.renderer || "svg",
        loop: !1,
        autoplay: !1,
        animationData: a.lottieFile,
        rendererSettings: a.rendererSettings || {
            preserveAspectRatio: "xMidYMid slice"
        }
    });
    for (const u in a)
        i[u] = a[u];
    return s.addEventListener("DOMLoaded", ()=>{
        const u = ()=>(s.goToAndStop(e.frame, !0),
        V.timeline({
            scrollTrigger: i
        }).to(e, {
            frame: s.totalFrames - 1,
            ease: "none",
            onUpdate: ()=>s.goToAndStop(e.frame, !0)
        }).to(o, {
            ...a.animation,
            ease: "none"
        }, "<"),
        ()=>s.destroy && s.destroy());
        n && n.add ? n.add(u) : u(),
        gt.sort(),
        gt.refresh()
    }
    ),
    s
}
  , oo = a=>{
    const e = document.querySelector(a.container)
      , o = xi.loadAnimation({
        container: e,
        renderer: "svg",
        loop: a.loop,
        autoplay: a.autoplay || !1,
        animationData: a.lottieFile
    });
    if (a.playInView) {
        const i = ()=>{
            const n = a.playInView
              , s = typeof n == "object" && n.triggerEl ? n.triggerEl : e
              , u = typeof n == "object" && n.triggerPosition ? n.triggerPosition : .1;
            gt.isInViewport(s, u) && o.play()
        }
        ;
        gt.create({
            onUpdate: i
        })
    }
    return o
}
;
export {io as a, oo as l, to as m};