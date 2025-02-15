import {r as j, ae as z, af as R, w as D, ag as I, ah as H, L as K, n as B, u as V} from "./Dsfj8rDd.js";
const S = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function J(r, i) {
    if (typeof r != "string")
        throw new TypeError("argument str must be a string");
    const n = {}
      , e = (i || {}).decode || X;
    let o = 0;
    for (; o < r.length; ) {
        const s = r.indexOf("=", o);
        if (s === -1)
            break;
        let a = r.indexOf(";", o);
        if (a === -1)
            a = r.length;
        else if (a < s) {
            o = r.lastIndexOf(";", s - 1) + 1;
            continue
        }
        const c = r.slice(o, s).trim();
        if (n[c] === void 0) {
            let u = r.slice(s + 1, a).trim();
            u.codePointAt(0) === 34 && (u = u.slice(1, -1)),
            n[c] = q(u, e)
        }
        o = a + 1
    }
    return n
}
function x(r, i, n) {
    const t = n || {}
      , e = t.encode || Y;
    if (typeof e != "function")
        throw new TypeError("option encode is invalid");
    if (!S.test(r))
        throw new TypeError("argument name is invalid");
    const o = e(i);
    if (o && !S.test(o))
        throw new TypeError("argument val is invalid");
    let s = r + "=" + o;
    if (t.maxAge !== void 0 && t.maxAge !== null) {
        const a = t.maxAge - 0;
        if (Number.isNaN(a) || !Number.isFinite(a))
            throw new TypeError("option maxAge is invalid");
        s += "; Max-Age=" + Math.floor(a)
    }
    if (t.domain) {
        if (!S.test(t.domain))
            throw new TypeError("option domain is invalid");
        s += "; Domain=" + t.domain
    }
    if (t.path) {
        if (!S.test(t.path))
            throw new TypeError("option path is invalid");
        s += "; Path=" + t.path
    }
    if (t.expires) {
        if (!W(t.expires) || Number.isNaN(t.expires.valueOf()))
            throw new TypeError("option expires is invalid");
        s += "; Expires=" + t.expires.toUTCString()
    }
    if (t.httpOnly && (s += "; HttpOnly"),
    t.secure && (s += "; Secure"),
    t.priority)
        switch (typeof t.priority == "string" ? t.priority.toLowerCase() : t.priority) {
        case "low":
            s += "; Priority=Low";
            break;
        case "medium":
            s += "; Priority=Medium";
            break;
        case "high":
            s += "; Priority=High";
            break;
        default:
            throw new TypeError("option priority is invalid")
        }
    if (t.sameSite)
        switch (typeof t.sameSite == "string" ? t.sameSite.toLowerCase() : t.sameSite) {
        case !0:
            s += "; SameSite=Strict";
            break;
        case "lax":
            s += "; SameSite=Lax";
            break;
        case "strict":
            s += "; SameSite=Strict";
            break;
        case "none":
            s += "; SameSite=None";
            break;
        default:
            throw new TypeError("option sameSite is invalid")
        }
    return s
}
function W(r) {
    return Object.prototype.toString.call(r) === "[object Date]" || r instanceof Date
}
function q(r, i) {
    try {
        return i(r)
    } catch {
        return r
    }
}
function X(r) {
    return r.includes("%") ? decodeURIComponent(r) : r
}
function Y(r) {
    return encodeURIComponent(r)
}
const C = Object.freeze({
    ignoreUnknown: !1,
    respectType: !1,
    respectFunctionNames: !1,
    respectFunctionProperties: !1,
    unorderedObjects: !0,
    unorderedArrays: !1,
    unorderedSets: !1,
    excludeKeys: void 0,
    excludeValues: void 0,
    replacer: void 0
});
function _(r, i) {
    i ? i = {
        ...C,
        ...i
    } : i = C;
    const n = N(i);
    return n.dispatch(r),
    n.toString()
}
const $ = Object.freeze(["prototype", "__proto__", "constructor"]);
function N(r) {
    let i = ""
      , n = new Map;
    const t = e=>{
        i += e
    }
    ;
    return {
        toString() {
            return i
        },
        getContext() {
            return n
        },
        dispatch(e) {
            return r.replacer && (e = r.replacer(e)),
            this[e === null ? "null" : typeof e](e)
        },
        object(e) {
            if (e && typeof e.toJSON == "function")
                return this.object(e.toJSON());
            const o = Object.prototype.toString.call(e);
            let s = "";
            const a = o.length;
            a < 10 ? s = "unknown:[" + o + "]" : s = o.slice(8, a - 1),
            s = s.toLowerCase();
            let c = null;
            if ((c = n.get(e)) === void 0)
                n.set(e, n.size);
            else
                return this.dispatch("[CIRCULAR:" + c + "]");
            if (typeof Buffer < "u" && Buffer.isBuffer && Buffer.isBuffer(e))
                return t("buffer:"),
                t(e.toString("utf8"));
            if (s !== "object" && s !== "function" && s !== "asyncfunction")
                this[s] ? this[s](e) : r.ignoreUnknown || this.unkown(e, s);
            else {
                let u = Object.keys(e);
                r.unorderedObjects && (u = u.sort());
                let f = [];
                r.respectType !== !1 && !A(e) && (f = $),
                r.excludeKeys && (u = u.filter(l=>!r.excludeKeys(l)),
                f = f.filter(l=>!r.excludeKeys(l))),
                t("object:" + (u.length + f.length) + ":");
                const h = l=>{
                    this.dispatch(l),
                    t(":"),
                    r.excludeValues || this.dispatch(e[l]),
                    t(",")
                }
                ;
                for (const l of u)
                    h(l);
                for (const l of f)
                    h(l)
            }
        },
        array(e, o) {
            if (o = o === void 0 ? r.unorderedArrays !== !1 : o,
            t("array:" + e.length + ":"),
            !o || e.length <= 1) {
                for (const c of e)
                    this.dispatch(c);
                return
            }
            const s = new Map
              , a = e.map(c=>{
                const u = N(r);
                u.dispatch(c);
                for (const [f,h] of u.getContext())
                    s.set(f, h);
                return u.toString()
            }
            );
            return n = s,
            a.sort(),
            this.array(a, !1)
        },
        date(e) {
            return t("date:" + e.toJSON())
        },
        symbol(e) {
            return t("symbol:" + e.toString())
        },
        unkown(e, o) {
            if (t(o),
            !!e && (t(":"),
            e && typeof e.entries == "function"))
                return this.array(Array.from(e.entries()), !0)
        },
        error(e) {
            return t("error:" + e.toString())
        },
        boolean(e) {
            return t("bool:" + e)
        },
        string(e) {
            t("string:" + e.length + ":"),
            t(e)
        },
        function(e) {
            t("fn:"),
            A(e) ? this.dispatch("[native]") : this.dispatch(e.toString()),
            r.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(e.name)),
            r.respectFunctionProperties && this.object(e)
        },
        number(e) {
            return t("number:" + e)
        },
        xml(e) {
            return t("xml:" + e.toString())
        },
        null() {
            return t("Null")
        },
        undefined() {
            return t("Undefined")
        },
        regexp(e) {
            return t("regex:" + e.toString())
        },
        uint8array(e) {
            return t("uint8array:"),
            this.dispatch(Array.prototype.slice.call(e))
        },
        uint8clampedarray(e) {
            return t("uint8clampedarray:"),
            this.dispatch(Array.prototype.slice.call(e))
        },
        int8array(e) {
            return t("int8array:"),
            this.dispatch(Array.prototype.slice.call(e))
        },
        uint16array(e) {
            return t("uint16array:"),
            this.dispatch(Array.prototype.slice.call(e))
        },
        int16array(e) {
            return t("int16array:"),
            this.dispatch(Array.prototype.slice.call(e))
        },
        uint32array(e) {
            return t("uint32array:"),
            this.dispatch(Array.prototype.slice.call(e))
        },
        int32array(e) {
            return t("int32array:"),
            this.dispatch(Array.prototype.slice.call(e))
        },
        float32array(e) {
            return t("float32array:"),
            this.dispatch(Array.prototype.slice.call(e))
        },
        float64array(e) {
            return t("float64array:"),
            this.dispatch(Array.prototype.slice.call(e))
        },
        arraybuffer(e) {
            return t("arraybuffer:"),
            this.dispatch(new Uint8Array(e))
        },
        url(e) {
            return t("url:" + e.toString())
        },
        map(e) {
            t("map:");
            const o = [...e];
            return this.array(o, r.unorderedSets !== !1)
        },
        set(e) {
            t("set:");
            const o = [...e];
            return this.array(o, r.unorderedSets !== !1)
        },
        file(e) {
            return t("file:"),
            this.dispatch([e.name, e.size, e.type, e.lastModfied])
        },
        blob() {
            if (r.ignoreUnknown)
                return t("[blob]");
            throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)
        },
        domwindow() {
            return t("domwindow")
        },
        bigint(e) {
            return t("bigint:" + e.toString())
        },
        process() {
            return t("process")
        },
        timer() {
            return t("timer")
        },
        pipe() {
            return t("pipe")
        },
        tcp() {
            return t("tcp")
        },
        udp() {
            return t("udp")
        },
        tty() {
            return t("tty")
        },
        statwatcher() {
            return t("statwatcher")
        },
        securecontext() {
            return t("securecontext")
        },
        connection() {
            return t("connection")
        },
        zlib() {
            return t("zlib")
        },
        context() {
            return t("context")
        },
        nodescript() {
            return t("nodescript")
        },
        httpparser() {
            return t("httpparser")
        },
        dataview() {
            return t("dataview")
        },
        signal() {
            return t("signal")
        },
        fsevent() {
            return t("fsevent")
        },
        tlswrap() {
            return t("tlswrap")
        }
    }
}
const M = "[native code] }"
  , G = M.length;
