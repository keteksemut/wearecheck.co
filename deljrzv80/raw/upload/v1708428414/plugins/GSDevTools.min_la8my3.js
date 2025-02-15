/*!
 * GSDevTools 3.10.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";
    function w(e, t) {
        if (e.parentNode && (g || T(e))) {
            var o = E(e)
              , n = o ? o.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml"
              , i = o ? t ? "rect" : "g" : "div"
              , r = 2 !== t ? 0 : 100
              , a = 3 === t ? 100 : 0
              , s = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;"
              , l = g.createElementNS ? g.createElementNS(n.replace(/^https/, "http"), i) : g.createElement(i);
            return t && (o ? (f = f || w(e),
            l.setAttribute("width", .01),
            l.setAttribute("height", .01),
            l.setAttribute("transform", "translate(" + r + "," + a + ")"),
            f.appendChild(l)) : (h || ((h = w(e)).style.cssText = s),
            l.style.cssText = s + "width:0.1px;height:0.1px;top:" + a + "px;left:" + r + "px",
            h.appendChild(l))),
            l
        }
        throw "Need document and parent."
    }
    function A(e, t, o, n, i, r, a) {
        return e.a = t,
        e.b = o,
        e.c = n,
        e.d = i,
        e.e = r,
        e.f = a,
        e
    }
    var g, u, i, r, h, f, m, v, x, t, y = "transform", b = y + "Origin", T = function _setDoc(e) {
        var t = e.ownerDocument || e;
        !(y in e.style) && "msTransform"in e.style && (b = (y = "msTransform") + "Origin");
        for (; t.parentNode && (t = t.parentNode); )
            ;
        if (u = window,
        m = new he,
        t) {
            i = (g = t).documentElement,
            r = t.body,
            (v = g.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none";
            var o = t.createElement("div")
              , n = t.createElement("div");
            r.appendChild(o),
            o.appendChild(n),
            o.style.position = "static",
            o.style[y] = "translate3d(0,0,1px)",
            x = n.offsetParent !== o,
            r.removeChild(o)
        }
        return t
    }, _ = function _forceNonZeroScale(e) {
        for (var t, o; e && e !== r; )
            (o = e._gsap) && o.uncache && o.get(e, "x"),
            o && !o.scaleX && !o.scaleY && o.renderTransform && (o.scaleX = o.scaleY = 1e-4,
            o.renderTransform(1, o),
            t ? t.push(o) : t = [o]),
            e = e.parentNode;
        return t
    }, M = [], k = [], D = function _getDocScrollTop() {
        return u.pageYOffset || g.scrollTop || i.scrollTop || r.scrollTop || 0
    }, S = function _getDocScrollLeft() {
        return u.pageXOffset || g.scrollLeft || i.scrollLeft || r.scrollLeft || 0
    }, E = function _svgOwner(e) {
        return e.ownerSVGElement || ("svg" === (e.tagName + "").toLowerCase() ? e : null)
    }, L = function _isFixed(e) {
        return "fixed" === u.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? _isFixed(e) : void 0)
    }, P = function _placeSiblings(e, t) {
        var o, n, i, r, a, s, l = E(e), c = e === l, d = l ? M : k, p = e.parentNode;
        if (e === u)
            return e;
        if (d.length || d.push(w(e, 1), w(e, 2), w(e, 3)),
        o = l ? f : h,
        l)
            c ? (r = -(i = function _getCTM(e) {
                var t, o = e.getCTM();
                return o || (t = e.style[y],
                e.style[y] = "none",
                e.appendChild(v),
                o = v.getCTM(),
                e.removeChild(v),
                t ? e.style[y] = t : e.style.removeProperty(y.replace(/([A-Z])/g, "-$1").toLowerCase())),
                o || m.clone()
            }(e)).e / i.a,
            a = -i.f / i.d,
            n = m) : e.getBBox ? (i = e.getBBox(),
            r = (n = (n = e.transform ? e.transform.baseVal : {}).numberOfItems ? 1 < n.numberOfItems ? function _consolidate(e) {
                for (var t = new he, o = 0; o < e.numberOfItems; o++)
                    t.multiply(e.getItem(o).matrix);
                return t
            }(n) : n.getItem(0).matrix : m).a * i.x + n.c * i.y,
            a = n.b * i.x + n.d * i.y) : (n = new he,
            r = a = 0),
            t && "g" === e.tagName.toLowerCase() && (r = a = 0),
            (c ? l : p).appendChild(o),
            o.setAttribute("transform", "matrix(" + n.a + "," + n.b + "," + n.c + "," + n.d + "," + (n.e + r) + "," + (n.f + a) + ")");
        else {
            if (r = a = 0,
            x)
                for (n = e.offsetParent,
                i = e; (i = i && i.parentNode) && i !== n && i.parentNode; )
                    4 < (u.getComputedStyle(i)[y] + "").length && (r = i.offsetLeft,
                    a = i.offsetTop,
                    i = 0);
            if ("absolute" !== (s = u.getComputedStyle(e)).position && "fixed" !== s.position)
                for (n = e.offsetParent; p && p !== n; )
                    r += p.scrollLeft || 0,
                    a += p.scrollTop || 0,
                    p = p.parentNode;
            (i = o.style).top = e.offsetTop - a + "px",
            i.left = e.offsetLeft - r + "px",
            i[y] = s[y],
            i[b] = s[b],
            i.position = "fixed" === s.position ? "fixed" : "absolute",
            e.parentNode.appendChild(o)
        }
        return o
    }, he = ((t = Matrix2D.prototype).inverse = function inverse() {
        var e = this.a
          , t = this.b
          , o = this.c
          , n = this.d
          , i = this.e
          , r = this.f
          , a = e * n - t * o || 1e-10;
        return A(this, n / a, -t / a, -o / a, e / a, (o * r - n * i) / a, -(e * r - t * i) / a)
    }
    ,
    t.multiply = function multiply(e) {
        var t = this.a
          , o = this.b
          , n = this.c
          , i = this.d
          , r = this.e
          , a = this.f
          , s = e.a
          , l = e.c
          , c = e.b
          , d = e.d
          , p = e.e
          , u = e.f;
        return A(this, s * t + c * n, s * o + c * i, l * t + d * n, l * o + d * i, r + p * t + u * n, a + p * o + u * i)
    }
    ,
    t.clone = function clone() {
        return new Matrix2D(this.a,this.b,this.c,this.d,this.e,this.f)
    }
    ,
    t.equals = function equals(e) {
        var t = this.a
          , o = this.b
          , n = this.c
          , i = this.d
          , r = this.e
          , a = this.f;
        return t === e.a && o === e.b && n === e.c && i === e.d && r === e.e && a === e.f
    }
    ,
    t.apply = function apply(e, t) {
        void 0 === t && (t = {});
        var o = e.x
          , n = e.y
          , i = this.a
          , r = this.b
          , a = this.c
          , s = this.d
          , l = this.e
          , c = this.f;
        return t.x = o * i + n * a + l || 0,
        t.y = o * r + n * s + c || 0,
        t
    }
    ,
    Matrix2D);
    function Matrix2D(e, t, o, n, i, r) {
        void 0 === e && (e = 1),
        void 0 === t && (t = 0),
        void 0 === o && (o = 0),
        void 0 === n && (n = 1),
        void 0 === i && (i = 0),
        void 0 === r && (r = 0),
        A(this, e, t, o, n, i, r)
    }
    function getGlobalMatrix(e, t, o, n) {
        if (!e || !e.parentNode || (g || T(e)).documentElement === e)
            return new he;
        var i = _(e)
          , r = E(e) ? M : k
          , a = P(e, o)
          , s = r[0].getBoundingClientRect()
          , l = r[1].getBoundingClientRect()
          , c = r[2].getBoundingClientRect()
          , d = a.parentNode
          , p = !n && L(e)
          , u = new he((l.left - s.left) / 100,(l.top - s.top) / 100,(c.left - s.left) / 100,(c.top - s.top) / 100,s.left + (p ? 0 : S()),s.top + (p ? 0 : D()));
        if (d.removeChild(a),
        i)
            for (s = i.length; s--; )
                (l = i[s]).scaleX = l.scaleY = 0,
                l.renderTransform(1, l);
        return t ? u.inverse() : u
    }
    function V() {
        return "undefined" != typeof window
    }
    function W() {
        return fe || V() && (fe = window.gsap) && fe.registerPlugin && fe
    }
    function X(e) {
        return "function" == typeof e
    }
    function Y(e) {
        return "object" == typeof e
    }
    function Z(e) {
        return void 0 === e
    }
    function $() {
        return !1
    }
    function ba(e) {
        return Math.round(1e4 * e) / 1e4
    }
    function da(e, t) {
        var o = ve.createElementNS ? ve.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : ve.createElement(e);
        return o.style ? o : ve.createElement(e)
    }
    function pa(e, t) {
        var o, n = {};
        for (o in e)
            n[o] = t ? e[o] * t : e[o];
        return n
    }
    function ra(e, t) {
        for (var o, n = e.length; n--; )
            t ? e[n].style.touchAction = t : e[n].style.removeProperty("touch-action"),
            (o = e[n].children) && o.length && ra(o, t)
    }
    function sa() {
        return ze.forEach(function(e) {
            return e()
        })
    }
    function ua() {
        return !ze.length && fe.ticker.remove(sa)
    }
    function va(e) {
        for (var t = ze.length; t--; )
            ze[t] === e && ze.splice(t, 1);
        fe.to(ua, {
            overwrite: !0,
            delay: 15,
            duration: 0,
            onComplete: ua,
            data: "_draggable"
        })
    }
    function xa(e, t, o, n) {
        if (e.addEventListener) {
            var i = _e[t];
            n = n || (d ? {
                passive: !1
            } : null),
            e.addEventListener(i || t, o, n),
            i && t !== i && e.addEventListener(t, o, n)
        }
    }
    function ya(e, t, o) {
        if (e.removeEventListener) {
            var n = _e[t];
            e.removeEventListener(n || t, o),
            n && t !== n && e.removeEventListener(t, o)
        }
    }
    function za(e) {
        e.preventDefault && e.preventDefault(),
        e.preventManipulation && e.preventManipulation()
    }
    function Ba(e) {
        ke = e.touches && Me < e.touches.length,
        ya(e.target, "touchend", Ba)
    }
    function Ca(e) {
        ke = e.touches && Me < e.touches.length,
        xa(e.target, "touchend", Ba)
    }
    function Da(e) {
        return me.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0
    }
    function Ea(e) {
        return me.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0
    }
    function Fa(e, t) {
        xa(e, "scroll", t),
        Ie(e.parentNode) || Fa(e.parentNode, t)
    }
    function Ga(e, t) {
        ya(e, "scroll", t),
        Ie(e.parentNode) || Ga(e.parentNode, t)
    }
    function Ia(e, t) {
        var o = "x" === t ? "Width" : "Height"
          , n = "scroll" + o
          , i = "client" + o;
        return Math.max(0, Ie(e) ? Math.max(xe[n], s[n]) - (me["inner" + o] || xe[i] || s[i]) : e[n] - e[i])
    }
    function Ja(e, t) {
        var o = Ia(e, "x")
          , n = Ia(e, "y");
        Ie(e) ? e = Ae : Ja(e.parentNode, t),
        e._gsMaxScrollX = o,
        e._gsMaxScrollY = n,
        t || (e._gsScrollX = e.scrollLeft || 0,
        e._gsScrollY = e.scrollTop || 0)
    }
    function Ka(e, t, o) {
        var n = e.style;
        n && (Z(n[t]) && (t = c(t, e) || t),
        null == o ? n.removeProperty && n.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : n[t] = o)
    }
    function La(e) {
        return me.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e)
    }
    function Na(e) {
        if (e === me)
            return p.left = p.top = 0,
            p.width = p.right = xe.clientWidth || e.innerWidth || s.clientWidth || 0,
            p.height = p.bottom = (e.innerHeight || 0) - 20 < xe.clientHeight ? xe.clientHeight : e.innerHeight || s.clientHeight || 0,
            p;
        var t = e.ownerDocument || ve
          , o = Z(e.pageX) ? e.nodeType || Z(e.left) || Z(e.top) ? we(e)[0].getBoundingClientRect() : e : {
            left: e.pageX - Ea(t),
            top: e.pageY - Da(t),
            right: e.pageX - Ea(t) + 1,
            bottom: e.pageY - Da(t) + 1
        };
        return Z(o.right) && !Z(o.width) ? (o.right = o.left + o.width,
        o.bottom = o.top + o.height) : Z(o.width) && (o = {
            width: o.right - o.left,
            height: o.bottom - o.top,
            right: o.right,
            left: o.left,
            bottom: o.bottom,
            top: o.top
        }),
        o
    }
    function Oa(e, t, o) {
        var n, i = e.vars, r = i[o], a = e._listeners[t];
        return X(r) && (n = r.apply(i.callbackScope || e, i[o + "Params"] || [e.pointerEvent])),
        a && !1 === e.dispatchEvent(t) && (n = !1),
        n
    }
    function Pa(e, t) {
        var o, n, i, r = we(e)[0];
        return r.nodeType || r === me ? z(r, t) : Z(e.left) ? {
            left: n = e.min || e.minX || e.minRotation || 0,
            top: o = e.min || e.minY || 0,
            width: (e.max || e.maxX || e.maxRotation || 0) - n,
            height: (e.max || e.maxY || 0) - o
        } : (i = {
            x: 0,
            y: 0
        },
        {
            left: e.left - i.x,
            top: e.top - i.y,
            width: e.width,
            height: e.height
        })
    }
    function Sa(i, r, e, t, a, o) {
        var n, s, l, c = {};
        if (r)
            if (1 !== a && r instanceof Array) {
                if (c.end = n = [],
                l = r.length,
                Y(r[0]))
                    for (s = 0; s < l; s++)
                        n[s] = pa(r[s], a);
                else
                    for (s = 0; s < l; s++)
                        n[s] = r[s] * a;
                e += 1.1,
                t -= 1.1
            } else
                X(r) ? c.end = function(e) {
                    var t, o, n = r.call(i, e);
                    if (1 !== a)
                        if (Y(n)) {
                            for (o in t = {},
                            n)
                                t[o] = n[o] * a;
                            n = t
                        } else
                            n *= a;
                    return n
                }
                : c.end = r;
        return !e && 0 !== e || (c.max = e),
        !t && 0 !== t || (c.min = t),
        o && (c.velocity = 0),
        c
    }
    function Ta(e) {
        var t;
        return !(!e || !e.getAttribute || e === s) && (!("true" !== (t = e.getAttribute("data-clickable")) && ("false" === t || !e.onclick && !n.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable"))) || Ta(e.parentNode))
    }
    function Ua(e, t) {
        for (var o, n = e.length; n--; )
            (o = e[n]).ondragstart = o.onselectstart = t ? null : $,
            fe.set(o, {
                lazy: !0,
                userSelect: t ? "text" : "none"
            })
    }
    function Ya(r, i) {
        r = fe.utils.toArray(r)[0],
        i = i || {};
        var a, s, l, e, c, d, p = document.createElement("div"), u = p.style, t = r.firstChild, g = 0, h = 0, f = r.scrollTop, m = r.scrollLeft, v = r.scrollWidth, x = r.scrollHeight, y = 0, b = 0, w = 0;
        C && !1 !== i.force3D ? (c = "translate3d(",
        d = "px,0px)") : N && (c = "translate(",
        d = "px)"),
        this.scrollTop = function(e, t) {
            if (!arguments.length)
                return -this.top();
            this.top(-e, t)
        }
        ,
        this.scrollLeft = function(e, t) {
            if (!arguments.length)
                return -this.left();
            this.left(-e, t)
        }
        ,
        this.left = function(e, t) {
            if (!arguments.length)
                return -(r.scrollLeft + h);
            var o = r.scrollLeft - m
              , n = h;
            if ((2 < o || o < -2) && !t)
                return m = r.scrollLeft,
                fe.killTweensOf(this, {
                    left: 1,
                    scrollLeft: 1
                }),
                this.left(-m),
                void (i.onKill && i.onKill());
            (e = -e) < 0 ? (h = e - .5 | 0,
            e = 0) : b < e ? (h = e - b | 0,
            e = b) : h = 0,
            (h || n) && (this._skip || (u[N] = c + -h + "px," + -g + d),
            0 <= h + y && (u.paddingRight = h + y + "px")),
            r.scrollLeft = 0 | e,
            m = r.scrollLeft
        }
        ,
        this.top = function(e, t) {
            if (!arguments.length)
                return -(r.scrollTop + g);
            var o = r.scrollTop - f
              , n = g;
            if ((2 < o || o < -2) && !t)
                return f = r.scrollTop,
                fe.killTweensOf(this, {
                    top: 1,
                    scrollTop: 1
                }),
                this.top(-f),
                void (i.onKill && i.onKill());
            (e = -e) < 0 ? (g = e - .5 | 0,
            e = 0) : w < e ? (g = e - w | 0,
            e = w) : g = 0,
            (g || n) && (this._skip || (u[N] = c + -h + "px," + -g + d)),
            r.scrollTop = 0 | e,
            f = r.scrollTop
        }
        ,
        this.maxScrollTop = function() {
            return w
        }
        ,
        this.maxScrollLeft = function() {
            return b
        }
        ,
        this.disable = function() {
            for (t = p.firstChild; t; )
                e = t.nextSibling,
                r.appendChild(t),
                t = e;
            r === p.parentNode && r.removeChild(p)
        }
        ,
        this.enable = function() {
            if ((t = r.firstChild) !== p) {
                for (; t; )
                    e = t.nextSibling,
                    p.appendChild(t),
                    t = e;
                r.appendChild(p),
                this.calibrate()
            }
        }
        ,
        this.calibrate = function(e) {
            var t, o, n, i = r.clientWidth === a;
            f = r.scrollTop,
            m = r.scrollLeft,
            i && r.clientHeight === s && p.offsetHeight === l && v === r.scrollWidth && x === r.scrollHeight && !e || ((g || h) && (o = this.left(),
            n = this.top(),
            this.left(-r.scrollLeft),
            this.top(-r.scrollTop)),
            t = La(r),
            i && !e || (u.display = "block",
            u.width = "auto",
            u.paddingRight = "0px",
            (y = Math.max(0, r.scrollWidth - r.clientWidth)) && (y += parseFloat(t.paddingLeft) + (O ? parseFloat(t.paddingRight) : 0))),
            u.display = "inline-block",
            u.position = "relative",
            u.overflow = "visible",
            u.verticalAlign = "top",
            u.boxSizing = "content-box",
            u.width = "100%",
            u.paddingRight = y + "px",
            O && (u.paddingBottom = t.paddingBottom),
            a = r.clientWidth,
            s = r.clientHeight,
            v = r.scrollWidth,
            x = r.scrollHeight,
            b = r.scrollWidth - a,
            w = r.scrollHeight - s,
            l = p.offsetHeight,
            u.display = "block",
            (o || n) && (this.left(o),
            this.top(n)))
        }
        ,
        this.content = p,
        this.element = r,
        this._skip = !1,
        this.enable()
    }
    function Za(e) {
        if (V() && document.body) {
            var t = window && window.navigator;
            me = window,
            ve = document,
            xe = ve.documentElement,
            s = ve.body,
            l = da("div"),
            Le = !!window.PointerEvent,
            (ye = da("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",
            Ee = "grab" === ye.style.cursor ? "grab" : "move",
            De = t && -1 !== t.userAgent.toLowerCase().indexOf("android"),
            Te = "ontouchstart"in xe && "orientation"in me || t && (0 < t.MaxTouchPoints || 0 < t.msMaxTouchPoints),
            n = da("div"),
            i = da("div"),
            r = i.style,
            a = s,
            r.display = "inline-block",
            r.position = "relative",
            n.style.cssText = i.innerHTML = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",
            n.appendChild(i),
            a.appendChild(n),
            o = i.offsetHeight + 18 > n.scrollHeight,
            a.removeChild(n),
            O = o,
            _e = function(e) {
                for (var t = e.split(","), o = (("onpointerdown"in l ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown"in l ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : e).split(",")), n = {}, i = 4; -1 < --i; )
                    n[t[i]] = o[i],
                    n[o[i]] = t[i];
                try {
                    xe.addEventListener("test", null, Object.defineProperty({}, "passive", {
                        get: function get() {
                            d = 1
                        }
                    }))
                } catch (e) {}
                return n
            }("touchstart,touchmove,touchend,touchcancel"),
            xa(ve, "touchcancel", $),
            xa(me, "touchmove", $),
            s && s.addEventListener("touchstart", $),
            xa(ve, "contextmenu", function() {
                for (var e in Re)
                    Re[e].isPressed && Re[e].endDrag()
            }),
            fe = be = W()
        }
        var o, n, i, r, a;
        fe ? (Se = fe.plugins.inertia,
        c = fe.utils.checkPrefix,
        N = c(N),
        Pe = c(Pe),
        we = fe.utils.toArray,
        C = !!c("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)")
    }
    var fe, me, ve, xe, s, l, ye, be, c, we, d, Te, _e, Me, ke, De, Se, Ee, Le, C, O, o, N = "transform", Pe = "transformOrigin", Ce = Array.isArray, Oe = 180 / Math.PI, Xe = 1e20, a = new he, Ne = Date.now || function() {
        return (new Date).getTime()
    }
    , ze = [], Re = {}, Ye = 0, n = /^(?:a|input|textarea|button|select)$/i, He = 0, Be = {}, Ae = {}, Ie = function _isRoot(e) {
        return !(e && e !== xe && 9 !== e.nodeType && e !== ve.body && e !== me && e.nodeType && e.parentNode)
    }, p = {}, Fe = {}, z = function _getElementBounds(e, t) {
        t = we(t)[0];
        var o, n, i, r, a, s, l, c, d, p, u, g, h, f, m = e.getBBox && e.ownerSVGElement, v = e.ownerDocument || ve;
        if (e === me)
            i = Da(v),
            n = (o = Ea(v)) + (v.documentElement.clientWidth || e.innerWidth || v.body.clientWidth || 0),
            r = i + ((e.innerHeight || 0) - 20 < v.documentElement.clientHeight ? v.documentElement.clientHeight : e.innerHeight || v.body.clientHeight || 0);
        else {
            if (t === me || Z(t))
                return e.getBoundingClientRect();
            o = i = 0,
            m ? (u = (p = e.getBBox()).width,
            g = p.height) : (e.viewBox && (p = e.viewBox.baseVal) && (o = p.x || 0,
            i = p.y || 0,
            u = p.width,
            g = p.height),
            u || (p = "border-box" === (h = La(e)).boxSizing,
            u = (parseFloat(h.width) || e.clientWidth || 0) + (p ? 0 : parseFloat(h.borderLeftWidth) + parseFloat(h.borderRightWidth)),
            g = (parseFloat(h.height) || e.clientHeight || 0) + (p ? 0 : parseFloat(h.borderTopWidth) + parseFloat(h.borderBottomWidth)))),
            n = u,
            r = g
        }
        return e === t ? {
            left: o,
            top: i,
            width: n - o,
            height: r - i
        } : (s = (a = getGlobalMatrix(t, !0).multiply(getGlobalMatrix(e))).apply({
            x: o,
            y: i
        }),
        l = a.apply({
            x: n,
            y: i
        }),
        c = a.apply({
            x: n,
            y: r
        }),
        d = a.apply({
            x: o,
            y: r
        }),
        o = Math.min(s.x, l.x, c.x, d.x),
        i = Math.min(s.y, l.y, c.y, d.y),
        {
            left: o + ((f = t.parentNode || {}).scrollLeft || 0),
            top: i + (f.scrollTop || 0),
            width: Math.max(s.x, l.x, c.x, d.x) - o,
            height: Math.max(s.y, l.y, c.y, d.y) - i
        })
    }, R = ((o = EventDispatcher.prototype).addEventListener = function addEventListener(e, t) {
        var o = this._listeners[e] || (this._listeners[e] = []);
        ~o.indexOf(t) || o.push(t)
    }
    ,
    o.removeEventListener = function removeEventListener(e, t) {
        var o = this._listeners[e]
          , n = o && o.indexOf(t) || -1;
        -1 < n && o.splice(n, 1)
    }
    ,
    o.dispatchEvent = function dispatchEvent(t) {
        var o, n = this;
        return (this._listeners[t] || []).forEach(function(e) {
            return !1 === e.call(n, {
                type: t,
                target: n.target
            }) && (o = !1)
        }),
        o
    }
    ,
    EventDispatcher);
    function EventDispatcher(e) {
        this._listeners = {},
        this.target = e || this
    }
    var Ge, U = (function _inheritsLoose(e, t) {
        e.prototype = Object.create(t.prototype),
        (e.prototype.constructor = e).__proto__ = t
    }(Draggable, Ge = R),
    Draggable.register = function register(e) {
        fe = e,
        Za()
    }
    ,
    Draggable.create = function create(e, t) {
        return be || Za(!0),
        we(e).map(function(e) {
            return new Draggable(e,t)
        })
    }
    ,
    Draggable.get = function get(e) {
        return Re[(we(e)[0] || {})._gsDragID]
    }
    ,
    Draggable.timeSinceDrag = function timeSinceDrag() {
        return (Ne() - He) / 1e3
    }
    ,
    Draggable.hitTest = function hitTest(e, t, o) {
        if (e === t)
            return !1;
        var n, i, r, a = Na(e), s = Na(t), l = a.top, c = a.left, d = a.right, p = a.bottom, u = a.width, g = a.height, h = s.left > d || s.right < c || s.top > p || s.bottom < l;
        return h || !o ? !h : (r = -1 !== (o + "").indexOf("%"),
        o = parseFloat(o) || 0,
        (n = {
            left: Math.max(c, s.left),
            top: Math.max(l, s.top)
        }).width = Math.min(d, s.right) - n.left,
        n.height = Math.min(p, s.bottom) - n.top,
        !(n.width < 0 || n.height < 0) && (r ? u * g * (o *= .01) <= (i = n.width * n.height) || i >= s.width * s.height * o : n.width > o && n.height > o))
    }
    ,
    Draggable);
    function Draggable(g, p) {
        var e;
        e = Ge.call(this) || this,
        be || Za(1),
        g = we(g)[0],
        Se = Se || fe.plugins.inertia,
        e.vars = p = pa(p || {}),
        e.target = g,
        e.x = e.y = e.rotation = 0,
        e.dragResistance = parseFloat(p.dragResistance) || 0,
        e.edgeResistance = isNaN(p.edgeResistance) ? 1 : parseFloat(p.edgeResistance) || 0,
        e.lockAxis = p.lockAxis,
        e.autoScroll = p.autoScroll || 0,
        e.lockedAxis = null,
        e.allowEventDefault = !!p.allowEventDefault,
        fe.getProperty(g, "x");
        function Hh(e, t) {
            return parseFloat(se.get(g, e, t))
        }
        function ni(e) {
            return za(e),
            e.stopImmediatePropagation && e.stopImmediatePropagation(),
            !1
        }
        function oi(e) {
            if (j.autoScroll && j.isDragging && (ee || P)) {
                var t, o, n, i, r, a, s, l, c = g, d = 15 * j.autoScroll;
                for (ee = !1,
                Ae.scrollTop = null != me.pageYOffset ? me.pageYOffset : null != ce.documentElement.scrollTop ? ce.documentElement.scrollTop : ce.body.scrollTop,
                Ae.scrollLeft = null != me.pageXOffset ? me.pageXOffset : null != ce.documentElement.scrollLeft ? ce.documentElement.scrollLeft : ce.body.scrollLeft,
                i = j.pointerX - Ae.scrollLeft,
                r = j.pointerY - Ae.scrollTop; c && !o; )
                    t = (o = Ie(c.parentNode)) ? Ae : c.parentNode,
                    n = o ? {
                        bottom: Math.max(xe.clientHeight, me.innerHeight || 0),
                        right: Math.max(xe.clientWidth, me.innerWidth || 0),
                        left: 0,
                        top: 0
                    } : t.getBoundingClientRect(),
                    a = s = 0,
                    q && ((l = t._gsMaxScrollY - t.scrollTop) < 0 ? s = l : r > n.bottom - ne && l ? (ee = !0,
                    s = Math.min(l, d * (1 - Math.max(0, n.bottom - r) / ne) | 0)) : r < n.top + te && t.scrollTop && (ee = !0,
                    s = -Math.min(t.scrollTop, d * (1 - Math.max(0, r - n.top) / te) | 0)),
                    s && (t.scrollTop += s)),
                    K && ((l = t._gsMaxScrollX - t.scrollLeft) < 0 ? a = l : i > n.right - oe && l ? (ee = !0,
                    a = Math.min(l, d * (1 - Math.max(0, n.right - i) / oe) | 0)) : i < n.left + ie && t.scrollLeft && (ee = !0,
                    a = -Math.min(t.scrollLeft, d * (1 - Math.max(0, i - n.left) / ie) | 0)),
                    a && (t.scrollLeft += a)),
                    o && (a || s) && (me.scrollTo(t.scrollLeft, t.scrollTop),
                    ue(j.pointerX + a, j.pointerY + s)),
                    c = t
            }
            if (P) {
                var p = j.x
                  , u = j.y;
                V ? (j.deltaX = p - parseFloat(se.rotation),
                j.rotation = p,
                se.rotation = p + "deg",
                se.renderTransform(1, se)) : h ? (q && (j.deltaY = u - h.top(),
                h.top(u)),
                K && (j.deltaX = p - h.left(),
                h.left(p))) : G ? (q && (j.deltaY = u - parseFloat(se.y),
                se.y = u + "px"),
                K && (j.deltaX = p - parseFloat(se.x),
                se.x = p + "px"),
                se.renderTransform(1, se)) : (q && (j.deltaY = u - parseFloat(g.style.top || 0),
                g.style.top = u + "px"),
                K && (j.deltaX = p - parseFloat(g.style.left || 0),
                g.style.left = p + "px")),
                !f || e || A || (!(A = !0) === Oa(j, "drag", "onDrag") && (K && (j.x -= j.deltaX),
                q && (j.y -= j.deltaY),
                oi(!0)),
                A = !1)
            }
            P = !1
        }
        function pi(e, t) {
            var o, n, i = j.x, r = j.y;
            g._gsap || (se = fe.core.getCache(g)),
            se.uncache && fe.getProperty(g, "x"),
            G ? (j.x = parseFloat(se.x),
            j.y = parseFloat(se.y)) : V ? j.x = j.rotation = parseFloat(se.rotation) : h ? (j.y = h.top(),
            j.x = h.left()) : (j.y = parseFloat(g.style.top || (n = La(g)) && n.top) || 0,
            j.x = parseFloat(g.style.left || (n || {}).left) || 0),
            (C || O || N) && !t && (j.isDragging || j.isThrowing) && (N && (Be.x = j.x,
            Be.y = j.y,
            (o = N(Be)).x !== j.x && (j.x = o.x,
            P = !0),
            o.y !== j.y && (j.y = o.y,
            P = !0)),
            C && (o = C(j.x)) !== j.x && (j.x = o,
            V && (j.rotation = o),
            P = !0),
            O && ((o = O(j.y)) !== j.y && (j.y = o),
            P = !0)),
            P && oi(!0),
            e || (j.deltaX = j.x - i,
            j.deltaY = j.y - r,
            Oa(j, "throwupdate", "onThrowUpdate"))
        }
        function qi(a, s, l, o) {
            return null == s && (s = -Xe),
            null == l && (l = Xe),
            X(a) ? function(e) {
                var t = j.isPressed ? 1 - j.edgeResistance : 1;
                return a.call(j, l < e ? l + (e - l) * t : e < s ? s + (e - s) * t : e) * o
            }
            : Ce(a) ? function(e) {
                for (var t, o, n = a.length, i = 0, r = Xe; -1 < --n; )
                    (o = (t = a[n]) - e) < 0 && (o = -o),
                    o < r && s <= t && t <= l && (i = n,
                    r = o);
                return a[i]
            }
            : isNaN(a) ? function(e) {
                return e
            }
            : function() {
                return a * o
            }
        }
        function si() {
            var e, t, o, n;
            M = !1,
            h ? (h.calibrate(),
            j.minX = D = -h.maxScrollLeft(),
            j.minY = E = -h.maxScrollTop(),
            j.maxX = k = j.maxY = S = 0,
            M = !0) : p.bounds && (e = Pa(p.bounds, g.parentNode),
            V ? (j.minX = D = e.left,
            j.maxX = k = e.left + e.width,
            j.minY = E = j.maxY = S = 0) : Z(p.bounds.maxX) && Z(p.bounds.maxY) ? (t = Pa(g, g.parentNode),
            j.minX = D = Math.round(Hh(W, "px") + e.left - t.left),
            j.minY = E = Math.round(Hh(U, "px") + e.top - t.top),
            j.maxX = k = Math.round(D + (e.width - t.width)),
            j.maxY = S = Math.round(E + (e.height - t.height))) : (e = p.bounds,
            j.minX = D = e.minX,
            j.minY = E = e.minY,
            j.maxX = k = e.maxX,
            j.maxY = S = e.maxY),
            k < D && (j.minX = k,
            j.maxX = k = D,
            D = j.minX),
            S < E && (j.minY = S,
            j.maxY = S = E,
            E = j.minY),
            V && (j.minRotation = D,
            j.maxRotation = k),
            M = !0),
            p.liveSnap && (o = !0 === p.liveSnap ? p.snap || {} : p.liveSnap,
            n = Ce(o) || X(o),
            V ? (C = qi(n ? o : o.rotation, D, k, 1),
            O = null) : o.points ? N = function buildPointSnapFunc(l, s, c, d, p, u, g) {
                return u = u && u < Xe ? u * u : Xe,
                X(l) ? function(e) {
                    var t, o, n, i = j.isPressed ? 1 - j.edgeResistance : 1, r = e.x, a = e.y;
                    return e.x = r = c < r ? c + (r - c) * i : r < s ? s + (r - s) * i : r,
                    e.y = a = p < a ? p + (a - p) * i : a < d ? d + (a - d) * i : a,
                    (t = l.call(j, e)) !== e && (e.x = t.x,
                    e.y = t.y),
                    1 !== g && (e.x *= g,
                    e.y *= g),
                    u < Xe && (o = e.x - r,
                    n = e.y - a,
                    u < o * o + n * n && (e.x = r,
                    e.y = a)),
                    e
                }
                : Ce(l) ? function(e) {
                    for (var t, o, n, i, r = l.length, a = 0, s = Xe; -1 < --r; )
                        (i = (t = (n = l[r]).x - e.x) * t + (o = n.y - e.y) * o) < s && (a = r,
                        s = i);
                    return s <= u ? l[a] : e
                }
                : function(e) {
                    return e
                }
            }(n ? o : o.points, D, k, E, S, o.radius, h ? -1 : 1) : (K && (C = qi(n ? o : o.x || o.left || o.scrollLeft, D, k, h ? -1 : 1)),
            q && (O = qi(n ? o : o.y || o.top || o.scrollTop, E, S, h ? -1 : 1))))
        }
        function ti() {
            j.isThrowing = !1,
            Oa(j, "throwcomplete", "onThrowComplete")
        }
        function ui() {
            j.isThrowing = !1
        }
        function vi(e, t) {
            var o, n, i, r;
            e && Se ? (!0 === e && (o = p.snap || p.liveSnap || {},
            n = Ce(o) || X(o),
            e = {
                resistance: (p.throwResistance || p.resistance || 1e3) / (V ? 10 : 1)
            },
            V ? e.rotation = Sa(j, n ? o : o.rotation, k, D, 1, t) : (K && (e[W] = Sa(j, n ? o : o.points || o.x || o.left, k, D, h ? -1 : 1, t || "x" === j.lockedAxis)),
            q && (e[U] = Sa(j, n ? o : o.points || o.y || o.top, S, E, h ? -1 : 1, t || "y" === j.lockedAxis)),
            (o.points || Ce(o) && Y(o[0])) && (e.linkedProps = W + "," + U,
            e.radius = o.radius))),
            j.isThrowing = !0,
            r = isNaN(p.overshootTolerance) ? 1 === p.edgeResistance ? 0 : 1 - j.edgeResistance + .2 : p.overshootTolerance,
            e.duration || (e.duration = {
                max: Math.max(p.minDuration || 0, "maxDuration"in p ? p.maxDuration : 2),
                min: isNaN(p.minDuration) ? 0 === r || Y(e) && 1e3 < e.resistance ? 0 : .5 : p.minDuration,
                overshoot: r
            }),
            j.tween = i = fe.to(h || g, {
                inertia: e,
                data: "_draggable",
                onComplete: ti,
                onInterrupt: ui,
                onUpdate: p.fastMode ? Oa : pi,
                onUpdateParams: p.fastMode ? [j, "onthrowupdate", "onThrowUpdate"] : o && o.radius ? [!1, !0] : []
            }),
            p.fastMode || (h && (h._skip = !0),
            i.render(1e9, !0, !0),
            pi(!0, !0),
            j.endX = j.x,
            j.endY = j.y,
            V && (j.endRotation = j.x),
            i.play(0),
            pi(!0, !0),
            h && (h._skip = !1))) : M && j.applyBounds()
        }
        function wi(e) {
            var t, o = z;
            z = getGlobalMatrix(g.parentNode, !0),
            e && j.isPressed && !z.equals(o || new he) && (t = o.inverse().apply({
                x: b,
                y: w
            }),
            z.apply(t, t),
            b = t.x,
            w = t.y),
            z.equals(a) && (z = null)
        }
        function xi() {
            var e, t, o, n = 1 - j.edgeResistance, i = le ? Ea(ce) : 0, r = le ? Da(ce) : 0;
            wi(!1),
            Fe.x = j.pointerX - i,
            Fe.y = j.pointerY - r,
            z && z.apply(Fe, Fe),
            b = Fe.x,
            w = Fe.y,
            P && (ue(j.pointerX, j.pointerY),
            oi(!0)),
            d = getGlobalMatrix(g),
            h ? (si(),
            _ = h.top(),
            T = h.left()) : (de() ? (pi(!0, !0),
            si()) : j.applyBounds(),
            V ? (e = g.ownerSVGElement ? [se.xOrigin - g.getBBox().x, se.yOrigin - g.getBBox().y] : (La(g)[Pe] || "0 0").split(" "),
            L = j.rotationOrigin = getGlobalMatrix(g).apply({
                x: parseFloat(e[0]) || 0,
                y: parseFloat(e[1]) || 0
            }),
            pi(!0, !0),
            t = j.pointerX - L.x - i,
            o = L.y - j.pointerY + r,
            T = j.x,
            _ = j.y = Math.atan2(o, t) * Oe) : (_ = Hh(U, "px"),
            T = Hh(W, "px"))),
            M && n && (k < T ? T = k + (T - k) / n : T < D && (T = D - (D - T) / n),
            V || (S < _ ? _ = S + (_ - S) / n : _ < E && (_ = E - (E - _) / n))),
            j.startX = T = ba(T),
            j.startY = _ = ba(_)
        }
        function zi() {
            !ye.parentNode || de() || j.isDragging || ye.parentNode.removeChild(ye)
        }
        function Ai(e, t) {
            var o;
            if (!u || j.isPressed || !e || !("mousedown" !== e.type && "pointerdown" !== e.type || t) && Ne() - ae < 30 && _e[j.pointerEvent.type])
                F && e && u && za(e);
            else {
                if (R = de(),
                j.pointerEvent = e,
                _e[e.type] ? (y = ~e.type.indexOf("touch") ? e.currentTarget || e.target : ce,
                xa(y, "touchend", ge),
                xa(y, "touchmove", pe),
                xa(y, "touchcancel", ge),
                xa(ce, "touchstart", Ca)) : (y = null,
                xa(ce, "mousemove", pe)),
                B = null,
                Le && y || (xa(ce, "mouseup", ge),
                e && e.target && xa(e.target, "mouseup", ge)),
                x = re.call(j, e.target) && !1 === p.dragClickables && !t)
                    return xa(e.target, "change", ge),
                    Oa(j, "pressInit", "onPressInit"),
                    Oa(j, "press", "onPress"),
                    Ua(J, !0),
                    void (F = !1);
                if (H = !(!y || K == q || !1 === j.vars.allowNativeTouchScrolling || j.vars.allowContextMenu && e && (e.ctrlKey || 2 < e.which)) && (K ? "y" : "x"),
                (F = !H && !j.allowEventDefault) && (za(e),
                xa(me, "touchforcechange", za)),
                e.changedTouches ? (e = m = e.changedTouches[0],
                v = e.identifier) : e.pointerId ? v = e.pointerId : m = v = null,
                Me++,
                function _addToRenderQueue(e) {
                    ze.push(e),
                    1 === ze.length && fe.ticker.add(sa)
                }(oi),
                w = j.pointerY = e.pageY,
                b = j.pointerX = e.pageX,
                Oa(j, "pressInit", "onPressInit"),
                (H || j.autoScroll) && Ja(g.parentNode),
                !g.parentNode || !j.autoScroll || h || V || !g.parentNode._gsMaxScrollX || ye.parentNode || g.getBBox || (ye.style.width = g.parentNode.scrollWidth + "px",
                g.parentNode.appendChild(ye)),
                xi(),
                j.tween && j.tween.kill(),
                j.isThrowing = !1,
                fe.killTweensOf(h || g, n, !0),
                h && fe.killTweensOf(g, {
                    scrollTo: 1
                }, !0),
                j.tween = j.lockedAxis = null,
                !p.zIndexBoost && (V || h || !1 === p.zIndexBoost) || (g.style.zIndex = Draggable.zIndex++),
                j.isPressed = !0,
                f = !(!p.onDrag && !j._listeners.drag),
                l = !(!p.onMove && !j._listeners.move),
                !1 !== p.cursor || p.activeCursor)
                    for (o = J.length; -1 < --o; )
                        fe.set(J[o], {
                            cursor: p.activeCursor || p.cursor || ("grab" === Ee ? "grabbing" : Ee)
                        });
                Oa(j, "press", "onPress")
            }
        }
        function Ei(e) {
            if (e && j.isDragging && !h) {
                var t = e.target || g.parentNode
                  , o = t.scrollLeft - t._gsScrollX
                  , n = t.scrollTop - t._gsScrollY;
                (o || n) && (z ? (b -= o * z.a + n * z.c,
                w -= n * z.d + o * z.b) : (b -= o,
                w -= n),
                t._gsScrollX += o,
                t._gsScrollY += n,
                ue(j.pointerX, j.pointerY))
            }
        }
        function Fi(e) {
            var t = Ne()
              , o = t - ae < 100
              , n = t - Q < 50
              , i = o && I === ae
              , r = j.pointerEvent && j.pointerEvent.defaultPrevented
              , a = o && c === ae
              , s = e.isTrusted || null == e.isTrusted && o && i;
            if ((i || n && !1 !== j.vars.suppressClickOnDrag) && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            o && (!j.pointerEvent || !j.pointerEvent.defaultPrevented) && (!i || s && !a))
                return s && i && (c = ae),
                void (I = ae);
            (j.isPressed || n || o) && (s && e.detail && o && !r || za(e)),
            o || n || (e && e.target && (j.pointerEvent = e),
            Oa(j, "click", "onClick"))
        }
        function Gi(e) {
            return z ? {
                x: e.x * z.a + e.y * z.c + z.e,
                y: e.x * z.b + e.y * z.d + z.f
            } : {
                x: e.x,
                y: e.y
            }
        }
        var u, h, b, w, T, _, M, f, l, k, D, S, E, m, v, L, P, t, C, O, N, x, y, z, R, H, B, A, I, c, F, d, o = (p.type || "x,y").toLowerCase(), G = ~o.indexOf("x") || ~o.indexOf("y"), V = -1 !== o.indexOf("rotation"), W = V ? "rotation" : G ? "x" : "left", U = G ? "y" : "top", K = !(!~o.indexOf("x") && !~o.indexOf("left") && "scroll" !== o), q = !(!~o.indexOf("y") && !~o.indexOf("top") && "scroll" !== o), $ = p.minimumMovement || 2, j = function _assertThisInitialized(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e), J = we(p.trigger || p.handle || g), n = {}, Q = 0, ee = !1, te = p.autoScrollMarginTop || 40, oe = p.autoScrollMarginRight || 40, ne = p.autoScrollMarginBottom || 40, ie = p.autoScrollMarginLeft || 40, re = p.clickableTest || Ta, ae = 0, se = g._gsap || fe.core.getCache(g), le = function _isFixed(e) {
            return "fixed" === La(e).position || ((e = e.parentNode) && 1 === e.nodeType ? _isFixed(e) : void 0)
        }(g), ce = g.ownerDocument || ve, de = function isTweening() {
            return j.tween && j.tween.isActive()
        }, pe = function onMove(e) {
            var t, o, n, i, r, a, s = e;
            if (u && !ke && j.isPressed && e) {
                if (t = (j.pointerEvent = e).changedTouches) {
                    if ((e = t[0]) !== m && e.identifier !== v) {
                        for (i = t.length; -1 < --i && (e = t[i]).identifier !== v && e.target !== g; )
                            ;
                        if (i < 0)
                            return
                    }
                } else if (e.pointerId && v && e.pointerId !== v)
                    return;
                y && H && !B && (Fe.x = e.pageX - (le ? Ea(ce) : 0),
                Fe.y = e.pageY - (le ? Da(ce) : 0),
                z && z.apply(Fe, Fe),
                o = Fe.x,
                n = Fe.y,
                ((r = Math.abs(o - b)) !== (a = Math.abs(n - w)) && ($ < r || $ < a) || De && H === B) && (B = a < r && K ? "x" : "y",
                H && B !== H && xa(me, "touchforcechange", za),
                !1 !== j.vars.lockAxisOnTouchScroll && K && q && (j.lockedAxis = "x" === B ? "y" : "x",
                X(j.vars.onLockAxis) && j.vars.onLockAxis.call(j, s)),
                De && H === B)) ? ge(s) : (F = j.allowEventDefault || H && (!B || H === B) || !1 === s.cancelable ? F && !1 : (za(s),
                !0),
                j.autoScroll && (ee = !0),
                ue(e.pageX, e.pageY, l))
            } else
                F && e && u && za(e)
        }, ue = function setPointerPosition(e, t, o) {
            var n, i, r, a, s, l, c = 1 - j.dragResistance, d = 1 - j.edgeResistance, p = j.pointerX, u = j.pointerY, g = _, h = j.x, f = j.y, m = j.endX, v = j.endY, x = j.endRotation, y = P;
            j.pointerX = e,
            j.pointerY = t,
            le && (e -= Ea(ce),
            t -= Da(ce)),
            V ? (a = Math.atan2(L.y - t, e - L.x) * Oe,
            180 < (s = j.y - a) ? (_ -= 360,
            j.y = a) : s < -180 && (_ += 360,
            j.y = a),
            r = j.x !== T || Math.abs(_ - a) > $ ? (j.y = a,
            T + (_ - a) * c) : T) : (z && (l = e * z.a + t * z.c + z.e,
            t = e * z.b + t * z.d + z.f,
            e = l),
            (i = t - w) < $ && -$ < i && (i = 0),
            (n = e - b) < $ && -$ < n && (n = 0),
            (j.lockAxis || j.lockedAxis) && (n || i) && ((l = j.lockedAxis) || (j.lockedAxis = l = K && Math.abs(n) > Math.abs(i) ? "y" : q ? "x" : null,
            l && X(j.vars.onLockAxis) && j.vars.onLockAxis.call(j, j.pointerEvent)),
            "y" === l ? i = 0 : "x" === l && (n = 0)),
            r = ba(T + n * c),
            a = ba(_ + i * c)),
            (C || O || N) && (j.x !== r || j.y !== a && !V) && (N && (Be.x = r,
            Be.y = a,
            l = N(Be),
            r = ba(l.x),
            a = ba(l.y)),
            C && (r = ba(C(r))),
            O && (a = ba(O(a)))),
            M && (k < r ? r = k + Math.round((r - k) * d) : r < D && (r = D + Math.round((r - D) * d)),
            V || (S < a ? a = Math.round(S + (a - S) * d) : a < E && (a = Math.round(E + (a - E) * d)))),
            j.x === r && (j.y === a || V) || (V ? (j.endRotation = j.x = j.endX = r,
            P = !0) : (q && (j.y = j.endY = a,
            P = !0),
            K && (j.x = j.endX = r,
            P = !0)),
            o && !1 === Oa(j, "move", "onMove") ? (j.pointerX = p,
            j.pointerY = u,
            _ = g,
            j.x = h,
            j.y = f,
            j.endX = m,
            j.endY = v,
            j.endRotation = x,
            P = y) : !j.isDragging && j.isPressed && (j.isDragging = !0,
            Oa(j, "dragstart", "onDragStart")))
        }, ge = function onRelease(e, t) {
            if (u && j.isPressed && (!e || null == v || t || !(e.pointerId && e.pointerId !== v && e.target !== g || e.changedTouches && !function _hasTouchID(e, t) {
                for (var o = e.length; o--; )
                    if (e[o].identifier === t)
                        return !0
            }(e.changedTouches, v)))) {
                j.isPressed = !1;
                var o, n, i, r, a, s = e, l = j.isDragging, c = j.vars.allowContextMenu && e && (e.ctrlKey || 2 < e.which), d = fe.delayedCall(.001, zi);
                if (y ? (ya(y, "touchend", onRelease),
                ya(y, "touchmove", pe),
                ya(y, "touchcancel", onRelease),
                ya(ce, "touchstart", Ca)) : ya(ce, "mousemove", pe),
                ya(me, "touchforcechange", za),
                Le && y || (ya(ce, "mouseup", onRelease),
                e && e.target && ya(e.target, "mouseup", onRelease)),
                P = !1,
                l && (Q = He = Ne(),
                j.isDragging = !1),
                x && !c)
                    return e && (ya(e.target, "change", onRelease),
                    j.pointerEvent = s),
                    Ua(J, !1),
                    Oa(j, "release", "onRelease"),
                    Oa(j, "click", "onClick"),
                    void (x = !1);
                for (va(oi),
                n = J.length; -1 < --n; )
                    Ka(J[n], "cursor", p.cursor || (!1 !== p.cursor ? Ee : null));
                if (Me--,
                e) {
                    if ((o = e.changedTouches) && (e = o[0]) !== m && e.identifier !== v) {
                        for (n = o.length; -1 < --n && (e = o[n]).identifier !== v && e.target !== g; )
                            ;
                        if (n < 0)
                            return
                    }
                    j.pointerEvent = s,
                    j.pointerX = e.pageX,
                    j.pointerY = e.pageY
                }
                return c && s ? (za(s),
                F = !0,
                Oa(j, "release", "onRelease")) : s && !l ? (F = !1,
                R && (p.snap || p.bounds) && vi(p.inertia || p.throwProps),
                Oa(j, "release", "onRelease"),
                De && "touchmove" === s.type || -1 !== s.type.indexOf("cancel") || (Oa(j, "click", "onClick"),
                Ne() - ae < 300 && Oa(j, "doubleclick", "onDoubleClick"),
                r = s.target || g,
                ae = Ne(),
                a = function syntheticClick() {
                    ae === I || !j.enabled() || j.isPressed || s.defaultPrevented || (r.click ? r.click() : ce.createEvent && ((i = ce.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, me, 1, j.pointerEvent.screenX, j.pointerEvent.screenY, j.pointerX, j.pointerY, !1, !1, !1, !1, 0, null),
                    r.dispatchEvent(i)))
                }
                ,
                De || s.defaultPrevented || fe.delayedCall(.05, a))) : (vi(p.inertia || p.throwProps),
                j.allowEventDefault || !s || !1 === p.dragClickables && re.call(j, s.target) || !l || H && (!B || H !== B) || !1 === s.cancelable ? F = !1 : (F = !0,
                za(s)),
                Oa(j, "release", "onRelease")),
                de() && d.duration(j.tween.duration()),
                l && Oa(j, "dragend", "onDragEnd"),
                !0
            }
            F && e && u && za(e)
        };
        return (t = Draggable.get(g)) && t.kill(),
        e.startDrag = function(e, t) {
            var o, n, i, r;
            Ai(e || j.pointerEvent, !0),
            t && !j.hitTest(e || j.pointerEvent) && (o = Na(e || j.pointerEvent),
            n = Na(g),
            i = Gi({
                x: o.left + o.width / 2,
                y: o.top + o.height / 2
            }),
            r = Gi({
                x: n.left + n.width / 2,
                y: n.top + n.height / 2
            }),
            b -= i.x - r.x,
            w -= i.y - r.y),
            j.isDragging || (j.isDragging = !0,
            Oa(j, "dragstart", "onDragStart"))
        }
        ,
        e.drag = pe,
        e.endDrag = function(e) {
            return ge(e || j.pointerEvent, !0)
        }
        ,
        e.timeSinceDrag = function() {
            return j.isDragging ? 0 : (Ne() - Q) / 1e3
        }
        ,
        e.timeSinceClick = function() {
            return (Ne() - ae) / 1e3
        }
        ,
        e.hitTest = function(e, t) {
            return Draggable.hitTest(j.target, e, t)
        }
        ,
        e.getDirection = function(e, t) {
            var o, n, i, r, a, s, l = "velocity" === e && Se ? e : Y(e) && !V ? "element" : "start";
            return "element" === l && (a = Na(j.target),
            s = Na(e)),
            o = "start" === l ? j.x - T : "velocity" === l ? Se.getVelocity(g, W) : a.left + a.width / 2 - (s.left + s.width / 2),
            V ? o < 0 ? "counter-clockwise" : "clockwise" : (t = t || 2,
            n = "start" === l ? j.y - _ : "velocity" === l ? Se.getVelocity(g, U) : a.top + a.height / 2 - (s.top + s.height / 2),
            r = (i = Math.abs(o / n)) < 1 / t ? "" : o < 0 ? "left" : "right",
            i < t && ("" !== r && (r += "-"),
            r += n < 0 ? "up" : "down"),
            r)
        }
        ,
        e.applyBounds = function(e, t) {
            var o, n, i, r, a, s;
            if (e && p.bounds !== e)
                return p.bounds = e,
                j.update(!0, t);
            if (pi(!0),
            si(),
            M && !de()) {
                if (o = j.x,
                n = j.y,
                k < o ? o = k : o < D && (o = D),
                S < n ? n = S : n < E && (n = E),
                (j.x !== o || j.y !== n) && (i = !0,
                j.x = j.endX = o,
                V ? j.endRotation = o : j.y = j.endY = n,
                oi(P = !0),
                j.autoScroll && !j.isDragging))
                    for (Ja(g.parentNode),
                    r = g,
                    Ae.scrollTop = null != me.pageYOffset ? me.pageYOffset : null != ce.documentElement.scrollTop ? ce.documentElement.scrollTop : ce.body.scrollTop,
                    Ae.scrollLeft = null != me.pageXOffset ? me.pageXOffset : null != ce.documentElement.scrollLeft ? ce.documentElement.scrollLeft : ce.body.scrollLeft; r && !s; )
                        a = (s = Ie(r.parentNode)) ? Ae : r.parentNode,
                        q && a.scrollTop > a._gsMaxScrollY && (a.scrollTop = a._gsMaxScrollY),
                        K && a.scrollLeft > a._gsMaxScrollX && (a.scrollLeft = a._gsMaxScrollX),
                        r = a;
                j.isThrowing && (i || j.endX > k || j.endX < D || j.endY > S || j.endY < E) && vi(p.inertia || p.throwProps, i)
            }
            return j
        }
        ,
        e.update = function(e, t, o) {
            if (t && j.isPressed) {
                var n = getGlobalMatrix(g)
                  , i = d.apply({
                    x: j.x - T,
                    y: j.y - _
                })
                  , r = getGlobalMatrix(g.parentNode, !0);
                r.apply({
                    x: n.e - i.x,
                    y: n.f - i.y
                }, i),
                j.x -= i.x - r.e,
                j.y -= i.y - r.f,
                oi(!0),
                xi()
            }
            var a = j.x
              , s = j.y;
            return wi(!t),
            e ? j.applyBounds() : (P && o && oi(!0),
            pi(!0)),
            t && (ue(j.pointerX, j.pointerY),
            P && oi(!0)),
            j.isPressed && !t && (K && .01 < Math.abs(a - j.x) || q && .01 < Math.abs(s - j.y) && !V) && xi(),
            j.autoScroll && (Ja(g.parentNode, j.isDragging),
            ee = j.isDragging,
            oi(!0),
            Ga(g, Ei),
            Fa(g, Ei)),
            j
        }
        ,
        e.enable = function(e) {
            var t, o, n, i = {
                lazy: !0
            };
            if (!1 !== p.cursor && (i.cursor = p.cursor || Ee),
            fe.utils.checkPrefix("touchCallout") && (i.touchCallout = "none"),
            "soft" !== e) {
                for (ra(J, K == q ? "none" : p.allowNativeTouchScrolling && g.scrollHeight === g.clientHeight == (g.scrollWidth === g.clientHeight) || p.allowEventDefault ? "manipulation" : K ? "pan-y" : "pan-x"),
                o = J.length; -1 < --o; )
                    n = J[o],
                    Le || xa(n, "mousedown", Ai),
                    xa(n, "touchstart", Ai),
                    xa(n, "click", Fi, !0),
                    fe.set(n, i),
                    n.getBBox && n.ownerSVGElement && fe.set(n.ownerSVGElement, {
                        touchAction: K == q ? "none" : p.allowNativeTouchScrolling || p.allowEventDefault ? "manipulation" : K ? "pan-y" : "pan-x"
                    }),
                    p.allowContextMenu || xa(n, "contextmenu", ni);
                Ua(J, !1)
            }
            return Fa(g, Ei),
            u = !0,
            Se && "soft" !== e && Se.track(h || g, G ? "x,y" : V ? "rotation" : "top,left"),
            g._gsDragID = t = "d" + Ye++,
            Re[t] = j,
            h && (h.enable(),
            h.element._gsDragID = t),
            (p.bounds || V) && xi(),
            p.bounds && j.applyBounds(),
            j
        }
        ,
        e.disable = function(e) {
            for (var t, o = j.isDragging, n = J.length; -1 < --n; )
                Ka(J[n], "cursor", null);
            if ("soft" !== e) {
                for (ra(J, null),
                n = J.length; -1 < --n; )
                    t = J[n],
                    Ka(t, "touchCallout", null),
                    ya(t, "mousedown", Ai),
                    ya(t, "touchstart", Ai),
                    ya(t, "click", Fi),
                    ya(t, "contextmenu", ni);
                Ua(J, !0),
                y && (ya(y, "touchcancel", ge),
                ya(y, "touchend", ge),
                ya(y, "touchmove", pe)),
                ya(ce, "mouseup", ge),
                ya(ce, "mousemove", pe)
            }
            return Ga(g, Ei),
            u = !1,
            Se && "soft" !== e && Se.untrack(h || g, G ? "x,y" : V ? "rotation" : "top,left"),
            h && h.disable(),
            va(oi),
            j.isDragging = j.isPressed = x = !1,
            o && Oa(j, "dragend", "onDragEnd"),
            j
        }
        ,
        e.enabled = function(e, t) {
            return arguments.length ? e ? j.enable(t) : j.disable(t) : u
        }
        ,
        e.kill = function() {
            return j.isThrowing = !1,
            j.tween && j.tween.kill(),
            j.disable(),
            fe.set(J, {
                clearProps: "userSelect"
            }),
            delete Re[g._gsDragID],
            j
        }
        ,
        ~o.indexOf("scroll") && (h = e.scrollProxy = new Ya(g,function _extend(e, t) {
            for (var o in t)
                o in e || (e[o] = t[o]);
            return e
        }({
            onKill: function onKill() {
                j.isPressed && ge(null)
            }
        }, p)),
        g.style.overflowY = q && !Te ? "auto" : "hidden",
        g.style.overflowX = K && !Te ? "auto" : "hidden",
        g = h.content),
        V ? n.rotation = 1 : (K && (n[W] = 1),
        q && (n[U] = 1)),
        se.force3D = !("force3D"in p) || p.force3D,
        e.enable(),
        e
    }
    !function _setDefaults(e, t) {
        for (var o in t)
            o in e || (e[o] = t[o])
    }(U.prototype, {
        pointerX: 0,
        pointerY: 0,
        startX: 0,
        startY: 0,
        deltaX: 0,
        deltaY: 0,
        isDragging: !1,
        isPressed: !1
    }),
    U.zIndex = 1e3,
    U.version = "3.10.4",
    W() && fe.registerPlugin(U);
    function pb() {
        return "undefined" != typeof window
    }
    function qb() {
        return K || pb() && (K = window.gsap) && K.registerPlugin && K
    }
    function rb(e) {
        return "string" == typeof e
    }
    function sb(e) {
        return "function" == typeof e
    }
    function ub(e) {
        return void 0 === e
    }
    function Bb(e, t, o) {
        var n = j.createElementNS ? j.createElementNS("svg" === e ? I : F, e) : j.createElement(e);
        return t && (rb(t) && (t = j.querySelector(t)),
        t.appendChild(n)),
        "svg" === e && (n.setAttribute("xmlns", I),
        n.setAttribute("xmlns:xlink", F)),
        o && (n.style.cssText = o),
        n
    }
    function Cb() {
        j.selection ? j.selection.empty() : H.getSelection && H.getSelection().removeAllRanges()
    }
    function Eb(e, t) {
        var o = 0
          , n = Math.max(0, e._repeat)
          , i = e._first;
        for (i || (o = e.duration()); i; )
            o = Math.max(o, 999 < i.totalDuration() ? i.endTime(!1) : i._start + i._tDur / i._ts),
            i = i._next;
        return !t && n ? o * (n + 1) + e._rDelay * n : o
    }
    function Gb(e, t, o, n) {
        var i, r, a;
        return rb(e) && ("=" === e.charAt(1) ? ((i = parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2))) < 0 && 0 === n && (n = 100),
        e = n / 100 * t.duration() + i) : isNaN(e) && t.labels && -1 !== t.labels[e] ? e = t.labels[e] : t === Q && (0 < (r = e.indexOf("=")) ? (i = parseInt(e.charAt(r - 1) + "1", 10) * parseFloat(e.substr(r + 1)),
        e = e.substr(0, r - 1)) : i = 0,
        (a = K.getById(e)) && (e = function _globalizeTime(e, t) {
            for (var o = e, n = 1 < arguments.length ? +t : o.rawTime(); o; )
                n = o._start + n / (o._ts || 1),
                o = o.parent;
            return n
        }(a, o / 100 * a.duration()) + i))),
        e = isNaN(e) ? o : parseFloat(e),
        Math.min(100, Math.max(0, e / t.duration() * 100))
    }
    function Kb(t, e, o, n) {
        var i, r;
        if ("mousedown" !== e && "mouseup" !== e || (t.style.cursor = "pointer"),
        "mousedown" === e && (r = ub(t.onpointerdown) ? ub(t.ontouchstart) ? null : "touchstart" : "pointerdown"))
            return i = function handler(e) {
                "select" !== e.target.nodeName.toLowerCase() && e.type === r ? (e.stopPropagation(),
                G && (e.preventDefault(),
                o.call(t, e))) : e.type !== r && o.call(t, e),
                G = !0
            }
            ,
            t.addEventListener(r, i, n),
            void ("pointerdown" !== r && t.addEventListener(e, i, n));
        t.addEventListener(e, o, n)
    }
    function Lb(e, t, o) {
        e.removeEventListener(t, o),
        (t = "mousedown" !== t ? null : ub(e.onpointerdown) ? ub(e.ontouchstart) ? null : "touchstart" : "pointerdown") && e.removeEventListener(t, o)
    }
    function Mb(e, t, o, n) {
        var i, r = e.options, a = r.length;
        for (t += ""; -1 < --a; )
            if (r[a].innerHTML === t || r[a].value === t)
                return e.selectedIndex = a,
                o.innerHTML = r[a].innerHTML,
                r[a];
        n && ((i = Bb("option", e)).setAttribute("value", t),
        i.innerHTML = o.innerHTML = rb(n) ? n : t,
        e.selectedIndex = r.length - 1)
    }
    function Nb(e, t, o) {
        var n = e.options
          , i = Math.min(n.length - 1, Math.max(0, e.selectedIndex + t));
        return e.selectedIndex = i,
        o && (o.innerHTML = n[i].innerHTML),
        n[i].value
    }
    function Ob() {
        var e, t, o, n = B._first;
        if (oe) {
            for (e = Q._dur; n; )
                t = n._next,
                o = n._targets && n._targets[0],
                sb(o) && o === n.vars.onComplete && !n._dur || o && o._gsIgnore || Q.add(n, n._start - n._delay),
                n = t;
            return e !== Q.duration()
        }
    }
    function Rb(e) {
        return K.getById(e) || ie.getById(e) || e === Q.vars.id && Q
    }
    function Sb(e) {
        K = e || qb(),
        q || K && pb() && (j = document,
        J = j.documentElement,
        H = window,
        K.registerPlugin(U),
        (B = K.globalTimeline)._sort = !0,
        B.autoRemoveChildren = !1,
        ee = K.core.Animation,
        (ie = K.timeline({
            data: "indy",
            autoRemoveChildren: !0,
            smoothChildTiming: !0
        })).kill(),
        ie._dp = 0,
        ie.to({}, {
            duration: 1e12
        }),
        Q = K.timeline({
            data: "root",
            id: "Global Timeline",
            autoRemoveChildren: !1,
            smoothChildTiming: !0,
            parent: ie
        }, 0),
        te = K.to(Q, {
            duration: 1,
            time: 1,
            ease: "none",
            data: "root",
            id: "_rootTween",
            paused: !0,
            immediateRender: !1,
            parent: ie
        }, 0),
        B.killTweensOf = function(e, t, o) {
            Q.killTweensOf(e, t, o),
            Q.killTweensOf.call(B, e, t, o)
        }
        ,
        ie._start = K.ticker.time,
        K.ticker.add(function(e) {
            return ie.render(e - ie._start)
        }),
        B._start += B._time,
        Q._start = B._time = B._tTime = 0,
        (re = function _delayedCall(e, t, o, n) {
            return K.to(t, {
                delay: e,
                duration: 0,
                onComplete: t,
                onReverseComplete: t,
                onCompleteParams: o,
                onReverseCompleteParams: o,
                callbackScope: n,
                parent: ie
            }, ie._time)
        }
        )(.01, function() {
            return oe ? oe.update() : Ob()
        }),
        re(2, function() {
            var e, t, o;
            if (!oe)
                for (Ob(),
                e = Q._first,
                o = Q._start; e; )
                    t = e._next,
                    e._tDur !== e._tTime || !e._dur && 1 !== e.progress() ? B.add(e, e._start - e._delay + o) : e.kill(),
                    e = t;
            2 < ue.globalRecordingTime ? re(ue.globalRecordingTime - 2, function() {
                oe && oe.update(),
                B.autoRemoveChildren = !0
            }) : B.autoRemoveChildren = !0,
            se = !1
        }),
        q = 1)
    }
    function Tb(e, t) {
        t.globalSync || e.parent === B || B.add(e, B.time())
    }
    var K, q, j, J, H, Q, ee, te, oe, ne, B, ie, re, ae, se = !0, le = 0, I = "http://www.w3.org/2000/svg", F = "http://www.w3.org/1999/xhtml", ce = 0, de = {}, pe = function() {
        try {
            return sessionStorage.setItem("gsTest", "1"),
            sessionStorage.removeItem("gsTest"),
            !0
        } catch (e) {
            return !1
        }
    }(), G = !0, ue = function GSDevTools(r) {
        q || (Sb(),
        K || console.warn("Please gsap.registerPlugin(GSDevTools)")),
        this.vars = r = r || {},
        r.animation && (GSDevTools.getByAnimation(r.animation) || {
            kill: function kill() {
                return 0
            }
        }).kill(),
        r.id = r.id || (rb(r.animation) ? r.animation : ce++),
        de[r.id + ""] = this,
        "globalSync"in r || (r.globalSync = !r.animation);
        function Tn(e) {
            return n.querySelector(e)
        }
        function Un(e, t) {
            return !1 !== r.persist && pe && sessionStorage.setItem("gs-dev-" + e + r.id, t),
            t
        }
        function Vn(e) {
            var t;
            if (!1 !== r.persist && pe)
                return t = sessionStorage.getItem("gs-dev-" + e + r.id),
                "animation" === e ? t : "loop" === e ? "true" === t : parseFloat(t)
        }
        function Bo(c, d, p) {
            return function(e) {
                var t, o = y.getBoundingClientRect(), n = c.getBoundingClientRect(), i = n.width * d, r = K.getProperty(c, "x"), a = o.left - n.left - i + r, s = o.right - n.right + (n.width - i) + r, l = a;
                p && (c !== M && (t = M.getBoundingClientRect()).left && (a += t.left + t.width - o.left),
                c !== k && (t = k.getBoundingClientRect()).left && (s -= o.left + o.width - t.left)),
                m = P,
                this.applyBounds({
                    minX: a,
                    maxX: s
                }),
                u = v.duration() / o.width,
                g = -l * u,
                f ? v.pause() : v.pause(g + u * this.x),
                this.target === x && (this.activated && (this.allowEventDefault = !1),
                this.activated = !0),
                h = !0
            }
        }
        function Do() {
            D = 0,
            S = 100,
            M.style.left = "0%",
            k.style.left = "100%",
            Un("in", D),
            Un("out", S),
            H(!0)
        }
        function Ho(e) {
            if (!z.isPressed) {
                var t = e.target.getBoundingClientRect()
                  , o = ((e.changedTouches ? e.changedTouches[0] : e).clientX - t.left) / t.width * 100;
                if (o < D)
                    return D = o = Math.max(0, o),
                    M.style.left = D + "%",
                    void R.startDrag(e);
                if (S < o)
                    return S = o = Math.min(100, o),
                    k.style.left = S + "%",
                    void Y.startDrag(e);
                v.progress(o / 100).pause(),
                H(!0),
                z.startDrag(e)
            }
        }
        function Lo() {
            if (!z.isPressed) {
                Tb(v, r);
                var e = v._targets && v._targets[0];
                e === i && e.seek(s + (l - s) * D / 100),
                v.progress(D / 100, !0),
                P || v.resume()
            }
        }
        function Mo(e) {
            if (Un("loop", d = e),
            d) {
                if (O.play(),
                v.progress() >= S / 100) {
                    var t = v._targets && v._targets[0];
                    t === i && t.seek(s + (l - s) * D / 100),
                    i._repeat && !D && 100 === S ? v.totalProgress(0, !0) : v.progress(D / 100, !0),
                    B()
                }
            } else
                O.reverse()
        }
        function No() {
            return Mo(!d)
        }
        function Oo() {
            var e, t, o = function _getChildrenOf(e, t) {
                for (var o = [], n = 0, i = K.core.Tween, r = e._first; r; )
                    r instanceof i ? r.vars.id && (o[n++] = r) : (t && r.vars.id && (o[n++] = r),
                    n = (o = o.concat(_getChildrenOf(r, t))).length),
                    r = r._next;
                return o
            }(a && !r.globalSync ? a : Q, !0), n = E.children, i = 0;
            for (a && !r.globalSync ? o.unshift(a) : r.hideGlobalTimeline || o.unshift(Q),
            t = 0; t < o.length; t++)
                (e = n[t] || Bb("option", E)).animation = o[t],
                i = t && o[t].vars.id === o[t - 1].vars.id ? i + 1 : 0,
                e.setAttribute("value", e.innerHTML = o[t].vars.id + (i ? " [" + i + "]" : o[t + 1] && o[t + 1].vars.id === o[t].vars.id ? " [0]" : ""));
            for (; t < n.length; t++)
                E.removeChild(n[t])
        }
        function Po(e) {
            var t, o, n = parseFloat(X.options[X.selectedIndex].value) || 1;
            if (!arguments.length)
                return i;
            if (rb(e) && (e = Rb(e)),
            e instanceof ee || console.warn("GSDevTools error: invalid animation."),
            e !== i) {
                if (i && (i._inProgress = D,
                i._outProgress = S),
                i = e,
                v && (n = v.timeScale(),
                v._targets && v._targets[0] === a && (a.resume(),
                v.kill())),
                D = i._inProgress || 0,
                S = i._outProgress || 100,
                M.style.left = D + "%",
                k.style.left = S + "%",
                c && (Un("animation", i.vars.id),
                Un("in", D),
                Un("out", S)),
                s = 0,
                o = r.maxDuration || Math.min(1e3, Eb(i)),
                i === Q || r.globalSync) {
                    if (Ob(),
                    v = te,
                    oe && oe !== p && console.warn("Error: GSDevTools can only have one instance that's globally synchronized."),
                    oe = p,
                    i !== Q)
                        for (99999999 < (l = (t = i).totalDuration()) && (l = t.duration()); t.parent; )
                            s = s / t._ts + t._start,
                            l = l / t._ts + t._start,
                            t = t.parent;
                    else
                        l = Q.duration();
                    o < l - s && (l = s + o),
                    Q.pause(s),
                    te.vars.time = l,
                    te.invalidate(),
                    te.duration(l - s).timeScale(n),
                    P ? te.progress(1, !0).pause(0, !0) : re(.01, function() {
                        te.resume().progress(D / 100),
                        P && B()
                    })
                } else {
                    if (oe === p && (oe = null),
                    s = Math.min(D * i.duration(), i.time()),
                    i !== a && a) {
                        for (99999999 < (l = (t = i).totalDuration()) && (l = t.duration()); t.parent.parent && t !== a; )
                            s = s / (t._ts || t._pauseTS) + t._start,
                            l = l / (t._ts || t._pauseTS) + t._start,
                            t = t.parent;
                        o < l - s && (l = s + o),
                        a.pause(s),
                        v = K.to(a, {
                            duration: l - s,
                            time: l,
                            ease: "none",
                            data: "root",
                            parent: ie
                        }, ie._time)
                    } else
                        v = i,
                        !d && v._repeat && Mo(!0);
                    v.timeScale(n),
                    te.pause(),
                    Q.resume(),
                    v.seek(0)
                }
                T.innerHTML = v.duration().toFixed(2),
                Mb(E, i.vars.id, L)
            }
        }
        function Ro(e) {
            Po(E.options[E.selectedIndex].animation),
            e.target && e.target.blur && e.target.blur(),
            P && B()
        }
        function So() {
            var e, t = parseFloat(X.options[X.selectedIndex].value) || 1;
            v.timeScale(t),
            Un("timeScale", t),
            P || (v.progress() >= S / 100 ? ((e = v._targets && v._targets[0]) === i && e.seek(s + (l - s) * D / 100),
            v.progress(D / 100, !0).pause()) : v.pause(),
            re(.01, function() {
                return v.resume()
            })),
            N.innerHTML = t + "x",
            X.blur && X.blur()
        }
        function Vo(e) {
            U.hitTest(e, n) || z.isDragging || R.isDragging || Y.isDragging || V.restart(!0)
        }
        function Wo() {
            G || (F.play(),
            V.pause(),
            G = !0)
        }
        function Xo() {
            V.pause(),
            G && (F.reverse(),
            G = !1)
        }
        function $o(e) {
            se && !le && (le = Q._start),
            c = !e,
            (a = function _parseAnimation(e) {
                return e instanceof ee ? e : e ? K.getById(e) : null
            }(r.animation)) && !a.vars.id && (a.vars.id = "[no id]"),
            Ob(),
            Oo();
            var t = Rb(Vn("animation"));
            t && (t._inProgress = Vn("in") || 0,
            t._outProgress = Vn("out") || 100),
            r.paused && A(),
            i = null,
            Po(a || t || Q);
            var o = r.timeScale || Vn("timeScale")
              , n = t === i;
            o && (Mb(X, o, N, o + "x"),
            v.timeScale(o)),
            100 === (D = ("inTime"in r ? Gb(r.inTime, i, 0, 0) : n ? t._inProgress : 0) || 0) && !r.animation && t && (Po(Q),
            D = Gb(r.inTime, i, 0, 0) || 0),
            D && (M.style.left = D + "%",
            M.style.display = k.style.display = "block"),
            (S = ("outTime"in r ? Gb(r.outTime, i, 100, D) : n ? t._outProgress : 0) || 100) < D && (S = 100),
            100 !== S && (k.style.left = S + "%",
            M.style.display = k.style.display = "block"),
            (d = "loop"in r ? r.loop : Vn("loop")) && Mo(!0),
            r.paused && v.progress(D / 100, !0).pause(),
            se && i === Q && le && r.globalSync && !P && v.time(-le, !0),
            H(!0)
        }
        var u, g, h, f, m, i, v, a, s, l, c, e, d, p = this, n = function _createRootElement(e, t, o) {
            ae || (Bb("style", J).innerHTML = ".gs-dev-tools{height:51px;bottom:0;left:0;right:0;display:block;position:fixed;overflow:visible;padding:0}.gs-dev-tools *{box-sizing:content-box;visibility:visible}.gs-dev-tools .gs-top{position:relative;z-index:499}.gs-dev-tools .gs-bottom{display:flex;align-items:center;justify-content:space-between;background-color:rgba(0,0,0,.6);height:42px;border-top:1px solid #999;position:relative}.gs-dev-tools .timeline{position:relative;height:8px;margin-left:15px;margin-right:15px;overflow:visible}.gs-dev-tools .progress-bar,.gs-dev-tools .timeline-track{height:8px;width:100%;position:absolute;top:0;left:0}.gs-dev-tools .timeline-track{background-color:#999;opacity:.6}.gs-dev-tools .progress-bar{background-color:#91e600;height:8px;top:0;width:0;pointer-events:none}.gs-dev-tools .seek-bar{width:100%;position:absolute;height:24px;top:-12px;left:0;background-color:transparent}.gs-dev-tools .in-point,.gs-dev-tools .out-point{width:15px;height:26px;position:absolute;top:-18px}.gs-dev-tools .in-point-shape{fill:#6d9900;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .out-point-shape{fill:#994242;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .in-point{transform:translateX(-100%)}.gs-dev-tools .out-point{left:100%}.gs-dev-tools .grab{stroke:rgba(255,255,255,.3);stroke-width:1}.gs-dev-tools .playhead{position:absolute;top:-5px;transform:translate(-50%,0);left:0;border-radius:50%;width:16px;height:16px;border:1px solid #6d9900;background-color:#91e600}.gs-dev-tools .gs-btn-white{fill:#fff}.gs-dev-tools .pause{opacity:0}.gs-dev-tools .select-animation{vertical-align:middle;position:relative;padding:6px 10px}.gs-dev-tools .select-animation-container{flex-grow:4;width:40%}.gs-dev-tools .select-arrow{display:inline-block;width:12px;height:7px;margin:0 7px;transform:translate(0,-2px)}.gs-dev-tools .select-arrow-shape{stroke:rgba(255,255,255,.6);stroke-width:2px;fill:none}.gs-dev-tools .rewind{height:16px;width:19px;padding:10px 4px;min-width:24px}.gs-dev-tools .rewind-path{opacity:.6}.gs-dev-tools .play-pause{width:24px;height:24px;padding:6px 10px;min-width:24px}.gs-dev-tools .ease{width:30px;height:30px;padding:10px;min-width:30px;display:none}.gs-dev-tools .ease-path{fill:none;stroke:rgba(255,255,255,.6);stroke-width:2px}.gs-dev-tools .ease-border{fill:rgba(255,255,255,.25)}.gs-dev-tools .time-scale{font-family:monospace;font-size:18px;text-align:center;color:rgba(255,255,255,.6);padding:4px 4px 4px 0;min-width:30px;margin-left:7px}.gs-dev-tools .loop{width:20px;padding:5px;min-width:20px}.gs-dev-tools .loop-path{fill:rgba(255,255,255,.6)}.gs-dev-tools label span{color:#fff;font-family:monospace;text-decoration:none;font-size:16px;line-height:18px}.gs-dev-tools .time-scale span{color:rgba(255,255,255,.6)}.gs-dev-tools button:focus,.gs-dev-tools select:focus{outline:0}.gs-dev-tools label{position:relative;cursor:pointer}.gs-dev-tools label.locked{text-decoration:none;cursor:auto}.gs-dev-tools label input,.gs-dev-tools label select{position:absolute;left:0;top:0;z-index:1;font:inherit;font-size:inherit;line-height:inherit;height:100%;width:100%;color:#000!important;opacity:0;background:0 0;border:none;padding:0;margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.gs-dev-tools label input+.display{position:relative;z-index:2}.gs-dev-tools .gs-bottom-right{vertical-align:middle;display:flex;align-items:center;flex-grow:4;width:40%;justify-content:flex-end}.gs-dev-tools .time-container{font-size:18px;font-family:monospace;color:rgba(255,255,255,.6);margin:0 5px}.gs-dev-tools .logo{width:32px;height:32px;position:relative;top:2px;margin:0 12px}.gs-dev-tools .gs-hit-area{background-color:transparent;width:100%;height:100%;top:0;position:absolute}.gs-dev-tools.minimal{height:auto;display:flex;align-items:stretch}.gs-dev-tools.minimal .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1)}.gs-dev-tools.minimal .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools.minimal .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools.minimal .in-point,.gs-dev-tools.minimal .out-point{display:none}.gs-dev-tools.minimal .select-animation-container{display:none}.gs-dev-tools.minimal .rewind{display:none}.gs-dev-tools.minimal .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools.minimal .time-scale{min-width:26px}.gs-dev-tools.minimal .loop{width:18px;min-width:18px;display:none}.gs-dev-tools.minimal .gs-bottom-right{display:none}@media only screen and (max-width:600px){.gs-dev-tools{height:auto;display:flex;align-items:stretch}.gs-dev-tools .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1);height:42px}.gs-dev-tools .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools .in-point,.gs-dev-tools .out-point{display:none}.gs-dev-tools .select-animation-container{display:none}.gs-dev-tools .rewind{display:none}.gs-dev-tools .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools .time-scale{min-width:26px}.gs-dev-tools .loop{width:18px;min-width:18px;display:none}.gs-dev-tools .gs-bottom-right{display:none}}",
            ae = !0),
            rb(e) && (e = j.querySelector(e));
            var n = Bb("div", e || J.getElementsByTagName("body")[0] || J);
            return n.setAttribute("class", "gs-dev-tools" + (t ? " minimal" : "")),
            n.innerHTML = '<div class=gs-hit-area></div><div class=gs-top><div class=timeline><div class=timeline-track></div><div class=progress-bar></div><div class=seek-bar></div><svg class=in-point viewBox="0 0 15 26" xmlns=http://www.w3.org/2000/svg><polygon class=in-point-shape points=".5 .5 14.5 .5 14.5 25.5 .5 17.5"/><polyline class=grab points="5.5 4 5.5 15"/><polyline class=grab points="9.5 4 9.5 17"/></svg><svg class=out-point viewBox="0 0 15 26" xmlns=http://www.w3.org/2000/svg><polygon class=out-point-shape points=".5 .5 14.5 .5 14.5 17.5 .5 25.5"/><polyline class=grab points="5.5 4 5.5 17"/><polyline class=grab points="9.5 4 9.5 15"/></svg><div class=playhead></div></div></div><div class=gs-bottom><div class=select-animation-container><label class=select-animation><select class=animation-list><option>Global Timeline<option>myTimeline</select><nobr><span class="display animation-label">Global Timeline</span><svg class=select-arrow viewBox="0 0 12.05 6.73" xmlns=http://www.w3.org/2000/svg><polyline class=select-arrow-shape points="0.35 0.35 6.03 6.03 11.7 0.35"/></svg></nobr></label></div><svg class=rewind viewBox="0 0 12 15.38" xmlns=http://www.w3.org/2000/svg><path d=M0,.38H2v15H0Zm2,7,10,7.36V0Z class="gs-btn-white rewind-path"/></svg><svg class=play-pause viewBox="0 0 20.97 25.67" xmlns=http://www.w3.org/2000/svg><g class=play><path d="M8,4.88 C8,10.18 8,15.48 8,20.79 5.33,22.41 2.66,24.04 0,25.67 0,17.11 0,8.55 0,0 2.66,1.62 5.33,3.25 8,4.88" class="gs-btn-white play-1" style=stroke:#fff;stroke-width:.6px /><path d="M14.485,8.855 C16.64,10.18 18.8,11.5 20.97,12.83 16.64,15.48 12.32,18.13 8,20.79 8,15.48 8,10.18 8,4.88 10.16,6.2 12.32,7.53 14.48,8.85" class="gs-btn-white play-2" style=stroke:#fff;stroke-width:.6px /></g></svg> <svg class=loop viewBox="0 0 29 25.38" xmlns=http://www.w3.org/2000/svg><path d=M27.44,5.44,20.19,0V3.06H9.06A9.31,9.31,0,0,0,0,12.41,9.74,9.74,0,0,0,.69,16l3.06-2.23a6,6,0,0,1-.12-1.22,5.49,5.49,0,0,1,5.43-5.5H20.19v3.81Z class=loop-path /><path d=M25.25,11.54a5.18,5.18,0,0,1,.12,1.12,5.41,5.41,0,0,1-5.43,5.41H9.19V14.5L1.94,19.94l7.25,5.44V22.06H19.94A9.2,9.2,0,0,0,29,12.84a9.42,9.42,0,0,0-.68-3.53Z class=loop-path /></svg> <svg class=ease viewBox="0 0 25.67 25.67" xmlns=http://www.w3.org/2000/svg><path d=M.48,25.12c1.74-3.57,4.28-12.6,8.8-10.7s4.75,1.43,6.5-1.11S19.89,1.19,25.2.55 class=ease-path /><path d=M24.67,1V24.67H1V1H24.67m1-1H0V25.67H25.67V0Z class=ease-border /></svg><label class=time-scale><select><option value=10>10x<option value=5>5x<option value=2>2x<option value=1 selected>1x<option value=0.5>0.5x<option value=0.25>0.25x<option value=0.1>0.1x</select><span class="display time-scale-label">1x</span></label><div class=gs-bottom-right><div class=time-container><span class=time>0.00</span> / <span class=duration>0.00</span></div><a href="https://greensock.com/docs/v3/Plugins/GSDevTools?source=GSDevTools" target=_blank title=Docs><svg class=logo viewBox="0 0 100 100" xmlns=http://www.w3.org/2000/svg><path d="M60 15.4c-.3-.4-.5-.6-.5-.7.1-.6.2-1 .2-1.7v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1s-.2-.4-.4-.6zm24.6 21.9c-.5-1.7-1.9-2-4.2-.7.9-1.5 2.1-1.5 2.3-2.1.9-2.5-.6-4.6-1.2-5.3.7-1.8 1.4-4.5-1-6.8-1-1-2.4-1.2-3.6-1.1 1.8 1.7 3.4 4.4 2.5 7.2-.1.3-.9.7-1.7 1 0 0 .4 2-.3 3.5-.3.6-.8 1.5-1.3 2.6 1 .9 1.6 1 3 1.3-.9.1-1.2.4-1.2.5-.7 3 1 3.4 1.4 4.8 0 .1 0 .2.1.3v.4c-.3.3-1.4.5-2.5.5s-1.8 1-1.8 1c-.2.1-.3.3-.4.4v1c0 .1 0 .4.1.6.1.5.3 1.3.4 1.8.9.6 1.4.9 2.2 1.1.5.1 1 .2 1.5.1.3-.1.7-.3 1-.7 1.5-1.7 1.9-3.2 2.2-4.1 0-.1 0-.2.1-.2 0 .1.1.1.1.2 0 0 .1-.1.1-.2l.1-.1c1.3-1.6 2.9-4.5 2.1-7zM74.3 49.9c-.1-.3-.1-.7-.2-1.1v-.2c-.1-.2-.1-.4-.2-.6 0-.1-.1-.3-.1-.5s-.1-.5-.1-.7v-.1c0-.2-.1-.5-.1-.7-.1-.3-.1-.7-.2-1.1v-.1c0-.2 0-.3-.1-.5v-.9c0-.1 0-.2.1-.3V43h-.3c-1.1.1-3.8.4-6.7.2-1.2-.1-2.4-.3-3.6-.6-1-.3-1.8-.5-2.3-.7-1.2-.4-1.6-.6-1.8-.7 0 .2-.1.4-.1.7 0 .3-.1.5-.1.8-.1.2-.1.4-.2.6l.1.1c.5.5 1.5 1.3 1.5 2.1v.2c-.1.4-.4.5-.8.9-.1.1-.6.7-1.1 1.1l-.6.6c-.1 0-.1.1-.2.1-.1.1-.3.2-.4.3-.2.1-.7.5-.8.6-.1.1-.2.1-.3.1-2.8 8.8-2.2 13.5-1.5 16.1.1.5.3 1 .4 1.3-.4.5-.8 1-1.2 1.4-1.2 1.5-2 2.6-2.6 4.2 0 .1 0 .1-.1.2 0 .1 0 .2-.1.2-.2.5-.3 1-.4 1.5-.6 2.3-.8 4.5-.9 6.6-.1 2.4-.2 4.6-.5 6.9.7.3 3.1.9 4.7.6.2-.1 0-3.9.6-5.7l.6-1.5c.4-.9.9-1.9 1.3-3.1.3-.7.5-1.5.7-2.4.1-.5.2-1 .3-1.6V74v-.1c.1-.6.1-1.3.1-2 0-.2-.7.3-1.1.9.3-1.8 1.3-2.1 2-3.2.3-.5.6-1.1.6-2 2.5-1.7 4-3.7 5-5.7.2-.4.4-.9.6-1.4.3-.8.5-1.6.7-2.4.3-1.4.8-3.2 1.2-4.8v-.1c.4-1.2.8-2.2 1.2-2.6-.2.9-.4 1.7-.6 2.5v.2c-.6 3.5-.7 6.2-2 9.2 1 2.6 1.9 3.9 2 7.6-2 0-3.2 1.6-3.7 3.2 1.2.3 3.9.7 8.3.1h.3c.1-.5.3-1.1.5-1.5.3-.8.5-1.5.6-2.2.2-1.3.1-2.4 0-3.2 3.9-3.7 2.6-11 1.6-16.6zm.3-15.1c.1-.3.2-.6.4-.8.2-.3.3-.7.5-1 .1-.3.3-.6.4-.9.5-1.5.4-2.8.3-3.5-.1 0-.1-.1-.2-.1-.5-.2-.9-.4-1.4-.6-.1 0-.2-.1-.3-.1-3.8-1.2-7.9-.9-11.9.1-1 .2-1.9.5-2.9.1-2.3-.8-3.9-1.9-4.6-2.8l-.2-.2c-.1.2-.2.4-.4.6.2 2.3-.5 3.9-1.4 5.1.9 1.2 2.6 2.8 3.6 3.4 1.1.6 1.7.7 3.4.4-.6.7-1.1 1-1.9 1.4.1.7.2 2 .5 3.4.3.3 1.2.8 2.3 1.3.5.3 1.1.5 1.7.7.8.3 1.7.6 2.4.8.1 0 .2.1.3.1.5.1 1.1.2 1.8.2h.9c2.1 0 4.5-.2 5.4-.3h.1c-.1-2.7.2-4.6.7-6.2.2-.3.4-.7.5-1.1zm-23.2 9.3v.2c-.3 1.7.5 2.4 1.9 3.4.6.5 0 .5.5.8.3.2.7.3 1 .3.3 0 .5 0 .8-.1.2-.1.4-.3.6-.5.1-.1.3-.2.5-.4.3-.2.6-.5.7-.6.1-.1.2-.1.3-.2.2-.2.5-.5.6-.7.2-.2.4-.5.5-.7 0-.1.1-.1.1-.1v-.1c.1-.4-.3-.8-.8-1.3-.2-.2-.4-.3-.5-.5-.3-.3-.6-.5-1-.7-.9-.5-1.9-.7-3-.7l-.3-.3c-2.2-2.5-3.2-4.8-3.9-6.5-.9-2.1-1.9-3.3-3.9-4.9 1 .4 1.8.8 2.3 1.1.5.4 1.3.4 1.9.2.2-.1.5-.2.7-.3.2-.1.4-.2.6-.4 1.6-1.3 2.5-3.8 2.6-5.6v-.1c.2-.3.6-1.1.8-1.4l.1.1c.1.1.3.2.6.5.1 0 .1.1.2.1.1.1.2.1.2.2.8.6 1.9 1.3 2.6 1.7 1.4.7 2.3.7 5.3-.1 2.2-.6 4.8-.8 6.8-.8 1.4 0 2.7.3 4 .7.2.1.4.1.5.2.3.1.6.2.9.4 0 0 .1 0 .1.1.8.4 2.1 1.2 2.5-.3.1-2-.6-3.9-1.6-5.3 0 0-.1 0-.1-.1-.1-.1-.2-.2-.4-.3-.1-.1-.2-.1-.3-.2-.1-.1-.2-.2-.4-.2-.6-.4-1.2-.8-1.6-.9-.1-.1-.3-.1-.4-.2h-.1-.1c-.1 0-.3-.1-.4-.1-.1 0-.1 0-.2-.1h-.1l-.2-.4c-.2-.1-.4-.2-.5-.2h-.6c-.3 0-.5.1-.7.1-.7.1-1.2.3-1.7.4-.2 0-.3.1-.5.1-.5.1-1 .2-1.6.2-.4 0-.9-.1-1.5-.2-.4-.1-.8-.2-1.1-.3-.2-.1-.4-.1-.6-.2-.6-.2-1.1-.3-1.7-.4h-.2-1.8c-.3 0-.6.1-1 .1H57.9c-.8 0-1.5 0-2.3-.1-.2 0-.5-.1-.7-.1-.5-.1-.9-.2-1.3-.4-.2-.1-.3-.1-.4-.2-.1 0-.2 0-.2-.1-.3-.1-.6-.1-.9-.1H51h-.1c-.4 0-.9.1-1.4.2-1.1.2-2.1.6-3 1.3-.3.2-.6.5-.8.8-.1.1-.2.2-.2.3-.4.6-.8 1.2-.9 2 0 .2-.1.4-.1.6 0 .2 1.7.7 2.3 2.8-.8-1.2-2.3-2.5-4.1-1.4-1.5 1-1.1 3.1-2.4 5.4-.3.5-.6.9-1 1.4-.8 1-.7 2.1.2 4.4 1.4 3.4 7.6 5.3 11.5 8.3l.4.4zm8.7-36.3c0 .6.1 1 .2 1.6v.1c0 .3.1.6.1.9.1 1.2.4 2 1 2.9 0 .1.1.1.1.2.3.2.5.3.8.4 1.1.2 3.1.3 4.2 0 .2-.1.5-.3.7-.5.4-.4.7-1.1.9-1.7.1-.7.3-1.3.4-1.8 0-.2.1-.4.1-.5v-.1c0-.2 0-.3.1-.5.2-.7.2-2.4.3-2.8.1-.7 0-1.8-.1-2.5 0-.2-.1-.4-.1-.5v-.1c-.2-.5-1.4-1.4-4.3-1.4-3.1 0-4 1-4.1 1.5v.1c0 .1 0 .3-.1.5-.1.4-.2 1.4-.2 1.9v2.3zm-6 88.6c0-.1-.1-.2-.1-.3-.7-1.5-1.1-3.5-1.3-4.6.4.1.7.6.8.3.2-.5-.4-1.5-.5-2.2v-.1c-.5-.5-4-.5-3.7-.3-.4.8-1 .6-1.3 2.1-.1.7.8.1 1.7.1-1.4.9-3 2.1-3.4 3.2-.1.1-.1.2-.1.3 0 .2-.1.4-.1.5-.1 1.2.5 1.6 2 2.4H48.4c1.4.3 3 .3 4.3.3 1.2-.2 1.6-.7 1.6-1.4-.2-.1-.2-.2-.2-.3z" style=fill:#efefef /><path d="M56.1 36.5c.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.4-2.9-6.1-4.4-8.3.4-.2 1-.4 1.5-.8 1.6 1.9 3.3 3 5 4.1zm-1.7 13.2s-1.4 0-2.3-1c0 0-.1-.5.1-.7 0 0-1.2-1-1.5-1.7-.2-.5-.3-1.1-.2-1.6-4.4-3.7-10.9-4.2-12.9-9.1-.5-1.2-1.3-2.9-.9-3.9-.3.1-.5.2-.8.3-2.9.9-11.7 5.3-17.9 8.8 1.6 1.7 2.6 4.3 3.2 7.2l.3 1.5c.1.5.1 1 .2 1.5.1 1.4.4 2.7.8 3.9.2.8.6 1.5.9 2.2.6 1 1.2 1.9 2.1 2.6.6.5 1.2.9 1.9 1.3 2.1 1.1 5 1.6 8.6 1.5H37.9c.5 0 1 .1 1.5.1h.1c.4.1.9.1 1.3.2h.2c.4.1.9.2 1.3.4h.1c.4.1.8.3 1.1.5h.1c.4.2.7.4 1.1.6h.1c.7.4 1.3.9 1.9 1.5l.1.1c.6.5 1.1 1.1 1.5 1.8 0 .1.1.1.1.2s.1.1.1.2c.4.6 1.2 1.1 1.9 1.3.7-.9 1.5-1.8 2.2-2.8-1.6-6 0-11.7 1.8-16.9zm-26-15.9c5-2.4 9-4.1 9.9-4.5.3-.6.6-1.4.9-2.6.1-.3.2-.5.3-.8 1-2.7 2.7-2.8 3.5-3v-.2c.1-1.1.5-2 1-2.8-8.8 2.5-18 5.5-28 11.7-.1.1-.2.2-.4.2C11.3 34.5 3 40.3 1.3 51c2.4-2.7 6-5.6 10.5-8.5.1-.1.3-.2.5-.3.2-.1.5-.3.7-.4 1.2-.7 2.4-1.4 3.6-2.2 2.2-1.2 4.5-2.4 6.7-3.5 1.8-.8 3.5-1.6 5.1-2.3zm54.9 61.3l-.3-.3c-.8-.6-4.1-1.2-5.5-2.3-.4-.3-1.1-.7-1.7-1.1-1.6-.9-3.5-1.8-3.5-2.1v-.1c-.2-1.7-.2-7 .1-8.8.3-1.8.7-4.4.8-5.1.1-.6.5-1.2.1-1.2h-.4c-.2 0-.4.1-.8.1-1.5.3-4.3.6-6.6.4-.9-.1-1.6-.2-2-.3-.5-.1-.7-.2-.9-.3H62.3c-.4.5 0 2.7.6 4.8.3 1.1.8 2 1.2 3 .3.8.6 1.8.8 3.1 0 .2.1.4.1.7.2 2.8.3 3.6-.2 4.9-.1.3-.3.6-.4 1-.4.9-.7 1.7-.6 2.3 0 .2.1.4.1.5.2.4.6.7 1.2.8.2 0 .3.1.5.1.3 0 .6.1.9.1 3.4 0 5.2 0 8.6.4 2.5.4 3.9.6 5.1.5.4 0 .9-.1 1.4-.1 1.2-.2 1.8-.5 1.9-.9-.1.2-.1.1-.2-.1zM60.2 16.4zm-.5 1.7zm3.8.5c.1 0 .3.1.5.1.4.1.7.2 1.2.3.3.1.6.1.9.1h1.3c.3-.1.7-.1 1-.2.7-.2 1.5-.4 2.7-.6h.3c.3 0 .6.1.9.3.1.1.2.1.4.2.3.2.8.2 1.2.4h.1c.1 0 .1.1.2.1.6.3 1.3.7 1.9 1.1l.3.3c.9-.1 1.6-.2 2.1-.2h.1c-.2-.4-.3-1.3-1.8-.6-.6-.7-.8-1.3-2.1-.9-.1-.2-.2-.3-.3-.4l-.1-.1c-.1-.1-.2-.3-.3-.4 0-.1-.1-.1-.1-.2-.2-.3-.5-.5-.9-.7-.7-.4-1.5-.6-2.3-.5-.2 0-.4.1-.6.2-.1 0-.2.1-.2.1-.1 0-.2.1-.3.2-.5.3-1.3.8-2.1 1-.1 0-.1 0-.2.1-.2 0-.4.1-.5.1H66.5h-.1c-.4-.1-1.1-.2-2-.5-.1 0-.2-.1-.3-.1-.9-.2-1.8-.5-2.7-.8-.3-.1-.7-.2-1-.3-.1 0-.1 0-.2-.1h-.1s-.1 0-.1-.1c-.3-.3-.7-.6-1.3-.8-.5-.2-1.2-.4-2.1-.5-.2 0-.5 0-.7.1-.4.2-.8.6-1.2.9.1.1.3.3.4.5.1.2.2.4.3.7l-.6-.6c-.5-.4-1.1-.8-1.7-.9-.8-.2-1.4.4-2.3.9 1 0 1.8.1 2.5.4.1 0 .1 0 .2.1h.1c.1 0 .2.1.3.1.9.4 1.8.6 2.7.6h1.3c.5 0 .8-.1 1.1-.1.1 0 .4 0 .7-.1h2.2c.4.4.9.6 1.6.8z" style=fill:#88ce02 /><path d="M100 51.8c0-19.5-12.5-36.1-30-42.1.1-1.2.2-2.4.3-3.1.1-1.5.2-3.9-.5-4.9-1.6-2.3-9.1-2.1-10.5-.1-.4.6-.7 3.6-.6 5.9-1.1-.1-2.2-.1-3.3-.1-16.5 0-30.9 9-38.6 22.3-2.4 1.4-4.7 2.8-6.1 4C5.4 38 2.2 43.2 1 47c-1.6 4.7-1.1 7.6.4 5.8 1.2-1.5 6.6-5.9 10.1-8.2-.4 2.3-.6 4.8-.6 7.2 0 21 14.5 38.5 34 43.3-.1 1.1.1 2 .7 2.6.9.8 3.2 2 6.4 1.6 2.9-.3 3.5-.5 3.2-2.9h.2c2.7 0 5.3-.2 7.8-.7.1.1.2.2.4.3 1.5 1 7.1.8 9.6.7s6.2.9 8.6.5c2.9-.5 3.4-2.3 1.6-3.2-1.5-.8-3.8-1.3-6.7-3.1C90.6 83.4 100 68.7 100 51.8zM60.1 5.5c0-.5.1-1.5.2-2.1 0-.2 0-.4.1-.5v-.1c.1-.5 1-1.5 4.1-1.5 2.9 0 4.2.9 4.3 1.4v.1c0 .1 0 .3.1.5.1.8.2 1.9.1 2.7 0 .5-.1 2.1-.2 2.9 0 .1 0 .3-.1.5v.1c0 .2-.1.3-.1.5-.1.5-.2 1.1-.4 1.8-.1.6-.5 1.2-.9 1.7-.2.3-.5.5-.7.5-1.1.3-3.1.3-4.2 0-.3-.1-.5-.2-.8-.4 0-.1-.1-.1-.1-.2-.6-.9-.9-1.7-1-2.9 0-.4-.1-.6-.1-.9v-.1c-.1-.6-.2-1-.2-1.6v-.3c-.1-1.3-.1-2.1-.1-2.1zm-.4 7.5v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1-.2-.3-.4-.5-.6-.7-.3-.4-.5-.6-.5-.7.3-.4.4-.9.4-1.6zm.5 3.4zm-7.3-.3c.6.1 1.2.5 1.7.9.2.2.5.4.6.6-.1-.2-.2-.5-.3-.7-.1-.2-.3-.4-.4-.5.4-.3.8-.7 1.2-.9.2-.1.4-.1.7-.1.9.1 1.6.2 2.1.5.6.2 1 .5 1.3.8 0 0 .1 0 .1.1h.1c.1 0 .1 0 .2.1.3.1.6.2 1 .3.9.3 1.9.6 2.7.8.1 0 .2.1.3.1.9.2 1.6.4 2 .5h.4c.2 0 .4 0 .5-.1.1 0 .1 0 .2-.1.7-.2 1.5-.7 2.1-1 .1-.1.2-.1.3-.2.1 0 .2-.1.2-.1.2-.1.4-.2.6-.2.8-.2 1.7.1 2.3.5.3.2.6.4.9.7 0 .1.1.1.1.2.1.2.2.3.3.4l.1.1c.1.1.2.2.3.4 1.3-.4 1.5.2 2.1.9 1.6-.7 1.7.2 1.8.6h-.1c-.5 0-1.2 0-2.1.2l-.3-.3c-.5-.4-1.2-.8-1.9-1.1-.1 0-.1-.1-.2-.1h-.1c-.4-.2-.8-.2-1.2-.4-.1-.1-.2-.1-.4-.2-.3-.1-.6-.3-.9-.3h-.3c-1.2.1-2 .4-2.7.6-.3.1-.7.2-1 .2-.4.1-.8.1-1.3 0-.3 0-.6-.1-.9-.1-.5-.1-.8-.2-1.2-.3-.2 0-.3-.1-.5-.1h-.1c-.6-.2-1.2-.3-1.8-.4h-.1-2.1c-.4.1-.6.1-.7.1-.3 0-.7.1-1.1.1h-1.3c-.9 0-1.9-.2-2.7-.6-.1 0-.2-.1-.3-.1H53c-.1 0-.1 0-.2-.1-.7-.3-1.6-.4-2.5-.4 1.2-.8 1.8-1.4 2.6-1.3zm6.8 2zm-15.2 4.1c.1-.7.4-1.4.9-2 .1-.1.2-.2.2-.3l.8-.8c.9-.6 1.9-1.1 3-1.3.5-.1 1-.2 1.4-.2H52c.3 0 .6.1.9.1.1 0 .2 0 .2.1.1.1.2.1.4.2.4.2.8.3 1.3.4.2 0 .5.1.7.1.7.1 1.5.1 2.3.1H58.7c.4 0 .7-.1 1-.1H61.7c.6.1 1.1.2 1.7.4.2 0 .4.1.6.2.3.1.7.2 1.1.3.6.1 1.1.2 1.5.2.6 0 1.1-.1 1.6-.2.2 0 .3-.1.5-.1.5-.1 1-.3 1.7-.4.2 0 .5-.1.7-.1h.6c.2 0 .4.1.5.2l.1.1h.1c.1 0 .1 0 .2.1.2.1.3.1.4.1h.2c.1.1.3.1.4.2.4.2 1 .6 1.6.9.1.1.2.2.4.2.1.1.2.1.3.2.2.1.3.3.4.3l.1.1c1.1 1.4 1.8 3.3 1.6 5.3-.3 1.5-1.6.7-2.5.3 0 0-.1 0-.1-.1-.3-.1-.6-.2-.9-.4-.2-.1-.4-.1-.5-.2-1.2-.4-2.5-.7-4-.7-2 0-4.6.1-6.8.8-3 .8-4 .8-5.3.1-.8-.4-1.8-1.1-2.6-1.7-.1-.1-.2-.1-.2-.2-.1-.1-.1-.1-.2-.1-.3-.2-.6-.4-.6-.5l-.1-.1c-.2.3-.6 1-.8 1.4v.1c-.1 1.7-1 4.2-2.6 5.6-.2.1-.4.3-.6.4-.2.1-.5.2-.7.3-.7.2-1.4.2-1.9-.2-.5-.3-1.3-.7-2.3-1.1 2 1.6 3 2.8 3.9 4.9.7 1.7 1.7 4 3.9 6.5l.3.3c1.1 0 2.1.2 3 .7.4.2.7.4 1 .7.2.2.4.3.5.5.5.4.9.8.8 1.3v.1s0 .1-.1.1c-.1.2-.3.5-.5.7-.1.1-.4.4-.6.7-.1.1-.2.2-.3.2-.1.1-.4.3-.7.6-.2.2-.4.3-.5.4-.2.1-.4.4-.6.5-.3.1-.5.2-.8.1-.3 0-.7-.2-1-.3-.5-.3.1-.3-.5-.8-1.4-1-2.2-1.7-1.9-3.4v-.2c-.2-.1-.3-.3-.5-.4-3.9-3-10.1-4.9-11.5-8.3-.9-2.3-1-3.4-.2-4.4.4-.5.8-1 1-1.4 1.3-2.3.9-4.4 2.4-5.4 1.8-1.2 3.3.2 4.1 1.4-.5-2.1-2.3-2.6-2.3-2.8.3.1.3-.1.3-.3zm29 20s-.1 0 0 0c-.1 0-.1 0 0 0-.9.1-3.3.3-5.4.3h-.9c-.7 0-1.3-.1-1.8-.2-.1 0-.2 0-.3-.1-.7-.2-1.6-.5-2.4-.8-.6-.2-1.2-.5-1.7-.7-1.1-.5-2.1-1.1-2.3-1.3-.5-1.4-.7-2.7-.7-3.4.8-.4 1.3-.7 1.9-1.4-1.7.3-2.4.2-3.4-.4-1-.5-2.6-2.2-3.6-3.4 1-1.2 1.7-2.9 1.4-5.1.1-.2.3-.4.4-.6 0 .1.1.1.2.2.7.9 2.4 2 4.6 2.8 1.1.4 2 .1 2.9-.1 4-1 8.1-1.3 11.9-.1.1 0 .2.1.3.1.5.2.9.4 1.4.6.1 0 .1.1.2.1.1.7.2 2-.3 3.5-.1.3-.2.6-.4.9-.2.3-.3.6-.5 1-.1.3-.2.5-.4.8-.2.4-.3.8-.5 1.3-.4 1.4-.7 3.4-.6 6zm-23.9-9c.4-.2 1-.4 1.5-.8 1.6 1.8 3.3 3 5 4.1.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.3-3-6-4.4-8.3zm-32.9 6.5c-1.3.7-2.5 1.4-3.6 2.2-.2.1-.5.3-.7.4-.1.1-.3.2-.5.3-4.5 2.9-8.1 5.8-10.5 8.5 1.7-10.8 10-16.5 14.3-19.2.1-.1.2-.2.4-.2 10-6.2 19.2-9.2 28-11.7-.5.8-.9 1.7-1 2.8v.2c-.8.1-2.5.2-3.5 3-.1.2-.2.5-.3.8-.3 1.2-.6 2-.9 2.6-.9.4-5 2.2-9.9 4.5-1.6.8-3.3 1.6-5 2.4-2.3 1-4.6 2.2-6.8 3.4zm28 24.8s0-.1 0 0c-.4-.3-.8-.5-1.2-.7h-.1c-.4-.2-.7-.3-1.1-.5h-.1c-.4-.1-.8-.3-1.3-.4h-.2c-.4-.1-.8-.2-1.3-.2h-.1c-.5-.1-1-.1-1.5-.1H35.9c-3.7.1-6.5-.4-8.6-1.5-.7-.4-1.4-.8-1.9-1.3-.9-.7-1.5-1.6-2.1-2.6-.4-.7-.7-1.4-.9-2.2-.4-1.2-.6-2.5-.8-3.9 0-.5-.1-1-.2-1.5l-.3-1.5c-.6-2.9-1.6-5.5-3.2-7.2 6.3-3.5 15-7.9 17.8-8.8.3-.1.6-.2.8-.3-.3 1.1.4 2.7.9 3.9 2.1 4.9 8.6 5.4 12.9 9.1 0 .5 0 1.1.2 1.6.5.6 1.7 1.6 1.7 1.6-.2.2-.1.7-.1.7.9 1 2.3 1 2.3 1-1.8 5.2-3.4 10.9-1.9 16.9-.7 1-1.5 1.8-2.2 2.8-.7-.2-1.4-.6-1.9-1.3 0-.1-.1-.1-.1-.2s-.1-.1-.1-.2l-1.5-1.8-.1-.1c-.5-.4-1.2-.9-1.9-1.3zm7.9 33.6c-1.3.1-2.9 0-4.3-.3h-.2-.1c-1.5-.8-2.1-1.2-2-2.4 0-.2 0-.3.1-.5 0-.1.1-.2.1-.3.5-1.1 2.1-2.2 3.4-3.2-.8 0-1.8.7-1.7-.1.2-1.5.9-1.3 1.3-2.1-.2-.3 3.3-.2 3.8.3v.1c0 .7.7 1.7.5 2.2-.1.3-.4-.2-.8-.3.2 1.1.6 3.1 1.3 4.6.1.1.1.2.1.3 0 .1.1.2.1.3 0 .7-.4 1.2-1.6 1.4zM59 67.7c0 .9-.3 1.6-.6 2-.7 1.1-1.7 1.4-2 3.2.4-.6 1.1-1.1 1.1-.9 0 .8-.1 1.4-.1 2v.2c-.1.6-.2 1.1-.3 1.6-.2.9-.5 1.7-.7 2.4-.4 1.2-.9 2.1-1.3 3.1l-.6 1.5c-.6 1.7-.4 5.6-.6 5.7-1.6.3-4.1-.3-4.7-.6.3-2.2.4-4.5.5-6.9.1-2.1.3-4.3.9-6.6.1-.5.3-1 .4-1.5 0-.1 0-.2.1-.2 0-.1 0-.1.1-.2.5-1.6 1.4-2.7 2.6-4.2.4-.4.7-.9 1.2-1.4-.1-.4-.2-.8-.4-1.3-.7-2.6-1.3-7.3 1.5-16.1.1 0 .2-.1.3-.1.2-.1.7-.5.8-.6.1-.1.3-.2.4-.3.1 0 .1-.1.2-.1l.6-.6 1.1-1.1c.4-.4.7-.5.8-.9v-.2c0-.8-1.1-1.5-1.5-2.1l-.1-.1c.1-.2.1-.4.2-.6 0-.2.1-.5.1-.8 0-.2.1-.5.1-.7.1.1.6.4 1.8.7.6.2 1.3.4 2.3.7 1.1.3 2.4.5 3.6.6 2.9.2 5.6 0 6.7-.2h.3v.1c0 .1 0 .2-.1.3v.9c0 .2 0 .3.1.5v.1c0 .4.1.7.2 1.1 0 .3.1.5.1.7v.1c0 .3.1.5.1.7 0 .2.1.3.1.5.1.2.1.4.2.6v.2c.1.4.2.8.2 1.1 1 5.7 2.3 12.9-1.1 16.7.2.8.3 1.9 0 3.2-.1.7-.3 1.4-.6 2.2-.2.5-.3 1-.5 1.5h-.3c-4.5.6-7.1.2-8.3-.1.5-1.6 1.7-3.3 3.7-3.2-.1-3.7-1.1-5-2-7.6 1.3-3 1.3-5.7 2-9.2v-.2c.2-.8.3-1.6.6-2.5-.4.5-.8 1.5-1.2 2.6v.1c-.5 1.5-.9 3.4-1.2 4.8-.2.8-.4 1.6-.7 2.4-.2.5-.4.9-.6 1.4-1.5 1.9-3 3.9-5.5 5.6zm18.5 24.9c1.5 1.1 4.7 1.8 5.5 2.3l.3.3c.1.1.1.2.1.3-.1.4-.7.7-1.9.9-.5.1-.9.1-1.4.1-1.3 0-2.6-.2-5.1-.5-3.4-.5-5.2-.4-8.6-.4-.3 0-.6 0-.9-.1-.2 0-.4-.1-.5-.1-.6-.2-1-.5-1.2-.8-.1-.2-.1-.3-.1-.5-.1-.7.2-1.5.6-2.3.2-.4.3-.7.4-1 .5-1.3.4-2.1.2-4.9 0-.2-.1-.4-.1-.7-.2-1.3-.5-2.3-.8-3.1-.4-1.1-.9-1.9-1.2-3-.6-2.1-1-4.3-.6-4.8H62.5c.2.1.5.2.9.3.5.1 1.1.2 2 .3 2.2.2 5.1-.2 6.6-.4.3-.1.6-.1.8-.1h.4c.4 0 .1.6-.1 1.2-.1.7-.5 3.3-.8 5.1-.3 1.8-.2 7.1-.1 8.8v.1c0 .3 1.9 1.2 3.5 2.1.7.2 1.4.5 1.8.9zm4.8-48.2c0 .1 0 .1 0 0-.1.1-.2.2-.2.3 0-.1-.1-.1-.1-.2 0 .1 0 .2-.1.2-.2.9-.6 2.4-2.2 4.1-.4.4-.7.6-1 .7-.5.1-.9 0-1.5-.1-.9-.2-1.3-.6-2.2-1.1-.1-.6-.3-1.3-.4-1.8 0-.3-.1-.5-.1-.6v-1l.4-.4s.7-1 1.8-1 2.2-.2 2.5-.5v-.1-.3c0-.1 0-.2-.1-.3-.4-1.4-2.1-1.8-1.4-4.8 0-.2.3-.5 1.2-.5-1.4-.3-2-.4-3-1.3.5-1.1 1-1.9 1.3-2.6.8-1.5.3-3.5.3-3.5.8-.3 1.6-.7 1.7-1 .9-2.8-.7-5.5-2.5-7.2 1.2-.1 2.6.1 3.6 1.1 2.4 2.4 1.8 5 1 6.8.6.7 2.1 2.9 1.2 5.3-.2.6-1.4.6-2.3 2.1 2.3-1.3 3.7-1 4.2.7 1 2.4-.6 5.3-2.1 7z"/><path d="M22 53.4v-.2c0-.2-.1-.5-.2-.9s-.1-.8-.2-1.3c-.5-4.7-1.9-9.4-4.9-11.3 3.7-2 16.8-8.5 21.9-10.5 2.9-1.2.8-.4-.2 1.4-.8 1.4-.3 2.9-.5 3.2-.6.8-12.6 10.5-15.9 19.6zm32.2-2.3c-3.4 3.8-12 11-18.2 11.4 8.7-.2 12.2 4.1 14.7 9.7 2.6-5.2 2.7-10.3 2.6-16.1 0-2.6 1.8-6 .9-5zm5.3-23L54.3 24s-1.1 3.1-1 4.6c.1 1.6-1.8 2.7-.9 3.6.9.9 3.2 2.5 4 3.4.7.9 1.1 7.1 1.1 7.1l2.2 2.7s1-1.8 1.1-6.3c.2-5.4-2.9-7.1-3.3-8.6-.4-1.4.6-2.9 2-2.4zm3.1 45.6l3.9.3s1.2-2.2 2.1-3.5c.9-1.4.4-1.6 0-4.6-.4-3-1.4-9.3-1.2-13.6l-3.1 10.2s1.8 5.6 1.6 6.4c-.1.8-3.3 4.8-3.3 4.8zm5 18.8c-1.1 0-2.5-.4-3.5-.8l-1 .3.2 4s5.2.7 4.6-.4c-.6-1.2-.3-3.1-.3-3.1zm12 .6c-1 0-.3.2.4 1.2.8 1 .1 2-.8 2.3l3.2.5 1.9-1.7c.1 0-3.7-2.3-4.7-2.3zM73 76c-1.6.5-4.2.8-5.9.8-1.7.1-3.7-.1-5-.5v1.4s1.2.5 5.4.5c3.5.1 5.7-.8 5.7-.8l.9-.8c-.1.1.5-1.1-1.1-.6zm-.2 3.1c-1.6.6-3.9.6-5.6.7-1.7.1-3.7-.1-5-.5l.1 1.4s.7.3 4.9.4c3.5.1 5.7-.7 5.7-.7l.3-.5c-.1-.1.3-1-.4-.8zm5.9-42.7c-.9-.8-1.4-2.4-1.5-3.3l-1.9 2.5.7 1.2s2.5.1 2.8.1c.4 0 .3-.1-.1-.5zM69 14.7c.6-.7.2-2.7.2-2.7L66 14.6l-4.4-.8-.5-1.3-1.3-.1c.8 1.8 1.8 2.5 3.3 3.1.9.4 4.5.9 5.9-.8z" style=opacity:.4;fill-rule:evenodd;clip-rule:evenodd /></svg></a></div></div>',
            e && (n.style.position = "absolute",
            n.style.top = t ? "calc(100% - 42px)" : "calc(100% - 51px)"),
            o && (rb(o) ? n.style.cssText = o : function _isObject(e) {
                return "object" == typeof e
            }(o) && (o.data = "root",
            K.set(n, o).kill()),
            n.style.top && (n.style.bottom = "auto"),
            n.style.width && K.set(n, {
                xPercent: -50,
                left: "50%",
                right: "auto",
                data: "root"
            }).kill()),
            !t && n.offsetWidth < 600 && (n.setAttribute("class", "gs-dev-tools minimal"),
            e && (n.style.top = "calc(100% - 42px)")),
            n
        }(r.container, r.minimal, r.css), x = Tn(".playhead"), y = Tn(".timeline-track"), b = Tn(".progress-bar"), w = Tn(".time"), T = Tn(".duration"), _ = 0, M = Tn(".in-point"), k = Tn(".out-point"), D = 0, S = 100, E = Tn(".animation-list"), L = Tn(".animation-label"), t = Tn(".play-pause"), o = function _buildPlayPauseMorph(e) {
            var t = K.timeline({
                data: "root",
                parent: ie,
                onComplete: function onComplete() {
                    return t.kill()
                }
            }, ie._time);
            return t.to(e.querySelector(".play-1"), {
                duration: .4,
                attr: {
                    d: "M5.75,3.13 C5.75,9.79 5.75,16.46 5.75,23.13 4.08,23.13 2.41,23.13 0.75,23.13 0.75,16.46 0.75,9.79 0.75,3.12 2.41,3.12 4.08,3.12 5.75,3.12"
                },
                ease: "power2.inOut",
                rotation: 360,
                transformOrigin: "50% 50%"
            }).to(e.querySelector(".play-2"), {
                duration: .4,
                attr: {
                    d: "M16.38,3.13 C16.38,9.79 16.38,16.46 16.38,23.13 14.71,23.13 13.04,23.13 11.38,23.13 11.38,16.46 11.38,9.79 11.38,3.12 13.04,3.12 14.71,3.12 16.38,3.12"
                },
                ease: "power2.inOut",
                rotation: 360,
                transformOrigin: "50% 50%"
            }, .05),
            t
        }(t), P = !1, C = Tn(".loop"), O = function _buildLoopAnimation(e) {
            var t = K.timeline({
                data: "root",
                id: "loop",
                parent: ie,
                paused: !0,
                onComplete: function onComplete() {
                    return t.kill()
                }
            }, ie._time);
            return t.to(e, {
                duration: .5,
                rotation: 360,
                ease: "power3.inOut",
                transformOrigin: "50% 50%"
            }).to(e.querySelectorAll(".loop-path"), {
                duration: .5,
                fill: "#91e600",
                ease: "none"
            }, 0),
            t
        }(C), X = Tn(".time-scale select"), N = Tn(".time-scale-label"), z = U.create(x, {
            type: "x",
            cursor: "ew-resize",
            allowNativeTouchScrolling: !1,
            allowEventDefault: !0,
            onPress: Bo(x, .5, !0),
            onDrag: function onDrag() {
                var e = g + u * this.x;
                e < 0 ? e = 0 : e > v._dur && (e = v._dur),
                f || v.time(e),
                b.style.width = Math.min(S - D, Math.max(0, e / v._dur * 100 - D)) + "%",
                w.innerHTML = e.toFixed(2)
            },
            onRelease: function onRelease() {
                P || v.resume()
            }
        })[0], R = U.create(M, {
            type: "x",
            cursor: "ew-resize",
            zIndexBoost: !1,
            allowNativeTouchScrolling: !1,
            allowEventDefault: !0,
            onPress: Bo(M, 1, !0),
            onDoubleClick: Do,
            onDrag: function onDrag() {
                D = (g + u * this.x) / v.duration() * 100,
                v.progress(D / 100),
                H(!0)
            },
            onRelease: function onRelease() {
                D < 0 && (D = 0),
                Cb(),
                M.style.left = D + "%",
                Un("in", D),
                K.set(M, {
                    x: 0,
                    data: "root",
                    display: "block"
                }),
                P || v.resume()
            }
        })[0], Y = U.create(k, {
            type: "x",
            cursor: "ew-resize",
            allowNativeTouchScrolling: !1,
            allowEventDefault: !0,
            zIndexBoost: !1,
            onPress: Bo(k, 0, !0),
            onDoubleClick: Do,
            onDrag: function onDrag() {
                S = (g + u * this.x) / v.duration() * 100,
                v.progress(S / 100),
                H(!0)
            },
            onRelease: function onRelease() {
                100 < S && (S = 100),
                Cb(),
                k.style.left = S + "%",
                Un("out", S),
                K.set(k, {
                    x: 0,
                    data: "root",
                    display: "block"
                }),
                m || (B(),
                v.resume())
            }
        })[0], H = function updateProgress(e) {
            if (!z.isPressed || !0 === e) {
                var t, o = d || -1 !== i._repeat ? 100 * v.progress() || 0 : i.totalTime() / i.duration() * 100, n = i._repeat && i._rDelay && i.totalTime() % (i.duration() + i._rDelay) > i.duration();
                100 < o && (o = 100),
                S <= o ? !d || v.paused() || z.isDragging ? (o === S && -1 !== i._repeat || (o = S,
                v.progress(o / 100)),
                !P && (S < 100 || 1 === i.totalProgress() || -1 === i._repeat) && A()) : n || (o = D,
                (t = v._targets && v._targets[0]) === i && t.seek(s + (l - s) * D / 100),
                0 < i._repeat && !D && 100 === S ? 1 === i.totalProgress() && v.totalProgress(0, !0).resume() : v.progress(o / 100, !0).resume()) : o < D && (o = D,
                v.progress(o / 100, !0)),
                o === _ && !0 !== e || (b.style.left = D + "%",
                b.style.width = Math.max(0, o - D) + "%",
                x.style.left = o + "%",
                w.innerHTML = v._time.toFixed(2),
                T.innerHTML = v._dur.toFixed(2),
                h && (x.style.transform = "translate(-50%,0)",
                x._gsap.x = "0px",
                x._gsap.xPercent = -50,
                h = !1),
                _ = o),
                v.paused() !== P && I()
            }
        }, B = function play() {
            if (v.progress() >= S / 100) {
                Tb(v, r);
                var e = v._targets && v._targets[0];
                e === i && e.seek(s + (l - s) * D / 100),
                v._repeat && !D ? v.totalProgress(0, !0) : v.reversed() || v.progress(D / 100, !0)
            }
            o.play(),
            v.resume(),
            P && p.update(),
            P = !1
        }, A = function pause() {
            o.reverse(),
            v && v.pause(),
            P = !0
        }, I = function togglePlayPause() {
            (P ? B : A)()
        }, F = K.to([Tn(".gs-bottom"), Tn(".gs-top")], {
            duration: .3,
            autoAlpha: 0,
            y: 50,
            ease: "power2.in",
            data: "root",
            paused: !0,
            parent: ie
        }, ie._time), G = !1, V = re(1.3, Wo).pause();
        Kb(E, "change", Ro),
        Kb(E, "mousedown", Oo),
        Kb(t, "mousedown", I),
        Kb(Tn(".seek-bar"), "mousedown", Ho),
        Kb(Tn(".rewind"), "mousedown", Lo),
        Kb(C, "mousedown", No),
        Kb(X, "change", So),
        "auto" === r.visibility ? (Kb(n, "mouseout", Vo),
        Kb(n, "mouseover", Xo)) : "hidden" === r.visibility && (G = !0,
        F.progress(1)),
        !1 !== r.keyboard && (ne && r.keyboard ? console.warn("[GSDevTools warning] only one instance can be affected by keyboard shortcuts. There is already one active.") : (ne = p,
        Kb(J, "keydown", e = function keyboardHandler(e) {
            var t, o = e.keyCode ? e.keyCode : e.which;
            32 === o ? I() : 38 === o ? (t = parseFloat(Nb(X, -1, N)),
            v.timeScale(t),
            Un("timeScale", t)) : 40 === o ? (t = parseFloat(Nb(X, 1, N)),
            v.timeScale(t),
            Un("timeScale", t)) : 37 === o ? Lo() : 39 === o ? v.progress(S / 100) : 76 === o ? No() : 72 === o ? function toggleHide() {
                (G ? Xo : Wo)()
            }() : 73 === o ? (D = 100 * v.progress(),
            Un("in", D),
            M.style.left = D + "%",
            H(!0)) : 79 === o && (S = 100 * v.progress(),
            Un("out", S),
            k.style.left = S + "%",
            H(!0))
        }
        ))),
        K.set(x, {
            xPercent: -50,
            x: 0,
            data: "root"
        }),
        K.set(M, {
            xPercent: -100,
            x: 0,
            data: "root"
        }),
        M._gsIgnore = k._gsIgnore = x._gsIgnore = t._gsIgnore = C._gsIgnore = !0,
        K.killTweensOf([M, k, x]),
        $o(se),
        se && re(1e-4, $o, [!1], this),
        K.ticker.add(H),
        this.update = function(e) {
            oe === p && (te.paused() && !e || Ob(),
            function updateRootDuration() {
                var e, t, o;
                i === Q && (e = Q._time,
                Q.progress(1, !0).time(e, !0),
                e = (te._dp._time - te._start) * te._ts,
                1e3 === (o = Math.min(1e3, Q.duration())) && (o = Math.min(1e3, Eb(Q))),
                1 != (t = te.duration() / o) && o && (D *= t,
                S < 100 && (S *= t),
                te.seek(0),
                te.vars.time = o,
                te.invalidate(),
                te.duration(o),
                te.time(e),
                T.innerHTML = o.toFixed(2),
                M.style.left = D + "%",
                k.style.left = S + "%",
                H(!0)))
            }())
        }
        ,
        this.kill = function() {
            Lb(E, "change", Ro),
            Lb(E, "mousedown", Oo),
            Lb(t, "mousedown", I),
            Lb(Tn(".seek-bar"), "mousedown", Ho),
            Lb(Tn(".rewind"), "mousedown", Lo),
            Lb(C, "mousedown", No),
            Lb(X, "change", So),
            z.disable(),
            R.disable(),
            Y.disable(),
            K.ticker.remove(H),
            Lb(n, "mouseout", Vo),
            Lb(n, "mouseover", Xo),
            n.parentNode.removeChild(n),
            oe === p && (oe = null),
            ne === p && (ne = null,
            Lb(J, "keydown", e)),
            delete de[r.id + ""]
        }
        ,
        this.minimal = function(e) {
            var t, o = n.classList.contains("minimal");
            if (!arguments.length || o === e)
                return o;
            e ? n.classList.add("minimal") : n.classList.remove("minimal"),
            r.container && (n.style.top = e ? "calc(100% - 42px)" : "calc(100% - 51px)"),
            z.isPressed && (f = !0,
            z.endDrag(z.pointerEvent),
            f = !1,
            t = 100 * v.progress(),
            b.style.width = Math.max(0, t - D) + "%",
            x.style.left = t + "%",
            x.style.transform = "translate(-50%,0)",
            x._gsap.x = "0px",
            x._gsap.xPercent = -50,
            z.startDrag(z.pointerEvent, !0))
        }
        ,
        this.animation = Po,
        this.updateList = Oo
    };
    ue.version = "3.10.4",
    ue.globalRecordingTime = 2,
    ue.getById = function(e) {
        return e ? de[e] : oe
    }
    ,
    ue.getByAnimation = function(e) {
        for (var t in rb(e) && (e = K.getById(e)),
        de)
            if (de[t].animation() === e)
                return de[t]
    }
    ,
    ue.create = function(e) {
        return new ue(e)
    }
    ,
    ue.register = Sb,
    qb() && K.registerPlugin(ue),
    e.GSDevTools = ue,
    e.default = ue;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});