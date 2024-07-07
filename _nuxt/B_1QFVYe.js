var q = Object.defineProperty;
var B = (l,t,e)=>t in l ? q(l, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : l[t] = e;
var p = (l,t,e)=>(B(l, typeof t != "symbol" ? t + "" : t, e),
e);
import {g as W, S as T, v as P} from "./Dsfj8rDd.js";
function D(l, t, e) {
    return Math.max(l, Math.min(t, e))
}
class j {
    advance(t) {
        var h;
        if (!this.isRunning)
            return;
        let e = !1;
        if (this.lerp)
            this.value = (i = this.value,
            s = this.to,
            o = 60 * this.lerp,
            n = t,
            function(r, a, u) {
                return (1 - u) * r + u * a
            }(i, s, 1 - Math.exp(-o * n))),
            Math.round(this.value) === this.to && (this.value = this.to,
            e = !0);
        else {
            this.currentTime += t;
            const r = D(0, this.currentTime / this.duration, 1);
            e = r >= 1;
            const a = e ? 1 : this.easing(r);
            this.value = this.from + (this.to - this.from) * a
        }
        var i, s, o, n;
        (h = this.onUpdate) == null || h.call(this, this.value, e),
        e && this.stop()
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(t, e, {lerp: i=.1, duration: s=1, easing: o=r=>r, onStart: n, onUpdate: h}) {
        this.from = this.value = t,
        this.to = e,
        this.lerp = i,
        this.duration = s,
        this.easing = o,
        this.currentTime = 0,
        this.isRunning = !0,
        n == null || n(),
        this.onUpdate = h
    }
}
class F {
    constructor({wrapper: t, content: e, autoResize: i=!0, debounce: s=250}={}) {
        p(this, "resize", ()=>{
            this.onWrapperResize(),
            this.onContentResize()
        }
        );
        p(this, "onWrapperResize", ()=>{
            this.wrapper === window ? (this.width = window.innerWidth,
            this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth,
            this.height = this.wrapper.clientHeight)
        }
        );
        p(this, "onContentResize", ()=>{
            this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight,
            this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight,
            this.scrollWidth = this.wrapper.scrollWidth)
        }
        );
        this.wrapper = t,
        this.content = e,
        i && (this.debouncedResize = function(o, n) {
            let h;
            return function() {
                let r = arguments
                  , a = this;
                clearTimeout(h),
                h = setTimeout(function() {
                    o.apply(a, r)
                }, n)
            }
        }(this.resize, s),
        this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize),
        this.wrapperResizeObserver.observe(this.wrapper)),
        this.contentResizeObserver = new ResizeObserver(this.debouncedResize),
        this.contentResizeObserver.observe(this.content)),
        this.resize()
    }
    destroy() {
        var t, e;
        (t = this.wrapperResizeObserver) == null || t.disconnect(),
        (e = this.contentResizeObserver) == null || e.disconnect(),
        window.removeEventListener("resize", this.debouncedResize, !1)
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
class X {
    constructor() {
        this.events = {}
    }
    emit(t, ...e) {
        let i = this.events[t] || [];
        for (let s = 0, o = i.length; s < o; s++)
            i[s](...e)
    }
    on(t, e) {
        var i;
        return (i = this.events[t]) != null && i.push(e) || (this.events[t] = [e]),
        ()=>{
            var s;
            this.events[t] = (s = this.events[t]) == null ? void 0 : s.filter(o=>e !== o)
        }
    }
    off(t, e) {
        var i;
        this.events[t] = (i = this.events[t]) == null ? void 0 : i.filter(s=>e !== s)
    }
    destroy() {
        this.events = {}
    }
}
const O = 100 / 6;
class K {
    constructor(t, {wheelMultiplier: e=1, touchMultiplier: i=1}) {
        p(this, "onTouchStart", t=>{
            const {clientX: e, clientY: i} = t.targetTouches ? t.targetTouches[0] : t;
            this.touchStart.x = e,
            this.touchStart.y = i,
            this.lastDelta = {
                x: 0,
                y: 0
            },
            this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: t
            })
        }
        );
        p(this, "onTouchMove", t=>{
            const {clientX: e, clientY: i} = t.targetTouches ? t.targetTouches[0] : t
              , s = -(e - this.touchStart.x) * this.touchMultiplier
              , o = -(i - this.touchStart.y) * this.touchMultiplier;
            this.touchStart.x = e,
            this.touchStart.y = i,
            this.lastDelta = {
                x: s,
                y: o
            },
            this.emitter.emit("scroll", {
                deltaX: s,
                deltaY: o,
                event: t
            })
        }
        );
        p(this, "onTouchEnd", t=>{
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: t
            })
        }
        );
        p(this, "onWheel", t=>{
            let {deltaX: e, deltaY: i, deltaMode: s} = t;
            e *= s === 1 ? O : s === 2 ? this.windowWidth : 1,
            i *= s === 1 ? O : s === 2 ? this.windowHeight : 1,
            e *= this.wheelMultiplier,
            i *= this.wheelMultiplier,
            this.emitter.emit("scroll", {
                deltaX: e,
                deltaY: i,
                event: t
            })
        }
        );
        p(this, "onWindowResize", ()=>{
            this.windowWidth = window.innerWidth,
            this.windowHeight = window.innerHeight
        }
        );
        this.element = t,
        this.wheelMultiplier = e,
        this.touchMultiplier = i,
        this.touchStart = {
            x: null,
            y: null
        },
        this.emitter = new X,
        window.addEventListener("resize", this.onWindowResize, !1),
        this.onWindowResize(),
        this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }),
        this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }),
        this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }),
        this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
    on(t, e) {
        return this.emitter.on(t, e)
    }
    destroy() {
        this.emitter.destroy(),
        window.removeEventListener("resize", this.onWindowResize, !1),
        this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1
        }),
        this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }),
        this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }),
        this.element.removeEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
}
class G {
    constructor({wrapper: t=window, content: e=document.documentElement, wheelEventsTarget: i=t, eventsTarget: s=i, smoothWheel: o=!0, syncTouch: n=!1, syncTouchLerp: h=.075, touchInertiaMultiplier: r=35, duration: a, easing: u=d=>Math.min(1, 1.001 - Math.pow(2, -10 * d)), lerp: c=!a && .1, infinite: S=!1, orientation: z="vertical", gestureOrientation: Y="vertical", touchMultiplier: k=1, wheelMultiplier: x=1, autoResize: H=!0, __experimental__naiveDimensions: A=!1}={}) {
        this.__isSmooth = !1,
        this.__isScrolling = !1,
        this.__isStopped = !1,
        this.__isLocked = !1,
        this.onVirtualScroll = ({deltaX: d, deltaY: w, event: m})=>{
            if (m.ctrlKey)
                return;
            const f = m.type.includes("touch")
              , N = m.type.includes("wheel");
            if (this.options.syncTouch && f && m.type === "touchstart" && !this.isStopped && !this.isLocked)
                return void this.reset();
            const U = d === 0 && w === 0
              , V = this.options.gestureOrientation === "vertical" && w === 0 || this.options.gestureOrientation === "horizontal" && d === 0;
            if (U || V)
                return;
            let y = m.composedPath();
            if (y = y.slice(0, y.indexOf(this.rootElement)),
            y.find(g=>{
                var E, L, M, R, b;
                return ((E = g.hasAttribute) === null || E === void 0 ? void 0 : E.call(g, "data-lenis-prevent")) || f && ((L = g.hasAttribute) === null || L === void 0 ? void 0 : L.call(g, "data-lenis-prevent-touch")) || N && ((M = g.hasAttribute) === null || M === void 0 ? void 0 : M.call(g, "data-lenis-prevent-wheel")) || ((R = g.classList) === null || R === void 0 ? void 0 : R.contains("lenis")) && !(!((b = g.classList) === null || b === void 0) && b.contains("lenis-stopped"))
            }
            ))
                return;
            if (this.isStopped || this.isLocked)
                return void m.preventDefault();
            if (this.isSmooth = this.options.syncTouch && f || this.options.smoothWheel && N,
            !this.isSmooth)
                return this.isScrolling = !1,
                void this.animate.stop();
            m.preventDefault();
            let _ = w;
            this.options.gestureOrientation === "both" ? _ = Math.abs(w) > Math.abs(d) ? w : d : this.options.gestureOrientation === "horizontal" && (_ = d);
            const I = f && this.options.syncTouch
              , C = f && m.type === "touchend" && Math.abs(_) > 5;
            C && (_ = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + _, Object.assign({
                programmatic: !1
            }, I ? {
                lerp: C ? this.options.syncTouchLerp : 1
            } : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing
            }))
        }
        ,
        this.onNativeScroll = ()=>{
            if (!this.__preventNextScrollEvent && !this.isScrolling) {
                const d = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll,
                this.velocity = 0,
                this.direction = Math.sign(this.animatedScroll - d),
                this.emit()
            }
        }
        ,
        window.lenisVersion = "1.0.42",
        t !== document.documentElement && t !== document.body || (t = window),
        this.options = {
            wrapper: t,
            content: e,
            wheelEventsTarget: i,
            eventsTarget: s,
            smoothWheel: o,
            syncTouch: n,
            syncTouchLerp: h,
            touchInertiaMultiplier: r,
            duration: a,
            easing: u,
            lerp: c,
            infinite: S,
            gestureOrientation: Y,
            orientation: z,
            touchMultiplier: k,
            wheelMultiplier: x,
            autoResize: H,
            __experimental__naiveDimensions: A
        },
        this.animate = new j,
        this.emitter = new X,
        this.dimensions = new F({
            wrapper: t,
            content: e,
            autoResize: H
        }),
        this.toggleClassName("lenis", !0),
        this.velocity = 0,
        this.isLocked = !1,
        this.isStopped = !1,
        this.isSmooth = n || o,
        this.isScrolling = !1,
        this.targetScroll = this.animatedScroll = this.actualScroll,
        this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
        this.virtualScroll = new K(s,{
            touchMultiplier: k,
            wheelMultiplier: x
        }),
        this.virtualScroll.on("scroll", this.onVirtualScroll)
    }
    destroy() {
        this.emitter.destroy(),
        this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.toggleClassName("lenis", !1),
        this.toggleClassName("lenis-smooth", !1),
        this.toggleClassName("lenis-scrolling", !1),
        this.toggleClassName("lenis-stopped", !1),
        this.toggleClassName("lenis-locked", !1)
    }
    on(t, e) {
        return this.emitter.on(t, e)
    }
    off(t, e) {
        return this.emitter.off(t, e)
    }
    setScroll(t) {
        this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t
    }
    resize() {
        this.dimensions.resize()
    }
    emit() {
        this.emitter.emit("scroll", this)
    }
    reset() {
        this.isLocked = !1,
        this.isScrolling = !1,
        this.animatedScroll = this.targetScroll = this.actualScroll,
        this.velocity = 0,
        this.animate.stop()
    }
    start() {
        this.isStopped && (this.isStopped = !1,
        this.reset())
    }
    stop() {
        this.isStopped || (this.isStopped = !0,
        this.animate.stop(),
        this.reset())
    }
    raf(t) {
        const e = t - (this.time || t);
        this.time = t,
        this.animate.advance(.001 * e)
    }
    scrollTo(t, {offset: e=0, immediate: i=!1, lock: s=!1, duration: o=this.options.duration, easing: n=this.options.easing, lerp: h=!o && this.options.lerp, onComplete: r, force: a=!1, programmatic: u=!0}={}) {
        if (!this.isStopped && !this.isLocked || a) {
            if (["top", "left", "start"].includes(t))
                t = 0;
            else if (["bottom", "right", "end"].includes(t))
                t = this.limit;
            else {
                let c;
                if (typeof t == "string" ? c = document.querySelector(t) : t != null && t.nodeType && (c = t),
                c) {
                    if (this.options.wrapper !== window) {
                        const z = this.options.wrapper.getBoundingClientRect();
                        e -= this.isHorizontal ? z.left : z.top
                    }
                    const S = c.getBoundingClientRect();
                    t = (this.isHorizontal ? S.left : S.top) + this.animatedScroll
                }
            }
            if (typeof t == "number") {
                if (t += e,
                t = Math.round(t),
                this.options.infinite ? u && (this.targetScroll = this.animatedScroll = this.scroll) : t = D(0, t, this.limit),
                i)
                    return this.animatedScroll = this.targetScroll = t,
                    this.setScroll(this.scroll),
                    this.reset(),
                    void (r == null || r(this));
                if (!u) {
                    if (t === this.targetScroll)
                        return;
                    this.targetScroll = t
                }
                this.animate.fromTo(this.animatedScroll, t, {
                    duration: o,
                    easing: n,
                    lerp: h,
                    onStart: ()=>{
                        s && (this.isLocked = !0),
                        this.isScrolling = !0
                    }
                    ,
                    onUpdate: (c,S)=>{
                        this.isScrolling = !0,
                        this.velocity = c - this.animatedScroll,
                        this.direction = Math.sign(this.velocity),
                        this.animatedScroll = c,
                        this.setScroll(this.scroll),
                        u && (this.targetScroll = c),
                        S || this.emit(),
                        S && (this.reset(),
                        this.emit(),
                        r == null || r(this),
                        this.__preventNextScrollEvent = !0,
                        requestAnimationFrame(()=>{
                            delete this.__preventNextScrollEvent
                        }
                        ))
                    }
                })
            }
        }
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal"
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
    }
    get scroll() {
        return this.options.infinite ? (t = this.animatedScroll,
        e = this.limit,
        (t % e + e) % e) : this.animatedScroll;
        var t, e
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isSmooth() {
        return this.__isSmooth
    }
    set isSmooth(t) {
        this.__isSmooth !== t && (this.__isSmooth = t,
        this.toggleClassName("lenis-smooth", t))
    }
    get isScrolling() {
        return this.__isScrolling
    }
    set isScrolling(t) {
        this.__isScrolling !== t && (this.__isScrolling = t,
        this.toggleClassName("lenis-scrolling", t))
    }
    get isStopped() {
        return this.__isStopped
    }
    set isStopped(t) {
        this.__isStopped !== t && (this.__isStopped = t,
        this.toggleClassName("lenis-stopped", t))
    }
    get isLocked() {
        return this.__isLocked
    }
    set isLocked(t) {
        this.__isLocked !== t && (this.__isLocked = t,
        this.toggleClassName("lenis-locked", t))
    }
    get className() {
        let t = "lenis";
        return this.isStopped && (t += " lenis-stopped"),
        this.isLocked && (t += " lenis-locked"),
        this.isScrolling && (t += " lenis-scrolling"),
        this.isSmooth && (t += " lenis-smooth"),
        t
    }
    toggleClassName(t, e) {
        this.rootElement.classList.toggle(t, e),
        this.emitter.emit("className change", this)
    }
}
W.registerPlugin(T);
let v;
const Z = ()=>{
    const l = ()=>{
        v = new G({}),
        v.on("scroll", T.update),
        v.on("scroll", T.refresh),
        W.ticker.add(o=>{
            v.raf(o * 1e3)
        }
        ),
        W.ticker.lagSmoothing(0),
        e()
    }
      , t = ()=>{
        T.refresh(!0),
        setTimeout(()=>{
            v.resize()
        }
        , 1e3)
    }
      , e = ()=>{
        v.stop()
    }
    ;
    return P({
        initSmoothScroll: l,
        updateScroll: t,
        lockScroll: e,
        resumeScroll: ()=>{
            v.start()
        }
        ,
        _scrollTo: (o,n)=>{
            v.scrollTo(o, n)
        }
    })
}
;
export {Z as u};