function A(r) {
    return typeof r != "function" ? !1 : Function.prototype.toString.call(r).slice(-G) === M
}
class p {
    constructor(i, n) {
        i = this.words = i || [],
        this.sigBytes = n === void 0 ? i.length * 4 : n
    }
    toString(i) {
        return (i || Q).stringify(this)
    }
    concat(i) {
        if (this.clamp(),
        this.sigBytes % 4)
            for (let n = 0; n < i.sigBytes; n++) {
                const t = i.words[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                this.words[this.sigBytes + n >>> 2] |= t << 24 - (this.sigBytes + n) % 4 * 8
            }
        else
            for (let n = 0; n < i.sigBytes; n += 4)
                this.words[this.sigBytes + n >>> 2] = i.words[n >>> 2];
        return this.sigBytes += i.sigBytes,
        this
    }
    clamp() {
        this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8,
        this.words.length = Math.ceil(this.sigBytes / 4)
    }
    clone() {
        return new p([...this.words])
    }
}
const Q = {
    stringify(r) {
        const i = [];
        for (let n = 0; n < r.sigBytes; n++) {
            const t = r.words[n >>> 2] >>> 24 - n % 4 * 8 & 255;
            i.push((t >>> 4).toString(16), (t & 15).toString(16))
        }
        return i.join("")
    }
}
  , Z = {
    stringify(r) {
        const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
          , n = [];
        for (let t = 0; t < r.sigBytes; t += 3) {
            const e = r.words[t >>> 2] >>> 24 - t % 4 * 8 & 255
              , o = r.words[t + 1 >>> 2] >>> 24 - (t + 1) % 4 * 8 & 255
              , s = r.words[t + 2 >>> 2] >>> 24 - (t + 2) % 4 * 8 & 255
              , a = e << 16 | o << 8 | s;
            for (let c = 0; c < 4 && t * 8 + c * 6 < r.sigBytes * 8; c++)
                n.push(i.charAt(a >>> 6 * (3 - c) & 63))
        }
        return n.join("")
    }
}
  , tt = {
    parse(r) {
        const i = r.length
          , n = [];
        for (let t = 0; t < i; t++)
            n[t >>> 2] |= (r.charCodeAt(t) & 255) << 24 - t % 4 * 8;
        return new p(n,i)
    }
}
  , et = {
    parse(r) {
        return tt.parse(unescape(encodeURIComponent(r)))
    }
};
class rt {
    constructor() {
        this._data = new p,
        this._nDataBytes = 0,
        this._minBufferSize = 0,
        this.blockSize = 512 / 32
    }
    reset() {
        this._data = new p,
        this._nDataBytes = 0
    }
    _append(i) {
        typeof i == "string" && (i = et.parse(i)),
        this._data.concat(i),
        this._nDataBytes += i.sigBytes
    }
    _doProcessBlock(i, n) {}
    _process(i) {
        let n, t = this._data.sigBytes / (this.blockSize * 4);
        i ? t = Math.ceil(t) : t = Math.max((t | 0) - this._minBufferSize, 0);
        const e = t * this.blockSize
          , o = Math.min(e * 4, this._data.sigBytes);
        if (e) {
            for (let s = 0; s < e; s += this.blockSize)
                this._doProcessBlock(this._data.words, s);
            n = this._data.words.splice(0, e),
            this._data.sigBytes -= o
        }
        return new p(n,o)
    }
}
class nt extends rt {
    update(i) {
        return this._append(i),
        this._process(),
        this
    }
    finalize(i) {
        i && this._append(i)
    }
}
const E = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225]
  , it = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]
  , y = [];
