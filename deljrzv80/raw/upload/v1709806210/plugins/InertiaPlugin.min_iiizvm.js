/*!
 * InertiaPlugin 3.10.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";
    function m() {
        return i || "undefined" != typeof window && (i = window.gsap)
    }
    function p(t) {
        return c(t).id
    }
    function q(t) {
        return f[p("string" == typeof t ? g(t)[0] : t)]
    }
    function r(t) {
        var e, r = o;
        if (.05 <= t - s)
            for (s = t; r; )
                ((e = r.g(r.t, r.p)) !== r.v1 || .2 < t - r.t1) && (r.v2 = r.v1,
                r.v1 = e,
                r.t2 = r.t1,
                r.t1 = t),
                r = r._next
    }
    function t() {
        (i = m()) && (g = i.utils.toArray,
        n = i.utils.getUnit,
        c = i.core.getCache,
        a = i.ticker,
        l = 1)
    }
    function u(t, e, r, i) {
        this.t = t,
        this.p = e,
        this.g = t._gsap.get,
        this.rCap = d[r || n(this.g(t, e))],
        this.v1 = this.v2 = 0,
        this.t1 = this.t2 = a.time,
        i && ((this._next = i)._prev = this)
    }
    var i, l, g, n, o, a, s, c, f = {}, d = {
        deg: 360,
        rad: 2 * Math.PI
    }, v = function() {
        function VelocityTracker(e, r) {
            l || t(),
            this.target = g(e)[0],
            (f[p(this.target)] = this)._props = {},
            r && this.add(r)
        }
        VelocityTracker.register = function register(e) {
            i = e,
            t()
        }
        ;
        var e = VelocityTracker.prototype;
        return e.get = function get(t, e) {
            var r, i, n = this._props[t] || console.warn("Not tracking " + t + " velocity.");
            return r = parseFloat(e ? n.v1 : n.g(n.t, n.p)) - parseFloat(n.v2),
            (i = n.rCap) && (r %= i) !== r % (i / 2) && (r = r < 0 ? r + i : r - i),
            function _round(t) {
                return Math.round(1e4 * t) / 1e4
            }(r / ((e ? n.t1 : a.time) - n.t2))
        }
        ,
        e.getAll = function getAll() {
            var t, e = {}, r = this._props;
            for (t in r)
                e[t] = this.get(t);
            return e
        }
        ,
        e.isTracking = function isTracking(t) {
            return t in this._props
        }
        ,
        e.add = function add(t, e) {
            t in this._props || (o || (a.add(r),
            s = a.time),
            o = this._props[t] = new u(this.target,t,e,o))
        }
        ,
        e.remove = function remove(t) {
            var e, i, n = this._props[t];
            n && (e = n._prev,
            i = n._next,
            e && (e._next = i),
            i ? i._prev = e : o === n && (a.remove(r),
            o = 0),
            delete this._props[t])
        }
        ,
        e.kill = function kill(t) {
            for (var e in this._props)
                this.remove(e);
            t || delete f[p(this.target)]
        }
        ,
        VelocityTracker.track = function track(e, r, i) {
            l || t();
            for (var n, o, a = [], s = g(e), c = r.split(","), u = (i || "").split(","), f = s.length; f--; ) {
                for (n = q(s[f]) || new VelocityTracker(s[f]),
                o = c.length; o--; )
                    n.add(c[o], u[o] || u[0]);
                a.push(n)
            }
            return a
        }
        ,
        VelocityTracker.untrack = function untrack(t, e) {
            var r = (e || "").split(",");
            g(t).forEach(function(t) {
                var e = q(t);
                e && (r.length ? r.forEach(function(t) {
                    return e.remove(t)
                }) : e.kill(1))
            })
        }
        ,
        VelocityTracker.isTracking = function isTracking(t, e) {
            var r = q(t);
            return r && r.isTracking(e)
        }
        ,
        VelocityTracker.getVelocity = function getVelocity(t, e) {
            var r = q(t);
            return r && r.isTracking(e) ? r.get(e) : console.warn("Not tracking velocity of " + e)
        }
        ,
        VelocityTracker
    }();
    v.getByTarget = q,
    m() && i.registerPlugin(v);
    function J() {
        return h || "undefined" != typeof window && (h = window.gsap) && h.registerPlugin && h
    }
    function L(t) {
        return "number" == typeof t
    }
    function M(t) {
        return "object" == typeof t
    }
    function N(t) {
        return "function" == typeof t
    }
    function Q(t) {
        return t
    }
    function U(t) {
        return Math.round(1e4 * t) / 1e4
    }
    function V(t, e, r) {
        for (var i in e)
            i in t || i === r || (t[i] = e[i]);
        return t
    }
    function W(t) {
        var e, r, i = {};
        for (e in t)
            i[e] = M(r = t[e]) && !w(r) ? W(r) : r;
        return i
    }
    function X(t, e, r, i, n) {
        var o, a, s, c, u = e.length, f = 0, l = B;
        if (M(t)) {
            for (; u--; ) {
                for (s in o = e[u],
                a = 0,
                t)
                    a += (c = o[s] - t[s]) * c;
                a < l && (f = u,
                l = a)
            }
            if ((n || B) < B && n < Math.sqrt(l))
                return t
        } else
            for (; u--; )
                (a = (o = e[u]) - t) < 0 && (a = -a),
                a < l && i <= o && o <= r && (f = u,
                l = a);
        return e[f]
    }
    function Y(t, e, r, i, n, o, a) {
        if ("auto" === t.end)
            return t;
        var s, c, u = t.end;
        if (r = isNaN(r) ? B : r,
        i = isNaN(i) ? -B : i,
        M(e)) {
            if (s = e.calculated ? e : (N(u) ? u(e, a) : X(e, u, r, i, o)) || e,
            !e.calculated) {
                for (c in s)
                    e[c] = s[c];
                e.calculated = !0
            }
            s = s[n]
        } else
            s = N(u) ? u(e, a) : w(u) ? X(e, u, r, i, o) : parseFloat(u);
        return r < s ? s = r : s < i && (s = i),
        {
            max: s,
            min: s,
            unitFactor: t.unitFactor
        }
    }
    function Z(t, e, r) {
        return isNaN(t[e]) ? r : +t[e]
    }
    function $(t, e) {
        return .05 * e * t / T
    }
    function _(t, e, r) {
        return Math.abs((e - t) * T / r / .05)
    }
    function ba(t, e, r, i) {
        if (e.linkedProps) {
            var n, o, a, s, c, u, f = e.linkedProps.split(","), l = {};
            for (n = 0; n < f.length; n++)
                (a = e[o = f[n]]) && (s = L(a.velocity) ? a.velocity : (c = c || j(t)) && c.isTracking(o) ? c.get(o) : 0,
                u = Math.abs(s / Z(a, "resistance", i)),
                l[o] = parseFloat(r(t, o)) + $(s, u));
            return l
        }
    }
    function da() {
        (h = J()) && (y = h.parseEase,
        F = h.utils.toArray,
        b = h.utils.getUnit,
        O = h.core.getCache,
        E = h.utils.clamp,
        k = y("power3"),
        T = k(.05),
        A = h.core.PropTween,
        h.config({
            resistance: 100,
            unitFactors: {
                time: 1e3,
                totalTime: 1e3,
                progress: 1e3,
                totalProgress: 1e3
            }
        }),
        P = h.config(),
        h.registerPlugin(v),
        x = 1)
    }
    var h, x, y, F, k, P, b, A, O, T, E, C, j = v.getByTarget, w = Array.isArray, B = 1e10, I = {
        resistance: 1,
        checkpoint: 1,
        preventOvershoot: 1,
        linkedProps: 1,
        radius: 1,
        duration: 1
    }, R = {
        version: "3.10.4",
        name: "inertia",
        register: function register(t) {
            h = t,
            da()
        },
        init: function init(t, e, r, i, n) {
            x || da();
            var o = j(t);
            if ("auto" === e) {
                if (!o)
                    return void console.warn("No inertia tracking on " + t + ". InertiaPlugin.track(target) first.");
                e = o.getAll()
            }
            this.target = t,
            this.tween = r,
            C = e;
            var a, s, c, u, f, l, p, g, d, v = t._gsap, h = v.get, m = e.duration, y = M(m), k = e.preventOvershoot || y && 0 === m.overshoot, T = Z(e, "resistance", P.resistance), w = L(m) ? m : function _calculateTweenDuration(t, e, r, i, n, o) {
                if (void 0 === r && (r = 10),
                void 0 === i && (i = .2),
                void 0 === n && (n = 1),
                void 0 === o && (o = 0),
                function _isString(t) {
                    return "string" == typeof t
                }(t) && (t = F(t)[0]),
                !t)
                    return 0;
                var a, s, c, u, f, l, p, g, d, v, h = 0, m = B, y = e.inertia || e, k = O(t).get, T = Z(y, "resistance", P.resistance);
                for (a in v = ba(t, y, k, T),
                y)
                    I[a] || (s = y[a],
                    M(s) || ((g = g || j(t)) && g.isTracking(a) ? s = L(s) ? {
                        velocity: s
                    } : {
                        velocity: g.get(a)
                    } : (u = +s || 0,
                    c = Math.abs(u / T))),
                    M(s) && (u = L(s.velocity) ? s.velocity : (g = g || j(t)) && g.isTracking(a) ? g.get(a) : 0,
                    c = E(i, r, Math.abs(u / Z(s, "resistance", T))),
                    l = (f = parseFloat(k(t, a)) || 0) + $(u, c),
                    "end"in s && (s = Y(s, v && a in v ? v : l, s.max, s.min, a, y.radius, u),
                    o && (C === e && (C = y = W(e)),
                    y[a] = V(s, y[a], "end"))),
                    "max"in s && l > +s.max + 1e-10 ? (d = s.unitFactor || P.unitFactors[a] || 1,
                    (p = f > s.max && s.min !== s.max || -15 < u * d && u * d < 45 ? i + .1 * (r - i) : _(f, s.max, u)) + n < m && (m = p + n)) : "min"in s && l < s.min - 1e-10 && (d = s.unitFactor || P.unitFactors[a] || 1,
                    (p = f < s.min && s.min !== s.max || -45 < u * d && u * d < 15 ? i + .1 * (r - i) : _(f, s.min, u)) + n < m && (m = p + n)),
                    h < p && (h = p)),
                    h < c && (h = c));
                return m < h && (h = m),
                r < h ? r : h < i ? i : h
            }(t, e, y && m.max || 10, y && m.min || .2, y && "overshoot"in m ? +m.overshoot : k ? 0 : 1, !0);
            for (a in e = C,
            C = 0,
            d = ba(t, e, h, T),
            e)
                I[a] || (s = e[a],
                N(s) && (s = s(i, t, n)),
                L(s) ? f = s : M(s) && !isNaN(s.velocity) ? f = +s.velocity : o && o.isTracking(a) ? f = o.get(a) : console.warn("ERROR: No velocity was defined for " + t + " property: " + a),
                l = $(f, w),
                g = 0,
                c = h(t, a),
                u = b(c),
                c = parseFloat(c),
                M(s) && (p = c + l,
                "end"in s && (s = Y(s, d && a in d ? d : p, s.max, s.min, a, e.radius, f)),
                "max"in s && +s.max < p ? k || s.preventOvershoot ? l = s.max - c : g = s.max - c - l : "min"in s && +s.min > p && (k || s.preventOvershoot ? l = s.min - c : g = s.min - c - l)),
                this._props.push(a),
                this._pt = new A(this._pt,t,a,c,0,Q,0,v.set(t, a, this)),
                this._pt.u = u || 0,
                this._pt.c1 = l,
                this._pt.c2 = g);
            return r.duration(w),
            1
        },
        render: function render(t, e) {
            var r = e._pt;
            for (t = k(e.tween._time / e.tween._dur); r; )
                r.set(r.t, r.p, U(r.s + r.c1 * t + r.c2 * t * t) + r.u, r.d, t),
                r = r._next
        }
    };
    "track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(t) {
        return R[t] = v[t]
    }),
    J() && h.registerPlugin(R),
    e.InertiaPlugin = R,
    e.VelocityTracker = v,
    e.default = R;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});