class st extends nt {
    constructor() {
        super(...arguments),
        this._hash = new p([...E])
    }
    reset() {
        super.reset(),
        this._hash = new p([...E])
    }
    _doProcessBlock(i, n) {
        const t = this._hash.words;
        let e = t[0]
          , o = t[1]
          , s = t[2]
          , a = t[3]
          , c = t[4]
          , u = t[5]
          , f = t[6]
          , h = t[7];
        for (let l = 0; l < 64; l++) {
            if (l < 16)
                y[l] = i[n + l] | 0;
            else {
                const w = y[l - 15]
                  , P = (w << 25 | w >>> 7) ^ (w << 14 | w >>> 18) ^ w >>> 3
                  , m = y[l - 2]
                  , F = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                y[l] = P + y[l - 7] + F + y[l - 16]
            }
            const g = c & u ^ ~c & f
              , k = e & o ^ e & s ^ o & s
              , b = (e << 30 | e >>> 2) ^ (e << 19 | e >>> 13) ^ (e << 10 | e >>> 22)
              , U = (c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25)
              , v = h + U + g + it[l] + y[l]
              , L = b + k;
            h = f,
            f = u,
            u = c,
            c = a + v | 0,
            a = s,
            s = o,
            o = e,
            e = v + L | 0
        }
        t[0] = t[0] + e | 0,
        t[1] = t[1] + o | 0,
        t[2] = t[2] + s | 0,
        t[3] = t[3] + a | 0,
        t[4] = t[4] + c | 0,
        t[5] = t[5] + u | 0,
        t[6] = t[6] + f | 0,
        t[7] = t[7] + h | 0
    }
    finalize(i) {
        super.finalize(i);
        const n = this._nDataBytes * 8
          , t = this._data.sigBytes * 8;
        return this._data.words[t >>> 5] |= 128 << 24 - t % 32,
        this._data.words[(t + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296),
        this._data.words[(t + 64 >>> 9 << 4) + 15] = n,
        this._data.sigBytes = this._data.words.length * 4,
        this._process(),
        this._hash
    }
}
function ot(r) {
    return new st().finalize(r).toString(Z)
}
function yt(r, i={}) {
    const n = typeof r == "string" ? r : _(r, i);
    return ot(n).slice(0, 10)
}
function at(r, i, n={}) {
    return r === i || _(r, n) === _(i, n)
}
function d(r) {
    if (typeof r != "object")
        return r;
    var i, n, t = Object.prototype.toString.call(r);
    if (t === "[object Object]") {
        if (r.constructor !== Object && typeof r.constructor == "function") {
            n = new r.constructor;
            for (i in r)
                r.hasOwnProperty(i) && n[i] !== r[i] && (n[i] = d(r[i]))
        } else {
            n = {};
            for (i in r)
                i === "__proto__" ? Object.defineProperty(n, i, {
                    value: d(r[i]),
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }) : n[i] = d(r[i])
        }
        return n
    }
    if (t === "[object Array]") {
        for (i = r.length,
        n = Array(i); i--; )
            n[i] = d(r[i]);
        return n
    }
    return t === "[object Set]" ? (n = new Set,
    r.forEach(function(e) {
        n.add(d(e))
    }),
    n) : t === "[object Map]" ? (n = new Map,
    r.forEach(function(e, o) {
        n.set(d(o), d(e))
    }),
    n) : t === "[object Date]" ? new Date(+r) : t === "[object RegExp]" ? (n = new RegExp(r.source,r.flags),
    n.lastIndex = r.lastIndex,
    n) : t === "[object DataView]" ? new r.constructor(d(r.buffer)) : t === "[object ArrayBuffer]" ? r.slice(0) : t.slice(-6) === "Array]" ? new r.constructor(r) : r
}
const ct = {
    path: "/",
    watch: !0,
    decode: r=>H(decodeURIComponent(r)),
    encode: r=>encodeURIComponent(typeof r == "string" ? r : JSON.stringify(r))
}
  , ut = void 0;
function lt(r, i) {
    var c;
    const n = {
        ...ct,
        ...i
    }
      , t = O(n) || {};
    let e;
    n.maxAge !== void 0 ? e = n.maxAge * 1e3 : n.expires && (e = n.expires.getTime() - Date.now());
    const o = e !== void 0 && e <= 0
      , s = d(o ? void 0 : t[r] ?? ((c = n.default) == null ? void 0 : c.call(n)))
      , a = e && !o ? dt(s, e, n.watch && n.watch !== "shallow") : j(s);
    {
        let u = null;
        try {
            !ut && typeof BroadcastChannel < "u" && (u = new BroadcastChannel(`nuxt:cookies:${r}`))
        } catch {}
        const f = ()=>{
            n.readonly || at(a.value, t[r]) || (ht(r, a.value, n),
            t[r] = d(a.value),
            u == null || u.postMessage({
                value: n.encode(a.value)
            }))
        }
          , h = g=>{
            var b;
            const k = g.refresh ? (b = O(n)) == null ? void 0 : b[r] : n.decode(g.value);
            l = !0,
            t[r] = a.value = k,
            K(()=>{
                l = !1
            }
            )
        }
        ;
        let l = !1;
        z() && R(()=>{
            l = !0,
            f(),
            u == null || u.close()
        }
        ),
        u && (u.onmessage = ({data: g})=>h(g)),
        n.watch ? D(a, ()=>{
            l || f()
        }
        , {
            deep: n.watch !== "shallow"
        }) : f()
    }
    return a
}
function O(r={}) {
    return J(document.cookie, r)
}
function ft(r, i, n={}) {
    return i == null ? x(r, i, {
        ...n,
        maxAge: -1
    }) : x(r, i, n)
}
function ht(r, i, n={}) {
    document.cookie = ft(r, i, n)
}
const T = 2147483647;
function dt(r, i, n) {
    let t, e, o = 0;
    const s = n ? j(r) : {
        value: r
    };
    return z() && R(()=>{
        e == null || e(),
        clearTimeout(t)
    }
    ),
    I((a,c)=>{
        n && (e = D(s, c));
        function u() {
            clearTimeout(t);
            const f = i - o
              , h = f < T ? f : T;
            t = setTimeout(()=>{
                if (o += h,
                o < i)
                    return u();
                s.value = void 0,
                c()
            }
            , h)
        }
        return {
            get() {
                return a(),
                s.value
            },
            set(f) {
                u(),
                s.value = f,
                c()
            }
        }
    }
    )
}
const gt = (r=B("authOption"))=>{
    if (r.preferCookie) {
        const i = lt("auth_cookie");
        return i.value = i.value || B("auth"),
        i
    }
    return V("auth_state", ()=>B("auth"))
}
;
export {lt as a, yt as h, gt as u};